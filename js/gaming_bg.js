Gaming_bg=function(gaming){

    var Texture = PIXI.Texture.fromImage("gaming_bg");
    this.bg = new PIXI.extras.TilingSprite(Texture, app.screen.width, app.screen.height);
    this.bg.position.x = 0;
    this.bg.position.y = 0;
    this.bg.tilePosition.x = 0;
    this.bg.tilePosition.y = 0;
    gaming.addChild(this.bg);

}

Gaming_bg.prototype.update= function(speed){
    this.bg.tilePosition.x -= 0.5*speed;

}