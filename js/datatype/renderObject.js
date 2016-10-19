function renderObject(pos,sprite){
  this.position = pos;
  this.sprite = sprite;
  if(this.position.type !== "vector2"){
    console.warn("unexpected data type for position when initiating renderObject: please use a vector2");
    throw new typeError();
  }
  if(this.position.type !== "sprite"){
    console.warn("unexpected data type for sprite when initiating renderObject: please use a sprite");
    throw new typeError();
  }
}
