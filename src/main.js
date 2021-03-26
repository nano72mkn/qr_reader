const { BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      devTools: process.env.NODE_ENV === "dev",
      webviewTag: true,
      alwaysOnTop: true,
      fullscreen: true,
    },
  });

  if (process.env.NODE_ENV === "dev") win.webContents.openDevTools();

  win.loadFile("index.html");
}
