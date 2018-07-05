const canvas = document.querySelector('#canvas')
const width = canvas.width
const height = canvas.height
const dimensions = 10
const boxArea = (width - dimensions) / dimensions

// player positions
var playerX = 0;
var playerY = 0;


const drawGrid = () => {
    let context = canvas.getContext('2d')

    context.strokeStyle = "#2196F3"
    context.lineWidth = 1

    // columns
    for (let i = 0; i < width; i += boxArea) {
        context.beginPath()
        context.moveTo(i, 0)
        context.lineTo(i, height)
        context.stroke()
        i++
    }

    // rows
    for (let i = 0; i < height; i += boxArea) {
        context.beginPath()
        context.moveTo(0, i)
        context.lineTo(width, i)
        context.stroke()
        i++
    }
}

const drawPlayer = (x, y) => {
    let context = canvas.getContext('2d')
    let radius = 25
    playerX = x;
    playerY = y;

    context.beginPath()
    context.arc(playerX, playerY, radius, 0, 2*Math.PI)
    context.strokeStyle = "#2196F3"
    context.strokeWidth = 1
    context.stroke()
}

document.addEventListener('keydown', (e) => {
    let keyCode = e.keyCode
    let context = canvas.getContext('2d')
    if (keyCode == 37) {
        // keyLeft
        playerX -= boxArea
        if (playerX < 0) {

        }
        context.clearRect(0, 0, width, height)
        drawGrid()
        drawPlayer(playerX, playerY)
    } else if (keyCode == 38) {
        // keyUP
    } else if (keyCode == 39) {
        // keyRight
    } else if (keyCode == 40) {
        // keyDown
    } else if (keyCode == 13) {
        // enter
    } else {
        return
    }
})


drawGrid()
drawPlayer(width / 2, height / 2)
