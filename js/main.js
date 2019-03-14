var screen_size = [1280, 720];
var ratio = screen_size[0] / screen_size[1];

Main = function() {

    app = new PIXI.Application({ width: screen_size[0], height: screen_size[1] });
    app.renderer.autoResize = true;
    scens_ID = 0; //0=menu 1=game
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

    var loader = app.loader;
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
    loader.load(this.setup.bind(this));

}

Main.prototype.setup = function() {
    this.update();
}

Main.prototype.update = function() {

    switch (scens_ID) {
        case 0:
            if (scens_ID != last_ID)
                menu = new Menu();
            menu.update();
            break;
        case 1:
            if (scens_ID != last_ID)
                chose = new Chose();
            chose.update();
            break;
        case 2:
            if (scens_ID != last_ID)
                gaming = new Gaming();
            gaming.update();
            break;
    }
    last_ID = scens_ID;

    requestAnimationFrame(this.update.bind(this));
}