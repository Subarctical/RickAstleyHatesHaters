sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    sprite.destroy(effects.fountain, 1000)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Giving_You_Up = sprites.createProjectileFromSprite(img`
. . . . . d d d d . . . . . . . 
. . . . d d d d d d . . . . . . 
. . . . d d d d d d . . . . . . 
. . . . d d d d d d . . . . . . 
. . . . . d d d d . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Rick_Astley, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let The_Person_He_Never_Gave_Up: Sprite = null
let Giving_You_Up: Sprite = null
let Rick_Astley: Sprite = null
Rick_Astley = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . e e e e e e e e e e . . . 
. . . e e e e e e e e e e . . . 
. . . e e 5 e e e e e e e . . . 
. . . e 5 5 5 5 5 5 5 5 e . . . 
. . . 5 5 f 5 5 5 5 f 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 2 2 5 5 5 . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . f f f d b b d f f f . . . 
. . . f f f d d d d f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
`, SpriteKind.Player)
controller.moveSprite(Rick_Astley)
Rick_Astley.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(5)
info.setScore(0)
game.onUpdateInterval(2000, function () {
    The_Person_He_Never_Gave_Up = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . e e . . . . e . . . . . 
. . e e e e e e e e e . . . . . 
. . e e e e e e 5 5 5 e e e . . 
. . e 5 5 5 5 5 5 5 5 e e e . . 
. e e 5 5 f 5 5 5 5 f 5 e e e . 
. e e 5 5 f f 5 5 f f 5 e e e . 
. e e 5 5 5 5 5 5 f 5 5 5 e e . 
. e e 5 5 5 f 5 5 5 f 5 5 e e . 
. e e 5 5 5 5 5 5 5 5 5 5 5 e . 
. e . 5 5 3 3 3 3 3 3 5 5 5 e . 
. e . 5 5 5 5 5 5 5 5 5 5 5 e . 
. . . . 5 5 5 5 5 5 5 5 5 5 e . 
. . . . 5 5 5 5 5 5 5 5 5 5 e . 
. . . . . 5 5 5 5 5 5 5 5 . . . 
. . . . . . . 5 5 5 5 . . . . . 
`, SpriteKind.Enemy)
    The_Person_He_Never_Gave_Up.setVelocity(-100, 0)
    The_Person_He_Never_Gave_Up.setPosition(180, Math.randomRange(0, 180))
})
