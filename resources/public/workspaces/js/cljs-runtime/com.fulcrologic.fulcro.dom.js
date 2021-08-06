goog.provide('com.fulcrologic.fulcro.dom');





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return React.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__68095){
var vec__68096 = p__68095;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68096,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68096,(1),null);
var pair = vec__68096;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__68100){
var vec__68101 = p__68100;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68101,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68101,(1),null);
var pair = vec__68101;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__68109){
var vec__68110 = p__68109;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68110,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68110,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__68113 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68113,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__68113;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return ReactDOM.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__68122 = arguments.length;
switch (G__68122) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return ReactDOM.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__68124 = component.refs;
var G__68124__$1 = (((G__68124 == null))?null:goog.object.get(G__68124,name));
if((G__68124__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__68124__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5751__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5751__auto__)){
var ref = temp__5751__auto__;
var G__68125 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__68126 = (function (){var G__68127 = r;
if((G__68127 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__68127);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__68126) : ref.call(null,G__68126));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__68125) : factory.call(null,G__68125));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__68138 = arguments.length;
switch (G__68138) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___70285 = arguments.length;
var i__4737__auto___70287 = (0);
while(true){
if((i__4737__auto___70287 < len__4736__auto___70285)){
args_arr__4757__auto__.push((arguments[i__4737__auto___70287]));

var G__70288 = (i__4737__auto___70287 + (1));
i__4737__auto___70287 = G__70288;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return React.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq68133){
var G__68134 = cljs.core.first(seq68133);
var seq68133__$1 = cljs.core.next(seq68133);
var G__68135 = cljs.core.first(seq68133__$1);
var seq68133__$2 = cljs.core.next(seq68133__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68134,G__68135,seq68133__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return React.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = goog.object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = goog.object.get(next_props,"inputRef");
goog.object.extend(next_state,next_props,({"onChange": on_change}));

goog.object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
goog.object.remove(next_state,"inputRef");

goog.object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4115__auto__ = tag;
if(cljs.core.truth_(and__4115__auto__)){
var G__68167 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__68167) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__68167));
} else {
return and__4115__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
goog.object.extend(state,props,({"onChange": goog.bind(goog.object.get(this$,"onChange"),this$)}));

goog.object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return React.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,React.Component);

var x68182_70302 = ctor.prototype;
(x68182_70302.onChange = (function (event){
var this$ = this;
var temp__5753__auto__ = goog.object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5753__auto__)){
var handler = temp__5753__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x68182_70302.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","cached-props","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__68175_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__68175_SHARP_);
})));
var element_value = goog.object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4115__auto__ = state_value;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = element_value;
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,1538210451);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
}));

(x68182_70302.render = (function (){
var this$ = this;
return React.createElement(element,goog.object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__70311__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.createElement,ctor,args);
};
var G__70311 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70312__i = 0, G__70312__a = new Array(arguments.length -  0);
while (G__70312__i < G__70312__a.length) {G__70312__a[G__70312__i] = arguments[G__70312__i + 0]; ++G__70312__i;}
  args = new cljs.core.IndexedSeq(G__70312__a,0,null);
} 
return G__70311__delegate.call(this,args);};
G__70311.cljs$lang$maxFixedArity = 0;
G__70311.cljs$lang$applyTo = (function (arglist__70313){
var args = cljs.core.seq(arglist__70313);
return G__70311__delegate(args);
});
G__70311.cljs$core$IFn$_invoke$arity$variadic = G__70311__delegate;
return G__70311;
})()
;
return (function() { 
var G__70314__delegate = function (props,children){
var t = goog.object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"input",props,children);
} else {
var temp__5751__auto__ = goog.object.get(props,"ref");
if(cljs.core.truth_(temp__5751__auto__)){
var r = temp__5751__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
goog.object.extend(p,props);

goog.object.set(p,"inputRef",r);

goog.object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__70314 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__70316__i = 0, G__70316__a = new Array(arguments.length -  1);
while (G__70316__i < G__70316__a.length) {G__70316__a[G__70316__i] = arguments[G__70316__i + 1]; ++G__70316__i;}
  children = new cljs.core.IndexedSeq(G__70316__a,0,null);
} 
return G__70314__delegate.call(this,props,children);};
G__70314.cljs$lang$maxFixedArity = 1;
G__70314.cljs$lang$applyTo = (function (arglist__70317){
var props = cljs.core.first(arglist__70317);
var children = cljs.core.rest(arglist__70317);
return G__70314__delegate(props,children);
});
G__70314.cljs$core$IFn$_invoke$arity$variadic = G__70314__delegate;
return G__70314;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__68203 = tag;
switch (G__68203) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68203)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__68213 = arguments.length;
switch (G__68213) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__68216 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__68217 = cljs.core.seq(vec__68216);
var first__68218 = cljs.core.first(seq__68217);
var seq__68217__$1 = cljs.core.next(seq__68217);
var head = first__68218;
var tail = seq__68217__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__68221 = (function (){var G__68222 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__68222,tail);

return G__68222;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__68221) : f.call(null,G__68221));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__68223 = (function (){var G__68225 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__68225,args);

return G__68225;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__68223) : f.call(null,G__68223));
} else {
if(cljs.core.object_QMARK_(head)){
var G__68227 = (function (){var G__68229 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__68229,tail);

return G__68229;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__68227) : f.call(null,G__68227));
} else {
if(cljs.core.map_QMARK_(head)){
var G__68231 = (function (){var G__68236 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__68236,tail);

return G__68236;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__68231) : f.call(null,G__68231));
} else {
var G__68237 = (function (){var G__68239 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__68239,args);

return G__68239;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__68237) : f.call(null,G__68237));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__68244 = arguments.length;
switch (G__68244) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__68255 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__68256 = cljs.core.seq(vec__68255);
var first__68257 = cljs.core.first(seq__68256);
var seq__68256__$1 = cljs.core.next(seq__68256);
var head = first__68257;
var tail = seq__68256__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__68259 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__68259,tail);

return G__68259;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__68261 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__68261,args);

return G__68261;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__68262 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__68262,tail);

return G__68262;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__68263 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__68263,tail);

return G__68263;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__68265 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__68265,args);

return G__68265;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

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
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70344 = arguments.length;
var i__4737__auto___70345 = (0);
while(true){
if((i__4737__auto___70345 < len__4736__auto___70344)){
args__4742__auto__.push((arguments[i__4737__auto___70345]));

var G__70346 = (i__4737__auto___70345 + (1));
i__4737__auto___70345 = G__70346;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68291 = conformed_args__66791__auto__;
var map__68291__$1 = (((((!((map__68291 == null))))?(((((map__68291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68291):map__68291);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68291__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68291__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68291__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq68282){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68282));
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
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70349 = arguments.length;
var i__4737__auto___70351 = (0);
while(true){
if((i__4737__auto___70351 < len__4736__auto___70349)){
args__4742__auto__.push((arguments[i__4737__auto___70351]));

var G__70355 = (i__4737__auto___70351 + (1));
i__4737__auto___70351 = G__70355;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68309 = conformed_args__66791__auto__;
var map__68309__$1 = (((((!((map__68309 == null))))?(((((map__68309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68309):map__68309);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68309__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq68301){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68301));
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
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70362 = arguments.length;
var i__4737__auto___70363 = (0);
while(true){
if((i__4737__auto___70363 < len__4736__auto___70362)){
args__4742__auto__.push((arguments[i__4737__auto___70363]));

var G__70364 = (i__4737__auto___70363 + (1));
i__4737__auto___70363 = G__70364;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68327 = conformed_args__66791__auto__;
var map__68327__$1 = (((((!((map__68327 == null))))?(((((map__68327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68327):map__68327);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68327__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68327__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68327__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq68320){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68320));
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
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70373 = arguments.length;
var i__4737__auto___70375 = (0);
while(true){
if((i__4737__auto___70375 < len__4736__auto___70373)){
args__4742__auto__.push((arguments[i__4737__auto___70375]));

var G__70376 = (i__4737__auto___70375 + (1));
i__4737__auto___70375 = G__70376;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68339 = conformed_args__66791__auto__;
var map__68339__$1 = (((((!((map__68339 == null))))?(((((map__68339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68339):map__68339);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68339__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68339__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68339__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq68334){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68334));
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
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70382 = arguments.length;
var i__4737__auto___70383 = (0);
while(true){
if((i__4737__auto___70383 < len__4736__auto___70382)){
args__4742__auto__.push((arguments[i__4737__auto___70383]));

var G__70384 = (i__4737__auto___70383 + (1));
i__4737__auto___70383 = G__70384;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68354 = conformed_args__66791__auto__;
var map__68354__$1 = (((((!((map__68354 == null))))?(((((map__68354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68354):map__68354);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68354__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68354__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68354__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq68349){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68349));
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
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70385 = arguments.length;
var i__4737__auto___70386 = (0);
while(true){
if((i__4737__auto___70386 < len__4736__auto___70385)){
args__4742__auto__.push((arguments[i__4737__auto___70386]));

var G__70388 = (i__4737__auto___70386 + (1));
i__4737__auto___70386 = G__70388;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68363 = conformed_args__66791__auto__;
var map__68363__$1 = (((((!((map__68363 == null))))?(((((map__68363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68363):map__68363);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68363__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68363__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68363__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq68358){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68358));
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
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70394 = arguments.length;
var i__4737__auto___70395 = (0);
while(true){
if((i__4737__auto___70395 < len__4736__auto___70394)){
args__4742__auto__.push((arguments[i__4737__auto___70395]));

var G__70397 = (i__4737__auto___70395 + (1));
i__4737__auto___70395 = G__70397;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68381 = conformed_args__66791__auto__;
var map__68381__$1 = (((((!((map__68381 == null))))?(((((map__68381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68381):map__68381);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68381__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68381__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68381__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq68370){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68370));
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
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70402 = arguments.length;
var i__4737__auto___70403 = (0);
while(true){
if((i__4737__auto___70403 < len__4736__auto___70402)){
args__4742__auto__.push((arguments[i__4737__auto___70403]));

var G__70407 = (i__4737__auto___70403 + (1));
i__4737__auto___70403 = G__70407;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68394 = conformed_args__66791__auto__;
var map__68394__$1 = (((((!((map__68394 == null))))?(((((map__68394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68394):map__68394);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68394__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68394__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68394__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq68392){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68392));
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
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70411 = arguments.length;
var i__4737__auto___70412 = (0);
while(true){
if((i__4737__auto___70412 < len__4736__auto___70411)){
args__4742__auto__.push((arguments[i__4737__auto___70412]));

var G__70413 = (i__4737__auto___70412 + (1));
i__4737__auto___70412 = G__70413;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68405 = conformed_args__66791__auto__;
var map__68405__$1 = (((((!((map__68405 == null))))?(((((map__68405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68405):map__68405);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68405__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68405__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68405__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq68402){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68402));
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
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70416 = arguments.length;
var i__4737__auto___70417 = (0);
while(true){
if((i__4737__auto___70417 < len__4736__auto___70416)){
args__4742__auto__.push((arguments[i__4737__auto___70417]));

var G__70418 = (i__4737__auto___70417 + (1));
i__4737__auto___70417 = G__70418;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68416 = conformed_args__66791__auto__;
var map__68416__$1 = (((((!((map__68416 == null))))?(((((map__68416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68416):map__68416);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68416__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68416__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68416__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq68409){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68409));
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
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70420 = arguments.length;
var i__4737__auto___70421 = (0);
while(true){
if((i__4737__auto___70421 < len__4736__auto___70420)){
args__4742__auto__.push((arguments[i__4737__auto___70421]));

var G__70423 = (i__4737__auto___70421 + (1));
i__4737__auto___70421 = G__70423;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68429 = conformed_args__66791__auto__;
var map__68429__$1 = (((((!((map__68429 == null))))?(((((map__68429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68429):map__68429);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68429__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68429__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68429__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq68427){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68427));
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
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70426 = arguments.length;
var i__4737__auto___70428 = (0);
while(true){
if((i__4737__auto___70428 < len__4736__auto___70426)){
args__4742__auto__.push((arguments[i__4737__auto___70428]));

var G__70429 = (i__4737__auto___70428 + (1));
i__4737__auto___70428 = G__70429;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68442 = conformed_args__66791__auto__;
var map__68442__$1 = (((((!((map__68442 == null))))?(((((map__68442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68442):map__68442);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68442__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68442__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68442__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq68440){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68440));
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
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70432 = arguments.length;
var i__4737__auto___70433 = (0);
while(true){
if((i__4737__auto___70433 < len__4736__auto___70432)){
args__4742__auto__.push((arguments[i__4737__auto___70433]));

var G__70434 = (i__4737__auto___70433 + (1));
i__4737__auto___70433 = G__70434;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68449 = conformed_args__66791__auto__;
var map__68449__$1 = (((((!((map__68449 == null))))?(((((map__68449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68449):map__68449);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68449__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68449__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68449__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq68447){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68447));
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
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70436 = arguments.length;
var i__4737__auto___70437 = (0);
while(true){
if((i__4737__auto___70437 < len__4736__auto___70436)){
args__4742__auto__.push((arguments[i__4737__auto___70437]));

var G__70438 = (i__4737__auto___70437 + (1));
i__4737__auto___70437 = G__70438;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68466 = conformed_args__66791__auto__;
var map__68466__$1 = (((((!((map__68466 == null))))?(((((map__68466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68466):map__68466);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68466__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68466__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68466__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq68461){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68461));
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
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70441 = arguments.length;
var i__4737__auto___70442 = (0);
while(true){
if((i__4737__auto___70442 < len__4736__auto___70441)){
args__4742__auto__.push((arguments[i__4737__auto___70442]));

var G__70443 = (i__4737__auto___70442 + (1));
i__4737__auto___70442 = G__70443;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68482 = conformed_args__66791__auto__;
var map__68482__$1 = (((((!((map__68482 == null))))?(((((map__68482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68482):map__68482);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68482__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68482__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68482__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq68475){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68475));
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
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70451 = arguments.length;
var i__4737__auto___70453 = (0);
while(true){
if((i__4737__auto___70453 < len__4736__auto___70451)){
args__4742__auto__.push((arguments[i__4737__auto___70453]));

var G__70456 = (i__4737__auto___70453 + (1));
i__4737__auto___70453 = G__70456;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68497 = conformed_args__66791__auto__;
var map__68497__$1 = (((((!((map__68497 == null))))?(((((map__68497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68497):map__68497);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68497__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68497__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68497__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq68491){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68491));
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
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70463 = arguments.length;
var i__4737__auto___70464 = (0);
while(true){
if((i__4737__auto___70464 < len__4736__auto___70463)){
args__4742__auto__.push((arguments[i__4737__auto___70464]));

var G__70465 = (i__4737__auto___70464 + (1));
i__4737__auto___70464 = G__70465;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68511 = conformed_args__66791__auto__;
var map__68511__$1 = (((((!((map__68511 == null))))?(((((map__68511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68511):map__68511);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68511__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68511__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68511__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq68506){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68506));
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
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70469 = arguments.length;
var i__4737__auto___70470 = (0);
while(true){
if((i__4737__auto___70470 < len__4736__auto___70469)){
args__4742__auto__.push((arguments[i__4737__auto___70470]));

var G__70472 = (i__4737__auto___70470 + (1));
i__4737__auto___70470 = G__70472;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68527 = conformed_args__66791__auto__;
var map__68527__$1 = (((((!((map__68527 == null))))?(((((map__68527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68527):map__68527);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68527__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68527__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68527__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq68519){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68519));
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
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70479 = arguments.length;
var i__4737__auto___70480 = (0);
while(true){
if((i__4737__auto___70480 < len__4736__auto___70479)){
args__4742__auto__.push((arguments[i__4737__auto___70480]));

var G__70482 = (i__4737__auto___70480 + (1));
i__4737__auto___70480 = G__70482;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68546 = conformed_args__66791__auto__;
var map__68546__$1 = (((((!((map__68546 == null))))?(((((map__68546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68546):map__68546);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq68538){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68538));
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
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70489 = arguments.length;
var i__4737__auto___70490 = (0);
while(true){
if((i__4737__auto___70490 < len__4736__auto___70489)){
args__4742__auto__.push((arguments[i__4737__auto___70490]));

var G__70491 = (i__4737__auto___70490 + (1));
i__4737__auto___70490 = G__70491;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68561 = conformed_args__66791__auto__;
var map__68561__$1 = (((((!((map__68561 == null))))?(((((map__68561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68561):map__68561);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68561__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68561__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68561__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq68556){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68556));
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
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70496 = arguments.length;
var i__4737__auto___70497 = (0);
while(true){
if((i__4737__auto___70497 < len__4736__auto___70496)){
args__4742__auto__.push((arguments[i__4737__auto___70497]));

var G__70498 = (i__4737__auto___70497 + (1));
i__4737__auto___70497 = G__70498;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68569 = conformed_args__66791__auto__;
var map__68569__$1 = (((((!((map__68569 == null))))?(((((map__68569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68569):map__68569);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68569__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68569__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68569__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq68565){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68565));
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
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70506 = arguments.length;
var i__4737__auto___70508 = (0);
while(true){
if((i__4737__auto___70508 < len__4736__auto___70506)){
args__4742__auto__.push((arguments[i__4737__auto___70508]));

var G__70510 = (i__4737__auto___70508 + (1));
i__4737__auto___70508 = G__70510;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68579 = conformed_args__66791__auto__;
var map__68579__$1 = (((((!((map__68579 == null))))?(((((map__68579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68579):map__68579);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68579__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68579__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68579__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq68575){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68575));
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
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70519 = arguments.length;
var i__4737__auto___70520 = (0);
while(true){
if((i__4737__auto___70520 < len__4736__auto___70519)){
args__4742__auto__.push((arguments[i__4737__auto___70520]));

var G__70521 = (i__4737__auto___70520 + (1));
i__4737__auto___70520 = G__70521;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68587 = conformed_args__66791__auto__;
var map__68587__$1 = (((((!((map__68587 == null))))?(((((map__68587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68587):map__68587);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68587__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68587__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68587__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq68586){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68586));
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
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70522 = arguments.length;
var i__4737__auto___70524 = (0);
while(true){
if((i__4737__auto___70524 < len__4736__auto___70522)){
args__4742__auto__.push((arguments[i__4737__auto___70524]));

var G__70525 = (i__4737__auto___70524 + (1));
i__4737__auto___70524 = G__70525;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68594 = conformed_args__66791__auto__;
var map__68594__$1 = (((((!((map__68594 == null))))?(((((map__68594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68594):map__68594);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68594__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68594__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68594__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq68592){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68592));
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
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70528 = arguments.length;
var i__4737__auto___70529 = (0);
while(true){
if((i__4737__auto___70529 < len__4736__auto___70528)){
args__4742__auto__.push((arguments[i__4737__auto___70529]));

var G__70530 = (i__4737__auto___70529 + (1));
i__4737__auto___70529 = G__70530;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68601 = conformed_args__66791__auto__;
var map__68601__$1 = (((((!((map__68601 == null))))?(((((map__68601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68601):map__68601);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68601__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68601__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68601__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq68600){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68600));
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
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70532 = arguments.length;
var i__4737__auto___70533 = (0);
while(true){
if((i__4737__auto___70533 < len__4736__auto___70532)){
args__4742__auto__.push((arguments[i__4737__auto___70533]));

var G__70534 = (i__4737__auto___70533 + (1));
i__4737__auto___70533 = G__70534;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68610 = conformed_args__66791__auto__;
var map__68610__$1 = (((((!((map__68610 == null))))?(((((map__68610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68610):map__68610);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68610__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68610__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68610__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq68606){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68606));
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
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70537 = arguments.length;
var i__4737__auto___70539 = (0);
while(true){
if((i__4737__auto___70539 < len__4736__auto___70537)){
args__4742__auto__.push((arguments[i__4737__auto___70539]));

var G__70540 = (i__4737__auto___70539 + (1));
i__4737__auto___70539 = G__70540;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68628 = conformed_args__66791__auto__;
var map__68628__$1 = (((((!((map__68628 == null))))?(((((map__68628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68628):map__68628);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68628__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68628__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68628__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq68619){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68619));
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
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70555 = arguments.length;
var i__4737__auto___70556 = (0);
while(true){
if((i__4737__auto___70556 < len__4736__auto___70555)){
args__4742__auto__.push((arguments[i__4737__auto___70556]));

var G__70557 = (i__4737__auto___70556 + (1));
i__4737__auto___70556 = G__70557;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68651 = conformed_args__66791__auto__;
var map__68651__$1 = (((((!((map__68651 == null))))?(((((map__68651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68651):map__68651);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68651__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68651__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68651__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq68644){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68644));
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
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70572 = arguments.length;
var i__4737__auto___70573 = (0);
while(true){
if((i__4737__auto___70573 < len__4736__auto___70572)){
args__4742__auto__.push((arguments[i__4737__auto___70573]));

var G__70574 = (i__4737__auto___70573 + (1));
i__4737__auto___70573 = G__70574;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68670 = conformed_args__66791__auto__;
var map__68670__$1 = (((((!((map__68670 == null))))?(((((map__68670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68670):map__68670);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68670__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68670__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68670__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq68663){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68663));
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
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70582 = arguments.length;
var i__4737__auto___70583 = (0);
while(true){
if((i__4737__auto___70583 < len__4736__auto___70582)){
args__4742__auto__.push((arguments[i__4737__auto___70583]));

var G__70584 = (i__4737__auto___70583 + (1));
i__4737__auto___70583 = G__70584;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68687 = conformed_args__66791__auto__;
var map__68687__$1 = (((((!((map__68687 == null))))?(((((map__68687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68687):map__68687);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68687__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68687__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68687__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq68677){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68677));
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
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70589 = arguments.length;
var i__4737__auto___70590 = (0);
while(true){
if((i__4737__auto___70590 < len__4736__auto___70589)){
args__4742__auto__.push((arguments[i__4737__auto___70590]));

var G__70593 = (i__4737__auto___70590 + (1));
i__4737__auto___70590 = G__70593;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68703 = conformed_args__66791__auto__;
var map__68703__$1 = (((((!((map__68703 == null))))?(((((map__68703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68703):map__68703);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68703__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68703__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68703__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq68693){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68693));
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
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70595 = arguments.length;
var i__4737__auto___70596 = (0);
while(true){
if((i__4737__auto___70596 < len__4736__auto___70595)){
args__4742__auto__.push((arguments[i__4737__auto___70596]));

var G__70597 = (i__4737__auto___70596 + (1));
i__4737__auto___70596 = G__70597;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68709 = conformed_args__66791__auto__;
var map__68709__$1 = (((((!((map__68709 == null))))?(((((map__68709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68709):map__68709);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68709__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68709__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68709__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq68708){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68708));
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
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70601 = arguments.length;
var i__4737__auto___70602 = (0);
while(true){
if((i__4737__auto___70602 < len__4736__auto___70601)){
args__4742__auto__.push((arguments[i__4737__auto___70602]));

var G__70603 = (i__4737__auto___70602 + (1));
i__4737__auto___70602 = G__70603;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68717 = conformed_args__66791__auto__;
var map__68717__$1 = (((((!((map__68717 == null))))?(((((map__68717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68717):map__68717);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68717__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68717__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68717__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq68712){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68712));
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
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70612 = arguments.length;
var i__4737__auto___70613 = (0);
while(true){
if((i__4737__auto___70613 < len__4736__auto___70612)){
args__4742__auto__.push((arguments[i__4737__auto___70613]));

var G__70614 = (i__4737__auto___70613 + (1));
i__4737__auto___70613 = G__70614;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68720 = conformed_args__66791__auto__;
var map__68720__$1 = (((((!((map__68720 == null))))?(((((map__68720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68720):map__68720);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68720__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68720__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68720__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq68719){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68719));
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
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70624 = arguments.length;
var i__4737__auto___70625 = (0);
while(true){
if((i__4737__auto___70625 < len__4736__auto___70624)){
args__4742__auto__.push((arguments[i__4737__auto___70625]));

var G__70626 = (i__4737__auto___70625 + (1));
i__4737__auto___70625 = G__70626;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68728 = conformed_args__66791__auto__;
var map__68728__$1 = (((((!((map__68728 == null))))?(((((map__68728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68728):map__68728);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68728__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68728__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68728__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq68726){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68726));
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
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70631 = arguments.length;
var i__4737__auto___70632 = (0);
while(true){
if((i__4737__auto___70632 < len__4736__auto___70631)){
args__4742__auto__.push((arguments[i__4737__auto___70632]));

var G__70633 = (i__4737__auto___70632 + (1));
i__4737__auto___70632 = G__70633;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68734 = conformed_args__66791__auto__;
var map__68734__$1 = (((((!((map__68734 == null))))?(((((map__68734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68734):map__68734);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68734__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68734__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68734__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq68730){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68730));
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
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70637 = arguments.length;
var i__4737__auto___70638 = (0);
while(true){
if((i__4737__auto___70638 < len__4736__auto___70637)){
args__4742__auto__.push((arguments[i__4737__auto___70638]));

var G__70639 = (i__4737__auto___70638 + (1));
i__4737__auto___70638 = G__70639;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68743 = conformed_args__66791__auto__;
var map__68743__$1 = (((((!((map__68743 == null))))?(((((map__68743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68743):map__68743);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68743__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68743__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68743__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq68740){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68740));
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
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70642 = arguments.length;
var i__4737__auto___70643 = (0);
while(true){
if((i__4737__auto___70643 < len__4736__auto___70642)){
args__4742__auto__.push((arguments[i__4737__auto___70643]));

var G__70644 = (i__4737__auto___70643 + (1));
i__4737__auto___70643 = G__70644;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68754 = conformed_args__66791__auto__;
var map__68754__$1 = (((((!((map__68754 == null))))?(((((map__68754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68754):map__68754);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68754__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68754__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68754__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq68749){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68749));
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
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70647 = arguments.length;
var i__4737__auto___70648 = (0);
while(true){
if((i__4737__auto___70648 < len__4736__auto___70647)){
args__4742__auto__.push((arguments[i__4737__auto___70648]));

var G__70649 = (i__4737__auto___70648 + (1));
i__4737__auto___70648 = G__70649;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68762 = conformed_args__66791__auto__;
var map__68762__$1 = (((((!((map__68762 == null))))?(((((map__68762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68762):map__68762);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68762__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68762__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68762__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq68761){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68761));
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
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70652 = arguments.length;
var i__4737__auto___70653 = (0);
while(true){
if((i__4737__auto___70653 < len__4736__auto___70652)){
args__4742__auto__.push((arguments[i__4737__auto___70653]));

var G__70654 = (i__4737__auto___70653 + (1));
i__4737__auto___70653 = G__70654;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68771 = conformed_args__66791__auto__;
var map__68771__$1 = (((((!((map__68771 == null))))?(((((map__68771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68771):map__68771);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68771__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68771__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68771__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq68766){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68766));
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
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70658 = arguments.length;
var i__4737__auto___70659 = (0);
while(true){
if((i__4737__auto___70659 < len__4736__auto___70658)){
args__4742__auto__.push((arguments[i__4737__auto___70659]));

var G__70660 = (i__4737__auto___70659 + (1));
i__4737__auto___70659 = G__70660;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68787 = conformed_args__66791__auto__;
var map__68787__$1 = (((((!((map__68787 == null))))?(((((map__68787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68787):map__68787);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68787__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68787__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68787__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq68776){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68776));
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
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70664 = arguments.length;
var i__4737__auto___70665 = (0);
while(true){
if((i__4737__auto___70665 < len__4736__auto___70664)){
args__4742__auto__.push((arguments[i__4737__auto___70665]));

var G__70666 = (i__4737__auto___70665 + (1));
i__4737__auto___70665 = G__70666;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68796 = conformed_args__66791__auto__;
var map__68796__$1 = (((((!((map__68796 == null))))?(((((map__68796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68796):map__68796);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68796__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68796__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68796__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq68790){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68790));
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
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70668 = arguments.length;
var i__4737__auto___70670 = (0);
while(true){
if((i__4737__auto___70670 < len__4736__auto___70668)){
args__4742__auto__.push((arguments[i__4737__auto___70670]));

var G__70672 = (i__4737__auto___70670 + (1));
i__4737__auto___70670 = G__70672;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68805 = conformed_args__66791__auto__;
var map__68805__$1 = (((((!((map__68805 == null))))?(((((map__68805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68805):map__68805);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68805__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68805__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68805__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq68803){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68803));
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
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70675 = arguments.length;
var i__4737__auto___70676 = (0);
while(true){
if((i__4737__auto___70676 < len__4736__auto___70675)){
args__4742__auto__.push((arguments[i__4737__auto___70676]));

var G__70677 = (i__4737__auto___70676 + (1));
i__4737__auto___70676 = G__70677;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68815 = conformed_args__66791__auto__;
var map__68815__$1 = (((((!((map__68815 == null))))?(((((map__68815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68815):map__68815);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68815__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68815__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68815__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq68812){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68812));
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
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70680 = arguments.length;
var i__4737__auto___70681 = (0);
while(true){
if((i__4737__auto___70681 < len__4736__auto___70680)){
args__4742__auto__.push((arguments[i__4737__auto___70681]));

var G__70682 = (i__4737__auto___70681 + (1));
i__4737__auto___70681 = G__70682;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68829 = conformed_args__66791__auto__;
var map__68829__$1 = (((((!((map__68829 == null))))?(((((map__68829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68829):map__68829);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68829__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68829__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68829__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq68824){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68824));
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
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70687 = arguments.length;
var i__4737__auto___70688 = (0);
while(true){
if((i__4737__auto___70688 < len__4736__auto___70687)){
args__4742__auto__.push((arguments[i__4737__auto___70688]));

var G__70689 = (i__4737__auto___70688 + (1));
i__4737__auto___70688 = G__70689;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68839 = conformed_args__66791__auto__;
var map__68839__$1 = (((((!((map__68839 == null))))?(((((map__68839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68839):map__68839);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68839__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68839__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68839__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq68835){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68835));
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
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70692 = arguments.length;
var i__4737__auto___70693 = (0);
while(true){
if((i__4737__auto___70693 < len__4736__auto___70692)){
args__4742__auto__.push((arguments[i__4737__auto___70693]));

var G__70694 = (i__4737__auto___70693 + (1));
i__4737__auto___70693 = G__70694;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68849 = conformed_args__66791__auto__;
var map__68849__$1 = (((((!((map__68849 == null))))?(((((map__68849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68849):map__68849);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68849__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68849__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68849__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq68845){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68845));
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
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70698 = arguments.length;
var i__4737__auto___70699 = (0);
while(true){
if((i__4737__auto___70699 < len__4736__auto___70698)){
args__4742__auto__.push((arguments[i__4737__auto___70699]));

var G__70700 = (i__4737__auto___70699 + (1));
i__4737__auto___70699 = G__70700;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68881 = conformed_args__66791__auto__;
var map__68881__$1 = (((((!((map__68881 == null))))?(((((map__68881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68881):map__68881);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68881__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68881__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68881__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq68870){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68870));
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
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70704 = arguments.length;
var i__4737__auto___70705 = (0);
while(true){
if((i__4737__auto___70705 < len__4736__auto___70704)){
args__4742__auto__.push((arguments[i__4737__auto___70705]));

var G__70706 = (i__4737__auto___70705 + (1));
i__4737__auto___70705 = G__70706;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68901 = conformed_args__66791__auto__;
var map__68901__$1 = (((((!((map__68901 == null))))?(((((map__68901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68901):map__68901);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68901__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68901__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68901__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq68895){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68895));
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
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70709 = arguments.length;
var i__4737__auto___70711 = (0);
while(true){
if((i__4737__auto___70711 < len__4736__auto___70709)){
args__4742__auto__.push((arguments[i__4737__auto___70711]));

var G__70712 = (i__4737__auto___70711 + (1));
i__4737__auto___70711 = G__70712;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68911 = conformed_args__66791__auto__;
var map__68911__$1 = (((((!((map__68911 == null))))?(((((map__68911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68911):map__68911);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68911__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68911__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68911__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq68909){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68909));
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
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70715 = arguments.length;
var i__4737__auto___70716 = (0);
while(true){
if((i__4737__auto___70716 < len__4736__auto___70715)){
args__4742__auto__.push((arguments[i__4737__auto___70716]));

var G__70717 = (i__4737__auto___70716 + (1));
i__4737__auto___70716 = G__70717;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68924 = conformed_args__66791__auto__;
var map__68924__$1 = (((((!((map__68924 == null))))?(((((map__68924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68924):map__68924);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68924__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68924__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68924__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq68918){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68918));
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
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70720 = arguments.length;
var i__4737__auto___70721 = (0);
while(true){
if((i__4737__auto___70721 < len__4736__auto___70720)){
args__4742__auto__.push((arguments[i__4737__auto___70721]));

var G__70723 = (i__4737__auto___70721 + (1));
i__4737__auto___70721 = G__70723;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68927 = conformed_args__66791__auto__;
var map__68927__$1 = (((((!((map__68927 == null))))?(((((map__68927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68927):map__68927);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68927__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68927__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68927__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq68926){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68926));
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
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70726 = arguments.length;
var i__4737__auto___70727 = (0);
while(true){
if((i__4737__auto___70727 < len__4736__auto___70726)){
args__4742__auto__.push((arguments[i__4737__auto___70727]));

var G__70728 = (i__4737__auto___70727 + (1));
i__4737__auto___70727 = G__70728;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68931 = conformed_args__66791__auto__;
var map__68931__$1 = (((((!((map__68931 == null))))?(((((map__68931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68931):map__68931);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68931__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68931__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68931__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq68929){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68929));
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
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70731 = arguments.length;
var i__4737__auto___70733 = (0);
while(true){
if((i__4737__auto___70733 < len__4736__auto___70731)){
args__4742__auto__.push((arguments[i__4737__auto___70733]));

var G__70736 = (i__4737__auto___70733 + (1));
i__4737__auto___70733 = G__70736;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68934 = conformed_args__66791__auto__;
var map__68934__$1 = (((((!((map__68934 == null))))?(((((map__68934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68934):map__68934);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68934__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68934__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68934__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq68933){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68933));
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
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70739 = arguments.length;
var i__4737__auto___70740 = (0);
while(true){
if((i__4737__auto___70740 < len__4736__auto___70739)){
args__4742__auto__.push((arguments[i__4737__auto___70740]));

var G__70741 = (i__4737__auto___70740 + (1));
i__4737__auto___70740 = G__70741;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68937 = conformed_args__66791__auto__;
var map__68937__$1 = (((((!((map__68937 == null))))?(((((map__68937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68937):map__68937);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68937__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68937__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68937__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq68936){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68936));
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
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70744 = arguments.length;
var i__4737__auto___70745 = (0);
while(true){
if((i__4737__auto___70745 < len__4736__auto___70744)){
args__4742__auto__.push((arguments[i__4737__auto___70745]));

var G__70746 = (i__4737__auto___70745 + (1));
i__4737__auto___70745 = G__70746;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68941 = conformed_args__66791__auto__;
var map__68941__$1 = (((((!((map__68941 == null))))?(((((map__68941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68941):map__68941);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68941__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68941__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68941__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq68940){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68940));
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
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70752 = arguments.length;
var i__4737__auto___70753 = (0);
while(true){
if((i__4737__auto___70753 < len__4736__auto___70752)){
args__4742__auto__.push((arguments[i__4737__auto___70753]));

var G__70754 = (i__4737__auto___70753 + (1));
i__4737__auto___70753 = G__70754;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68944 = conformed_args__66791__auto__;
var map__68944__$1 = (((((!((map__68944 == null))))?(((((map__68944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68944):map__68944);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68944__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68944__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68944__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq68943){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68943));
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
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70757 = arguments.length;
var i__4737__auto___70758 = (0);
while(true){
if((i__4737__auto___70758 < len__4736__auto___70757)){
args__4742__auto__.push((arguments[i__4737__auto___70758]));

var G__70759 = (i__4737__auto___70758 + (1));
i__4737__auto___70758 = G__70759;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68953 = conformed_args__66791__auto__;
var map__68953__$1 = (((((!((map__68953 == null))))?(((((map__68953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68953):map__68953);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68953__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68953__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68953__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq68949){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68949));
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
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70763 = arguments.length;
var i__4737__auto___70764 = (0);
while(true){
if((i__4737__auto___70764 < len__4736__auto___70763)){
args__4742__auto__.push((arguments[i__4737__auto___70764]));

var G__70765 = (i__4737__auto___70764 + (1));
i__4737__auto___70764 = G__70765;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68962 = conformed_args__66791__auto__;
var map__68962__$1 = (((((!((map__68962 == null))))?(((((map__68962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68962):map__68962);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68962__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68962__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68962__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq68958){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68958));
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
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70768 = arguments.length;
var i__4737__auto___70769 = (0);
while(true){
if((i__4737__auto___70769 < len__4736__auto___70768)){
args__4742__auto__.push((arguments[i__4737__auto___70769]));

var G__70770 = (i__4737__auto___70769 + (1));
i__4737__auto___70769 = G__70770;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68967 = conformed_args__66791__auto__;
var map__68967__$1 = (((((!((map__68967 == null))))?(((((map__68967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68967):map__68967);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68967__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68967__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68967__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq68966){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68966));
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
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70774 = arguments.length;
var i__4737__auto___70776 = (0);
while(true){
if((i__4737__auto___70776 < len__4736__auto___70774)){
args__4742__auto__.push((arguments[i__4737__auto___70776]));

var G__70779 = (i__4737__auto___70776 + (1));
i__4737__auto___70776 = G__70779;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68973 = conformed_args__66791__auto__;
var map__68973__$1 = (((((!((map__68973 == null))))?(((((map__68973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68973):map__68973);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68973__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68973__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68973__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq68972){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68972));
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
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70781 = arguments.length;
var i__4737__auto___70782 = (0);
while(true){
if((i__4737__auto___70782 < len__4736__auto___70781)){
args__4742__auto__.push((arguments[i__4737__auto___70782]));

var G__70783 = (i__4737__auto___70782 + (1));
i__4737__auto___70782 = G__70783;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68976 = conformed_args__66791__auto__;
var map__68976__$1 = (((((!((map__68976 == null))))?(((((map__68976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68976):map__68976);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68976__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68976__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68976__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq68975){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68975));
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
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70791 = arguments.length;
var i__4737__auto___70794 = (0);
while(true){
if((i__4737__auto___70794 < len__4736__auto___70791)){
args__4742__auto__.push((arguments[i__4737__auto___70794]));

var G__70795 = (i__4737__auto___70794 + (1));
i__4737__auto___70794 = G__70795;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68981 = conformed_args__66791__auto__;
var map__68981__$1 = (((((!((map__68981 == null))))?(((((map__68981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68981):map__68981);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68981__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68981__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68981__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq68979){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68979));
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
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70805 = arguments.length;
var i__4737__auto___70806 = (0);
while(true){
if((i__4737__auto___70806 < len__4736__auto___70805)){
args__4742__auto__.push((arguments[i__4737__auto___70806]));

var G__70807 = (i__4737__auto___70806 + (1));
i__4737__auto___70806 = G__70807;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68988 = conformed_args__66791__auto__;
var map__68988__$1 = (((((!((map__68988 == null))))?(((((map__68988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68988):map__68988);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68988__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68988__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68988__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq68984){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68984));
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
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70812 = arguments.length;
var i__4737__auto___70813 = (0);
while(true){
if((i__4737__auto___70813 < len__4736__auto___70812)){
args__4742__auto__.push((arguments[i__4737__auto___70813]));

var G__70815 = (i__4737__auto___70813 + (1));
i__4737__auto___70813 = G__70815;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68995 = conformed_args__66791__auto__;
var map__68995__$1 = (((((!((map__68995 == null))))?(((((map__68995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68995):map__68995);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68995__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68995__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68995__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq68993){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68993));
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
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70822 = arguments.length;
var i__4737__auto___70823 = (0);
while(true){
if((i__4737__auto___70823 < len__4736__auto___70822)){
args__4742__auto__.push((arguments[i__4737__auto___70823]));

var G__70824 = (i__4737__auto___70823 + (1));
i__4737__auto___70823 = G__70824;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69000 = conformed_args__66791__auto__;
var map__69000__$1 = (((((!((map__69000 == null))))?(((((map__69000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69000):map__69000);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69000__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69000__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69000__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq68997){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68997));
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
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70829 = arguments.length;
var i__4737__auto___70830 = (0);
while(true){
if((i__4737__auto___70830 < len__4736__auto___70829)){
args__4742__auto__.push((arguments[i__4737__auto___70830]));

var G__70831 = (i__4737__auto___70830 + (1));
i__4737__auto___70830 = G__70831;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69003 = conformed_args__66791__auto__;
var map__69003__$1 = (((((!((map__69003 == null))))?(((((map__69003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69003):map__69003);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69003__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69003__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69003__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq69002){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69002));
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
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70838 = arguments.length;
var i__4737__auto___70839 = (0);
while(true){
if((i__4737__auto___70839 < len__4736__auto___70838)){
args__4742__auto__.push((arguments[i__4737__auto___70839]));

var G__70841 = (i__4737__auto___70839 + (1));
i__4737__auto___70839 = G__70841;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69009 = conformed_args__66791__auto__;
var map__69009__$1 = (((((!((map__69009 == null))))?(((((map__69009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69009):map__69009);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69009__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69009__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69009__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq69008){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69008));
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
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70843 = arguments.length;
var i__4737__auto___70844 = (0);
while(true){
if((i__4737__auto___70844 < len__4736__auto___70843)){
args__4742__auto__.push((arguments[i__4737__auto___70844]));

var G__70845 = (i__4737__auto___70844 + (1));
i__4737__auto___70844 = G__70845;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69013 = conformed_args__66791__auto__;
var map__69013__$1 = (((((!((map__69013 == null))))?(((((map__69013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69013):map__69013);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69013__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69013__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69013__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq69012){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69012));
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
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70851 = arguments.length;
var i__4737__auto___70852 = (0);
while(true){
if((i__4737__auto___70852 < len__4736__auto___70851)){
args__4742__auto__.push((arguments[i__4737__auto___70852]));

var G__70853 = (i__4737__auto___70852 + (1));
i__4737__auto___70852 = G__70853;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69017 = conformed_args__66791__auto__;
var map__69017__$1 = (((((!((map__69017 == null))))?(((((map__69017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69017):map__69017);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69017__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69017__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69017__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq69016){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69016));
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
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70860 = arguments.length;
var i__4737__auto___70861 = (0);
while(true){
if((i__4737__auto___70861 < len__4736__auto___70860)){
args__4742__auto__.push((arguments[i__4737__auto___70861]));

var G__70862 = (i__4737__auto___70861 + (1));
i__4737__auto___70861 = G__70862;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69023 = conformed_args__66791__auto__;
var map__69023__$1 = (((((!((map__69023 == null))))?(((((map__69023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69023):map__69023);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69023__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69023__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69023__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq69021){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69021));
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
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70864 = arguments.length;
var i__4737__auto___70865 = (0);
while(true){
if((i__4737__auto___70865 < len__4736__auto___70864)){
args__4742__auto__.push((arguments[i__4737__auto___70865]));

var G__70866 = (i__4737__auto___70865 + (1));
i__4737__auto___70865 = G__70866;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69034 = conformed_args__66791__auto__;
var map__69034__$1 = (((((!((map__69034 == null))))?(((((map__69034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69034):map__69034);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69034__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69034__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69034__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq69029){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69029));
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
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70869 = arguments.length;
var i__4737__auto___70870 = (0);
while(true){
if((i__4737__auto___70870 < len__4736__auto___70869)){
args__4742__auto__.push((arguments[i__4737__auto___70870]));

var G__70871 = (i__4737__auto___70870 + (1));
i__4737__auto___70870 = G__70871;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69039 = conformed_args__66791__auto__;
var map__69039__$1 = (((((!((map__69039 == null))))?(((((map__69039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69039):map__69039);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69039__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69039__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69039__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq69038){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69038));
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
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70875 = arguments.length;
var i__4737__auto___70876 = (0);
while(true){
if((i__4737__auto___70876 < len__4736__auto___70875)){
args__4742__auto__.push((arguments[i__4737__auto___70876]));

var G__70877 = (i__4737__auto___70876 + (1));
i__4737__auto___70876 = G__70877;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69042 = conformed_args__66791__auto__;
var map__69042__$1 = (((((!((map__69042 == null))))?(((((map__69042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69042):map__69042);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69042__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69042__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69042__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq69041){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69041));
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
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70881 = arguments.length;
var i__4737__auto___70882 = (0);
while(true){
if((i__4737__auto___70882 < len__4736__auto___70881)){
args__4742__auto__.push((arguments[i__4737__auto___70882]));

var G__70885 = (i__4737__auto___70882 + (1));
i__4737__auto___70882 = G__70885;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69045 = conformed_args__66791__auto__;
var map__69045__$1 = (((((!((map__69045 == null))))?(((((map__69045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69045):map__69045);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69045__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69045__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69045__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq69044){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69044));
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
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70887 = arguments.length;
var i__4737__auto___70888 = (0);
while(true){
if((i__4737__auto___70888 < len__4736__auto___70887)){
args__4742__auto__.push((arguments[i__4737__auto___70888]));

var G__70889 = (i__4737__auto___70888 + (1));
i__4737__auto___70888 = G__70889;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69048 = conformed_args__66791__auto__;
var map__69048__$1 = (((((!((map__69048 == null))))?(((((map__69048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69048):map__69048);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69048__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69048__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69048__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq69047){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69047));
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
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70895 = arguments.length;
var i__4737__auto___70896 = (0);
while(true){
if((i__4737__auto___70896 < len__4736__auto___70895)){
args__4742__auto__.push((arguments[i__4737__auto___70896]));

var G__70898 = (i__4737__auto___70896 + (1));
i__4737__auto___70896 = G__70898;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69051 = conformed_args__66791__auto__;
var map__69051__$1 = (((((!((map__69051 == null))))?(((((map__69051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69051):map__69051);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69051__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69051__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69051__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq69050){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69050));
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
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70904 = arguments.length;
var i__4737__auto___70905 = (0);
while(true){
if((i__4737__auto___70905 < len__4736__auto___70904)){
args__4742__auto__.push((arguments[i__4737__auto___70905]));

var G__70906 = (i__4737__auto___70905 + (1));
i__4737__auto___70905 = G__70906;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69054 = conformed_args__66791__auto__;
var map__69054__$1 = (((((!((map__69054 == null))))?(((((map__69054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69054):map__69054);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69054__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69054__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69054__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq69053){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69053));
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
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70908 = arguments.length;
var i__4737__auto___70909 = (0);
while(true){
if((i__4737__auto___70909 < len__4736__auto___70908)){
args__4742__auto__.push((arguments[i__4737__auto___70909]));

var G__70910 = (i__4737__auto___70909 + (1));
i__4737__auto___70909 = G__70910;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69057 = conformed_args__66791__auto__;
var map__69057__$1 = (((((!((map__69057 == null))))?(((((map__69057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69057):map__69057);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69057__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69057__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69057__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq69056){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69056));
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
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70919 = arguments.length;
var i__4737__auto___70920 = (0);
while(true){
if((i__4737__auto___70920 < len__4736__auto___70919)){
args__4742__auto__.push((arguments[i__4737__auto___70920]));

var G__70921 = (i__4737__auto___70920 + (1));
i__4737__auto___70920 = G__70921;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69060 = conformed_args__66791__auto__;
var map__69060__$1 = (((((!((map__69060 == null))))?(((((map__69060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69060):map__69060);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69060__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69060__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69060__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq69059){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69059));
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
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70924 = arguments.length;
var i__4737__auto___70925 = (0);
while(true){
if((i__4737__auto___70925 < len__4736__auto___70924)){
args__4742__auto__.push((arguments[i__4737__auto___70925]));

var G__70926 = (i__4737__auto___70925 + (1));
i__4737__auto___70925 = G__70926;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69066 = conformed_args__66791__auto__;
var map__69066__$1 = (((((!((map__69066 == null))))?(((((map__69066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69066):map__69066);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69066__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69066__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69066__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq69065){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69065));
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
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70931 = arguments.length;
var i__4737__auto___70932 = (0);
while(true){
if((i__4737__auto___70932 < len__4736__auto___70931)){
args__4742__auto__.push((arguments[i__4737__auto___70932]));

var G__70934 = (i__4737__auto___70932 + (1));
i__4737__auto___70932 = G__70934;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69069 = conformed_args__66791__auto__;
var map__69069__$1 = (((((!((map__69069 == null))))?(((((map__69069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69069):map__69069);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69069__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69069__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69069__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq69068){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69068));
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
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70937 = arguments.length;
var i__4737__auto___70938 = (0);
while(true){
if((i__4737__auto___70938 < len__4736__auto___70937)){
args__4742__auto__.push((arguments[i__4737__auto___70938]));

var G__70939 = (i__4737__auto___70938 + (1));
i__4737__auto___70938 = G__70939;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69072 = conformed_args__66791__auto__;
var map__69072__$1 = (((((!((map__69072 == null))))?(((((map__69072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69072):map__69072);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69072__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69072__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69072__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq69071){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69071));
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
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70951 = arguments.length;
var i__4737__auto___70952 = (0);
while(true){
if((i__4737__auto___70952 < len__4736__auto___70951)){
args__4742__auto__.push((arguments[i__4737__auto___70952]));

var G__70956 = (i__4737__auto___70952 + (1));
i__4737__auto___70952 = G__70956;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69075 = conformed_args__66791__auto__;
var map__69075__$1 = (((((!((map__69075 == null))))?(((((map__69075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69075):map__69075);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69075__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69075__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69075__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq69074){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69074));
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
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70960 = arguments.length;
var i__4737__auto___70961 = (0);
while(true){
if((i__4737__auto___70961 < len__4736__auto___70960)){
args__4742__auto__.push((arguments[i__4737__auto___70961]));

var G__70962 = (i__4737__auto___70961 + (1));
i__4737__auto___70961 = G__70962;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69078 = conformed_args__66791__auto__;
var map__69078__$1 = (((((!((map__69078 == null))))?(((((map__69078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69078):map__69078);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69078__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69078__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69078__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq69077){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69077));
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
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70967 = arguments.length;
var i__4737__auto___70968 = (0);
while(true){
if((i__4737__auto___70968 < len__4736__auto___70967)){
args__4742__auto__.push((arguments[i__4737__auto___70968]));

var G__70969 = (i__4737__auto___70968 + (1));
i__4737__auto___70968 = G__70969;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69081 = conformed_args__66791__auto__;
var map__69081__$1 = (((((!((map__69081 == null))))?(((((map__69081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69081):map__69081);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69081__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69081__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69081__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq69080){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69080));
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
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70975 = arguments.length;
var i__4737__auto___70976 = (0);
while(true){
if((i__4737__auto___70976 < len__4736__auto___70975)){
args__4742__auto__.push((arguments[i__4737__auto___70976]));

var G__70977 = (i__4737__auto___70976 + (1));
i__4737__auto___70976 = G__70977;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69084 = conformed_args__66791__auto__;
var map__69084__$1 = (((((!((map__69084 == null))))?(((((map__69084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69084):map__69084);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69084__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69084__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69084__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq69083){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69083));
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
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70982 = arguments.length;
var i__4737__auto___70983 = (0);
while(true){
if((i__4737__auto___70983 < len__4736__auto___70982)){
args__4742__auto__.push((arguments[i__4737__auto___70983]));

var G__70984 = (i__4737__auto___70983 + (1));
i__4737__auto___70983 = G__70984;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69087 = conformed_args__66791__auto__;
var map__69087__$1 = (((((!((map__69087 == null))))?(((((map__69087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69087):map__69087);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69087__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69087__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69087__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq69086){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69086));
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
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70989 = arguments.length;
var i__4737__auto___70990 = (0);
while(true){
if((i__4737__auto___70990 < len__4736__auto___70989)){
args__4742__auto__.push((arguments[i__4737__auto___70990]));

var G__70991 = (i__4737__auto___70990 + (1));
i__4737__auto___70990 = G__70991;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69090 = conformed_args__66791__auto__;
var map__69090__$1 = (((((!((map__69090 == null))))?(((((map__69090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69090):map__69090);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69090__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69090__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69090__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq69089){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69089));
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
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70996 = arguments.length;
var i__4737__auto___70997 = (0);
while(true){
if((i__4737__auto___70997 < len__4736__auto___70996)){
args__4742__auto__.push((arguments[i__4737__auto___70997]));

var G__71000 = (i__4737__auto___70997 + (1));
i__4737__auto___70997 = G__71000;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69093 = conformed_args__66791__auto__;
var map__69093__$1 = (((((!((map__69093 == null))))?(((((map__69093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69093):map__69093);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69093__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69093__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69093__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq69092){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69092));
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
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71003 = arguments.length;
var i__4737__auto___71004 = (0);
while(true){
if((i__4737__auto___71004 < len__4736__auto___71003)){
args__4742__auto__.push((arguments[i__4737__auto___71004]));

var G__71005 = (i__4737__auto___71004 + (1));
i__4737__auto___71004 = G__71005;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69096 = conformed_args__66791__auto__;
var map__69096__$1 = (((((!((map__69096 == null))))?(((((map__69096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69096):map__69096);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69096__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69096__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69096__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq69095){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69095));
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
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71010 = arguments.length;
var i__4737__auto___71011 = (0);
while(true){
if((i__4737__auto___71011 < len__4736__auto___71010)){
args__4742__auto__.push((arguments[i__4737__auto___71011]));

var G__71013 = (i__4737__auto___71011 + (1));
i__4737__auto___71011 = G__71013;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69099 = conformed_args__66791__auto__;
var map__69099__$1 = (((((!((map__69099 == null))))?(((((map__69099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69099):map__69099);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69099__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69099__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69099__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq69098){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69098));
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
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71019 = arguments.length;
var i__4737__auto___71020 = (0);
while(true){
if((i__4737__auto___71020 < len__4736__auto___71019)){
args__4742__auto__.push((arguments[i__4737__auto___71020]));

var G__71021 = (i__4737__auto___71020 + (1));
i__4737__auto___71020 = G__71021;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69102 = conformed_args__66791__auto__;
var map__69102__$1 = (((((!((map__69102 == null))))?(((((map__69102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69102):map__69102);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69102__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69102__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69102__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq69101){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69101));
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
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71025 = arguments.length;
var i__4737__auto___71027 = (0);
while(true){
if((i__4737__auto___71027 < len__4736__auto___71025)){
args__4742__auto__.push((arguments[i__4737__auto___71027]));

var G__71028 = (i__4737__auto___71027 + (1));
i__4737__auto___71027 = G__71028;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69105 = conformed_args__66791__auto__;
var map__69105__$1 = (((((!((map__69105 == null))))?(((((map__69105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69105):map__69105);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69105__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69105__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69105__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq69104){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69104));
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
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71032 = arguments.length;
var i__4737__auto___71033 = (0);
while(true){
if((i__4737__auto___71033 < len__4736__auto___71032)){
args__4742__auto__.push((arguments[i__4737__auto___71033]));

var G__71034 = (i__4737__auto___71033 + (1));
i__4737__auto___71033 = G__71034;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69110 = conformed_args__66791__auto__;
var map__69110__$1 = (((((!((map__69110 == null))))?(((((map__69110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69110):map__69110);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69110__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69110__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69110__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq69109){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69109));
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
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71046 = arguments.length;
var i__4737__auto___71047 = (0);
while(true){
if((i__4737__auto___71047 < len__4736__auto___71046)){
args__4742__auto__.push((arguments[i__4737__auto___71047]));

var G__71048 = (i__4737__auto___71047 + (1));
i__4737__auto___71047 = G__71048;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69113 = conformed_args__66791__auto__;
var map__69113__$1 = (((((!((map__69113 == null))))?(((((map__69113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69113):map__69113);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69113__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69113__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69113__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq69112){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69112));
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
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71049 = arguments.length;
var i__4737__auto___71050 = (0);
while(true){
if((i__4737__auto___71050 < len__4736__auto___71049)){
args__4742__auto__.push((arguments[i__4737__auto___71050]));

var G__71051 = (i__4737__auto___71050 + (1));
i__4737__auto___71050 = G__71051;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69130 = conformed_args__66791__auto__;
var map__69130__$1 = (((((!((map__69130 == null))))?(((((map__69130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69130):map__69130);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69130__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69130__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69130__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq69124){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69124));
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
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71055 = arguments.length;
var i__4737__auto___71056 = (0);
while(true){
if((i__4737__auto___71056 < len__4736__auto___71055)){
args__4742__auto__.push((arguments[i__4737__auto___71056]));

var G__71057 = (i__4737__auto___71056 + (1));
i__4737__auto___71056 = G__71057;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69134 = conformed_args__66791__auto__;
var map__69134__$1 = (((((!((map__69134 == null))))?(((((map__69134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69134):map__69134);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69134__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69134__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69134__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq69133){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69133));
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
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71070 = arguments.length;
var i__4737__auto___71071 = (0);
while(true){
if((i__4737__auto___71071 < len__4736__auto___71070)){
args__4742__auto__.push((arguments[i__4737__auto___71071]));

var G__71072 = (i__4737__auto___71071 + (1));
i__4737__auto___71071 = G__71072;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69137 = conformed_args__66791__auto__;
var map__69137__$1 = (((((!((map__69137 == null))))?(((((map__69137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69137):map__69137);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69137__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69137__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69137__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq69136){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69136));
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
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71080 = arguments.length;
var i__4737__auto___71081 = (0);
while(true){
if((i__4737__auto___71081 < len__4736__auto___71080)){
args__4742__auto__.push((arguments[i__4737__auto___71081]));

var G__71086 = (i__4737__auto___71081 + (1));
i__4737__auto___71081 = G__71086;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69140 = conformed_args__66791__auto__;
var map__69140__$1 = (((((!((map__69140 == null))))?(((((map__69140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69140):map__69140);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69140__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69140__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69140__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq69139){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69139));
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
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71089 = arguments.length;
var i__4737__auto___71090 = (0);
while(true){
if((i__4737__auto___71090 < len__4736__auto___71089)){
args__4742__auto__.push((arguments[i__4737__auto___71090]));

var G__71091 = (i__4737__auto___71090 + (1));
i__4737__auto___71090 = G__71091;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69143 = conformed_args__66791__auto__;
var map__69143__$1 = (((((!((map__69143 == null))))?(((((map__69143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69143):map__69143);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69143__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69143__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69143__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq69142){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69142));
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
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71096 = arguments.length;
var i__4737__auto___71098 = (0);
while(true){
if((i__4737__auto___71098 < len__4736__auto___71096)){
args__4742__auto__.push((arguments[i__4737__auto___71098]));

var G__71102 = (i__4737__auto___71098 + (1));
i__4737__auto___71098 = G__71102;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69146 = conformed_args__66791__auto__;
var map__69146__$1 = (((((!((map__69146 == null))))?(((((map__69146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69146):map__69146);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69146__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69146__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69146__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq69145){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69145));
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
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71105 = arguments.length;
var i__4737__auto___71106 = (0);
while(true){
if((i__4737__auto___71106 < len__4736__auto___71105)){
args__4742__auto__.push((arguments[i__4737__auto___71106]));

var G__71109 = (i__4737__auto___71106 + (1));
i__4737__auto___71106 = G__71109;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69154 = conformed_args__66791__auto__;
var map__69154__$1 = (((((!((map__69154 == null))))?(((((map__69154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69154):map__69154);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69154__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69154__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69154__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq69150){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69150));
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
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71112 = arguments.length;
var i__4737__auto___71113 = (0);
while(true){
if((i__4737__auto___71113 < len__4736__auto___71112)){
args__4742__auto__.push((arguments[i__4737__auto___71113]));

var G__71117 = (i__4737__auto___71113 + (1));
i__4737__auto___71113 = G__71117;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69160 = conformed_args__66791__auto__;
var map__69160__$1 = (((((!((map__69160 == null))))?(((((map__69160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69160):map__69160);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69160__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69160__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69160__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq69159){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69159));
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
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71123 = arguments.length;
var i__4737__auto___71124 = (0);
while(true){
if((i__4737__auto___71124 < len__4736__auto___71123)){
args__4742__auto__.push((arguments[i__4737__auto___71124]));

var G__71125 = (i__4737__auto___71124 + (1));
i__4737__auto___71124 = G__71125;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69166 = conformed_args__66791__auto__;
var map__69166__$1 = (((((!((map__69166 == null))))?(((((map__69166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69166):map__69166);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69166__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69166__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69166__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq69162){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69162));
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
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71132 = arguments.length;
var i__4737__auto___71133 = (0);
while(true){
if((i__4737__auto___71133 < len__4736__auto___71132)){
args__4742__auto__.push((arguments[i__4737__auto___71133]));

var G__71135 = (i__4737__auto___71133 + (1));
i__4737__auto___71133 = G__71135;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69172 = conformed_args__66791__auto__;
var map__69172__$1 = (((((!((map__69172 == null))))?(((((map__69172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69172):map__69172);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69172__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69172__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69172__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq69171){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69171));
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
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71145 = arguments.length;
var i__4737__auto___71147 = (0);
while(true){
if((i__4737__auto___71147 < len__4736__auto___71145)){
args__4742__auto__.push((arguments[i__4737__auto___71147]));

var G__71149 = (i__4737__auto___71147 + (1));
i__4737__auto___71147 = G__71149;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69182 = conformed_args__66791__auto__;
var map__69182__$1 = (((((!((map__69182 == null))))?(((((map__69182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69182):map__69182);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69182__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69182__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69182__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq69176){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69176));
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
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71156 = arguments.length;
var i__4737__auto___71157 = (0);
while(true){
if((i__4737__auto___71157 < len__4736__auto___71156)){
args__4742__auto__.push((arguments[i__4737__auto___71157]));

var G__71158 = (i__4737__auto___71157 + (1));
i__4737__auto___71157 = G__71158;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69190 = conformed_args__66791__auto__;
var map__69190__$1 = (((((!((map__69190 == null))))?(((((map__69190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69190):map__69190);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69190__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69190__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69190__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq69185){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69185));
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
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71161 = arguments.length;
var i__4737__auto___71162 = (0);
while(true){
if((i__4737__auto___71162 < len__4736__auto___71161)){
args__4742__auto__.push((arguments[i__4737__auto___71162]));

var G__71163 = (i__4737__auto___71162 + (1));
i__4737__auto___71162 = G__71163;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69196 = conformed_args__66791__auto__;
var map__69196__$1 = (((((!((map__69196 == null))))?(((((map__69196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69196):map__69196);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69196__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69196__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69196__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq69194){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69194));
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
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71166 = arguments.length;
var i__4737__auto___71167 = (0);
while(true){
if((i__4737__auto___71167 < len__4736__auto___71166)){
args__4742__auto__.push((arguments[i__4737__auto___71167]));

var G__71168 = (i__4737__auto___71167 + (1));
i__4737__auto___71167 = G__71168;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69203 = conformed_args__66791__auto__;
var map__69203__$1 = (((((!((map__69203 == null))))?(((((map__69203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69203):map__69203);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69203__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69203__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69203__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq69200){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69200));
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
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71173 = arguments.length;
var i__4737__auto___71174 = (0);
while(true){
if((i__4737__auto___71174 < len__4736__auto___71173)){
args__4742__auto__.push((arguments[i__4737__auto___71174]));

var G__71175 = (i__4737__auto___71174 + (1));
i__4737__auto___71174 = G__71175;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69218 = conformed_args__66791__auto__;
var map__69218__$1 = (((((!((map__69218 == null))))?(((((map__69218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69218):map__69218);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69218__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69218__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69218__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq69216){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69216));
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
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71182 = arguments.length;
var i__4737__auto___71184 = (0);
while(true){
if((i__4737__auto___71184 < len__4736__auto___71182)){
args__4742__auto__.push((arguments[i__4737__auto___71184]));

var G__71185 = (i__4737__auto___71184 + (1));
i__4737__auto___71184 = G__71185;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69224 = conformed_args__66791__auto__;
var map__69224__$1 = (((((!((map__69224 == null))))?(((((map__69224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69224):map__69224);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69224__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69224__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69224__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq69222){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69222));
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
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71195 = arguments.length;
var i__4737__auto___71196 = (0);
while(true){
if((i__4737__auto___71196 < len__4736__auto___71195)){
args__4742__auto__.push((arguments[i__4737__auto___71196]));

var G__71197 = (i__4737__auto___71196 + (1));
i__4737__auto___71196 = G__71197;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69240 = conformed_args__66791__auto__;
var map__69240__$1 = (((((!((map__69240 == null))))?(((((map__69240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69240):map__69240);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69240__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69240__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69240__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq69239){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69239));
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
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71207 = arguments.length;
var i__4737__auto___71208 = (0);
while(true){
if((i__4737__auto___71208 < len__4736__auto___71207)){
args__4742__auto__.push((arguments[i__4737__auto___71208]));

var G__71209 = (i__4737__auto___71208 + (1));
i__4737__auto___71208 = G__71209;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69251 = conformed_args__66791__auto__;
var map__69251__$1 = (((((!((map__69251 == null))))?(((((map__69251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69251):map__69251);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69251__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69251__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69251__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq69246){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69246));
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
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71213 = arguments.length;
var i__4737__auto___71214 = (0);
while(true){
if((i__4737__auto___71214 < len__4736__auto___71213)){
args__4742__auto__.push((arguments[i__4737__auto___71214]));

var G__71215 = (i__4737__auto___71214 + (1));
i__4737__auto___71214 = G__71215;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69265 = conformed_args__66791__auto__;
var map__69265__$1 = (((((!((map__69265 == null))))?(((((map__69265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69265):map__69265);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69265__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69265__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69265__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq69257){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69257));
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
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71222 = arguments.length;
var i__4737__auto___71223 = (0);
while(true){
if((i__4737__auto___71223 < len__4736__auto___71222)){
args__4742__auto__.push((arguments[i__4737__auto___71223]));

var G__71224 = (i__4737__auto___71223 + (1));
i__4737__auto___71223 = G__71224;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69279 = conformed_args__66791__auto__;
var map__69279__$1 = (((((!((map__69279 == null))))?(((((map__69279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69279):map__69279);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69279__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69279__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69279__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq69274){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69274));
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
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71229 = arguments.length;
var i__4737__auto___71230 = (0);
while(true){
if((i__4737__auto___71230 < len__4736__auto___71229)){
args__4742__auto__.push((arguments[i__4737__auto___71230]));

var G__71233 = (i__4737__auto___71230 + (1));
i__4737__auto___71230 = G__71233;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69293 = conformed_args__66791__auto__;
var map__69293__$1 = (((((!((map__69293 == null))))?(((((map__69293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69293):map__69293);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69293__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69293__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69293__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq69287){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69287));
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
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71237 = arguments.length;
var i__4737__auto___71238 = (0);
while(true){
if((i__4737__auto___71238 < len__4736__auto___71237)){
args__4742__auto__.push((arguments[i__4737__auto___71238]));

var G__71240 = (i__4737__auto___71238 + (1));
i__4737__auto___71238 = G__71240;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69312 = conformed_args__66791__auto__;
var map__69312__$1 = (((((!((map__69312 == null))))?(((((map__69312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69312):map__69312);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69312__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69312__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69312__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq69306){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69306));
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
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71245 = arguments.length;
var i__4737__auto___71246 = (0);
while(true){
if((i__4737__auto___71246 < len__4736__auto___71245)){
args__4742__auto__.push((arguments[i__4737__auto___71246]));

var G__71247 = (i__4737__auto___71246 + (1));
i__4737__auto___71246 = G__71247;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69323 = conformed_args__66791__auto__;
var map__69323__$1 = (((((!((map__69323 == null))))?(((((map__69323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69323):map__69323);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69323__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69323__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69323__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq69316){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69316));
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
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71250 = arguments.length;
var i__4737__auto___71252 = (0);
while(true){
if((i__4737__auto___71252 < len__4736__auto___71250)){
args__4742__auto__.push((arguments[i__4737__auto___71252]));

var G__71255 = (i__4737__auto___71252 + (1));
i__4737__auto___71252 = G__71255;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69332 = conformed_args__66791__auto__;
var map__69332__$1 = (((((!((map__69332 == null))))?(((((map__69332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69332):map__69332);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69332__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69332__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69332__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq69327){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69327));
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
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71256 = arguments.length;
var i__4737__auto___71257 = (0);
while(true){
if((i__4737__auto___71257 < len__4736__auto___71256)){
args__4742__auto__.push((arguments[i__4737__auto___71257]));

var G__71260 = (i__4737__auto___71257 + (1));
i__4737__auto___71257 = G__71260;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69337 = conformed_args__66791__auto__;
var map__69337__$1 = (((((!((map__69337 == null))))?(((((map__69337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69337):map__69337);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69337__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69337__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69337__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq69335){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69335));
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
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71265 = arguments.length;
var i__4737__auto___71266 = (0);
while(true){
if((i__4737__auto___71266 < len__4736__auto___71265)){
args__4742__auto__.push((arguments[i__4737__auto___71266]));

var G__71267 = (i__4737__auto___71266 + (1));
i__4737__auto___71266 = G__71267;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69347 = conformed_args__66791__auto__;
var map__69347__$1 = (((((!((map__69347 == null))))?(((((map__69347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69347):map__69347);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69347__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69347__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69347__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq69345){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69345));
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
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71272 = arguments.length;
var i__4737__auto___71273 = (0);
while(true){
if((i__4737__auto___71273 < len__4736__auto___71272)){
args__4742__auto__.push((arguments[i__4737__auto___71273]));

var G__71276 = (i__4737__auto___71273 + (1));
i__4737__auto___71273 = G__71276;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69358 = conformed_args__66791__auto__;
var map__69358__$1 = (((((!((map__69358 == null))))?(((((map__69358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69358):map__69358);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69358__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69358__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69358__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq69353){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69353));
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
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71280 = arguments.length;
var i__4737__auto___71281 = (0);
while(true){
if((i__4737__auto___71281 < len__4736__auto___71280)){
args__4742__auto__.push((arguments[i__4737__auto___71281]));

var G__71282 = (i__4737__auto___71281 + (1));
i__4737__auto___71281 = G__71282;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69371 = conformed_args__66791__auto__;
var map__69371__$1 = (((((!((map__69371 == null))))?(((((map__69371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69371):map__69371);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69371__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69371__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69371__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq69368){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69368));
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
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71286 = arguments.length;
var i__4737__auto___71287 = (0);
while(true){
if((i__4737__auto___71287 < len__4736__auto___71286)){
args__4742__auto__.push((arguments[i__4737__auto___71287]));

var G__71288 = (i__4737__auto___71287 + (1));
i__4737__auto___71287 = G__71288;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69382 = conformed_args__66791__auto__;
var map__69382__$1 = (((((!((map__69382 == null))))?(((((map__69382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69382):map__69382);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69382__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69382__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69382__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq69377){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69377));
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
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71292 = arguments.length;
var i__4737__auto___71293 = (0);
while(true){
if((i__4737__auto___71293 < len__4736__auto___71292)){
args__4742__auto__.push((arguments[i__4737__auto___71293]));

var G__71294 = (i__4737__auto___71293 + (1));
i__4737__auto___71293 = G__71294;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69391 = conformed_args__66791__auto__;
var map__69391__$1 = (((((!((map__69391 == null))))?(((((map__69391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69391):map__69391);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69391__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69391__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69391__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq69389){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69389));
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
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71300 = arguments.length;
var i__4737__auto___71301 = (0);
while(true){
if((i__4737__auto___71301 < len__4736__auto___71300)){
args__4742__auto__.push((arguments[i__4737__auto___71301]));

var G__71302 = (i__4737__auto___71301 + (1));
i__4737__auto___71301 = G__71302;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69403 = conformed_args__66791__auto__;
var map__69403__$1 = (((((!((map__69403 == null))))?(((((map__69403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69403):map__69403);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69403__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69403__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69403__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq69400){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69400));
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
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71303 = arguments.length;
var i__4737__auto___71304 = (0);
while(true){
if((i__4737__auto___71304 < len__4736__auto___71303)){
args__4742__auto__.push((arguments[i__4737__auto___71304]));

var G__71306 = (i__4737__auto___71304 + (1));
i__4737__auto___71304 = G__71306;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69412 = conformed_args__66791__auto__;
var map__69412__$1 = (((((!((map__69412 == null))))?(((((map__69412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69412):map__69412);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq69408){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69408));
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
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71310 = arguments.length;
var i__4737__auto___71311 = (0);
while(true){
if((i__4737__auto___71311 < len__4736__auto___71310)){
args__4742__auto__.push((arguments[i__4737__auto___71311]));

var G__71312 = (i__4737__auto___71311 + (1));
i__4737__auto___71311 = G__71312;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69429 = conformed_args__66791__auto__;
var map__69429__$1 = (((((!((map__69429 == null))))?(((((map__69429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69429):map__69429);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69429__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69429__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69429__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq69424){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69424));
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
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71314 = arguments.length;
var i__4737__auto___71315 = (0);
while(true){
if((i__4737__auto___71315 < len__4736__auto___71314)){
args__4742__auto__.push((arguments[i__4737__auto___71315]));

var G__71316 = (i__4737__auto___71315 + (1));
i__4737__auto___71315 = G__71316;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69437 = conformed_args__66791__auto__;
var map__69437__$1 = (((((!((map__69437 == null))))?(((((map__69437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69437):map__69437);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69437__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69437__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69437__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq69435){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69435));
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
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71320 = arguments.length;
var i__4737__auto___71321 = (0);
while(true){
if((i__4737__auto___71321 < len__4736__auto___71320)){
args__4742__auto__.push((arguments[i__4737__auto___71321]));

var G__71323 = (i__4737__auto___71321 + (1));
i__4737__auto___71321 = G__71323;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69443 = conformed_args__66791__auto__;
var map__69443__$1 = (((((!((map__69443 == null))))?(((((map__69443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69443):map__69443);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69443__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69443__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69443__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq69441){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69441));
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
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71326 = arguments.length;
var i__4737__auto___71327 = (0);
while(true){
if((i__4737__auto___71327 < len__4736__auto___71326)){
args__4742__auto__.push((arguments[i__4737__auto___71327]));

var G__71328 = (i__4737__auto___71327 + (1));
i__4737__auto___71327 = G__71328;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69452 = conformed_args__66791__auto__;
var map__69452__$1 = (((((!((map__69452 == null))))?(((((map__69452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69452):map__69452);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69452__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69452__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69452__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq69449){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69449));
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
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71330 = arguments.length;
var i__4737__auto___71331 = (0);
while(true){
if((i__4737__auto___71331 < len__4736__auto___71330)){
args__4742__auto__.push((arguments[i__4737__auto___71331]));

var G__71332 = (i__4737__auto___71331 + (1));
i__4737__auto___71331 = G__71332;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69458 = conformed_args__66791__auto__;
var map__69458__$1 = (((((!((map__69458 == null))))?(((((map__69458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69458):map__69458);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69458__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69458__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69458__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq69457){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69457));
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
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71335 = arguments.length;
var i__4737__auto___71336 = (0);
while(true){
if((i__4737__auto___71336 < len__4736__auto___71335)){
args__4742__auto__.push((arguments[i__4737__auto___71336]));

var G__71338 = (i__4737__auto___71336 + (1));
i__4737__auto___71336 = G__71338;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69479 = conformed_args__66791__auto__;
var map__69479__$1 = (((((!((map__69479 == null))))?(((((map__69479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69479):map__69479);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69479__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69479__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69479__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq69470){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69470));
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
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71341 = arguments.length;
var i__4737__auto___71342 = (0);
while(true){
if((i__4737__auto___71342 < len__4736__auto___71341)){
args__4742__auto__.push((arguments[i__4737__auto___71342]));

var G__71343 = (i__4737__auto___71342 + (1));
i__4737__auto___71342 = G__71343;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69494 = conformed_args__66791__auto__;
var map__69494__$1 = (((((!((map__69494 == null))))?(((((map__69494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69494):map__69494);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69494__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69494__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69494__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq69488){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69488));
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
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71353 = arguments.length;
var i__4737__auto___71354 = (0);
while(true){
if((i__4737__auto___71354 < len__4736__auto___71353)){
args__4742__auto__.push((arguments[i__4737__auto___71354]));

var G__71355 = (i__4737__auto___71354 + (1));
i__4737__auto___71354 = G__71355;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69504 = conformed_args__66791__auto__;
var map__69504__$1 = (((((!((map__69504 == null))))?(((((map__69504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69504):map__69504);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69504__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69504__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69504__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq69501){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69501));
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
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71358 = arguments.length;
var i__4737__auto___71360 = (0);
while(true){
if((i__4737__auto___71360 < len__4736__auto___71358)){
args__4742__auto__.push((arguments[i__4737__auto___71360]));

var G__71362 = (i__4737__auto___71360 + (1));
i__4737__auto___71360 = G__71362;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69520 = conformed_args__66791__auto__;
var map__69520__$1 = (((((!((map__69520 == null))))?(((((map__69520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69520):map__69520);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69520__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69520__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69520__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq69518){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69518));
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
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71367 = arguments.length;
var i__4737__auto___71368 = (0);
while(true){
if((i__4737__auto___71368 < len__4736__auto___71367)){
args__4742__auto__.push((arguments[i__4737__auto___71368]));

var G__71369 = (i__4737__auto___71368 + (1));
i__4737__auto___71368 = G__71369;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69529 = conformed_args__66791__auto__;
var map__69529__$1 = (((((!((map__69529 == null))))?(((((map__69529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69529):map__69529);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69529__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69529__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69529__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq69524){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69524));
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
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71375 = arguments.length;
var i__4737__auto___71376 = (0);
while(true){
if((i__4737__auto___71376 < len__4736__auto___71375)){
args__4742__auto__.push((arguments[i__4737__auto___71376]));

var G__71377 = (i__4737__auto___71376 + (1));
i__4737__auto___71376 = G__71377;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69545 = conformed_args__66791__auto__;
var map__69545__$1 = (((((!((map__69545 == null))))?(((((map__69545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69545):map__69545);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69545__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69545__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69545__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq69544){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69544));
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
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71382 = arguments.length;
var i__4737__auto___71383 = (0);
while(true){
if((i__4737__auto___71383 < len__4736__auto___71382)){
args__4742__auto__.push((arguments[i__4737__auto___71383]));

var G__71385 = (i__4737__auto___71383 + (1));
i__4737__auto___71383 = G__71385;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69556 = conformed_args__66791__auto__;
var map__69556__$1 = (((((!((map__69556 == null))))?(((((map__69556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69556):map__69556);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69556__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69556__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69556__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq69552){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69552));
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
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71388 = arguments.length;
var i__4737__auto___71389 = (0);
while(true){
if((i__4737__auto___71389 < len__4736__auto___71388)){
args__4742__auto__.push((arguments[i__4737__auto___71389]));

var G__71390 = (i__4737__auto___71389 + (1));
i__4737__auto___71389 = G__71390;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69569 = conformed_args__66791__auto__;
var map__69569__$1 = (((((!((map__69569 == null))))?(((((map__69569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69569):map__69569);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69569__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69569__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69569__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq69562){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69562));
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
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71401 = arguments.length;
var i__4737__auto___71402 = (0);
while(true){
if((i__4737__auto___71402 < len__4736__auto___71401)){
args__4742__auto__.push((arguments[i__4737__auto___71402]));

var G__71404 = (i__4737__auto___71402 + (1));
i__4737__auto___71402 = G__71404;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69579 = conformed_args__66791__auto__;
var map__69579__$1 = (((((!((map__69579 == null))))?(((((map__69579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69579):map__69579);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69579__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69579__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69579__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq69577){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69577));
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
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71408 = arguments.length;
var i__4737__auto___71409 = (0);
while(true){
if((i__4737__auto___71409 < len__4736__auto___71408)){
args__4742__auto__.push((arguments[i__4737__auto___71409]));

var G__71410 = (i__4737__auto___71409 + (1));
i__4737__auto___71409 = G__71410;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69592 = conformed_args__66791__auto__;
var map__69592__$1 = (((((!((map__69592 == null))))?(((((map__69592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69592):map__69592);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69592__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69592__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69592__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq69588){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69588));
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
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71417 = arguments.length;
var i__4737__auto___71418 = (0);
while(true){
if((i__4737__auto___71418 < len__4736__auto___71417)){
args__4742__auto__.push((arguments[i__4737__auto___71418]));

var G__71419 = (i__4737__auto___71418 + (1));
i__4737__auto___71418 = G__71419;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69599 = conformed_args__66791__auto__;
var map__69599__$1 = (((((!((map__69599 == null))))?(((((map__69599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69599):map__69599);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69599__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69599__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69599__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq69596){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69596));
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
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71421 = arguments.length;
var i__4737__auto___71422 = (0);
while(true){
if((i__4737__auto___71422 < len__4736__auto___71421)){
args__4742__auto__.push((arguments[i__4737__auto___71422]));

var G__71423 = (i__4737__auto___71422 + (1));
i__4737__auto___71422 = G__71423;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69606 = conformed_args__66791__auto__;
var map__69606__$1 = (((((!((map__69606 == null))))?(((((map__69606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69606):map__69606);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69606__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69606__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69606__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq69604){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69604));
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
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71430 = arguments.length;
var i__4737__auto___71431 = (0);
while(true){
if((i__4737__auto___71431 < len__4736__auto___71430)){
args__4742__auto__.push((arguments[i__4737__auto___71431]));

var G__71433 = (i__4737__auto___71431 + (1));
i__4737__auto___71431 = G__71433;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69615 = conformed_args__66791__auto__;
var map__69615__$1 = (((((!((map__69615 == null))))?(((((map__69615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69615):map__69615);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69615__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69615__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69615__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq69610){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69610));
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
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71438 = arguments.length;
var i__4737__auto___71439 = (0);
while(true){
if((i__4737__auto___71439 < len__4736__auto___71438)){
args__4742__auto__.push((arguments[i__4737__auto___71439]));

var G__71440 = (i__4737__auto___71439 + (1));
i__4737__auto___71439 = G__71440;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69622 = conformed_args__66791__auto__;
var map__69622__$1 = (((((!((map__69622 == null))))?(((((map__69622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69622):map__69622);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69622__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69622__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69622__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq69619){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69619));
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
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71443 = arguments.length;
var i__4737__auto___71444 = (0);
while(true){
if((i__4737__auto___71444 < len__4736__auto___71443)){
args__4742__auto__.push((arguments[i__4737__auto___71444]));

var G__71445 = (i__4737__auto___71444 + (1));
i__4737__auto___71444 = G__71445;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69635 = conformed_args__66791__auto__;
var map__69635__$1 = (((((!((map__69635 == null))))?(((((map__69635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69635):map__69635);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69635__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69635__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69635__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq69629){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69629));
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
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71448 = arguments.length;
var i__4737__auto___71449 = (0);
while(true){
if((i__4737__auto___71449 < len__4736__auto___71448)){
args__4742__auto__.push((arguments[i__4737__auto___71449]));

var G__71450 = (i__4737__auto___71449 + (1));
i__4737__auto___71449 = G__71450;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69652 = conformed_args__66791__auto__;
var map__69652__$1 = (((((!((map__69652 == null))))?(((((map__69652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69652):map__69652);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69652__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69652__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69652__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq69647){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69647));
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
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71455 = arguments.length;
var i__4737__auto___71456 = (0);
while(true){
if((i__4737__auto___71456 < len__4736__auto___71455)){
args__4742__auto__.push((arguments[i__4737__auto___71456]));

var G__71457 = (i__4737__auto___71456 + (1));
i__4737__auto___71456 = G__71457;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69669 = conformed_args__66791__auto__;
var map__69669__$1 = (((((!((map__69669 == null))))?(((((map__69669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69669):map__69669);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69669__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69669__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69669__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq69661){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69661));
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
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71459 = arguments.length;
var i__4737__auto___71460 = (0);
while(true){
if((i__4737__auto___71460 < len__4736__auto___71459)){
args__4742__auto__.push((arguments[i__4737__auto___71460]));

var G__71461 = (i__4737__auto___71460 + (1));
i__4737__auto___71460 = G__71461;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69677 = conformed_args__66791__auto__;
var map__69677__$1 = (((((!((map__69677 == null))))?(((((map__69677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69677):map__69677);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69677__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69677__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69677__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq69671){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69671));
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
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71464 = arguments.length;
var i__4737__auto___71465 = (0);
while(true){
if((i__4737__auto___71465 < len__4736__auto___71464)){
args__4742__auto__.push((arguments[i__4737__auto___71465]));

var G__71466 = (i__4737__auto___71465 + (1));
i__4737__auto___71465 = G__71466;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69695 = conformed_args__66791__auto__;
var map__69695__$1 = (((((!((map__69695 == null))))?(((((map__69695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69695):map__69695);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69695__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69695__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69695__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq69682){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69682));
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
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71468 = arguments.length;
var i__4737__auto___71469 = (0);
while(true){
if((i__4737__auto___71469 < len__4736__auto___71468)){
args__4742__auto__.push((arguments[i__4737__auto___71469]));

var G__71470 = (i__4737__auto___71469 + (1));
i__4737__auto___71469 = G__71470;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69713 = conformed_args__66791__auto__;
var map__69713__$1 = (((((!((map__69713 == null))))?(((((map__69713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69713):map__69713);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69713__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69713__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69713__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq69706){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69706));
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
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71478 = arguments.length;
var i__4737__auto___71479 = (0);
while(true){
if((i__4737__auto___71479 < len__4736__auto___71478)){
args__4742__auto__.push((arguments[i__4737__auto___71479]));

var G__71480 = (i__4737__auto___71479 + (1));
i__4737__auto___71479 = G__71480;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69743 = conformed_args__66791__auto__;
var map__69743__$1 = (((((!((map__69743 == null))))?(((((map__69743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69743):map__69743);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69743__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69743__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69743__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq69733){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69733));
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
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71483 = arguments.length;
var i__4737__auto___71484 = (0);
while(true){
if((i__4737__auto___71484 < len__4736__auto___71483)){
args__4742__auto__.push((arguments[i__4737__auto___71484]));

var G__71485 = (i__4737__auto___71484 + (1));
i__4737__auto___71484 = G__71485;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69760 = conformed_args__66791__auto__;
var map__69760__$1 = (((((!((map__69760 == null))))?(((((map__69760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69760):map__69760);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69760__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69760__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69760__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq69750){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69750));
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
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71490 = arguments.length;
var i__4737__auto___71491 = (0);
while(true){
if((i__4737__auto___71491 < len__4736__auto___71490)){
args__4742__auto__.push((arguments[i__4737__auto___71491]));

var G__71492 = (i__4737__auto___71491 + (1));
i__4737__auto___71491 = G__71492;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69778 = conformed_args__66791__auto__;
var map__69778__$1 = (((((!((map__69778 == null))))?(((((map__69778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69778):map__69778);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69778__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69778__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69778__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq69773){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69773));
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
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71499 = arguments.length;
var i__4737__auto___71500 = (0);
while(true){
if((i__4737__auto___71500 < len__4736__auto___71499)){
args__4742__auto__.push((arguments[i__4737__auto___71500]));

var G__71502 = (i__4737__auto___71500 + (1));
i__4737__auto___71500 = G__71502;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69789 = conformed_args__66791__auto__;
var map__69789__$1 = (((((!((map__69789 == null))))?(((((map__69789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69789):map__69789);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69789__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69789__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69789__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq69786){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69786));
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
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71505 = arguments.length;
var i__4737__auto___71506 = (0);
while(true){
if((i__4737__auto___71506 < len__4736__auto___71505)){
args__4742__auto__.push((arguments[i__4737__auto___71506]));

var G__71508 = (i__4737__auto___71506 + (1));
i__4737__auto___71506 = G__71508;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69813 = conformed_args__66791__auto__;
var map__69813__$1 = (((((!((map__69813 == null))))?(((((map__69813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69813):map__69813);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69813__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69813__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69813__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq69801){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69801));
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
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71511 = arguments.length;
var i__4737__auto___71512 = (0);
while(true){
if((i__4737__auto___71512 < len__4736__auto___71511)){
args__4742__auto__.push((arguments[i__4737__auto___71512]));

var G__71514 = (i__4737__auto___71512 + (1));
i__4737__auto___71512 = G__71514;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69830 = conformed_args__66791__auto__;
var map__69830__$1 = (((((!((map__69830 == null))))?(((((map__69830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69830):map__69830);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69830__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69830__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69830__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq69822){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69822));
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
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71517 = arguments.length;
var i__4737__auto___71518 = (0);
while(true){
if((i__4737__auto___71518 < len__4736__auto___71517)){
args__4742__auto__.push((arguments[i__4737__auto___71518]));

var G__71519 = (i__4737__auto___71518 + (1));
i__4737__auto___71518 = G__71519;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69851 = conformed_args__66791__auto__;
var map__69851__$1 = (((((!((map__69851 == null))))?(((((map__69851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69851):map__69851);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69851__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69851__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69851__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq69843){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69843));
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
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71522 = arguments.length;
var i__4737__auto___71523 = (0);
while(true){
if((i__4737__auto___71523 < len__4736__auto___71522)){
args__4742__auto__.push((arguments[i__4737__auto___71523]));

var G__71524 = (i__4737__auto___71523 + (1));
i__4737__auto___71523 = G__71524;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69871 = conformed_args__66791__auto__;
var map__69871__$1 = (((((!((map__69871 == null))))?(((((map__69871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69871):map__69871);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69871__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69871__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69871__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq69863){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69863));
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
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71529 = arguments.length;
var i__4737__auto___71530 = (0);
while(true){
if((i__4737__auto___71530 < len__4736__auto___71529)){
args__4742__auto__.push((arguments[i__4737__auto___71530]));

var G__71531 = (i__4737__auto___71530 + (1));
i__4737__auto___71530 = G__71531;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69878 = conformed_args__66791__auto__;
var map__69878__$1 = (((((!((map__69878 == null))))?(((((map__69878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69878):map__69878);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69878__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69878__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69878__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq69875){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69875));
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
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71534 = arguments.length;
var i__4737__auto___71535 = (0);
while(true){
if((i__4737__auto___71535 < len__4736__auto___71534)){
args__4742__auto__.push((arguments[i__4737__auto___71535]));

var G__71536 = (i__4737__auto___71535 + (1));
i__4737__auto___71535 = G__71536;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69893 = conformed_args__66791__auto__;
var map__69893__$1 = (((((!((map__69893 == null))))?(((((map__69893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69893):map__69893);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69893__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69893__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69893__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq69884){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69884));
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
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71539 = arguments.length;
var i__4737__auto___71540 = (0);
while(true){
if((i__4737__auto___71540 < len__4736__auto___71539)){
args__4742__auto__.push((arguments[i__4737__auto___71540]));

var G__71541 = (i__4737__auto___71540 + (1));
i__4737__auto___71540 = G__71541;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69905 = conformed_args__66791__auto__;
var map__69905__$1 = (((((!((map__69905 == null))))?(((((map__69905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69905):map__69905);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69905__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69905__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69905__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq69903){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69903));
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
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71550 = arguments.length;
var i__4737__auto___71551 = (0);
while(true){
if((i__4737__auto___71551 < len__4736__auto___71550)){
args__4742__auto__.push((arguments[i__4737__auto___71551]));

var G__71552 = (i__4737__auto___71551 + (1));
i__4737__auto___71551 = G__71552;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69918 = conformed_args__66791__auto__;
var map__69918__$1 = (((((!((map__69918 == null))))?(((((map__69918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69918):map__69918);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69918__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69918__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69918__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq69911){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69911));
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
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71555 = arguments.length;
var i__4737__auto___71556 = (0);
while(true){
if((i__4737__auto___71556 < len__4736__auto___71555)){
args__4742__auto__.push((arguments[i__4737__auto___71556]));

var G__71557 = (i__4737__auto___71556 + (1));
i__4737__auto___71556 = G__71557;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69926 = conformed_args__66791__auto__;
var map__69926__$1 = (((((!((map__69926 == null))))?(((((map__69926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69926):map__69926);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69926__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69926__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69926__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq69924){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69924));
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
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71561 = arguments.length;
var i__4737__auto___71562 = (0);
while(true){
if((i__4737__auto___71562 < len__4736__auto___71561)){
args__4742__auto__.push((arguments[i__4737__auto___71562]));

var G__71564 = (i__4737__auto___71562 + (1));
i__4737__auto___71562 = G__71564;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69934 = conformed_args__66791__auto__;
var map__69934__$1 = (((((!((map__69934 == null))))?(((((map__69934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69934):map__69934);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69934__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69934__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69934__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq69932){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69932));
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
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71568 = arguments.length;
var i__4737__auto___71569 = (0);
while(true){
if((i__4737__auto___71569 < len__4736__auto___71568)){
args__4742__auto__.push((arguments[i__4737__auto___71569]));

var G__71571 = (i__4737__auto___71569 + (1));
i__4737__auto___71569 = G__71571;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69943 = conformed_args__66791__auto__;
var map__69943__$1 = (((((!((map__69943 == null))))?(((((map__69943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69943):map__69943);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69943__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69943__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69943__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq69941){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69941));
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
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71574 = arguments.length;
var i__4737__auto___71575 = (0);
while(true){
if((i__4737__auto___71575 < len__4736__auto___71574)){
args__4742__auto__.push((arguments[i__4737__auto___71575]));

var G__71576 = (i__4737__auto___71575 + (1));
i__4737__auto___71575 = G__71576;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69952 = conformed_args__66791__auto__;
var map__69952__$1 = (((((!((map__69952 == null))))?(((((map__69952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69952):map__69952);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69952__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69952__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69952__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq69946){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69946));
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
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71583 = arguments.length;
var i__4737__auto___71584 = (0);
while(true){
if((i__4737__auto___71584 < len__4736__auto___71583)){
args__4742__auto__.push((arguments[i__4737__auto___71584]));

var G__71585 = (i__4737__auto___71584 + (1));
i__4737__auto___71584 = G__71585;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69957 = conformed_args__66791__auto__;
var map__69957__$1 = (((((!((map__69957 == null))))?(((((map__69957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69957):map__69957);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69957__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69957__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69957__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq69955){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69955));
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
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71588 = arguments.length;
var i__4737__auto___71589 = (0);
while(true){
if((i__4737__auto___71589 < len__4736__auto___71588)){
args__4742__auto__.push((arguments[i__4737__auto___71589]));

var G__71590 = (i__4737__auto___71589 + (1));
i__4737__auto___71589 = G__71590;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69967 = conformed_args__66791__auto__;
var map__69967__$1 = (((((!((map__69967 == null))))?(((((map__69967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69967):map__69967);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69967__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69967__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69967__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq69961){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69961));
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
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71596 = arguments.length;
var i__4737__auto___71598 = (0);
while(true){
if((i__4737__auto___71598 < len__4736__auto___71596)){
args__4742__auto__.push((arguments[i__4737__auto___71598]));

var G__71599 = (i__4737__auto___71598 + (1));
i__4737__auto___71598 = G__71599;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69973 = conformed_args__66791__auto__;
var map__69973__$1 = (((((!((map__69973 == null))))?(((((map__69973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69973):map__69973);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69973__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69973__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69973__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq69969){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69969));
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
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71603 = arguments.length;
var i__4737__auto___71604 = (0);
while(true){
if((i__4737__auto___71604 < len__4736__auto___71603)){
args__4742__auto__.push((arguments[i__4737__auto___71604]));

var G__71605 = (i__4737__auto___71604 + (1));
i__4737__auto___71604 = G__71605;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69979 = conformed_args__66791__auto__;
var map__69979__$1 = (((((!((map__69979 == null))))?(((((map__69979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69979):map__69979);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69979__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69979__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69979__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq69977){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69977));
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
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71607 = arguments.length;
var i__4737__auto___71608 = (0);
while(true){
if((i__4737__auto___71608 < len__4736__auto___71607)){
args__4742__auto__.push((arguments[i__4737__auto___71608]));

var G__71609 = (i__4737__auto___71608 + (1));
i__4737__auto___71608 = G__71609;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69989 = conformed_args__66791__auto__;
var map__69989__$1 = (((((!((map__69989 == null))))?(((((map__69989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69989):map__69989);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69989__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69989__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69989__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq69986){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69986));
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
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71612 = arguments.length;
var i__4737__auto___71613 = (0);
while(true){
if((i__4737__auto___71613 < len__4736__auto___71612)){
args__4742__auto__.push((arguments[i__4737__auto___71613]));

var G__71614 = (i__4737__auto___71613 + (1));
i__4737__auto___71613 = G__71614;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69996 = conformed_args__66791__auto__;
var map__69996__$1 = (((((!((map__69996 == null))))?(((((map__69996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69996):map__69996);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69996__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69996__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69996__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq69995){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69995));
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
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71618 = arguments.length;
var i__4737__auto___71619 = (0);
while(true){
if((i__4737__auto___71619 < len__4736__auto___71618)){
args__4742__auto__.push((arguments[i__4737__auto___71619]));

var G__71620 = (i__4737__auto___71619 + (1));
i__4737__auto___71619 = G__71620;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70010 = conformed_args__66791__auto__;
var map__70010__$1 = (((((!((map__70010 == null))))?(((((map__70010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70010):map__70010);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70010__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70010__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70010__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq70008){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70008));
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
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71622 = arguments.length;
var i__4737__auto___71623 = (0);
while(true){
if((i__4737__auto___71623 < len__4736__auto___71622)){
args__4742__auto__.push((arguments[i__4737__auto___71623]));

var G__71624 = (i__4737__auto___71623 + (1));
i__4737__auto___71623 = G__71624;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70018 = conformed_args__66791__auto__;
var map__70018__$1 = (((((!((map__70018 == null))))?(((((map__70018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70018):map__70018);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70018__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70018__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70018__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq70015){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70015));
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
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71627 = arguments.length;
var i__4737__auto___71628 = (0);
while(true){
if((i__4737__auto___71628 < len__4736__auto___71627)){
args__4742__auto__.push((arguments[i__4737__auto___71628]));

var G__71629 = (i__4737__auto___71628 + (1));
i__4737__auto___71628 = G__71629;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70028 = conformed_args__66791__auto__;
var map__70028__$1 = (((((!((map__70028 == null))))?(((((map__70028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70028):map__70028);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70028__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70028__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70028__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq70023){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70023));
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
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71631 = arguments.length;
var i__4737__auto___71632 = (0);
while(true){
if((i__4737__auto___71632 < len__4736__auto___71631)){
args__4742__auto__.push((arguments[i__4737__auto___71632]));

var G__71633 = (i__4737__auto___71632 + (1));
i__4737__auto___71632 = G__71633;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70033 = conformed_args__66791__auto__;
var map__70033__$1 = (((((!((map__70033 == null))))?(((((map__70033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70033):map__70033);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70033__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70033__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70033__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq70031){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70031));
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
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71636 = arguments.length;
var i__4737__auto___71637 = (0);
while(true){
if((i__4737__auto___71637 < len__4736__auto___71636)){
args__4742__auto__.push((arguments[i__4737__auto___71637]));

var G__71638 = (i__4737__auto___71637 + (1));
i__4737__auto___71637 = G__71638;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70038 = conformed_args__66791__auto__;
var map__70038__$1 = (((((!((map__70038 == null))))?(((((map__70038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70038):map__70038);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70038__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70038__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70038__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq70037){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70037));
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
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71640 = arguments.length;
var i__4737__auto___71642 = (0);
while(true){
if((i__4737__auto___71642 < len__4736__auto___71640)){
args__4742__auto__.push((arguments[i__4737__auto___71642]));

var G__71644 = (i__4737__auto___71642 + (1));
i__4737__auto___71642 = G__71644;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70053 = conformed_args__66791__auto__;
var map__70053__$1 = (((((!((map__70053 == null))))?(((((map__70053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70053):map__70053);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70053__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70053__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70053__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq70050){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70050));
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
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71646 = arguments.length;
var i__4737__auto___71647 = (0);
while(true){
if((i__4737__auto___71647 < len__4736__auto___71646)){
args__4742__auto__.push((arguments[i__4737__auto___71647]));

var G__71648 = (i__4737__auto___71647 + (1));
i__4737__auto___71647 = G__71648;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70058 = conformed_args__66791__auto__;
var map__70058__$1 = (((((!((map__70058 == null))))?(((((map__70058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70058):map__70058);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70058__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70058__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70058__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq70057){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70057));
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
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71651 = arguments.length;
var i__4737__auto___71652 = (0);
while(true){
if((i__4737__auto___71652 < len__4736__auto___71651)){
args__4742__auto__.push((arguments[i__4737__auto___71652]));

var G__71653 = (i__4737__auto___71652 + (1));
i__4737__auto___71652 = G__71653;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70062 = conformed_args__66791__auto__;
var map__70062__$1 = (((((!((map__70062 == null))))?(((((map__70062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70062):map__70062);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70062__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70062__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70062__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq70061){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70061));
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
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71657 = arguments.length;
var i__4737__auto___71658 = (0);
while(true){
if((i__4737__auto___71658 < len__4736__auto___71657)){
args__4742__auto__.push((arguments[i__4737__auto___71658]));

var G__71659 = (i__4737__auto___71658 + (1));
i__4737__auto___71658 = G__71659;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70066 = conformed_args__66791__auto__;
var map__70066__$1 = (((((!((map__70066 == null))))?(((((map__70066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70066):map__70066);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70066__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70066__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70066__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq70064){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70064));
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
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71661 = arguments.length;
var i__4737__auto___71662 = (0);
while(true){
if((i__4737__auto___71662 < len__4736__auto___71661)){
args__4742__auto__.push((arguments[i__4737__auto___71662]));

var G__71664 = (i__4737__auto___71662 + (1));
i__4737__auto___71662 = G__71664;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70075 = conformed_args__66791__auto__;
var map__70075__$1 = (((((!((map__70075 == null))))?(((((map__70075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70075):map__70075);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70075__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70075__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70075__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq70069){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70069));
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
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71667 = arguments.length;
var i__4737__auto___71668 = (0);
while(true){
if((i__4737__auto___71668 < len__4736__auto___71667)){
args__4742__auto__.push((arguments[i__4737__auto___71668]));

var G__71669 = (i__4737__auto___71668 + (1));
i__4737__auto___71668 = G__71669;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70091 = conformed_args__66791__auto__;
var map__70091__$1 = (((((!((map__70091 == null))))?(((((map__70091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70091):map__70091);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70091__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70091__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70091__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq70085){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70085));
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
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71672 = arguments.length;
var i__4737__auto___71673 = (0);
while(true){
if((i__4737__auto___71673 < len__4736__auto___71672)){
args__4742__auto__.push((arguments[i__4737__auto___71673]));

var G__71674 = (i__4737__auto___71673 + (1));
i__4737__auto___71673 = G__71674;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70104 = conformed_args__66791__auto__;
var map__70104__$1 = (((((!((map__70104 == null))))?(((((map__70104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70104):map__70104);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70104__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70104__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70104__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq70098){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70098));
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
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71678 = arguments.length;
var i__4737__auto___71679 = (0);
while(true){
if((i__4737__auto___71679 < len__4736__auto___71678)){
args__4742__auto__.push((arguments[i__4737__auto___71679]));

var G__71680 = (i__4737__auto___71679 + (1));
i__4737__auto___71679 = G__71680;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70111 = conformed_args__66791__auto__;
var map__70111__$1 = (((((!((map__70111 == null))))?(((((map__70111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70111):map__70111);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70111__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70111__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70111__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq70110){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70110));
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
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71682 = arguments.length;
var i__4737__auto___71683 = (0);
while(true){
if((i__4737__auto___71683 < len__4736__auto___71682)){
args__4742__auto__.push((arguments[i__4737__auto___71683]));

var G__71684 = (i__4737__auto___71683 + (1));
i__4737__auto___71683 = G__71684;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70121 = conformed_args__66791__auto__;
var map__70121__$1 = (((((!((map__70121 == null))))?(((((map__70121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70121):map__70121);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70121__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70121__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70121__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq70117){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70117));
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
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71687 = arguments.length;
var i__4737__auto___71688 = (0);
while(true){
if((i__4737__auto___71688 < len__4736__auto___71687)){
args__4742__auto__.push((arguments[i__4737__auto___71688]));

var G__71689 = (i__4737__auto___71688 + (1));
i__4737__auto___71688 = G__71689;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70133 = conformed_args__66791__auto__;
var map__70133__$1 = (((((!((map__70133 == null))))?(((((map__70133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70133):map__70133);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70133__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70133__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70133__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq70129){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70129));
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
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71691 = arguments.length;
var i__4737__auto___71692 = (0);
while(true){
if((i__4737__auto___71692 < len__4736__auto___71691)){
args__4742__auto__.push((arguments[i__4737__auto___71692]));

var G__71693 = (i__4737__auto___71692 + (1));
i__4737__auto___71692 = G__71693;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70148 = conformed_args__66791__auto__;
var map__70148__$1 = (((((!((map__70148 == null))))?(((((map__70148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70148):map__70148);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70148__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70148__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70148__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq70144){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70144));
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
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71696 = arguments.length;
var i__4737__auto___71697 = (0);
while(true){
if((i__4737__auto___71697 < len__4736__auto___71696)){
args__4742__auto__.push((arguments[i__4737__auto___71697]));

var G__71698 = (i__4737__auto___71697 + (1));
i__4737__auto___71697 = G__71698;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70160 = conformed_args__66791__auto__;
var map__70160__$1 = (((((!((map__70160 == null))))?(((((map__70160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70160):map__70160);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70160__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70160__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70160__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq70156){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70156));
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
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71702 = arguments.length;
var i__4737__auto___71703 = (0);
while(true){
if((i__4737__auto___71703 < len__4736__auto___71702)){
args__4742__auto__.push((arguments[i__4737__auto___71703]));

var G__71704 = (i__4737__auto___71703 + (1));
i__4737__auto___71703 = G__71704;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70169 = conformed_args__66791__auto__;
var map__70169__$1 = (((((!((map__70169 == null))))?(((((map__70169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70169):map__70169);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70169__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70169__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70169__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq70167){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70167));
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
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71706 = arguments.length;
var i__4737__auto___71707 = (0);
while(true){
if((i__4737__auto___71707 < len__4736__auto___71706)){
args__4742__auto__.push((arguments[i__4737__auto___71707]));

var G__71708 = (i__4737__auto___71707 + (1));
i__4737__auto___71707 = G__71708;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70174 = conformed_args__66791__auto__;
var map__70174__$1 = (((((!((map__70174 == null))))?(((((map__70174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70174):map__70174);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70174__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70174__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70174__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq70173){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70173));
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
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71711 = arguments.length;
var i__4737__auto___71712 = (0);
while(true){
if((i__4737__auto___71712 < len__4736__auto___71711)){
args__4742__auto__.push((arguments[i__4737__auto___71712]));

var G__71713 = (i__4737__auto___71712 + (1));
i__4737__auto___71712 = G__71713;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70183 = conformed_args__66791__auto__;
var map__70183__$1 = (((((!((map__70183 == null))))?(((((map__70183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70183):map__70183);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70183__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70183__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70183__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq70180){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70180));
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
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71715 = arguments.length;
var i__4737__auto___71716 = (0);
while(true){
if((i__4737__auto___71716 < len__4736__auto___71715)){
args__4742__auto__.push((arguments[i__4737__auto___71716]));

var G__71717 = (i__4737__auto___71716 + (1));
i__4737__auto___71716 = G__71717;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70195 = conformed_args__66791__auto__;
var map__70195__$1 = (((((!((map__70195 == null))))?(((((map__70195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70195):map__70195);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70195__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70195__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70195__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq70193){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70193));
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
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71720 = arguments.length;
var i__4737__auto___71721 = (0);
while(true){
if((i__4737__auto___71721 < len__4736__auto___71720)){
args__4742__auto__.push((arguments[i__4737__auto___71721]));

var G__71722 = (i__4737__auto___71721 + (1));
i__4737__auto___71721 = G__71722;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70205 = conformed_args__66791__auto__;
var map__70205__$1 = (((((!((map__70205 == null))))?(((((map__70205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70205):map__70205);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70205__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70205__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70205__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq70201){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70201));
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
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71724 = arguments.length;
var i__4737__auto___71725 = (0);
while(true){
if((i__4737__auto___71725 < len__4736__auto___71724)){
args__4742__auto__.push((arguments[i__4737__auto___71725]));

var G__71728 = (i__4737__auto___71725 + (1));
i__4737__auto___71725 = G__71728;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66791__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__70218 = conformed_args__66791__auto__;
var map__70218__$1 = (((((!((map__70218 == null))))?(((((map__70218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70218):map__70218);
var attrs__66792__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70218__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__66793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70218__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__66794__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70218__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66793__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66793__auto__);
var attrs_value__66795__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__66792__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66795__auto__], null),children__66793__auto____$1),css__66794__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq70210){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70210));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
