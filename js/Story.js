Story = function() {

    this.container = new PIXI.Container();
    this.house = PIXI.Sprite.fromImage('house');
    this.house.anchor.set(0.5);
    this.house.x = 640;
    this.house.y = 360;
    this.house.tint = 0x333333;
    this.container.addChild(this.house);


    this.graphics = new PIXI.Graphics();
    this.graphics.beginFill(0x888888);
    this.graphics.drawRect(0, 500, 1280, 220);
    this.graphics.endFill();
    this.graphics.alpha = 0.85;
    this.container.addChild(this.graphics);

    this.gg = PIXI.Sprite.fromImage('gg_talk');
    this.gg.anchor.set(0.5);
    this.gg.x = 250;
    this.gg.y = 300;
    this.gg.scale.x = 0.8;
    this.gg.scale.y = 0.8;
    this.container.addChild(this.gg);

    this.wordID = 0;
    this.wordsID = 0;
    this.gg_words = ["早安啊承霖。", "123", "54321"];

    this.brother = PIXI.Sprite.fromImage('brother_talk');
    this.brother.anchor.set(0.5);
    this.brother.x = 1050;
    this.brother.y = 300;
    this.brother.scale.x = 0.8;
    this.brother.scale.y = 0.8;
    this.container.addChild(this.brother);


    var talk_style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 32,
        fontWeight: 800,
        fill: ['#ffffff'], // gradient
    });

    this.talk_text = new PIXI.Text("", talk_style);
    this.talk_text.x = 100;
    this.talk_text.y = 600;
    this.talk_text.style.lineHeight = 80;
    this.talk_text.zIndex = -5;
    this.container.addChild(this.talk_text);

    this.timer = 0;
}



Story.prototype.GG_talking = function() {
	var words=this.gg_words[0];
    this.talk_text.text+=words[ this.wordID];
}

Story.prototype.update = function() {
	console.log(this.timer);
    this.timer++;
    if (this.timer > 3) {

    	this.GG_talking();
    	 this.wordID++;
        this.timer = 0;
    }
    renderer.render(this.container);
}