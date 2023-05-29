input.onButtonPressed(Button.A, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
    basic.pause(2000)
})
basic.forever(function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
    basic.pause(1000)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
    basic.pause(1000)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
    basic.pause(3000)
})
