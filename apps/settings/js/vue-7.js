(window.webpackJsonpSettings = window.webpackJsonpSettings || []).push([[7], {
    407: function (e, t, s) {
        window, e.exports = function (e) {
            var t = {};

            function s(n) {
                if (t[n]) return t[n].exports;
                var a = t[n] = {i: n, l: !1, exports: {}};
                return e[n].call(a.exports, a, a.exports, s), a.l = !0, a.exports
            }

            return s.m = e, s.c = t, s.d = function (e, t, n) {
                s.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
            }, s.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
            }, s.t = function (e, t) {
                if (1 & t && (e = s(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (s.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e) for (var a in e) s.d(n, a, function (t) {
                    return e[t]
                }.bind(null, a));
                return n
            }, s.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return s.d(t, "a", t), t
            }, s.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, s.p = "/dist/", s(s.s = 88)
        }({
            0: function (e, t, s) {
                "use strict";

                function n(e, t, s, n, a, o, r, i) {
                    var c, l = "function" == typeof e ? e.options : e;
                    if (t && (l.render = t, l.staticRenderFns = s, l._compiled = !0), n && (l.functional = !0), o && (l._scopeId = "data-v-" + o), r ? (c = function (e) {
                        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), a && a.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r)
                    }, l._ssrRegister = c) : a && (c = i ? function () {
                        a.call(this, this.$root.$options.shadowRoot)
                    } : a), c) if (l.functional) {
                        l._injectStyles = c;
                        var m = l.render;
                        l.render = function (e, t) {
                            return c.call(t), m(e, t)
                        }
                    } else {
                        var A = l.beforeCreate;
                        l.beforeCreate = A ? [].concat(A, c) : [c]
                    }
                    return {exports: e, options: l}
                }

                s.d(t, "a", (function () {
                    return n
                }))
            }, 1: function (e, t, s) {
                "use strict";
                e.exports = function (e) {
                    var t = [];
                    return t.toString = function () {
                        return this.map((function (t) {
                            var s = function (e, t) {
                                var s, n, a, o = e[1] || "", r = e[3];
                                if (!r) return o;
                                if (t && "function" == typeof btoa) {
                                    var i = (s = r, n = btoa(unescape(encodeURIComponent(JSON.stringify(s)))), a = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n), "/*# ".concat(a, " */")),
                                        c = r.sources.map((function (e) {
                                            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */")
                                        }));
                                    return [o].concat(c).concat([i]).join("\n")
                                }
                                return [o].join("\n")
                            }(t, e);
                            return t[2] ? "@media ".concat(t[2], " {").concat(s, "}") : s
                        })).join("")
                    }, t.i = function (e, s, n) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        var a = {};
                        if (n) for (var o = 0; o < this.length; o++) {
                            var r = this[o][0];
                            null != r && (a[r] = !0)
                        }
                        for (var i = 0; i < e.length; i++) {
                            var c = [].concat(e[i]);
                            n && a[c[0]] || (s && (c[2] ? c[2] = "".concat(s, " and ").concat(c[2]) : c[2] = s), t.push(c))
                        }
                    }, t
                }
            }, 12: function (e, t) {
                e.exports = s(255)
            }, 126: function (e, t, s) {
                "use strict";
                var n = s(47);
                s.n(n).a
            }, 127: function (e, t, s) {
                (t = s(1)(!1)).push([e.i, "li.active[data-v-33ba3302]{box-shadow:inset -4px 0 var(--color-primary)}.action--disabled[data-v-33ba3302]{pointer-events:none;opacity:.5}.action--disabled[data-v-33ba3302]:hover,.action--disabled[data-v-33ba3302]:focus{cursor:default;opacity:.5}.action--disabled *[data-v-33ba3302]{opacity:1 !important}.action-button[data-v-33ba3302]{display:flex;align-items:flex-start;width:100%;height:auto;margin:0;padding:0;padding-left:14px;cursor:pointer;white-space:nowrap;opacity:.7;color:var(--color-main-text);border:0;border-radius:0;background-color:transparent;box-shadow:none;font-weight:normal;line-height:44px}.action-button[data-v-33ba3302]:hover,.action-button[data-v-33ba3302]:focus{opacity:1}.action-button>span[data-v-33ba3302]{cursor:pointer;white-space:nowrap}.action-button__icon[data-v-33ba3302]{width:44px;height:44px;opacity:1;background-position:14px center;background-size:16px}.action-button p[data-v-33ba3302]{width:150px;padding:7px 0;margin:auto;cursor:pointer;text-align:left;line-height:1.6em}.action-button__longtext[data-v-33ba3302]{cursor:pointer;white-space:pre-wrap}.action-button__title[data-v-33ba3302]{font-weight:bold}\n", ""]), e.exports = t
            }, 16: function (e, t, s) {
                "use strict";
                s(12), s(28);
                var n = s(5), a = s.n(n);
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
                        this.$slots.default && "" !== this.text.trim() || (a.a.util.warn("".concat(this.$options.name, " cannot be empty and requires a meaningful text content"), this), this.$destroy(), this.$el.remove())
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
            }, 18: function (e, t) {
                e.exports = s(50)
            }, 19: function (e, t) {
                e.exports = s(78)
            }, 2: function (e, t, s) {
                "use strict";

                function n(e, t) {
                    for (var s = [], n = {}, a = 0; a < t.length; a++) {
                        var o = t[a], r = o[0], i = {id: e + ":" + a, css: o[1], media: o[2], sourceMap: o[3]};
                        n[r] ? n[r].parts.push(i) : s.push(n[r] = {id: r, parts: [i]})
                    }
                    return s
                }

                s.r(t), s.d(t, "default", (function () {
                    return d
                }));
                var a = "undefined" != typeof document;
                if ("undefined" != typeof DEBUG && DEBUG && !a) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
                var o = {}, r = a && (document.head || document.getElementsByTagName("head")[0]), i = null, c = 0,
                    l = !1, m = function () {
                    }, A = null,
                    u = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

                function d(e, t, s, a) {
                    l = s, A = a || {};
                    var r = n(e, t);
                    return g(r), function (t) {
                        for (var s = [], a = 0; a < r.length; a++) {
                            var i = r[a];
                            (c = o[i.id]).refs--, s.push(c)
                        }
                        for (t ? g(r = n(e, t)) : r = [], a = 0; a < s.length; a++) {
                            var c;
                            if (0 === (c = s[a]).refs) {
                                for (var l = 0; l < c.parts.length; l++) c.parts[l]();
                                delete o[c.id]
                            }
                        }
                    }
                }

                function g(e) {
                    for (var t = 0; t < e.length; t++) {
                        var s = e[t], n = o[s.id];
                        if (n) {
                            n.refs++;
                            for (var a = 0; a < n.parts.length; a++) n.parts[a](s.parts[a]);
                            for (; a < s.parts.length; a++) n.parts.push(f(s.parts[a]));
                            n.parts.length > s.parts.length && (n.parts.length = s.parts.length)
                        } else {
                            var r = [];
                            for (a = 0; a < s.parts.length; a++) r.push(f(s.parts[a]));
                            o[s.id] = {id: s.id, refs: 1, parts: r}
                        }
                    }
                }

                function p() {
                    var e = document.createElement("style");
                    return e.type = "text/css", r.appendChild(e), e
                }

                function f(e) {
                    var t, s, n = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
                    if (n) {
                        if (l) return m;
                        n.parentNode.removeChild(n)
                    }
                    if (u) {
                        var a = c++;
                        n = i || (i = p()), t = M.bind(null, n, a, !1), s = M.bind(null, n, a, !0)
                    } else n = p(), t = b.bind(null, n), s = function () {
                        n.parentNode.removeChild(n)
                    };
                    return t(e), function (n) {
                        if (n) {
                            if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                            t(e = n)
                        } else s()
                    }
                }

                var v, h = (v = [], function (e, t) {
                    return v[e] = t, v.filter(Boolean).join("\n")
                });

                function M(e, t, s, n) {
                    var a = s ? "" : n.css;
                    if (e.styleSheet) e.styleSheet.cssText = h(t, a); else {
                        var o = document.createTextNode(a), r = e.childNodes;
                        r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(o, r[t]) : e.appendChild(o)
                    }
                }

                function b(e, t) {
                    var s = t.css, n = t.media, a = t.sourceMap;
                    if (n && e.setAttribute("media", n), A.ssrId && e.setAttribute("data-vue-ssr-id", t.id), a && (s += "\n/*# sourceURL=" + a.sources[0] + " */", s += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"), e.styleSheet) e.styleSheet.cssText = s; else {
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(s))
                    }
                }
            }, 20: function (e, t) {
                e.exports = s(141)
            }, 24: function (e, t) {
                e.exports = s(263)
            }, 26: function (e, t, s) {
                "use strict";
                s(18), s(4), s(19), s(20), s(24);
                var n = s(16), a = (s(12), function (e, t) {
                    for (var s = e.$parent; s;) {
                        if (s.$options.name === t) return s;
                        s = s.$parent
                    }
                });
                t.a = {
                    mixins: [n.a],
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
                                var t = a(this, "Actions");
                                t && t.closeMenu && t.closeMenu()
                            }
                        }
                    }
                }
            }, 28: function (e, t) {
                e.exports = s(264)
            }, 4: function (e, t) {
                e.exports = s(68)
            }, 47: function (e, t, s) {
                var n = s(127);
                "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("75b9f902", n, !0, {})
            }, 5: function (e, t) {
                e.exports = s(13)
            }, 54: function (e, t) {
            }, 70: function (e, t, s) {
                "use strict";
                var n = {
                    name: "ActionButton",
                    mixins: [s(26).a],
                    props: {disabled: {type: Boolean, default: !1}},
                    computed: {
                        isFocusable: function () {
                            return !this.disabled
                        }
                    }
                }, a = (s(126), s(0)), o = s(54), r = s.n(o), i = Object(a.a)(n, (function () {
                    var e = this, t = e.$createElement, s = e._self._c || t;
                    return s("li", {class: {"action--disabled": e.disabled}}, [s("button", {
                        staticClass: "action-button",
                        class: {focusable: e.isFocusable},
                        attrs: {"aria-label": e.ariaLabel},
                        on: {click: e.onClick}
                    }, [s("span", {
                        staticClass: "action-button__icon",
                        class: [e.isIconUrl ? "action-button__icon--url" : e.icon],
                        style: {backgroundImage: e.isIconUrl ? "url(" + e.icon + ")" : null}
                    }), e._v(" "), e.title ? s("p", [s("strong", {staticClass: "action-button__title"}, [e._v("\n\t\t\t\t" + e._s(e.title) + "\n\t\t\t")]), e._v(" "), s("br"), e._v(" "), s("span", {
                        staticClass: "action-button__longtext",
                        domProps: {textContent: e._s(e.text)}
                    })]) : e.isLongText ? s("p", {
                        staticClass: "action-button__longtext",
                        domProps: {textContent: e._s(e.text)}
                    }) : s("span", {staticClass: "action-button__text"}, [e._v(e._s(e.text))]), e._v(" "), e._e()], 2)])
                }), [], !1, null, "33ba3302", null);
                "function" == typeof r.a && r()(i), t.a = i.exports
            }, 88: function (e, t, s) {
                "use strict";
                s.r(t);
                var n = s(70);
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
                 */t.default = n.a
            }
        })
    }, 666: function (e, t) {
        function s(e) {
            return "function" == typeof e.value || (console.warn("[Vue-click-outside:] provided expression", e.expression, "is not a function."), !1)
        }

        function n(e) {
            return void 0 !== e.componentInstance && e.componentInstance.$isServer
        }

        e.exports = {
            bind: function (e, t, a) {
                if (!s(t)) return;

                function o(t) {
                    if (a.context) {
                        var s = t.path || t.composedPath && t.composedPath();
                        s && s.length > 0 && s.unshift(t.target), e.contains(t.target) || function (e, t) {
                            if (!e || !t) return !1;
                            for (var s = 0, n = t.length; s < n; s++) try {
                                if (e.contains(t[s])) return !0;
                                if (t[s].contains(e)) return !1
                            } catch (e) {
                                return !1
                            }
                            return !1
                        }(a.context.popupItem, s) || e.__vueClickOutside__.callback(t)
                    }
                }

                e.__vueClickOutside__ = {handler: o, callback: t.value};
                const r = "ontouchstart" in document.documentElement ? "touchstart" : "click";
                !n(a) && document.addEventListener(r, o)
            }, update: function (e, t) {
                s(t) && (e.__vueClickOutside__.callback = t.value)
            }, unbind: function (e, t, s) {
                const a = "ontouchstart" in document.documentElement ? "touchstart" : "click";
                !n(s) && e.__vueClickOutside__ && document.removeEventListener(a, e.__vueClickOutside__.handler), delete e.__vueClickOutside__
            }
        }
    }, 671: function (e, t, s) {
        window, e.exports = function (e) {
            var t = {};

            function s(n) {
                if (t[n]) return t[n].exports;
                var a = t[n] = {i: n, l: !1, exports: {}};
                return e[n].call(a.exports, a, a.exports, s), a.l = !0, a.exports
            }

            return s.m = e, s.c = t, s.d = function (e, t, n) {
                s.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
            }, s.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
            }, s.t = function (e, t) {
                if (1 & t && (e = s(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (s.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e) for (var a in e) s.d(n, a, function (t) {
                    return e[t]
                }.bind(null, a));
                return n
            }, s.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return s.d(t, "a", t), t
            }, s.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, s.p = "/dist/", s(s.s = 186)
        }({
            0: function (e, t, s) {
                "use strict";

                function n(e, t, s, n, a, o, r, i) {
                    var c, l = "function" == typeof e ? e.options : e;
                    if (t && (l.render = t, l.staticRenderFns = s, l._compiled = !0), n && (l.functional = !0), o && (l._scopeId = "data-v-" + o), r ? (c = function (e) {
                        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), a && a.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r)
                    }, l._ssrRegister = c) : a && (c = i ? function () {
                        a.call(this, this.$root.$options.shadowRoot)
                    } : a), c) if (l.functional) {
                        l._injectStyles = c;
                        var m = l.render;
                        l.render = function (e, t) {
                            return c.call(t), m(e, t)
                        }
                    } else {
                        var A = l.beforeCreate;
                        l.beforeCreate = A ? [].concat(A, c) : [c]
                    }
                    return {exports: e, options: l}
                }

                s.d(t, "a", (function () {
                    return n
                }))
            }, 1: function (e, t, s) {
                "use strict";
                e.exports = function (e) {
                    var t = [];
                    return t.toString = function () {
                        return this.map((function (t) {
                            var s = function (e, t) {
                                var s, n, a, o = e[1] || "", r = e[3];
                                if (!r) return o;
                                if (t && "function" == typeof btoa) {
                                    var i = (s = r, n = btoa(unescape(encodeURIComponent(JSON.stringify(s)))), a = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n), "/*# ".concat(a, " */")),
                                        c = r.sources.map((function (e) {
                                            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */")
                                        }));
                                    return [o].concat(c).concat([i]).join("\n")
                                }
                                return [o].join("\n")
                            }(t, e);
                            return t[2] ? "@media ".concat(t[2], " {").concat(s, "}") : s
                        })).join("")
                    }, t.i = function (e, s, n) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        var a = {};
                        if (n) for (var o = 0; o < this.length; o++) {
                            var r = this[o][0];
                            null != r && (a[r] = !0)
                        }
                        for (var i = 0; i < e.length; i++) {
                            var c = [].concat(e[i]);
                            n && a[c[0]] || (s && (c[2] ? c[2] = "".concat(s, " and ").concat(c[2]) : c[2] = s), t.push(c))
                        }
                    }, t
                }
            }, 186: function (e, t, s) {
                "use strict";
                s.r(t);
                var n = {name: "AppNavigationCaption", props: {title: {type: String, required: !0}}},
                    a = (s(212), s(0)), o = Object(a.a)(n, (function () {
                        var e = this.$createElement;
                        return (this._self._c || e)("li", {staticClass: "app-navigation-caption"}, [this._v("\n\t" + this._s(this.title) + "\n")])
                    }), [], !1, null, "46add67c", null).exports;
                t.default = o
            }, 2: function (e, t, s) {
                "use strict";

                function n(e, t) {
                    for (var s = [], n = {}, a = 0; a < t.length; a++) {
                        var o = t[a], r = o[0], i = {id: e + ":" + a, css: o[1], media: o[2], sourceMap: o[3]};
                        n[r] ? n[r].parts.push(i) : s.push(n[r] = {id: r, parts: [i]})
                    }
                    return s
                }

                s.r(t), s.d(t, "default", (function () {
                    return d
                }));
                var a = "undefined" != typeof document;
                if ("undefined" != typeof DEBUG && DEBUG && !a) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
                var o = {}, r = a && (document.head || document.getElementsByTagName("head")[0]), i = null, c = 0,
                    l = !1, m = function () {
                    }, A = null,
                    u = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

                function d(e, t, s, a) {
                    l = s, A = a || {};
                    var r = n(e, t);
                    return g(r), function (t) {
                        for (var s = [], a = 0; a < r.length; a++) {
                            var i = r[a];
                            (c = o[i.id]).refs--, s.push(c)
                        }
                        for (t ? g(r = n(e, t)) : r = [], a = 0; a < s.length; a++) {
                            var c;
                            if (0 === (c = s[a]).refs) {
                                for (var l = 0; l < c.parts.length; l++) c.parts[l]();
                                delete o[c.id]
                            }
                        }
                    }
                }

                function g(e) {
                    for (var t = 0; t < e.length; t++) {
                        var s = e[t], n = o[s.id];
                        if (n) {
                            n.refs++;
                            for (var a = 0; a < n.parts.length; a++) n.parts[a](s.parts[a]);
                            for (; a < s.parts.length; a++) n.parts.push(f(s.parts[a]));
                            n.parts.length > s.parts.length && (n.parts.length = s.parts.length)
                        } else {
                            var r = [];
                            for (a = 0; a < s.parts.length; a++) r.push(f(s.parts[a]));
                            o[s.id] = {id: s.id, refs: 1, parts: r}
                        }
                    }
                }

                function p() {
                    var e = document.createElement("style");
                    return e.type = "text/css", r.appendChild(e), e
                }

                function f(e) {
                    var t, s, n = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
                    if (n) {
                        if (l) return m;
                        n.parentNode.removeChild(n)
                    }
                    if (u) {
                        var a = c++;
                        n = i || (i = p()), t = M.bind(null, n, a, !1), s = M.bind(null, n, a, !0)
                    } else n = p(), t = b.bind(null, n), s = function () {
                        n.parentNode.removeChild(n)
                    };
                    return t(e), function (n) {
                        if (n) {
                            if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                            t(e = n)
                        } else s()
                    }
                }

                var v, h = (v = [], function (e, t) {
                    return v[e] = t, v.filter(Boolean).join("\n")
                });

                function M(e, t, s, n) {
                    var a = s ? "" : n.css;
                    if (e.styleSheet) e.styleSheet.cssText = h(t, a); else {
                        var o = document.createTextNode(a), r = e.childNodes;
                        r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(o, r[t]) : e.appendChild(o)
                    }
                }

                function b(e, t) {
                    var s = t.css, n = t.media, a = t.sourceMap;
                    if (n && e.setAttribute("media", n), A.ssrId && e.setAttribute("data-vue-ssr-id", t.id), a && (s += "\n/*# sourceURL=" + a.sources[0] + " */", s += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"), e.styleSheet) e.styleSheet.cssText = s; else {
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(s))
                    }
                }
            }, 212: function (e, t, s) {
                "use strict";
                var n = s(97);
                s.n(n).a
            }, 213: function (e, t, s) {
                (t = s(1)(!1)).push([e.i, ".app-navigation-caption[data-v-46add67c]{font-weight:bold;color:var(--color-text-maxcontrast);line-height:44px;padding-left:44px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:0.7;box-shadow:none !important;order:1;flex-shrink:0}.app-navigation-caption[data-v-46add67c]:not(:first-child){margin-top:22px}\n", ""]), e.exports = t
            }, 97: function (e, t, s) {
                var n = s(213);
                "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("358576b8", n, !0, {})
            }
        })
    }, 672: function (e, t, s) {
        window, e.exports = function (e) {
            var t = {};

            function s(n) {
                if (t[n]) return t[n].exports;
                var a = t[n] = {i: n, l: !1, exports: {}};
                return e[n].call(a.exports, a, a.exports, s), a.l = !0, a.exports
            }

            return s.m = e, s.c = t, s.d = function (e, t, n) {
                s.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
            }, s.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
            }, s.t = function (e, t) {
                if (1 & t && (e = s(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (s.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e) for (var a in e) s.d(n, a, function (t) {
                    return e[t]
                }.bind(null, a));
                return n
            }, s.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return s.d(t, "a", t), t
            }, s.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, s.p = "/dist/", s(s.s = 173)
        }({
            0: function (e, t, s) {
                "use strict";

                function n(e, t, s, n, a, o, r, i) {
                    var c, l = "function" == typeof e ? e.options : e;
                    if (t && (l.render = t, l.staticRenderFns = s, l._compiled = !0), n && (l.functional = !0), o && (l._scopeId = "data-v-" + o), r ? (c = function (e) {
                        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), a && a.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r)
                    }, l._ssrRegister = c) : a && (c = i ? function () {
                        a.call(this, this.$root.$options.shadowRoot)
                    } : a), c) if (l.functional) {
                        l._injectStyles = c;
                        var m = l.render;
                        l.render = function (e, t) {
                            return c.call(t), m(e, t)
                        }
                    } else {
                        var A = l.beforeCreate;
                        l.beforeCreate = A ? [].concat(A, c) : [c]
                    }
                    return {exports: e, options: l}
                }

                s.d(t, "a", (function () {
                    return n
                }))
            }, 1: function (e, t, s) {
                "use strict";
                e.exports = function (e) {
                    var t = [];
                    return t.toString = function () {
                        return this.map((function (t) {
                            var s = function (e, t) {
                                var s, n, a, o = e[1] || "", r = e[3];
                                if (!r) return o;
                                if (t && "function" == typeof btoa) {
                                    var i = (s = r, n = btoa(unescape(encodeURIComponent(JSON.stringify(s)))), a = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n), "/*# ".concat(a, " */")),
                                        c = r.sources.map((function (e) {
                                            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */")
                                        }));
                                    return [o].concat(c).concat([i]).join("\n")
                                }
                                return [o].join("\n")
                            }(t, e);
                            return t[2] ? "@media ".concat(t[2], " {").concat(s, "}") : s
                        })).join("")
                    }, t.i = function (e, s, n) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        var a = {};
                        if (n) for (var o = 0; o < this.length; o++) {
                            var r = this[o][0];
                            null != r && (a[r] = !0)
                        }
                        for (var i = 0; i < e.length; i++) {
                            var c = [].concat(e[i]);
                            n && a[c[0]] || (s && (c[2] ? c[2] = "".concat(s, " and ").concat(c[2]) : c[2] = s), t.push(c))
                        }
                    }, t
                }
            }, 102: function (e, t, s) {
                var n = s(223);
                "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("361fd107", n, !0, {})
            }, 173: function (e, t, s) {
                "use strict";
                s.r(t);
                var n = {
                    props: {
                        buttonId: {type: String, required: !1, default: ""},
                        buttonClass: {type: [String, Array, Object], required: !1, default: ""},
                        disabled: {type: Boolean, required: !1, default: !1},
                        text: {type: String, required: !0}
                    }
                }, a = (s(222), s(0)), o = Object(a.a)(n, (function () {
                    var e = this, t = e.$createElement, s = e._self._c || t;
                    return s("div", {staticClass: "app-navigation-new"}, [s("button", {
                        class: e.buttonClass,
                        attrs: {id: e.buttonId, type: "button", disabled: e.disabled},
                        on: {
                            click: function (t) {
                                return e.$emit("click")
                            }
                        }
                    }, [e._v("\n\t\t" + e._s(e.text) + "\n\t")])])
                }), [], !1, null, "ecee326e", null).exports;
                t.default = o
            }, 2: function (e, t, s) {
                "use strict";

                function n(e, t) {
                    for (var s = [], n = {}, a = 0; a < t.length; a++) {
                        var o = t[a], r = o[0], i = {id: e + ":" + a, css: o[1], media: o[2], sourceMap: o[3]};
                        n[r] ? n[r].parts.push(i) : s.push(n[r] = {id: r, parts: [i]})
                    }
                    return s
                }

                s.r(t), s.d(t, "default", (function () {
                    return d
                }));
                var a = "undefined" != typeof document;
                if ("undefined" != typeof DEBUG && DEBUG && !a) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
                var o = {}, r = a && (document.head || document.getElementsByTagName("head")[0]), i = null, c = 0,
                    l = !1, m = function () {
                    }, A = null,
                    u = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

                function d(e, t, s, a) {
                    l = s, A = a || {};
                    var r = n(e, t);
                    return g(r), function (t) {
                        for (var s = [], a = 0; a < r.length; a++) {
                            var i = r[a];
                            (c = o[i.id]).refs--, s.push(c)
                        }
                        for (t ? g(r = n(e, t)) : r = [], a = 0; a < s.length; a++) {
                            var c;
                            if (0 === (c = s[a]).refs) {
                                for (var l = 0; l < c.parts.length; l++) c.parts[l]();
                                delete o[c.id]
                            }
                        }
                    }
                }

                function g(e) {
                    for (var t = 0; t < e.length; t++) {
                        var s = e[t], n = o[s.id];
                        if (n) {
                            n.refs++;
                            for (var a = 0; a < n.parts.length; a++) n.parts[a](s.parts[a]);
                            for (; a < s.parts.length; a++) n.parts.push(f(s.parts[a]));
                            n.parts.length > s.parts.length && (n.parts.length = s.parts.length)
                        } else {
                            var r = [];
                            for (a = 0; a < s.parts.length; a++) r.push(f(s.parts[a]));
                            o[s.id] = {id: s.id, refs: 1, parts: r}
                        }
                    }
                }

                function p() {
                    var e = document.createElement("style");
                    return e.type = "text/css", r.appendChild(e), e
                }

                function f(e) {
                    var t, s, n = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
                    if (n) {
                        if (l) return m;
                        n.parentNode.removeChild(n)
                    }
                    if (u) {
                        var a = c++;
                        n = i || (i = p()), t = M.bind(null, n, a, !1), s = M.bind(null, n, a, !0)
                    } else n = p(), t = b.bind(null, n), s = function () {
                        n.parentNode.removeChild(n)
                    };
                    return t(e), function (n) {
                        if (n) {
                            if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                            t(e = n)
                        } else s()
                    }
                }

                var v, h = (v = [], function (e, t) {
                    return v[e] = t, v.filter(Boolean).join("\n")
                });

                function M(e, t, s, n) {
                    var a = s ? "" : n.css;
                    if (e.styleSheet) e.styleSheet.cssText = h(t, a); else {
                        var o = document.createTextNode(a), r = e.childNodes;
                        r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(o, r[t]) : e.appendChild(o)
                    }
                }

                function b(e, t) {
                    var s = t.css, n = t.media, a = t.sourceMap;
                    if (n && e.setAttribute("media", n), A.ssrId && e.setAttribute("data-vue-ssr-id", t.id), a && (s += "\n/*# sourceURL=" + a.sources[0] + " */", s += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"), e.styleSheet) e.styleSheet.cssText = s; else {
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(s))
                    }
                }
            }, 222: function (e, t, s) {
                "use strict";
                var n = s(102);
                s.n(n).a
            }, 223: function (e, t, s) {
                (t = s(1)(!1)).push([e.i, ".app-navigation-new[data-v-ecee326e]{display:block;padding:10px}.app-navigation-new button[data-v-ecee326e]{display:inline-block;width:100%;padding:10px;padding-left:34px;background-position:10px center;text-align:left;margin:0}\n", ""]), e.exports = t
            }
        })
    }, 673: function (e, t, s) {
        window, e.exports = function (e) {
            var t = {};

            function s(n) {
                if (t[n]) return t[n].exports;
                var a = t[n] = {i: n, l: !1, exports: {}};
                return e[n].call(a.exports, a, a.exports, s), a.l = !0, a.exports
            }

            return s.m = e, s.c = t, s.d = function (e, t, n) {
                s.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
            }, s.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
            }, s.t = function (e, t) {
                if (1 & t && (e = s(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (s.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e) for (var a in e) s.d(n, a, function (t) {
                    return e[t]
                }.bind(null, a));
                return n
            }, s.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return s.d(t, "a", t), t
            }, s.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, s.p = "/dist/", s(s.s = 180)
        }({
            0: function (e, t, s) {
                "use strict";

                function n(e, t, s, n, a, o, r, i) {
                    var c, l = "function" == typeof e ? e.options : e;
                    if (t && (l.render = t, l.staticRenderFns = s, l._compiled = !0), n && (l.functional = !0), o && (l._scopeId = "data-v-" + o), r ? (c = function (e) {
                        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), a && a.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r)
                    }, l._ssrRegister = c) : a && (c = i ? function () {
                        a.call(this, this.$root.$options.shadowRoot)
                    } : a), c) if (l.functional) {
                        l._injectStyles = c;
                        var m = l.render;
                        l.render = function (e, t) {
                            return c.call(t), m(e, t)
                        }
                    } else {
                        var A = l.beforeCreate;
                        l.beforeCreate = A ? [].concat(A, c) : [c]
                    }
                    return {exports: e, options: l}
                }

                s.d(t, "a", (function () {
                    return n
                }))
            }, 1: function (e, t, s) {
                "use strict";
                e.exports = function (e) {
                    var t = [];
                    return t.toString = function () {
                        return this.map((function (t) {
                            var s = function (e, t) {
                                var s, n, a, o = e[1] || "", r = e[3];
                                if (!r) return o;
                                if (t && "function" == typeof btoa) {
                                    var i = (s = r, n = btoa(unescape(encodeURIComponent(JSON.stringify(s)))), a = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n), "/*# ".concat(a, " */")),
                                        c = r.sources.map((function (e) {
                                            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */")
                                        }));
                                    return [o].concat(c).concat([i]).join("\n")
                                }
                                return [o].join("\n")
                            }(t, e);
                            return t[2] ? "@media ".concat(t[2], " {").concat(s, "}") : s
                        })).join("")
                    }, t.i = function (e, s, n) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        var a = {};
                        if (n) for (var o = 0; o < this.length; o++) {
                            var r = this[o][0];
                            null != r && (a[r] = !0)
                        }
                        for (var i = 0; i < e.length; i++) {
                            var c = [].concat(e[i]);
                            n && a[c[0]] || (s && (c[2] ? c[2] = "".concat(s, " and ").concat(c[2]) : c[2] = s), t.push(c))
                        }
                    }, t
                }
            }, 103: function (e, t, s) {
                var n = s(225);
                "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("77494b70", n, !0, {})
            }, 14: function (e, t) {
                e.exports = s(259)
            }, 180: function (e, t, s) {
                "use strict";
                s.r(t);
                var n = s(14), a = s(6), o = {
                    directives: {ClickOutside: n.directive},
                    props: {title: {type: String, required: !1, default: Object(a.b)("Settings")}},
                    data: function () {
                        return {open: !1}
                    },
                    methods: {
                        toggleMenu: function () {
                            this.open = !this.open
                        }, closeMenu: function () {
                            this.open = !1
                        }
                    }
                }, r = (s(224), s(0)), i = Object(r.a)(o, (function () {
                    var e = this, t = e.$createElement, s = e._self._c || t;
                    return s("div", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: e.closeMenu,
                            expression: "closeMenu"
                        }], class: {open: e.open}, attrs: {id: "app-settings"}
                    }, [s("div", {attrs: {id: "app-settings-header"}}, [s("button", {
                        staticClass: "settings-button",
                        on: {click: e.toggleMenu}
                    }, [e._v("\n\t\t\t" + e._s(e.title) + "\n\t\t")])]), e._v(" "), s("transition", {attrs: {name: "slide-up"}}, [s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.open,
                            expression: "open"
                        }], attrs: {id: "app-settings-content"}
                    }, [e._t("default")], 2)])], 1)
                }), [], !1, null, "0af177d6", null).exports;
                t.default = i
            }, 2: function (e, t, s) {
                "use strict";

                function n(e, t) {
                    for (var s = [], n = {}, a = 0; a < t.length; a++) {
                        var o = t[a], r = o[0], i = {id: e + ":" + a, css: o[1], media: o[2], sourceMap: o[3]};
                        n[r] ? n[r].parts.push(i) : s.push(n[r] = {id: r, parts: [i]})
                    }
                    return s
                }

                s.r(t), s.d(t, "default", (function () {
                    return d
                }));
                var a = "undefined" != typeof document;
                if ("undefined" != typeof DEBUG && DEBUG && !a) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
                var o = {}, r = a && (document.head || document.getElementsByTagName("head")[0]), i = null, c = 0,
                    l = !1, m = function () {
                    }, A = null,
                    u = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

                function d(e, t, s, a) {
                    l = s, A = a || {};
                    var r = n(e, t);
                    return g(r), function (t) {
                        for (var s = [], a = 0; a < r.length; a++) {
                            var i = r[a];
                            (c = o[i.id]).refs--, s.push(c)
                        }
                        for (t ? g(r = n(e, t)) : r = [], a = 0; a < s.length; a++) {
                            var c;
                            if (0 === (c = s[a]).refs) {
                                for (var l = 0; l < c.parts.length; l++) c.parts[l]();
                                delete o[c.id]
                            }
                        }
                    }
                }

                function g(e) {
                    for (var t = 0; t < e.length; t++) {
                        var s = e[t], n = o[s.id];
                        if (n) {
                            n.refs++;
                            for (var a = 0; a < n.parts.length; a++) n.parts[a](s.parts[a]);
                            for (; a < s.parts.length; a++) n.parts.push(f(s.parts[a]));
                            n.parts.length > s.parts.length && (n.parts.length = s.parts.length)
                        } else {
                            var r = [];
                            for (a = 0; a < s.parts.length; a++) r.push(f(s.parts[a]));
                            o[s.id] = {id: s.id, refs: 1, parts: r}
                        }
                    }
                }

                function p() {
                    var e = document.createElement("style");
                    return e.type = "text/css", r.appendChild(e), e
                }

                function f(e) {
                    var t, s, n = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
                    if (n) {
                        if (l) return m;
                        n.parentNode.removeChild(n)
                    }
                    if (u) {
                        var a = c++;
                        n = i || (i = p()), t = M.bind(null, n, a, !1), s = M.bind(null, n, a, !0)
                    } else n = p(), t = b.bind(null, n), s = function () {
                        n.parentNode.removeChild(n)
                    };
                    return t(e), function (n) {
                        if (n) {
                            if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                            t(e = n)
                        } else s()
                    }
                }

                var v, h = (v = [], function (e, t) {
                    return v[e] = t, v.filter(Boolean).join("\n")
                });

                function M(e, t, s, n) {
                    var a = s ? "" : n.css;
                    if (e.styleSheet) e.styleSheet.cssText = h(t, a); else {
                        var o = document.createTextNode(a), r = e.childNodes;
                        r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(o, r[t]) : e.appendChild(o)
                    }
                }

                function b(e, t) {
                    var s = t.css, n = t.media, a = t.sourceMap;
                    if (n && e.setAttribute("media", n), A.ssrId && e.setAttribute("data-vue-ssr-id", t.id), a && (s += "\n/*# sourceURL=" + a.sources[0] + " */", s += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"), e.styleSheet) e.styleSheet.cssText = s; else {
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(s))
                    }
                }
            }, 22: function (e, t) {
                e.exports = s(260)
            }, 224: function (e, t, s) {
                "use strict";
                var n = s(103);
                s.n(n).a
            }, 225: function (e, t, s) {
                (t = s(1)(!1)).push([e.i, "#app-settings-content[data-v-0af177d6]{display:block;padding:10px;background-color:var(--color-main-background);max-height:300px;overflow-y:auto;box-sizing:border-box}.slide-up-leave-active[data-v-0af177d6],.slide-up-enter-active[data-v-0af177d6]{transition-duration:var(--animation-slow);transition-property:max-height, padding;overflow-y:hidden !important}.slide-up-enter[data-v-0af177d6],.slide-up-leave-to[data-v-0af177d6]{max-height:0 !important;padding:0 10px !important}\n", ""]), e.exports = t
            }, 27: function (e, t) {
                e.exports = s(261)
            }, 6: function (e, t, s) {
                "use strict";
                s.d(t, "b", (function () {
                    return i
                })), s.d(t, "a", (function () {
                    return r
                })), s(22);
                var n = s(27), a = Object(n.getGettextBuilder)().detectLocale();
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
                    return a.addTranslation(e.locale, e.json)
                }));
                var o = a.build(), r = o.ngettext.bind(o), i = o.gettext.bind(o)
            }
        })
    }, 674: function (e, t, s) {
        window, e.exports = function (e) {
            var t = {};

            function s(n) {
                if (t[n]) return t[n].exports;
                var a = t[n] = {i: n, l: !1, exports: {}};
                return e[n].call(a.exports, a, a.exports, s), a.l = !0, a.exports
            }

            return s.m = e, s.c = t, s.d = function (e, t, n) {
                s.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
            }, s.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
            }, s.t = function (e, t) {
                if (1 & t && (e = s(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (s.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e) for (var a in e) s.d(n, a, function (t) {
                    return e[t]
                }.bind(null, a));
                return n
            }, s.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return s.d(t, "a", t), t
            }, s.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, s.p = "/dist/", s(s.s = 114)
        }([function (e, t, s) {
            "use strict";

            function n(e, t, s, n, a, o, r, i) {
                var c, l = "function" == typeof e ? e.options : e;
                if (t && (l.render = t, l.staticRenderFns = s, l._compiled = !0), n && (l.functional = !0), o && (l._scopeId = "data-v-" + o), r ? (c = function (e) {
                    (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), a && a.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r)
                }, l._ssrRegister = c) : a && (c = i ? function () {
                    a.call(this, this.$root.$options.shadowRoot)
                } : a), c) if (l.functional) {
                    l._injectStyles = c;
                    var m = l.render;
                    l.render = function (e, t) {
                        return c.call(t), m(e, t)
                    }
                } else {
                    var A = l.beforeCreate;
                    l.beforeCreate = A ? [].concat(A, c) : [c]
                }
                return {exports: e, options: l}
            }

            s.d(t, "a", (function () {
                return n
            }))
        }, function (e, t, s) {
            "use strict";
            e.exports = function (e) {
                var t = [];
                return t.toString = function () {
                    return this.map((function (t) {
                        var s = function (e, t) {
                            var s, n, a, o = e[1] || "", r = e[3];
                            if (!r) return o;
                            if (t && "function" == typeof btoa) {
                                var i = (s = r, n = btoa(unescape(encodeURIComponent(JSON.stringify(s)))), a = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n), "/*# ".concat(a, " */")),
                                    c = r.sources.map((function (e) {
                                        return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */")
                                    }));
                                return [o].concat(c).concat([i]).join("\n")
                            }
                            return [o].join("\n")
                        }(t, e);
                        return t[2] ? "@media ".concat(t[2], " {").concat(s, "}") : s
                    })).join("")
                }, t.i = function (e, s, n) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    var a = {};
                    if (n) for (var o = 0; o < this.length; o++) {
                        var r = this[o][0];
                        null != r && (a[r] = !0)
                    }
                    for (var i = 0; i < e.length; i++) {
                        var c = [].concat(e[i]);
                        n && a[c[0]] || (s && (c[2] ? c[2] = "".concat(s, " and ").concat(c[2]) : c[2] = s), t.push(c))
                    }
                }, t
            }
        }, function (e, t, s) {
            "use strict";

            function n(e, t) {
                for (var s = [], n = {}, a = 0; a < t.length; a++) {
                    var o = t[a], r = o[0], i = {id: e + ":" + a, css: o[1], media: o[2], sourceMap: o[3]};
                    n[r] ? n[r].parts.push(i) : s.push(n[r] = {id: r, parts: [i]})
                }
                return s
            }

            s.r(t), s.d(t, "default", (function () {
                return d
            }));
            var a = "undefined" != typeof document;
            if ("undefined" != typeof DEBUG && DEBUG && !a) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
            var o = {}, r = a && (document.head || document.getElementsByTagName("head")[0]), i = null, c = 0, l = !1,
                m = function () {
                }, A = null,
                u = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

            function d(e, t, s, a) {
                l = s, A = a || {};
                var r = n(e, t);
                return g(r), function (t) {
                    for (var s = [], a = 0; a < r.length; a++) {
                        var i = r[a];
                        (c = o[i.id]).refs--, s.push(c)
                    }
                    for (t ? g(r = n(e, t)) : r = [], a = 0; a < s.length; a++) {
                        var c;
                        if (0 === (c = s[a]).refs) {
                            for (var l = 0; l < c.parts.length; l++) c.parts[l]();
                            delete o[c.id]
                        }
                    }
                }
            }

            function g(e) {
                for (var t = 0; t < e.length; t++) {
                    var s = e[t], n = o[s.id];
                    if (n) {
                        n.refs++;
                        for (var a = 0; a < n.parts.length; a++) n.parts[a](s.parts[a]);
                        for (; a < s.parts.length; a++) n.parts.push(f(s.parts[a]));
                        n.parts.length > s.parts.length && (n.parts.length = s.parts.length)
                    } else {
                        var r = [];
                        for (a = 0; a < s.parts.length; a++) r.push(f(s.parts[a]));
                        o[s.id] = {id: s.id, refs: 1, parts: r}
                    }
                }
            }

            function p() {
                var e = document.createElement("style");
                return e.type = "text/css", r.appendChild(e), e
            }

            function f(e) {
                var t, s, n = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
                if (n) {
                    if (l) return m;
                    n.parentNode.removeChild(n)
                }
                if (u) {
                    var a = c++;
                    n = i || (i = p()), t = M.bind(null, n, a, !1), s = M.bind(null, n, a, !0)
                } else n = p(), t = b.bind(null, n), s = function () {
                    n.parentNode.removeChild(n)
                };
                return t(e), function (n) {
                    if (n) {
                        if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                        t(e = n)
                    } else s()
                }
            }

            var v, h = (v = [], function (e, t) {
                return v[e] = t, v.filter(Boolean).join("\n")
            });

            function M(e, t, s, n) {
                var a = s ? "" : n.css;
                if (e.styleSheet) e.styleSheet.cssText = h(t, a); else {
                    var o = document.createTextNode(a), r = e.childNodes;
                    r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(o, r[t]) : e.appendChild(o)
                }
            }

            function b(e, t) {
                var s = t.css, n = t.media, a = t.sourceMap;
                if (n && e.setAttribute("media", n), A.ssrId && e.setAttribute("data-vue-ssr-id", t.id), a && (s += "\n/*# sourceURL=" + a.sources[0] + " */", s += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"), e.styleSheet) e.styleSheet.cssText = s; else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(s))
                }
            }
        }, function (e, t) {
            e.exports = s(143)
        }, function (e, t) {
            e.exports = s(68)
        }, , function (e, t, s) {
            "use strict";
            s.d(t, "b", (function () {
                return i
            })), s.d(t, "a", (function () {
                return r
            })), s(22);
            var n = s(27), a = Object(n.getGettextBuilder)().detectLocale();
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
                return a.addTranslation(e.locale, e.json)
            }));
            var o = a.build(), r = o.ngettext.bind(o), i = o.gettext.bind(o)
        }, function (e, t, s) {
            "use strict";
            e.exports = function (e, t) {
                return t || (t = {}), "string" != typeof (e = e && e.__esModule ? e.default : e) ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
            }
        }, function (e, t, s) {
            "use strict";
            s.r(t), t.default = "data:application/vnd.ms-fontobject;base64,0gsAAAgLAAABAAIAAAAAAAIABQMAAAAAAAABQJABAAAAAExQAAAAABAAAAAAAAAAAAAAAAAAAAEAAAAAoXF6QAAAAAAAAAAAAAAAAAAAAAAAACgAAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQAAAAAAABYAAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAAKAAAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAAAAAAABAAAACgCAAAMAIE9TLzJ044+XAAAArAAAAGBjbWFwAA3rtAAAAQwAAAFCZ2x5ZvUXrnQAAAJQAAAEhGhlYWQnxdiqAAAG1AAAADZoaGVhJxwThQAABwwAAAAkaG10eGfe//8AAAcwAAAALGxvY2EHbghGAAAHXAAAACBtYXhwARwAVwAAB3wAAAAgbmFtZaKxgpwAAAecAAACpnBvc3TmiVqMAAAKRAAAAMQABBKUAZAABQAADGUNrAAAArwMZQ2sAAAJYAD1BQoAAAIABQMAAAAAAAAAAAAAEAAAAAAAAAAAAAAAUGZFZABA6gHqDhOIAAABwhOIAAAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQAAAAAAPAADAAEAAAAcAAQAIAAAAAQABAABAADqDv//AADqAf//FgAAAQAAAAAAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAOpg9DAAUACwAACQIRCQQRCQEOpvqCBX77ugRG+oL6ggV++7oERg9C+oL6ggE4BEYERgE4+oL6ggE4BEYERgABAAAAAA1uElAABQAACQERCQERBhsHU/d0CIwJxPit/sgIiwiM/scAAgAAAAAP3w9DAAUACwAACQIRCQQRCQEE4gV++oIERvu6BX4Ff/qBBEb7ugRGBX4Ffv7I+7r7uv7IBX4Ffv7I+7r7ugABAAAAAA6mElAABQAACQERCQERDW74rQiL93UJxAdTATn3dPd1ATgAAQAAAAAGNxOIAAUAABMHCQEXAZSUBXL6jpQFoxOIVfaR9pFVCcQAAAEAAAAAEYcPgwAFAAAJBQ/N9/P7+/5GBb8Jxw+D9/MEBf5H+kEJxgABAAAAABEXERcACwAACQsRF/3t+sD6wP3tBUD6wAITBUAFQAIT+sAEhP3tBUD6wAITBUAFQAIT+sAFQP3t+sAAAf//AAATkxLsADMAAAEiBw4BFxYXASEmBwYHBgcGFBcWFxYXFjchAQYHBhcWFx4BFxYXFjc2NwE2NzYnJicBLgEKYGVPSkYQEkgF1/HgTT46KScUFBQUJyk6Pk0OIPopNxoYAwMbGVY1Nzs+Oj81B+07FRUUFTz4Eyx0Euw5NKxZYEf6KgEbGC4sOTh4ODksLhgbAvopNT87Pjo3NlYZGgMDGBk4B+w8UVBPUjwH7C0yAAAAAgAAAAAOphJQABgARgAAASIHDgEHBhQXHgEXFjI3PgE3NjQnLgEnJgEiBwYHBhQXFhcWMyERISIHBgcGFBcWFxY3ITI3Njc2NCcmJyYjIRE0JyYnJiMJdm9mYpgpKyspmGJm3mZilyorKyqXYmb8NlZIRykrKylHSFYCcf2PVkhHKSsrKUdIVgdTVUhHKSsrKUdIVf2PKylHSVUSUCsql2Nl32VimCkrKymYYmXfZWOXKiv55SspR0irSEcpK/nmKylHSapJRykrASopR0mqSUcpKwdTVUhHKSsAAAMAAAAAERcRFwADAAcACwAAAREhEQERIREBESERAnEOpvFaDqbxWg6mERf9jwJx+eb9jwJx+eX9jwJxAAMAAAAAEp4L5wAYADEASgAAATIXHgEXFhQHDgEHBiInLgEnJjQ3PgE3NiEyFx4BFxYUBw4BBwYiJy4BJyY0Nz4BNzYhMhceARcWFAcOAQcGIicuAScmNDc+ATc2Aw1wZWKYKSsrKZhiZd9mYpcqKysql2JmByZvZmKXKisrKpdiZt5mYpcqKysql2JmByZvZmKXKisrKpdiZt9lYpgpKyspmGJlC+crKpdiZt5mYpcqKysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKysql2Jm3mZilyorKyqXYmbeZmKXKisAAAAAAgAAAAAP3w/fAAMABwAAAREhESERIREDqgTiAnEE4g/f88sMNfPLDDUAAAABAAAAABEXERcAAgAACQICcQ6m8VoRF/it+K0AAQAAAAAOpgw1AAIAAAkCBOIE4gTiDDX7HgTgAAEAAAABAABAenGhXw889QALE4gAAAAA2rMoTgAAAADaYkxP//8AABOTE4gAAAAIAAIAAAAAAAAAAQAAE4gAAAAAE4j////1E5MAAQAAAAAAAAAAAAAAAAAAAAcAAAAAE4gAABOIAAATiAAAE4gAAAY2AAATiAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAIgA2AFgAbACAAJQAtAEOAXwBmgIQAiYCNAJCAAEAAAAPAEsAAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAAAQAMYAAQAAAAAAAQAUAAAAAQAAAAAAAgAHABQAAQAAAAAAAwAUABsAAQAAAAAABAAUAC8AAQAAAAAABQALAEMAAQAAAAAABgAUAE4AAQAAAAAACgArAGIAAQAAAAAACwATAI0AAwABBAkAAQAoAKAAAwABBAkAAgAOAMgAAwABBAkAAwAoANYAAwABBAkABAAoAP4AAwABBAkABQAWASYAAwABBAkABgAoATwAAwABBAkACgBWAWQAAwABBAkACwAmAbppY29uZm9udC12dWUtZTFmNTVjZVJlZ3VsYXJpY29uZm9udC12dWUtZTFmNTVjZWljb25mb250LXZ1ZS1lMWY1NWNlVmVyc2lvbiAxLjBpY29uZm9udC12dWUtZTFmNTVjZUdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQBSAGUAZwB1AGwAYQByAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQBpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQAtAGUAMQBmADUANQBjAGUAVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAACAAAAAAAAADIAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAA8AAAECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8RYXJyb3ctbGVmdC1kb3VibGUKYXJyb3ctbGVmdBJhcnJvdy1yaWdodC1kb3VibGULYXJyb3ctcmlnaHQKYnJlYWRjcnVtYgljaGVja21hcmsFY2xvc2UHY29uZmlybQRpbmZvBG1lbnUEbW9yZQVwYXVzZQRwbGF5CnRyaWFuZ2xlLXM="
        }, function (e, t, s) {
            "use strict";
            s.r(t), t.default = "data:font/woff;base64,d09GRgABAAAAAAtQAAoAAAAACwgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAAA9AAAAGAAAABgdOOPl2NtYXAAAAFUAAABQgAAAUIADeu0Z2x5ZgAAApgAAASEAAAEhPUXrnRoZWFkAAAHHAAAADYAAAA2J8XYqmhoZWEAAAdUAAAAJAAAACQnHBOFaG10eAAAB3gAAAAsAAAALGfe//9sb2NhAAAHpAAAACAAAAAgB24IRm1heHAAAAfEAAAAIAAAACABHABXbmFtZQAAB+QAAAKmAAACpqKxgpxwb3N0AAAKjAAAAMQAAADE5olajAAEEpQBkAAFAAAMZQ2sAAACvAxlDawAAAlgAPUFCgAAAgAFAwAAAAAAAAAAAAAQAAAAAAAAAAAAAABQZkVkAEDqAeoOE4gAAAHCE4gAAAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAAAAAA8AAMAAQAAABwABAAgAAAABAAEAAEAAOoO//8AAOoB//8WAAABAAAAAAAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAA6mD0MABQALAAAJAhEJBBEJAQ6m+oIFfvu6BEb6gvqCBX77ugRGD0L6gvqCATgERgRGATj6gvqCATgERgRGAAEAAAAADW4SUAAFAAAJAREJAREGGwdT93QIjAnE+K3+yAiLCIz+xwACAAAAAA/fD0MABQALAAAJAhEJBBEJAQTiBX76ggRG+7oFfgV/+oEERvu6BEYFfgV+/sj7uvu6/sgFfgV+/sj7uvu6AAEAAAAADqYSUAAFAAAJAREJARENbvitCIv3dQnEB1MBOfd093UBOAABAAAAAAY3E4gABQAAEwcJARcBlJQFcvqOlAWjE4hV9pH2kVUJxAAAAQAAAAARhw+DAAUAAAkFD8338/v7/kYFvwnHD4P38wQF/kf6QQnGAAEAAAAAERcRFwALAAAJCxEX/e36wPrA/e0FQPrAAhMFQAVAAhP6wASE/e0FQPrAAhMFQAVAAhP6wAVA/e36wAAB//8AABOTEuwAMwAAASIHDgEXFhcBISYHBgcGBwYUFxYXFhcWNyEBBgcGFxYXHgEXFhcWNzY3ATY3NicmJwEuAQpgZU9KRhASSAXX8eBNPjopJxQUFBQnKTo+TQ4g+ik3GhgDAxsZVjU3Oz46PzUH7TsVFRQVPPgTLHQS7Dk0rFlgR/oqARsYLiw5OHg4OSwuGBsC+ik1Pzs+Ojc2VhkaAwMYGTgH7DxRUE9SPAfsLTIAAAACAAAAAA6mElAAGABGAAABIgcOAQcGFBceARcWMjc+ATc2NCcuAScmASIHBgcGFBcWFxYzIREhIgcGBwYUFxYXFjchMjc2NzY0JyYnJiMhETQnJicmIwl2b2ZimCkrKymYYmbeZmKXKisrKpdiZvw2VkhHKSsrKUdIVgJx/Y9WSEcpKyspR0hWB1NVSEcpKyspR0hV/Y8rKUdJVRJQKyqXY2XfZWKYKSsrKZhiZd9lY5cqK/nlKylHSKtIRykr+eYrKUdJqklHKSsBKilHSapJRykrB1NVSEcpKwAAAwAAAAARFxEXAAMABwALAAABESERAREhEQERIRECcQ6m8VoOpvFaDqYRF/2PAnH55v2PAnH55f2PAnEAAwAAAAASngvnABgAMQBKAAABMhceARcWFAcOAQcGIicuAScmNDc+ATc2ITIXHgEXFhQHDgEHBiInLgEnJjQ3PgE3NiEyFx4BFxYUBw4BBwYiJy4BJyY0Nz4BNzYDDXBlYpgpKyspmGJl32ZilyorKyqXYmYHJm9mYpcqKysql2Jm3mZilyorKyqXYmYHJm9mYpcqKysql2Jm32VimCkrKymYYmUL5ysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKwAAAAACAAAAAA/fD98AAwAHAAABESERIREhEQOqBOICcQTiD9/zyww188sMNQAAAAEAAAAAERcRFwACAAAJAgJxDqbxWhEX+K34rQABAAAAAA6mDDUAAgAACQIE4gTiBOIMNfseBOAAAQAAAAEAAEB6caFfDzz1AAsTiAAAAADasyhOAAAAANpiTE///wAAE5MTiAAAAAgAAgAAAAAAAAABAAATiAAAAAATiP////UTkwABAAAAAAAAAAAAAAAAAAAABwAAAAATiAAAE4gAABOIAAATiAAABjYAABOIAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAiADYAWABsAIAAlAC0AQ4BfAGaAhACJgI0AkIAAQAAAA8ASwADAAAAAAACAAAACgAKAAAA/wAAAAAAAAAAABAAxgABAAAAAAABABQAAAABAAAAAAACAAcAFAABAAAAAAADABQAGwABAAAAAAAEABQALwABAAAAAAAFAAsAQwABAAAAAAAGABQATgABAAAAAAAKACsAYgABAAAAAAALABMAjQADAAEECQABACgAoAADAAEECQACAA4AyAADAAEECQADACgA1gADAAEECQAEACgA/gADAAEECQAFABYBJgADAAEECQAGACgBPAADAAEECQAKAFYBZAADAAEECQALACYBumljb25mb250LXZ1ZS1lMWY1NWNlUmVndWxhcmljb25mb250LXZ1ZS1lMWY1NWNlaWNvbmZvbnQtdnVlLWUxZjU1Y2VWZXJzaW9uIDEuMGljb25mb250LXZ1ZS1lMWY1NWNlR2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20AaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQBWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAIAAAAAAAAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAA8ADwAAAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDxFhcnJvdy1sZWZ0LWRvdWJsZQphcnJvdy1sZWZ0EmFycm93LXJpZ2h0LWRvdWJsZQthcnJvdy1yaWdodApicmVhZGNydW1iCWNoZWNrbWFyawVjbG9zZQdjb25maXJtBGluZm8EbWVudQRtb3JlBXBhdXNlBHBsYXkKdHJpYW5nbGUtcw=="
        }, function (e, t, s) {
            "use strict";
            s.r(t), t.default = "data:font/ttf;base64,AAEAAAAKAIAAAwAgT1MvMnTjj5cAAACsAAAAYGNtYXAADeu0AAABDAAAAUJnbHlm9ReudAAAAlAAAASEaGVhZCfF2KoAAAbUAAAANmhoZWEnHBOFAAAHDAAAACRobXR4Z97//wAABzAAAAAsbG9jYQduCEYAAAdcAAAAIG1heHABHABXAAAHfAAAACBuYW1lorGCnAAAB5wAAAKmcG9zdOaJWowAAApEAAAAxAAEEpQBkAAFAAAMZQ2sAAACvAxlDawAAAlgAPUFCgAAAgAFAwAAAAAAAAAAAAAQAAAAAAAAAAAAAABQZkVkAEDqAeoOE4gAAAHCE4gAAAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAAAAAA8AAMAAQAAABwABAAgAAAABAAEAAEAAOoO//8AAOoB//8WAAABAAAAAAAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAA6mD0MABQALAAAJAhEJBBEJAQ6m+oIFfvu6BEb6gvqCBX77ugRGD0L6gvqCATgERgRGATj6gvqCATgERgRGAAEAAAAADW4SUAAFAAAJAREJAREGGwdT93QIjAnE+K3+yAiLCIz+xwACAAAAAA/fD0MABQALAAAJAhEJBBEJAQTiBX76ggRG+7oFfgV/+oEERvu6BEYFfgV+/sj7uvu6/sgFfgV+/sj7uvu6AAEAAAAADqYSUAAFAAAJAREJARENbvitCIv3dQnEB1MBOfd093UBOAABAAAAAAY3E4gABQAAEwcJARcBlJQFcvqOlAWjE4hV9pH2kVUJxAAAAQAAAAARhw+DAAUAAAkFD8338/v7/kYFvwnHD4P38wQF/kf6QQnGAAEAAAAAERcRFwALAAAJCxEX/e36wPrA/e0FQPrAAhMFQAVAAhP6wASE/e0FQPrAAhMFQAVAAhP6wAVA/e36wAAB//8AABOTEuwAMwAAASIHDgEXFhcBISYHBgcGBwYUFxYXFhcWNyEBBgcGFxYXHgEXFhcWNzY3ATY3NicmJwEuAQpgZU9KRhASSAXX8eBNPjopJxQUFBQnKTo+TQ4g+ik3GhgDAxsZVjU3Oz46PzUH7TsVFRQVPPgTLHQS7Dk0rFlgR/oqARsYLiw5OHg4OSwuGBsC+ik1Pzs+Ojc2VhkaAwMYGTgH7DxRUE9SPAfsLTIAAAACAAAAAA6mElAAGABGAAABIgcOAQcGFBceARcWMjc+ATc2NCcuAScmASIHBgcGFBcWFxYzIREhIgcGBwYUFxYXFjchMjc2NzY0JyYnJiMhETQnJicmIwl2b2ZimCkrKymYYmbeZmKXKisrKpdiZvw2VkhHKSsrKUdIVgJx/Y9WSEcpKyspR0hWB1NVSEcpKyspR0hV/Y8rKUdJVRJQKyqXY2XfZWKYKSsrKZhiZd9lY5cqK/nlKylHSKtIRykr+eYrKUdJqklHKSsBKilHSapJRykrB1NVSEcpKwAAAwAAAAARFxEXAAMABwALAAABESERAREhEQERIRECcQ6m8VoOpvFaDqYRF/2PAnH55v2PAnH55f2PAnEAAwAAAAASngvnABgAMQBKAAABMhceARcWFAcOAQcGIicuAScmNDc+ATc2ITIXHgEXFhQHDgEHBiInLgEnJjQ3PgE3NiEyFx4BFxYUBw4BBwYiJy4BJyY0Nz4BNzYDDXBlYpgpKyspmGJl32ZilyorKyqXYmYHJm9mYpcqKysql2Jm3mZilyorKyqXYmYHJm9mYpcqKysql2Jm32VimCkrKymYYmUL5ysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKwAAAAACAAAAAA/fD98AAwAHAAABESERIREhEQOqBOICcQTiD9/zyww188sMNQAAAAEAAAAAERcRFwACAAAJAgJxDqbxWhEX+K34rQABAAAAAA6mDDUAAgAACQIE4gTiBOIMNfseBOAAAQAAAAEAAEB6caFfDzz1AAsTiAAAAADasyhOAAAAANpiTE///wAAE5MTiAAAAAgAAgAAAAAAAAABAAATiAAAAAATiP////UTkwABAAAAAAAAAAAAAAAAAAAABwAAAAATiAAAE4gAABOIAAATiAAABjYAABOIAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAiADYAWABsAIAAlAC0AQ4BfAGaAhACJgI0AkIAAQAAAA8ASwADAAAAAAACAAAACgAKAAAA/wAAAAAAAAAAABAAxgABAAAAAAABABQAAAABAAAAAAACAAcAFAABAAAAAAADABQAGwABAAAAAAAEABQALwABAAAAAAAFAAsAQwABAAAAAAAGABQATgABAAAAAAAKACsAYgABAAAAAAALABMAjQADAAEECQABACgAoAADAAEECQACAA4AyAADAAEECQADACgA1gADAAEECQAEACgA/gADAAEECQAFABYBJgADAAEECQAGACgBPAADAAEECQAKAFYBZAADAAEECQALACYBumljb25mb250LXZ1ZS1lMWY1NWNlUmVndWxhcmljb25mb250LXZ1ZS1lMWY1NWNlaWNvbmZvbnQtdnVlLWUxZjU1Y2VWZXJzaW9uIDEuMGljb25mb250LXZ1ZS1lMWY1NWNlR2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20AaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQBWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAIAAAAAAAAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAA8ADwAAAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDxFhcnJvdy1sZWZ0LWRvdWJsZQphcnJvdy1sZWZ0EmFycm93LXJpZ2h0LWRvdWJsZQthcnJvdy1yaWdodApicmVhZGNydW1iCWNoZWNrbWFyawVjbG9zZQdjb25maXJtBGluZm8EbWVudQRtb3JlBXBhdXNlBHBsYXkKdHJpYW5nbGUtcw=="
        }, function (e, t, s) {
            "use strict";
            s.r(t), t.default = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bWV0YWRhdGE+PC9tZXRhZGF0YT48ZGVmcz48Zm9udCBpZD0iaWNvbmZvbnQtdnVlLWUxZjU1Y2UiIGhvcml6LWFkdi14PSI1MDAwIj48Zm9udC1mYWNlIGZvbnQtZmFtaWx5PSJpY29uZm9udC12dWUtZTFmNTVjZSIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1zdHJldGNoPSJub3JtYWwiIHVuaXRzLXBlci1lbT0iNTAwMCIgcGFub3NlLTE9IjIgMCA1IDMgMCAwIDAgMCAwIDAiIGFzY2VudD0iNTAwMCIgZGVzY2VudD0iMCIgeC1oZWlnaHQ9IjAiIGJib3g9Ii0xIDAgNTAxMSA1MDAwIiB1bmRlcmxpbmUtdGhpY2tuZXNzPSIwIiB1bmRlcmxpbmUtcG9zaXRpb249IjUwIiB1bmljb2RlLXJhbmdlPSJVK2VhMDEtZWEwZSIgLz48bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMCIgIC8+PGdseXBoIGdseXBoLW5hbWU9ImFycm93LWxlZnQtZG91YmxlIiB1bmljb2RlPSImI3hlYTAxOyIgZD0iTTM3NTAgMzkwNiBsLTE0MDYgLTE0MDYgbDE0MDYgLTE0MDYgbDAgMzEyIGwtMTA5NCAxMDk0IGwxMDk0IDEwOTQgbDAgMzEyIFpNMjM0NCAzOTA2IGwtMTQwNiAtMTQwNiBsMTQwNiAtMTQwNiBsMCAzMTIgbC0xMDk0IDEwOTQgbDEwOTQgMTA5NCBsMCAzMTIgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iYXJyb3ctbGVmdCIgdW5pY29kZT0iJiN4ZWEwMjsiIGQ9Ik0xNTYzIDI1MDAgbDE4NzUgLTE4NzUgbDAgLTMxMiBsLTIxODggMjE4NyBsMjE4OCAyMTg4IGwwIC0zMTMgbC0xODc1IC0xODc1IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImFycm93LXJpZ2h0LWRvdWJsZSIgdW5pY29kZT0iJiN4ZWEwMzsiIGQ9Ik0xMjUwIDEwOTQgbDE0MDYgMTQwNiBsLTE0MDYgMTQwNiBsMCAtMzEyIGwxMDk0IC0xMDk0IGwtMTA5NCAtMTA5NCBsMCAtMzEyIFpNMjY1NiAxMDk0IGwxNDA3IDE0MDYgbC0xNDA3IDE0MDYgbDAgLTMxMiBsMTA5NCAtMTA5NCBsLTEwOTQgLTEwOTQgbDAgLTMxMiBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJhcnJvdy1yaWdodCIgdW5pY29kZT0iJiN4ZWEwNDsiIGQ9Ik0zNDM4IDI1MDAgbC0xODc1IDE4NzUgbDAgMzEzIGwyMTg3IC0yMTg4IGwtMjE4NyAtMjE4NyBsMCAzMTIgbDE4NzUgMTg3NSBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJicmVhZGNydW1iIiB1bmljb2RlPSImI3hlYTA1OyIgZD0iTTE0OCA1MDAwIGwtMTQ4IC04NSBsMTM5NCAtMjQxNSBsLTEzOTQgLTI0MTUgbDE0OCAtODUgbDE0NDMgMjUwMCBsLTE0NDMgMjUwMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJjaGVja21hcmsiIHVuaWNvZGU9IiYjeGVhMDY7IiBkPSJNNDA0NSAzOTcxIGwtMjA2MSAtMjA2MSBsLTEwMjkgMTAyOSBsLTQ0MiAtNDQxIGwxNDcxIC0xNDcxIGwyNTAzIDI1MDIgbC00NDIgNDQyIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImNsb3NlIiB1bmljb2RlPSImI3hlYTA3OyIgZD0iTTQzNzUgMTE1NiBsLTUzMSAtNTMxIGwtMTM0NCAxMzQ0IGwtMTM0NCAtMTM0NCBsLTUzMSA1MzEgbDEzNDQgMTM0NCBsLTEzNDQgMTM0NCBsNTMxIDUzMSBsMTM0NCAtMTM0NCBsMTM0NCAxMzQ0IGw1MzEgLTUzMSBsLTEzNDQgLTEzNDQgbDEzNDQgLTEzNDQgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iY29uZmlybSIgdW5pY29kZT0iJiN4ZWEwODsiIGQ9Ik0yNjU2IDQ4NDQgcS0xMDEgMCAtMTgwIC01NyBxLTc0IC01MiAtMTA5IC0xMzggcS0zNSAtODYgLTE5IC0xNzUgcTE4IC05NiA5MCAtMTY3IGwxNDk1IC0xNDk0IGwtMzYxNiAwIHEtNzcgMSAtMTM5IC0yNiBxLTU4IC0yNCAtOTkgLTcwIHEtMzkgLTQ0IC01OSAtMTAxIHEtMjAgLTU2IC0yMCAtMTE2IHEwIC02MCAyMCAtMTE2IHEyMCAtNTcgNTkgLTEwMSBxNDEgLTQ2IDk5IC03MCBxNjIgLTI3IDEzOSAtMjUgbDM2MTYgMCBsLTE0OTUgLTE0OTUgcS01NSAtNTMgLTgxIC0xMTYgcS0yNCAtNTkgLTIxIC0xMjEgcTMgLTU4IDMwIC0xMTMgcTI1IC01NCA2OCAtOTcgcTQzIC00MyA5NiAtNjggcTU1IC0yNiAxMTQgLTI5IHE2MiAtMyAxMjAgMjEgcTYzIDI1IDExNiA4MSBsMjAyOSAyMDI4IHE1OSA2MCA4MCAxNDEgcTIxIDgwIDEgMTU5IHEtMjEgODIgLTgxIDE0MiBsLTIwMjkgMjAyOCBxLTQ0IDQ1IC0xMDIgNzAgcS01OCAyNSAtMTIyIDI1IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImluZm8iIHVuaWNvZGU9IiYjeGVhMDk7IiBkPSJNMjQyMiA0Njg4IHEtMTExIDAgLTIxMyAtNDMgcS05OCAtNDIgLTE3NCAtMTE3LjUgcS03NiAtNzUuNSAtMTE3IC0xNzQuNSBxLTQzIC0xMDEgLTQzIC0yMTIuNSBxMCAtMTExLjUgNDMgLTIxMi41IHE0MSAtOTggMTE3IC0xNzQgcTc2IC03NiAxNzQgLTExNyBxMTAyIC00MyAyMTMgLTQzIHExMTEgMCAyMTMgNDMgcTk4IDQxIDE3My41IDExNyBxNzUuNSA3NiAxMTcuNSAxNzQgcTQzIDEwMSA0MyAyMTIuNSBxMCAxMTEuNSAtNDMgMjEyLjUgcS00MiA5OSAtMTE3LjUgMTc0LjUgcS03NS41IDc1LjUgLTE3My41IDExNy41IHEtMTAyIDQzIC0yMTMgNDMgWk0xNTYzIDMxMjUgcS04NiAwIC0xNTggLTQzIHEtNzEgLTQxIC0xMTIgLTExMiBxLTQzIC03MiAtNDMgLTE1Ny41IHEwIC04NS41IDQzIC0xNTcuNSBxNDEgLTcxIDExMiAtMTEyIHE3MiAtNDMgMTU4IC00MyBsNjI1IDAgbDAgLTE1NjIgbC02MjUgMCBxLTg2IDAgLTE1OCAtNDMgcS03MSAtNDEgLTExMiAtMTEyIHEtNDMgLTczIC00MyAtMTU4IHEwIC04NSA0MyAtMTU4IHE0MSAtNzEgMTEyIC0xMTIgcTcyIC00MyAxNTggLTQyIGwxODc1IDAgcTg1IDAgMTU3IDQyIHE3MSA0MSAxMTIgMTEyIHE0MyA3MyA0MyAxNTggcTAgODUgLTQzIDE1OCBxLTQxIDcxIC0xMTIgMTEyIHEtNzIgNDMgLTE1NyA0MyBsLTYyNSAwIGwwIDE4NzUgcTAgODUgLTQzIDE1NyBxLTQxIDcxIC0xMTIgMTEyIHEtNzMgNDMgLTE1OCA0MyBsLTkzNyAwIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9Im1lbnUiIHVuaWNvZGU9IiYjeGVhMGE7IiBkPSJNNjI1IDQzNzUgbDAgLTYyNSBsMzc1MCAwIGwwIDYyNSBsLTM3NTAgMCBaTTYyNSAyODEzIGwwIC02MjUgbDM3NTAgMCBsMCA2MjUgbC0zNzUwIDAgWk02MjUgMTI1MCBsMCAtNjI1IGwzNzUwIDAgbDAgNjI1IGwtMzc1MCAwIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9Im1vcmUiIHVuaWNvZGU9IiYjeGVhMGI7IiBkPSJNNzgxIDMwNDcgcTExMiAwIDIxMyAtNDMgcTk4IC00MiAxNzQgLTExNy41IHE3NiAtNzUuNSAxMTcgLTE3My41IHE0MyAtMTAyIDQzIC0yMTMgcTAgLTExMSAtNDMgLTIxMyBxLTQxIC05OCAtMTE3IC0xNzMuNSBxLTc2IC03NS41IC0xNzQgLTExNy41IHEtMTAxIC00MyAtMjEyLjUgLTQzIHEtMTExLjUgMCAtMjEzLjUgNDMgcS05OCA0MiAtMTczLjUgMTE3LjUgcS03NS41IDc1LjUgLTExNy41IDE3My41IHEtNDMgMTAyIC00MyAyMTMgcTAgMTExIDQzIDIxMyBxNDIgOTggMTE3LjUgMTczLjUgcTc1LjUgNzUuNSAxNzMuNSAxMTcuNSBxMTAyIDQzIDIxMyA0MyBaTTI1MDAgMzA0NyBxMTExIDAgMjEzIC00MyBxOTggLTQyIDE3My41IC0xMTcuNSBxNzUuNSAtNzUuNSAxMTcuNSAtMTczLjUgcTQzIC0xMDIgNDMgLTIxMyBxMCAtMTExIC00MyAtMjEzIHEtNDIgLTk4IC0xMTcuNSAtMTczLjUgcS03NS41IC03NS41IC0xNzMuNSAtMTE3LjUgcS0xMDIgLTQzIC0yMTMgLTQzIHEtMTExIDAgLTIxMyA0MyBxLTk4IDQyIC0xNzMuNSAxMTcuNSBxLTc1LjUgNzUuNSAtMTE3LjUgMTczLjUgcS00MyAxMDIgLTQzIDIxMyBxMCAxMTEgNDMgMjEzIHE0MiA5OCAxMTcuNSAxNzMuNSBxNzUuNSA3NS41IDE3My41IDExNy41IHExMDIgNDMgMjEzIDQzIFpNNDIxOSAzMDQ3IHExMTEgMCAyMTMgLTQzIHE5OCAtNDIgMTczLjUgLTExNy41IHE3NS41IC03NS41IDExNy41IC0xNzMuNSBxNDMgLTEwMiA0MyAtMjEzIHEwIC0xMTEgLTQzIC0yMTMgcS00MiAtOTggLTExNy41IC0xNzMuNSBxLTc1LjUgLTc1LjUgLTE3My41IC0xMTcuNSBxLTEwMiAtNDMgLTIxMy41IC00MyBxLTExMS41IDAgLTIxMi41IDQzIHEtOTggNDIgLTE3NCAxMTcuNSBxLTc2IDc1LjUgLTExNyAxNzMuNSBxLTQzIDEwMiAtNDMgMjEzIHEwIDExMSA0MyAyMTMgcTQxIDk4IDExNyAxNzMuNSBxNzYgNzUuNSAxNzQgMTE3LjUgcTEwMSA0MyAyMTMgNDMgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0icGF1c2UiIHVuaWNvZGU9IiYjeGVhMGM7IiBkPSJNOTM4IDQwNjMgbDAgLTMxMjUgbDEyNTAgMCBsMCAzMTI1IGwtMTI1MCAwIFpNMjgxMyA0MDYzIGwwIC0zMTI1IGwxMjUwIDAgbDAgMzEyNSBsLTEyNTAgMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJwbGF5IiB1bmljb2RlPSImI3hlYTBkOyIgZD0iTTYyNSA0Mzc1IGwzNzUwIC0xODc1IGwtMzc1MCAtMTg3NSBsMCAzNzUwIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InRyaWFuZ2xlLXMiIHVuaWNvZGU9IiYjeGVhMGU7IiBkPSJNMTI1MCAzMTI1IGwxMjUwIC0xMjUwIGwxMjUwIDEyNDggbC0yNTAwIDIgWiIgLz48L2ZvbnQ+PC9kZWZzPjwvc3ZnPg=="
        }, function (e, t) {
            e.exports = s(255)
        }, function (e, t, s) {
            "use strict";
            s.r(t);
            var n = s(3);
            s(40),
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
                n.VTooltip.options.defaultTemplate = '<div class="vue-tooltip" role="tooltip" data-v-'.concat("e1f55ce", '><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'), n.VTooltip.options.defaultHtml = !1, t.default = n.VTooltip
        }, function (e, t) {
            e.exports = s(259)
        }, function (e, t) {
            e.exports = s(262)
        }, , , function (e, t) {
            e.exports = s(50)
        }, function (e, t) {
            e.exports = s(78)
        }, function (e, t) {
            e.exports = s(141)
        }, function (e, t) {
            e.exports = s(95)
        }, function (e, t) {
            e.exports = s(260)
        }, function (e, t) {
            e.exports = s(164)
        }, function (e, t) {
            e.exports = s(263)
        }, function (e, t) {
            e.exports = s(79)
        }, , function (e, t) {
            e.exports = s(261)
        }, , , function (e, t) {
            e.exports = s(165)
        }, , function (e, t, s) {
            "use strict";
            var n = s(6);
            t.a = {methods: {n: n.a, t: n.b}}
        }, function (e, t) {
            e.exports = s(343)
        }, function (e, t, s) {
            var n = s(73);
            "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("1f2ec49f", n, !0, {})
        }, function (e, t, s) {
            var n = s(75);
            "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("9c561116", n, !0, {})
        }, function (e, t, s) {
            var n = s(77);
            "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("93093140", n, !0, {})
        }, , , function (e, t, s) {
            var n = s(87);
            "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("2e9b7708", n, !0, {})
        }, function (e, t, s) {
            var n = s(41);
            "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("941c791e", n, !0, {})
        }, function (e, t, s) {
            (t = s(1)(!1)).push([e.i, ".vue-tooltip[data-v-e1f55ce]{position:absolute;z-index:100000;right:auto;left:auto;display:block;margin:0;margin-top:-3px;padding:10px 0;text-align:left;text-align:start;white-space:normal;text-decoration:none;letter-spacing:normal;word-spacing:normal;text-transform:none;word-wrap:normal;word-break:normal;opacity:0;text-shadow:none;font-family:'Nunito', 'Open Sans', Frutiger, Calibri, 'Myriad Pro', Myriad, sans-serif;font-size:12px;font-weight:normal;font-style:normal;line-height:1.6;line-break:auto;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.vue-tooltip[data-v-e1f55ce][x-placement^='top'] .tooltip-arrow{bottom:0;margin-top:0;margin-bottom:0;border-width:10px 10px 0 10px;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-e1f55ce][x-placement^='bottom'] .tooltip-arrow{top:0;margin-top:0;margin-bottom:0;border-width:0 10px 10px 10px;border-top-color:transparent;border-right-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-e1f55ce][x-placement^='right'] .tooltip-arrow{right:100%;margin-right:0;margin-left:0;border-width:10px 10px 10px 0;border-top-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-e1f55ce][x-placement^='left'] .tooltip-arrow{left:100%;margin-right:0;margin-left:0;border-width:10px 0 10px 10px;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent}.vue-tooltip[data-v-e1f55ce][aria-hidden='true']{visibility:hidden;transition:opacity .15s, visibility .15s;opacity:0}.vue-tooltip[data-v-e1f55ce][aria-hidden='false']{visibility:visible;transition:opacity .15s;opacity:1}.vue-tooltip[data-v-e1f55ce] .tooltip-inner{max-width:350px;padding:5px 8px;text-align:center;color:var(--color-main-text);border-radius:var(--border-radius);background-color:var(--color-main-background)}.vue-tooltip[data-v-e1f55ce] .tooltip-arrow{position:absolute;z-index:1;width:0;height:0;margin:0;border-style:solid;border-color:var(--color-main-background)}\n", ""]), e.exports = t
        }, function (e, t) {
        }, , function (e, t, s) {
            "use strict";
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
             */t.a = function (e) {
                e.mounted ? Array.isArray(e.mounted) || (e.mounted = [e.mounted]) : e.mounted = [], e.mounted.push((function () {
                    this.$el.setAttribute("data-v-".concat("e1f55ce"), "")
                }))
            }
        }, function (e, t) {
            e.exports = s(344)
        }, , , , function (e, t, s) {
            "use strict";

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
             * but WITHOUT ANY WARRANTY without even the implied warranty of
             * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
             * GNU Affero General Public License for more details.
             *
             * You should have received a copy of the GNU Affero General Public License
             * along with this program. If not, see <http://www.gnu.org/licenses/>.
             *
             */
            function n(e, t, s) {
                this.r = e, this.g = t, this.b = s
            }

            function a(e, t, s) {
                var a = [];
                a.push(t);
                for (var o = function (e, t) {
                    var s = new Array(3);
                    return s[0] = (t[1].r - t[0].r) / e, s[1] = (t[1].g - t[0].g) / e, s[2] = (t[1].b - t[0].b) / e, s
                }(e, [t, s]), r = 1; r < e; r++) {
                    var i = parseInt(t.r + o[0] * r, 10), c = parseInt(t.g + o[1] * r, 10),
                        l = parseInt(t.b + o[2] * r, 10);
                    a.push(new n(i, c, l))
                }
                return a
            }

            s(25), t.a = function (e) {
                e || (e = 6);
                var t = new n(182, 70, 157), s = new n(221, 203, 85), o = new n(0, 130, 201), r = a(e, t, s),
                    i = a(e, s, o), c = a(e, o, t);
                return r.concat(i).concat(c)
            }
        }, function (e, t) {
        }, function (e, t, s) {
            "use strict";
            s.r(t), s(15), s(18), s(4), s(23), s(19), s(20), s(24);
            var n = {
                name: "PopoverMenuItem", props: {
                    item: {
                        type: Object, required: !0, default: function () {
                            return {
                                key: "nextcloud-link",
                                href: "https://nextcloud.com",
                                icon: "icon-links",
                                text: "Nextcloud"
                            }
                        }, validator: function (e) {
                            return !e.input || -1 !== ["text", "checkbox"].indexOf(e.input)
                        }
                    }
                }, computed: {
                    key: function () {
                        return this.item.key ? this.item.key : Math.round(16 * Math.random() * 1e6).toString(16)
                    }, iconIsUrl: function () {
                        try {
                            return new URL(this.item.icon), !0
                        } catch (e) {
                            return !1
                        }
                    }
                }, methods: {
                    action: function (e) {
                        this.item.action && this.item.action(e)
                    }
                }
            }, a = (s(72), s(74), s(0)), o = {
                name: "PopoverMenu", components: {
                    PopoverMenuItem: Object(a.a)(n, (function () {
                        var e = this, t = e.$createElement, s = e._self._c || t;
                        return s("li", [e.item.href ? s("a", {
                            staticClass: "focusable",
                            attrs: {
                                href: e.item.href ? e.item.href : "#",
                                target: e.item.target ? e.item.target : "",
                                download: e.item.download,
                                rel: "noreferrer noopener"
                            },
                            on: {click: e.action}
                        }, [e.iconIsUrl ? s("img", {attrs: {src: e.item.icon}}) : s("span", {class: e.item.icon}), e._v(" "), e.item.text && e.item.longtext ? s("p", [s("strong", {staticClass: "menuitem-text"}, [e._v("\n\t\t\t\t" + e._s(e.item.text) + "\n\t\t\t")]), s("br"), e._v(" "), s("span", {staticClass: "menuitem-text-detail"}, [e._v("\n\t\t\t\t" + e._s(e.item.longtext) + "\n\t\t\t")])]) : e.item.text ? s("span", [e._v("\n\t\t\t" + e._s(e.item.text) + "\n\t\t")]) : e.item.longtext ? s("p", [e._v("\n\t\t\t" + e._s(e.item.longtext) + "\n\t\t")]) : e._e()]) : e.item.input ? s("span", {
                            staticClass: "menuitem",
                            class: {active: e.item.active}
                        }, ["checkbox" !== e.item.input ? s("span", {class: e.item.icon}) : e._e(), e._v(" "), "text" === e.item.input ? s("form", {
                            class: e.item.input,
                            on: {
                                submit: function (t) {
                                    return t.preventDefault(), e.item.action(t)
                                }
                            }
                        }, [s("input", {
                            attrs: {type: e.item.input, placeholder: e.item.text, required: ""},
                            domProps: {value: e.item.value}
                        }), e._v(" "), s("input", {
                            staticClass: "icon-confirm",
                            attrs: {type: "submit", value: ""}
                        })]) : ["checkbox" === e.item.input ? s("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.item.model,
                                expression: "item.model"
                            }],
                            class: e.item.input,
                            attrs: {id: e.key, type: "checkbox"},
                            domProps: {checked: Array.isArray(e.item.model) ? e._i(e.item.model, null) > -1 : e.item.model},
                            on: {
                                change: [function (t) {
                                    var s = e.item.model, n = t.target, a = !!n.checked;
                                    if (Array.isArray(s)) {
                                        var o = e._i(s, null);
                                        n.checked ? o < 0 && e.$set(e.item, "model", s.concat([null])) : o > -1 && e.$set(e.item, "model", s.slice(0, o).concat(s.slice(o + 1)))
                                    } else e.$set(e.item, "model", a)
                                }, e.item.action]
                            }
                        }) : "radio" === e.item.input ? s("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.item.model,
                                expression: "item.model"
                            }],
                            class: e.item.input,
                            attrs: {id: e.key, type: "radio"},
                            domProps: {checked: e._q(e.item.model, null)},
                            on: {
                                change: [function (t) {
                                    return e.$set(e.item, "model", null)
                                }, e.item.action]
                            }
                        }) : s("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.item.model,
                                expression: "item.model"
                            }],
                            class: e.item.input,
                            attrs: {id: e.key, type: e.item.input},
                            domProps: {value: e.item.model},
                            on: {
                                change: e.item.action, input: function (t) {
                                    t.target.composing || e.$set(e.item, "model", t.target.value)
                                }
                            }
                        }), e._v(" "), s("label", {
                            attrs: {for: e.key}, on: {
                                click: function (t) {
                                    return t.stopPropagation(), t.preventDefault(), e.item.action(t)
                                }
                            }
                        }, [e._v("\n\t\t\t\t" + e._s(e.item.text) + "\n\t\t\t")])]], 2) : e.item.action ? s("button", {
                            staticClass: "menuitem focusable",
                            class: {active: e.item.active},
                            attrs: {disabled: e.item.disabled},
                            on: {
                                click: function (t) {
                                    return t.stopPropagation(), t.preventDefault(), e.item.action(t)
                                }
                            }
                        }, [s("span", {class: e.item.icon}), e._v(" "), e.item.text && e.item.longtext ? s("p", [s("strong", {staticClass: "menuitem-text"}, [e._v("\n\t\t\t\t" + e._s(e.item.text) + "\n\t\t\t")]), s("br"), e._v(" "), s("span", {staticClass: "menuitem-text-detail"}, [e._v("\n\t\t\t\t" + e._s(e.item.longtext) + "\n\t\t\t")])]) : e.item.text ? s("span", [e._v("\n\t\t\t" + e._s(e.item.text) + "\n\t\t")]) : e.item.longtext ? s("p", [e._v("\n\t\t\t" + e._s(e.item.longtext) + "\n\t\t")]) : e._e()]) : s("span", {
                            staticClass: "menuitem",
                            class: {active: e.item.active}
                        }, [s("span", {class: e.item.icon}), e._v(" "), e.item.text && e.item.longtext ? s("p", [s("strong", {staticClass: "menuitem-text"}, [e._v("\n\t\t\t\t" + e._s(e.item.text) + "\n\t\t\t")]), s("br"), e._v(" "), s("span", {staticClass: "menuitem-text-detail"}, [e._v("\n\t\t\t\t" + e._s(e.item.longtext) + "\n\t\t\t")])]) : e.item.text ? s("span", [e._v("\n\t\t\t" + e._s(e.item.text) + "\n\t\t")]) : e.item.longtext ? s("p", [e._v("\n\t\t\t" + e._s(e.item.longtext) + "\n\t\t")]) : e._e()])])
                    }), [], !1, null, "75ab886e", null).exports
                }, props: {
                    menu: {
                        type: Array, default: function () {
                            return [{href: "https://nextcloud.com", icon: "icon-links", text: "Nextcloud"}]
                        }, required: !0
                    }
                }
            }, r = (s(76), s(42)), i = s.n(r), c = Object(a.a)(o, (function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("ul", this._l(this.menu, (function (e, s) {
                    return t("PopoverMenuItem", {key: s, attrs: {item: e}})
                })), 1)
            }), [], !1, null, "81c2afc0", null);
            "function" == typeof i.a && i()(c);
            var l = c.exports;
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
             */t.default = l
        }, function (e, t) {
            e.exports = s(35)
        }, function (e, t, s) {
            "use strict";
            s.r(t), s(25), s(71), s(22), s(33), s(4), s(68), s(69);
            var n = s(14), a = s(51), o = s(52), r = s.n(o), i = s(13), c = (s(21), s(85), s(30), s(63)), l = s.n(c),
                m = s(49);

            function A(e, t, s, n, a, o, r) {
                try {
                    var i = e[o](r), c = i.value
                } catch (e) {
                    return void s(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function u(e) {
                return function () {
                    var t = this, s = arguments;
                    return new Promise((function (n, a) {
                        var o = e.apply(t, s);

                        function r(e) {
                            A(o, n, a, r, i, "next", e)
                        }

                        function i(e) {
                            A(o, n, a, r, i, "throw", e)
                        }

                        r(void 0)
                    }))
                }
            }

            var d = {
                name: "Avatar",
                directives: {tooltip: i.default, ClickOutside: n.directive},
                components: {PopoverMenu: a.default},
                props: {
                    url: {type: String, default: void 0},
                    iconClass: {type: String, default: void 0},
                    user: {type: String, default: void 0},
                    isGuest: {type: Boolean, default: !1},
                    displayName: {type: String, default: void 0},
                    size: {type: Number, default: 32},
                    allowPlaceholder: {type: Boolean, default: !0},
                    disableTooltip: {type: Boolean, default: !1},
                    disableMenu: {type: Boolean, default: !1},
                    tooltipMessage: {type: String, default: null},
                    isNoUser: {type: Boolean, default: !1},
                    status: {
                        type: String, default: null, validator: function (e) {
                            switch (e) {
                                case"positive":
                                case"negative":
                                case"neutral":
                                    return !0
                            }
                            return !1
                        }
                    },
                    statusColor: {
                        type: [Number, String], default: null, validator: function (e) {
                            return /^([a-f0-9]{3}){1,2}$/i.test(e)
                        }
                    },
                    menuPosition: {type: String, default: "center"}
                },
                data: function () {
                    return {
                        avatarUrlLoaded: null,
                        avatarSrcSetLoaded: null,
                        userDoesNotExist: !1,
                        isAvatarLoaded: !1,
                        isMenuLoaded: !1,
                        contactsMenuActions: [],
                        contactsMenuOpenState: !1
                    }
                },
                computed: {
                    getUserIdentifier: function () {
                        return this.isDisplayNameDefined ? this.displayName : this.isUserDefined ? this.user : ""
                    }, isUserDefined: function () {
                        return void 0 !== this.user
                    }, isDisplayNameDefined: function () {
                        return void 0 !== this.displayName
                    }, isUrlDefined: function () {
                        return void 0 !== this.url
                    }, hasMenu: function () {
                        return !this.disableMenu && (this.isMenuLoaded ? this.menu.length > 0 : !(this.user === OC.getCurrentUser().uid || this.userDoesNotExist || this.url))
                    }, shouldShowPlaceholder: function () {
                        return this.allowPlaceholder && this.userDoesNotExist
                    }, avatarStyle: function () {
                        var e = {
                            width: this.size + "px",
                            height: this.size + "px",
                            lineHeight: this.size + "px",
                            fontSize: Math.round(.55 * this.size) + "px"
                        };
                        if (!this.iconClass && !this.avatarSrcSetLoaded) {
                            var t = function (e) {
                                var t = e.toLowerCase();
                                return null === t.match(/^([0-9a-f]{4}-?){8}$/) && (t = l()(t)), t = t.replace(/[^0-9a-f]/g, ""), Object(m.a)(6)[function (e, t) {
                                    for (var s = 0, n = [], a = 0; a < e.length; a++) n.push(parseInt(e.charAt(a), 16) % 16);
                                    for (var o in n) s += n[o];
                                    return parseInt(parseInt(s, 10) % 18, 10)
                                }(t)]
                            }(this.getUserIdentifier);
                            e.backgroundColor = "rgb(" + t.r + ", " + t.g + ", " + t.b + ")"
                        }
                        return e
                    }, tooltip: function () {
                        return !this.disableTooltip && (this.tooltipMessage ? this.tooltipMessage : this.displayName)
                    }, initials: function () {
                        return this.shouldShowPlaceholder ? this.getUserIdentifier.charAt(0).toUpperCase() : "?"
                    }, menu: function () {
                        return this.contactsMenuActions.map((function (e) {
                            return {href: e.hyperlink, icon: e.icon, text: e.title}
                        }))
                    }
                },
                watch: {
                    url: function () {
                        this.userDoesNotExist = !1, this.loadAvatarUrl()
                    }, user: function () {
                        this.userDoesNotExist = !1, this.isMenuLoaded = !1, this.loadAvatarUrl()
                    }
                },
                mounted: function () {
                    this.loadAvatarUrl()
                },
                methods: {
                    toggleMenu: function () {
                        var e = this;
                        return u(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.hasMenu) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        if (e.contactsMenuOpenState) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.next = 5, e.fetchContactsMenu();
                                    case 5:
                                        e.contactsMenuOpenState = !e.contactsMenuOpenState;
                                    case 6:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, closeMenu: function () {
                        this.contactsMenuOpenState = !1
                    }, fetchContactsMenu: function () {
                        var e = this;
                        return u(regeneratorRuntime.mark((function t() {
                            var s, n, a;
                            return regeneratorRuntime.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, s = encodeURIComponent(e.user), t.next = 4, r.a.post(OC.generateUrl("contactsmenu/findOne"), "shareType=0&shareWith=".concat(s));
                                    case 4:
                                        n = t.sent, a = n.data, e.contactsMenuActions = a.topAction ? [a.topAction].concat(a.actions) : a.actions, t.next = 12;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t.catch(0), e.contactsMenuOpenState = !1;
                                    case 12:
                                        e.isMenuLoaded = !0;
                                    case 13:
                                    case"end":
                                        return t.stop()
                                }
                            }), t, null, [[0, 9]])
                        })))()
                    }, loadAvatarUrl: function () {
                        var e = this;
                        if (this.isAvatarLoaded = !1, !this.isUrlDefined && (!this.isUserDefined || this.isNoUser)) return this.isAvatarLoaded = !0, void (this.userDoesNotExist = !0);
                        var t = function (t, s) {
                            var n = "/avatar/{user}/{size}";
                            e.isGuest && (n = "/avatar/guest/{user}/{size}");
                            var a = OC.generateUrl(n, {user: t, size: s});
                            return t === OC.getCurrentUser().uid && "undefined" != typeof oc_userconfig && (a += "?v=" + oc_userconfig.avatar.version), a
                        }, s = t(this.user, this.size);
                        this.isUrlDefined && (s = this.url);
                        var n = [s + " 1x", t(this.user, 2 * this.size) + " 2x", t(this.user, 4 * this.size) + " 4x"].join(", "),
                            a = new Image;
                        a.onload = function () {
                            e.avatarUrlLoaded = s, e.isUrlDefined || (e.avatarSrcSetLoaded = n), e.isAvatarLoaded = !0
                        }, a.onerror = function () {
                            e.userDoesNotExist = !0, e.isAvatarLoaded = !0
                        }, this.isUrlDefined || (a.srcset = n), a.src = s
                    }
                }
            }, g = (s(86), s(0)), p = s(50), f = s.n(p), v = Object(g.a)(d, (function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: e.tooltip,
                        expression: "tooltip"
                    }, {
                        name: "click-outside",
                        rawName: "v-click-outside",
                        value: e.closeMenu,
                        expression: "closeMenu"
                    }],
                    staticClass: "avatardiv popovermenu-wrapper",
                    class: {
                        "icon-loading": !e.isAvatarLoaded && e.size > 16,
                        "icon-loading-small": !e.isAvatarLoaded && e.size <= 16,
                        "avatardiv--unknown": e.userDoesNotExist,
                        "avatardiv--with-menu": e.hasMenu
                    },
                    style: e.avatarStyle,
                    on: {click: e.toggleMenu}
                }, [e.iconClass ? s("div", {
                    staticClass: "avatar-class-icon",
                    class: e.iconClass
                }) : e.isAvatarLoaded && !e.userDoesNotExist ? s("img", {
                    attrs: {
                        src: e.avatarUrlLoaded,
                        srcset: e.avatarSrcSetLoaded
                    }
                }) : e._e(), e._v(" "), e.hasMenu ? s("div", {staticClass: "icon-more"}) : e._e(), e._v(" "), e.status ? s("div", {
                    staticClass: "avatardiv__status",
                    class: "avatardiv__status--" + e.status,
                    style: {backgroundColor: "#" + e.statusColor}
                }, ["neutral" === e.status ? s("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "11",
                        viewBox: "0 0 3.175 2.91"
                    }
                }, [s("path", {
                    style: {fill: "#" + e.statusColor},
                    attrs: {
                        d: "M3.21 3.043H.494l.679-1.177.68-1.176.678 1.176z",
                        stroke: "#fff",
                        "stroke-width": ".265",
                        "stroke-linecap": "square"
                    }
                })]) : e._e()]) : e._e(), e._v(" "), e.userDoesNotExist ? s("div", {staticClass: "unknown"}, [e._v("\n\t\t" + e._s(e.initials) + "\n\t")]) : e._e(), e._v(" "), e.hasMenu ? s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.contactsMenuOpenState,
                        expression: "contactsMenuOpenState"
                    }], staticClass: "popovermenu", class: "menu-" + e.menuPosition
                }, [s("PopoverMenu", {attrs: {"is-open": e.contactsMenuOpenState, menu: e.menu}})], 1) : e._e()])
            }), [], !1, null, "d7d60d02", null);
            "function" == typeof f.a && f()(v);
            var h = v.exports;
            /**
             * @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>
             *
             * @author Julius Härtl <jus@bitgrid.net>
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
             */t.default = h
        }, , , , , , , function (e, t, s) {
            var n = s(159);
            "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("1f1302d4", n, !0, {})
        }, function (e, t, s) {
            var n = s(161);
            "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("2efb16ed", n, !0, {})
        }, , function (e, t) {
            e.exports = s(345)
        }, , , , , function (e, t) {
            e.exports = s(346)
        }, function (e, t) {
            e.exports = s(347)
        }, , function (e, t) {
            e.exports = s(348)
        }, function (e, t, s) {
            "use strict";
            var n = s(34);
            s.n(n).a
        }, function (e, t, s) {
            (t = s(1)(!1)).push([e.i, "\nbutton.menuitem[data-v-75ab886e] {\n\ttext-align: left;\n}\nbutton.menuitem *[data-v-75ab886e] {\n\tcursor: pointer;\n}\nbutton.menuitem[data-v-75ab886e]:disabled {\n\topacity: 0.5 !important;\n\tcursor: default;\n}\nbutton.menuitem:disabled *[data-v-75ab886e] {\n\tcursor: default;\n}\n.menuitem.active[data-v-75ab886e] {\n\tbox-shadow: inset 2px 0 var(--color-primary);\n\tborder-radius: 0;\n}\n", ""]), e.exports = t
        }, function (e, t, s) {
            "use strict";
            var n = s(35);
            s.n(n).a
        }, function (e, t, s) {
            (t = s(1)(!1)).push([e.i, "li[data-v-75ab886e]{display:flex;flex:0 0 auto}li.hidden[data-v-75ab886e]{display:none}li>button[data-v-75ab886e],li>a[data-v-75ab886e],li>.menuitem[data-v-75ab886e]{cursor:pointer;line-height:44px;border:0;border-radius:0;background-color:transparent;display:flex;align-items:flex-start;height:auto;margin:0;padding:0;font-weight:normal;box-shadow:none;width:100%;color:var(--color-main-text);white-space:nowrap;opacity:.7}li>button span[class^='icon-'][data-v-75ab886e],li>button span[class*=' icon-'][data-v-75ab886e],li>button[class^='icon-'][data-v-75ab886e],li>button[class*=' icon-'][data-v-75ab886e],li>a span[class^='icon-'][data-v-75ab886e],li>a span[class*=' icon-'][data-v-75ab886e],li>a[class^='icon-'][data-v-75ab886e],li>a[class*=' icon-'][data-v-75ab886e],li>.menuitem span[class^='icon-'][data-v-75ab886e],li>.menuitem span[class*=' icon-'][data-v-75ab886e],li>.menuitem[class^='icon-'][data-v-75ab886e],li>.menuitem[class*=' icon-'][data-v-75ab886e]{min-width:0;min-height:0;background-position:14px center;background-size:16px}li>button span[class^='icon-'][data-v-75ab886e],li>button span[class*=' icon-'][data-v-75ab886e],li>a span[class^='icon-'][data-v-75ab886e],li>a span[class*=' icon-'][data-v-75ab886e],li>.menuitem span[class^='icon-'][data-v-75ab886e],li>.menuitem span[class*=' icon-'][data-v-75ab886e]{padding:22px 0 22px 44px}li>button:not([class^='icon-']):not([class*='icon-'])>span[data-v-75ab886e]:not([class^='icon-']):not([class*='icon-']):first-child,li>button:not([class^='icon-']):not([class*='icon-'])>input[data-v-75ab886e]:not([class^='icon-']):not([class*='icon-']):first-child,li>button:not([class^='icon-']):not([class*='icon-'])>form[data-v-75ab886e]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>span[data-v-75ab886e]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>input[data-v-75ab886e]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>form[data-v-75ab886e]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>span[data-v-75ab886e]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>input[data-v-75ab886e]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>form[data-v-75ab886e]:not([class^='icon-']):not([class*='icon-']):first-child{margin-left:44px}li>button[class^='icon-'][data-v-75ab886e],li>button[class*=' icon-'][data-v-75ab886e],li>a[class^='icon-'][data-v-75ab886e],li>a[class*=' icon-'][data-v-75ab886e],li>.menuitem[class^='icon-'][data-v-75ab886e],li>.menuitem[class*=' icon-'][data-v-75ab886e]{padding:0 14px 0 44px}li>button[data-v-75ab886e]:not(:disabled):hover,li>button[data-v-75ab886e]:not(:disabled):focus,li>button:not(:disabled).active[data-v-75ab886e],li>a[data-v-75ab886e]:not(:disabled):hover,li>a[data-v-75ab886e]:not(:disabled):focus,li>a:not(:disabled).active[data-v-75ab886e],li>.menuitem[data-v-75ab886e]:not(:disabled):hover,li>.menuitem[data-v-75ab886e]:not(:disabled):focus,li>.menuitem:not(:disabled).active[data-v-75ab886e]{opacity:1 !important}li>button.action[data-v-75ab886e],li>a.action[data-v-75ab886e],li>.menuitem.action[data-v-75ab886e]{padding:inherit !important}li>button>span[data-v-75ab886e],li>a>span[data-v-75ab886e],li>.menuitem>span[data-v-75ab886e]{cursor:pointer;white-space:nowrap}li>button>p[data-v-75ab886e],li>a>p[data-v-75ab886e],li>.menuitem>p[data-v-75ab886e]{width:150px;line-height:1.6em;padding:8px 0;white-space:normal}li>button>select[data-v-75ab886e],li>a>select[data-v-75ab886e],li>.menuitem>select[data-v-75ab886e]{margin:0;margin-left:6px}li>button[data-v-75ab886e]:not(:empty),li>a[data-v-75ab886e]:not(:empty),li>.menuitem[data-v-75ab886e]:not(:empty){padding-right:14px !important}li>button>img[data-v-75ab886e],li>a>img[data-v-75ab886e],li>.menuitem>img[data-v-75ab886e]{width:16px;padding:14px}li>button>input.radio+label[data-v-75ab886e],li>button>input.checkbox+label[data-v-75ab886e],li>a>input.radio+label[data-v-75ab886e],li>a>input.checkbox+label[data-v-75ab886e],li>.menuitem>input.radio+label[data-v-75ab886e],li>.menuitem>input.checkbox+label[data-v-75ab886e]{padding:0 !important;width:100%}li>button>input.checkbox+label[data-v-75ab886e]::before,li>a>input.checkbox+label[data-v-75ab886e]::before,li>.menuitem>input.checkbox+label[data-v-75ab886e]::before{margin:-2px 13px 0}li>button>input.radio+label[data-v-75ab886e]::before,li>a>input.radio+label[data-v-75ab886e]::before,li>.menuitem>input.radio+label[data-v-75ab886e]::before{margin:-2px 12px 0}li>button>input[data-v-75ab886e]:not([type=radio]):not([type=checkbox]):not([type=image]),li>a>input[data-v-75ab886e]:not([type=radio]):not([type=checkbox]):not([type=image]),li>.menuitem>input[data-v-75ab886e]:not([type=radio]):not([type=checkbox]):not([type=image]){width:150px}li>button form[data-v-75ab886e],li>a form[data-v-75ab886e],li>.menuitem form[data-v-75ab886e]{display:flex;flex:1 1 auto}li>button form[data-v-75ab886e]:not(:first-child),li>a form[data-v-75ab886e]:not(:first-child),li>.menuitem form[data-v-75ab886e]:not(:first-child){margin-left:5px}li>button>span.hidden+form[data-v-75ab886e],li>button>span[style*='display:none']+form[data-v-75ab886e],li>a>span.hidden+form[data-v-75ab886e],li>a>span[style*='display:none']+form[data-v-75ab886e],li>.menuitem>span.hidden+form[data-v-75ab886e],li>.menuitem>span[style*='display:none']+form[data-v-75ab886e]{margin-left:0}li>button input[data-v-75ab886e],li>a input[data-v-75ab886e],li>.menuitem input[data-v-75ab886e]{min-width:44px;max-height:40px;margin:2px 0;flex:1 1 auto}li>button input[data-v-75ab886e]:not(:first-child),li>a input[data-v-75ab886e]:not(:first-child),li>.menuitem input[data-v-75ab886e]:not(:first-child){margin-left:5px}li:not(.hidden):not([style*='display:none']):first-of-type>button>form[data-v-75ab886e],li:not(.hidden):not([style*='display:none']):first-of-type>button>input[data-v-75ab886e],li:not(.hidden):not([style*='display:none']):first-of-type>a>form[data-v-75ab886e],li:not(.hidden):not([style*='display:none']):first-of-type>a>input[data-v-75ab886e],li:not(.hidden):not([style*='display:none']):first-of-type>.menuitem>form[data-v-75ab886e],li:not(.hidden):not([style*='display:none']):first-of-type>.menuitem>input[data-v-75ab886e]{margin-top:12px}li:not(.hidden):not([style*='display:none']):last-of-type>button>form[data-v-75ab886e],li:not(.hidden):not([style*='display:none']):last-of-type>button>input[data-v-75ab886e],li:not(.hidden):not([style*='display:none']):last-of-type>a>form[data-v-75ab886e],li:not(.hidden):not([style*='display:none']):last-of-type>a>input[data-v-75ab886e],li:not(.hidden):not([style*='display:none']):last-of-type>.menuitem>form[data-v-75ab886e],li:not(.hidden):not([style*='display:none']):last-of-type>.menuitem>input[data-v-75ab886e]{margin-bottom:12px}li>button[data-v-75ab886e]{padding:0}li>button span[data-v-75ab886e]{opacity:1}\n", ""]), e.exports = t
        }, function (e, t, s) {
            "use strict";
            var n = s(36);
            s.n(n).a
        }, function (e, t, s) {
            (t = s(1)(!1)).push([e.i, "ul[data-v-81c2afc0]{display:flex;flex-direction:column}\n", ""]), e.exports = t
        }, , , , function (e, t) {
        }, function (e, t) {
        }, , function (e, t) {
            e.exports = s(350)
        }, function (e, t) {
            e.exports = s(351)
        }, function (e, t, s) {
            "use strict";
            var n = s(39);
            s.n(n).a
        }, function (e, t, s) {
            var n = s(1), a = s(7), o = s(8), r = s(9), i = s(10), c = s(11);
            t = n(!1);
            var l = a(o), m = a(r), A = a(i), u = a(c);
            t.push([e.i, '@font-face{font-family:"iconfont-vue-e1f55ce";src:url(' + l + ");src:url(" + l + ') format("embedded-opentype"),url(' + m + ') format("woff"),url(' + A + ') format("truetype"),url(' + u + ') format("svg")}.icon[data-v-d7d60d02]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-d7d60d02]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-left[data-v-d7d60d02]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-right-double[data-v-d7d60d02]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-right[data-v-d7d60d02]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.breadcrumb[data-v-d7d60d02]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.checkmark[data-v-d7d60d02]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.close[data-v-d7d60d02]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.confirm[data-v-d7d60d02]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.info[data-v-d7d60d02]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.menu[data-v-d7d60d02]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.more[data-v-d7d60d02]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.pause[data-v-d7d60d02]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.play[data-v-d7d60d02]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.triangle-s[data-v-d7d60d02]:before{font-family:"iconfont-vue-e1f55ce";content:""}.avatardiv[data-v-d7d60d02]{position:relative;display:inline-block}.avatardiv--unknown[data-v-d7d60d02]{position:relative;background-color:var(--color-text-maxcontrast)}.avatardiv--with-menu[data-v-d7d60d02]{cursor:pointer}.avatardiv--with-menu .icon-more[data-v-d7d60d02]{position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:inherit;height:inherit;cursor:pointer;opacity:0;background:none;font-size:18px}.avatardiv--with-menu .icon-more[data-v-d7d60d02]:before{font-family:"iconfont-vue-e1f55ce";font-style:normal;font-weight:400;content:""}.avatardiv--with-menu .icon-more[data-v-d7d60d02]::before{display:block}.avatardiv--with-menu:focus .icon-more[data-v-d7d60d02],.avatardiv--with-menu:hover .icon-more[data-v-d7d60d02]{opacity:1}.avatardiv--with-menu:focus img[data-v-d7d60d02],.avatardiv--with-menu:hover img[data-v-d7d60d02]{opacity:0}.avatardiv--with-menu .icon-more[data-v-d7d60d02],.avatardiv--with-menu img[data-v-d7d60d02]{transition:opacity var(--animation-quick)}.avatardiv>.unknown[data-v-d7d60d02]{position:absolute;top:0;left:0;display:block;width:100%;text-align:center;color:var(--color-main-background)}.avatardiv img[data-v-d7d60d02]{width:100%;height:100%}.avatardiv .avatardiv__status[data-v-d7d60d02]{position:absolute;top:22px;left:22px;width:10px;height:10px;border:1px solid rgba(255,255,255,0.5);background-clip:content-box}.avatardiv .avatardiv__status--positive[data-v-d7d60d02]{border-radius:50%;background-color:var(--color-success)}.avatardiv .avatardiv__status--negative[data-v-d7d60d02]{background-color:var(--color-error)}.avatardiv .avatardiv__status--neutral[data-v-d7d60d02]{border:none;background-color:transparent !important}.avatardiv .avatardiv__status--neutral svg[data-v-d7d60d02]{position:absolute;top:-3px;left:-2px}.avatardiv .avatardiv__status--neutral svg path[data-v-d7d60d02]{fill:#aaa}.avatardiv .popovermenu-wrapper[data-v-d7d60d02]{position:relative;display:inline-block}.avatardiv .popovermenu[data-v-d7d60d02]{display:block;margin:0;font-size:14px}.avatar-class-icon[data-v-d7d60d02]{border-radius:50%;background-color:var(--color-background-darker)}\n', ""]), e.exports = t
        }, , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, s) {
            "use strict";
            s.r(t);
            var n = s(44),
                a = (s(84), s(122), s(156), s(18), s(71), s(22), s(121), s(33), s(4), s(19), s(20), s(21), s(123), s(45)),
                o = s.n(a), r = s(53), i = (s(157), s(23), s(30), {
                    methods: {
                        highlightText: function (e, t) {
                            return t.length ? e.replace(new RegExp(t, "gi"), "<strong>".concat(t, "</strong>")) : e
                        }
                    }
                }), c = {
                    name: "AvatarSelectOption",
                    components: {Avatar: r.default},
                    mixins: [i],
                    props: {
                        desc: {type: String, default: ""},
                        displayName: {type: String, required: !0},
                        icon: {type: String, default: ""},
                        user: {type: String, default: ""},
                        isNoUser: {type: Boolean, default: !1},
                        search: {type: String, default: ""}
                    },
                    computed: {
                        highlightedDisplayName: function () {
                            return this.highlightText(o()(this.displayName), this.search)
                        }, highlightedDesc: function () {
                            return this.highlightText(o()(this.desc), this.search)
                        }
                    }
                }, l = (s(158), s(0)), m = s(81), A = s.n(m), u = Object(l.a)(c, (function () {
                    var e = this, t = e.$createElement, s = e._self._c || t;
                    return s("span", {staticClass: "option"}, [s("Avatar", {
                        staticClass: "option__avatar",
                        attrs: {
                            "display-name": e.displayName,
                            user: e.user,
                            "is-no-user": e.isNoUser,
                            "disable-menu": !0,
                            "disable-tooltip": !0
                        }
                    }), e._v(" "), s("div", {staticClass: "option__desc"}, [s("span", {
                        staticClass: "option__desc--lineone",
                        domProps: {innerHTML: e._s(e.highlightedDisplayName)}
                    }), e._v(" "), "" !== e.desc ? s("span", {
                        staticClass: "option__desc--linetwo",
                        domProps: {innerHTML: e._s(e.highlightedDesc)}
                    }) : e._e()]), e._v(" "), "" !== e.icon ? s("span", {
                        staticClass: "icon option__icon",
                        class: e.icon
                    }) : e._e()], 1)
                }), [], !1, null, "808e3c40", null);
            "function" == typeof A.a && A()(u);
            var d = u.exports, g = (s(12), {
                name: "EllipsisedOption",
                mixins: [i],
                props: {
                    option: {type: [String, Object], required: !0, default: ""},
                    label: {type: String, default: ""},
                    search: {type: String, default: ""}
                },
                computed: {
                    name: function () {
                        return this.$parent.getOptionLabel(this.option)
                    }, needsTruncate: function () {
                        return this.name && this.name.length >= 10
                    }, part1: function () {
                        if (this.needsTruncate) {
                            var e = Math.min(Math.floor(this.name.length / 2), 10);
                            return this.name.substr(0, this.name.length - e)
                        }
                        return this.name
                    }, part2: function () {
                        if (this.needsTruncate) {
                            var e = Math.min(Math.floor(this.name.length / 2), 10);
                            return this.name.substr(this.name.length - e)
                        }
                        return ""
                    }, highlightedPart1: function () {
                        return this.highlightText(o()(this.part1), this.search)
                    }, highlightedPart2: function () {
                        return this.highlightText(o()(this.part2), this.search)
                    }
                }
            }), p = (s(160), Object(l.a)(g, (function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {
                    staticClass: "name-parts",
                    attrs: {title: e.name}
                }, [s("span", {
                    staticClass: "name-parts__first",
                    domProps: {innerHTML: e._s(e.highlightedPart1)}
                }), e._v(" "), e.part2 ? s("span", {
                    staticClass: "name-parts__last",
                    domProps: {innerHTML: e._s(e.highlightedPart2)}
                }) : e._e()])
            }), [], !1, null, "2d5d34b0", null).exports), f = s(32), v = s(13), h = s(125);

            function M(e) {
                return (M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            var b = {
                name: "Multiselect",
                components: {AvatarSelectOption: d, EllipsisedOption: p, VueMultiselect: s.n(h).a},
                directives: {tooltip: v.default},
                mixins: [f.a],
                inheritAttrs: !1,
                props: {
                    value: {
                        default: function () {
                            return []
                        }
                    },
                    multiple: {type: Boolean, default: !1},
                    limit: {type: Number, default: 99999},
                    label: {type: String, default: ""},
                    trackBy: {type: String, default: ""},
                    options: {type: Array, required: !0},
                    userSelect: {type: Boolean, default: !1},
                    loading: {type: Boolean, default: !1},
                    autoLimit: {type: Boolean, default: !0},
                    tagWidth: {
                        type: Number, default: 150, validator: function (e) {
                            return e > 0
                        }
                    }
                },
                data: function () {
                    return {elWidth: 0}
                },
                computed: {
                    maxOptions: function () {
                        if (this.autoLimit && this.elWidth > 0 && 0 !== this.tagWidth) {
                            var e = Math.floor(this.elWidth / this.tagWidth);
                            return e > 0 ? e : 1
                        }
                        return this.limit ? this.limit : 9999
                    }, limitString: function () {
                        return "+".concat(this.value.length - this.maxOptions)
                    }, localValue: {
                        get: function () {
                            return this.trackBy && this.options && "object" !== M(this.value) && this.options[this.value] ? this.options[this.value] : this.value
                        }, set: function (e) {
                            this.$emit("update:value", e), this.$emit("change", e)
                        }
                    }
                },
                watch: {
                    value: function () {
                        this.updateWidth()
                    }
                },
                mounted: function () {
                    this.updateWidth(), window.addEventListener("resize", this.updateWidth)
                },
                beforeDestroy: function () {
                    window.removeEventListener("resize", this.updateWidth)
                },
                methods: {
                    formatLimitTitle: function (e) {
                        var t = this;
                        if (Array.isArray(e) && e.length > 0) {
                            var s = e;
                            return "object" === M(e[0]) && (s = e.map((function (e) {
                                return e[t.label]
                            }))), s.slice(this.maxOptions).join(", ")
                        }
                        return ""
                    }, updateWidth: function () {
                        this.$el && this.$el.querySelector(".multiselect__tags-wrap") && (this.elWidth = this.$el.querySelector(".multiselect__tags-wrap").offsetWidth - 10)
                    }
                }
            }, T = s(82), x = s.n(T), w = Object(l.a)(b, (function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("VueMultiselect", e._g(e._b({
                    class: [{"icon-loading-small": e.loading}, e.multiple ? "multiselect--multiple" : "multiselect--single"],
                    attrs: {
                        options: e.options,
                        limit: e.maxOptions,
                        "close-on-select": !e.multiple,
                        multiple: e.multiple,
                        label: e.label,
                        "track-by": e.trackBy,
                        "tag-placeholder": "create"
                    },
                    scopedSlots: e._u([{
                        key: "option", fn: function (t) {
                            return [e.userSelect && !e.$scopedSlots.option ? s("AvatarSelectOption", e._b({attrs: {search: t.search}}, "AvatarSelectOption", t.option, !1)) : e.$scopedSlots.option ? e._t("option", null, null, t) : s("EllipsisedOption", {
                                attrs: {
                                    option: t.option,
                                    search: t.search,
                                    label: e.label
                                }
                            })]
                        }
                    }, e.multiple ? {
                        key: "limit", fn: function () {
                            return [s("span", {
                                directives: [{
                                    name: "tooltip",
                                    rawName: "v-tooltip.auto",
                                    value: e.formatLimitTitle(e.value),
                                    expression: "formatLimitTitle(value)",
                                    modifiers: {auto: !0}
                                }], staticClass: "multiselect__limit"
                            }, [e._v("\n\t\t\t" + e._s(e.limitString) + "\n\t\t")])]
                        }, proxy: !0
                    } : null, e._l(e.$scopedSlots, (function (t, s) {
                        return {
                            key: s, fn: function (t) {
                                return [e._t(s, null, null, t)]
                            }
                        }
                    }))], null, !0),
                    model: {
                        value: e.localValue, callback: function (t) {
                            e.localValue = t
                        }, expression: "localValue"
                    }
                }, "VueMultiselect", e.$attrs, !1), e.$listeners), [e._v(" "), e._v(" "), e._v(" "), s("span", {
                    attrs: {slot: "noResult"},
                    slot: "noResult"
                }, [e._v(e._s(e.t("No results")))])])
            }), [], !1, null, null, null);
            "function" == typeof x.a && x()(w);
            var y = w.exports;
            s(162),
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
                 */
                Object(n.a)(y), t.default = y
        }, , , , , , , function (e, t) {
            e.exports = s(352)
        }, function (e, t) {
            e.exports = s(353)
        }, function (e, t) {
            e.exports = s(354)
        }, , function (e, t) {
            e.exports = s(355)
        }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t) {
            e.exports = s(356)
        }, function (e, t) {
            e.exports = s(357)
        }, function (e, t, s) {
            "use strict";
            var n = s(60);
            s.n(n).a
        }, function (e, t, s) {
            (t = s(1)(!1)).push([e.i, ".option[data-v-808e3c40]{display:flex;align-items:center;width:100%;height:32px}.option__avatar[data-v-808e3c40]{flex:0 0 32px;width:32px;height:32px;margin-right:6px}.option__desc[data-v-808e3c40]{display:flex;flex:1 1;flex-direction:column;justify-content:center;min-width:0}.option__desc--lineone[data-v-808e3c40]{color:var(--color-text-light)}.option__desc--linetwo[data-v-808e3c40]{opacity:.7}.option__desc--lineone[data-v-808e3c40],.option__desc--linetwo[data-v-808e3c40]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.option__desc--lineone strong[data-v-808e3c40],.option__desc--linetwo strong[data-v-808e3c40]{font-weight:bold}.option__icon[data-v-808e3c40]{flex:0 0 44px;width:44px;height:44px;margin:-6px;opacity:.5;background-position:center;background-size:16px}\n", ""]), e.exports = t
        }, function (e, t, s) {
            "use strict";
            var n = s(61);
            s.n(n).a
        }, function (e, t, s) {
            (t = s(1)(!1)).push([e.i, ".name-parts[data-v-2d5d34b0]{display:flex;max-width:100%}.name-parts__first[data-v-2d5d34b0]{overflow:hidden;text-overflow:ellipsis}.name-parts__first[data-v-2d5d34b0],.name-parts__last[data-v-2d5d34b0]{white-space:pre}.name-parts__first strong[data-v-2d5d34b0],.name-parts__last strong[data-v-2d5d34b0]{font-weight:bold}\n", ""]), e.exports = t
        }, function (e, t, s) {
            var n = s(163);
            "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("b5985a26", n, !0, {})
        }, function (e, t, s) {
            (t = s(1)(!1)).push([e.i, ".multiselect[data-v-e1f55ce]{margin:0;padding:0 !important;display:inline-block;min-width:160px;position:relative;background-color:var(--color-main-background)}.multiselect[data-v-e1f55ce]:not(.multiselect--active) .multiselect__single{position:absolute;width:100%}.multiselect[data-v-e1f55ce].multiselect--active input.multiselect__input{opacity:1 !important;cursor:text !important;border-radius:var(--border-radius) var(--border-radius) 0 0}.multiselect[data-v-e1f55ce].multiselect--active .multiselect__limit{display:none}.multiselect[data-v-e1f55ce].multiselect--active.multiselect--above input.multiselect__input{border-radius:0 0 var(--border-radius) var(--border-radius)}.multiselect[data-v-e1f55ce].multiselect--disabled,.multiselect[data-v-e1f55ce].multiselect--disabled .multiselect__single{background-color:var(--color-background-dark) !important}.multiselect[data-v-e1f55ce].icon-loading-small::after{left:100%;margin-left:-24px}.multiselect[data-v-e1f55ce] .multiselect__tags{display:flex;flex-wrap:nowrap;overflow:hidden;border:1px solid var(--color-border-dark);cursor:pointer;position:relative;border-radius:3px;height:34px}.multiselect[data-v-e1f55ce] .multiselect__tags .multiselect__tags-wrap{align-items:center;display:inline-flex;overflow:hidden;max-width:100%;position:relative;padding:3px 5px;flex-grow:1}.multiselect[data-v-e1f55ce] .multiselect__tags .multiselect__tags-wrap:empty ~ input.multiselect__input{opacity:1 !important}.multiselect[data-v-e1f55ce] .multiselect__tags .multiselect__tags-wrap:empty ~ input.multiselect__input+span:not(.multiselect__single){display:none}.multiselect[data-v-e1f55ce] .multiselect__tags .multiselect__tags-wrap .multiselect__tag{flex:1 0 0;line-height:20px;padding:1px 5px;background-image:none;color:var(--color-main-text);border:1px solid var(--color-border-dark);display:inline-flex;align-items:center;border-radius:3px;min-width:0;max-width:50%;max-width:fit-content;max-width:-moz-fit-content}.multiselect[data-v-e1f55ce] .multiselect__tags .multiselect__tags-wrap .multiselect__tag:only-child{flex:0 1 auto}.multiselect[data-v-e1f55ce] .multiselect__tags .multiselect__tags-wrap .multiselect__tag:not(:last-child){margin-right:5px}.multiselect[data-v-e1f55ce] .multiselect__tags .multiselect__tags-wrap .multiselect__tag>span{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.multiselect[data-v-e1f55ce] .multiselect__tags .multiselect__single,.multiselect[data-v-e1f55ce] .multiselect__tags .multiselect__placeholder{padding:7px 6px;flex:0 0 100%;z-index:1;background-color:var(--color-main-background);cursor:pointer;line-height:18px;color:var(--color-text-lighter)}.multiselect[data-v-e1f55ce] .multiselect__tags .multiselect__strong,.multiselect[data-v-e1f55ce] .multiselect__tags .multiselect__limit{flex:0 0 auto;line-height:20px;color:var(--color-text-lighter);display:inline-flex;align-items:center;opacity:.7;margin-right:5px;z-index:5}.multiselect[data-v-e1f55ce] .multiselect__tags input.multiselect__input{width:100% !important;position:absolute !important;top:0;left:0;margin:0;opacity:0;height:100%;border:none;display:block !important;cursor:pointer;padding:7px 6px !important}.multiselect[data-v-e1f55ce] .multiselect__content-wrapper{position:absolute;width:100%;margin-top:-1px;border:1px solid var(--color-border-dark);background:var(--color-main-background);z-index:50;max-height:250px;overflow-y:auto;border-radius:0 0 var(--border-radius) var(--border-radius)}.multiselect[data-v-e1f55ce] .multiselect__content-wrapper .multiselect__content{width:100%;padding:0}.multiselect[data-v-e1f55ce] .multiselect__content-wrapper li{position:relative;display:flex;align-items:center;background-color:transparent}.multiselect[data-v-e1f55ce] .multiselect__content-wrapper li,.multiselect[data-v-e1f55ce] .multiselect__content-wrapper li span{cursor:pointer}.multiselect[data-v-e1f55ce] .multiselect__content-wrapper li>span{padding:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0;height:auto;min-height:1em;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-flex;align-items:center;background-color:transparent;color:var(--color-text-lighter);width:100%}.multiselect[data-v-e1f55ce] .multiselect__content-wrapper li>span::before{content:' ';background-repeat:no-repeat;background-position:center;min-width:16px;min-height:16px;display:block;opacity:.5;margin-right:5px;visibility:hidden}.multiselect[data-v-e1f55ce] .multiselect__content-wrapper li>span.multiselect__option--disabled{background-color:var(--color-background-dark);opacity:.5}.multiselect[data-v-e1f55ce] .multiselect__content-wrapper li>span.multiselect__option--highlight{color:var(--color-main-text);background-color:var(--color-background-dark)}.multiselect[data-v-e1f55ce] .multiselect__content-wrapper li>span:not(.multiselect__option--disabled):hover::before{opacity:.3}.multiselect[data-v-e1f55ce] .multiselect__content-wrapper li>span.multiselect__option--selected::before,.multiselect[data-v-e1f55ce] .multiselect__content-wrapper li>span:not(.multiselect__option--disabled):hover::before{visibility:visible}.multiselect[data-v-e1f55ce].multiselect--above .multiselect__content-wrapper{bottom:100%;margin-bottom:-1px}.multiselect[data-v-e1f55ce].multiselect--multiple .multiselect__content-wrapper li>span::before{background-image:var(--icon-checkmark-000)}.multiselect[data-v-e1f55ce].multiselect--multiple .multiselect__content-wrapper li>span[data-select='create']::before{background-image:var(--icon-add-000);visibility:visible}.multiselect[data-v-e1f55ce].multiselect--single .multiselect__content-wrapper li>span::before{display:none}.multiselect[data-v-e1f55ce]:hover .multiselect__placeholder,.multiselect[data-v-e1f55ce] input.multiselect__input .multiselect__placeholder{color:var(--color-main-text)}\n", ""]), e.exports = t
        }])
    }, 679: function (e, t, s) {
        /*!
 * vue-infinite-loading v2.4.5
 * (c) 2016-2020 PeachScript
 * MIT License
 */
        e.exports = function (e) {
            var t = {};

            function s(n) {
                if (t[n]) return t[n].exports;
                var a = t[n] = {i: n, l: !1, exports: {}};
                return e[n].call(a.exports, a, a.exports, s), a.l = !0, a.exports
            }

            return s.m = e, s.c = t, s.d = function (e, t, n) {
                s.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
            }, s.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
            }, s.t = function (e, t) {
                if (1 & t && (e = s(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (s.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e) for (var a in e) s.d(n, a, function (t) {
                    return e[t]
                }.bind(null, a));
                return n
            }, s.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return s.d(t, "a", t), t
            }, s.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, s.p = "", s(s.s = 9)
        }([function (e, t, s) {
            var n = s(6);
            "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(3).default)("6223ff68", n, !0, {})
        }, function (e, t, s) {
            var n = s(8);
            "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(3).default)("27f0e51f", n, !0, {})
        }, function (e, t) {
            e.exports = function (e) {
                var t = [];
                return t.toString = function () {
                    return this.map((function (t) {
                        var s = function (e, t) {
                            var s, n = e[1] || "", a = e[3];
                            if (!a) return n;
                            if (t && "function" == typeof btoa) {
                                var o = (s = a, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"),
                                    r = a.sources.map((function (e) {
                                        return "/*# sourceURL=" + a.sourceRoot + e + " */"
                                    }));
                                return [n].concat(r).concat([o]).join("\n")
                            }
                            return [n].join("\n")
                        }(t, e);
                        return t[2] ? "@media " + t[2] + "{" + s + "}" : s
                    })).join("")
                }, t.i = function (e, s) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    for (var n = {}, a = 0; a < this.length; a++) {
                        var o = this[a][0];
                        "number" == typeof o && (n[o] = !0)
                    }
                    for (a = 0; a < e.length; a++) {
                        var r = e[a];
                        "number" == typeof r[0] && n[r[0]] || (s && !r[2] ? r[2] = s : s && (r[2] = "(" + r[2] + ") and (" + s + ")"), t.push(r))
                    }
                }, t
            }
        }, function (e, t, s) {
            "use strict";

            function n(e, t) {
                for (var s = [], n = {}, a = 0; a < t.length; a++) {
                    var o = t[a], r = o[0], i = {id: e + ":" + a, css: o[1], media: o[2], sourceMap: o[3]};
                    n[r] ? n[r].parts.push(i) : s.push(n[r] = {id: r, parts: [i]})
                }
                return s
            }

            s.r(t), s.d(t, "default", (function () {
                return d
            }));
            var a = "undefined" != typeof document;
            if ("undefined" != typeof DEBUG && DEBUG && !a) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
            var o = {}, r = a && (document.head || document.getElementsByTagName("head")[0]), i = null, c = 0, l = !1,
                m = function () {
                }, A = null,
                u = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

            function d(e, t, s, a) {
                l = s, A = a || {};
                var r = n(e, t);
                return g(r), function (t) {
                    for (var s = [], a = 0; a < r.length; a++) {
                        var i = r[a];
                        (c = o[i.id]).refs--, s.push(c)
                    }
                    for (t ? g(r = n(e, t)) : r = [], a = 0; a < s.length; a++) {
                        var c;
                        if (0 === (c = s[a]).refs) {
                            for (var l = 0; l < c.parts.length; l++) c.parts[l]();
                            delete o[c.id]
                        }
                    }
                }
            }

            function g(e) {
                for (var t = 0; t < e.length; t++) {
                    var s = e[t], n = o[s.id];
                    if (n) {
                        n.refs++;
                        for (var a = 0; a < n.parts.length; a++) n.parts[a](s.parts[a]);
                        for (; a < s.parts.length; a++) n.parts.push(f(s.parts[a]));
                        n.parts.length > s.parts.length && (n.parts.length = s.parts.length)
                    } else {
                        var r = [];
                        for (a = 0; a < s.parts.length; a++) r.push(f(s.parts[a]));
                        o[s.id] = {id: s.id, refs: 1, parts: r}
                    }
                }
            }

            function p() {
                var e = document.createElement("style");
                return e.type = "text/css", r.appendChild(e), e
            }

            function f(e) {
                var t, s, n = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
                if (n) {
                    if (l) return m;
                    n.parentNode.removeChild(n)
                }
                if (u) {
                    var a = c++;
                    n = i || (i = p()), t = M.bind(null, n, a, !1), s = M.bind(null, n, a, !0)
                } else n = p(), t = b.bind(null, n), s = function () {
                    n.parentNode.removeChild(n)
                };
                return t(e), function (n) {
                    if (n) {
                        if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                        t(e = n)
                    } else s()
                }
            }

            var v, h = (v = [], function (e, t) {
                return v[e] = t, v.filter(Boolean).join("\n")
            });

            function M(e, t, s, n) {
                var a = s ? "" : n.css;
                if (e.styleSheet) e.styleSheet.cssText = h(t, a); else {
                    var o = document.createTextNode(a), r = e.childNodes;
                    r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(o, r[t]) : e.appendChild(o)
                }
            }

            function b(e, t) {
                var s = t.css, n = t.media, a = t.sourceMap;
                if (n && e.setAttribute("media", n), A.ssrId && e.setAttribute("data-vue-ssr-id", t.id), a && (s += "\n/*# sourceURL=" + a.sources[0] + " */", s += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"), e.styleSheet) e.styleSheet.cssText = s; else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(s))
                }
            }
        }, function (e, t) {
            function s(t) {
                return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = s = function (e) {
                    return typeof e
                } : e.exports = s = function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, s(t)
            }

            e.exports = s
        }, function (e, t, s) {
            "use strict";
            s.r(t);
            var n = s(0), a = s.n(n);
            for (var o in n) "default" !== o && function (e) {
                s.d(t, e, (function () {
                    return n[e]
                }))
            }(o);
            t.default = a.a
        }, function (e, t, s) {
            (e.exports = s(2)(!1)).push([e.i, '.loading-wave-dots[data-v-46b20d22]{position:relative}.loading-wave-dots[data-v-46b20d22] .wave-item{position:absolute;top:50%;left:50%;display:inline-block;margin-top:-4px;width:8px;height:8px;border-radius:50%;-webkit-animation:loading-wave-dots-data-v-46b20d22 linear 2.8s infinite;animation:loading-wave-dots-data-v-46b20d22 linear 2.8s infinite}.loading-wave-dots[data-v-46b20d22] .wave-item:first-child{margin-left:-36px}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(2){margin-left:-20px;-webkit-animation-delay:.14s;animation-delay:.14s}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(3){margin-left:-4px;-webkit-animation-delay:.28s;animation-delay:.28s}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(4){margin-left:12px;-webkit-animation-delay:.42s;animation-delay:.42s}.loading-wave-dots[data-v-46b20d22] .wave-item:last-child{margin-left:28px;-webkit-animation-delay:.56s;animation-delay:.56s}@-webkit-keyframes loading-wave-dots-data-v-46b20d22{0%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}10%{-webkit-transform:translateY(-6px);transform:translateY(-6px);background:#999}20%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}to{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}}@keyframes loading-wave-dots-data-v-46b20d22{0%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}10%{-webkit-transform:translateY(-6px);transform:translateY(-6px);background:#999}20%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}to{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}}.loading-circles[data-v-46b20d22] .circle-item{width:5px;height:5px;-webkit-animation:loading-circles-data-v-46b20d22 linear .75s infinite;animation:loading-circles-data-v-46b20d22 linear .75s infinite}.loading-circles[data-v-46b20d22] .circle-item:first-child{margin-top:-14.5px;margin-left:-2.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(2){margin-top:-11.26px;margin-left:6.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(3){margin-top:-2.5px;margin-left:9.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(4){margin-top:6.26px;margin-left:6.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(5){margin-top:9.5px;margin-left:-2.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(6){margin-top:6.26px;margin-left:-11.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(7){margin-top:-2.5px;margin-left:-14.5px}.loading-circles[data-v-46b20d22] .circle-item:last-child{margin-top:-11.26px;margin-left:-11.26px}@-webkit-keyframes loading-circles-data-v-46b20d22{0%{background:#dfdfdf}90%{background:#505050}to{background:#dfdfdf}}@keyframes loading-circles-data-v-46b20d22{0%{background:#dfdfdf}90%{background:#505050}to{background:#dfdfdf}}.loading-bubbles[data-v-46b20d22] .bubble-item{background:#666;-webkit-animation:loading-bubbles-data-v-46b20d22 linear .75s infinite;animation:loading-bubbles-data-v-46b20d22 linear .75s infinite}.loading-bubbles[data-v-46b20d22] .bubble-item:first-child{margin-top:-12.5px;margin-left:-.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(2){margin-top:-9.26px;margin-left:8.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(3){margin-top:-.5px;margin-left:11.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(4){margin-top:8.26px;margin-left:8.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(5){margin-top:11.5px;margin-left:-.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(6){margin-top:8.26px;margin-left:-9.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(7){margin-top:-.5px;margin-left:-12.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:last-child{margin-top:-9.26px;margin-left:-9.26px}@-webkit-keyframes loading-bubbles-data-v-46b20d22{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}to{width:1px;height:1px;box-shadow:0 0 0 3px #666}}@keyframes loading-bubbles-data-v-46b20d22{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}to{width:1px;height:1px;box-shadow:0 0 0 3px #666}}.loading-default[data-v-46b20d22]{position:relative;border:1px solid #999;-webkit-animation:loading-rotating-data-v-46b20d22 ease 1.5s infinite;animation:loading-rotating-data-v-46b20d22 ease 1.5s infinite}.loading-default[data-v-46b20d22]:before{content:"";position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.loading-spiral[data-v-46b20d22]{border:2px solid #777;border-right-color:transparent;-webkit-animation:loading-rotating-data-v-46b20d22 linear .85s infinite;animation:loading-rotating-data-v-46b20d22 linear .85s infinite}@-webkit-keyframes loading-rotating-data-v-46b20d22{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-rotating-data-v-46b20d22{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.loading-bubbles[data-v-46b20d22],.loading-circles[data-v-46b20d22]{position:relative}.loading-bubbles[data-v-46b20d22] .bubble-item,.loading-circles[data-v-46b20d22] .circle-item{position:absolute;top:50%;left:50%;display:inline-block;border-radius:50%}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(2),.loading-circles[data-v-46b20d22] .circle-item:nth-child(2){-webkit-animation-delay:93ms;animation-delay:93ms}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(3),.loading-circles[data-v-46b20d22] .circle-item:nth-child(3){-webkit-animation-delay:.186s;animation-delay:.186s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(4),.loading-circles[data-v-46b20d22] .circle-item:nth-child(4){-webkit-animation-delay:.279s;animation-delay:.279s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(5),.loading-circles[data-v-46b20d22] .circle-item:nth-child(5){-webkit-animation-delay:.372s;animation-delay:.372s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(6),.loading-circles[data-v-46b20d22] .circle-item:nth-child(6){-webkit-animation-delay:.465s;animation-delay:.465s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(7),.loading-circles[data-v-46b20d22] .circle-item:nth-child(7){-webkit-animation-delay:.558s;animation-delay:.558s}.loading-bubbles[data-v-46b20d22] .bubble-item:last-child,.loading-circles[data-v-46b20d22] .circle-item:last-child{-webkit-animation-delay:.651s;animation-delay:.651s}', ""])
        }, function (e, t, s) {
            "use strict";
            s.r(t);
            var n = s(1), a = s.n(n);
            for (var o in n) "default" !== o && function (e) {
                s.d(t, e, (function () {
                    return n[e]
                }))
            }(o);
            t.default = a.a
        }, function (e, t, s) {
            (e.exports = s(2)(!1)).push([e.i, ".infinite-loading-container[data-v-644ea9c9]{clear:both;text-align:center}.infinite-loading-container[data-v-644ea9c9] [class^=loading-]{display:inline-block;margin:5px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%}.btn-try-infinite[data-v-644ea9c9]{margin-top:5px;padding:5px 10px;color:#999;font-size:14px;line-height:1;background:transparent;border:1px solid #ccc;border-radius:3px;outline:none;cursor:pointer}.btn-try-infinite[data-v-644ea9c9]:not(:active):hover{opacity:.8}", ""])
        }, function (e, t, s) {
            "use strict";
            s.r(t);
            var n = {throttleLimit: 50, loopCheckTimeout: 1e3, loopCheckMaxCalls: 10}, a = function () {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function () {
                                return e = {passive: !0}, !0
                            }
                        });
                        window.addEventListener("testpassive", t, t), window.remove("testpassive", t, t)
                    } catch (e) {
                    }
                    return e
                }(), o = {
                    STATE_CHANGER: ["emit `loaded` and `complete` event through component instance of `$refs` may cause error, so it will be deprecated soon, please use the `$state` argument instead (`$state` just the special `$event` variable):", "\ntemplate:", '<infinite-loading @infinite="infiniteHandler"></infinite-loading>', "\nscript:\n...\ninfiniteHandler($state) {\n  ajax('https://www.example.com/api/news')\n    .then((res) => {\n      if (res.data.length) {\n        $state.loaded();\n      } else {\n        $state.complete();\n      }\n    });\n}\n...", "", "more details: https://github.com/PeachScript/vue-infinite-loading/issues/57#issuecomment-324370549"].join("\n"),
                    INFINITE_EVENT: "`:on-infinite` property will be deprecated soon, please use `@infinite` event instead.",
                    IDENTIFIER: "the `reset` event will be deprecated soon, please reset this component by change the `identifier` property."
                },
                r = {INFINITE_LOOP: ["executed the callback function more than ".concat(n.loopCheckMaxCalls, " times for a short time, it looks like searched a wrong scroll wrapper that doest not has fixed height or maximum height, please check it. If you want to force to set a element as scroll wrapper ranther than automatic searching, you can do this:"), '\n\x3c!-- add a special attribute for the real scroll wrapper --\x3e\n<div infinite-wrapper>\n  ...\n  \x3c!-- set force-use-infinite-wrapper --\x3e\n  <infinite-loading force-use-infinite-wrapper></infinite-loading>\n</div>\nor\n<div class="infinite-wrapper">\n  ...\n  \x3c!-- set force-use-infinite-wrapper as css selector of the real scroll wrapper --\x3e\n  <infinite-loading force-use-infinite-wrapper=".infinite-wrapper"></infinite-loading>\n</div>\n    ', "more details: https://github.com/PeachScript/vue-infinite-loading/issues/55#issuecomment-316934169"].join("\n")},
                i = {READY: 0, LOADING: 1, COMPLETE: 2, ERROR: 3},
                c = {color: "#666", fontSize: "14px", padding: "10px 0"}, l = {
                    mode: "development",
                    props: {spinner: "default", distance: 100, forceUseInfiniteWrapper: !1},
                    system: n,
                    slots: {
                        noResults: "No results :(",
                        noMore: "No more data :)",
                        error: "Opps, something went wrong :(",
                        errorBtnText: "Retry",
                        spinner: ""
                    },
                    WARNINGS: o,
                    ERRORS: r,
                    STATUS: i
                }, m = s(4), A = s.n(m), u = {
                    BUBBLES: {
                        render: function (e) {
                            return e("span", {attrs: {class: "loading-bubbles"}}, Array.apply(Array, Array(8)).map((function () {
                                return e("span", {attrs: {class: "bubble-item"}})
                            })))
                        }
                    }, CIRCLES: {
                        render: function (e) {
                            return e("span", {attrs: {class: "loading-circles"}}, Array.apply(Array, Array(8)).map((function () {
                                return e("span", {attrs: {class: "circle-item"}})
                            })))
                        }
                    }, DEFAULT: {
                        render: function (e) {
                            return e("i", {attrs: {class: "loading-default"}})
                        }
                    }, SPIRAL: {
                        render: function (e) {
                            return e("i", {attrs: {class: "loading-spiral"}})
                        }
                    }, WAVEDOTS: {
                        render: function (e) {
                            return e("span", {attrs: {class: "loading-wave-dots"}}, Array.apply(Array, Array(5)).map((function () {
                                return e("span", {attrs: {class: "wave-item"}})
                            })))
                        }
                    }
                };

            function d(e, t, s, n, a, o, r, i) {
                var c, l = "function" == typeof e ? e.options : e;
                if (t && (l.render = t, l.staticRenderFns = s, l._compiled = !0), n && (l.functional = !0), o && (l._scopeId = "data-v-" + o), r ? (c = function (e) {
                    (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), a && a.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r)
                }, l._ssrRegister = c) : a && (c = i ? function () {
                    a.call(this, this.$root.$options.shadowRoot)
                } : a), c) if (l.functional) {
                    l._injectStyles = c;
                    var m = l.render;
                    l.render = function (e, t) {
                        return c.call(t), m(e, t)
                    }
                } else {
                    var A = l.beforeCreate;
                    l.beforeCreate = A ? [].concat(A, c) : [c]
                }
                return {exports: e, options: l}
            }

            var g = d({
                name: "Spinner", computed: {
                    spinnerView: function () {
                        return u[(this.$attrs.spinner || "").toUpperCase()] || this.spinnerInConfig
                    }, spinnerInConfig: function () {
                        return l.slots.spinner && "string" == typeof l.slots.spinner ? {
                            render: function () {
                                return this._v(l.slots.spinner)
                            }
                        } : "object" === A()(l.slots.spinner) ? l.slots.spinner : u[l.props.spinner.toUpperCase()] || u.DEFAULT
                    }
                }
            }, (function () {
                var e = this.$createElement;
                return (this._self._c || e)(this.spinnerView, {tag: "component"})
            }), [], !1, (function (e) {
                var t = s(5);
                t.__inject__ && t.__inject__(e)
            }), "46b20d22", null).exports;

            function p(e) {
                "production" !== l.mode && console.warn("[Vue-infinite-loading warn]: ".concat(e))
            }

            var f = {
                timers: [], caches: [], throttle: function (e) {
                    var t = this;
                    -1 === this.caches.indexOf(e) && (this.caches.push(e), this.timers.push(setTimeout((function () {
                        e(), t.caches.splice(t.caches.indexOf(e), 1), t.timers.shift()
                    }), l.system.throttleLimit)))
                }, reset: function () {
                    this.timers.forEach((function (e) {
                        clearTimeout(e)
                    })), this.timers.length = 0, this.caches = []
                }
            }, v = {
                isChecked: !1, timer: null, times: 0, track: function () {
                    var e = this;
                    this.times += 1, clearTimeout(this.timer), this.timer = setTimeout((function () {
                        e.isChecked = !0
                    }), l.system.loopCheckTimeout), this.times > l.system.loopCheckMaxCalls && (function (e) {
                        console.error("[Vue-infinite-loading error]: ".concat(e))
                    }(r.INFINITE_LOOP), this.isChecked = !0)
                }
            }, h = {
                key: "_infiniteScrollHeight", getScrollElm: function (e) {
                    return e === window ? document.documentElement : e
                }, save: function (e) {
                    var t = this.getScrollElm(e);
                    t[this.key] = t.scrollHeight
                }, restore: function (e) {
                    var t = this.getScrollElm(e);
                    "number" == typeof t[this.key] && (t.scrollTop = t.scrollHeight - t[this.key] + t.scrollTop), this.remove(t)
                }, remove: function (e) {
                    void 0 !== e[this.key] && delete e[this.key]
                }
            };

            function M(e) {
                return e.offsetWidth + e.offsetHeight > 0
            }

            var b = d({
                name: "InfiniteLoading",
                data: function () {
                    return {scrollParent: null, scrollHandler: null, isFirstLoad: !0, status: i.READY, slots: l.slots}
                },
                components: {Spinner: g},
                computed: {
                    isShowSpinner: function () {
                        return this.status === i.LOADING
                    }, isShowError: function () {
                        return this.status === i.ERROR
                    }, isShowNoResults: function () {
                        return this.status === i.COMPLETE && this.isFirstLoad
                    }, isShowNoMore: function () {
                        return this.status === i.COMPLETE && !this.isFirstLoad
                    }, slotStyles: function () {
                        var e = this, t = {};
                        return Object.keys(l.slots).forEach((function (s) {
                            var n = function (e) {
                                return e.replace(/[A-Z]/g, (function (e) {
                                    return "-".concat(e.toLowerCase())
                                }))
                            }(s);
                            (!e.$slots[n] && !l.slots[s].render || e.$slots[n] && !e.$slots[n][0].tag) && (t[s] = c)
                        })), t
                    }
                },
                props: {
                    distance: {type: Number, default: l.props.distance},
                    spinner: String,
                    direction: {type: String, default: "bottom"},
                    forceUseInfiniteWrapper: {type: [Boolean, String], default: l.props.forceUseInfiniteWrapper},
                    identifier: {default: +new Date},
                    onInfinite: Function
                },
                watch: {
                    identifier: function () {
                        this.stateChanger.reset()
                    }
                },
                mounted: function () {
                    var e = this;
                    this.$watch("forceUseInfiniteWrapper", (function () {
                        e.scrollParent = e.getScrollParent()
                    }), {immediate: !0}), this.scrollHandler = function (t) {
                        e.status === i.READY && (t && t.constructor === Event && M(e.$el) ? f.throttle(e.attemptLoad) : e.attemptLoad())
                    }, setTimeout((function () {
                        e.scrollHandler(), e.scrollParent.addEventListener("scroll", e.scrollHandler, a)
                    }), 1), this.$on("$InfiniteLoading:loaded", (function (t) {
                        e.isFirstLoad = !1, "top" === e.direction && e.$nextTick((function () {
                            h.restore(e.scrollParent)
                        })), e.status === i.LOADING && e.$nextTick(e.attemptLoad.bind(null, !0)), t && t.target === e || p(o.STATE_CHANGER)
                    })), this.$on("$InfiniteLoading:complete", (function (t) {
                        e.status = i.COMPLETE, e.$nextTick((function () {
                            e.$forceUpdate()
                        })), e.scrollParent.removeEventListener("scroll", e.scrollHandler, a), t && t.target === e || p(o.STATE_CHANGER)
                    })), this.$on("$InfiniteLoading:reset", (function (t) {
                        e.status = i.READY, e.isFirstLoad = !0, h.remove(e.scrollParent), e.scrollParent.addEventListener("scroll", e.scrollHandler, a), setTimeout((function () {
                            f.reset(), e.scrollHandler()
                        }), 1), t && t.target === e || p(o.IDENTIFIER)
                    })), this.stateChanger = {
                        loaded: function () {
                            e.$emit("$InfiniteLoading:loaded", {target: e})
                        }, complete: function () {
                            e.$emit("$InfiniteLoading:complete", {target: e})
                        }, reset: function () {
                            e.$emit("$InfiniteLoading:reset", {target: e})
                        }, error: function () {
                            e.status = i.ERROR, f.reset()
                        }
                    }, this.onInfinite && p(o.INFINITE_EVENT)
                },
                deactivated: function () {
                    this.status === i.LOADING && (this.status = i.READY), this.scrollParent.removeEventListener("scroll", this.scrollHandler, a)
                },
                activated: function () {
                    this.scrollParent.addEventListener("scroll", this.scrollHandler, a)
                },
                methods: {
                    attemptLoad: function (e) {
                        var t = this;
                        this.status !== i.COMPLETE && M(this.$el) && this.getCurrentDistance() <= this.distance ? (this.status = i.LOADING, "top" === this.direction && this.$nextTick((function () {
                            h.save(t.scrollParent)
                        })), "function" == typeof this.onInfinite ? this.onInfinite.call(null, this.stateChanger) : this.$emit("infinite", this.stateChanger), !e || this.forceUseInfiniteWrapper || v.isChecked || v.track()) : this.status === i.LOADING && (this.status = i.READY)
                    }, getCurrentDistance: function () {
                        return "top" === this.direction ? "number" == typeof this.scrollParent.scrollTop ? this.scrollParent.scrollTop : this.scrollParent.pageYOffset : this.$el.getBoundingClientRect().top - (this.scrollParent === window ? window.innerHeight : this.scrollParent.getBoundingClientRect().bottom)
                    }, getScrollParent: function () {
                        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.$el;
                        return "string" == typeof this.forceUseInfiniteWrapper && (e = document.querySelector(this.forceUseInfiniteWrapper)), e || ("BODY" === t.tagName ? e = window : (!this.forceUseInfiniteWrapper && ["scroll", "auto"].indexOf(getComputedStyle(t).overflowY) > -1 || t.hasAttribute("infinite-wrapper") || t.hasAttribute("data-infinite-wrapper")) && (e = t)), e || this.getScrollParent(t.parentNode)
                    }
                },
                destroyed: function () {
                    !this.status !== i.COMPLETE && (f.reset(), h.remove(this.scrollParent), this.scrollParent.removeEventListener("scroll", this.scrollHandler, a))
                }
            }, (function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {staticClass: "infinite-loading-container"}, [s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isShowSpinner,
                        expression: "isShowSpinner"
                    }], staticClass: "infinite-status-prompt", style: e.slotStyles.spinner
                }, [e._t("spinner", [s("spinner", {attrs: {spinner: e.spinner}})])], 2), e._v(" "), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isShowNoResults,
                        expression: "isShowNoResults"
                    }], staticClass: "infinite-status-prompt", style: e.slotStyles.noResults
                }, [e._t("no-results", [e.slots.noResults.render ? s(e.slots.noResults, {tag: "component"}) : [e._v(e._s(e.slots.noResults))]])], 2), e._v(" "), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isShowNoMore,
                        expression: "isShowNoMore"
                    }], staticClass: "infinite-status-prompt", style: e.slotStyles.noMore
                }, [e._t("no-more", [e.slots.noMore.render ? s(e.slots.noMore, {tag: "component"}) : [e._v(e._s(e.slots.noMore))]])], 2), e._v(" "), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isShowError,
                        expression: "isShowError"
                    }], staticClass: "infinite-status-prompt", style: e.slotStyles.error
                }, [e._t("error", [e.slots.error.render ? s(e.slots.error, {
                    tag: "component",
                    attrs: {trigger: e.attemptLoad}
                }) : [e._v("\n        " + e._s(e.slots.error) + "\n        "), s("br"), e._v(" "), s("button", {
                    staticClass: "btn-try-infinite",
                    domProps: {textContent: e._s(e.slots.errorBtnText)},
                    on: {click: e.attemptLoad}
                })]], {trigger: e.attemptLoad})], 2)])
            }), [], !1, (function (e) {
                var t = s(7);
                t.__inject__ && t.__inject__(e)
            }), "644ea9c9", null).exports;

            function T(e) {
                l.mode = e.config.productionTip ? "development" : "production"
            }

            Object.defineProperty(b, "install", {
                configurable: !1, enumerable: !1, value: function (e, t) {
                    Object.assign(l.props, t && t.props), Object.assign(l.slots, t && t.slots), Object.assign(l.system, t && t.system), e.component("infinite-loading", b), T(e)
                }
            }), "undefined" != typeof window && window.Vue && (window.Vue.component("infinite-loading", b), T(window.Vue)), t.default = b
        }])
    }
}]);
//# sourceMappingURL=vue-7.js.map?v=29ccc51b17d5c11d5488
