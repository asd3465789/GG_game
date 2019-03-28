Loading=function(progress){
	this.progress=Math.floor(progress);
	this.container = new PIXI.Container();
	this.graphics = new PIXI.Graphics();
    this.graphics.beginFill(0xffffff);
    this.graphics.drawRect(100,500, 1080, 40);
    this.graphics.endFill();
    this.graphics.alpha = 1;
    this.container.addChild(this.graphics);

     var progress_style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 62,
        fontWeight: 800,
        fill: ['#FFffff'], 
    });

     this.progress_text = new PIXI.Text("", progress_style);
    this.progress_text.x = 640;
    this.progress_text.anchor.set(0.5, 0);
    this.progress_text.y = 550;
    this.progress_text.style.lineHeight = 80;
    this.progress_text.zIndex = -5;
    this.container.addChild(this.progress_text);

    this.update();
}

Loading.prototype.update=function(){

	this.graphics.drawRect(100,550, 1080/100*this.progress, 40);
	this.progress_text.text= this.progress;

	renderer.render(this.container);
	
}