goog.provide('nubank.workspaces.ui.grid_layout');
nubank.workspaces.ui.grid_layout.column_size = (120);
nubank.workspaces.ui.grid_layout.max_columns = (20);
nubank.workspaces.ui.grid_layout.columns_step = (2);
nubank.workspaces.ui.grid_layout.breakpoints = cljs.core.vec((function (){var iter__4529__auto__ = (function nubank$workspaces$ui$grid_layout$iter__72163(s__72164){
return (new cljs.core.LazySeq(null,(function (){
var s__72164__$1 = s__72164;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__72164__$1);
if(temp__5753__auto__){
var s__72164__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72164__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__72164__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__72166 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__72165 = (0);
while(true){
if((i__72165 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__72165);
var c = (i + nubank.workspaces.ui.grid_layout.columns_step);
cljs.core.chunk_append(b__72166,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''),new cljs.core.Keyword(null,"cols","cols",-1914801295),c,new cljs.core.Keyword(null,"breakpoint","breakpoint",1183378440),(((i === (0)))?(0):(c * nubank.workspaces.ui.grid_layout.column_size))], null));

var G__72230 = (i__72165 + (1));
i__72165 = G__72230;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72166),nubank$workspaces$ui$grid_layout$iter__72163(cljs.core.chunk_rest(s__72164__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72166),null);
}
} else {
var i = cljs.core.first(s__72164__$2);
var c = (i + nubank.workspaces.ui.grid_layout.columns_step);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''),new cljs.core.Keyword(null,"cols","cols",-1914801295),c,new cljs.core.Keyword(null,"breakpoint","breakpoint",1183378440),(((i === (0)))?(0):(c * nubank.workspaces.ui.grid_layout.column_size))], null),nubank$workspaces$ui$grid_layout$iter__72163(cljs.core.rest(s__72164__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),nubank.workspaces.ui.grid_layout.max_columns,nubank.workspaces.ui.grid_layout.columns_step));
})());
nubank.workspaces.ui.grid_layout.grid_item_css = (function nubank$workspaces$ui$grid_layout$grid_item_css(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$react-grid-item","$react-grid-item",-602734337),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__72182 = (garden.selectors.not.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.not.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,".react-grid-placeholder",".react-grid-placeholder",-1359549304)) : garden.selectors.not.call(null,new cljs.core.Keyword(null,".react-grid-placeholder",".react-grid-placeholder",-1359549304)));
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__72182) : garden.selectors._AMPERSAND_.call(null,G__72182));
})(),props], null)], null);
});
nubank.workspaces.ui.grid_layout.WidthProvider = ReactGridLayout.WidthProvider;
nubank.workspaces.ui.grid_layout.Responsive = ReactGridLayout.Responsive;
nubank.workspaces.ui.grid_layout.GridWithWidth = (nubank.workspaces.ui.grid_layout.WidthProvider.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.grid_layout.WidthProvider.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.grid_layout.Responsive) : nubank.workspaces.ui.grid_layout.WidthProvider.call(null,nubank.workspaces.ui.grid_layout.Responsive));

var options__55349__auto___72235 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$react-grid-layout","$react-grid-layout",981237676),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"transition","transition",765692007),"height 200ms ease"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$react-grid-item","$react-grid-item",-602734337),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 200ms ease",new cljs.core.Keyword(null,"transition-property","transition-property",2036650935),"left, top"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$cssTransforms","&$cssTransforms",-517931914),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition-property","transition-property",2036650935),"transform"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$resizing","&$resizing",321290676),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),"1",new cljs.core.Keyword(null,"will-change","will-change",-152752061),"width, height"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$react-draggable-dragging","&$react-draggable-dragging",-1158002458),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transition","transition",765692007),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"3",new cljs.core.Keyword(null,"will-change","will-change",-152752061),"transform"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$react-grid-placeholder","&$react-grid-placeholder",-688504279),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"-ms-user-select","-ms-user-select",953709445),new cljs.core.Keyword(null,"-o-user-select","-o-user-select",-1433064762),new cljs.core.Keyword(null,"-moz-user-select","-moz-user-select",-342302744),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"transition-duration","transition-duration",85784092),new cljs.core.Keyword(null,"user-select","user-select",-346451650)],["none","none","none","none","red","2","0.2","100ms","none"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$react-resizable-handle","$react-resizable-handle",-157361248),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0",new cljs.core.Keyword(null,"right","right",-452581833),"0",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"se-resize"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"content","content",15833224),"\"\"",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),"5px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"5px",new cljs.core.Keyword(null,"width","width",-384071477),"5px",new cljs.core.Keyword(null,"height","height",1025178622),"5px",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"2px solid rgba(0, 0, 0, 0.4)",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"2px solid rgba(0, 0, 0, 0.4)"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$react-resizable","$react-resizable",690214542),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$react-resizable-handle","$react-resizable-handle",-157361248),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"background-origin","background-origin",79411540),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"background-repeat","background-repeat",-387201191),new cljs.core.Keyword(null,"background-position","background-position",1112702746),new cljs.core.Keyword(null,"height","height",1025178622)],["border-box","0","20px","se-resize","content-box","0 3px 3px 0","0","absolute","no-repeat","bottom right","20px"])], null),nubank.workspaces.ui.grid_layout.grid_item_css(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),nubank.workspaces.ui.core.card_border_radius,new cljs.core.Keyword(null,"display","display",242065432),"flex"], null))], null),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
var map__72197 = com.fulcrologic.fulcro.components.props(this$);
var map__72197__$1 = (((((!((map__72197 == null))))?(((((map__72197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72197):map__72197);
var onBreakpointChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72197__$1,new cljs.core.Keyword(null,"onBreakpointChange","onBreakpointChange",1104296229));
var width = goog.object.get((function (){var G__72199 = goog.object.getValueByKeys(this$,"grid");
return (com.fulcrologic.fulcro_css.localized_dom.node.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro_css.localized_dom.node.cljs$core$IFn$_invoke$arity$1(G__72199) : com.fulcrologic.fulcro_css.localized_dom.node.call(null,G__72199));
})(),"offsetWidth");
var bp = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72186_SHARP_){
return (width >= new cljs.core.Keyword(null,"breakpoint","breakpoint",1183378440).cljs$core$IFn$_invoke$arity$1(p1__72186_SHARP_));
}),cljs.core.rseq(nubank.workspaces.ui.grid_layout.breakpoints))));
return (onBreakpointChange.cljs$core$IFn$_invoke$arity$1 ? onBreakpointChange.cljs$core$IFn$_invoke$arity$1(bp) : onBreakpointChange.call(null,bp));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$grid_layout$render_GridLayout(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
var G__72205 = nubank.workspaces.ui.grid_layout.GridWithWidth;
var G__72206 = cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__72187_SHARP_){
return goog.object.set(this$,"grid",p1__72187_SHARP_);
})));
var G__72207 = com.fulcrologic.fulcro.components.children(this$);
return (com.fulcrologic.fulcro_css.localized_dom.create_element.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro_css.localized_dom.create_element.cljs$core$IFn$_invoke$arity$3(G__72205,G__72206,G__72207) : com.fulcrologic.fulcro_css.localized_dom.create_element.call(null,G__72205,G__72206,G__72207));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.grid_layout !== 'undefined') && (typeof nubank.workspaces.ui.grid_layout.GridLayout !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.grid_layout.GridLayout = (function nubank$workspaces$ui$grid_layout$GridLayout(props__55350__auto__){
var this__55351__auto__ = this;
var temp__5751__auto___72258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__55349__auto___72235,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___72258)){
var init_state__55352__auto___72259 = temp__5751__auto___72258;
(this__55351__auto__.state = (function (){var obj72213 = ({"fulcro$state":(function (){var G__72214 = this__55351__auto__;
var G__72215 = goog.object.get(props__55350__auto__,"fulcro$value");
return (init_state__55352__auto___72259.cljs$core$IFn$_invoke$arity$2 ? init_state__55352__auto___72259.cljs$core$IFn$_invoke$arity$2(G__72214,G__72215) : init_state__55352__auto___72259.call(null,G__72214,G__72215));
})()});
return obj72213;
})());
} else {
(this__55351__auto__.state = (function (){var obj72219 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj72219;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.grid_layout.GridLayout,new cljs.core.Keyword("nubank.workspaces.ui.grid-layout","GridLayout","nubank.workspaces.ui.grid-layout/GridLayout",523926778),options__55349__auto___72235);
nubank.workspaces.ui.grid_layout.grid_layout = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.grid_layout.GridLayout);

//# sourceMappingURL=nubank.workspaces.ui.grid_layout.js.map
