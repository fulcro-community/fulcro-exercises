goog.provide('com.fulcrologic.fulcro.algorithms.tempid');
com.fulcrologic.fulcro.algorithms.tempid.tag = "fulcro/tempid";

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IPrintWithWriter}
*/
com.fulcrologic.fulcro.algorithms.tempid.TempId = (function (id,__hash){
this.id = id;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.fulcrologic.fulcro.algorithms.tempid.TempId.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(com.fulcrologic.fulcro.algorithms.tempid.TempId.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof com.fulcrologic.fulcro.algorithms.tempid.TempId)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.id,other.id)));
}));

(com.fulcrologic.fulcro.algorithms.tempid.TempId.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.__hash == null)){
(self__.__hash = cljs.core.hash(self__.id));
} else {
}

return self__.__hash;
}));

(com.fulcrologic.fulcro.algorithms.tempid.TempId.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#",com.fulcrologic.fulcro.algorithms.tempid.tag,"[\"",self__.id,"\"]"], 0));
}));

(com.fulcrologic.fulcro.algorithms.tempid.TempId.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(com.fulcrologic.fulcro.algorithms.tempid.TempId.cljs$lang$type = true);

(com.fulcrologic.fulcro.algorithms.tempid.TempId.cljs$lang$ctorStr = "com.fulcrologic.fulcro.algorithms.tempid/TempId");

(com.fulcrologic.fulcro.algorithms.tempid.TempId.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.fulcrologic.fulcro.algorithms.tempid/TempId");
}));

/**
 * Positional factory function for com.fulcrologic.fulcro.algorithms.tempid/TempId.
 */
com.fulcrologic.fulcro.algorithms.tempid.__GT_TempId = (function com$fulcrologic$fulcro$algorithms$tempid$__GT_TempId(id,__hash){
return (new com.fulcrologic.fulcro.algorithms.tempid.TempId(id,__hash));
});

/**
 * Create a new tempid.
 */
com.fulcrologic.fulcro.algorithms.tempid.tempid = (function com$fulcrologic$fulcro$algorithms$tempid$tempid(var_args){
var G__54264 = arguments.length;
switch (G__54264) {
case 0:
return com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
}));

(com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return (new com.fulcrologic.fulcro.algorithms.tempid.TempId(id,null));
}));

(com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$lang$maxFixedArity = 1);

/**
 * Returns true if the given `x` is a tempid.
 */
com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tempid$tempid_QMARK_(x){
return (x instanceof com.fulcrologic.fulcro.algorithms.tempid.TempId);
});
/**
 * Find and combine all of the tempid remappings from a standard fulcro transaction response.
 */
com.fulcrologic.fulcro.algorithms.tempid.result__GT_tempid__GT_realid = (function com$fulcrologic$fulcro$algorithms$tempid$result__GT_tempid__GT_realid(tx_result){
var get_tempids = (function (m){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"tempids","tempids",1767509089));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(get_tempids,cljs.core.second),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.first),tx_result)));
});
/**
 * Replaces all tempids in `data-structure` using the `tid->rid` map.  This is just a deep
 * walk that replaces every possible match of `tid` with `rid`.
 * 
 * `tid->rid` must be a map, as this function optimizes away resolution by checking if
 * the map is empty.
 * 
 * Returns the data structure with everything replaced.
 */
com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids = (function com$fulcrologic$fulcro$algorithms$tempid$resolve_tempids(data_structure,tid__GT_rid){
if(cljs.core.empty_QMARK_(tid__GT_rid)){
return data_structure;
} else {
return clojure.walk.prewalk_replace(tid__GT_rid,data_structure);
}
});
/**
 * Resolve all of the mutation tempid remappings in the `tx-result` against the given `app`.
 * 
 *   app - The fulcro app
 *   tx-result - The transaction result (the body map, not the internal tx node).
 * 
 *   This function rewrites all tempids in the app state and runtime transaction queues.
 * 
 *   NOTE: This function assumes that tempids are distinctly recognizable (e.g. are TempIds or
 *   guids).  It is unsafe to use this function if you're using something else for temporary IDs
 *   as this function might rewrite things that are not IDs.
 */
com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids_BANG_ = (function com$fulcrologic$fulcro$algorithms$tempid$resolve_tempids_BANG_(p__54289,tx_result){
var map__54290 = p__54289;
var map__54290__$1 = (((((!((map__54290 == null))))?(((((map__54290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54290):map__54290);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54290__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54290__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var tid__GT_rid = com.fulcrologic.fulcro.algorithms.tempid.result__GT_tempid__GT_realid(tx_result);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids,tid__GT_rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,(function (r){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(r,new cljs.core.Keyword("com.fulcrologic.fulcro.transactions","submission-queue","com.fulcrologic.fulcro.transactions/submission-queue",569885809),com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids,tid__GT_rid),new cljs.core.Keyword("com.fulcrologic.fulcro.transactions","active-queue","com.fulcrologic.fulcro.transactions/active-queue",1444549947),com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids,tid__GT_rid),new cljs.core.Keyword("com.fulcrologic.fulcro.transactions","send-queues","com.fulcrologic.fulcro.transactions/send-queues",965935990),com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids,tid__GT_rid);
}));
});
/**
 * Generate a UUID. With no args returns a random UUID. with an arg (numeric)
 *   it generates a stable one based on that number (useful for testing). Works in cljc.
 */
com.fulcrologic.fulcro.algorithms.tempid.uuid = (function com$fulcrologic$fulcro$algorithms$tempid$uuid(var_args){
var G__54304 = arguments.length;
switch (G__54304) {
case 0:
return com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___54351 = arguments.length;
var i__4737__auto___54352 = (0);
while(true){
if((i__4737__auto___54352 < len__4736__auto___54351)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54352]));

var G__54353 = (i__4737__auto___54352 + (1));
i__4737__auto___54352 = G__54353;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((0)),(0),null));
return com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4758__auto__);

}
});

(com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.random_uuid();
}));

(com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.uuid(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
}));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$lang$applyTo = (function (seq54302){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54302));
}));

(com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$lang$maxFixedArity = (0));


//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.tempid.js.map
