const requestJSON = 'https://raw.githubusercontent.com/Niffxd/Presentation/main/json/database.json'
const request = new XMLHttpRequest()

request.open('GET', requestJSON);
request.responseType = 'json';
request.send();

document.body.innerHTML = `
    <aside id="nav-link"></aside>
    <section id="render-container"></section>
`

document.getElementById('nav-link').innerHTML = `
    <ul>
        <li><a id="aboutMe" class="selected" href="#">About Me</a></li>
        <li><a id="skills" href="#">Skills</a></li>
        <li><a id="projects" href="#">Projects</a></li>
        <li><a id="academics" href="#">Academics</a></li>
        <li><a id="contact" href="#">Keep in touch!</a></li>
    </ul>
`

let activePage = 0

request.onload = () => {
    const prevButton = `
        <div id="prevButton" class="prevBtn button nav-button">
            <button id="prev"><img src=${request.response.navigation[0]}></button>
        </div>
    `

    const nextButton = `
        <div id="nextButton" class="nextBtn button nav-button">
            <button id="next"><img src=${request.response.navigation[1]}></button>
        </div>
    `

    const infoHTML = `
        <div id="actualContainer">
            <h2>Hi! I'm Nicolas</h2>
            <p>I am from in Argentina, i'm a very communicative, dynamic and proactive person. I have the ability to adapt quickly to changes. Enthusiastic  and curious, I like team work. I am characterized by continuous training and updating my knowledge. I work hard and I learn fast.</p>
            <p>Actually im studying web development and I hope we can collaborate soon!</p>
            <div id="container-nav">
                ${nextButton}
            </div>
        </div>
        <img id="mySelf" class="hi" src="${request.response.mySelf[0]}">
    `

    const skillsHTML = `
        <div id="actualContainer">
            <h2>To Code</h2>
            <div id="code">${request.response.code.map(item => {
                if(typeof item !== String){
                    return `<img src=${item}>`
                }
            }).join('')}</div>
            <h2>To Design</h2>
            <div id="design">${request.response.design.map(item => {
                if(typeof item !== String){
                    return `<img src=${item}>`
                }
            }).join('')}</div>
            <div id="container-nav">
                ${prevButton}
                ${nextButton}
            </div>
        </div>
        <img id="mySelf" class="computer" src="${request.response.mySelf[1]}">
    `

    const loadProjects = () => {
        if(request.response.projects.length == 0){
            return `<p>In Progress...</p>`
        }else{
            request.response.projects.map(item => {
                if(typeof item !== String){
                    return `<img src=${item}>`
                }
            }).join('')
        }
    }

    const projectsHTML = `
        <div id="actualContainer">
            <h2>Projects</h2>
            <div id="project">${loadProjects()}</div>
            <div id="container-nav">
                ${prevButton}
                ${nextButton}
            </div>
        </div>
        <img id="mySelf" class="wink" src="${request.response.mySelf[2]}">
    `

    const academicsHTML = `
        <div id="actualContainer">
            <h2>Academics</h2>
            <div id="academics">${request.response.academics.map(item => {
                if(typeof item !== String){
                    return `<p><b>${item.career}</b><br>${item.date} | ${item.place}</p>`
                }
            }).join('')}</div>
            <div id="container-nav">
                ${prevButton}
                ${nextButton}
            </div>
        </div>
        <img id="mySelf" class="so2" src="${request.response.mySelf[3]}">
    `

    const contactHTML = `
        <div id="actualContainer">
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
                        <button id="submit" type="submit"><img src=${request.response.send}></button>
                    </div>
                </form>
            </div>
            <div id="container-nav">
                ${prevButton}
            </div>
        </div>
        <img id="mySelf" class="callMe" src="${request.response.mySelf[4]}">
    `

    document.getElementById('render-container').innerHTML = renderContent(infoHTML)

    function renderContent (actualPage){
        return (
            document.getElementById('render-container').innerHTML = `
                <div class="container">
                    <div id="info">${actualPage}</div>
                </div>
            `
        )
    }

    function aboutMePage () {
        renderContent(infoHTML)
        document.getElementById('aboutMe').classList.add('selected')
        document.getElementById('skills').classList.remove('selected')
        document.getElementById('projects').classList.remove('selected')
        document.getElementById('academics').classList.remove('selected')
        document.getElementById('contact').classList.remove('selected')
        loadButtons()
        console.log(activePage)
    }
    
    function skillsPage () {
        renderContent(skillsHTML)
        document.getElementById('aboutMe').classList.remove('selected')
        document.getElementById('skills').classList.add('selected')
        document.getElementById('projects').classList.remove('selected')
        document.getElementById('academics').classList.remove('selected')
        document.getElementById('contact').classList.remove('selected')
        loadButtons()
        console.log(activePage)
    }
    
    function projectsPage () {
        renderContent(projectsHTML)
        document.getElementById('aboutMe').classList.remove('selected')
        document.getElementById('skills').classList.remove('selected')
        document.getElementById('projects').classList.add('selected')
        document.getElementById('academics').classList.remove('selected')
        document.getElementById('contact').classList.remove('selected')
        loadButtons()
        console.log(activePage)
    }
    
    function academicsPage () {
        renderContent(academicsHTML)
        document.getElementById('aboutMe').classList.remove('selected')
        document.getElementById('skills').classList.remove('selected')
        document.getElementById('projects').classList.remove('selected')
        document.getElementById('academics').classList.add('selected')
        document.getElementById('contact').classList.remove('selected')
        document.getElementById('actualContainer').classList.add('position')
        loadButtons()
        console.log(activePage)
    }
    
    function contactPage () {
        renderContent(contactHTML)
        document.getElementById('aboutMe').classList.remove('selected')
        document.getElementById('skills').classList.remove('selected')
        document.getElementById('projects').classList.remove('selected')
        document.getElementById('academics').classList.remove('selected')
        document.getElementById('contact').classList.add('selected')
        document.getElementById('actualContainer').classList.add('positionLast')
        loadButtons()
        console.log(activePage)
    }
    
    document.getElementById('aboutMe').addEventListener('click', aboutMePage)
    document.getElementById('skills').addEventListener('click', skillsPage)
    document.getElementById('projects').addEventListener('click', projectsPage)
    document.getElementById('academics').addEventListener('click', academicsPage)
    document.getElementById('contact').addEventListener('click', contactPage)

    function loadButtons(){
        if(activePage < 4){
            document.querySelector('.nextBtn').addEventListener('click', () => {
                activePage++
                console.log(activePage)
                switch (activePage){
                    case 1:
                        skillsPage()
                        break
                    case 2:
                        projectsPage()
                        break
                    case 3:
                        academicsPage()
                        break
                    case 4:
                        contactPage()
                        break
                }
            })
        }
    
        if(activePage > 0){
            document.querySelector('.prevBtn').addEventListener('click', () => {
                activePage--
                console.log(activePage)
                switch (activePage){
                    case 0:
                        aboutMePage()
                        break
                    case 1:
                        skillsPage()
                        break
                    case 2:
                        projectsPage()
                        break
                    case 3:
                        academicsPage()
                        break
                }
            })
        }
    }

    loadButtons()

}