Chose = function() {


    loader.resources.chose_bgm.data.volume=BGM_maxvolume;
    loader.resources.chose_bgm.data.play();
    this.chose = new PIXI.Container();
    

  
    this.ui_bg_gg = new Ui_bg_gg(this.chose);

   this.volume_control=new Volume_control(this.chose);



    this.GG_BT = PIXI.Sprite.fromImage('gg_face');
    this.GG_BT.anchor.set(0.5);
    this.GG_BT.x = app.screen.width / 4;
    this.GG_BT.y = 300;
    this.GG_BT.scale.x = 0.8;
    this.GG_BT.scale.y = 0.8;
    this.GG_BT.interactive = true;
    this.GG_BT.buttonMode = true;
    this.GG_BT.tint = 0xAAAAAA;
    this.GG_BT.container=this.chose;
    this.GG_BT.on('pointerdown', function() { this.tint = 0x555555; });
    this.GG_BT.on('pointerup', function() {
        loader.resources.chose_bgm.data.pause();
        loader.resources.chose_bgm.data.currentTime=0;
        who = 1;
         this.tint = 0xFFFFFF;
        this.transition=new Transition(this.container,scens.gaming,true);
    });
    this.GG_BT.on('pointerover', function() { this.tint = 0xFFFFFF; });
    this.GG_BT.on('pointerout', function() { this.tint = 0xAAAAAA; });  


    this.PUG_BT = PIXI.Sprite.fromImage('pug_face');
    this.PUG_BT.anchor.set(0.5);
    this.PUG_BT.x = app.screen.width / 4 * 2;
    this.PUG_BT.y = 300;
    this.PUG_BT.scale.x = 0.8;
    this.PUG_BT.scale.y = 0.8;
    this.PUG_BT.interactive = true;
    this.PUG_BT.buttonMode = true;
    this.PUG_BT.tint = 0xAAAAAA;
    this.PUG_BT.container=this.chose;
    this.PUG_BT.on('pointerdown', function() { this.tint = 0x555555; });
    this.PUG_BT.on('pointerup', function() {
        loader.resources.chose_bgm.data.pause();
        loader.resources.chose_bgm.data.currentTime=0;
        who = 2;
         this.tint = 0xFFFFFF;
         this.transition=new Transition(this.container,scens.gaming,true);
    });
    this.PUG_BT.on('pointerover', function() { this.tint = 0xFFFFFF; });
    this.PUG_BT.on('pointerout', function() { this.tint = 0xAAAAAA; });



    this.BOY_BT = PIXI.Sprite.fromImage('negative_face');
    this.BOY_BT.anchor.set(0.5);
    this.BOY_BT.x = app.screen.width / 4 * 3;
    this.BOY_BT.y = 300;
    this.BOY_BT.scale.x = 0.8;
    this.BOY_BT.scale.y = 0.8;
    this.BOY_BT.interactive = true;
    this.BOY_BT.buttonMode = true;
    this.BOY_BT.tint = 0xAAAAAA;
    this.BOY_BT.container=this.chose;
    this.BOY_BT.on('pointerdown', function() { this.tint = 0x555555; });
    this.BOY_BT.on('pointerup', function() {
        loader.resources.chose_bgm.data.pause();
        loader.resources.chose_bgm.data.currentTime=0;
        who = 3;
         this.tint = 0xFFFFFF;
         this.transition=new Transition(this.container,scens.gaming,true);
    });
    this.BOY_BT.on('pointerover', function() { this.tint = 0xFFFFFF; });
    this.BOY_BT.on('pointerout', function() { this.tint = 0xAAAAAA; });


    this.chose.addChild(this.GG_BT);
    this.chose.addChild(this.PUG_BT);
    this.chose.addChild(this.BOY_BT);


    this.transition=new Transition(this.chose,-1,false);
}

Chose.prototype.update = function() {

    renderer.render(this.chose);
    this.ui_bg_gg.update();
}