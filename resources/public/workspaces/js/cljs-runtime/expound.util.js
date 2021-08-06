goog.provide('expound.util');
expound.util.assert_message = "Internal Expound assertion failed. Please report this bug at https://github.com/bhb/expound/issues";
expound.util.nan_QMARK_ = (function expound$util$nan_QMARK_(x){
if(typeof x === 'number'){
return isNaN(x);
} else {
return false;
}
});

//# sourceMappingURL=expound.util.js.map
