goog.provide('nubank.workspaces.data');
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.data !== 'undefined') && (typeof nubank.workspaces.data.app_STAR_ !== 'undefined')){
} else {
nubank.workspaces.data.app_STAR_ = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-did-mount","client-did-mount",-958324226),(function (app){
return setTimeout((function (){
return nubank.workspaces.ui.events.trigger_event(window,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui.events","event","nubank.workspaces.ui.events/event",-1162809276),"resize"], null));
}),(600));
})], null));
}
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.data !== 'undefined') && (typeof nubank.workspaces.data.workspace_definitions_STAR_ !== 'undefined')){
} else {
nubank.workspaces.data.workspace_definitions_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.data !== 'undefined') && (typeof nubank.workspaces.data.card_definitions_STAR_ !== 'undefined')){
} else {
nubank.workspaces.data.card_definitions_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.data !== 'undefined') && (typeof nubank.workspaces.data.card_definitions_snap_STAR_ !== 'undefined')){
} else {
nubank.workspaces.data.card_definitions_snap_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.data !== 'undefined') && (typeof nubank.workspaces.data.active_cards_STAR_ !== 'undefined')){
} else {
nubank.workspaces.data.active_cards_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
nubank.workspaces.data.card_definition = (function nubank$workspaces$data$card_definition(card_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nubank.workspaces.data.card_definitions_STAR_),card_id);
});
nubank.workspaces.data.active_card = (function nubank$workspaces$data$active_card(card_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nubank.workspaces.data.active_cards_STAR_),card_id);
});

//# sourceMappingURL=nubank.workspaces.data.js.map
