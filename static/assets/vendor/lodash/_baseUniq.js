var SetCache=require("./_SetCache"),arrayIncludes=require("./_arrayIncludes"),arrayIncludesWith=require("./_arrayIncludesWith"),cacheHas=require("./_cacheHas"),createSet=require("./_createSet"),setToArray=require("./_setToArray"),LARGE_ARRAY_SIZE=200;function baseUniq(e, r, a){var s=-1,t=arrayIncludes,u=e.length,c=!0,i=[],n=i;if(a)c=!1,t=arrayIncludesWith;else if(LARGE_ARRAY_SIZE<=u){var h=r?null:createSet(e);if(h)return setToArray(h);c=!1,t=cacheHas,n=new SetCache}else n=r?[]:i;e:for(; ++s<u;){var l=e[s],_=r?r(l):l;if(l=a||0!==l?l:0,c&&_==_){for(var o=n.length; o--;)if(n[o]===_)continue e;r&&n.push(_),i.push(l)}else t(n,_,a)||(n!==i&&n.push(_),i.push(l))}return i}module.exports=baseUniq;