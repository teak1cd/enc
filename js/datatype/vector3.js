function vector3(x,y,z){
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
}

vector3.prototype.type = "vector3";

vector3.prototype.add = function(x,y,z){
  if(x.type === "vector3"){
    this.x+=x.x;
    this.y+=x.y;
    this.z+=x.z;
  }else{
    this.x+=x;
    this.y+=y;
    this.z+=z;
  }
}

vector3.prototype.sub = function(x,y){
  if(x.type === "vector3"){
    this.x-=x.x;
    this.y-=x.y;
  }else{
    this.x-=x;
    this.y-=y;
  }
}

vector3.prototype.mult = function(x,y){
  if(x.type === "vector3"){
    this.x*=x.x;
    this.y*=x.y;
  }else{
    this.x*=x;
    this.y*=y;
  }
}

vector3.prototype.div = function(x,y){
  if(x.type === "vector3"){
    this.x/=x.x;
    this.y/=x.y;
  }else{
    this.x/=x;
    this.y/=y;
  }
}
