! function(e) {
	var t = function(n, f, s) {
		"use strict";
		var m, y, e, D = {
			lazyClass: "lazyload",
			loadedClass: "lazyloaded",
			loadingClass: "lazyloading",
			preloadClass: "lazypreload",
			errorClass: "lazyerror",
			autosizesClass: "lazyautosizes",
			fastLoadedClass: "ls-is-cached",
			iframeLoadMode: 0,
			srcAttr: "data-src",
			srcsetAttr: "data-srcset",
			sizesAttr: "data-sizes",
			minSize: 40,
			customMedia: {},
			init: !0,
			expFactor: 1.5,
			hFac: .8,
			loadMode: 2,
			loadHidden: !0,
			ricTimeout: 0,
			throttleDelay: 125
		};
		for (e in y = n.lazySizesConfig || n.lazysizesConfig || {}, D) e in y || (y[e] = D[e]);
		if (!f || !f.getElementsByClassName) return {
			init: function() {},
			cfg: y,
			noSupport: !0
		};

		function c(e, t) {
			S(e, t) || e.setAttribute("class", (e[L]("class") || "").trim() + " " + t)
		}

		function u(e, t) {
			(t = S(e, t)) && e.setAttribute("class", (e[L]("class") || "").replace(t, " "))
		}

		function k(e, t) {
			var a;
			!de && (a = n.picturefill || y.pf) ? (t && t.src && !e[L]("srcset") && e.setAttribute("srcset", t.src), a({
				reevaluate: !0,
				elements: [e]
			})) : t && t.src && (e.src = t.src)
		}

		function t(a, e) {
			return e ? function() {
				F(a)
			} : function() {
				var e = this,
					t = arguments;
				F(function() {
					a.apply(e, t)
				})
			}
		}

		function H(e) {
			function t() {
				var e = s.now() - n;
				e < 99 ? x(t, 99 - e) : (ue || i)(i)
			}
			var a, n, i = function() {
				a = null, e()
			};
			return function() {
				n = s.now(), a = a || x(t, 99)
			}
		}

		function a() {
			!a.i && f.getElementsByClassName && (a.i = !0, pe._(), ge._())
		}
		var O, P, $, z, h, q, g, I, U, j, p, v, C, b, A, G, J, K, Q, i, V, X, Y, Z, E, _, w, ee, o, te, ae, ne, M, ie, se, oe, re, le, r, N = f.documentElement,
			de = n.HTMLPictureElement,
			l = "addEventListener",
			L = "getAttribute",
			d = n[l].bind(n),
			x = n.setTimeout,
			ce = n.requestAnimationFrame || x,
			ue = n.requestIdleCallback,
			fe = /^picture$/i,
			me = ["load", "error", "lazyincluded", "_lazyloaded"],
			W = {},
			ye = Array.prototype.forEach,
			S = function(e, t) {
				return W[t] || (W[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), W[t].test(e[L]("class") || "") && W[t]
			},
			ze = function(t, a, e) {
				var n = e ? l : "removeEventListener";
				e && ze(t, a), me.forEach(function(e) {
					t[n](e, a)
				})
			},
			B = function(e, t, a, n, i) {
				var s = f.createEvent("Event");
				return (a = a || {}).instance = m, s.initEvent(t, !n, !i), s.detail = a, e.dispatchEvent(s), s
			},
			T = function(e, t) {
				return (getComputedStyle(e, null) || {})[t]
			},
			he = function(e, t, a) {
				for (a = a || e.offsetWidth; a < y.minSize && t && !e._lazysizesWidth;) a = t.offsetWidth, t = t.parentNode;
				return a
			},
			F = (le = [], r = re = [], Ne._lsFlush = Me, Ne),
			ge = (X = /^img$/i, Y = /^iframe$/i, Z = "onscroll" in n && !/(gle|ing)bot/.test(navigator.userAgent), w = -1, ee = function(e) {
				return (A = null == A ? "hidden" == T(f.body, "visibility") : A) || !("hidden" == T(e.parentNode, "visibility") && "hidden" == T(e, "visibility"))
			}, G = be, K = _ = E = 0, Q = y.throttleDelay, i = y.ricTimeout, V = ue && 49 < i ? function() {
				ue(Ae, {
					timeout: i
				}), i !== y.ricTimeout && (i = y.ricTimeout)
			} : t(function() {
				x(Ae)
			}, !0), te = t(Ee), ae = function(e) {
				te({
					target: e.target
				})
			}, ne = t(function(t, e, a, n, i) {
				var s, o, r, l, d;
				(o = B(t, "lazybeforeunveil", e)).defaultPrevented || (n && (a ? c(t, y.autosizesClass) : t.setAttribute("sizes", n)), a = t[L](y.srcsetAttr), n = t[L](y.srcAttr), i && (s = (l = t.parentNode) && fe.test(l.nodeName || "")), r = e.firesLoad || "src" in t && (a || n || s), o = {
					target: t
				}, c(t, y.loadingClass), r && (clearTimeout(q), q = x(Ce, 2500), ze(t, ae, !0)), s && ye.call(l.getElementsByTagName("source"), _e), a ? t.setAttribute("srcset", a) : n && !s && (Y.test(t.nodeName) ? (e = n, 0 == (d = (l = t).getAttribute("data-load-mode") || y.iframeLoadMode) ? l.contentWindow.location.replace(e) : 1 == d && (l.src = e)) : t.src = n), i && (a || s) && k(t, {
					src: n
				})), t._lazyRace && delete t._lazyRace, u(t, y.lazyClass), F(function() {
					var e = t.complete && 1 < t.naturalWidth;
					r && !e || (e && c(t, y.fastLoadedClass), Ee(o), t._lazyCache = !0, x(function() {
						"_lazyCache" in t && delete t._lazyCache
					}, 9)), "lazy" == t.loading && _--
				}, !0)
			}), ie = H(function() {
				y.loadMode = 3, o()
			}), {
				_: function() {
					I = s.now(), m.elements = f.getElementsByClassName(y.lazyClass), z = f.getElementsByClassName(y.lazyClass + " " + y.preloadClass), d("scroll", o, !0), d("resize", o, !0), d("pageshow", function(e) {
						var t;
						e.persisted && (t = f.querySelectorAll("." + y.loadingClass)).length && t.forEach && ce(function() {
							t.forEach(function(e) {
								e.complete && M(e)
							})
						})
					}), n.MutationObserver ? new MutationObserver(o).observe(N, {
						childList: !0,
						subtree: !0,
						attributes: !0
					}) : (N[l]("DOMNodeInserted", o, !0), N[l]("DOMAttrModified", o, !0), setInterval(o, 999)), d("hashchange", o, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(e) {
						f[l](e, o, !0)
					}), /d$|^c/.test(f.readyState) ? R() : (d("load", R), f[l]("DOMContentLoaded", o), x(R, 2e4)), m.elements.length ? (be(), F._lsFlush()) : o()
				},
				checkElems: o = function(e) {
					var t;
					(e = !0 === e) && (i = 33), J || (J = !0, (t = Q - (s.now() - K)) < 0 && (t = 0), e || t < 9 ? V() : x(V, t))
				},
				unveil: M = function(e) {
					var t, a, n, i;
					e._lazyRace || (!(i = "auto" == (n = (a = X.test(e.nodeName)) && (e[L](y.sizesAttr) || e[L]("sizes")))) && h || !a || !e[L]("src") && !e.srcset || e.complete || S(e, y.errorClass) || !S(e, y.lazyClass)) && (t = B(e, "lazyunveilread").detail, i && pe.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, _++, ne(e, t, i, n, a))
				},
				_aLSL: we
			}),
			pe = (P = t(function(e, t, a, n) {
				var i, s, o;
				if (e._lazysizesWidth = n, e.setAttribute("sizes", n += "px"), fe.test(t.nodeName || ""))
					for (s = 0, o = (i = t.getElementsByTagName("source")).length; s < o; s++) i[s].setAttribute("sizes", n);
				a.detail.dataAttr || k(e, a.detail)
			}), {
				_: function() {
					O = f.getElementsByClassName(y.autosizesClass), d("resize", $)
				},
				checkElems: $ = H(function() {
					var e, t = O.length;
					if (t)
						for (e = 0; e < t; e++) ve(O[e])
				}),
				updateElem: ve
			});

		function ve(e, t, a) {
			var n = e.parentNode;
			n && (a = he(e, n, a), (t = B(e, "lazybeforesizes", {
				width: a,
				dataAttr: !!t
			})).defaultPrevented || (a = t.detail.width) && a !== e._lazysizesWidth && P(e, n, t, a))
		}

		function Ce(e) {
			_--, e && !(_ < 0) && e.target || (_ = 0)
		}

		function be() {
			var e, t, a, n, i, s, o, r, l, d, c, u = m.elements;
			if ((g = y.loadMode) && _ < 8 && (e = u.length)) {
				for (t = 0, w++; t < e; t++)
					if (u[t] && !u[t]._lazyRace)
						if (!Z || m.prematureUnveil && m.prematureUnveil(u[t])) M(u[t]);
						else if ((o = u[t][L]("data-expand")) && (i = +o) || (i = E), l || (l = !y.expand || y.expand < 1 ? 500 < N.clientHeight && 500 < N.clientWidth ? 500 : 370 : y.expand, d = (m._defEx = l) * y.expFactor, c = y.hFac, A = null, E < d && _ < 1 && 2 < w && 2 < g && !f.hidden ? (E = d, w = 0) : E = 1 < g && 1 < w && _ < 6 ? l : 0), r !== i && (U = innerWidth + i * c, j = innerHeight + i, s = -1 * i, r = i), d = u[t].getBoundingClientRect(), (b = d.bottom) >= s && (p = d.top) <= j && (C = d.right) >= s * c && (v = d.left) <= U && (b || C || v || p) && (y.loadHidden || ee(u[t])) && (h && _ < 3 && !o && (g < 3 || w < 4) || function(e, t) {
						var a, n = e,
							i = ee(e);
						for (p -= t, b += t, v -= t, C += t; i && (n = n.offsetParent) && n != f.body && n != N;)(i = 0 < (T(n, "opacity") || 1)) && "visible" != T(n, "overflow") && (a = n.getBoundingClientRect(), i = C > a.left && v < a.right && b > a.top - 1 && p < a.bottom + 1);
						return i
					}(u[t], i))) {
					if (M(u[t]), n = !0, 9 < _) break
				} else !n && h && !a && _ < 4 && w < 4 && 2 < g && (z[0] || y.preloadAfterLoad) && (z[0] || !o && (b || C || v || p || "auto" != u[t][L](y.sizesAttr))) && (a = z[0] || u[t]);
				a && !n && M(a)
			}
		}

		function Ae() {
			J = !1, K = s.now(), G()
		}

		function Ee(e) {
			var t = e.target;
			t._lazyCache ? delete t._lazyCache : (Ce(e), c(t, y.loadedClass), u(t, y.loadingClass), ze(t, ae), B(t, "lazyloaded"))
		}

		function _e(e) {
			var t, a = e[L](y.srcsetAttr);
			(t = y.customMedia[e[L]("data-media") || e[L]("media")]) && e.setAttribute("media", t), a && e.setAttribute("srcset", a)
		}

		function we() {
			3 == y.loadMode && (y.loadMode = 2), ie()
		}

		function R() {
			h || (s.now() - I < 999 ? x(R, 999) : (h = !0, y.loadMode = 3, o(), d("scroll", we, !0)))
		}

		function Me() {
			var e = r;
			for (r = re.length ? le : re, oe = !(se = !0); e.length;) e.shift()();
			se = !1
		}

		function Ne(e, t) {
			se && !t ? e.apply(this, arguments) : (r.push(e), oe || (oe = !0, (f.hidden ? x : ce)(Me)))
		}
		return x(function() {
			y.init && a()
		}), m = {
			cfg: y,
			autoSizer: pe,
			loader: ge,
			init: a,
			uP: k,
			aC: c,
			rC: u,
			hC: S,
			fire: B,
			gW: he,
			rAF: F
		}
	}(e, e.document, Date);
	e.lazySizes = t, "object" == typeof module && module.exports && (module.exports = t)
}("undefined" != typeof window ? window : {});
! function(t, e) {
	var i;
	t && (i = function() {
		e(t.lazySizes), t.removeEventListener("lazyunveilread", i, !0)
	}, e = e.bind(null, t, t.document), "object" == typeof module && module.exports ? e(require("lazysizes")) : "function" == typeof define && define.amd ? define(["lazysizes"], e) : t.lazySizes ? i() : t.addEventListener("lazyunveilread", i, !0))
}("undefined" != typeof window ? window : 0, function(o, t, i) {
	"use strict";
	var c, s, d, u, l, f;
	o.addEventListener && (c = /\s+(\d+)(w|h)\s+(\d+)(w|h)/, s = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/, d = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/, u = /^picture$/i, l = i.cfg, f = {
		getParent: function(t, e) {
			var i = t,
				a = t.parentNode;
			return e && "prev" != e || !a || !u.test(a.nodeName || "") || (a = a.parentNode), i = "self" != e ? "prev" == e ? t.previousElementSibling : e && (a.closest || o.jQuery) && (a.closest ? a.closest(e) : jQuery(a).closest(e)[0]) || a : i
		},
		getFit: function(t) {
			var e, i, a = getComputedStyle(t, null) || {},
				n = a.content || a.fontFamily,
				r = {
					fit: t._lazysizesParentFit || t.getAttribute("data-parent-fit")
				};
			return !r.fit && n && (e = n.match(s)) && (r.fit = e[1]), r.fit ? (!(i = t._lazysizesParentContainer || t.getAttribute("data-parent-container")) && n && (e = n.match(d)) && (i = e[1]), r.parent = f.getParent(t, i)) : r.fit = a.objectFit, r
		},
		getImageRatio: function(t) {
			for (var e, i, a, n, r = t.parentNode, s = r && u.test(r.nodeName || "") ? r.querySelectorAll("source, img") : [t], d = 0; d < s.length; d++)
				if (n = (t = s[d]).getAttribute(l.srcsetAttr) || t.getAttribute("srcset") || t.getAttribute("data-pfsrcset") || t.getAttribute("data-risrcset") || "", i = t._lsMedia || t.getAttribute("media"), i = l.customMedia[t.getAttribute("data-media") || i] || i, n && (!i || (o.matchMedia && matchMedia(i) || {}).matches)) {
					(e = parseFloat(t.getAttribute("data-aspectratio"))) || (n = (i = n.match(c)) ? "w" == i[2] ? (a = i[1], i[3]) : (a = i[3], i[1]) : (a = t.getAttribute("width"), t.getAttribute("height")), e = a / n);
					break
				} return e
		},
		calculateSize: function(t, e) {
			var i, a = this.getFit(t),
				n = a.fit,
				a = a.parent;
			return "width" == n || ("contain" == n || "cover" == n) && (i = this.getImageRatio(t)) ? (a ? e = a.clientWidth : a = t, t = e, "width" == n ? t = e : (a = e / a.clientHeight) && ("cover" == n && a < i || "contain" == n && i < a) && (t = e * (i / a)), t) : e
		}
	}, i.parentFit = f, t.addEventListener("lazybeforesizes", function(t) {
		var e;
		t.defaultPrevented || t.detail.instance != i || (e = t.target, t.detail.width = f.calculateSize(e, t.detail.width))
	}))
});