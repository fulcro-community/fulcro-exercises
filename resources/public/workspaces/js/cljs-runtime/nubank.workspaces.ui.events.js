goog.provide('nubank.workspaces.ui.events');
nubank.workspaces.ui.events.KEYS = cljs.core.PersistentHashMap.fromArrays(["d","n","9","]","z","w","3","'","space","s","tab","=","right","4","f","8","e","up","q","p","/","j","return","x","v","backspace","minus","7","escape","5","a","6","t","slash","i","k","down","b",".","r","y",";","1",",","0","g","l","[","u","h","2","m","\\","o","c","left"],[(68),(78),(57),(221),(90),(87),(51),(222),(32),(83),(9),(187),(39),(52),(70),(56),(69),(38),(81),(80),(191),(74),(13),(88),(86),(8),(189),(55),(27),(53),(65),(54),(84),(191),(73),(75),(40),(66),(190),(82),(89),(186),(49),(188),(48),(71),(76),(219),(85),(72),(50),(77),(220),(79),(67),(37)]);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("nubank.workspaces.ui.events","key-string","nubank.workspaces.ui.events/key-string",1439734463),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",-927561820,null),new cljs.core.Symbol("nubank.workspaces.ui.events","KEYS","nubank.workspaces.ui.events/KEYS",1157130078,null))),cljs.core.set(cljs.core.keys(nubank.workspaces.ui.events.KEYS)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("nubank.workspaces.ui.events","modifier","nubank.workspaces.ui.events/modifier",-617988846),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["shift","null","alt","null","meta","null","ctrl","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["shift",null,"alt",null,"meta",null,"ctrl",null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__70439#","p1__70439#",-2004524909,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"p1__70439#","p1__70439#",-2004524909,null),/-/)),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__70440#","p1__70440#",1335622157,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.string","join","clojure.string/join",-539723360,null),"-",new cljs.core.Symbol(null,"p1__70440#","p1__70440#",1335622157,null)))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"modifiers","modifiers",50378834),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Keyword("nubank.workspaces.ui.events","modifier","nubank.workspaces.ui.events/modifier",-617988846)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("nubank.workspaces.ui.events","key-string","nubank.workspaces.ui.events/key-string",1439734463))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__70439#","p1__70439#",-2004524909,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"p1__70439#","p1__70439#",-2004524909,null),/-/)),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__70440#","p1__70440#",1335622157,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.string","join","clojure.string/join",-539723360,null),"-",new cljs.core.Symbol(null,"p1__70440#","p1__70440#",1335622157,null)))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"modifiers","modifiers",50378834),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Keyword("nubank.workspaces.ui.events","modifier","nubank.workspaces.ui.events/modifier",-617988846)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("nubank.workspaces.ui.events","key-string","nubank.workspaces.ui.events/key-string",1439734463))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"%","%",-950237169,null),/-/)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.string","join","clojure.string/join",-539723360,null),"-",new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__70439_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__70439_SHARP_,/-/);
}),null,true,(function (p1__70440_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",p1__70440_SHARP_);
})),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.Keyword(null,"key","key",-1516042587)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.rep_impl(new cljs.core.Keyword("nubank.workspaces.ui.events","modifier","nubank.workspaces.ui.events/modifier",-617988846),new cljs.core.Keyword("nubank.workspaces.ui.events","modifier","nubank.workspaces.ui.events/modifier",-617988846)),new cljs.core.Keyword("nubank.workspaces.ui.events","key-string","nubank.workspaces.ui.events/key-string",1439734463)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Keyword("nubank.workspaces.ui.events","modifier","nubank.workspaces.ui.events/modifier",-617988846)),new cljs.core.Keyword("nubank.workspaces.ui.events","key-string","nubank.workspaces.ui.events/key-string",1439734463)], null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("nubank.workspaces.ui.events","key-code","nubank.workspaces.ui.events/key-code",1996171186),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
/**
 * Wraps function f with a call to .preventDefault on the event. This is a helper
 *   to compose with event callback functions so they also cancel the default browser
 *   event handler.
 * 
 *   Usage:
 * 
 *   (dom/a {:href "#" :onClick (pd #(console.log :clicked))} "No default")
 */
nubank.workspaces.ui.events.pd = (function nubank$workspaces$ui$events$pd(f){
return (function (e){
e.preventDefault();

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
});
});
nubank.workspaces.ui.events.parse_keystroke = (function nubank$workspaces$ui$events$parse_keystroke(keystroke){
var temp__5751__auto__ = cljs.spec.alpha.conform(new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),keystroke);
if(cljs.core.truth_(temp__5751__auto__)){
var map__70467 = temp__5751__auto__;
var map__70467__$1 = (((((!((map__70467 == null))))?(((((map__70467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70467):map__70467);
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70467__$1,new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70467__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.events","key-code","nubank.workspaces.ui.events/key-code",1996171186),cljs.core.get.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.events.KEYS,key),new cljs.core.Keyword("nubank.workspaces.ui.events","modifiers","nubank.workspaces.ui.events/modifiers",-1201173660),modifiers], null);
} else {
return null;
}
});
nubank.workspaces.ui.events.match_key_QMARK_ = (function nubank$workspaces$ui$events$match_key_QMARK_(e,key_code){
if(cljs.core.truth_(key_code)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(e,"keyCode"),key_code);
} else {
return true;
}
});
nubank.workspaces.ui.events.match_modifiers_QMARK_ = (function nubank$workspaces$ui$events$match_modifiers_QMARK_(e,modifiers){
if(cljs.core.truth_(modifiers)){
return cljs.core.every_QMARK_((function (p1__70473_SHARP_){
return goog.object.get(e,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__70473_SHARP_),"Key"].join(''));
}),modifiers);
} else {
return true;
}
});
nubank.workspaces.ui.events.match_keystroke_QMARK_ = (function nubank$workspaces$ui$events$match_keystroke_QMARK_(e,p__70476){
var map__70477 = p__70476;
var map__70477__$1 = (((((!((map__70477 == null))))?(((((map__70477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70477):map__70477);
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70477__$1,new cljs.core.Keyword("nubank.workspaces.ui.events","modifiers","nubank.workspaces.ui.events/modifiers",-1201173660));
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70477__$1,new cljs.core.Keyword("nubank.workspaces.ui.events","key-code","nubank.workspaces.ui.events/key-code",1996171186));
return ((nubank.workspaces.ui.events.match_key_QMARK_(e,key_code)) && (nubank.workspaces.ui.events.match_modifiers_QMARK_(e,modifiers)));
});
nubank.workspaces.ui.events.get_target = (function nubank$workspaces$ui$events$get_target(target){
if(cljs.core.fn_QMARK_(target)){
return (target.cljs$core$IFn$_invoke$arity$0 ? target.cljs$core$IFn$_invoke$arity$0() : target.call(null));
} else {
if(cljs.core.truth_(target)){
return target;
} else {
return document.body;

}
}
});
nubank.workspaces.ui.events.attach_event = (function nubank$workspaces$ui$events$attach_event(this$){
var map__70486 = com.fulcrologic.fulcro.components.props(this$);
var map__70486__$1 = (((((!((map__70486 == null))))?(((((map__70486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70486):map__70486);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70486__$1,new cljs.core.Keyword("nubank.workspaces.ui.events","target","nubank.workspaces.ui.events/target",-254697909));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70486__$1,new cljs.core.Keyword("nubank.workspaces.ui.events","event","nubank.workspaces.ui.events/event",-1162809276));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70486__$1,new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282));
var target__$1 = nubank.workspaces.ui.events.get_target(target);
if(cljs.core.truth_(event)){
} else {
throw (new Error(["Assert failed: ","You must provide an event to dom-listener","\n","event"].join('')));
}

goog.object.set(this$,"handler",action);

if(cljs.core.truth_(target__$1)){
return target__$1.addEventListener(event,action);
} else {
return null;
}
});
nubank.workspaces.ui.events.dettach_event = (function nubank$workspaces$ui$events$dettach_event(this$){
var temp__5751__auto__ = goog.object.get(this$,"handler");
if(cljs.core.truth_(temp__5751__auto__)){
var handler = temp__5751__auto__;
var map__70492 = com.fulcrologic.fulcro.components.props(this$);
var map__70492__$1 = (((((!((map__70492 == null))))?(((((map__70492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70492):map__70492);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70492__$1,new cljs.core.Keyword("nubank.workspaces.ui.events","target","nubank.workspaces.ui.events/target",-254697909));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70492__$1,new cljs.core.Keyword("nubank.workspaces.ui.events","event","nubank.workspaces.ui.events/event",-1162809276));
var target__$1 = nubank.workspaces.ui.events.get_target(target);
if(cljs.core.truth_(target__$1)){
return target__$1.removeEventListener(event,handler);
} else {
return null;
}
} else {
return null;
}
});

var options__55349__auto___70611 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
return nubank.workspaces.ui.events.attach_event(this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (this$){
return nubank.workspaces.ui.events.dettach_event(this$);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$events$render_DomListener(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["noscript",({})]);
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.events !== 'undefined') && (typeof nubank.workspaces.ui.events.DomListener !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.events.DomListener = (function nubank$workspaces$ui$events$DomListener(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___70615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___70611,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___70615)){
var init_state__55352__auto___70616 = temp__5751__auto___70615;
(this__55351__auto__.state = (function (){var obj70548 = ({"fulcro$state":(function (){var G__70549 = this__55351__auto__;
var G__70550 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___70616.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___70616.cljs$core$IFn$_invoke$arity$2(G__70549,G__70550) : init_state__55352__auto___70616.call(null,G__70549,G__70550));
})()});
return obj70548;
})());
} else {
(this__55351__auto__.state = (function (){var obj70554 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj70554;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.events.DomListener,new cljs.core.Keyword("nubank.workspaces.ui.events","DomListener","nubank.workspaces.ui.events/DomListener",1303435744),options__55349__auto___70611);
nubank.workspaces.ui.events.dom_listener_STAR_ = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.events.DomListener);
nubank.workspaces.ui.events.dom_listener = (function nubank$workspaces$ui$events$dom_listener(p__70561){
var map__70562 = p__70561;
var map__70562__$1 = (((((!((map__70562 == null))))?(((((map__70562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70562):map__70562);
var event = map__70562__$1;
var keystroke = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70562__$1,new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647));
var click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70562__$1,new cljs.core.Keyword("nubank.workspaces.ui.events","click","nubank.workspaces.ui.events/click",-607106429));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70562__$1,new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282));
if(cljs.core.truth_(click)){
var G__70567 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(event,new cljs.core.Keyword("nubank.workspaces.ui.events","event","nubank.workspaces.ui.events/event",-1162809276),"click",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),click], 0));
return (nubank.workspaces.ui.events.dom_listener_STAR_.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.events.dom_listener_STAR_.cljs$core$IFn$_invoke$arity$1(G__70567) : nubank.workspaces.ui.events.dom_listener_STAR_.call(null,G__70567));
} else {
if(cljs.core.truth_(keystroke)){
var temp__5751__auto__ = nubank.workspaces.ui.events.parse_keystroke(keystroke);
if(cljs.core.truth_(temp__5751__auto__)){
var matcher = temp__5751__auto__;
var G__70570 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(event,new cljs.core.Keyword("nubank.workspaces.ui.events","event","nubank.workspaces.ui.events/event",-1162809276),"keydown",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (p1__70558_SHARP_){
if(nubank.workspaces.ui.events.match_keystroke_QMARK_(p1__70558_SHARP_,matcher)){
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(p1__70558_SHARP_) : action.call(null,p1__70558_SHARP_));
} else {
return null;
}
})], 0));
return (nubank.workspaces.ui.events.dom_listener_STAR_.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.events.dom_listener_STAR_.cljs$core$IFn$_invoke$arity$1(G__70570) : nubank.workspaces.ui.events.dom_listener_STAR_.call(null,G__70570));
} else {
return console.warn(["Keystroke `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystroke),"` is not valid."].join(''));
}
} else {
return (nubank.workspaces.ui.events.dom_listener_STAR_.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.events.dom_listener_STAR_.cljs$core$IFn$_invoke$arity$1(event) : nubank.workspaces.ui.events.dom_listener_STAR_.call(null,event));

}
}
});
nubank.workspaces.ui.events.create_event = (function nubank$workspaces$ui$events$create_event(p__70575){
var map__70577 = p__70575;
var map__70577__$1 = (((((!((map__70577 == null))))?(((((map__70577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70577):map__70577);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70577__$1,new cljs.core.Keyword("nubank.workspaces.ui.events","event","nubank.workspaces.ui.events/event",-1162809276));
var G__70579 = document.createEvent("HTMLEvents");
G__70579.initEvent(event,true,true);

return G__70579;
});
nubank.workspaces.ui.events.trigger_event = (function nubank$workspaces$ui$events$trigger_event(target,evt){
return target.dispatchEvent(nubank.workspaces.ui.events.create_event(evt));
});

//# sourceMappingURL=nubank.workspaces.ui.events.js.map
