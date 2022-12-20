let distance = 0
let strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
strip.clear()
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    . . . . .
    # . . . .
    `)
basic.pause(1000)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (distance > 4) {
        for (let index = 0; index <= 3; index++) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        }
    } else if (distance <= 1) {
        for (let index = 0; index <= 3; index++) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        }
    } else if (distance <= 4) {
        for (let index = 0; index <= distance; index++) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
        }
    }
    strip.show()
    basic.showNumber(distance)
    basic.pause(1000)
})
