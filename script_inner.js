document.body.style.zoom = "25%";

const API_KEY = 'TW2hym5fprpzfSEc15t1hI9zu59tLvI8tbCG22Zy'
const API_URL_SOLAR_DATA = 'https://api.le-systeme-solaire.net/rest/bodies/'
//const API_NASA =`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
const space = document.getElementsByClassName('space')

// EventListener
// const clicked = () => {
//     for(let i=1; i < space.length; i++) {
//         space[i].addEventListener('click', () => {
//             console.log(space[i].id)
//         })
//     }
// }
// clicked()
const mercury = document.querySelector('#mercury')
const venus = document.querySelector('#venus')
const earth = document.querySelector('#earth')
const mars = document.querySelector('#mars')

// console.log(mercury)
// console.log(venus)
// console.log(earth)
// console.log(mars)

mercury.addEventListener('click', () => {
    console.log('works: mercury')     
})
venus.addEventListener('click', () => {
    console.log('works: venus')     
})
earth.addEventListener('click', () => {
    console.log('works: earth')     
})
mars.addEventListener('click', () => {
    console.log('works: mars')     
})