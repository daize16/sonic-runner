import k from "../kaplayCtx";

export function makeMotobug(pos) {
    return k.add([
        k.sprite("motobug", { anim: "run"} ),
        k.scale(4),
        k.area({ shape: new k.Rect(k.vec2(-5,0),32,32) }),
        k.anchor("center"),
        k.pos(pos),
        k.body({ jumpForce:1700 }),
        k.offscreen(),
        "enemy",
    ]);
}
