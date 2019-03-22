var screen_size = [1280, 720];
var ratio = screen_size[0] / screen_size[1];
app = new PIXI.Application({ width: screen_size[0], height: screen_size[1] });
loader = app.loader;
BGM_maxvolume = 0.7;
SE_maxvolume = 0.7;

score=0;

scens = {
    loading: 0,
    menu: 1,
    chose: 2,
    gaming: 3,
    end: 4
};

Main = function() {

    app.renderer.autoResize = true;
    scens_ID = scens.menu; //1=menu 2=chose_player 3=gaming 
    last_ID = -1; //-1=no scens
    who = 1;
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
    loader.add("negative_face", "images/BOY_face.png");
    loader.add("gaming_bg", "images/gaming_bg.png");
    loader.add("transition_img", "images/transition.png");
    loader.add("start_button", "images/UI/Start_button.png");
    loader.add("GG_title", "images/start_gg.png");
    loader.add("Volume", "images/UI/volume.png");
    loader.add("No_Volume", "images/UI/no_volume.png");

    loader.add("restart_BT", "images/UI/restart_button.png");
loader.add("backmenu_BT", "images/UI/backmenu_button.png");
loader.add("web_BT", "images/UI/web_button.png");


    loader.add("end_face1", "images/end_face1.png");
    loader.add("end_face2", "images/end_face2.png");
    loader.add("end_face3", "images/end_face3.png");
    loader.add("end_face4", "images/end_face4.png");
    loader.add("end_face5", "images/end_face5.png");
    loader.add("S", "images/S.png");
    loader.add("A", "images/A.png");
    loader.add("B", "images/B.png");
    loader.add("C", "images/C.png");
    loader.add("F", "images/F.png");
    loader.add("gg_run", "images/gg_sprites.json");
    loader.add("pug_run", "images/pug_sprites.json");
    loader.add("negative_run", "images/negative_run.json");
    loader.add("road", "images/road_sprites.json");
    loader.add("trap", "images/trap_sprites.json");
    loader.add("build", "images/build_sprites.json");

    loader.add("long_shot_building", "images/long_shot_building.json");

    loader.add("menu_bgm", "sound/The_Big_Beat_80s.mp3");
    loader.add("gaming_bgm", "sound/Powerup.mp3");
    loader.add("chose_bgm", "sound/Alternate.mp3");
    loader.add("jump_se", "sound/se/jump01.mp3");
    loader.add("dead_se", "sound/se/powerdown07.mp3");
    loader.add("button_se", "sound/se/poka01.mp3");

    loader.on("progress", loadProgressHandler)
    loader.load(this.setup.bind(this));

}

function loadProgressHandler(loader, resource) {
    loading=new Loading(loader.progress);
    console.log("loading: " + resource.url);

    console.log("progress: " + loader.progress + "%");

    console.log("loading: " + resource.name);
}

Main.prototype.setup = function() {
    this.update();
}

Main.prototype.update = function() {

    switch (scens_ID) {      
        case scens.menu:
            if (scens_ID != last_ID) {
                menu = new Menu();
                last_ID = scens_ID;
            }
            menu.update();
            break;
        case scens.chose:

            if (scens_ID != last_ID) {
                chose = new Chose();
                last_ID = scens_ID;
            }
            chose.update();
            break;
        case scens.gaming:
            if (scens_ID != last_ID) {
                gaming = new Gaming();
                last_ID = scens_ID;
            }
            gaming.update();
            break;

        case scens.end:
            if (scens_ID != last_ID) {
                end = new End();
                last_ID = scens_ID;
            }
            end.update();
            break;
    }

    requestAnimationFrame(this.update.bind(this));
}