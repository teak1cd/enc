function sprite(ARR_anim,ARR_frame,Sprite_sheet){
  this._ss = new Image();
  this._ss.src=Sprite_sheet;
  this.animations = ARR_anim || {};
  this.frames = ARR_frame || [];
  this._frame = 0;
  this._animationLoop = [0,0];
  this.animationFinishAction = "none";
  this.nextAnimation="";
}

sprite.prototype.type = "sprite";

sprite.prototype.finishActions = {"none":"none","repeat":"repeat","setAnimation":"setAnimation"};

sprite.prototype.default(){
  this.animationLoop[0] = this.animationLoop[1];
  this.animationFinishAction = this.finishActions.none;
  console.warn("defaulting on frame "+this._frame);
};

sprite.prototype._tick = function(){
  if(this._frame>=this.animationLoop[1]){
    if(this.animationFinishAction==="repeat"){
      this._frame=this.animationLoop[0];
    }else if(this.animationFinishAction==="setAnimation"){
      if(this.nextAnimation===""){
        console.warn("missing next animation, defaulting to action:\"none\"");
        this.default();
      }
      this._animationLoop[0] = this.animations[this.nextAnimation].startFrame;
      this._animationLoop[1] = this._animationLoop[0]+this.animations[this.nextAnimation].length;
      this.nextAnimation = "";
    }
  }else{
    this._frame++;
  }
};

sprite.prototype.getFrame = function(){
 return this.frames[this._frame];
}
