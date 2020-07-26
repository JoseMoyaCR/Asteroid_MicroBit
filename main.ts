function CrearMeteoritos () {
    Meteorito1 = game.createSprite(randint(0, 4), 0)
    if (Nivel >= 2) {
        Meteorito2 = game.createSprite(randint(0, 4), 0)
    }
    if (Nivel >= 3) {
        Meteorito3 = game.createSprite(randint(0, 4), 0)
    }
    if (Nivel >= 4) {
        Meteorito4 = game.createSprite(randint(0, 4), 0)
    }
    if (Nivel >= 5) {
        Meteorito5 = game.createSprite(randint(0, 4), 0)
    }
    for (let index = 0; index < 4; index++) {
        basic.pause(Velocidad)
        Meteorito1.change(LedSpriteProperty.Y, 1)
        if (Nivel >= 2) {
            Meteorito2.change(LedSpriteProperty.Y, 1)
        }
        if (Nivel >= 3) {
            Meteorito3.change(LedSpriteProperty.Y, 1)
        }
        if (Nivel >= 4) {
            Meteorito4.change(LedSpriteProperty.Y, 1)
        }
        if (Nivel >= 5) {
            Meteorito5.change(LedSpriteProperty.Y, 1)
        }
        if (Meteorito1.isTouching(Nave) || Meteorito2 != null && Meteorito2.isTouching(Nave) || Meteorito3 != null && Meteorito3.isTouching(Nave) || Meteorito4 != null && Meteorito4.isTouching(Nave) || Meteorito5 != null && Meteorito5.isTouching(Nave)) {
            Perdio = 1
        }
    }
    Meteorito1.delete()
    if (Meteorito2 != null) {
        Meteorito2.delete()
    }
    if (Meteorito3 != null) {
        Meteorito3.delete()
    }
    if (Meteorito4 != null) {
        Meteorito4.delete()
    }
    if (Meteorito5 != null) {
        Meteorito5.delete()
    }
    SiguienteNivel = 1
}
input.onButtonPressed(Button.A, function () {
    Nave.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Nave.move(1)
})
let SiguienteNivel = 0
let Perdio = 0
let Meteorito5: game.LedSprite = null
let Meteorito4: game.LedSprite = null
let Meteorito3: game.LedSprite = null
let Meteorito2: game.LedSprite = null
let Meteorito1: game.LedSprite = null
let Nave: game.LedSprite = null
let Velocidad = 0
let Nivel = 0
Nivel = 1
game.setScore(0)
Velocidad = 500
Nave = game.createSprite(2, 4)
CrearMeteoritos()
basic.forever(function () {
    basic.pause(100)
    if (Perdio == 1) {
        basic.showIcon(IconNames.Skull)
        game.gameOver()
    }
    if (SiguienteNivel == 1) {
        SiguienteNivel = 0
        game.addScore(1)
        Velocidad += -5
        if (game.score() % 7 == 0) {
            Nivel += 1
        }
        CrearMeteoritos()
    }
})
