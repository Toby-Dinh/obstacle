let z = 0
let x = 0
let y = 0
let line = 0
player.onChat("lightning", function () {
    blocks.fill(
    EMERALD_BLOCK,
    world(-5, -20, 158),
    world(5, -20, 158),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS,
    world(-5, -21, 159),
    world(5, -21, 159),
    FillOperation.Replace
    )
    blocks.fill(
    LIME_CONCRETE_POWDER,
    world(-5, -20, 159),
    world(5, -18, 159),
    FillOperation.Replace
    )
    blocks.fill(
    MAGMA_BLOCK,
    world(-5, -20, 160),
    world(5, -20, 199),
    FillOperation.Replace
    )
    blocks.fill(
    IRON_BLOCK,
    world(-5, -20, 200),
    world(5, -20, 205),
    FillOperation.Replace
    )
    blocks.fill(
    IRON_BLOCK,
    world(-5, -19, 205),
    world(5, -15, 205),
    FillOperation.Replace
    )
})
// Ice Boat
player.onChat("ice", function () {
    blocks.fill(
    ICE,
    world(-5, -20, 50),
    world(5, -20, 99),
    FillOperation.Replace
    )
    blocks.fill(
    SNOW,
    world(-5, -19, 50),
    world(-5, -18, 99),
    FillOperation.Replace
    )
    blocks.fill(
    SNOW,
    world(5, -19, 50),
    world(5, -18, 99),
    FillOperation.Replace
    )
    for (let index = 0; index < 30; index++) {
        blocks.place(SNOW, randpos(
        world(-4, -19, 50),
        world(4, -19, 99)
        ))
    }
    blocks.fill(
    BLACK_CONCRETE,
    world(-5, -20, 100),
    world(5, -20, 108),
    FillOperation.Replace
    )
})
player.onChat("sand", function () {
    blocks.fill(
    GOLD_BLOCK,
    world(-5, -20, 109),
    world(5, -20, 109),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS,
    world(-5, -21, 110),
    world(5, -21, 149),
    FillOperation.Replace
    )
    blocks.fill(
    SAND,
    world(-5, -20, 110),
    world(5, -20, 149),
    FillOperation.Replace
    )
    blocks.fill(
    BLACK_CONCRETE,
    world(-5, -20, 150),
    world(5, -20, 157),
    FillOperation.Replace
    )
})
player.onTravelled(BOUNCE, function () {
    mobs.applyEffect(JUMP_BOOST, mobs.target(LOCAL_PLAYER), 5, 20)
})
player.onChat("rings", function () {
    z = 20
    for (let index = 0; index < 5; index++) {
        x = randint(-5, 5)
        y = randint(-40, -10)
        shapes.circle(
        GLOWSTONE,
        posCamera(x, y, z),
        4,
        Axis.Z,
        ShapeOperation.Hollow
        )
        z += 30
    }
    player.tell(mobs.target(ALL_PLAYERS), "Rings are done")
})
player.onChat("fly", function () {
    blocks.fill(
    IRON_BLOCK,
    world(-5, 0, 197),
    world(5, 0, 207),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(-1, 0, 201),
    world(1, 0, 203),
    FillOperation.Replace
    )
    blocks.place(BEACON, world(0, -19, 202))
    blocks.place(DIAMOND_BLOCK, world(0, 0, 207))
})
loops.forever(function () {
    if (blocks.testForBlock(SNOW, pos(0, -1, 0))) {
        mobs.give(
        mobs.target(LOCAL_PLAYER),
        BOAT,
        1
        )
    }
    if (blocks.testForBlock(GOLD_BLOCK, pos(0, -1, 0))) {
        mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 5, 25)
        gameplay.title(mobs.target(ALL_PLAYERS), "RUN!", "")
        loops.pause(1000)
        line = 110
        for (let index = 0; index < 40; index++) {
            blocks.fill(
            AIR,
            world(-5, -21, line),
            world(5, -21, line),
            FillOperation.Replace
            )
            line += 1
        }
    }
    if (blocks.testForBlock(EMERALD_BLOCK, pos(0, -1, 0))) {
        mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 5, 25)
        gameplay.title(mobs.target(NEAREST_PLAYER), "RUN!", "")
        blocks.fill(
        AIR,
        world(-5, -21, 159),
        world(5, -21, 159),
        FillOperation.Replace
        )
        for (let index = 0; index < 200; index++) {
            mobs.spawn(LIGHTNING_BOLT, randpos(
            world(-5, -20, 165),
            world(5, -20, 199)
            ))
        }
    }
    if (blocks.testForBlock(BEACON, pos(0, -1, 0))) {
        mobs.applyEffect(LEVITATION, mobs.target(LOCAL_PLAYER), 3, 10)
        mobs.give(
        mobs.target(LOCAL_PLAYER),
        ELYTRA,
        1
        )
        player.execute(
        "/give @s firework_rocket 64"
        )
    }
})
// Lava Jump
player.onChat("lava", function () {
    blocks.fill(
    BLACK_CONCRETE,
    world(-2, -40, -2),
    world(2, -40, 2),
    FillOperation.Replace
    )
    blocks.fill(
    LAVA,
    world(-10, -60, -10),
    world(10, -55, 40),
    FillOperation.Replace
    )
    x = 0
    y = -40
    z = 6
    for (let index = 0; index < 4; index++) {
        shapes.sphere(
        SLIME_BLOCK,
        world(x, y, z),
        2,
        ShapeOperation.Replace
        )
        y += 5
        z += 10
    }
    blocks.fill(
    BLACK_CONCRETE,
    world(-5, -20, 40),
    world(5, -20, 49),
    FillOperation.Replace
    )
})
player.onChat("tp", function () {
    player.teleport(world(0, -37, 0))
})
