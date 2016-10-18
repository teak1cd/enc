function vector2(x,y){
  this.x = x || 0;
  this.y = y || 0;
}

vector2.prototype.type = "vector2";

vector2.prototype.add = function(x,y){
  if(x.type === "vector2"){
    this.x+=x.x;
    this.y+=x.y;
  }else{
    this.x+=x;
    this.y+=y;
  }
}

vector2.prototype.sub = function(x,y){
  if(x.type === "vector2"){
    this.x-=x.x;
    this.y-=x.y;
  }else{
    this.x-=x;
    this.y-=y;
  }
}

vector2.prototype.mult = function(x,y){
  if(x.type === "vector2"){
    this.x*=x.x;
    this.y*=x.y;
  }else{
    this.x*=x;
    this.y*=y;
  }
}

vector2.prototype.div = function(x,y){
  if(x.type === "vector2"){
    this.x/=x.x;
    this.y/=x.y;
  }else{
    this.x/=x;
    this.y/=y;
  }
}
