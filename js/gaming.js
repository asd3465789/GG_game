Gaming = function() {
    this.gaming = new PIXI.Container();
    this.leval_speed = 1;
    this.gaming_bg = new Gaming_bg(this.gaming);
    this.road_create = new Road_create(this.gaming);

    this.trap = new Trap(this.gaming);
    this.player = new Player(this.gaming);

    this.gaming.children.sort(function(a, b) {
        a.zIndex = a.zIndex || 0;
        b.zIndex = b.zIndex || 0;
        return b.zIndex - a.zIndex
    });


this.gaming.interactive = true;

  this.gaming.on('pointerdown', function() {
        controller.screen_click.active = true;
    });

    this.gaming.on('pointerup', function() {
        controller.screen_click.active = false;
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

    this.player.setground(this.trap.getground());
    this.player.update(this.leval_speed);

    renderer.render(this.gaming);
}

Gaming.prototype.die = function() {
    this.leval_speed = 0;

    scens_ID = 0;
}