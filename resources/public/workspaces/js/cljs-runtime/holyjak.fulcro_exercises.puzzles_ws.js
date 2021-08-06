goog.provide('holyjak.fulcro_exercises.puzzles_ws');
/**
 * 
 */
holyjak.fulcro_exercises.puzzles_ws.toggle_color = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("holyjak.fulcro-exercises.puzzles-ws","toggle-color","holyjak.fulcro-exercises.puzzles-ws/toggle-color",-753416169,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("holyjak.fulcro-exercises.puzzles-ws","toggle-color","holyjak.fulcro-exercises.puzzles-ws/toggle-color",-753416169,null),(function (fulcro_mutation_env_symbol){
var _ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function holyjak$fulcro_exercises$puzzles_ws$action(p__74928){
var map__74929 = p__74928;
var map__74929__$1 = (((((!((map__74929 == null))))?(((((map__74929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74929):map__74929);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74929__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__74931_74946 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__74932_74947 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__74932_74947);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword("ui","red?","ui/red?",-1487148318),cljs.core.not);
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__74931_74946);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__74933 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__74934 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__74934);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__74933);
}})], null);
}));

var options__55349__auto___74948 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function holyjak$fulcro_exercises$puzzles_ws$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","red?","ui/red?",-1487148318)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function holyjak$fulcro_exercises$puzzles_ws$ident_STAR_(this$,p__74935){
var map__74936 = p__74935;
var map__74936__$1 = (((((!((map__74936 == null))))?(((((map__74936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74936):map__74936);
var red_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74936__$1,new cljs.core.Keyword("ui","red?","ui/red?",-1487148318));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword(null,"ColorChangingSquare","ColorChangingSquare",-1753036510)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function holyjak$fulcro_exercises$puzzles_ws$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function holyjak$fulcro_exercises$puzzles_ws$render_ColorChangingSquare(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__74938 = com.fulcrologic.fulcro.components.props(this$);
var map__74938__$1 = (((((!((map__74938 == null))))?(((((map__74938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74938):map__74938);
var red_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74938__$1,new cljs.core.Keyword("ui","red?","ui/red?",-1487148318));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(red_QMARK_)?"red":"blue")], null)], null),"Hello!",com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,(holyjak.fulcro_exercises.puzzles_ws.toggle_color.cljs$core$IFn$_invoke$arity$0 ? holyjak.fulcro_exercises.puzzles_ws.toggle_color.cljs$core$IFn$_invoke$arity$0() : holyjak.fulcro_exercises.puzzles_ws.toggle_color.call(null)));
})], null),["Make ",(cljs.core.truth_(red_QMARK_)?"blue":"red")].join('')], null),null)], null),null);
}));
})], null);
if((typeof holyjak !== 'undefined') && (typeof holyjak.fulcro_exercises !== 'undefined') && (typeof holyjak.fulcro_exercises.puzzles_ws !== 'undefined') && (typeof holyjak.fulcro_exercises.puzzles_ws.ColorChangingSquare !== 'undefined')){
} else {
/**
 * @constructor
 */
holyjak.fulcro_exercises.puzzles_ws.ColorChangingSquare = (function holyjak$fulcro_exercises$puzzles_ws$ColorChangingSquare(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___74949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___74948,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___74949)){
var init_state__55352__auto___74950 = temp__5751__auto___74949;
(this__55351__auto__.state = (function (){var obj74941 = ({"fulcro$state":(function (){var G__74942 = this__55351__auto__;
var G__74943 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___74950.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___74950.cljs$core$IFn$_invoke$arity$2(G__74942,G__74943) : init_state__55352__auto___74950.call(null,G__74942,G__74943));
})()});
return obj74941;
})());
} else {
(this__55351__auto__.state = (function (){var obj74945 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj74945;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(holyjak.fulcro_exercises.puzzles_ws.ColorChangingSquare,new cljs.core.Keyword("holyjak.fulcro-exercises.puzzles-ws","ColorChangingSquare","holyjak.fulcro-exercises.puzzles-ws/ColorChangingSquare",1870917413),options__55349__auto___74948);
nubank.workspaces.core.init_card(new cljs.core.Symbol("holyjak.fulcro-exercises.puzzles-ws","fulcro-demo-card","holyjak.fulcro-exercises.puzzles-ws/fulcro-demo-card",722717381,null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.model","card-form","nubank.workspaces.model/card-form",2147473),cljs.core.list(new cljs.core.Symbol("ws","defcard","ws/defcard",694485471,null),new cljs.core.Symbol(null,"fulcro-demo-card","fulcro-demo-card",857027776,null),cljs.core.list(new cljs.core.Symbol("ct.fulcro","fulcro-card","ct.fulcro/fulcro-card",1038579100,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root","nubank.workspaces.card-types.fulcro3/root",-1183530530),new cljs.core.Symbol(null,"ColorChangingSquare","ColorChangingSquare",-112504983,null),new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","wrap-root?","nubank.workspaces.card-types.fulcro3/wrap-root?",1709552409),true], null))),new cljs.core.Keyword("nubank.workspaces.model","card-meta","nubank.workspaces.model/card-meta",-2053650250),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"holyjak/fulcro_exercises/puzzles_ws.cljs",new cljs.core.Keyword(null,"line","line",212345235),22,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"end-line","end-line",1837326455),25,new cljs.core.Keyword(null,"end-column","end-column",1425389514),46], null)], null),nubank.workspaces.card_types.fulcro3.fulcro_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","root","nubank.workspaces.card-types.fulcro3/root",-1183530530),holyjak.fulcro_exercises.puzzles_ws.ColorChangingSquare,new cljs.core.Keyword("nubank.workspaces.card-types.fulcro3","wrap-root?","nubank.workspaces.card-types.fulcro3/wrap-root?",1709552409),true], null))], 0)));

//# sourceMappingURL=holyjak.fulcro_exercises.puzzles_ws.js.map
