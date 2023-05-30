const {app, BrowserWindow, ipcMain} = require('electron')
    const url = require("url");
    const path = require("path");

    let mainWindow

    function createWindow () {


      mainWindow = new BrowserWindow({
        // width: 1000,
        // height: 800,
        movable: true,
        // resizable: false,
        minHeight: "300px",
        minWidth: "300px",
        fullscreen : true,
        autoHideMenuBar  : true,
        // frame: false
        // titleBarStyle: 'hidden',
        titleBarOverlay: {
          color: '#2f3241',
          symbolColor: '#74b1be',
          height: 40
        },
        webPreferences: {
          // preload: path.join(__dirname, 'C:/Users/PLANDI-02/Monumentos/preload.js')
          preload: path.join(__dirname, './preload.js')
        }
      })


      // mainWindow.loadFile('./dist/monumentos/index.html');


      mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, `./dist/monumentos/index.html`),
          protocol: "file:",
          slashes: true
        })
      );

      // Open the DevTools.
      // mainWindow.webContents.openDevTools()

      mainWindow.on('closed', function () {
        mainWindow = null
      })


    }

    app.on('ready', createWindow)

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })


    ipcMain.on('minimize-window', (event) => {
      console.log(__dirname);
      // BrowserWindow.getFocusedWindow().minimize();
    });
