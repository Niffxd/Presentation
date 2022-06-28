document.body.innerHTML = `
    <aside id="nav-link"></aside>
    <section id="render-container"></section>
`

document.getElementById('nav-link').innerHTML = `
    <ul>
        <li><a id="aboutMe" class="selected" href="#">About Me</a></li>
        <li><a id="skills" href="#">Skills</a></li>
        <li><a id="projects" href="#">Projects</a></li>
        <li><a id="experience" href="#">Experience</a></li>
        <li><a id="contact" href="#">Keep in touch!</a></li>
    </ul>
`

const infoHTML = `
    <div id="aboutme-info" class="container">
        <div id="info">
            <h2>Hi! I'm Nicolas</h2>
            <p>I am from in Argentina, i'm a very communicative, dynamic and proactive person. I have the ability to adapt quickly to changes. Enthusiastic  and curious, I like team work. I am characterized by continuous training and updating my knowledge. I work hard and I learn fast.</p>
            <p>Actually im studying web development and I hope we can collaborate soon!</p>
        </div>
        <img src="./src/hi.jpeg">
    </div>
`

const skillsHTML = `
    <div id="skills-info" class="container displayoff">
        <div id="info">
            <h2>To Code</h2>
            <div id="code"></div>
            <h2>To Design</h2>
            <div id="design"></div>
        </div>
        <img src="./src/computer.jpeg">
    </div>
`

const projectsHTML = `
    <div id="projects-info" class="container displayoff">
        <div id="info">
            <h2>Projects</h2>
            <div id="project"></div>
        </div>
        <img src="./src/wink.jpeg">
    </div>
`

const experienceHTML = `
    <div id="experience-info" class="container experience displayoff">
        <div id="info">
            <h2>Academics</h2>
            <div id="academics"></div>
        </div>
        <img src="./src/so2.jpeg">
    </div>
`

const contactHTML = `
    <div id="contact-info" class="container displayoff">
        <div id="info">
            <h2>Chat with me!</h2>
            <div id="contact">
                <form id="contact-form" netlify>
                    <label for="name">Name:</label><br>
                    <input type="text" id="name" name="name" placeholder="Your name here!.."><br>
                    <label for="email">Email:</label><br>
                    <input type="email" id="email" name="email" placeholder="Your email here!.."><br>
                    <label for="number">Phone:</label><br>
                    <input type="number" id="number" name="phone" placeholder="Your phone here!.."><br>
                    <label for="message">Message:</label><br>
                    <textarea id="message" name="message" placeholder="Send me a message.."></textarea><br>
                    <div class="button">
                        <button id="submit" type="submit"></button>
                    </div>
                </form>
            </div>
        </div>
        <img src="./src/callMe.jpeg">
    </div>
`

document.getElementById('render-container').innerHTML += infoHTML + skillsHTML + projectsHTML + experienceHTML + contactHTML

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

request.onload = () => {
    request.response.code.map((item) => {
        codeIcons.innerHTML += `<img src=${item}>`
    })

    request.response.design.map((item) => {
        designIcons.innerHTML += `<img src=${item}>`
    })

    if(request.response.projects.length == 0){
        projects.innerHTML = `<p>In Progress...</p>`
    }else{
        request.response.projects.map((item) => {
            projects.innerHTML += `<img src=${item}>`
        })
    }

    request.response.academics.map((item) => {
        academics.innerHTML += `<p><b>${item.career}</b><br>${item.date} | ${item.place}</p>`
    })

    submit.innerHTML = `<img src=${request.response.send}>`
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