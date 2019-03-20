Transition = function(container, gotoID, Is_start) {
    this.container = container;
    this.Is_start = Is_start;
    this.transition_mask = PIXI.Sprite.fromImage('transition_img');
    this.transition_mask.zIndex = -6;
    this.transition_mask.anchor.set(0.25, 0);

    if (this.Is_start)
        this.transition_mask.x = -2000;
    else
        this.transition_mask.x = 0;

    this.container.addChild(this.transition_mask);
    this.gotoID = gotoID;
    this.update();

}

Transition.prototype.update = function() {

    if (this.transition_mask.x + 30 < 0 && this.Is_start || this.transition_mask.x + 30 < 2000 && !this.Is_start) {
        this.transition_mask.x += 30;
        requestAnimationFrame(this.update.bind(this));
    } else {
        if (this.Is_start)
            this.transition_mask.x = 0;
        else
            this.transition_mask.x = 2000;

        if (this.gotoID != -1)
            scens_ID = this.gotoID;
    }

}