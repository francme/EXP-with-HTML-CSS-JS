document.getElementById('button1').addEventListener('click', function() {
    document.getElementById('example1').style.display = 'block';
});

document.getElementById('showAlertButton').addEventListener('click', function() {
    alert('Кнопка нажата!');
});

document.getElementById('button2').addEventListener('click', function() {
    document.getElementById('example2').style.display = 'block';
});

document.getElementById('example2Form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Имя: ${name}\nEmail: ${email}\nПароль: ${password}`)
});


document.getElementById('button3').addEventListener('click', function() {
    document.getElementById('example3').style.display = 'block';
});

document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('textToChange').textContent = 'Текст изменен!';
});

document.getElementById('button4').addEventListener('click', function() {
    document.getElementById('example4').style.display = 'block';
});

let clickListenerAttached = false;
let addClickListenerButton = document.getElementById('addClickListenerButton');
const listenerStatus = document.getElementById('listenerStatus');

addClickListenerButton.addEventListener('click', function() {
    if (!clickListenerAttached) {
        document.getElementById('listenerStatus').textContent = 'Статус обработчика событий: Подключен!';
        clickListenerAttached = true;
    } else {
        document.getElementById('listenerStatus').textContent = 'Статус обработчика событий: Отключен!';
        clickListenerAttached = false;
    }
});

document.getElementById('button5').addEventListener('click', function() {
    document.getElementById('example5').style.display = 'block';
    const savedName = localStorage.getItem('name');
    const localStorageStatus = document.getElementById('localStorageStatus');
    if (savedName) {
        localStorageStatus.textContent = `Имя в локальном хранилище: ${savedName}`;
    } else {
        localStorageStatus.textContent = `Имя в локальном хранилище: Нет`;
    }
});

document.getElementById('saveNameButton').addEventListener('click', function() {
    const nameToSave = document.getElementById('localStorageName').value;
    localStorage.setItem('name', nameToSave);
    const localStorageStatus = document.getElementById('localStorageStatus');
    localStorageStatus.textContent = `Имя в локальном хранилище: ${nameToSave}`;
});

document.getElementById('button6').addEventListener('click', function() {
    document.getElementById('example6').style.display = 'block';
    const savedFile = localStorage.getItem('file');
    const fileStatus = document.getElementById('fileStatus');
    if (savedFile) {
        fileStatus.textContent = `Выбранны(й/е) файл(ы): ${savedFile} ожидает загрузки`;
    } else {
        fileStatus.textContent = `Выбранны(й/е) файл(ы): нет`;
    }
});

document.getElementById('saveFile').addEventListener('click', function() {
    const fileToSave = document.getElementById('localStorageFile').value;
    localStorage.setItem('file', fileToSave);
    const fileStatus = document.getElementById('fileStatus');
    fileStatus.textContent = `Выбранны(й/е) файл(ы) в локальном хранилище: ${fileToSave}`;
});