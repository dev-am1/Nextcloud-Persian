!function (e) {
    function t(t) {
        for (var n, o, i = t[0], u = t[1], a = 0, l = []; a < i.length; a++) o = i[a], Object.prototype.hasOwnProperty.call(r, o) && r[o] && l.push(r[o][0]), r[o] = 0;
        for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
        for (s && s(t); l.length;) l.shift()()
    }

    var n = {}, r = {3: 0};

    function o(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {i: t, l: !1, exports: {}};
        return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }

    o.e = function (e) {
        var t = [], n = r[e];
        if (0 !== n) if (n) t.push(n[2]); else {
            var i = new Promise((function (t, o) {
                n = r[e] = [t, o]
            }));
            t.push(n[2] = i);
            var u, a = document.createElement("script");
            a.charset = "utf-8", a.timeout = 120, o.nc && a.setAttribute("nonce", o.nc), a.src = function (e) {
                return o.p + "photos." + ({}[e] || e) + ".js?v=" + {
                    0: "5b8de0094090d03c3555",
                    1: "c290b053f0260110d7ae",
                    2: "924db3e377e5e0df07c8",
                    4: "b068b4dab4a7e432c3b8",
                    5: "61f93e5c652b52d33639",
                    6: "4edfe7d78e98decbe460",
                    7: "b8f1a3a18df9f0bccca4",
                    8: "eba0245cd354f539f1a0",
                    9: "c4cba98b884d55919d99"
                }[e]
            }(e);
            var s = new Error;
            u = function (t) {
                a.onerror = a.onload = null, clearTimeout(l);
                var n = r[e];
                if (0 !== n) {
                    if (n) {
                        var o = t && ("load" === t.type ? "missing" : t.type), i = t && t.target && t.target.src;
                        s.message = "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")", s.name = "ChunkLoadError", s.type = o, s.request = i, n[1](s)
                    }
                    r[e] = void 0
                }
            };
            var l = setTimeout((function () {
                u({type: "timeout", target: a})
            }), 12e4);
            a.onerror = a.onload = u, document.head.appendChild(a)
        }
        return Promise.all(t)
    }, o.m = e, o.c = n, o.d = function (e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, o.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, o.t = function (e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) o.d(n, r, function (t) {
            return e[t]
        }.bind(null, r));
        return n
    }, o.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/js/", o.oe = function (e) {
        throw console.error(e), e
    };
    var i = window.webpackJsonp = window.webpackJsonp || [], u = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var a = 0; a < i.length; a++) t(i[a]);
    var s = u;
    o(o.s = 233)
}([function (e, t, n) {
    "use strict";
    n.r(t), function (e, n) {
        /*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
        var r = Object.freeze({});

        function o(e) {
            return null == e
        }

        function i(e) {
            return null != e
        }

        function u(e) {
            return !0 === e
        }

        function a(e) {
            return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e
        }

        function s(e) {
            return null !== e && "object" == typeof e
        }

        var l = Object.prototype.toString;

        function c(e) {
            return "[object Object]" === l.call(e)
        }

        function A(e) {
            return "[object RegExp]" === l.call(e)
        }

        function p(e) {
            var t = parseFloat(String(e));
            return t >= 0 && Math.floor(t) === t && isFinite(e)
        }

        function f(e) {
            return i(e) && "function" == typeof e.then && "function" == typeof e.catch
        }

        function d(e) {
            return null == e ? "" : Array.isArray(e) || c(e) && e.toString === l ? JSON.stringify(e, null, 2) : String(e)
        }

        function m(e) {
            var t = parseFloat(e);
            return isNaN(t) ? e : t
        }

        function h(e, t) {
            for (var n = Object.create(null), r = e.split(","), o = 0; o < r.length; o++) n[r[o]] = !0;
            return t ? function (e) {
                return n[e.toLowerCase()]
            } : function (e) {
                return n[e]
            }
        }

        h("slot,component", !0);
        var g = h("key,ref,slot,slot-scope,is");

        function v(e, t) {
            if (e.length) {
                var n = e.indexOf(t);
                if (n > -1) return e.splice(n, 1)
            }
        }

        var D = Object.prototype.hasOwnProperty;

        function y(e, t) {
            return D.call(e, t)
        }

        function E(e) {
            var t = Object.create(null);
            return function (n) {
                return t[n] || (t[n] = e(n))
            }
        }

        var C = /-(\w)/g, b = E((function (e) {
            return e.replace(C, (function (e, t) {
                return t ? t.toUpperCase() : ""
            }))
        })), x = E((function (e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        })), w = /\B([A-Z])/g, T = E((function (e) {
            return e.replace(w, "-$1").toLowerCase()
        }));
        var B = Function.prototype.bind ? function (e, t) {
            return e.bind(t)
        } : function (e, t) {
            function n(n) {
                var r = arguments.length;
                return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
            }

            return n._length = e.length, n
        };

        function F(e, t) {
            t = t || 0;
            for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t];
            return r
        }

        function M(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function I(e) {
            for (var t = {}, n = 0; n < e.length; n++) e[n] && M(t, e[n]);
            return t
        }

        function _(e, t, n) {
        }

        var S = function (e, t, n) {
            return !1
        }, N = function (e) {
            return e
        };

        function O(e, t) {
            if (e === t) return !0;
            var n = s(e), r = s(t);
            if (!n || !r) return !n && !r && String(e) === String(t);
            try {
                var o = Array.isArray(e), i = Array.isArray(t);
                if (o && i) return e.length === t.length && e.every((function (e, n) {
                    return O(e, t[n])
                }));
                if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
                if (o || i) return !1;
                var u = Object.keys(e), a = Object.keys(t);
                return u.length === a.length && u.every((function (n) {
                    return O(e[n], t[n])
                }))
            } catch (e) {
                return !1
            }
        }

        function L(e, t) {
            for (var n = 0; n < e.length; n++) if (O(e[n], t)) return n;
            return -1
        }

        function k(e) {
            var t = !1;
            return function () {
                t || (t = !0, e.apply(this, arguments))
            }
        }

        var j = ["component", "directive", "filter"],
            R = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
            P = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: S,
                isReservedAttr: S,
                isUnknownElement: S,
                getTagNamespace: _,
                parsePlatformTagName: N,
                mustUseProp: S,
                async: !0,
                _lifecycleHooks: R
            },
            U = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

        function Q(e, t, n, r) {
            Object.defineProperty(e, t, {value: n, enumerable: !!r, writable: !0, configurable: !0})
        }

        var G = new RegExp("[^" + U.source + ".$_\\d]");
        var z, Y = "__proto__" in {}, $ = "undefined" != typeof window,
            Z = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
            H = Z && WXEnvironment.platform.toLowerCase(), W = $ && window.navigator.userAgent.toLowerCase(),
            V = W && /msie|trident/.test(W), X = W && W.indexOf("msie 9.0") > 0, J = W && W.indexOf("edge/") > 0,
            K = (W && W.indexOf("android"), W && /iphone|ipad|ipod|ios/.test(W) || "ios" === H),
            q = (W && /chrome\/\d+/.test(W), W && /phantomjs/.test(W), W && W.match(/firefox\/(\d+)/)), ee = {}.watch,
            te = !1;
        if ($) try {
            var ne = {};
            Object.defineProperty(ne, "passive", {
                get: function () {
                    te = !0
                }
            }), window.addEventListener("test-passive", null, ne)
        } catch (e) {
        }
        var re = function () {
            return void 0 === z && (z = !$ && !Z && void 0 !== e && (e.process && "server" === e.process.env.VUE_ENV)), z
        }, oe = $ && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

        function ie(e) {
            return "function" == typeof e && /native code/.test(e.toString())
        }

        var ue, ae = "undefined" != typeof Symbol && ie(Symbol) && "undefined" != typeof Reflect && ie(Reflect.ownKeys);
        ue = "undefined" != typeof Set && ie(Set) ? Set : function () {
            function e() {
                this.set = Object.create(null)
            }

            return e.prototype.has = function (e) {
                return !0 === this.set[e]
            }, e.prototype.add = function (e) {
                this.set[e] = !0
            }, e.prototype.clear = function () {
                this.set = Object.create(null)
            }, e
        }();
        var se = _, le = 0, ce = function () {
            this.id = le++, this.subs = []
        };
        ce.prototype.addSub = function (e) {
            this.subs.push(e)
        }, ce.prototype.removeSub = function (e) {
            v(this.subs, e)
        }, ce.prototype.depend = function () {
            ce.target && ce.target.addDep(this)
        }, ce.prototype.notify = function () {
            var e = this.subs.slice();
            for (var t = 0, n = e.length; t < n; t++) e[t].update()
        }, ce.target = null;
        var Ae = [];

        function pe(e) {
            Ae.push(e), ce.target = e
        }

        function fe() {
            Ae.pop(), ce.target = Ae[Ae.length - 1]
        }

        var de = function (e, t, n, r, o, i, u, a) {
            this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = o, this.ns = void 0, this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = u, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = a, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
        }, me = {child: {configurable: !0}};
        me.child.get = function () {
            return this.componentInstance
        }, Object.defineProperties(de.prototype, me);
        var he = function (e) {
            void 0 === e && (e = "");
            var t = new de;
            return t.text = e, t.isComment = !0, t
        };

        function ge(e) {
            return new de(void 0, void 0, void 0, String(e))
        }

        function ve(e) {
            var t = new de(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
            return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t
        }

        var De = Array.prototype, ye = Object.create(De);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach((function (e) {
            var t = De[e];
            Q(ye, e, (function () {
                for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
                var o, i = t.apply(this, n), u = this.__ob__;
                switch (e) {
                    case"push":
                    case"unshift":
                        o = n;
                        break;
                    case"splice":
                        o = n.slice(2)
                }
                return o && u.observeArray(o), u.dep.notify(), i
            }))
        }));
        var Ee = Object.getOwnPropertyNames(ye), Ce = !0;

        function be(e) {
            Ce = e
        }

        var xe = function (e) {
            this.value = e, this.dep = new ce, this.vmCount = 0, Q(e, "__ob__", this), Array.isArray(e) ? (Y ? function (e, t) {
                e.__proto__ = t
            }(e, ye) : function (e, t, n) {
                for (var r = 0, o = n.length; r < o; r++) {
                    var i = n[r];
                    Q(e, i, t[i])
                }
            }(e, ye, Ee), this.observeArray(e)) : this.walk(e)
        };

        function we(e, t) {
            var n;
            if (s(e) && !(e instanceof de)) return y(e, "__ob__") && e.__ob__ instanceof xe ? n = e.__ob__ : Ce && !re() && (Array.isArray(e) || c(e)) && Object.isExtensible(e) && !e._isVue && (n = new xe(e)), t && n && n.vmCount++, n
        }

        function Te(e, t, n, r, o) {
            var i = new ce, u = Object.getOwnPropertyDescriptor(e, t);
            if (!u || !1 !== u.configurable) {
                var a = u && u.get, s = u && u.set;
                a && !s || 2 !== arguments.length || (n = e[t]);
                var l = !o && we(n);
                Object.defineProperty(e, t, {
                    enumerable: !0, configurable: !0, get: function () {
                        var t = a ? a.call(e) : n;
                        return ce.target && (i.depend(), l && (l.dep.depend(), Array.isArray(t) && Me(t))), t
                    }, set: function (t) {
                        var r = a ? a.call(e) : n;
                        t === r || t != t && r != r || a && !s || (s ? s.call(e, t) : n = t, l = !o && we(t), i.notify())
                    }
                })
            }
        }

        function Be(e, t, n) {
            if (Array.isArray(e) && p(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
            if (t in e && !(t in Object.prototype)) return e[t] = n, n;
            var r = e.__ob__;
            return e._isVue || r && r.vmCount ? n : r ? (Te(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n)
        }

        function Fe(e, t) {
            if (Array.isArray(e) && p(t)) e.splice(t, 1); else {
                var n = e.__ob__;
                e._isVue || n && n.vmCount || y(e, t) && (delete e[t], n && n.dep.notify())
            }
        }

        function Me(e) {
            for (var t = void 0, n = 0, r = e.length; n < r; n++) (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && Me(t)
        }

        xe.prototype.walk = function (e) {
            for (var t = Object.keys(e), n = 0; n < t.length; n++) Te(e, t[n])
        }, xe.prototype.observeArray = function (e) {
            for (var t = 0, n = e.length; t < n; t++) we(e[t])
        };
        var Ie = P.optionMergeStrategies;

        function _e(e, t) {
            if (!t) return e;
            for (var n, r, o, i = ae ? Reflect.ownKeys(t) : Object.keys(t), u = 0; u < i.length; u++) "__ob__" !== (n = i[u]) && (r = e[n], o = t[n], y(e, n) ? r !== o && c(r) && c(o) && _e(r, o) : Be(e, n, o));
            return e
        }

        function Se(e, t, n) {
            return n ? function () {
                var r = "function" == typeof t ? t.call(n, n) : t, o = "function" == typeof e ? e.call(n, n) : e;
                return r ? _e(r, o) : o
            } : t ? e ? function () {
                return _e("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e)
            } : t : e
        }

        function Ne(e, t) {
            var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
            return n ? function (e) {
                for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
                return t
            }(n) : n
        }

        function Oe(e, t, n, r) {
            var o = Object.create(e || null);
            return t ? M(o, t) : o
        }

        Ie.data = function (e, t, n) {
            return n ? Se(e, t, n) : t && "function" != typeof t ? e : Se(e, t)
        }, R.forEach((function (e) {
            Ie[e] = Ne
        })), j.forEach((function (e) {
            Ie[e + "s"] = Oe
        })), Ie.watch = function (e, t, n, r) {
            if (e === ee && (e = void 0), t === ee && (t = void 0), !t) return Object.create(e || null);
            if (!e) return t;
            var o = {};
            for (var i in M(o, e), t) {
                var u = o[i], a = t[i];
                u && !Array.isArray(u) && (u = [u]), o[i] = u ? u.concat(a) : Array.isArray(a) ? a : [a]
            }
            return o
        }, Ie.props = Ie.methods = Ie.inject = Ie.computed = function (e, t, n, r) {
            if (!e) return t;
            var o = Object.create(null);
            return M(o, e), t && M(o, t), o
        }, Ie.provide = Se;
        var Le = function (e, t) {
            return void 0 === t ? e : t
        };

        function ke(e, t, n) {
            if ("function" == typeof t && (t = t.options), function (e, t) {
                var n = e.props;
                if (n) {
                    var r, o, i = {};
                    if (Array.isArray(n)) for (r = n.length; r--;) "string" == typeof (o = n[r]) && (i[b(o)] = {type: null}); else if (c(n)) for (var u in n) o = n[u], i[b(u)] = c(o) ? o : {type: o}; else 0;
                    e.props = i
                }
            }(t), function (e, t) {
                var n = e.inject;
                if (n) {
                    var r = e.inject = {};
                    if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r[n[o]] = {from: n[o]}; else if (c(n)) for (var i in n) {
                        var u = n[i];
                        r[i] = c(u) ? M({from: i}, u) : {from: u}
                    } else 0
                }
            }(t), function (e) {
                var t = e.directives;
                if (t) for (var n in t) {
                    var r = t[n];
                    "function" == typeof r && (t[n] = {bind: r, update: r})
                }
            }(t), !t._base && (t.extends && (e = ke(e, t.extends, n)), t.mixins)) for (var r = 0, o = t.mixins.length; r < o; r++) e = ke(e, t.mixins[r], n);
            var i, u = {};
            for (i in e) a(i);
            for (i in t) y(e, i) || a(i);

            function a(r) {
                var o = Ie[r] || Le;
                u[r] = o(e[r], t[r], n, r)
            }

            return u
        }

        function je(e, t, n, r) {
            if ("string" == typeof n) {
                var o = e[t];
                if (y(o, n)) return o[n];
                var i = b(n);
                if (y(o, i)) return o[i];
                var u = x(i);
                return y(o, u) ? o[u] : o[n] || o[i] || o[u]
            }
        }

        function Re(e, t, n, r) {
            var o = t[e], i = !y(n, e), u = n[e], a = Qe(Boolean, o.type);
            if (a > -1) if (i && !y(o, "default")) u = !1; else if ("" === u || u === T(e)) {
                var s = Qe(String, o.type);
                (s < 0 || a < s) && (u = !0)
            }
            if (void 0 === u) {
                u = function (e, t, n) {
                    if (!y(t, "default")) return;
                    var r = t.default;
                    0;
                    if (e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n]) return e._props[n];
                    return "function" == typeof r && "Function" !== Pe(t.type) ? r.call(e) : r
                }(r, o, e);
                var l = Ce;
                be(!0), we(u), be(l)
            }
            return u
        }

        function Pe(e) {
            var t = e && e.toString().match(/^\s*function (\w+)/);
            return t ? t[1] : ""
        }

        function Ue(e, t) {
            return Pe(e) === Pe(t)
        }

        function Qe(e, t) {
            if (!Array.isArray(t)) return Ue(t, e) ? 0 : -1;
            for (var n = 0, r = t.length; n < r; n++) if (Ue(t[n], e)) return n;
            return -1
        }

        function Ge(e, t, n) {
            pe();
            try {
                if (t) for (var r = t; r = r.$parent;) {
                    var o = r.$options.errorCaptured;
                    if (o) for (var i = 0; i < o.length; i++) try {
                        if (!1 === o[i].call(r, e, t, n)) return
                    } catch (e) {
                        Ye(e, r, "errorCaptured hook")
                    }
                }
                Ye(e, t, n)
            } finally {
                fe()
            }
        }

        function ze(e, t, n, r, o) {
            var i;
            try {
                (i = n ? e.apply(t, n) : e.call(t)) && !i._isVue && f(i) && !i._handled && (i.catch((function (e) {
                    return Ge(e, r, o + " (Promise/async)")
                })), i._handled = !0)
            } catch (e) {
                Ge(e, r, o)
            }
            return i
        }

        function Ye(e, t, n) {
            if (P.errorHandler) try {
                return P.errorHandler.call(null, e, t, n)
            } catch (t) {
                t !== e && $e(t, null, "config.errorHandler")
            }
            $e(e, t, n)
        }

        function $e(e, t, n) {
            if (!$ && !Z || "undefined" == typeof console) throw e;
            console.error(e)
        }

        var Ze, He = !1, We = [], Ve = !1;

        function Xe() {
            Ve = !1;
            var e = We.slice(0);
            We.length = 0;
            for (var t = 0; t < e.length; t++) e[t]()
        }

        if ("undefined" != typeof Promise && ie(Promise)) {
            var Je = Promise.resolve();
            Ze = function () {
                Je.then(Xe), K && setTimeout(_)
            }, He = !0
        } else if (V || "undefined" == typeof MutationObserver || !ie(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Ze = void 0 !== n && ie(n) ? function () {
            n(Xe)
        } : function () {
            setTimeout(Xe, 0)
        }; else {
            var Ke = 1, qe = new MutationObserver(Xe), et = document.createTextNode(String(Ke));
            qe.observe(et, {characterData: !0}), Ze = function () {
                Ke = (Ke + 1) % 2, et.data = String(Ke)
            }, He = !0
        }

        function tt(e, t) {
            var n;
            if (We.push((function () {
                if (e) try {
                    e.call(t)
                } catch (e) {
                    Ge(e, t, "nextTick")
                } else n && n(t)
            })), Ve || (Ve = !0, Ze()), !e && "undefined" != typeof Promise) return new Promise((function (e) {
                n = e
            }))
        }

        var nt = new ue;

        function rt(e) {
            !function e(t, n) {
                var r, o, i = Array.isArray(t);
                if (!i && !s(t) || Object.isFrozen(t) || t instanceof de) return;
                if (t.__ob__) {
                    var u = t.__ob__.dep.id;
                    if (n.has(u)) return;
                    n.add(u)
                }
                if (i) for (r = t.length; r--;) e(t[r], n); else for (o = Object.keys(t), r = o.length; r--;) e(t[o[r]], n)
            }(e, nt), nt.clear()
        }

        var ot = E((function (e) {
            var t = "&" === e.charAt(0), n = "~" === (e = t ? e.slice(1) : e).charAt(0),
                r = "!" === (e = n ? e.slice(1) : e).charAt(0);
            return {name: e = r ? e.slice(1) : e, once: n, capture: r, passive: t}
        }));

        function it(e, t) {
            function n() {
                var e = arguments, r = n.fns;
                if (!Array.isArray(r)) return ze(r, null, arguments, t, "v-on handler");
                for (var o = r.slice(), i = 0; i < o.length; i++) ze(o[i], null, e, t, "v-on handler")
            }

            return n.fns = e, n
        }

        function ut(e, t, n, r, i, a) {
            var s, l, c, A;
            for (s in e) l = e[s], c = t[s], A = ot(s), o(l) || (o(c) ? (o(l.fns) && (l = e[s] = it(l, a)), u(A.once) && (l = e[s] = i(A.name, l, A.capture)), n(A.name, l, A.capture, A.passive, A.params)) : l !== c && (c.fns = l, e[s] = c));
            for (s in t) o(e[s]) && r((A = ot(s)).name, t[s], A.capture)
        }

        function at(e, t, n) {
            var r;
            e instanceof de && (e = e.data.hook || (e.data.hook = {}));
            var a = e[t];

            function s() {
                n.apply(this, arguments), v(r.fns, s)
            }

            o(a) ? r = it([s]) : i(a.fns) && u(a.merged) ? (r = a).fns.push(s) : r = it([a, s]), r.merged = !0, e[t] = r
        }

        function st(e, t, n, r, o) {
            if (i(t)) {
                if (y(t, n)) return e[n] = t[n], o || delete t[n], !0;
                if (y(t, r)) return e[n] = t[r], o || delete t[r], !0
            }
            return !1
        }

        function lt(e) {
            return a(e) ? [ge(e)] : Array.isArray(e) ? function e(t, n) {
                var r, s, l, c, A = [];
                for (r = 0; r < t.length; r++) o(s = t[r]) || "boolean" == typeof s || (l = A.length - 1, c = A[l], Array.isArray(s) ? s.length > 0 && (ct((s = e(s, (n || "") + "_" + r))[0]) && ct(c) && (A[l] = ge(c.text + s[0].text), s.shift()), A.push.apply(A, s)) : a(s) ? ct(c) ? A[l] = ge(c.text + s) : "" !== s && A.push(ge(s)) : ct(s) && ct(c) ? A[l] = ge(c.text + s.text) : (u(t._isVList) && i(s.tag) && o(s.key) && i(n) && (s.key = "__vlist" + n + "_" + r + "__"), A.push(s)));
                return A
            }(e) : void 0
        }

        function ct(e) {
            return i(e) && i(e.text) && !1 === e.isComment
        }

        function At(e, t) {
            if (e) {
                for (var n = Object.create(null), r = ae ? Reflect.ownKeys(e) : Object.keys(e), o = 0; o < r.length; o++) {
                    var i = r[o];
                    if ("__ob__" !== i) {
                        for (var u = e[i].from, a = t; a;) {
                            if (a._provided && y(a._provided, u)) {
                                n[i] = a._provided[u];
                                break
                            }
                            a = a.$parent
                        }
                        if (!a) if ("default" in e[i]) {
                            var s = e[i].default;
                            n[i] = "function" == typeof s ? s.call(t) : s
                        } else 0
                    }
                }
                return n
            }
        }

        function pt(e, t) {
            if (!e || !e.length) return {};
            for (var n = {}, r = 0, o = e.length; r < o; r++) {
                var i = e[r], u = i.data;
                if (u && u.attrs && u.attrs.slot && delete u.attrs.slot, i.context !== t && i.fnContext !== t || !u || null == u.slot) (n.default || (n.default = [])).push(i); else {
                    var a = u.slot, s = n[a] || (n[a] = []);
                    "template" === i.tag ? s.push.apply(s, i.children || []) : s.push(i)
                }
            }
            for (var l in n) n[l].every(ft) && delete n[l];
            return n
        }

        function ft(e) {
            return e.isComment && !e.asyncFactory || " " === e.text
        }

        function dt(e, t, n) {
            var o, i = Object.keys(t).length > 0, u = e ? !!e.$stable : !i, a = e && e.$key;
            if (e) {
                if (e._normalized) return e._normalized;
                if (u && n && n !== r && a === n.$key && !i && !n.$hasNormal) return n;
                for (var s in o = {}, e) e[s] && "$" !== s[0] && (o[s] = mt(t, s, e[s]))
            } else o = {};
            for (var l in t) l in o || (o[l] = ht(t, l));
            return e && Object.isExtensible(e) && (e._normalized = o), Q(o, "$stable", u), Q(o, "$key", a), Q(o, "$hasNormal", i), o
        }

        function mt(e, t, n) {
            var r = function () {
                var e = arguments.length ? n.apply(null, arguments) : n({});
                return (e = e && "object" == typeof e && !Array.isArray(e) ? [e] : lt(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e
            };
            return n.proxy && Object.defineProperty(e, t, {get: r, enumerable: !0, configurable: !0}), r
        }

        function ht(e, t) {
            return function () {
                return e[t]
            }
        }

        function gt(e, t) {
            var n, r, o, u, a;
            if (Array.isArray(e) || "string" == typeof e) for (n = new Array(e.length), r = 0, o = e.length; r < o; r++) n[r] = t(e[r], r); else if ("number" == typeof e) for (n = new Array(e), r = 0; r < e; r++) n[r] = t(r + 1, r); else if (s(e)) if (ae && e[Symbol.iterator]) {
                n = [];
                for (var l = e[Symbol.iterator](), c = l.next(); !c.done;) n.push(t(c.value, n.length)), c = l.next()
            } else for (u = Object.keys(e), n = new Array(u.length), r = 0, o = u.length; r < o; r++) a = u[r], n[r] = t(e[a], a, r);
            return i(n) || (n = []), n._isVList = !0, n
        }

        function vt(e, t, n, r) {
            var o, i = this.$scopedSlots[e];
            i ? (n = n || {}, r && (n = M(M({}, r), n)), o = i(n) || t) : o = this.$slots[e] || t;
            var u = n && n.slot;
            return u ? this.$createElement("template", {slot: u}, o) : o
        }

        function Dt(e) {
            return je(this.$options, "filters", e) || N
        }

        function yt(e, t) {
            return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t
        }

        function Et(e, t, n, r, o) {
            var i = P.keyCodes[t] || n;
            return o && r && !P.keyCodes[t] ? yt(o, r) : i ? yt(i, e) : r ? T(r) !== t : void 0
        }

        function Ct(e, t, n, r, o) {
            if (n) if (s(n)) {
                var i;
                Array.isArray(n) && (n = I(n));
                var u = function (u) {
                    if ("class" === u || "style" === u || g(u)) i = e; else {
                        var a = e.attrs && e.attrs.type;
                        i = r || P.mustUseProp(t, a, u) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                    }
                    var s = b(u), l = T(u);
                    s in i || l in i || (i[u] = n[u], o && ((e.on || (e.on = {}))["update:" + u] = function (e) {
                        n[u] = e
                    }))
                };
                for (var a in n) u(a)
            } else ;
            return e
        }

        function bt(e, t) {
            var n = this._staticTrees || (this._staticTrees = []), r = n[e];
            return r && !t || wt(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), r
        }

        function xt(e, t, n) {
            return wt(e, "__once__" + t + (n ? "_" + n : ""), !0), e
        }

        function wt(e, t, n) {
            if (Array.isArray(e)) for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && Tt(e[r], t + "_" + r, n); else Tt(e, t, n)
        }

        function Tt(e, t, n) {
            e.isStatic = !0, e.key = t, e.isOnce = n
        }

        function Bt(e, t) {
            if (t) if (c(t)) {
                var n = e.on = e.on ? M({}, e.on) : {};
                for (var r in t) {
                    var o = n[r], i = t[r];
                    n[r] = o ? [].concat(o, i) : i
                }
            } else ;
            return e
        }

        function Ft(e, t, n, r) {
            t = t || {$stable: !n};
            for (var o = 0; o < e.length; o++) {
                var i = e[o];
                Array.isArray(i) ? Ft(i, t, n) : i && (i.proxy && (i.fn.proxy = !0), t[i.key] = i.fn)
            }
            return r && (t.$key = r), t
        }

        function Mt(e, t) {
            for (var n = 0; n < t.length; n += 2) {
                var r = t[n];
                "string" == typeof r && r && (e[t[n]] = t[n + 1])
            }
            return e
        }

        function It(e, t) {
            return "string" == typeof e ? t + e : e
        }

        function _t(e) {
            e._o = xt, e._n = m, e._s = d, e._l = gt, e._t = vt, e._q = O, e._i = L, e._m = bt, e._f = Dt, e._k = Et, e._b = Ct, e._v = ge, e._e = he, e._u = Ft, e._g = Bt, e._d = Mt, e._p = It
        }

        function St(e, t, n, o, i) {
            var a, s = this, l = i.options;
            y(o, "_uid") ? (a = Object.create(o))._original = o : (a = o, o = o._original);
            var c = u(l._compiled), A = !c;
            this.data = e, this.props = t, this.children = n, this.parent = o, this.listeners = e.on || r, this.injections = At(l.inject, o), this.slots = function () {
                return s.$slots || dt(e.scopedSlots, s.$slots = pt(n, o)), s.$slots
            }, Object.defineProperty(this, "scopedSlots", {
                enumerable: !0, get: function () {
                    return dt(e.scopedSlots, this.slots())
                }
            }), c && (this.$options = l, this.$slots = this.slots(), this.$scopedSlots = dt(e.scopedSlots, this.$slots)), l._scopeId ? this._c = function (e, t, n, r) {
                var i = Pt(a, e, t, n, r, A);
                return i && !Array.isArray(i) && (i.fnScopeId = l._scopeId, i.fnContext = o), i
            } : this._c = function (e, t, n, r) {
                return Pt(a, e, t, n, r, A)
            }
        }

        function Nt(e, t, n, r, o) {
            var i = ve(e);
            return i.fnContext = n, i.fnOptions = r, t.slot && ((i.data || (i.data = {})).slot = t.slot), i
        }

        function Ot(e, t) {
            for (var n in t) e[b(n)] = t[n]
        }

        _t(St.prototype);
        var Lt = {
            init: function (e, t) {
                if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                    var n = e;
                    Lt.prepatch(n, n)
                } else {
                    (e.componentInstance = function (e, t) {
                        var n = {_isComponent: !0, _parentVnode: e, parent: t}, r = e.data.inlineTemplate;
                        i(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns);
                        return new e.componentOptions.Ctor(n)
                    }(e, Vt)).$mount(t ? e.elm : void 0, t)
                }
            }, prepatch: function (e, t) {
                var n = t.componentOptions;
                !function (e, t, n, o, i) {
                    0;
                    var u = o.data.scopedSlots, a = e.$scopedSlots,
                        s = !!(u && !u.$stable || a !== r && !a.$stable || u && e.$scopedSlots.$key !== u.$key),
                        l = !!(i || e.$options._renderChildren || s);
                    e.$options._parentVnode = o, e.$vnode = o, e._vnode && (e._vnode.parent = o);
                    if (e.$options._renderChildren = i, e.$attrs = o.data.attrs || r, e.$listeners = n || r, t && e.$options.props) {
                        be(!1);
                        for (var c = e._props, A = e.$options._propKeys || [], p = 0; p < A.length; p++) {
                            var f = A[p], d = e.$options.props;
                            c[f] = Re(f, d, t, e)
                        }
                        be(!0), e.$options.propsData = t
                    }
                    n = n || r;
                    var m = e.$options._parentListeners;
                    e.$options._parentListeners = n, Wt(e, n, m), l && (e.$slots = pt(i, o.context), e.$forceUpdate());
                    0
                }(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children)
            }, insert: function (e) {
                var t, n = e.context, r = e.componentInstance;
                r._isMounted || (r._isMounted = !0, qt(r, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = r)._inactive = !1, tn.push(t)) : Kt(r, !0))
            }, destroy: function (e) {
                var t = e.componentInstance;
                t._isDestroyed || (e.data.keepAlive ? function e(t, n) {
                    if (n && (t._directInactive = !0, Jt(t))) return;
                    if (!t._inactive) {
                        t._inactive = !0;
                        for (var r = 0; r < t.$children.length; r++) e(t.$children[r]);
                        qt(t, "deactivated")
                    }
                }(t, !0) : t.$destroy())
            }
        }, kt = Object.keys(Lt);

        function jt(e, t, n, a, l) {
            if (!o(e)) {
                var c = n.$options._base;
                if (s(e) && (e = c.extend(e)), "function" == typeof e) {
                    var A;
                    if (o(e.cid) && void 0 === (e = function (e, t) {
                        if (u(e.error) && i(e.errorComp)) return e.errorComp;
                        if (i(e.resolved)) return e.resolved;
                        var n = Qt;
                        n && i(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n);
                        if (u(e.loading) && i(e.loadingComp)) return e.loadingComp;
                        if (n && !i(e.owners)) {
                            var r = e.owners = [n], a = !0, l = null, c = null;
                            n.$on("hook:destroyed", (function () {
                                return v(r, n)
                            }));
                            var A = function (e) {
                                for (var t = 0, n = r.length; t < n; t++) r[t].$forceUpdate();
                                e && (r.length = 0, null !== l && (clearTimeout(l), l = null), null !== c && (clearTimeout(c), c = null))
                            }, p = k((function (n) {
                                e.resolved = Gt(n, t), a ? r.length = 0 : A(!0)
                            })), d = k((function (t) {
                                i(e.errorComp) && (e.error = !0, A(!0))
                            })), m = e(p, d);
                            return s(m) && (f(m) ? o(e.resolved) && m.then(p, d) : f(m.component) && (m.component.then(p, d), i(m.error) && (e.errorComp = Gt(m.error, t)), i(m.loading) && (e.loadingComp = Gt(m.loading, t), 0 === m.delay ? e.loading = !0 : l = setTimeout((function () {
                                l = null, o(e.resolved) && o(e.error) && (e.loading = !0, A(!1))
                            }), m.delay || 200)), i(m.timeout) && (c = setTimeout((function () {
                                c = null, o(e.resolved) && d(null)
                            }), m.timeout)))), a = !1, e.loading ? e.loadingComp : e.resolved
                        }
                    }(A = e, c))) return function (e, t, n, r, o) {
                        var i = he();
                        return i.asyncFactory = e, i.asyncMeta = {data: t, context: n, children: r, tag: o}, i
                    }(A, t, n, a, l);
                    t = t || {}, Cn(e), i(t.model) && function (e, t) {
                        var n = e.model && e.model.prop || "value", r = e.model && e.model.event || "input";
                        (t.attrs || (t.attrs = {}))[n] = t.model.value;
                        var o = t.on || (t.on = {}), u = o[r], a = t.model.callback;
                        i(u) ? (Array.isArray(u) ? -1 === u.indexOf(a) : u !== a) && (o[r] = [a].concat(u)) : o[r] = a
                    }(e.options, t);
                    var p = function (e, t, n) {
                        var r = t.options.props;
                        if (!o(r)) {
                            var u = {}, a = e.attrs, s = e.props;
                            if (i(a) || i(s)) for (var l in r) {
                                var c = T(l);
                                st(u, s, l, c, !0) || st(u, a, l, c, !1)
                            }
                            return u
                        }
                    }(t, e);
                    if (u(e.options.functional)) return function (e, t, n, o, u) {
                        var a = e.options, s = {}, l = a.props;
                        if (i(l)) for (var c in l) s[c] = Re(c, l, t || r); else i(n.attrs) && Ot(s, n.attrs), i(n.props) && Ot(s, n.props);
                        var A = new St(n, s, u, o, e), p = a.render.call(null, A._c, A);
                        if (p instanceof de) return Nt(p, n, A.parent, a, A);
                        if (Array.isArray(p)) {
                            for (var f = lt(p) || [], d = new Array(f.length), m = 0; m < f.length; m++) d[m] = Nt(f[m], n, A.parent, a, A);
                            return d
                        }
                    }(e, p, t, n, a);
                    var d = t.on;
                    if (t.on = t.nativeOn, u(e.options.abstract)) {
                        var m = t.slot;
                        t = {}, m && (t.slot = m)
                    }
                    !function (e) {
                        for (var t = e.hook || (e.hook = {}), n = 0; n < kt.length; n++) {
                            var r = kt[n], o = t[r], i = Lt[r];
                            o === i || o && o._merged || (t[r] = o ? Rt(i, o) : i)
                        }
                    }(t);
                    var h = e.options.name || l;
                    return new de("vue-component-" + e.cid + (h ? "-" + h : ""), t, void 0, void 0, void 0, n, {
                        Ctor: e,
                        propsData: p,
                        listeners: d,
                        tag: l,
                        children: a
                    }, A)
                }
            }
        }

        function Rt(e, t) {
            var n = function (n, r) {
                e(n, r), t(n, r)
            };
            return n._merged = !0, n
        }

        function Pt(e, t, n, r, l, c) {
            return (Array.isArray(n) || a(n)) && (l = r, r = n, n = void 0), u(c) && (l = 2), function (e, t, n, r, a) {
                if (i(n) && i(n.__ob__)) return he();
                i(n) && i(n.is) && (t = n.is);
                if (!t) return he();
                0;
                Array.isArray(r) && "function" == typeof r[0] && ((n = n || {}).scopedSlots = {default: r[0]}, r.length = 0);
                2 === a ? r = lt(r) : 1 === a && (r = function (e) {
                    for (var t = 0; t < e.length; t++) if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                    return e
                }(r));
                var l, c;
                if ("string" == typeof t) {
                    var A;
                    c = e.$vnode && e.$vnode.ns || P.getTagNamespace(t), l = P.isReservedTag(t) ? new de(P.parsePlatformTagName(t), n, r, void 0, void 0, e) : n && n.pre || !i(A = je(e.$options, "components", t)) ? new de(t, n, r, void 0, void 0, e) : jt(A, n, e, r, t)
                } else l = jt(t, n, e, r);
                return Array.isArray(l) ? l : i(l) ? (i(c) && function e(t, n, r) {
                    t.ns = n, "foreignObject" === t.tag && (n = void 0, r = !0);
                    if (i(t.children)) for (var a = 0, s = t.children.length; a < s; a++) {
                        var l = t.children[a];
                        i(l.tag) && (o(l.ns) || u(r) && "svg" !== l.tag) && e(l, n, r)
                    }
                }(l, c), i(n) && function (e) {
                    s(e.style) && rt(e.style);
                    s(e.class) && rt(e.class)
                }(n), l) : he()
            }(e, t, n, r, l)
        }

        var Ut, Qt = null;

        function Gt(e, t) {
            return (e.__esModule || ae && "Module" === e[Symbol.toStringTag]) && (e = e.default), s(e) ? t.extend(e) : e
        }

        function zt(e) {
            return e.isComment && e.asyncFactory
        }

        function Yt(e) {
            if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (i(n) && (i(n.componentOptions) || zt(n))) return n
            }
        }

        function $t(e, t) {
            Ut.$on(e, t)
        }

        function Zt(e, t) {
            Ut.$off(e, t)
        }

        function Ht(e, t) {
            var n = Ut;
            return function r() {
                var o = t.apply(null, arguments);
                null !== o && n.$off(e, r)
            }
        }

        function Wt(e, t, n) {
            Ut = e, ut(t, n || {}, $t, Zt, Ht, e), Ut = void 0
        }

        var Vt = null;

        function Xt(e) {
            var t = Vt;
            return Vt = e, function () {
                Vt = t
            }
        }

        function Jt(e) {
            for (; e && (e = e.$parent);) if (e._inactive) return !0;
            return !1
        }

        function Kt(e, t) {
            if (t) {
                if (e._directInactive = !1, Jt(e)) return
            } else if (e._directInactive) return;
            if (e._inactive || null === e._inactive) {
                e._inactive = !1;
                for (var n = 0; n < e.$children.length; n++) Kt(e.$children[n]);
                qt(e, "activated")
            }
        }

        function qt(e, t) {
            pe();
            var n = e.$options[t], r = t + " hook";
            if (n) for (var o = 0, i = n.length; o < i; o++) ze(n[o], e, null, e, r);
            e._hasHookEvent && e.$emit("hook:" + t), fe()
        }

        var en = [], tn = [], nn = {}, rn = !1, on = !1, un = 0;
        var an = 0, sn = Date.now;
        if ($ && !V) {
            var ln = window.performance;
            ln && "function" == typeof ln.now && sn() > document.createEvent("Event").timeStamp && (sn = function () {
                return ln.now()
            })
        }

        function cn() {
            var e, t;
            for (an = sn(), on = !0, en.sort((function (e, t) {
                return e.id - t.id
            })), un = 0; un < en.length; un++) (e = en[un]).before && e.before(), t = e.id, nn[t] = null, e.run();
            var n = tn.slice(), r = en.slice();
            un = en.length = tn.length = 0, nn = {}, rn = on = !1, function (e) {
                for (var t = 0; t < e.length; t++) e[t]._inactive = !0, Kt(e[t], !0)
            }(n), function (e) {
                var t = e.length;
                for (; t--;) {
                    var n = e[t], r = n.vm;
                    r._watcher === n && r._isMounted && !r._isDestroyed && qt(r, "updated")
                }
            }(r), oe && P.devtools && oe.emit("flush")
        }

        var An = 0, pn = function (e, t, n, r, o) {
            this.vm = e, o && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++An, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ue, this.newDepIds = new ue, this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function (e) {
                if (!G.test(e)) {
                    var t = e.split(".");
                    return function (e) {
                        for (var n = 0; n < t.length; n++) {
                            if (!e) return;
                            e = e[t[n]]
                        }
                        return e
                    }
                }
            }(t), this.getter || (this.getter = _)), this.value = this.lazy ? void 0 : this.get()
        };
        pn.prototype.get = function () {
            var e;
            pe(this);
            var t = this.vm;
            try {
                e = this.getter.call(t, t)
            } catch (e) {
                if (!this.user) throw e;
                Ge(e, t, 'getter for watcher "' + this.expression + '"')
            } finally {
                this.deep && rt(e), fe(), this.cleanupDeps()
            }
            return e
        }, pn.prototype.addDep = function (e) {
            var t = e.id;
            this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
        }, pn.prototype.cleanupDeps = function () {
            for (var e = this.deps.length; e--;) {
                var t = this.deps[e];
                this.newDepIds.has(t.id) || t.removeSub(this)
            }
            var n = this.depIds;
            this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
        }, pn.prototype.update = function () {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : function (e) {
                var t = e.id;
                if (null == nn[t]) {
                    if (nn[t] = !0, on) {
                        for (var n = en.length - 1; n > un && en[n].id > e.id;) n--;
                        en.splice(n + 1, 0, e)
                    } else en.push(e);
                    rn || (rn = !0, tt(cn))
                }
            }(this)
        }, pn.prototype.run = function () {
            if (this.active) {
                var e = this.get();
                if (e !== this.value || s(e) || this.deep) {
                    var t = this.value;
                    if (this.value = e, this.user) try {
                        this.cb.call(this.vm, e, t)
                    } catch (e) {
                        Ge(e, this.vm, 'callback for watcher "' + this.expression + '"')
                    } else this.cb.call(this.vm, e, t)
                }
            }
        }, pn.prototype.evaluate = function () {
            this.value = this.get(), this.dirty = !1
        }, pn.prototype.depend = function () {
            for (var e = this.deps.length; e--;) this.deps[e].depend()
        }, pn.prototype.teardown = function () {
            if (this.active) {
                this.vm._isBeingDestroyed || v(this.vm._watchers, this);
                for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
                this.active = !1
            }
        };
        var fn = {enumerable: !0, configurable: !0, get: _, set: _};

        function dn(e, t, n) {
            fn.get = function () {
                return this[t][n]
            }, fn.set = function (e) {
                this[t][n] = e
            }, Object.defineProperty(e, n, fn)
        }

        function mn(e) {
            e._watchers = [];
            var t = e.$options;
            t.props && function (e, t) {
                var n = e.$options.propsData || {}, r = e._props = {}, o = e.$options._propKeys = [];
                e.$parent && be(!1);
                var i = function (i) {
                    o.push(i);
                    var u = Re(i, t, n, e);
                    Te(r, i, u), i in e || dn(e, "_props", i)
                };
                for (var u in t) i(u);
                be(!0)
            }(e, t.props), t.methods && function (e, t) {
                e.$options.props;
                for (var n in t) e[n] = "function" != typeof t[n] ? _ : B(t[n], e)
            }(e, t.methods), t.data ? function (e) {
                var t = e.$options.data;
                c(t = e._data = "function" == typeof t ? function (e, t) {
                    pe();
                    try {
                        return e.call(t, t)
                    } catch (e) {
                        return Ge(e, t, "data()"), {}
                    } finally {
                        fe()
                    }
                }(t, e) : t || {}) || (t = {});
                var n = Object.keys(t), r = e.$options.props, o = (e.$options.methods, n.length);
                for (; o--;) {
                    var i = n[o];
                    0, r && y(r, i) || (u = void 0, 36 !== (u = (i + "").charCodeAt(0)) && 95 !== u && dn(e, "_data", i))
                }
                var u;
                we(t, !0)
            }(e) : we(e._data = {}, !0), t.computed && function (e, t) {
                var n = e._computedWatchers = Object.create(null), r = re();
                for (var o in t) {
                    var i = t[o], u = "function" == typeof i ? i : i.get;
                    0, r || (n[o] = new pn(e, u || _, _, hn)), o in e || gn(e, o, i)
                }
            }(e, t.computed), t.watch && t.watch !== ee && function (e, t) {
                for (var n in t) {
                    var r = t[n];
                    if (Array.isArray(r)) for (var o = 0; o < r.length; o++) yn(e, n, r[o]); else yn(e, n, r)
                }
            }(e, t.watch)
        }

        var hn = {lazy: !0};

        function gn(e, t, n) {
            var r = !re();
            "function" == typeof n ? (fn.get = r ? vn(t) : Dn(n), fn.set = _) : (fn.get = n.get ? r && !1 !== n.cache ? vn(t) : Dn(n.get) : _, fn.set = n.set || _), Object.defineProperty(e, t, fn)
        }

        function vn(e) {
            return function () {
                var t = this._computedWatchers && this._computedWatchers[e];
                if (t) return t.dirty && t.evaluate(), ce.target && t.depend(), t.value
            }
        }

        function Dn(e) {
            return function () {
                return e.call(this, this)
            }
        }

        function yn(e, t, n, r) {
            return c(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r)
        }

        var En = 0;

        function Cn(e) {
            var t = e.options;
            if (e.super) {
                var n = Cn(e.super);
                if (n !== e.superOptions) {
                    e.superOptions = n;
                    var r = function (e) {
                        var t, n = e.options, r = e.sealedOptions;
                        for (var o in n) n[o] !== r[o] && (t || (t = {}), t[o] = n[o]);
                        return t
                    }(e);
                    r && M(e.extendOptions, r), (t = e.options = ke(n, e.extendOptions)).name && (t.components[t.name] = e)
                }
            }
            return t
        }

        function bn(e) {
            this._init(e)
        }

        function xn(e) {
            e.cid = 0;
            var t = 1;
            e.extend = function (e) {
                e = e || {};
                var n = this, r = n.cid, o = e._Ctor || (e._Ctor = {});
                if (o[r]) return o[r];
                var i = e.name || n.options.name;
                var u = function (e) {
                    this._init(e)
                };
                return (u.prototype = Object.create(n.prototype)).constructor = u, u.cid = t++, u.options = ke(n.options, e), u.super = n, u.options.props && function (e) {
                    var t = e.options.props;
                    for (var n in t) dn(e.prototype, "_props", n)
                }(u), u.options.computed && function (e) {
                    var t = e.options.computed;
                    for (var n in t) gn(e.prototype, n, t[n])
                }(u), u.extend = n.extend, u.mixin = n.mixin, u.use = n.use, j.forEach((function (e) {
                    u[e] = n[e]
                })), i && (u.options.components[i] = u), u.superOptions = n.options, u.extendOptions = e, u.sealedOptions = M({}, u.options), o[r] = u, u
            }
        }

        function wn(e) {
            return e && (e.Ctor.options.name || e.tag)
        }

        function Tn(e, t) {
            return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!A(e) && e.test(t)
        }

        function Bn(e, t) {
            var n = e.cache, r = e.keys, o = e._vnode;
            for (var i in n) {
                var u = n[i];
                if (u) {
                    var a = wn(u.componentOptions);
                    a && !t(a) && Fn(n, i, r, o)
                }
            }
        }

        function Fn(e, t, n, r) {
            var o = e[t];
            !o || r && o.tag === r.tag || o.componentInstance.$destroy(), e[t] = null, v(n, t)
        }

        !function (e) {
            e.prototype._init = function (e) {
                var t = this;
                t._uid = En++, t._isVue = !0, e && e._isComponent ? function (e, t) {
                    var n = e.$options = Object.create(e.constructor.options), r = t._parentVnode;
                    n.parent = t.parent, n._parentVnode = r;
                    var o = r.componentOptions;
                    n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, n._componentTag = o.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
                }(t, e) : t.$options = ke(Cn(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, function (e) {
                    var t = e.$options, n = t.parent;
                    if (n && !t.abstract) {
                        for (; n.$options.abstract && n.$parent;) n = n.$parent;
                        n.$children.push(e)
                    }
                    e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
                }(t), function (e) {
                    e._events = Object.create(null), e._hasHookEvent = !1;
                    var t = e.$options._parentListeners;
                    t && Wt(e, t)
                }(t), function (e) {
                    e._vnode = null, e._staticTrees = null;
                    var t = e.$options, n = e.$vnode = t._parentVnode, o = n && n.context;
                    e.$slots = pt(t._renderChildren, o), e.$scopedSlots = r, e._c = function (t, n, r, o) {
                        return Pt(e, t, n, r, o, !1)
                    }, e.$createElement = function (t, n, r, o) {
                        return Pt(e, t, n, r, o, !0)
                    };
                    var i = n && n.data;
                    Te(e, "$attrs", i && i.attrs || r, null, !0), Te(e, "$listeners", t._parentListeners || r, null, !0)
                }(t), qt(t, "beforeCreate"), function (e) {
                    var t = At(e.$options.inject, e);
                    t && (be(!1), Object.keys(t).forEach((function (n) {
                        Te(e, n, t[n])
                    })), be(!0))
                }(t), mn(t), function (e) {
                    var t = e.$options.provide;
                    t && (e._provided = "function" == typeof t ? t.call(e) : t)
                }(t), qt(t, "created"), t.$options.el && t.$mount(t.$options.el)
            }
        }(bn), function (e) {
            var t = {
                get: function () {
                    return this._data
                }
            }, n = {
                get: function () {
                    return this._props
                }
            };
            Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = Be, e.prototype.$delete = Fe, e.prototype.$watch = function (e, t, n) {
                if (c(t)) return yn(this, e, t, n);
                (n = n || {}).user = !0;
                var r = new pn(this, e, t, n);
                if (n.immediate) try {
                    t.call(this, r.value)
                } catch (e) {
                    Ge(e, this, 'callback for immediate watcher "' + r.expression + '"')
                }
                return function () {
                    r.teardown()
                }
            }
        }(bn), function (e) {
            var t = /^hook:/;
            e.prototype.$on = function (e, n) {
                var r = this;
                if (Array.isArray(e)) for (var o = 0, i = e.length; o < i; o++) r.$on(e[o], n); else (r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);
                return r
            }, e.prototype.$once = function (e, t) {
                var n = this;

                function r() {
                    n.$off(e, r), t.apply(n, arguments)
                }

                return r.fn = t, n.$on(e, r), n
            }, e.prototype.$off = function (e, t) {
                var n = this;
                if (!arguments.length) return n._events = Object.create(null), n;
                if (Array.isArray(e)) {
                    for (var r = 0, o = e.length; r < o; r++) n.$off(e[r], t);
                    return n
                }
                var i, u = n._events[e];
                if (!u) return n;
                if (!t) return n._events[e] = null, n;
                for (var a = u.length; a--;) if ((i = u[a]) === t || i.fn === t) {
                    u.splice(a, 1);
                    break
                }
                return n
            }, e.prototype.$emit = function (e) {
                var t = this, n = t._events[e];
                if (n) {
                    n = n.length > 1 ? F(n) : n;
                    for (var r = F(arguments, 1), o = 'event handler for "' + e + '"', i = 0, u = n.length; i < u; i++) ze(n[i], t, r, t, o)
                }
                return t
            }
        }(bn), function (e) {
            e.prototype._update = function (e, t) {
                var n = this, r = n.$el, o = n._vnode, i = Xt(n);
                n._vnode = e, n.$el = o ? n.__patch__(o, e) : n.__patch__(n.$el, e, t, !1), i(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
            }, e.prototype.$forceUpdate = function () {
                this._watcher && this._watcher.update()
            }, e.prototype.$destroy = function () {
                var e = this;
                if (!e._isBeingDestroyed) {
                    qt(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                    var t = e.$parent;
                    !t || t._isBeingDestroyed || e.$options.abstract || v(t.$children, e), e._watcher && e._watcher.teardown();
                    for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
                    e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), qt(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
                }
            }
        }(bn), function (e) {
            _t(e.prototype), e.prototype.$nextTick = function (e) {
                return tt(e, this)
            }, e.prototype._render = function () {
                var e, t = this, n = t.$options, r = n.render, o = n._parentVnode;
                o && (t.$scopedSlots = dt(o.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = o;
                try {
                    Qt = t, e = r.call(t._renderProxy, t.$createElement)
                } catch (n) {
                    Ge(n, t, "render"), e = t._vnode
                } finally {
                    Qt = null
                }
                return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof de || (e = he()), e.parent = o, e
            }
        }(bn);
        var Mn = [String, RegExp, Array], In = {
            KeepAlive: {
                name: "keep-alive",
                abstract: !0,
                props: {include: Mn, exclude: Mn, max: [String, Number]},
                created: function () {
                    this.cache = Object.create(null), this.keys = []
                },
                destroyed: function () {
                    for (var e in this.cache) Fn(this.cache, e, this.keys)
                },
                mounted: function () {
                    var e = this;
                    this.$watch("include", (function (t) {
                        Bn(e, (function (e) {
                            return Tn(t, e)
                        }))
                    })), this.$watch("exclude", (function (t) {
                        Bn(e, (function (e) {
                            return !Tn(t, e)
                        }))
                    }))
                },
                render: function () {
                    var e = this.$slots.default, t = Yt(e), n = t && t.componentOptions;
                    if (n) {
                        var r = wn(n), o = this.include, i = this.exclude;
                        if (o && (!r || !Tn(o, r)) || i && r && Tn(i, r)) return t;
                        var u = this.cache, a = this.keys,
                            s = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                        u[s] ? (t.componentInstance = u[s].componentInstance, v(a, s), a.push(s)) : (u[s] = t, a.push(s), this.max && a.length > parseInt(this.max) && Fn(u, a[0], a, this._vnode)), t.data.keepAlive = !0
                    }
                    return t || e && e[0]
                }
            }
        };
        !function (e) {
            var t = {
                get: function () {
                    return P
                }
            };
            Object.defineProperty(e, "config", t), e.util = {
                warn: se,
                extend: M,
                mergeOptions: ke,
                defineReactive: Te
            }, e.set = Be, e.delete = Fe, e.nextTick = tt, e.observable = function (e) {
                return we(e), e
            }, e.options = Object.create(null), j.forEach((function (t) {
                e.options[t + "s"] = Object.create(null)
            })), e.options._base = e, M(e.options.components, In), function (e) {
                e.use = function (e) {
                    var t = this._installedPlugins || (this._installedPlugins = []);
                    if (t.indexOf(e) > -1) return this;
                    var n = F(arguments, 1);
                    return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this
                }
            }(e), function (e) {
                e.mixin = function (e) {
                    return this.options = ke(this.options, e), this
                }
            }(e), xn(e), function (e) {
                j.forEach((function (t) {
                    e[t] = function (e, n) {
                        return n ? ("component" === t && c(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
                            bind: n,
                            update: n
                        }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e]
                    }
                }))
            }(e)
        }(bn), Object.defineProperty(bn.prototype, "$isServer", {get: re}), Object.defineProperty(bn.prototype, "$ssrContext", {
            get: function () {
                return this.$vnode && this.$vnode.ssrContext
            }
        }), Object.defineProperty(bn, "FunctionalRenderContext", {value: St}), bn.version = "2.6.11";
        var _n = h("style,class"), Sn = h("input,textarea,option,select,progress"),
            Nn = h("contenteditable,draggable,spellcheck"), On = h("events,caret,typing,plaintext-only"),
            Ln = h("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
            kn = "http://www.w3.org/1999/xlink", jn = function (e) {
                return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
            }, Rn = function (e) {
                return jn(e) ? e.slice(6, e.length) : ""
            }, Pn = function (e) {
                return null == e || !1 === e
            };

        function Un(e) {
            for (var t = e.data, n = e, r = e; i(r.componentInstance);) (r = r.componentInstance._vnode) && r.data && (t = Qn(r.data, t));
            for (; i(n = n.parent);) n && n.data && (t = Qn(t, n.data));
            return function (e, t) {
                if (i(e) || i(t)) return Gn(e, zn(t));
                return ""
            }(t.staticClass, t.class)
        }

        function Qn(e, t) {
            return {staticClass: Gn(e.staticClass, t.staticClass), class: i(e.class) ? [e.class, t.class] : t.class}
        }

        function Gn(e, t) {
            return e ? t ? e + " " + t : e : t || ""
        }

        function zn(e) {
            return Array.isArray(e) ? function (e) {
                for (var t, n = "", r = 0, o = e.length; r < o; r++) i(t = zn(e[r])) && "" !== t && (n && (n += " "), n += t);
                return n
            }(e) : s(e) ? function (e) {
                var t = "";
                for (var n in e) e[n] && (t && (t += " "), t += n);
                return t
            }(e) : "string" == typeof e ? e : ""
        }

        var Yn = {svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML"},
            $n = h("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
            Zn = h("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
            Hn = function (e) {
                return $n(e) || Zn(e)
            };
        var Wn = Object.create(null);
        var Vn = h("text,number,password,search,email,tel,url");
        var Xn = Object.freeze({
            createElement: function (e, t) {
                var n = document.createElement(e);
                return "select" !== e || t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n
            }, createElementNS: function (e, t) {
                return document.createElementNS(Yn[e], t)
            }, createTextNode: function (e) {
                return document.createTextNode(e)
            }, createComment: function (e) {
                return document.createComment(e)
            }, insertBefore: function (e, t, n) {
                e.insertBefore(t, n)
            }, removeChild: function (e, t) {
                e.removeChild(t)
            }, appendChild: function (e, t) {
                e.appendChild(t)
            }, parentNode: function (e) {
                return e.parentNode
            }, nextSibling: function (e) {
                return e.nextSibling
            }, tagName: function (e) {
                return e.tagName
            }, setTextContent: function (e, t) {
                e.textContent = t
            }, setStyleScope: function (e, t) {
                e.setAttribute(t, "")
            }
        }), Jn = {
            create: function (e, t) {
                Kn(t)
            }, update: function (e, t) {
                e.data.ref !== t.data.ref && (Kn(e, !0), Kn(t))
            }, destroy: function (e) {
                Kn(e, !0)
            }
        };

        function Kn(e, t) {
            var n = e.data.ref;
            if (i(n)) {
                var r = e.context, o = e.componentInstance || e.elm, u = r.$refs;
                t ? Array.isArray(u[n]) ? v(u[n], o) : u[n] === o && (u[n] = void 0) : e.data.refInFor ? Array.isArray(u[n]) ? u[n].indexOf(o) < 0 && u[n].push(o) : u[n] = [o] : u[n] = o
            }
        }

        var qn = new de("", {}, []), er = ["create", "activate", "update", "remove", "destroy"];

        function tr(e, t) {
            return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && i(e.data) === i(t.data) && function (e, t) {
                if ("input" !== e.tag) return !0;
                var n, r = i(n = e.data) && i(n = n.attrs) && n.type, o = i(n = t.data) && i(n = n.attrs) && n.type;
                return r === o || Vn(r) && Vn(o)
            }(e, t) || u(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && o(t.asyncFactory.error))
        }

        function nr(e, t, n) {
            var r, o, u = {};
            for (r = t; r <= n; ++r) i(o = e[r].key) && (u[o] = r);
            return u
        }

        var rr = {
            create: or, update: or, destroy: function (e) {
                or(e, qn)
            }
        };

        function or(e, t) {
            (e.data.directives || t.data.directives) && function (e, t) {
                var n, r, o, i = e === qn, u = t === qn, a = ur(e.data.directives, e.context),
                    s = ur(t.data.directives, t.context), l = [], c = [];
                for (n in s) r = a[n], o = s[n], r ? (o.oldValue = r.value, o.oldArg = r.arg, sr(o, "update", t, e), o.def && o.def.componentUpdated && c.push(o)) : (sr(o, "bind", t, e), o.def && o.def.inserted && l.push(o));
                if (l.length) {
                    var A = function () {
                        for (var n = 0; n < l.length; n++) sr(l[n], "inserted", t, e)
                    };
                    i ? at(t, "insert", A) : A()
                }
                c.length && at(t, "postpatch", (function () {
                    for (var n = 0; n < c.length; n++) sr(c[n], "componentUpdated", t, e)
                }));
                if (!i) for (n in a) s[n] || sr(a[n], "unbind", e, e, u)
            }(e, t)
        }

        var ir = Object.create(null);

        function ur(e, t) {
            var n, r, o = Object.create(null);
            if (!e) return o;
            for (n = 0; n < e.length; n++) (r = e[n]).modifiers || (r.modifiers = ir), o[ar(r)] = r, r.def = je(t.$options, "directives", r.name);
            return o
        }

        function ar(e) {
            return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
        }

        function sr(e, t, n, r, o) {
            var i = e.def && e.def[t];
            if (i) try {
                i(n.elm, e, n, r, o)
            } catch (r) {
                Ge(r, n.context, "directive " + e.name + " " + t + " hook")
            }
        }

        var lr = [Jn, rr];

        function cr(e, t) {
            var n = t.componentOptions;
            if (!(i(n) && !1 === n.Ctor.options.inheritAttrs || o(e.data.attrs) && o(t.data.attrs))) {
                var r, u, a = t.elm, s = e.data.attrs || {}, l = t.data.attrs || {};
                for (r in i(l.__ob__) && (l = t.data.attrs = M({}, l)), l) u = l[r], s[r] !== u && Ar(a, r, u);
                for (r in (V || J) && l.value !== s.value && Ar(a, "value", l.value), s) o(l[r]) && (jn(r) ? a.removeAttributeNS(kn, Rn(r)) : Nn(r) || a.removeAttribute(r))
            }
        }

        function Ar(e, t, n) {
            e.tagName.indexOf("-") > -1 ? pr(e, t, n) : Ln(t) ? Pn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : Nn(t) ? e.setAttribute(t, function (e, t) {
                return Pn(t) || "false" === t ? "false" : "contenteditable" === e && On(t) ? t : "true"
            }(t, n)) : jn(t) ? Pn(n) ? e.removeAttributeNS(kn, Rn(t)) : e.setAttributeNS(kn, t, n) : pr(e, t, n)
        }

        function pr(e, t, n) {
            if (Pn(n)) e.removeAttribute(t); else {
                if (V && !X && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
                    var r = function (t) {
                        t.stopImmediatePropagation(), e.removeEventListener("input", r)
                    };
                    e.addEventListener("input", r), e.__ieph = !0
                }
                e.setAttribute(t, n)
            }
        }

        var fr = {create: cr, update: cr};

        function dr(e, t) {
            var n = t.elm, r = t.data, u = e.data;
            if (!(o(r.staticClass) && o(r.class) && (o(u) || o(u.staticClass) && o(u.class)))) {
                var a = Un(t), s = n._transitionClasses;
                i(s) && (a = Gn(a, zn(s))), a !== n._prevClass && (n.setAttribute("class", a), n._prevClass = a)
            }
        }

        var mr, hr = {create: dr, update: dr};

        function gr(e, t, n) {
            var r = mr;
            return function o() {
                var i = t.apply(null, arguments);
                null !== i && yr(e, o, n, r)
            }
        }

        var vr = He && !(q && Number(q[1]) <= 53);

        function Dr(e, t, n, r) {
            if (vr) {
                var o = an, i = t;
                t = i._wrapper = function (e) {
                    if (e.target === e.currentTarget || e.timeStamp >= o || e.timeStamp <= 0 || e.target.ownerDocument !== document) return i.apply(this, arguments)
                }
            }
            mr.addEventListener(e, t, te ? {capture: n, passive: r} : n)
        }

        function yr(e, t, n, r) {
            (r || mr).removeEventListener(e, t._wrapper || t, n)
        }

        function Er(e, t) {
            if (!o(e.data.on) || !o(t.data.on)) {
                var n = t.data.on || {}, r = e.data.on || {};
                mr = t.elm, function (e) {
                    if (i(e.__r)) {
                        var t = V ? "change" : "input";
                        e[t] = [].concat(e.__r, e[t] || []), delete e.__r
                    }
                    i(e.__c) && (e.change = [].concat(e.__c, e.change || []), delete e.__c)
                }(n), ut(n, r, Dr, yr, gr, t.context), mr = void 0
            }
        }

        var Cr, br = {create: Er, update: Er};

        function xr(e, t) {
            if (!o(e.data.domProps) || !o(t.data.domProps)) {
                var n, r, u = t.elm, a = e.data.domProps || {}, s = t.data.domProps || {};
                for (n in i(s.__ob__) && (s = t.data.domProps = M({}, s)), a) n in s || (u[n] = "");
                for (n in s) {
                    if (r = s[n], "textContent" === n || "innerHTML" === n) {
                        if (t.children && (t.children.length = 0), r === a[n]) continue;
                        1 === u.childNodes.length && u.removeChild(u.childNodes[0])
                    }
                    if ("value" === n && "PROGRESS" !== u.tagName) {
                        u._value = r;
                        var l = o(r) ? "" : String(r);
                        wr(u, l) && (u.value = l)
                    } else if ("innerHTML" === n && Zn(u.tagName) && o(u.innerHTML)) {
                        (Cr = Cr || document.createElement("div")).innerHTML = "<svg>" + r + "</svg>";
                        for (var c = Cr.firstChild; u.firstChild;) u.removeChild(u.firstChild);
                        for (; c.firstChild;) u.appendChild(c.firstChild)
                    } else if (r !== a[n]) try {
                        u[n] = r
                    } catch (e) {
                    }
                }
            }
        }

        function wr(e, t) {
            return !e.composing && ("OPTION" === e.tagName || function (e, t) {
                var n = !0;
                try {
                    n = document.activeElement !== e
                } catch (e) {
                }
                return n && e.value !== t
            }(e, t) || function (e, t) {
                var n = e.value, r = e._vModifiers;
                if (i(r)) {
                    if (r.number) return m(n) !== m(t);
                    if (r.trim) return n.trim() !== t.trim()
                }
                return n !== t
            }(e, t))
        }

        var Tr = {create: xr, update: xr}, Br = E((function (e) {
            var t = {}, n = /:(.+)/;
            return e.split(/;(?![^(]*\))/g).forEach((function (e) {
                if (e) {
                    var r = e.split(n);
                    r.length > 1 && (t[r[0].trim()] = r[1].trim())
                }
            })), t
        }));

        function Fr(e) {
            var t = Mr(e.style);
            return e.staticStyle ? M(e.staticStyle, t) : t
        }

        function Mr(e) {
            return Array.isArray(e) ? I(e) : "string" == typeof e ? Br(e) : e
        }

        var Ir, _r = /^--/, Sr = /\s*!important$/, Nr = function (e, t, n) {
            if (_r.test(t)) e.style.setProperty(t, n); else if (Sr.test(n)) e.style.setProperty(T(t), n.replace(Sr, ""), "important"); else {
                var r = Lr(t);
                if (Array.isArray(n)) for (var o = 0, i = n.length; o < i; o++) e.style[r] = n[o]; else e.style[r] = n
            }
        }, Or = ["Webkit", "Moz", "ms"], Lr = E((function (e) {
            if (Ir = Ir || document.createElement("div").style, "filter" !== (e = b(e)) && e in Ir) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < Or.length; n++) {
                var r = Or[n] + t;
                if (r in Ir) return r
            }
        }));

        function kr(e, t) {
            var n = t.data, r = e.data;
            if (!(o(n.staticStyle) && o(n.style) && o(r.staticStyle) && o(r.style))) {
                var u, a, s = t.elm, l = r.staticStyle, c = r.normalizedStyle || r.style || {}, A = l || c,
                    p = Mr(t.data.style) || {};
                t.data.normalizedStyle = i(p.__ob__) ? M({}, p) : p;
                var f = function (e, t) {
                    var n, r = {};
                    if (t) for (var o = e; o.componentInstance;) (o = o.componentInstance._vnode) && o.data && (n = Fr(o.data)) && M(r, n);
                    (n = Fr(e.data)) && M(r, n);
                    for (var i = e; i = i.parent;) i.data && (n = Fr(i.data)) && M(r, n);
                    return r
                }(t, !0);
                for (a in A) o(f[a]) && Nr(s, a, "");
                for (a in f) (u = f[a]) !== A[a] && Nr(s, a, null == u ? "" : u)
            }
        }

        var jr = {create: kr, update: kr}, Rr = /\s+/;

        function Pr(e, t) {
            if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(Rr).forEach((function (t) {
                return e.classList.add(t)
            })) : e.classList.add(t); else {
                var n = " " + (e.getAttribute("class") || "") + " ";
                n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
            }
        }

        function Ur(e, t) {
            if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(Rr).forEach((function (t) {
                return e.classList.remove(t)
            })) : e.classList.remove(t), e.classList.length || e.removeAttribute("class"); else {
                for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
                (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class")
            }
        }

        function Qr(e) {
            if (e) {
                if ("object" == typeof e) {
                    var t = {};
                    return !1 !== e.css && M(t, Gr(e.name || "v")), M(t, e), t
                }
                return "string" == typeof e ? Gr(e) : void 0
            }
        }

        var Gr = E((function (e) {
            return {
                enterClass: e + "-enter",
                enterToClass: e + "-enter-to",
                enterActiveClass: e + "-enter-active",
                leaveClass: e + "-leave",
                leaveToClass: e + "-leave-to",
                leaveActiveClass: e + "-leave-active"
            }
        })), zr = $ && !X, Yr = "transition", $r = "transitionend", Zr = "animation", Hr = "animationend";
        zr && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Yr = "WebkitTransition", $r = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Zr = "WebkitAnimation", Hr = "webkitAnimationEnd"));
        var Wr = $ ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (e) {
            return e()
        };

        function Vr(e) {
            Wr((function () {
                Wr(e)
            }))
        }

        function Xr(e, t) {
            var n = e._transitionClasses || (e._transitionClasses = []);
            n.indexOf(t) < 0 && (n.push(t), Pr(e, t))
        }

        function Jr(e, t) {
            e._transitionClasses && v(e._transitionClasses, t), Ur(e, t)
        }

        function Kr(e, t, n) {
            var r = eo(e, t), o = r.type, i = r.timeout, u = r.propCount;
            if (!o) return n();
            var a = "transition" === o ? $r : Hr, s = 0, l = function () {
                e.removeEventListener(a, c), n()
            }, c = function (t) {
                t.target === e && ++s >= u && l()
            };
            setTimeout((function () {
                s < u && l()
            }), i + 1), e.addEventListener(a, c)
        }

        var qr = /\b(transform|all)(,|$)/;

        function eo(e, t) {
            var n, r = window.getComputedStyle(e), o = (r[Yr + "Delay"] || "").split(", "),
                i = (r[Yr + "Duration"] || "").split(", "), u = to(o, i), a = (r[Zr + "Delay"] || "").split(", "),
                s = (r[Zr + "Duration"] || "").split(", "), l = to(a, s), c = 0, A = 0;
            return "transition" === t ? u > 0 && (n = "transition", c = u, A = i.length) : "animation" === t ? l > 0 && (n = "animation", c = l, A = s.length) : A = (n = (c = Math.max(u, l)) > 0 ? u > l ? "transition" : "animation" : null) ? "transition" === n ? i.length : s.length : 0, {
                type: n,
                timeout: c,
                propCount: A,
                hasTransform: "transition" === n && qr.test(r[Yr + "Property"])
            }
        }

        function to(e, t) {
            for (; e.length < t.length;) e = e.concat(e);
            return Math.max.apply(null, t.map((function (t, n) {
                return no(t) + no(e[n])
            })))
        }

        function no(e) {
            return 1e3 * Number(e.slice(0, -1).replace(",", "."))
        }

        function ro(e, t) {
            var n = e.elm;
            i(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
            var r = Qr(e.data.transition);
            if (!o(r) && !i(n._enterCb) && 1 === n.nodeType) {
                for (var u = r.css, a = r.type, l = r.enterClass, c = r.enterToClass, A = r.enterActiveClass, p = r.appearClass, f = r.appearToClass, d = r.appearActiveClass, h = r.beforeEnter, g = r.enter, v = r.afterEnter, D = r.enterCancelled, y = r.beforeAppear, E = r.appear, C = r.afterAppear, b = r.appearCancelled, x = r.duration, w = Vt, T = Vt.$vnode; T && T.parent;) w = T.context, T = T.parent;
                var B = !w._isMounted || !e.isRootInsert;
                if (!B || E || "" === E) {
                    var F = B && p ? p : l, M = B && d ? d : A, I = B && f ? f : c, _ = B && y || h,
                        S = B && "function" == typeof E ? E : g, N = B && C || v, O = B && b || D,
                        L = m(s(x) ? x.enter : x);
                    0;
                    var j = !1 !== u && !X, R = uo(S), P = n._enterCb = k((function () {
                        j && (Jr(n, I), Jr(n, M)), P.cancelled ? (j && Jr(n, F), O && O(n)) : N && N(n), n._enterCb = null
                    }));
                    e.data.show || at(e, "insert", (function () {
                        var t = n.parentNode, r = t && t._pending && t._pending[e.key];
                        r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), S && S(n, P)
                    })), _ && _(n), j && (Xr(n, F), Xr(n, M), Vr((function () {
                        Jr(n, F), P.cancelled || (Xr(n, I), R || (io(L) ? setTimeout(P, L) : Kr(n, a, P)))
                    }))), e.data.show && (t && t(), S && S(n, P)), j || R || P()
                }
            }
        }

        function oo(e, t) {
            var n = e.elm;
            i(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
            var r = Qr(e.data.transition);
            if (o(r) || 1 !== n.nodeType) return t();
            if (!i(n._leaveCb)) {
                var u = r.css, a = r.type, l = r.leaveClass, c = r.leaveToClass, A = r.leaveActiveClass,
                    p = r.beforeLeave, f = r.leave, d = r.afterLeave, h = r.leaveCancelled, g = r.delayLeave,
                    v = r.duration, D = !1 !== u && !X, y = uo(f), E = m(s(v) ? v.leave : v);
                0;
                var C = n._leaveCb = k((function () {
                    n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), D && (Jr(n, c), Jr(n, A)), C.cancelled ? (D && Jr(n, l), h && h(n)) : (t(), d && d(n)), n._leaveCb = null
                }));
                g ? g(b) : b()
            }

            function b() {
                C.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), p && p(n), D && (Xr(n, l), Xr(n, A), Vr((function () {
                    Jr(n, l), C.cancelled || (Xr(n, c), y || (io(E) ? setTimeout(C, E) : Kr(n, a, C)))
                }))), f && f(n, C), D || y || C())
            }
        }

        function io(e) {
            return "number" == typeof e && !isNaN(e)
        }

        function uo(e) {
            if (o(e)) return !1;
            var t = e.fns;
            return i(t) ? uo(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1
        }

        function ao(e, t) {
            !0 !== t.data.show && ro(t)
        }

        var so = function (e) {
            var t, n, r = {}, s = e.modules, l = e.nodeOps;
            for (t = 0; t < er.length; ++t) for (r[er[t]] = [], n = 0; n < s.length; ++n) i(s[n][er[t]]) && r[er[t]].push(s[n][er[t]]);

            function c(e) {
                var t = l.parentNode(e);
                i(t) && l.removeChild(t, e)
            }

            function A(e, t, n, o, a, s, c) {
                if (i(e.elm) && i(s) && (e = s[c] = ve(e)), e.isRootInsert = !a, !function (e, t, n, o) {
                    var a = e.data;
                    if (i(a)) {
                        var s = i(e.componentInstance) && a.keepAlive;
                        if (i(a = a.hook) && i(a = a.init) && a(e, !1), i(e.componentInstance)) return p(e, t), f(n, e.elm, o), u(s) && function (e, t, n, o) {
                            var u, a = e;
                            for (; a.componentInstance;) if (a = a.componentInstance._vnode, i(u = a.data) && i(u = u.transition)) {
                                for (u = 0; u < r.activate.length; ++u) r.activate[u](qn, a);
                                t.push(a);
                                break
                            }
                            f(n, e.elm, o)
                        }(e, t, n, o), !0
                    }
                }(e, t, n, o)) {
                    var A = e.data, m = e.children, h = e.tag;
                    i(h) ? (e.elm = e.ns ? l.createElementNS(e.ns, h) : l.createElement(h, e), v(e), d(e, m, t), i(A) && g(e, t), f(n, e.elm, o)) : u(e.isComment) ? (e.elm = l.createComment(e.text), f(n, e.elm, o)) : (e.elm = l.createTextNode(e.text), f(n, e.elm, o))
                }
            }

            function p(e, t) {
                i(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, m(e) ? (g(e, t), v(e)) : (Kn(e), t.push(e))
            }

            function f(e, t, n) {
                i(e) && (i(n) ? l.parentNode(n) === e && l.insertBefore(e, t, n) : l.appendChild(e, t))
            }

            function d(e, t, n) {
                if (Array.isArray(t)) {
                    0;
                    for (var r = 0; r < t.length; ++r) A(t[r], n, e.elm, null, !0, t, r)
                } else a(e.text) && l.appendChild(e.elm, l.createTextNode(String(e.text)))
            }

            function m(e) {
                for (; e.componentInstance;) e = e.componentInstance._vnode;
                return i(e.tag)
            }

            function g(e, n) {
                for (var o = 0; o < r.create.length; ++o) r.create[o](qn, e);
                i(t = e.data.hook) && (i(t.create) && t.create(qn, e), i(t.insert) && n.push(e))
            }

            function v(e) {
                var t;
                if (i(t = e.fnScopeId)) l.setStyleScope(e.elm, t); else for (var n = e; n;) i(t = n.context) && i(t = t.$options._scopeId) && l.setStyleScope(e.elm, t), n = n.parent;
                i(t = Vt) && t !== e.context && t !== e.fnContext && i(t = t.$options._scopeId) && l.setStyleScope(e.elm, t)
            }

            function D(e, t, n, r, o, i) {
                for (; r <= o; ++r) A(n[r], i, e, t, !1, n, r)
            }

            function y(e) {
                var t, n, o = e.data;
                if (i(o)) for (i(t = o.hook) && i(t = t.destroy) && t(e), t = 0; t < r.destroy.length; ++t) r.destroy[t](e);
                if (i(t = e.children)) for (n = 0; n < e.children.length; ++n) y(e.children[n])
            }

            function E(e, t, n) {
                for (; t <= n; ++t) {
                    var r = e[t];
                    i(r) && (i(r.tag) ? (C(r), y(r)) : c(r.elm))
                }
            }

            function C(e, t) {
                if (i(t) || i(e.data)) {
                    var n, o = r.remove.length + 1;
                    for (i(t) ? t.listeners += o : t = function (e, t) {
                        function n() {
                            0 == --n.listeners && c(e)
                        }

                        return n.listeners = t, n
                    }(e.elm, o), i(n = e.componentInstance) && i(n = n._vnode) && i(n.data) && C(n, t), n = 0; n < r.remove.length; ++n) r.remove[n](e, t);
                    i(n = e.data.hook) && i(n = n.remove) ? n(e, t) : t()
                } else c(e.elm)
            }

            function b(e, t, n, r) {
                for (var o = n; o < r; o++) {
                    var u = t[o];
                    if (i(u) && tr(e, u)) return o
                }
            }

            function x(e, t, n, a, s, c) {
                if (e !== t) {
                    i(t.elm) && i(a) && (t = a[s] = ve(t));
                    var p = t.elm = e.elm;
                    if (u(e.isAsyncPlaceholder)) i(t.asyncFactory.resolved) ? B(e.elm, t, n) : t.isAsyncPlaceholder = !0; else if (u(t.isStatic) && u(e.isStatic) && t.key === e.key && (u(t.isCloned) || u(t.isOnce))) t.componentInstance = e.componentInstance; else {
                        var f, d = t.data;
                        i(d) && i(f = d.hook) && i(f = f.prepatch) && f(e, t);
                        var h = e.children, g = t.children;
                        if (i(d) && m(t)) {
                            for (f = 0; f < r.update.length; ++f) r.update[f](e, t);
                            i(f = d.hook) && i(f = f.update) && f(e, t)
                        }
                        o(t.text) ? i(h) && i(g) ? h !== g && function (e, t, n, r, u) {
                            var a, s, c, p = 0, f = 0, d = t.length - 1, m = t[0], h = t[d], g = n.length - 1, v = n[0],
                                y = n[g], C = !u;
                            for (0; p <= d && f <= g;) o(m) ? m = t[++p] : o(h) ? h = t[--d] : tr(m, v) ? (x(m, v, r, n, f), m = t[++p], v = n[++f]) : tr(h, y) ? (x(h, y, r, n, g), h = t[--d], y = n[--g]) : tr(m, y) ? (x(m, y, r, n, g), C && l.insertBefore(e, m.elm, l.nextSibling(h.elm)), m = t[++p], y = n[--g]) : tr(h, v) ? (x(h, v, r, n, f), C && l.insertBefore(e, h.elm, m.elm), h = t[--d], v = n[++f]) : (o(a) && (a = nr(t, p, d)), o(s = i(v.key) ? a[v.key] : b(v, t, p, d)) ? A(v, r, e, m.elm, !1, n, f) : tr(c = t[s], v) ? (x(c, v, r, n, f), t[s] = void 0, C && l.insertBefore(e, c.elm, m.elm)) : A(v, r, e, m.elm, !1, n, f), v = n[++f]);
                            p > d ? D(e, o(n[g + 1]) ? null : n[g + 1].elm, n, f, g, r) : f > g && E(t, p, d)
                        }(p, h, g, n, c) : i(g) ? (i(e.text) && l.setTextContent(p, ""), D(p, null, g, 0, g.length - 1, n)) : i(h) ? E(h, 0, h.length - 1) : i(e.text) && l.setTextContent(p, "") : e.text !== t.text && l.setTextContent(p, t.text), i(d) && i(f = d.hook) && i(f = f.postpatch) && f(e, t)
                    }
                }
            }

            function w(e, t, n) {
                if (u(n) && i(e.parent)) e.parent.data.pendingInsert = t; else for (var r = 0; r < t.length; ++r) t[r].data.hook.insert(t[r])
            }

            var T = h("attrs,class,staticClass,staticStyle,key");

            function B(e, t, n, r) {
                var o, a = t.tag, s = t.data, l = t.children;
                if (r = r || s && s.pre, t.elm = e, u(t.isComment) && i(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
                if (i(s) && (i(o = s.hook) && i(o = o.init) && o(t, !0), i(o = t.componentInstance))) return p(t, n), !0;
                if (i(a)) {
                    if (i(l)) if (e.hasChildNodes()) if (i(o = s) && i(o = o.domProps) && i(o = o.innerHTML)) {
                        if (o !== e.innerHTML) return !1
                    } else {
                        for (var c = !0, A = e.firstChild, f = 0; f < l.length; f++) {
                            if (!A || !B(A, l[f], n, r)) {
                                c = !1;
                                break
                            }
                            A = A.nextSibling
                        }
                        if (!c || A) return !1
                    } else d(t, l, n);
                    if (i(s)) {
                        var m = !1;
                        for (var h in s) if (!T(h)) {
                            m = !0, g(t, n);
                            break
                        }
                        !m && s.class && rt(s.class)
                    }
                } else e.data !== t.text && (e.data = t.text);
                return !0
            }

            return function (e, t, n, a) {
                if (!o(t)) {
                    var s, c = !1, p = [];
                    if (o(e)) c = !0, A(t, p); else {
                        var f = i(e.nodeType);
                        if (!f && tr(e, t)) x(e, t, p, null, null, a); else {
                            if (f) {
                                if (1 === e.nodeType && e.hasAttribute("data-server-rendered") && (e.removeAttribute("data-server-rendered"), n = !0), u(n) && B(e, t, p)) return w(t, p, !0), e;
                                s = e, e = new de(l.tagName(s).toLowerCase(), {}, [], void 0, s)
                            }
                            var d = e.elm, h = l.parentNode(d);
                            if (A(t, p, d._leaveCb ? null : h, l.nextSibling(d)), i(t.parent)) for (var g = t.parent, v = m(t); g;) {
                                for (var D = 0; D < r.destroy.length; ++D) r.destroy[D](g);
                                if (g.elm = t.elm, v) {
                                    for (var C = 0; C < r.create.length; ++C) r.create[C](qn, g);
                                    var b = g.data.hook.insert;
                                    if (b.merged) for (var T = 1; T < b.fns.length; T++) b.fns[T]()
                                } else Kn(g);
                                g = g.parent
                            }
                            i(h) ? E([e], 0, 0) : i(e.tag) && y(e)
                        }
                    }
                    return w(t, p, c), t.elm
                }
                i(e) && y(e)
            }
        }({
            nodeOps: Xn, modules: [fr, hr, br, Tr, jr, $ ? {
                create: ao, activate: ao, remove: function (e, t) {
                    !0 !== e.data.show ? oo(e, t) : t()
                }
            } : {}].concat(lr)
        });
        X && document.addEventListener("selectionchange", (function () {
            var e = document.activeElement;
            e && e.vmodel && go(e, "input")
        }));
        var lo = {
            inserted: function (e, t, n, r) {
                "select" === n.tag ? (r.elm && !r.elm._vOptions ? at(n, "postpatch", (function () {
                    lo.componentUpdated(e, t, n)
                })) : co(e, t, n.context), e._vOptions = [].map.call(e.options, fo)) : ("textarea" === n.tag || Vn(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", mo), e.addEventListener("compositionend", ho), e.addEventListener("change", ho), X && (e.vmodel = !0)))
            }, componentUpdated: function (e, t, n) {
                if ("select" === n.tag) {
                    co(e, t, n.context);
                    var r = e._vOptions, o = e._vOptions = [].map.call(e.options, fo);
                    if (o.some((function (e, t) {
                        return !O(e, r[t])
                    }))) (e.multiple ? t.value.some((function (e) {
                        return po(e, o)
                    })) : t.value !== t.oldValue && po(t.value, o)) && go(e, "change")
                }
            }
        };

        function co(e, t, n) {
            Ao(e, t, n), (V || J) && setTimeout((function () {
                Ao(e, t, n)
            }), 0)
        }

        function Ao(e, t, n) {
            var r = t.value, o = e.multiple;
            if (!o || Array.isArray(r)) {
                for (var i, u, a = 0, s = e.options.length; a < s; a++) if (u = e.options[a], o) i = L(r, fo(u)) > -1, u.selected !== i && (u.selected = i); else if (O(fo(u), r)) return void (e.selectedIndex !== a && (e.selectedIndex = a));
                o || (e.selectedIndex = -1)
            }
        }

        function po(e, t) {
            return t.every((function (t) {
                return !O(t, e)
            }))
        }

        function fo(e) {
            return "_value" in e ? e._value : e.value
        }

        function mo(e) {
            e.target.composing = !0
        }

        function ho(e) {
            e.target.composing && (e.target.composing = !1, go(e.target, "input"))
        }

        function go(e, t) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(t, !0, !0), e.dispatchEvent(n)
        }

        function vo(e) {
            return !e.componentInstance || e.data && e.data.transition ? e : vo(e.componentInstance._vnode)
        }

        var Do = {
            model: lo, show: {
                bind: function (e, t, n) {
                    var r = t.value, o = (n = vo(n)).data && n.data.transition,
                        i = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                    r && o ? (n.data.show = !0, ro(n, (function () {
                        e.style.display = i
                    }))) : e.style.display = r ? i : "none"
                }, update: function (e, t, n) {
                    var r = t.value;
                    !r != !t.oldValue && ((n = vo(n)).data && n.data.transition ? (n.data.show = !0, r ? ro(n, (function () {
                        e.style.display = e.__vOriginalDisplay
                    })) : oo(n, (function () {
                        e.style.display = "none"
                    }))) : e.style.display = r ? e.__vOriginalDisplay : "none")
                }, unbind: function (e, t, n, r, o) {
                    o || (e.style.display = e.__vOriginalDisplay)
                }
            }
        }, yo = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String,
            duration: [Number, String, Object]
        };

        function Eo(e) {
            var t = e && e.componentOptions;
            return t && t.Ctor.options.abstract ? Eo(Yt(t.children)) : e
        }

        function Co(e) {
            var t = {}, n = e.$options;
            for (var r in n.propsData) t[r] = e[r];
            var o = n._parentListeners;
            for (var i in o) t[b(i)] = o[i];
            return t
        }

        function bo(e, t) {
            if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {props: t.componentOptions.propsData})
        }

        var xo = function (e) {
            return e.tag || zt(e)
        }, wo = function (e) {
            return "show" === e.name
        }, To = {
            name: "transition", props: yo, abstract: !0, render: function (e) {
                var t = this, n = this.$slots.default;
                if (n && (n = n.filter(xo)).length) {
                    0;
                    var r = this.mode;
                    0;
                    var o = n[0];
                    if (function (e) {
                        for (; e = e.parent;) if (e.data.transition) return !0
                    }(this.$vnode)) return o;
                    var i = Eo(o);
                    if (!i) return o;
                    if (this._leaving) return bo(e, o);
                    var u = "__transition-" + this._uid + "-";
                    i.key = null == i.key ? i.isComment ? u + "comment" : u + i.tag : a(i.key) ? 0 === String(i.key).indexOf(u) ? i.key : u + i.key : i.key;
                    var s = (i.data || (i.data = {})).transition = Co(this), l = this._vnode, c = Eo(l);
                    if (i.data.directives && i.data.directives.some(wo) && (i.data.show = !0), c && c.data && !function (e, t) {
                        return t.key === e.key && t.tag === e.tag
                    }(i, c) && !zt(c) && (!c.componentInstance || !c.componentInstance._vnode.isComment)) {
                        var A = c.data.transition = M({}, s);
                        if ("out-in" === r) return this._leaving = !0, at(A, "afterLeave", (function () {
                            t._leaving = !1, t.$forceUpdate()
                        })), bo(e, o);
                        if ("in-out" === r) {
                            if (zt(i)) return l;
                            var p, f = function () {
                                p()
                            };
                            at(s, "afterEnter", f), at(s, "enterCancelled", f), at(A, "delayLeave", (function (e) {
                                p = e
                            }))
                        }
                    }
                    return o
                }
            }
        }, Bo = M({tag: String, moveClass: String}, yo);

        function Fo(e) {
            e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb()
        }

        function Mo(e) {
            e.data.newPos = e.elm.getBoundingClientRect()
        }

        function Io(e) {
            var t = e.data.pos, n = e.data.newPos, r = t.left - n.left, o = t.top - n.top;
            if (r || o) {
                e.data.moved = !0;
                var i = e.elm.style;
                i.transform = i.WebkitTransform = "translate(" + r + "px," + o + "px)", i.transitionDuration = "0s"
            }
        }

        delete Bo.mode;
        var _o = {
            Transition: To, TransitionGroup: {
                props: Bo, beforeMount: function () {
                    var e = this, t = this._update;
                    this._update = function (n, r) {
                        var o = Xt(e);
                        e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, o(), t.call(e, n, r)
                    }
                }, render: function (e) {
                    for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, o = this.$slots.default || [], i = this.children = [], u = Co(this), a = 0; a < o.length; a++) {
                        var s = o[a];
                        if (s.tag) if (null != s.key && 0 !== String(s.key).indexOf("__vlist")) i.push(s), n[s.key] = s, (s.data || (s.data = {})).transition = u; else ;
                    }
                    if (r) {
                        for (var l = [], c = [], A = 0; A < r.length; A++) {
                            var p = r[A];
                            p.data.transition = u, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? l.push(p) : c.push(p)
                        }
                        this.kept = e(t, null, l), this.removed = c
                    }
                    return e(t, null, i)
                }, updated: function () {
                    var e = this.prevChildren, t = this.moveClass || (this.name || "v") + "-move";
                    e.length && this.hasMove(e[0].elm, t) && (e.forEach(Fo), e.forEach(Mo), e.forEach(Io), this._reflow = document.body.offsetHeight, e.forEach((function (e) {
                        if (e.data.moved) {
                            var n = e.elm, r = n.style;
                            Xr(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener($r, n._moveCb = function e(r) {
                                r && r.target !== n || r && !/transform$/.test(r.propertyName) || (n.removeEventListener($r, e), n._moveCb = null, Jr(n, t))
                            })
                        }
                    })))
                }, methods: {
                    hasMove: function (e, t) {
                        if (!zr) return !1;
                        if (this._hasMove) return this._hasMove;
                        var n = e.cloneNode();
                        e._transitionClasses && e._transitionClasses.forEach((function (e) {
                            Ur(n, e)
                        })), Pr(n, t), n.style.display = "none", this.$el.appendChild(n);
                        var r = eo(n);
                        return this.$el.removeChild(n), this._hasMove = r.hasTransform
                    }
                }
            }
        };
        bn.config.mustUseProp = function (e, t, n) {
            return "value" === n && Sn(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
        }, bn.config.isReservedTag = Hn, bn.config.isReservedAttr = _n, bn.config.getTagNamespace = function (e) {
            return Zn(e) ? "svg" : "math" === e ? "math" : void 0
        }, bn.config.isUnknownElement = function (e) {
            if (!$) return !0;
            if (Hn(e)) return !1;
            if (e = e.toLowerCase(), null != Wn[e]) return Wn[e];
            var t = document.createElement(e);
            return e.indexOf("-") > -1 ? Wn[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Wn[e] = /HTMLUnknownElement/.test(t.toString())
        }, M(bn.options.directives, Do), M(bn.options.components, _o), bn.prototype.__patch__ = $ ? so : _, bn.prototype.$mount = function (e, t) {
            return function (e, t, n) {
                var r;
                return e.$el = t, e.$options.render || (e.$options.render = he), qt(e, "beforeMount"), r = function () {
                    e._update(e._render(), n)
                }, new pn(e, r, _, {
                    before: function () {
                        e._isMounted && !e._isDestroyed && qt(e, "beforeUpdate")
                    }
                }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, qt(e, "mounted")), e
            }(this, e = e && $ ? function (e) {
                if ("string" == typeof e) {
                    var t = document.querySelector(e);
                    return t || document.createElement("div")
                }
                return e
            }(e) : void 0, t)
        }, $ && setTimeout((function () {
            P.devtools && oe && oe.emit("init", bn)
        }), 0), t.default = bn
    }.call(this, n(10), n(158).setImmediate)
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function (e, t, n) {
    var r = n(3), o = n(110), i = n(5), u = n(64), a = n(118), s = n(196), l = o("wks"), c = r.Symbol,
        A = s ? c : c && c.withoutSetter || u;
    e.exports = function (e) {
        return i(l, e) || (a && i(c, e) ? l[e] = c[e] : l[e] = A("Symbol." + e)), l[e]
    }
}, function (e, t, n) {
    (function (t) {
        var n = function (e) {
            return e && e.Math == Math && e
        };
        e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || Function("return this")()
    }).call(this, n(10))
}, function (e, t, n) {
    var r = n(3), o = n(104).f, i = n(13), u = n(14), a = n(62), s = n(191), l = n(115);
    e.exports = function (e, t) {
        var n, c, A, p, f, d = e.target, m = e.global, h = e.stat;
        if (n = m ? r : h ? r[d] || a(d, {}) : (r[d] || {}).prototype) for (c in t) {
            if (p = t[c], A = e.noTargetGet ? (f = o(n, c)) && f.value : n[c], !l(m ? c : d + (h ? "." : "#") + c, e.forced) && void 0 !== A) {
                if (typeof p == typeof A) continue;
                s(p, A)
            }
            (e.sham || A && A.sham) && i(p, "sham", !0), u(n, c, p, e)
        }
    }
}, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return n.call(e, t)
    }
}, function (e, t, n) {
    var r = n(9);
    e.exports = function (e) {
        if (!r(e)) throw TypeError(String(e) + " is not an object");
        return e
    }
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function (e, t, n) {
    var r = n(1);
    e.exports = !r((function () {
        return 7 != Object.defineProperty({}, 1, {
            get: function () {
                return 7
            }
        })[1]
    }))
}, function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    (function (t) {
        var n = function (e) {
            return e && e.Math == Math && e
        };
        e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || Function("return this")()
    }).call(this, n(10))
}, function (e, t, n) {
    var r = n(8), o = n(106), i = n(6), u = n(61), a = Object.defineProperty;
    t.f = r ? a : function (e, t, n) {
        if (i(e), t = u(t, !0), i(n), o) try {
            return a(e, t, n)
        } catch (e) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (e[t] = n.value), e
    }
}, function (e, t, n) {
    var r = n(8), o = n(12), i = n(24);
    e.exports = r ? function (e, t, n) {
        return o.f(e, t, i(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t, n) {
    var r = n(3), o = n(13), i = n(5), u = n(62), a = n(108), s = n(20), l = s.get, c = s.enforce,
        A = String(String).split("String");
    (e.exports = function (e, t, n, a) {
        var s = !!a && !!a.unsafe, l = !!a && !!a.enumerable, p = !!a && !!a.noTargetGet;
        "function" == typeof n && ("string" != typeof t || i(n, "name") || o(n, "name", t), c(n).source = A.join("string" == typeof t ? t : "")), e !== r ? (s ? !p && e[t] && (l = !0) : delete e[t], l ? e[t] = n : o(e, t, n)) : l ? e[t] = n : u(t, n)
    })(Function.prototype, "toString", (function () {
        return "function" == typeof this && l(this).source || a(this)
    }))
}, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return n.call(e, t)
    }
}, function (e, t, n) {
    var r = n(27), o = Math.min;
    e.exports = function (e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}, function (e, t, n) {
    var r = n(25);
    e.exports = function (e) {
        return Object(r(e))
    }
}, function (e, t, n) {
    "use strict";
    n(160), n(175), n(178), n(101), n(183), n(184), Object.defineProperty(t, "__esModule", {value: !0}), t.getRootUrl = t.generateFilePath = t.imagePath = t.generateUrl = t.generateOcsUrl = t.generateRemoteUrl = t.linkTo = void 0;
    t.linkTo = function (e, t) {
        return r(e, "", t)
    };
    t.generateRemoteUrl = function (e) {
        return window.location.protocol + "//" + window.location.host + function (e) {
            return o() + "/remote.php/" + e
        }(e)
    };
    t.generateOcsUrl = function (e, t) {
        return t = 2 !== t ? 1 : 2, window.location.protocol + "//" + window.location.host + o() + "/ocs/v" + t + ".php/" + e + "/"
    };
    t.generateUrl = function (e, t, n) {
        var r = Object.assign({escape: !0, noRewrite: !1}, n || {}), i = function (e, t) {
            return t = t || {}, e.replace(/{([^{}]*)}/g, (function (e, n) {
                var o = t[n];
                return r.escape ? "string" == typeof o || "number" == typeof o ? encodeURIComponent(o.toString()) : encodeURIComponent(e) : "string" == typeof o || "number" == typeof o ? o.toString() : e
            }))
        };
        return "/" !== e.charAt(0) && (e = "/" + e), !0 !== OC.config.modRewriteWorking || r.noRewrite ? o() + "/index.php" + i(e, t || {}) : o() + i(e, t || {})
    };
    t.imagePath = function (e, t) {
        return -1 === t.indexOf(".") ? r(e, "img", t + ".svg") : r(e, "img", t)
    };
    var r = function (e, t, n) {
        var r = -1 !== OC.coreApps.indexOf(e), i = o();
        return "php" !== n.substring(n.length - 3) || r ? "php" === n.substring(n.length - 3) || r ? (i += "settings" !== e && "core" !== e && "search" !== e || "ajax" !== t ? "/" : "/index.php/", r || (i += "apps/"), "" !== e && (i += e += "/"), t && (i += t + "/"), i += n) : (i = OC.appswebroots[e], t && (i += "/" + t + "/"), "/" !== i.substring(i.length - 1) && (i += "/"), i += n) : (i += "/index.php/apps/" + e, "index.php" !== n && (i += "/", t && (i += encodeURI(t + "/")), i += n)), i
    };
    t.generateFilePath = r;
    var o = function () {
        return OC.webroot
    };
    t.getRootUrl = o
}, function (e, t, n) {
    var r = n(7);
    e.exports = !r((function () {
        return 7 != Object.defineProperty({}, 1, {
            get: function () {
                return 7
            }
        })[1]
    }))
}, function (e, t, n) {
    var r, o, i, u = n(190), a = n(3), s = n(9), l = n(13), c = n(5), A = n(63), p = n(40), f = a.WeakMap;
    if (u) {
        var d = new f, m = d.get, h = d.has, g = d.set;
        r = function (e, t) {
            return g.call(d, e, t), t
        }, o = function (e) {
            return m.call(d, e) || {}
        }, i = function (e) {
            return h.call(d, e)
        }
    } else {
        var v = A("state");
        p[v] = !0, r = function (e, t) {
            return l(e, v, t), t
        }, o = function (e) {
            return c(e, v) ? e[v] : {}
        }, i = function (e) {
            return c(e, v)
        }
    }
    e.exports = {
        set: r, get: o, has: i, enforce: function (e) {
            return i(e) ? o(e) : r(e, {})
        }, getterFor: function (e) {
            return function (t) {
                var n;
                if (!s(t) || (n = o(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                return n
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return a
    })), n.d(t, "c", (function () {
        return s
    })), n.d(t, "b", (function () {
        return l
    }));
    var r = n(47), o = n.n(r), i = function (e) {
        return !!e && Number(e).toString() === e.toString()
    };

    function u(e) {
        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    /**
     * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
     *
     * @author John Molakvoæ <skjnldsv@protonmail.com>
     *
     * @license GNU AGPL version 3 or any later version
     *
     * This program is free software: you can redistribute it and/or modify
     * it under the terms of the GNU Affero General Public License as
     * published by the Free Software Foundation, either version 3 of the
     * License, or (at your option) any later version.
     *
     * This program is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
     * GNU Affero General Public License for more details.
     *
     * You should have received a copy of the GNU Affero General Public License
     * along with this program. If not, see <http://www.gnu.org/licenses/>.
     *
     */var a = function (e) {
        var t = (e.startsWith("/") ? e : "/".concat(e)).split("/"), n = "";
        return t.forEach((function (e) {
            "" !== e && (n += "/" + encodeURIComponent(e))
        })), n
    }, s = function (e, t, n) {
        var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        return e.isFavorite && !t.isFavorite ? -1 : !e.isFavorite && t.isFavorite ? 1 : i(e[n]) && i(t[n]) ? r ? Number(t[n]) - Number(e[n]) : Number(e[n]) - Number(t[n]) : "file" !== e.type && "file" === t.type ? r ? -1 : 1 : "file" === e.type && "file" !== t.type ? r ? 1 : -1 : i(new Date(e[n]).getTime()) && i(new Date(t[n]).getTime()) ? r ? new Date(t[n]).getTime() - new Date(e[n]).getTime() : new Date(e[n]).getTime() - new Date(t[n]).getTime() : r ? e[n].localeCompare(t[n], OC.getLanguage()) : -e[n].localeCompare(t[n], OC.getLanguage())
    }, l = function e(t) {
        var n = {};
        return Object.keys(t).forEach((function (r) {
            var a = t[r];
            a && "object" === u(a) ? Object.assign(n, e(a)) : n[o()(r)] = "false" !== a && ("true" === a || (i(a) ? Number(a) : a))
        })), n
    }
}, function (e, t, n) {
    var r = n(19), o = n(88), i = n(84);
    e.exports = r ? function (e, t, n) {
        return o.f(e, t, i(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t, n) {
    var r = n(34);
    e.exports = function (e) {
        if (!r(e)) throw TypeError(String(e) + " is not an object");
        return e
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
    }
}, function (e, t) {
    e.exports = function (e) {
        if (null == e) throw TypeError("Can't call method on " + e);
        return e
    }
}, function (e, t, n) {
    var r = n(193), o = n(3), i = function (e) {
        return "function" == typeof e ? e : void 0
    };
    e.exports = function (e, t) {
        return arguments.length < 2 ? i(r[e]) || i(o[e]) : r[e] && r[e][t] || o[e] && o[e][t]
    }
}, function (e, t) {
    var n = Math.ceil, r = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}, function (e, t, n) {
    var r = n(195);
    e.exports = function (e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
            case 0:
                return function () {
                    return e.call(t)
                };
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function (n, r, o) {
                    return e.call(t, n, r, o)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}, function (e, t, n) {
    var r = n(8), o = n(1), i = n(5), u = Object.defineProperty, a = {}, s = function (e) {
        throw e
    };
    e.exports = function (e, t) {
        if (i(a, e)) return a[e];
        t || (t = {});
        var n = [][e], l = !!i(t, "ACCESSORS") && t.ACCESSORS, c = i(t, 0) ? t[0] : s, A = i(t, 1) ? t[1] : void 0;
        return a[e] = !!n && !o((function () {
            if (l && !r) return !0;
            var e = {length: -1};
            l ? u(e, 1, {enumerable: !0, get: s}) : e[1] = 1, n.call(e, c, A)
        }))
    }
}, function (e, t) {
    e.exports = {}
}, function (e, t, n) {
    var r = n(12).f, o = n(5), i = n(2)("toStringTag");
    e.exports = function (e, t, n) {
        e && !o(e = n ? e : e.prototype, i) && r(e, i, {configurable: !0, value: t})
    }
}, function (e, t, n) {
    "use strict";
    var r = n(37), o = n(202), i = n(30), u = n(20), a = n(69), s = u.set, l = u.getterFor("Array Iterator");
    e.exports = a(Array, "Array", (function (e, t) {
        s(this, {type: "Array Iterator", target: r(e), index: 0, kind: t})
    }), (function () {
        var e = l(this), t = e.target, n = e.kind, r = e.index++;
        return !t || r >= t.length ? (e.target = void 0, {value: void 0, done: !0}) : "keys" == n ? {
            value: r,
            done: !1
        } : "values" == n ? {value: t[r], done: !1} : {value: [r, t[r]], done: !1}
    }), "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
}, function (e, t) {
    e.exports = function (e) {
        if (null == e) throw TypeError("Can't call method on " + e);
        return e
    }
}, function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function (e, t, n) {
    var r = n(11), o = n(22), i = n(15), u = n(56), a = n(89), s = n(162), l = s.get, c = s.enforce,
        A = String(String).split("String");
    (e.exports = function (e, t, n, a) {
        var s = !!a && !!a.unsafe, l = !!a && !!a.enumerable, p = !!a && !!a.noTargetGet;
        "function" == typeof n && ("string" != typeof t || i(n, "name") || o(n, "name", t), c(n).source = A.join("string" == typeof t ? t : "")), e !== r ? (s ? !p && e[t] && (l = !0) : delete e[t], l ? e[t] = n : o(e, t, n)) : l ? e[t] = n : u(t, n)
    })(Function.prototype, "toString", (function () {
        return "function" == typeof this && l(this).source || a(this)
    }))
}, function (e, t) {
    var n = Math.ceil, r = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}, function (e, t, n) {
    var r = n(60), o = n(25);
    e.exports = function (e) {
        return r(o(e))
    }
}, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}, function (e, t) {
    e.exports = !1
}, function (e, t) {
    e.exports = {}
}, function (e, t, n) {
    var r = n(1), o = n(2), i = n(120), u = o("species");
    e.exports = function (e) {
        return i >= 51 || !r((function () {
            var t = [];
            return (t.constructor = {})[u] = function () {
                return {foo: 1}
            }, 1 !== t[e](Boolean).foo
        }))
    }
}, function (e, t, n) {
    var r, o = n(6), i = n(121), u = n(65), a = n(40), s = n(203), l = n(107), c = n(63), A = c("IE_PROTO"),
        p = function () {
        }, f = function (e) {
            return "<script>" + e + "<\/script>"
        }, d = function () {
            try {
                r = document.domain && new ActiveXObject("htmlfile")
            } catch (e) {
            }
            var e, t;
            d = r ? function (e) {
                e.write(f("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            }(r) : ((t = l("iframe")).style.display = "none", s.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(f("document.F=Object")), e.close(), e.F);
            for (var n = u.length; n--;) delete d.prototype[u[n]];
            return d()
        };
    a[A] = !0, e.exports = Object.create || function (e, t) {
        var n;
        return null !== e ? (p.prototype = o(e), n = new p, p.prototype = null, n[A] = e) : n = d(), void 0 === t ? n : i(n, t)
    }
}, function (e, t, n) {
    var r = n(70), o = n(30), i = n(2)("iterator");
    e.exports = function (e) {
        if (null != e) return e[i] || e["@@iterator"] || o[r(e)]
    }
}, function (e, t) {
    e.exports = function (e, t, n) {
        if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return e
    }
}, function (e, t, n) {
    var r = n(232);
    "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    (0, n(148).default)("77f3f4ca", r, !0, {})
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.getLocale = function () {
        if ("undefined" == typeof OC) return console.warn("No OC found"), "en";
        return OC.getLocale()
    }, t.getLanguage = function () {
        if ("undefined" == typeof OC) return console.warn("No OC found"), "en";
        return OC.getLanguage()
    }, t.translate = function (e, t, n, r, o) {
        if ("undefined" == typeof OC) return console.warn("No OC found"), t;
        return OC.L10N.translate(e, t, n, r, o)
    }, t.translatePlural = function (e, t, n, r, o, i) {
        if ("undefined" == typeof OC) return console.warn("No OC found"), t;
        return OC.L10N.translatePlural(e, t, n, r, o, i)
    }, t.getFirstDay = function () {
        if (void 0 === window.firstDay) return console.warn("No firstDay found"), 1;
        return window.firstDay
    }, t.getDayNames = function () {
        if (void 0 === window.dayNames) return console.warn("No dayNames found"), ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return window.dayNames
    }, t.getDayNamesShort = function () {
        if (void 0 === window.dayNamesShort) return console.warn("No dayNamesShort found"), ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
        return window.dayNamesShort
    }, t.getDayNamesMin = function () {
        if (void 0 === window.dayNamesMin) return console.warn("No dayNamesMin found"), ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
        return window.dayNamesMin
    }, t.getMonthNames = function () {
        if (void 0 === window.monthNames) return console.warn("No monthNames found"), ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return window.monthNames
    }, t.getMonthNamesShort = function () {
        if (void 0 === window.monthNamesShort) return console.warn("No monthNamesShort found"), ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
        return window.monthNamesShort
    }
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var i = function (e, t) {
        if ("string" != typeof e && !Array.isArray(e)) throw new TypeError("Expected the input to be `string | string[]`");
        t = function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach((function (t) {
                    o(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }({}, {pascalCase: !1}, {}, t);
        var n;
        return 0 === (e = Array.isArray(e) ? e.map((function (e) {
            return e.trim()
        })).filter((function (e) {
            return e.length
        })).join("-") : e.trim()).length ? "" : 1 === e.length ? t.pascalCase ? e.toLocaleUpperCase() : e.toLocaleLowerCase() : (e !== e.toLocaleLowerCase() && (e = function (e) {
            for (var t = !1, n = !1, r = !1, o = 0; o < e.length; o++) {
                var i = e[o];
                t && /(?:[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C2\uA7C4-\uA7C7\uA7C9\uA7F5\uFF21-\uFF3A]|\uD801[\uDC00-\uDC27\uDCB0-\uDCD3]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21])/.test(i) ? (e = e.slice(0, o) + "-" + e.slice(o), t = !1, r = n, n = !0, o++) : n && r && /(?:[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C3\uA7C8\uA7CA\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]|\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43])/.test(i) ? (e = e.slice(0, o - 1) + "-" + e.slice(o - 1), r = n, n = !1, t = !0) : (t = i.toLocaleLowerCase() === i && i.toLocaleUpperCase() !== i, r = n, n = i.toLocaleUpperCase() === i && i.toLocaleLowerCase() !== i)
            }
            return e
        }(e)), e = e.replace(/^[_.\- ]+/, "").toLocaleLowerCase().replace(/[ \x2D\._]+((?:[0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0345\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05B0-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0657\u0659-\u0669\u066E-\u06D3\u06D5-\u06DC\u06E1-\u06E8\u06ED-\u06FC\u06FF\u0710-\u073F\u074D-\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0817\u081A-\u082C\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u08D4-\u08DF\u08E3-\u08E9\u08F0-\u093B\u093D-\u094C\u094E-\u0950\u0955-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C4\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B\u0A4C\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC5\u0AC7-\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFC\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D-\u0B44\u0B47\u0B48\u0B4B\u0B4C\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71-\u0B77\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0BE6-\u0BF2\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4C\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCC\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D54-\u0D63\u0D66-\u0D78\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E46\u0E4D\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F71-\u0F81\u0F88-\u0F97\u0F99-\u0FBC\u1000-\u1036\u1038\u103B-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1713\u1720-\u1733\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17C8\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u1938\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A61-\u1A74\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1ABF\u1AC0\u1B00-\u1B33\u1B35-\u1B43\u1B45-\u1B4B\u1B50-\u1B59\u1B80-\u1BA9\u1BAC-\u1BE5\u1BE7-\u1BF1\u1C00-\u1C36\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1DE7-\u1DF4\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2189\u2150-\u2182\u2460-\u249B\u24B6-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA674-\uA67B\uA67F-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA805\uA807-\uA827\uA830-\uA835\uA840-\uA873\uA880-\uA8C3\uA8C5\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD-\uA92A\uA930-\uA952\uA960-\uA97C\uA980-\uA9B2\uA9B4-\uA9BF\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAABE\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD27\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC45\uDC52-\uDC6F\uDC82-\uDCB8\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD32\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDCE-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB5\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC38\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B\uDD3C\uDD3F-\uDD42\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDDF\uDDE1\uDDE3\uDDE4\uDE00-\uDE32\uDE35-\uDE3E\uDE50-\uDE97\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD41\uDD43\uDD46\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD96\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD47\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])|$)/g, (function (e, t) {
            return t.toLocaleUpperCase()
        })).replace(/[0-9]+((?:[0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0345\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05B0-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0657\u0659-\u0669\u066E-\u06D3\u06D5-\u06DC\u06E1-\u06E8\u06ED-\u06FC\u06FF\u0710-\u073F\u074D-\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0817\u081A-\u082C\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u08D4-\u08DF\u08E3-\u08E9\u08F0-\u093B\u093D-\u094C\u094E-\u0950\u0955-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C4\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B\u0A4C\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC5\u0AC7-\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFC\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D-\u0B44\u0B47\u0B48\u0B4B\u0B4C\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71-\u0B77\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0BE6-\u0BF2\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4C\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCC\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D54-\u0D63\u0D66-\u0D78\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E46\u0E4D\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F71-\u0F81\u0F88-\u0F97\u0F99-\u0FBC\u1000-\u1036\u1038\u103B-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1713\u1720-\u1733\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17C8\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u1938\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A61-\u1A74\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1ABF\u1AC0\u1B00-\u1B33\u1B35-\u1B43\u1B45-\u1B4B\u1B50-\u1B59\u1B80-\u1BA9\u1BAC-\u1BE5\u1BE7-\u1BF1\u1C00-\u1C36\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1DE7-\u1DF4\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2189\u2150-\u2182\u2460-\u249B\u24B6-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA674-\uA67B\uA67F-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA805\uA807-\uA827\uA830-\uA835\uA840-\uA873\uA880-\uA8C3\uA8C5\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD-\uA92A\uA930-\uA952\uA960-\uA97C\uA980-\uA9B2\uA9B4-\uA9BF\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAABE\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD27\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC45\uDC52-\uDC6F\uDC82-\uDCB8\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD32\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDCE-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB5\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC38\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B\uDD3C\uDD3F-\uDD42\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDDF\uDDE1\uDDE3\uDDE4\uDE00-\uDE32\uDE35-\uDE3E\uDE50-\uDE97\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD41\uDD43\uDD46\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD96\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD47\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])|$)/g, (function (e) {
            return e.toLocaleUpperCase()
        })), n = e, t.pascalCase ? n.charAt(0).toLocaleUpperCase() + n.slice(1) : n)
    };
    e.exports = i, e.exports.default = i
}, function (e, t, n) {
    "use strict";
    (function (e) {
        n.d(t, "a", (function () {
            return c
        })), n.d(t, "c", (function () {
            return E
        }));
        var r = ("undefined" != typeof window ? window : void 0 !== e ? e : {}).__VUE_DEVTOOLS_GLOBAL_HOOK__;

        function o(e, t) {
            Object.keys(e).forEach((function (n) {
                return t(e[n], n)
            }))
        }

        function i(e) {
            return null !== e && "object" == typeof e
        }

        var u = function (e, t) {
            this.runtime = t, this._children = Object.create(null), this._rawModule = e;
            var n = e.state;
            this.state = ("function" == typeof n ? n() : n) || {}
        }, a = {namespaced: {configurable: !0}};
        a.namespaced.get = function () {
            return !!this._rawModule.namespaced
        }, u.prototype.addChild = function (e, t) {
            this._children[e] = t
        }, u.prototype.removeChild = function (e) {
            delete this._children[e]
        }, u.prototype.getChild = function (e) {
            return this._children[e]
        }, u.prototype.hasChild = function (e) {
            return e in this._children
        }, u.prototype.update = function (e) {
            this._rawModule.namespaced = e.namespaced, e.actions && (this._rawModule.actions = e.actions), e.mutations && (this._rawModule.mutations = e.mutations), e.getters && (this._rawModule.getters = e.getters)
        }, u.prototype.forEachChild = function (e) {
            o(this._children, e)
        }, u.prototype.forEachGetter = function (e) {
            this._rawModule.getters && o(this._rawModule.getters, e)
        }, u.prototype.forEachAction = function (e) {
            this._rawModule.actions && o(this._rawModule.actions, e)
        }, u.prototype.forEachMutation = function (e) {
            this._rawModule.mutations && o(this._rawModule.mutations, e)
        }, Object.defineProperties(u.prototype, a);
        var s = function (e) {
            this.register([], e, !1)
        };
        s.prototype.get = function (e) {
            return e.reduce((function (e, t) {
                return e.getChild(t)
            }), this.root)
        }, s.prototype.getNamespace = function (e) {
            var t = this.root;
            return e.reduce((function (e, n) {
                return e + ((t = t.getChild(n)).namespaced ? n + "/" : "")
            }), "")
        }, s.prototype.update = function (e) {
            !function e(t, n, r) {
                0;
                if (n.update(r), r.modules) for (var o in r.modules) {
                    if (!n.getChild(o)) return void 0;
                    e(t.concat(o), n.getChild(o), r.modules[o])
                }
            }([], this.root, e)
        }, s.prototype.register = function (e, t, n) {
            var r = this;
            void 0 === n && (n = !0);
            var i = new u(t, n);
            0 === e.length ? this.root = i : this.get(e.slice(0, -1)).addChild(e[e.length - 1], i);
            t.modules && o(t.modules, (function (t, o) {
                r.register(e.concat(o), t, n)
            }))
        }, s.prototype.unregister = function (e) {
            var t = this.get(e.slice(0, -1)), n = e[e.length - 1];
            t.getChild(n).runtime && t.removeChild(n)
        }, s.prototype.isRegistered = function (e) {
            var t = this.get(e.slice(0, -1)), n = e[e.length - 1];
            return t.hasChild(n)
        };
        var l;
        var c = function (e) {
            var t = this;
            void 0 === e && (e = {}), !l && "undefined" != typeof window && window.Vue && v(window.Vue);
            var n = e.plugins;
            void 0 === n && (n = []);
            var o = e.strict;
            void 0 === o && (o = !1), this._committing = !1, this._actions = Object.create(null), this._actionSubscribers = [], this._mutations = Object.create(null), this._wrappedGetters = Object.create(null), this._modules = new s(e), this._modulesNamespaceMap = Object.create(null), this._subscribers = [], this._watcherVM = new l, this._makeLocalGettersCache = Object.create(null);
            var i = this, u = this.dispatch, a = this.commit;
            this.dispatch = function (e, t) {
                return u.call(i, e, t)
            }, this.commit = function (e, t, n) {
                return a.call(i, e, t, n)
            }, this.strict = o;
            var c = this._modules.root.state;
            m(this, c, [], this._modules.root), d(this, c), n.forEach((function (e) {
                return e(t)
            })), (void 0 !== e.devtools ? e.devtools : l.config.devtools) && function (e) {
                r && (e._devtoolHook = r, r.emit("vuex:init", e), r.on("vuex:travel-to-state", (function (t) {
                    e.replaceState(t)
                })), e.subscribe((function (e, t) {
                    r.emit("vuex:mutation", e, t)
                }), {prepend: !0}), e.subscribeAction((function (e, t) {
                    r.emit("vuex:action", e, t)
                }), {prepend: !0}))
            }(this)
        }, A = {state: {configurable: !0}};

        function p(e, t, n) {
            return t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)), function () {
                var n = t.indexOf(e);
                n > -1 && t.splice(n, 1)
            }
        }

        function f(e, t) {
            e._actions = Object.create(null), e._mutations = Object.create(null), e._wrappedGetters = Object.create(null), e._modulesNamespaceMap = Object.create(null);
            var n = e.state;
            m(e, n, [], e._modules.root, !0), d(e, n, t)
        }

        function d(e, t, n) {
            var r = e._vm;
            e.getters = {}, e._makeLocalGettersCache = Object.create(null);
            var i = e._wrappedGetters, u = {};
            o(i, (function (t, n) {
                u[n] = function (e, t) {
                    return function () {
                        return e(t)
                    }
                }(t, e), Object.defineProperty(e.getters, n, {
                    get: function () {
                        return e._vm[n]
                    }, enumerable: !0
                })
            }));
            var a = l.config.silent;
            l.config.silent = !0, e._vm = new l({
                data: {$$state: t},
                computed: u
            }), l.config.silent = a, e.strict && function (e) {
                e._vm.$watch((function () {
                    return this._data.$$state
                }), (function () {
                    0
                }), {deep: !0, sync: !0})
            }(e), r && (n && e._withCommit((function () {
                r._data.$$state = null
            })), l.nextTick((function () {
                return r.$destroy()
            })))
        }

        function m(e, t, n, r, o) {
            var i = !n.length, u = e._modules.getNamespace(n);
            if (r.namespaced && (e._modulesNamespaceMap[u], e._modulesNamespaceMap[u] = r), !i && !o) {
                var a = h(t, n.slice(0, -1)), s = n[n.length - 1];
                e._withCommit((function () {
                    l.set(a, s, r.state)
                }))
            }
            var c = r.context = function (e, t, n) {
                var r = "" === t, o = {
                    dispatch: r ? e.dispatch : function (n, r, o) {
                        var i = g(n, r, o), u = i.payload, a = i.options, s = i.type;
                        return a && a.root || (s = t + s), e.dispatch(s, u)
                    }, commit: r ? e.commit : function (n, r, o) {
                        var i = g(n, r, o), u = i.payload, a = i.options, s = i.type;
                        a && a.root || (s = t + s), e.commit(s, u, a)
                    }
                };
                return Object.defineProperties(o, {
                    getters: {
                        get: r ? function () {
                            return e.getters
                        } : function () {
                            return function (e, t) {
                                if (!e._makeLocalGettersCache[t]) {
                                    var n = {}, r = t.length;
                                    Object.keys(e.getters).forEach((function (o) {
                                        if (o.slice(0, r) === t) {
                                            var i = o.slice(r);
                                            Object.defineProperty(n, i, {
                                                get: function () {
                                                    return e.getters[o]
                                                }, enumerable: !0
                                            })
                                        }
                                    })), e._makeLocalGettersCache[t] = n
                                }
                                return e._makeLocalGettersCache[t]
                            }(e, t)
                        }
                    }, state: {
                        get: function () {
                            return h(e.state, n)
                        }
                    }
                }), o
            }(e, u, n);
            r.forEachMutation((function (t, n) {
                !function (e, t, n, r) {
                    (e._mutations[t] || (e._mutations[t] = [])).push((function (t) {
                        n.call(e, r.state, t)
                    }))
                }(e, u + n, t, c)
            })), r.forEachAction((function (t, n) {
                var r = t.root ? n : u + n, o = t.handler || t;
                !function (e, t, n, r) {
                    (e._actions[t] || (e._actions[t] = [])).push((function (t) {
                        var o, i = n.call(e, {
                            dispatch: r.dispatch,
                            commit: r.commit,
                            getters: r.getters,
                            state: r.state,
                            rootGetters: e.getters,
                            rootState: e.state
                        }, t);
                        return (o = i) && "function" == typeof o.then || (i = Promise.resolve(i)), e._devtoolHook ? i.catch((function (t) {
                            throw e._devtoolHook.emit("vuex:error", t), t
                        })) : i
                    }))
                }(e, r, o, c)
            })), r.forEachGetter((function (t, n) {
                !function (e, t, n, r) {
                    if (e._wrappedGetters[t]) return void 0;
                    e._wrappedGetters[t] = function (e) {
                        return n(r.state, r.getters, e.state, e.getters)
                    }
                }(e, u + n, t, c)
            })), r.forEachChild((function (r, i) {
                m(e, t, n.concat(i), r, o)
            }))
        }

        function h(e, t) {
            return t.reduce((function (e, t) {
                return e[t]
            }), e)
        }

        function g(e, t, n) {
            return i(e) && e.type && (n = t, t = e, e = e.type), {type: e, payload: t, options: n}
        }

        function v(e) {
            l && e === l ||
            /**
             * vuex v3.3.0
             * (c) 2020 Evan You
             * @license MIT
             */
            function (e) {
                if (Number(e.version.split(".")[0]) >= 2) e.mixin({beforeCreate: n}); else {
                    var t = e.prototype._init;
                    e.prototype._init = function (e) {
                        void 0 === e && (e = {}), e.init = e.init ? [n].concat(e.init) : n, t.call(this, e)
                    }
                }

                function n() {
                    var e = this.$options;
                    e.store ? this.$store = "function" == typeof e.store ? e.store() : e.store : e.parent && e.parent.$store && (this.$store = e.parent.$store)
                }
            }(l = e)
        }

        A.state.get = function () {
            return this._vm._data.$$state
        }, A.state.set = function (e) {
            0
        }, c.prototype.commit = function (e, t, n) {
            var r = this, o = g(e, t, n), i = o.type, u = o.payload, a = (o.options, {type: i, payload: u}),
                s = this._mutations[i];
            s && (this._withCommit((function () {
                s.forEach((function (e) {
                    e(u)
                }))
            })), this._subscribers.slice().forEach((function (e) {
                return e(a, r.state)
            })))
        }, c.prototype.dispatch = function (e, t) {
            var n = this, r = g(e, t), o = r.type, i = r.payload, u = {type: o, payload: i}, a = this._actions[o];
            if (a) {
                try {
                    this._actionSubscribers.slice().filter((function (e) {
                        return e.before
                    })).forEach((function (e) {
                        return e.before(u, n.state)
                    }))
                } catch (e) {
                    0
                }
                return (a.length > 1 ? Promise.all(a.map((function (e) {
                    return e(i)
                }))) : a[0](i)).then((function (e) {
                    try {
                        n._actionSubscribers.filter((function (e) {
                            return e.after
                        })).forEach((function (e) {
                            return e.after(u, n.state)
                        }))
                    } catch (e) {
                        0
                    }
                    return e
                }))
            }
        }, c.prototype.subscribe = function (e, t) {
            return p(e, this._subscribers, t)
        }, c.prototype.subscribeAction = function (e, t) {
            return p("function" == typeof e ? {before: e} : e, this._actionSubscribers, t)
        }, c.prototype.watch = function (e, t, n) {
            var r = this;
            return this._watcherVM.$watch((function () {
                return e(r.state, r.getters)
            }), t, n)
        }, c.prototype.replaceState = function (e) {
            var t = this;
            this._withCommit((function () {
                t._vm._data.$$state = e
            }))
        }, c.prototype.registerModule = function (e, t, n) {
            void 0 === n && (n = {}), "string" == typeof e && (e = [e]), this._modules.register(e, t), m(this, this.state, e, this._modules.get(e), n.preserveState), d(this, this.state)
        }, c.prototype.unregisterModule = function (e) {
            var t = this;
            "string" == typeof e && (e = [e]), this._modules.unregister(e), this._withCommit((function () {
                var n = h(t.state, e.slice(0, -1));
                l.delete(n, e[e.length - 1])
            })), f(this)
        }, c.prototype.hasModule = function (e) {
            return "string" == typeof e && (e = [e]), this._modules.isRegistered(e)
        }, c.prototype.hotUpdate = function (e) {
            this._modules.update(e), f(this, !0)
        }, c.prototype._withCommit = function (e) {
            var t = this._committing;
            this._committing = !0, e(), this._committing = t
        }, Object.defineProperties(c.prototype, A);
        var D = x((function (e, t) {
            var n = {};
            return b(t).forEach((function (t) {
                var r = t.key, o = t.val;
                n[r] = function () {
                    var t = this.$store.state, n = this.$store.getters;
                    if (e) {
                        var r = w(this.$store, "mapState", e);
                        if (!r) return;
                        t = r.context.state, n = r.context.getters
                    }
                    return "function" == typeof o ? o.call(this, t, n) : t[o]
                }, n[r].vuex = !0
            })), n
        })), y = x((function (e, t) {
            var n = {};
            return b(t).forEach((function (t) {
                var r = t.key, o = t.val;
                n[r] = function () {
                    for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
                    var r = this.$store.commit;
                    if (e) {
                        var i = w(this.$store, "mapMutations", e);
                        if (!i) return;
                        r = i.context.commit
                    }
                    return "function" == typeof o ? o.apply(this, [r].concat(t)) : r.apply(this.$store, [o].concat(t))
                }
            })), n
        })), E = x((function (e, t) {
            var n = {};
            return b(t).forEach((function (t) {
                var r = t.key, o = t.val;
                o = e + o, n[r] = function () {
                    if (!e || w(this.$store, "mapGetters", e)) return this.$store.getters[o]
                }, n[r].vuex = !0
            })), n
        })), C = x((function (e, t) {
            var n = {};
            return b(t).forEach((function (t) {
                var r = t.key, o = t.val;
                n[r] = function () {
                    for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
                    var r = this.$store.dispatch;
                    if (e) {
                        var i = w(this.$store, "mapActions", e);
                        if (!i) return;
                        r = i.context.dispatch
                    }
                    return "function" == typeof o ? o.apply(this, [r].concat(t)) : r.apply(this.$store, [o].concat(t))
                }
            })), n
        }));

        function b(e) {
            return function (e) {
                return Array.isArray(e) || i(e)
            }(e) ? Array.isArray(e) ? e.map((function (e) {
                return {key: e, val: e}
            })) : Object.keys(e).map((function (t) {
                return {key: t, val: e[t]}
            })) : []
        }

        function x(e) {
            return function (t, n) {
                return "string" != typeof t ? (n = t, t = "") : "/" !== t.charAt(t.length - 1) && (t += "/"), e(t, n)
            }
        }

        function w(e, t, n) {
            return e._modulesNamespaceMap[n]
        }

        var T = {
            Store: c,
            install: v,
            version: "3.3.0",
            mapState: D,
            mapMutations: y,
            mapGetters: E,
            mapActions: C,
            createNamespacedHelpers: function (e) {
                return {
                    mapState: D.bind(null, e),
                    mapGetters: E.bind(null, e),
                    mapMutations: y.bind(null, e),
                    mapActions: C.bind(null, e)
                }
            }
        };
        t.b = T
    }).call(this, n(10))
}, function (e, t, n) {
    var r = n(71), o = n(14), i = n(213);
    r || o(Object.prototype, "toString", i, {unsafe: !0})
}, function (e, t, n) {
    "use strict";
    var r = n(4), o = n(1), i = n(117), u = n(9), a = n(17), s = n(16), l = n(68), c = n(67), A = n(41), p = n(2),
        f = n(120), d = p("isConcatSpreadable"), m = f >= 51 || !o((function () {
            var e = [];
            return e[d] = !1, e.concat()[0] !== e
        })), h = A("concat"), g = function (e) {
            if (!u(e)) return !1;
            var t = e[d];
            return void 0 !== t ? !!t : i(e)
        };
    r({target: "Array", proto: !0, forced: !m || !h}, {
        concat: function (e) {
            var t, n, r, o, i, u = a(this), A = c(u, 0), p = 0;
            for (t = -1, r = arguments.length; t < r; t++) if (i = -1 === t ? u : arguments[t], g(i)) {
                if (p + (o = s(i.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                for (n = 0; n < o; n++, p++) n in i && l(A, p, i[n])
            } else {
                if (p >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                l(A, p++, i)
            }
            return A.length = p, A
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(72).charAt, o = n(20), i = n(69), u = o.set, a = o.getterFor("String Iterator");
    i(String, "String", (function (e) {
        u(this, {type: "String Iterator", string: String(e), index: 0})
    }), (function () {
        var e, t = a(this), n = t.string, o = t.index;
        return o >= n.length ? {value: void 0, done: !0} : (e = r(n, o), t.index += e.length, {value: e, done: !1})
    }))
}, function (e, t, n) {
    "use strict";
    var r = n(4), o = n(73);
    r({target: "RegExp", proto: !0, forced: /./.exec !== o}, {exec: o})
}, function (e, t, n) {
    var r = n(11), o = n(82).f, i = n(22), u = n(35), a = n(56), s = n(166), l = n(172);
    e.exports = function (e, t) {
        var n, c, A, p, f, d = e.target, m = e.global, h = e.stat;
        if (n = m ? r : h ? r[d] || a(d, {}) : (r[d] || {}).prototype) for (c in t) {
            if (p = t[c], A = e.noTargetGet ? (f = o(n, c)) && f.value : n[c], !l(m ? c : d + (h ? "." : "#") + c, e.forced) && void 0 !== A) {
                if (typeof p == typeof A) continue;
                s(p, A)
            }
            (e.sham || A && A.sham) && i(p, "sham", !0), u(n, c, p, e)
        }
    }
}, function (e, t, n) {
    var r = n(85), o = n(33);
    e.exports = function (e) {
        return r(o(e))
    }
}, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}, function (e, t, n) {
    var r = n(11), o = n(22);
    e.exports = function (e, t) {
        try {
            o(r, e, t)
        } catch (n) {
            r[e] = t
        }
        return t
    }
}, function (e, t, n) {
    var r = {};
    r[n(58)("toStringTag")] = "z", e.exports = "[object z]" === String(r)
}, function (e, t, n) {
    var r = n(11), o = n(91), i = n(15), u = n(92), a = n(100), s = n(179), l = o("wks"), c = r.Symbol,
        A = s ? c : c && c.withoutSetter || u;
    e.exports = function (e) {
        return i(l, e) || (a && i(c, e) ? l[e] = c[e] : l[e] = A("Symbol." + e)), l[e]
    }
}, function (e, t, n) {
    "use strict";
    var r, o, i = n(102), u = n(182), a = RegExp.prototype.exec, s = String.prototype.replace, l = a,
        c = (r = /a/, o = /b*/g, a.call(r, "a"), a.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
        A = u.UNSUPPORTED_Y || u.BROKEN_CARET, p = void 0 !== /()??/.exec("")[1];
    (c || p || A) && (l = function (e) {
        var t, n, r, o, u = this, l = A && u.sticky, f = i.call(u), d = u.source, m = 0, h = e;
        return l && (-1 === (f = f.replace("y", "")).indexOf("g") && (f += "g"), h = String(e).slice(u.lastIndex), u.lastIndex > 0 && (!u.multiline || u.multiline && "\n" !== e[u.lastIndex - 1]) && (d = "(?: " + d + ")", h = " " + h, m++), n = new RegExp("^(?:" + d + ")", f)), p && (n = new RegExp("^" + d + "$(?!\\s)", f)), c && (t = u.lastIndex), r = a.call(l ? n : u, h), l ? r ? (r.input = r.input.slice(m), r[0] = r[0].slice(m), r.index = u.lastIndex, u.lastIndex += r[0].length) : u.lastIndex = 0 : c && r && (u.lastIndex = u.global ? r.index + r[0].length : t), p && r && r.length > 1 && s.call(r[0], n, (function () {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
        })), r
    }), e.exports = l
}, function (e, t, n) {
    var r = n(1), o = n(38), i = "".split;
    e.exports = r((function () {
        return !Object("z").propertyIsEnumerable(0)
    })) ? function (e) {
        return "String" == o(e) ? i.call(e, "") : Object(e)
    } : Object
}, function (e, t, n) {
    var r = n(9);
    e.exports = function (e, t) {
        if (!r(e)) return e;
        var n, o;
        if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
        if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e))) return o;
        if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t, n) {
    var r = n(3), o = n(13);
    e.exports = function (e, t) {
        try {
            o(r, e, t)
        } catch (n) {
            r[e] = t
        }
        return t
    }
}, function (e, t, n) {
    var r = n(110), o = n(64), i = r("keys");
    e.exports = function (e) {
        return i[e] || (i[e] = o(e))
    }
}, function (e, t) {
    var n = 0, r = Math.random();
    e.exports = function (e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36)
    }
}, function (e, t) {
    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function (e, t, n) {
    var r = n(28), o = n(60), i = n(17), u = n(16), a = n(67), s = [].push, l = function (e) {
        var t = 1 == e, n = 2 == e, l = 3 == e, c = 4 == e, A = 6 == e, p = 5 == e || A;
        return function (f, d, m, h) {
            for (var g, v, D = i(f), y = o(D), E = r(d, m, 3), C = u(y.length), b = 0, x = h || a, w = t ? x(f, C) : n ? x(f, 0) : void 0; C > b; b++) if ((p || b in y) && (v = E(g = y[b], b, D), e)) if (t) w[b] = v; else if (v) switch (e) {
                case 3:
                    return !0;
                case 5:
                    return g;
                case 6:
                    return b;
                case 2:
                    s.call(w, g)
            } else if (c) return !1;
            return A ? -1 : l || c ? c : w
        }
    };
    e.exports = {forEach: l(0), map: l(1), filter: l(2), some: l(3), every: l(4), find: l(5), findIndex: l(6)}
}, function (e, t, n) {
    var r = n(9), o = n(117), i = n(2)("species");
    e.exports = function (e, t) {
        var n;
        return o(e) && ("function" != typeof (n = e.constructor) || n !== Array && !o(n.prototype) ? r(n) && null === (n = n[i]) && (n = void 0) : n = void 0), new (void 0 === n ? Array : n)(0 === t ? 0 : t)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(61), o = n(12), i = n(24);
    e.exports = function (e, t, n) {
        var u = r(t);
        u in e ? o.f(e, u, i(0, n)) : e[u] = n
    }
}, function (e, t, n) {
    "use strict";
    var r = n(4), o = n(123), i = n(125), u = n(126), a = n(31), s = n(13), l = n(14), c = n(2), A = n(39), p = n(30),
        f = n(124), d = f.IteratorPrototype, m = f.BUGGY_SAFARI_ITERATORS, h = c("iterator"), g = function () {
            return this
        };
    e.exports = function (e, t, n, c, f, v, D) {
        o(n, t, c);
        var y, E, C, b = function (e) {
                if (e === f && F) return F;
                if (!m && e in T) return T[e];
                switch (e) {
                    case"keys":
                    case"values":
                    case"entries":
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this)
                }
            }, x = t + " Iterator", w = !1, T = e.prototype, B = T[h] || T["@@iterator"] || f && T[f], F = !m && B || b(f),
            M = "Array" == t && T.entries || B;
        if (M && (y = i(M.call(new e)), d !== Object.prototype && y.next && (A || i(y) === d || (u ? u(y, d) : "function" != typeof y[h] && s(y, h, g)), a(y, x, !0, !0), A && (p[x] = g))), "values" == f && B && "values" !== B.name && (w = !0, F = function () {
            return B.call(this)
        }), A && !D || T[h] === F || s(T, h, F), p[t] = F, f) if (E = {
            values: b("values"),
            keys: v ? F : b("keys"),
            entries: b("entries")
        }, D) for (C in E) (m || w || !(C in T)) && l(T, C, E[C]); else r({target: t, proto: !0, forced: m || w}, E);
        return E
    }
}, function (e, t, n) {
    var r = n(71), o = n(38), i = n(2)("toStringTag"), u = "Arguments" == o(function () {
        return arguments
    }());
    e.exports = r ? o : function (e) {
        var t, n, r;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
            try {
                return e[t]
            } catch (e) {
            }
        }(t = Object(e), i)) ? n : u ? o(t) : "Object" == (r = o(t)) && "function" == typeof t.callee ? "Arguments" : r
    }
}, function (e, t, n) {
    var r = {};
    r[n(2)("toStringTag")] = "z", e.exports = "[object z]" === String(r)
}, function (e, t, n) {
    var r = n(27), o = n(25), i = function (e) {
        return function (t, n) {
            var i, u, a = String(o(t)), s = r(n), l = a.length;
            return s < 0 || s >= l ? e ? "" : void 0 : (i = a.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === l || (u = a.charCodeAt(s + 1)) < 56320 || u > 57343 ? e ? a.charAt(s) : i : e ? a.slice(s, s + 2) : u - 56320 + (i - 55296 << 10) + 65536
        }
    };
    e.exports = {codeAt: i(!1), charAt: i(!0)}
}, function (e, t, n) {
    "use strict";
    var r, o, i = n(133), u = n(217), a = RegExp.prototype.exec, s = String.prototype.replace, l = a,
        c = (r = /a/, o = /b*/g, a.call(r, "a"), a.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
        A = u.UNSUPPORTED_Y || u.BROKEN_CARET, p = void 0 !== /()??/.exec("")[1];
    (c || p || A) && (l = function (e) {
        var t, n, r, o, u = this, l = A && u.sticky, f = i.call(u), d = u.source, m = 0, h = e;
        return l && (-1 === (f = f.replace("y", "")).indexOf("g") && (f += "g"), h = String(e).slice(u.lastIndex), u.lastIndex > 0 && (!u.multiline || u.multiline && "\n" !== e[u.lastIndex - 1]) && (d = "(?: " + d + ")", h = " " + h, m++), n = new RegExp("^(?:" + d + ")", f)), p && (n = new RegExp("^" + d + "$(?!\\s)", f)), c && (t = u.lastIndex), r = a.call(l ? n : u, h), l ? r ? (r.input = r.input.slice(m), r[0] = r[0].slice(m), r.index = u.lastIndex, u.lastIndex += r[0].length) : u.lastIndex = 0 : c && r && (u.lastIndex = u.global ? r.index + r[0].length : t), p && r && r.length > 1 && s.call(r[0], n, (function () {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
        })), r
    }), e.exports = l
}, function (e, t, n) {
    "use strict";
    (function (e) {
        /**!
         * @fileOverview Kickass library to create and place poppers near their reference elements.
         * @version 1.16.1
         * @license
         * Copyright (c) 2016 Federico Zivolo and contributors
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in all
         * copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
         * SOFTWARE.
         */
        var n = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
            r = function () {
                for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1) if (n && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
                return 0
            }();
        var o = n && window.Promise ? function (e) {
            var t = !1;
            return function () {
                t || (t = !0, window.Promise.resolve().then((function () {
                    t = !1, e()
                })))
            }
        } : function (e) {
            var t = !1;
            return function () {
                t || (t = !0, setTimeout((function () {
                    t = !1, e()
                }), r))
            }
        };

        function i(e) {
            return e && "[object Function]" === {}.toString.call(e)
        }

        function u(e, t) {
            if (1 !== e.nodeType) return [];
            var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
            return t ? n[t] : n
        }

        function a(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host
        }

        function s(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
                case"HTML":
                case"BODY":
                    return e.ownerDocument.body;
                case"#document":
                    return e.body
            }
            var t = u(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
            return /(auto|scroll|overlay)/.test(n + o + r) ? e : s(a(e))
        }

        function l(e) {
            return e && e.referenceNode ? e.referenceNode : e
        }

        var c = n && !(!window.MSInputMethodContext || !document.documentMode),
            A = n && /MSIE 10/.test(navigator.userAgent);

        function p(e) {
            return 11 === e ? c : 10 === e ? A : c || A
        }

        function f(e) {
            if (!e) return document.documentElement;
            for (var t = p(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
            var r = n && n.nodeName;
            return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === u(n, "position") ? f(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
        }

        function d(e) {
            return null !== e.parentNode ? d(e.parentNode) : e
        }

        function m(e, t) {
            if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, r = n ? e : t, o = n ? t : e,
                i = document.createRange();
            i.setStart(r, 0), i.setEnd(o, 0);
            var u, a, s = i.commonAncestorContainer;
            if (e !== s && t !== s || r.contains(o)) return "BODY" === (a = (u = s).nodeName) || "HTML" !== a && f(u.firstElementChild) !== u ? f(s) : s;
            var l = d(e);
            return l.host ? m(l.host, t) : m(e, d(t).host)
        }

        function h(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                n = "top" === t ? "scrollTop" : "scrollLeft", r = e.nodeName;
            if ("BODY" === r || "HTML" === r) {
                var o = e.ownerDocument.documentElement, i = e.ownerDocument.scrollingElement || o;
                return i[n]
            }
            return e[n]
        }

        function g(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = h(t, "top"), o = h(t, "left"),
                i = n ? -1 : 1;
            return e.top += r * i, e.bottom += r * i, e.left += o * i, e.right += o * i, e
        }

        function v(e, t) {
            var n = "x" === t ? "Left" : "Top", r = "Left" === n ? "Right" : "Bottom";
            return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + r + "Width"])
        }

        function D(e, t, n, r) {
            return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], p(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
        }

        function y(e) {
            var t = e.body, n = e.documentElement, r = p(10) && getComputedStyle(n);
            return {height: D("Height", t, n, r), width: D("Width", t, n, r)}
        }

        var E = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, C = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), b = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }, x = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };

        function w(e) {
            return x({}, e, {right: e.left + e.width, bottom: e.top + e.height})
        }

        function T(e) {
            var t = {};
            try {
                if (p(10)) {
                    t = e.getBoundingClientRect();
                    var n = h(e, "top"), r = h(e, "left");
                    t.top += n, t.left += r, t.bottom += n, t.right += r
                } else t = e.getBoundingClientRect()
            } catch (e) {
            }
            var o = {left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top},
                i = "HTML" === e.nodeName ? y(e.ownerDocument) : {}, a = i.width || e.clientWidth || o.width,
                s = i.height || e.clientHeight || o.height, l = e.offsetWidth - a, c = e.offsetHeight - s;
            if (l || c) {
                var A = u(e);
                l -= v(A, "x"), c -= v(A, "y"), o.width -= l, o.height -= c
            }
            return w(o)
        }

        function B(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = p(10),
                o = "HTML" === t.nodeName, i = T(e), a = T(t), l = s(e), c = u(t), A = parseFloat(c.borderTopWidth),
                f = parseFloat(c.borderLeftWidth);
            n && o && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
            var d = w({top: i.top - a.top - A, left: i.left - a.left - f, width: i.width, height: i.height});
            if (d.marginTop = 0, d.marginLeft = 0, !r && o) {
                var m = parseFloat(c.marginTop), h = parseFloat(c.marginLeft);
                d.top -= A - m, d.bottom -= A - m, d.left -= f - h, d.right -= f - h, d.marginTop = m, d.marginLeft = h
            }
            return (r && !n ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (d = g(d, t)), d
        }

        function F(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement, r = B(e, n), o = Math.max(n.clientWidth, window.innerWidth || 0),
                i = Math.max(n.clientHeight, window.innerHeight || 0), u = t ? 0 : h(n), a = t ? 0 : h(n, "left"),
                s = {top: u - r.top + r.marginTop, left: a - r.left + r.marginLeft, width: o, height: i};
            return w(s)
        }

        function M(e) {
            var t = e.nodeName;
            if ("BODY" === t || "HTML" === t) return !1;
            if ("fixed" === u(e, "position")) return !0;
            var n = a(e);
            return !!n && M(n)
        }

        function I(e) {
            if (!e || !e.parentElement || p()) return document.documentElement;
            for (var t = e.parentElement; t && "none" === u(t, "transform");) t = t.parentElement;
            return t || document.documentElement
        }

        function _(e, t, n, r) {
            var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], i = {top: 0, left: 0},
                u = o ? I(e) : m(e, l(t));
            if ("viewport" === r) i = F(u, o); else {
                var c = void 0;
                "scrollParent" === r ? "BODY" === (c = s(a(t))).nodeName && (c = e.ownerDocument.documentElement) : c = "window" === r ? e.ownerDocument.documentElement : r;
                var A = B(c, u, o);
                if ("HTML" !== c.nodeName || M(u)) i = A; else {
                    var p = y(e.ownerDocument), f = p.height, d = p.width;
                    i.top += A.top - A.marginTop, i.bottom = f + A.top, i.left += A.left - A.marginLeft, i.right = d + A.left
                }
            }
            var h = "number" == typeof (n = n || 0);
            return i.left += h ? n : n.left || 0, i.top += h ? n : n.top || 0, i.right -= h ? n : n.right || 0, i.bottom -= h ? n : n.bottom || 0, i
        }

        function S(e) {
            return e.width * e.height
        }

        function N(e, t, n, r, o) {
            var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto")) return e;
            var u = _(n, r, i, o), a = {
                top: {width: u.width, height: t.top - u.top},
                right: {width: u.right - t.right, height: u.height},
                bottom: {width: u.width, height: u.bottom - t.bottom},
                left: {width: t.left - u.left, height: u.height}
            }, s = Object.keys(a).map((function (e) {
                return x({key: e}, a[e], {area: S(a[e])})
            })).sort((function (e, t) {
                return t.area - e.area
            })), l = s.filter((function (e) {
                var t = e.width, r = e.height;
                return t >= n.clientWidth && r >= n.clientHeight
            })), c = l.length > 0 ? l[0].key : s[0].key, A = e.split("-")[1];
            return c + (A ? "-" + A : "")
        }

        function O(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, o = r ? I(t) : m(t, l(n));
            return B(n, o, r)
        }

        function L(e) {
            var t = e.ownerDocument.defaultView.getComputedStyle(e),
                n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
            return {width: e.offsetWidth + r, height: e.offsetHeight + n}
        }

        function k(e) {
            var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
            return e.replace(/left|right|bottom|top/g, (function (e) {
                return t[e]
            }))
        }

        function j(e, t, n) {
            n = n.split("-")[0];
            var r = L(e), o = {width: r.width, height: r.height}, i = -1 !== ["right", "left"].indexOf(n),
                u = i ? "top" : "left", a = i ? "left" : "top", s = i ? "height" : "width", l = i ? "width" : "height";
            return o[u] = t[u] + t[s] / 2 - r[s] / 2, o[a] = n === a ? t[a] - r[l] : t[k(a)], o
        }

        function R(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0]
        }

        function P(e, t, n) {
            return (void 0 === n ? e : e.slice(0, function (e, t, n) {
                if (Array.prototype.findIndex) return e.findIndex((function (e) {
                    return e[t] === n
                }));
                var r = R(e, (function (e) {
                    return e[t] === n
                }));
                return e.indexOf(r)
            }(e, "name", n))).forEach((function (e) {
                e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var n = e.function || e.fn;
                e.enabled && i(n) && (t.offsets.popper = w(t.offsets.popper), t.offsets.reference = w(t.offsets.reference), t = n(t, e))
            })), t
        }

        function U() {
            if (!this.state.isDestroyed) {
                var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
                e.offsets.reference = O(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = N(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = j(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
            }
        }

        function Q(e, t) {
            return e.some((function (e) {
                var n = e.name;
                return e.enabled && n === t
            }))
        }

        function G(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
                var o = t[r], i = o ? "" + o + n : e;
                if (void 0 !== document.body.style[i]) return i
            }
            return null
        }

        function z() {
            return this.state.isDestroyed = !0, Q(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[G("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
        }

        function Y(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window
        }

        function $(e, t, n, r) {
            n.updateBound = r, Y(e).addEventListener("resize", n.updateBound, {passive: !0});
            var o = s(e);
            return function e(t, n, r, o) {
                var i = "BODY" === t.nodeName, u = i ? t.ownerDocument.defaultView : t;
                u.addEventListener(n, r, {passive: !0}), i || e(s(u.parentNode), n, r, o), o.push(u)
            }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
        }

        function Z() {
            this.state.eventsEnabled || (this.state = $(this.reference, this.options, this.state, this.scheduleUpdate))
        }

        function H() {
            var e, t;
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, Y(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function (e) {
                e.removeEventListener("scroll", t.updateBound)
            })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
        }

        function W(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
        }

        function V(e, t) {
            Object.keys(t).forEach((function (n) {
                var r = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && W(t[n]) && (r = "px"), e.style[n] = t[n] + r
            }))
        }

        var X = n && /Firefox/i.test(navigator.userAgent);

        function J(e, t, n) {
            var r = R(e, (function (e) {
                return e.name === t
            })), o = !!r && e.some((function (e) {
                return e.name === n && e.enabled && e.order < r.order
            }));
            if (!o) {
                var i = "`" + t + "`", u = "`" + n + "`";
                console.warn(u + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")
            }
            return o
        }

        var K = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            q = K.slice(3);

        function ee(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = q.indexOf(e),
                r = q.slice(n + 1).concat(q.slice(0, n));
            return t ? r.reverse() : r
        }

        var te = "flip", ne = "clockwise", re = "counterclockwise";

        function oe(e, t, n, r) {
            var o = [0, 0], i = -1 !== ["right", "left"].indexOf(r), u = e.split(/(\+|\-)/).map((function (e) {
                return e.trim()
            })), a = u.indexOf(R(u, (function (e) {
                return -1 !== e.search(/,|\s/)
            })));
            u[a] && -1 === u[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var s = /\s*,\s*|\s+/,
                l = -1 !== a ? [u.slice(0, a).concat([u[a].split(s)[0]]), [u[a].split(s)[1]].concat(u.slice(a + 1))] : [u];
            return (l = l.map((function (e, r) {
                var o = (1 === r ? !i : i) ? "height" : "width", u = !1;
                return e.reduce((function (e, t) {
                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, u = !0, e) : u ? (e[e.length - 1] += t, u = !1, e) : e.concat(t)
                }), []).map((function (e) {
                    return function (e, t, n, r) {
                        var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), i = +o[1], u = o[2];
                        if (!i) return e;
                        if (0 === u.indexOf("%")) {
                            var a = void 0;
                            switch (u) {
                                case"%p":
                                    a = n;
                                    break;
                                case"%":
                                case"%r":
                                default:
                                    a = r
                            }
                            return w(a)[t] / 100 * i
                        }
                        if ("vh" === u || "vw" === u) {
                            return ("vh" === u ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i
                        }
                        return i
                    }(e, o, t, n)
                }))
            }))).forEach((function (e, t) {
                e.forEach((function (n, r) {
                    W(n) && (o[t] += n * ("-" === e[r - 1] ? -1 : 1))
                }))
            })), o
        }

        var ie = {
            placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
            }, onUpdate: function () {
            }, modifiers: {
                shift: {
                    order: 100, enabled: !0, fn: function (e) {
                        var t = e.placement, n = t.split("-")[0], r = t.split("-")[1];
                        if (r) {
                            var o = e.offsets, i = o.reference, u = o.popper, a = -1 !== ["bottom", "top"].indexOf(n),
                                s = a ? "left" : "top", l = a ? "width" : "height",
                                c = {start: b({}, s, i[s]), end: b({}, s, i[s] + i[l] - u[l])};
                            e.offsets.popper = x({}, u, c[r])
                        }
                        return e
                    }
                }, offset: {
                    order: 200, enabled: !0, fn: function (e, t) {
                        var n = t.offset, r = e.placement, o = e.offsets, i = o.popper, u = o.reference,
                            a = r.split("-")[0], s = void 0;
                        return s = W(+n) ? [+n, 0] : oe(n, i, u, a), "left" === a ? (i.top += s[0], i.left -= s[1]) : "right" === a ? (i.top += s[0], i.left += s[1]) : "top" === a ? (i.left += s[0], i.top -= s[1]) : "bottom" === a && (i.left += s[0], i.top += s[1]), e.popper = i, e
                    }, offset: 0
                }, preventOverflow: {
                    order: 300, enabled: !0, fn: function (e, t) {
                        var n = t.boundariesElement || f(e.instance.popper);
                        e.instance.reference === n && (n = f(n));
                        var r = G("transform"), o = e.instance.popper.style, i = o.top, u = o.left, a = o[r];
                        o.top = "", o.left = "", o[r] = "";
                        var s = _(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                        o.top = i, o.left = u, o[r] = a, t.boundaries = s;
                        var l = t.priority, c = e.offsets.popper, A = {
                            primary: function (e) {
                                var n = c[e];
                                return c[e] < s[e] && !t.escapeWithReference && (n = Math.max(c[e], s[e])), b({}, e, n)
                            }, secondary: function (e) {
                                var n = "right" === e ? "left" : "top", r = c[n];
                                return c[e] > s[e] && !t.escapeWithReference && (r = Math.min(c[n], s[e] - ("right" === e ? c.width : c.height))), b({}, n, r)
                            }
                        };
                        return l.forEach((function (e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            c = x({}, c, A[t](e))
                        })), e.offsets.popper = c, e
                    }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
                }, keepTogether: {
                    order: 400, enabled: !0, fn: function (e) {
                        var t = e.offsets, n = t.popper, r = t.reference, o = e.placement.split("-")[0], i = Math.floor,
                            u = -1 !== ["top", "bottom"].indexOf(o), a = u ? "right" : "bottom", s = u ? "left" : "top",
                            l = u ? "width" : "height";
                        return n[a] < i(r[s]) && (e.offsets.popper[s] = i(r[s]) - n[l]), n[s] > i(r[a]) && (e.offsets.popper[s] = i(r[a])), e
                    }
                }, arrow: {
                    order: 500, enabled: !0, fn: function (e, t) {
                        var n;
                        if (!J(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var r = t.element;
                        if ("string" == typeof r) {
                            if (!(r = e.instance.popper.querySelector(r))) return e
                        } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var o = e.placement.split("-")[0], i = e.offsets, a = i.popper, s = i.reference,
                            l = -1 !== ["left", "right"].indexOf(o), c = l ? "height" : "width", A = l ? "Top" : "Left",
                            p = A.toLowerCase(), f = l ? "left" : "top", d = l ? "bottom" : "right", m = L(r)[c];
                        s[d] - m < a[p] && (e.offsets.popper[p] -= a[p] - (s[d] - m)), s[p] + m > a[d] && (e.offsets.popper[p] += s[p] + m - a[d]), e.offsets.popper = w(e.offsets.popper);
                        var h = s[p] + s[c] / 2 - m / 2, g = u(e.instance.popper), v = parseFloat(g["margin" + A]),
                            D = parseFloat(g["border" + A + "Width"]), y = h - e.offsets.popper[p] - v - D;
                        return y = Math.max(Math.min(a[c] - m, y), 0), e.arrowElement = r, e.offsets.arrow = (b(n = {}, p, Math.round(y)), b(n, f, ""), n), e
                    }, element: "[x-arrow]"
                }, flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (e, t) {
                        if (Q(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var n = _(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                            r = e.placement.split("-")[0], o = k(r), i = e.placement.split("-")[1] || "", u = [];
                        switch (t.behavior) {
                            case te:
                                u = [r, o];
                                break;
                            case ne:
                                u = ee(r);
                                break;
                            case re:
                                u = ee(r, !0);
                                break;
                            default:
                                u = t.behavior
                        }
                        return u.forEach((function (a, s) {
                            if (r !== a || u.length === s + 1) return e;
                            r = e.placement.split("-")[0], o = k(r);
                            var l = e.offsets.popper, c = e.offsets.reference, A = Math.floor,
                                p = "left" === r && A(l.right) > A(c.left) || "right" === r && A(l.left) < A(c.right) || "top" === r && A(l.bottom) > A(c.top) || "bottom" === r && A(l.top) < A(c.bottom),
                                f = A(l.left) < A(n.left), d = A(l.right) > A(n.right), m = A(l.top) < A(n.top),
                                h = A(l.bottom) > A(n.bottom),
                                g = "left" === r && f || "right" === r && d || "top" === r && m || "bottom" === r && h,
                                v = -1 !== ["top", "bottom"].indexOf(r),
                                D = !!t.flipVariations && (v && "start" === i && f || v && "end" === i && d || !v && "start" === i && m || !v && "end" === i && h),
                                y = !!t.flipVariationsByContent && (v && "start" === i && d || v && "end" === i && f || !v && "start" === i && h || !v && "end" === i && m),
                                E = D || y;
                            (p || g || E) && (e.flipped = !0, (p || g) && (r = u[s + 1]), E && (i = function (e) {
                                return "end" === e ? "start" : "start" === e ? "end" : e
                            }(i)), e.placement = r + (i ? "-" + i : ""), e.offsets.popper = x({}, e.offsets.popper, j(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, "flip"))
                        })), e
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                }, inner: {
                    order: 700, enabled: !1, fn: function (e) {
                        var t = e.placement, n = t.split("-")[0], r = e.offsets, o = r.popper, i = r.reference,
                            u = -1 !== ["left", "right"].indexOf(n), a = -1 === ["top", "left"].indexOf(n);
                        return o[u ? "left" : "top"] = i[n] - (a ? o[u ? "width" : "height"] : 0), e.placement = k(t), e.offsets.popper = w(o), e
                    }
                }, hide: {
                    order: 800, enabled: !0, fn: function (e) {
                        if (!J(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference, n = R(e.instance.modifiers, (function (e) {
                            return "preventOverflow" === e.name
                        })).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                }, computeStyle: {
                    order: 850, enabled: !0, fn: function (e, t) {
                        var n = t.x, r = t.y, o = e.offsets.popper, i = R(e.instance.modifiers, (function (e) {
                            return "applyStyle" === e.name
                        })).gpuAcceleration;
                        void 0 !== i && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var u = void 0 !== i ? i : t.gpuAcceleration, a = f(e.instance.popper), s = T(a),
                            l = {position: o.position}, c = function (e, t) {
                                var n = e.offsets, r = n.popper, o = n.reference, i = Math.round, u = Math.floor,
                                    a = function (e) {
                                        return e
                                    }, s = i(o.width), l = i(r.width), c = -1 !== ["left", "right"].indexOf(e.placement),
                                    A = -1 !== e.placement.indexOf("-"), p = t ? c || A || s % 2 == l % 2 ? i : u : a,
                                    f = t ? i : a;
                                return {
                                    left: p(s % 2 == 1 && l % 2 == 1 && !A && t ? r.left - 1 : r.left),
                                    top: f(r.top),
                                    bottom: f(r.bottom),
                                    right: p(r.right)
                                }
                            }(e, window.devicePixelRatio < 2 || !X), A = "bottom" === n ? "top" : "bottom",
                            p = "right" === r ? "left" : "right", d = G("transform"), m = void 0, h = void 0;
                        if (h = "bottom" === A ? "HTML" === a.nodeName ? -a.clientHeight + c.bottom : -s.height + c.bottom : c.top, m = "right" === p ? "HTML" === a.nodeName ? -a.clientWidth + c.right : -s.width + c.right : c.left, u && d) l[d] = "translate3d(" + m + "px, " + h + "px, 0)", l[A] = 0, l[p] = 0, l.willChange = "transform"; else {
                            var g = "bottom" === A ? -1 : 1, v = "right" === p ? -1 : 1;
                            l[A] = h * g, l[p] = m * v, l.willChange = A + ", " + p
                        }
                        var D = {"x-placement": e.placement};
                        return e.attributes = x({}, D, e.attributes), e.styles = x({}, l, e.styles), e.arrowStyles = x({}, e.offsets.arrow, e.arrowStyles), e
                    }, gpuAcceleration: !0, x: "bottom", y: "right"
                }, applyStyle: {
                    order: 900, enabled: !0, fn: function (e) {
                        var t, n;
                        return V(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function (e) {
                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                        })), e.arrowElement && Object.keys(e.arrowStyles).length && V(e.arrowElement, e.arrowStyles), e
                    }, onLoad: function (e, t, n, r, o) {
                        var i = O(o, t, e, n.positionFixed),
                            u = N(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", u), V(t, {position: n.positionFixed ? "fixed" : "absolute"}), n
                    }, gpuAcceleration: void 0
                }
            }
        }, ue = function () {
            function e(t, n) {
                var r = this, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                E(this, e), this.scheduleUpdate = function () {
                    return requestAnimationFrame(r.update)
                }, this.update = o(this.update.bind(this)), this.options = x({}, e.Defaults, u), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(x({}, e.Defaults.modifiers, u.modifiers)).forEach((function (t) {
                    r.options.modifiers[t] = x({}, e.Defaults.modifiers[t] || {}, u.modifiers ? u.modifiers[t] : {})
                })), this.modifiers = Object.keys(this.options.modifiers).map((function (e) {
                    return x({name: e}, r.options.modifiers[e])
                })).sort((function (e, t) {
                    return e.order - t.order
                })), this.modifiers.forEach((function (e) {
                    e.enabled && i(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
                })), this.update();
                var a = this.options.eventsEnabled;
                a && this.enableEventListeners(), this.state.eventsEnabled = a
            }

            return C(e, [{
                key: "update", value: function () {
                    return U.call(this)
                }
            }, {
                key: "destroy", value: function () {
                    return z.call(this)
                }
            }, {
                key: "enableEventListeners", value: function () {
                    return Z.call(this)
                }
            }, {
                key: "disableEventListeners", value: function () {
                    return H.call(this)
                }
            }]), e
        }();
        ue.Utils = ("undefined" != typeof window ? window : e).PopperUtils, ue.placements = K, ue.Defaults = ie, t.a = ue
    }).call(this, n(10))
}, function (e, t) {
    var n, r, o = e.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function u() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }

    !function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : u
        } catch (e) {
            r = u
        }
    }();
    var s, l = [], c = !1, A = -1;

    function p() {
        c && s && (c = !1, s.length ? l = s.concat(l) : A = -1, l.length && f())
    }

    function f() {
        if (!c) {
            var e = a(p);
            c = !0;
            for (var t = l.length; t;) {
                for (s = l, l = []; ++A < t;) s && s[A].run();
                A = -1, t = l.length
            }
            s = null, c = !1, function (e) {
                if (r === clearTimeout) return clearTimeout(e);
                if ((r === u || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                try {
                    r(e)
                } catch (t) {
                    try {
                        return r.call(null, e)
                    } catch (t) {
                        return r.call(this, e)
                    }
                }
            }(e)
        }
    }

    function d(e, t) {
        this.fun = e, this.array = t
    }

    function m() {
    }

    o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new d(e, t)), 1 !== l.length || c || a(f)
    }, d.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function (e) {
        return []
    }, o.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function () {
        return "/"
    }, o.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function () {
        return 0
    }
}, function (e, t, n) {
    "use strict";

    function r(e, t, n, r, o, i, u, a) {
        var s, l = "function" == typeof e ? e.options : e;
        if (t && (l.render = t, l.staticRenderFns = n, l._compiled = !0), r && (l.functional = !0), i && (l._scopeId = "data-v-" + i), u ? (s = function (e) {
            (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(u)
        }, l._ssrRegister = s) : o && (s = a ? function () {
            o.call(this, this.$root.$options.shadowRoot)
        } : o), s) if (l.functional) {
            l._injectStyles = s;
            var c = l.render;
            l.render = function (e, t) {
                return s.call(t), c(e, t)
            }
        } else {
            var A = l.beforeCreate;
            l.beforeCreate = A ? [].concat(A, s) : [s]
        }
        return {exports: e, options: l}
    }

    n.d(t, "a", (function () {
        return r
    }))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "getRequestToken", {
        enumerable: !0,
        get: function () {
            return r.getRequestToken
        }
    }), Object.defineProperty(t, "onRequestTokenUpdate", {
        enumerable: !0, get: function () {
            return r.onRequestTokenUpdate
        }
    }), Object.defineProperty(t, "getCurrentUser", {
        enumerable: !0, get: function () {
            return o.getCurrentUser
        }
    });
    var r = n(189), o = n(215)
}, function (e, t, n) {
    "use strict";
    var r = n(4), o = n(66).filter, i = n(41), u = n(29), a = i("filter"), s = u("filter");
    r({target: "Array", proto: !0, forced: !a || !s}, {
        filter: function (e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t, n) {
    var r = n(3), o = n(132), i = n(32), u = n(13), a = n(2), s = a("iterator"), l = a("toStringTag"), c = i.values;
    for (var A in o) {
        var p = r[A], f = p && p.prototype;
        if (f) {
            if (f[s] !== c) try {
                u(f, s, c)
            } catch (e) {
                f[s] = c
            }
            if (f[l] || u(f, l, A), o[A]) for (var d in i) if (f[d] !== i[d]) try {
                u(f, d, i[d])
            } catch (e) {
                f[d] = i[d]
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(14), o = n(6), i = n(1), u = n(133), a = RegExp.prototype, s = a.toString, l = i((function () {
        return "/a/b" != s.call({source: "a", flags: "b"})
    })), c = "toString" != s.name;
    (l || c) && r(RegExp.prototype, "toString", (function () {
        var e = o(this), t = String(e.source), n = e.flags;
        return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in a) ? u.call(e) : n)
    }), {unsafe: !0})
}, function (e, t, n) {
    "use strict";
    var r = n(222), o = n(6), i = n(17), u = n(16), a = n(27), s = n(25), l = n(223), c = n(224), A = Math.max,
        p = Math.min, f = Math.floor, d = /\$([$&'`]|\d\d?|<[^>]*>)/g, m = /\$([$&'`]|\d\d?)/g;
    r("replace", 2, (function (e, t, n, r) {
        var h = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, g = r.REPLACE_KEEPS_$0, v = h ? "$" : "$0";
        return [function (n, r) {
            var o = s(this), i = null == n ? void 0 : n[e];
            return void 0 !== i ? i.call(n, o, r) : t.call(String(o), n, r)
        }, function (e, r) {
            if (!h && g || "string" == typeof r && -1 === r.indexOf(v)) {
                var i = n(t, e, this, r);
                if (i.done) return i.value
            }
            var s = o(e), f = String(this), d = "function" == typeof r;
            d || (r = String(r));
            var m = s.global;
            if (m) {
                var y = s.unicode;
                s.lastIndex = 0
            }
            for (var E = []; ;) {
                var C = c(s, f);
                if (null === C) break;
                if (E.push(C), !m) break;
                "" === String(C[0]) && (s.lastIndex = l(f, u(s.lastIndex), y))
            }
            for (var b, x = "", w = 0, T = 0; T < E.length; T++) {
                C = E[T];
                for (var B = String(C[0]), F = A(p(a(C.index), f.length), 0), M = [], I = 1; I < C.length; I++) M.push(void 0 === (b = C[I]) ? b : String(b));
                var _ = C.groups;
                if (d) {
                    var S = [B].concat(M, F, f);
                    void 0 !== _ && S.push(_);
                    var N = String(r.apply(void 0, S))
                } else N = D(B, f, F, M, _, r);
                F >= w && (x += f.slice(w, F) + N, w = F + B.length)
            }
            return x + f.slice(w)
        }];

        function D(e, n, r, o, u, a) {
            var s = r + e.length, l = o.length, c = m;
            return void 0 !== u && (u = i(u), c = d), t.call(a, c, (function (t, i) {
                var a;
                switch (i.charAt(0)) {
                    case"$":
                        return "$";
                    case"&":
                        return e;
                    case"`":
                        return n.slice(0, r);
                    case"'":
                        return n.slice(s);
                    case"<":
                        a = u[i.slice(1, -1)];
                        break;
                    default:
                        var c = +i;
                        if (0 === c) return t;
                        if (c > l) {
                            var A = f(c / 10);
                            return 0 === A ? t : A <= l ? void 0 === o[A - 1] ? i.charAt(1) : o[A - 1] + i.charAt(1) : t
                        }
                        a = o[c - 1]
                }
                return void 0 === a ? "" : a
            }))
        }
    }))
}, function (e, t, n) {
    var r = n(19), o = n(83), i = n(84), u = n(54), a = n(86), s = n(15), l = n(87),
        c = Object.getOwnPropertyDescriptor;
    t.f = r ? c : function (e, t) {
        if (e = u(e), t = a(t, !0), l) try {
            return c(e, t)
        } catch (e) {
        }
        if (s(e, t)) return i(!o.f.call(e, t), e[t])
    }
}, function (e, t, n) {
    "use strict";
    var r = {}.propertyIsEnumerable, o = Object.getOwnPropertyDescriptor, i = o && !r.call({1: 2}, 1);
    t.f = i ? function (e) {
        var t = o(this, e);
        return !!t && t.enumerable
    } : r
}, function (e, t) {
    e.exports = function (e, t) {
        return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
    }
}, function (e, t, n) {
    var r = n(7), o = n(55), i = "".split;
    e.exports = r((function () {
        return !Object("z").propertyIsEnumerable(0)
    })) ? function (e) {
        return "String" == o(e) ? i.call(e, "") : Object(e)
    } : Object
}, function (e, t, n) {
    var r = n(34);
    e.exports = function (e, t) {
        if (!r(e)) return e;
        var n, o;
        if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
        if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e))) return o;
        if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t, n) {
    var r = n(19), o = n(7), i = n(161);
    e.exports = !r && !o((function () {
        return 7 != Object.defineProperty(i("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    }))
}, function (e, t, n) {
    var r = n(19), o = n(87), i = n(23), u = n(86), a = Object.defineProperty;
    t.f = r ? a : function (e, t, n) {
        if (i(e), t = u(t, !0), i(n), o) try {
            return a(e, t, n)
        } catch (e) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (e[t] = n.value), e
    }
}, function (e, t, n) {
    var r = n(90), o = Function.toString;
    "function" != typeof r.inspectSource && (r.inspectSource = function (e) {
        return o.call(e)
    }), e.exports = r.inspectSource
}, function (e, t, n) {
    var r = n(11), o = n(56), i = r["__core-js_shared__"] || o("__core-js_shared__", {});
    e.exports = i
}, function (e, t, n) {
    var r = n(165), o = n(90);
    (e.exports = function (e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: "3.6.4",
        mode: r ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    })
}, function (e, t) {
    var n = 0, r = Math.random();
    e.exports = function (e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36)
    }
}, function (e, t) {
    e.exports = {}
}, function (e, t, n) {
    var r = n(15), o = n(54), i = n(95).indexOf, u = n(93);
    e.exports = function (e, t) {
        var n, a = o(e), s = 0, l = [];
        for (n in a) !r(u, n) && r(a, n) && l.push(n);
        for (; t.length > s;) r(a, n = t[s++]) && (~i(l, n) || l.push(n));
        return l
    }
}, function (e, t, n) {
    var r = n(54), o = n(96), i = n(171), u = function (e) {
        return function (t, n, u) {
            var a, s = r(t), l = o(s.length), c = i(u, l);
            if (e && n != n) {
                for (; l > c;) if ((a = s[c++]) != a) return !0
            } else for (; l > c; c++) if ((e || c in s) && s[c] === n) return e || c || 0;
            return !e && -1
        }
    };
    e.exports = {includes: u(!0), indexOf: u(!1)}
}, function (e, t, n) {
    var r = n(36), o = Math.min;
    e.exports = function (e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}, function (e, t) {
    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function (e, t) {
    t.f = Object.getOwnPropertySymbols
}, function (e, t, n) {
    var r = n(33);
    e.exports = function (e) {
        return Object(r(e))
    }
}, function (e, t, n) {
    var r = n(7);
    e.exports = !!Object.getOwnPropertySymbols && !r((function () {
        return !String(Symbol())
    }))
}, function (e, t, n) {
    "use strict";
    var r = n(53), o = n(59);
    r({target: "RegExp", proto: !0, forced: /./.exec !== o}, {exec: o})
}, function (e, t, n) {
    "use strict";
    var r = n(23);
    e.exports = function () {
        var e = r(this), t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    }
}, function (e, t, n) {
    "use strict";
    var r = n(4), o = n(116);
    r({target: "Array", proto: !0, forced: [].forEach != o}, {forEach: o})
}, function (e, t, n) {
    var r = n(8), o = n(105), i = n(24), u = n(37), a = n(61), s = n(5), l = n(106),
        c = Object.getOwnPropertyDescriptor;
    t.f = r ? c : function (e, t) {
        if (e = u(e), t = a(t, !0), l) try {
            return c(e, t)
        } catch (e) {
        }
        if (s(e, t)) return i(!o.f.call(e, t), e[t])
    }
}, function (e, t, n) {
    "use strict";
    var r = {}.propertyIsEnumerable, o = Object.getOwnPropertyDescriptor, i = o && !r.call({1: 2}, 1);
    t.f = i ? function (e) {
        var t = o(this, e);
        return !!t && t.enumerable
    } : r
}, function (e, t, n) {
    var r = n(8), o = n(1), i = n(107);
    e.exports = !r && !o((function () {
        return 7 != Object.defineProperty(i("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    }))
}, function (e, t, n) {
    var r = n(3), o = n(9), i = r.document, u = o(i) && o(i.createElement);
    e.exports = function (e) {
        return u ? i.createElement(e) : {}
    }
}, function (e, t, n) {
    var r = n(109), o = Function.toString;
    "function" != typeof r.inspectSource && (r.inspectSource = function (e) {
        return o.call(e)
    }), e.exports = r.inspectSource
}, function (e, t, n) {
    var r = n(3), o = n(62), i = r["__core-js_shared__"] || o("__core-js_shared__", {});
    e.exports = i
}, function (e, t, n) {
    var r = n(39), o = n(109);
    (e.exports = function (e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: "3.6.5",
        mode: r ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    })
}, function (e, t, n) {
    var r = n(5), o = n(37), i = n(112).indexOf, u = n(40);
    e.exports = function (e, t) {
        var n, a = o(e), s = 0, l = [];
        for (n in a) !r(u, n) && r(a, n) && l.push(n);
        for (; t.length > s;) r(a, n = t[s++]) && (~i(l, n) || l.push(n));
        return l
    }
}, function (e, t, n) {
    var r = n(37), o = n(16), i = n(113), u = function (e) {
        return function (t, n, u) {
            var a, s = r(t), l = o(s.length), c = i(u, l);
            if (e && n != n) {
                for (; l > c;) if ((a = s[c++]) != a) return !0
            } else for (; l > c; c++) if ((e || c in s) && s[c] === n) return e || c || 0;
            return !e && -1
        }
    };
    e.exports = {includes: u(!0), indexOf: u(!1)}
}, function (e, t, n) {
    var r = n(27), o = Math.max, i = Math.min;
    e.exports = function (e, t) {
        var n = r(e);
        return n < 0 ? o(n + t, 0) : i(n, t)
    }
}, function (e, t) {
    t.f = Object.getOwnPropertySymbols
}, function (e, t, n) {
    var r = n(1), o = /#|\.prototype\./, i = function (e, t) {
        var n = a[u(e)];
        return n == l || n != s && ("function" == typeof t ? r(t) : !!t)
    }, u = i.normalize = function (e) {
        return String(e).replace(o, ".").toLowerCase()
    }, a = i.data = {}, s = i.NATIVE = "N", l = i.POLYFILL = "P";
    e.exports = i
}, function (e, t, n) {
    "use strict";
    var r = n(66).forEach, o = n(119), i = n(29), u = o("forEach"), a = i("forEach");
    e.exports = u && a ? [].forEach : function (e) {
        return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
}, function (e, t, n) {
    var r = n(38);
    e.exports = Array.isArray || function (e) {
        return "Array" == r(e)
    }
}, function (e, t, n) {
    var r = n(1);
    e.exports = !!Object.getOwnPropertySymbols && !r((function () {
        return !String(Symbol())
    }))
}, function (e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = function (e, t) {
        var n = [][e];
        return !!n && r((function () {
            n.call(null, t || function () {
                throw 1
            }, 1)
        }))
    }
}, function (e, t, n) {
    var r, o, i = n(3), u = n(201), a = i.process, s = a && a.versions, l = s && s.v8;
    l ? o = (r = l.split("."))[0] + r[1] : u && (!(r = u.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = u.match(/Chrome\/(\d+)/)) && (o = r[1]), e.exports = o && +o
}, function (e, t, n) {
    var r = n(8), o = n(12), i = n(6), u = n(122);
    e.exports = r ? Object.defineProperties : function (e, t) {
        i(e);
        for (var n, r = u(t), a = r.length, s = 0; a > s;) o.f(e, n = r[s++], t[n]);
        return e
    }
}, function (e, t, n) {
    var r = n(111), o = n(65);
    e.exports = Object.keys || function (e) {
        return r(e, o)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(124).IteratorPrototype, o = n(42), i = n(24), u = n(31), a = n(30), s = function () {
        return this
    };
    e.exports = function (e, t, n) {
        var l = t + " Iterator";
        return e.prototype = o(r, {next: i(1, n)}), u(e, l, !1, !0), a[l] = s, e
    }
}, function (e, t, n) {
    "use strict";
    var r, o, i, u = n(125), a = n(13), s = n(5), l = n(2), c = n(39), A = l("iterator"), p = !1;
    [].keys && ("next" in (i = [].keys()) ? (o = u(u(i))) !== Object.prototype && (r = o) : p = !0), null == r && (r = {}), c || s(r, A) || a(r, A, (function () {
        return this
    })), e.exports = {IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: p}
}, function (e, t, n) {
    var r = n(5), o = n(17), i = n(63), u = n(204), a = i("IE_PROTO"), s = Object.prototype;
    e.exports = u ? Object.getPrototypeOf : function (e) {
        return e = o(e), r(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
    }
}, function (e, t, n) {
    var r = n(6), o = n(205);
    e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
        var e, t = !1, n = {};
        try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
        } catch (e) {
        }
        return function (n, i) {
            return r(n), o(i), t ? e.call(n, i) : n.__proto__ = i, n
        }
    }() : void 0)
}, function (e, t, n) {
    var r = n(40), o = n(9), i = n(5), u = n(12).f, a = n(64), s = n(208), l = a("meta"), c = 0,
        A = Object.isExtensible || function () {
            return !0
        }, p = function (e) {
            u(e, l, {value: {objectID: "O" + ++c, weakData: {}}})
        }, f = e.exports = {
            REQUIRED: !1, fastKey: function (e, t) {
                if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!i(e, l)) {
                    if (!A(e)) return "F";
                    if (!t) return "E";
                    p(e)
                }
                return e[l].objectID
            }, getWeakData: function (e, t) {
                if (!i(e, l)) {
                    if (!A(e)) return !0;
                    if (!t) return !1;
                    p(e)
                }
                return e[l].weakData
            }, onFreeze: function (e) {
                return s && f.REQUIRED && A(e) && !i(e, l) && p(e), e
            }
        };
    r[l] = !0
}, function (e, t, n) {
    var r = n(6), o = n(129), i = n(16), u = n(28), a = n(43), s = n(130), l = function (e, t) {
        this.stopped = e, this.result = t
    };
    (e.exports = function (e, t, n, c, A) {
        var p, f, d, m, h, g, v, D = u(t, n, c ? 2 : 1);
        if (A) p = e; else {
            if ("function" != typeof (f = a(e))) throw TypeError("Target is not iterable");
            if (o(f)) {
                for (d = 0, m = i(e.length); m > d; d++) if ((h = c ? D(r(v = e[d])[0], v[1]) : D(e[d])) && h instanceof l) return h;
                return new l(!1)
            }
            p = f.call(e)
        }
        for (g = p.next; !(v = g.call(p)).done;) if ("object" == typeof (h = s(p, D, v.value, c)) && h && h instanceof l) return h;
        return new l(!1)
    }).stop = function (e) {
        return new l(!0, e)
    }
}, function (e, t, n) {
    var r = n(2), o = n(30), i = r("iterator"), u = Array.prototype;
    e.exports = function (e) {
        return void 0 !== e && (o.Array === e || u[i] === e)
    }
}, function (e, t, n) {
    var r = n(6);
    e.exports = function (e, t, n, o) {
        try {
            return o ? t(r(n)[0], n[1]) : t(n)
        } catch (t) {
            var i = e.return;
            throw void 0 !== i && r(i.call(e)), t
        }
    }
}, function (e, t, n) {
    var r = n(14);
    e.exports = function (e, t, n) {
        for (var o in t) r(e, o, t[o], n);
        return e
    }
}, function (e, t) {
    e.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }
}, function (e, t, n) {
    "use strict";
    var r = n(6);
    e.exports = function () {
        var e = r(this), t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    }
}, function (e, t, n) {
    var r = n(1), o = n(2), i = n(39), u = o("iterator");
    e.exports = !r((function () {
        var e = new URL("b?a=1&b=2&c=3", "http://a"), t = e.searchParams, n = "";
        return e.pathname = "c%20d", t.forEach((function (e, r) {
            t.delete("b"), n += r + e
        })), i && !e.toJSON || !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[u] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
    }))
}, function (e, t, n) {
    "use strict";
    var r = n(8), o = n(1), i = n(122), u = n(114), a = n(105), s = n(17), l = n(60), c = Object.assign,
        A = Object.defineProperty;
    e.exports = !c || o((function () {
        if (r && 1 !== c({b: 1}, c(A({}, "a", {
            enumerable: !0, get: function () {
                A(this, "b", {value: 3, enumerable: !1})
            }
        }), {b: 2})).b) return !0;
        var e = {}, t = {}, n = Symbol();
        return e[n] = 7, "abcdefghijklmnopqrst".split("").forEach((function (e) {
            t[e] = e
        })), 7 != c({}, e)[n] || "abcdefghijklmnopqrst" != i(c({}, t)).join("")
    })) ? function (e, t) {
        for (var n = s(e), o = arguments.length, c = 1, A = u.f, p = a.f; o > c;) for (var f, d = l(arguments[c++]), m = A ? i(d).concat(A(d)) : i(d), h = m.length, g = 0; h > g;) f = m[g++], r && !p.call(d, f) || (n[f] = d[f]);
        return n
    } : c
}, function (e, t) {
    e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
}, function (e, t, n) {
    "use strict";
    n(50), Object.defineProperty(t, "__esModule", {value: !0}), t.loadState = function (e, t) {
        var n = document.querySelector("#initial-state-".concat(e, "-").concat(t));
        if (null === n) throw new Error("Could not find initial state ".concat(t, " of ").concat(e));
        try {
            return JSON.parse(atob(n.value))
        } catch (n) {
            throw new Error("Could not parse initial state ".concat(t, " of ").concat(e))
        }
    }
}, function (e, t) {
    function n(e, t) {
        var r = {
            name: e.name,
            path: e.path,
            hash: e.hash,
            query: e.query,
            params: e.params,
            fullPath: e.fullPath,
            meta: e.meta
        };
        return t && (r.from = n(t)), Object.freeze(r)
    }

    t.sync = function (e, t, r) {
        var o = (r || {}).moduleName || "route";
        e.registerModule(o, {
            namespaced: !0, state: n(t.currentRoute), mutations: {
                ROUTE_CHANGED: function (t, r) {
                    e.state[o] = n(r.to, r.from)
                }
            }
        });
        var i, u = !1, a = e.watch((function (e) {
            return e[o]
        }), (function (e) {
            var n = e.fullPath;
            n !== i && (null != i && (u = !0, t.push(e)), i = n)
        }), {sync: !0}), s = t.afterEach((function (t, n) {
            u ? u = !1 : (i = t.fullPath, e.commit(o + "/ROUTE_CHANGED", {to: t, from: n}))
        }));
        return function () {
            null != s && s(), null != a && a(), e.unregisterModule(o)
        }
    }
}, function (e, t, n) {
    window, e.exports = function (e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {i: r, l: !1, exports: {}};
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }

        return n.m = e, n.c = t, n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
            return r
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "/dist/", n(n.s = 176)
    }({
        0: function (e, t, n) {
            "use strict";

            function r(e, t, n, r, o, i, u, a) {
                var s, l = "function" == typeof e ? e.options : e;
                if (t && (l.render = t, l.staticRenderFns = n, l._compiled = !0), r && (l.functional = !0), i && (l._scopeId = "data-v-" + i), u ? (s = function (e) {
                    (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(u)
                }, l._ssrRegister = s) : o && (s = a ? function () {
                    o.call(this, this.$root.$options.shadowRoot)
                } : o), s) if (l.functional) {
                    l._injectStyles = s;
                    var c = l.render;
                    l.render = function (e, t) {
                        return s.call(t), c(e, t)
                    }
                } else {
                    var A = l.beforeCreate;
                    l.beforeCreate = A ? [].concat(A, s) : [s]
                }
                return {exports: e, options: l}
            }

            n.d(t, "a", (function () {
                return r
            }))
        }, 141: function (e, t) {
        }, 176: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = {props: {appName: {type: String, required: !0}}}, o = n(0), i = n(141), u = n.n(i),
                a = Object(o.a)(r, (function () {
                    var e = this.$createElement;
                    return (this._self._c || e)("div", {
                        class: "app-" + this.appName,
                        attrs: {id: "content"}
                    }, [this._t("default")], 2)
                }), [], !1, null, null, null);
            "function" == typeof u.a && u()(a);
            var s = a.exports;
            /*
 * @copyright 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
            t.default = s
        }
    })
}, function (e, t, n) {
    window, e.exports = function (e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {i: r, l: !1, exports: {}};
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }

        return n.m = e, n.c = t, n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
            return r
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "/dist/", n(n.s = 190)
    }({
        0: function (e, t, n) {
            "use strict";

            function r(e, t, n, r, o, i, u, a) {
                var s, l = "function" == typeof e ? e.options : e;
                if (t && (l.render = t, l.staticRenderFns = n, l._compiled = !0), r && (l.functional = !0), i && (l._scopeId = "data-v-" + i), u ? (s = function (e) {
                    (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(u)
                }, l._ssrRegister = s) : o && (s = a ? function () {
                    o.call(this, this.$root.$options.shadowRoot)
                } : o), s) if (l.functional) {
                    l._injectStyles = s;
                    var c = l.render;
                    l.render = function (e, t) {
                        return s.call(t), c(e, t)
                    }
                } else {
                    var A = l.beforeCreate;
                    l.beforeCreate = A ? [].concat(A, s) : [s]
                }
                return {exports: e, options: l}
            }

            n.d(t, "a", (function () {
                return r
            }))
        }, 1: function (e, t, n) {
            "use strict";
            e.exports = function (e) {
                var t = [];
                return t.toString = function () {
                    return this.map((function (t) {
                        var n = function (e, t) {
                            var n, r, o, i = e[1] || "", u = e[3];
                            if (!u) return i;
                            if (t && "function" == typeof btoa) {
                                var a = (n = u, r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))), o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r), "/*# ".concat(o, " */")),
                                    s = u.sources.map((function (e) {
                                        return "/*# sourceURL=".concat(u.sourceRoot || "").concat(e, " */")
                                    }));
                                return [i].concat(s).concat([a]).join("\n")
                            }
                            return [i].join("\n")
                        }(t, e);
                        return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                    })).join("")
                }, t.i = function (e, n, r) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    var o = {};
                    if (r) for (var i = 0; i < this.length; i++) {
                        var u = this[i][0];
                        null != u && (o[u] = !0)
                    }
                    for (var a = 0; a < e.length; a++) {
                        var s = [].concat(e[a]);
                        r && o[s[0]] || (n && (s[2] ? s[2] = "".concat(n, " and ").concat(s[2]) : s[2] = n), t.push(s))
                    }
                }, t
            }
        }, 10: function (e, t, n) {
            "use strict";
            n.r(t), t.default = "data:font/ttf;base64,AAEAAAAKAIAAAwAgT1MvMnTjj5cAAACsAAAAYGNtYXAADeu0AAABDAAAAUJnbHlm9ReudAAAAlAAAASEaGVhZCfF2KoAAAbUAAAANmhoZWEnHBOFAAAHDAAAACRobXR4Z97//wAABzAAAAAsbG9jYQduCEYAAAdcAAAAIG1heHABHABXAAAHfAAAACBuYW1lorGCnAAAB5wAAAKmcG9zdOaJWowAAApEAAAAxAAEEpQBkAAFAAAMZQ2sAAACvAxlDawAAAlgAPUFCgAAAgAFAwAAAAAAAAAAAAAQAAAAAAAAAAAAAABQZkVkAEDqAeoOE4gAAAHCE4gAAAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAAAAAA8AAMAAQAAABwABAAgAAAABAAEAAEAAOoO//8AAOoB//8WAAABAAAAAAAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAA6mD0MABQALAAAJAhEJBBEJAQ6m+oIFfvu6BEb6gvqCBX77ugRGD0L6gvqCATgERgRGATj6gvqCATgERgRGAAEAAAAADW4SUAAFAAAJAREJAREGGwdT93QIjAnE+K3+yAiLCIz+xwACAAAAAA/fD0MABQALAAAJAhEJBBEJAQTiBX76ggRG+7oFfgV/+oEERvu6BEYFfgV+/sj7uvu6/sgFfgV+/sj7uvu6AAEAAAAADqYSUAAFAAAJAREJARENbvitCIv3dQnEB1MBOfd093UBOAABAAAAAAY3E4gABQAAEwcJARcBlJQFcvqOlAWjE4hV9pH2kVUJxAAAAQAAAAARhw+DAAUAAAkFD8338/v7/kYFvwnHD4P38wQF/kf6QQnGAAEAAAAAERcRFwALAAAJCxEX/e36wPrA/e0FQPrAAhMFQAVAAhP6wASE/e0FQPrAAhMFQAVAAhP6wAVA/e36wAAB//8AABOTEuwAMwAAASIHDgEXFhcBISYHBgcGBwYUFxYXFhcWNyEBBgcGFxYXHgEXFhcWNzY3ATY3NicmJwEuAQpgZU9KRhASSAXX8eBNPjopJxQUFBQnKTo+TQ4g+ik3GhgDAxsZVjU3Oz46PzUH7TsVFRQVPPgTLHQS7Dk0rFlgR/oqARsYLiw5OHg4OSwuGBsC+ik1Pzs+Ojc2VhkaAwMYGTgH7DxRUE9SPAfsLTIAAAACAAAAAA6mElAAGABGAAABIgcOAQcGFBceARcWMjc+ATc2NCcuAScmASIHBgcGFBcWFxYzIREhIgcGBwYUFxYXFjchMjc2NzY0JyYnJiMhETQnJicmIwl2b2ZimCkrKymYYmbeZmKXKisrKpdiZvw2VkhHKSsrKUdIVgJx/Y9WSEcpKyspR0hWB1NVSEcpKyspR0hV/Y8rKUdJVRJQKyqXY2XfZWKYKSsrKZhiZd9lY5cqK/nlKylHSKtIRykr+eYrKUdJqklHKSsBKilHSapJRykrB1NVSEcpKwAAAwAAAAARFxEXAAMABwALAAABESERAREhEQERIRECcQ6m8VoOpvFaDqYRF/2PAnH55v2PAnH55f2PAnEAAwAAAAASngvnABgAMQBKAAABMhceARcWFAcOAQcGIicuAScmNDc+ATc2ITIXHgEXFhQHDgEHBiInLgEnJjQ3PgE3NiEyFx4BFxYUBw4BBwYiJy4BJyY0Nz4BNzYDDXBlYpgpKyspmGJl32ZilyorKyqXYmYHJm9mYpcqKysql2Jm3mZilyorKyqXYmYHJm9mYpcqKysql2Jm32VimCkrKymYYmUL5ysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKwAAAAACAAAAAA/fD98AAwAHAAABESERIREhEQOqBOICcQTiD9/zyww188sMNQAAAAEAAAAAERcRFwACAAAJAgJxDqbxWhEX+K34rQABAAAAAA6mDDUAAgAACQIE4gTiBOIMNfseBOAAAQAAAAEAAEB6caFfDzz1AAsTiAAAAADasyhOAAAAANpiTE///wAAE5MTiAAAAAgAAgAAAAAAAAABAAATiAAAAAATiP////UTkwABAAAAAAAAAAAAAAAAAAAABwAAAAATiAAAE4gAABOIAAATiAAABjYAABOIAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAiADYAWABsAIAAlAC0AQ4BfAGaAhACJgI0AkIAAQAAAA8ASwADAAAAAAACAAAACgAKAAAA/wAAAAAAAAAAABAAxgABAAAAAAABABQAAAABAAAAAAACAAcAFAABAAAAAAADABQAGwABAAAAAAAEABQALwABAAAAAAAFAAsAQwABAAAAAAAGABQATgABAAAAAAAKACsAYgABAAAAAAALABMAjQADAAEECQABACgAoAADAAEECQACAA4AyAADAAEECQADACgA1gADAAEECQAEACgA/gADAAEECQAFABYBJgADAAEECQAGACgBPAADAAEECQAKAFYBZAADAAEECQALACYBumljb25mb250LXZ1ZS1lMWY1NWNlUmVndWxhcmljb25mb250LXZ1ZS1lMWY1NWNlaWNvbmZvbnQtdnVlLWUxZjU1Y2VWZXJzaW9uIDEuMGljb25mb250LXZ1ZS1lMWY1NWNlR2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20AaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQBWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAIAAAAAAAAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAA8ADwAAAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDxFhcnJvdy1sZWZ0LWRvdWJsZQphcnJvdy1sZWZ0EmFycm93LXJpZ2h0LWRvdWJsZQthcnJvdy1yaWdodApicmVhZGNydW1iCWNoZWNrbWFyawVjbG9zZQdjb25maXJtBGluZm8EbWVudQRtb3JlBXBhdXNlBHBsYXkKdHJpYW5nbGUtcw=="
        }, 11: function (e, t, n) {
            "use strict";
            n.r(t), t.default = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bWV0YWRhdGE+PC9tZXRhZGF0YT48ZGVmcz48Zm9udCBpZD0iaWNvbmZvbnQtdnVlLWUxZjU1Y2UiIGhvcml6LWFkdi14PSI1MDAwIj48Zm9udC1mYWNlIGZvbnQtZmFtaWx5PSJpY29uZm9udC12dWUtZTFmNTVjZSIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1zdHJldGNoPSJub3JtYWwiIHVuaXRzLXBlci1lbT0iNTAwMCIgcGFub3NlLTE9IjIgMCA1IDMgMCAwIDAgMCAwIDAiIGFzY2VudD0iNTAwMCIgZGVzY2VudD0iMCIgeC1oZWlnaHQ9IjAiIGJib3g9Ii0xIDAgNTAxMSA1MDAwIiB1bmRlcmxpbmUtdGhpY2tuZXNzPSIwIiB1bmRlcmxpbmUtcG9zaXRpb249IjUwIiB1bmljb2RlLXJhbmdlPSJVK2VhMDEtZWEwZSIgLz48bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMCIgIC8+PGdseXBoIGdseXBoLW5hbWU9ImFycm93LWxlZnQtZG91YmxlIiB1bmljb2RlPSImI3hlYTAxOyIgZD0iTTM3NTAgMzkwNiBsLTE0MDYgLTE0MDYgbDE0MDYgLTE0MDYgbDAgMzEyIGwtMTA5NCAxMDk0IGwxMDk0IDEwOTQgbDAgMzEyIFpNMjM0NCAzOTA2IGwtMTQwNiAtMTQwNiBsMTQwNiAtMTQwNiBsMCAzMTIgbC0xMDk0IDEwOTQgbDEwOTQgMTA5NCBsMCAzMTIgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iYXJyb3ctbGVmdCIgdW5pY29kZT0iJiN4ZWEwMjsiIGQ9Ik0xNTYzIDI1MDAgbDE4NzUgLTE4NzUgbDAgLTMxMiBsLTIxODggMjE4NyBsMjE4OCAyMTg4IGwwIC0zMTMgbC0xODc1IC0xODc1IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImFycm93LXJpZ2h0LWRvdWJsZSIgdW5pY29kZT0iJiN4ZWEwMzsiIGQ9Ik0xMjUwIDEwOTQgbDE0MDYgMTQwNiBsLTE0MDYgMTQwNiBsMCAtMzEyIGwxMDk0IC0xMDk0IGwtMTA5NCAtMTA5NCBsMCAtMzEyIFpNMjY1NiAxMDk0IGwxNDA3IDE0MDYgbC0xNDA3IDE0MDYgbDAgLTMxMiBsMTA5NCAtMTA5NCBsLTEwOTQgLTEwOTQgbDAgLTMxMiBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJhcnJvdy1yaWdodCIgdW5pY29kZT0iJiN4ZWEwNDsiIGQ9Ik0zNDM4IDI1MDAgbC0xODc1IDE4NzUgbDAgMzEzIGwyMTg3IC0yMTg4IGwtMjE4NyAtMjE4NyBsMCAzMTIgbDE4NzUgMTg3NSBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJicmVhZGNydW1iIiB1bmljb2RlPSImI3hlYTA1OyIgZD0iTTE0OCA1MDAwIGwtMTQ4IC04NSBsMTM5NCAtMjQxNSBsLTEzOTQgLTI0MTUgbDE0OCAtODUgbDE0NDMgMjUwMCBsLTE0NDMgMjUwMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJjaGVja21hcmsiIHVuaWNvZGU9IiYjeGVhMDY7IiBkPSJNNDA0NSAzOTcxIGwtMjA2MSAtMjA2MSBsLTEwMjkgMTAyOSBsLTQ0MiAtNDQxIGwxNDcxIC0xNDcxIGwyNTAzIDI1MDIgbC00NDIgNDQyIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImNsb3NlIiB1bmljb2RlPSImI3hlYTA3OyIgZD0iTTQzNzUgMTE1NiBsLTUzMSAtNTMxIGwtMTM0NCAxMzQ0IGwtMTM0NCAtMTM0NCBsLTUzMSA1MzEgbDEzNDQgMTM0NCBsLTEzNDQgMTM0NCBsNTMxIDUzMSBsMTM0NCAtMTM0NCBsMTM0NCAxMzQ0IGw1MzEgLTUzMSBsLTEzNDQgLTEzNDQgbDEzNDQgLTEzNDQgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iY29uZmlybSIgdW5pY29kZT0iJiN4ZWEwODsiIGQ9Ik0yNjU2IDQ4NDQgcS0xMDEgMCAtMTgwIC01NyBxLTc0IC01MiAtMTA5IC0xMzggcS0zNSAtODYgLTE5IC0xNzUgcTE4IC05NiA5MCAtMTY3IGwxNDk1IC0xNDk0IGwtMzYxNiAwIHEtNzcgMSAtMTM5IC0yNiBxLTU4IC0yNCAtOTkgLTcwIHEtMzkgLTQ0IC01OSAtMTAxIHEtMjAgLTU2IC0yMCAtMTE2IHEwIC02MCAyMCAtMTE2IHEyMCAtNTcgNTkgLTEwMSBxNDEgLTQ2IDk5IC03MCBxNjIgLTI3IDEzOSAtMjUgbDM2MTYgMCBsLTE0OTUgLTE0OTUgcS01NSAtNTMgLTgxIC0xMTYgcS0yNCAtNTkgLTIxIC0xMjEgcTMgLTU4IDMwIC0xMTMgcTI1IC01NCA2OCAtOTcgcTQzIC00MyA5NiAtNjggcTU1IC0yNiAxMTQgLTI5IHE2MiAtMyAxMjAgMjEgcTYzIDI1IDExNiA4MSBsMjAyOSAyMDI4IHE1OSA2MCA4MCAxNDEgcTIxIDgwIDEgMTU5IHEtMjEgODIgLTgxIDE0MiBsLTIwMjkgMjAyOCBxLTQ0IDQ1IC0xMDIgNzAgcS01OCAyNSAtMTIyIDI1IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImluZm8iIHVuaWNvZGU9IiYjeGVhMDk7IiBkPSJNMjQyMiA0Njg4IHEtMTExIDAgLTIxMyAtNDMgcS05OCAtNDIgLTE3NCAtMTE3LjUgcS03NiAtNzUuNSAtMTE3IC0xNzQuNSBxLTQzIC0xMDEgLTQzIC0yMTIuNSBxMCAtMTExLjUgNDMgLTIxMi41IHE0MSAtOTggMTE3IC0xNzQgcTc2IC03NiAxNzQgLTExNyBxMTAyIC00MyAyMTMgLTQzIHExMTEgMCAyMTMgNDMgcTk4IDQxIDE3My41IDExNyBxNzUuNSA3NiAxMTcuNSAxNzQgcTQzIDEwMSA0MyAyMTIuNSBxMCAxMTEuNSAtNDMgMjEyLjUgcS00MiA5OSAtMTE3LjUgMTc0LjUgcS03NS41IDc1LjUgLTE3My41IDExNy41IHEtMTAyIDQzIC0yMTMgNDMgWk0xNTYzIDMxMjUgcS04NiAwIC0xNTggLTQzIHEtNzEgLTQxIC0xMTIgLTExMiBxLTQzIC03MiAtNDMgLTE1Ny41IHEwIC04NS41IDQzIC0xNTcuNSBxNDEgLTcxIDExMiAtMTEyIHE3MiAtNDMgMTU4IC00MyBsNjI1IDAgbDAgLTE1NjIgbC02MjUgMCBxLTg2IDAgLTE1OCAtNDMgcS03MSAtNDEgLTExMiAtMTEyIHEtNDMgLTczIC00MyAtMTU4IHEwIC04NSA0MyAtMTU4IHE0MSAtNzEgMTEyIC0xMTIgcTcyIC00MyAxNTggLTQyIGwxODc1IDAgcTg1IDAgMTU3IDQyIHE3MSA0MSAxMTIgMTEyIHE0MyA3MyA0MyAxNTggcTAgODUgLTQzIDE1OCBxLTQxIDcxIC0xMTIgMTEyIHEtNzIgNDMgLTE1NyA0MyBsLTYyNSAwIGwwIDE4NzUgcTAgODUgLTQzIDE1NyBxLTQxIDcxIC0xMTIgMTEyIHEtNzMgNDMgLTE1OCA0MyBsLTkzNyAwIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9Im1lbnUiIHVuaWNvZGU9IiYjeGVhMGE7IiBkPSJNNjI1IDQzNzUgbDAgLTYyNSBsMzc1MCAwIGwwIDYyNSBsLTM3NTAgMCBaTTYyNSAyODEzIGwwIC02MjUgbDM3NTAgMCBsMCA2MjUgbC0zNzUwIDAgWk02MjUgMTI1MCBsMCAtNjI1IGwzNzUwIDAgbDAgNjI1IGwtMzc1MCAwIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9Im1vcmUiIHVuaWNvZGU9IiYjeGVhMGI7IiBkPSJNNzgxIDMwNDcgcTExMiAwIDIxMyAtNDMgcTk4IC00MiAxNzQgLTExNy41IHE3NiAtNzUuNSAxMTcgLTE3My41IHE0MyAtMTAyIDQzIC0yMTMgcTAgLTExMSAtNDMgLTIxMyBxLTQxIC05OCAtMTE3IC0xNzMuNSBxLTc2IC03NS41IC0xNzQgLTExNy41IHEtMTAxIC00MyAtMjEyLjUgLTQzIHEtMTExLjUgMCAtMjEzLjUgNDMgcS05OCA0MiAtMTczLjUgMTE3LjUgcS03NS41IDc1LjUgLTExNy41IDE3My41IHEtNDMgMTAyIC00MyAyMTMgcTAgMTExIDQzIDIxMyBxNDIgOTggMTE3LjUgMTczLjUgcTc1LjUgNzUuNSAxNzMuNSAxMTcuNSBxMTAyIDQzIDIxMyA0MyBaTTI1MDAgMzA0NyBxMTExIDAgMjEzIC00MyBxOTggLTQyIDE3My41IC0xMTcuNSBxNzUuNSAtNzUuNSAxMTcuNSAtMTczLjUgcTQzIC0xMDIgNDMgLTIxMyBxMCAtMTExIC00MyAtMjEzIHEtNDIgLTk4IC0xMTcuNSAtMTczLjUgcS03NS41IC03NS41IC0xNzMuNSAtMTE3LjUgcS0xMDIgLTQzIC0yMTMgLTQzIHEtMTExIDAgLTIxMyA0MyBxLTk4IDQyIC0xNzMuNSAxMTcuNSBxLTc1LjUgNzUuNSAtMTE3LjUgMTczLjUgcS00MyAxMDIgLTQzIDIxMyBxMCAxMTEgNDMgMjEzIHE0MiA5OCAxMTcuNSAxNzMuNSBxNzUuNSA3NS41IDE3My41IDExNy41IHExMDIgNDMgMjEzIDQzIFpNNDIxOSAzMDQ3IHExMTEgMCAyMTMgLTQzIHE5OCAtNDIgMTczLjUgLTExNy41IHE3NS41IC03NS41IDExNy41IC0xNzMuNSBxNDMgLTEwMiA0MyAtMjEzIHEwIC0xMTEgLTQzIC0yMTMgcS00MiAtOTggLTExNy41IC0xNzMuNSBxLTc1LjUgLTc1LjUgLTE3My41IC0xMTcuNSBxLTEwMiAtNDMgLTIxMy41IC00MyBxLTExMS41IDAgLTIxMi41IDQzIHEtOTggNDIgLTE3NCAxMTcuNSBxLTc2IDc1LjUgLTExNyAxNzMuNSBxLTQzIDEwMiAtNDMgMjEzIHEwIDExMSA0MyAyMTMgcTQxIDk4IDExNyAxNzMuNSBxNzYgNzUuNSAxNzQgMTE3LjUgcTEwMSA0MyAyMTMgNDMgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0icGF1c2UiIHVuaWNvZGU9IiYjeGVhMGM7IiBkPSJNOTM4IDQwNjMgbDAgLTMxMjUgbDEyNTAgMCBsMCAzMTI1IGwtMTI1MCAwIFpNMjgxMyA0MDYzIGwwIC0zMTI1IGwxMjUwIDAgbDAgMzEyNSBsLTEyNTAgMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJwbGF5IiB1bmljb2RlPSImI3hlYTBkOyIgZD0iTTYyNSA0Mzc1IGwzNzUwIC0xODc1IGwtMzc1MCAtMTg3NSBsMCAzNzUwIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InRyaWFuZ2xlLXMiIHVuaWNvZGU9IiYjeGVhMGU7IiBkPSJNMTI1MCAzMTI1IGwxMjUwIC0xMjUwIGwxMjUwIDEyNDggbC0yNTAwIDIgWiIgLz48L2ZvbnQ+PC9kZWZzPjwvc3ZnPg=="
        }, 130: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, "AppNavigationSpacer", (function () {
                return o
            }));
            var r = (n(152), n(0)), o = Object(r.a)({
                name: "AppNavigationToggle", methods: {
                    emitClick: function () {
                        this.$emit("click")
                    }
                }
            }, (function () {
                var e = this, t = e.$createElement;
                return (e._self._c || t)("a", {
                    attrs: {id: "app-navigation-toggle", tabindex: "0", href: "#"},
                    on: {
                        click: function (t) {
                            return t.preventDefault(), e.emitClick(t)
                        }, keydown: function (t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "space", 32, t.key, [" ", "Spacebar"]) || t.ctrlKey || t.shiftKey || t.altKey || t.metaKey ? null : (t.preventDefault(), e.emitClick(t))
                        }
                    }
                })
            }), [], !1, null, "338280f2", null).exports;
            t.default = o
        }, 152: function (e, t, n) {
            "use strict";
            var r = n(58);
            n.n(r).a
        }, 153: function (e, t, n) {
            var r = n(1), o = n(7), i = n(8), u = n(9), a = n(10), s = n(11);
            t = r(!1);
            var l = o(i), c = o(u), A = o(a), p = o(s);
            t.push([e.i, '@font-face{font-family:"iconfont-vue-e1f55ce";src:url(' + l + ");src:url(" + l + ') format("embedded-opentype"),url(' + c + ') format("woff"),url(' + A + ') format("truetype"),url(' + p + ') format("svg")}.icon[data-v-338280f2]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-338280f2]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-left[data-v-338280f2]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-right-double[data-v-338280f2]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-right[data-v-338280f2]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.breadcrumb[data-v-338280f2]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.checkmark[data-v-338280f2]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.close[data-v-338280f2]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.confirm[data-v-338280f2]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.info[data-v-338280f2]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.menu[data-v-338280f2]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.more[data-v-338280f2]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.pause[data-v-338280f2]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.play[data-v-338280f2]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.triangle-s[data-v-338280f2]:before{font-family:"iconfont-vue-e1f55ce";content:""}#app-navigation-toggle[data-v-338280f2]{display:none;position:fixed;z-index:1050;left:0;width:44px;height:44px;padding:14px;cursor:pointer;opacity:0.6;font-size:16px;line-height:17px}#app-navigation-toggle[data-v-338280f2]:before{font-family:"iconfont-vue-e1f55ce";font-style:normal;font-weight:400;content:""}#app-navigation-toggle[data-v-338280f2]:hover,#app-navigation-toggle[data-v-338280f2]:focus{opacity:1}@media only screen and (max-width: 768px){#app-navigation-toggle[data-v-338280f2]{display:inline-block !important}}\n', ""]), e.exports = t
        }, 190: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n(83), o = n.n(r), i = {
                name: "AppContent", components: {AppNavigationToggle: n(130).default}, data: function () {
                    return {opened: !1}
                }, mounted: function () {
                    var e = this;
                    this.mc = new o.a(this.$el, {cssProps: {userSelect: "text"}}), this.mc.on("swipeleft swiperight", (function (t) {
                        e.handleSwipe(t)
                    }))
                }, unmounted: function () {
                    this.mc.off("swipeleft swiperight"), this.mc.destroy()
                }, methods: {
                    toggleNavigation: function (e) {
                        this.opened = e || !this.opened, this.opened ? document.body.classList.add("nav-open") : document.body.classList.remove("nav-open")
                    }, handleSwipe: function (e) {
                        var t = e.srcEvent.pageX - e.deltaX, n = Math.abs(e.deltaX) > 70;
                        n && t < 40 ? this.toggleNavigation(!0) : this.opened && n && t < 340 && this.toggleNavigation(!1)
                    }
                }
            }, u = (n(208), n(0)), a = Object(u.a)(i, (function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("main", {
                    staticClass: "no-snapper",
                    style: this.opened ? "transform: translateX(300px)" : "",
                    attrs: {id: "app-content"}
                }, [t("AppNavigationToggle", {
                    attrs: {"aria-expanded": this.opened, "aria-controls": "app-navigation"},
                    on: {click: this.toggleNavigation}
                }), this._v(" "), this._t("default")], 2)
            }), [], !1, null, "5210b8b7", null).exports;
            t.default = a
        }, 2: function (e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = [], r = {}, o = 0; o < t.length; o++) {
                    var i = t[o], u = i[0], a = {id: e + ":" + o, css: i[1], media: i[2], sourceMap: i[3]};
                    r[u] ? r[u].parts.push(a) : n.push(r[u] = {id: u, parts: [a]})
                }
                return n
            }

            n.r(t), n.d(t, "default", (function () {
                return f
            }));
            var o = "undefined" != typeof document;
            if ("undefined" != typeof DEBUG && DEBUG && !o) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
            var i = {}, u = o && (document.head || document.getElementsByTagName("head")[0]), a = null, s = 0, l = !1,
                c = function () {
                }, A = null,
                p = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

            function f(e, t, n, o) {
                l = n, A = o || {};
                var u = r(e, t);
                return d(u), function (t) {
                    for (var n = [], o = 0; o < u.length; o++) {
                        var a = u[o];
                        (s = i[a.id]).refs--, n.push(s)
                    }
                    for (t ? d(u = r(e, t)) : u = [], o = 0; o < n.length; o++) {
                        var s;
                        if (0 === (s = n[o]).refs) {
                            for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                            delete i[s.id]
                        }
                    }
                }
            }

            function d(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t], r = i[n.id];
                    if (r) {
                        r.refs++;
                        for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
                        for (; o < n.parts.length; o++) r.parts.push(h(n.parts[o]));
                        r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
                    } else {
                        var u = [];
                        for (o = 0; o < n.parts.length; o++) u.push(h(n.parts[o]));
                        i[n.id] = {id: n.id, refs: 1, parts: u}
                    }
                }
            }

            function m() {
                var e = document.createElement("style");
                return e.type = "text/css", u.appendChild(e), e
            }

            function h(e) {
                var t, n, r = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
                if (r) {
                    if (l) return c;
                    r.parentNode.removeChild(r)
                }
                if (p) {
                    var o = s++;
                    r = a || (a = m()), t = D.bind(null, r, o, !1), n = D.bind(null, r, o, !0)
                } else r = m(), t = y.bind(null, r), n = function () {
                    r.parentNode.removeChild(r)
                };
                return t(e), function (r) {
                    if (r) {
                        if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                        t(e = r)
                    } else n()
                }
            }

            var g, v = (g = [], function (e, t) {
                return g[e] = t, g.filter(Boolean).join("\n")
            });

            function D(e, t, n, r) {
                var o = n ? "" : r.css;
                if (e.styleSheet) e.styleSheet.cssText = v(t, o); else {
                    var i = document.createTextNode(o), u = e.childNodes;
                    u[t] && e.removeChild(u[t]), u.length ? e.insertBefore(i, u[t]) : e.appendChild(i)
                }
            }

            function y(e, t) {
                var n = t.css, r = t.media, o = t.sourceMap;
                if (r && e.setAttribute("media", r), A.ssrId && e.setAttribute("data-vue-ssr-id", t.id), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), e.styleSheet) e.styleSheet.cssText = n; else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }
        }, 208: function (e, t, n) {
            "use strict";
            var r = n(95);
            n.n(r).a
        }, 209: function (e, t, n) {
            (t = n(1)(!1)).push([e.i, "#app-content[data-v-5210b8b7]{z-index:1000;background-color:var(--color-main-background);position:relative;flex-basis:100vw;min-height:100%;transition:transform var(--animation-quick)}\n", ""]), e.exports = t
        }, 58: function (e, t, n) {
            var r = n(153);
            "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals), (0, n(2).default)("781fc789", r, !0, {})
        }, 7: function (e, t, n) {
            "use strict";
            e.exports = function (e, t) {
                return t || (t = {}), "string" != typeof (e = e && e.__esModule ? e.default : e) ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
            }
        }, 8: function (e, t, n) {
            "use strict";
            n.r(t), t.default = "data:application/vnd.ms-fontobject;base64,0gsAAAgLAAABAAIAAAAAAAIABQMAAAAAAAABQJABAAAAAExQAAAAABAAAAAAAAAAAAAAAAAAAAEAAAAAoXF6QAAAAAAAAAAAAAAAAAAAAAAAACgAAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQAAAAAAABYAAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAAKAAAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAAAAAAABAAAACgCAAAMAIE9TLzJ044+XAAAArAAAAGBjbWFwAA3rtAAAAQwAAAFCZ2x5ZvUXrnQAAAJQAAAEhGhlYWQnxdiqAAAG1AAAADZoaGVhJxwThQAABwwAAAAkaG10eGfe//8AAAcwAAAALGxvY2EHbghGAAAHXAAAACBtYXhwARwAVwAAB3wAAAAgbmFtZaKxgpwAAAecAAACpnBvc3TmiVqMAAAKRAAAAMQABBKUAZAABQAADGUNrAAAArwMZQ2sAAAJYAD1BQoAAAIABQMAAAAAAAAAAAAAEAAAAAAAAAAAAAAAUGZFZABA6gHqDhOIAAABwhOIAAAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQAAAAAAPAADAAEAAAAcAAQAIAAAAAQABAABAADqDv//AADqAf//FgAAAQAAAAAAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAOpg9DAAUACwAACQIRCQQRCQEOpvqCBX77ugRG+oL6ggV++7oERg9C+oL6ggE4BEYERgE4+oL6ggE4BEYERgABAAAAAA1uElAABQAACQERCQERBhsHU/d0CIwJxPit/sgIiwiM/scAAgAAAAAP3w9DAAUACwAACQIRCQQRCQEE4gV++oIERvu6BX4Ff/qBBEb7ugRGBX4Ffv7I+7r7uv7IBX4Ffv7I+7r7ugABAAAAAA6mElAABQAACQERCQERDW74rQiL93UJxAdTATn3dPd1ATgAAQAAAAAGNxOIAAUAABMHCQEXAZSUBXL6jpQFoxOIVfaR9pFVCcQAAAEAAAAAEYcPgwAFAAAJBQ/N9/P7+/5GBb8Jxw+D9/MEBf5H+kEJxgABAAAAABEXERcACwAACQsRF/3t+sD6wP3tBUD6wAITBUAFQAIT+sAEhP3tBUD6wAITBUAFQAIT+sAFQP3t+sAAAf//AAATkxLsADMAAAEiBw4BFxYXASEmBwYHBgcGFBcWFxYXFjchAQYHBhcWFx4BFxYXFjc2NwE2NzYnJicBLgEKYGVPSkYQEkgF1/HgTT46KScUFBQUJyk6Pk0OIPopNxoYAwMbGVY1Nzs+Oj81B+07FRUUFTz4Eyx0Euw5NKxZYEf6KgEbGC4sOTh4ODksLhgbAvopNT87Pjo3NlYZGgMDGBk4B+w8UVBPUjwH7C0yAAAAAgAAAAAOphJQABgARgAAASIHDgEHBhQXHgEXFjI3PgE3NjQnLgEnJgEiBwYHBhQXFhcWMyERISIHBgcGFBcWFxY3ITI3Njc2NCcmJyYjIRE0JyYnJiMJdm9mYpgpKyspmGJm3mZilyorKyqXYmb8NlZIRykrKylHSFYCcf2PVkhHKSsrKUdIVgdTVUhHKSsrKUdIVf2PKylHSVUSUCsql2Nl32VimCkrKymYYmXfZWOXKiv55SspR0irSEcpK/nmKylHSapJRykrASopR0mqSUcpKwdTVUhHKSsAAAMAAAAAERcRFwADAAcACwAAAREhEQERIREBESERAnEOpvFaDqbxWg6mERf9jwJx+eb9jwJx+eX9jwJxAAMAAAAAEp4L5wAYADEASgAAATIXHgEXFhQHDgEHBiInLgEnJjQ3PgE3NiEyFx4BFxYUBw4BBwYiJy4BJyY0Nz4BNzYhMhceARcWFAcOAQcGIicuAScmNDc+ATc2Aw1wZWKYKSsrKZhiZd9mYpcqKysql2JmByZvZmKXKisrKpdiZt5mYpcqKysql2JmByZvZmKXKisrKpdiZt9lYpgpKyspmGJlC+crKpdiZt5mYpcqKysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKysql2Jm3mZilyorKyqXYmbeZmKXKisAAAAAAgAAAAAP3w/fAAMABwAAAREhESERIREDqgTiAnEE4g/f88sMNfPLDDUAAAABAAAAABEXERcAAgAACQICcQ6m8VoRF/it+K0AAQAAAAAOpgw1AAIAAAkCBOIE4gTiDDX7HgTgAAEAAAABAABAenGhXw889QALE4gAAAAA2rMoTgAAAADaYkxP//8AABOTE4gAAAAIAAIAAAAAAAAAAQAAE4gAAAAAE4j////1E5MAAQAAAAAAAAAAAAAAAAAAAAcAAAAAE4gAABOIAAATiAAAE4gAAAY2AAATiAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAIgA2AFgAbACAAJQAtAEOAXwBmgIQAiYCNAJCAAEAAAAPAEsAAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAAAQAMYAAQAAAAAAAQAUAAAAAQAAAAAAAgAHABQAAQAAAAAAAwAUABsAAQAAAAAABAAUAC8AAQAAAAAABQALAEMAAQAAAAAABgAUAE4AAQAAAAAACgArAGIAAQAAAAAACwATAI0AAwABBAkAAQAoAKAAAwABBAkAAgAOAMgAAwABBAkAAwAoANYAAwABBAkABAAoAP4AAwABBAkABQAWASYAAwABBAkABgAoATwAAwABBAkACgBWAWQAAwABBAkACwAmAbppY29uZm9udC12dWUtZTFmNTVjZVJlZ3VsYXJpY29uZm9udC12dWUtZTFmNTVjZWljb25mb250LXZ1ZS1lMWY1NWNlVmVyc2lvbiAxLjBpY29uZm9udC12dWUtZTFmNTVjZUdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQBSAGUAZwB1AGwAYQByAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQBpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQAtAGUAMQBmADUANQBjAGUAVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAACAAAAAAAAADIAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAA8AAAECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8RYXJyb3ctbGVmdC1kb3VibGUKYXJyb3ctbGVmdBJhcnJvdy1yaWdodC1kb3VibGULYXJyb3ctcmlnaHQKYnJlYWRjcnVtYgljaGVja21hcmsFY2xvc2UHY29uZmlybQRpbmZvBG1lbnUEbW9yZQVwYXVzZQRwbGF5CnRyaWFuZ2xlLXM="
        }, 83: function (e, t) {
            e.exports = n(216)
        }, 9: function (e, t, n) {
            "use strict";
            n.r(t), t.default = "data:font/woff;base64,d09GRgABAAAAAAtQAAoAAAAACwgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAAA9AAAAGAAAABgdOOPl2NtYXAAAAFUAAABQgAAAUIADeu0Z2x5ZgAAApgAAASEAAAEhPUXrnRoZWFkAAAHHAAAADYAAAA2J8XYqmhoZWEAAAdUAAAAJAAAACQnHBOFaG10eAAAB3gAAAAsAAAALGfe//9sb2NhAAAHpAAAACAAAAAgB24IRm1heHAAAAfEAAAAIAAAACABHABXbmFtZQAAB+QAAAKmAAACpqKxgpxwb3N0AAAKjAAAAMQAAADE5olajAAEEpQBkAAFAAAMZQ2sAAACvAxlDawAAAlgAPUFCgAAAgAFAwAAAAAAAAAAAAAQAAAAAAAAAAAAAABQZkVkAEDqAeoOE4gAAAHCE4gAAAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAAAAAA8AAMAAQAAABwABAAgAAAABAAEAAEAAOoO//8AAOoB//8WAAABAAAAAAAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAA6mD0MABQALAAAJAhEJBBEJAQ6m+oIFfvu6BEb6gvqCBX77ugRGD0L6gvqCATgERgRGATj6gvqCATgERgRGAAEAAAAADW4SUAAFAAAJAREJAREGGwdT93QIjAnE+K3+yAiLCIz+xwACAAAAAA/fD0MABQALAAAJAhEJBBEJAQTiBX76ggRG+7oFfgV/+oEERvu6BEYFfgV+/sj7uvu6/sgFfgV+/sj7uvu6AAEAAAAADqYSUAAFAAAJAREJARENbvitCIv3dQnEB1MBOfd093UBOAABAAAAAAY3E4gABQAAEwcJARcBlJQFcvqOlAWjE4hV9pH2kVUJxAAAAQAAAAARhw+DAAUAAAkFD8338/v7/kYFvwnHD4P38wQF/kf6QQnGAAEAAAAAERcRFwALAAAJCxEX/e36wPrA/e0FQPrAAhMFQAVAAhP6wASE/e0FQPrAAhMFQAVAAhP6wAVA/e36wAAB//8AABOTEuwAMwAAASIHDgEXFhcBISYHBgcGBwYUFxYXFhcWNyEBBgcGFxYXHgEXFhcWNzY3ATY3NicmJwEuAQpgZU9KRhASSAXX8eBNPjopJxQUFBQnKTo+TQ4g+ik3GhgDAxsZVjU3Oz46PzUH7TsVFRQVPPgTLHQS7Dk0rFlgR/oqARsYLiw5OHg4OSwuGBsC+ik1Pzs+Ojc2VhkaAwMYGTgH7DxRUE9SPAfsLTIAAAACAAAAAA6mElAAGABGAAABIgcOAQcGFBceARcWMjc+ATc2NCcuAScmASIHBgcGFBcWFxYzIREhIgcGBwYUFxYXFjchMjc2NzY0JyYnJiMhETQnJicmIwl2b2ZimCkrKymYYmbeZmKXKisrKpdiZvw2VkhHKSsrKUdIVgJx/Y9WSEcpKyspR0hWB1NVSEcpKyspR0hV/Y8rKUdJVRJQKyqXY2XfZWKYKSsrKZhiZd9lY5cqK/nlKylHSKtIRykr+eYrKUdJqklHKSsBKilHSapJRykrB1NVSEcpKwAAAwAAAAARFxEXAAMABwALAAABESERAREhEQERIRECcQ6m8VoOpvFaDqYRF/2PAnH55v2PAnH55f2PAnEAAwAAAAASngvnABgAMQBKAAABMhceARcWFAcOAQcGIicuAScmNDc+ATc2ITIXHgEXFhQHDgEHBiInLgEnJjQ3PgE3NiEyFx4BFxYUBw4BBwYiJy4BJyY0Nz4BNzYDDXBlYpgpKyspmGJl32ZilyorKyqXYmYHJm9mYpcqKysql2Jm3mZilyorKyqXYmYHJm9mYpcqKysql2Jm32VimCkrKymYYmUL5ysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKwAAAAACAAAAAA/fD98AAwAHAAABESERIREhEQOqBOICcQTiD9/zyww188sMNQAAAAEAAAAAERcRFwACAAAJAgJxDqbxWhEX+K34rQABAAAAAA6mDDUAAgAACQIE4gTiBOIMNfseBOAAAQAAAAEAAEB6caFfDzz1AAsTiAAAAADasyhOAAAAANpiTE///wAAE5MTiAAAAAgAAgAAAAAAAAABAAATiAAAAAATiP////UTkwABAAAAAAAAAAAAAAAAAAAABwAAAAATiAAAE4gAABOIAAATiAAABjYAABOIAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAiADYAWABsAIAAlAC0AQ4BfAGaAhACJgI0AkIAAQAAAA8ASwADAAAAAAACAAAACgAKAAAA/wAAAAAAAAAAABAAxgABAAAAAAABABQAAAABAAAAAAACAAcAFAABAAAAAAADABQAGwABAAAAAAAEABQALwABAAAAAAAFAAsAQwABAAAAAAAGABQATgABAAAAAAAKACsAYgABAAAAAAALABMAjQADAAEECQABACgAoAADAAEECQACAA4AyAADAAEECQADACgA1gADAAEECQAEACgA/gADAAEECQAFABYBJgADAAEECQAGACgBPAADAAEECQAKAFYBZAADAAEECQALACYBumljb25mb250LXZ1ZS1lMWY1NWNlUmVndWxhcmljb25mb250LXZ1ZS1lMWY1NWNlaWNvbmZvbnQtdnVlLWUxZjU1Y2VWZXJzaW9uIDEuMGljb25mb250LXZ1ZS1lMWY1NWNlR2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20AaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQBWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAIAAAAAAAAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAA8ADwAAAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDxFhcnJvdy1sZWZ0LWRvdWJsZQphcnJvdy1sZWZ0EmFycm93LXJpZ2h0LWRvdWJsZQthcnJvdy1yaWdodApicmVhZGNydW1iCWNoZWNrbWFyawVjbG9zZQdjb25maXJtBGluZm8EbWVudQRtb3JlBXBhdXNlBHBsYXkKdHJpYW5nbGUtcw=="
        }, 95: function (e, t, n) {
            var r = n(209);
            "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals), (0, n(2).default)("3a89e615", r, !0, {})
        }
    })
}, function (e, t, n) {
    window, e.exports = function (e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {i: r, l: !1, exports: {}};
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }

        return n.m = e, n.c = t, n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
            return r
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "/dist/", n(n.s = 187)
    }({
        0: function (e, t, n) {
            "use strict";

            function r(e, t, n, r, o, i, u, a) {
                var s, l = "function" == typeof e ? e.options : e;
                if (t && (l.render = t, l.staticRenderFns = n, l._compiled = !0), r && (l.functional = !0), i && (l._scopeId = "data-v-" + i), u ? (s = function (e) {
                    (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(u)
                }, l._ssrRegister = s) : o && (s = a ? function () {
                    o.call(this, this.$root.$options.shadowRoot)
                } : o), s) if (l.functional) {
                    l._injectStyles = s;
                    var c = l.render;
                    l.render = function (e, t) {
                        return s.call(t), c(e, t)
                    }
                } else {
                    var A = l.beforeCreate;
                    l.beforeCreate = A ? [].concat(A, s) : [s]
                }
                return {exports: e, options: l}
            }

            n.d(t, "a", (function () {
                return r
            }))
        }, 1: function (e, t, n) {
            "use strict";
            e.exports = function (e) {
                var t = [];
                return t.toString = function () {
                    return this.map((function (t) {
                        var n = function (e, t) {
                            var n, r, o, i = e[1] || "", u = e[3];
                            if (!u) return i;
                            if (t && "function" == typeof btoa) {
                                var a = (n = u, r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))), o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r), "/*# ".concat(o, " */")),
                                    s = u.sources.map((function (e) {
                                        return "/*# sourceURL=".concat(u.sourceRoot || "").concat(e, " */")
                                    }));
                                return [i].concat(s).concat([a]).join("\n")
                            }
                            return [i].join("\n")
                        }(t, e);
                        return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                    })).join("")
                }, t.i = function (e, n, r) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    var o = {};
                    if (r) for (var i = 0; i < this.length; i++) {
                        var u = this[i][0];
                        null != u && (o[u] = !0)
                    }
                    for (var a = 0; a < e.length; a++) {
                        var s = [].concat(e[a]);
                        r && o[s[0]] || (n && (s[2] ? s[2] = "".concat(n, " and ").concat(s[2]) : s[2] = n), t.push(s))
                    }
                }, t
            }
        }, 187: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = (n(210), n(0)), o = Object(r.a)({name: "AppNavigation"}, (function () {
                var e = this.$createElement;
                return (this._self._c || e)("div", {
                    staticClass: "vue",
                    attrs: {id: "app-navigation"}
                }, [this._t("default")], 2)
            }), [], !1, null, "058349d0", null).exports;
            t.default = o
        }, 2: function (e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = [], r = {}, o = 0; o < t.length; o++) {
                    var i = t[o], u = i[0], a = {id: e + ":" + o, css: i[1], media: i[2], sourceMap: i[3]};
                    r[u] ? r[u].parts.push(a) : n.push(r[u] = {id: u, parts: [a]})
                }
                return n
            }

            n.r(t), n.d(t, "default", (function () {
                return f
            }));
            var o = "undefined" != typeof document;
            if ("undefined" != typeof DEBUG && DEBUG && !o) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
            var i = {}, u = o && (document.head || document.getElementsByTagName("head")[0]), a = null, s = 0, l = !1,
                c = function () {
                }, A = null,
                p = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

            function f(e, t, n, o) {
                l = n, A = o || {};
                var u = r(e, t);
                return d(u), function (t) {
                    for (var n = [], o = 0; o < u.length; o++) {
                        var a = u[o];
                        (s = i[a.id]).refs--, n.push(s)
                    }
                    for (t ? d(u = r(e, t)) : u = [], o = 0; o < n.length; o++) {
                        var s;
                        if (0 === (s = n[o]).refs) {
                            for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                            delete i[s.id]
                        }
                    }
                }
            }

            function d(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t], r = i[n.id];
                    if (r) {
                        r.refs++;
                        for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
                        for (; o < n.parts.length; o++) r.parts.push(h(n.parts[o]));
                        r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
                    } else {
                        var u = [];
                        for (o = 0; o < n.parts.length; o++) u.push(h(n.parts[o]));
                        i[n.id] = {id: n.id, refs: 1, parts: u}
                    }
                }
            }

            function m() {
                var e = document.createElement("style");
                return e.type = "text/css", u.appendChild(e), e
            }

            function h(e) {
                var t, n, r = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
                if (r) {
                    if (l) return c;
                    r.parentNode.removeChild(r)
                }
                if (p) {
                    var o = s++;
                    r = a || (a = m()), t = D.bind(null, r, o, !1), n = D.bind(null, r, o, !0)
                } else r = m(), t = y.bind(null, r), n = function () {
                    r.parentNode.removeChild(r)
                };
                return t(e), function (r) {
                    if (r) {
                        if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                        t(e = r)
                    } else n()
                }
            }

            var g, v = (g = [], function (e, t) {
                return g[e] = t, g.filter(Boolean).join("\n")
            });

            function D(e, t, n, r) {
                var o = n ? "" : r.css;
                if (e.styleSheet) e.styleSheet.cssText = v(t, o); else {
                    var i = document.createTextNode(o), u = e.childNodes;
                    u[t] && e.removeChild(u[t]), u.length ? e.insertBefore(i, u[t]) : e.appendChild(i)
                }
            }

            function y(e, t) {
                var n = t.css, r = t.media, o = t.sourceMap;
                if (r && e.setAttribute("media", r), A.ssrId && e.setAttribute("data-vue-ssr-id", t.id), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), e.styleSheet) e.styleSheet.cssText = n; else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }
        }, 210: function (e, t, n) {
            "use strict";
            var r = n(96);
            n.n(r).a
        }, 211: function (e, t, n) {
            (t = n(1)(!1)).push([e.i, "#app-navigation[data-v-058349d0]{will-change:transform;transition:transform var(--animation-quick);width:300px;position:fixed;top:50px;right:0;z-index:500;overflow-y:auto;overflow-x:hidden;height:calc(100% - 50px);box-sizing:border-box;background-color:var(--color-main-background);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-right:1px solid var(--color-border);display:flex;flex-direction:column;flex-grow:0;flex-shrink:0}ul[data-v-058349d0]{position:relative;height:100%;width:inherit;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;display:flex;flex-direction:column}@media only screen and (max-width: 1024px){.nav-open #app-navigation[data-v-058349d0]{transform:translateX(0)}}\n", ""]), e.exports = t
        }, 96: function (e, t, n) {
            var r = n(211);
            "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals), (0, n(2).default)("1732c148", r, !0, {})
        }
    })
}, function (e, t, n) {
    window, e.exports = function (e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {i: r, l: !1, exports: {}};
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }

        return n.m = e, n.c = t, n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
            return r
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "/dist/", n(n.s = 170)
    }({
        0: function (e, t, n) {
            "use strict";

            function r(e, t, n, r, o, i, u, a) {
                var s, l = "function" == typeof e ? e.options : e;
                if (t && (l.render = t, l.staticRenderFns = n, l._compiled = !0), r && (l.functional = !0), i && (l._scopeId = "data-v-" + i), u ? (s = function (e) {
                    (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(u)
                }, l._ssrRegister = s) : o && (s = a ? function () {
                    o.call(this, this.$root.$options.shadowRoot)
                } : o), s) if (l.functional) {
                    l._injectStyles = s;
                    var c = l.render;
                    l.render = function (e, t) {
                        return s.call(t), c(e, t)
                    }
                } else {
                    var A = l.beforeCreate;
                    l.beforeCreate = A ? [].concat(A, s) : [s]
                }
                return {exports: e, options: l}
            }

            n.d(t, "a", (function () {
                return r
            }))
        }, 1: function (e, t, n) {
            "use strict";
            e.exports = function (e) {
                var t = [];
                return t.toString = function () {
                    return this.map((function (t) {
                        var n = function (e, t) {
                            var n, r, o, i = e[1] || "", u = e[3];
                            if (!u) return i;
                            if (t && "function" == typeof btoa) {
                                var a = (n = u, r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))), o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r), "/*# ".concat(o, " */")),
                                    s = u.sources.map((function (e) {
                                        return "/*# sourceURL=".concat(u.sourceRoot || "").concat(e, " */")
                                    }));
                                return [i].concat(s).concat([a]).join("\n")
                            }
                            return [i].join("\n")
                        }(t, e);
                        return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                    })).join("")
                }, t.i = function (e, n, r) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    var o = {};
                    if (r) for (var i = 0; i < this.length; i++) {
                        var u = this[i][0];
                        null != u && (o[u] = !0)
                    }
                    for (var a = 0; a < e.length; a++) {
                        var s = [].concat(e[a]);
                        r && o[s[0]] || (n && (s[2] ? s[2] = "".concat(n, " and ").concat(s[2]) : s[2] = n), t.push(s))
                    }
                }, t
            }
        }, 10: function (e, t, n) {
            "use strict";
            n.r(t), t.default = "data:font/ttf;base64,AAEAAAAKAIAAAwAgT1MvMnTjj5cAAACsAAAAYGNtYXAADeu0AAABDAAAAUJnbHlm9ReudAAAAlAAAASEaGVhZCfF2KoAAAbUAAAANmhoZWEnHBOFAAAHDAAAACRobXR4Z97//wAABzAAAAAsbG9jYQduCEYAAAdcAAAAIG1heHABHABXAAAHfAAAACBuYW1lorGCnAAAB5wAAAKmcG9zdOaJWowAAApEAAAAxAAEEpQBkAAFAAAMZQ2sAAACvAxlDawAAAlgAPUFCgAAAgAFAwAAAAAAAAAAAAAQAAAAAAAAAAAAAABQZkVkAEDqAeoOE4gAAAHCE4gAAAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAAAAAA8AAMAAQAAABwABAAgAAAABAAEAAEAAOoO//8AAOoB//8WAAABAAAAAAAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAA6mD0MABQALAAAJAhEJBBEJAQ6m+oIFfvu6BEb6gvqCBX77ugRGD0L6gvqCATgERgRGATj6gvqCATgERgRGAAEAAAAADW4SUAAFAAAJAREJAREGGwdT93QIjAnE+K3+yAiLCIz+xwACAAAAAA/fD0MABQALAAAJAhEJBBEJAQTiBX76ggRG+7oFfgV/+oEERvu6BEYFfgV+/sj7uvu6/sgFfgV+/sj7uvu6AAEAAAAADqYSUAAFAAAJAREJARENbvitCIv3dQnEB1MBOfd093UBOAABAAAAAAY3E4gABQAAEwcJARcBlJQFcvqOlAWjE4hV9pH2kVUJxAAAAQAAAAARhw+DAAUAAAkFD8338/v7/kYFvwnHD4P38wQF/kf6QQnGAAEAAAAAERcRFwALAAAJCxEX/e36wPrA/e0FQPrAAhMFQAVAAhP6wASE/e0FQPrAAhMFQAVAAhP6wAVA/e36wAAB//8AABOTEuwAMwAAASIHDgEXFhcBISYHBgcGBwYUFxYXFhcWNyEBBgcGFxYXHgEXFhcWNzY3ATY3NicmJwEuAQpgZU9KRhASSAXX8eBNPjopJxQUFBQnKTo+TQ4g+ik3GhgDAxsZVjU3Oz46PzUH7TsVFRQVPPgTLHQS7Dk0rFlgR/oqARsYLiw5OHg4OSwuGBsC+ik1Pzs+Ojc2VhkaAwMYGTgH7DxRUE9SPAfsLTIAAAACAAAAAA6mElAAGABGAAABIgcOAQcGFBceARcWMjc+ATc2NCcuAScmASIHBgcGFBcWFxYzIREhIgcGBwYUFxYXFjchMjc2NzY0JyYnJiMhETQnJicmIwl2b2ZimCkrKymYYmbeZmKXKisrKpdiZvw2VkhHKSsrKUdIVgJx/Y9WSEcpKyspR0hWB1NVSEcpKyspR0hV/Y8rKUdJVRJQKyqXY2XfZWKYKSsrKZhiZd9lY5cqK/nlKylHSKtIRykr+eYrKUdJqklHKSsBKilHSapJRykrB1NVSEcpKwAAAwAAAAARFxEXAAMABwALAAABESERAREhEQERIRECcQ6m8VoOpvFaDqYRF/2PAnH55v2PAnH55f2PAnEAAwAAAAASngvnABgAMQBKAAABMhceARcWFAcOAQcGIicuAScmNDc+ATc2ITIXHgEXFhQHDgEHBiInLgEnJjQ3PgE3NiEyFx4BFxYUBw4BBwYiJy4BJyY0Nz4BNzYDDXBlYpgpKyspmGJl32ZilyorKyqXYmYHJm9mYpcqKysql2Jm3mZilyorKyqXYmYHJm9mYpcqKysql2Jm32VimCkrKymYYmUL5ysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKwAAAAACAAAAAA/fD98AAwAHAAABESERIREhEQOqBOICcQTiD9/zyww188sMNQAAAAEAAAAAERcRFwACAAAJAgJxDqbxWhEX+K34rQABAAAAAA6mDDUAAgAACQIE4gTiBOIMNfseBOAAAQAAAAEAAEB6caFfDzz1AAsTiAAAAADasyhOAAAAANpiTE///wAAE5MTiAAAAAgAAgAAAAAAAAABAAATiAAAAAATiP////UTkwABAAAAAAAAAAAAAAAAAAAABwAAAAATiAAAE4gAABOIAAATiAAABjYAABOIAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAiADYAWABsAIAAlAC0AQ4BfAGaAhACJgI0AkIAAQAAAA8ASwADAAAAAAACAAAACgAKAAAA/wAAAAAAAAAAABAAxgABAAAAAAABABQAAAABAAAAAAACAAcAFAABAAAAAAADABQAGwABAAAAAAAEABQALwABAAAAAAAFAAsAQwABAAAAAAAGABQATgABAAAAAAAKACsAYgABAAAAAAALABMAjQADAAEECQABACgAoAADAAEECQACAA4AyAADAAEECQADACgA1gADAAEECQAEACgA/gADAAEECQAFABYBJgADAAEECQAGACgBPAADAAEECQAKAFYBZAADAAEECQALACYBumljb25mb250LXZ1ZS1lMWY1NWNlUmVndWxhcmljb25mb250LXZ1ZS1lMWY1NWNlaWNvbmZvbnQtdnVlLWUxZjU1Y2VWZXJzaW9uIDEuMGljb25mb250LXZ1ZS1lMWY1NWNlR2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20AaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQBWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAIAAAAAAAAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAA8ADwAAAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDxFhcnJvdy1sZWZ0LWRvdWJsZQphcnJvdy1sZWZ0EmFycm93LXJpZ2h0LWRvdWJsZQthcnJvdy1yaWdodApicmVhZGNydW1iCWNoZWNrbWFyawVjbG9zZQdjb25maXJtBGluZm8EbWVudQRtb3JlBXBhdXNlBHBsYXkKdHJpYW5nbGUtcw=="
        }, 100: function (e, t, n) {
            var r = n(219);
            "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals), (0, n(2).default)("637134c2", r, !0, {})
        }, 101: function (e, t, n) {
            var r = n(221);
            "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals), (0, n(2).default)("3029bde6", r, !0, {})
        }, 11: function (e, t, n) {
            "use strict";
            n.r(t), t.default = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bWV0YWRhdGE+PC9tZXRhZGF0YT48ZGVmcz48Zm9udCBpZD0iaWNvbmZvbnQtdnVlLWUxZjU1Y2UiIGhvcml6LWFkdi14PSI1MDAwIj48Zm9udC1mYWNlIGZvbnQtZmFtaWx5PSJpY29uZm9udC12dWUtZTFmNTVjZSIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1zdHJldGNoPSJub3JtYWwiIHVuaXRzLXBlci1lbT0iNTAwMCIgcGFub3NlLTE9IjIgMCA1IDMgMCAwIDAgMCAwIDAiIGFzY2VudD0iNTAwMCIgZGVzY2VudD0iMCIgeC1oZWlnaHQ9IjAiIGJib3g9Ii0xIDAgNTAxMSA1MDAwIiB1bmRlcmxpbmUtdGhpY2tuZXNzPSIwIiB1bmRlcmxpbmUtcG9zaXRpb249IjUwIiB1bmljb2RlLXJhbmdlPSJVK2VhMDEtZWEwZSIgLz48bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMCIgIC8+PGdseXBoIGdseXBoLW5hbWU9ImFycm93LWxlZnQtZG91YmxlIiB1bmljb2RlPSImI3hlYTAxOyIgZD0iTTM3NTAgMzkwNiBsLTE0MDYgLTE0MDYgbDE0MDYgLTE0MDYgbDAgMzEyIGwtMTA5NCAxMDk0IGwxMDk0IDEwOTQgbDAgMzEyIFpNMjM0NCAzOTA2IGwtMTQwNiAtMTQwNiBsMTQwNiAtMTQwNiBsMCAzMTIgbC0xMDk0IDEwOTQgbDEwOTQgMTA5NCBsMCAzMTIgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iYXJyb3ctbGVmdCIgdW5pY29kZT0iJiN4ZWEwMjsiIGQ9Ik0xNTYzIDI1MDAgbDE4NzUgLTE4NzUgbDAgLTMxMiBsLTIxODggMjE4NyBsMjE4OCAyMTg4IGwwIC0zMTMgbC0xODc1IC0xODc1IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImFycm93LXJpZ2h0LWRvdWJsZSIgdW5pY29kZT0iJiN4ZWEwMzsiIGQ9Ik0xMjUwIDEwOTQgbDE0MDYgMTQwNiBsLTE0MDYgMTQwNiBsMCAtMzEyIGwxMDk0IC0xMDk0IGwtMTA5NCAtMTA5NCBsMCAtMzEyIFpNMjY1NiAxMDk0IGwxNDA3IDE0MDYgbC0xNDA3IDE0MDYgbDAgLTMxMiBsMTA5NCAtMTA5NCBsLTEwOTQgLTEwOTQgbDAgLTMxMiBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJhcnJvdy1yaWdodCIgdW5pY29kZT0iJiN4ZWEwNDsiIGQ9Ik0zNDM4IDI1MDAgbC0xODc1IDE4NzUgbDAgMzEzIGwyMTg3IC0yMTg4IGwtMjE4NyAtMjE4NyBsMCAzMTIgbDE4NzUgMTg3NSBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJicmVhZGNydW1iIiB1bmljb2RlPSImI3hlYTA1OyIgZD0iTTE0OCA1MDAwIGwtMTQ4IC04NSBsMTM5NCAtMjQxNSBsLTEzOTQgLTI0MTUgbDE0OCAtODUgbDE0NDMgMjUwMCBsLTE0NDMgMjUwMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJjaGVja21hcmsiIHVuaWNvZGU9IiYjeGVhMDY7IiBkPSJNNDA0NSAzOTcxIGwtMjA2MSAtMjA2MSBsLTEwMjkgMTAyOSBsLTQ0MiAtNDQxIGwxNDcxIC0xNDcxIGwyNTAzIDI1MDIgbC00NDIgNDQyIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImNsb3NlIiB1bmljb2RlPSImI3hlYTA3OyIgZD0iTTQzNzUgMTE1NiBsLTUzMSAtNTMxIGwtMTM0NCAxMzQ0IGwtMTM0NCAtMTM0NCBsLTUzMSA1MzEgbDEzNDQgMTM0NCBsLTEzNDQgMTM0NCBsNTMxIDUzMSBsMTM0NCAtMTM0NCBsMTM0NCAxMzQ0IGw1MzEgLTUzMSBsLTEzNDQgLTEzNDQgbDEzNDQgLTEzNDQgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iY29uZmlybSIgdW5pY29kZT0iJiN4ZWEwODsiIGQ9Ik0yNjU2IDQ4NDQgcS0xMDEgMCAtMTgwIC01NyBxLTc0IC01MiAtMTA5IC0xMzggcS0zNSAtODYgLTE5IC0xNzUgcTE4IC05NiA5MCAtMTY3IGwxNDk1IC0xNDk0IGwtMzYxNiAwIHEtNzcgMSAtMTM5IC0yNiBxLTU4IC0yNCAtOTkgLTcwIHEtMzkgLTQ0IC01OSAtMTAxIHEtMjAgLTU2IC0yMCAtMTE2IHEwIC02MCAyMCAtMTE2IHEyMCAtNTcgNTkgLTEwMSBxNDEgLTQ2IDk5IC03MCBxNjIgLTI3IDEzOSAtMjUgbDM2MTYgMCBsLTE0OTUgLTE0OTUgcS01NSAtNTMgLTgxIC0xMTYgcS0yNCAtNTkgLTIxIC0xMjEgcTMgLTU4IDMwIC0xMTMgcTI1IC01NCA2OCAtOTcgcTQzIC00MyA5NiAtNjggcTU1IC0yNiAxMTQgLTI5IHE2MiAtMyAxMjAgMjEgcTYzIDI1IDExNiA4MSBsMjAyOSAyMDI4IHE1OSA2MCA4MCAxNDEgcTIxIDgwIDEgMTU5IHEtMjEgODIgLTgxIDE0MiBsLTIwMjkgMjAyOCBxLTQ0IDQ1IC0xMDIgNzAgcS01OCAyNSAtMTIyIDI1IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImluZm8iIHVuaWNvZGU9IiYjeGVhMDk7IiBkPSJNMjQyMiA0Njg4IHEtMTExIDAgLTIxMyAtNDMgcS05OCAtNDIgLTE3NCAtMTE3LjUgcS03NiAtNzUuNSAtMTE3IC0xNzQuNSBxLTQzIC0xMDEgLTQzIC0yMTIuNSBxMCAtMTExLjUgNDMgLTIxMi41IHE0MSAtOTggMTE3IC0xNzQgcTc2IC03NiAxNzQgLTExNyBxMTAyIC00MyAyMTMgLTQzIHExMTEgMCAyMTMgNDMgcTk4IDQxIDE3My41IDExNyBxNzUuNSA3NiAxMTcuNSAxNzQgcTQzIDEwMSA0MyAyMTIuNSBxMCAxMTEuNSAtNDMgMjEyLjUgcS00MiA5OSAtMTE3LjUgMTc0LjUgcS03NS41IDc1LjUgLTE3My41IDExNy41IHEtMTAyIDQzIC0yMTMgNDMgWk0xNTYzIDMxMjUgcS04NiAwIC0xNTggLTQzIHEtNzEgLTQxIC0xMTIgLTExMiBxLTQzIC03MiAtNDMgLTE1Ny41IHEwIC04NS41IDQzIC0xNTcuNSBxNDEgLTcxIDExMiAtMTEyIHE3MiAtNDMgMTU4IC00MyBsNjI1IDAgbDAgLTE1NjIgbC02MjUgMCBxLTg2IDAgLTE1OCAtNDMgcS03MSAtNDEgLTExMiAtMTEyIHEtNDMgLTczIC00MyAtMTU4IHEwIC04NSA0MyAtMTU4IHE0MSAtNzEgMTEyIC0xMTIgcTcyIC00MyAxNTggLTQyIGwxODc1IDAgcTg1IDAgMTU3IDQyIHE3MSA0MSAxMTIgMTEyIHE0MyA3MyA0MyAxNTggcTAgODUgLTQzIDE1OCBxLTQxIDcxIC0xMTIgMTEyIHEtNzIgNDMgLTE1NyA0MyBsLTYyNSAwIGwwIDE4NzUgcTAgODUgLTQzIDE1NyBxLTQxIDcxIC0xMTIgMTEyIHEtNzMgNDMgLTE1OCA0MyBsLTkzNyAwIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9Im1lbnUiIHVuaWNvZGU9IiYjeGVhMGE7IiBkPSJNNjI1IDQzNzUgbDAgLTYyNSBsMzc1MCAwIGwwIDYyNSBsLTM3NTAgMCBaTTYyNSAyODEzIGwwIC02MjUgbDM3NTAgMCBsMCA2MjUgbC0zNzUwIDAgWk02MjUgMTI1MCBsMCAtNjI1IGwzNzUwIDAgbDAgNjI1IGwtMzc1MCAwIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9Im1vcmUiIHVuaWNvZGU9IiYjeGVhMGI7IiBkPSJNNzgxIDMwNDcgcTExMiAwIDIxMyAtNDMgcTk4IC00MiAxNzQgLTExNy41IHE3NiAtNzUuNSAxMTcgLTE3My41IHE0MyAtMTAyIDQzIC0yMTMgcTAgLTExMSAtNDMgLTIxMyBxLTQxIC05OCAtMTE3IC0xNzMuNSBxLTc2IC03NS41IC0xNzQgLTExNy41IHEtMTAxIC00MyAtMjEyLjUgLTQzIHEtMTExLjUgMCAtMjEzLjUgNDMgcS05OCA0MiAtMTczLjUgMTE3LjUgcS03NS41IDc1LjUgLTExNy41IDE3My41IHEtNDMgMTAyIC00MyAyMTMgcTAgMTExIDQzIDIxMyBxNDIgOTggMTE3LjUgMTczLjUgcTc1LjUgNzUuNSAxNzMuNSAxMTcuNSBxMTAyIDQzIDIxMyA0MyBaTTI1MDAgMzA0NyBxMTExIDAgMjEzIC00MyBxOTggLTQyIDE3My41IC0xMTcuNSBxNzUuNSAtNzUuNSAxMTcuNSAtMTczLjUgcTQzIC0xMDIgNDMgLTIxMyBxMCAtMTExIC00MyAtMjEzIHEtNDIgLTk4IC0xMTcuNSAtMTczLjUgcS03NS41IC03NS41IC0xNzMuNSAtMTE3LjUgcS0xMDIgLTQzIC0yMTMgLTQzIHEtMTExIDAgLTIxMyA0MyBxLTk4IDQyIC0xNzMuNSAxMTcuNSBxLTc1LjUgNzUuNSAtMTE3LjUgMTczLjUgcS00MyAxMDIgLTQzIDIxMyBxMCAxMTEgNDMgMjEzIHE0MiA5OCAxMTcuNSAxNzMuNSBxNzUuNSA3NS41IDE3My41IDExNy41IHExMDIgNDMgMjEzIDQzIFpNNDIxOSAzMDQ3IHExMTEgMCAyMTMgLTQzIHE5OCAtNDIgMTczLjUgLTExNy41IHE3NS41IC03NS41IDExNy41IC0xNzMuNSBxNDMgLTEwMiA0MyAtMjEzIHEwIC0xMTEgLTQzIC0yMTMgcS00MiAtOTggLTExNy41IC0xNzMuNSBxLTc1LjUgLTc1LjUgLTE3My41IC0xMTcuNSBxLTEwMiAtNDMgLTIxMy41IC00MyBxLTExMS41IDAgLTIxMi41IDQzIHEtOTggNDIgLTE3NCAxMTcuNSBxLTc2IDc1LjUgLTExNyAxNzMuNSBxLTQzIDEwMiAtNDMgMjEzIHEwIDExMSA0MyAyMTMgcTQxIDk4IDExNyAxNzMuNSBxNzYgNzUuNSAxNzQgMTE3LjUgcTEwMSA0MyAyMTMgNDMgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0icGF1c2UiIHVuaWNvZGU9IiYjeGVhMGM7IiBkPSJNOTM4IDQwNjMgbDAgLTMxMjUgbDEyNTAgMCBsMCAzMTI1IGwtMTI1MCAwIFpNMjgxMyA0MDYzIGwwIC0zMTI1IGwxMjUwIDAgbDAgMzEyNSBsLTEyNTAgMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJwbGF5IiB1bmljb2RlPSImI3hlYTBkOyIgZD0iTTYyNSA0Mzc1IGwzNzUwIC0xODc1IGwtMzc1MCAtMTg3NSBsMCAzNzUwIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InRyaWFuZ2xlLXMiIHVuaWNvZGU9IiYjeGVhMGU7IiBkPSJNMTI1MCAzMTI1IGwxMjUwIC0xMjUwIGwxMjUwIDEyNDggbC0yNTAwIDIgWiIgLz48L2ZvbnQ+PC9kZWZzPjwvc3ZnPg=="
        }, 119: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5), o = new (n.n(r).a)({
                data: function () {
                    return {isMobile: !1}
                }, watch: {
                    isMobile: function (e) {
                        this.$emit("changed", e)
                    }
                }, created: function () {
                    window.addEventListener("resize", this.handleWindowResize), this.handleWindowResize()
                }, beforeDestroy: function () {
                    window.removeEventListener("resize", this.handleWindowResize)
                }, methods: {
                    handleWindowResize: function () {
                        this.isMobile = document.documentElement.clientWidth < 1024
                    }
                }
            });
            t.default = {
                data: function () {
                    return {isMobile: !1}
                }, mounted: function () {
                    o.$on("changed", this.onIsMobileChanged), this.isMobile = o.isMobile
                }, beforeDestroy: function () {
                    o.$off("changed", this.onIsMobileChanged)
                }, methods: {
                    onIsMobileChanged: function (e) {
                        this.isMobile = e
                    }
                }
            }
        }, 12: function (e, t) {
            e.exports = n(149)
        }, 126: function (e, t, n) {
            "use strict";
            var r = n(47);
            n.n(r).a
        }, 127: function (e, t, n) {
            (t = n(1)(!1)).push([e.i, "li.active[data-v-33ba3302]{box-shadow:inset -4px 0 var(--color-primary)}.action--disabled[data-v-33ba3302]{pointer-events:none;opacity:.5}.action--disabled[data-v-33ba3302]:hover,.action--disabled[data-v-33ba3302]:focus{cursor:default;opacity:.5}.action--disabled *[data-v-33ba3302]{opacity:1 !important}.action-button[data-v-33ba3302]{display:flex;align-items:flex-start;width:100%;height:auto;margin:0;padding:0;padding-left:14px;cursor:pointer;white-space:nowrap;opacity:.7;color:var(--color-main-text);border:0;border-radius:0;background-color:transparent;box-shadow:none;font-weight:normal;line-height:44px}.action-button[data-v-33ba3302]:hover,.action-button[data-v-33ba3302]:focus{opacity:1}.action-button>span[data-v-33ba3302]{cursor:pointer;white-space:nowrap}.action-button__icon[data-v-33ba3302]{width:44px;height:44px;opacity:1;background-position:14px center;background-size:16px}.action-button p[data-v-33ba3302]{width:150px;padding:7px 0;margin:auto;cursor:pointer;text-align:left;line-height:1.6em}.action-button__longtext[data-v-33ba3302]{cursor:pointer;white-space:pre-wrap}.action-button__title[data-v-33ba3302]{font-weight:bold}\n", ""]), e.exports = t
        }, 13: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n(3);
            n(40),
                /**
                 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
                 *
                 * @author Julius Härtl <jus@bitgrid.net>
                 * @author John Molakvoæ <skjnldsv@protonmail.com>
                 *
                 * @license GNU AGPL version 3 or any later version
                 *
                 * This program is free software: you can redistribute it and/or modify
                 * it under the terms of the GNU Affero General Public License as
                 * published by the Free Software Foundation, either version 3 of the
                 * License, or (at your option) any later version.
                 *
                 * This program is distributed in the hope that it will be useful,
                 * but WITHOUT ANY WARRANTY; without even the implied warranty of
                 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
                 * GNU Affero General Public License for more details.
                 *
                 * You should have received a copy of the GNU Affero General Public License
                 * along with this program. If not, see <http://www.gnu.org/licenses/>.
                 *
                 */
                r.VTooltip.options.defaultTemplate = '<div class="vue-tooltip" role="tooltip" data-v-'.concat("e1f55ce", '><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'), r.VTooltip.options.defaultHtml = !1, t.default = r.VTooltip
        }, 137: function (e, t) {
        }, 14: function (e, t) {
            e.exports = n(151)
        }, 15: function (e, t) {
            e.exports = n(152)
        }, 16: function (e, t, n) {
            "use strict";
            n(12), n(28);
            var r = n(5), o = n.n(r);
            /**
             * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
             *
             * @author John Molakvoæ <skjnldsv@protonmail.com>
             *
             * @license GNU AGPL version 3 or any later version
             *
             * This program is free software: you can redistribute it and/or modify
             * it under the terms of the GNU Affero General Public License as
             * published by the Free Software Foundation, either version 3 of the
             * License, or (at your option) any later version.
             *
             * This program is distributed in the hope that it will be useful,
             * but WITHOUT ANY WARRANTY; without even the implied warranty of
             * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
             * GNU Affero General Public License for more details.
             *
             * You should have received a copy of the GNU Affero General Public License
             * along with this program. If not, see <http://www.gnu.org/licenses/>.
             *
             */t.a = {
                before: function () {
                    this.$slots.default && "" !== this.text.trim() || (o.a.util.warn("".concat(this.$options.name, " cannot be empty and requires a meaningful text content"), this), this.$destroy(), this.$el.remove())
                }, beforeUpdate: function () {
                    this.text = this.getText()
                }, data: function () {
                    return {text: this.getText()}
                }, computed: {
                    isLongText: function () {
                        return this.text && this.text.trim().length > 20
                    }
                }, methods: {
                    getText: function () {
                        return this.$slots.default ? this.$slots.default[0].text.trim() : ""
                    }
                }
            }
        }, 17: function (e, t, n) {
            "use strict";
            n(4), n(21), n(23), n(30), t.a = function (e) {
                return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, e || 5)
            }
        }, 170: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n(14), o = n(43), i = n(70), u = {
                name: "AppNavigationIconCollapsible",
                props: {open: {type: Boolean, default: !0}},
                methods: {
                    onClick: function (e) {
                        this.$emit("click", e)
                    }
                }
            }, a = (n(218), n(0)), s = Object(a.a)(u, (function () {
                var e = this.$createElement;
                return (this._self._c || e)("button", {
                    staticClass: "icon-collapse",
                    class: {"icon-collapse--rotated": this.open},
                    on: {click: this.onClick}
                })
            }), [], !1, null, "24528cd0", null).exports, l = n(119), c = {
                name: "AppNavigationItem",
                components: {Actions: o.a, ActionButton: i.a, AppNavigationIconCollapsible: s},
                directives: {ClickOutside: r.directive},
                mixins: [l.default],
                props: {
                    title: {type: String, required: !0},
                    icon: {type: String, default: ""},
                    loading: {type: Boolean, default: !1},
                    to: {type: [String, Object], default: ""},
                    exact: {type: Boolean, default: !1},
                    allowCollapse: {type: Boolean, default: !1},
                    editable: {type: Boolean, default: !1},
                    editLabel: {type: String, default: ""},
                    editPlaceholder: {type: String, default: ""},
                    pinned: {type: Boolean, default: !1},
                    undo: {type: Boolean, default: !1},
                    open: {type: Boolean, default: !1},
                    menuOpen: {type: Boolean, default: !1},
                    forceMenu: {type: Boolean, default: !1},
                    menuIcon: {type: String, default: void 0}
                },
                data: function () {
                    return {newTitle: "", opened: this.open, editing: !1}
                },
                computed: {
                    collapsible: function () {
                        return this.allowCollapse && !!this.$slots.default
                    }, isIconShown: function () {
                        return !this.collapsible || this.collapsible && !this.isMobile
                    }, canHaveChildren: function () {
                        return "AppNavigationItem" !== this.$parent.$options._componentTag
                    }, hasChildren: function () {
                        return !!this.$slots.default
                    }, hasUtils: function () {
                        return !this.editing && !!(this.$slots.actions || this.$slots.counter || this.editable || this.undo)
                    }, navElement: function () {
                        return this.to ? {is: "router-link", tag: "li", to: this.to, exact: this.exact} : {is: "li"}
                    }, isActive: function () {
                        return this.to && this.$route === this.to
                    }
                },
                watch: {
                    open: function (e) {
                        this.opened = e
                    }
                },
                methods: {
                    onMenuToggle: function (e) {
                        this.$emit("update:menuOpen", e)
                    }, toggleCollapse: function () {
                        this.opened = !this.opened, this.$emit("update:open", this.opened)
                    }, onClick: function (e) {
                        this.$emit("click", e)
                    }, handleEdit: function () {
                        var e = this;
                        this.newTitle = this.title, this.editing = !0, this.onMenuToggle(!1), this.$nextTick((function () {
                            e.$refs.inputTitle.focus()
                        }))
                    }, cancelEdit: function () {
                        this.editing = !1
                    }, handleRename: function () {
                        this.$emit("update:title", this.newTitle), this.newTitle = "", this.editing = !1
                    }, handleUndo: function () {
                        this.$emit("undo")
                    }
                }
            }, A = (n(220), n(137)), p = n.n(A), f = Object(a.a)(c, (function () {
                var e, t = this, n = t.$createElement, r = t._self._c || n;
                return r("nav-element", t._b({
                    staticClass: "app-navigation-entry",
                    class: {
                        "app-navigation-entry--no-icon": !t.isIconShown,
                        "app-navigation-entry--opened": t.opened,
                        "app-navigation-entry--pinned": t.pinned,
                        "app-navigation-entry--editing": t.editing,
                        "app-navigation-entry--deleted": t.undo,
                        "app-navigation-entry--collapsible": t.collapsible,
                        active: t.isActive
                    },
                    attrs: {title: t.title}
                }, "nav-element", t.navElement, !1), [t.undo || t.editing ? t._e() : r("a", {
                    staticClass: "app-navigation-entry-link",
                    attrs: {href: "#"},
                    on: {click: t.onClick}
                }, [r("div", {
                    staticClass: "app-navigation-entry-icon",
                    class: (e = {"icon-loading-small": t.loading}, e[t.icon] = t.icon && t.isIconShown, e)
                }, [t.loading ? t._e() : t._t("icon")], 2), t._v(" "), r("span", {staticClass: "app-navigation-entry__title"}, [t._v(t._s(t.title))])]), t._v(" "), t.collapsible ? r("AppNavigationIconCollapsible", {
                    attrs: {open: t.opened},
                    on: {
                        click: function (e) {
                            return e.preventDefault(), e.stopPropagation(), t.toggleCollapse(e)
                        }
                    }
                }) : t._e(), t._v(" "), t.undo ? r("div", {staticClass: "app-navigation-entry__deleted"}, [r("div", {staticClass: "app-navigation-entry__deleted-description"}, [t._v("\n\t\t\t" + t._s(t.title) + "\n\t\t")])]) : t._e(), t._v(" "), t.hasUtils ? r("div", {staticClass: "app-navigation-entry__utils"}, [t._t("counter"), t._v(" "), r("Actions", {
                    attrs: {
                        "menu-align": "right",
                        open: t.menuOpen,
                        "force-menu": t.forceMenu,
                        "default-icon": t.menuIcon
                    }, on: {"update:open": t.onMenuToggle}
                }, [t.editable && !t.editing ? r("ActionButton", {
                    attrs: {icon: "icon-rename"},
                    on: {click: t.handleEdit}
                }, [t._v("\n\t\t\t\t" + t._s(t.editLabel) + "\n\t\t\t")]) : t._e(), t._v(" "), t.undo ? r("ActionButton", {
                    attrs: {icon: "app-navigation-entry__deleted-button icon-history"},
                    on: {click: t.handleUndo}
                }) : t._e(), t._v(" "), t._t("actions")], 2)], 2) : t._e(), t._v(" "), t.editing ? r("div", {staticClass: "app-navigation-entry__edit"}, [r("form", {
                    on: {
                        submit: function (e) {
                            return e.preventDefault(), t.handleRename(e)
                        }, keydown: function (e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey ? null : (e.preventDefault(), t.cancelEdit(e))
                        }
                    }
                }, [r("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.newTitle,
                        expression: "newTitle"
                    }],
                    ref: "inputTitle",
                    staticClass: "app-navigation-entry__edit-input",
                    attrs: {type: "text", placeholder: "" !== t.editPlaceholder ? t.editPlaceholder : t.title},
                    domProps: {value: t.newTitle},
                    on: {
                        input: function (e) {
                            e.target.composing || (t.newTitle = e.target.value)
                        }
                    }
                }), t._v(" "), r("button", {
                    staticClass: "icon-confirm",
                    attrs: {type: "submit"},
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), e.preventDefault(), t.handleRename(e)
                        }
                    }
                }), t._v(" "), r("button", {
                    staticClass: "icon-close",
                    attrs: {type: "reset"},
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), e.preventDefault(), t.cancelEdit(e)
                        }
                    }
                })])]) : t._e(), t._v(" "), t.canHaveChildren && t.hasChildren ? r("ul", {staticClass: "app-navigation-entry__children"}, [t._t("default")], 2) : t._e()], 1)
            }), [], !1, null, "6b9318e4", null);
            "function" == typeof p.a && p()(f);
            var d = f.exports;
            /**
             * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
             *
             * @author John Molakvoæ <skjnldsv@protonmail.com>
             *
             * @license GNU AGPL version 3 or any later version
             *
             * This program is free software: you can redistribute it and/or modify
             * it under the terms of the GNU Affero General Public License as
             * published by the Free Software Foundation, either version 3 of the
             * License, or (at your option) any later version.
             *
             * This program is distributed in the hope that it will be useful,
             * but WITHOUT ANY WARRANTY; without even the implied warranty of
             * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
             * GNU Affero General Public License for more details.
             *
             * You should have received a copy of the GNU Affero General Public License
             * along with this program. If not, see <http://www.gnu.org/licenses/>.
             *
             */t.default = d
        }, 18: function (e, t) {
            e.exports = n(32)
        }, 19: function (e, t) {
            e.exports = n(51)
        }, 2: function (e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = [], r = {}, o = 0; o < t.length; o++) {
                    var i = t[o], u = i[0], a = {id: e + ":" + o, css: i[1], media: i[2], sourceMap: i[3]};
                    r[u] ? r[u].parts.push(a) : n.push(r[u] = {id: u, parts: [a]})
                }
                return n
            }

            n.r(t), n.d(t, "default", (function () {
                return f
            }));
            var o = "undefined" != typeof document;
            if ("undefined" != typeof DEBUG && DEBUG && !o) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
            var i = {}, u = o && (document.head || document.getElementsByTagName("head")[0]), a = null, s = 0, l = !1,
                c = function () {
                }, A = null,
                p = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

            function f(e, t, n, o) {
                l = n, A = o || {};
                var u = r(e, t);
                return d(u), function (t) {
                    for (var n = [], o = 0; o < u.length; o++) {
                        var a = u[o];
                        (s = i[a.id]).refs--, n.push(s)
                    }
                    for (t ? d(u = r(e, t)) : u = [], o = 0; o < n.length; o++) {
                        var s;
                        if (0 === (s = n[o]).refs) {
                            for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                            delete i[s.id]
                        }
                    }
                }
            }

            function d(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t], r = i[n.id];
                    if (r) {
                        r.refs++;
                        for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
                        for (; o < n.parts.length; o++) r.parts.push(h(n.parts[o]));
                        r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
                    } else {
                        var u = [];
                        for (o = 0; o < n.parts.length; o++) u.push(h(n.parts[o]));
                        i[n.id] = {id: n.id, refs: 1, parts: u}
                    }
                }
            }

            function m() {
                var e = document.createElement("style");
                return e.type = "text/css", u.appendChild(e), e
            }

            function h(e) {
                var t, n, r = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
                if (r) {
                    if (l) return c;
                    r.parentNode.removeChild(r)
                }
                if (p) {
                    var o = s++;
                    r = a || (a = m()), t = D.bind(null, r, o, !1), n = D.bind(null, r, o, !0)
                } else r = m(), t = y.bind(null, r), n = function () {
                    r.parentNode.removeChild(r)
                };
                return t(e), function (r) {
                    if (r) {
                        if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                        t(e = r)
                    } else n()
                }
            }

            var g, v = (g = [], function (e, t) {
                return g[e] = t, g.filter(Boolean).join("\n")
            });

            function D(e, t, n, r) {
                var o = n ? "" : r.css;
                if (e.styleSheet) e.styleSheet.cssText = v(t, o); else {
                    var i = document.createTextNode(o), u = e.childNodes;
                    u[t] && e.removeChild(u[t]), u.length ? e.insertBefore(i, u[t]) : e.appendChild(i)
                }
            }

            function y(e, t) {
                var n = t.css, r = t.media, o = t.sourceMap;
                if (r && e.setAttribute("media", r), A.ssrId && e.setAttribute("data-vue-ssr-id", t.id), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), e.styleSheet) e.styleSheet.cssText = n; else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }
        }, 20: function (e, t) {
            e.exports = n(79)
        }, 21: function (e, t) {
            e.exports = n(52)
        }, 218: function (e, t, n) {
            "use strict";
            var r = n(100);
            n.n(r).a
        }, 219: function (e, t, n) {
            var r = n(1), o = n(7), i = n(8), u = n(9), a = n(10), s = n(11);
            t = r(!1);
            var l = o(i), c = o(u), A = o(a), p = o(s);
            t.push([e.i, '@font-face{font-family:"iconfont-vue-e1f55ce";src:url(' + l + ");src:url(" + l + ') format("embedded-opentype"),url(' + c + ') format("woff"),url(' + A + ') format("truetype"),url(' + p + ') format("svg")}.icon[data-v-24528cd0]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-24528cd0]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-left[data-v-24528cd0]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-right-double[data-v-24528cd0]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-right[data-v-24528cd0]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.breadcrumb[data-v-24528cd0]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.checkmark[data-v-24528cd0]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.close[data-v-24528cd0]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.confirm[data-v-24528cd0]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.info[data-v-24528cd0]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.menu[data-v-24528cd0]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.more[data-v-24528cd0]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.pause[data-v-24528cd0]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.play[data-v-24528cd0]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.triangle-s[data-v-24528cd0]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon-collapse[data-v-24528cd0]{position:absolute;z-index:105;width:44px;height:44px;margin:0;padding:0;transition:opacity var(--animation-quick) ease-in-out;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);color:black;border:none;border-radius:0;outline:none !important;background-color:transparent;box-shadow:none;font-size:18px}.icon-collapse[data-v-24528cd0]:before{font-family:"iconfont-vue-e1f55ce";font-style:normal;font-weight:400;content:""}.icon-collapse[data-v-24528cd0]:hover{color:var(--color-primary)}.icon-collapse--rotated[data-v-24528cd0]{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);color:var(--color-main-text)}.icon-collapse--rotated[data-v-24528cd0]:hover{color:var(--color-primary)}\n', ""]), e.exports = t
        }, 22: function (e, t) {
            e.exports = n(153)
        }, 220: function (e, t, n) {
            "use strict";
            var r = n(101);
            n.n(r).a
        }, 221: function (e, t, n) {
            var r = n(1), o = n(7), i = n(8), u = n(9), a = n(10), s = n(11);
            t = r(!1);
            var l = o(i), c = o(u), A = o(a), p = o(s);
            t.push([e.i, '@font-face{font-family:"iconfont-vue-e1f55ce";src:url(' + l + ");src:url(" + l + ') format("embedded-opentype"),url(' + c + ') format("woff"),url(' + A + ') format("truetype"),url(' + p + ') format("svg")}.icon[data-v-6b9318e4]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-6b9318e4]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-left[data-v-6b9318e4]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-right-double[data-v-6b9318e4]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-right[data-v-6b9318e4]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.breadcrumb[data-v-6b9318e4]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.checkmark[data-v-6b9318e4]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.close[data-v-6b9318e4]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.confirm[data-v-6b9318e4]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.info[data-v-6b9318e4]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.menu[data-v-6b9318e4]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.more[data-v-6b9318e4]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.pause[data-v-6b9318e4]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.play[data-v-6b9318e4]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.triangle-s[data-v-6b9318e4]:before{font-family:"iconfont-vue-e1f55ce";content:""}.app-navigation-entry[data-v-6b9318e4]{position:relative;display:flex;flex-shrink:0;flex-wrap:wrap;order:1;box-sizing:border-box;width:100%;min-height:44px}.app-navigation-entry.active>a[data-v-6b9318e4],.app-navigation-entry.active>a ~ .app-navigation-entry__utils[data-v-6b9318e4]{background-color:var(--color-primary-light) !important}.app-navigation-entry.app-navigation-entry--deleted>ul[data-v-6b9318e4],.app-navigation-entry.app-navigation-entry--collapsible:not(.app-navigation-entry--opened)>ul[data-v-6b9318e4]{display:none}.app-navigation-entry .app-navigation-entry-link[data-v-6b9318e4]{z-index:100;display:flex;overflow:hidden;flex:1 1 0;box-sizing:border-box;min-height:44px;padding:0;padding-right:14px;white-space:nowrap;color:var(--color-main-text);background-repeat:no-repeat;background-position:14px center;background-size:16px 16px;line-height:44px}.app-navigation-entry .app-navigation-entry-link[data-v-6b9318e4]:hover,.app-navigation-entry .app-navigation-entry-link:hover ~ .app-navigation-entry__utils[data-v-6b9318e4],.app-navigation-entry .app-navigation-entry-link[data-v-6b9318e4]:focus,.app-navigation-entry .app-navigation-entry-link:focus ~ .app-navigation-entry__utils[data-v-6b9318e4]{background-color:var(--color-background-hover)}.app-navigation-entry .app-navigation-entry-link.active[data-v-6b9318e4],.app-navigation-entry .app-navigation-entry-link[data-v-6b9318e4]:active,.app-navigation-entry .app-navigation-entry-link:active ~ .app-navigation-entry__utils[data-v-6b9318e4]{background-color:var(--color-primary-light)}.app-navigation-entry .app-navigation-entry-link .app-navigation-entry-icon[data-v-6b9318e4]{display:flex;align-items:center;flex:0 0 44px;justify-content:center;width:44px;height:44px;background-size:16px 16px}.app-navigation-entry .app-navigation-entry-link .app-navigation-entry__title[data-v-6b9318e4]{overflow:hidden;max-width:100%;white-space:nowrap;text-overflow:ellipsis}.app-navigation-entry .app-navigation-entry__children[data-v-6b9318e4]{position:relative;display:flex;flex:0 1 auto;flex-direction:column;width:100%}.app-navigation-entry .app-navigation-entry__children .app-navigation-entry[data-v-6b9318e4]{display:inline-flex;flex-wrap:wrap;padding-left:44px}.app-navigation-entry__deleted[data-v-6b9318e4]{display:inline-flex;flex:1 1 0;padding-left:44px !important}.app-navigation-entry__deleted .app-navigation-entry__deleted-description[data-v-6b9318e4]{position:relative;overflow:hidden;flex:1 1 0;white-space:nowrap;text-overflow:ellipsis;line-height:44px}.app-navigation-entry__edit[data-v-6b9318e4]{flex:1 0 100%;padding-left:38px !important}.app-navigation-entry__edit form[data-v-6b9318e4]{display:flex;width:100%}.app-navigation-entry__edit form .app-navigation-entry__edit-input[data-v-6b9318e4]{flex:1 1 100%}.app-navigation-entry__edit form button[data-v-6b9318e4]{display:flex;align-items:center;justify-content:center;width:44px !important;color:var(--color-main-text);background:none;font-size:16px}.app-navigation-entry__edit form button[data-v-6b9318e4]::before{opacity:.7}.app-navigation-entry__edit form button[data-v-6b9318e4]:hover::before,.app-navigation-entry__edit form button[data-v-6b9318e4]:focus::before{opacity:1}.app-navigation-entry__edit form button.icon-confirm[data-v-6b9318e4]:before{font-family:"iconfont-vue-e1f55ce";font-style:normal;font-weight:400;content:""}.app-navigation-entry__edit form button.icon-close[data-v-6b9318e4]:before{font-family:"iconfont-vue-e1f55ce";font-style:normal;font-weight:400;content:""}.app-navigation-entry__edit form .icon-close[data-v-6b9318e4]{margin:0;border:none;background-color:transparent}.app-navigation-entry--collapsible .icon-collapse[data-v-6b9318e4]{visibility:hidden}.app-navigation-entry--collapsible.app-navigation-entry--no-icon a .app-navigation-entry-icon[data-v-6b9318e4],.app-navigation-entry--collapsible:hover a .app-navigation-entry-icon[data-v-6b9318e4],.app-navigation-entry--collapsible:focus a .app-navigation-entry-icon[data-v-6b9318e4]{visibility:hidden}.app-navigation-entry--collapsible.app-navigation-entry--no-icon .icon-collapse[data-v-6b9318e4],.app-navigation-entry--collapsible:hover .icon-collapse[data-v-6b9318e4],.app-navigation-entry--collapsible:focus .icon-collapse[data-v-6b9318e4]{visibility:visible}.app-navigation-entry--collapsible.app-navigation-entry--no-icon .app-navigation-entry__children li a[data-v-6b9318e4] :first-child,.app-navigation-entry--collapsible:hover .app-navigation-entry__children li a[data-v-6b9318e4] :first-child,.app-navigation-entry--collapsible:focus .app-navigation-entry__children li a[data-v-6b9318e4] :first-child{visibility:visible}.app-navigation-entry__utils[data-v-6b9318e4]{display:flex;align-items:center;flex:0 1 auto}.app-navigation-entry__utils .action-item[data-v-6b9318e4]{margin-right:2px}.app-navigation-entry--editing .app-navigation-entry-edit[data-v-6b9318e4]{z-index:250;opacity:1}.app-navigation-entry--deleted .app-navigation-entry-deleted[data-v-6b9318e4]{z-index:250;transform:translateX(0)}.app-navigation-entry--pinned[data-v-6b9318e4]{order:2;margin-top:auto}.app-navigation-entry--pinned ~ .app-navigation-entry--pinned[data-v-6b9318e4]{margin-top:0}\n', ""]), e.exports = t
        }, 23: function (e, t) {
            e.exports = n(80)
        }, 24: function (e, t) {
            e.exports = n(154)
        }, 25: function (e, t) {
            e.exports = n(50)
        }, 26: function (e, t, n) {
            "use strict";
            n(18), n(4), n(19), n(20), n(24);
            var r = n(16), o = (n(12), function (e, t) {
                for (var n = e.$parent; n;) {
                    if (n.$options.name === t) return n;
                    n = n.$parent
                }
            });
            t.a = {
                mixins: [r.a],
                props: {
                    icon: {type: String, default: ""},
                    title: {type: String, default: ""},
                    closeAfterClick: {type: Boolean, default: !1},
                    ariaLabel: {type: String, default: ""}
                },
                computed: {
                    isIconUrl: function () {
                        try {
                            return new URL(this.icon)
                        } catch (e) {
                            return !1
                        }
                    }
                },
                methods: {
                    onClick: function (e) {
                        if (this.$emit("click", e), this.closeAfterClick) {
                            var t = o(this, "Actions");
                            t && t.closeMenu && t.closeMenu()
                        }
                    }
                }
            }
        }, 27: function (e, t) {
            e.exports = n(155)
        }, 28: function (e, t) {
            e.exports = n(156)
        }, 29: function (e, t, n) {
            var r = n(67);
            "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals), (0, n(2).default)("640a212a", r, !0, {})
        }, 3: function (e, t) {
            e.exports = n(157)
        }, 30: function (e, t) {
            e.exports = n(81)
        }, 31: function (e, t, n) {
            "use strict";
            n(25), n(15), n(65), n(12);
            var r = n(5), o = n.n(r);
            t.a = function (e, t, n) {
                if (void 0 !== e) for (var r = e.length - 1; r >= 0; r--) {
                    var i = e[r], u = !i.componentOptions && i.tag && -1 === t.indexOf(i.tag),
                        a = !!i.componentOptions && "string" == typeof i.componentOptions.tag,
                        s = a && -1 === t.indexOf(i.componentOptions.tag);
                    (u || !a || s) && ((u || s) && o.a.util.warn("".concat(u ? i.tag : i.componentOptions.tag, " is not allowed inside the ").concat(n.$options.name, " component"), n), e.splice(r, 1))
                }
            }
        }, 37: function (e, t) {
        }, 4: function (e, t) {
            e.exports = n(49)
        }, 40: function (e, t, n) {
            var r = n(41);
            "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals), (0, n(2).default)("941c791e", r, !0, {})
        }, 41: function (e, t, n) {
            (t = n(1)(!1)).push([e.i, ".vue-tooltip[data-v-e1f55ce]{position:absolute;z-index:100000;right:auto;left:auto;display:block;margin:0;margin-top:-3px;padding:10px 0;text-align:left;text-align:start;white-space:normal;text-decoration:none;letter-spacing:normal;word-spacing:normal;text-transform:none;word-wrap:normal;word-break:normal;opacity:0;text-shadow:none;font-family:'Nunito', 'Open Sans', Frutiger, Calibri, 'Myriad Pro', Myriad, sans-serif;font-size:12px;font-weight:normal;font-style:normal;line-height:1.6;line-break:auto;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.vue-tooltip[data-v-e1f55ce][x-placement^='top'] .tooltip-arrow{bottom:0;margin-top:0;margin-bottom:0;border-width:10px 10px 0 10px;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-e1f55ce][x-placement^='bottom'] .tooltip-arrow{top:0;margin-top:0;margin-bottom:0;border-width:0 10px 10px 10px;border-top-color:transparent;border-right-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-e1f55ce][x-placement^='right'] .tooltip-arrow{right:100%;margin-right:0;margin-left:0;border-width:10px 10px 10px 0;border-top-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-e1f55ce][x-placement^='left'] .tooltip-arrow{left:100%;margin-right:0;margin-left:0;border-width:10px 0 10px 10px;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent}.vue-tooltip[data-v-e1f55ce][aria-hidden='true']{visibility:hidden;transition:opacity .15s, visibility .15s;opacity:0}.vue-tooltip[data-v-e1f55ce][aria-hidden='false']{visibility:visible;transition:opacity .15s;opacity:1}.vue-tooltip[data-v-e1f55ce] .tooltip-inner{max-width:350px;padding:5px 8px;text-align:center;color:var(--color-main-text);border-radius:var(--border-radius);background-color:var(--color-main-background)}.vue-tooltip[data-v-e1f55ce] .tooltip-arrow{position:absolute;z-index:1;width:0;height:0;margin:0;border-style:solid;border-color:var(--color-main-background)}\n", ""]), e.exports = t
        }, 43: function (e, t, n) {
            "use strict";
            n(25), n(46), n(15);
            var r = n(14), o = n(13), i = n(17), u = (n(64), function (e) {
                    var t = e.getBoundingClientRect(), n = document.documentElement.clientHeight,
                        r = document.documentElement.clientWidth, o = Object.assign({});
                    return o.top = t.top < 0, o.left = t.left < 0, o.bottom = t.bottom > n, o.right = t.right > r, o.any = o.top || o.left || o.bottom || o.right, o.all = o.top && o.left && o.bottom && o.right, o.offsetY = o.top ? t.top : o.bottom ? t.bottom - n : 0, o.offsetX = o.left ? t.left : o.right ? t.right - r : 0, o
                }), a = n(31), s = n(6),
                l = ["ActionButton", "ActionCheckbox", "ActionInput", "ActionLink", "ActionRadio", "ActionRouter", "ActionSeparator", "ActionText", "ActionTextEditable"],
                c = {
                    name: "Actions",
                    directives: {ClickOutside: r.directive, tooltip: o.default},
                    props: {
                        open: {type: Boolean, default: !1},
                        forceMenu: {type: Boolean, default: !1},
                        menuAlign: {
                            type: String, default: "center", validator: function (e) {
                                return ["left", "center", "right"].indexOf(e) > -1
                            }
                        },
                        defaultIcon: {type: String, default: "action-item__menutoggle--default-icon"},
                        ariaLabel: {type: String, default: Object(s.b)("Actions")}
                    },
                    data: function () {
                        return {
                            actions: [],
                            opened: this.open,
                            focusIndex: 0,
                            randomId: "menu-" + Object(i.a)(),
                            offsetX: 0,
                            offsetY: 0,
                            offsetYArrow: 0,
                            rotateArrow: !1,
                            children: this.$children
                        }
                    },
                    computed: {
                        hasMultipleActions: function () {
                            return this.actions.length > 1
                        }, isValidSingleAction: function () {
                            return 1 === this.actions.length && null !== this.firstActionElement
                        }, firstActionVNode: function () {
                            return this.actions[0]
                        }, firstAction: function () {
                            return this.children[0] ? this.children[0] : {}
                        }, firstActionBinding: function () {
                            if (this.firstActionVNode && this.firstActionVNode.componentOptions) {
                                var e = this.firstActionVNode.componentOptions.tag;
                                if ("ActionLink" === e) return {
                                    is: "a",
                                    href: this.firstAction.href,
                                    target: this.firstAction.target,
                                    "aria-label": this.firstAction.ariaLabel
                                };
                                if ("ActionRouter" === e) return {
                                    is: "router-link",
                                    to: this.firstAction.to,
                                    exact: this.firstAction.exact,
                                    "aria-label": this.firstAction.ariaLabel
                                };
                                if ("ActionButton" === e) return {
                                    is: "button",
                                    "aria-label": this.firstAction.ariaLabel
                                }
                            }
                            return null
                        }, firstActionEvent: function () {
                            return this.firstActionVNode && this.firstActionVNode.componentOptions && this.firstActionVNode.componentOptions.listeners && this.firstActionVNode.componentOptions.listeners.click
                        }, firstActionEventBinding: function () {
                            return this.firstActionEvent ? "click" : null
                        }, firstActionClass: function () {
                            var e = this.firstActionVNode && this.firstActionVNode.data.staticClass,
                                t = this.firstActionVNode && this.firstActionVNode.data.class;
                            return "".concat(e, " ").concat(t)
                        }
                    },
                    watch: {
                        open: function (e) {
                            var t = this;
                            this.opened = e, this.opened && this.$nextTick((function () {
                                t.onOpen()
                            }))
                        }
                    },
                    beforeMount: function () {
                        this.initActions(), Object(a.a)(this.$slots.default, l, this)
                    },
                    beforeUpdate: function () {
                        this.initActions(), Object(a.a)(this.$slots.default, l, this)
                    },
                    methods: {
                        toggleMenu: function (e) {
                            var t = this;
                            this.opened = !this.opened, this.opened ? (this.$nextTick((function () {
                                t.onOpen(), t.focusFirstAction()
                            })), this.$emit("open", e)) : (this.offsetX = 0, this.offsetY = 0, this.offsetYArrow = 0, this.rotateArrow = !1), this.$emit("update:open", this.opened)
                        }, closeMenu: function (e) {
                            this.opened && (this.$emit("update:open", !1), this.$emit("close", e)), this.opened = !1, this.offsetX = 0, this.offsetY = 0, this.offsetYArrow = 0, this.rotateArrow = !1
                        }, onOpen: function () {
                            if (this.offsetX = 0, this.offsetY = 0, this.offsetYArrow = 0, this.rotateArrow = !1, "center" === this.menuAlign) {
                                var e = u(this.$refs.menu);
                                (e.left || e.right) && (this.offsetX = e.offsetX > 0 ? Math.round(e.offsetX) + 5 : Math.round(e.offsetX) - 5), e.bottom && (this.offsetY = 0 - Math.round(this.$refs.menu.clientHeight) - 42, this.offsetYArrow = Math.round(this.$refs.menu.clientHeight) + 18, this.rotateArrow = !0)
                            }
                        }, onMouseFocusAction: function (e) {
                            if (document.activeElement !== e.target) {
                                var t = e.target.closest("li");
                                if (t) {
                                    var n = t.querySelector(".focusable");
                                    if (n) {
                                        var r = this.$refs.menu.querySelectorAll(".focusable"),
                                            o = Array.prototype.indexOf.call(r, n);
                                        o > -1 && (this.focusIndex = o, this.focusAction())
                                    }
                                }
                            }
                        }, removeCurrentActive: function () {
                            var e = this.$refs.menu.querySelector("li.active");
                            e && e.classList.remove("active")
                        }, focusAction: function () {
                            var e = this.$refs.menu.querySelectorAll(".focusable")[this.focusIndex];
                            if (e) {
                                var t = e.closest("li");
                                e.focus(), t && (this.removeCurrentActive(), t.classList.add("active"))
                            }
                        }, focusPreviousAction: function () {
                            this.focusIndex = Math.max(this.focusIndex - 1, 0), this.focusAction()
                        }, focusNextAction: function () {
                            this.focusIndex = Math.min(this.focusIndex + 1, this.$refs.menu.querySelectorAll(".focusable").length - 1), this.focusAction()
                        }, focusFirstAction: function () {
                            this.focusIndex = 0, this.focusAction()
                        }, focusLastAction: function () {
                            this.focusIndex = this.$el.querySelectorAll(".focusable").length - 1, this.focusAction()
                        }, execFirstAction: function (e) {
                            this.firstActionEvent && this.firstActionEvent(e)
                        }, initActions: function () {
                            this.actions = (this.$slots.default || []).filter((function (e) {
                                return !!e && !!e.componentOptions
                            }))
                        }
                    }
                }, A = (n(66), n(0)), p = n(37), f = n.n(p), d = Object(A.a)(c, (function () {
                    var e = this, t = e.$createElement, n = e._self._c || t;
                    return e.isValidSingleAction && !e.forceMenu ? n("element", e._b({
                        directives: [{
                            name: "tooltip",
                            rawName: "v-tooltip.auto",
                            value: e.firstAction.text,
                            expression: "firstAction.text",
                            modifiers: {auto: !0}
                        }],
                        staticClass: "action-item action-item--single",
                        class: [e.firstAction.icon, e.firstActionClass],
                        attrs: {rel: "noreferrer noopener"},
                        on: e._d({}, [e.firstActionEventBinding, e.execFirstAction])
                    }, "element", e.firstActionBinding, !1), [n("span", {
                        attrs: {
                            "aria-hidden": !0,
                            hidden: ""
                        }
                    }, [e._t("default")], 2)]) : n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.hasMultipleActions || e.forceMenu,
                            expression: "hasMultipleActions || forceMenu"
                        }, {
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: e.closeMenu,
                            expression: "closeMenu"
                        }], staticClass: "action-item", class: {"action-item--open": e.opened}, on: {
                            keydown: [function (t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "up", 38, t.key, ["Up", "ArrowUp"]) || t.ctrlKey || t.shiftKey || t.altKey || t.metaKey ? null : (t.preventDefault(), e.focusPreviousAction(t))
                            }, function (t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "down", 40, t.key, ["Down", "ArrowDown"]) || t.ctrlKey || t.shiftKey || t.altKey || t.metaKey ? null : (t.preventDefault(), e.focusNextAction(t))
                            }, function (t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "tab", 9, t.key, "Tab") ? null : t.shiftKey ? (t.preventDefault(), e.focusPreviousAction(t)) : null
                            }, function (t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "page-up", void 0, t.key, void 0) || t.ctrlKey || t.shiftKey || t.altKey || t.metaKey ? null : (t.preventDefault(), e.focusFirstAction(t))
                            }, function (t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "page-down", void 0, t.key, void 0) || t.ctrlKey || t.shiftKey || t.altKey || t.metaKey ? null : (t.preventDefault(), e.focusLastAction(t))
                            }, function (t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"]) || t.ctrlKey || t.shiftKey || t.altKey || t.metaKey ? null : (t.preventDefault(), e.closeMenu(t))
                            }]
                        }
                    }, [n("a", {
                        staticClass: "icon action-item__menutoggle",
                        class: e.defaultIcon,
                        attrs: {
                            href: "#",
                            "aria-label": e.ariaLabel,
                            "aria-haspopup": "true",
                            "aria-controls": e.randomId,
                            "aria-expanded": e.opened
                        },
                        on: {
                            click: function (t) {
                                return t.preventDefault(), e.toggleMenu(t)
                            }, keydown: function (t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "space", 32, t.key, [" ", "Spacebar"]) || t.ctrlKey || t.shiftKey || t.altKey || t.metaKey ? null : (t.preventDefault(), e.toggleMenu(t))
                            }
                        }
                    }), e._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.opened,
                            expression: "opened"
                        }],
                        ref: "menu",
                        staticClass: "action-item__menu",
                        class: ["menu-" + e.menuAlign, {open: e.opened}],
                        style: {marginRight: e.offsetX + "px", marginTop: e.offsetY + "px"},
                        attrs: {tabindex: "-1"},
                        on: {mousemove: e.onMouseFocusAction}
                    }, [n("div", {
                        staticClass: "action-item__menu_arrow",
                        style: {transform: "translateX(" + e.offsetX + "px) translateY(" + e.offsetYArrow + "px) " + (e.rotateArrow ? " rotate(180deg)" : "")}
                    }), e._v(" "), n("ul", {
                        attrs: {
                            id: e.randomId,
                            tabindex: "-1"
                        }
                    }, [e.opened ? [e._t("default")] : e._e()], 2)])])
                }), [], !1, null, "7b368b0c", null);
            "function" == typeof f.a && f()(d), t.a = d.exports
        }, 46: function (e, t) {
            e.exports = n(78)
        }, 47: function (e, t, n) {
            var r = n(127);
            "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals), (0, n(2).default)("75b9f902", r, !0, {})
        }, 5: function (e, t) {
            e.exports = n(0)
        }, 54: function (e, t) {
        }, 6: function (e, t, n) {
            "use strict";
            n.d(t, "b", (function () {
                return a
            })), n.d(t, "a", (function () {
                return u
            })), n(22);
            var r = n(27), o = Object(r.getGettextBuilder)().detectLocale();
            [{
                locale: "cs_CZ", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "Pavel Borecki <pavel.borecki@gmail.com>, 2020",
                        "Language-Team": "Czech (Czech Republic) (https://www.transifex.com/nextcloud/teams/64236/cs_CZ/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "cs_CZ",
                        "Plural-Forms": "nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nPavel Borecki <pavel.borecki@gmail.com>, 2020\n"},
                                msgstr: ["Last-Translator: Pavel Borecki <pavel.borecki@gmail.com>, 2020\nLanguage-Team: Czech (Czech Republic) (https://www.transifex.com/nextcloud/teams/64236/cs_CZ/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: cs_CZ\nPlural-Forms: nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:170"},
                                msgstr: ["{tag} (neviditelný)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:173"},
                                msgstr: ["{tag} (omezený)"]
                            },
                            Actions: {
                                msgid: "Actions",
                                comments: {reference: "src/components/Actions/Actions.vue:194"},
                                msgstr: ["Akce"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["Zvolit"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:117"},
                                msgstr: ["Zavřít"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:166"},
                                msgstr: ["Následující"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:172\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["Žádné výsledky"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Pozastavit prezentaci"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:144"},
                                msgstr: ["Předchozí"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["Vybrat štítek"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["Nastavení"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Spustit prezentaci"]
                            }
                        }
                    }
                }
            }, {
                locale: "de", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "Philipp Fischbeck <pfischbeck@googlemail.com>, 2020",
                        "Language-Team": "German (https://www.transifex.com/nextcloud/teams/64236/de/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "de",
                        "Plural-Forms": "nplurals=2; plural=(n != 1);"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nMark Ziegler <mark.ziegler@rakekniven.de>, 2020\nPhilipp Fischbeck <pfischbeck@googlemail.com>, 2020\n"},
                                msgstr: ["Last-Translator: Philipp Fischbeck <pfischbeck@googlemail.com>, 2020\nLanguage-Team: German (https://www.transifex.com/nextcloud/teams/64236/de/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: de\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:170"},
                                msgstr: ["{tag} (unsichtbar)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:173"},
                                msgstr: ["{tag} (eingeschränkt)"]
                            },
                            Actions: {
                                msgid: "Actions",
                                comments: {reference: "src/components/Actions/Actions.vue:194"},
                                msgstr: ["Aktionen"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["Auswählen"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:117"},
                                msgstr: ["Schließen"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:166"},
                                msgstr: ["Weiter"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:172\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["Keine Ergebnisse"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Diashow pausieren"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:144"},
                                msgstr: ["Vorherige"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["Schlagwort auswählen"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["Einstellungen"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Diashow starten"]
                            }
                        }
                    }
                }
            }, {
                locale: "de_DE", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "Philipp Fischbeck <pfischbeck@googlemail.com>, 2020",
                        "Language-Team": "German (Germany) (https://www.transifex.com/nextcloud/teams/64236/de_DE/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "de_DE",
                        "Plural-Forms": "nplurals=2; plural=(n != 1);"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nMark Ziegler <mark.ziegler@rakekniven.de>, 2020\nPhilipp Fischbeck <pfischbeck@googlemail.com>, 2020\n"},
                                msgstr: ["Last-Translator: Philipp Fischbeck <pfischbeck@googlemail.com>, 2020\nLanguage-Team: German (Germany) (https://www.transifex.com/nextcloud/teams/64236/de_DE/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: de_DE\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:170"},
                                msgstr: ["{tag} (unsichtbar)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:173"},
                                msgstr: ["{tag} (eingeschränkt)"]
                            },
                            Actions: {
                                msgid: "Actions",
                                comments: {reference: "src/components/Actions/Actions.vue:194"},
                                msgstr: ["Aktionen"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["Auswählen"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:117"},
                                msgstr: ["Schließen"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:166"},
                                msgstr: ["Weiter"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:172\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["Keine Ergebnisse"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Diashow pausieren"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:144"},
                                msgstr: ["Vorherige"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["Schlagwort auswählen"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["Einstellungen"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Diashow starten"]
                            }
                        }
                    }
                }
            }, {
                locale: "el", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "george k <norhorn@gmail.com>, 2020",
                        "Language-Team": "Greek (https://www.transifex.com/nextcloud/teams/64236/el/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "el",
                        "Plural-Forms": "nplurals=2; plural=(n != 1);"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nEfstathios Iosifidis <iefstathios@gmail.com>, 2020\ngeorge k <norhorn@gmail.com>, 2020\n"},
                                msgstr: ["Last-Translator: george k <norhorn@gmail.com>, 2020\nLanguage-Team: Greek (https://www.transifex.com/nextcloud/teams/64236/el/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: el\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:170"},
                                msgstr: ["{tag} (αόρατο)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:173"},
                                msgstr: ["{tag} (περιορισμένο)"]
                            },
                            Actions: {
                                msgid: "Actions",
                                comments: {reference: "src/components/Actions/Actions.vue:194"},
                                msgstr: ["Ενέργειες"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["Επιλογή"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:117"},
                                msgstr: ["Κλείσιμο"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:166"},
                                msgstr: ["Επόμενο"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:172\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["Κανένα αποτέλεσμα"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Παύση προβολής διαφανειών"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:144"},
                                msgstr: ["Προηγούμενο"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["Επιλογή ετικέτας"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["Ρυθμίσεις"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Έναρξη προβολής διαφανειών"]
                            }
                        }
                    }
                }
            }, {
                locale: "eu", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "Asier Iturralde Sarasola <asier.iturralde@gmail.com>, 2020",
                        "Language-Team": "Basque (https://www.transifex.com/nextcloud/teams/64236/eu/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "eu",
                        "Plural-Forms": "nplurals=2; plural=(n != 1);"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nAsier Iturralde Sarasola <asier.iturralde@gmail.com>, 2020\n"},
                                msgstr: ["Last-Translator: Asier Iturralde Sarasola <asier.iturralde@gmail.com>, 2020\nLanguage-Team: Basque (https://www.transifex.com/nextcloud/teams/64236/eu/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: eu\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:169"},
                                msgstr: ["{tag} (ikusezina)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:172"},
                                msgstr: ["{tag} (mugatua)"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["Aukeratu"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:109"},
                                msgstr: ["Itxi"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:154"},
                                msgstr: ["Hurrengoa"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:169\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["Emaitzarik ez"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:290"},
                                msgstr: ["Pausatu diaporama"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:134"},
                                msgstr: ["Aurrekoa"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["Hautatu etiketa bat"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["Ezarpenak"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:290"},
                                msgstr: ["Hasi diaporama"]
                            }
                        }
                    }
                }
            }, {
                locale: "fr", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "Greg Greg <grena@grenabox.fr>, 2020",
                        "Language-Team": "French (https://www.transifex.com/nextcloud/teams/64236/fr/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "fr",
                        "Plural-Forms": "nplurals=2; plural=(n > 1);"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nBrendan Abolivier <transifex@brendanabolivier.com>, 2020\ngud bes <gudbes@protonmail.com>, 2020\nGreg Greg <grena@grenabox.fr>, 2020\n"},
                                msgstr: ["Last-Translator: Greg Greg <grena@grenabox.fr>, 2020\nLanguage-Team: French (https://www.transifex.com/nextcloud/teams/64236/fr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: fr\nPlural-Forms: nplurals=2; plural=(n > 1);\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:170"},
                                msgstr: ["{tag} (invisible)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:173"},
                                msgstr: ["{tag} (restreint)"]
                            },
                            Actions: {
                                msgid: "Actions",
                                comments: {reference: "src/components/Actions/Actions.vue:196"},
                                msgstr: ["Actions"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["Choisir"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:117"},
                                msgstr: ["Fermer"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:166"},
                                msgstr: ["Suivant"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:172\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["Aucun résultat"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Mettre le diaporama en pause"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:144"},
                                msgstr: ["Précédent"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["Sélectionnez une balise"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["Paramètres"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Démarrer le diaporama"]
                            }
                        }
                    }
                }
            }, {
                locale: "gl", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "Miguel Anxo Bouzada <mbouzada@gmail.com>, 2020",
                        "Language-Team": "Galician (https://www.transifex.com/nextcloud/teams/64236/gl/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "gl",
                        "Plural-Forms": "nplurals=2; plural=(n != 1);"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nMiguel Anxo Bouzada <mbouzada@gmail.com>, 2020\n"},
                                msgstr: ["Last-Translator: Miguel Anxo Bouzada <mbouzada@gmail.com>, 2020\nLanguage-Team: Galician (https://www.transifex.com/nextcloud/teams/64236/gl/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: gl\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:170"},
                                msgstr: ["{tag} (invisíbel)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:173"},
                                msgstr: ["{tag} (restrinxido)"]
                            },
                            Actions: {
                                msgid: "Actions",
                                comments: {reference: "src/components/Actions/Actions.vue:196"},
                                msgstr: ["Accións"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["Escoller"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:117"},
                                msgstr: ["Pechar"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:166"},
                                msgstr: ["Seguinte"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:172\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["Sen resultados"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Pausar o diaporama"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:144"},
                                msgstr: ["Anterir"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["Seleccione unha etiqueta"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["Axustes"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Iniciar o diaporama"]
                            }
                        }
                    }
                }
            }, {
                locale: "he", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "Yaron Shahrabani <sh.yaron@gmail.com>, 2020",
                        "Language-Team": "Hebrew (https://www.transifex.com/nextcloud/teams/64236/he/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "he",
                        "Plural-Forms": "nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n == 2 && n % 1 == 0) ? 1: (n % 10 == 0 && n % 1 == 0 && n > 10) ? 2 : 3;"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nYaron Shahrabani <sh.yaron@gmail.com>, 2020\n"},
                                msgstr: ["Last-Translator: Yaron Shahrabani <sh.yaron@gmail.com>, 2020\nLanguage-Team: Hebrew (https://www.transifex.com/nextcloud/teams/64236/he/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: he\nPlural-Forms: nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n == 2 && n % 1 == 0) ? 1: (n % 10 == 0 && n % 1 == 0 && n > 10) ? 2 : 3;\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:169"},
                                msgstr: ["{tag} (נסתר)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:172"},
                                msgstr: ["{tag} (מוגבל)"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["בחירה"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:109"},
                                msgstr: ["סגירה"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:154"},
                                msgstr: ["הבא"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:169\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["אין תוצאות"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:290"},
                                msgstr: ["השהיית מצגת"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:134"},
                                msgstr: ["הקודם"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["בחירת תגית"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["הגדרות"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:290"},
                                msgstr: ["התחלת המצגת"]
                            }
                        }
                    }
                }
            }, {
                locale: "it", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "Random_R, 2020",
                        "Language-Team": "Italian (https://www.transifex.com/nextcloud/teams/64236/it/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "it",
                        "Plural-Forms": "nplurals=2; plural=(n != 1);"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nRandom_R, 2020\n"},
                                msgstr: ["Last-Translator: Random_R, 2020\nLanguage-Team: Italian (https://www.transifex.com/nextcloud/teams/64236/it/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: it\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:170"},
                                msgstr: ["{tag} (invisibile)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:173"},
                                msgstr: ["{tag} (limitato)"]
                            },
                            Actions: {
                                msgid: "Actions",
                                comments: {reference: "src/components/Actions/Actions.vue:196"},
                                msgstr: ["Azioni"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["Scegli"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:117"},
                                msgstr: ["Chiudi"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:166"},
                                msgstr: ["Successivo"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:172\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["Nessun risultato"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Presentazione in pausa"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:144"},
                                msgstr: ["Precedente"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["Seleziona un'etichetta"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["Impostazioni"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Avvia presentazione"]
                            }
                        }
                    }
                }
            }, {
                locale: "lt_LT", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "Moo, 2020",
                        "Language-Team": "Lithuanian (Lithuania) (https://www.transifex.com/nextcloud/teams/64236/lt_LT/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "lt_LT",
                        "Plural-Forms": "nplurals=4; plural=(n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nMoo, 2020\n"},
                                msgstr: ["Last-Translator: Moo, 2020\nLanguage-Team: Lithuanian (Lithuania) (https://www.transifex.com/nextcloud/teams/64236/lt_LT/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: lt_LT\nPlural-Forms: nplurals=4; plural=(n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:169"},
                                msgstr: ["{tag} (nematoma)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:172"},
                                msgstr: ["{tag} (apribota)"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["Pasirinkti"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:109"},
                                msgstr: ["Užverti"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:154"},
                                msgstr: ["Kitas"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:169\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["Nėra rezultatų"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:290"},
                                msgstr: ["Pristabdyti skaidrių rodymą"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:134"},
                                msgstr: ["Ankstesnis"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["Pasirinkti žymę"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["Nustatymai"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:290"},
                                msgstr: ["Pradėti skaidrių rodymą"]
                            }
                        }
                    }
                }
            }, {
                locale: "lv", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "stendec <stendec@inbox.lv>, 2020",
                        "Language-Team": "Latvian (https://www.transifex.com/nextcloud/teams/64236/lv/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "lv",
                        "Plural-Forms": "nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n != 0 ? 1 : 2);"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nstendec <stendec@inbox.lv>, 2020\n"},
                                msgstr: ["Last-Translator: stendec <stendec@inbox.lv>, 2020\nLanguage-Team: Latvian (https://www.transifex.com/nextcloud/teams/64236/lv/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: lv\nPlural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n != 0 ? 1 : 2);\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:169"},
                                msgstr: ["{tag} (neredzams)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:172"},
                                msgstr: ["{tag} (ierobežots)"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["Izvēlēties"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:109"},
                                msgstr: ["Aizvērt"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:154"},
                                msgstr: ["Nākamais"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:169\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["Nav rezultātu"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:290"},
                                msgstr: ["Pauzēt slaidrādi"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:134"},
                                msgstr: ["Iepriekšējais"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["Izvēlēties birku"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["Iestatījumi"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:290"},
                                msgstr: ["Sākt slaidrādi"]
                            }
                        }
                    }
                }
            }, {
                locale: "mk", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "Сашко Тодоров, 2020",
                        "Language-Team": "Macedonian (https://www.transifex.com/nextcloud/teams/64236/mk/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "mk",
                        "Plural-Forms": "nplurals=2; plural=(n % 10 == 1 && n % 100 != 11) ? 0 : 1;"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nСашко Тодоров, 2020\n"},
                                msgstr: ["Last-Translator: Сашко Тодоров, 2020\nLanguage-Team: Macedonian (https://www.transifex.com/nextcloud/teams/64236/mk/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: mk\nPlural-Forms: nplurals=2; plural=(n % 10 == 1 && n % 100 != 11) ? 0 : 1;\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:169"},
                                msgstr: ["{tag} (невидливо)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:172"},
                                msgstr: ["{tag} (ограничено)"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["Избери"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:109"},
                                msgstr: ["Затвори"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:154"},
                                msgstr: ["Следно"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:169\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["Нема резултати"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:290"},
                                msgstr: ["Пузирај слајдшоу"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:134"},
                                msgstr: ["Предходно"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["Избери ознака"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["Параметри"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:290"},
                                msgstr: ["Стартувај слајдшоу"]
                            }
                        }
                    }
                }
            }, {
                locale: "nl", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "Arjan van S, 2020",
                        "Language-Team": "Dutch (https://www.transifex.com/nextcloud/teams/64236/nl/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "nl",
                        "Plural-Forms": "nplurals=2; plural=(n != 1);"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nRoeland Jago Douma <roeland@famdouma.nl>, 2020\nArjan van S, 2020\n"},
                                msgstr: ["Last-Translator: Arjan van S, 2020\nLanguage-Team: Dutch (https://www.transifex.com/nextcloud/teams/64236/nl/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: nl\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:170"},
                                msgstr: ["{tag} (onzichtbaar)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:173"},
                                msgstr: ["{tag} (beperkt)"]
                            },
                            Actions: {
                                msgid: "Actions",
                                comments: {reference: "src/components/Actions/Actions.vue:196"},
                                msgstr: ["Acties"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["Kies"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:117"},
                                msgstr: ["Sluiten"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:166"},
                                msgstr: ["Volgende"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:172\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["Geen resultaten"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Pauzeer diavoorstelling"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:144"},
                                msgstr: ["Vorige"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["Selecteer een label"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["Instellingen"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Start diavoorstelling"]
                            }
                        }
                    }
                }
            }, {
                locale: "oc", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "Quentin PAGÈS, 2020",
                        "Language-Team": "Occitan (post 1500) (https://www.transifex.com/nextcloud/teams/64236/oc/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "oc",
                        "Plural-Forms": "nplurals=2; plural=(n > 1);"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nQuentin PAGÈS, 2020\n"},
                                msgstr: ["Last-Translator: Quentin PAGÈS, 2020\nLanguage-Team: Occitan (post 1500) (https://www.transifex.com/nextcloud/teams/64236/oc/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: oc\nPlural-Forms: nplurals=2; plural=(n > 1);\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:170"},
                                msgstr: ["{tag} (invisible)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:173"},
                                msgstr: ["{tag} (limit)"]
                            },
                            Actions: {
                                msgid: "Actions",
                                comments: {reference: "src/components/Actions/Actions.vue:194"},
                                msgstr: ["Accions"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["Causir"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:117"},
                                msgstr: ["Tampar"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:166"},
                                msgstr: ["Seguent"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:172\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["Cap de resultat"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Metre en pausa lo diaporama"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:144"},
                                msgstr: ["Precedent"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["Seleccionar una etiqueta"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["Paramètres"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Lançar lo diaporama"]
                            }
                        }
                    }
                }
            }, {
                locale: "pl", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "Valdnet Valdnet, 2020",
                        "Language-Team": "Polish (https://www.transifex.com/nextcloud/teams/64236/pl/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "pl",
                        "Plural-Forms": "nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nValdnet Valdnet, 2020\n"},
                                msgstr: ["Last-Translator: Valdnet Valdnet, 2020\nLanguage-Team: Polish (https://www.transifex.com/nextcloud/teams/64236/pl/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: pl\nPlural-Forms: nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:170"},
                                msgstr: ["{tag} (niewidoczna)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:173"},
                                msgstr: ["{tag} (ograniczona)"]
                            },
                            Actions: {
                                msgid: "Actions",
                                comments: {reference: "src/components/Actions/Actions.vue:196"},
                                msgstr: ["Działania"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["Wybierz"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:117"},
                                msgstr: ["Zamknij"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:166"},
                                msgstr: ["Następny"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:172\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["Brak wyników"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Wstrzymaj pokaz slajdów"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:144"},
                                msgstr: ["Poprzedni"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["Wybierz etykietę"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["Ustawienia"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Rozpocznij pokaz slajdów"]
                            }
                        }
                    }
                }
            }, {
                locale: "pt_BR", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "Paulo Schopf, 2020",
                        "Language-Team": "Portuguese (Brazil) (https://www.transifex.com/nextcloud/teams/64236/pt_BR/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "pt_BR",
                        "Plural-Forms": "nplurals=2; plural=(n > 1);"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nMaurício Gardini <accounts@mauriciogardini.com>, 2020\nPaulo Schopf, 2020\n"},
                                msgstr: ["Last-Translator: Paulo Schopf, 2020\nLanguage-Team: Portuguese (Brazil) (https://www.transifex.com/nextcloud/teams/64236/pt_BR/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: pt_BR\nPlural-Forms: nplurals=2; plural=(n > 1);\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:170"},
                                msgstr: ["{tag} (invisível)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:173"},
                                msgstr: ["{tag} (restrito) "]
                            },
                            Actions: {
                                msgid: "Actions",
                                comments: {reference: "src/components/Actions/Actions.vue:194"},
                                msgstr: ["Ações"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["Escolher"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:117"},
                                msgstr: ["Fechar"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:166"},
                                msgstr: ["Próximo"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:172\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["Sem resultados"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Pausar apresentação de slides"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:144"},
                                msgstr: ["Anterior"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["Selecionar uma tag"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["Configurações"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Iniciar apresentação de slides"]
                            }
                        }
                    }
                }
            }, {
                locale: "pt_PT", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "fpapoila <fpapoila@gmail.com>, 2020",
                        "Language-Team": "Portuguese (Portugal) (https://www.transifex.com/nextcloud/teams/64236/pt_PT/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "pt_PT",
                        "Plural-Forms": "nplurals=2; plural=(n != 1);"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nfpapoila <fpapoila@gmail.com>, 2020\n"},
                                msgstr: ["Last-Translator: fpapoila <fpapoila@gmail.com>, 2020\nLanguage-Team: Portuguese (Portugal) (https://www.transifex.com/nextcloud/teams/64236/pt_PT/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: pt_PT\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:169"},
                                msgstr: ["{tag} (invisivel)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:172"},
                                msgstr: ["{tag} (restrito)"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["Escolher"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:109"},
                                msgstr: ["Fechar"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:154"},
                                msgstr: ["Proximo"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:169\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["Sem resultados"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:290"},
                                msgstr: ["Pausar apresentação de slides"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:134"},
                                msgstr: ["Anterior"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["Selecionar etiqueta"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["Definições"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:290"},
                                msgstr: ["Iniciar apresentação de slides"]
                            }
                        }
                    }
                }
            }, {
                locale: "ru", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "Alex <kekcuha@gmail.com>, 2020",
                        "Language-Team": "Russian (https://www.transifex.com/nextcloud/teams/64236/ru/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "ru",
                        "Plural-Forms": "nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nAlex <kekcuha@gmail.com>, 2020\n"},
                                msgstr: ["Last-Translator: Alex <kekcuha@gmail.com>, 2020\nLanguage-Team: Russian (https://www.transifex.com/nextcloud/teams/64236/ru/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ru\nPlural-Forms: nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:169"},
                                msgstr: ["{tag} (невидимое)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:172"},
                                msgstr: ["{tag} (ограниченное)"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["Выберите"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:109"},
                                msgstr: ["Закрыть"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:154"},
                                msgstr: ["Следующее"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:169\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["Результаты отсуствуют"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:290"},
                                msgstr: ["Приостановить показ слйдов"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:134"},
                                msgstr: ["Предыдущее"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["Выберите метку"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["Параметры"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:290"},
                                msgstr: ["Начать показ слайдов"]
                            }
                        }
                    }
                }
            }, {
                locale: "sv", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "Jonatan Nyberg, 2020",
                        "Language-Team": "Swedish (https://www.transifex.com/nextcloud/teams/64236/sv/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "sv",
                        "Plural-Forms": "nplurals=2; plural=(n != 1);"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nGabriel Ekström <gabriel.ekstrom06@gmail.com>, 2020\nErik Lennartsson, 2020\nJonatan Nyberg, 2020\n"},
                                msgstr: ["Last-Translator: Jonatan Nyberg, 2020\nLanguage-Team: Swedish (https://www.transifex.com/nextcloud/teams/64236/sv/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sv\nPlural-Forms: nplurals=2; plural=(n != 1);\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:170"},
                                msgstr: ["{tag} (osynlig)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:173"},
                                msgstr: ["{tag} (begränsad)"]
                            },
                            Actions: {
                                msgid: "Actions",
                                comments: {reference: "src/components/Actions/Actions.vue:194"},
                                msgstr: ["Åtgärder"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["Välj"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:117"},
                                msgstr: ["Stäng"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:166"},
                                msgstr: ["Nästa"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:172\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["Inga resultat"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Pausa bildspel"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:144"},
                                msgstr: ["Föregående"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["Välj en tag"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["Inställningar"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:302"},
                                msgstr: ["Starta bildspel"]
                            }
                        }
                    }
                }
            }, {
                locale: "tr", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "Kemal Oktay Aktoğan <oktayaktogan@gmail.com>, 2020",
                        "Language-Team": "Turkish (https://www.transifex.com/nextcloud/teams/64236/tr/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "tr",
                        "Plural-Forms": "nplurals=2; plural=(n > 1);"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nKemal Oktay Aktoğan <oktayaktogan@gmail.com>, 2020\n"},
                                msgstr: ["Last-Translator: Kemal Oktay Aktoğan <oktayaktogan@gmail.com>, 2020\nLanguage-Team: Turkish (https://www.transifex.com/nextcloud/teams/64236/tr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: tr\nPlural-Forms: nplurals=2; plural=(n > 1);\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:169"},
                                msgstr: ["{tag} (görünmez)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:172"},
                                msgstr: ["{tag} (kısıtlı)"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["Seç"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:109"},
                                msgstr: ["Kapat"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:154"},
                                msgstr: ["İleri"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:169\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["Sonuç yok"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:290"},
                                msgstr: ["Slayt gösterisini duraklat"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:134"},
                                msgstr: ["Önceki"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["Bir etiket seçin"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["Ayarlar"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:290"},
                                msgstr: ["Slayt gösterisini başlat"]
                            }
                        }
                    }
                }
            }, {
                locale: "zh_TW", json: {
                    charset: "utf-8",
                    headers: {
                        "Last-Translator": "byStarTW (pan93412) <pan93412@gmail.com>, 2020",
                        "Language-Team": "Chinese (Taiwan) (https://www.transifex.com/nextcloud/teams/64236/zh_TW/)",
                        "Content-Type": "text/plain; charset=UTF-8",
                        Language: "zh_TW",
                        "Plural-Forms": "nplurals=1; plural=0;"
                    },
                    translations: {
                        "": {
                            "": {
                                msgid: "",
                                comments: {translator: "Translators:\nbyStarTW (pan93412) <pan93412@gmail.com>, 2020\n"},
                                msgstr: ["Last-Translator: byStarTW (pan93412) <pan93412@gmail.com>, 2020\nLanguage-Team: Chinese (Taiwan) (https://www.transifex.com/nextcloud/teams/64236/zh_TW/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: zh_TW\nPlural-Forms: nplurals=1; plural=0;\n"]
                            },
                            "{tag} (invisible)": {
                                msgid: "{tag} (invisible)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:169"},
                                msgstr: ["{tag} (隱藏)"]
                            },
                            "{tag} (restricted)": {
                                msgid: "{tag} (restricted)",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:172"},
                                msgstr: ["{tag} (受限)"]
                            },
                            Choose: {
                                msgid: "Choose",
                                comments: {reference: "src/components/ColorPicker/ColorPicker.vue:145"},
                                msgstr: ["選擇"]
                            },
                            Close: {
                                msgid: "Close",
                                comments: {reference: "src/components/Modal/Modal.vue:109"},
                                msgstr: ["關閉"]
                            },
                            Next: {
                                msgid: "Next",
                                comments: {reference: "src/components/Modal/Modal.vue:154"},
                                msgstr: ["下一個"]
                            },
                            "No results": {
                                msgid: "No results",
                                comments: {reference: "src/components/Multiselect/Multiselect.vue:169\nsrc/components/MultiselectTags/MultiselectTags.vue:78"},
                                msgstr: ["無結果"]
                            },
                            "Pause slideshow": {
                                msgid: "Pause slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:290"},
                                msgstr: ["暫停幻燈片"]
                            },
                            Previous: {
                                msgid: "Previous",
                                comments: {reference: "src/components/Modal/Modal.vue:134"},
                                msgstr: ["上一個"]
                            },
                            "Select a tag": {
                                msgid: "Select a tag",
                                comments: {reference: "src/components/MultiselectTags/MultiselectTags.vue:100"},
                                msgstr: ["選擇標籤"]
                            },
                            Settings: {
                                msgid: "Settings",
                                comments: {reference: "src/components/AppNavigationSettings/AppNavigationSettings.vue:53"},
                                msgstr: ["設定"]
                            },
                            "Start slideshow": {
                                msgid: "Start slideshow",
                                comments: {reference: "src/components/Modal/Modal.vue:290"},
                                msgstr: ["開始幻燈片"]
                            }
                        }
                    }
                }
            }].map((function (e) {
                return o.addTranslation(e.locale, e.json)
            }));
            var i = o.build(), u = i.ngettext.bind(i), a = i.gettext.bind(i)
        }, 64: function (e, t) {
            e.exports = n(150)
        }, 65: function (e, t) {
            e.exports = n(159)
        }, 66: function (e, t, n) {
            "use strict";
            var r = n(29);
            n.n(r).a
        }, 67: function (e, t, n) {
            var r = n(1), o = n(7), i = n(8), u = n(9), a = n(10), s = n(11);
            t = r(!1);
            var l = o(i), c = o(u), A = o(a), p = o(s);
            t.push([e.i, '@font-face{font-family:"iconfont-vue-e1f55ce";src:url(' + l + ");src:url(" + l + ') format("embedded-opentype"),url(' + c + ') format("woff"),url(' + A + ') format("truetype"),url(' + p + ') format("svg")}.icon[data-v-7b368b0c]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-left[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-right-double[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-right[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.breadcrumb[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.checkmark[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.close[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.confirm[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.info[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.menu[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.more[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.pause[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.play[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.triangle-s[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.action-item[data-v-7b368b0c]{position:relative;display:inline-block}.action-item--single[data-v-7b368b0c]:hover,.action-item--single[data-v-7b368b0c]:focus,.action-item--single[data-v-7b368b0c]:active,.action-item__menutoggle[data-v-7b368b0c]:hover,.action-item__menutoggle[data-v-7b368b0c]:focus,.action-item__menutoggle[data-v-7b368b0c]:active{border-radius:22px;background-color:rgba(127,127,127,0.25) !important;opacity:1}.action-item.action-item--open .action-item__menutoggle[data-v-7b368b0c]{opacity:1;border-radius:22px;background-color:rgba(127,127,127,0.25)}.action-item--single[data-v-7b368b0c],.action-item__menutoggle[data-v-7b368b0c]{box-sizing:border-box;width:44px;height:44px;margin:0;padding:14px;cursor:pointer;border:none;background-color:transparent}.action-item__menutoggle[data-v-7b368b0c]{display:flex;align-items:center;justify-content:center;opacity:.7}.action-item__menutoggle[data-v-7b368b0c]:before{content:\'\'}.action-item__menutoggle--default-icon[data-v-7b368b0c]{font-size:16px}.action-item__menutoggle--default-icon[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";font-style:normal;font-weight:400;content:""}.action-item--single[data-v-7b368b0c]{opacity:.7}.action-item--single[data-v-7b368b0c]:hover,.action-item--single[data-v-7b368b0c]:focus,.action-item--single[data-v-7b368b0c]:active{opacity:1}.action-item--single>[hidden][data-v-7b368b0c]{display:none}.action-item--multiple[data-v-7b368b0c]{position:relative}.action-item__menu[data-v-7b368b0c]{position:absolute;z-index:110;right:50%;display:none;margin-bottom:10px;margin-top:-5px;transform:translateX(50%);color:var(--color-main-text);border-radius:var(--border-radius);background-color:var(--color-main-background);filter:drop-shadow(0 1px 3px var(--color-box-shadow))}.action-item__menu ul[data-v-7b368b0c]>:not(li){display:none}.action-item__menu.open[data-v-7b368b0c]{display:block}.action-item__menu .action-item__menu_arrow[data-v-7b368b0c]{position:absolute;right:50%;bottom:100%;width:0;height:0;margin-right:-9px;content:\' \';pointer-events:none;border:solid transparent;border-width:9px;border-bottom-color:var(--color-main-background)}.action-item__menu.menu-right[data-v-7b368b0c]{right:auto;left:0;transform:none}.action-item__menu.menu-right .action-item__menu_arrow[data-v-7b368b0c]{right:13px;margin-right:0;visibility:hidden}.action-item__menu.menu-left[data-v-7b368b0c]{right:auto;left:0;transform:none}.action-item__menu.menu-left .action-item__menu_arrow[data-v-7b368b0c]{right:auto;left:13px;margin-right:0}.ie .action-item__menu[data-v-7b368b0c],.ie .action-item__menu .action-item__menu_arrow[data-v-7b368b0c],.edge .action-item__menu[data-v-7b368b0c],.edge .action-item__menu .action-item__menu_arrow[data-v-7b368b0c]{border:1px solid var(--color-border)}\n', ""]), e.exports = t
        }, 7: function (e, t, n) {
            "use strict";
            e.exports = function (e, t) {
                return t || (t = {}), "string" != typeof (e = e && e.__esModule ? e.default : e) ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
            }
        }, 70: function (e, t, n) {
            "use strict";
            var r = {
                name: "ActionButton",
                mixins: [n(26).a],
                props: {disabled: {type: Boolean, default: !1}},
                computed: {
                    isFocusable: function () {
                        return !this.disabled
                    }
                }
            }, o = (n(126), n(0)), i = n(54), u = n.n(i), a = Object(o.a)(r, (function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("li", {class: {"action--disabled": e.disabled}}, [n("button", {
                    staticClass: "action-button",
                    class: {focusable: e.isFocusable},
                    attrs: {"aria-label": e.ariaLabel},
                    on: {click: e.onClick}
                }, [n("span", {
                    staticClass: "action-button__icon",
                    class: [e.isIconUrl ? "action-button__icon--url" : e.icon],
                    style: {backgroundImage: e.isIconUrl ? "url(" + e.icon + ")" : null}
                }), e._v(" "), e.title ? n("p", [n("strong", {staticClass: "action-button__title"}, [e._v("\n\t\t\t\t" + e._s(e.title) + "\n\t\t\t")]), e._v(" "), n("br"), e._v(" "), n("span", {
                    staticClass: "action-button__longtext",
                    domProps: {textContent: e._s(e.text)}
                })]) : e.isLongText ? n("p", {
                    staticClass: "action-button__longtext",
                    domProps: {textContent: e._s(e.text)}
                }) : n("span", {staticClass: "action-button__text"}, [e._v(e._s(e.text))]), e._v(" "), e._e()], 2)])
            }), [], !1, null, "33ba3302", null);
            "function" == typeof u.a && u()(a), t.a = a.exports
        }, 8: function (e, t, n) {
            "use strict";
            n.r(t), t.default = "data:application/vnd.ms-fontobject;base64,0gsAAAgLAAABAAIAAAAAAAIABQMAAAAAAAABQJABAAAAAExQAAAAABAAAAAAAAAAAAAAAAAAAAEAAAAAoXF6QAAAAAAAAAAAAAAAAAAAAAAAACgAAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQAAAAAAABYAAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAAKAAAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAAAAAAABAAAACgCAAAMAIE9TLzJ044+XAAAArAAAAGBjbWFwAA3rtAAAAQwAAAFCZ2x5ZvUXrnQAAAJQAAAEhGhlYWQnxdiqAAAG1AAAADZoaGVhJxwThQAABwwAAAAkaG10eGfe//8AAAcwAAAALGxvY2EHbghGAAAHXAAAACBtYXhwARwAVwAAB3wAAAAgbmFtZaKxgpwAAAecAAACpnBvc3TmiVqMAAAKRAAAAMQABBKUAZAABQAADGUNrAAAArwMZQ2sAAAJYAD1BQoAAAIABQMAAAAAAAAAAAAAEAAAAAAAAAAAAAAAUGZFZABA6gHqDhOIAAABwhOIAAAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQAAAAAAPAADAAEAAAAcAAQAIAAAAAQABAABAADqDv//AADqAf//FgAAAQAAAAAAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAOpg9DAAUACwAACQIRCQQRCQEOpvqCBX77ugRG+oL6ggV++7oERg9C+oL6ggE4BEYERgE4+oL6ggE4BEYERgABAAAAAA1uElAABQAACQERCQERBhsHU/d0CIwJxPit/sgIiwiM/scAAgAAAAAP3w9DAAUACwAACQIRCQQRCQEE4gV++oIERvu6BX4Ff/qBBEb7ugRGBX4Ffv7I+7r7uv7IBX4Ffv7I+7r7ugABAAAAAA6mElAABQAACQERCQERDW74rQiL93UJxAdTATn3dPd1ATgAAQAAAAAGNxOIAAUAABMHCQEXAZSUBXL6jpQFoxOIVfaR9pFVCcQAAAEAAAAAEYcPgwAFAAAJBQ/N9/P7+/5GBb8Jxw+D9/MEBf5H+kEJxgABAAAAABEXERcACwAACQsRF/3t+sD6wP3tBUD6wAITBUAFQAIT+sAEhP3tBUD6wAITBUAFQAIT+sAFQP3t+sAAAf//AAATkxLsADMAAAEiBw4BFxYXASEmBwYHBgcGFBcWFxYXFjchAQYHBhcWFx4BFxYXFjc2NwE2NzYnJicBLgEKYGVPSkYQEkgF1/HgTT46KScUFBQUJyk6Pk0OIPopNxoYAwMbGVY1Nzs+Oj81B+07FRUUFTz4Eyx0Euw5NKxZYEf6KgEbGC4sOTh4ODksLhgbAvopNT87Pjo3NlYZGgMDGBk4B+w8UVBPUjwH7C0yAAAAAgAAAAAOphJQABgARgAAASIHDgEHBhQXHgEXFjI3PgE3NjQnLgEnJgEiBwYHBhQXFhcWMyERISIHBgcGFBcWFxY3ITI3Njc2NCcmJyYjIRE0JyYnJiMJdm9mYpgpKyspmGJm3mZilyorKyqXYmb8NlZIRykrKylHSFYCcf2PVkhHKSsrKUdIVgdTVUhHKSsrKUdIVf2PKylHSVUSUCsql2Nl32VimCkrKymYYmXfZWOXKiv55SspR0irSEcpK/nmKylHSapJRykrASopR0mqSUcpKwdTVUhHKSsAAAMAAAAAERcRFwADAAcACwAAAREhEQERIREBESERAnEOpvFaDqbxWg6mERf9jwJx+eb9jwJx+eX9jwJxAAMAAAAAEp4L5wAYADEASgAAATIXHgEXFhQHDgEHBiInLgEnJjQ3PgE3NiEyFx4BFxYUBw4BBwYiJy4BJyY0Nz4BNzYhMhceARcWFAcOAQcGIicuAScmNDc+ATc2Aw1wZWKYKSsrKZhiZd9mYpcqKysql2JmByZvZmKXKisrKpdiZt5mYpcqKysql2JmByZvZmKXKisrKpdiZt9lYpgpKyspmGJlC+crKpdiZt5mYpcqKysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKysql2Jm3mZilyorKyqXYmbeZmKXKisAAAAAAgAAAAAP3w/fAAMABwAAAREhESERIREDqgTiAnEE4g/f88sMNfPLDDUAAAABAAAAABEXERcAAgAACQICcQ6m8VoRF/it+K0AAQAAAAAOpgw1AAIAAAkCBOIE4gTiDDX7HgTgAAEAAAABAABAenGhXw889QALE4gAAAAA2rMoTgAAAADaYkxP//8AABOTE4gAAAAIAAIAAAAAAAAAAQAAE4gAAAAAE4j////1E5MAAQAAAAAAAAAAAAAAAAAAAAcAAAAAE4gAABOIAAATiAAAE4gAAAY2AAATiAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAIgA2AFgAbACAAJQAtAEOAXwBmgIQAiYCNAJCAAEAAAAPAEsAAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAAAQAMYAAQAAAAAAAQAUAAAAAQAAAAAAAgAHABQAAQAAAAAAAwAUABsAAQAAAAAABAAUAC8AAQAAAAAABQALAEMAAQAAAAAABgAUAE4AAQAAAAAACgArAGIAAQAAAAAACwATAI0AAwABBAkAAQAoAKAAAwABBAkAAgAOAMgAAwABBAkAAwAoANYAAwABBAkABAAoAP4AAwABBAkABQAWASYAAwABBAkABgAoATwAAwABBAkACgBWAWQAAwABBAkACwAmAbppY29uZm9udC12dWUtZTFmNTVjZVJlZ3VsYXJpY29uZm9udC12dWUtZTFmNTVjZWljb25mb250LXZ1ZS1lMWY1NWNlVmVyc2lvbiAxLjBpY29uZm9udC12dWUtZTFmNTVjZUdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQBSAGUAZwB1AGwAYQByAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQBpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQAtAGUAMQBmADUANQBjAGUAVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAACAAAAAAAAADIAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAA8AAAECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8RYXJyb3ctbGVmdC1kb3VibGUKYXJyb3ctbGVmdBJhcnJvdy1yaWdodC1kb3VibGULYXJyb3ctcmlnaHQKYnJlYWRjcnVtYgljaGVja21hcmsFY2xvc2UHY29uZmlybQRpbmZvBG1lbnUEbW9yZQVwYXVzZQRwbGF5CnRyaWFuZ2xlLXM="
        }, 9: function (e, t, n) {
            "use strict";
            n.r(t), t.default = "data:font/woff;base64,d09GRgABAAAAAAtQAAoAAAAACwgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAAA9AAAAGAAAABgdOOPl2NtYXAAAAFUAAABQgAAAUIADeu0Z2x5ZgAAApgAAASEAAAEhPUXrnRoZWFkAAAHHAAAADYAAAA2J8XYqmhoZWEAAAdUAAAAJAAAACQnHBOFaG10eAAAB3gAAAAsAAAALGfe//9sb2NhAAAHpAAAACAAAAAgB24IRm1heHAAAAfEAAAAIAAAACABHABXbmFtZQAAB+QAAAKmAAACpqKxgpxwb3N0AAAKjAAAAMQAAADE5olajAAEEpQBkAAFAAAMZQ2sAAACvAxlDawAAAlgAPUFCgAAAgAFAwAAAAAAAAAAAAAQAAAAAAAAAAAAAABQZkVkAEDqAeoOE4gAAAHCE4gAAAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAAAAAA8AAMAAQAAABwABAAgAAAABAAEAAEAAOoO//8AAOoB//8WAAABAAAAAAAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAA6mD0MABQALAAAJAhEJBBEJAQ6m+oIFfvu6BEb6gvqCBX77ugRGD0L6gvqCATgERgRGATj6gvqCATgERgRGAAEAAAAADW4SUAAFAAAJAREJAREGGwdT93QIjAnE+K3+yAiLCIz+xwACAAAAAA/fD0MABQALAAAJAhEJBBEJAQTiBX76ggRG+7oFfgV/+oEERvu6BEYFfgV+/sj7uvu6/sgFfgV+/sj7uvu6AAEAAAAADqYSUAAFAAAJAREJARENbvitCIv3dQnEB1MBOfd093UBOAABAAAAAAY3E4gABQAAEwcJARcBlJQFcvqOlAWjE4hV9pH2kVUJxAAAAQAAAAARhw+DAAUAAAkFD8338/v7/kYFvwnHD4P38wQF/kf6QQnGAAEAAAAAERcRFwALAAAJCxEX/e36wPrA/e0FQPrAAhMFQAVAAhP6wASE/e0FQPrAAhMFQAVAAhP6wAVA/e36wAAB//8AABOTEuwAMwAAASIHDgEXFhcBISYHBgcGBwYUFxYXFhcWNyEBBgcGFxYXHgEXFhcWNzY3ATY3NicmJwEuAQpgZU9KRhASSAXX8eBNPjopJxQUFBQnKTo+TQ4g+ik3GhgDAxsZVjU3Oz46PzUH7TsVFRQVPPgTLHQS7Dk0rFlgR/oqARsYLiw5OHg4OSwuGBsC+ik1Pzs+Ojc2VhkaAwMYGTgH7DxRUE9SPAfsLTIAAAACAAAAAA6mElAAGABGAAABIgcOAQcGFBceARcWMjc+ATc2NCcuAScmASIHBgcGFBcWFxYzIREhIgcGBwYUFxYXFjchMjc2NzY0JyYnJiMhETQnJicmIwl2b2ZimCkrKymYYmbeZmKXKisrKpdiZvw2VkhHKSsrKUdIVgJx/Y9WSEcpKyspR0hWB1NVSEcpKyspR0hV/Y8rKUdJVRJQKyqXY2XfZWKYKSsrKZhiZd9lY5cqK/nlKylHSKtIRykr+eYrKUdJqklHKSsBKilHSapJRykrB1NVSEcpKwAAAwAAAAARFxEXAAMABwALAAABESERAREhEQERIRECcQ6m8VoOpvFaDqYRF/2PAnH55v2PAnH55f2PAnEAAwAAAAASngvnABgAMQBKAAABMhceARcWFAcOAQcGIicuAScmNDc+ATc2ITIXHgEXFhQHDgEHBiInLgEnJjQ3PgE3NiEyFx4BFxYUBw4BBwYiJy4BJyY0Nz4BNzYDDXBlYpgpKyspmGJl32ZilyorKyqXYmYHJm9mYpcqKysql2Jm3mZilyorKyqXYmYHJm9mYpcqKysql2Jm32VimCkrKymYYmUL5ysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKwAAAAACAAAAAA/fD98AAwAHAAABESERIREhEQOqBOICcQTiD9/zyww188sMNQAAAAEAAAAAERcRFwACAAAJAgJxDqbxWhEX+K34rQABAAAAAA6mDDUAAgAACQIE4gTiBOIMNfseBOAAAQAAAAEAAEB6caFfDzz1AAsTiAAAAADasyhOAAAAANpiTE///wAAE5MTiAAAAAgAAgAAAAAAAAABAAATiAAAAAATiP////UTkwABAAAAAAAAAAAAAAAAAAAABwAAAAATiAAAE4gAABOIAAATiAAABjYAABOIAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAiADYAWABsAIAAlAC0AQ4BfAGaAhACJgI0AkIAAQAAAA8ASwADAAAAAAACAAAACgAKAAAA/wAAAAAAAAAAABAAxgABAAAAAAABABQAAAABAAAAAAACAAcAFAABAAAAAAADABQAGwABAAAAAAAEABQALwABAAAAAAAFAAsAQwABAAAAAAAGABQATgABAAAAAAAKACsAYgABAAAAAAALABMAjQADAAEECQABACgAoAADAAEECQACAA4AyAADAAEECQADACgA1gADAAEECQAEACgA/gADAAEECQAFABYBJgADAAEECQAGACgBPAADAAEECQAKAFYBZAADAAEECQALACYBumljb25mb250LXZ1ZS1lMWY1NWNlUmVndWxhcmljb25mb250LXZ1ZS1lMWY1NWNlaWNvbmZvbnQtdnVlLWUxZjU1Y2VWZXJzaW9uIDEuMGljb25mb250LXZ1ZS1lMWY1NWNlR2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20AaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQBWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAIAAAAAAAAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAA8ADwAAAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDxFhcnJvdy1sZWZ0LWRvdWJsZQphcnJvdy1sZWZ0EmFycm93LXJpZ2h0LWRvdWJsZQthcnJvdy1yaWdodApicmVhZGNydW1iCWNoZWNrbWFyawVjbG9zZQdjb25maXJtBGluZm8EbWVudQRtb3JlBXBhdXNlBHBsYXkKdHJpYW5nbGUtcw=="
        }
    })
}, function (e, t, n) {
    "use strict";
    (function (e) {
        n.d(t, "a", (function () {
            return i
        }));
        var r = void 0;

        function o() {
            o.init || (o.init = !0, r = -1 !== function () {
                var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
                if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
                if (e.indexOf("Trident/") > 0) {
                    var n = e.indexOf("rv:");
                    return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10)
                }
                var r = e.indexOf("Edge/");
                return r > 0 ? parseInt(e.substring(r + 5, e.indexOf(".", r)), 10) : -1
            }())
        }

        var i = {
            render: function () {
                var e = this.$createElement;
                return (this._self._c || e)("div", {staticClass: "resize-observer", attrs: {tabindex: "-1"}})
            },
            staticRenderFns: [],
            _scopeId: "data-v-b329ee4c",
            name: "resize-observer",
            methods: {
                compareAndNotify: function () {
                    this._w === this.$el.offsetWidth && this._h === this.$el.offsetHeight || (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.$emit("notify"))
                }, addResizeHandlers: function () {
                    this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify()
                }, removeResizeHandlers: function () {
                    this._resizeObject && this._resizeObject.onload && (!r && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), delete this._resizeObject.onload)
                }
            },
            mounted: function () {
                var e = this;
                o(), this.$nextTick((function () {
                    e._w = e.$el.offsetWidth, e._h = e.$el.offsetHeight
                }));
                var t = document.createElement("object");
                this._resizeObject = t, t.setAttribute("aria-hidden", "true"), t.setAttribute("tabindex", -1), t.onload = this.addResizeHandlers, t.type = "text/html", r && this.$el.appendChild(t), t.data = "about:blank", r || this.$el.appendChild(t)
            },
            beforeDestroy: function () {
                this.removeResizeHandlers()
            }
        };
        var u = {
            version: "0.4.5", install: function (e) {
                e.component("resize-observer", i), e.component("ResizeObserver", i)
            }
        }, a = null;
        "undefined" != typeof window ? a = window.Vue : void 0 !== e && (a = e.Vue), a && a.use(u)
    }).call(this, n(10))
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><defs><linearGradient id="placeholder__gradient"><stop offset="0%" stop-color="#ededed"><animate attributeName="stop-color" values="#ededed; #ededed; #cccccc; #cccccc; #ededed" dur="2s" repeatCount="indefinite"></animate></stop><stop offset="100%" stop-color="#cccccc"><animate attributeName="stop-color" values="#cccccc; #ededed; #ededed; #cccccc; #cccccc" dur="2s" repeatCount="indefinite"></animate></stop></linearGradient></defs></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1" id="placeholder--img"><path d="M2.8 4a1.3 1.3 0 00-1.3 1.3v22.4c0 .6.7 1.3 1.3 1.3h26.4c.6 0 1.3-.7 1.3-1.3V5.3c0-.6-.7-1.3-1.3-1.3zm.7 2h25v19h-25z"></path><circle cx="8.5" cy="11.2" r="3"></circle><path d="M26.4 14.5l-4.7 6.2L20 23l-1.6-1.8-4.5-4.6-6 5.7-4.7 4.3h26.2v-8.7z"></path></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1" id="placeholder--video"><path d="M2.8 4c-.7 0-1.3.6-1.3 1.3v22.4c0 .6.7 1.3 1.3 1.3h26.4c.7 0 1.3-.6 1.3-1.3V5.3c0-.6-.7-1.3-1.3-1.3zm.7 2h25v21h-25V6z"></path><path d="M10.5 10v12l12-6z"></path></svg>'
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map((function (t) {
                var n = function (e, t) {
                    var n = e[1] || "", r = e[3];
                    if (!r) return n;
                    if (t && "function" == typeof btoa) {
                        var o = (u = r, a = btoa(unescape(encodeURIComponent(JSON.stringify(u)))), s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a), "/*# ".concat(s, " */")),
                            i = r.sources.map((function (e) {
                                return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */")
                            }));
                        return [n].concat(i).concat([o]).join("\n")
                    }
                    var u, a, s;
                    return [n].join("\n")
                }(t, e);
                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
            })).join("")
        }, t.i = function (e, n, r) {
            "string" == typeof e && (e = [[null, e, ""]]);
            var o = {};
            if (r) for (var i = 0; i < this.length; i++) {
                var u = this[i][0];
                null != u && (o[u] = !0)
            }
            for (var a = 0; a < e.length; a++) {
                var s = [].concat(e[a]);
                r && o[s[0]] || (n && (s[2] ? s[2] = "".concat(n, " and ").concat(s[2]) : s[2] = n), t.push(s))
            }
        }, t
    }
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        for (var n = [], r = {}, o = 0; o < t.length; o++) {
            var i = t[o], u = i[0], a = {id: e + ":" + o, css: i[1], media: i[2], sourceMap: i[3]};
            r[u] ? r[u].parts.push(a) : n.push(r[u] = {id: u, parts: [a]})
        }
        return n
    }

    n.r(t), n.d(t, "default", (function () {
        return f
    }));
    var o = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !o) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var i = {}, u = o && (document.head || document.getElementsByTagName("head")[0]), a = null, s = 0, l = !1,
        c = function () {
        }, A = null, p = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

    function f(e, t, n, o) {
        l = n, A = o || {};
        var u = r(e, t);
        return d(u), function (t) {
            for (var n = [], o = 0; o < u.length; o++) {
                var a = u[o];
                (s = i[a.id]).refs--, n.push(s)
            }
            t ? d(u = r(e, t)) : u = [];
            for (o = 0; o < n.length; o++) {
                var s;
                if (0 === (s = n[o]).refs) {
                    for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                    delete i[s.id]
                }
            }
        }
    }

    function d(e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t], r = i[n.id];
            if (r) {
                r.refs++;
                for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
                for (; o < n.parts.length; o++) r.parts.push(h(n.parts[o]));
                r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
            } else {
                var u = [];
                for (o = 0; o < n.parts.length; o++) u.push(h(n.parts[o]));
                i[n.id] = {id: n.id, refs: 1, parts: u}
            }
        }
    }

    function m() {
        var e = document.createElement("style");
        return e.type = "text/css", u.appendChild(e), e
    }

    function h(e) {
        var t, n, r = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
        if (r) {
            if (l) return c;
            r.parentNode.removeChild(r)
        }
        if (p) {
            var o = s++;
            r = a || (a = m()), t = D.bind(null, r, o, !1), n = D.bind(null, r, o, !0)
        } else r = m(), t = y.bind(null, r), n = function () {
            r.parentNode.removeChild(r)
        };
        return t(e), function (r) {
            if (r) {
                if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                t(e = r)
            } else n()
        }
    }

    var g, v = (g = [], function (e, t) {
        return g[e] = t, g.filter(Boolean).join("\n")
    });

    function D(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = v(t, o); else {
            var i = document.createTextNode(o), u = e.childNodes;
            u[t] && e.removeChild(u[t]), u.length ? e.insertBefore(i, u[t]) : e.appendChild(i)
        }
    }

    function y(e, t) {
        var n = t.css, r = t.media, o = t.sourceMap;
        if (r && e.setAttribute("media", r), A.ssrId && e.setAttribute("data-vue-ssr-id", t.id), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), e.styleSheet) e.styleSheet.cssText = n; else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }
}, function (e, t, n) {
    var r = n(8), o = n(12).f, i = Function.prototype, u = i.toString, a = /^\s*function ([^ (]*)/;
    r && !("name" in i) && o(i, "name", {
        configurable: !0, get: function () {
            try {
                return u.call(this).match(a)[1]
            } catch (e) {
                return ""
            }
        }
    })
}, function (e, t, n) {
    var r = n(4), o = n(135);
    r({target: "Object", stat: !0, forced: Object.assign !== o}, {assign: o})
}, function (e, t, n) {
    e.exports = function () {
        var e = "__v-click-outside", t = "undefined" != typeof window, n = "undefined" != typeof navigator,
            r = t && ("ontouchstart" in window || n && navigator.msMaxTouchPoints > 0) ? ["touchstart"] : ["click"];

        function o(t, n) {
            var o = function (e) {
                var t = "function" == typeof e;
                if (!t && "object" != typeof e) throw new Error("v-click-outside: Binding value must be a function or an object");
                return {
                    handler: t ? e : e.handler, middleware: e.middleware || function (e) {
                        return e
                    }, events: e.events || r, isActive: !(!1 === e.isActive)
                }
            }(n.value), i = o.handler, u = o.middleware;
            o.isActive && (t[e] = o.events.map((function (e) {
                return {
                    event: e, handler: function (e) {
                        return function (e) {
                            var t = e.el, n = e.event, r = e.handler, o = e.middleware,
                                i = n.path || n.composedPath && n.composedPath(),
                                u = i ? i.indexOf(t) < 0 : !t.contains(n.target);
                            n.target !== t && u && o(n) && r(n)
                        }({event: e, el: t, handler: i, middleware: u})
                    }
                }
            })), t[e].forEach((function (n) {
                var r = n.event, o = n.handler;
                return setTimeout((function () {
                    t[e] && document.documentElement.addEventListener(r, o, !1)
                }), 0)
            })))
        }

        function i(t) {
            (t[e] || []).forEach((function (e) {
                return document.documentElement.removeEventListener(e.event, e.handler, !1)
            })), delete t[e]
        }

        var u = t ? {
            bind: o, update: function (e, t) {
                var n = t.value, r = t.oldValue;
                JSON.stringify(n) !== JSON.stringify(r) && (i(e), o(e, {value: n}))
            }, unbind: i
        } : {};
        return {
            install: function (e) {
                e.directive("click-outside", u)
            }, directive: u
        }
    }()
}, function (e, t, n) {
    "use strict";
    var r = n(4), o = n(112).indexOf, i = n(119), u = n(29), a = [].indexOf, s = !!a && 1 / [1].indexOf(1, -0) < 0,
        l = i("indexOf"), c = u("indexOf", {ACCESSORS: !0, 1: 0});
    r({target: "Array", proto: !0, forced: s || !l || !c}, {
        indexOf: function (e) {
            return s ? a.apply(this, arguments) || 0 : o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(4), o = n(66).map, i = n(41), u = n(29), a = i("map"), s = u("map");
    r({target: "Array", proto: !0, forced: !a || !s}, {
        map: function (e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t, n) {
    "use strict";
    n(51);
    var r, o = n(4), i = n(8), u = n(134), a = n(3), s = n(121), l = n(14), c = n(44), A = n(5), p = n(135), f = n(218),
        d = n(72).codeAt, m = n(219), h = n(31), g = n(220), v = n(20), D = a.URL, y = g.URLSearchParams,
        E = g.getState, C = v.set, b = v.getterFor("URL"), x = Math.floor, w = Math.pow, T = /[A-Za-z]/,
        B = /[\d+-.A-Za-z]/, F = /\d/, M = /^(0x|0X)/, I = /^[0-7]+$/, _ = /^\d+$/, S = /^[\dA-Fa-f]+$/,
        N = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/, O = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
        L = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g, k = /[\u0009\u000A\u000D]/g, j = function (e, t) {
            var n, r, o;
            if ("[" == t.charAt(0)) {
                if ("]" != t.charAt(t.length - 1)) return "Invalid host";
                if (!(n = P(t.slice(1, -1)))) return "Invalid host";
                e.host = n
            } else if (H(e)) {
                if (t = m(t), N.test(t)) return "Invalid host";
                if (null === (n = R(t))) return "Invalid host";
                e.host = n
            } else {
                if (O.test(t)) return "Invalid host";
                for (n = "", r = f(t), o = 0; o < r.length; o++) n += $(r[o], Q);
                e.host = n
            }
        }, R = function (e) {
            var t, n, r, o, i, u, a, s = e.split(".");
            if (s.length && "" == s[s.length - 1] && s.pop(), (t = s.length) > 4) return e;
            for (n = [], r = 0; r < t; r++) {
                if ("" == (o = s[r])) return e;
                if (i = 10, o.length > 1 && "0" == o.charAt(0) && (i = M.test(o) ? 16 : 8, o = o.slice(8 == i ? 1 : 2)), "" === o) u = 0; else {
                    if (!(10 == i ? _ : 8 == i ? I : S).test(o)) return e;
                    u = parseInt(o, i)
                }
                n.push(u)
            }
            for (r = 0; r < t; r++) if (u = n[r], r == t - 1) {
                if (u >= w(256, 5 - t)) return null
            } else if (u > 255) return null;
            for (a = n.pop(), r = 0; r < n.length; r++) a += n[r] * w(256, 3 - r);
            return a
        }, P = function (e) {
            var t, n, r, o, i, u, a, s = [0, 0, 0, 0, 0, 0, 0, 0], l = 0, c = null, A = 0, p = function () {
                return e.charAt(A)
            };
            if (":" == p()) {
                if (":" != e.charAt(1)) return;
                A += 2, c = ++l
            }
            for (; p();) {
                if (8 == l) return;
                if (":" != p()) {
                    for (t = n = 0; n < 4 && S.test(p());) t = 16 * t + parseInt(p(), 16), A++, n++;
                    if ("." == p()) {
                        if (0 == n) return;
                        if (A -= n, l > 6) return;
                        for (r = 0; p();) {
                            if (o = null, r > 0) {
                                if (!("." == p() && r < 4)) return;
                                A++
                            }
                            if (!F.test(p())) return;
                            for (; F.test(p());) {
                                if (i = parseInt(p(), 10), null === o) o = i; else {
                                    if (0 == o) return;
                                    o = 10 * o + i
                                }
                                if (o > 255) return;
                                A++
                            }
                            s[l] = 256 * s[l] + o, 2 != ++r && 4 != r || l++
                        }
                        if (4 != r) return;
                        break
                    }
                    if (":" == p()) {
                        if (A++, !p()) return
                    } else if (p()) return;
                    s[l++] = t
                } else {
                    if (null !== c) return;
                    A++, c = ++l
                }
            }
            if (null !== c) for (u = l - c, l = 7; 0 != l && u > 0;) a = s[l], s[l--] = s[c + u - 1], s[c + --u] = a; else if (8 != l) return;
            return s
        }, U = function (e) {
            var t, n, r, o;
            if ("number" == typeof e) {
                for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), e = x(e / 256);
                return t.join(".")
            }
            if ("object" == typeof e) {
                for (t = "", r = function (e) {
                    for (var t = null, n = 1, r = null, o = 0, i = 0; i < 8; i++) 0 !== e[i] ? (o > n && (t = r, n = o), r = null, o = 0) : (null === r && (r = i), ++o);
                    return o > n && (t = r, n = o), t
                }(e), n = 0; n < 8; n++) o && 0 === e[n] || (o && (o = !1), r === n ? (t += n ? ":" : "::", o = !0) : (t += e[n].toString(16), n < 7 && (t += ":")));
                return "[" + t + "]"
            }
            return e
        }, Q = {}, G = p({}, Q, {" ": 1, '"': 1, "<": 1, ">": 1, "`": 1}), z = p({}, G, {"#": 1, "?": 1, "{": 1, "}": 1}),
        Y = p({}, z, {"/": 1, ":": 1, ";": 1, "=": 1, "@": 1, "[": 1, "\\": 1, "]": 1, "^": 1, "|": 1}),
        $ = function (e, t) {
            var n = d(e, 0);
            return n > 32 && n < 127 && !A(t, e) ? e : encodeURIComponent(e)
        }, Z = {ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443}, H = function (e) {
            return A(Z, e.scheme)
        }, W = function (e) {
            return "" != e.username || "" != e.password
        }, V = function (e) {
            return !e.host || e.cannotBeABaseURL || "file" == e.scheme
        }, X = function (e, t) {
            var n;
            return 2 == e.length && T.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n)
        }, J = function (e) {
            var t;
            return e.length > 1 && X(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
        }, K = function (e) {
            var t = e.path, n = t.length;
            !n || "file" == e.scheme && 1 == n && X(t[0], !0) || t.pop()
        }, q = function (e) {
            return "." === e || "%2e" === e.toLowerCase()
        }, ee = {}, te = {}, ne = {}, re = {}, oe = {}, ie = {}, ue = {}, ae = {}, se = {}, le = {}, ce = {}, Ae = {},
        pe = {}, fe = {}, de = {}, me = {}, he = {}, ge = {}, ve = {}, De = {}, ye = {}, Ee = function (e, t, n, o) {
            var i, u, a, s, l, c = n || ee, p = 0, d = "", m = !1, h = !1, g = !1;
            for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(L, "")), t = t.replace(k, ""), i = f(t); p <= i.length;) {
                switch (u = i[p], c) {
                    case ee:
                        if (!u || !T.test(u)) {
                            if (n) return "Invalid scheme";
                            c = ne;
                            continue
                        }
                        d += u.toLowerCase(), c = te;
                        break;
                    case te:
                        if (u && (B.test(u) || "+" == u || "-" == u || "." == u)) d += u.toLowerCase(); else {
                            if (":" != u) {
                                if (n) return "Invalid scheme";
                                d = "", c = ne, p = 0;
                                continue
                            }
                            if (n && (H(e) != A(Z, d) || "file" == d && (W(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
                            if (e.scheme = d, n) return void (H(e) && Z[e.scheme] == e.port && (e.port = null));
                            d = "", "file" == e.scheme ? c = fe : H(e) && o && o.scheme == e.scheme ? c = re : H(e) ? c = ae : "/" == i[p + 1] ? (c = oe, p++) : (e.cannotBeABaseURL = !0, e.path.push(""), c = ve)
                        }
                        break;
                    case ne:
                        if (!o || o.cannotBeABaseURL && "#" != u) return "Invalid scheme";
                        if (o.cannotBeABaseURL && "#" == u) {
                            e.scheme = o.scheme, e.path = o.path.slice(), e.query = o.query, e.fragment = "", e.cannotBeABaseURL = !0, c = ye;
                            break
                        }
                        c = "file" == o.scheme ? fe : ie;
                        continue;
                    case re:
                        if ("/" != u || "/" != i[p + 1]) {
                            c = ie;
                            continue
                        }
                        c = se, p++;
                        break;
                    case oe:
                        if ("/" == u) {
                            c = le;
                            break
                        }
                        c = ge;
                        continue;
                    case ie:
                        if (e.scheme = o.scheme, u == r) e.username = o.username, e.password = o.password, e.host = o.host, e.port = o.port, e.path = o.path.slice(), e.query = o.query; else if ("/" == u || "\\" == u && H(e)) c = ue; else if ("?" == u) e.username = o.username, e.password = o.password, e.host = o.host, e.port = o.port, e.path = o.path.slice(), e.query = "", c = De; else {
                            if ("#" != u) {
                                e.username = o.username, e.password = o.password, e.host = o.host, e.port = o.port, e.path = o.path.slice(), e.path.pop(), c = ge;
                                continue
                            }
                            e.username = o.username, e.password = o.password, e.host = o.host, e.port = o.port, e.path = o.path.slice(), e.query = o.query, e.fragment = "", c = ye
                        }
                        break;
                    case ue:
                        if (!H(e) || "/" != u && "\\" != u) {
                            if ("/" != u) {
                                e.username = o.username, e.password = o.password, e.host = o.host, e.port = o.port, c = ge;
                                continue
                            }
                            c = le
                        } else c = se;
                        break;
                    case ae:
                        if (c = se, "/" != u || "/" != d.charAt(p + 1)) continue;
                        p++;
                        break;
                    case se:
                        if ("/" != u && "\\" != u) {
                            c = le;
                            continue
                        }
                        break;
                    case le:
                        if ("@" == u) {
                            m && (d = "%40" + d), m = !0, a = f(d);
                            for (var v = 0; v < a.length; v++) {
                                var D = a[v];
                                if (":" != D || g) {
                                    var y = $(D, Y);
                                    g ? e.password += y : e.username += y
                                } else g = !0
                            }
                            d = ""
                        } else if (u == r || "/" == u || "?" == u || "#" == u || "\\" == u && H(e)) {
                            if (m && "" == d) return "Invalid authority";
                            p -= f(d).length + 1, d = "", c = ce
                        } else d += u;
                        break;
                    case ce:
                    case Ae:
                        if (n && "file" == e.scheme) {
                            c = me;
                            continue
                        }
                        if (":" != u || h) {
                            if (u == r || "/" == u || "?" == u || "#" == u || "\\" == u && H(e)) {
                                if (H(e) && "" == d) return "Invalid host";
                                if (n && "" == d && (W(e) || null !== e.port)) return;
                                if (s = j(e, d)) return s;
                                if (d = "", c = he, n) return;
                                continue
                            }
                            "[" == u ? h = !0 : "]" == u && (h = !1), d += u
                        } else {
                            if ("" == d) return "Invalid host";
                            if (s = j(e, d)) return s;
                            if (d = "", c = pe, n == Ae) return
                        }
                        break;
                    case pe:
                        if (!F.test(u)) {
                            if (u == r || "/" == u || "?" == u || "#" == u || "\\" == u && H(e) || n) {
                                if ("" != d) {
                                    var E = parseInt(d, 10);
                                    if (E > 65535) return "Invalid port";
                                    e.port = H(e) && E === Z[e.scheme] ? null : E, d = ""
                                }
                                if (n) return;
                                c = he;
                                continue
                            }
                            return "Invalid port"
                        }
                        d += u;
                        break;
                    case fe:
                        if (e.scheme = "file", "/" == u || "\\" == u) c = de; else {
                            if (!o || "file" != o.scheme) {
                                c = ge;
                                continue
                            }
                            if (u == r) e.host = o.host, e.path = o.path.slice(), e.query = o.query; else if ("?" == u) e.host = o.host, e.path = o.path.slice(), e.query = "", c = De; else {
                                if ("#" != u) {
                                    J(i.slice(p).join("")) || (e.host = o.host, e.path = o.path.slice(), K(e)), c = ge;
                                    continue
                                }
                                e.host = o.host, e.path = o.path.slice(), e.query = o.query, e.fragment = "", c = ye
                            }
                        }
                        break;
                    case de:
                        if ("/" == u || "\\" == u) {
                            c = me;
                            break
                        }
                        o && "file" == o.scheme && !J(i.slice(p).join("")) && (X(o.path[0], !0) ? e.path.push(o.path[0]) : e.host = o.host), c = ge;
                        continue;
                    case me:
                        if (u == r || "/" == u || "\\" == u || "?" == u || "#" == u) {
                            if (!n && X(d)) c = ge; else if ("" == d) {
                                if (e.host = "", n) return;
                                c = he
                            } else {
                                if (s = j(e, d)) return s;
                                if ("localhost" == e.host && (e.host = ""), n) return;
                                d = "", c = he
                            }
                            continue
                        }
                        d += u;
                        break;
                    case he:
                        if (H(e)) {
                            if (c = ge, "/" != u && "\\" != u) continue
                        } else if (n || "?" != u) if (n || "#" != u) {
                            if (u != r && (c = ge, "/" != u)) continue
                        } else e.fragment = "", c = ye; else e.query = "", c = De;
                        break;
                    case ge:
                        if (u == r || "/" == u || "\\" == u && H(e) || !n && ("?" == u || "#" == u)) {
                            if (".." === (l = (l = d).toLowerCase()) || "%2e." === l || ".%2e" === l || "%2e%2e" === l ? (K(e), "/" == u || "\\" == u && H(e) || e.path.push("")) : q(d) ? "/" == u || "\\" == u && H(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && X(d) && (e.host && (e.host = ""), d = d.charAt(0) + ":"), e.path.push(d)), d = "", "file" == e.scheme && (u == r || "?" == u || "#" == u)) for (; e.path.length > 1 && "" === e.path[0];) e.path.shift();
                            "?" == u ? (e.query = "", c = De) : "#" == u && (e.fragment = "", c = ye)
                        } else d += $(u, z);
                        break;
                    case ve:
                        "?" == u ? (e.query = "", c = De) : "#" == u ? (e.fragment = "", c = ye) : u != r && (e.path[0] += $(u, Q));
                        break;
                    case De:
                        n || "#" != u ? u != r && ("'" == u && H(e) ? e.query += "%27" : e.query += "#" == u ? "%23" : $(u, Q)) : (e.fragment = "", c = ye);
                        break;
                    case ye:
                        u != r && (e.fragment += $(u, G))
                }
                p++
            }
        }, Ce = function (e) {
            var t, n, r = c(this, Ce, "URL"), o = arguments.length > 1 ? arguments[1] : void 0, u = String(e),
                a = C(r, {type: "URL"});
            if (void 0 !== o) if (o instanceof Ce) t = b(o); else if (n = Ee(t = {}, String(o))) throw TypeError(n);
            if (n = Ee(a, u, null, t)) throw TypeError(n);
            var s = a.searchParams = new y, l = E(s);
            l.updateSearchParams(a.query), l.updateURL = function () {
                a.query = String(s) || null
            }, i || (r.href = xe.call(r), r.origin = we.call(r), r.protocol = Te.call(r), r.username = Be.call(r), r.password = Fe.call(r), r.host = Me.call(r), r.hostname = Ie.call(r), r.port = _e.call(r), r.pathname = Se.call(r), r.search = Ne.call(r), r.searchParams = Oe.call(r), r.hash = Le.call(r))
        }, be = Ce.prototype, xe = function () {
            var e = b(this), t = e.scheme, n = e.username, r = e.password, o = e.host, i = e.port, u = e.path, a = e.query,
                s = e.fragment, l = t + ":";
            return null !== o ? (l += "//", W(e) && (l += n + (r ? ":" + r : "") + "@"), l += U(o), null !== i && (l += ":" + i)) : "file" == t && (l += "//"), l += e.cannotBeABaseURL ? u[0] : u.length ? "/" + u.join("/") : "", null !== a && (l += "?" + a), null !== s && (l += "#" + s), l
        }, we = function () {
            var e = b(this), t = e.scheme, n = e.port;
            if ("blob" == t) try {
                return new URL(t.path[0]).origin
            } catch (e) {
                return "null"
            }
            return "file" != t && H(e) ? t + "://" + U(e.host) + (null !== n ? ":" + n : "") : "null"
        }, Te = function () {
            return b(this).scheme + ":"
        }, Be = function () {
            return b(this).username
        }, Fe = function () {
            return b(this).password
        }, Me = function () {
            var e = b(this), t = e.host, n = e.port;
            return null === t ? "" : null === n ? U(t) : U(t) + ":" + n
        }, Ie = function () {
            var e = b(this).host;
            return null === e ? "" : U(e)
        }, _e = function () {
            var e = b(this).port;
            return null === e ? "" : String(e)
        }, Se = function () {
            var e = b(this), t = e.path;
            return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
        }, Ne = function () {
            var e = b(this).query;
            return e ? "?" + e : ""
        }, Oe = function () {
            return b(this).searchParams
        }, Le = function () {
            var e = b(this).fragment;
            return e ? "#" + e : ""
        }, ke = function (e, t) {
            return {get: e, set: t, configurable: !0, enumerable: !0}
        };
    if (i && s(be, {
        href: ke(xe, (function (e) {
            var t = b(this), n = String(e), r = Ee(t, n);
            if (r) throw TypeError(r);
            E(t.searchParams).updateSearchParams(t.query)
        })), origin: ke(we), protocol: ke(Te, (function (e) {
            var t = b(this);
            Ee(t, String(e) + ":", ee)
        })), username: ke(Be, (function (e) {
            var t = b(this), n = f(String(e));
            if (!V(t)) {
                t.username = "";
                for (var r = 0; r < n.length; r++) t.username += $(n[r], Y)
            }
        })), password: ke(Fe, (function (e) {
            var t = b(this), n = f(String(e));
            if (!V(t)) {
                t.password = "";
                for (var r = 0; r < n.length; r++) t.password += $(n[r], Y)
            }
        })), host: ke(Me, (function (e) {
            var t = b(this);
            t.cannotBeABaseURL || Ee(t, String(e), ce)
        })), hostname: ke(Ie, (function (e) {
            var t = b(this);
            t.cannotBeABaseURL || Ee(t, String(e), Ae)
        })), port: ke(_e, (function (e) {
            var t = b(this);
            V(t) || ("" == (e = String(e)) ? t.port = null : Ee(t, e, pe))
        })), pathname: ke(Se, (function (e) {
            var t = b(this);
            t.cannotBeABaseURL || (t.path = [], Ee(t, e + "", he))
        })), search: ke(Ne, (function (e) {
            var t = b(this);
            "" == (e = String(e)) ? t.query = null : ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", Ee(t, e, De)), E(t.searchParams).updateSearchParams(t.query)
        })), searchParams: ke(Oe), hash: ke(Le, (function (e) {
            var t = b(this);
            "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", Ee(t, e, ye)) : t.fragment = null
        }))
    }), l(be, "toJSON", (function () {
        return xe.call(this)
    }), {enumerable: !0}), l(be, "toString", (function () {
        return xe.call(this)
    }), {enumerable: !0}), D) {
        var je = D.createObjectURL, Re = D.revokeObjectURL;
        je && l(Ce, "createObjectURL", (function (e) {
            return je.apply(D, arguments)
        })), Re && l(Ce, "revokeObjectURL", (function (e) {
            return Re.apply(D, arguments)
        }))
    }
    h(Ce, "URL"), o({global: !0, forced: !u, sham: !i}, {URL: Ce})
}, function (e, t, n) {
    "use strict";
    n(49), n(52), n(80), n(81), Object.defineProperty(t, "__esModule", {value: !0}), t.getGettextBuilder = function () {
        return new l
    };
    var r, o = (r = n(225)) && r.__esModule ? r : {default: r}, i = n(46);

    function u(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t && a(e.prototype, t), n && a(e, n), e
    }

    var l = function () {
        function e() {
            u(this, e), this.translations = {}, this.debug = !1
        }

        return s(e, [{
            key: "setLanguage", value: function (e) {
                return this.locale = e, this
            }
        }, {
            key: "detectLocale", value: function () {
                return this.setLanguage((0, i.getLanguage)())
            }
        }, {
            key: "addTranslation", value: function (e, t) {
                return this.translations[e] = t, this
            }
        }, {
            key: "enableDebugMode", value: function () {
                return this.debug = !0, this
            }
        }, {
            key: "build", value: function () {
                return new c(this.locale || "en", this.translations, this.debug)
            }
        }]), e
    }(), c = function () {
        function e(t, n, r) {
            for (var i in u(this, e), this.gt = new o.default({
                debug: r,
                sourceLocale: "en"
            }), n) this.gt.addTranslations(i, "messages", n[i]);
            this.gt.setLocale(t)
        }

        return s(e, [{
            key: "subtitudePlaceholders", value: function (e, t) {
                return e.replace(/{([^{}]*)}/g, (function (e, n) {
                    var r = t[n];
                    return "string" == typeof r || "number" == typeof r ? r.toString() : e
                }))
            }
        }, {
            key: "gettext", value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.subtitudePlaceholders(this.gt.gettext(e), t)
            }
        }, {
            key: "ngettext", value: function (e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return this.subtitudePlaceholders(this.gt.ngettext(e, t, n).replace(/%n/g, n.toString()), r)
            }
        }]), e
    }()
}, function (e, t, n) {
    "use strict";
    var r = n(4), o = n(228).trim;
    r({target: "String", proto: !0, forced: n(229)("trim")}, {
        trim: function () {
            return o(this)
        }
    })
}, function (e, t, n) {
    "use strict";
    n.r(t), function (e) {
        n.d(t, "VClosePopover", (function () {
            return lr
        })), n.d(t, "VPopover", (function () {
            return cr
        })), n.d(t, "VTooltip", (function () {
            return sr
        })), n.d(t, "createTooltip", (function () {
            return qt
        })), n.d(t, "destroyTooltip", (function () {
            return en
        })), n.d(t, "install", (function () {
            return ar
        }));
        var r = n(74), o = n(143);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function u(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach((function (t) {
                    a(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var c = function () {
        };

        function A(e) {
            return "string" == typeof e && (e = e.split(" ")), e
        }

        function p(e, t) {
            var n, r = A(t);
            n = e.className instanceof c ? A(e.className.baseVal) : A(e.className), r.forEach((function (e) {
                -1 === n.indexOf(e) && n.push(e)
            })), e instanceof SVGElement ? e.setAttribute("class", n.join(" ")) : e.className = n.join(" ")
        }

        function f(e, t) {
            var n, r = A(t);
            n = e.className instanceof c ? A(e.className.baseVal) : A(e.className), r.forEach((function (e) {
                var t = n.indexOf(e);
                -1 !== t && n.splice(t, 1)
            })), e instanceof SVGElement ? e.setAttribute("class", n.join(" ")) : e.className = n.join(" ")
        }

        "undefined" != typeof window && (c = window.SVGAnimatedString);
        var d = !1;
        if ("undefined" != typeof window) {
            d = !1;
            try {
                var m = Object.defineProperty({}, "passive", {
                    get: function () {
                        d = !0
                    }
                });
                window.addEventListener("test", null, m)
            } catch (e) {
            }
        }
        var h = function () {
            this.__data__ = [], this.size = 0
        };
        var g = function (e, t) {
            return e === t || e != e && t != t
        };
        var v = function (e, t) {
            for (var n = e.length; n--;) if (g(e[n][0], t)) return n;
            return -1
        }, D = Array.prototype.splice;
        var y = function (e) {
            var t = this.__data__, n = v(t, e);
            return !(n < 0) && (n == t.length - 1 ? t.pop() : D.call(t, n, 1), --this.size, !0)
        };
        var E = function (e) {
            var t = this.__data__, n = v(t, e);
            return n < 0 ? void 0 : t[n][1]
        };
        var C = function (e) {
            return v(this.__data__, e) > -1
        };
        var b = function (e, t) {
            var n = this.__data__, r = v(n, e);
            return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
        };

        function x(e) {
            var t = -1, n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        x.prototype.clear = h, x.prototype.delete = y, x.prototype.get = E, x.prototype.has = C, x.prototype.set = b;
        var w = x;
        var T = function () {
            this.__data__ = new w, this.size = 0
        };
        var B = function (e) {
            var t = this.__data__, n = t.delete(e);
            return this.size = t.size, n
        };
        var F = function (e) {
            return this.__data__.get(e)
        };
        var M = function (e) {
                return this.__data__.has(e)
            },
            I = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};

        function _(e, t) {
            return e(t = {exports: {}}, t.exports), t.exports
        }

        var S = "object" == typeof I && I && I.Object === Object && I,
            N = "object" == typeof self && self && self.Object === Object && self,
            O = S || N || Function("return this")(), L = O.Symbol, k = Object.prototype, j = k.hasOwnProperty,
            R = k.toString, P = L ? L.toStringTag : void 0;
        var U = function (e) {
            var t = j.call(e, P), n = e[P];
            try {
                e[P] = void 0;
                var r = !0
            } catch (e) {
            }
            var o = R.call(e);
            return r && (t ? e[P] = n : delete e[P]), o
        }, Q = Object.prototype.toString;
        var G = function (e) {
            return Q.call(e)
        }, z = L ? L.toStringTag : void 0;
        var Y = function (e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : z && z in Object(e) ? U(e) : G(e)
        };
        var $ = function (e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        };
        var Z, H = function (e) {
                if (!$(e)) return !1;
                var t = Y(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }, W = O["__core-js_shared__"],
            V = (Z = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Z : "";
        var X = function (e) {
            return !!V && V in e
        }, J = Function.prototype.toString;
        var K = function (e) {
                if (null != e) {
                    try {
                        return J.call(e)
                    } catch (e) {
                    }
                    try {
                        return e + ""
                    } catch (e) {
                    }
                }
                return ""
            }, q = /^\[object .+?Constructor\]$/, ee = Function.prototype, te = Object.prototype, ne = ee.toString,
            re = te.hasOwnProperty,
            oe = RegExp("^" + ne.call(re).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        var ie = function (e) {
            return !(!$(e) || X(e)) && (H(e) ? oe : q).test(K(e))
        };
        var ue = function (e, t) {
            return null == e ? void 0 : e[t]
        };
        var ae = function (e, t) {
            var n = ue(e, t);
            return ie(n) ? n : void 0
        }, se = ae(O, "Map"), le = ae(Object, "create");
        var ce = function () {
            this.__data__ = le ? le(null) : {}, this.size = 0
        };
        var Ae = function (e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }, pe = Object.prototype.hasOwnProperty;
        var fe = function (e) {
            var t = this.__data__;
            if (le) {
                var n = t[e];
                return "__lodash_hash_undefined__" === n ? void 0 : n
            }
            return pe.call(t, e) ? t[e] : void 0
        }, de = Object.prototype.hasOwnProperty;
        var me = function (e) {
            var t = this.__data__;
            return le ? void 0 !== t[e] : de.call(t, e)
        };
        var he = function (e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = le && void 0 === t ? "__lodash_hash_undefined__" : t, this
        };

        function ge(e) {
            var t = -1, n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        ge.prototype.clear = ce, ge.prototype.delete = Ae, ge.prototype.get = fe, ge.prototype.has = me, ge.prototype.set = he;
        var ve = ge;
        var De = function () {
            this.size = 0, this.__data__ = {hash: new ve, map: new (se || w), string: new ve}
        };
        var ye = function (e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
        };
        var Ee = function (e, t) {
            var n = e.__data__;
            return ye(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        };
        var Ce = function (e) {
            var t = Ee(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        };
        var be = function (e) {
            return Ee(this, e).get(e)
        };
        var xe = function (e) {
            return Ee(this, e).has(e)
        };
        var we = function (e, t) {
            var n = Ee(this, e), r = n.size;
            return n.set(e, t), this.size += n.size == r ? 0 : 1, this
        };

        function Te(e) {
            var t = -1, n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        Te.prototype.clear = De, Te.prototype.delete = Ce, Te.prototype.get = be, Te.prototype.has = xe, Te.prototype.set = we;
        var Be = Te;
        var Fe = function (e, t) {
            var n = this.__data__;
            if (n instanceof w) {
                var r = n.__data__;
                if (!se || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
                n = this.__data__ = new Be(r)
            }
            return n.set(e, t), this.size = n.size, this
        };

        function Me(e) {
            var t = this.__data__ = new w(e);
            this.size = t.size
        }

        Me.prototype.clear = T, Me.prototype.delete = B, Me.prototype.get = F, Me.prototype.has = M, Me.prototype.set = Fe;
        var Ie = Me;
        var _e = function (e) {
            return this.__data__.set(e, "__lodash_hash_undefined__"), this
        };
        var Se = function (e) {
            return this.__data__.has(e)
        };

        function Ne(e) {
            var t = -1, n = null == e ? 0 : e.length;
            for (this.__data__ = new Be; ++t < n;) this.add(e[t])
        }

        Ne.prototype.add = Ne.prototype.push = _e, Ne.prototype.has = Se;
        var Oe = Ne;
        var Le = function (e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
            return !1
        };
        var ke = function (e, t) {
            return e.has(t)
        };
        var je = function (e, t, n, r, o, i) {
            var u = 1 & n, a = e.length, s = t.length;
            if (a != s && !(u && s > a)) return !1;
            var l = i.get(e);
            if (l && i.get(t)) return l == t;
            var c = -1, A = !0, p = 2 & n ? new Oe : void 0;
            for (i.set(e, t), i.set(t, e); ++c < a;) {
                var f = e[c], d = t[c];
                if (r) var m = u ? r(d, f, c, t, e, i) : r(f, d, c, e, t, i);
                if (void 0 !== m) {
                    if (m) continue;
                    A = !1;
                    break
                }
                if (p) {
                    if (!Le(t, (function (e, t) {
                        if (!ke(p, t) && (f === e || o(f, e, n, r, i))) return p.push(t)
                    }))) {
                        A = !1;
                        break
                    }
                } else if (f !== d && !o(f, d, n, r, i)) {
                    A = !1;
                    break
                }
            }
            return i.delete(e), i.delete(t), A
        }, Re = O.Uint8Array;
        var Pe = function (e) {
            var t = -1, n = Array(e.size);
            return e.forEach((function (e, r) {
                n[++t] = [r, e]
            })), n
        };
        var Ue = function (e) {
            var t = -1, n = Array(e.size);
            return e.forEach((function (e) {
                n[++t] = e
            })), n
        }, Qe = L ? L.prototype : void 0, Ge = Qe ? Qe.valueOf : void 0;
        var ze = function (e, t, n, r, o, i, u) {
            switch (n) {
                case"[object DataView]":
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case"[object ArrayBuffer]":
                    return !(e.byteLength != t.byteLength || !i(new Re(e), new Re(t)));
                case"[object Boolean]":
                case"[object Date]":
                case"[object Number]":
                    return g(+e, +t);
                case"[object Error]":
                    return e.name == t.name && e.message == t.message;
                case"[object RegExp]":
                case"[object String]":
                    return e == t + "";
                case"[object Map]":
                    var a = Pe;
                case"[object Set]":
                    var s = 1 & r;
                    if (a || (a = Ue), e.size != t.size && !s) return !1;
                    var l = u.get(e);
                    if (l) return l == t;
                    r |= 2, u.set(e, t);
                    var c = je(a(e), a(t), r, o, i, u);
                    return u.delete(e), c;
                case"[object Symbol]":
                    if (Ge) return Ge.call(e) == Ge.call(t)
            }
            return !1
        };
        var Ye = function (e, t) {
            for (var n = -1, r = t.length, o = e.length; ++n < r;) e[o + n] = t[n];
            return e
        }, $e = Array.isArray;
        var Ze = function (e, t, n) {
            var r = t(e);
            return $e(e) ? r : Ye(r, n(e))
        };
        var He = function (e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, o = 0, i = []; ++n < r;) {
                var u = e[n];
                t(u, n, e) && (i[o++] = u)
            }
            return i
        };
        var We = function () {
            return []
        }, Ve = Object.prototype.propertyIsEnumerable, Xe = Object.getOwnPropertySymbols, Je = Xe ? function (e) {
            return null == e ? [] : (e = Object(e), He(Xe(e), (function (t) {
                return Ve.call(e, t)
            })))
        } : We;
        var Ke = function (e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        };
        var qe = function (e) {
            return null != e && "object" == typeof e
        };
        var et = function (e) {
            return qe(e) && "[object Arguments]" == Y(e)
        }, tt = Object.prototype, nt = tt.hasOwnProperty, rt = tt.propertyIsEnumerable, ot = et(function () {
            return arguments
        }()) ? et : function (e) {
            return qe(e) && nt.call(e, "callee") && !rt.call(e, "callee")
        };
        var it = function () {
            return !1
        }, ut = _((function (e, t) {
            var n = t && !t.nodeType && t, r = n && e && !e.nodeType && e, o = r && r.exports === n ? O.Buffer : void 0,
                i = (o ? o.isBuffer : void 0) || it;
            e.exports = i
        })), at = /^(?:0|[1-9]\d*)$/;
        var st = function (e, t) {
            var n = typeof e;
            return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && at.test(e)) && e > -1 && e % 1 == 0 && e < t
        };
        var lt = function (e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        }, ct = {};
        ct["[object Float32Array]"] = ct["[object Float64Array]"] = ct["[object Int8Array]"] = ct["[object Int16Array]"] = ct["[object Int32Array]"] = ct["[object Uint8Array]"] = ct["[object Uint8ClampedArray]"] = ct["[object Uint16Array]"] = ct["[object Uint32Array]"] = !0, ct["[object Arguments]"] = ct["[object Array]"] = ct["[object ArrayBuffer]"] = ct["[object Boolean]"] = ct["[object DataView]"] = ct["[object Date]"] = ct["[object Error]"] = ct["[object Function]"] = ct["[object Map]"] = ct["[object Number]"] = ct["[object Object]"] = ct["[object RegExp]"] = ct["[object Set]"] = ct["[object String]"] = ct["[object WeakMap]"] = !1;
        var At = function (e) {
            return qe(e) && lt(e.length) && !!ct[Y(e)]
        };
        var pt = function (e) {
            return function (t) {
                return e(t)
            }
        }, ft = _((function (e, t) {
            var n = t && !t.nodeType && t, r = n && e && !e.nodeType && e, o = r && r.exports === n && S.process,
                i = function () {
                    try {
                        var e = r && r.require && r.require("util").types;
                        return e || o && o.binding && o.binding("util")
                    } catch (e) {
                    }
                }();
            e.exports = i
        })), dt = ft && ft.isTypedArray, mt = dt ? pt(dt) : At, ht = Object.prototype.hasOwnProperty;
        var gt = function (e, t) {
            var n = $e(e), r = !n && ot(e), o = !n && !r && ut(e), i = !n && !r && !o && mt(e), u = n || r || o || i,
                a = u ? Ke(e.length, String) : [], s = a.length;
            for (var l in e) !t && !ht.call(e, l) || u && ("length" == l || o && ("offset" == l || "parent" == l) || i && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || st(l, s)) || a.push(l);
            return a
        }, vt = Object.prototype;
        var Dt = function (e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || vt)
        };
        var yt = function (e, t) {
            return function (n) {
                return e(t(n))
            }
        }, Et = yt(Object.keys, Object), Ct = Object.prototype.hasOwnProperty;
        var bt = function (e) {
            if (!Dt(e)) return Et(e);
            var t = [];
            for (var n in Object(e)) Ct.call(e, n) && "constructor" != n && t.push(n);
            return t
        };
        var xt = function (e) {
            return null != e && lt(e.length) && !H(e)
        };
        var wt = function (e) {
            return xt(e) ? gt(e) : bt(e)
        };
        var Tt = function (e) {
            return Ze(e, wt, Je)
        }, Bt = Object.prototype.hasOwnProperty;
        var Ft = function (e, t, n, r, o, i) {
                var u = 1 & n, a = Tt(e), s = a.length;
                if (s != Tt(t).length && !u) return !1;
                for (var l = s; l--;) {
                    var c = a[l];
                    if (!(u ? c in t : Bt.call(t, c))) return !1
                }
                var A = i.get(e);
                if (A && i.get(t)) return A == t;
                var p = !0;
                i.set(e, t), i.set(t, e);
                for (var f = u; ++l < s;) {
                    var d = e[c = a[l]], m = t[c];
                    if (r) var h = u ? r(m, d, c, t, e, i) : r(d, m, c, e, t, i);
                    if (!(void 0 === h ? d === m || o(d, m, n, r, i) : h)) {
                        p = !1;
                        break
                    }
                    f || (f = "constructor" == c)
                }
                if (p && !f) {
                    var g = e.constructor, v = t.constructor;
                    g == v || !("constructor" in e) || !("constructor" in t) || "function" == typeof g && g instanceof g && "function" == typeof v && v instanceof v || (p = !1)
                }
                return i.delete(e), i.delete(t), p
            }, Mt = ae(O, "DataView"), It = ae(O, "Promise"), _t = ae(O, "Set"), St = ae(O, "WeakMap"), Nt = K(Mt),
            Ot = K(se), Lt = K(It), kt = K(_t), jt = K(St), Rt = Y;
        (Mt && "[object DataView]" != Rt(new Mt(new ArrayBuffer(1))) || se && "[object Map]" != Rt(new se) || It && "[object Promise]" != Rt(It.resolve()) || _t && "[object Set]" != Rt(new _t) || St && "[object WeakMap]" != Rt(new St)) && (Rt = function (e) {
            var t = Y(e), n = "[object Object]" == t ? e.constructor : void 0, r = n ? K(n) : "";
            if (r) switch (r) {
                case Nt:
                    return "[object DataView]";
                case Ot:
                    return "[object Map]";
                case Lt:
                    return "[object Promise]";
                case kt:
                    return "[object Set]";
                case jt:
                    return "[object WeakMap]"
            }
            return t
        });
        var Pt = Rt, Ut = Object.prototype.hasOwnProperty;
        var Qt = function (e, t, n, r, o, i) {
            var u = $e(e), a = $e(t), s = u ? "[object Array]" : Pt(e), l = a ? "[object Array]" : Pt(t),
                c = "[object Object]" == (s = "[object Arguments]" == s ? "[object Object]" : s),
                A = "[object Object]" == (l = "[object Arguments]" == l ? "[object Object]" : l), p = s == l;
            if (p && ut(e)) {
                if (!ut(t)) return !1;
                u = !0, c = !1
            }
            if (p && !c) return i || (i = new Ie), u || mt(e) ? je(e, t, n, r, o, i) : ze(e, t, s, n, r, o, i);
            if (!(1 & n)) {
                var f = c && Ut.call(e, "__wrapped__"), d = A && Ut.call(t, "__wrapped__");
                if (f || d) {
                    var m = f ? e.value() : e, h = d ? t.value() : t;
                    return i || (i = new Ie), o(m, h, n, r, i)
                }
            }
            return !!p && (i || (i = new Ie), Ft(e, t, n, r, o, i))
        };
        var Gt = function e(t, n, r, o, i) {
            return t === n || (null == t || null == n || !qe(t) && !qe(n) ? t != t && n != n : Qt(t, n, r, o, e, i))
        };
        var zt = function (e, t) {
            return Gt(e, t)
        }, Yt = {
            container: !1,
            delay: 0,
            html: !1,
            placement: "top",
            title: "",
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            offset: 0
        }, $t = [], Zt = function () {
            function e(t, n) {
                var r = this;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), a(this, "_events", []), a(this, "_setTooltipNodeEvent", (function (e, t, n, o) {
                    var i = e.relatedreference || e.toElement || e.relatedTarget;
                    return !!r._tooltipNode.contains(i) && (r._tooltipNode.addEventListener(e.type, (function n(i) {
                        var u = i.relatedreference || i.toElement || i.relatedTarget;
                        r._tooltipNode.removeEventListener(e.type, n), t.contains(u) || r._scheduleHide(t, o.delay, o, i)
                    })), !0)
                })), n = l({}, Yt, {}, n), t.jquery && (t = t[0]), this.show = this.show.bind(this), this.hide = this.hide.bind(this), this.reference = t, this.options = n, this._isOpen = !1, this._init()
            }

            var t, n, o;
            return t = e, (n = [{
                key: "show", value: function () {
                    this._show(this.reference, this.options)
                }
            }, {
                key: "hide", value: function () {
                    this._hide()
                }
            }, {
                key: "dispose", value: function () {
                    this._dispose()
                }
            }, {
                key: "toggle", value: function () {
                    return this._isOpen ? this.hide() : this.show()
                }
            }, {
                key: "setClasses", value: function (e) {
                    this._classes = e
                }
            }, {
                key: "setContent", value: function (e) {
                    this.options.title = e, this._tooltipNode && this._setContent(e, this.options)
                }
            }, {
                key: "setOptions", value: function (e) {
                    var t = !1, n = e && e.classes || nn.options.defaultClass;
                    zt(this._classes, n) || (this.setClasses(n), t = !0), e = Xt(e);
                    var r = !1, o = !1;
                    for (var i in this.options.offset === e.offset && this.options.placement === e.placement || (r = !0), (this.options.template !== e.template || this.options.trigger !== e.trigger || this.options.container !== e.container || t) && (o = !0), e) this.options[i] = e[i];
                    if (this._tooltipNode) if (o) {
                        var u = this._isOpen;
                        this.dispose(), this._init(), u && this.show()
                    } else r && this.popperInstance.update()
                }
            }, {
                key: "_init", value: function () {
                    var e = "string" == typeof this.options.trigger ? this.options.trigger.split(" ") : [];
                    this._isDisposed = !1, this._enableDocumentTouch = -1 === e.indexOf("manual"), e = e.filter((function (e) {
                        return -1 !== ["click", "hover", "focus"].indexOf(e)
                    })), this._setEventListeners(this.reference, e, this.options), this.$_originalTitle = this.reference.getAttribute("title"), this.reference.removeAttribute("title"), this.reference.setAttribute("data-original-title", this.$_originalTitle)
                }
            }, {
                key: "_create", value: function (e, t) {
                    var n = window.document.createElement("div");
                    n.innerHTML = t.trim();
                    var r = n.childNodes[0];
                    return r.id = "tooltip_".concat(Math.random().toString(36).substr(2, 10)), r.setAttribute("aria-hidden", "true"), this.options.autoHide && -1 !== this.options.trigger.indexOf("hover") && (r.addEventListener("mouseenter", this.hide), r.addEventListener("click", this.hide)), r
                }
            }, {
                key: "_setContent", value: function (e, t) {
                    var n = this;
                    this.asyncContent = !1, this._applyContent(e, t).then((function () {
                        n.popperInstance.update()
                    }))
                }
            }, {
                key: "_applyContent", value: function (e, t) {
                    var n = this;
                    return new Promise((function (r, o) {
                        var i = t.html, u = n._tooltipNode;
                        if (u) {
                            var a = u.querySelector(n.options.innerSelector);
                            if (1 === e.nodeType) {
                                if (i) {
                                    for (; a.firstChild;) a.removeChild(a.firstChild);
                                    a.appendChild(e)
                                }
                            } else {
                                if ("function" == typeof e) {
                                    var s = e();
                                    return void (s && "function" == typeof s.then ? (n.asyncContent = !0, t.loadingClass && p(u, t.loadingClass), t.loadingContent && n._applyContent(t.loadingContent, t), s.then((function (e) {
                                        return t.loadingClass && f(u, t.loadingClass), n._applyContent(e, t)
                                    })).then(r).catch(o)) : n._applyContent(s, t).then(r).catch(o))
                                }
                                i ? a.innerHTML = e : a.innerText = e
                            }
                            r()
                        }
                    }))
                }
            }, {
                key: "_show", value: function (e, t) {
                    if (!t || "string" != typeof t.container || document.querySelector(t.container)) {
                        clearTimeout(this._disposeTimer), delete (t = Object.assign({}, t)).offset;
                        var n = !0;
                        this._tooltipNode && (p(this._tooltipNode, this._classes), n = !1);
                        var r = this._ensureShown(e, t);
                        return n && this._tooltipNode && p(this._tooltipNode, this._classes), p(e, ["v-tooltip-open"]), r
                    }
                }
            }, {
                key: "_ensureShown", value: function (e, t) {
                    var n = this;
                    if (this._isOpen) return this;
                    if (this._isOpen = !0, $t.push(this), this._tooltipNode) return this._tooltipNode.style.display = "", this._tooltipNode.setAttribute("aria-hidden", "false"), this.popperInstance.enableEventListeners(), this.popperInstance.update(), this.asyncContent && this._setContent(t.title, t), this;
                    var o = e.getAttribute("title") || t.title;
                    if (!o) return this;
                    var i = this._create(e, t.template);
                    this._tooltipNode = i, e.setAttribute("aria-describedby", i.id);
                    var u = this._findContainer(t.container, e);
                    this._append(i, u);
                    var a = l({}, t.popperOptions, {placement: t.placement});
                    return a.modifiers = l({}, a.modifiers, {arrow: {element: this.options.arrowSelector}}), t.boundariesElement && (a.modifiers.preventOverflow = {boundariesElement: t.boundariesElement}), this.popperInstance = new r.a(e, i, a), this._setContent(o, t), requestAnimationFrame((function () {
                        !n._isDisposed && n.popperInstance ? (n.popperInstance.update(), requestAnimationFrame((function () {
                            n._isDisposed ? n.dispose() : n._isOpen && i.setAttribute("aria-hidden", "false")
                        }))) : n.dispose()
                    })), this
                }
            }, {
                key: "_noLongerOpen", value: function () {
                    var e = $t.indexOf(this);
                    -1 !== e && $t.splice(e, 1)
                }
            }, {
                key: "_hide", value: function () {
                    var e = this;
                    if (!this._isOpen) return this;
                    this._isOpen = !1, this._noLongerOpen(), this._tooltipNode.style.display = "none", this._tooltipNode.setAttribute("aria-hidden", "true"), this.popperInstance.disableEventListeners(), clearTimeout(this._disposeTimer);
                    var t = nn.options.disposeTimeout;
                    return null !== t && (this._disposeTimer = setTimeout((function () {
                        e._tooltipNode && (e._tooltipNode.removeEventListener("mouseenter", e.hide), e._tooltipNode.removeEventListener("click", e.hide), e._removeTooltipNode())
                    }), t)), f(this.reference, ["v-tooltip-open"]), this
                }
            }, {
                key: "_removeTooltipNode", value: function () {
                    if (this._tooltipNode) {
                        var e = this._tooltipNode.parentNode;
                        e && (e.removeChild(this._tooltipNode), this.reference.removeAttribute("aria-describedby")), this._tooltipNode = null
                    }
                }
            }, {
                key: "_dispose", value: function () {
                    var e = this;
                    return this._isDisposed = !0, this.reference.removeAttribute("data-original-title"), this.$_originalTitle && this.reference.setAttribute("title", this.$_originalTitle), this._events.forEach((function (t) {
                        var n = t.func, r = t.event;
                        e.reference.removeEventListener(r, n)
                    })), this._events = [], this._tooltipNode ? (this._hide(), this._tooltipNode.removeEventListener("mouseenter", this.hide), this._tooltipNode.removeEventListener("click", this.hide), this.popperInstance.destroy(), this.popperInstance.options.removeOnDestroy || this._removeTooltipNode()) : this._noLongerOpen(), this
                }
            }, {
                key: "_findContainer", value: function (e, t) {
                    return "string" == typeof e ? e = window.document.querySelector(e) : !1 === e && (e = t.parentNode), e
                }
            }, {
                key: "_append", value: function (e, t) {
                    t.appendChild(e)
                }
            }, {
                key: "_setEventListeners", value: function (e, t, n) {
                    var r = this, o = [], i = [];
                    t.forEach((function (e) {
                        switch (e) {
                            case"hover":
                                o.push("mouseenter"), i.push("mouseleave"), r.options.hideOnTargetClick && i.push("click");
                                break;
                            case"focus":
                                o.push("focus"), i.push("blur"), r.options.hideOnTargetClick && i.push("click");
                                break;
                            case"click":
                                o.push("click"), i.push("click")
                        }
                    })), o.forEach((function (t) {
                        var o = function (t) {
                            !0 !== r._isOpen && (t.usedByTooltip = !0, r._scheduleShow(e, n.delay, n, t))
                        };
                        r._events.push({event: t, func: o}), e.addEventListener(t, o)
                    })), i.forEach((function (t) {
                        var o = function (t) {
                            !0 !== t.usedByTooltip && r._scheduleHide(e, n.delay, n, t)
                        };
                        r._events.push({event: t, func: o}), e.addEventListener(t, o)
                    }))
                }
            }, {
                key: "_onDocumentTouch", value: function (e) {
                    this._enableDocumentTouch && this._scheduleHide(this.reference, this.options.delay, this.options, e)
                }
            }, {
                key: "_scheduleShow", value: function (e, t, n) {
                    var r = this, o = t && t.show || t || 0;
                    clearTimeout(this._scheduleTimer), this._scheduleTimer = window.setTimeout((function () {
                        return r._show(e, n)
                    }), o)
                }
            }, {
                key: "_scheduleHide", value: function (e, t, n, r) {
                    var o = this, i = t && t.hide || t || 0;
                    clearTimeout(this._scheduleTimer), this._scheduleTimer = window.setTimeout((function () {
                        if (!1 !== o._isOpen && o._tooltipNode.ownerDocument.body.contains(o._tooltipNode)) {
                            if ("mouseleave" === r.type && o._setTooltipNodeEvent(r, e, t, n)) return;
                            o._hide(e, n)
                        }
                    }), i)
                }
            }]) && u(t.prototype, n), o && u(t, o), e
        }();
        "undefined" != typeof document && document.addEventListener("touchstart", (function (e) {
            for (var t = 0; t < $t.length; t++) $t[t]._onDocumentTouch(e)
        }), !d || {passive: !0, capture: !0});
        var Ht = {enabled: !0},
            Wt = ["top", "top-start", "top-end", "right", "right-start", "right-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end"],
            Vt = {
                defaultPlacement: "top",
                defaultClass: "vue-tooltip-theme",
                defaultTargetClass: "has-tooltip",
                defaultHtml: !0,
                defaultTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                defaultArrowSelector: ".tooltip-arrow, .tooltip__arrow",
                defaultInnerSelector: ".tooltip-inner, .tooltip__inner",
                defaultDelay: 0,
                defaultTrigger: "hover focus",
                defaultOffset: 0,
                defaultContainer: "body",
                defaultBoundariesElement: void 0,
                defaultPopperOptions: {},
                defaultLoadingClass: "tooltip-loading",
                defaultLoadingContent: "...",
                autoHide: !0,
                defaultHideOnTargetClick: !0,
                disposeTimeout: 5e3,
                popover: {
                    defaultPlacement: "bottom",
                    defaultClass: "vue-popover-theme",
                    defaultBaseClass: "tooltip popover",
                    defaultWrapperClass: "wrapper",
                    defaultInnerClass: "tooltip-inner popover-inner",
                    defaultArrowClass: "tooltip-arrow popover-arrow",
                    defaultOpenClass: "open",
                    defaultDelay: 0,
                    defaultTrigger: "click",
                    defaultOffset: 0,
                    defaultContainer: "body",
                    defaultBoundariesElement: void 0,
                    defaultPopperOptions: {},
                    defaultAutoHide: !0,
                    defaultHandleResize: !0
                }
            };

        function Xt(e) {
            var t = {
                placement: void 0 !== e.placement ? e.placement : nn.options.defaultPlacement,
                delay: void 0 !== e.delay ? e.delay : nn.options.defaultDelay,
                html: void 0 !== e.html ? e.html : nn.options.defaultHtml,
                template: void 0 !== e.template ? e.template : nn.options.defaultTemplate,
                arrowSelector: void 0 !== e.arrowSelector ? e.arrowSelector : nn.options.defaultArrowSelector,
                innerSelector: void 0 !== e.innerSelector ? e.innerSelector : nn.options.defaultInnerSelector,
                trigger: void 0 !== e.trigger ? e.trigger : nn.options.defaultTrigger,
                offset: void 0 !== e.offset ? e.offset : nn.options.defaultOffset,
                container: void 0 !== e.container ? e.container : nn.options.defaultContainer,
                boundariesElement: void 0 !== e.boundariesElement ? e.boundariesElement : nn.options.defaultBoundariesElement,
                autoHide: void 0 !== e.autoHide ? e.autoHide : nn.options.autoHide,
                hideOnTargetClick: void 0 !== e.hideOnTargetClick ? e.hideOnTargetClick : nn.options.defaultHideOnTargetClick,
                loadingClass: void 0 !== e.loadingClass ? e.loadingClass : nn.options.defaultLoadingClass,
                loadingContent: void 0 !== e.loadingContent ? e.loadingContent : nn.options.defaultLoadingContent,
                popperOptions: l({}, void 0 !== e.popperOptions ? e.popperOptions : nn.options.defaultPopperOptions)
            };
            if (t.offset) {
                var n = i(t.offset), r = t.offset;
                ("number" === n || "string" === n && -1 === r.indexOf(",")) && (r = "0, ".concat(r)), t.popperOptions.modifiers || (t.popperOptions.modifiers = {}), t.popperOptions.modifiers.offset = {offset: r}
            }
            return t.trigger && -1 !== t.trigger.indexOf("click") && (t.hideOnTargetClick = !1), t
        }

        function Jt(e, t) {
            for (var n = e.placement, r = 0; r < Wt.length; r++) {
                var o = Wt[r];
                t[o] && (n = o)
            }
            return n
        }

        function Kt(e) {
            var t = i(e);
            return "string" === t ? e : !(!e || "object" !== t) && e.content
        }

        function qt(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = Kt(t),
                o = void 0 !== t.classes ? t.classes : nn.options.defaultClass,
                i = l({title: r}, Xt(l({}, t, {placement: Jt(t, n)}))), u = e._tooltip = new Zt(e, i);
            u.setClasses(o), u._vueEl = e;
            var a = void 0 !== t.targetClasses ? t.targetClasses : nn.options.defaultTargetClass;
            return e._tooltipTargetClasses = a, p(e, a), u
        }

        function en(e) {
            e._tooltip && (e._tooltip.dispose(), delete e._tooltip, delete e._tooltipOldShow), e._tooltipTargetClasses && (f(e, e._tooltipTargetClasses), delete e._tooltipTargetClasses)
        }

        function tn(e, t) {
            var n, r = t.value, o = (t.oldValue, t.modifiers), i = Kt(r);
            i && Ht.enabled ? (e._tooltip ? ((n = e._tooltip).setContent(i), n.setOptions(l({}, r, {placement: Jt(r, o)}))) : n = qt(e, r, o), void 0 !== r.show && r.show !== e._tooltipOldShow && (e._tooltipOldShow = r.show, r.show ? n.show() : n.hide())) : en(e)
        }

        var nn = {
            options: Vt, bind: tn, update: tn, unbind: function (e) {
                en(e)
            }
        };

        function rn(e) {
            e.addEventListener("click", un), e.addEventListener("touchstart", an, !!d && {passive: !0})
        }

        function on(e) {
            e.removeEventListener("click", un), e.removeEventListener("touchstart", an), e.removeEventListener("touchend", sn), e.removeEventListener("touchcancel", ln)
        }

        function un(e) {
            var t = e.currentTarget;
            e.closePopover = !t.$_vclosepopover_touch, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all
        }

        function an(e) {
            if (1 === e.changedTouches.length) {
                var t = e.currentTarget;
                t.$_vclosepopover_touch = !0;
                var n = e.changedTouches[0];
                t.$_vclosepopover_touchPoint = n, t.addEventListener("touchend", sn), t.addEventListener("touchcancel", ln)
            }
        }

        function sn(e) {
            var t = e.currentTarget;
            if (t.$_vclosepopover_touch = !1, 1 === e.changedTouches.length) {
                var n = e.changedTouches[0], r = t.$_vclosepopover_touchPoint;
                e.closePopover = Math.abs(n.screenY - r.screenY) < 20 && Math.abs(n.screenX - r.screenX) < 20, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all
            }
        }

        function ln(e) {
            e.currentTarget.$_vclosepopover_touch = !1
        }

        var cn = {
            bind: function (e, t) {
                var n = t.value, r = t.modifiers;
                e.$_closePopoverModifiers = r, (void 0 === n || n) && rn(e)
            }, update: function (e, t) {
                var n = t.value, r = t.oldValue, o = t.modifiers;
                e.$_closePopoverModifiers = o, n !== r && (void 0 === n || n ? rn(e) : on(e))
            }, unbind: function (e) {
                on(e)
            }
        };

        function An(e) {
            var t = nn.options.popover[e];
            return void 0 === t ? nn.options[e] : t
        }

        var pn = !1;
        "undefined" != typeof window && "undefined" != typeof navigator && (pn = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
        var fn = [], dn = function () {
        };
        "undefined" != typeof window && (dn = window.Element);
        var mn = {
            name: "VPopover", components: {ResizeObserver: o.a}, props: {
                open: {type: Boolean, default: !1},
                disabled: {type: Boolean, default: !1},
                placement: {
                    type: String, default: function () {
                        return An("defaultPlacement")
                    }
                },
                delay: {
                    type: [String, Number, Object], default: function () {
                        return An("defaultDelay")
                    }
                },
                offset: {
                    type: [String, Number], default: function () {
                        return An("defaultOffset")
                    }
                },
                trigger: {
                    type: String, default: function () {
                        return An("defaultTrigger")
                    }
                },
                container: {
                    type: [String, Object, dn, Boolean], default: function () {
                        return An("defaultContainer")
                    }
                },
                boundariesElement: {
                    type: [String, dn], default: function () {
                        return An("defaultBoundariesElement")
                    }
                },
                popperOptions: {
                    type: Object, default: function () {
                        return An("defaultPopperOptions")
                    }
                },
                popoverClass: {
                    type: [String, Array], default: function () {
                        return An("defaultClass")
                    }
                },
                popoverBaseClass: {
                    type: [String, Array], default: function () {
                        return nn.options.popover.defaultBaseClass
                    }
                },
                popoverInnerClass: {
                    type: [String, Array], default: function () {
                        return nn.options.popover.defaultInnerClass
                    }
                },
                popoverWrapperClass: {
                    type: [String, Array], default: function () {
                        return nn.options.popover.defaultWrapperClass
                    }
                },
                popoverArrowClass: {
                    type: [String, Array], default: function () {
                        return nn.options.popover.defaultArrowClass
                    }
                },
                autoHide: {
                    type: Boolean, default: function () {
                        return nn.options.popover.defaultAutoHide
                    }
                },
                handleResize: {
                    type: Boolean, default: function () {
                        return nn.options.popover.defaultHandleResize
                    }
                },
                openGroup: {type: String, default: null},
                openClass: {
                    type: [String, Array], default: function () {
                        return nn.options.popover.defaultOpenClass
                    }
                }
            }, data: function () {
                return {isOpen: !1, id: Math.random().toString(36).substr(2, 10)}
            }, computed: {
                cssClass: function () {
                    return a({}, this.openClass, this.isOpen)
                }, popoverId: function () {
                    return "popover_".concat(this.id)
                }
            }, watch: {
                open: function (e) {
                    e ? this.show() : this.hide()
                },
                disabled: function (e, t) {
                    e !== t && (e ? this.hide() : this.open && this.show())
                },
                container: function (e) {
                    if (this.isOpen && this.popperInstance) {
                        var t = this.$refs.popover, n = this.$refs.trigger, r = this.$_findContainer(this.container, n);
                        if (!r) return void console.warn("No container for popover", this);
                        r.appendChild(t), this.popperInstance.scheduleUpdate()
                    }
                },
                trigger: function (e) {
                    this.$_removeEventListeners(), this.$_addEventListeners()
                },
                placement: function (e) {
                    var t = this;
                    this.$_updatePopper((function () {
                        t.popperInstance.options.placement = e
                    }))
                },
                offset: "$_restartPopper",
                boundariesElement: "$_restartPopper",
                popperOptions: {handler: "$_restartPopper", deep: !0}
            }, created: function () {
                this.$_isDisposed = !1, this.$_mounted = !1, this.$_events = [], this.$_preventOpen = !1
            }, mounted: function () {
                var e = this.$refs.popover;
                e.parentNode && e.parentNode.removeChild(e), this.$_init(), this.open && this.show()
            }, deactivated: function () {
                this.hide()
            }, beforeDestroy: function () {
                this.dispose()
            }, methods: {
                show: function () {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.event,
                        r = (t.skipDelay, t.force), o = void 0 !== r && r;
                    !o && this.disabled || (this.$_scheduleShow(n), this.$emit("show")), this.$emit("update:open", !0), this.$_beingShowed = !0, requestAnimationFrame((function () {
                        e.$_beingShowed = !1
                    }))
                }, hide: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.event;
                    e.skipDelay;
                    this.$_scheduleHide(t), this.$emit("hide"), this.$emit("update:open", !1)
                }, dispose: function () {
                    if (this.$_isDisposed = !0, this.$_removeEventListeners(), this.hide({skipDelay: !0}), this.popperInstance && (this.popperInstance.destroy(), !this.popperInstance.options.removeOnDestroy)) {
                        var e = this.$refs.popover;
                        e.parentNode && e.parentNode.removeChild(e)
                    }
                    this.$_mounted = !1, this.popperInstance = null, this.isOpen = !1, this.$emit("dispose")
                }, $_init: function () {
                    -1 === this.trigger.indexOf("manual") && this.$_addEventListeners()
                }, $_show: function () {
                    var e = this, t = this.$refs.trigger, n = this.$refs.popover;
                    if (clearTimeout(this.$_disposeTimer), !this.isOpen) {
                        if (this.popperInstance && (this.isOpen = !0, this.popperInstance.enableEventListeners(), this.popperInstance.scheduleUpdate()), !this.$_mounted) {
                            var o = this.$_findContainer(this.container, t);
                            if (!o) return void console.warn("No container for popover", this);
                            o.appendChild(n), this.$_mounted = !0
                        }
                        if (!this.popperInstance) {
                            var i = l({}, this.popperOptions, {placement: this.placement});
                            if (i.modifiers = l({}, i.modifiers, {arrow: l({}, i.modifiers && i.modifiers.arrow, {element: this.$refs.arrow})}), this.offset) {
                                var u = this.$_getOffset();
                                i.modifiers.offset = l({}, i.modifiers && i.modifiers.offset, {offset: u})
                            }
                            this.boundariesElement && (i.modifiers.preventOverflow = l({}, i.modifiers && i.modifiers.preventOverflow, {boundariesElement: this.boundariesElement})), this.popperInstance = new r.a(t, n, i), requestAnimationFrame((function () {
                                if (e.hidden) return e.hidden = !1, void e.$_hide();
                                !e.$_isDisposed && e.popperInstance ? (e.popperInstance.scheduleUpdate(), requestAnimationFrame((function () {
                                    if (e.hidden) return e.hidden = !1, void e.$_hide();
                                    e.$_isDisposed ? e.dispose() : e.isOpen = !0
                                }))) : e.dispose()
                            }))
                        }
                        var a = this.openGroup;
                        if (a) for (var s, c = 0; c < fn.length; c++) (s = fn[c]).openGroup !== a && (s.hide(), s.$emit("close-group"));
                        fn.push(this), this.$emit("apply-show")
                    }
                }, $_hide: function () {
                    var e = this;
                    if (this.isOpen) {
                        var t = fn.indexOf(this);
                        -1 !== t && fn.splice(t, 1), this.isOpen = !1, this.popperInstance && this.popperInstance.disableEventListeners(), clearTimeout(this.$_disposeTimer);
                        var n = nn.options.popover.disposeTimeout || nn.options.disposeTimeout;
                        null !== n && (this.$_disposeTimer = setTimeout((function () {
                            var t = e.$refs.popover;
                            t && (t.parentNode && t.parentNode.removeChild(t), e.$_mounted = !1)
                        }), n)), this.$emit("apply-hide")
                    }
                }, $_findContainer: function (e, t) {
                    return "string" == typeof e ? e = window.document.querySelector(e) : !1 === e && (e = t.parentNode), e
                }, $_getOffset: function () {
                    var e = i(this.offset), t = this.offset;
                    return ("number" === e || "string" === e && -1 === t.indexOf(",")) && (t = "0, ".concat(t)), t
                }, $_addEventListeners: function () {
                    var e = this, t = this.$refs.trigger, n = [], r = [];
                    ("string" == typeof this.trigger ? this.trigger.split(" ").filter((function (e) {
                        return -1 !== ["click", "hover", "focus"].indexOf(e)
                    })) : []).forEach((function (e) {
                        switch (e) {
                            case"hover":
                                n.push("mouseenter"), r.push("mouseleave");
                                break;
                            case"focus":
                                n.push("focus"), r.push("blur");
                                break;
                            case"click":
                                n.push("click"), r.push("click")
                        }
                    })), n.forEach((function (n) {
                        var r = function (t) {
                            e.isOpen || (t.usedByTooltip = !0, !e.$_preventOpen && e.show({event: t}), e.hidden = !1)
                        };
                        e.$_events.push({event: n, func: r}), t.addEventListener(n, r)
                    })), r.forEach((function (n) {
                        var r = function (t) {
                            t.usedByTooltip || (e.hide({event: t}), e.hidden = !0)
                        };
                        e.$_events.push({event: n, func: r}), t.addEventListener(n, r)
                    }))
                }, $_scheduleShow: function () {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (clearTimeout(this.$_scheduleTimer), e) this.$_show(); else {
                        var t = parseInt(this.delay && this.delay.show || this.delay || 0);
                        this.$_scheduleTimer = setTimeout(this.$_show.bind(this), t)
                    }
                }, $_scheduleHide: function () {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (clearTimeout(this.$_scheduleTimer), n) this.$_hide(); else {
                        var r = parseInt(this.delay && this.delay.hide || this.delay || 0);
                        this.$_scheduleTimer = setTimeout((function () {
                            if (e.isOpen) {
                                if (t && "mouseleave" === t.type) if (e.$_setTooltipNodeEvent(t)) return;
                                e.$_hide()
                            }
                        }), r)
                    }
                }, $_setTooltipNodeEvent: function (e) {
                    var t = this, n = this.$refs.trigger, r = this.$refs.popover,
                        o = e.relatedreference || e.toElement || e.relatedTarget;
                    return !!r.contains(o) && (r.addEventListener(e.type, (function o(i) {
                        var u = i.relatedreference || i.toElement || i.relatedTarget;
                        r.removeEventListener(e.type, o), n.contains(u) || t.hide({event: i})
                    })), !0)
                }, $_removeEventListeners: function () {
                    var e = this.$refs.trigger;
                    this.$_events.forEach((function (t) {
                        var n = t.func, r = t.event;
                        e.removeEventListener(r, n)
                    })), this.$_events = []
                }, $_updatePopper: function (e) {
                    this.popperInstance && (e(), this.isOpen && this.popperInstance.scheduleUpdate())
                }, $_restartPopper: function () {
                    if (this.popperInstance) {
                        var e = this.isOpen;
                        this.dispose(), this.$_isDisposed = !1, this.$_init(), e && this.show({
                            skipDelay: !0,
                            force: !0
                        })
                    }
                }, $_handleGlobalClose: function (e) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.$_beingShowed || (this.hide({event: e}), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), n && (this.$_preventOpen = !0, setTimeout((function () {
                        t.$_preventOpen = !1
                    }), 300)))
                }, $_handleResize: function () {
                    this.isOpen && this.popperInstance && (this.popperInstance.scheduleUpdate(), this.$emit("resize"))
                }
            }
        };

        function hn(e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = function (n) {
                var r = fn[n];
                if (r.$refs.popover) {
                    var o = r.$refs.popover.contains(e.target);
                    requestAnimationFrame((function () {
                        (e.closeAllPopover || e.closePopover && o || r.autoHide && !o) && r.$_handleGlobalClose(e, t)
                    }))
                }
            }, r = 0; r < fn.length; r++) n(r)
        }

        "undefined" != typeof document && "undefined" != typeof window && (pn ? document.addEventListener("touchend", (function (e) {
            hn(e, !0)
        }), !d || {passive: !0, capture: !0}) : window.addEventListener("click", (function (e) {
            hn(e)
        }), !0));
        var gn = mn, vn = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "v-popover", class: e.cssClass}, [n("div", {
                ref: "trigger",
                staticClass: "trigger",
                staticStyle: {display: "inline-block"},
                attrs: {"aria-describedby": e.popoverId, tabindex: -1 !== e.trigger.indexOf("focus") ? 0 : void 0}
            }, [e._t("default")], 2), e._v(" "), n("div", {
                ref: "popover",
                class: [e.popoverBaseClass, e.popoverClass, e.cssClass],
                style: {visibility: e.isOpen ? "visible" : "hidden"},
                attrs: {id: e.popoverId, "aria-hidden": e.isOpen ? "false" : "true", tabindex: e.autoHide ? 0 : void 0},
                on: {
                    keyup: function (t) {
                        if (!t.type.indexOf("key") && e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"])) return null;
                        e.autoHide && e.hide()
                    }
                }
            }, [n("div", {class: e.popoverWrapperClass}, [n("div", {
                ref: "inner",
                class: e.popoverInnerClass,
                staticStyle: {position: "relative"}
            }, [n("div", [e._t("popover")], 2), e._v(" "), e.handleResize ? n("ResizeObserver", {on: {notify: e.$_handleResize}}) : e._e()], 1), e._v(" "), n("div", {
                ref: "arrow",
                class: e.popoverArrowClass
            })])])])
        };
        vn._withStripped = !0;
        var Dn = function (e, t, n, r, o, i, u, a, s, l) {
                "boolean" != typeof u && (s = a, a = u, u = !1);
                const c = "function" == typeof n ? n.options : n;
                let A;
                if (e && e.render && (c.render = e.render, c.staticRenderFns = e.staticRenderFns, c._compiled = !0, o && (c.functional = !0)), r && (c._scopeId = r), i ? (A = function (e) {
                    (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), t && t.call(this, s(e)), e && e._registeredComponents && e._registeredComponents.add(i)
                }, c._ssrRegister = A) : t && (A = u ? function (e) {
                    t.call(this, l(e, this.$root.$options.shadowRoot))
                } : function (e) {
                    t.call(this, a(e))
                }), A) if (c.functional) {
                    const e = c.render;
                    c.render = function (t, n) {
                        return A.call(n), e(t, n)
                    }
                } else {
                    const e = c.beforeCreate;
                    c.beforeCreate = e ? [].concat(e, A) : [A]
                }
                return n
            }({render: vn, staticRenderFns: []}, void 0, gn, void 0, !1, void 0, !1, void 0, void 0, void 0),
            yn = function () {
                try {
                    var e = ae(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch (e) {
                }
            }();
        var En = function (e, t, n) {
            "__proto__" == t && yn ? yn(e, t, {configurable: !0, enumerable: !0, value: n, writable: !0}) : e[t] = n
        };
        var Cn = function (e, t, n) {
            (void 0 !== n && !g(e[t], n) || void 0 === n && !(t in e)) && En(e, t, n)
        };
        var bn = function (e) {
            return function (t, n, r) {
                for (var o = -1, i = Object(t), u = r(t), a = u.length; a--;) {
                    var s = u[e ? a : ++o];
                    if (!1 === n(i[s], s, i)) break
                }
                return t
            }
        }(), xn = _((function (e, t) {
            var n = t && !t.nodeType && t, r = n && e && !e.nodeType && e, o = r && r.exports === n ? O.Buffer : void 0,
                i = o ? o.allocUnsafe : void 0;
            e.exports = function (e, t) {
                if (t) return e.slice();
                var n = e.length, r = i ? i(n) : new e.constructor(n);
                return e.copy(r), r
            }
        }));
        var wn = function (e) {
            var t = new e.constructor(e.byteLength);
            return new Re(t).set(new Re(e)), t
        };
        var Tn = function (e, t) {
            var n = t ? wn(e.buffer) : e.buffer;
            return new e.constructor(n, e.byteOffset, e.length)
        };
        var Bn = function (e, t) {
            var n = -1, r = e.length;
            for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
            return t
        }, Fn = Object.create, Mn = function () {
            function e() {
            }

            return function (t) {
                if (!$(t)) return {};
                if (Fn) return Fn(t);
                e.prototype = t;
                var n = new e;
                return e.prototype = void 0, n
            }
        }(), In = yt(Object.getPrototypeOf, Object);
        var _n = function (e) {
            return "function" != typeof e.constructor || Dt(e) ? {} : Mn(In(e))
        };
        var Sn = function (e) {
                return qe(e) && xt(e)
            }, Nn = Function.prototype, On = Object.prototype, Ln = Nn.toString, kn = On.hasOwnProperty,
            jn = Ln.call(Object);
        var Rn = function (e) {
            if (!qe(e) || "[object Object]" != Y(e)) return !1;
            var t = In(e);
            if (null === t) return !0;
            var n = kn.call(t, "constructor") && t.constructor;
            return "function" == typeof n && n instanceof n && Ln.call(n) == jn
        };
        var Pn = function (e, t) {
            if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
        }, Un = Object.prototype.hasOwnProperty;
        var Qn = function (e, t, n) {
            var r = e[t];
            Un.call(e, t) && g(r, n) && (void 0 !== n || t in e) || En(e, t, n)
        };
        var Gn = function (e, t, n, r) {
            var o = !n;
            n || (n = {});
            for (var i = -1, u = t.length; ++i < u;) {
                var a = t[i], s = r ? r(n[a], e[a], a, n, e) : void 0;
                void 0 === s && (s = e[a]), o ? En(n, a, s) : Qn(n, a, s)
            }
            return n
        };
        var zn = function (e) {
            var t = [];
            if (null != e) for (var n in Object(e)) t.push(n);
            return t
        }, Yn = Object.prototype.hasOwnProperty;
        var $n = function (e) {
            if (!$(e)) return zn(e);
            var t = Dt(e), n = [];
            for (var r in e) ("constructor" != r || !t && Yn.call(e, r)) && n.push(r);
            return n
        };
        var Zn = function (e) {
            return xt(e) ? gt(e, !0) : $n(e)
        };
        var Hn = function (e) {
            return Gn(e, Zn(e))
        };
        var Wn = function (e, t, n, r, o, i, u) {
            var a = Pn(e, n), s = Pn(t, n), l = u.get(s);
            if (l) Cn(e, n, l); else {
                var c = i ? i(a, s, n + "", e, t, u) : void 0, A = void 0 === c;
                if (A) {
                    var p = $e(s), f = !p && ut(s), d = !p && !f && mt(s);
                    c = s, p || f || d ? $e(a) ? c = a : Sn(a) ? c = Bn(a) : f ? (A = !1, c = xn(s, !0)) : d ? (A = !1, c = Tn(s, !0)) : c = [] : Rn(s) || ot(s) ? (c = a, ot(a) ? c = Hn(a) : $(a) && !H(a) || (c = _n(s))) : A = !1
                }
                A && (u.set(s, c), o(c, s, r, i, u), u.delete(s)), Cn(e, n, c)
            }
        };
        var Vn = function e(t, n, r, o, i) {
            t !== n && bn(n, (function (u, a) {
                if (i || (i = new Ie), $(u)) Wn(t, n, a, r, e, o, i); else {
                    var s = o ? o(Pn(t, a), u, a + "", t, n, i) : void 0;
                    void 0 === s && (s = u), Cn(t, a, s)
                }
            }), Zn)
        };
        var Xn = function (e) {
            return e
        };
        var Jn = function (e, t, n) {
            switch (n.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }, Kn = Math.max;
        var qn = function (e, t, n) {
            return t = Kn(void 0 === t ? e.length - 1 : t, 0), function () {
                for (var r = arguments, o = -1, i = Kn(r.length - t, 0), u = Array(i); ++o < i;) u[o] = r[t + o];
                o = -1;
                for (var a = Array(t + 1); ++o < t;) a[o] = r[o];
                return a[t] = n(u), Jn(e, this, a)
            }
        };
        var er = function (e) {
            return function () {
                return e
            }
        }, tr = yn ? function (e, t) {
            return yn(e, "toString", {configurable: !0, enumerable: !1, value: er(t), writable: !0})
        } : Xn, nr = Date.now;
        var rr = function (e) {
            var t = 0, n = 0;
            return function () {
                var r = nr(), o = 16 - (r - n);
                if (n = r, o > 0) {
                    if (++t >= 800) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }(tr);
        var or = function (e, t) {
            return rr(qn(e, t, Xn), e + "")
        };
        var ir = function (e, t, n) {
            if (!$(n)) return !1;
            var r = typeof t;
            return !!("number" == r ? xt(n) && st(t, n.length) : "string" == r && t in n) && g(n[t], e)
        };
        var ur = function (e) {
            return or((function (t, n) {
                var r = -1, o = n.length, i = o > 1 ? n[o - 1] : void 0, u = o > 2 ? n[2] : void 0;
                for (i = e.length > 3 && "function" == typeof i ? (o--, i) : void 0, u && ir(n[0], n[1], u) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++r < o;) {
                    var a = n[r];
                    a && e(t, a, r, i)
                }
                return t
            }))
        }((function (e, t, n) {
            Vn(e, t, n)
        }));

        function ar(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!ar.installed) {
                ar.installed = !0;
                var n = {};
                ur(n, Vt, t), Ar.options = n, nn.options = n, e.directive("tooltip", nn), e.directive("close-popover", cn), e.component("v-popover", Dn)
            }
        }

        !function (e, t) {
            void 0 === t && (t = {});
            var n = t.insertAt;
            if (e && "undefined" != typeof document) {
                var r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
                o.type = "text/css", "top" === n && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
            }
        }(".resize-observer[data-v-b329ee4c]{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer[data-v-b329ee4c] object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}");
        var sr = nn, lr = cn, cr = Dn, Ar = {
            install: ar, get enabled() {
                return Ht.enabled
            }, set enabled(e) {
                Ht.enabled = e
            }
        }, pr = null;
        "undefined" != typeof window ? pr = window.Vue : void 0 !== e && (pr = e.Vue), pr && pr.use(Ar), t.default = Ar
    }.call(this, n(10))
}, function (e, t, n) {
    (function (e) {
        var r = void 0 !== e && e || "undefined" != typeof self && self || window, o = Function.prototype.apply;

        function i(e, t) {
            this._id = e, this._clearFn = t
        }

        t.setTimeout = function () {
            return new i(o.call(setTimeout, r, arguments), clearTimeout)
        }, t.setInterval = function () {
            return new i(o.call(setInterval, r, arguments), clearInterval)
        }, t.clearTimeout = t.clearInterval = function (e) {
            e && e.close()
        }, i.prototype.unref = i.prototype.ref = function () {
        }, i.prototype.close = function () {
            this._clearFn.call(r, this._id)
        }, t.enroll = function (e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, t.unenroll = function (e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, t._unrefActive = t.active = function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout((function () {
                e._onTimeout && e._onTimeout()
            }), t))
        }, n(230), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }).call(this, n(10))
}, function (e, t, n) {
    "use strict";
    var r = n(4), o = n(113), i = n(27), u = n(16), a = n(17), s = n(67), l = n(68), c = n(41), A = n(29),
        p = c("splice"), f = A("splice", {ACCESSORS: !0, 0: 0, 1: 2}), d = Math.max, m = Math.min;
    r({target: "Array", proto: !0, forced: !p || !f}, {
        splice: function (e, t) {
            var n, r, c, A, p, f, h = a(this), g = u(h.length), v = o(e, g), D = arguments.length;
            if (0 === D ? n = r = 0 : 1 === D ? (n = 0, r = g - v) : (n = D - 2, r = m(d(i(t), 0), g - v)), g + n - r > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
            for (c = s(h, r), A = 0; A < r; A++) (p = v + A) in h && l(c, A, h[p]);
            if (c.length = r, n < r) {
                for (A = v; A < g - r; A++) f = A + n, (p = A + r) in h ? h[f] = h[p] : delete h[f];
                for (A = g; A > g - r + n; A--) delete h[A - 1]
            } else if (n > r) for (A = g - r; A > v; A--) f = A + n - 1, (p = A + r - 1) in h ? h[f] = h[p] : delete h[f];
            for (A = 0; A < n; A++) h[A + v] = arguments[A + 2];
            return h.length = g - r + n, c
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(53), o = n(95).indexOf, i = n(173), u = n(174), a = [].indexOf, s = !!a && 1 / [1].indexOf(1, -0) < 0,
        l = i("indexOf"), c = u("indexOf", {ACCESSORS: !0, 1: 0});
    r({target: "Array", proto: !0, forced: s || !l || !c}, {
        indexOf: function (e) {
            return s ? a.apply(this, arguments) || 0 : o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t, n) {
    var r = n(11), o = n(34), i = r.document, u = o(i) && o(i.createElement);
    e.exports = function (e) {
        return u ? i.createElement(e) : {}
    }
}, function (e, t, n) {
    var r, o, i, u = n(163), a = n(11), s = n(34), l = n(22), c = n(15), A = n(164), p = n(93), f = a.WeakMap;
    if (u) {
        var d = new f, m = d.get, h = d.has, g = d.set;
        r = function (e, t) {
            return g.call(d, e, t), t
        }, o = function (e) {
            return m.call(d, e) || {}
        }, i = function (e) {
            return h.call(d, e)
        }
    } else {
        var v = A("state");
        p[v] = !0, r = function (e, t) {
            return l(e, v, t), t
        }, o = function (e) {
            return c(e, v) ? e[v] : {}
        }, i = function (e) {
            return c(e, v)
        }
    }
    e.exports = {
        set: r, get: o, has: i, enforce: function (e) {
            return i(e) ? o(e) : r(e, {})
        }, getterFor: function (e) {
            return function (t) {
                var n;
                if (!s(t) || (n = o(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                return n
            }
        }
    }
}, function (e, t, n) {
    var r = n(11), o = n(89), i = r.WeakMap;
    e.exports = "function" == typeof i && /native code/.test(o(i))
}, function (e, t, n) {
    var r = n(91), o = n(92), i = r("keys");
    e.exports = function (e) {
        return i[e] || (i[e] = o(e))
    }
}, function (e, t) {
    e.exports = !1
}, function (e, t, n) {
    var r = n(15), o = n(167), i = n(82), u = n(88);
    e.exports = function (e, t) {
        for (var n = o(t), a = u.f, s = i.f, l = 0; l < n.length; l++) {
            var c = n[l];
            r(e, c) || a(e, c, s(t, c))
        }
    }
}, function (e, t, n) {
    var r = n(168), o = n(170), i = n(98), u = n(23);
    e.exports = r("Reflect", "ownKeys") || function (e) {
        var t = o.f(u(e)), n = i.f;
        return n ? t.concat(n(e)) : t
    }
}, function (e, t, n) {
    var r = n(169), o = n(11), i = function (e) {
        return "function" == typeof e ? e : void 0
    };
    e.exports = function (e, t) {
        return arguments.length < 2 ? i(r[e]) || i(o[e]) : r[e] && r[e][t] || o[e] && o[e][t]
    }
}, function (e, t, n) {
    var r = n(11);
    e.exports = r
}, function (e, t, n) {
    var r = n(94), o = n(97).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function (e) {
        return r(e, o)
    }
}, function (e, t, n) {
    var r = n(36), o = Math.max, i = Math.min;
    e.exports = function (e, t) {
        var n = r(e);
        return n < 0 ? o(n + t, 0) : i(n, t)
    }
}, function (e, t, n) {
    var r = n(7), o = /#|\.prototype\./, i = function (e, t) {
        var n = a[u(e)];
        return n == l || n != s && ("function" == typeof t ? r(t) : !!t)
    }, u = i.normalize = function (e) {
        return String(e).replace(o, ".").toLowerCase()
    }, a = i.data = {}, s = i.NATIVE = "N", l = i.POLYFILL = "P";
    e.exports = i
}, function (e, t, n) {
    "use strict";
    var r = n(7);
    e.exports = function (e, t) {
        var n = [][e];
        return !!n && r((function () {
            n.call(null, t || function () {
                throw 1
            }, 1)
        }))
    }
}, function (e, t, n) {
    var r = n(19), o = n(7), i = n(15), u = Object.defineProperty, a = {}, s = function (e) {
        throw e
    };
    e.exports = function (e, t) {
        if (i(a, e)) return a[e];
        t || (t = {});
        var n = [][e], l = !!i(t, "ACCESSORS") && t.ACCESSORS, c = i(t, 0) ? t[0] : s, A = i(t, 1) ? t[1] : void 0;
        return a[e] = !!n && !o((function () {
            if (l && !r) return !0;
            var e = {length: -1};
            l ? u(e, 1, {enumerable: !0, get: s}) : e[1] = 1, n.call(e, c, A)
        }))
    }
}, function (e, t, n) {
    var r = n(53), o = n(176);
    r({target: "Object", stat: !0, forced: Object.assign !== o}, {assign: o})
}, function (e, t, n) {
    "use strict";
    var r = n(19), o = n(7), i = n(177), u = n(98), a = n(83), s = n(99), l = n(85), c = Object.assign,
        A = Object.defineProperty;
    e.exports = !c || o((function () {
        if (r && 1 !== c({b: 1}, c(A({}, "a", {
            enumerable: !0, get: function () {
                A(this, "b", {value: 3, enumerable: !1})
            }
        }), {b: 2})).b) return !0;
        var e = {}, t = {}, n = Symbol();
        return e[n] = 7, "abcdefghijklmnopqrst".split("").forEach((function (e) {
            t[e] = e
        })), 7 != c({}, e)[n] || "abcdefghijklmnopqrst" != i(c({}, t)).join("")
    })) ? function (e, t) {
        for (var n = s(e), o = arguments.length, c = 1, A = u.f, p = a.f; o > c;) for (var f, d = l(arguments[c++]), m = A ? i(d).concat(A(d)) : i(d), h = m.length, g = 0; h > g;) f = m[g++], r && !p.call(d, f) || (n[f] = d[f]);
        return n
    } : c
}, function (e, t, n) {
    var r = n(94), o = n(97);
    e.exports = Object.keys || function (e) {
        return r(e, o)
    }
}, function (e, t, n) {
    var r = n(57), o = n(35), i = n(180);
    r || o(Object.prototype, "toString", i, {unsafe: !0})
}, function (e, t, n) {
    var r = n(100);
    e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function (e, t, n) {
    "use strict";
    var r = n(57), o = n(181);
    e.exports = r ? {}.toString : function () {
        return "[object " + o(this) + "]"
    }
}, function (e, t, n) {
    var r = n(57), o = n(55), i = n(58)("toStringTag"), u = "Arguments" == o(function () {
        return arguments
    }());
    e.exports = r ? o : function (e) {
        var t, n, r;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
            try {
                return e[t]
            } catch (e) {
            }
        }(t = Object(e), i)) ? n : u ? o(t) : "Object" == (r = o(t)) && "function" == typeof t.callee ? "Arguments" : r
    }
}, function (e, t, n) {
    "use strict";
    var r = n(7);

    function o(e, t) {
        return RegExp(e, t)
    }

    t.UNSUPPORTED_Y = r((function () {
        var e = o("a", "y");
        return e.lastIndex = 2, null != e.exec("abcd")
    })), t.BROKEN_CARET = r((function () {
        var e = o("^r", "gy");
        return e.lastIndex = 2, null != e.exec("str")
    }))
}, function (e, t, n) {
    "use strict";
    var r = n(35), o = n(23), i = n(7), u = n(102), a = RegExp.prototype, s = a.toString, l = i((function () {
        return "/a/b" != s.call({source: "a", flags: "b"})
    })), c = "toString" != s.name;
    (l || c) && r(RegExp.prototype, "toString", (function () {
        var e = o(this), t = String(e.source), n = e.flags;
        return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in a) ? u.call(e) : n)
    }), {unsafe: !0})
}, function (e, t, n) {
    "use strict";
    var r = n(185), o = n(23), i = n(99), u = n(96), a = n(36), s = n(33), l = n(186), c = n(188), A = Math.max,
        p = Math.min, f = Math.floor, d = /\$([$&'`]|\d\d?|<[^>]*>)/g, m = /\$([$&'`]|\d\d?)/g;
    r("replace", 2, (function (e, t, n, r) {
        var h = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, g = r.REPLACE_KEEPS_$0, v = h ? "$" : "$0";
        return [function (n, r) {
            var o = s(this), i = null == n ? void 0 : n[e];
            return void 0 !== i ? i.call(n, o, r) : t.call(String(o), n, r)
        }, function (e, r) {
            if (!h && g || "string" == typeof r && -1 === r.indexOf(v)) {
                var i = n(t, e, this, r);
                if (i.done) return i.value
            }
            var s = o(e), f = String(this), d = "function" == typeof r;
            d || (r = String(r));
            var m = s.global;
            if (m) {
                var y = s.unicode;
                s.lastIndex = 0
            }
            for (var E = []; ;) {
                var C = c(s, f);
                if (null === C) break;
                if (E.push(C), !m) break;
                "" === String(C[0]) && (s.lastIndex = l(f, u(s.lastIndex), y))
            }
            for (var b, x = "", w = 0, T = 0; T < E.length; T++) {
                C = E[T];
                for (var B = String(C[0]), F = A(p(a(C.index), f.length), 0), M = [], I = 1; I < C.length; I++) M.push(void 0 === (b = C[I]) ? b : String(b));
                var _ = C.groups;
                if (d) {
                    var S = [B].concat(M, F, f);
                    void 0 !== _ && S.push(_);
                    var N = String(r.apply(void 0, S))
                } else N = D(B, f, F, M, _, r);
                F >= w && (x += f.slice(w, F) + N, w = F + B.length)
            }
            return x + f.slice(w)
        }];

        function D(e, n, r, o, u, a) {
            var s = r + e.length, l = o.length, c = m;
            return void 0 !== u && (u = i(u), c = d), t.call(a, c, (function (t, i) {
                var a;
                switch (i.charAt(0)) {
                    case"$":
                        return "$";
                    case"&":
                        return e;
                    case"`":
                        return n.slice(0, r);
                    case"'":
                        return n.slice(s);
                    case"<":
                        a = u[i.slice(1, -1)];
                        break;
                    default:
                        var c = +i;
                        if (0 === c) return t;
                        if (c > l) {
                            var A = f(c / 10);
                            return 0 === A ? t : A <= l ? void 0 === o[A - 1] ? i.charAt(1) : o[A - 1] + i.charAt(1) : t
                        }
                        a = o[c - 1]
                }
                return void 0 === a ? "" : a
            }))
        }
    }))
}, function (e, t, n) {
    "use strict";
    n(101);
    var r = n(35), o = n(7), i = n(58), u = n(59), a = n(22), s = i("species"), l = !o((function () {
            var e = /./;
            return e.exec = function () {
                var e = [];
                return e.groups = {a: "7"}, e
            }, "7" !== "".replace(e, "$<a>")
        })), c = "$0" === "a".replace(/./, "$0"), A = i("replace"), p = !!/./[A] && "" === /./[A]("a", "$0"),
        f = !o((function () {
            var e = /(?:)/, t = e.exec;
            e.exec = function () {
                return t.apply(this, arguments)
            };
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        }));
    e.exports = function (e, t, n, A) {
        var d = i(e), m = !o((function () {
            var t = {};
            return t[d] = function () {
                return 7
            }, 7 != ""[e](t)
        })), h = m && !o((function () {
            var t = !1, n = /a/;
            return "split" === e && ((n = {}).constructor = {}, n.constructor[s] = function () {
                return n
            }, n.flags = "", n[d] = /./[d]), n.exec = function () {
                return t = !0, null
            }, n[d](""), !t
        }));
        if (!m || !h || "replace" === e && (!l || !c || p) || "split" === e && !f) {
            var g = /./[d], v = n(d, ""[e], (function (e, t, n, r, o) {
                return t.exec === u ? m && !o ? {done: !0, value: g.call(t, n, r)} : {
                    done: !0,
                    value: e.call(n, t, r)
                } : {done: !1}
            }), {REPLACE_KEEPS_$0: c, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p}), D = v[0], y = v[1];
            r(String.prototype, e, D), r(RegExp.prototype, d, 2 == t ? function (e, t) {
                return y.call(e, this, t)
            } : function (e) {
                return y.call(e, this)
            })
        }
        A && a(RegExp.prototype[d], "sham", !0)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(187).charAt;
    e.exports = function (e, t, n) {
        return t + (n ? r(e, t).length : 1)
    }
}, function (e, t, n) {
    var r = n(36), o = n(33), i = function (e) {
        return function (t, n) {
            var i, u, a = String(o(t)), s = r(n), l = a.length;
            return s < 0 || s >= l ? e ? "" : void 0 : (i = a.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === l || (u = a.charCodeAt(s + 1)) < 56320 || u > 57343 ? e ? a.charAt(s) : i : e ? a.slice(s, s + 2) : u - 56320 + (i - 55296 << 10) + 65536
        }
    };
    e.exports = {codeAt: i(!1), charAt: i(!0)}
}, function (e, t, n) {
    var r = n(55), o = n(59);
    e.exports = function (e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
            var i = n.call(e, t);
            if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
            return i
        }
        if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
        return o.call(e, t)
    }
}, function (e, t, n) {
    "use strict";
    n(103), Object.defineProperty(t, "__esModule", {value: !0}), t.getRequestToken = function () {
        return i
    }, t.onRequestTokenUpdate = function (e) {
        u.push(e)
    };
    var r = n(197), o = document.getElementsByTagName("head")[0], i = o ? o.getAttribute("data-requesttoken") : null,
        u = [];
    (0, r.subscribe)("csrf-token-update", (function (e) {
        i = e.token, u.forEach((function (t) {
            try {
                t(e.token)
            } catch (e) {
                console.error("error updating CSRF token observer", e)
            }
        }))
    }))
}, function (e, t, n) {
    var r = n(3), o = n(108), i = r.WeakMap;
    e.exports = "function" == typeof i && /native code/.test(o(i))
}, function (e, t, n) {
    var r = n(5), o = n(192), i = n(104), u = n(12);
    e.exports = function (e, t) {
        for (var n = o(t), a = u.f, s = i.f, l = 0; l < n.length; l++) {
            var c = n[l];
            r(e, c) || a(e, c, s(t, c))
        }
    }
}, function (e, t, n) {
    var r = n(26), o = n(194), i = n(114), u = n(6);
    e.exports = r("Reflect", "ownKeys") || function (e) {
        var t = o.f(u(e)), n = i.f;
        return n ? t.concat(n(e)) : t
    }
}, function (e, t, n) {
    var r = n(3);
    e.exports = r
}, function (e, t, n) {
    var r = n(111), o = n(65).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function (e) {
        return r(e, o)
    }
}, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
        return e
    }
}, function (e, t, n) {
    var r = n(118);
    e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.subscribe = function (e, t) {
        i.subscribe(e, t)
    }, t.unsubscribe = function (e, t) {
        i.unsubscribe(e, t)
    }, t.emit = function (e, t) {
        i.emit(e, t)
    };
    var r = n(198), o = n(200);
    var i = (void 0 !== window.OC && window.OC._eventBus && void 0 === window._nc_event_bus && (console.warn("found old event bus instance at OC._eventBus. Update your version!"), window._nc_event_bus = window.OC._eventBus), void 0 !== window._nc_event_bus ? new r.ProxyBus(window._nc_event_bus) : window._nc_event_bus = new o.SimpleBus)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.ProxyBus = void 0;
    var r, o = (r = n(199)) && r.__esModule ? r : {default: r};

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var u = "1.1.4", a = function () {
        function e(t) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), function (e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n
            }(this, "bus", void 0), "function" == typeof t.getVersion && o.default.valid(t.getVersion()) ? o.default.major(t.getVersion()) !== o.default.major(this.getVersion()) && console.warn("Proxying an event bus of version " + t.getVersion() + " with " + this.getVersion()) : console.warn("Proxying an event bus with an unknown or invalid version"), this.bus = t
        }

        var t, n, r;
        return t = e, (n = [{
            key: "getVersion", value: function () {
                return u
            }
        }, {
            key: "subscribe", value: function (e, t) {
                this.bus.subscribe(e, t)
            }
        }, {
            key: "unsubscribe", value: function (e, t) {
                this.bus.unsubscribe(e, t)
            }
        }, {
            key: "emit", value: function (e, t) {
                this.bus.emit(e, t)
            }
        }]) && i(t.prototype, n), r && i(t, r), e
    }();
    t.ProxyBus = a
}, function (e, t, n) {
    (function (n) {
        var r;
        t = e.exports = p, r = "object" == typeof n && n.env && n.env.NODE_DEBUG && /\bsemver\b/i.test(n.env.NODE_DEBUG) ? function () {
            var e = Array.prototype.slice.call(arguments, 0);
            e.unshift("SEMVER"), console.log.apply(console, e)
        } : function () {
        }, t.SEMVER_SPEC_VERSION = "2.0.0";
        var o = Number.MAX_SAFE_INTEGER || 9007199254740991, i = t.re = [], u = t.src = [], a = t.tokens = {}, s = 0;

        function l(e) {
            a[e] = s++
        }

        l("NUMERICIDENTIFIER"), u[a.NUMERICIDENTIFIER] = "0|[1-9]\\d*", l("NUMERICIDENTIFIERLOOSE"), u[a.NUMERICIDENTIFIERLOOSE] = "[0-9]+", l("NONNUMERICIDENTIFIER"), u[a.NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*", l("MAINVERSION"), u[a.MAINVERSION] = "(" + u[a.NUMERICIDENTIFIER] + ")\\.(" + u[a.NUMERICIDENTIFIER] + ")\\.(" + u[a.NUMERICIDENTIFIER] + ")", l("MAINVERSIONLOOSE"), u[a.MAINVERSIONLOOSE] = "(" + u[a.NUMERICIDENTIFIERLOOSE] + ")\\.(" + u[a.NUMERICIDENTIFIERLOOSE] + ")\\.(" + u[a.NUMERICIDENTIFIERLOOSE] + ")", l("PRERELEASEIDENTIFIER"), u[a.PRERELEASEIDENTIFIER] = "(?:" + u[a.NUMERICIDENTIFIER] + "|" + u[a.NONNUMERICIDENTIFIER] + ")", l("PRERELEASEIDENTIFIERLOOSE"), u[a.PRERELEASEIDENTIFIERLOOSE] = "(?:" + u[a.NUMERICIDENTIFIERLOOSE] + "|" + u[a.NONNUMERICIDENTIFIER] + ")", l("PRERELEASE"), u[a.PRERELEASE] = "(?:-(" + u[a.PRERELEASEIDENTIFIER] + "(?:\\." + u[a.PRERELEASEIDENTIFIER] + ")*))", l("PRERELEASELOOSE"), u[a.PRERELEASELOOSE] = "(?:-?(" + u[a.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + u[a.PRERELEASEIDENTIFIERLOOSE] + ")*))", l("BUILDIDENTIFIER"), u[a.BUILDIDENTIFIER] = "[0-9A-Za-z-]+", l("BUILD"), u[a.BUILD] = "(?:\\+(" + u[a.BUILDIDENTIFIER] + "(?:\\." + u[a.BUILDIDENTIFIER] + ")*))", l("FULL"), l("FULLPLAIN"), u[a.FULLPLAIN] = "v?" + u[a.MAINVERSION] + u[a.PRERELEASE] + "?" + u[a.BUILD] + "?", u[a.FULL] = "^" + u[a.FULLPLAIN] + "$", l("LOOSEPLAIN"), u[a.LOOSEPLAIN] = "[v=\\s]*" + u[a.MAINVERSIONLOOSE] + u[a.PRERELEASELOOSE] + "?" + u[a.BUILD] + "?", l("LOOSE"), u[a.LOOSE] = "^" + u[a.LOOSEPLAIN] + "$", l("GTLT"), u[a.GTLT] = "((?:<|>)?=?)", l("XRANGEIDENTIFIERLOOSE"), u[a.XRANGEIDENTIFIERLOOSE] = u[a.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*", l("XRANGEIDENTIFIER"), u[a.XRANGEIDENTIFIER] = u[a.NUMERICIDENTIFIER] + "|x|X|\\*", l("XRANGEPLAIN"), u[a.XRANGEPLAIN] = "[v=\\s]*(" + u[a.XRANGEIDENTIFIER] + ")(?:\\.(" + u[a.XRANGEIDENTIFIER] + ")(?:\\.(" + u[a.XRANGEIDENTIFIER] + ")(?:" + u[a.PRERELEASE] + ")?" + u[a.BUILD] + "?)?)?", l("XRANGEPLAINLOOSE"), u[a.XRANGEPLAINLOOSE] = "[v=\\s]*(" + u[a.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + u[a.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + u[a.XRANGEIDENTIFIERLOOSE] + ")(?:" + u[a.PRERELEASELOOSE] + ")?" + u[a.BUILD] + "?)?)?", l("XRANGE"), u[a.XRANGE] = "^" + u[a.GTLT] + "\\s*" + u[a.XRANGEPLAIN] + "$", l("XRANGELOOSE"), u[a.XRANGELOOSE] = "^" + u[a.GTLT] + "\\s*" + u[a.XRANGEPLAINLOOSE] + "$", l("COERCE"), u[a.COERCE] = "(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])", l("COERCERTL"), i[a.COERCERTL] = new RegExp(u[a.COERCE], "g"), l("LONETILDE"), u[a.LONETILDE] = "(?:~>?)", l("TILDETRIM"), u[a.TILDETRIM] = "(\\s*)" + u[a.LONETILDE] + "\\s+", i[a.TILDETRIM] = new RegExp(u[a.TILDETRIM], "g");
        l("TILDE"), u[a.TILDE] = "^" + u[a.LONETILDE] + u[a.XRANGEPLAIN] + "$", l("TILDELOOSE"), u[a.TILDELOOSE] = "^" + u[a.LONETILDE] + u[a.XRANGEPLAINLOOSE] + "$", l("LONECARET"), u[a.LONECARET] = "(?:\\^)", l("CARETTRIM"), u[a.CARETTRIM] = "(\\s*)" + u[a.LONECARET] + "\\s+", i[a.CARETTRIM] = new RegExp(u[a.CARETTRIM], "g");
        l("CARET"), u[a.CARET] = "^" + u[a.LONECARET] + u[a.XRANGEPLAIN] + "$", l("CARETLOOSE"), u[a.CARETLOOSE] = "^" + u[a.LONECARET] + u[a.XRANGEPLAINLOOSE] + "$", l("COMPARATORLOOSE"), u[a.COMPARATORLOOSE] = "^" + u[a.GTLT] + "\\s*(" + u[a.LOOSEPLAIN] + ")$|^$", l("COMPARATOR"), u[a.COMPARATOR] = "^" + u[a.GTLT] + "\\s*(" + u[a.FULLPLAIN] + ")$|^$", l("COMPARATORTRIM"), u[a.COMPARATORTRIM] = "(\\s*)" + u[a.GTLT] + "\\s*(" + u[a.LOOSEPLAIN] + "|" + u[a.XRANGEPLAIN] + ")", i[a.COMPARATORTRIM] = new RegExp(u[a.COMPARATORTRIM], "g");
        l("HYPHENRANGE"), u[a.HYPHENRANGE] = "^\\s*(" + u[a.XRANGEPLAIN] + ")\\s+-\\s+(" + u[a.XRANGEPLAIN] + ")\\s*$", l("HYPHENRANGELOOSE"), u[a.HYPHENRANGELOOSE] = "^\\s*(" + u[a.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + u[a.XRANGEPLAINLOOSE] + ")\\s*$", l("STAR"), u[a.STAR] = "(<|>)?=?\\s*\\*";
        for (var c = 0; c < s; c++) r(c, u[c]), i[c] || (i[c] = new RegExp(u[c]));

        function A(e, t) {
            if (t && "object" == typeof t || (t = {loose: !!t, includePrerelease: !1}), e instanceof p) return e;
            if ("string" != typeof e) return null;
            if (e.length > 256) return null;
            if (!(t.loose ? i[a.LOOSE] : i[a.FULL]).test(e)) return null;
            try {
                return new p(e, t)
            } catch (e) {
                return null
            }
        }

        function p(e, t) {
            if (t && "object" == typeof t || (t = {loose: !!t, includePrerelease: !1}), e instanceof p) {
                if (e.loose === t.loose) return e;
                e = e.version
            } else if ("string" != typeof e) throw new TypeError("Invalid Version: " + e);
            if (e.length > 256) throw new TypeError("version is longer than 256 characters");
            if (!(this instanceof p)) return new p(e, t);
            r("SemVer", e, t), this.options = t, this.loose = !!t.loose;
            var n = e.trim().match(t.loose ? i[a.LOOSE] : i[a.FULL]);
            if (!n) throw new TypeError("Invalid Version: " + e);
            if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > o || this.major < 0) throw new TypeError("Invalid major version");
            if (this.minor > o || this.minor < 0) throw new TypeError("Invalid minor version");
            if (this.patch > o || this.patch < 0) throw new TypeError("Invalid patch version");
            n[4] ? this.prerelease = n[4].split(".").map((function (e) {
                if (/^[0-9]+$/.test(e)) {
                    var t = +e;
                    if (t >= 0 && t < o) return t
                }
                return e
            })) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format()
        }

        t.parse = A, t.valid = function (e, t) {
            var n = A(e, t);
            return n ? n.version : null
        }, t.clean = function (e, t) {
            var n = A(e.trim().replace(/^[=v]+/, ""), t);
            return n ? n.version : null
        }, t.SemVer = p, p.prototype.format = function () {
            return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version
        }, p.prototype.toString = function () {
            return this.version
        }, p.prototype.compare = function (e) {
            return r("SemVer.compare", this.version, this.options, e), e instanceof p || (e = new p(e, this.options)), this.compareMain(e) || this.comparePre(e)
        }, p.prototype.compareMain = function (e) {
            return e instanceof p || (e = new p(e, this.options)), d(this.major, e.major) || d(this.minor, e.minor) || d(this.patch, e.patch)
        }, p.prototype.comparePre = function (e) {
            if (e instanceof p || (e = new p(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
            if (!this.prerelease.length && e.prerelease.length) return 1;
            if (!this.prerelease.length && !e.prerelease.length) return 0;
            var t = 0;
            do {
                var n = this.prerelease[t], o = e.prerelease[t];
                if (r("prerelease compare", t, n, o), void 0 === n && void 0 === o) return 0;
                if (void 0 === o) return 1;
                if (void 0 === n) return -1;
                if (n !== o) return d(n, o)
            } while (++t)
        }, p.prototype.compareBuild = function (e) {
            e instanceof p || (e = new p(e, this.options));
            var t = 0;
            do {
                var n = this.build[t], o = e.build[t];
                if (r("prerelease compare", t, n, o), void 0 === n && void 0 === o) return 0;
                if (void 0 === o) return 1;
                if (void 0 === n) return -1;
                if (n !== o) return d(n, o)
            } while (++t)
        }, p.prototype.inc = function (e, t) {
            switch (e) {
                case"premajor":
                    this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
                    break;
                case"preminor":
                    this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
                    break;
                case"prepatch":
                    this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
                    break;
                case"prerelease":
                    0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
                    break;
                case"major":
                    0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                    break;
                case"minor":
                    0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
                    break;
                case"patch":
                    0 === this.prerelease.length && this.patch++, this.prerelease = [];
                    break;
                case"pre":
                    if (0 === this.prerelease.length) this.prerelease = [0]; else {
                        for (var n = this.prerelease.length; --n >= 0;) "number" == typeof this.prerelease[n] && (this.prerelease[n]++, n = -2);
                        -1 === n && this.prerelease.push(0)
                    }
                    t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
                    break;
                default:
                    throw new Error("invalid increment argument: " + e)
            }
            return this.format(), this.raw = this.version, this
        }, t.inc = function (e, t, n, r) {
            "string" == typeof n && (r = n, n = void 0);
            try {
                return new p(e, n).inc(t, r).version
            } catch (e) {
                return null
            }
        }, t.diff = function (e, t) {
            if (v(e, t)) return null;
            var n = A(e), r = A(t), o = "";
            if (n.prerelease.length || r.prerelease.length) {
                o = "pre";
                var i = "prerelease"
            }
            for (var u in n) if (("major" === u || "minor" === u || "patch" === u) && n[u] !== r[u]) return o + u;
            return i
        }, t.compareIdentifiers = d;
        var f = /^[0-9]+$/;

        function d(e, t) {
            var n = f.test(e), r = f.test(t);
            return n && r && (e = +e, t = +t), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1
        }

        function m(e, t, n) {
            return new p(e, n).compare(new p(t, n))
        }

        function h(e, t, n) {
            return m(e, t, n) > 0
        }

        function g(e, t, n) {
            return m(e, t, n) < 0
        }

        function v(e, t, n) {
            return 0 === m(e, t, n)
        }

        function D(e, t, n) {
            return 0 !== m(e, t, n)
        }

        function y(e, t, n) {
            return m(e, t, n) >= 0
        }

        function E(e, t, n) {
            return m(e, t, n) <= 0
        }

        function C(e, t, n, r) {
            switch (t) {
                case"===":
                    return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e === n;
                case"!==":
                    return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e !== n;
                case"":
                case"=":
                case"==":
                    return v(e, n, r);
                case"!=":
                    return D(e, n, r);
                case">":
                    return h(e, n, r);
                case">=":
                    return y(e, n, r);
                case"<":
                    return g(e, n, r);
                case"<=":
                    return E(e, n, r);
                default:
                    throw new TypeError("Invalid operator: " + t)
            }
        }

        function b(e, t) {
            if (t && "object" == typeof t || (t = {loose: !!t, includePrerelease: !1}), e instanceof b) {
                if (e.loose === !!t.loose) return e;
                e = e.value
            }
            if (!(this instanceof b)) return new b(e, t);
            r("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === x ? this.value = "" : this.value = this.operator + this.semver.version, r("comp", this)
        }

        t.rcompareIdentifiers = function (e, t) {
            return d(t, e)
        }, t.major = function (e, t) {
            return new p(e, t).major
        }, t.minor = function (e, t) {
            return new p(e, t).minor
        }, t.patch = function (e, t) {
            return new p(e, t).patch
        }, t.compare = m, t.compareLoose = function (e, t) {
            return m(e, t, !0)
        }, t.compareBuild = function (e, t, n) {
            var r = new p(e, n), o = new p(t, n);
            return r.compare(o) || r.compareBuild(o)
        }, t.rcompare = function (e, t, n) {
            return m(t, e, n)
        }, t.sort = function (e, n) {
            return e.sort((function (e, r) {
                return t.compareBuild(e, r, n)
            }))
        }, t.rsort = function (e, n) {
            return e.sort((function (e, r) {
                return t.compareBuild(r, e, n)
            }))
        }, t.gt = h, t.lt = g, t.eq = v, t.neq = D, t.gte = y, t.lte = E, t.cmp = C, t.Comparator = b;
        var x = {};

        function w(e, t) {
            if (t && "object" == typeof t || (t = {
                loose: !!t,
                includePrerelease: !1
            }), e instanceof w) return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new w(e.raw, t);
            if (e instanceof b) return new w(e.value, t);
            if (!(this instanceof w)) return new w(e, t);
            if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e, this.set = e.split(/\s*\|\|\s*/).map((function (e) {
                return this.parseRange(e.trim())
            }), this).filter((function (e) {
                return e.length
            })), !this.set.length) throw new TypeError("Invalid SemVer Range: " + e);
            this.format()
        }

        function T(e, t) {
            for (var n = !0, r = e.slice(), o = r.pop(); n && r.length;) n = r.every((function (e) {
                return o.intersects(e, t)
            })), o = r.pop();
            return n
        }

        function B(e) {
            return !e || "x" === e.toLowerCase() || "*" === e
        }

        function F(e, t, n, r, o, i, u, a, s, l, c, A, p) {
            return ((t = B(n) ? "" : B(r) ? ">=" + n + ".0.0" : B(o) ? ">=" + n + "." + r + ".0" : ">=" + t) + " " + (a = B(s) ? "" : B(l) ? "<" + (+s + 1) + ".0.0" : B(c) ? "<" + s + "." + (+l + 1) + ".0" : A ? "<=" + s + "." + l + "." + c + "-" + A : "<=" + a)).trim()
        }

        function M(e, t, n) {
            for (var o = 0; o < e.length; o++) if (!e[o].test(t)) return !1;
            if (t.prerelease.length && !n.includePrerelease) {
                for (o = 0; o < e.length; o++) if (r(e[o].semver), e[o].semver !== x && e[o].semver.prerelease.length > 0) {
                    var i = e[o].semver;
                    if (i.major === t.major && i.minor === t.minor && i.patch === t.patch) return !0
                }
                return !1
            }
            return !0
        }

        function I(e, t, n) {
            try {
                t = new w(t, n)
            } catch (e) {
                return !1
            }
            return t.test(e)
        }

        function _(e, t, n, r) {
            var o, i, u, a, s;
            switch (e = new p(e, r), t = new w(t, r), n) {
                case">":
                    o = h, i = E, u = g, a = ">", s = ">=";
                    break;
                case"<":
                    o = g, i = y, u = h, a = "<", s = "<=";
                    break;
                default:
                    throw new TypeError('Must provide a hilo val of "<" or ">"')
            }
            if (I(e, t, r)) return !1;
            for (var l = 0; l < t.set.length; ++l) {
                var c = t.set[l], A = null, f = null;
                if (c.forEach((function (e) {
                    e.semver === x && (e = new b(">=0.0.0")), A = A || e, f = f || e, o(e.semver, A.semver, r) ? A = e : u(e.semver, f.semver, r) && (f = e)
                })), A.operator === a || A.operator === s) return !1;
                if ((!f.operator || f.operator === a) && i(e, f.semver)) return !1;
                if (f.operator === s && u(e, f.semver)) return !1
            }
            return !0
        }

        b.prototype.parse = function (e) {
            var t = this.options.loose ? i[a.COMPARATORLOOSE] : i[a.COMPARATOR], n = e.match(t);
            if (!n) throw new TypeError("Invalid comparator: " + e);
            this.operator = void 0 !== n[1] ? n[1] : "", "=" === this.operator && (this.operator = ""), n[2] ? this.semver = new p(n[2], this.options.loose) : this.semver = x
        }, b.prototype.toString = function () {
            return this.value
        }, b.prototype.test = function (e) {
            if (r("Comparator.test", e, this.options.loose), this.semver === x || e === x) return !0;
            if ("string" == typeof e) try {
                e = new p(e, this.options)
            } catch (e) {
                return !1
            }
            return C(e, this.operator, this.semver, this.options)
        }, b.prototype.intersects = function (e, t) {
            if (!(e instanceof b)) throw new TypeError("a Comparator is required");
            var n;
            if (t && "object" == typeof t || (t = {
                loose: !!t,
                includePrerelease: !1
            }), "" === this.operator) return "" === this.value || (n = new w(e.value, t), I(this.value, n, t));
            if ("" === e.operator) return "" === e.value || (n = new w(this.value, t), I(e.semver, n, t));
            var r = !(">=" !== this.operator && ">" !== this.operator || ">=" !== e.operator && ">" !== e.operator),
                o = !("<=" !== this.operator && "<" !== this.operator || "<=" !== e.operator && "<" !== e.operator),
                i = this.semver.version === e.semver.version,
                u = !(">=" !== this.operator && "<=" !== this.operator || ">=" !== e.operator && "<=" !== e.operator),
                a = C(this.semver, "<", e.semver, t) && (">=" === this.operator || ">" === this.operator) && ("<=" === e.operator || "<" === e.operator),
                s = C(this.semver, ">", e.semver, t) && ("<=" === this.operator || "<" === this.operator) && (">=" === e.operator || ">" === e.operator);
            return r || o || i && u || a || s
        }, t.Range = w, w.prototype.format = function () {
            return this.range = this.set.map((function (e) {
                return e.join(" ").trim()
            })).join("||").trim(), this.range
        }, w.prototype.toString = function () {
            return this.range
        }, w.prototype.parseRange = function (e) {
            var t = this.options.loose;
            e = e.trim();
            var n = t ? i[a.HYPHENRANGELOOSE] : i[a.HYPHENRANGE];
            e = e.replace(n, F), r("hyphen replace", e), e = e.replace(i[a.COMPARATORTRIM], "$1$2$3"), r("comparator trim", e, i[a.COMPARATORTRIM]), e = (e = (e = e.replace(i[a.TILDETRIM], "$1~")).replace(i[a.CARETTRIM], "$1^")).split(/\s+/).join(" ");
            var o = t ? i[a.COMPARATORLOOSE] : i[a.COMPARATOR], u = e.split(" ").map((function (e) {
                return function (e, t) {
                    return r("comp", e, t), e = function (e, t) {
                        return e.trim().split(/\s+/).map((function (e) {
                            return function (e, t) {
                                r("caret", e, t);
                                var n = t.loose ? i[a.CARETLOOSE] : i[a.CARET];
                                return e.replace(n, (function (t, n, o, i, u) {
                                    var a;
                                    return r("caret", e, t, n, o, i, u), B(n) ? a = "" : B(o) ? a = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0" : B(i) ? a = "0" === n ? ">=" + n + "." + o + ".0 <" + n + "." + (+o + 1) + ".0" : ">=" + n + "." + o + ".0 <" + (+n + 1) + ".0.0" : u ? (r("replaceCaret pr", u), a = "0" === n ? "0" === o ? ">=" + n + "." + o + "." + i + "-" + u + " <" + n + "." + o + "." + (+i + 1) : ">=" + n + "." + o + "." + i + "-" + u + " <" + n + "." + (+o + 1) + ".0" : ">=" + n + "." + o + "." + i + "-" + u + " <" + (+n + 1) + ".0.0") : (r("no pr"), a = "0" === n ? "0" === o ? ">=" + n + "." + o + "." + i + " <" + n + "." + o + "." + (+i + 1) : ">=" + n + "." + o + "." + i + " <" + n + "." + (+o + 1) + ".0" : ">=" + n + "." + o + "." + i + " <" + (+n + 1) + ".0.0"), r("caret return", a), a
                                }))
                            }(e, t)
                        })).join(" ")
                    }(e, t), r("caret", e), e = function (e, t) {
                        return e.trim().split(/\s+/).map((function (e) {
                            return function (e, t) {
                                var n = t.loose ? i[a.TILDELOOSE] : i[a.TILDE];
                                return e.replace(n, (function (t, n, o, i, u) {
                                    var a;
                                    return r("tilde", e, t, n, o, i, u), B(n) ? a = "" : B(o) ? a = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0" : B(i) ? a = ">=" + n + "." + o + ".0 <" + n + "." + (+o + 1) + ".0" : u ? (r("replaceTilde pr", u), a = ">=" + n + "." + o + "." + i + "-" + u + " <" + n + "." + (+o + 1) + ".0") : a = ">=" + n + "." + o + "." + i + " <" + n + "." + (+o + 1) + ".0", r("tilde return", a), a
                                }))
                            }(e, t)
                        })).join(" ")
                    }(e, t), r("tildes", e), e = function (e, t) {
                        return r("replaceXRanges", e, t), e.split(/\s+/).map((function (e) {
                            return function (e, t) {
                                e = e.trim();
                                var n = t.loose ? i[a.XRANGELOOSE] : i[a.XRANGE];
                                return e.replace(n, (function (n, o, i, u, a, s) {
                                    r("xRange", e, n, o, i, u, a, s);
                                    var l = B(i), c = l || B(u), A = c || B(a), p = A;
                                    return "=" === o && p && (o = ""), s = t.includePrerelease ? "-0" : "", l ? n = ">" === o || "<" === o ? "<0.0.0-0" : "*" : o && p ? (c && (u = 0), a = 0, ">" === o ? (o = ">=", c ? (i = +i + 1, u = 0, a = 0) : (u = +u + 1, a = 0)) : "<=" === o && (o = "<", c ? i = +i + 1 : u = +u + 1), n = o + i + "." + u + "." + a + s) : c ? n = ">=" + i + ".0.0" + s + " <" + (+i + 1) + ".0.0" + s : A && (n = ">=" + i + "." + u + ".0" + s + " <" + i + "." + (+u + 1) + ".0" + s), r("xRange return", n), n
                                }))
                            }(e, t)
                        })).join(" ")
                    }(e, t), r("xrange", e), e = function (e, t) {
                        return r("replaceStars", e, t), e.trim().replace(i[a.STAR], "")
                    }(e, t), r("stars", e), e
                }(e, this.options)
            }), this).join(" ").split(/\s+/);
            return this.options.loose && (u = u.filter((function (e) {
                return !!e.match(o)
            }))), u = u.map((function (e) {
                return new b(e, this.options)
            }), this)
        }, w.prototype.intersects = function (e, t) {
            if (!(e instanceof w)) throw new TypeError("a Range is required");
            return this.set.some((function (n) {
                return T(n, t) && e.set.some((function (e) {
                    return T(e, t) && n.every((function (n) {
                        return e.every((function (e) {
                            return n.intersects(e, t)
                        }))
                    }))
                }))
            }))
        }, t.toComparators = function (e, t) {
            return new w(e, t).set.map((function (e) {
                return e.map((function (e) {
                    return e.value
                })).join(" ").trim().split(" ")
            }))
        }, w.prototype.test = function (e) {
            if (!e) return !1;
            if ("string" == typeof e) try {
                e = new p(e, this.options)
            } catch (e) {
                return !1
            }
            for (var t = 0; t < this.set.length; t++) if (M(this.set[t], e, this.options)) return !0;
            return !1
        }, t.satisfies = I, t.maxSatisfying = function (e, t, n) {
            var r = null, o = null;
            try {
                var i = new w(t, n)
            } catch (e) {
                return null
            }
            return e.forEach((function (e) {
                i.test(e) && (r && -1 !== o.compare(e) || (o = new p(r = e, n)))
            })), r
        }, t.minSatisfying = function (e, t, n) {
            var r = null, o = null;
            try {
                var i = new w(t, n)
            } catch (e) {
                return null
            }
            return e.forEach((function (e) {
                i.test(e) && (r && 1 !== o.compare(e) || (o = new p(r = e, n)))
            })), r
        }, t.minVersion = function (e, t) {
            e = new w(e, t);
            var n = new p("0.0.0");
            if (e.test(n)) return n;
            if (n = new p("0.0.0-0"), e.test(n)) return n;
            n = null;
            for (var r = 0; r < e.set.length; ++r) {
                e.set[r].forEach((function (e) {
                    var t = new p(e.semver.version);
                    switch (e.operator) {
                        case">":
                            0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t.raw = t.format();
                        case"":
                        case">=":
                            n && !h(n, t) || (n = t);
                            break;
                        case"<":
                        case"<=":
                            break;
                        default:
                            throw new Error("Unexpected operation: " + e.operator)
                    }
                }))
            }
            if (n && e.test(n)) return n;
            return null
        }, t.validRange = function (e, t) {
            try {
                return new w(e, t).range || "*"
            } catch (e) {
                return null
            }
        }, t.ltr = function (e, t, n) {
            return _(e, t, "<", n)
        }, t.gtr = function (e, t, n) {
            return _(e, t, ">", n)
        }, t.outside = _, t.prerelease = function (e, t) {
            var n = A(e, t);
            return n && n.prerelease.length ? n.prerelease : null
        }, t.intersects = function (e, t, n) {
            return e = new w(e, n), t = new w(t, n), e.intersects(t)
        }, t.coerce = function (e, t) {
            if (e instanceof p) return e;
            "number" == typeof e && (e = String(e));
            if ("string" != typeof e) return null;
            var n = null;
            if ((t = t || {}).rtl) {
                for (var r; (r = i[a.COERCERTL].exec(e)) && (!n || n.index + n[0].length !== e.length);) n && r.index + r[0].length === n.index + n[0].length || (n = r), i[a.COERCERTL].lastIndex = r.index + r[1].length + r[2].length;
                i[a.COERCERTL].lastIndex = -1
            } else n = e.match(i[a.COERCE]);
            if (null === n) return null;
            return A(n[2] + "." + (n[3] || "0") + "." + (n[4] || "0"), t)
        }
    }).call(this, n(75))
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    n(50), n(78), n(103), n(32), n(206), n(49), n(51), n(214), n(79), Object.defineProperty(t, "__esModule", {value: !0}), t.SimpleBus = void 0;
    var o = "1.1.4", i = function () {
        function e() {
            var t, n, r;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), t = this, n = "handlers", r = new Map, n in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r
        }

        var t, n, i;
        return t = e, (n = [{
            key: "getVersion", value: function () {
                return o
            }
        }, {
            key: "subscribe", value: function (e, t) {
                this.handlers.set(e, (this.handlers.get(e) || []).concat(t))
            }
        }, {
            key: "unsubscribe", value: function (e, t) {
                this.handlers.set(e, (this.handlers.get(e) || []).filter((function (e) {
                    return e != t
                })))
            }
        }, {
            key: "emit", value: function (e, t) {
                (this.handlers.get(e) || []).forEach((function (e) {
                    try {
                        e(t)
                    } catch (e) {
                        console.error("could not invoke event listener", e)
                    }
                }))
            }
        }]) && r(t.prototype, n), i && r(t, i), e
    }();
    t.SimpleBus = i
}, function (e, t, n) {
    var r = n(26);
    e.exports = r("navigator", "userAgent") || ""
}, function (e, t, n) {
    var r = n(2), o = n(42), i = n(12), u = r("unscopables"), a = Array.prototype;
    null == a[u] && i.f(a, u, {configurable: !0, value: o(null)}), e.exports = function (e) {
        a[u][e] = !0
    }
}, function (e, t, n) {
    var r = n(26);
    e.exports = r("document", "documentElement")
}, function (e, t, n) {
    var r = n(1);
    e.exports = !r((function () {
        function e() {
        }

        return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
    }))
}, function (e, t, n) {
    var r = n(9);
    e.exports = function (e) {
        if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
        return e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(207), o = n(211);
    e.exports = r("Map", (function (e) {
        return function () {
            return e(this, arguments.length ? arguments[0] : void 0)
        }
    }), o)
}, function (e, t, n) {
    "use strict";
    var r = n(4), o = n(3), i = n(115), u = n(14), a = n(127), s = n(128), l = n(44), c = n(9), A = n(1), p = n(209),
        f = n(31), d = n(210);
    e.exports = function (e, t, n) {
        var m = -1 !== e.indexOf("Map"), h = -1 !== e.indexOf("Weak"), g = m ? "set" : "add", v = o[e],
            D = v && v.prototype, y = v, E = {}, C = function (e) {
                var t = D[e];
                u(D, e, "add" == e ? function (e) {
                    return t.call(this, 0 === e ? 0 : e), this
                } : "delete" == e ? function (e) {
                    return !(h && !c(e)) && t.call(this, 0 === e ? 0 : e)
                } : "get" == e ? function (e) {
                    return h && !c(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                } : "has" == e ? function (e) {
                    return !(h && !c(e)) && t.call(this, 0 === e ? 0 : e)
                } : function (e, n) {
                    return t.call(this, 0 === e ? 0 : e, n), this
                })
            };
        if (i(e, "function" != typeof v || !(h || D.forEach && !A((function () {
            (new v).entries().next()
        }))))) y = n.getConstructor(t, e, m, g), a.REQUIRED = !0; else if (i(e, !0)) {
            var b = new y, x = b[g](h ? {} : -0, 1) != b, w = A((function () {
                b.has(1)
            })), T = p((function (e) {
                new v(e)
            })), B = !h && A((function () {
                for (var e = new v, t = 5; t--;) e[g](t, t);
                return !e.has(-0)
            }));
            T || ((y = t((function (t, n) {
                l(t, y, e);
                var r = d(new v, t, y);
                return null != n && s(n, r[g], r, m), r
            }))).prototype = D, D.constructor = y), (w || B) && (C("delete"), C("has"), m && C("get")), (B || x) && C(g), h && D.clear && delete D.clear
        }
        return E[e] = y, r({global: !0, forced: y != v}, E), f(y, e), h || n.setStrong(y, e, m), y
    }
}, function (e, t, n) {
    var r = n(1);
    e.exports = !r((function () {
        return Object.isExtensible(Object.preventExtensions({}))
    }))
}, function (e, t, n) {
    var r = n(2)("iterator"), o = !1;
    try {
        var i = 0, u = {
            next: function () {
                return {done: !!i++}
            }, return: function () {
                o = !0
            }
        };
        u[r] = function () {
            return this
        }, Array.from(u, (function () {
            throw 2
        }))
    } catch (e) {
    }
    e.exports = function (e, t) {
        if (!t && !o) return !1;
        var n = !1;
        try {
            var i = {};
            i[r] = function () {
                return {
                    next: function () {
                        return {done: n = !0}
                    }
                }
            }, e(i)
        } catch (e) {
        }
        return n
    }
}, function (e, t, n) {
    var r = n(9), o = n(126);
    e.exports = function (e, t, n) {
        var i, u;
        return o && "function" == typeof (i = t.constructor) && i !== n && r(u = i.prototype) && u !== n.prototype && o(e, u), e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(12).f, o = n(42), i = n(131), u = n(28), a = n(44), s = n(128), l = n(69), c = n(212), A = n(8),
        p = n(127).fastKey, f = n(20), d = f.set, m = f.getterFor;
    e.exports = {
        getConstructor: function (e, t, n, l) {
            var c = e((function (e, r) {
                a(e, c, t), d(e, {
                    type: t,
                    index: o(null),
                    first: void 0,
                    last: void 0,
                    size: 0
                }), A || (e.size = 0), null != r && s(r, e[l], e, n)
            })), f = m(t), h = function (e, t, n) {
                var r, o, i = f(e), u = g(e, t);
                return u ? u.value = n : (i.last = u = {
                    index: o = p(t, !0),
                    key: t,
                    value: n,
                    previous: r = i.last,
                    next: void 0,
                    removed: !1
                }, i.first || (i.first = u), r && (r.next = u), A ? i.size++ : e.size++, "F" !== o && (i.index[o] = u)), e
            }, g = function (e, t) {
                var n, r = f(e), o = p(t);
                if ("F" !== o) return r.index[o];
                for (n = r.first; n; n = n.next) if (n.key == t) return n
            };
            return i(c.prototype, {
                clear: function () {
                    for (var e = f(this), t = e.index, n = e.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
                    e.first = e.last = void 0, A ? e.size = 0 : this.size = 0
                }, delete: function (e) {
                    var t = f(this), n = g(this, e);
                    if (n) {
                        var r = n.next, o = n.previous;
                        delete t.index[n.index], n.removed = !0, o && (o.next = r), r && (r.previous = o), t.first == n && (t.first = r), t.last == n && (t.last = o), A ? t.size-- : this.size--
                    }
                    return !!n
                }, forEach: function (e) {
                    for (var t, n = f(this), r = u(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.next : n.first;) for (r(t.value, t.key, this); t && t.removed;) t = t.previous
                }, has: function (e) {
                    return !!g(this, e)
                }
            }), i(c.prototype, n ? {
                get: function (e) {
                    var t = g(this, e);
                    return t && t.value
                }, set: function (e, t) {
                    return h(this, 0 === e ? 0 : e, t)
                }
            } : {
                add: function (e) {
                    return h(this, e = 0 === e ? 0 : e, e)
                }
            }), A && r(c.prototype, "size", {
                get: function () {
                    return f(this).size
                }
            }), c
        }, setStrong: function (e, t, n) {
            var r = t + " Iterator", o = m(t), i = m(r);
            l(e, t, (function (e, t) {
                d(this, {type: r, target: e, state: o(e), kind: t, last: void 0})
            }), (function () {
                for (var e = i(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous;
                return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
                    value: n.key,
                    done: !1
                } : "values" == t ? {value: n.value, done: !1} : {
                    value: [n.key, n.value],
                    done: !1
                } : (e.target = void 0, {value: void 0, done: !0})
            }), n ? "entries" : "values", !n, !0), c(t)
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(26), o = n(12), i = n(2), u = n(8), a = i("species");
    e.exports = function (e) {
        var t = r(e), n = o.f;
        u && t && !t[a] && n(t, a, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (e, t, n) {
    "use strict";
    var r = n(71), o = n(70);
    e.exports = r ? {}.toString : function () {
        return "[object " + o(this) + "]"
    }
}, function (e, t, n) {
    var r = n(3), o = n(132), i = n(116), u = n(13);
    for (var a in o) {
        var s = r[a], l = s && s.prototype;
        if (l && l.forEach !== i) try {
            u(l, "forEach", i)
        } catch (e) {
            l.forEach = i
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.getCurrentUser = function () {
        if (null === o) return null;
        return {uid: o, displayName: u}
    };
    var r = document.getElementsByTagName("head")[0], o = r ? r.getAttribute("data-user") : null,
        i = document.getElementsByTagName("head")[0], u = i ? i.getAttribute("data-user-displayname") : null
}, function (e, t, n) {
    var r;
    /*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
    !function (o, i, u, a) {
        "use strict";
        var s, l = ["", "webkit", "Moz", "MS", "ms", "o"], c = i.createElement("div"), A = Math.round, p = Math.abs,
            f = Date.now;

        function d(e, t, n) {
            return setTimeout(E(e, n), t)
        }

        function m(e, t, n) {
            return !!Array.isArray(e) && (h(e, n[t], n), !0)
        }

        function h(e, t, n) {
            var r;
            if (e) if (e.forEach) e.forEach(t, n); else if (void 0 !== e.length) for (r = 0; r < e.length;) t.call(n, e[r], r, e), r++; else for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e)
        }

        function g(e, t, n) {
            var r = "DEPRECATED METHOD: " + t + "\n" + n + " AT \n";
            return function () {
                var t = new Error("get-stack-trace"),
                    n = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    i = o.console && (o.console.warn || o.console.log);
                return i && i.call(o.console, r, n), e.apply(this, arguments)
            }
        }

        s = "function" != typeof Object.assign ? function (e) {
            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                if (null != r) for (var o in r) r.hasOwnProperty(o) && (t[o] = r[o])
            }
            return t
        } : Object.assign;
        var v = g((function (e, t, n) {
            for (var r = Object.keys(t), o = 0; o < r.length;) (!n || n && void 0 === e[r[o]]) && (e[r[o]] = t[r[o]]), o++;
            return e
        }), "extend", "Use `assign`."), D = g((function (e, t) {
            return v(e, t, !0)
        }), "merge", "Use `assign`.");

        function y(e, t, n) {
            var r, o = t.prototype;
            (r = e.prototype = Object.create(o)).constructor = e, r._super = o, n && s(r, n)
        }

        function E(e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        }

        function C(e, t) {
            return "function" == typeof e ? e.apply(t && t[0] || void 0, t) : e
        }

        function b(e, t) {
            return void 0 === e ? t : e
        }

        function x(e, t, n) {
            h(F(t), (function (t) {
                e.addEventListener(t, n, !1)
            }))
        }

        function w(e, t, n) {
            h(F(t), (function (t) {
                e.removeEventListener(t, n, !1)
            }))
        }

        function T(e, t) {
            for (; e;) {
                if (e == t) return !0;
                e = e.parentNode
            }
            return !1
        }

        function B(e, t) {
            return e.indexOf(t) > -1
        }

        function F(e) {
            return e.trim().split(/\s+/g)
        }

        function M(e, t, n) {
            if (e.indexOf && !n) return e.indexOf(t);
            for (var r = 0; r < e.length;) {
                if (n && e[r][n] == t || !n && e[r] === t) return r;
                r++
            }
            return -1
        }

        function I(e) {
            return Array.prototype.slice.call(e, 0)
        }

        function _(e, t, n) {
            for (var r = [], o = [], i = 0; i < e.length;) {
                var u = t ? e[i][t] : e[i];
                M(o, u) < 0 && r.push(e[i]), o[i] = u, i++
            }
            return n && (r = t ? r.sort((function (e, n) {
                return e[t] > n[t]
            })) : r.sort()), r
        }

        function S(e, t) {
            for (var n, r, o = t[0].toUpperCase() + t.slice(1), i = 0; i < l.length;) {
                if ((r = (n = l[i]) ? n + o : t) in e) return r;
                i++
            }
        }

        var N = 1;

        function O(e) {
            var t = e.ownerDocument || e;
            return t.defaultView || t.parentWindow || o
        }

        var L = "ontouchstart" in o, k = void 0 !== S(o, "PointerEvent"),
            j = L && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent), R = ["x", "y"],
            P = ["clientX", "clientY"];

        function U(e, t) {
            var n = this;
            this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function (t) {
                C(e.options.enable, [e]) && n.handler(t)
            }, this.init()
        }

        function Q(e, t, n) {
            var r = n.pointers.length, o = n.changedPointers.length, i = 1 & t && r - o == 0, u = 12 & t && r - o == 0;
            n.isFirst = !!i, n.isFinal = !!u, i && (e.session = {}), n.eventType = t, function (e, t) {
                var n = e.session, r = t.pointers, o = r.length;
                n.firstInput || (n.firstInput = G(t));
                o > 1 && !n.firstMultiple ? n.firstMultiple = G(t) : 1 === o && (n.firstMultiple = !1);
                var i = n.firstInput, u = n.firstMultiple, a = u ? u.center : i.center, s = t.center = z(r);
                t.timeStamp = f(), t.deltaTime = t.timeStamp - i.timeStamp, t.angle = H(a, s), t.distance = Z(a, s), function (e, t) {
                    var n = t.center, r = e.offsetDelta || {}, o = e.prevDelta || {}, i = e.prevInput || {};
                    1 !== t.eventType && 4 !== i.eventType || (o = e.prevDelta = {
                        x: i.deltaX || 0,
                        y: i.deltaY || 0
                    }, r = e.offsetDelta = {x: n.x, y: n.y});
                    t.deltaX = o.x + (n.x - r.x), t.deltaY = o.y + (n.y - r.y)
                }(n, t), t.offsetDirection = $(t.deltaX, t.deltaY);
                var l = Y(t.deltaTime, t.deltaX, t.deltaY);
                t.overallVelocityX = l.x, t.overallVelocityY = l.y, t.overallVelocity = p(l.x) > p(l.y) ? l.x : l.y, t.scale = u ? (c = u.pointers, A = r, Z(A[0], A[1], P) / Z(c[0], c[1], P)) : 1, t.rotation = u ? function (e, t) {
                    return H(t[1], t[0], P) + H(e[1], e[0], P)
                }(u.pointers, r) : 0, t.maxPointers = n.prevInput ? t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers : t.pointers.length, function (e, t) {
                    var n, r, o, i, u = e.lastInterval || t, a = t.timeStamp - u.timeStamp;
                    if (8 != t.eventType && (a > 25 || void 0 === u.velocity)) {
                        var s = t.deltaX - u.deltaX, l = t.deltaY - u.deltaY, c = Y(a, s, l);
                        r = c.x, o = c.y, n = p(c.x) > p(c.y) ? c.x : c.y, i = $(s, l), e.lastInterval = t
                    } else n = u.velocity, r = u.velocityX, o = u.velocityY, i = u.direction;
                    t.velocity = n, t.velocityX = r, t.velocityY = o, t.direction = i
                }(n, t);
                var c, A;
                var d = e.element;
                T(t.srcEvent.target, d) && (d = t.srcEvent.target);
                t.target = d
            }(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
        }

        function G(e) {
            for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
                clientX: A(e.pointers[n].clientX),
                clientY: A(e.pointers[n].clientY)
            }, n++;
            return {timeStamp: f(), pointers: t, center: z(t), deltaX: e.deltaX, deltaY: e.deltaY}
        }

        function z(e) {
            var t = e.length;
            if (1 === t) return {x: A(e[0].clientX), y: A(e[0].clientY)};
            for (var n = 0, r = 0, o = 0; o < t;) n += e[o].clientX, r += e[o].clientY, o++;
            return {x: A(n / t), y: A(r / t)}
        }

        function Y(e, t, n) {
            return {x: t / e || 0, y: n / e || 0}
        }

        function $(e, t) {
            return e === t ? 1 : p(e) >= p(t) ? e < 0 ? 2 : 4 : t < 0 ? 8 : 16
        }

        function Z(e, t, n) {
            n || (n = R);
            var r = t[n[0]] - e[n[0]], o = t[n[1]] - e[n[1]];
            return Math.sqrt(r * r + o * o)
        }

        function H(e, t, n) {
            n || (n = R);
            var r = t[n[0]] - e[n[0]], o = t[n[1]] - e[n[1]];
            return 180 * Math.atan2(o, r) / Math.PI
        }

        U.prototype = {
            handler: function () {
            }, init: function () {
                this.evEl && x(this.element, this.evEl, this.domHandler), this.evTarget && x(this.target, this.evTarget, this.domHandler), this.evWin && x(O(this.element), this.evWin, this.domHandler)
            }, destroy: function () {
                this.evEl && w(this.element, this.evEl, this.domHandler), this.evTarget && w(this.target, this.evTarget, this.domHandler), this.evWin && w(O(this.element), this.evWin, this.domHandler)
            }
        };
        var W = {mousedown: 1, mousemove: 2, mouseup: 4};

        function V() {
            this.evEl = "mousedown", this.evWin = "mousemove mouseup", this.pressed = !1, U.apply(this, arguments)
        }

        y(V, U, {
            handler: function (e) {
                var t = W[e.type];
                1 & t && 0 === e.button && (this.pressed = !0), 2 & t && 1 !== e.which && (t = 4), this.pressed && (4 & t && (this.pressed = !1), this.callback(this.manager, t, {
                    pointers: [e],
                    changedPointers: [e],
                    pointerType: "mouse",
                    srcEvent: e
                }))
            }
        });
        var X = {pointerdown: 1, pointermove: 2, pointerup: 4, pointercancel: 8, pointerout: 8},
            J = {2: "touch", 3: "pen", 4: "mouse", 5: "kinect"}, K = "pointerdown",
            q = "pointermove pointerup pointercancel";

        function ee() {
            this.evEl = K, this.evWin = q, U.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        o.MSPointerEvent && !o.PointerEvent && (K = "MSPointerDown", q = "MSPointerMove MSPointerUp MSPointerCancel"), y(ee, U, {
            handler: function (e) {
                var t = this.store, n = !1, r = e.type.toLowerCase().replace("ms", ""), o = X[r],
                    i = J[e.pointerType] || e.pointerType, u = "touch" == i, a = M(t, e.pointerId, "pointerId");
                1 & o && (0 === e.button || u) ? a < 0 && (t.push(e), a = t.length - 1) : 12 & o && (n = !0), a < 0 || (t[a] = e, this.callback(this.manager, o, {
                    pointers: t,
                    changedPointers: [e],
                    pointerType: i,
                    srcEvent: e
                }), n && t.splice(a, 1))
            }
        });
        var te = {touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8};

        function ne() {
            this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, U.apply(this, arguments)
        }

        function re(e, t) {
            var n = I(e.touches), r = I(e.changedTouches);
            return 12 & t && (n = _(n.concat(r), "identifier", !0)), [n, r]
        }

        y(ne, U, {
            handler: function (e) {
                var t = te[e.type];
                if (1 === t && (this.started = !0), this.started) {
                    var n = re.call(this, e, t);
                    12 & t && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                        pointers: n[0],
                        changedPointers: n[1],
                        pointerType: "touch",
                        srcEvent: e
                    })
                }
            }
        });
        var oe = {touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8};

        function ie() {
            this.evTarget = "touchstart touchmove touchend touchcancel", this.targetIds = {}, U.apply(this, arguments)
        }

        function ue(e, t) {
            var n = I(e.touches), r = this.targetIds;
            if (3 & t && 1 === n.length) return r[n[0].identifier] = !0, [n, n];
            var o, i, u = I(e.changedTouches), a = [], s = this.target;
            if (i = n.filter((function (e) {
                return T(e.target, s)
            })), 1 === t) for (o = 0; o < i.length;) r[i[o].identifier] = !0, o++;
            for (o = 0; o < u.length;) r[u[o].identifier] && a.push(u[o]), 12 & t && delete r[u[o].identifier], o++;
            return a.length ? [_(i.concat(a), "identifier", !0), a] : void 0
        }

        y(ie, U, {
            handler: function (e) {
                var t = oe[e.type], n = ue.call(this, e, t);
                n && this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: "touch",
                    srcEvent: e
                })
            }
        });

        function ae() {
            U.apply(this, arguments);
            var e = E(this.handler, this);
            this.touch = new ie(this.manager, e), this.mouse = new V(this.manager, e), this.primaryTouch = null, this.lastTouches = []
        }

        function se(e, t) {
            1 & e ? (this.primaryTouch = t.changedPointers[0].identifier, le.call(this, t)) : 12 & e && le.call(this, t)
        }

        function le(e) {
            var t = e.changedPointers[0];
            if (t.identifier === this.primaryTouch) {
                var n = {x: t.clientX, y: t.clientY};
                this.lastTouches.push(n);
                var r = this.lastTouches;
                setTimeout((function () {
                    var e = r.indexOf(n);
                    e > -1 && r.splice(e, 1)
                }), 2500)
            }
        }

        function ce(e) {
            for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, r = 0; r < this.lastTouches.length; r++) {
                var o = this.lastTouches[r], i = Math.abs(t - o.x), u = Math.abs(n - o.y);
                if (i <= 25 && u <= 25) return !0
            }
            return !1
        }

        y(ae, U, {
            handler: function (e, t, n) {
                var r = "touch" == n.pointerType, o = "mouse" == n.pointerType;
                if (!(o && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                    if (r) se.call(this, t, n); else if (o && ce.call(this, n)) return;
                    this.callback(e, t, n)
                }
            }, destroy: function () {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var Ae = S(c.style, "touchAction"), pe = void 0 !== Ae, fe = function () {
            if (!pe) return !1;
            var e = {}, t = o.CSS && o.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function (n) {
                e[n] = !t || o.CSS.supports("touch-action", n)
            })), e
        }();

        function de(e, t) {
            this.manager = e, this.set(t)
        }

        de.prototype = {
            set: function (e) {
                "compute" == e && (e = this.compute()), pe && this.manager.element.style && fe[e] && (this.manager.element.style[Ae] = e), this.actions = e.toLowerCase().trim()
            }, update: function () {
                this.set(this.manager.options.touchAction)
            }, compute: function () {
                var e = [];
                return h(this.manager.recognizers, (function (t) {
                    C(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                })), function (e) {
                    if (B(e, "none")) return "none";
                    var t = B(e, "pan-x"), n = B(e, "pan-y");
                    if (t && n) return "none";
                    if (t || n) return t ? "pan-x" : "pan-y";
                    if (B(e, "manipulation")) return "manipulation";
                    return "auto"
                }(e.join(" "))
            }, preventDefaults: function (e) {
                var t = e.srcEvent, n = e.offsetDirection;
                if (this.manager.session.prevented) t.preventDefault(); else {
                    var r = this.actions, o = B(r, "none") && !fe.none, i = B(r, "pan-y") && !fe["pan-y"],
                        u = B(r, "pan-x") && !fe["pan-x"];
                    if (o) {
                        var a = 1 === e.pointers.length, s = e.distance < 2, l = e.deltaTime < 250;
                        if (a && s && l) return
                    }
                    if (!u || !i) return o || i && 6 & n || u && 24 & n ? this.preventSrc(t) : void 0
                }
            }, preventSrc: function (e) {
                this.manager.session.prevented = !0, e.preventDefault()
            }
        };

        function me(e) {
            this.options = s({}, this.defaults, e || {}), this.id = N++, this.manager = null, this.options.enable = b(this.options.enable, !0), this.state = 1, this.simultaneous = {}, this.requireFail = []
        }

        function he(e) {
            return 16 & e ? "cancel" : 8 & e ? "end" : 4 & e ? "move" : 2 & e ? "start" : ""
        }

        function ge(e) {
            return 16 == e ? "down" : 8 == e ? "up" : 2 == e ? "left" : 4 == e ? "right" : ""
        }

        function ve(e, t) {
            var n = t.manager;
            return n ? n.get(e) : e
        }

        function De() {
            me.apply(this, arguments)
        }

        function ye() {
            De.apply(this, arguments), this.pX = null, this.pY = null
        }

        function Ee() {
            De.apply(this, arguments)
        }

        function Ce() {
            me.apply(this, arguments), this._timer = null, this._input = null
        }

        function be() {
            De.apply(this, arguments)
        }

        function xe() {
            De.apply(this, arguments)
        }

        function we() {
            me.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function Te(e, t) {
            return (t = t || {}).recognizers = b(t.recognizers, Te.defaults.preset), new Be(e, t)
        }

        me.prototype = {
            defaults: {}, set: function (e) {
                return s(this.options, e), this.manager && this.manager.touchAction.update(), this
            }, recognizeWith: function (e) {
                if (m(e, "recognizeWith", this)) return this;
                var t = this.simultaneous;
                return t[(e = ve(e, this)).id] || (t[e.id] = e, e.recognizeWith(this)), this
            }, dropRecognizeWith: function (e) {
                return m(e, "dropRecognizeWith", this) || (e = ve(e, this), delete this.simultaneous[e.id]), this
            }, requireFailure: function (e) {
                if (m(e, "requireFailure", this)) return this;
                var t = this.requireFail;
                return -1 === M(t, e = ve(e, this)) && (t.push(e), e.requireFailure(this)), this
            }, dropRequireFailure: function (e) {
                if (m(e, "dropRequireFailure", this)) return this;
                e = ve(e, this);
                var t = M(this.requireFail, e);
                return t > -1 && this.requireFail.splice(t, 1), this
            }, hasRequireFailures: function () {
                return this.requireFail.length > 0
            }, canRecognizeWith: function (e) {
                return !!this.simultaneous[e.id]
            }, emit: function (e) {
                var t = this, n = this.state;

                function r(n) {
                    t.manager.emit(n, e)
                }

                n < 8 && r(t.options.event + he(n)), r(t.options.event), e.additionalEvent && r(e.additionalEvent), n >= 8 && r(t.options.event + he(n))
            }, tryEmit: function (e) {
                if (this.canEmit()) return this.emit(e);
                this.state = 32
            }, canEmit: function () {
                for (var e = 0; e < this.requireFail.length;) {
                    if (!(33 & this.requireFail[e].state)) return !1;
                    e++
                }
                return !0
            }, recognize: function (e) {
                var t = s({}, e);
                if (!C(this.options.enable, [this, t])) return this.reset(), void (this.state = 32);
                56 & this.state && (this.state = 1), this.state = this.process(t), 30 & this.state && this.tryEmit(t)
            }, process: function (e) {
            }, getTouchAction: function () {
            }, reset: function () {
            }
        }, y(De, me, {
            defaults: {pointers: 1}, attrTest: function (e) {
                var t = this.options.pointers;
                return 0 === t || e.pointers.length === t
            }, process: function (e) {
                var t = this.state, n = e.eventType, r = 6 & t, o = this.attrTest(e);
                return r && (8 & n || !o) ? 16 | t : r || o ? 4 & n ? 8 | t : 2 & t ? 4 | t : 2 : 32
            }
        }), y(ye, De, {
            defaults: {event: "pan", threshold: 10, pointers: 1, direction: 30},
            getTouchAction: function () {
                var e = this.options.direction, t = [];
                return 6 & e && t.push("pan-y"), 24 & e && t.push("pan-x"), t
            },
            directionTest: function (e) {
                var t = this.options, n = !0, r = e.distance, o = e.direction, i = e.deltaX, u = e.deltaY;
                return o & t.direction || (6 & t.direction ? (o = 0 === i ? 1 : i < 0 ? 2 : 4, n = i != this.pX, r = Math.abs(e.deltaX)) : (o = 0 === u ? 1 : u < 0 ? 8 : 16, n = u != this.pY, r = Math.abs(e.deltaY))), e.direction = o, n && r > t.threshold && o & t.direction
            },
            attrTest: function (e) {
                return De.prototype.attrTest.call(this, e) && (2 & this.state || !(2 & this.state) && this.directionTest(e))
            },
            emit: function (e) {
                this.pX = e.deltaX, this.pY = e.deltaY;
                var t = ge(e.direction);
                t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
            }
        }), y(Ee, De, {
            defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
                return ["none"]
            }, attrTest: function (e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state)
            }, emit: function (e) {
                if (1 !== e.scale) {
                    var t = e.scale < 1 ? "in" : "out";
                    e.additionalEvent = this.options.event + t
                }
                this._super.emit.call(this, e)
            }
        }), y(Ce, me, {
            defaults: {event: "press", pointers: 1, time: 251, threshold: 9}, getTouchAction: function () {
                return ["auto"]
            }, process: function (e) {
                var t = this.options, n = e.pointers.length === t.pointers, r = e.distance < t.threshold,
                    o = e.deltaTime > t.time;
                if (this._input = e, !r || !n || 12 & e.eventType && !o) this.reset(); else if (1 & e.eventType) this.reset(), this._timer = d((function () {
                    this.state = 8, this.tryEmit()
                }), t.time, this); else if (4 & e.eventType) return 8;
                return 32
            }, reset: function () {
                clearTimeout(this._timer)
            }, emit: function (e) {
                8 === this.state && (e && 4 & e.eventType ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = f(), this.manager.emit(this.options.event, this._input)))
            }
        }), y(be, De, {
            defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
                return ["none"]
            }, attrTest: function (e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state)
            }
        }), y(xe, De, {
            defaults: {event: "swipe", threshold: 10, velocity: .3, direction: 30, pointers: 1},
            getTouchAction: function () {
                return ye.prototype.getTouchAction.call(this)
            },
            attrTest: function (e) {
                var t, n = this.options.direction;
                return 30 & n ? t = e.overallVelocity : 6 & n ? t = e.overallVelocityX : 24 & n && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && p(t) > this.options.velocity && 4 & e.eventType
            },
            emit: function (e) {
                var t = ge(e.offsetDirection);
                t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
            }
        }), y(we, me, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            }, getTouchAction: function () {
                return ["manipulation"]
            }, process: function (e) {
                var t = this.options, n = e.pointers.length === t.pointers, r = e.distance < t.threshold,
                    o = e.deltaTime < t.time;
                if (this.reset(), 1 & e.eventType && 0 === this.count) return this.failTimeout();
                if (r && o && n) {
                    if (4 != e.eventType) return this.failTimeout();
                    var i = !this.pTime || e.timeStamp - this.pTime < t.interval,
                        u = !this.pCenter || Z(this.pCenter, e.center) < t.posThreshold;
                    if (this.pTime = e.timeStamp, this.pCenter = e.center, u && i ? this.count += 1 : this.count = 1, this._input = e, 0 === this.count % t.taps) return this.hasRequireFailures() ? (this._timer = d((function () {
                        this.state = 8, this.tryEmit()
                    }), t.interval, this), 2) : 8
                }
                return 32
            }, failTimeout: function () {
                return this._timer = d((function () {
                    this.state = 32
                }), this.options.interval, this), 32
            }, reset: function () {
                clearTimeout(this._timer)
            }, emit: function () {
                8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), Te.VERSION = "2.0.7", Te.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [[be, {enable: !1}], [Ee, {enable: !1}, ["rotate"]], [xe, {direction: 6}], [ye, {direction: 6}, ["swipe"]], [we], [we, {
                event: "doubletap",
                taps: 2
            }, ["tap"]], [Ce]],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };

        function Be(e, t) {
            var n;
            this.options = s({}, Te.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = new ((n = this).options.inputClass || (k ? ee : j ? ie : L ? ae : V))(n, Q), this.touchAction = new de(this, this.options.touchAction), Fe(this, !0), h(this.options.recognizers, (function (e) {
                var t = this.add(new e[0](e[1]));
                e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
            }), this)
        }

        function Fe(e, t) {
            var n, r = e.element;
            r.style && (h(e.options.cssProps, (function (o, i) {
                n = S(r.style, i), t ? (e.oldCssProps[n] = r.style[n], r.style[n] = o) : r.style[n] = e.oldCssProps[n] || ""
            })), t || (e.oldCssProps = {}))
        }

        Be.prototype = {
            set: function (e) {
                return s(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
            }, stop: function (e) {
                this.session.stopped = e ? 2 : 1
            }, recognize: function (e) {
                var t = this.session;
                if (!t.stopped) {
                    var n;
                    this.touchAction.preventDefaults(e);
                    var r = this.recognizers, o = t.curRecognizer;
                    (!o || o && 8 & o.state) && (o = t.curRecognizer = null);
                    for (var i = 0; i < r.length;) n = r[i], 2 === t.stopped || o && n != o && !n.canRecognizeWith(o) ? n.reset() : n.recognize(e), !o && 14 & n.state && (o = t.curRecognizer = n), i++
                }
            }, get: function (e) {
                if (e instanceof me) return e;
                for (var t = this.recognizers, n = 0; n < t.length; n++) if (t[n].options.event == e) return t[n];
                return null
            }, add: function (e) {
                if (m(e, "add", this)) return this;
                var t = this.get(e.options.event);
                return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
            }, remove: function (e) {
                if (m(e, "remove", this)) return this;
                if (e = this.get(e)) {
                    var t = this.recognizers, n = M(t, e);
                    -1 !== n && (t.splice(n, 1), this.touchAction.update())
                }
                return this
            }, on: function (e, t) {
                if (void 0 !== e && void 0 !== t) {
                    var n = this.handlers;
                    return h(F(e), (function (e) {
                        n[e] = n[e] || [], n[e].push(t)
                    })), this
                }
            }, off: function (e, t) {
                if (void 0 !== e) {
                    var n = this.handlers;
                    return h(F(e), (function (e) {
                        t ? n[e] && n[e].splice(M(n[e], t), 1) : delete n[e]
                    })), this
                }
            }, emit: function (e, t) {
                this.options.domEvents && function (e, t) {
                    var n = i.createEvent("Event");
                    n.initEvent(e, !0, !0), n.gesture = t, t.target.dispatchEvent(n)
                }(e, t);
                var n = this.handlers[e] && this.handlers[e].slice();
                if (n && n.length) {
                    t.type = e, t.preventDefault = function () {
                        t.srcEvent.preventDefault()
                    };
                    for (var r = 0; r < n.length;) n[r](t), r++
                }
            }, destroy: function () {
                this.element && Fe(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, s(Te, {
            INPUT_START: 1,
            INPUT_MOVE: 2,
            INPUT_END: 4,
            INPUT_CANCEL: 8,
            STATE_POSSIBLE: 1,
            STATE_BEGAN: 2,
            STATE_CHANGED: 4,
            STATE_ENDED: 8,
            STATE_RECOGNIZED: 8,
            STATE_CANCELLED: 16,
            STATE_FAILED: 32,
            DIRECTION_NONE: 1,
            DIRECTION_LEFT: 2,
            DIRECTION_RIGHT: 4,
            DIRECTION_UP: 8,
            DIRECTION_DOWN: 16,
            DIRECTION_HORIZONTAL: 6,
            DIRECTION_VERTICAL: 24,
            DIRECTION_ALL: 30,
            Manager: Be,
            Input: U,
            TouchAction: de,
            TouchInput: ie,
            MouseInput: V,
            PointerEventInput: ee,
            TouchMouseInput: ae,
            SingleTouchInput: ne,
            Recognizer: me,
            AttrRecognizer: De,
            Tap: we,
            Pan: ye,
            Swipe: xe,
            Pinch: Ee,
            Rotate: be,
            Press: Ce,
            on: x,
            off: w,
            each: h,
            merge: D,
            extend: v,
            assign: s,
            inherit: y,
            bindFn: E,
            prefixed: S
        }), (void 0 !== o ? o : "undefined" != typeof self ? self : {}).Hammer = Te, void 0 === (r = function () {
            return Te
        }.call(t, n, t, e)) || (e.exports = r)
    }(window, document)
}, function (e, t, n) {
    "use strict";
    var r = n(1);

    function o(e, t) {
        return RegExp(e, t)
    }

    t.UNSUPPORTED_Y = r((function () {
        var e = o("a", "y");
        return e.lastIndex = 2, null != e.exec("abcd")
    })), t.BROKEN_CARET = r((function () {
        var e = o("^r", "gy");
        return e.lastIndex = 2, null != e.exec("str")
    }))
}, function (e, t, n) {
    "use strict";
    var r = n(28), o = n(17), i = n(130), u = n(129), a = n(16), s = n(68), l = n(43);
    e.exports = function (e) {
        var t, n, c, A, p, f, d = o(e), m = "function" == typeof this ? this : Array, h = arguments.length,
            g = h > 1 ? arguments[1] : void 0, v = void 0 !== g, D = l(d), y = 0;
        if (v && (g = r(g, h > 2 ? arguments[2] : void 0, 2)), null == D || m == Array && u(D)) for (n = new m(t = a(d.length)); t > y; y++) f = v ? g(d[y], y) : d[y], s(n, y, f); else for (p = (A = D.call(d)).next, n = new m; !(c = p.call(A)).done; y++) f = v ? i(A, g, [c.value, y], !0) : c.value, s(n, y, f);
        return n.length = y, n
    }
}, function (e, t, n) {
    "use strict";
    var r = /[^\0-\u007E]/, o = /[.\u3002\uFF0E\uFF61]/g, i = "Overflow: input needs wider integers to process",
        u = Math.floor, a = String.fromCharCode, s = function (e) {
            return e + 22 + 75 * (e < 26)
        }, l = function (e, t, n) {
            var r = 0;
            for (e = n ? u(e / 700) : e >> 1, e += u(e / t); e > 455; r += 36) e = u(e / 35);
            return u(r + 36 * e / (e + 38))
        }, c = function (e) {
            var t, n, r = [], o = (e = function (e) {
                for (var t = [], n = 0, r = e.length; n < r;) {
                    var o = e.charCodeAt(n++);
                    if (o >= 55296 && o <= 56319 && n < r) {
                        var i = e.charCodeAt(n++);
                        56320 == (64512 & i) ? t.push(((1023 & o) << 10) + (1023 & i) + 65536) : (t.push(o), n--)
                    } else t.push(o)
                }
                return t
            }(e)).length, c = 128, A = 0, p = 72;
            for (t = 0; t < e.length; t++) (n = e[t]) < 128 && r.push(a(n));
            var f = r.length, d = f;
            for (f && r.push("-"); d < o;) {
                var m = 2147483647;
                for (t = 0; t < e.length; t++) (n = e[t]) >= c && n < m && (m = n);
                var h = d + 1;
                if (m - c > u((2147483647 - A) / h)) throw RangeError(i);
                for (A += (m - c) * h, c = m, t = 0; t < e.length; t++) {
                    if ((n = e[t]) < c && ++A > 2147483647) throw RangeError(i);
                    if (n == c) {
                        for (var g = A, v = 36; ; v += 36) {
                            var D = v <= p ? 1 : v >= p + 26 ? 26 : v - p;
                            if (g < D) break;
                            var y = g - D, E = 36 - D;
                            r.push(a(s(D + y % E))), g = u(y / E)
                        }
                        r.push(a(s(g))), p = l(A, h, d == f), A = 0, ++d
                    }
                }
                ++A, ++c
            }
            return r.join("")
        };
    e.exports = function (e) {
        var t, n, i = [], u = e.toLowerCase().replace(o, ".").split(".");
        for (t = 0; t < u.length; t++) n = u[t], i.push(r.test(n) ? "xn--" + c(n) : n);
        return i.join(".")
    }
}, function (e, t, n) {
    "use strict";
    n(32);
    var r = n(4), o = n(26), i = n(134), u = n(14), a = n(131), s = n(31), l = n(123), c = n(20), A = n(44), p = n(5),
        f = n(28), d = n(70), m = n(6), h = n(9), g = n(42), v = n(24), D = n(221), y = n(43), E = n(2), C = o("fetch"),
        b = o("Headers"), x = E("iterator"), w = c.set, T = c.getterFor("URLSearchParams"),
        B = c.getterFor("URLSearchParamsIterator"), F = /\+/g, M = Array(4), I = function (e) {
            return M[e - 1] || (M[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
        }, _ = function (e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        }, S = function (e) {
            var t = e.replace(F, " "), n = 4;
            try {
                return decodeURIComponent(t)
            } catch (e) {
                for (; n;) t = t.replace(I(n--), _);
                return t
            }
        }, N = /[!'()~]|%20/g, O = {"!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+"},
        L = function (e) {
            return O[e]
        }, k = function (e) {
            return encodeURIComponent(e).replace(N, L)
        }, j = function (e, t) {
            if (t) for (var n, r, o = t.split("&"), i = 0; i < o.length;) (n = o[i++]).length && (r = n.split("="), e.push({
                key: S(r.shift()),
                value: S(r.join("="))
            }))
        }, R = function (e) {
            this.entries.length = 0, j(this.entries, e)
        }, P = function (e, t) {
            if (e < t) throw TypeError("Not enough arguments")
        }, U = l((function (e, t) {
            w(this, {type: "URLSearchParamsIterator", iterator: D(T(e).entries), kind: t})
        }), "Iterator", (function () {
            var e = B(this), t = e.kind, n = e.iterator.next(), r = n.value;
            return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]), n
        })), Q = function () {
            A(this, Q, "URLSearchParams");
            var e, t, n, r, o, i, u, a, s, l = arguments.length > 0 ? arguments[0] : void 0, c = this, f = [];
            if (w(c, {
                type: "URLSearchParams", entries: f, updateURL: function () {
                }, updateSearchParams: R
            }), void 0 !== l) if (h(l)) if ("function" == typeof (e = y(l))) for (n = (t = e.call(l)).next; !(r = n.call(t)).done;) {
                if ((u = (i = (o = D(m(r.value))).next).call(o)).done || (a = i.call(o)).done || !i.call(o).done) throw TypeError("Expected sequence with length 2");
                f.push({key: u.value + "", value: a.value + ""})
            } else for (s in l) p(l, s) && f.push({
                key: s,
                value: l[s] + ""
            }); else j(f, "string" == typeof l ? "?" === l.charAt(0) ? l.slice(1) : l : l + "")
        }, G = Q.prototype;
    a(G, {
        append: function (e, t) {
            P(arguments.length, 2);
            var n = T(this);
            n.entries.push({key: e + "", value: t + ""}), n.updateURL()
        }, delete: function (e) {
            P(arguments.length, 1);
            for (var t = T(this), n = t.entries, r = e + "", o = 0; o < n.length;) n[o].key === r ? n.splice(o, 1) : o++;
            t.updateURL()
        }, get: function (e) {
            P(arguments.length, 1);
            for (var t = T(this).entries, n = e + "", r = 0; r < t.length; r++) if (t[r].key === n) return t[r].value;
            return null
        }, getAll: function (e) {
            P(arguments.length, 1);
            for (var t = T(this).entries, n = e + "", r = [], o = 0; o < t.length; o++) t[o].key === n && r.push(t[o].value);
            return r
        }, has: function (e) {
            P(arguments.length, 1);
            for (var t = T(this).entries, n = e + "", r = 0; r < t.length;) if (t[r++].key === n) return !0;
            return !1
        }, set: function (e, t) {
            P(arguments.length, 1);
            for (var n, r = T(this), o = r.entries, i = !1, u = e + "", a = t + "", s = 0; s < o.length; s++) (n = o[s]).key === u && (i ? o.splice(s--, 1) : (i = !0, n.value = a));
            i || o.push({key: u, value: a}), r.updateURL()
        }, sort: function () {
            var e, t, n, r = T(this), o = r.entries, i = o.slice();
            for (o.length = 0, n = 0; n < i.length; n++) {
                for (e = i[n], t = 0; t < n; t++) if (o[t].key > e.key) {
                    o.splice(t, 0, e);
                    break
                }
                t === n && o.push(e)
            }
            r.updateURL()
        }, forEach: function (e) {
            for (var t, n = T(this).entries, r = f(e, arguments.length > 1 ? arguments[1] : void 0, 3), o = 0; o < n.length;) r((t = n[o++]).value, t.key, this)
        }, keys: function () {
            return new U(this, "keys")
        }, values: function () {
            return new U(this, "values")
        }, entries: function () {
            return new U(this, "entries")
        }
    }, {enumerable: !0}), u(G, x, G.entries), u(G, "toString", (function () {
        for (var e, t = T(this).entries, n = [], r = 0; r < t.length;) e = t[r++], n.push(k(e.key) + "=" + k(e.value));
        return n.join("&")
    }), {enumerable: !0}), s(Q, "URLSearchParams"), r({
        global: !0,
        forced: !i
    }, {URLSearchParams: Q}), i || "function" != typeof C || "function" != typeof b || r({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function (e) {
            var t, n, r, o = [e];
            return arguments.length > 1 && (t = arguments[1], h(t) && (n = t.body, "URLSearchParams" === d(n) && ((r = t.headers ? new b(t.headers) : new b).has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), t = g(t, {
                body: v(0, String(n)),
                headers: v(0, r)
            }))), o.push(t)), C.apply(this, o)
        }
    }), e.exports = {URLSearchParams: Q, getState: T}
}, function (e, t, n) {
    var r = n(6), o = n(43);
    e.exports = function (e) {
        var t = o(e);
        if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
        return r(t.call(e))
    }
}, function (e, t, n) {
    "use strict";
    n(52);
    var r = n(14), o = n(1), i = n(2), u = n(73), a = n(13), s = i("species"), l = !o((function () {
            var e = /./;
            return e.exec = function () {
                var e = [];
                return e.groups = {a: "7"}, e
            }, "7" !== "".replace(e, "$<a>")
        })), c = "$0" === "a".replace(/./, "$0"), A = i("replace"), p = !!/./[A] && "" === /./[A]("a", "$0"),
        f = !o((function () {
            var e = /(?:)/, t = e.exec;
            e.exec = function () {
                return t.apply(this, arguments)
            };
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        }));
    e.exports = function (e, t, n, A) {
        var d = i(e), m = !o((function () {
            var t = {};
            return t[d] = function () {
                return 7
            }, 7 != ""[e](t)
        })), h = m && !o((function () {
            var t = !1, n = /a/;
            return "split" === e && ((n = {}).constructor = {}, n.constructor[s] = function () {
                return n
            }, n.flags = "", n[d] = /./[d]), n.exec = function () {
                return t = !0, null
            }, n[d](""), !t
        }));
        if (!m || !h || "replace" === e && (!l || !c || p) || "split" === e && !f) {
            var g = /./[d], v = n(d, ""[e], (function (e, t, n, r, o) {
                return t.exec === u ? m && !o ? {done: !0, value: g.call(t, n, r)} : {
                    done: !0,
                    value: e.call(n, t, r)
                } : {done: !1}
            }), {REPLACE_KEEPS_$0: c, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p}), D = v[0], y = v[1];
            r(String.prototype, e, D), r(RegExp.prototype, d, 2 == t ? function (e, t) {
                return y.call(e, this, t)
            } : function (e) {
                return y.call(e, this)
            })
        }
        A && a(RegExp.prototype[d], "sham", !0)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(72).charAt;
    e.exports = function (e, t, n) {
        return t + (n ? r(e, t).length : 1)
    }
}, function (e, t, n) {
    var r = n(38), o = n(73);
    e.exports = function (e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
            var i = n.call(e, t);
            if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
            return i
        }
        if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
        return o.call(e, t)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(226), o = n(227);

    function i(e) {
        e = e || {}, this.catalogs = {}, this.locale = "", this.domain = "messages", this.listeners = [], this.sourceLocale = "", e.sourceLocale && ("string" == typeof e.sourceLocale ? this.sourceLocale = e.sourceLocale : this.warn("The `sourceLocale` option should be a string")), this.debug = "debug" in e && !0 === e.debug
    }

    e.exports = i, i.prototype.on = function (e, t) {
        this.listeners.push({eventName: e, callback: t})
    }, i.prototype.off = function (e, t) {
        this.listeners = this.listeners.filter((function (n) {
            return !1 == (n.eventName === e && n.callback === t)
        }))
    }, i.prototype.emit = function (e, t) {
        for (var n = 0; n < this.listeners.length; n++) {
            var r = this.listeners[n];
            r.eventName === e && r.callback(t)
        }
    }, i.prototype.warn = function (e) {
        this.debug && console.warn(e), this.emit("error", new Error(e))
    }, i.prototype.addTranslations = function (e, t, n) {
        this.catalogs[e] || (this.catalogs[e] = {}), this.catalogs[e][t] = n
    }, i.prototype.setLocale = function (e) {
        "string" == typeof e ? ("" === e.trim() && this.warn("You called setLocale() with an empty value, which makes little sense."), e === this.sourceLocale || this.catalogs[e] || this.warn('You called setLocale() with "' + e + '", but no translations for that locale has been added.'), this.locale = e) : this.warn("You called setLocale() with an argument of type " + typeof e + ". The locale must be a string.")
    }, i.prototype.setTextDomain = function (e) {
        "string" == typeof e ? ("" === e.trim() && this.warn("You called setTextDomain() with an empty `domain` value."), this.domain = e) : this.warn("You called setTextDomain() with an argument of type " + typeof e + ". The domain must be a string.")
    }, i.prototype.gettext = function (e) {
        return this.dnpgettext(this.domain, "", e)
    }, i.prototype.dgettext = function (e, t) {
        return this.dnpgettext(e, "", t)
    }, i.prototype.ngettext = function (e, t, n) {
        return this.dnpgettext(this.domain, "", e, t, n)
    }, i.prototype.dngettext = function (e, t, n, r) {
        return this.dnpgettext(e, "", t, n, r)
    }, i.prototype.pgettext = function (e, t) {
        return this.dnpgettext(this.domain, e, t)
    }, i.prototype.dpgettext = function (e, t, n) {
        return this.dnpgettext(e, t, n)
    }, i.prototype.npgettext = function (e, t, n, r) {
        return this.dnpgettext(this.domain, e, t, n, r)
    }, i.prototype.dnpgettext = function (e, t, n, r, u) {
        var a, s, l = n;
        if (t = t || "", isNaN(u) || 1 === u || (l = r || n), a = this._getTranslation(e, t, n)) {
            if ("number" == typeof u) "boolean" == typeof (s = (0, o[i.getLanguageCode(this.locale)].pluralsFunc)(u)) && (s = s ? 1 : 0); else s = 0;
            return a.msgstr[s] || l
        }
        return this.sourceLocale && this.locale === this.sourceLocale || this.warn('No translation was found for msgid "' + n + '" in msgctxt "' + t + '" and domain "' + e + '"'), l
    }, i.prototype.getComment = function (e, t, n) {
        var r;
        return (r = this._getTranslation(e, t, n)) && r.comments || {}
    }, i.prototype._getTranslation = function (e, t, n) {
        return t = t || "", r(this.catalogs, [this.locale, e, "translations", t, n])
    }, i.getLanguageCode = function (e) {
        return e.split(/[\-_]/)[0].toLowerCase()
    }, i.prototype.textdomain = function (e) {
        this.debug && console.warn("textdomain(domain) was used to set locales in node-gettext v1. Make sure you are using it for domains, and switch to setLocale(locale) if you are not.\n\n To read more about the migration from node-gettext v1 to v2, see https://github.com/alexanderwallin/node-gettext/#migrating-from-1x-to-2x\n\nThis warning will be removed in the final 2.0.0"), this.setTextDomain(e)
    }, i.prototype.setlocale = function (e) {
        this.setLocale(e)
    }, i.prototype.addTextdomain = function () {
        console.error("addTextdomain() is deprecated.\n\n* To add translations, use addTranslations()\n* To set the default domain, use setTextDomain() (or its alias textdomain())\n\nTo read more about the migration from node-gettext v1 to v2, see https://github.com/alexanderwallin/node-gettext/#migrating-from-1x-to-2x")
    }
}, function (e, t, n) {
    (function (t) {
        var n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/, o = /^\./,
            i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            u = /\\(\\)?/g, a = /^\[object .+?Constructor\]$/,
            s = "object" == typeof t && t && t.Object === Object && t,
            l = "object" == typeof self && self && self.Object === Object && self,
            c = s || l || Function("return this")();
        var A, p = Array.prototype, f = Function.prototype, d = Object.prototype, m = c["__core-js_shared__"],
            h = (A = /[^.]+$/.exec(m && m.keys && m.keys.IE_PROTO || "")) ? "Symbol(src)_1." + A : "", g = f.toString,
            v = d.hasOwnProperty, D = d.toString,
            y = RegExp("^" + g.call(v).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            E = c.Symbol, C = p.splice, b = O(c, "Map"), x = O(Object, "create"), w = E ? E.prototype : void 0,
            T = w ? w.toString : void 0;

        function B(e) {
            var t = -1, n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function F(e) {
            var t = -1, n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function M(e) {
            var t = -1, n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function I(e, t) {
            for (var n, r, o = e.length; o--;) if ((n = e[o][0]) === (r = t) || n != n && r != r) return o;
            return -1
        }

        function _(e, t) {
            for (var o, i = 0, u = (t = function (e, t) {
                if (R(e)) return !1;
                var o = typeof e;
                if ("number" == o || "symbol" == o || "boolean" == o || null == e || U(e)) return !0;
                return r.test(e) || !n.test(e) || null != t && e in Object(t)
            }(t, e) ? [t] : R(o = t) ? o : L(o)).length; null != e && i < u;) e = e[k(t[i++])];
            return i && i == u ? e : void 0
        }

        function S(e) {
            return !(!P(e) || (t = e, h && h in t)) && (function (e) {
                var t = P(e) ? D.call(e) : "";
                return "[object Function]" == t || "[object GeneratorFunction]" == t
            }(e) || function (e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString) try {
                    t = !!(e + "")
                } catch (e) {
                }
                return t
            }(e) ? y : a).test(function (e) {
                if (null != e) {
                    try {
                        return g.call(e)
                    } catch (e) {
                    }
                    try {
                        return e + ""
                    } catch (e) {
                    }
                }
                return ""
            }(e));
            var t
        }

        function N(e, t) {
            var n, r, o = e.__data__;
            return ("string" == (r = typeof (n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map
        }

        function O(e, t) {
            var n = function (e, t) {
                return null == e ? void 0 : e[t]
            }(e, t);
            return S(n) ? n : void 0
        }

        B.prototype.clear = function () {
            this.__data__ = x ? x(null) : {}
        }, B.prototype.delete = function (e) {
            return this.has(e) && delete this.__data__[e]
        }, B.prototype.get = function (e) {
            var t = this.__data__;
            if (x) {
                var n = t[e];
                return "__lodash_hash_undefined__" === n ? void 0 : n
            }
            return v.call(t, e) ? t[e] : void 0
        }, B.prototype.has = function (e) {
            var t = this.__data__;
            return x ? void 0 !== t[e] : v.call(t, e)
        }, B.prototype.set = function (e, t) {
            return this.__data__[e] = x && void 0 === t ? "__lodash_hash_undefined__" : t, this
        }, F.prototype.clear = function () {
            this.__data__ = []
        }, F.prototype.delete = function (e) {
            var t = this.__data__, n = I(t, e);
            return !(n < 0) && (n == t.length - 1 ? t.pop() : C.call(t, n, 1), !0)
        }, F.prototype.get = function (e) {
            var t = this.__data__, n = I(t, e);
            return n < 0 ? void 0 : t[n][1]
        }, F.prototype.has = function (e) {
            return I(this.__data__, e) > -1
        }, F.prototype.set = function (e, t) {
            var n = this.__data__, r = I(n, e);
            return r < 0 ? n.push([e, t]) : n[r][1] = t, this
        }, M.prototype.clear = function () {
            this.__data__ = {hash: new B, map: new (b || F), string: new B}
        }, M.prototype.delete = function (e) {
            return N(this, e).delete(e)
        }, M.prototype.get = function (e) {
            return N(this, e).get(e)
        }, M.prototype.has = function (e) {
            return N(this, e).has(e)
        }, M.prototype.set = function (e, t) {
            return N(this, e).set(e, t), this
        };
        var L = j((function (e) {
            var t;
            e = null == (t = e) ? "" : function (e) {
                if ("string" == typeof e) return e;
                if (U(e)) return T ? T.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -1 / 0 ? "-0" : t
            }(t);
            var n = [];
            return o.test(e) && n.push(""), e.replace(i, (function (e, t, r, o) {
                n.push(r ? o.replace(u, "$1") : t || e)
            })), n
        }));

        function k(e) {
            if ("string" == typeof e || U(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t
        }

        function j(e, t) {
            if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
            var n = function () {
                var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache;
                if (i.has(o)) return i.get(o);
                var u = e.apply(this, r);
                return n.cache = i.set(o, u), u
            };
            return n.cache = new (j.Cache || M), n
        }

        j.Cache = M;
        var R = Array.isArray;

        function P(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function U(e) {
            return "symbol" == typeof e || function (e) {
                return !!e && "object" == typeof e
            }(e) && "[object Symbol]" == D.call(e)
        }

        e.exports = function (e, t, n) {
            var r = null == e ? void 0 : _(e, t);
            return void 0 === r ? n : r
        }
    }).call(this, n(10))
}, function (e, t, n) {
    "use strict";
    e.exports = {
        ach: {
            name: "Acholi",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n > 1)",
            pluralsFunc: function (e) {
                return e > 1
            }
        },
        af: {
            name: "Afrikaans",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        ak: {
            name: "Akan",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n > 1)",
            pluralsFunc: function (e) {
                return e > 1
            }
        },
        am: {
            name: "Amharic",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n > 1)",
            pluralsFunc: function (e) {
                return e > 1
            }
        },
        an: {
            name: "Aragonese",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        ar: {
            name: "Arabic",
            examples: [{plural: 0, sample: 0}, {plural: 1, sample: 1}, {plural: 2, sample: 2}, {
                plural: 3,
                sample: 3
            }, {plural: 4, sample: 11}, {plural: 5, sample: 100}],
            nplurals: 6,
            pluralsText: "nplurals = 6; plural = (n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5)",
            pluralsFunc: function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            }
        },
        arn: {
            name: "Mapudungun",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n > 1)",
            pluralsFunc: function (e) {
                return e > 1
            }
        },
        ast: {
            name: "Asturian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        ay: {
            name: "Aymará",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        az: {
            name: "Azerbaijani",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        be: {
            name: "Belarusian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}, {plural: 2, sample: 5}],
            nplurals: 3,
            pluralsText: "nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)",
            pluralsFunc: function (e) {
                return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
            }
        },
        bg: {
            name: "Bulgarian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        bn: {
            name: "Bengali",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        bo: {
            name: "Tibetan",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        br: {
            name: "Breton",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n > 1)",
            pluralsFunc: function (e) {
                return e > 1
            }
        },
        brx: {
            name: "Bodo",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        bs: {
            name: "Bosnian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}, {plural: 2, sample: 5}],
            nplurals: 3,
            pluralsText: "nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)",
            pluralsFunc: function (e) {
                return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
            }
        },
        ca: {
            name: "Catalan",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        cgg: {
            name: "Chiga",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        cs: {
            name: "Czech",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}, {plural: 2, sample: 5}],
            nplurals: 3,
            pluralsText: "nplurals = 3; plural = (n === 1 ? 0 : (n >= 2 && n <= 4) ? 1 : 2)",
            pluralsFunc: function (e) {
                return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2
            }
        },
        csb: {
            name: "Kashubian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}, {plural: 2, sample: 5}],
            nplurals: 3,
            pluralsText: "nplurals = 3; plural = (n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)",
            pluralsFunc: function (e) {
                return 1 === e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
            }
        },
        cy: {
            name: "Welsh",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}, {plural: 2, sample: 3}, {plural: 3, sample: 8}],
            nplurals: 4,
            pluralsText: "nplurals = 4; plural = (n === 1 ? 0 : n === 2 ? 1 : (n !== 8 && n !== 11) ? 2 : 3)",
            pluralsFunc: function (e) {
                return 1 === e ? 0 : 2 === e ? 1 : 8 !== e && 11 !== e ? 2 : 3
            }
        },
        da: {
            name: "Danish",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        de: {
            name: "German",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        doi: {
            name: "Dogri",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        dz: {
            name: "Dzongkha",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        el: {
            name: "Greek",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        en: {
            name: "English",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        eo: {
            name: "Esperanto",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        es: {
            name: "Spanish",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        et: {
            name: "Estonian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        eu: {
            name: "Basque",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        fa: {
            name: "Persian",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        ff: {
            name: "Fulah",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        fi: {
            name: "Finnish",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        fil: {
            name: "Filipino",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n > 1)",
            pluralsFunc: function (e) {
                return e > 1
            }
        },
        fo: {
            name: "Faroese",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        fr: {
            name: "French",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n > 1)",
            pluralsFunc: function (e) {
                return e > 1
            }
        },
        fur: {
            name: "Friulian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        fy: {
            name: "Frisian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        ga: {
            name: "Irish",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}, {plural: 2, sample: 3}, {
                plural: 3,
                sample: 7
            }, {plural: 4, sample: 11}],
            nplurals: 5,
            pluralsText: "nplurals = 5; plural = (n === 1 ? 0 : n === 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4)",
            pluralsFunc: function (e) {
                return 1 === e ? 0 : 2 === e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4
            }
        },
        gd: {
            name: "Scottish Gaelic",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}, {plural: 2, sample: 3}, {plural: 3, sample: 20}],
            nplurals: 4,
            pluralsText: "nplurals = 4; plural = ((n === 1 || n === 11) ? 0 : (n === 2 || n === 12) ? 1 : (n > 2 && n < 20) ? 2 : 3)",
            pluralsFunc: function (e) {
                return 1 === e || 11 === e ? 0 : 2 === e || 12 === e ? 1 : e > 2 && e < 20 ? 2 : 3
            }
        },
        gl: {
            name: "Galician",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        gu: {
            name: "Gujarati",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        gun: {
            name: "Gun",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n > 1)",
            pluralsFunc: function (e) {
                return e > 1
            }
        },
        ha: {
            name: "Hausa",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        he: {
            name: "Hebrew",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        hi: {
            name: "Hindi",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        hne: {
            name: "Chhattisgarhi",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        hr: {
            name: "Croatian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}, {plural: 2, sample: 5}],
            nplurals: 3,
            pluralsText: "nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)",
            pluralsFunc: function (e) {
                return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
            }
        },
        hu: {
            name: "Hungarian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        hy: {
            name: "Armenian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        id: {
            name: "Indonesian",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        is: {
            name: "Icelandic",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n % 10 !== 1 || n % 100 === 11)",
            pluralsFunc: function (e) {
                return e % 10 != 1 || e % 100 == 11
            }
        },
        it: {
            name: "Italian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        ja: {
            name: "Japanese",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        jbo: {
            name: "Lojban",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        jv: {
            name: "Javanese",
            examples: [{plural: 0, sample: 0}, {plural: 1, sample: 1}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 0)",
            pluralsFunc: function (e) {
                return 0 !== e
            }
        },
        ka: {
            name: "Georgian",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        kk: {
            name: "Kazakh",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        km: {
            name: "Khmer",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        kn: {
            name: "Kannada",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        ko: {
            name: "Korean",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        ku: {
            name: "Kurdish",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        kw: {
            name: "Cornish",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}, {plural: 2, sample: 3}, {plural: 3, sample: 4}],
            nplurals: 4,
            pluralsText: "nplurals = 4; plural = (n === 1 ? 0 : n === 2 ? 1 : n === 3 ? 2 : 3)",
            pluralsFunc: function (e) {
                return 1 === e ? 0 : 2 === e ? 1 : 3 === e ? 2 : 3
            }
        },
        ky: {
            name: "Kyrgyz",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        lb: {
            name: "Letzeburgesch",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        ln: {
            name: "Lingala",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n > 1)",
            pluralsFunc: function (e) {
                return e > 1
            }
        },
        lo: {
            name: "Lao",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        lt: {
            name: "Lithuanian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}, {plural: 2, sample: 10}],
            nplurals: 3,
            pluralsText: "nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)",
            pluralsFunc: function (e) {
                return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
            }
        },
        lv: {
            name: "Latvian",
            examples: [{plural: 2, sample: 0}, {plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 3,
            pluralsText: "nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n !== 0 ? 1 : 2)",
            pluralsFunc: function (e) {
                return e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2
            }
        },
        mai: {
            name: "Maithili",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        mfe: {
            name: "Mauritian Creole",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n > 1)",
            pluralsFunc: function (e) {
                return e > 1
            }
        },
        mg: {
            name: "Malagasy",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n > 1)",
            pluralsFunc: function (e) {
                return e > 1
            }
        },
        mi: {
            name: "Maori",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n > 1)",
            pluralsFunc: function (e) {
                return e > 1
            }
        },
        mk: {
            name: "Macedonian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n === 1 || n % 10 === 1 ? 0 : 1)",
            pluralsFunc: function (e) {
                return 1 === e || e % 10 == 1 ? 0 : 1
            }
        },
        ml: {
            name: "Malayalam",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        mn: {
            name: "Mongolian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        mni: {
            name: "Manipuri",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        mnk: {
            name: "Mandinka",
            examples: [{plural: 0, sample: 0}, {plural: 1, sample: 1}, {plural: 2, sample: 2}],
            nplurals: 3,
            pluralsText: "nplurals = 3; plural = (n === 0 ? 0 : n === 1 ? 1 : 2)",
            pluralsFunc: function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2
            }
        },
        mr: {
            name: "Marathi",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        ms: {
            name: "Malay",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        mt: {
            name: "Maltese",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}, {plural: 2, sample: 11}, {
                plural: 3,
                sample: 20
            }],
            nplurals: 4,
            pluralsText: "nplurals = 4; plural = (n === 1 ? 0 : n === 0 || ( n % 100 > 1 && n % 100 < 11) ? 1 : (n % 100 > 10 && n % 100 < 20 ) ? 2 : 3)",
            pluralsFunc: function (e) {
                return 1 === e ? 0 : 0 === e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3
            }
        },
        my: {
            name: "Burmese",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        nah: {
            name: "Nahuatl",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        nap: {
            name: "Neapolitan",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        nb: {
            name: "Norwegian Bokmal",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        ne: {
            name: "Nepali",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        nl: {
            name: "Dutch",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        nn: {
            name: "Norwegian Nynorsk",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        no: {
            name: "Norwegian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        nso: {
            name: "Northern Sotho",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        oc: {
            name: "Occitan",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n > 1)",
            pluralsFunc: function (e) {
                return e > 1
            }
        },
        or: {
            name: "Oriya",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        pa: {
            name: "Punjabi",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        pap: {
            name: "Papiamento",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        pl: {
            name: "Polish",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}, {plural: 2, sample: 5}],
            nplurals: 3,
            pluralsText: "nplurals = 3; plural = (n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)",
            pluralsFunc: function (e) {
                return 1 === e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
            }
        },
        pms: {
            name: "Piemontese",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        ps: {
            name: "Pashto",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        pt: {
            name: "Portuguese",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        rm: {
            name: "Romansh",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        ro: {
            name: "Romanian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}, {plural: 2, sample: 20}],
            nplurals: 3,
            pluralsText: "nplurals = 3; plural = (n === 1 ? 0 : (n === 0 || (n % 100 > 0 && n % 100 < 20)) ? 1 : 2)",
            pluralsFunc: function (e) {
                return 1 === e ? 0 : 0 === e || e % 100 > 0 && e % 100 < 20 ? 1 : 2
            }
        },
        ru: {
            name: "Russian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}, {plural: 2, sample: 5}],
            nplurals: 3,
            pluralsText: "nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)",
            pluralsFunc: function (e) {
                return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
            }
        },
        rw: {
            name: "Kinyarwanda",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        sah: {
            name: "Yakut",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        sat: {
            name: "Santali",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        sco: {
            name: "Scots",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        sd: {
            name: "Sindhi",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        se: {
            name: "Northern Sami",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        si: {
            name: "Sinhala",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        sk: {
            name: "Slovak",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}, {plural: 2, sample: 5}],
            nplurals: 3,
            pluralsText: "nplurals = 3; plural = (n === 1 ? 0 : (n >= 2 && n <= 4) ? 1 : 2)",
            pluralsFunc: function (e) {
                return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2
            }
        },
        sl: {
            name: "Slovenian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}, {plural: 2, sample: 3}, {plural: 3, sample: 5}],
            nplurals: 4,
            pluralsText: "nplurals = 4; plural = (n % 100 === 1 ? 0 : n % 100 === 2 ? 1 : n % 100 === 3 || n % 100 === 4 ? 2 : 3)",
            pluralsFunc: function (e) {
                return e % 100 == 1 ? 0 : e % 100 == 2 ? 1 : e % 100 == 3 || e % 100 == 4 ? 2 : 3
            }
        },
        so: {
            name: "Somali",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        son: {
            name: "Songhay",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        sq: {
            name: "Albanian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        sr: {
            name: "Serbian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}, {plural: 2, sample: 5}],
            nplurals: 3,
            pluralsText: "nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)",
            pluralsFunc: function (e) {
                return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
            }
        },
        su: {
            name: "Sundanese",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        sv: {
            name: "Swedish",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        sw: {
            name: "Swahili",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        ta: {
            name: "Tamil",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        te: {
            name: "Telugu",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        tg: {
            name: "Tajik",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n > 1)",
            pluralsFunc: function (e) {
                return e > 1
            }
        },
        th: {
            name: "Thai",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        ti: {
            name: "Tigrinya",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n > 1)",
            pluralsFunc: function (e) {
                return e > 1
            }
        },
        tk: {
            name: "Turkmen",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        tr: {
            name: "Turkish",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n > 1)",
            pluralsFunc: function (e) {
                return e > 1
            }
        },
        tt: {
            name: "Tatar",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        ug: {
            name: "Uyghur",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        uk: {
            name: "Ukrainian",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}, {plural: 2, sample: 5}],
            nplurals: 3,
            pluralsText: "nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)",
            pluralsFunc: function (e) {
                return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
            }
        },
        ur: {
            name: "Urdu",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        uz: {
            name: "Uzbek",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n > 1)",
            pluralsFunc: function (e) {
                return e > 1
            }
        },
        vi: {
            name: "Vietnamese",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        wa: {
            name: "Walloon",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n > 1)",
            pluralsFunc: function (e) {
                return e > 1
            }
        },
        wo: {
            name: "Wolof",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        },
        yo: {
            name: "Yoruba",
            examples: [{plural: 0, sample: 1}, {plural: 1, sample: 2}],
            nplurals: 2,
            pluralsText: "nplurals = 2; plural = (n !== 1)",
            pluralsFunc: function (e) {
                return 1 !== e
            }
        },
        zh: {
            name: "Chinese",
            examples: [{plural: 0, sample: 1}],
            nplurals: 1,
            pluralsText: "nplurals = 1; plural = 0",
            pluralsFunc: function () {
                return 0
            }
        }
    }
}, function (e, t, n) {
    var r = n(25), o = "[" + n(136) + "]", i = RegExp("^" + o + o + "*"), u = RegExp(o + o + "*$"), a = function (e) {
        return function (t) {
            var n = String(r(t));
            return 1 & e && (n = n.replace(i, "")), 2 & e && (n = n.replace(u, "")), n
        }
    };
    e.exports = {start: a(1), end: a(2), trim: a(3)}
}, function (e, t, n) {
    var r = n(1), o = n(136);
    e.exports = function (e) {
        return r((function () {
            return !!o[e]() || "​᠎" != "​᠎"[e]() || o[e].name !== e
        }))
    }
}, function (e, t, n) {
    (function (e, t) {
        !function (e, n) {
            "use strict";
            if (!e.setImmediate) {
                var r, o, i, u, a, s = 1, l = {}, c = !1, A = e.document,
                    p = Object.getPrototypeOf && Object.getPrototypeOf(e);
                p = p && p.setTimeout ? p : e, "[object process]" === {}.toString.call(e.process) ? r = function (e) {
                    t.nextTick((function () {
                        d(e)
                    }))
                } : !function () {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0, n = e.onmessage;
                        return e.onmessage = function () {
                            t = !1
                        }, e.postMessage("", "*"), e.onmessage = n, t
                    }
                }() ? e.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function (e) {
                    d(e.data)
                }, r = function (e) {
                    i.port2.postMessage(e)
                }) : A && "onreadystatechange" in A.createElement("script") ? (o = A.documentElement, r = function (e) {
                    var t = A.createElement("script");
                    t.onreadystatechange = function () {
                        d(e), t.onreadystatechange = null, o.removeChild(t), t = null
                    }, o.appendChild(t)
                }) : r = function (e) {
                    setTimeout(d, 0, e)
                } : (u = "setImmediate$" + Math.random() + "$", a = function (t) {
                    t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(u) && d(+t.data.slice(u.length))
                }, e.addEventListener ? e.addEventListener("message", a, !1) : e.attachEvent("onmessage", a), r = function (t) {
                    e.postMessage(u + t, "*")
                }), p.setImmediate = function (e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                    var o = {callback: e, args: t};
                    return l[s] = o, r(s), s++
                }, p.clearImmediate = f
            }

            function f(e) {
                delete l[e]
            }

            function d(e) {
                if (c) setTimeout(d, 0, e); else {
                    var t = l[e];
                    if (t) {
                        c = !0;
                        try {
                            !function (e) {
                                var t = e.callback, n = e.args;
                                switch (n.length) {
                                    case 0:
                                        t();
                                        break;
                                    case 1:
                                        t(n[0]);
                                        break;
                                    case 2:
                                        t(n[0], n[1]);
                                        break;
                                    case 3:
                                        t(n[0], n[1], n[2]);
                                        break;
                                    default:
                                        t.apply(void 0, n)
                                }
                            }(t)
                        } finally {
                            f(e), c = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }).call(this, n(10), n(75))
}, function (e, t, n) {
    "use strict";
    var r = n(45);
    n.n(r).a
}, function (e, t, n) {
    (t = n(147)(!1)).push([e.i, "#app-content[data-v-60bf5aa1]{display:flex;flex-grow:1;flex-direction:column;align-content:space-between}.app-navigation__photos[data-v-60bf5aa1] .app-navigation-entry-icon.icon-photos{background-size:20px}\n", ""]), e.exports = t
}, function (e, n, r) {
    "use strict";
    r.r(n);
    var o = r(18), i = r(77), u = r(138), a = r(46), s = r(0), l = r(139), c = r.n(l), A = r(140), p = r.n(A),
        f = r(141), d = r.n(f), m = r(142), h = r.n(m), g = r(144), v = r.n(g), D = r(145), y = r.n(D), E = r(146),
        C = r.n(E), b = {
            name: "Photos",
            components: {Content: c.a, AppContent: p.a, AppNavigation: d.a, AppNavigationItem: h.a},
            data: function () {
                return {loading: !0, svgplaceholder: v.a, imgplaceholder: y.a, videoplaceholder: C.a}
            }
        }, x = (r(231), r(76)), w = Object(x.a)(b, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("Content", {attrs: {"app-name": "photos"}}, [n("AppNavigation", [n("AppNavigationItem", {
                staticClass: "app-navigation__photos",
                attrs: {to: {name: "root"}, title: e.t("photos", "Your photos"), icon: "icon-yourphotos", exact: ""}
            }), e._v(" "), n("AppNavigationItem", {
                attrs: {
                    to: "/favorites",
                    title: e.t("photos", "Favorites"),
                    icon: "icon-favorite"
                }
            }), e._v(" "), n("AppNavigationItem", {
                attrs: {
                    to: {name: "albums"},
                    title: e.t("photos", "Your albums"),
                    icon: "icon-files-dark"
                }
            }), e._v(" "), n("AppNavigationItem", {
                attrs: {
                    to: {name: "shared"},
                    title: e.t("photos", "Shared albums"),
                    icon: "icon-share"
                }
            }), e._v(" "), n("AppNavigationItem", {
                attrs: {
                    to: {name: "tags"},
                    title: e.t("photos", "Tagged photos"),
                    icon: "icon-tag"
                }
            }), e._v(" "), n("AppNavigationItem", {
                attrs: {
                    to: {name: "maps"},
                    title: e.t("photos", "Locations"),
                    icon: "icon-address"
                }
            })], 1), e._v(" "), n("AppContent", {class: {"icon-loading": e.loading}}, [n("router-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.loading,
                    expression: "!loading"
                }], attrs: {loading: e.loading}, on: {
                    "update:loading": function (t) {
                        e.loading = t
                    }
                }
            }), e._v(" "), n("span", {
                staticClass: "hidden-visually",
                attrs: {role: "none"},
                domProps: {innerHTML: e._s(e.svgplaceholder)}
            }), e._v(" "), n("span", {
                staticClass: "hidden-visually",
                attrs: {role: "none"},
                domProps: {innerHTML: e._s(e.imgplaceholder)}
            }), e._v(" "), n("span", {
                staticClass: "hidden-visually",
                attrs: {role: "none"},
                domProps: {innerHTML: e._s(e.videoplaceholder)}
            })], 1)], 1)
        }), [], !1, null, "60bf5aa1", null).exports;

    function T(e) {
        return Object.prototype.toString.call(e).indexOf("Error") > -1
    }

    function B(e, t) {
        return t instanceof e || t && (t.name === e.name || t._name === e._name)
    }

    function F(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    var M = {
        name: "RouterView", functional: !0, props: {name: {type: String, default: "default"}}, render: function (e, t) {
            var n = t.props, r = t.children, o = t.parent, i = t.data;
            i.routerView = !0;
            for (var u = o.$createElement, a = n.name, s = o.$route, l = o._routerViewCache || (o._routerViewCache = {}), c = 0, A = !1; o && o._routerRoot !== o;) {
                var p = o.$vnode ? o.$vnode.data : {};
                p.routerView && c++, p.keepAlive && o._directInactive && o._inactive && (A = !0), o = o.$parent
            }
            if (i.routerViewDepth = c, A) {
                var f = l[a], d = f && f.component;
                return d ? (f.configProps && I(d, i, f.route, f.configProps), u(d, i, r)) : u()
            }
            var m = s.matched[c], h = m && m.components[a];
            if (!m || !h) return l[a] = null, u();
            l[a] = {component: h}, i.registerRouteInstance = function (e, t) {
                var n = m.instances[a];
                (t && n !== e || !t && n === e) && (m.instances[a] = t)
            }, (i.hook || (i.hook = {})).prepatch = function (e, t) {
                m.instances[a] = t.componentInstance
            }, i.hook.init = function (e) {
                e.data.keepAlive && e.componentInstance && e.componentInstance !== m.instances[a] && (m.instances[a] = e.componentInstance)
            };
            var g = m.props && m.props[a];
            return g && (F(l[a], {route: s, configProps: g}), I(h, i, s, g)), u(h, i, r)
        }
    };

    function I(e, t, n, r) {
        var o = t.props = function (e, t) {
            switch (typeof t) {
                case"undefined":
                    return;
                case"object":
                    return t;
                case"function":
                    return t(e);
                case"boolean":
                    return t ? e.params : void 0;
                default:
                    0
            }
        }(n, r);
        if (o) {
            o = t.props = F({}, o);
            var i = t.attrs = t.attrs || {};
            for (var u in o) e.props && u in e.props || (i[u] = o[u], delete o[u])
        }
    }

    var _ = /[!'()*]/g, S = function (e) {
        return "%" + e.charCodeAt(0).toString(16)
    }, N = /%2C/g, O = function (e) {
        return encodeURIComponent(e).replace(_, S).replace(N, ",")
    }, L = decodeURIComponent;

    function k(e) {
        var t = {};
        return (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach((function (e) {
            var n = e.replace(/\+/g, " ").split("="), r = L(n.shift()), o = n.length > 0 ? L(n.join("=")) : null;
            void 0 === t[r] ? t[r] = o : Array.isArray(t[r]) ? t[r].push(o) : t[r] = [t[r], o]
        })), t) : t
    }

    function j(e) {
        var t = e ? Object.keys(e).map((function (t) {
            var n = e[t];
            if (void 0 === n) return "";
            if (null === n) return O(t);
            if (Array.isArray(n)) {
                var r = [];
                return n.forEach((function (e) {
                    void 0 !== e && (null === e ? r.push(O(t)) : r.push(O(t) + "=" + O(e)))
                })), r.join("&")
            }
            return O(t) + "=" + O(n)
        })).filter((function (e) {
            return e.length > 0
        })).join("&") : null;
        return t ? "?" + t : ""
    }

    var R = /\/?$/;

    function P(e, t, n, r) {
        var o = r && r.options.stringifyQuery, i = t.query || {};
        try {
            i = U(i)
        } catch (e) {
        }
        var u = {
            name: t.name || e && e.name,
            meta: e && e.meta || {},
            path: t.path || "/",
            hash: t.hash || "",
            query: i,
            params: t.params || {},
            fullPath: z(t, o),
            matched: e ? G(e) : []
        };
        return n && (u.redirectedFrom = z(n, o)), Object.freeze(u)
    }

    function U(e) {
        if (Array.isArray(e)) return e.map(U);
        if (e && "object" == typeof e) {
            var t = {};
            for (var n in e) t[n] = U(e[n]);
            return t
        }
        return e
    }

    var Q = P(null, {path: "/"});

    function G(e) {
        for (var t = []; e;) t.unshift(e), e = e.parent;
        return t
    }

    function z(e, t) {
        var n = e.path, r = e.query;
        void 0 === r && (r = {});
        var o = e.hash;
        return void 0 === o && (o = ""), (n || "/") + (t || j)(r) + o
    }

    function Y(e, t) {
        return t === Q ? e === t : !!t && (e.path && t.path ? e.path.replace(R, "") === t.path.replace(R, "") && e.hash === t.hash && $(e.query, t.query) : !(!e.name || !t.name) && (e.name === t.name && e.hash === t.hash && $(e.query, t.query) && $(e.params, t.params)))
    }

    function $(e, t) {
        if (void 0 === e && (e = {}), void 0 === t && (t = {}), !e || !t) return e === t;
        var n = Object.keys(e), r = Object.keys(t);
        return n.length === r.length && n.every((function (n) {
            var r = e[n], o = t[n];
            return "object" == typeof r && "object" == typeof o ? $(r, o) : String(r) === String(o)
        }))
    }

    function Z(e, t, n) {
        var r = e.charAt(0);
        if ("/" === r) return e;
        if ("?" === r || "#" === r) return t + e;
        var o = t.split("/");
        n && o[o.length - 1] || o.pop();
        for (var i = e.replace(/^\//, "").split("/"), u = 0; u < i.length; u++) {
            var a = i[u];
            ".." === a ? o.pop() : "." !== a && o.push(a)
        }
        return "" !== o[0] && o.unshift(""), o.join("/")
    }

    function H(e) {
        return e.replace(/\/\//g, "/")
    }

    var W = Array.isArray || function (e) {
            return "[object Array]" == Object.prototype.toString.call(e)
        }, V = le, X = te, J = function (e, t) {
            return re(te(e, t))
        }, K = re, q = se,
        ee = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

    function te(e, t) {
        for (var n, r = [], o = 0, i = 0, u = "", a = t && t.delimiter || "/"; null != (n = ee.exec(e));) {
            var s = n[0], l = n[1], c = n.index;
            if (u += e.slice(i, c), i = c + s.length, l) u += l[1]; else {
                var A = e[i], p = n[2], f = n[3], d = n[4], m = n[5], h = n[6], g = n[7];
                u && (r.push(u), u = "");
                var v = null != p && null != A && A !== p, D = "+" === h || "*" === h, y = "?" === h || "*" === h,
                    E = n[2] || a, C = d || m;
                r.push({
                    name: f || o++,
                    prefix: p || "",
                    delimiter: E,
                    optional: y,
                    repeat: D,
                    partial: v,
                    asterisk: !!g,
                    pattern: C ? ie(C) : g ? ".*" : "[^" + oe(E) + "]+?"
                })
            }
        }
        return i < e.length && (u += e.substr(i)), u && r.push(u), r
    }

    function ne(e) {
        return encodeURI(e).replace(/[\/?#]/g, (function (e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        }))
    }

    function re(e) {
        for (var t = new Array(e.length), n = 0; n < e.length; n++) "object" == typeof e[n] && (t[n] = new RegExp("^(?:" + e[n].pattern + ")$"));
        return function (n, r) {
            for (var o = "", i = n || {}, u = (r || {}).pretty ? ne : encodeURIComponent, a = 0; a < e.length; a++) {
                var s = e[a];
                if ("string" != typeof s) {
                    var l, c = i[s.name];
                    if (null == c) {
                        if (s.optional) {
                            s.partial && (o += s.prefix);
                            continue
                        }
                        throw new TypeError('Expected "' + s.name + '" to be defined')
                    }
                    if (W(c)) {
                        if (!s.repeat) throw new TypeError('Expected "' + s.name + '" to not repeat, but received `' + JSON.stringify(c) + "`");
                        if (0 === c.length) {
                            if (s.optional) continue;
                            throw new TypeError('Expected "' + s.name + '" to not be empty')
                        }
                        for (var A = 0; A < c.length; A++) {
                            if (l = u(c[A]), !t[a].test(l)) throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '", but received `' + JSON.stringify(l) + "`");
                            o += (0 === A ? s.prefix : s.delimiter) + l
                        }
                    } else {
                        if (l = s.asterisk ? encodeURI(c).replace(/[?#]/g, (function (e) {
                            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                        })) : u(c), !t[a].test(l)) throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but received "' + l + '"');
                        o += s.prefix + l
                    }
                } else o += s
            }
            return o
        }
    }

    function oe(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
    }

    function ie(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1")
    }

    function ue(e, t) {
        return e.keys = t, e
    }

    function ae(e) {
        return e.sensitive ? "" : "i"
    }

    function se(e, t, n) {
        W(t) || (n = t || n, t = []);
        for (var r = (n = n || {}).strict, o = !1 !== n.end, i = "", u = 0; u < e.length; u++) {
            var a = e[u];
            if ("string" == typeof a) i += oe(a); else {
                var s = oe(a.prefix), l = "(?:" + a.pattern + ")";
                t.push(a), a.repeat && (l += "(?:" + s + l + ")*"), i += l = a.optional ? a.partial ? s + "(" + l + ")?" : "(?:" + s + "(" + l + "))?" : s + "(" + l + ")"
            }
        }
        var c = oe(n.delimiter || "/"), A = i.slice(-c.length) === c;
        return r || (i = (A ? i.slice(0, -c.length) : i) + "(?:" + c + "(?=$))?"), i += o ? "$" : r && A ? "" : "(?=" + c + "|$)", ue(new RegExp("^" + i, ae(n)), t)
    }

    function le(e, t, n) {
        return W(t) || (n = t || n, t = []), n = n || {}, e instanceof RegExp ? function (e, t) {
            var n = e.source.match(/\((?!\?)/g);
            if (n) for (var r = 0; r < n.length; r++) t.push({
                name: r,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                partial: !1,
                asterisk: !1,
                pattern: null
            });
            return ue(e, t)
        }(e, t) : W(e) ? function (e, t, n) {
            for (var r = [], o = 0; o < e.length; o++) r.push(le(e[o], t, n).source);
            return ue(new RegExp("(?:" + r.join("|") + ")", ae(n)), t)
        }(e, t, n) : function (e, t, n) {
            return se(te(e, n), t, n)
        }(e, t, n)
    }

    V.parse = X, V.compile = J, V.tokensToFunction = K, V.tokensToRegExp = q;
    var ce = Object.create(null);

    function Ae(e, t, n) {
        t = t || {};
        try {
            var r = ce[e] || (ce[e] = V.compile(e));
            return "string" == typeof t.pathMatch && (t[0] = t.pathMatch), r(t, {pretty: !0})
        } catch (e) {
            return ""
        } finally {
            delete t[0]
        }
    }

    function pe(e, t, n, r) {
        var o = "string" == typeof e ? {path: e} : e;
        if (o._normalized) return o;
        if (o.name) {
            var i = (o = F({}, e)).params;
            return i && "object" == typeof i && (o.params = F({}, i)), o
        }
        if (!o.path && o.params && t) {
            (o = F({}, o))._normalized = !0;
            var u = F(F({}, t.params), o.params);
            if (t.name) o.name = t.name, o.params = u; else if (t.matched.length) {
                var a = t.matched[t.matched.length - 1].path;
                o.path = Ae(a, u, t.path)
            } else 0;
            return o
        }
        var s = function (e) {
            var t = "", n = "", r = e.indexOf("#");
            r >= 0 && (t = e.slice(r), e = e.slice(0, r));
            var o = e.indexOf("?");
            return o >= 0 && (n = e.slice(o + 1), e = e.slice(0, o)), {path: e, query: n, hash: t}
        }(o.path || ""), l = t && t.path || "/", c = s.path ? Z(s.path, l, n || o.append) : l, A = function (e, t, n) {
            void 0 === t && (t = {});
            var r, o = n || k;
            try {
                r = o(e || "")
            } catch (e) {
                r = {}
            }
            for (var i in t) r[i] = t[i];
            return r
        }(s.query, o.query, r && r.options.parseQuery), p = o.hash || s.hash;
        return p && "#" !== p.charAt(0) && (p = "#" + p), {_normalized: !0, path: c, query: A, hash: p}
    }

    var fe, de = function () {
    }, me = {
        name: "RouterLink",
        props: {
            to: {type: [String, Object], required: !0},
            tag: {type: String, default: "a"},
            exact: Boolean,
            append: Boolean,
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            event: {type: [String, Array], default: "click"}
        },
        render: function (e) {
            var t = this, n = this.$router, r = this.$route, o = n.resolve(this.to, r, this.append), i = o.location,
                u = o.route, a = o.href, s = {}, l = n.options.linkActiveClass, c = n.options.linkExactActiveClass,
                A = null == l ? "router-link-active" : l, p = null == c ? "router-link-exact-active" : c,
                f = null == this.activeClass ? A : this.activeClass,
                d = null == this.exactActiveClass ? p : this.exactActiveClass,
                m = u.redirectedFrom ? P(null, pe(u.redirectedFrom), null, n) : u;
            s[d] = Y(r, m), s[f] = this.exact ? s[d] : function (e, t) {
                return 0 === e.path.replace(R, "/").indexOf(t.path.replace(R, "/")) && (!t.hash || e.hash === t.hash) && function (e, t) {
                    for (var n in t) if (!(n in e)) return !1;
                    return !0
                }(e.query, t.query)
            }(r, m);
            var h = function (e) {
                he(e) && (t.replace ? n.replace(i, de) : n.push(i, de))
            }, g = {click: he};
            Array.isArray(this.event) ? this.event.forEach((function (e) {
                g[e] = h
            })) : g[this.event] = h;
            var v = {class: s},
                D = !this.$scopedSlots.$hasNormal && this.$scopedSlots.default && this.$scopedSlots.default({
                    href: a,
                    route: u,
                    navigate: h,
                    isActive: s[f],
                    isExactActive: s[d]
                });
            if (D) {
                if (1 === D.length) return D[0];
                if (D.length > 1 || !D.length) return 0 === D.length ? e() : e("span", {}, D)
            }
            if ("a" === this.tag) v.on = g, v.attrs = {href: a}; else {
                var y = function e(t) {
                    var n;
                    if (t) for (var r = 0; r < t.length; r++) {
                        if ("a" === (n = t[r]).tag) return n;
                        if (n.children && (n = e(n.children))) return n
                    }
                }(this.$slots.default);
                if (y) {
                    y.isStatic = !1;
                    var E = y.data = F({}, y.data);
                    for (var C in E.on = E.on || {}, E.on) {
                        var b = E.on[C];
                        C in g && (E.on[C] = Array.isArray(b) ? b : [b])
                    }
                    for (var x in g) x in E.on ? E.on[x].push(g[x]) : E.on[x] = h;
                    (y.data.attrs = F({}, y.data.attrs)).href = a
                } else v.on = g
            }
            return e(this.tag, v, this.$slots.default)
        }
    };

    function he(e) {
        if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.defaultPrevented || void 0 !== e.button && 0 !== e.button)) {
            if (e.currentTarget && e.currentTarget.getAttribute) {
                var t = e.currentTarget.getAttribute("target");
                if (/\b_blank\b/i.test(t)) return
            }
            return e.preventDefault && e.preventDefault(), !0
        }
    }

    var ge = "undefined" != typeof window;

    function ve(e, t, n, r) {
        var o = t || [], i = n || Object.create(null), u = r || Object.create(null);
        e.forEach((function (e) {
            !function e(t, n, r, o, i, u) {
                var a = o.path, s = o.name;
                0;
                var l = o.pathToRegexpOptions || {}, c = function (e, t, n) {
                    n || (e = e.replace(/\/$/, ""));
                    if ("/" === e[0]) return e;
                    if (null == t) return e;
                    return H(t.path + "/" + e)
                }(a, i, l.strict);
                "boolean" == typeof o.caseSensitive && (l.sensitive = o.caseSensitive);
                var A = {
                    path: c,
                    regex: De(c, l),
                    components: o.components || {default: o.component},
                    instances: {},
                    name: s,
                    parent: i,
                    matchAs: u,
                    redirect: o.redirect,
                    beforeEnter: o.beforeEnter,
                    meta: o.meta || {},
                    props: null == o.props ? {} : o.components ? o.props : {default: o.props}
                };
                o.children && o.children.forEach((function (o) {
                    var i = u ? H(u + "/" + o.path) : void 0;
                    e(t, n, r, o, A, i)
                }));
                n[A.path] || (t.push(A.path), n[A.path] = A);
                if (void 0 !== o.alias) for (var p = Array.isArray(o.alias) ? o.alias : [o.alias], f = 0; f < p.length; ++f) {
                    0;
                    var d = {path: p[f], children: o.children};
                    e(t, n, r, d, i, A.path || "/")
                }
                s && (r[s] || (r[s] = A))
            }(o, i, u, e)
        }));
        for (var a = 0, s = o.length; a < s; a++) "*" === o[a] && (o.push(o.splice(a, 1)[0]), s--, a--);
        return {pathList: o, pathMap: i, nameMap: u}
    }

    function De(e, t) {
        return V(e, [], t)
    }

    function ye(e, t) {
        var n = ve(e), r = n.pathList, o = n.pathMap, i = n.nameMap;

        function u(e, n, u) {
            var a = pe(e, n, !1, t), l = a.name;
            if (l) {
                var c = i[l];
                if (!c) return s(null, a);
                var A = c.regex.keys.filter((function (e) {
                    return !e.optional
                })).map((function (e) {
                    return e.name
                }));
                if ("object" != typeof a.params && (a.params = {}), n && "object" == typeof n.params) for (var p in n.params) !(p in a.params) && A.indexOf(p) > -1 && (a.params[p] = n.params[p]);
                return a.path = Ae(c.path, a.params), s(c, a, u)
            }
            if (a.path) {
                a.params = {};
                for (var f = 0; f < r.length; f++) {
                    var d = r[f], m = o[d];
                    if (Ee(m.regex, a.path, a.params)) return s(m, a, u)
                }
            }
            return s(null, a)
        }

        function a(e, n) {
            var r = e.redirect, o = "function" == typeof r ? r(P(e, n, null, t)) : r;
            if ("string" == typeof o && (o = {path: o}), !o || "object" != typeof o) return s(null, n);
            var a = o, l = a.name, c = a.path, A = n.query, p = n.hash, f = n.params;
            if (A = a.hasOwnProperty("query") ? a.query : A, p = a.hasOwnProperty("hash") ? a.hash : p, f = a.hasOwnProperty("params") ? a.params : f, l) {
                i[l];
                return u({_normalized: !0, name: l, query: A, hash: p, params: f}, void 0, n)
            }
            if (c) {
                var d = function (e, t) {
                    return Z(e, t.parent ? t.parent.path : "/", !0)
                }(c, e);
                return u({_normalized: !0, path: Ae(d, f), query: A, hash: p}, void 0, n)
            }
            return s(null, n)
        }

        function s(e, n, r) {
            return e && e.redirect ? a(e, r || n) : e && e.matchAs ? function (e, t, n) {
                var r = u({_normalized: !0, path: Ae(n, t.params)});
                if (r) {
                    var o = r.matched, i = o[o.length - 1];
                    return t.params = r.params, s(i, t)
                }
                return s(null, t)
            }(0, n, e.matchAs) : P(e, n, r, t)
        }

        return {
            match: u, addRoutes: function (e) {
                ve(e, r, o, i)
            }
        }
    }

    function Ee(e, t, n) {
        var r = t.match(e);
        if (!r) return !1;
        if (!n) return !0;
        for (var o = 1, i = r.length; o < i; ++o) {
            var u = e.keys[o - 1], a = "string" == typeof r[o] ? decodeURIComponent(r[o]) : r[o];
            u && (n[u.name || "pathMatch"] = a)
        }
        return !0
    }

    var Ce = ge && window.performance && window.performance.now ? window.performance : Date;

    function be() {
        return Ce.now().toFixed(3)
    }

    var xe = be();

    function we() {
        return xe
    }

    function Te(e) {
        return xe = e
    }

    var Be = Object.create(null);

    function Fe() {
        var e = window.location.protocol + "//" + window.location.host, t = window.location.href.replace(e, ""),
            n = F({}, window.history.state);
        n.key = we(), window.history.replaceState(n, "", t), window.addEventListener("popstate", (function (e) {
            Ie(), e.state && e.state.key && Te(e.state.key)
        }))
    }

    function Me(e, t, n, r) {
        if (e.app) {
            var o = e.options.scrollBehavior;
            o && e.app.$nextTick((function () {
                var i = function () {
                    var e = we();
                    if (e) return Be[e]
                }(), u = o.call(e, t, n, r ? i : null);
                u && ("function" == typeof u.then ? u.then((function (e) {
                    Le(e, i)
                })).catch((function (e) {
                    0
                })) : Le(u, i))
            }))
        }
    }

    function Ie() {
        var e = we();
        e && (Be[e] = {x: window.pageXOffset, y: window.pageYOffset})
    }

    function _e(e) {
        return Ne(e.x) || Ne(e.y)
    }

    function Se(e) {
        return {x: Ne(e.x) ? e.x : window.pageXOffset, y: Ne(e.y) ? e.y : window.pageYOffset}
    }

    function Ne(e) {
        return "number" == typeof e
    }

    var Oe = /^#\d/;

    function Le(e, t) {
        var n, r = "object" == typeof e;
        if (r && "string" == typeof e.selector) {
            var o = Oe.test(e.selector) ? document.getElementById(e.selector.slice(1)) : document.querySelector(e.selector);
            if (o) {
                var i = e.offset && "object" == typeof e.offset ? e.offset : {};
                t = function (e, t) {
                    var n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
                    return {x: r.left - n.left - t.x, y: r.top - n.top - t.y}
                }(o, i = {x: Ne((n = i).x) ? n.x : 0, y: Ne(n.y) ? n.y : 0})
            } else _e(e) && (t = Se(e))
        } else r && _e(e) && (t = Se(e));
        t && window.scrollTo(t.x, t.y)
    }

    var ke,
        je = ge && ((-1 === (ke = window.navigator.userAgent).indexOf("Android 2.") && -1 === ke.indexOf("Android 4.0") || -1 === ke.indexOf("Mobile Safari") || -1 !== ke.indexOf("Chrome") || -1 !== ke.indexOf("Windows Phone")) && window.history && "pushState" in window.history);

    function Re(e, t) {
        Ie();
        var n = window.history;
        try {
            if (t) {
                var r = F({}, n.state);
                r.key = we(), n.replaceState(r, "", e)
            } else n.pushState({key: Te(be())}, "", e)
        } catch (n) {
            window.location[t ? "replace" : "assign"](e)
        }
    }

    function Pe(e) {
        Re(e, !0)
    }

    function Ue(e, t, n) {
        var r = function (o) {
            o >= e.length ? n() : e[o] ? t(e[o], (function () {
                r(o + 1)
            })) : r(o + 1)
        };
        r(0)
    }

    function Qe(e) {
        return function (t, n, r) {
            var o = !1, i = 0, u = null;
            Ge(e, (function (e, t, n, a) {
                if ("function" == typeof e && void 0 === e.cid) {
                    o = !0, i++;
                    var s, l = $e((function (t) {
                        var o;
                        ((o = t).__esModule || Ye && "Module" === o[Symbol.toStringTag]) && (t = t.default), e.resolved = "function" == typeof t ? t : fe.extend(t), n.components[a] = t, --i <= 0 && r()
                    })), c = $e((function (e) {
                        var t = "Failed to resolve async component " + a + ": " + e;
                        u || (u = T(e) ? e : new Error(t), r(u))
                    }));
                    try {
                        s = e(l, c)
                    } catch (e) {
                        c(e)
                    }
                    if (s) if ("function" == typeof s.then) s.then(l, c); else {
                        var A = s.component;
                        A && "function" == typeof A.then && A.then(l, c)
                    }
                }
            })), o || r()
        }
    }

    function Ge(e, t) {
        return ze(e.map((function (e) {
            return Object.keys(e.components).map((function (n) {
                return t(e.components[n], e.instances[n], e, n)
            }))
        })))
    }

    function ze(e) {
        return Array.prototype.concat.apply([], e)
    }

    var Ye = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;

    function $e(e) {
        var t = !1;
        return function () {
            for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
            if (!t) return t = !0, e.apply(this, n)
        }
    }

    var Ze = function (e) {
        function t(t) {
            e.call(this), this.name = this._name = "NavigationDuplicated", this.message = 'Navigating to current location ("' + t.fullPath + '") is not allowed', Object.defineProperty(this, "stack", {
                value: (new e).stack,
                writable: !0,
                configurable: !0
            })
        }

        return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t
    }(Error);
    Ze._name = "NavigationDuplicated";
    var He = function (e, t) {
        this.router = e, this.base = function (e) {
            if (!e) if (ge) {
                var t = document.querySelector("base");
                e = (e = t && t.getAttribute("href") || "/").replace(/^https?:\/\/[^\/]+/, "")
            } else e = "/";
            "/" !== e.charAt(0) && (e = "/" + e);
            return e.replace(/\/$/, "")
        }(t), this.current = Q, this.pending = null, this.ready = !1, this.readyCbs = [], this.readyErrorCbs = [], this.errorCbs = []
    };

    function We(e, t, n, r) {
        var o = Ge(e, (function (e, r, o, i) {
            var u = function (e, t) {
                "function" != typeof e && (e = fe.extend(e));
                return e.options[t]
            }(e, t);
            if (u) return Array.isArray(u) ? u.map((function (e) {
                return n(e, r, o, i)
            })) : n(u, r, o, i)
        }));
        return ze(r ? o.reverse() : o)
    }

    function Ve(e, t) {
        if (t) return function () {
            return e.apply(t, arguments)
        }
    }

    He.prototype.listen = function (e) {
        this.cb = e
    }, He.prototype.onReady = function (e, t) {
        this.ready ? e() : (this.readyCbs.push(e), t && this.readyErrorCbs.push(t))
    }, He.prototype.onError = function (e) {
        this.errorCbs.push(e)
    }, He.prototype.transitionTo = function (e, t, n) {
        var r = this, o = this.router.match(e, this.current);
        this.confirmTransition(o, (function () {
            r.updateRoute(o), t && t(o), r.ensureURL(), r.ready || (r.ready = !0, r.readyCbs.forEach((function (e) {
                e(o)
            })))
        }), (function (e) {
            n && n(e), e && !r.ready && (r.ready = !0, r.readyErrorCbs.forEach((function (t) {
                t(e)
            })))
        }))
    }, He.prototype.confirmTransition = function (e, t, n) {
        var r = this, o = this.current, i = function (e) {
            !B(Ze, e) && T(e) && (r.errorCbs.length ? r.errorCbs.forEach((function (t) {
                t(e)
            })) : console.error(e)), n && n(e)
        };
        if (Y(e, o) && e.matched.length === o.matched.length) return this.ensureURL(), i(new Ze(e));
        var u = function (e, t) {
                var n, r = Math.max(e.length, t.length);
                for (n = 0; n < r && e[n] === t[n]; n++) ;
                return {updated: t.slice(0, n), activated: t.slice(n), deactivated: e.slice(n)}
            }(this.current.matched, e.matched), a = u.updated, s = u.deactivated, l = u.activated,
            c = [].concat(function (e) {
                return We(e, "beforeRouteLeave", Ve, !0)
            }(s), this.router.beforeHooks, function (e) {
                return We(e, "beforeRouteUpdate", Ve)
            }(a), l.map((function (e) {
                return e.beforeEnter
            })), Qe(l));
        this.pending = e;
        var A = function (t, n) {
            if (r.pending !== e) return i();
            try {
                t(e, o, (function (e) {
                    !1 === e || T(e) ? (r.ensureURL(!0), i(e)) : "string" == typeof e || "object" == typeof e && ("string" == typeof e.path || "string" == typeof e.name) ? (i(), "object" == typeof e && e.replace ? r.replace(e) : r.push(e)) : n(e)
                }))
            } catch (e) {
                i(e)
            }
        };
        Ue(c, A, (function () {
            var n = [];
            Ue(function (e, t, n) {
                return We(e, "beforeRouteEnter", (function (e, r, o, i) {
                    return function (e, t, n, r, o) {
                        return function (i, u, a) {
                            return e(i, u, (function (e) {
                                "function" == typeof e && r.push((function () {
                                    !function e(t, n, r, o) {
                                        n[r] && !n[r]._isBeingDestroyed ? t(n[r]) : o() && setTimeout((function () {
                                            e(t, n, r, o)
                                        }), 16)
                                    }(e, t.instances, n, o)
                                })), a(e)
                            }))
                        }
                    }(e, o, i, t, n)
                }))
            }(l, n, (function () {
                return r.current === e
            })).concat(r.router.resolveHooks), A, (function () {
                if (r.pending !== e) return i();
                r.pending = null, t(e), r.router.app && r.router.app.$nextTick((function () {
                    n.forEach((function (e) {
                        e()
                    }))
                }))
            }))
        }))
    }, He.prototype.updateRoute = function (e) {
        var t = this.current;
        this.current = e, this.cb && this.cb(e), this.router.afterHooks.forEach((function (n) {
            n && n(e, t)
        }))
    };
    var Xe = function (e) {
        function t(t, n) {
            var r = this;
            e.call(this, t, n);
            var o = t.options.scrollBehavior, i = je && o;
            i && Fe();
            var u = Je(this.base);
            window.addEventListener("popstate", (function (e) {
                var n = r.current, o = Je(r.base);
                r.current === Q && o === u || r.transitionTo(o, (function (e) {
                    i && Me(t, e, n, !0)
                }))
            }))
        }

        return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.go = function (e) {
            window.history.go(e)
        }, t.prototype.push = function (e, t, n) {
            var r = this, o = this.current;
            this.transitionTo(e, (function (e) {
                Re(H(r.base + e.fullPath)), Me(r.router, e, o, !1), t && t(e)
            }), n)
        }, t.prototype.replace = function (e, t, n) {
            var r = this, o = this.current;
            this.transitionTo(e, (function (e) {
                Pe(H(r.base + e.fullPath)), Me(r.router, e, o, !1), t && t(e)
            }), n)
        }, t.prototype.ensureURL = function (e) {
            if (Je(this.base) !== this.current.fullPath) {
                var t = H(this.base + this.current.fullPath);
                e ? Re(t) : Pe(t)
            }
        }, t.prototype.getCurrentLocation = function () {
            return Je(this.base)
        }, t
    }(He);

    function Je(e) {
        var t = decodeURI(window.location.pathname);
        return e && 0 === t.indexOf(e) && (t = t.slice(e.length)), (t || "/") + window.location.search + window.location.hash
    }

    var Ke = function (e) {
        function t(t, n, r) {
            e.call(this, t, n), r && function (e) {
                var t = Je(e);
                if (!/^\/#/.test(t)) return window.location.replace(H(e + "/#" + t)), !0
            }(this.base) || qe()
        }

        return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.setupListeners = function () {
            var e = this, t = this.router.options.scrollBehavior, n = je && t;
            n && Fe(), window.addEventListener(je ? "popstate" : "hashchange", (function () {
                var t = e.current;
                qe() && e.transitionTo(et(), (function (r) {
                    n && Me(e.router, r, t, !0), je || rt(r.fullPath)
                }))
            }))
        }, t.prototype.push = function (e, t, n) {
            var r = this, o = this.current;
            this.transitionTo(e, (function (e) {
                nt(e.fullPath), Me(r.router, e, o, !1), t && t(e)
            }), n)
        }, t.prototype.replace = function (e, t, n) {
            var r = this, o = this.current;
            this.transitionTo(e, (function (e) {
                rt(e.fullPath), Me(r.router, e, o, !1), t && t(e)
            }), n)
        }, t.prototype.go = function (e) {
            window.history.go(e)
        }, t.prototype.ensureURL = function (e) {
            var t = this.current.fullPath;
            et() !== t && (e ? nt(t) : rt(t))
        }, t.prototype.getCurrentLocation = function () {
            return et()
        }, t
    }(He);

    function qe() {
        var e = et();
        return "/" === e.charAt(0) || (rt("/" + e), !1)
    }

    function et() {
        var e = window.location.href, t = e.indexOf("#");
        if (t < 0) return "";
        var n = (e = e.slice(t + 1)).indexOf("?");
        if (n < 0) {
            var r = e.indexOf("#");
            e = r > -1 ? decodeURI(e.slice(0, r)) + e.slice(r) : decodeURI(e)
        } else e = decodeURI(e.slice(0, n)) + e.slice(n);
        return e
    }

    function tt(e) {
        var t = window.location.href, n = t.indexOf("#");
        return (n >= 0 ? t.slice(0, n) : t) + "#" + e
    }

    function nt(e) {
        je ? Re(tt(e)) : window.location.hash = e
    }

    function rt(e) {
        je ? Pe(tt(e)) : window.location.replace(tt(e))
    }

    var ot = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.stack = [], this.index = -1
        }

        return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.push = function (e, t, n) {
            var r = this;
            this.transitionTo(e, (function (e) {
                r.stack = r.stack.slice(0, r.index + 1).concat(e), r.index++, t && t(e)
            }), n)
        }, t.prototype.replace = function (e, t, n) {
            var r = this;
            this.transitionTo(e, (function (e) {
                r.stack = r.stack.slice(0, r.index).concat(e), t && t(e)
            }), n)
        }, t.prototype.go = function (e) {
            var t = this, n = this.index + e;
            if (!(n < 0 || n >= this.stack.length)) {
                var r = this.stack[n];
                this.confirmTransition(r, (function () {
                    t.index = n, t.updateRoute(r)
                }), (function (e) {
                    B(Ze, e) && (t.index = n)
                }))
            }
        }, t.prototype.getCurrentLocation = function () {
            var e = this.stack[this.stack.length - 1];
            return e ? e.fullPath : "/"
        }, t.prototype.ensureURL = function () {
        }, t
    }(He), it = function (e) {
        void 0 === e && (e = {}), this.app = null, this.apps = [], this.options = e, this.beforeHooks = [], this.resolveHooks = [], this.afterHooks = [], this.matcher = ye(e.routes || [], this);
        var t = e.mode || "hash";
        switch (this.fallback = "history" === t && !je && !1 !== e.fallback, this.fallback && (t = "hash"), ge || (t = "abstract"), this.mode = t, t) {
            case"history":
                this.history = new Xe(this, e.base);
                break;
            case"hash":
                this.history = new Ke(this, e.base, this.fallback);
                break;
            case"abstract":
                this.history = new ot(this, e.base);
                break;
            default:
                0
        }
    }, ut = {currentRoute: {configurable: !0}};

    function at(e, t) {
        return e.push(t), function () {
            var n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
        }
    }

    it.prototype.match = function (e, t, n) {
        return this.matcher.match(e, t, n)
    }, ut.currentRoute.get = function () {
        return this.history && this.history.current
    }, it.prototype.init = function (e) {
        var t = this;
        if (this.apps.push(e), e.$once("hook:destroyed", (function () {
            var n = t.apps.indexOf(e);
            n > -1 && t.apps.splice(n, 1), t.app === e && (t.app = t.apps[0] || null)
        })), !this.app) {
            this.app = e;
            var n = this.history;
            if (n instanceof Xe) n.transitionTo(n.getCurrentLocation()); else if (n instanceof Ke) {
                var r = function () {
                    n.setupListeners()
                };
                n.transitionTo(n.getCurrentLocation(), r, r)
            }
            n.listen((function (e) {
                t.apps.forEach((function (t) {
                    t._route = e
                }))
            }))
        }
    }, it.prototype.beforeEach = function (e) {
        return at(this.beforeHooks, e)
    }, it.prototype.beforeResolve = function (e) {
        return at(this.resolveHooks, e)
    }, it.prototype.afterEach = function (e) {
        return at(this.afterHooks, e)
    }, it.prototype.onReady = function (e, t) {
        this.history.onReady(e, t)
    }, it.prototype.onError = function (e) {
        this.history.onError(e)
    }, it.prototype.push = function (e, t, n) {
        var r = this;
        if (!t && !n && "undefined" != typeof Promise) return new Promise((function (t, n) {
            r.history.push(e, t, n)
        }));
        this.history.push(e, t, n)
    }, it.prototype.replace = function (e, t, n) {
        var r = this;
        if (!t && !n && "undefined" != typeof Promise) return new Promise((function (t, n) {
            r.history.replace(e, t, n)
        }));
        this.history.replace(e, t, n)
    }, it.prototype.go = function (e) {
        this.history.go(e)
    }, it.prototype.back = function () {
        this.go(-1)
    }, it.prototype.forward = function () {
        this.go(1)
    }, it.prototype.getMatchedComponents = function (e) {
        var t = e ? e.matched ? e : this.resolve(e).route : this.currentRoute;
        return t ? [].concat.apply([], t.matched.map((function (e) {
            return Object.keys(e.components).map((function (t) {
                return e.components[t]
            }))
        }))) : []
    }, it.prototype.resolve = function (e, t, n) {
        var r = pe(e, t = t || this.history.current, n, this), o = this.match(r, t), i = o.redirectedFrom || o.fullPath;
        return {
            location: r, route: o, href: function (e, t, n) {
                var r = "hash" === n ? "#" + t : t;
                return e ? H(e + "/" + r) : r
            }(this.history.base, i, this.mode), normalizedTo: r, resolved: o
        }
    }, it.prototype.addRoutes = function (e) {
        this.matcher.addRoutes(e), this.history.current !== Q && this.history.transitionTo(this.history.getCurrentLocation())
    }, Object.defineProperties(it.prototype, ut), it.install = function e(t) {
        if (!e.installed || fe !== t) {
            e.installed = !0, fe = t;
            var n = function (e) {
                return void 0 !== e
            }, r = function (e, t) {
                var r = e.$options._parentVnode;
                n(r) && n(r = r.data) && n(r = r.registerRouteInstance) && r(e, t)
            };
            t.mixin({
                beforeCreate: function () {
                    n(this.$options.router) ? (this._routerRoot = this, this._router = this.$options.router, this._router.init(this), t.util.defineReactive(this, "_route", this._router.history.current)) : this._routerRoot = this.$parent && this.$parent._routerRoot || this, r(this, this)
                }, destroyed: function () {
                    r(this)
                }
            }), Object.defineProperty(t.prototype, "$router", {
                get: function () {
                    return this._routerRoot._router
                }
            }), Object.defineProperty(t.prototype, "$route", {
                get: function () {
                    return this._routerRoot._route
                }
            }), t.component("RouterView", M), t.component("RouterLink", me);
            var o = t.config.optionMergeStrategies;
            o.beforeRouteEnter = o.beforeRouteLeave = o.beforeRouteUpdate = o.created
        }
    }, it.version = "3.1.6", ge && window.Vue && window.Vue.use(it);
    var st = it, lt = r(137), ct = Object(lt.loadState)("photos", "maps"), At = function () {
        return Promise.all([r.e(0), r.e(1), r.e(6)]).then(r.bind(null, 507))
    }, pt = function () {
        return Promise.all([r.e(0), r.e(2), r.e(1), r.e(4)]).then(r.bind(null, 505))
    };
    s.default.use(st);
    var ft = Object(o.generateUrl)("/apps/maps");
    ct || (ft = Object(o.generateUrl)("/settings/apps/integration/maps"));
    var dt = new st({
        mode: "history",
        base: Object(o.generateUrl)("/apps/photos", ""),
        linkActiveClass: "active",
        routes: [{
            path: "/", component: pt, name: "root", props: function (e) {
                return {rootTitle: t("photos", "Your photos")}
            }
        }, {
            path: "/albums/:path*", component: At, name: "albums", props: function (e) {
                return {
                    path: "/".concat(e.params.path ? e.params.path : ""),
                    isRoot: !e.params.path,
                    rootTitle: t("photos", "Your albums")
                }
            }
        }, {
            path: "/shared/:path*", component: At, name: "shared", props: function (e) {
                return {
                    path: "/".concat(e.params.path ? e.params.path : ""),
                    isRoot: !e.params.path,
                    rootTitle: t("photos", "Shared albums"),
                    showShared: !0
                }
            }
        }, {
            path: "/favorites", component: pt, name: "favorites", props: function (e) {
                return {rootTitle: t("photos", "Favorites"), onlyFavorites: !0}
            }
        }, {
            path: "/tags/:path*", component: function () {
                return Promise.all([r.e(0), r.e(2), r.e(1), r.e(5)]).then(r.bind(null, 506))
            }, name: "tags", props: function (e) {
                return {
                    path: "".concat(e.params.path ? e.params.path : ""),
                    isRoot: !e.params.path,
                    rootTitle: t("photos", "Tagged photos")
                }
            }
        }, {
            path: "/maps", name: "maps", beforeEnter: function () {
                window.open(ft, "_blank")
            }
        }]
    }), mt = r(48);

    function ht(e) {
        return function (e) {
            if (Array.isArray(e)) return gt(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return gt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gt(e, t)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function gt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    /**
     * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
     *
     * @author John Molakvoæ <skjnldsv@protonmail.com>
     *
     * @license GNU AGPL version 3 or any later version
     *
     * This program is free software: you can redistribute it and/or modify
     * it under the terms of the GNU Affero General Public License as
     * published by the Free Software Foundation, either version 3 of the
     * License, or (at your option) any later version.
     *
     * This program is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
     * GNU Affero General Public License for more details.
     *
     * You should have received a copy of the GNU Affero General Public License
     * along with this program. If not, see <http://www.gnu.org/licenses/>.
     *
     */var vt = {
        state: {files: {}}, mutations: {
            updateFiles: function (e, t) {
                t.forEach((function (t) {
                    t.fileid >= 0 && s.default.set(e.files, t.fileid, t)
                }))
            }, setSubFolders: function (e, t) {
                var n = t.fileid, r = t.folders;
                if (e.files[n]) {
                    var o = r.map((function (e) {
                        return e.fileid
                    })).filter((function (e) {
                        return e >= 0
                    }));
                    s.default.set(e.files[n], "folders", o)
                }
            }
        }, getters: {
            files: function (e) {
                return e.files
            }
        }, actions: {
            updateFiles: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.folder, r = t.files,
                    o = void 0 === r ? [] : r, i = t.folders, u = void 0 === i ? [] : i;
                e.commit("updateFiles", [n].concat(ht(o), ht(u))), e.commit("setSubFolders", {
                    fileid: n.fileid,
                    folders: u
                })
            }, appendFiles: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                e.commit("updateFiles", t)
            }
        }
    }, Dt = r(21), yt = {
        state: {paths: {}, folders: {}}, mutations: {
            updateFolders: function (e, t) {
                var n = t.fileid, r = t.files;
                if (r.length > 0) {
                    var o = r.sort((function (e, t) {
                        return Object(Dt.c)(e, t, "lastmod")
                    })).filter((function (e) {
                        return e.fileid >= 0
                    }));
                    s.default.set(e.folders, n, o.map((function (e) {
                        return e.fileid
                    })))
                } else s.default.set(e.folders, n, [])
            }, addPath: function (e, t) {
                var n = t.path, r = t.fileid;
                r >= 0 && s.default.set(e.paths, n, r)
            }
        }, getters: {
            folders: function (e) {
                return e.folders
            }, folder: function (e) {
                return function (t) {
                    return e.folders[t]
                }
            }, folderId: function (e) {
                return function (t) {
                    return e.paths[t]
                }
            }
        }, actions: {
            updateFolders: function (e, t) {
                var n = t.fileid, r = t.files, o = t.folders;
                e.commit("updateFolders", {fileid: n, files: r}), o.forEach((function (t) {
                    return e.commit("addPath", {path: t.filename, fileid: t.fileid})
                }))
            }, addPath: function (e, t) {
                var n = t.path, r = t.fileid;
                e.commit("addPath", {path: n, fileid: r})
            }
        }
    }, Et = {
        state: {tags: {}, names: {}}, mutations: {
            updateTags: function (e, t) {
                t.length > 0 && t.sort((function (e, t) {
                    return Object(Dt.c)(e, t, "displayName")
                })).forEach((function (t) {
                    s.default.set(e.tags, t.id, t), s.default.set(e.tags[t.id], "files", []), s.default.set(e.names, t.displayName, t.id)
                }))
            }, updateTag: function (e, t) {
                var n = t.id, r = t.files.sort((function (e, t) {
                    return Object(Dt.c)(e, t, "lastmod")
                }));
                console.info(n, r), s.default.set(e.tags[n], "files", r.map((function (e) {
                    return e.fileid
                })))
            }
        }, getters: {
            tags: function (e) {
                return e.tags
            }, tagsNames: function (e) {
                return e.names
            }, tag: function (e) {
                return function (t) {
                    return e.tags[t]
                }
            }, tagId: function (e) {
                return function (t) {
                    return e.names[t]
                }
            }
        }, actions: {
            updateTags: function (e, t) {
                e.commit("updateTags", t)
            }, updateTag: function (e, t) {
                var n = t.id, r = t.files;
                e.commit("updateTag", {id: n, files: r})
            }
        }
    };

    function Ct(e) {
        return function (e) {
            if (Array.isArray(e)) return bt(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return bt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bt(e, t)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function bt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    /**
     * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
     *
     * @author John Molakvoæ <skjnldsv@protonmail.com>
     *
     * @license GNU AGPL version 3 or any later version
     *
     * This program is free software: you can redistribute it and/or modify
     * it under the terms of the GNU Affero General Public License as
     * published by the Free Software Foundation, either version 3 of the
     * License, or (at your option) any later version.
     *
     * This program is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
     * GNU Affero General Public License for more details.
     *
     * You should have received a copy of the GNU Affero General Public License
     * along with this program. If not, see <http://www.gnu.org/licenses/>.
     *
     */var xt = {
        state: {timeline: []}, mutations: {
            updateTimeline: function (e, t) {
                var n;
                (n = e.timeline).push.apply(n, Ct(t.map((function (e) {
                    return e.fileid
                })).filter((function (e) {
                    return e >= 0
                }))))
            }, resetTimeline: function (e) {
                e.timeline = []
            }
        }, getters: {
            timeline: function (e) {
                return e.timeline
            }
        }, actions: {
            updateTimeline: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                e.commit("updateTimeline", t)
            }, resetTimeline: function (e) {
                e.commit("resetTimeline")
            }
        }
    };
    /**
     * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
     *
     * @author John Molakvoæ <skjnldsv@protonmail.com>
     *
     * @license GNU AGPL version 3 or any later version
     *
     * This program is free software: you can redistribute it and/or modify
     * it under the terms of the GNU Affero General Public License as
     * published by the Free Software Foundation, either version 3 of the
     * License, or (at your option) any later version.
     *
     * This program is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
     * GNU Affero General Public License for more details.
     *
     * You should have received a copy of the GNU Affero General Public License
     * along with this program. If not, see <http://www.gnu.org/licenses/>.
     *
     */
    s.default.use(mt.b);
    var wt = new mt.a({modules: {files: vt, folders: yt, systemtags: Et, timeline: xt}, strict: !1});
    /**
     * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
     *
     * @author John Molakvoæ <skjnldsv@protonmail.com>
     *
     * @license GNU AGPL version 3 or any later version
     *
     * This program is free software: you can redistribute it and/or modify
     * it under the terms of the GNU Affero General Public License as
     * published by the Free Software Foundation, either version 3 of the
     * License, or (at your option) any later version.
     *
     * This program is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
     * GNU Affero General Public License for more details.
     *
     * You should have received a copy of the GNU Affero General Public License
     * along with this program. If not, see <http://www.gnu.org/licenses/>.
     *
     */r.nc = btoa(Object(i.getRequestToken)()), r.p = Object(o.generateFilePath)("photos", "", "js/"), Object(u.sync)(wt, dt), s.default.prototype.t = a.translate, s.default.prototype.n = a.translatePlural, window.addEventListener("DOMContentLoaded", (function () {
        window.OCA.Files || (window.OCA.Files = {}), Object.assign(window.OCA.Files, {App: {fileList: {filesClient: OC.Files.getClient()}}}, window.OCA.Files)
    }));
    n.default = new s.default({
        el: "#content", name: "PhotosRoot", router: dt, store: wt, render: function (e) {
            return e(w)
        }
    })
}]);
//# sourceMappingURL=photos.js.map
