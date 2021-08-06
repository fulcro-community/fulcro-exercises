goog.provide('nubank.workspaces.ui.modal');
nubank.workspaces.ui.modal.render_subtree_into_container = (function nubank$workspaces$ui$modal$render_subtree_into_container(parent,c,node){
return ReactDOM.unstable_renderSubtreeIntoContainer(parent,c,node);
});
nubank.workspaces.ui.modal.$ = (function nubank$workspaces$ui$modal$$(s){
return document.querySelector(s);
});
nubank.workspaces.ui.modal.create_portal_node = (function nubank$workspaces$ui$modal$create_portal_node(props){
var node = (function (){var G__72081 = goog.dom.createElement("div");
goog.style.setStyle(G__72081,cljs.core.clj__GT_js(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(props)));

return G__72081;
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"append-to","append-to",1552367855).cljs$core$IFn$_invoke$arity$1(props))){
goog.dom.append(nubank.workspaces.ui.modal.$(new cljs.core.Keyword(null,"append-to","append-to",1552367855).cljs$core$IFn$_invoke$arity$1(props)),node);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"insert-after","insert-after",1521854689).cljs$core$IFn$_invoke$arity$1(props))){
goog.dom.insertSiblingAfter(node,nubank.workspaces.ui.modal.$(new cljs.core.Keyword(null,"insert-after","insert-after",1521854689).cljs$core$IFn$_invoke$arity$1(props)));
} else {
}
}

return node;
});
nubank.workspaces.ui.modal.portal_render_children = (function nubank$workspaces$ui$modal$portal_render_children(children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro_css.localized_dom.div,null,children);
});

var options__55349__auto___72169 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
var props = com.fulcrologic.fulcro.components.props(this$);
var node = nubank.workspaces.ui.modal.create_portal_node(props);
goog.object.set(this$,"node",node);

return nubank.workspaces.ui.modal.render_subtree_into_container(this$,nubank.workspaces.ui.modal.portal_render_children(com.fulcrologic.fulcro.components.children(this$)),node);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (this$){
var temp__5753__auto__ = goog.object.get(this$,"node");
if(cljs.core.truth_(temp__5753__auto__)){
var node = temp__5753__auto__;
ReactDOM.unmountComponentAtNode(node);

return goog.dom.removeNode(node);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),(function (this$,_){
var node = goog.object.get(this$,"node");
return nubank.workspaces.ui.modal.render_subtree_into_container(this$,nubank.workspaces.ui.modal.portal_render_children(com.fulcrologic.fulcro.components.children(this$)),node);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (this$,_,___$1){
var node = goog.object.get(this$,"node");
return nubank.workspaces.ui.modal.render_subtree_into_container(this$,nubank.workspaces.ui.modal.portal_render_children(com.fulcrologic.fulcro.components.children(this$)),node);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$modal$render_Portal(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var _ = com.fulcrologic.fulcro.components.props(this$);
return com.fulcrologic.fulcro_css.localized_dom.noscript();
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.modal !== 'undefined') && (typeof nubank.workspaces.ui.modal.Portal !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.modal.Portal = (function nubank$workspaces$ui$modal$Portal(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___72177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___72169,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___72177)){
var init_state__55352__auto___72179 = temp__5751__auto___72177;
(this__55351__auto__.state = (function (){var obj72100 = ({"fulcro$state":(function (){var G__72101 = this__55351__auto__;
var G__72102 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___72179.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___72179.cljs$core$IFn$_invoke$arity$2(G__72101,G__72102) : init_state__55352__auto___72179.call(null,G__72101,G__72102));
})()});
return obj72100;
})());
} else {
(this__55351__auto__.state = (function (){var obj72104 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj72104;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.modal.Portal,new cljs.core.Keyword("nubank.workspaces.ui.modal","Portal","nubank.workspaces.ui.modal/Portal",-1004888169),options__55349__auto___72169);
nubank.workspaces.ui.modal.portal = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.modal.Portal);

var options__55349__auto___72185 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"70vh",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$modal$render_WidgetContent(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),props,com.fulcrologic.fulcro.components.children(this$)], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.modal !== 'undefined') && (typeof nubank.workspaces.ui.modal.WidgetContent !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.modal.WidgetContent = (function nubank$workspaces$ui$modal$WidgetContent(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___72188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___72185,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___72188)){
var init_state__55352__auto___72189 = temp__5751__auto___72188;
(this__55351__auto__.state = (function (){var obj72117 = ({"fulcro$state":(function (){var G__72118 = this__55351__auto__;
var G__72119 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___72189.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___72189.cljs$core$IFn$_invoke$arity$2(G__72118,G__72119) : init_state__55352__auto___72189.call(null,G__72118,G__72119));
})()});
return obj72117;
})());
} else {
(this__55351__auto__.state = (function (){var obj72121 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj72121;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.modal.WidgetContent,new cljs.core.Keyword("nubank.workspaces.ui.modal","WidgetContent","nubank.workspaces.ui.modal/WidgetContent",855534150),options__55349__auto___72185);
nubank.workspaces.ui.modal.widget_content = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.modal.WidgetContent);

var options__55349__auto___72196 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".background",".background",-500133012),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["center",(0),"100vw","rgba(0, 0, 0, 0.5)","100","center","flex","fixed","scroll","100vh",(0)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"90vw",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"80vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".close",".close",1636677024),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px",new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase"], null)], null)], null),new cljs.core.Keyword(null,"css-include","css-include",559023012),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nubank.workspaces.ui.modal.WidgetContent], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$modal$render_Modal(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__72133 = com.fulcrologic.fulcro.components.props(this$);
var map__72133__$1 = (((((!((map__72133 == null))))?(((((map__72133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72133):map__72133);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72133__$1,new cljs.core.Keyword("nubank.workspaces.ui.modal","on-close","nubank.workspaces.ui.modal/on-close",1602537550),cljs.core.identity);
var G__72137 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"append-to","append-to",1552367855),"body"], null);
var G__72138 = nubank.workspaces.ui.events.dom_listener(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),"escape",new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),on_close], null));
var G__72139 = com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".background",".background",-500133012),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.currentTarget,e.target)){
return (on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(e) : on_close.call(null,e));
} else {
return null;
}
})], null),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.components.children(this$)], 0))], 0))], 0));
return (nubank.workspaces.ui.modal.portal.cljs$core$IFn$_invoke$arity$3 ? nubank.workspaces.ui.modal.portal.cljs$core$IFn$_invoke$arity$3(G__72137,G__72138,G__72139) : nubank.workspaces.ui.modal.portal.call(null,G__72137,G__72138,G__72139));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.modal !== 'undefined') && (typeof nubank.workspaces.ui.modal.Modal !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.modal.Modal = (function nubank$workspaces$ui$modal$Modal(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___72216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___72196,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___72216)){
var init_state__55352__auto___72221 = temp__5751__auto___72216;
(this__55351__auto__.state = (function (){var obj72150 = ({"fulcro$state":(function (){var G__72151 = this__55351__auto__;
var G__72152 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___72221.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___72221.cljs$core$IFn$_invoke$arity$2(G__72151,G__72152) : init_state__55352__auto___72221.call(null,G__72151,G__72152));
})()});
return obj72150;
})());
} else {
(this__55351__auto__.state = (function (){var obj72154 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj72154;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.modal.Modal,new cljs.core.Keyword("nubank.workspaces.ui.modal","Modal","nubank.workspaces.ui.modal/Modal",-170553134),options__55349__auto___72196);
nubank.workspaces.ui.modal.modal = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.modal.Modal);

//# sourceMappingURL=nubank.workspaces.ui.modal.js.map
