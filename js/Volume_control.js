Volume_control = function(container){
	this.container=container;
	if(BGM_maxvolume>0)
    this.volume_button = PIXI.Sprite.fromImage('Volume');
else
	this.volume_button = PIXI.Sprite.fromImage('No_Volume');
    this.volume_button.anchor.set(0.5);
    this.volume_button.x = 1230;
    this.volume_button.y = 50;
    this.volume_button.scale.x = 0.75;
    this.volume_button.scale.y = 0.75;
    this.container.addChild(this.volume_button);
    this.volume_button.interactive = true;
    this.volume_button.buttonMode = true;

    this.volume_button.on('pointerdown', function() {
        if (BGM_maxvolume > 0) {
            BGM_maxvolume = 0;
            SE_maxvolume = 0;
            this.texture = PIXI.Texture.fromImage('No_Volume');
        } else {
            BGM_maxvolume = 0.7;
            SE_maxvolume = 0.7;
            this.texture = PIXI.Texture.fromImage('Volume');
        }
        loader.resources.menu_bgm.data.volume = BGM_maxvolume;
        loader.resources.chose_bgm.data.volume = BGM_maxvolume;
        loader.resources.button_se.data.volume = SE_maxvolume;
        loader.resources.button_se.data.play();
    });
}