try{
  Boolean.prototype.type = "boolean";//true/false:boolean
  Null.prototype.type = "null";//null:object
  Undefined.prototype.type = "undefined";//undefined:undefined
  Number.prototype.type = "number";//number/-1/0.1:number
  Array.prototype.type = "array";//array/[]:array
  String.prototype.type = "string";//"":string
  Symbol.prototype.type = "symbol";//What is a symbol?
  Object.prototype.type = "object";//object:object
  window.prototype.type = "window";//DOM window
  document.prototype.type = "document";//DOM document
}catch(e){
  console.warn("error: "+e+"\nsome code may not work as expected");
  throw e;
}
window.prototype.dataTypes = {
"boolean":"boolean",
"null":"null",
"undefined":"undefined",
"number":"number",
"array":"array",
"string":"string",
"symbol":"symbol",
"object":"object",
"window":"window",
"document":"document"
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
