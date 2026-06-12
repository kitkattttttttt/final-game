controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (screen2 == 0) {
        scene.setBackgroundImage(assets.image`0-1`)
    }
    screen2 += 1
})
let screen2 = 0
screen2 = 0
scene.setBackgroundImage(assets.image`0`)
