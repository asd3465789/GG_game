Trap = function(gaming) {
    this.traps_container = new PIXI.Container();
    this.gaming = gaming;

    switch (who) {
        case 1:
            this.ground = 480;
            this.rest_ground = 480;
            break;
        case 2:
            this.ground = 510;
            this.rest_ground = 510;
            break;
        case 3:
            this.ground = 480;
            this.rest_ground = 480;
            break;
    }

    this.traps = [];
    this.ontrapID = 0;
    this.ontrap_pos = 0;
    this.player_pos = 0;
    this.trap_num = 0;

    this.alltraps_width = 800;

    for (var i = 1; i < 8; i++) {
        var val = i < 10 ? '0' + i : i;
        this.traps.push(PIXI.Texture.fromFrame('trap_' + val + '.png'));
    }
    this.addtrap(0);
}


Trap.prototype.get_trap_num = function() {
    return this.trap_num;
}

Trap.prototype.addtrap = function(ID) {

    var Texture = new PIXI.Sprite(this.traps[ID]);
    Texture.zIndex = -3;
    this.trap_num += 1;
    Texture.anchor.set(0, 0);

    this.traps_container.addChild(Texture);
    if (this.alltraps_width > Math.abs(this.traps_container.x) + 1300)
        Texture.x = this.alltraps_width;
    else {
        Texture.x = Math.abs(this.traps_container.x) + 1300;
        this.alltraps_width = Math.abs(this.traps_container.x) + 1300;
    }


    switch (ID) {
        case 0:
            Texture.y = trap_type.car_y;
            this.alltraps_width += trap_type.car_w;
            Texture.anchor.set(trap_type.car_anchor_x, 0);
            break;
        case 1:
            Texture.y = trap_type.car_y;
            this.alltraps_width += trap_type.car_w;

            Texture.anchor.set(trap_type.car_anchor_x, 0);
            break;
    }

    this.gaming.addChild(this.traps_container);

    this.gaming.children.sort(function(a, b) {
        a.zIndex = a.zIndex || 0;
        b.zIndex = b.zIndex || 0;
        return b.zIndex - a.zIndex
    });

}

var trap_type = {
    car_w: 295,
    car_h: 135,
    car_y: 390,
    car_anchor_x: 0.04
};

Trap.prototype.getground = function() {
    return this.ground;
}

Trap.prototype.update = function(speed) {

    this.ontrap_pos = this.traps_container.getChildAt(this.ontrapID).x;
    this.player_pos = Math.abs(this.traps_container.x) + 360;

    if (this.player_pos > this.ontrap_pos && this.player_pos < this.ontrap_pos + trap_type.car_w) {
        this.ground = this.rest_ground - trap_type.car_h;

    }

    if (this.player_pos > this.ontrap_pos + trap_type.car_w) {
        this.ground = this.rest_ground;

        if (this.ontrapID < this.trap_num - 1) {
            this.ontrapID += 1;
        }
    }

    if (this.traps_container.getChildAt(0).x < this.player_pos - 650 && this.ontrapID != 0) {
        this.traps_container.removeChildAt(0);
        this.ontrapID -= 1;
        this.trap_num -= 1;

    }




    this.traps_container.x -= 2 * speed;
}