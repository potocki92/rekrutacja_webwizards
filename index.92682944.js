!function(){function e(e,t,r,a){Object.defineProperty(e,t,{get:r,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},n=r.parcelRequire3b0f;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},r.parcelRequire3b0f=n),n.register("iE7OH",function(t,r){e(t.exports,"register",function(){return a},function(e){return a=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var a,i,n={};a=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)n[t[r]]=e[t[r]]},i=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n.register("aNJCr",function(t,r){e(t.exports,"getBundleURL",function(){return a},function(e){return a=e});var a,i={};a=function(e){var t=i[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),i[e]=t),t}}),n("iE7OH").register(JSON.parse('{"7TQZA":"index.92682944.js","eK2jW":"galleries-1.5b634c3c.jpg","hLHHQ":"galleries-2.2ecde3e7.jpg","2fAZM":"galleries-3.00b1d299.jpg","1DFXZ":"galleries-4.01702f06.jpg","eQIAe":"galleries-1@2x.1bf25800.jpg","fBbdy":"galleries-2@2x.44ff174f.jpg","eeMmK":"galleries-3@2x.4d282c9a.jpg","1xTAj":"galleries-4@2x.c080748c.jpg"}'));var l={};l=n("aNJCr").getBundleURL("7TQZA")+n("iE7OH").resolve("eK2jW");var o={};o=n("aNJCr").getBundleURL("7TQZA")+n("iE7OH").resolve("hLHHQ");var s={};s=n("aNJCr").getBundleURL("7TQZA")+n("iE7OH").resolve("2fAZM");var c={};c=n("aNJCr").getBundleURL("7TQZA")+n("iE7OH").resolve("1DFXZ");var u={};u=n("aNJCr").getBundleURL("7TQZA")+n("iE7OH").resolve("eQIAe");var d={};d=n("aNJCr").getBundleURL("7TQZA")+n("iE7OH").resolve("fBbdy");var g={};g=n("aNJCr").getBundleURL("7TQZA")+n("iE7OH").resolve("eeMmK");var f={};f=n("aNJCr").getBundleURL("7TQZA")+n("iE7OH").resolve("1xTAj");let v={image:/*@__PURE__*/t(l),image2:/*@__PURE__*/t(o),image3:/*@__PURE__*/t(s),image4:/*@__PURE__*/t(c),image_retina:/*@__PURE__*/t(u),image2_retina:/*@__PURE__*/t(d),image3_retina:/*@__PURE__*/t(g),image4_retina:/*@__PURE__*/t(f)},m=[{alt:"House",image:v.image,retina:v.image_retina},{alt:"Car",image:v.image2,retina:v.image2_retina},{alt:"Shoes",image:v.image3,retina:v.image3_retina},{alt:"Trees",image:v.image4,retina:v.image4_retina}],E=document.querySelector(".galleries__slides"),p=e=>`
  <img class="slide" srcset="${e.image} 1x, ${e.retina} 2x" alt="${e.alt}"/>
`;// Wstawienie wygenerowanych slajdów do kontenera
m.forEach(e=>{E.innerHTML+=p(e)});// Pobranie wszystkich slajdów oraz nawigacji i przypisanie ich do zmiennej
let H=document.querySelectorAll(".slide"),_=document.querySelectorAll(".galleries__navlink"),h=document.getElementById("nav-button--prev"),b=document.getElementById("nav-button--next"),A=0;// Ustawienie początkowej pozycji slajdów
H.forEach((e,t)=>{e.style.left=`calc(${100*t}% + ${100*t}px)`,t!==A&&(e.style.opacity=.2)});// Funkcja aktualizująca położenie slajdów
let L=()=>{H.forEach((e,t)=>{t===A?e.style.opacity=1:e.style.opacity=.2,e.style.transform=`translateX(calc(-${100*A}% - ${100*A}px))`})},x=e=>{A=e,L(),A<=0?h.classList.remove("active"):h.classList.add("active"),A===H.length-1?b.classList.remove("active"):b.classList.add("active")};// Nasłuchiwacz na przycisk poprzedniego slajdu
h.addEventListener("click",()=>{A>0&&(x(A-1),y(A))}),// Nasłuchiwacz na przycisk następnego slajdu
b.addEventListener("click",()=>{A<H.length-1&&(x(A+1),y(A))});let y=e=>{_.forEach((t,r)=>{r===e?t.classList.add("active"):t.classList.remove("active")})};// Nasłuchiwacze na nawigację za pomocą kropek
_.forEach((e,t)=>{e.addEventListener("click",()=>{x(A=t),y(t)})});// Dodajemy zmienną do przechowywania pozycji dotknięcia
let R=0,O=0;E.addEventListener("touchstart",e=>{R=e.touches[0].clientX}),E.addEventListener("touchmove",e=>{O=e.touches[0].clientX}),E.addEventListener("touchend",()=>{let e=O-R;e>50?A>0&&(x(A-1),y(A)):e<-50&&A<H.length-1&&(x(A+1),y(A))})}();//# sourceMappingURL=index.92682944.js.map

//# sourceMappingURL=index.92682944.js.map