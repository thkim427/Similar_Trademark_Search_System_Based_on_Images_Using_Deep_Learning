var createCtor=require("./_createCtor"),root=require("./_root"),WRAP_BIND_FLAG=1;function createBind(t, r, e){var o=r&WRAP_BIND_FLAG,i=createCtor(t);return function r(){return(this&&this!==root&&this instanceof r?i:t).apply(o?e:this,arguments)}}module.exports=createBind;