const { ipcMain } = require('electron')

const pathsToRows = require('./pathsToRows')

ipcMain.on('process-subtitle', (event, paths) => {
    pathsToRows(paths)
        .then(rows => console.log(rows))
        .then(() => {
            event.reply('process-subtitle', [
                { name: "i", amount: 1234 },
                { name: "you", amount: 900 },
                { name: "he", amount: 853 },
                { name: "she", amount: 853 },
                { name: "our", amount: 133 },
                { name: "house", amount: 23 },
            ])
            

        })

})