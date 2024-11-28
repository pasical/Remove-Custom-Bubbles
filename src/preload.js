const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('remove_cumstom_bubbles', {
  updateStyle: (callback) => ipcRenderer.on('LiteLoader.remove_cumstom_bubbles.updateStyle', callback),
  rendererReady: () => ipcRenderer.send('LiteLoader.remove_cumstom_bubbles.rendererReady')
})
