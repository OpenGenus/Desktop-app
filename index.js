const { app, BrowserWindow } = require('electron');

function createWindow() {
    // Browser window
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // Load OpenGenus IQ website
    win.loadURL('https://iq.opengenus.org/');
}

app.whenReady().then(createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
