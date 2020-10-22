document.body.style.zoom = "20%";

const API_KEY = 'TW2hym5fprpzfSEc15t1hI9zu59tLvI8tbCG22Zy'
const API_URL_SOLAR_DATA = 'https://api.le-systeme-solaire.net/rest/bodies/'


// get data from API
const getSolar = async(event) => {
    //console.log(planet)
    try{
        let planet = event.target.id.toString()
        const response = await axios.get(API_URL_SOLAR_DATA)
        displayData(getPlanetData(response, planet))
    } catch(error) {
        console.log(error)
    }
}

// matches the name of the planet with the body from 
// the api
const getPlanetData = (data, name) => {
    const planets = data.data.bodies
    for(let i=0; i < planets.length; i++) {
        if( planets[i].englishName === name) {
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
    listInfo.className='planet-info'
    noMoons(planet)
    listInfo.innerText= `Gravity: ${planet.gravity}(m/s^2) 
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
    if(planet.moons === null) {
        planet.moons = ''
    }
}


const mercury = document.querySelector('#Mercury')
const venus = document.querySelector('#Venus')
const earth = document.querySelector('#Earth')
const mars = document.querySelector('#Mars')


mercury.addEventListener('click', getSolar)
venus.addEventListener('click', getSolar)
earth.addEventListener('click', getSolar)
mars.addEventListener('click', getSolar)