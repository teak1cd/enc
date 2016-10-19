try{
  Boolean.prototype.type = "boolean";//true/false:boolean
  Number.prototype.type = "number";//number/-1/0.1:number
  Array.prototype.type = "array";//array/[]:array
  String.prototype.type = "string";//"":string
  Symbol.prototype.type = "symbol";//What is a symbol?
  Object.prototype.type = "object";//object:object
}catch(e){
  alert(e);
  console.warn("error: "+e+"\nsome code may not work as expected");
  throw e;
}
function __l__(){
  window.dataTypes = {
"boolean":"boolean",
"number":"number",
"array":"array",
"string":"string",
"symbol":"symbol",
"object":"object",
};
  window.getDataTypes = function(data){
    var type = typeof data;
    type = type.toLowerCase();
    var object = window.dataTypes[type];
    if(typeof object !== "string"){
      throw new typeError("data type is not as expected"+data);
    }
    return object;
  }
}
window.onload=__l__;
