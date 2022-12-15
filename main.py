distance = 0
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.clear()
basic.show_leds("""
    . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
""")
basic.pause(1000)

def on_forever():
    global distance
    distance = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.CENTIMETERS)
    if distance > 4:
        for index in range(5):
            strip.set_pixel_color(index, neopixel.colors(NeoPixelColors.GREEN))
    elif distance <= 1:
        for index2 in range(5):
            strip.set_pixel_color(index2, neopixel.colors(NeoPixelColors.RED))
    else:
        index3 = 0
        while index3 <= distance:
            strip.set_pixel_color(index3, neopixel.colors(NeoPixelColors.BLUE))
            index3 += 1
    basic.pause(100)
basic.forever(on_forever)
