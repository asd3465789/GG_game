Gaming = function() {


    loader.resources.gaming_bgm.data.volume=BGM_maxvolume;
    loader.resources.gaming_bgm.data.play();

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

var style = new PIXI.TextStyle({
    fontFamily: 'pixel ,Arial',
    fontSize: 36,
    fontWeight: 800,
    fill: ['#FF5511'], // gradient
});

    this.speed_text= new PIXI.Text("",style);
    this.speed_text.x=1020;
    this.speed_text.y=50;

    this.gaming.addChild(this.speed_text);

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
            this.whoname = 'boy';
            break;
    }

    this.player_face = PIXI.Sprite.fromImage(this.whoname+'_face');
    this.player_face.anchor.set(0.5);
    this.player_face.x = 120;
    this.player_face.y = 100;
    this.player_face.scale.x = 0.4;
    this.player_face.scale.y = 0.4;
    this.gaming.addChild(this.player_face);
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
    
    this.speed_text.text=Math.floor(this.leval_speed*10-9) +'km/hr';
    renderer.render(this.gaming);
}

Gaming.prototype.die = function() {
    this.leval_speed = 0;
    loader.resources.gaming_bgm.data.pause();
    loader.resources.gaming_bgm.data.currentTime = 0;
    scens_ID = scens.menu;
}