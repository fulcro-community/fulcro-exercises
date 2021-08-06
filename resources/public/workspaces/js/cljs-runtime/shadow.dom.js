goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_60582 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_60582(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_60583 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_60583(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__59540 = coll;
var G__59541 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__59540,G__59541) : shadow.dom.lazy_native_coll_seq.call(null,G__59540,G__59541));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__59566 = arguments.length;
switch (G__59566) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__59577 = arguments.length;
switch (G__59577) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__59585 = arguments.length;
switch (G__59585) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__59593 = arguments.length;
switch (G__59593) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__59597 = arguments.length;
switch (G__59597) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__59612 = arguments.length;
switch (G__59612) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e59628){if((e59628 instanceof Object)){
var e = e59628;
return console.log("didnt support attachEvent",el,e);
} else {
throw e59628;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__59644 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__59645 = null;
var count__59646 = (0);
var i__59647 = (0);
while(true){
if((i__59647 < count__59646)){
var el = chunk__59645.cljs$core$IIndexed$_nth$arity$2(null,i__59647);
var handler_60608__$1 = ((function (seq__59644,chunk__59645,count__59646,i__59647,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__59644,chunk__59645,count__59646,i__59647,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_60608__$1);


var G__60610 = seq__59644;
var G__60611 = chunk__59645;
var G__60612 = count__59646;
var G__60613 = (i__59647 + (1));
seq__59644 = G__60610;
chunk__59645 = G__60611;
count__59646 = G__60612;
i__59647 = G__60613;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59644);
if(temp__5753__auto__){
var seq__59644__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59644__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59644__$1);
var G__60614 = cljs.core.chunk_rest(seq__59644__$1);
var G__60615 = c__4556__auto__;
var G__60616 = cljs.core.count(c__4556__auto__);
var G__60617 = (0);
seq__59644 = G__60614;
chunk__59645 = G__60615;
count__59646 = G__60616;
i__59647 = G__60617;
continue;
} else {
var el = cljs.core.first(seq__59644__$1);
var handler_60619__$1 = ((function (seq__59644,chunk__59645,count__59646,i__59647,el,seq__59644__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__59644,chunk__59645,count__59646,i__59647,el,seq__59644__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_60619__$1);


var G__60621 = cljs.core.next(seq__59644__$1);
var G__60622 = null;
var G__60623 = (0);
var G__60624 = (0);
seq__59644 = G__60621;
chunk__59645 = G__60622;
count__59646 = G__60623;
i__59647 = G__60624;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__59666 = arguments.length;
switch (G__59666) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__59679 = cljs.core.seq(events);
var chunk__59680 = null;
var count__59681 = (0);
var i__59682 = (0);
while(true){
if((i__59682 < count__59681)){
var vec__59697 = chunk__59680.cljs$core$IIndexed$_nth$arity$2(null,i__59682);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59697,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59697,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__60632 = seq__59679;
var G__60633 = chunk__59680;
var G__60634 = count__59681;
var G__60635 = (i__59682 + (1));
seq__59679 = G__60632;
chunk__59680 = G__60633;
count__59681 = G__60634;
i__59682 = G__60635;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59679);
if(temp__5753__auto__){
var seq__59679__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59679__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59679__$1);
var G__60638 = cljs.core.chunk_rest(seq__59679__$1);
var G__60639 = c__4556__auto__;
var G__60640 = cljs.core.count(c__4556__auto__);
var G__60641 = (0);
seq__59679 = G__60638;
chunk__59680 = G__60639;
count__59681 = G__60640;
i__59682 = G__60641;
continue;
} else {
var vec__59706 = cljs.core.first(seq__59679__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59706,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59706,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__60643 = cljs.core.next(seq__59679__$1);
var G__60644 = null;
var G__60645 = (0);
var G__60646 = (0);
seq__59679 = G__60643;
chunk__59680 = G__60644;
count__59681 = G__60645;
i__59682 = G__60646;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__59713 = cljs.core.seq(styles);
var chunk__59714 = null;
var count__59715 = (0);
var i__59716 = (0);
while(true){
if((i__59716 < count__59715)){
var vec__59738 = chunk__59714.cljs$core$IIndexed$_nth$arity$2(null,i__59716);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59738,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59738,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__60653 = seq__59713;
var G__60654 = chunk__59714;
var G__60655 = count__59715;
var G__60656 = (i__59716 + (1));
seq__59713 = G__60653;
chunk__59714 = G__60654;
count__59715 = G__60655;
i__59716 = G__60656;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59713);
if(temp__5753__auto__){
var seq__59713__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59713__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59713__$1);
var G__60660 = cljs.core.chunk_rest(seq__59713__$1);
var G__60661 = c__4556__auto__;
var G__60662 = cljs.core.count(c__4556__auto__);
var G__60663 = (0);
seq__59713 = G__60660;
chunk__59714 = G__60661;
count__59715 = G__60662;
i__59716 = G__60663;
continue;
} else {
var vec__59747 = cljs.core.first(seq__59713__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59747,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59747,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__60667 = cljs.core.next(seq__59713__$1);
var G__60668 = null;
var G__60669 = (0);
var G__60670 = (0);
seq__59713 = G__60667;
chunk__59714 = G__60668;
count__59715 = G__60669;
i__59716 = G__60670;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__59755_60675 = key;
var G__59755_60676__$1 = (((G__59755_60675 instanceof cljs.core.Keyword))?G__59755_60675.fqn:null);
switch (G__59755_60676__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_60690 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_60690,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_60690,"aria-");
}
})())){
el.setAttribute(ks_60690,value);
} else {
(el[ks_60690] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__59794){
var map__59796 = p__59794;
var map__59796__$1 = (((((!((map__59796 == null))))?(((((map__59796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59796):map__59796);
var props = map__59796__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59796__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__59801 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59801,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59801,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59801,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__59805 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__59805,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__59805;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__59813 = arguments.length;
switch (G__59813) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__59827){
var vec__59830 = p__59827;
var seq__59831 = cljs.core.seq(vec__59830);
var first__59832 = cljs.core.first(seq__59831);
var seq__59831__$1 = cljs.core.next(seq__59831);
var nn = first__59832;
var first__59832__$1 = cljs.core.first(seq__59831__$1);
var seq__59831__$2 = cljs.core.next(seq__59831__$1);
var np = first__59832__$1;
var nc = seq__59831__$2;
var node = vec__59830;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59833 = nn;
var G__59834 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__59833,G__59834) : create_fn.call(null,G__59833,G__59834));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59836 = nn;
var G__59837 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__59836,G__59837) : create_fn.call(null,G__59836,G__59837));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__59845 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59845,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59845,(1),null);
var seq__59849_60714 = cljs.core.seq(node_children);
var chunk__59850_60715 = null;
var count__59851_60716 = (0);
var i__59852_60717 = (0);
while(true){
if((i__59852_60717 < count__59851_60716)){
var child_struct_60720 = chunk__59850_60715.cljs$core$IIndexed$_nth$arity$2(null,i__59852_60717);
var children_60721 = shadow.dom.dom_node(child_struct_60720);
if(cljs.core.seq_QMARK_(children_60721)){
var seq__59900_60722 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_60721));
var chunk__59902_60723 = null;
var count__59903_60724 = (0);
var i__59904_60725 = (0);
while(true){
if((i__59904_60725 < count__59903_60724)){
var child_60726 = chunk__59902_60723.cljs$core$IIndexed$_nth$arity$2(null,i__59904_60725);
if(cljs.core.truth_(child_60726)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60726);


var G__60728 = seq__59900_60722;
var G__60729 = chunk__59902_60723;
var G__60730 = count__59903_60724;
var G__60731 = (i__59904_60725 + (1));
seq__59900_60722 = G__60728;
chunk__59902_60723 = G__60729;
count__59903_60724 = G__60730;
i__59904_60725 = G__60731;
continue;
} else {
var G__60734 = seq__59900_60722;
var G__60735 = chunk__59902_60723;
var G__60736 = count__59903_60724;
var G__60737 = (i__59904_60725 + (1));
seq__59900_60722 = G__60734;
chunk__59902_60723 = G__60735;
count__59903_60724 = G__60736;
i__59904_60725 = G__60737;
continue;
}
} else {
var temp__5753__auto___60738 = cljs.core.seq(seq__59900_60722);
if(temp__5753__auto___60738){
var seq__59900_60739__$1 = temp__5753__auto___60738;
if(cljs.core.chunked_seq_QMARK_(seq__59900_60739__$1)){
var c__4556__auto___60741 = cljs.core.chunk_first(seq__59900_60739__$1);
var G__60742 = cljs.core.chunk_rest(seq__59900_60739__$1);
var G__60743 = c__4556__auto___60741;
var G__60744 = cljs.core.count(c__4556__auto___60741);
var G__60745 = (0);
seq__59900_60722 = G__60742;
chunk__59902_60723 = G__60743;
count__59903_60724 = G__60744;
i__59904_60725 = G__60745;
continue;
} else {
var child_60747 = cljs.core.first(seq__59900_60739__$1);
if(cljs.core.truth_(child_60747)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60747);


var G__60749 = cljs.core.next(seq__59900_60739__$1);
var G__60750 = null;
var G__60751 = (0);
var G__60752 = (0);
seq__59900_60722 = G__60749;
chunk__59902_60723 = G__60750;
count__59903_60724 = G__60751;
i__59904_60725 = G__60752;
continue;
} else {
var G__60754 = cljs.core.next(seq__59900_60739__$1);
var G__60755 = null;
var G__60756 = (0);
var G__60757 = (0);
seq__59900_60722 = G__60754;
chunk__59902_60723 = G__60755;
count__59903_60724 = G__60756;
i__59904_60725 = G__60757;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_60721);
}


var G__60758 = seq__59849_60714;
var G__60759 = chunk__59850_60715;
var G__60760 = count__59851_60716;
var G__60761 = (i__59852_60717 + (1));
seq__59849_60714 = G__60758;
chunk__59850_60715 = G__60759;
count__59851_60716 = G__60760;
i__59852_60717 = G__60761;
continue;
} else {
var temp__5753__auto___60762 = cljs.core.seq(seq__59849_60714);
if(temp__5753__auto___60762){
var seq__59849_60763__$1 = temp__5753__auto___60762;
if(cljs.core.chunked_seq_QMARK_(seq__59849_60763__$1)){
var c__4556__auto___60764 = cljs.core.chunk_first(seq__59849_60763__$1);
var G__60765 = cljs.core.chunk_rest(seq__59849_60763__$1);
var G__60766 = c__4556__auto___60764;
var G__60767 = cljs.core.count(c__4556__auto___60764);
var G__60768 = (0);
seq__59849_60714 = G__60765;
chunk__59850_60715 = G__60766;
count__59851_60716 = G__60767;
i__59852_60717 = G__60768;
continue;
} else {
var child_struct_60770 = cljs.core.first(seq__59849_60763__$1);
var children_60771 = shadow.dom.dom_node(child_struct_60770);
if(cljs.core.seq_QMARK_(children_60771)){
var seq__59928_60772 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_60771));
var chunk__59930_60773 = null;
var count__59931_60774 = (0);
var i__59932_60775 = (0);
while(true){
if((i__59932_60775 < count__59931_60774)){
var child_60777 = chunk__59930_60773.cljs$core$IIndexed$_nth$arity$2(null,i__59932_60775);
if(cljs.core.truth_(child_60777)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60777);


var G__60780 = seq__59928_60772;
var G__60781 = chunk__59930_60773;
var G__60782 = count__59931_60774;
var G__60783 = (i__59932_60775 + (1));
seq__59928_60772 = G__60780;
chunk__59930_60773 = G__60781;
count__59931_60774 = G__60782;
i__59932_60775 = G__60783;
continue;
} else {
var G__60786 = seq__59928_60772;
var G__60787 = chunk__59930_60773;
var G__60788 = count__59931_60774;
var G__60789 = (i__59932_60775 + (1));
seq__59928_60772 = G__60786;
chunk__59930_60773 = G__60787;
count__59931_60774 = G__60788;
i__59932_60775 = G__60789;
continue;
}
} else {
var temp__5753__auto___60790__$1 = cljs.core.seq(seq__59928_60772);
if(temp__5753__auto___60790__$1){
var seq__59928_60792__$1 = temp__5753__auto___60790__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59928_60792__$1)){
var c__4556__auto___60793 = cljs.core.chunk_first(seq__59928_60792__$1);
var G__60794 = cljs.core.chunk_rest(seq__59928_60792__$1);
var G__60795 = c__4556__auto___60793;
var G__60796 = cljs.core.count(c__4556__auto___60793);
var G__60797 = (0);
seq__59928_60772 = G__60794;
chunk__59930_60773 = G__60795;
count__59931_60774 = G__60796;
i__59932_60775 = G__60797;
continue;
} else {
var child_60798 = cljs.core.first(seq__59928_60792__$1);
if(cljs.core.truth_(child_60798)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60798);


var G__60801 = cljs.core.next(seq__59928_60792__$1);
var G__60802 = null;
var G__60803 = (0);
var G__60804 = (0);
seq__59928_60772 = G__60801;
chunk__59930_60773 = G__60802;
count__59931_60774 = G__60803;
i__59932_60775 = G__60804;
continue;
} else {
var G__60805 = cljs.core.next(seq__59928_60792__$1);
var G__60806 = null;
var G__60807 = (0);
var G__60808 = (0);
seq__59928_60772 = G__60805;
chunk__59930_60773 = G__60806;
count__59931_60774 = G__60807;
i__59932_60775 = G__60808;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_60771);
}


var G__60810 = cljs.core.next(seq__59849_60763__$1);
var G__60811 = null;
var G__60812 = (0);
var G__60813 = (0);
seq__59849_60714 = G__60810;
chunk__59850_60715 = G__60811;
count__59851_60716 = G__60812;
i__59852_60717 = G__60813;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__59957 = cljs.core.seq(node);
var chunk__59958 = null;
var count__59959 = (0);
var i__59960 = (0);
while(true){
if((i__59960 < count__59959)){
var n = chunk__59958.cljs$core$IIndexed$_nth$arity$2(null,i__59960);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__60822 = seq__59957;
var G__60823 = chunk__59958;
var G__60824 = count__59959;
var G__60825 = (i__59960 + (1));
seq__59957 = G__60822;
chunk__59958 = G__60823;
count__59959 = G__60824;
i__59960 = G__60825;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59957);
if(temp__5753__auto__){
var seq__59957__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59957__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59957__$1);
var G__60830 = cljs.core.chunk_rest(seq__59957__$1);
var G__60831 = c__4556__auto__;
var G__60832 = cljs.core.count(c__4556__auto__);
var G__60833 = (0);
seq__59957 = G__60830;
chunk__59958 = G__60831;
count__59959 = G__60832;
i__59960 = G__60833;
continue;
} else {
var n = cljs.core.first(seq__59957__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__60835 = cljs.core.next(seq__59957__$1);
var G__60836 = null;
var G__60837 = (0);
var G__60838 = (0);
seq__59957 = G__60835;
chunk__59958 = G__60836;
count__59959 = G__60837;
i__59960 = G__60838;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__60000 = arguments.length;
switch (G__60000) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__60009 = arguments.length;
switch (G__60009) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__60023 = arguments.length;
switch (G__60023) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60862 = arguments.length;
var i__4737__auto___60863 = (0);
while(true){
if((i__4737__auto___60863 < len__4736__auto___60862)){
args__4742__auto__.push((arguments[i__4737__auto___60863]));

var G__60865 = (i__4737__auto___60863 + (1));
i__4737__auto___60863 = G__60865;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__60044_60867 = cljs.core.seq(nodes);
var chunk__60045_60868 = null;
var count__60046_60869 = (0);
var i__60047_60870 = (0);
while(true){
if((i__60047_60870 < count__60046_60869)){
var node_60871 = chunk__60045_60868.cljs$core$IIndexed$_nth$arity$2(null,i__60047_60870);
fragment.appendChild(shadow.dom._to_dom(node_60871));


var G__60872 = seq__60044_60867;
var G__60873 = chunk__60045_60868;
var G__60874 = count__60046_60869;
var G__60875 = (i__60047_60870 + (1));
seq__60044_60867 = G__60872;
chunk__60045_60868 = G__60873;
count__60046_60869 = G__60874;
i__60047_60870 = G__60875;
continue;
} else {
var temp__5753__auto___60876 = cljs.core.seq(seq__60044_60867);
if(temp__5753__auto___60876){
var seq__60044_60877__$1 = temp__5753__auto___60876;
if(cljs.core.chunked_seq_QMARK_(seq__60044_60877__$1)){
var c__4556__auto___60878 = cljs.core.chunk_first(seq__60044_60877__$1);
var G__60880 = cljs.core.chunk_rest(seq__60044_60877__$1);
var G__60881 = c__4556__auto___60878;
var G__60882 = cljs.core.count(c__4556__auto___60878);
var G__60883 = (0);
seq__60044_60867 = G__60880;
chunk__60045_60868 = G__60881;
count__60046_60869 = G__60882;
i__60047_60870 = G__60883;
continue;
} else {
var node_60884 = cljs.core.first(seq__60044_60877__$1);
fragment.appendChild(shadow.dom._to_dom(node_60884));


var G__60885 = cljs.core.next(seq__60044_60877__$1);
var G__60886 = null;
var G__60887 = (0);
var G__60888 = (0);
seq__60044_60867 = G__60885;
chunk__60045_60868 = G__60886;
count__60046_60869 = G__60887;
i__60047_60870 = G__60888;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq60040){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60040));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__60062_60890 = cljs.core.seq(scripts);
var chunk__60063_60891 = null;
var count__60064_60892 = (0);
var i__60065_60893 = (0);
while(true){
if((i__60065_60893 < count__60064_60892)){
var vec__60085_60895 = chunk__60063_60891.cljs$core$IIndexed$_nth$arity$2(null,i__60065_60893);
var script_tag_60896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60085_60895,(0),null);
var script_body_60897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60085_60895,(1),null);
eval(script_body_60897);


var G__60899 = seq__60062_60890;
var G__60900 = chunk__60063_60891;
var G__60901 = count__60064_60892;
var G__60902 = (i__60065_60893 + (1));
seq__60062_60890 = G__60899;
chunk__60063_60891 = G__60900;
count__60064_60892 = G__60901;
i__60065_60893 = G__60902;
continue;
} else {
var temp__5753__auto___60904 = cljs.core.seq(seq__60062_60890);
if(temp__5753__auto___60904){
var seq__60062_60905__$1 = temp__5753__auto___60904;
if(cljs.core.chunked_seq_QMARK_(seq__60062_60905__$1)){
var c__4556__auto___60906 = cljs.core.chunk_first(seq__60062_60905__$1);
var G__60907 = cljs.core.chunk_rest(seq__60062_60905__$1);
var G__60908 = c__4556__auto___60906;
var G__60909 = cljs.core.count(c__4556__auto___60906);
var G__60910 = (0);
seq__60062_60890 = G__60907;
chunk__60063_60891 = G__60908;
count__60064_60892 = G__60909;
i__60065_60893 = G__60910;
continue;
} else {
var vec__60092_60911 = cljs.core.first(seq__60062_60905__$1);
var script_tag_60912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60092_60911,(0),null);
var script_body_60913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60092_60911,(1),null);
eval(script_body_60913);


var G__60919 = cljs.core.next(seq__60062_60905__$1);
var G__60920 = null;
var G__60921 = (0);
var G__60922 = (0);
seq__60062_60890 = G__60919;
chunk__60063_60891 = G__60920;
count__60064_60892 = G__60921;
i__60065_60893 = G__60922;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__60097){
var vec__60100 = p__60097;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60100,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60100,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__60114 = arguments.length;
switch (G__60114) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__60135 = cljs.core.seq(style_keys);
var chunk__60136 = null;
var count__60137 = (0);
var i__60138 = (0);
while(true){
if((i__60138 < count__60137)){
var it = chunk__60136.cljs$core$IIndexed$_nth$arity$2(null,i__60138);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__60935 = seq__60135;
var G__60936 = chunk__60136;
var G__60937 = count__60137;
var G__60938 = (i__60138 + (1));
seq__60135 = G__60935;
chunk__60136 = G__60936;
count__60137 = G__60937;
i__60138 = G__60938;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60135);
if(temp__5753__auto__){
var seq__60135__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60135__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60135__$1);
var G__60940 = cljs.core.chunk_rest(seq__60135__$1);
var G__60941 = c__4556__auto__;
var G__60942 = cljs.core.count(c__4556__auto__);
var G__60943 = (0);
seq__60135 = G__60940;
chunk__60136 = G__60941;
count__60137 = G__60942;
i__60138 = G__60943;
continue;
} else {
var it = cljs.core.first(seq__60135__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__60944 = cljs.core.next(seq__60135__$1);
var G__60945 = null;
var G__60946 = (0);
var G__60947 = (0);
seq__60135 = G__60944;
chunk__60136 = G__60945;
count__60137 = G__60946;
i__60138 = G__60947;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k60153,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__60175 = k60153;
var G__60175__$1 = (((G__60175 instanceof cljs.core.Keyword))?G__60175.fqn:null);
switch (G__60175__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60153,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__60179){
var vec__60181 = p__60179;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60181,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60181,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60152){
var self__ = this;
var G__60152__$1 = this;
return (new cljs.core.RecordIter((0),G__60152__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60154,other60155){
var self__ = this;
var this60154__$1 = this;
return (((!((other60155 == null)))) && ((this60154__$1.constructor === other60155.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60154__$1.x,other60155.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60154__$1.y,other60155.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60154__$1.__extmap,other60155.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__60152){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__60223 = cljs.core.keyword_identical_QMARK_;
var expr__60224 = k__4388__auto__;
if(cljs.core.truth_((pred__60223.cljs$core$IFn$_invoke$arity$2 ? pred__60223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__60224) : pred__60223.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__60224)))){
return (new shadow.dom.Coordinate(G__60152,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60223.cljs$core$IFn$_invoke$arity$2 ? pred__60223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__60224) : pred__60223.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__60224)))){
return (new shadow.dom.Coordinate(self__.x,G__60152,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__60152),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__60152){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__60152,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__60158){
var extmap__4419__auto__ = (function (){var G__60260 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60158,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__60158)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60260);
} else {
return G__60260;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__60158),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__60158),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k60277,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__60287 = k60277;
var G__60287__$1 = (((G__60287 instanceof cljs.core.Keyword))?G__60287.fqn:null);
switch (G__60287__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60277,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__60292){
var vec__60296 = p__60292;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60296,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60296,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60276){
var self__ = this;
var G__60276__$1 = this;
return (new cljs.core.RecordIter((0),G__60276__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60278,other60279){
var self__ = this;
var this60278__$1 = this;
return (((!((other60279 == null)))) && ((this60278__$1.constructor === other60279.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60278__$1.w,other60279.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60278__$1.h,other60279.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60278__$1.__extmap,other60279.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__60276){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__60309 = cljs.core.keyword_identical_QMARK_;
var expr__60310 = k__4388__auto__;
if(cljs.core.truth_((pred__60309.cljs$core$IFn$_invoke$arity$2 ? pred__60309.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__60310) : pred__60309.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__60310)))){
return (new shadow.dom.Size(G__60276,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60309.cljs$core$IFn$_invoke$arity$2 ? pred__60309.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__60310) : pred__60309.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__60310)))){
return (new shadow.dom.Size(self__.w,G__60276,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__60276),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__60276){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__60276,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__60282){
var extmap__4419__auto__ = (function (){var G__60324 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60282,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__60282)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60324);
} else {
return G__60324;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__60282),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__60282),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__60982 = (i + (1));
var G__60983 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__60982;
ret = G__60983;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60346){
var vec__60347 = p__60346;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60347,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60347,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__60356 = arguments.length;
switch (G__60356) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__60988 = ps;
var G__60989 = (i + (1));
el__$1 = G__60988;
i = G__60989;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__60422 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60422,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60422,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60422,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__60427_60994 = cljs.core.seq(props);
var chunk__60428_60995 = null;
var count__60429_60996 = (0);
var i__60430_60997 = (0);
while(true){
if((i__60430_60997 < count__60429_60996)){
var vec__60444_60998 = chunk__60428_60995.cljs$core$IIndexed$_nth$arity$2(null,i__60430_60997);
var k_60999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60444_60998,(0),null);
var v_61000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60444_60998,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_60999);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_60999),v_61000);


var G__61001 = seq__60427_60994;
var G__61002 = chunk__60428_60995;
var G__61003 = count__60429_60996;
var G__61004 = (i__60430_60997 + (1));
seq__60427_60994 = G__61001;
chunk__60428_60995 = G__61002;
count__60429_60996 = G__61003;
i__60430_60997 = G__61004;
continue;
} else {
var temp__5753__auto___61005 = cljs.core.seq(seq__60427_60994);
if(temp__5753__auto___61005){
var seq__60427_61006__$1 = temp__5753__auto___61005;
if(cljs.core.chunked_seq_QMARK_(seq__60427_61006__$1)){
var c__4556__auto___61007 = cljs.core.chunk_first(seq__60427_61006__$1);
var G__61008 = cljs.core.chunk_rest(seq__60427_61006__$1);
var G__61009 = c__4556__auto___61007;
var G__61010 = cljs.core.count(c__4556__auto___61007);
var G__61011 = (0);
seq__60427_60994 = G__61008;
chunk__60428_60995 = G__61009;
count__60429_60996 = G__61010;
i__60430_60997 = G__61011;
continue;
} else {
var vec__60451_61012 = cljs.core.first(seq__60427_61006__$1);
var k_61013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60451_61012,(0),null);
var v_61014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60451_61012,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_61013);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_61013),v_61014);


var G__61015 = cljs.core.next(seq__60427_61006__$1);
var G__61016 = null;
var G__61017 = (0);
var G__61018 = (0);
seq__60427_60994 = G__61015;
chunk__60428_60995 = G__61016;
count__60429_60996 = G__61017;
i__60430_60997 = G__61018;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__60469 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60469,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60469,(1),null);
var seq__60472_61019 = cljs.core.seq(node_children);
var chunk__60474_61020 = null;
var count__60475_61021 = (0);
var i__60476_61022 = (0);
while(true){
if((i__60476_61022 < count__60475_61021)){
var child_struct_61023 = chunk__60474_61020.cljs$core$IIndexed$_nth$arity$2(null,i__60476_61022);
if((!((child_struct_61023 == null)))){
if(typeof child_struct_61023 === 'string'){
var text_61024 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_61024),child_struct_61023].join(''));
} else {
var children_61025 = shadow.dom.svg_node(child_struct_61023);
if(cljs.core.seq_QMARK_(children_61025)){
var seq__60514_61026 = cljs.core.seq(children_61025);
var chunk__60516_61027 = null;
var count__60517_61028 = (0);
var i__60518_61029 = (0);
while(true){
if((i__60518_61029 < count__60517_61028)){
var child_61030 = chunk__60516_61027.cljs$core$IIndexed$_nth$arity$2(null,i__60518_61029);
if(cljs.core.truth_(child_61030)){
node.appendChild(child_61030);


var G__61031 = seq__60514_61026;
var G__61032 = chunk__60516_61027;
var G__61033 = count__60517_61028;
var G__61034 = (i__60518_61029 + (1));
seq__60514_61026 = G__61031;
chunk__60516_61027 = G__61032;
count__60517_61028 = G__61033;
i__60518_61029 = G__61034;
continue;
} else {
var G__61035 = seq__60514_61026;
var G__61036 = chunk__60516_61027;
var G__61037 = count__60517_61028;
var G__61038 = (i__60518_61029 + (1));
seq__60514_61026 = G__61035;
chunk__60516_61027 = G__61036;
count__60517_61028 = G__61037;
i__60518_61029 = G__61038;
continue;
}
} else {
var temp__5753__auto___61041 = cljs.core.seq(seq__60514_61026);
if(temp__5753__auto___61041){
var seq__60514_61042__$1 = temp__5753__auto___61041;
if(cljs.core.chunked_seq_QMARK_(seq__60514_61042__$1)){
var c__4556__auto___61043 = cljs.core.chunk_first(seq__60514_61042__$1);
var G__61044 = cljs.core.chunk_rest(seq__60514_61042__$1);
var G__61045 = c__4556__auto___61043;
var G__61046 = cljs.core.count(c__4556__auto___61043);
var G__61047 = (0);
seq__60514_61026 = G__61044;
chunk__60516_61027 = G__61045;
count__60517_61028 = G__61046;
i__60518_61029 = G__61047;
continue;
} else {
var child_61048 = cljs.core.first(seq__60514_61042__$1);
if(cljs.core.truth_(child_61048)){
node.appendChild(child_61048);


var G__61049 = cljs.core.next(seq__60514_61042__$1);
var G__61050 = null;
var G__61051 = (0);
var G__61052 = (0);
seq__60514_61026 = G__61049;
chunk__60516_61027 = G__61050;
count__60517_61028 = G__61051;
i__60518_61029 = G__61052;
continue;
} else {
var G__61053 = cljs.core.next(seq__60514_61042__$1);
var G__61054 = null;
var G__61055 = (0);
var G__61056 = (0);
seq__60514_61026 = G__61053;
chunk__60516_61027 = G__61054;
count__60517_61028 = G__61055;
i__60518_61029 = G__61056;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_61025);
}
}


var G__61057 = seq__60472_61019;
var G__61058 = chunk__60474_61020;
var G__61059 = count__60475_61021;
var G__61060 = (i__60476_61022 + (1));
seq__60472_61019 = G__61057;
chunk__60474_61020 = G__61058;
count__60475_61021 = G__61059;
i__60476_61022 = G__61060;
continue;
} else {
var G__61061 = seq__60472_61019;
var G__61062 = chunk__60474_61020;
var G__61063 = count__60475_61021;
var G__61064 = (i__60476_61022 + (1));
seq__60472_61019 = G__61061;
chunk__60474_61020 = G__61062;
count__60475_61021 = G__61063;
i__60476_61022 = G__61064;
continue;
}
} else {
var temp__5753__auto___61065 = cljs.core.seq(seq__60472_61019);
if(temp__5753__auto___61065){
var seq__60472_61066__$1 = temp__5753__auto___61065;
if(cljs.core.chunked_seq_QMARK_(seq__60472_61066__$1)){
var c__4556__auto___61067 = cljs.core.chunk_first(seq__60472_61066__$1);
var G__61068 = cljs.core.chunk_rest(seq__60472_61066__$1);
var G__61069 = c__4556__auto___61067;
var G__61070 = cljs.core.count(c__4556__auto___61067);
var G__61071 = (0);
seq__60472_61019 = G__61068;
chunk__60474_61020 = G__61069;
count__60475_61021 = G__61070;
i__60476_61022 = G__61071;
continue;
} else {
var child_struct_61073 = cljs.core.first(seq__60472_61066__$1);
if((!((child_struct_61073 == null)))){
if(typeof child_struct_61073 === 'string'){
var text_61074 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_61074),child_struct_61073].join(''));
} else {
var children_61075 = shadow.dom.svg_node(child_struct_61073);
if(cljs.core.seq_QMARK_(children_61075)){
var seq__60529_61076 = cljs.core.seq(children_61075);
var chunk__60531_61077 = null;
var count__60532_61078 = (0);
var i__60533_61079 = (0);
while(true){
if((i__60533_61079 < count__60532_61078)){
var child_61080 = chunk__60531_61077.cljs$core$IIndexed$_nth$arity$2(null,i__60533_61079);
if(cljs.core.truth_(child_61080)){
node.appendChild(child_61080);


var G__61081 = seq__60529_61076;
var G__61082 = chunk__60531_61077;
var G__61083 = count__60532_61078;
var G__61084 = (i__60533_61079 + (1));
seq__60529_61076 = G__61081;
chunk__60531_61077 = G__61082;
count__60532_61078 = G__61083;
i__60533_61079 = G__61084;
continue;
} else {
var G__61085 = seq__60529_61076;
var G__61086 = chunk__60531_61077;
var G__61087 = count__60532_61078;
var G__61088 = (i__60533_61079 + (1));
seq__60529_61076 = G__61085;
chunk__60531_61077 = G__61086;
count__60532_61078 = G__61087;
i__60533_61079 = G__61088;
continue;
}
} else {
var temp__5753__auto___61089__$1 = cljs.core.seq(seq__60529_61076);
if(temp__5753__auto___61089__$1){
var seq__60529_61090__$1 = temp__5753__auto___61089__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60529_61090__$1)){
var c__4556__auto___61091 = cljs.core.chunk_first(seq__60529_61090__$1);
var G__61092 = cljs.core.chunk_rest(seq__60529_61090__$1);
var G__61093 = c__4556__auto___61091;
var G__61094 = cljs.core.count(c__4556__auto___61091);
var G__61095 = (0);
seq__60529_61076 = G__61092;
chunk__60531_61077 = G__61093;
count__60532_61078 = G__61094;
i__60533_61079 = G__61095;
continue;
} else {
var child_61096 = cljs.core.first(seq__60529_61090__$1);
if(cljs.core.truth_(child_61096)){
node.appendChild(child_61096);


var G__61097 = cljs.core.next(seq__60529_61090__$1);
var G__61098 = null;
var G__61099 = (0);
var G__61100 = (0);
seq__60529_61076 = G__61097;
chunk__60531_61077 = G__61098;
count__60532_61078 = G__61099;
i__60533_61079 = G__61100;
continue;
} else {
var G__61101 = cljs.core.next(seq__60529_61090__$1);
var G__61102 = null;
var G__61103 = (0);
var G__61104 = (0);
seq__60529_61076 = G__61101;
chunk__60531_61077 = G__61102;
count__60532_61078 = G__61103;
i__60533_61079 = G__61104;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_61075);
}
}


var G__61105 = cljs.core.next(seq__60472_61066__$1);
var G__61106 = null;
var G__61107 = (0);
var G__61108 = (0);
seq__60472_61019 = G__61105;
chunk__60474_61020 = G__61106;
count__60475_61021 = G__61107;
i__60476_61022 = G__61108;
continue;
} else {
var G__61110 = cljs.core.next(seq__60472_61066__$1);
var G__61111 = null;
var G__61112 = (0);
var G__61113 = (0);
seq__60472_61019 = G__61110;
chunk__60474_61020 = G__61111;
count__60475_61021 = G__61112;
i__60476_61022 = G__61113;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61116 = arguments.length;
var i__4737__auto___61117 = (0);
while(true){
if((i__4737__auto___61117 < len__4736__auto___61116)){
args__4742__auto__.push((arguments[i__4737__auto___61117]));

var G__61118 = (i__4737__auto___61117 + (1));
i__4737__auto___61117 = G__61118;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq60554){
var G__60555 = cljs.core.first(seq60554);
var seq60554__$1 = cljs.core.next(seq60554);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60555,seq60554__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__60565 = arguments.length;
switch (G__60565) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__57480__auto___61125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_60574){
var state_val_60575 = (state_60574[(1)]);
if((state_val_60575 === (1))){
var state_60574__$1 = state_60574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60574__$1,(2),once_or_cleanup);
} else {
if((state_val_60575 === (2))){
var inst_60571 = (state_60574[(2)]);
var inst_60572 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_60574__$1 = (function (){var statearr_60576 = state_60574;
(statearr_60576[(7)] = inst_60571);

return statearr_60576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60574__$1,inst_60572);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__57129__auto__ = null;
var shadow$dom$state_machine__57129__auto____0 = (function (){
var statearr_60577 = [null,null,null,null,null,null,null,null];
(statearr_60577[(0)] = shadow$dom$state_machine__57129__auto__);

(statearr_60577[(1)] = (1));

return statearr_60577;
});
var shadow$dom$state_machine__57129__auto____1 = (function (state_60574){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_60574);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e60578){var ex__57132__auto__ = e60578;
var statearr_60579_61127 = state_60574;
(statearr_60579_61127[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_60574[(4)]))){
var statearr_60580_61128 = state_60574;
(statearr_60580_61128[(1)] = cljs.core.first((state_60574[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61133 = state_60574;
state_60574 = G__61133;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
shadow$dom$state_machine__57129__auto__ = function(state_60574){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__57129__auto____0.call(this);
case 1:
return shadow$dom$state_machine__57129__auto____1.call(this,state_60574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__57129__auto____0;
shadow$dom$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__57129__auto____1;
return shadow$dom$state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_60581 = f__57481__auto__();
(statearr_60581[(6)] = c__57480__auto___61125);

return statearr_60581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
