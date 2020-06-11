var coursesFrontpage = webpackJsonp_name_([ 18 ], {
187: function(i, t, e) {
"use strict";
i.exports = class {
constructor({elem: i}) {
this.elem = i, this.list = i.querySelector(".courses-feedback-slides"), this.arrowLeft = i.querySelector(".courses-feedback-control_left"), 
this.arrowRight = i.querySelector(".courses-feedback-control_right"), this.pagination = i.querySelector(".courses-feedback-inline__pagination"), 
this.position = 0, this.arrowRight.onclick = this.next.bind(this), this.arrowLeft.onclick = this.prev.bind(this), 
this.pagination.onclick = this.onPaginationClick.bind(this);
}
onPaginationClick(i) {
let t = i.target.closest("li");
t && (this.position = [].indexOf.call(this.pagination.children, t), this.render());
}
next() {
this.position++, this.render();
}
prev() {
this.position--, this.render();
}
render() {
this.list.style.transform = this.position ? `translate3d(-${this.position}00%,0,0)` : "";
let i = "courses-feedback-control_hidden";
0 === this.position ? this.arrowLeft.classList.add(i) : this.arrowLeft.classList.remove(i), 
this.position == this.list.children.length - 1 ? this.arrowRight.classList.add(i) : this.arrowRight.classList.remove(i);
let t = this.pagination.querySelector(".courses-feedback-inline__page_active");
t && t.classList.remove("courses-feedback-inline__page_active"), this.pagination.children[this.position].classList.add("courses-feedback-inline__page_active");
}
};
},
312: function(i, t, e) {
"use strict";
var s = e(187);
!function() {
var i = document.querySelector("[data-participants-slider]"), t = i.querySelector("ul"), e = i.querySelector(".participants-logos__arr_left"), s = i.querySelector(".participants-logos__arr_right"), r = 0;
function o() {
t.style.transform = `translateX(${-r}px)`, 0 === r ? i.classList.add("participants-logos__slider_disable_left") : i.classList.remove("participants-logos__slider_disable_left"), 
r == t.scrollWidth - t.clientWidth ? i.classList.add("participants-logos__slider_disable_right") : i.classList.remove("participants-logos__slider_disable_right");
}
o(), e.onclick = function() {
(r -= t.clientWidth) < 0 && (r = 0), o();
}, s.onclick = function() {
r = Math.min(r + t.clientWidth, t.scrollWidth - t.clientWidth), o();
};
}(), document.querySelector(".courses-feedback-inline") && new s({
elem: document.querySelector(".courses-feedback-inline")
});
}
}, [ 312 ]);