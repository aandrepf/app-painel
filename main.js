"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var args = require('electron-args');
// tslint:disable-next-line:prefer-const
var win;
var cli = args("\n    app\n    Usage\n    $ app --arg\n    $ app --arg=value\n    Options\n    --debug     modo debug [Default: false]\n    --ssl       protocolo de seguran\u00E7a [Default: false]\n    --endpoint  ip ou hostname do totem\n    ", {
    default: {
        debug: false,
        ssl: false
    }
});
console.log('MODO DEBUG ATIVADO?', cli.flags.debug);
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
electron_1.ipcMain.on('com', function (e, data) { return handleWebview(e, data); });
function handleWebview(e, p) {
    if (p === 'tocar') {
        // shell.openItem('C:/Program Files/aris/sga/display/ding.vbs');
    }
}
function createWindow() {
    win = new electron_1.BrowserWindow({
        // width: 1366, height: 768,
        /*
          fullscreen: true,
          frame: false
        */
        kiosk: true
    });
    // Previne o display de entrar em modo sleep
    electron_1.powerSaveBlocker.start('prevent-display-sleep');
    win.setAutoHideMenuBar(true);
    // carrega a aplicação baseada no local onde esta o app minificado
    win.loadURL(url.format({
        pathname: path.join(__dirname, "./dist/index.html"),
        protocol: 'file:',
        slashes: true,
    }));
    /* para painel em SO Windows
      shell.openItem('C:Users/Desenvolvimento/Desktop/mouseclick.bat');
      shell.openItem('C:Users/Desenvolvimento/Desktop/sound.vbs');
    */
    // abre o DEVTOOLS do Chrome
    if (cli.flags.debug) {
        win.webContents.openDevTools();
    }
    // fecha o electron
    win.on('closed', function () {
        win = null;
        electron_1.app.quit();
    });
}
//# sourceMappingURL=main.js.map