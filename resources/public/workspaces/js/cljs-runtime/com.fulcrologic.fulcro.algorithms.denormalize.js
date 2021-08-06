goog.provide('com.fulcrologic.fulcro.algorithms.denormalize');
com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = (0);
/**
 * Is the given `v` a link ref query (e.g. `[:table '_]) element.
 */
com.fulcrologic.fulcro.algorithms.denormalize.link_ref_QMARK_ = (function com$fulcrologic$fulcro$algorithms$denormalize$link_ref_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(v))) && ((cljs.core.first(v) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(v))));
});
/**
 * Is the given `v` a lookup ref query (i.e. ident)?
 */
com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_ = (function com$fulcrologic$fulcro$algorithms$denormalize$lookup_ref_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(v))) && ((cljs.core.first(v) instanceof cljs.core.Keyword)));
});
/**
 * Returns the value defined by the `ref` from `state-map`.  Works for link refs and
 *   lookup refs.
 */
com.fulcrologic.fulcro.algorithms.denormalize.follow_ref = (function com$fulcrologic$fulcro$algorithms$denormalize$follow_ref(state_map,p__54263){
var vec__54265 = p__54263;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54265,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54265,(1),null);
var ref = vec__54265;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),id)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,table);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,ref);
}
});
/**
 * Returns the key to use in results for the given ref (ident of lookup ref). For link refs this is just
 *   the first element, and for idents it is the ident.
 */
com.fulcrologic.fulcro.algorithms.denormalize.ref_key = (function com$fulcrologic$fulcro$algorithms$denormalize$ref_key(p__54272){
var vec__54274 = p__54272;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54274,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54274,(1),null);
var ref = vec__54274;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),id)){
return table;
} else {
return ref;
}
});
/**
 * Associates time metadata with the given props. This time can be used by rendering optimizations to decide when
 *   stale props are passed to it from a parent in cases where props tunnelling was used for localized refresh.
 */
com.fulcrologic.fulcro.algorithms.denormalize.with_time = (function com$fulcrologic$fulcro$algorithms$denormalize$with_time(props,t){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(props,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.denormalize","time","com.fulcrologic.fulcro.algorithms.denormalize/time",-375164969),t);
});
/**
 * Walk the given AST children (which MUST be prop nodes), and add their values from `current-entity`
 *   (if found).
 */
com.fulcrologic.fulcro.algorithms.denormalize.add_props_BANG_ = (function com$fulcrologic$fulcro$algorithms$denormalize$add_props_BANG_(transient_node,entity,ast_prop_children,state_map){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (n,p__54285){
var map__54286 = p__54285;
var map__54286__$1 = (((((!((map__54286 == null))))?(((((map__54286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54286):map__54286);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54286__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_(key)){
var temp__5751__auto__ = com.fulcrologic.fulcro.algorithms.denormalize.follow_ref(state_map,key);
if(cljs.core.truth_(temp__5751__auto__)){
var x = temp__5751__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,com.fulcrologic.fulcro.algorithms.denormalize.ref_key(key),x);
} else {
return n;
}
} else {
var temp__5751__auto__ = ((cljs.core.coll_QMARK_(entity))?cljs.core.find(entity,key):false);
if(cljs.core.truth_(temp__5751__auto__)){
var entry = temp__5751__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,key,cljs.core.second(entry));
} else {
return n;
}
}
}),transient_node,ast_prop_children);
});
/**
 * Reduce the query depth on `join-node` that appears within the children of `parent-node`.
 */
com.fulcrologic.fulcro.algorithms.denormalize.reduce_depth = (function com$fulcrologic$fulcro$algorithms$denormalize$reduce_depth(parent_node,join_node){
var join_node_index = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,n){
if((join_node === n)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
}),(0),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(parent_node));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(parent_node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),join_node_index,new cljs.core.Keyword(null,"query","query",-1288509510)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,(1)));
});
com.fulcrologic.fulcro.algorithms.denormalize.add_join_BANG_ = (function com$fulcrologic$fulcro$algorithms$denormalize$add_join_BANG_(n,p__54308,entity,state_map,parent_node,idents_seen){
var map__54311 = p__54308;
var map__54311__$1 = (((((!((map__54311 == null))))?(((((map__54311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54311):map__54311);
var join_node = map__54311__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54311__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54311__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var link_join_QMARK_ = com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_(key);
var v = ((link_join_QMARK_)?com.fulcrologic.fulcro.algorithms.denormalize.follow_ref(state_map,key):cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,key));
var key__$1 = ((com.fulcrologic.fulcro.algorithms.denormalize.link_ref_QMARK_(key))?cljs.core.first(key):key);
var is_ref_QMARK_ = com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_(v);
var join_entity = ((is_ref_QMARK_)?com.fulcrologic.fulcro.algorithms.denormalize.follow_ref(state_map,v):v);
var to_many_QMARK_ = (((!(is_ref_QMARK_))) && (cljs.core.vector_QMARK_(join_entity)));
var depth_based_QMARK_ = cljs.core.int_QMARK_(query);
var recursive_QMARK_ = ((depth_based_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query)));
var stop_recursion_QMARK_ = ((recursive_QMARK_) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),query)) || (((is_ref_QMARK_) && ((!(depth_based_QMARK_))) && (cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(idents_seen,key__$1),v)))))));
var parent_node__$1 = ((((depth_based_QMARK_) && ((!(stop_recursion_QMARK_)))))?com.fulcrologic.fulcro.algorithms.denormalize.reduce_depth(parent_node,join_node):parent_node);
var target_node = ((recursive_QMARK_)?parent_node__$1:join_node);
var parent_idents_seen = idents_seen;
var idents_seen__$1 = ((is_ref_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(idents_seen,key__$1,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v):((((to_many_QMARK_) && (cljs.core.every_QMARK_(com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_,v))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(idents_seen,key__$1,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.set(v)):idents_seen
));
if(stop_recursion_QMARK_){
if(cljs.core.truth_((function (){var and__4115__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__4115__auto__)){
return (!(depth_based_QMARK_));
} else {
return and__4115__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.denormalize",null,102,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Loop detected in data graph at ",entity,". Recursive query stopped. See https://book.fulcrologic.com/#warn-denormalize-loop-detected"], null);
}),null)),null,-1009191400);
} else {
}

return n;
} else {
if(to_many_QMARK_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,key__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (x){
var e = ((com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_(x))?com.fulcrologic.fulcro.algorithms.denormalize.follow_ref(state_map,x):x);
var stop_recursion_QMARK___$1 = ((recursive_QMARK_) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),query)) || (((com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_(x)) && ((!(depth_based_QMARK_))) && (cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(parent_idents_seen,key__$1),x)))))));
if(stop_recursion_QMARK___$1){
if(cljs.core.truth_(goog.DEBUG)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.denormalize",null,117,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Loop detected in data graph at ",e,". Recursive query stopped."], null);
}),null)),null,199201911);
} else {
}

return null;
} else {
return (com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4(target_node,e,state_map,idents_seen__$1) : com.fulcrologic.fulcro.algorithms.denormalize.denormalize.call(null,target_node,e,state_map,idents_seen__$1));
}
})),join_entity));
} else {
if(cljs.core.truth_(((recursive_QMARK_)?join_entity:false))){
if(depth_based_QMARK_){
var join_node_index = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,n__$1){
if((join_node === n__$1)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
}),(0),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(parent_node__$1));
var parent_node__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(parent_node__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),join_node_index,new cljs.core.Keyword(null,"query","query",-1288509510)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,(1)));
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,key__$1,(com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4(parent_node__$2,join_entity,state_map,idents_seen__$1) : com.fulcrologic.fulcro.algorithms.denormalize.denormalize.call(null,parent_node__$2,join_entity,state_map,idents_seen__$1)));
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,key__$1,(com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4(parent_node__$1,join_entity,state_map,idents_seen__$1) : com.fulcrologic.fulcro.algorithms.denormalize.denormalize.call(null,parent_node__$1,join_entity,state_map,idents_seen__$1)));
}
} else {
if(cljs.core.map_QMARK_(join_entity)){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,key__$1,(com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4(target_node,join_entity,state_map,idents_seen__$1) : com.fulcrologic.fulcro.algorithms.denormalize.denormalize.call(null,target_node,join_entity,state_map,idents_seen__$1)));
} else {
if(((cljs.core.contains_QMARK_(entity,key__$1)) && ((!(recursive_QMARK_))) && ((!(link_join_QMARK_))))){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,key__$1,v);
} else {
return n;

}
}
}
}
}
});
com.fulcrologic.fulcro.algorithms.denormalize.add_union_BANG_ = (function com$fulcrologic$fulcro$algorithms$denormalize$add_union_BANG_(n,p__54365,entity,state_map,idents_seen){
var map__54366 = p__54365;
var map__54366__$1 = (((((!((map__54366 == null))))?(((((map__54366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54366):map__54366);
var join_node = map__54366__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54366__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var link_join_QMARK_ = com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_(key);
var v = ((link_join_QMARK_)?key:cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,key));
var union_node = cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(join_node));
var union_key__GT_query = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__54372){
var map__54373 = p__54372;
var map__54373__$1 = (((((!((map__54373 == null))))?(((((map__54373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54373):map__54373);
var node = map__54373__$1;
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54373__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,union_key,node);
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(union_node));
var is_ref_QMARK_ = com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_(v);
var to_many_QMARK_ = (((!(is_ref_QMARK_))) && (cljs.core.vector_QMARK_(v)));
if(to_many_QMARK_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,key,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (lookup_ref){
var temp__5751__auto__ = ((com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_(lookup_ref))?com.fulcrologic.fulcro.algorithms.denormalize.follow_ref(state_map,lookup_ref):false);
if(cljs.core.truth_(temp__5751__auto__)){
var e = temp__5751__auto__;
var vec__54403 = lookup_ref;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54403,(0),null);
var temp__5751__auto____$1 = (union_key__GT_query.cljs$core$IFn$_invoke$arity$1 ? union_key__GT_query.cljs$core$IFn$_invoke$arity$1(table) : union_key__GT_query.call(null,table));
if(cljs.core.truth_(temp__5751__auto____$1)){
var target_ast_node = temp__5751__auto____$1;
return (com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4(target_ast_node,e,state_map,idents_seen) : com.fulcrologic.fulcro.algorithms.denormalize.denormalize.call(null,target_ast_node,e,state_map,idents_seen));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})),v));
} else {
if(is_ref_QMARK_){
var temp__5751__auto__ = com.fulcrologic.fulcro.algorithms.denormalize.follow_ref(state_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var e = temp__5751__auto__;
var temp__5751__auto____$1 = (function (){var G__54412 = cljs.core.first(v);
return (union_key__GT_query.cljs$core$IFn$_invoke$arity$1 ? union_key__GT_query.cljs$core$IFn$_invoke$arity$1(G__54412) : union_key__GT_query.call(null,G__54412));
})();
if(cljs.core.truth_(temp__5751__auto____$1)){
var target_ast_node = temp__5751__auto____$1;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,key,(com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4(target_ast_node,e,state_map,idents_seen) : com.fulcrologic.fulcro.algorithms.denormalize.denormalize.call(null,target_ast_node,e,state_map,idents_seen)));
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,key,cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return n;
}
} else {
if(((cljs.core.contains_QMARK_(entity,key)) && ((!(link_join_QMARK_))))){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,key,v);
} else {
return n;

}
}
}
});
com.fulcrologic.fulcro.algorithms.denormalize.add_joins_BANG_ = (function com$fulcrologic$fulcro$algorithms$denormalize$add_joins_BANG_(transient_node,entity,state_map,parent_node,ast_join_nodes,idents_seen){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (n,join_node){
var union_QMARK_ = cljs.core.map_QMARK_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(join_node));
if(union_QMARK_){
return com.fulcrologic.fulcro.algorithms.denormalize.add_union_BANG_(n,join_node,entity,state_map,idents_seen);
} else {
return com.fulcrologic.fulcro.algorithms.denormalize.add_join_BANG_(n,join_node,entity,state_map,parent_node,idents_seen);
}
}),transient_node,ast_join_nodes);
});
/**
 * Internal implementation of `db->tree`.  You should normally use `db->tree` instead of this function.
 * 
 *   - `top-node`: an AST for the query.
 *   - `current-entity`: The entity to start denormalization from.
 *   - `state-map`: a normalized database.
 *   - `idents-seen`: a map of the idents seen so far (for recursion loop tracking).
 */
com.fulcrologic.fulcro.algorithms.denormalize.denormalize = (function com$fulcrologic$fulcro$algorithms$denormalize$denormalize(p__54422,current_entity,state_map,idents_seen){
var map__54423 = p__54422;
var map__54423__$1 = (((((!((map__54423 == null))))?(((((map__54423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54423):map__54423);
var top_node = map__54423__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54423__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54423__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"prop","prop",-515168332))){
} else {
throw (new Error("Assert failed: (not= type :prop)"));
}

var current_entity__$1 = ((com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_(current_entity))?com.fulcrologic.fulcro.algorithms.denormalize.follow_ref(state_map,current_entity):current_entity);
var grouped_children = cljs.core.group_by(new cljs.core.Keyword(null,"type","type",1174270348),children);
var nil_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(grouped_children,null,false);
var wildcard_QMARK_ = (function (){var and__4115__auto__ = nil_nodes;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var G__54425 = nil_nodes;
var G__54425__$1 = (((G__54425 == null))?null:cljs.core.first(G__54425));
if((G__54425__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__54425__$1);
}
})());
} else {
return and__4115__auto__;
}
})();
var result_node = com.fulcrologic.fulcro.algorithms.denormalize.add_props_BANG_(cljs.core.transient$((cljs.core.truth_(wildcard_QMARK_)?current_entity__$1:cljs.core.PersistentArrayMap.EMPTY)),current_entity__$1,new cljs.core.Keyword(null,"prop","prop",-515168332).cljs$core$IFn$_invoke$arity$1(grouped_children),state_map);
var result_node__$1 = com.fulcrologic.fulcro.algorithms.denormalize.add_joins_BANG_(result_node,current_entity__$1,state_map,top_node,new cljs.core.Keyword(null,"join","join",-758861890).cljs$core$IFn$_invoke$arity$1(grouped_children),idents_seen);
var G__54426 = result_node__$1;
var G__54426__$1 = (((G__54426 == null))?null:cljs.core.persistent_BANG_(G__54426));
if((G__54426__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.denormalize.with_time(G__54426__$1,com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_);
}
});
/**
 * Pull a tree of data from a fulcro normalized database as a tree corresponding to the given query.
 * 
 *   query - EQL.
 *   starting-entity - A map of data or ident at which to start.
 *   state-map - The overall normalized database from which idents can be resolved.
 * 
 *   Returns a tree of data where each resolved data node is also marked with the current
 *   *denormalize-time* (dynamically bound outside of this call). Users of this function that
 *   are hydrating the UI should ensure that this time is bound to Fulcro's current internal
 *   basis-time using `binding`.
 * 
 *   The `state-map` needs to be your entire Fulcro database. This database is used to resolve the joins in the EQL query
 *   (which are represented as `idents`).
 * 
 *   The starting entity can be `state-map` as well if your EQL query starts from your root. If not, it can simply be
 *   the map (taken from the `state-map`) of the entity whose query you're using.
 * 
 *   For example:
 * 
 *   ```
 *   (defsc SomeComponent [this props]
 *  {:ident :thing/id
 *   :query [...]})
 * 
 *   ;; Get the sub-tree of data for thing 1:
 *   (db->tree
 *  (comp/get-query SomeComponent)
 *  (get-in state-map [:thing/id 1])
 *  state-map)
 *   ```
 *   
 */
com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree = (function com$fulcrologic$fulcro$algorithms$denormalize$db__GT_tree(query,starting_entity,state_map){
var ast = edn_query_language.core.query__GT_ast(query);
var G__54432 = com.fulcrologic.fulcro.algorithms.denormalize.denormalize(ast,starting_entity,state_map,cljs.core.PersistentArrayMap.EMPTY);
if((G__54432 == null)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.denormalize.with_time(G__54432,com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_);
}
});
/**
 * Gets the time at which the given props were processed by `db->tree`, if known.
 */
com.fulcrologic.fulcro.algorithms.denormalize.denormalization_time = (function com$fulcrologic$fulcro$algorithms$denormalize$denormalization_time(props){
var G__54438 = props;
var G__54438__$1 = (((G__54438 == null))?null:cljs.core.meta(G__54438));
if((G__54438__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.denormalize","time","com.fulcrologic.fulcro.algorithms.denormalize/time",-375164969).cljs$core$IFn$_invoke$arity$1(G__54438__$1);
}
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.denormalize.js.map
