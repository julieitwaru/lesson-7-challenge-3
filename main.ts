while (true) {
    console.log("Acceleration in the Z is: " + input.acceleration(Dimension.Z))
    if (input.acceleration(Dimension.Z) < 45) {
        light.setAll(light.rgb(255, 165, 0))
    } else {
        light.clear()
    }
    
}
