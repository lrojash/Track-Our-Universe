document.body.style.zoom = "100%";

const API_URL_SOLAR_DATA = 'https://api.le-systeme-solaire.net/rest/bodies/'


// get data from API
const getSolar = async (event) => {
    try {
        let planet = event.target.id.toString()
        const response = await axios.get(API_URL_SOLAR_DATA)
        displayData(getPlanetData(response, planet))
    } catch (error) {
        console.log(error)
    }
}

// matches the name of the planet with the body from 
// the api
const getPlanetData = (data, name) => {
    const planets = data.data.bodies
    for (let i = 0; i < planets.length; i++) {
        if (planets[i].englishName === name) {
            return planets[i]

        }
    }
}
const displayData = (planet) => {
    document.querySelector('.information').innerText = ""
    let display = document.querySelector('.information')
    let resultWrapper = document.createElement('div')
    resultWrapper.className = 'info-result'
    let textInfo = document.createElement('h2')
    textInfo.className = 'planet'
    textInfo.innerText = planet.englishName

    let listInfo = document.createElement('li')
    listInfo.className = 'planet-info'
    noMoons(planet)
    listInfo.innerText = `Gravity: ${planet.gravity}(m/s^2) 
                        Mean Radius: ${planet.meanRadius}(km) 
                        Number of Moons: ${planet.moons.length} 
                        Escape Velocity: ${planet.escape}(m/s)
                        Orbit: ${planet.sideralOrbit}(Earth Days)
                        Rotation: ${planet.sideralRotation}(hours)`


    textInfo.appendChild(listInfo)
    resultWrapper.appendChild(textInfo)
    display.appendChild(resultWrapper)
}

// handling planets with no moons
const noMoons = (planet) => {
    if (planet.moons === null) {
        planet.moons = ''
    }
}
let body = document.querySelector('body')

// will create stars
const createStars = () => {
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            let star = document.createElement('div')
            star.className = 'stars'
            positionStar(star)
            body.appendChild(star)
        }, 4000)
    }
}
// will position the elements at random location
const positionStar = (star) => {
    let x = Math.floor(Math.random() * 100)
    let y = Math.floor(Math.random() * 100)
    star.style.left = x + '%'
    star.style.top = y + '%'
}

createStars()

const button = document.getElementById('stop')
button.addEventListener('click', () => {
    let animation = document.getElementsByClassName('stars')
    console.log(animation)
    for (let i = 0; i < animation.length; i++) {
        animation[i].remove('stars')
    }
})


const mercury = document.querySelector('#Mercury')
const venus = document.querySelector('#Venus')
const earth = document.querySelector('#Earth')
const mars = document.querySelector('#Mars')


mercury.addEventListener('click', getSolar)
venus.addEventListener('click', getSolar)
earth.addEventListener('click', getSolar)
mars.addEventListener('click', getSolar)