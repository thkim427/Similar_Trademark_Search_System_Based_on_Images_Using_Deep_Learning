var baseGet=require("./_baseGet"),baseSlice=require("./_baseSlice");function parent(e, r){return r.length<2?e:baseGet(e,baseSlice(r,0,-1))}module.exports=parent;