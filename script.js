const canvas = document.querySelector('#canvas')
const width = canvas.width
const height = canvas.height
const boxDimensions = width / 5
const area = [
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4]
]
const blue = '#2196F3'


const drawGrid = () => {
    for (let row = 0; row < area.length; row++) {
        for (let col = 0; col < area[0].length; col++) {
            let context = canvas.getContext('2d')
            let x = row * boxDimensions
            let y = col * boxDimensions
            context.beginPath()
            context.rect(x, y, boxDimensions, boxDimensions)
            context.strokeStyle = blue
            context.stroke()
        }
    }
}


const drawPlayer = (x, y) => {
    let context = canvas.getContext('2d')
    context.beginPath()
    context.rect(x, y, boxDimensions, boxDimensions)
    context.fillStyle = blue
    context.fill()
}


drawGrid()
drawPlayer(0, 0)
console.log(boxDimensions)



document.addEventListener('keydown', (e) => {
    let keyCode = e.keyCode
    let context = canvas.getContext('2d')
    if (keyCode == 37) {
        // keyLeft

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
