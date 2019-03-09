Ui_bg_gg=function(){

    var farTexture = PIXI.Texture.fromImage("bg_gg");
    this.bg = new PIXI.extras.TilingSprite(farTexture, app.screen.width, app.screen.height);
    this.bg.position.x = 0;
    this.bg.position.y = 0;
    this.bg.tilePosition.x = 0;
    this.bg.tilePosition.y = 0;
    stage.menu.addChild(this.bg);

}

Ui_bg_gg.prototype.update=function(){
    this.bg.tilePosition.x += 1;
    this.bg.tilePosition.y += 1;

}