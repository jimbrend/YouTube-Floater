const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const screen = require('electron').screen;

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    frame: false,
    transparent: true,
    resizable: true,
    minWidth: 400,
    minHeight: 300
  });

  win.loadFile('index.html');

  // Handle window dragging
  ipcMain.on('set-window-position', (event, { x, y }) => {
    win.setPosition(x, y);
  });

  // Handle opacity changes
  ipcMain.on('set-opacity', (event, opacity) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    win.setOpacity(opacity / 100); // Convert percentage to decimal
  });

  // Handle window close
  ipcMain.on('close-app', () => {
    app.quit();
  });

  // Handle window minimize
  ipcMain.on('minimize-window', () => {
    win.minimize();
  });

  // Handle opening URLs in default browser
  ipcMain.on('open-in-browser', (event, url) => {
    shell.openExternal(url);
  });

  // Handle window movement
  ipcMain.on('move-window', (event, direction) => {
    const [x, y] = win.getPosition();
    const step = 5; // 5 pixels per step

    switch (direction) {
      case 'up':
        win.setPosition(x, y - step);
        break;
      case 'down':
        win.setPosition(x, y + step);
        break;
      case 'left':
        win.setPosition(x - step, y);
        break;
      case 'right':
        win.setPosition(x + step, y);
        break;
    }
  });

  // Handle getting window position
  ipcMain.handle('get-window-position', () => {
    return win.getPosition();
  });

  // Handle resize events
  ipcMain.on('start-resize', (event, edge) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    const bounds = win.getBounds();
    const mousePos = screen.getCursorScreenPoint();

    switch(edge) {
      case 'top':
        win.setBounds({
          x: bounds.x,
          y: mousePos.y,
          width: bounds.width,
          height: bounds.height + (bounds.y - mousePos.y)
        });
        break;
      case 'left':
        win.setBounds({
          x: mousePos.x,
          y: bounds.y,
          width: bounds.width + (bounds.x - mousePos.x),
          height: bounds.height
        });
        break;
      case 'right':
        win.setBounds({
          x: bounds.x,
          y: bounds.y,
          width: mousePos.x - bounds.x,
          height: bounds.height
        });
        break;
      case 'top-left':
        win.setBounds({
          x: mousePos.x,
          y: mousePos.y,
          width: bounds.width + (bounds.x - mousePos.x),
          height: bounds.height + (bounds.y - mousePos.y)
        });
        break;
      case 'top-right':
        win.setBounds({
          x: bounds.x,
          y: mousePos.y,
          width: mousePos.x - bounds.x,
          height: bounds.height + (bounds.y - mousePos.y)
        });
        break;
    }
  });

  ipcMain.on('resize-window', (event, { deltaX, deltaY, startWidth, startHeight }) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    const bounds = win.getBounds();
    const mousePos = screen.getCursorScreenPoint();

    // Calculate new dimensions based on the drag direction
    const newWidth = Math.max(400, startWidth + deltaX);
    const newHeight = Math.max(300, startHeight + deltaY);

    win.setBounds({
      x: bounds.x,
      y: bounds.y,
      width: newWidth,
      height: newHeight
    });
  });

  // Handle volume changes
  ipcMain.on('set-volume', (event, volume) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    win.webContents.send('set-player-volume', volume);
  });

  // Handle corner positioning
  ipcMain.on('move-to-corner', (event, corner) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    const { width, height } = win.getBounds();
    const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().workAreaSize;
    const margin = 20; // 20px margin from screen edges

    let x, y;
    switch(corner) {
      case 'top-left':
        x = margin;
        y = margin;
        break;
      case 'top-right':
        x = screenWidth - width - margin;
        y = margin;
        break;
      case 'bottom-left':
        x = margin;
        y = screenHeight - height - margin;
        break;
      case 'bottom-right':
        x = screenWidth - width - margin;
        y = screenHeight - height - margin;
        break;
    }

    win.setPosition(x, y);
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
}); 