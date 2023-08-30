!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.__esModule?e.default:e}var n={},a={},i=t.parcelRequire3b0f;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequire3b0f=i),i.register("iE7OH",function(t,r){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var n,a,i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},a=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i.register("aNJCr",function(t,r){e(t.exports,"getBundleURL",function(){return n},function(e){return n=e});var n,a={};n=function(e){var t=a[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),a[e]=t),t}}),i("iE7OH").register(JSON.parse('{"7TQZA":"index.4177fd12.js","eK2jW":"galleries-1.5b634c3c.jpg","hLHHQ":"galleries-2.2ecde3e7.jpg","2fAZM":"galleries-3.00b1d299.jpg","1DFXZ":"galleries-4.01702f06.jpg","eQIAe":"galleries-1@2x.1bf25800.jpg","fBbdy":"galleries-2@2x.44ff174f.jpg","eeMmK":"galleries-3@2x.4d282c9a.jpg","1xTAj":"galleries-4@2x.c080748c.jpg"}'));var l={};l=/**
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
 */function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var o={},c={},s={};s="object"==typeof t&&t&&t.Object===Object&&t;/** Detect free variable `self`. */var u="object"==typeof self&&self&&self.Object===Object&&self;c=s||u||Function("return this")();var f={},d={},g={},v=/\s/;g=/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function(e){for(var t=e.length;t--&&v.test(e.charAt(t)););return t};/** Used to match leading whitespace. */var p=/^\s+/;d=/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function(e){return e?e.slice(0,g(e)+1).replace(p,""):e};var m={},b={},E={};E=c.Symbol;var y={},h=Object.prototype,H=h.hasOwnProperty,_=h.toString,j=E?E.toStringTag:void 0;y=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(e){var t=H.call(e,j),r=e[j];try{e[j]=void 0;var n=!0}catch(e){}var a=_.call(e);return n&&(t?e[j]=r:delete e[j]),a};var A={},L=Object.prototype.toString;A=/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function(e){return L.call(e)};/** Built-in value references. */var O=E?E.toStringTag:void 0;b=/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":O&&O in Object(e)?y(e):A(e)};var x={};x=/**
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
 */function(e){return null!=e&&"object"==typeof e},m=/**
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
 */function(e){return"symbol"==typeof e||x(e)&&"[object Symbol]"==b(e)};/** Used as references for various `Number` constants. */var R=0/0,S=/^[-+]0x[0-9a-f]+$/i,T=/^0b[01]+$/i,B=/^0o[0-7]+$/i,F=parseInt,N={};N=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("eK2jW");var Q={};Q=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("hLHHQ");var Z={};Z=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("2fAZM");var C={};C=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("1DFXZ");var U={};U=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("eQIAe");var $={};$=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("fBbdy");var w={};w=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("eeMmK");var J={};J=i("aNJCr").getBundleURL("7TQZA")+i("iE7OH").resolve("1xTAj");let M={image:/*@__PURE__*/r(N),image2:/*@__PURE__*/r(Q),image3:/*@__PURE__*/r(Z),image4:/*@__PURE__*/r(C),image_retina:/*@__PURE__*/r(U),image2_retina:/*@__PURE__*/r($),image3_retina:/*@__PURE__*/r(w),image4_retina:/*@__PURE__*/r(J)},k=[{alt:"House",image:M.image,retina:M.image_retina},{alt:"Car",image:M.image2,retina:M.image2_retina},{alt:"Shoes",image:M.image3,retina:M.image3_retina},{alt:"Trees",image:M.image4,retina:M.image4_retina}],q=document.querySelector(".galleries__slides"),I=e=>`
  <img class="slide" loading="lazy" srcset="${e.image} 1x, ${e.retina} 2x" alt="${e.alt}"/>
`;// Wstawienie wygenerowanych slajdów do kontenera
k.forEach(e=>{q.innerHTML+=I(e)});// Pobranie wszystkich slajdów oraz nawigacji i przypisanie ich do zmiennej
let X=document.querySelectorAll(".slide"),D=document.querySelectorAll(".galleries__navlink"),K=document.getElementById("nav-button--prev"),z=document.getElementById("nav-button--next"),P=0;// Ustawienie początkowej pozycji slajdów
X.forEach((e,t)=>{e.style.left=`calc(${100*t}% + ${100*t}px)`,t!==P&&(e.style.opacity=.2)});// Funkcja aktualizująca położenie slajdów
let W=()=>{X.forEach((e,t)=>{t===P?e.style.opacity=1:e.style.opacity=.2,e.style.transform=`translateX(calc(-${100*P}% - ${100*P}px))`})},G=e=>{P=e,W(),P<=0?K.classList.remove("active"):K.classList.add("active"),P===X.length-1?z.classList.remove("active"):z.classList.add("active")};// Nasłuchiwacz na przycisk poprzedniego slajdu
K.addEventListener("click",()=>{P>0&&(G(P-1),V(P))}),// Nasłuchiwacz na przycisk następnego slajdu
z.addEventListener("click",()=>{P<X.length-1&&(G(P+1),V(P))});// Funkcja aktywująca odpowiednią nawigację
let V=e=>{D.forEach((t,r)=>{r===e?t.classList.add("active"):t.classList.remove("active")})};// Nasłuchiwacze na nawigację za pomocą kropek
D.forEach((e,t)=>{e.addEventListener("click",()=>{G(P=t),V(t)})});// Dodajemy zmienną do przechowywania pozycji dotknięcia
let Y=0,ee=0;q.addEventListener("touchstart",e=>{Y=e.touches[0].clientX}),q.addEventListener("touchmove",e=>{ee=e.touches[0].clientX}),q.addEventListener("touchend",()=>{let e=ee-Y;e>50?P>0&&(G(P-1),V(P)):e<-50&&P<X.length-1&&(G(P+1),V(P))})}();//# sourceMappingURL=index.4177fd12.js.map

//# sourceMappingURL=index.4177fd12.js.map
