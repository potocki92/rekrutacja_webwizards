function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.__esModule?e.default:e}var n={},a={},i=t.parcelRequire3b0f;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequire3b0f=i),i.register("kyEFX",function(t,r){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var n,a,i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},a=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i("kyEFX").register(JSON.parse('{"7ezIy":"index.f5a5ead2.js","2VlIv":"galleries-1.5b634c3c.jpg","lrD32":"galleries-2.2ecde3e7.jpg","8mADq":"galleries-3.00b1d299.jpg","6F4vi":"galleries-4.01702f06.jpg","5Ha4z":"galleries-1@2x.1bf25800.jpg","7YgMO":"galleries-2@2x.44ff174f.jpg","3Rv9N":"galleries-3@2x.4d282c9a.jpg","jChdU":"galleries-4@2x.c080748c.jpg"}'));var l={};l=/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var o={},c={},s={};s="object"==typeof t&&t&&t.Object===Object&&t;/** Detect free variable `self`. */var u="object"==typeof self&&self&&self.Object===Object&&self;c=s||u||Function("return this")();var g={},d={},v={},f=/\s/;v=/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function(e){for(var t=e.length;t--&&f.test(e.charAt(t)););return t};/** Used to match leading whitespace. */var m=/^\s+/;d=/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function(e){return e?e.slice(0,v(e)+1).replace(m,""):e};var p={},y={},b={};b=c.Symbol;var E={},_=Object.prototype,S=_.hasOwnProperty,h=_.toString,j=b?b.toStringTag:void 0;E=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(e){var t=S.call(e,j),r=e[j];try{e[j]=void 0;var n=!0}catch(e){}var a=h.call(e);return n&&(t?e[j]=r:delete e[j]),a};var F={},H=Object.prototype.toString;F=/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function(e){return H.call(e)};/** Built-in value references. */var L=b?b.toStringTag:void 0;y=/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":L&&L in Object(e)?E(e):F(e)};var R={};R=/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function(e){return null!=e&&"object"==typeof e},p=/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function(e){return"symbol"==typeof e||R(e)&&"[object Symbol]"==y(e)};/** Used as references for various `Number` constants. */var x=0/0,w=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,k=/^0o[0-7]+$/i,A=parseInt,U={};U=new URL(i("kyEFX").resolve("2VlIv"),import.meta.url).toString();var X={};X=new URL(i("kyEFX").resolve("lrD32"),import.meta.url).toString();var $={};$=new URL(i("kyEFX").resolve("8mADq"),import.meta.url).toString();var q={};q=new URL(i("kyEFX").resolve("6F4vi"),import.meta.url).toString();var T={};T=new URL(i("kyEFX").resolve("5Ha4z"),import.meta.url).toString();var D={};D=new URL(i("kyEFX").resolve("7YgMO"),import.meta.url).toString();var I={};I=new URL(i("kyEFX").resolve("3Rv9N"),import.meta.url).toString();var N={};N=new URL(i("kyEFX").resolve("jChdU"),import.meta.url).toString();const C={image:/*@__PURE__*/r(U),image2:/*@__PURE__*/r(X),image3:/*@__PURE__*/r($),image4:/*@__PURE__*/r(q),image_retina:/*@__PURE__*/r(T),image2_retina:/*@__PURE__*/r(D),image3_retina:/*@__PURE__*/r(I),image4_retina:/*@__PURE__*/r(N)},M=[{alt:"House",image:C.image,retina:C.image_retina},{alt:"Car",image:C.image2,retina:C.image2_retina},{alt:"Shoes",image:C.image3,retina:C.image3_retina},{alt:"Trees",image:C.image4,retina:C.image4_retina}],z=document.querySelector(".galleries__slides"),B=e=>`
  <img class="slide" loading="lazy" srcset="${e.image} 1x, ${e.retina} 2x" alt="${e.alt}"/>
`;// Wstawienie wygenerowanych slajdów do kontenera
M.forEach(e=>{z.innerHTML+=B(e)});// Pobranie wszystkich slajdów oraz nawigacji i przypisanie ich do zmiennej
const P=document.querySelectorAll(".slide"),V=document.querySelectorAll(".galleries__navlink"),Y=document.getElementById("nav-button--prev"),J=document.getElementById("nav-button--next");// Inicjalizacja bieżącego slajdu
let G=0;// Ustawienie początkowej pozycji slajdów
P.forEach((e,t)=>{e.style.left=`calc(${100*t}% + ${100*t}px)`,t!==G&&(e.style.opacity=.2)});// Funkcja aktualizująca położenie slajdów
const K=()=>{P.forEach((e,t)=>{t===G?e.style.opacity=1:e.style.opacity=.2,e.style.transform=`translateX(calc(-${100*G}% - ${100*G}px))`})},Q=e=>{G=e,K(),G<=0?Y.classList.remove("active"):Y.classList.add("active"),G===P.length-1?J.classList.remove("active"):J.classList.add("active")};// Nasłuchiwacz na przycisk poprzedniego slajdu
Y.addEventListener("click",()=>{G>0&&(Q(G-1),W(G))}),// Nasłuchiwacz na przycisk następnego slajdu
J.addEventListener("click",()=>{G<P.length-1&&(Q(G+1),W(G))});// Funkcja aktywująca odpowiednią nawigację
const W=e=>{V.forEach((t,r)=>{r===e?t.classList.add("active"):t.classList.remove("active")})};// Nasłuchiwacze na nawigację za pomocą kropek
V.forEach((e,t)=>{e.addEventListener("click",()=>{Q(G=t),W(t)})});// Dodajemy zmienną do przechowywania pozycji dotknięcia
let Z=0,ee=0;z.addEventListener("touchstart",e=>{Z=e.touches[0].clientX}),z.addEventListener("touchmove",e=>{ee=e.touches[0].clientX}),z.addEventListener("touchend",()=>{let e=ee-Z;e>50?G>0&&(Q(G-1),W(G)):e<-50&&G<P.length-1&&(Q(G+1),W(G))});//# sourceMappingURL=index.f5a5ead2.js.map

//# sourceMappingURL=index.f5a5ead2.js.map
