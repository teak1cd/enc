function imgFrame(x,y,w,h){
  this.corner = new vector2(x,y);
  this.size = new vector2(w,h);
  if(this.corner.type !== "vector2"){
    if(x.type === "vector2"){
      this.corner = x;
    }else{
      console.warn("can not find corner position for imgFrame");
      throw new typeError();
    }
    if(y.type === "vector2"){
      this.size = y;
    }else if(y.type === "Number"){
      this.size = new vector2(y,w);
    }else{
      console.warn("can not find size for imgFrame");
      throw new typeError();
    }
  }
}

imgFrame.prototype.type = "imgFrame";

imgFrame.prototype.get = function(){
return new imgFrame(this.corner.x,this.corner.y,this.size.x,this.size.y,this.image);
}
