function e(e,t,r,a){Object.defineProperty(e,t,{get:r,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},n=r.parcelRequire3b0f;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},r.parcelRequire3b0f=n),n.register("kyEFX",function(t,r){e(t.exports,"register",function(){return a},function(e){return a=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var a,i,n={};a=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)n[t[r]]=e[t[r]]},i=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n("kyEFX").register(JSON.parse('{"7ezIy":"index.dd0c9a22.js","eAXLz":"galleries-1.c972e134.png","dlEkY":"galleries-2.650d22fc.png","gAzVZ":"galleries-3.ed1665e8.png","5qm5P":"galleries-4.2086eee3.png","7TZMl":"galleries-1@2x.c48e60b5.png","kpaNy":"galleries-2@2x.a25c098f.png","4owBf":"galleries-3@2x.51af572d.png","68huU":"galleries-4@2x.c519fb0e.png"}'));var l={};l=new URL(n("kyEFX").resolve("eAXLz"),import.meta.url).toString();var o={};o=new URL(n("kyEFX").resolve("dlEkY"),import.meta.url).toString();var s={};s=new URL(n("kyEFX").resolve("gAzVZ"),import.meta.url).toString();var c={};c=new URL(n("kyEFX").resolve("5qm5P"),import.meta.url).toString();var g={};g=new URL(n("kyEFX").resolve("7TZMl"),import.meta.url).toString();var d={};d=new URL(n("kyEFX").resolve("kpaNy"),import.meta.url).toString();var u={};u=new URL(n("kyEFX").resolve("4owBf"),import.meta.url).toString();var m={};m=new URL(n("kyEFX").resolve("68huU"),import.meta.url).toString();const f={image:/*@__PURE__*/t(l),image2:/*@__PURE__*/t(o),image3:/*@__PURE__*/t(s),image4:/*@__PURE__*/t(c),image_retina:/*@__PURE__*/t(g),image2_retina:/*@__PURE__*/t(d),image3_retina:/*@__PURE__*/t(u),image4_retina:/*@__PURE__*/t(m)},v=[{alt:"House",image:f.image,retina:f.image_retina},{alt:"Car",image:f.image2,retina:f.image2_retina},{alt:"Shoes",image:f.image3,retina:f.image3_retina},{alt:"Trees",image:f.image4,retina:f.image4_retina}],p=document.querySelector(".galleries__slides"),E=e=>`
  <img class="slide" srcset="${e.image} 1x, ${e.retina} 2x" alt="${e.alt}"/>
`;// Wstawienie wygenerowanych slajdów do kontenera
v.forEach(e=>{p.innerHTML+=E(e)});// Pobranie wszystkich slajdów oraz nawigacji i przypisanie ich do zmiennej
const _=document.querySelectorAll(".slide"),y=document.querySelectorAll(".galleries__navlink"),b=document.getElementById("nav-button--prev"),S=document.getElementById("nav-button--next");// Inicjalizacja bieżącego slajdu
let L=0;// Ustawienie początkowej pozycji slajdów
_.forEach((e,t)=>{e.style.left=`calc(${100*t}% + ${100*t}px)`});// Funkcja aktualizująca położenie slajdów
const F=()=>{_.forEach(e=>{e.style.transform=`translateX(calc(-${100*L}% - ${100*L}px))`})},H=e=>{L=e,F(),L<=0?b.classList.remove("active"):b.classList.add("active"),L===_.length-1?S.classList.remove("active"):S.classList.add("active")};// Nasłuchiwacz na przycisk poprzedniego slajdu
b.addEventListener("click",()=>{L>0&&(H(L-1),k(L))}),// Nasłuchiwacz na przycisk następnego slajdu
S.addEventListener("click",()=>{L<_.length-1&&(H(L+1),k(L))});// Funkcja aktywująca odpowiednią nawigację
const k=e=>{y.forEach((t,r)=>{r===e?t.classList.add("active"):t.classList.remove("active")})};// Nasłuchiwacze na nawigację za pomocą kropek
y.forEach((e,t)=>{e.addEventListener("click",()=>{H(L=t),k(t)})});//# sourceMappingURL=index.dd0c9a22.js.map

//# sourceMappingURL=index.dd0c9a22.js.map