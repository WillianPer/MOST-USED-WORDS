const { ipcMain } = require('electron')

ipcMain.on('process-subtitle', (event, paths) => {
    console.log(paths)

    event.reply('process-subtitle', [
        { name: "i", amount: 1234 },
        { name: "you", amount: 900 },
        { name: "he", amount: 853 },
        { name: "he", amount: 853 },
        { name: "he", amount: 853 },
        { name: "he", amount: 853 },
    ])
})