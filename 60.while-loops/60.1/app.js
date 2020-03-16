function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    penRGB(255, 0, 0, 0.2)
    let num = 0

    while (num !== 50) {
        transform(randomNumber(1, width), randomNumber(1, height))
        dot(25)
        num = random(1, 100)
        resetMatrix()
    }
}
