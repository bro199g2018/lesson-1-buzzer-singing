mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_RUN)
basic.pause(2000)

def on_forever():
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.RED)
    basic.pause(1000)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.GREEN)
    basic.pause(1000)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.BLUE)
    basic.pause(3000)
basic.forever(on_forever)
