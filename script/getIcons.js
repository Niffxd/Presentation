const requestJSON = 'https://raw.githubusercontent.com/Niffxd/Presentation/main/json/icons.json'
const request = new XMLHttpRequest()

request.open('GET', requestJSON);
request.responseType = 'json';
request.send();

const containerBox = document.body

request.onload = function() {
    containerBox.innerHTML += `<img src="${request.response.code[1]}">`
} 
