function e(e,t,r,a){Object.defineProperty(e,t,{get:r,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},n=r.parcelRequire3b0f;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},r.parcelRequire3b0f=n),n.register("kyEFX",function(t,r){e(t.exports,"register",function(){return a},function(e){return a=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var a,i,n={};a=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)n[t[r]]=e[t[r]]},i=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n("kyEFX").register(JSON.parse('{"7ezIy":"index.c69c4c3e.js","2VlIv":"galleries-1.5b634c3c.jpg","lrD32":"galleries-2.2ecde3e7.jpg","8mADq":"galleries-3.00b1d299.jpg","6F4vi":"galleries-4.01702f06.jpg","5Ha4z":"galleries-1@2x.1bf25800.jpg","7YgMO":"galleries-2@2x.44ff174f.jpg","3Rv9N":"galleries-3@2x.4d282c9a.jpg","jChdU":"galleries-4@2x.c080748c.jpg"}'));var l={};l=new URL(n("kyEFX").resolve("2VlIv"),import.meta.url).toString();var o={};o=new URL(n("kyEFX").resolve("lrD32"),import.meta.url).toString();var s={};s=new URL(n("kyEFX").resolve("8mADq"),import.meta.url).toString();var c={};c=new URL(n("kyEFX").resolve("6F4vi"),import.meta.url).toString();var g={};g=new URL(n("kyEFX").resolve("5Ha4z"),import.meta.url).toString();var d={};d=new URL(n("kyEFX").resolve("7YgMO"),import.meta.url).toString();var u={};u=new URL(n("kyEFX").resolve("3Rv9N"),import.meta.url).toString();var m={};m=new URL(n("kyEFX").resolve("jChdU"),import.meta.url).toString();const v={image:/*@__PURE__*/t(l),image2:/*@__PURE__*/t(o),image3:/*@__PURE__*/t(s),image4:/*@__PURE__*/t(c),image_retina:/*@__PURE__*/t(g),image2_retina:/*@__PURE__*/t(d),image3_retina:/*@__PURE__*/t(u),image4_retina:/*@__PURE__*/t(m)},f=[{alt:"House",image:v.image,retina:v.image_retina},{alt:"Car",image:v.image2,retina:v.image2_retina},{alt:"Shoes",image:v.image3,retina:v.image3_retina},{alt:"Trees",image:v.image4,retina:v.image4_retina}],p=document.querySelector(".galleries__slides"),E=e=>`
  <img class="slide" srcset="${e.image} 1x, ${e.retina} 2x" alt="${e.alt}"/>
`;// Wstawienie wygenerowanych slajdów do kontenera
f.forEach(e=>{p.innerHTML+=E(e)});// Pobranie wszystkich slajdów oraz nawigacji i przypisanie ich do zmiennej
const _=document.querySelectorAll(".slide"),y=document.querySelectorAll(".galleries__navlink"),b=document.getElementById("nav-button--prev"),h=document.getElementById("nav-button--next");// Inicjalizacja bieżącego slajdu
let F=0;// Ustawienie początkowej pozycji slajdów
_.forEach((e,t)=>{e.style.left=`calc(${100*t}% + ${100*t}px)`,t!==F&&(e.style.opacity=.2)});// Funkcja aktualizująca położenie slajdów
const H=()=>{_.forEach((e,t)=>{t===F?e.style.opacity=1:e.style.opacity=.2,e.style.transform=`translateX(calc(-${100*F}% - ${100*F}px))`})},L=e=>{F=e,H(),F<=0?b.classList.remove("active"):b.classList.add("active"),F===_.length-1?h.classList.remove("active"):h.classList.add("active")};// Nasłuchiwacz na przycisk poprzedniego slajdu
b.addEventListener("click",()=>{F>0&&(L(F-1),S(F))}),// Nasłuchiwacz na przycisk następnego slajdu
h.addEventListener("click",()=>{F<_.length-1&&(L(F+1),S(F))});const S=e=>{y.forEach((t,r)=>{r===e?t.classList.add("active"):t.classList.remove("active")})};// Nasłuchiwacze na nawigację za pomocą kropek
y.forEach((e,t)=>{e.addEventListener("click",()=>{L(F=t),S(t)})});// Dodajemy zmienną do przechowywania pozycji dotknięcia
let R=0,x=0;p.addEventListener("touchstart",e=>{R=e.touches[0].clientX}),p.addEventListener("touchmove",e=>{x=e.touches[0].clientX}),p.addEventListener("touchend",()=>{let e=x-R;e>50?F>0&&(L(F-1),S(F)):e<-50&&F<_.length-1&&(L(F+1),S(F))});//# sourceMappingURL=index.c69c4c3e.js.map

//# sourceMappingURL=index.c69c4c3e.js.map
