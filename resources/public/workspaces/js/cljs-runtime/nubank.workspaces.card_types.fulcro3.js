goog.provide('nubank.workspaces.card_types.fulcro3');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root","nubank.workspaces.card-types.fulcro3/root",-1183530530),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","wrap-root?","nubank.workspaces.card-types.fulcro3/wrap-root?",1709552409),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","app","nubank.workspaces.card-types.fulcro3/app",-1434213974),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","persistence-key","nubank.workspaces.card-types.fulcro3/persistence-key",69075497),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","initial-state","nubank.workspaces.card-types.fulcro3/initial-state",-75742905),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"fn?","fn?",180459291),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"factory-param","factory-param",-492106999),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn?","fn?",180459291),new cljs.core.Keyword(null,"factory-param","factory-param",-492106999)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.any_QMARK_], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root-state","nubank.workspaces.card-types.fulcro3/root-state",-1297183832),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","computed","nubank.workspaces.card-types.fulcro3/computed",326954457),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root-node-props","nubank.workspaces.card-types.fulcro3/root-node-props",1296783609),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.card_types !== 'undefined') && (typeof nubank.workspaces.card_types.fulcro3 !== 'undefined') && (typeof nubank.workspaces.card_types.fulcro3.css_components_STAR_ !== 'undefined')){
} else {
nubank.workspaces.card_types.fulcro3.css_components_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.card_types !== 'undefined') && (typeof nubank.workspaces.card_types.fulcro3 !== 'undefined') && (typeof nubank.workspaces.card_types.fulcro3.persistent_apps_STAR_ !== 'undefined')){
} else {
nubank.workspaces.card_types.fulcro3.persistent_apps_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
nubank.workspaces.card_types.fulcro3.gen_css_component = (function nubank$workspaces$card_types$fulcro3$gen_css_component(){
var generated_name = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var component_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("nubank.workspaces.card-types.fulcro3",cljs.core.name(generated_name));
return com.fulcrologic.fulcro.components.configure_component_BANG_((function nubank$workspaces$card_types$fulcro3$gen_css_component_$__STAR_dyn_root_STAR_(){
return null;
}),component_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),(function (_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$1((function (i,v){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),(function (){var or__4126__auto__ = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),v], null));
}
})()]);
})),cljs.core.deref(nubank.workspaces.card_types.fulcro3.css_components_STAR_));
})], null));
});
nubank.workspaces.card_types.fulcro3.safe_initial_state = (function nubank$workspaces$card_types$fulcro3$safe_initial_state(comp,params){
if(com.fulcrologic.fulcro.components.has_initial_app_state_QMARK_(comp)){
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(comp,params);
} else {
return params;
}
});
nubank.workspaces.card_types.fulcro3.make_root = (function nubank$workspaces$card_types$fulcro3$make_root(Root){
var generated_name = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var component_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("nubank.workspaces.card-types.fulcro3",cljs.core.name(generated_name));
return com.fulcrologic.fulcro.components.configure_component_BANG_((function nubank$workspaces$card_types$fulcro3$make_root_$__STAR_dyn_root_STAR_(){
return null;
}),component_key,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function (_,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),(function (){var or__4126__auto__ = nubank.workspaces.card_types.fulcro3.safe_initial_state(Root,params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(Root)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (this$){
var map__73258 = com.fulcrologic.fulcro.components.props(this$);
var map__73258__$1 = (((((!((map__73258 == null))))?(((((map__73258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73258):map__73258);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73258__$1,new cljs.core.Keyword("ui","root","ui/root",-448656785));
var Root__$1 = com.fulcrologic.fulcro.components.registry_key__GT_class(com.fulcrologic.fulcro.components.class__GT_registry_key(Root));
var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(Root__$1);
var computed = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","computed","nubank.workspaces.card-types.fulcro3/computed",326954457));
if(cljs.core.seq(root)){
var G__73274 = (function (){var G__73275 = root;
if(cljs.core.truth_(computed)){
return com.fulcrologic.fulcro.components.computed(G__73275,computed);
} else {
return G__73275;
}
})();
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__73274) : factory.call(null,G__73274));
} else {
return null;
}
})], null));
});
nubank.workspaces.card_types.fulcro3.fulcro_initial_state = (function nubank$workspaces$card_types$fulcro3$fulcro_initial_state(p__73281){
var map__73282 = p__73281;
var map__73282__$1 = (((((!((map__73282 == null))))?(((((map__73282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73282):map__73282);
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73282__$1,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","initial-state","nubank.workspaces.card-types.fulcro3/initial-state",-75742905),cljs.core.PersistentArrayMap.EMPTY);
var wrap_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73282__$1,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","wrap-root?","nubank.workspaces.card-types.fulcro3/wrap-root?",1709552409),true);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73282__$1,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root","nubank.workspaces.card-types.fulcro3/root",-1183530530));
var root_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73282__$1,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root-state","nubank.workspaces.card-types.fulcro3/root-state",-1297183832));
var state_tree = ((cljs.core.fn_QMARK_(initial_state))?(function (){var G__73298 = nubank.workspaces.card_types.fulcro3.safe_initial_state(root,null);
return (initial_state.cljs$core$IFn$_invoke$arity$1 ? initial_state.cljs$core$IFn$_invoke$arity$1(G__73298) : initial_state.call(null,G__73298));
})():nubank.workspaces.card_types.fulcro3.safe_initial_state(root,initial_state));
var wrapped = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(wrap_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),state_tree], null):state_tree),root_state], 0));
var Root = (cljs.core.truth_(wrap_root_QMARK_)?nubank.workspaces.card_types.fulcro3.make_root(root):root);
var db = com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4(Root,wrapped,true,com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
return db;
});
nubank.workspaces.card_types.fulcro3.upsert_app = (function nubank$workspaces$card_types$fulcro3$upsert_app(p__73309){
var map__73312 = p__73309;
var map__73312__$1 = (((((!((map__73312 == null))))?(((((map__73312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73312):map__73312);
var config = map__73312__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73312__$1,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","app","nubank.workspaces.card-types.fulcro3/app",-1434213974));
var persistence_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73312__$1,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","persistence-key","nubank.workspaces.card-types.fulcro3/persistence-key",69075497));
var computed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73312__$1,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","computed","nubank.workspaces.card-types.fulcro3/computed",326954457));
var app_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73312__$1,new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233));
var temp__5751__auto__ = (function (){var and__4115__auto__ = persistence_key;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nubank.workspaces.card_types.fulcro3.persistent_apps_STAR_),persistence_key);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var instance = temp__5751__auto__;
return instance;
} else {
var app__$1 = (function (){var G__73317 = app;
var G__73317__$1 = (((!(cljs.core.contains_QMARK_(app,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73317,new cljs.core.Keyword(null,"initial-db","initial-db",1939835102),nubank.workspaces.card_types.fulcro3.fulcro_initial_state(config)):G__73317);
var G__73317__$2 = (cljs.core.truth_(computed)?cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__73317__$1,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.assoc,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","computed","nubank.workspaces.card-types.fulcro3/computed",326954457),computed):G__73317__$1);
if(cljs.core.truth_(app_id)){
return cljs.core.assoc_in(G__73317__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-db","initial-db",1939835102),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233)], null),app_id);
} else {
return G__73317__$2;
}
})();
var instance = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(app__$1);
if(cljs.core.truth_(persistence_key)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nubank.workspaces.card_types.fulcro3.persistent_apps_STAR_,cljs.core.assoc,persistence_key,instance);
} else {
}

return instance;
}
});
nubank.workspaces.card_types.fulcro3.dispose_app = (function nubank$workspaces$card_types$fulcro3$dispose_app(p__73322){
var map__73323 = p__73322;
var map__73323__$1 = (((((!((map__73323 == null))))?(((((map__73323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73323):map__73323);
var app = map__73323__$1;
var persistence_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73323__$1,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","persistence-key","nubank.workspaces.card-types.fulcro3/persistence-key",69075497));
if(cljs.core.truth_(persistence_key)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nubank.workspaces.card_types.fulcro3.persistent_apps_STAR_,cljs.core.dissoc,persistence_key);
} else {
}

var temp__5753__auto__ = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app);
if(cljs.core.truth_(temp__5753__auto__)){
var app_uuid = temp__5753__auto__;
return com.fulcrologic.fulcro.inspect.inspect_client.dispose_app(app_uuid);
} else {
return null;
}
});
nubank.workspaces.card_types.fulcro3.refresh_css_BANG_ = (function nubank$workspaces$card_types$fulcro3$refresh_css_BANG_(){
return com.fulcrologic.fulcro_css.css_injection.upsert_css("fulcro-portal-css",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),nubank.workspaces.card_types.fulcro3.gen_css_component()], null));
});
nubank.workspaces.card_types.fulcro3.add_component_css_BANG_ = (function nubank$workspaces$card_types$fulcro3$add_component_css_BANG_(comp){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nubank.workspaces.card_types.fulcro3.css_components_STAR_,cljs.core.conj,comp);

return nubank.workspaces.card_types.fulcro3.refresh_css_BANG_();
});
nubank.workspaces.card_types.fulcro3.mount_at = (function nubank$workspaces$card_types$fulcro3$mount_at(app,p__73328,node){
var map__73329 = p__73328;
var map__73329__$1 = (((((!((map__73329 == null))))?(((((map__73329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73329):map__73329);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73329__$1,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root","nubank.workspaces.card-types.fulcro3/root",-1183530530));
var wrap_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73329__$1,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","wrap-root?","nubank.workspaces.card-types.fulcro3/wrap-root?",1709552409),true);
var persistence_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73329__$1,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","persistence-key","nubank.workspaces.card-types.fulcro3/persistence-key",69075497));
nubank.workspaces.card_types.fulcro3.add_component_css_BANG_(root);

var instance = (cljs.core.truth_(wrap_root_QMARK_)?nubank.workspaces.card_types.fulcro3.make_root(root):root);
var new_app = com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$4(app,instance,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize-state?","initialize-state?",-189550519),false], null));
if(cljs.core.truth_(persistence_key)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nubank.workspaces.card_types.fulcro3.persistent_apps_STAR_,cljs.core.assoc,persistence_key,new_app);
} else {
}

return new_app;
});

var options__55349__auto___73434 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
var props = com.fulcrologic.fulcro.components.props(this$);
var app = nubank.workspaces.card_types.fulcro3.upsert_app(props);
goog.object.set(this$,"app",app);

return nubank.workspaces.card_types.fulcro3.mount_at(app,props,com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(this$));
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (this$,_,___$1){
var G__73346 = goog.object.get(this$,"app");
if((G__73346 == null)){
return null;
} else {
return com.fulcrologic.fulcro.application.force_root_render_BANG_(G__73346);
}
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (this$){
var app = goog.object.get(this$,"app");
nubank.workspaces.card_types.fulcro3.dispose_app(app);

cljs.core.reset_BANG_(app,null);

return ReactDOM.unmountComponentAtNode(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(this$));
}),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (this$,_,___$1){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$card_types$fulcro3$render_FulcroPortal(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__73350 = com.fulcrologic.fulcro.components.props(this$);
var map__73350__$1 = (((((!((map__73350 == null))))?(((((map__73350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73350):map__73350);
var root_node_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73350__$1,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root-node-props","nubank.workspaces.card-types.fulcro3/root-node-props",1296783609));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_node_props], null),null);
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.card_types !== 'undefined') && (typeof nubank.workspaces.card_types.fulcro3 !== 'undefined') && (typeof nubank.workspaces.card_types.fulcro3.FulcroPortal !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.card_types.fulcro3.FulcroPortal = (function nubank$workspaces$card_types$fulcro3$FulcroPortal(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___73443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___73434,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___73443)){
var init_state__55352__auto___73445 = temp__5751__auto___73443;
(this__55351__auto__.state = (function (){var obj73360 = ({"fulcro$state":(function (){var G__73361 = this__55351__auto__;
var G__73362 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___73445.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___73445.cljs$core$IFn$_invoke$arity$2(G__73361,G__73362) : init_state__55352__auto___73445.call(null,G__73361,G__73362));
})()});
return obj73360;
})());
} else {
(this__55351__auto__.state = (function (){var obj73364 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj73364;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.card_types.fulcro3.FulcroPortal,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","FulcroPortal","nubank.workspaces.card-types.fulcro3/FulcroPortal",-76251370),options__55349__auto___73434);
nubank.workspaces.card_types.fulcro3.fulcro_portal_STAR_ = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.card_types.fulcro3.FulcroPortal);
/**
 * Create a new portal for a Fulcro app, available options:
 * 
 *   ::root - the root component to be mounted
 *   ::app This is the app configuration, same options you could send to `fulcro/new-fulcro-client`
 *   ::wrap-root? - by default the portal expects a component with ident to be mounted and
 *   the portal will wrap that with an actual root (with no ident), if you wanna provide
 *   your own root, set this to `false`
 *   ::initial-state - Accepts a value or a function. A value will be used to call the
 *   initial state function of your root. If you provide a function, the value returned by
 *   it will be the initial state.
 *   ::root-state - This map will be merged into the app root state to be part of the initial
 *   state in the root, this is useful to set things like `:ui/locale` considering
 *   ::computed - send computed props to the root
 *   ::root-node-props - use this to send props into the root note created to mount the
 *   portal on.
 */
nubank.workspaces.card_types.fulcro3.fulcro_portal = (function nubank$workspaces$card_types$fulcro3$fulcro_portal(component,options){
var G__73369 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root","nubank.workspaces.card-types.fulcro3/root",-1183530530),component);
return (nubank.workspaces.card_types.fulcro3.fulcro_portal_STAR_.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.card_types.fulcro3.fulcro_portal_STAR_.cljs$core$IFn$_invoke$arity$1(G__73369) : nubank.workspaces.card_types.fulcro3.fulcro_portal_STAR_.call(null,G__73369));
});
nubank.workspaces.card_types.fulcro3.inspector_set_app = (function nubank$workspaces$card_types$fulcro3$inspector_set_app(card_id){
var map__73370 = nubank.workspaces.data.active_card(card_id);
var map__73370__$1 = (((((!((map__73370 == null))))?(((((map__73370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73370):map__73370);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73370__$1,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","app","nubank.workspaces.card-types.fulcro3/app",-1434213974));
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app);
if(cljs.core.truth_(app_uuid)){
return com.fulcrologic.fulcro.inspect.inspect_client.set_active_app(app_uuid);
} else {
return null;
}
});
nubank.workspaces.card_types.fulcro3.debounced_refresh_css_BANG_ = goog.functions.debounce(nubank.workspaces.card_types.fulcro3.refresh_css_BANG_,(100));
nubank.workspaces.card_types.fulcro3.fulcro_card_init = (function nubank$workspaces$card_types$fulcro3$fulcro_card_init(p__73375,config){
var map__73376 = p__73375;
var map__73376__$1 = (((((!((map__73376 == null))))?(((((map__73376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73376):map__73376);
var card = map__73376__$1;
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73376__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
var app = nubank.workspaces.card_types.fulcro3.upsert_app(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),card_id));
return nubank.workspaces.card_types.util.positioned_card(card,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("nubank.workspaces.model","dispose","nubank.workspaces.model/dispose",829517204),(function (node){
nubank.workspaces.card_types.fulcro3.dispose_app(app);

return ReactDOM.unmountComponentAtNode(node);
}),new cljs.core.Keyword("nubank.workspaces.model","refresh","nubank.workspaces.model/refresh",-816174567),(function (_){
(nubank.workspaces.card_types.fulcro3.debounced_refresh_css_BANG_.cljs$core$IFn$_invoke$arity$0 ? nubank.workspaces.card_types.fulcro3.debounced_refresh_css_BANG_.cljs$core$IFn$_invoke$arity$0() : nubank.workspaces.card_types.fulcro3.debounced_refresh_css_BANG_.call(null));

return com.fulcrologic.fulcro.application.force_root_render_BANG_(app);
}),new cljs.core.Keyword("nubank.workspaces.model","render","nubank.workspaces.model/render",125050774),(function (node){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nubank.workspaces.data.active_cards_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_id,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","app","nubank.workspaces.card-types.fulcro3/app",-1434213974)], null),app);

return nubank.workspaces.card_types.fulcro3.mount_at(app,config,node);
}),new cljs.core.Keyword("nubank.workspaces.model","render-toolbar","nubank.workspaces.model/render-toolbar",-1738138937),(function (){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__73383 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return nubank.workspaces.card_types.fulcro3.inspector_set_app(card_id);
})], null);
var G__73384 = "Inspector";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__73383,G__73384) : nubank.workspaces.ui.core.button.call(null,G__73383,G__73384));
})(),(function (){var G__73385 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return nubank.workspaces.ui.restart_card(card_id);
})], null);
var G__73386 = "Restart";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__73385,G__73386) : nubank.workspaces.ui.core.button.call(null,G__73385,G__73386));
})()], null),null);
}),new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","app","nubank.workspaces.card-types.fulcro3/app",-1434213974),app], null));
});
nubank.workspaces.card_types.fulcro3.fulcro_card = (function nubank$workspaces$card_types$fulcro3$fulcro_card(config){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.model","init","nubank.workspaces.model/init",-1281528358),(function (p1__73388_SHARP_){
return nubank.workspaces.card_types.fulcro3.fulcro_card_init(p1__73388_SHARP_,config);
})], null);
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("nubank.workspaces.card-types.fulcro3","fulcro-card","nubank.workspaces.card-types.fulcro3/fulcro-card",-1895288993,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"config","config",994861415),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root","nubank.workspaces.card-types.fulcro3/root",-1183530530)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","wrap-root?","nubank.workspaces.card-types.fulcro3/wrap-root?",1709552409),new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","app","nubank.workspaces.card-types.fulcro3/app",-1434213974),new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","initial-state","nubank.workspaces.card-types.fulcro3/initial-state",-75742905)], null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("nubank.workspaces.model","card-instance","nubank.workspaces.model/card-instance",338052816)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"config","config",994861415),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root","nubank.workspaces.card-types.fulcro3/root",-1183530530)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","wrap-root?","nubank.workspaces.card-types.fulcro3/wrap-root?",1709552409),new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","app","nubank.workspaces.card-types.fulcro3/app",-1434213974),new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","initial-state","nubank.workspaces.card-types.fulcro3/initial-state",-75742905)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__73394){
return cljs.core.map_QMARK_(G__73394);
}),(function (G__73394){
return cljs.core.contains_QMARK_(G__73394,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root","nubank.workspaces.card-types.fulcro3/root",-1183530530));
})], null),(function (G__73394){
return ((cljs.core.map_QMARK_(G__73394)) && (cljs.core.contains_QMARK_(G__73394,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root","nubank.workspaces.card-types.fulcro3/root",-1183530530))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","wrap-root?","nubank.workspaces.card-types.fulcro3/wrap-root?",1709552409),new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","app","nubank.workspaces.card-types.fulcro3/app",-1434213974),new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","initial-state","nubank.workspaces.card-types.fulcro3/initial-state",-75742905)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root","nubank.workspaces.card-types.fulcro3/root",-1183530530)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root","nubank.workspaces.card-types.fulcro3/root",-1183530530)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root","nubank.workspaces.card-types.fulcro3/root",-1183530530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","wrap-root?","nubank.workspaces.card-types.fulcro3/wrap-root?",1709552409),new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","app","nubank.workspaces.card-types.fulcro3/app",-1434213974),new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","initial-state","nubank.workspaces.card-types.fulcro3/initial-state",-75742905)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root","nubank.workspaces.card-types.fulcro3/root",-1183530530)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","wrap-root?","nubank.workspaces.card-types.fulcro3/wrap-root?",1709552409),new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","app","nubank.workspaces.card-types.fulcro3/app",-1434213974),new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","initial-state","nubank.workspaces.card-types.fulcro3/initial-state",-75742905)], null)]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root","nubank.workspaces.card-types.fulcro3/root",-1183530530)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","wrap-root?","nubank.workspaces.card-types.fulcro3/wrap-root?",1709552409),new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","app","nubank.workspaces.card-types.fulcro3/app",-1434213974),new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","initial-state","nubank.workspaces.card-types.fulcro3/initial-state",-75742905)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"config","config",994861415),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root","nubank.workspaces.card-types.fulcro3/root",-1183530530)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","wrap-root?","nubank.workspaces.card-types.fulcro3/wrap-root?",1709552409),new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","app","nubank.workspaces.card-types.fulcro3/app",-1434213974),new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","initial-state","nubank.workspaces.card-types.fulcro3/initial-state",-75742905)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("nubank.workspaces.model","card-instance","nubank.workspaces.model/card-instance",338052816),new cljs.core.Keyword("nubank.workspaces.model","card-instance","nubank.workspaces.model/card-instance",338052816),null,null),new cljs.core.Keyword("nubank.workspaces.model","card-instance","nubank.workspaces.model/card-instance",338052816),null,null,null));

//# sourceMappingURL=nubank.workspaces.card_types.fulcro3.js.map
