Builds=function(){
	PIXI.Container.call(this);
	this.builds=[];

	for (var i = 0; i < 9; i++) {
        var val = i < 10 ? '0' + i : i;
        builds.push(PIXI.Texture.fromFrame('builds' + val + '.png'));
    }
    
    this.slices=[];
	
}

Builds.prototype.addslice=function(){
this.slices.push
}

Builds.prototype. remove_old_build=function(){

}