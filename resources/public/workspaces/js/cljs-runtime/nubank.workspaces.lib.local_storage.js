goog.provide('nubank.workspaces.lib.local_storage');
nubank.workspaces.lib.local_storage.local_storage = window.localStorage;
nubank.workspaces.lib.local_storage.get = (function nubank$workspaces$lib$local_storage$get(var_args){
var G__68792 = arguments.length;
switch (G__68792) {
case 1:
return nubank.workspaces.lib.local_storage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nubank.workspaces.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nubank.workspaces.lib.local_storage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return nubank.workspaces.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(nubank.workspaces.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,default$){
var temp__5751__auto__ = nubank.workspaces.lib.local_storage.local_storage.getItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)));
if(cljs.core.truth_(temp__5751__auto__)){
var value = temp__5751__auto__;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
} else {
return default$;
}
}));

(nubank.workspaces.lib.local_storage.get.cljs$lang$maxFixedArity = 2);

nubank.workspaces.lib.local_storage.set_BANG_ = (function nubank$workspaces$lib$local_storage$set_BANG_(key,value){
return nubank.workspaces.lib.local_storage.local_storage.setItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
nubank.workspaces.lib.local_storage.update_BANG_ = (function nubank$workspaces$lib$local_storage$update_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68843 = arguments.length;
var i__4737__auto___68844 = (0);
while(true){
if((i__4737__auto___68844 < len__4736__auto___68843)){
args__4742__auto__.push((arguments[i__4737__auto___68844]));

var G__68846 = (i__4737__auto___68844 + (1));
i__4737__auto___68844 = G__68846;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return nubank.workspaces.lib.local_storage.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(nubank.workspaces.lib.local_storage.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
return nubank.workspaces.lib.local_storage.local_storage.setItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,nubank.workspaces.lib.local_storage.get.cljs$core$IFn$_invoke$arity$1(key),args)], 0)));
}));

(nubank.workspaces.lib.local_storage.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nubank.workspaces.lib.local_storage.update_BANG_.cljs$lang$applyTo = (function (seq68800){
var G__68801 = cljs.core.first(seq68800);
var seq68800__$1 = cljs.core.next(seq68800);
var G__68802 = cljs.core.first(seq68800__$1);
var seq68800__$2 = cljs.core.next(seq68800__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68801,G__68802,seq68800__$2);
}));

nubank.workspaces.lib.local_storage.remove_BANG_ = (function nubank$workspaces$lib$local_storage$remove_BANG_(key){
return nubank.workspaces.lib.local_storage.local_storage.removeItem(key);
});
nubank.workspaces.lib.local_storage.read_transit = (function nubank$workspaces$lib$local_storage$read_transit(s){
var reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.read(reader,s);
});
nubank.workspaces.lib.local_storage.write_transit = (function nubank$workspaces$lib$local_storage$write_transit(x){
var writer = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.write(writer,x);
});
nubank.workspaces.lib.local_storage.tget = (function nubank$workspaces$lib$local_storage$tget(var_args){
var G__68814 = arguments.length;
switch (G__68814) {
case 1:
return nubank.workspaces.lib.local_storage.tget.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nubank.workspaces.lib.local_storage.tget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nubank.workspaces.lib.local_storage.tget.cljs$core$IFn$_invoke$arity$1 = (function (key){
return nubank.workspaces.lib.local_storage.tget.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(nubank.workspaces.lib.local_storage.tget.cljs$core$IFn$_invoke$arity$2 = (function (key,default$){
var temp__5751__auto__ = nubank.workspaces.lib.local_storage.local_storage.getItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)));
if(cljs.core.truth_(temp__5751__auto__)){
var value = temp__5751__auto__;
return nubank.workspaces.lib.local_storage.read_transit(value);
} else {
return default$;
}
}));

(nubank.workspaces.lib.local_storage.tget.cljs$lang$maxFixedArity = 2);

nubank.workspaces.lib.local_storage.tset_BANG_ = (function nubank$workspaces$lib$local_storage$tset_BANG_(key,value){
return nubank.workspaces.lib.local_storage.local_storage.setItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)),nubank.workspaces.lib.local_storage.write_transit(value));
});
nubank.workspaces.lib.local_storage.tupdate_BANG_ = (function nubank$workspaces$lib$local_storage$tupdate_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68867 = arguments.length;
var i__4737__auto___68868 = (0);
while(true){
if((i__4737__auto___68868 < len__4736__auto___68867)){
args__4742__auto__.push((arguments[i__4737__auto___68868]));

var G__68869 = (i__4737__auto___68868 + (1));
i__4737__auto___68868 = G__68869;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return nubank.workspaces.lib.local_storage.tupdate_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(nubank.workspaces.lib.local_storage.tupdate_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
return nubank.workspaces.lib.local_storage.local_storage.setItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)),nubank.workspaces.lib.local_storage.write_transit(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,nubank.workspaces.lib.local_storage.tget.cljs$core$IFn$_invoke$arity$1(key),args)));
}));

(nubank.workspaces.lib.local_storage.tupdate_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nubank.workspaces.lib.local_storage.tupdate_BANG_.cljs$lang$applyTo = (function (seq68825){
var G__68826 = cljs.core.first(seq68825);
var seq68825__$1 = cljs.core.next(seq68825);
var G__68827 = cljs.core.first(seq68825__$1);
var seq68825__$2 = cljs.core.next(seq68825__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68826,G__68827,seq68825__$2);
}));


//# sourceMappingURL=nubank.workspaces.lib.local_storage.js.map
