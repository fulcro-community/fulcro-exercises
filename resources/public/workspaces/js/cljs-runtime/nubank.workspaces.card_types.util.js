goog.provide('nubank.workspaces.card_types.util');
nubank.workspaces.card_types.util.predef_alignments = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("nubank.workspaces.model","align-top","nubank.workspaces.model/align-top",-20766728),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("nubank.workspaces.model","align-top-flex","nubank.workspaces.model/align-top-flex",1683254631),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null),new cljs.core.Keyword("nubank.workspaces.model","align-center","nubank.workspaces.model/align-center",-1770268631),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null),new cljs.core.Keyword("nubank.workspaces.model","align-center-flex","nubank.workspaces.model/align-center-flex",-1163119298),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null),new cljs.core.Keyword("nubank.workspaces.model","stretch-flex","nubank.workspaces.model/stretch-flex",1399653037),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"stretch"], null)], null);
nubank.workspaces.card_types.util.position_style = (function nubank$workspaces$card_types$util$position_style(p__70608){
var map__70609 = p__70608;
var map__70609__$1 = (((((!((map__70609 == null))))?(((((map__70609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70609):map__70609);
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70609__$1,new cljs.core.Keyword("nubank.workspaces.model","align","nubank.workspaces.model/align",259166470),new cljs.core.Keyword("nubank.workspaces.model","align-center","nubank.workspaces.model/align-center",-1770268631));
var custom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(nubank.workspaces.card_types.util.predef_alignments,align,((cljs.core.map_QMARK_(align))?align:cljs.core.PersistentArrayMap.EMPTY));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"stretch",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"stretch",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),custom], 0));
});
nubank.workspaces.card_types.util.create_wrapper_node = (function nubank$workspaces$card_types$util$create_wrapper_node(card){
var G__70620 = document.createElement("div");
goog.object.set(G__70620,"WORKSPACES_WRAPPER_NODE",true);

goog.style.setStyle(G__70620,cljs.core.clj__GT_js(nubank.workspaces.card_types.util.position_style(card)));

return G__70620;
});
nubank.workspaces.card_types.util.find_root_node = (function nubank$workspaces$card_types$util$find_root_node(node){
var node__$1 = node;
while(true){
if(cljs.core.truth_(goog.object.get(node__$1,"WORKSPACES_WRAPPER_NODE"))){
var G__70640 = goog.dom.getParentElement(node__$1);
node__$1 = G__70640;
continue;
} else {
return node__$1;
}
break;
}
});
nubank.workspaces.card_types.util.positioned_card = (function nubank$workspaces$card_types$util$positioned_card(card,p__70627){
var map__70628 = p__70627;
var map__70628__$1 = (((((!((map__70628 == null))))?(((((map__70628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70628):map__70628);
var instance = map__70628__$1;
var dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70628__$1,new cljs.core.Keyword("nubank.workspaces.model","dispose","nubank.workspaces.model/dispose",829517204));
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70628__$1,new cljs.core.Keyword("nubank.workspaces.model","refresh","nubank.workspaces.model/refresh",-816174567));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70628__$1,new cljs.core.Keyword("nubank.workspaces.model","render","nubank.workspaces.model/render",125050774));
var real_node = nubank.workspaces.card_types.util.create_wrapper_node(card);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(instance,new cljs.core.Keyword("nubank.workspaces.model","dispose","nubank.workspaces.model/dispose",829517204),(function (_){
if(cljs.core.truth_(dispose)){
return (dispose.cljs$core$IFn$_invoke$arity$1 ? dispose.cljs$core$IFn$_invoke$arity$1(real_node) : dispose.call(null,real_node));
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.model","refresh","nubank.workspaces.model/refresh",-816174567),(function (_){
if(cljs.core.truth_(refresh)){
return (refresh.cljs$core$IFn$_invoke$arity$1 ? refresh.cljs$core$IFn$_invoke$arity$1(real_node) : refresh.call(null,real_node));
} else {
return null;
}
}),new cljs.core.Keyword("nubank.workspaces.model","render","nubank.workspaces.model/render",125050774),(function (node){
var node__$1 = nubank.workspaces.card_types.util.find_root_node(node);
goog.object.set(node__$1,"innerHTML","");

node__$1.appendChild(real_node);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nubank.workspaces.data.active_cards_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword("nubank.workspaces.model","node","nubank.workspaces.model/node",-2144506134)], null),real_node);

return (render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(real_node) : render.call(null,real_node));
})], 0));
});

//# sourceMappingURL=nubank.workspaces.card_types.util.js.map
