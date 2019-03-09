Road_create = function() {
    var all_road = [];

    for (var i = 1; i < 2; i++) {
        var val = i < 10 ? '0' + i : i;
        all_road.push(PIXI.Texture.fromFrame('road_' + val + '.png'));
    }
    this.ground=480;
    this. all_type={
    	normal: [0],
    	small_hole:[2],
    	big_hole:[8,6,7]
    };

  var Texture = PIXI.Texture.fromImage("road_02.png");
    this.bg = new PIXI.extras.TilingSprite(Texture, app.screen.width, app.screen.height/3);
    this.bg.position.x = 0;
    this.bg.position.y = 500;
    this.bg.tilePosition.x = 0;
    this.bg.tilePosition.y = 0;
    stage.gaming.addChild(this.bg);
}

Road_create.prototype.update=function(speed){


    this.bg.tilePosition.x -= 2*speed;
}