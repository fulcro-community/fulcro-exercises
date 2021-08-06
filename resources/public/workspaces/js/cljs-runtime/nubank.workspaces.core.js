goog.provide('nubank.workspaces.core');
nubank.workspaces.core.init_card = (function nubank$workspaces$core$init_card(card_id,card){
var card__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(card,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),card_id);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"mounted?","mounted?",712114760).cljs$core$IFn$_invoke$arity$1(nubank.workspaces.data.app_STAR_);
if(cljs.core.truth_(and__4115__auto__)){
return (!(cljs.core.contains_QMARK_(cljs.core.deref(nubank.workspaces.data.card_definitions_STAR_),card_id)));
} else {
return and__4115__auto__;
}
})())){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.data.app_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","load-card","nubank.workspaces.ui/load-card",817030703,null),null,(1),null)),(new cljs.core.List(null,card__$1,null,(1),null)))))], null));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nubank.workspaces.data.card_definitions_STAR_,cljs.core.assoc,card_id,card__$1);
});
nubank.workspaces.core.init_workspace = (function nubank$workspaces$core$init_workspace(workspace_id,p__74541){
var map__74542 = p__74541;
var map__74542__$1 = (((((!((map__74542 == null))))?(((((map__74542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74542):map__74542);
var workspace = map__74542__$1;
var workspace_layouts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74542__$1,new cljs.core.Keyword("nubank.workspaces.model","workspace-layouts","nubank.workspaces.model/workspace-layouts",693167890));
var workspace__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(workspace,new cljs.core.Keyword("nubank.workspaces.model","workspace-static?","nubank.workspaces.model/workspace-static?",1744769950),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([workspace_id], 0)),new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),workspace_id,new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716),nubank.workspaces.lib.local_storage.read_transit(workspace_layouts)], 0));
if(com.fulcrologic.fulcro.application.mounted_QMARK_(nubank.workspaces.data.app_STAR_)){
if((!(cljs.core.contains_QMARK_(cljs.core.deref(nubank.workspaces.data.workspace_definitions_STAR_),workspace_id)))){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.data.app_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","load-workspace","nubank.workspaces.ui/load-workspace",60048364,null),null,(1),null)),(new cljs.core.List(null,workspace__$1,null,(1),null)))))], null));
} else {
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.data.app_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","update-workspace","nubank.workspaces.ui/update-workspace",-2145331844,null),null,(1),null)),(new cljs.core.List(null,workspace__$1,null,(1),null)))))], null));
}
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nubank.workspaces.data.workspace_definitions_STAR_,cljs.core.assoc,workspace_id,workspace__$1);
});
nubank.workspaces.core.init_test = (function nubank$workspaces$core$init_test(sym,forms,card_form){
nubank.workspaces.core.init_card(sym,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nubank.workspaces.card_types.test.test_card(sym,forms),new cljs.core.Keyword("nubank.workspaces.model","card-form","nubank.workspaces.model/card-form",2147473),card_form));

var test_ns_74562 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(sym));
if((!(cljs.core.contains_QMARK_(cljs.core.deref(nubank.workspaces.data.card_definitions_STAR_),test_ns_74562)))){
nubank.workspaces.core.init_card(test_ns_74562,nubank.workspaces.card_types.test.test_ns_card(test_ns_74562));
} else {
}

if((!(cljs.core.contains_QMARK_(cljs.core.deref(nubank.workspaces.data.card_definitions_STAR_),new cljs.core.Symbol("nubank.workspaces.card-types.test","test-all","nubank.workspaces.card-types.test/test-all",-1512776685,null))))){
return nubank.workspaces.core.init_card(new cljs.core.Symbol("nubank.workspaces.card-types.test","test-all","nubank.workspaces.card-types.test/test-all",-1512776685,null),nubank.workspaces.card_types.test.all_tests_card());
} else {
return null;
}
});

var options__55349__auto___74564 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function nubank$workspaces$core$build_raw_initial_state_STAR_(_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.WorkspacesRoot,cljs.core.deref(nubank.workspaces.data.card_definitions_STAR_))], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$core$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.WorkspacesRoot)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$core$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__74546 = com.fulcrologic.fulcro.components.props(this$);
var map__74546__$1 = (((((!((map__74546 == null))))?(((((map__74546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74546):map__74546);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74546__$1,new cljs.core.Keyword("ui","root","ui/root",-448656785));
return (nubank.workspaces.ui.workspaces_root.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.workspaces_root.cljs$core$IFn$_invoke$arity$1(root) : nubank.workspaces.ui.workspaces_root.call(null,root));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.core !== 'undefined') && (typeof nubank.workspaces.core.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.core.Root = (function nubank$workspaces$core$Root(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___74570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___74564,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___74570)){
var init_state__55352__auto___74571 = temp__5751__auto___74570;
(this__55351__auto__.state = (function (){var obj74550 = ({"fulcro$state":(function (){var G__74551 = this__55351__auto__;
var G__74552 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___74571.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___74571.cljs$core$IFn$_invoke$arity$2(G__74551,G__74552) : init_state__55352__auto___74571.call(null,G__74551,G__74552));
})()});
return obj74550;
})());
} else {
(this__55351__auto__.state = (function (){var obj74554 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj74554;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.core.Root,new cljs.core.Keyword("nubank.workspaces.core","Root","nubank.workspaces.core/Root",-1182641474),options__55349__auto___74564);
/**
 * Mount the workspaces enviroment, by default it will try to mount at #app node.
 *   Use the selector string to pass a querySelector string to pick the mount node.
 */
nubank.workspaces.core.mount = (function nubank$workspaces$core$mount(var_args){
var G__74557 = arguments.length;
switch (G__74557) {
case 0:
return nubank.workspaces.core.mount.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return nubank.workspaces.core.mount.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nubank.workspaces.core.mount.cljs$core$IFn$_invoke$arity$0 = (function (){
return nubank.workspaces.core.mount.cljs$core$IFn$_invoke$arity$1("#app");
}));

(nubank.workspaces.core.mount.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(nubank.workspaces.data.app_STAR_,nubank.workspaces.core.Root,document.querySelector(selector));
}));

(nubank.workspaces.core.mount.cljs$lang$maxFixedArity = 1);

nubank.workspaces.core.before_load = (function nubank$workspaces$core$before_load(){
return cljs.core.reset_BANG_(nubank.workspaces.data.card_definitions_snap_STAR_,cljs.core.deref(nubank.workspaces.data.card_definitions_STAR_));
});
nubank.workspaces.core.after_load = (function nubank$workspaces$core$after_load(){
nubank.workspaces.ui.refresh_active_workspace_cards(nubank.workspaces.data.app_STAR_);

return cljs.core.reset_BANG_(nubank.workspaces.data.card_definitions_snap_STAR_,cljs.core.deref(nubank.workspaces.data.card_definitions_STAR_));
});

//# sourceMappingURL=nubank.workspaces.core.js.map
