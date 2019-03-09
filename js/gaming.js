Gaming = function() {
    stage.gaming = new PIXI.Container();
    this.leval_speed = 1;
    this.gaming_bg = new Gaming_bg();
    this.road_create = new Road_create();

    this.trap = new Trap();
    this.player = new Player();

    stage.gaming.children.sort(function(a, b) {
        a.zIndex = a.zIndex || 0;
        b.zIndex = b.zIndex || 0;
        return b.zIndex - a.zIndex
    });
}


Gaming.prototype.update = function() {
    this.gaming_bg.update(this.leval_speed);
    this.leval_speed += 0.001;
    this.road_create.update(this.leval_speed);
    this.trap.update(this.leval_speed);

    if (this.player.die()) {
        this.die();
    }

    if (this.trap.get_trap_num < 3) {
        if (Math.random() * 1000 < 10)
            this.trap.addtrap(0);
    } else {
        if (Math.random() * 1000 < 5)
            this.trap.addtrap(0);
    }

    this.player.ground = this.road_create.ground;
    this.player.setground(this.trap.getground());
    this.player.update(this.leval_speed);

    renderer.render(stage.gaming);
}

Gaming.prototype.die = function() {
    this.leval_speed = 0;

    scens_ID = 0;
}