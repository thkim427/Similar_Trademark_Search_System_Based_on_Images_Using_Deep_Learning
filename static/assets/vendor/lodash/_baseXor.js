var baseDifference=require("./_baseDifference"),baseFlatten=require("./_baseFlatten"),baseUniq=require("./_baseUniq");function baseXor(e, r, a){var n=e.length;if(n<2)return n?baseUniq(e[0]):[];for(var s=-1,b=Array(n); ++s<n;)for(var i=e[s],t=-1; ++t<n;)t!=s&&(b[s]=baseDifference(b[s]||i,e[t],r,a));return baseUniq(baseFlatten(b,1),r,a)}module.exports=baseXor;