Player = function() {


    var frames_run = [],
        frames_idle = [],
        frames_jumpup = [],
        frames_jumpdown = [];

    for (var i = 5; i < 13; i++) {
        var val = i < 10 ? '0' + i : i;
        frames_run.push(PIXI.Texture.fromFrame('gg_run_' + val + '.png'));
    }
    frames_idle.push(PIXI.Texture.fromFrame('gg_run_01.png'));
    frames_idle.push(PIXI.Texture.fromFrame('gg_run_02.png'));
    frames_jumpup.push(PIXI.Texture.fromFrame('gg_run_03.png'));
    frames_jumpdown.push(PIXI.Texture.fromFrame('gg_run_04.png'));

    this.anim_run = create_animation(frames_run);

    // this.anim_idle=create_animation(frames_idle);

    this.anim_jumpup = create_animation(frames_jumpup);

    this.anim_jumpdown = create_animation(frames_jumpdown);

    this.x_velocity = 0;
    this.y_velocity = 0;
    this.x = 360;
    this.y = app.screen.height / 2;
   

 stage.gaming.interactive = true;

    stage.gaming.on('pointerdown', function() {
        controller.screen_click.active = true;
    });

     stage.gaming.on('pointerup', function() {
        controller.screen_click.active = false;
    });
     
    this.isJump = false;
    this.isdie = false;
    this.ground = 480;
}

create_animation = function(anim_in, speed) {
    var anim = new PIXI.extras.AnimatedSprite(anim_in);
    anim.zIndex = -1;

    anim.animationSpeed = 0.2;
    anim.anchor.set(0.5);
    anim.play();
    stage.gaming.addChild(anim);
    anim.visible = false;
    return anim;
}

Player.prototype.set_anim = function(anim) {
    anim.x = this.x;
    anim.y = this.y;
}

Player.prototype.setground = function(g) {
    this.ground = g;
}

Player.prototype.die = function() {
    return this.isdie;
}


Player.prototype.update = function(speed) {

    console.log(controller.screen_click.active);

    if ((controller.space.active || controller.screen_click.active) && !this.isJump) {
      
        this.y_velocity -= 50;
        this.isJump = true;

    }

    if (this.y >= this.ground && this.y_velocity >= 0) {
        this.y_velocity = 0;
        this.isJump = false;
        this.anim_run.visible = true;
        this.anim_jumpup.visible = false;
        this.anim_jumpdown.visible = false;
        this.set_anim(this.anim_run);

    } else {

        if (this.y_velocity < 0) {
            this.anim_run.visible = false;
            this.anim_jumpup.visible = true;
            this.anim_jumpdown.visible = false;

            this.set_anim(this.anim_jumpup);

        } else {
            this.anim_run.visible = false;
            this.anim_jumpup.visible = false;
            this.anim_jumpdown.visible = true;

            this.set_anim(this.anim_jumpdown);

        }

        this.y_velocity += 0.9;

    }

    this.anim_run.animationSpeed = 0.12 * speed;

    if (this.y > this.ground + 10) {

        this.isdie = true;
    }

    this.x += this.x_velocity;
    if (this.y_velocity < -15)
        this.y += -15;
    else this.y += this.y_velocity;

    this.x_velocity *= 0.9;
    this.y_velocity *= 0.9;


}