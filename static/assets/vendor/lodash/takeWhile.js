var baseIteratee=require("./_baseIteratee"),baseWhile=require("./_baseWhile");function takeWhile(e, a){return e&&e.length?baseWhile(e,baseIteratee(a,3)):[]}module.exports=takeWhile;