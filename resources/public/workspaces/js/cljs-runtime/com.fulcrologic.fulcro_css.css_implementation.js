goog.provide('com.fulcrologic.fulcro_css.css_implementation');
/**
 * Replaces slashes and dots with underscore.
 */
com.fulcrologic.fulcro_css.css_implementation.cssify = (function com$fulcrologic$fulcro_css$css_implementation$cssify(str){
if(cljs.core.truth_(str)){
return clojure.string.replace(str,/[.\/]/,"_");
} else {
return null;
}
});
com.fulcrologic.fulcro_css.css_implementation.fqname = (function com$fulcrologic$fulcro_css$css_implementation$fqname(comp_class){
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.class__GT_registry_key(comp_class)),/^:/,"");
});
/**
 * Generates a string name of a localized CSS class. This function combines the fully-qualified name of the given class
 *   with the (optional) specified name.
 */
com.fulcrologic.fulcro_css.css_implementation.local_class = (function com$fulcrologic$fulcro_css$css_implementation$local_class(var_args){
var G__66061 = arguments.length;
switch (G__66061) {
case 1:
return com.fulcrologic.fulcro_css.css_implementation.local_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro_css.css_implementation.local_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro_css.css_implementation.local_class.cljs$core$IFn$_invoke$arity$1 = (function (comp_class){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro_css.css_implementation.cssify(com.fulcrologic.fulcro_css.css_implementation.fqname(comp_class)));
}));

(com.fulcrologic.fulcro_css.css_implementation.local_class.cljs$core$IFn$_invoke$arity$2 = (function (comp_class,nm){
return [com.fulcrologic.fulcro_css.css_implementation.cssify(com.fulcrologic.fulcro_css.css_implementation.fqname(comp_class)),"__",cljs.core.name(nm)].join('');
}));

(com.fulcrologic.fulcro_css.css_implementation.local_class.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro_css.css_implementation.set_classname = (function com$fulcrologic$fulcro_css$css_implementation$set_classname(m,subclasses){
return cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"className","className",-1983287057),subclasses),new cljs.core.Keyword(null,"class","class",-2030961996)));
});
/**
 * Returns true if the given component has css
 */
com.fulcrologic.fulcro_css.css_implementation.CSS_QMARK_ = (function com$fulcrologic$fulcro_css$css_implementation$CSS_QMARK_(x){
return cljs.core.boolean$((function (){var G__66072 = x;
var G__66072__$1 = (((G__66072 == null))?null:com.fulcrologic.fulcro.components.component_options(G__66072));
if((G__66072__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"css","css",1135045163).cljs$core$IFn$_invoke$arity$1(G__66072__$1);
}
})());
});
/**
 * Get the *raw* value from the local-rules of a component.
 */
com.fulcrologic.fulcro_css.css_implementation.get_local_rules = (function com$fulcrologic$fulcro_css$css_implementation$get_local_rules(component){
var temp__5751__auto__ = (function (){var G__66074 = component;
var G__66074__$1 = (((G__66074 == null))?null:com.fulcrologic.fulcro.components.component_options(G__66074));
if((G__66074__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"css","css",1135045163).cljs$core$IFn$_invoke$arity$1(G__66074__$1);
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var entry = temp__5751__auto__;
if(cljs.core.fn_QMARK_(entry)){
return (entry.cljs$core$IFn$_invoke$arity$0 ? entry.cljs$core$IFn$_invoke$arity$0() : entry.call(null));
} else {
if(cljs.core.vector_QMARK_(entry)){
return entry;
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid :css on ",com.fulcrologic.fulcro.components.component_name(component)], 0));

return entry;

}
}
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Get the *raw* value from the global-rules of a component.
 */
com.fulcrologic.fulcro_css.css_implementation.get_global_rules = (function com$fulcrologic$fulcro_css$css_implementation$get_global_rules(component){
var temp__5751__auto__ = (function (){var G__66078 = component;
var G__66078__$1 = (((G__66078 == null))?null:com.fulcrologic.fulcro.components.component_options(G__66078));
if((G__66078__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"css-global","css-global",-943240719).cljs$core$IFn$_invoke$arity$1(G__66078__$1);
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var entry = temp__5751__auto__;
if(cljs.core.fn_QMARK_(entry)){
return (entry.cljs$core$IFn$_invoke$arity$0 ? entry.cljs$core$IFn$_invoke$arity$0() : entry.call(null));
} else {
if(cljs.core.vector_QMARK_(entry)){
return entry;
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid :css-global on ",com.fulcrologic.fulcro.components.component_name(component)], 0));

return entry;

}
}
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Returns true if the given string starts with one of [. $ &$ &.]
 */
com.fulcrologic.fulcro_css.css_implementation.prefixed_name_QMARK_ = (function com$fulcrologic$fulcro_css$css_implementation$prefixed_name_QMARK_(nm){
return (!((cljs.core.re_matches(/(\.|\$|&\.|&\$).*/,nm) == null)));
});
/**
 * Returns the prefix of a string. [. $ &$ &.]
 */
com.fulcrologic.fulcro_css.css_implementation.get_prefix = (function com$fulcrologic$fulcro_css$css_implementation$get_prefix(nm){
var vec__66081 = cljs.core.re_matches(/(\.|\$|&\.|&\$).*/,nm);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66081,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66081,(1),null);
return prefix;
});
/**
 * Returns true if the given keyword starts with one of [. $ &$ &.]
 */
com.fulcrologic.fulcro_css.css_implementation.prefixed_keyword_QMARK_ = (function com$fulcrologic$fulcro_css$css_implementation$prefixed_keyword_QMARK_(kw){
return (((kw instanceof cljs.core.Keyword)) && (com.fulcrologic.fulcro_css.css_implementation.prefixed_name_QMARK_(cljs.core.name(kw))));
});
/**
 * Removes the prefix of a string.
 */
com.fulcrologic.fulcro_css.css_implementation.remove_prefix = (function com$fulcrologic$fulcro_css$css_implementation$remove_prefix(nm){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(nm,cljs.core.count(com.fulcrologic.fulcro_css.css_implementation.get_prefix(nm)));
});
/**
 * Removes the prefix of a keyword.
 */
com.fulcrologic.fulcro_css.css_implementation.remove_prefix_kw = (function com$fulcrologic$fulcro_css$css_implementation$remove_prefix_kw(kw){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro_css.css_implementation.remove_prefix(cljs.core.name(kw)));
});
/**
 * Returns the list of components from the include-children method of a component
 */
com.fulcrologic.fulcro_css.css_implementation.get_includes = (function com$fulcrologic$fulcro_css$css_implementation$get_includes(component){
var includes = (function (){var G__66099 = component;
var G__66099__$1 = (((G__66099 == null))?null:com.fulcrologic.fulcro.components.component_options(G__66099));
if((G__66099__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"css-include","css-include",559023012).cljs$core$IFn$_invoke$arity$1(G__66099__$1);
}
})();
if(cljs.core.fn_QMARK_(includes)){
return (includes.cljs$core$IFn$_invoke$arity$0 ? includes.cljs$core$IFn$_invoke$arity$0() : includes.call(null));
} else {
var or__4126__auto__ = includes;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
});
/**
 * Recursively finds all includes starting at the given component.
 */
com.fulcrologic.fulcro_css.css_implementation.get_nested_includes = (function com$fulcrologic$fulcro_css$css_implementation$get_nested_includes(component){
var direct_children = com.fulcrologic.fulcro_css.css_implementation.get_includes(component);
if(cljs.core.empty_QMARK_(direct_children)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(direct_children,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__66103_SHARP_,p2__66104_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__66103_SHARP_,(com.fulcrologic.fulcro_css.css_implementation.get_nested_includes.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro_css.css_implementation.get_nested_includes.cljs$core$IFn$_invoke$arity$1(p2__66104_SHARP_) : com.fulcrologic.fulcro_css.css_implementation.get_nested_includes.call(null,p2__66104_SHARP_)));
}),cljs.core.PersistentVector.EMPTY,direct_children));
}
});
com.fulcrologic.fulcro_css.css_implementation.localize_name = (function com$fulcrologic$fulcro_css$css_implementation$localize_name(nm,comp){
var no_prefix = com.fulcrologic.fulcro_css.css_implementation.remove_prefix(nm);
var prefix = com.fulcrologic.fulcro_css.css_implementation.get_prefix(nm);
var G__66122 = prefix;
switch (G__66122) {
case ".":
case "&.":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),com.fulcrologic.fulcro_css.css_implementation.local_class.cljs$core$IFn$_invoke$arity$2(comp,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no_prefix))].join('');

break;
case "$":
return [".",no_prefix].join('');

break;
case "&$":
return ["&.",no_prefix].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66122)].join('')));

}
});
com.fulcrologic.fulcro_css.css_implementation.localize_kw = (function com$fulcrologic$fulcro_css$css_implementation$localize_kw(kw,comp){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro_css.css_implementation.localize_name(cljs.core.name(kw),comp));
});
/**
 * Gives the localized classname for the given keyword.
 */
com.fulcrologic.fulcro_css.css_implementation.kw__GT_localized_classname = (function com$fulcrologic$fulcro_css$css_implementation$kw__GT_localized_classname(comp,kw){
var nm = cljs.core.name(kw);
var prefix = com.fulcrologic.fulcro_css.css_implementation.get_prefix(nm);
var no_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(nm,cljs.core.count(prefix));
var G__66124 = prefix;
switch (G__66124) {
case "$":
case "&$":
return no_prefix;

break;
case ".":
case "&.":
return com.fulcrologic.fulcro_css.css_implementation.local_class.cljs$core$IFn$_invoke$arity$2(comp,no_prefix);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66124)].join('')));

}
});
com.fulcrologic.fulcro_css.css_implementation.selector_QMARK_ = (function com$fulcrologic$fulcro_css$css_implementation$selector_QMARK_(x){
try{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(garden.selectors.CSSSelector,cljs.core.type(x));
}catch (e66128){var e = e66128;
return false;
}});
/**
 * Gets all the keywords that are present in a selector
 */
com.fulcrologic.fulcro_css.css_implementation.get_selector_keywords = (function com$fulcrologic$fulcro_css$css_implementation$get_selector_keywords(selector){
var val = garden.selectors.css_selector(selector);
var classnames = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66130_SHARP_){
return cljs.core.re_matches(/[.$].*/,p1__66130_SHARP_);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(val,/ /));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,classnames);
});
/**
 * Gets all used classnames in from the given rules as keywords
 */
com.fulcrologic.fulcro_css.css_implementation.get_class_keys = (function com$fulcrologic$fulcro_css$css_implementation$get_class_keys(rules){
var flattened_rules = cljs.core.flatten(rules);
var selectors = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro_css.css_implementation.selector_QMARK_,flattened_rules);
var prefixed_kws = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro_css.css_implementation.prefixed_keyword_QMARK_,flattened_rules);
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro_css.css_implementation.get_selector_keywords,selectors)),prefixed_kws));
});
/**
 * Returns a map from user-given CSS rule names to localized names of the given component.
 */
com.fulcrologic.fulcro_css.css_implementation.get_classnames = (function com$fulcrologic$fulcro_css$css_implementation$get_classnames(comp){
var local_class_keys = com.fulcrologic.fulcro_css.css_implementation.get_class_keys(com.fulcrologic.fulcro_css.css_implementation.get_local_rules(comp));
var global_class_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro_css.css_implementation.remove_prefix_kw,com.fulcrologic.fulcro_css.css_implementation.get_class_keys(com.fulcrologic.fulcro_css.css_implementation.get_global_rules(comp)));
var local_classnames = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro_css.css_implementation.remove_prefix_kw,local_class_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66132_SHARP_){
return com.fulcrologic.fulcro_css.css_implementation.kw__GT_localized_classname(comp,p1__66132_SHARP_);
}),local_class_keys));
var global_classnames = cljs.core.zipmap(global_class_keys,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,global_class_keys));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([local_classnames,global_classnames], 0));
});

//# sourceMappingURL=com.fulcrologic.fulcro_css.css_implementation.js.map
