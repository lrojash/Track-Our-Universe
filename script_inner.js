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
        getPlanetData(response, planet)
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
            console.log(planets[i])
        }
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