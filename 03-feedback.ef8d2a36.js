function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,g=function(){return l.Date.now()};function p(t,e,n){var r,i,o,a,f,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=r,o=i;return r=i=void 0,c=e,a=t.apply(o,n)}function j(t){return c=t,f=setTimeout(w,e),l?y(t):a}function h(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=o}function w(){var t=g();if(h(t))return O(t);f=setTimeout(w,function(t){var n=e-(t-u);return s?v(n,o-(t-c)):n}(t))}function O(t){return f=void 0,p&&r?y(t):(r=i=void 0,a)}function T(){var t=g(),n=h(t);if(r=arguments,i=this,u=t,n){if(void 0===f)return j(u);if(s)return f=setTimeout(w,e),y(u)}return void 0===f&&(f=setTimeout(w,e)),a}return e=b(e)||0,m(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,e):o,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=i=f=void 0},T.flush=function(){return void 0===f?a:O(g())},T}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=o.test(t);return n||a.test(t)?f(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return m(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(t,e,{leading:r,maxWait:e,trailing:i})};const y=document.querySelector(".feedback-form");let j={};y.addEventListener("input",t(e)((function(t){j=JSON.parse(localStorage.getItem("feedback-form-state"))||{},j[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),y.addEventListener("submit",(function(t){if(t.preventDefault(),!t.target.email.value||!t.target.message.value)return void alert("Enter all data");t.target.reset(),console.log(j),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.ef8d2a36.js.map