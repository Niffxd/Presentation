const requestJSON = 'https://raw.githubusercontent.com/Niffxd/Presentation/main/json/database.json'
const request = new XMLHttpRequest()

request.open('GET', requestJSON);
request.responseType = 'json';
request.send();

let codeIcons = document.getElementById('code')
let designIcons = document.getElementById('design')
let projects = document.getElementById('project')
let academics = document.getElementById('academics')
let submit = document.getElementById('submit')

request.onload = function() {
    request.response.code.map((item) => {
        codeIcons.innerHTML += `<img src=${item}>`
    })

    request.response.design.map((item) => {
        designIcons.innerHTML += `<img src=${item}>`
    })

    request.response.projects.map((item) => {
        projects.innerHTML += `<img src=${item}>`
    })

    request.response.academics.map((item) => {
        academics.innerHTML += `
                                    <p><b>${item.career}</b><br>${item.date} | ${item.place}</p>
                                `
    })

    request.response.submit.map((item) => {
        submit.innerHTML += `<img src=${item}>`
    })
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