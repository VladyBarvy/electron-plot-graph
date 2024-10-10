const { ipcRenderer } = require('electron');

document.getElementById('open-file-button').addEventListener('click', async () => {
    const contentArray = await ipcRenderer.invoke('dialog:openFile');
    const displayArea = document.getElementById('file-content');
    
    if (contentArray) {
        displayArea.textContent = contentArray.join('\n'); // Показываем содержимое файла
        console.log(contentArray); // Для отладки, выводим массив в консоль
    } else {
        displayArea.textContent = 'Файл не выбран';
    }
});
