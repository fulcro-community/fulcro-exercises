goog.provide('nubank.workspaces.card_types.test');
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.card_types !== 'undefined') && (typeof nubank.workspaces.card_types.test !== 'undefined') && (typeof nubank.workspaces.card_types.test.test_context_STAR_ !== 'undefined')){
} else {
nubank.workspaces.card_types.test.test_context_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
nubank.workspaces.card_types.test.collect_test = (function nubank$workspaces$card_types$test$collect_test(m){
var contexts = ((cljs.core.seq(cljs.core.deref(nubank.workspaces.card_types.test.test_context_STAR_)))?cljs.core.deref(nubank.workspaces.card_types.test.test_context_STAR_):cljs.core.vec(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.test.get_current_env(),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523))));
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","summary","nubank.workspaces.card-types.test/summary",1068670767)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523),contexts], null),m], 0))], 0));
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","reporter","nubank.workspaces.card-types.test/reporter",-1224835148),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"pass","pass",1574159993));

nubank.workspaces.card_types.test.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","reporter","nubank.workspaces.card-types.test/reporter",-1224835148),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"fail","fail",1706214930));

nubank.workspaces.card_types.test.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","reporter","nubank.workspaces.card-types.test/reporter",-1224835148),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
console.log("Error running test",new cljs.core.Keyword("nubank.workspaces.card-types.test","test","nubank.workspaces.card-types.test/test",-1720956764).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()));

console.error(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m));

cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"error","error",-978969032));

nubank.workspaces.card_types.test.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","reporter","nubank.workspaces.card-types.test/reporter",-1224835148),new cljs.core.Keyword(null,"begin-behavior","begin-behavior",531955294)], null),(function (p__73423){
var map__73424 = p__73423;
var map__73424__$1 = (((((!((map__73424 == null))))?(((((map__73424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73424):map__73424);
var m = map__73424__$1;
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73424__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nubank.workspaces.card_types.test.test_context_STAR_,cljs.core.conj,string);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","reporter","nubank.workspaces.card-types.test/reporter",-1224835148),new cljs.core.Keyword(null,"end-behavior","end-behavior",727768360)], null),(function (m){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.card_types.test.test_context_STAR_,cljs.core.pop);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","reporter","nubank.workspaces.card-types.test/reporter",-1224835148),new cljs.core.Keyword(null,"begin-manual","begin-manual",-1276253103)], null),(function (p__73430){
var map__73431 = p__73430;
var map__73431__$1 = (((((!((map__73431 == null))))?(((((map__73431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73431):map__73431);
var m = map__73431__$1;
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73431__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nubank.workspaces.card_types.test.test_context_STAR_,cljs.core.conj,string);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","reporter","nubank.workspaces.card-types.test/reporter",-1224835148),new cljs.core.Keyword(null,"end-manual","end-manual",-1889695856)], null),(function (m){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.card_types.test.test_context_STAR_,cljs.core.pop);

return m;
}));
nubank.workspaces.card_types.test.now = (function nubank$workspaces$card_types$test$now(){
return (new Date()).getTime();
});
nubank.workspaces.card_types.test.test_success_QMARK_ = (function nubank$workspaces$card_types$test$test_success_QMARK_(p__73438){
var map__73439 = p__73438;
var map__73439__$1 = (((((!((map__73439 == null))))?(((((map__73439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73439):map__73439);
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73439__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((0),new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(report_counters),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(report_counters)], 0));
});
nubank.workspaces.card_types.test.results_duration = (function nubank$workspaces$card_types$test$results_duration(test_results){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nubank.workspaces.card-types.test","duration","nubank.workspaces.card-types.test/duration",-48491221)),cljs.core._PLUS_,test_results);
});
nubank.workspaces.card_types.test.create_test_env = (function nubank$workspaces$card_types$test$create_test_env(test){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword("nubank.workspaces.card-types.test","reporter","nubank.workspaces.card-types.test/reporter",-1224835148),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.card-types.test","test","nubank.workspaces.card-types.test/test",-1720956764),test], 0));
});
nubank.workspaces.card_types.test.single_test_timeout = (500);
nubank.workspaces.card_types.test.run_test_blocks_STAR_ = (function nubank$workspaces$card_types$test$run_test_blocks_STAR_(p__73448){
var map__73449 = p__73448;
var map__73449__$1 = (((((!((map__73449 == null))))?(((((map__73449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73449):map__73449);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73449__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","test","nubank.workspaces.card-types.test/test",-1720956764));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73449__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","blocks","nubank.workspaces.card-types.test/blocks",-492982440));
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var test_env = nubank.workspaces.card_types.test.create_test_env(test);
cljs.test.set_env_BANG_(test_env);

var tests_74462 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(blocks,(function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.test.get_current_env());
}));
try{cljs.test.run_block(tests_74462);
}catch (e73454){var e_74463 = e73454;
var m_74464 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"actual","actual",107306363),e_74463], null);
cljs.test.report.call(null,m_74464);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.test.get_current_env());
}
return out;
});
nubank.workspaces.card_types.test.run_test_blocks = (function nubank$workspaces$card_types$test$run_test_blocks(input){
var c__57480__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_73492){
var state_val_73493 = (state_73492[(1)]);
if((state_val_73493 === (1))){
var inst_73465 = (state_73492[(7)]);
var inst_73464 = nubank.workspaces.card_types.test.now();
var inst_73465__$1 = cljs.core.async.timeout(nubank.workspaces.card_types.test.single_test_timeout);
var inst_73468 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73469 = nubank.workspaces.card_types.test.run_test_blocks_STAR_(input);
var inst_73470 = [inst_73469,inst_73465__$1];
var inst_73471 = (new cljs.core.PersistentVector(null,2,(5),inst_73468,inst_73470,null));
var state_73492__$1 = (function (){var statearr_73502 = state_73492;
(statearr_73502[(7)] = inst_73465__$1);

(statearr_73502[(8)] = inst_73464);

return statearr_73502;
})();
return cljs.core.async.ioc_alts_BANG_(state_73492__$1,(2),inst_73471);
} else {
if((state_val_73493 === (2))){
var inst_73465 = (state_73492[(7)]);
var inst_73464 = (state_73492[(8)]);
var inst_73474 = (state_73492[(2)]);
var inst_73475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73474,(0),null);
var inst_73476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73474,(1),null);
var inst_73477 = nubank.workspaces.card_types.test.now();
var inst_73478 = (inst_73477 - inst_73464);
var inst_73479 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_73476,inst_73465);
var state_73492__$1 = (function (){var statearr_73503 = state_73492;
(statearr_73503[(9)] = inst_73475);

(statearr_73503[(10)] = inst_73478);

return statearr_73503;
})();
if(inst_73479){
var statearr_73504_74471 = state_73492__$1;
(statearr_73504_74471[(1)] = (3));

} else {
var statearr_73505_74473 = state_73492__$1;
(statearr_73505_74473[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73493 === (3))){
var inst_73475 = (state_73492[(9)]);
var inst_73478 = (state_73492[(10)]);
var inst_73481 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_73475,new cljs.core.Keyword("nubank.workspaces.card-types.test","duration","nubank.workspaces.card-types.test/duration",-48491221),inst_73478);
var state_73492__$1 = state_73492;
var statearr_73507_74477 = state_73492__$1;
(statearr_73507_74477[(2)] = inst_73481);

(statearr_73507_74477[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73493 === (4))){
var inst_73478 = (state_73492[(10)]);
var inst_73483 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_73484 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_73485 = cljs.core.PersistentHashMap.fromArrays(inst_73483,inst_73484);
var inst_73486 = cljs.test.report.call(null,inst_73485);
var inst_73487 = cljs.test.get_current_env();
var inst_73488 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inst_73487,new cljs.core.Keyword("nubank.workspaces.card-types.test","duration","nubank.workspaces.card-types.test/duration",-48491221),inst_73478,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!"], 0));
var state_73492__$1 = (function (){var statearr_73510 = state_73492;
(statearr_73510[(11)] = inst_73486);

return statearr_73510;
})();
var statearr_73511_74478 = state_73492__$1;
(statearr_73511_74478[(2)] = inst_73488);

(statearr_73511_74478[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73493 === (5))){
var inst_73490 = (state_73492[(2)]);
var state_73492__$1 = state_73492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73492__$1,inst_73490);
} else {
return null;
}
}
}
}
}
});
return (function() {
var nubank$workspaces$card_types$test$run_test_blocks_$_state_machine__57129__auto__ = null;
var nubank$workspaces$card_types$test$run_test_blocks_$_state_machine__57129__auto____0 = (function (){
var statearr_73514 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73514[(0)] = nubank$workspaces$card_types$test$run_test_blocks_$_state_machine__57129__auto__);

(statearr_73514[(1)] = (1));

return statearr_73514;
});
var nubank$workspaces$card_types$test$run_test_blocks_$_state_machine__57129__auto____1 = (function (state_73492){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_73492);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e73516){var ex__57132__auto__ = e73516;
var statearr_73517_74487 = state_73492;
(statearr_73517_74487[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_73492[(4)]))){
var statearr_73518_74488 = state_73492;
(statearr_73518_74488[(1)] = cljs.core.first((state_73492[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74489 = state_73492;
state_73492 = G__74489;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
nubank$workspaces$card_types$test$run_test_blocks_$_state_machine__57129__auto__ = function(state_73492){
switch(arguments.length){
case 0:
return nubank$workspaces$card_types$test$run_test_blocks_$_state_machine__57129__auto____0.call(this);
case 1:
return nubank$workspaces$card_types$test$run_test_blocks_$_state_machine__57129__auto____1.call(this,state_73492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nubank$workspaces$card_types$test$run_test_blocks_$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = nubank$workspaces$card_types$test$run_test_blocks_$_state_machine__57129__auto____0;
nubank$workspaces$card_types$test$run_test_blocks_$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = nubank$workspaces$card_types$test$run_test_blocks_$_state_machine__57129__auto____1;
return nubank$workspaces$card_types$test$run_test_blocks_$_state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_73522 = f__57481__auto__();
(statearr_73522[(6)] = c__57480__auto__);

return statearr_73522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));

return c__57480__auto__;
});
nubank.workspaces.card_types.test.test_cards_by_namespace = (function nubank$workspaces$card_types$test$test_cards_by_namespace(){
return cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,new cljs.core.Symbol(null,"_","_",-1201019570,null)),cljs.core.namespace,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809)),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),cljs.core.filterv(new cljs.core.Keyword("nubank.workspaces.card-types.test","test-forms","nubank.workspaces.card-types.test/test-forms",-1801638919),cljs.core.filterv(new cljs.core.Keyword("nubank.workspaces.model","test?","nubank.workspaces.model/test?",993719827),cljs.core.vals(cljs.core.deref(nubank.workspaces.data.card_definitions_STAR_))))));
});
nubank.workspaces.card_types.test.namespace_test_cards = (function nubank$workspaces$card_types$test$namespace_test_cards(ns){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.card_types.test.test_cards_by_namespace(),ns);
});
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.card_types !== 'undefined') && (typeof nubank.workspaces.card_types.test !== 'undefined') && (typeof nubank.workspaces.card_types.test.test_channel !== 'undefined')){
} else {
nubank.workspaces.card_types.test.test_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((512)));
}
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.card_types !== 'undefined') && (typeof nubank.workspaces.card_types.test !== 'undefined') && (typeof nubank.workspaces.card_types.test.test_runner !== 'undefined')){
} else {
nubank.workspaces.card_types.test.test_runner = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__73530 = cljs.core.get_global_hierarchy;
return (fexpr__73530.cljs$core$IFn$_invoke$arity$0 ? fexpr__73530.cljs$core$IFn$_invoke$arity$0() : fexpr__73530.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("nubank.workspaces.card-types.test","test-runner"),new cljs.core.Keyword("nubank.workspaces.card-types.test","type","nubank.workspaces.card-types.test/type",1829804331),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
nubank.workspaces.card_types.test.test_runner.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-one","nubank.workspaces.card-types.test/test-one",-2018640132),(function (p__73531){
var map__73532 = p__73531;
var map__73532__$1 = (((((!((map__73532 == null))))?(((((map__73532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73532):map__73532);
var input = map__73532__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73532__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","app","nubank.workspaces.card-types.test/app",898613046));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73532__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","test","nubank.workspaces.card-types.test/test",-1720956764));
var c__57480__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_73614){
var state_val_73616 = (state_73614[(1)]);
if((state_val_73616 === (1))){
var inst_73536 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73538 = new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null);
var inst_73539 = (new cljs.core.List(null,inst_73538,null,(1),null));
var inst_73540 = (new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168),null,(1),null));
var inst_73541 = (new cljs.core.List(null,true,null,(1),null));
var inst_73542 = (new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.card-types.test","enqueued?","nubank.workspaces.card-types.test/enqueued?",685909630),null,(1),null));
var inst_73543 = (new cljs.core.List(null,false,null,(1),null));
var inst_73544 = (new cljs.core.List(null,new cljs.core.Keyword(null,"test-results","test-results",575566942),null,(1),null));
var inst_73545 = cljs.core.concat.cljs$core$IFn$_invoke$arity$0();
var inst_73546 = cljs.core.seq(inst_73545);
var inst_73547 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_73546);
var inst_73548 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,inst_73547);
var inst_73549 = (new cljs.core.List(null,inst_73548,null,(1),null));
var inst_73550 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_73540,inst_73541,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_73542,inst_73543,inst_73544,inst_73549], 0));
var inst_73551 = cljs.core.seq(inst_73550);
var inst_73552 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_73551);
var inst_73553 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,inst_73552);
var inst_73554 = (new cljs.core.List(null,inst_73553,null,(1),null));
var inst_73555 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_73539,inst_73554);
var inst_73556 = cljs.core.seq(inst_73555);
var inst_73557 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_73556);
var inst_73558 = [inst_73557];
var inst_73559 = (new cljs.core.PersistentVector(null,1,(5),inst_73536,inst_73558,null));
var inst_73560 = [new cljs.core.Keyword(null,"ref","ref",1289896967)];
var inst_73561 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73562 = [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-result-id","nubank.workspaces.card-types.test/test-result-id",-484504649),"singleton"];
var inst_73563 = (new cljs.core.PersistentVector(null,2,(5),inst_73561,inst_73562,null));
var inst_73564 = [inst_73563];
var inst_73565 = cljs.core.PersistentHashMap.fromArrays(inst_73560,inst_73564);
var inst_73566 = com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,inst_73559,inst_73565);
var inst_73567 = cljs.core.async.timeout((1));
var state_73614__$1 = (function (){var statearr_73624 = state_73614;
(statearr_73624[(7)] = inst_73566);

return statearr_73624;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73614__$1,(2),inst_73567);
} else {
if((state_val_73616 === (2))){
var inst_73569 = (state_73614[(2)]);
var inst_73570 = nubank.workspaces.ui.refresh_card_container(test);
var inst_73571 = cljs.core.async.timeout((1));
var state_73614__$1 = (function (){var statearr_73629 = state_73614;
(statearr_73629[(8)] = inst_73569);

(statearr_73629[(9)] = inst_73570);

return statearr_73629;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73614__$1,(3),inst_73571);
} else {
if((state_val_73616 === (3))){
var inst_73573 = (state_73614[(2)]);
var inst_73576 = nubank.workspaces.card_types.test.run_test_blocks(input);
var state_73614__$1 = (function (){var statearr_73634 = state_73614;
(statearr_73634[(10)] = inst_73573);

return statearr_73634;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73614__$1,(4),inst_73576);
} else {
if((state_val_73616 === (4))){
var inst_73578 = (state_73614[(11)]);
var inst_73578__$1 = (state_73614[(2)]);
var inst_73582 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73583 = new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null);
var inst_73584 = (new cljs.core.List(null,inst_73583,null,(1),null));
var inst_73585 = (new cljs.core.List(null,new cljs.core.Keyword(null,"test-results","test-results",575566942),null,(1),null));
var inst_73586 = (new cljs.core.List(null,inst_73578__$1,null,(1),null));
var inst_73587 = (new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.card-types.test","done?","nubank.workspaces.card-types.test/done?",954754155),null,(1),null));
var inst_73588 = (new cljs.core.List(null,true,null,(1),null));
var inst_73589 = (new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168),null,(1),null));
var inst_73590 = (new cljs.core.List(null,false,null,(1),null));
var inst_73591 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_73585,inst_73586,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_73587,inst_73588,inst_73589,inst_73590], 0));
var inst_73592 = cljs.core.seq(inst_73591);
var inst_73593 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_73592);
var inst_73594 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,inst_73593);
var inst_73595 = (new cljs.core.List(null,inst_73594,null,(1),null));
var inst_73596 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_73584,inst_73595);
var inst_73597 = cljs.core.seq(inst_73596);
var inst_73598 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_73597);
var inst_73599 = [inst_73598];
var inst_73600 = (new cljs.core.PersistentVector(null,1,(5),inst_73582,inst_73599,null));
var inst_73601 = [new cljs.core.Keyword(null,"ref","ref",1289896967)];
var inst_73602 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73603 = [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-result-id","nubank.workspaces.card-types.test/test-result-id",-484504649),"singleton"];
var inst_73604 = (new cljs.core.PersistentVector(null,2,(5),inst_73602,inst_73603,null));
var inst_73605 = [inst_73604];
var inst_73606 = cljs.core.PersistentHashMap.fromArrays(inst_73601,inst_73605);
var inst_73607 = com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,inst_73600,inst_73606);
var inst_73608 = cljs.core.async.timeout((1));
var state_73614__$1 = (function (){var statearr_73635 = state_73614;
(statearr_73635[(11)] = inst_73578__$1);

(statearr_73635[(12)] = inst_73607);

return statearr_73635;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73614__$1,(5),inst_73608);
} else {
if((state_val_73616 === (5))){
var inst_73578 = (state_73614[(11)]);
var inst_73610 = (state_73614[(2)]);
var inst_73611 = nubank.workspaces.ui.refresh_card_container(test);
var inst_73612 = com.fulcrologic.fulcro.application.force_root_render_BANG_(app);
var state_73614__$1 = (function (){var statearr_73639 = state_73614;
(statearr_73639[(13)] = inst_73611);

(statearr_73639[(14)] = inst_73610);

(statearr_73639[(15)] = inst_73612);

return statearr_73639;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_73614__$1,inst_73578);
} else {
return null;
}
}
}
}
}
});
return (function() {
var nubank$workspaces$card_types$test$state_machine__57129__auto__ = null;
var nubank$workspaces$card_types$test$state_machine__57129__auto____0 = (function (){
var statearr_73640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73640[(0)] = nubank$workspaces$card_types$test$state_machine__57129__auto__);

(statearr_73640[(1)] = (1));

return statearr_73640;
});
var nubank$workspaces$card_types$test$state_machine__57129__auto____1 = (function (state_73614){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_73614);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e73641){var ex__57132__auto__ = e73641;
var statearr_73642_74525 = state_73614;
(statearr_73642_74525[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_73614[(4)]))){
var statearr_73643_74528 = state_73614;
(statearr_73643_74528[(1)] = cljs.core.first((state_73614[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74530 = state_73614;
state_73614 = G__74530;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
nubank$workspaces$card_types$test$state_machine__57129__auto__ = function(state_73614){
switch(arguments.length){
case 0:
return nubank$workspaces$card_types$test$state_machine__57129__auto____0.call(this);
case 1:
return nubank$workspaces$card_types$test$state_machine__57129__auto____1.call(this,state_73614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nubank$workspaces$card_types$test$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = nubank$workspaces$card_types$test$state_machine__57129__auto____0;
nubank$workspaces$card_types$test$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = nubank$workspaces$card_types$test$state_machine__57129__auto____1;
return nubank$workspaces$card_types$test$state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_73649 = f__57481__auto__();
(statearr_73649[(6)] = c__57480__auto__);

return statearr_73649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));

return c__57480__auto__;
}));
nubank.workspaces.card_types.test.app_test_block = (function nubank$workspaces$card_types$test$app_test_block(app,ns){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-var","nubank.workspaces.card-types.test/test-var",-988438658),ns], null));
});
nubank.workspaces.card_types.test.app_ns_test_block = (function nubank$workspaces$card_types$test$app_ns_test_block(app,ns){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606),ns], null));
});
nubank.workspaces.card_types.test.build_ns_test_group = (function nubank$workspaces$card_types$test$build_ns_test_group(p__73659){
var map__73660 = p__73659;
var map__73660__$1 = (((((!((map__73660 == null))))?(((((map__73660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73660):map__73660);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73660__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var test_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73660__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606));
var ns_tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73660__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","ns-tests","nubank.workspaces.card-types.test/ns-tests",1746559849));
var current = nubank.workspaces.card_types.test.app_ns_test_block(app,test_ns);
var blocks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__73653_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("nubank.workspaces.card-types.test","test-var","nubank.workspaces.card-types.test/test-var",-988438658),new cljs.core.Keyword(null,"test-results","test-results",575566942),new cljs.core.Keyword("nubank.workspaces.card-types.test","disabled?","nubank.workspaces.card-types.test/disabled?",-1909194278)],[new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809).cljs$core$IFn$_invoke$arity$1(p1__73653_SHARP_),null,new cljs.core.Keyword("nubank.workspaces.card-types.test","disabled?","nubank.workspaces.card-types.test/disabled?",-1909194278).cljs$core$IFn$_invoke$arity$1(nubank.workspaces.card_types.test.app_test_block(app,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809).cljs$core$IFn$_invoke$arity$1(p1__73653_SHARP_)))]);
}),ns_tests);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("nubank.workspaces.card-types.test","enqueued?","nubank.workspaces.card-types.test/enqueued?",685909630),true,new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168),false,new cljs.core.Keyword("nubank.workspaces.card-types.test","success?","nubank.workspaces.card-types.test/success?",-5502341),true,new cljs.core.Keyword("nubank.workspaces.card-types.test","disabled?","nubank.workspaces.card-types.test/disabled?",-1909194278),new cljs.core.Keyword("nubank.workspaces.card-types.test","disabled?","nubank.workspaces.card-types.test/disabled?",-1909194278).cljs$core$IFn$_invoke$arity$1(current),new cljs.core.Keyword("nubank.workspaces.card-types.test","collapsed?","nubank.workspaces.card-types.test/collapsed?",1979212573),((cljs.core.contains_QMARK_(current,new cljs.core.Keyword("nubank.workspaces.card-types.test","collapsed?","nubank.workspaces.card-types.test/collapsed?",1979212573)))?new cljs.core.Keyword("nubank.workspaces.card-types.test","collapsed?","nubank.workspaces.card-types.test/collapsed?",1979212573).cljs$core$IFn$_invoke$arity$1(current):true),new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606),test_ns,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-vars","nubank.workspaces.card-types.test/test-vars",1606066379),blocks], null);
});
/**
 * 
 */
nubank.workspaces.card_types.test.start_ns_test_namespaces = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.card-types.test","start-ns-test-namespaces","nubank.workspaces.card-types.test/start-ns-test-namespaces",423625465,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.card-types.test","start-ns-test-namespaces","nubank.workspaces.card-types.test/start-ns-test-namespaces",423625465,null),(function (fulcro_mutation_env_symbol){
var input = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$card_types$test$action(p__73665){
var map__73668 = p__73665;
var map__73668__$1 = (((((!((map__73668 == null))))?(((((map__73668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73668):map__73668);
var env = map__73668__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73668__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73668__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73668__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__73677_74538 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__73678_74539 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__73678_74539);

try{var source_74540 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_(app,nubank.workspaces.card_types.test.NSTestGroup,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(nubank.workspaces.card_types.test.build_ns_test_group(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,source_74540,input], 0))),new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.card-types.test","enqueued?","nubank.workspaces.card-types.test/enqueued?",685909630),false], 0)));
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__73677_74538);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__73679 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__73680 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__73680);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__73679);
}})], null);
}));
nubank.workspaces.card_types.test.update_test_ns_state = (function nubank$workspaces$card_types$test$update_test_ns_state(test_ns_state,state,duration){
var map__73684 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.card_types.test.NSTestGroup),test_ns_state,state);
var map__73684__$1 = (((((!((map__73684 == null))))?(((((map__73684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73684):map__73684);
var test_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73684__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-vars","nubank.workspaces.card-types.test/test-vars",1606066379));
var success_QMARK_ = cljs.core.every_QMARK_(nubank.workspaces.card_types.test.test_success_QMARK_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test-results","test-results",575566942),test_vars)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(test_ns_state,new cljs.core.Keyword("nubank.workspaces.card-types.test","done?","nubank.workspaces.card-types.test/done?",954754155),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168),false,new cljs.core.Keyword("nubank.workspaces.card-types.test","success?","nubank.workspaces.card-types.test/success?",-5502341),success_QMARK_,new cljs.core.Keyword("nubank.workspaces.card-types.test","duration","nubank.workspaces.card-types.test/duration",-48491221),duration], 0));
});
/**
 * 
 */
nubank.workspaces.card_types.test.set_ns_test_result = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.card-types.test","set-ns-test-result","nubank.workspaces.card-types.test/set-ns-test-result",798543134,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.card-types.test","set-ns-test-result","nubank.workspaces.card-types.test/set-ns-test-result",798543134,null),(function (fulcro_mutation_env_symbol){
var map__73690 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__73690__$1 = (((((!((map__73690 == null))))?(((((map__73690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73690):map__73690);
var test_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73690__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73690__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","duration","nubank.workspaces.card-types.test/duration",-48491221));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$card_types$test$action(p__73692){
var map__73693 = p__73692;
var map__73693__$1 = (((((!((map__73693 == null))))?(((((map__73693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73693):map__73693);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73693__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__73695_74544 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__73696_74545 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__73696_74545);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606),test_ns], null),nubank.workspaces.card_types.test.update_test_ns_state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(state),duration], 0));
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__73695_74544);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__73697 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__73698 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__73698);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__73697);
}})], null);
}));
nubank.workspaces.card_types.test.run_ns_test_blocks = (function nubank$workspaces$card_types$test$run_ns_test_blocks(p__73699){
var map__73700 = p__73699;
var map__73700__$1 = (((((!((map__73700 == null))))?(((((map__73700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73700):map__73700);
var test_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73700__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73700__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","app","nubank.workspaces.card-types.test/app",898613046));
var ns_tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73700__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","ns-tests","nubank.workspaces.card-types.test/ns-tests",1746559849));
var c__57480__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_73897){
var state_val_73898 = (state_73897[(1)]);
if((state_val_73898 === (7))){
var inst_73867 = (state_73897[(2)]);
var state_73897__$1 = state_73897;
var statearr_73899_74548 = state_73897__$1;
(statearr_73899_74548[(2)] = inst_73867);

(statearr_73899_74548[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (20))){
var inst_73743 = (state_73897[(7)]);
var inst_73754 = (state_73897[(2)]);
var inst_73755 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73756 = new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null);
var inst_73757 = (new cljs.core.List(null,inst_73756,null,(1),null));
var inst_73758 = (new cljs.core.List(null,new cljs.core.Keyword(null,"test-results","test-results",575566942),null,(1),null));
var inst_73759 = (new cljs.core.List(null,inst_73754,null,(1),null));
var inst_73760 = (new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.card-types.test","duration","nubank.workspaces.card-types.test/duration",-48491221),null,(1),null));
var inst_73761 = new cljs.core.Keyword("nubank.workspaces.card-types.test","duration","nubank.workspaces.card-types.test/duration",-48491221).cljs$core$IFn$_invoke$arity$1(inst_73754);
var inst_73762 = (new cljs.core.List(null,inst_73761,null,(1),null));
var inst_73763 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_73758,inst_73759,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_73760,inst_73762], 0));
var inst_73765 = cljs.core.seq(inst_73763);
var inst_73766 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_73765);
var inst_73767 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,inst_73766);
var inst_73768 = (new cljs.core.List(null,inst_73767,null,(1),null));
var inst_73769 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_73757,inst_73768);
var inst_73770 = cljs.core.seq(inst_73769);
var inst_73771 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_73770);
var inst_73772 = [inst_73771];
var inst_73773 = (new cljs.core.PersistentVector(null,1,(5),inst_73755,inst_73772,null));
var inst_73774 = [new cljs.core.Keyword(null,"ref","ref",1289896967)];
var inst_73775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73776 = [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-var","nubank.workspaces.card-types.test/test-var",-988438658),inst_73743];
var inst_73777 = (new cljs.core.PersistentVector(null,2,(5),inst_73775,inst_73776,null));
var inst_73778 = [inst_73777];
var inst_73779 = cljs.core.PersistentHashMap.fromArrays(inst_73774,inst_73778);
var inst_73780 = com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,inst_73773,inst_73779);
var state_73897__$1 = state_73897;
var statearr_73900_74556 = state_73897__$1;
(statearr_73900_74556[(2)] = inst_73780);

(statearr_73900_74556[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (27))){
var inst_73797 = (state_73897[(8)]);
var inst_73802 = inst_73797.cljs$lang$protocol_mask$partition0$;
var inst_73803 = (inst_73802 & (64));
var inst_73804 = inst_73797.cljs$core$ISeq$;
var inst_73805 = (cljs.core.PROTOCOL_SENTINEL === inst_73804);
var inst_73806 = ((inst_73803) || (inst_73805));
var state_73897__$1 = state_73897;
if(cljs.core.truth_(inst_73806)){
var statearr_73901_74558 = state_73897__$1;
(statearr_73901_74558[(1)] = (30));

} else {
var statearr_73902_74559 = state_73897__$1;
(statearr_73902_74559[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (1))){
var inst_73702 = nubank.workspaces.card_types.test.now();
var inst_73703 = nubank.workspaces.ui.refresh_card_container(test_ns);
var inst_73704 = cljs.core.async.timeout((1));
var state_73897__$1 = (function (){var statearr_73903 = state_73897;
(statearr_73903[(9)] = inst_73703);

(statearr_73903[(10)] = inst_73702);

return statearr_73903;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73897__$1,(2),inst_73704);
} else {
if((state_val_73898 === (24))){
var inst_73787 = (state_73897[(11)]);
var inst_73791 = cljs.core.chunk_first(inst_73787);
var inst_73792 = cljs.core.chunk_rest(inst_73787);
var inst_73793 = cljs.core.count(inst_73791);
var inst_73712 = inst_73792;
var inst_73713 = inst_73791;
var inst_73714 = inst_73793;
var inst_73715 = (0);
var state_73897__$1 = (function (){var statearr_73906 = state_73897;
(statearr_73906[(12)] = inst_73712);

(statearr_73906[(13)] = inst_73715);

(statearr_73906[(14)] = inst_73713);

(statearr_73906[(15)] = inst_73714);

return statearr_73906;
})();
var statearr_73907_74560 = state_73897__$1;
(statearr_73907_74560[(2)] = null);

(statearr_73907_74560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (39))){
var inst_73819 = (state_73897[(16)]);
var inst_73830 = (state_73897[(2)]);
var inst_73831 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73832 = new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null);
var inst_73833 = (new cljs.core.List(null,inst_73832,null,(1),null));
var inst_73834 = (new cljs.core.List(null,new cljs.core.Keyword(null,"test-results","test-results",575566942),null,(1),null));
var inst_73835 = (new cljs.core.List(null,inst_73830,null,(1),null));
var inst_73836 = (new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.card-types.test","duration","nubank.workspaces.card-types.test/duration",-48491221),null,(1),null));
var inst_73837 = new cljs.core.Keyword("nubank.workspaces.card-types.test","duration","nubank.workspaces.card-types.test/duration",-48491221).cljs$core$IFn$_invoke$arity$1(inst_73830);
var inst_73838 = (new cljs.core.List(null,inst_73837,null,(1),null));
var inst_73839 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_73834,inst_73835,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_73836,inst_73838], 0));
var inst_73840 = cljs.core.seq(inst_73839);
var inst_73841 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_73840);
var inst_73842 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,inst_73841);
var inst_73843 = (new cljs.core.List(null,inst_73842,null,(1),null));
var inst_73844 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_73833,inst_73843);
var inst_73845 = cljs.core.seq(inst_73844);
var inst_73846 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_73845);
var inst_73847 = [inst_73846];
var inst_73848 = (new cljs.core.PersistentVector(null,1,(5),inst_73831,inst_73847,null));
var inst_73849 = [new cljs.core.Keyword(null,"ref","ref",1289896967)];
var inst_73850 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73851 = [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-var","nubank.workspaces.card-types.test/test-var",-988438658),inst_73819];
var inst_73852 = (new cljs.core.PersistentVector(null,2,(5),inst_73850,inst_73851,null));
var inst_73853 = [inst_73852];
var inst_73854 = cljs.core.PersistentHashMap.fromArrays(inst_73849,inst_73853);
var inst_73855 = com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,inst_73848,inst_73854);
var state_73897__$1 = state_73897;
var statearr_73911_74561 = state_73897__$1;
(statearr_73911_74561[(2)] = inst_73855);

(statearr_73911_74561[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (4))){
var inst_73702 = (state_73897[(10)]);
var inst_73869 = (state_73897[(2)]);
var inst_73870 = nubank.workspaces.card_types.test.now();
var inst_73871 = (inst_73870 - inst_73702);
var inst_73872 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73873 = new cljs.core.Symbol("nubank.workspaces.card-types.test","set-ns-test-result","nubank.workspaces.card-types.test/set-ns-test-result",798543134,null);
var inst_73874 = (new cljs.core.List(null,inst_73873,null,(1),null));
var inst_73875 = (new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606),null,(1),null));
var inst_73876 = (new cljs.core.List(null,test_ns,null,(1),null));
var inst_73877 = (new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.card-types.test","duration","nubank.workspaces.card-types.test/duration",-48491221),null,(1),null));
var inst_73878 = (new cljs.core.List(null,inst_73871,null,(1),null));
var inst_73879 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_73875,inst_73876,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_73877,inst_73878], 0));
var inst_73880 = cljs.core.seq(inst_73879);
var inst_73881 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_73880);
var inst_73882 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,inst_73881);
var inst_73883 = (new cljs.core.List(null,inst_73882,null,(1),null));
var inst_73884 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_73874,inst_73883);
var inst_73885 = cljs.core.seq(inst_73884);
var inst_73886 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_73885);
var inst_73887 = [inst_73886];
var inst_73888 = (new cljs.core.PersistentVector(null,1,(5),inst_73872,inst_73887,null));
var inst_73889 = [new cljs.core.Keyword(null,"ref","ref",1289896967)];
var inst_73890 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73891 = [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606),test_ns];
var inst_73892 = (new cljs.core.PersistentVector(null,2,(5),inst_73890,inst_73891,null));
var inst_73893 = [inst_73892];
var inst_73894 = cljs.core.PersistentHashMap.fromArrays(inst_73889,inst_73893);
var inst_73895 = com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,inst_73888,inst_73894);
var state_73897__$1 = (function (){var statearr_73913 = state_73897;
(statearr_73913[(17)] = inst_73869);

return statearr_73913;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_73897__$1,inst_73895);
} else {
if((state_val_73898 === (15))){
var inst_73721 = (state_73897[(18)]);
var state_73897__$1 = state_73897;
var statearr_73914_74563 = state_73897__$1;
(statearr_73914_74563[(2)] = inst_73721);

(statearr_73914_74563[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (21))){
var inst_73787 = (state_73897[(11)]);
var inst_73789 = cljs.core.chunked_seq_QMARK_(inst_73787);
var state_73897__$1 = state_73897;
if(inst_73789){
var statearr_73915_74565 = state_73897__$1;
(statearr_73915_74565[(1)] = (24));

} else {
var statearr_73917_74566 = state_73897__$1;
(statearr_73917_74566[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (31))){
var state_73897__$1 = state_73897;
var statearr_73918_74567 = state_73897__$1;
(statearr_73918_74567[(2)] = false);

(statearr_73918_74567[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (32))){
var inst_73810 = (state_73897[(2)]);
var state_73897__$1 = state_73897;
var statearr_73919_74568 = state_73897__$1;
(statearr_73919_74568[(2)] = inst_73810);

(statearr_73919_74568[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (33))){
var inst_73797 = (state_73897[(8)]);
var inst_73815 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_73797);
var state_73897__$1 = state_73897;
var statearr_73922_74569 = state_73897__$1;
(statearr_73922_74569[(2)] = inst_73815);

(statearr_73922_74569[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (13))){
var inst_73734 = (state_73897[(2)]);
var state_73897__$1 = state_73897;
var statearr_73923_74572 = state_73897__$1;
(statearr_73923_74572[(2)] = inst_73734);

(statearr_73923_74572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (22))){
var state_73897__$1 = state_73897;
var statearr_73924_74573 = state_73897__$1;
(statearr_73924_74573[(2)] = null);

(statearr_73924_74573[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (36))){
var inst_73819 = (state_73897[(16)]);
var inst_73820 = (state_73897[(19)]);
var inst_73825 = [new cljs.core.Keyword("nubank.workspaces.card-types.test","test","nubank.workspaces.card-types.test/test",-1720956764),new cljs.core.Keyword("nubank.workspaces.card-types.test","blocks","nubank.workspaces.card-types.test/blocks",-492982440)];
var inst_73826 = [inst_73819,inst_73820];
var inst_73827 = cljs.core.PersistentHashMap.fromArrays(inst_73825,inst_73826);
var inst_73828 = nubank.workspaces.card_types.test.run_test_blocks(inst_73827);
var state_73897__$1 = state_73897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73897__$1,(39),inst_73828);
} else {
if((state_val_73898 === (29))){
var inst_73813 = (state_73897[(2)]);
var state_73897__$1 = state_73897;
if(cljs.core.truth_(inst_73813)){
var statearr_73926_74575 = state_73897__$1;
(statearr_73926_74575[(1)] = (33));

} else {
var statearr_73928_74576 = state_73897__$1;
(statearr_73928_74576[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (6))){
var inst_73712 = (state_73897[(12)]);
var inst_73787 = (state_73897[(11)]);
var inst_73787__$1 = cljs.core.seq(inst_73712);
var state_73897__$1 = (function (){var statearr_73930 = state_73897;
(statearr_73930[(11)] = inst_73787__$1);

return statearr_73930;
})();
if(inst_73787__$1){
var statearr_73931_74577 = state_73897__$1;
(statearr_73931_74577[(1)] = (21));

} else {
var statearr_73933_74578 = state_73897__$1;
(statearr_73933_74578[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (28))){
var state_73897__$1 = state_73897;
var statearr_73934_74579 = state_73897__$1;
(statearr_73934_74579[(2)] = false);

(statearr_73934_74579[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (25))){
var inst_73797 = (state_73897[(8)]);
var inst_73787 = (state_73897[(11)]);
var inst_73797__$1 = cljs.core.first(inst_73787);
var inst_73799 = (inst_73797__$1 == null);
var inst_73800 = cljs.core.not(inst_73799);
var state_73897__$1 = (function (){var statearr_73935 = state_73897;
(statearr_73935[(8)] = inst_73797__$1);

return statearr_73935;
})();
if(inst_73800){
var statearr_73936_74580 = state_73897__$1;
(statearr_73936_74580[(1)] = (27));

} else {
var statearr_73937_74581 = state_73897__$1;
(statearr_73937_74581[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (34))){
var inst_73797 = (state_73897[(8)]);
var state_73897__$1 = state_73897;
var statearr_73938_74582 = state_73897__$1;
(statearr_73938_74582[(2)] = inst_73797);

(statearr_73938_74582[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (17))){
var inst_73743 = (state_73897[(7)]);
var inst_73744 = (state_73897[(20)]);
var inst_73749 = [new cljs.core.Keyword("nubank.workspaces.card-types.test","test","nubank.workspaces.card-types.test/test",-1720956764),new cljs.core.Keyword("nubank.workspaces.card-types.test","blocks","nubank.workspaces.card-types.test/blocks",-492982440)];
var inst_73750 = [inst_73743,inst_73744];
var inst_73751 = cljs.core.PersistentHashMap.fromArrays(inst_73749,inst_73750);
var inst_73752 = nubank.workspaces.card_types.test.run_test_blocks(inst_73751);
var state_73897__$1 = state_73897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73897__$1,(20),inst_73752);
} else {
if((state_val_73898 === (3))){
var inst_73715 = (state_73897[(13)]);
var inst_73714 = (state_73897[(15)]);
var inst_73717 = (inst_73715 < inst_73714);
var inst_73718 = inst_73717;
var state_73897__$1 = state_73897;
if(cljs.core.truth_(inst_73718)){
var statearr_73939_74583 = state_73897__$1;
(statearr_73939_74583[(1)] = (5));

} else {
var statearr_73940_74584 = state_73897__$1;
(statearr_73940_74584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (12))){
var state_73897__$1 = state_73897;
var statearr_73941_74585 = state_73897__$1;
(statearr_73941_74585[(2)] = false);

(statearr_73941_74585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (2))){
var inst_73706 = (state_73897[(2)]);
var inst_73711 = cljs.core.seq(ns_tests);
var inst_73712 = inst_73711;
var inst_73713 = null;
var inst_73714 = (0);
var inst_73715 = (0);
var state_73897__$1 = (function (){var statearr_73942 = state_73897;
(statearr_73942[(12)] = inst_73712);

(statearr_73942[(21)] = inst_73706);

(statearr_73942[(13)] = inst_73715);

(statearr_73942[(14)] = inst_73713);

(statearr_73942[(15)] = inst_73714);

return statearr_73942;
})();
var statearr_73943_74586 = state_73897__$1;
(statearr_73943_74586[(2)] = null);

(statearr_73943_74586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (23))){
var inst_73865 = (state_73897[(2)]);
var state_73897__$1 = state_73897;
var statearr_73947_74587 = state_73897__$1;
(statearr_73947_74587[(2)] = inst_73865);

(statearr_73947_74587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (35))){
var inst_73819 = (state_73897[(16)]);
var inst_73818 = (state_73897[(2)]);
var inst_73819__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73818,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
var inst_73820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73818,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-forms","nubank.workspaces.card-types.test/test-forms",-1801638919));
var inst_73821 = nubank.workspaces.card_types.test.app_test_block(app,inst_73819__$1);
var inst_73822 = new cljs.core.Keyword("nubank.workspaces.card-types.test","disabled?","nubank.workspaces.card-types.test/disabled?",-1909194278).cljs$core$IFn$_invoke$arity$1(inst_73821);
var inst_73823 = cljs.core.not(inst_73822);
var state_73897__$1 = (function (){var statearr_73948 = state_73897;
(statearr_73948[(16)] = inst_73819__$1);

(statearr_73948[(19)] = inst_73820);

return statearr_73948;
})();
if(inst_73823){
var statearr_73949_74588 = state_73897__$1;
(statearr_73949_74588[(1)] = (36));

} else {
var statearr_73950_74589 = state_73897__$1;
(statearr_73950_74589[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (19))){
var inst_73712 = (state_73897[(12)]);
var inst_73715 = (state_73897[(13)]);
var inst_73713 = (state_73897[(14)]);
var inst_73714 = (state_73897[(15)]);
var inst_73783 = (state_73897[(2)]);
var inst_73784 = (inst_73715 + (1));
var tmp73944 = inst_73712;
var tmp73945 = inst_73713;
var tmp73946 = inst_73714;
var inst_73712__$1 = tmp73944;
var inst_73713__$1 = tmp73945;
var inst_73714__$1 = tmp73946;
var inst_73715__$1 = inst_73784;
var state_73897__$1 = (function (){var statearr_73951 = state_73897;
(statearr_73951[(12)] = inst_73712__$1);

(statearr_73951[(13)] = inst_73715__$1);

(statearr_73951[(14)] = inst_73713__$1);

(statearr_73951[(15)] = inst_73714__$1);

(statearr_73951[(22)] = inst_73783);

return statearr_73951;
})();
var statearr_73952_74590 = state_73897__$1;
(statearr_73952_74590[(2)] = null);

(statearr_73952_74590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (11))){
var state_73897__$1 = state_73897;
var statearr_73953_74591 = state_73897__$1;
(statearr_73953_74591[(2)] = true);

(statearr_73953_74591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (9))){
var state_73897__$1 = state_73897;
var statearr_73954_74592 = state_73897__$1;
(statearr_73954_74592[(2)] = false);

(statearr_73954_74592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (5))){
var inst_73715 = (state_73897[(13)]);
var inst_73713 = (state_73897[(14)]);
var inst_73721 = (state_73897[(18)]);
var inst_73721__$1 = cljs.core._nth(inst_73713,inst_73715);
var inst_73723 = (inst_73721__$1 == null);
var inst_73724 = cljs.core.not(inst_73723);
var state_73897__$1 = (function (){var statearr_73955 = state_73897;
(statearr_73955[(18)] = inst_73721__$1);

return statearr_73955;
})();
if(inst_73724){
var statearr_73956_74593 = state_73897__$1;
(statearr_73956_74593[(1)] = (8));

} else {
var statearr_73957_74594 = state_73897__$1;
(statearr_73957_74594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (14))){
var inst_73721 = (state_73897[(18)]);
var inst_73739 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_73721);
var state_73897__$1 = state_73897;
var statearr_73958_74595 = state_73897__$1;
(statearr_73958_74595[(2)] = inst_73739);

(statearr_73958_74595[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (26))){
var inst_73862 = (state_73897[(2)]);
var state_73897__$1 = state_73897;
var statearr_73959_74596 = state_73897__$1;
(statearr_73959_74596[(2)] = inst_73862);

(statearr_73959_74596[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (16))){
var inst_73743 = (state_73897[(7)]);
var inst_73742 = (state_73897[(2)]);
var inst_73743__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73742,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
var inst_73744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73742,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-forms","nubank.workspaces.card-types.test/test-forms",-1801638919));
var inst_73745 = nubank.workspaces.card_types.test.app_test_block(app,inst_73743__$1);
var inst_73746 = new cljs.core.Keyword("nubank.workspaces.card-types.test","disabled?","nubank.workspaces.card-types.test/disabled?",-1909194278).cljs$core$IFn$_invoke$arity$1(inst_73745);
var inst_73747 = cljs.core.not(inst_73746);
var state_73897__$1 = (function (){var statearr_73961 = state_73897;
(statearr_73961[(7)] = inst_73743__$1);

(statearr_73961[(20)] = inst_73744);

return statearr_73961;
})();
if(inst_73747){
var statearr_73962_74597 = state_73897__$1;
(statearr_73962_74597[(1)] = (17));

} else {
var statearr_73963_74598 = state_73897__$1;
(statearr_73963_74598[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (38))){
var inst_73787 = (state_73897[(11)]);
var inst_73858 = (state_73897[(2)]);
var inst_73859 = cljs.core.next(inst_73787);
var inst_73712 = inst_73859;
var inst_73713 = null;
var inst_73714 = (0);
var inst_73715 = (0);
var state_73897__$1 = (function (){var statearr_73964 = state_73897;
(statearr_73964[(12)] = inst_73712);

(statearr_73964[(13)] = inst_73715);

(statearr_73964[(14)] = inst_73713);

(statearr_73964[(15)] = inst_73714);

(statearr_73964[(23)] = inst_73858);

return statearr_73964;
})();
var statearr_73965_74599 = state_73897__$1;
(statearr_73965_74599[(2)] = null);

(statearr_73965_74599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (30))){
var state_73897__$1 = state_73897;
var statearr_73966_74600 = state_73897__$1;
(statearr_73966_74600[(2)] = true);

(statearr_73966_74600[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (10))){
var inst_73737 = (state_73897[(2)]);
var state_73897__$1 = state_73897;
if(cljs.core.truth_(inst_73737)){
var statearr_73967_74601 = state_73897__$1;
(statearr_73967_74601[(1)] = (14));

} else {
var statearr_73968_74602 = state_73897__$1;
(statearr_73968_74602[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (18))){
var state_73897__$1 = state_73897;
var statearr_73969_74603 = state_73897__$1;
(statearr_73969_74603[(2)] = null);

(statearr_73969_74603[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (37))){
var state_73897__$1 = state_73897;
var statearr_73970_74604 = state_73897__$1;
(statearr_73970_74604[(2)] = null);

(statearr_73970_74604[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73898 === (8))){
var inst_73721 = (state_73897[(18)]);
var inst_73726 = inst_73721.cljs$lang$protocol_mask$partition0$;
var inst_73727 = (inst_73726 & (64));
var inst_73728 = inst_73721.cljs$core$ISeq$;
var inst_73729 = (cljs.core.PROTOCOL_SENTINEL === inst_73728);
var inst_73730 = ((inst_73727) || (inst_73729));
var state_73897__$1 = state_73897;
if(cljs.core.truth_(inst_73730)){
var statearr_73971_74605 = state_73897__$1;
(statearr_73971_74605[(1)] = (11));

} else {
var statearr_73972_74606 = state_73897__$1;
(statearr_73972_74606[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var nubank$workspaces$card_types$test$run_ns_test_blocks_$_state_machine__57129__auto__ = null;
var nubank$workspaces$card_types$test$run_ns_test_blocks_$_state_machine__57129__auto____0 = (function (){
var statearr_73973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73973[(0)] = nubank$workspaces$card_types$test$run_ns_test_blocks_$_state_machine__57129__auto__);

(statearr_73973[(1)] = (1));

return statearr_73973;
});
var nubank$workspaces$card_types$test$run_ns_test_blocks_$_state_machine__57129__auto____1 = (function (state_73897){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_73897);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e73974){var ex__57132__auto__ = e73974;
var statearr_73975_74607 = state_73897;
(statearr_73975_74607[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_73897[(4)]))){
var statearr_73976_74608 = state_73897;
(statearr_73976_74608[(1)] = cljs.core.first((state_73897[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74609 = state_73897;
state_73897 = G__74609;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
nubank$workspaces$card_types$test$run_ns_test_blocks_$_state_machine__57129__auto__ = function(state_73897){
switch(arguments.length){
case 0:
return nubank$workspaces$card_types$test$run_ns_test_blocks_$_state_machine__57129__auto____0.call(this);
case 1:
return nubank$workspaces$card_types$test$run_ns_test_blocks_$_state_machine__57129__auto____1.call(this,state_73897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nubank$workspaces$card_types$test$run_ns_test_blocks_$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = nubank$workspaces$card_types$test$run_ns_test_blocks_$_state_machine__57129__auto____0;
nubank$workspaces$card_types$test$run_ns_test_blocks_$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = nubank$workspaces$card_types$test$run_ns_test_blocks_$_state_machine__57129__auto____1;
return nubank$workspaces$card_types$test$run_ns_test_blocks_$_state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_73977 = f__57481__auto__();
(statearr_73977[(6)] = c__57480__auto__);

return statearr_73977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));

return c__57480__auto__;
});
nubank.workspaces.card_types.test.test_runner.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606),(function (p__73978){
var map__73979 = p__73978;
var map__73979__$1 = (((((!((map__73979 == null))))?(((((map__73979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73979):map__73979);
var env = map__73979__$1;
var test_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73979__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73979__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","app","nubank.workspaces.card-types.test/app",898613046));
var c__57480__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_74019){
var state_val_74020 = (state_74019[(1)]);
if((state_val_74020 === (1))){
var inst_73981 = (state_74019[(7)]);
var inst_73981__$1 = nubank.workspaces.card_types.test.namespace_test_cards(test_ns);
var inst_73982 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73983 = new cljs.core.Symbol("nubank.workspaces.card-types.test","start-ns-test-namespaces","nubank.workspaces.card-types.test/start-ns-test-namespaces",423625465,null);
var inst_73984 = (new cljs.core.List(null,inst_73983,null,(1),null));
var inst_73985 = (new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.card-types.test","ns-tests","nubank.workspaces.card-types.test/ns-tests",1746559849),null,(1),null));
var inst_73986 = (new cljs.core.List(null,inst_73981__$1,null,(1),null));
var inst_73987 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_73985,inst_73986);
var inst_73988 = cljs.core.seq(inst_73987);
var inst_73989 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_73988);
var inst_73990 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,inst_73989);
var inst_73991 = (new cljs.core.List(null,inst_73990,null,(1),null));
var inst_73992 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_73984,inst_73991);
var inst_73993 = cljs.core.seq(inst_73992);
var inst_73994 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_73993);
var inst_73995 = [inst_73994];
var inst_73996 = (new cljs.core.PersistentVector(null,1,(5),inst_73982,inst_73995,null));
var inst_73997 = [new cljs.core.Keyword(null,"ref","ref",1289896967)];
var inst_73999 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74000 = [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606),test_ns];
var inst_74001 = (new cljs.core.PersistentVector(null,2,(5),inst_73999,inst_74000,null));
var inst_74002 = [inst_74001];
var inst_74003 = cljs.core.PersistentHashMap.fromArrays(inst_73997,inst_74002);
var inst_74004 = com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,inst_73996,inst_74003);
var inst_74006 = cljs.core.async.timeout((1));
var state_74019__$1 = (function (){var statearr_74022 = state_74019;
(statearr_74022[(8)] = inst_74004);

(statearr_74022[(7)] = inst_73981__$1);

return statearr_74022;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74019__$1,(2),inst_74006);
} else {
if((state_val_74020 === (2))){
var inst_73981 = (state_74019[(7)]);
var inst_74008 = (state_74019[(2)]);
var inst_74009 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("nubank.workspaces.card-types.test","ns-tests","nubank.workspaces.card-types.test/ns-tests",1746559849),inst_73981);
var inst_74010 = nubank.workspaces.card_types.test.run_ns_test_blocks(inst_74009);
var state_74019__$1 = (function (){var statearr_74025 = state_74019;
(statearr_74025[(9)] = inst_74008);

return statearr_74025;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74019__$1,(3),inst_74010);
} else {
if((state_val_74020 === (3))){
var inst_74012 = (state_74019[(2)]);
var inst_74013 = cljs.core.async.timeout((1));
var state_74019__$1 = (function (){var statearr_74026 = state_74019;
(statearr_74026[(10)] = inst_74012);

return statearr_74026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74019__$1,(4),inst_74013);
} else {
if((state_val_74020 === (4))){
var inst_74015 = (state_74019[(2)]);
var inst_74016 = nubank.workspaces.ui.refresh_card_container(test_ns);
var inst_74017 = com.fulcrologic.fulcro.application.force_root_render_BANG_(app);
var state_74019__$1 = (function (){var statearr_74028 = state_74019;
(statearr_74028[(11)] = inst_74016);

(statearr_74028[(12)] = inst_74017);

(statearr_74028[(13)] = inst_74015);

return statearr_74028;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_74019__$1,app);
} else {
return null;
}
}
}
}
});
return (function() {
var nubank$workspaces$card_types$test$state_machine__57129__auto__ = null;
var nubank$workspaces$card_types$test$state_machine__57129__auto____0 = (function (){
var statearr_74029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74029[(0)] = nubank$workspaces$card_types$test$state_machine__57129__auto__);

(statearr_74029[(1)] = (1));

return statearr_74029;
});
var nubank$workspaces$card_types$test$state_machine__57129__auto____1 = (function (state_74019){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_74019);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e74030){var ex__57132__auto__ = e74030;
var statearr_74032_74610 = state_74019;
(statearr_74032_74610[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_74019[(4)]))){
var statearr_74034_74611 = state_74019;
(statearr_74034_74611[(1)] = cljs.core.first((state_74019[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74612 = state_74019;
state_74019 = G__74612;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
nubank$workspaces$card_types$test$state_machine__57129__auto__ = function(state_74019){
switch(arguments.length){
case 0:
return nubank$workspaces$card_types$test$state_machine__57129__auto____0.call(this);
case 1:
return nubank$workspaces$card_types$test$state_machine__57129__auto____1.call(this,state_74019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nubank$workspaces$card_types$test$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = nubank$workspaces$card_types$test$state_machine__57129__auto____0;
nubank$workspaces$card_types$test$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = nubank$workspaces$card_types$test$state_machine__57129__auto____1;
return nubank$workspaces$card_types$test$state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_74035 = f__57481__auto__();
(statearr_74035[(6)] = c__57480__auto__);

return statearr_74035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));

return c__57480__auto__;
}));
/**
 * 
 */
nubank.workspaces.card_types.test.start_all_tests = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.card-types.test","start-all-tests","nubank.workspaces.card-types.test/start-all-tests",-1437512082,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.card-types.test","start-all-tests","nubank.workspaces.card-types.test/start-all-tests",-1437512082,null),(function (fulcro_mutation_env_symbol){
var map__74038 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__74038__$1 = (((((!((map__74038 == null))))?(((((map__74038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74038):map__74038);
var test_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74038__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-namespaces","nubank.workspaces.card-types.test/test-namespaces",883297667));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$card_types$test$action(p__74040){
var map__74041 = p__74040;
var map__74041__$1 = (((((!((map__74041 == null))))?(((((map__74041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74041):map__74041);
var env = map__74041__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74041__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var _STAR_after_render_STAR__orig_val__74043_74613 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__74044_74614 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__74044_74614);

try{var test_namespaces_74615__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__74047){
var vec__74048 = p__74047;
var test_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74048,(0),null);
var ns_tests = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74048,(1),null);
return nubank.workspaces.card_types.test.build_ns_test_group(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606),test_ns,new cljs.core.Keyword("nubank.workspaces.card-types.test","ns-tests","nubank.workspaces.card-types.test/ns-tests",1746559849),ns_tests], null)], 0)));
})),test_namespaces);
com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_(app,nubank.workspaces.card_types.test.AllTests,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("nubank.workspaces.card-types.test","enqueued?","nubank.workspaces.card-types.test/enqueued?",685909630),false,new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168),true,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-namespaces","nubank.workspaces.card-types.test/test-namespaces",883297667),test_namespaces_74615__$1], null));
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__74043_74613);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__74051 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__74052 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__74052);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__74051);
}})], null);
}));
nubank.workspaces.card_types.test.update_all_tests_state = (function nubank$workspaces$card_types$test$update_all_tests_state(all_tests_state,state,duration){
var map__74053 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.card_types.test.AllTests),all_tests_state,state);
var map__74053__$1 = (((((!((map__74053 == null))))?(((((map__74053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74053):map__74053);
var test_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74053__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-namespaces","nubank.workspaces.card-types.test/test-namespaces",883297667));
var success_QMARK_ = cljs.core.every_QMARK_(new cljs.core.Keyword("nubank.workspaces.card-types.test","success?","nubank.workspaces.card-types.test/success?",-5502341),test_namespaces);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(all_tests_state,new cljs.core.Keyword("nubank.workspaces.card-types.test","done?","nubank.workspaces.card-types.test/done?",954754155),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168),false,new cljs.core.Keyword("nubank.workspaces.card-types.test","success?","nubank.workspaces.card-types.test/success?",-5502341),success_QMARK_,new cljs.core.Keyword("nubank.workspaces.card-types.test","duration","nubank.workspaces.card-types.test/duration",-48491221),duration], 0));
});
/**
 * 
 */
nubank.workspaces.card_types.test.set_all_tests_result = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.card-types.test","set-all-tests-result","nubank.workspaces.card-types.test/set-all-tests-result",-1349143710,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.card-types.test","set-all-tests-result","nubank.workspaces.card-types.test/set-all-tests-result",-1349143710,null),(function (fulcro_mutation_env_symbol){
var map__74059 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__74059__$1 = (((((!((map__74059 == null))))?(((((map__74059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74059):map__74059);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74059__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","duration","nubank.workspaces.card-types.test/duration",-48491221));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$card_types$test$action(p__74061){
var map__74062 = p__74061;
var map__74062__$1 = (((((!((map__74062 == null))))?(((((map__74062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74062):map__74062);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74062__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__74064_74616 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__74065_74617 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__74065_74617);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","all-tests-run","nubank.workspaces.card-types.test/all-tests-run",1718316217),"singleton"], null),nubank.workspaces.card_types.test.update_all_tests_state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(state),duration], 0));
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__74064_74616);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__74066 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__74067 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__74067);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__74066);
}})], null);
}));
nubank.workspaces.card_types.test.test_runner.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-all","nubank.workspaces.card-types.test/test-all",1141659084),(function (p__74070){
var map__74071 = p__74070;
var map__74071__$1 = (((((!((map__74071 == null))))?(((((map__74071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74071):map__74071);
var env = map__74071__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74071__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","app","nubank.workspaces.card-types.test/app",898613046));
var c__57480__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_74202){
var state_val_74203 = (state_74202[(1)]);
if((state_val_74203 === (7))){
var inst_74118 = (state_74202[(7)]);
var inst_74119 = (state_74202[(8)]);
var inst_74124 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606),inst_74118,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.card-types.test","ns-tests","nubank.workspaces.card-types.test/ns-tests",1746559849),inst_74119], 0));
var inst_74125 = nubank.workspaces.card_types.test.run_ns_test_blocks(inst_74124);
var state_74202__$1 = state_74202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74202__$1,(10),inst_74125);
} else {
if((state_val_74203 === (20))){
var inst_74156 = (state_74202[(2)]);
var state_74202__$1 = state_74202;
var statearr_74205_74618 = state_74202__$1;
(statearr_74205_74618[(2)] = inst_74156);

(statearr_74205_74618[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74203 === (1))){
var inst_74076 = nubank.workspaces.card_types.test.test_cards_by_namespace();
var inst_74077 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,inst_74076);
var inst_74078 = nubank.workspaces.card_types.test.now();
var inst_74079 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74080 = new cljs.core.Symbol("nubank.workspaces.card-types.test","start-all-tests","nubank.workspaces.card-types.test/start-all-tests",-1437512082,null);
var inst_74081 = (new cljs.core.List(null,inst_74080,null,(1),null));
var inst_74082 = (new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-namespaces","nubank.workspaces.card-types.test/test-namespaces",883297667),null,(1),null));
var inst_74083 = (new cljs.core.List(null,inst_74077,null,(1),null));
var inst_74084 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_74082,inst_74083);
var inst_74085 = cljs.core.seq(inst_74084);
var inst_74086 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_74085);
var inst_74087 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,inst_74086);
var inst_74088 = (new cljs.core.List(null,inst_74087,null,(1),null));
var inst_74089 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_74081,inst_74088);
var inst_74090 = cljs.core.seq(inst_74089);
var inst_74091 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_74090);
var inst_74092 = [inst_74091];
var inst_74093 = (new cljs.core.PersistentVector(null,1,(5),inst_74079,inst_74092,null));
var inst_74094 = [new cljs.core.Keyword(null,"ref","ref",1289896967)];
var inst_74095 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74096 = [new cljs.core.Keyword("nubank.workspaces.card-types.test","all-tests-run","nubank.workspaces.card-types.test/all-tests-run",1718316217),"singleton"];
var inst_74097 = (new cljs.core.PersistentVector(null,2,(5),inst_74095,inst_74096,null));
var inst_74098 = [inst_74097];
var inst_74099 = cljs.core.PersistentHashMap.fromArrays(inst_74094,inst_74098);
var inst_74100 = com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,inst_74093,inst_74099);
var inst_74105 = cljs.core.seq(inst_74077);
var inst_74106 = inst_74105;
var inst_74107 = null;
var inst_74108 = (0);
var inst_74109 = (0);
var state_74202__$1 = (function (){var statearr_74207 = state_74202;
(statearr_74207[(9)] = inst_74108);

(statearr_74207[(10)] = inst_74100);

(statearr_74207[(11)] = inst_74107);

(statearr_74207[(12)] = inst_74109);

(statearr_74207[(13)] = inst_74078);

(statearr_74207[(14)] = inst_74106);

return statearr_74207;
})();
var statearr_74209_74619 = state_74202__$1;
(statearr_74209_74619[(2)] = null);

(statearr_74209_74619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74203 === (4))){
var inst_74118 = (state_74202[(7)]);
var inst_74107 = (state_74202[(11)]);
var inst_74109 = (state_74202[(12)]);
var inst_74117 = cljs.core._nth(inst_74107,inst_74109);
var inst_74118__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74117,(0),null);
var inst_74119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74117,(1),null);
var inst_74120 = nubank.workspaces.card_types.test.app_ns_test_block(app,inst_74118__$1);
var inst_74121 = new cljs.core.Keyword("nubank.workspaces.card-types.test","disabled?","nubank.workspaces.card-types.test/disabled?",-1909194278).cljs$core$IFn$_invoke$arity$1(inst_74120);
var inst_74122 = cljs.core.not(inst_74121);
var state_74202__$1 = (function (){var statearr_74211 = state_74202;
(statearr_74211[(7)] = inst_74118__$1);

(statearr_74211[(8)] = inst_74119);

return statearr_74211;
})();
if(inst_74122){
var statearr_74212_74620 = state_74202__$1;
(statearr_74212_74620[(1)] = (7));

} else {
var statearr_74213_74621 = state_74202__$1;
(statearr_74213_74621[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74203 === (15))){
var inst_74134 = (state_74202[(15)]);
var inst_74147 = (state_74202[(16)]);
var inst_74146 = cljs.core.first(inst_74134);
var inst_74147__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74146,(0),null);
var inst_74148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74146,(1),null);
var inst_74149 = nubank.workspaces.card_types.test.app_ns_test_block(app,inst_74147__$1);
var inst_74150 = new cljs.core.Keyword("nubank.workspaces.card-types.test","disabled?","nubank.workspaces.card-types.test/disabled?",-1909194278).cljs$core$IFn$_invoke$arity$1(inst_74149);
var inst_74151 = cljs.core.not(inst_74150);
var state_74202__$1 = (function (){var statearr_74214 = state_74202;
(statearr_74214[(17)] = inst_74148);

(statearr_74214[(16)] = inst_74147__$1);

return statearr_74214;
})();
if(inst_74151){
var statearr_74215_74622 = state_74202__$1;
(statearr_74215_74622[(1)] = (17));

} else {
var statearr_74216_74623 = state_74202__$1;
(statearr_74216_74623[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74203 === (21))){
var inst_74197 = (state_74202[(2)]);
var inst_74198 = new cljs.core.Symbol("nubank.workspaces.card-types.test","test-all","nubank.workspaces.card-types.test/test-all",-1512776685,null);
var inst_74199 = nubank.workspaces.ui.refresh_card_container(inst_74198);
var inst_74200 = com.fulcrologic.fulcro.application.force_root_render_BANG_(app);
var state_74202__$1 = (function (){var statearr_74217 = state_74202;
(statearr_74217[(18)] = inst_74200);

(statearr_74217[(19)] = inst_74197);

(statearr_74217[(20)] = inst_74199);

return statearr_74217;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_74202__$1,app);
} else {
if((state_val_74203 === (13))){
var inst_74166 = (state_74202[(2)]);
var state_74202__$1 = state_74202;
var statearr_74218_74624 = state_74202__$1;
(statearr_74218_74624[(2)] = inst_74166);

(statearr_74218_74624[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74203 === (6))){
var inst_74168 = (state_74202[(2)]);
var state_74202__$1 = state_74202;
var statearr_74219_74625 = state_74202__$1;
(statearr_74219_74625[(2)] = inst_74168);

(statearr_74219_74625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74203 === (17))){
var inst_74148 = (state_74202[(17)]);
var inst_74147 = (state_74202[(16)]);
var inst_74153 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606),inst_74147,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.card-types.test","ns-tests","nubank.workspaces.card-types.test/ns-tests",1746559849),inst_74148], 0));
var inst_74154 = nubank.workspaces.card_types.test.run_ns_test_blocks(inst_74153);
var state_74202__$1 = state_74202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74202__$1,(20),inst_74154);
} else {
if((state_val_74203 === (3))){
var inst_74078 = (state_74202[(13)]);
var inst_74170 = (state_74202[(2)]);
var inst_74171 = nubank.workspaces.card_types.test.now();
var inst_74172 = (inst_74171 - inst_74078);
var inst_74173 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74174 = new cljs.core.Symbol("nubank.workspaces.card-types.test","set-all-tests-result","nubank.workspaces.card-types.test/set-all-tests-result",-1349143710,null);
var inst_74175 = (new cljs.core.List(null,inst_74174,null,(1),null));
var inst_74176 = (new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.card-types.test","duration","nubank.workspaces.card-types.test/duration",-48491221),null,(1),null));
var inst_74177 = (new cljs.core.List(null,inst_74172,null,(1),null));
var inst_74178 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_74176,inst_74177);
var inst_74179 = cljs.core.seq(inst_74178);
var inst_74180 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_74179);
var inst_74181 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,inst_74180);
var inst_74182 = (new cljs.core.List(null,inst_74181,null,(1),null));
var inst_74183 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_74175,inst_74182);
var inst_74184 = cljs.core.seq(inst_74183);
var inst_74185 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_74184);
var inst_74186 = [inst_74185];
var inst_74187 = (new cljs.core.PersistentVector(null,1,(5),inst_74173,inst_74186,null));
var inst_74188 = [new cljs.core.Keyword(null,"ref","ref",1289896967)];
var inst_74189 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74190 = [new cljs.core.Keyword("nubank.workspaces.card-types.test","all-tests-run","nubank.workspaces.card-types.test/all-tests-run",1718316217),"singleton"];
var inst_74191 = (new cljs.core.PersistentVector(null,2,(5),inst_74189,inst_74190,null));
var inst_74192 = [inst_74191];
var inst_74193 = cljs.core.PersistentHashMap.fromArrays(inst_74188,inst_74192);
var inst_74194 = com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,inst_74187,inst_74193);
var inst_74195 = cljs.core.async.timeout((1));
var state_74202__$1 = (function (){var statearr_74220 = state_74202;
(statearr_74220[(21)] = inst_74170);

(statearr_74220[(22)] = inst_74194);

return statearr_74220;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74202__$1,(21),inst_74195);
} else {
if((state_val_74203 === (12))){
var state_74202__$1 = state_74202;
var statearr_74221_74626 = state_74202__$1;
(statearr_74221_74626[(2)] = null);

(statearr_74221_74626[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74203 === (2))){
var inst_74108 = (state_74202[(9)]);
var inst_74109 = (state_74202[(12)]);
var inst_74111 = (inst_74109 < inst_74108);
var inst_74112 = inst_74111;
var state_74202__$1 = state_74202;
if(cljs.core.truth_(inst_74112)){
var statearr_74222_74627 = state_74202__$1;
(statearr_74222_74627[(1)] = (4));

} else {
var statearr_74223_74628 = state_74202__$1;
(statearr_74223_74628[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74203 === (19))){
var inst_74134 = (state_74202[(15)]);
var inst_74159 = (state_74202[(2)]);
var inst_74160 = cljs.core.next(inst_74134);
var inst_74106 = inst_74160;
var inst_74107 = null;
var inst_74108 = (0);
var inst_74109 = (0);
var state_74202__$1 = (function (){var statearr_74227 = state_74202;
(statearr_74227[(9)] = inst_74108);

(statearr_74227[(11)] = inst_74107);

(statearr_74227[(12)] = inst_74109);

(statearr_74227[(14)] = inst_74106);

(statearr_74227[(23)] = inst_74159);

return statearr_74227;
})();
var statearr_74228_74629 = state_74202__$1;
(statearr_74228_74629[(2)] = null);

(statearr_74228_74629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74203 === (11))){
var inst_74134 = (state_74202[(15)]);
var inst_74136 = cljs.core.chunked_seq_QMARK_(inst_74134);
var state_74202__$1 = state_74202;
if(inst_74136){
var statearr_74229_74630 = state_74202__$1;
(statearr_74229_74630[(1)] = (14));

} else {
var statearr_74230_74631 = state_74202__$1;
(statearr_74230_74631[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74203 === (9))){
var inst_74108 = (state_74202[(9)]);
var inst_74107 = (state_74202[(11)]);
var inst_74109 = (state_74202[(12)]);
var inst_74106 = (state_74202[(14)]);
var inst_74130 = (state_74202[(2)]);
var inst_74131 = (inst_74109 + (1));
var tmp74224 = inst_74108;
var tmp74225 = inst_74107;
var tmp74226 = inst_74106;
var inst_74106__$1 = tmp74226;
var inst_74107__$1 = tmp74225;
var inst_74108__$1 = tmp74224;
var inst_74109__$1 = inst_74131;
var state_74202__$1 = (function (){var statearr_74231 = state_74202;
(statearr_74231[(9)] = inst_74108__$1);

(statearr_74231[(11)] = inst_74107__$1);

(statearr_74231[(12)] = inst_74109__$1);

(statearr_74231[(24)] = inst_74130);

(statearr_74231[(14)] = inst_74106__$1);

return statearr_74231;
})();
var statearr_74232_74632 = state_74202__$1;
(statearr_74232_74632[(2)] = null);

(statearr_74232_74632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74203 === (5))){
var inst_74134 = (state_74202[(15)]);
var inst_74106 = (state_74202[(14)]);
var inst_74134__$1 = cljs.core.seq(inst_74106);
var state_74202__$1 = (function (){var statearr_74233 = state_74202;
(statearr_74233[(15)] = inst_74134__$1);

return statearr_74233;
})();
if(inst_74134__$1){
var statearr_74234_74633 = state_74202__$1;
(statearr_74234_74633[(1)] = (11));

} else {
var statearr_74235_74634 = state_74202__$1;
(statearr_74235_74634[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74203 === (14))){
var inst_74134 = (state_74202[(15)]);
var inst_74138 = cljs.core.chunk_first(inst_74134);
var inst_74139 = cljs.core.chunk_rest(inst_74134);
var inst_74140 = cljs.core.count(inst_74138);
var inst_74106 = inst_74139;
var inst_74107 = inst_74138;
var inst_74108 = inst_74140;
var inst_74109 = (0);
var state_74202__$1 = (function (){var statearr_74236 = state_74202;
(statearr_74236[(9)] = inst_74108);

(statearr_74236[(11)] = inst_74107);

(statearr_74236[(12)] = inst_74109);

(statearr_74236[(14)] = inst_74106);

return statearr_74236;
})();
var statearr_74237_74635 = state_74202__$1;
(statearr_74237_74635[(2)] = null);

(statearr_74237_74635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74203 === (16))){
var inst_74163 = (state_74202[(2)]);
var state_74202__$1 = state_74202;
var statearr_74238_74636 = state_74202__$1;
(statearr_74238_74636[(2)] = inst_74163);

(statearr_74238_74636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74203 === (10))){
var inst_74127 = (state_74202[(2)]);
var state_74202__$1 = state_74202;
var statearr_74239_74637 = state_74202__$1;
(statearr_74239_74637[(2)] = inst_74127);

(statearr_74239_74637[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74203 === (18))){
var state_74202__$1 = state_74202;
var statearr_74240_74638 = state_74202__$1;
(statearr_74240_74638[(2)] = null);

(statearr_74240_74638[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74203 === (8))){
var state_74202__$1 = state_74202;
var statearr_74241_74639 = state_74202__$1;
(statearr_74241_74639[(2)] = null);

(statearr_74241_74639[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var nubank$workspaces$card_types$test$state_machine__57129__auto__ = null;
var nubank$workspaces$card_types$test$state_machine__57129__auto____0 = (function (){
var statearr_74242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74242[(0)] = nubank$workspaces$card_types$test$state_machine__57129__auto__);

(statearr_74242[(1)] = (1));

return statearr_74242;
});
var nubank$workspaces$card_types$test$state_machine__57129__auto____1 = (function (state_74202){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_74202);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e74243){var ex__57132__auto__ = e74243;
var statearr_74244_74640 = state_74202;
(statearr_74244_74640[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_74202[(4)]))){
var statearr_74245_74641 = state_74202;
(statearr_74245_74641[(1)] = cljs.core.first((state_74202[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74642 = state_74202;
state_74202 = G__74642;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
nubank$workspaces$card_types$test$state_machine__57129__auto__ = function(state_74202){
switch(arguments.length){
case 0:
return nubank$workspaces$card_types$test$state_machine__57129__auto____0.call(this);
case 1:
return nubank$workspaces$card_types$test$state_machine__57129__auto____1.call(this,state_74202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nubank$workspaces$card_types$test$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = nubank$workspaces$card_types$test$state_machine__57129__auto____0;
nubank$workspaces$card_types$test$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = nubank$workspaces$card_types$test$state_machine__57129__auto____1;
return nubank$workspaces$card_types$test$state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_74246 = f__57481__auto__();
(statearr_74246[(6)] = c__57480__auto__);

return statearr_74246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));

return c__57480__auto__;
}));
nubank.workspaces.card_types.test.run_test_loop = (function nubank$workspaces$card_types$test$run_test_loop(ch){
var c__57480__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_74294){
var state_val_74295 = (state_74294[(1)]);
if((state_val_74295 === (7))){
var inst_74290 = (state_74294[(2)]);
var state_74294__$1 = state_74294;
var statearr_74296_74643 = state_74294__$1;
(statearr_74296_74643[(2)] = inst_74290);

(statearr_74296_74643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74295 === (20))){
var inst_74273 = (state_74294[(7)]);
var inst_74281 = (state_74294[(2)]);
var inst_74282 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_74273,inst_74281);
var inst_74283 = cljs.test.clear_env_BANG_();
var inst_74284 = cljs.core.async.timeout((1));
var state_74294__$1 = (function (){var statearr_74297 = state_74294;
(statearr_74297[(8)] = inst_74282);

(statearr_74297[(9)] = inst_74283);

return statearr_74297;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74294__$1,(21),inst_74284);
} else {
if((state_val_74295 === (1))){
var state_74294__$1 = state_74294;
var statearr_74298_74644 = state_74294__$1;
(statearr_74298_74644[(2)] = null);

(statearr_74298_74644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74295 === (4))){
var inst_74249 = (state_74294[(10)]);
var inst_74249__$1 = (state_74294[(2)]);
var state_74294__$1 = (function (){var statearr_74299 = state_74294;
(statearr_74299[(10)] = inst_74249__$1);

return statearr_74299;
})();
if(cljs.core.truth_(inst_74249__$1)){
var statearr_74300_74645 = state_74294__$1;
(statearr_74300_74645[(1)] = (5));

} else {
var statearr_74301_74646 = state_74294__$1;
(statearr_74301_74646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74295 === (15))){
var inst_74249 = (state_74294[(10)]);
var state_74294__$1 = state_74294;
var statearr_74303_74647 = state_74294__$1;
(statearr_74303_74647[(2)] = inst_74249);

(statearr_74303_74647[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74295 === (21))){
var inst_74286 = (state_74294[(2)]);
var state_74294__$1 = (function (){var statearr_74304 = state_74294;
(statearr_74304[(11)] = inst_74286);

return statearr_74304;
})();
var statearr_74305_74648 = state_74294__$1;
(statearr_74305_74648[(2)] = null);

(statearr_74305_74648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74295 === (13))){
var inst_74264 = (state_74294[(2)]);
var state_74294__$1 = state_74294;
var statearr_74306_74649 = state_74294__$1;
(statearr_74306_74649[(2)] = inst_74264);

(statearr_74306_74649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74295 === (6))){
var state_74294__$1 = state_74294;
var statearr_74307_74650 = state_74294__$1;
(statearr_74307_74650[(2)] = null);

(statearr_74307_74650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74295 === (17))){
var inst_74276 = (state_74294[(12)]);
var inst_74276__$1 = (state_74294[(2)]);
var state_74294__$1 = (function (){var statearr_74308 = state_74294;
(statearr_74308[(12)] = inst_74276__$1);

return statearr_74308;
})();
if(cljs.core.truth_(inst_74276__$1)){
var statearr_74309_74651 = state_74294__$1;
(statearr_74309_74651[(1)] = (18));

} else {
var statearr_74310_74652 = state_74294__$1;
(statearr_74310_74652[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74295 === (3))){
var inst_74292 = (state_74294[(2)]);
var state_74294__$1 = state_74294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74294__$1,inst_74292);
} else {
if((state_val_74295 === (12))){
var state_74294__$1 = state_74294;
var statearr_74311_74653 = state_74294__$1;
(statearr_74311_74653[(2)] = false);

(statearr_74311_74653[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74295 === (2))){
var state_74294__$1 = state_74294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74294__$1,(4),ch);
} else {
if((state_val_74295 === (19))){
var inst_74279 = cljs.core.PersistentHashMap.EMPTY;
var state_74294__$1 = state_74294;
var statearr_74312_74654 = state_74294__$1;
(statearr_74312_74654[(2)] = inst_74279);

(statearr_74312_74654[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74295 === (11))){
var state_74294__$1 = state_74294;
var statearr_74313_74655 = state_74294__$1;
(statearr_74313_74655[(2)] = true);

(statearr_74313_74655[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74295 === (9))){
var state_74294__$1 = state_74294;
var statearr_74314_74656 = state_74294__$1;
(statearr_74314_74656[(2)] = false);

(statearr_74314_74656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74295 === (5))){
var inst_74249 = (state_74294[(10)]);
var inst_74253 = (inst_74249 == null);
var inst_74254 = cljs.core.not(inst_74253);
var state_74294__$1 = state_74294;
if(inst_74254){
var statearr_74315_74657 = state_74294__$1;
(statearr_74315_74657[(1)] = (8));

} else {
var statearr_74316_74658 = state_74294__$1;
(statearr_74316_74658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74295 === (14))){
var inst_74249 = (state_74294[(10)]);
var inst_74269 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_74249);
var state_74294__$1 = state_74294;
var statearr_74317_74659 = state_74294__$1;
(statearr_74317_74659[(2)] = inst_74269);

(statearr_74317_74659[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74295 === (16))){
var inst_74272 = (state_74294[(2)]);
var inst_74273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74272,new cljs.core.Keyword("nubank.workspaces.card-types.test","done","nubank.workspaces.card-types.test/done",1941530947));
var inst_74274 = nubank.workspaces.card_types.test.test_runner.cljs$core$IFn$_invoke$arity$1(inst_74272);
var state_74294__$1 = (function (){var statearr_74318 = state_74294;
(statearr_74318[(7)] = inst_74273);

return statearr_74318;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74294__$1,(17),inst_74274);
} else {
if((state_val_74295 === (10))){
var inst_74267 = (state_74294[(2)]);
var state_74294__$1 = state_74294;
if(cljs.core.truth_(inst_74267)){
var statearr_74319_74660 = state_74294__$1;
(statearr_74319_74660[(1)] = (14));

} else {
var statearr_74320_74661 = state_74294__$1;
(statearr_74320_74661[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74295 === (18))){
var inst_74276 = (state_74294[(12)]);
var state_74294__$1 = state_74294;
var statearr_74321_74662 = state_74294__$1;
(statearr_74321_74662[(2)] = inst_74276);

(statearr_74321_74662[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74295 === (8))){
var inst_74249 = (state_74294[(10)]);
var inst_74256 = inst_74249.cljs$lang$protocol_mask$partition0$;
var inst_74257 = (inst_74256 & (64));
var inst_74258 = inst_74249.cljs$core$ISeq$;
var inst_74259 = (cljs.core.PROTOCOL_SENTINEL === inst_74258);
var inst_74260 = ((inst_74257) || (inst_74259));
var state_74294__$1 = state_74294;
if(cljs.core.truth_(inst_74260)){
var statearr_74322_74663 = state_74294__$1;
(statearr_74322_74663[(1)] = (11));

} else {
var statearr_74323_74664 = state_74294__$1;
(statearr_74323_74664[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var nubank$workspaces$card_types$test$run_test_loop_$_state_machine__57129__auto__ = null;
var nubank$workspaces$card_types$test$run_test_loop_$_state_machine__57129__auto____0 = (function (){
var statearr_74324 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74324[(0)] = nubank$workspaces$card_types$test$run_test_loop_$_state_machine__57129__auto__);

(statearr_74324[(1)] = (1));

return statearr_74324;
});
var nubank$workspaces$card_types$test$run_test_loop_$_state_machine__57129__auto____1 = (function (state_74294){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_74294);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e74325){var ex__57132__auto__ = e74325;
var statearr_74326_74665 = state_74294;
(statearr_74326_74665[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_74294[(4)]))){
var statearr_74328_74666 = state_74294;
(statearr_74328_74666[(1)] = cljs.core.first((state_74294[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74667 = state_74294;
state_74294 = G__74667;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
nubank$workspaces$card_types$test$run_test_loop_$_state_machine__57129__auto__ = function(state_74294){
switch(arguments.length){
case 0:
return nubank$workspaces$card_types$test$run_test_loop_$_state_machine__57129__auto____0.call(this);
case 1:
return nubank$workspaces$card_types$test$run_test_loop_$_state_machine__57129__auto____1.call(this,state_74294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nubank$workspaces$card_types$test$run_test_loop_$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = nubank$workspaces$card_types$test$run_test_loop_$_state_machine__57129__auto____0;
nubank$workspaces$card_types$test$run_test_loop_$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = nubank$workspaces$card_types$test$run_test_loop_$_state_machine__57129__auto____1;
return nubank$workspaces$card_types$test$run_test_loop_$_state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_74329 = f__57481__auto__();
(statearr_74329[(6)] = c__57480__auto__);

return statearr_74329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));

return c__57480__auto__;
});
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.card_types !== 'undefined') && (typeof nubank.workspaces.card_types.test !== 'undefined') && (typeof nubank.workspaces.card_types.test.test_loop !== 'undefined')){
} else {
nubank.workspaces.card_types.test.test_loop = nubank.workspaces.card_types.test.run_test_loop(nubank.workspaces.card_types.test.test_channel);
}
/**
 * 
 */
nubank.workspaces.card_types.test.enqueue_test_run = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.card-types.test","enqueue-test-run","nubank.workspaces.card-types.test/enqueue-test-run",773053666,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.card-types.test","enqueue-test-run","nubank.workspaces.card-types.test/enqueue-test-run",773053666,null),(function (fulcro_mutation_env_symbol){
var _ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$card_types$test$action(p__74330){
var map__74331 = p__74330;
var map__74331__$1 = (((((!((map__74331 == null))))?(((((map__74331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74331):map__74331);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74331__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74331__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__74333_74668 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__74334_74669 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__74334_74669);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.card-types.test","enqueued?","nubank.workspaces.card-types.test/enqueued?",685909630),true,new cljs.core.Keyword("nubank.workspaces.card-types.test","done?","nubank.workspaces.card-types.test/done?",954754155),false], 0));
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__74333_74668);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__74336 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__74337 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__74337);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__74336);
}})], null);
}));
nubank.workspaces.card_types.test.run_card_tests_BANG_ = (function nubank$workspaces$card_types$test$run_card_tests_BANG_(test,app){
var forms = new cljs.core.Keyword("nubank.workspaces.card-types.test","test-forms","nubank.workspaces.card-types.test/test-forms",-1801638919).cljs$core$IFn$_invoke$arity$1(nubank.workspaces.data.card_definition(test));
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.card-types.test","enqueue-test-run","nubank.workspaces.card-types.test/enqueue-test-run",773053666,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-result-id","nubank.workspaces.card-types.test/test-result-id",-484504649),"singleton"], null)], null));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.card_types.test.test_channel,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("nubank.workspaces.card-types.test","type","nubank.workspaces.card-types.test/type",1829804331),new cljs.core.Keyword("nubank.workspaces.card-types.test","test-one","nubank.workspaces.card-types.test/test-one",-2018640132),new cljs.core.Keyword("nubank.workspaces.card-types.test","test","nubank.workspaces.card-types.test/test",-1720956764),test,new cljs.core.Keyword("nubank.workspaces.card-types.test","blocks","nubank.workspaces.card-types.test/blocks",-492982440),forms,new cljs.core.Keyword("nubank.workspaces.card-types.test","done","nubank.workspaces.card-types.test/done",1941530947),out,new cljs.core.Keyword("nubank.workspaces.card-types.test","app","nubank.workspaces.card-types.test/app",898613046),app], null));

return out;
});
nubank.workspaces.card_types.test.run_ns_tests_BANG_ = (function nubank$workspaces$card_types$test$run_ns_tests_BANG_(ns,app){
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.card-types.test","enqueue-test-run","nubank.workspaces.card-types.test/enqueue-test-run",773053666,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606),ns], null)], null));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.card_types.test.test_channel,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("nubank.workspaces.card-types.test","type","nubank.workspaces.card-types.test/type",1829804331),new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606),new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606),ns,new cljs.core.Keyword("nubank.workspaces.card-types.test","done","nubank.workspaces.card-types.test/done",1941530947),out,new cljs.core.Keyword("nubank.workspaces.card-types.test","app","nubank.workspaces.card-types.test/app",898613046),app], null));

return out;
});
nubank.workspaces.card_types.test.run_all_tests_BANG_ = (function nubank$workspaces$card_types$test$run_all_tests_BANG_(app){
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.card-types.test","enqueue-test-run","nubank.workspaces.card-types.test/enqueue-test-run",773053666,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","all-tests-run","nubank.workspaces.card-types.test/all-tests-run",1718316217),"singleton"], null)], null));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.card_types.test.test_channel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("nubank.workspaces.card-types.test","type","nubank.workspaces.card-types.test/type",1829804331),new cljs.core.Keyword("nubank.workspaces.card-types.test","test-all","nubank.workspaces.card-types.test/test-all",1141659084),new cljs.core.Keyword("nubank.workspaces.card-types.test","done","nubank.workspaces.card-types.test/done",1941530947),out,new cljs.core.Keyword("nubank.workspaces.card-types.test","app","nubank.workspaces.card-types.test/app",898613046),app], null));

return out;
});
nubank.workspaces.card_types.test.header_color = (function nubank$workspaces$card_types$test$header_color(p__74339,bg){
var map__74340 = p__74339;
var map__74340__$1 = (((((!((map__74340 == null))))?(((((map__74340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74340):map__74340);
var card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74340__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","card","nubank.workspaces.card-types.test/card",-206021745));
var G__74343_74670 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),bg], null);
var fexpr__74342_74671 = new cljs.core.Keyword("nubank.workspaces.model","set-card-header-style","nubank.workspaces.model/set-card-header-style",1976817478).cljs$core$IFn$_invoke$arity$1(card);
(fexpr__74342_74671.cljs$core$IFn$_invoke$arity$1 ? fexpr__74342_74671.cljs$core$IFn$_invoke$arity$1(G__74343_74670) : fexpr__74342_74671.call(null,G__74343_74670));

return null;
});

var options__55349__auto___74672 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".test-result",".test-result",1602346459),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 6px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".test-ns",".test-ns",-1067501222),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-start"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".test-ns-toolbar",".test-ns-toolbar",1659614933),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#404040",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"margin","margin",-995903681),"-10px -10px 10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".test-ns-container",".test-ns-container",-1639848098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".test-ns-var-header",".test-ns-var-header",306822108),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),nubank.workspaces.ui.core.color_dark_grey,new cljs.core.Keyword(null,"color","color",1011675173),"#fff",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Helvetica",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".code",".code",1254796539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre"], null)], null)], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$card_types$test$render_TestCSS(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var ___$1 = com.fulcrologic.fulcro.components.props(_);
return null;
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.card_types !== 'undefined') && (typeof nubank.workspaces.card_types.test !== 'undefined') && (typeof nubank.workspaces.card_types.test.TestCSS !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.card_types.test.TestCSS = (function nubank$workspaces$card_types$test$TestCSS(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___74673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___74672,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___74673)){
var init_state__55352__auto___74674 = temp__5751__auto___74673;
(this__55351__auto__.state = (function (){var obj74345 = ({"fulcro$state":(function (){var G__74346 = this__55351__auto__;
var G__74347 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___74674.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___74674.cljs$core$IFn$_invoke$arity$2(G__74346,G__74347) : init_state__55352__auto___74674.call(null,G__74346,G__74347));
})()});
return obj74345;
})());
} else {
(this__55351__auto__.state = (function (){var obj74349 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj74349;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.card_types.test.TestCSS,new cljs.core.Keyword("nubank.workspaces.card-types.test","TestCSS","nubank.workspaces.card-types.test/TestCSS",519018527),options__55349__auto___74672);
nubank.workspaces.card_types.test.css = (com.fulcrologic.fulcro_css.css.get_classnames.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro_css.css.get_classnames.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.card_types.test.TestCSS) : com.fulcrologic.fulcro_css.css.get_classnames.call(null,nubank.workspaces.card_types.test.TestCSS));
nubank.workspaces.card_types.fulcro3.add_component_css_BANG_(nubank.workspaces.card_types.test.TestCSS);
nubank.workspaces.card_types.test.try_pprint = (function nubank$workspaces$card_types$test$try_pprint(x){
try{var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__74352_74675 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__74353_74676 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__74354_74677 = true;
var _STAR_print_fn_STAR__temp_val__74355_74678 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__74354_74677);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__74355_74678);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__74353_74676);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__74352_74675);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
}catch (e74350){var _ = e74350;
return x;
}});
nubank.workspaces.card_types.test.print_code = (function nubank$workspaces$card_types$test$print_code(s){
var G__74356 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui.highlight","source","nubank.workspaces.ui.highlight/source",161213844),nubank.workspaces.card_types.test.try_pprint(s)], null);
return (nubank.workspaces.ui.highlight.highlight.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.highlight.highlight.cljs$core$IFn$_invoke$arity$1(G__74356) : nubank.workspaces.ui.highlight.highlight.call(null,G__74356));
});
nubank.workspaces.card_types.test.normalize_actual = (function nubank$workspaces$card_types$test$normalize_actual(p__74357){
var map__74358 = p__74357;
var map__74358__$1 = (((((!((map__74358 == null))))?(((((map__74358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74358):map__74358);
var props = map__74358__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74358__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74358__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
if(((cljs.core.sequential_QMARK_(expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(expected))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.first(expected))) && (cljs.core.sequential_QMARK_(actual)))){
var vec__74360 = cljs.core.second(actual);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74360,(0),null);
var expected__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74360,(1),null);
var actual__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74360,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"expected","expected",1583670997),expected__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"actual","actual",107306363),actual__$1], 0));
} else {
return props;
}
});

var options__55349__auto___74679 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function nubank$workspaces$card_types$test$build_raw_initial_state_STAR_(_){
return cljs.core.PersistentArrayMap.EMPTY;
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$card_types$test$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523),new cljs.core.Keyword(null,"message","message",-406056002)], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".test-result",".test-result",1602346459),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 6px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".compare-header",".compare-header",-55308651),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),nubank.workspaces.ui.core.font_helvetica,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null)], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$card_types$test$render_TestResult(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__74364 = com.fulcrologic.fulcro.components.props(this$);
var map__74364__$1 = (((((!((map__74364 == null))))?(((((map__74364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74364):map__74364);
var props = map__74364__$1;
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74364__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74364__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74364__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74364__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74364__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var color = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pass","pass",1574159993),type))?nubank.workspaces.ui.core.color_green_light:nubank.workspaces.ui.core.color_red_dark);
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".test-result",".test-result",1602346459),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"borderLeft","borderLeft",-1938358443),["5px solid ",color].join('')], null)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__74363_SHARP_){
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(p1__74363_SHARP_))], null),p1__74363_SHARP_], 0));
}),testing_contexts),(cljs.core.truth_((function (){var and__4115__auto__ = message;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.seq(testing_contexts));
} else {
return and__4115__auto__;
}
})())?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)], 0)):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pass","pass",1574159993),type)) && (cljs.core.not(cljs.core.seq(testing_contexts)))))?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected], 0))], 0)):null)),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pass","pass",1574159993),type))?(function (){var map__74367 = nubank.workspaces.card_types.test.normalize_actual(props);
var map__74367__$1 = (((((!((map__74367 == null))))?(((((map__74367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74367):map__74367);
var expected__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74367__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74367__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var vec__74368 = clojure.data.diff(expected__$1,actual__$1);
var extra = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74368,(0),null);
var missing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74368,(1),null);
var error_QMARK_ = (actual__$1 instanceof Error);
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".diff",".diff",-988191616),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".compare-header",".compare-header",-55308651),"Expected"], 0)),nubank.workspaces.card_types.test.print_code(expected__$1),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".compare-header",".compare-header",-55308651),"Actual"], 0)),nubank.workspaces.card_types.test.print_code(actual__$1),(((!(error_QMARK_)))?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(extra)?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".compare-header",".compare-header",-55308651),"Diff extra"], 0)):null),(cljs.core.truth_(extra)?nubank.workspaces.card_types.test.print_code(extra):null),(cljs.core.truth_(missing)?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".compare-header",".compare-header",-55308651),"Diff missing"], 0)):null),(cljs.core.truth_(missing)?nubank.workspaces.card_types.test.print_code(missing):null)], 0)):null)], 0));
})():null)], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.card_types !== 'undefined') && (typeof nubank.workspaces.card_types.test !== 'undefined') && (typeof nubank.workspaces.card_types.test.TestResult !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.card_types.test.TestResult = (function nubank$workspaces$card_types$test$TestResult(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___74680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___74679,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___74680)){
var init_state__55352__auto___74681 = temp__5751__auto___74680;
(this__55351__auto__.state = (function (){var obj74375 = ({"fulcro$state":(function (){var G__74376 = this__55351__auto__;
var G__74377 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___74681.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___74681.cljs$core$IFn$_invoke$arity$2(G__74376,G__74377) : init_state__55352__auto___74681.call(null,G__74376,G__74377));
})()});
return obj74375;
})());
} else {
(this__55351__auto__.state = (function (){var obj74379 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj74379;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.card_types.test.TestResult,new cljs.core.Keyword("nubank.workspaces.card-types.test","TestResult","nubank.workspaces.card-types.test/TestResult",-1164756468),options__55349__auto___74679);
nubank.workspaces.card_types.test.test_result = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.card_types.test.TestResult,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.hash,cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523),new cljs.core.Keyword(null,"message","message",-406056002)], 0)))], null));

var options__55349__auto___74682 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function nubank$workspaces$card_types$test$build_raw_initial_state_STAR_(_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-result-id","nubank.workspaces.card-types.test/test-result-id",-484504649),cljs.core.random_uuid()], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$card_types$test$ident_STAR_(this$,p__74381){
var map__74382 = p__74381;
var map__74382__$1 = (((((!((map__74382 == null))))?(((((map__74382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74382):map__74382);
var enqueued_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74382__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","enqueued?","nubank.workspaces.card-types.test/enqueued?",685909630));
var running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74382__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168));
var test_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74382__$1,new cljs.core.Keyword(null,"test-results","test-results",575566942));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-result-id","nubank.workspaces.card-types.test/test-result-id",-484504649),"singleton"], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$card_types$test$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","enqueued?","nubank.workspaces.card-types.test/enqueued?",685909630),new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168),new cljs.core.Keyword("nubank.workspaces.card-types.test","done?","nubank.workspaces.card-types.test/done?",954754155),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test-results","test-results",575566942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.card-types.test","summary","nubank.workspaces.card-types.test/summary",1068670767),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.card_types.test.TestResult)], null)], null)], null)], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$card_types$test$render_SingleTest(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__74384 = com.fulcrologic.fulcro.components.props(this$);
var map__74384__$1 = (((((!((map__74384 == null))))?(((((map__74384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74384):map__74384);
var enqueued_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74384__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","enqueued?","nubank.workspaces.card-types.test/enqueued?",685909630));
var running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74384__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168));
var test_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74384__$1,new cljs.core.Keyword(null,"test-results","test-results",575566942));
var map__74386 = test_results;
var map__74386__$1 = (((((!((map__74386 == null))))?(((((map__74386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74386):map__74386);
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74386__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","summary","nubank.workspaces.card-types.test/summary",1068670767));
var header_color = (function (p1__74380_SHARP_){
return nubank.workspaces.card_types.test.header_color(com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(this$),p1__74380_SHARP_);
});
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(enqueued_QMARK_)?(function (){
header_color(nubank.workspaces.ui.core.color_yellow);

return "Waiting to run...";
})()
:(cljs.core.truth_(running_QMARK_)?(function (){
header_color(nubank.workspaces.ui.core.color_yellow);

return "Running...";
})()
:((nubank.workspaces.card_types.test.test_success_QMARK_(test_results))?(function (){
header_color(nubank.workspaces.ui.core.color_mint_green);

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.card_types.test.test_result,summary);
})()
:(function (){
header_color(nubank.workspaces.ui.core.color_red_dark);

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.card_types.test.test_result,summary);
})()

)))], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.card_types !== 'undefined') && (typeof nubank.workspaces.card_types.test !== 'undefined') && (typeof nubank.workspaces.card_types.test.SingleTest !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.card_types.test.SingleTest = (function nubank$workspaces$card_types$test$SingleTest(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___74683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___74682,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___74683)){
var init_state__55352__auto___74684 = temp__5751__auto___74683;
(this__55351__auto__.state = (function (){var obj74389 = ({"fulcro$state":(function (){var G__74390 = this__55351__auto__;
var G__74391 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___74684.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___74684.cljs$core$IFn$_invoke$arity$2(G__74390,G__74391) : init_state__55352__auto___74684.call(null,G__74390,G__74391));
})()});
return obj74389;
})());
} else {
(this__55351__auto__.state = (function (){var obj74393 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj74393;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.card_types.test.SingleTest,new cljs.core.Keyword("nubank.workspaces.card-types.test","SingleTest","nubank.workspaces.card-types.test/SingleTest",501788579),options__55349__auto___74682);
nubank.workspaces.card_types.test.test_card_init = (function nubank$workspaces$card_types$test$test_card_init(card,test){
var map__74394 = nubank.workspaces.card_types.fulcro3.fulcro_card_init(card,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root","nubank.workspaces.card-types.fulcro3/root",-1183530530),nubank.workspaces.card_types.test.SingleTest,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","app","nubank.workspaces.card-types.fulcro3/app",-1434213974),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.card-types.test","card","nubank.workspaces.card-types.test/card",-206021745),card], null),new cljs.core.Keyword(null,"client-did-mount","client-did-mount",-958324226),(function (app){
return nubank.workspaces.card_types.test.run_card_tests_BANG_(test,app);
})], null)], null));
var map__74394__$1 = (((((!((map__74394 == null))))?(((((map__74394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74394):map__74394);
var card__$1 = map__74394__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74394__$1,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","app","nubank.workspaces.card-types.fulcro3/app",-1434213974));
var run_tests = (function (){
return nubank.workspaces.card_types.test.run_card_tests_BANG_(test,app);
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(card__$1,new cljs.core.Keyword("nubank.workspaces.model","refresh","nubank.workspaces.model/refresh",-816174567),(function (_){
return run_tests();
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.model","render-toolbar","nubank.workspaces.model/render-toolbar",-1738138937),(function (){
var state = com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(app);
var map__74396 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-result-id","nubank.workspaces.card-types.test/test-result-id",-484504649),"singleton"], null));
var map__74396__$1 = (((((!((map__74396 == null))))?(((((map__74396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74396):map__74396);
var running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74396__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168));
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74396__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","done?","nubank.workspaces.card-types.test/done?",954754155));
var test_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74396__$1,new cljs.core.Keyword(null,"test-results","test-results",575566942));
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null),(cljs.core.truth_(running_QMARK_)?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"12px"], null)], null),"Running..."], 0)):(cljs.core.truth_(done_QMARK_)?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"12px"], null)], null),"Finished in ",new cljs.core.Keyword("nubank.workspaces.card-types.test","duration","nubank.workspaces.card-types.test/duration",-48491221).cljs$core$IFn$_invoke$arity$1(test_results),"ms"], 0)):null)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null)], 0)),(function (){var G__74398 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),run_tests], null);
var G__74399 = "Rerun tests";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__74398,G__74399) : nubank.workspaces.ui.core.button.call(null,G__74398,G__74399));
})()], 0));
})], 0));
});
nubank.workspaces.card_types.test.test_card = (function nubank$workspaces$card_types$test$test_card(card_id,forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-forms","nubank.workspaces.card-types.test/test-forms",-1801638919),forms,new cljs.core.Keyword("nubank.workspaces.model","align","nubank.workspaces.model/align",259166470),new cljs.core.Keyword("nubank.workspaces.model","align-top-flex","nubank.workspaces.model/align-top-flex",1683254631),new cljs.core.Keyword("nubank.workspaces.model","test?","nubank.workspaces.model/test?",993719827),true,new cljs.core.Keyword("nubank.workspaces.model","init","nubank.workspaces.model/init",-1281528358),(function (p1__74400_SHARP_){
return nubank.workspaces.card_types.test.test_card_init(p1__74400_SHARP_,card_id);
})], null);
});

var options__55349__auto___74685 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function nubank$workspaces$card_types$test$build_raw_initial_state_STAR_(_){
return cljs.core.PersistentArrayMap.EMPTY;
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$card_types$test$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-var","nubank.workspaces.card-types.test/test-var",-988438658),new cljs.core.Keyword("nubank.workspaces.card-types.test","test-var","nubank.workspaces.card-types.test/test-var",-988438658).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$card_types$test$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-var","nubank.workspaces.card-types.test/test-var",-988438658),new cljs.core.Keyword("nubank.workspaces.card-types.test","disabled?","nubank.workspaces.card-types.test/disabled?",-1909194278),new cljs.core.Keyword("nubank.workspaces.card-types.test","success?","nubank.workspaces.card-types.test/success?",-5502341),new cljs.core.Keyword("nubank.workspaces.card-types.test","duration","nubank.workspaces.card-types.test/duration",-48491221),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test-results","test-results",575566942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.card-types.test","summary","nubank.workspaces.card-types.test/summary",1068670767),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.card_types.test.TestResult)], null)], null)], null)], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".test-var-container",".test-var-container",43246369),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".test-var-header",".test-var-header",1667227497),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),nubank.workspaces.ui.core.color_dark_grey,new cljs.core.Keyword(null,"color","color",1011675173),"#fff",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Helvetica",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 5px",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".disabled",".disabled",564561870),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null)], null),new cljs.core.Keyword(null,"css-include","css-include",559023012),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nubank.workspaces.card_types.test.TestResult], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$card_types$test$render_VarTestBlock(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__74401 = com.fulcrologic.fulcro.components.props(this$);
var map__74401__$1 = (((((!((map__74401 == null))))?(((((map__74401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74401):map__74401);
var test_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74401__$1,new cljs.core.Keyword(null,"test-results","test-results",575566942));
var test_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74401__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-var","nubank.workspaces.card-types.test/test-var",-988438658));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74401__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","disabled?","nubank.workspaces.card-types.test/disabled?",-1909194278));
var bg_color = (cljs.core.truth_(disabled_QMARK_)?nubank.workspaces.ui.core.color_light_grey:((cljs.core.seq(test_results))?((nubank.workspaces.card_types.test.test_success_QMARK_(test_results))?nubank.workspaces.ui.core.color_green_light:nubank.workspaces.ui.core.color_red_dark):nubank.workspaces.ui.core.color_yellow
));
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".test-var-container",".test-var-container",43246369),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".test-var-header",".test-var-header",1667227497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"borderLeft","borderLeft",-1938358443),["5px solid ",bg_color].join('')], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(disabled_QMARK_)?new cljs.core.Keyword(null,".disabled",".disabled",564561870):null)], null)], null),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),cljs.core.name(test_var)], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro_css.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.not(disabled_QMARK_),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (){
return com.fulcrologic.fulcro.mutations.toggle_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.card-types.test","disabled?","nubank.workspaces.card-types.test/disabled?",-1909194278));
})], null)], 0))], 0))], 0)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.card_types.test.test_result,new cljs.core.Keyword("nubank.workspaces.card-types.test","summary","nubank.workspaces.card-types.test/summary",1068670767).cljs$core$IFn$_invoke$arity$1(test_results))], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.card_types !== 'undefined') && (typeof nubank.workspaces.card_types.test !== 'undefined') && (typeof nubank.workspaces.card_types.test.VarTestBlock !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.card_types.test.VarTestBlock = (function nubank$workspaces$card_types$test$VarTestBlock(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___74686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___74685,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___74686)){
var init_state__55352__auto___74687 = temp__5751__auto___74686;
(this__55351__auto__.state = (function (){var obj74404 = ({"fulcro$state":(function (){var G__74405 = this__55351__auto__;
var G__74406 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___74687.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___74687.cljs$core$IFn$_invoke$arity$2(G__74405,G__74406) : init_state__55352__auto___74687.call(null,G__74405,G__74406));
})()});
return obj74404;
})());
} else {
(this__55351__auto__.state = (function (){var obj74408 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj74408;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.card_types.test.VarTestBlock,new cljs.core.Keyword("nubank.workspaces.card-types.test","VarTestBlock","nubank.workspaces.card-types.test/VarTestBlock",1567525420),options__55349__auto___74685);
nubank.workspaces.card_types.test.var_test_block = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.card_types.test.VarTestBlock,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("nubank.workspaces.card-types.test","test-var","nubank.workspaces.card-types.test/test-var",-988438658)], null));
nubank.workspaces.card_types.test.runnable_status_color = (function nubank$workspaces$card_types$test$runnable_status_color(p__74409){
var map__74410 = p__74409;
var map__74410__$1 = (((((!((map__74410 == null))))?(((((map__74410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74410):map__74410);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74410__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","disabled?","nubank.workspaces.card-types.test/disabled?",-1909194278));
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74410__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","done?","nubank.workspaces.card-types.test/done?",954754155));
var running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74410__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168));
var enqueued_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74410__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","enqueued?","nubank.workspaces.card-types.test/enqueued?",685909630));
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74410__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","success?","nubank.workspaces.card-types.test/success?",-5502341));
if(cljs.core.truth_(disabled_QMARK_)){
return nubank.workspaces.ui.core.color_light_grey;
} else {
if(cljs.core.truth_(done_QMARK_)){
if(cljs.core.truth_(success_QMARK_)){
return nubank.workspaces.ui.core.color_mint_green;
} else {
return nubank.workspaces.ui.core.color_red_dark;
}
} else {
if(cljs.core.truth_(running_QMARK_)){
return nubank.workspaces.ui.core.color_yellow;
} else {
if(cljs.core.truth_(enqueued_QMARK_)){
return nubank.workspaces.ui.core.color_yellow;
} else {
return null;
}
}
}
}
});

var options__55349__auto___74688 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function nubank$workspaces$card_types$test$build_raw_initial_state_STAR_(ns){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("nubank.workspaces.card-types.test","enqueued?","nubank.workspaces.card-types.test/enqueued?",685909630),false,new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168),false,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606),ns,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-vars","nubank.workspaces.card-types.test/test-vars",1606066379),cljs.core.PersistentVector.EMPTY], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$card_types$test$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606),new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$card_types$test$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606),new cljs.core.Keyword("nubank.workspaces.card-types.test","enqueued?","nubank.workspaces.card-types.test/enqueued?",685909630),new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168),new cljs.core.Keyword("nubank.workspaces.card-types.test","success?","nubank.workspaces.card-types.test/success?",-5502341),new cljs.core.Keyword("nubank.workspaces.card-types.test","done?","nubank.workspaces.card-types.test/done?",954754155),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242),new cljs.core.Keyword("nubank.workspaces.card-types.test","duration","nubank.workspaces.card-types.test/duration",-48491221),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-vars","nubank.workspaces.card-types.test/test-vars",1606066379),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.card_types.test.VarTestBlock)], null)], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".test-ns",".test-ns",-1067501222),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-start"], null)], null)], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$card_types$test$render_NSTestGroup(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__74413 = com.fulcrologic.fulcro.components.props(this$);
var map__74413__$1 = (((((!((map__74413 == null))))?(((((map__74413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74413):map__74413);
var props = map__74413__$1;
var test_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74413__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-vars","nubank.workspaces.card-types.test/test-vars",1606066379));
var header_color = (function (p1__74412_SHARP_){
return nubank.workspaces.card_types.test.header_color(com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(this$),p1__74412_SHARP_);
});
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".test-ns",".test-ns",-1067501222),header_color(nubank.workspaces.card_types.test.runnable_status_color(props)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.card_types.test.var_test_block,test_vars)], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.card_types !== 'undefined') && (typeof nubank.workspaces.card_types.test !== 'undefined') && (typeof nubank.workspaces.card_types.test.NSTestGroup !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.card_types.test.NSTestGroup = (function nubank$workspaces$card_types$test$NSTestGroup(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___74689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___74688,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___74689)){
var init_state__55352__auto___74690 = temp__5751__auto___74689;
(this__55351__auto__.state = (function (){var obj74416 = ({"fulcro$state":(function (){var G__74417 = this__55351__auto__;
var G__74418 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___74690.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___74690.cljs$core$IFn$_invoke$arity$2(G__74417,G__74418) : init_state__55352__auto___74690.call(null,G__74417,G__74418));
})()});
return obj74416;
})());
} else {
(this__55351__auto__.state = (function (){var obj74420 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj74420;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.card_types.test.NSTestGroup,new cljs.core.Keyword("nubank.workspaces.card-types.test","NSTestGroup","nubank.workspaces.card-types.test/NSTestGroup",1383699718),options__55349__auto___74688);

var options__55349__auto___74691 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function nubank$workspaces$card_types$test$build_raw_initial_state_STAR_(ns){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("nubank.workspaces.card-types.test","enqueued?","nubank.workspaces.card-types.test/enqueued?",685909630),false,new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168),false,new cljs.core.Keyword("nubank.workspaces.card-types.test","collapsed?","nubank.workspaces.card-types.test/collapsed?",1979212573),true,new cljs.core.Keyword("nubank.workspaces.card-types.test","disabled?","nubank.workspaces.card-types.test/disabled?",-1909194278),false,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606),ns,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-vars","nubank.workspaces.card-types.test/test-vars",1606066379),cljs.core.PersistentVector.EMPTY], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$card_types$test$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606),new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$card_types$test$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606),new cljs.core.Keyword("nubank.workspaces.card-types.test","enqueued?","nubank.workspaces.card-types.test/enqueued?",685909630),new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168),new cljs.core.Keyword("nubank.workspaces.card-types.test","success?","nubank.workspaces.card-types.test/success?",-5502341),new cljs.core.Keyword("nubank.workspaces.card-types.test","done?","nubank.workspaces.card-types.test/done?",954754155),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242),new cljs.core.Keyword("nubank.workspaces.card-types.test","duration","nubank.workspaces.card-types.test/duration",-48491221),new cljs.core.Keyword("nubank.workspaces.card-types.test","collapsed?","nubank.workspaces.card-types.test/collapsed?",1979212573),new cljs.core.Keyword("nubank.workspaces.card-types.test","disabled?","nubank.workspaces.card-types.test/disabled?",-1909194278),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-vars","nubank.workspaces.card-types.test/test-vars",1606066379),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.card_types.test.VarTestBlock)], null)], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".test-ns",".test-ns",-1067501222),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-start"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".test-ns-header",".test-ns-header",-1984373973),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),"#404040",new cljs.core.Keyword(null,"color","color",1011675173),"#fff",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Helvetica",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 5px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".disabled",".disabled",564561870),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".status",".status",1727913362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin","margin",-995903681),"-4px 6px -4px -5px",new cljs.core.Keyword(null,"width","width",-384071477),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null)], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$card_types$test$render_AllTestNSTestGroup(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__74421 = com.fulcrologic.fulcro.components.props(this$);
var map__74421__$1 = (((((!((map__74421 == null))))?(((((map__74421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74421):map__74421);
var props = map__74421__$1;
var test_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74421__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606));
var test_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74421__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-vars","nubank.workspaces.card-types.test/test-vars",1606066379));
var collapsed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74421__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","collapsed?","nubank.workspaces.card-types.test/collapsed?",1979212573));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74421__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","disabled?","nubank.workspaces.card-types.test/disabled?",-1909194278));
var map__74422 = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__74422__$1 = (((((!((map__74422 == null))))?(((((map__74422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74422):map__74422);
var set_header_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74422__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","set-header?","nubank.workspaces.card-types.test/set-header?",-659518583),true);
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".test-ns",".test-ns",-1067501222),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".test-ns-header",".test-ns-header",-1984373973),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(disabled_QMARK_)?new cljs.core.Keyword(null,".disabled",".disabled",564561870):null)], null)], null),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".status",".status",1727913362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),nubank.workspaces.card_types.test.runnable_status_color(props)], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.mutations.toggle_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.card-types.test","collapsed?","nubank.workspaces.card-types.test/collapsed?",1979212573));
})], null)], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),cljs.core.str.cljs$core$IFn$_invoke$arity$1(test_ns)], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro_css.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.not(disabled_QMARK_),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (){
return com.fulcrologic.fulcro.mutations.toggle_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.card-types.test","disabled?","nubank.workspaces.card-types.test/disabled?",-1909194278));
})], null)], 0))], 0))], 0)),((cljs.core.not(collapsed_QMARK_))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.card_types.test.var_test_block,test_vars):null)], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.card_types !== 'undefined') && (typeof nubank.workspaces.card_types.test !== 'undefined') && (typeof nubank.workspaces.card_types.test.AllTestNSTestGroup !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.card_types.test.AllTestNSTestGroup = (function nubank$workspaces$card_types$test$AllTestNSTestGroup(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___74692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___74691,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___74692)){
var init_state__55352__auto___74693 = temp__5751__auto___74692;
(this__55351__auto__.state = (function (){var obj74426 = ({"fulcro$state":(function (){var G__74427 = this__55351__auto__;
var G__74428 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___74693.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___74693.cljs$core$IFn$_invoke$arity$2(G__74427,G__74428) : init_state__55352__auto___74693.call(null,G__74427,G__74428));
})()});
return obj74426;
})());
} else {
(this__55351__auto__.state = (function (){var obj74430 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj74430;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.card_types.test.AllTestNSTestGroup,new cljs.core.Keyword("nubank.workspaces.card-types.test","AllTestNSTestGroup","nubank.workspaces.card-types.test/AllTestNSTestGroup",496788848),options__55349__auto___74691);
nubank.workspaces.card_types.test.all_test_ns_test_group = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.card_types.test.AllTestNSTestGroup,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606)], null));

var options__55349__auto___74694 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function nubank$workspaces$card_types$test$build_raw_initial_state_STAR_(_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("nubank.workspaces.card-types.test","enqueued?","nubank.workspaces.card-types.test/enqueued?",685909630),false,new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168),false,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-namespaces","nubank.workspaces.card-types.test/test-namespaces",883297667),cljs.core.PersistentVector.EMPTY], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$card_types$test$ident_STAR_(this$,p__74432){
var map__74433 = p__74432;
var map__74433__$1 = (((((!((map__74433 == null))))?(((((map__74433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74433):map__74433);
var test_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74433__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-namespaces","nubank.workspaces.card-types.test/test-namespaces",883297667));
var enqueued_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74433__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","enqueued?","nubank.workspaces.card-types.test/enqueued?",685909630));
var running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74433__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168));
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74433__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","done?","nubank.workspaces.card-types.test/done?",954754155));
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74433__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","success?","nubank.workspaces.card-types.test/success?",-5502341));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","all-tests-run","nubank.workspaces.card-types.test/all-tests-run",1718316217),"singleton"], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$card_types$test$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","enqueued?","nubank.workspaces.card-types.test/enqueued?",685909630),new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168),new cljs.core.Keyword("nubank.workspaces.card-types.test","done?","nubank.workspaces.card-types.test/done?",954754155),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242),new cljs.core.Keyword("nubank.workspaces.card-types.test","success?","nubank.workspaces.card-types.test/success?",-5502341),new cljs.core.Keyword("nubank.workspaces.card-types.test","duration","nubank.workspaces.card-types.test/duration",-48491221),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-namespaces","nubank.workspaces.card-types.test/test-namespaces",883297667),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.card_types.test.AllTestNSTestGroup)], null)], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".test-ns",".test-ns",-1067501222),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-start"], null)], null)], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$card_types$test$render_AllTests(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__74435 = com.fulcrologic.fulcro.components.props(this$);
var map__74435__$1 = (((((!((map__74435 == null))))?(((((map__74435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74435):map__74435);
var test_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74435__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","test-namespaces","nubank.workspaces.card-types.test/test-namespaces",883297667));
var enqueued_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74435__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","enqueued?","nubank.workspaces.card-types.test/enqueued?",685909630));
var running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74435__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168));
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74435__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","done?","nubank.workspaces.card-types.test/done?",954754155));
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74435__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","success?","nubank.workspaces.card-types.test/success?",-5502341));
var header_color = (function (p1__74431_SHARP_){
return nubank.workspaces.card_types.test.header_color(com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(this$),p1__74431_SHARP_);
});
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".test-ns",".test-ns",-1067501222),(cljs.core.truth_(done_QMARK_)?header_color((cljs.core.truth_(success_QMARK_)?nubank.workspaces.ui.core.color_mint_green:nubank.workspaces.ui.core.color_red_dark)):(cljs.core.truth_(running_QMARK_)?header_color(nubank.workspaces.ui.core.color_yellow):(cljs.core.truth_(enqueued_QMARK_)?header_color(nubank.workspaces.ui.core.color_yellow):null))),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.card_types.test.all_test_ns_test_group,test_namespaces)], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.card_types !== 'undefined') && (typeof nubank.workspaces.card_types.test !== 'undefined') && (typeof nubank.workspaces.card_types.test.AllTests !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.card_types.test.AllTests = (function nubank$workspaces$card_types$test$AllTests(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___74695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___74694,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___74695)){
var init_state__55352__auto___74696 = temp__5751__auto___74695;
(this__55351__auto__.state = (function (){var obj74438 = ({"fulcro$state":(function (){var G__74439 = this__55351__auto__;
var G__74440 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___74696.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___74696.cljs$core$IFn$_invoke$arity$2(G__74439,G__74440) : init_state__55352__auto___74696.call(null,G__74439,G__74440));
})()});
return obj74438;
})());
} else {
(this__55351__auto__.state = (function (){var obj74442 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj74442;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.card_types.test.AllTests,new cljs.core.Keyword("nubank.workspaces.card-types.test","AllTests","nubank.workspaces.card-types.test/AllTests",4492131),options__55349__auto___74694);
nubank.workspaces.card_types.fulcro3.add_component_css_BANG_(nubank.workspaces.card_types.test.AllTests);
nubank.workspaces.card_types.test.test_ns_card_init = (function nubank$workspaces$card_types$test$test_ns_card_init(card,test_ns){
var map__74443 = nubank.workspaces.card_types.fulcro3.fulcro_card_init(card,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root","nubank.workspaces.card-types.fulcro3/root",-1183530530),nubank.workspaces.card_types.test.NSTestGroup,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","initial-state","nubank.workspaces.card-types.fulcro3/initial-state",-75742905),test_ns,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","app","nubank.workspaces.card-types.fulcro3/app",-1434213974),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.card-types.test","card","nubank.workspaces.card-types.test/card",-206021745),card], null),new cljs.core.Keyword(null,"client-did-mount","client-did-mount",-958324226),(function (app){
return nubank.workspaces.card_types.test.run_ns_tests_BANG_(test_ns,app);
})], null)], null));
var map__74443__$1 = (((((!((map__74443 == null))))?(((((map__74443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74443):map__74443);
var card__$1 = map__74443__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74443__$1,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","app","nubank.workspaces.card-types.fulcro3/app",-1434213974));
var run_tests = (function (){
return nubank.workspaces.card_types.test.run_ns_tests_BANG_(test_ns,app);
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(card__$1,new cljs.core.Keyword("nubank.workspaces.model","refresh","nubank.workspaces.model/refresh",-816174567),(function (_){
return run_tests();
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.model","render-toolbar","nubank.workspaces.model/render-toolbar",-1738138937),(function (){
var state = com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(app);
var map__74445 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","test-ns","nubank.workspaces.card-types.test/test-ns",-120374606),test_ns], null));
var map__74445__$1 = (((((!((map__74445 == null))))?(((((map__74445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74445):map__74445);
var running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74445__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168));
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74445__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","done?","nubank.workspaces.card-types.test/done?",954754155));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74445__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","duration","nubank.workspaces.card-types.test/duration",-48491221));
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null),(cljs.core.truth_(running_QMARK_)?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"12px"], null)], null),"Running..."], 0)):(cljs.core.truth_(done_QMARK_)?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"12px"], null)], null),"Finished in ",duration,"ms"], 0)):null)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null)], 0)),(function (){var G__74447 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),run_tests], null);
var G__74448 = "Rerun tests";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__74447,G__74448) : nubank.workspaces.ui.core.button.call(null,G__74447,G__74448));
})()], 0));
})], 0));
});
nubank.workspaces.card_types.test.test_ns_card = (function nubank$workspaces$card_types$test$test_ns_card(test_ns){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("nubank.workspaces.model","test?","nubank.workspaces.model/test?",993719827),true,new cljs.core.Keyword("nubank.workspaces.model","card-unlisted?","nubank.workspaces.model/card-unlisted?",-302030555),true,new cljs.core.Keyword("nubank.workspaces.model","align","nubank.workspaces.model/align",259166470),new cljs.core.Keyword("nubank.workspaces.model","align-top-flex","nubank.workspaces.model/align-top-flex",1683254631),new cljs.core.Keyword("nubank.workspaces.model","init","nubank.workspaces.model/init",-1281528358),(function (p1__74449_SHARP_){
return nubank.workspaces.card_types.test.test_ns_card_init(p1__74449_SHARP_,test_ns);
}),new cljs.core.Keyword("nubank.workspaces.model","card-width","nubank.workspaces.model/card-width",-1929280730),(4),new cljs.core.Keyword("nubank.workspaces.model","card-height","nubank.workspaces.model/card-height",1579539064),(15)], null);
});
nubank.workspaces.card_types.test.all_tests_card_init = (function nubank$workspaces$card_types$test$all_tests_card_init(card){
var map__74450 = nubank.workspaces.card_types.fulcro3.fulcro_card_init(card,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root","nubank.workspaces.card-types.fulcro3/root",-1183530530),nubank.workspaces.card_types.test.AllTests,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","app","nubank.workspaces.card-types.fulcro3/app",-1434213974),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.card-types.test","card","nubank.workspaces.card-types.test/card",-206021745),card], null),new cljs.core.Keyword(null,"client-did-mount","client-did-mount",-958324226),(function (app){
return nubank.workspaces.card_types.test.run_all_tests_BANG_(app);
})], null)], null));
var map__74450__$1 = (((((!((map__74450 == null))))?(((((map__74450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74450):map__74450);
var card__$1 = map__74450__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74450__$1,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","app","nubank.workspaces.card-types.fulcro3/app",-1434213974));
var run_tests = (function (){
return nubank.workspaces.card_types.test.run_all_tests_BANG_(app);
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(card__$1,new cljs.core.Keyword("nubank.workspaces.model","refresh","nubank.workspaces.model/refresh",-816174567),(function (_){
return run_tests();
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.model","render-toolbar","nubank.workspaces.model/render-toolbar",-1738138937),(function (){
var state = com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(app);
var map__74452 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.card-types.test","all-tests-run","nubank.workspaces.card-types.test/all-tests-run",1718316217),"singleton"], null));
var map__74452__$1 = (((((!((map__74452 == null))))?(((((map__74452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74452):map__74452);
var running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74452__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","running?","nubank.workspaces.card-types.test/running?",1503700168));
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74452__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","done?","nubank.workspaces.card-types.test/done?",954754155));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74452__$1,new cljs.core.Keyword("nubank.workspaces.card-types.test","duration","nubank.workspaces.card-types.test/duration",-48491221));
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null),(cljs.core.truth_(running_QMARK_)?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"12px"], null)], null),"Running..."], 0)):(cljs.core.truth_(done_QMARK_)?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"12px"], null)], null),"Finished in ",duration,"ms"], 0)):null)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null)], 0)),(function (){var G__74454 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),run_tests], null);
var G__74455 = "Rerun tests";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__74454,G__74455) : nubank.workspaces.ui.core.button.call(null,G__74454,G__74455));
})()], 0));
})], 0));
});
nubank.workspaces.card_types.test.all_tests_card = (function nubank$workspaces$card_types$test$all_tests_card(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("nubank.workspaces.model","test?","nubank.workspaces.model/test?",993719827),true,new cljs.core.Keyword("nubank.workspaces.model","card-unlisted?","nubank.workspaces.model/card-unlisted?",-302030555),true,new cljs.core.Keyword("nubank.workspaces.model","align","nubank.workspaces.model/align",259166470),new cljs.core.Keyword("nubank.workspaces.model","align-top-flex","nubank.workspaces.model/align-top-flex",1683254631),new cljs.core.Keyword("nubank.workspaces.model","init","nubank.workspaces.model/init",-1281528358),nubank.workspaces.card_types.test.all_tests_card_init,new cljs.core.Keyword("nubank.workspaces.model","card-width","nubank.workspaces.model/card-width",-1929280730),(4),new cljs.core.Keyword("nubank.workspaces.model","card-height","nubank.workspaces.model/card-height",1579539064),(15)], null);
});

//# sourceMappingURL=nubank.workspaces.card_types.test.js.map
