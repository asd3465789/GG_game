Trap = function(gaming) {
    this.container = new PIXI.Container();
    this.container.zIndex = -2;
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

    this.deadline = this.ground;
    this.traps = [];
    this.ontrapID = 0;
    this.playerX = 0;
    this.trap_num = 0;

    this.alltraps_width = 1000;

    for (var i = 1; i < 8; i++) {
        var val = i < 10 ? '0' + i : i;
        this.traps.push(PIXI.Texture.fromFrame('trap_' + val + '.png'));
    }
    this.addtrap(1);
}


Trap.prototype.get_trap_num = function() {
    return this.trap_num;
}

Trap.prototype.addtrap = function(ID) {

    var Texture = new PIXI.Sprite(this.traps[ID]);
    this.trap_num ++;
    Texture.anchor.set(0, 1);
    this.container.addChild(Texture);
    if (this.alltraps_width > Math.abs(this.container.x) + 1300)
        Texture.x = this.alltraps_width;
    else {
        Texture.x = Math.abs(this.container.x) + 1300;
        this.alltraps_width = Math.abs(this.container.x) + 1300;
    }

    switch (ID) {
        case 0:
            Texture.y = trap_type.car_y;
            Texture.w = trap_type.car_w;
            Texture.h = trap_type.car_h;
            this.alltraps_width += trap_type.car_w;
            Texture.anchor.set(trap_type.car_anchor_x, 0);
            break;
        case 1:
            Texture.y = trap_type.car_y;
            Texture.w = trap_type.car_w;
            Texture.h = trap_type.car_h;
            this.alltraps_width += trap_type.car_w;

            Texture.anchor.set(trap_type.car_anchor_x, 0);
            break;

        case 2:
            Texture.y = trap_type.mot_y;
            Texture.w = trap_type.mot_w;
            Texture.h = trap_type.mot_h;
            this.alltraps_width += trap_type.mot_w;
             this.alltraps_width += 150;
            Texture.anchor.set(trap_type.mot_anchor_x, 0);
            break;

        case 3:
            Texture.y = trap_type.hole_y;
            Texture.w = trap_type.hole_w;
            Texture.h = trap_type.hole_h;
            this.alltraps_width += trap_type.hole_w;
             this.alltraps_width += 150;
            Texture.anchor.set(trap_type.hole_anchor_x, 0);
            break;
        case 4:
            Texture.y = trap_type.Shole_y;
            Texture.w = trap_type.Shole_w;
            Texture.h = trap_type.Shole_h;
            this.alltraps_width += trap_type.Shole_w;
            this.alltraps_width += 200;
            Texture.anchor.set(trap_type.Shole_anchor_x, 0);
            break;
        case 5:
            Texture.y = trap_type.cones_y;
            Texture.w = trap_type.cones_w;
            Texture.h = trap_type.cones_h;
            this.alltraps_width += trap_type.cones_w;
            this.alltraps_width += 150;
            Texture.anchor.set(trap_type.cones_anchor_x, 0);
            break;
        case 6:
            Texture.y = trap_type.Tcones_y;
            Texture.w = trap_type.Tcones_w;
            Texture.h = trap_type.Tcones_h;
            this.alltraps_width += trap_type.Tcones_w;
            this.alltraps_width += 150;
            Texture.anchor.set(trap_type.Tcones_anchor_x, 0);
            break;
    }

             this.alltraps_width += 20;
    Texture.ID = ID;

    this.gaming.addChild(this.container);

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
    car_anchor_x: 0.04,

    mot_w: 80,
    mot_h: 80,
    mot_y: 450,
    mot_anchor_x: 0,

    hole_w: 120,
    hole_h: -100,
    hole_y: 500,
    hole_anchor_x: 0,

    Shole_w: 30,
    Shole_h: -100,
    Shole_y: 500,
    Shole_anchor_x: 0,

    cones_w: 42,
    cones_h: 80,
    cones_y: 450,
    cones_anchor_x: 0,

    Tcones_w: 55,
    Tcones_h: 100,
    Tcones_y: 430,
    Tcones_anchor_x: 0,
};

Trap.prototype.getground = function() {
    return this.ground;
}
Trap.prototype.getdeadline = function() {
    return this.deadline;
}

Trap.prototype.update = function(speed) {

    this.ontrap = this.container.getChildAt(this.ontrapID);
    this.playerX = Math.abs(this.container.x) + 360;

    if (this.playerX > this.ontrap.x && this.playerX < this.ontrap.x + this.ontrap.w) {
          
        if (this.ontrap.ID != 2 && this.ontrap.ID < 5) {
            this.ground = this.rest_ground - this.ontrap.h;
        }

        this.deadline = this.rest_ground - this.ontrap.h;

    }






    if (this.playerX > this.ontrap.x + this.ontrap.w) {
        this.ground = this.rest_ground;
        this.deadline = this.rest_ground;
        if (this.ontrapID < this.trap_num - 1) {
            this.ontrapID += 1;
        }

    }

    if (this.container.getChildAt(0).x < this.playerX - 650 && this.ontrapID != 0) {
       
        this.container.removeChildAt(0);
        this.ontrapID -= 1;
        this.trap_num -= 1;

    }




    this.container.x -= 2 * speed;
}
