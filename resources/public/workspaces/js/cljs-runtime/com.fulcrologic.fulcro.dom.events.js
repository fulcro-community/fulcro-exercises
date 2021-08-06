goog.provide('com.fulcrologic.fulcro.dom.events');
/**
 * Calls .stopPropagation on the given event. Safe to use in CLJC files.
 */
com.fulcrologic.fulcro.dom.events.stop_propagation_BANG_ = (function com$fulcrologic$fulcro$dom$events$stop_propagation_BANG_(evt){
return evt.stopPropagation();
});
/**
 * Calls .preventDefault on the given event. Safe to use in CLJC files.
 */
com.fulcrologic.fulcro.dom.events.prevent_default_BANG_ = (function com$fulcrologic$fulcro$dom$events$prevent_default_BANG_(evt){
return evt.preventDefault();
});
/**
 * Returns the event #js evt.target.value. Safe to use in CLJC.
 */
com.fulcrologic.fulcro.dom.events.target_value = (function com$fulcrologic$fulcro$dom$events$target_value(evt){
return evt.target.value;
});
/**
 * Is the given key code on the given event?
 */
com.fulcrologic.fulcro.dom.events.is_key_QMARK_ = (function com$fulcrologic$fulcro$dom$events$is_key_QMARK_(code,evt){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,evt.keyCode);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.enter_key_QMARK_ = (function com$fulcrologic$fulcro$dom$events$enter_key_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((13),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.escape_key_QMARK_ = (function com$fulcrologic$fulcro$dom$events$escape_key_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((27),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.left_arrow_QMARK_ = (function com$fulcrologic$fulcro$dom$events$left_arrow_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((37),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.right_arrow_QMARK_ = (function com$fulcrologic$fulcro$dom$events$right_arrow_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((39),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.up_arrow_QMARK_ = (function com$fulcrologic$fulcro$dom$events$up_arrow_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((38),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.down_arrow_QMARK_ = (function com$fulcrologic$fulcro$dom$events$down_arrow_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((40),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.page_up_QMARK_ = (function com$fulcrologic$fulcro$dom$events$page_up_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((33),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.page_down_QMARK_ = (function com$fulcrologic$fulcro$dom$events$page_down_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((34),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.enter_QMARK_ = (function com$fulcrologic$fulcro$dom$events$enter_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((13),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.escape_QMARK_ = (function com$fulcrologic$fulcro$dom$events$escape_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((27),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.delete_QMARK_ = (function com$fulcrologic$fulcro$dom$events$delete_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((46),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.tab_QMARK_ = (function com$fulcrologic$fulcro$dom$events$tab_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((9),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.end_QMARK_ = (function com$fulcrologic$fulcro$dom$events$end_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((35),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.home_QMARK_ = (function com$fulcrologic$fulcro$dom$events$home_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((36),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.alt_QMARK_ = (function com$fulcrologic$fulcro$dom$events$alt_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((18),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.ctrl_QMARK_ = (function com$fulcrologic$fulcro$dom$events$ctrl_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((17),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.shift_QMARK_ = (function com$fulcrologic$fulcro$dom$events$shift_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((16),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.F1_QMARK_ = (function com$fulcrologic$fulcro$dom$events$F1_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((112),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.F2_QMARK_ = (function com$fulcrologic$fulcro$dom$events$F2_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((113),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.F3_QMARK_ = (function com$fulcrologic$fulcro$dom$events$F3_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((114),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.F4_QMARK_ = (function com$fulcrologic$fulcro$dom$events$F4_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((115),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.F5_QMARK_ = (function com$fulcrologic$fulcro$dom$events$F5_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((116),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.F6_QMARK_ = (function com$fulcrologic$fulcro$dom$events$F6_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((117),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.F7_QMARK_ = (function com$fulcrologic$fulcro$dom$events$F7_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((118),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.F8_QMARK_ = (function com$fulcrologic$fulcro$dom$events$F8_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((119),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.F9_QMARK_ = (function com$fulcrologic$fulcro$dom$events$F9_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((120),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.F10_QMARK_ = (function com$fulcrologic$fulcro$dom$events$F10_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((121),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.F11_QMARK_ = (function com$fulcrologic$fulcro$dom$events$F11_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((122),evt);
});
/**
 * Returns true if the event has the keyCode of the function name.
 */
com.fulcrologic.fulcro.dom.events.F12_QMARK_ = (function com$fulcrologic$fulcro$dom$events$F12_QMARK_(evt){
return com.fulcrologic.fulcro.dom.events.is_key_QMARK_((123),evt);
});

//# sourceMappingURL=com.fulcrologic.fulcro.dom.events.js.map
