# YouTube-Floater
🎥 Standalone Floating YouTube Player

A simple app if you're on just your MacBook with one screen and it's always on top, so you can listen and see YouTube videos while they're playing and doesn't require a chrome extension, 
it's a nice to have to listen to a podcast to the background and stay focused without looking too far away from what you're working on so you can chill to low-fi music or a podcast.


Designed as a frameless, draggable, and resizable Electron-based YouTube overlay app that lets you pin a floating video on top of your desktop workspace. Designed for seamless productivity and aesthetic control with minimal UI clutter.


⚠️ Known Limitations and the solution this addresses:

This is meant to solve the problem of having to use other system hacky tools or chrome extensions and instead just makes it one simple apple app you can snap on your laptop (and soon windows)

🧩 Problems Solved (Without other solutions like SIMBL, Afloat, or SIP)
🎬 1. YouTube Pop-Out Without Browser or Chrome Extensions as well
Problem: Browsers like Chrome/Safari don’t provide persistent or easily customizable floating video windows. Extensions can help but can't escape the browser's sandbox or manage window behaviors.

✅ Solution:
A fully standalone Electron app that embeds YouTube videos in a pop-out window. No browser or extensions needed.

🌫️ 2. Adjustable Window Opacity on macOS
Problem: macOS doesn’t let you change a window’s opacity, and tools like SIMBL or Afloat require disabling SIP (a security risk), and they often break on modern macOS.

✅ Solution:
Your app uses BrowserWindow.setOpacity() via Electron—no system hacks or SIP changes required. It’s simple, stable, and works on all modern macOS versions including Apple Silicon.

📌 3. Always-on-Top Floating Window
Problem: Users want to watch YouTube while multitasking. Standard PiP features are limited and don’t allow custom placement, resizing, or an easy way to control all of the following:
Pop-out, 
Transparency, 
Volume, 
Opacity,
and the position of the window easily

This application is being tested to keep all of those seamless

✅ Solution:
Electron lets you build a customizable always-on-top, draggable, and resizable video window that snaps to corners and stays where users want it.
It will also allow deployment on other platforms

⚙️ 4. No Xcode or Apple Developer Account Needed to begin with to deploy, and it will also not require a user to sign in to YouTube or download an Application from the Mac Store for now

Problem: Traditional macOS apps require:

Xcode
A paid Apple Developer account
Sandbox entitlements and App Store compliance (this App still should be compliant with a few changes and will update to the top of the readme once submitted)

✅ Solution:
Electron apps can be built with just Node.js + JavaScript—no need for Xcode, paid developer accounts, or App Store submission.
This also make it easy to run, in case users are deep in a work session and don't want to have to download this application from Chrome Extensions and click around in other tabs

This is also easier as a standalone app currently so a user is not distracted by their Apple Billing Info, they may need to bring their account current if they manually pay their Apple Bill before they can download a new app from Apple's Mac App Store.

🛡️ 5. Fully Compatible & Future-Proof
Problem: Afloat and SIMBL are deprecated, unstable, or outright incompatible with macOS versions like Sonoma, Sequoia, and Apple Silicon. Updates often break functionality.
Many of the previous builds were built on Sonoma or earlier and not for macOS Sequoia 15 or later for macOS 26 Tahoe, with the amount of people who enjoy listening to YouTube in the background this will allow it to be easily updated

✅ Solution:
An electron is cross-platform, under active development, and Apple Silicon compatible. It doesn't rely on system level hacks and won’t break with macOS updates.
It works out of the box.
However, other deployments could also be considered in the future

🔒 In Summary
                                        This App  ❌ SIMBL / Afloat / Chrome Extensions
✅ Modern macOS Compatibility	            ✅ Yes	❌ No (SIP conflict)
🧠 Apple Silicon Native Support	          ✅ Yes	❌ No
🌫️ Adjustable Window Opacity	            ✅ Yes	⚠️ Unstable
🎬 Standalone YouTube Pop-Out Player	    ✅ Yes	❌ Requires combo
🛠️ No Xcode / Dev Program Needed	        ✅ Yes	❌ No
📦 Easy Distribution (DMG/ZIP)	          ✅ Yes	❌ No
🔐 No System Hacks / SIP Changes	        ✅ Yes	❌ No



🛠️ Current progress and to-dos
 Add support for playlists
 Enable persistent state (e.g., window position, volume)
 Add dark/light theme toggle
 Add hotkey for toggling visibility (this is done now by clicking)
 Does not support login, comments, or subscriptions currently (embed-only player)
 Not tested on all OS platforms (macOS primarily)
 May be nice to add a constantly scrolling caption near or outside the player, or an AI synopsis similar to study.lol
 May add buttons to open up a custom AI summary or study.lol/YouLearn interface
 Will be resolving any discrepancies of unsigned application issues later by likely eventually getting app notarized as an Apple developed app, or include links to source code etc. as described to make app more of a seamless install...
 Will look to add update verion buttons so user doesn't have to reinstall...

 

✨ Current Working Features

🖥️ Always-on-top player with transparent background

🔗 Embed YouTube videos via URL input

🔊 Volume control + drag-to-position overlay

🌫️ Opacity slider for background blending

🧲 Snap to corners (top-left, top-right, etc.)

⬜ Custom window resizing with invisible zones

🎛️ Toggleable control panel to reduce distraction

🧭 Window drag and repositioning

🖱️ Right-click or drag-handle to move window

🌐 Open current video in browser

❌ Close / Minimize buttons

⌨️ Keyboard arrow key support for movement (removing this feature in lieu of the drag handle sides and snap to corners)

🧰 Tech Stack
Electron.js
Node.js
HTML5
CSS3
Vanilla JavaScript
YouTube Embed Player
Electron IPC (ipcMain, ipcRenderer)
Electron BrowserWindow API
Electron Packager

🚀 Getting Started
Prerequisites may not be needed for eventual App Store submissions, or Windows, and when launched as downloadable or standalone Apple Silicon App

Node.js

Electron

Install

Clone the repo:

bash
Copy
Edit
git clone https://github.com/your-username/floating-youtube-player.git
cd floating-youtube-player
Install dependencies:

bash
Copy
Edit
npm install
Start the application:

bash
Copy
Edit
npm start


📸 UI Preview

Resizable overlay window with opacity/volume sliders and draggable controls.

🧠 How It Works
Uses the YouTube embed URL to load content into an iframe

Custom drag and resize zones mimic native window manipulation

Communicates between renderer and main Electron process via ipcRenderer

Uses postMessage to control volume and playback of embedded YouTube video



You must include main.js and other Electron bootstrap files to run the app—this repo assumes you're familiar with basic Electron app structure.

