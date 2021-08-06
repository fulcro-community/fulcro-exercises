goog.provide('com.fulcrologic.fulcro_css.css');
/**
 * Replaces slashes and dots with underscore.
 */
com.fulcrologic.fulcro_css.css.cssify = com.fulcrologic.fulcro_css.css_implementation.cssify;
com.fulcrologic.fulcro_css.css.fq_component = com.fulcrologic.fulcro_css.css_implementation.fqname;
/**
 * Generates a string name of a localized CSS class. This function combines the fully-qualified name of the given class
 *   with the (optional) specified name.
 */
com.fulcrologic.fulcro_css.css.local_class = com.fulcrologic.fulcro_css.css_implementation.local_class;
com.fulcrologic.fulcro_css.css.set_classname = com.fulcrologic.fulcro_css.css_implementation.set_classname;
/**
 * `(CSS? class)` : Returns true if the given component has css.
 */
com.fulcrologic.fulcro_css.css.CSS_QMARK_ = com.fulcrologic.fulcro_css.css_implementation.CSS_QMARK_;
/**
 * `(get-local-rules class)` : Get the *raw* value from the local-rules of a component.
 */
com.fulcrologic.fulcro_css.css.get_local_rules = com.fulcrologic.fulcro_css.css_implementation.get_local_rules;
/**
 * `(get-global-rules class)` : Get the *raw* value from the global-rules of a component.
 */
com.fulcrologic.fulcro_css.css.get_global_rules = com.fulcrologic.fulcro_css.css_implementation.get_global_rules;
/**
 * `(get-inculdes class)` :Returns the list of components from the include-children method of a component
 */
com.fulcrologic.fulcro_css.css.get_includes = com.fulcrologic.fulcro_css.css_implementation.get_includes;
/**
 * `(get-nested-includes class)` : Recursively finds all includes starting at the given component.
 */
com.fulcrologic.fulcro_css.css.get_nested_includes = com.fulcrologic.fulcro_css.css_implementation.get_nested_includes;
/**
 * `(get-classnames class)` : Returns a map from user-given CSS rule names to localized names of the given component.
 */
com.fulcrologic.fulcro_css.css.get_classnames = com.fulcrologic.fulcro_css.css_implementation.get_classnames;
com.fulcrologic.fulcro_css.css.localize_selector = (function com$fulcrologic$fulcro_css$css$localize_selector(selector,comp){
var val = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(selector);
var split_cns_selectors = clojure.string.split.cljs$core$IFn$_invoke$arity$2(val,/ /);
return garden.selectors.selector(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68994_SHARP_){
if(com.fulcrologic.fulcro_css.css_implementation.prefixed_name_QMARK_(p1__68994_SHARP_)){
return com.fulcrologic.fulcro_css.css_implementation.localize_name(p1__68994_SHARP_,comp);
} else {
return p1__68994_SHARP_;
}
}),split_cns_selectors)));
});
/**
 * Converts prefixed keywords into localized keywords and localizes the values of garden selectors
 */
com.fulcrologic.fulcro_css.css.localize_css = (function com$fulcrologic$fulcro_css$css$localize_css(component){
return clojure.walk.postwalk((function (ele){
if(com.fulcrologic.fulcro_css.css_implementation.prefixed_keyword_QMARK_(ele)){
return com.fulcrologic.fulcro_css.css_implementation.localize_kw(ele,component);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro_css.css_implementation.selector_QMARK_(ele))){
return com.fulcrologic.fulcro_css.css.localize_selector(ele,component);
} else {
return ele;

}
}
}),(com.fulcrologic.fulcro_css.css.get_local_rules.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro_css.css.get_local_rules.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro_css.css.get_local_rules.call(null,component)));
});
/**
 * Gets the raw local and global rules from the given component.
 */
com.fulcrologic.fulcro_css.css.get_css_rules = (function com$fulcrologic$fulcro_css$css$get_css_rules(component){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro_css.css.localize_css(component),(com.fulcrologic.fulcro_css.css.get_global_rules.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro_css.css.get_global_rules.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro_css.css.get_global_rules.call(null,component)));
});
/**
 * Recursively gets all global and localized rules (in garden notation) starting at the given component.
 */
com.fulcrologic.fulcro_css.css.get_css = (function com$fulcrologic$fulcro_css$css$get_css(component){
var own_rules = com.fulcrologic.fulcro_css.css.get_css_rules(component);
var nested_children = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro_css.css.get_nested_includes.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro_css.css.get_nested_includes.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro_css.css.get_nested_includes.call(null,component)));
var nested_children_rules = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__68998_SHARP_,p2__68999_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__68998_SHARP_,com.fulcrologic.fulcro_css.css.get_css_rules(p2__68999_SHARP_));
}),cljs.core.PersistentVector.EMPTY,nested_children);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(own_rules,nested_children_rules);
});
/**
 * Returns a string that contains the raw CSS for the rules defined on the given component's sub-tree. This can be used for
 * server-side rendering of the style element, or in a `style` element as the :dangerouslySetInnerHTML/:html value:
 * 
 * (dom/style #js {:dangerouslySetInnerHTML #js {:__html (raw-css component)}})
 * 
 */
com.fulcrologic.fulcro_css.css.raw_css = (function com$fulcrologic$fulcro_css$css$raw_css(component){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro_css.css.get_css(component)], 0));
});

//# sourceMappingURL=com.fulcrologic.fulcro_css.css.js.map
