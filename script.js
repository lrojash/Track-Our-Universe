document.body.style.zoom = "25%";
const API_KEY = 'TW2hym5fprpzfSEc15t1hI9zu59tLvI8tbCG22Zy'

// const API_URL_SOLAR_DATA = 'https://api.le-systeme-solaire.net/rest/bodies/'
// const API_NASA =`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

// // get data from API
// const getSolar = async() => {
//     try{
//         const response = await axios.get(API_URL_SOLAR_DATA)
//         const bodies = response.data.bodies
//         let planets = []
//         // console.log(bodies[0].isPlanet)
//         for(let i=0; i < bodies.length; i++) {
          
//           if(bodies[i].isPlanet === true) {
//             planets.push(bodies[i])
//           }
//         }
//        return planets
//     } catch(error) {
//         console.log(error)
//     }
// }



// window.onload = getSolar


/******************************************************************** */
/******************************************************************** */
/******************************************************************** */
/******************************************************************** */
/******************************************************************** */

// EVENT LISTENERS
let planets = document.getElementsByClassName('planet')
console.log(planets)

for (let i =0; i < planets.legnth; i++) {
  planets[i].addEventListener('click', () => {
    console.log('works')
  })
}
let neptune = document.getElementById('nept').addEventListener('mouseover', () => {
  console.log('works')
})
let uranus = document.getElementById('uran').addEventListener('climouseoverck', () => {
  console.log('works')
})