document.body.style.zoom = "25%";

const API_KEY = 'TW2hym5fprpzfSEc15t1hI9zu59tLvI8tbCG22Zy'
const API_URL_SOLAR_DATA = 'https://api.le-systeme-solaire.net/rest/bodies/'
const API_NASA =`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

// get data from API
const getSolar = async() => {
    try{
        const response = await axios.get(API_URL_SOLAR_DATA)
        // console.log(response.data)
        // console.log(getPlanet(response))
        getPlanetData(response)
    } catch(error) {
        console.log(error)
    }
}

// matches the name of the planet with the body from 
// the api
const getPlanetData = (data) => {
    const planets = data.data.bodies
    for(let i=0; i < planets.length; i++) {
        if(planets[i].isPlanet === true) {
            console.log('works')
        }
    }
}

// gets planet selected name
const getPlanet = (e) => {
        return e.target.id
}

// queries
const jupiter = document.querySelector('#jupiter')
const saturn = document.querySelector('#saturn')
const uranus = document.querySelector('#uranus')
const neptune = document.querySelector('#neptune')


// Event Listener
jupiter.addEventListener('click', getPlanet)
saturn.addEventListener('click', getPlanet)
uranus.addEventListener('click', getPlanet)
neptune.addEventListener('click', getPlanet)
