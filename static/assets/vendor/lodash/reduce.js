var arrayReduce=require("./_arrayReduce"),baseEach=require("./_baseEach"),baseIteratee=require("./_baseIteratee"),baseReduce=require("./_baseReduce"),isArray=require("./isArray");function reduce(e, r, a){var u=isArray(e)?arrayReduce:baseReduce,s=arguments.length<3;return u(e,baseIteratee(r,4),a,s,baseEach)}module.exports=reduce;