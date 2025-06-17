# 🎥 YouTube-Floater
**Note**: Due to YouTube's CORS restrictions, playback may stop after the first few plays and you may get an error; restart your computer or network to resume. Videos play instantly on first launch and play, then set

1. Download the `.dmg` file from  ****
2. Open the `.dmg` and drag the app to your **Applications** folder just like any other Apple app.
3. Launch the app from **Applications** and enjoy!


## 📊 Project Details
A lightweight YouTube player with some key features:
Easily snaps to screen corners to move around your workspace if your are on one screen and still want to enjoy a podcast, 
Controls to fade opacity, controls volume independently, and stays on top of other windows.
Perfect for distraction-free podcasts or lo-fi music. 

Runs as a Mac application so you can minimize it to your dock if you'd like, instead of dealing with any chrome extensions or the App Store



## Installation (macOS)


Feedback, submitting any issues, and PRs welcome especially to help track any console log issues and address the CORS (Cross-Origin Resource Sharing) restrictions

**Progress:**  
🔵🔵🔵🔵🔵🔵🔵🔵⚪ 95%


More details:
**Standalone Floating YouTube Player for macOS**

A simple app for MacBook users (especially those with just one screen) that stays always on top — allowing you to listen to and view YouTube videos while working,
and easily adjust the volume, position, and opacity.

You don't need a Chrome extension, and it helps you stay focused by keeping your lo-fi music or podcast nearby — without taking up browser space or risking distractions.

---

## 🧩 Problems Solved (Without SIMBL, Afloat, or SIP)

### 🎬 1. YouTube Pop-Out Without Browser or Extensions

**Problem:**  
Browsers like Chrome/Safari don’t provide persistent or easily customizable floating video windows. Extensions help, but can't escape the browser sandbox or manage native window behaviors.

**✅ Solution:**  
A fully standalone Electron app that embeds YouTube videos in a pop-out window. No browser or extensions needed.

---

### 🌫️ 2. Adjustable Window Opacity on macOS

**Problem:**  
macOS doesn’t allow native window opacity control. Tools like SIMBL/Afloat require **disabling SIP**, which is a security risk — and they break on modern macOS versions.

**✅ Solution:**  
Uses `BrowserWindow.setOpacity()` in Electron — no system hacks, no SIP modification. Just smooth, adjustable transparency that works on Apple Silicon and latest macOS versions.

---

### 📌 3. Always-on-Top Floating Window

**Problem:**  
Built-in Picture-in-Picture features lack:

- Resizing flexibility  
- Easy repositioning  
- Transparency control  
- Combined control over pop-out, volume, opacity, and position

**✅ Solution:**  
This Electron app is always-on-top, resizable, draggable, and has snapping corners. It’s currently in testing to keep all controls seamless — and works as a distraction-free, standalone utility.

---

### ⚙️ 4. No Xcode or Apple Developer Account Needed (Yet)

**Problem:**  
Native macOS development typically requires:

- Xcode  
- A $99/year Apple Developer Account  
- App Store entitlements  
- Apple billing setup for users to download apps

**✅ Solution:**  
Built entirely with Electron (Node.js + JS) — no Apple tools or App Store required. You can run the `.app` directly, even during a work session, without opening Chrome, managing billing, or signing in.

---

### 🛡️ 5. Fully Compatible & Future-Proof

**Problem:**  
Older tools like Afloat and SIMBL don’t work on modern systems (Sonoma, Sequoia, or Apple Silicon). Updates break support, and they were designed for Sonoma and backward compatibility not for macOS 15 (Sequoia) or upcoming macOS 16 (Tahoe).

**✅ Solution:**  
Electron is actively maintained, cross-platform, and **Apple Silicon compatible** out of the box. No system-level hacks. Just run and go.

---

## 🔒 In Summary

| Feature                                     | ✅ YouTube-Floater | ❌ SIMBL / Afloat / Extensions |
|---------------------------------------------|--------------------|-------------------------------|
| Modern macOS Compatibility                  | ✅ Yes             | ❌ No (SIP conflict)           |
| Apple Silicon Native Support                | ✅ Yes             | ❌ No                          |
| Adjustable Window Opacity                   | ✅ Yes             | ⚠️ Unstable                   |
| Standalone YouTube Pop-Out Player           | ✅ Yes             | ❌ Requires combo             |
| No Xcode / Apple Developer Program Needed   | ✅ Yes             | ❌ No                          |
| Easy Distribution (DMG / ZIP)               | ✅ Yes             | ❌ No                          |
| No System Hacks or SIP Changes              | ✅ Yes             | ❌ No                          |

---

## 🛠️ Current Progress & To-Dos

- [ ] Add support for playlists  
- [ ] Enable persistent state (e.g., window position, volume)  
- [ ] Add dark/light theme toggle  
- [x] Add hotkey or button to toggle visibility (clickable UI)  
- [ ] Caption/summary feature (e.g., integrate with Study.LOL or YouLearn)  
- [ ] Add AI-powered synopsis or assistant  
- [ ] Add auto-update or "check for updates" feature  
- [ ] Optional: App notarization & Apple Developer release  

---

## ✨ Current Working Features

- 🖥️ Always-on-top player with transparent background  
- 🔗 Embed YouTube videos via URL input  
- 🔊 Volume control + drag-to-position overlay  
- 🌫️ Opacity slider for background blending  
- 🧲 Snap to corners (top-left, top-right, etc.)  
- ⬜ Custom window resizing with invisible zones  
- 🎛️ Toggleable control panel to reduce distraction  
- 🧭 Window drag and repositioning  
- 🖱️ Right-click or drag-handle to move window  
- 🌐 Open current video in browser  
- ❌ Close / Minimize buttons  
- ⌨️ (Deprecated) Keyboard arrow key movement — replaced by drag+snap  

---

## 🧰 Tech Stack


- Electron.js
- Node.js
- HTML5
- CSS3
- Vanilla JavaScript
- YouTube Embed Player
- Electron IPC (ipcMain, ipcRenderer)
- Electron BrowserWindow API
- Electron Packager


---

## 🚀 Getting Started

> These steps are for local development. A downloadable `.app` or `.dmg` for Apple Silicon is coming soon!

### Prerequisites

- Node.js  
- Electron (installed via npm)

📸 UI Preview
Resizable overlay window with opacity and volume sliders, draggable controls, and snap-to-corner positioning. (Add screenshot here if you have one)

🧠 How It Works

Uses YouTube embed URLs (youtube.com/embed/...)

Loads iframe in a transparent Electron window

Communicates between renderer and main process via ipcRenderer / ipcMain

Uses postMessage to control volume & playback (within iframe sandbox limits)

Drag handles and snap logic allow intuitive movement & positioning

Opacity control via BrowserWindow.setOpacity()

### Install
Project is still in testing

```bash
git clone https://github.com/your-username/youtube-floater.git
cd youtube-floater
npm install
npm start



