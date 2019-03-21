Menu = function() {
    loader.resources.menu_bgm.data.BGM_volume = 0;
  //  loader.resources.menu_bgm.data.loop = true;
    loader.resources.menu_bgm.data.play();

    this.menu = new PIXI.Container();

    this.volume_control = new Volume_control(this.menu);


    this.GG_title = PIXI.Sprite.fromImage('GG_title');
    this.GG_title.anchor.set(0.5);
    this.GG_title.x=app.screen.width / 2;
    this.GG_title.y = 300;
    this.menu.addChild(this.GG_title);


    this.startBT = PIXI.Sprite.fromImage('start_button');
    this.startBT.anchor.set(0.5);
    this.startBT.x = app.screen.width / 2;
    this.startBT.y = 520;
    this.startBT.scale.x = 0.6;
    this.startBT.scale.y = 0.6;
    this.startBT.tint = 0xFFFFFF;
    this.startBT.interactive = true;
    this.startBT.buttonMode = true;
    this.startBT.menu = this.menu;
    this.startBT.on('pointerdown', function() {
        this.tint = 0xAAAAAA;

        loader.resources.button_se.data.volume = SE_maxvolume;
        loader.resources.button_se.data.play();
    });
    this.startBT.on('pointerup', function() {
        loader.resources.menu_bgm.data.pause();
        loader.resources.menu_bgm.data.currentTime = 0;
        loader.resources.menu_bgm.data.volume = 0;

        this.transition = new Transition(this.menu, scens.chose, true);


    });

    this.startBT.on('pointerover', function() { this.tint = 0xDDDDDD; });
    this.startBT.on('pointerout', function() { this.tint = 0xFFFFFF; });

    ;

    this.menu.addChild(this.startBT);

}

Menu.prototype.update = function() {
    if (loader.resources.menu_bgm.data.volume < BGM_maxvolume)
        loader.resources.menu_bgm.data.volume += 0.01;
    else
        loader.resources.menu_bgm.data.volume = BGM_maxvolume;

    renderer.render(this.menu);
}
