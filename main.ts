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
    --rede      se é rede [Default: false]
    --endpoint  ip ou hostname do totem
    `,
    {
    default: {
        debug: false,
        rede: false,
        ssl: false
    }
});

console.log('MODO DEBUG ATIVADO?', cli.flags.debug);
console.log('IP/HOSTNAME DO TOTEM:', cli.flags.endpoint);
console.log('PAINEL REDE?', cli.flags.rede);

app.on('ready', createWindow);

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

function createWindow() {
  win = new BrowserWindow({
    // width: 1366, height: 768,
    /*
      fullscreen: true,
      frame: false
    */
   resizable: false,
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

  // para painel em SO Windows
  shell.openItem('C:/Program Files/aris/sga/display/mouseclick.bat');

  // abre o DEVTOOLS do Chrome
  if (cli.flags.debug){
    win.webContents.openDevTools();
  }

  // fecha o electron
  win.on('closed', () => {
    win = null;
    app.quit();
  });

  ipcMain.on('com', (e, p) => comunication(e, p));
}

function comunication(e, p) {
  console.log('PARAMS', p);
  switch (p.evt) {
    case 'login':
      win.setClosable(false);
      break;
    case 'logout':
      win.setClosable(true);
      break;
    case 'startup':
      e.returnValue = { endpoint: cli.flags.endpoint, ssl: Boolean(cli.flags.ssl), debug: cli.flags.debug, rede: cli.flags.rede };
      break;
    case 'notify':
      console.log(p.data);
    break;
  }
}
