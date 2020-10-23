document.body.style.zoom = "25%"

let body = document.querySelector('body')

// will create stars
const createStars = () => {
    for(let i=0; i < 100; i++) {
        const star = document.createElement('div')
        star.className = 'stars'
        positionStar(star)
        body.appendChild(star)
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