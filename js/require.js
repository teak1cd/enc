var existing = {"require":true};

function require(object){
  if(existing[object.type] === true){
    return true;
  }else{
    if(typeof object !== "undefined" && typeof object !== "null"){
      existing[object.type] = true;
      return true;
    }
  }
  return false;
}
