Chose = function() {
    this.chose = new PIXI.Container();

    this.GG_BT = PIXI.Sprite.fromImage('gg_face');
    this.GG_BT.anchor.set(0.5);
    this.GG_BT.x = app.screen.width / 4;
    this.GG_BT.y = 250;
    this.GG_BT.scale.x = 0.6;
    this.GG_BT.scale.y = 0.6;
    this.GG_BT.interactive = true;
    this.GG_BT.buttonMode = true;
    this.GG_BT.tint = 0xFFFFFF;
    this.GG_BT.on('pointerdown', function() { this.tint = 0xAAAAAA; });
    this.GG_BT.on('pointerup', function() {
        who = 1;
        scens_ID = 2;
    });
    this.GG_BT.on('pointerover', function() { this.tint = 0xEEEEEE; });
    this.GG_BT.on('pointerout', function() { this.tint = 0xFFFFFF; });  


    this.PUG_BT = PIXI.Sprite.fromImage('pug_face');
    this.PUG_BT.anchor.set(0.5);
    this.PUG_BT.x = app.screen.width / 4 * 2;
    this.PUG_BT.y = 250;
    this.PUG_BT.scale.x = 0.6;
    this.PUG_BT.scale.y = 0.6;
    this.PUG_BT.interactive = true;
    this.PUG_BT.buttonMode = true;
    this.PUG_BT.tint = 0xFFFFFF;
    this.PUG_BT.on('pointerdown', function() { this.tint = 0xAAAAAA; });
    this.PUG_BT.on('pointerup', function() {
        who = 2;
        scens_ID = 2;
    });
    this.PUG_BT.on('pointerover', function() { this.tint = 0xEEEEEE; });
    this.PUG_BT.on('pointerout', function() { this.tint = 0xFFFFFF; });



    this.BOY_BT = PIXI.Sprite.fromImage('boy_face');
    this.BOY_BT.anchor.set(0.5);
    this.BOY_BT.x = app.screen.width / 4 * 3;
    this.BOY_BT.y = 250;
    this.BOY_BT.scale.x = 0.6;
    this.BOY_BT.scale.y = 0.6;
    this.BOY_BT.interactive = true;
    this.BOY_BT.buttonMode = true;
    this.BOY_BT.tint = 0xFFFFFF;
    this.BOY_BT.on('pointerdown', function() { this.tint = 0xAAAAAA; });
    this.BOY_BT.on('pointerup', function() {
        who = 2;
        scens_ID = 2;
    });
    this.BOY_BT.on('pointerover', function() { this.tint = 0xEEEEEE; });
    this.BOY_BT.on('pointerout', function() { this.tint = 0xFFFFFF; });


  
    this.ui_bg_gg = new Ui_bg_gg(this.chose);

    this.chose.addChild(this.GG_BT);
    this.chose.addChild(this.PUG_BT);
    this.chose.addChild(this.BOY_BT);
}
Chose.prototype.update = function() {

    renderer.render(this.chose);
    this.ui_bg_gg.update();
}