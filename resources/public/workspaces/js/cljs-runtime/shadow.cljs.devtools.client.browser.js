goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64187 = arguments.length;
var i__4737__auto___64188 = (0);
while(true){
if((i__4737__auto___64188 < len__4736__auto___64187)){
args__4742__auto__.push((arguments[i__4737__auto___64188]));

var G__64189 = (i__4737__auto___64188 + (1));
i__4737__auto___64188 = G__64189;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq63781){
var G__63782 = cljs.core.first(seq63781);
var seq63781__$1 = cljs.core.next(seq63781);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63782,seq63781__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__63792 = cljs.core.seq(sources);
var chunk__63793 = null;
var count__63794 = (0);
var i__63795 = (0);
while(true){
if((i__63795 < count__63794)){
var map__63810 = chunk__63793.cljs$core$IIndexed$_nth$arity$2(null,i__63795);
var map__63810__$1 = (((((!((map__63810 == null))))?(((((map__63810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63810):map__63810);
var src = map__63810__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63810__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63810__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63810__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63810__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e63812){var e_64200 = e63812;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_64200);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_64200.message)].join('')));
}

var G__64208 = seq__63792;
var G__64209 = chunk__63793;
var G__64210 = count__63794;
var G__64211 = (i__63795 + (1));
seq__63792 = G__64208;
chunk__63793 = G__64209;
count__63794 = G__64210;
i__63795 = G__64211;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63792);
if(temp__5753__auto__){
var seq__63792__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63792__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__63792__$1);
var G__64213 = cljs.core.chunk_rest(seq__63792__$1);
var G__64214 = c__4556__auto__;
var G__64215 = cljs.core.count(c__4556__auto__);
var G__64216 = (0);
seq__63792 = G__64213;
chunk__63793 = G__64214;
count__63794 = G__64215;
i__63795 = G__64216;
continue;
} else {
var map__63817 = cljs.core.first(seq__63792__$1);
var map__63817__$1 = (((((!((map__63817 == null))))?(((((map__63817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63817):map__63817);
var src = map__63817__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63817__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63817__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63817__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63817__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e63825){var e_64226 = e63825;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_64226);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_64226.message)].join('')));
}

var G__64229 = cljs.core.next(seq__63792__$1);
var G__64230 = null;
var G__64231 = (0);
var G__64232 = (0);
seq__63792 = G__64229;
chunk__63793 = G__64230;
count__63794 = G__64231;
i__63795 = G__64232;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__63843 = cljs.core.seq(js_requires);
var chunk__63844 = null;
var count__63845 = (0);
var i__63846 = (0);
while(true){
if((i__63846 < count__63845)){
var js_ns = chunk__63844.cljs$core$IIndexed$_nth$arity$2(null,i__63846);
var require_str_64249 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_64249);


var G__64250 = seq__63843;
var G__64251 = chunk__63844;
var G__64252 = count__63845;
var G__64253 = (i__63846 + (1));
seq__63843 = G__64250;
chunk__63844 = G__64251;
count__63845 = G__64252;
i__63846 = G__64253;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63843);
if(temp__5753__auto__){
var seq__63843__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63843__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__63843__$1);
var G__64254 = cljs.core.chunk_rest(seq__63843__$1);
var G__64255 = c__4556__auto__;
var G__64256 = cljs.core.count(c__4556__auto__);
var G__64257 = (0);
seq__63843 = G__64254;
chunk__63844 = G__64255;
count__63845 = G__64256;
i__63846 = G__64257;
continue;
} else {
var js_ns = cljs.core.first(seq__63843__$1);
var require_str_64258 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_64258);


var G__64259 = cljs.core.next(seq__63843__$1);
var G__64260 = null;
var G__64261 = (0);
var G__64262 = (0);
seq__63843 = G__64259;
chunk__63844 = G__64260;
count__63845 = G__64261;
i__63846 = G__64262;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__63862){
var map__63863 = p__63862;
var map__63863__$1 = (((((!((map__63863 == null))))?(((((map__63863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63863):map__63863);
var msg = map__63863__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63863__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63863__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63865(s__63866){
return (new cljs.core.LazySeq(null,(function (){
var s__63866__$1 = s__63866;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__63866__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__63872 = cljs.core.first(xs__6308__auto__);
var map__63872__$1 = (((((!((map__63872 == null))))?(((((map__63872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63872):map__63872);
var src = map__63872__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63872__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63872__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__63866__$1,map__63872,map__63872__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__63863,map__63863__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63865_$_iter__63867(s__63868){
return (new cljs.core.LazySeq(null,((function (s__63866__$1,map__63872,map__63872__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__63863,map__63863__$1,msg,info,reload_info){
return (function (){
var s__63868__$1 = s__63868;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__63868__$1);
if(temp__5753__auto____$1){
var s__63868__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63868__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63868__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63870 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63869 = (0);
while(true){
if((i__63869 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__63869);
cljs.core.chunk_append(b__63870,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__64274 = (i__63869 + (1));
i__63869 = G__64274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63870),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63865_$_iter__63867(cljs.core.chunk_rest(s__63868__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63870),null);
}
} else {
var warning = cljs.core.first(s__63868__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63865_$_iter__63867(cljs.core.rest(s__63868__$2)));
}
} else {
return null;
}
break;
}
});})(s__63866__$1,map__63872,map__63872__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__63863,map__63863__$1,msg,info,reload_info))
,null,null));
});})(s__63866__$1,map__63872,map__63872__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__63863,map__63863__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63865(cljs.core.rest(s__63866__$1)));
} else {
var G__64294 = cljs.core.rest(s__63866__$1);
s__63866__$1 = G__64294;
continue;
}
} else {
var G__64296 = cljs.core.rest(s__63866__$1);
s__63866__$1 = G__64296;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__63888_64299 = cljs.core.seq(warnings);
var chunk__63889_64300 = null;
var count__63890_64301 = (0);
var i__63891_64302 = (0);
while(true){
if((i__63891_64302 < count__63890_64301)){
var map__63898_64303 = chunk__63889_64300.cljs$core$IIndexed$_nth$arity$2(null,i__63891_64302);
var map__63898_64304__$1 = (((((!((map__63898_64303 == null))))?(((((map__63898_64303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63898_64303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63898_64303):map__63898_64303);
var w_64305 = map__63898_64304__$1;
var msg_64306__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63898_64304__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_64307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63898_64304__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_64308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63898_64304__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_64309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63898_64304__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_64309)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_64307),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_64308),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_64306__$1)].join(''));


var G__64312 = seq__63888_64299;
var G__64313 = chunk__63889_64300;
var G__64314 = count__63890_64301;
var G__64315 = (i__63891_64302 + (1));
seq__63888_64299 = G__64312;
chunk__63889_64300 = G__64313;
count__63890_64301 = G__64314;
i__63891_64302 = G__64315;
continue;
} else {
var temp__5753__auto___64317 = cljs.core.seq(seq__63888_64299);
if(temp__5753__auto___64317){
var seq__63888_64319__$1 = temp__5753__auto___64317;
if(cljs.core.chunked_seq_QMARK_(seq__63888_64319__$1)){
var c__4556__auto___64320 = cljs.core.chunk_first(seq__63888_64319__$1);
var G__64321 = cljs.core.chunk_rest(seq__63888_64319__$1);
var G__64322 = c__4556__auto___64320;
var G__64323 = cljs.core.count(c__4556__auto___64320);
var G__64324 = (0);
seq__63888_64299 = G__64321;
chunk__63889_64300 = G__64322;
count__63890_64301 = G__64323;
i__63891_64302 = G__64324;
continue;
} else {
var map__63906_64327 = cljs.core.first(seq__63888_64319__$1);
var map__63906_64328__$1 = (((((!((map__63906_64327 == null))))?(((((map__63906_64327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63906_64327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63906_64327):map__63906_64327);
var w_64329 = map__63906_64328__$1;
var msg_64330__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63906_64328__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_64331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63906_64328__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_64332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63906_64328__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_64333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63906_64328__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_64333)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_64331),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_64332),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_64330__$1)].join(''));


var G__64337 = cljs.core.next(seq__63888_64319__$1);
var G__64338 = null;
var G__64339 = (0);
var G__64340 = (0);
seq__63888_64299 = G__64337;
chunk__63889_64300 = G__64338;
count__63890_64301 = G__64339;
i__63891_64302 = G__64340;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__63861_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__63861_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__63920){
var map__63921 = p__63920;
var map__63921__$1 = (((((!((map__63921 == null))))?(((((map__63921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63921):map__63921);
var msg = map__63921__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63921__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__63926 = cljs.core.seq(updates);
var chunk__63928 = null;
var count__63929 = (0);
var i__63930 = (0);
while(true){
if((i__63930 < count__63929)){
var path = chunk__63928.cljs$core$IIndexed$_nth$arity$2(null,i__63930);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__63994_64361 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__63998_64362 = null;
var count__63999_64363 = (0);
var i__64000_64364 = (0);
while(true){
if((i__64000_64364 < count__63999_64363)){
var node_64366 = chunk__63998_64362.cljs$core$IIndexed$_nth$arity$2(null,i__64000_64364);
if(cljs.core.not(node_64366.shadow$old)){
var path_match_64367 = shadow.cljs.devtools.client.browser.match_paths(node_64366.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64367)){
var new_link_64369 = (function (){var G__64022 = node_64366.cloneNode(true);
G__64022.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64367),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64022;
})();
(node_64366.shadow$old = true);

(new_link_64369.onload = ((function (seq__63994_64361,chunk__63998_64362,count__63999_64363,i__64000_64364,seq__63926,chunk__63928,count__63929,i__63930,new_link_64369,path_match_64367,node_64366,path,map__63921,map__63921__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_64366);
});})(seq__63994_64361,chunk__63998_64362,count__63999_64363,i__64000_64364,seq__63926,chunk__63928,count__63929,i__63930,new_link_64369,path_match_64367,node_64366,path,map__63921,map__63921__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64367], 0));

goog.dom.insertSiblingAfter(new_link_64369,node_64366);


var G__64372 = seq__63994_64361;
var G__64373 = chunk__63998_64362;
var G__64374 = count__63999_64363;
var G__64375 = (i__64000_64364 + (1));
seq__63994_64361 = G__64372;
chunk__63998_64362 = G__64373;
count__63999_64363 = G__64374;
i__64000_64364 = G__64375;
continue;
} else {
var G__64376 = seq__63994_64361;
var G__64377 = chunk__63998_64362;
var G__64378 = count__63999_64363;
var G__64379 = (i__64000_64364 + (1));
seq__63994_64361 = G__64376;
chunk__63998_64362 = G__64377;
count__63999_64363 = G__64378;
i__64000_64364 = G__64379;
continue;
}
} else {
var G__64381 = seq__63994_64361;
var G__64382 = chunk__63998_64362;
var G__64383 = count__63999_64363;
var G__64384 = (i__64000_64364 + (1));
seq__63994_64361 = G__64381;
chunk__63998_64362 = G__64382;
count__63999_64363 = G__64383;
i__64000_64364 = G__64384;
continue;
}
} else {
var temp__5753__auto___64385 = cljs.core.seq(seq__63994_64361);
if(temp__5753__auto___64385){
var seq__63994_64386__$1 = temp__5753__auto___64385;
if(cljs.core.chunked_seq_QMARK_(seq__63994_64386__$1)){
var c__4556__auto___64388 = cljs.core.chunk_first(seq__63994_64386__$1);
var G__64390 = cljs.core.chunk_rest(seq__63994_64386__$1);
var G__64391 = c__4556__auto___64388;
var G__64392 = cljs.core.count(c__4556__auto___64388);
var G__64393 = (0);
seq__63994_64361 = G__64390;
chunk__63998_64362 = G__64391;
count__63999_64363 = G__64392;
i__64000_64364 = G__64393;
continue;
} else {
var node_64394 = cljs.core.first(seq__63994_64386__$1);
if(cljs.core.not(node_64394.shadow$old)){
var path_match_64395 = shadow.cljs.devtools.client.browser.match_paths(node_64394.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64395)){
var new_link_64396 = (function (){var G__64033 = node_64394.cloneNode(true);
G__64033.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64395),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64033;
})();
(node_64394.shadow$old = true);

(new_link_64396.onload = ((function (seq__63994_64361,chunk__63998_64362,count__63999_64363,i__64000_64364,seq__63926,chunk__63928,count__63929,i__63930,new_link_64396,path_match_64395,node_64394,seq__63994_64386__$1,temp__5753__auto___64385,path,map__63921,map__63921__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_64394);
});})(seq__63994_64361,chunk__63998_64362,count__63999_64363,i__64000_64364,seq__63926,chunk__63928,count__63929,i__63930,new_link_64396,path_match_64395,node_64394,seq__63994_64386__$1,temp__5753__auto___64385,path,map__63921,map__63921__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64395], 0));

goog.dom.insertSiblingAfter(new_link_64396,node_64394);


var G__64404 = cljs.core.next(seq__63994_64386__$1);
var G__64405 = null;
var G__64406 = (0);
var G__64407 = (0);
seq__63994_64361 = G__64404;
chunk__63998_64362 = G__64405;
count__63999_64363 = G__64406;
i__64000_64364 = G__64407;
continue;
} else {
var G__64408 = cljs.core.next(seq__63994_64386__$1);
var G__64409 = null;
var G__64410 = (0);
var G__64411 = (0);
seq__63994_64361 = G__64408;
chunk__63998_64362 = G__64409;
count__63999_64363 = G__64410;
i__64000_64364 = G__64411;
continue;
}
} else {
var G__64412 = cljs.core.next(seq__63994_64386__$1);
var G__64413 = null;
var G__64414 = (0);
var G__64415 = (0);
seq__63994_64361 = G__64412;
chunk__63998_64362 = G__64413;
count__63999_64363 = G__64414;
i__64000_64364 = G__64415;
continue;
}
}
} else {
}
}
break;
}


var G__64416 = seq__63926;
var G__64417 = chunk__63928;
var G__64418 = count__63929;
var G__64419 = (i__63930 + (1));
seq__63926 = G__64416;
chunk__63928 = G__64417;
count__63929 = G__64418;
i__63930 = G__64419;
continue;
} else {
var G__64422 = seq__63926;
var G__64423 = chunk__63928;
var G__64424 = count__63929;
var G__64425 = (i__63930 + (1));
seq__63926 = G__64422;
chunk__63928 = G__64423;
count__63929 = G__64424;
i__63930 = G__64425;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63926);
if(temp__5753__auto__){
var seq__63926__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63926__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__63926__$1);
var G__64428 = cljs.core.chunk_rest(seq__63926__$1);
var G__64429 = c__4556__auto__;
var G__64430 = cljs.core.count(c__4556__auto__);
var G__64431 = (0);
seq__63926 = G__64428;
chunk__63928 = G__64429;
count__63929 = G__64430;
i__63930 = G__64431;
continue;
} else {
var path = cljs.core.first(seq__63926__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__64042_64437 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__64046_64438 = null;
var count__64047_64439 = (0);
var i__64048_64440 = (0);
while(true){
if((i__64048_64440 < count__64047_64439)){
var node_64442 = chunk__64046_64438.cljs$core$IIndexed$_nth$arity$2(null,i__64048_64440);
if(cljs.core.not(node_64442.shadow$old)){
var path_match_64447 = shadow.cljs.devtools.client.browser.match_paths(node_64442.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64447)){
var new_link_64448 = (function (){var G__64067 = node_64442.cloneNode(true);
G__64067.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64447),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64067;
})();
(node_64442.shadow$old = true);

(new_link_64448.onload = ((function (seq__64042_64437,chunk__64046_64438,count__64047_64439,i__64048_64440,seq__63926,chunk__63928,count__63929,i__63930,new_link_64448,path_match_64447,node_64442,path,seq__63926__$1,temp__5753__auto__,map__63921,map__63921__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_64442);
});})(seq__64042_64437,chunk__64046_64438,count__64047_64439,i__64048_64440,seq__63926,chunk__63928,count__63929,i__63930,new_link_64448,path_match_64447,node_64442,path,seq__63926__$1,temp__5753__auto__,map__63921,map__63921__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64447], 0));

goog.dom.insertSiblingAfter(new_link_64448,node_64442);


var G__64450 = seq__64042_64437;
var G__64451 = chunk__64046_64438;
var G__64452 = count__64047_64439;
var G__64453 = (i__64048_64440 + (1));
seq__64042_64437 = G__64450;
chunk__64046_64438 = G__64451;
count__64047_64439 = G__64452;
i__64048_64440 = G__64453;
continue;
} else {
var G__64455 = seq__64042_64437;
var G__64456 = chunk__64046_64438;
var G__64457 = count__64047_64439;
var G__64458 = (i__64048_64440 + (1));
seq__64042_64437 = G__64455;
chunk__64046_64438 = G__64456;
count__64047_64439 = G__64457;
i__64048_64440 = G__64458;
continue;
}
} else {
var G__64459 = seq__64042_64437;
var G__64460 = chunk__64046_64438;
var G__64461 = count__64047_64439;
var G__64462 = (i__64048_64440 + (1));
seq__64042_64437 = G__64459;
chunk__64046_64438 = G__64460;
count__64047_64439 = G__64461;
i__64048_64440 = G__64462;
continue;
}
} else {
var temp__5753__auto___64467__$1 = cljs.core.seq(seq__64042_64437);
if(temp__5753__auto___64467__$1){
var seq__64042_64471__$1 = temp__5753__auto___64467__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64042_64471__$1)){
var c__4556__auto___64472 = cljs.core.chunk_first(seq__64042_64471__$1);
var G__64476 = cljs.core.chunk_rest(seq__64042_64471__$1);
var G__64477 = c__4556__auto___64472;
var G__64478 = cljs.core.count(c__4556__auto___64472);
var G__64479 = (0);
seq__64042_64437 = G__64476;
chunk__64046_64438 = G__64477;
count__64047_64439 = G__64478;
i__64048_64440 = G__64479;
continue;
} else {
var node_64481 = cljs.core.first(seq__64042_64471__$1);
if(cljs.core.not(node_64481.shadow$old)){
var path_match_64482 = shadow.cljs.devtools.client.browser.match_paths(node_64481.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64482)){
var new_link_64484 = (function (){var G__64072 = node_64481.cloneNode(true);
G__64072.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64482),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64072;
})();
(node_64481.shadow$old = true);

(new_link_64484.onload = ((function (seq__64042_64437,chunk__64046_64438,count__64047_64439,i__64048_64440,seq__63926,chunk__63928,count__63929,i__63930,new_link_64484,path_match_64482,node_64481,seq__64042_64471__$1,temp__5753__auto___64467__$1,path,seq__63926__$1,temp__5753__auto__,map__63921,map__63921__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_64481);
});})(seq__64042_64437,chunk__64046_64438,count__64047_64439,i__64048_64440,seq__63926,chunk__63928,count__63929,i__63930,new_link_64484,path_match_64482,node_64481,seq__64042_64471__$1,temp__5753__auto___64467__$1,path,seq__63926__$1,temp__5753__auto__,map__63921,map__63921__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64482], 0));

goog.dom.insertSiblingAfter(new_link_64484,node_64481);


var G__64488 = cljs.core.next(seq__64042_64471__$1);
var G__64489 = null;
var G__64490 = (0);
var G__64491 = (0);
seq__64042_64437 = G__64488;
chunk__64046_64438 = G__64489;
count__64047_64439 = G__64490;
i__64048_64440 = G__64491;
continue;
} else {
var G__64492 = cljs.core.next(seq__64042_64471__$1);
var G__64493 = null;
var G__64494 = (0);
var G__64495 = (0);
seq__64042_64437 = G__64492;
chunk__64046_64438 = G__64493;
count__64047_64439 = G__64494;
i__64048_64440 = G__64495;
continue;
}
} else {
var G__64496 = cljs.core.next(seq__64042_64471__$1);
var G__64497 = null;
var G__64498 = (0);
var G__64499 = (0);
seq__64042_64437 = G__64496;
chunk__64046_64438 = G__64497;
count__64047_64439 = G__64498;
i__64048_64440 = G__64499;
continue;
}
}
} else {
}
}
break;
}


var G__64502 = cljs.core.next(seq__63926__$1);
var G__64503 = null;
var G__64504 = (0);
var G__64505 = (0);
seq__63926 = G__64502;
chunk__63928 = G__64503;
count__63929 = G__64504;
i__63930 = G__64505;
continue;
} else {
var G__64506 = cljs.core.next(seq__63926__$1);
var G__64507 = null;
var G__64508 = (0);
var G__64509 = (0);
seq__63926 = G__64506;
chunk__63928 = G__64507;
count__63929 = G__64508;
i__63930 = G__64509;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__64075){
var map__64077 = p__64075;
var map__64077__$1 = (((((!((map__64077 == null))))?(((((map__64077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64077):map__64077);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64077__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__64096){
var map__64098 = p__64096;
var map__64098__$1 = (((((!((map__64098 == null))))?(((((map__64098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64098):map__64098);
var _ = map__64098__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64098__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__64105,done,error){
var map__64106 = p__64105;
var map__64106__$1 = (((((!((map__64106 == null))))?(((((map__64106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64106):map__64106);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64106__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__64110,done,error){
var map__64111 = p__64110;
var map__64111__$1 = (((((!((map__64111 == null))))?(((((map__64111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64111):map__64111);
var msg = map__64111__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64111__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64111__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64111__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__64117){
var map__64118 = p__64117;
var map__64118__$1 = (((((!((map__64118 == null))))?(((((map__64118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64118):map__64118);
var src = map__64118__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64118__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__64124 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__64124) : done.call(null,G__64124));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__64125){
var map__64126 = p__64125;
var map__64126__$1 = (((((!((map__64126 == null))))?(((((map__64126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64126):map__64126);
var msg__$1 = map__64126__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64126__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e64129){var ex = e64129;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__64133){
var map__64134 = p__64133;
var map__64134__$1 = (((((!((map__64134 == null))))?(((((map__64134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64134):map__64134);
var env = map__64134__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64134__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__64146){
var map__64147 = p__64146;
var map__64147__$1 = (((((!((map__64147 == null))))?(((((map__64147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64147):map__64147);
var msg = map__64147__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64147__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__64167){
var map__64168 = p__64167;
var map__64168__$1 = (((((!((map__64168 == null))))?(((((map__64168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64168):map__64168);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64168__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64168__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__64174){
var map__64176 = p__64174;
var map__64176__$1 = (((((!((map__64176 == null))))?(((((map__64176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64176):map__64176);
var svc = map__64176__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64176__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
