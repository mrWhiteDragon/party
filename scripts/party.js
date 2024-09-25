// Для фиксированного круга
const circle = document.getElementById('circle')

function party(number) {
    let count = 0
    document.body.style.display = 'flex'
    document.body.style.justifyContent = 'center'
    document.body.style.alignItems = 'center'

    showСircle = setInterval(() => {
        circle.style.backgroundColor = `rgb(` +
        Math.floor(Math.random() * 256) + `, ` +
        Math.floor(Math.random() * 256) + `, ` +
        Math.floor(Math.random() * 256) + `)`
        count++
        if (count > number) {
            clearInterval(showСircle)
            circle.style.removeProperty("background-color")
        }
    }, 1000)
}

party(10)
