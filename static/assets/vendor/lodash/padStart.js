var createPadding=require("./_createPadding"),stringSize=require("./_stringSize"),toInteger=require("./toInteger"),toString=require("./toString");function padStart(r, e, t){r=toString(r);var i=(e=toInteger(e))?stringSize(r):0;return e&&i<e?createPadding(e-i,t)+r:r}module.exports=padStart;