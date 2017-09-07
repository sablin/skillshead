'use strict';

function sendAjax(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.addEventListener('load', function () {
            resolve(xhr.response);
        });
        xhr.addEventListener('error', function () {
            reject();
        });
        xhr.send();
    });
}
var but = document.getElementById('getUser');
but.addEventListener('click', function () {
    sendAjax('https://randomuser.me/api/?inc=name,email,dob,picture').then(function (response) {
        var img = new Image();
        var date = new Date(response.results[0].dob).getFullYear();
        img.src = response.results[0].picture.medium;
        userWindow.appendChild(img);
        var div = document.createElement('div');
        var info = response.results[0].name.first + ' | ' + date + ' | ' + response.results[0].email;
        userWindow.appendChild(div).innerText = info;
    }, function () {
        alert('�� ������� �������� ������ � �������');
    });
});