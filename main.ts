basic.forever(function () {
    if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.White)) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, 255)
    }
    if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.White)) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 255)
    }
    if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.White) || mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.Black)) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 255)
    }
})
