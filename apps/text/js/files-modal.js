(window.textWebpackJsonp = window.textWebpackJsonp || []).push([[195], {
    198: function (e, t, s) {
        "use strict";
        var n = s(7), o = s(2), i = s(54), a = s(11), A = s(4), r = s(20), c = s(105), l = s(33), m = s(0), u = s(31),
            g = s(102).f, d = s(53).f, p = s(8).f, f = s(197).trim, h = o.Number, v = h.prototype,
            M = "Number" == r(u(v)), T = function (e) {
                var t, s, n, o, i, a, A, r, c = l(e, !1);
                if ("string" == typeof c && c.length > 2) if (43 === (t = (c = f(c)).charCodeAt(0)) || 45 === t) {
                    if (88 === (s = c.charCodeAt(2)) || 120 === s) return NaN
                } else if (48 === t) {
                    switch (c.charCodeAt(1)) {
                        case 66:
                        case 98:
                            n = 2, o = 49;
                            break;
                        case 79:
                        case 111:
                            n = 8, o = 55;
                            break;
                        default:
                            return +c
                    }
                    for (a = (i = c.slice(2)).length, A = 0; A < a; A++) if ((r = i.charCodeAt(A)) < 48 || r > o) return NaN;
                    return parseInt(i, n)
                }
                return +c
            };
        if (i("Number", !h(" 0o1") || !h("0b1") || h("+0x1"))) {
            for (var w, b = function (e) {
                var t = arguments.length < 1 ? 0 : e, s = this;
                return s instanceof b && (M ? m((function () {
                    v.valueOf.call(s)
                })) : "Number" != r(s)) ? c(new h(T(t)), s, b) : T(t)
            }, x = n ? g(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), y = 0; x.length > y; y++) A(h, w = x[y]) && !A(b, w) && p(b, w, d(h, w));
            b.prototype = v, v.constructor = b, a(o, "Number", b)
        }
    }, 487: function (e, t, s) {
        window, e.exports = function (e) {
            var t = {};

            function s(n) {
                if (t[n]) return t[n].exports;
                var o = t[n] = {i: n, l: !1, exports: {}};
                return e[n].call(o.exports, o, o.exports, s), o.l = !0, o.exports
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
                }), 2 & t && "string" != typeof e) for (var o in e) s.d(n, o, function (t) {
                    return e[t]
                }.bind(null, o));
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
            }, s.p = "/dist/", s(s.s = 171)
        }({
            0: function (e, t, s) {
                "use strict";

                function n(e, t, s, n, o, i, a, A) {
                    var r, c = "function" == typeof e ? e.options : e;
                    if (t && (c.render = t, c.staticRenderFns = s, c._compiled = !0), n && (c.functional = !0), i && (c._scopeId = "data-v-" + i), a ? (r = function (e) {
                        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a)
                    }, c._ssrRegister = r) : o && (r = A ? function () {
                        o.call(this, this.$root.$options.shadowRoot)
                    } : o), r) if (c.functional) {
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
                                var s, n, o, i = e[1] || "", a = e[3];
                                if (!a) return i;
                                if (t && "function" == typeof btoa) {
                                    var A = (s = a, n = btoa(unescape(encodeURIComponent(JSON.stringify(s)))), o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n), "/*# ".concat(o, " */")),
                                        r = a.sources.map((function (e) {
                                            return "/*# sourceURL=".concat(a.sourceRoot || "").concat(e, " */")
                                        }));
                                    return [i].concat(r).concat([A]).join("\n")
                                }
                                return [i].join("\n")
                            }(t, e);
                            return t[2] ? "@media ".concat(t[2], " {").concat(s, "}") : s
                        })).join("")
                    }, t.i = function (e, s, n) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        var o = {};
                        if (n) for (var i = 0; i < this.length; i++) {
                            var a = this[i][0];
                            null != a && (o[a] = !0)
                        }
                        for (var A = 0; A < e.length; A++) {
                            var r = [].concat(e[A]);
                            n && o[r[0]] || (s && (r[2] ? r[2] = "".concat(s, " and ").concat(r[2]) : r[2] = s), t.push(r))
                        }
                    }, t
                }
            }, 10: function (e, t, s) {
                "use strict";
                s.r(t), t.default = "data:font/ttf;base64,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"
            }, 11: function (e, t, s) {
                "use strict";
                s.r(t), t.default = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bWV0YWRhdGE+PC9tZXRhZGF0YT48ZGVmcz48Zm9udCBpZD0iaWNvbmZvbnQtdnVlLWUxZjU1Y2UiIGhvcml6LWFkdi14PSI1MDAwIj48Zm9udC1mYWNlIGZvbnQtZmFtaWx5PSJpY29uZm9udC12dWUtZTFmNTVjZSIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1zdHJldGNoPSJub3JtYWwiIHVuaXRzLXBlci1lbT0iNTAwMCIgcGFub3NlLTE9IjIgMCA1IDMgMCAwIDAgMCAwIDAiIGFzY2VudD0iNTAwMCIgZGVzY2VudD0iMCIgeC1oZWlnaHQ9IjAiIGJib3g9Ii0xIDAgNTAxMSA1MDAwIiB1bmRlcmxpbmUtdGhpY2tuZXNzPSIwIiB1bmRlcmxpbmUtcG9zaXRpb249IjUwIiB1bmljb2RlLXJhbmdlPSJVK2VhMDEtZWEwZSIgLz48bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMCIgIC8+PGdseXBoIGdseXBoLW5hbWU9ImFycm93LWxlZnQtZG91YmxlIiB1bmljb2RlPSImI3hlYTAxOyIgZD0iTTM3NTAgMzkwNiBsLTE0MDYgLTE0MDYgbDE0MDYgLTE0MDYgbDAgMzEyIGwtMTA5NCAxMDk0IGwxMDk0IDEwOTQgbDAgMzEyIFpNMjM0NCAzOTA2IGwtMTQwNiAtMTQwNiBsMTQwNiAtMTQwNiBsMCAzMTIgbC0xMDk0IDEwOTQgbDEwOTQgMTA5NCBsMCAzMTIgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iYXJyb3ctbGVmdCIgdW5pY29kZT0iJiN4ZWEwMjsiIGQ9Ik0xNTYzIDI1MDAgbDE4NzUgLTE4NzUgbDAgLTMxMiBsLTIxODggMjE4NyBsMjE4OCAyMTg4IGwwIC0zMTMgbC0xODc1IC0xODc1IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImFycm93LXJpZ2h0LWRvdWJsZSIgdW5pY29kZT0iJiN4ZWEwMzsiIGQ9Ik0xMjUwIDEwOTQgbDE0MDYgMTQwNiBsLTE0MDYgMTQwNiBsMCAtMzEyIGwxMDk0IC0xMDk0IGwtMTA5NCAtMTA5NCBsMCAtMzEyIFpNMjY1NiAxMDk0IGwxNDA3IDE0MDYgbC0xNDA3IDE0MDYgbDAgLTMxMiBsMTA5NCAtMTA5NCBsLTEwOTQgLTEwOTQgbDAgLTMxMiBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJhcnJvdy1yaWdodCIgdW5pY29kZT0iJiN4ZWEwNDsiIGQ9Ik0zNDM4IDI1MDAgbC0xODc1IDE4NzUgbDAgMzEzIGwyMTg3IC0yMTg4IGwtMjE4NyAtMjE4NyBsMCAzMTIgbDE4NzUgMTg3NSBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJicmVhZGNydW1iIiB1bmljb2RlPSImI3hlYTA1OyIgZD0iTTE0OCA1MDAwIGwtMTQ4IC04NSBsMTM5NCAtMjQxNSBsLTEzOTQgLTI0MTUgbDE0OCAtODUgbDE0NDMgMjUwMCBsLTE0NDMgMjUwMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJjaGVja21hcmsiIHVuaWNvZGU9IiYjeGVhMDY7IiBkPSJNNDA0NSAzOTcxIGwtMjA2MSAtMjA2MSBsLTEwMjkgMTAyOSBsLTQ0MiAtNDQxIGwxNDcxIC0xNDcxIGwyNTAzIDI1MDIgbC00NDIgNDQyIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImNsb3NlIiB1bmljb2RlPSImI3hlYTA3OyIgZD0iTTQzNzUgMTE1NiBsLTUzMSAtNTMxIGwtMTM0NCAxMzQ0IGwtMTM0NCAtMTM0NCBsLTUzMSA1MzEgbDEzNDQgMTM0NCBsLTEzNDQgMTM0NCBsNTMxIDUzMSBsMTM0NCAtMTM0NCBsMTM0NCAxMzQ0IGw1MzEgLTUzMSBsLTEzNDQgLTEzNDQgbDEzNDQgLTEzNDQgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iY29uZmlybSIgdW5pY29kZT0iJiN4ZWEwODsiIGQ9Ik0yNjU2IDQ4NDQgcS0xMDEgMCAtMTgwIC01NyBxLTc0IC01MiAtMTA5IC0xMzggcS0zNSAtODYgLTE5IC0xNzUgcTE4IC05NiA5MCAtMTY3IGwxNDk1IC0xNDk0IGwtMzYxNiAwIHEtNzcgMSAtMTM5IC0yNiBxLTU4IC0yNCAtOTkgLTcwIHEtMzkgLTQ0IC01OSAtMTAxIHEtMjAgLTU2IC0yMCAtMTE2IHEwIC02MCAyMCAtMTE2IHEyMCAtNTcgNTkgLTEwMSBxNDEgLTQ2IDk5IC03MCBxNjIgLTI3IDEzOSAtMjUgbDM2MTYgMCBsLTE0OTUgLTE0OTUgcS01NSAtNTMgLTgxIC0xMTYgcS0yNCAtNTkgLTIxIC0xMjEgcTMgLTU4IDMwIC0xMTMgcTI1IC01NCA2OCAtOTcgcTQzIC00MyA5NiAtNjggcTU1IC0yNiAxMTQgLTI5IHE2MiAtMyAxMjAgMjEgcTYzIDI1IDExNiA4MSBsMjAyOSAyMDI4IHE1OSA2MCA4MCAxNDEgcTIxIDgwIDEgMTU5IHEtMjEgODIgLTgxIDE0MiBsLTIwMjkgMjAyOCBxLTQ0IDQ1IC0xMDIgNzAgcS01OCAyNSAtMTIyIDI1IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImluZm8iIHVuaWNvZGU9IiYjeGVhMDk7IiBkPSJNMjQyMiA0Njg4IHEtMTExIDAgLTIxMyAtNDMgcS05OCAtNDIgLTE3NCAtMTE3LjUgcS03NiAtNzUuNSAtMTE3IC0xNzQuNSBxLTQzIC0xMDEgLTQzIC0yMTIuNSBxMCAtMTExLjUgNDMgLTIxMi41IHE0MSAtOTggMTE3IC0xNzQgcTc2IC03NiAxNzQgLTExNyBxMTAyIC00MyAyMTMgLTQzIHExMTEgMCAyMTMgNDMgcTk4IDQxIDE3My41IDExNyBxNzUuNSA3NiAxMTcuNSAxNzQgcTQzIDEwMSA0MyAyMTIuNSBxMCAxMTEuNSAtNDMgMjEyLjUgcS00MiA5OSAtMTE3LjUgMTc0LjUgcS03NS41IDc1LjUgLTE3My41IDExNy41IHEtMTAyIDQzIC0yMTMgNDMgWk0xNTYzIDMxMjUgcS04NiAwIC0xNTggLTQzIHEtNzEgLTQxIC0xMTIgLTExMiBxLTQzIC03MiAtNDMgLTE1Ny41IHEwIC04NS41IDQzIC0xNTcuNSBxNDEgLTcxIDExMiAtMTEyIHE3MiAtNDMgMTU4IC00MyBsNjI1IDAgbDAgLTE1NjIgbC02MjUgMCBxLTg2IDAgLTE1OCAtNDMgcS03MSAtNDEgLTExMiAtMTEyIHEtNDMgLTczIC00MyAtMTU4IHEwIC04NSA0MyAtMTU4IHE0MSAtNzEgMTEyIC0xMTIgcTcyIC00MyAxNTggLTQyIGwxODc1IDAgcTg1IDAgMTU3IDQyIHE3MSA0MSAxMTIgMTEyIHE0MyA3MyA0MyAxNTggcTAgODUgLTQzIDE1OCBxLTQxIDcxIC0xMTIgMTEyIHEtNzIgNDMgLTE1NyA0MyBsLTYyNSAwIGwwIDE4NzUgcTAgODUgLTQzIDE1NyBxLTQxIDcxIC0xMTIgMTEyIHEtNzMgNDMgLTE1OCA0MyBsLTkzNyAwIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9Im1lbnUiIHVuaWNvZGU9IiYjeGVhMGE7IiBkPSJNNjI1IDQzNzUgbDAgLTYyNSBsMzc1MCAwIGwwIDYyNSBsLTM3NTAgMCBaTTYyNSAyODEzIGwwIC02MjUgbDM3NTAgMCBsMCA2MjUgbC0zNzUwIDAgWk02MjUgMTI1MCBsMCAtNjI1IGwzNzUwIDAgbDAgNjI1IGwtMzc1MCAwIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9Im1vcmUiIHVuaWNvZGU9IiYjeGVhMGI7IiBkPSJNNzgxIDMwNDcgcTExMiAwIDIxMyAtNDMgcTk4IC00MiAxNzQgLTExNy41IHE3NiAtNzUuNSAxMTcgLTE3My41IHE0MyAtMTAyIDQzIC0yMTMgcTAgLTExMSAtNDMgLTIxMyBxLTQxIC05OCAtMTE3IC0xNzMuNSBxLTc2IC03NS41IC0xNzQgLTExNy41IHEtMTAxIC00MyAtMjEyLjUgLTQzIHEtMTExLjUgMCAtMjEzLjUgNDMgcS05OCA0MiAtMTczLjUgMTE3LjUgcS03NS41IDc1LjUgLTExNy41IDE3My41IHEtNDMgMTAyIC00MyAyMTMgcTAgMTExIDQzIDIxMyBxNDIgOTggMTE3LjUgMTczLjUgcTc1LjUgNzUuNSAxNzMuNSAxMTcuNSBxMTAyIDQzIDIxMyA0MyBaTTI1MDAgMzA0NyBxMTExIDAgMjEzIC00MyBxOTggLTQyIDE3My41IC0xMTcuNSBxNzUuNSAtNzUuNSAxMTcuNSAtMTczLjUgcTQzIC0xMDIgNDMgLTIxMyBxMCAtMTExIC00MyAtMjEzIHEtNDIgLTk4IC0xMTcuNSAtMTczLjUgcS03NS41IC03NS41IC0xNzMuNSAtMTE3LjUgcS0xMDIgLTQzIC0yMTMgLTQzIHEtMTExIDAgLTIxMyA0MyBxLTk4IDQyIC0xNzMuNSAxMTcuNSBxLTc1LjUgNzUuNSAtMTE3LjUgMTczLjUgcS00MyAxMDIgLTQzIDIxMyBxMCAxMTEgNDMgMjEzIHE0MiA5OCAxMTcuNSAxNzMuNSBxNzUuNSA3NS41IDE3My41IDExNy41IHExMDIgNDMgMjEzIDQzIFpNNDIxOSAzMDQ3IHExMTEgMCAyMTMgLTQzIHE5OCAtNDIgMTczLjUgLTExNy41IHE3NS41IC03NS41IDExNy41IC0xNzMuNSBxNDMgLTEwMiA0MyAtMjEzIHEwIC0xMTEgLTQzIC0yMTMgcS00MiAtOTggLTExNy41IC0xNzMuNSBxLTc1LjUgLTc1LjUgLTE3My41IC0xMTcuNSBxLTEwMiAtNDMgLTIxMy41IC00MyBxLTExMS41IDAgLTIxMi41IDQzIHEtOTggNDIgLTE3NCAxMTcuNSBxLTc2IDc1LjUgLTExNyAxNzMuNSBxLTQzIDEwMiAtNDMgMjEzIHEwIDExMSA0MyAyMTMgcTQxIDk4IDExNyAxNzMuNSBxNzYgNzUuNSAxNzQgMTE3LjUgcTEwMSA0MyAyMTMgNDMgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0icGF1c2UiIHVuaWNvZGU9IiYjeGVhMGM7IiBkPSJNOTM4IDQwNjMgbDAgLTMxMjUgbDEyNTAgMCBsMCAzMTI1IGwtMTI1MCAwIFpNMjgxMyA0MDYzIGwwIC0zMTI1IGwxMjUwIDAgbDAgMzEyNSBsLTEyNTAgMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJwbGF5IiB1bmljb2RlPSImI3hlYTBkOyIgZD0iTTYyNSA0Mzc1IGwzNzUwIC0xODc1IGwtMzc1MCAtMTg3NSBsMCAzNzUwIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InRyaWFuZ2xlLXMiIHVuaWNvZGU9IiYjeGVhMGU7IiBkPSJNMTI1MCAzMTI1IGwxMjUwIC0xMjUwIGwxMjUwIDEyNDggbC0yNTAwIDIgWiIgLz48L2ZvbnQ+PC9kZWZzPjwvc3ZnPg=="
            }, 111: function (e, t, s) {
                var n = s(243);
                "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("6e72f645", n, !0, {})
            }, 12: function (e, t) {
                e.exports = s(194)
            }, 126: function (e, t, s) {
                "use strict";
                var n = s(47);
                s.n(n).a
            }, 127: function (e, t, s) {
                (t = s(1)(!1)).push([e.i, "li.active[data-v-33ba3302]{box-shadow:inset -4px 0 var(--color-primary)}.action--disabled[data-v-33ba3302]{pointer-events:none;opacity:.5}.action--disabled[data-v-33ba3302]:hover,.action--disabled[data-v-33ba3302]:focus{cursor:default;opacity:.5}.action--disabled *[data-v-33ba3302]{opacity:1 !important}.action-button[data-v-33ba3302]{display:flex;align-items:flex-start;width:100%;height:auto;margin:0;padding:0;padding-left:14px;cursor:pointer;white-space:nowrap;opacity:.7;color:var(--color-main-text);border:0;border-radius:0;background-color:transparent;box-shadow:none;font-weight:normal;line-height:44px}.action-button[data-v-33ba3302]:hover,.action-button[data-v-33ba3302]:focus{opacity:1}.action-button>span[data-v-33ba3302]{cursor:pointer;white-space:nowrap}.action-button__icon[data-v-33ba3302]{width:44px;height:44px;opacity:1;background-position:14px center;background-size:16px}.action-button p[data-v-33ba3302]{width:150px;padding:7px 0;margin:auto;cursor:pointer;text-align:left;line-height:1.6em}.action-button__longtext[data-v-33ba3302]{cursor:pointer;white-space:pre-wrap}.action-button__title[data-v-33ba3302]{font-weight:bold}\n", ""]), e.exports = t
            }, 13: function (e, t, s) {
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
            }, 14: function (e, t) {
                e.exports = s(195)
            }, 142: function (e, t) {
            }, 15: function (e, t) {
                e.exports = s(98)
            }, 16: function (e, t, s) {
                "use strict";
                s(12), s(28);
                var n = s(5), o = s.n(n);
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
            }, 17: function (e, t, s) {
                "use strict";
                s(4), s(21), s(23), s(30), t.a = function (e) {
                    return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, e || 5)
                }
            }, 171: function (e, t, s) {
                "use strict";
                s.r(t);
                var n = s(44), o = (s(15), s(33), s(83)), i = s.n(o), a = s(38), A = s(88), r = s(32), c = s(6),
                    l = s(13);

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
                 */function m(e, t) {
                    var s, n, o, i = t;
                    this.start = function () {
                        o = !0, n = new Date, s = setTimeout(e, i)
                    }, this.pause = function () {
                        o = !1, clearTimeout(s), i -= new Date - n
                    }, this.clear = function () {
                        o = !1, clearTimeout(s), i = 0
                    }, this.getTimeLeft = function () {
                        return o && (this.pause(), this.start()), i
                    }, this.getStateRunning = function () {
                        return o
                    }, this.start()
                }

                var u = {
                    name: "Modal",
                    components: {Actions: a.default, ActionButton: A.default},
                    directives: {tooltip: l.default},
                    mixins: [r.a],
                    props: {
                        title: {type: String, default: ""},
                        hasPrevious: {type: Boolean, default: !1},
                        hasNext: {type: Boolean, default: !1},
                        outTransition: {type: Boolean, default: !1},
                        enableSlideshow: {type: Boolean, default: !1},
                        clearViewDelay: {type: Number, default: 5e3},
                        slideshowDelay: {type: Number, default: 3e3},
                        slideshowPaused: {type: Boolean, default: !1},
                        enableSwipe: {type: Boolean, default: !0},
                        spreadNavigation: {type: Boolean, default: !1},
                        size: {
                            type: String, default: "normal", validator: function (e) {
                                return -1 !== ["normal", "large", "full"].indexOf(e)
                            }
                        },
                        canClose: {type: Boolean, default: !0},
                        dark: {type: Boolean, default: !1}
                    },
                    data: function () {
                        return {
                            mc: null,
                            showModal: !1,
                            clearView: !1,
                            clearViewTimeout: null,
                            playing: !1,
                            slideshowTimeout: null
                        }
                    },
                    computed: {
                        modalTransitionName: function () {
                            return "modal-".concat(this.outTransition ? "out" : "in")
                        }, playPauseTitle: function () {
                            return this.playing ? Object(c.b)("Pause slideshow") : Object(c.b)("Start slideshow")
                        }
                    },
                    watch: {
                        slideshowPaused: function (e) {
                            this.slideshowTimeout && (e ? this.slideshowTimeout.pause() : this.slideshowTimeout.start())
                        }
                    },
                    beforeMount: function () {
                        window.addEventListener("keydown", this.handleKeydown)
                    },
                    beforeDestroy: function () {
                        window.removeEventListener("keydown", this.handleKeydown)
                    },
                    mounted: function () {
                        var e = this;
                        this.showModal = !0, this.handleMouseMove(), this.mc = new i.a(this.$refs.mask), this.mc.on("swipeleft swiperight", (function (t) {
                            e.handleSwipe(t)
                        })), document.body.insertBefore(this.$el, document.body.lastChild)
                    },
                    unmounted: function () {
                        this.mc.off("swipeleft swiperight"), this.mc.destroy()
                    },
                    methods: {
                        previous: function (e) {
                            this.hasPrevious && (e && this.resetSlideshow(), this.$emit("previous", e))
                        }, next: function (e) {
                            this.hasNext && (e && this.resetSlideshow(), this.$emit("next", e))
                        }, close: function (e) {
                            var t = this;
                            this.canClose && (this.showModal = !1, setTimeout((function () {
                                t.$emit("close", e)
                            }), 300))
                        }, handleKeydown: function (e) {
                            switch (e.keyCode) {
                                case 37:
                                    this.previous(e);
                                    break;
                                case 13:
                                case 39:
                                    this.next(e);
                                    break;
                                case 27:
                                    this.close(e)
                            }
                        }, handleSwipe: function (e) {
                            this.enableSwipe && ("swipeleft" === e.type ? this.next(e) : "swiperight" === e.type && this.previous(e))
                        }, handleMouseMove: function () {
                            var e = this;
                            this.clearViewDelay > 0 && (this.clearView = !1, clearTimeout(this.clearViewTimeout), this.clearViewTimeout = setTimeout((function () {
                                e.clearView = !0
                            }), this.clearViewDelay))
                        }, togglePlayPause: function () {
                            this.playing = !this.playing, this.playing ? this.handleSlideshow() : this.clearSlideshowTimeout()
                        }, resetSlideshow: function () {
                            this.playing = !this.playing, this.clearSlideshowTimeout(), this.$nextTick((function () {
                                this.togglePlayPause()
                            }))
                        }, handleSlideshow: function () {
                            var e = this;
                            this.playing = !0, this.hasNext ? this.slideshowTimeout = new m((function () {
                                e.next(), e.handleSlideshow()
                            }), this.slideshowDelay) : (this.playing = !1, this.clearSlideshowTimeout())
                        }, clearSlideshowTimeout: function () {
                            this.slideshowTimeout && this.slideshowTimeout.clear()
                        }
                    }
                }, g = (s(242), s(0)), d = s(142), p = s.n(d), f = Object(g.a)(u, (function () {
                    var e = this, t = e.$createElement, s = e._self._c || t;
                    return s("transition", {attrs: {name: "fade"}}, [s("div", {
                        ref: "mask",
                        staticClass: "modal-mask",
                        class: {"modal-mask--dark": e.dark},
                        on: {click: e.handleMouseMove, mousemove: e.handleMouseMove, touchmove: e.handleMouseMove}
                    }, [s("transition", {attrs: {name: "fade-visibility"}}, [s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.clearView,
                            expression: "!clearView"
                        }], staticClass: "modal-header", class: {invisible: e.clearView}
                    }, ["" !== e.title.trim() ? s("div", {staticClass: "modal-title"}, [e._v("\n\t\t\t\t\t" + e._s(e.title) + "\n\t\t\t\t")]) : e._e(), e._v(" "), s("div", {staticClass: "icons-menu"}, [e.hasNext && e.enableSlideshow ? s("button", {
                        directives: [{
                            name: "tooltip",
                            rawName: "v-tooltip.auto",
                            value: e.playPauseTitle,
                            expression: "playPauseTitle",
                            modifiers: {auto: !0}
                        }],
                        staticClass: "play-pause",
                        class: {"play-pause--paused": e.slideshowPaused},
                        on: {click: e.togglePlayPause}
                    }, [s("div", {class: [e.playing ? "icon-pause" : "icon-play"]}, [s("span", {staticClass: "hidden-visually"}, [e._v("\n\t\t\t\t\t\t\t\t" + e._s(e.playPauseTitle) + "\n\t\t\t\t\t\t\t")])]), e._v(" "), e.playing ? s("svg", {
                        staticClass: "progress-ring",
                        attrs: {height: "50", width: "50"}
                    }, [s("circle", {
                        staticClass: "progress-ring__circle",
                        attrs: {stroke: "white", "stroke-width": "2", fill: "transparent", r: "15", cx: "25", cy: "25"}
                    })]) : e._e()]) : e._e(), e._v(" "), s("Actions", {staticClass: "header-actions"}, [e._t("actions")], 2), e._v(" "), e.canClose ? s("Actions", {staticClass: "header-close"}, [s("ActionButton", {
                        attrs: {icon: "icon-close"},
                        on: {click: e.close}
                    }, [e._v("\n\t\t\t\t\t\t\t" + e._s(e.t("Close")) + "\n\t\t\t\t\t\t")])], 1) : e._e()], 1)])]), e._v(" "), s("transition", {attrs: {name: e.modalTransitionName}}, [s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showModal,
                            expression: "showModal"
                        }],
                        staticClass: "modal-wrapper",
                        class: ["modal-wrapper--" + e.size, e.spreadNavigation ? "modal-wrapper--spread-navigation" : ""],
                        on: {
                            click: function (t) {
                                return t.target !== t.currentTarget ? null : e.close(t)
                            }
                        }
                    }, [s("transition", {attrs: {name: "fade-visibility"}}, [s("a", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.hasPrevious && !e.clearView,
                            expression: "hasPrevious && !clearView"
                        }],
                        staticClass: "prev",
                        class: {invisible: e.clearView || !e.hasPrevious},
                        on: {click: e.previous}
                    }, [s("div", {staticClass: "icon icon-previous"}, [s("span", {staticClass: "hidden-visually"}, [e._v("\n\t\t\t\t\t\t\t\t" + e._s(e.t("Previous")) + "\n\t\t\t\t\t\t\t")])])])]), e._v(" "), s("div", {staticClass: "modal-container"}, [e._t("default")], 2), e._v(" "), s("transition", {attrs: {name: "fade-visibility"}}, [s("a", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.hasNext && !e.clearView,
                            expression: "hasNext && !clearView"
                        }], staticClass: "next", class: {invisible: e.clearView || !e.hasNext}, on: {click: e.next}
                    }, [s("div", {staticClass: "icon icon-next"}, [s("span", {staticClass: "hidden-visually"}, [e._v("\n\t\t\t\t\t\t\t\t" + e._s(e.t("Next")) + "\n\t\t\t\t\t\t\t")])])])])], 1)])], 1)])
                }), [], !1, null, "9cc143dc", null);
                "function" == typeof p.a && p()(f);
                var h = f.exports;
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
                 */Object(n.a)(h), t.default = h
            }, 18: function (e, t) {
                e.exports = s(51)
            }, 19: function (e, t) {
                e.exports = s(95)
            }, 2: function (e, t, s) {
                "use strict";

                function n(e, t) {
                    for (var s = [], n = {}, o = 0; o < t.length; o++) {
                        var i = t[o], a = i[0], A = {id: e + ":" + o, css: i[1], media: i[2], sourceMap: i[3]};
                        n[a] ? n[a].parts.push(A) : s.push(n[a] = {id: a, parts: [A]})
                    }
                    return s
                }

                s.r(t), s.d(t, "default", (function () {
                    return g
                }));
                var o = "undefined" != typeof document;
                if ("undefined" != typeof DEBUG && DEBUG && !o) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
                var i = {}, a = o && (document.head || document.getElementsByTagName("head")[0]), A = null, r = 0,
                    c = !1, l = function () {
                    }, m = null,
                    u = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

                function g(e, t, s, o) {
                    c = s, m = o || {};
                    var a = n(e, t);
                    return d(a), function (t) {
                        for (var s = [], o = 0; o < a.length; o++) {
                            var A = a[o];
                            (r = i[A.id]).refs--, s.push(r)
                        }
                        for (t ? d(a = n(e, t)) : a = [], o = 0; o < s.length; o++) {
                            var r;
                            if (0 === (r = s[o]).refs) {
                                for (var c = 0; c < r.parts.length; c++) r.parts[c]();
                                delete i[r.id]
                            }
                        }
                    }
                }

                function d(e) {
                    for (var t = 0; t < e.length; t++) {
                        var s = e[t], n = i[s.id];
                        if (n) {
                            n.refs++;
                            for (var o = 0; o < n.parts.length; o++) n.parts[o](s.parts[o]);
                            for (; o < s.parts.length; o++) n.parts.push(f(s.parts[o]));
                            n.parts.length > s.parts.length && (n.parts.length = s.parts.length)
                        } else {
                            var a = [];
                            for (o = 0; o < s.parts.length; o++) a.push(f(s.parts[o]));
                            i[s.id] = {id: s.id, refs: 1, parts: a}
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
                        var o = r++;
                        n = A || (A = p()), t = M.bind(null, n, o, !1), s = M.bind(null, n, o, !0)
                    } else n = p(), t = T.bind(null, n), s = function () {
                        n.parentNode.removeChild(n)
                    };
                    return t(e), function (n) {
                        if (n) {
                            if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                            t(e = n)
                        } else s()
                    }
                }

                var h, v = (h = [], function (e, t) {
                    return h[e] = t, h.filter(Boolean).join("\n")
                });

                function M(e, t, s, n) {
                    var o = s ? "" : n.css;
                    if (e.styleSheet) e.styleSheet.cssText = v(t, o); else {
                        var i = document.createTextNode(o), a = e.childNodes;
                        a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
                    }
                }

                function T(e, t) {
                    var s = t.css, n = t.media, o = t.sourceMap;
                    if (n && e.setAttribute("media", n), m.ssrId && e.setAttribute("data-vue-ssr-id", t.id), o && (s += "\n/*# sourceURL=" + o.sources[0] + " */", s += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), e.styleSheet) e.styleSheet.cssText = s; else {
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(s))
                    }
                }
            }, 20: function (e, t) {
                e.exports = s(97)
            }, 21: function (e, t) {
                e.exports = s(52)
            }, 22: function (e, t) {
                e.exports = s(196)
            }, 23: function (e, t) {
                e.exports = s(96)
            }, 24: function (e, t) {
                e.exports = s(179)
            }, 242: function (e, t, s) {
                "use strict";
                var n = s(111);
                s.n(n).a
            }, 243: function (e, t, s) {
                var n = s(1), o = s(7), i = s(8), a = s(9), A = s(10), r = s(11);
                t = n(!1);
                var c = o(i), l = o(a), m = o(A), u = o(r);
                t.push([e.i, '@font-face{font-family:"iconfont-vue-e1f55ce";src:url(' + c + ");src:url(" + c + ') format("embedded-opentype"),url(' + l + ') format("woff"),url(' + m + ') format("truetype"),url(' + u + ') format("svg")}.icon[data-v-9cc143dc]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-9cc143dc]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-left[data-v-9cc143dc]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-right-double[data-v-9cc143dc]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-right[data-v-9cc143dc]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.breadcrumb[data-v-9cc143dc]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.checkmark[data-v-9cc143dc]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.close[data-v-9cc143dc]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.confirm[data-v-9cc143dc]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.info[data-v-9cc143dc]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.menu[data-v-9cc143dc]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.more[data-v-9cc143dc]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.pause[data-v-9cc143dc]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.play[data-v-9cc143dc]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.triangle-s[data-v-9cc143dc]:before{font-family:"iconfont-vue-e1f55ce";content:""}.modal-mask[data-v-9cc143dc]{position:fixed;z-index:9998;top:0;left:0;display:block;width:100%;height:100%;background-color:rgba(0,0,0,0.5)}.modal-mask--dark[data-v-9cc143dc]{background-color:rgba(0,0,0,0.92)}.modal-header[data-v-9cc143dc]{position:absolute;z-index:10001;top:0;right:0;left:0;display:flex !important;align-items:center;justify-content:center;width:100%;height:50px;transition:opacity 250ms, visibility 250ms}.modal-header.invisible[style*=\'display:none\'][data-v-9cc143dc],.modal-header.invisible[style*=\'display: none\'][data-v-9cc143dc]{visibility:hidden}.modal-header .modal-title[data-v-9cc143dc]{overflow-x:hidden;box-sizing:border-box;width:100%;padding:0 132px 0 12px;transition:padding ease 100ms;white-space:nowrap;text-overflow:ellipsis;color:#fff;font-size:14px}@media only screen and (min-width: 512px){.modal-header .modal-title[data-v-9cc143dc]{text-align:center;padding-left:132px}}.modal-header .icons-menu[data-v-9cc143dc]{position:absolute;right:0;display:flex;align-items:center;justify-content:flex-end}.modal-header .icons-menu .icon-close[data-v-9cc143dc]{box-sizing:border-box;margin:3px;padding:10px 11px;color:#fff;background-image:none;font-size:23px}.modal-header .icons-menu .icon-close[data-v-9cc143dc]:before{font-family:"iconfont-vue-e1f55ce";font-style:normal;font-weight:400;content:""}.modal-header .icons-menu .play-pause[data-v-9cc143dc]{position:relative;width:50px;height:50px;margin:0;padding:0;cursor:pointer;color:white;border:none;background-color:transparent;font-size:22px}.modal-header .icons-menu .play-pause:hover .icon-play[data-v-9cc143dc],.modal-header .icons-menu .play-pause:hover .icon-pause[data-v-9cc143dc],.modal-header .icons-menu .play-pause:focus .icon-play[data-v-9cc143dc],.modal-header .icons-menu .play-pause:focus .icon-pause[data-v-9cc143dc]{opacity:1;border-radius:22px;background-color:rgba(127,127,127,0.25)}.modal-header .icons-menu .play-pause .icon-play[data-v-9cc143dc],.modal-header .icons-menu .play-pause .icon-pause[data-v-9cc143dc]{box-sizing:border-box;width:44px;height:44px;margin:3px;opacity:.7;background-image:none;cursor:pointer}.modal-header .icons-menu .play-pause .icon-play[data-v-9cc143dc]{padding:11px 13px}.modal-header .icons-menu .play-pause .icon-play[data-v-9cc143dc]:before{font-family:"iconfont-vue-e1f55ce";font-style:normal;font-weight:400;content:""}.modal-header .icons-menu .play-pause .icon-pause[data-v-9cc143dc]{padding:12px;font-size:19.5px}.modal-header .icons-menu .play-pause .icon-pause[data-v-9cc143dc]:before{font-family:"iconfont-vue-e1f55ce";font-style:normal;font-weight:400;content:""}.modal-header .icons-menu .header-actions[data-v-9cc143dc]{margin:3px;color:white}.modal-header .icons-menu .action-item--single[data-v-9cc143dc]{box-sizing:border-box;width:44px;height:44px;cursor:pointer;background-position:center;background-size:22px}.modal-header .icons-menu[data-v-9cc143dc] .action-item__menutoggle{padding:13px 11px;color:#fff;font-size:22px}.modal-wrapper[data-v-9cc143dc]{display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.modal-wrapper .prev[data-v-9cc143dc],.modal-wrapper .next[data-v-9cc143dc]{z-index:10000;display:flex !important;align-items:center;justify-content:center;width:15%;min-width:60px;height:100%;transition:opacity 250ms, visibility 250ms}.modal-wrapper .prev.invisible[style*=\'display:none\'][data-v-9cc143dc],.modal-wrapper .prev.invisible[style*=\'display: none\'][data-v-9cc143dc],.modal-wrapper .next.invisible[style*=\'display:none\'][data-v-9cc143dc],.modal-wrapper .next.invisible[style*=\'display: none\'][data-v-9cc143dc]{visibility:hidden}.modal-wrapper .icon-next[data-v-9cc143dc],.modal-wrapper .icon-previous[data-v-9cc143dc]{box-sizing:border-box;width:44px;height:44px;padding:12px 11px;color:white;border-radius:22px;background-image:none;font-size:24px}.modal-wrapper .icon-previous[data-v-9cc143dc]:before{font-family:"iconfont-vue-e1f55ce";font-style:normal;font-weight:400;content:""}.modal-wrapper .icon-next[data-v-9cc143dc]:before{font-family:"iconfont-vue-e1f55ce";font-style:normal;font-weight:400;content:""}.modal-wrapper .modal-container[data-v-9cc143dc]{display:block;overflow:hidden;padding:0;transition:transform 300ms ease;border-radius:var(--border-radius-large);background-color:var(--color-main-background);box-shadow:0 0 40px rgba(0,0,0,0.2)}.modal-wrapper:not(.modal-wrapper--large):not(.modal-wrapper--full) .modal-container[data-v-9cc143dc]{max-width:900px;max-height:80%}.modal-wrapper--full .modal-container[data-v-9cc143dc]{max-width:100%;max-height:100%;border-radius:0}.modal-wrapper--full .prev[data-v-9cc143dc],.modal-wrapper--full .next[data-v-9cc143dc],.modal-wrapper--spread-navigation .prev[data-v-9cc143dc],.modal-wrapper--spread-navigation .next[data-v-9cc143dc]{position:absolute;width:10%}.modal-wrapper--full .prev[data-v-9cc143dc],.modal-wrapper--spread-navigation .prev[data-v-9cc143dc]{left:0}.modal-wrapper--full .next[data-v-9cc143dc],.modal-wrapper--spread-navigation .next[data-v-9cc143dc]{right:0}.modal-wrapper--large .modal-container[data-v-9cc143dc]{max-width:70%;max-height:90%}.modal-wrapper--large .prev[data-v-9cc143dc],.modal-wrapper--large .next[data-v-9cc143dc]{width:10%}.fade-enter-active[data-v-9cc143dc],.fade-leave-active[data-v-9cc143dc]{transition:opacity 250ms}.fade-enter[data-v-9cc143dc],.fade-leave-to[data-v-9cc143dc]{opacity:0}.fade-visibility-enter[data-v-9cc143dc],.fade-visibility-leave-to[data-v-9cc143dc]{visibility:hidden;opacity:0}.modal-in-enter-active[data-v-9cc143dc],.modal-in-leave-active[data-v-9cc143dc],.modal-out-enter-active[data-v-9cc143dc],.modal-out-leave-active[data-v-9cc143dc]{transition:opacity 250ms}.modal-in-enter[data-v-9cc143dc],.modal-in-leave-to[data-v-9cc143dc],.modal-out-enter[data-v-9cc143dc],.modal-out-leave-to[data-v-9cc143dc]{opacity:0}.modal-in-enter .modal-container[data-v-9cc143dc],.modal-in-leave-to .modal-container[data-v-9cc143dc]{transform:scale(0.9)}.modal-out-enter .modal-container[data-v-9cc143dc],.modal-out-leave-to .modal-container[data-v-9cc143dc]{transform:scale(1.1)}.modal-mask .play-pause .progress-ring[data-v-9cc143dc]{position:absolute;top:0;left:0;transform:rotate(-90deg)}.modal-mask .play-pause .progress-ring .progress-ring__circle[data-v-9cc143dc]{transition:100ms stroke-dashoffset;transform-origin:50% 50%;animation:progressring-data-v-9cc143dc linear 3s infinite;stroke-linecap:round;stroke-dashoffset:94.24778;stroke-dasharray:94.24778}.modal-mask .play-pause--paused .icon-pause[data-v-9cc143dc]{animation:breath-data-v-9cc143dc 2s cubic-bezier(0.4, 0, 0.2, 1) infinite}.modal-mask .play-pause--paused .progress-ring__circle[data-v-9cc143dc]{animation-play-state:paused !important}@keyframes progressring-data-v-9cc143dc{from{stroke-dashoffset:94.24778}to{stroke-dashoffset:0}}@keyframes breath-data-v-9cc143dc{0%{opacity:1}50%{opacity:0}100%{opacity:1}}\n', ""]), e.exports = t
            }, 25: function (e, t) {
                e.exports = s(57)
            }, 26: function (e, t, s) {
                "use strict";
                s(18), s(4), s(19), s(20), s(24);
                var n = s(16), o = (s(12), function (e, t) {
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
                                var t = o(this, "Actions");
                                t && t.closeMenu && t.closeMenu()
                            }
                        }
                    }
                }
            }, 27: function (e, t) {
                e.exports = s(220)
            }, 28: function (e, t) {
                e.exports = s(221)
            }, 29: function (e, t, s) {
                var n = s(67);
                "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("640a212a", n, !0, {})
            }, 3: function (e, t) {
                e.exports = s(183)
            }, 30: function (e, t) {
                e.exports = s(99)
            }, 31: function (e, t, s) {
                "use strict";
                s(25), s(15), s(65), s(12);
                var n = s(5), o = s.n(n);
                t.a = function (e, t, s) {
                    if (void 0 !== e) for (var n = e.length - 1; n >= 0; n--) {
                        var i = e[n], a = !i.componentOptions && i.tag && -1 === t.indexOf(i.tag),
                            A = !!i.componentOptions && "string" == typeof i.componentOptions.tag,
                            r = A && -1 === t.indexOf(i.componentOptions.tag);
                        (a || !A || r) && ((a || r) && o.a.util.warn("".concat(a ? i.tag : i.componentOptions.tag, " is not allowed inside the ").concat(s.$options.name, " component"), s), e.splice(n, 1))
                    }
                }
            }, 32: function (e, t, s) {
                "use strict";
                var n = s(6);
                t.a = {methods: {n: n.a, t: n.b}}
            }, 33: function (e, t) {
                e.exports = s(198)
            }, 37: function (e, t) {
            }, 38: function (e, t, s) {
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
            }, 4: function (e, t) {
                e.exports = s(50)
            }, 40: function (e, t, s) {
                var n = s(41);
                "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("941c791e", n, !0, {})
            }, 41: function (e, t, s) {
                (t = s(1)(!1)).push([e.i, ".vue-tooltip[data-v-e1f55ce]{position:absolute;z-index:100000;right:auto;left:auto;display:block;margin:0;margin-top:-3px;padding:10px 0;text-align:left;text-align:start;white-space:normal;text-decoration:none;letter-spacing:normal;word-spacing:normal;text-transform:none;word-wrap:normal;word-break:normal;opacity:0;text-shadow:none;font-family:'Nunito', 'Open Sans', Frutiger, Calibri, 'Myriad Pro', Myriad, sans-serif;font-size:12px;font-weight:normal;font-style:normal;line-height:1.6;line-break:auto;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.vue-tooltip[data-v-e1f55ce][x-placement^='top'] .tooltip-arrow{bottom:0;margin-top:0;margin-bottom:0;border-width:10px 10px 0 10px;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-e1f55ce][x-placement^='bottom'] .tooltip-arrow{top:0;margin-top:0;margin-bottom:0;border-width:0 10px 10px 10px;border-top-color:transparent;border-right-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-e1f55ce][x-placement^='right'] .tooltip-arrow{right:100%;margin-right:0;margin-left:0;border-width:10px 10px 10px 0;border-top-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-e1f55ce][x-placement^='left'] .tooltip-arrow{left:100%;margin-right:0;margin-left:0;border-width:10px 0 10px 10px;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent}.vue-tooltip[data-v-e1f55ce][aria-hidden='true']{visibility:hidden;transition:opacity .15s, visibility .15s;opacity:0}.vue-tooltip[data-v-e1f55ce][aria-hidden='false']{visibility:visible;transition:opacity .15s;opacity:1}.vue-tooltip[data-v-e1f55ce] .tooltip-inner{max-width:350px;padding:5px 8px;text-align:center;color:var(--color-main-text);border-radius:var(--border-radius);background-color:var(--color-main-background)}.vue-tooltip[data-v-e1f55ce] .tooltip-arrow{position:absolute;z-index:1;width:0;height:0;margin:0;border-style:solid;border-color:var(--color-main-background)}\n", ""]), e.exports = t
            }, 43: function (e, t, s) {
                "use strict";
                s(25), s(46), s(15);
                var n = s(14), o = s(13), i = s(17), a = (s(64), function (e) {
                        var t = e.getBoundingClientRect(), s = document.documentElement.clientHeight,
                            n = document.documentElement.clientWidth, o = Object.assign({});
                        return o.top = t.top < 0, o.left = t.left < 0, o.bottom = t.bottom > s, o.right = t.right > n, o.any = o.top || o.left || o.bottom || o.right, o.all = o.top && o.left && o.bottom && o.right, o.offsetY = o.top ? t.top : o.bottom ? t.bottom - s : 0, o.offsetX = o.left ? t.left : o.right ? t.right - n : 0, o
                    }), A = s(31), r = s(6),
                    c = ["ActionButton", "ActionCheckbox", "ActionInput", "ActionLink", "ActionRadio", "ActionRouter", "ActionSeparator", "ActionText", "ActionTextEditable"],
                    l = {
                        name: "Actions",
                        directives: {ClickOutside: n.directive, tooltip: o.default},
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
                            this.initActions(), Object(A.a)(this.$slots.default, c, this)
                        },
                        beforeUpdate: function () {
                            this.initActions(), Object(A.a)(this.$slots.default, c, this)
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
                                                o = Array.prototype.indexOf.call(n, s);
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
            }, 44: function (e, t, s) {
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
            }, 46: function (e, t) {
                e.exports = s(104)
            }, 47: function (e, t, s) {
                var n = s(127);
                "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals), (0, s(2).default)("75b9f902", n, !0, {})
            }, 5: function (e, t) {
                e.exports = s(44)
            }, 54: function (e, t) {
            }, 6: function (e, t, s) {
                "use strict";
                s.d(t, "b", (function () {
                    return A
                })), s.d(t, "a", (function () {
                    return a
                })), s(22);
                var n = s(27), o = Object(n.getGettextBuilder)().detectLocale();
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
                var i = o.build(), a = i.ngettext.bind(i), A = i.gettext.bind(i)
            }, 64: function (e, t) {
                e.exports = s(56)
            }, 65: function (e, t) {
                e.exports = s(223)
            }, 66: function (e, t, s) {
                "use strict";
                var n = s(29);
                s.n(n).a
            }, 67: function (e, t, s) {
                var n = s(1), o = s(7), i = s(8), a = s(9), A = s(10), r = s(11);
                t = n(!1);
                var c = o(i), l = o(a), m = o(A), u = o(r);
                t.push([e.i, '@font-face{font-family:"iconfont-vue-e1f55ce";src:url(' + c + ");src:url(" + c + ') format("embedded-opentype"),url(' + l + ') format("woff"),url(' + m + ') format("truetype"),url(' + u + ') format("svg")}.icon[data-v-7b368b0c]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-left[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-right-double[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.arrow-right[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.breadcrumb[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.checkmark[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.close[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.confirm[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.info[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.menu[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.more[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.pause[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.play[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.icon.triangle-s[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";content:""}.action-item[data-v-7b368b0c]{position:relative;display:inline-block}.action-item--single[data-v-7b368b0c]:hover,.action-item--single[data-v-7b368b0c]:focus,.action-item--single[data-v-7b368b0c]:active,.action-item__menutoggle[data-v-7b368b0c]:hover,.action-item__menutoggle[data-v-7b368b0c]:focus,.action-item__menutoggle[data-v-7b368b0c]:active{border-radius:22px;background-color:rgba(127,127,127,0.25) !important;opacity:1}.action-item.action-item--open .action-item__menutoggle[data-v-7b368b0c]{opacity:1;border-radius:22px;background-color:rgba(127,127,127,0.25)}.action-item--single[data-v-7b368b0c],.action-item__menutoggle[data-v-7b368b0c]{box-sizing:border-box;width:44px;height:44px;margin:0;padding:14px;cursor:pointer;border:none;background-color:transparent}.action-item__menutoggle[data-v-7b368b0c]{display:flex;align-items:center;justify-content:center;opacity:.7}.action-item__menutoggle[data-v-7b368b0c]:before{content:\'\'}.action-item__menutoggle--default-icon[data-v-7b368b0c]{font-size:16px}.action-item__menutoggle--default-icon[data-v-7b368b0c]:before{font-family:"iconfont-vue-e1f55ce";font-style:normal;font-weight:400;content:""}.action-item--single[data-v-7b368b0c]{opacity:.7}.action-item--single[data-v-7b368b0c]:hover,.action-item--single[data-v-7b368b0c]:focus,.action-item--single[data-v-7b368b0c]:active{opacity:1}.action-item--single>[hidden][data-v-7b368b0c]{display:none}.action-item--multiple[data-v-7b368b0c]{position:relative}.action-item__menu[data-v-7b368b0c]{position:absolute;z-index:110;right:50%;display:none;margin-bottom:10px;margin-top:-5px;transform:translateX(50%);color:var(--color-main-text);border-radius:var(--border-radius);background-color:var(--color-main-background);filter:drop-shadow(0 1px 3px var(--color-box-shadow))}.action-item__menu ul[data-v-7b368b0c]>:not(li){display:none}.action-item__menu.open[data-v-7b368b0c]{display:block}.action-item__menu .action-item__menu_arrow[data-v-7b368b0c]{position:absolute;right:50%;bottom:100%;width:0;height:0;margin-right:-9px;content:\' \';pointer-events:none;border:solid transparent;border-width:9px;border-bottom-color:var(--color-main-background)}.action-item__menu.menu-right[data-v-7b368b0c]{right:auto;left:0;transform:none}.action-item__menu.menu-right .action-item__menu_arrow[data-v-7b368b0c]{right:13px;margin-right:0;visibility:hidden}.action-item__menu.menu-left[data-v-7b368b0c]{right:auto;left:0;transform:none}.action-item__menu.menu-left .action-item__menu_arrow[data-v-7b368b0c]{right:auto;left:13px;margin-right:0}.ie .action-item__menu[data-v-7b368b0c],.ie .action-item__menu .action-item__menu_arrow[data-v-7b368b0c],.edge .action-item__menu[data-v-7b368b0c],.edge .action-item__menu .action-item__menu_arrow[data-v-7b368b0c]{border:1px solid var(--color-border)}\n', ""]), e.exports = t
            }, 7: function (e, t, s) {
                "use strict";
                e.exports = function (e, t) {
                    return t || (t = {}), "string" != typeof (e = e && e.__esModule ? e.default : e) ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
                }
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
                }, o = (s(126), s(0)), i = s(54), a = s.n(i), A = Object(o.a)(n, (function () {
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
                "function" == typeof a.a && a()(A), t.a = A.exports
            }, 8: function (e, t, s) {
                "use strict";
                s.r(t), t.default = "data:application/vnd.ms-fontobject;base64,0gsAAAgLAAABAAIAAAAAAAIABQMAAAAAAAABQJABAAAAAExQAAAAABAAAAAAAAAAAAAAAAAAAAEAAAAAoXF6QAAAAAAAAAAAAAAAAAAAAAAAACgAAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQAAAAAAABYAAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAAKAAAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAAAAAAABAAAACgCAAAMAIE9TLzJ044+XAAAArAAAAGBjbWFwAA3rtAAAAQwAAAFCZ2x5ZvUXrnQAAAJQAAAEhGhlYWQnxdiqAAAG1AAAADZoaGVhJxwThQAABwwAAAAkaG10eGfe//8AAAcwAAAALGxvY2EHbghGAAAHXAAAACBtYXhwARwAVwAAB3wAAAAgbmFtZaKxgpwAAAecAAACpnBvc3TmiVqMAAAKRAAAAMQABBKUAZAABQAADGUNrAAAArwMZQ2sAAAJYAD1BQoAAAIABQMAAAAAAAAAAAAAEAAAAAAAAAAAAAAAUGZFZABA6gHqDhOIAAABwhOIAAAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQAAAAAAPAADAAEAAAAcAAQAIAAAAAQABAABAADqDv//AADqAf//FgAAAQAAAAAAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAOpg9DAAUACwAACQIRCQQRCQEOpvqCBX77ugRG+oL6ggV++7oERg9C+oL6ggE4BEYERgE4+oL6ggE4BEYERgABAAAAAA1uElAABQAACQERCQERBhsHU/d0CIwJxPit/sgIiwiM/scAAgAAAAAP3w9DAAUACwAACQIRCQQRCQEE4gV++oIERvu6BX4Ff/qBBEb7ugRGBX4Ffv7I+7r7uv7IBX4Ffv7I+7r7ugABAAAAAA6mElAABQAACQERCQERDW74rQiL93UJxAdTATn3dPd1ATgAAQAAAAAGNxOIAAUAABMHCQEXAZSUBXL6jpQFoxOIVfaR9pFVCcQAAAEAAAAAEYcPgwAFAAAJBQ/N9/P7+/5GBb8Jxw+D9/MEBf5H+kEJxgABAAAAABEXERcACwAACQsRF/3t+sD6wP3tBUD6wAITBUAFQAIT+sAEhP3tBUD6wAITBUAFQAIT+sAFQP3t+sAAAf//AAATkxLsADMAAAEiBw4BFxYXASEmBwYHBgcGFBcWFxYXFjchAQYHBhcWFx4BFxYXFjc2NwE2NzYnJicBLgEKYGVPSkYQEkgF1/HgTT46KScUFBQUJyk6Pk0OIPopNxoYAwMbGVY1Nzs+Oj81B+07FRUUFTz4Eyx0Euw5NKxZYEf6KgEbGC4sOTh4ODksLhgbAvopNT87Pjo3NlYZGgMDGBk4B+w8UVBPUjwH7C0yAAAAAgAAAAAOphJQABgARgAAASIHDgEHBhQXHgEXFjI3PgE3NjQnLgEnJgEiBwYHBhQXFhcWMyERISIHBgcGFBcWFxY3ITI3Njc2NCcmJyYjIRE0JyYnJiMJdm9mYpgpKyspmGJm3mZilyorKyqXYmb8NlZIRykrKylHSFYCcf2PVkhHKSsrKUdIVgdTVUhHKSsrKUdIVf2PKylHSVUSUCsql2Nl32VimCkrKymYYmXfZWOXKiv55SspR0irSEcpK/nmKylHSapJRykrASopR0mqSUcpKwdTVUhHKSsAAAMAAAAAERcRFwADAAcACwAAAREhEQERIREBESERAnEOpvFaDqbxWg6mERf9jwJx+eb9jwJx+eX9jwJxAAMAAAAAEp4L5wAYADEASgAAATIXHgEXFhQHDgEHBiInLgEnJjQ3PgE3NiEyFx4BFxYUBw4BBwYiJy4BJyY0Nz4BNzYhMhceARcWFAcOAQcGIicuAScmNDc+ATc2Aw1wZWKYKSsrKZhiZd9mYpcqKysql2JmByZvZmKXKisrKpdiZt5mYpcqKysql2JmByZvZmKXKisrKpdiZt9lYpgpKyspmGJlC+crKpdiZt5mYpcqKysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKysql2Jm3mZilyorKyqXYmbeZmKXKisAAAAAAgAAAAAP3w/fAAMABwAAAREhESERIREDqgTiAnEE4g/f88sMNfPLDDUAAAABAAAAABEXERcAAgAACQICcQ6m8VoRF/it+K0AAQAAAAAOpgw1AAIAAAkCBOIE4gTiDDX7HgTgAAEAAAABAABAenGhXw889QALE4gAAAAA2rMoTgAAAADaYkxP//8AABOTE4gAAAAIAAIAAAAAAAAAAQAAE4gAAAAAE4j////1E5MAAQAAAAAAAAAAAAAAAAAAAAcAAAAAE4gAABOIAAATiAAAE4gAAAY2AAATiAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAIgA2AFgAbACAAJQAtAEOAXwBmgIQAiYCNAJCAAEAAAAPAEsAAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAAAQAMYAAQAAAAAAAQAUAAAAAQAAAAAAAgAHABQAAQAAAAAAAwAUABsAAQAAAAAABAAUAC8AAQAAAAAABQALAEMAAQAAAAAABgAUAE4AAQAAAAAACgArAGIAAQAAAAAACwATAI0AAwABBAkAAQAoAKAAAwABBAkAAgAOAMgAAwABBAkAAwAoANYAAwABBAkABAAoAP4AAwABBAkABQAWASYAAwABBAkABgAoATwAAwABBAkACgBWAWQAAwABBAkACwAmAbppY29uZm9udC12dWUtZTFmNTVjZVJlZ3VsYXJpY29uZm9udC12dWUtZTFmNTVjZWljb25mb250LXZ1ZS1lMWY1NWNlVmVyc2lvbiAxLjBpY29uZm9udC12dWUtZTFmNTVjZUdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQBSAGUAZwB1AGwAYQByAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQBpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQAtAGUAMQBmADUANQBjAGUAVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAACAAAAAAAAADIAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAA8AAAECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8RYXJyb3ctbGVmdC1kb3VibGUKYXJyb3ctbGVmdBJhcnJvdy1yaWdodC1kb3VibGULYXJyb3ctcmlnaHQKYnJlYWRjcnVtYgljaGVja21hcmsFY2xvc2UHY29uZmlybQRpbmZvBG1lbnUEbW9yZQVwYXVzZQRwbGF5CnRyaWFuZ2xlLXM="
            }, 83: function (e, t) {
                e.exports = s(497)
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
            }, 9: function (e, t, s) {
                "use strict";
                s.r(t), t.default = "data:font/woff;base64,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DDUAAgAACQIE4gTiBOIMNfseBOAAAQAAAAEAAEB6caFfDzz1AAsTiAAAAADasyhOAAAAANpiTE///wAAE5MTiAAAAAgAAgAAAAAAAAABAAATiAAAAAATiP////UTkwABAAAAAAAAAAAAAAAAAAAABwAAAAATiAAAE4gAABOIAAATiAAABjYAABOIAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAiADYAWABsAIAAlAC0AQ4BfAGaAhACJgI0AkIAAQAAAA8ASwADAAAAAAACAAAACgAKAAAA/wAAAAAAAAAAABAAxgABAAAAAAABABQAAAABAAAAAAACAAcAFAABAAAAAAADABQAGwABAAAAAAAEABQALwABAAAAAAAFAAsAQwABAAAAAAAGABQATgABAAAAAAAKACsAYgABAAAAAAALABMAjQADAAEECQABACgAoAADAAEECQACAA4AyAADAAEECQADACgA1gADAAEECQAEACgA/gADAAEECQAFABYBJgADAAEECQAGACgBPAADAAEECQAKAFYBZAADAAEECQALACYBumljb25mb250LXZ1ZS1lMWY1NWNlUmVndWxhcmljb25mb250LXZ1ZS1lMWY1NWNlaWNvbmZvbnQtdnVlLWUxZjU1Y2VWZXJzaW9uIDEuMGljb25mb250LXZ1ZS1lMWY1NWNlR2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20AaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZQAxAGYANQA1AGMAZQBWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBlADEAZgA1ADUAYwBlAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAIAAAAAAAAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAA8ADwAAAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDxFhcnJvdy1sZWZ0LWRvdWJsZQphcnJvdy1sZWZ0EmFycm93LXJpZ2h0LWRvdWJsZQthcnJvdy1yaWdodApicmVhZGNydW1iCWNoZWNrbWFyawVjbG9zZQdjb25maXJtBGluZm8EbWVudQRtb3JlBXBhdXNlBHBsYXkKdHJpYW5nbGUtcw=="
            }
        })
    }, 497: function (e, t, s) {
        var n;
        /*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
        !function (o, i, a, A) {
            "use strict";
            var r, c = ["", "webkit", "Moz", "MS", "ms", "o"], l = i.createElement("div"), m = Math.round, u = Math.abs,
                g = Date.now;

            function d(e, t, s) {
                return setTimeout(w(e, s), t)
            }

            function p(e, t, s) {
                return !!Array.isArray(e) && (f(e, s[t], s), !0)
            }

            function f(e, t, s) {
                var n;
                if (e) if (e.forEach) e.forEach(t, s); else if (void 0 !== e.length) for (n = 0; n < e.length;) t.call(s, e[n], n, e), n++; else for (n in e) e.hasOwnProperty(n) && t.call(s, e[n], n, e)
            }

            function h(e, t, s) {
                var n = "DEPRECATED METHOD: " + t + "\n" + s + " AT \n";
                return function () {
                    var t = new Error("get-stack-trace"),
                        s = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                        i = o.console && (o.console.warn || o.console.log);
                    return i && i.call(o.console, n, s), e.apply(this, arguments)
                }
            }

            r = "function" != typeof Object.assign ? function (e) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                for (var t = Object(e), s = 1; s < arguments.length; s++) {
                    var n = arguments[s];
                    if (null != n) for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o])
                }
                return t
            } : Object.assign;
            var v = h((function (e, t, s) {
                for (var n = Object.keys(t), o = 0; o < n.length;) (!s || s && void 0 === e[n[o]]) && (e[n[o]] = t[n[o]]), o++;
                return e
            }), "extend", "Use `assign`."), M = h((function (e, t) {
                return v(e, t, !0)
            }), "merge", "Use `assign`.");

            function T(e, t, s) {
                var n, o = t.prototype;
                (n = e.prototype = Object.create(o)).constructor = e, n._super = o, s && r(n, s)
            }

            function w(e, t) {
                return function () {
                    return e.apply(t, arguments)
                }
            }

            function b(e, t) {
                return "function" == typeof e ? e.apply(t && t[0] || void 0, t) : e
            }

            function x(e, t) {
                return void 0 === e ? t : e
            }

            function y(e, t, s) {
                f(B(t), (function (t) {
                    e.addEventListener(t, s, !1)
                }))
            }

            function C(e, t, s) {
                f(B(t), (function (t) {
                    e.removeEventListener(t, s, !1)
                }))
            }

            function I(e, t) {
                for (; e;) {
                    if (e == t) return !0;
                    e = e.parentNode
                }
                return !1
            }

            function E(e, t) {
                return e.indexOf(t) > -1
            }

            function B(e) {
                return e.trim().split(/\s+/g)
            }

            function N(e, t, s) {
                if (e.indexOf && !s) return e.indexOf(t);
                for (var n = 0; n < e.length;) {
                    if (s && e[n][s] == t || !s && e[n] === t) return n;
                    n++
                }
                return -1
            }

            function S(e) {
                return Array.prototype.slice.call(e, 0)
            }

            function D(e, t, s) {
                for (var n = [], o = [], i = 0; i < e.length;) {
                    var a = t ? e[i][t] : e[i];
                    N(o, a) < 0 && n.push(e[i]), o[i] = a, i++
                }
                return s && (n = t ? n.sort((function (e, s) {
                    return e[t] > s[t]
                })) : n.sort()), n
            }

            function L(e, t) {
                for (var s, n, o = t[0].toUpperCase() + t.slice(1), i = 0; i < c.length;) {
                    if ((n = (s = c[i]) ? s + o : t) in e) return n;
                    i++
                }
            }

            var P = 1;

            function k(e) {
                var t = e.ownerDocument || e;
                return t.defaultView || t.parentWindow || o
            }

            var Q = "ontouchstart" in o, G = void 0 !== L(o, "PointerEvent"),
                Y = Q && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent), z = ["x", "y"],
                F = ["clientX", "clientY"];

            function U(e, t) {
                var s = this;
                this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function (t) {
                    b(e.options.enable, [e]) && s.handler(t)
                }, this.init()
            }

            function j(e, t, s) {
                var n = s.pointers.length, o = s.changedPointers.length, i = 1 & t && n - o == 0,
                    a = 12 & t && n - o == 0;
                s.isFirst = !!i, s.isFinal = !!a, i && (e.session = {}), s.eventType = t, function (e, t) {
                    var s = e.session, n = t.pointers, o = n.length;
                    s.firstInput || (s.firstInput = Z(t));
                    o > 1 && !s.firstMultiple ? s.firstMultiple = Z(t) : 1 === o && (s.firstMultiple = !1);
                    var i = s.firstInput, a = s.firstMultiple, A = a ? a.center : i.center, r = t.center = _(n);
                    t.timeStamp = g(), t.deltaTime = t.timeStamp - i.timeStamp, t.angle = W(A, r), t.distance = H(A, r), function (e, t) {
                        var s = t.center, n = e.offsetDelta || {}, o = e.prevDelta || {}, i = e.prevInput || {};
                        1 !== t.eventType && 4 !== i.eventType || (o = e.prevDelta = {
                            x: i.deltaX || 0,
                            y: i.deltaY || 0
                        }, n = e.offsetDelta = {x: s.x, y: s.y});
                        t.deltaX = o.x + (s.x - n.x), t.deltaY = o.y + (s.y - n.y)
                    }(s, t), t.offsetDirection = O(t.deltaX, t.deltaY);
                    var c = R(t.deltaTime, t.deltaX, t.deltaY);
                    t.overallVelocityX = c.x, t.overallVelocityY = c.y, t.overallVelocity = u(c.x) > u(c.y) ? c.x : c.y, t.scale = a ? (l = a.pointers, m = n, H(m[0], m[1], F) / H(l[0], l[1], F)) : 1, t.rotation = a ? function (e, t) {
                        return W(t[1], t[0], F) + W(e[1], e[0], F)
                    }(a.pointers, n) : 0, t.maxPointers = s.prevInput ? t.pointers.length > s.prevInput.maxPointers ? t.pointers.length : s.prevInput.maxPointers : t.pointers.length, function (e, t) {
                        var s, n, o, i, a = e.lastInterval || t, A = t.timeStamp - a.timeStamp;
                        if (8 != t.eventType && (A > 25 || void 0 === a.velocity)) {
                            var r = t.deltaX - a.deltaX, c = t.deltaY - a.deltaY, l = R(A, r, c);
                            n = l.x, o = l.y, s = u(l.x) > u(l.y) ? l.x : l.y, i = O(r, c), e.lastInterval = t
                        } else s = a.velocity, n = a.velocityX, o = a.velocityY, i = a.direction;
                        t.velocity = s, t.velocityX = n, t.velocityY = o, t.direction = i
                    }(s, t);
                    var l, m;
                    var d = e.element;
                    I(t.srcEvent.target, d) && (d = t.srcEvent.target);
                    t.target = d
                }(e, s), e.emit("hammer.input", s), e.recognize(s), e.session.prevInput = s
            }

            function Z(e) {
                for (var t = [], s = 0; s < e.pointers.length;) t[s] = {
                    clientX: m(e.pointers[s].clientX),
                    clientY: m(e.pointers[s].clientY)
                }, s++;
                return {timeStamp: g(), pointers: t, center: _(t), deltaX: e.deltaX, deltaY: e.deltaY}
            }

            function _(e) {
                var t = e.length;
                if (1 === t) return {x: m(e[0].clientX), y: m(e[0].clientY)};
                for (var s = 0, n = 0, o = 0; o < t;) s += e[o].clientX, n += e[o].clientY, o++;
                return {x: m(s / t), y: m(n / t)}
            }

            function R(e, t, s) {
                return {x: t / e || 0, y: s / e || 0}
            }

            function O(e, t) {
                return e === t ? 1 : u(e) >= u(t) ? e < 0 ? 2 : 4 : t < 0 ? 8 : 16
            }

            function H(e, t, s) {
                s || (s = z);
                var n = t[s[0]] - e[s[0]], o = t[s[1]] - e[s[1]];
                return Math.sqrt(n * n + o * o)
            }

            function W(e, t, s) {
                s || (s = z);
                var n = t[s[0]] - e[s[0]], o = t[s[1]] - e[s[1]];
                return 180 * Math.atan2(o, n) / Math.PI
            }

            U.prototype = {
                handler: function () {
                }, init: function () {
                    this.evEl && y(this.element, this.evEl, this.domHandler), this.evTarget && y(this.target, this.evTarget, this.domHandler), this.evWin && y(k(this.element), this.evWin, this.domHandler)
                }, destroy: function () {
                    this.evEl && C(this.element, this.evEl, this.domHandler), this.evTarget && C(this.target, this.evTarget, this.domHandler), this.evWin && C(k(this.element), this.evWin, this.domHandler)
                }
            };
            var V = {mousedown: 1, mousemove: 2, mouseup: 4};

            function J() {
                this.evEl = "mousedown", this.evWin = "mousemove mouseup", this.pressed = !1, U.apply(this, arguments)
            }

            T(J, U, {
                handler: function (e) {
                    var t = V[e.type];
                    1 & t && 0 === e.button && (this.pressed = !0), 2 & t && 1 !== e.which && (t = 4), this.pressed && (4 & t && (this.pressed = !1), this.callback(this.manager, t, {
                        pointers: [e],
                        changedPointers: [e],
                        pointerType: "mouse",
                        srcEvent: e
                    }))
                }
            });
            var X = {pointerdown: 1, pointermove: 2, pointerup: 4, pointercancel: 8, pointerout: 8},
                K = {2: "touch", 3: "pen", 4: "mouse", 5: "kinect"}, q = "pointerdown",
                $ = "pointermove pointerup pointercancel";

            function ee() {
                this.evEl = q, this.evWin = $, U.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
            }

            o.MSPointerEvent && !o.PointerEvent && (q = "MSPointerDown", $ = "MSPointerMove MSPointerUp MSPointerCancel"), T(ee, U, {
                handler: function (e) {
                    var t = this.store, s = !1, n = e.type.toLowerCase().replace("ms", ""), o = X[n],
                        i = K[e.pointerType] || e.pointerType, a = "touch" == i, A = N(t, e.pointerId, "pointerId");
                    1 & o && (0 === e.button || a) ? A < 0 && (t.push(e), A = t.length - 1) : 12 & o && (s = !0), A < 0 || (t[A] = e, this.callback(this.manager, o, {
                        pointers: t,
                        changedPointers: [e],
                        pointerType: i,
                        srcEvent: e
                    }), s && t.splice(A, 1))
                }
            });
            var te = {touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8};

            function se() {
                this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, U.apply(this, arguments)
            }

            function ne(e, t) {
                var s = S(e.touches), n = S(e.changedTouches);
                return 12 & t && (s = D(s.concat(n), "identifier", !0)), [s, n]
            }

            T(se, U, {
                handler: function (e) {
                    var t = te[e.type];
                    if (1 === t && (this.started = !0), this.started) {
                        var s = ne.call(this, e, t);
                        12 & t && s[0].length - s[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                            pointers: s[0],
                            changedPointers: s[1],
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

            function ae(e, t) {
                var s = S(e.touches), n = this.targetIds;
                if (3 & t && 1 === s.length) return n[s[0].identifier] = !0, [s, s];
                var o, i, a = S(e.changedTouches), A = [], r = this.target;
                if (i = s.filter((function (e) {
                    return I(e.target, r)
                })), 1 === t) for (o = 0; o < i.length;) n[i[o].identifier] = !0, o++;
                for (o = 0; o < a.length;) n[a[o].identifier] && A.push(a[o]), 12 & t && delete n[a[o].identifier], o++;
                return A.length ? [D(i.concat(A), "identifier", !0), A] : void 0
            }

            T(ie, U, {
                handler: function (e) {
                    var t = oe[e.type], s = ae.call(this, e, t);
                    s && this.callback(this.manager, t, {
                        pointers: s[0],
                        changedPointers: s[1],
                        pointerType: "touch",
                        srcEvent: e
                    })
                }
            });

            function Ae() {
                U.apply(this, arguments);
                var e = w(this.handler, this);
                this.touch = new ie(this.manager, e), this.mouse = new J(this.manager, e), this.primaryTouch = null, this.lastTouches = []
            }

            function re(e, t) {
                1 & e ? (this.primaryTouch = t.changedPointers[0].identifier, ce.call(this, t)) : 12 & e && ce.call(this, t)
            }

            function ce(e) {
                var t = e.changedPointers[0];
                if (t.identifier === this.primaryTouch) {
                    var s = {x: t.clientX, y: t.clientY};
                    this.lastTouches.push(s);
                    var n = this.lastTouches;
                    setTimeout((function () {
                        var e = n.indexOf(s);
                        e > -1 && n.splice(e, 1)
                    }), 2500)
                }
            }

            function le(e) {
                for (var t = e.srcEvent.clientX, s = e.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                    var o = this.lastTouches[n], i = Math.abs(t - o.x), a = Math.abs(s - o.y);
                    if (i <= 25 && a <= 25) return !0
                }
                return !1
            }

            T(Ae, U, {
                handler: function (e, t, s) {
                    var n = "touch" == s.pointerType, o = "mouse" == s.pointerType;
                    if (!(o && s.sourceCapabilities && s.sourceCapabilities.firesTouchEvents)) {
                        if (n) re.call(this, t, s); else if (o && le.call(this, s)) return;
                        this.callback(e, t, s)
                    }
                }, destroy: function () {
                    this.touch.destroy(), this.mouse.destroy()
                }
            });
            var me = L(l.style, "touchAction"), ue = void 0 !== me, ge = function () {
                if (!ue) return !1;
                var e = {}, t = o.CSS && o.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function (s) {
                    e[s] = !t || o.CSS.supports("touch-action", s)
                })), e
            }();

            function de(e, t) {
                this.manager = e, this.set(t)
            }

            de.prototype = {
                set: function (e) {
                    "compute" == e && (e = this.compute()), ue && this.manager.element.style && ge[e] && (this.manager.element.style[me] = e), this.actions = e.toLowerCase().trim()
                }, update: function () {
                    this.set(this.manager.options.touchAction)
                }, compute: function () {
                    var e = [];
                    return f(this.manager.recognizers, (function (t) {
                        b(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                    })), function (e) {
                        if (E(e, "none")) return "none";
                        var t = E(e, "pan-x"), s = E(e, "pan-y");
                        if (t && s) return "none";
                        if (t || s) return t ? "pan-x" : "pan-y";
                        if (E(e, "manipulation")) return "manipulation";
                        return "auto"
                    }(e.join(" "))
                }, preventDefaults: function (e) {
                    var t = e.srcEvent, s = e.offsetDirection;
                    if (this.manager.session.prevented) t.preventDefault(); else {
                        var n = this.actions, o = E(n, "none") && !ge.none, i = E(n, "pan-y") && !ge["pan-y"],
                            a = E(n, "pan-x") && !ge["pan-x"];
                        if (o) {
                            var A = 1 === e.pointers.length, r = e.distance < 2, c = e.deltaTime < 250;
                            if (A && r && c) return
                        }
                        if (!a || !i) return o || i && 6 & s || a && 24 & s ? this.preventSrc(t) : void 0
                    }
                }, preventSrc: function (e) {
                    this.manager.session.prevented = !0, e.preventDefault()
                }
            };

            function pe(e) {
                this.options = r({}, this.defaults, e || {}), this.id = P++, this.manager = null, this.options.enable = x(this.options.enable, !0), this.state = 1, this.simultaneous = {}, this.requireFail = []
            }

            function fe(e) {
                return 16 & e ? "cancel" : 8 & e ? "end" : 4 & e ? "move" : 2 & e ? "start" : ""
            }

            function he(e) {
                return 16 == e ? "down" : 8 == e ? "up" : 2 == e ? "left" : 4 == e ? "right" : ""
            }

            function ve(e, t) {
                var s = t.manager;
                return s ? s.get(e) : e
            }

            function Me() {
                pe.apply(this, arguments)
            }

            function Te() {
                Me.apply(this, arguments), this.pX = null, this.pY = null
            }

            function we() {
                Me.apply(this, arguments)
            }

            function be() {
                pe.apply(this, arguments), this._timer = null, this._input = null
            }

            function xe() {
                Me.apply(this, arguments)
            }

            function ye() {
                Me.apply(this, arguments)
            }

            function Ce() {
                pe.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
            }

            function Ie(e, t) {
                return (t = t || {}).recognizers = x(t.recognizers, Ie.defaults.preset), new Ee(e, t)
            }

            pe.prototype = {
                defaults: {}, set: function (e) {
                    return r(this.options, e), this.manager && this.manager.touchAction.update(), this
                }, recognizeWith: function (e) {
                    if (p(e, "recognizeWith", this)) return this;
                    var t = this.simultaneous;
                    return t[(e = ve(e, this)).id] || (t[e.id] = e, e.recognizeWith(this)), this
                }, dropRecognizeWith: function (e) {
                    return p(e, "dropRecognizeWith", this) || (e = ve(e, this), delete this.simultaneous[e.id]), this
                }, requireFailure: function (e) {
                    if (p(e, "requireFailure", this)) return this;
                    var t = this.requireFail;
                    return -1 === N(t, e = ve(e, this)) && (t.push(e), e.requireFailure(this)), this
                }, dropRequireFailure: function (e) {
                    if (p(e, "dropRequireFailure", this)) return this;
                    e = ve(e, this);
                    var t = N(this.requireFail, e);
                    return t > -1 && this.requireFail.splice(t, 1), this
                }, hasRequireFailures: function () {
                    return this.requireFail.length > 0
                }, canRecognizeWith: function (e) {
                    return !!this.simultaneous[e.id]
                }, emit: function (e) {
                    var t = this, s = this.state;

                    function n(s) {
                        t.manager.emit(s, e)
                    }

                    s < 8 && n(t.options.event + fe(s)), n(t.options.event), e.additionalEvent && n(e.additionalEvent), s >= 8 && n(t.options.event + fe(s))
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
                    var t = r({}, e);
                    if (!b(this.options.enable, [this, t])) return this.reset(), void (this.state = 32);
                    56 & this.state && (this.state = 1), this.state = this.process(t), 30 & this.state && this.tryEmit(t)
                }, process: function (e) {
                }, getTouchAction: function () {
                }, reset: function () {
                }
            }, T(Me, pe, {
                defaults: {pointers: 1}, attrTest: function (e) {
                    var t = this.options.pointers;
                    return 0 === t || e.pointers.length === t
                }, process: function (e) {
                    var t = this.state, s = e.eventType, n = 6 & t, o = this.attrTest(e);
                    return n && (8 & s || !o) ? 16 | t : n || o ? 4 & s ? 8 | t : 2 & t ? 4 | t : 2 : 32
                }
            }), T(Te, Me, {
                defaults: {event: "pan", threshold: 10, pointers: 1, direction: 30},
                getTouchAction: function () {
                    var e = this.options.direction, t = [];
                    return 6 & e && t.push("pan-y"), 24 & e && t.push("pan-x"), t
                },
                directionTest: function (e) {
                    var t = this.options, s = !0, n = e.distance, o = e.direction, i = e.deltaX, a = e.deltaY;
                    return o & t.direction || (6 & t.direction ? (o = 0 === i ? 1 : i < 0 ? 2 : 4, s = i != this.pX, n = Math.abs(e.deltaX)) : (o = 0 === a ? 1 : a < 0 ? 8 : 16, s = a != this.pY, n = Math.abs(e.deltaY))), e.direction = o, s && n > t.threshold && o & t.direction
                },
                attrTest: function (e) {
                    return Me.prototype.attrTest.call(this, e) && (2 & this.state || !(2 & this.state) && this.directionTest(e))
                },
                emit: function (e) {
                    this.pX = e.deltaX, this.pY = e.deltaY;
                    var t = he(e.direction);
                    t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
                }
            }), T(we, Me, {
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
            }), T(be, pe, {
                defaults: {event: "press", pointers: 1, time: 251, threshold: 9},
                getTouchAction: function () {
                    return ["auto"]
                },
                process: function (e) {
                    var t = this.options, s = e.pointers.length === t.pointers, n = e.distance < t.threshold,
                        o = e.deltaTime > t.time;
                    if (this._input = e, !n || !s || 12 & e.eventType && !o) this.reset(); else if (1 & e.eventType) this.reset(), this._timer = d((function () {
                        this.state = 8, this.tryEmit()
                    }), t.time, this); else if (4 & e.eventType) return 8;
                    return 32
                },
                reset: function () {
                    clearTimeout(this._timer)
                },
                emit: function (e) {
                    8 === this.state && (e && 4 & e.eventType ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = g(), this.manager.emit(this.options.event, this._input)))
                }
            }), T(xe, Me, {
                defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
                    return ["none"]
                }, attrTest: function (e) {
                    return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state)
                }
            }), T(ye, Me, {
                defaults: {event: "swipe", threshold: 10, velocity: .3, direction: 30, pointers: 1},
                getTouchAction: function () {
                    return Te.prototype.getTouchAction.call(this)
                },
                attrTest: function (e) {
                    var t, s = this.options.direction;
                    return 30 & s ? t = e.overallVelocity : 6 & s ? t = e.overallVelocityX : 24 & s && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && s & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && u(t) > this.options.velocity && 4 & e.eventType
                },
                emit: function (e) {
                    var t = he(e.offsetDirection);
                    t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
                }
            }), T(Ce, pe, {
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
                    var t = this.options, s = e.pointers.length === t.pointers, n = e.distance < t.threshold,
                        o = e.deltaTime < t.time;
                    if (this.reset(), 1 & e.eventType && 0 === this.count) return this.failTimeout();
                    if (n && o && s) {
                        if (4 != e.eventType) return this.failTimeout();
                        var i = !this.pTime || e.timeStamp - this.pTime < t.interval,
                            a = !this.pCenter || H(this.pCenter, e.center) < t.posThreshold;
                        if (this.pTime = e.timeStamp, this.pCenter = e.center, a && i ? this.count += 1 : this.count = 1, this._input = e, 0 === this.count % t.taps) return this.hasRequireFailures() ? (this._timer = d((function () {
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
            }), Ie.VERSION = "2.0.7", Ie.defaults = {
                domEvents: !1,
                touchAction: "compute",
                enable: !0,
                inputTarget: null,
                inputClass: null,
                preset: [[xe, {enable: !1}], [we, {enable: !1}, ["rotate"]], [ye, {direction: 6}], [Te, {direction: 6}, ["swipe"]], [Ce], [Ce, {
                    event: "doubletap",
                    taps: 2
                }, ["tap"]], [be]],
                cssProps: {
                    userSelect: "none",
                    touchSelect: "none",
                    touchCallout: "none",
                    contentZooming: "none",
                    userDrag: "none",
                    tapHighlightColor: "rgba(0,0,0,0)"
                }
            };

            function Ee(e, t) {
                var s;
                this.options = r({}, Ie.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = new ((s = this).options.inputClass || (G ? ee : Y ? ie : Q ? Ae : J))(s, j), this.touchAction = new de(this, this.options.touchAction), Be(this, !0), f(this.options.recognizers, (function (e) {
                    var t = this.add(new e[0](e[1]));
                    e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
                }), this)
            }

            function Be(e, t) {
                var s, n = e.element;
                n.style && (f(e.options.cssProps, (function (o, i) {
                    s = L(n.style, i), t ? (e.oldCssProps[s] = n.style[s], n.style[s] = o) : n.style[s] = e.oldCssProps[s] || ""
                })), t || (e.oldCssProps = {}))
            }

            Ee.prototype = {
                set: function (e) {
                    return r(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
                }, stop: function (e) {
                    this.session.stopped = e ? 2 : 1
                }, recognize: function (e) {
                    var t = this.session;
                    if (!t.stopped) {
                        var s;
                        this.touchAction.preventDefaults(e);
                        var n = this.recognizers, o = t.curRecognizer;
                        (!o || o && 8 & o.state) && (o = t.curRecognizer = null);
                        for (var i = 0; i < n.length;) s = n[i], 2 === t.stopped || o && s != o && !s.canRecognizeWith(o) ? s.reset() : s.recognize(e), !o && 14 & s.state && (o = t.curRecognizer = s), i++
                    }
                }, get: function (e) {
                    if (e instanceof pe) return e;
                    for (var t = this.recognizers, s = 0; s < t.length; s++) if (t[s].options.event == e) return t[s];
                    return null
                }, add: function (e) {
                    if (p(e, "add", this)) return this;
                    var t = this.get(e.options.event);
                    return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
                }, remove: function (e) {
                    if (p(e, "remove", this)) return this;
                    if (e = this.get(e)) {
                        var t = this.recognizers, s = N(t, e);
                        -1 !== s && (t.splice(s, 1), this.touchAction.update())
                    }
                    return this
                }, on: function (e, t) {
                    if (void 0 !== e && void 0 !== t) {
                        var s = this.handlers;
                        return f(B(e), (function (e) {
                            s[e] = s[e] || [], s[e].push(t)
                        })), this
                    }
                }, off: function (e, t) {
                    if (void 0 !== e) {
                        var s = this.handlers;
                        return f(B(e), (function (e) {
                            t ? s[e] && s[e].splice(N(s[e], t), 1) : delete s[e]
                        })), this
                    }
                }, emit: function (e, t) {
                    this.options.domEvents && function (e, t) {
                        var s = i.createEvent("Event");
                        s.initEvent(e, !0, !0), s.gesture = t, t.target.dispatchEvent(s)
                    }(e, t);
                    var s = this.handlers[e] && this.handlers[e].slice();
                    if (s && s.length) {
                        t.type = e, t.preventDefault = function () {
                            t.srcEvent.preventDefault()
                        };
                        for (var n = 0; n < s.length;) s[n](t), n++
                    }
                }, destroy: function () {
                    this.element && Be(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                }
            }, r(Ie, {
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
                Manager: Ee,
                Input: U,
                TouchAction: de,
                TouchInput: ie,
                MouseInput: J,
                PointerEventInput: ee,
                TouchMouseInput: Ae,
                SingleTouchInput: se,
                Recognizer: pe,
                AttrRecognizer: Me,
                Tap: Ce,
                Pan: Te,
                Swipe: ye,
                Pinch: we,
                Rotate: xe,
                Press: be,
                on: y,
                off: C,
                each: f,
                merge: M,
                extend: v,
                assign: r,
                inherit: T,
                bindFn: w,
                prefixed: L
            }), (void 0 !== o ? o : "undefined" != typeof self ? self : {}).Hammer = Ie, void 0 === (n = function () {
                return Ie
            }.call(t, s, t, e)) || (e.exports = n)
        }(window, document)
    }, 529: function (e, t, s) {
        "use strict";
        s.r(t);
        var n = s(487), o = {
            name: "PublicFilesEditor",
            components: {
                Modal: s.n(n).a, EditorWrapper: function () {
                    return Promise.all([s.e(0), s.e(189), s.e(198), s.e(190)]).then(s.bind(null, 169))
                }
            },
            props: {
                fileId: {type: Number, default: null},
                relativePath: {type: String, default: null},
                active: {type: Boolean, default: !1},
                shareToken: {type: String, default: null},
                mimeType: {type: String, default: null}
            },
            computed: {
                fileName: function () {
                    return this.relativePath.substring(this.relativePath.lastIndexOf("/") + 1)
                }
            },
            methods: {
                close: function () {
                    this.active = !1
                }
            }
        }, i = s(19), a = Object(i.a)(o, (function () {
            var e = this, t = e.$createElement, s = e._self._c || t;
            return e.active ? s("Modal", {
                attrs: {title: e.fileName},
                on: {close: e.close}
            }, [s("EditorWrapper", {
                attrs: {
                    "file-id": e.fileId,
                    "relative-path": e.relativePath,
                    active: e.active,
                    "share-token": e.shareToken,
                    mime: e.mimeType
                }
            })], 1) : e._e()
        }), [], !1, null, null, null);
        t.default = a.exports
    }
}]);
//# sourceMappingURL=files-modal.js.map?v=fd4a069ca4fc0b4fa53c
