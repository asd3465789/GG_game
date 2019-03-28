Menu = function() {
    menu_BGM.play();
    this.container = new PIXI.Container();

    this.volume_control = new Volume_control(this.container);


    this.GG_title = PIXI.Sprite.fromImage('GG_title');
    this.GG_title.anchor.set(0.5);
    this.GG_title.x = app.screen.width / 2;
    this.GG_title.y = 300;
    this.container.addChild(this.GG_title);


    this.startBT = PIXI.Sprite.fromImage('start_button');
    this.startBT.anchor.set(0.5);
    this.startBT.x = app.screen.width / 2;
    this.startBT.y = 520;
    this.startBT.scale.x = 0.6;
    this.startBT.scale.y = 0.6;
    this.startBT.tint = 0xFFFFFF;
    this.startBT.interactive = true;
    this.startBT.buttonMode = true;
    this.startBT.container = this.container;
    this.startBT.on('pointerdown', function() {
        this.tint = 0xAAAAAA;

        loader.resources.button_se.data.volume = SE_maxvolume;
        loader.resources.button_se.data.play();
    });
    this.startBT.on('pointerup', function() {
        menu_BGM.stop();

        this.transition = new Transition(this.container, scens.story, true);


    });

    this.startBT.on('pointerover', function() { this.tint = 0xDDDDDD; });
    this.startBT.on('pointerout', function() { this.tint = 0xFFFFFF; });

    ;

    this.container.addChild(this.startBT);

    this.transition = new Transition(this.container, -1, false);
    /* loader.resources.menu_bgm.data.BGM_volume = 0;
    loader.resources.menu_bgm.sound.play();

    const sound = PIXI.sound.Sound.from('menu_bgm');
    sound.volume = 0.25;
    sound.play();
*/


}

Menu.prototype.update = function() {

    renderer.render(this.container);

}