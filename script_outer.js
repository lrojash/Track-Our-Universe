document.body.style.zoom = "25%";

const API_KEY = 'TW2hym5fprpzfSEc15t1hI9zu59tLvI8tbCG22Zy'
const API_URL_SOLAR_DATA = 'https://api.le-systeme-solaire.net/rest/bodies/'
const API_NASA =`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

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
    textInfo.className = 'info'
    textInfo.innerText = planet.englishName

    resultWrapper.appendChild(textInfo)
    display.appendChild(resultWrapper)
}
// create the list of objects to be displayed



// queries
const jupiter = document.querySelector('#Jupiter')
const saturn = document.querySelector('#Saturn')
const uranus = document.querySelector('#Uranus')
const neptune = document.querySelector('#Neptune')
const box = document.querySelector('.information')


// Event Listener
// outer
jupiter.addEventListener('click', getSolar)
saturn.addEventListener('click', getSolar)
uranus.addEventListener('click', getSolar)
neptune.addEventListener('click', getSolar)
