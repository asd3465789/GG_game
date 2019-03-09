Menu = function() {

    stage.menu = new PIXI.Container();
    this.ui_bg_gg = new Ui_bg_gg();
    this.startBT = PIXI.Sprite.fromImage('start_button');
    this.startBT.anchor.set(0.5);
    this.startBT.x = app.screen.width / 2;
    this.startBT.y = app.screen.height / 2;
    this.startBT.scale.x = 0.6;
    this.startBT.scale.y = 0.6;

    this.startBT.interactive = true;
    this.startBT.buttonMode = true;
    this.startBT.on('pointerdown', function() { this.tint = 0xAAAAAA; });
    this.startBT.on('pointerup', function() {
        scens_ID = 1;
    });
    this.startBT.on('pointerover', function() { this.tint = 0xDDDDDD; });
    this.startBT.on('pointerout', function() { this.tint = 0xFFFFFF; });

    stage.menu.addChild(this.startBT);
}
Menu.prototype.update = function() {

    renderer.render(stage.menu);
    this.ui_bg_gg.update();
}