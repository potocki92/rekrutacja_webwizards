!function(){function e(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequire3b0f;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var r=a[e];delete a[e];var t={id:e,exports:{}};return n[e]=t,r.call(t.exports,t,t.exports),t.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){a[e]=r},t.parcelRequire3b0f=i),i.register("iE7OH",function(r,t){e(r.exports,"register",function(){return n},function(e){return n=e}),e(r.exports,"resolve",function(){return a},function(e){return a=e});var n,a,i={};n=function(e){for(var r=Object.keys(e),t=0;t<r.length;t++)i[r[t]]=e[r[t]]},a=function(e){var r=i[e];if(null==r)throw Error("Could not resolve bundle with id "+e);return r}}),i.register("aNJCr",function(r,t){e(r.exports,"getBundleURL",function(){return n},function(e){return n=e});var n,a={};n=function(e){var r=a[e];return r||(r=function(){try{throw Error()}catch(r){var e=(""+r.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),a[e]=r),r}}),i("iE7OH").register(JSON.parse('{"7TQZA":"index.a39dbbce.js","b0GwE":"galleries-1.c972e134.png","lrGVt":"galleries-2.650d22fc.png","eOgGT":"galleries-3.ed1665e8.png","foo86":"galleries-4.2086eee3.png","5D03Q":"galleries-1@2x.c48e60b5.png","3DXWA":"galleries-2@2x.a25c098f.png","fexmm":"galleries-3@2x.51af572d.png","kEFjk":"galleries-4@2x.c519fb0e.png"}'));var l={};l=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("b0GwE");var o={};o=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("lrGVt");var s={};s=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("eOgGT");var u={};u=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("foo86");var g={};g=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("5D03Q");var c={};c=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("3DXWA");var d={};d=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("fexmm");var f={};f=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("kEFjk");let m={image:/*@__PURE__*/r(l),image2:/*@__PURE__*/r(o),image3:/*@__PURE__*/r(s),image4:/*@__PURE__*/r(u),image_retina:/*@__PURE__*/r(g),image2_retina:/*@__PURE__*/r(c),image3_retina:/*@__PURE__*/r(d),image4_retina:/*@__PURE__*/r(f)},_=document.querySelector(".slider__slides");document.getElementsByClassName("slider__navlink");let v=[{alt:"House",image:m.image,retina:m.image_retina},{alt:"Car",image:m.image2,retina:m.image2_retina},{alt:"Shoes",image:m.image3,retina:m.image3_retina},{alt:"Trees",image:m.image4,retina:m.image4_retina}],E=e=>`
  <img class="slide" srcset="${e.image} 1x, ${e.retina}" alt=${e.alt}/>
`,p=v.map((e,r)=>E(e,r)).join("");_.innerHTML+=p,document.querySelectorAll(".slider__navlink").forEach(()=>{let e=0,r=document.querySelectorAll(".slide");r.forEach((e,r)=>{e.style.left=`calc(${100*r}% + ${100*r}px)`});let t=()=>{e--,a()},n=()=>{e++,a()};document.getElementById("nav-button--prev").addEventListener("click",()=>{t()}),document.getElementById("nav-button--next").addEventListener("click",()=>{n()});let a=()=>{r.forEach(r=>{r.style.transform=`translateX(-${100*e}%)`})}})}();//# sourceMappingURL=index.a39dbbce.js.map

//# sourceMappingURL=index.a39dbbce.js.map