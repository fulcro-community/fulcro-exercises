goog.provide('com.fulcrologic.fulcro.algorithms.transit');
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.transit !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.transit.transit_handlers !== 'undefined')){
} else {
com.fulcrologic.fulcro.algorithms.transit.transit_handlers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"writers","writers",1153823103),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.PersistentArrayMap.EMPTY], null));
}
/**
 * Returns a map that can be used for the :handlers key of a transit reader, taken from the current type handler registry.
 */
com.fulcrologic.fulcro.algorithms.transit.read_handlers = (function com$fulcrologic$fulcro$algorithms$transit$read_handlers(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.fulcro.algorithms.transit.transit_handlers),new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Returns a map that can be used for the :handlers key of a transit writer, taken from the current type handler registry.
 */
com.fulcrologic.fulcro.algorithms.transit.write_handlers = (function com$fulcrologic$fulcro$algorithms$transit$write_handlers(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.fulcro.algorithms.transit.transit_handlers),new cljs.core.Keyword(null,"writers","writers",1153823103),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Create a transit writer.
 * 
 *   - `out`: An acceptable output for transit writers.
 *   - `opts`: (optional) options to pass to `cognitect.transit/writer` (such as handlers).
 */
com.fulcrologic.fulcro.algorithms.transit.writer = (function com$fulcrologic$fulcro$algorithms$transit$writer(var_args){
var G__55444 = arguments.length;
switch (G__55444) {
case 0:
return com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge,com.fulcrologic.fulcro.algorithms.transit.write_handlers()));
}));

(com.fulcrologic.fulcro.algorithms.transit.writer.cljs$lang$maxFixedArity = 1);

/**
 * Create a transit reader.
 * 
 *   - `opts`: (optional) options to pass to `cognitect.transit/reader` (such as data type handlers).
 */
com.fulcrologic.fulcro.algorithms.transit.reader = (function com$fulcrologic$fulcro$algorithms$transit$reader(var_args){
var G__55446 = arguments.length;
switch (G__55446) {
case 0:
return com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge,com.fulcrologic.fulcro.algorithms.transit.read_handlers()));
}));

(com.fulcrologic.fulcro.algorithms.transit.reader.cljs$lang$maxFixedArity = 1);

/**
 * Checks to see that the value in question can be serialized by the default fulcro writer by actually attempting to
 *   serialize it.  This is *not* an efficient check.
 */
com.fulcrologic.fulcro.algorithms.transit.serializable_QMARK_ = (function com$fulcrologic$fulcro$algorithms$transit$serializable_QMARK_(v){
try{com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$0().write(v);

return true;
}catch (e55449){var e = e55449;
return false;
}});
/**
 * Use transit to encode clj data as a string. Useful for encoding initial app state from server-side rendering.
 * 
 *   - `data`: Arbitrary data
 *   - `opts`: (optional) Options to send when creating a `writer`. Always preserves metadata. Adding :metadata? true/false
 *  will turn on/off metadata support. Defaults to on.
 */
com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str = (function com$fulcrologic$fulcro$algorithms$transit$transit_clj__GT_str(var_args){
var G__55452 = arguments.length;
switch (G__55452) {
case 1:
return com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$1 = (function (data){
return com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$2(data,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$2 = (function (data,opts){
var write_meta = cognitect.transit.write_meta;
var opts__$1 = (function (){var G__55455 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"metadata?","metadata?",-1465487050));
if(cljs.core.truth_((function (){var and__4115__auto__ = write_meta;
if(cljs.core.truth_(and__4115__auto__)){
return (!(new cljs.core.Keyword(null,"metadata?","metadata?",-1465487050).cljs$core$IFn$_invoke$arity$1(opts) === false));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55455,new cljs.core.Keyword(null,"transform","transform",1381301764),write_meta);
} else {
return G__55455;
}
})();
return cognitect.transit.write(com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$1(opts__$1),data);
}));

(com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$lang$maxFixedArity = 2);

/**
 * Use transit to decode a string into a clj data structure. Useful for decoding initial app state
 * when starting from a server-side rendering.
 */
com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj = (function com$fulcrologic$fulcro$algorithms$transit$transit_str__GT_clj(var_args){
var G__55459 = arguments.length;
switch (G__55459) {
case 1:
return com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$1 = (function (str){
return com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$2(str,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$2 = (function (str,opts){
return cognitect.transit.read(com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$1(opts),str);
}));

(com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$lang$maxFixedArity = 2);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
/**
 * Creates a map that can be registered with Fulcro's transit support.
 * 
 * * `type` is a `deftype` or `defrecord` that represents your runtime data that you want to support in Transit
 * * `tag` is a string that uniquely identifies your type on the wire
 * * `type->ground` is a function that can take an instance of your `type` and turn it into something transit already
 * knows how to handle.
 * * `ground->type` is a function that can take whatever `type->ground` generated and turn it back into your `type`.
 * 
 * This function returns a map that contains a :reader and :writer key. The value at these keys is suitable for merging
 * at the `:handlers` key of a reader or writer's option map.
 * 
 * See also `install-type-handler!` for adding this to Fulcro's registry of type support.
 */
com.fulcrologic.fulcro.algorithms.transit.type_handler = (function com$fulcrologic$fulcro$algorithms$transit$type_handler(type,tag,type__GT_ground,ground__GT_type){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"writer","writer",-277568236),cljs.core.PersistentArrayMap.createAsIfByAssoc([type,cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((function (_){
return tag;
}),(function (t){
return (type__GT_ground.cljs$core$IFn$_invoke$arity$1 ? type__GT_ground.cljs$core$IFn$_invoke$arity$1(t) : type__GT_ground.call(null,t));
}),(function (r){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
}))]),new cljs.core.Keyword(null,"reader","reader",169660853),cljs.core.PersistentArrayMap.createAsIfByAssoc([tag,cognitect.transit.read_handler(ground__GT_type)])], null);
});
/**
 * Install a type handler (generated by `type-handler`) into the global Fulcro transit support registry. This registry
 * can be used by any Fulcro-aware facility that needs to use transit for any standard purpose where app-specific type
 * support is desired.
 */
com.fulcrologic.fulcro.algorithms.transit.install_type_handler_BANG_ = (function com$fulcrologic$fulcro$algorithms$transit$install_type_handler_BANG_(t){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.transit.transit_handlers,(function (m){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.merge,new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(t)),new cljs.core.Keyword(null,"writers","writers",1153823103),cljs.core.merge,new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(t));
}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.transit !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.transit.install_tempid_handler !== 'undefined')){
} else {
com.fulcrologic.fulcro.algorithms.transit.install_tempid_handler = com.fulcrologic.fulcro.algorithms.transit.install_type_handler_BANG_(com.fulcrologic.fulcro.algorithms.transit.type_handler(com.fulcrologic.fulcro.algorithms.tempid.TempId,com.fulcrologic.fulcro.algorithms.tempid.tag,(function (tid){
return tid.id;
}),(function (uuid){
return com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$1(uuid);
})));
}

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.transit.js.map
