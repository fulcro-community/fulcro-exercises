goog.provide('com.fulcrologic.fulcro.ui_state_machines');


com.fulcrologic.fulcro.ui_state_machines.mutation_delegate = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","mutation-delegate","com.fulcrologic.fulcro.ui-state-machines/mutation-delegate",-2068639436,null));
com.fulcrologic.fulcro.ui_state_machines.set_js_timeout_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$set_js_timeout_BANG_(f,tm){
return com.fulcrologic.fulcro.algorithms.scheduling.defer(f,tm);
});
com.fulcrologic.fulcro.ui_state_machines.clear_js_timeout_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$clear_js_timeout_BANG_(timer){
return clearTimeout(timer);
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","atom","com.fulcrologic.fulcro.ui-state-machines/atom",1971230309),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.do-not-use","atom?","com.fulcrologic.fulcro.algorithms.do-not-use/atom?",1966872138,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.list(new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null),"null",cljs.core.list(new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),cljs.core.PersistentArrayMap.EMPTY),"null",cljs.core.list(new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),cljs.core.PersistentHashSet.EMPTY),"null"], null), null)))),cljs.spec.alpha.with_gen(com.fulcrologic.fulcro.algorithms.do_not_use.atom_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)]));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","refresh-vector","com.fulcrologic.fulcro.ui-state-machines/refresh-vector",1069152424),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"tab","tab",-559583621)], null)], null)))),cljs.spec.alpha.with_gen(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("eql","ident?","eql/ident?",-2061479468,null),edn_query_language.core.ident_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70454){
return cljs.core.vector_QMARK_(G__70454);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null),(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"tab","tab",-559583621)], null)], null));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279),new cljs.core.Symbol("com.fulcrologic.fulcro.application","fulcro-app?","com.fulcrologic.fulcro.application/fulcro-app?",-500612286,null),com.fulcrologic.fulcro.application.fulcro_app_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","source-actor-ident","com.fulcrologic.fulcro.ui-state-machines/source-actor-ident",1906012799),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null),edn_query_language.core.ident_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),cljs.core.keyword_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70461){
return cljs.core.map_QMARK_(G__70461);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14391__auto__,v__14392__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14392__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Symbol("eql","ident?","eql/ident?",-2061479468,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),edn_query_language.core.ident_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70466){
return cljs.core.map_QMARK_(G__70466);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14391__auto__,v__14392__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14392__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ident->actor","com.fulcrologic.fulcro.ui-state-machines/ident->actor",491940340),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol("eql","ident?","eql/ident?",-2061479468,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edn_query_language.core.ident_QMARK_,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70471){
return cljs.core.map_QMARK_(G__70471);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14391__auto__,v__14392__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14392__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"the-state-machine","the-state-machine",923612868,null)),"null"], null), null)))),cljs.spec.alpha.with_gen(cljs.core.symbol_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"the-state-machine","the-state-machine",923612868,null),null], null), null));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70481){
return cljs.core.map_QMARK_(G__70481);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14391__auto__,v__14392__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14392__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout","com.fulcrologic.fulcro.ui-state-machines/timeout",2023435248),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timer-1","timer-1",549442173),"null",(42),"null"], null), null)))),cljs.spec.alpha.with_gen(cljs.core.any_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timer-1","timer-1",549442173),null,(42),null], null), null));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-fn","com.fulcrologic.fulcro.ui-state-machines/cancel-fn",1576439332),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"other!","other!",696342595),"null",new cljs.core.Keyword(null,"event!","event!",-361570295),"null"], null), null),"null"], null), null)))),cljs.spec.alpha.with_gen(cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"s","s",1705939918)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.set_QMARK_], null),null),(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"other!","other!",696342595),null,new cljs.core.Keyword(null,"event!","event!",-361570295),null], null), null)]));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-on","com.fulcrologic.fulcro.ui-state-machines/cancel-on",1719737833),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.Symbol(null,"fn-or-set*","fn-or-set*",-424275748,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.list(new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),new cljs.core.Keyword(null,"cancel-on","cancel-on",-479584301))], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Symbol(null,"f","f",43394975,null))))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cancel-on","cancel-on",-479584301),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),true)], null)),"null"], null), null)))),cljs.spec.alpha.with_gen((function com$fulcrologic$fulcro$ui_state_machines$fn_or_set_STAR_(i){
var f = new cljs.core.Keyword(null,"cancel-on","cancel-on",-479584301).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(i));
return ((cljs.core.fn_QMARK_(f)) || (cljs.core.set_QMARK_(f)));
}),(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cancel-on","cancel-on",-479584301),(function (e){
return true;
})], null))]));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__70502#","p1__70502#",958342130,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),new cljs.core.Symbol(null,"p1__70502#","p1__70502#",958342130,null),new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Symbol("cljs.core","boolean","cljs.core/boolean",-1222483266,null))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timer","timer",-1266967739),cljs.core.PersistentArrayMap.EMPTY], null)),"null"], null), null)))),cljs.spec.alpha.with_gen((function (p1__70502_SHARP_){
return cljs.core.boolean$(new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__70502_SHARP_)));
}),(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timer","timer",-1266967739),cljs.core.PersistentArrayMap.EMPTY], null))]));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout-descriptor","com.fulcrologic.fulcro.ui-state-machines/timeout-descriptor",761762782),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout","com.fulcrologic.fulcro.ui-state-machines/timeout",2023435248),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-on","com.fulcrologic.fulcro.ui-state-machines/cancel-on",1719737833)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70518){
return cljs.core.map_QMARK_(G__70518);
}),(function (G__70518){
return cljs.core.contains_QMARK_(G__70518,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544));
}),(function (G__70518){
return cljs.core.contains_QMARK_(G__70518,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout","com.fulcrologic.fulcro.ui-state-machines/timeout",2023435248));
}),(function (G__70518){
return cljs.core.contains_QMARK_(G__70518,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868));
}),(function (G__70518){
return cljs.core.contains_QMARK_(G__70518,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271));
}),(function (G__70518){
return cljs.core.contains_QMARK_(G__70518,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-on","com.fulcrologic.fulcro.ui-state-machines/cancel-on",1719737833));
})], null),(function (G__70518){
return ((cljs.core.map_QMARK_(G__70518)) && (cljs.core.contains_QMARK_(G__70518,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544))) && (cljs.core.contains_QMARK_(G__70518,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout","com.fulcrologic.fulcro.ui-state-machines/timeout",2023435248))) && (cljs.core.contains_QMARK_(G__70518,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868))) && (cljs.core.contains_QMARK_(G__70518,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271))) && (cljs.core.contains_QMARK_(G__70518,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-on","com.fulcrologic.fulcro.ui-state-machines/cancel-on",1719737833))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout","com.fulcrologic.fulcro.ui-state-machines/timeout",2023435248),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-on","com.fulcrologic.fulcro.ui-state-machines/cancel-on",1719737833)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout","com.fulcrologic.fulcro.ui-state-machines/timeout",2023435248),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-on","com.fulcrologic.fulcro.ui-state-machines/cancel-on",1719737833)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout","com.fulcrologic.fulcro.ui-state-machines/timeout",2023435248),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-on","com.fulcrologic.fulcro.ui-state-machines/cancel-on",1719737833)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout","com.fulcrologic.fulcro.ui-state-machines/timeout",2023435248))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-on","com.fulcrologic.fulcro.ui-state-machines/cancel-on",1719737833)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-timeouts","com.fulcrologic.fulcro.ui-state-machines/queued-timeouts",1249273499),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout-descriptor","com.fulcrologic.fulcro.ui-state-machines/timeout-descriptor",761762782)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout-descriptor","com.fulcrologic.fulcro.ui-state-machines/timeout-descriptor",761762782),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout-descriptor","com.fulcrologic.fulcro.ui-state-machines/timeout-descriptor",761762782),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70559){
return cljs.core.coll_QMARK_(G__70559);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout-descriptor","com.fulcrologic.fulcro.ui-state-machines/timeout-descriptor",761762782))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout-descriptor","com.fulcrologic.fulcro.ui-state-machines/timeout-descriptor",761762782)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout-descriptor","com.fulcrologic.fulcro.ui-state-machines/timeout-descriptor",761762782)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout-descriptor","com.fulcrologic.fulcro.ui-state-machines/timeout-descriptor",761762782)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout-descriptor","com.fulcrologic.fulcro.ui-state-machines/timeout-descriptor",761762782)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70565){
return cljs.core.map_QMARK_(G__70565);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14391__auto__,v__14392__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14392__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout-descriptor","com.fulcrologic.fulcro.ui-state-machines/timeout-descriptor",761762782))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm","com.fulcrologic.fulcro.ui-state-machines/asm",1736921645),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ident->actor","com.fulcrologic.fulcro.ui-state-machines/ident->actor",491940340),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70571){
return cljs.core.map_QMARK_(G__70571);
}),(function (G__70571){
return cljs.core.contains_QMARK_(G__70571,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
}),(function (G__70571){
return cljs.core.contains_QMARK_(G__70571,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583));
}),(function (G__70571){
return cljs.core.contains_QMARK_(G__70571,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193));
}),(function (G__70571){
return cljs.core.contains_QMARK_(G__70571,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928));
}),(function (G__70571){
return cljs.core.contains_QMARK_(G__70571,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446));
}),(function (G__70571){
return cljs.core.contains_QMARK_(G__70571,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ident->actor","com.fulcrologic.fulcro.ui-state-machines/ident->actor",491940340));
}),(function (G__70571){
return cljs.core.contains_QMARK_(G__70571,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193));
}),(function (G__70571){
return cljs.core.contains_QMARK_(G__70571,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206));
})], null),(function (G__70571){
return ((cljs.core.map_QMARK_(G__70571)) && (cljs.core.contains_QMARK_(G__70571,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394))) && (cljs.core.contains_QMARK_(G__70571,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583))) && (cljs.core.contains_QMARK_(G__70571,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193))) && (cljs.core.contains_QMARK_(G__70571,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928))) && (cljs.core.contains_QMARK_(G__70571,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446))) && (cljs.core.contains_QMARK_(G__70571,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ident->actor","com.fulcrologic.fulcro.ui-state-machines/ident->actor",491940340))) && (cljs.core.contains_QMARK_(G__70571,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193))) && (cljs.core.contains_QMARK_(G__70571,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ident->actor","com.fulcrologic.fulcro.ui-state-machines/ident->actor",491940340),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ident->actor","com.fulcrologic.fulcro.ui-state-machines/ident->actor",491940340),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ident->actor","com.fulcrologic.fulcro.ui-state-machines/ident->actor",491940340),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ident->actor","com.fulcrologic.fulcro.ui-state-machines/ident->actor",491940340))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-id","com.fulcrologic.fulcro.ui-state-machines/state-id",-1747313730),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","trigger-descriptor","com.fulcrologic.fulcro.ui-state-machines/trigger-descriptor",-1500671927),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70636){
return cljs.core.map_QMARK_(G__70636);
}),(function (G__70636){
return cljs.core.contains_QMARK_(G__70636,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
}),(function (G__70636){
return cljs.core.contains_QMARK_(G__70636,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868));
})], null),(function (G__70636){
return ((cljs.core.map_QMARK_(G__70636)) && (cljs.core.contains_QMARK_(G__70636,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394))) && (cljs.core.contains_QMARK_(G__70636,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-triggers","com.fulcrologic.fulcro.ui-state-machines/queued-triggers",1577632329),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","trigger-descriptor","com.fulcrologic.fulcro.ui-state-machines/trigger-descriptor",-1500671927)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","trigger-descriptor","com.fulcrologic.fulcro.ui-state-machines/trigger-descriptor",-1500671927),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","trigger-descriptor","com.fulcrologic.fulcro.ui-state-machines/trigger-descriptor",-1500671927),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70651){
return cljs.core.coll_QMARK_(G__70651);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","trigger-descriptor","com.fulcrologic.fulcro.ui-state-machines/trigger-descriptor",-1500671927))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","source-actor-ident","com.fulcrologic.fulcro.ui-state-machines/source-actor-ident",1906012799),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-triggers","com.fulcrologic.fulcro.ui-state-machines/queued-triggers",1577632329),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-mutations","com.fulcrologic.fulcro.ui-state-machines/queued-mutations",-652604760),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-loads","com.fulcrologic.fulcro.ui-state-machines/queued-loads",1234134533),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-timeouts","com.fulcrologic.fulcro.ui-state-machines/queued-timeouts",1249273499)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70656){
return cljs.core.map_QMARK_(G__70656);
}),(function (G__70656){
return cljs.core.contains_QMARK_(G__70656,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
}),(function (G__70656){
return cljs.core.contains_QMARK_(G__70656,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
})], null),(function (G__70656){
return ((cljs.core.map_QMARK_(G__70656)) && (cljs.core.contains_QMARK_(G__70656,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138))) && (cljs.core.contains_QMARK_(G__70656,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394))));
}),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","source-actor-ident","com.fulcrologic.fulcro.ui-state-machines/source-actor-ident",1906012799),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-triggers","com.fulcrologic.fulcro.ui-state-machines/queued-triggers",1577632329),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-mutations","com.fulcrologic.fulcro.ui-state-machines/queued-mutations",-652604760),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-loads","com.fulcrologic.fulcro.ui-state-machines/queued-loads",1234134533),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-timeouts","com.fulcrologic.fulcro.ui-state-machines/queued-timeouts",1249273499)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","source-actor-ident","com.fulcrologic.fulcro.ui-state-machines/source-actor-ident",1906012799),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-triggers","com.fulcrologic.fulcro.ui-state-machines/queued-triggers",1577632329),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-mutations","com.fulcrologic.fulcro.ui-state-machines/queued-mutations",-652604760),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-loads","com.fulcrologic.fulcro.ui-state-machines/queued-loads",1234134533),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-timeouts","com.fulcrologic.fulcro.ui-state-machines/queued-timeouts",1249273499)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394)))], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","source-actor-ident","com.fulcrologic.fulcro.ui-state-machines/source-actor-ident",1906012799),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-triggers","com.fulcrologic.fulcro.ui-state-machines/queued-triggers",1577632329),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-mutations","com.fulcrologic.fulcro.ui-state-machines/queued-mutations",-652604760),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-loads","com.fulcrologic.fulcro.ui-state-machines/queued-loads",1234134533),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-timeouts","com.fulcrologic.fulcro.ui-state-machines/queued-timeouts",1249273499)], null)])));
com.fulcrologic.fulcro.ui_state_machines.fake_handler = (function com$fulcrologic$fulcro$ui_state_machines$fake_handler(env){
return env;
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-names","com.fulcrologic.fulcro.ui-state-machines/actor-names",-672395334),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70673){
return cljs.core.set_QMARK_(G__70673);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-predicate","com.fulcrologic.fulcro.ui-state-machines/event-predicate",620527987),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),true),"null",cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),false),"null"], null), null)))),cljs.spec.alpha.with_gen(cljs.core.fn_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([(function (_){
return true;
}),(function (_){
return false;
})]));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","fake-handler","com.fulcrologic.fulcro.ui-state-machines/fake-handler",2029910922,null),"null"], null), null)))),cljs.spec.alpha.with_gen(cljs.core.fn_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([com.fulcrologic.fulcro.ui_state_machines.fake_handler]));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-id","com.fulcrologic.fulcro.ui-state-machines/state-id",-1747313730),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-id","com.fulcrologic.fulcro.ui-state-machines/state-id",-1747313730));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-processing","com.fulcrologic.fulcro.ui-state-machines/event-processing",1901553910),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-predicate","com.fulcrologic.fulcro.ui-state-machines/event-predicate",620527987),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70683){
return cljs.core.map_QMARK_(G__70683);
})], null),(function (G__70683){
return cljs.core.map_QMARK_(G__70683);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-predicate","com.fulcrologic.fulcro.ui-state-machines/event-predicate",620527987),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-predicate","com.fulcrologic.fulcro.ui-state-machines/event-predicate",620527987),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-predicate","com.fulcrologic.fulcro.ui-state-machines/event-predicate",620527987),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-processing","com.fulcrologic.fulcro.ui-state-machines/event-processing",1901553910)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-processing","com.fulcrologic.fulcro.ui-state-machines/event-processing",1901553910)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-processing","com.fulcrologic.fulcro.ui-state-machines/event-processing",1901553910)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-processing","com.fulcrologic.fulcro.ui-state-machines/event-processing",1901553910)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70690){
return cljs.core.map_QMARK_(G__70690);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14391__auto__,v__14392__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14392__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-processing","com.fulcrologic.fulcro.ui-state-machines/event-processing",1901553910))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state","com.fulcrologic.fulcro.ui-state-machines/state",-148827517),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182)], null)),new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363)], null))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","fake-handler","com.fulcrologic.fulcro.ui-state-machines/fake-handler",2029910922,null)], null),"null"], null), null)))),cljs.spec.alpha.with_gen(cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"events","events",1792552201)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182)], null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70696){
return cljs.core.map_QMARK_(G__70696);
}),(function (G__70696){
return cljs.core.contains_QMARK_(G__70696,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182));
})], null),(function (G__70696){
return ((cljs.core.map_QMARK_(G__70696)) && (cljs.core.contains_QMARK_(G__70696,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182)))], null),null])),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70713){
return cljs.core.map_QMARK_(G__70713);
}),(function (G__70713){
return cljs.core.contains_QMARK_(G__70713,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363));
})], null),(function (G__70713){
return ((cljs.core.map_QMARK_(G__70713)) && (cljs.core.contains_QMARK_(G__70713,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363)))], null),null]))], null),null),(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.ui_state_machines.fake_handler], null)]));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-id","com.fulcrologic.fulcro.ui-state-machines/state-id",-1747313730),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state","com.fulcrologic.fulcro.ui-state-machines/state",-148827517)),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","fake-handler","com.fulcrologic.fulcro.ui-state-machines/fake-handler",2029910922,null)], null)], null),"null"], null), null)))),cljs.spec.alpha.with_gen(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-id","com.fulcrologic.fulcro.ui-state-machines/state-id",-1747313730),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state","com.fulcrologic.fulcro.ui-state-machines/state",-148827517)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-id","com.fulcrologic.fulcro.ui-state-machines/state-id",-1747313730),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state","com.fulcrologic.fulcro.ui-state-machines/state",-148827517)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-id","com.fulcrologic.fulcro.ui-state-machines/state-id",-1747313730),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state","com.fulcrologic.fulcro.ui-state-machines/state",-148827517)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70729){
return cljs.core.map_QMARK_(G__70729);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14391__auto__,v__14392__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14392__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-id","com.fulcrologic.fulcro.ui-state-machines/state-id",-1747313730),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state","com.fulcrologic.fulcro.ui-state-machines/state",-148827517))], null),null),(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.ui_state_machines.fake_handler], null)], null)]));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","alias","com.fulcrologic.fulcro.ui-state-machines/alias",466933196),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol("s","every","s/every",-419764428,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1))),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.keyword_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70737){
return ((cljs.core.vector_QMARK_(G__70737)) && (((((function (){var or__4126__auto__ = (1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((1)
,G__70737))) && ((cljs.core.bounded_count((1)
,G__70737) <= (function (){var or__4126__auto__ = null;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (9007199254740991);
}
})())))));
}),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70735){
return cljs.core.map_QMARK_(G__70735);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14391__auto__,v__14392__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14392__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugin","com.fulcrologic.fulcro.ui-state-machines/plugin",270487339),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aliases","aliases",-1307561055,null)], null),null),"null"], null), null)))),cljs.spec.alpha.with_gen(cljs.core.any_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([(function (aliases){
return null;
})]));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugins","com.fulcrologic.fulcro.ui-state-machines/plugins",-304622321),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugin","com.fulcrologic.fulcro.ui-state-machines/plugin",270487339)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugin","com.fulcrologic.fulcro.ui-state-machines/plugin",270487339)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugin","com.fulcrologic.fulcro.ui-state-machines/plugin",270487339)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugin","com.fulcrologic.fulcro.ui-state-machines/plugin",270487339)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70748){
return cljs.core.map_QMARK_(G__70748);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14391__auto__,v__14392__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14392__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugin","com.fulcrologic.fulcro.ui-state-machines/plugin",270487339))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-names","com.fulcrologic.fulcro.ui-state-machines/event-names",-271643382),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.keyword_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70751){
return cljs.core.set_QMARK_(G__70751);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-definition","com.fulcrologic.fulcro.ui-state-machines/state-machine-definition",2134883152),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-names","com.fulcrologic.fulcro.ui-state-machines/actor-names",-672395334),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugins","com.fulcrologic.fulcro.ui-state-machines/plugins",-304622321),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-names","com.fulcrologic.fulcro.ui-state-machines/event-names",-271643382)], null)),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-names","com.fulcrologic.fulcro.ui-state-machines/actor-names",-672395334),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"null"], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"env","env",-175281708,null)], null),new cljs.core.Symbol(null,"env","env",-175281708,null))], null)], null)], null),"null"], null), null)))),cljs.spec.alpha.with_gen(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70756){
return cljs.core.map_QMARK_(G__70756);
}),(function (G__70756){
return cljs.core.contains_QMARK_(G__70756,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308));
})], null),(function (G__70756){
return ((cljs.core.map_QMARK_(G__70756)) && (cljs.core.contains_QMARK_(G__70756,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308))));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-names","com.fulcrologic.fulcro.ui-state-machines/actor-names",-672395334),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugins","com.fulcrologic.fulcro.ui-state-machines/plugins",-304622321),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-names","com.fulcrologic.fulcro.ui-state-machines/event-names",-271643382)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-names","com.fulcrologic.fulcro.ui-state-machines/actor-names",-672395334),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugins","com.fulcrologic.fulcro.ui-state-machines/plugins",-304622321),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-names","com.fulcrologic.fulcro.ui-state-machines/event-names",-271643382)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-names","com.fulcrologic.fulcro.ui-state-machines/actor-names",-672395334),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugins","com.fulcrologic.fulcro.ui-state-machines/plugins",-304622321),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-names","com.fulcrologic.fulcro.ui-state-machines/event-names",-271643382)], null)])),(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-names","com.fulcrologic.fulcro.ui-state-machines/actor-names",-672395334),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return env;
})], null)], null)], null)]));
})));
com.fulcrologic.fulcro.ui_state_machines.registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
com.fulcrologic.fulcro.ui_state_machines.register_state_machine_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$register_state_machine_BANG_(id,definition){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.ui_state_machines.registry,cljs.core.assoc,id,definition);
});
com.fulcrologic.fulcro.ui_state_machines.get_state_machine = (function com$fulcrologic$fulcro$ui_state_machines$get_state_machine(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.ui_state_machines.registry),id);
});
com.fulcrologic.fulcro.ui_state_machines.lookup_state_machine = (function com$fulcrologic$fulcro$ui_state_machines$lookup_state_machine(env){
var G__70775 = (function (){var G__70777 = env;
var G__70778 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583)], null);
return (com.fulcrologic.fulcro.ui_state_machines.asm_value.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.ui_state_machines.asm_value.cljs$core$IFn$_invoke$arity$2(G__70777,G__70778) : com.fulcrologic.fulcro.ui_state_machines.asm_value.call(null,G__70777,G__70778));
})();
if((G__70775 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.ui_state_machines.registry),G__70775);
}
});
com.fulcrologic.fulcro.ui_state_machines.lookup_state_machine_field = (function com$fulcrologic$fulcro$ui_state_machines$lookup_state_machine_field(env,ks){
if(cljs.core.vector_QMARK_(ks)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.ui_state_machines.lookup_state_machine(env),ks);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.ui_state_machines.lookup_state_machine(env),ks);
}
});
/**
 * Mutation: Trigger an event on an active state machine
 */
com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","trigger-state-machine-event","com.fulcrologic.fulcro.ui-state-machines/trigger-state-machine-event",717825464,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","trigger-state-machine-event","com.fulcrologic.fulcro.ui-state-machines/trigger-state-machine-event",717825464,null),(function (fulcro_mutation_env_symbol){
var map__70784 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__70784__$1 = (((((!((map__70784 == null))))?(((((map__70784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70784):map__70784);
var params = map__70784__$1;
var event_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70784__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70784__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var asm_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70784__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$ui_state_machines$action(p__70788){
var map__70789 = p__70788;
var map__70789__$1 = (((((!((map__70789 == null))))?(((((map__70789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70789):map__70789);
var env = map__70789__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70789__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var _STAR_after_render_STAR__orig_val__70792_71736 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__70793_71737 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__70793_71737);

try{var map__70797_71738 = event_data;
var map__70797_71739__$1 = (((((!((map__70797_71738 == null))))?(((((map__70797_71738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70797_71738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70797_71738):map__70797_71738);
var transact_options_71740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70797_71739__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","transact-options","com.fulcrologic.fulcro.ui-state-machines/transact-options",-1902859465));
var map__70798_71741 = env;
var map__70798_71742__$1 = (((((!((map__70798_71741 == null))))?(((((map__70798_71741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70798_71741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70798_71741):map__70798_71741);
var tx_options_71743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70798_71742__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var map__70799_71744 = tx_options_71743;
var map__70799_71745__$1 = (((((!((map__70799_71744 == null))))?(((((map__70799_71744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70799_71744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70799_71744):map__70799_71744);
var synchronous_QMARK__71746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70799_71745__$1,new cljs.core.Keyword(null,"synchronous?","synchronous?",1705588391));
var event_data_71747__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(event_data,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","transact-options","com.fulcrologic.fulcro.ui-state-machines/transact-options",-1902859465));
if((event_id == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,135,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Invalid (nil) event ID. See https://book.fulcrologic.com/#err-uism-invalid-eventid"], null);
}),null)),null,-1760791446);
} else {
}

(com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event_BANG_.cljs$core$IFn$_invoke$arity$2(env,params) : com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event_BANG_.call(null,env,params));

com.fulcrologic.fulcro.application.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(app,(function (){var or__4126__auto__ = transact_options_71740;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__70792_71736);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__70808 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__70809 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__70809);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__70808);
}})], null);
}));
/**
 * Trigger an event on an active state machine. Safe to use in mutation bodies. The special key ::uism/transact-options can
 *   be used in `extra-data` to indicate a map of options to send to fulcro's `transact!` and rendering sublayer (for example
 *   to control rendering refresh).
 */
com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$trigger_BANG_(var_args){
var G__70814 = arguments.length;
switch (G__70814) {
case 3:
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,active_state_machine_id,event_id){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(this$,active_state_machine_id,event_id,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,active_state_machine_id,event_id,extra_data){
var map__70818 = extra_data;
var map__70818__$1 = (((((!((map__70818 == null))))?(((((map__70818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70818):map__70818);
var transact_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70818__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","transact-options","com.fulcrologic.fulcro.ui-state-machines/transact-options",-1902859465));
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__70820 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),active_state_machine_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),event_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),extra_data], null);
return (com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.cljs$core$IFn$_invoke$arity$1(G__70820) : com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.call(null,G__70820));
})()], null),(function (){var or__4126__auto__ = transact_options;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
}));

(com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$lang$maxFixedArity = 4);

var debounced_BANG__71755 = goog.functions.debounce((function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),(200));
/**
 * Just like `trigger!`, but does optimistic actions synchronously so that events that change data rendered in
 *   form fields will be updated synchronously.
 */
com.fulcrologic.fulcro.ui_state_machines.trigger_BANG__BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$trigger_BANG__BANG_(var_args){
var G__70828 = arguments.length;
switch (G__70828) {
case 3:
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG__BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.trigger_BANG__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,active_state_machine_id,event_id){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG__BANG_.cljs$core$IFn$_invoke$arity$4(this$,active_state_machine_id,event_id,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.ui_state_machines.trigger_BANG__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,active_state_machine_id,event_id,extra_data){
var map__70832 = extra_data;
var map__70832__$1 = (((((!((map__70832 == null))))?(((((map__70832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70832):map__70832);
var transact_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70832__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","transact-options","com.fulcrologic.fulcro.ui-state-machines/transact-options",-1902859465));
var app = com.fulcrologic.fulcro.components.any__GT_app(this$);
com.fulcrologic.fulcro.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__70835 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),active_state_machine_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),event_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),extra_data], null);
return (com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.cljs$core$IFn$_invoke$arity$1(G__70835) : com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.call(null,G__70835));
})()], null),(function (){var or__4126__auto__ = transact_options;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

var G__70836 = (function (){
return com.fulcrologic.fulcro.application.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(app);
});
return (debounced_BANG__71755.cljs$core$IFn$_invoke$arity$1 ? debounced_BANG__71755.cljs$core$IFn$_invoke$arity$1(G__70836) : debounced_BANG__71755.call(null,G__70836));
}));

(com.fulcrologic.fulcro.ui_state_machines.trigger_BANG__BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Returns the ident of the active state machine with the given ID
 */
com.fulcrologic.fulcro.ui_state_machines.asm_ident = (function com$fulcrologic$fulcro$ui_state_machines$asm_ident(asm_id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id], null);
});
/**
 * Returns the active state machine ID from the state machine env.
 */
com.fulcrologic.fulcro.ui_state_machines.asm_id = (function com$fulcrologic$fulcro$ui_state_machines$asm_id(env){
return new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394).cljs$core$IFn$_invoke$arity$1(env);
});
/**
 * Create the runtime state for the given state machine in it's initial state.
 * 
 *   - `::asm-id` is the globally unique key of for a state machine definition.
 *   - `::asm-id` is a user-generated unique ID for the instance of the asm. This allows more than one
 *  instance of the same state machine definition to be active at the same time on the UI.
 *   - `::actor->ident` is a map from actor name to an ident.
 * 
 *   Returns an active state machine that can be stored in Fulcro state for a specific
 *   state machine definition.
 */
com.fulcrologic.fulcro.ui_state_machines.new_asm = (function com$fulcrologic$fulcro$ui_state_machines$new_asm(p__70846){
var map__70847 = p__70846;
var map__70847__$1 = (((((!((map__70847 == null))))?(((((map__70847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70847):map__70847);
var state_machine_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70847__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583));
var asm_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70847__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
var actor__GT_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70847__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928));
var actor__GT_component_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70847__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446));
var i__GT_a = clojure.set.map_invert(actor__GT_ident);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),state_machine_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ident->actor","com.fulcrologic.fulcro.ui-state-machines/ident->actor",491940340),i__GT_a,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928),actor__GT_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446),(function (){var or__4126__auto__ = actor__GT_component_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206),cljs.core.PersistentArrayMap.EMPTY], null);
});
com.fulcrologic.fulcro.ui_state_machines.asm_active_QMARK_ = (function com$fulcrologic$fulcro$ui_state_machines$asm_active_QMARK_(app_ish,id){
var state_map = com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(app_ish);
return cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),id], null)));
});
/**
 * Returns the path to an asm elements in an asm `env`.
 */
com.fulcrologic.fulcro.ui_state_machines.asm_path = (function com$fulcrologic$fulcro$ui_state_machines$asm_path(p__70855,ks){
var map__70856 = p__70855;
var map__70856__$1 = (((((!((map__70856 == null))))?(((((map__70856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70856):map__70856);
var env = map__70856__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70856__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var asm_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70856__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
var path = ((cljs.core.vector_QMARK_(ks))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id], null),ks):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id,ks], null));
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id], null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.ui-state-machines",null,215,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY),"Attempt to get an ASM path",ks,"for a state machine that is not in Fulcro state. ASM ID: ",asm_id,"See https://book.fulcrologic.com/#warn-uism-sm-not-in-state"], null);
}),null)),null,-1835271210);
} else {
}

return path;
});
/**
 * Get the value of an ASM based on keyword OR key-path `ks`.
 */
com.fulcrologic.fulcro.ui_state_machines.asm_value = (function com$fulcrologic$fulcro$ui_state_machines$asm_value(env,ks){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,com.fulcrologic.fulcro.ui_state_machines.asm_path(env,ks));
});
com.fulcrologic.fulcro.ui_state_machines.valid_state_QMARK_ = (function com$fulcrologic$fulcro$ui_state_machines$valid_state_QMARK_(env,state_id){
var states = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","exit","com.fulcrologic.fulcro.ui-state-machines/exit",600820288),null,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","started","com.fulcrologic.fulcro.ui-state-machines/started",-1306384334),null], null), null),cljs.core.set(cljs.core.keys(com.fulcrologic.fulcro.ui_state_machines.lookup_state_machine_field(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308)))));
return cljs.core.contains_QMARK_(states,state_id);
});
/**
 * Move to the given state. Returns a new env.
 */
com.fulcrologic.fulcro.ui_state_machines.activate = (function com$fulcrologic$fulcro$ui_state_machines$activate(env,state_id){
if(com.fulcrologic.fulcro.ui_state_machines.valid_state_QMARK_(env,state_id)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.ui-state-machines",null,236,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Activating state ",state_id,"on",com.fulcrologic.fulcro.ui_state_machines.asm_id(env)], null);
}),null)),null,1616998038);

return cljs.core.assoc_in(env,com.fulcrologic.fulcro.ui_state_machines.asm_path(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193)),state_id);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,239,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Activate called for invalid state: ",state_id,"on",com.fulcrologic.fulcro.ui_state_machines.asm_id(env),"See https://book.fulcrologic.com/#err-uism-activate-invalid-state"], null);
}),null)),null,-951991912);

return env;
}
});
/**
 * Store a k/v pair with the active state machine (will only exist as long as it is active)
 */
com.fulcrologic.fulcro.ui_state_machines.store = (function com$fulcrologic$fulcro$ui_state_machines$store(env,k,v){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(env,com.fulcrologic.fulcro.ui_state_machines.asm_path(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206)),cljs.core.assoc,k,v);
});
/**
 * Retrieve the value for a k from the active state machine. See `store`.
 */
com.fulcrologic.fulcro.ui_state_machines.retrieve = (function com$fulcrologic$fulcro$ui_state_machines$retrieve(var_args){
var G__70880 = arguments.length;
switch (G__70880) {
case 2:
return com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2 = (function (env,k){
return com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$3(env,k,null);
}));

(com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$3 = (function (env,k,dflt){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(env,com.fulcrologic.fulcro.ui_state_machines.asm_path(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206),k], null)),dflt);
}));

(com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$lang$maxFixedArity = 3);

com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident = (function com$fulcrologic$fulcro$ui_state_machines$actor__GT_ident(env,actor_name){
var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,com.fulcrologic.fulcro.ui_state_machines.asm_path(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928)));
if(cljs.core.truth_(temp__5753__auto__)){
var lookup = temp__5753__auto__;
return (lookup.cljs$core$IFn$_invoke$arity$1 ? lookup.cljs$core$IFn$_invoke$arity$1(actor_name) : lookup.call(null,actor_name));
} else {
return null;
}
});
/**
 * Looks up the given alias in the alias map and returns the real Fulcro state path or nil if no such path exists.
 */
com.fulcrologic.fulcro.ui_state_machines.resolve_alias = (function com$fulcrologic$fulcro$ui_state_machines$resolve_alias(env,alias){
var temp__5753__auto__ = com.fulcrologic.fulcro.ui_state_machines.lookup_state_machine_field(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),alias], null));
if(cljs.core.truth_(temp__5753__auto__)){
var resolution_path = temp__5753__auto__;
var vec__70890 = resolution_path;
var seq__70891 = cljs.core.seq(vec__70890);
var first__70892 = cljs.core.first(seq__70891);
var seq__70891__$1 = cljs.core.next(seq__70891);
var actor = first__70892;
var subpath = seq__70891__$1;
var base_path = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,actor);
var real_path = cljs.core.into.cljs$core$IFn$_invoke$arity$2(base_path,subpath);
return real_path;
} else {
return null;
}
});
/**
 * Get the real Fulcro state-path for the entity of the given actor.
 */
com.fulcrologic.fulcro.ui_state_machines.actor_path = (function com$fulcrologic$fulcro$ui_state_machines$actor_path(var_args){
var G__70899 = arguments.length;
switch (G__70899) {
case 2:
return com.fulcrologic.fulcro.ui_state_machines.actor_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.ui_state_machines.actor_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.actor_path.cljs$core$IFn$_invoke$arity$2 = (function (env,actor_name){
return com.fulcrologic.fulcro.ui_state_machines.actor_path.cljs$core$IFn$_invoke$arity$3(env,actor_name,null);
}));

(com.fulcrologic.fulcro.ui_state_machines.actor_path.cljs$core$IFn$_invoke$arity$3 = (function (env,actor_name,k){
var temp__5751__auto__ = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,actor_name);
if(cljs.core.truth_(temp__5751__auto__)){
var ident = temp__5751__auto__;
var G__70901 = ident;
if(cljs.core.truth_(k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__70901,k);
} else {
return G__70901;
}
} else {
return null;
}
}));

(com.fulcrologic.fulcro.ui_state_machines.actor_path.cljs$lang$maxFixedArity = 3);

/**
 * Set a value in the actor's Fulcro entity. Only the actor is resolved. The k is not processed as an alias. 
 */
com.fulcrologic.fulcro.ui_state_machines.set_actor_value = (function com$fulcrologic$fulcro$ui_state_machines$set_actor_value(env,actor_name,k,v){
var temp__5751__auto__ = com.fulcrologic.fulcro.ui_state_machines.actor_path.cljs$core$IFn$_invoke$arity$3(env,actor_name,k);
if(cljs.core.truth_(temp__5751__auto__)){
var path = temp__5751__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),cljs.core.assoc_in,path,v);
} else {
return env;
}
});
/**
 * Get the value of a particular key in the given actor's entity. If follow-idents? is true (which is the default),
 *   then it will recursively follow idents until it finds a non-ident value.
 */
com.fulcrologic.fulcro.ui_state_machines.actor_value = (function com$fulcrologic$fulcro$ui_state_machines$actor_value(var_args){
var G__70914 = arguments.length;
switch (G__70914) {
case 4:
return com.fulcrologic.fulcro.ui_state_machines.actor_value.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return com.fulcrologic.fulcro.ui_state_machines.actor_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.actor_value.cljs$core$IFn$_invoke$arity$4 = (function (p__70915,actor_name,k,follow_idents_QMARK_){
var map__70916 = p__70915;
var map__70916__$1 = (((((!((map__70916 == null))))?(((((map__70916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70916):map__70916);
var env = map__70916__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70916__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var temp__5753__auto__ = com.fulcrologic.fulcro.ui_state_machines.actor_path.cljs$core$IFn$_invoke$arity$3(env,actor_name,k);
if(cljs.core.truth_(temp__5753__auto__)){
var path = temp__5753__auto__;
var v = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,path);
var depth = (100);
while(true){
if(cljs.core.truth_((function (){var and__4115__auto__ = follow_idents_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return ((edn_query_language.core.ident_QMARK_(v)) && (cljs.core.pos_int_QMARK_(depth)));
} else {
return and__4115__auto__;
}
})())){
var G__71772 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,v);
var G__71773 = (depth - (1));
v = G__71772;
depth = G__71773;
continue;
} else {
return v;
}
break;
}
} else {
return null;
}
}));

(com.fulcrologic.fulcro.ui_state_machines.actor_value.cljs$core$IFn$_invoke$arity$3 = (function (env,actor_name,k){
return com.fulcrologic.fulcro.ui_state_machines.actor_value.cljs$core$IFn$_invoke$arity$4(env,actor_name,k,true);
}));

(com.fulcrologic.fulcro.ui_state_machines.actor_value.cljs$lang$maxFixedArity = 4);

/**
 * Get a Fulcro state value by state machine data alias.
 */
com.fulcrologic.fulcro.ui_state_machines.alias_value = (function com$fulcrologic$fulcro$ui_state_machines$alias_value(p__70928,alias){
var map__70929 = p__70928;
var map__70929__$1 = (((((!((map__70929 == null))))?(((((map__70929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70929):map__70929);
var env = map__70929__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70929__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var temp__5751__auto__ = com.fulcrologic.fulcro.ui_state_machines.resolve_alias(env,alias);
if(cljs.core.truth_(temp__5751__auto__)){
var real_path = temp__5751__auto__;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,real_path);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,314,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find alias in state machine:",alias,"See https://book.fulcrologic.com/#err-uism-unknown-alias"], null);
}),null)),null,-2035931096);

return null;
}
});
/**
 * Deprecated. Use assoc-aliased.
 */
com.fulcrologic.fulcro.ui_state_machines.set_aliased_value = (function com$fulcrologic$fulcro$ui_state_machines$set_aliased_value(var_args){
var G__70947 = arguments.length;
switch (G__70947) {
case 3:
return com.fulcrologic.fulcro.ui_state_machines.set_aliased_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___71778 = arguments.length;
var i__4737__auto___71779 = (0);
while(true){
if((i__4737__auto___71779 < len__4736__auto___71778)){
args_arr__4757__auto__.push((arguments[i__4737__auto___71779]));

var G__71780 = (i__4737__auto___71779 + (1));
i__4737__auto___71779 = G__71780;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return com.fulcrologic.fulcro.ui_state_machines.set_aliased_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(com.fulcrologic.fulcro.ui_state_machines.set_aliased_value.cljs$core$IFn$_invoke$arity$variadic = (function (env,alias,new_value,alias_2,value_2,kv_pairs){
var kvs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,new_value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias_2,value_2], null)], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kv_pairs));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (e,p__70950){
var vec__70953 = p__70950;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70953,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70953,(1),null);
return com.fulcrologic.fulcro.ui_state_machines.set_aliased_value.cljs$core$IFn$_invoke$arity$3(e,k,v);
}),env,kvs);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.ui_state_machines.set_aliased_value.cljs$lang$applyTo = (function (seq70941){
var G__70942 = cljs.core.first(seq70941);
var seq70941__$1 = cljs.core.next(seq70941);
var G__70943 = cljs.core.first(seq70941__$1);
var seq70941__$2 = cljs.core.next(seq70941__$1);
var G__70944 = cljs.core.first(seq70941__$2);
var seq70941__$3 = cljs.core.next(seq70941__$2);
var G__70945 = cljs.core.first(seq70941__$3);
var seq70941__$4 = cljs.core.next(seq70941__$3);
var G__70946 = cljs.core.first(seq70941__$4);
var seq70941__$5 = cljs.core.next(seq70941__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70942,G__70943,G__70944,G__70945,G__70946,seq70941__$5);
}));

(com.fulcrologic.fulcro.ui_state_machines.set_aliased_value.cljs$core$IFn$_invoke$arity$3 = (function (env,alias,new_value){
var temp__5751__auto__ = com.fulcrologic.fulcro.ui_state_machines.resolve_alias(env,alias);
if(cljs.core.truth_(temp__5751__auto__)){
var real_path = temp__5751__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),cljs.core.assoc_in,real_path,new_value);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,332,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attempt to set a value on an invalid alias:",alias], null);
}),null)),null,1394353173);

return env;
}
}));

(com.fulcrologic.fulcro.ui_state_machines.set_aliased_value.cljs$lang$maxFixedArity = (5));

/**
 * Extracts aliased data from Fulcro state to construct arguments. If explicit-args is supplied,
 * then that is merged with aliased data, passed to the named plugin.  The return of the plugin is
 * the result of this function
 */
com.fulcrologic.fulcro.ui_state_machines.aliased_data = (function com$fulcrologic$fulcro$ui_state_machines$aliased_data(env){
var alias_keys = (function (){var G__70964 = com.fulcrologic.fulcro.ui_state_machines.lookup_state_machine_field(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324));
if((G__70964 == null)){
return null;
} else {
return cljs.core.keys(G__70964);
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,com.fulcrologic.fulcro.ui_state_machines.alias_value(env,k));
}),cljs.core.PersistentArrayMap.EMPTY,alias_keys);
});
/**
 * Run a state-machine plugin. Extracts aliased data from Fulcro state to construct arguments. If explicit-args is supplied,
 * then that is merged with aliased data, passed to the named plugin.  The return of the plugin is
 * the result of this function. Plugins cannot side-effect, and are meant for providing external computation algorithms
 * that the state machine logic might need. For example, an actor representing a form might need to provide validation
 * logic.
 * 
 * If explicit-args are passed, then they will take *precedence* over the auto-extracted aliased data that is passed to
 * the plugin.
 */
com.fulcrologic.fulcro.ui_state_machines.run = (function com$fulcrologic$fulcro$ui_state_machines$run(var_args){
var G__70971 = arguments.length;
switch (G__70971) {
case 2:
return com.fulcrologic.fulcro.ui_state_machines.run.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.ui_state_machines.run.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.run.cljs$core$IFn$_invoke$arity$2 = (function (env,plugin_name){
return com.fulcrologic.fulcro.ui_state_machines.run.cljs$core$IFn$_invoke$arity$3(env,plugin_name,null);
}));

(com.fulcrologic.fulcro.ui_state_machines.run.cljs$core$IFn$_invoke$arity$3 = (function (env,plugin_name,explicit_args){
var temp__5753__auto__ = com.fulcrologic.fulcro.ui_state_machines.lookup_state_machine_field(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugins","com.fulcrologic.fulcro.ui-state-machines/plugins",-304622321),plugin_name], null));
if(cljs.core.truth_(temp__5753__auto__)){
var plugin = temp__5753__auto__;
var params = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.ui_state_machines.aliased_data(env),explicit_args], 0));
return (plugin.cljs$core$IFn$_invoke$arity$1 ? plugin.cljs$core$IFn$_invoke$arity$1(params) : plugin.call(null,params));
} else {
return null;
}
}));

(com.fulcrologic.fulcro.ui_state_machines.run.cljs$lang$maxFixedArity = 3);

/**
 * Indicate that the state machine is done.
 */
com.fulcrologic.fulcro.ui_state_machines.exit = (function com$fulcrologic$fulcro$ui_state_machines$exit(env){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.ui-state-machines",null,369,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Exiting state machine",com.fulcrologic.fulcro.ui_state_machines.asm_id(env)], null);
}),null)),null,-1414857184);

return com.fulcrologic.fulcro.ui_state_machines.activate(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","exit","com.fulcrologic.fulcro.ui-state-machines/exit",600820288));
});
com.fulcrologic.fulcro.ui_state_machines.apply_event_value = (function com$fulcrologic$fulcro$ui_state_machines$apply_event_value(env,p__70979){
var map__70980 = p__70979;
var map__70980__$1 = (((((!((map__70980 == null))))?(((((map__70980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70980):map__70980);
var event_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70980__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70980__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var alias = new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","alias","com.fulcrologic.fulcro.ui-state-machines/alias",466933196).cljs$core$IFn$_invoke$arity$1(event_data);
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(event_data);
var G__70987 = env;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","value-changed","com.fulcrologic.fulcro.ui-state-machines/value-changed",-292687479),event_id))?alias:false))){
return com.fulcrologic.fulcro.ui_state_machines.set_aliased_value.cljs$core$IFn$_invoke$arity$3(G__70987,alias,value);
} else {
return G__70987;
}
});
/**
 * Create an env for use with other functions. Used internally, but may be used as a helper .
 */
com.fulcrologic.fulcro.ui_state_machines.state_machine_env = (function com$fulcrologic$fulcro$ui_state_machines$state_machine_env(var_args){
var G__70995 = arguments.length;
switch (G__70995) {
case 2:
return com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$2 = (function (state_map,asm_id){
return com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$5(state_map,null,asm_id,null,null);
}));

(com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$5 = (function (state_map,ref,asm_id,event_id,event_data){
return com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$6(state_map,ref,asm_id,event_id,event_data,null);
}));

(com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$6 = (function (state_map,ref,asm_id,event_id,event_data,app){
var G__70998 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),state_map,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id], null);
var G__70998__$1 = (cljs.core.truth_(event_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70998,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),event_id):G__70998);
var G__70998__$2 = (cljs.core.truth_(app)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70998__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489),app):G__70998__$1);
var G__70998__$3 = ((cljs.core.seq(event_data))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70998__$2,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),event_data):G__70998__$2);
if(cljs.core.truth_(ref)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70998__$3,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","source-actor-ident","com.fulcrologic.fulcro.ui-state-machines/source-actor-ident",1906012799),ref);
} else {
return G__70998__$3;
}
}));

(com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$lang$maxFixedArity = 6);

/**
 * Associate a given component UI Fulcro class with an ident.  This is used with `begin!` in your actor map if the
 *   actor in question is going to be used with loads or mutations that return a value of that type. The actor's class
 *   can be retrieved for use in a handler using `(uism/actor-class env)`.
 * 
 *   ```
 *   (begin! ... {:person (uism/with-actor-class [:person/by-id 1] Person)})
 *   ```
 *   
 */
com.fulcrologic.fulcro.ui_state_machines.with_actor_class = (function com$fulcrologic$fulcro$ui_state_machines$with_actor_class(ident,class$){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(ident,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","class","com.fulcrologic.fulcro.ui-state-machines/class",438107210),class$);
});
/**
 * Convert one of the possible inputs for an actor into an actor component registry key.
 * 
 *   v can be an ident with actor metadata (see `with-actor-class`), a Fulcro runtime instance whose `get-ident` returns
 *   a valid ident, or a Fulcro component class with a singleton ident.
 * 
 *   Returns the Fulcro component registry key (a keyword) that will be able to find the real Fulcro
 *   component for `v`.
 */
com.fulcrologic.fulcro.ui_state_machines.any__GT_actor_component_registry_key = (function com$fulcrologic$fulcro$ui_state_machines$any__GT_actor_component_registry_key(v){
var temp__5753__auto__ = ((((edn_query_language.core.ident_QMARK_(v)) && (com.fulcrologic.fulcro.components.component_class_QMARK_((function (){var G__71008 = v;
var G__71008__$1 = (((G__71008 == null))?null:cljs.core.meta(G__71008));
if((G__71008__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","class","com.fulcrologic.fulcro.ui-state-machines/class",438107210).cljs$core$IFn$_invoke$arity$1(G__71008__$1);
}
})()))))?(function (){var G__71009 = v;
var G__71009__$1 = (((G__71009 == null))?null:cljs.core.meta(G__71009));
if((G__71009__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","class","com.fulcrologic.fulcro.ui-state-machines/class",438107210).cljs$core$IFn$_invoke$arity$1(G__71009__$1);
}
})():(cljs.core.truth_(((com.fulcrologic.fulcro.components.component_instance_QMARK_(v))?cljs.core.second(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(v)):false))?com.fulcrologic.fulcro.components.react_type(v):(cljs.core.truth_(((com.fulcrologic.fulcro.components.component_class_QMARK_(v))?cljs.core.second(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(v,cljs.core.PersistentArrayMap.EMPTY)):false))?v:null
)));
if(cljs.core.truth_(temp__5753__auto__)){
var cls = temp__5753__auto__;
var str_name = com.fulcrologic.fulcro.components.component_name(cls);
var vec__71015 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(str_name,/\//);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71015,(0),null);
var nm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71015,(1),null);
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,nm);
return k;
} else {
return null;
}
});
/**
 * Returns the Fulcro component class that for the given actor, if set.
 */
com.fulcrologic.fulcro.ui_state_machines.actor_class = (function com$fulcrologic$fulcro$ui_state_machines$actor_class(env,actor_name){
var actor__GT_component_name = com.fulcrologic.fulcro.ui_state_machines.asm_value(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446));
var cls = (function (){var G__71024 = actor_name;
var G__71024__$1 = (((G__71024 == null))?null:(actor__GT_component_name.cljs$core$IFn$_invoke$arity$1 ? actor__GT_component_name.cljs$core$IFn$_invoke$arity$1(G__71024) : actor__GT_component_name.call(null,G__71024)));
if((G__71024__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.components.registry_key__GT_class(G__71024__$1);
}
})();
return cls;
});
/**
 * Safely changes the ident of an actor.
 * 
 *   Makes sure ident is consistently reset and updates the actor class (if one is specified
 *   using `with-actor-class`).
 */
com.fulcrologic.fulcro.ui_state_machines.reset_actor_ident = (function com$fulcrologic$fulcro$ui_state_machines$reset_actor_ident(env,actor,ident){
var new_actor = com.fulcrologic.fulcro.ui_state_machines.any__GT_actor_component_registry_key(ident);
var actor__GT_ident = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.ui_state_machines.asm_value(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928)),actor,ident);
var ident__GT_actor = clojure.set.map_invert(actor__GT_ident);
var actor__GT_ident_path = com.fulcrologic.fulcro.ui_state_machines.asm_path(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928));
var actor__GT_component_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.ui_state_machines.asm_path(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446)),actor);
var ident__GT_actor_path = com.fulcrologic.fulcro.ui_state_machines.asm_path(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ident->actor","com.fulcrologic.fulcro.ui-state-machines/ident->actor",491940340));
var G__71029 = cljs.core.assoc_in(cljs.core.assoc_in(env,actor__GT_ident_path,actor__GT_ident),ident__GT_actor_path,ident__GT_actor);
if(cljs.core.truth_(new_actor)){
return cljs.core.assoc_in(G__71029,actor__GT_component_path,new_actor);
} else {
return G__71029;
}
});
/**
 * Similar to clojure.core/assoc but works on UISM env and aliases.
 */
com.fulcrologic.fulcro.ui_state_machines.assoc_aliased = (function com$fulcrologic$fulcro$ui_state_machines$assoc_aliased(var_args){
var G__71044 = arguments.length;
switch (G__71044) {
case 3:
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___71798 = arguments.length;
var i__4737__auto___71799 = (0);
while(true){
if((i__4737__auto___71799 < len__4736__auto___71798)){
args_arr__4757__auto__.push((arguments[i__4737__auto___71799]));

var G__71800 = (i__4737__auto___71799 + (1));
i__4737__auto___71799 = G__71800;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$variadic = (function (env,alias,new_value,alias_2,value_2,kv_pairs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.set_aliased_value,env,alias,new_value,alias_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value_2,kv_pairs], 0));
}));

/** @this {Function} */
(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$lang$applyTo = (function (seq71037){
var G__71038 = cljs.core.first(seq71037);
var seq71037__$1 = cljs.core.next(seq71037);
var G__71039 = cljs.core.first(seq71037__$1);
var seq71037__$2 = cljs.core.next(seq71037__$1);
var G__71040 = cljs.core.first(seq71037__$2);
var seq71037__$3 = cljs.core.next(seq71037__$2);
var G__71041 = cljs.core.first(seq71037__$3);
var seq71037__$4 = cljs.core.next(seq71037__$3);
var G__71042 = cljs.core.first(seq71037__$4);
var seq71037__$5 = cljs.core.next(seq71037__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71038,G__71039,G__71040,G__71041,G__71042,seq71037__$5);
}));

(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3 = (function (env,alias,new_value){
return com.fulcrologic.fulcro.ui_state_machines.set_aliased_value.cljs$core$IFn$_invoke$arity$3(env,alias,new_value);
}));

(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$lang$maxFixedArity = (5));

/**
 * Similar to clojure.core/update but works on UISM env and aliases.
 */
com.fulcrologic.fulcro.ui_state_machines.update_aliased = (function com$fulcrologic$fulcro$ui_state_machines$update_aliased(var_args){
var G__71067 = arguments.length;
switch (G__71067) {
case 3:
return com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___71805 = arguments.length;
var i__4737__auto___71806 = (0);
while(true){
if((i__4737__auto___71806 < len__4736__auto___71805)){
args_arr__4757__auto__.push((arguments[i__4737__auto___71806]));

var G__71807 = (i__4737__auto___71806 + (1));
i__4737__auto___71806 = G__71807;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((6)),(0),null));
return com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4758__auto__);

}
});

(com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$3 = (function (env,k,f){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,k,(function (){var G__71073 = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__71073) : f.call(null,G__71073));
})());
}));

(com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$4 = (function (env,k,f,x){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,k,(function (){var G__71075 = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,k);
var G__71076 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__71075,G__71076) : f.call(null,G__71075,G__71076));
})());
}));

(com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$5 = (function (env,k,f,x,y){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,k,(function (){var G__71077 = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,k);
var G__71078 = x;
var G__71079 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__71077,G__71078,G__71079) : f.call(null,G__71077,G__71078,G__71079));
})());
}));

(com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$6 = (function (env,k,f,x,y,z){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,k,(function (){var G__71082 = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,k);
var G__71083 = x;
var G__71084 = y;
var G__71085 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__71082,G__71083,G__71084,G__71085) : f.call(null,G__71082,G__71083,G__71084,G__71085));
})());
}));

(com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$variadic = (function (env,k,f,x,y,z,more){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,com.fulcrologic.fulcro.ui_state_machines.alias_value(env,k),x,y,z,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)));
}));

/** @this {Function} */
(com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$lang$applyTo = (function (seq71060){
var G__71061 = cljs.core.first(seq71060);
var seq71060__$1 = cljs.core.next(seq71060);
var G__71062 = cljs.core.first(seq71060__$1);
var seq71060__$2 = cljs.core.next(seq71060__$1);
var G__71063 = cljs.core.first(seq71060__$2);
var seq71060__$3 = cljs.core.next(seq71060__$2);
var G__71064 = cljs.core.first(seq71060__$3);
var seq71060__$4 = cljs.core.next(seq71060__$3);
var G__71065 = cljs.core.first(seq71060__$4);
var seq71060__$5 = cljs.core.next(seq71060__$4);
var G__71066 = cljs.core.first(seq71060__$5);
var seq71060__$6 = cljs.core.next(seq71060__$5);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71061,G__71062,G__71063,G__71064,G__71065,G__71066,seq71060__$6);
}));

(com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$lang$maxFixedArity = (6));

/**
 * Similar to clojure.core/dissoc but works on UISM env and aliases.
 */
com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased = (function com$fulcrologic$fulcro$ui_state_machines$dissoc_aliased(var_args){
var G__71103 = arguments.length;
switch (G__71103) {
case 1:
return com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___71813 = arguments.length;
var i__4737__auto___71814 = (0);
while(true){
if((i__4737__auto___71814 < len__4736__auto___71813)){
args_arr__4757__auto__.push((arguments[i__4737__auto___71814]));

var G__71815 = (i__4737__auto___71814 + (1));
i__4737__auto___71814 = G__71815;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased.cljs$core$IFn$_invoke$arity$1 = (function (env){
return env;
}));

(com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased.cljs$core$IFn$_invoke$arity$2 = (function (env,alias){
if((env == null)){
return null;
} else {
var path = com.fulcrologic.fulcro.ui_state_machines.resolve_alias(env,alias);
var sub_path = cljs.core.butlast(path);
var k = cljs.core.last(path);
var G__71107 = env;
var G__71108 = (function (p1__71092_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__71092_SHARP_,sub_path,cljs.core.dissoc,k);
});
return (com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$2(G__71107,G__71108) : com.fulcrologic.fulcro.ui_state_machines.apply_action.call(null,G__71107,G__71108));
}
}));

(com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased.cljs$core$IFn$_invoke$arity$variadic = (function (env,k,ks){
while(true){
if((env == null)){
return null;
} else {
var ret = com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased.cljs$core$IFn$_invoke$arity$2(env,k);
if(cljs.core.truth_(ks)){
var G__71818 = ret;
var G__71819 = cljs.core.first(ks);
var G__71820 = cljs.core.next(ks);
env = G__71818;
k = G__71819;
ks = G__71820;
continue;
} else {
return ret;
}
}
break;
}
}));

/** @this {Function} */
(com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased.cljs$lang$applyTo = (function (seq71099){
var G__71100 = cljs.core.first(seq71099);
var seq71099__$1 = cljs.core.next(seq71099);
var G__71101 = cljs.core.first(seq71099__$1);
var seq71099__$2 = cljs.core.next(seq71099__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71100,G__71101,seq71099__$2);
}));

(com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased.cljs$lang$maxFixedArity = (2));

/**
 * Integrate an ident into any number of aliases in the state machine.
 *   Aliases must point to a list of idents.
 * 
 *   The named parameters can be specified any number of times. They are:
 * 
 *   - append:  A keyword (alias) to a list in your app state where this new object's ident should be appended. Will not append
 *   the ident if that ident is already in the list.
 *   - prepend: A keyword (alias) to a list in your app state where this new object's ident should be prepended. Will not append
 *   the ident if that ident is already in the list.
 */
com.fulcrologic.fulcro.ui_state_machines.integrate_ident = (function com$fulcrologic$fulcro$ui_state_machines$integrate_ident(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71821 = arguments.length;
var i__4737__auto___71822 = (0);
while(true){
if((i__4737__auto___71822 < len__4736__auto___71821)){
args__4742__auto__.push((arguments[i__4737__auto___71822]));

var G__71823 = (i__4737__auto___71822 + (1));
i__4737__auto___71822 = G__71823;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.ui_state_machines.integrate_ident.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.ui_state_machines.integrate_ident.cljs$core$IFn$_invoke$arity$variadic = (function (env,ident,named_parameters){
var actions = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,p__71126){
var vec__71127 = p__71126;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71127,(0),null);
var alias_to_idents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71127,(1),null);
var alias_value = com.fulcrologic.fulcro.ui_state_machines.alias_value(env__$1,alias_to_idents);
var already_has_ident_at_alias_QMARK_ = cljs.core.some((function (p1__71114_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__71114_SHARP_,ident);
}),alias_value);
var G__71131 = command;
var G__71131__$1 = (((G__71131 instanceof cljs.core.Keyword))?G__71131.fqn:null);
switch (G__71131__$1) {
case "prepend":
if(cljs.core.truth_(already_has_ident_at_alias_QMARK_)){
return env__$1;
} else {
return com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$3(env__$1,alias_to_idents,(function (p1__71116_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident], null),p1__71116_SHARP_);
}));
}

break;
case "append":
if(cljs.core.truth_(already_has_ident_at_alias_QMARK_)){
return env__$1;
} else {
return com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$4(env__$1,alias_to_idents,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),ident);
}

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown operation for integrate-ident: ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),command,new cljs.core.Keyword(null,"arg","arg",-1747261837),alias_to_idents], null));

}
}),env,actions);
}));

(com.fulcrologic.fulcro.ui_state_machines.integrate_ident.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.ui_state_machines.integrate_ident.cljs$lang$applyTo = (function (seq71118){
var G__71119 = cljs.core.first(seq71118);
var seq71118__$1 = cljs.core.next(seq71118);
var G__71120 = cljs.core.first(seq71118__$1);
var seq71118__$2 = cljs.core.next(seq71118__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71119,G__71120,seq71118__$2);
}));

/**
 * Removes an ident, if it exists, from an alias that points to a list of idents.
 */
com.fulcrologic.fulcro.ui_state_machines.remove_ident = (function com$fulcrologic$fulcro$ui_state_machines$remove_ident(env,ident,alias_to_idents){
var new_list = (function (old_list){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__71137_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident,p1__71137_SHARP_);
}),old_list));
});
return com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$3(env,alias_to_idents,new_list);
});
com.fulcrologic.fulcro.ui_state_machines.queue_mutations_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$queue_mutations_BANG_(app,env){
var queued_mutations = new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-mutations","com.fulcrologic.fulcro.ui-state-machines/queued-mutations",-652604760).cljs$core$IFn$_invoke$arity$1(env);
var seq__71139_71829 = cljs.core.seq(queued_mutations);
var chunk__71141_71830 = null;
var count__71142_71831 = (0);
var i__71143_71832 = (0);
while(true){
if((i__71143_71832 < count__71142_71831)){
var mutation_params_71833 = chunk__71141_71830.cljs$core$IIndexed$_nth$arity$2(null,i__71143_71832);
var abort_id_71835 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(mutation_params_71833);
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.fulcrologic.fulcro.ui_state_machines.mutation_delegate.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.mutation_delegate.cljs$core$IFn$_invoke$arity$1(mutation_params_71833) : com.fulcrologic.fulcro.ui_state_machines.mutation_delegate.call(null,mutation_params_71833))], null),(function (){var G__71153 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(abort_id_71835)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71153,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_71835);
} else {
return G__71153;
}
})());


var G__71837 = seq__71139_71829;
var G__71838 = chunk__71141_71830;
var G__71839 = count__71142_71831;
var G__71840 = (i__71143_71832 + (1));
seq__71139_71829 = G__71837;
chunk__71141_71830 = G__71838;
count__71142_71831 = G__71839;
i__71143_71832 = G__71840;
continue;
} else {
var temp__5753__auto___71841 = cljs.core.seq(seq__71139_71829);
if(temp__5753__auto___71841){
var seq__71139_71842__$1 = temp__5753__auto___71841;
if(cljs.core.chunked_seq_QMARK_(seq__71139_71842__$1)){
var c__4556__auto___71843 = cljs.core.chunk_first(seq__71139_71842__$1);
var G__71844 = cljs.core.chunk_rest(seq__71139_71842__$1);
var G__71845 = c__4556__auto___71843;
var G__71846 = cljs.core.count(c__4556__auto___71843);
var G__71847 = (0);
seq__71139_71829 = G__71844;
chunk__71141_71830 = G__71845;
count__71142_71831 = G__71846;
i__71143_71832 = G__71847;
continue;
} else {
var mutation_params_71848 = cljs.core.first(seq__71139_71842__$1);
var abort_id_71849 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(mutation_params_71848);
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.fulcrologic.fulcro.ui_state_machines.mutation_delegate.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.mutation_delegate.cljs$core$IFn$_invoke$arity$1(mutation_params_71848) : com.fulcrologic.fulcro.ui_state_machines.mutation_delegate.call(null,mutation_params_71848))], null),(function (){var G__71159 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(abort_id_71849)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71159,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_71849);
} else {
return G__71159;
}
})());


var G__71851 = cljs.core.next(seq__71139_71842__$1);
var G__71852 = null;
var G__71853 = (0);
var G__71854 = (0);
seq__71139_71829 = G__71851;
chunk__71141_71830 = G__71852;
count__71142_71831 = G__71853;
i__71143_71832 = G__71854;
continue;
}
} else {
}
}
break;
}

return null;
});
/**
 * Internal implementation. Queue a load of an actor.
 */
com.fulcrologic.fulcro.ui_state_machines.queue_actor_load_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$queue_actor_load_BANG_(app,env,actor_name,component_class,load_options){
var actor_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,actor_name);
var cls = (function (){var or__4126__auto__ = component_class;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.fulcro.ui_state_machines.actor_class(env,actor_name);
}
})();
if((cls == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,562,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot run load. Counld not derive Fulcro class (and none was configured) for ",actor_name,"See https://book.fulcrologic.com/#err-uism-load-cant-find-fulcro-class"], null);
}),null)),null,-1245019693);
} else {
com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(app,actor_ident,cls,load_options);
}

return null;
});
/**
 * Internal implementation. Queue a load.
 */
com.fulcrologic.fulcro.ui_state_machines.queue_normal_load_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$queue_normal_load_BANG_(app,query_key,component_class,load_options){
if((query_key == null)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,571,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot run load. query-key cannot be nil. See https://book.fulcrologic.com/#err-uism-load-nil-query-key"], null);
}),null)),null,890145794);
} else {
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(app,query_key,component_class,load_options);
}
});
com.fulcrologic.fulcro.ui_state_machines.handle_load_error_STAR_ = (function com$fulcrologic$fulcro$ui_state_machines$handle_load_error_STAR_(app,load_request){
var map__71170 = (function (){var G__71171 = load_request;
if((G__71171 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897).cljs$core$IFn$_invoke$arity$1(G__71171);
}
})();
var map__71170__$1 = (((((!((map__71170 == null))))?(((((map__71170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71170):map__71170);
var asm_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71170__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
var error_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71170__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384));
var error_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71170__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624));
if(cljs.core.truth_((function (){var and__4115__auto__ = asm_id;
if(cljs.core.truth_(and__4115__auto__)){
return error_event;
} else {
return and__4115__auto__;
}
})())){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__71178 = (function (){var G__71179 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),error_event], null);
if(cljs.core.truth_(error_data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71179,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),error_data);
} else {
return G__71179;
}
})();
return (com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.cljs$core$IFn$_invoke$arity$1(G__71178) : com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.call(null,G__71178));
})()], null));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.ui-state-machines",null,583,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A fallback occurred, but no event was defined by the client. Sending generic ::uism/load-error event. See https://book.fulcrologic.com/#warn-uism-fallback-missing-event"], null);
}),null)),null,600043350);

com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__71181 = (function (){var G__71183 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load-error","com.fulcrologic.fulcro.ui-state-machines/load-error",1046994541)], null);
return G__71183;
})();
return (com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.cljs$core$IFn$_invoke$arity$1(G__71181) : com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.call(null,G__71181));
})()], null));
}

return null;
});
/**
 * 
 */
com.fulcrologic.fulcro.ui_state_machines.handle_load_error = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","handle-load-error","com.fulcrologic.fulcro.ui-state-machines/handle-load-error",145527222,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","handle-load-error","com.fulcrologic.fulcro.ui-state-machines/handle-load-error",145527222,null),(function (fulcro_mutation_env_symbol){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$ui_state_machines$action(p__71186){
var map__71187 = p__71186;
var map__71187__$1 = (((((!((map__71187 == null))))?(((((map__71187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71187):map__71187);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71187__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var _STAR_after_render_STAR__orig_val__71191_71860 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__71192_71861 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__71192_71861);

try{com.fulcrologic.fulcro.ui_state_machines.handle_load_error_STAR_(app,new cljs.core.Keyword(null,"load-params","load-params",38753949).cljs$core$IFn$_invoke$arity$1(params));
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__71191_71860);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__71193 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__71194 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__71194);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__71193);
}})], null);
}));
com.fulcrologic.fulcro.ui_state_machines.queue_loads_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$queue_loads_BANG_(app,env){
var queued_loads = new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-loads","com.fulcrologic.fulcro.ui-state-machines/queued-loads",1234134533).cljs$core$IFn$_invoke$arity$1(env);
var seq__71199_71863 = cljs.core.seq(queued_loads);
var chunk__71200_71864 = null;
var count__71201_71865 = (0);
var i__71202_71866 = (0);
while(true){
if((i__71202_71866 < count__71201_71865)){
var map__71216_71867 = chunk__71200_71864.cljs$core$IIndexed$_nth$arity$2(null,i__71202_71866);
var map__71216_71868__$1 = (((((!((map__71216_71867 == null))))?(((((map__71216_71867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71216_71867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71216_71867):map__71216_71867);
var load_params_71869 = map__71216_71868__$1;
var component_class_71870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71216_71868__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369));
var actor_name_71871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71216_71868__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310));
var query_key_71872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71216_71868__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","query-key","com.fulcrologic.fulcro.ui-state-machines/query-key",-1158698423));
var load_options_71873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71216_71868__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load-options","com.fulcrologic.fulcro.ui-state-machines/load-options",-2118314091));
if(cljs.core.truth_(actor_name_71871)){
com.fulcrologic.fulcro.ui_state_machines.queue_actor_load_BANG_(app,env,actor_name_71871,component_class_71870,load_options_71873);
} else {
com.fulcrologic.fulcro.ui_state_machines.queue_normal_load_BANG_(app,query_key_71872,component_class_71870,load_options_71873);
}


var G__71876 = seq__71199_71863;
var G__71877 = chunk__71200_71864;
var G__71878 = count__71201_71865;
var G__71879 = (i__71202_71866 + (1));
seq__71199_71863 = G__71876;
chunk__71200_71864 = G__71877;
count__71201_71865 = G__71878;
i__71202_71866 = G__71879;
continue;
} else {
var temp__5753__auto___71880 = cljs.core.seq(seq__71199_71863);
if(temp__5753__auto___71880){
var seq__71199_71881__$1 = temp__5753__auto___71880;
if(cljs.core.chunked_seq_QMARK_(seq__71199_71881__$1)){
var c__4556__auto___71882 = cljs.core.chunk_first(seq__71199_71881__$1);
var G__71883 = cljs.core.chunk_rest(seq__71199_71881__$1);
var G__71884 = c__4556__auto___71882;
var G__71885 = cljs.core.count(c__4556__auto___71882);
var G__71886 = (0);
seq__71199_71863 = G__71883;
chunk__71200_71864 = G__71884;
count__71201_71865 = G__71885;
i__71202_71866 = G__71886;
continue;
} else {
var map__71220_71888 = cljs.core.first(seq__71199_71881__$1);
var map__71220_71889__$1 = (((((!((map__71220_71888 == null))))?(((((map__71220_71888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71220_71888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71220_71888):map__71220_71888);
var load_params_71890 = map__71220_71889__$1;
var component_class_71891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71220_71889__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369));
var actor_name_71892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71220_71889__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310));
var query_key_71893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71220_71889__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","query-key","com.fulcrologic.fulcro.ui-state-machines/query-key",-1158698423));
var load_options_71894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71220_71889__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load-options","com.fulcrologic.fulcro.ui-state-machines/load-options",-2118314091));
if(cljs.core.truth_(actor_name_71892)){
com.fulcrologic.fulcro.ui_state_machines.queue_actor_load_BANG_(app,env,actor_name_71892,component_class_71891,load_options_71894);
} else {
com.fulcrologic.fulcro.ui_state_machines.queue_normal_load_BANG_(app,query_key_71893,component_class_71891,load_options_71894);
}


var G__71897 = cljs.core.next(seq__71199_71881__$1);
var G__71898 = null;
var G__71899 = (0);
var G__71900 = (0);
seq__71199_71863 = G__71897;
chunk__71200_71864 = G__71898;
count__71201_71865 = G__71899;
i__71202_71866 = G__71900;
continue;
}
} else {
}
}
break;
}

return null;
});
/**
 * Put the evolved state-map from an env into a (Fulcro) state-atom
 */
com.fulcrologic.fulcro.ui_state_machines.update_fulcro_state_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$update_fulcro_state_BANG_(p__71226,state_atom){
var map__71227 = p__71226;
var map__71227__$1 = (((((!((map__71227 == null))))?(((((map__71227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71227):map__71227);
var env = map__71227__$1;
var asm_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71227__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
var next_state = (cljs.core.truth_(env)?com.fulcrologic.fulcro.ui_state_machines.asm_value(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193)):null);
var temp__5753__auto___71901 = (function (){var G__71234 = new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138).cljs$core$IFn$_invoke$arity$1(env);
if((G__71234 == null)){
return null;
} else {
var G__71235 = G__71234;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","exit","com.fulcrologic.fulcro.ui-state-machines/exit",600820288),next_state)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__71235,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),cljs.core.dissoc,asm_id);
} else {
return G__71235;
}
}
})();
if(cljs.core.truth_(temp__5753__auto___71901)){
var new_fulcro_state_71903 = temp__5753__auto___71901;
cljs.core.reset_BANG_(state_atom,new_fulcro_state_71903);
} else {
}

return null;
});
/**
 * Add a timeout named `timer-id` to the `env` that will send `event-id` with `event-data` event
 * after `timeout` (in milliseconds) unless an event (i.e. some-event-id) occurs where a call
 * to `(cancel-on-events some-event-id)` returns true.
 * 
 * Setting a timeout on an existing timer-id will cancel the current one and start the new one.
 * 
 * `cancel-on-events` is a predicate that will be passed an event ID on events. If it returns true
 *  on an event before the timeout fires, then the timeout will be auto-cancelled. If not specified, then
 *  it defaults to `(constantly false)`.
 */
com.fulcrologic.fulcro.ui_state_machines.set_timeout = (function com$fulcrologic$fulcro$ui_state_machines$set_timeout(var_args){
var G__71241 = arguments.length;
switch (G__71241) {
case 5:
return com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$5 = (function (env,timer_id,event_id,event_data,timeout){
return com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$6(env,timer_id,event_id,event_data,timeout,cljs.core.constantly(false));
}));

(com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$6 = (function (env,timer_id,event_id,event_data,timeout,cancel_on_events){
var descriptor = (function (){var G__71244 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout","com.fulcrologic.fulcro.ui-state-machines/timeout",2023435248),timeout,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),timer_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timer","timer",-1266967739),true], null)),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),event_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-on","com.fulcrologic.fulcro.ui-state-machines/cancel-on",1719737833),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cancel-on","cancel-on",-479584301),cancel_on_events], null))], null);
if(cljs.core.truth_(event_data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71244,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),event_data);
} else {
return G__71244;
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-timeouts","com.fulcrologic.fulcro.ui-state-machines/queued-timeouts",1249273499),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),descriptor);
}));

(com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$lang$maxFixedArity = 6);

/**
 * Clear a scheduled timeout (if it has yet to fire).  Harmless to call if the timeout is gone. This call takes
 *   effect immediately (in terms of making sure the timeout does not fire).
 */
com.fulcrologic.fulcro.ui_state_machines.clear_timeout_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$clear_timeout_BANG_(env,timer_id){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.ui-state-machines",null,642,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clearing timeout ",com.fulcrologic.fulcro.ui_state_machines.asm_id(env),":",timer_id], null);
}),null)),null,-1778009075);

var map__71249 = com.fulcrologic.fulcro.ui_state_machines.asm_value(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193),timer_id], null));
var map__71249__$1 = (((((!((map__71249 == null))))?(((((map__71249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71249):map__71249);
var js_timer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71249__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544));
var real_js_timer = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(js_timer));
if(cljs.core.truth_(real_js_timer)){
com.fulcrologic.fulcro.ui_state_machines.clear_js_timeout_BANG_(real_js_timer);
} else {
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,com.fulcrologic.fulcro.ui_state_machines.asm_path(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193)], null)),cljs.core.dissoc,timer_id);
});
/**
 * Returns an event handler that can process events according to a state machine
 *   ::uism/events definition of the current event/state in `env`.
 *   If a definition cannot be found then it returns nil.
 */
com.fulcrologic.fulcro.ui_state_machines.generic_event_handler = (function com$fulcrologic$fulcro$ui_state_machines$generic_event_handler(original_env){
var smdef = com.fulcrologic.fulcro.ui_state_machines.lookup_state_machine(original_env);
var current_state_id = com.fulcrologic.fulcro.ui_state_machines.asm_value(original_env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193));
var current_event = new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868).cljs$core$IFn$_invoke$arity$1(original_env);
var map__71259 = (function (){var G__71261 = smdef;
var G__71261__$1 = (((G__71261 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308).cljs$core$IFn$_invoke$arity$1(G__71261));
var G__71261__$2 = (((G__71261__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__71261__$1,current_state_id));
var G__71261__$3 = (((G__71261__$2 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363).cljs$core$IFn$_invoke$arity$1(G__71261__$2));
if((G__71261__$3 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__71261__$3,current_event);
}
})();
var map__71259__$1 = (((((!((map__71259 == null))))?(((((map__71259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71259):map__71259);
var event_def = map__71259__$1;
var event_predicate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71259__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-predicate","com.fulcrologic.fulcro.ui-state-machines/event-predicate",620527987));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71259__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182));
var target_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71259__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947));
if(cljs.core.truth_(event_def)){
return (function (env){
if(cljs.core.truth_((function (){var or__4126__auto__ = (event_predicate == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = event_predicate;
if(cljs.core.truth_(and__4115__auto__)){
return (event_predicate.cljs$core$IFn$_invoke$arity$1 ? event_predicate.cljs$core$IFn$_invoke$arity$1(env) : event_predicate.call(null,env));
} else {
return and__4115__auto__;
}
}
})())){
var env__$1 = (cljs.core.truth_(handler)?(function (){var or__4126__auto__ = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(env) : handler.call(null,env));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return env;
}
})():env);
var post_handler_state = com.fulcrologic.fulcro.ui_state_machines.asm_value(env__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193));
var state_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(post_handler_state,current_state_id);
var G__71268 = env__$1;
if(cljs.core.truth_((((!(state_changed_QMARK_)))?target_state:false))){
return com.fulcrologic.fulcro.ui_state_machines.activate(G__71268,target_state);
} else {
return G__71268;
}
} else {
return original_env;
}
});
} else {
return null;
}
});
/**
 * Find the handler for the active state in the current env.
 */
com.fulcrologic.fulcro.ui_state_machines.active_state_handler = (function com$fulcrologic$fulcro$ui_state_machines$active_state_handler(env){
var smdef = com.fulcrologic.fulcro.ui_state_machines.lookup_state_machine(env);
var current_state = com.fulcrologic.fulcro.ui_state_machines.asm_value(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193));
var handler = (function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(smdef,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),current_state,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182)], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.fulcro.ui_state_machines.generic_event_handler(env);
}
})();
if(cljs.core.truth_(handler)){
return handler;
} else {
var map__71270 = env;
var map__71270__$1 = (((((!((map__71270 == null))))?(((((map__71270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71270):map__71270);
var event_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71270__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.ui-state-machines",null,684,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UNEXPECTED EVENT: Did not find a way to handle event",event_id,"in the current active state:",current_state,"See https://book.fulcrologic.com/#warn-uism-unexpected-event"], null);
}),null)),null,1629459260);

return cljs.core.identity;
}
});
/**
 * Returns a vector of things to refresh in Fulcro based on the final state of an active SM env.
 */
com.fulcrologic.fulcro.ui_state_machines.ui_refresh_list = (function com$fulcrologic$fulcro$ui_state_machines$ui_refresh_list(env){
var actor_idents = (function (){var or__4126__auto__ = (function (){var G__71278 = env;
var G__71278__$1 = (((G__71278 == null))?null:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__71278,com.fulcrologic.fulcro.ui_state_machines.asm_path(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928))));
var G__71278__$2 = (((G__71278__$1 == null))?null:cljs.core.vals(G__71278__$1));
if((G__71278__$2 == null)){
return null;
} else {
return cljs.core.vec(G__71278__$2);
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return actor_idents;
});
com.fulcrologic.fulcro.ui_state_machines.get_js_timer = (function com$fulcrologic$fulcro$ui_state_machines$get_js_timer(env,timer_id){
var G__71285 = com.fulcrologic.fulcro.ui_state_machines.asm_value(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193),timer_id], null));
var G__71285__$1 = (((G__71285 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544).cljs$core$IFn$_invoke$arity$1(G__71285));
var G__71285__$2 = (((G__71285__$1 == null))?null:cljs.core.meta(G__71285__$1));
if((G__71285__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(G__71285__$2);
}
});
/**
 * INTERNAL: actually schedule the timers that were submitted during the event handler.
 */
com.fulcrologic.fulcro.ui_state_machines.schedule_timeouts_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$schedule_timeouts_BANG_(app,env){
var map__71290 = env;
var map__71290__$1 = (((((!((map__71290 == null))))?(((((map__71290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71290):map__71290);
var queued_timeouts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71290__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-timeouts","com.fulcrologic.fulcro.ui-state-machines/queued-timeouts",1249273499));
var asm_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71290__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,p__71295){
var map__71296 = p__71295;
var map__71296__$1 = (((((!((map__71296 == null))))?(((((map__71296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71296):map__71296);
var descriptor = map__71296__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71296__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout","com.fulcrologic.fulcro.ui-state-machines/timeout",2023435248));
var event_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71296__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71296__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var timer_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71296__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.ui-state-machines",null,705,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Setting timeout",timer_id,"on",asm_id,"to send",event_id,"in",timeout,"ms"], null);
}),null)),null,885028368);

var current_timer = com.fulcrologic.fulcro.ui_state_machines.get_js_timer(env__$1,timer_id);
var js_timer = com.fulcrologic.fulcro.ui_state_machines.set_js_timeout_BANG_((function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.ui-state-machines",null,708,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMEOUT on",asm_id,"due to timer",timer_id,"after",timeout,"ms"], null);
}),null)),null,-1394852761);

return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app,asm_id,event_id,(function (){var or__4126__auto__ = event_data;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
}),timeout);
var descriptor__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$6(descriptor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544)], null),cljs.core.vary_meta,cljs.core.assoc,new cljs.core.Keyword(null,"timer","timer",-1266967739),js_timer);
if(cljs.core.truth_(current_timer)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.ui-state-machines",null,712,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clearing old timer (new timer supercedes)"], null);
}),null)),null,415357318);

com.fulcrologic.fulcro.ui_state_machines.clear_js_timeout_BANG_(current_timer);
} else {
}

return cljs.core.assoc_in(env__$1,com.fulcrologic.fulcro.ui_state_machines.asm_path(env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193),timer_id], null)),descriptor__$1);
}),env,queued_timeouts);
});
/**
 * Processes the auto-cancel of events. This is a normal part of the internals, but can be used in handlers
 *   to simulate a *different* event than acutally occured for the purpose of clearing sets of timers that
 *   auto-cancel on other events than what occurred.
 */
com.fulcrologic.fulcro.ui_state_machines.clear_timeouts_on_event_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$clear_timeouts_on_event_BANG_(env,event_id){
var active_timers = com.fulcrologic.fulcro.ui_state_machines.asm_value(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,timer_id){
var cancel_predicate = (function (){var G__71307 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(active_timers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [timer_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-on","com.fulcrologic.fulcro.ui-state-machines/cancel-on",1719737833)], null));
var G__71307__$1 = (((G__71307 == null))?null:cljs.core.meta(G__71307));
if((G__71307__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"cancel-on","cancel-on",-479584301).cljs$core$IFn$_invoke$arity$1(G__71307__$1);
}
})();
if(cljs.core.truth_(cancel_predicate)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,729,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["INTERNAL ERROR: Cancel predicate was nil for timer ",timer_id,"See https://book.fulcrologic.com/#err-uism-cancel-pred-nil"], null);
}),null)),null,1893304831);
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cancel_predicate;
if(cljs.core.truth_(and__4115__auto__)){
return (cancel_predicate.cljs$core$IFn$_invoke$arity$1 ? cancel_predicate.cljs$core$IFn$_invoke$arity$1(event_id) : cancel_predicate.call(null,event_id));
} else {
return and__4115__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.ui-state-machines",null,732,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cancelling timer ",timer_id,"on",com.fulcrologic.fulcro.ui_state_machines.asm_id(env__$1),"due to event",event_id], null);
}),null)),null,1995754327);

return com.fulcrologic.fulcro.ui_state_machines.clear_timeout_BANG_(env__$1,timer_id);
} else {
return env__$1;
}
}),env,cljs.core.keys(active_timers));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro","app","fulcro/app",1396752010),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro","state","fulcro/state",1036558546),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","atom","com.fulcrologic.fulcro.ui-state-machines/atom",1971230309),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","atom","com.fulcrologic.fulcro.ui-state-machines/atom",1971230309));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-env","com.fulcrologic.fulcro.ui-state-machines/mutation-env",-350046782),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro","state","fulcro/state",1036558546),new cljs.core.Keyword("fulcro","app","fulcro/app",1396752010)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro","state","fulcro/state",1036558546),new cljs.core.Keyword("fulcro","app","fulcro/app",1396752010)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__71319){
return cljs.core.map_QMARK_(G__71319);
}),(function (G__71319){
return cljs.core.contains_QMARK_(G__71319,new cljs.core.Keyword(null,"state","state",-1988618099));
}),(function (G__71319){
return cljs.core.contains_QMARK_(G__71319,new cljs.core.Keyword(null,"app","app",-560961707));
})], null),(function (G__71319){
return ((cljs.core.map_QMARK_(G__71319)) && (cljs.core.contains_QMARK_(G__71319,new cljs.core.Keyword(null,"state","state",-1988618099))) && (cljs.core.contains_QMARK_(G__71319,new cljs.core.Keyword(null,"app","app",-560961707))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro","state","fulcro/state",1036558546),new cljs.core.Keyword("fulcro","app","fulcro/app",1396752010)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"app","app",-560961707)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"state","state",-1988618099))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"app","app",-560961707)))], null),null])));
com.fulcrologic.fulcro.ui_state_machines.trigger_queued_events_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$trigger_queued_events_BANG_(mutation_env,queued_triggers,refresh_list){
var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (refresh_list__$1,event){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(refresh_list__$1,(com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event_BANG_.cljs$core$IFn$_invoke$arity$2(mutation_env,event) : com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event_BANG_.call(null,mutation_env,event)));
}),refresh_list,queued_triggers);
return result;
});
/**
 * IMPLEMENTATION DETAIL. Low-level implementation of triggering a state machine event. Does no direct interaction with
 *   Fulcro UI refresh.  Use `trigger!` instead.
 * 
 *   - `env` - A fulcro mutation env, containing at least the state atom and optionally the ref of the
 *  component that was the source of the event.
 *   - params - The parameters for the event
 * 
 *   Returns a vector of actor idents that should be refreshed.
 */
com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$trigger_state_machine_event_BANG_(p__71345,p__71346){
var map__71347 = p__71345;
var map__71347__$1 = (((((!((map__71347 == null))))?(((((map__71347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71347):map__71347);
var mutation_env = map__71347__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71347__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71347__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71347__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__71348 = p__71346;
var map__71348__$1 = (((((!((map__71348 == null))))?(((((map__71348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71348):map__71348);
var params = map__71348__$1;
var event_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71348__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71348__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var asm_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71348__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.ui-state-machines",null,763,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Trigger",asm_id,event_id], null);
}),null)),null,-1394579587);

if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id], null)))){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,765,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attempted to trigger event ",event_id,"on state machine",asm_id,", but that state machine has not been started (call begin! first). See https://book.fulcrologic.com/#err-uism-trigger-not-started-machine"], null);
}),null)),null,-1962779022);
}

var sm_env = com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$6(cljs.core.deref(state),ref,asm_id,event_id,event_data,app);
var handler = com.fulcrologic.fulcro.ui_state_machines.active_state_handler(sm_env);
var valued_env = com.fulcrologic.fulcro.ui_state_machines.apply_event_value(sm_env,params);
var handled_env = (function (){try{var _STAR_after_render_STAR__orig_val__71363 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__71364 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__71364);

try{var G__71365 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(valued_env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279),app);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__71365) : handler.call(null,G__71365));
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__71363);
}}catch (e71357){var e = e71357;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,773,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Handler for event",event_id,"threw an exception for ASM ID",asm_id,"See https://book.fulcrologic.com/#err-uism-evt-handler-exc"], null);
}),null)),null,1343933085);

return null;
}})();
var final_env = (function (){var e = (function (){var or__4126__auto__ = handled_env;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return valued_env;
}
})();
var e__$1 = com.fulcrologic.fulcro.ui_state_machines.clear_timeouts_on_event_BANG_(e,event_id);
return com.fulcrologic.fulcro.ui_state_machines.schedule_timeouts_BANG_(app,e__$1);
})();
var refresh_list = com.fulcrologic.fulcro.ui_state_machines.ui_refresh_list(final_env);
com.fulcrologic.fulcro.ui_state_machines.queue_mutations_BANG_(app,final_env);

com.fulcrologic.fulcro.ui_state_machines.queue_loads_BANG_(app,final_env);

com.fulcrologic.fulcro.ui_state_machines.update_fulcro_state_BANG_(final_env,state);

return com.fulcrologic.fulcro.ui_state_machines.trigger_queued_events_BANG_(mutation_env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-triggers","com.fulcrologic.fulcro.ui-state-machines/queued-triggers",1577632329).cljs$core$IFn$_invoke$arity$1(final_env),refresh_list);
});
/**
 * Trigger an event on a state machine. Events sent this way will be processed immediately (synchronously) after
 * the handler for the calling handler completes. If you prefer that a trigger happens as a separate transaction
 * then use `trigger!`.
 * 
 *   `env` - is the env in a state machine handler
 *   `asm-id` - The ID of the state machine you want to trigger an event on.
 *   `event` - The event ID you want to send.
 *   `event-data` - A map of data to send with the event
 * 
 *   Returns the updated env.  The actual event will not be sent until this handler finishes.
 */
com.fulcrologic.fulcro.ui_state_machines.trigger = (function com$fulcrologic$fulcro$ui_state_machines$trigger(var_args){
var G__71373 = arguments.length;
switch (G__71373) {
case 3:
return com.fulcrologic.fulcro.ui_state_machines.trigger.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.ui_state_machines.trigger.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.trigger.cljs$core$IFn$_invoke$arity$3 = (function (env,asm_id,event){
return com.fulcrologic.fulcro.ui_state_machines.trigger.cljs$core$IFn$_invoke$arity$4(env,asm_id,event,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.ui_state_machines.trigger.cljs$core$IFn$_invoke$arity$4 = (function (env,asm_id,event,event_data){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-triggers","com.fulcrologic.fulcro.ui-state-machines/queued-triggers",1577632329),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),event,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),event_data], null));
}));

(com.fulcrologic.fulcro.ui_state_machines.trigger.cljs$lang$maxFixedArity = 4);

/**
 * Similar to Fulcro's set-string, but it sets the string on an active state machine's data alias.
 *   event-or-string can be a string or a React DOM onChange event.
 * 
 *   The incoming `event-data` to your handler will include `::uism/alias` and `:value` (if you care to do anything
 *   with the value change event).
 * 
 *   NOTE: Generates a ::uism/value-changed event. If you're state machine is implemented with the events
 *   structure that allows an event-predicate, then this set will be ignored if the current state's event-predicate
 *   returns false.
 */
com.fulcrologic.fulcro.ui_state_machines.set_string_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$set_string_BANG_(this$,active_state_machine_id,alias,event_or_string){
var value = ((typeof event_or_string === 'string')?event_or_string:(function (){var or__4126__auto__ = (function (){var G__71384 = event_or_string;
var G__71384__$1 = (((G__71384 == null))?null:G__71384.target);
if((G__71384__$1 == null)){
return null;
} else {
return G__71384__$1.value;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(this$,active_state_machine_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","value-changed","com.fulcrologic.fulcro.ui-state-machines/value-changed",-292687479),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","alias","com.fulcrologic.fulcro.ui-state-machines/alias",466933196),alias,new cljs.core.Keyword(null,"value","value",305978217),value], null));
});
/**
 * Similar to Fulcro's set-value, but it sets the raw value on an active state machine's data alias.
 * 
 *   The incoming `event-data` to your handler will include `::uism/alias` and `:value` (if you care to do anything
 *   with the value change event).
 * 
 *   NOTE: Generates a ::uism/value-changed event. If you're state machine is implemented with the events
 *   structure that allows an event-predicate, then this set will be ignored if the current state's event-predicate
 *   returns false.
 */
com.fulcrologic.fulcro.ui_state_machines.set_value_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$set_value_BANG_(this$,active_state_machine_id,alias,value){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(this$,active_state_machine_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","value-changed","com.fulcrologic.fulcro.ui-state-machines/value-changed",-292687479),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","alias","com.fulcrologic.fulcro.ui-state-machines/alias",466933196),alias,new cljs.core.Keyword(null,"value","value",305978217),value], null));
});
/**
 * Mutation to begin a state machine. Use `begin!` instead.
 */
com.fulcrologic.fulcro.ui_state_machines.begin = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","begin","com.fulcrologic.fulcro.ui-state-machines/begin",-751995886,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","begin","com.fulcrologic.fulcro.ui-state-machines/begin",-751995886,null),(function (fulcro_mutation_env_symbol){
var map__71391 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__71391__$1 = (((((!((map__71391 == null))))?(((((map__71391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71391):map__71391);
var params = map__71391__$1;
var asm_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71391__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71391__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$ui_state_machines$action(p__71394){
var map__71395 = p__71394;
var map__71395__$1 = (((((!((map__71395 == null))))?(((((map__71395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71395):map__71395);
var env = map__71395__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71395__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71395__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__71398_71932 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__71399_71933 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__71399_71933);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
return cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id], null),com.fulcrologic.fulcro.ui_state_machines.new_asm(params));
}));

com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event_BANG_(env,(function (){var G__71403 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","started","com.fulcrologic.fulcro.ui-state-machines/started",-1306384334),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),cljs.core.PersistentArrayMap.EMPTY], null);
if(cljs.core.truth_(event_data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71403,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),event_data);
} else {
return G__71403;
}
})());

com.fulcrologic.fulcro.application.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(app);
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__71398_71932);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__71405 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__71406 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__71406);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__71405);
}})], null);
}));
/**
 * Generate an actor->ident map.
 */
com.fulcrologic.fulcro.ui_state_machines.derive_actor_idents = (function com$fulcrologic$fulcro$ui_state_machines$derive_actor_idents(actors){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__71413){
var vec__71414 = p__71413;
var actor_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71414,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71414,(1),null);
if(cljs.core.truth_(((com.fulcrologic.fulcro.components.component_instance_QMARK_(v))?cljs.core.second(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(v)):false))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [actor_id,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(v)], null);
} else {
if(cljs.core.truth_(((com.fulcrologic.fulcro.components.component_class_QMARK_(v))?cljs.core.second(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(v,cljs.core.PersistentArrayMap.EMPTY)):false))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [actor_id,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(v,cljs.core.PersistentArrayMap.EMPTY)], null);
} else {
if(edn_query_language.core.ident_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [actor_id,v], null);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,866,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The value given for actor",actor_id,"had (or was) an invalid ident:",v,"See https://book.fulcrologic.com/#err-uism-actor-invalid-ident"], null);
}),null)),null,-1258789678);

return null;

}
}
}
})),actors);
});
/**
 * Calculate the map from actor names to the Fulcro component registry names that represent those actors.
 */
com.fulcrologic.fulcro.ui_state_machines.derive_actor_components = (function com$fulcrologic$fulcro$ui_state_machines$derive_actor_components(actors){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__71426){
var vec__71427 = p__71426;
var actor_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71427,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71427,(1),null);
var temp__5753__auto__ = com.fulcrologic.fulcro.ui_state_machines.any__GT_actor_component_registry_key(v);
if(cljs.core.truth_(temp__5753__auto__)){
var k = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [actor_id,k], null);
} else {
return null;
}
})),actors);
});
/**
 * Install and start a state machine.
 * 
 *   this - A UI component or app
 *   machine - A state machine defined with defstatemachine
 *   instance-id - An ID by which you will refer to this active instance.
 *   actors - A map of actor-names -> The ident, class, or react instance that represent them in the UI. Raw idents do not support SM loads.
 *   started-event-data - Data that will be sent with the ::uism/started event as ::uism/event-data
 */
com.fulcrologic.fulcro.ui_state_machines.begin_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$begin_BANG_(var_args){
var G__71435 = arguments.length;
switch (G__71435) {
case 4:
return com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,machine,instance_id,actors){
return com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5(this$,machine,instance_id,actors,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (this$,machine,instance_id,actors,started_event_data){
var actors__GT_idents = com.fulcrologic.fulcro.ui_state_machines.derive_actor_idents(actors);
var actors__GT_component_names = com.fulcrologic.fulcro.ui_state_machines.derive_actor_components(actors);
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__71441 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),instance_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583).cljs$core$IFn$_invoke$arity$1(machine),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),started_event_data,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446),actors__GT_component_names,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928),actors__GT_idents], null);
return (com.fulcrologic.fulcro.ui_state_machines.begin.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.begin.cljs$core$IFn$_invoke$arity$1(G__71441) : com.fulcrologic.fulcro.ui_state_machines.begin.call(null,G__71441));
})()], null));
}));

(com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$lang$maxFixedArity = 5);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-actor","com.fulcrologic.fulcro.ui-state-machines/target-actor",362646538),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-alias","com.fulcrologic.fulcro.ui-state-machines/target-alias",284018720),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","alias","com.fulcrologic.fulcro.ui-state-machines/alias",466933196),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","alias","com.fulcrologic.fulcro.ui-state-machines/alias",466933196));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-data","com.fulcrologic.fulcro.ui-state-machines/ok-data",664644701),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","do-something","com.fulcrologic.fulcro.ui-state-machines/do-something",1808599788,null)),"null"], null), null)))),cljs.spec.alpha.with_gen(cljs.core.symbol_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","do-something","com.fulcrologic.fulcro.ui-state-machines/do-something",1808599788,null),null], null), null));
})));
com.fulcrologic.fulcro.ui_state_machines.spec_mutation = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","spec-mutation","com.fulcrologic.fulcro.ui-state-machines/spec-mutation",-1214366849,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-decl","com.fulcrologic.fulcro.ui-state-machines/mutation-decl",-1004883610),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","mutation-declaration?","com.fulcrologic.fulcro.mutations/mutation-declaration?",1865681563,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","spec-mutation","com.fulcrologic.fulcro.ui-state-machines/spec-mutation",-1214366849,null),"null"], null), null)))),cljs.spec.alpha.with_gen(com.fulcrologic.fulcro.mutations.mutation_declaration_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([com.fulcrologic.fulcro.ui_state_machines.spec_mutation]));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-descriptor","com.fulcrologic.fulcro.ui-state-machines/mutation-descriptor",1232629368),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-data","com.fulcrologic.fulcro.ui-state-machines/ok-data",664644701),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-remote","com.fulcrologic.fulcro.ui-state-machines/mutation-remote",-672492740)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__71452){
return cljs.core.map_QMARK_(G__71452);
}),(function (G__71452){
return cljs.core.contains_QMARK_(G__71452,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703));
}),(function (G__71452){
return cljs.core.contains_QMARK_(G__71452,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120));
})], null),(function (G__71452){
return ((cljs.core.map_QMARK_(G__71452)) && (cljs.core.contains_QMARK_(G__71452,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703))) && (cljs.core.contains_QMARK_(G__71452,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120))));
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-data","com.fulcrologic.fulcro.ui-state-machines/ok-data",664644701),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-remote","com.fulcrologic.fulcro.ui-state-machines/mutation-remote",-672492740)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-data","com.fulcrologic.fulcro.ui-state-machines/ok-data",664644701),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-remote","com.fulcrologic.fulcro.ui-state-machines/mutation-remote",-672492740)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120)))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-data","com.fulcrologic.fulcro.ui-state-machines/ok-data",664644701),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-remote","com.fulcrologic.fulcro.ui-state-machines/mutation-remote",-672492740)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-remote","com.fulcrologic.fulcro.ui-state-machines/mutation-remote",-672492740),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-mutations","com.fulcrologic.fulcro.ui-state-machines/queued-mutations",-652604760),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-descriptor","com.fulcrologic.fulcro.ui-state-machines/mutation-descriptor",1232629368)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-descriptor","com.fulcrologic.fulcro.ui-state-machines/mutation-descriptor",1232629368),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-descriptor","com.fulcrologic.fulcro.ui-state-machines/mutation-descriptor",1232629368),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__71473){
return cljs.core.coll_QMARK_(G__71473);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-descriptor","com.fulcrologic.fulcro.ui-state-machines/mutation-descriptor",1232629368))], null),null));
/**
 * Compute a raw Fulcro target based on the possible options.
 * 
 *   `env` - The SM env
 * 
 *   targeting options:
 * 
 *   `:com.fulcrologic.fulcro.algorithms.data-targeting/target explicit-target` - A raw Fulcro data fetch target.
 *   `::uism/target-actor actor-alias` - Helper that can translate an actor alias to a target
 *   `::uism/target-alias field-alias` - Helper that can translate a data alias to a target (ident + field)
 * 
 *   If more than one option is used, then `df/mutliple-targets` will be used to encode them all.
 *   
 */
com.fulcrologic.fulcro.ui_state_machines.compute_target = (function com$fulcrologic$fulcro$ui_state_machines$compute_target(env,p__71474){
var map__71475 = p__71474;
var map__71475__$1 = (((((!((map__71475 == null))))?(((((map__71475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71475):map__71475);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71475__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140));
var target_actor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71475__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-actor","com.fulcrologic.fulcro.ui-state-machines/target-actor",362646538));
var target_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71475__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-alias","com.fulcrologic.fulcro.ui-state-machines/target-alias",284018720));
var noptions = cljs.core.count(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,target_actor,target_alias], null)));
var actor = (cljs.core.truth_(target_actor)?com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,target_actor):null);
var field = (cljs.core.truth_(target_alias)?com.fulcrologic.fulcro.ui_state_machines.resolve_alias(env,target_alias):null);
if((noptions > (1))){
if(cljs.core.truth_((function (){var and__4115__auto__ = target;
if(cljs.core.truth_(and__4115__auto__)){
return com.fulcrologic.fulcro.algorithms.data_targeting.multiple_targets_QMARK_(target);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(target,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [actor,field], null)));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.data_targeting.multiple_targets,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,actor,field], null)));
}
} else {
var or__4126__auto__ = target;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = actor;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return field;
}
}
}
});
var mtrigger_BANG__71947 = (function com$fulcrologic$fulcro$ui_state_machines$mutation_trigger_STAR_(p__71487,actor_ident,asm_id,event,data){
var map__71488 = p__71487;
var map__71488__$1 = (((((!((map__71488 == null))))?(((((map__71488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71488):map__71488);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71488__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71488__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core.truth_((function (){var and__4115__auto__ = asm_id;
if(cljs.core.truth_(and__4115__auto__)){
return event;
} else {
return and__4115__auto__;
}
})())){
var event_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-result","com.fulcrologic.fulcro.ui-state-machines/mutation-result",-1418456314),result);
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__71494 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),event,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),event_data], null);
return (com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.cljs$core$IFn$_invoke$arity$1(G__71494) : com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.call(null,G__71494));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),actor_ident], null));
} else {
return null;
}
});
com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","mutation-delegate","com.fulcrologic.fulcro.ui-state-machines/mutation-delegate",-2068639436,null),(function (p__71496){
var map__71497 = p__71496;
var map__71497__$1 = (((((!((map__71497 == null))))?(((((map__71497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71497):map__71497);
var env = map__71497__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71497__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71497__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71497__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var map__71501 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ast);
var map__71501__$1 = (((((!((map__71501 == null))))?(((((map__71501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71501):map__71501);
var mp = map__71501__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71501__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140));
var asm_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71501__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
var error_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71501__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384));
var mutation_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71501__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703));
var mutation_remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71501__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-remote","com.fulcrologic.fulcro.ui-state-machines/mutation-remote",-672492740));
var error_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71501__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624));
var ok_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71501__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-data","com.fulcrologic.fulcro.ui-state-machines/ok-data",664644701));
var mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71501__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120));
var returning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71501__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614));
var ok_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71501__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126));
var params = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(mp,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-data","com.fulcrologic.fulcro.ui-state-machines/ok-data",664644701),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-remote","com.fulcrologic.fulcro.ui-state-machines/mutation-remote",-672492740),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140)], 0));
var sm_env = com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$6(cljs.core.deref(state),null,asm_id,ok_event,ok_data,app);
var actor_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(sm_env,mutation_context);
var ast__$1 = edn_query_language.core.query__GT_ast1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,mutation,(new cljs.core.List(null,params,null,(1),null)),(2),null))], null));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([(function (){var or__4126__auto__ = mutation_remote;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})(),(function (env__$1){
var env__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1);
var G__71510 = env__$2;
var G__71510__$1 = (cljs.core.truth_(returning)?com.fulcrologic.fulcro.mutations.returning(G__71510,returning):G__71510);
if(cljs.core.truth_(target)){
return com.fulcrologic.fulcro.mutations.with_target(G__71510__$1,target);
} else {
return G__71510__$1;
}
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),com.fulcrologic.fulcro.mutations.default_result_action_BANG_,new cljs.core.Keyword(null,"ok-action","ok-action",1253795573),(function (env__$1){
var tid__GT_rid = com.fulcrologic.fulcro.algorithms.tempid.result__GT_tempid__GT_realid(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(env__$1)));
var actor_ident__$1 = com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids(actor_ident,tid__GT_rid);
var ok_data__$1 = com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids(ok_data,tid__GT_rid);
var asm_id__$1 = com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids(asm_id,tid__GT_rid);
return mtrigger_BANG__71947(env__$1,actor_ident__$1,asm_id__$1,ok_event,ok_data__$1);
}),new cljs.core.Keyword(null,"error-action","error-action",-1147840498),(function (env__$1){
var tid__GT_rid = com.fulcrologic.fulcro.algorithms.tempid.result__GT_tempid__GT_realid(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(env__$1)));
var actor_ident__$1 = com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids(actor_ident,tid__GT_rid);
var error_data__$1 = com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids(error_data,tid__GT_rid);
var asm_id__$1 = com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids(asm_id,tid__GT_rid);
return mtrigger_BANG__71947(env__$1,actor_ident__$1,asm_id__$1,error_event,error_data__$1);
})]);
}));
/**
 * Run the given REMOTE mutation (a symbol or mutation declaration) in the context of the state machine.
 * 
 *   `env` - The SM handler environment
 *   `actor` - The name (keyword) of a defined actor.
 *   `mutation` - The symbol (or mutation declaration) of the *server* mutation to run. This function will *not* run a local
 *   version of the mutation.
 *   `options-and-params` - The parameters to pass to your mutation. This map can also include these additional
 *   state-machine options:
 * 
 *   `::uism/target-actor actor` - If you use this it will set JUST the `target` (not necessary for loading an actor). Use `::m/returning` to override the type if necessary.
 *   `::uism/target-alias field-alias` - Helper that can translate a data alias to a target (ident + field). You must also use `returning` to specify the normalization type.
 *   `:com.fulcrologic.fulcro.mutations/returning Class` - Class to use for normalizing the result.
 *   `:com.fulcrologic.fulcro.algorithms.data-targeting/target explicit-target` - Target for result
 *   `::uism/ok-event event-id` - The SM event to trigger when the pessimistic mutation succeeds (no default).
 *   `::uism/error-event event-id` - The SM event to trigger when the pessimistic mutation fails (no default).
 *   `::uism/ok-data map-of-data` - Data to include in the event-data on an ok event
 *   `::uism/error-data map-of-data` - Data to include in the event-data on an error event
 *   `::uism/mutation-remote` - The keyword name of the Fulcro remote (defaults to :remote)
 *   `:com.fulcrologic.fulcro.algorithms.tx-processing/abort-id` - An abort ID for being able to cancel the mutation.
 * 
 *   NOTE: The mutation response *will be merged* into the event data that is sent to the SM handler.
 * 
 *   This function does *not* side effect.  It queues the mutation to run after the handler exits.
 */
com.fulcrologic.fulcro.ui_state_machines.trigger_remote_mutation = (function com$fulcrologic$fulcro$ui_state_machines$trigger_remote_mutation(env,actor,mutation,options_and_params){
var target = com.fulcrologic.fulcro.ui_state_machines.compute_target(env,options_and_params);
var abort_id = (function (){var or__4126__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(options_and_params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(options_and_params);
}
})();
var asm_id = com.fulcrologic.fulcro.ui_state_machines.asm_id(env);
var mutation_sym = com.fulcrologic.fulcro.mutations.mutation_symbol(mutation);
var mutation_descriptor = (function (){var G__71521 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options_and_params,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-actor","com.fulcrologic.fulcro.ui-state-machines/target-actor",362646538),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-alias","com.fulcrologic.fulcro.ui-state-machines/target-alias",284018720),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140)], 0)),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120),mutation_sym,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703),actor], 0));
var G__71521__$1 = (cljs.core.truth_(abort_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71521,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184),abort_id):G__71521);
if(cljs.core.seq(target)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71521__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),target);
} else {
return G__71521__$1;
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-mutations","com.fulcrologic.fulcro.ui-state-machines/queued-mutations",-652604760),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),mutation_descriptor);
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load-options","com.fulcrologic.fulcro.ui-state-machines/load-options",-2118314091),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","query-key","com.fulcrologic.fulcro.ui-state-machines/query-key",-1158698423),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ident","ident",-742346)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,edn_query_language.core.ident_QMARK_], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load","com.fulcrologic.fulcro.ui-state-machines/load",178791414),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","query-key","com.fulcrologic.fulcro.ui-state-machines/query-key",-1158698423),new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load-options","com.fulcrologic.fulcro.ui-state-machines/load-options",-2118314091)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__71527){
return cljs.core.map_QMARK_(G__71527);
})], null),(function (G__71527){
return cljs.core.map_QMARK_(G__71527);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","query-key","com.fulcrologic.fulcro.ui-state-machines/query-key",-1158698423),new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load-options","com.fulcrologic.fulcro.ui-state-machines/load-options",-2118314091)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","query-key","com.fulcrologic.fulcro.ui-state-machines/query-key",-1158698423),new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load-options","com.fulcrologic.fulcro.ui-state-machines/load-options",-2118314091)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","query-key","com.fulcrologic.fulcro.ui-state-machines/query-key",-1158698423),new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load-options","com.fulcrologic.fulcro.ui-state-machines/load-options",-2118314091)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-loads","com.fulcrologic.fulcro.ui-state-machines/queued-loads",1234134533),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load","com.fulcrologic.fulcro.ui-state-machines/load",178791414)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load","com.fulcrologic.fulcro.ui-state-machines/load",178791414),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load","com.fulcrologic.fulcro.ui-state-machines/load",178791414),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__71537){
return cljs.core.coll_QMARK_(G__71537);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load","com.fulcrologic.fulcro.ui-state-machines/load",178791414))], null),null));
/**
 * INTERNAL: Convert SM load options into Fulcro load options.
 */
com.fulcrologic.fulcro.ui_state_machines.convert_load_options = (function com$fulcrologic$fulcro$ui_state_machines$convert_load_options(env,options){
var map__71542 = options;
var map__71542__$1 = (((((!((map__71542 == null))))?(((((map__71542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71542):map__71542);
var ok_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71542__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126));
var ok_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71542__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-data","com.fulcrologic.fulcro.ui-state-machines/ok-data",664644701));
var error_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71542__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384));
var error_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71542__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624));
var target_actor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71542__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-actor","com.fulcrologic.fulcro.ui-state-machines/target-actor",362646538));
var target_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71542__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-alias","com.fulcrologic.fulcro.ui-state-machines/target-alias",284018720));
var map__71543 = options;
var map__71543__$1 = (((((!((map__71543 == null))))?(((((map__71543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71543):map__71543);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71543__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var marker__$1 = (((marker == null))?false:marker);
var map__71544 = env;
var map__71544__$1 = (((((!((map__71544 == null))))?(((((map__71544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71544):map__71544);
var asm_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71544__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
var options__$1 = (function (){var G__71553 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-data","com.fulcrologic.fulcro.ui-state-machines/ok-data",664644701),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624),new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-alias","com.fulcrologic.fulcro.ui-state-machines/target-alias",284018720),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-actor","com.fulcrologic.fulcro.ui-state-machines/target-actor",362646538)], 0)),new cljs.core.Keyword(null,"marker","marker",865118313),marker__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),asm_id,new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","handle-load-error","com.fulcrologic.fulcro.ui-state-machines/handle-load-error",145527222,null),new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ok_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id], null)], 0))], 0));
var G__71553__$1 = (cljs.core.truth_((function (){var or__4126__auto__ = target_actor;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return target_alias;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71553,new cljs.core.Keyword(null,"target","target",253001721),com.fulcrologic.fulcro.ui_state_machines.compute_target(env,options)):G__71553);
var G__71553__$2 = (cljs.core.truth_(ok_event)?cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71553__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","trigger-state-machine-event","com.fulcrologic.fulcro.ui-state-machines/trigger-state-machine-event",717825464,null)),new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),ok_event):G__71553__$1);
var G__71553__$3 = (cljs.core.truth_(ok_data)?cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__71553__$2,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),ok_data):G__71553__$2);
var G__71553__$4 = (cljs.core.truth_(error_event)?cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__71553__$3,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),error_event):G__71553__$3);
if(cljs.core.truth_(error_data)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__71553__$4,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624),error_data);
} else {
return G__71553__$4;
}
})();
return options__$1;
});
/**
 * Identical API to fulcro's data fetch `load`, but using a handle `env` instead of a component/app.
 * Adds the load request to then env which will be sent to Fulcro as soon as the handler finishes.
 * 
 * The 3rd argument can be a Fulcro class or a UISM actor name that was registered with `begin!`.
 * 
 *   The `options` can include anything from data fetch's load, but the following additional keys are
 *   more supported for better integration with UISM:
 * 
 *   `::uism/ok-event`:: An event to send when the load is done (instead of calling a mutation)
 *   `::uism/ok-data`:: To send as event-data on the ok-event.
 *   `::uism/error-event`:: The event to send if the load has a network error.
 *   `::uism/error-data`:: To send as event-data on error.
 *   `::uism/target-actor`:: Set target to a given actor's ident. See also `load-actor`.
 *   `::uism/target-alias`:: Set load target to the path defined by the given alias.
 * 
 * NOTE: In general a state machine should declare an actor for items in the machine and use `load-actor` instead of
 * this function so that the state definitions themselves need not be coupled (via code) to the UI.
 */
com.fulcrologic.fulcro.ui_state_machines.load = (function com$fulcrologic$fulcro$ui_state_machines$load(var_args){
var G__71563 = arguments.length;
switch (G__71563) {
case 3:
return com.fulcrologic.fulcro.ui_state_machines.load.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.ui_state_machines.load.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.load.cljs$core$IFn$_invoke$arity$3 = (function (env,key_or_ident,component_class_or_actor_name){
return com.fulcrologic.fulcro.ui_state_machines.load.cljs$core$IFn$_invoke$arity$4(env,key_or_ident,component_class_or_actor_name,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.ui_state_machines.load.cljs$core$IFn$_invoke$arity$4 = (function (env,key_or_ident,component_class_or_actor_name,options){
var options__$1 = com.fulcrologic.fulcro.ui_state_machines.convert_load_options(env,options);
var class$ = (((component_class_or_actor_name instanceof cljs.core.Keyword))?com.fulcrologic.fulcro.ui_state_machines.actor_class(env,component_class_or_actor_name):component_class_or_actor_name);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-loads","com.fulcrologic.fulcro.ui-state-machines/queued-loads",1234134533),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),(function (){var G__71570 = cljs.core.PersistentArrayMap.EMPTY;
var G__71570__$1 = (cljs.core.truth_(class$)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71570,new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369),class$):G__71570);
var G__71570__$2 = (cljs.core.truth_(key_or_ident)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71570__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","query-key","com.fulcrologic.fulcro.ui-state-machines/query-key",-1158698423),key_or_ident):G__71570__$1);
if(cljs.core.truth_(options__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71570__$2,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load-options","com.fulcrologic.fulcro.ui-state-machines/load-options",-2118314091),options__$1);
} else {
return G__71570__$2;
}
})());
}));

(com.fulcrologic.fulcro.ui_state_machines.load.cljs$lang$maxFixedArity = 4);

/**
 * Load (refresh) the given actor. If the actor *is not* on the UI, then you *must* specify
 * `:com.fulcrologic.fulcro.primitives/component-class` in the `options` map.
 * 
 * options can contain the normal `df/load` parameters, and also:
 * 
 *   `::comp/component-class` - The defsc name of the component to use for normalization and query. Only needed if the
 *  actor was not declared using a Fulcro component or component class.
 *   `::uism/ok-event`:: An event to send when the load is done (instead of calling a mutation)
 *   `::uism/ok-data`:: To send as event-data on the ok-event.
 *   `::uism/error-event`:: The event to send if the load has a network error.
 *   `::uism/error-data`:: To send as event-data on error.
 * 
 * Adds a load request to then env which will be sent to Fulcro as soon as the handler finishes.
 */
com.fulcrologic.fulcro.ui_state_machines.load_actor = (function com$fulcrologic$fulcro$ui_state_machines$load_actor(var_args){
var G__71577 = arguments.length;
switch (G__71577) {
case 2:
return com.fulcrologic.fulcro.ui_state_machines.load_actor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.ui_state_machines.load_actor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.load_actor.cljs$core$IFn$_invoke$arity$2 = (function (env,actor_name){
return com.fulcrologic.fulcro.ui_state_machines.load_actor.cljs$core$IFn$_invoke$arity$3(env,actor_name,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.ui_state_machines.load_actor.cljs$core$IFn$_invoke$arity$3 = (function (env,actor_name,p__71580){
var map__71581 = p__71580;
var map__71581__$1 = (((((!((map__71581 == null))))?(((((map__71581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71581):map__71581);
var options = map__71581__$1;
var component_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71581__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369));
var options__$1 = com.fulcrologic.fulcro.ui_state_machines.convert_load_options(env,options);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-loads","com.fulcrologic.fulcro.ui-state-machines/queued-loads",1234134533),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),(function (){var G__71587 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),actor_name,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load-options","com.fulcrologic.fulcro.ui-state-machines/load-options",-2118314091),options__$1], null);
if(cljs.core.truth_(component_class)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71587,new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369),component_class);
} else {
return G__71587;
}
})());
}));

(com.fulcrologic.fulcro.ui_state_machines.load_actor.cljs$lang$maxFixedArity = 3);

/**
 * Run a mutation helper function (e.g. a fn of Fulcro state).
 */
com.fulcrologic.fulcro.ui_state_machines.apply_action = (function com$fulcrologic$fulcro$ui_state_machines$apply_action(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71970 = arguments.length;
var i__4737__auto___71971 = (0);
while(true){
if((i__4737__auto___71971 < len__4736__auto___71970)){
args__4742__auto__.push((arguments[i__4737__auto___71971]));

var G__71973 = (i__4737__auto___71971 + (1));
i__4737__auto___71971 = G__71973;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic = (function (env,mutation_helper,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),mutation_helper,args);
}));

(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$lang$applyTo = (function (seq71592){
var G__71593 = cljs.core.first(seq71592);
var seq71592__$1 = cljs.core.next(seq71592);
var G__71594 = cljs.core.first(seq71592__$1);
var seq71592__$2 = cljs.core.next(seq71592__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71593,G__71594,seq71592__$2);
}));

/**
 * Get the name of the active state for an active state machine using a component. If you use this to represent UI changes then you should
 *   include the ident of your state machine instance in the query of the component that uses it so that `shouldComponentUpdate` will
 *   see props change:
 *   
 *   ```
 *   (defsc Component [this props]
 *  {:query (fn [] [ [::uism/asm-id ::my-machine] ...]) 
 *   ...}
 *  ...
 *  (let [s (get-active-state this ::my-machine)] ...))
 *   ```
 *   
 */
com.fulcrologic.fulcro.ui_state_machines.get_active_state = (function com$fulcrologic$fulcro$ui_state_machines$get_active_state(this$,asm_id){
var state_map = com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.any__GT_app(this$));
var G__71602 = state_map;
var G__71602__$1 = (((G__71602 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394).cljs$core$IFn$_invoke$arity$1(G__71602));
var G__71602__$2 = (((G__71602__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__71602__$1,asm_id));
if((G__71602__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193).cljs$core$IFn$_invoke$arity$1(G__71602__$2);
}
});

//# sourceMappingURL=com.fulcrologic.fulcro.ui_state_machines.js.map
