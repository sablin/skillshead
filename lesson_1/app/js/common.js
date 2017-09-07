function sendAjax(url){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.addEventListener('load',()=>{
            resolve(xhr.response);
        });
        xhr.addEventListener('error', () =>{
            reject();
        })
        xhr.send();
    })
}
let but = document.getElementById('getUser');
but.addEventListener('click',()=>{
    sendAjax('https://randomuser.me/api/?inc=name,email,dob,picture')
        .then((response)=>{
            let img = new Image();
            let date = new Date(response.results[0].dob).getFullYear();
            img.src = response.results[0].picture.medium;
            userWindow.appendChild(img);
            let div = document.createElement('div');
            let info = response.results[0].name.first + ' | ' + date + ' | ' + response.results[0].email;
            userWindow.appendChild(div).innerText = info;
            },
        ()=>{
            alert('Ќе удалось получить данные с сервера');
        });
})