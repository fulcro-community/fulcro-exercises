goog.provide('com.fulcrologic.fulcro_css.css_injection');
com.fulcrologic.fulcro_css.css_injection.error = (function com$fulcrologic$fulcro_css$css_injection$error(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70585 = arguments.length;
var i__4737__auto___70586 = (0);
while(true){
if((i__4737__auto___70586 < len__4736__auto___70585)){
args__4742__auto__.push((arguments[i__4737__auto___70586]));

var G__70587 = (i__4737__auto___70586 + (1));
i__4737__auto___70586 = G__70587;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.css_injection.error.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro_css.css_injection.error.cljs$core$IFn$_invoke$arity$variadic = (function (msg){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(console.log,msg);
}));

(com.fulcrologic.fulcro_css.css_injection.error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.css_injection.error.cljs$lang$applyTo = (function (seq70435){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70435));
}));

com.fulcrologic.fulcro_css.css_injection.component_css_includes_with_depth = (function com$fulcrologic$fulcro_css$css_injection$component_css_includes_with_depth(component,breadth,depth){
var includes = (com.fulcrologic.fulcro_css.css.get_includes.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro_css.css.get_includes.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro_css.css.get_includes.call(null,component));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__70444_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","depth","com.fulcrologic.fulcro-css.css-injection/depth",-1616141168),new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","breadth","com.fulcrologic.fulcro-css.css-injection/breadth",2102094438),new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","component","com.fulcrologic.fulcro-css.css-injection/component",-2105696298)],[(depth + (1)),breadth,p1__70444_SHARP_]);
})),includes),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__70445_SHARP_){
var G__70446 = p1__70445_SHARP_;
var G__70447 = breadth;
var G__70448 = (depth + (1));
return (com.fulcrologic.fulcro_css.css_injection.component_css_includes_with_depth.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro_css.css_injection.component_css_includes_with_depth.cljs$core$IFn$_invoke$arity$3(G__70446,G__70447,G__70448) : com.fulcrologic.fulcro_css.css_injection.component_css_includes_with_depth.call(null,G__70446,G__70447,G__70448));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([includes], 0)));
});
/**
 * Scan the given component and return an ordered vector of the css rules in depth-first order.
 *   `order` can be :depth-first (default) or :breadth-first
 */
com.fulcrologic.fulcro_css.css_injection.find_css_nodes = (function com$fulcrologic$fulcro_css$css_injection$find_css_nodes(p__70452){
var map__70455 = p__70452;
var map__70455__$1 = (((((!((map__70455 == null))))?(((((map__70455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70455):map__70455);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70455__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70455__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70455__$1,new cljs.core.Keyword(null,"state-map","state-map",-1313872128));
var query = ((cljs.core.map_QMARK_(state_map))?com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(component,state_map):com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(component));
var ast = edn_query_language.core.query__GT_ast(query);
var breadth = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var traverse = (function com$fulcrologic$fulcro_css$css_injection$find_css_nodes_$_traverse_STAR_(p__70458,depth){
var map__70459 = p__70458;
var map__70459__$1 = (((((!((map__70459 == null))))?(((((map__70459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70459):map__70459);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70459__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70459__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__70462 = cljs.core.PersistentVector.EMPTY;
var G__70462__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = component__$1;
if(cljs.core.truth_(and__4115__auto__)){
return (com.fulcrologic.fulcro_css.css.CSS_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro_css.css.CSS_QMARK_.cljs$core$IFn$_invoke$arity$1(component__$1) : com.fulcrologic.fulcro_css.css.CSS_QMARK_.call(null,component__$1));
} else {
return and__4115__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__70462,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","depth","com.fulcrologic.fulcro-css.css-injection/depth",-1616141168),depth,new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","breadth","com.fulcrologic.fulcro-css.css-injection/breadth",2102094438),cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(breadth,cljs.core.inc),new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","component","com.fulcrologic.fulcro-css.css-injection/component",-2105696298),component__$1], null)):G__70462);
if(cljs.core.truth_(component__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__70462__$1,com.fulcrologic.fulcro_css.css_injection.component_css_includes_with_depth(component__$1,cljs.core.deref(breadth),depth));
} else {
return G__70462__$1;
}
})(),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__70449_SHARP_){
return com$fulcrologic$fulcro_css$css_injection$find_css_nodes_$_traverse_STAR_(p1__70449_SHARP_,(depth + (1)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq(children)], 0)));
});
var nodes = traverse(ast,(0));
var ordered_nodes = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(order,new cljs.core.Keyword(null,"breadth-first","breadth-first",141527627)))?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","breadth","com.fulcrologic.fulcro-css.css-injection/breadth",2102094438),nodes):cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__70450_SHARP_){
return (- new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","depth","com.fulcrologic.fulcro-css.css-injection/depth",-1616141168).cljs$core$IFn$_invoke$arity$1(p1__70450_SHARP_));
}),nodes));
var unique_nodes = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","component","com.fulcrologic.fulcro-css.css-injection/component",-2105696298),ordered_nodes));
if(cljs.core.truth_(query)){
} else {
com.fulcrologic.fulcro_css.css_injection.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Auto-include was used for CSS, but the component had no query! No CSS Found."], 0));
}

return unique_nodes;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro-css.css-injection","find-css-nodes","com.fulcrologic.fulcro-css.css-injection/find-css-nodes",-1064274841,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),cljs.core.seq_QMARK_,null,null),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),null,null,null));
var get_rules_70600 = (function (components){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__70474_SHARP_,p2__70475_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__70474_SHARP_,com.fulcrologic.fulcro_css.css.get_css_rules(p2__70475_SHARP_));
}),cljs.core.PersistentVector.EMPTY,components);
});
/**
 * Compute the stringified CSS based on the given props. This can be used to generate a
 *  server-side version of CSS for the initial DOM, and is used the other injection functions to compute
 *  the CSS.
 * 
 *  Props are as described in `style-element`.
 *  
 */
com.fulcrologic.fulcro_css.css_injection.compute_css = (function com$fulcrologic$fulcro_css$css_injection$compute_css(props){
if(((cljs.core.map_QMARK_(props)) && (cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"component","component",1555936782))))){
} else {
throw (new Error(["Assert failed: ","Argument must be a map that contains the key :component","\n","(and (map? props) (contains? props :component))"].join('')));
}

var map__70483 = props;
var map__70483__$1 = (((((!((map__70483 == null))))?(((((map__70483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70483):map__70483);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70483__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var auto_include_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70483__$1,new cljs.core.Keyword(null,"auto-include?","auto-include?",-351901260));
var garden_flags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70483__$1,new cljs.core.Keyword(null,"garden-flags","garden-flags",1977044577),cljs.core.PersistentArrayMap.EMPTY);
var rules = ((auto_include_QMARK_ === false)?(function (){var G__70485 = component;
if((G__70485 == null)){
return null;
} else {
return com.fulcrologic.fulcro_css.css.get_css(G__70485);
}
})():(function (){var G__70488 = com.fulcrologic.fulcro_css.css_injection.find_css_nodes(props);
if((G__70488 == null)){
return null;
} else {
return get_rules_70600(G__70488);
}
})());
var css = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden_flags,rules], 0));
return css;
});

var options__55349__auto___70605 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
var css = com.fulcrologic.fulcro_css.css_injection.compute_css(com.fulcrologic.fulcro.components.props(this$));
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),css], null));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$fulcro_css$css_injection$render_StyleElement(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__70512 = com.fulcrologic.fulcro.components.props(this$);
var map__70512__$1 = (((((!((map__70512 == null))))?(((((map__70512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70512):map__70512);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70512__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70512__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"css","css",1135045163))], null)], null)], null),null);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro_css !== 'undefined') && (typeof com.fulcrologic.fulcro_css.css_injection !== 'undefined') && (typeof com.fulcrologic.fulcro_css.css_injection.StyleElement !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.fulcro_css.css_injection.StyleElement = (function com$fulcrologic$fulcro_css$css_injection$StyleElement(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___70618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___70605,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___70618)){
var init_state__55352__auto___70619 = temp__5751__auto___70618;
(this__55351__auto__.state = (function (){var obj70544 = ({"fulcro$state":(function (){var G__70545 = this__55351__auto__;
var G__70546 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___70619.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___70619.cljs$core$IFn$_invoke$arity$2(G__70545,G__70546) : init_state__55352__auto___70619.call(null,G__70545,G__70546));
})()});
return obj70544;
})());
} else {
(this__55351__auto__.state = (function (){var obj70552 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj70552;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.fulcro_css.css_injection.StyleElement,new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","StyleElement","com.fulcrologic.fulcro-css.css-injection/StyleElement",-907012031),options__55349__auto___70605);
var factory_70621 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro_css.css_injection.StyleElement);
/**
 * Renders a style element. Valid props are:
 * 
 *   - `:component`: (REQUIRED) The UI component to pull CSS from. Class or instance allowed.
 *   - `:order`: (optional)  `:depth-first` (default) or `:breadth-first` (legacy order)
 *   - `:react-key` : (optional) A React key. Changing the key will force it to update the CSS (which is otherwise caches for performance)
 *   - `:auto-include?`: (optional) When set to true (default) it will use the component query to recursively scan for
 *     CSS instead of explicit includes. When set to (exactly) `false` then it ONLY uses the user-declared inclusions on
 *     the component.
 *   - `:garden-flags`: (optional) A map with [garden compiler flags](https://github.com/noprompt/garden/wiki/Compiler#flags)
 * 
 *  The resulting React style element avoids re-rendering unless the props change, and the CSS is cached at component mount; therefore
 *  this element will avoid all overhead on refresh. In development you may wish to have the CSS change on hot code reload, in which case
 *  you can simply change the `:react-key` on the props to force a re-mount (which will recompute the CSS).
 *  
 */
com.fulcrologic.fulcro_css.css_injection.style_element = (function com$fulcrologic$fulcro_css$css_injection$style_element(props){
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(props);
var props__$1 = (function (){var G__70564 = props;
if(cljs.core.truth_((com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.components.component_QMARK_.call(null,component)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70564,new cljs.core.Keyword(null,"state-map","state-map",-1313872128),(function (){var G__70566 = component;
var G__70566__$1 = (((G__70566 == null))?null:com.fulcrologic.fulcro.components.any__GT_app(G__70566));
if((G__70566__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(G__70566__$1);
}
})()),new cljs.core.Keyword(null,"component","component",1555936782),com.fulcrologic.fulcro.components.react_type);
} else {
return G__70564;
}
})();
return (factory_70621.cljs$core$IFn$_invoke$arity$1 ? factory_70621.cljs$core$IFn$_invoke$arity$1(props__$1) : factory_70621.call(null,props__$1));
});
/**
 * Remove the given element from the DOM by ID
 */
com.fulcrologic.fulcro_css.css_injection.remove_from_dom = (function com$fulcrologic$fulcro_css$css_injection$remove_from_dom(id){
var temp__5751__auto__ = document.getElementById(id);
if(cljs.core.truth_(temp__5751__auto__)){
var old_element = temp__5751__auto__;
var parent = old_element.parentNode;
return parent.removeChild(old_element);
} else {
return null;
}
});
/**
 * (Re)place the STYLE element with the provided ID on the document's low-level DOM with the co-located CSS of
 *   the specified component.
 * 
 *   The `options` is the same as passed to `style-element`:
 * 
 *   - `:component`: (REQUIRED) The UI component to pull CSS from. Class or instance allowed.
 *   - `:order`: (optional)  `:depth-first` (default) or `:breadth-first` (legacy order)
 *   - `:react-key` : (optional) A React key. Changing the key will force it to update the CSS (which is otherwise caches for performance)
 *   - `:auto-include?`: (optional) When set to true (default) it will use the component query to recursively scan for
 *     CSS instead of explicit includes. When set to (exactly) `false` then it ONLY uses the user-declared inclusions on
 *     the component.
 *   - `:garden-flags`: (optional) A map with [garden compiler flags](https://github.com/noprompt/garden/wiki/Compiler#flags)
 * 
 *   ONLY WORKS FOR CLJS, since otherwise there is no DOM to change.
 */
com.fulcrologic.fulcro_css.css_injection.upsert_css = (function com$fulcrologic$fulcro_css$css_injection$upsert_css(id,options){
if(((cljs.core.map_QMARK_(options)) && (cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"component","component",1555936782))))){
} else {
throw (new Error(["Assert failed: ","Argument must be a map that contains the key :component","\n","(and (map? options) (contains? options :component))"].join('')));
}

com.fulcrologic.fulcro_css.css_injection.remove_from_dom(id);

var style_ele = document.createElement("style");
var css = com.fulcrologic.fulcro_css.css_injection.compute_css(options);
(style_ele.innerHTML = css);

style_ele.setAttribute("id",id);

return document.body.appendChild(style_ele);
});

//# sourceMappingURL=com.fulcrologic.fulcro_css.css_injection.js.map
