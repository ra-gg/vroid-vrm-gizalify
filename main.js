!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){return function(t){this.message=t}}();e.HandledError=n},function(t,e,r){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var n=r(4),i=r(5),o=r(6);function u(){return s.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function f(t,e){if(u()<e)throw new RangeError("Invalid typed array length");return s.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=s.prototype:(null===t&&(t=new s(e)),t.length=e),t}function s(t,e,r){if(!(s.TYPED_ARRAY_SUPPORT||this instanceof s))return new s(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return c(this,t)}return a(this,t,e,r)}function a(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n);s.TYPED_ARRAY_SUPPORT?(t=e).__proto__=s.prototype:t=l(t,e);return t}(t,e,r,n):"string"==typeof e?function(t,e,r){"string"==typeof r&&""!==r||(r="utf8");if(!s.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|g(e,r),i=(t=f(t,n)).write(e,r);i!==n&&(t=t.slice(0,i));return t}(t,e,r):function(t,e){if(s.isBuffer(e)){var r=0|p(e.length);return 0===(t=f(t,r)).length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(n=e.length)!=n?f(t,0):l(t,e);if("Buffer"===e.type&&o(e.data))return l(t,e.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function h(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function c(t,e){if(h(e),t=f(t,e<0?0:0|p(e)),!s.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function l(t,e){var r=e.length<0?0:0|p(e.length);t=f(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function p(t){if(t>=u())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u().toString(16)+" bytes");return 0|t}function g(t,e){if(s.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return D(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return V(t).length;default:if(n)return D(t).length;e=(""+e).toLowerCase(),n=!0}}function d(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function y(t,e,r,n,i){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof e&&(e=s.from(e,n)),s.isBuffer(e))return 0===e.length?-1:w(t,e,r,n,i);if("number"==typeof e)return e&=255,s.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):w(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function w(t,e,r,n,i){var o,u=1,f=t.length,s=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;u=2,f/=2,s/=2,r/=2}function a(t,e){return 1===u?t[e]:t.readUInt16BE(e*u)}if(i){var h=-1;for(o=r;o<f;o++)if(a(t,o)===a(e,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===s)return h*u}else-1!==h&&(o-=o-h),h=-1}else for(r+s>f&&(r=f-s),o=r;o>=0;o--){for(var c=!0,l=0;l<s;l++)if(a(t,o+l)!==a(e,l)){c=!1;break}if(c)return o}return-1}function v(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o=e.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var u=0;u<n;++u){var f=parseInt(e.substr(2*u,2),16);if(isNaN(f))return u;t[r+u]=f}return u}function b(t,e,r,n){return N(D(e,t.length-r),t,r,n)}function m(t,e,r,n){return N(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function _(t,e,r,n){return m(t,e,r,n)}function E(t,e,r,n){return N(V(e),t,r,n)}function A(t,e,r,n){return N(function(t,e){for(var r,n,i,o=[],u=0;u<t.length&&!((e-=2)<0);++u)r=t.charCodeAt(u),n=r>>8,i=r%256,o.push(i),o.push(n);return o}(e,t.length-r),t,r,n)}function R(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function T(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;i<r;){var o,u,f,s,a=t[i],h=null,c=a>239?4:a>223?3:a>191?2:1;if(i+c<=r)switch(c){case 1:a<128&&(h=a);break;case 2:128==(192&(o=t[i+1]))&&(s=(31&a)<<6|63&o)>127&&(h=s);break;case 3:o=t[i+1],u=t[i+2],128==(192&o)&&128==(192&u)&&(s=(15&a)<<12|(63&o)<<6|63&u)>2047&&(s<55296||s>57343)&&(h=s);break;case 4:o=t[i+1],u=t[i+2],f=t[i+3],128==(192&o)&&128==(192&u)&&128==(192&f)&&(s=(15&a)<<18|(63&o)<<12|(63&u)<<6|63&f)>65535&&s<1114112&&(h=s)}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=c}return function(t){var e=t.length;if(e<=P)return String.fromCharCode.apply(String,t);var r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=P));return r}(n)}e.Buffer=s,e.SlowBuffer=function(t){+t!=t&&(t=0);return s.alloc(+t)},e.INSPECT_MAX_BYTES=50,s.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=u(),s.poolSize=8192,s._augment=function(t){return t.__proto__=s.prototype,t},s.from=function(t,e,r){return a(null,t,e,r)},s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0})),s.alloc=function(t,e,r){return function(t,e,r,n){return h(e),e<=0?f(t,e):void 0!==r?"string"==typeof n?f(t,e).fill(r,n):f(t,e).fill(r):f(t,e)}(null,t,e,r)},s.allocUnsafe=function(t){return c(null,t)},s.allocUnsafeSlow=function(t){return c(null,t)},s.isBuffer=function(t){return!(null==t||!t._isBuffer)},s.compare=function(t,e){if(!s.isBuffer(t)||!s.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=s.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){var u=t[r];if(!s.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(n,i),i+=u.length}return n},s.byteLength=g,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)d(this,e,e+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)d(this,e,e+3),d(this,e+1,e+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)d(this,e,e+7),d(this,e+1,e+6),d(this,e+2,e+5),d(this,e+3,e+4);return this},s.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?T(this,0,t):function(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return U(this,e,r);case"utf8":case"utf-8":return T(this,e,r);case"ascii":return S(this,e,r);case"latin1":case"binary":return M(this,e,r);case"base64":return R(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}.apply(this,arguments)},s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},s.prototype.compare=function(t,e,r,n,i){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),u=(r>>>=0)-(e>>>=0),f=Math.min(o,u),a=this.slice(n,i),h=t.slice(e,r),c=0;c<f;++c)if(a[c]!==h[c]){o=a[c],u=h[c];break}return o<u?-1:u<o?1:0},s.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},s.prototype.indexOf=function(t,e,r){return y(this,t,e,r,!0)},s.prototype.lastIndexOf=function(t,e,r){return y(this,t,e,r,!1)},s.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return v(this,t,e,r);case"utf8":case"utf-8":return b(this,t,e,r);case"ascii":return m(this,t,e,r);case"latin1":case"binary":return _(this,t,e,r);case"base64":return E(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var P=4096;function S(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function M(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function U(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=e;o<r;++o)i+=j(t[o]);return i}function B(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function O(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function x(t,e,r,n,i,o){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function I(t,e,r,n){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-r,2);i<o;++i)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function L(t,e,r,n){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-r,4);i<o;++i)t[r+i]=e>>>8*(n?i:3-i)&255}function Y(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function C(t,e,r,n,o){return o||Y(t,0,r,4),i.write(t,e,r,n,23,4),r+4}function F(t,e,r,n,o){return o||Y(t,0,r,8),i.write(t,e,r,n,52,8),r+8}s.prototype.slice=function(t,e){var r,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),s.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=s.prototype;else{var i=e-t;r=new s(i,void 0);for(var o=0;o<i;++o)r[o]=this[o+t]}return r},s.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||O(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n},s.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||O(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},s.prototype.readUInt8=function(t,e){return e||O(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,e){return e||O(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,e){return e||O(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,e){return e||O(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,e){return e||O(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||O(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n},s.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||O(t,e,this.length);for(var n=e,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},s.prototype.readInt8=function(t,e){return e||O(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},s.prototype.readInt16LE=function(t,e){e||O(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(t,e){e||O(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(t,e){return e||O(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return e||O(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,e){return e||O(t,4,this.length),i.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return e||O(t,4,this.length),i.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return e||O(t,8,this.length),i.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return e||O(t,8,this.length),i.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||x(this,t,e,r,Math.pow(2,8*r)-1,0);var i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},s.prototype.writeUIntBE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||x(this,t,e,r,Math.pow(2,8*r)-1,0);var i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},s.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||x(this,t,e,1,255,0),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},s.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||x(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):I(this,t,e,!0),e+2},s.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||x(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):I(this,t,e,!1),e+2},s.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||x(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):L(this,t,e,!0),e+4},s.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||x(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):L(this,t,e,!1),e+4},s.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);x(this,t,e,r,i-1,-i)}var o=0,u=1,f=0;for(this[e]=255&t;++o<r&&(u*=256);)t<0&&0===f&&0!==this[e+o-1]&&(f=1),this[e+o]=(t/u>>0)-f&255;return e+r},s.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);x(this,t,e,r,i-1,-i)}var o=r-1,u=1,f=0;for(this[e+o]=255&t;--o>=0&&(u*=256);)t<0&&0===f&&0!==this[e+o+1]&&(f=1),this[e+o]=(t/u>>0)-f&255;return e+r},s.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||x(this,t,e,1,127,-128),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},s.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||x(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):I(this,t,e,!0),e+2},s.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||x(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):I(this,t,e,!1),e+2},s.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||x(this,t,e,4,2147483647,-2147483648),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):L(this,t,e,!0),e+4},s.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||x(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):L(this,t,e,!1),e+4},s.prototype.writeFloatLE=function(t,e,r){return C(this,t,e,!0,r)},s.prototype.writeFloatBE=function(t,e,r){return C(this,t,e,!1,r)},s.prototype.writeDoubleLE=function(t,e,r){return F(this,t,e,!0,r)},s.prototype.writeDoubleBE=function(t,e,r){return F(this,t,e,!1,r)},s.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var i,o=n-r;if(this===t&&r<e&&e<n)for(i=o-1;i>=0;--i)t[i+e]=this[i+r];else if(o<1e3||!s.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+o),e);return o},s.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!s.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var u=s.isBuffer(t)?t:D(new s(t,n).toString()),f=u.length;for(o=0;o<r-e;++o)this[o+e]=u[o%f]}return this};var k=/[^+\/0-9A-Za-z-_]/g;function j(t){return t<16?"0"+t.toString(16):t.toString(16)}function D(t,e){var r;e=e||1/0;for(var n=t.length,i=null,o=[],u=0;u<n;++u){if((r=t.charCodeAt(u))>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(u+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function V(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(k,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function N(t,e,r,n){for(var i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}}).call(this,r(3))},function(t,e,r){"use strict";var n=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(i,o){function u(t){try{s(n.next(t))}catch(t){o(t)}}function f(t){try{s(n.throw(t))}catch(t){o(t)}}function s(t){t.done?i(t.value):new r(function(e){e(t.value)}).then(u,f)}s((n=n.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){var r,n,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:f(0),throw:f(1),return:f(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function f(o){return function(f){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,n=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=e.call(t,u)}catch(t){o=[6,t],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,f])}}},o=this;Object.defineProperty(e,"__esModule",{value:!0});var u,f=r(1),s=r(7),a=r(8),h=r(10),c=r(11),l=r(0),p=r(12);window.addEventListener("dragover",function(t){t.preventDefault()}),window.addEventListener("drop",function(t){return n(o,void 0,void 0,function(){var e,r,n,o,g,d,y,w,v,b,m,_,E,A,R,T;return i(this,function(i){switch(i.label){case 0:return t.preventDefault(),(e=document.querySelector("#download")).removeAttribute("href"),e.textContent="Gizabalify... 🕐",r=document.querySelector('[name="teethType"]:checked').value,n=t.dataTransfer.files[0],u&&URL.revokeObjectURL(u),[4,new Promise(function(t){return setTimeout(t,500)})];case 1:i.sent(),i.label=2;case 2:return i.trys.push([2,4,,5]),o=n.name,g=new FileReader,[4,new Promise(function(t){g.onload=function(){return t(new f.Buffer(g.result))},g.readAsArrayBuffer(n)})];case 3:return d=i.sent(),function(t,e){return".vrm"===a.extname(t.name)&&"glTF"===e.slice(0,4).toString("utf-8")}(n,d)?(y=d.readUInt32LE(12),w=d.slice(y+28),v=d.toString("utf8",20,y+20),b=JSON.parse(v),m=new s.GltfVRM(b),"gizaba"===r?c.gizabalifyVRM(m):p.yaebalifyVRM(m),_=h.buildVRMBuffer(m,w),E=new Blob([_],{type:"application/octet-stream"}),A=URL.createObjectURL(E),R="gizaba"===r?"gizabalify":"yaebalify",e.textContent="Complete! click here to download.",u=e.href=A,e.download=a.basename(o,".vrm")+"-"+R+".vrm",[3,5]):(e.textContent="Invalid VRM🙅",[2]);case 4:return T=i.sent(),console.error(T),T instanceof l.HandledError?e.textContent=T.message:e.textContent="Oops, process failed 🙄",[3,5];case 5:return[2]}})})})},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";e.byteLength=function(t){var e=a(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){for(var e,r=a(t),n=r[0],u=r[1],f=new o(function(t,e,r){return 3*(e+r)/4-r}(0,n,u)),s=0,h=u>0?n-4:n,c=0;c<h;c+=4)e=i[t.charCodeAt(c)]<<18|i[t.charCodeAt(c+1)]<<12|i[t.charCodeAt(c+2)]<<6|i[t.charCodeAt(c+3)],f[s++]=e>>16&255,f[s++]=e>>8&255,f[s++]=255&e;2===u&&(e=i[t.charCodeAt(c)]<<2|i[t.charCodeAt(c+1)]>>4,f[s++]=255&e);1===u&&(e=i[t.charCodeAt(c)]<<10|i[t.charCodeAt(c+1)]<<4|i[t.charCodeAt(c+2)]>>2,f[s++]=e>>8&255,f[s++]=255&e);return f},e.fromByteArray=function(t){for(var e,r=t.length,i=r%3,o=[],u=0,f=r-i;u<f;u+=16383)o.push(h(t,u,u+16383>f?f:u+16383));1===i?(e=t[r-1],o.push(n[e>>2]+n[e<<4&63]+"==")):2===i&&(e=(t[r-2]<<8)+t[r-1],o.push(n[e>>10]+n[e>>4&63]+n[e<<2&63]+"="));return o.join("")};for(var n=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=0,s=u.length;f<s;++f)n[f]=u[f],i[u.charCodeAt(f)]=f;function a(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function h(t,e,r){for(var i,o,u=[],f=e;f<r;f+=3)i=(t[f]<<16&16711680)+(t[f+1]<<8&65280)+(255&t[f+2]),u.push(n[(o=i)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return u.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,r,n,i){var o,u,f=8*i-n-1,s=(1<<f)-1,a=s>>1,h=-7,c=r?i-1:0,l=r?-1:1,p=t[e+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=f;h>0;o=256*o+t[e+c],c+=l,h-=8);for(u=o&(1<<-h)-1,o>>=-h,h+=n;h>0;u=256*u+t[e+c],c+=l,h-=8);if(0===o)o=1-a;else{if(o===s)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),o-=a}return(p?-1:1)*u*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var u,f,s,a=8*o-i-1,h=(1<<a)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,d=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(f=isNaN(e)?1:0,u=h):(u=Math.floor(Math.log(e)/Math.LN2),e*(s=Math.pow(2,-u))<1&&(u--,s*=2),(e+=u+c>=1?l/s:l*Math.pow(2,1-c))*s>=2&&(u++,s/=2),u+c>=h?(f=0,u=h):u+c>=1?(f=(e*s-1)*Math.pow(2,i),u+=c):(f=e*Math.pow(2,c-1)*Math.pow(2,i),u=0));i>=8;t[r+p]=255&f,p+=g,f/=256,i-=8);for(u=u<<i|f,a+=i;a>0;t[r+p]=255&u,p+=g,u/=256,a-=8);t[r+p-g]|=128*d}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.A="A",t.I="I",t.U="U",t.E="E",t.O="O"}(e.VRMBlendShapeName||(e.VRMBlendShapeName={}));var n=function(){function t(t){this.gltf=t,this.vrm=this.gltf.extensions.VRM}return t.prototype.getFaceMesh=function(){var t=this.gltf.meshes.findIndex(function(t){return"Face.baked"===t.name});return{index:t,mesh:this.gltf.meshes[t]}},t.prototype.getFaceMeshes=function(){var t=this.getFaceMesh().mesh.primitives[0],e=t.targets,r=t.extras.targetNames;return e.map(function(t,e){return{index:e,name:r[e],target:t}})},Object.defineProperty(t.prototype,"blendShapeGroups",{get:function(){return this.vrm.blendShapeMaster.blendShapeGroups},enumerable:!0,configurable:!0}),t.prototype.toString=function(){return console.log("VRM serialized",this.gltf),JSON.stringify(this.gltf)},t}();e.GltfVRM=n},function(t,e,r){(function(t){function r(t,e){for(var r=0,n=t.length-1;n>=0;n--){var i=t[n];"."===i?t.splice(n,1):".."===i?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}var n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(t){return n.exec(t).slice(1)};function o(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}e.resolve=function(){for(var e="",n=!1,i=arguments.length-1;i>=-1&&!n;i--){var u=i>=0?arguments[i]:t.cwd();if("string"!=typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(e=u+"/"+e,n="/"===u.charAt(0))}return(n?"/":"")+(e=r(o(e.split("/"),function(t){return!!t}),!n).join("/"))||"."},e.normalize=function(t){var n=e.isAbsolute(t),i="/"===u(t,-1);return(t=r(o(t.split("/"),function(t){return!!t}),!n).join("/"))||n||(t="."),t&&i&&(t+="/"),(n?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(o(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,r){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var i=n(t.split("/")),o=n(r.split("/")),u=Math.min(i.length,o.length),f=u,s=0;s<u;s++)if(i[s]!==o[s]){f=s;break}var a=[];for(s=f;s<i.length;s++)a.push("..");return(a=a.concat(o.slice(f))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=i(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},e.basename=function(t,e){var r=i(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){return i(t)[3]};var u="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,r(9))},function(t,e){var r,n,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function f(t){if(r===setTimeout)return setTimeout(t,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(t){r=o}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(t){n=u}}();var s,a=[],h=!1,c=-1;function l(){h&&s&&(h=!1,s.length?a=s.concat(a):c=-1,a.length&&p())}function p(){if(!h){var t=f(l);h=!0;for(var e=a.length;e;){for(s=a,a=[];++c<e;)s&&s[c].run();c=-1,e=a.length}s=null,h=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function d(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];a.push(new g(t,e)),1!==a.length||h||f(p)},g.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.buildVRMBuffer=function(e,r){var n=new t(e.toString(),"utf-8"),i=new t(4);i.writeUInt32LE(1313821514,0);var o=new t(4);o.writeUInt32LE(5130562,0);var u=t.alloc(4);u.writeUInt32LE(n.byteLength,0);var f=t.alloc(4);f.writeUInt32LE(r.byteLength,0);var s=t.concat([new t([103,108,84,70]),new t([2,0,0,0]),new t([0,0,0,0]),u,i,n,f,o,r]);return s.writeUInt32LE(s.byteLength,8),s}}).call(this,r(1).Buffer)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0);e.gizabalifyVRM=function(t){var e=t.getFaceMeshes().find(function(t){var e=t.name;return"Face.M_F00_000_00_Fcl_HA_Fung2"===e||"Face.M_F00_000_Fcl_HA_Fung2"===e});if(!e)throw new n.HandledError("Oops, it VRM looks like not exported from VRoid Studio. (Missing fung2 mesh)");var r=function(e){return t.blendShapeGroups.find(function(t){return t.name===e})};[[r("A"),70],[r("I"),30],[r("U"),30],[r("E"),50],[r("O"),60],[r("Angry"),0],[r("Fun"),0],[r("Joy"),80],[r("Sorrow"),80],[r("Surprised"),90]].forEach(function(r){var i=r[0],o=r[1];if(!i)throw new n.HandledError("Oops, it VRM looks like not exported from VRoid Studio. (Missing blendshape)");i.binds.push({mesh:t.getFaceMesh().index,index:e.index,weight:o})})}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0);e.yaebalifyVRM=function(t){var e=t.getFaceMeshes().find(function(t){var e=t.name;return"Face.M_F00_000_00_Fcl_HA_Fung1_Up"===e||"Face.M_F00_000_Fcl_HA_Fung1_Up"===e});if(!e)throw new n.HandledError("Oops, it VRM looks like not exported from VRoid Studio. (Missing fung2 mesh)");var r=function(e){return t.blendShapeGroups.find(function(t){return t.name===e})};[[r("A"),80],[r("I"),40],[r("U"),30],[r("E"),80],[r("O"),70],[r("Angry"),40],[r("Fun"),0],[r("Joy"),80],[r("Sorrow"),80],[r("Surprised"),80]].forEach(function(r){var i=r[0],o=r[1];if(!i)throw new n.HandledError("Oops, it VRM looks like not exported from VRoid Studio. (Missing blendshape)");i.binds.push({mesh:t.getFaceMesh().index,index:e.index,weight:o})})}}]);