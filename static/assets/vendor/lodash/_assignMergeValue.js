var baseAssignValue=require("./_baseAssignValue"),eq=require("./eq");function assignMergeValue(e, s, a){(void 0===a||eq(e[s],a))&&(void 0!==a||s in e)||baseAssignValue(e,s,a)}module.exports=assignMergeValue;