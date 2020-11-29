controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    water = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 9 8 . . . . . . . 
        . . . . . 8 8 9 8 8 . . . . . . 
        . . . . . 8 9 9 9 8 . . . . . . 
        . . . . 8 8 9 9 9 8 . . . . . . 
        . . . . 8 9 9 9 9 8 8 . . . . . 
        . . . . 8 9 9 9 9 9 8 . . . . . 
        . . . . 8 9 9 9 9 9 8 8 . . . . 
        . . . 8 8 9 9 9 9 9 9 8 . . . . 
        . . . 8 9 9 9 9 9 9 9 8 . . . . 
        . . . 8 8 9 9 9 9 9 8 8 . . . . 
        . . . . 8 8 8 9 8 8 8 . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        `, extinguisher, 70, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (enemy, projectile) {
    enemy.destroy()
    projectile.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let fire: Sprite = null
let water: Sprite = null
let extinguisher: Sprite = null
let projectile = null
scene.setBackgroundColor(7)
extinguisher = sprites.create(img`
    . . . . . . f f f . . . . . . . 
    . . f f f f f f f . . . . . . . 
    . . f . . . f f f f f f . . . . 
    . . f . 2 2 2 2 2 2 2 f . . . . 
    . f f . 2 1 1 1 1 1 2 f . . . . 
    . f f . 2 1 1 1 1 1 2 f f f f . 
    . . . . 2 1 1 1 1 1 2 f f f f . 
    . . . . 2 1 1 1 1 1 2 . . . . . 
    . . . . 2 1 1 1 1 1 2 . . . . . 
    . . . . 2 1 1 1 1 1 2 . . . . . 
    . . . . 2 1 1 1 1 1 2 . . . . . 
    . . . . 2 1 1 1 1 1 2 . . . . . 
    . . . . 2 1 1 1 1 1 2 . . . . . 
    . . . . 2 1 1 1 1 1 2 . . . . . 
    . . . . 2 1 1 1 1 1 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    `, SpriteKind.Player)
extinguisher.setPosition(10, 61)
controller.moveSprite(extinguisher)
info.setLife(3)
info.setScore(0)
game.onUpdateInterval(2000, function () {
    for (let i = 0; i < 4; i++) {
    fire = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . 2 . . . 2 2 4 2 2 . . . . . 
        . 2 2 . 2 2 2 2 4 4 2 . 2 2 . . 
        2 2 2 2 2 4 4 4 4 4 2 2 2 . . . 
        2 4 2 2 4 4 4 4 5 4 4 2 2 . . . 
        2 4 4 4 4 5 5 5 5 4 4 2 2 2 . . 
        2 2 4 4 5 5 5 5 5 5 4 4 4 2 . . 
        2 2 4 4 5 5 5 5 5 5 5 4 2 2 . . 
        . 2 2 4 4 5 5 5 5 5 5 4 4 2 2 . 
        . . 2 4 4 5 5 5 5 5 4 4 4 2 . . 
        . . 2 2 4 4 5 5 5 4 4 2 2 2 . . 
        . . . 2 4 4 4 5 4 4 2 2 . . . . 
        . . . 2 2 2 4 4 4 2 2 . . . . . 
        `, SpriteKind.Enemy)
    fire.setPosition(160, Math.randomRange(0, 120))
    fire.setVelocity(-50, 0)
}})
