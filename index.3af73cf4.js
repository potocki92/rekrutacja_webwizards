!function(){function e(e,r,t,a){Object.defineProperty(e,r,{get:t,set:a,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},i=t.parcelRequire3b0f;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in n){var r=n[e];delete n[e];var t={id:e,exports:{}};return a[e]=t,r.call(t.exports,t,t.exports),t.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},t.parcelRequire3b0f=i),i.register("iE7OH",function(r,t){e(r.exports,"register",function(){return a},function(e){return a=e}),e(r.exports,"resolve",function(){return n},function(e){return n=e});var a,n,i={};a=function(e){for(var r=Object.keys(e),t=0;t<r.length;t++)i[r[t]]=e[r[t]]},n=function(e){var r=i[e];if(null==r)throw Error("Could not resolve bundle with id "+e);return r}}),i.register("aNJCr",function(r,t){e(r.exports,"getBundleURL",function(){return a},function(e){return a=e});var a,n={};a=function(e){var r=n[e];return r||(r=function(){try{throw Error()}catch(r){var e=(""+r.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=r),r}}),i("iE7OH").register(JSON.parse('{"7TQZA":"index.3af73cf4.js","b0GwE":"galleries-1.c972e134.png","lrGVt":"galleries-2.650d22fc.png","eOgGT":"galleries-3.ed1665e8.png","foo86":"galleries-4.2086eee3.png","5D03Q":"galleries-1@2x.c48e60b5.png","3DXWA":"galleries-2@2x.a25c098f.png","fexmm":"galleries-3@2x.51af572d.png","kEFjk":"galleries-4@2x.c519fb0e.png"}'));var l={};l=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("b0GwE");var o={};o=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("lrGVt");var s={};s=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("eOgGT");var c={};c=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("foo86");var g={};g=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("5D03Q");var u={};u=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("3DXWA");var d={};d=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("fexmm");var f={};f=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("kEFjk");let m={image:/*@__PURE__*/r(l),image2:/*@__PURE__*/r(o),image3:/*@__PURE__*/r(s),image4:/*@__PURE__*/r(c),image_retina:/*@__PURE__*/r(g),image2_retina:/*@__PURE__*/r(u),image3_retina:/*@__PURE__*/r(d),image4_retina:/*@__PURE__*/r(f)},v=[{alt:"House",image:m.image,retina:m.image_retina},{alt:"Car",image:m.image2,retina:m.image2_retina},{alt:"Shoes",image:m.image3,retina:m.image3_retina},{alt:"Trees",image:m.image4,retina:m.image4_retina}],E=document.querySelector(".galleries__slides"),_=e=>`
  <img class="slide" srcset="${e.image} 1x, ${e.retina} 2x" alt="${e.alt}"/>
`;// Wstawienie wygenerowanych slajdów do kontenera
v.forEach(e=>{E.innerHTML+=_(e)});// Pobranie wszystkich slajdów oraz nawigacji i przypisanie ich do zmiennej
let p=document.querySelectorAll(".slide"),b=document.querySelectorAll(".galleries__navlink"),H=document.getElementById("nav-button--prev"),x=document.getElementById("nav-button--next"),A=0;// Ustawienie początkowej pozycji slajdów
p.forEach((e,r)=>{e.style.left=`calc(${100*r}% + ${100*r}px)`});// Funkcja aktualizująca położenie slajdów
let h=()=>{p.forEach(e=>{e.style.transform=`translateX(calc(-${100*A}% - ${100*A}px))`})},L=e=>{A=e,h(),A<=0?H.classList.remove("active"):H.classList.add("active"),A===p.length-1?x.classList.remove("active"):x.classList.add("active")};// Nasłuchiwacz na przycisk poprzedniego slajdu
H.addEventListener("click",()=>{A>0&&(L(A-1),R(A))}),// Nasłuchiwacz na przycisk następnego slajdu
x.addEventListener("click",()=>{A<p.length-1&&(L(A+1),R(A))});// Funkcja aktywująca odpowiednią nawigację
let R=e=>{b.forEach((r,t)=>{t===e?r.classList.add("active"):r.classList.remove("active")})};// Nasłuchiwacze na nawigację za pomocą kropek
b.forEach((e,r)=>{e.addEventListener("click",()=>{L(A=r),R(r)})})}();//# sourceMappingURL=index.3af73cf4.js.map

//# sourceMappingURL=index.3af73cf4.js.map
