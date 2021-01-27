while True:
    print("Acceleration in the Z is: " + input.acceleration(Dimension.Z))
    if input.acceleration(Dimension.Z) <45:
        light.set_all(light.rgb(255, 165, 0))
    else:
        light.clear()
