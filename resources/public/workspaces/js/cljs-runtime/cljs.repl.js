goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__74720){
var map__74721 = p__74720;
var map__74721__$1 = (((((!((map__74721 == null))))?(((((map__74721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74721):map__74721);
var m = map__74721__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74721__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74721__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__74723_74824 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__74724_74825 = null;
var count__74725_74826 = (0);
var i__74726_74827 = (0);
while(true){
if((i__74726_74827 < count__74725_74826)){
var f_74828 = chunk__74724_74825.cljs$core$IIndexed$_nth$arity$2(null,i__74726_74827);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_74828], 0));


var G__74829 = seq__74723_74824;
var G__74830 = chunk__74724_74825;
var G__74831 = count__74725_74826;
var G__74832 = (i__74726_74827 + (1));
seq__74723_74824 = G__74829;
chunk__74724_74825 = G__74830;
count__74725_74826 = G__74831;
i__74726_74827 = G__74832;
continue;
} else {
var temp__5753__auto___74833 = cljs.core.seq(seq__74723_74824);
if(temp__5753__auto___74833){
var seq__74723_74834__$1 = temp__5753__auto___74833;
if(cljs.core.chunked_seq_QMARK_(seq__74723_74834__$1)){
var c__4556__auto___74835 = cljs.core.chunk_first(seq__74723_74834__$1);
var G__74836 = cljs.core.chunk_rest(seq__74723_74834__$1);
var G__74837 = c__4556__auto___74835;
var G__74838 = cljs.core.count(c__4556__auto___74835);
var G__74839 = (0);
seq__74723_74824 = G__74836;
chunk__74724_74825 = G__74837;
count__74725_74826 = G__74838;
i__74726_74827 = G__74839;
continue;
} else {
var f_74840 = cljs.core.first(seq__74723_74834__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_74840], 0));


var G__74841 = cljs.core.next(seq__74723_74834__$1);
var G__74842 = null;
var G__74843 = (0);
var G__74844 = (0);
seq__74723_74824 = G__74841;
chunk__74724_74825 = G__74842;
count__74725_74826 = G__74843;
i__74726_74827 = G__74844;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_74845 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_74845], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_74845)))?cljs.core.second(arglists_74845):arglists_74845)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__74727_74846 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__74728_74847 = null;
var count__74729_74848 = (0);
var i__74730_74849 = (0);
while(true){
if((i__74730_74849 < count__74729_74848)){
var vec__74741_74850 = chunk__74728_74847.cljs$core$IIndexed$_nth$arity$2(null,i__74730_74849);
var name_74851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74741_74850,(0),null);
var map__74744_74852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74741_74850,(1),null);
var map__74744_74853__$1 = (((((!((map__74744_74852 == null))))?(((((map__74744_74852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74744_74852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74744_74852):map__74744_74852);
var doc_74854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74744_74853__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_74855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74744_74853__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_74851], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_74855], 0));

if(cljs.core.truth_(doc_74854)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_74854], 0));
} else {
}


var G__74856 = seq__74727_74846;
var G__74857 = chunk__74728_74847;
var G__74858 = count__74729_74848;
var G__74859 = (i__74730_74849 + (1));
seq__74727_74846 = G__74856;
chunk__74728_74847 = G__74857;
count__74729_74848 = G__74858;
i__74730_74849 = G__74859;
continue;
} else {
var temp__5753__auto___74860 = cljs.core.seq(seq__74727_74846);
if(temp__5753__auto___74860){
var seq__74727_74861__$1 = temp__5753__auto___74860;
if(cljs.core.chunked_seq_QMARK_(seq__74727_74861__$1)){
var c__4556__auto___74862 = cljs.core.chunk_first(seq__74727_74861__$1);
var G__74863 = cljs.core.chunk_rest(seq__74727_74861__$1);
var G__74864 = c__4556__auto___74862;
var G__74865 = cljs.core.count(c__4556__auto___74862);
var G__74866 = (0);
seq__74727_74846 = G__74863;
chunk__74728_74847 = G__74864;
count__74729_74848 = G__74865;
i__74730_74849 = G__74866;
continue;
} else {
var vec__74746_74867 = cljs.core.first(seq__74727_74861__$1);
var name_74868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74746_74867,(0),null);
var map__74749_74869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74746_74867,(1),null);
var map__74749_74870__$1 = (((((!((map__74749_74869 == null))))?(((((map__74749_74869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74749_74869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74749_74869):map__74749_74869);
var doc_74871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74749_74870__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_74872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74749_74870__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_74868], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_74872], 0));

if(cljs.core.truth_(doc_74871)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_74871], 0));
} else {
}


var G__74873 = cljs.core.next(seq__74727_74861__$1);
var G__74874 = null;
var G__74875 = (0);
var G__74876 = (0);
seq__74727_74846 = G__74873;
chunk__74728_74847 = G__74874;
count__74729_74848 = G__74875;
i__74730_74849 = G__74876;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__74751 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__74752 = null;
var count__74753 = (0);
var i__74754 = (0);
while(true){
if((i__74754 < count__74753)){
var role = chunk__74752.cljs$core$IIndexed$_nth$arity$2(null,i__74754);
var temp__5753__auto___74877__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___74877__$1)){
var spec_74878 = temp__5753__auto___74877__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_74878)], 0));
} else {
}


var G__74879 = seq__74751;
var G__74880 = chunk__74752;
var G__74881 = count__74753;
var G__74882 = (i__74754 + (1));
seq__74751 = G__74879;
chunk__74752 = G__74880;
count__74753 = G__74881;
i__74754 = G__74882;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__74751);
if(temp__5753__auto____$1){
var seq__74751__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__74751__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__74751__$1);
var G__74883 = cljs.core.chunk_rest(seq__74751__$1);
var G__74884 = c__4556__auto__;
var G__74885 = cljs.core.count(c__4556__auto__);
var G__74886 = (0);
seq__74751 = G__74883;
chunk__74752 = G__74884;
count__74753 = G__74885;
i__74754 = G__74886;
continue;
} else {
var role = cljs.core.first(seq__74751__$1);
var temp__5753__auto___74887__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___74887__$2)){
var spec_74888 = temp__5753__auto___74887__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_74888)], 0));
} else {
}


var G__74889 = cljs.core.next(seq__74751__$1);
var G__74890 = null;
var G__74891 = (0);
var G__74892 = (0);
seq__74751 = G__74889;
chunk__74752 = G__74890;
count__74753 = G__74891;
i__74754 = G__74892;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__74893 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__74894 = cljs.core.ex_cause(t);
via = G__74893;
t = G__74894;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__74757 = datafied_throwable;
var map__74757__$1 = (((((!((map__74757 == null))))?(((((map__74757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74757):map__74757);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74757__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74757__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74757__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__74758 = cljs.core.last(via);
var map__74758__$1 = (((((!((map__74758 == null))))?(((((map__74758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74758):map__74758);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74758__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74758__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74758__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__74759 = data;
var map__74759__$1 = (((((!((map__74759 == null))))?(((((map__74759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74759):map__74759);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74759__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74759__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74759__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__74760 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__74760__$1 = (((((!((map__74760 == null))))?(((((map__74760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74760):map__74760);
var top_data = map__74760__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74760__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__74765 = phase;
var G__74765__$1 = (((G__74765 instanceof cljs.core.Keyword))?G__74765.fqn:null);
switch (G__74765__$1) {
case "read-source":
var map__74766 = data;
var map__74766__$1 = (((((!((map__74766 == null))))?(((((map__74766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74766):map__74766);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74766__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74766__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__74768 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__74768__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74768,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__74768);
var G__74768__$2 = (cljs.core.truth_((function (){var fexpr__74769 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__74769.cljs$core$IFn$_invoke$arity$1 ? fexpr__74769.cljs$core$IFn$_invoke$arity$1(source) : fexpr__74769.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__74768__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__74768__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74768__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__74768__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__74770 = top_data;
var G__74770__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74770,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__74770);
var G__74770__$2 = (cljs.core.truth_((function (){var fexpr__74771 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__74771.cljs$core$IFn$_invoke$arity$1 ? fexpr__74771.cljs$core$IFn$_invoke$arity$1(source) : fexpr__74771.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__74770__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__74770__$1);
var G__74770__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74770__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__74770__$2);
var G__74770__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74770__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__74770__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74770__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__74770__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__74772 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74772,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74772,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74772,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74772,(3),null);
var G__74775 = top_data;
var G__74775__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74775,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__74775);
var G__74775__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74775__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__74775__$1);
var G__74775__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74775__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__74775__$2);
var G__74775__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74775__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__74775__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74775__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__74775__$4;
}

break;
case "execution":
var vec__74776 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74776,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74776,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74776,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74776,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__74756_SHARP_){
var or__4126__auto__ = (p1__74756_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__74780 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__74780.cljs$core$IFn$_invoke$arity$1 ? fexpr__74780.cljs$core$IFn$_invoke$arity$1(p1__74756_SHARP_) : fexpr__74780.call(null,p1__74756_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__74781 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__74781__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74781,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__74781);
var G__74781__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74781__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__74781__$1);
var G__74781__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74781__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__74781__$2);
var G__74781__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74781__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__74781__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74781__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__74781__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74765__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__74784){
var map__74785 = p__74784;
var map__74785__$1 = (((((!((map__74785 == null))))?(((((map__74785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74785):map__74785);
var triage_data = map__74785__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74785__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74785__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74785__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74785__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74785__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74785__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74785__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74785__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__74787 = phase;
var G__74787__$1 = (((G__74787 instanceof cljs.core.Keyword))?G__74787.fqn:null);
switch (G__74787__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__74788 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__74789 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__74790 = loc;
var G__74791 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__74792_74897 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__74793_74898 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__74794_74899 = true;
var _STAR_print_fn_STAR__temp_val__74795_74900 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__74794_74899);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__74795_74900);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74782_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__74782_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__74793_74898);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__74792_74897);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__74788,G__74789,G__74790,G__74791) : format.call(null,G__74788,G__74789,G__74790,G__74791));

break;
case "macroexpansion":
var G__74796 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__74797 = cause_type;
var G__74798 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__74799 = loc;
var G__74800 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__74796,G__74797,G__74798,G__74799,G__74800) : format.call(null,G__74796,G__74797,G__74798,G__74799,G__74800));

break;
case "compile-syntax-check":
var G__74801 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__74802 = cause_type;
var G__74803 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__74804 = loc;
var G__74805 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__74801,G__74802,G__74803,G__74804,G__74805) : format.call(null,G__74801,G__74802,G__74803,G__74804,G__74805));

break;
case "compilation":
var G__74806 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__74807 = cause_type;
var G__74808 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__74809 = loc;
var G__74810 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__74806,G__74807,G__74808,G__74809,G__74810) : format.call(null,G__74806,G__74807,G__74808,G__74809,G__74810));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__74811 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__74812 = symbol;
var G__74813 = loc;
var G__74814 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__74815_74901 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__74816_74902 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__74817_74903 = true;
var _STAR_print_fn_STAR__temp_val__74818_74904 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__74817_74903);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__74818_74904);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74783_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__74783_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__74816_74902);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__74815_74901);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__74811,G__74812,G__74813,G__74814) : format.call(null,G__74811,G__74812,G__74813,G__74814));
} else {
var G__74819 = "Execution error%s at %s(%s).\n%s\n";
var G__74820 = cause_type;
var G__74821 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__74822 = loc;
var G__74823 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__74819,G__74820,G__74821,G__74822,G__74823) : format.call(null,G__74819,G__74820,G__74821,G__74822,G__74823));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74787__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
