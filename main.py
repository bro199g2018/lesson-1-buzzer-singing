def on_forever():
    mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_RUN)
    basic.pause(2000)
basic.forever(on_forever)
