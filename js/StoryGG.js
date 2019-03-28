StoryGG = function(container) {

    this.deadline = this.ground;
    this.container = container;
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
    this.anim_run = this.create_animation(frames_run,0.1);
    this.anim_idle = this.create_animation(frames_idle,0.05);

    this.x = 360;
    this.y = 450;
}

StoryGG.prototype.create_animation = function(anim_in,speed) {
    var anim = new PIXI.extras.AnimatedSprite(anim_in);
    anim.zIndex = -3;
    anim.animationSpeed = speed;
    anim.anchor.set(0.5);
    anim.play();
    this.container.addChild(anim);
    anim.visible = false;
    return anim;
}
StoryGG.prototype.set_anim = function(anim) {
    anim.x = this.x;
    anim.y = this.y;
}

StoryGG.prototype.alldisappeare = function() {

        this.anim_run.visible = false;
        this.anim_idle.visible=false;
}


StoryGG.prototype.move = function(x) {
    if (this.x < x) {
        this.x+=5;
        this.anim_run.visible = true;
        this.anim_idle.visible=false;
         this.set_anim(this.anim_run);

    } else {
        this.anim_run.visible = false;
         this.anim_idle.visible=true;
          this.set_anim(this.anim_idle);
    }
}