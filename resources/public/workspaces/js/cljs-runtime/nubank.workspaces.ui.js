goog.provide('nubank.workspaces.ui');
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.components_with_error !== 'undefined')){
} else {
nubank.workspaces.ui.components_with_error = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
nubank.workspaces.ui.default_bindings = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("nubank.workspaces.ui","keybinding-toggle-index","nubank.workspaces.ui/keybinding-toggle-index",2077220551),"alt-shift-i",new cljs.core.Keyword("nubank.workspaces.ui","keybinding-spotlight","nubank.workspaces.ui/keybinding-spotlight",254588049),"alt-shift-a",new cljs.core.Keyword("nubank.workspaces.ui","keybinding-toggle-card-headers","nubank.workspaces.ui/keybinding-toggle-card-headers",1763073649),"alt-shift-h",new cljs.core.Keyword("nubank.workspaces.ui","keybinding-new-workspace","nubank.workspaces.ui/keybinding-new-workspace",-1840796647),"alt-shift-n",new cljs.core.Keyword("nubank.workspaces.ui","keybinding-close-workspace","nubank.workspaces.ui/keybinding-close-workspace",145944058),"alt-shift-w",new cljs.core.Keyword("nubank.workspaces.ui","keybinding-fix-sizes","nubank.workspaces.ui/keybinding-fix-sizes",1615114381),"alt-shift-s"], null);
nubank.workspaces.ui.get_keybinding = (function nubank$workspaces$ui$get_keybinding(name){
return nubank.workspaces.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2(name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.default_bindings,name));
});
nubank.workspaces.ui.card_title = (function nubank$workspaces$ui$card_title(card_id){
return cljs.core.name(card_id);
});
nubank.workspaces.ui.card_changed_QMARK_ = (function nubank$workspaces$ui$card_changed_QMARK_(card_id){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nubank.workspaces.data.card_definitions_snap_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_id,new cljs.core.Keyword("nubank.workspaces.model","card-form","nubank.workspaces.model/card-form",2147473)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nubank.workspaces.data.card_definitions_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_id,new cljs.core.Keyword("nubank.workspaces.model","card-form","nubank.workspaces.model/card-form",2147473)], null)));
});
nubank.workspaces.ui.use_card = (function nubank$workspaces$ui$use_card(card_id,node,reconciler){
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nubank.workspaces.data.active_cards_STAR_),card_id);
if(cljs.core.truth_(temp__5751__auto__)){
var active = temp__5751__auto__;
return active;
} else {
var temp__5751__auto____$1 = nubank.workspaces.data.card_definition(card_id);
if(cljs.core.truth_(temp__5751__auto____$1)){
var map__72340 = temp__5751__auto____$1;
var map__72340__$1 = (((((!((map__72340 == null))))?(((((map__72340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72340):map__72340);
var card_def = map__72340__$1;
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72340__$1,new cljs.core.Keyword("nubank.workspaces.model","init","nubank.workspaces.model/init",-1281528358));
var card = (function (){var G__72342 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([card_def,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("nubank.workspaces.model","node","nubank.workspaces.model/node",-2144506134),node,new cljs.core.Keyword("nubank.workspaces.model","reconciler","nubank.workspaces.model/reconciler",794444150),reconciler,new cljs.core.Keyword("nubank.workspaces.model","set-card-header-style","nubank.workspaces.model/set-card-header-style",1976817478),(function (style){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.model","card-header-style","nubank.workspaces.model/card-header-style",534442797),null,(1),null)),(new cljs.core.List(null,style,null,(1),null)))))),null,(1),null)))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),card_id], null)], null));
})], null)], 0));
return (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(G__72342) : init.call(null,G__72342));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nubank.workspaces.data.active_cards_STAR_,cljs.core.assoc,card_id,card);

return card;
} else {
return console.warn("Card card-id",card_id,"not found");
}
}
});
nubank.workspaces.ui.dispose_card = (function nubank$workspaces$ui$dispose_card(card_id){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nubank.workspaces.data.active_cards_STAR_),card_id);
if(cljs.core.truth_(temp__5753__auto__)){
var map__72346 = temp__5753__auto__;
var map__72346__$1 = (((((!((map__72346 == null))))?(((((map__72346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72346):map__72346);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72346__$1,new cljs.core.Keyword("nubank.workspaces.model","node","nubank.workspaces.model/node",-2144506134));
var dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72346__$1,new cljs.core.Keyword("nubank.workspaces.model","dispose","nubank.workspaces.model/dispose",829517204));
if(cljs.core.truth_(dispose)){
(dispose.cljs$core$IFn$_invoke$arity$1 ? dispose.cljs$core$IFn$_invoke$arity$1(node) : dispose.call(null,node));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nubank.workspaces.data.active_cards_STAR_,cljs.core.dissoc,card_id);
} else {
return null;
}
});
nubank.workspaces.ui.render_card = (function nubank$workspaces$ui$render_card(p__72358){
var map__72359 = p__72358;
var map__72359__$1 = (((((!((map__72359 == null))))?(((((map__72359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72359):map__72359);
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72359__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72359__$1,new cljs.core.Keyword("nubank.workspaces.model","component","nubank.workspaces.model/component",-1201359926));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72359__$1,new cljs.core.Keyword("nubank.workspaces.model","node","nubank.workspaces.model/node",-2144506134));
var map__72361 = nubank.workspaces.ui.use_card(card_id,node,com.fulcrologic.fulcro.components.any__GT_app(component));
var map__72361__$1 = (((((!((map__72361 == null))))?(((((map__72361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72361):map__72361);
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72361__$1,new cljs.core.Keyword("nubank.workspaces.model","render","nubank.workspaces.model/render",125050774));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(nubank.workspaces.data.active_cards_STAR_,cljs.core.update,card_id,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.model","node","nubank.workspaces.model/node",-2144506134),node,new cljs.core.Keyword("nubank.workspaces.model","component","nubank.workspaces.model/component",-1201359926),component], 0));

return (render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(node) : render.call(null,node));
});
nubank.workspaces.ui.refresh_card_container = (function nubank$workspaces$ui$refresh_card_container(card_id){
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.data.active_card(card_id),new cljs.core.Keyword("nubank.workspaces.model","component","nubank.workspaces.model/component",-1201359926));
if(cljs.core.truth_(temp__5751__auto__)){
var comp = temp__5751__auto__;
return comp.forceUpdate();
} else {
return null;
}
});
nubank.workspaces.ui.restart_card = (function nubank$workspaces$ui$restart_card(card_id){
var old_card = nubank.workspaces.data.active_card(card_id);
nubank.workspaces.ui.dispose_card(card_id);

nubank.workspaces.ui.render_card(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_card,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),card_id));

return nubank.workspaces.ui.refresh_card_container(card_id);
});
nubank.workspaces.ui.workspace_card_ids = (function nubank$workspaces$ui$workspace_card_ids(p__72369){
var map__72370 = p__72369;
var map__72370__$1 = (((((!((map__72370 == null))))?(((((map__72370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72370):map__72370);
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72370__$1,new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701));
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72370__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
if(cljs.core.truth_(cards)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second),cards);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([card_id]);
}
});
nubank.workspaces.ui.refresh_cards = (function nubank$workspaces$ui$refresh_cards(var_args){
var G__72374 = arguments.length;
switch (G__72374) {
case 1:
return nubank.workspaces.ui.refresh_cards.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nubank.workspaces.ui.refresh_cards.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nubank.workspaces.ui.refresh_cards.cljs$core$IFn$_invoke$arity$1 = (function (cards){
return nubank.workspaces.ui.refresh_cards.cljs$core$IFn$_invoke$arity$2(cards,true);
}));

(nubank.workspaces.ui.refresh_cards.cljs$core$IFn$_invoke$arity$2 = (function (cards,check_changes_QMARK_){
var seq__72377_73241 = cljs.core.seq(cards);
var chunk__72378_73242 = null;
var count__72379_73243 = (0);
var i__72380_73244 = (0);
while(true){
if((i__72380_73244 < count__72379_73243)){
var vec__72400_73245 = chunk__72378_73242.cljs$core$IIndexed$_nth$arity$2(null,i__72380_73244);
var card_id_73246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72400_73245,(0),null);
var map__72403_73247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72400_73245,(1),null);
var map__72403_73248__$1 = (((((!((map__72403_73247 == null))))?(((((map__72403_73247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72403_73247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72403_73247):map__72403_73247);
var node_73249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72403_73248__$1,new cljs.core.Keyword("nubank.workspaces.model","node","nubank.workspaces.model/node",-2144506134));
var refresh_73250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72403_73248__$1,new cljs.core.Keyword("nubank.workspaces.model","refresh","nubank.workspaces.model/refresh",-816174567));
try{if(cljs.core.truth_((function (){var and__4115__auto__ = check_changes_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return nubank.workspaces.ui.card_changed_QMARK_(card_id_73246);
} else {
return and__4115__auto__;
}
})())){
nubank.workspaces.ui.restart_card(card_id_73246);
} else {
if(cljs.core.truth_(refresh_73250)){
(refresh_73250.cljs$core$IFn$_invoke$arity$1 ? refresh_73250.cljs$core$IFn$_invoke$arity$1(node_73249) : refresh_73250.call(null,node_73249));
} else {
}
}
}catch (e72405){var e_73251 = e72405;
console.error("Error refreshing card",card_id_73246,e_73251);
}

var G__73252 = seq__72377_73241;
var G__73253 = chunk__72378_73242;
var G__73254 = count__72379_73243;
var G__73255 = (i__72380_73244 + (1));
seq__72377_73241 = G__73252;
chunk__72378_73242 = G__73253;
count__72379_73243 = G__73254;
i__72380_73244 = G__73255;
continue;
} else {
var temp__5753__auto___73256 = cljs.core.seq(seq__72377_73241);
if(temp__5753__auto___73256){
var seq__72377_73257__$1 = temp__5753__auto___73256;
if(cljs.core.chunked_seq_QMARK_(seq__72377_73257__$1)){
var c__4556__auto___73259 = cljs.core.chunk_first(seq__72377_73257__$1);
var G__73263 = cljs.core.chunk_rest(seq__72377_73257__$1);
var G__73264 = c__4556__auto___73259;
var G__73265 = cljs.core.count(c__4556__auto___73259);
var G__73266 = (0);
seq__72377_73241 = G__73263;
chunk__72378_73242 = G__73264;
count__72379_73243 = G__73265;
i__72380_73244 = G__73266;
continue;
} else {
var vec__72407_73268 = cljs.core.first(seq__72377_73257__$1);
var card_id_73269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72407_73268,(0),null);
var map__72410_73270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72407_73268,(1),null);
var map__72410_73271__$1 = (((((!((map__72410_73270 == null))))?(((((map__72410_73270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72410_73270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72410_73270):map__72410_73270);
var node_73272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72410_73271__$1,new cljs.core.Keyword("nubank.workspaces.model","node","nubank.workspaces.model/node",-2144506134));
var refresh_73273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72410_73271__$1,new cljs.core.Keyword("nubank.workspaces.model","refresh","nubank.workspaces.model/refresh",-816174567));
try{if(cljs.core.truth_((function (){var and__4115__auto__ = check_changes_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return nubank.workspaces.ui.card_changed_QMARK_(card_id_73269);
} else {
return and__4115__auto__;
}
})())){
nubank.workspaces.ui.restart_card(card_id_73269);
} else {
if(cljs.core.truth_(refresh_73273)){
(refresh_73273.cljs$core$IFn$_invoke$arity$1 ? refresh_73273.cljs$core$IFn$_invoke$arity$1(node_73272) : refresh_73273.call(null,node_73272));
} else {
}
}
}catch (e72414){var e_73276 = e72414;
console.error("Error refreshing card",card_id_73269,e_73276);
}

var G__73277 = cljs.core.next(seq__72377_73257__$1);
var G__73278 = null;
var G__73279 = (0);
var G__73280 = (0);
seq__72377_73241 = G__73277;
chunk__72378_73242 = G__73278;
count__72379_73243 = G__73279;
i__72380_73244 = G__73280;
continue;
}
} else {
}
}
break;
}

var seq__72415_73283 = cljs.core.seq(cljs.core.deref(nubank.workspaces.ui.components_with_error));
var chunk__72416_73284 = null;
var count__72417_73285 = (0);
var i__72418_73286 = (0);
while(true){
if((i__72418_73286 < count__72417_73285)){
var comp_73290 = chunk__72416_73284.cljs$core$IIndexed$_nth$arity$2(null,i__72418_73286);
com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(comp_73290,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","error-catch?","nubank.workspaces.ui/error-catch?",1438279944),false], null));


var G__73292 = seq__72415_73283;
var G__73293 = chunk__72416_73284;
var G__73294 = count__72417_73285;
var G__73295 = (i__72418_73286 + (1));
seq__72415_73283 = G__73292;
chunk__72416_73284 = G__73293;
count__72417_73285 = G__73294;
i__72418_73286 = G__73295;
continue;
} else {
var temp__5753__auto___73296 = cljs.core.seq(seq__72415_73283);
if(temp__5753__auto___73296){
var seq__72415_73297__$1 = temp__5753__auto___73296;
if(cljs.core.chunked_seq_QMARK_(seq__72415_73297__$1)){
var c__4556__auto___73299 = cljs.core.chunk_first(seq__72415_73297__$1);
var G__73300 = cljs.core.chunk_rest(seq__72415_73297__$1);
var G__73301 = c__4556__auto___73299;
var G__73302 = cljs.core.count(c__4556__auto___73299);
var G__73303 = (0);
seq__72415_73283 = G__73300;
chunk__72416_73284 = G__73301;
count__72417_73285 = G__73302;
i__72418_73286 = G__73303;
continue;
} else {
var comp_73304 = cljs.core.first(seq__72415_73297__$1);
com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(comp_73304,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","error-catch?","nubank.workspaces.ui/error-catch?",1438279944),false], null));


var G__73305 = cljs.core.next(seq__72415_73297__$1);
var G__73306 = null;
var G__73307 = (0);
var G__73308 = (0);
seq__72415_73283 = G__73305;
chunk__72416_73284 = G__73306;
count__72417_73285 = G__73307;
i__72418_73286 = G__73308;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(nubank.workspaces.ui.components_with_error,cljs.core.PersistentHashSet.EMPTY);
}));

(nubank.workspaces.ui.refresh_cards.cljs$lang$maxFixedArity = 2);

nubank.workspaces.ui.active_workspace_cards = (function nubank$workspaces$ui$active_workspace_cards(app){
var temp__5751__auto__ = com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(app);
if(cljs.core.truth_(temp__5751__auto__)){
var state = temp__5751__auto__;
var temp__5751__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814)], null));
if(cljs.core.truth_(temp__5751__auto____$1)){
var ref = temp__5751__auto____$1;
var card_ids = nubank.workspaces.ui.workspace_card_ids(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ref));
return cljs.core.select_keys(cljs.core.deref(nubank.workspaces.data.active_cards_STAR_),card_ids);
} else {
return null;
}
} else {
return null;
}
});
nubank.workspaces.ui.refresh_active_workspace_cards = (function nubank$workspaces$ui$refresh_active_workspace_cards(reconciler){
return nubank.workspaces.ui.refresh_cards.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.active_workspace_cards(reconciler));
});
nubank.workspaces.ui.refresh_active_cards = (function nubank$workspaces$ui$refresh_active_cards(){
return nubank.workspaces.ui.refresh_cards.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nubank.workspaces.data.active_cards_STAR_));
});
nubank.workspaces.ui.lookup_ref = (function nubank$workspaces$ui$lookup_ref(state,ref){
if(cljs.core.vector_QMARK_(ref)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ref);
} else {
return ref;
}
});
nubank.workspaces.ui.normalize_ws_cards = (function nubank$workspaces$ui$normalize_ws_cards(state,ws){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ws,new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701),(function (p1__72430_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.lookup_ref,state),p1__72430_SHARP_);
}));
});
nubank.workspaces.ui.create_workspace_STAR_ = (function nubank$workspaces$ui$create_workspace_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73315 = arguments.length;
var i__4737__auto___73316 = (0);
while(true){
if((i__4737__auto___73316 < len__4736__auto___73315)){
args__4742__auto__.push((arguments[i__4737__auto___73316]));

var G__73318 = (i__4737__auto___73316 + (1));
i__4737__auto___73316 = G__73318;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return nubank.workspaces.ui.create_workspace_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(nubank.workspaces.ui.create_workspace_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__72434,ws,args){
var map__72435 = p__72434;
var map__72435__$1 = (((((!((map__72435 == null))))?(((((map__72435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72435):map__72435);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72435__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72435__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ws__$1 = com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.Workspace,ws);
cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_,app,nubank.workspaces.ui.Workspace,nubank.workspaces.ui.normalize_ws_cards(cljs.core.deref(state),ws__$1),new cljs.core.Keyword(null,"append","append",-291298229),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-root","nubank.workspaces.ui/workspace-root",695328612),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","workspaces","nubank.workspaces.ui/workspaces",1165878450)], null),args], 0));

return ws__$1;
}));

(nubank.workspaces.ui.create_workspace_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nubank.workspaces.ui.create_workspace_STAR_.cljs$lang$applyTo = (function (seq72431){
var G__72432 = cljs.core.first(seq72431);
var seq72431__$1 = cljs.core.next(seq72431);
var G__72433 = cljs.core.first(seq72431__$1);
var seq72431__$2 = cljs.core.next(seq72431__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72432,G__72433,seq72431__$2);
}));

nubank.workspaces.ui.save_local_workspace = (function nubank$workspaces$ui$save_local_workspace(p__72443){
var map__72444 = p__72443;
var map__72444__$1 = (((((!((map__72444 == null))))?(((((map__72444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72444):map__72444);
var workspace = map__72444__$1;
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72444__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
nubank.workspaces.lib.local_storage.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([workspace_id], 0));

nubank.workspaces.lib.local_storage.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("nubank.workspaces.ui","local-workspaces","nubank.workspaces.ui/local-workspaces",-1846378387),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([workspace_id], 0));

nubank.workspaces.lib.local_storage.tset_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),workspace_id], null),cljs.core.select_keys(workspace,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716)], null)));

return workspace;
});
nubank.workspaces.ui.active_workspace_ref = (function nubank$workspaces$ui$active_workspace_ref(p__72446){
var map__72449 = p__72446;
var map__72449__$1 = (((((!((map__72449 == null))))?(((((map__72449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72449):map__72449);
var env = map__72449__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72449__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814)], null));
if(cljs.core.truth_(temp__5751__auto__)){
var ref = temp__5751__auto__;
return ref;
} else {
var ws = nubank.workspaces.ui.create_workspace_STAR_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447)], null),new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814)], null)], 0));
nubank.workspaces.lib.local_storage.set_BANG_(new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858).cljs$core$IFn$_invoke$arity$1(ws));

nubank.workspaces.ui.save_local_workspace(ws);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858).cljs$core$IFn$_invoke$arity$1(ws)], null);
}
});
nubank.workspaces.ui.map_values = (function nubank$workspaces$ui$map_values(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__72454){
var vec__72456 = p__72454;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72456,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72456,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
nubank.workspaces.ui.all_referenced_cards = (function nubank$workspaces$ui$all_referenced_cards(state){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (card_ids,ws_ref){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(card_ids,nubank.workspaces.ui.workspace_card_ids(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ws_ref)));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447)], null)));
});
nubank.workspaces.ui.disposed_unreferenced_cards = (function nubank$workspaces$ui$disposed_unreferenced_cards(state,card_ids){
var seq__72459 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(card_ids,nubank.workspaces.ui.all_referenced_cards(state)));
var chunk__72460 = null;
var count__72461 = (0);
var i__72462 = (0);
while(true){
if((i__72462 < count__72461)){
var unreferenced_card_id = chunk__72460.cljs$core$IIndexed$_nth$arity$2(null,i__72462);
nubank.workspaces.ui.dispose_card(unreferenced_card_id);


var G__73334 = seq__72459;
var G__73335 = chunk__72460;
var G__73336 = count__72461;
var G__73337 = (i__72462 + (1));
seq__72459 = G__73334;
chunk__72460 = G__73335;
count__72461 = G__73336;
i__72462 = G__73337;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__72459);
if(temp__5753__auto__){
var seq__72459__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72459__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__72459__$1);
var G__73338 = cljs.core.chunk_rest(seq__72459__$1);
var G__73339 = c__4556__auto__;
var G__73340 = cljs.core.count(c__4556__auto__);
var G__73341 = (0);
seq__72459 = G__73338;
chunk__72460 = G__73339;
count__72461 = G__73340;
i__72462 = G__73341;
continue;
} else {
var unreferenced_card_id = cljs.core.first(seq__72459__$1);
nubank.workspaces.ui.dispose_card(unreferenced_card_id);


var G__73342 = cljs.core.next(seq__72459__$1);
var G__73343 = null;
var G__73344 = (0);
var G__73345 = (0);
seq__72459 = G__73342;
chunk__72460 = G__73343;
count__72461 = G__73344;
i__72462 = G__73345;
continue;
}
} else {
return null;
}
}
break;
}
});
nubank.workspaces.ui.remove_workspace_card = (function nubank$workspaces$ui$remove_workspace_card(workspace,card_id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(workspace,new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701),(function (cards){
return cljs.core.filterv((function (p1__72469_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__72469_SHARP_),card_id);
}),cards);
})),new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716),(function (breakpoints){
return nubank.workspaces.ui.map_values((function (layouts){
return cljs.core.filterv((function (p1__72470_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__72470_SHARP_,"i"),card_id);
}),layouts);
}),breakpoints);
}));
});
/**
 * 
 */
nubank.workspaces.ui.remove_card_from_active_ns = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","remove-card-from-active-ns","nubank.workspaces.ui/remove-card-from-active-ns",-2013077344,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","remove-card-from-active-ns","nubank.workspaces.ui/remove-card-from-active-ns",-2013077344,null),(function (fulcro_mutation_env_symbol){
var map__72475 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__72475__$1 = (((((!((map__72475 == null))))?(((((map__72475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72475):map__72475);
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72475__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),(function nubank$workspaces$ui$refresh(_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701)], null);
}),new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__72480){
var map__72481 = p__72480;
var map__72481__$1 = (((((!((map__72481 == null))))?(((((map__72481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72481):map__72481);
var env = map__72481__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72481__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__72483_73354 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72484_73355 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72484_73355);

try{var ws_ref_73357 = nubank.workspaces.ui.active_workspace_ref(env);
var current_ws_73358 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ws_ref_73357);
if(cljs.core.contains_QMARK_(nubank.workspaces.ui.workspace_card_ids(current_ws_73358),card_id)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,ws_ref_73357,(function (p1__72474_SHARP_){
return nubank.workspaces.ui.remove_workspace_card(p1__72474_SHARP_,card_id);
}));

nubank.workspaces.ui.disposed_unreferenced_cards(cljs.core.deref(state),cljs.core.PersistentHashSet.createAsIfByAssoc([card_id]));
} else {
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72483_73354);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__72485 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72486 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72486);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72485);
}})], null);
}));

var options__55349__auto___73365 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function nubank$workspaces$ui$build_raw_initial_state_STAR_(data){
return data;
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$ui$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809)], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),nubank.workspaces.ui.core.color_white,new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 4px 9px 0 rgba(0,0,0,0.02)",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),nubank.workspaces.ui.core.card_border_radius,new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),nubank.workspaces.ui.core.font_os12sb,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"background","background",-863952629),nubank.workspaces.ui.core.color_geyser,new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#ef0000",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".card",".card",1484105240),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null)], null),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
var map__72494 = com.fulcrologic.fulcro.components.props(this$);
var map__72494__$1 = (((((!((map__72494 == null))))?(((((map__72494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72494):map__72494);
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72494__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
var node = goog.object.get(this$,"cardNode");
try{nubank.workspaces.ui.render_card(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),card_id,new cljs.core.Keyword("nubank.workspaces.model","node","nubank.workspaces.model/node",-2144506134),node,new cljs.core.Keyword("nubank.workspaces.model","component","nubank.workspaces.model/component",-1201359926),this$], null));

return this$.forceUpdate();
}catch (e72496){var e = e72496;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nubank.workspaces.ui.components_with_error,cljs.core.conj,this$);

console.error("Error mounting card",card_id,e);

return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","error-catch?","nubank.workspaces.ui/error-catch?",1438279944),true], null));
}}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$render_WorkspaceSoloCard(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__72497 = com.fulcrologic.fulcro.components.props(this$);
var map__72497__$1 = (((((!((map__72497 == null))))?(((((map__72497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72497):map__72497);
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72497__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
var map__72499 = nubank.workspaces.data.active_card(card_id);
var map__72499__$1 = (((((!((map__72499 == null))))?(((((map__72499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72499):map__72499);
var render_toolbar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72499__$1,new cljs.core.Keyword("nubank.workspaces.model","render-toolbar","nubank.workspaces.model/render-toolbar",-1738138937));
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),(cljs.core.truth_(render_toolbar)?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),(render_toolbar.cljs$core$IFn$_invoke$arity$0 ? render_toolbar.cljs$core$IFn$_invoke$arity$0() : render_toolbar.call(null))], 0)):com.fulcrologic.fulcro_css.localized_dom.div()),(cljs.core.truth_(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("nubank.workspaces.ui","error-catch?","nubank.workspaces.ui/error-catch?",1438279944)))?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".error",".error",115475668),"Error rendering card, check console for details."], 0)):null),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".card",".card",1484105240),cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.model","node-props","nubank.workspaces.model/node-props",-69697539).cljs$core$IFn$_invoke$arity$1(nubank.workspaces.data.card_definition(card_id)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__72490_SHARP_){
return goog.object.set(this$,"cardNode",p1__72490_SHARP_);
})], null)], 0))], 0))], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.WorkspaceSoloCard !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.WorkspaceSoloCard = (function nubank$workspaces$ui$WorkspaceSoloCard(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___73381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___73365,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___73381)){
var init_state__55352__auto___73382 = temp__5751__auto___73381;
(this__55351__auto__.state = (function (){var obj72502 = ({"fulcro$state":(function (){var G__72503 = this__55351__auto__;
var G__72504 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___73382.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___73382.cljs$core$IFn$_invoke$arity$2(G__72503,G__72504) : init_state__55352__auto___73382.call(null,G__72503,G__72504));
})()});
return obj72502;
})());
} else {
(this__55351__auto__.state = (function (){var obj72509 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj72509;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.WorkspaceSoloCard,new cljs.core.Keyword("nubank.workspaces.ui","WorkspaceSoloCard","nubank.workspaces.ui/WorkspaceSoloCard",-185454692),options__55349__auto___73365);
nubank.workspaces.ui.workspace_solo_card = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.WorkspaceSoloCard,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809)], null));

var options__55349__auto___73387 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function nubank$workspaces$ui$build_raw_initial_state_STAR_(data){
return data;
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$ui$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),new cljs.core.Keyword("nubank.workspaces.model","card-header-style","nubank.workspaces.model/card-header-style",534442797),new cljs.core.Keyword("nubank.workspaces.ui","show-source?","nubank.workspaces.ui/show-source?",1596348105),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-root","nubank.workspaces.ui/workspace-root",695328612),"singleton"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","settings","nubank.workspaces.ui/settings",139105956)], null)])], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),nubank.workspaces.ui.core.color_white,new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 4px 9px 0 rgba(0,0,0,0.02)",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),nubank.workspaces.ui.core.card_border_radius,new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$cljs-workflow-static-workflow","$cljs-workflow-static-workflow",-448809644),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".header",".header",-1761691025),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"default"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#ef0000",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".header",".header",-1761691025),nubank.workspaces.ui.core.font_os12sb,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),nubank.workspaces.ui.core.color_mystic,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),[nubank.workspaces.ui.core.card_border_radius," ",nubank.workspaces.ui.core.card_border_radius," 0 0"].join(''),new cljs.core.Keyword(null,"color","color",1011675173),nubank.workspaces.ui.core.color_limed_spruce,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"grab"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"-webkit-grab"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"-moz-grab"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".header-title",".header-title",719021241),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 10px",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".card-title",".card-title",1927235738),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),"ellipsis",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".card-actions",".card-actions",-1000790231),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-auto-flow","grid-auto-flow",-1754873684),"column",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"5px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".close",".close",1636677024),nubank.workspaces.ui.core.close_icon_css], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".more-container",".more-container",-324805920),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".more",".more",196863026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".more",".more",196863026),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"right","right",-452581833),"0",new cljs.core.Keyword(null,"top","top",-1856271961),"100%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-10px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"10px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".more-actions",".more-actions",-54999811),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"background","background",-863952629),nubank.workspaces.ui.core.color_mystic,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0 0 6px 6px",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 10px 10px",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"6px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"background","background",-863952629),nubank.workspaces.ui.core.color_geyser,new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$react-draggable-dragging","$react-draggable-dragging",1270042297),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".header",".header",-1761691025),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"grabbing"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"-webkit-grabbing"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"-moz-grabbing"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$cljs-workflow-static-workflow","$cljs-workflow-static-workflow",-448809644),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".close",".close",1636677024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".card",".card",1484105240),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".source",".source",1541091664),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"80vw",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"80vh",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 12px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),nubank.workspaces.ui.core.card_border_radius,new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),nubank.workspaces.ui.core.box_shadow], null)], null)], null),new cljs.core.Keyword(null,"css-include","css-include",559023012),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nubank.workspaces.ui.highlight.Highlight,nubank.workspaces.ui.modal.Modal], null),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
var map__72514 = com.fulcrologic.fulcro.components.props(this$);
var map__72514__$1 = (((((!((map__72514 == null))))?(((((map__72514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72514):map__72514);
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72514__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
var node = goog.object.get(this$,"cardNode");
try{nubank.workspaces.ui.render_card(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),card_id,new cljs.core.Keyword("nubank.workspaces.model","node","nubank.workspaces.model/node",-2144506134),node,new cljs.core.Keyword("nubank.workspaces.model","component","nubank.workspaces.model/component",-1201359926),this$], null));

return this$.forceUpdate();
}catch (e72519){var e = e72519;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nubank.workspaces.ui.components_with_error,cljs.core.conj,this$);

console.error("Error mounting card",card_id,e);

return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","error-catch?","nubank.workspaces.ui/error-catch?",1438279944),true], null));
}}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$render_WorkspaceCard(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__72520 = com.fulcrologic.fulcro.components.props(this$);
var map__72520__$1 = (((((!((map__72520 == null))))?(((((map__72520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72520):map__72520);
var props = map__72520__$1;
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72520__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
var card_header_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72520__$1,new cljs.core.Keyword("nubank.workspaces.model","card-header-style","nubank.workspaces.model/card-header-style",534442797));
var show_source_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72520__$1,new cljs.core.Keyword("nubank.workspaces.ui","show-source?","nubank.workspaces.ui/show-source?",1596348105));
var map__72521 = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__72521__$1 = (((((!((map__72521 == null))))?(((((map__72521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72521):map__72521);
var export_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72521__$1,new cljs.core.Keyword("nubank.workspaces.ui","export-size","nubank.workspaces.ui/export-size",1661946281));
var open_solo_card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72521__$1,new cljs.core.Keyword("nubank.workspaces.ui","open-solo-card","nubank.workspaces.ui/open-solo-card",-1371578732));
var map__72527 = nubank.workspaces.data.active_card(card_id);
var map__72527__$1 = (((((!((map__72527 == null))))?(((((map__72527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72527):map__72527);
var render_toolbar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72527__$1,new cljs.core.Keyword("nubank.workspaces.model","render-toolbar","nubank.workspaces.model/render-toolbar",-1738138937));
var map__72528 = nubank.workspaces.data.card_definition(card_id);
var map__72528__$1 = (((((!((map__72528 == null))))?(((((map__72528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72528):map__72528);
var card_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72528__$1,new cljs.core.Keyword("nubank.workspaces.model","card-form","nubank.workspaces.model/card-form",2147473));
var test_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72528__$1,new cljs.core.Keyword("nubank.workspaces.model","test?","nubank.workspaces.model/test?",993719827));
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".header$workspaces-cljs-card-drag-handle",".header$workspaces-cljs-card-drag-handle",1045999511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([card_header_style,(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-root","nubank.workspaces.ui/workspace-root",695328612),"singleton"], null),new cljs.core.Keyword("nubank.workspaces.ui","settings","nubank.workspaces.ui/settings",139105956),new cljs.core.Keyword("nubank.workspaces.ui","hide-card-header?","nubank.workspaces.ui/hide-card-header?",-497463645)], null)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null):null)], 0))], null),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".header-title",".header-title",719021241),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".card-title",".card-title",1927235738),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.str.cljs$core$IFn$_invoke$arity$1(card_id)], null),nubank.workspaces.ui.card_title(card_id)], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".card-actions",".card-actions",-1000790231),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".more-container",".more-container",-324805920),nubank.workspaces.ui.core.more_icon(cljs.core.PersistentArrayMap.EMPTY),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".more",".more",196863026),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".more-actions",".more-actions",-54999811),(cljs.core.truth_(card_form)?(function (){var G__72534 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","show-source?","nubank.workspaces.ui/show-source?",1596348105),true);
})], null);
var G__72535 = "Source";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__72534,G__72535) : nubank.workspaces.ui.core.button.call(null,G__72534,G__72535));
})():null),(function (){var G__72536 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__72538 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),card_id], null);
return (open_solo_card.cljs$core$IFn$_invoke$arity$1 ? open_solo_card.cljs$core$IFn$_invoke$arity$1(G__72538) : open_solo_card.call(null,G__72538));
})], null);
var G__72537 = "Solo";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__72536,G__72537) : nubank.workspaces.ui.core.button.call(null,G__72536,G__72537));
})(),((cljs.core.not(test_QMARK_))?(function (){var G__72539 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),export_size], null);
var G__72540 = "Size";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__72539,G__72540) : nubank.workspaces.ui.core.button.call(null,G__72539,G__72540));
})():null),(function (){var G__72541 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return nubank.workspaces.ui.restart_card(card_id);
})], null);
var G__72542 = "Remount";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__72541,G__72542) : nubank.workspaces.ui.core.button.call(null,G__72541,G__72542));
})()], 0))], 0))], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".close",".close",1636677024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","remove-card-from-active-ns","nubank.workspaces.ui/remove-card-from-active-ns",-2013077344,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),null,(1),null)),(new cljs.core.List(null,card_id,null,(1),null)))))),null,(1),null)))))], null));
})], null),"\u00D7"], 0))], 0))], 0)),(cljs.core.truth_(render_toolbar)?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),(render_toolbar.cljs$core$IFn$_invoke$arity$0 ? render_toolbar.cljs$core$IFn$_invoke$arity$0() : render_toolbar.call(null))], 0)):null)], 0)),(cljs.core.truth_(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("nubank.workspaces.ui","error-catch?","nubank.workspaces.ui/error-catch?",1438279944)))?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".error",".error",115475668),"Error rendering card, check console for details."], 0)):null),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".card",".card",1484105240),cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.model","node-props","nubank.workspaces.model/node-props",-69697539).cljs$core$IFn$_invoke$arity$1(nubank.workspaces.data.card_definition(card_id)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__72510_SHARP_){
return goog.object.set(this$,"cardNode",p1__72510_SHARP_);
})], null)], 0))], 0)),(cljs.core.truth_(show_source_QMARK_)?(function (){var G__72546 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui.modal","on-close","nubank.workspaces.ui.modal/on-close",1602537550),(function (){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","show-source?","nubank.workspaces.ui/show-source?",1596348105),false);
})], null);
var G__72547 = com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".source",".source",1541091664),(function (){var G__72548 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui.highlight","source","nubank.workspaces.ui.highlight/source",161213844),(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__72549_73411 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__72550_73412 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__72551_73413 = true;
var _STAR_print_fn_STAR__temp_val__72552_73414 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__72551_73413);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__72552_73414);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(card_form);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__72550_73412);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__72549_73411);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()], null);
return (nubank.workspaces.ui.highlight.highlight.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.highlight.highlight.cljs$core$IFn$_invoke$arity$1(G__72548) : nubank.workspaces.ui.highlight.highlight.call(null,G__72548));
})()], 0));
return (nubank.workspaces.ui.modal.modal.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.modal.modal.cljs$core$IFn$_invoke$arity$2(G__72546,G__72547) : nubank.workspaces.ui.modal.modal.call(null,G__72546,G__72547));
})():null)], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.WorkspaceCard !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.WorkspaceCard = (function nubank$workspaces$ui$WorkspaceCard(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___73418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___73387,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___73418)){
var init_state__55352__auto___73419 = temp__5751__auto___73418;
(this__55351__auto__.state = (function (){var obj72557 = ({"fulcro$state":(function (){var G__72558 = this__55351__auto__;
var G__72559 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___73419.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___73419.cljs$core$IFn$_invoke$arity$2(G__72558,G__72559) : init_state__55352__auto___73419.call(null,G__72558,G__72559));
})()});
return obj72557;
})());
} else {
(this__55351__auto__.state = (function (){var obj72561 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj72561;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.WorkspaceCard,new cljs.core.Keyword("nubank.workspaces.ui","WorkspaceCard","nubank.workspaces.ui/WorkspaceCard",1363306272),options__55349__auto___73387);
nubank.workspaces.ui.workspace_card = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.WorkspaceCard,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809)], null));
nubank.workspaces.ui.block = (function nubank$workspaces$ui$block(w,h,x,y){
return new cljs.core.PersistentArrayMap(null, 4, ["w",w,"h",h,"x",x,"y",y], null);
});
nubank.workspaces.ui.build_grid = (function nubank$workspaces$ui$build_grid(items){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (grid,p__72565){
var map__72566 = p__72565;
var map__72566__$1 = (((((!((map__72566 == null))))?(((((map__72566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72566):map__72566);
var item = map__72566__$1;
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72566__$1,"w");
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72566__$1,"h");
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72566__$1,"x");
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72566__$1,"y");
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(grid,(function (){var iter__4529__auto__ = (function nubank$workspaces$ui$build_grid_$_iter__72568(s__72569){
return (new cljs.core.LazySeq(null,(function (){
var s__72569__$1 = s__72569;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__72569__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var x_SINGLEQUOTE_ = cljs.core.first(xs__6308__auto__);
var iterys__4525__auto__ = ((function (s__72569__$1,x_SINGLEQUOTE_,xs__6308__auto__,temp__5753__auto__,map__72566,map__72566__$1,item,w,h,x,y){
return (function nubank$workspaces$ui$build_grid_$_iter__72568_$_iter__72570(s__72571){
return (new cljs.core.LazySeq(null,((function (s__72569__$1,x_SINGLEQUOTE_,xs__6308__auto__,temp__5753__auto__,map__72566,map__72566__$1,item,w,h,x,y){
return (function (){
var s__72571__$1 = s__72571;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__72571__$1);
if(temp__5753__auto____$1){
var s__72571__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__72571__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__72571__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__72573 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__72572 = (0);
while(true){
if((i__72572 < size__4528__auto__)){
var y_SINGLEQUOTE_ = cljs.core._nth(c__4527__auto__,i__72572);
cljs.core.chunk_append(b__72573,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_SINGLEQUOTE_ + x),(y_SINGLEQUOTE_ + y)], null),item], null));

var G__73428 = (i__72572 + (1));
i__72572 = G__73428;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72573),nubank$workspaces$ui$build_grid_$_iter__72568_$_iter__72570(cljs.core.chunk_rest(s__72571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72573),null);
}
} else {
var y_SINGLEQUOTE_ = cljs.core.first(s__72571__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_SINGLEQUOTE_ + x),(y_SINGLEQUOTE_ + y)], null),item], null),nubank$workspaces$ui$build_grid_$_iter__72568_$_iter__72570(cljs.core.rest(s__72571__$2)));
}
} else {
return null;
}
break;
}
});})(s__72569__$1,x_SINGLEQUOTE_,xs__6308__auto__,temp__5753__auto__,map__72566,map__72566__$1,item,w,h,x,y))
,null,null));
});})(s__72569__$1,x_SINGLEQUOTE_,xs__6308__auto__,temp__5753__auto__,map__72566,map__72566__$1,item,w,h,x,y))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(h)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,nubank$workspaces$ui$build_grid_$_iter__72568(cljs.core.rest(s__72569__$1)));
} else {
var G__73433 = cljs.core.rest(s__72569__$1);
s__72569__$1 = G__73433;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(w));
})());
}),cljs.core.PersistentArrayMap.EMPTY,items);
});
nubank.workspaces.ui.fits_in_QMARK_ = (function nubank$workspaces$ui$fits_in_QMARK_(p__72581,grid){
var map__72582 = p__72581;
var map__72582__$1 = (((((!((map__72582 == null))))?(((((map__72582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72582):map__72582);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72582__$1,"w");
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72582__$1,"h");
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72582__$1,"x");
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72582__$1,"y");
var coords = (function (){var iter__4529__auto__ = (function nubank$workspaces$ui$fits_in_QMARK__$_iter__72584(s__72585){
return (new cljs.core.LazySeq(null,(function (){
var s__72585__$1 = s__72585;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__72585__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var x_SINGLEQUOTE_ = cljs.core.first(xs__6308__auto__);
var iterys__4525__auto__ = ((function (s__72585__$1,x_SINGLEQUOTE_,xs__6308__auto__,temp__5753__auto__,map__72582,map__72582__$1,w,h,x,y){
return (function nubank$workspaces$ui$fits_in_QMARK__$_iter__72584_$_iter__72586(s__72587){
return (new cljs.core.LazySeq(null,((function (s__72585__$1,x_SINGLEQUOTE_,xs__6308__auto__,temp__5753__auto__,map__72582,map__72582__$1,w,h,x,y){
return (function (){
var s__72587__$1 = s__72587;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__72587__$1);
if(temp__5753__auto____$1){
var s__72587__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__72587__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__72587__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__72589 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__72588 = (0);
while(true){
if((i__72588 < size__4528__auto__)){
var y_SINGLEQUOTE_ = cljs.core._nth(c__4527__auto__,i__72588);
cljs.core.chunk_append(b__72589,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_SINGLEQUOTE_ + x),(y_SINGLEQUOTE_ + y)], null));

var G__73444 = (i__72588 + (1));
i__72588 = G__73444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72589),nubank$workspaces$ui$fits_in_QMARK__$_iter__72584_$_iter__72586(cljs.core.chunk_rest(s__72587__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72589),null);
}
} else {
var y_SINGLEQUOTE_ = cljs.core.first(s__72587__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_SINGLEQUOTE_ + x),(y_SINGLEQUOTE_ + y)], null),nubank$workspaces$ui$fits_in_QMARK__$_iter__72584_$_iter__72586(cljs.core.rest(s__72587__$2)));
}
} else {
return null;
}
break;
}
});})(s__72585__$1,x_SINGLEQUOTE_,xs__6308__auto__,temp__5753__auto__,map__72582,map__72582__$1,w,h,x,y))
,null,null));
});})(s__72585__$1,x_SINGLEQUOTE_,xs__6308__auto__,temp__5753__auto__,map__72582,map__72582__$1,w,h,x,y))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(h)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,nubank$workspaces$ui$fits_in_QMARK__$_iter__72584(cljs.core.rest(s__72585__$1)));
} else {
var G__73447 = cljs.core.rest(s__72585__$1);
s__72585__$1 = G__73447;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(w));
})();
return cljs.core.every_QMARK_((function (p1__72580_SHARP_){
return (!(cljs.core.contains_QMARK_(grid,p1__72580_SHARP_)));
}),coords);
});
nubank.workspaces.ui.smart_item_position = (function nubank$workspaces$ui$smart_item_position(columns,p__72596,items){
var map__72597 = p__72596;
var map__72597__$1 = (((((!((map__72597 == null))))?(((((map__72597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72597):map__72597);
var new_item = map__72597__$1;
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72597__$1,"w");
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72597__$1,"h");
var grid = nubank.workspaces.ui.build_grid(items);
var w__$1 = (function (){var x__4217__auto__ = w;
var y__4218__auto__ = columns;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var x = (0);
var y = (0);
while(true){
if(((x + w__$1) > columns)){
var G__73455 = (0);
var G__73456 = (y + (1));
x = G__73455;
y = G__73456;
continue;
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
if(cljs.core.truth_(temp__5751__auto__)){
var block = temp__5751__auto__;
var G__73457 = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,"x") + cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,"w"));
var G__73458 = y;
x = G__73457;
y = G__73458;
continue;
} else {
if(nubank.workspaces.ui.fits_in_QMARK_(nubank.workspaces.ui.block(w__$1,h,x,y),grid)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new_item,"x",x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["y",y,"w",w__$1], 0));
} else {
var G__73459 = (x + (1));
var G__73460 = y;
x = G__73459;
y = G__73460;
continue;
}
}
}
break;
}
});
/**
 * 
 */
nubank.workspaces.ui.pick_card_to_namespace = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","pick-card-to-namespace","nubank.workspaces.ui/pick-card-to-namespace",1745669749,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","pick-card-to-namespace","nubank.workspaces.ui/pick-card-to-namespace",1745669749,null),(function (fulcro_mutation_env_symbol){
var map__72605 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__72605__$1 = (((((!((map__72605 == null))))?(((((map__72605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72605):map__72605);
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72605__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__72607){
var map__72608 = p__72607;
var map__72608__$1 = (((((!((map__72608 == null))))?(((((map__72608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72608):map__72608);
var env = map__72608__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72608__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72608__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var _STAR_after_render_STAR__orig_val__72610_73494 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72611_73495 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72611_73495);

try{var ws_ref_73496 = nubank.workspaces.ui.active_workspace_ref(env);
var current_ws_73497 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ws_ref_73496);
var card_73498 = nubank.workspaces.data.card_definition(card_id);
if(cljs.core.truth_(new cljs.core.Keyword("nubank.workspaces.model","workspace-static?","nubank.workspaces.model/workspace-static?",1744769950).cljs$core$IFn$_invoke$arity$1(current_ws_73497))){
console.warn("Can't add card to static workspace, please duplicate the workspace to add cards.");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),cljs.core.first(ws_ref_73496))){
console.warn("Can't add card to solo card, please switch a local workspace.");
} else {
if(cljs.core.contains_QMARK_(nubank.workspaces.ui.workspace_card_ids(current_ws_73497),card_id)){
} else {
com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,nubank.workspaces.ui.WorkspaceCard,com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.WorkspaceCard,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),card_id], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"append","append",-291298229),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws_ref_73496,new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701))], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ws_ref_73496,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716),(function (layouts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (l,p__72615){
var map__72616 = p__72615;
var map__72616__$1 = (((((!((map__72616 == null))))?(((((map__72616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72616):map__72616);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72616__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72616__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(l,id,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),nubank.workspaces.ui.smart_item_position(cols,new cljs.core.PersistentArrayMap(null, 6, ["i",card_id,"w",(function (){var or__4126__auto__ = new cljs.core.Keyword("nubank.workspaces.model","card-width","nubank.workspaces.model/card-width",-1929280730).cljs$core$IFn$_invoke$arity$1(card_73498);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (2);
}
})(),"h",(function (){var or__4126__auto__ = new cljs.core.Keyword("nubank.workspaces.model","card-height","nubank.workspaces.model/card-height",1579539064).cljs$core$IFn$_invoke$arity$1(card_73498);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (4);
}
})(),"x",(0),"y",(100),"minH",(2)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$3(l,id,cljs.core.PersistentVector.EMPTY)));
}),layouts,nubank.workspaces.ui.grid_layout.breakpoints);
})], 0));
}

}
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72610_73494);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__72621 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72622 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72622);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72621);
}})], null);
}));
nubank.workspaces.ui.add_card = (function nubank$workspaces$ui$add_card(this$,card_id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","pick-card-to-namespace","nubank.workspaces.ui/pick-card-to-namespace",1745669749,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),null,(1),null)),(new cljs.core.List(null,card_id,null,(1),null)))))),null,(1),null)))))], null));
});
/**
 * 
 */
nubank.workspaces.ui.open_solo_workspace = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","open-solo-workspace","nubank.workspaces.ui/open-solo-workspace",-1902644014,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","open-solo-workspace","nubank.workspaces.ui/open-solo-workspace",-1902644014,null),(function (fulcro_mutation_env_symbol){
var map__72626 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__72626__$1 = (((((!((map__72626 == null))))?(((((map__72626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72626):map__72626);
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72626__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__72630){
var map__72632 = p__72630;
var map__72632__$1 = (((((!((map__72632 == null))))?(((((map__72632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72632):map__72632);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72632__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72632__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__72634_73512 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72635_73513 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72635_73513);

try{var ws_ident_73515 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),card_id], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,com.fulcrologic.fulcro.algorithms.data_targeting.integrate_ident_STAR_,ws_ident_73515,new cljs.core.Keyword(null,"append","append",-291298229),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447)),new cljs.core.Keyword(null,"replace","replace",-786587770),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814))], 0));

nubank.workspaces.lib.local_storage.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ws_ident_73515], 0));

nubank.workspaces.lib.local_storage.set_BANG_(new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),ws_ident_73515);
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72634_73512);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__72636 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72637 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72637);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72636);
}})], null);
}));
nubank.workspaces.ui.add_card_solo = (function nubank$workspaces$ui$add_card_solo(this$,card_id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","open-solo-workspace","nubank.workspaces.ui/open-solo-workspace",-1902644014,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),card_id], null),null,(1),null)))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton"], null)], null));
});
nubank.workspaces.ui.normalize_layout = (function nubank$workspaces$ui$normalize_layout(layout){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__72641_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__72642){
var vec__72643 = p__72642;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72643,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72643,(1),null);
return v;
})),p1__72641_SHARP_),"i",cljs.core.symbol);
}),layout);
});
/**
 * 
 */
nubank.workspaces.ui.normalize_sizes = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","normalize-sizes","nubank.workspaces.ui/normalize-sizes",1530582337,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","normalize-sizes","nubank.workspaces.ui/normalize-sizes",1530582337,null),(function (fulcro_mutation_env_symbol){
var _ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__72651){
var map__72652 = p__72651;
var map__72652__$1 = (((((!((map__72652 == null))))?(((((map__72652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72652):map__72652);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72652__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72652__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__72654_73526 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72655_73527 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72655_73527);

try{var ws_73528 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var items_73529 = nubank.workspaces.ui.map_values(cljs.core.first,cljs.core.group_by((function (p1__72646_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__72646_SHARP_,"i");
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716).cljs$core$IFn$_invoke$arity$1(ws_73528),new cljs.core.Keyword("nubank.workspaces.ui","breakpoint","nubank.workspaces.ui/breakpoint",-1694045841).cljs$core$IFn$_invoke$arity$1(ws_73528))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716),(function (breaks){
return nubank.workspaces.ui.map_values((function (layouts){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__72648_SHARP_){
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_73529,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__72648_SHARP_,"i"));
if(cljs.core.truth_(temp__5751__auto__)){
var map__72659 = temp__5751__auto__;
var map__72659__$1 = (((((!((map__72659 == null))))?(((((map__72659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72659):map__72659);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72659__$1,"w");
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72659__$1,"h");
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72659__$1,"x");
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72659__$1,"y");
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__72648_SHARP_,"w",w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["h",h,"x",x,"y",y], 0));
} else {
return p1__72648_SHARP_;
}
}),layouts);
}),breaks);
})], 0));

nubank.workspaces.ui.save_local_workspace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref));
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72654_73526);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__72663 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72664 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72664);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72663);
}})], null);
}));
/**
 * 
 */
nubank.workspaces.ui.update_workspace = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","update-workspace","nubank.workspaces.ui/update-workspace",-2145331844,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","update-workspace","nubank.workspaces.ui/update-workspace",-2145331844,null),(function (fulcro_mutation_env_symbol){
var map__72666 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__72666__$1 = (((((!((map__72666 == null))))?(((((map__72666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72666):map__72666);
var ws = map__72666__$1;
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72666__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var workspace_static_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72666__$1,new cljs.core.Keyword("nubank.workspaces.model","workspace-static?","nubank.workspaces.model/workspace-static?",1744769950));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),(function nubank$workspaces$ui$refresh(_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),new cljs.core.Keyword("nubank.workspaces.ui","workspaces","nubank.workspaces.ui/workspaces",1165878450)], null);
}),new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__72671){
var map__72672 = p__72671;
var map__72672__$1 = (((((!((map__72672 == null))))?(((((map__72672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72672):map__72672);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72672__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__72674_73579 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72675_73580 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72675_73580);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),workspace_id], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ws], 0));

if(cljs.core.not(workspace_static_QMARK_)){
nubank.workspaces.ui.save_local_workspace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),workspace_id], null)));
} else {
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72674_73579);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__72679 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72680 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72680);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72679);
}})], null);
}));
nubank.workspaces.ui.ws_data__GT_ident_map = (function nubank$workspaces$ui$ws_data__GT_ident_map(x){
if(cljs.core.vector_QMARK_(x)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,x);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),x], null);
}
});
nubank.workspaces.ui.workspace_id_QMARK_ = (function nubank$workspaces$ui$workspace_id_QMARK_(x){
return ((cljs.core.uuid_QMARK_(x)) || ((x instanceof cljs.core.Symbol)));
});
nubank.workspaces.ui.workspace_ident = (function nubank$workspaces$ui$workspace_ident(p__72684){
var map__72685 = p__72684;
var map__72685__$1 = (((((!((map__72685 == null))))?(((((map__72685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72685):map__72685);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72685__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72685__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
if(nubank.workspaces.ui.workspace_id_QMARK_(workspace_id)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),workspace_id], null);
} else {
if(cljs.core.truth_(card_id)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),card_id], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invalid","invalid",412869516),"ident"], null);

}
}
});
/**
 * 
 */
nubank.workspaces.ui.close_workspace = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","close-workspace","nubank.workspaces.ui/close-workspace",-1735247601,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","close-workspace","nubank.workspaces.ui/close-workspace",-1735247601,null),(function (fulcro_mutation_env_symbol){
var map__72691 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__72691__$1 = (((((!((map__72691 == null))))?(((((map__72691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72691):map__72691);
var ws_data = map__72691__$1;
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72691__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__72693){
var map__72694 = p__72693;
var map__72694__$1 = (((((!((map__72694 == null))))?(((((map__72694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72694):map__72694);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72694__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__72696_73622 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72697_73623 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72697_73623);

try{var ws_ref_73625 = nubank.workspaces.ui.workspace_ident(ws_data);
var ws_73626 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ws_ref_73625);
var card_ids_73627 = nubank.workspaces.ui.workspace_card_ids(ws_73626);
var tabs_ref_73628 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton"], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,tabs_ref_73628,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447),(function (p1__72689_SHARP_){
return cljs.core.filterv((function (x){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,ws_ref_73625);
}),p1__72689_SHARP_);
})], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tabs_ref_73628,new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814))),ws_ref_73625)){
var active_ref_73633 = cljs.core.first(new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),tabs_ref_73628)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,tabs_ref_73628,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),cljs.core.first(new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),tabs_ref_73628)))], 0));

nubank.workspaces.lib.local_storage.set_BANG_(new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),active_ref_73633);
} else {
}

nubank.workspaces.lib.local_storage.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([workspace_id,ws_ref_73625], 0));

nubank.workspaces.ui.disposed_unreferenced_cards(cljs.core.deref(state),card_ids_73627);
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72696_73622);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__72701 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72702 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72702);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72701);
}})], null);
}));
/**
 * 
 */
nubank.workspaces.ui.remove_workspace = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","remove-workspace","nubank.workspaces.ui/remove-workspace",-1845546964,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","remove-workspace","nubank.workspaces.ui/remove-workspace",-1845546964,null),(function (fulcro_mutation_env_symbol){
var map__72707 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__72707__$1 = (((((!((map__72707 == null))))?(((((map__72707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72707):map__72707);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72707__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),(function nubank$workspaces$ui$refresh(_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspaces","nubank.workspaces.ui/workspaces",1165878450)], null);
}),new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__72711){
var map__72712 = p__72711;
var map__72712__$1 = (((((!((map__72712 == null))))?(((((map__72712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72712):map__72712);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72712__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__72715_73646 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72716_73647 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72716_73647);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-root","nubank.workspaces.ui/workspace-root",695328612),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","workspaces","nubank.workspaces.ui/workspaces",1165878450)], null),(function (p1__72706_SHARP_){
return cljs.core.filterv((function (x){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(x),workspace_id);
}),p1__72706_SHARP_);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([workspace_id], 0));

nubank.workspaces.lib.local_storage.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("nubank.workspaces.ui","local-workspaces","nubank.workspaces.ui/local-workspaces",-1846378387),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([workspace_id], 0));

nubank.workspaces.lib.local_storage.remove_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),workspace_id], null));
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72715_73646);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__72717 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72718 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72718);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72717);
}})], null);
}));
/**
 * 
 */
nubank.workspaces.ui.create_workspace = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","create-workspace","nubank.workspaces.ui/create-workspace",-404659908,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","create-workspace","nubank.workspaces.ui/create-workspace",-404659908,null),(function (fulcro_mutation_env_symbol){
var ws = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__72722){
var map__72723 = p__72722;
var map__72723__$1 = (((((!((map__72723 == null))))?(((((map__72723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72723):map__72723);
var env = map__72723__$1;
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72723__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__72725_73654 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72726_73655 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72726_73655);

try{var map__72729_73656 = nubank.workspaces.ui.save_local_workspace(nubank.workspaces.ui.create_workspace_STAR_.cljs$core$IFn$_invoke$arity$variadic(env,(function (){var or__4126__auto__ = ws;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"append","append",-291298229),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447)),new cljs.core.Keyword(null,"replace","replace",-786587770),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814))], 0)));
var map__72729_73657__$1 = (((((!((map__72729_73656 == null))))?(((((map__72729_73656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72729_73656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72729_73656):map__72729_73656);
var workspace_id_73658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72729_73657__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
nubank.workspaces.lib.local_storage.set_BANG_(new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),workspace_id_73658);
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72725_73654);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__72732 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72733 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72733);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72732);
}})], null);
}));
/**
 * 
 */
nubank.workspaces.ui.copy_breakpoint_layout = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","copy-breakpoint-layout","nubank.workspaces.ui/copy-breakpoint-layout",1066150982,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","copy-breakpoint-layout","nubank.workspaces.ui/copy-breakpoint-layout",1066150982,null),(function (fulcro_mutation_env_symbol){
var map__72737 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__72737__$1 = (((((!((map__72737 == null))))?(((((map__72737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72737):map__72737);
var source_breakpoint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72737__$1,new cljs.core.Keyword("nubank.workspaces.ui","source-breakpoint","nubank.workspaces.ui/source-breakpoint",1683194315));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__72739){
var map__72740 = p__72739;
var map__72740__$1 = (((((!((map__72740 == null))))?(((((map__72740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72740):map__72740);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72740__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72740__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__72745_73666 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72746_73667 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72746_73667);

try{var map__72747_73670 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var map__72747_73671__$1 = (((((!((map__72747_73670 == null))))?(((((map__72747_73670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72747_73670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72747_73670):map__72747_73670);
var breakpoint_73672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72747_73671__$1,new cljs.core.Keyword("nubank.workspaces.ui","breakpoint","nubank.workspaces.ui/breakpoint",-1694045841));
var layouts_73673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72747_73671__$1,new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716),breakpoint_73672], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(layouts_73673,source_breakpoint)], 0));
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72745_73666);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__72749 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72750 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72750);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72749);
}})], null);
}));
nubank.workspaces.ui.export_card_size = (function nubank$workspaces$ui$export_card_size(this$,card_id){
var map__72755 = com.fulcrologic.fulcro.components.props(this$);
var map__72755__$1 = (((((!((map__72755 == null))))?(((((map__72755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72755):map__72755);
var layouts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72755__$1,new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716));
var breakpoint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72755__$1,new cljs.core.Keyword("nubank.workspaces.ui","breakpoint","nubank.workspaces.ui/breakpoint",-1694045841));
var map__72756 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72754_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(card_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__72754_SHARP_,"i"));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(layouts,breakpoint)));
var map__72756__$1 = (((((!((map__72756 == null))))?(((((map__72756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72756):map__72756);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72756__$1,"w");
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72756__$1,"h");
return console.log(["{::wsm/card-width ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w)," ::wsm/card-height ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"}"].join(''));
});

var options__55349__auto___73685 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function nubank$workspaces$ui$build_raw_initial_state_STAR_(p__72766){
var map__72767 = p__72766;
var map__72767__$1 = (((((!((map__72767 == null))))?(((((map__72767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72767):map__72767);
var ws = map__72767__$1;
var layouts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72767__$1,new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72767__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72767__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var layouts__$1 = (function (){var or__4126__auto__ = layouts;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ws,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),(function (){var or__4126__auto__ = workspace_id;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.random_uuid();
}
})(),new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),(function (){var or__4126__auto__ = workspace_title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "new workspace";
}
})(),new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701),(function (){var or__4126__auto__ = (function (){var G__72773 = layouts__$1;
var G__72773__$1 = (((G__72773 == null))?null:cljs.core.first(G__72773));
var G__72773__$2 = (((G__72773__$1 == null))?null:cljs.core.val(G__72773__$1));
if((G__72773__$2 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__72762_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__72762_SHARP_,"i")],null));
}),G__72773__$2);
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716),layouts__$1,new cljs.core.Keyword("nubank.workspaces.ui","breakpoint","nubank.workspaces.ui/breakpoint",-1694045841),""], null)], 0));
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$ui$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716),new cljs.core.Keyword("nubank.workspaces.ui","breakpoint","nubank.workspaces.ui/breakpoint",-1694045841),new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),new cljs.core.Keyword("nubank.workspaces.model","workspace-static?","nubank.workspaces.model/workspace-static?",1744769950),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.WorkspaceCard)], null)], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".grid",".grid",1505444140),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"hidden"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".tools",".tools",-438409224),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),nubank.workspaces.ui.core.color_white,new cljs.core.Keyword(null,"color","color",1011675173),nubank.workspaces.ui.core.color_limed_spruce,new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 9px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".breakpoint",".breakpoint",790298917),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null)], null),new cljs.core.Keyword(null,"componentDidCatch","componentDidCatch",821717733),(function (this$,error,info){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nubank.workspaces.ui.components_with_error,cljs.core.conj,this$);

return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","error-catch?","nubank.workspaces.ui/error-catch?",1438279944),true], null));
}),new cljs.core.Keyword(null,"css-include","css-include",559023012),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nubank.workspaces.ui.grid_layout.GridLayout], null),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
return requestAnimationFrame((function (){
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render?","render?",-1838581524),true], null));
}));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$render_Workspace(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__72777 = com.fulcrologic.fulcro.components.props(this$);
var map__72777__$1 = (((((!((map__72777 == null))))?(((((map__72777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72777):map__72777);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72777__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72777__$1,new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701));
var layouts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72777__$1,new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716));
var breakpoint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72777__$1,new cljs.core.Keyword("nubank.workspaces.ui","breakpoint","nubank.workspaces.ui/breakpoint",-1694045841));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72777__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
var workspace_static_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72777__$1,new cljs.core.Keyword("nubank.workspaces.model","workspace-static?","nubank.workspaces.model/workspace-static?",1744769950));
var map__72778 = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__72778__$1 = (((((!((map__72778 == null))))?(((((map__72778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72778):map__72778);
var open_solo_card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72778__$1,new cljs.core.Keyword("nubank.workspaces.ui","open-solo-card","nubank.workspaces.ui/open-solo-card",-1371578732));
if(cljs.core.truth_(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("nubank.workspaces.ui","error-catch?","nubank.workspaces.ui/error-catch?",1438279944)))){
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Some error leaked to workspace level (ugh...), please report this and check console for details."], 0));
} else {
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container$workspaces-workspace-container",".container$workspaces-workspace-container",-1077330955),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".tools",".tools",-438409224),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".breakpoint",".breakpoint",790298917),cljs.core.str.cljs$core$IFn$_invoke$arity$1(breakpoint)], 0)),((cljs.core.not(workspace_static_QMARK_))?com.fulcrologic.fulcro_css.localized_dom.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"-",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (e){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","copy-breakpoint-layout","nubank.workspaces.ui/copy-breakpoint-layout",1066150982,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","source-breakpoint","nubank.workspaces.ui/source-breakpoint",1683194315),e.target.value], null),null,(1),null)))))], null));

return goog.object.set(e.target,"selectedIndex",(0));
})], null),com.fulcrologic.fulcro_css.localized_dom.option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"-"], null),"Copy layout"], 0)),(function (){var iter__4529__auto__ = (function nubank$workspaces$ui$render_Workspace_$_iter__72784(s__72785){
return (new cljs.core.LazySeq(null,(function (){
var s__72785__$1 = s__72785;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__72785__$1);
if(temp__5753__auto__){
var s__72785__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72785__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__72785__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__72787 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__72786 = (0);
while(true){
if((i__72786 < size__4528__auto__)){
var map__72791 = cljs.core._nth(c__4527__auto__,i__72786);
var map__72791__$1 = (((((!((map__72791 == null))))?(((((map__72791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72791):map__72791);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72791__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.chunk_append(b__72787,com.fulcrologic.fulcro_css.localized_dom.option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"value","value",305978217),id], null),id], 0)));

var G__73764 = (i__72786 + (1));
i__72786 = G__73764;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72787),nubank$workspaces$ui$render_Workspace_$_iter__72784(cljs.core.chunk_rest(s__72785__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72787),null);
}
} else {
var map__72793 = cljs.core.first(s__72785__$2);
var map__72793__$1 = (((((!((map__72793 == null))))?(((((map__72793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72793):map__72793);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72793__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.cons(com.fulcrologic.fulcro_css.localized_dom.option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"value","value",305978217),id], null),id], 0)),nubank$workspaces$ui$render_Workspace_$_iter__72784(cljs.core.rest(s__72785__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(nubank.workspaces.ui.grid_layout.breakpoints);
})()], 0)):null),(function (){var G__72798 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return nubank.workspaces.ui.refresh_cards.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.active_workspace_cards(com.fulcrologic.fulcro.components.any__GT_app(this$)),false);
})], null);
var G__72799 = "Refresh cards";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__72798,G__72799) : nubank.workspaces.ui.core.button.call(null,G__72798,G__72799));
})(),(function (){var G__72803 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.components.any__GT_app(this$),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","create-workspace","nubank.workspaces.ui/create-workspace",-404659908,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_title)," copy"].join(''),new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716),layouts], null),null,(1),null)))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton"], null)], null));
})], null);
var G__72804 = "Duplicate";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__72803,G__72804) : nubank.workspaces.ui.core.button.call(null,G__72803,G__72804));
})(),((cljs.core.not(workspace_static_QMARK_))?(function (){var G__72805 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","normalize-sizes","nubank.workspaces.ui/normalize-sizes",1530582337,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)))))], null));
})], null);
var G__72806 = "Unify layouts";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__72805,G__72806) : nubank.workspaces.ui.core.button.call(null,G__72805,G__72806));
})():null),((cljs.core.not(workspace_static_QMARK_))?(function (){var G__72810 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return console.log((function (){var writer = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cognitect.transit.write(writer,layouts)], 0));
})());
})], null);
var G__72811 = "Export";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__72810,G__72811) : nubank.workspaces.ui.core.button.call(null,G__72810,G__72811));
})():null),((cljs.core.not(workspace_static_QMARK_))?(function (){var G__72812 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
if(cljs.core.truth_(confirm("Delete workspace?"))){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","close-workspace","nubank.workspaces.ui/close-workspace",-1735247601,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),null,(1),null)),(new cljs.core.List(null,workspace_id,null,(1),null)))))),null,(1),null)))))], null));

return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","remove-workspace","nubank.workspaces.ui/remove-workspace",-1845546964,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),null,(1),null)),(new cljs.core.List(null,workspace_id,null,(1),null)))))),null,(1),null)))))], null));
} else {
return null;
}
})], null);
var G__72813 = "Delete";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__72812,G__72813) : nubank.workspaces.ui.core.button.call(null,G__72812,G__72813));
})():null)], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".grid",".grid",1505444140),(cljs.core.truth_(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render?","render?",-1838581524)))?(function (){var G__72817 = (function (){var G__72819 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"className","className",-1983287057),["layout ",(cljs.core.truth_(workspace_static_QMARK_)?"cljs-workflow-static-workflow":null)].join(''),new cljs.core.Keyword(null,"rowHeight","rowHeight",1730581244),(30),new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"breakpoint","breakpoint",1183378440))),nubank.workspaces.ui.grid_layout.breakpoints),new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cols","cols",-1914801295))),nubank.workspaces.ui.grid_layout.breakpoints),new cljs.core.Keyword(null,"layouts","layouts",11991539),layouts,new cljs.core.Keyword(null,"draggableHandle","draggableHandle",1358445442),".workspaces-cljs-card-drag-handle",new cljs.core.Keyword(null,"onBreakpointChange","onBreakpointChange",1104296229),(function (bp,_){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","breakpoint","nubank.workspaces.ui/breakpoint",-1694045841),bp);
}),new cljs.core.Keyword(null,"onLayoutChange","onLayoutChange",-320596147),(function (_,layouts__$1){
var layouts_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__72823){
var vec__72825 = p__72823;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72825,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72825,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nubank.workspaces.ui.normalize_layout(v)], null);
})),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(layouts__$1));
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","update-workspace","nubank.workspaces.ui/update-workspace",-2145331844,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),workspace_id,new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716),layouts_SINGLEQUOTE_], null),null,(1),null)))))], null));
})], null);
if(cljs.core.truth_(workspace_static_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__72819,new cljs.core.Keyword(null,"isDraggable","isDraggable",-181233715),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"isResizable","isResizable",1591995984),false,new cljs.core.Keyword(null,"onLayoutChange","onLayoutChange",-320596147),(function (_,___$1){
return null;
})], 0));
} else {
return G__72819;
}
})();
var G__72818 = (function (){var iter__4529__auto__ = (function nubank$workspaces$ui$render_Workspace_$_iter__72830(s__72831){
return (new cljs.core.LazySeq(null,(function (){
var s__72831__$1 = s__72831;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__72831__$1);
if(temp__5753__auto__){
var s__72831__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72831__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__72831__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__72833 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__72832 = (0);
while(true){
if((i__72832 < size__4528__auto__)){
var map__72837 = cljs.core._nth(c__4527__auto__,i__72832);
var map__72837__$1 = (((((!((map__72837 == null))))?(((((map__72837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72837):map__72837);
var card = map__72837__$1;
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72837__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
if(cljs.core.truth_(card_id)){
cljs.core.chunk_append(b__72833,com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(card_id)], null),(function (){var G__72839 = com.fulcrologic.fulcro.components.computed(card,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui","export-size","nubank.workspaces.ui/export-size",1661946281),((function (i__72832,s__72831__$1,map__72837,map__72837__$1,card,card_id,c__4527__auto__,size__4528__auto__,b__72833,s__72831__$2,temp__5753__auto__,G__72817,map__72777,map__72777__$1,workspace_id,cards,layouts,breakpoint,workspace_title,workspace_static_QMARK_,map__72778,map__72778__$1,open_solo_card){
return (function (){
return nubank.workspaces.ui.export_card_size(this$,card_id);
});})(i__72832,s__72831__$1,map__72837,map__72837__$1,card,card_id,c__4527__auto__,size__4528__auto__,b__72833,s__72831__$2,temp__5753__auto__,G__72817,map__72777,map__72777__$1,workspace_id,cards,layouts,breakpoint,workspace_title,workspace_static_QMARK_,map__72778,map__72778__$1,open_solo_card))
,new cljs.core.Keyword("nubank.workspaces.ui","open-solo-card","nubank.workspaces.ui/open-solo-card",-1371578732),open_solo_card], null));
return (nubank.workspaces.ui.workspace_card.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.workspace_card.cljs$core$IFn$_invoke$arity$1(G__72839) : nubank.workspaces.ui.workspace_card.call(null,G__72839));
})()], 0)));

var G__73904 = (i__72832 + (1));
i__72832 = G__73904;
continue;
} else {
var G__73905 = (i__72832 + (1));
i__72832 = G__73905;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72833),nubank$workspaces$ui$render_Workspace_$_iter__72830(cljs.core.chunk_rest(s__72831__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72833),null);
}
} else {
var map__72843 = cljs.core.first(s__72831__$2);
var map__72843__$1 = (((((!((map__72843 == null))))?(((((map__72843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72843):map__72843);
var card = map__72843__$1;
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72843__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
if(cljs.core.truth_(card_id)){
return cljs.core.cons(com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(card_id)], null),(function (){var G__72845 = com.fulcrologic.fulcro.components.computed(card,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui","export-size","nubank.workspaces.ui/export-size",1661946281),((function (s__72831__$1,map__72843,map__72843__$1,card,card_id,s__72831__$2,temp__5753__auto__,G__72817,map__72777,map__72777__$1,workspace_id,cards,layouts,breakpoint,workspace_title,workspace_static_QMARK_,map__72778,map__72778__$1,open_solo_card){
return (function (){
return nubank.workspaces.ui.export_card_size(this$,card_id);
});})(s__72831__$1,map__72843,map__72843__$1,card,card_id,s__72831__$2,temp__5753__auto__,G__72817,map__72777,map__72777__$1,workspace_id,cards,layouts,breakpoint,workspace_title,workspace_static_QMARK_,map__72778,map__72778__$1,open_solo_card))
,new cljs.core.Keyword("nubank.workspaces.ui","open-solo-card","nubank.workspaces.ui/open-solo-card",-1371578732),open_solo_card], null));
return (nubank.workspaces.ui.workspace_card.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.workspace_card.cljs$core$IFn$_invoke$arity$1(G__72845) : nubank.workspaces.ui.workspace_card.call(null,G__72845));
})()], 0)),nubank$workspaces$ui$render_Workspace_$_iter__72830(cljs.core.rest(s__72831__$2)));
} else {
var G__73908 = cljs.core.rest(s__72831__$2);
s__72831__$1 = G__73908;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cards);
})();
return (nubank.workspaces.ui.grid_layout.grid_layout.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.grid_layout.grid_layout.cljs$core$IFn$_invoke$arity$2(G__72817,G__72818) : nubank.workspaces.ui.grid_layout.grid_layout.call(null,G__72817,G__72818));
})():null)], 0))], 0));
}
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.Workspace !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.Workspace = (function nubank$workspaces$ui$Workspace(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___73909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___73685,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___73909)){
var init_state__55352__auto___73910 = temp__5751__auto___73909;
(this__55351__auto__.state = (function (){var obj72850 = ({"fulcro$state":(function (){var G__72851 = this__55351__auto__;
var G__72852 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___73910.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___73910.cljs$core$IFn$_invoke$arity$2(G__72851,G__72852) : init_state__55352__auto___73910.call(null,G__72851,G__72852));
})()});
return obj72850;
})());
} else {
(this__55351__auto__.state = (function (){var obj72854 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj72854;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.Workspace,new cljs.core.Keyword("nubank.workspaces.ui","Workspace","nubank.workspaces.ui/Workspace",1485031084),options__55349__auto___73685);
nubank.workspaces.ui.workspace = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.Workspace,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858)], null));

var options__55349__auto___73912 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$ui$ident_STAR_(this$,props){
return nubank.workspaces.ui.workspace_ident(props);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$ui$query_STAR_(this$){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.Workspace),new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.WorkspaceSoloCard)], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$workspaces-workspace-container","$workspaces-workspace-container",-495417857),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#9fa2ab",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#ef0000",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null)], null),new cljs.core.Keyword(null,"componentDidCatch","componentDidCatch",821717733),(function (this$,error,info){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nubank.workspaces.ui.components_with_error,cljs.core.conj,this$);

return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","error-catch?","nubank.workspaces.ui/error-catch?",1438279944),true], null));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$render_WorkspaceContainer(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
var map__72858 = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__72858__$1 = (((((!((map__72858 == null))))?(((((map__72858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72858):map__72858);
var open_solo_card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72858__$1,new cljs.core.Keyword("nubank.workspaces.ui","open-solo-card","nubank.workspaces.ui/open-solo-card",-1371578732));
if(cljs.core.truth_(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("nubank.workspaces.ui","error-catch?","nubank.workspaces.ui/error-catch?",1438279944)))){
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".error",".error",115475668),"Error rendering workspace, check console for details."], 0));
} else {
var G__72862 = cljs.core.first(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$));
var G__72862__$1 = (((G__72862 instanceof cljs.core.Keyword))?G__72862.fqn:null);
switch (G__72862__$1) {
case "nubank.workspaces.ui/workspace-id":
var G__72864 = com.fulcrologic.fulcro.components.computed(props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","open-solo-card","nubank.workspaces.ui/open-solo-card",-1371578732),open_solo_card], null));
return (nubank.workspaces.ui.workspace.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.workspace.cljs$core$IFn$_invoke$arity$1(G__72864) : nubank.workspaces.ui.workspace.call(null,G__72864));

break;
case "nubank.workspaces.model/card-id":
return (nubank.workspaces.ui.workspace_solo_card.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.workspace_solo_card.cljs$core$IFn$_invoke$arity$1(props) : nubank.workspaces.ui.workspace_solo_card.call(null,props));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72862__$1)].join('')));

}
}
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.WorkspaceContainer !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.WorkspaceContainer = (function nubank$workspaces$ui$WorkspaceContainer(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___73920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___73912,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___73920)){
var init_state__55352__auto___73921 = temp__5751__auto___73920;
(this__55351__auto__.state = (function (){var obj72866 = ({"fulcro$state":(function (){var G__72867 = this__55351__auto__;
var G__72868 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___73921.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___73921.cljs$core$IFn$_invoke$arity$2(G__72867,G__72868) : init_state__55352__auto___73921.call(null,G__72867,G__72868));
})()});
return obj72866;
})());
} else {
(this__55351__auto__.state = (function (){var obj72870 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj72870;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.WorkspaceContainer,new cljs.core.Keyword("nubank.workspaces.ui","WorkspaceContainer","nubank.workspaces.ui/WorkspaceContainer",171698625),options__55349__auto___73912);
nubank.workspaces.ui.workspace_container = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.WorkspaceContainer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__72874_SHARP_){
var or__4126__auto__ = new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858).cljs$core$IFn$_invoke$arity$1(p1__72874_SHARP_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809).cljs$core$IFn$_invoke$arity$1(p1__72874_SHARP_);
}
})], null));

var options__55349__auto___73925 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$ui$ident_STAR_(_,props){
return nubank.workspaces.ui.workspace_ident(props);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$ui$query_STAR_(_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),new cljs.core.Keyword("nubank.workspaces.model","workspace-static?","nubank.workspaces.model/workspace-static?",1744769950),new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$render_WorkspaceTabItem(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var props = com.fulcrologic.fulcro.components.props(_);
return null;
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.WorkspaceTabItem !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.WorkspaceTabItem = (function nubank$workspaces$ui$WorkspaceTabItem(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___73927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___73925,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___73927)){
var init_state__55352__auto___73929 = temp__5751__auto___73927;
(this__55351__auto__.state = (function (){var obj72879 = ({"fulcro$state":(function (){var G__72880 = this__55351__auto__;
var G__72881 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___73929.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___73929.cljs$core$IFn$_invoke$arity$2(G__72880,G__72881) : init_state__55352__auto___73929.call(null,G__72880,G__72881));
})()});
return obj72879;
})());
} else {
(this__55351__auto__.state = (function (){var obj72883 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj72883;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.WorkspaceTabItem,new cljs.core.Keyword("nubank.workspaces.ui","WorkspaceTabItem","nubank.workspaces.ui/WorkspaceTabItem",1782145703),options__55349__auto___73925);

var options__55349__auto___73932 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function nubank$workspaces$ui$build_raw_initial_state_STAR_(_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.ws_data__GT_ident_map,nubank.workspaces.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),(function (){var temp__5751__auto__ = nubank.workspaces.lib.local_storage.get.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814));
if(cljs.core.truth_(temp__5751__auto__)){
var active = temp__5751__auto__;
return nubank.workspaces.ui.ws_data__GT_ident_map(active);
} else {
return null;
}
})()], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$ui$ident_STAR_(this$,p__72894){
var map__72895 = p__72894;
var map__72895__$1 = (((((!((map__72895 == null))))?(((((map__72895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72895):map__72895);
var active_workspace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72895__$1,new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814));
var open_workspaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72895__$1,new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton"], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.WorkspaceTabItem)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.WorkspaceContainer)], null)], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".tabs",".tabs",642963783),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"nowrap",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".tab",".tab",1455359754),nubank.workspaces.ui.core.font_os12sb,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941)],["center",nubank.workspaces.ui.core.color_limed_spruce,"hidden",nubank.workspaces.ui.core.color_iron,"pointer","0 0 auto","1","7px 12px 9px","flex","1px",["1px solid ",nubank.workspaces.ui.core.color_geyser].join(''),"6px 6px 0 0","-1px"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.active-tab","&.active-tab",2033073281),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),nubank.workspaces.ui.core.color_white,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),["1px solid ",nubank.workspaces.ui.core.color_white].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".active",".active",-1779503645),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),["1px solid ",nubank.workspaces.ui.core.color_geyser].join(''),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"min-height","min-height",398480837),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".new-tab",".new-tab",-1096253910),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"23px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".welcome",".welcome",-697886208),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),nubank.workspaces.ui.core.color_dark_grey,new cljs.core.Keyword(null,"color","color",1011675173),"#fff",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".welcome-content",".welcome-content",-884469317),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"color","color",1011675173),"#000",new cljs.core.Keyword(null,"font-family","font-family",-667419874),nubank.workspaces.ui.core.font_open_sans,new cljs.core.Keyword(null,"padding","padding",1660304693),"0 12px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"12px 0"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".workspace-title",".workspace-title",9128440),nubank.workspaces.ui.core.font_os12sb,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"direction","direction",-633359395)],["ellipsis","0 0 2px 0 transparent","nowrap","hidden","transparent","pointer","1","150px","1px solid transparent","rtl"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:focus","&:focus",1074121139),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #0079bf",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 2px 0 #0284c6",new cljs.core.Keyword(null,"outline","outline",793464534),"0",new cljs.core.Keyword(null,"color","color",1011675173),"#000 !important",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"text"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".workspace-close",".workspace-close",631096870),nubank.workspaces.ui.core.close_icon_css,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null)], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$render_WorkspaceTabs(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__72900 = com.fulcrologic.fulcro.components.props(this$);
var map__72900__$1 = (((((!((map__72900 == null))))?(((((map__72900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72900):map__72900);
var active_workspace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72900__$1,new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814));
var open_workspaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72900__$1,new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447));
var update_title = (function (new_title,workspace_id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","update-workspace","nubank.workspaces.ui/update-workspace",-2145331844,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),workspace_id,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),new_title], null),null,(1),null)))))], null));
});
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),nubank.workspaces.ui.events.dom_listener(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-close-workspace","nubank.workspaces.ui/keybinding-close-workspace",145944058)),new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","close-workspace","nubank.workspaces.ui/close-workspace",-1735247601,null),null,(1),null)),(new cljs.core.List(null,active_workspace,null,(1),null)))))], null));
})], null)),nubank.workspaces.ui.events.dom_listener(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-new-workspace","nubank.workspaces.ui/keybinding-new-workspace",-1840796647)),new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","create-workspace","nubank.workspaces.ui/create-workspace",-404659908,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)))))], null));
})], null)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".tabs",".tabs",642963783),(function (){var iter__4529__auto__ = (function nubank$workspaces$ui$render_WorkspaceTabs_$_iter__72905(s__72906){
return (new cljs.core.LazySeq(null,(function (){
var s__72906__$1 = s__72906;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__72906__$1);
if(temp__5753__auto__){
var s__72906__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72906__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__72906__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__72908 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__72907 = (0);
while(true){
if((i__72907 < size__4528__auto__)){
var map__72912 = cljs.core._nth(c__4527__auto__,i__72907);
var map__72912__$1 = (((((!((map__72912 == null))))?(((((map__72912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72912):map__72912);
var tab_ws = map__72912__$1;
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72912__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72912__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
var workspace_static_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72912__$1,new cljs.core.Keyword("nubank.workspaces.model","workspace-static?","nubank.workspaces.model/workspace-static?",1744769950));
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72912__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
var current_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.workspace_ident(tab_ws),nubank.workspaces.ui.workspace_ident(active_workspace));
cljs.core.chunk_append(b__72908,com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".tab",".tab",1455359754),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var or__4126__auto__ = workspace_id;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return card_id;
}
})(),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((current_QMARK_)?new cljs.core.Keyword(null,".active-tab",".active-tab",1387866299):null)], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__72907,current_QMARK_,map__72912,map__72912__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4527__auto__,size__4528__auto__,b__72908,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces){
return (function (){
var ws_ident = nubank.workspaces.ui.workspace_ident(tab_ws);
com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),ws_ident);

return nubank.workspaces.lib.local_storage.set_BANG_(new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),ws_ident);
});})(i__72907,current_QMARK_,map__72912,map__72912__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4527__auto__,size__4528__auto__,b__72908,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces))
], null),(cljs.core.truth_((function (){var or__4126__auto__ = workspace_static_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = card_id;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (!(current_QMARK_));
}
}
})())?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace-title",".workspace-title",9128440),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = workspace_title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return card_id;
}
})())], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = workspace_title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return card_id;
}
})())], 0)):com.fulcrologic.fulcro_css.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace-title",".workspace-title",9128440),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_title),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (i__72907,current_QMARK_,map__72912,map__72912__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4527__auto__,size__4528__auto__,b__72908,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces){
return (function (_){
return null;
});})(i__72907,current_QMARK_,map__72912,map__72912__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4527__auto__,size__4528__auto__,b__72908,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces))
,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__72907,current_QMARK_,map__72912,map__72912__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4527__auto__,size__4528__auto__,b__72908,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces){
return (function (p1__72887_SHARP_){
return p1__72887_SHARP_.target.select();
});})(i__72907,current_QMARK_,map__72912,map__72912__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4527__auto__,size__4528__auto__,b__72908,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces))
,new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (i__72907,current_QMARK_,map__72912,map__72912__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4527__auto__,size__4528__auto__,b__72908,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces){
return (function (p1__72888_SHARP_){
return update_title(p1__72888_SHARP_.target.value,workspace_id);
});})(i__72907,current_QMARK_,map__72912,map__72912__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4527__auto__,size__4528__auto__,b__72908,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces))
,new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),((function (i__72907,current_QMARK_,map__72912,map__72912__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4527__auto__,size__4528__auto__,b__72908,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces){
return (function (p1__72889_SHARP_){
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.get.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.events.KEYS,"return"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.events.KEYS,"escape")]),p1__72889_SHARP_.keyCode)){
return p1__72889_SHARP_.target.blur();
} else {
return null;
}
});})(i__72907,current_QMARK_,map__72912,map__72912__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4527__auto__,size__4528__auto__,b__72908,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces))
], null)], 0))),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace-close",".workspace-close",631096870),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__72907,current_QMARK_,map__72912,map__72912__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4527__auto__,size__4528__auto__,b__72908,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces){
return (function (e){
e.stopPropagation();

return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","close-workspace","nubank.workspaces.ui/close-workspace",-1735247601,null),null,(1),null)),(new cljs.core.List(null,tab_ws,null,(1),null)))))], null));
});})(i__72907,current_QMARK_,map__72912,map__72912__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4527__auto__,size__4528__auto__,b__72908,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces))
], null),"\u00D7"], 0))], 0)));

var G__73960 = (i__72907 + (1));
i__72907 = G__73960;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72908),nubank$workspaces$ui$render_WorkspaceTabs_$_iter__72905(cljs.core.chunk_rest(s__72906__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72908),null);
}
} else {
var map__72920 = cljs.core.first(s__72906__$2);
var map__72920__$1 = (((((!((map__72920 == null))))?(((((map__72920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72920):map__72920);
var tab_ws = map__72920__$1;
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72920__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72920__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
var workspace_static_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72920__$1,new cljs.core.Keyword("nubank.workspaces.model","workspace-static?","nubank.workspaces.model/workspace-static?",1744769950));
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72920__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
var current_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.workspace_ident(tab_ws),nubank.workspaces.ui.workspace_ident(active_workspace));
return cljs.core.cons(com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".tab",".tab",1455359754),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var or__4126__auto__ = workspace_id;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return card_id;
}
})(),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((current_QMARK_)?new cljs.core.Keyword(null,".active-tab",".active-tab",1387866299):null)], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (current_QMARK_,map__72920,map__72920__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces){
return (function (){
var ws_ident = nubank.workspaces.ui.workspace_ident(tab_ws);
com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),ws_ident);

return nubank.workspaces.lib.local_storage.set_BANG_(new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),ws_ident);
});})(current_QMARK_,map__72920,map__72920__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces))
], null),(cljs.core.truth_((function (){var or__4126__auto__ = workspace_static_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = card_id;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (!(current_QMARK_));
}
}
})())?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace-title",".workspace-title",9128440),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = workspace_title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return card_id;
}
})())], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = workspace_title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return card_id;
}
})())], 0)):com.fulcrologic.fulcro_css.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace-title",".workspace-title",9128440),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_title),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (current_QMARK_,map__72920,map__72920__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces){
return (function (_){
return null;
});})(current_QMARK_,map__72920,map__72920__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces))
,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (current_QMARK_,map__72920,map__72920__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces){
return (function (p1__72887_SHARP_){
return p1__72887_SHARP_.target.select();
});})(current_QMARK_,map__72920,map__72920__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces))
,new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (current_QMARK_,map__72920,map__72920__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces){
return (function (p1__72888_SHARP_){
return update_title(p1__72888_SHARP_.target.value,workspace_id);
});})(current_QMARK_,map__72920,map__72920__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces))
,new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),((function (current_QMARK_,map__72920,map__72920__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces){
return (function (p1__72889_SHARP_){
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.get.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.events.KEYS,"return"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.events.KEYS,"escape")]),p1__72889_SHARP_.keyCode)){
return p1__72889_SHARP_.target.blur();
} else {
return null;
}
});})(current_QMARK_,map__72920,map__72920__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces))
], null)], 0))),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace-close",".workspace-close",631096870),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (current_QMARK_,map__72920,map__72920__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces){
return (function (e){
e.stopPropagation();

return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","close-workspace","nubank.workspaces.ui/close-workspace",-1735247601,null),null,(1),null)),(new cljs.core.List(null,tab_ws,null,(1),null)))))], null));
});})(current_QMARK_,map__72920,map__72920__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__72906__$2,temp__5753__auto__,update_title,map__72900,map__72900__$1,active_workspace,open_workspaces))
], null),"\u00D7"], 0))], 0)),nubank$workspaces$ui$render_WorkspaceTabs_$_iter__72905(cljs.core.rest(s__72906__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),open_workspaces));
})(),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".tab.new-tab",".tab.new-tab",1931822071),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","create-workspace","nubank.workspaces.ui/create-workspace",-404659908,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)))))], null));
})], null),"+"], 0))], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".active",".active",-1779503645),(cljs.core.truth_(active_workspace)?(function (){var G__72928 = com.fulcrologic.fulcro.components.computed(active_workspace,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","open-solo-card","nubank.workspaces.ui/open-solo-card",-1371578732),(function (p1__72890_SHARP_){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","open-solo-workspace","nubank.workspaces.ui/open-solo-workspace",-1902644014,null),null,(1),null)),(new cljs.core.List(null,p1__72890_SHARP_,null,(1),null)))))], null));
})], null));
return (nubank.workspaces.ui.workspace_container.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.workspace_container.cljs$core$IFn$_invoke$arity$1(G__72928) : nubank.workspaces.ui.workspace_container.call(null,G__72928));
})():com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".welcome",".welcome",-697886208),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".welcome-content",".welcome-content",-884469317),com.fulcrologic.fulcro_css.localized_dom.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Welcome to workspaces!"], 0)),com.fulcrologic.fulcro_css.localized_dom.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Use the index on the left to start navigating."], 0)),com.fulcrologic.fulcro_css.localized_dom.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["If you like more instructions please check ",com.fulcrologic.fulcro_css.localized_dom.a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/nubank/workspaces#using-workspaces",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"workspaces usage guide"], 0)),"."], 0))], 0))], 0)))], 0))], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.WorkspaceTabs !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.WorkspaceTabs = (function nubank$workspaces$ui$WorkspaceTabs(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___73998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___73932,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___73998)){
var init_state__55352__auto___74005 = temp__5751__auto___73998;
(this__55351__auto__.state = (function (){var obj72933 = ({"fulcro$state":(function (){var G__72934 = this__55351__auto__;
var G__72935 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___74005.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___74005.cljs$core$IFn$_invoke$arity$2(G__72934,G__72935) : init_state__55352__auto___74005.call(null,G__72934,G__72935));
})()});
return obj72933;
})());
} else {
(this__55351__auto__.state = (function (){var obj72937 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj72937;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.WorkspaceTabs,new cljs.core.Keyword("nubank.workspaces.ui","WorkspaceTabs","nubank.workspaces.ui/WorkspaceTabs",948705863),options__55349__auto___73932);
nubank.workspaces.ui.workspace_tabs = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.WorkspaceTabs);

var options__55349__auto___74021 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function nubank$workspaces$ui$build_raw_initial_state_STAR_(card){
return cljs.core.select_keys(card,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),new cljs.core.Keyword("nubank.workspaces.model","test?","nubank.workspaces.model/test?",993719827),new cljs.core.Keyword("nubank.workspaces.model","card-unlisted?","nubank.workspaces.model/card-unlisted?",-302030555)], null));
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$ui$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),new cljs.core.Keyword("nubank.workspaces.model","test?","nubank.workspaces.model/test?",993719827),new cljs.core.Keyword("nubank.workspaces.model","card-unlisted?","nubank.workspaces.model/card-unlisted?",-302030555)], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null)], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$render_CardIndexListing(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__72942 = com.fulcrologic.fulcro.components.props(this$);
var map__72942__$1 = (((((!((map__72942 == null))))?(((((map__72942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72942):map__72942);
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72942__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__72938_SHARP_){
if(cljs.core.truth_(p1__72938_SHARP_.altKey)){
return nubank.workspaces.ui.add_card_solo(this$,card_id);
} else {
return nubank.workspaces.ui.add_card(this$,card_id);
}
})], null),cljs.core.name(card_id)], 0))], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.CardIndexListing !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.CardIndexListing = (function nubank$workspaces$ui$CardIndexListing(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___74023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___74021,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___74023)){
var init_state__55352__auto___74024 = temp__5751__auto___74023;
(this__55351__auto__.state = (function (){var obj72948 = ({"fulcro$state":(function (){var G__72949 = this__55351__auto__;
var G__72950 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___74024.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___74024.cljs$core$IFn$_invoke$arity$2(G__72949,G__72950) : init_state__55352__auto___74024.call(null,G__72949,G__72950));
})()});
return obj72948;
})());
} else {
(this__55351__auto__.state = (function (){var obj72954 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj72954;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.CardIndexListing,new cljs.core.Keyword("nubank.workspaces.ui","CardIndexListing","nubank.workspaces.ui/CardIndexListing",-1935958460),options__55349__auto___74021);
nubank.workspaces.ui.card_index_listing = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.CardIndexListing,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809)], null));

var options__55349__auto___74027 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$ui$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$ui$query_STAR_(_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),new cljs.core.Keyword("nubank.workspaces.model","workspace-static?","nubank.workspaces.model/workspace-static?",1744769950)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$render_WorkspaceIndexListing(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var ___$1 = com.fulcrologic.fulcro.components.props(_);
return null;
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.WorkspaceIndexListing !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.WorkspaceIndexListing = (function nubank$workspaces$ui$WorkspaceIndexListing(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___74031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___74027,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___74031)){
var init_state__55352__auto___74033 = temp__5751__auto___74031;
(this__55351__auto__.state = (function (){var obj72960 = ({"fulcro$state":(function (){var G__72961 = this__55351__auto__;
var G__72962 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___74033.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___74033.cljs$core$IFn$_invoke$arity$2(G__72961,G__72962) : init_state__55352__auto___74033.call(null,G__72961,G__72962));
})()});
return obj72960;
})());
} else {
(this__55351__auto__.state = (function (){var obj72964 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj72964;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.WorkspaceIndexListing,new cljs.core.Keyword("nubank.workspaces.ui","WorkspaceIndexListing","nubank.workspaces.ui/WorkspaceIndexListing",-1301015075),options__55349__auto___74027);
nubank.workspaces.ui.workspace_index_listing = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.WorkspaceIndexListing,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858)], null));
/**
 * 
 */
nubank.workspaces.ui.load_card = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","load-card","nubank.workspaces.ui/load-card",817030703,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","load-card","nubank.workspaces.ui/load-card",817030703,null),(function (fulcro_mutation_env_symbol){
var card = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__72968){
var map__72969 = p__72968;
var map__72969__$1 = (((((!((map__72969 == null))))?(((((map__72969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72969):map__72969);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72969__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var _STAR_after_render_STAR__orig_val__72973_74036 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72974_74037 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72974_74037);

try{com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic(reconciler,nubank.workspaces.ui.CardIndexListing,com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.CardIndexListing,card),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-root","nubank.workspaces.ui/workspace-root",695328612),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701)], null)], 0));
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72973_74036);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__72976 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72977 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72977);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72976);
}})], null);
}));
nubank.workspaces.ui.initialize_static_workspaces = (function nubank$workspaces$ui$initialize_static_workspaces(){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__72978_SHARP_){
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.Workspace,p1__72978_SHARP_);
}),cljs.core.vals(cljs.core.deref(nubank.workspaces.data.workspace_definitions_STAR_)));
});
/**
 * 
 */
nubank.workspaces.ui.load_workspace = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","load-workspace","nubank.workspaces.ui/load-workspace",60048364,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","load-workspace","nubank.workspaces.ui/load-workspace",60048364,null),(function (fulcro_mutation_env_symbol){
var workspace = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__72982){
var map__72983 = p__72982;
var map__72983__$1 = (((((!((map__72983 == null))))?(((((map__72983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72983):map__72983);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72983__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72983__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__72985_74045 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72986_74046 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72986_74046);

try{com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic(reconciler,nubank.workspaces.ui.Workspace,nubank.workspaces.ui.normalize_ws_cards(cljs.core.deref(state),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.Workspace,workspace)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-root","nubank.workspaces.ui/workspace-root",695328612),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","workspaces","nubank.workspaces.ui/workspaces",1165878450)], null)], 0));
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72985_74045);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__72990 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72991 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72991);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72990);
}})], null);
}));
/**
 * 
 */
nubank.workspaces.ui.select_workspace = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","select-workspace","nubank.workspaces.ui/select-workspace",558971453,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","select-workspace","nubank.workspaces.ui/select-workspace",558971453,null),(function (fulcro_mutation_env_symbol){
var map__72995 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__72995__$1 = (((((!((map__72995 == null))))?(((((map__72995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72995):map__72995);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72995__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),(function nubank$workspaces$ui$refresh(_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814)], null);
}),new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__72997){
var map__72998 = p__72997;
var map__72998__$1 = (((((!((map__72998 == null))))?(((((map__72998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72998):map__72998);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72998__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__73003_74055 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__73004_74056 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__73004_74056);

try{var open_workspaces_74057 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447)], null)));
var ws_ref_74058 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),workspace_id], null);
if((!(cljs.core.contains_QMARK_(open_workspaces_74057,workspace_id)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ws_ref_74058], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814)], null),ws_ref_74058);

nubank.workspaces.lib.local_storage.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([workspace_id], 0));

nubank.workspaces.lib.local_storage.set_BANG_(new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),workspace_id);
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__73003_74055);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__73005 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__73006 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__73006);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__73005);
}})], null);
}));
/**
 * 
 */
nubank.workspaces.ui.toggle_ns_expansion = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","toggle-ns-expansion","nubank.workspaces.ui/toggle-ns-expansion",117524570,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","toggle-ns-expansion","nubank.workspaces.ui/toggle-ns-expansion",117524570,null),(function (fulcro_mutation_env_symbol){
var map__73010 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__73010__$1 = (((((!((map__73010 == null))))?(((((map__73010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73010):map__73010);
var expand_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73010__$1,new cljs.core.Keyword("nubank.workspaces.ui","expand-path","nubank.workspaces.ui/expand-path",-795465683));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__73012){
var map__73013 = p__73012;
var map__73013__$1 = (((((!((map__73013 == null))))?(((((map__73013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73013):map__73013);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73013__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73013__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__73018_74068 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__73019_74069 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__73019_74069);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui","expanded","nubank.workspaces.ui/expanded",-751310223),cljs.core.update_in,expand_path,cljs.core.not], 0));

nubank.workspaces.lib.local_storage.set_BANG_(new cljs.core.Keyword("nubank.workspaces.ui","expanded","nubank.workspaces.ui/expanded",-751310223),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("nubank.workspaces.ui","expanded","nubank.workspaces.ui/expanded",-751310223))));
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__73018_74068);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__73020 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__73021 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__73021);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__73020);
}})], null);
}));
/**
 * 
 */
nubank.workspaces.ui.toggle_index_view = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","toggle-index-view","nubank.workspaces.ui/toggle-index-view",-2043129614,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","toggle-index-view","nubank.workspaces.ui/toggle-index-view",-2043129614,null),(function (fulcro_mutation_env_symbol){
var _ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__73025){
var map__73026 = p__73025;
var map__73026__$1 = (((((!((map__73026 == null))))?(((((map__73026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73026):map__73026);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73026__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73026__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__73028_74073 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__73029_74074 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__73029_74074);

try{var show_index_QMARK__74075 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ref,new cljs.core.Keyword("nubank.workspaces.ui","settings","nubank.workspaces.ui/settings",139105956),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui","show-index?","nubank.workspaces.ui/show-index?",580921311)], 0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ref,new cljs.core.Keyword("nubank.workspaces.ui","settings","nubank.workspaces.ui/settings",139105956),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui","show-index?","nubank.workspaces.ui/show-index?",580921311)], 0)),cljs.core.not(show_index_QMARK__74075));

nubank.workspaces.lib.local_storage.set_BANG_(new cljs.core.Keyword("nubank.workspaces.ui","show-index?","nubank.workspaces.ui/show-index?",580921311),cljs.core.not(show_index_QMARK__74075));

setTimeout((function (){
return nubank.workspaces.ui.events.trigger_event(window,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui.events","event","nubank.workspaces.ui.events/event",-1162809276),"resize"], null));
}),(100));
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__73028_74073);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__73033 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__73034 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__73034);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__73033);
}})], null);
}));
nubank.workspaces.ui.open_spotlight = (function nubank$workspaces$ui$open_spotlight(this$){
var map__73038 = com.fulcrologic.fulcro.components.props(this$);
var map__73038__$1 = (((((!((map__73038 == null))))?(((((map__73038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73038):map__73038);
var spotlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73038__$1,new cljs.core.Keyword("nubank.workspaces.ui","spotlight","nubank.workspaces.ui/spotlight",1269025828));
var state = com.fulcrologic.fulcro.components.component__GT_state_map(this$);
var options = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__73040){
var vec__73041 = p__73040;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73041,(0),null);
var map__73044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73041,(1),null);
var map__73044__$1 = (((((!((map__73044 == null))))?(((((map__73044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73044):map__73044);
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73044__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
var test_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73044__$1,new cljs.core.Keyword("nubank.workspaces.model","test?","nubank.workspaces.model/test?",993719827));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.spotlight","type","nubank.workspaces.ui.spotlight/type",1675623435),(cljs.core.truth_(test_QMARK_)?new cljs.core.Keyword("nubank.workspaces.ui.spotlight","test","nubank.workspaces.ui.spotlight/test",-2118206012):new cljs.core.Keyword("nubank.workspaces.ui.spotlight","card","nubank.workspaces.ui.spotlight/card",-882323793)),new cljs.core.Keyword("nubank.workspaces.ui.spotlight","id","nubank.workspaces.ui.spotlight/id",-871569707),card_id], null);
})),new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__73049){
var vec__73050 = p__73049;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73050,(0),null);
var map__73053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73050,(1),null);
var map__73053__$1 = (((((!((map__73053 == null))))?(((((map__73053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73053):map__73053);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73053__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73053__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("nubank.workspaces.ui.spotlight","type","nubank.workspaces.ui.spotlight/type",1675623435),new cljs.core.Keyword("nubank.workspaces.ui.spotlight","workspace","nubank.workspaces.ui.spotlight/workspace",-529313372),new cljs.core.Keyword("nubank.workspaces.ui.spotlight","id","nubank.workspaces.ui.spotlight/id",-871569707),workspace_id,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","label","nubank.workspaces.ui.spotlight/label",1308535731),workspace_title], null);
})),new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858).cljs$core$IFn$_invoke$arity$1(state));
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.components.any__GT_app(this$),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui.spotlight","reset","nubank.workspaces.ui.spotlight/reset",475380012,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","options","nubank.workspaces.ui.spotlight/options",-459165350),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)))))),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.spotlight.Spotlight,spotlight)], null));

return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","show-spotlight?","nubank.workspaces.ui/show-spotlight?",1825873402),true);
});

var options__55349__auto___74204 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"rgba(0, 0, 0, 0.8)",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"color","color",1011675173),"#fff",new cljs.core.Keyword(null,"font-family","font-family",-667419874),nubank.workspaces.ui.core.font_monospace,new cljs.core.Keyword(null,"padding","padding",1660304693),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".header",".header",-1761691025),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),nubank.workspaces.ui.core.font_open_sans,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"26px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"margin","margin",-995903681),"-5px 0 20px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null)], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$render_HelpDialog(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__73058 = com.fulcrologic.fulcro.components.props(this$);
var map__73058__$1 = (((((!((map__73058 == null))))?(((((map__73058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73058):map__73058);
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".header",".header",-1761691025),"Keyboard Shortcuts"], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro_css.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-spotlight","nubank.workspaces.ui/keybinding-spotlight",254588049))], 0)),": Add card to current workspace (open spotlight for card picking)"], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro_css.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-toggle-index","nubank.workspaces.ui/keybinding-toggle-index",2077220551))], 0)),": Toggle index view"], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro_css.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-toggle-card-headers","nubank.workspaces.ui/keybinding-toggle-card-headers",1763073649))], 0)),": Toggle card headers"], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro_css.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-new-workspace","nubank.workspaces.ui/keybinding-new-workspace",-1840796647))], 0)),": Create new local workspace"], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro_css.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-close-workspace","nubank.workspaces.ui/keybinding-close-workspace",145944058))], 0)),": Close current workspace"], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro_css.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["alt-shift-?"], 0)),": Toggle shorcuts modal"], 0))], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.HelpDialog !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.HelpDialog = (function nubank$workspaces$ui$HelpDialog(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___74206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___74204,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___74206)){
var init_state__55352__auto___74208 = temp__5751__auto___74206;
(this__55351__auto__.state = (function (){var obj73064 = ({"fulcro$state":(function (){var G__73065 = this__55351__auto__;
var G__73066 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___74208.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___74208.cljs$core$IFn$_invoke$arity$2(G__73065,G__73066) : init_state__55352__auto___74208.call(null,G__73065,G__73066));
})()});
return obj73064;
})());
} else {
(this__55351__auto__.state = (function (){var obj73070 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj73070;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.HelpDialog,new cljs.core.Keyword("nubank.workspaces.ui","HelpDialog","nubank.workspaces.ui/HelpDialog",-262514724),options__55349__auto___74204);
nubank.workspaces.ui.help_dialog = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.HelpDialog);

var options__55349__auto___74210 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function nubank$workspaces$ui$build_raw_initial_state_STAR_(card_definitions){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__73072_SHARP_){
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.CardIndexListing,p1__73072_SHARP_);
}),cljs.core.vals(card_definitions)),new cljs.core.Keyword("nubank.workspaces.ui","workspaces","nubank.workspaces.ui/workspaces",1165878450),cljs.core.into.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.initialize_static_workspaces(),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__73073_SHARP_){
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.Workspace,nubank.workspaces.lib.local_storage.tget.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),p1__73073_SHARP_], null)));
}),nubank.workspaces.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.ui","local-workspaces","nubank.workspaces.ui/local-workspaces",-1846378387),cljs.core.PersistentVector.EMPTY))),new cljs.core.Keyword("nubank.workspaces.ui","expanded","nubank.workspaces.ui/expanded",-751310223),nubank.workspaces.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.ui","expanded","nubank.workspaces.ui/expanded",-751310223),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("nubank.workspaces.ui","ws-tabs","nubank.workspaces.ui/ws-tabs",872859899),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.WorkspaceTabs,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("nubank.workspaces.ui","spotlight","nubank.workspaces.ui/spotlight",1269025828),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.spotlight.Spotlight,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("nubank.workspaces.ui","show-spotlight?","nubank.workspaces.ui/show-spotlight?",1825873402),false,new cljs.core.Keyword("nubank.workspaces.ui","show-help-modal?","nubank.workspaces.ui/show-help-modal?",827473639),false,new cljs.core.Keyword("nubank.workspaces.ui","settings","nubank.workspaces.ui/settings",139105956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","show-index?","nubank.workspaces.ui/show-index?",580921311),nubank.workspaces.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.ui","show-index?","nubank.workspaces.ui/show-index?",580921311),true)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$ui$ident_STAR_(this$,p__73082){
var map__73083 = p__73082;
var map__73083__$1 = (((((!((map__73083 == null))))?(((((map__73083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73083):map__73083);
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73083__$1,new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701));
var ws_tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73083__$1,new cljs.core.Keyword("nubank.workspaces.ui","ws-tabs","nubank.workspaces.ui/ws-tabs",872859899));
var workspaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73083__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspaces","nubank.workspaces.ui/workspaces",1165878450));
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73083__$1,new cljs.core.Keyword("nubank.workspaces.ui","settings","nubank.workspaces.ui/settings",139105956));
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73083__$1,new cljs.core.Keyword("nubank.workspaces.ui","expanded","nubank.workspaces.ui/expanded",-751310223));
var spotlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73083__$1,new cljs.core.Keyword("nubank.workspaces.ui","spotlight","nubank.workspaces.ui/spotlight",1269025828));
var show_spotlight_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73083__$1,new cljs.core.Keyword("nubank.workspaces.ui","show-spotlight?","nubank.workspaces.ui/show-spotlight?",1825873402));
var show_help_modal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73083__$1,new cljs.core.Keyword("nubank.workspaces.ui","show-help-modal?","nubank.workspaces.ui/show-help-modal?",827473639));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-root","nubank.workspaces.ui/workspace-root",695328612),"singleton"], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","settings","nubank.workspaces.ui/settings",139105956),new cljs.core.Keyword("nubank.workspaces.ui","expanded","nubank.workspaces.ui/expanded",-751310223),new cljs.core.Keyword("nubank.workspaces.ui","show-spotlight?","nubank.workspaces.ui/show-spotlight?",1825873402),new cljs.core.Keyword("nubank.workspaces.ui","show-help-modal?","nubank.workspaces.ui/show-help-modal?",827473639),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.CardIndexListing)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","workspaces","nubank.workspaces.ui/workspaces",1165878450),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.WorkspaceIndexListing)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","ws-tabs","nubank.workspaces.ui/ws-tabs",872859899),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.WorkspaceTabs)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","spotlight","nubank.workspaces.ui/spotlight",1269025828),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.spotlight.Spotlight)], null)], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"background","background",-863952629),"#f7f7f7",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"10px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),nubank.workspaces.ui.core.font_open_sans,new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),"0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"300px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".workspaces",".workspaces",317220476),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"100vh",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".index-action-button",".index-action-button",859695279),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"border","border",1444987323)],["23px","bold","-4px","transparent","pointer","0","none","5px","none"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.spotlight","&.spotlight",1243372633),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"transparent",new cljs.core.Keyword(null,"text-shadow","text-shadow",116733623),"0 0 #ffffff",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"margin","margin",-995903681),"-2px 10px 0 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.help","&.help",-256627561),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"17px",new cljs.core.Keyword(null,"margin","margin",-995903681),"-2px 10px 0 0"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".header",".header",-1761691025),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background","background",-863952629),"#404040",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"color","color",1011675173),"#fff",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 7px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",new cljs.core.Keyword(null,"margin","margin",-995903681),"1px 1px 6px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".row",".row",-368374508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pointer",".pointer",614214252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".workspaces-solo",".workspaces-solo",-85217111),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".workspace",".workspace",1526137578),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".nest-group",".nest-group",-588503719),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"32px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".nest-group-small",".nest-group-small",-1151011320),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"18px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".ns-header",".ns-header",60233442),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".expand-arrow",".expand-arrow",489938474),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null)], null),new cljs.core.Keyword(null,"css-include","css-include",559023012),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nubank.workspaces.ui.core.CSS,nubank.workspaces.ui.HelpDialog], null),new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spotlight-select","spotlight-select",-635934435),(function (p__73091,solo_QMARK_){
var map__73092 = p__73091;
var map__73092__$1 = (((((!((map__73092 == null))))?(((((map__73092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73092):map__73092);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73092__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","id","nubank.workspaces.ui.spotlight/id",-871569707));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73092__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","type","nubank.workspaces.ui.spotlight/type",1675623435));
if(cljs.core.truth_(id)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","workspace","nubank.workspaces.ui.spotlight/workspace",-529313372))){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","select-workspace","nubank.workspaces.ui/select-workspace",558971453,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),null,(1),null)),(new cljs.core.List(null,id,null,(1),null)))))),null,(1),null)))))], null));
} else {
if(cljs.core.truth_(solo_QMARK_)){
nubank.workspaces.ui.add_card_solo(this$,id);
} else {
nubank.workspaces.ui.add_card(this$,id);

}
}
} else {
}

return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","show-spotlight?","nubank.workspaces.ui/show-spotlight?",1825873402),false);
})], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$render_WorkspacesRoot(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__73096 = com.fulcrologic.fulcro.components.props(this$);
var map__73096__$1 = (((((!((map__73096 == null))))?(((((map__73096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73096):map__73096);
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73096__$1,new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701));
var ws_tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73096__$1,new cljs.core.Keyword("nubank.workspaces.ui","ws-tabs","nubank.workspaces.ui/ws-tabs",872859899));
var workspaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73096__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspaces","nubank.workspaces.ui/workspaces",1165878450));
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73096__$1,new cljs.core.Keyword("nubank.workspaces.ui","settings","nubank.workspaces.ui/settings",139105956));
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73096__$1,new cljs.core.Keyword("nubank.workspaces.ui","expanded","nubank.workspaces.ui/expanded",-751310223));
var spotlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73096__$1,new cljs.core.Keyword("nubank.workspaces.ui","spotlight","nubank.workspaces.ui/spotlight",1269025828));
var show_spotlight_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73096__$1,new cljs.core.Keyword("nubank.workspaces.ui","show-spotlight?","nubank.workspaces.ui/show-spotlight?",1825873402));
var show_help_modal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73096__$1,new cljs.core.Keyword("nubank.workspaces.ui","show-help-modal?","nubank.workspaces.ui/show-help-modal?",827473639));
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.fulcrologic.fulcro_css.css_injection.style_element(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),nubank.workspaces.ui.WorkspacesRoot], null)),nubank.workspaces.ui.events.dom_listener(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-toggle-index","nubank.workspaces.ui/keybinding-toggle-index",2077220551)),new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","toggle-index-view","nubank.workspaces.ui/toggle-index-view",-2043129614,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)))))], null));
})], null)),nubank.workspaces.ui.events.dom_listener(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),"alt-shift-/",new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (){
return com.fulcrologic.fulcro.mutations.toggle_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","show-help-modal?","nubank.workspaces.ui/show-help-modal?",827473639));
})], null)),nubank.workspaces.ui.events.dom_listener(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-fix-sizes","nubank.workspaces.ui/keybinding-fix-sizes",1615114381)),new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (){
return nubank.workspaces.ui.events.trigger_event(window,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui.events","event","nubank.workspaces.ui.events/event",-1162809276),"resize"], null));
})], null)),nubank.workspaces.ui.events.dom_listener(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-toggle-card-headers","nubank.workspaces.ui/keybinding-toggle-card-headers",1763073649)),new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","settings","nubank.workspaces.ui/settings",139105956),cljs.core.update.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("nubank.workspaces.ui","settings","nubank.workspaces.ui/settings",139105956).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.props(this$)),new cljs.core.Keyword("nubank.workspaces.ui","hide-card-header?","nubank.workspaces.ui/hide-card-header?",-497463645),cljs.core.not));
})], null)),nubank.workspaces.ui.events.dom_listener(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-spotlight","nubank.workspaces.ui/keybinding-spotlight",254588049)),new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),nubank.workspaces.ui.events.pd((function (){
return nubank.workspaces.ui.open_spotlight(this$);
}))], null)),nubank.workspaces.ui.events.dom_listener(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.events","event","nubank.workspaces.ui.events/event",-1162809276),"keydown",new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (p1__73074_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__73074_SHARP_.keyCode,(18))){
return document.body.classList.add("cljs-workspaces-extended-views");
} else {
return null;
}
})], null)),nubank.workspaces.ui.events.dom_listener(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.events","event","nubank.workspaces.ui.events/event",-1162809276),"keyup",new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (p1__73076_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__73076_SHARP_.keyCode,(18))){
return document.body.classList.remove("cljs-workspaces-extended-views");
} else {
return null;
}
})], null)),(cljs.core.truth_(show_help_modal_QMARK_)?(function (){var G__73102 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui.modal","on-close","nubank.workspaces.ui.modal/on-close",1602537550),(function (){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","show-help-modal?","nubank.workspaces.ui/show-help-modal?",827473639),false);
})], null);
var G__73103 = (function (){var G__73104 = cljs.core.PersistentArrayMap.EMPTY;
return (nubank.workspaces.ui.help_dialog.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.help_dialog.cljs$core$IFn$_invoke$arity$1(G__73104) : nubank.workspaces.ui.help_dialog.call(null,G__73104));
})();
return (nubank.workspaces.ui.modal.modal.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.modal.modal.cljs$core$IFn$_invoke$arity$2(G__73102,G__73103) : nubank.workspaces.ui.modal.modal.call(null,G__73102,G__73103));
})():null),(cljs.core.truth_(show_spotlight_QMARK_)?(function (){var G__73105 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui.modal","on-close","nubank.workspaces.ui.modal/on-close",1602537550),(function (){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","show-spotlight?","nubank.workspaces.ui/show-spotlight?",1825873402),false);
})], null);
var G__73106 = (function (){var G__73107 = com.fulcrologic.fulcro.components.computed(spotlight,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui.spotlight","on-select","nubank.workspaces.ui.spotlight/on-select",366623223),com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"spotlight-select","spotlight-select",-635934435))], null));
return (nubank.workspaces.ui.spotlight.spotlight.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.spotlight.spotlight.cljs$core$IFn$_invoke$arity$1(G__73107) : nubank.workspaces.ui.spotlight.spotlight.call(null,G__73107));
})();
return (nubank.workspaces.ui.modal.modal.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.modal.modal.cljs$core$IFn$_invoke$arity$2(G__73105,G__73106) : nubank.workspaces.ui.modal.modal.call(null,G__73105,G__73106));
})():null),(cljs.core.truth_(new cljs.core.Keyword("nubank.workspaces.ui","show-index?","nubank.workspaces.ui/show-index?",580921311).cljs$core$IFn$_invoke$arity$1(settings))?(function (){var map__73108 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,new cljs.core.Keyword("nubank.workspaces.model","test?","nubank.workspaces.model/test?",993719827)),cards);
var map__73108__$1 = (((((!((map__73108 == null))))?(((((map__73108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73108):map__73108);
var uis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73108__$1,false);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73108__$1,true);
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".menu",".menu",986259874),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".row.header",".row.header",-1769651026),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Workspaces"], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),com.fulcrologic.fulcro_css.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".index-action-button.spotlight",".index-action-button.spotlight",1590132671),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return nubank.workspaces.ui.open_spotlight(this$);
})], null),"\uD83D\uDD0D"], 0)),com.fulcrologic.fulcro_css.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".index-action-button.help",".index-action-button.help",-1460269596),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.mutations.toggle_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","show-help-modal?","nubank.workspaces.ui/show-help-modal?",827473639));
})], null),"?"], 0)),com.fulcrologic.fulcro_css.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".index-action-button",".index-action-button",859695279),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","toggle-index-view","nubank.workspaces.ui/toggle-index-view",-2043129614,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)))))], null));
})], null),"\u00AB"], 0))], 0)),(function (){var map__73113 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,new cljs.core.Keyword("nubank.workspaces.model","workspace-static?","nubank.workspaces.model/workspace-static?",1744769950)),workspaces);
var map__73113__$1 = (((((!((map__73113 == null))))?(((((map__73113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73113):map__73113);
var statics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73113__$1,true);
var locals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73113__$1,false);
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Local workspaces",com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".nest-group-small",".nest-group-small",-1151011320),(function (){var iter__4529__auto__ = (function nubank$workspaces$ui$render_WorkspacesRoot_$_iter__73118(s__73119){
return (new cljs.core.LazySeq(null,(function (){
var s__73119__$1 = s__73119;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__73119__$1);
if(temp__5753__auto__){
var s__73119__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73119__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__73119__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__73121 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__73120 = (0);
while(true){
if((i__73120 < size__4528__auto__)){
var map__73122 = cljs.core._nth(c__4527__auto__,i__73120);
var map__73122__$1 = (((((!((map__73122 == null))))?(((((map__73122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73122):map__73122);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73122__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73122__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
cljs.core.chunk_append(b__73121,com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace",".workspace",1526137578),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__73120,map__73122,map__73122__$1,workspace_id,workspace_title,c__4527__auto__,size__4528__auto__,b__73121,s__73119__$2,temp__5753__auto__,map__73113,map__73113__$1,statics,locals,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","select-workspace","nubank.workspaces.ui/select-workspace",558971453,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),null,(1),null)),(new cljs.core.List(null,workspace_id,null,(1),null)))))),null,(1),null)))))], null));
});})(i__73120,map__73122,map__73122__$1,workspace_id,workspace_title,c__4527__auto__,size__4528__auto__,b__73121,s__73119__$2,temp__5753__auto__,map__73113,map__73113__$1,statics,locals,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_title)], 0)));

var G__74302 = (i__73120 + (1));
i__73120 = G__74302;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73121),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__73118(cljs.core.chunk_rest(s__73119__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73121),null);
}
} else {
var map__73127 = cljs.core.first(s__73119__$2);
var map__73127__$1 = (((((!((map__73127 == null))))?(((((map__73127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73127):map__73127);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73127__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73127__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
return cljs.core.cons(com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace",".workspace",1526137578),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__73127,map__73127__$1,workspace_id,workspace_title,s__73119__$2,temp__5753__auto__,map__73113,map__73113__$1,statics,locals,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","select-workspace","nubank.workspaces.ui/select-workspace",558971453,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),null,(1),null)),(new cljs.core.List(null,workspace_id,null,(1),null)))))),null,(1),null)))))], null));
});})(map__73127,map__73127__$1,workspace_id,workspace_title,s__73119__$2,temp__5753__auto__,map__73113,map__73113__$1,statics,locals,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_title)], 0)),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__73118(cljs.core.rest(s__73119__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),locals));
})()], 0))], 0)),com.fulcrologic.fulcro_css.localized_dom.br(),(function (){var iter__4529__auto__ = (function nubank$workspaces$ui$render_WorkspacesRoot_$_iter__73132(s__73133){
return (new cljs.core.LazySeq(null,(function (){
var s__73133__$1 = s__73133;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__73133__$1);
if(temp__5753__auto__){
var s__73133__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73133__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__73133__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__73135 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__73134 = (0);
while(true){
if((i__73134 < size__4528__auto__)){
var vec__73136 = cljs.core._nth(c__4527__auto__,i__73134);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73136,(0),null);
var workspaces__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73136,(1),null);
cljs.core.chunk_append(b__73135,com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".nest-group-small",".nest-group-small",-1151011320),(function (){var iter__4529__auto__ = ((function (i__73134,vec__73136,ns,workspaces__$1,c__4527__auto__,size__4528__auto__,b__73135,s__73133__$2,temp__5753__auto__,map__73113,map__73113__$1,statics,locals,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function nubank$workspaces$ui$render_WorkspacesRoot_$_iter__73132_$_iter__73142(s__73143){
return (new cljs.core.LazySeq(null,((function (i__73134,vec__73136,ns,workspaces__$1,c__4527__auto__,size__4528__auto__,b__73135,s__73133__$2,temp__5753__auto__,map__73113,map__73113__$1,statics,locals,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
var s__73143__$1 = s__73143;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__73143__$1);
if(temp__5753__auto____$1){
var s__73143__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__73143__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__73143__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__73145 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__73144 = (0);
while(true){
if((i__73144 < size__4528__auto____$1)){
var map__73146 = cljs.core._nth(c__4527__auto____$1,i__73144);
var map__73146__$1 = (((((!((map__73146 == null))))?(((((map__73146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73146):map__73146);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73146__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73146__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
cljs.core.chunk_append(b__73145,com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace",".workspace",1526137578),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__73144,i__73134,map__73146,map__73146__$1,workspace_id,workspace_title,c__4527__auto____$1,size__4528__auto____$1,b__73145,s__73143__$2,temp__5753__auto____$1,vec__73136,ns,workspaces__$1,c__4527__auto__,size__4528__auto__,b__73135,s__73133__$2,temp__5753__auto__,map__73113,map__73113__$1,statics,locals,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","select-workspace","nubank.workspaces.ui/select-workspace",558971453,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),null,(1),null)),(new cljs.core.List(null,workspace_id,null,(1),null)))))),null,(1),null)))))], null));
});})(i__73144,i__73134,map__73146,map__73146__$1,workspace_id,workspace_title,c__4527__auto____$1,size__4528__auto____$1,b__73145,s__73143__$2,temp__5753__auto____$1,vec__73136,ns,workspaces__$1,c__4527__auto__,size__4528__auto__,b__73135,s__73133__$2,temp__5753__auto__,map__73113,map__73113__$1,statics,locals,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
], null),cljs.core.name(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(workspace_title))], 0)));

var G__74327 = (i__73144 + (1));
i__73144 = G__74327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73145),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__73132_$_iter__73142(cljs.core.chunk_rest(s__73143__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73145),null);
}
} else {
var map__73151 = cljs.core.first(s__73143__$2);
var map__73151__$1 = (((((!((map__73151 == null))))?(((((map__73151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73151):map__73151);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73151__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73151__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
return cljs.core.cons(com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace",".workspace",1526137578),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__73134,map__73151,map__73151__$1,workspace_id,workspace_title,s__73143__$2,temp__5753__auto____$1,vec__73136,ns,workspaces__$1,c__4527__auto__,size__4528__auto__,b__73135,s__73133__$2,temp__5753__auto__,map__73113,map__73113__$1,statics,locals,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","select-workspace","nubank.workspaces.ui/select-workspace",558971453,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),null,(1),null)),(new cljs.core.List(null,workspace_id,null,(1),null)))))),null,(1),null)))))], null));
});})(i__73134,map__73151,map__73151__$1,workspace_id,workspace_title,s__73143__$2,temp__5753__auto____$1,vec__73136,ns,workspaces__$1,c__4527__auto__,size__4528__auto__,b__73135,s__73133__$2,temp__5753__auto__,map__73113,map__73113__$1,statics,locals,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
], null),cljs.core.name(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(workspace_title))], 0)),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__73132_$_iter__73142(cljs.core.rest(s__73143__$2)));
}
} else {
return null;
}
break;
}
});})(i__73134,vec__73136,ns,workspaces__$1,c__4527__auto__,size__4528__auto__,b__73135,s__73133__$2,temp__5753__auto__,map__73113,map__73113__$1,statics,locals,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
,null,null));
});})(i__73134,vec__73136,ns,workspaces__$1,c__4527__auto__,size__4528__auto__,b__73135,s__73133__$2,temp__5753__auto__,map__73113,map__73113__$1,statics,locals,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
;
return iter__4529__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),workspaces__$1));
})()], 0))], 0)));

var G__74335 = (i__73134 + (1));
i__73134 = G__74335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73135),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__73132(cljs.core.chunk_rest(s__73133__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73135),null);
}
} else {
var vec__73156 = cljs.core.first(s__73133__$2);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73156,(0),null);
var workspaces__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73156,(1),null);
return cljs.core.cons(com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".nest-group-small",".nest-group-small",-1151011320),(function (){var iter__4529__auto__ = ((function (vec__73156,ns,workspaces__$1,s__73133__$2,temp__5753__auto__,map__73113,map__73113__$1,statics,locals,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function nubank$workspaces$ui$render_WorkspacesRoot_$_iter__73132_$_iter__73159(s__73160){
return (new cljs.core.LazySeq(null,(function (){
var s__73160__$1 = s__73160;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__73160__$1);
if(temp__5753__auto____$1){
var s__73160__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__73160__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__73160__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__73162 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__73161 = (0);
while(true){
if((i__73161 < size__4528__auto__)){
var map__73166 = cljs.core._nth(c__4527__auto__,i__73161);
var map__73166__$1 = (((((!((map__73166 == null))))?(((((map__73166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73166):map__73166);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73166__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73166__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
cljs.core.chunk_append(b__73162,com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace",".workspace",1526137578),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__73161,map__73166,map__73166__$1,workspace_id,workspace_title,c__4527__auto__,size__4528__auto__,b__73162,s__73160__$2,temp__5753__auto____$1,vec__73156,ns,workspaces__$1,s__73133__$2,temp__5753__auto__,map__73113,map__73113__$1,statics,locals,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","select-workspace","nubank.workspaces.ui/select-workspace",558971453,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),null,(1),null)),(new cljs.core.List(null,workspace_id,null,(1),null)))))),null,(1),null)))))], null));
});})(i__73161,map__73166,map__73166__$1,workspace_id,workspace_title,c__4527__auto__,size__4528__auto__,b__73162,s__73160__$2,temp__5753__auto____$1,vec__73156,ns,workspaces__$1,s__73133__$2,temp__5753__auto__,map__73113,map__73113__$1,statics,locals,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
], null),cljs.core.name(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(workspace_title))], 0)));

var G__74338 = (i__73161 + (1));
i__73161 = G__74338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73162),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__73132_$_iter__73159(cljs.core.chunk_rest(s__73160__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73162),null);
}
} else {
var map__73170 = cljs.core.first(s__73160__$2);
var map__73170__$1 = (((((!((map__73170 == null))))?(((((map__73170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73170):map__73170);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73170__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73170__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
return cljs.core.cons(com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace",".workspace",1526137578),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__73170,map__73170__$1,workspace_id,workspace_title,s__73160__$2,temp__5753__auto____$1,vec__73156,ns,workspaces__$1,s__73133__$2,temp__5753__auto__,map__73113,map__73113__$1,statics,locals,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","select-workspace","nubank.workspaces.ui/select-workspace",558971453,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),null,(1),null)),(new cljs.core.List(null,workspace_id,null,(1),null)))))),null,(1),null)))))], null));
});})(map__73170,map__73170__$1,workspace_id,workspace_title,s__73160__$2,temp__5753__auto____$1,vec__73156,ns,workspaces__$1,s__73133__$2,temp__5753__auto__,map__73113,map__73113__$1,statics,locals,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
], null),cljs.core.name(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(workspace_title))], 0)),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__73132_$_iter__73159(cljs.core.rest(s__73160__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__73156,ns,workspaces__$1,s__73133__$2,temp__5753__auto__,map__73113,map__73113__$1,statics,locals,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
;
return iter__4529__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),workspaces__$1));
})()], 0))], 0)),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__73132(cljs.core.rest(s__73133__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858)),statics)));
})()], 0));
})(),com.fulcrologic.fulcro_css.localized_dom.br(),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".header",".header",-1761691025),"Cards"], 0)),(function (){var iter__4529__auto__ = (function nubank$workspaces$ui$render_WorkspacesRoot_$_iter__73175(s__73176){
return (new cljs.core.LazySeq(null,(function (){
var s__73176__$1 = s__73176;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__73176__$1);
if(temp__5753__auto__){
var s__73176__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73176__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__73176__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__73178 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__73177 = (0);
while(true){
if((i__73177 < size__4528__auto__)){
var vec__73180 = cljs.core._nth(c__4527__auto__,i__73177);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73180,(0),null);
var cards__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73180,(1),null);
cljs.core.chunk_append(b__73178,com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], null),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".ns-header",".ns-header",60233442),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".expand-arrow",".expand-arrow",489938474),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__73177,vec__73180,ns,cards__$1,c__4527__auto__,size__4528__auto__,b__73178,s__73176__$2,temp__5753__auto__,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","toggle-ns-expansion","nubank.workspaces.ui/toggle-ns-expansion",117524570,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","expand-path","nubank.workspaces.ui/expand-path",-795465683),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-ns","card-ns",-470859449),ns], null),null,(1),null)))))),null,(1),null)))))], null));
});})(i__73177,vec__73180,ns,cards__$1,c__4527__auto__,size__4528__auto__,b__73178,s__73176__$2,temp__5753__auto__,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
], null),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(expanded,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-ns","card-ns",-470859449),ns], null)))?nubank.workspaces.ui.core.arrow_down:nubank.workspaces.ui.core.arrow_right)], 0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], 0)),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(expanded,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-ns","card-ns",-470859449),ns], null)))?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".nest-group",".nest-group",-588503719),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.card_index_listing,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),cards__$1))], 0)):null)], 0)));

var G__74351 = (i__73177 + (1));
i__73177 = G__74351;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73178),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__73175(cljs.core.chunk_rest(s__73176__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73178),null);
}
} else {
var vec__73186 = cljs.core.first(s__73176__$2);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73186,(0),null);
var cards__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73186,(1),null);
return cljs.core.cons(com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], null),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".ns-header",".ns-header",60233442),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".expand-arrow",".expand-arrow",489938474),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (vec__73186,ns,cards__$1,s__73176__$2,temp__5753__auto__,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","toggle-ns-expansion","nubank.workspaces.ui/toggle-ns-expansion",117524570,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","expand-path","nubank.workspaces.ui/expand-path",-795465683),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-ns","card-ns",-470859449),ns], null),null,(1),null)))))),null,(1),null)))))], null));
});})(vec__73186,ns,cards__$1,s__73176__$2,temp__5753__auto__,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
], null),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(expanded,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-ns","card-ns",-470859449),ns], null)))?nubank.workspaces.ui.core.arrow_down:nubank.workspaces.ui.core.arrow_right)], 0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], 0)),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(expanded,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-ns","card-ns",-470859449),ns], null)))?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".nest-group",".nest-group",-588503719),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.card_index_listing,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),cards__$1))], 0)):null)], 0)),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__73175(cljs.core.rest(s__73176__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809)),uis)));
})(),com.fulcrologic.fulcro_css.localized_dom.br(),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".pointer.header",".pointer.header",-301986551),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return nubank.workspaces.ui.add_card(this$,new cljs.core.Symbol("nubank.workspaces.card-types.test","test-all","nubank.workspaces.card-types.test/test-all",-1512776685,null));
})], null),"Tests"], 0)),(function (){var iter__4529__auto__ = (function nubank$workspaces$ui$render_WorkspacesRoot_$_iter__73192(s__73193){
return (new cljs.core.LazySeq(null,(function (){
var s__73193__$1 = s__73193;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__73193__$1);
if(temp__5753__auto__){
var s__73193__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73193__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__73193__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__73195 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__73194 = (0);
while(true){
if((i__73194 < size__4528__auto__)){
var vec__73197 = cljs.core._nth(c__4527__auto__,i__73194);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73197,(0),null);
var cards__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73197,(1),null);
cljs.core.chunk_append(b__73195,com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], null),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".ns-header",".ns-header",60233442),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".expand-arrow",".expand-arrow",489938474),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__73194,vec__73197,ns,cards__$1,c__4527__auto__,size__4528__auto__,b__73195,s__73193__$2,temp__5753__auto__,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","toggle-ns-expansion","nubank.workspaces.ui/toggle-ns-expansion",117524570,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","expand-path","nubank.workspaces.ui/expand-path",-795465683),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-ns","test-ns",332567313),ns], null),null,(1),null)))))),null,(1),null)))))], null));
});})(i__73194,vec__73197,ns,cards__$1,c__4527__auto__,size__4528__auto__,b__73195,s__73193__$2,temp__5753__auto__,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
], null),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(expanded,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-ns","test-ns",332567313),ns], null)))?nubank.workspaces.ui.core.arrow_down:nubank.workspaces.ui.core.arrow_right)], 0)),(function (){var G__73202 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ns)], null);
return (nubank.workspaces.ui.card_index_listing.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.card_index_listing.cljs$core$IFn$_invoke$arity$1(G__73202) : nubank.workspaces.ui.card_index_listing.call(null,G__73202));
})()], 0)),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(expanded,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-ns","test-ns",332567313),ns], null)))?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".nest-group",".nest-group",-588503719),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.card_index_listing,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),cards__$1))], 0)):null)], 0)));

var G__74365 = (i__73194 + (1));
i__73194 = G__74365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73195),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__73192(cljs.core.chunk_rest(s__73193__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73195),null);
}
} else {
var vec__73203 = cljs.core.first(s__73193__$2);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73203,(0),null);
var cards__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73203,(1),null);
return cljs.core.cons(com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], null),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".ns-header",".ns-header",60233442),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".expand-arrow",".expand-arrow",489938474),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (vec__73203,ns,cards__$1,s__73193__$2,temp__5753__auto__,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","toggle-ns-expansion","nubank.workspaces.ui/toggle-ns-expansion",117524570,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","expand-path","nubank.workspaces.ui/expand-path",-795465683),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-ns","test-ns",332567313),ns], null),null,(1),null)))))),null,(1),null)))))], null));
});})(vec__73203,ns,cards__$1,s__73193__$2,temp__5753__auto__,map__73108,map__73108__$1,uis,tests,map__73096,map__73096__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
], null),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(expanded,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-ns","test-ns",332567313),ns], null)))?nubank.workspaces.ui.core.arrow_down:nubank.workspaces.ui.core.arrow_right)], 0)),(function (){var G__73209 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ns)], null);
return (nubank.workspaces.ui.card_index_listing.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.card_index_listing.cljs$core$IFn$_invoke$arity$1(G__73209) : nubank.workspaces.ui.card_index_listing.call(null,G__73209));
})()], 0)),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(expanded,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-ns","test-ns",332567313),ns], null)))?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".nest-group",".nest-group",-588503719),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.card_index_listing,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),cards__$1))], 0)):null)], 0)),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__73192(cljs.core.rest(s__73193__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809)),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.model","card-unlisted?","nubank.workspaces.model/card-unlisted?",-302030555),tests))));
})()], 0));
})():com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".menu-show",".menu-show",-330773335),com.fulcrologic.fulcro_css.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".index-action-button",".index-action-button",859695279),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","toggle-index-view","nubank.workspaces.ui/toggle-index-view",-2043129614,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)))))], null));
})], null),"\u00BB"], 0))], 0))),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspaces",".workspaces",317220476),(nubank.workspaces.ui.workspace_tabs.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.workspace_tabs.cljs$core$IFn$_invoke$arity$1(ws_tabs) : nubank.workspaces.ui.workspace_tabs.call(null,ws_tabs))], 0))], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.WorkspacesRoot !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.WorkspacesRoot = (function nubank$workspaces$ui$WorkspacesRoot(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___74372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___74210,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___74372)){
var init_state__55352__auto___74373 = temp__5751__auto___74372;
(this__55351__auto__.state = (function (){var obj73214 = ({"fulcro$state":(function (){var G__73215 = this__55351__auto__;
var G__73216 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___74373.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___74373.cljs$core$IFn$_invoke$arity$2(G__73215,G__73216) : init_state__55352__auto___74373.call(null,G__73215,G__73216));
})()});
return obj73214;
})());
} else {
(this__55351__auto__.state = (function (){var obj73218 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj73218;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.WorkspacesRoot,new cljs.core.Keyword("nubank.workspaces.ui","WorkspacesRoot","nubank.workspaces.ui/WorkspacesRoot",-113702147),options__55349__auto___74210);
nubank.workspaces.ui.workspaces_root = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.WorkspacesRoot);

//# sourceMappingURL=nubank.workspaces.ui.js.map
