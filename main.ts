let penguin: Sprite = null
for (let index = 0; index < 3000; index++) {
    penguin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 1 f f f f . . . . . 
        . . . . f f f f f 1 f . . . . . 
        . . . f f f f 4 f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f 1 1 1 f f f . . . . 
        . . . f f 1 1 1 1 f f f . . . . 
        . . f f f 1 1 1 1 1 f f . . . . 
        . . f f f 1 1 1 1 1 f f . . . . 
        . . f f f 1 1 1 1 1 f f . . . . 
        . . f f f 1 1 1 1 f f f . . . . 
        . . f f f f 1 1 1 f f . . . . . 
        . . . f . . 1 1 . . . . . . . . 
        `, SpriteKind.Penguin)
    penguin.y = 40
    pause(500)
}
