var arrayPush=require("./_arrayPush"),getPrototype=require("./_getPrototype"),getSymbols=require("./_getSymbols"),stubArray=require("./stubArray"),nativeGetSymbols=Object.getOwnPropertySymbols,getSymbolsIn=nativeGetSymbols?function(r){for(var e=[]; r;)arrayPush(e,getSymbols(r)),r=getPrototype(r);return e}:stubArray;module.exports=getSymbolsIn;