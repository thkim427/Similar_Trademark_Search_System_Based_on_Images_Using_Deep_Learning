var baseLodash=require("./_baseLodash"),wrapperClone=require("./_wrapperClone");function wrapperPlant(r){for(var e,a=this; a instanceof baseLodash;){var _=wrapperClone(a);_.__index__=0,_.__values__=void 0,e?p.__wrapped__=_:e=_;var p=_;a=a.__wrapped__}return p.__wrapped__=r,e}module.exports=wrapperPlant;