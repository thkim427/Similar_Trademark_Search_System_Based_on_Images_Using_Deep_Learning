var baseSlice=require("./_baseSlice"),toInteger=require("./toInteger");function take(e, t, r){return e&&e.length?(t=r||void 0===t?1:toInteger(t),baseSlice(e,0,t<0?0:t)):[]}module.exports=take;