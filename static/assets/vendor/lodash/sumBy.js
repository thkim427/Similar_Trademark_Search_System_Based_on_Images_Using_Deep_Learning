var baseIteratee=require("./_baseIteratee"),baseSum=require("./_baseSum");function sumBy(e, r){return e&&e.length?baseSum(e,baseIteratee(r,2)):0}module.exports=sumBy;