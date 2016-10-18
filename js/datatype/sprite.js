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
sprite.prototype._tick = function(){
  this._frame++;
  if(this._frame>=this.animationLoop[1]){
    if(this.animationFinishAction==="repeat"){
      this._frame=this.animationLoop[0];
    }else if(this.animationFinishAction==="setAnimation"){
      
    }
  }
}
