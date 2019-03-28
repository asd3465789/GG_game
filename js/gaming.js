Gaming = function() {


    gaming_BGM.play();

    this.container = new PIXI.Container();
    this.leval_speed = 1;
    this.gaming_bg = new Gaming_bg(this.container);
    this.road_create = new Road_create(this.container);
    this.long_shot = new Long_shot(this.container);
    this.trap = new Trap(this.container);
    this.player = new Player(this.container);



    this.timer = 0;

    var speed_style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 32,
        fontWeight: 800,
        fill: ['#FF5511'], // gradient
    });

    this.speed_text = new PIXI.Text("", speed_style);
    this.speed_text.x = 1080;
    this.speed_text.y = 50;
    this.speed_text.style.lineHeight = 80;
    this.speed_text.zIndex = -5;
    this.container.addChild(this.speed_text);

    this.score = 0;
    var score_style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 64,
        fontWeight: 800,
        fill: ['#FF0088'],
    });
    this.score_text = new PIXI.Text("", score_style);
    this.score_text.x = 200;
    this.score_text.y = 60;
    this.score_text.style.lineHeight = 80;
    this.score_text.zIndex = -5;
    this.container.addChild(this.score_text);

    switch (who) {
        case 1:
            this.whoname = 'gg';
            this.ground = 480;
            break;
        case 2:
            this.whoname = 'pug';
            this.ground = 510;
            break;
        case 3:
            this.whoname = 'negative';
            this.ground = 480;
            break;
    }


    this.player_face = PIXI.Sprite.fromImage(this.whoname + '_face');
    this.player_face.anchor.set(0.5);
    this.player_face.x = 120;
    this.player_face.y = 100;
    this.player_face.scale.x = 0.4;
    this.player_face.scale.y = 0.4;
    this.container.addChild(this.player_face);
    this.container.interactive = true;

    this.container.on('pointerdown', function() {

         controller.screen_up.active = false;
        controller.screen_down.active = true;
    });

    this.container.on('pointerup', function() {
         controller.screen_up.active = true;
        controller.screen_down.active = false;        
    });

    this.transition = new Transition(this.container, -1, false);

    this.container.children.sort(function(a, b) {
        a.zIndex = a.zIndex || 0;
        b.zIndex = b.zIndex || 0;
        return b.zIndex - a.zIndex
    });
    this.speed_text.text = '0 km/hr';
    this.score_text.text = "0";

}


Gaming.prototype.update = function() {
    this.timer++;

    this.gaming_bg.update(this.leval_speed);
    this.leval_speed += 0.001;
    this.road_create.update(this.leval_speed);
    this.trap.update(this.leval_speed);
    this.long_shot.update(this.leval_speed);

    if (this.player.die()) {
        this.die();
    }

    if (this.score < 100000)

        this.space = 40;
    else if (this.score < 150000)
        this.space = 170;
    else if (this.score < 200000)
        this.space = 280;
    else if (this.score < 350000)
        this.space = 350;
    else
        this.space = 500;

    if (this.trap.get_trap_num() == 0) {
        this.trap.addtrap(Math.floor(Math.random() * 6.9), this.space);
    } else if (this.trap.get_trap_num() < 3) {

        if (Math.random() * 1000 < 12) {
            this.trap.addtrap(Math.floor(Math.random() * 6.9), this.space);
        }
    } else {
        if (Math.random() * 1000 < 0.8)
            this.trap.addtrap(Math.floor(Math.random() * 6.9), this.space);
    }


    this.player.setground(this.trap.getground(), this.trap.getdeadline());
    this.player.update(this.leval_speed);

    this.score = Math.floor(this.timer / 100) * 100 * Math.floor(this.leval_speed * 10 - 9);
    if (this.score > 0 && Math.floor(this.leval_speed * 10 - 9) > 0) {

        this.speed_text.text = Math.floor(this.leval_speed * 10 - 9) + 'km/hr';
        this.score_text.text = this.score;
        score = this.score;
    }


    renderer.render(this.container);
}

Gaming.prototype.getscore = function() {
    return this.score;
}

Gaming.prototype.die = function() {
    this.leval_speed = 0;
     gaming_BGM.stop();
    this.transition = new Transition(this.container, scens.end, true);
}