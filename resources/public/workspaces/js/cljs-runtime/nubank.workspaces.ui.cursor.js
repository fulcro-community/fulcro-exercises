goog.provide('nubank.workspaces.ui.cursor');
nubank.workspaces.ui.cursor.get_nth = (function nubank$workspaces$ui$cursor$get_nth(i,s){
return cljs.core.first(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(i,s));
});
nubank.workspaces.ui.cursor.seq_prev = (function nubank$workspaces$ui$cursor$seq_prev(current,items){
var index = items.indexOf(current);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),index)){
return cljs.core.first(items);
} else {
var item_count = cljs.core.count(items);
var next_index = cljs.core.mod(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),index))?(item_count - (1)):(index - (1))),item_count);
return nubank.workspaces.ui.cursor.get_nth(next_index,items);
}
});
nubank.workspaces.ui.cursor.seq_next = (function nubank$workspaces$ui$cursor$seq_next(current,items){
var selected_index = items.indexOf(current);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),selected_index)){
return cljs.core.first(items);
} else {
var item_count = cljs.core.count(items);
var next_index = cljs.core.mod(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_index,(item_count - (1))))?(0):(selected_index + (1))),item_count);
return nubank.workspaces.ui.cursor.get_nth(next_index,items);
}
});
nubank.workspaces.ui.cursor.scroll_up = (function nubank$workspaces$ui$cursor$scroll_up(options,container,item){
if(cljs.core.truth_(item)){
if((!((((goog.object.get(container,"scrollTop") <= goog.object.get(item,"offsetTop"))) && ((goog.object.get(item,"offsetTop") <= (goog.object.get(container,"scrollTop") + goog.object.get(container,"offsetHeight")))))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(options),cljs.core.next)){
return goog.object.set(container,"scrollTop",goog.object.get(container,"scrollHeight"));
} else {
return goog.object.set(container,"scrollTop",goog.object.get(item,"offsetTop"));
}
} else {
return null;
}
} else {
return null;
}
});
nubank.workspaces.ui.cursor.scroll_down = (function nubank$workspaces$ui$cursor$scroll_down(options,container,item){
if(cljs.core.truth_(item)){
var item_bottom = (goog.object.get(item,"offsetTop") + goog.object.get(item,"scrollHeight"));
if((!((((goog.object.get(container,"scrollTop") <= item_bottom)) && ((item_bottom <= (goog.object.get(container,"scrollTop") + goog.object.get(container,"offsetHeight")))))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(options),cljs.core.next)){
return goog.object.set(container,"scrollTop",(0));
} else {
return goog.object.set(container,"scrollTop",(item_bottom - goog.object.get(container,"offsetHeight")));
}
} else {
return null;
}
} else {
return null;
}
});
nubank.workspaces.ui.cursor.dom_props = (function nubank$workspaces$ui$cursor$dom_props(props){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.first)),props);
});

var options__55349__auto___72184 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null)], null),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
var map__72097 = com.fulcrologic.fulcro.components.props(this$);
var map__72097__$1 = (((((!((map__72097 == null))))?(((((map__72097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72097):map__72097);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72097__$1,new cljs.core.Keyword("nubank.workspaces.ui.cursor","options","nubank.workspaces.ui.cursor/options",-450932746));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72097__$1,new cljs.core.Keyword("nubank.workspaces.ui.cursor","value","nubank.workspaces.ui.cursor/value",-199258490));
var value__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72097__$1,new cljs.core.Keyword("nubank.workspaces.ui.cursor","value->key","nubank.workspaces.ui.cursor/value->key",-977103990));
return nubank.workspaces.ui.cursor.scroll_down(options,goog.object.get(this$,"container"),goog.object.get(this$,["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((value__GT_key.cljs$core$IFn$_invoke$arity$1 ? value__GT_key.cljs$core$IFn$_invoke$arity$1(value) : value__GT_key.call(null,value)))].join('')));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$cursor$render_VerticalCursor(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__72105 = com.fulcrologic.fulcro.components.props(this$);
var map__72105__$1 = (((((!((map__72105 == null))))?(((((map__72105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72105):map__72105);
var props = map__72105__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72105__$1,new cljs.core.Keyword("nubank.workspaces.ui.cursor","options","nubank.workspaces.ui.cursor/options",-450932746));
var factory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72105__$1,new cljs.core.Keyword("nubank.workspaces.ui.cursor","factory","nubank.workspaces.ui.cursor/factory",-385580505));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72105__$1,new cljs.core.Keyword("nubank.workspaces.ui.cursor","on-change","nubank.workspaces.ui.cursor/on-change",-265764398));
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72105__$1,new cljs.core.Keyword("nubank.workspaces.ui.cursor","on-select","nubank.workspaces.ui.cursor/on-select",360128875));
var value__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72105__$1,new cljs.core.Keyword("nubank.workspaces.ui.cursor","value->key","nubank.workspaces.ui.cursor/value->key",-977103990),cljs.core.pr_str);
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),nubank.workspaces.ui.cursor.dom_props(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__72093_SHARP_){
return goog.object.set(this$,"container",p1__72093_SHARP_);
}))),nubank.workspaces.ui.events.dom_listener(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),"up",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (e){
e.preventDefault();

var map__72112 = com.fulcrologic.fulcro.components.props(this$);
var map__72112__$1 = (((((!((map__72112 == null))))?(((((map__72112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72112):map__72112);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72112__$1,new cljs.core.Keyword("nubank.workspaces.ui.cursor","value","nubank.workspaces.ui.cursor/value",-199258490));
var options__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72112__$1,new cljs.core.Keyword("nubank.workspaces.ui.cursor","options","nubank.workspaces.ui.cursor/options",-450932746));
var next = nubank.workspaces.ui.cursor.seq_prev(value,options__$1);
var container = goog.object.get(this$,"container");
var item = goog.object.get(this$,["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((value__GT_key.cljs$core$IFn$_invoke$arity$1 ? value__GT_key.cljs$core$IFn$_invoke$arity$1(next) : value__GT_key.call(null,next)))].join(''));
if(cljs.core.truth_((function (){var and__4115__auto__ = container;
if(cljs.core.truth_(and__4115__auto__)){
return item;
} else {
return and__4115__auto__;
}
})())){
nubank.workspaces.ui.cursor.scroll_up(options__$1,container,item);

return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(next,e) : on_change.call(null,next,e));
} else {
return null;
}
})], 0))),nubank.workspaces.ui.events.dom_listener(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),"down",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (e){
e.preventDefault();

var map__72122 = com.fulcrologic.fulcro.components.props(this$);
var map__72122__$1 = (((((!((map__72122 == null))))?(((((map__72122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72122):map__72122);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72122__$1,new cljs.core.Keyword("nubank.workspaces.ui.cursor","value","nubank.workspaces.ui.cursor/value",-199258490));
var options__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72122__$1,new cljs.core.Keyword("nubank.workspaces.ui.cursor","options","nubank.workspaces.ui.cursor/options",-450932746));
var next = nubank.workspaces.ui.cursor.seq_next(value,options__$1);
var container = goog.object.get(this$,"container");
var item = goog.object.get(this$,["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((value__GT_key.cljs$core$IFn$_invoke$arity$1 ? value__GT_key.cljs$core$IFn$_invoke$arity$1(next) : value__GT_key.call(null,next)))].join(''));
if(cljs.core.truth_((function (){var and__4115__auto__ = container;
if(cljs.core.truth_(and__4115__auto__)){
return item;
} else {
return and__4115__auto__;
}
})())){
nubank.workspaces.ui.cursor.scroll_down(options__$1,container,item);

return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(next,e) : on_change.call(null,next,e));
} else {
return null;
}
})], 0))),nubank.workspaces.ui.events.dom_listener(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),"return",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (p1__72094_SHARP_){
var G__72135 = new cljs.core.Keyword("nubank.workspaces.ui.cursor","value","nubank.workspaces.ui.cursor/value",-199258490).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.props(this$));
var G__72136 = p1__72094_SHARP_;
return (on_select.cljs$core$IFn$_invoke$arity$2 ? on_select.cljs$core$IFn$_invoke$arity$2(G__72135,G__72136) : on_select.call(null,G__72135,G__72136));
})], 0))),nubank.workspaces.ui.events.dom_listener(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),"escape",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (p1__72095_SHARP_){
return (on_select.cljs$core$IFn$_invoke$arity$2 ? on_select.cljs$core$IFn$_invoke$arity$2(null,p1__72095_SHARP_) : on_select.call(null,null,p1__72095_SHARP_));
})], 0))),(function (){var iter__4529__auto__ = (function nubank$workspaces$ui$cursor$render_VerticalCursor_$_iter__72140(s__72141){
return (new cljs.core.LazySeq(null,(function (){
var s__72141__$1 = s__72141;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__72141__$1);
if(temp__5753__auto__){
var s__72141__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72141__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__72141__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__72143 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__72142 = (0);
while(true){
if((i__72142 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__72142);
cljs.core.chunk_append(b__72143,com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(value__GT_key.cljs$core$IFn$_invoke$arity$1 ? value__GT_key.cljs$core$IFn$_invoke$arity$1(x) : value__GT_key.call(null,x)),new cljs.core.Keyword(null,"ref","ref",1289896967),((function (i__72142,x,c__4527__auto__,size__4528__auto__,b__72143,s__72141__$2,temp__5753__auto__,map__72105,map__72105__$1,props,options,factory,on_change,on_select,value__GT_key){
return (function (p1__72096_SHARP_){
return goog.object.set(this$,["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((value__GT_key.cljs$core$IFn$_invoke$arity$1 ? value__GT_key.cljs$core$IFn$_invoke$arity$1(x) : value__GT_key.call(null,x)))].join(''),p1__72096_SHARP_);
});})(i__72142,x,c__4527__auto__,size__4528__auto__,b__72143,s__72141__$2,temp__5753__auto__,map__72105,map__72105__$1,props,options,factory,on_change,on_select,value__GT_key))
], null),(factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(x) : factory.call(null,x))], 0)));

var G__72232 = (i__72142 + (1));
i__72142 = G__72232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72143),nubank$workspaces$ui$cursor$render_VerticalCursor_$_iter__72140(cljs.core.chunk_rest(s__72141__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72143),null);
}
} else {
var x = cljs.core.first(s__72141__$2);
return cljs.core.cons(com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(value__GT_key.cljs$core$IFn$_invoke$arity$1 ? value__GT_key.cljs$core$IFn$_invoke$arity$1(x) : value__GT_key.call(null,x)),new cljs.core.Keyword(null,"ref","ref",1289896967),((function (x,s__72141__$2,temp__5753__auto__,map__72105,map__72105__$1,props,options,factory,on_change,on_select,value__GT_key){
return (function (p1__72096_SHARP_){
return goog.object.set(this$,["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((value__GT_key.cljs$core$IFn$_invoke$arity$1 ? value__GT_key.cljs$core$IFn$_invoke$arity$1(x) : value__GT_key.call(null,x)))].join(''),p1__72096_SHARP_);
});})(x,s__72141__$2,temp__5753__auto__,map__72105,map__72105__$1,props,options,factory,on_change,on_select,value__GT_key))
], null),(factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(x) : factory.call(null,x))], 0)),nubank$workspaces$ui$cursor$render_VerticalCursor_$_iter__72140(cljs.core.rest(s__72141__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(options);
})()], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.cursor !== 'undefined') && (typeof nubank.workspaces.ui.cursor.VerticalCursor !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.cursor.VerticalCursor = (function nubank$workspaces$ui$cursor$VerticalCursor(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___72239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___72184,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___72239)){
var init_state__55352__auto___72240 = temp__5751__auto___72239;
(this__55351__auto__.state = (function (){var obj72160 = ({"fulcro$state":(function (){var G__72161 = this__55351__auto__;
var G__72162 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___72240.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___72240.cljs$core$IFn$_invoke$arity$2(G__72161,G__72162) : init_state__55352__auto___72240.call(null,G__72161,G__72162));
})()});
return obj72160;
})());
} else {
(this__55351__auto__.state = (function (){var obj72168 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj72168;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.cursor.VerticalCursor,new cljs.core.Keyword("nubank.workspaces.ui.cursor","VerticalCursor","nubank.workspaces.ui.cursor/VerticalCursor",-730196582),options__55349__auto___72184);
nubank.workspaces.ui.cursor.vertical_cursor = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.cursor.VerticalCursor);

//# sourceMappingURL=nubank.workspaces.ui.cursor.js.map
