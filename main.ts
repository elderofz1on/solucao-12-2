let distancia = 0
basic.forever(function () {
    distancia = hackbit.us_sonar(
    DigitalPin.P8,
    DigitalPin.P9,
    hackbit.PingUnit.cm
    )
    if (distancia < 20) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (distancia > 25) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    basic.pause(100)
})
