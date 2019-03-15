Menu = function() {

    loader.resources.menu_bgm.data.BGM_volume=0;
    loader.resources.menu_bgm.data.play();

    this.menu = new PIXI.Container();
    this.ui_bg_gg = new Ui_bg_gg(this.menu);
    this.startBT = PIXI.Sprite.fromImage('start_button');
    this.startBT.anchor.set(0.5);
    this.startBT.x = app.screen.width / 2;
    this.startBT.y = app.screen.height / 2;
    this.startBT.scale.x = 0.6;
    this.startBT.scale.y = 0.6;
    this.startBT.tint = 0xFFFFFF;
    this.startBT.interactive = true;
    this.startBT.buttonMode = true;
    this.startBT.on('pointerdown', function() { this.tint = 0xAAAAAA;

    loader.resources.button_se.data.volume=SE_maxvolume;    
    loader.resources.button_se.data.play();
     });
    this.startBT.on('pointerup', function() {
        loader.resources.menu_bgm.data.pause();
        loader.resources.menu_bgm.data.currentTime = 0;        
        loader.resources.menu_bgm.data.volume=0;
        scens_ID = scens.chose;

    });
    this.startBT.on('pointerover', function() { this.tint = 0xDDDDDD; });
    this.startBT.on('pointerout', function() { this.tint = 0xFFFFFF; });

    this.menu.addChild(this.startBT);
    

}
Menu.prototype.update = function() {
    if(loader.resources.menu_bgm.data.volume<BGM_maxvolume)
       loader.resources.menu_bgm.data.volume+=0.001;
    else
       loader.resources.menu_bgm.data.volume=BGM_maxvolume;

    renderer.render(this.menu);
    this.ui_bg_gg.update();
}