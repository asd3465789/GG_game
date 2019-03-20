Long_shot = function(gaming) {
    this.container = new PIXI.Container();
    this.container.zIndex = -1;

    this.gaming = gaming;

    this.Building = [];
    this.player_pos = 0;
    this.build_num = 0;

    this.allbuildings_width = 0;

    for (var i = 1; i < 19; i++) {
        var val = i < 10 ? '0' + i : i;
        this.Building.push(PIXI.Texture.fromFrame('long_shot_build_' + val + '.png'));
    }

    for (var i = 0; i < 20; i++) {
        this.addbuilding(Math.floor(Math.random() * 18));
    }

}

Long_shot.prototype.addbuilding = function(ID) {

    var Texture = new PIXI.Sprite(this.Building[ID]);

    this.building_num += 1;
    Texture.scale.x = 1;
    Texture.scale.y = 1;
    Texture.anchor.set(0, 1);
    Texture.y = 452;
    Texture.x = this.allbuildings_width;

    this.container.addChild(Texture);

    this.allbuildings_width += 120;
    this.gaming.addChild(this.container);

    this.gaming.children.sort(function(a, b) {
        a.zIndex = a.zIndex || 0;
        b.zIndex = b.zIndex || 0;
        return b.zIndex - a.zIndex
    });

}


Long_shot.prototype.update = function(speed) {

    this.player_pos = Math.abs(this.container.x) + 360;

    if (this.container.getChildAt(0).x < this.player_pos - 650) {
        this.container.removeChildAt(0);
        this.build_num -= 1;
        this.addbuilding(Math.floor(Math.random() * 18));

    }


    this.container.x -= 1 * speed;
}