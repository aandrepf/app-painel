import { app, BrowserWindow, powerSaveBlocker, shell , ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';
const args = require('electron-args');

// tslint:disable-next-line:prefer-const
let win: BrowserWindow;
let cli = args(`
    app
    Usage
    $ app --arg
    $ app --arg=value
    Options
    --debug     modo debug [Default: false]
    --ssl       protocolo de segurança [Default: false]
    --endpoint  ip ou hostname do totem
    `,
    {
    default: {
        debug: false,
        ssl: false
    }
});

console.log('MODO DEBUG ATIVADO?', cli.flags.debug);

app.on('ready', createWindow);

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

ipcMain.on('com', (e, data) => handleWebview(e, data));

function handleWebview(e, p) {
  if (p === 'tocar') {
    // shell.openItem('C:/Program Files/aris/sga/display/ding.vbs');
  }
}

function createWindow() {
  win = new BrowserWindow({
    // width: 1366, height: 768,
    /*
      fullscreen: true,
      frame: false
    */
    kiosk: true
  });

  // Previne o display de entrar em modo sleep
  powerSaveBlocker.start('prevent-display-sleep');

  win.setAutoHideMenuBar(true);

  // carrega a aplicação baseada no local onde esta o app minificado
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `./dist/index.html`),
      protocol: 'file:',
      slashes: true,
    })
  );

  /* para painel em SO Windows
    shell.openItem('C:Users/Desenvolvimento/Desktop/mouseclick.bat');
    shell.openItem('C:Users/Desenvolvimento/Desktop/sound.vbs');
  */

  // abre o DEVTOOLS do Chrome
  if (cli.flags.debug){
    win.webContents.openDevTools();
  }

  // fecha o electron
  win.on('closed', () => {
    win = null;
    app.quit();
  });
}
