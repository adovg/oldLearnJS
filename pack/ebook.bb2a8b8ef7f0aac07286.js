var ebook = webpackJsonp_name_([ 8 ], {
147: function(e, t, r) {
"use strict";
var n = r(146), a = r(148);
const o = r(143).lang, i = r(144);
i.requirePhrase("site", r(1)("./" + o + ".yml")), document.addEventListener("xhrfail", function(e) {
new n.Error(e.reason);
}), e.exports = function(e) {
var t = new XMLHttpRequest(), r = e.method || "GET", n = e.body, o = e.url;
t.open(r, o, !e.sync), t.method = r;
var s = a();
s && !e.skipCsrf && t.setRequestHeader("X-XSRF-TOKEN", s), "[object Object]" == {}.toString.call(n) && (t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
n = JSON.stringify(n)), e.noDocumentEvents || (t.addEventListener("loadstart", e => {
t.timeStart = Date.now();
var r = d("xhrstart", e);
document.dispatchEvent(r);
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
var c, m, l = e.normalStatuses || [ 200 ];
function d(e, t) {
var r = new CustomEvent(e);
return r.originalEvent = t, r;
}
function p(e, r) {
var n = d("fail", r);
n.reason = e, t.dispatchEvent(n);
}
return t.addEventListener("error", e => {
p(i("site.errors.server_connection_error"), e);
}), t.addEventListener("timeout", e => {
p(i("site.errors.server_request_timeout"), e);
}), t.addEventListener("abort", e => {
p(i("site.errors.request_aborted"), e);
}), t.addEventListener("load", r => {
if (t.status) if (-1 != l.indexOf(t.status)) {
var n = t.responseText;
if ((t.getResponseHeader("Content-Type") || "").match(/^application\/json/) || e.json) try {
n = JSON.parse(n);
} catch (r) {
return void p(i("site.errors.invalid_format"), r);
}
n = n, (r = d("success", r)).result = n, t.dispatchEvent(r);
} else p(i("site.errors.server_error", {
status: t.status
}), r); else p(i("site.errors.no_response"), r);
}), setTimeout(function() {
t.send(n);
}, 0), t;
};
},
148: function(e, t, r) {
"use strict";
e.exports = function() {
var e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
},
176: function(e, t, r) {
"use strict";
t.FormPayment = r(177);
},
177: function(e, t, r) {
"use strict";
var n = r(146), a = r(147), o = r(150);
r(155);
const i = r(144), s = r(143);
i.requirePhrase("payments", r(5)("./" + s.lang + ".yml"));
e.exports = class {
constructor(e, t) {
this.orderForm = e, this.paymentMethodElem = t;
}
request(e) {
var t = a(e);
return t.addEventListener("loadstart", function() {
var e = this.startRequestIndication();
t.addEventListener("loadend", e);
}.bind(this)), t;
}
startRequestIndication() {
this.paymentMethodElem.classList.add("modal-overlay_light");
var e = new o({
elem: this.paymentMethodElem.querySelector('[type="submit"]'),
size: "small",
class: "",
elemClass: "button_loading"
});
return e.start(), () => {
this.paymentMethodElem.classList.remove("modal-overlay_light"), e && e.stop();
};
}
readPaymentData() {
var e = {};
return [].forEach.call(this.paymentMethodElem.querySelectorAll("input,select,textarea"), function(t) {
("radio" != t.type && "checkbox" != t.type || t.checked) && (e[t.name] = t.value);
}), e;
}
submit() {
var e = this.orderForm.getOrderData();
if (e) {
var t = this.readPaymentData();
if (t.paymentMethod) {
if ("invoice" == t.paymentMethod && !t.invoiceCompanyName) return new n.Error(i("payments.client.specify_company_name")), 
void this.paymentMethodElem.querySelector('[name="invoiceCompanyName"]').focus();
for (var r in t) e[r] = t[r];
var a = window.location.search.match(/[?&]code=([-\w]+)/);
if (a && (e.discountCode = a[1]), "stripe" == t.paymentMethod) {
let t = +e.amount;
window.rateUsdRub && (t = Math.round(t / window.rateUsdRub));
var o = this.startRequestIndication();
window.StripeCheckout.configure({
key: s.stripeKey,
image: "img/site_preview_" + s.lang + "_512x512.png",
locale: "auto",
opened: () => {
o();
},
token: t => {
e.stripeToken = t.id, this.sendPaymentRequest(e);
}
}).open({
name: i("payments.payment"),
description: e.title,
email: e.email,
amount: 100 * t
});
} else this.sendPaymentRequest(e);
} else new n.Error(i("payments.client.choose_payment_method"));
}
}
sendPaymentRequest(e) {
var t = a({
method: "POST",
url: "payments/common/checkout",
normalStatuses: [ 200, 403, 400 ],
body: e
});
e.orderTemplate && window.ga("ec:addProduct", {
id: this.orderForm.product,
variant: e.orderTemplate,
price: e.amount,
quantity: 1
}), window.ga("ec:setAction", "checkout", {
step: 1,
option: e.paymentMethod
}), window.metrika.reachGoal("CHECKOUT", {
product: this.orderForm.product,
method: e.paymentMethod,
price: e.amount
}), window.ga("send", "event", "payment", "checkout", "ebook"), window.ga("send", "event", "payment", "checkout-method-" + e.paymentMethod, this.orderForm.product);
var r = this.startRequestIndication();
t.addEventListener("success", a => {
if (403 == t.status) return new n.Error(i("payments.client.error_start_again", {
message: a.result.description || a.result.message || "",
email: s.ordersMail
})), void r();
if (400 == t.status) return new n.Error(i("payments.client.maybe_purchase_error", {
message: a.result.message || a.result.description || "",
email: s.ordersMail
})), void r();
var o = a.result;
if (o.form) {
window.ga("ec:setAction", "purchase", {
id: o.orderNumber
});
var c = document.createElement("div");
c.hidden = !0, c.innerHTML = o.form, document.body.appendChild(c);
var m = function() {
m.called || (m.called = !0, c.firstChild.submit());
};
window.ga("send", "event", "payment", "purchase", "ebook", {
hitCallback: m
}), setTimeout(m, 500), window.metrika.reachGoal("PURCHASE", {
product: this.orderForm.product,
method: e.paymentMethod,
price: e.amount,
number: o.orderNumber
});
} else r(), new n.Error(i("payments.client.purchase_error", {
email: s.ordersMail
}));
}), t.addEventListener("fail", r);
}
};
},
24: function(e, t, r) {
var n = {
"en.yml": 940,
"ja.yml": 484,
"ru.yml": 941
};
function a(e) {
return r(o(e));
}
function o(e) {
var t = n[e];
if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
return t;
}
a.keys = function() {
return Object.keys(n);
}, a.resolve = o, e.exports = a, a.id = 24;
},
297: function(e, t, r) {
"use strict";
var n, a = r(298);
(n = document.querySelector("[data-order-form]")) && new a({
elem: n
});
},
298: function(e, t, r) {
"use strict";
r(147);
var n = r(146), a = r(154), o = r(176).FormPayment;
r(150), r(155);
const i = r(144), s = r(143).lang;
i.requirePhrase("ebook", r(24)("./" + s + ".yml"));
class c {
constructor(e) {
this.elem = e.elem, this.product = "ebook", this.elem.addEventListener("submit", e => this.onSubmit(e)), 
this.delegate("[data-order-payment-change]", "click", function(e) {
e.preventDefault(), this.elem.querySelector("[data-order-form-step-payment]").style.display = "block", 
this.elem.querySelector("[data-order-form-step-confirm]").style.display = "none", 
this.elem.querySelector("[data-order-form-step-receipt]").style.display = "none";
}), this.delegate(".complex-form__extract .extract__item", "click", function(e) {
e.delegateTarget.querySelector('[type="radio"]').checked = !0;
});
}
onSubmit(e) {
e.preventDefault(), new o(this, this.elem).submit();
}
getOrderData() {
var e = {};
if (window.order) e.orderNumber = window.order.number, e.amount = window.order.amount, 
e.title = window.order.title; else {
var t = this.elem.querySelector('input[name="orderTemplate"]:checked');
e.orderTemplate = t.value, e.amount = t.dataset.price, e.title = t.dataset.title;
}
if (this.elem.elements.email) {
if (!this.elem.elements.email.value) return window.ga("send", "event", "payment", "checkout-no-email", "ebook"), 
window.metrika.reachGoal("CHECKOUT-NO-EMAIL", {
product: "ebook"
}), new n.Error(i("ebook.client.enter_email")), this.elem.elements.email.scrollIntoView(), 
setTimeout(function() {
window.scrollBy(0, -200);
}, 0), void this.elem.elements.email.focus();
e.email = this.elem.elements.email.value;
}
return e.email || (e.email = window.currentUser.email), e;
}
}
a.delegateMixin(c.prototype), e.exports = c;
},
484: function(e, t) {
e.exports = {
newOrder: {
title: "オフラインで読めるよう EPUB/PDF を購入する",
choose_course: "チュートリアルのどのパートをお望みですか？",
price: "価格",
specifyEmail: "メールアドレスを指定してください",
note: "支払い後、ダウンロードリンクがこのメールアドレスに送信されます。",
choose_payment: "お支払い方法を選択",
continue: "続ける",
confirmation: "確認",
currency: "USD",
continue_with_paypal: "PayPal でお支払い",
continue_with_stripe: "Stripe 経由でお支払い",
continue_pay: "支払いを続ける"
},
orders: {
order: "注文",
failed: "お支払いに失敗しました。後でもう一度お試しください。",
currency: "$",
payment: "お支払い",
successful: "成功しました",
pending: "確認中",
amount: "価格",
choose_another_payment: "別のお支払い方法を選択する",
do_not_pay_twice: "2度は支払わないでください。お支払い方法の変更は、支払いが失敗したことが確実な場合にのみ行ってください。",
questions: "ご不明な点がございましたら、お気軽にお問い合わせください。",
thanks: "購入していただきありがとうございます!",
confirmation_soon: "確認内容は #{email} に送信されます",
download_now: "このリンクを使用して今すぐチュートリアルをダウンロードできます:"
},
client: {
enter_email: "メールアドレスを入力してください。"
},
onPaid: {
subject: "JavaScript チュートリアル EPUB/PDF"
}
};
},
5: function(e, t, r) {
var n = {
"en.yml": 937,
"ru.yml": 938
};
function a(e) {
return r(o(e));
}
function o(e) {
var t = n[e];
if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
return t;
}
a.keys = function() {
return Object.keys(n);
}, a.resolve = o, e.exports = a, a.id = 5;
},
937: function(e, t) {
e.exports = {
client: {
choose_payment_method: "Choose payment method",
specify_company_name: "Specify company name",
error_start_again: "<p>#{message}</p><p>Please try purchase again.</p> <p>If you think that there is an error on server - contact with <a href='mailto:#{email}'> customer service</a>.</p>\n",
maybe_purchase_error: "<p>#{message}</p><p>If you think an error has occurred &mdash; please contact with <a href='mailto:#{email}'>customer service</a>.</p>\n",
purchase_error: "An error has occurred, please contact with <a href='mailto:#{email}'>customer service</a>.\n"
},
currency: "USD",
payment_for: "Payment for",
payment: "Payment",
payment_received: "Payment received",
payment_processing: "Pending processing",
payment_received_processing: "Payment received, processing",
payment_error: "An error occured",
payment_error_accent: "An error has occured during payment processing.",
payment_failed: "Payment failed",
payment_failed_try_again: "Payment failed, please try again",
payment_success_description: "<p>We'll send you an email to <b>#{orderEmail}</b>.</p><p>If you have any questions, please send them to #{mailUrl}.</p>",
order_canceled: "Order canceled",
contact_payment: "<p>Please send all questions regarding payment to #{mailUrl}.</p>",
contact_order: "<p>Please send all questions regarding the order to #{mailUrl}.</p>",
thanks: "Thanks for the order!",
contact_support: "<p>Please, contact support at #{mailUrl}.</p>",
stripe_payment_usd: "payment in US Dollars",
profile_order_link: "<p>Order information is available <a href='#{link}'>in your profile</a>.</p>"
};
},
938: function(e, t) {
e.exports = {
client: {
choose_payment_method: "Выберите метод оплаты.",
specify_company_name: "Укажите название компании.",
error_start_again: "<p>#{message}</p><p>Please .</p> <p>Если вы считаете, что на сервере ошибка – свяжитесь со <a href='mailto:#{mail}'> службой поддержки</a>.</p>\n",
maybe_purchase_error: "<p>#{message}</p><p>Если вы считаете, что произошла ошибка &mdash; свяжитесь со <a href='mailto:#{email}'>службой поддержки</a>.</p>\n",
purchase_error: "Ошибка на сервере, свяжитесь со <a href='mailto:#{email}'>службой поддержки</a>.\n"
},
currency: "RUB",
payment_for: "Оплата за",
payment: "Оплата",
payment_received: "Оплата получена",
payment_processing: "Ожидает обработки",
payment_received_processing: "Оплата получена, заказ обрабатывается.",
payment_error: "Произошла ошибка",
payment_error_accent: "При обработке платежа произошла ошибка.",
payment_failed: "Оплата не прошла",
payment_failed_try_again: "Оплата не прошла, попробуйте ещё раз",
payment_success_description: "<p>По окончании вам будет отправлено письмо на электронный адрес <b>#{orderEmail}</b>.</p><p>Если у вас возникли какие-нибудь вопросы, присылайте их на #{mailUrl}.</p>",
order_canceled: "Заказ отменён",
contact_payment: "<p>По вопросам, касающимся оплаты, пишите на #{mailUrl}.</p>",
contact_order: "<p>По вопросам, касающимся заказа, пишите на #{mailUrl}.</p>",
thanks: "Спасибо за заказ!",
contact_support: "<p>Пожалуйста, напишите в поддержку #{mailUrl}.</p>",
stripe_payment_usd: "оплата в долларах США",
profile_order_link: "<p>Информацию о заказе вы также можете найти <a href='#{link}'>в своём профиле</a>.</p>"
};
},
940: function(e, t) {
e.exports = {
newOrder: {
title: "Buy EPUB/PDF for offline reading",
choose_course: "Which parts of the tutorial you want?",
price: "Price",
specifyEmail: "Specify your email",
note: "The download link will be sent to this address after payment.",
choose_payment: "Choose payment method",
continue: "Continue",
confirmation: "Confirmation",
currency: "USD",
continue_with_paypal: "Pay with PayPal",
continue_with_stripe: "Pay via Stripe",
continue_pay: "Proceed with payment"
},
orders: {
order: "Order",
failed: "Payment failed, please try again later.",
currency: "$",
payment: "Payment",
successful: "Successful",
pending: "Confirmation pending",
amount: "Price",
choose_another_payment: "Choose another payment method",
do_not_pay_twice: "Do not pay twice. Change payment method only if you are sure that payment failed.",
questions: "If you have any questions please send them to",
thanks: "Thanks for your purchase!",
confirmation_soon: "Confirmation will be sent to #{email}",
download_now: "You can download the tutorial right now using this link:"
},
client: {
enter_email: "Enter email."
},
onPaid: {
subject: "JavaScript Tutorial EPUB/PDF"
}
};
},
941: function(e, t) {
e.exports = {
newOrder: {
title: "Покупка учебника JavaScript",
choose_course: "Выберите курс",
price: "Стоимость",
specifyEmail: "Укажите свой email",
note: "После оплаты ссылка на скачивание учебника придет на этот адрес.",
choose_payment: "Выберите метод оплаты",
continue: "Продолжить",
confirmation: "Подтверждение",
currency: "RUB",
continue_with_paypal: "Оплатить через PayPal",
continue_with_stripe: "Оплатить через Stripe",
continue_pay: "Перейти к оплате"
},
orders: {
order: "Заказ",
failed: "Оплата не прошла, попробуйте ещё раз.",
currency: "р.",
payment: "Оплата",
successful: "Осуществлена успешно",
pending: "Ожидается подтверждение",
amount: "Стоимость",
choose_another_payment: "Выберите другой метод оплаты",
do_not_pay_twice: "Не оплачивайте дважды. Меняйте метод оплаты лишь если уверены, что оплата не произошла.",
questions: "Если у вас возникли какие-либо вопросы, присылайте их на",
thanks: "Спасибо за покупку!",
confirmation_soon: "В ближайшее время на электронный адрес #{email} придёт подтверждение.",
download_now: "Вы можете скачать учебник прямо сейчас, по ссылке"
},
client: {
enter_email: "Введите email."
},
onPaid: {
subject: "Учебник для чтения оффлайн"
}
};
}
}, [ 297 ]);