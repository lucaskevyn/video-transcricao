/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-fast-compare";
exports.ids = ["vendor-chunks/react-fast-compare"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/***/ ((module) => {

eval("/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */\n\nvar hasElementType = typeof Element !== 'undefined';\nvar hasMap = typeof Map === 'function';\nvar hasSet = typeof Set === 'function';\nvar hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;\n\n// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js\n\nfunction equal(a, b) {\n  // START: fast-deep-equal es6/index.js 3.1.3\n  if (a === b) return true;\n\n  if (a && b && typeof a == 'object' && typeof b == 'object') {\n    if (a.constructor !== b.constructor) return false;\n\n    var length, i, keys;\n    if (Array.isArray(a)) {\n      length = a.length;\n      if (length != b.length) return false;\n      for (i = length; i-- !== 0;)\n        if (!equal(a[i], b[i])) return false;\n      return true;\n    }\n\n    // START: Modifications:\n    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code\n    //    to co-exist with es5.\n    // 2. Replace `for of` with es5 compliant iteration using `for`.\n    //    Basically, take:\n    //\n    //    ```js\n    //    for (i of a.entries())\n    //      if (!b.has(i[0])) return false;\n    //    ```\n    //\n    //    ... and convert to:\n    //\n    //    ```js\n    //    it = a.entries();\n    //    while (!(i = it.next()).done)\n    //      if (!b.has(i.value[0])) return false;\n    //    ```\n    //\n    //    **Note**: `i` access switches to `i.value`.\n    var it;\n    if (hasMap && (a instanceof Map) && (b instanceof Map)) {\n      if (a.size !== b.size) return false;\n      it = a.entries();\n      while (!(i = it.next()).done)\n        if (!b.has(i.value[0])) return false;\n      it = a.entries();\n      while (!(i = it.next()).done)\n        if (!equal(i.value[1], b.get(i.value[0]))) return false;\n      return true;\n    }\n\n    if (hasSet && (a instanceof Set) && (b instanceof Set)) {\n      if (a.size !== b.size) return false;\n      it = a.entries();\n      while (!(i = it.next()).done)\n        if (!b.has(i.value[0])) return false;\n      return true;\n    }\n    // END: Modifications\n\n    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {\n      length = a.length;\n      if (length != b.length) return false;\n      for (i = length; i-- !== 0;)\n        if (a[i] !== b[i]) return false;\n      return true;\n    }\n\n    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;\n    // START: Modifications:\n    // Apply guards for `Object.create(null)` handling. See:\n    // - https://github.com/FormidableLabs/react-fast-compare/issues/64\n    // - https://github.com/epoberezkin/fast-deep-equal/issues/49\n    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();\n    if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();\n    // END: Modifications\n\n    keys = Object.keys(a);\n    length = keys.length;\n    if (length !== Object.keys(b).length) return false;\n\n    for (i = length; i-- !== 0;)\n      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;\n    // END: fast-deep-equal\n\n    // START: react-fast-compare\n    // custom handling for DOM elements\n    if (hasElementType && a instanceof Element) return false;\n\n    // custom handling for React/Preact\n    for (i = length; i-- !== 0;) {\n      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {\n        // React-specific: avoid traversing React elements' _owner\n        // Preact-specific: avoid traversing Preact elements' __v and __o\n        //    __v = $_original / $_vnode\n        //    __o = $_owner\n        // These properties contain circular references and are not needed when\n        // comparing the actual elements (and not their owners)\n        // .$$typeof and ._store on just reasonable markers of elements\n\n        continue;\n      }\n\n      // all other properties should be traversed as usual\n      if (!equal(a[keys[i]], b[keys[i]])) return false;\n    }\n    // END: react-fast-compare\n\n    // START: fast-deep-equal\n    return true;\n  }\n\n  return a !== a && b !== b;\n}\n// end fast-deep-equal\n\nmodule.exports = function isEqual(a, b) {\n  try {\n    return equal(a, b);\n  } catch (error) {\n    if (((error.message || '').match(/stack|recursion/i))) {\n      // warn on circular references, don't crash\n      // browsers give this different errors name and messages:\n      // chrome/safari: \"RangeError\", \"Maximum call stack size exceeded\"\n      // firefox: \"InternalError\", too much recursion\"\n      // edge: \"Error\", \"Out of stack space\"\n      console.warn('react-fast-compare cannot handle circular refs');\n      return false;\n    }\n    // some other error. we should definitely know about these\n    throw error;\n  }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtZmFzdC1jb21wYXJlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixVQUFVO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLFVBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGpyb3Byb2pldG8xLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZhc3QtY29tcGFyZS9pbmRleC5qcz9jN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBNYXA6cmVhZG9ubHksIFNldDpyZWFkb25seSwgQXJyYXlCdWZmZXI6cmVhZG9ubHkgKi9cblxudmFyIGhhc0VsZW1lbnRUeXBlID0gdHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnO1xudmFyIGhhc01hcCA9IHR5cGVvZiBNYXAgPT09ICdmdW5jdGlvbic7XG52YXIgaGFzU2V0ID0gdHlwZW9mIFNldCA9PT0gJ2Z1bmN0aW9uJztcbnZhciBoYXNBcnJheUJ1ZmZlciA9IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiAhIUFycmF5QnVmZmVyLmlzVmlldztcblxuLy8gTm90ZTogV2UgKipkb24ndCoqIG5lZWQgYGVudkhhc0JpZ0ludDY0QXJyYXlgIGluIGZkZSBlczYvaW5kZXguanNcblxuZnVuY3Rpb24gZXF1YWwoYSwgYikge1xuICAvLyBTVEFSVDogZmFzdC1kZWVwLWVxdWFsIGVzNi9pbmRleC5qcyAzLjEuM1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChhLmNvbnN0cnVjdG9yICE9PSBiLmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgbGVuZ3RoLCBpLCBrZXlzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgICAgaWYgKCFlcXVhbChhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gU1RBUlQ6IE1vZGlmaWNhdGlvbnM6XG4gICAgLy8gMS4gRXh0cmEgYGhhczxUeXBlPiAmJmAgaGVscGVycyBpbiBpbml0aWFsIGNvbmRpdGlvbiBhbGxvdyBlczYgY29kZVxuICAgIC8vICAgIHRvIGNvLWV4aXN0IHdpdGggZXM1LlxuICAgIC8vIDIuIFJlcGxhY2UgYGZvciBvZmAgd2l0aCBlczUgY29tcGxpYW50IGl0ZXJhdGlvbiB1c2luZyBgZm9yYC5cbiAgICAvLyAgICBCYXNpY2FsbHksIHRha2U6XG4gICAgLy9cbiAgICAvLyAgICBgYGBqc1xuICAgIC8vICAgIGZvciAoaSBvZiBhLmVudHJpZXMoKSlcbiAgICAvLyAgICAgIGlmICghYi5oYXMoaVswXSkpIHJldHVybiBmYWxzZTtcbiAgICAvLyAgICBgYGBcbiAgICAvL1xuICAgIC8vICAgIC4uLiBhbmQgY29udmVydCB0bzpcbiAgICAvL1xuICAgIC8vICAgIGBgYGpzXG4gICAgLy8gICAgaXQgPSBhLmVudHJpZXMoKTtcbiAgICAvLyAgICB3aGlsZSAoIShpID0gaXQubmV4dCgpKS5kb25lKVxuICAgIC8vICAgICAgaWYgKCFiLmhhcyhpLnZhbHVlWzBdKSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vICAgIGBgYFxuICAgIC8vXG4gICAgLy8gICAgKipOb3RlKio6IGBpYCBhY2Nlc3Mgc3dpdGNoZXMgdG8gYGkudmFsdWVgLlxuICAgIHZhciBpdDtcbiAgICBpZiAoaGFzTWFwICYmIChhIGluc3RhbmNlb2YgTWFwKSAmJiAoYiBpbnN0YW5jZW9mIE1hcCkpIHtcbiAgICAgIGlmIChhLnNpemUgIT09IGIuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaXQgPSBhLmVudHJpZXMoKTtcbiAgICAgIHdoaWxlICghKGkgPSBpdC5uZXh0KCkpLmRvbmUpXG4gICAgICAgIGlmICghYi5oYXMoaS52YWx1ZVswXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIGl0ID0gYS5lbnRyaWVzKCk7XG4gICAgICB3aGlsZSAoIShpID0gaXQubmV4dCgpKS5kb25lKVxuICAgICAgICBpZiAoIWVxdWFsKGkudmFsdWVbMV0sIGIuZ2V0KGkudmFsdWVbMF0pKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGhhc1NldCAmJiAoYSBpbnN0YW5jZW9mIFNldCkgJiYgKGIgaW5zdGFuY2VvZiBTZXQpKSB7XG4gICAgICBpZiAoYS5zaXplICE9PSBiLnNpemUpIHJldHVybiBmYWxzZTtcbiAgICAgIGl0ID0gYS5lbnRyaWVzKCk7XG4gICAgICB3aGlsZSAoIShpID0gaXQubmV4dCgpKS5kb25lKVxuICAgICAgICBpZiAoIWIuaGFzKGkudmFsdWVbMF0pKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gRU5EOiBNb2RpZmljYXRpb25zXG5cbiAgICBpZiAoaGFzQXJyYXlCdWZmZXIgJiYgQXJyYXlCdWZmZXIuaXNWaWV3KGEpICYmIEFycmF5QnVmZmVyLmlzVmlldyhiKSkge1xuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYS5jb25zdHJ1Y3RvciA9PT0gUmVnRXhwKSByZXR1cm4gYS5zb3VyY2UgPT09IGIuc291cmNlICYmIGEuZmxhZ3MgPT09IGIuZmxhZ3M7XG4gICAgLy8gU1RBUlQ6IE1vZGlmaWNhdGlvbnM6XG4gICAgLy8gQXBwbHkgZ3VhcmRzIGZvciBgT2JqZWN0LmNyZWF0ZShudWxsKWAgaGFuZGxpbmcuIFNlZTpcbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3JtaWRhYmxlTGFicy9yZWFjdC1mYXN0LWNvbXBhcmUvaXNzdWVzLzY0XG4gICAgLy8gLSBodHRwczovL2dpdGh1Yi5jb20vZXBvYmVyZXpraW4vZmFzdC1kZWVwLWVxdWFsL2lzc3Vlcy80OVxuICAgIGlmIChhLnZhbHVlT2YgIT09IE9iamVjdC5wcm90b3R5cGUudmFsdWVPZiAmJiB0eXBlb2YgYS52YWx1ZU9mID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiLnZhbHVlT2YgPT09ICdmdW5jdGlvbicpIHJldHVybiBhLnZhbHVlT2YoKSA9PT0gYi52YWx1ZU9mKCk7XG4gICAgaWYgKGEudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgJiYgdHlwZW9mIGEudG9TdHJpbmcgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGIudG9TdHJpbmcgPT09ICdmdW5jdGlvbicpIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcbiAgICAvLyBFTkQ6IE1vZGlmaWNhdGlvbnNcblxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gRU5EOiBmYXN0LWRlZXAtZXF1YWxcblxuICAgIC8vIFNUQVJUOiByZWFjdC1mYXN0LWNvbXBhcmVcbiAgICAvLyBjdXN0b20gaGFuZGxpbmcgZm9yIERPTSBlbGVtZW50c1xuICAgIGlmIChoYXNFbGVtZW50VHlwZSAmJiBhIGluc3RhbmNlb2YgRWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gY3VzdG9tIGhhbmRsaW5nIGZvciBSZWFjdC9QcmVhY3RcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIGlmICgoa2V5c1tpXSA9PT0gJ19vd25lcicgfHwga2V5c1tpXSA9PT0gJ19fdicgfHwga2V5c1tpXSA9PT0gJ19fbycpICYmIGEuJCR0eXBlb2YpIHtcbiAgICAgICAgLy8gUmVhY3Qtc3BlY2lmaWM6IGF2b2lkIHRyYXZlcnNpbmcgUmVhY3QgZWxlbWVudHMnIF9vd25lclxuICAgICAgICAvLyBQcmVhY3Qtc3BlY2lmaWM6IGF2b2lkIHRyYXZlcnNpbmcgUHJlYWN0IGVsZW1lbnRzJyBfX3YgYW5kIF9fb1xuICAgICAgICAvLyAgICBfX3YgPSAkX29yaWdpbmFsIC8gJF92bm9kZVxuICAgICAgICAvLyAgICBfX28gPSAkX293bmVyXG4gICAgICAgIC8vIFRoZXNlIHByb3BlcnRpZXMgY29udGFpbiBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCBhcmUgbm90IG5lZWRlZCB3aGVuXG4gICAgICAgIC8vIGNvbXBhcmluZyB0aGUgYWN0dWFsIGVsZW1lbnRzIChhbmQgbm90IHRoZWlyIG93bmVycylcbiAgICAgICAgLy8gLiQkdHlwZW9mIGFuZCAuX3N0b3JlIG9uIGp1c3QgcmVhc29uYWJsZSBtYXJrZXJzIG9mIGVsZW1lbnRzXG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGFsbCBvdGhlciBwcm9wZXJ0aWVzIHNob3VsZCBiZSB0cmF2ZXJzZWQgYXMgdXN1YWxcbiAgICAgIGlmICghZXF1YWwoYVtrZXlzW2ldXSwgYltrZXlzW2ldXSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gRU5EOiByZWFjdC1mYXN0LWNvbXBhcmVcblxuICAgIC8vIFNUQVJUOiBmYXN0LWRlZXAtZXF1YWxcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhICE9PSBhICYmIGIgIT09IGI7XG59XG4vLyBlbmQgZmFzdC1kZWVwLWVxdWFsXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNFcXVhbChhLCBiKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVxdWFsKGEsIGIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmICgoKGVycm9yLm1lc3NhZ2UgfHwgJycpLm1hdGNoKC9zdGFja3xyZWN1cnNpb24vaSkpKSB7XG4gICAgICAvLyB3YXJuIG9uIGNpcmN1bGFyIHJlZmVyZW5jZXMsIGRvbid0IGNyYXNoXG4gICAgICAvLyBicm93c2VycyBnaXZlIHRoaXMgZGlmZmVyZW50IGVycm9ycyBuYW1lIGFuZCBtZXNzYWdlczpcbiAgICAgIC8vIGNocm9tZS9zYWZhcmk6IFwiUmFuZ2VFcnJvclwiLCBcIk1heGltdW0gY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCJcbiAgICAgIC8vIGZpcmVmb3g6IFwiSW50ZXJuYWxFcnJvclwiLCB0b28gbXVjaCByZWN1cnNpb25cIlxuICAgICAgLy8gZWRnZTogXCJFcnJvclwiLCBcIk91dCBvZiBzdGFjayBzcGFjZVwiXG4gICAgICBjb25zb2xlLndhcm4oJ3JlYWN0LWZhc3QtY29tcGFyZSBjYW5ub3QgaGFuZGxlIGNpcmN1bGFyIHJlZnMnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gc29tZSBvdGhlciBlcnJvci4gd2Ugc2hvdWxkIGRlZmluaXRlbHkga25vdyBhYm91dCB0aGVzZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-fast-compare/index.js\n");

/***/ })

};
;