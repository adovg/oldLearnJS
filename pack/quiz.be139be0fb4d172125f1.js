var quiz = webpackJsonp_name_([ 13 ], {
101: function(e, t) {
Prism.languages.java = Prism.languages.extend("clike", {
keyword: /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp-]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?[df]?/i,
operator: {
pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
lookbehind: !0
}
}), Prism.languages.insertBefore("java", "function", {
annotation: {
alias: "punctuation",
pattern: /(^|[^.])@\w+/,
lookbehind: !0
}
}), Prism.languages.insertBefore("java", "class-name", {
generics: {
pattern: /<\s*\w+(?:\.\w+)?(?:\s*,\s*\w+(?:\.\w+)?)*>/i,
alias: "function",
inside: {
keyword: Prism.languages.java.keyword,
punctuation: /[<>(),.:]/
}
}
});
},
147: function(e, t, n) {
"use strict";
var a = n(146), r = n(148);
const i = n(143).lang, s = n(144);
s.requirePhrase("site", n(1)("./" + i + ".yml")), document.addEventListener("xhrfail", function(e) {
new a.Error(e.reason);
}), e.exports = function(e) {
var t = new XMLHttpRequest(), n = e.method || "GET", a = e.body, i = e.url;
t.open(n, i, !e.sync), t.method = n;
var o = r();
o && !e.skipCsrf && t.setRequestHeader("X-XSRF-TOKEN", o), "[object Object]" == {}.toString.call(a) && (t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
a = JSON.stringify(a)), e.noDocumentEvents || (t.addEventListener("loadstart", e => {
t.timeStart = Date.now();
var n = d("xhrstart", e);
document.dispatchEvent(n);
}), t.addEventListener("loadend", e => {
var t = d("xhrend", e);
document.dispatchEvent(t);
}), t.addEventListener("success", e => {
var t = d("xhrsuccess", e);
t.result = e.result, document.dispatchEvent(t);
}), t.addEventListener("fail", e => {
var t = d("xhrfail", e);
t.reason = e.reason, document.dispatchEvent(t);
})), e.raw || t.setRequestHeader("Accept", "application/json"), t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
var l, u, c = e.normalStatuses || [ 200 ];
function d(e, t) {
var n = new CustomEvent(e);
return n.originalEvent = t, n;
}
function m(e, n) {
var a = d("fail", n);
a.reason = e, t.dispatchEvent(a);
}
return t.addEventListener("error", e => {
m(s("site.errors.server_connection_error"), e);
}), t.addEventListener("timeout", e => {
m(s("site.errors.server_request_timeout"), e);
}), t.addEventListener("abort", e => {
m(s("site.errors.request_aborted"), e);
}), t.addEventListener("load", n => {
if (t.status) if (-1 != c.indexOf(t.status)) {
var a = t.responseText;
if ((t.getResponseHeader("Content-Type") || "").match(/^application\/json/) || e.json) try {
a = JSON.parse(a);
} catch (n) {
return void m(s("site.errors.invalid_format"), n);
}
a = a, (n = d("success", n)).result = a, t.dispatchEvent(n);
} else m(s("site.errors.server_error", {
status: t.status
}), n); else m(s("site.errors.no_response"), n);
}), setTimeout(function() {
t.send(a);
}, 0), t;
};
},
148: function(e, t, n) {
"use strict";
e.exports = function() {
var e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
},
158: function(e, t, n) {
"use strict";
e.exports = function(e) {
var t, n = 1 + e.innerHTML.split("\n").length, a = new Array(n);
a = a.join("<span></span>"), (t = document.createElement("span")).className = "line-numbers-rows", 
t.innerHTML = a, e.hasAttribute("data-start") && (e.style.counterReset = "linenumber " + Number(e.dataset.start) - 1), 
e.appendChild(t);
};
},
162: function(e, t, n) {
"use strict";
(document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop()).setAttribute("data-manual", 1), 
n(87), n(88), n(89), n(90), n(91), n(92), n(94), n(95), n(96), n(101), Prism.tokenTag = "code";
var a = n(163), r = n(165);
function i(e) {
!function(e) {
for (var t = e.querySelectorAll(".code-example:not([data-prism-done])"), n = 0; n < t.length; n++) {
var r = t[n];
new a(r), r.setAttribute("data-prism-done", "1");
}
}(e), function(e) {
for (var t = e.querySelectorAll("div.code-tabs:not([data-prism-done])"), n = 0; n < t.length; n++) new r(t[n]), 
t[n].setAttribute("data-prism-done", "1");
}(e);
}
t.init = function() {
document.removeEventListener("DOMContentLoaded", Prism.highlightAll), document.addEventListener("DOMContentLoaded", function() {
i(document);
});
}, t.highlight = i;
},
163: function(e, t, n) {
"use strict";
var a = n(182), r = n(164), i = n(158);
e.exports = function(e) {
var t = e.querySelector("pre"), n = t.querySelector("code"), s = n.textContent;
Prism.highlightElement(n), i(t), function(e, t) {
if (t) for (var n, a = t.replace(/\s+/g, "").split(","), r = 0; n = a[r++]; ) {
var i = +(n = n.split("-"))[0], s = +n[1] || i, o = '<code class="block-highlight" data-start="' + i + '" data-end="' + s + '">' + new Array(i + 1).join("\n") + '<code class="mask">' + new Array(s - i + 2).join("\n") + "</code></code>";
e.insertAdjacentHTML("afterBegin", o);
}
}(t, e.getAttribute("data-highlight-block")), function(e, t) {
var n = e.querySelector('code[class*="language-"]');
t = t ? t.split(",") : [];
for (var a = 0; a < t.length; a++) {
var r = t[a].split(":"), i = +r[0], s = r[1].split("-"), o = +s[0], l = +s[1], u = '<code class="inline-highlight">' + new Array(i + 1).join("\n") + new Array(o + 1).join(" ") + '<code class="mask">' + new Array(l - o + 1).join(" ") + "</code></code>";
n.insertAdjacentHTML("afterBegin", u);
}
}(t, e.getAttribute("data-highlight-inline"));
var o, l, u, c = t.classList.contains("language-javascript"), d = t.classList.contains("language-markup"), m = +e.getAttribute("data-trusted");
!+e.getAttribute("data-no-strict") && c && (s = "'use strict';\n" + s);
var h = !0;
if (c || d) {
var g = e.querySelector('[data-action="run"]');
g && (g.onclick = function() {
return this.blur(), T(), !1;
});
var p = e.querySelector('[data-action="edit"]');
p && (p.onclick = function() {
return this.blur(), function() {
var e;
if (d) e = b(s); else {
var t = s.replace(/^/gim, "    ");
e = "<!DOCTYPE html>\n<html>\n\n<body>\n  <script>\n" + t + "\n  <\/script>\n</body>\n\n</html>";
}
var n = document.createElement("form");
n.action = "../../plnkr.co/edit/@p=preview", n.method = "POST", n.target = "_blank", 
document.body.appendChild(n);
var a = document.createElement("textarea");
a.name = "files[index.html]", a.value = e, n.appendChild(a);
var r = document.createElement("input");
r.name = "description", r.value = "Fork from " + window.location, n.appendChild(r), 
n.submit(), n.remove();
}(), !1;
}), e.hasAttribute("data-autorun") && ("epub" == window.ebookType && "no-epub" == e.getAttribute("data-autorun") ? e.querySelector("iframe").remove() : setTimeout(T, 100));
}
function E() {
var e = o.contentWindow;
"function" == typeof e.postMessage ? e.postMessage(s, "../../https@lookatcode.com/showjs") : alert("Извините, запуск кода требует более современный браузер");
}
function f() {
if (e.hasAttribute("data-global")) {
l || ((l = document.createElement("iframe")).className = "js-frame", l.style.width = 0, 
l.style.height = 0, l.style.border = "none", l.name = "js-global-frame", document.body.appendChild(l));
let e = document.createElement("form");
e.style.display = "none", e.method = "POST", e.enctype = "multipart/form-data", 
e.action = "../../https@lookatcode.com/showhtml", e.target = "js-global-frame";
var t = document.createElement("textarea");
t.name = "code", t.value = b("<script>\n" + s + "\n<\/script>"), e.appendChild(t), 
l.parentNode.insertBefore(e, l.nextSibling), e.submit(), e.remove();
} else if (m) {
if (e.hasAttribute("data-autorun")) return void function(e) {
var t = document.createElement("script");
t.text = e, document.head.appendChild(t).parentNode.removeChild(t);
}(s);
if (e.hasAttribute("data-domeval")) {
let e = document.createElement("script");
e.text = s, document.head.appendChild(e).parentNode.removeChild(e);
} else try {
window.eval.call(window, s);
} catch (e) {
alert("Error: " + e.message);
}
} else e.hasAttribute("data-refresh") && o && (o.remove(), o = null), o ? E() : ((o = document.createElement("iframe")).className = "js-frame", 
o.src = "../../https@lookatcode.com/showjs", o.style.width = 0, o.style.height = 0, 
o.style.border = "none", o.onload = function() {
E();
}, document.body.appendChild(o));
}
function b(e) {
var t = e.toLowerCase(), n = t.match(/<body\b/i), a = t.match(/<\/body>/i), r = t.match(/<html>/i), i = t.match(/<\/html>/i);
if (t.match(/^\s*<!doctype/)) return e;
var s = e;
return r || (s = "<html>\n" + s), i || (s += "\n</html>"), n || (s = s.replace("<html>", '<html>\n<head>\n  <meta charset="utf-8">\n</head><body>\n')), 
a || (s = s.replace("</html>", "\n</body>\n</html>")), s = "<!DOCTYPE HTML>\n" + s;
}
function T() {
c ? f() : function() {
var t;
if (u && e.hasAttribute("data-refresh") && (u.remove(), u = null), u || (u = e.querySelector(".code-result")), 
u) t = u.querySelector("iframe"); else {
if ((u = document.createElement("div")).className = "code-result code-example__result", 
(t = document.createElement("iframe")).name = "frame-" + Math.random(), t.className = "code-result__iframe", 
"0" === e.getAttribute("data-demo-height")) u.style.display = "none"; else if (e.hasAttribute("data-demo-height")) {
var n = +e.getAttribute("data-demo-height");
t.style.height = n + "px";
}
u.appendChild(t), e.appendChild(u);
}
if (m) {
var i = t.contentDocument || t.contentWindow.document;
i.open(), i.write(b(s)), i.close(), "epub" == window.ebookType && setTimeout(function() {
[].forEach.call(i.querySelectorAll("script"), function(e) {
e.remove();
});
}, 2e3), e.hasAttribute("data-demo-height") || a.iframe(t), h && e.hasAttribute("data-autorun") || r(u) || u.scrollIntoView(!1);
} else {
var o = document.createElement("form");
o.style.display = "none", o.method = "POST", o.enctype = "multipart/form-data", 
o.action = "../../https@lookatcode.com/showhtml", o.target = t.name;
var l = document.createElement("textarea");
l.name = "code", l.value = b(s), o.appendChild(l), t.parentNode.insertBefore(o, t.nextSibling), 
o.submit(), o.remove(), h && e.hasAttribute("data-autorun") || (t.onload = function() {
e.hasAttribute("data-demo-height") || a.iframe(t), r(u) || u.scrollIntoView(!1);
});
}
}(), h = !1;
}
};
},
164: function(e, t, n) {
"use strict";
e.exports = function(e) {
var t = e.getBoundingClientRect(), n = 0;
if (t.top < 0) n = t.bottom; else {
if (!(t.bottom > window.innerHeight)) return !0;
n = window.innerHeight - top;
}
return n > 10;
};
},
165: function(e, t, n) {
"use strict";
var a = n(154), r = n(158);
function i(e) {
window.ebookType || (this.elem = e, this.translateX = 0, this.switchesElem = e.querySelector("[data-code-tabs-switches]"), 
this.switchesElemItems = this.switchesElem.firstElementChild, this.arrowLeft = e.querySelector("[data-code-tabs-left]"), 
this.arrowRight = e.querySelector("[data-code-tabs-right]"), this.arrowLeft.onclick = function(e) {
e.preventDefault(), this.translateX = Math.max(0, this.translateX - this.switchesElem.offsetWidth), 
this.renderTranslate();
}.bind(this), this.arrowRight.onclick = function(e) {
e.preventDefault(), this.translateX = Math.min(this.translateX + this.switchesElem.offsetWidth, this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth), 
this.renderTranslate();
}.bind(this), this.delegate(".code-tabs__switch", "click", this.onSwitchClick));
}
i.prototype.onSwitchClick = function(e) {
e.preventDefault();
for (var t, n = e.delegateTarget.parentNode.children, a = this.elem.querySelector("[data-code-tabs-content]").children, r = 0; r < n.length; r++) {
var i = n[r], s = a[r];
i == e.delegateTarget ? (t = r, s.classList.add("code-tabs__section_current"), i.classList.add("code-tabs__switch_current")) : (s.classList.remove("code-tabs__section_current"), 
i.classList.remove("code-tabs__switch_current"));
}
0 === t ? this.elem.classList.add("code-tabs_result_on") : (this.elem.classList.remove("code-tabs_result_on"), 
this.highlightTab(a[t]));
}, i.prototype.highlightTab = function(e) {
if (!e.highlighted) {
var t = e.querySelector("pre"), n = t.querySelector("code");
Prism.highlightElement(n), r(t), e.highlighted = !0;
}
}, i.prototype.renderTranslate = function() {
this.switchesElemItems.style.transform = "translateX(-" + this.translateX + "px)", 
0 === this.translateX ? this.arrowLeft.setAttribute("disabled", "") : this.arrowLeft.removeAttribute("disabled"), 
this.translateX === this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth ? this.arrowRight.setAttribute("disabled", "") : this.arrowRight.removeAttribute("disabled");
}, a.delegateMixin(i.prototype), e.exports = i;
},
295: function(e, t, n) {
"use strict";
n(467);
var a = n(150), r = n(147), i = n(162), s = n(146);
!function() {
var e = document.querySelector("[data-quiz-question-form]");
e && function(e) {
function t() {
for (var t = e.elements.type.value, n = e.elements.answer, a = [], r = 0; r < n.length; r++) n[r].checked && a.push(+n[r].value);
return "single" == t && (a = a[0]), a;
}
e.onchange = function() {
var n = t();
switch (e.elements.type.value) {
case "single":
e.querySelector('[type="submit"]').disabled = void 0 === n;
break;

case "multi":
e.querySelector('[type="submit"]').disabled = !n.length;
break;

default:
throw new Error("unknown type");
}
}, e.onsubmit = function(n) {
n.preventDefault();
var s = t(), o = r({
method: "POST",
url: e.action,
body: {
answer: s
}
}), l = e.querySelector('[type="submit"]'), u = new a({
elem: l,
size: "small",
elemClass: "button_loading"
});
function c() {
u.stop(), l.disabled = !1;
}
u.start(), l.disabled = !0, o.addEventListener("fail", c), o.addEventListener("success", t => {
t.result.reload ? window.location.reload() : t.result.html ? (c(), document.querySelector(".quiz-timeline .quiz-timeline__number_current").classList.remove("quiz-timeline__number_current"), 
document.querySelectorAll(".quiz-timeline span")[t.result.questionNumber].classList.add("quiz-timeline__number_current"), 
document.querySelector(".quiz-tablet-timeline__num").innerHTML = "&nbsp;" + (t.result.questionNumber + 1) + "&nbsp;", 
e.innerHTML = t.result.html, i.highlight(e)) : c();
});
};
}(e);
var t = document.querySelector("[data-quiz-result-save-form]");
t && function(e) {
function t() {
var t = r({
method: "POST",
url: e.action
}), n = e.querySelector('[type="submit"]'), i = new a({
elem: n,
size: "small",
elemClass: "button_loading"
});
i.start(), n.disabled = !0, t.addEventListener("loadend", function() {
i.stop(), n.disabled = !1;
}), t.addEventListener("success", e => {
new s.Success(`Результат сохранён в профиле! <a href='/profile/${window.currentUser.profileName}/quiz'>Перейти в профиль</a>.`, "slow");
});
}
e.onsubmit = function(r) {
var i, s;
r.preventDefault(), window.currentUser ? t() : (i = e.querySelector('[type="submit"]'), 
(s = new a({
elem: i,
size: "small",
class: "submit-button__spinner",
elemClass: "submit-button_progress"
})).start(), n.e(2).then(function() {
s.stop();
var e = n(156);
new e({
callback: t
});
}.bind(null, n)).catch(n.oe));
};
}(t), i.init();
}();
},
467: function(e, t) {},
87: function(e, t) {
var n = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}, a = function() {
var e = /\blang(?:uage)?-([\w-]+)\b/i, t = 0, a = n.Prism = {
manual: n.Prism && n.Prism.manual,
disableWorkerMessageHandler: n.Prism && n.Prism.disableWorkerMessageHandler,
util: {
encode: function(e) {
return e instanceof r ? new r(e.type, a.util.encode(e.content), e.alias) : "Array" === a.util.type(e) ? e.map(a.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
},
type: function(e) {
return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
},
objId: function(e) {
return e.__id || Object.defineProperty(e, "__id", {
value: ++t
}), e.__id;
},
clone: function(e, t) {
var n = a.util.type(e);
switch (t = t || {}, n) {
case "Object":
if (t[a.util.objId(e)]) return t[a.util.objId(e)];
var r = {};
for (var i in t[a.util.objId(e)] = r, e) e.hasOwnProperty(i) && (r[i] = a.util.clone(e[i], t));
return r;

case "Array":
if (t[a.util.objId(e)]) return t[a.util.objId(e)];
r = [];
return t[a.util.objId(e)] = r, e.forEach(function(e, n) {
r[n] = a.util.clone(e, t);
}), r;
}
return e;
}
},
languages: {
extend: function(e, t) {
var n = a.util.clone(a.languages[e]);
for (var r in t) n[r] = t[r];
return n;
},
insertBefore: function(e, t, n, r) {
var i = (r = r || a.languages)[e];
if (2 == arguments.length) {
for (var s in n = arguments[1]) n.hasOwnProperty(s) && (i[s] = n[s]);
return i;
}
var o = {};
for (var l in i) if (i.hasOwnProperty(l)) {
if (l == t) for (var s in n) n.hasOwnProperty(s) && (o[s] = n[s]);
o[l] = i[l];
}
return a.languages.DFS(a.languages, function(t, n) {
n === r[e] && t != e && (this[t] = o);
}), r[e] = o;
},
DFS: function(e, t, n, r) {
for (var i in r = r || {}, e) e.hasOwnProperty(i) && (t.call(e, i, e[i], n || i), 
"Object" !== a.util.type(e[i]) || r[a.util.objId(e[i])] ? "Array" !== a.util.type(e[i]) || r[a.util.objId(e[i])] || (r[a.util.objId(e[i])] = !0, 
a.languages.DFS(e[i], t, i, r)) : (r[a.util.objId(e[i])] = !0, a.languages.DFS(e[i], t, null, r)));
}
},
plugins: {},
highlightAll: function(e, t) {
a.highlightAllUnder(document, e, t);
},
highlightAllUnder: function(e, t, n) {
var r = {
callback: n,
selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
};
a.hooks.run("before-highlightall", r);
for (var i, s = r.elements || e.querySelectorAll(r.selector), o = 0; i = s[o++]; ) a.highlightElement(i, !0 === t, r.callback);
},
highlightElement: function(t, r, i) {
for (var s, o, l = t; l && !e.test(l.className); ) l = l.parentNode;
l && (s = (l.className.match(e) || [ , "" ])[1].toLowerCase(), o = a.languages[s]), 
t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + s, 
t.parentNode && (l = t.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(e, "").replace(/\s+/g, " ") + " language-" + s));
var u = {
element: t,
language: s,
grammar: o,
code: t.textContent
};
if (a.hooks.run("before-sanity-check", u), !u.code || !u.grammar) return u.code && (a.hooks.run("before-highlight", u), 
u.element.textContent = u.code, a.hooks.run("after-highlight", u)), void a.hooks.run("complete", u);
if (a.hooks.run("before-highlight", u), r && n.Worker) {
var c = new Worker(a.filename);
c.onmessage = function(e) {
u.highlightedCode = e.data, a.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, 
i && i.call(u.element), a.hooks.run("after-highlight", u), a.hooks.run("complete", u);
}, c.postMessage(JSON.stringify({
language: u.language,
code: u.code,
immediateClose: !0
}));
} else u.highlightedCode = a.highlight(u.code, u.grammar, u.language), a.hooks.run("before-insert", u), 
u.element.innerHTML = u.highlightedCode, i && i.call(t), a.hooks.run("after-highlight", u), 
a.hooks.run("complete", u);
},
highlight: function(e, t, n) {
var i = {
code: e,
grammar: t,
language: n
};
return a.hooks.run("before-tokenize", i), i.tokens = a.tokenize(i.code, i.grammar), 
a.hooks.run("after-tokenize", i), r.stringify(a.util.encode(i.tokens), i.language);
},
matchGrammar: function(e, t, n, r, i, s, o) {
var l = a.Token;
for (var u in n) if (n.hasOwnProperty(u) && n[u]) {
if (u == o) return;
var c = n[u];
c = "Array" === a.util.type(c) ? c : [ c ];
for (var d = 0; d < c.length; ++d) {
var m = c[d], h = m.inside, g = !!m.lookbehind, p = !!m.greedy, E = 0, f = m.alias;
if (p && !m.pattern.global) {
var b = m.pattern.toString().match(/[imuy]*$/)[0];
m.pattern = RegExp(m.pattern.source, b + "g");
}
m = m.pattern || m;
for (var T = r, A = i; T < t.length; A += t[T].length, ++T) {
var S = t[T];
if (t.length > e.length) return;
if (!(S instanceof l)) {
if (p && T != t.length - 1) {
if (m.lastIndex = A, !(O = m.exec(e))) break;
for (var v = O.index + (g ? O[1].length : 0), N = O.index + O[0].length, I = T, y = A, L = t.length; I < L && (y < N || !t[I].type && !t[I - 1].greedy); ++I) v >= (y += t[I].length) && (++T, 
A = y);
if (t[T] instanceof l) continue;
w = I - T, S = e.slice(A, y), O.index -= A;
} else {
m.lastIndex = 0;
var O = m.exec(S), w = 1;
}
if (O) {
g && (E = O[1] ? O[1].length : 0);
N = (v = O.index + E) + (O = O[0].slice(E)).length;
var R = S.slice(0, v), P = S.slice(N), C = [ T, w ];
R && (++T, A += R.length, C.push(R));
var k = new l(u, h ? a.tokenize(O, h) : O, f, O, p);
if (C.push(k), P && C.push(P), Array.prototype.splice.apply(t, C), 1 != w && a.matchGrammar(e, t, n, T, A, !0, u), 
s) break;
} else if (s) break;
}
}
}
}
},
tokenize: function(e, t, n) {
var r = [ e ], i = t.rest;
if (i) {
for (var s in i) t[s] = i[s];
delete t.rest;
}
return a.matchGrammar(e, r, t, 0, 0, !1), r;
},
hooks: {
all: {},
add: function(e, t) {
var n = a.hooks.all;
n[e] = n[e] || [], n[e].push(t);
},
run: function(e, t) {
var n = a.hooks.all[e];
if (n && n.length) for (var r, i = 0; r = n[i++]; ) r(t);
}
}
}, r = a.Token = function(e, t, n, a, r) {
this.type = e, this.content = t, this.alias = n, this.length = 0 | (a || "").length, 
this.greedy = !!r;
};
if (r.stringify = function(e, t, n) {
if ("string" == typeof e) return e;
if ("Array" === a.util.type(e)) return e.map(function(n) {
return r.stringify(n, t, e);
}).join("");
var i = {
type: e.type,
content: r.stringify(e.content, t, n),
tag: "span",
classes: [ "token", e.type ],
attributes: {},
language: t,
parent: n
};
if (e.alias) {
var s = "Array" === a.util.type(e.alias) ? e.alias : [ e.alias ];
Array.prototype.push.apply(i.classes, s);
}
a.hooks.run("wrap", i);
var o = Object.keys(i.attributes).map(function(e) {
return e + '="' + (i.attributes[e] || "").replace(/"/g, "&quot;") + '"';
}).join(" ");
return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + (o ? " " + o : "") + ">" + i.content + "</" + i.tag + ">";
}, !n.document) return n.addEventListener ? (a.disableWorkerMessageHandler || n.addEventListener("message", function(e) {
var t = JSON.parse(e.data), r = t.language, i = t.code, s = t.immediateClose;
n.postMessage(a.highlight(i, a.languages[r], r)), s && n.close();
}, !1), n.Prism) : n.Prism;
var i = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
return i && (a.filename = i.src, a.manual || i.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(a.highlightAll) : window.setTimeout(a.highlightAll, 16) : document.addEventListener("DOMContentLoaded", a.highlightAll))), 
n.Prism;
}();
void 0 !== e && e.exports && (e.exports = a), "undefined" != typeof global && (global.Prism = a);
},
88: function(e, t) {
Prism.languages.markup = {
comment: /<!--[\s\S]*?-->/,
prolog: /<\?[\s\S]+?\?>/,
doctype: /<!DOCTYPE[\s\S]+?>/i,
cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
tag: {
pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
greedy: !0,
inside: {
tag: {
pattern: /^<\/?[^\s>\/]+/i,
inside: {
punctuation: /^<\/?/,
namespace: /^[^\s>\/:]+:/
}
},
"attr-value": {
pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
inside: {
punctuation: [ /^=/, {
pattern: /(^|[^\\])["']/,
lookbehind: !0
} ]
}
},
punctuation: /\/?>/,
"attr-name": {
pattern: /[^\s>\/]+/,
inside: {
namespace: /^[^\s>\/:]+:/
}
}
}
},
entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, 
Prism.hooks.add("wrap", function(e) {
"entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, 
Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
},
89: function(e, t) {
Prism.languages.css = {
comment: /\/\*[\s\S]*?\*\//,
atrule: {
pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
inside: {
rule: /@[\w-]+/
}
},
url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
selector: /[^{}\s][^{};]*?(?=\s*\{)/,
string: {
pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
greedy: !0
},
property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
important: /\B!important\b/i,
function: /[-a-z0-9]+(?=\()/i,
punctuation: /[(){};:]/
}, Prism.languages.css.atrule.inside.rest = Prism.languages.css, Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
style: {
pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
lookbehind: !0,
inside: Prism.languages.css,
alias: "language-css",
greedy: !0
}
}), Prism.languages.insertBefore("inside", "attr-value", {
"style-attr": {
pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
inside: {
"attr-name": {
pattern: /^\s*style/i,
inside: Prism.languages.markup.tag.inside
},
punctuation: /^\s*=\s*['"]|['"]\s*$/,
"attr-value": {
pattern: /.+/i,
inside: Prism.languages.css
}
},
alias: "language-css"
}
}, Prism.languages.markup.tag));
},
90: function(e, t) {
Prism.languages.css.selector = {
pattern: /[^{}\s][^{}]*(?=\s*\{)/,
inside: {
"pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
"pseudo-class": /:[-\w]+(?:\(.*\))?/,
class: /\.[-:.\w]+/,
id: /#[-:.\w]+/,
attribute: /\[[^\]]+\]/
}
}, Prism.languages.insertBefore("css", "function", {
hexcode: /#[\da-f]{3,8}/i,
entity: /\\[\da-f]{1,8}/i,
number: /[\d%.]+/
});
},
91: function(e, t) {
Prism.languages.clike = {
comment: [ {
pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
lookbehind: !0
}, {
pattern: /(^|[^\\:])\/\/.*/,
lookbehind: !0,
greedy: !0
} ],
string: {
pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
greedy: !0
},
"class-name": {
pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
lookbehind: !0,
inside: {
punctuation: /[.\\]/
}
},
keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
boolean: /\b(?:true|false)\b/,
function: /[a-z0-9_]+(?=\()/i,
number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
punctuation: /[{}[\];(),.:]/
};
},
92: function(e, t) {
Prism.languages.javascript = Prism.languages.extend("clike", {
keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), Prism.languages.insertBefore("javascript", "keyword", {
regex: {
pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
lookbehind: !0,
greedy: !0
},
"function-variable": {
pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
alias: "function"
},
constant: /\b[A-Z][A-Z\d_]*\b/
}), Prism.languages.insertBefore("javascript", "string", {
"template-string": {
pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
greedy: !0,
inside: {
interpolation: {
pattern: /\${[^}]+}/,
inside: {
"interpolation-punctuation": {
pattern: /^\${|}$/,
alias: "punctuation"
},
rest: null
}
},
string: /[\s\S]+/
}
}
}), Prism.languages.javascript["template-string"].inside.interpolation.inside.rest = Prism.languages.javascript, 
Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
script: {
pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
lookbehind: !0,
inside: Prism.languages.javascript,
alias: "language-javascript",
greedy: !0
}
}), Prism.languages.js = Prism.languages.javascript;
},
94: function(e, t) {
Prism.languages.http = {
"request-line": {
pattern: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,
inside: {
property: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
"attr-name": /:\w+/
}
},
"response-status": {
pattern: /^HTTP\/1.[01] \d+.*/m,
inside: {
property: {
pattern: /(^HTTP\/1.[01] )\d+.*/i,
lookbehind: !0
}
}
},
"header-name": {
pattern: /^[\w-]+:(?=.)/m,
alias: "keyword"
}
};
var n = {
"application/json": Prism.languages.javascript,
"application/xml": Prism.languages.markup,
"text/xml": Prism.languages.markup,
"text/html": Prism.languages.markup
};
for (var a in n) if (n[a]) {
var r = {};
r[a] = {
pattern: new RegExp("(content-type:\\s*" + a + "[\\w\\W]*?)(?:\\r?\\n|\\r){2}[\\w\\W]*", "i"),
lookbehind: !0,
inside: {
rest: n[a]
}
}, Prism.languages.insertBefore("http", "header-name", r);
}
},
95: function(e, t) {
Prism.languages.scss = Prism.languages.extend("css", {
comment: {
pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
lookbehind: !0
},
atrule: {
pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
inside: {
rule: /@[\w-]+/
}
},
url: /(?:[-a-z]+-)*url(?=\()/i,
selector: {
pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
inside: {
parent: {
pattern: /&/,
alias: "important"
},
placeholder: /%[-\w]+/,
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}
}
}), Prism.languages.insertBefore("scss", "atrule", {
keyword: [ /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
pattern: /( +)(?:from|through)(?= )/,
lookbehind: !0
} ]
}), Prism.languages.scss.property = {
pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,
inside: {
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}
}, Prism.languages.insertBefore("scss", "important", {
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}), Prism.languages.insertBefore("scss", "function", {
placeholder: {
pattern: /%[-\w]+/,
alias: "selector"
},
statement: {
pattern: /\B!(?:default|optional)\b/i,
alias: "keyword"
},
boolean: /\b(?:true|false)\b/,
null: /\bnull\b/,
operator: {
pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
lookbehind: !0
}
}), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
},
96: function(e, t) {
Prism.languages.sql = {
comment: {
pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
lookbehind: !0
},
string: {
pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\])*\2/,
greedy: !0,
lookbehind: !0
},
variable: /@[\w.$]+|@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
punctuation: /[;[\]()`,.]/
};
}
}, [ 295 ]);