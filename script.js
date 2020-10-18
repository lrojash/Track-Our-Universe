console.log('works')
const API_KEY = 'TW2hym5fprpzfSEc15t1hI9zu59tLvI8tbCG22Zy'

const API_URL_SOLAR_DATA = 'https://api.le-systeme-solaire.net/rest/bodies/'
const API_NASA =`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

const getSolar = async() => {
    try{
        const response = await axios.get(API_URL_SOLAR_DATA)
        console.log(response.data.bodies[0])
    } catch(error) {
        console.log(error)
    }
}

window.onload = getSolar
