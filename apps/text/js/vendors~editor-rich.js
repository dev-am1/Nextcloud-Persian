(window.textWebpackJsonp = window.textWebpackJsonp || []).push([[199], {
    199: function (e, t, s) {
        window, e.exports = function (e) {
            var t = {};

            function s(n) {
                if (t[n]) return t[n].exports;
                var A = t[n] = {i: n, l: !1, exports: {}};
                return e[n].call(A.exports, A, A.exports, s), A.l = !0, A.exports
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
                }), 2 & t && "string" != typeof e) for (var A in e) s.d(n, A, function (t) {
                    return e[t]
                }.bind(null, A));
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
            }, s.p = "/dist/", s(s.s = 51)
        }([function (e, t, s) {
            "use strict";

            function n(e, t, s, n, A, o, a, i) {
                var r, c = "function" == typeof e ? e.options : e;
                if (t && (c.render = t, c.staticRenderFns = s, c._compiled = !0), n && (c.functional = !0), o && (c._scopeId = "data-v-" + o), a ? (r = function (e) {
                    (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), A && A.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a)
                }, c._ssrRegister = r) : A && (r = i ? function () {
                    A.call(this, this.$root.$options.shadowRoot)
                } : A), r) if (c.functional) {
                    c._injectStyles = r;
                    var l = c.render;
                    c.render = function (e, t) {
                        return r.call(t), l(e, t)
                    }
                } else {
                    var m = c.beforeCreate;
                    c.beforeCreate = m ? [].concat(m, r) : [r]
                }
                return {exports: e, options: c}
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
                            var s, n, A, o = e[1] || "", a = e[3];
                            if (!a) return o;
                            if (t && "function" == typeof btoa) {
                                var i = (s = a, n = btoa(unescape(encodeURIComponent(JSON.stringify(s)))), A = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n), "/*# ".concat(A, " */")),
                                    r = a.sources.map((function (e) {
                                        return "/*# sourceURL=".concat(a.sourceRoot || "").concat(e, " */")
                                    }));
                                return [o].concat(r).concat([i]).join("\n")
                            }
                            return [o].join("\n")
                        }(t, e);
                        return t[2] ? "@media ".concat(t[2], " {").concat(s, "}") : s
                    })).join("")
                }, t.i = function (e, s, n) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    var A = {};
                    if (n) for (var o = 0; o < this.length; o++) {
                        var a = this[o][0];
                        null != a && (A[a] = !0)
                    }
                    for (var i = 0; i < e.length; i++) {
                        var r = [].concat(e[i]);
                        n && A[r[0]] || (s && (r[2] ? r[2] = "".concat(s, " and ").concat(r[2]) : r[2] = s), t.push(r))
                    }
                }, t
            }
        }, function (e, t, s) {
            "use strict";

            function n(e, t) {
                for (var s = [], n = {}, A = 0; A < t.length; A++) {
                    var o = t[A], a = o[0], i = {id: e + ":" + A, css: o[1], media: o[2], sourceMap: o[3]};
                    n[a] ? n[a].parts.push(i) : s.push(n[a] = {id: a, parts: [i]})
                }
                return s
            }

            s.r(t), s.d(t, "default", (function () {
                return g
            }));
            var A = "undefined" != typeof document;
            if ("undefined" != typeof DEBUG && DEBUG && !A) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
            var o = {}, a = A && (document.head || document.getElementsByTagName("head")[0]), i = null, r = 0, c = !1,
                l = function () {
                }, m = null,
                u = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

            function g(e, t, s, A) {
                c = s, m = A || {};
                var a = n(e, t);
                return d(a), function (t) {
                    for (var s = [], A = 0; A < a.length; A++) {
                        var i = a[A];
                        (r = o[i.id]).refs--, s.push(r)
                    }
                    for (t ? d(a = n(e, t)) : a = [], A = 0; A < s.length; A++) {
                        var r;
                        if (0 === (r = s[A]).refs) {
                            for (var c = 0; c < r.parts.length; c++) r.parts[c]();
                            delete o[r.id]
                        }
                    }
                }
            }

            function d(e) {
                for (var t = 0; t < e.length; t++) {
                    var s = e[t], n = o[s.id];
                    if (n) {
                        n.refs++;
                        for (var A = 0; A < n.parts.length; A++) n.parts[A](s.parts[A]);
                        for (; A < s.parts.length; A++) n.parts.push(f(s.parts[A]));
                        n.parts.length > s.parts.length && (n.parts.length = s.parts.length)
                    } else {
                        var a = [];
                        for (A = 0; A < s.parts.length; A++) a.push(f(s.parts[A]));
                        o[s.id] = {id: s.id, refs: 1, parts: a}
                    }
                }
            }

            function p() {
                var e = document.createElement("style");
                return e.type = "text/css", a.appendChild(e), e
            }

            function f(e) {
                var t, s, n = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
                if (n) {
                    if (c) return l;
                    n.parentNode.removeChild(n)
                }
                if (u) {
                    var A = r++;
                    n = i || (i = p()), t = h.bind(null, n, A, !1), s = h.bind(null, n, A, !0)
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

            var v, M = (v = [], function (e, t) {
                return v[e] = t, v.filter(Boolean).join("\n")
            });

            function h(e, t, s, n) {
                var A = s ? "" : n.css;
                if (e.styleSheet) e.styleSheet.cssText = M(t, A); else {
                    var o = document.createTextNode(A), a = e.childNodes;
                    a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
                }
            }

            function b(e, t) {
                var s = t.css, n = t.media, A = t.sourceMap;
                if (n && e.setAttribute("media", n), m.ssrId && e.setAttribute("data-vue-ssr-id", t.id), A && (s += "\n/*# sourceURL=" + A.sources[0] + " */", s += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(A)))) + " */"), e.styleSheet) e.styleSheet.cssText = s; else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(s))
                }
            }
        }, , function (e, t) {
            e.exports = s(50)
        }, , , , , , , , , , , function (e, t) {
            e.exports = s(98)
        }, , , function (e, t) {
            e.exports = s(51)
        }, function (e, t) {
            e.exports = s(95)
        }, function (e, t) {
            e.exports = s(97)
        }, , , function (e, t) {
            e.exports = s(96)
        }, function (e, t) {
            e.exports = s(179)
        }, , , , , , , , , , function (e, t, s) {
            var n = s(73);
            "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("1f2ec49f", n, !0, {})
        }, function (e, t, s) {
            var n = s(75);
            "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("9c561116", n, !0, {})
        }, function (e, t, s) {
            var n = s(77);
            "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("93093140", n, !0, {})
        }, , , , , , function (e, t) {
        }, , , , , , , , , function (e, t, s) {
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
            }, A = (s(72), s(74), s(0)), o = {
                name: "PopoverMenu", components: {
                    PopoverMenuItem: Object(A.a)(n, (function () {
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
                                    var s = e.item.model, n = t.target, A = !!n.checked;
                                    if (Array.isArray(s)) {
                                        var o = e._i(s, null);
                                        n.checked ? o < 0 && e.$set(e.item, "model", s.concat([null])) : o > -1 && e.$set(e.item, "model", s.slice(0, o).concat(s.slice(o + 1)))
                                    } else e.$set(e.item, "model", A)
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
            }, a = (s(76), s(42)), i = s.n(a), r = Object(A.a)(o, (function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("ul", this._l(this.menu, (function (e, s) {
                    return t("PopoverMenuItem", {key: s, attrs: {item: e}})
                })), 1)
            }), [], !1, null, "81c2afc0", null);
            "function" == typeof i.a && i()(r);
            var c = r.exports;
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
             */t.default = c
        }, , , , , , , , , , , , , , , , , , , , , function (e, t, s) {
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
        }])
    }, 498: function (e, t, s) {
        window, e.exports = function (e) {
            var t = {};

            function s(n) {
                if (t[n]) return t[n].exports;
                var A = t[n] = {i: n, l: !1, exports: {}};
                return e[n].call(A.exports, A, A.exports, s), A.l = !0, A.exports
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
                }), 2 & t && "string" != typeof e) for (var A in e) s.d(n, A, function (t) {
                    return e[t]
                }.bind(null, A));
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
            }, s.p = "/dist/", s(s.s = 38)
        }([function (e, t, s) {
            "use strict";

            function n(e, t, s, n, A, o, a, i) {
                var r, c = "function" == typeof e ? e.options : e;
                if (t && (c.render = t, c.staticRenderFns = s, c._compiled = !0), n && (c.functional = !0), o && (c._scopeId = "data-v-" + o), a ? (r = function (e) {
                    (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), A && A.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a)
                }, c._ssrRegister = r) : A && (r = i ? function () {
                    A.call(this, this.$root.$options.shadowRoot)
                } : A), r) if (c.functional) {
                    c._injectStyles = r;
                    var l = c.render;
                    c.render = function (e, t) {
                        return r.call(t), l(e, t)
                    }
                } else {
                    var m = c.beforeCreate;
                    c.beforeCreate = m ? [].concat(m, r) : [r]
                }
                return {exports: e, options: c}
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
                            var s, n, A, o = e[1] || "", a = e[3];
                            if (!a) return o;
                            if (t && "function" == typeof btoa) {
                                var i = (s = a, n = btoa(unescape(encodeURIComponent(JSON.stringify(s)))), A = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n), "/*# ".concat(A, " */")),
                                    r = a.sources.map((function (e) {
                                        return "/*# sourceURL=".concat(a.sourceRoot || "").concat(e, " */")
                                    }));
                                return [o].concat(r).concat([i]).join("\n")
                            }
                            return [o].join("\n")
                        }(t, e);
                        return t[2] ? "@media ".concat(t[2], " {").concat(s, "}") : s
                    })).join("")
                }, t.i = function (e, s, n) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    var A = {};
                    if (n) for (var o = 0; o < this.length; o++) {
                        var a = this[o][0];
                        null != a && (A[a] = !0)
                    }
                    for (var i = 0; i < e.length; i++) {
                        var r = [].concat(e[i]);
                        n && A[r[0]] || (s && (r[2] ? r[2] = "".concat(s, " and ").concat(r[2]) : r[2] = s), t.push(r))
                    }
                }, t
            }
        }, function (e, t, s) {
            "use strict";

            function n(e, t) {
                for (var s = [], n = {}, A = 0; A < t.length; A++) {
                    var o = t[A], a = o[0], i = {id: e + ":" + A, css: o[1], media: o[2], sourceMap: o[3]};
                    n[a] ? n[a].parts.push(i) : s.push(n[a] = {id: a, parts: [i]})
                }
                return s
            }

            s.r(t), s.d(t, "default", (function () {
                return g
            }));
            var A = "undefined" != typeof document;
            if ("undefined" != typeof DEBUG && DEBUG && !A) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
            var o = {}, a = A && (document.head || document.getElementsByTagName("head")[0]), i = null, r = 0, c = !1,
                l = function () {
                }, m = null,
                u = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

            function g(e, t, s, A) {
                c = s, m = A || {};
                var a = n(e, t);
                return d(a), function (t) {
                    for (var s = [], A = 0; A < a.length; A++) {
                        var i = a[A];
                        (r = o[i.id]).refs--, s.push(r)
                    }
                    for (t ? d(a = n(e, t)) : a = [], A = 0; A < s.length; A++) {
                        var r;
                        if (0 === (r = s[A]).refs) {
                            for (var c = 0; c < r.parts.length; c++) r.parts[c]();
                            delete o[r.id]
                        }
                    }
                }
            }

            function d(e) {
                for (var t = 0; t < e.length; t++) {
                    var s = e[t], n = o[s.id];
                    if (n) {
                        n.refs++;
                        for (var A = 0; A < n.parts.length; A++) n.parts[A](s.parts[A]);
                        for (; A < s.parts.length; A++) n.parts.push(f(s.parts[A]));
                        n.parts.length > s.parts.length && (n.parts.length = s.parts.length)
                    } else {
                        var a = [];
                        for (A = 0; A < s.parts.length; A++) a.push(f(s.parts[A]));
                        o[s.id] = {id: s.id, refs: 1, parts: a}
                    }
                }
            }

            function p() {
                var e = document.createElement("style");
                return e.type = "text/css", a.appendChild(e), e
            }

            function f(e) {
                var t, s, n = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
                if (n) {
                    if (c) return l;
                    n.parentNode.removeChild(n)
                }
                if (u) {
                    var A = r++;
                    n = i || (i = p()), t = h.bind(null, n, A, !1), s = h.bind(null, n, A, !0)
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

            var v, M = (v = [], function (e, t) {
                return v[e] = t, v.filter(Boolean).join("\n")
            });

            function h(e, t, s, n) {
                var A = s ? "" : n.css;
                if (e.styleSheet) e.styleSheet.cssText = M(t, A); else {
                    var o = document.createTextNode(A), a = e.childNodes;
                    a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
                }
            }

            function b(e, t) {
                var s = t.css, n = t.media, A = t.sourceMap;
                if (n && e.setAttribute("media", n), m.ssrId && e.setAttribute("data-vue-ssr-id", t.id), A && (s += "\n/*# sourceURL=" + A.sources[0] + " */", s += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(A)))) + " */"), e.styleSheet) e.styleSheet.cssText = s; else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(s))
                }
            }
        }, function (e, t) {
            e.exports = s(183)
        }, function (e, t) {
            e.exports = s(50)
        }, function (e, t) {
            e.exports = s(44)
        }, function (e, t, s) {
            "use strict";
            s.d(t, "b", (function () {
                return i
            })), s.d(t, "a", (function () {
                return a
            })), s(22);
            var n = s(27), A = Object(n.getGettextBuilder)().detectLocale();
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
                return A.addTranslation(e.locale, e.json)
            }));
            var o = A.build(), a = o.ngettext.bind(o), i = o.gettext.bind(o)
        }, function (e, t, s) {
            "use strict";
            e.exports = function (e, t) {
                return t || (t = {}), "string" != typeof (e = e && e.__esModule ? e.default : e) ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
            }
        }, function (e, t, s) {
            "use strict";
            s.r(t), t.default = "data:application/vnd.ms-fontobject;base64,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"
        }, function (e, t, s) {
            "use strict";
            s.r(t), t.default = "data:font/woff;base64,d09GRgABAAAAAAtQAAoAAAAACwgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAAA9AAAAGAAAABgdOOPl2NtYXAAAAFUAAABQgAAAUIADeu0Z2x5ZgAAApgAAASEAAAEhPUXrnRoZWFkAAAHHAAAADYAAAA2J8XYqmhoZWEAAAdUAAAAJAAAACQnHBOFaG10eAAAB3gAAAAsAAAALGfe//9sb2NhAAAHpAAAACAAAAAgB24IRm1heHAAAAfEAAAAIAAAACABHABXbmFtZQAAB+QAAAKmAAACpqKxgpxwb3N0AAAKjAAAAMQAAADE5olajAAEEpQBkAAFAAAMZQ2sAAACvAxlDawAAAlgAPUFCgAAAgAFAwAAAAAAAAAAAAAQAAAAAAAAAAAAAABQZkVkAEDqAeoOE4gAAAHCE4gAAAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAAAAAA8AAMAAQAAABwABAAgAAAABAAEAAEAAOoO//8AAOoB//8WAAABAAAAAAAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAA6mD0MABQALAAAJAhEJBBEJAQ6m+oIFfvu6BEb6gvqCBX77ugRGD0L6gvqCATgERgRGATj6gvqCATgERgRGAAEAAAAADW4SUAAFAAAJAREJAREGGwdT93QIjAnE+K3+yAiLCIz+xwACAAAAAA/fD0MABQALAAAJAhEJBBEJAQTiBX76ggRG+7oFfgV/+oEERvu6BEYFfgV+/sj7uvu6/sgFfgV+/sj7uvu6AAEAAAAADqYSUAAFAAAJAREJARENbvitCIv3dQnEB1MBOfd093UBOAABAAAAAAY3E4gABQAAEwcJARcBlJQFcvqOlAWjE4hV9pH2kVUJxAAAAQAAAAARhw+DAAUAAAkFD8338/v7/kYFvwnHD4P38wQF/kf6QQnGAAEAAAAAERcRFwALAAAJCxEX/e36wPrA/e0FQPrAAhMFQAVAAhP6wASE/e0FQPrAAhMFQAVAAhP6wAVA/e36wAAB//8AABOTEuwAMwAAASIHDgEXFhcBISYHBgcGBwYUFxYXFhcWNyEBBgcGFxYXHgEXFhcWNzY3ATY3NicmJwEuAQpgZU9KRhASSAXX8eBNPjopJxQUFBQnKTo+TQ4g+ik3GhgDAxsZVjU3Oz46PzUH7TsVFRQVPPgTLHQS7Dk0rFlgR/oqARsYLiw5OHg4OSwuGBsC+ik1Pzs+Ojc2VhkaAwMYGTgH7DxRUE9SPAfsLTIAAAACAAAAAA6mElAAGABGAAABIgcOAQcGFBceARcWMjc+ATc2NCcuAScmASIHBgcGFBcWFxYzIREhIgcGBwYUFxYXFjchMjc2NzY0JyYnJiMhETQnJicmIwl2b2ZimCkrKymYYmbeZmKXKisrKpdiZvw2VkhHKSsrKUdIVgJx/Y9WSEcpKyspR0hWB1NVSEcpKyspR0hV/Y8rKUdJVRJQKyqXY2XfZWKYKSsrKZhiZd9lY5cqK/nlKylHSKtIRykr+eYrKUdJqklHKSsBKilHSapJRykrB1NVSEcpKwAAAwAAAAARFxEXAAMABwALAAABESERAREhEQERIRECcQ6m8VoOpvFaDqYRF/2PAnH55v2PAnH55f2PAnEAAwAAAAASngvnABgAMQBKAAABMhceARcWFAcOAQcGIicuAScmNDc+ATc2ITIXHgEXFhQHDgEHBiInLgEnJjQ3PgE3NiEyFx4BFxYUBw4BBwYiJy4BJyY0Nz4BNzYDDXBlYpgpKyspmGJl32ZilyorKyqXYmYHJm9mYpcqKysql2Jm3mZilyorKyqXYmYHJm9mYpcqKysql2Jm32VimCkrKymYYmUL5ysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKwAAAAACAAAAAA/fD98AAwAHAAABESERIREhEQOqBOICcQTiD9/zyww188sMNQAAAAEAAAAAERcRFwACAAAJAgJxDqbxWhEX+K34rQABAAAAAA6mDDUAAgAACQIE4gTiBOIMNfseBOAAAQAAAAEAAEB6caFfDzz1AAsTiAAAAADasyhOAAAAANpiTE///wAAE5MTiAAAAAgAAgAAAAAAAAABAAATiAAAAAATiP////UTkwABAAAAAAAAAAAAAAAAAAAABwAAAAATiAAAE4gAABOIAAATiAAABjYAABOIAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAiADYAWABsAIAAlAC0AQ4BfAGaAhACJgI0AkIAAQAAAA8ASwADAAAAAAACAAAACgAKAAAA/wAAAAAAAAAAABAAxgABAAAAAAABABQAAAABAAAAAAACAAcAFAABAAAAAAADABQAGwABAAAAAAAEABQALwABAAAAAAAFAAsAQwABAAAAAAAGABQATgABAAAAAAAKACsAYgABAAAAAAALABMAjQADAAEECQABACgAoAADAAEECQACAA4AyAADAAEECQADACgA1gADAAEECQAEACgA/gADAAEECQAFABYBJgADAAEECQAGACgBPAADAAEECQAKAFYBZAADAAEECQALACYBumljb25mb250LXZ1ZS1lMWY1NWNlUmVndWxhcmljb25mb250LXZ1ZS1lMWY1NWNlaWNvbmZvbnQtdnVlLWUxZjU1Y2VWZXJzaW9uIDEuMGljb25mb250LXZ1ZS1lMWY1NWNlR2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20AaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQBWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAIAAAAAAAAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAA8ADwAAAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDxFhcnJvdy1sZWZ0LWRvdWJsZQphcnJvdy1sZWZ0EmFycm93LXJpZ2h0LWRvdWJsZQthcnJvdy1yaWdodApicmVhZGNydW1iCWNoZWNrbWFyawVjbG9zZQdjb25maXJtBGluZm8EbWVudQRtb3JlBXBhdXNlBHBsYXkKdHJpYW5nbGUtcw=="
        }, function (e, t, s) {
            "use strict";
            s.r(t), t.default = "data:font/ttf;base64,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"
        }, function (e, t, s) {
            "use strict";
            s.r(t), t.default = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bWV0YWRhdGE+PC9tZXRhZGF0YT48ZGVmcz48Zm9udCBpZD0iaWNvbmZvbnQtdnVlLWUxZjU1Y2UiIGhvcml6LWFkdi14PSI1MDAwIj48Zm9udC1mYWNlIGZvbnQtZmFtaWx5PSJpY29uZm9udC12dWUtZTFmNTVjZSIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1zdHJldGNoPSJub3JtYWwiIHVuaXRzLXBlci1lbT0iNTAwMCIgcGFub3NlLTE9IjIgMCA1IDMgMCAwIDAgMCAwIDAiIGFzY2VudD0iNTAwMCIgZGVzY2VudD0iMCIgeC1oZWlnaHQ9IjAiIGJib3g9Ii0xIDAgNTAxMSA1MDAwIiB1bmRlcmxpbmUtdGhpY2tuZXNzPSIwIiB1bmRlcmxpbmUtcG9zaXRpb249IjUwIiB1bmljb2RlLXJhbmdlPSJVK2VhMDEtZWEwZSIgLz48bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMCIgIC8+PGdseXBoIGdseXBoLW5hbWU9ImFycm93LWxlZnQtZG91YmxlIiB1bmljb2RlPSImI3hlYTAxOyIgZD0iTTM3NTAgMzkwNiBsLTE0MDYgLTE0MDYgbDE0MDYgLTE0MDYgbDAgMzEyIGwtMTA5NCAxMDk0IGwxMDk0IDEwOTQgbDAgMzEyIFpNMjM0NCAzOTA2IGwtMTQwNiAtMTQwNiBsMTQwNiAtMTQwNiBsMCAzMTIgbC0xMDk0IDEwOTQgbDEwOTQgMTA5NCBsMCAzMTIgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iYXJyb3ctbGVmdCIgdW5pY29kZT0iJiN4ZWEwMjsiIGQ9Ik0xNTYzIDI1MDAgbDE4NzUgLTE4NzUgbDAgLTMxMiBsLTIxODggMjE4NyBsMjE4OCAyMTg4IGwwIC0zMTMgbC0xODc1IC0xODc1IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImFycm93LXJpZ2h0LWRvdWJsZSIgdW5pY29kZT0iJiN4ZWEwMzsiIGQ9Ik0xMjUwIDEwOTQgbDE0MDYgMTQwNiBsLTE0MDYgMTQwNiBsMCAtMzEyIGwxMDk0IC0xMDk0IGwtMTA5NCAtMTA5NCBsMCAtMzEyIFpNMjY1NiAxMDk0IGwxNDA3IDE0MDYgbC0xNDA3IDE0MDYgbDAgLTMxMiBsMTA5NCAtMTA5NCBsLTEwOTQgLTEwOTQgbDAgLTMxMiBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJhcnJvdy1yaWdodCIgdW5pY29kZT0iJiN4ZWEwNDsiIGQ9Ik0zNDM4IDI1MDAgbC0xODc1IDE4NzUgbDAgMzEzIGwyMTg3IC0yMTg4IGwtMjE4NyAtMjE4NyBsMCAzMTIgbDE4NzUgMTg3NSBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJicmVhZGNydW1iIiB1bmljb2RlPSImI3hlYTA1OyIgZD0iTTE0OCA1MDAwIGwtMTQ4IC04NSBsMTM5NCAtMjQxNSBsLTEzOTQgLTI0MTUgbDE0OCAtODUgbDE0NDMgMjUwMCBsLTE0NDMgMjUwMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJjaGVja21hcmsiIHVuaWNvZGU9IiYjeGVhMDY7IiBkPSJNNDA0NSAzOTcxIGwtMjA2MSAtMjA2MSBsLTEwMjkgMTAyOSBsLTQ0MiAtNDQxIGwxNDcxIC0xNDcxIGwyNTAzIDI1MDIgbC00NDIgNDQyIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImNsb3NlIiB1bmljb2RlPSImI3hlYTA3OyIgZD0iTTQzNzUgMTE1NiBsLTUzMSAtNTMxIGwtMTM0NCAxMzQ0IGwtMTM0NCAtMTM0NCBsLTUzMSA1MzEgbDEzNDQgMTM0NCBsLTEzNDQgMTM0NCBsNTMxIDUzMSBsMTM0NCAtMTM0NCBsMTM0NCAxMzQ0IGw1MzEgLTUzMSBsLTEzNDQgLTEzNDQgbDEzNDQgLTEzNDQgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iY29uZmlybSIgdW5pY29kZT0iJiN4ZWEwODsiIGQ9Ik0yNjU2IDQ4NDQgcS0xMDEgMCAtMTgwIC01NyBxLTc0IC01MiAtMTA5IC0xMzggcS0zNSAtODYgLTE5IC0xNzUgcTE4IC05NiA5MCAtMTY3IGwxNDk1IC0xNDk0IGwtMzYxNiAwIHEtNzcgMSAtMTM5IC0yNiBxLTU4IC0yNCAtOTkgLTcwIHEtMzkgLTQ0IC01OSAtMTAxIHEtMjAgLTU2IC0yMCAtMTE2IHEwIC02MCAyMCAtMTE2IHEyMCAtNTcgNTkgLTEwMSBxNDEgLTQ2IDk5IC03MCBxNjIgLTI3IDEzOSAtMjUgbDM2MTYgMCBsLTE0OTUgLTE0OTUgcS01NSAtNTMgLTgxIC0xMTYgcS0yNCAtNTkgLTIxIC0xMjEgcTMgLTU4IDMwIC0xMTMgcTI1IC01NCA2OCAtOTcgcTQzIC00MyA5NiAtNjggcTU1IC0yNiAxMTQgLTI5IHE2MiAtMyAxMjAgMjEgcTYzIDI1IDExNiA4MSBsMjAyOSAyMDI4IHE1OSA2MCA4MCAxNDEgcTIxIDgwIDEgMTU5IHEtMjEgODIgLTgxIDE0MiBsLTIwMjkgMjAyOCBxLTQ0IDQ1IC0xMDIgNzAgcS01OCAyNSAtMTIyIDI1IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImluZm8iIHVuaWNvZGU9IiYjeGVhMDk7IiBkPSJNMjQyMiA0Njg4IHEtMTExIDAgLTIxMyAtNDMgcS05OCAtNDIgLTE3NCAtMTE3LjUgcS03NiAtNzUuNSAtMTE3IC0xNzQuNSBxLTQzIC0xMDEgLTQzIC0yMTIuNSBxMCAtMTExLjUgNDMgLTIxMi41IHE0MSAtOTggMTE3IC0xNzQgcTc2IC03NiAxNzQgLTExNyBxMTAyIC00MyAyMTMgLTQzIHExMTEgMCAyMTMgNDMgcTk4IDQxIDE3My41IDExNyBxNzUuNSA3NiAxMTcuNSAxNzQgcTQzIDEwMSA0MyAyMTIuNSBxMCAxMTEuNSAtNDMgMjEyLjUgcS00MiA5OSAtMTE3LjUgMTc0LjUgcS03NS41IDc1LjUgLTE3My41IDExNy41IHEtMTAyIDQzIC0yMTMgNDMgWk0xNTYzIDMxMjUgcS04NiAwIC0xNTggLTQzIHEtNzEgLTQxIC0xMTIgLTExMiBxLTQzIC03MiAtNDMgLTE1Ny41IHEwIC04NS41IDQzIC0xNTcuNSBxNDEgLTcxIDExMiAtMTEyIHE3MiAtNDMgMTU4IC00MyBsNjI1IDAgbDAgLTE1NjIgbC02MjUgMCBxLTg2IDAgLTE1OCAtNDMgcS03MSAtNDEgLTExMiAtMTEyIHEtNDMgLTczIC00MyAtMTU4IHEwIC04NSA0MyAtMTU4IHE0MSAtNzEgMTEyIC0xMTIgcTcyIC00MyAxNTggLTQyIGwxODc1IDAgcTg1IDAgMTU3IDQyIHE3MSA0MSAxMTIgMTEyIHE0MyA3MyA0MyAxNTggcTAgODUgLTQzIDE1OCBxLTQxIDcxIC0xMTIgMTEyIHEtNzIgNDMgLTE1NyA0MyBsLTYyNSAwIGwwIDE4NzUgcTAgODUgLTQzIDE1NyBxLTQxIDcxIC0xMTIgMTEyIHEtNzMgNDMgLTE1OCA0MyBsLTkzNyAwIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9Im1lbnUiIHVuaWNvZGU9IiYjeGVhMGE7IiBkPSJNNjI1IDQzNzUgbDAgLTYyNSBsMzc1MCAwIGwwIDYyNSBsLTM3NTAgMCBaTTYyNSAyODEzIGwwIC02MjUgbDM3NTAgMCBsMCA2MjUgbC0zNzUwIDAgWk02MjUgMTI1MCBsMCAtNjI1IGwzNzUwIDAgbDAgNjI1IGwtMzc1MCAwIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9Im1vcmUiIHVuaWNvZGU9IiYjeGVhMGI7IiBkPSJNNzgxIDMwNDcgcTExMiAwIDIxMyAtNDMgcTk4IC00MiAxNzQgLTExNy41IHE3NiAtNzUuNSAxMTcgLTE3My41IHE0MyAtMTAyIDQzIC0yMTMgcTAgLTExMSAtNDMgLTIxMyBxLTQxIC05OCAtMTE3IC0xNzMuNSBxLTc2IC03NS41IC0xNzQgLTExNy41IHEtMTAxIC00MyAtMjEyLjUgLTQzIHEtMTExLjUgMCAtMjEzLjUgNDMgcS05OCA0MiAtMTczLjUgMTE3LjUgcS03NS41IDc1LjUgLTExNy41IDE3My41IHEtNDMgMTAyIC00MyAyMTMgcTAgMTExIDQzIDIxMyBxNDIgOTggMTE3LjUgMTczLjUgcTc1LjUgNzUuNSAxNzMuNSAxMTcuNSBxMTAyIDQzIDIxMyA0MyBaTTI1MDAgMzA0NyBxMTExIDAgMjEzIC00MyBxOTggLTQyIDE3My41IC0xMTcuNSBxNzUuNSAtNzUuNSAxMTcuNSAtMTczLjUgcTQzIC0xMDIgNDMgLTIxMyBxMCAtMTExIC00MyAtMjEzIHEtNDIgLTk4IC0xMTcuNSAtMTczLjUgcS03NS41IC03NS41IC0xNzMuNSAtMTE3LjUgcS0xMDIgLTQzIC0yMTMgLTQzIHEtMTExIDAgLTIxMyA0MyBxLTk4IDQyIC0xNzMuNSAxMTcuNSBxLTc1LjUgNzUuNSAtMTE3LjUgMTczLjUgcS00MyAxMDIgLTQzIDIxMyBxMCAxMTEgNDMgMjEzIHE0MiA5OCAxMTcuNSAxNzMuNSBxNzUuNSA3NS41IDE3My41IDExNy41IHExMDIgNDMgMjEzIDQzIFpNNDIxOSAzMDQ3IHExMTEgMCAyMTMgLTQzIHE5OCAtNDIgMTczLjUgLTExNy41IHE3NS41IC03NS41IDExNy41IC0xNzMuNSBxNDMgLTEwMiA0MyAtMjEzIHEwIC0xMTEgLTQzIC0yMTMgcS00MiAtOTggLTExNy41IC0xNzMuNSBxLTc1LjUgLTc1LjUgLTE3My41IC0xMTcuNSBxLTEwMiAtNDMgLTIxMy41IC00MyBxLTExMS41IDAgLTIxMi41IDQzIHEtOTggNDIgLTE3NCAxMTcuNSBxLTc2IDc1LjUgLTExNyAxNzMuNSBxLTQzIDEwMiAtNDMgMjEzIHEwIDExMSA0MyAyMTMgcTQxIDk4IDExNyAxNzMuNSBxNzYgNzUuNSAxNzQgMTE3LjUgcTEwMSA0MyAyMTMgNDMgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0icGF1c2UiIHVuaWNvZGU9IiYjeGVhMGM7IiBkPSJNOTM4IDQwNjMgbDAgLTMxMjUgbDEyNTAgMCBsMCAzMTI1IGwtMTI1MCAwIFpNMjgxMyA0MDYzIGwwIC0zMTI1IGwxMjUwIDAgbDAgMzEyNSBsLTEyNTAgMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJwbGF5IiB1bmljb2RlPSImI3hlYTBkOyIgZD0iTTYyNSA0Mzc1IGwzNzUwIC0xODc1IGwtMzc1MCAtMTg3NSBsMCAzNzUwIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InRyaWFuZ2xlLXMiIHVuaWNvZGU9IiYjeGVhMGU7IiBkPSJNMTI1MCAzMTI1IGwxMjUwIC0xMjUwIGwxMjUwIDEyNDggbC0yNTAwIDIgWiIgLz48L2ZvbnQ+PC9kZWZzPjwvc3ZnPg=="
        }, function (e, t) {
            e.exports = s(194)
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
            e.exports = s(195)
        }, function (e, t) {
            e.exports = s(98)
        }, , function (e, t, s) {
            "use strict";
            s(4), s(21), s(23), s(30), t.a = function (e) {
                return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, e || 5)
            }
        }, , , , function (e, t) {
            e.exports = s(52)
        }, function (e, t) {
            e.exports = s(196)
        }, function (e, t) {
            e.exports = s(96)
        }, , function (e, t) {
            e.exports = s(57)
        }, , function (e, t) {
            e.exports = s(220)
        }, , function (e, t, s) {
            var n = s(67);
            "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("640a212a", n, !0, {})
        }, function (e, t) {
            e.exports = s(99)
        }, function (e, t, s) {
            "use strict";
            s(25), s(15), s(65), s(12);
            var n = s(5), A = s.n(n);
            t.a = function (e, t, s) {
                if (void 0 !== e) for (var n = e.length - 1; n >= 0; n--) {
                    var o = e[n], a = !o.componentOptions && o.tag && -1 === t.indexOf(o.tag),
                        i = !!o.componentOptions && "string" == typeof o.componentOptions.tag,
                        r = i && -1 === t.indexOf(o.componentOptions.tag);
                    (a || !i || r) && ((a || r) && A.a.util.warn("".concat(a ? o.tag : o.componentOptions.tag, " is not allowed inside the ").concat(s.$options.name, " component"), s), e.splice(n, 1))
                }
            }
        }, , , , , , function (e, t) {
        }, function (e, t, s) {
            "use strict";
            s.r(t);
            var n = s(43);
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
             * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
             * GNU Affero General Public License for more details.
             *
             * You should have received a copy of the GNU Affero General Public License
             * along with this program. If not, see <http://www.gnu.org/licenses/>.
             *
             */t.default = n.a
        }, , function (e, t, s) {
            var n = s(41);
            "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("941c791e", n, !0, {})
        }, function (e, t, s) {
            (t = s(1)(!1)).push([e.i, ".vue-tooltip[data-v-e1f55ce]{position:absolute;z-index:100000;right:auto;left:auto;display:block;margin:0;margin-top:-3px;padding:10px 0;text-align:left;text-align:start;white-space:normal;text-decoration:none;letter-spacing:normal;word-spacing:normal;text-transform:none;word-wrap:normal;word-break:normal;opacity:0;text-shadow:none;font-family:'Nunito', 'Open Sans', Frutiger, Calibri, 'Myriad Pro', Myriad, sans-serif;font-size:12px;font-weight:normal;font-style:normal;line-height:1.6;line-break:auto;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.vue-tooltip[data-v-e1f55ce][x-placement^='top'] .tooltip-arrow{bottom:0;margin-top:0;margin-bottom:0;border-width:10px 10px 0 10px;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-e1f55ce][x-placement^='bottom'] .tooltip-arrow{top:0;margin-top:0;margin-bottom:0;border-width:0 10px 10px 10px;border-top-color:transparent;border-right-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-e1f55ce][x-placement^='right'] .tooltip-arrow{right:100%;margin-right:0;margin-left:0;border-width:10px 10px 10px 0;border-top-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-e1f55ce][x-placement^='left'] .tooltip-arrow{left:100%;margin-right:0;margin-left:0;border-width:10px 0 10px 10px;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent}.vue-tooltip[data-v-e1f55ce][aria-hidden='true']{visibility:hidden;transition:opacity .15s, visibility .15s;opacity:0}.vue-tooltip[data-v-e1f55ce][aria-hidden='false']{visibility:visible;transition:opacity .15s;opacity:1}.vue-tooltip[data-v-e1f55ce] .tooltip-inner{max-width:350px;padding:5px 8px;text-align:center;color:var(--color-main-text);border-radius:var(--border-radius);background-color:var(--color-main-background)}.vue-tooltip[data-v-e1f55ce] .tooltip-arrow{position:absolute;z-index:1;width:0;height:0;margin:0;border-style:solid;border-color:var(--color-main-background)}\n", ""]), e.exports = t
        }, , function (e, t, s) {
            "use strict";
            s(25), s(46), s(15);
            var n = s(14), A = s(13), o = s(17), a = (s(64), function (e) {
                    var t = e.getBoundingClientRect(), s = document.documentElement.clientHeight,
                        n = document.documentElement.clientWidth, A = Object.assign({});
                    return A.top = t.top < 0, A.left = t.left < 0, A.bottom = t.bottom > s, A.right = t.right > n, A.any = A.top || A.left || A.bottom || A.right, A.all = A.top && A.left && A.bottom && A.right, A.offsetY = A.top ? t.top : A.bottom ? t.bottom - s : 0, A.offsetX = A.left ? t.left : A.right ? t.right - n : 0, A
                }), i = s(31), r = s(6),
                c = ["ActionButton", "ActionCheckbox", "ActionInput", "ActionLink", "ActionRadio", "ActionRouter", "ActionSeparator", "ActionText", "ActionTextEditable"],
                l = {
                    name: "Actions",
                    directives: {ClickOutside: n.directive, tooltip: A.default},
                    props: {
                        open: {type: Boolean, default: !1},
                        forceMenu: {type: Boolean, default: !1},
                        menuAlign: {
                            type: String, default: "center", validator: function (e) {
                                return ["left", "center", "right"].indexOf(e) > -1
                            }
                        },
                        defaultIcon: {type: String, default: "action-item__menutoggle--default-icon"},
                        ariaLabel: {type: String, default: Object(r.b)("Actions")}
                    },
                    data: function () {
                        return {
                            actions: [],
                            opened: this.open,
                            focusIndex: 0,
                            randomId: "menu-" + Object(o.a)(),
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
                        this.initActions(), Object(i.a)(this.$slots.default, c, this)
                    },
                    beforeUpdate: function () {
                        this.initActions(), Object(i.a)(this.$slots.default, c, this)
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
                                var e = a(this.$refs.menu);
                                (e.left || e.right) && (this.offsetX = e.offsetX > 0 ? Math.round(e.offsetX) + 5 : Math.round(e.offsetX) - 5), e.bottom && (this.offsetY = 0 - Math.round(this.$refs.menu.clientHeight) - 42, this.offsetYArrow = Math.round(this.$refs.menu.clientHeight) + 18, this.rotateArrow = !0)
                            }
                        }, onMouseFocusAction: function (e) {
                            if (document.activeElement !== e.target) {
                                var t = e.target.closest("li");
                                if (t) {
                                    var s = t.querySelector(".focusable");
                                    if (s) {
                                        var n = this.$refs.menu.querySelectorAll(".focusable"),
                                            A = Array.prototype.indexOf.call(n, s);
                                        A > -1 && (this.focusIndex = A, this.focusAction())
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
                }, m = (s(66), s(0)), u = s(37), g = s.n(u), d = Object(m.a)(l, (function () {
                    var e = this, t = e.$createElement, s = e._self._c || t;
                    return e.isValidSingleAction && !e.forceMenu ? s("element", e._b({
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
                    }, "element", e.firstActionBinding, !1), [s("span", {
                        attrs: {
                            "aria-hidden": !0,
                            hidden: ""
                        }
                    }, [e._t("default")], 2)]) : s("div", {
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
                    }, [s("a", {
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
                    }), e._v(" "), s("div", {
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
                    }, [s("div", {
                        staticClass: "action-item__menu_arrow",
                        style: {transform: "translateX(" + e.offsetX + "px) translateY(" + e.offsetYArrow + "px) " + (e.rotateArrow ? " rotate(180deg)" : "")}
                    }), e._v(" "), s("ul", {
                        attrs: {
                            id: e.randomId,
                            tabindex: "-1"
                        }
                    }, [e.opened ? [e._t("default")] : e._e()], 2)])])
                }), [], !1, null, "7b368b0c", null);
            "function" == typeof g.a && g()(d), t.a = d.exports
        }, , , function (e, t) {
            e.exports = s(104)
        }, , , , , , , , , , , , , , , , , , function (e, t) {
            e.exports = s(56)
        }, function (e, t) {
            e.exports = s(223)
        }, function (e, t, s) {
            "use strict";
            var n = s(29);
            s.n(n).a
        }, function (e, t, s) {
            var n = s(1), A = s(7), o = s(8), a = s(9), i = s(10), r = s(11);
            t = n(!1);
            var c = A(o), l = A(a), m = A(i), u = A(r);
            t.push([e.i, '@font-face{font-family:"iconfont-vue-e1f55ce";src:url(' + c + ");src:url(" + c + ') format("embedded-opentype"),url(' + l + ') format("woff"),url(' + m + ') format("truetype"),url(' + u + ') format("svg")}.icon[data-v-7b368b0c]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-left[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-right-double[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-right[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.breadcrumb[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.checkmark[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.close[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.confirm[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.info[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.menu[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.more[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.pause[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.play[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.triangle-s[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.action-item[data-v-7b368b0c]{position:relative;display:inline-block}.action-item--single[data-v-7b368b0c]:hover,.action-item--single[data-v-7b368b0c]:focus,.action-item--single[data-v-7b368b0c]:active,.action-item__menutoggle[data-v-7b368b0c]:hover,.action-item__menutoggle[data-v-7b368b0c]:focus,.action-item__menutoggle[data-v-7b368b0c]:active{border-radius:22px;background-color:rgba(127,127,127,0.25) !important;opacity:1}.action-item.action-item--open .action-item__menutoggle[data-v-7b368b0c]{opacity:1;border-radius:22px;background-color:rgba(127,127,127,0.25)}.action-item--single[data-v-7b368b0c],.action-item__menutoggle[data-v-7b368b0c]{box-sizing:border-box;width:44px;height:44px;margin:0;padding:14px;cursor:pointer;border:none;background-color:transparent}.action-item__menutoggle[data-v-7b368b0c]{display:flex;align-items:center;justify-content:center;opacity:.7}.action-item__menutoggle[data-v-7b368b0c]:before{content:\'\'}.action-item__menutoggle--default-icon[data-v-7b368b0c]{font-size:16px}.action-item__menutoggle--default-icon[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";font-style:normal;font-weight:400;content:""}.action-item--single[data-v-7b368b0c]{opacity:.7}.action-item--single[data-v-7b368b0c]:hover,.action-item--single[data-v-7b368b0c]:focus,.action-item--single[data-v-7b368b0c]:active{opacity:1}.action-item--single>[hidden][data-v-7b368b0c]{display:none}.action-item--multiple[data-v-7b368b0c]{position:relative}.action-item__menu[data-v-7b368b0c]{position:absolute;z-index:110;right:50%;display:none;margin-bottom:10px;margin-top:-5px;transform:translateX(50%);color:var(--color-main-text);border-radius:var(--border-radius);background-color:var(--color-main-background);filter:drop-shadow(0 1px 3px var(--color-box-shadow))}.action-item__menu ul[data-v-7b368b0c]>:not(li){display:none}.action-item__menu.open[data-v-7b368b0c]{display:block}.action-item__menu .action-item__menu_arrow[data-v-7b368b0c]{position:absolute;right:50%;bottom:100%;width:0;height:0;margin-right:-9px;content:\' \';pointer-events:none;border:solid transparent;border-width:9px;border-bottom-color:var(--color-main-background)}.action-item__menu.menu-right[data-v-7b368b0c]{right:auto;left:0;transform:none}.action-item__menu.menu-right .action-item__menu_arrow[data-v-7b368b0c]{right:13px;margin-right:0;visibility:hidden}.action-item__menu.menu-left[data-v-7b368b0c]{right:auto;left:0;transform:none}.action-item__menu.menu-left .action-item__menu_arrow[data-v-7b368b0c]{right:auto;left:13px;margin-right:0}.ie .action-item__menu[data-v-7b368b0c],.ie .action-item__menu .action-item__menu_arrow[data-v-7b368b0c],.edge .action-item__menu[data-v-7b368b0c],.edge .action-item__menu .action-item__menu_arrow[data-v-7b368b0c]{border:1px solid var(--color-border)}\n', ""]), e.exports = t
        }])
    }, 499: function (e, t, s) {
        window, e.exports = function (e) {
            var t = {};

            function s(n) {
                if (t[n]) return t[n].exports;
                var A = t[n] = {i: n, l: !1, exports: {}};
                return e[n].call(A.exports, A, A.exports, s), A.l = !0, A.exports
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
                }), 2 & t && "string" != typeof e) for (var A in e) s.d(n, A, function (t) {
                    return e[t]
                }.bind(null, A));
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

                function n(e, t, s, n, A, o, a, i) {
                    var r, c = "function" == typeof e ? e.options : e;
                    if (t && (c.render = t, c.staticRenderFns = s, c._compiled = !0), n && (c.functional = !0), o && (c._scopeId = "data-v-" + o), a ? (r = function (e) {
                        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), A && A.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a)
                    }, c._ssrRegister = r) : A && (r = i ? function () {
                        A.call(this, this.$root.$options.shadowRoot)
                    } : A), r) if (c.functional) {
                        c._injectStyles = r;
                        var l = c.render;
                        c.render = function (e, t) {
                            return r.call(t), l(e, t)
                        }
                    } else {
                        var m = c.beforeCreate;
                        c.beforeCreate = m ? [].concat(m, r) : [r]
                    }
                    return {exports: e, options: c}
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
                                var s, n, A, o = e[1] || "", a = e[3];
                                if (!a) return o;
                                if (t && "function" == typeof btoa) {
                                    var i = (s = a, n = btoa(unescape(encodeURIComponent(JSON.stringify(s)))), A = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n), "/*# ".concat(A, " */")),
                                        r = a.sources.map((function (e) {
                                            return "/*# sourceURL=".concat(a.sourceRoot || "").concat(e, " */")
                                        }));
                                    return [o].concat(r).concat([i]).join("\n")
                                }
                                return [o].join("\n")
                            }(t, e);
                            return t[2] ? "@media ".concat(t[2], " {").concat(s, "}") : s
                        })).join("")
                    }, t.i = function (e, s, n) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        var A = {};
                        if (n) for (var o = 0; o < this.length; o++) {
                            var a = this[o][0];
                            null != a && (A[a] = !0)
                        }
                        for (var i = 0; i < e.length; i++) {
                            var r = [].concat(e[i]);
                            n && A[r[0]] || (s && (r[2] ? r[2] = "".concat(s, " and ").concat(r[2]) : r[2] = s), t.push(r))
                        }
                    }, t
                }
            }, 12: function (e, t) {
                e.exports = s(194)
            }, 126: function (e, t, s) {
                "use strict";
                var n = s(47);
                s.n(n).a
            }, 127: function (e, t, s) {
                (t = s(1)(!1)).push([e.i, "li.active[data-v-33ba3302]{box-shadow:inset 4px 0 var(--color-primary)}.action--disabled[data-v-33ba3302]{pointer-events:none;opacity:.5}.action--disabled[data-v-33ba3302]:hover,.action--disabled[data-v-33ba3302]:focus{cursor:default;opacity:.5}.action--disabled *[data-v-33ba3302]{opacity:1 !important}.action-button[data-v-33ba3302]{display:flex;align-items:flex-start;width:100%;height:auto;margin:0;padding:0;padding-left:14px;cursor:pointer;white-space:nowrap;opacity:.7;color:var(--color-main-text);border:0;border-radius:0;background-color:transparent;box-shadow:none;font-weight:normal;line-height:44px}.action-button[data-v-33ba3302]:hover,.action-button[data-v-33ba3302]:focus{opacity:1}.action-button>span[data-v-33ba3302]{cursor:pointer;white-space:nowrap}.action-button__icon[data-v-33ba3302]{width:44px;height:44px;opacity:1;background-position:14px center;background-size:16px}.action-button p[data-v-33ba3302]{width:150px;padding:7px 0;margin:auto;cursor:pointer;text-align:left;line-height:1.6em}.action-button__longtext[data-v-33ba3302]{cursor:pointer;white-space:pre-wrap}.action-button__title[data-v-33ba3302]{font-weight:bold}\n", ""]), e.exports = t
            }, 16: function (e, t, s) {
                "use strict";
                s(12), s(28);
                var n = s(5), A = s.n(n);
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
                        this.$slots.default && "" !== this.text.trim() || (A.a.util.warn("".concat(this.$options.name, " cannot be empty and requires a meaningful text content"), this), this.$destroy(), this.$el.remove())
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
                e.exports = s(51)
            }, 19: function (e, t) {
                e.exports = s(95)
            }, 2: function (e, t, s) {
                "use strict";

                function n(e, t) {
                    for (var s = [], n = {}, A = 0; A < t.length; A++) {
                        var o = t[A], a = o[0], i = {id: e + ":" + A, css: o[1], media: o[2], sourceMap: o[3]};
                        n[a] ? n[a].parts.push(i) : s.push(n[a] = {id: a, parts: [i]})
                    }
                    return s
                }

                s.r(t), s.d(t, "default", (function () {
                    return g
                }));
                var A = "undefined" != typeof document;
                if ("undefined" != typeof DEBUG && DEBUG && !A) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
                var o = {}, a = A && (document.head || document.getElementsByTagName("head")[0]), i = null, r = 0,
                    c = !1, l = function () {
                    }, m = null,
                    u = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

                function g(e, t, s, A) {
                    c = s, m = A || {};
                    var a = n(e, t);
                    return d(a), function (t) {
                        for (var s = [], A = 0; A < a.length; A++) {
                            var i = a[A];
                            (r = o[i.id]).refs--, s.push(r)
                        }
                        for (t ? d(a = n(e, t)) : a = [], A = 0; A < s.length; A++) {
                            var r;
                            if (0 === (r = s[A]).refs) {
                                for (var c = 0; c < r.parts.length; c++) r.parts[c]();
                                delete o[r.id]
                            }
                        }
                    }
                }

                function d(e) {
                    for (var t = 0; t < e.length; t++) {
                        var s = e[t], n = o[s.id];
                        if (n) {
                            n.refs++;
                            for (var A = 0; A < n.parts.length; A++) n.parts[A](s.parts[A]);
                            for (; A < s.parts.length; A++) n.parts.push(f(s.parts[A]));
                            n.parts.length > s.parts.length && (n.parts.length = s.parts.length)
                        } else {
                            var a = [];
                            for (A = 0; A < s.parts.length; A++) a.push(f(s.parts[A]));
                            o[s.id] = {id: s.id, refs: 1, parts: a}
                        }
                    }
                }

                function p() {
                    var e = document.createElement("style");
                    return e.type = "text/css", a.appendChild(e), e
                }

                function f(e) {
                    var t, s, n = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
                    if (n) {
                        if (c) return l;
                        n.parentNode.removeChild(n)
                    }
                    if (u) {
                        var A = r++;
                        n = i || (i = p()), t = h.bind(null, n, A, !1), s = h.bind(null, n, A, !0)
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

                var v, M = (v = [], function (e, t) {
                    return v[e] = t, v.filter(Boolean).join("\n")
                });

                function h(e, t, s, n) {
                    var A = s ? "" : n.css;
                    if (e.styleSheet) e.styleSheet.cssText = M(t, A); else {
                        var o = document.createTextNode(A), a = e.childNodes;
                        a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
                    }
                }

                function b(e, t) {
                    var s = t.css, n = t.media, A = t.sourceMap;
                    if (n && e.setAttribute("media", n), m.ssrId && e.setAttribute("data-vue-ssr-id", t.id), A && (s += "\n/*# sourceURL=" + A.sources[0] + " */", s += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(A)))) + " */"), e.styleSheet) e.styleSheet.cssText = s; else {
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(s))
                    }
                }
            }, 20: function (e, t) {
                e.exports = s(97)
            }, 24: function (e, t) {
                e.exports = s(179)
            }, 26: function (e, t, s) {
                "use strict";
                s(18), s(4), s(19), s(20), s(24);
                var n = s(16), A = (s(12), function (e, t) {
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
                                var t = A(this, "Actions");
                                t && t.closeMenu && t.closeMenu()
                            }
                        }
                    }
                }
            }, 28: function (e, t) {
                e.exports = s(221)
            }, 4: function (e, t) {
                e.exports = s(50)
            }, 47: function (e, t, s) {
                var n = s(127);
                "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("75b9f902", n, !0, {})
            }, 5: function (e, t) {
                e.exports = s(44)
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
                }, A = (s(126), s(0)), o = s(54), a = s.n(o), i = Object(A.a)(n, (function () {
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
                "function" == typeof a.a && a()(i), t.a = i.exports
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
    }, 500: function (e, t) {
        function s(e) {
            return "function" == typeof e.value || (console.warn("[Vue-click-outside:] provided expression", e.expression, "is not a function."), !1)
        }

        function n(e) {
            return void 0 !== e.componentInstance && e.componentInstance.$isServer
        }

        e.exports = {
            bind: function (e, t, A) {
                if (!s(t)) return;

                function o(t) {
                    if (A.context) {
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
                        }(A.context.popupItem, s) || e.__vueClickOutside__.callback(t)
                    }
                }

                e.__vueClickOutside__ = {handler: o, callback: t.value};
                const a = "ontouchstart" in document.documentElement ? "touchstart" : "click";
                !n(A) && document.addEventListener(a, o)
            }, update: function (e, t) {
                s(t) && (e.__vueClickOutside__.callback = t.value)
            }, unbind: function (e, t, s) {
                const A = "ontouchstart" in document.documentElement ? "touchstart" : "click";
                !n(s) && e.__vueClickOutside__ && document.removeEventListener(A, e.__vueClickOutside__.handler), delete e.__vueClickOutside__
            }
        }
    }
}]);
//# sourceMappingURL=vendors~editor-rich.js.map?v=7fdacf66e5032d6c542f
