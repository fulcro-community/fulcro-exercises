goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__59254,p__59255){
var map__59256 = p__59254;
var map__59256__$1 = (((((!((map__59256 == null))))?(((((map__59256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59256):map__59256);
var svc = map__59256__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59256__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59256__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59256__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__59257 = p__59255;
var map__59257__$1 = (((((!((map__59257 == null))))?(((((map__59257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59257):map__59257);
var msg = map__59257__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59257__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59257__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59257__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59257__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__59263,p__59264){
var map__59265 = p__59263;
var map__59265__$1 = (((((!((map__59265 == null))))?(((((map__59265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59265):map__59265);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59265__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__59266 = p__59264;
var map__59266__$1 = (((((!((map__59266 == null))))?(((((map__59266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59266):map__59266);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59266__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__59271,p__59272){
var map__59273 = p__59271;
var map__59273__$1 = (((((!((map__59273 == null))))?(((((map__59273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59273):map__59273);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59273__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59273__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__59274 = p__59272;
var map__59274__$1 = (((((!((map__59274 == null))))?(((((map__59274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59274):map__59274);
var msg = map__59274__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59274__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__59279,tid){
var map__59280 = p__59279;
var map__59280__$1 = (((((!((map__59280 == null))))?(((((map__59280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59280):map__59280);
var svc = map__59280__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59280__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__59311 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__59312 = null;
var count__59313 = (0);
var i__59314 = (0);
while(true){
if((i__59314 < count__59313)){
var vec__59328 = chunk__59312.cljs$core$IIndexed$_nth$arity$2(null,i__59314);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59328,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59328,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__59392 = seq__59311;
var G__59393 = chunk__59312;
var G__59394 = count__59313;
var G__59395 = (i__59314 + (1));
seq__59311 = G__59392;
chunk__59312 = G__59393;
count__59313 = G__59394;
i__59314 = G__59395;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59311);
if(temp__5753__auto__){
var seq__59311__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59311__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59311__$1);
var G__59396 = cljs.core.chunk_rest(seq__59311__$1);
var G__59397 = c__4556__auto__;
var G__59398 = cljs.core.count(c__4556__auto__);
var G__59399 = (0);
seq__59311 = G__59396;
chunk__59312 = G__59397;
count__59313 = G__59398;
i__59314 = G__59399;
continue;
} else {
var vec__59333 = cljs.core.first(seq__59311__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59333,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59333,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__59401 = cljs.core.next(seq__59311__$1);
var G__59402 = null;
var G__59403 = (0);
var G__59404 = (0);
seq__59311 = G__59401;
chunk__59312 = G__59402;
count__59313 = G__59403;
i__59314 = G__59404;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__59293_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__59293_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__59294_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__59294_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__59295_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__59295_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__59298_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__59298_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__59341){
var map__59343 = p__59341;
var map__59343__$1 = (((((!((map__59343 == null))))?(((((map__59343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59343):map__59343);
var svc = map__59343__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59343__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59343__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
