var root=require("./_root"),toString=require("./toString"),reTrimStart=/^\s+/,nativeParseInt=root.parseInt;function parseInt(r, t, e){return e||null==t?t=0:t&&(t=+t),nativeParseInt(toString(r).replace(reTrimStart,""),t||0)}module.exports=parseInt;