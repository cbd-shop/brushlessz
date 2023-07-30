input.onButtonPressed(Button.A, function () {
    Speed += 2
    if (Speed > 100) {
        Speed = 100
    }
    showSpeedOnLED()
})
input.onButtonPressed(Button.B, function () {
    Speed -= 2
    if (Speed < -100) {
        Speed = -100
    }
    showSpeedOnLED()
})
let Speed = 0

function showSpeedOnLED() {
    let ledBar = Math.abs(Math.round(Speed / 10))
    for (let i = 0; i < 5; i++) {
        if (i < ledBar) {
            led.plot(i, 0)
        } else {
            led.unplot(i, 0)
        }
    }
}

basic.forever(function () {
    pins.servoSetPulse(AnalogPin.P0, Speed * 100)
})

