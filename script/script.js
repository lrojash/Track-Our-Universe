// document.body.style.zoom = "100%"

let body = document.querySelector('body')

// will create stars
const createStars = () => {
    for (let i = 0; i < 250; i++) {
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
    document.querySelectorAll(".stars").forEach(star => star.remove())
})

