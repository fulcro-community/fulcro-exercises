goog.provide('com.fulcrologic.fulcro_css.localized_dom');





































































































































































































com.fulcrologic.fulcro_css.localized_dom.node = com.fulcrologic.fulcro.dom.node;
com.fulcrologic.fulcro_css.localized_dom.render_to_str = com.fulcrologic.fulcro.dom.render_to_str;
com.fulcrologic.fulcro_css.localized_dom.create_element = com.fulcrologic.fulcro.dom.create_element;
var arr_append_STAR_ = (function com$fulcrologic$fulcro_css$localized_dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
var arr_append = (function com$fulcrologic$fulcro_css$localized_dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(arr_append_STAR_,arr,com.fulcrologic.fulcro.components.force_children(tail));
});
com.fulcrologic.fulcro_css.localized_dom.macro_create_element = (function com$fulcrologic$fulcro_css$localized_dom$macro_create_element(var_args){
var G__70495 = arguments.length;
switch (G__70495) {
case 2:
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__70499 = args;
var seq__70500 = cljs.core.seq(vec__70499);
var first__70501 = cljs.core.first(seq__70500);
var seq__70500__$1 = cljs.core.next(seq__70500);
var head = first__70501;
var tail = seq__70500__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__70503 = (function (){var G__70504 = [type,com.fulcrologic.fulcro_css.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__70504,tail);

return G__70504;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70503) : f.call(null,G__70503));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__70505 = (function (){var G__70507 = [type,com.fulcrologic.fulcro_css.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__70507,args);

return G__70507;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70505) : f.call(null,G__70505));
} else {
if(cljs.core.object_QMARK_(head)){
var G__70509 = (function (){var G__70511 = [type,com.fulcrologic.fulcro_css.localized_dom_common.add_kwprops_to_props(head,csskw)];
arr_append(G__70511,tail);

return G__70511;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70509) : f.call(null,G__70509));
} else {
if(cljs.core.map_QMARK_(head)){
var G__70514 = (function (){var G__70515 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro_css.localized_dom_common.add_kwprops_to_props(head,csskw))];
arr_append(G__70515,tail);

return G__70515;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70514) : f.call(null,G__70514));
} else {
var G__70516 = (function (){var G__70517 = [type,com.fulcrologic.fulcro_css.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__70517,args);

return G__70517;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70516) : f.call(null,G__70516));

}
}
}
}
}));

(com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.form = (function com$fulcrologic$fulcro_css$localized_dom$form(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72128 = arguments.length;
var i__4737__auto___72129 = (0);
while(true){
if((i__4737__auto___72129 < len__4736__auto___72128)){
args__4742__auto__.push((arguments[i__4737__auto___72129]));

var G__72130 = (i__4737__auto___72129 + (1));
i__4737__auto___72129 = G__72130;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70526 = conformed_args__66791__auto__;
var map__70526__$1 = (((((!((map__70526 == null))))?(((((map__70526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70526):map__70526);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70526__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70526__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70526__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.form.cljs$lang$applyTo = (function (seq70523){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70523));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.audio = (function com$fulcrologic$fulcro_css$localized_dom$audio(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72146 = arguments.length;
var i__4737__auto___72147 = (0);
while(true){
if((i__4737__auto___72147 < len__4736__auto___72146)){
args__4742__auto__.push((arguments[i__4737__auto___72147]));

var G__72148 = (i__4737__auto___72147 + (1));
i__4737__auto___72147 = G__72148;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70535 = conformed_args__66791__auto__;
var map__70535__$1 = (((((!((map__70535 == null))))?(((((map__70535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70535):map__70535);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70535__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70535__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70535__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.audio.cljs$lang$applyTo = (function (seq70531){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70531));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.input = (function com$fulcrologic$fulcro_css$localized_dom$input(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72156 = arguments.length;
var i__4737__auto___72157 = (0);
while(true){
if((i__4737__auto___72157 < len__4736__auto___72156)){
args__4742__auto__.push((arguments[i__4737__auto___72157]));

var G__72158 = (i__4737__auto___72157 + (1));
i__4737__auto___72157 = G__72158;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70541 = conformed_args__66791__auto__;
var map__70541__$1 = (((((!((map__70541 == null))))?(((((map__70541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70541):map__70541);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70541__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70541__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70541__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.input.cljs$lang$applyTo = (function (seq70538){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70538));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.menuitem = (function com$fulcrologic$fulcro_css$localized_dom$menuitem(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72172 = arguments.length;
var i__4737__auto___72173 = (0);
while(true){
if((i__4737__auto___72173 < len__4736__auto___72172)){
args__4742__auto__.push((arguments[i__4737__auto___72173]));

var G__72174 = (i__4737__auto___72173 + (1));
i__4737__auto___72173 = G__72174;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70568 = conformed_args__66791__auto__;
var map__70568__$1 = (((((!((map__70568 == null))))?(((((map__70568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70568):map__70568);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70568__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70568__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70568__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.menuitem.cljs$lang$applyTo = (function (seq70560){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70560));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.radialGradient = (function com$fulcrologic$fulcro_css$localized_dom$radialGradient(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72180 = arguments.length;
var i__4737__auto___72181 = (0);
while(true){
if((i__4737__auto___72181 < len__4736__auto___72180)){
args__4742__auto__.push((arguments[i__4737__auto___72181]));

var G__72183 = (i__4737__auto___72181 + (1));
i__4737__auto___72181 = G__72183;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70580 = conformed_args__66791__auto__;
var map__70580__$1 = (((((!((map__70580 == null))))?(((((map__70580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70580):map__70580);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70580__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70580__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70580__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.radialGradient.cljs$lang$applyTo = (function (seq70576){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70576));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feMerge = (function com$fulcrologic$fulcro_css$localized_dom$feMerge(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72191 = arguments.length;
var i__4737__auto___72192 = (0);
while(true){
if((i__4737__auto___72192 < len__4736__auto___72191)){
args__4742__auto__.push((arguments[i__4737__auto___72192]));

var G__72195 = (i__4737__auto___72192 + (1));
i__4737__auto___72192 = G__72195;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70591 = conformed_args__66791__auto__;
var map__70591__$1 = (((((!((map__70591 == null))))?(((((map__70591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70591):map__70591);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70591__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70591__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70591__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feMerge.cljs$lang$applyTo = (function (seq70588){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70588));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.set = (function com$fulcrologic$fulcro_css$localized_dom$set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72203 = arguments.length;
var i__4737__auto___72204 = (0);
while(true){
if((i__4737__auto___72204 < len__4736__auto___72203)){
args__4742__auto__.push((arguments[i__4737__auto___72204]));

var G__72208 = (i__4737__auto___72204 + (1));
i__4737__auto___72204 = G__72208;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70598 = conformed_args__66791__auto__;
var map__70598__$1 = (((((!((map__70598 == null))))?(((((map__70598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70598):map__70598);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70598__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70598__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70598__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.set.cljs$lang$applyTo = (function (seq70594){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70594));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feSpecularLighting = (function com$fulcrologic$fulcro_css$localized_dom$feSpecularLighting(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72223 = arguments.length;
var i__4737__auto___72224 = (0);
while(true){
if((i__4737__auto___72224 < len__4736__auto___72223)){
args__4742__auto__.push((arguments[i__4737__auto___72224]));

var G__72225 = (i__4737__auto___72224 + (1));
i__4737__auto___72224 = G__72225;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70606 = conformed_args__66791__auto__;
var map__70606__$1 = (((((!((map__70606 == null))))?(((((map__70606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70606):map__70606);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70606__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70606__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70606__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feSpecularLighting.cljs$lang$applyTo = (function (seq70604){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70604));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.base = (function com$fulcrologic$fulcro_css$localized_dom$base(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72226 = arguments.length;
var i__4737__auto___72227 = (0);
while(true){
if((i__4737__auto___72227 < len__4736__auto___72226)){
args__4742__auto__.push((arguments[i__4737__auto___72227]));

var G__72228 = (i__4737__auto___72227 + (1));
i__4737__auto___72227 = G__72228;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70622 = conformed_args__66791__auto__;
var map__70622__$1 = (((((!((map__70622 == null))))?(((((map__70622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70622):map__70622);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70622__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70622__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70622__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.base.cljs$lang$applyTo = (function (seq70617){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70617));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.h1 = (function com$fulcrologic$fulcro_css$localized_dom$h1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72236 = arguments.length;
var i__4737__auto___72237 = (0);
while(true){
if((i__4737__auto___72237 < len__4736__auto___72236)){
args__4742__auto__.push((arguments[i__4737__auto___72237]));

var G__72238 = (i__4737__auto___72237 + (1));
i__4737__auto___72237 = G__72238;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70634 = conformed_args__66791__auto__;
var map__70634__$1 = (((((!((map__70634 == null))))?(((((map__70634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70634):map__70634);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70634__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70634__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70634__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.h1.cljs$lang$applyTo = (function (seq70630){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70630));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feOffset = (function com$fulcrologic$fulcro_css$localized_dom$feOffset(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72244 = arguments.length;
var i__4737__auto___72245 = (0);
while(true){
if((i__4737__auto___72245 < len__4736__auto___72244)){
args__4742__auto__.push((arguments[i__4737__auto___72245]));

var G__72248 = (i__4737__auto___72245 + (1));
i__4737__auto___72245 = G__72248;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70645 = conformed_args__66791__auto__;
var map__70645__$1 = (((((!((map__70645 == null))))?(((((map__70645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70645):map__70645);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70645__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70645__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70645__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feOffset.cljs$lang$applyTo = (function (seq70641){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70641));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.embed = (function com$fulcrologic$fulcro_css$localized_dom$embed(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72253 = arguments.length;
var i__4737__auto___72254 = (0);
while(true){
if((i__4737__auto___72254 < len__4736__auto___72253)){
args__4742__auto__.push((arguments[i__4737__auto___72254]));

var G__72257 = (i__4737__auto___72254 + (1));
i__4737__auto___72254 = G__72257;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70655 = conformed_args__66791__auto__;
var map__70655__$1 = (((((!((map__70655 == null))))?(((((map__70655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70655):map__70655);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70655__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70655__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70655__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.embed.cljs$lang$applyTo = (function (seq70650){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70650));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.animateMotion = (function com$fulcrologic$fulcro_css$localized_dom$animateMotion(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72261 = arguments.length;
var i__4737__auto___72262 = (0);
while(true){
if((i__4737__auto___72262 < len__4736__auto___72261)){
args__4742__auto__.push((arguments[i__4737__auto___72262]));

var G__72263 = (i__4737__auto___72262 + (1));
i__4737__auto___72262 = G__72263;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70662 = conformed_args__66791__auto__;
var map__70662__$1 = (((((!((map__70662 == null))))?(((((map__70662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70662):map__70662);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70662__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70662__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70662__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.animateMotion.cljs$lang$applyTo = (function (seq70661){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70661));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.h3 = (function com$fulcrologic$fulcro_css$localized_dom$h3(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72269 = arguments.length;
var i__4737__auto___72270 = (0);
while(true){
if((i__4737__auto___72270 < len__4736__auto___72269)){
args__4742__auto__.push((arguments[i__4737__auto___72270]));

var G__72271 = (i__4737__auto___72270 + (1));
i__4737__auto___72270 = G__72271;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70669 = conformed_args__66791__auto__;
var map__70669__$1 = (((((!((map__70669 == null))))?(((((map__70669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70669):map__70669);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70669__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70669__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70669__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.h3.cljs$lang$applyTo = (function (seq70667){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70667));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.body = (function com$fulcrologic$fulcro_css$localized_dom$body(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72277 = arguments.length;
var i__4737__auto___72278 = (0);
while(true){
if((i__4737__auto___72278 < len__4736__auto___72277)){
args__4742__auto__.push((arguments[i__4737__auto___72278]));

var G__72279 = (i__4737__auto___72278 + (1));
i__4737__auto___72278 = G__72279;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70678 = conformed_args__66791__auto__;
var map__70678__$1 = (((((!((map__70678 == null))))?(((((map__70678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70678):map__70678);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70678__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70678__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70678__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.body.cljs$lang$applyTo = (function (seq70674){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70674));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.hkern = (function com$fulcrologic$fulcro_css$localized_dom$hkern(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72284 = arguments.length;
var i__4737__auto___72285 = (0);
while(true){
if((i__4737__auto___72285 < len__4736__auto___72284)){
args__4742__auto__.push((arguments[i__4737__auto___72285]));

var G__72286 = (i__4737__auto___72285 + (1));
i__4737__auto___72285 = G__72286;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70685 = conformed_args__66791__auto__;
var map__70685__$1 = (((((!((map__70685 == null))))?(((((map__70685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70685):map__70685);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70685__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70685__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70685__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.hkern.cljs$lang$applyTo = (function (seq70684){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70684));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.keygen = (function com$fulcrologic$fulcro_css$localized_dom$keygen(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72287 = arguments.length;
var i__4737__auto___72288 = (0);
while(true){
if((i__4737__auto___72288 < len__4736__auto___72287)){
args__4742__auto__.push((arguments[i__4737__auto___72288]));

var G__72289 = (i__4737__auto___72288 + (1));
i__4737__auto___72288 = G__72289;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70695 = conformed_args__66791__auto__;
var map__70695__$1 = (((((!((map__70695 == null))))?(((((map__70695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70695):map__70695);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70695__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70695__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70695__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.keygen.cljs$lang$applyTo = (function (seq70691){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70691));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.font_face_format = (function com$fulcrologic$fulcro_css$localized_dom$font_face_format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72290 = arguments.length;
var i__4737__auto___72291 = (0);
while(true){
if((i__4737__auto___72291 < len__4736__auto___72290)){
args__4742__auto__.push((arguments[i__4737__auto___72291]));

var G__72292 = (i__4737__auto___72291 + (1));
i__4737__auto___72291 = G__72292;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70702 = conformed_args__66791__auto__;
var map__70702__$1 = (((((!((map__70702 == null))))?(((((map__70702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70702):map__70702);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70702__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70702__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70702__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.font_face_format.cljs$lang$applyTo = (function (seq70701){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70701));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feFuncA = (function com$fulcrologic$fulcro_css$localized_dom$feFuncA(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72293 = arguments.length;
var i__4737__auto___72294 = (0);
while(true){
if((i__4737__auto___72294 < len__4736__auto___72293)){
args__4742__auto__.push((arguments[i__4737__auto___72294]));

var G__72295 = (i__4737__auto___72294 + (1));
i__4737__auto___72294 = G__72295;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70708 = conformed_args__66791__auto__;
var map__70708__$1 = (((((!((map__70708 == null))))?(((((map__70708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70708):map__70708);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70708__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70708__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70708__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feFuncA.cljs$lang$applyTo = (function (seq70707){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70707));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.progress = (function com$fulcrologic$fulcro_css$localized_dom$progress(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72299 = arguments.length;
var i__4737__auto___72300 = (0);
while(true){
if((i__4737__auto___72300 < len__4736__auto___72299)){
args__4742__auto__.push((arguments[i__4737__auto___72300]));

var G__72301 = (i__4737__auto___72300 + (1));
i__4737__auto___72300 = G__72301;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70718 = conformed_args__66791__auto__;
var map__70718__$1 = (((((!((map__70718 == null))))?(((((map__70718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70718):map__70718);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70718__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70718__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70718__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.progress.cljs$lang$applyTo = (function (seq70714){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70714));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.main = (function com$fulcrologic$fulcro_css$localized_dom$main(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72304 = arguments.length;
var i__4737__auto___72305 = (0);
while(true){
if((i__4737__auto___72305 < len__4736__auto___72304)){
args__4742__auto__.push((arguments[i__4737__auto___72305]));

var G__72306 = (i__4737__auto___72305 + (1));
i__4737__auto___72305 = G__72306;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70724 = conformed_args__66791__auto__;
var map__70724__$1 = (((((!((map__70724 == null))))?(((((map__70724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70724):map__70724);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70724__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70724__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70724__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.main.cljs$lang$applyTo = (function (seq70722){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70722));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.cite = (function com$fulcrologic$fulcro_css$localized_dom$cite(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72311 = arguments.length;
var i__4737__auto___72312 = (0);
while(true){
if((i__4737__auto___72312 < len__4736__auto___72311)){
args__4742__auto__.push((arguments[i__4737__auto___72312]));

var G__72313 = (i__4737__auto___72312 + (1));
i__4737__auto___72312 = G__72313;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70732 = conformed_args__66791__auto__;
var map__70732__$1 = (((((!((map__70732 == null))))?(((((map__70732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70732):map__70732);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70732__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70732__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70732__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.cite.cljs$lang$applyTo = (function (seq70730){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70730));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.rect = (function com$fulcrologic$fulcro_css$localized_dom$rect(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72319 = arguments.length;
var i__4737__auto___72320 = (0);
while(true){
if((i__4737__auto___72320 < len__4736__auto___72319)){
args__4742__auto__.push((arguments[i__4737__auto___72320]));

var G__72321 = (i__4737__auto___72320 + (1));
i__4737__auto___72320 = G__72321;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70742 = conformed_args__66791__auto__;
var map__70742__$1 = (((((!((map__70742 == null))))?(((((map__70742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70742):map__70742);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70742__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70742__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70742__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.rect.cljs$lang$applyTo = (function (seq70738){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70738));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.tref = (function com$fulcrologic$fulcro_css$localized_dom$tref(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72328 = arguments.length;
var i__4737__auto___72329 = (0);
while(true){
if((i__4737__auto___72329 < len__4736__auto___72328)){
args__4742__auto__.push((arguments[i__4737__auto___72329]));

var G__72330 = (i__4737__auto___72329 + (1));
i__4737__auto___72329 = G__72330;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70749 = conformed_args__66791__auto__;
var map__70749__$1 = (((((!((map__70749 == null))))?(((((map__70749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70749):map__70749);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70749__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70749__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70749__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.tref.cljs$lang$applyTo = (function (seq70747){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70747));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.meshpatch = (function com$fulcrologic$fulcro_css$localized_dom$meshpatch(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72331 = arguments.length;
var i__4737__auto___72332 = (0);
while(true){
if((i__4737__auto___72332 < len__4736__auto___72331)){
args__4742__auto__.push((arguments[i__4737__auto___72332]));

var G__72333 = (i__4737__auto___72332 + (1));
i__4737__auto___72332 = G__72333;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70760 = conformed_args__66791__auto__;
var map__70760__$1 = (((((!((map__70760 == null))))?(((((map__70760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70760):map__70760);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70760__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70760__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70760__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.meshpatch.cljs$lang$applyTo = (function (seq70755){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70755));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.polyline = (function com$fulcrologic$fulcro_css$localized_dom$polyline(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72334 = arguments.length;
var i__4737__auto___72335 = (0);
while(true){
if((i__4737__auto___72335 < len__4736__auto___72334)){
args__4742__auto__.push((arguments[i__4737__auto___72335]));

var G__72336 = (i__4737__auto___72335 + (1));
i__4737__auto___72335 = G__72336;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70766 = conformed_args__66791__auto__;
var map__70766__$1 = (((((!((map__70766 == null))))?(((((map__70766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70766):map__70766);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70766__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70766__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70766__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.polyline.cljs$lang$applyTo = (function (seq70762){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70762));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.metadata = (function com$fulcrologic$fulcro_css$localized_dom$metadata(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72337 = arguments.length;
var i__4737__auto___72338 = (0);
while(true){
if((i__4737__auto___72338 < len__4736__auto___72337)){
args__4742__auto__.push((arguments[i__4737__auto___72338]));

var G__72339 = (i__4737__auto___72338 + (1));
i__4737__auto___72338 = G__72339;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70772 = conformed_args__66791__auto__;
var map__70772__$1 = (((((!((map__70772 == null))))?(((((map__70772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70772):map__70772);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70772__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70772__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70772__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.metadata.cljs$lang$applyTo = (function (seq70771){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70771));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.map = (function com$fulcrologic$fulcro_css$localized_dom$map(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72343 = arguments.length;
var i__4737__auto___72344 = (0);
while(true){
if((i__4737__auto___72344 < len__4736__auto___72343)){
args__4742__auto__.push((arguments[i__4737__auto___72344]));

var G__72345 = (i__4737__auto___72344 + (1));
i__4737__auto___72344 = G__72345;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70785 = conformed_args__66791__auto__;
var map__70785__$1 = (((((!((map__70785 == null))))?(((((map__70785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70785):map__70785);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70785__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70785__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70785__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.map.cljs$lang$applyTo = (function (seq70780){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70780));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.object = (function com$fulcrologic$fulcro_css$localized_dom$object(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72350 = arguments.length;
var i__4737__auto___72351 = (0);
while(true){
if((i__4737__auto___72351 < len__4736__auto___72350)){
args__4742__auto__.push((arguments[i__4737__auto___72351]));

var G__72357 = (i__4737__auto___72351 + (1));
i__4737__auto___72351 = G__72357;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70803 = conformed_args__66791__auto__;
var map__70803__$1 = (((((!((map__70803 == null))))?(((((map__70803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70803):map__70803);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70803__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70803__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70803__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.object.cljs$lang$applyTo = (function (seq70796){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70796));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.i = (function com$fulcrologic$fulcro_css$localized_dom$i(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72363 = arguments.length;
var i__4737__auto___72364 = (0);
while(true){
if((i__4737__auto___72364 < len__4736__auto___72363)){
args__4742__auto__.push((arguments[i__4737__auto___72364]));

var G__72366 = (i__4737__auto___72364 + (1));
i__4737__auto___72364 = G__72366;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70816 = conformed_args__66791__auto__;
var map__70816__$1 = (((((!((map__70816 == null))))?(((((map__70816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70816):map__70816);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70816__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70816__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70816__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.i.cljs$lang$applyTo = (function (seq70810){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70810));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.font_face_name = (function com$fulcrologic$fulcro_css$localized_dom$font_face_name(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72367 = arguments.length;
var i__4737__auto___72368 = (0);
while(true){
if((i__4737__auto___72368 < len__4736__auto___72367)){
args__4742__auto__.push((arguments[i__4737__auto___72368]));

var G__72371 = (i__4737__auto___72368 + (1));
i__4737__auto___72368 = G__72371;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70826 = conformed_args__66791__auto__;
var map__70826__$1 = (((((!((map__70826 == null))))?(((((map__70826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70826):map__70826);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70826__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70826__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70826__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.font_face_name.cljs$lang$applyTo = (function (seq70821){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70821));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.p = (function com$fulcrologic$fulcro_css$localized_dom$p(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72387 = arguments.length;
var i__4737__auto___72388 = (0);
while(true){
if((i__4737__auto___72388 < len__4736__auto___72387)){
args__4742__auto__.push((arguments[i__4737__auto___72388]));

var G__72389 = (i__4737__auto___72388 + (1));
i__4737__auto___72388 = G__72389;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70837 = conformed_args__66791__auto__;
var map__70837__$1 = (((((!((map__70837 == null))))?(((((map__70837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70837):map__70837);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70837__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70837__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70837__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.p.cljs$lang$applyTo = (function (seq70834){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70834));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feFuncR = (function com$fulcrologic$fulcro_css$localized_dom$feFuncR(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72397 = arguments.length;
var i__4737__auto___72398 = (0);
while(true){
if((i__4737__auto___72398 < len__4736__auto___72397)){
args__4742__auto__.push((arguments[i__4737__auto___72398]));

var G__72399 = (i__4737__auto___72398 + (1));
i__4737__auto___72398 = G__72399;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70849 = conformed_args__66791__auto__;
var map__70849__$1 = (((((!((map__70849 == null))))?(((((map__70849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70849):map__70849);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70849__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70849__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70849__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feFuncR.cljs$lang$applyTo = (function (seq70842){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70842));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.hatchpath = (function com$fulcrologic$fulcro_css$localized_dom$hatchpath(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72406 = arguments.length;
var i__4737__auto___72411 = (0);
while(true){
if((i__4737__auto___72411 < len__4736__auto___72406)){
args__4742__auto__.push((arguments[i__4737__auto___72411]));

var G__72413 = (i__4737__auto___72411 + (1));
i__4737__auto___72411 = G__72413;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70858 = conformed_args__66791__auto__;
var map__70858__$1 = (((((!((map__70858 == null))))?(((((map__70858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70858):map__70858);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70858__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70858__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.hatchpath.cljs$lang$applyTo = (function (seq70854){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70854));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.altGlyphItem = (function com$fulcrologic$fulcro_css$localized_dom$altGlyphItem(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72419 = arguments.length;
var i__4737__auto___72420 = (0);
while(true){
if((i__4737__auto___72420 < len__4736__auto___72419)){
args__4742__auto__.push((arguments[i__4737__auto___72420]));

var G__72421 = (i__4737__auto___72420 + (1));
i__4737__auto___72420 = G__72421;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70867 = conformed_args__66791__auto__;
var map__70867__$1 = (((((!((map__70867 == null))))?(((((map__70867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70867):map__70867);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70867__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70867__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70867__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.altGlyphItem.cljs$lang$applyTo = (function (seq70863){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70863));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.nav = (function com$fulcrologic$fulcro_css$localized_dom$nav(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72422 = arguments.length;
var i__4737__auto___72423 = (0);
while(true){
if((i__4737__auto___72423 < len__4736__auto___72422)){
args__4742__auto__.push((arguments[i__4737__auto___72423]));

var G__72424 = (i__4737__auto___72423 + (1));
i__4737__auto___72423 = G__72424;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70873 = conformed_args__66791__auto__;
var map__70873__$1 = (((((!((map__70873 == null))))?(((((map__70873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70873):map__70873);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70873__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70873__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70873__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.nav.cljs$lang$applyTo = (function (seq70872){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70872));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.ruby = (function com$fulcrologic$fulcro_css$localized_dom$ruby(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72425 = arguments.length;
var i__4737__auto___72426 = (0);
while(true){
if((i__4737__auto___72426 < len__4736__auto___72425)){
args__4742__auto__.push((arguments[i__4737__auto___72426]));

var G__72427 = (i__4737__auto___72426 + (1));
i__4737__auto___72426 = G__72427;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70883 = conformed_args__66791__auto__;
var map__70883__$1 = (((((!((map__70883 == null))))?(((((map__70883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70883):map__70883);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70883__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70883__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70883__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.ruby.cljs$lang$applyTo = (function (seq70879){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70879));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.switch$ = (function com$fulcrologic$fulcro_css$localized_dom$switch(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72436 = arguments.length;
var i__4737__auto___72438 = (0);
while(true){
if((i__4737__auto___72438 < len__4736__auto___72436)){
args__4742__auto__.push((arguments[i__4737__auto___72438]));

var G__72439 = (i__4737__auto___72438 + (1));
i__4737__auto___72438 = G__72439;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70893 = conformed_args__66791__auto__;
var map__70893__$1 = (((((!((map__70893 == null))))?(((((map__70893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70893):map__70893);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70893__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70893__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70893__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.switch$.cljs$lang$applyTo = (function (seq70886){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70886));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.a = (function com$fulcrologic$fulcro_css$localized_dom$a(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72440 = arguments.length;
var i__4737__auto___72441 = (0);
while(true){
if((i__4737__auto___72441 < len__4736__auto___72440)){
args__4742__auto__.push((arguments[i__4737__auto___72441]));

var G__72442 = (i__4737__auto___72441 + (1));
i__4737__auto___72441 = G__72442;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70902 = conformed_args__66791__auto__;
var map__70902__$1 = (((((!((map__70902 == null))))?(((((map__70902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70902):map__70902);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70902__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70902__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70902__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.a.cljs$lang$applyTo = (function (seq70900){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70900));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.view = (function com$fulcrologic$fulcro_css$localized_dom$view(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72447 = arguments.length;
var i__4737__auto___72448 = (0);
while(true){
if((i__4737__auto___72448 < len__4736__auto___72447)){
args__4742__auto__.push((arguments[i__4737__auto___72448]));

var G__72450 = (i__4737__auto___72448 + (1));
i__4737__auto___72448 = G__72450;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70911 = conformed_args__66791__auto__;
var map__70911__$1 = (((((!((map__70911 == null))))?(((((map__70911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70911):map__70911);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70911__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70911__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70911__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.view.cljs$lang$applyTo = (function (seq70907){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70907));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.menu = (function com$fulcrologic$fulcro_css$localized_dom$menu(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72452 = arguments.length;
var i__4737__auto___72453 = (0);
while(true){
if((i__4737__auto___72453 < len__4736__auto___72452)){
args__4742__auto__.push((arguments[i__4737__auto___72453]));

var G__72455 = (i__4737__auto___72453 + (1));
i__4737__auto___72453 = G__72455;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70922 = conformed_args__66791__auto__;
var map__70922__$1 = (((((!((map__70922 == null))))?(((((map__70922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70922):map__70922);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70922__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70922__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70922__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.menu.cljs$lang$applyTo = (function (seq70918){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70918));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.blockquote = (function com$fulcrologic$fulcro_css$localized_dom$blockquote(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72463 = arguments.length;
var i__4737__auto___72464 = (0);
while(true){
if((i__4737__auto___72464 < len__4736__auto___72463)){
args__4742__auto__.push((arguments[i__4737__auto___72464]));

var G__72465 = (i__4737__auto___72464 + (1));
i__4737__auto___72464 = G__72465;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70933 = conformed_args__66791__auto__;
var map__70933__$1 = (((((!((map__70933 == null))))?(((((map__70933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70933):map__70933);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70933__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70933__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70933__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.blockquote.cljs$lang$applyTo = (function (seq70927){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70927));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.img = (function com$fulcrologic$fulcro_css$localized_dom$img(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72466 = arguments.length;
var i__4737__auto___72467 = (0);
while(true){
if((i__4737__auto___72467 < len__4736__auto___72466)){
args__4742__auto__.push((arguments[i__4737__auto___72467]));

var G__72468 = (i__4737__auto___72467 + (1));
i__4737__auto___72467 = G__72468;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70948 = conformed_args__66791__auto__;
var map__70948__$1 = (((((!((map__70948 == null))))?(((((map__70948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70948):map__70948);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70948__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70948__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70948__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.img.cljs$lang$applyTo = (function (seq70936){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70936));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feFuncG = (function com$fulcrologic$fulcro_css$localized_dom$feFuncG(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72471 = arguments.length;
var i__4737__auto___72472 = (0);
while(true){
if((i__4737__auto___72472 < len__4736__auto___72471)){
args__4742__auto__.push((arguments[i__4737__auto___72472]));

var G__72473 = (i__4737__auto___72472 + (1));
i__4737__auto___72472 = G__72473;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70958 = conformed_args__66791__auto__;
var map__70958__$1 = (((((!((map__70958 == null))))?(((((map__70958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70958):map__70958);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70958__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70958__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70958__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feFuncG.cljs$lang$applyTo = (function (seq70957){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70957));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.text = (function com$fulcrologic$fulcro_css$localized_dom$text(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72477 = arguments.length;
var i__4737__auto___72478 = (0);
while(true){
if((i__4737__auto___72478 < len__4736__auto___72477)){
args__4742__auto__.push((arguments[i__4737__auto___72478]));

var G__72479 = (i__4737__auto___72478 + (1));
i__4737__auto___72478 = G__72479;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70965 = conformed_args__66791__auto__;
var map__70965__$1 = (((((!((map__70965 == null))))?(((((map__70965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70965):map__70965);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70965__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70965__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70965__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.text.cljs$lang$applyTo = (function (seq70963){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70963));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.span = (function com$fulcrologic$fulcro_css$localized_dom$span(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72487 = arguments.length;
var i__4737__auto___72488 = (0);
while(true){
if((i__4737__auto___72488 < len__4736__auto___72487)){
args__4742__auto__.push((arguments[i__4737__auto___72488]));

var G__72489 = (i__4737__auto___72488 + (1));
i__4737__auto___72488 = G__72489;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70973 = conformed_args__66791__auto__;
var map__70973__$1 = (((((!((map__70973 == null))))?(((((map__70973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70973):map__70973);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70973__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70973__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70973__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.span.cljs$lang$applyTo = (function (seq70972){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70972));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.track = (function com$fulcrologic$fulcro_css$localized_dom$track(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72491 = arguments.length;
var i__4737__auto___72492 = (0);
while(true){
if((i__4737__auto___72492 < len__4736__auto___72491)){
args__4742__auto__.push((arguments[i__4737__auto___72492]));

var G__72493 = (i__4737__auto___72492 + (1));
i__4737__auto___72492 = G__72493;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70985 = conformed_args__66791__auto__;
var map__70985__$1 = (((((!((map__70985 == null))))?(((((map__70985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70985):map__70985);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70985__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70985__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70985__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.track.cljs$lang$applyTo = (function (seq70978){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70978));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.data = (function com$fulcrologic$fulcro_css$localized_dom$data(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72505 = arguments.length;
var i__4737__auto___72506 = (0);
while(true){
if((i__4737__auto___72506 < len__4736__auto___72505)){
args__4742__auto__.push((arguments[i__4737__auto___72506]));

var G__72507 = (i__4737__auto___72506 + (1));
i__4737__auto___72506 = G__72507;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70992 = conformed_args__66791__auto__;
var map__70992__$1 = (((((!((map__70992 == null))))?(((((map__70992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70992):map__70992);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70992__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70992__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70992__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.data.cljs$lang$applyTo = (function (seq70988){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70988));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.u = (function com$fulcrologic$fulcro_css$localized_dom$u(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72511 = arguments.length;
var i__4737__auto___72512 = (0);
while(true){
if((i__4737__auto___72512 < len__4736__auto___72511)){
args__4742__auto__.push((arguments[i__4737__auto___72512]));

var G__72513 = (i__4737__auto___72512 + (1));
i__4737__auto___72512 = G__72513;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71001 = conformed_args__66791__auto__;
var map__71001__$1 = (((((!((map__71001 == null))))?(((((map__71001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71001):map__71001);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71001__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71001__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71001__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.u.cljs$lang$applyTo = (function (seq70999){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70999));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.dl = (function com$fulcrologic$fulcro_css$localized_dom$dl(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72516 = arguments.length;
var i__4737__auto___72517 = (0);
while(true){
if((i__4737__auto___72517 < len__4736__auto___72516)){
args__4742__auto__.push((arguments[i__4737__auto___72517]));

var G__72518 = (i__4737__auto___72517 + (1));
i__4737__auto___72517 = G__72518;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71012 = conformed_args__66791__auto__;
var map__71012__$1 = (((((!((map__71012 == null))))?(((((map__71012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71012):map__71012);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71012__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71012__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71012__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.dl.cljs$lang$applyTo = (function (seq71007){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71007));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.select = (function com$fulcrologic$fulcro_css$localized_dom$select(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72523 = arguments.length;
var i__4737__auto___72524 = (0);
while(true){
if((i__4737__auto___72524 < len__4736__auto___72523)){
args__4742__auto__.push((arguments[i__4737__auto___72524]));

var G__72525 = (i__4737__auto___72524 + (1));
i__4737__auto___72524 = G__72525;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71022 = conformed_args__66791__auto__;
var map__71022__$1 = (((((!((map__71022 == null))))?(((((map__71022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71022):map__71022);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71022__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71022__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71022__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.select.cljs$lang$applyTo = (function (seq71018){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71018));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.polygon = (function com$fulcrologic$fulcro_css$localized_dom$polygon(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72531 = arguments.length;
var i__4737__auto___72532 = (0);
while(true){
if((i__4737__auto___72532 < len__4736__auto___72531)){
args__4742__auto__.push((arguments[i__4737__auto___72532]));

var G__72533 = (i__4737__auto___72532 + (1));
i__4737__auto___72532 = G__72533;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71030 = conformed_args__66791__auto__;
var map__71030__$1 = (((((!((map__71030 == null))))?(((((map__71030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71030):map__71030);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71030__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71030__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71030__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.polygon.cljs$lang$applyTo = (function (seq71026){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71026));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.pattern = (function com$fulcrologic$fulcro_css$localized_dom$pattern(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72543 = arguments.length;
var i__4737__auto___72544 = (0);
while(true){
if((i__4737__auto___72544 < len__4736__auto___72543)){
args__4742__auto__.push((arguments[i__4737__auto___72544]));

var G__72545 = (i__4737__auto___72544 + (1));
i__4737__auto___72544 = G__72545;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71043 = conformed_args__66791__auto__;
var map__71043__$1 = (((((!((map__71043 == null))))?(((((map__71043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71043):map__71043);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71043__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71043__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71043__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.pattern.cljs$lang$applyTo = (function (seq71035){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71035));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.html = (function com$fulcrologic$fulcro_css$localized_dom$html(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72553 = arguments.length;
var i__4737__auto___72554 = (0);
while(true){
if((i__4737__auto___72554 < len__4736__auto___72553)){
args__4742__auto__.push((arguments[i__4737__auto___72554]));

var G__72555 = (i__4737__auto___72554 + (1));
i__4737__auto___72554 = G__72555;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71053 = conformed_args__66791__auto__;
var map__71053__$1 = (((((!((map__71053 == null))))?(((((map__71053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71053):map__71053);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71053__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71053__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71053__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.html.cljs$lang$applyTo = (function (seq71052){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71052));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.foreignObject = (function com$fulcrologic$fulcro_css$localized_dom$foreignObject(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72562 = arguments.length;
var i__4737__auto___72563 = (0);
while(true){
if((i__4737__auto___72563 < len__4736__auto___72562)){
args__4742__auto__.push((arguments[i__4737__auto___72563]));

var G__72564 = (i__4737__auto___72563 + (1));
i__4737__auto___72563 = G__72564;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71068 = conformed_args__66791__auto__;
var map__71068__$1 = (((((!((map__71068 == null))))?(((((map__71068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71068):map__71068);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71068__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71068__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71068__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.foreignObject.cljs$lang$applyTo = (function (seq71058){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71058));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.thead = (function com$fulcrologic$fulcro_css$localized_dom$thead(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72574 = arguments.length;
var i__4737__auto___72575 = (0);
while(true){
if((i__4737__auto___72575 < len__4736__auto___72574)){
args__4742__auto__.push((arguments[i__4737__auto___72575]));

var G__72576 = (i__4737__auto___72575 + (1));
i__4737__auto___72575 = G__72576;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71087 = conformed_args__66791__auto__;
var map__71087__$1 = (((((!((map__71087 == null))))?(((((map__71087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71087):map__71087);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71087__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71087__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71087__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.thead.cljs$lang$applyTo = (function (seq71074){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71074));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.path = (function com$fulcrologic$fulcro_css$localized_dom$path(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72577 = arguments.length;
var i__4737__auto___72578 = (0);
while(true){
if((i__4737__auto___72578 < len__4736__auto___72577)){
args__4742__auto__.push((arguments[i__4737__auto___72578]));

var G__72579 = (i__4737__auto___72578 + (1));
i__4737__auto___72578 = G__72579;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71094 = conformed_args__66791__auto__;
var map__71094__$1 = (((((!((map__71094 == null))))?(((((map__71094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71094):map__71094);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71094__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71094__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71094__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.path.cljs$lang$applyTo = (function (seq71093){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71093));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.del = (function com$fulcrologic$fulcro_css$localized_dom$del(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72590 = arguments.length;
var i__4737__auto___72591 = (0);
while(true){
if((i__4737__auto___72591 < len__4736__auto___72590)){
args__4742__auto__.push((arguments[i__4737__auto___72591]));

var G__72592 = (i__4737__auto___72591 + (1));
i__4737__auto___72591 = G__72592;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71110 = conformed_args__66791__auto__;
var map__71110__$1 = (((((!((map__71110 == null))))?(((((map__71110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71110):map__71110);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71110__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71110__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71110__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.del.cljs$lang$applyTo = (function (seq71104){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71104));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.altGlyph = (function com$fulcrologic$fulcro_css$localized_dom$altGlyph(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72593 = arguments.length;
var i__4737__auto___72594 = (0);
while(true){
if((i__4737__auto___72594 < len__4736__auto___72593)){
args__4742__auto__.push((arguments[i__4737__auto___72594]));

var G__72595 = (i__4737__auto___72594 + (1));
i__4737__auto___72594 = G__72595;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71121 = conformed_args__66791__auto__;
var map__71121__$1 = (((((!((map__71121 == null))))?(((((map__71121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71121):map__71121);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71121__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71121__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71121__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.altGlyph.cljs$lang$applyTo = (function (seq71115){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71115));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.fieldset = (function com$fulcrologic$fulcro_css$localized_dom$fieldset(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72599 = arguments.length;
var i__4737__auto___72600 = (0);
while(true){
if((i__4737__auto___72600 < len__4736__auto___72599)){
args__4742__auto__.push((arguments[i__4737__auto___72600]));

var G__72601 = (i__4737__auto___72600 + (1));
i__4737__auto___72600 = G__72601;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71134 = conformed_args__66791__auto__;
var map__71134__$1 = (((((!((map__71134 == null))))?(((((map__71134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71134):map__71134);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71134__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71134__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71134__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.fieldset.cljs$lang$applyTo = (function (seq71130){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71130));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.aside = (function com$fulcrologic$fulcro_css$localized_dom$aside(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72602 = arguments.length;
var i__4737__auto___72603 = (0);
while(true){
if((i__4737__auto___72603 < len__4736__auto___72602)){
args__4742__auto__.push((arguments[i__4737__auto___72603]));

var G__72604 = (i__4737__auto___72603 + (1));
i__4737__auto___72603 = G__72604;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71146 = conformed_args__66791__auto__;
var map__71146__$1 = (((((!((map__71146 == null))))?(((((map__71146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71146):map__71146);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71146__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71146__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71146__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.aside.cljs$lang$applyTo = (function (seq71138){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71138));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feBlend = (function com$fulcrologic$fulcro_css$localized_dom$feBlend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72612 = arguments.length;
var i__4737__auto___72613 = (0);
while(true){
if((i__4737__auto___72613 < len__4736__auto___72612)){
args__4742__auto__.push((arguments[i__4737__auto___72613]));

var G__72614 = (i__4737__auto___72613 + (1));
i__4737__auto___72613 = G__72614;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71154 = conformed_args__66791__auto__;
var map__71154__$1 = (((((!((map__71154 == null))))?(((((map__71154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71154):map__71154);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71154__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71154__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71154__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feBlend.cljs$lang$applyTo = (function (seq71152){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71152));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.figure = (function com$fulcrologic$fulcro_css$localized_dom$figure(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72618 = arguments.length;
var i__4737__auto___72619 = (0);
while(true){
if((i__4737__auto___72619 < len__4736__auto___72618)){
args__4742__auto__.push((arguments[i__4737__auto___72619]));

var G__72620 = (i__4737__auto___72619 + (1));
i__4737__auto___72619 = G__72620;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71164 = conformed_args__66791__auto__;
var map__71164__$1 = (((((!((map__71164 == null))))?(((((map__71164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71164):map__71164);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71164__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71164__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71164__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.figure.cljs$lang$applyTo = (function (seq71160){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71160));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.textPath = (function com$fulcrologic$fulcro_css$localized_dom$textPath(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72623 = arguments.length;
var i__4737__auto___72624 = (0);
while(true){
if((i__4737__auto___72624 < len__4736__auto___72623)){
args__4742__auto__.push((arguments[i__4737__auto___72624]));

var G__72625 = (i__4737__auto___72624 + (1));
i__4737__auto___72624 = G__72625;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71176 = conformed_args__66791__auto__;
var map__71176__$1 = (((((!((map__71176 == null))))?(((((map__71176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71176):map__71176);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71176__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71176__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71176__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.textPath.cljs$lang$applyTo = (function (seq71169){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71169));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.figcaption = (function com$fulcrologic$fulcro_css$localized_dom$figcaption(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72628 = arguments.length;
var i__4737__auto___72629 = (0);
while(true){
if((i__4737__auto___72629 < len__4736__auto___72628)){
args__4742__auto__.push((arguments[i__4737__auto___72629]));

var G__72631 = (i__4737__auto___72629 + (1));
i__4737__auto___72629 = G__72631;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71188 = conformed_args__66791__auto__;
var map__71188__$1 = (((((!((map__71188 == null))))?(((((map__71188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71188):map__71188);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71188__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71188__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71188__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.figcaption.cljs$lang$applyTo = (function (seq71180){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71180));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.mask = (function com$fulcrologic$fulcro_css$localized_dom$mask(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72638 = arguments.length;
var i__4737__auto___72639 = (0);
while(true){
if((i__4737__auto___72639 < len__4736__auto___72638)){
args__4742__auto__.push((arguments[i__4737__auto___72639]));

var G__72640 = (i__4737__auto___72639 + (1));
i__4737__auto___72639 = G__72640;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71205 = conformed_args__66791__auto__;
var map__71205__$1 = (((((!((map__71205 == null))))?(((((map__71205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71205):map__71205);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71205__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71205__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71205__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.mask.cljs$lang$applyTo = (function (seq71198){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71198));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.q = (function com$fulcrologic$fulcro_css$localized_dom$q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72647 = arguments.length;
var i__4737__auto___72649 = (0);
while(true){
if((i__4737__auto___72649 < len__4736__auto___72647)){
args__4742__auto__.push((arguments[i__4737__auto___72649]));

var G__72650 = (i__4737__auto___72649 + (1));
i__4737__auto___72649 = G__72650;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71218 = conformed_args__66791__auto__;
var map__71218__$1 = (((((!((map__71218 == null))))?(((((map__71218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71218):map__71218);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71218__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71218__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71218__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.q.cljs$lang$applyTo = (function (seq71212){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71212));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.bdi = (function com$fulcrologic$fulcro_css$localized_dom$bdi(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72656 = arguments.length;
var i__4737__auto___72657 = (0);
while(true){
if((i__4737__auto___72657 < len__4736__auto___72656)){
args__4742__auto__.push((arguments[i__4737__auto___72657]));

var G__72658 = (i__4737__auto___72657 + (1));
i__4737__auto___72657 = G__72658;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71231 = conformed_args__66791__auto__;
var map__71231__$1 = (((((!((map__71231 == null))))?(((((map__71231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71231):map__71231);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71231__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71231__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71231__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.bdi.cljs$lang$applyTo = (function (seq71225){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71225));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feDistantLight = (function com$fulcrologic$fulcro_css$localized_dom$feDistantLight(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72661 = arguments.length;
var i__4737__auto___72662 = (0);
while(true){
if((i__4737__auto___72662 < len__4736__auto___72661)){
args__4742__auto__.push((arguments[i__4737__auto___72662]));

var G__72665 = (i__4737__auto___72662 + (1));
i__4737__auto___72662 = G__72665;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71242 = conformed_args__66791__auto__;
var map__71242__$1 = (((((!((map__71242 == null))))?(((((map__71242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71242):map__71242);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71242__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71242__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71242__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feDistantLight.cljs$lang$applyTo = (function (seq71236){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71236));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.video = (function com$fulcrologic$fulcro_css$localized_dom$video(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72668 = arguments.length;
var i__4737__auto___72669 = (0);
while(true){
if((i__4737__auto___72669 < len__4736__auto___72668)){
args__4742__auto__.push((arguments[i__4737__auto___72669]));

var G__72670 = (i__4737__auto___72669 + (1));
i__4737__auto___72669 = G__72670;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71253 = conformed_args__66791__auto__;
var map__71253__$1 = (((((!((map__71253 == null))))?(((((map__71253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71253):map__71253);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71253__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71253__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71253__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.video.cljs$lang$applyTo = (function (seq71248){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71248));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.address = (function com$fulcrologic$fulcro_css$localized_dom$address(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72676 = arguments.length;
var i__4737__auto___72677 = (0);
while(true){
if((i__4737__auto___72677 < len__4736__auto___72676)){
args__4742__auto__.push((arguments[i__4737__auto___72677]));

var G__72678 = (i__4737__auto___72677 + (1));
i__4737__auto___72677 = G__72678;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71263 = conformed_args__66791__auto__;
var map__71263__$1 = (((((!((map__71263 == null))))?(((((map__71263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71263):map__71263);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71263__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71263__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71263__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.address.cljs$lang$applyTo = (function (seq71258){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71258));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.caption = (function com$fulcrologic$fulcro_css$localized_dom$caption(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72681 = arguments.length;
var i__4737__auto___72682 = (0);
while(true){
if((i__4737__auto___72682 < len__4736__auto___72681)){
args__4742__auto__.push((arguments[i__4737__auto___72682]));

var G__72683 = (i__4737__auto___72682 + (1));
i__4737__auto___72682 = G__72683;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71274 = conformed_args__66791__auto__;
var map__71274__$1 = (((((!((map__71274 == null))))?(((((map__71274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71274):map__71274);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71274__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71274__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71274__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.caption.cljs$lang$applyTo = (function (seq71269){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71269));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.dd = (function com$fulcrologic$fulcro_css$localized_dom$dd(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72687 = arguments.length;
var i__4737__auto___72688 = (0);
while(true){
if((i__4737__auto___72688 < len__4736__auto___72687)){
args__4742__auto__.push((arguments[i__4737__auto___72688]));

var G__72690 = (i__4737__auto___72688 + (1));
i__4737__auto___72688 = G__72690;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71283 = conformed_args__66791__auto__;
var map__71283__$1 = (((((!((map__71283 == null))))?(((((map__71283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71283):map__71283);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71283__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71283__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71283__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.dd.cljs$lang$applyTo = (function (seq71279){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71279));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.rp = (function com$fulcrologic$fulcro_css$localized_dom$rp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72698 = arguments.length;
var i__4737__auto___72699 = (0);
while(true){
if((i__4737__auto___72699 < len__4736__auto___72698)){
args__4742__auto__.push((arguments[i__4737__auto___72699]));

var G__72700 = (i__4737__auto___72699 + (1));
i__4737__auto___72699 = G__72700;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71298 = conformed_args__66791__auto__;
var map__71298__$1 = (((((!((map__71298 == null))))?(((((map__71298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71298):map__71298);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71298__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71298__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71298__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.rp.cljs$lang$applyTo = (function (seq71289){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71289));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.hr = (function com$fulcrologic$fulcro_css$localized_dom$hr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72703 = arguments.length;
var i__4737__auto___72704 = (0);
while(true){
if((i__4737__auto___72704 < len__4736__auto___72703)){
args__4742__auto__.push((arguments[i__4737__auto___72704]));

var G__72705 = (i__4737__auto___72704 + (1));
i__4737__auto___72704 = G__72705;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71308 = conformed_args__66791__auto__;
var map__71308__$1 = (((((!((map__71308 == null))))?(((((map__71308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71308):map__71308);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71308__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71308__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71308__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.hr.cljs$lang$applyTo = (function (seq71305){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71305));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.meta = (function com$fulcrologic$fulcro_css$localized_dom$meta(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72709 = arguments.length;
var i__4737__auto___72710 = (0);
while(true){
if((i__4737__auto___72710 < len__4736__auto___72709)){
args__4742__auto__.push((arguments[i__4737__auto___72710]));

var G__72713 = (i__4737__auto___72710 + (1));
i__4737__auto___72710 = G__72713;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71317 = conformed_args__66791__auto__;
var map__71317__$1 = (((((!((map__71317 == null))))?(((((map__71317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71317):map__71317);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71317__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71317__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71317__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.meta.cljs$lang$applyTo = (function (seq71313){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71313));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.tbody = (function com$fulcrologic$fulcro_css$localized_dom$tbody(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72719 = arguments.length;
var i__4737__auto___72720 = (0);
while(true){
if((i__4737__auto___72720 < len__4736__auto___72719)){
args__4742__auto__.push((arguments[i__4737__auto___72720]));

var G__72721 = (i__4737__auto___72720 + (1));
i__4737__auto___72720 = G__72721;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71324 = conformed_args__66791__auto__;
var map__71324__$1 = (((((!((map__71324 == null))))?(((((map__71324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71324):map__71324);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71324__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71324__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71324__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.tbody.cljs$lang$applyTo = (function (seq71322){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71322));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.desc = (function com$fulcrologic$fulcro_css$localized_dom$desc(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72727 = arguments.length;
var i__4737__auto___72728 = (0);
while(true){
if((i__4737__auto___72728 < len__4736__auto___72727)){
args__4742__auto__.push((arguments[i__4737__auto___72728]));

var G__72730 = (i__4737__auto___72728 + (1));
i__4737__auto___72728 = G__72730;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71333 = conformed_args__66791__auto__;
var map__71333__$1 = (((((!((map__71333 == null))))?(((((map__71333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71333):map__71333);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71333__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71333__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71333__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.desc.cljs$lang$applyTo = (function (seq71329){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71329));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.table = (function com$fulcrologic$fulcro_css$localized_dom$table(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72734 = arguments.length;
var i__4737__auto___72735 = (0);
while(true){
if((i__4737__auto___72735 < len__4736__auto___72734)){
args__4742__auto__.push((arguments[i__4737__auto___72735]));

var G__72736 = (i__4737__auto___72735 + (1));
i__4737__auto___72735 = G__72736;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71339 = conformed_args__66791__auto__;
var map__71339__$1 = (((((!((map__71339 == null))))?(((((map__71339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71339):map__71339);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71339__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71339__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71339__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.table.cljs$lang$applyTo = (function (seq71337){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71337));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.pre = (function com$fulcrologic$fulcro_css$localized_dom$pre(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72742 = arguments.length;
var i__4737__auto___72743 = (0);
while(true){
if((i__4737__auto___72743 < len__4736__auto___72742)){
args__4742__auto__.push((arguments[i__4737__auto___72743]));

var G__72744 = (i__4737__auto___72743 + (1));
i__4737__auto___72743 = G__72744;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71350 = conformed_args__66791__auto__;
var map__71350__$1 = (((((!((map__71350 == null))))?(((((map__71350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71350):map__71350);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71350__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71350__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71350__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.pre.cljs$lang$applyTo = (function (seq71344){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71344));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.ul = (function com$fulcrologic$fulcro_css$localized_dom$ul(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72751 = arguments.length;
var i__4737__auto___72752 = (0);
while(true){
if((i__4737__auto___72752 < len__4736__auto___72751)){
args__4742__auto__.push((arguments[i__4737__auto___72752]));

var G__72753 = (i__4737__auto___72752 + (1));
i__4737__auto___72752 = G__72753;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71359 = conformed_args__66791__auto__;
var map__71359__$1 = (((((!((map__71359 == null))))?(((((map__71359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71359):map__71359);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71359__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71359__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71359__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.ul.cljs$lang$applyTo = (function (seq71356){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71356));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feConvolveMatrix = (function com$fulcrologic$fulcro_css$localized_dom$feConvolveMatrix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72759 = arguments.length;
var i__4737__auto___72760 = (0);
while(true){
if((i__4737__auto___72760 < len__4736__auto___72759)){
args__4742__auto__.push((arguments[i__4737__auto___72760]));

var G__72761 = (i__4737__auto___72760 + (1));
i__4737__auto___72760 = G__72761;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71370 = conformed_args__66791__auto__;
var map__71370__$1 = (((((!((map__71370 == null))))?(((((map__71370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71370):map__71370);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71370__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71370__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71370__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq71366){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71366));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.sup = (function com$fulcrologic$fulcro_css$localized_dom$sup(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72763 = arguments.length;
var i__4737__auto___72764 = (0);
while(true){
if((i__4737__auto___72764 < len__4736__auto___72763)){
args__4742__auto__.push((arguments[i__4737__auto___72764]));

var G__72765 = (i__4737__auto___72764 + (1));
i__4737__auto___72764 = G__72765;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71378 = conformed_args__66791__auto__;
var map__71378__$1 = (((((!((map__71378 == null))))?(((((map__71378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71378):map__71378);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71378__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71378__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71378__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.sup.cljs$lang$applyTo = (function (seq71374){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71374));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.dfn = (function com$fulcrologic$fulcro_css$localized_dom$dfn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72769 = arguments.length;
var i__4737__auto___72770 = (0);
while(true){
if((i__4737__auto___72770 < len__4736__auto___72769)){
args__4742__auto__.push((arguments[i__4737__auto___72770]));

var G__72772 = (i__4737__auto___72770 + (1));
i__4737__auto___72770 = G__72772;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71386 = conformed_args__66791__auto__;
var map__71386__$1 = (((((!((map__71386 == null))))?(((((map__71386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71386):map__71386);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71386__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71386__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71386__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.dfn.cljs$lang$applyTo = (function (seq71380){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71380));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.sub = (function com$fulcrologic$fulcro_css$localized_dom$sub(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72774 = arguments.length;
var i__4737__auto___72775 = (0);
while(true){
if((i__4737__auto___72775 < len__4736__auto___72774)){
args__4742__auto__.push((arguments[i__4737__auto___72775]));

var G__72776 = (i__4737__auto___72775 + (1));
i__4737__auto___72775 = G__72776;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71397 = conformed_args__66791__auto__;
var map__71397__$1 = (((((!((map__71397 == null))))?(((((map__71397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71397):map__71397);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71397__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71397__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71397__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.sub.cljs$lang$applyTo = (function (seq71393){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71393));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.mark = (function com$fulcrologic$fulcro_css$localized_dom$mark(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72780 = arguments.length;
var i__4737__auto___72781 = (0);
while(true){
if((i__4737__auto___72781 < len__4736__auto___72780)){
args__4742__auto__.push((arguments[i__4737__auto___72781]));

var G__72783 = (i__4737__auto___72781 + (1));
i__4737__auto___72781 = G__72783;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71411 = conformed_args__66791__auto__;
var map__71411__$1 = (((((!((map__71411 == null))))?(((((map__71411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71411):map__71411);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71411__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71411__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71411__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.mark.cljs$lang$applyTo = (function (seq71407){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71407));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feDisplacementMap = (function com$fulcrologic$fulcro_css$localized_dom$feDisplacementMap(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72788 = arguments.length;
var i__4737__auto___72789 = (0);
while(true){
if((i__4737__auto___72789 < len__4736__auto___72788)){
args__4742__auto__.push((arguments[i__4737__auto___72789]));

var G__72790 = (i__4737__auto___72789 + (1));
i__4737__auto___72789 = G__72790;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71424 = conformed_args__66791__auto__;
var map__71424__$1 = (((((!((map__71424 == null))))?(((((map__71424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71424):map__71424);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71424__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71424__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71424__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feDisplacementMap.cljs$lang$applyTo = (function (seq71420){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71420));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.unknown = (function com$fulcrologic$fulcro_css$localized_dom$unknown(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72794 = arguments.length;
var i__4737__auto___72796 = (0);
while(true){
if((i__4737__auto___72796 < len__4736__auto___72794)){
args__4742__auto__.push((arguments[i__4737__auto___72796]));

var G__72797 = (i__4737__auto___72796 + (1));
i__4737__auto___72796 = G__72797;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71436 = conformed_args__66791__auto__;
var map__71436__$1 = (((((!((map__71436 == null))))?(((((map__71436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71436):map__71436);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71436__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71436__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71436__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.unknown.cljs$lang$applyTo = (function (seq71432){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71432));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.script = (function com$fulcrologic$fulcro_css$localized_dom$script(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72800 = arguments.length;
var i__4737__auto___72801 = (0);
while(true){
if((i__4737__auto___72801 < len__4736__auto___72800)){
args__4742__auto__.push((arguments[i__4737__auto___72801]));

var G__72802 = (i__4737__auto___72801 + (1));
i__4737__auto___72801 = G__72802;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71446 = conformed_args__66791__auto__;
var map__71446__$1 = (((((!((map__71446 == null))))?(((((map__71446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71446):map__71446);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71446__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71446__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71446__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.script.cljs$lang$applyTo = (function (seq71442){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71442));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feTurbulence = (function com$fulcrologic$fulcro_css$localized_dom$feTurbulence(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72807 = arguments.length;
var i__4737__auto___72808 = (0);
while(true){
if((i__4737__auto___72808 < len__4736__auto___72807)){
args__4742__auto__.push((arguments[i__4737__auto___72808]));

var G__72809 = (i__4737__auto___72808 + (1));
i__4737__auto___72808 = G__72809;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71453 = conformed_args__66791__auto__;
var map__71453__$1 = (((((!((map__71453 == null))))?(((((map__71453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71453):map__71453);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71453__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71453__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71453__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feTurbulence.cljs$lang$applyTo = (function (seq71451){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71451));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.big = (function com$fulcrologic$fulcro_css$localized_dom$big(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72814 = arguments.length;
var i__4737__auto___72815 = (0);
while(true){
if((i__4737__auto___72815 < len__4736__auto___72814)){
args__4742__auto__.push((arguments[i__4737__auto___72815]));

var G__72816 = (i__4737__auto___72815 + (1));
i__4737__auto___72815 = G__72816;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71462 = conformed_args__66791__auto__;
var map__71462__$1 = (((((!((map__71462 == null))))?(((((map__71462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71462):map__71462);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71462__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71462__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71462__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.big.cljs$lang$applyTo = (function (seq71458){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71458));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.button = (function com$fulcrologic$fulcro_css$localized_dom$button(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72820 = arguments.length;
var i__4737__auto___72821 = (0);
while(true){
if((i__4737__auto___72821 < len__4736__auto___72820)){
args__4742__auto__.push((arguments[i__4737__auto___72821]));

var G__72822 = (i__4737__auto___72821 + (1));
i__4737__auto___72821 = G__72822;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71471 = conformed_args__66791__auto__;
var map__71471__$1 = (((((!((map__71471 == null))))?(((((map__71471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71471):map__71471);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71471__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71471__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71471__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.button.cljs$lang$applyTo = (function (seq71467){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71467));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.font_face_uri = (function com$fulcrologic$fulcro_css$localized_dom$font_face_uri(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72824 = arguments.length;
var i__4737__auto___72828 = (0);
while(true){
if((i__4737__auto___72828 < len__4736__auto___72824)){
args__4742__auto__.push((arguments[i__4737__auto___72828]));

var G__72829 = (i__4737__auto___72828 + (1));
i__4737__auto___72828 = G__72829;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71481 = conformed_args__66791__auto__;
var map__71481__$1 = (((((!((map__71481 == null))))?(((((map__71481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71481):map__71481);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71481__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71481__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71481__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.font_face_uri.cljs$lang$applyTo = (function (seq71476){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71476));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.wbr = (function com$fulcrologic$fulcro_css$localized_dom$wbr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72834 = arguments.length;
var i__4737__auto___72835 = (0);
while(true){
if((i__4737__auto___72835 < len__4736__auto___72834)){
args__4742__auto__.push((arguments[i__4737__auto___72835]));

var G__72836 = (i__4737__auto___72835 + (1));
i__4737__auto___72835 = G__72836;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71493 = conformed_args__66791__auto__;
var map__71493__$1 = (((((!((map__71493 == null))))?(((((map__71493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71493):map__71493);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71493__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71493__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71493__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.wbr.cljs$lang$applyTo = (function (seq71486){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71486));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.symbol = (function com$fulcrologic$fulcro_css$localized_dom$symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72840 = arguments.length;
var i__4737__auto___72841 = (0);
while(true){
if((i__4737__auto___72841 < len__4736__auto___72840)){
args__4742__auto__.push((arguments[i__4737__auto___72841]));

var G__72842 = (i__4737__auto___72841 + (1));
i__4737__auto___72841 = G__72842;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71507 = conformed_args__66791__auto__;
var map__71507__$1 = (((((!((map__71507 == null))))?(((((map__71507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71507):map__71507);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71507__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71507__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71507__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.symbol.cljs$lang$applyTo = (function (seq71504){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71504));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.strong = (function com$fulcrologic$fulcro_css$localized_dom$strong(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72846 = arguments.length;
var i__4737__auto___72847 = (0);
while(true){
if((i__4737__auto___72847 < len__4736__auto___72846)){
args__4742__auto__.push((arguments[i__4737__auto___72847]));

var G__72848 = (i__4737__auto___72847 + (1));
i__4737__auto___72847 = G__72848;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71515 = conformed_args__66791__auto__;
var map__71515__$1 = (((((!((map__71515 == null))))?(((((map__71515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71515):map__71515);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71515__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71515__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71515__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.strong.cljs$lang$applyTo = (function (seq71513){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71513));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.use = (function com$fulcrologic$fulcro_css$localized_dom$use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72855 = arguments.length;
var i__4737__auto___72856 = (0);
while(true){
if((i__4737__auto___72856 < len__4736__auto___72855)){
args__4742__auto__.push((arguments[i__4737__auto___72856]));

var G__72857 = (i__4737__auto___72856 + (1));
i__4737__auto___72856 = G__72857;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71525 = conformed_args__66791__auto__;
var map__71525__$1 = (((((!((map__71525 == null))))?(((((map__71525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71525):map__71525);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71525__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71525__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71525__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.use.cljs$lang$applyTo = (function (seq71520){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71520));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.solidcolor = (function com$fulcrologic$fulcro_css$localized_dom$solidcolor(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72860 = arguments.length;
var i__4737__auto___72861 = (0);
while(true){
if((i__4737__auto___72861 < len__4736__auto___72860)){
args__4742__auto__.push((arguments[i__4737__auto___72861]));

var G__72863 = (i__4737__auto___72861 + (1));
i__4737__auto___72861 = G__72863;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71532 = conformed_args__66791__auto__;
var map__71532__$1 = (((((!((map__71532 == null))))?(((((map__71532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71532):map__71532);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71532__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71532__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71532__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.solidcolor.cljs$lang$applyTo = (function (seq71528){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71528));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.fePointLight = (function com$fulcrologic$fulcro_css$localized_dom$fePointLight(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72871 = arguments.length;
var i__4737__auto___72872 = (0);
while(true){
if((i__4737__auto___72872 < len__4736__auto___72871)){
args__4742__auto__.push((arguments[i__4737__auto___72872]));

var G__72873 = (i__4737__auto___72872 + (1));
i__4737__auto___72872 = G__72873;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71546 = conformed_args__66791__auto__;
var map__71546__$1 = (((((!((map__71546 == null))))?(((((map__71546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71546):map__71546);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.fePointLight.cljs$lang$applyTo = (function (seq71538){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71538));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.li = (function com$fulcrologic$fulcro_css$localized_dom$li(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72875 = arguments.length;
var i__4737__auto___72876 = (0);
while(true){
if((i__4737__auto___72876 < len__4736__auto___72875)){
args__4742__auto__.push((arguments[i__4737__auto___72876]));

var G__72877 = (i__4737__auto___72876 + (1));
i__4737__auto___72876 = G__72877;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71558 = conformed_args__66791__auto__;
var map__71558__$1 = (((((!((map__71558 == null))))?(((((map__71558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71558):map__71558);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71558__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71558__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71558__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.li.cljs$lang$applyTo = (function (seq71554){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71554));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.dt = (function com$fulcrologic$fulcro_css$localized_dom$dt(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72884 = arguments.length;
var i__4737__auto___72885 = (0);
while(true){
if((i__4737__auto___72885 < len__4736__auto___72884)){
args__4742__auto__.push((arguments[i__4737__auto___72885]));

var G__72886 = (i__4737__auto___72885 + (1));
i__4737__auto___72885 = G__72886;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71566 = conformed_args__66791__auto__;
var map__71566__$1 = (((((!((map__71566 == null))))?(((((map__71566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71566):map__71566);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71566__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71566__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71566__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.dt.cljs$lang$applyTo = (function (seq71565){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71565));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feFuncB = (function com$fulcrologic$fulcro_css$localized_dom$feFuncB(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72891 = arguments.length;
var i__4737__auto___72892 = (0);
while(true){
if((i__4737__auto___72892 < len__4736__auto___72891)){
args__4742__auto__.push((arguments[i__4737__auto___72892]));

var G__72893 = (i__4737__auto___72892 + (1));
i__4737__auto___72892 = G__72893;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71578 = conformed_args__66791__auto__;
var map__71578__$1 = (((((!((map__71578 == null))))?(((((map__71578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71578):map__71578);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71578__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71578__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71578__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feFuncB.cljs$lang$applyTo = (function (seq71572){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71572));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.marker = (function com$fulcrologic$fulcro_css$localized_dom$marker(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72897 = arguments.length;
var i__4737__auto___72898 = (0);
while(true){
if((i__4737__auto___72898 < len__4736__auto___72897)){
args__4742__auto__.push((arguments[i__4737__auto___72898]));

var G__72899 = (i__4737__auto___72898 + (1));
i__4737__auto___72898 = G__72899;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71591 = conformed_args__66791__auto__;
var map__71591__$1 = (((((!((map__71591 == null))))?(((((map__71591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71591):map__71591);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71591__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71591__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71591__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.marker.cljs$lang$applyTo = (function (seq71586){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71586));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feComponentTransfer = (function com$fulcrologic$fulcro_css$localized_dom$feComponentTransfer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72902 = arguments.length;
var i__4737__auto___72903 = (0);
while(true){
if((i__4737__auto___72903 < len__4736__auto___72902)){
args__4742__auto__.push((arguments[i__4737__auto___72903]));

var G__72904 = (i__4737__auto___72903 + (1));
i__4737__auto___72903 = G__72904;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71600 = conformed_args__66791__auto__;
var map__71600__$1 = (((((!((map__71600 == null))))?(((((map__71600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71600):map__71600);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71600__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71600__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71600__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feComponentTransfer.cljs$lang$applyTo = (function (seq71597){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71597));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.td = (function com$fulcrologic$fulcro_css$localized_dom$td(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72909 = arguments.length;
var i__4737__auto___72910 = (0);
while(true){
if((i__4737__auto___72910 < len__4736__auto___72909)){
args__4742__auto__.push((arguments[i__4737__auto___72910]));

var G__72911 = (i__4737__auto___72910 + (1));
i__4737__auto___72910 = G__72911;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71610 = conformed_args__66791__auto__;
var map__71610__$1 = (((((!((map__71610 == null))))?(((((map__71610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71610):map__71610);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71610__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71610__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71610__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.td.cljs$lang$applyTo = (function (seq71606){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71606));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.tr = (function com$fulcrologic$fulcro_css$localized_dom$tr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72914 = arguments.length;
var i__4737__auto___72915 = (0);
while(true){
if((i__4737__auto___72915 < len__4736__auto___72914)){
args__4742__auto__.push((arguments[i__4737__auto___72915]));

var G__72916 = (i__4737__auto___72915 + (1));
i__4737__auto___72915 = G__72916;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71616 = conformed_args__66791__auto__;
var map__71616__$1 = (((((!((map__71616 == null))))?(((((map__71616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71616):map__71616);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71616__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71616__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71616__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.tr.cljs$lang$applyTo = (function (seq71615){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71615));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.circle = (function com$fulcrologic$fulcro_css$localized_dom$circle(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72917 = arguments.length;
var i__4737__auto___72918 = (0);
while(true){
if((i__4737__auto___72918 < len__4736__auto___72917)){
args__4742__auto__.push((arguments[i__4737__auto___72918]));

var G__72919 = (i__4737__auto___72918 + (1));
i__4737__auto___72918 = G__72919;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71625 = conformed_args__66791__auto__;
var map__71625__$1 = (((((!((map__71625 == null))))?(((((map__71625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71625):map__71625);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71625__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71625__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71625__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.circle.cljs$lang$applyTo = (function (seq71621){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71621));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.section = (function com$fulcrologic$fulcro_css$localized_dom$section(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72922 = arguments.length;
var i__4737__auto___72923 = (0);
while(true){
if((i__4737__auto___72923 < len__4736__auto___72922)){
args__4742__auto__.push((arguments[i__4737__auto___72923]));

var G__72924 = (i__4737__auto___72923 + (1));
i__4737__auto___72923 = G__72924;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71634 = conformed_args__66791__auto__;
var map__71634__$1 = (((((!((map__71634 == null))))?(((((map__71634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71634):map__71634);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71634__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71634__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71634__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.section.cljs$lang$applyTo = (function (seq71630){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71630));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feDropShadow = (function com$fulcrologic$fulcro_css$localized_dom$feDropShadow(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72925 = arguments.length;
var i__4737__auto___72926 = (0);
while(true){
if((i__4737__auto___72926 < len__4736__auto___72925)){
args__4742__auto__.push((arguments[i__4737__auto___72926]));

var G__72927 = (i__4737__auto___72926 + (1));
i__4737__auto___72926 = G__72927;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71641 = conformed_args__66791__auto__;
var map__71641__$1 = (((((!((map__71641 == null))))?(((((map__71641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71641):map__71641);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71641__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71641__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71641__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feDropShadow.cljs$lang$applyTo = (function (seq71639){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71639));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.th = (function com$fulcrologic$fulcro_css$localized_dom$th(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72929 = arguments.length;
var i__4737__auto___72930 = (0);
while(true){
if((i__4737__auto___72930 < len__4736__auto___72929)){
args__4742__auto__.push((arguments[i__4737__auto___72930]));

var G__72931 = (i__4737__auto___72930 + (1));
i__4737__auto___72930 = G__72931;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71649 = conformed_args__66791__auto__;
var map__71649__$1 = (((((!((map__71649 == null))))?(((((map__71649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71649):map__71649);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71649__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71649__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71649__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.th.cljs$lang$applyTo = (function (seq71645){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71645));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.time = (function com$fulcrologic$fulcro_css$localized_dom$time(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72939 = arguments.length;
var i__4737__auto___72940 = (0);
while(true){
if((i__4737__auto___72940 < len__4736__auto___72939)){
args__4742__auto__.push((arguments[i__4737__auto___72940]));

var G__72941 = (i__4737__auto___72940 + (1));
i__4737__auto___72940 = G__72941;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71655 = conformed_args__66791__auto__;
var map__71655__$1 = (((((!((map__71655 == null))))?(((((map__71655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71655):map__71655);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71655__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71655__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71655__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.time.cljs$lang$applyTo = (function (seq71654){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71654));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.optgroup = (function com$fulcrologic$fulcro_css$localized_dom$optgroup(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72944 = arguments.length;
var i__4737__auto___72945 = (0);
while(true){
if((i__4737__auto___72945 < len__4736__auto___72944)){
args__4742__auto__.push((arguments[i__4737__auto___72945]));

var G__72946 = (i__4737__auto___72945 + (1));
i__4737__auto___72945 = G__72946;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71663 = conformed_args__66791__auto__;
var map__71663__$1 = (((((!((map__71663 == null))))?(((((map__71663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71663):map__71663);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71663__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71663__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71663__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.optgroup.cljs$lang$applyTo = (function (seq71660){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71660));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.iframe = (function com$fulcrologic$fulcro_css$localized_dom$iframe(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72951 = arguments.length;
var i__4737__auto___72952 = (0);
while(true){
if((i__4737__auto___72952 < len__4736__auto___72951)){
args__4742__auto__.push((arguments[i__4737__auto___72952]));

var G__72955 = (i__4737__auto___72952 + (1));
i__4737__auto___72952 = G__72955;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71670 = conformed_args__66791__auto__;
var map__71670__$1 = (((((!((map__71670 == null))))?(((((map__71670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71670):map__71670);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71670__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71670__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71670__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.iframe.cljs$lang$applyTo = (function (seq71666){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71666));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.color_profile = (function com$fulcrologic$fulcro_css$localized_dom$color_profile(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72956 = arguments.length;
var i__4737__auto___72957 = (0);
while(true){
if((i__4737__auto___72957 < len__4736__auto___72956)){
args__4742__auto__.push((arguments[i__4737__auto___72957]));

var G__72958 = (i__4737__auto___72957 + (1));
i__4737__auto___72957 = G__72958;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71676 = conformed_args__66791__auto__;
var map__71676__$1 = (((((!((map__71676 == null))))?(((((map__71676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71676):map__71676);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71676__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71676__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71676__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.color_profile.cljs$lang$applyTo = (function (seq71675){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71675));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.legend = (function com$fulcrologic$fulcro_css$localized_dom$legend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72965 = arguments.length;
var i__4737__auto___72966 = (0);
while(true){
if((i__4737__auto___72966 < len__4736__auto___72965)){
args__4742__auto__.push((arguments[i__4737__auto___72966]));

var G__72967 = (i__4737__auto___72966 + (1));
i__4737__auto___72966 = G__72967;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71685 = conformed_args__66791__auto__;
var map__71685__$1 = (((((!((map__71685 == null))))?(((((map__71685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71685):map__71685);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71685__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71685__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71685__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.legend.cljs$lang$applyTo = (function (seq71681){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71681));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.em = (function com$fulcrologic$fulcro_css$localized_dom$em(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72971 = arguments.length;
var i__4737__auto___72972 = (0);
while(true){
if((i__4737__auto___72972 < len__4736__auto___72971)){
args__4742__auto__.push((arguments[i__4737__auto___72972]));

var G__72975 = (i__4737__auto___72972 + (1));
i__4737__auto___72972 = G__72975;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71694 = conformed_args__66791__auto__;
var map__71694__$1 = (((((!((map__71694 == null))))?(((((map__71694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71694):map__71694);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71694__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71694__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71694__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.em.cljs$lang$applyTo = (function (seq71690){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71690));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.kbd = (function com$fulcrologic$fulcro_css$localized_dom$kbd(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72979 = arguments.length;
var i__4737__auto___72980 = (0);
while(true){
if((i__4737__auto___72980 < len__4736__auto___72979)){
args__4742__auto__.push((arguments[i__4737__auto___72980]));

var G__72981 = (i__4737__auto___72980 + (1));
i__4737__auto___72980 = G__72981;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71700 = conformed_args__66791__auto__;
var map__71700__$1 = (((((!((map__71700 == null))))?(((((map__71700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71700):map__71700);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71700__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71700__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71700__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.kbd.cljs$lang$applyTo = (function (seq71699){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71699));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.article = (function com$fulcrologic$fulcro_css$localized_dom$article(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72987 = arguments.length;
var i__4737__auto___72988 = (0);
while(true){
if((i__4737__auto___72988 < len__4736__auto___72987)){
args__4742__auto__.push((arguments[i__4737__auto___72988]));

var G__72989 = (i__4737__auto___72988 + (1));
i__4737__auto___72988 = G__72989;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71709 = conformed_args__66791__auto__;
var map__71709__$1 = (((((!((map__71709 == null))))?(((((map__71709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71709):map__71709);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71709__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71709__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71709__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.article.cljs$lang$applyTo = (function (seq71705){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71705));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.animateColor = (function com$fulcrologic$fulcro_css$localized_dom$animateColor(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72992 = arguments.length;
var i__4737__auto___72993 = (0);
while(true){
if((i__4737__auto___72993 < len__4736__auto___72992)){
args__4742__auto__.push((arguments[i__4737__auto___72993]));

var G__72994 = (i__4737__auto___72993 + (1));
i__4737__auto___72993 = G__72994;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71718 = conformed_args__66791__auto__;
var map__71718__$1 = (((((!((map__71718 == null))))?(((((map__71718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71718):map__71718);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71718__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71718__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71718__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.animateColor.cljs$lang$applyTo = (function (seq71714){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71714));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.clipPath = (function com$fulcrologic$fulcro_css$localized_dom$clipPath(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73000 = arguments.length;
var i__4737__auto___73001 = (0);
while(true){
if((i__4737__auto___73001 < len__4736__auto___73000)){
args__4742__auto__.push((arguments[i__4737__auto___73001]));

var G__73002 = (i__4737__auto___73001 + (1));
i__4737__auto___73001 = G__73002;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71726 = conformed_args__66791__auto__;
var map__71726__$1 = (((((!((map__71726 == null))))?(((((map__71726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71726):map__71726);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71726__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71726__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71726__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.clipPath.cljs$lang$applyTo = (function (seq71723){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71723));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.abbr = (function com$fulcrologic$fulcro_css$localized_dom$abbr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73007 = arguments.length;
var i__4737__auto___73008 = (0);
while(true){
if((i__4737__auto___73008 < len__4736__auto___73007)){
args__4742__auto__.push((arguments[i__4737__auto___73008]));

var G__73009 = (i__4737__auto___73008 + (1));
i__4737__auto___73008 = G__73009;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71730 = conformed_args__66791__auto__;
var map__71730__$1 = (((((!((map__71730 == null))))?(((((map__71730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71730):map__71730);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71730__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71730__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71730__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.abbr.cljs$lang$applyTo = (function (seq71729){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71729));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.altGlyphDef = (function com$fulcrologic$fulcro_css$localized_dom$altGlyphDef(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73014 = arguments.length;
var i__4737__auto___73015 = (0);
while(true){
if((i__4737__auto___73015 < len__4736__auto___73014)){
args__4742__auto__.push((arguments[i__4737__auto___73015]));

var G__73017 = (i__4737__auto___73015 + (1));
i__4737__auto___73015 = G__73017;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71733 = conformed_args__66791__auto__;
var map__71733__$1 = (((((!((map__71733 == null))))?(((((map__71733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71733):map__71733);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71733__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71733__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71733__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.altGlyphDef.cljs$lang$applyTo = (function (seq71732){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71732));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.meshrow = (function com$fulcrologic$fulcro_css$localized_dom$meshrow(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73022 = arguments.length;
var i__4737__auto___73023 = (0);
while(true){
if((i__4737__auto___73023 < len__4736__auto___73022)){
args__4742__auto__.push((arguments[i__4737__auto___73023]));

var G__73024 = (i__4737__auto___73023 + (1));
i__4737__auto___73023 = G__73024;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71748 = conformed_args__66791__auto__;
var map__71748__$1 = (((((!((map__71748 == null))))?(((((map__71748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71748):map__71748);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71748__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71748__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71748__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.meshrow.cljs$lang$applyTo = (function (seq71735){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71735));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.cursor = (function com$fulcrologic$fulcro_css$localized_dom$cursor(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73030 = arguments.length;
var i__4737__auto___73031 = (0);
while(true){
if((i__4737__auto___73031 < len__4736__auto___73030)){
args__4742__auto__.push((arguments[i__4737__auto___73031]));

var G__73032 = (i__4737__auto___73031 + (1));
i__4737__auto___73031 = G__73032;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71751 = conformed_args__66791__auto__;
var map__71751__$1 = (((((!((map__71751 == null))))?(((((map__71751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71751):map__71751);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71751__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71751__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71751__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.cursor.cljs$lang$applyTo = (function (seq71750){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71750));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.animate = (function com$fulcrologic$fulcro_css$localized_dom$animate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73035 = arguments.length;
var i__4737__auto___73036 = (0);
while(true){
if((i__4737__auto___73036 < len__4736__auto___73035)){
args__4742__auto__.push((arguments[i__4737__auto___73036]));

var G__73037 = (i__4737__auto___73036 + (1));
i__4737__auto___73036 = G__73037;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71757 = conformed_args__66791__auto__;
var map__71757__$1 = (((((!((map__71757 == null))))?(((((map__71757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71757):map__71757);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71757__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71757__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71757__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.animate.cljs$lang$applyTo = (function (seq71754){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71754));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.source = (function com$fulcrologic$fulcro_css$localized_dom$source(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73046 = arguments.length;
var i__4737__auto___73047 = (0);
while(true){
if((i__4737__auto___73047 < len__4736__auto___73046)){
args__4742__auto__.push((arguments[i__4737__auto___73047]));

var G__73048 = (i__4737__auto___73047 + (1));
i__4737__auto___73047 = G__73048;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71760 = conformed_args__66791__auto__;
var map__71760__$1 = (((((!((map__71760 == null))))?(((((map__71760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71760):map__71760);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71760__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71760__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71760__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.source.cljs$lang$applyTo = (function (seq71759){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71759));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.output = (function com$fulcrologic$fulcro_css$localized_dom$output(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73055 = arguments.length;
var i__4737__auto___73056 = (0);
while(true){
if((i__4737__auto___73056 < len__4736__auto___73055)){
args__4742__auto__.push((arguments[i__4737__auto___73056]));

var G__73057 = (i__4737__auto___73056 + (1));
i__4737__auto___73056 = G__73057;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71763 = conformed_args__66791__auto__;
var map__71763__$1 = (((((!((map__71763 == null))))?(((((map__71763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71763):map__71763);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71763__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71763__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71763__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.output.cljs$lang$applyTo = (function (seq71762){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71762));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.font_face = (function com$fulcrologic$fulcro_css$localized_dom$font_face(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73060 = arguments.length;
var i__4737__auto___73061 = (0);
while(true){
if((i__4737__auto___73061 < len__4736__auto___73060)){
args__4742__auto__.push((arguments[i__4737__auto___73061]));

var G__73062 = (i__4737__auto___73061 + (1));
i__4737__auto___73061 = G__73062;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71767 = conformed_args__66791__auto__;
var map__71767__$1 = (((((!((map__71767 == null))))?(((((map__71767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71767):map__71767);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71767__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71767__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71767__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.font_face.cljs$lang$applyTo = (function (seq71766){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71766));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feMergeNode = (function com$fulcrologic$fulcro_css$localized_dom$feMergeNode(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73067 = arguments.length;
var i__4737__auto___73068 = (0);
while(true){
if((i__4737__auto___73068 < len__4736__auto___73067)){
args__4742__auto__.push((arguments[i__4737__auto___73068]));

var G__73071 = (i__4737__auto___73068 + (1));
i__4737__auto___73068 = G__73071;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71774 = conformed_args__66791__auto__;
var map__71774__$1 = (((((!((map__71774 == null))))?(((((map__71774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71774):map__71774);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71774__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71774__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71774__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feMergeNode.cljs$lang$applyTo = (function (seq71771){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71771));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feSpotLight = (function com$fulcrologic$fulcro_css$localized_dom$feSpotLight(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73075 = arguments.length;
var i__4737__auto___73077 = (0);
while(true){
if((i__4737__auto___73077 < len__4736__auto___73075)){
args__4742__auto__.push((arguments[i__4737__auto___73077]));

var G__73078 = (i__4737__auto___73077 + (1));
i__4737__auto___73077 = G__73078;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71781 = conformed_args__66791__auto__;
var map__71781__$1 = (((((!((map__71781 == null))))?(((((map__71781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71781):map__71781);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71781__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71781__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71781__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feSpotLight.cljs$lang$applyTo = (function (seq71776){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71776));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.header = (function com$fulcrologic$fulcro_css$localized_dom$header(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73079 = arguments.length;
var i__4737__auto___73080 = (0);
while(true){
if((i__4737__auto___73080 < len__4736__auto___73079)){
args__4742__auto__.push((arguments[i__4737__auto___73080]));

var G__73081 = (i__4737__auto___73080 + (1));
i__4737__auto___73080 = G__73081;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71785 = conformed_args__66791__auto__;
var map__71785__$1 = (((((!((map__71785 == null))))?(((((map__71785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71785):map__71785);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71785__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71785__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71785__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.header.cljs$lang$applyTo = (function (seq71783){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71783));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.datalist = (function com$fulcrologic$fulcro_css$localized_dom$datalist(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73085 = arguments.length;
var i__4737__auto___73086 = (0);
while(true){
if((i__4737__auto___73086 < len__4736__auto___73085)){
args__4742__auto__.push((arguments[i__4737__auto___73086]));

var G__73087 = (i__4737__auto___73086 + (1));
i__4737__auto___73086 = G__73087;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71789 = conformed_args__66791__auto__;
var map__71789__$1 = (((((!((map__71789 == null))))?(((((map__71789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71789):map__71789);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71789__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71789__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71789__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.datalist.cljs$lang$applyTo = (function (seq71787){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71787));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.tfoot = (function com$fulcrologic$fulcro_css$localized_dom$tfoot(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73088 = arguments.length;
var i__4737__auto___73089 = (0);
while(true){
if((i__4737__auto___73089 < len__4736__auto___73088)){
args__4742__auto__.push((arguments[i__4737__auto___73089]));

var G__73090 = (i__4737__auto___73089 + (1));
i__4737__auto___73089 = G__73090;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71792 = conformed_args__66791__auto__;
var map__71792__$1 = (((((!((map__71792 == null))))?(((((map__71792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71792):map__71792);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71792__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71792__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71792__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.tfoot.cljs$lang$applyTo = (function (seq71791){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71791));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.s = (function com$fulcrologic$fulcro_css$localized_dom$s(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73094 = arguments.length;
var i__4737__auto___73095 = (0);
while(true){
if((i__4737__auto___73095 < len__4736__auto___73094)){
args__4742__auto__.push((arguments[i__4737__auto___73095]));

var G__73097 = (i__4737__auto___73095 + (1));
i__4737__auto___73095 = G__73097;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71795 = conformed_args__66791__auto__;
var map__71795__$1 = (((((!((map__71795 == null))))?(((((map__71795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71795):map__71795);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71795__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71795__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71795__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.s.cljs$lang$applyTo = (function (seq71794){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71794));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.hatch = (function com$fulcrologic$fulcro_css$localized_dom$hatch(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73099 = arguments.length;
var i__4737__auto___73100 = (0);
while(true){
if((i__4737__auto___73100 < len__4736__auto___73099)){
args__4742__auto__.push((arguments[i__4737__auto___73100]));

var G__73101 = (i__4737__auto___73100 + (1));
i__4737__auto___73100 = G__73101;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71803 = conformed_args__66791__auto__;
var map__71803__$1 = (((((!((map__71803 == null))))?(((((map__71803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71803):map__71803);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71803__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71803__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71803__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.hatch.cljs$lang$applyTo = (function (seq71801){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71801));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.ins = (function com$fulcrologic$fulcro_css$localized_dom$ins(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73109 = arguments.length;
var i__4737__auto___73110 = (0);
while(true){
if((i__4737__auto___73110 < len__4736__auto___73109)){
args__4742__auto__.push((arguments[i__4737__auto___73110]));

var G__73112 = (i__4737__auto___73110 + (1));
i__4737__auto___73110 = G__73112;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71809 = conformed_args__66791__auto__;
var map__71809__$1 = (((((!((map__71809 == null))))?(((((map__71809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71809):map__71809);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71809__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71809__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71809__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.ins.cljs$lang$applyTo = (function (seq71808){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71808));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.footer = (function com$fulcrologic$fulcro_css$localized_dom$footer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73115 = arguments.length;
var i__4737__auto___73116 = (0);
while(true){
if((i__4737__auto___73116 < len__4736__auto___73115)){
args__4742__auto__.push((arguments[i__4737__auto___73116]));

var G__73117 = (i__4737__auto___73116 + (1));
i__4737__auto___73116 = G__73117;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71816 = conformed_args__66791__auto__;
var map__71816__$1 = (((((!((map__71816 == null))))?(((((map__71816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71816):map__71816);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71816__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71816__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71816__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.footer.cljs$lang$applyTo = (function (seq71812){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71812));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.mpath = (function com$fulcrologic$fulcro_css$localized_dom$mpath(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73124 = arguments.length;
var i__4737__auto___73125 = (0);
while(true){
if((i__4737__auto___73125 < len__4736__auto___73124)){
args__4742__auto__.push((arguments[i__4737__auto___73125]));

var G__73126 = (i__4737__auto___73125 + (1));
i__4737__auto___73125 = G__73126;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71825 = conformed_args__66791__auto__;
var map__71825__$1 = (((((!((map__71825 == null))))?(((((map__71825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71825):map__71825);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71825__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71825__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71825__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.mpath.cljs$lang$applyTo = (function (seq71824){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71824));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.title = (function com$fulcrologic$fulcro_css$localized_dom$title(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73129 = arguments.length;
var i__4737__auto___73130 = (0);
while(true){
if((i__4737__auto___73130 < len__4736__auto___73129)){
args__4742__auto__.push((arguments[i__4737__auto___73130]));

var G__73131 = (i__4737__auto___73130 + (1));
i__4737__auto___73130 = G__73131;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71834 = conformed_args__66791__auto__;
var map__71834__$1 = (((((!((map__71834 == null))))?(((((map__71834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71834):map__71834);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71834__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71834__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71834__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.title.cljs$lang$applyTo = (function (seq71828){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71828));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.h5 = (function com$fulcrologic$fulcro_css$localized_dom$h5(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73139 = arguments.length;
var i__4737__auto___73140 = (0);
while(true){
if((i__4737__auto___73140 < len__4736__auto___73139)){
args__4742__auto__.push((arguments[i__4737__auto___73140]));

var G__73141 = (i__4737__auto___73140 + (1));
i__4737__auto___73140 = G__73141;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71855 = conformed_args__66791__auto__;
var map__71855__$1 = (((((!((map__71855 == null))))?(((((map__71855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71855):map__71855);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71855__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71855__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71855__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.h5.cljs$lang$applyTo = (function (seq71850){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71850));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.meshgradient = (function com$fulcrologic$fulcro_css$localized_dom$meshgradient(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73148 = arguments.length;
var i__4737__auto___73149 = (0);
while(true){
if((i__4737__auto___73149 < len__4736__auto___73148)){
args__4742__auto__.push((arguments[i__4737__auto___73149]));

var G__73150 = (i__4737__auto___73149 + (1));
i__4737__auto___73149 = G__73150;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71858 = conformed_args__66791__auto__;
var map__71858__$1 = (((((!((map__71858 == null))))?(((((map__71858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71858):map__71858);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71858__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71858__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.meshgradient.cljs$lang$applyTo = (function (seq71857){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71857));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.canvas = (function com$fulcrologic$fulcro_css$localized_dom$canvas(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73153 = arguments.length;
var i__4737__auto___73154 = (0);
while(true){
if((i__4737__auto___73154 < len__4736__auto___73153)){
args__4742__auto__.push((arguments[i__4737__auto___73154]));

var G__73155 = (i__4737__auto___73154 + (1));
i__4737__auto___73154 = G__73155;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71874 = conformed_args__66791__auto__;
var map__71874__$1 = (((((!((map__71874 == null))))?(((((map__71874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71874):map__71874);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71874__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71874__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71874__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.canvas.cljs$lang$applyTo = (function (seq71862){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71862));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.param = (function com$fulcrologic$fulcro_css$localized_dom$param(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73163 = arguments.length;
var i__4737__auto___73164 = (0);
while(true){
if((i__4737__auto___73164 < len__4736__auto___73163)){
args__4742__auto__.push((arguments[i__4737__auto___73164]));

var G__73165 = (i__4737__auto___73164 + (1));
i__4737__auto___73164 = G__73165;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71895 = conformed_args__66791__auto__;
var map__71895__$1 = (((((!((map__71895 == null))))?(((((map__71895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71895):map__71895);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71895__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71895__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71895__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.param.cljs$lang$applyTo = (function (seq71887){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71887));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.font = (function com$fulcrologic$fulcro_css$localized_dom$font(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73168 = arguments.length;
var i__4737__auto___73169 = (0);
while(true){
if((i__4737__auto___73169 < len__4736__auto___73168)){
args__4742__auto__.push((arguments[i__4737__auto___73169]));

var G__73171 = (i__4737__auto___73169 + (1));
i__4737__auto___73169 = G__73171;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71905 = conformed_args__66791__auto__;
var map__71905__$1 = (((((!((map__71905 == null))))?(((((map__71905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71905):map__71905);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71905__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71905__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71905__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.font.cljs$lang$applyTo = (function (seq71902){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71902));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.div = (function com$fulcrologic$fulcro_css$localized_dom$div(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73173 = arguments.length;
var i__4737__auto___73174 = (0);
while(true){
if((i__4737__auto___73174 < len__4736__auto___73173)){
args__4742__auto__.push((arguments[i__4737__auto___73174]));

var G__73179 = (i__4737__auto___73174 + (1));
i__4737__auto___73174 = G__73179;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71908 = conformed_args__66791__auto__;
var map__71908__$1 = (((((!((map__71908 == null))))?(((((map__71908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71908):map__71908);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71908__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71908__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71908__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.div.cljs$lang$applyTo = (function (seq71907){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71907));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.option = (function com$fulcrologic$fulcro_css$localized_dom$option(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73183 = arguments.length;
var i__4737__auto___73184 = (0);
while(true){
if((i__4737__auto___73184 < len__4736__auto___73183)){
args__4742__auto__.push((arguments[i__4737__auto___73184]));

var G__73185 = (i__4737__auto___73184 + (1));
i__4737__auto___73184 = G__73185;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71911 = conformed_args__66791__auto__;
var map__71911__$1 = (((((!((map__71911 == null))))?(((((map__71911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71911):map__71911);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71911__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71911__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71911__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.option.cljs$lang$applyTo = (function (seq71910){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71910));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feFlood = (function com$fulcrologic$fulcro_css$localized_dom$feFlood(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73189 = arguments.length;
var i__4737__auto___73190 = (0);
while(true){
if((i__4737__auto___73190 < len__4736__auto___73189)){
args__4742__auto__.push((arguments[i__4737__auto___73190]));

var G__73191 = (i__4737__auto___73190 + (1));
i__4737__auto___73190 = G__73191;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71914 = conformed_args__66791__auto__;
var map__71914__$1 = (((((!((map__71914 == null))))?(((((map__71914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71914):map__71914);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71914__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71914__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71914__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feFlood.cljs$lang$applyTo = (function (seq71913){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71913));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.summary = (function com$fulcrologic$fulcro_css$localized_dom$summary(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73196 = arguments.length;
var i__4737__auto___73200 = (0);
while(true){
if((i__4737__auto___73200 < len__4736__auto___73196)){
args__4742__auto__.push((arguments[i__4737__auto___73200]));

var G__73201 = (i__4737__auto___73200 + (1));
i__4737__auto___73200 = G__73201;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71917 = conformed_args__66791__auto__;
var map__71917__$1 = (((((!((map__71917 == null))))?(((((map__71917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71917):map__71917);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71917__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71917__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71917__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.summary.cljs$lang$applyTo = (function (seq71916){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71916));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feMorphology = (function com$fulcrologic$fulcro_css$localized_dom$feMorphology(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73206 = arguments.length;
var i__4737__auto___73207 = (0);
while(true){
if((i__4737__auto___73207 < len__4736__auto___73206)){
args__4742__auto__.push((arguments[i__4737__auto___73207]));

var G__73208 = (i__4737__auto___73207 + (1));
i__4737__auto___73207 = G__73208;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71920 = conformed_args__66791__auto__;
var map__71920__$1 = (((((!((map__71920 == null))))?(((((map__71920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71920):map__71920);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71920__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71920__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71920__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feMorphology.cljs$lang$applyTo = (function (seq71919){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71919));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.samp = (function com$fulcrologic$fulcro_css$localized_dom$samp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73210 = arguments.length;
var i__4737__auto___73211 = (0);
while(true){
if((i__4737__auto___73211 < len__4736__auto___73210)){
args__4742__auto__.push((arguments[i__4737__auto___73211]));

var G__73212 = (i__4737__auto___73211 + (1));
i__4737__auto___73211 = G__73212;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71923 = conformed_args__66791__auto__;
var map__71923__$1 = (((((!((map__71923 == null))))?(((((map__71923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71923):map__71923);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71923__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71923__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71923__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.samp.cljs$lang$applyTo = (function (seq71922){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71922));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.glyphRef = (function com$fulcrologic$fulcro_css$localized_dom$glyphRef(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73219 = arguments.length;
var i__4737__auto___73220 = (0);
while(true){
if((i__4737__auto___73220 < len__4736__auto___73219)){
args__4742__auto__.push((arguments[i__4737__auto___73220]));

var G__73221 = (i__4737__auto___73220 + (1));
i__4737__auto___73220 = G__73221;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71927 = conformed_args__66791__auto__;
var map__71927__$1 = (((((!((map__71927 == null))))?(((((map__71927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71927):map__71927);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71927__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71927__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71927__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.glyphRef.cljs$lang$applyTo = (function (seq71926){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71926));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.small = (function com$fulcrologic$fulcro_css$localized_dom$small(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73222 = arguments.length;
var i__4737__auto___73223 = (0);
while(true){
if((i__4737__auto___73223 < len__4736__auto___73222)){
args__4742__auto__.push((arguments[i__4737__auto___73223]));

var G__73224 = (i__4737__auto___73223 + (1));
i__4737__auto___73223 = G__73224;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71930 = conformed_args__66791__auto__;
var map__71930__$1 = (((((!((map__71930 == null))))?(((((map__71930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71930):map__71930);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71930__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71930__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71930__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.small.cljs$lang$applyTo = (function (seq71929){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71929));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.style = (function com$fulcrologic$fulcro_css$localized_dom$style(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73225 = arguments.length;
var i__4737__auto___73226 = (0);
while(true){
if((i__4737__auto___73226 < len__4736__auto___73225)){
args__4742__auto__.push((arguments[i__4737__auto___73226]));

var G__73227 = (i__4737__auto___73226 + (1));
i__4737__auto___73226 = G__73227;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71935 = conformed_args__66791__auto__;
var map__71935__$1 = (((((!((map__71935 == null))))?(((((map__71935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71935):map__71935);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71935__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71935__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71935__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.style.cljs$lang$applyTo = (function (seq71934){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71934));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.textarea = (function com$fulcrologic$fulcro_css$localized_dom$textarea(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73228 = arguments.length;
var i__4737__auto___73229 = (0);
while(true){
if((i__4737__auto___73229 < len__4736__auto___73228)){
args__4742__auto__.push((arguments[i__4737__auto___73229]));

var G__73230 = (i__4737__auto___73229 + (1));
i__4737__auto___73229 = G__73230;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71939 = conformed_args__66791__auto__;
var map__71939__$1 = (((((!((map__71939 == null))))?(((((map__71939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71939):map__71939);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71939__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71939__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71939__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.textarea.cljs$lang$applyTo = (function (seq71938){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71938));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feGaussianBlur = (function com$fulcrologic$fulcro_css$localized_dom$feGaussianBlur(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73231 = arguments.length;
var i__4737__auto___73232 = (0);
while(true){
if((i__4737__auto___73232 < len__4736__auto___73231)){
args__4742__auto__.push((arguments[i__4737__auto___73232]));

var G__73233 = (i__4737__auto___73232 + (1));
i__4737__auto___73232 = G__73233;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71942 = conformed_args__66791__auto__;
var map__71942__$1 = (((((!((map__71942 == null))))?(((((map__71942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71942):map__71942);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71942__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71942__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71942__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feGaussianBlur.cljs$lang$applyTo = (function (seq71941){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71941));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.h4 = (function com$fulcrologic$fulcro_css$localized_dom$h4(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73234 = arguments.length;
var i__4737__auto___73235 = (0);
while(true){
if((i__4737__auto___73235 < len__4736__auto___73234)){
args__4742__auto__.push((arguments[i__4737__auto___73235]));

var G__73236 = (i__4737__auto___73235 + (1));
i__4737__auto___73235 = G__73236;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71945 = conformed_args__66791__auto__;
var map__71945__$1 = (((((!((map__71945 == null))))?(((((map__71945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71945):map__71945);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71945__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71945__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71945__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.h4.cljs$lang$applyTo = (function (seq71944){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71944));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.head = (function com$fulcrologic$fulcro_css$localized_dom$head(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73238 = arguments.length;
var i__4737__auto___73239 = (0);
while(true){
if((i__4737__auto___73239 < len__4736__auto___73238)){
args__4742__auto__.push((arguments[i__4737__auto___73239]));

var G__73240 = (i__4737__auto___73239 + (1));
i__4737__auto___73239 = G__73240;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71949 = conformed_args__66791__auto__;
var map__71949__$1 = (((((!((map__71949 == null))))?(((((map__71949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71949):map__71949);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71949__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71949__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71949__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.head.cljs$lang$applyTo = (function (seq71948){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71948));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.g = (function com$fulcrologic$fulcro_css$localized_dom$g(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73261 = arguments.length;
var i__4737__auto___73262 = (0);
while(true){
if((i__4737__auto___73262 < len__4736__auto___73261)){
args__4742__auto__.push((arguments[i__4737__auto___73262]));

var G__73267 = (i__4737__auto___73262 + (1));
i__4737__auto___73262 = G__73267;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71952 = conformed_args__66791__auto__;
var map__71952__$1 = (((((!((map__71952 == null))))?(((((map__71952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71952):map__71952);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71952__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71952__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71952__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.g.cljs$lang$applyTo = (function (seq71951){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71951));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.missing_glyph = (function com$fulcrologic$fulcro_css$localized_dom$missing_glyph(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73288 = arguments.length;
var i__4737__auto___73289 = (0);
while(true){
if((i__4737__auto___73289 < len__4736__auto___73288)){
args__4742__auto__.push((arguments[i__4737__auto___73289]));

var G__73291 = (i__4737__auto___73289 + (1));
i__4737__auto___73289 = G__73291;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71955 = conformed_args__66791__auto__;
var map__71955__$1 = (((((!((map__71955 == null))))?(((((map__71955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71955):map__71955);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71955__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71955__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71955__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.missing_glyph.cljs$lang$applyTo = (function (seq71954){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71954));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.stop = (function com$fulcrologic$fulcro_css$localized_dom$stop(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73310 = arguments.length;
var i__4737__auto___73311 = (0);
while(true){
if((i__4737__auto___73311 < len__4736__auto___73310)){
args__4742__auto__.push((arguments[i__4737__auto___73311]));

var G__73314 = (i__4737__auto___73311 + (1));
i__4737__auto___73311 = G__73314;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71958 = conformed_args__66791__auto__;
var map__71958__$1 = (((((!((map__71958 == null))))?(((((map__71958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71958):map__71958);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71958__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71958__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71958__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.stop.cljs$lang$applyTo = (function (seq71957){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71957));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feDiffuseLighting = (function com$fulcrologic$fulcro_css$localized_dom$feDiffuseLighting(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73319 = arguments.length;
var i__4737__auto___73320 = (0);
while(true){
if((i__4737__auto___73320 < len__4736__auto___73319)){
args__4742__auto__.push((arguments[i__4737__auto___73320]));

var G__73321 = (i__4737__auto___73320 + (1));
i__4737__auto___73320 = G__73321;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71961 = conformed_args__66791__auto__;
var map__71961__$1 = (((((!((map__71961 == null))))?(((((map__71961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71961):map__71961);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71961__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71961__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71961__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq71960){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71960));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.filter = (function com$fulcrologic$fulcro_css$localized_dom$filter(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73325 = arguments.length;
var i__4737__auto___73326 = (0);
while(true){
if((i__4737__auto___73326 < len__4736__auto___73325)){
args__4742__auto__.push((arguments[i__4737__auto___73326]));

var G__73327 = (i__4737__auto___73326 + (1));
i__4737__auto___73326 = G__73327;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71965 = conformed_args__66791__auto__;
var map__71965__$1 = (((((!((map__71965 == null))))?(((((map__71965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71965):map__71965);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71965__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71965__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71965__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.filter.cljs$lang$applyTo = (function (seq71964){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71964));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feComposite = (function com$fulcrologic$fulcro_css$localized_dom$feComposite(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73331 = arguments.length;
var i__4737__auto___73332 = (0);
while(true){
if((i__4737__auto___73332 < len__4736__auto___73331)){
args__4742__auto__.push((arguments[i__4737__auto___73332]));

var G__73333 = (i__4737__auto___73332 + (1));
i__4737__auto___73332 = G__73333;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71969 = conformed_args__66791__auto__;
var map__71969__$1 = (((((!((map__71969 == null))))?(((((map__71969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71969):map__71969);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71969__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71969__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71969__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feComposite.cljs$lang$applyTo = (function (seq71968){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71968));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.mesh = (function com$fulcrologic$fulcro_css$localized_dom$mesh(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73347 = arguments.length;
var i__4737__auto___73348 = (0);
while(true){
if((i__4737__auto___73348 < len__4736__auto___73347)){
args__4742__auto__.push((arguments[i__4737__auto___73348]));

var G__73349 = (i__4737__auto___73348 + (1));
i__4737__auto___73348 = G__73349;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71975 = conformed_args__66791__auto__;
var map__71975__$1 = (((((!((map__71975 == null))))?(((((map__71975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71975):map__71975);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71975__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71975__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71975__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.mesh.cljs$lang$applyTo = (function (seq71974){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71974));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.var$ = (function com$fulcrologic$fulcro_css$localized_dom$var(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73352 = arguments.length;
var i__4737__auto___73353 = (0);
while(true){
if((i__4737__auto___73353 < len__4736__auto___73352)){
args__4742__auto__.push((arguments[i__4737__auto___73353]));

var G__73356 = (i__4737__auto___73353 + (1));
i__4737__auto___73353 = G__73356;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71978 = conformed_args__66791__auto__;
var map__71978__$1 = (((((!((map__71978 == null))))?(((((map__71978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71978):map__71978);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71978__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71978__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71978__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.var$.cljs$lang$applyTo = (function (seq71977){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71977));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.tspan = (function com$fulcrologic$fulcro_css$localized_dom$tspan(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73366 = arguments.length;
var i__4737__auto___73367 = (0);
while(true){
if((i__4737__auto___73367 < len__4736__auto___73366)){
args__4742__auto__.push((arguments[i__4737__auto___73367]));

var G__73368 = (i__4737__auto___73367 + (1));
i__4737__auto___73367 = G__73368;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71981 = conformed_args__66791__auto__;
var map__71981__$1 = (((((!((map__71981 == null))))?(((((map__71981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71981):map__71981);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71981__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71981__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71981__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.tspan.cljs$lang$applyTo = (function (seq71980){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71980));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.ol = (function com$fulcrologic$fulcro_css$localized_dom$ol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73372 = arguments.length;
var i__4737__auto___73373 = (0);
while(true){
if((i__4737__auto___73373 < len__4736__auto___73372)){
args__4742__auto__.push((arguments[i__4737__auto___73373]));

var G__73374 = (i__4737__auto___73373 + (1));
i__4737__auto___73373 = G__73374;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71984 = conformed_args__66791__auto__;
var map__71984__$1 = (((((!((map__71984 == null))))?(((((map__71984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71984):map__71984);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71984__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71984__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71984__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.ol.cljs$lang$applyTo = (function (seq71983){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71983));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.details = (function com$fulcrologic$fulcro_css$localized_dom$details(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73378 = arguments.length;
var i__4737__auto___73379 = (0);
while(true){
if((i__4737__auto___73379 < len__4736__auto___73378)){
args__4742__auto__.push((arguments[i__4737__auto___73379]));

var G__73380 = (i__4737__auto___73379 + (1));
i__4737__auto___73379 = G__73380;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71987 = conformed_args__66791__auto__;
var map__71987__$1 = (((((!((map__71987 == null))))?(((((map__71987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71987):map__71987);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71987__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71987__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71987__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.details.cljs$lang$applyTo = (function (seq71986){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71986));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.line = (function com$fulcrologic$fulcro_css$localized_dom$line(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73389 = arguments.length;
var i__4737__auto___73390 = (0);
while(true){
if((i__4737__auto___73390 < len__4736__auto___73389)){
args__4742__auto__.push((arguments[i__4737__auto___73390]));

var G__73391 = (i__4737__auto___73390 + (1));
i__4737__auto___73390 = G__73391;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71990 = conformed_args__66791__auto__;
var map__71990__$1 = (((((!((map__71990 == null))))?(((((map__71990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71990):map__71990);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71990__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71990__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71990__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.line.cljs$lang$applyTo = (function (seq71989){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71989));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.col = (function com$fulcrologic$fulcro_css$localized_dom$col(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73392 = arguments.length;
var i__4737__auto___73393 = (0);
while(true){
if((i__4737__auto___73393 < len__4736__auto___73392)){
args__4742__auto__.push((arguments[i__4737__auto___73393]));

var G__73395 = (i__4737__auto___73393 + (1));
i__4737__auto___73393 = G__73395;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71993 = conformed_args__66791__auto__;
var map__71993__$1 = (((((!((map__71993 == null))))?(((((map__71993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71993):map__71993);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71993__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71993__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71993__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.col.cljs$lang$applyTo = (function (seq71992){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71992));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.label = (function com$fulcrologic$fulcro_css$localized_dom$label(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73396 = arguments.length;
var i__4737__auto___73397 = (0);
while(true){
if((i__4737__auto___73397 < len__4736__auto___73396)){
args__4742__auto__.push((arguments[i__4737__auto___73397]));

var G__73398 = (i__4737__auto___73397 + (1));
i__4737__auto___73397 = G__73398;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71996 = conformed_args__66791__auto__;
var map__71996__$1 = (((((!((map__71996 == null))))?(((((map__71996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71996):map__71996);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71996__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71996__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71996__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.label.cljs$lang$applyTo = (function (seq71995){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71995));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.picture = (function com$fulcrologic$fulcro_css$localized_dom$picture(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73399 = arguments.length;
var i__4737__auto___73400 = (0);
while(true){
if((i__4737__auto___73400 < len__4736__auto___73399)){
args__4742__auto__.push((arguments[i__4737__auto___73400]));

var G__73401 = (i__4737__auto___73400 + (1));
i__4737__auto___73400 = G__73401;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__71999 = conformed_args__66791__auto__;
var map__71999__$1 = (((((!((map__71999 == null))))?(((((map__71999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71999):map__71999);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71999__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71999__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71999__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.picture.cljs$lang$applyTo = (function (seq71998){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71998));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.rt = (function com$fulcrologic$fulcro_css$localized_dom$rt(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73402 = arguments.length;
var i__4737__auto___73403 = (0);
while(true){
if((i__4737__auto___73403 < len__4736__auto___73402)){
args__4742__auto__.push((arguments[i__4737__auto___73403]));

var G__73404 = (i__4737__auto___73403 + (1));
i__4737__auto___73403 = G__73404;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72002 = conformed_args__66791__auto__;
var map__72002__$1 = (((((!((map__72002 == null))))?(((((map__72002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72002):map__72002);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72002__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72002__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72002__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.rt.cljs$lang$applyTo = (function (seq72001){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72001));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.h6 = (function com$fulcrologic$fulcro_css$localized_dom$h6(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73405 = arguments.length;
var i__4737__auto___73406 = (0);
while(true){
if((i__4737__auto___73406 < len__4736__auto___73405)){
args__4742__auto__.push((arguments[i__4737__auto___73406]));

var G__73407 = (i__4737__auto___73406 + (1));
i__4737__auto___73406 = G__73407;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72005 = conformed_args__66791__auto__;
var map__72005__$1 = (((((!((map__72005 == null))))?(((((map__72005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72005):map__72005);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72005__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72005__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72005__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.h6.cljs$lang$applyTo = (function (seq72004){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72004));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.vkern = (function com$fulcrologic$fulcro_css$localized_dom$vkern(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73408 = arguments.length;
var i__4737__auto___73409 = (0);
while(true){
if((i__4737__auto___73409 < len__4736__auto___73408)){
args__4742__auto__.push((arguments[i__4737__auto___73409]));

var G__73410 = (i__4737__auto___73409 + (1));
i__4737__auto___73409 = G__73410;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72008 = conformed_args__66791__auto__;
var map__72008__$1 = (((((!((map__72008 == null))))?(((((map__72008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72008):map__72008);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72008__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72008__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72008__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.vkern.cljs$lang$applyTo = (function (seq72007){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72007));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.link = (function com$fulcrologic$fulcro_css$localized_dom$link(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73415 = arguments.length;
var i__4737__auto___73416 = (0);
while(true){
if((i__4737__auto___73416 < len__4736__auto___73415)){
args__4742__auto__.push((arguments[i__4737__auto___73416]));

var G__73417 = (i__4737__auto___73416 + (1));
i__4737__auto___73416 = G__73417;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72011 = conformed_args__66791__auto__;
var map__72011__$1 = (((((!((map__72011 == null))))?(((((map__72011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72011):map__72011);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72011__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72011__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72011__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.link.cljs$lang$applyTo = (function (seq72010){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72010));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.defs = (function com$fulcrologic$fulcro_css$localized_dom$defs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73420 = arguments.length;
var i__4737__auto___73421 = (0);
while(true){
if((i__4737__auto___73421 < len__4736__auto___73420)){
args__4742__auto__.push((arguments[i__4737__auto___73421]));

var G__73422 = (i__4737__auto___73421 + (1));
i__4737__auto___73421 = G__73422;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72014 = conformed_args__66791__auto__;
var map__72014__$1 = (((((!((map__72014 == null))))?(((((map__72014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72014):map__72014);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72014__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72014__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72014__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.defs.cljs$lang$applyTo = (function (seq72013){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72013));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.glyph = (function com$fulcrologic$fulcro_css$localized_dom$glyph(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73426 = arguments.length;
var i__4737__auto___73427 = (0);
while(true){
if((i__4737__auto___73427 < len__4736__auto___73426)){
args__4742__auto__.push((arguments[i__4737__auto___73427]));

var G__73429 = (i__4737__auto___73427 + (1));
i__4737__auto___73427 = G__73429;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72017 = conformed_args__66791__auto__;
var map__72017__$1 = (((((!((map__72017 == null))))?(((((map__72017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72017):map__72017);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72017__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72017__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72017__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.glyph.cljs$lang$applyTo = (function (seq72016){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72016));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.colgroup = (function com$fulcrologic$fulcro_css$localized_dom$colgroup(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73435 = arguments.length;
var i__4737__auto___73436 = (0);
while(true){
if((i__4737__auto___73436 < len__4736__auto___73435)){
args__4742__auto__.push((arguments[i__4737__auto___73436]));

var G__73437 = (i__4737__auto___73436 + (1));
i__4737__auto___73436 = G__73437;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72020 = conformed_args__66791__auto__;
var map__72020__$1 = (((((!((map__72020 == null))))?(((((map__72020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72020):map__72020);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72020__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72020__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72020__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.colgroup.cljs$lang$applyTo = (function (seq72019){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72019));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.meter = (function com$fulcrologic$fulcro_css$localized_dom$meter(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73441 = arguments.length;
var i__4737__auto___73442 = (0);
while(true){
if((i__4737__auto___73442 < len__4736__auto___73441)){
args__4742__auto__.push((arguments[i__4737__auto___73442]));

var G__73446 = (i__4737__auto___73442 + (1));
i__4737__auto___73442 = G__73446;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72023 = conformed_args__66791__auto__;
var map__72023__$1 = (((((!((map__72023 == null))))?(((((map__72023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72023):map__72023);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72023__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72023__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72023__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.meter.cljs$lang$applyTo = (function (seq72022){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72022));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.bdo = (function com$fulcrologic$fulcro_css$localized_dom$bdo(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73451 = arguments.length;
var i__4737__auto___73452 = (0);
while(true){
if((i__4737__auto___73452 < len__4736__auto___73451)){
args__4742__auto__.push((arguments[i__4737__auto___73452]));

var G__73453 = (i__4737__auto___73452 + (1));
i__4737__auto___73452 = G__73453;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72026 = conformed_args__66791__auto__;
var map__72026__$1 = (((((!((map__72026 == null))))?(((((map__72026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72026):map__72026);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72026__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72026__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72026__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.bdo.cljs$lang$applyTo = (function (seq72025){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72025));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feImage = (function com$fulcrologic$fulcro_css$localized_dom$feImage(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73466 = arguments.length;
var i__4737__auto___73467 = (0);
while(true){
if((i__4737__auto___73467 < len__4736__auto___73466)){
args__4742__auto__.push((arguments[i__4737__auto___73467]));

var G__73473 = (i__4737__auto___73467 + (1));
i__4737__auto___73467 = G__73473;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72029 = conformed_args__66791__auto__;
var map__72029__$1 = (((((!((map__72029 == null))))?(((((map__72029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72029):map__72029);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72029__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72029__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72029__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feImage.cljs$lang$applyTo = (function (seq72028){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72028));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.b = (function com$fulcrologic$fulcro_css$localized_dom$b(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73499 = arguments.length;
var i__4737__auto___73500 = (0);
while(true){
if((i__4737__auto___73500 < len__4736__auto___73499)){
args__4742__auto__.push((arguments[i__4737__auto___73500]));

var G__73501 = (i__4737__auto___73500 + (1));
i__4737__auto___73500 = G__73501;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72032 = conformed_args__66791__auto__;
var map__72032__$1 = (((((!((map__72032 == null))))?(((((map__72032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72032):map__72032);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72032__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72032__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72032__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.b.cljs$lang$applyTo = (function (seq72031){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72031));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.svg = (function com$fulcrologic$fulcro_css$localized_dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73506 = arguments.length;
var i__4737__auto___73508 = (0);
while(true){
if((i__4737__auto___73508 < len__4736__auto___73506)){
args__4742__auto__.push((arguments[i__4737__auto___73508]));

var G__73509 = (i__4737__auto___73508 + (1));
i__4737__auto___73508 = G__73509;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72035 = conformed_args__66791__auto__;
var map__72035__$1 = (((((!((map__72035 == null))))?(((((map__72035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72035):map__72035);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72035__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72035__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72035__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.svg.cljs$lang$applyTo = (function (seq72034){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72034));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feTile = (function com$fulcrologic$fulcro_css$localized_dom$feTile(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73519 = arguments.length;
var i__4737__auto___73520 = (0);
while(true){
if((i__4737__auto___73520 < len__4736__auto___73519)){
args__4742__auto__.push((arguments[i__4737__auto___73520]));

var G__73521 = (i__4737__auto___73520 + (1));
i__4737__auto___73520 = G__73521;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72038 = conformed_args__66791__auto__;
var map__72038__$1 = (((((!((map__72038 == null))))?(((((map__72038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72038):map__72038);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72038__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72038__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72038__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feTile.cljs$lang$applyTo = (function (seq72037){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72037));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.ellipse = (function com$fulcrologic$fulcro_css$localized_dom$ellipse(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73523 = arguments.length;
var i__4737__auto___73524 = (0);
while(true){
if((i__4737__auto___73524 < len__4736__auto___73523)){
args__4742__auto__.push((arguments[i__4737__auto___73524]));

var G__73525 = (i__4737__auto___73524 + (1));
i__4737__auto___73524 = G__73525;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72041 = conformed_args__66791__auto__;
var map__72041__$1 = (((((!((map__72041 == null))))?(((((map__72041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72041):map__72041);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72041__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72041__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72041__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.ellipse.cljs$lang$applyTo = (function (seq72040){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72040));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.code = (function com$fulcrologic$fulcro_css$localized_dom$code(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73534 = arguments.length;
var i__4737__auto___73535 = (0);
while(true){
if((i__4737__auto___73535 < len__4736__auto___73534)){
args__4742__auto__.push((arguments[i__4737__auto___73535]));

var G__73537 = (i__4737__auto___73535 + (1));
i__4737__auto___73535 = G__73537;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72044 = conformed_args__66791__auto__;
var map__72044__$1 = (((((!((map__72044 == null))))?(((((map__72044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72044):map__72044);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72044__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72044__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72044__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.code.cljs$lang$applyTo = (function (seq72043){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72043));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.dialog = (function com$fulcrologic$fulcro_css$localized_dom$dialog(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73574 = arguments.length;
var i__4737__auto___73575 = (0);
while(true){
if((i__4737__auto___73575 < len__4736__auto___73574)){
args__4742__auto__.push((arguments[i__4737__auto___73575]));

var G__73581 = (i__4737__auto___73575 + (1));
i__4737__auto___73575 = G__73581;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72047 = conformed_args__66791__auto__;
var map__72047__$1 = (((((!((map__72047 == null))))?(((((map__72047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72047):map__72047);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72047__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72047__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72047__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.dialog.cljs$lang$applyTo = (function (seq72046){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72046));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.linearGradient = (function com$fulcrologic$fulcro_css$localized_dom$linearGradient(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73615 = arguments.length;
var i__4737__auto___73617 = (0);
while(true){
if((i__4737__auto___73617 < len__4736__auto___73615)){
args__4742__auto__.push((arguments[i__4737__auto___73617]));

var G__73618 = (i__4737__auto___73617 + (1));
i__4737__auto___73617 = G__73618;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72050 = conformed_args__66791__auto__;
var map__72050__$1 = (((((!((map__72050 == null))))?(((((map__72050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72050):map__72050);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72050__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72050__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72050__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.linearGradient.cljs$lang$applyTo = (function (seq72049){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72049));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.discard = (function com$fulcrologic$fulcro_css$localized_dom$discard(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73619 = arguments.length;
var i__4737__auto___73620 = (0);
while(true){
if((i__4737__auto___73620 < len__4736__auto___73619)){
args__4742__auto__.push((arguments[i__4737__auto___73620]));

var G__73621 = (i__4737__auto___73620 + (1));
i__4737__auto___73620 = G__73621;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72053 = conformed_args__66791__auto__;
var map__72053__$1 = (((((!((map__72053 == null))))?(((((map__72053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72053):map__72053);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72053__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72053__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72053__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.discard.cljs$lang$applyTo = (function (seq72052){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72052));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.font_face_src = (function com$fulcrologic$fulcro_css$localized_dom$font_face_src(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73630 = arguments.length;
var i__4737__auto___73631 = (0);
while(true){
if((i__4737__auto___73631 < len__4736__auto___73630)){
args__4742__auto__.push((arguments[i__4737__auto___73631]));

var G__73632 = (i__4737__auto___73631 + (1));
i__4737__auto___73631 = G__73632;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72056 = conformed_args__66791__auto__;
var map__72056__$1 = (((((!((map__72056 == null))))?(((((map__72056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72056):map__72056);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72056__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72056__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72056__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.font_face_src.cljs$lang$applyTo = (function (seq72055){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72055));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.noscript = (function com$fulcrologic$fulcro_css$localized_dom$noscript(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73636 = arguments.length;
var i__4737__auto___73637 = (0);
while(true){
if((i__4737__auto___73637 < len__4736__auto___73636)){
args__4742__auto__.push((arguments[i__4737__auto___73637]));

var G__73638 = (i__4737__auto___73637 + (1));
i__4737__auto___73637 = G__73638;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72059 = conformed_args__66791__auto__;
var map__72059__$1 = (((((!((map__72059 == null))))?(((((map__72059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72059):map__72059);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72059__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72059__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72059__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.noscript.cljs$lang$applyTo = (function (seq72058){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72058));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.animateTransform = (function com$fulcrologic$fulcro_css$localized_dom$animateTransform(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73644 = arguments.length;
var i__4737__auto___73645 = (0);
while(true){
if((i__4737__auto___73645 < len__4736__auto___73644)){
args__4742__auto__.push((arguments[i__4737__auto___73645]));

var G__73648 = (i__4737__auto___73645 + (1));
i__4737__auto___73645 = G__73648;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72062 = conformed_args__66791__auto__;
var map__72062__$1 = (((((!((map__72062 == null))))?(((((map__72062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72062):map__72062);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72062__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72062__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72062__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.animateTransform.cljs$lang$applyTo = (function (seq72061){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72061));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.feColorMatrix = (function com$fulcrologic$fulcro_css$localized_dom$feColorMatrix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73650 = arguments.length;
var i__4737__auto___73651 = (0);
while(true){
if((i__4737__auto___73651 < len__4736__auto___73650)){
args__4742__auto__.push((arguments[i__4737__auto___73651]));

var G__73652 = (i__4737__auto___73651 + (1));
i__4737__auto___73651 = G__73652;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72065 = conformed_args__66791__auto__;
var map__72065__$1 = (((((!((map__72065 == null))))?(((((map__72065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72065):map__72065);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72065__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72065__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72065__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feColorMatrix.cljs$lang$applyTo = (function (seq72064){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72064));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.h2 = (function com$fulcrologic$fulcro_css$localized_dom$h2(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73662 = arguments.length;
var i__4737__auto___73663 = (0);
while(true){
if((i__4737__auto___73663 < len__4736__auto___73662)){
args__4742__auto__.push((arguments[i__4737__auto___73663]));

var G__73664 = (i__4737__auto___73663 + (1));
i__4737__auto___73663 = G__73664;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72068 = conformed_args__66791__auto__;
var map__72068__$1 = (((((!((map__72068 == null))))?(((((map__72068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72068):map__72068);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72068__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72068__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72068__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.h2.cljs$lang$applyTo = (function (seq72067){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72067));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.area = (function com$fulcrologic$fulcro_css$localized_dom$area(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73674 = arguments.length;
var i__4737__auto___73675 = (0);
while(true){
if((i__4737__auto___73675 < len__4736__auto___73674)){
args__4742__auto__.push((arguments[i__4737__auto___73675]));

var G__73676 = (i__4737__auto___73675 + (1));
i__4737__auto___73675 = G__73676;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72071 = conformed_args__66791__auto__;
var map__72071__$1 = (((((!((map__72071 == null))))?(((((map__72071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72071):map__72071);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72071__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72071__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72071__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.area.cljs$lang$applyTo = (function (seq72070){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72070));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.br = (function com$fulcrologic$fulcro_css$localized_dom$br(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73681 = arguments.length;
var i__4737__auto___73682 = (0);
while(true){
if((i__4737__auto___73682 < len__4736__auto___73681)){
args__4742__auto__.push((arguments[i__4737__auto___73682]));

var G__73683 = (i__4737__auto___73682 + (1));
i__4737__auto___73682 = G__73683;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72074 = conformed_args__66791__auto__;
var map__72074__$1 = (((((!((map__72074 == null))))?(((((map__72074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72074):map__72074);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72074__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72074__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72074__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.br.cljs$lang$applyTo = (function (seq72073){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72073));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro_css.localized_dom.image = (function com$fulcrologic$fulcro_css$localized_dom$image(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73687 = arguments.length;
var i__4737__auto___73688 = (0);
while(true){
if((i__4737__auto___73688 < len__4736__auto___73687)){
args__4742__auto__.push((arguments[i__4737__auto___73688]));

var G__73689 = (i__4737__auto___73688 + (1));
i__4737__auto___73688 = G__73689;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__72077 = conformed_args__66791__auto__;
var map__72077__$1 = (((((!((map__72077 == null))))?(((((map__72077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72077):map__72077);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72077__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72077__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72077__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.image.cljs$lang$applyTo = (function (seq72076){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72076));
}));


//# sourceMappingURL=com.fulcrologic.fulcro_css.localized_dom.js.map
