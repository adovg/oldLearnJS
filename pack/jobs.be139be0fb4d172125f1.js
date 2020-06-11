var jobs = webpackJsonp_name_([ 23 ], {
147: function(e, t, n) {
"use strict";
var s = n(146), r = n(148);
const a = n(143).lang, o = n(144);
o.requirePhrase("site", n(1)("./" + a + ".yml")), document.addEventListener("xhrfail", function(e) {
new s.Error(e.reason);
}), e.exports = function(e) {
var t = new XMLHttpRequest(), n = e.method || "GET", s = e.body, a = e.url;
t.open(n, a, !e.sync), t.method = n;
var i = r();
i && !e.skipCsrf && t.setRequestHeader("X-XSRF-TOKEN", i), "[object Object]" == {}.toString.call(s) && (t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
s = JSON.stringify(s)), e.noDocumentEvents || (t.addEventListener("loadstart", e => {
t.timeStart = Date.now();
var n = l("xhrstart", e);
document.dispatchEvent(n);
}), t.addEventListener("loadend", e => {
var t = l("xhrend", e);
document.dispatchEvent(t);
}), t.addEventListener("success", e => {
var t = l("xhrsuccess", e);
t.result = e.result, document.dispatchEvent(t);
}), t.addEventListener("fail", e => {
var t = l("xhrfail", e);
t.reason = e.reason, document.dispatchEvent(t);
})), e.raw || t.setRequestHeader("Accept", "application/json"), t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
var c, u, d = e.normalStatuses || [ 200 ];
function l(e, t) {
var n = new CustomEvent(e);
return n.originalEvent = t, n;
}
function v(e, n) {
var s = l("fail", n);
s.reason = e, t.dispatchEvent(s);
}
return t.addEventListener("error", e => {
v(o("site.errors.server_connection_error"), e);
}), t.addEventListener("timeout", e => {
v(o("site.errors.server_request_timeout"), e);
}), t.addEventListener("abort", e => {
v(o("site.errors.request_aborted"), e);
}), t.addEventListener("load", n => {
if (t.status) if (-1 != d.indexOf(t.status)) {
var s = t.responseText;
if ((t.getResponseHeader("Content-Type") || "").match(/^application\/json/) || e.json) try {
s = JSON.parse(s);
} catch (n) {
return void v(o("site.errors.invalid_format"), n);
}
s = s, (n = l("success", n)).result = s, t.dispatchEvent(n);
} else v(o("site.errors.server_error", {
status: t.status
}), n); else v(o("site.errors.no_response"), n);
}), setTimeout(function() {
t.send(s);
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
178: function(e, t, n) {
"use strict";
const s = n(150);
function r({elem: e, callback: t}) {
if (window.currentUser) return void t();
const r = new s({
elem: e,
size: "small",
class: "submit-button__spinner",
elemClass: "submit-button_progress"
});
r.start(), n.e(2).then(function() {
r.stop(), new (n(156))({
callback: t
});
}.bind(null, n)).catch(n.oe);
}
document.addEventListener("click", function(e) {
let t = e.target;
(t = t.closest("[data-signup-link][href]")) && (e.preventDefault(), r({
elem: t,
callback: () => window.location.href = t.href
}));
}), t.signupLink = r;
},
326: function(e, t, n) {
"use strict";
n(462), n(178), n(483)(), function() {
const e = document.getElementById("jobs-search");
function t(e) {
const t = [ location.protocol, "//", location.host, location.pathname ].join(""), n = document.location.search.substr(1).split("&").reduce((e, t) => {
if (t) {
const [n, s] = t.split("=");
e[n] = s;
}
return e;
}, {});
Object.assign(n, e);
const s = Object.keys(n).map(e => e + "=" + n[e]).join("&");
window.location = t + "?" + s;
}
e && e.addEventListener("change", n => {
const s = {};
switch (n.target.name) {
case "paidOnly":
s.paidOnly = e.paidOnly.checked ? "1" : "0";
break;

case "salary":
s.salary = e.salary.value, s.rateType = e.rateType.value, s.rateCurrency = e.rateCurrency.value;
break;

case "rateType":
case "rateCurrency":
break;

default:
s[n.target.name] = e[n.target.name].value;
}
t(s);
});
}();
},
462: function(e, t) {},
483: function(e, t, n) {
"use strict";
const s = n(147);
e.exports = function() {
const e = [ "js-remove-job", "js-moderate-job", "js-hide-job" ];
document.addEventListener("click", function(t) {
const n = t.target;
if (!n || !e.some(e => n.classList.contains(e))) return;
if (t.preventDefault(), n.classList.contains("js-remove-job") && !confirm("Вы действительно хотите удалить стажировку?")) return;
let r;
if (n.classList.contains("js-moderate-job")) {
let e;
if (!n.dataset.deny || (e = prompt("Причина отклонения")), null === e) return;
r = {
approve: !n.dataset.deny,
moderateReason: e
};
}
var a, o;
n.classList.contains("js-hide-job") && (r = {
duration: 0
}), a = {
body: r,
url: n.href,
method: n.dataset.method || "POST"
}, o = (e => window.location = e.result.link || "jobs"), a.normalStatuses = a.normalStatuses || [ 200, 201, 204 ], 
s(a).addEventListener("success", o);
});
};
}
}, [ 326 ]);