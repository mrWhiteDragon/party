//Для круга, меняющего координаты 
const circle = document.getElementById('circle')

function party(number) {
    let count = 0
    document.body.style.overflow = 'hidden'
    circle.style.height = '200px'
    circle.style.width = '200px'

    showСircle = setInterval(() => {

        let x = Math.random() * (window.innerWidth - 100)
        let y = Math.random() * (window.innerHeight - 100)

        circle.style.top = `${y}px`
        circle.style.left = `${x}px`

        circle.style.backgroundColor = `rgb(` +
        Math.floor(Math.random() * 256) + `, ` +
        Math.floor(Math.random() * 256) + `, ` +
        Math.floor(Math.random() * 256) + `)`

        count++
        if (count >= number) {
            clearInterval(showСircle)
            circle.style.removeProperty("background-color")
        }
    }, 300)
}

party(25)