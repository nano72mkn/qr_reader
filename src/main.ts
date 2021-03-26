import { app, BrowserWindow } from 'electron';
import path from 'path';

const getResourceDirectory = () => {
  return process.env.NODE_ENV === 'development'
    ? path.join(process.cwd(), 'dist')
    : path.join(process.resourcesPath, 'app.asar.unpacked', 'dist');
};

const createWindow = () => {
  console.log(process.env.NODE_ENV);
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      devTools: process.env.NODE_ENV === 'development',
      webviewTag: true,
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.resolve(getResourceDirectory(), 'preload.js'),
    },
    fullscreen: true,
  });

  if (process.env.NODE_ENV === 'development') win.webContents.openDevTools();

  win.loadFile('dist/index.html');
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
