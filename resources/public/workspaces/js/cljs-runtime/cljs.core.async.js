goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__57639 = arguments.length;
switch (G__57639) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57640 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57640 = (function (f,blockable,meta57641){
this.f = f;
this.blockable = blockable;
this.meta57641 = meta57641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57642,meta57641__$1){
var self__ = this;
var _57642__$1 = this;
return (new cljs.core.async.t_cljs$core$async57640(self__.f,self__.blockable,meta57641__$1));
}));

(cljs.core.async.t_cljs$core$async57640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57642){
var self__ = this;
var _57642__$1 = this;
return self__.meta57641;
}));

(cljs.core.async.t_cljs$core$async57640.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57640.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57640.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async57640.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async57640.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta57641","meta57641",679215468,null)], null);
}));

(cljs.core.async.t_cljs$core$async57640.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57640.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57640");

(cljs.core.async.t_cljs$core$async57640.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57640");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57640.
 */
cljs.core.async.__GT_t_cljs$core$async57640 = (function cljs$core$async$__GT_t_cljs$core$async57640(f__$1,blockable__$1,meta57641){
return (new cljs.core.async.t_cljs$core$async57640(f__$1,blockable__$1,meta57641));
});

}

return (new cljs.core.async.t_cljs$core$async57640(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__57646 = arguments.length;
switch (G__57646) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__57658 = arguments.length;
switch (G__57658) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__57678 = arguments.length;
switch (G__57678) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_59523 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_59523) : fn1.call(null,val_59523));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_59523) : fn1.call(null,val_59523));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__57695 = arguments.length;
switch (G__57695) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___59529 = n;
var x_59530 = (0);
while(true){
if((x_59530 < n__4613__auto___59529)){
(a[x_59530] = x_59530);

var G__59531 = (x_59530 + (1));
x_59530 = G__59531;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57710 = (function (flag,meta57711){
this.flag = flag;
this.meta57711 = meta57711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57712,meta57711__$1){
var self__ = this;
var _57712__$1 = this;
return (new cljs.core.async.t_cljs$core$async57710(self__.flag,meta57711__$1));
}));

(cljs.core.async.t_cljs$core$async57710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57712){
var self__ = this;
var _57712__$1 = this;
return self__.meta57711;
}));

(cljs.core.async.t_cljs$core$async57710.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57710.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async57710.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57710.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async57710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta57711","meta57711",-585291068,null)], null);
}));

(cljs.core.async.t_cljs$core$async57710.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57710");

(cljs.core.async.t_cljs$core$async57710.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57710");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57710.
 */
cljs.core.async.__GT_t_cljs$core$async57710 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async57710(flag__$1,meta57711){
return (new cljs.core.async.t_cljs$core$async57710(flag__$1,meta57711));
});

}

return (new cljs.core.async.t_cljs$core$async57710(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57713 = (function (flag,cb,meta57714){
this.flag = flag;
this.cb = cb;
this.meta57714 = meta57714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57715,meta57714__$1){
var self__ = this;
var _57715__$1 = this;
return (new cljs.core.async.t_cljs$core$async57713(self__.flag,self__.cb,meta57714__$1));
}));

(cljs.core.async.t_cljs$core$async57713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57715){
var self__ = this;
var _57715__$1 = this;
return self__.meta57714;
}));

(cljs.core.async.t_cljs$core$async57713.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async57713.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async57713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta57714","meta57714",-1066826741,null)], null);
}));

(cljs.core.async.t_cljs$core$async57713.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57713");

(cljs.core.async.t_cljs$core$async57713.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57713");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57713.
 */
cljs.core.async.__GT_t_cljs$core$async57713 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async57713(flag__$1,cb__$1,meta57714){
return (new cljs.core.async.t_cljs$core$async57713(flag__$1,cb__$1,meta57714));
});

}

return (new cljs.core.async.t_cljs$core$async57713(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__57720_SHARP_){
var G__57724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57720_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__57724) : fret.call(null,G__57724));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__57721_SHARP_){
var G__57725 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57721_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__57725) : fret.call(null,G__57725));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__59547 = (i + (1));
i = G__59547;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59551 = arguments.length;
var i__4737__auto___59552 = (0);
while(true){
if((i__4737__auto___59552 < len__4736__auto___59551)){
args__4742__auto__.push((arguments[i__4737__auto___59552]));

var G__59553 = (i__4737__auto___59552 + (1));
i__4737__auto___59552 = G__59553;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__57730){
var map__57731 = p__57730;
var map__57731__$1 = (((((!((map__57731 == null))))?(((((map__57731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57731):map__57731);
var opts = map__57731__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq57727){
var G__57728 = cljs.core.first(seq57727);
var seq57727__$1 = cljs.core.next(seq57727);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57728,seq57727__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__57737 = arguments.length;
switch (G__57737) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__57480__auto___59565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_57761){
var state_val_57762 = (state_57761[(1)]);
if((state_val_57762 === (7))){
var inst_57757 = (state_57761[(2)]);
var state_57761__$1 = state_57761;
var statearr_57763_59567 = state_57761__$1;
(statearr_57763_59567[(2)] = inst_57757);

(statearr_57763_59567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57762 === (1))){
var state_57761__$1 = state_57761;
var statearr_57764_59568 = state_57761__$1;
(statearr_57764_59568[(2)] = null);

(statearr_57764_59568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57762 === (4))){
var inst_57740 = (state_57761[(7)]);
var inst_57740__$1 = (state_57761[(2)]);
var inst_57741 = (inst_57740__$1 == null);
var state_57761__$1 = (function (){var statearr_57765 = state_57761;
(statearr_57765[(7)] = inst_57740__$1);

return statearr_57765;
})();
if(cljs.core.truth_(inst_57741)){
var statearr_57766_59571 = state_57761__$1;
(statearr_57766_59571[(1)] = (5));

} else {
var statearr_57767_59572 = state_57761__$1;
(statearr_57767_59572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57762 === (13))){
var state_57761__$1 = state_57761;
var statearr_57768_59576 = state_57761__$1;
(statearr_57768_59576[(2)] = null);

(statearr_57768_59576[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57762 === (6))){
var inst_57740 = (state_57761[(7)]);
var state_57761__$1 = state_57761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57761__$1,(11),to,inst_57740);
} else {
if((state_val_57762 === (3))){
var inst_57759 = (state_57761[(2)]);
var state_57761__$1 = state_57761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57761__$1,inst_57759);
} else {
if((state_val_57762 === (12))){
var state_57761__$1 = state_57761;
var statearr_57769_59579 = state_57761__$1;
(statearr_57769_59579[(2)] = null);

(statearr_57769_59579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57762 === (2))){
var state_57761__$1 = state_57761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57761__$1,(4),from);
} else {
if((state_val_57762 === (11))){
var inst_57750 = (state_57761[(2)]);
var state_57761__$1 = state_57761;
if(cljs.core.truth_(inst_57750)){
var statearr_57770_59580 = state_57761__$1;
(statearr_57770_59580[(1)] = (12));

} else {
var statearr_57771_59581 = state_57761__$1;
(statearr_57771_59581[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57762 === (9))){
var state_57761__$1 = state_57761;
var statearr_57772_59582 = state_57761__$1;
(statearr_57772_59582[(2)] = null);

(statearr_57772_59582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57762 === (5))){
var state_57761__$1 = state_57761;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57773_59584 = state_57761__$1;
(statearr_57773_59584[(1)] = (8));

} else {
var statearr_57774_59586 = state_57761__$1;
(statearr_57774_59586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57762 === (14))){
var inst_57755 = (state_57761[(2)]);
var state_57761__$1 = state_57761;
var statearr_57775_59587 = state_57761__$1;
(statearr_57775_59587[(2)] = inst_57755);

(statearr_57775_59587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57762 === (10))){
var inst_57747 = (state_57761[(2)]);
var state_57761__$1 = state_57761;
var statearr_57776_59588 = state_57761__$1;
(statearr_57776_59588[(2)] = inst_57747);

(statearr_57776_59588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57762 === (8))){
var inst_57744 = cljs.core.async.close_BANG_(to);
var state_57761__$1 = state_57761;
var statearr_57777_59589 = state_57761__$1;
(statearr_57777_59589[(2)] = inst_57744);

(statearr_57777_59589[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__57129__auto__ = null;
var cljs$core$async$state_machine__57129__auto____0 = (function (){
var statearr_57778 = [null,null,null,null,null,null,null,null];
(statearr_57778[(0)] = cljs$core$async$state_machine__57129__auto__);

(statearr_57778[(1)] = (1));

return statearr_57778;
});
var cljs$core$async$state_machine__57129__auto____1 = (function (state_57761){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_57761);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e57779){var ex__57132__auto__ = e57779;
var statearr_57780_59591 = state_57761;
(statearr_57780_59591[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_57761[(4)]))){
var statearr_57781_59592 = state_57761;
(statearr_57781_59592[(1)] = cljs.core.first((state_57761[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59594 = state_57761;
state_57761 = G__59594;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$state_machine__57129__auto__ = function(state_57761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57129__auto____1.call(this,state_57761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57129__auto____0;
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57129__auto____1;
return cljs$core$async$state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_57782 = f__57481__auto__();
(statearr_57782[(6)] = c__57480__auto___59565);

return statearr_57782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__57783){
var vec__57784 = p__57783;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57784,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57784,(1),null);
var job = vec__57784;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__57480__auto___59595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_57791){
var state_val_57792 = (state_57791[(1)]);
if((state_val_57792 === (1))){
var state_57791__$1 = state_57791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57791__$1,(2),res,v);
} else {
if((state_val_57792 === (2))){
var inst_57788 = (state_57791[(2)]);
var inst_57789 = cljs.core.async.close_BANG_(res);
var state_57791__$1 = (function (){var statearr_57793 = state_57791;
(statearr_57793[(7)] = inst_57788);

return statearr_57793;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57791__$1,inst_57789);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____0 = (function (){
var statearr_57794 = [null,null,null,null,null,null,null,null];
(statearr_57794[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__);

(statearr_57794[(1)] = (1));

return statearr_57794;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____1 = (function (state_57791){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_57791);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e57795){var ex__57132__auto__ = e57795;
var statearr_57796_59598 = state_57791;
(statearr_57796_59598[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_57791[(4)]))){
var statearr_57797_59599 = state_57791;
(statearr_57797_59599[(1)] = cljs.core.first((state_57791[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59600 = state_57791;
state_57791 = G__59600;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__ = function(state_57791){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____1.call(this,state_57791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_57798 = f__57481__auto__();
(statearr_57798[(6)] = c__57480__auto___59595);

return statearr_57798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__57799){
var vec__57800 = p__57799;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57800,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57800,(1),null);
var job = vec__57800;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___59601 = n;
var __59602 = (0);
while(true){
if((__59602 < n__4613__auto___59601)){
var G__57803_59603 = type;
var G__57803_59604__$1 = (((G__57803_59603 instanceof cljs.core.Keyword))?G__57803_59603.fqn:null);
switch (G__57803_59604__$1) {
case "compute":
var c__57480__auto___59606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__59602,c__57480__auto___59606,G__57803_59603,G__57803_59604__$1,n__4613__auto___59601,jobs,results,process,async){
return (function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = ((function (__59602,c__57480__auto___59606,G__57803_59603,G__57803_59604__$1,n__4613__auto___59601,jobs,results,process,async){
return (function (state_57816){
var state_val_57817 = (state_57816[(1)]);
if((state_val_57817 === (1))){
var state_57816__$1 = state_57816;
var statearr_57818_59608 = state_57816__$1;
(statearr_57818_59608[(2)] = null);

(statearr_57818_59608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57817 === (2))){
var state_57816__$1 = state_57816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57816__$1,(4),jobs);
} else {
if((state_val_57817 === (3))){
var inst_57814 = (state_57816[(2)]);
var state_57816__$1 = state_57816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57816__$1,inst_57814);
} else {
if((state_val_57817 === (4))){
var inst_57806 = (state_57816[(2)]);
var inst_57807 = process(inst_57806);
var state_57816__$1 = state_57816;
if(cljs.core.truth_(inst_57807)){
var statearr_57819_59614 = state_57816__$1;
(statearr_57819_59614[(1)] = (5));

} else {
var statearr_57820_59615 = state_57816__$1;
(statearr_57820_59615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57817 === (5))){
var state_57816__$1 = state_57816;
var statearr_57821_59616 = state_57816__$1;
(statearr_57821_59616[(2)] = null);

(statearr_57821_59616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57817 === (6))){
var state_57816__$1 = state_57816;
var statearr_57822_59618 = state_57816__$1;
(statearr_57822_59618[(2)] = null);

(statearr_57822_59618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57817 === (7))){
var inst_57812 = (state_57816[(2)]);
var state_57816__$1 = state_57816;
var statearr_57823_59621 = state_57816__$1;
(statearr_57823_59621[(2)] = inst_57812);

(statearr_57823_59621[(1)] = (3));


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
});})(__59602,c__57480__auto___59606,G__57803_59603,G__57803_59604__$1,n__4613__auto___59601,jobs,results,process,async))
;
return ((function (__59602,switch__57128__auto__,c__57480__auto___59606,G__57803_59603,G__57803_59604__$1,n__4613__auto___59601,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____0 = (function (){
var statearr_57824 = [null,null,null,null,null,null,null];
(statearr_57824[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__);

(statearr_57824[(1)] = (1));

return statearr_57824;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____1 = (function (state_57816){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_57816);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e57825){var ex__57132__auto__ = e57825;
var statearr_57826_59625 = state_57816;
(statearr_57826_59625[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_57816[(4)]))){
var statearr_57827_59626 = state_57816;
(statearr_57827_59626[(1)] = cljs.core.first((state_57816[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59629 = state_57816;
state_57816 = G__59629;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__ = function(state_57816){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____1.call(this,state_57816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__;
})()
;})(__59602,switch__57128__auto__,c__57480__auto___59606,G__57803_59603,G__57803_59604__$1,n__4613__auto___59601,jobs,results,process,async))
})();
var state__57482__auto__ = (function (){var statearr_57828 = f__57481__auto__();
(statearr_57828[(6)] = c__57480__auto___59606);

return statearr_57828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
});})(__59602,c__57480__auto___59606,G__57803_59603,G__57803_59604__$1,n__4613__auto___59601,jobs,results,process,async))
);


break;
case "async":
var c__57480__auto___59632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__59602,c__57480__auto___59632,G__57803_59603,G__57803_59604__$1,n__4613__auto___59601,jobs,results,process,async){
return (function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = ((function (__59602,c__57480__auto___59632,G__57803_59603,G__57803_59604__$1,n__4613__auto___59601,jobs,results,process,async){
return (function (state_57841){
var state_val_57842 = (state_57841[(1)]);
if((state_val_57842 === (1))){
var state_57841__$1 = state_57841;
var statearr_57843_59636 = state_57841__$1;
(statearr_57843_59636[(2)] = null);

(statearr_57843_59636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57842 === (2))){
var state_57841__$1 = state_57841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57841__$1,(4),jobs);
} else {
if((state_val_57842 === (3))){
var inst_57839 = (state_57841[(2)]);
var state_57841__$1 = state_57841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57841__$1,inst_57839);
} else {
if((state_val_57842 === (4))){
var inst_57831 = (state_57841[(2)]);
var inst_57832 = async(inst_57831);
var state_57841__$1 = state_57841;
if(cljs.core.truth_(inst_57832)){
var statearr_57844_59640 = state_57841__$1;
(statearr_57844_59640[(1)] = (5));

} else {
var statearr_57845_59641 = state_57841__$1;
(statearr_57845_59641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57842 === (5))){
var state_57841__$1 = state_57841;
var statearr_57846_59642 = state_57841__$1;
(statearr_57846_59642[(2)] = null);

(statearr_57846_59642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57842 === (6))){
var state_57841__$1 = state_57841;
var statearr_57847_59648 = state_57841__$1;
(statearr_57847_59648[(2)] = null);

(statearr_57847_59648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57842 === (7))){
var inst_57837 = (state_57841[(2)]);
var state_57841__$1 = state_57841;
var statearr_57848_59649 = state_57841__$1;
(statearr_57848_59649[(2)] = inst_57837);

(statearr_57848_59649[(1)] = (3));


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
});})(__59602,c__57480__auto___59632,G__57803_59603,G__57803_59604__$1,n__4613__auto___59601,jobs,results,process,async))
;
return ((function (__59602,switch__57128__auto__,c__57480__auto___59632,G__57803_59603,G__57803_59604__$1,n__4613__auto___59601,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____0 = (function (){
var statearr_57849 = [null,null,null,null,null,null,null];
(statearr_57849[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__);

(statearr_57849[(1)] = (1));

return statearr_57849;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____1 = (function (state_57841){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_57841);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e57850){var ex__57132__auto__ = e57850;
var statearr_57851_59651 = state_57841;
(statearr_57851_59651[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_57841[(4)]))){
var statearr_57852_59652 = state_57841;
(statearr_57852_59652[(1)] = cljs.core.first((state_57841[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59653 = state_57841;
state_57841 = G__59653;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__ = function(state_57841){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____1.call(this,state_57841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__;
})()
;})(__59602,switch__57128__auto__,c__57480__auto___59632,G__57803_59603,G__57803_59604__$1,n__4613__auto___59601,jobs,results,process,async))
})();
var state__57482__auto__ = (function (){var statearr_57853 = f__57481__auto__();
(statearr_57853[(6)] = c__57480__auto___59632);

return statearr_57853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
});})(__59602,c__57480__auto___59632,G__57803_59603,G__57803_59604__$1,n__4613__auto___59601,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57803_59604__$1)].join('')));

}

var G__59655 = (__59602 + (1));
__59602 = G__59655;
continue;
} else {
}
break;
}

var c__57480__auto___59656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_57875){
var state_val_57876 = (state_57875[(1)]);
if((state_val_57876 === (7))){
var inst_57871 = (state_57875[(2)]);
var state_57875__$1 = state_57875;
var statearr_57877_59659 = state_57875__$1;
(statearr_57877_59659[(2)] = inst_57871);

(statearr_57877_59659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57876 === (1))){
var state_57875__$1 = state_57875;
var statearr_57878_59660 = state_57875__$1;
(statearr_57878_59660[(2)] = null);

(statearr_57878_59660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57876 === (4))){
var inst_57856 = (state_57875[(7)]);
var inst_57856__$1 = (state_57875[(2)]);
var inst_57857 = (inst_57856__$1 == null);
var state_57875__$1 = (function (){var statearr_57879 = state_57875;
(statearr_57879[(7)] = inst_57856__$1);

return statearr_57879;
})();
if(cljs.core.truth_(inst_57857)){
var statearr_57880_59663 = state_57875__$1;
(statearr_57880_59663[(1)] = (5));

} else {
var statearr_57881_59664 = state_57875__$1;
(statearr_57881_59664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57876 === (6))){
var inst_57861 = (state_57875[(8)]);
var inst_57856 = (state_57875[(7)]);
var inst_57861__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_57862 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57863 = [inst_57856,inst_57861__$1];
var inst_57864 = (new cljs.core.PersistentVector(null,2,(5),inst_57862,inst_57863,null));
var state_57875__$1 = (function (){var statearr_57882 = state_57875;
(statearr_57882[(8)] = inst_57861__$1);

return statearr_57882;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57875__$1,(8),jobs,inst_57864);
} else {
if((state_val_57876 === (3))){
var inst_57873 = (state_57875[(2)]);
var state_57875__$1 = state_57875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57875__$1,inst_57873);
} else {
if((state_val_57876 === (2))){
var state_57875__$1 = state_57875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57875__$1,(4),from);
} else {
if((state_val_57876 === (9))){
var inst_57868 = (state_57875[(2)]);
var state_57875__$1 = (function (){var statearr_57883 = state_57875;
(statearr_57883[(9)] = inst_57868);

return statearr_57883;
})();
var statearr_57884_59670 = state_57875__$1;
(statearr_57884_59670[(2)] = null);

(statearr_57884_59670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57876 === (5))){
var inst_57859 = cljs.core.async.close_BANG_(jobs);
var state_57875__$1 = state_57875;
var statearr_57885_59672 = state_57875__$1;
(statearr_57885_59672[(2)] = inst_57859);

(statearr_57885_59672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57876 === (8))){
var inst_57861 = (state_57875[(8)]);
var inst_57866 = (state_57875[(2)]);
var state_57875__$1 = (function (){var statearr_57886 = state_57875;
(statearr_57886[(10)] = inst_57866);

return statearr_57886;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57875__$1,(9),results,inst_57861);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____0 = (function (){
var statearr_57887 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57887[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__);

(statearr_57887[(1)] = (1));

return statearr_57887;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____1 = (function (state_57875){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_57875);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e57888){var ex__57132__auto__ = e57888;
var statearr_57889_59675 = state_57875;
(statearr_57889_59675[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_57875[(4)]))){
var statearr_57890_59677 = state_57875;
(statearr_57890_59677[(1)] = cljs.core.first((state_57875[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59683 = state_57875;
state_57875 = G__59683;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__ = function(state_57875){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____1.call(this,state_57875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_57891 = f__57481__auto__();
(statearr_57891[(6)] = c__57480__auto___59656);

return statearr_57891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));


var c__57480__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_57929){
var state_val_57930 = (state_57929[(1)]);
if((state_val_57930 === (7))){
var inst_57925 = (state_57929[(2)]);
var state_57929__$1 = state_57929;
var statearr_57931_59690 = state_57929__$1;
(statearr_57931_59690[(2)] = inst_57925);

(statearr_57931_59690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57930 === (20))){
var state_57929__$1 = state_57929;
var statearr_57932_59691 = state_57929__$1;
(statearr_57932_59691[(2)] = null);

(statearr_57932_59691[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57930 === (1))){
var state_57929__$1 = state_57929;
var statearr_57933_59695 = state_57929__$1;
(statearr_57933_59695[(2)] = null);

(statearr_57933_59695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57930 === (4))){
var inst_57894 = (state_57929[(7)]);
var inst_57894__$1 = (state_57929[(2)]);
var inst_57895 = (inst_57894__$1 == null);
var state_57929__$1 = (function (){var statearr_57934 = state_57929;
(statearr_57934[(7)] = inst_57894__$1);

return statearr_57934;
})();
if(cljs.core.truth_(inst_57895)){
var statearr_57935_59700 = state_57929__$1;
(statearr_57935_59700[(1)] = (5));

} else {
var statearr_57936_59701 = state_57929__$1;
(statearr_57936_59701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57930 === (15))){
var inst_57907 = (state_57929[(8)]);
var state_57929__$1 = state_57929;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57929__$1,(18),to,inst_57907);
} else {
if((state_val_57930 === (21))){
var inst_57920 = (state_57929[(2)]);
var state_57929__$1 = state_57929;
var statearr_57937_59704 = state_57929__$1;
(statearr_57937_59704[(2)] = inst_57920);

(statearr_57937_59704[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57930 === (13))){
var inst_57922 = (state_57929[(2)]);
var state_57929__$1 = (function (){var statearr_57938 = state_57929;
(statearr_57938[(9)] = inst_57922);

return statearr_57938;
})();
var statearr_57939_59705 = state_57929__$1;
(statearr_57939_59705[(2)] = null);

(statearr_57939_59705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57930 === (6))){
var inst_57894 = (state_57929[(7)]);
var state_57929__$1 = state_57929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57929__$1,(11),inst_57894);
} else {
if((state_val_57930 === (17))){
var inst_57915 = (state_57929[(2)]);
var state_57929__$1 = state_57929;
if(cljs.core.truth_(inst_57915)){
var statearr_57940_59710 = state_57929__$1;
(statearr_57940_59710[(1)] = (19));

} else {
var statearr_57941_59711 = state_57929__$1;
(statearr_57941_59711[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57930 === (3))){
var inst_57927 = (state_57929[(2)]);
var state_57929__$1 = state_57929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57929__$1,inst_57927);
} else {
if((state_val_57930 === (12))){
var inst_57904 = (state_57929[(10)]);
var state_57929__$1 = state_57929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57929__$1,(14),inst_57904);
} else {
if((state_val_57930 === (2))){
var state_57929__$1 = state_57929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57929__$1,(4),results);
} else {
if((state_val_57930 === (19))){
var state_57929__$1 = state_57929;
var statearr_57942_59718 = state_57929__$1;
(statearr_57942_59718[(2)] = null);

(statearr_57942_59718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57930 === (11))){
var inst_57904 = (state_57929[(2)]);
var state_57929__$1 = (function (){var statearr_57943 = state_57929;
(statearr_57943[(10)] = inst_57904);

return statearr_57943;
})();
var statearr_57944_59722 = state_57929__$1;
(statearr_57944_59722[(2)] = null);

(statearr_57944_59722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57930 === (9))){
var state_57929__$1 = state_57929;
var statearr_57945_59723 = state_57929__$1;
(statearr_57945_59723[(2)] = null);

(statearr_57945_59723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57930 === (5))){
var state_57929__$1 = state_57929;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57946_59728 = state_57929__$1;
(statearr_57946_59728[(1)] = (8));

} else {
var statearr_57947_59729 = state_57929__$1;
(statearr_57947_59729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57930 === (14))){
var inst_57907 = (state_57929[(8)]);
var inst_57907__$1 = (state_57929[(2)]);
var inst_57908 = (inst_57907__$1 == null);
var inst_57909 = cljs.core.not(inst_57908);
var state_57929__$1 = (function (){var statearr_57948 = state_57929;
(statearr_57948[(8)] = inst_57907__$1);

return statearr_57948;
})();
if(inst_57909){
var statearr_57949_59734 = state_57929__$1;
(statearr_57949_59734[(1)] = (15));

} else {
var statearr_57950_59735 = state_57929__$1;
(statearr_57950_59735[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57930 === (16))){
var state_57929__$1 = state_57929;
var statearr_57951_59737 = state_57929__$1;
(statearr_57951_59737[(2)] = false);

(statearr_57951_59737[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57930 === (10))){
var inst_57901 = (state_57929[(2)]);
var state_57929__$1 = state_57929;
var statearr_57952_59741 = state_57929__$1;
(statearr_57952_59741[(2)] = inst_57901);

(statearr_57952_59741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57930 === (18))){
var inst_57912 = (state_57929[(2)]);
var state_57929__$1 = state_57929;
var statearr_57953_59743 = state_57929__$1;
(statearr_57953_59743[(2)] = inst_57912);

(statearr_57953_59743[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57930 === (8))){
var inst_57898 = cljs.core.async.close_BANG_(to);
var state_57929__$1 = state_57929;
var statearr_57954_59745 = state_57929__$1;
(statearr_57954_59745[(2)] = inst_57898);

(statearr_57954_59745[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____0 = (function (){
var statearr_57955 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57955[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__);

(statearr_57955[(1)] = (1));

return statearr_57955;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____1 = (function (state_57929){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_57929);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e57956){var ex__57132__auto__ = e57956;
var statearr_57957_59751 = state_57929;
(statearr_57957_59751[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_57929[(4)]))){
var statearr_57958_59752 = state_57929;
(statearr_57958_59752[(1)] = cljs.core.first((state_57929[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59753 = state_57929;
state_57929 = G__59753;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__ = function(state_57929){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____1.call(this,state_57929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_57959 = f__57481__auto__();
(statearr_57959[(6)] = c__57480__auto__);

return statearr_57959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));

return c__57480__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__57961 = arguments.length;
switch (G__57961) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__57963 = arguments.length;
switch (G__57963) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__57965 = arguments.length;
switch (G__57965) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__57480__auto___59770 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_57992){
var state_val_57993 = (state_57992[(1)]);
if((state_val_57993 === (7))){
var inst_57987 = (state_57992[(2)]);
var state_57992__$1 = state_57992;
var statearr_57996_59772 = state_57992__$1;
(statearr_57996_59772[(2)] = inst_57987);

(statearr_57996_59772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57993 === (1))){
var state_57992__$1 = state_57992;
var statearr_57997_59775 = state_57992__$1;
(statearr_57997_59775[(2)] = null);

(statearr_57997_59775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57993 === (4))){
var inst_57968 = (state_57992[(7)]);
var inst_57968__$1 = (state_57992[(2)]);
var inst_57969 = (inst_57968__$1 == null);
var state_57992__$1 = (function (){var statearr_57998 = state_57992;
(statearr_57998[(7)] = inst_57968__$1);

return statearr_57998;
})();
if(cljs.core.truth_(inst_57969)){
var statearr_57999_59777 = state_57992__$1;
(statearr_57999_59777[(1)] = (5));

} else {
var statearr_58000_59778 = state_57992__$1;
(statearr_58000_59778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57993 === (13))){
var state_57992__$1 = state_57992;
var statearr_58001_59780 = state_57992__$1;
(statearr_58001_59780[(2)] = null);

(statearr_58001_59780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57993 === (6))){
var inst_57968 = (state_57992[(7)]);
var inst_57974 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_57968) : p.call(null,inst_57968));
var state_57992__$1 = state_57992;
if(cljs.core.truth_(inst_57974)){
var statearr_58003_59786 = state_57992__$1;
(statearr_58003_59786[(1)] = (9));

} else {
var statearr_58004_59788 = state_57992__$1;
(statearr_58004_59788[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57993 === (3))){
var inst_57989 = (state_57992[(2)]);
var state_57992__$1 = state_57992;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57992__$1,inst_57989);
} else {
if((state_val_57993 === (12))){
var state_57992__$1 = state_57992;
var statearr_58006_59789 = state_57992__$1;
(statearr_58006_59789[(2)] = null);

(statearr_58006_59789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57993 === (2))){
var state_57992__$1 = state_57992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57992__$1,(4),ch);
} else {
if((state_val_57993 === (11))){
var inst_57968 = (state_57992[(7)]);
var inst_57978 = (state_57992[(2)]);
var state_57992__$1 = state_57992;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57992__$1,(8),inst_57978,inst_57968);
} else {
if((state_val_57993 === (9))){
var state_57992__$1 = state_57992;
var statearr_58008_59795 = state_57992__$1;
(statearr_58008_59795[(2)] = tc);

(statearr_58008_59795[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57993 === (5))){
var inst_57971 = cljs.core.async.close_BANG_(tc);
var inst_57972 = cljs.core.async.close_BANG_(fc);
var state_57992__$1 = (function (){var statearr_58009 = state_57992;
(statearr_58009[(8)] = inst_57971);

return statearr_58009;
})();
var statearr_58010_59799 = state_57992__$1;
(statearr_58010_59799[(2)] = inst_57972);

(statearr_58010_59799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57993 === (14))){
var inst_57985 = (state_57992[(2)]);
var state_57992__$1 = state_57992;
var statearr_58012_59800 = state_57992__$1;
(statearr_58012_59800[(2)] = inst_57985);

(statearr_58012_59800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57993 === (10))){
var state_57992__$1 = state_57992;
var statearr_58013_59804 = state_57992__$1;
(statearr_58013_59804[(2)] = fc);

(statearr_58013_59804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57993 === (8))){
var inst_57980 = (state_57992[(2)]);
var state_57992__$1 = state_57992;
if(cljs.core.truth_(inst_57980)){
var statearr_58014_59807 = state_57992__$1;
(statearr_58014_59807[(1)] = (12));

} else {
var statearr_58015_59808 = state_57992__$1;
(statearr_58015_59808[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__57129__auto__ = null;
var cljs$core$async$state_machine__57129__auto____0 = (function (){
var statearr_58017 = [null,null,null,null,null,null,null,null,null];
(statearr_58017[(0)] = cljs$core$async$state_machine__57129__auto__);

(statearr_58017[(1)] = (1));

return statearr_58017;
});
var cljs$core$async$state_machine__57129__auto____1 = (function (state_57992){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_57992);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e58018){var ex__57132__auto__ = e58018;
var statearr_58019_59810 = state_57992;
(statearr_58019_59810[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_57992[(4)]))){
var statearr_58020_59814 = state_57992;
(statearr_58020_59814[(1)] = cljs.core.first((state_57992[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59817 = state_57992;
state_57992 = G__59817;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$state_machine__57129__auto__ = function(state_57992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57129__auto____1.call(this,state_57992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57129__auto____0;
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57129__auto____1;
return cljs$core$async$state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_58022 = f__57481__auto__();
(statearr_58022[(6)] = c__57480__auto___59770);

return statearr_58022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__57480__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_58044){
var state_val_58045 = (state_58044[(1)]);
if((state_val_58045 === (7))){
var inst_58040 = (state_58044[(2)]);
var state_58044__$1 = state_58044;
var statearr_58046_59819 = state_58044__$1;
(statearr_58046_59819[(2)] = inst_58040);

(statearr_58046_59819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58045 === (1))){
var inst_58023 = init;
var inst_58024 = inst_58023;
var state_58044__$1 = (function (){var statearr_58047 = state_58044;
(statearr_58047[(7)] = inst_58024);

return statearr_58047;
})();
var statearr_58048_59820 = state_58044__$1;
(statearr_58048_59820[(2)] = null);

(statearr_58048_59820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58045 === (4))){
var inst_58027 = (state_58044[(8)]);
var inst_58027__$1 = (state_58044[(2)]);
var inst_58028 = (inst_58027__$1 == null);
var state_58044__$1 = (function (){var statearr_58049 = state_58044;
(statearr_58049[(8)] = inst_58027__$1);

return statearr_58049;
})();
if(cljs.core.truth_(inst_58028)){
var statearr_58050_59823 = state_58044__$1;
(statearr_58050_59823[(1)] = (5));

} else {
var statearr_58051_59826 = state_58044__$1;
(statearr_58051_59826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58045 === (6))){
var inst_58027 = (state_58044[(8)]);
var inst_58024 = (state_58044[(7)]);
var inst_58031 = (state_58044[(9)]);
var inst_58031__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_58024,inst_58027) : f.call(null,inst_58024,inst_58027));
var inst_58032 = cljs.core.reduced_QMARK_(inst_58031__$1);
var state_58044__$1 = (function (){var statearr_58052 = state_58044;
(statearr_58052[(9)] = inst_58031__$1);

return statearr_58052;
})();
if(inst_58032){
var statearr_58053_59828 = state_58044__$1;
(statearr_58053_59828[(1)] = (8));

} else {
var statearr_58054_59829 = state_58044__$1;
(statearr_58054_59829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58045 === (3))){
var inst_58042 = (state_58044[(2)]);
var state_58044__$1 = state_58044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58044__$1,inst_58042);
} else {
if((state_val_58045 === (2))){
var state_58044__$1 = state_58044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58044__$1,(4),ch);
} else {
if((state_val_58045 === (9))){
var inst_58031 = (state_58044[(9)]);
var inst_58024 = inst_58031;
var state_58044__$1 = (function (){var statearr_58055 = state_58044;
(statearr_58055[(7)] = inst_58024);

return statearr_58055;
})();
var statearr_58056_59835 = state_58044__$1;
(statearr_58056_59835[(2)] = null);

(statearr_58056_59835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58045 === (5))){
var inst_58024 = (state_58044[(7)]);
var state_58044__$1 = state_58044;
var statearr_58057_59838 = state_58044__$1;
(statearr_58057_59838[(2)] = inst_58024);

(statearr_58057_59838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58045 === (10))){
var inst_58038 = (state_58044[(2)]);
var state_58044__$1 = state_58044;
var statearr_58058_59839 = state_58044__$1;
(statearr_58058_59839[(2)] = inst_58038);

(statearr_58058_59839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58045 === (8))){
var inst_58031 = (state_58044[(9)]);
var inst_58034 = cljs.core.deref(inst_58031);
var state_58044__$1 = state_58044;
var statearr_58059_59843 = state_58044__$1;
(statearr_58059_59843[(2)] = inst_58034);

(statearr_58059_59843[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__57129__auto__ = null;
var cljs$core$async$reduce_$_state_machine__57129__auto____0 = (function (){
var statearr_58060 = [null,null,null,null,null,null,null,null,null,null];
(statearr_58060[(0)] = cljs$core$async$reduce_$_state_machine__57129__auto__);

(statearr_58060[(1)] = (1));

return statearr_58060;
});
var cljs$core$async$reduce_$_state_machine__57129__auto____1 = (function (state_58044){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_58044);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e58061){var ex__57132__auto__ = e58061;
var statearr_58062_59861 = state_58044;
(statearr_58062_59861[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_58044[(4)]))){
var statearr_58063_59862 = state_58044;
(statearr_58063_59862[(1)] = cljs.core.first((state_58044[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59863 = state_58044;
state_58044 = G__59863;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__57129__auto__ = function(state_58044){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__57129__auto____1.call(this,state_58044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__57129__auto____0;
cljs$core$async$reduce_$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__57129__auto____1;
return cljs$core$async$reduce_$_state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_58064 = f__57481__auto__();
(statearr_58064[(6)] = c__57480__auto__);

return statearr_58064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));

return c__57480__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__57480__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_58070){
var state_val_58071 = (state_58070[(1)]);
if((state_val_58071 === (1))){
var inst_58065 = cljs.core.async.reduce(f__$1,init,ch);
var state_58070__$1 = state_58070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58070__$1,(2),inst_58065);
} else {
if((state_val_58071 === (2))){
var inst_58067 = (state_58070[(2)]);
var inst_58068 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_58067) : f__$1.call(null,inst_58067));
var state_58070__$1 = state_58070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58070__$1,inst_58068);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__57129__auto__ = null;
var cljs$core$async$transduce_$_state_machine__57129__auto____0 = (function (){
var statearr_58072 = [null,null,null,null,null,null,null];
(statearr_58072[(0)] = cljs$core$async$transduce_$_state_machine__57129__auto__);

(statearr_58072[(1)] = (1));

return statearr_58072;
});
var cljs$core$async$transduce_$_state_machine__57129__auto____1 = (function (state_58070){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_58070);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e58073){var ex__57132__auto__ = e58073;
var statearr_58074_59872 = state_58070;
(statearr_58074_59872[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_58070[(4)]))){
var statearr_58075_59873 = state_58070;
(statearr_58075_59873[(1)] = cljs.core.first((state_58070[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59876 = state_58070;
state_58070 = G__59876;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__57129__auto__ = function(state_58070){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__57129__auto____1.call(this,state_58070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__57129__auto____0;
cljs$core$async$transduce_$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__57129__auto____1;
return cljs$core$async$transduce_$_state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_58076 = f__57481__auto__();
(statearr_58076[(6)] = c__57480__auto__);

return statearr_58076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));

return c__57480__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__58078 = arguments.length;
switch (G__58078) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__57480__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_58103){
var state_val_58104 = (state_58103[(1)]);
if((state_val_58104 === (7))){
var inst_58085 = (state_58103[(2)]);
var state_58103__$1 = state_58103;
var statearr_58105_59891 = state_58103__$1;
(statearr_58105_59891[(2)] = inst_58085);

(statearr_58105_59891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58104 === (1))){
var inst_58079 = cljs.core.seq(coll);
var inst_58080 = inst_58079;
var state_58103__$1 = (function (){var statearr_58106 = state_58103;
(statearr_58106[(7)] = inst_58080);

return statearr_58106;
})();
var statearr_58107_59892 = state_58103__$1;
(statearr_58107_59892[(2)] = null);

(statearr_58107_59892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58104 === (4))){
var inst_58080 = (state_58103[(7)]);
var inst_58083 = cljs.core.first(inst_58080);
var state_58103__$1 = state_58103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58103__$1,(7),ch,inst_58083);
} else {
if((state_val_58104 === (13))){
var inst_58097 = (state_58103[(2)]);
var state_58103__$1 = state_58103;
var statearr_58108_59895 = state_58103__$1;
(statearr_58108_59895[(2)] = inst_58097);

(statearr_58108_59895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58104 === (6))){
var inst_58088 = (state_58103[(2)]);
var state_58103__$1 = state_58103;
if(cljs.core.truth_(inst_58088)){
var statearr_58109_59896 = state_58103__$1;
(statearr_58109_59896[(1)] = (8));

} else {
var statearr_58110_59898 = state_58103__$1;
(statearr_58110_59898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58104 === (3))){
var inst_58101 = (state_58103[(2)]);
var state_58103__$1 = state_58103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58103__$1,inst_58101);
} else {
if((state_val_58104 === (12))){
var state_58103__$1 = state_58103;
var statearr_58111_59899 = state_58103__$1;
(statearr_58111_59899[(2)] = null);

(statearr_58111_59899[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58104 === (2))){
var inst_58080 = (state_58103[(7)]);
var state_58103__$1 = state_58103;
if(cljs.core.truth_(inst_58080)){
var statearr_58112_59906 = state_58103__$1;
(statearr_58112_59906[(1)] = (4));

} else {
var statearr_58113_59908 = state_58103__$1;
(statearr_58113_59908[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58104 === (11))){
var inst_58094 = cljs.core.async.close_BANG_(ch);
var state_58103__$1 = state_58103;
var statearr_58114_59909 = state_58103__$1;
(statearr_58114_59909[(2)] = inst_58094);

(statearr_58114_59909[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58104 === (9))){
var state_58103__$1 = state_58103;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58115_59915 = state_58103__$1;
(statearr_58115_59915[(1)] = (11));

} else {
var statearr_58116_59916 = state_58103__$1;
(statearr_58116_59916[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58104 === (5))){
var inst_58080 = (state_58103[(7)]);
var state_58103__$1 = state_58103;
var statearr_58117_59918 = state_58103__$1;
(statearr_58117_59918[(2)] = inst_58080);

(statearr_58117_59918[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58104 === (10))){
var inst_58099 = (state_58103[(2)]);
var state_58103__$1 = state_58103;
var statearr_58118_59920 = state_58103__$1;
(statearr_58118_59920[(2)] = inst_58099);

(statearr_58118_59920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58104 === (8))){
var inst_58080 = (state_58103[(7)]);
var inst_58090 = cljs.core.next(inst_58080);
var inst_58080__$1 = inst_58090;
var state_58103__$1 = (function (){var statearr_58119 = state_58103;
(statearr_58119[(7)] = inst_58080__$1);

return statearr_58119;
})();
var statearr_58120_59922 = state_58103__$1;
(statearr_58120_59922[(2)] = null);

(statearr_58120_59922[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__57129__auto__ = null;
var cljs$core$async$state_machine__57129__auto____0 = (function (){
var statearr_58121 = [null,null,null,null,null,null,null,null];
(statearr_58121[(0)] = cljs$core$async$state_machine__57129__auto__);

(statearr_58121[(1)] = (1));

return statearr_58121;
});
var cljs$core$async$state_machine__57129__auto____1 = (function (state_58103){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_58103);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e58122){var ex__57132__auto__ = e58122;
var statearr_58123_59926 = state_58103;
(statearr_58123_59926[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_58103[(4)]))){
var statearr_58124_59927 = state_58103;
(statearr_58124_59927[(1)] = cljs.core.first((state_58103[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59934 = state_58103;
state_58103 = G__59934;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$state_machine__57129__auto__ = function(state_58103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57129__auto____1.call(this,state_58103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57129__auto____0;
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57129__auto____1;
return cljs$core$async$state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_58125 = f__57481__auto__();
(statearr_58125[(6)] = c__57480__auto__);

return statearr_58125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));

return c__57480__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__58127 = arguments.length;
switch (G__58127) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_59939 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_59939(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_59940 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_59940(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_59945 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_59945(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_59946 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_59946(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58128 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58128 = (function (ch,cs,meta58129){
this.ch = ch;
this.cs = cs;
this.meta58129 = meta58129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58130,meta58129__$1){
var self__ = this;
var _58130__$1 = this;
return (new cljs.core.async.t_cljs$core$async58128(self__.ch,self__.cs,meta58129__$1));
}));

(cljs.core.async.t_cljs$core$async58128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58130){
var self__ = this;
var _58130__$1 = this;
return self__.meta58129;
}));

(cljs.core.async.t_cljs$core$async58128.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58128.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async58128.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58128.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async58128.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async58128.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async58128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta58129","meta58129",-1903954641,null)], null);
}));

(cljs.core.async.t_cljs$core$async58128.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58128");

(cljs.core.async.t_cljs$core$async58128.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58128");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58128.
 */
cljs.core.async.__GT_t_cljs$core$async58128 = (function cljs$core$async$mult_$___GT_t_cljs$core$async58128(ch__$1,cs__$1,meta58129){
return (new cljs.core.async.t_cljs$core$async58128(ch__$1,cs__$1,meta58129));
});

}

return (new cljs.core.async.t_cljs$core$async58128(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__57480__auto___59982 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_58263){
var state_val_58264 = (state_58263[(1)]);
if((state_val_58264 === (7))){
var inst_58259 = (state_58263[(2)]);
var state_58263__$1 = state_58263;
var statearr_58265_59983 = state_58263__$1;
(statearr_58265_59983[(2)] = inst_58259);

(statearr_58265_59983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (20))){
var inst_58164 = (state_58263[(7)]);
var inst_58176 = cljs.core.first(inst_58164);
var inst_58177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58176,(0),null);
var inst_58178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58176,(1),null);
var state_58263__$1 = (function (){var statearr_58266 = state_58263;
(statearr_58266[(8)] = inst_58177);

return statearr_58266;
})();
if(cljs.core.truth_(inst_58178)){
var statearr_58267_59986 = state_58263__$1;
(statearr_58267_59986[(1)] = (22));

} else {
var statearr_58268_59988 = state_58263__$1;
(statearr_58268_59988[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (27))){
var inst_58208 = (state_58263[(9)]);
var inst_58206 = (state_58263[(10)]);
var inst_58213 = (state_58263[(11)]);
var inst_58133 = (state_58263[(12)]);
var inst_58213__$1 = cljs.core._nth(inst_58206,inst_58208);
var inst_58214 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_58213__$1,inst_58133,done);
var state_58263__$1 = (function (){var statearr_58269 = state_58263;
(statearr_58269[(11)] = inst_58213__$1);

return statearr_58269;
})();
if(cljs.core.truth_(inst_58214)){
var statearr_58271_59989 = state_58263__$1;
(statearr_58271_59989[(1)] = (30));

} else {
var statearr_58272_59990 = state_58263__$1;
(statearr_58272_59990[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (1))){
var state_58263__$1 = state_58263;
var statearr_58273_59991 = state_58263__$1;
(statearr_58273_59991[(2)] = null);

(statearr_58273_59991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (24))){
var inst_58164 = (state_58263[(7)]);
var inst_58183 = (state_58263[(2)]);
var inst_58184 = cljs.core.next(inst_58164);
var inst_58142 = inst_58184;
var inst_58143 = null;
var inst_58144 = (0);
var inst_58145 = (0);
var state_58263__$1 = (function (){var statearr_58274 = state_58263;
(statearr_58274[(13)] = inst_58143);

(statearr_58274[(14)] = inst_58144);

(statearr_58274[(15)] = inst_58145);

(statearr_58274[(16)] = inst_58183);

(statearr_58274[(17)] = inst_58142);

return statearr_58274;
})();
var statearr_58275_59992 = state_58263__$1;
(statearr_58275_59992[(2)] = null);

(statearr_58275_59992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (39))){
var state_58263__$1 = state_58263;
var statearr_58280_59994 = state_58263__$1;
(statearr_58280_59994[(2)] = null);

(statearr_58280_59994[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (4))){
var inst_58133 = (state_58263[(12)]);
var inst_58133__$1 = (state_58263[(2)]);
var inst_58134 = (inst_58133__$1 == null);
var state_58263__$1 = (function (){var statearr_58281 = state_58263;
(statearr_58281[(12)] = inst_58133__$1);

return statearr_58281;
})();
if(cljs.core.truth_(inst_58134)){
var statearr_58282_59997 = state_58263__$1;
(statearr_58282_59997[(1)] = (5));

} else {
var statearr_58283_59999 = state_58263__$1;
(statearr_58283_59999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (15))){
var inst_58143 = (state_58263[(13)]);
var inst_58144 = (state_58263[(14)]);
var inst_58145 = (state_58263[(15)]);
var inst_58142 = (state_58263[(17)]);
var inst_58160 = (state_58263[(2)]);
var inst_58161 = (inst_58145 + (1));
var tmp58277 = inst_58143;
var tmp58278 = inst_58144;
var tmp58279 = inst_58142;
var inst_58142__$1 = tmp58279;
var inst_58143__$1 = tmp58277;
var inst_58144__$1 = tmp58278;
var inst_58145__$1 = inst_58161;
var state_58263__$1 = (function (){var statearr_58284 = state_58263;
(statearr_58284[(13)] = inst_58143__$1);

(statearr_58284[(14)] = inst_58144__$1);

(statearr_58284[(18)] = inst_58160);

(statearr_58284[(15)] = inst_58145__$1);

(statearr_58284[(17)] = inst_58142__$1);

return statearr_58284;
})();
var statearr_58285_60003 = state_58263__$1;
(statearr_58285_60003[(2)] = null);

(statearr_58285_60003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (21))){
var inst_58187 = (state_58263[(2)]);
var state_58263__$1 = state_58263;
var statearr_58289_60006 = state_58263__$1;
(statearr_58289_60006[(2)] = inst_58187);

(statearr_58289_60006[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (31))){
var inst_58213 = (state_58263[(11)]);
var inst_58217 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_58213);
var state_58263__$1 = state_58263;
var statearr_58290_60010 = state_58263__$1;
(statearr_58290_60010[(2)] = inst_58217);

(statearr_58290_60010[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (32))){
var inst_58208 = (state_58263[(9)]);
var inst_58206 = (state_58263[(10)]);
var inst_58207 = (state_58263[(19)]);
var inst_58205 = (state_58263[(20)]);
var inst_58219 = (state_58263[(2)]);
var inst_58220 = (inst_58208 + (1));
var tmp58286 = inst_58206;
var tmp58287 = inst_58207;
var tmp58288 = inst_58205;
var inst_58205__$1 = tmp58288;
var inst_58206__$1 = tmp58286;
var inst_58207__$1 = tmp58287;
var inst_58208__$1 = inst_58220;
var state_58263__$1 = (function (){var statearr_58291 = state_58263;
(statearr_58291[(9)] = inst_58208__$1);

(statearr_58291[(10)] = inst_58206__$1);

(statearr_58291[(19)] = inst_58207__$1);

(statearr_58291[(21)] = inst_58219);

(statearr_58291[(20)] = inst_58205__$1);

return statearr_58291;
})();
var statearr_58292_60012 = state_58263__$1;
(statearr_58292_60012[(2)] = null);

(statearr_58292_60012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (40))){
var inst_58232 = (state_58263[(22)]);
var inst_58236 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_58232);
var state_58263__$1 = state_58263;
var statearr_58293_60013 = state_58263__$1;
(statearr_58293_60013[(2)] = inst_58236);

(statearr_58293_60013[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (33))){
var inst_58223 = (state_58263[(23)]);
var inst_58225 = cljs.core.chunked_seq_QMARK_(inst_58223);
var state_58263__$1 = state_58263;
if(inst_58225){
var statearr_58294_60014 = state_58263__$1;
(statearr_58294_60014[(1)] = (36));

} else {
var statearr_58295_60015 = state_58263__$1;
(statearr_58295_60015[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (13))){
var inst_58154 = (state_58263[(24)]);
var inst_58157 = cljs.core.async.close_BANG_(inst_58154);
var state_58263__$1 = state_58263;
var statearr_58296_60017 = state_58263__$1;
(statearr_58296_60017[(2)] = inst_58157);

(statearr_58296_60017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (22))){
var inst_58177 = (state_58263[(8)]);
var inst_58180 = cljs.core.async.close_BANG_(inst_58177);
var state_58263__$1 = state_58263;
var statearr_58297_60018 = state_58263__$1;
(statearr_58297_60018[(2)] = inst_58180);

(statearr_58297_60018[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (36))){
var inst_58223 = (state_58263[(23)]);
var inst_58227 = cljs.core.chunk_first(inst_58223);
var inst_58228 = cljs.core.chunk_rest(inst_58223);
var inst_58229 = cljs.core.count(inst_58227);
var inst_58205 = inst_58228;
var inst_58206 = inst_58227;
var inst_58207 = inst_58229;
var inst_58208 = (0);
var state_58263__$1 = (function (){var statearr_58298 = state_58263;
(statearr_58298[(9)] = inst_58208);

(statearr_58298[(10)] = inst_58206);

(statearr_58298[(19)] = inst_58207);

(statearr_58298[(20)] = inst_58205);

return statearr_58298;
})();
var statearr_58299_60021 = state_58263__$1;
(statearr_58299_60021[(2)] = null);

(statearr_58299_60021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (41))){
var inst_58223 = (state_58263[(23)]);
var inst_58238 = (state_58263[(2)]);
var inst_58239 = cljs.core.next(inst_58223);
var inst_58205 = inst_58239;
var inst_58206 = null;
var inst_58207 = (0);
var inst_58208 = (0);
var state_58263__$1 = (function (){var statearr_58300 = state_58263;
(statearr_58300[(9)] = inst_58208);

(statearr_58300[(10)] = inst_58206);

(statearr_58300[(19)] = inst_58207);

(statearr_58300[(20)] = inst_58205);

(statearr_58300[(25)] = inst_58238);

return statearr_58300;
})();
var statearr_58301_60024 = state_58263__$1;
(statearr_58301_60024[(2)] = null);

(statearr_58301_60024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (43))){
var state_58263__$1 = state_58263;
var statearr_58302_60025 = state_58263__$1;
(statearr_58302_60025[(2)] = null);

(statearr_58302_60025[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (29))){
var inst_58247 = (state_58263[(2)]);
var state_58263__$1 = state_58263;
var statearr_58303_60026 = state_58263__$1;
(statearr_58303_60026[(2)] = inst_58247);

(statearr_58303_60026[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (44))){
var inst_58256 = (state_58263[(2)]);
var state_58263__$1 = (function (){var statearr_58304 = state_58263;
(statearr_58304[(26)] = inst_58256);

return statearr_58304;
})();
var statearr_58305_60027 = state_58263__$1;
(statearr_58305_60027[(2)] = null);

(statearr_58305_60027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (6))){
var inst_58197 = (state_58263[(27)]);
var inst_58196 = cljs.core.deref(cs);
var inst_58197__$1 = cljs.core.keys(inst_58196);
var inst_58198 = cljs.core.count(inst_58197__$1);
var inst_58199 = cljs.core.reset_BANG_(dctr,inst_58198);
var inst_58204 = cljs.core.seq(inst_58197__$1);
var inst_58205 = inst_58204;
var inst_58206 = null;
var inst_58207 = (0);
var inst_58208 = (0);
var state_58263__$1 = (function (){var statearr_58306 = state_58263;
(statearr_58306[(9)] = inst_58208);

(statearr_58306[(10)] = inst_58206);

(statearr_58306[(27)] = inst_58197__$1);

(statearr_58306[(28)] = inst_58199);

(statearr_58306[(19)] = inst_58207);

(statearr_58306[(20)] = inst_58205);

return statearr_58306;
})();
var statearr_58307_60033 = state_58263__$1;
(statearr_58307_60033[(2)] = null);

(statearr_58307_60033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (28))){
var inst_58223 = (state_58263[(23)]);
var inst_58205 = (state_58263[(20)]);
var inst_58223__$1 = cljs.core.seq(inst_58205);
var state_58263__$1 = (function (){var statearr_58308 = state_58263;
(statearr_58308[(23)] = inst_58223__$1);

return statearr_58308;
})();
if(inst_58223__$1){
var statearr_58309_60034 = state_58263__$1;
(statearr_58309_60034[(1)] = (33));

} else {
var statearr_58310_60035 = state_58263__$1;
(statearr_58310_60035[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (25))){
var inst_58208 = (state_58263[(9)]);
var inst_58207 = (state_58263[(19)]);
var inst_58210 = (inst_58208 < inst_58207);
var inst_58211 = inst_58210;
var state_58263__$1 = state_58263;
if(cljs.core.truth_(inst_58211)){
var statearr_58311_60036 = state_58263__$1;
(statearr_58311_60036[(1)] = (27));

} else {
var statearr_58312_60037 = state_58263__$1;
(statearr_58312_60037[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (34))){
var state_58263__$1 = state_58263;
var statearr_58313_60038 = state_58263__$1;
(statearr_58313_60038[(2)] = null);

(statearr_58313_60038[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (17))){
var state_58263__$1 = state_58263;
var statearr_58314_60039 = state_58263__$1;
(statearr_58314_60039[(2)] = null);

(statearr_58314_60039[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (3))){
var inst_58261 = (state_58263[(2)]);
var state_58263__$1 = state_58263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58263__$1,inst_58261);
} else {
if((state_val_58264 === (12))){
var inst_58192 = (state_58263[(2)]);
var state_58263__$1 = state_58263;
var statearr_58315_60041 = state_58263__$1;
(statearr_58315_60041[(2)] = inst_58192);

(statearr_58315_60041[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (2))){
var state_58263__$1 = state_58263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58263__$1,(4),ch);
} else {
if((state_val_58264 === (23))){
var state_58263__$1 = state_58263;
var statearr_58316_60042 = state_58263__$1;
(statearr_58316_60042[(2)] = null);

(statearr_58316_60042[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (35))){
var inst_58245 = (state_58263[(2)]);
var state_58263__$1 = state_58263;
var statearr_58317_60043 = state_58263__$1;
(statearr_58317_60043[(2)] = inst_58245);

(statearr_58317_60043[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (19))){
var inst_58164 = (state_58263[(7)]);
var inst_58168 = cljs.core.chunk_first(inst_58164);
var inst_58169 = cljs.core.chunk_rest(inst_58164);
var inst_58170 = cljs.core.count(inst_58168);
var inst_58142 = inst_58169;
var inst_58143 = inst_58168;
var inst_58144 = inst_58170;
var inst_58145 = (0);
var state_58263__$1 = (function (){var statearr_58318 = state_58263;
(statearr_58318[(13)] = inst_58143);

(statearr_58318[(14)] = inst_58144);

(statearr_58318[(15)] = inst_58145);

(statearr_58318[(17)] = inst_58142);

return statearr_58318;
})();
var statearr_58319_60049 = state_58263__$1;
(statearr_58319_60049[(2)] = null);

(statearr_58319_60049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (11))){
var inst_58164 = (state_58263[(7)]);
var inst_58142 = (state_58263[(17)]);
var inst_58164__$1 = cljs.core.seq(inst_58142);
var state_58263__$1 = (function (){var statearr_58320 = state_58263;
(statearr_58320[(7)] = inst_58164__$1);

return statearr_58320;
})();
if(inst_58164__$1){
var statearr_58321_60050 = state_58263__$1;
(statearr_58321_60050[(1)] = (16));

} else {
var statearr_58322_60051 = state_58263__$1;
(statearr_58322_60051[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (9))){
var inst_58194 = (state_58263[(2)]);
var state_58263__$1 = state_58263;
var statearr_58323_60052 = state_58263__$1;
(statearr_58323_60052[(2)] = inst_58194);

(statearr_58323_60052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (5))){
var inst_58140 = cljs.core.deref(cs);
var inst_58141 = cljs.core.seq(inst_58140);
var inst_58142 = inst_58141;
var inst_58143 = null;
var inst_58144 = (0);
var inst_58145 = (0);
var state_58263__$1 = (function (){var statearr_58324 = state_58263;
(statearr_58324[(13)] = inst_58143);

(statearr_58324[(14)] = inst_58144);

(statearr_58324[(15)] = inst_58145);

(statearr_58324[(17)] = inst_58142);

return statearr_58324;
})();
var statearr_58325_60055 = state_58263__$1;
(statearr_58325_60055[(2)] = null);

(statearr_58325_60055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (14))){
var state_58263__$1 = state_58263;
var statearr_58326_60057 = state_58263__$1;
(statearr_58326_60057[(2)] = null);

(statearr_58326_60057[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (45))){
var inst_58253 = (state_58263[(2)]);
var state_58263__$1 = state_58263;
var statearr_58327_60058 = state_58263__$1;
(statearr_58327_60058[(2)] = inst_58253);

(statearr_58327_60058[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (26))){
var inst_58197 = (state_58263[(27)]);
var inst_58249 = (state_58263[(2)]);
var inst_58250 = cljs.core.seq(inst_58197);
var state_58263__$1 = (function (){var statearr_58328 = state_58263;
(statearr_58328[(29)] = inst_58249);

return statearr_58328;
})();
if(inst_58250){
var statearr_58329_60066 = state_58263__$1;
(statearr_58329_60066[(1)] = (42));

} else {
var statearr_58330_60068 = state_58263__$1;
(statearr_58330_60068[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (16))){
var inst_58164 = (state_58263[(7)]);
var inst_58166 = cljs.core.chunked_seq_QMARK_(inst_58164);
var state_58263__$1 = state_58263;
if(inst_58166){
var statearr_58331_60076 = state_58263__$1;
(statearr_58331_60076[(1)] = (19));

} else {
var statearr_58332_60077 = state_58263__$1;
(statearr_58332_60077[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (38))){
var inst_58242 = (state_58263[(2)]);
var state_58263__$1 = state_58263;
var statearr_58333_60078 = state_58263__$1;
(statearr_58333_60078[(2)] = inst_58242);

(statearr_58333_60078[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (30))){
var state_58263__$1 = state_58263;
var statearr_58334_60079 = state_58263__$1;
(statearr_58334_60079[(2)] = null);

(statearr_58334_60079[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (10))){
var inst_58143 = (state_58263[(13)]);
var inst_58145 = (state_58263[(15)]);
var inst_58153 = cljs.core._nth(inst_58143,inst_58145);
var inst_58154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58153,(0),null);
var inst_58155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58153,(1),null);
var state_58263__$1 = (function (){var statearr_58335 = state_58263;
(statearr_58335[(24)] = inst_58154);

return statearr_58335;
})();
if(cljs.core.truth_(inst_58155)){
var statearr_58336_60089 = state_58263__$1;
(statearr_58336_60089[(1)] = (13));

} else {
var statearr_58337_60090 = state_58263__$1;
(statearr_58337_60090[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (18))){
var inst_58190 = (state_58263[(2)]);
var state_58263__$1 = state_58263;
var statearr_58338_60091 = state_58263__$1;
(statearr_58338_60091[(2)] = inst_58190);

(statearr_58338_60091[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (42))){
var state_58263__$1 = state_58263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58263__$1,(45),dchan);
} else {
if((state_val_58264 === (37))){
var inst_58232 = (state_58263[(22)]);
var inst_58223 = (state_58263[(23)]);
var inst_58133 = (state_58263[(12)]);
var inst_58232__$1 = cljs.core.first(inst_58223);
var inst_58233 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_58232__$1,inst_58133,done);
var state_58263__$1 = (function (){var statearr_58339 = state_58263;
(statearr_58339[(22)] = inst_58232__$1);

return statearr_58339;
})();
if(cljs.core.truth_(inst_58233)){
var statearr_58340_60096 = state_58263__$1;
(statearr_58340_60096[(1)] = (39));

} else {
var statearr_58341_60099 = state_58263__$1;
(statearr_58341_60099[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (8))){
var inst_58144 = (state_58263[(14)]);
var inst_58145 = (state_58263[(15)]);
var inst_58147 = (inst_58145 < inst_58144);
var inst_58148 = inst_58147;
var state_58263__$1 = state_58263;
if(cljs.core.truth_(inst_58148)){
var statearr_58342_60103 = state_58263__$1;
(statearr_58342_60103[(1)] = (10));

} else {
var statearr_58343_60104 = state_58263__$1;
(statearr_58343_60104[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__57129__auto__ = null;
var cljs$core$async$mult_$_state_machine__57129__auto____0 = (function (){
var statearr_58344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58344[(0)] = cljs$core$async$mult_$_state_machine__57129__auto__);

(statearr_58344[(1)] = (1));

return statearr_58344;
});
var cljs$core$async$mult_$_state_machine__57129__auto____1 = (function (state_58263){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_58263);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e58345){var ex__57132__auto__ = e58345;
var statearr_58346_60107 = state_58263;
(statearr_58346_60107[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_58263[(4)]))){
var statearr_58347_60109 = state_58263;
(statearr_58347_60109[(1)] = cljs.core.first((state_58263[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60111 = state_58263;
state_58263 = G__60111;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__57129__auto__ = function(state_58263){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__57129__auto____1.call(this,state_58263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__57129__auto____0;
cljs$core$async$mult_$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__57129__auto____1;
return cljs$core$async$mult_$_state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_58348 = f__57481__auto__();
(statearr_58348[(6)] = c__57480__auto___59982);

return statearr_58348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__58350 = arguments.length;
switch (G__58350) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_60117 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_60117(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_60120 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_60120(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_60127 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_60127(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_60128 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_60128(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_60132 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_60132(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60140 = arguments.length;
var i__4737__auto___60141 = (0);
while(true){
if((i__4737__auto___60141 < len__4736__auto___60140)){
args__4742__auto__.push((arguments[i__4737__auto___60141]));

var G__60144 = (i__4737__auto___60141 + (1));
i__4737__auto___60141 = G__60144;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__58356){
var map__58357 = p__58356;
var map__58357__$1 = (((((!((map__58357 == null))))?(((((map__58357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58357):map__58357);
var opts = map__58357__$1;
var statearr_58359_60146 = state;
(statearr_58359_60146[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_58360_60148 = state;
(statearr_58360_60148[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_58361_60150 = state;
(statearr_58361_60150[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq58352){
var G__58353 = cljs.core.first(seq58352);
var seq58352__$1 = cljs.core.next(seq58352);
var G__58354 = cljs.core.first(seq58352__$1);
var seq58352__$2 = cljs.core.next(seq58352__$1);
var G__58355 = cljs.core.first(seq58352__$2);
var seq58352__$3 = cljs.core.next(seq58352__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58353,G__58354,G__58355,seq58352__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58362 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58362 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta58363){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta58363 = meta58363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58364,meta58363__$1){
var self__ = this;
var _58364__$1 = this;
return (new cljs.core.async.t_cljs$core$async58362(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta58363__$1));
}));

(cljs.core.async.t_cljs$core$async58362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58364){
var self__ = this;
var _58364__$1 = this;
return self__.meta58363;
}));

(cljs.core.async.t_cljs$core$async58362.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58362.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async58362.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58362.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58362.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58362.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58362.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58362.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta58363","meta58363",-1931672323,null)], null);
}));

(cljs.core.async.t_cljs$core$async58362.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58362");

(cljs.core.async.t_cljs$core$async58362.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58362");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58362.
 */
cljs.core.async.__GT_t_cljs$core$async58362 = (function cljs$core$async$mix_$___GT_t_cljs$core$async58362(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta58363){
return (new cljs.core.async.t_cljs$core$async58362(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta58363));
});

}

return (new cljs.core.async.t_cljs$core$async58362(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__57480__auto___60204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_58466){
var state_val_58467 = (state_58466[(1)]);
if((state_val_58467 === (7))){
var inst_58381 = (state_58466[(2)]);
var state_58466__$1 = state_58466;
var statearr_58468_60207 = state_58466__$1;
(statearr_58468_60207[(2)] = inst_58381);

(statearr_58468_60207[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (20))){
var inst_58393 = (state_58466[(7)]);
var state_58466__$1 = state_58466;
var statearr_58469_60209 = state_58466__$1;
(statearr_58469_60209[(2)] = inst_58393);

(statearr_58469_60209[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (27))){
var state_58466__$1 = state_58466;
var statearr_58470_60212 = state_58466__$1;
(statearr_58470_60212[(2)] = null);

(statearr_58470_60212[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (1))){
var inst_58368 = (state_58466[(8)]);
var inst_58368__$1 = calc_state();
var inst_58370 = (inst_58368__$1 == null);
var inst_58371 = cljs.core.not(inst_58370);
var state_58466__$1 = (function (){var statearr_58471 = state_58466;
(statearr_58471[(8)] = inst_58368__$1);

return statearr_58471;
})();
if(inst_58371){
var statearr_58472_60214 = state_58466__$1;
(statearr_58472_60214[(1)] = (2));

} else {
var statearr_58473_60216 = state_58466__$1;
(statearr_58473_60216[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (24))){
var inst_58440 = (state_58466[(9)]);
var inst_58426 = (state_58466[(10)]);
var inst_58417 = (state_58466[(11)]);
var inst_58440__$1 = (inst_58417.cljs$core$IFn$_invoke$arity$1 ? inst_58417.cljs$core$IFn$_invoke$arity$1(inst_58426) : inst_58417.call(null,inst_58426));
var state_58466__$1 = (function (){var statearr_58474 = state_58466;
(statearr_58474[(9)] = inst_58440__$1);

return statearr_58474;
})();
if(cljs.core.truth_(inst_58440__$1)){
var statearr_58475_60217 = state_58466__$1;
(statearr_58475_60217[(1)] = (29));

} else {
var statearr_58476_60219 = state_58466__$1;
(statearr_58476_60219[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (4))){
var inst_58384 = (state_58466[(2)]);
var state_58466__$1 = state_58466;
if(cljs.core.truth_(inst_58384)){
var statearr_58477_60220 = state_58466__$1;
(statearr_58477_60220[(1)] = (8));

} else {
var statearr_58478_60221 = state_58466__$1;
(statearr_58478_60221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (15))){
var inst_58411 = (state_58466[(2)]);
var state_58466__$1 = state_58466;
if(cljs.core.truth_(inst_58411)){
var statearr_58479_60222 = state_58466__$1;
(statearr_58479_60222[(1)] = (19));

} else {
var statearr_58480_60226 = state_58466__$1;
(statearr_58480_60226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (21))){
var inst_58416 = (state_58466[(12)]);
var inst_58416__$1 = (state_58466[(2)]);
var inst_58417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58416__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58416__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58416__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_58466__$1 = (function (){var statearr_58481 = state_58466;
(statearr_58481[(12)] = inst_58416__$1);

(statearr_58481[(13)] = inst_58418);

(statearr_58481[(11)] = inst_58417);

return statearr_58481;
})();
return cljs.core.async.ioc_alts_BANG_(state_58466__$1,(22),inst_58419);
} else {
if((state_val_58467 === (31))){
var inst_58448 = (state_58466[(2)]);
var state_58466__$1 = state_58466;
if(cljs.core.truth_(inst_58448)){
var statearr_58482_60230 = state_58466__$1;
(statearr_58482_60230[(1)] = (32));

} else {
var statearr_58483_60232 = state_58466__$1;
(statearr_58483_60232[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (32))){
var inst_58425 = (state_58466[(14)]);
var state_58466__$1 = state_58466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58466__$1,(35),out,inst_58425);
} else {
if((state_val_58467 === (33))){
var inst_58416 = (state_58466[(12)]);
var inst_58393 = inst_58416;
var state_58466__$1 = (function (){var statearr_58484 = state_58466;
(statearr_58484[(7)] = inst_58393);

return statearr_58484;
})();
var statearr_58485_60237 = state_58466__$1;
(statearr_58485_60237[(2)] = null);

(statearr_58485_60237[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (13))){
var inst_58393 = (state_58466[(7)]);
var inst_58400 = inst_58393.cljs$lang$protocol_mask$partition0$;
var inst_58401 = (inst_58400 & (64));
var inst_58402 = inst_58393.cljs$core$ISeq$;
var inst_58403 = (cljs.core.PROTOCOL_SENTINEL === inst_58402);
var inst_58404 = ((inst_58401) || (inst_58403));
var state_58466__$1 = state_58466;
if(cljs.core.truth_(inst_58404)){
var statearr_58486_60238 = state_58466__$1;
(statearr_58486_60238[(1)] = (16));

} else {
var statearr_58487_60239 = state_58466__$1;
(statearr_58487_60239[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (22))){
var inst_58426 = (state_58466[(10)]);
var inst_58425 = (state_58466[(14)]);
var inst_58424 = (state_58466[(2)]);
var inst_58425__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58424,(0),null);
var inst_58426__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58424,(1),null);
var inst_58427 = (inst_58425__$1 == null);
var inst_58428 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_58426__$1,change);
var inst_58429 = ((inst_58427) || (inst_58428));
var state_58466__$1 = (function (){var statearr_58488 = state_58466;
(statearr_58488[(10)] = inst_58426__$1);

(statearr_58488[(14)] = inst_58425__$1);

return statearr_58488;
})();
if(cljs.core.truth_(inst_58429)){
var statearr_58489_60240 = state_58466__$1;
(statearr_58489_60240[(1)] = (23));

} else {
var statearr_58490_60241 = state_58466__$1;
(statearr_58490_60241[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (36))){
var inst_58416 = (state_58466[(12)]);
var inst_58393 = inst_58416;
var state_58466__$1 = (function (){var statearr_58491 = state_58466;
(statearr_58491[(7)] = inst_58393);

return statearr_58491;
})();
var statearr_58492_60246 = state_58466__$1;
(statearr_58492_60246[(2)] = null);

(statearr_58492_60246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (29))){
var inst_58440 = (state_58466[(9)]);
var state_58466__$1 = state_58466;
var statearr_58493_60247 = state_58466__$1;
(statearr_58493_60247[(2)] = inst_58440);

(statearr_58493_60247[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (6))){
var state_58466__$1 = state_58466;
var statearr_58494_60248 = state_58466__$1;
(statearr_58494_60248[(2)] = false);

(statearr_58494_60248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (28))){
var inst_58436 = (state_58466[(2)]);
var inst_58437 = calc_state();
var inst_58393 = inst_58437;
var state_58466__$1 = (function (){var statearr_58495 = state_58466;
(statearr_58495[(7)] = inst_58393);

(statearr_58495[(15)] = inst_58436);

return statearr_58495;
})();
var statearr_58496_60250 = state_58466__$1;
(statearr_58496_60250[(2)] = null);

(statearr_58496_60250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (25))){
var inst_58462 = (state_58466[(2)]);
var state_58466__$1 = state_58466;
var statearr_58497_60251 = state_58466__$1;
(statearr_58497_60251[(2)] = inst_58462);

(statearr_58497_60251[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (34))){
var inst_58460 = (state_58466[(2)]);
var state_58466__$1 = state_58466;
var statearr_58498_60255 = state_58466__$1;
(statearr_58498_60255[(2)] = inst_58460);

(statearr_58498_60255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (17))){
var state_58466__$1 = state_58466;
var statearr_58499_60258 = state_58466__$1;
(statearr_58499_60258[(2)] = false);

(statearr_58499_60258[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (3))){
var state_58466__$1 = state_58466;
var statearr_58500_60259 = state_58466__$1;
(statearr_58500_60259[(2)] = false);

(statearr_58500_60259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (12))){
var inst_58464 = (state_58466[(2)]);
var state_58466__$1 = state_58466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58466__$1,inst_58464);
} else {
if((state_val_58467 === (2))){
var inst_58368 = (state_58466[(8)]);
var inst_58373 = inst_58368.cljs$lang$protocol_mask$partition0$;
var inst_58374 = (inst_58373 & (64));
var inst_58375 = inst_58368.cljs$core$ISeq$;
var inst_58376 = (cljs.core.PROTOCOL_SENTINEL === inst_58375);
var inst_58377 = ((inst_58374) || (inst_58376));
var state_58466__$1 = state_58466;
if(cljs.core.truth_(inst_58377)){
var statearr_58501_60264 = state_58466__$1;
(statearr_58501_60264[(1)] = (5));

} else {
var statearr_58502_60265 = state_58466__$1;
(statearr_58502_60265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (23))){
var inst_58425 = (state_58466[(14)]);
var inst_58431 = (inst_58425 == null);
var state_58466__$1 = state_58466;
if(cljs.core.truth_(inst_58431)){
var statearr_58504_60267 = state_58466__$1;
(statearr_58504_60267[(1)] = (26));

} else {
var statearr_58505_60268 = state_58466__$1;
(statearr_58505_60268[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (35))){
var inst_58451 = (state_58466[(2)]);
var state_58466__$1 = state_58466;
if(cljs.core.truth_(inst_58451)){
var statearr_58506_60269 = state_58466__$1;
(statearr_58506_60269[(1)] = (36));

} else {
var statearr_58507_60270 = state_58466__$1;
(statearr_58507_60270[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (19))){
var inst_58393 = (state_58466[(7)]);
var inst_58413 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58393);
var state_58466__$1 = state_58466;
var statearr_58508_60271 = state_58466__$1;
(statearr_58508_60271[(2)] = inst_58413);

(statearr_58508_60271[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (11))){
var inst_58393 = (state_58466[(7)]);
var inst_58397 = (inst_58393 == null);
var inst_58398 = cljs.core.not(inst_58397);
var state_58466__$1 = state_58466;
if(inst_58398){
var statearr_58509_60272 = state_58466__$1;
(statearr_58509_60272[(1)] = (13));

} else {
var statearr_58510_60274 = state_58466__$1;
(statearr_58510_60274[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (9))){
var inst_58368 = (state_58466[(8)]);
var state_58466__$1 = state_58466;
var statearr_58511_60280 = state_58466__$1;
(statearr_58511_60280[(2)] = inst_58368);

(statearr_58511_60280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (5))){
var state_58466__$1 = state_58466;
var statearr_58512_60281 = state_58466__$1;
(statearr_58512_60281[(2)] = true);

(statearr_58512_60281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (14))){
var state_58466__$1 = state_58466;
var statearr_58513_60283 = state_58466__$1;
(statearr_58513_60283[(2)] = false);

(statearr_58513_60283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (26))){
var inst_58426 = (state_58466[(10)]);
var inst_58433 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_58426);
var state_58466__$1 = state_58466;
var statearr_58514_60284 = state_58466__$1;
(statearr_58514_60284[(2)] = inst_58433);

(statearr_58514_60284[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (16))){
var state_58466__$1 = state_58466;
var statearr_58515_60285 = state_58466__$1;
(statearr_58515_60285[(2)] = true);

(statearr_58515_60285[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (38))){
var inst_58456 = (state_58466[(2)]);
var state_58466__$1 = state_58466;
var statearr_58516_60286 = state_58466__$1;
(statearr_58516_60286[(2)] = inst_58456);

(statearr_58516_60286[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (30))){
var inst_58426 = (state_58466[(10)]);
var inst_58418 = (state_58466[(13)]);
var inst_58417 = (state_58466[(11)]);
var inst_58443 = cljs.core.empty_QMARK_(inst_58417);
var inst_58444 = (inst_58418.cljs$core$IFn$_invoke$arity$1 ? inst_58418.cljs$core$IFn$_invoke$arity$1(inst_58426) : inst_58418.call(null,inst_58426));
var inst_58445 = cljs.core.not(inst_58444);
var inst_58446 = ((inst_58443) && (inst_58445));
var state_58466__$1 = state_58466;
var statearr_58517_60289 = state_58466__$1;
(statearr_58517_60289[(2)] = inst_58446);

(statearr_58517_60289[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (10))){
var inst_58368 = (state_58466[(8)]);
var inst_58389 = (state_58466[(2)]);
var inst_58390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58389,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58389,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58389,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_58393 = inst_58368;
var state_58466__$1 = (function (){var statearr_58518 = state_58466;
(statearr_58518[(7)] = inst_58393);

(statearr_58518[(16)] = inst_58391);

(statearr_58518[(17)] = inst_58392);

(statearr_58518[(18)] = inst_58390);

return statearr_58518;
})();
var statearr_58519_60299 = state_58466__$1;
(statearr_58519_60299[(2)] = null);

(statearr_58519_60299[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (18))){
var inst_58408 = (state_58466[(2)]);
var state_58466__$1 = state_58466;
var statearr_58520_60300 = state_58466__$1;
(statearr_58520_60300[(2)] = inst_58408);

(statearr_58520_60300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (37))){
var state_58466__$1 = state_58466;
var statearr_58521_60301 = state_58466__$1;
(statearr_58521_60301[(2)] = null);

(statearr_58521_60301[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58467 === (8))){
var inst_58368 = (state_58466[(8)]);
var inst_58386 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58368);
var state_58466__$1 = state_58466;
var statearr_58522_60302 = state_58466__$1;
(statearr_58522_60302[(2)] = inst_58386);

(statearr_58522_60302[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__57129__auto__ = null;
var cljs$core$async$mix_$_state_machine__57129__auto____0 = (function (){
var statearr_58523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58523[(0)] = cljs$core$async$mix_$_state_machine__57129__auto__);

(statearr_58523[(1)] = (1));

return statearr_58523;
});
var cljs$core$async$mix_$_state_machine__57129__auto____1 = (function (state_58466){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_58466);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e58524){var ex__57132__auto__ = e58524;
var statearr_58525_60303 = state_58466;
(statearr_58525_60303[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_58466[(4)]))){
var statearr_58526_60304 = state_58466;
(statearr_58526_60304[(1)] = cljs.core.first((state_58466[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60305 = state_58466;
state_58466 = G__60305;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__57129__auto__ = function(state_58466){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__57129__auto____1.call(this,state_58466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__57129__auto____0;
cljs$core$async$mix_$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__57129__auto____1;
return cljs$core$async$mix_$_state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_58527 = f__57481__auto__();
(statearr_58527[(6)] = c__57480__auto___60204);

return statearr_58527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_60306 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_60306(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_60307 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_60307(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_60314 = (function() {
var G__60315 = null;
var G__60315__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__60315__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__60315 = function(p,v){
switch(arguments.length){
case 1:
return G__60315__1.call(this,p);
case 2:
return G__60315__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60315.cljs$core$IFn$_invoke$arity$1 = G__60315__1;
G__60315.cljs$core$IFn$_invoke$arity$2 = G__60315__2;
return G__60315;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__58552 = arguments.length;
switch (G__58552) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_60314(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_60314(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__58555 = arguments.length;
switch (G__58555) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__58553_SHARP_){
if(cljs.core.truth_((p1__58553_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__58553_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__58553_SHARP_.call(null,topic)))){
return p1__58553_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__58553_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58563 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58563 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta58564){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta58564 = meta58564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58565,meta58564__$1){
var self__ = this;
var _58565__$1 = this;
return (new cljs.core.async.t_cljs$core$async58563(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta58564__$1));
}));

(cljs.core.async.t_cljs$core$async58563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58565){
var self__ = this;
var _58565__$1 = this;
return self__.meta58564;
}));

(cljs.core.async.t_cljs$core$async58563.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58563.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async58563.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58563.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async58563.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async58563.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async58563.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async58563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta58564","meta58564",-1662912583,null)], null);
}));

(cljs.core.async.t_cljs$core$async58563.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58563");

(cljs.core.async.t_cljs$core$async58563.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58563");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58563.
 */
cljs.core.async.__GT_t_cljs$core$async58563 = (function cljs$core$async$__GT_t_cljs$core$async58563(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58564){
return (new cljs.core.async.t_cljs$core$async58563(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58564));
});

}

return (new cljs.core.async.t_cljs$core$async58563(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__57480__auto___60337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_58650){
var state_val_58652 = (state_58650[(1)]);
if((state_val_58652 === (7))){
var inst_58646 = (state_58650[(2)]);
var state_58650__$1 = state_58650;
var statearr_58656_60338 = state_58650__$1;
(statearr_58656_60338[(2)] = inst_58646);

(statearr_58656_60338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (20))){
var state_58650__$1 = state_58650;
var statearr_58657_60339 = state_58650__$1;
(statearr_58657_60339[(2)] = null);

(statearr_58657_60339[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (1))){
var state_58650__$1 = state_58650;
var statearr_58663_60340 = state_58650__$1;
(statearr_58663_60340[(2)] = null);

(statearr_58663_60340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (24))){
var inst_58629 = (state_58650[(7)]);
var inst_58638 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_58629);
var state_58650__$1 = state_58650;
var statearr_58664_60345 = state_58650__$1;
(statearr_58664_60345[(2)] = inst_58638);

(statearr_58664_60345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (4))){
var inst_58575 = (state_58650[(8)]);
var inst_58575__$1 = (state_58650[(2)]);
var inst_58576 = (inst_58575__$1 == null);
var state_58650__$1 = (function (){var statearr_58665 = state_58650;
(statearr_58665[(8)] = inst_58575__$1);

return statearr_58665;
})();
if(cljs.core.truth_(inst_58576)){
var statearr_58666_60350 = state_58650__$1;
(statearr_58666_60350[(1)] = (5));

} else {
var statearr_58667_60352 = state_58650__$1;
(statearr_58667_60352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (15))){
var inst_58623 = (state_58650[(2)]);
var state_58650__$1 = state_58650;
var statearr_58668_60353 = state_58650__$1;
(statearr_58668_60353[(2)] = inst_58623);

(statearr_58668_60353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (21))){
var inst_58643 = (state_58650[(2)]);
var state_58650__$1 = (function (){var statearr_58669 = state_58650;
(statearr_58669[(9)] = inst_58643);

return statearr_58669;
})();
var statearr_58670_60357 = state_58650__$1;
(statearr_58670_60357[(2)] = null);

(statearr_58670_60357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (13))){
var inst_58601 = (state_58650[(10)]);
var inst_58605 = cljs.core.chunked_seq_QMARK_(inst_58601);
var state_58650__$1 = state_58650;
if(inst_58605){
var statearr_58674_60361 = state_58650__$1;
(statearr_58674_60361[(1)] = (16));

} else {
var statearr_58675_60363 = state_58650__$1;
(statearr_58675_60363[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (22))){
var inst_58635 = (state_58650[(2)]);
var state_58650__$1 = state_58650;
if(cljs.core.truth_(inst_58635)){
var statearr_58676_60366 = state_58650__$1;
(statearr_58676_60366[(1)] = (23));

} else {
var statearr_58677_60367 = state_58650__$1;
(statearr_58677_60367[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (6))){
var inst_58631 = (state_58650[(11)]);
var inst_58575 = (state_58650[(8)]);
var inst_58629 = (state_58650[(7)]);
var inst_58629__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_58575) : topic_fn.call(null,inst_58575));
var inst_58630 = cljs.core.deref(mults);
var inst_58631__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58630,inst_58629__$1);
var state_58650__$1 = (function (){var statearr_58678 = state_58650;
(statearr_58678[(11)] = inst_58631__$1);

(statearr_58678[(7)] = inst_58629__$1);

return statearr_58678;
})();
if(cljs.core.truth_(inst_58631__$1)){
var statearr_58680_60373 = state_58650__$1;
(statearr_58680_60373[(1)] = (19));

} else {
var statearr_58682_60375 = state_58650__$1;
(statearr_58682_60375[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (25))){
var inst_58640 = (state_58650[(2)]);
var state_58650__$1 = state_58650;
var statearr_58684_60380 = state_58650__$1;
(statearr_58684_60380[(2)] = inst_58640);

(statearr_58684_60380[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (17))){
var inst_58601 = (state_58650[(10)]);
var inst_58613 = cljs.core.first(inst_58601);
var inst_58615 = cljs.core.async.muxch_STAR_(inst_58613);
var inst_58616 = cljs.core.async.close_BANG_(inst_58615);
var inst_58617 = cljs.core.next(inst_58601);
var inst_58585 = inst_58617;
var inst_58586 = null;
var inst_58587 = (0);
var inst_58588 = (0);
var state_58650__$1 = (function (){var statearr_58685 = state_58650;
(statearr_58685[(12)] = inst_58587);

(statearr_58685[(13)] = inst_58588);

(statearr_58685[(14)] = inst_58586);

(statearr_58685[(15)] = inst_58585);

(statearr_58685[(16)] = inst_58616);

return statearr_58685;
})();
var statearr_58686_60386 = state_58650__$1;
(statearr_58686_60386[(2)] = null);

(statearr_58686_60386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (3))){
var inst_58648 = (state_58650[(2)]);
var state_58650__$1 = state_58650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58650__$1,inst_58648);
} else {
if((state_val_58652 === (12))){
var inst_58625 = (state_58650[(2)]);
var state_58650__$1 = state_58650;
var statearr_58687_60392 = state_58650__$1;
(statearr_58687_60392[(2)] = inst_58625);

(statearr_58687_60392[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (2))){
var state_58650__$1 = state_58650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58650__$1,(4),ch);
} else {
if((state_val_58652 === (23))){
var state_58650__$1 = state_58650;
var statearr_58692_60393 = state_58650__$1;
(statearr_58692_60393[(2)] = null);

(statearr_58692_60393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (19))){
var inst_58631 = (state_58650[(11)]);
var inst_58575 = (state_58650[(8)]);
var inst_58633 = cljs.core.async.muxch_STAR_(inst_58631);
var state_58650__$1 = state_58650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58650__$1,(22),inst_58633,inst_58575);
} else {
if((state_val_58652 === (11))){
var inst_58585 = (state_58650[(15)]);
var inst_58601 = (state_58650[(10)]);
var inst_58601__$1 = cljs.core.seq(inst_58585);
var state_58650__$1 = (function (){var statearr_58695 = state_58650;
(statearr_58695[(10)] = inst_58601__$1);

return statearr_58695;
})();
if(inst_58601__$1){
var statearr_58696_60397 = state_58650__$1;
(statearr_58696_60397[(1)] = (13));

} else {
var statearr_58697_60399 = state_58650__$1;
(statearr_58697_60399[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (9))){
var inst_58627 = (state_58650[(2)]);
var state_58650__$1 = state_58650;
var statearr_58698_60402 = state_58650__$1;
(statearr_58698_60402[(2)] = inst_58627);

(statearr_58698_60402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (5))){
var inst_58582 = cljs.core.deref(mults);
var inst_58583 = cljs.core.vals(inst_58582);
var inst_58584 = cljs.core.seq(inst_58583);
var inst_58585 = inst_58584;
var inst_58586 = null;
var inst_58587 = (0);
var inst_58588 = (0);
var state_58650__$1 = (function (){var statearr_58699 = state_58650;
(statearr_58699[(12)] = inst_58587);

(statearr_58699[(13)] = inst_58588);

(statearr_58699[(14)] = inst_58586);

(statearr_58699[(15)] = inst_58585);

return statearr_58699;
})();
var statearr_58700_60409 = state_58650__$1;
(statearr_58700_60409[(2)] = null);

(statearr_58700_60409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (14))){
var state_58650__$1 = state_58650;
var statearr_58710_60410 = state_58650__$1;
(statearr_58710_60410[(2)] = null);

(statearr_58710_60410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (16))){
var inst_58601 = (state_58650[(10)]);
var inst_58608 = cljs.core.chunk_first(inst_58601);
var inst_58609 = cljs.core.chunk_rest(inst_58601);
var inst_58610 = cljs.core.count(inst_58608);
var inst_58585 = inst_58609;
var inst_58586 = inst_58608;
var inst_58587 = inst_58610;
var inst_58588 = (0);
var state_58650__$1 = (function (){var statearr_58712 = state_58650;
(statearr_58712[(12)] = inst_58587);

(statearr_58712[(13)] = inst_58588);

(statearr_58712[(14)] = inst_58586);

(statearr_58712[(15)] = inst_58585);

return statearr_58712;
})();
var statearr_58714_60414 = state_58650__$1;
(statearr_58714_60414[(2)] = null);

(statearr_58714_60414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (10))){
var inst_58587 = (state_58650[(12)]);
var inst_58588 = (state_58650[(13)]);
var inst_58586 = (state_58650[(14)]);
var inst_58585 = (state_58650[(15)]);
var inst_58593 = cljs.core._nth(inst_58586,inst_58588);
var inst_58594 = cljs.core.async.muxch_STAR_(inst_58593);
var inst_58595 = cljs.core.async.close_BANG_(inst_58594);
var inst_58596 = (inst_58588 + (1));
var tmp58701 = inst_58587;
var tmp58702 = inst_58586;
var tmp58703 = inst_58585;
var inst_58585__$1 = tmp58703;
var inst_58586__$1 = tmp58702;
var inst_58587__$1 = tmp58701;
var inst_58588__$1 = inst_58596;
var state_58650__$1 = (function (){var statearr_58715 = state_58650;
(statearr_58715[(12)] = inst_58587__$1);

(statearr_58715[(13)] = inst_58588__$1);

(statearr_58715[(14)] = inst_58586__$1);

(statearr_58715[(17)] = inst_58595);

(statearr_58715[(15)] = inst_58585__$1);

return statearr_58715;
})();
var statearr_58716_60418 = state_58650__$1;
(statearr_58716_60418[(2)] = null);

(statearr_58716_60418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (18))){
var inst_58620 = (state_58650[(2)]);
var state_58650__$1 = state_58650;
var statearr_58719_60419 = state_58650__$1;
(statearr_58719_60419[(2)] = inst_58620);

(statearr_58719_60419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58652 === (8))){
var inst_58587 = (state_58650[(12)]);
var inst_58588 = (state_58650[(13)]);
var inst_58590 = (inst_58588 < inst_58587);
var inst_58591 = inst_58590;
var state_58650__$1 = state_58650;
if(cljs.core.truth_(inst_58591)){
var statearr_58720_60420 = state_58650__$1;
(statearr_58720_60420[(1)] = (10));

} else {
var statearr_58721_60421 = state_58650__$1;
(statearr_58721_60421[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__57129__auto__ = null;
var cljs$core$async$state_machine__57129__auto____0 = (function (){
var statearr_58724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58724[(0)] = cljs$core$async$state_machine__57129__auto__);

(statearr_58724[(1)] = (1));

return statearr_58724;
});
var cljs$core$async$state_machine__57129__auto____1 = (function (state_58650){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_58650);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e58725){var ex__57132__auto__ = e58725;
var statearr_58726_60425 = state_58650;
(statearr_58726_60425[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_58650[(4)]))){
var statearr_58727_60426 = state_58650;
(statearr_58727_60426[(1)] = cljs.core.first((state_58650[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60431 = state_58650;
state_58650 = G__60431;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$state_machine__57129__auto__ = function(state_58650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57129__auto____1.call(this,state_58650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57129__auto____0;
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57129__auto____1;
return cljs$core$async$state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_58729 = f__57481__auto__();
(statearr_58729[(6)] = c__57480__auto___60337);

return statearr_58729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__58732 = arguments.length;
switch (G__58732) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__58735 = arguments.length;
switch (G__58735) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__58739 = arguments.length;
switch (G__58739) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__57480__auto___60458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_58803){
var state_val_58804 = (state_58803[(1)]);
if((state_val_58804 === (7))){
var state_58803__$1 = state_58803;
var statearr_58805_60462 = state_58803__$1;
(statearr_58805_60462[(2)] = null);

(statearr_58805_60462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (1))){
var state_58803__$1 = state_58803;
var statearr_58810_60463 = state_58803__$1;
(statearr_58810_60463[(2)] = null);

(statearr_58810_60463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (4))){
var inst_58756 = (state_58803[(7)]);
var inst_58755 = (state_58803[(8)]);
var inst_58762 = (inst_58756 < inst_58755);
var state_58803__$1 = state_58803;
if(cljs.core.truth_(inst_58762)){
var statearr_58812_60466 = state_58803__$1;
(statearr_58812_60466[(1)] = (6));

} else {
var statearr_58813_60468 = state_58803__$1;
(statearr_58813_60468[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (15))){
var inst_58789 = (state_58803[(9)]);
var inst_58794 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_58789);
var state_58803__$1 = state_58803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58803__$1,(17),out,inst_58794);
} else {
if((state_val_58804 === (13))){
var inst_58789 = (state_58803[(9)]);
var inst_58789__$1 = (state_58803[(2)]);
var inst_58790 = cljs.core.some(cljs.core.nil_QMARK_,inst_58789__$1);
var state_58803__$1 = (function (){var statearr_58814 = state_58803;
(statearr_58814[(9)] = inst_58789__$1);

return statearr_58814;
})();
if(cljs.core.truth_(inst_58790)){
var statearr_58815_60478 = state_58803__$1;
(statearr_58815_60478[(1)] = (14));

} else {
var statearr_58816_60479 = state_58803__$1;
(statearr_58816_60479[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (6))){
var state_58803__$1 = state_58803;
var statearr_58818_60480 = state_58803__$1;
(statearr_58818_60480[(2)] = null);

(statearr_58818_60480[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (17))){
var inst_58796 = (state_58803[(2)]);
var state_58803__$1 = (function (){var statearr_58824 = state_58803;
(statearr_58824[(10)] = inst_58796);

return statearr_58824;
})();
var statearr_58825_60487 = state_58803__$1;
(statearr_58825_60487[(2)] = null);

(statearr_58825_60487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (3))){
var inst_58801 = (state_58803[(2)]);
var state_58803__$1 = state_58803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58803__$1,inst_58801);
} else {
if((state_val_58804 === (12))){
var _ = (function (){var statearr_58826 = state_58803;
(statearr_58826[(4)] = cljs.core.rest((state_58803[(4)])));

return statearr_58826;
})();
var state_58803__$1 = state_58803;
var ex58823 = (state_58803__$1[(2)]);
var statearr_58827_60488 = state_58803__$1;
(statearr_58827_60488[(5)] = ex58823);


if((ex58823 instanceof Object)){
var statearr_58828_60489 = state_58803__$1;
(statearr_58828_60489[(1)] = (11));

(statearr_58828_60489[(5)] = null);

} else {
throw ex58823;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (2))){
var inst_58754 = cljs.core.reset_BANG_(dctr,cnt);
var inst_58755 = cnt;
var inst_58756 = (0);
var state_58803__$1 = (function (){var statearr_58829 = state_58803;
(statearr_58829[(11)] = inst_58754);

(statearr_58829[(7)] = inst_58756);

(statearr_58829[(8)] = inst_58755);

return statearr_58829;
})();
var statearr_58830_60492 = state_58803__$1;
(statearr_58830_60492[(2)] = null);

(statearr_58830_60492[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (11))){
var inst_58768 = (state_58803[(2)]);
var inst_58769 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_58803__$1 = (function (){var statearr_58831 = state_58803;
(statearr_58831[(12)] = inst_58768);

return statearr_58831;
})();
var statearr_58832_60493 = state_58803__$1;
(statearr_58832_60493[(2)] = inst_58769);

(statearr_58832_60493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (9))){
var inst_58756 = (state_58803[(7)]);
var _ = (function (){var statearr_58833 = state_58803;
(statearr_58833[(4)] = cljs.core.cons((12),(state_58803[(4)])));

return statearr_58833;
})();
var inst_58775 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_58756) : chs__$1.call(null,inst_58756));
var inst_58776 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_58756) : done.call(null,inst_58756));
var inst_58777 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_58775,inst_58776);
var ___$1 = (function (){var statearr_58834 = state_58803;
(statearr_58834[(4)] = cljs.core.rest((state_58803[(4)])));

return statearr_58834;
})();
var state_58803__$1 = state_58803;
var statearr_58835_60495 = state_58803__$1;
(statearr_58835_60495[(2)] = inst_58777);

(statearr_58835_60495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (5))){
var inst_58787 = (state_58803[(2)]);
var state_58803__$1 = (function (){var statearr_58836 = state_58803;
(statearr_58836[(13)] = inst_58787);

return statearr_58836;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58803__$1,(13),dchan);
} else {
if((state_val_58804 === (14))){
var inst_58792 = cljs.core.async.close_BANG_(out);
var state_58803__$1 = state_58803;
var statearr_58840_60503 = state_58803__$1;
(statearr_58840_60503[(2)] = inst_58792);

(statearr_58840_60503[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (16))){
var inst_58799 = (state_58803[(2)]);
var state_58803__$1 = state_58803;
var statearr_58841_60504 = state_58803__$1;
(statearr_58841_60504[(2)] = inst_58799);

(statearr_58841_60504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (10))){
var inst_58756 = (state_58803[(7)]);
var inst_58780 = (state_58803[(2)]);
var inst_58781 = (inst_58756 + (1));
var inst_58756__$1 = inst_58781;
var state_58803__$1 = (function (){var statearr_58842 = state_58803;
(statearr_58842[(14)] = inst_58780);

(statearr_58842[(7)] = inst_58756__$1);

return statearr_58842;
})();
var statearr_58843_60506 = state_58803__$1;
(statearr_58843_60506[(2)] = null);

(statearr_58843_60506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (8))){
var inst_58785 = (state_58803[(2)]);
var state_58803__$1 = state_58803;
var statearr_58844_60507 = state_58803__$1;
(statearr_58844_60507[(2)] = inst_58785);

(statearr_58844_60507[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__57129__auto__ = null;
var cljs$core$async$state_machine__57129__auto____0 = (function (){
var statearr_58845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58845[(0)] = cljs$core$async$state_machine__57129__auto__);

(statearr_58845[(1)] = (1));

return statearr_58845;
});
var cljs$core$async$state_machine__57129__auto____1 = (function (state_58803){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_58803);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e58850){var ex__57132__auto__ = e58850;
var statearr_58855_60509 = state_58803;
(statearr_58855_60509[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_58803[(4)]))){
var statearr_58856_60510 = state_58803;
(statearr_58856_60510[(1)] = cljs.core.first((state_58803[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60511 = state_58803;
state_58803 = G__60511;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$state_machine__57129__auto__ = function(state_58803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57129__auto____1.call(this,state_58803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57129__auto____0;
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57129__auto____1;
return cljs$core$async$state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_58858 = f__57481__auto__();
(statearr_58858[(6)] = c__57480__auto___60458);

return statearr_58858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__58873 = arguments.length;
switch (G__58873) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__57480__auto___60520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_58905){
var state_val_58906 = (state_58905[(1)]);
if((state_val_58906 === (7))){
var inst_58885 = (state_58905[(7)]);
var inst_58884 = (state_58905[(8)]);
var inst_58884__$1 = (state_58905[(2)]);
var inst_58885__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58884__$1,(0),null);
var inst_58886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58884__$1,(1),null);
var inst_58887 = (inst_58885__$1 == null);
var state_58905__$1 = (function (){var statearr_58909 = state_58905;
(statearr_58909[(9)] = inst_58886);

(statearr_58909[(7)] = inst_58885__$1);

(statearr_58909[(8)] = inst_58884__$1);

return statearr_58909;
})();
if(cljs.core.truth_(inst_58887)){
var statearr_58912_60522 = state_58905__$1;
(statearr_58912_60522[(1)] = (8));

} else {
var statearr_58913_60523 = state_58905__$1;
(statearr_58913_60523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58906 === (1))){
var inst_58874 = cljs.core.vec(chs);
var inst_58875 = inst_58874;
var state_58905__$1 = (function (){var statearr_58914 = state_58905;
(statearr_58914[(10)] = inst_58875);

return statearr_58914;
})();
var statearr_58915_60524 = state_58905__$1;
(statearr_58915_60524[(2)] = null);

(statearr_58915_60524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58906 === (4))){
var inst_58875 = (state_58905[(10)]);
var state_58905__$1 = state_58905;
return cljs.core.async.ioc_alts_BANG_(state_58905__$1,(7),inst_58875);
} else {
if((state_val_58906 === (6))){
var inst_58901 = (state_58905[(2)]);
var state_58905__$1 = state_58905;
var statearr_58919_60525 = state_58905__$1;
(statearr_58919_60525[(2)] = inst_58901);

(statearr_58919_60525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58906 === (3))){
var inst_58903 = (state_58905[(2)]);
var state_58905__$1 = state_58905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58905__$1,inst_58903);
} else {
if((state_val_58906 === (2))){
var inst_58875 = (state_58905[(10)]);
var inst_58877 = cljs.core.count(inst_58875);
var inst_58878 = (inst_58877 > (0));
var state_58905__$1 = state_58905;
if(cljs.core.truth_(inst_58878)){
var statearr_58921_60526 = state_58905__$1;
(statearr_58921_60526[(1)] = (4));

} else {
var statearr_58922_60527 = state_58905__$1;
(statearr_58922_60527[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58906 === (11))){
var inst_58875 = (state_58905[(10)]);
var inst_58894 = (state_58905[(2)]);
var tmp58920 = inst_58875;
var inst_58875__$1 = tmp58920;
var state_58905__$1 = (function (){var statearr_58926 = state_58905;
(statearr_58926[(11)] = inst_58894);

(statearr_58926[(10)] = inst_58875__$1);

return statearr_58926;
})();
var statearr_58927_60528 = state_58905__$1;
(statearr_58927_60528[(2)] = null);

(statearr_58927_60528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58906 === (9))){
var inst_58885 = (state_58905[(7)]);
var state_58905__$1 = state_58905;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58905__$1,(11),out,inst_58885);
} else {
if((state_val_58906 === (5))){
var inst_58899 = cljs.core.async.close_BANG_(out);
var state_58905__$1 = state_58905;
var statearr_58931_60536 = state_58905__$1;
(statearr_58931_60536[(2)] = inst_58899);

(statearr_58931_60536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58906 === (10))){
var inst_58897 = (state_58905[(2)]);
var state_58905__$1 = state_58905;
var statearr_58932_60537 = state_58905__$1;
(statearr_58932_60537[(2)] = inst_58897);

(statearr_58932_60537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58906 === (8))){
var inst_58875 = (state_58905[(10)]);
var inst_58886 = (state_58905[(9)]);
var inst_58885 = (state_58905[(7)]);
var inst_58884 = (state_58905[(8)]);
var inst_58889 = (function (){var cs = inst_58875;
var vec__58880 = inst_58884;
var v = inst_58885;
var c = inst_58886;
return (function (p1__58863_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__58863_SHARP_);
});
})();
var inst_58890 = cljs.core.filterv(inst_58889,inst_58875);
var inst_58875__$1 = inst_58890;
var state_58905__$1 = (function (){var statearr_58934 = state_58905;
(statearr_58934[(10)] = inst_58875__$1);

return statearr_58934;
})();
var statearr_58935_60538 = state_58905__$1;
(statearr_58935_60538[(2)] = null);

(statearr_58935_60538[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__57129__auto__ = null;
var cljs$core$async$state_machine__57129__auto____0 = (function (){
var statearr_58936 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58936[(0)] = cljs$core$async$state_machine__57129__auto__);

(statearr_58936[(1)] = (1));

return statearr_58936;
});
var cljs$core$async$state_machine__57129__auto____1 = (function (state_58905){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_58905);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e58937){var ex__57132__auto__ = e58937;
var statearr_58939_60540 = state_58905;
(statearr_58939_60540[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_58905[(4)]))){
var statearr_58941_60543 = state_58905;
(statearr_58941_60543[(1)] = cljs.core.first((state_58905[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60549 = state_58905;
state_58905 = G__60549;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$state_machine__57129__auto__ = function(state_58905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57129__auto____1.call(this,state_58905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57129__auto____0;
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57129__auto____1;
return cljs$core$async$state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_58943 = f__57481__auto__();
(statearr_58943[(6)] = c__57480__auto___60520);

return statearr_58943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__58951 = arguments.length;
switch (G__58951) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__57480__auto___60551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_58977){
var state_val_58978 = (state_58977[(1)]);
if((state_val_58978 === (7))){
var inst_58959 = (state_58977[(7)]);
var inst_58959__$1 = (state_58977[(2)]);
var inst_58960 = (inst_58959__$1 == null);
var inst_58961 = cljs.core.not(inst_58960);
var state_58977__$1 = (function (){var statearr_58983 = state_58977;
(statearr_58983[(7)] = inst_58959__$1);

return statearr_58983;
})();
if(inst_58961){
var statearr_58986_60552 = state_58977__$1;
(statearr_58986_60552[(1)] = (8));

} else {
var statearr_58987_60553 = state_58977__$1;
(statearr_58987_60553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58978 === (1))){
var inst_58953 = (0);
var state_58977__$1 = (function (){var statearr_58988 = state_58977;
(statearr_58988[(8)] = inst_58953);

return statearr_58988;
})();
var statearr_58989_60556 = state_58977__$1;
(statearr_58989_60556[(2)] = null);

(statearr_58989_60556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58978 === (4))){
var state_58977__$1 = state_58977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58977__$1,(7),ch);
} else {
if((state_val_58978 === (6))){
var inst_58972 = (state_58977[(2)]);
var state_58977__$1 = state_58977;
var statearr_58993_60557 = state_58977__$1;
(statearr_58993_60557[(2)] = inst_58972);

(statearr_58993_60557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58978 === (3))){
var inst_58974 = (state_58977[(2)]);
var inst_58975 = cljs.core.async.close_BANG_(out);
var state_58977__$1 = (function (){var statearr_58994 = state_58977;
(statearr_58994[(9)] = inst_58974);

return statearr_58994;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58977__$1,inst_58975);
} else {
if((state_val_58978 === (2))){
var inst_58953 = (state_58977[(8)]);
var inst_58956 = (inst_58953 < n);
var state_58977__$1 = state_58977;
if(cljs.core.truth_(inst_58956)){
var statearr_58995_60558 = state_58977__$1;
(statearr_58995_60558[(1)] = (4));

} else {
var statearr_58996_60559 = state_58977__$1;
(statearr_58996_60559[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58978 === (11))){
var inst_58953 = (state_58977[(8)]);
var inst_58964 = (state_58977[(2)]);
var inst_58965 = (inst_58953 + (1));
var inst_58953__$1 = inst_58965;
var state_58977__$1 = (function (){var statearr_58997 = state_58977;
(statearr_58997[(10)] = inst_58964);

(statearr_58997[(8)] = inst_58953__$1);

return statearr_58997;
})();
var statearr_58998_60560 = state_58977__$1;
(statearr_58998_60560[(2)] = null);

(statearr_58998_60560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58978 === (9))){
var state_58977__$1 = state_58977;
var statearr_58999_60562 = state_58977__$1;
(statearr_58999_60562[(2)] = null);

(statearr_58999_60562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58978 === (5))){
var state_58977__$1 = state_58977;
var statearr_59002_60564 = state_58977__$1;
(statearr_59002_60564[(2)] = null);

(statearr_59002_60564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58978 === (10))){
var inst_58969 = (state_58977[(2)]);
var state_58977__$1 = state_58977;
var statearr_59004_60566 = state_58977__$1;
(statearr_59004_60566[(2)] = inst_58969);

(statearr_59004_60566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58978 === (8))){
var inst_58959 = (state_58977[(7)]);
var state_58977__$1 = state_58977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58977__$1,(11),out,inst_58959);
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
});
return (function() {
var cljs$core$async$state_machine__57129__auto__ = null;
var cljs$core$async$state_machine__57129__auto____0 = (function (){
var statearr_59007 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59007[(0)] = cljs$core$async$state_machine__57129__auto__);

(statearr_59007[(1)] = (1));

return statearr_59007;
});
var cljs$core$async$state_machine__57129__auto____1 = (function (state_58977){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_58977);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e59009){var ex__57132__auto__ = e59009;
var statearr_59010_60567 = state_58977;
(statearr_59010_60567[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_58977[(4)]))){
var statearr_59011_60568 = state_58977;
(statearr_59011_60568[(1)] = cljs.core.first((state_58977[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60569 = state_58977;
state_58977 = G__60569;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$state_machine__57129__auto__ = function(state_58977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57129__auto____1.call(this,state_58977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57129__auto____0;
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57129__auto____1;
return cljs$core$async$state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_59014 = f__57481__auto__();
(statearr_59014[(6)] = c__57480__auto___60551);

return statearr_59014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59017 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59017 = (function (f,ch,meta59018){
this.f = f;
this.ch = ch;
this.meta59018 = meta59018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59019,meta59018__$1){
var self__ = this;
var _59019__$1 = this;
return (new cljs.core.async.t_cljs$core$async59017(self__.f,self__.ch,meta59018__$1));
}));

(cljs.core.async.t_cljs$core$async59017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59019){
var self__ = this;
var _59019__$1 = this;
return self__.meta59018;
}));

(cljs.core.async.t_cljs$core$async59017.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59017.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59017.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59017.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59017.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59023 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59023 = (function (f,ch,meta59018,_,fn1,meta59024){
this.f = f;
this.ch = ch;
this.meta59018 = meta59018;
this._ = _;
this.fn1 = fn1;
this.meta59024 = meta59024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59025,meta59024__$1){
var self__ = this;
var _59025__$1 = this;
return (new cljs.core.async.t_cljs$core$async59023(self__.f,self__.ch,self__.meta59018,self__._,self__.fn1,meta59024__$1));
}));

(cljs.core.async.t_cljs$core$async59023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59025){
var self__ = this;
var _59025__$1 = this;
return self__.meta59024;
}));

(cljs.core.async.t_cljs$core$async59023.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async59023.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async59023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__59016_SHARP_){
var G__59032 = (((p1__59016_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__59016_SHARP_) : self__.f.call(null,p1__59016_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__59032) : f1.call(null,G__59032));
});
}));

(cljs.core.async.t_cljs$core$async59023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59018","meta59018",-98750288,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async59017","cljs.core.async/t_cljs$core$async59017",80406746,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta59024","meta59024",-1550819764,null)], null);
}));

(cljs.core.async.t_cljs$core$async59023.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59023");

(cljs.core.async.t_cljs$core$async59023.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59023");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59023.
 */
cljs.core.async.__GT_t_cljs$core$async59023 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59023(f__$1,ch__$1,meta59018__$1,___$2,fn1__$1,meta59024){
return (new cljs.core.async.t_cljs$core$async59023(f__$1,ch__$1,meta59018__$1,___$2,fn1__$1,meta59024));
});

}

return (new cljs.core.async.t_cljs$core$async59023(self__.f,self__.ch,self__.meta59018,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__59038 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__59038) : self__.f.call(null,G__59038));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async59017.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59017.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async59017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59018","meta59018",-98750288,null)], null);
}));

(cljs.core.async.t_cljs$core$async59017.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59017");

(cljs.core.async.t_cljs$core$async59017.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59017");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59017.
 */
cljs.core.async.__GT_t_cljs$core$async59017 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59017(f__$1,ch__$1,meta59018){
return (new cljs.core.async.t_cljs$core$async59017(f__$1,ch__$1,meta59018));
});

}

return (new cljs.core.async.t_cljs$core$async59017(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59039 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59039 = (function (f,ch,meta59040){
this.f = f;
this.ch = ch;
this.meta59040 = meta59040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59041,meta59040__$1){
var self__ = this;
var _59041__$1 = this;
return (new cljs.core.async.t_cljs$core$async59039(self__.f,self__.ch,meta59040__$1));
}));

(cljs.core.async.t_cljs$core$async59039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59041){
var self__ = this;
var _59041__$1 = this;
return self__.meta59040;
}));

(cljs.core.async.t_cljs$core$async59039.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59039.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59039.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59039.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async59039.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59039.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async59039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59040","meta59040",-1041331063,null)], null);
}));

(cljs.core.async.t_cljs$core$async59039.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59039");

(cljs.core.async.t_cljs$core$async59039.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59039");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59039.
 */
cljs.core.async.__GT_t_cljs$core$async59039 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async59039(f__$1,ch__$1,meta59040){
return (new cljs.core.async.t_cljs$core$async59039(f__$1,ch__$1,meta59040));
});

}

return (new cljs.core.async.t_cljs$core$async59039(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59045 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59045 = (function (p,ch,meta59046){
this.p = p;
this.ch = ch;
this.meta59046 = meta59046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59047,meta59046__$1){
var self__ = this;
var _59047__$1 = this;
return (new cljs.core.async.t_cljs$core$async59045(self__.p,self__.ch,meta59046__$1));
}));

(cljs.core.async.t_cljs$core$async59045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59047){
var self__ = this;
var _59047__$1 = this;
return self__.meta59046;
}));

(cljs.core.async.t_cljs$core$async59045.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59045.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59045.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59045.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59045.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async59045.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59045.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async59045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59046","meta59046",-828512811,null)], null);
}));

(cljs.core.async.t_cljs$core$async59045.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59045");

(cljs.core.async.t_cljs$core$async59045.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59045");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59045.
 */
cljs.core.async.__GT_t_cljs$core$async59045 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async59045(p__$1,ch__$1,meta59046){
return (new cljs.core.async.t_cljs$core$async59045(p__$1,ch__$1,meta59046));
});

}

return (new cljs.core.async.t_cljs$core$async59045(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__59057 = arguments.length;
switch (G__59057) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__57480__auto___60586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_59081){
var state_val_59082 = (state_59081[(1)]);
if((state_val_59082 === (7))){
var inst_59077 = (state_59081[(2)]);
var state_59081__$1 = state_59081;
var statearr_59086_60588 = state_59081__$1;
(statearr_59086_60588[(2)] = inst_59077);

(statearr_59086_60588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59082 === (1))){
var state_59081__$1 = state_59081;
var statearr_59087_60590 = state_59081__$1;
(statearr_59087_60590[(2)] = null);

(statearr_59087_60590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59082 === (4))){
var inst_59063 = (state_59081[(7)]);
var inst_59063__$1 = (state_59081[(2)]);
var inst_59064 = (inst_59063__$1 == null);
var state_59081__$1 = (function (){var statearr_59089 = state_59081;
(statearr_59089[(7)] = inst_59063__$1);

return statearr_59089;
})();
if(cljs.core.truth_(inst_59064)){
var statearr_59090_60591 = state_59081__$1;
(statearr_59090_60591[(1)] = (5));

} else {
var statearr_59091_60593 = state_59081__$1;
(statearr_59091_60593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59082 === (6))){
var inst_59063 = (state_59081[(7)]);
var inst_59068 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_59063) : p.call(null,inst_59063));
var state_59081__$1 = state_59081;
if(cljs.core.truth_(inst_59068)){
var statearr_59093_60594 = state_59081__$1;
(statearr_59093_60594[(1)] = (8));

} else {
var statearr_59095_60596 = state_59081__$1;
(statearr_59095_60596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59082 === (3))){
var inst_59079 = (state_59081[(2)]);
var state_59081__$1 = state_59081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59081__$1,inst_59079);
} else {
if((state_val_59082 === (2))){
var state_59081__$1 = state_59081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59081__$1,(4),ch);
} else {
if((state_val_59082 === (11))){
var inst_59071 = (state_59081[(2)]);
var state_59081__$1 = state_59081;
var statearr_59098_60598 = state_59081__$1;
(statearr_59098_60598[(2)] = inst_59071);

(statearr_59098_60598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59082 === (9))){
var state_59081__$1 = state_59081;
var statearr_59099_60599 = state_59081__$1;
(statearr_59099_60599[(2)] = null);

(statearr_59099_60599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59082 === (5))){
var inst_59066 = cljs.core.async.close_BANG_(out);
var state_59081__$1 = state_59081;
var statearr_59100_60600 = state_59081__$1;
(statearr_59100_60600[(2)] = inst_59066);

(statearr_59100_60600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59082 === (10))){
var inst_59074 = (state_59081[(2)]);
var state_59081__$1 = (function (){var statearr_59103 = state_59081;
(statearr_59103[(8)] = inst_59074);

return statearr_59103;
})();
var statearr_59105_60602 = state_59081__$1;
(statearr_59105_60602[(2)] = null);

(statearr_59105_60602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59082 === (8))){
var inst_59063 = (state_59081[(7)]);
var state_59081__$1 = state_59081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59081__$1,(11),out,inst_59063);
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
});
return (function() {
var cljs$core$async$state_machine__57129__auto__ = null;
var cljs$core$async$state_machine__57129__auto____0 = (function (){
var statearr_59106 = [null,null,null,null,null,null,null,null,null];
(statearr_59106[(0)] = cljs$core$async$state_machine__57129__auto__);

(statearr_59106[(1)] = (1));

return statearr_59106;
});
var cljs$core$async$state_machine__57129__auto____1 = (function (state_59081){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_59081);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e59109){var ex__57132__auto__ = e59109;
var statearr_59112_60604 = state_59081;
(statearr_59112_60604[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_59081[(4)]))){
var statearr_59114_60605 = state_59081;
(statearr_59114_60605[(1)] = cljs.core.first((state_59081[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60606 = state_59081;
state_59081 = G__60606;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$state_machine__57129__auto__ = function(state_59081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57129__auto____1.call(this,state_59081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57129__auto____0;
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57129__auto____1;
return cljs$core$async$state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_59116 = f__57481__auto__();
(statearr_59116[(6)] = c__57480__auto___60586);

return statearr_59116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__59118 = arguments.length;
switch (G__59118) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__57480__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_59191){
var state_val_59192 = (state_59191[(1)]);
if((state_val_59192 === (7))){
var inst_59187 = (state_59191[(2)]);
var state_59191__$1 = state_59191;
var statearr_59199_60609 = state_59191__$1;
(statearr_59199_60609[(2)] = inst_59187);

(statearr_59199_60609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59192 === (20))){
var inst_59153 = (state_59191[(7)]);
var inst_59167 = (state_59191[(2)]);
var inst_59168 = cljs.core.next(inst_59153);
var inst_59138 = inst_59168;
var inst_59139 = null;
var inst_59140 = (0);
var inst_59141 = (0);
var state_59191__$1 = (function (){var statearr_59200 = state_59191;
(statearr_59200[(8)] = inst_59139);

(statearr_59200[(9)] = inst_59167);

(statearr_59200[(10)] = inst_59141);

(statearr_59200[(11)] = inst_59138);

(statearr_59200[(12)] = inst_59140);

return statearr_59200;
})();
var statearr_59202_60618 = state_59191__$1;
(statearr_59202_60618[(2)] = null);

(statearr_59202_60618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59192 === (1))){
var state_59191__$1 = state_59191;
var statearr_59205_60620 = state_59191__$1;
(statearr_59205_60620[(2)] = null);

(statearr_59205_60620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59192 === (4))){
var inst_59127 = (state_59191[(13)]);
var inst_59127__$1 = (state_59191[(2)]);
var inst_59128 = (inst_59127__$1 == null);
var state_59191__$1 = (function (){var statearr_59206 = state_59191;
(statearr_59206[(13)] = inst_59127__$1);

return statearr_59206;
})();
if(cljs.core.truth_(inst_59128)){
var statearr_59207_60626 = state_59191__$1;
(statearr_59207_60626[(1)] = (5));

} else {
var statearr_59208_60627 = state_59191__$1;
(statearr_59208_60627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59192 === (15))){
var state_59191__$1 = state_59191;
var statearr_59212_60628 = state_59191__$1;
(statearr_59212_60628[(2)] = null);

(statearr_59212_60628[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59192 === (21))){
var state_59191__$1 = state_59191;
var statearr_59213_60629 = state_59191__$1;
(statearr_59213_60629[(2)] = null);

(statearr_59213_60629[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59192 === (13))){
var inst_59139 = (state_59191[(8)]);
var inst_59141 = (state_59191[(10)]);
var inst_59138 = (state_59191[(11)]);
var inst_59140 = (state_59191[(12)]);
var inst_59148 = (state_59191[(2)]);
var inst_59150 = (inst_59141 + (1));
var tmp59209 = inst_59139;
var tmp59210 = inst_59138;
var tmp59211 = inst_59140;
var inst_59138__$1 = tmp59210;
var inst_59139__$1 = tmp59209;
var inst_59140__$1 = tmp59211;
var inst_59141__$1 = inst_59150;
var state_59191__$1 = (function (){var statearr_59218 = state_59191;
(statearr_59218[(8)] = inst_59139__$1);

(statearr_59218[(10)] = inst_59141__$1);

(statearr_59218[(11)] = inst_59138__$1);

(statearr_59218[(14)] = inst_59148);

(statearr_59218[(12)] = inst_59140__$1);

return statearr_59218;
})();
var statearr_59219_60630 = state_59191__$1;
(statearr_59219_60630[(2)] = null);

(statearr_59219_60630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59192 === (22))){
var state_59191__$1 = state_59191;
var statearr_59220_60631 = state_59191__$1;
(statearr_59220_60631[(2)] = null);

(statearr_59220_60631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59192 === (6))){
var inst_59127 = (state_59191[(13)]);
var inst_59136 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_59127) : f.call(null,inst_59127));
var inst_59137 = cljs.core.seq(inst_59136);
var inst_59138 = inst_59137;
var inst_59139 = null;
var inst_59140 = (0);
var inst_59141 = (0);
var state_59191__$1 = (function (){var statearr_59223 = state_59191;
(statearr_59223[(8)] = inst_59139);

(statearr_59223[(10)] = inst_59141);

(statearr_59223[(11)] = inst_59138);

(statearr_59223[(12)] = inst_59140);

return statearr_59223;
})();
var statearr_59225_60642 = state_59191__$1;
(statearr_59225_60642[(2)] = null);

(statearr_59225_60642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59192 === (17))){
var inst_59153 = (state_59191[(7)]);
var inst_59160 = cljs.core.chunk_first(inst_59153);
var inst_59161 = cljs.core.chunk_rest(inst_59153);
var inst_59162 = cljs.core.count(inst_59160);
var inst_59138 = inst_59161;
var inst_59139 = inst_59160;
var inst_59140 = inst_59162;
var inst_59141 = (0);
var state_59191__$1 = (function (){var statearr_59226 = state_59191;
(statearr_59226[(8)] = inst_59139);

(statearr_59226[(10)] = inst_59141);

(statearr_59226[(11)] = inst_59138);

(statearr_59226[(12)] = inst_59140);

return statearr_59226;
})();
var statearr_59227_60652 = state_59191__$1;
(statearr_59227_60652[(2)] = null);

(statearr_59227_60652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59192 === (3))){
var inst_59189 = (state_59191[(2)]);
var state_59191__$1 = state_59191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59191__$1,inst_59189);
} else {
if((state_val_59192 === (12))){
var inst_59176 = (state_59191[(2)]);
var state_59191__$1 = state_59191;
var statearr_59228_60659 = state_59191__$1;
(statearr_59228_60659[(2)] = inst_59176);

(statearr_59228_60659[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59192 === (2))){
var state_59191__$1 = state_59191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59191__$1,(4),in$);
} else {
if((state_val_59192 === (23))){
var inst_59185 = (state_59191[(2)]);
var state_59191__$1 = state_59191;
var statearr_59232_60666 = state_59191__$1;
(statearr_59232_60666[(2)] = inst_59185);

(statearr_59232_60666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59192 === (19))){
var inst_59171 = (state_59191[(2)]);
var state_59191__$1 = state_59191;
var statearr_59233_60677 = state_59191__$1;
(statearr_59233_60677[(2)] = inst_59171);

(statearr_59233_60677[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59192 === (11))){
var inst_59153 = (state_59191[(7)]);
var inst_59138 = (state_59191[(11)]);
var inst_59153__$1 = cljs.core.seq(inst_59138);
var state_59191__$1 = (function (){var statearr_59235 = state_59191;
(statearr_59235[(7)] = inst_59153__$1);

return statearr_59235;
})();
if(inst_59153__$1){
var statearr_59237_60682 = state_59191__$1;
(statearr_59237_60682[(1)] = (14));

} else {
var statearr_59239_60683 = state_59191__$1;
(statearr_59239_60683[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59192 === (9))){
var inst_59178 = (state_59191[(2)]);
var inst_59179 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_59191__$1 = (function (){var statearr_59240 = state_59191;
(statearr_59240[(15)] = inst_59178);

return statearr_59240;
})();
if(cljs.core.truth_(inst_59179)){
var statearr_59241_60684 = state_59191__$1;
(statearr_59241_60684[(1)] = (21));

} else {
var statearr_59242_60685 = state_59191__$1;
(statearr_59242_60685[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59192 === (5))){
var inst_59130 = cljs.core.async.close_BANG_(out);
var state_59191__$1 = state_59191;
var statearr_59243_60686 = state_59191__$1;
(statearr_59243_60686[(2)] = inst_59130);

(statearr_59243_60686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59192 === (14))){
var inst_59153 = (state_59191[(7)]);
var inst_59158 = cljs.core.chunked_seq_QMARK_(inst_59153);
var state_59191__$1 = state_59191;
if(inst_59158){
var statearr_59244_60689 = state_59191__$1;
(statearr_59244_60689[(1)] = (17));

} else {
var statearr_59245_60691 = state_59191__$1;
(statearr_59245_60691[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59192 === (16))){
var inst_59174 = (state_59191[(2)]);
var state_59191__$1 = state_59191;
var statearr_59246_60692 = state_59191__$1;
(statearr_59246_60692[(2)] = inst_59174);

(statearr_59246_60692[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59192 === (10))){
var inst_59139 = (state_59191[(8)]);
var inst_59141 = (state_59191[(10)]);
var inst_59146 = cljs.core._nth(inst_59139,inst_59141);
var state_59191__$1 = state_59191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59191__$1,(13),out,inst_59146);
} else {
if((state_val_59192 === (18))){
var inst_59153 = (state_59191[(7)]);
var inst_59165 = cljs.core.first(inst_59153);
var state_59191__$1 = state_59191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59191__$1,(20),out,inst_59165);
} else {
if((state_val_59192 === (8))){
var inst_59141 = (state_59191[(10)]);
var inst_59140 = (state_59191[(12)]);
var inst_59143 = (inst_59141 < inst_59140);
var inst_59144 = inst_59143;
var state_59191__$1 = state_59191;
if(cljs.core.truth_(inst_59144)){
var statearr_59248_60696 = state_59191__$1;
(statearr_59248_60696[(1)] = (10));

} else {
var statearr_59249_60697 = state_59191__$1;
(statearr_59249_60697[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__57129__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__57129__auto____0 = (function (){
var statearr_59250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59250[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__57129__auto__);

(statearr_59250[(1)] = (1));

return statearr_59250;
});
var cljs$core$async$mapcat_STAR__$_state_machine__57129__auto____1 = (function (state_59191){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_59191);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e59251){var ex__57132__auto__ = e59251;
var statearr_59252_60699 = state_59191;
(statearr_59252_60699[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_59191[(4)]))){
var statearr_59253_60700 = state_59191;
(statearr_59253_60700[(1)] = cljs.core.first((state_59191[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60702 = state_59191;
state_59191 = G__60702;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__57129__auto__ = function(state_59191){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__57129__auto____1.call(this,state_59191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__57129__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__57129__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_59259 = f__57481__auto__();
(statearr_59259[(6)] = c__57480__auto__);

return statearr_59259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));

return c__57480__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__59262 = arguments.length;
switch (G__59262) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__59269 = arguments.length;
switch (G__59269) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__59277 = arguments.length;
switch (G__59277) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__57480__auto___60719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_59309){
var state_val_59310 = (state_59309[(1)]);
if((state_val_59310 === (7))){
var inst_59304 = (state_59309[(2)]);
var state_59309__$1 = state_59309;
var statearr_59315_60727 = state_59309__$1;
(statearr_59315_60727[(2)] = inst_59304);

(statearr_59315_60727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59310 === (1))){
var inst_59282 = null;
var state_59309__$1 = (function (){var statearr_59319 = state_59309;
(statearr_59319[(7)] = inst_59282);

return statearr_59319;
})();
var statearr_59320_60733 = state_59309__$1;
(statearr_59320_60733[(2)] = null);

(statearr_59320_60733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59310 === (4))){
var inst_59285 = (state_59309[(8)]);
var inst_59285__$1 = (state_59309[(2)]);
var inst_59286 = (inst_59285__$1 == null);
var inst_59287 = cljs.core.not(inst_59286);
var state_59309__$1 = (function (){var statearr_59321 = state_59309;
(statearr_59321[(8)] = inst_59285__$1);

return statearr_59321;
})();
if(inst_59287){
var statearr_59322_60740 = state_59309__$1;
(statearr_59322_60740[(1)] = (5));

} else {
var statearr_59323_60746 = state_59309__$1;
(statearr_59323_60746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59310 === (6))){
var state_59309__$1 = state_59309;
var statearr_59327_60748 = state_59309__$1;
(statearr_59327_60748[(2)] = null);

(statearr_59327_60748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59310 === (3))){
var inst_59306 = (state_59309[(2)]);
var inst_59307 = cljs.core.async.close_BANG_(out);
var state_59309__$1 = (function (){var statearr_59331 = state_59309;
(statearr_59331[(9)] = inst_59306);

return statearr_59331;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59309__$1,inst_59307);
} else {
if((state_val_59310 === (2))){
var state_59309__$1 = state_59309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59309__$1,(4),ch);
} else {
if((state_val_59310 === (11))){
var inst_59285 = (state_59309[(8)]);
var inst_59297 = (state_59309[(2)]);
var inst_59282 = inst_59285;
var state_59309__$1 = (function (){var statearr_59332 = state_59309;
(statearr_59332[(7)] = inst_59282);

(statearr_59332[(10)] = inst_59297);

return statearr_59332;
})();
var statearr_59336_60769 = state_59309__$1;
(statearr_59336_60769[(2)] = null);

(statearr_59336_60769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59310 === (9))){
var inst_59285 = (state_59309[(8)]);
var state_59309__$1 = state_59309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59309__$1,(11),out,inst_59285);
} else {
if((state_val_59310 === (5))){
var inst_59282 = (state_59309[(7)]);
var inst_59285 = (state_59309[(8)]);
var inst_59289 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59285,inst_59282);
var state_59309__$1 = state_59309;
if(inst_59289){
var statearr_59338_60779 = state_59309__$1;
(statearr_59338_60779[(1)] = (8));

} else {
var statearr_59339_60785 = state_59309__$1;
(statearr_59339_60785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59310 === (10))){
var inst_59301 = (state_59309[(2)]);
var state_59309__$1 = state_59309;
var statearr_59340_60791 = state_59309__$1;
(statearr_59340_60791[(2)] = inst_59301);

(statearr_59340_60791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59310 === (8))){
var inst_59282 = (state_59309[(7)]);
var tmp59337 = inst_59282;
var inst_59282__$1 = tmp59337;
var state_59309__$1 = (function (){var statearr_59342 = state_59309;
(statearr_59342[(7)] = inst_59282__$1);

return statearr_59342;
})();
var statearr_59344_60799 = state_59309__$1;
(statearr_59344_60799[(2)] = null);

(statearr_59344_60799[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__57129__auto__ = null;
var cljs$core$async$state_machine__57129__auto____0 = (function (){
var statearr_59346 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59346[(0)] = cljs$core$async$state_machine__57129__auto__);

(statearr_59346[(1)] = (1));

return statearr_59346;
});
var cljs$core$async$state_machine__57129__auto____1 = (function (state_59309){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_59309);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e59347){var ex__57132__auto__ = e59347;
var statearr_59348_60816 = state_59309;
(statearr_59348_60816[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_59309[(4)]))){
var statearr_59349_60817 = state_59309;
(statearr_59349_60817[(1)] = cljs.core.first((state_59309[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60818 = state_59309;
state_59309 = G__60818;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$state_machine__57129__auto__ = function(state_59309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57129__auto____1.call(this,state_59309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57129__auto____0;
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57129__auto____1;
return cljs$core$async$state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_59350 = f__57481__auto__();
(statearr_59350[(6)] = c__57480__auto___60719);

return statearr_59350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__59352 = arguments.length;
switch (G__59352) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__57480__auto___60821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_59390){
var state_val_59391 = (state_59390[(1)]);
if((state_val_59391 === (7))){
var inst_59386 = (state_59390[(2)]);
var state_59390__$1 = state_59390;
var statearr_59400_60826 = state_59390__$1;
(statearr_59400_60826[(2)] = inst_59386);

(statearr_59400_60826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59391 === (1))){
var inst_59353 = (new Array(n));
var inst_59354 = inst_59353;
var inst_59355 = (0);
var state_59390__$1 = (function (){var statearr_59405 = state_59390;
(statearr_59405[(7)] = inst_59355);

(statearr_59405[(8)] = inst_59354);

return statearr_59405;
})();
var statearr_59406_60834 = state_59390__$1;
(statearr_59406_60834[(2)] = null);

(statearr_59406_60834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59391 === (4))){
var inst_59358 = (state_59390[(9)]);
var inst_59358__$1 = (state_59390[(2)]);
var inst_59359 = (inst_59358__$1 == null);
var inst_59360 = cljs.core.not(inst_59359);
var state_59390__$1 = (function (){var statearr_59407 = state_59390;
(statearr_59407[(9)] = inst_59358__$1);

return statearr_59407;
})();
if(inst_59360){
var statearr_59408_60839 = state_59390__$1;
(statearr_59408_60839[(1)] = (5));

} else {
var statearr_59409_60841 = state_59390__$1;
(statearr_59409_60841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59391 === (15))){
var inst_59380 = (state_59390[(2)]);
var state_59390__$1 = state_59390;
var statearr_59410_60845 = state_59390__$1;
(statearr_59410_60845[(2)] = inst_59380);

(statearr_59410_60845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59391 === (13))){
var state_59390__$1 = state_59390;
var statearr_59411_60846 = state_59390__$1;
(statearr_59411_60846[(2)] = null);

(statearr_59411_60846[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59391 === (6))){
var inst_59355 = (state_59390[(7)]);
var inst_59376 = (inst_59355 > (0));
var state_59390__$1 = state_59390;
if(cljs.core.truth_(inst_59376)){
var statearr_59412_60848 = state_59390__$1;
(statearr_59412_60848[(1)] = (12));

} else {
var statearr_59413_60849 = state_59390__$1;
(statearr_59413_60849[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59391 === (3))){
var inst_59388 = (state_59390[(2)]);
var state_59390__$1 = state_59390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59390__$1,inst_59388);
} else {
if((state_val_59391 === (12))){
var inst_59354 = (state_59390[(8)]);
var inst_59378 = cljs.core.vec(inst_59354);
var state_59390__$1 = state_59390;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59390__$1,(15),out,inst_59378);
} else {
if((state_val_59391 === (2))){
var state_59390__$1 = state_59390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59390__$1,(4),ch);
} else {
if((state_val_59391 === (11))){
var inst_59370 = (state_59390[(2)]);
var inst_59371 = (new Array(n));
var inst_59354 = inst_59371;
var inst_59355 = (0);
var state_59390__$1 = (function (){var statearr_59417 = state_59390;
(statearr_59417[(7)] = inst_59355);

(statearr_59417[(10)] = inst_59370);

(statearr_59417[(8)] = inst_59354);

return statearr_59417;
})();
var statearr_59418_60854 = state_59390__$1;
(statearr_59418_60854[(2)] = null);

(statearr_59418_60854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59391 === (9))){
var inst_59354 = (state_59390[(8)]);
var inst_59368 = cljs.core.vec(inst_59354);
var state_59390__$1 = state_59390;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59390__$1,(11),out,inst_59368);
} else {
if((state_val_59391 === (5))){
var inst_59363 = (state_59390[(11)]);
var inst_59355 = (state_59390[(7)]);
var inst_59358 = (state_59390[(9)]);
var inst_59354 = (state_59390[(8)]);
var inst_59362 = (inst_59354[inst_59355] = inst_59358);
var inst_59363__$1 = (inst_59355 + (1));
var inst_59364 = (inst_59363__$1 < n);
var state_59390__$1 = (function (){var statearr_59419 = state_59390;
(statearr_59419[(11)] = inst_59363__$1);

(statearr_59419[(12)] = inst_59362);

return statearr_59419;
})();
if(cljs.core.truth_(inst_59364)){
var statearr_59420_60860 = state_59390__$1;
(statearr_59420_60860[(1)] = (8));

} else {
var statearr_59421_60861 = state_59390__$1;
(statearr_59421_60861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59391 === (14))){
var inst_59383 = (state_59390[(2)]);
var inst_59384 = cljs.core.async.close_BANG_(out);
var state_59390__$1 = (function (){var statearr_59423 = state_59390;
(statearr_59423[(13)] = inst_59383);

return statearr_59423;
})();
var statearr_59424_60864 = state_59390__$1;
(statearr_59424_60864[(2)] = inst_59384);

(statearr_59424_60864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59391 === (10))){
var inst_59374 = (state_59390[(2)]);
var state_59390__$1 = state_59390;
var statearr_59425_60866 = state_59390__$1;
(statearr_59425_60866[(2)] = inst_59374);

(statearr_59425_60866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59391 === (8))){
var inst_59363 = (state_59390[(11)]);
var inst_59354 = (state_59390[(8)]);
var tmp59422 = inst_59354;
var inst_59354__$1 = tmp59422;
var inst_59355 = inst_59363;
var state_59390__$1 = (function (){var statearr_59426 = state_59390;
(statearr_59426[(7)] = inst_59355);

(statearr_59426[(8)] = inst_59354__$1);

return statearr_59426;
})();
var statearr_59427_60879 = state_59390__$1;
(statearr_59427_60879[(2)] = null);

(statearr_59427_60879[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__57129__auto__ = null;
var cljs$core$async$state_machine__57129__auto____0 = (function (){
var statearr_59428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59428[(0)] = cljs$core$async$state_machine__57129__auto__);

(statearr_59428[(1)] = (1));

return statearr_59428;
});
var cljs$core$async$state_machine__57129__auto____1 = (function (state_59390){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_59390);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e59429){var ex__57132__auto__ = e59429;
var statearr_59430_60894 = state_59390;
(statearr_59430_60894[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_59390[(4)]))){
var statearr_59431_60898 = state_59390;
(statearr_59431_60898[(1)] = cljs.core.first((state_59390[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60903 = state_59390;
state_59390 = G__60903;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$state_machine__57129__auto__ = function(state_59390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57129__auto____1.call(this,state_59390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57129__auto____0;
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57129__auto____1;
return cljs$core$async$state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_59432 = f__57481__auto__();
(statearr_59432[(6)] = c__57480__auto___60821);

return statearr_59432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__59434 = arguments.length;
switch (G__59434) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__57480__auto___60923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57481__auto__ = (function (){var switch__57128__auto__ = (function (state_59476){
var state_val_59477 = (state_59476[(1)]);
if((state_val_59477 === (7))){
var inst_59472 = (state_59476[(2)]);
var state_59476__$1 = state_59476;
var statearr_59478_60924 = state_59476__$1;
(statearr_59478_60924[(2)] = inst_59472);

(statearr_59478_60924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59477 === (1))){
var inst_59435 = [];
var inst_59436 = inst_59435;
var inst_59437 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_59476__$1 = (function (){var statearr_59479 = state_59476;
(statearr_59479[(7)] = inst_59436);

(statearr_59479[(8)] = inst_59437);

return statearr_59479;
})();
var statearr_59480_60926 = state_59476__$1;
(statearr_59480_60926[(2)] = null);

(statearr_59480_60926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59477 === (4))){
var inst_59440 = (state_59476[(9)]);
var inst_59440__$1 = (state_59476[(2)]);
var inst_59441 = (inst_59440__$1 == null);
var inst_59442 = cljs.core.not(inst_59441);
var state_59476__$1 = (function (){var statearr_59481 = state_59476;
(statearr_59481[(9)] = inst_59440__$1);

return statearr_59481;
})();
if(inst_59442){
var statearr_59482_60927 = state_59476__$1;
(statearr_59482_60927[(1)] = (5));

} else {
var statearr_59483_60928 = state_59476__$1;
(statearr_59483_60928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59477 === (15))){
var inst_59466 = (state_59476[(2)]);
var state_59476__$1 = state_59476;
var statearr_59484_60929 = state_59476__$1;
(statearr_59484_60929[(2)] = inst_59466);

(statearr_59484_60929[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59477 === (13))){
var state_59476__$1 = state_59476;
var statearr_59485_60933 = state_59476__$1;
(statearr_59485_60933[(2)] = null);

(statearr_59485_60933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59477 === (6))){
var inst_59436 = (state_59476[(7)]);
var inst_59461 = inst_59436.length;
var inst_59462 = (inst_59461 > (0));
var state_59476__$1 = state_59476;
if(cljs.core.truth_(inst_59462)){
var statearr_59486_60934 = state_59476__$1;
(statearr_59486_60934[(1)] = (12));

} else {
var statearr_59487_60939 = state_59476__$1;
(statearr_59487_60939[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59477 === (3))){
var inst_59474 = (state_59476[(2)]);
var state_59476__$1 = state_59476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59476__$1,inst_59474);
} else {
if((state_val_59477 === (12))){
var inst_59436 = (state_59476[(7)]);
var inst_59464 = cljs.core.vec(inst_59436);
var state_59476__$1 = state_59476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59476__$1,(15),out,inst_59464);
} else {
if((state_val_59477 === (2))){
var state_59476__$1 = state_59476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59476__$1,(4),ch);
} else {
if((state_val_59477 === (11))){
var inst_59444 = (state_59476[(10)]);
var inst_59440 = (state_59476[(9)]);
var inst_59454 = (state_59476[(2)]);
var inst_59455 = [];
var inst_59456 = inst_59455.push(inst_59440);
var inst_59436 = inst_59455;
var inst_59437 = inst_59444;
var state_59476__$1 = (function (){var statearr_59488 = state_59476;
(statearr_59488[(7)] = inst_59436);

(statearr_59488[(11)] = inst_59456);

(statearr_59488[(8)] = inst_59437);

(statearr_59488[(12)] = inst_59454);

return statearr_59488;
})();
var statearr_59489_60948 = state_59476__$1;
(statearr_59489_60948[(2)] = null);

(statearr_59489_60948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59477 === (9))){
var inst_59436 = (state_59476[(7)]);
var inst_59452 = cljs.core.vec(inst_59436);
var state_59476__$1 = state_59476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59476__$1,(11),out,inst_59452);
} else {
if((state_val_59477 === (5))){
var inst_59444 = (state_59476[(10)]);
var inst_59437 = (state_59476[(8)]);
var inst_59440 = (state_59476[(9)]);
var inst_59444__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_59440) : f.call(null,inst_59440));
var inst_59445 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59444__$1,inst_59437);
var inst_59446 = cljs.core.keyword_identical_QMARK_(inst_59437,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_59447 = ((inst_59445) || (inst_59446));
var state_59476__$1 = (function (){var statearr_59490 = state_59476;
(statearr_59490[(10)] = inst_59444__$1);

return statearr_59490;
})();
if(cljs.core.truth_(inst_59447)){
var statearr_59491_60953 = state_59476__$1;
(statearr_59491_60953[(1)] = (8));

} else {
var statearr_59492_60954 = state_59476__$1;
(statearr_59492_60954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59477 === (14))){
var inst_59469 = (state_59476[(2)]);
var inst_59470 = cljs.core.async.close_BANG_(out);
var state_59476__$1 = (function (){var statearr_59494 = state_59476;
(statearr_59494[(13)] = inst_59469);

return statearr_59494;
})();
var statearr_59495_60955 = state_59476__$1;
(statearr_59495_60955[(2)] = inst_59470);

(statearr_59495_60955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59477 === (10))){
var inst_59459 = (state_59476[(2)]);
var state_59476__$1 = state_59476;
var statearr_59496_60956 = state_59476__$1;
(statearr_59496_60956[(2)] = inst_59459);

(statearr_59496_60956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59477 === (8))){
var inst_59444 = (state_59476[(10)]);
var inst_59436 = (state_59476[(7)]);
var inst_59440 = (state_59476[(9)]);
var inst_59449 = inst_59436.push(inst_59440);
var tmp59493 = inst_59436;
var inst_59436__$1 = tmp59493;
var inst_59437 = inst_59444;
var state_59476__$1 = (function (){var statearr_59497 = state_59476;
(statearr_59497[(14)] = inst_59449);

(statearr_59497[(7)] = inst_59436__$1);

(statearr_59497[(8)] = inst_59437);

return statearr_59497;
})();
var statearr_59498_60957 = state_59476__$1;
(statearr_59498_60957[(2)] = null);

(statearr_59498_60957[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__57129__auto__ = null;
var cljs$core$async$state_machine__57129__auto____0 = (function (){
var statearr_59499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59499[(0)] = cljs$core$async$state_machine__57129__auto__);

(statearr_59499[(1)] = (1));

return statearr_59499;
});
var cljs$core$async$state_machine__57129__auto____1 = (function (state_59476){
while(true){
var ret_value__57130__auto__ = (function (){try{while(true){
var result__57131__auto__ = switch__57128__auto__(state_59476);
if(cljs.core.keyword_identical_QMARK_(result__57131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57131__auto__;
}
break;
}
}catch (e59500){var ex__57132__auto__ = e59500;
var statearr_59501_60958 = state_59476;
(statearr_59501_60958[(2)] = ex__57132__auto__);


if(cljs.core.seq((state_59476[(4)]))){
var statearr_59502_60959 = state_59476;
(statearr_59502_60959[(1)] = cljs.core.first((state_59476[(4)])));

} else {
throw ex__57132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60963 = state_59476;
state_59476 = G__60963;
continue;
} else {
return ret_value__57130__auto__;
}
break;
}
});
cljs$core$async$state_machine__57129__auto__ = function(state_59476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57129__auto____1.call(this,state_59476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57129__auto____0;
cljs$core$async$state_machine__57129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57129__auto____1;
return cljs$core$async$state_machine__57129__auto__;
})()
})();
var state__57482__auto__ = (function (){var statearr_59503 = f__57481__auto__();
(statearr_59503[(6)] = c__57480__auto___60923);

return statearr_59503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57482__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
