var screen_size = [1280, 720];
var ratio = screen_size[0] / screen_size[1];

app = new PIXI.Application({ width: screen_size[0], height: screen_size[1] });
loader = app.loader;
BGM_maxvolume=0.08;
SE_maxvolume=0.08;

scens={
    loading: 0,
    menu: 1,
    chose: 2,
    gaming: 3
  
};

Main = function() {

    app.renderer.autoResize = true;
    scens_ID = scens.menu; //1=menu 2=chose_player 3=gaming 
    last_ID = -1; //-1=no scens
    who=1;
    document.body.appendChild(app.view);

    this.game_state = 0; //0=ready 1=gaming

    renderer = app.renderer;
    resize(); 
    this.loading();
}


resize = function() {
    if (window.innerWidth / window.innerHeight >= ratio) {
        var w = window.innerHeight * ratio;
        var h = window.innerHeight;
    } else {
        var w = window.innerWidth;
        var h = window.innerWidth / ratio;
    }
    renderer.view.style.width = w + 'px';
    renderer.view.style.height = h + 'px';
}
window.onresize = resize;

Main.prototype.loading = function() {

    loader.add("bg_gg", "images/bg_gg.png");
    loader.add("gg_face", "images/GG_face.png");
    loader.add("pug_face", "images/PUG_face.png");
    loader.add("boy_face", "images/BOY_face.png");
    loader.add("gaming_bg", "images/gaming_bg.png");
    loader.add("start_button", "images/UI/Start_button.png");

    loader.add("gg_run", "images/gg_sprites.json");
    loader.add("pug_run", "images/pug_sprites.json");
    loader.add("road", "images/road_sprites.json");
    loader.add("trap", "images/trap_sprites.json");
    loader.add("build", "images/build_sprites.json");

    loader.add("menu_bgm","sound/The_Big_Beat_80s.mp3"); 
    loader.add("gaming_bgm","sound/Powerup.mp3");
    loader.add("chose_bgm","sound/Alternate.mp3");    
    loader.add("jump_se","sound/jump01.mp3");
    loader.add("button_se","sound/se/poka01.mp3");
    
    loader.on("progress", loadProgressHandler) 
    loader.load(this.setup.bind(this));

}

function loadProgressHandler(loader, resource) { 
  console.log("loading: " + resource.url); 

  console.log("progress: " + loader.progress + "%"); 

  console.log("loading: " + resource.name);
}

Main.prototype.setup = function() {
    this.update();
}

Main.prototype.update = function() {

    switch (scens_ID) {
        case scens.loading:
            if (scens_ID != last_ID)
            {
                delete gaming;
                menu = new Menu();
                last_ID = scens_ID;
            }
            menu.update();
            break;
        case scens.menu:
            if (scens_ID != last_ID)
            {
                delete gaming;
                menu = new Menu();
                last_ID = scens_ID;
            }
            menu.update();
            break;
        case scens.chose:
            if (scens_ID != last_ID){
    
                chose = new Chose();
                last_ID = scens_ID;
            }
            chose.update();
            break;
        case scens.gaming:
            if (scens_ID != last_ID){

                delete menu;
                
                delete chose;
                gaming = new Gaming();
                last_ID = scens_ID;
            }
            gaming.update();
            break;
    }

    requestAnimationFrame(this.update.bind(this));
}