goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app,ident,c){
if(cljs.core.truth_((function (){var and__4115__auto__ = c;
if(cljs.core.truth_(and__4115__auto__)){
return ident;
} else {
return and__4115__auto__;
}
})())){
var map__62484 = app;
var map__62484__$1 = (((((!((map__62484 == null))))?(((((map__62484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62484):map__62484);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62484__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__4126__auto__ = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = com.fulcrologic.fulcro.components.computed(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident),prior_computed);
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,1830325176);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",com.fulcrologic.fulcro.components.class__GT_registry_key(com.fulcrologic.fulcro.components.react_type(c)),"queries for data that changed, but does not have an ident."], null);
}),null)),null,1996452312);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app,ident){
var seq__62523 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app,ident));
var chunk__62524 = null;
var count__62525 = (0);
var i__62526 = (0);
while(true){
if((i__62526 < count__62525)){
var c = chunk__62524.cljs$core$IIndexed$_nth$arity$2(null,i__62526);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident,c);


var G__62780 = seq__62523;
var G__62781 = chunk__62524;
var G__62782 = count__62525;
var G__62783 = (i__62526 + (1));
seq__62523 = G__62780;
chunk__62524 = G__62781;
count__62525 = G__62782;
i__62526 = G__62783;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62523);
if(temp__5753__auto__){
var seq__62523__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62523__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62523__$1);
var G__62786 = cljs.core.chunk_rest(seq__62523__$1);
var G__62787 = c__4556__auto__;
var G__62788 = cljs.core.count(c__4556__auto__);
var G__62789 = (0);
seq__62523 = G__62786;
chunk__62524 = G__62787;
count__62525 = G__62788;
i__62526 = G__62789;
continue;
} else {
var c = cljs.core.first(seq__62523__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident,c);


var G__62792 = cljs.core.next(seq__62523__$1);
var G__62793 = null;
var G__62794 = (0);
var G__62795 = (0);
seq__62523 = G__62792;
chunk__62524 = G__62793;
count__62525 = G__62794;
i__62526 = G__62795;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app,ident);

var map__62542 = app;
var map__62542__$1 = (((((!((map__62542 == null))))?(((((map__62542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62542):map__62542);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62542__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__62543 = cljs.core.deref(runtime_atom);
var map__62543__$1 = (((((!((map__62543 == null))))?(((((map__62543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62543):map__62543);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62543__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__62545 = indexes;
var map__62545__$1 = (((((!((map__62545 == null))))?(((((map__62545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62545):map__62545);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62545__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62545__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62545__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4126__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__62560 = cljs.core.seq(classes);
var chunk__62561 = null;
var count__62562 = (0);
var i__62563 = (0);
while(true){
if((i__62563 < count__62562)){
var class$ = chunk__62561.cljs$core$IIndexed$_nth$arity$2(null,i__62563);
var seq__62596_62801 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__62598_62802 = null;
var count__62599_62803 = (0);
var i__62600_62804 = (0);
while(true){
if((i__62600_62804 < count__62599_62803)){
var component_62808 = chunk__62598_62802.cljs$core$IIndexed$_nth$arity$2(null,i__62600_62804);
var component_ident_62809 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62808);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_62809,component_62808);


var G__62810 = seq__62596_62801;
var G__62811 = chunk__62598_62802;
var G__62812 = count__62599_62803;
var G__62813 = (i__62600_62804 + (1));
seq__62596_62801 = G__62810;
chunk__62598_62802 = G__62811;
count__62599_62803 = G__62812;
i__62600_62804 = G__62813;
continue;
} else {
var temp__5753__auto___62815 = cljs.core.seq(seq__62596_62801);
if(temp__5753__auto___62815){
var seq__62596_62817__$1 = temp__5753__auto___62815;
if(cljs.core.chunked_seq_QMARK_(seq__62596_62817__$1)){
var c__4556__auto___62819 = cljs.core.chunk_first(seq__62596_62817__$1);
var G__62821 = cljs.core.chunk_rest(seq__62596_62817__$1);
var G__62822 = c__4556__auto___62819;
var G__62823 = cljs.core.count(c__4556__auto___62819);
var G__62824 = (0);
seq__62596_62801 = G__62821;
chunk__62598_62802 = G__62822;
count__62599_62803 = G__62823;
i__62600_62804 = G__62824;
continue;
} else {
var component_62825 = cljs.core.first(seq__62596_62817__$1);
var component_ident_62826 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62825);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_62826,component_62825);


var G__62828 = cljs.core.next(seq__62596_62817__$1);
var G__62829 = null;
var G__62830 = (0);
var G__62831 = (0);
seq__62596_62801 = G__62828;
chunk__62598_62802 = G__62829;
count__62599_62803 = G__62830;
i__62600_62804 = G__62831;
continue;
}
} else {
}
}
break;
}


var G__62832 = seq__62560;
var G__62833 = chunk__62561;
var G__62834 = count__62562;
var G__62835 = (i__62563 + (1));
seq__62560 = G__62832;
chunk__62561 = G__62833;
count__62562 = G__62834;
i__62563 = G__62835;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62560);
if(temp__5753__auto__){
var seq__62560__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62560__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62560__$1);
var G__62842 = cljs.core.chunk_rest(seq__62560__$1);
var G__62843 = c__4556__auto__;
var G__62844 = cljs.core.count(c__4556__auto__);
var G__62845 = (0);
seq__62560 = G__62842;
chunk__62561 = G__62843;
count__62562 = G__62844;
i__62563 = G__62845;
continue;
} else {
var class$ = cljs.core.first(seq__62560__$1);
var seq__62607_62846 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__62609_62847 = null;
var count__62610_62848 = (0);
var i__62611_62849 = (0);
while(true){
if((i__62611_62849 < count__62610_62848)){
var component_62852 = chunk__62609_62847.cljs$core$IIndexed$_nth$arity$2(null,i__62611_62849);
var component_ident_62853 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62852);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_62853,component_62852);


var G__62854 = seq__62607_62846;
var G__62856 = chunk__62609_62847;
var G__62857 = count__62610_62848;
var G__62858 = (i__62611_62849 + (1));
seq__62607_62846 = G__62854;
chunk__62609_62847 = G__62856;
count__62610_62848 = G__62857;
i__62611_62849 = G__62858;
continue;
} else {
var temp__5753__auto___62860__$1 = cljs.core.seq(seq__62607_62846);
if(temp__5753__auto___62860__$1){
var seq__62607_62861__$1 = temp__5753__auto___62860__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62607_62861__$1)){
var c__4556__auto___62862 = cljs.core.chunk_first(seq__62607_62861__$1);
var G__62864 = cljs.core.chunk_rest(seq__62607_62861__$1);
var G__62865 = c__4556__auto___62862;
var G__62866 = cljs.core.count(c__4556__auto___62862);
var G__62867 = (0);
seq__62607_62846 = G__62864;
chunk__62609_62847 = G__62865;
count__62610_62848 = G__62866;
i__62611_62849 = G__62867;
continue;
} else {
var component_62869 = cljs.core.first(seq__62607_62861__$1);
var component_ident_62870 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62869);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_62870,component_62869);


var G__62871 = cljs.core.next(seq__62607_62861__$1);
var G__62872 = null;
var G__62873 = (0);
var G__62874 = (0);
seq__62607_62846 = G__62871;
chunk__62609_62847 = G__62872;
count__62610_62848 = G__62873;
i__62611_62849 = G__62874;
continue;
}
} else {
}
}
break;
}


var G__62877 = cljs.core.next(seq__62560__$1);
var G__62878 = null;
var G__62879 = (0);
var G__62880 = (0);
seq__62560 = G__62877;
chunk__62561 = G__62878;
count__62562 = G__62879;
i__62563 = G__62880;
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
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app,property_set){
if(cljs.core.seq(property_set)){
var map__62638 = app;
var map__62638__$1 = (((((!((map__62638 == null))))?(((((map__62638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62638):map__62638);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62638__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__62639 = cljs.core.deref(runtime_atom);
var map__62639__$1 = (((((!((map__62639 == null))))?(((((map__62639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62639):map__62639);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62639__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__62640 = indexes;
var map__62640__$1 = (((((!((map__62640 == null))))?(((((map__62640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62640):map__62640);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62640__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62640__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__62632_SHARP_,p2__62634_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__62632_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__62634_SHARP_) : class__GT_components.call(null,p2__62634_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app){
var map__62658 = app;
var map__62658__$1 = (((((!((map__62658 == null))))?(((((map__62658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62658):map__62658);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62658__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62658__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__62659 = cljs.core.deref(runtime_atom);
var map__62659__$1 = (((((!((map__62659 == null))))?(((((map__62659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62659):map__62659);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62659__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62659__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62659__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62659__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__62660 = indexes;
var map__62660__$1 = (((((!((map__62660 == null))))?(((((map__62660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62660):map__62660);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62660__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62660__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62660__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62660__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__62675 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__62675__$1 = (((((!((map__62675 == null))))?(((((map__62675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62675):map__62675);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62675__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62675__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app,limited_props);
var seq__62682_62913 = cljs.core.seq(limited_to_render);
var chunk__62684_62914 = null;
var count__62685_62915 = (0);
var i__62686_62916 = (0);
while(true){
if((i__62686_62916 < count__62685_62915)){
var c_62920 = chunk__62684_62914.cljs$core$IIndexed$_nth$arity$2(null,i__62686_62916);
var ident_62922 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_62920);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident_62922,c_62920);


var G__62923 = seq__62682_62913;
var G__62924 = chunk__62684_62914;
var G__62925 = count__62685_62915;
var G__62926 = (i__62686_62916 + (1));
seq__62682_62913 = G__62923;
chunk__62684_62914 = G__62924;
count__62685_62915 = G__62925;
i__62686_62916 = G__62926;
continue;
} else {
var temp__5753__auto___62927 = cljs.core.seq(seq__62682_62913);
if(temp__5753__auto___62927){
var seq__62682_62928__$1 = temp__5753__auto___62927;
if(cljs.core.chunked_seq_QMARK_(seq__62682_62928__$1)){
var c__4556__auto___62929 = cljs.core.chunk_first(seq__62682_62928__$1);
var G__62930 = cljs.core.chunk_rest(seq__62682_62928__$1);
var G__62931 = c__4556__auto___62929;
var G__62932 = cljs.core.count(c__4556__auto___62929);
var G__62933 = (0);
seq__62682_62913 = G__62930;
chunk__62684_62914 = G__62931;
count__62685_62915 = G__62932;
i__62686_62916 = G__62933;
continue;
} else {
var c_62934 = cljs.core.first(seq__62682_62928__$1);
var ident_62935 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_62934);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident_62935,c_62934);


var G__62936 = cljs.core.next(seq__62682_62928__$1);
var G__62937 = null;
var G__62938 = (0);
var G__62939 = (0);
seq__62682_62913 = G__62936;
chunk__62684_62914 = G__62937;
count__62685_62915 = G__62938;
i__62686_62916 = G__62939;
continue;
}
} else {
}
}
break;
}

var seq__62696 = cljs.core.seq(limited_idents);
var chunk__62697 = null;
var count__62698 = (0);
var i__62699 = (0);
while(true){
if((i__62699 < count__62698)){
var i = chunk__62697.cljs$core$IIndexed$_nth$arity$2(null,i__62699);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i);


var G__62945 = seq__62696;
var G__62946 = chunk__62697;
var G__62947 = count__62698;
var G__62948 = (i__62699 + (1));
seq__62696 = G__62945;
chunk__62697 = G__62946;
count__62698 = G__62947;
i__62699 = G__62948;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62696);
if(temp__5753__auto__){
var seq__62696__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62696__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62696__$1);
var G__62950 = cljs.core.chunk_rest(seq__62696__$1);
var G__62951 = c__4556__auto__;
var G__62952 = cljs.core.count(c__4556__auto__);
var G__62953 = (0);
seq__62696 = G__62950;
chunk__62697 = G__62951;
count__62698 = G__62952;
i__62699 = G__62953;
continue;
} else {
var i = cljs.core.first(seq__62696__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i);


var G__62955 = cljs.core.next(seq__62696__$1);
var G__62956 = null;
var G__62957 = (0);
var G__62958 = (0);
seq__62696 = G__62955;
chunk__62697 = G__62956;
count__62698 = G__62957;
i__62699 = G__62958;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4126__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__62713 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__62713__$1 = (((((!((map__62713 == null))))?(((((map__62713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62713):map__62713);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62713__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62713__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__62718_62967 = cljs.core.seq(all_idents);
var chunk__62719_62968 = null;
var count__62720_62969 = (0);
var i__62721_62970 = (0);
while(true){
if((i__62721_62970 < count__62720_62969)){
var i_62972 = chunk__62719_62968.cljs$core$IIndexed$_nth$arity$2(null,i__62721_62970);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i_62972);


var G__62975 = seq__62718_62967;
var G__62976 = chunk__62719_62968;
var G__62977 = count__62720_62969;
var G__62978 = (i__62721_62970 + (1));
seq__62718_62967 = G__62975;
chunk__62719_62968 = G__62976;
count__62720_62969 = G__62977;
i__62721_62970 = G__62978;
continue;
} else {
var temp__5753__auto___62979 = cljs.core.seq(seq__62718_62967);
if(temp__5753__auto___62979){
var seq__62718_62980__$1 = temp__5753__auto___62979;
if(cljs.core.chunked_seq_QMARK_(seq__62718_62980__$1)){
var c__4556__auto___62982 = cljs.core.chunk_first(seq__62718_62980__$1);
var G__62984 = cljs.core.chunk_rest(seq__62718_62980__$1);
var G__62985 = c__4556__auto___62982;
var G__62986 = cljs.core.count(c__4556__auto___62982);
var G__62987 = (0);
seq__62718_62967 = G__62984;
chunk__62719_62968 = G__62985;
count__62720_62969 = G__62986;
i__62721_62970 = G__62987;
continue;
} else {
var i_62989 = cljs.core.first(seq__62718_62980__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i_62989);


var G__62990 = cljs.core.next(seq__62718_62980__$1);
var G__62991 = null;
var G__62992 = (0);
var G__62993 = (0);
seq__62718_62967 = G__62990;
chunk__62719_62968 = G__62991;
count__62720_62969 = G__62992;
i__62721_62970 = G__62993;
continue;
}
} else {
}
}
break;
}

var seq__62733 = cljs.core.seq(extra_to_force);
var chunk__62734 = null;
var count__62735 = (0);
var i__62736 = (0);
while(true){
if((i__62736 < count__62735)){
var c = chunk__62734.cljs$core$IIndexed$_nth$arity$2(null,i__62736);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__62997 = seq__62733;
var G__62998 = chunk__62734;
var G__62999 = count__62735;
var G__63000 = (i__62736 + (1));
seq__62733 = G__62997;
chunk__62734 = G__62998;
count__62735 = G__62999;
i__62736 = G__63000;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62733);
if(temp__5753__auto__){
var seq__62733__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62733__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62733__$1);
var G__63001 = cljs.core.chunk_rest(seq__62733__$1);
var G__63002 = c__4556__auto__;
var G__63003 = cljs.core.count(c__4556__auto__);
var G__63004 = (0);
seq__62733 = G__63001;
chunk__62734 = G__63002;
count__62735 = G__63003;
i__62736 = G__63004;
continue;
} else {
var c = cljs.core.first(seq__62733__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__63013 = cljs.core.next(seq__62733__$1);
var G__63014 = null;
var G__63015 = (0);
var G__63016 = (0);
seq__62733 = G__63013;
chunk__62734 = G__63014;
count__62735 = G__63015;
i__62736 = G__63016;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__62750 = arguments.length;
switch (G__62750) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,p__62751){
var map__62752 = p__62751;
var map__62752__$1 = (((((!((map__62752 == null))))?(((((map__62752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62752):map__62752);
var options = map__62752__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62752__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62752__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4126__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app);
}catch (e62763){var e = e62763;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,1520026828);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
