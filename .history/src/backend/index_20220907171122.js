const { ipcMain } = require('electron')

ipcMain.on('chanelThis', (event, arg) => {
    console.log(arg)

    event.reply('chanelThis', 'pong')
})