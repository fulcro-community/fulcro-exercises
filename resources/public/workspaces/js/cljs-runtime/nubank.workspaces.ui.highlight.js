goog.provide('nubank.workspaces.ui.highlight');

var options__55349__auto___72088 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
return hljs.highlightBlock((com.fulcrologic.fulcro_css.localized_dom.node.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro_css.localized_dom.node.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro_css.localized_dom.node.call(null,this$)));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$highlight$render_Highlight(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__72079 = com.fulcrologic.fulcro.components.props(this$);
var map__72079__$1 = (((((!((map__72079 == null))))?(((((map__72079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72079):map__72079);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72079__$1,new cljs.core.Keyword("nubank.workspaces.ui.highlight","source","nubank.workspaces.ui.highlight/source",161213844));
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72079__$1,new cljs.core.Keyword("nubank.workspaces.ui.highlight","language","nubank.workspaces.ui.highlight/language",496856371));
return com.fulcrologic.fulcro_css.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__4126__auto__ = language;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "clojure";
}
})()], null),source], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.highlight !== 'undefined') && (typeof nubank.workspaces.ui.highlight.Highlight !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.highlight.Highlight = (function nubank$workspaces$ui$highlight$Highlight(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___72089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___72088,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___72089)){
var init_state__55352__auto___72090 = temp__5751__auto___72089;
(this__55351__auto__.state = (function (){var obj72083 = ({"fulcro$state":(function (){var G__72084 = this__55351__auto__;
var G__72085 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___72090.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___72090.cljs$core$IFn$_invoke$arity$2(G__72084,G__72085) : init_state__55352__auto___72090.call(null,G__72084,G__72085));
})()});
return obj72083;
})());
} else {
(this__55351__auto__.state = (function (){var obj72087 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj72087;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.highlight.Highlight,new cljs.core.Keyword("nubank.workspaces.ui.highlight","Highlight","nubank.workspaces.ui.highlight/Highlight",346292055),options__55349__auto___72088);
nubank.workspaces.ui.highlight.highlight = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.highlight.Highlight);

//# sourceMappingURL=nubank.workspaces.ui.highlight.js.map
