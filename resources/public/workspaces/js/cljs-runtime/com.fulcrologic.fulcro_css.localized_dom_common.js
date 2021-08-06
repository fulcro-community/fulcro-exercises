goog.provide('com.fulcrologic.fulcro_css.localized_dom_common');
var remove_separators = (function com$fulcrologic$fulcro_css$localized_dom_common$remove_separators(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(s,/^[.#$]/,"");
} else {
return null;
}
});
var get_tokens = (function com$fulcrologic$fulcro_css$localized_dom_common$get_tokens(k){
return cljs.core.re_seq(/[#.$]?[^#.$]+/,cljs.core.name(k));
});
/**
 * Parse CSS shorthand keyword and return map of id/classes.
 * 
 *  (parse :.klass3#some-id.klass1.klass2)
 *  => {:id        "some-id"
 *      :classes ["klass3" "klass1" "klass2"]}
 */
com.fulcrologic.fulcro_css.localized_dom_common.parse = (function com$fulcrologic$fulcro_css$localized_dom_common$parse(k){
if(cljs.core.truth_(k)){
var tokens = get_tokens(k);
var id = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__69005_SHARP_){
return cljs.core.re_matches(/^#.*/,p1__69005_SHARP_);
}),tokens));
var classes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__69006_SHARP_){
return cljs.core.re_matches(/^\..*/,p1__69006_SHARP_);
}),tokens);
var global_classes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__69007_SHARP_){
return cljs.core.re_matches(/^[$].*/,p1__69007_SHARP_);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (k__$1){
return clojure.string.replace(cljs.core.name(k__$1),"$","");
}))),tokens);
var sanitized_id = remove_separators(id);
if(cljs.core.truth_(cljs.core.re_matches(/^(\.[^.#$]+|#[^.#$]+|[$][^.#$]+)+$/,cljs.core.name(k)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid style keyword. It contains something other than classnames and IDs.",cljs.core.PersistentArrayMap.EMPTY);
}

var G__69011 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"global-classes","global-classes",1667535258),global_classes,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(remove_separators,classes))], null);
if(cljs.core.truth_(sanitized_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69011,new cljs.core.Keyword(null,"id","id",-1388402092),sanitized_id);
} else {
return G__69011;
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Takes a sequence of classname strings and a string with existing classes. Returns a string of these properly joined.
 * 
 *   classes-str can be nil or and empty string, and classes-seq can be nil or empty.
 */
com.fulcrologic.fulcro_css.localized_dom_common.combined_classes = (function com$fulcrologic$fulcro_css$localized_dom_common$combined_classes(classes_seq,classes_str){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",((cljs.core.seq(classes_str))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes_seq,classes_str):classes_seq));
});
var pget = (function com$fulcrologic$fulcro_css$localized_dom_common$pget(p,nm,dflt){
if(cljs.core.map_QMARK_(p)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(p,nm,dflt);
} else {
if(cljs.core.object_QMARK_(p)){
return goog.object.get(p,cljs.core.name(nm),dflt);
} else {
return null;
}
}
});
var passoc = (function com$fulcrologic$fulcro_css$localized_dom_common$passoc(p,nm,v){
if(cljs.core.map_QMARK_(p)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,nm,v);
} else {
if(cljs.core.object_QMARK_(p)){
goog.object.set(p,cljs.core.name(nm),v);

return p;
} else {
return null;
}
}
});
var pdissoc = (function com$fulcrologic$fulcro_css$localized_dom_common$pdissoc(p,nm){
if(cljs.core.map_QMARK_(p)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p,nm);
} else {
if(cljs.core.object_QMARK_(p)){
goog.object.remove(p,cljs.core.name(nm));

return p;
} else {
return null;
}
}
});
var strip_prefix = (function com$fulcrologic$fulcro_css$localized_dom_common$strip_prefix(s){
return clojure.string.replace(s,/^[:.#$]*/,"");
});
/**
 * Update the :className prop in the given props to include the classes in the :classes entry of props. Works on js objects and CLJ maps as props.
 *  If using js props, they must be mutable.
 */
com.fulcrologic.fulcro_css.localized_dom_common.fold_in_classes = (function com$fulcrologic$fulcro_css$localized_dom_common$fold_in_classes(props,component){
var temp__5751__auto__ = pget(props,new cljs.core.Keyword(null,"classes","classes",2037804510),null);
if(cljs.core.truth_(temp__5751__auto__)){
var extra_classes = temp__5751__auto__;
var old_classes = pget(props,new cljs.core.Keyword(null,"className","className",-1983287057),"");
return pdissoc((cljs.core.truth_(component)?(function (){var clz = com.fulcrologic.fulcro.components.react_type(component);
var new_classes = com.fulcrologic.fulcro_css.localized_dom_common.combined_classes(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
var c__$1 = (function (){var G__69022 = c;
if((G__69022 == null)){
return null;
} else {
return cljs.core.name(G__69022);
}
})();
if((c__$1 == null)){
return "";
} else {
if(clojure.string.starts_with_QMARK_(c__$1,".")){
var G__69025 = clz;
var G__69026 = strip_prefix(c__$1);
return (com.fulcrologic.fulcro_css.css.local_class.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro_css.css.local_class.cljs$core$IFn$_invoke$arity$2(G__69025,G__69026) : com.fulcrologic.fulcro_css.css.local_class.call(null,G__69025,G__69026));
} else {
if(clojure.string.starts_with_QMARK_(c__$1,"$")){
return strip_prefix(c__$1);
} else {
return c__$1;

}
}
}
}),extra_classes),old_classes);
return passoc(props,new cljs.core.Keyword(null,"className","className",-1983287057),new_classes);
})():(function (){var new_classes = com.fulcrologic.fulcro_css.localized_dom_common.combined_classes(cljs.core.map.cljs$core$IFn$_invoke$arity$2(strip_prefix,extra_classes),old_classes);
return passoc(props,new cljs.core.Keyword(null,"className","className",-1983287057),new_classes);
})()),new cljs.core.Keyword(null,"classes","classes",2037804510));
} else {
return props;
}
});
/**
 * Combine a hiccup-style keyword with props that are either a JS or CLJS map.
 */
com.fulcrologic.fulcro_css.localized_dom_common.add_kwprops_to_props = (function com$fulcrologic$fulcro_css$localized_dom_common$add_kwprops_to_props(props,kw){
var map__69030 = com.fulcrologic.fulcro_css.localized_dom_common.parse(kw);
var map__69030__$1 = (((((!((map__69030 == null))))?(((((map__69030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69030):map__69030);
var global_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69030__$1,new cljs.core.Keyword(null,"global-classes","global-classes",1667535258));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69030__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69030__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var classes__$1 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(com.fulcrologic.fulcro.components._STAR_parent_STAR_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69028_SHARP_){
var G__69032 = com.fulcrologic.fulcro.components.react_type(com.fulcrologic.fulcro.components._STAR_parent_STAR_);
var G__69033 = p1__69028_SHARP_;
return (com.fulcrologic.fulcro_css.css.local_class.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro_css.css.local_class.cljs$core$IFn$_invoke$arity$2(G__69032,G__69033) : com.fulcrologic.fulcro_css.css.local_class.call(null,G__69032,G__69033));
}),classes):classes),global_classes));
return com.fulcrologic.fulcro_css.localized_dom_common.fold_in_classes((((((props == null)) || (cljs.core.object_QMARK_(props))))?(function (){var props__$1 = goog.object.clone(props);
var existing_classes = goog.object.get(props__$1,"className");
if(cljs.core.seq(classes__$1)){
goog.object.set(props__$1,"className",com.fulcrologic.fulcro_css.localized_dom_common.combined_classes(classes__$1,existing_classes));
} else {
}

if(cljs.core.truth_(id)){
goog.object.set(props__$1,"id",id);
} else {
}

return props__$1;
})():(function (){var existing_classes = new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props);
var G__69036 = (function (){var or__4126__auto__ = props;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__69036__$1 = ((cljs.core.seq(classes__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69036,new cljs.core.Keyword(null,"className","className",-1983287057),com.fulcrologic.fulcro_css.localized_dom_common.combined_classes(classes__$1,existing_classes)):G__69036);
if(cljs.core.truth_(id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69036__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return G__69036__$1;
}
})()),com.fulcrologic.fulcro.components._STAR_parent_STAR_);
});

//# sourceMappingURL=com.fulcrologic.fulcro_css.localized_dom_common.js.map
