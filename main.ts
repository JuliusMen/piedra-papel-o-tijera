let Piedra_Papel_o_Tijera = 0
input.onGesture(Gesture.Shake, function () {
    Piedra_Papel_o_Tijera = randint(1, 3)
    basic.showNumber(Piedra_Papel_o_Tijera)
    if (Piedra_Papel_o_Tijera == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
    } else if (Piedra_Papel_o_Tijera == 2) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # # # . .
            . . . # .
            . . . . #
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
