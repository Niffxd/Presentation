const requestJSON = 'https://raw.githubusercontent.com/Niffxd/Presentation/main/json/icons.json'
const request = new XMLHttpRequest()

request.open('GET', requestJSON);
request.responseType = 'json';
request.send();

let codeIcons = document.getElementById('code')
let designIcons = document.getElementById('design')

request.onload = function() {
    for(let i = 0; i < request.response.code.length; i++){
        codeIcons.innerHTML += `<img src=${request.response.code[i]}>`
    }

    for(let i = 0; i < request.response.design.length; i++){
        designIcons.innerHTML += `<img src=${request.response.design[i]}>`
    }
}

document.getElementById('aboutMe').addEventListener('click', () => {
    document.getElementById('aboutMe').classList.add('selected')
    document.getElementById('skills').classList.remove('selected')
    document.getElementById('projects').classList.remove('selected')
    document.getElementById('experience').classList.remove('selected')
    document.getElementById('contact').classList.remove('selected')
    document.getElementById('aboutme-info').classList.remove('displayoff')
    document.getElementById('skills-info').classList.add('displayoff')
    document.getElementById('projects-info').classList.add('displayoff')
    document.getElementById('experience-info').classList.add('displayoff')
    document.getElementById('contact-info').classList.add('displayoff')
})

document.getElementById('skills').addEventListener('click', () => {
    document.getElementById('aboutMe').classList.remove('selected')
    document.getElementById('skills').classList.add('selected')
    document.getElementById('projects').classList.remove('selected')
    document.getElementById('experience').classList.remove('selected')
    document.getElementById('contact').classList.remove('selected')
    document.getElementById('aboutme-info').classList.add('displayoff')
    document.getElementById('skills-info').classList.remove('displayoff')
    document.getElementById('projects-info').classList.add('displayoff')
    document.getElementById('experience-info').classList.add('displayoff')
    document.getElementById('contact-info').classList.add('displayoff')
})

document.getElementById('projects').addEventListener('click', () => {
    document.getElementById('aboutMe').classList.remove('selected')
    document.getElementById('skills').classList.remove('selected')
    document.getElementById('projects').classList.add('selected')
    document.getElementById('experience').classList.remove('selected')
    document.getElementById('contact').classList.remove('selected')
    document.getElementById('aboutme-info').classList.add('displayoff')
    document.getElementById('skills-info').classList.add('displayoff')
    document.getElementById('projects-info').classList.remove('displayoff')
    document.getElementById('experience-info').classList.add('displayoff')
    document.getElementById('contact-info').classList.add('displayoff')
})

document.getElementById('experience').addEventListener('click', () => {
    document.getElementById('aboutMe').classList.remove('selected')
    document.getElementById('skills').classList.remove('selected')
    document.getElementById('projects').classList.remove('selected')
    document.getElementById('experience').classList.add('selected')
    document.getElementById('contact').classList.remove('selected')
    document.getElementById('aboutme-info').classList.add('displayoff')
    document.getElementById('skills-info').classList.add('displayoff')
    document.getElementById('projects-info').classList.add('displayoff')
    document.getElementById('experience-info').classList.remove('displayoff')
    document.getElementById('contact-info').classList.add('displayoff')
})

document.getElementById('contact').addEventListener('click', () => {
    document.getElementById('aboutMe').classList.remove('selected')
    document.getElementById('skills').classList.remove('selected')
    document.getElementById('projects').classList.remove('selected')
    document.getElementById('experience').classList.remove('selected')
    document.getElementById('contact').classList.add('selected')
    document.getElementById('aboutme-info').classList.add('displayoff')
    document.getElementById('skills-info').classList.add('displayoff')
    document.getElementById('projects-info').classList.add('displayoff')
    document.getElementById('experience-info').classList.add('displayoff')
    document.getElementById('contact-info').classList.remove('displayoff')
})