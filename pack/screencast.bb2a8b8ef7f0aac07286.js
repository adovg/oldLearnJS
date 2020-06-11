var screencast = webpackJsonp_name_([ 27 ], {
147: function(e, t, n) {
"use strict";
var r = n(146), i = n(148);
const s = n(143).lang, a = n(144);
a.requirePhrase("site", n(1)("./" + s + ".yml")), document.addEventListener("xhrfail", function(e) {
new r.Error(e.reason);
}), e.exports = function(e) {
var t = new XMLHttpRequest(), n = e.method || "GET", r = e.body, s = e.url;
t.open(n, s, !e.sync), t.method = n;
var o = i();
o && !e.skipCsrf && t.setRequestHeader("X-XSRF-TOKEN", o), "[object Object]" == {}.toString.call(r) && (t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
r = JSON.stringify(r)), e.noDocumentEvents || (t.addEventListener("loadstart", e => {
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
var u, l, c = e.normalStatuses || [ 200 ];
function d(e, t) {
var n = new CustomEvent(e);
return n.originalEvent = t, n;
}
function m(e, n) {
var r = d("fail", n);
r.reason = e, t.dispatchEvent(r);
}
return t.addEventListener("error", e => {
m(a("site.errors.server_connection_error"), e);
}), t.addEventListener("timeout", e => {
m(a("site.errors.server_request_timeout"), e);
}), t.addEventListener("abort", e => {
m(a("site.errors.request_aborted"), e);
}), t.addEventListener("load", n => {
if (t.status) if (-1 != c.indexOf(t.status)) {
var r = t.responseText;
if ((t.getResponseHeader("Content-Type") || "").match(/^application\/json/) || e.json) try {
r = JSON.parse(r);
} catch (n) {
return void m(a("site.errors.invalid_format"), n);
}
r = r, (n = d("success", n)).result = r, t.dispatchEvent(n);
} else m(a("site.errors.server_error", {
status: t.status
}), n); else m(a("site.errors.no_response"), n);
}), setTimeout(function() {
t.send(r);
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
149: function(e, t, n) {
"use strict";
function r(e) {
return null != e && "" !== e;
}
function i(e) {
return (Array.isArray(e) ? e.map(i) : e && "object" == typeof e ? Object.keys(e).filter(function(t) {
return e[t];
}) : [ e ]).filter(r).join(" ");
}
t.merge = function e(t, n) {
if (1 === arguments.length) {
for (var i = t[0], s = 1; s < t.length; s++) i = e(i, t[s]);
return i;
}
var a = t.class, o = n.class;
for (var u in (a || o) && (a = a || [], o = o || [], Array.isArray(a) || (a = [ a ]), 
Array.isArray(o) || (o = [ o ]), t.class = a.concat(o).filter(r)), n) "class" != u && (t[u] = n[u]);
return t;
}, t.joinClasses = i, t.cls = function(e, n) {
for (var r = [], s = 0; s < e.length; s++) n && n[s] ? r.push(t.escape(i([ e[s] ]))) : r.push(i(e[s]));
var a = i(r);
return a.length ? ' class="' + a + '"' : "";
}, t.style = function(e) {
return e && "object" == typeof e ? Object.keys(e).map(function(t) {
return t + ":" + e[t];
}).join(";") : e;
}, t.attr = function(e, n, r, i) {
return "style" === e && (n = t.style(n)), "boolean" == typeof n || null == n ? n ? " " + (i ? e : e + '="' + e + '"') : "" : 0 == e.indexOf("data") && "string" != typeof n ? (JSON.stringify(n).indexOf("&"), 
n && n.toISOString, " " + e + "='" + JSON.stringify(n).replace(/'/g, "&apos;") + "'") : r ? (n && n.toISOString, 
" " + e + '="' + t.escape(n) + '"') : (n && n.toISOString, " " + e + '="' + n + '"');
}, t.attrs = function(e, n) {
var r = [], s = Object.keys(e);
if (s.length) for (var a = 0; a < s.length; ++a) {
var o = s[a], u = e[o];
"class" == o ? (u = i(u)) && r.push(" " + o + '="' + u + '"') : r.push(t.attr(o, u, !1, n));
}
return r.join("");
};
var s = {
"&": "&amp;",
"<": "&lt;",
">": "&gt;",
'"': "&quot;"
}, a = /[&<>"]/g;
function o(e) {
return s[e] || e;
}
t.escape = function(e) {
var t = String(e).replace(a, o);
return t === "" + e ? e : t;
}, t.rethrow = function e(t, r, i, s) {
if (!(t instanceof Error)) throw t;
if (!("undefined" == typeof window && r || s)) throw t.message += " on line " + i, 
t;
try {
s = s || n(77).readFileSync(r, "utf8");
} catch (n) {
e(t, null, i);
}
var a = 3, o = s.split("\n"), u = Math.max(i - a, 0), l = Math.min(o.length, i + a);
a = o.slice(u, l).map(function(e, t) {
var n = t + u + 1;
return (n == i ? "  > " : "    ") + n + "| " + e;
}).join("\n");
throw t.path = r, t.message = (r || "Jade") + ":" + i + "\n" + a + "\n\n" + t.message, 
t;
}, t.DebugItem = function(e, t) {
this.lineno = e, this.filename = t;
};
},
151: function(e, t, n) {
"use strict";
t.thumb = function(e, t, n) {
if (!e) return e;
var r = window.devicePixelRatio;
n *= r;
var i = (t *= r) <= 160 && n <= 160 ? "t" : t <= 320 && n <= 320 ? "m" : t <= 640 && n <= 640 ? "i" : t <= 1024 && n <= 1024 ? "h" : "";
return e.slice(0, e.lastIndexOf(".")) + i + e.slice(e.lastIndexOf("."));
};
},
152: function(e, t, n) {
"use strict";
const r = n(153)(), i = n(151).thumb, s = n(143).lang, a = n(144);
e.exports = function(e, t) {
return function(e) {
e.bem = r, e.t = a, e.thumb = i, e.lang = s;
}(t = t ? Object.create(t) : {}), e(t);
};
},
153: function(e, t, n) {
"use strict";
var r = n(149);
e.exports = function(e) {
return (e = e || {}).prefix = e.prefix || "", e.element = e.element || "__", e.modifier = e.modifier || "_", 
function(t, n, i, s) {
var a = this.block, o = this.attributes || {};
if (!o.class && i && !s) throw new Error("Block without class: " + i);
if (o.class) {
var u, l = o.class;
l instanceof Array && (l = l.join(" ")), l = l.split(" ");
try {
u = l[0].match(new RegExp("^(((?!" + e.element + "|" + e.modifier + ").)+)"))[1];
} catch (e) {
throw new Error("Incorrect bem class: " + l[0]);
}
s ? l[0] = n[n.length - 1] + e.element + l[0] : n[n.length] = u;
var c = (s ? n[n.length - 1] + e.element : "") + u;
-1 === l.indexOf(c) && (l[l.length] = c);
for (var d = 0; d < l.length; d++) {
var m = l[d];
m.match(new RegExp("^(?!" + e.element + ")" + e.modifier)) ? l[d] = c + m : m.match(new RegExp("^" + e.element)) && (n[n.length - 2] ? l[d] = n[n.length - 2] + m : l[d] = n[n.length - 1] + m), 
l[d].match(new RegExp("^" + c + "($|(?=" + e.element + "|" + e.modifier + "))")) && (l[d] = e.prefix + l[d]);
}
o.class = l.sort().join(" ");
}
!function(e, t, n, i, s) {
var a = s || "div";
switch (a) {
case "img":
n.alt && !n.title && (n.title = ""), n.title && !n.alt && (n.alt = n.title), n.alt || (n.alt = "");
break;

case "input":
n.type || (n.type = "text");
break;

case "html":
e.push("<!DOCTYPE HTML>");
break;

case "a":
n.href || (n.href = "#");
}
e.push("<" + a + r.attrs(r.merge([ n ]), !0) + ">"), t && t();
-1 == [ "area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr" ].indexOf(a) && e.push("</" + a + ">");
}(t, a, o, 0, i), s || n.pop();
};
};
},
166: function(e, t, n) {
"use strict";
var r = n(150), i = n(147), s = n(146), a = n(167);
const o = n(144), u = n(143).lang;
function l(e, t) {
if (!e.elements.email.value) return;
var n = e.elements.slug, a = [];
if (n.length) for (var u = 0; u < n.length; u++) {
var l = n[u];
l.checked && a.push(l.value);
} else a.push(n.value);
if (!a.length) return void new s.Error(o("newsletter.client.choose_newsletter"));
var c = {
email: e.elements.email.value,
slug: a
};
const d = i({
method: "POST",
url: e.action,
body: c
});
var m = e.querySelector('[type="submit"]'), f = new r({
elem: m,
size: "small",
elemClass: "button_loading"
});
f.start(), m.disabled = !0, d.addEventListener("loadend", () => {
f.stop(), m.disabled = !1;
});
var h = e.getAttribute("data-newsletter-subscribe-form");
d.addEventListener("success", function(n) {
200 == this.status ? (h && (window.metrika.reachGoal("NEWSLETTER-SUBSCRIBE", {
form: h
}), window.ga("send", "event", "newsletter", "subscribe", h)), new s.Success(n.result.message, "slow"), 
e.elements.email.value = "", t && t()) : (window.metrika.reachGoal("NEWSLETTER-SUBSCRIBE-FAIL", {
form: h
}), window.ga("send", "event", "newsletter", "subscribe-fail", h), new s.Error(n.result.message));
});
}
o.requirePhrase("newsletter.client", n(4)("./" + u + ".yml")), t.initNewsletterForm = function() {
var e = document.querySelector("[data-newsletter-subscribe-form]");
e && (e.onsubmit = function(t) {
t.preventDefault(), l(e);
});
}, t.initNewsletterLink = function() {
var e = document.querySelector("[data-newsletter-subscribe-link]");
e && (e.onclick = function(t) {
t.preventDefault();
let n = prompt(o("newsletter.client.email_please"), window.currentUser && window.currentUser.email || "");
n && i({
method: "POST",
url: "../newsletter/subscribe",
body: {
slug: e.dataset.slug,
email: n
}
}).addEventListener("success", function(e) {
200 == this.status ? new s.Success(e.result.message, "slow") : new s.Error(e.result.message);
});
});
}, t.submitSubscribeForm = l, t.initEnSubscribeButton = function(e) {
e.addEventListener("click", () => new a({
onSubmit: l
}));
};
},
167: function(e, t, n) {
"use strict";
var r = n(155), i = n(152), s = n(929);
e.exports = class extends r {
constructor(e) {
super(e), this.options = e || {}, this.options.inModal = !0;
var t = document.createElement("div");
t.innerHTML = i(s, this.options), this.setContent(t), this.elem.querySelector('[type="email"]').focus(), 
this.elem.querySelector("form").addEventListener("submit", this.onFormSubmit.bind(this));
}
onFormSubmit(e) {
e.preventDefault(), this.options.onSubmit(e.target, this.remove.bind(this));
}
};
},
323: function(e, t, n) {
"use strict";
n(469);
var r, i = n(155), s = (n(152), n(166));
n(325);
function a(e) {
for (var t = [ {
width: 0,
height: 0
}, {
width: 640,
height: 360
}, {
width: 853,
height: 480
}, {
width: 1280,
height: 720
} ], n = 0; n < t.length && !(document.documentElement.clientHeight < t[n].height || document.documentElement.clientWidth < t[n].width); n++) ;
var s = t[--n].width, a = t[n].height;
if (0 === n) window.location.href = "//www.youtube.com/watch?v=" + e; else {
var u = new i();
if (u.setContent('<div id="player"></div>'), u.elem.addEventListener("modal-remove", function() {
r && (r.destroy(), r = null);
}), window.YT) o(e, s, a); else {
var l = document.createElement("script");
l.src = "https://www.youtube.com/iframe_api", document.head.appendChild(l), window.onYouTubeIframeAPIReady = function() {
o(e, s, a), delete window.onYouTubeIframeAPIReady;
};
}
}
}
function o(e, t, n) {
r && r.destroy(), r = new window.YT.Player("player", {
height: n,
width: t,
videoId: e,
playerVars: {
rel: 0
},
events: {
onReady: function() {
r.playVideo();
},
onStateChange: function(i) {
document.querySelectorAll("[data-video-id]");
if (1 == i.data && (r.videoId = e), 0 == i.data) for (var s = document.querySelectorAll("[data-video-id]"), a = 0; a < s.length; a++) {
if (s[a].getAttribute("data-video-id") == r.videoId) {
let e = s[a + 1] && s[a + 1].getAttribute("data-video-id");
e && (s[a + 1].parentNode.dataset.mnemo && (window.location.hash = s[a + 1].parentNode.dataset.mnemo), 
o(e, t, n));
break;
}
}
}
}
});
}
!function() {
!function() {
document.querySelectorAll("li[data-mnemo]");
for (var e = document.querySelectorAll("a[data-video-id]"), t = 0; t < e.length; t++) {
var n = e[t];
n.href = "//www.youtube.com/watch?v=" + n.getAttribute("data-video-id"), n.onclick = function(e) {
e.preventDefault();
var t = this.getAttribute("data-video-id"), n = this.parentNode.dataset.mnemo;
window.ga("send", "event", window.SCREENCAST_SLUG, "open", n), window.location.hash = n, 
a(t);
};
}
}(), e = document.querySelector("[data-newsletter-subscribe-form]"), e && (e.onsubmit = function(t) {
t.preventDefault(), s.submitSubscribeForm(e);
});
var e;
let t = window.location.hash;
if (!t) return;
t && (t = t.slice(1));
let n = document.querySelector(`[data-mnemo="${t}"]`);
n && (n.scrollIntoView(), window.ga("send", "event", window.SCREENCAST_SLUG, "open", t), 
a(n.firstElementChild.dataset.videoId));
}();
},
325: function(e, t, n) {
"use strict";
e.exports = function(e) {
function t() {
t.wasCalled || (t.wasCalled = !0, e());
}
return setTimeout(t, 500), t;
};
},
4: function(e, t, n) {
var r = {
"en.yml": 931,
"ru.yml": 932
};
function i(e) {
return n(s(e));
}
function s(e) {
var t = r[e];
if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
return t;
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = s, e.exports = i, i.id = 4;
},
469: function(e, t) {},
77: function(e, t) {},
929: function(e, t, n) {
var r = n(149);
e.exports = function(e) {
var t = [], n = {}, i = e || {};
return function(e, i) {
t.push(""), i || (i = []), n.b = function(n, r, s) {
this && this.block, this && this.attributes;
e.call(this, t, i, n, r, s);
}, n.e = function(e) {
var t = this && this.block, i = this && this.attributes || {};
n.b.call({
block: function() {
t && t();
},
attributes: r.merge([ i ])
}, e, !0);
}, n.b.call({
block: function() {
n.e.call({
block: function() {
t.push("Tell me about major updates");
},
attributes: {
class: "header"
}
}, "h3"), n.e.call({
block: function() {
t.push("We are working on new articles and tutorials. Provide an email to learn about major updates when they happen:");
},
attributes: {
class: "description"
}
}), n.e.call({
block: function() {
n.e.call({
attributes: {
type: "email",
name: "email",
placeholder: "Your email",
required: !0,
class: "input"
}
}, "input"), t.push('<input type="hidden" name="slug" value="javascript-info-updates">'), 
n.e.call({
block: function() {
n.e.call({
block: function() {
t.push("Notify me");
},
attributes: {
class: "text"
}
}, "span");
},
attributes: {
type: "submit",
name: "type",
class: "button button"
}
}, "button");
},
attributes: {
method: "POST",
action: "../newsletter/subscribe",
class: "subscribe-form"
}
}, "form");
},
attributes: {
class: "en-subscribe-form"
}
});
}.call(this, "bem" in i ? i.bem : "undefined" != typeof bem ? bem : void 0, "bem_chain" in i ? i.bem_chain : "undefined" != typeof bem_chain ? bem_chain : void 0), 
t.join("");
};
},
931: function(e, t) {
e.exports = {
choose_newsletter: "Choose newsletters in the list.",
email_please: "Your e-mail?"
};
},
932: function(e, t) {
e.exports = {
choose_newsletter: "Выберите рассылки из списка.",
email_please: "Ваш e-mail?"
};
}
}, [ 323 ]);