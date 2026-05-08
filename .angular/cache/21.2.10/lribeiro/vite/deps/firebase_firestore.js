import {
  LogLevel,
  Logger,
  __assign,
  __awaiter,
  __extends,
  __generator,
  __read,
  __spread,
  __values,
  init_index_esm,
  init_tslib_es6,
  init_tslib_es62,
  require_index_cjs
} from "./chunk-G5TLJ5FN.js";
import {
  __toESM
} from "./chunk-S35DAJRX.js";

// node_modules/@firebase/firestore/node_modules/tslib/tslib.es6.js
var extendStatics = function(d, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b3) {
    d2.__proto__ = b3;
  } || function(d2, b3) {
    for (var p2 in b3) if (b3.hasOwnProperty(p2)) d2[p2] = b3[p2];
  };
  return extendStatics(d, b2);
};
function __extends2(d, b2) {
  extendStatics(d, b2);
  function __() {
    this.constructor = d;
  }
  d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
function __awaiter2(thisArg, _arguments, P3, generator) {
  function adopt(value) {
    return value instanceof P3 ? value : new P3(function(resolve) {
      resolve(value);
    });
  }
  return new (P3 || (P3 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator2(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y2, t, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_2) try {
      if (f = 1, y2 && (t = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t = y2["return"]) && t.call(y2), 0) : y2.next) && !(t = t.call(y2, op[1])).done) return t;
      if (y2 = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _2.label++;
          return { value: op[1], done: false };
        case 5:
          _2.label++;
          y2 = op[1];
          op = [0];
          continue;
        case 7:
          op = _2.ops.pop();
          _2.trys.pop();
          continue;
        default:
          if (!(t = _2.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _2 = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _2.label = op[1];
            break;
          }
          if (op[0] === 6 && _2.label < t[1]) {
            _2.label = t[1];
            t = op;
            break;
          }
          if (t && _2.label < t[2]) {
            _2.label = t[2];
            _2.ops.push(op);
            break;
          }
          if (t[2]) _2.ops.pop();
          _2.trys.pop();
          continue;
      }
      op = body.call(thisArg, _2);
    } catch (e) {
      op = [6, e];
      y2 = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __spreadArrays() {
  for (var s = 0, i2 = 0, il = arguments.length; i2 < il; i2++) s += arguments[i2].length;
  for (var r2 = Array(s), k3 = 0, i2 = 0; i2 < il; i2++)
    for (var a = arguments[i2], j2 = 0, jl = a.length; j2 < jl; j2++, k3++)
      r2[k3] = a[j2];
  return r2;
}

// node_modules/@firebase/firestore/dist/index.esm.js
var import_app = __toESM(require_index_cjs());
init_index_esm();

// node_modules/@firebase/util/dist/index.esm.js
init_tslib_es6();
var Deferred = (
  /** @class */
  (function() {
    function Deferred2() {
      var _this = this;
      this.reject = function() {
      };
      this.resolve = function() {
      };
      this.promise = new Promise(function(resolve, reject) {
        _this.resolve = resolve;
        _this.reject = reject;
      });
    }
    Deferred2.prototype.wrapCallback = function(callback) {
      var _this = this;
      return function(error, value) {
        if (error) {
          _this.reject(error);
        } else {
          _this.resolve(value);
        }
        if (typeof callback === "function") {
          _this.promise.catch(function() {
          });
          if (callback.length === 1) {
            callback(error);
          } else {
            callback(error, value);
          }
        }
      };
    };
    return Deferred2;
  })()
);
function getUA() {
  if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") {
    return navigator["userAgent"];
  } else {
    return "";
  }
}
function isMobileCordova() {
  return typeof window !== "undefined" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
function isBrowserExtension() {
  var runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
  return typeof runtime === "object" && runtime.id !== void 0;
}
function isReactNative() {
  return typeof navigator === "object" && navigator["product"] === "ReactNative";
}
function isElectron() {
  return getUA().indexOf("Electron/") >= 0;
}
function isIE() {
  var ua3 = getUA();
  return ua3.indexOf("MSIE ") >= 0 || ua3.indexOf("Trident/") >= 0;
}
function isUWP() {
  return getUA().indexOf("MSAppHost/") >= 0;
}
var ERROR_NAME = "FirebaseError";
var FirebaseError = (
  /** @class */
  (function(_super) {
    __extends(FirebaseError2, _super);
    function FirebaseError2(code, message) {
      var _this = _super.call(this, message) || this;
      _this.code = code;
      _this.name = ERROR_NAME;
      Object.setPrototypeOf(_this, FirebaseError2.prototype);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(_this, ErrorFactory.prototype.create);
      }
      return _this;
    }
    return FirebaseError2;
  })(Error)
);
var ErrorFactory = (
  /** @class */
  (function() {
    function ErrorFactory2(service, serviceName, errors) {
      this.service = service;
      this.serviceName = serviceName;
      this.errors = errors;
    }
    ErrorFactory2.prototype.create = function(code) {
      var data = [];
      for (var _i2 = 1; _i2 < arguments.length; _i2++) {
        data[_i2 - 1] = arguments[_i2];
      }
      var customData = data[0] || {};
      var fullCode = this.service + "/" + code;
      var template = this.errors[code];
      var message = template ? replaceTemplate(template, customData) : "Error";
      var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
      var error = new FirebaseError(fullCode, fullMessage);
      for (var _a2 = 0, _b = Object.keys(customData); _a2 < _b.length; _a2++) {
        var key = _b[_a2];
        if (key.slice(-1) !== "_") {
          if (key in error) {
            console.warn('Overwriting FirebaseError base field "' + key + '" can cause unexpected behavior.');
          }
          error[key] = customData[key];
        }
      }
      return error;
    };
    return ErrorFactory2;
  })()
);
function replaceTemplate(template, data) {
  return template.replace(PATTERN, function(_2, key) {
    var value = data[key];
    return value != null ? String(value) : "<" + key + "?>";
  });
}
var PATTERN = /\{\$([^}]+)}/g;
var Sha1 = (
  /** @class */
  (function() {
    function Sha12() {
      this.chain_ = [];
      this.buf_ = [];
      this.W_ = [];
      this.pad_ = [];
      this.inbuf_ = 0;
      this.total_ = 0;
      this.blockSize = 512 / 8;
      this.pad_[0] = 128;
      for (var i2 = 1; i2 < this.blockSize; ++i2) {
        this.pad_[i2] = 0;
      }
      this.reset();
    }
    Sha12.prototype.reset = function() {
      this.chain_[0] = 1732584193;
      this.chain_[1] = 4023233417;
      this.chain_[2] = 2562383102;
      this.chain_[3] = 271733878;
      this.chain_[4] = 3285377520;
      this.inbuf_ = 0;
      this.total_ = 0;
    };
    Sha12.prototype.compress_ = function(buf, offset) {
      if (!offset) {
        offset = 0;
      }
      var W3 = this.W_;
      if (typeof buf === "string") {
        for (var i2 = 0; i2 < 16; i2++) {
          W3[i2] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
          offset += 4;
        }
      } else {
        for (var i2 = 0; i2 < 16; i2++) {
          W3[i2] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
          offset += 4;
        }
      }
      for (var i2 = 16; i2 < 80; i2++) {
        var t = W3[i2 - 3] ^ W3[i2 - 8] ^ W3[i2 - 14] ^ W3[i2 - 16];
        W3[i2] = (t << 1 | t >>> 31) & 4294967295;
      }
      var a = this.chain_[0];
      var b2 = this.chain_[1];
      var c = this.chain_[2];
      var d = this.chain_[3];
      var e = this.chain_[4];
      var f, k3;
      for (var i2 = 0; i2 < 80; i2++) {
        if (i2 < 40) {
          if (i2 < 20) {
            f = d ^ b2 & (c ^ d);
            k3 = 1518500249;
          } else {
            f = b2 ^ c ^ d;
            k3 = 1859775393;
          }
        } else {
          if (i2 < 60) {
            f = b2 & c | d & (b2 | c);
            k3 = 2400959708;
          } else {
            f = b2 ^ c ^ d;
            k3 = 3395469782;
          }
        }
        var t = (a << 5 | a >>> 27) + f + e + k3 + W3[i2] & 4294967295;
        e = d;
        d = c;
        c = (b2 << 30 | b2 >>> 2) & 4294967295;
        b2 = a;
        a = t;
      }
      this.chain_[0] = this.chain_[0] + a & 4294967295;
      this.chain_[1] = this.chain_[1] + b2 & 4294967295;
      this.chain_[2] = this.chain_[2] + c & 4294967295;
      this.chain_[3] = this.chain_[3] + d & 4294967295;
      this.chain_[4] = this.chain_[4] + e & 4294967295;
    };
    Sha12.prototype.update = function(bytes, length) {
      if (bytes == null) {
        return;
      }
      if (length === void 0) {
        length = bytes.length;
      }
      var lengthMinusBlock = length - this.blockSize;
      var n2 = 0;
      var buf = this.buf_;
      var inbuf = this.inbuf_;
      while (n2 < length) {
        if (inbuf === 0) {
          while (n2 <= lengthMinusBlock) {
            this.compress_(bytes, n2);
            n2 += this.blockSize;
          }
        }
        if (typeof bytes === "string") {
          while (n2 < length) {
            buf[inbuf] = bytes.charCodeAt(n2);
            ++inbuf;
            ++n2;
            if (inbuf === this.blockSize) {
              this.compress_(buf);
              inbuf = 0;
              break;
            }
          }
        } else {
          while (n2 < length) {
            buf[inbuf] = bytes[n2];
            ++inbuf;
            ++n2;
            if (inbuf === this.blockSize) {
              this.compress_(buf);
              inbuf = 0;
              break;
            }
          }
        }
      }
      this.inbuf_ = inbuf;
      this.total_ += length;
    };
    Sha12.prototype.digest = function() {
      var digest = [];
      var totalBits = this.total_ * 8;
      if (this.inbuf_ < 56) {
        this.update(this.pad_, 56 - this.inbuf_);
      } else {
        this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
      }
      for (var i2 = this.blockSize - 1; i2 >= 56; i2--) {
        this.buf_[i2] = totalBits & 255;
        totalBits /= 256;
      }
      this.compress_(this.buf_);
      var n2 = 0;
      for (var i2 = 0; i2 < 5; i2++) {
        for (var j2 = 24; j2 >= 0; j2 -= 8) {
          digest[n2] = this.chain_[i2] >> j2 & 255;
          ++n2;
        }
      }
      return digest;
    };
    return Sha12;
  })()
);
var ObserverProxy = (
  /** @class */
  (function() {
    function ObserverProxy2(executor, onNoObservers) {
      var _this = this;
      this.observers = [];
      this.unsubscribes = [];
      this.observerCount = 0;
      this.task = Promise.resolve();
      this.finalized = false;
      this.onNoObservers = onNoObservers;
      this.task.then(function() {
        executor(_this);
      }).catch(function(e) {
        _this.error(e);
      });
    }
    ObserverProxy2.prototype.next = function(value) {
      this.forEachObserver(function(observer) {
        observer.next(value);
      });
    };
    ObserverProxy2.prototype.error = function(error) {
      this.forEachObserver(function(observer) {
        observer.error(error);
      });
      this.close(error);
    };
    ObserverProxy2.prototype.complete = function() {
      this.forEachObserver(function(observer) {
        observer.complete();
      });
      this.close();
    };
    ObserverProxy2.prototype.subscribe = function(nextOrObserver, error, complete) {
      var _this = this;
      var observer;
      if (nextOrObserver === void 0 && error === void 0 && complete === void 0) {
        throw new Error("Missing Observer.");
      }
      if (implementsAnyMethods(nextOrObserver, [
        "next",
        "error",
        "complete"
      ])) {
        observer = nextOrObserver;
      } else {
        observer = {
          next: nextOrObserver,
          error,
          complete
        };
      }
      if (observer.next === void 0) {
        observer.next = noop;
      }
      if (observer.error === void 0) {
        observer.error = noop;
      }
      if (observer.complete === void 0) {
        observer.complete = noop;
      }
      var unsub = this.unsubscribeOne.bind(this, this.observers.length);
      if (this.finalized) {
        this.task.then(function() {
          try {
            if (_this.finalError) {
              observer.error(_this.finalError);
            } else {
              observer.complete();
            }
          } catch (e) {
          }
          return;
        });
      }
      this.observers.push(observer);
      return unsub;
    };
    ObserverProxy2.prototype.unsubscribeOne = function(i2) {
      if (this.observers === void 0 || this.observers[i2] === void 0) {
        return;
      }
      delete this.observers[i2];
      this.observerCount -= 1;
      if (this.observerCount === 0 && this.onNoObservers !== void 0) {
        this.onNoObservers(this);
      }
    };
    ObserverProxy2.prototype.forEachObserver = function(fn2) {
      if (this.finalized) {
        return;
      }
      for (var i2 = 0; i2 < this.observers.length; i2++) {
        this.sendOne(i2, fn2);
      }
    };
    ObserverProxy2.prototype.sendOne = function(i2, fn2) {
      var _this = this;
      this.task.then(function() {
        if (_this.observers !== void 0 && _this.observers[i2] !== void 0) {
          try {
            fn2(_this.observers[i2]);
          } catch (e) {
            if (typeof console !== "undefined" && console.error) {
              console.error(e);
            }
          }
        }
      });
    };
    ObserverProxy2.prototype.close = function(err) {
      var _this = this;
      if (this.finalized) {
        return;
      }
      this.finalized = true;
      if (err !== void 0) {
        this.finalError = err;
      }
      this.task.then(function() {
        _this.observers = void 0;
        _this.onNoObservers = void 0;
      });
    };
    return ObserverProxy2;
  })()
);
function implementsAnyMethods(obj, methods) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  for (var _i2 = 0, methods_1 = methods; _i2 < methods_1.length; _i2++) {
    var method = methods_1[_i2];
    if (method in obj && typeof obj[method] === "function") {
      return true;
    }
  }
  return false;
}
function noop() {
}
var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;

// node_modules/@firebase/webchannel-wrapper/dist/index.esm.js
var extendStatics2 = function(d, b2) {
  extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b3) {
    d2.__proto__ = b3;
  } || function(d2, b3) {
    for (var p2 in b3) if (Object.prototype.hasOwnProperty.call(b3, p2)) d2[p2] = b3[p2];
  };
  return extendStatics2(d, b2);
};
function __extends3(d, b2) {
  extendStatics2(d, b2);
  function __() {
    this.constructor = d;
  }
  d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
function __values2(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i2 = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i2 >= o.length) o = void 0;
      return { value: o && o[i2++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var g;
var goog = goog || {};
var k = commonjsGlobal || self;
function aa() {
}
function ba(a) {
  var b2 = typeof a;
  return "object" != b2 ? b2 : a ? Array.isArray(a) ? "array" : b2 : "null";
}
function ca(a) {
  var b2 = ba(a);
  return "array" == b2 || "object" == b2 && "number" == typeof a.length;
}
function n(a) {
  var b2 = typeof a;
  return "object" == b2 && null != a || "function" == b2;
}
function da(a) {
  return Object.prototype.hasOwnProperty.call(a, ea) && a[ea] || (a[ea] = ++fa);
}
var ea = "closure_uid_" + (1e9 * Math.random() >>> 0);
var fa = 0;
function ha(a, b2, c) {
  return a.call.apply(a.bind, arguments);
}
function ja(a, b2, c) {
  if (!a)
    throw Error();
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b2, e);
    };
  }
  return function() {
    return a.apply(b2, arguments);
  };
}
function p(a, b2, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? p = ha : p = ja;
  return p.apply(null, arguments);
}
function ka(a, b2) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d);
  };
}
var q = Date.now;
function r(a, b2) {
  function c() {
  }
  c.prototype = b2.prototype;
  a.S = b2.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
}
function u() {
  this.j = this.j;
  this.i = this.i;
}
var la = 0;
u.prototype.j = false;
u.prototype.ja = function() {
  if (!this.j && (this.j = true, this.G(), 0 != la)) {
    var a = da(this);
  }
};
u.prototype.G = function() {
  if (this.i)
    for (; this.i.length; )
      this.i.shift()();
};
var na = Array.prototype.indexOf ? function(a, b2) {
  return Array.prototype.indexOf.call(a, b2, void 0);
} : function(a, b2) {
  if ("string" === typeof a)
    return "string" !== typeof b2 || 1 != b2.length ? -1 : a.indexOf(b2, 0);
  for (var c = 0; c < a.length; c++)
    if (c in a && a[c] === b2)
      return c;
  return -1;
};
var oa = Array.prototype.forEach ? function(a, b2, c) {
  Array.prototype.forEach.call(a, b2, c);
} : function(a, b2, c) {
  for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
    f in e && b2.call(c, e[f], f, a);
};
function pa(a) {
  a: {
    var b2 = qa;
    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
      if (e in d && b2.call(void 0, d[e], e, a)) {
        b2 = e;
        break a;
      }
    b2 = -1;
  }
  return 0 > b2 ? null : "string" === typeof a ? a.charAt(b2) : a[b2];
}
function ra(a) {
  return Array.prototype.concat.apply([], arguments);
}
function sa(a) {
  var b2 = a.length;
  if (0 < b2) {
    for (var c = Array(b2), d = 0; d < b2; d++)
      c[d] = a[d];
    return c;
  }
  return [];
}
function ta(a) {
  return /^[\s\xa0]*$/.test(a);
}
var ua = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
};
function v(a, b2) {
  return -1 != a.indexOf(b2);
}
function xa(a, b2) {
  return a < b2 ? -1 : a > b2 ? 1 : 0;
}
var w;
a: {
  ya2 = k.navigator;
  if (ya2) {
    za = ya2.userAgent;
    if (za) {
      w = za;
      break a;
    }
  }
  w = "";
}
var ya2;
var za;
function Aa(a, b2, c) {
  for (var d in a)
    b2.call(c, a[d], d, a);
}
function Ba(a) {
  var b2 = {};
  for (var c in a)
    b2[c] = a[c];
  return b2;
}
var Ca = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Da(a, b2) {
  var c, d;
  for (var e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
      a[c] = d[c];
    for (var f = 0; f < Ca.length; f++)
      c = Ca[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
function Ea(a) {
  Ea[" "](a);
  return a;
}
Ea[" "] = aa;
function Fa(a, b2) {
  var c = Ga;
  return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b2(a);
}
var Ha = v(w, "Opera");
var x = v(w, "Trident") || v(w, "MSIE");
var Ia = v(w, "Edge");
var Ja = Ia || x;
var Ka = v(w, "Gecko") && !(v(w.toLowerCase(), "webkit") && !v(w, "Edge")) && !(v(w, "Trident") || v(w, "MSIE")) && !v(w, "Edge");
var La = v(w.toLowerCase(), "webkit") && !v(w, "Edge");
function Ma() {
  var a = k.document;
  return a ? a.documentMode : void 0;
}
var Na;
a: {
  Oa2 = "", Pa = (function() {
    var a = w;
    if (Ka)
      return /rv:([^\);]+)(\)|;)/.exec(a);
    if (Ia)
      return /Edge\/([\d\.]+)/.exec(a);
    if (x)
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (La)
      return /WebKit\/(\S+)/.exec(a);
    if (Ha)
      return /(?:Version)[ \/]?(\S+)/.exec(a);
  })();
  Pa && (Oa2 = Pa ? Pa[1] : "");
  if (x) {
    Qa = Ma();
    if (null != Qa && Qa > parseFloat(Oa2)) {
      Na = String(Qa);
      break a;
    }
  }
  Na = Oa2;
}
var Oa2;
var Pa;
var Qa;
var Ga = {};
function Ra(a) {
  return Fa(a, function() {
    {
      var b2 = 0;
      var e = ua(String(Na)).split("."), f = ua(String(a)).split("."), h = Math.max(e.length, f.length);
      for (var m = 0; 0 == b2 && m < h; m++) {
        var c = e[m] || "", d = f[m] || "";
        do {
          c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
          d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
          if (0 == c[0].length && 0 == d[0].length)
            break;
          b2 = xa(0 == c[1].length ? 0 : parseInt(c[1], 10), 0 == d[1].length ? 0 : parseInt(d[1], 10)) || xa(0 == c[2].length, 0 == d[2].length) || xa(c[2], d[2]);
          c = c[3];
          d = d[3];
        } while (0 == b2);
      }
    }
    return 0 <= b2;
  });
}
var Sa;
if (k.document && x) {
  Ta2 = Ma();
  Sa = Ta2 ? Ta2 : parseInt(Na, 10) || void 0;
} else
  Sa = void 0;
var Ta2;
var Ua = Sa;
var Va = !x || 9 <= Number(Ua);
var Wa = x && !Ra("9");
var Xa = (function() {
  if (!k.addEventListener || !Object.defineProperty)
    return false;
  var a = false, b2 = Object.defineProperty({}, "passive", { get: function() {
    a = true;
  } });
  try {
    k.addEventListener("test", aa, b2), k.removeEventListener("test", aa, b2);
  } catch (c) {
  }
  return a;
})();
function y(a, b2) {
  this.type = a;
  this.a = this.target = b2;
  this.defaultPrevented = false;
}
y.prototype.b = function() {
  this.defaultPrevented = true;
};
function A(a, b2) {
  y.call(this, a ? a.type : "");
  this.relatedTarget = this.a = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
  this.pointerId = 0;
  this.pointerType = "";
  this.c = null;
  if (a) {
    var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.a = b2;
    if (b2 = a.relatedTarget) {
      if (Ka) {
        a: {
          try {
            Ea(b2.nodeName);
            var e = true;
            break a;
          } catch (f) {
          }
          e = false;
        }
        e || (b2 = null);
      }
    } else
      "mouseover" == c ? b2 = a.fromElement : "mouseout" == c && (b2 = a.toElement);
    this.relatedTarget = b2;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ya[a.pointerType] || "";
    this.c = a;
    a.defaultPrevented && this.b();
  }
}
r(A, y);
var Ya = { 2: "touch", 3: "pen", 4: "mouse" };
A.prototype.b = function() {
  A.S.b.call(this);
  var a = this.c;
  if (a.preventDefault)
    a.preventDefault();
  else if (a.returnValue = false, Wa)
    try {
      if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
        a.keyCode = -1;
    } catch (b2) {
    }
};
var C = "closure_listenable_" + (1e6 * Math.random() | 0);
var Za = 0;
function $a(a, b2, c, d, e) {
  this.listener = a;
  this.proxy = null;
  this.src = b2;
  this.type = c;
  this.capture = !!d;
  this.ca = e;
  this.key = ++Za;
  this.Y = this.Z = false;
}
function ab(a) {
  a.Y = true;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.ca = null;
}
function bb(a) {
  this.src = a;
  this.a = {};
  this.b = 0;
}
bb.prototype.add = function(a, b2, c, d, e) {
  var f = a.toString();
  a = this.a[f];
  a || (a = this.a[f] = [], this.b++);
  var h = cb(a, b2, d, e);
  -1 < h ? (b2 = a[h], c || (b2.Z = false)) : (b2 = new $a(b2, this.src, f, !!d, e), b2.Z = c, a.push(b2));
  return b2;
};
function db(a, b2) {
  var c = b2.type;
  if (c in a.a) {
    var d = a.a[c], e = na(d, b2), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && (ab(b2), 0 == a.a[c].length && (delete a.a[c], a.b--));
  }
}
function cb(a, b2, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.Y && f.listener == b2 && f.capture == !!c && f.ca == d)
      return e;
  }
  return -1;
}
var eb = "closure_lm_" + (1e6 * Math.random() | 0);
var fb = {};
function hb(a, b2, c, d, e) {
  if (d && d.once)
    return ib(a, b2, c, d, e);
  if (Array.isArray(b2)) {
    for (var f = 0; f < b2.length; f++)
      hb(a, b2[f], c, d, e);
    return null;
  }
  c = jb(c);
  return a && a[C] ? a.va(b2, c, n(d) ? !!d.capture : !!d, e) : kb(a, b2, c, false, d, e);
}
function kb(a, b2, c, d, e, f) {
  if (!b2)
    throw Error("Invalid event type");
  var h = n(e) ? !!e.capture : !!e;
  if (h && !Va)
    return null;
  var m = lb(a);
  m || (a[eb] = m = new bb(a));
  c = m.add(b2, c, d, h, f);
  if (c.proxy)
    return c;
  d = mb();
  c.proxy = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener)
    Xa || (e = h), void 0 === e && (e = false), a.addEventListener(b2.toString(), d, e);
  else if (a.attachEvent)
    a.attachEvent(nb(b2.toString()), d);
  else if (a.addListener && a.removeListener)
    a.addListener(d);
  else
    throw Error("addEventListener and attachEvent are unavailable.");
  return c;
}
function mb() {
  var a = ob, b2 = Va ? function(c) {
    return a.call(b2.src, b2.listener, c);
  } : function(c) {
    c = a.call(b2.src, b2.listener, c);
    if (!c)
      return c;
  };
  return b2;
}
function ib(a, b2, c, d, e) {
  if (Array.isArray(b2)) {
    for (var f = 0; f < b2.length; f++)
      ib(a, b2[f], c, d, e);
    return null;
  }
  c = jb(c);
  return a && a[C] ? a.wa(b2, c, n(d) ? !!d.capture : !!d, e) : kb(a, b2, c, true, d, e);
}
function pb(a, b2, c, d, e) {
  if (Array.isArray(b2))
    for (var f = 0; f < b2.length; f++)
      pb(a, b2[f], c, d, e);
  else
    (d = n(d) ? !!d.capture : !!d, c = jb(c), a && a[C]) ? (a = a.c, b2 = String(b2).toString(), b2 in a.a && (f = a.a[b2], c = cb(f, c, d, e), -1 < c && (ab(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b2], a.b--)))) : a && (a = lb(a)) && (b2 = a.a[b2.toString()], a = -1, b2 && (a = cb(b2, c, d, e)), (c = -1 < a ? b2[a] : null) && rb(c));
}
function rb(a) {
  if ("number" !== typeof a && a && !a.Y) {
    var b2 = a.src;
    if (b2 && b2[C])
      db(b2.c, a);
    else {
      var c = a.type, d = a.proxy;
      b2.removeEventListener ? b2.removeEventListener(c, d, a.capture) : b2.detachEvent ? b2.detachEvent(nb(c), d) : b2.addListener && b2.removeListener && b2.removeListener(d);
      (c = lb(b2)) ? (db(c, a), 0 == c.b && (c.src = null, b2[eb] = null)) : ab(a);
    }
  }
}
function nb(a) {
  return a in fb ? fb[a] : fb[a] = "on" + a;
}
function sb(a, b2) {
  var c = a.listener, d = a.ca || a.src;
  a.Z && rb(a);
  return c.call(d, b2);
}
function ob(a, b2) {
  if (a.Y)
    return true;
  if (!Va) {
    if (!b2)
      a: {
        b2 = ["window", "event"];
        for (var c = k, d = 0; d < b2.length; d++)
          if (c = c[b2[d]], null == c) {
            b2 = null;
            break a;
          }
        b2 = c;
      }
    b2 = new A(b2, this);
    return sb(a, b2);
  }
  return sb(a, new A(b2, this));
}
function lb(a) {
  a = a[eb];
  return a instanceof bb ? a : null;
}
var tb = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
function jb(a) {
  if ("function" == ba(a))
    return a;
  a[tb] || (a[tb] = function(b2) {
    return a.handleEvent(b2);
  });
  return a[tb];
}
function D() {
  u.call(this);
  this.c = new bb(this);
  this.J = this;
  this.C = null;
}
r(D, u);
D.prototype[C] = true;
g = D.prototype;
g.addEventListener = function(a, b2, c, d) {
  hb(this, a, b2, c, d);
};
g.removeEventListener = function(a, b2, c, d) {
  pb(this, a, b2, c, d);
};
g.dispatchEvent = function(a) {
  var b2, c = this.C;
  if (c)
    for (b2 = []; c; c = c.C)
      b2.push(c);
  c = this.J;
  var d = a.type || a;
  if ("string" === typeof a)
    a = new y(a, c);
  else if (a instanceof y)
    a.target = a.target || c;
  else {
    var e = a;
    a = new y(d, c);
    Da(a, e);
  }
  e = true;
  if (b2)
    for (var f = b2.length - 1; 0 <= f; f--) {
      var h = a.a = b2[f];
      e = ub(h, d, true, a) && e;
    }
  h = a.a = c;
  e = ub(h, d, true, a) && e;
  e = ub(h, d, false, a) && e;
  if (b2)
    for (f = 0; f < b2.length; f++)
      h = a.a = b2[f], e = ub(h, d, false, a) && e;
  return e;
};
g.G = function() {
  D.S.G.call(this);
  if (this.c) {
    var a = this.c, c;
    for (c in a.a) {
      for (var d = a.a[c], e = 0; e < d.length; e++)
        ab(d[e]);
      delete a.a[c];
      a.b--;
    }
  }
  this.C = null;
};
g.va = function(a, b2, c, d) {
  return this.c.add(String(a), b2, false, c, d);
};
g.wa = function(a, b2, c, d) {
  return this.c.add(String(a), b2, true, c, d);
};
function ub(a, b2, c, d) {
  b2 = a.c.a[String(b2)];
  if (!b2)
    return true;
  b2 = b2.concat();
  for (var e = true, f = 0; f < b2.length; ++f) {
    var h = b2[f];
    if (h && !h.Y && h.capture == c) {
      var m = h.listener, l = h.ca || h.src;
      h.Z && db(a.c, h);
      e = false !== m.call(l, d) && e;
    }
  }
  return e && !d.defaultPrevented;
}
var vb = k.JSON.stringify;
function wb() {
  this.b = this.a = null;
}
var yb = new /** @class */
((function() {
  function class_1(a, b2, c) {
    this.f = c;
    this.c = a;
    this.g = b2;
    this.b = 0;
    this.a = null;
  }
  class_1.prototype.get = function() {
    var a;
    0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c();
    return a;
  };
  return class_1;
})())(function() {
  return new xb();
}, function(a) {
  a.reset();
}, 100);
wb.prototype.add = function(a, b2) {
  var c = yb.get();
  c.set(a, b2);
  this.b ? this.b.next = c : this.a = c;
  this.b = c;
};
function zb() {
  var a = Ab, b2 = null;
  a.a && (b2 = a.a, a.a = a.a.next, a.a || (a.b = null), b2.next = null);
  return b2;
}
function xb() {
  this.next = this.b = this.a = null;
}
xb.prototype.set = function(a, b2) {
  this.a = a;
  this.b = b2;
  this.next = null;
};
xb.prototype.reset = function() {
  this.next = this.b = this.a = null;
};
function Bb(a) {
  k.setTimeout(function() {
    throw a;
  }, 0);
}
function Cb(a, b2) {
  Db || Eb();
  Fb || (Db(), Fb = true);
  Ab.add(a, b2);
}
var Db;
function Eb() {
  var a = k.Promise.resolve(void 0);
  Db = function() {
    a.then(Gb);
  };
}
var Fb = false;
var Ab = new wb();
function Gb() {
  for (var a; a = zb(); ) {
    try {
      a.a.call(a.b);
    } catch (c) {
      Bb(c);
    }
    var b2 = yb;
    b2.g(a);
    b2.b < b2.f && (b2.b++, a.next = b2.a, b2.a = a);
  }
  Fb = false;
}
function Hb(a, b2) {
  D.call(this);
  this.b = a || 1;
  this.a = b2 || k;
  this.f = p(this.Ya, this);
  this.g = q();
}
r(Hb, D);
g = Hb.prototype;
g.aa = false;
g.M = null;
g.Ya = function() {
  if (this.aa) {
    var a = q() - this.g;
    0 < a && a < 0.8 * this.b ? this.M = this.a.setTimeout(this.f, this.b - a) : (this.M && (this.a.clearTimeout(this.M), this.M = null), this.dispatchEvent("tick"), this.aa && (Ib(this), this.start()));
  }
};
g.start = function() {
  this.aa = true;
  this.M || (this.M = this.a.setTimeout(this.f, this.b), this.g = q());
};
function Ib(a) {
  a.aa = false;
  a.M && (a.a.clearTimeout(a.M), a.M = null);
}
g.G = function() {
  Hb.S.G.call(this);
  Ib(this);
  delete this.a;
};
function Jb(a, b2, c) {
  if ("function" == ba(a))
    c && (a = p(a, c));
  else if (a && "function" == typeof a.handleEvent)
    a = p(a.handleEvent, a);
  else
    throw Error("Invalid listener argument");
  return 2147483647 < Number(b2) ? -1 : k.setTimeout(a, b2 || 0);
}
function Kb(a) {
  a.a = Jb(function() {
    a.a = null;
    a.c && (a.c = false, Kb(a));
  }, a.h);
  var b2 = a.b;
  a.b = null;
  a.g.apply(null, b2);
}
var Lb = (
  /** @class */
  (function(_super) {
    __extends3(Lb2, _super);
    function Lb2(a, b2, c) {
      var _this = _super.call(this) || this;
      _this.g = null != c ? a.bind(c) : a;
      _this.h = b2;
      _this.b = null;
      _this.c = false;
      _this.a = null;
      return _this;
    }
    Lb2.prototype.f = function(a) {
      this.b = arguments;
      this.a ? this.c = true : Kb(this);
    };
    Lb2.prototype.G = function() {
      _super.prototype.G.call(this);
      this.a && (k.clearTimeout(this.a), this.a = null, this.c = false, this.b = null);
    };
    return Lb2;
  })(u)
);
function E(a) {
  u.call(this);
  this.b = a;
  this.a = {};
}
r(E, u);
var Mb = [];
function Nb(a, b2, c, d) {
  Array.isArray(c) || (c && (Mb[0] = c.toString()), c = Mb);
  for (var e = 0; e < c.length; e++) {
    var f = hb(b2, c[e], d || a.handleEvent, false, a.b || a);
    if (!f)
      break;
    a.a[f.key] = f;
  }
}
function Ob(a) {
  Aa(a.a, function(b2, c) {
    this.a.hasOwnProperty(c) && rb(b2);
  }, a);
  a.a = {};
}
E.prototype.G = function() {
  E.S.G.call(this);
  Ob(this);
};
E.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Pb() {
  this.a = true;
}
function Qb(a, b2, c, d, e, f) {
  a.info(function() {
    if (a.a)
      if (f) {
        var h = "";
        for (var m = f.split("&"), l = 0; l < m.length; l++) {
          var t = m[l].split("=");
          if (1 < t.length) {
            var B2 = t[0];
            t = t[1];
            var z2 = B2.split("_");
            h = 2 <= z2.length && "type" == z2[1] ? h + (B2 + "=" + t + "&") : h + (B2 + "=redacted&");
          }
        }
      } else
        h = null;
    else
      h = f;
    return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b2 + "\n" + c + "\n" + h;
  });
}
function Rb(a, b2, c, d, e, f, h) {
  a.info(function() {
    return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b2 + "\n" + c + "\n" + f + " " + h;
  });
}
function F(a, b2, c, d) {
  a.info(function() {
    return "XMLHTTP TEXT (" + b2 + "): " + Sb(a, c) + (d ? " " + d : "");
  });
}
function Tb(a, b2) {
  a.info(function() {
    return "TIMEOUT: " + b2;
  });
}
Pb.prototype.info = function() {
};
function Sb(a, b2) {
  if (!a.a)
    return b2;
  if (!b2)
    return null;
  try {
    var c = JSON.parse(b2);
    if (c) {
      for (a = 0; a < c.length; a++)
        if (Array.isArray(c[a])) {
          var d = c[a];
          if (!(2 > d.length)) {
            var e = d[1];
            if (Array.isArray(e) && !(1 > e.length)) {
              var f = e[0];
              if ("noop" != f && "stop" != f && "close" != f)
                for (var h = 1; h < e.length; h++)
                  e[h] = "";
            }
          }
        }
    }
    return vb(c);
  } catch (m) {
    return b2;
  }
}
var Ub = null;
function Vb() {
  return Ub = Ub || new D();
}
function Wb(a) {
  y.call(this, "serverreachability", a);
}
r(Wb, y);
function G(a) {
  var b2 = Vb();
  b2.dispatchEvent(new Wb(b2, a));
}
function Xb(a) {
  y.call(this, "statevent", a);
}
r(Xb, y);
function H(a) {
  var b2 = Vb();
  b2.dispatchEvent(new Xb(b2, a));
}
function Yb(a) {
  y.call(this, "timingevent", a);
}
r(Yb, y);
function I(a, b2) {
  if ("function" != ba(a))
    throw Error("Fn must not be null and must be a function");
  return k.setTimeout(function() {
    a();
  }, b2);
}
var Zb = { NO_ERROR: 0, Za: 1, gb: 2, fb: 3, bb: 4, eb: 5, hb: 6, Da: 7, TIMEOUT: 8, kb: 9 };
var $b = { ab: "complete", ob: "success", Ea: "error", Da: "abort", mb: "ready", nb: "readystatechange", TIMEOUT: "timeout", ib: "incrementaldata", lb: "progress", cb: "downloadprogress", pb: "uploadprogress" };
function ac() {
}
ac.prototype.a = null;
function bc(a) {
  var b2;
  (b2 = a.a) || (b2 = a.a = {});
  return b2;
}
function cc() {
}
var J = { OPEN: "a", $a: "b", Ea: "c", jb: "d" };
function dc() {
  y.call(this, "d");
}
r(dc, y);
function ec() {
  y.call(this, "c");
}
r(ec, y);
var fc;
function gc() {
}
r(gc, ac);
fc = new gc();
function K(a, b2, c, d) {
  this.g = a;
  this.c = b2;
  this.f = c;
  this.T = d || 1;
  this.J = new E(this);
  this.P = hc;
  a = Ja ? 125 : void 0;
  this.R = new Hb(a);
  this.B = null;
  this.b = false;
  this.j = this.l = this.i = this.H = this.u = this.U = this.o = null;
  this.s = [];
  this.a = null;
  this.D = 0;
  this.h = this.m = null;
  this.N = -1;
  this.A = false;
  this.O = 0;
  this.F = null;
  this.W = this.C = this.V = this.I = false;
}
var hc = 45e3;
var ic = {};
var jc = {};
g = K.prototype;
g.setTimeout = function(a) {
  this.P = a;
};
function kc(a, b2, c) {
  a.H = 1;
  a.i = lc(L(b2));
  a.j = c;
  a.I = true;
  mc(a, null);
}
function mc(a, b2) {
  a.u = q();
  M(a);
  a.l = L(a.i);
  var c = a.l, d = a.T;
  Array.isArray(d) || (d = [String(d)]);
  nc(c.b, "t", d);
  a.D = 0;
  a.a = oc(a.g, a.g.C ? b2 : null);
  0 < a.O && (a.F = new Lb(p(a.Ca, a, a.a), a.O));
  Nb(a.J, a.a, "readystatechange", a.Wa);
  b2 = a.B ? Ba(a.B) : {};
  a.j ? (a.m || (a.m = "POST"), b2["Content-Type"] = "application/x-www-form-urlencoded", a.a.ba(a.l, a.m, a.j, b2)) : (a.m = "GET", a.a.ba(a.l, a.m, null, b2));
  G(1);
  Qb(a.c, a.m, a.l, a.f, a.T, a.j);
}
g.Wa = function(a) {
  a = a.target;
  var b2 = this.F;
  b2 && 3 == N(a) ? b2.f() : this.Ca(a);
};
g.Ca = function(a) {
  try {
    if (a == this.a)
      a: {
        var b2 = N(this.a), c = this.a.ua(), d = this.a.X();
        if (!(3 > b2 || 3 == b2 && !Ja && !this.a.$())) {
          this.A || 4 != b2 || 7 == c || (8 == c || 0 >= d ? G(3) : G(2));
          pc(this);
          var e = this.a.X();
          this.N = e;
          var f = this.a.$();
          this.b = 200 == e;
          Rb(this.c, this.m, this.l, this.f, this.T, b2, e);
          if (this.b) {
            if (this.V && !this.C) {
              b: {
                if (this.a) {
                  var h, m = this.a;
                  if ((h = m.a ? m.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !ta(h)) {
                    var l = h;
                    break b;
                  }
                }
                l = null;
              }
              if (l)
                F(this.c, this.f, l, "Initial handshake response via X-HTTP-Initial-Response"), this.C = true, qc(this, l);
              else {
                this.b = false;
                this.h = 3;
                H(12);
                O(this);
                rc(this);
                break a;
              }
            }
            this.I ? (tc(this, b2, f), Ja && this.b && 3 == b2 && (Nb(this.J, this.R, "tick", this.Va), this.R.start())) : (F(this.c, this.f, f, null), qc(this, f));
            4 == b2 && O(this);
            this.b && !this.A && (4 == b2 ? uc(this.g, this) : (this.b = false, M(this)));
          } else
            400 == e && 0 < f.indexOf("Unknown SID") ? (this.h = 3, H(12)) : (this.h = 0, H(13)), O(this), rc(this);
        }
      }
  } catch (t) {
  } finally {
  }
};
function tc(a, b2, c) {
  for (var d = true; !a.A && a.D < c.length; ) {
    var e = vc(a, c);
    if (e == jc) {
      4 == b2 && (a.h = 4, H(14), d = false);
      F(a.c, a.f, null, "[Incomplete Response]");
      break;
    } else if (e == ic) {
      a.h = 4;
      H(15);
      F(a.c, a.f, c, "[Invalid Chunk]");
      d = false;
      break;
    } else
      F(a.c, a.f, e, null), qc(a, e);
  }
  4 == b2 && 0 == c.length && (a.h = 1, H(16), d = false);
  a.b = a.b && d;
  d ? 0 < c.length && !a.W && (a.W = true, b2 = a.g, b2.a == a && b2.V && !b2.F && (b2.c.info("Great, no buffering proxy detected. Bytes received: " + c.length), xc(b2), b2.F = true)) : (F(a.c, a.f, c, "[Invalid Chunked Response]"), O(a), rc(a));
}
g.Va = function() {
  if (this.a) {
    var a = N(this.a), b2 = this.a.$();
    this.D < b2.length && (pc(this), tc(this, a, b2), this.b && 4 != a && M(this));
  }
};
function vc(a, b2) {
  var c = a.D, d = b2.indexOf("\n", c);
  if (-1 == d)
    return jc;
  c = Number(b2.substring(c, d));
  if (isNaN(c))
    return ic;
  d += 1;
  if (d + c > b2.length)
    return jc;
  b2 = b2.substr(d, c);
  a.D = d + c;
  return b2;
}
g.cancel = function() {
  this.A = true;
  O(this);
};
function M(a) {
  a.U = q() + a.P;
  yc(a, a.P);
}
function yc(a, b2) {
  if (null != a.o)
    throw Error("WatchDog timer not null");
  a.o = I(p(a.Ua, a), b2);
}
function pc(a) {
  a.o && (k.clearTimeout(a.o), a.o = null);
}
g.Ua = function() {
  this.o = null;
  var a = q();
  0 <= a - this.U ? (Tb(this.c, this.l), 2 != this.H && (G(3), H(17)), O(this), this.h = 2, rc(this)) : yc(this, this.U - a);
};
function rc(a) {
  0 == a.g.v || a.A || uc(a.g, a);
}
function O(a) {
  pc(a);
  var b2 = a.F;
  b2 && "function" == typeof b2.ja && b2.ja();
  a.F = null;
  Ib(a.R);
  Ob(a.J);
  a.a && (b2 = a.a, a.a = null, b2.abort(), b2.ja());
}
function qc(a, b2) {
  try {
    var c = a.g;
    if (0 != c.v && (c.a == a || zc(c.b, a))) {
      if (c.I = a.N, !a.C && zc(c.b, a) && 3 == c.v) {
        try {
          var d = c.ka.a.parse(b2);
        } catch (sc) {
          d = null;
        }
        if (Array.isArray(d) && 3 == d.length) {
          var e = d;
          if (0 == e[0])
            a: {
              if (!c.j) {
                if (c.a)
                  if (c.a.u + 3e3 < a.u)
                    Ac(c), Bc(c);
                  else
                    break a;
                Cc(c);
                H(18);
              }
            }
          else
            c.oa = e[1], 0 < c.oa - c.P && 37500 > e[2] && c.H && 0 == c.o && !c.m && (c.m = I(p(c.Ra, c), 6e3));
          if (1 >= Dc(c.b) && c.ea) {
            try {
              c.ea();
            } catch (sc) {
            }
            c.ea = void 0;
          }
        } else
          P(c, 11);
      } else if ((a.C || c.a == a) && Ac(c), !ta(b2))
        for (b2 = d = c.ka.a.parse(b2), d = 0; d < b2.length; d++)
          if (e = b2[d], c.P = e[0], e = e[1], 2 == c.v)
            if ("c" == e[0]) {
              c.J = e[1];
              c.ga = e[2];
              var f = e[3];
              null != f && (c.ha = f, c.c.info("VER=" + c.ha));
              var h = e[4];
              null != h && (c.pa = h, c.c.info("SVER=" + c.pa));
              var m = e[5];
              if (null != m && "number" === typeof m && 0 < m) {
                var l = 1.5 * m;
                c.D = l;
                c.c.info("backChannelRequestTimeoutMs_=" + l);
              }
              l = c;
              var t = a.a;
              if (t) {
                var B2 = t.a ? t.a.getResponseHeader("X-Client-Wire-Protocol") : null;
                if (B2) {
                  var z2 = l.b;
                  !z2.a && (v(B2, "spdy") || v(B2, "quic") || v(B2, "h2")) && (z2.f = z2.g, z2.a = /* @__PURE__ */ new Set(), z2.b && (Ec(z2, z2.b), z2.b = null));
                }
                if (l.A) {
                  var qb = t.a ? t.a.getResponseHeader("X-HTTP-Session-Id") : null;
                  qb && (l.na = qb, Q(l.B, l.A, qb));
                }
              }
              c.v = 3;
              c.f && c.f.ta();
              c.V && (c.N = q() - a.u, c.c.info("Handshake RTT: " + c.N + "ms"));
              l = c;
              var va2 = a;
              l.la = Fc(l, l.C ? l.ga : null, l.fa);
              if (va2.C) {
                Gc(l.b, va2);
                var wa2 = va2, wc = l.D;
                wc && wa2.setTimeout(wc);
                wa2.o && (pc(wa2), M(wa2));
                l.a = va2;
              } else
                Hc(l);
              0 < c.g.length && Ic(c);
            } else
              "stop" != e[0] && "close" != e[0] || P(c, 7);
          else
            3 == c.v && ("stop" == e[0] || "close" == e[0] ? "stop" == e[0] ? P(c, 7) : Jc(c) : "noop" != e[0] && c.f && c.f.sa(e), c.o = 0);
    }
    G(4);
  } catch (sc) {
  }
}
function Kc(a) {
  if (a.K && "function" == typeof a.K)
    return a.K();
  if ("string" === typeof a)
    return a.split("");
  if (ca(a)) {
    for (var b2 = [], c = a.length, d = 0; d < c; d++)
      b2.push(a[d]);
    return b2;
  }
  b2 = [];
  c = 0;
  for (d in a)
    b2[c++] = a[d];
  return a = b2;
}
function Lc(a, b2) {
  if (a.forEach && "function" == typeof a.forEach)
    a.forEach(b2, void 0);
  else if (ca(a) || "string" === typeof a)
    oa(a, b2, void 0);
  else {
    if (a.L && "function" == typeof a.L)
      var c = a.L();
    else if (a.K && "function" == typeof a.K)
      c = void 0;
    else if (ca(a) || "string" === typeof a) {
      c = [];
      for (var d = a.length, e = 0; e < d; e++)
        c.push(e);
    } else
      for (e in c = [], d = 0, a)
        c[d++] = e;
    d = Kc(a);
    e = d.length;
    for (var f = 0; f < e; f++)
      b2.call(void 0, d[f], c && c[f], a);
  }
}
function R(a, b2) {
  this.b = {};
  this.a = [];
  this.c = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2)
      throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2)
      this.set(arguments[d], arguments[d + 1]);
  } else if (a)
    if (a instanceof R)
      for (c = a.L(), d = 0; d < c.length; d++)
        this.set(c[d], a.get(c[d]));
    else
      for (d in a)
        this.set(d, a[d]);
}
g = R.prototype;
g.K = function() {
  Mc(this);
  for (var a = [], b2 = 0; b2 < this.a.length; b2++)
    a.push(this.b[this.a[b2]]);
  return a;
};
g.L = function() {
  Mc(this);
  return this.a.concat();
};
function Mc(a) {
  if (a.c != a.a.length) {
    for (var b2 = 0, c = 0; b2 < a.a.length; ) {
      var d = a.a[b2];
      S(a.b, d) && (a.a[c++] = d);
      b2++;
    }
    a.a.length = c;
  }
  if (a.c != a.a.length) {
    var e = {};
    for (c = b2 = 0; b2 < a.a.length; )
      d = a.a[b2], S(e, d) || (a.a[c++] = d, e[d] = 1), b2++;
    a.a.length = c;
  }
}
g.get = function(a, b2) {
  return S(this.b, a) ? this.b[a] : b2;
};
g.set = function(a, b2) {
  S(this.b, a) || (this.c++, this.a.push(a));
  this.b[a] = b2;
};
g.forEach = function(a, b2) {
  for (var c = this.L(), d = 0; d < c.length; d++) {
    var e = c[d], f = this.get(e);
    a.call(b2, f, e, this);
  }
};
function S(a, b2) {
  return Object.prototype.hasOwnProperty.call(a, b2);
}
var Nc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Oc(a, b2) {
  if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
      var d = a[c].indexOf("="), e = null;
      if (0 <= d) {
        var f = a[c].substring(0, d);
        e = a[c].substring(d + 1);
      } else
        f = a[c];
      b2(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
  }
}
function T(a, b2) {
  this.c = this.j = this.f = "";
  this.h = null;
  this.i = this.g = "";
  this.a = false;
  if (a instanceof T) {
    this.a = void 0 !== b2 ? b2 : a.a;
    Pc(this, a.f);
    this.j = a.j;
    Qc(this, a.c);
    Rc(this, a.h);
    this.g = a.g;
    b2 = a.b;
    var c = new U();
    c.c = b2.c;
    b2.a && (c.a = new R(b2.a), c.b = b2.b);
    Sc(this, c);
    this.i = a.i;
  } else
    a && (c = String(a).match(Nc)) ? (this.a = !!b2, Pc(this, c[1] || "", true), this.j = Tc(c[2] || ""), Qc(this, c[3] || "", true), Rc(this, c[4]), this.g = Tc(c[5] || "", true), Sc(this, c[6] || "", true), this.i = Tc(c[7] || "")) : (this.a = !!b2, this.b = new U(null, this.a));
}
T.prototype.toString = function() {
  var a = [], b2 = this.f;
  b2 && a.push(Uc(b2, Vc, true), ":");
  var c = this.c;
  if (c || "file" == b2)
    a.push("//"), (b2 = this.j) && a.push(Uc(b2, Vc, true), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c));
  if (c = this.g)
    this.c && "/" != c.charAt(0) && a.push("/"), a.push(Uc(c, "/" == c.charAt(0) ? Wc : Xc, true));
  (c = this.b.toString()) && a.push("?", c);
  (c = this.i) && a.push("#", Uc(c, Yc));
  return a.join("");
};
function L(a) {
  return new T(a);
}
function Pc(a, b2, c) {
  a.f = c ? Tc(b2, true) : b2;
  a.f && (a.f = a.f.replace(/:$/, ""));
}
function Qc(a, b2, c) {
  a.c = c ? Tc(b2, true) : b2;
}
function Rc(a, b2) {
  if (b2) {
    b2 = Number(b2);
    if (isNaN(b2) || 0 > b2)
      throw Error("Bad port number " + b2);
    a.h = b2;
  } else
    a.h = null;
}
function Sc(a, b2, c) {
  b2 instanceof U ? (a.b = b2, Zc(a.b, a.a)) : (c || (b2 = Uc(b2, $c)), a.b = new U(b2, a.a));
}
function Q(a, b2, c) {
  a.b.set(b2, c);
}
function lc(a) {
  Q(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36));
  return a;
}
function ad(a) {
  return a instanceof T ? L(a) : new T(a, void 0);
}
function bd(a, b2, c, d) {
  var e = new T(null, void 0);
  a && Pc(e, a);
  b2 && Qc(e, b2);
  c && Rc(e, c);
  d && (e.g = d);
  return e;
}
function Tc(a, b2) {
  return a ? b2 ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}
function Uc(a, b2, c) {
  return "string" === typeof a ? (a = encodeURI(a).replace(b2, cd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function cd(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var Vc = /[#\/\?@]/g;
var Xc = /[#\?:]/g;
var Wc = /[#\?]/g;
var $c = /[#\?@]/g;
var Yc = /#/g;
function U(a, b2) {
  this.b = this.a = null;
  this.c = a || null;
  this.f = !!b2;
}
function V(a) {
  a.a || (a.a = new R(), a.b = 0, a.c && Oc(a.c, function(b2, c) {
    a.add(decodeURIComponent(b2.replace(/\+/g, " ")), c);
  }));
}
g = U.prototype;
g.add = function(a, b2) {
  V(this);
  this.c = null;
  a = W(this, a);
  var c = this.a.get(a);
  c || this.a.set(a, c = []);
  c.push(b2);
  this.b += 1;
  return this;
};
function dd(a, b2) {
  V(a);
  b2 = W(a, b2);
  S(a.a.b, b2) && (a.c = null, a.b -= a.a.get(b2).length, a = a.a, S(a.b, b2) && (delete a.b[b2], a.c--, a.a.length > 2 * a.c && Mc(a)));
}
function ed(a, b2) {
  V(a);
  b2 = W(a, b2);
  return S(a.a.b, b2);
}
g.forEach = function(a, b2) {
  V(this);
  this.a.forEach(function(c, d) {
    oa(c, function(e) {
      a.call(b2, e, d, this);
    }, this);
  }, this);
};
g.L = function() {
  V(this);
  for (var a = this.a.K(), b2 = this.a.L(), c = [], d = 0; d < b2.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++)
      c.push(b2[d]);
  return c;
};
g.K = function(a) {
  V(this);
  var b2 = [];
  if ("string" === typeof a)
    ed(this, a) && (b2 = ra(b2, this.a.get(W(this, a))));
  else {
    a = this.a.K();
    for (var c = 0; c < a.length; c++)
      b2 = ra(b2, a[c]);
  }
  return b2;
};
g.set = function(a, b2) {
  V(this);
  this.c = null;
  a = W(this, a);
  ed(this, a) && (this.b -= this.a.get(a).length);
  this.a.set(a, [b2]);
  this.b += 1;
  return this;
};
g.get = function(a, b2) {
  if (!a)
    return b2;
  a = this.K(a);
  return 0 < a.length ? String(a[0]) : b2;
};
function nc(a, b2, c) {
  dd(a, b2);
  0 < c.length && (a.c = null, a.a.set(W(a, b2), sa(c)), a.b += c.length);
}
g.toString = function() {
  if (this.c)
    return this.c;
  if (!this.a)
    return "";
  for (var a = [], b2 = this.a.L(), c = 0; c < b2.length; c++) {
    var d = b2[c], e = encodeURIComponent(String(d));
    d = this.K(d);
    for (var f = 0; f < d.length; f++) {
      var h = e;
      "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
      a.push(h);
    }
  }
  return this.c = a.join("&");
};
function W(a, b2) {
  b2 = String(b2);
  a.f && (b2 = b2.toLowerCase());
  return b2;
}
function Zc(a, b2) {
  b2 && !a.f && (V(a), a.c = null, a.a.forEach(function(c, d) {
    var e = d.toLowerCase();
    d != e && (dd(this, d), nc(this, e, c));
  }, a));
  a.f = b2;
}
function fd(a, b2) {
  this.b = a;
  this.a = b2;
}
function gd(a) {
  this.g = a || hd;
  k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.ia && k.ia.ya && k.ia.ya() && k.ia.ya().qb);
  this.f = a ? this.g : 1;
  this.a = null;
  1 < this.f && (this.a = /* @__PURE__ */ new Set());
  this.b = null;
  this.c = [];
}
var hd = 10;
function id(a) {
  return a.b ? true : a.a ? a.a.size >= a.f : false;
}
function Dc(a) {
  return a.b ? 1 : a.a ? a.a.size : 0;
}
function zc(a, b2) {
  return a.b ? a.b == b2 : a.a ? a.a.has(b2) : false;
}
function Ec(a, b2) {
  a.a ? a.a.add(b2) : a.b = b2;
}
function Gc(a, b2) {
  a.b && a.b == b2 ? a.b = null : a.a && a.a.has(b2) && a.a.delete(b2);
}
gd.prototype.cancel = function() {
  var e_1, _a2;
  this.c = jd(this);
  if (this.b)
    this.b.cancel(), this.b = null;
  else if (this.a && 0 !== this.a.size) {
    try {
      for (var _b = __values2(this.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var a = _c.value;
        a.cancel();
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    this.a.clear();
  }
};
function jd(a) {
  var e_2, _a2;
  if (null != a.b)
    return a.c.concat(a.b.s);
  if (null != a.a && 0 !== a.a.size) {
    var b2 = a.c;
    try {
      for (var _b = __values2(a.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var c = _c.value;
        b2 = b2.concat(c.s);
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
    return b2;
  }
  return sa(a.c);
}
function kd() {
}
kd.prototype.stringify = function(a) {
  return k.JSON.stringify(a, void 0);
};
kd.prototype.parse = function(a) {
  return k.JSON.parse(a, void 0);
};
function ld() {
  this.a = new kd();
}
function md(a, b2, c) {
  var d = c || "";
  try {
    Lc(a, function(e, f) {
      var h = e;
      n(e) && (h = vb(e));
      b2.push(d + f + "=" + encodeURIComponent(h));
    });
  } catch (e) {
    throw b2.push(d + "type=" + encodeURIComponent("_badmap")), e;
  }
}
function nd(a, b2) {
  var c = new Pb();
  if (k.Image) {
    var d = new Image();
    d.onload = ka(od, c, d, "TestLoadImage: loaded", true, b2);
    d.onerror = ka(od, c, d, "TestLoadImage: error", false, b2);
    d.onabort = ka(od, c, d, "TestLoadImage: abort", false, b2);
    d.ontimeout = ka(od, c, d, "TestLoadImage: timeout", false, b2);
    k.setTimeout(function() {
      if (d.ontimeout)
        d.ontimeout();
    }, 1e4);
    d.src = a;
  } else
    b2(false);
}
function od(a, b2, c, d, e) {
  try {
    b2.onload = null, b2.onerror = null, b2.onabort = null, b2.ontimeout = null, e(d);
  } catch (f) {
  }
}
var pd = k.JSON.parse;
function X(a) {
  D.call(this);
  this.headers = new R();
  this.H = a || null;
  this.b = false;
  this.s = this.a = null;
  this.B = "";
  this.h = 0;
  this.f = "";
  this.g = this.A = this.l = this.u = false;
  this.o = 0;
  this.m = null;
  this.I = qd;
  this.D = this.F = false;
}
r(X, D);
var qd = "";
var rd = /^https?$/i;
var sd = ["POST", "PUT"];
g = X.prototype;
g.ba = function(a, b2, c, d) {
  if (this.a)
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + a);
  b2 = b2 ? b2.toUpperCase() : "GET";
  this.B = a;
  this.f = "";
  this.h = 0;
  this.u = false;
  this.b = true;
  this.a = new XMLHttpRequest();
  this.s = this.H ? bc(this.H) : bc(fc);
  this.a.onreadystatechange = p(this.za, this);
  try {
    this.A = true, this.a.open(b2, String(a), true), this.A = false;
  } catch (f) {
    td(this, f);
    return;
  }
  a = c || "";
  var e = new R(this.headers);
  d && Lc(d, function(f, h) {
    e.set(h, f);
  });
  d = pa(e.L());
  c = k.FormData && a instanceof k.FormData;
  !(0 <= na(sd, b2)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  e.forEach(function(f, h) {
    this.a.setRequestHeader(h, f);
  }, this);
  this.I && (this.a.responseType = this.I);
  "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);
  try {
    ud(this), 0 < this.o && ((this.D = vd(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = p(this.xa, this)) : this.m = Jb(this.xa, this.o, this)), this.l = true, this.a.send(a), this.l = false;
  } catch (f) {
    td(this, f);
  }
};
function vd(a) {
  return x && Ra(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout;
}
function qa(a) {
  return "content-type" == a.toLowerCase();
}
g.xa = function() {
  "undefined" != typeof goog && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8));
};
function td(a, b2) {
  a.b = false;
  a.a && (a.g = true, a.a.abort(), a.g = false);
  a.f = b2;
  a.h = 5;
  wd(a);
  xd(a);
}
function wd(a) {
  a.u || (a.u = true, a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
g.abort = function(a) {
  this.a && this.b && (this.b = false, this.g = true, this.a.abort(), this.g = false, this.h = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), xd(this));
};
g.G = function() {
  this.a && (this.b && (this.b = false, this.g = true, this.a.abort(), this.g = false), xd(this, true));
  X.S.G.call(this);
};
g.za = function() {
  this.j || (this.A || this.l || this.g ? yd(this) : this.Ta());
};
g.Ta = function() {
  yd(this);
};
function yd(a) {
  if (a.b && "undefined" != typeof goog && (!a.s[1] || 4 != N(a) || 2 != a.X())) {
    if (a.l && 4 == N(a))
      Jb(a.za, 0, a);
    else if (a.dispatchEvent("readystatechange"), 4 == N(a)) {
      a.b = false;
      try {
        var b2 = a.X();
        a: switch (b2) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var c = true;
            break a;
          default:
            c = false;
        }
        var d;
        if (!(d = c)) {
          var e;
          if (e = 0 === b2) {
            var f = String(a.B).match(Nc)[1] || null;
            if (!f && k.self && k.self.location) {
              var h = k.self.location.protocol;
              f = h.substr(0, h.length - 1);
            }
            e = !rd.test(f ? f.toLowerCase() : "");
          }
          d = e;
        }
        if (d)
          a.dispatchEvent("complete"), a.dispatchEvent("success");
        else {
          a.h = 6;
          try {
            var m = 2 < N(a) ? a.a.statusText : "";
          } catch (l) {
            m = "";
          }
          a.f = m + " [" + a.X() + "]";
          wd(a);
        }
      } finally {
        xd(a);
      }
    }
  }
}
function xd(a, b2) {
  if (a.a) {
    ud(a);
    var c = a.a, d = a.s[0] ? aa : null;
    a.a = null;
    a.s = null;
    b2 || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
    }
  }
}
function ud(a) {
  a.a && a.D && (a.a.ontimeout = null);
  a.m && (k.clearTimeout(a.m), a.m = null);
}
function N(a) {
  return a.a ? a.a.readyState : 0;
}
g.X = function() {
  try {
    return 2 < N(this) ? this.a.status : -1;
  } catch (a) {
    return -1;
  }
};
g.$ = function() {
  try {
    return this.a ? this.a.responseText : "";
  } catch (a) {
    return "";
  }
};
g.Na = function(a) {
  if (this.a) {
    var b2 = this.a.responseText;
    a && 0 == b2.indexOf(a) && (b2 = b2.substring(a.length));
    return pd(b2);
  }
};
g.ua = function() {
  return this.h;
};
g.Qa = function() {
  return "string" === typeof this.f ? this.f : String(this.f);
};
function zd(a) {
  var b2 = "";
  Aa(a, function(c, d) {
    b2 += d;
    b2 += ":";
    b2 += c;
    b2 += "\r\n";
  });
  return b2;
}
function Ad(a, b2, c) {
  a: {
    for (d in c) {
      var d = false;
      break a;
    }
    d = true;
  }
  d || (c = zd(c), "string" === typeof a ? null != c && encodeURIComponent(String(c)) : Q(a, b2, c));
}
function Bd(a, b2, c) {
  return c && c.internalChannelParams ? c.internalChannelParams[a] || b2 : b2;
}
function Cd(a) {
  this.pa = 0;
  this.g = [];
  this.c = new Pb();
  this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.W = this.i = this.O = this.l = null;
  this.La = this.R = 0;
  this.Ia = Bd("failFast", false, a);
  this.H = this.m = this.j = this.h = this.f = null;
  this.T = true;
  this.I = this.oa = this.P = -1;
  this.U = this.o = this.u = 0;
  this.Fa = Bd("baseRetryDelayMs", 5e3, a);
  this.Ma = Bd("retryDelaySeedMs", 1e4, a);
  this.Ja = Bd("forwardChannelMaxRetries", 2, a);
  this.ma = Bd("forwardChannelRequestTimeoutMs", 2e4, a);
  this.Ka = a && a.g || void 0;
  this.D = void 0;
  this.C = a && a.supportsCrossDomainXhr || false;
  this.J = "";
  this.b = new gd(a && a.concurrentRequestLimit);
  this.ka = new ld();
  this.da = a && a.fastHandshake || false;
  this.Ga = a && a.b || false;
  a && a.f && (this.c.a = false);
  a && a.forceLongPolling && (this.T = false);
  this.V = !this.da && this.T && a && a.c || false;
  this.ea = void 0;
  this.N = 0;
  this.F = false;
  this.s = null;
}
g = Cd.prototype;
g.ha = 8;
g.v = 1;
function Jc(a) {
  Dd(a);
  if (3 == a.v) {
    var b2 = a.R++, c = L(a.B);
    Q(c, "SID", a.J);
    Q(c, "RID", b2);
    Q(c, "TYPE", "terminate");
    Ed(a, c);
    b2 = new K(a, a.c, b2, void 0);
    b2.H = 2;
    b2.i = lc(L(c));
    c = false;
    k.navigator && k.navigator.sendBeacon && (c = k.navigator.sendBeacon(b2.i.toString(), ""));
    !c && k.Image && (new Image().src = b2.i, c = true);
    c || (b2.a = oc(b2.g, null), b2.a.ba(b2.i));
    b2.u = q();
    M(b2);
  }
  Fd(a);
}
function Bc(a) {
  a.a && (xc(a), a.a.cancel(), a.a = null);
}
function Dd(a) {
  Bc(a);
  a.j && (k.clearTimeout(a.j), a.j = null);
  Ac(a);
  a.b.cancel();
  a.h && ("number" === typeof a.h && k.clearTimeout(a.h), a.h = null);
}
function Gd(a, b2) {
  a.g.push(new fd(a.La++, b2));
  3 == a.v && Ic(a);
}
function Ic(a) {
  id(a.b) || a.h || (a.h = true, Cb(a.Ba, a), a.u = 0);
}
function Hd(a, b2) {
  if (Dc(a.b) >= a.b.f - (a.h ? 1 : 0))
    return false;
  if (a.h)
    return a.g = b2.s.concat(a.g), true;
  if (1 == a.v || 2 == a.v || a.u >= (a.Ia ? 0 : a.Ja))
    return false;
  a.h = I(p(a.Ba, a, b2), Id(a, a.u));
  a.u++;
  return true;
}
g.Ba = function(a) {
  if (this.h)
    if (this.h = null, 1 == this.v) {
      if (!a) {
        this.R = Math.floor(1e5 * Math.random());
        a = this.R++;
        var b2 = new K(this, this.c, a, void 0), c = this.l;
        this.O && (c ? (c = Ba(c), Da(c, this.O)) : c = this.O);
        null === this.i && (b2.B = c);
        var d;
        if (this.da)
          a: {
            for (var e = d = 0; e < this.g.length; e++) {
              b: {
                var f = this.g[e];
                if ("__data__" in f.a && (f = f.a.__data__, "string" === typeof f)) {
                  f = f.length;
                  break b;
                }
                f = void 0;
              }
              if (void 0 === f)
                break;
              d += f;
              if (4096 < d) {
                d = e;
                break a;
              }
              if (4096 === d || e === this.g.length - 1) {
                d = e + 1;
                break a;
              }
            }
            d = 1e3;
          }
        else
          d = 1e3;
        d = Jd(this, b2, d);
        e = L(this.B);
        Q(e, "RID", a);
        Q(e, "CVER", 22);
        this.A && Q(e, "X-HTTP-Session-Id", this.A);
        Ed(this, e);
        this.i && c && Ad(e, this.i, c);
        Ec(this.b, b2);
        this.Ga && Q(e, "TYPE", "init");
        this.da ? (Q(e, "$req", d), Q(e, "SID", "null"), b2.V = true, kc(b2, e, null)) : kc(b2, e, d);
        this.v = 2;
      }
    } else
      3 == this.v && (a ? Kd(this, a) : 0 == this.g.length || id(this.b) || Kd(this));
};
function Kd(a, b2) {
  var c;
  b2 ? c = b2.f : c = a.R++;
  var d = L(a.B);
  Q(d, "SID", a.J);
  Q(d, "RID", c);
  Q(d, "AID", a.P);
  Ed(a, d);
  a.i && a.l && Ad(d, a.i, a.l);
  c = new K(a, a.c, c, a.u + 1);
  null === a.i && (c.B = a.l);
  b2 && (a.g = b2.s.concat(a.g));
  b2 = Jd(a, c, 1e3);
  c.setTimeout(Math.round(0.5 * a.ma) + Math.round(0.5 * a.ma * Math.random()));
  Ec(a.b, c);
  kc(c, d, b2);
}
function Ed(a, b2) {
  a.f && Lc({}, function(c, d) {
    Q(b2, d, c);
  });
}
function Jd(a, b2, c) {
  c = Math.min(a.g.length, c);
  var d = a.f ? p(a.f.Ha, a.f, a) : null;
  a: for (var e = a.g, f = -1; ; ) {
    var h = ["count=" + c];
    -1 == f ? 0 < c ? (f = e[0].b, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
    for (var m = true, l = 0; l < c; l++) {
      var t = e[l].b, B2 = e[l].a;
      t -= f;
      if (0 > t)
        f = Math.max(0, e[l].b - 100), m = false;
      else
        try {
          md(B2, h, "req" + t + "_");
        } catch (z2) {
          d && d(B2);
        }
    }
    if (m) {
      d = h.join("&");
      break a;
    }
  }
  a = a.g.splice(0, c);
  b2.s = a;
  return d;
}
function Hc(a) {
  a.a || a.j || (a.U = 1, Cb(a.Aa, a), a.o = 0);
}
function Cc(a) {
  if (a.a || a.j || 3 <= a.o)
    return false;
  a.U++;
  a.j = I(p(a.Aa, a), Id(a, a.o));
  a.o++;
  return true;
}
g.Aa = function() {
  this.j = null;
  Ld(this);
  if (this.V && !(this.F || null == this.a || 0 >= this.N)) {
    var a = 2 * this.N;
    this.c.info("BP detection timer enabled: " + a);
    this.s = I(p(this.Sa, this), a);
  }
};
g.Sa = function() {
  this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.H = false, this.F = true, Bc(this), Ld(this));
};
function xc(a) {
  null != a.s && (k.clearTimeout(a.s), a.s = null);
}
function Ld(a) {
  a.a = new K(a, a.c, "rpc", a.U);
  null === a.i && (a.a.B = a.l);
  a.a.O = 0;
  var b2 = L(a.la);
  Q(b2, "RID", "rpc");
  Q(b2, "SID", a.J);
  Q(b2, "CI", a.H ? "0" : "1");
  Q(b2, "AID", a.P);
  Ed(a, b2);
  Q(b2, "TYPE", "xmlhttp");
  a.i && a.l && Ad(b2, a.i, a.l);
  a.D && a.a.setTimeout(a.D);
  var c = a.a;
  a = a.ga;
  c.H = 1;
  c.i = lc(L(b2));
  c.j = null;
  c.I = true;
  mc(c, a);
}
g.Ra = function() {
  null != this.m && (this.m = null, Bc(this), Cc(this), H(19));
};
function Ac(a) {
  null != a.m && (k.clearTimeout(a.m), a.m = null);
}
function uc(a, b2) {
  var c = null;
  if (a.a == b2) {
    Ac(a);
    xc(a);
    a.a = null;
    var d = 2;
  } else if (zc(a.b, b2))
    c = b2.s, Gc(a.b, b2), d = 1;
  else
    return;
  a.I = b2.N;
  if (0 != a.v) {
    if (b2.b)
      if (1 == d) {
        c = b2.j ? b2.j.length : 0;
        b2 = q() - b2.u;
        var e = a.u;
        d = Vb();
        d.dispatchEvent(new Yb(d, c, b2, e));
        Ic(a);
      } else
        Hc(a);
    else if (e = b2.h, 3 == e || 0 == e && 0 < a.I || !(1 == d && Hd(a, b2) || 2 == d && Cc(a)))
      switch (c && 0 < c.length && (b2 = a.b, b2.c = b2.c.concat(c)), e) {
        case 1:
          P(a, 5);
          break;
        case 4:
          P(a, 10);
          break;
        case 3:
          P(a, 6);
          break;
        default:
          P(a, 2);
      }
  }
}
function Id(a, b2) {
  var c = a.Fa + Math.floor(Math.random() * a.Ma);
  a.f || (c *= 2);
  return c * b2;
}
function P(a, b2) {
  a.c.info("Error code " + b2);
  if (2 == b2) {
    var c = null;
    a.f && (c = null);
    var d = p(a.Xa, a);
    c || (c = new T("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || Pc(c, "https"), lc(c));
    nd(c.toString(), d);
  } else
    H(2);
  a.v = 0;
  a.f && a.f.ra(b2);
  Fd(a);
  Dd(a);
}
g.Xa = function(a) {
  a ? (this.c.info("Successfully pinged google.com"), H(2)) : (this.c.info("Failed to ping google.com"), H(1));
};
function Fd(a) {
  a.v = 0;
  a.I = -1;
  if (a.f) {
    if (0 != jd(a.b).length || 0 != a.g.length)
      a.b.c.length = 0, sa(a.g), a.g.length = 0;
    a.f.qa();
  }
}
function Fc(a, b2, c) {
  var d = ad(c);
  if ("" != d.c)
    b2 && Qc(d, b2 + "." + d.c), Rc(d, d.h);
  else {
    var e = k.location;
    d = bd(e.protocol, b2 ? b2 + "." + e.hostname : e.hostname, +e.port, c);
  }
  a.W && Aa(a.W, function(f, h) {
    Q(d, h, f);
  });
  b2 = a.A;
  c = a.na;
  b2 && c && Q(d, b2, c);
  Q(d, "VER", a.ha);
  Ed(a, d);
  return d;
}
function oc(a, b2) {
  if (b2 && !a.C)
    throw Error("Can't create secondary domain capable XhrIo object.");
  b2 = new X(a.Ka);
  b2.F = a.C;
  return b2;
}
function Md() {
}
g = Md.prototype;
g.ta = function() {
};
g.sa = function() {
};
g.ra = function() {
};
g.qa = function() {
};
g.Ha = function() {
};
function Nd() {
  if (x && !(10 <= Number(Ua)))
    throw Error("Environmental error: no available transport.");
}
Nd.prototype.a = function(a, b2) {
  return new Y(a, b2);
};
function Y(a, b2) {
  D.call(this);
  this.a = new Cd(b2);
  this.l = a;
  this.b = b2 && b2.messageUrlParams || null;
  a = b2 && b2.messageHeaders || null;
  b2 && b2.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
  this.a.l = a;
  a = b2 && b2.initMessageHeaders || null;
  b2 && b2.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b2.messageContentType : a = { "X-WebChannel-Content-Type": b2.messageContentType });
  b2 && b2.a && (a ? a["X-WebChannel-Client-Profile"] = b2.a : a = { "X-WebChannel-Client-Profile": b2.a });
  this.a.O = a;
  (a = b2 && b2.httpHeadersOverwriteParam) && !ta(a) && (this.a.i = a);
  this.h = b2 && b2.supportsCrossDomainXhr || false;
  this.g = b2 && b2.sendRawJson || false;
  (b2 = b2 && b2.httpSessionIdParam) && !ta(b2) && (this.a.A = b2, a = this.b, null !== a && b2 in a && (a = this.b, b2 in a && delete a[b2]));
  this.f = new Z(this);
}
r(Y, D);
g = Y.prototype;
g.addEventListener = function(a, b2, c, d) {
  Y.S.addEventListener.call(this, a, b2, c, d);
};
g.removeEventListener = function(a, b2, c, d) {
  Y.S.removeEventListener.call(this, a, b2, c, d);
};
g.Oa = function() {
  this.a.f = this.f;
  this.h && (this.a.C = true);
  var a = this.a, b2 = this.l, c = this.b || void 0;
  H(0);
  a.fa = b2;
  a.W = c || {};
  a.H = a.T;
  a.B = Fc(a, null, a.fa);
  Ic(a);
};
g.close = function() {
  Jc(this.a);
};
g.Pa = function(a) {
  if ("string" === typeof a) {
    var b2 = {};
    b2.__data__ = a;
    Gd(this.a, b2);
  } else
    this.g ? (b2 = {}, b2.__data__ = vb(a), Gd(this.a, b2)) : Gd(this.a, a);
};
g.G = function() {
  this.a.f = null;
  delete this.f;
  Jc(this.a);
  delete this.a;
  Y.S.G.call(this);
};
function Od(a) {
  dc.call(this);
  var b2 = a.__sm__;
  if (b2) {
    a: {
      for (var c in b2) {
        a = c;
        break a;
      }
      a = void 0;
    }
    (this.c = a) ? (a = this.c, this.data = null !== b2 && a in b2 ? b2[a] : void 0) : this.data = b2;
  } else
    this.data = a;
}
r(Od, dc);
function Pd() {
  ec.call(this);
  this.status = 1;
}
r(Pd, ec);
function Z(a) {
  this.a = a;
}
r(Z, Md);
Z.prototype.ta = function() {
  this.a.dispatchEvent("a");
};
Z.prototype.sa = function(a) {
  this.a.dispatchEvent(new Od(a));
};
Z.prototype.ra = function(a) {
  this.a.dispatchEvent(new Pd(a));
};
Z.prototype.qa = function() {
  this.a.dispatchEvent("b");
};
Nd.prototype.createWebChannel = Nd.prototype.a;
Y.prototype.send = Y.prototype.Pa;
Y.prototype.open = Y.prototype.Oa;
Y.prototype.close = Y.prototype.close;
Zb.NO_ERROR = 0;
Zb.TIMEOUT = 8;
Zb.HTTP_ERROR = 6;
$b.COMPLETE = "complete";
cc.EventType = J;
J.OPEN = "a";
J.CLOSE = "b";
J.ERROR = "c";
J.MESSAGE = "d";
D.prototype.listen = D.prototype.va;
X.prototype.listenOnce = X.prototype.wa;
X.prototype.getLastError = X.prototype.Qa;
X.prototype.getLastErrorCode = X.prototype.ua;
X.prototype.getStatus = X.prototype.X;
X.prototype.getResponseJson = X.prototype.Na;
X.prototype.getResponseText = X.prototype.$;
X.prototype.send = X.prototype.ba;
var createWebChannelTransport = function() {
  return new Nd();
};
var ErrorCode = Zb;
var EventType = $b;
var WebChannel = cc;
var XhrIo = X;

// node_modules/@firebase/component/dist/index.esm.js
init_tslib_es62();
var Component = (
  /** @class */
  (function() {
    function Component2(name, instanceFactory, type) {
      this.name = name;
      this.instanceFactory = instanceFactory;
      this.type = type;
      this.multipleInstances = false;
      this.serviceProps = {};
      this.instantiationMode = "LAZY";
    }
    Component2.prototype.setInstantiationMode = function(mode) {
      this.instantiationMode = mode;
      return this;
    };
    Component2.prototype.setMultipleInstances = function(multipleInstances) {
      this.multipleInstances = multipleInstances;
      return this;
    };
    Component2.prototype.setServiceProps = function(props) {
      this.serviceProps = props;
      return this;
    };
    return Component2;
  })()
);
var DEFAULT_ENTRY_NAME = "[DEFAULT]";
var Provider = (
  /** @class */
  (function() {
    function Provider2(name, container) {
      this.name = name;
      this.container = container;
      this.component = null;
      this.instances = /* @__PURE__ */ new Map();
      this.instancesDeferred = /* @__PURE__ */ new Map();
    }
    Provider2.prototype.get = function(identifier) {
      if (identifier === void 0) {
        identifier = DEFAULT_ENTRY_NAME;
      }
      var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
      if (!this.instancesDeferred.has(normalizedIdentifier)) {
        var deferred = new Deferred();
        this.instancesDeferred.set(normalizedIdentifier, deferred);
        try {
          var instance = this.getOrInitializeService(normalizedIdentifier);
          if (instance) {
            deferred.resolve(instance);
          }
        } catch (e) {
        }
      }
      return this.instancesDeferred.get(normalizedIdentifier).promise;
    };
    Provider2.prototype.getImmediate = function(options) {
      var _a2 = __assign({ identifier: DEFAULT_ENTRY_NAME, optional: false }, options), identifier = _a2.identifier, optional = _a2.optional;
      var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
      try {
        var instance = this.getOrInitializeService(normalizedIdentifier);
        if (!instance) {
          if (optional) {
            return null;
          }
          throw Error("Service " + this.name + " is not available");
        }
        return instance;
      } catch (e) {
        if (optional) {
          return null;
        } else {
          throw e;
        }
      }
    };
    Provider2.prototype.getComponent = function() {
      return this.component;
    };
    Provider2.prototype.setComponent = function(component) {
      var e_1, _a2;
      if (component.name !== this.name) {
        throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
      }
      if (this.component) {
        throw Error("Component for " + this.name + " has already been provided");
      }
      this.component = component;
      if (isComponentEager(component)) {
        try {
          this.getOrInitializeService(DEFAULT_ENTRY_NAME);
        } catch (e) {
        }
      }
      try {
        for (var _b = __values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
          var _d = __read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
          var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
          try {
            var instance = this.getOrInitializeService(normalizedIdentifier);
            instanceDeferred.resolve(instance);
          } catch (e) {
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    };
    Provider2.prototype.clearInstance = function(identifier) {
      if (identifier === void 0) {
        identifier = DEFAULT_ENTRY_NAME;
      }
      this.instancesDeferred.delete(identifier);
      this.instances.delete(identifier);
    };
    Provider2.prototype.delete = function() {
      return __awaiter(this, void 0, void 0, function() {
        var services;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              services = Array.from(this.instances.values());
              return [4, Promise.all(__spread(services.filter(function(service) {
                return "INTERNAL" in service;
              }).map(function(service) {
                return service.INTERNAL.delete();
              }), services.filter(function(service) {
                return "_delete" in service;
              }).map(function(service) {
                return service._delete();
              })))];
            case 1:
              _a2.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    Provider2.prototype.isComponentSet = function() {
      return this.component != null;
    };
    Provider2.prototype.getOrInitializeService = function(identifier) {
      var instance = this.instances.get(identifier);
      if (!instance && this.component) {
        instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
        this.instances.set(identifier, instance);
      }
      return instance || null;
    };
    Provider2.prototype.normalizeInstanceIdentifier = function(identifier) {
      if (this.component) {
        return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
      } else {
        return identifier;
      }
    };
    return Provider2;
  })()
);
function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME ? void 0 : identifier;
}
function isComponentEager(component) {
  return component.instantiationMode === "EAGER";
}
var ComponentContainer = (
  /** @class */
  (function() {
    function ComponentContainer2(name) {
      this.name = name;
      this.providers = /* @__PURE__ */ new Map();
    }
    ComponentContainer2.prototype.addComponent = function(component) {
      var provider = this.getProvider(component.name);
      if (provider.isComponentSet()) {
        throw new Error("Component " + component.name + " has already been registered with " + this.name);
      }
      provider.setComponent(component);
    };
    ComponentContainer2.prototype.addOrOverwriteComponent = function(component) {
      var provider = this.getProvider(component.name);
      if (provider.isComponentSet()) {
        this.providers.delete(component.name);
      }
      this.addComponent(component);
    };
    ComponentContainer2.prototype.getProvider = function(name) {
      if (this.providers.has(name)) {
        return this.providers.get(name);
      }
      var provider = new Provider(name, this);
      this.providers.set(name, provider);
      return provider;
    };
    ComponentContainer2.prototype.getProviders = function() {
      return Array.from(this.providers.values());
    };
    return ComponentContainer2;
  })()
);

// node_modules/@firebase/firestore/dist/index.esm.js
var b = {
  // Causes are copied from:
  // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
  /** Not an error; returned on success. */
  OK: "ok",
  /** The operation was cancelled (typically by the caller). */
  CANCELLED: "cancelled",
  /** Unknown error or an error from a different error domain. */
  UNKNOWN: "unknown",
  /**
   * Client specified an invalid argument. Note that this differs from
   * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
   * problematic regardless of the state of the system (e.g., a malformed file
   * name).
   */
  INVALID_ARGUMENT: "invalid-argument",
  /**
   * Deadline expired before operation could complete. For operations that
   * change the state of the system, this error may be returned even if the
   * operation has completed successfully. For example, a successful response
   * from a server could have been delayed long enough for the deadline to
   * expire.
   */
  DEADLINE_EXCEEDED: "deadline-exceeded",
  /** Some requested entity (e.g., file or directory) was not found. */
  NOT_FOUND: "not-found",
  /**
   * Some entity that we attempted to create (e.g., file or directory) already
   * exists.
   */
  ALREADY_EXISTS: "already-exists",
  /**
   * The caller does not have permission to execute the specified operation.
   * PERMISSION_DENIED must not be used for rejections caused by exhausting
   * some resource (use RESOURCE_EXHAUSTED instead for those errors).
   * PERMISSION_DENIED must not be used if the caller can not be identified
   * (use UNAUTHENTICATED instead for those errors).
   */
  PERMISSION_DENIED: "permission-denied",
  /**
   * The request does not have valid authentication credentials for the
   * operation.
   */
  UNAUTHENTICATED: "unauthenticated",
  /**
   * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
   * entire file system is out of space.
   */
  RESOURCE_EXHAUSTED: "resource-exhausted",
  /**
   * Operation was rejected because the system is not in a state required for
   * the operation's execution. For example, directory to be deleted may be
   * non-empty, an rmdir operation is applied to a non-directory, etc.
   *
   * A litmus test that may help a service implementor in deciding
   * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
   *  (a) Use UNAVAILABLE if the client can retry just the failing call.
   *  (b) Use ABORTED if the client should retry at a higher-level
   *      (e.g., restarting a read-modify-write sequence).
   *  (c) Use FAILED_PRECONDITION if the client should not retry until
   *      the system state has been explicitly fixed. E.g., if an "rmdir"
   *      fails because the directory is non-empty, FAILED_PRECONDITION
   *      should be returned since the client should not retry unless
   *      they have first fixed up the directory by deleting files from it.
   *  (d) Use FAILED_PRECONDITION if the client performs conditional
   *      REST Get/Update/Delete on a resource and the resource on the
   *      server does not match the condition. E.g., conflicting
   *      read-modify-write on the same resource.
   */
  FAILED_PRECONDITION: "failed-precondition",
  /**
   * The operation was aborted, typically due to a concurrency issue like
   * sequencer check failures, transaction aborts, etc.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  ABORTED: "aborted",
  /**
   * Operation was attempted past the valid range. E.g., seeking or reading
   * past end of file.
   *
   * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
   * if the system state changes. For example, a 32-bit file system will
   * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
   * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
   * an offset past the current file size.
   *
   * There is a fair bit of overlap between FAILED_PRECONDITION and
   * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
   * when it applies so that callers who are iterating through a space can
   * easily look for an OUT_OF_RANGE error to detect when they are done.
   */
  OUT_OF_RANGE: "out-of-range",
  /** Operation is not implemented or not supported/enabled in this service. */
  UNIMPLEMENTED: "unimplemented",
  /**
   * Internal errors. Means some invariants expected by underlying System has
   * been broken. If you see one of these errors, Something is very broken.
   */
  INTERNAL: "internal",
  /**
   * The service is currently unavailable. This is a most likely a transient
   * condition and may be corrected by retrying with a backoff.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  UNAVAILABLE: "unavailable",
  /** Unrecoverable data loss or corruption. */
  DATA_LOSS: "data-loss"
};
var I2 = (
  /** @class */
  (function(e) {
    function n2(t, n3) {
      var r2 = this;
      return (r2 = e.call(this, n3) || this).code = t, r2.message = n3, r2.name = "FirebaseError", // HACK: We write a toString property directly because Error is not a real
      // class and so inheritance does not work correctly. We could alternatively
      // do the same "back-door inheritance" trick that FirebaseError does.
      r2.toString = function() {
        return r2.name + ": [code=" + r2.code + "]: " + r2.message;
      }, r2;
    }
    return __extends2(n2, e), n2;
  })(Error)
);
var E2 = new Logger("@firebase/firestore");
function _() {
  return E2.logLevel;
}
function T2(t) {
  for (var e = [], n2 = 1; n2 < arguments.length; n2++) e[n2 - 1] = arguments[n2];
  if (E2.logLevel <= LogLevel.DEBUG) {
    var i2 = e.map(S2);
    E2.debug.apply(E2, __spreadArrays(["Firestore (7.24.0): " + t], i2));
  }
}
function N2(t) {
  for (var e = [], n2 = 1; n2 < arguments.length; n2++) e[n2 - 1] = arguments[n2];
  if (E2.logLevel <= LogLevel.ERROR) {
    var i2 = e.map(S2);
    E2.error.apply(E2, __spreadArrays(["Firestore (7.24.0): " + t], i2));
  }
}
function A2(t) {
  for (var e = [], n2 = 1; n2 < arguments.length; n2++) e[n2 - 1] = arguments[n2];
  if (E2.logLevel <= LogLevel.WARN) {
    var i2 = e.map(S2);
    E2.warn.apply(E2, __spreadArrays(["Firestore (7.24.0): " + t], i2));
  }
}
function S2(t) {
  if ("string" == typeof t) return t;
  try {
    return e = t, JSON.stringify(e);
  } catch (e2) {
    return t;
  }
  var e;
}
function D2(t) {
  void 0 === t && (t = "Unexpected state");
  var e = "FIRESTORE (7.24.0) INTERNAL ASSERTION FAILED: " + t;
  throw N2(e), new Error(e);
}
function k2(t, e) {
  t || D2();
}
function x2(t, e) {
  return t;
}
function L2(t) {
  var e = 0;
  for (var n2 in t) Object.prototype.hasOwnProperty.call(t, n2) && e++;
  return e;
}
function R2(t, e) {
  for (var n2 in t) Object.prototype.hasOwnProperty.call(t, n2) && e(n2, t[n2]);
}
function O2(t) {
  for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return false;
  return true;
}
var P2 = (
  /** @class */
  (function() {
    function t(t2, e, n2) {
      void 0 === e ? e = 0 : e > t2.length && D2(), void 0 === n2 ? n2 = t2.length - e : n2 > t2.length - e && D2(), this.segments = t2, this.offset = e, this.t = n2;
    }
    return Object.defineProperty(t.prototype, "length", {
      get: function() {
        return this.t;
      },
      enumerable: false,
      configurable: true
    }), t.prototype.isEqual = function(e) {
      return 0 === t.i(this, e);
    }, t.prototype.child = function(e) {
      var n2 = this.segments.slice(this.offset, this.limit());
      return e instanceof t ? e.forEach((function(t2) {
        n2.push(t2);
      })) : n2.push(e), this.o(n2);
    }, /** The index of one past the last segment of the path. */
    t.prototype.limit = function() {
      return this.offset + this.length;
    }, t.prototype.u = function(t2) {
      return t2 = void 0 === t2 ? 1 : t2, this.o(this.segments, this.offset + t2, this.length - t2);
    }, t.prototype.h = function() {
      return this.o(this.segments, this.offset, this.length - 1);
    }, t.prototype.l = function() {
      return this.segments[this.offset];
    }, t.prototype._ = function() {
      return this.get(this.length - 1);
    }, t.prototype.get = function(t2) {
      return this.segments[this.offset + t2];
    }, t.prototype.m = function() {
      return 0 === this.length;
    }, t.prototype.T = function(t2) {
      if (t2.length < this.length) return false;
      for (var e = 0; e < this.length; e++) if (this.get(e) !== t2.get(e)) return false;
      return true;
    }, t.prototype.I = function(t2) {
      if (this.length + 1 !== t2.length) return false;
      for (var e = 0; e < this.length; e++) if (this.get(e) !== t2.get(e)) return false;
      return true;
    }, t.prototype.forEach = function(t2) {
      for (var e = this.offset, n2 = this.limit(); e < n2; e++) t2(this.segments[e]);
    }, t.prototype.A = function() {
      return this.segments.slice(this.offset, this.limit());
    }, t.i = function(t2, e) {
      for (var n2 = Math.min(t2.length, e.length), r2 = 0; r2 < n2; r2++) {
        var i2 = t2.get(r2), o = e.get(r2);
        if (i2 < o) return -1;
        if (i2 > o) return 1;
      }
      return t2.length < e.length ? -1 : t2.length > e.length ? 1 : 0;
    }, t;
  })()
);
var V2 = (
  /** @class */
  (function(e) {
    function n2() {
      return null !== e && e.apply(this, arguments) || this;
    }
    return __extends2(n2, e), n2.prototype.o = function(t, e2, r2) {
      return new n2(t, e2, r2);
    }, n2.prototype.R = function() {
      return this.A().join("/");
    }, n2.prototype.toString = function() {
      return this.R();
    }, /**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */
    n2.g = function() {
      for (var t = [], e2 = 0; e2 < arguments.length; e2++) t[e2] = arguments[e2];
      for (var r2 = [], i2 = 0, o = t; i2 < o.length; i2++) {
        var s = o[i2];
        if (s.indexOf("//") >= 0) throw new I2(b.INVALID_ARGUMENT, "Invalid segment (" + s + "). Paths must not contain // in them.");
        r2.push.apply(r2, s.split("/").filter((function(t2) {
          return t2.length > 0;
        })));
      }
      return new n2(r2);
    }, n2.P = function() {
      return new n2([]);
    }, n2;
  })(P2)
);
var U2 = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
var C2 = (
  /** @class */
  (function(e) {
    function n2() {
      return null !== e && e.apply(this, arguments) || this;
    }
    return __extends2(n2, e), n2.prototype.o = function(t, e2, r2) {
      return new n2(t, e2, r2);
    }, /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    n2.V = function(t) {
      return U2.test(t);
    }, n2.prototype.R = function() {
      return this.A().map((function(t) {
        return t = t.replace("\\", "\\\\").replace("`", "\\`"), n2.V(t) || (t = "`" + t + "`"), t;
      })).join(".");
    }, n2.prototype.toString = function() {
      return this.R();
    }, /**
     * Returns true if this field references the key of a document.
     */
    n2.prototype.p = function() {
      return 1 === this.length && "__name__" === this.get(0);
    }, /**
     * The field designating the key of a document.
     */
    n2.v = function() {
      return new n2(["__name__"]);
    }, /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    n2.S = function(t) {
      for (var e2 = [], r2 = "", i2 = 0, o = function() {
        if (0 === r2.length) throw new I2(b.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
        e2.push(r2), r2 = "";
      }, s = false; i2 < t.length; ) {
        var u2 = t[i2];
        if ("\\" === u2) {
          if (i2 + 1 === t.length) throw new I2(b.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
          var a = t[i2 + 1];
          if ("\\" !== a && "." !== a && "`" !== a) throw new I2(b.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
          r2 += a, i2 += 2;
        } else "`" === u2 ? (s = !s, i2++) : "." !== u2 || s ? (r2 += u2, i2++) : (o(), i2++);
      }
      if (o(), s) throw new I2(b.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
      return new n2(e2);
    }, n2.P = function() {
      return new n2([]);
    }, n2;
  })(P2)
);
var F2 = (
  /** @class */
  (function() {
    function t(t2) {
      this.path = t2;
    }
    return t.D = function(e) {
      return new t(V2.g(e));
    }, t.C = function(e) {
      return new t(V2.g(e).u(5));
    }, /** Returns true if the document is in the specified collectionId. */
    t.prototype.N = function(t2) {
      return this.path.length >= 2 && this.path.get(this.path.length - 2) === t2;
    }, t.prototype.isEqual = function(t2) {
      return null !== t2 && 0 === V2.i(this.path, t2.path);
    }, t.prototype.toString = function() {
      return this.path.toString();
    }, t.i = function(t2, e) {
      return V2.i(t2.path, e.path);
    }, t.F = function(t2) {
      return t2.length % 2 == 0;
    }, /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments The segments of the path to the document
     * @return A new instance of DocumentKey
     */
    t.$ = function(e) {
      return new t(new V2(e.slice()));
    }, t;
  })()
);
function M2(t, e) {
  if (0 !== e.length) throw new I2(b.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + rt(e.length, "argument") + ".");
}
function q2(t, e, n2) {
  if (e.length !== n2) throw new I2(b.INVALID_ARGUMENT, "Function " + t + "() requires " + rt(n2, "argument") + ", but was called with " + rt(e.length, "argument") + ".");
}
function j(t, e, n2) {
  if (e.length < n2) throw new I2(b.INVALID_ARGUMENT, "Function " + t + "() requires at least " + rt(n2, "argument") + ", but was called with " + rt(e.length, "argument") + ".");
}
function G2(t, e, n2, r2) {
  if (e.length < n2 || e.length > r2) throw new I2(b.INVALID_ARGUMENT, "Function " + t + "() requires between " + n2 + " and " + r2 + " arguments, but was called with " + rt(e.length, "argument") + ".");
}
function z(t, e, n2, r2) {
  Y2(t, e, nt(n2) + " argument", r2);
}
function B(t, e, n2, r2) {
  void 0 !== r2 && z(t, e, n2, r2);
}
function K2(t, e, n2, r2) {
  Y2(t, e, n2 + " option", r2);
}
function W2(t, e, n2, r2) {
  void 0 !== r2 && K2(t, e, n2, r2);
}
function Q2(t, e, n2, r2, i2) {
  void 0 !== r2 && (function(t2, e2, n3, r3, i3) {
    for (var o = [], s = 0, u2 = i3; s < u2.length; s++) {
      var a = u2[s];
      if (a === r3) return;
      o.push(X2(a));
    }
    var c = X2(r3);
    throw new I2(b.INVALID_ARGUMENT, "Invalid value " + c + " provided to function " + t2 + '() for option "' + n3 + '". Acceptable values: ' + o.join(", "));
  })(t, 0, n2, r2, i2);
}
function H2(t, e, n2, r2) {
  if (!e.some((function(t2) {
    return t2 === r2;
  }))) throw new I2(b.INVALID_ARGUMENT, "Invalid value " + X2(r2) + " provided to function " + t + "() for its " + nt(n2) + " argument. Acceptable values: " + e.join(", "));
  return r2;
}
function Y2(t, e, n2, r2) {
  if (!("object" === e ? $(r2) : "non-empty string" === e ? "string" == typeof r2 && "" !== r2 : typeof r2 === e)) {
    var i2 = X2(r2);
    throw new I2(b.INVALID_ARGUMENT, "Function " + t + "() requires its " + n2 + " to be of type " + e + ", but it was: " + i2);
  }
}
function $(t) {
  return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
}
function X2(t) {
  if (void 0 === t) return "undefined";
  if (null === t) return "null";
  if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), JSON.stringify(t);
  if ("number" == typeof t || "boolean" == typeof t) return "" + t;
  if ("object" == typeof t) {
    if (t instanceof Array) return "an array";
    var e = (
      /** Hacky method to try to get the constructor name for an object. */
      (function(t2) {
        if (t2.constructor) {
          var e2 = /function\s+([^\s(]+)\s*\(/.exec(t2.constructor.toString());
          if (e2 && e2.length > 1) return e2[1];
        }
        return null;
      })(t)
    );
    return e ? "a custom " + e + " object" : "an object";
  }
  return "function" == typeof t ? "a function" : D2();
}
function J2(t, e, n2) {
  if (void 0 === n2) throw new I2(b.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + nt(e) + " argument, but it was undefined.");
}
function Z2(t, e, n2) {
  R2(e, (function(e2, r2) {
    if (n2.indexOf(e2) < 0) throw new I2(b.INVALID_ARGUMENT, "Unknown option '" + e2 + "' passed to function " + t + "(). Available options: " + n2.join(", "));
  }));
}
function tt(t, e, n2, r2) {
  var i2 = X2(r2);
  return new I2(b.INVALID_ARGUMENT, "Function " + t + "() requires its " + nt(n2) + " argument to be a " + e + ", but it was: " + i2);
}
function et(t, e, n2) {
  if (n2 <= 0) throw new I2(b.INVALID_ARGUMENT, "Function " + t + "() requires its " + nt(e) + " argument to be a positive number, but it was: " + n2 + ".");
}
function nt(t) {
  switch (t) {
    case 1:
      return "first";
    case 2:
      return "second";
    case 3:
      return "third";
    default:
      return t + "th";
  }
}
function rt(t, e) {
  return t + " " + e + (1 === t ? "" : "s");
}
function it(t) {
  var e = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto)
  ), n2 = new Uint8Array(t);
  if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n2);
  else
    for (var r2 = 0; r2 < t; r2++) n2[r2] = Math.floor(256 * Math.random());
  return n2;
}
var ot = (
  /** @class */
  (function() {
    function t() {
    }
    return t.k = function() {
      for (var t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t2.length) * t2.length, n2 = ""; n2.length < 20; ) for (var r2 = it(40), i2 = 0; i2 < r2.length; ++i2)
        n2.length < 20 && r2[i2] < e && (n2 += t2.charAt(r2[i2] % t2.length));
      return n2;
    }, t;
  })()
);
function st(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function ut(t, e, n2) {
  return t.length === e.length && t.every((function(t2, r2) {
    return n2(t2, e[r2]);
  }));
}
function at(t) {
  return t + "\0";
}
var ct = (
  /** @class */
  (function() {
    function t(t2) {
      this.M = t2;
    }
    return t.fromBase64String = function(e) {
      return new t(atob(e));
    }, t.fromUint8Array = function(e) {
      return new t(
        /**
        * Helper function to convert an Uint8array to a binary string.
        */
        (function(t2) {
          for (var e2 = "", n2 = 0; n2 < t2.length; ++n2) e2 += String.fromCharCode(t2[n2]);
          return e2;
        })(e)
      );
    }, t.prototype.toBase64 = function() {
      return t2 = this.M, btoa(t2);
      var t2;
    }, t.prototype.toUint8Array = function() {
      return (function(t2) {
        for (var e = new Uint8Array(t2.length), n2 = 0; n2 < t2.length; n2++) e[n2] = t2.charCodeAt(n2);
        return e;
      })(this.M);
    }, t.prototype.O = function() {
      return 2 * this.M.length;
    }, t.prototype.L = function(t2) {
      return st(this.M, t2.M);
    }, t.prototype.isEqual = function(t2) {
      return this.M === t2.M;
    }, t;
  })()
);
ct.B = new ct("");
var ht = (
  /** @class */
  (function() {
    function t(t2) {
      this.q = t2;
    }
    return t.fromBase64String = function(e) {
      try {
        return new t(ct.fromBase64String(e));
      } catch (e2) {
        throw new I2(b.INVALID_ARGUMENT, "Failed to construct Bytes from Base64 string: " + e2);
      }
    }, /**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array The Uint8Array used to create the `Bytes` object.
     */
    t.fromUint8Array = function(e) {
      return new t(ct.fromUint8Array(e));
    }, /**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @return The Base64-encoded string created from the `Bytes` object.
     */
    t.prototype.toBase64 = function() {
      return this.q.toBase64();
    }, /**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @return The Uint8Array created from the `Bytes` object.
     */
    t.prototype.toUint8Array = function() {
      return this.q.toUint8Array();
    }, /**
     * Returns a string representation of the `Bytes` object.
     *
     * @return A string representation of the `Bytes` object.
     */
    t.prototype.toString = function() {
      return "Bytes(base64: " + this.toBase64() + ")";
    }, /**
     * Returns true if this `Bytes` object is equal to the provided one.
     *
     * @param other The `Bytes` object to compare against.
     * @return true if this `Bytes` object is equal to the provided one.
     */
    t.prototype.isEqual = function(t2) {
      return this.q.isEqual(t2.q);
    }, t;
  })()
);
function ft() {
  if ("undefined" == typeof Uint8Array) throw new I2(b.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}
function lt() {
  if ("undefined" == typeof atob) throw new I2(b.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}
var pt = (
  /** @class */
  (function(e) {
    function n2() {
      return null !== e && e.apply(this, arguments) || this;
    }
    return __extends2(n2, e), n2.fromBase64String = function(t) {
      q2("Blob.fromBase64String", arguments, 1), z("Blob.fromBase64String", "string", 1, t), lt();
      try {
        return new n2(ct.fromBase64String(t));
      } catch (t2) {
        throw new I2(b.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t2);
      }
    }, n2.fromUint8Array = function(t) {
      if (q2("Blob.fromUint8Array", arguments, 1), ft(), !(t instanceof Uint8Array)) throw tt("Blob.fromUint8Array", "Uint8Array", 1, t);
      return new n2(ct.fromUint8Array(t));
    }, n2.prototype.toBase64 = function() {
      return q2("Blob.toBase64", arguments, 0), lt(), e.prototype.toBase64.call(this);
    }, n2.prototype.toUint8Array = function() {
      return q2("Blob.toUint8Array", arguments, 0), ft(), e.prototype.toUint8Array.call(this);
    }, n2.prototype.toString = function() {
      return "Blob(base64: " + this.toBase64() + ")";
    }, n2;
  })(ht)
);
var dt = (
  /**
       * Constructs a DatabaseInfo using the provided host, databaseId and
       * persistenceKey.
       *
       * @param databaseId The database to use.
       * @param persistenceKey A unique identifier for this Firestore's local
       * storage (used in conjunction with the databaseId).
       * @param host The Firestore backend host to connect to.
       * @param ssl Whether to use SSL when connecting.
       * @param forceLongPolling Whether to use the forceLongPolling option
       * when using WebChannel as the network transport.
       * @param autoDetectLongPolling Whether to use the detectBufferingProxy
       * option when using WebChannel as the network transport.
       */
  function(t, e, n2, r2, i2, o) {
    this.U = t, this.persistenceKey = e, this.host = n2, this.ssl = r2, this.forceLongPolling = i2, this.W = o;
  }
);
var vt = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.projectId = t2, this.database = e || "(default)";
    }
    return Object.defineProperty(t.prototype, "j", {
      get: function() {
        return "(default)" === this.database;
      },
      enumerable: false,
      configurable: true
    }), t.prototype.isEqual = function(e) {
      return e instanceof t && e.projectId === this.projectId && e.database === this.database;
    }, t.prototype.L = function(t2) {
      return st(this.projectId, t2.projectId) || st(this.database, t2.database);
    }, t;
  })()
);
var yt = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.K = t2, this.G = e, /**
           * The inner map for a key -> value pair. Due to the possibility of
           * collisions we keep a list of entries that we do a linear search through
           * to find an actual match. Note that collisions should be rare, so we still
           * expect near constant time lookups in practice.
           */
      this.H = {};
    }
    return t.prototype.get = function(t2) {
      var e = this.K(t2), n2 = this.H[e];
      if (void 0 !== n2) for (var r2 = 0, i2 = n2; r2 < i2.length; r2++) {
        var o = i2[r2], s = o[0], u2 = o[1];
        if (this.G(s, t2)) return u2;
      }
    }, t.prototype.has = function(t2) {
      return void 0 !== this.get(t2);
    }, /** Put this key and value in the map. */
    t.prototype.set = function(t2, e) {
      var n2 = this.K(t2), r2 = this.H[n2];
      if (void 0 !== r2) {
        for (var i2 = 0; i2 < r2.length; i2++) if (this.G(r2[i2][0], t2)) return void (r2[i2] = [t2, e]);
        r2.push([t2, e]);
      } else this.H[n2] = [[t2, e]];
    }, /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    t.prototype.delete = function(t2) {
      var e = this.K(t2), n2 = this.H[e];
      if (void 0 === n2) return false;
      for (var r2 = 0; r2 < n2.length; r2++) if (this.G(n2[r2][0], t2)) return 1 === n2.length ? delete this.H[e] : n2.splice(r2, 1), true;
      return false;
    }, t.prototype.forEach = function(t2) {
      R2(this.H, (function(e, n2) {
        for (var r2 = 0, i2 = n2; r2 < i2.length; r2++) {
          var o = i2[r2], s = o[0], u2 = o[1];
          t2(s, u2);
        }
      }));
    }, t.prototype.m = function() {
      return O2(this.H);
    }, t;
  })()
);
var mt = (
  /** @class */
  (function() {
    function t(t2, e) {
      if (this.seconds = t2, this.nanoseconds = e, e < 0) throw new I2(b.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
      if (e >= 1e9) throw new I2(b.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
      if (t2 < -62135596800) throw new I2(b.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t2);
      if (t2 >= 253402300800) throw new I2(b.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t2);
    }
    return t.now = function() {
      return t.fromMillis(Date.now());
    }, /**
     * Creates a new timestamp from the given date.
     *
     * @param date The date to initialize the `Timestamp` from.
     * @return A new `Timestamp` representing the same point in time as the given
     *     date.
     */
    t.fromDate = function(e) {
      return t.fromMillis(e.getTime());
    }, /**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @return A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */
    t.fromMillis = function(e) {
      var n2 = Math.floor(e / 1e3);
      return new t(n2, 1e6 * (e - 1e3 * n2));
    }, /**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion causes
     * a loss of precision since `Date` objects only support millisecond precision.
     *
     * @return JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */
    t.prototype.toDate = function() {
      return new Date(this.toMillis());
    }, /**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @return The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */
    t.prototype.toMillis = function() {
      return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }, t.prototype.Y = function(t2) {
      return this.seconds === t2.seconds ? st(this.nanoseconds, t2.nanoseconds) : st(this.seconds, t2.seconds);
    }, /**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other The `Timestamp` to compare against.
     * @return true if this `Timestamp` is equal to the provided one.
     */
    t.prototype.isEqual = function(t2) {
      return t2.seconds === this.seconds && t2.nanoseconds === this.nanoseconds;
    }, t.prototype.toString = function() {
      return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }, t.prototype.toJSON = function() {
      return {
        seconds: this.seconds,
        nanoseconds: this.nanoseconds
      };
    }, /**
     * Converts this object to a primitive string, which allows Timestamp objects to be compared
     * using the `>`, `<=`, `>=` and `>` operators.
     */
    t.prototype.valueOf = function() {
      var t2 = this.seconds - -62135596800;
      return String(t2).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }, t;
  })()
);
var gt = (
  /** @class */
  (function() {
    function t(t2) {
      this.timestamp = t2;
    }
    return t.J = function(e) {
      return new t(e);
    }, t.min = function() {
      return new t(new mt(0, 0));
    }, t.prototype.L = function(t2) {
      return this.timestamp.Y(t2.timestamp);
    }, t.prototype.isEqual = function(t2) {
      return this.timestamp.isEqual(t2.timestamp);
    }, /** Returns a number representation of the version for use in spec tests. */
    t.prototype.X = function() {
      return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }, t.prototype.toString = function() {
      return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }, t.prototype.Z = function() {
      return this.timestamp;
    }, t;
  })()
);
function wt(t) {
  return null == t;
}
function bt(t) {
  return 0 === t && 1 / t == -1 / 0;
}
function It(t) {
  return "number" == typeof t && Number.isInteger(t) && !bt(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
}
var Et = function(t, e, n2, r2, i2, o, s) {
  void 0 === e && (e = null), void 0 === n2 && (n2 = []), void 0 === r2 && (r2 = []), void 0 === i2 && (i2 = null), void 0 === o && (o = null), void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.orderBy = n2, this.filters = r2, this.limit = i2, this.startAt = o, this.endAt = s, this.tt = null;
};
function _t(t, e, n2, r2, i2, o, s) {
  return void 0 === e && (e = null), void 0 === n2 && (n2 = []), void 0 === r2 && (r2 = []), void 0 === i2 && (i2 = null), void 0 === o && (o = null), void 0 === s && (s = null), new Et(t, e, n2, r2, i2, o, s);
}
function Tt(t) {
  var e = x2(t);
  if (null === e.tt) {
    var n2 = e.path.R();
    null !== e.collectionGroup && (n2 += "|cg:" + e.collectionGroup), n2 += "|f:", n2 += e.filters.map((function(t2) {
      return (function(t3) {
        return t3.field.R() + t3.op.toString() + ve(t3.value);
      })(t2);
    })).join(","), n2 += "|ob:", n2 += e.orderBy.map((function(t2) {
      return (e2 = t2).field.R() + e2.dir;
      var e2;
    })).join(","), wt(e.limit) || (n2 += "|l:", n2 += e.limit), e.startAt && (n2 += "|lb:", n2 += br(e.startAt)), e.endAt && (n2 += "|ub:", n2 += br(e.endAt)), e.tt = n2;
  }
  return e.tt;
}
function Nt(t, e) {
  if (t.limit !== e.limit) return false;
  if (t.orderBy.length !== e.orderBy.length) return false;
  for (var n2 = 0; n2 < t.orderBy.length; n2++) if (!Nr(t.orderBy[n2], e.orderBy[n2])) return false;
  if (t.filters.length !== e.filters.length) return false;
  for (var r2 = 0; r2 < t.filters.length; r2++) if (i2 = t.filters[r2], o = e.filters[r2], i2.op !== o.op || !i2.field.isEqual(o.field) || !fe(i2.value, o.value)) return false;
  var i2, o;
  return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!Er(t.startAt, e.startAt) && Er(t.endAt, e.endAt);
}
function At(t) {
  return F2.F(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}
var St;
var Dt;
var kt = (
  /** @class */
  (function() {
    function t(t2, e, n2, r2, i2, o, s) {
      void 0 === i2 && (i2 = gt.min()), void 0 === o && (o = gt.min()), void 0 === s && (s = ct.B), this.target = t2, this.targetId = e, this.et = n2, this.sequenceNumber = r2, this.nt = i2, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s;
    }
    return t.prototype.st = function(e) {
      return new t(this.target, this.targetId, this.et, e, this.nt, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }, /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */
    t.prototype.it = function(e, n2) {
      return new t(this.target, this.targetId, this.et, this.sequenceNumber, n2, this.lastLimboFreeSnapshotVersion, e);
    }, /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */
    t.prototype.rt = function(e) {
      return new t(this.target, this.targetId, this.et, this.sequenceNumber, this.nt, e, this.resumeToken);
    }, t;
  })()
);
var xt = (
  // TODO(b/33078163): just use simplest form of existence filter for now
  function(t) {
    this.count = t;
  }
);
function Lt(t) {
  switch (t) {
    case b.OK:
      return D2();
    case b.CANCELLED:
    case b.UNKNOWN:
    case b.DEADLINE_EXCEEDED:
    case b.RESOURCE_EXHAUSTED:
    case b.INTERNAL:
    case b.UNAVAILABLE:
    // Unauthenticated means something went wrong with our token and we need
    // to retry with new credentials which will happen automatically.
    case b.UNAUTHENTICATED:
      return false;
    case b.INVALID_ARGUMENT:
    case b.NOT_FOUND:
    case b.ALREADY_EXISTS:
    case b.PERMISSION_DENIED:
    case b.FAILED_PRECONDITION:
    // Aborted might be retried in some scenarios, but that is dependant on
    // the context and should handled individually by the calling code.
    // See https://cloud.google.com/apis/design/errors.
    case b.ABORTED:
    case b.OUT_OF_RANGE:
    case b.UNIMPLEMENTED:
    case b.DATA_LOSS:
      return true;
    default:
      return D2();
  }
}
function Rt(t) {
  if (void 0 === t)
    return N2("GRPC error has no .code"), b.UNKNOWN;
  switch (t) {
    case St.OK:
      return b.OK;
    case St.CANCELLED:
      return b.CANCELLED;
    case St.UNKNOWN:
      return b.UNKNOWN;
    case St.DEADLINE_EXCEEDED:
      return b.DEADLINE_EXCEEDED;
    case St.RESOURCE_EXHAUSTED:
      return b.RESOURCE_EXHAUSTED;
    case St.INTERNAL:
      return b.INTERNAL;
    case St.UNAVAILABLE:
      return b.UNAVAILABLE;
    case St.UNAUTHENTICATED:
      return b.UNAUTHENTICATED;
    case St.INVALID_ARGUMENT:
      return b.INVALID_ARGUMENT;
    case St.NOT_FOUND:
      return b.NOT_FOUND;
    case St.ALREADY_EXISTS:
      return b.ALREADY_EXISTS;
    case St.PERMISSION_DENIED:
      return b.PERMISSION_DENIED;
    case St.FAILED_PRECONDITION:
      return b.FAILED_PRECONDITION;
    case St.ABORTED:
      return b.ABORTED;
    case St.OUT_OF_RANGE:
      return b.OUT_OF_RANGE;
    case St.UNIMPLEMENTED:
      return b.UNIMPLEMENTED;
    case St.DATA_LOSS:
      return b.DATA_LOSS;
    default:
      return D2();
  }
}
(Dt = St || (St = {}))[Dt.OK = 0] = "OK", Dt[Dt.CANCELLED = 1] = "CANCELLED", Dt[Dt.UNKNOWN = 2] = "UNKNOWN", Dt[Dt.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", Dt[Dt.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Dt[Dt.NOT_FOUND = 5] = "NOT_FOUND", Dt[Dt.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Dt[Dt.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", Dt[Dt.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Dt[Dt.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", Dt[Dt.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Dt[Dt.ABORTED = 10] = "ABORTED", Dt[Dt.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Dt[Dt.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", Dt[Dt.INTERNAL = 13] = "INTERNAL", Dt[Dt.UNAVAILABLE = 14] = "UNAVAILABLE", Dt[Dt.DATA_LOSS = 15] = "DATA_LOSS";
var Ot = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.i = t2, this.root = e || Vt.EMPTY;
    }
    return t.prototype.ot = function(e, n2) {
      return new t(this.i, this.root.ot(e, n2, this.i).copy(null, null, Vt.at, null, null));
    }, // Returns a copy of the map, with the specified key removed.
    t.prototype.remove = function(e) {
      return new t(this.i, this.root.remove(e, this.i).copy(null, null, Vt.at, null, null));
    }, // Returns the value of the node with the given key, or null.
    t.prototype.get = function(t2) {
      for (var e = this.root; !e.m(); ) {
        var n2 = this.i(t2, e.key);
        if (0 === n2) return e.value;
        n2 < 0 ? e = e.left : n2 > 0 && (e = e.right);
      }
      return null;
    }, // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    t.prototype.indexOf = function(t2) {
      for (var e = 0, n2 = this.root; !n2.m(); ) {
        var r2 = this.i(t2, n2.key);
        if (0 === r2) return e + n2.left.size;
        r2 < 0 ? n2 = n2.left : (
          // Count all nodes left of the node plus the node itself
          (e += n2.left.size + 1, n2 = n2.right)
        );
      }
      return -1;
    }, t.prototype.m = function() {
      return this.root.m();
    }, Object.defineProperty(t.prototype, "size", {
      // Returns the total number of nodes in the map.
      get: function() {
        return this.root.size;
      },
      enumerable: false,
      configurable: true
    }), // Returns the minimum key in the map.
    t.prototype.ct = function() {
      return this.root.ct();
    }, // Returns the maximum key in the map.
    t.prototype.ut = function() {
      return this.root.ut();
    }, // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ht = function(t2) {
      return this.root.ht(t2);
    }, t.prototype.forEach = function(t2) {
      this.ht((function(e, n2) {
        return t2(e, n2), false;
      }));
    }, t.prototype.toString = function() {
      var t2 = [];
      return this.ht((function(e, n2) {
        return t2.push(e + ":" + n2), false;
      })), "{" + t2.join(", ") + "}";
    }, // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.lt = function(t2) {
      return this.root.lt(t2);
    }, // Returns an iterator over the SortedMap.
    t.prototype._t = function() {
      return new Pt(this.root, null, this.i, false);
    }, t.prototype.ft = function(t2) {
      return new Pt(this.root, t2, this.i, false);
    }, t.prototype.dt = function() {
      return new Pt(this.root, null, this.i, true);
    }, t.prototype.wt = function(t2) {
      return new Pt(this.root, t2, this.i, true);
    }, t;
  })()
);
var Pt = (
  /** @class */
  (function() {
    function t(t2, e, n2, r2) {
      this.Tt = r2, this.Et = [];
      for (var i2 = 1; !t2.m(); ) if (i2 = e ? n2(t2.key, e) : 1, // flip the comparison if we're going in reverse
      r2 && (i2 *= -1), i2 < 0)
        t2 = this.Tt ? t2.left : t2.right;
      else {
        if (0 === i2) {
          this.Et.push(t2);
          break;
        }
        this.Et.push(t2), t2 = this.Tt ? t2.right : t2.left;
      }
    }
    return t.prototype.It = function() {
      var t2 = this.Et.pop(), e = {
        key: t2.key,
        value: t2.value
      };
      if (this.Tt) for (t2 = t2.left; !t2.m(); ) this.Et.push(t2), t2 = t2.right;
      else for (t2 = t2.right; !t2.m(); ) this.Et.push(t2), t2 = t2.left;
      return e;
    }, t.prototype.At = function() {
      return this.Et.length > 0;
    }, t.prototype.Rt = function() {
      if (0 === this.Et.length) return null;
      var t2 = this.Et[this.Et.length - 1];
      return {
        key: t2.key,
        value: t2.value
      };
    }, t;
  })()
);
var Vt = (
  /** @class */
  (function() {
    function t(e, n2, r2, i2, o) {
      this.key = e, this.value = n2, this.color = null != r2 ? r2 : t.RED, this.left = null != i2 ? i2 : t.EMPTY, this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    return t.prototype.copy = function(e, n2, r2, i2, o) {
      return new t(null != e ? e : this.key, null != n2 ? n2 : this.value, null != r2 ? r2 : this.color, null != i2 ? i2 : this.left, null != o ? o : this.right);
    }, t.prototype.m = function() {
      return false;
    }, // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ht = function(t2) {
      return this.left.ht(t2) || t2(this.key, this.value) || this.right.ht(t2);
    }, // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.lt = function(t2) {
      return this.right.lt(t2) || t2(this.key, this.value) || this.left.lt(t2);
    }, // Returns the minimum node in the tree.
    t.prototype.min = function() {
      return this.left.m() ? this : this.left.min();
    }, // Returns the maximum key in the tree.
    t.prototype.ct = function() {
      return this.min().key;
    }, // Returns the maximum key in the tree.
    t.prototype.ut = function() {
      return this.right.m() ? this.key : this.right.ut();
    }, // Returns new tree, with the key/value added.
    t.prototype.ot = function(t2, e, n2) {
      var r2 = this, i2 = n2(t2, r2.key);
      return (r2 = i2 < 0 ? r2.copy(null, null, null, r2.left.ot(t2, e, n2), null) : 0 === i2 ? r2.copy(null, e, null, null, null) : r2.copy(null, null, null, null, r2.right.ot(t2, e, n2))).gt();
    }, t.prototype.Pt = function() {
      if (this.left.m()) return t.EMPTY;
      var e = this;
      return e.left.yt() || e.left.left.yt() || (e = e.Vt()), (e = e.copy(null, null, null, e.left.Pt(), null)).gt();
    }, // Returns new tree, with the specified item removed.
    t.prototype.remove = function(e, n2) {
      var r2, i2 = this;
      if (n2(e, i2.key) < 0) i2.left.m() || i2.left.yt() || i2.left.left.yt() || (i2 = i2.Vt()), i2 = i2.copy(null, null, null, i2.left.remove(e, n2), null);
      else {
        if (i2.left.yt() && (i2 = i2.bt()), i2.right.m() || i2.right.yt() || i2.right.left.yt() || (i2 = i2.vt()), 0 === n2(e, i2.key)) {
          if (i2.right.m()) return t.EMPTY;
          r2 = i2.right.min(), i2 = i2.copy(r2.key, r2.value, null, null, i2.right.Pt());
        }
        i2 = i2.copy(null, null, null, null, i2.right.remove(e, n2));
      }
      return i2.gt();
    }, t.prototype.yt = function() {
      return this.color;
    }, // Returns new tree after performing any needed rotations.
    t.prototype.gt = function() {
      var t2 = this;
      return t2.right.yt() && !t2.left.yt() && (t2 = t2.St()), t2.left.yt() && t2.left.left.yt() && (t2 = t2.bt()), t2.left.yt() && t2.right.yt() && (t2 = t2.Dt()), t2;
    }, t.prototype.Vt = function() {
      var t2 = this.Dt();
      return t2.right.left.yt() && (t2 = (t2 = (t2 = t2.copy(null, null, null, null, t2.right.bt())).St()).Dt()), t2;
    }, t.prototype.vt = function() {
      var t2 = this.Dt();
      return t2.left.left.yt() && (t2 = (t2 = t2.bt()).Dt()), t2;
    }, t.prototype.St = function() {
      var e = this.copy(null, null, t.RED, null, this.right.left);
      return this.right.copy(null, null, this.color, e, null);
    }, t.prototype.bt = function() {
      var e = this.copy(null, null, t.RED, this.left.right, null);
      return this.left.copy(null, null, this.color, null, e);
    }, t.prototype.Dt = function() {
      var t2 = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
      return this.copy(null, null, !this.color, t2, e);
    }, // For testing.
    t.prototype.Ct = function() {
      var t2 = this.Nt();
      return Math.pow(2, t2) <= this.size + 1;
    }, // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    t.prototype.Nt = function() {
      if (this.yt() && this.left.yt()) throw D2();
      if (this.right.yt()) throw D2();
      var t2 = this.left.Nt();
      if (t2 !== this.right.Nt()) throw D2();
      return t2 + (this.yt() ? 0 : 1);
    }, t;
  })()
);
Vt.EMPTY = null, Vt.RED = true, Vt.at = false, // end LLRBEmptyNode
Vt.EMPTY = new /** @class */
((function() {
  function t() {
    this.size = 0;
  }
  return Object.defineProperty(t.prototype, "key", {
    get: function() {
      throw D2();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "value", {
    get: function() {
      throw D2();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "color", {
    get: function() {
      throw D2();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "left", {
    get: function() {
      throw D2();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "right", {
    get: function() {
      throw D2();
    },
    enumerable: false,
    configurable: true
  }), // Returns a copy of the current node.
  t.prototype.copy = function(t2, e, n2, r2, i2) {
    return this;
  }, // Returns a copy of the tree, with the specified key/value added.
  t.prototype.ot = function(t2, e, n2) {
    return new Vt(t2, e);
  }, // Returns a copy of the tree, with the specified key removed.
  t.prototype.remove = function(t2, e) {
    return this;
  }, t.prototype.m = function() {
    return true;
  }, t.prototype.ht = function(t2) {
    return false;
  }, t.prototype.lt = function(t2) {
    return false;
  }, t.prototype.ct = function() {
    return null;
  }, t.prototype.ut = function() {
    return null;
  }, t.prototype.yt = function() {
    return false;
  }, // For testing.
  t.prototype.Ct = function() {
    return true;
  }, t.prototype.Nt = function() {
    return 0;
  }, t;
})())();
var Ut = (
  /** @class */
  (function() {
    function t(t2) {
      this.i = t2, this.data = new Ot(this.i);
    }
    return t.prototype.has = function(t2) {
      return null !== this.data.get(t2);
    }, t.prototype.first = function() {
      return this.data.ct();
    }, t.prototype.last = function() {
      return this.data.ut();
    }, Object.defineProperty(t.prototype, "size", {
      get: function() {
        return this.data.size;
      },
      enumerable: false,
      configurable: true
    }), t.prototype.indexOf = function(t2) {
      return this.data.indexOf(t2);
    }, /** Iterates elements in order defined by "comparator" */
    t.prototype.forEach = function(t2) {
      this.data.ht((function(e, n2) {
        return t2(e), false;
      }));
    }, /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */
    t.prototype.Ft = function(t2, e) {
      for (var n2 = this.data.ft(t2[0]); n2.At(); ) {
        var r2 = n2.It();
        if (this.i(r2.key, t2[1]) >= 0) return;
        e(r2.key);
      }
    }, /**
     * Iterates over `elem`s such that: start <= elem until false is returned.
     */
    t.prototype.xt = function(t2, e) {
      var n2;
      for (n2 = void 0 !== e ? this.data.ft(e) : this.data._t(); n2.At(); ) if (!t2(n2.It().key)) return;
    }, /** Finds the least element greater than or equal to `elem`. */
    t.prototype.$t = function(t2) {
      var e = this.data.ft(t2);
      return e.At() ? e.It().key : null;
    }, t.prototype._t = function() {
      return new Ct(this.data._t());
    }, t.prototype.ft = function(t2) {
      return new Ct(this.data.ft(t2));
    }, /** Inserts or updates an element */
    t.prototype.add = function(t2) {
      return this.copy(this.data.remove(t2).ot(t2, true));
    }, /** Deletes an element */
    t.prototype.delete = function(t2) {
      return this.has(t2) ? this.copy(this.data.remove(t2)) : this;
    }, t.prototype.m = function() {
      return this.data.m();
    }, t.prototype.kt = function(t2) {
      var e = this;
      return e.size < t2.size && (e = t2, t2 = this), t2.forEach((function(t3) {
        e = e.add(t3);
      })), e;
    }, t.prototype.isEqual = function(e) {
      if (!(e instanceof t)) return false;
      if (this.size !== e.size) return false;
      for (var n2 = this.data._t(), r2 = e.data._t(); n2.At(); ) {
        var i2 = n2.It().key, o = r2.It().key;
        if (0 !== this.i(i2, o)) return false;
      }
      return true;
    }, t.prototype.A = function() {
      var t2 = [];
      return this.forEach((function(e) {
        t2.push(e);
      })), t2;
    }, t.prototype.toString = function() {
      var t2 = [];
      return this.forEach((function(e) {
        return t2.push(e);
      })), "SortedSet(" + t2.toString() + ")";
    }, t.prototype.copy = function(e) {
      var n2 = new t(this.i);
      return n2.data = e, n2;
    }, t;
  })()
);
var Ct = (
  /** @class */
  (function() {
    function t(t2) {
      this.Mt = t2;
    }
    return t.prototype.It = function() {
      return this.Mt.It().key;
    }, t.prototype.At = function() {
      return this.Mt.At();
    }, t;
  })()
);
var Ft = new Ot(F2.i);
function Mt() {
  return Ft;
}
function qt() {
  return Mt();
}
var jt = new Ot(F2.i);
function Gt() {
  return jt;
}
var zt = new Ot(F2.i);
var Bt = new Ut(F2.i);
function Kt() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  for (var n2 = Bt, r2 = 0, i2 = t; r2 < i2.length; r2++) {
    var o = i2[r2];
    n2 = n2.add(o);
  }
  return n2;
}
var Wt = new Ut(st);
function Qt() {
  return Wt;
}
var Ht = (
  /** @class */
  (function() {
    function t(t2) {
      this.i = t2 ? function(e, n2) {
        return t2(e, n2) || F2.i(e.key, n2.key);
      } : function(t3, e) {
        return F2.i(t3.key, e.key);
      }, this.Ot = Gt(), this.Lt = new Ot(this.i);
    }
    return t.Bt = function(e) {
      return new t(e.i);
    }, t.prototype.has = function(t2) {
      return null != this.Ot.get(t2);
    }, t.prototype.get = function(t2) {
      return this.Ot.get(t2);
    }, t.prototype.first = function() {
      return this.Lt.ct();
    }, t.prototype.last = function() {
      return this.Lt.ut();
    }, t.prototype.m = function() {
      return this.Lt.m();
    }, /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    t.prototype.indexOf = function(t2) {
      var e = this.Ot.get(t2);
      return e ? this.Lt.indexOf(e) : -1;
    }, Object.defineProperty(t.prototype, "size", {
      get: function() {
        return this.Lt.size;
      },
      enumerable: false,
      configurable: true
    }), /** Iterates documents in order defined by "comparator" */
    t.prototype.forEach = function(t2) {
      this.Lt.ht((function(e, n2) {
        return t2(e), false;
      }));
    }, /** Inserts or updates a document with the same key */
    t.prototype.add = function(t2) {
      var e = this.delete(t2.key);
      return e.copy(e.Ot.ot(t2.key, t2), e.Lt.ot(t2, null));
    }, /** Deletes a document with a given key */
    t.prototype.delete = function(t2) {
      var e = this.get(t2);
      return e ? this.copy(this.Ot.remove(t2), this.Lt.remove(e)) : this;
    }, t.prototype.isEqual = function(e) {
      if (!(e instanceof t)) return false;
      if (this.size !== e.size) return false;
      for (var n2 = this.Lt._t(), r2 = e.Lt._t(); n2.At(); ) {
        var i2 = n2.It().key, o = r2.It().key;
        if (!i2.isEqual(o)) return false;
      }
      return true;
    }, t.prototype.toString = function() {
      var t2 = [];
      return this.forEach((function(e) {
        t2.push(e.toString());
      })), 0 === t2.length ? "DocumentSet ()" : "DocumentSet (\n  " + t2.join("  \n") + "\n)";
    }, t.prototype.copy = function(e, n2) {
      var r2 = new t();
      return r2.i = this.i, r2.Ot = e, r2.Lt = n2, r2;
    }, t;
  })()
);
var Yt = (
  /** @class */
  (function() {
    function t() {
      this.qt = new Ot(F2.i);
    }
    return t.prototype.track = function(t2) {
      var e = t2.doc.key, n2 = this.qt.get(e);
      n2 ? (
        // Merge the new change with the existing change.
        0 !== t2.type && 3 === n2.type ? this.qt = this.qt.ot(e, t2) : 3 === t2.type && 1 !== n2.type ? this.qt = this.qt.ot(e, {
          type: n2.type,
          doc: t2.doc
        }) : 2 === t2.type && 2 === n2.type ? this.qt = this.qt.ot(e, {
          type: 2,
          doc: t2.doc
        }) : 2 === t2.type && 0 === n2.type ? this.qt = this.qt.ot(e, {
          type: 0,
          doc: t2.doc
        }) : 1 === t2.type && 0 === n2.type ? this.qt = this.qt.remove(e) : 1 === t2.type && 2 === n2.type ? this.qt = this.qt.ot(e, {
          type: 1,
          doc: n2.doc
        }) : 0 === t2.type && 1 === n2.type ? this.qt = this.qt.ot(e, {
          type: 2,
          doc: t2.doc
        }) : (
          // This includes these cases, which don't make sense:
          // Added->Added
          // Removed->Removed
          // Modified->Added
          // Removed->Modified
          // Metadata->Added
          // Removed->Metadata
          D2()
        )
      ) : this.qt = this.qt.ot(e, t2);
    }, t.prototype.Ut = function() {
      var t2 = [];
      return this.qt.ht((function(e, n2) {
        t2.push(n2);
      })), t2;
    }, t;
  })()
);
var $t = (
  /** @class */
  (function() {
    function t(t2, e, n2, r2, i2, o, s, u2) {
      this.query = t2, this.docs = e, this.Qt = n2, this.docChanges = r2, this.Wt = i2, this.fromCache = o, this.jt = s, this.Kt = u2;
    }
    return t.Gt = function(e, n2, r2, i2) {
      var o = [];
      return n2.forEach((function(t2) {
        o.push({
          type: 0,
          doc: t2
        });
      })), new t(
        e,
        n2,
        Ht.Bt(n2),
        o,
        r2,
        i2,
        /* syncStateChanged= */
        true,
        /* excludesMetadataChanges= */
        false
      );
    }, Object.defineProperty(t.prototype, "hasPendingWrites", {
      get: function() {
        return !this.Wt.m();
      },
      enumerable: false,
      configurable: true
    }), t.prototype.isEqual = function(t2) {
      if (!(this.fromCache === t2.fromCache && this.jt === t2.jt && this.Wt.isEqual(t2.Wt) && or(this.query, t2.query) && this.docs.isEqual(t2.docs) && this.Qt.isEqual(t2.Qt))) return false;
      var e = this.docChanges, n2 = t2.docChanges;
      if (e.length !== n2.length) return false;
      for (var r2 = 0; r2 < e.length; r2++) if (e[r2].type !== n2[r2].type || !e[r2].doc.isEqual(n2[r2].doc)) return false;
      return true;
    }, t;
  })()
);
var Xt = (
  /** @class */
  (function() {
    function t(t2, e, n2, r2, i2) {
      this.nt = t2, this.zt = e, this.Ht = n2, this.Yt = r2, this.Jt = i2;
    }
    return t.Xt = function(e, n2) {
      var r2 = /* @__PURE__ */ new Map();
      return r2.set(e, Jt.Zt(e, n2)), new t(gt.min(), r2, Qt(), Mt(), Kt());
    }, t;
  })()
);
var Jt = (
  /** @class */
  (function() {
    function t(t2, e, n2, r2, i2) {
      this.resumeToken = t2, this.te = e, this.ee = n2, this.ne = r2, this.se = i2;
    }
    return t.Zt = function(e, n2) {
      return new t(ct.B, n2, Kt(), Kt(), Kt());
    }, t;
  })()
);
var Zt = function(t, e, n2, r2) {
  this.ie = t, this.removedTargetIds = e, this.key = n2, this.re = r2;
};
var te = function(t, e) {
  this.targetId = t, this.oe = e;
};
var ee = function(t, e, n2, r2) {
  void 0 === n2 && (n2 = ct.B), void 0 === r2 && (r2 = null), this.state = t, this.targetIds = e, this.resumeToken = n2, this.cause = r2;
};
var ne = (
  /** @class */
  (function() {
    function t() {
      this.ae = 0, /**
           * Keeps track of the document changes since the last raised snapshot.
           *
           * These changes are continuously updated as we receive document updates and
           * always reflect the current set of changes against the last issued snapshot.
           */
      this.ce = oe(), /** See public getters for explanations of these fields. */
      this.ue = ct.B, this.he = false, /**
           * Whether this target state should be included in the next snapshot. We
           * initialize to true so that newly-added targets are included in the next
           * RemoteEvent.
           */
      this.le = true;
    }
    return Object.defineProperty(t.prototype, "te", {
      /**
       * Whether this target has been marked 'current'.
       *
       * 'Current' has special meaning in the RPC protocol: It implies that the
       * Watch backend has sent us all changes up to the point at which the target
       * was added and that the target is consistent with the rest of the watch
       * stream.
       */
      get: function() {
        return this.he;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "resumeToken", {
      /** The last resume token sent to us for this target. */
      get: function() {
        return this.ue;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "_e", {
      /** Whether this target has pending target adds or target removes. */
      get: function() {
        return 0 !== this.ae;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "fe", {
      /** Whether we have modified any state that should trigger a snapshot. */
      get: function() {
        return this.le;
      },
      enumerable: false,
      configurable: true
    }), /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */
    t.prototype.de = function(t2) {
      t2.O() > 0 && (this.le = true, this.ue = t2);
    }, /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */
    t.prototype.we = function() {
      var t2 = Kt(), e = Kt(), n2 = Kt();
      return this.ce.forEach((function(r2, i2) {
        switch (i2) {
          case 0:
            t2 = t2.add(r2);
            break;
          case 2:
            e = e.add(r2);
            break;
          case 1:
            n2 = n2.add(r2);
            break;
          default:
            D2();
        }
      })), new Jt(this.ue, this.he, t2, e, n2);
    }, /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */
    t.prototype.me = function() {
      this.le = false, this.ce = oe();
    }, t.prototype.Te = function(t2, e) {
      this.le = true, this.ce = this.ce.ot(t2, e);
    }, t.prototype.Ee = function(t2) {
      this.le = true, this.ce = this.ce.remove(t2);
    }, t.prototype.Ie = function() {
      this.ae += 1;
    }, t.prototype.Ae = function() {
      this.ae -= 1;
    }, t.prototype.Re = function() {
      this.le = true, this.he = true;
    }, t;
  })()
);
var re = (
  /** @class */
  (function() {
    function t(t2) {
      this.ge = t2, /** The internal state of all tracked targets. */
      this.Pe = /* @__PURE__ */ new Map(), /** Keeps track of the documents to update since the last raised snapshot. */
      this.ye = Mt(), /** A mapping of document keys to their set of target IDs. */
      this.Ve = ie(), /**
           * A list of targets with existence filter mismatches. These targets are
           * known to be inconsistent and their listens needs to be re-established by
           * RemoteStore.
           */
      this.pe = new Ut(st);
    }
    return t.prototype.be = function(t2) {
      for (var e = 0, n2 = t2.ie; e < n2.length; e++) {
        var r2 = n2[e];
        t2.re instanceof zn ? this.ve(r2, t2.re) : t2.re instanceof Bn && this.Se(r2, t2.key, t2.re);
      }
      for (var i2 = 0, o = t2.removedTargetIds; i2 < o.length; i2++) {
        var s = o[i2];
        this.Se(s, t2.key, t2.re);
      }
    }, /** Processes and adds the WatchTargetChange to the current set of changes. */
    t.prototype.De = function(t2) {
      var e = this;
      this.Ce(t2, (function(n2) {
        var r2 = e.Ne(n2);
        switch (t2.state) {
          case 0:
            e.Fe(n2) && r2.de(t2.resumeToken);
            break;
          case 1:
            r2.Ae(), r2._e || // We have a freshly added target, so we need to reset any state
            // that we had previously. This can happen e.g. when remove and add
            // back a target for existence filter mismatches.
            r2.me(), r2.de(t2.resumeToken);
            break;
          case 2:
            r2.Ae(), r2._e || e.removeTarget(n2);
            break;
          case 3:
            e.Fe(n2) && (r2.Re(), r2.de(t2.resumeToken));
            break;
          case 4:
            e.Fe(n2) && // Reset the target and synthesizes removes for all existing
            // documents. The backend will re-add any documents that still
            // match the target before it sends the next global snapshot.
            (e.xe(n2), r2.de(t2.resumeToken));
            break;
          default:
            D2();
        }
      }));
    }, /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */
    t.prototype.Ce = function(t2, e) {
      var n2 = this;
      t2.targetIds.length > 0 ? t2.targetIds.forEach(e) : this.Pe.forEach((function(t3, r2) {
        n2.Fe(r2) && e(r2);
      }));
    }, /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */
    t.prototype.$e = function(t2) {
      var e = t2.targetId, n2 = t2.oe.count, r2 = this.ke(e);
      if (r2) {
        var i2 = r2.target;
        if (At(i2)) if (0 === n2) {
          var o = new F2(i2.path);
          this.Se(e, o, new Bn(o, gt.min()));
        } else k2(1 === n2);
        else this.Me(e) !== n2 && // Existence filter mismatch: We reset the mapping and raise a new
        // snapshot with `isFromCache:true`.
        (this.xe(e), this.pe = this.pe.add(e));
      }
    }, /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */
    t.prototype.Oe = function(t2) {
      var e = this, n2 = /* @__PURE__ */ new Map();
      this.Pe.forEach((function(r3, i3) {
        var o = e.ke(i3);
        if (o) {
          if (r3.te && At(o.target)) {
            var s = new F2(o.target.path);
            null !== e.ye.get(s) || e.Le(i3, s) || e.Se(i3, s, new Bn(s, t2));
          }
          r3.fe && (n2.set(i3, r3.we()), r3.me());
        }
      }));
      var r2 = Kt();
      this.Ve.forEach((function(t3, n3) {
        var i3 = true;
        n3.xt((function(t4) {
          var n4 = e.ke(t4);
          return !n4 || 2 === n4.et || (i3 = false, false);
        })), i3 && (r2 = r2.add(t3));
      }));
      var i2 = new Xt(t2, n2, this.pe, this.ye, r2);
      return this.ye = Mt(), this.Ve = ie(), this.pe = new Ut(st), i2;
    }, /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    t.prototype.ve = function(t2, e) {
      if (this.Fe(t2)) {
        var n2 = this.Le(t2, e.key) ? 2 : 0;
        this.Ne(t2).Te(e.key, n2), this.ye = this.ye.ot(e.key, e), this.Ve = this.Ve.ot(e.key, this.Be(e.key).add(t2));
      }
    }, /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    t.prototype.Se = function(t2, e, n2) {
      if (this.Fe(t2)) {
        var r2 = this.Ne(t2);
        this.Le(t2, e) ? r2.Te(
          e,
          1
          /* Removed */
        ) : (
          // The document may have entered and left the target before we raised a
          // snapshot, so we can just ignore the change.
          r2.Ee(e)
        ), this.Ve = this.Ve.ot(e, this.Be(e).delete(t2)), n2 && (this.ye = this.ye.ot(e, n2));
      }
    }, t.prototype.removeTarget = function(t2) {
      this.Pe.delete(t2);
    }, /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */
    t.prototype.Me = function(t2) {
      var e = this.Ne(t2).we();
      return this.ge.qe(t2).size + e.ee.size - e.se.size;
    }, /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */
    t.prototype.Ie = function(t2) {
      this.Ne(t2).Ie();
    }, t.prototype.Ne = function(t2) {
      var e = this.Pe.get(t2);
      return e || (e = new ne(), this.Pe.set(t2, e)), e;
    }, t.prototype.Be = function(t2) {
      var e = this.Ve.get(t2);
      return e || (e = new Ut(st), this.Ve = this.Ve.ot(t2, e)), e;
    }, /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */
    t.prototype.Fe = function(t2) {
      var e = null !== this.ke(t2);
      return e || T2("WatchChangeAggregator", "Detected inactive target", t2), e;
    }, /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */
    t.prototype.ke = function(t2) {
      var e = this.Pe.get(t2);
      return e && e._e ? null : this.ge.Ue(t2);
    }, /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */
    t.prototype.xe = function(t2) {
      var e = this;
      this.Pe.set(t2, new ne()), this.ge.qe(t2).forEach((function(n2) {
        e.Se(
          t2,
          n2,
          /*updatedDocument=*/
          null
        );
      }));
    }, /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */
    t.prototype.Le = function(t2, e) {
      return this.ge.qe(t2).has(e);
    }, t;
  })()
);
function ie() {
  return new Ot(F2.i);
}
function oe() {
  return new Ot(F2.i);
}
function se(t) {
  var e, n2;
  return "server_timestamp" === (null === (n2 = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n2 ? void 0 : n2.stringValue);
}
function ue(t) {
  var e = t.mapValue.fields.__previous_value__;
  return se(e) ? ue(e) : e;
}
function ae(t) {
  var e = me(t.mapValue.fields.__local_write_time__.timestampValue);
  return new mt(e.seconds, e.nanos);
}
var ce = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function he(t) {
  return "nullValue" in t ? 0 : "booleanValue" in t ? 1 : "integerValue" in t || "doubleValue" in t ? 2 : "timestampValue" in t ? 3 : "stringValue" in t ? 5 : "bytesValue" in t ? 6 : "referenceValue" in t ? 7 : "geoPointValue" in t ? 8 : "arrayValue" in t ? 9 : "mapValue" in t ? se(t) ? 4 : 10 : D2();
}
function fe(t, e) {
  var n2 = he(t);
  if (n2 !== he(e)) return false;
  switch (n2) {
    case 0:
      return true;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return ae(t).isEqual(ae(e));
    case 3:
      return (function(t2, e2) {
        if ("string" == typeof t2.timestampValue && "string" == typeof e2.timestampValue && t2.timestampValue.length === e2.timestampValue.length)
          return t2.timestampValue === e2.timestampValue;
        var n3 = me(t2.timestampValue), r2 = me(e2.timestampValue);
        return n3.seconds === r2.seconds && n3.nanos === r2.nanos;
      })(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return (function(t2, e2) {
        return we(t2.bytesValue).isEqual(we(e2.bytesValue));
      })(t, e);
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return (function(t2, e2) {
        return ge(t2.geoPointValue.latitude) === ge(e2.geoPointValue.latitude) && ge(t2.geoPointValue.longitude) === ge(e2.geoPointValue.longitude);
      })(t, e);
    case 2:
      return (function(t2, e2) {
        if ("integerValue" in t2 && "integerValue" in e2) return ge(t2.integerValue) === ge(e2.integerValue);
        if ("doubleValue" in t2 && "doubleValue" in e2) {
          var n3 = ge(t2.doubleValue), r2 = ge(e2.doubleValue);
          return n3 === r2 ? bt(n3) === bt(r2) : isNaN(n3) && isNaN(r2);
        }
        return false;
      })(t, e);
    case 9:
      return ut(t.arrayValue.values || [], e.arrayValue.values || [], fe);
    case 10:
      return (function(t2, e2) {
        var n3 = t2.mapValue.fields || {}, r2 = e2.mapValue.fields || {};
        if (L2(n3) !== L2(r2)) return false;
        for (var i2 in n3) if (n3.hasOwnProperty(i2) && (void 0 === r2[i2] || !fe(n3[i2], r2[i2]))) return false;
        return true;
      })(t, e);
    default:
      return D2();
  }
}
function le(t, e) {
  return void 0 !== (t.values || []).find((function(t2) {
    return fe(t2, e);
  }));
}
function pe(t, e) {
  var n2 = he(t), r2 = he(e);
  if (n2 !== r2) return st(n2, r2);
  switch (n2) {
    case 0:
      return 0;
    case 1:
      return st(t.booleanValue, e.booleanValue);
    case 2:
      return (function(t2, e2) {
        var n3 = ge(t2.integerValue || t2.doubleValue), r3 = ge(e2.integerValue || e2.doubleValue);
        return n3 < r3 ? -1 : n3 > r3 ? 1 : n3 === r3 ? 0 : (
          // one or both are NaN.
          isNaN(n3) ? isNaN(r3) ? 0 : -1 : 1
        );
      })(t, e);
    case 3:
      return de(t.timestampValue, e.timestampValue);
    case 4:
      return de(ae(t), ae(e));
    case 5:
      return st(t.stringValue, e.stringValue);
    case 6:
      return (function(t2, e2) {
        var n3 = we(t2), r3 = we(e2);
        return n3.L(r3);
      })(t.bytesValue, e.bytesValue);
    case 7:
      return (function(t2, e2) {
        for (var n3 = t2.split("/"), r3 = e2.split("/"), i2 = 0; i2 < n3.length && i2 < r3.length; i2++) {
          var o = st(n3[i2], r3[i2]);
          if (0 !== o) return o;
        }
        return st(n3.length, r3.length);
      })(t.referenceValue, e.referenceValue);
    case 8:
      return (function(t2, e2) {
        var n3 = st(ge(t2.latitude), ge(e2.latitude));
        return 0 !== n3 ? n3 : st(ge(t2.longitude), ge(e2.longitude));
      })(t.geoPointValue, e.geoPointValue);
    case 9:
      return (function(t2, e2) {
        for (var n3 = t2.values || [], r3 = e2.values || [], i2 = 0; i2 < n3.length && i2 < r3.length; ++i2) {
          var o = pe(n3[i2], r3[i2]);
          if (o) return o;
        }
        return st(n3.length, r3.length);
      })(t.arrayValue, e.arrayValue);
    case 10:
      return (function(t2, e2) {
        var n3 = t2.fields || {}, r3 = Object.keys(n3), i2 = e2.fields || {}, o = Object.keys(i2);
        r3.sort(), o.sort();
        for (var s = 0; s < r3.length && s < o.length; ++s) {
          var u2 = st(r3[s], o[s]);
          if (0 !== u2) return u2;
          var a = pe(n3[r3[s]], i2[o[s]]);
          if (0 !== a) return a;
        }
        return st(r3.length, o.length);
      })(t.mapValue, e.mapValue);
    default:
      throw D2();
  }
}
function de(t, e) {
  if ("string" == typeof t && "string" == typeof e && t.length === e.length) return st(t, e);
  var n2 = me(t), r2 = me(e), i2 = st(n2.seconds, r2.seconds);
  return 0 !== i2 ? i2 : st(n2.nanos, r2.nanos);
}
function ve(t) {
  return ye(t);
}
function ye(t) {
  return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? (function(t2) {
    var e2 = me(t2);
    return "time(" + e2.seconds + "," + e2.nanos + ")";
  })(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? we(t.bytesValue).toBase64() : "referenceValue" in t ? (n2 = t.referenceValue, F2.C(n2).toString()) : "geoPointValue" in t ? "geo(" + (e = t.geoPointValue).latitude + "," + e.longitude + ")" : "arrayValue" in t ? (function(t2) {
    for (var e2 = "[", n3 = true, r2 = 0, i2 = t2.values || []; r2 < i2.length; r2++) {
      n3 ? n3 = false : e2 += ",", e2 += ye(i2[r2]);
    }
    return e2 + "]";
  })(t.arrayValue) : "mapValue" in t ? (function(t2) {
    for (var e2 = "{", n3 = true, r2 = 0, i2 = Object.keys(t2.fields || {}).sort(); r2 < i2.length; r2++) {
      var o = i2[r2];
      n3 ? n3 = false : e2 += ",", e2 += o + ":" + ye(t2.fields[o]);
    }
    return e2 + "}";
  })(t.mapValue) : D2();
  var e, n2;
}
function me(t) {
  if (k2(!!t), "string" == typeof t) {
    var e = 0, n2 = ce.exec(t);
    if (k2(!!n2), n2[1]) {
      var r2 = n2[1];
      r2 = (r2 + "000000000").substr(0, 9), e = Number(r2);
    }
    var i2 = new Date(t);
    return {
      seconds: Math.floor(i2.getTime() / 1e3),
      nanos: e
    };
  }
  return {
    seconds: ge(t.seconds),
    nanos: ge(t.nanos)
  };
}
function ge(t) {
  return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}
function we(t) {
  return "string" == typeof t ? ct.fromBase64String(t) : ct.fromUint8Array(t);
}
function be(t, e) {
  return {
    referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.R()
  };
}
function Ie(t) {
  return !!t && "integerValue" in t;
}
function Ee(t) {
  return !!t && "arrayValue" in t;
}
function _e(t) {
  return !!t && "nullValue" in t;
}
function Te(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}
function Ne(t) {
  return !!t && "mapValue" in t;
}
var Ae = {
  asc: "ASCENDING",
  desc: "DESCENDING"
};
var Se = {
  "<": "LESS_THAN",
  "<=": "LESS_THAN_OR_EQUAL",
  ">": "GREATER_THAN",
  ">=": "GREATER_THAN_OR_EQUAL",
  "==": "EQUAL",
  "!=": "NOT_EQUAL",
  "array-contains": "ARRAY_CONTAINS",
  in: "IN",
  "not-in": "NOT_IN",
  "array-contains-any": "ARRAY_CONTAINS_ANY"
};
var De = function(t, e) {
  this.U = t, this.Qe = e;
};
function ke(t) {
  return {
    integerValue: "" + t
  };
}
function xe(t, e) {
  if (t.Qe) {
    if (isNaN(e)) return {
      doubleValue: "NaN"
    };
    if (e === 1 / 0) return {
      doubleValue: "Infinity"
    };
    if (e === -1 / 0) return {
      doubleValue: "-Infinity"
    };
  }
  return {
    doubleValue: bt(e) ? "-0" : e
  };
}
function Le(t, e) {
  return It(e) ? ke(e) : xe(t, e);
}
function Re(t, e) {
  return t.Qe ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
    seconds: "" + e.seconds,
    nanos: e.nanoseconds
  };
}
function Oe(t, e) {
  return t.Qe ? e.toBase64() : e.toUint8Array();
}
function Pe(t, e) {
  return Re(t, e.Z());
}
function Ve(t) {
  return k2(!!t), gt.J((function(t2) {
    var e = me(t2);
    return new mt(e.seconds, e.nanos);
  })(t));
}
function Ue(t, e) {
  return (function(t2) {
    return new V2(["projects", t2.projectId, "databases", t2.database]);
  })(t).child("documents").child(e).R();
}
function Ce(t) {
  var e = V2.g(t);
  return k2(un(e)), e;
}
function Fe(t, e) {
  return Ue(t.U, e.path);
}
function Me(t, e) {
  var n2 = Ce(e);
  return k2(n2.get(1) === t.U.projectId), k2(!n2.get(3) && !t.U.database || n2.get(3) === t.U.database), new F2(ze(n2));
}
function qe(t, e) {
  return Ue(t.U, e);
}
function je(t) {
  var e = Ce(t);
  return 4 === e.length ? V2.P() : ze(e);
}
function Ge(t) {
  return new V2(["projects", t.U.projectId, "databases", t.U.database]).R();
}
function ze(t) {
  return k2(t.length > 4 && "documents" === t.get(4)), t.u(5);
}
function Be(t, e, n2) {
  return {
    name: Fe(t, e),
    fields: n2.proto.mapValue.fields
  };
}
function Ke(t, e) {
  var n2;
  if (e instanceof Ln) n2 = {
    update: Be(t, e.key, e.value)
  };
  else if (e instanceof Cn) n2 = {
    delete: Fe(t, e.key)
  };
  else if (e instanceof Rn) n2 = {
    update: Be(t, e.key, e.data),
    updateMask: sn(e.We)
  };
  else if (e instanceof Pn) n2 = {
    transform: {
      document: Fe(t, e.key),
      fieldTransforms: e.fieldTransforms.map((function(t2) {
        return (function(t3, e2) {
          var n3 = e2.transform;
          if (n3 instanceof ln) return {
            fieldPath: e2.field.R(),
            setToServerValue: "REQUEST_TIME"
          };
          if (n3 instanceof pn) return {
            fieldPath: e2.field.R(),
            appendMissingElements: {
              values: n3.elements
            }
          };
          if (n3 instanceof vn) return {
            fieldPath: e2.field.R(),
            removeAllFromArray: {
              values: n3.elements
            }
          };
          if (n3 instanceof mn) return {
            fieldPath: e2.field.R(),
            increment: n3.je
          };
          throw D2();
        })(0, t2);
      }))
    }
  };
  else {
    if (!(e instanceof Fn)) return D2();
    n2 = {
      verify: Fe(t, e.key)
    };
  }
  return e.Ge.Ke || (n2.currentDocument = (function(t2, e2) {
    return void 0 !== e2.updateTime ? {
      updateTime: Pe(t2, e2.updateTime)
    } : void 0 !== e2.exists ? {
      exists: e2.exists
    } : D2();
  })(t, e.Ge)), n2;
}
function We(t, e) {
  var n2 = e.currentDocument ? (function(t2) {
    return void 0 !== t2.updateTime ? _n.updateTime(Ve(t2.updateTime)) : void 0 !== t2.exists ? _n.exists(t2.exists) : _n.ze();
  })(e.currentDocument) : _n.ze();
  if (e.update) {
    e.update.name;
    var r2 = Me(t, e.update.name), i2 = new Mn({
      mapValue: {
        fields: e.update.fields
      }
    });
    if (e.updateMask) {
      var o = (function(t2) {
        var e2 = t2.fieldPaths || [];
        return new bn(e2.map((function(t3) {
          return C2.S(t3);
        })));
      })(e.updateMask);
      return new Rn(r2, i2, o, n2);
    }
    return new Ln(r2, i2, n2);
  }
  if (e.delete) {
    var s = Me(t, e.delete);
    return new Cn(s, n2);
  }
  if (e.transform) {
    var u2 = Me(t, e.transform.document), a = e.transform.fieldTransforms.map((function(e2) {
      return (function(t2, e3) {
        var n3 = null;
        if ("setToServerValue" in e3) k2("REQUEST_TIME" === e3.setToServerValue), n3 = new ln();
        else if ("appendMissingElements" in e3) {
          var r3 = e3.appendMissingElements.values || [];
          n3 = new pn(r3);
        } else if ("removeAllFromArray" in e3) {
          var i3 = e3.removeAllFromArray.values || [];
          n3 = new vn(i3);
        } else "increment" in e3 ? n3 = new mn(t2, e3.increment) : D2();
        var o2 = C2.S(e3.fieldPath);
        return new In(o2, n3);
      })(t, e2);
    }));
    return k2(true === n2.exists), new Pn(u2, a);
  }
  if (e.verify) {
    var c = Me(t, e.verify);
    return new Fn(c, n2);
  }
  return D2();
}
function Qe(t, e) {
  return {
    documents: [qe(t, e.path)]
  };
}
function He(t, e) {
  var n2 = {
    structuredQuery: {}
  }, r2 = e.path;
  null !== e.collectionGroup ? (n2.parent = qe(t, r2), n2.structuredQuery.from = [{
    collectionId: e.collectionGroup,
    allDescendants: true
  }]) : (n2.parent = qe(t, r2.h()), n2.structuredQuery.from = [{
    collectionId: r2._()
  }]);
  var i2 = (function(t2) {
    if (0 !== t2.length) {
      var e2 = t2.map((function(t3) {
        return (function(t4) {
          if ("==" === t4.op) {
            if (Te(t4.value)) return {
              unaryFilter: {
                field: en(t4.field),
                op: "IS_NAN"
              }
            };
            if (_e(t4.value)) return {
              unaryFilter: {
                field: en(t4.field),
                op: "IS_NULL"
              }
            };
          } else if ("!=" === t4.op) {
            if (Te(t4.value)) return {
              unaryFilter: {
                field: en(t4.field),
                op: "IS_NOT_NAN"
              }
            };
            if (_e(t4.value)) return {
              unaryFilter: {
                field: en(t4.field),
                op: "IS_NOT_NULL"
              }
            };
          }
          return {
            fieldFilter: {
              field: en(t4.field),
              op: tn(t4.op),
              value: t4.value
            }
          };
        })(t3);
      }));
      return 1 === e2.length ? e2[0] : {
        compositeFilter: {
          op: "AND",
          filters: e2
        }
      };
    }
  })(e.filters);
  i2 && (n2.structuredQuery.where = i2);
  var o = (function(t2) {
    if (0 !== t2.length) return t2.map((function(t3) {
      return (function(t4) {
        return {
          field: en(t4.field),
          direction: Ze(t4.dir)
        };
      })(t3);
    }));
  })(e.orderBy);
  o && (n2.structuredQuery.orderBy = o);
  var s = (function(t2, e2) {
    return t2.Qe || wt(e2) ? e2 : {
      value: e2
    };
  })(t, e.limit);
  return null !== s && (n2.structuredQuery.limit = s), e.startAt && (n2.structuredQuery.startAt = Xe(e.startAt)), e.endAt && (n2.structuredQuery.endAt = Xe(e.endAt)), n2;
}
function Ye(t) {
  var e = je(t.parent), n2 = t.structuredQuery, r2 = n2.from ? n2.from.length : 0, i2 = null;
  if (r2 > 0) {
    k2(1 === r2);
    var o = n2.from[0];
    o.allDescendants ? i2 = o.collectionId : e = e.child(o.collectionId);
  }
  var s = [];
  n2.where && (s = $e(n2.where));
  var u2 = [];
  n2.orderBy && (u2 = n2.orderBy.map((function(t2) {
    return (function(t3) {
      return new _r(
        nn(t3.field),
        // visible for testing
        (function(t4) {
          switch (t4) {
            case "ASCENDING":
              return "asc";
            case "DESCENDING":
              return "desc";
            default:
              return;
          }
        })(t3.direction)
      );
    })(t2);
  })));
  var a = null;
  n2.limit && (a = (function(t2) {
    var e2;
    return wt(e2 = "object" == typeof t2 ? t2.value : t2) ? null : e2;
  })(n2.limit));
  var c = null;
  n2.startAt && (c = Je(n2.startAt));
  var h = null;
  return n2.endAt && (h = Je(n2.endAt)), er(Qn(e, i2, u2, s, a, "F", c, h));
}
function $e(t) {
  return t ? void 0 !== t.unaryFilter ? [on(t)] : void 0 !== t.fieldFilter ? [rn(t)] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map((function(t2) {
    return $e(t2);
  })).reduce((function(t2, e) {
    return t2.concat(e);
  })) : D2() : [];
}
function Xe(t) {
  return {
    before: t.before,
    values: t.position
  };
}
function Je(t) {
  var e = !!t.before, n2 = t.values || [];
  return new wr(n2, e);
}
function Ze(t) {
  return Ae[t];
}
function tn(t) {
  return Se[t];
}
function en(t) {
  return {
    fieldPath: t.R()
  };
}
function nn(t) {
  return C2.S(t.fieldPath);
}
function rn(t) {
  return hr.create(nn(t.fieldFilter.field), (function(t2) {
    switch (t2) {
      case "EQUAL":
        return "==";
      case "NOT_EQUAL":
        return "!=";
      case "GREATER_THAN":
        return ">";
      case "GREATER_THAN_OR_EQUAL":
        return ">=";
      case "LESS_THAN":
        return "<";
      case "LESS_THAN_OR_EQUAL":
        return "<=";
      case "ARRAY_CONTAINS":
        return "array-contains";
      case "IN":
        return "in";
      case "NOT_IN":
        return "not-in";
      case "ARRAY_CONTAINS_ANY":
        return "array-contains-any";
      case "OPERATOR_UNSPECIFIED":
      default:
        return D2();
    }
  })(t.fieldFilter.op), t.fieldFilter.value);
}
function on(t) {
  switch (t.unaryFilter.op) {
    case "IS_NAN":
      var e = nn(t.unaryFilter.field);
      return hr.create(e, "==", {
        doubleValue: NaN
      });
    case "IS_NULL":
      var n2 = nn(t.unaryFilter.field);
      return hr.create(n2, "==", {
        nullValue: "NULL_VALUE"
      });
    case "IS_NOT_NAN":
      var r2 = nn(t.unaryFilter.field);
      return hr.create(r2, "!=", {
        doubleValue: NaN
      });
    case "IS_NOT_NULL":
      var i2 = nn(t.unaryFilter.field);
      return hr.create(i2, "!=", {
        nullValue: "NULL_VALUE"
      });
    case "OPERATOR_UNSPECIFIED":
    default:
      return D2();
  }
}
function sn(t) {
  var e = [];
  return t.fields.forEach((function(t2) {
    return e.push(t2.R());
  })), {
    fieldPaths: e
  };
}
function un(t) {
  return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}
var an = function() {
  this.He = void 0;
};
function cn(t, e, n2) {
  return t instanceof ln ? (function(t2, e2) {
    var n3 = {
      fields: {
        __type__: {
          stringValue: "server_timestamp"
        },
        __local_write_time__: {
          timestampValue: {
            seconds: t2.seconds,
            nanos: t2.nanoseconds
          }
        }
      }
    };
    return e2 && (n3.fields.__previous_value__ = e2), {
      mapValue: n3
    };
  })(n2, e) : t instanceof pn ? dn(t, e) : t instanceof vn ? yn(t, e) : (function(t2, e2) {
    var n3 = fn(t2, e2), r2 = gn(n3) + gn(t2.je);
    return Ie(n3) && Ie(t2.je) ? ke(r2) : xe(t2.serializer, r2);
  })(t, e);
}
function hn(t, e, n2) {
  return t instanceof pn ? dn(t, e) : t instanceof vn ? yn(t, e) : n2;
}
function fn(t, e) {
  return t instanceof mn ? Ie(n2 = e) || (function(t2) {
    return !!t2 && "doubleValue" in t2;
  })(n2) ? e : {
    integerValue: 0
  } : null;
  var n2;
}
var ln = (
  /** @class */
  (function(e) {
    function n2() {
      return null !== e && e.apply(this, arguments) || this;
    }
    return __extends2(n2, e), n2;
  })(an)
);
var pn = (
  /** @class */
  (function(e) {
    function n2(t) {
      var n3 = this;
      return (n3 = e.call(this) || this).elements = t, n3;
    }
    return __extends2(n2, e), n2;
  })(an)
);
function dn(t, e) {
  for (var n2 = wn(e), r2 = function(t2) {
    n2.some((function(e2) {
      return fe(e2, t2);
    })) || n2.push(t2);
  }, i2 = 0, o = t.elements; i2 < o.length; i2++) {
    r2(o[i2]);
  }
  return {
    arrayValue: {
      values: n2
    }
  };
}
var vn = (
  /** @class */
  (function(e) {
    function n2(t) {
      var n3 = this;
      return (n3 = e.call(this) || this).elements = t, n3;
    }
    return __extends2(n2, e), n2;
  })(an)
);
function yn(t, e) {
  for (var n2 = wn(e), r2 = function(t2) {
    n2 = n2.filter((function(e2) {
      return !fe(e2, t2);
    }));
  }, i2 = 0, o = t.elements; i2 < o.length; i2++) {
    r2(o[i2]);
  }
  return {
    arrayValue: {
      values: n2
    }
  };
}
var mn = (
  /** @class */
  (function(e) {
    function n2(t, n3) {
      var r2 = this;
      return (r2 = e.call(this) || this).serializer = t, r2.je = n3, r2;
    }
    return __extends2(n2, e), n2;
  })(an)
);
function gn(t) {
  return ge(t.integerValue || t.doubleValue);
}
function wn(t) {
  return Ee(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}
var bn = (
  /** @class */
  (function() {
    function t(t2) {
      this.fields = t2, // TODO(dimond): validation of FieldMask
      // Sort the field mask to support `FieldMask.isEqual()` and assert below.
      t2.sort(C2.i);
    }
    return t.prototype.Ye = function(t2) {
      for (var e = 0, n2 = this.fields; e < n2.length; e++) {
        if (n2[e].T(t2)) return true;
      }
      return false;
    }, t.prototype.isEqual = function(t2) {
      return ut(this.fields, t2.fields, (function(t3, e) {
        return t3.isEqual(e);
      }));
    }, t;
  })()
);
var In = function(t, e) {
  this.field = t, this.transform = e;
};
var En = function(t, e) {
  this.version = t, this.transformResults = e;
};
var _n = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.updateTime = t2, this.exists = e;
    }
    return t.ze = function() {
      return new t();
    }, /** Creates a new Precondition with an exists flag. */
    t.exists = function(e) {
      return new t(void 0, e);
    }, /** Creates a new Precondition based on a version a document exists at. */
    t.updateTime = function(e) {
      return new t(e);
    }, Object.defineProperty(t.prototype, "Ke", {
      /** Returns whether this Precondition is empty. */
      get: function() {
        return void 0 === this.updateTime && void 0 === this.exists;
      },
      enumerable: false,
      configurable: true
    }), t.prototype.isEqual = function(t2) {
      return this.exists === t2.exists && (this.updateTime ? !!t2.updateTime && this.updateTime.isEqual(t2.updateTime) : !t2.updateTime);
    }, t;
  })()
);
function Tn(t, e) {
  return void 0 !== t.updateTime ? e instanceof zn && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof zn;
}
var Nn = function() {
};
function An(t, e, n2) {
  return t instanceof Ln ? (function(t2, e2, n3) {
    return new zn(t2.key, n3.version, t2.value, {
      hasCommittedMutations: true
    });
  })(t, 0, n2) : t instanceof Rn ? (function(t2, e2, n3) {
    if (!Tn(t2.Ge, e2))
      return new Kn(t2.key, n3.version);
    var r2 = On(t2, e2);
    return new zn(t2.key, n3.version, r2, {
      hasCommittedMutations: true
    });
  })(t, e, n2) : t instanceof Pn ? (function(t2, e2, n3) {
    if (k2(null != n3.transformResults), !Tn(t2.Ge, e2))
      return new Kn(t2.key, n3.version);
    var r2 = Vn(t2, e2), i2 = (
      /**
      * Creates a list of "transform results" (a transform result is a field value
      * representing the result of applying a transform) for use after a
      * TransformMutation has been acknowledged by the server.
      *
      * @param fieldTransforms The field transforms to apply the result to.
      * @param baseDoc The document prior to applying this mutation batch.
      * @param serverTransformResults The transform results received by the server.
      * @return The transform results list.
      */
      (function(t3, e3, n4) {
        var r3 = [];
        k2(t3.length === n4.length);
        for (var i3 = 0; i3 < n4.length; i3++) {
          var o2 = t3[i3], s2 = o2.transform, u2 = null;
          e3 instanceof zn && (u2 = e3.field(o2.field)), r3.push(hn(s2, u2, n4[i3]));
        }
        return r3;
      })(t2.fieldTransforms, e2, n3.transformResults)
    ), o = n3.version, s = Un(t2, r2.data(), i2);
    return new zn(t2.key, o, s, {
      hasCommittedMutations: true
    });
  })(t, e, n2) : (function(t2, e2, n3) {
    return new Bn(t2.key, n3.version, {
      hasCommittedMutations: true
    });
  })(t, 0, n2);
}
function Sn(t, e, n2, r2) {
  return t instanceof Ln ? (function(t2, e2) {
    if (!Tn(t2.Ge, e2)) return e2;
    var n3 = xn(e2);
    return new zn(t2.key, n3, t2.value, {
      Je: true
    });
  })(t, e) : t instanceof Rn ? (function(t2, e2) {
    if (!Tn(t2.Ge, e2)) return e2;
    var n3 = xn(e2), r3 = On(t2, e2);
    return new zn(t2.key, n3, r3, {
      Je: true
    });
  })(t, e) : t instanceof Pn ? (function(t2, e2, n3, r3) {
    if (!Tn(t2.Ge, e2)) return e2;
    var i2 = Vn(t2, e2), o = (function(t3, e3, n4, r4) {
      for (var i3 = [], o2 = 0, s2 = t3; o2 < s2.length; o2++) {
        var u2 = s2[o2], a = u2.transform, c = null;
        n4 instanceof zn && (c = n4.field(u2.field)), null === c && r4 instanceof zn && // If the current document does not contain a value for the mutated
        // field, use the value that existed before applying this mutation
        // batch. This solves an edge case where a PatchMutation clears the
        // values in a nested map before the TransformMutation is applied.
        (c = r4.field(u2.field)), i3.push(cn(a, c, e3));
      }
      return i3;
    })(t2.fieldTransforms, n3, e2, r3), s = Un(t2, i2.data(), o);
    return new zn(t2.key, i2.version, s, {
      Je: true
    });
  })(t, e, r2, n2) : (function(t2, e2) {
    return Tn(t2.Ge, e2) ? new Bn(t2.key, gt.min()) : e2;
  })(t, e);
}
function Dn(t, e) {
  return t instanceof Pn ? (function(t2, e2) {
    for (var n2 = null, r2 = 0, i2 = t2.fieldTransforms; r2 < i2.length; r2++) {
      var o = i2[r2], s = e2 instanceof zn ? e2.field(o.field) : void 0, u2 = fn(o.transform, s || null);
      null != u2 && (n2 = null == n2 ? new qn().set(o.field, u2) : n2.set(o.field, u2));
    }
    return n2 ? n2.Xe() : null;
  })(t, e) : null;
}
function kn(t, e) {
  return t.type === e.type && !!t.key.isEqual(e.key) && !!t.Ge.isEqual(e.Ge) && (0 === t.type ? t.value.isEqual(e.value) : 1 === t.type ? t.data.isEqual(e.data) && t.We.isEqual(e.We) : 2 !== t.type || ut(t.fieldTransforms, t.fieldTransforms, (function(t2, e2) {
    return (function(t3, e3) {
      return t3.field.isEqual(e3.field) && (function(t4, e4) {
        return t4 instanceof pn && e4 instanceof pn || t4 instanceof vn && e4 instanceof vn ? ut(t4.elements, e4.elements, fe) : t4 instanceof mn && e4 instanceof mn ? fe(t4.je, e4.je) : t4 instanceof ln && e4 instanceof ln;
      })(t3.transform, e3.transform);
    })(t2, e2);
  })));
}
function xn(t) {
  return t instanceof zn ? t.version : gt.min();
}
var Ln = (
  /** @class */
  (function(e) {
    function n2(t, n3, r2) {
      var i2 = this;
      return (i2 = e.call(this) || this).key = t, i2.value = n3, i2.Ge = r2, i2.type = 0, i2;
    }
    return __extends2(n2, e), n2;
  })(Nn)
);
var Rn = (
  /** @class */
  (function(e) {
    function n2(t, n3, r2, i2) {
      var o = this;
      return (o = e.call(this) || this).key = t, o.data = n3, o.We = r2, o.Ge = i2, o.type = 1, o;
    }
    return __extends2(n2, e), n2;
  })(Nn)
);
function On(t, e) {
  return (function(t2, e2) {
    var n2 = new qn(e2);
    return t2.We.fields.forEach((function(e3) {
      if (!e3.m()) {
        var r2 = t2.data.field(e3);
        null !== r2 ? n2.set(e3, r2) : n2.delete(e3);
      }
    })), n2.Xe();
  })(t, e instanceof zn ? e.data() : Mn.empty());
}
var Pn = (
  /** @class */
  (function(e) {
    function n2(t, n3) {
      var r2 = this;
      return (r2 = e.call(this) || this).key = t, r2.fieldTransforms = n3, r2.type = 2, // NOTE: We set a precondition of exists: true as a safety-check, since we
      // always combine TransformMutations with a SetMutation or PatchMutation which
      // (if successful) should end up with an existing document.
      r2.Ge = _n.exists(true), r2;
    }
    return __extends2(n2, e), n2;
  })(Nn)
);
function Vn(t, e) {
  return e;
}
function Un(t, e, n2) {
  for (var r2 = new qn(e), i2 = 0; i2 < t.fieldTransforms.length; i2++) {
    var o = t.fieldTransforms[i2];
    r2.set(o.field, n2[i2]);
  }
  return r2.Xe();
}
var Cn = (
  /** @class */
  (function(e) {
    function n2(t, n3) {
      var r2 = this;
      return (r2 = e.call(this) || this).key = t, r2.Ge = n3, r2.type = 3, r2;
    }
    return __extends2(n2, e), n2;
  })(Nn)
);
var Fn = (
  /** @class */
  (function(e) {
    function n2(t, n3) {
      var r2 = this;
      return (r2 = e.call(this) || this).key = t, r2.Ge = n3, r2.type = 4, r2;
    }
    return __extends2(n2, e), n2;
  })(Nn)
);
var Mn = (
  /** @class */
  (function() {
    function t(t2) {
      this.proto = t2;
    }
    return t.empty = function() {
      return new t({
        mapValue: {}
      });
    }, /**
     * Returns the value at the given path or null.
     *
     * @param path the path to search
     * @return The value at the path or if there it doesn't exist.
     */
    t.prototype.field = function(t2) {
      if (t2.m()) return this.proto;
      for (var e = this.proto, n2 = 0; n2 < t2.length - 1; ++n2) {
        if (!e.mapValue.fields) return null;
        if (!Ne(e = e.mapValue.fields[t2.get(n2)])) return null;
      }
      return (e = (e.mapValue.fields || {})[t2._()]) || null;
    }, t.prototype.isEqual = function(t2) {
      return fe(this.proto, t2.proto);
    }, t;
  })()
);
var qn = (
  /** @class */
  (function() {
    function t(t2) {
      void 0 === t2 && (t2 = Mn.empty()), this.Ze = t2, /** A map that contains the accumulated changes in this builder. */
      this.tn = /* @__PURE__ */ new Map();
    }
    return t.prototype.set = function(t2, e) {
      return this.en(t2, e), this;
    }, /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path The field path to remove.
     * @return The current Builder instance.
     */
    t.prototype.delete = function(t2) {
      return this.en(t2, null), this;
    }, /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */
    t.prototype.en = function(t2, e) {
      for (var n2 = this.tn, r2 = 0; r2 < t2.length - 1; ++r2) {
        var i2 = t2.get(r2), o = n2.get(i2);
        o instanceof Map ? (
          // Re-use a previously created map
          n2 = o
        ) : o && 10 === he(o) ? (
          // Convert the existing Protobuf MapValue into a map
          (o = new Map(Object.entries(o.mapValue.fields || {})), n2.set(i2, o), n2 = o)
        ) : (
          // Create an empty map to represent the current nesting level
          (o = /* @__PURE__ */ new Map(), n2.set(i2, o), n2 = o)
        );
      }
      n2.set(t2._(), e);
    }, /** Returns an ObjectValue with all mutations applied. */
    t.prototype.Xe = function() {
      var t2 = this.nn(C2.P(), this.tn);
      return null != t2 ? new Mn(t2) : this.Ze;
    }, /**
     * Applies any overlays from `currentOverlays` that exist at `currentPath`
     * and returns the merged data at `currentPath` (or null if there were no
     * changes).
     *
     * @param currentPath The path at the current nesting level. Can be set to
     * FieldValue.emptyPath() to represent the root.
     * @param currentOverlays The overlays at the current nesting level in the
     * same format as `overlayMap`.
     * @return The merged data at `currentPath` or null if no modifications
     * were applied.
     */
    t.prototype.nn = function(t2, e) {
      var n2 = this, r2 = false, i2 = this.Ze.field(t2), o = Ne(i2) ? (
        // If there is already data at the current path, base our
        Object.assign({}, i2.mapValue.fields)
      ) : {};
      return e.forEach((function(e2, i3) {
        if (e2 instanceof Map) {
          var s = n2.nn(t2.child(i3), e2);
          null != s && (o[i3] = s, r2 = true);
        } else null !== e2 ? (o[i3] = e2, r2 = true) : o.hasOwnProperty(i3) && (delete o[i3], r2 = true);
      })), r2 ? {
        mapValue: {
          fields: o
        }
      } : null;
    }, t;
  })()
);
function jn(t) {
  var e = [];
  return R2(t.fields || {}, (function(t2, n2) {
    var r2 = new C2([t2]);
    if (Ne(n2)) {
      var i2 = jn(n2.mapValue).fields;
      if (0 === i2.length)
        e.push(r2);
      else
        for (var o = 0, s = i2; o < s.length; o++) {
          var u2 = s[o];
          e.push(r2.child(u2));
        }
    } else
      e.push(r2);
  })), new bn(e);
}
var Gn = function(t, e) {
  this.key = t, this.version = e;
};
var zn = (
  /** @class */
  (function(e) {
    function n2(t, n3, r2, i2) {
      var o = this;
      return (o = e.call(this, t, n3) || this).sn = r2, o.Je = !!i2.Je, o.hasCommittedMutations = !!i2.hasCommittedMutations, o;
    }
    return __extends2(n2, e), n2.prototype.field = function(t) {
      return this.sn.field(t);
    }, n2.prototype.data = function() {
      return this.sn;
    }, n2.prototype.rn = function() {
      return this.sn.proto;
    }, n2.prototype.isEqual = function(t) {
      return t instanceof n2 && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.Je === t.Je && this.hasCommittedMutations === t.hasCommittedMutations && this.sn.isEqual(t.sn);
    }, n2.prototype.toString = function() {
      return "Document(" + this.key + ", " + this.version + ", " + this.sn.toString() + ", {hasLocalMutations: " + this.Je + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
    }, Object.defineProperty(n2.prototype, "hasPendingWrites", {
      get: function() {
        return this.Je || this.hasCommittedMutations;
      },
      enumerable: false,
      configurable: true
    }), n2;
  })(Gn)
);
var Bn = (
  /** @class */
  (function(e) {
    function n2(t, n3, r2) {
      var i2 = this;
      return (i2 = e.call(this, t, n3) || this).hasCommittedMutations = !(!r2 || !r2.hasCommittedMutations), i2;
    }
    return __extends2(n2, e), n2.prototype.toString = function() {
      return "NoDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n2.prototype, "hasPendingWrites", {
      get: function() {
        return this.hasCommittedMutations;
      },
      enumerable: false,
      configurable: true
    }), n2.prototype.isEqual = function(t) {
      return t instanceof n2 && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n2;
  })(Gn)
);
var Kn = (
  /** @class */
  (function(e) {
    function n2() {
      return null !== e && e.apply(this, arguments) || this;
    }
    return __extends2(n2, e), n2.prototype.toString = function() {
      return "UnknownDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n2.prototype, "hasPendingWrites", {
      get: function() {
        return true;
      },
      enumerable: false,
      configurable: true
    }), n2.prototype.isEqual = function(t) {
      return t instanceof n2 && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n2;
  })(Gn)
);
var Wn = (
  /**
       * Initializes a Query with a path and optional additional query constraints.
       * Path must currently be empty if this is a collection group query.
       */
  function(t, e, n2, r2, i2, o, s, u2) {
    void 0 === e && (e = null), void 0 === n2 && (n2 = []), void 0 === r2 && (r2 = []), void 0 === i2 && (i2 = null), void 0 === o && (o = "F"), void 0 === s && (s = null), void 0 === u2 && (u2 = null), this.path = t, this.collectionGroup = e, this.on = n2, this.filters = r2, this.limit = i2, this.an = o, this.startAt = s, this.endAt = u2, this.cn = null, // The corresponding `Target` of this `Query` instance.
    this.un = null, this.startAt, this.endAt;
  }
);
function Qn(t, e, n2, r2, i2, o, s, u2) {
  return new Wn(t, e, n2, r2, i2, o, s, u2);
}
function Hn(t) {
  return new Wn(t);
}
function Yn(t) {
  return !wt(t.limit) && "F" === t.an;
}
function $n(t) {
  return !wt(t.limit) && "L" === t.an;
}
function Xn(t) {
  return t.on.length > 0 ? t.on[0].field : null;
}
function Jn(t) {
  for (var e = 0, n2 = t.filters; e < n2.length; e++) {
    var r2 = n2[e];
    if (r2.hn()) return r2.field;
  }
  return null;
}
function Zn(t) {
  return null !== t.collectionGroup;
}
function tr(t) {
  var e = x2(t);
  if (null === e.cn) {
    e.cn = [];
    var n2 = Jn(e), r2 = Xn(e);
    if (null !== n2 && null === r2)
      n2.p() || e.cn.push(new _r(n2)), e.cn.push(new _r(
        C2.v(),
        "asc"
        /* ASCENDING */
      ));
    else {
      for (var i2 = false, o = 0, s = e.on; o < s.length; o++) {
        var u2 = s[o];
        e.cn.push(u2), u2.field.p() && (i2 = true);
      }
      if (!i2) {
        var a = e.on.length > 0 ? e.on[e.on.length - 1].dir : "asc";
        e.cn.push(new _r(C2.v(), a));
      }
    }
  }
  return e.cn;
}
function er(t) {
  var e = x2(t);
  if (!e.un) if ("F" === e.an) e.un = _t(e.path, e.collectionGroup, tr(e), e.filters, e.limit, e.startAt, e.endAt);
  else {
    for (var n2 = [], r2 = 0, i2 = tr(e); r2 < i2.length; r2++) {
      var o = i2[r2], s = "desc" === o.dir ? "asc" : "desc";
      n2.push(new _r(o.field, s));
    }
    var u2 = e.endAt ? new wr(e.endAt.position, !e.endAt.before) : null, a = e.startAt ? new wr(e.startAt.position, !e.startAt.before) : null;
    e.un = _t(e.path, e.collectionGroup, n2, e.filters, e.limit, u2, a);
  }
  return e.un;
}
function nr(t, e, n2) {
  return new Wn(t.path, t.collectionGroup, t.on.slice(), t.filters.slice(), e, n2, t.startAt, t.endAt);
}
function rr(t, e) {
  return new Wn(t.path, t.collectionGroup, t.on.slice(), t.filters.slice(), t.limit, t.an, e, t.endAt);
}
function ir(t, e) {
  return new Wn(t.path, t.collectionGroup, t.on.slice(), t.filters.slice(), t.limit, t.an, t.startAt, e);
}
function or(t, e) {
  return Nt(er(t), er(e)) && t.an === e.an;
}
function sr(t) {
  return Tt(er(t)) + "|lt:" + t.an;
}
function ur(t) {
  return "Query(target=" + (function(t2) {
    var e = t2.path.R();
    return null !== t2.collectionGroup && (e += " collectionGroup=" + t2.collectionGroup), t2.filters.length > 0 && (e += ", filters: [" + t2.filters.map((function(t3) {
      return (e2 = t3).field.R() + " " + e2.op + " " + ve(e2.value);
      var e2;
    })).join(", ") + "]"), wt(t2.limit) || (e += ", limit: " + t2.limit), t2.orderBy.length > 0 && (e += ", orderBy: [" + t2.orderBy.map((function(t3) {
      return (e2 = t3).field.R() + " (" + e2.dir + ")";
      var e2;
    })).join(", ") + "]"), t2.startAt && (e += ", startAt: " + br(t2.startAt)), t2.endAt && (e += ", endAt: " + br(t2.endAt)), "Target(" + e + ")";
  })(er(t)) + "; limitType=" + t.an + ")";
}
function ar(t, e) {
  return (function(t2, e2) {
    var n2 = e2.key.path;
    return null !== t2.collectionGroup ? e2.key.N(t2.collectionGroup) && t2.path.T(n2) : F2.F(t2.path) ? t2.path.isEqual(n2) : t2.path.I(n2);
  })(t, e) && (function(t2, e2) {
    for (var n2 = 0, r2 = t2.on; n2 < r2.length; n2++) {
      var i2 = r2[n2];
      if (!i2.field.p() && null === e2.field(i2.field)) return false;
    }
    return true;
  })(t, e) && (function(t2, e2) {
    for (var n2 = 0, r2 = t2.filters; n2 < r2.length; n2++) {
      if (!r2[n2].matches(e2)) return false;
    }
    return true;
  })(t, e) && (function(t2, e2) {
    return !(t2.startAt && !Ir(t2.startAt, tr(t2), e2)) && (!t2.endAt || !Ir(t2.endAt, tr(t2), e2));
  })(t, e);
}
function cr(t) {
  return function(e, n2) {
    for (var r2 = false, i2 = 0, o = tr(t); i2 < o.length; i2++) {
      var s = o[i2], u2 = Tr(s, e, n2);
      if (0 !== u2) return u2;
      r2 = r2 || s.field.p();
    }
    return 0;
  };
}
var hr = (
  /** @class */
  (function(e) {
    function n2(t, n3, r2) {
      var i2 = this;
      return (i2 = e.call(this) || this).field = t, i2.op = n3, i2.value = r2, i2;
    }
    return __extends2(n2, e), n2.create = function(t, e2, r2) {
      if (t.p()) return "in" === e2 || "not-in" === e2 ? this.ln(t, e2, r2) : new fr(t, e2, r2);
      if (_e(r2)) {
        if ("==" !== e2 && "!=" !== e2) throw new I2(b.INVALID_ARGUMENT, "Invalid query. Null only supports '==' and '!=' comparisons.");
        return new n2(t, e2, r2);
      }
      if (Te(r2)) {
        if ("==" !== e2 && "!=" !== e2) throw new I2(b.INVALID_ARGUMENT, "Invalid query. NaN only supports '==' and '!=' comparisons.");
        return new n2(t, e2, r2);
      }
      return "array-contains" === e2 ? new vr(t, r2) : "in" === e2 ? new yr(t, r2) : "not-in" === e2 ? new mr(t, r2) : "array-contains-any" === e2 ? new gr(t, r2) : new n2(t, e2, r2);
    }, n2.ln = function(t, e2, n3) {
      return "in" === e2 ? new lr(t, n3) : new pr(t, n3);
    }, n2.prototype.matches = function(t) {
      var e2 = t.field(this.field);
      return "!=" === this.op ? null !== e2 && this._n(pe(e2, this.value)) : null !== e2 && he(this.value) === he(e2) && this._n(pe(e2, this.value));
    }, n2.prototype._n = function(t) {
      switch (this.op) {
        case "<":
          return t < 0;
        case "<=":
          return t <= 0;
        case "==":
          return 0 === t;
        case "!=":
          return 0 !== t;
        case ">":
          return t > 0;
        case ">=":
          return t >= 0;
        default:
          return D2();
      }
    }, n2.prototype.hn = function() {
      return [
        "<",
        "<=",
        ">",
        ">=",
        "!=",
        "not-in"
        /* NOT_IN */
      ].indexOf(this.op) >= 0;
    }, n2;
  })((function() {
  }))
);
var fr = (
  /** @class */
  (function(e) {
    function n2(t, n3, r2) {
      var i2 = this;
      return (i2 = e.call(this, t, n3, r2) || this).key = F2.C(r2.referenceValue), i2;
    }
    return __extends2(n2, e), n2.prototype.matches = function(t) {
      var e2 = F2.i(t.key, this.key);
      return this._n(e2);
    }, n2;
  })(hr)
);
var lr = (
  /** @class */
  (function(e) {
    function n2(t, n3) {
      var r2 = this;
      return (r2 = e.call(this, t, "in", n3) || this).keys = dr("in", n3), r2;
    }
    return __extends2(n2, e), n2.prototype.matches = function(t) {
      return this.keys.some((function(e2) {
        return e2.isEqual(t.key);
      }));
    }, n2;
  })(hr)
);
var pr = (
  /** @class */
  (function(e) {
    function n2(t, n3) {
      var r2 = this;
      return (r2 = e.call(this, t, "not-in", n3) || this).keys = dr("not-in", n3), r2;
    }
    return __extends2(n2, e), n2.prototype.matches = function(t) {
      return !this.keys.some((function(e2) {
        return e2.isEqual(t.key);
      }));
    }, n2;
  })(hr)
);
function dr(t, e) {
  var n2;
  return ((null === (n2 = e.arrayValue) || void 0 === n2 ? void 0 : n2.values) || []).map((function(t2) {
    return F2.C(t2.referenceValue);
  }));
}
var vr = (
  /** @class */
  (function(e) {
    function n2(t, n3) {
      return e.call(this, t, "array-contains", n3) || this;
    }
    return __extends2(n2, e), n2.prototype.matches = function(t) {
      var e2 = t.field(this.field);
      return Ee(e2) && le(e2.arrayValue, this.value);
    }, n2;
  })(hr)
);
var yr = (
  /** @class */
  (function(e) {
    function n2(t, n3) {
      return e.call(this, t, "in", n3) || this;
    }
    return __extends2(n2, e), n2.prototype.matches = function(t) {
      var e2 = t.field(this.field);
      return null !== e2 && le(this.value.arrayValue, e2);
    }, n2;
  })(hr)
);
var mr = (
  /** @class */
  (function(e) {
    function n2(t, n3) {
      return e.call(this, t, "not-in", n3) || this;
    }
    return __extends2(n2, e), n2.prototype.matches = function(t) {
      if (le(this.value.arrayValue, {
        nullValue: "NULL_VALUE"
      })) return false;
      var e2 = t.field(this.field);
      return null !== e2 && !le(this.value.arrayValue, e2);
    }, n2;
  })(hr)
);
var gr = (
  /** @class */
  (function(e) {
    function n2(t, n3) {
      return e.call(this, t, "array-contains-any", n3) || this;
    }
    return __extends2(n2, e), n2.prototype.matches = function(t) {
      var e2 = this, n3 = t.field(this.field);
      return !(!Ee(n3) || !n3.arrayValue.values) && n3.arrayValue.values.some((function(t2) {
        return le(e2.value.arrayValue, t2);
      }));
    }, n2;
  })(hr)
);
var wr = function(t, e) {
  this.position = t, this.before = e;
};
function br(t) {
  return (t.before ? "b" : "a") + ":" + t.position.map((function(t2) {
    return ve(t2);
  })).join(",");
}
function Ir(t, e, n2) {
  for (var r2 = 0, i2 = 0; i2 < t.position.length; i2++) {
    var o = e[i2], s = t.position[i2];
    if (r2 = o.field.p() ? F2.i(F2.C(s.referenceValue), n2.key) : pe(s, n2.field(o.field)), "desc" === o.dir && (r2 *= -1), 0 !== r2) break;
  }
  return t.before ? r2 <= 0 : r2 < 0;
}
function Er(t, e) {
  if (null === t) return null === e;
  if (null === e) return false;
  if (t.before !== e.before || t.position.length !== e.position.length) return false;
  for (var n2 = 0; n2 < t.position.length; n2++) if (!fe(t.position[n2], e.position[n2])) return false;
  return true;
}
var _r = function(t, e) {
  void 0 === e && (e = "asc"), this.field = t, this.dir = e;
};
function Tr(t, e, n2) {
  var r2 = t.field.p() ? F2.i(e.key, n2.key) : (function(t2, e2, n3) {
    var r3 = e2.field(t2), i2 = n3.field(t2);
    return null !== r3 && null !== i2 ? pe(r3, i2) : D2();
  })(t.field, e, n2);
  switch (t.dir) {
    case "asc":
      return r2;
    case "desc":
      return -1 * r2;
    default:
      return D2();
  }
}
function Nr(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field);
}
var Ar = function() {
  var t = this;
  this.promise = new Promise((function(e, n2) {
    t.resolve = e, t.reject = n2;
  }));
};
var Sr = (
  /** @class */
  (function() {
    function t(t2, e, n2, r2, i2) {
      void 0 === n2 && (n2 = 1e3), void 0 === r2 && (r2 = 1.5), void 0 === i2 && (i2 = 6e4), this.fn = t2, this.dn = e, this.wn = n2, this.mn = r2, this.Tn = i2, this.En = 0, this.In = null, /** The last backoff attempt, as epoch milliseconds. */
      this.An = Date.now(), this.reset();
    }
    return t.prototype.reset = function() {
      this.En = 0;
    }, /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    t.prototype.Rn = function() {
      this.En = this.Tn;
    }, /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    t.prototype.gn = function(t2) {
      var e = this;
      this.cancel();
      var n2 = Math.floor(this.En + this.Pn()), r2 = Math.max(0, Date.now() - this.An), i2 = Math.max(0, n2 - r2);
      i2 > 0 && T2("ExponentialBackoff", "Backing off for " + i2 + " ms (base delay: " + this.En + " ms, delay with jitter: " + n2 + " ms, last attempt: " + r2 + " ms ago)"), this.In = this.fn.yn(this.dn, i2, (function() {
        return e.An = Date.now(), t2();
      })), // Apply backoff factor to determine next delay and ensure it is within
      // bounds.
      this.En *= this.mn, this.En < this.wn && (this.En = this.wn), this.En > this.Tn && (this.En = this.Tn);
    }, t.prototype.Vn = function() {
      null !== this.In && (this.In.pn(), this.In = null);
    }, t.prototype.cancel = function() {
      null !== this.In && (this.In.cancel(), this.In = null);
    }, /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
    t.prototype.Pn = function() {
      return (Math.random() - 0.5) * this.En;
    }, t;
  })()
);
var Dr = (
  /** @class */
  (function() {
    function t(t2) {
      var e = this;
      this.bn = null, this.vn = null, // When the operation resolves, we'll set result or error and mark isDone.
      this.result = void 0, this.error = void 0, this.Sn = false, // Set to true when .then() or .catch() are called and prevents additional
      // chaining.
      this.Dn = false, t2((function(t3) {
        e.Sn = true, e.result = t3, e.bn && // value should be defined unless T is Void, but we can't express
        // that in the type system.
        e.bn(t3);
      }), (function(t3) {
        e.Sn = true, e.error = t3, e.vn && e.vn(t3);
      }));
    }
    return t.prototype.catch = function(t2) {
      return this.next(void 0, t2);
    }, t.prototype.next = function(e, n2) {
      var r2 = this;
      return this.Dn && D2(), this.Dn = true, this.Sn ? this.error ? this.Cn(n2, this.error) : this.Nn(e, this.result) : new t((function(t2, i2) {
        r2.bn = function(n3) {
          r2.Nn(e, n3).next(t2, i2);
        }, r2.vn = function(e2) {
          r2.Cn(n2, e2).next(t2, i2);
        };
      }));
    }, t.prototype.Fn = function() {
      var t2 = this;
      return new Promise((function(e, n2) {
        t2.next(e, n2);
      }));
    }, t.prototype.xn = function(e) {
      try {
        var n2 = e();
        return n2 instanceof t ? n2 : t.resolve(n2);
      } catch (e2) {
        return t.reject(e2);
      }
    }, t.prototype.Nn = function(e, n2) {
      return e ? this.xn((function() {
        return e(n2);
      })) : t.resolve(n2);
    }, t.prototype.Cn = function(e, n2) {
      return e ? this.xn((function() {
        return e(n2);
      })) : t.reject(n2);
    }, t.resolve = function(e) {
      return new t((function(t2, n2) {
        t2(e);
      }));
    }, t.reject = function(e) {
      return new t((function(t2, n2) {
        n2(e);
      }));
    }, t.$n = function(e) {
      return new t((function(t2, n2) {
        var r2 = 0, i2 = 0, o = false;
        e.forEach((function(e2) {
          ++r2, e2.next((function() {
            ++i2, o && i2 === r2 && t2();
          }), (function(t3) {
            return n2(t3);
          }));
        })), o = true, i2 === r2 && t2();
      }));
    }, /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */
    t.kn = function(e) {
      for (var n2 = t.resolve(false), r2 = function(e2) {
        n2 = n2.next((function(n3) {
          return n3 ? t.resolve(n3) : e2();
        }));
      }, i2 = 0, o = e; i2 < o.length; i2++) {
        r2(o[i2]);
      }
      return n2;
    }, t.forEach = function(t2, e) {
      var n2 = this, r2 = [];
      return t2.forEach((function(t3, i2) {
        r2.push(e.call(n2, t3, i2));
      })), this.$n(r2);
    }, t;
  })()
);
var kr = (
  /** @class */
  (function() {
    function t(e, n2, r2) {
      this.name = e, this.version = n2, this.Mn = r2, // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
      // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
      // whatever reason it's much harder to hit after 12.2 so we only proactively
      // log on 12.2.
      12.2 === t.On(getUA()) && N2("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
    }
    return t.delete = function(t2) {
      return T2("SimpleDb", "Removing database:", t2), Vr(window.indexedDB.deleteDatabase(t2)).Fn();
    }, /** Returns true if IndexedDB is available in the current environment. */
    t.Ln = function() {
      if ("undefined" == typeof indexedDB) return false;
      if (t.Bn()) return true;
      var e = getUA(), n2 = t.On(e), r2 = 0 < n2 && n2 < 10, i2 = t.qn(e), o = 0 < i2 && i2 < 4.5;
      return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || r2 || o);
    }, /**
     * Returns true if the backing IndexedDB store is the Node IndexedDBShim
     * (see https://github.com/axemclion/IndexedDBShim).
     */
    t.Bn = function() {
      var t2;
      return "undefined" != typeof process && "YES" === (null === (t2 = process.env) || void 0 === t2 ? void 0 : t2.Un);
    }, /** Helper to get a typed SimpleDbStore from a transaction. */
    t.Qn = function(t2, e) {
      return t2.store(e);
    }, // visible for testing
    /** Parse User Agent to determine iOS version. Returns -1 if not found. */
    t.On = function(t2) {
      var e = t2.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n2 = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
      return Number(n2);
    }, // visible for testing
    /** Parse User Agent to determine Android version. Returns -1 if not found. */
    t.qn = function(t2) {
      var e = t2.match(/Android ([\d.]+)/i), n2 = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
      return Number(n2);
    }, /**
     * Opens the specified database, creating or upgrading it if necessary.
     */
    t.prototype.Wn = function(t2) {
      return __awaiter2(this, void 0, void 0, (function() {
        var e, r2 = this;
        return __generator2(this, (function(n2) {
          switch (n2.label) {
            case 0:
              return this.db ? [3, 2] : (T2("SimpleDb", "Opening database:", this.name), e = this, [4, new Promise((function(e2, n3) {
                var i2 = indexedDB.open(r2.name, r2.version);
                i2.onsuccess = function(t3) {
                  var n4 = t3.target.result;
                  e2(n4);
                }, i2.onblocked = function() {
                  n3(new Lr(t2, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
                }, i2.onerror = function(e3) {
                  var r3 = e3.target.error;
                  "VersionError" === r3.name ? n3(new I2(b.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : n3(new Lr(t2, r3));
                }, i2.onupgradeneeded = function(t3) {
                  T2("SimpleDb", 'Database "' + r2.name + '" requires upgrade from version:', t3.oldVersion);
                  var e3 = t3.target.result;
                  r2.Mn.createOrUpgrade(e3, i2.transaction, t3.oldVersion, r2.version).next((function() {
                    T2("SimpleDb", "Database upgrade to version " + r2.version + " complete");
                  }));
                };
              }))]);
            case 1:
              e.db = n2.sent(), n2.label = 2;
            case 2:
              return [2, (this.jn && (this.db.onversionchange = function(t3) {
                return r2.jn(t3);
              }), this.db)];
          }
        }));
      }));
    }, t.prototype.Kn = function(t2) {
      this.jn = t2, this.db && (this.db.onversionchange = function(e) {
        return t2(e);
      });
    }, t.prototype.runTransaction = function(t2, r2, i2, o) {
      return __awaiter2(this, void 0, void 0, (function() {
        var e, s, u2, a, c;
        return __generator2(this, (function(h) {
          switch (h.label) {
            case 0:
              e = "readonly" === r2, s = 0, u2 = function() {
                var r3, u3, c2, h2, f;
                return __generator2(this, (function(n2) {
                  switch (n2.label) {
                    case 0:
                      ++s, n2.label = 1;
                    case 1:
                      return n2.trys.push([1, 4, , 5]), [4, a.Wn(t2)];
                    case 2:
                      return a.db = n2.sent(), r3 = Or.open(a.db, t2, e ? "readonly" : "readwrite", i2), u3 = o(r3).catch((function(t3) {
                        return r3.abort(t3), Dr.reject(t3);
                      })).Fn(), c2 = {}, u3.catch((function() {
                      })), [4, r3.Gn];
                    case 3:
                      return [2, (c2.value = // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                      // fire), but still return the original transactionFnResult back to the
                      // caller.
                      (n2.sent(), u3), c2)];
                    case 4:
                      return h2 = n2.sent(), f = "FirebaseError" !== h2.name && s < 3, T2("SimpleDb", "Transaction failed with error:", h2.message, "Retrying:", f), a.close(), f ? [3, 5] : [2, {
                        value: Promise.reject(h2)
                      }];
                    case 5:
                      return [
                        2
                        /*return*/
                      ];
                  }
                }));
              }, a = this, h.label = 1;
            case 1:
              return [5, u2()];
            case 2:
              if ("object" == typeof (c = h.sent())) return [2, c.value];
              h.label = 3;
            case 3:
              return [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        }));
      }));
    }, t.prototype.close = function() {
      this.db && this.db.close(), this.db = void 0;
    }, t;
  })()
);
var xr = (
  /** @class */
  (function() {
    function t(t2) {
      this.zn = t2, this.Hn = false, this.Yn = null;
    }
    return Object.defineProperty(t.prototype, "Sn", {
      get: function() {
        return this.Hn;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "Jn", {
      get: function() {
        return this.Yn;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "cursor", {
      set: function(t2) {
        this.zn = t2;
      },
      enumerable: false,
      configurable: true
    }), /**
     * This function can be called to stop iteration at any point.
     */
    t.prototype.done = function() {
      this.Hn = true;
    }, /**
     * This function can be called to skip to that next key, which could be
     * an index or a primary key.
     */
    t.prototype.Xn = function(t2) {
      this.Yn = t2;
    }, /**
     * Delete the current cursor value from the object store.
     *
     * NOTE: You CANNOT do this with a keysOnly query.
     */
    t.prototype.delete = function() {
      return Vr(this.zn.delete());
    }, t;
  })()
);
var Lr = (
  /** @class */
  (function(e) {
    function n2(t, n3) {
      var r2 = this;
      return (r2 = e.call(this, b.UNAVAILABLE, "IndexedDB transaction '" + t + "' failed: " + n3) || this).name = "IndexedDbTransactionError", r2;
    }
    return __extends2(n2, e), n2;
  })(I2)
);
function Rr(t) {
  return "IndexedDbTransactionError" === t.name;
}
var Or = (
  /** @class */
  (function() {
    function t(t2, e) {
      var n2 = this;
      this.action = t2, this.transaction = e, this.aborted = false, /**
           * A promise that resolves with the result of the IndexedDb transaction.
           */
      this.Zn = new Ar(), this.transaction.oncomplete = function() {
        n2.Zn.resolve();
      }, this.transaction.onabort = function() {
        e.error ? n2.Zn.reject(new Lr(t2, e.error)) : n2.Zn.resolve();
      }, this.transaction.onerror = function(e2) {
        var r2 = Cr(e2.target.error);
        n2.Zn.reject(new Lr(t2, r2));
      };
    }
    return t.open = function(e, n2, r2, i2) {
      try {
        return new t(n2, e.transaction(i2, r2));
      } catch (e2) {
        throw new Lr(n2, e2);
      }
    }, Object.defineProperty(t.prototype, "Gn", {
      get: function() {
        return this.Zn.promise;
      },
      enumerable: false,
      configurable: true
    }), t.prototype.abort = function(t2) {
      t2 && this.Zn.reject(t2), this.aborted || (T2("SimpleDb", "Aborting transaction:", t2 ? t2.message : "Client-initiated abort"), this.aborted = true, this.transaction.abort());
    }, /**
     * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
     * operations performed on the SimpleDbStore happen within the context of this
     * transaction and it cannot be used anymore once the transaction is
     * completed.
     *
     * Note that we can't actually enforce that the KeyType and ValueType are
     * correct, but they allow type safety through the rest of the consuming code.
     */
    t.prototype.store = function(t2) {
      var e = this.transaction.objectStore(t2);
      return new Pr(e);
    }, t;
  })()
);
var Pr = (
  /** @class */
  (function() {
    function t(t2) {
      this.store = t2;
    }
    return t.prototype.put = function(t2, e) {
      var n2;
      return void 0 !== e ? (T2("SimpleDb", "PUT", this.store.name, t2, e), n2 = this.store.put(e, t2)) : (T2("SimpleDb", "PUT", this.store.name, "<auto-key>", t2), n2 = this.store.put(t2)), Vr(n2);
    }, /**
     * Adds a new value into an Object Store and returns the new key. Similar to
     * IndexedDb's `add()`, this method will fail on primary key collisions.
     *
     * @param value The object to write.
     * @return The key of the value to add.
     */
    t.prototype.add = function(t2) {
      return T2("SimpleDb", "ADD", this.store.name, t2, t2), Vr(this.store.add(t2));
    }, /**
     * Gets the object with the specified key from the specified store, or null
     * if no object exists with the specified key.
     *
     * @key The key of the object to get.
     * @return The object with the specified key or null if no object exists.
     */
    t.prototype.get = function(t2) {
      var e = this;
      return Vr(this.store.get(t2)).next((function(n2) {
        return void 0 === n2 && (n2 = null), T2("SimpleDb", "GET", e.store.name, t2, n2), n2;
      }));
    }, t.prototype.delete = function(t2) {
      return T2("SimpleDb", "DELETE", this.store.name, t2), Vr(this.store.delete(t2));
    }, /**
     * If we ever need more of the count variants, we can add overloads. For now,
     * all we need is to count everything in a store.
     *
     * Returns the number of rows in the store.
     */
    t.prototype.count = function() {
      return T2("SimpleDb", "COUNT", this.store.name), Vr(this.store.count());
    }, t.prototype.ts = function(t2, e) {
      var n2 = this.cursor(this.options(t2, e)), r2 = [];
      return this.es(n2, (function(t3, e2) {
        r2.push(e2);
      })).next((function() {
        return r2;
      }));
    }, t.prototype.ns = function(t2, e) {
      T2("SimpleDb", "DELETE ALL", this.store.name);
      var n2 = this.options(t2, e);
      n2.ss = false;
      var r2 = this.cursor(n2);
      return this.es(r2, (function(t3, e2, n3) {
        return n3.delete();
      }));
    }, t.prototype.rs = function(t2, e) {
      var n2;
      e ? n2 = t2 : (n2 = {}, e = t2);
      var r2 = this.cursor(n2);
      return this.es(r2, e);
    }, /**
     * Iterates over a store, but waits for the given callback to complete for
     * each entry before iterating the next entry. This allows the callback to do
     * asynchronous work to determine if this iteration should continue.
     *
     * The provided callback should return `true` to continue iteration, and
     * `false` otherwise.
     */
    t.prototype.os = function(t2) {
      var e = this.cursor({});
      return new Dr((function(n2, r2) {
        e.onerror = function(t3) {
          var e2 = Cr(t3.target.error);
          r2(e2);
        }, e.onsuccess = function(e2) {
          var r3 = e2.target.result;
          r3 ? t2(r3.primaryKey, r3.value).next((function(t3) {
            t3 ? r3.continue() : n2();
          })) : n2();
        };
      }));
    }, t.prototype.es = function(t2, e) {
      var n2 = [];
      return new Dr((function(r2, i2) {
        t2.onerror = function(t3) {
          i2(t3.target.error);
        }, t2.onsuccess = function(t3) {
          var i3 = t3.target.result;
          if (i3) {
            var o = new xr(i3), s = e(i3.primaryKey, i3.value, o);
            if (s instanceof Dr) {
              var u2 = s.catch((function(t4) {
                return o.done(), Dr.reject(t4);
              }));
              n2.push(u2);
            }
            o.Sn ? r2() : null === o.Jn ? i3.continue() : i3.continue(o.Jn);
          } else r2();
        };
      })).next((function() {
        return Dr.$n(n2);
      }));
    }, t.prototype.options = function(t2, e) {
      var n2 = void 0;
      return void 0 !== t2 && ("string" == typeof t2 ? n2 = t2 : e = t2), {
        index: n2,
        range: e
      };
    }, t.prototype.cursor = function(t2) {
      var e = "next";
      if (t2.reverse && (e = "prev"), t2.index) {
        var n2 = this.store.index(t2.index);
        return t2.ss ? n2.openKeyCursor(t2.range, e) : n2.openCursor(t2.range, e);
      }
      return this.store.openCursor(t2.range, e);
    }, t;
  })()
);
function Vr(t) {
  return new Dr((function(e, n2) {
    t.onsuccess = function(t2) {
      var n3 = t2.target.result;
      e(n3);
    }, t.onerror = function(t2) {
      var e2 = Cr(t2.target.error);
      n2(e2);
    };
  }));
}
var Ur = false;
function Cr(t) {
  var e = kr.On(getUA());
  if (e >= 12.2 && e < 13) {
    var n2 = "An internal error was encountered in the Indexed Database server";
    if (t.message.indexOf(n2) >= 0) {
      var r2 = new I2("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n2 + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
      return Ur || (Ur = true, // Throw a global exception outside of this promise chain, for the user to
      // potentially catch.
      setTimeout((function() {
        throw r2;
      }), 0)), r2;
    }
  }
  return t;
}
function Fr() {
  return "undefined" != typeof window ? window : null;
}
function Mr() {
  return "undefined" != typeof document ? document : null;
}
var qr = (
  /** @class */
  (function() {
    function t(t2, e, n2, r2, i2) {
      this.cs = t2, this.dn = e, this.us = n2, this.op = r2, this.hs = i2, this.ls = new Ar(), this.then = this.ls.promise.then.bind(this.ls.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
      // and so we attach a dummy catch callback to avoid
      // 'UnhandledPromiseRejectionWarning' log spam.
      this.ls.promise.catch((function(t3) {
      }));
    }
    return t._s = function(e, n2, r2, i2, o) {
      var s = new t(e, n2, Date.now() + r2, i2, o);
      return s.start(r2), s;
    }, /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    t.prototype.start = function(t2) {
      var e = this;
      this.fs = setTimeout((function() {
        return e.ds();
      }), t2);
    }, /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    t.prototype.pn = function() {
      return this.ds();
    }, /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    t.prototype.cancel = function(t2) {
      null !== this.fs && (this.clearTimeout(), this.ls.reject(new I2(b.CANCELLED, "Operation cancelled" + (t2 ? ": " + t2 : ""))));
    }, t.prototype.ds = function() {
      var t2 = this;
      this.cs.ws((function() {
        return null !== t2.fs ? (t2.clearTimeout(), t2.op().then((function(e) {
          return t2.ls.resolve(e);
        }))) : Promise.resolve();
      }));
    }, t.prototype.clearTimeout = function() {
      null !== this.fs && (this.hs(this), clearTimeout(this.fs), this.fs = null);
    }, t;
  })()
);
var jr = (
  /** @class */
  (function() {
    function t() {
      var t2 = this;
      this.Ts = Promise.resolve(), // A list of retryable operations. Retryable operations are run in order and
      // retried with backoff.
      this.Es = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
      // be changed again.
      this.Is = false, // Operations scheduled to be queued in the future. Operations are
      // automatically removed after they are run or canceled.
      this.As = [], // visible for testing
      this.Rs = null, // Flag set while there's an outstanding AsyncQueue operation, used for
      // assertion sanity-checks.
      this.gs = false, // List of TimerIds to fast-forward delays for.
      this.Ps = [], // Backoff timer used to schedule retries for retryable operations
      this.ys = new Sr(
        this,
        "async_queue_retry"
        /* AsyncQueueRetry */
      ), // Visibility handler that triggers an immediate retry of all retryable
      // operations. Meant to speed up recovery when we regain file system access
      // after page comes into foreground.
      this.Vs = function() {
        var e2 = Mr();
        e2 && T2("AsyncQueue", "Visibility state changed to  ", e2.visibilityState), t2.ys.Vn();
      };
      var e = Mr();
      e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.Vs);
    }
    return Object.defineProperty(t.prototype, "ps", {
      // Is this AsyncQueue being shut down? If true, this instance will not enqueue
      // any new operations, Promises from enqueue requests will not resolve.
      get: function() {
        return this.Is;
      },
      enumerable: false,
      configurable: true
    }), /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    t.prototype.ws = function(t2) {
      this.enqueue(t2);
    }, /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue without waiting for it to complete (i.e. we ignore the Promise result).
     */
    t.prototype.bs = function(t2) {
      this.vs(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.Ss(t2);
    }, /**
     * Initialize the shutdown of this queue. Once this method is called, the
     * only possible way to request running an operation is through
     * `enqueueEvenWhileRestricted()`.
     */
    t.prototype.Ds = function() {
      if (!this.Is) {
        this.Is = true;
        var t2 = Mr();
        t2 && "function" == typeof t2.removeEventListener && t2.removeEventListener("visibilitychange", this.Vs);
      }
    }, /**
     * Adds a new operation to the queue. Returns a promise that will be resolved
     * when the promise returned by the new operation is (with its value).
     */
    t.prototype.enqueue = function(t2) {
      return this.vs(), this.Is ? new Promise((function(t3) {
      })) : this.Ss(t2);
    }, /**
     * Enqueue a retryable operation.
     *
     * A retryable operation is rescheduled with backoff if it fails with a
     * IndexedDbTransactionError (the error type used by SimpleDb). All
     * retryable operations are executed in order and only run if all prior
     * operations were retried successfully.
     */
    t.prototype.Cs = function(t2) {
      var e = this;
      this.ws((function() {
        return e.Es.push(t2), e.Ns();
      }));
    }, /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */
    t.prototype.Ns = function() {
      return __awaiter2(this, void 0, void 0, (function() {
        var t2, e = this;
        return __generator2(this, (function(n2) {
          switch (n2.label) {
            case 0:
              if (0 === this.Es.length) return [3, 5];
              n2.label = 1;
            case 1:
              return n2.trys.push([1, 3, , 4]), [4, this.Es[0]()];
            case 2:
              return n2.sent(), this.Es.shift(), this.ys.reset(), [3, 4];
            case 3:
              if (!Rr(t2 = n2.sent())) throw t2;
              return T2("AsyncQueue", "Operation failed with retryable error: " + t2), [3, 4];
            case 4:
              this.Es.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
              // This is necessary to run retryable operations that failed during
              // their initial attempt since we don't know whether they are already
              // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
              // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
              // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
              // call scheduled here.
              // Since `backoffAndRun()` cancels an existing backoff and schedules a
              // new backoff on every call, there is only ever a single additional
              // operation in the queue.
              this.ys.gn((function() {
                return e.Ns();
              })), n2.label = 5;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        }));
      }));
    }, t.prototype.Ss = function(t2) {
      var e = this, n2 = this.Ts.then((function() {
        return e.gs = true, t2().catch((function(t3) {
          throw e.Rs = t3, e.gs = false, N2(
            "INTERNAL UNHANDLED ERROR: ",
            /**
            * Chrome includes Error.message in Error.stack. Other browsers do not.
            * This returns expected output of message + stack when available.
            * @param error Error or FirestoreError
            */
            (function(t4) {
              var e2 = t4.message || "";
              return t4.stack && (e2 = t4.stack.includes(t4.message) ? t4.stack : t4.message + "\n" + t4.stack), e2;
            })(t3)
          ), t3;
        })).then((function(t3) {
          return e.gs = false, t3;
        }));
      }));
      return this.Ts = n2, n2;
    }, /**
     * Schedules an operation to be queued on the AsyncQueue once the specified
     * `delayMs` has elapsed. The returned DelayedOperation can be used to cancel
     * or fast-forward the operation prior to its running.
     */
    t.prototype.yn = function(t2, e, n2) {
      var r2 = this;
      this.vs(), // Fast-forward delays for timerIds that have been overriden.
      this.Ps.indexOf(t2) > -1 && (e = 0);
      var i2 = qr._s(this, t2, e, n2, (function(t3) {
        return r2.Fs(t3);
      }));
      return this.As.push(i2), i2;
    }, t.prototype.vs = function() {
      this.Rs && D2();
    }, /**
     * Verifies there's an operation currently in-progress on the AsyncQueue.
     * Unfortunately we can't verify that the running code is in the promise chain
     * of that operation, so this isn't a foolproof check, but it should be enough
     * to catch some bugs.
     */
    t.prototype.xs = function() {
    }, /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    t.prototype.$s = function() {
      return __awaiter2(this, void 0, void 0, (function() {
        var t2;
        return __generator2(this, (function(e) {
          switch (e.label) {
            case 0:
              return [4, t2 = this.Ts];
            case 1:
              e.sent(), e.label = 2;
            case 2:
              if (t2 !== this.Ts) return [3, 0];
              e.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        }));
      }));
    }, /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */
    t.prototype.ks = function(t2) {
      for (var e = 0, n2 = this.As; e < n2.length; e++) {
        if (n2[e].dn === t2) return true;
      }
      return false;
    }, /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId Delayed operations up to and including this TimerId will
     *  be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */
    t.prototype.Ms = function(t2) {
      var e = this;
      return this.$s().then((function() {
        e.As.sort((function(t3, e2) {
          return t3.us - e2.us;
        }));
        for (var n2 = 0, r2 = e.As; n2 < r2.length; n2++) {
          var i2 = r2[n2];
          if (i2.pn(), "all" !== t2 && i2.dn === t2) break;
        }
        return e.$s();
      }));
    }, /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    t.prototype.Os = function(t2) {
      this.Ps.push(t2);
    }, /** Called once a DelayedOperation is run or canceled. */
    t.prototype.Fs = function(t2) {
      var e = this.As.indexOf(t2);
      this.As.splice(e, 1);
    }, t;
  })()
);
function Gr(t, e) {
  if (N2("AsyncQueue", e + ": " + t), Rr(t)) return new I2(b.UNAVAILABLE, e + ": " + t);
  throw t;
}
var zr = function() {
  this.Ls = void 0, this.listeners = [];
};
var Br = function() {
  this.Bs = new yt((function(t) {
    return sr(t);
  }), or), this.onlineState = "Unknown", this.qs = /* @__PURE__ */ new Set();
};
function Kr(t, r2) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, i2, o, s, u2, a, c;
    return __generator2(this, (function(n2) {
      switch (n2.label) {
        case 0:
          if (e = x2(t), i2 = r2.query, o = false, (s = e.Bs.get(i2)) || (o = true, s = new zr()), !o) return [3, 4];
          n2.label = 1;
        case 1:
          return n2.trys.push([1, 3, , 4]), u2 = s, [4, e.Us(i2)];
        case 2:
          return u2.Ls = n2.sent(), [3, 4];
        case 3:
          return a = n2.sent(), c = Gr(a, "Initialization of query '" + ur(r2.query) + "' failed"), [2, void r2.onError(c)];
        case 4:
          return e.Bs.set(i2, s), s.listeners.push(r2), // Run global snapshot listeners if a consistent snapshot has been emitted.
          r2.Qs(e.onlineState), s.Ls && r2.Ws(s.Ls) && Yr(e), [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function Wr(t, r2) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, i2, o, s, u2;
    return __generator2(this, (function(n2) {
      return e = x2(t), i2 = r2.query, o = false, (s = e.Bs.get(i2)) && (u2 = s.listeners.indexOf(r2)) >= 0 && (s.listeners.splice(u2, 1), o = 0 === s.listeners.length), o ? [2, (e.Bs.delete(i2), e.js(i2))] : [
        2
        /*return*/
      ];
    }));
  }));
}
function Qr(t, e) {
  for (var n2 = x2(t), r2 = false, i2 = 0, o = e; i2 < o.length; i2++) {
    var s = o[i2], u2 = s.query, a = n2.Bs.get(u2);
    if (a) {
      for (var c = 0, h = a.listeners; c < h.length; c++) {
        h[c].Ws(s) && (r2 = true);
      }
      a.Ls = s;
    }
  }
  r2 && Yr(n2);
}
function Hr(t, e, n2) {
  var r2 = x2(t), i2 = r2.Bs.get(e);
  if (i2) for (var o = 0, s = i2.listeners; o < s.length; o++) {
    s[o].onError(n2);
  }
  r2.Bs.delete(e);
}
function Yr(t) {
  t.qs.forEach((function(t2) {
    t2.next();
  }));
}
var $r = (
  /** @class */
  (function() {
    function t(t2, e, n2) {
      this.query = t2, this.Ks = e, /**
           * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
           * observer. This flag is set to true once we've actually raised an event.
           */
      this.Gs = false, this.zs = null, this.onlineState = "Unknown", this.options = n2 || {};
    }
    return t.prototype.Ws = function(t2) {
      if (!this.options.includeMetadataChanges) {
        for (var e = [], n2 = 0, r2 = t2.docChanges; n2 < r2.length; n2++) {
          var i2 = r2[n2];
          3 !== i2.type && e.push(i2);
        }
        t2 = new $t(
          t2.query,
          t2.docs,
          t2.Qt,
          e,
          t2.Wt,
          t2.fromCache,
          t2.jt,
          /* excludesMetadataChanges= */
          true
        );
      }
      var o = false;
      return this.Gs ? this.Hs(t2) && (this.Ks.next(t2), o = true) : this.Ys(t2, this.onlineState) && (this.Js(t2), o = true), this.zs = t2, o;
    }, t.prototype.onError = function(t2) {
      this.Ks.error(t2);
    }, /** Returns whether a snapshot was raised. */
    t.prototype.Qs = function(t2) {
      this.onlineState = t2;
      var e = false;
      return this.zs && !this.Gs && this.Ys(this.zs, t2) && (this.Js(this.zs), e = true), e;
    }, t.prototype.Ys = function(t2, e) {
      if (!t2.fromCache) return true;
      var n2 = "Offline" !== e;
      return !(this.options.Xs && n2 || t2.docs.m() && "Offline" !== e);
    }, t.prototype.Hs = function(t2) {
      if (t2.docChanges.length > 0) return true;
      var e = this.zs && this.zs.hasPendingWrites !== t2.hasPendingWrites;
      return !(!t2.jt && !e) && true === this.options.includeMetadataChanges;
    }, t.prototype.Js = function(t2) {
      t2 = $t.Gt(t2.query, t2.docs, t2.Wt, t2.fromCache), this.Gs = true, this.Ks.next(t2);
    }, t;
  })()
);
var Xr = (
  /** @class */
  (function() {
    function t(t2) {
      this.uid = t2;
    }
    return t.prototype.Zs = function() {
      return null != this.uid;
    }, /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    t.prototype.ti = function() {
      return this.Zs() ? "uid:" + this.uid : "anonymous-user";
    }, t.prototype.isEqual = function(t2) {
      return t2.uid === this.uid;
    }, t;
  })()
);
Xr.UNAUTHENTICATED = new Xr(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
Xr.ei = new Xr("google-credentials-uid"), Xr.ni = new Xr("first-party-uid");
var Jr = (
  /** @class */
  (function() {
    function t(t2, e) {
      var n2 = this;
      this.previousValue = t2, e && (e.si = function(t3) {
        return n2.ii(t3);
      }, this.ri = function(t3) {
        return e.oi(t3);
      });
    }
    return t.prototype.ii = function(t2) {
      return this.previousValue = Math.max(t2, this.previousValue), this.previousValue;
    }, t.prototype.next = function() {
      var t2 = ++this.previousValue;
      return this.ri && this.ri(t2), t2;
    }, t;
  })()
);
function Zr(t, e) {
  return "firestore_clients_" + t + "_" + e;
}
function ti(t, e, n2) {
  var r2 = "firestore_mutations_" + t + "_" + n2;
  return e.Zs() && (r2 += "_" + e.uid), r2;
}
function ei(t, e) {
  return "firestore_targets_" + t + "_" + e;
}
Jr.ai = -1;
var ni = (
  /** @class */
  (function() {
    function t(t2, e, n2, r2) {
      this.user = t2, this.batchId = e, this.state = n2, this.error = r2;
    }
    return t.ci = function(e, n2, r2) {
      var i2 = JSON.parse(r2), o = "object" == typeof i2 && -1 !== ["pending", "acknowledged", "rejected"].indexOf(i2.state) && (void 0 === i2.error || "object" == typeof i2.error), s = void 0;
      return o && i2.error && ((o = "string" == typeof i2.error.message && "string" == typeof i2.error.code) && (s = new I2(i2.error.code, i2.error.message))), o ? new t(e, n2, i2.state, s) : (N2("SharedClientState", "Failed to parse mutation state for ID '" + n2 + "': " + r2), null);
    }, t.prototype.ui = function() {
      var t2 = {
        state: this.state,
        updateTimeMs: Date.now()
      };
      return this.error && (t2.error = {
        code: this.error.code,
        message: this.error.message
      }), JSON.stringify(t2);
    }, t;
  })()
);
var ri = (
  /** @class */
  (function() {
    function t(t2, e, n2) {
      this.targetId = t2, this.state = e, this.error = n2;
    }
    return t.ci = function(e, n2) {
      var r2 = JSON.parse(n2), i2 = "object" == typeof r2 && -1 !== ["not-current", "current", "rejected"].indexOf(r2.state) && (void 0 === r2.error || "object" == typeof r2.error), o = void 0;
      return i2 && r2.error && ((i2 = "string" == typeof r2.error.message && "string" == typeof r2.error.code) && (o = new I2(r2.error.code, r2.error.message))), i2 ? new t(e, r2.state, o) : (N2("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n2), null);
    }, t.prototype.ui = function() {
      var t2 = {
        state: this.state,
        updateTimeMs: Date.now()
      };
      return this.error && (t2.error = {
        code: this.error.code,
        message: this.error.message
      }), JSON.stringify(t2);
    }, t;
  })()
);
var ii = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.clientId = t2, this.activeTargetIds = e;
    }
    return t.ci = function(e, n2) {
      for (var r2 = JSON.parse(n2), i2 = "object" == typeof r2 && r2.activeTargetIds instanceof Array, o = Qt(), s = 0; i2 && s < r2.activeTargetIds.length; ++s) i2 = It(r2.activeTargetIds[s]), o = o.add(r2.activeTargetIds[s]);
      return i2 ? new t(e, o) : (N2("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n2), null);
    }, t;
  })()
);
var oi = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.clientId = t2, this.onlineState = e;
    }
    return t.ci = function(e) {
      var n2 = JSON.parse(e);
      return "object" == typeof n2 && -1 !== ["Unknown", "Online", "Offline"].indexOf(n2.onlineState) && "string" == typeof n2.clientId ? new t(n2.clientId, n2.onlineState) : (N2("SharedClientState", "Failed to parse online state: " + e), null);
    }, t;
  })()
);
var si = (
  /** @class */
  (function() {
    function t() {
      this.activeTargetIds = Qt();
    }
    return t.prototype.hi = function(t2) {
      this.activeTargetIds = this.activeTargetIds.add(t2);
    }, t.prototype.li = function(t2) {
      this.activeTargetIds = this.activeTargetIds.delete(t2);
    }, /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    t.prototype.ui = function() {
      var t2 = {
        activeTargetIds: this.activeTargetIds.A(),
        updateTimeMs: Date.now()
      };
      return JSON.stringify(t2);
    }, t;
  })()
);
var ui = (
  /** @class */
  (function() {
    function t(t2, e, n2, r2, i2) {
      this.window = t2, this.fn = e, this.persistenceKey = n2, this._i = r2, this.fi = null, this.di = null, this.si = null, this.wi = this.mi.bind(this), this.Ti = new Ot(st), this.Ei = false, /**
           * Captures WebStorage events that occur before `start()` is called. These
           * events are replayed once `WebStorageSharedClientState` is started.
           */
      this.Ii = [];
      var o = n2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      this.storage = this.window.localStorage, this.currentUser = i2, this.Ai = Zr(this.persistenceKey, this._i), this.Ri = /** Assembles the key for the current sequence number. */
      (function(t3) {
        return "firestore_sequence_number_" + t3;
      })(this.persistenceKey), this.Ti = this.Ti.ot(this._i, new si()), this.gi = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), this.Pi = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.yi = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), this.Vi = /** Assembles the key for the online state of the primary tab. */
      (function(t3) {
        return "firestore_online_state_" + t3;
      })(this.persistenceKey), // Rather than adding the storage observer during start(), we add the
      // storage observer during initialization. This ensures that we collect
      // events before other components populate their initial state (during their
      // respective start() calls). Otherwise, we might for example miss a
      // mutation that is added after LocalStore's start() processed the existing
      // mutations but before we observe WebStorage events.
      this.window.addEventListener("storage", this.wi);
    }
    return t.Ln = function(t2) {
      return !(!t2 || !t2.localStorage);
    }, t.prototype.start = function() {
      return __awaiter2(this, void 0, void 0, (function() {
        var t2, e, r2, i2, o, s, u2, a, c, h, f, l = this;
        return __generator2(this, (function(n2) {
          switch (n2.label) {
            case 0:
              return [4, this.fi.pi()];
            case 1:
              for (t2 = n2.sent(), e = 0, r2 = t2; e < r2.length; e++) (i2 = r2[e]) !== this._i && (o = this.getItem(Zr(this.persistenceKey, i2))) && (s = ii.ci(i2, o)) && (this.Ti = this.Ti.ot(s.clientId, s));
              for (this.bi(), (u2 = this.storage.getItem(this.Vi)) && (a = this.vi(u2)) && this.Si(a), c = 0, h = this.Ii; c < h.length; c++) f = h[c], this.mi(f);
              return this.Ii = [], // Register a window unload hook to remove the client metadata entry from
              // WebStorage even if `shutdown()` was not called.
              this.window.addEventListener("unload", (function() {
                return l.Di();
              })), this.Ei = true, [
                2
                /*return*/
              ];
          }
        }));
      }));
    }, t.prototype.oi = function(t2) {
      this.setItem(this.Ri, JSON.stringify(t2));
    }, t.prototype.Ci = function() {
      return this.Ni(this.Ti);
    }, t.prototype.Fi = function(t2) {
      var e = false;
      return this.Ti.forEach((function(n2, r2) {
        r2.activeTargetIds.has(t2) && (e = true);
      })), e;
    }, t.prototype.xi = function(t2) {
      this.$i(t2, "pending");
    }, t.prototype.ki = function(t2, e, n2) {
      this.$i(t2, e, n2), // Once a final mutation result is observed by other clients, they no longer
      // access the mutation's metadata entry. Since WebStorage replays events
      // in order, it is safe to delete the entry right after updating it.
      this.Mi(t2);
    }, t.prototype.Oi = function(t2) {
      var e = "not-current";
      if (this.Fi(t2)) {
        var n2 = this.storage.getItem(ei(this.persistenceKey, t2));
        if (n2) {
          var r2 = ri.ci(t2, n2);
          r2 && (e = r2.state);
        }
      }
      return this.Li.hi(t2), this.bi(), e;
    }, t.prototype.Bi = function(t2) {
      this.Li.li(t2), this.bi();
    }, t.prototype.qi = function(t2) {
      return this.Li.activeTargetIds.has(t2);
    }, t.prototype.Ui = function(t2) {
      this.removeItem(ei(this.persistenceKey, t2));
    }, t.prototype.Qi = function(t2, e, n2) {
      this.Wi(t2, e, n2);
    }, t.prototype.ji = function(t2, e, n2) {
      var r2 = this;
      e.forEach((function(t3) {
        r2.Mi(t3);
      })), this.currentUser = t2, n2.forEach((function(t3) {
        r2.xi(t3);
      }));
    }, t.prototype.Ki = function(t2) {
      this.Gi(t2);
    }, t.prototype.Di = function() {
      this.Ei && (this.window.removeEventListener("storage", this.wi), this.removeItem(this.Ai), this.Ei = false);
    }, t.prototype.getItem = function(t2) {
      var e = this.storage.getItem(t2);
      return T2("SharedClientState", "READ", t2, e), e;
    }, t.prototype.setItem = function(t2, e) {
      T2("SharedClientState", "SET", t2, e), this.storage.setItem(t2, e);
    }, t.prototype.removeItem = function(t2) {
      T2("SharedClientState", "REMOVE", t2), this.storage.removeItem(t2);
    }, t.prototype.mi = function(t2) {
      var r2 = this, i2 = t2;
      if (i2.storageArea === this.storage) {
        if (T2("SharedClientState", "EVENT", i2.key, i2.newValue), i2.key === this.Ai) return void N2("Received WebStorage notification for local change. Another client might have garbage-collected our state");
        this.fn.Cs((function() {
          return __awaiter2(r2, void 0, void 0, (function() {
            var t3, e, r3, o, s, u2;
            return __generator2(this, (function(n2) {
              if (this.Ei) {
                if (null !== i2.key) if (this.gi.test(i2.key)) {
                  if (null == i2.newValue) return t3 = this.zi(i2.key), [2, this.Hi(t3, null)];
                  if (e = this.Yi(i2.key, i2.newValue)) return [2, this.Hi(e.clientId, e)];
                } else if (this.Pi.test(i2.key)) {
                  if (null !== i2.newValue && (r3 = this.Ji(i2.key, i2.newValue))) return [2, this.Xi(r3)];
                } else if (this.yi.test(i2.key)) {
                  if (null !== i2.newValue && (o = this.Zi(i2.key, i2.newValue))) return [2, this.tr(o)];
                } else if (i2.key === this.Vi) {
                  if (null !== i2.newValue && (s = this.vi(i2.newValue))) return [2, this.Si(s)];
                } else i2.key === this.Ri && (u2 = (function(t4) {
                  var e2 = Jr.ai;
                  if (null != t4) try {
                    var n3 = JSON.parse(t4);
                    k2("number" == typeof n3), e2 = n3;
                  } catch (t5) {
                    N2("SharedClientState", "Failed to read sequence number from WebStorage", t5);
                  }
                  return e2;
                })(i2.newValue)) !== Jr.ai && this.si(u2);
              } else this.Ii.push(i2);
              return [
                2
                /*return*/
              ];
            }));
          }));
        }));
      }
    }, Object.defineProperty(t.prototype, "Li", {
      get: function() {
        return this.Ti.get(this._i);
      },
      enumerable: false,
      configurable: true
    }), t.prototype.bi = function() {
      this.setItem(this.Ai, this.Li.ui());
    }, t.prototype.$i = function(t2, e, n2) {
      var r2 = new ni(this.currentUser, t2, e, n2), i2 = ti(this.persistenceKey, this.currentUser, t2);
      this.setItem(i2, r2.ui());
    }, t.prototype.Mi = function(t2) {
      var e = ti(this.persistenceKey, this.currentUser, t2);
      this.removeItem(e);
    }, t.prototype.Gi = function(t2) {
      var e = {
        clientId: this._i,
        onlineState: t2
      };
      this.storage.setItem(this.Vi, JSON.stringify(e));
    }, t.prototype.Wi = function(t2, e, n2) {
      var r2 = ei(this.persistenceKey, t2), i2 = new ri(t2, e, n2);
      this.setItem(r2, i2.ui());
    }, /**
     * Parses a client state key in WebStorage. Returns null if the key does not
     * match the expected key format.
     */
    t.prototype.zi = function(t2) {
      var e = this.gi.exec(t2);
      return e ? e[1] : null;
    }, /**
     * Parses a client state in WebStorage. Returns 'null' if the value could not
     * be parsed.
     */
    t.prototype.Yi = function(t2, e) {
      var n2 = this.zi(t2);
      return ii.ci(n2, e);
    }, /**
     * Parses a mutation batch state in WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.Ji = function(t2, e) {
      var n2 = this.Pi.exec(t2), r2 = Number(n2[1]), i2 = void 0 !== n2[2] ? n2[2] : null;
      return ni.ci(new Xr(i2), r2, e);
    }, /**
     * Parses a query target state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.Zi = function(t2, e) {
      var n2 = this.yi.exec(t2), r2 = Number(n2[1]);
      return ri.ci(r2, e);
    }, /**
     * Parses an online state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.vi = function(t2) {
      return oi.ci(t2);
    }, t.prototype.Xi = function(t2) {
      return __awaiter2(this, void 0, void 0, (function() {
        return __generator2(this, (function(e) {
          return t2.user.uid === this.currentUser.uid ? [2, this.fi.er(t2.batchId, t2.state, t2.error)] : (T2("SharedClientState", "Ignoring mutation for non-active user " + t2.user.uid), [
            2
            /*return*/
          ]);
        }));
      }));
    }, t.prototype.tr = function(t2) {
      return this.fi.nr(t2.targetId, t2.state, t2.error);
    }, t.prototype.Hi = function(t2, e) {
      var n2 = this, r2 = e ? this.Ti.ot(t2, e) : this.Ti.remove(t2), i2 = this.Ni(this.Ti), o = this.Ni(r2), s = [], u2 = [];
      return o.forEach((function(t3) {
        i2.has(t3) || s.push(t3);
      })), i2.forEach((function(t3) {
        o.has(t3) || u2.push(t3);
      })), this.fi.sr(s, u2).then((function() {
        n2.Ti = r2;
      }));
    }, t.prototype.Si = function(t2) {
      this.Ti.get(t2.clientId) && this.di(t2.onlineState);
    }, t.prototype.Ni = function(t2) {
      var e = Qt();
      return t2.forEach((function(t3, n2) {
        e = e.kt(n2.activeTargetIds);
      })), e;
    }, t;
  })()
);
var ai = (
  /** @class */
  (function() {
    function t() {
      this.ir = new si(), this.rr = {}, this.di = null, this.si = null;
    }
    return t.prototype.xi = function(t2) {
    }, t.prototype.ki = function(t2, e, n2) {
    }, t.prototype.Oi = function(t2) {
      return this.ir.hi(t2), this.rr[t2] || "not-current";
    }, t.prototype.Qi = function(t2, e, n2) {
      this.rr[t2] = e;
    }, t.prototype.Bi = function(t2) {
      this.ir.li(t2);
    }, t.prototype.qi = function(t2) {
      return this.ir.activeTargetIds.has(t2);
    }, t.prototype.Ui = function(t2) {
      delete this.rr[t2];
    }, t.prototype.Ci = function() {
      return this.ir.activeTargetIds;
    }, t.prototype.Fi = function(t2) {
      return this.ir.activeTargetIds.has(t2);
    }, t.prototype.start = function() {
      return this.ir = new si(), Promise.resolve();
    }, t.prototype.ji = function(t2, e, n2) {
    }, t.prototype.Ki = function(t2) {
    }, t.prototype.Di = function() {
    }, t.prototype.oi = function(t2) {
    }, t;
  })()
);
var ci = (
  /** @class */
  (function() {
    function t(t2, e, n2, r2) {
      this.batchId = t2, this.ar = e, this.baseMutations = n2, this.mutations = r2;
    }
    return t.prototype.cr = function(t2, e, n2) {
      for (var r2 = n2.ur, i2 = 0; i2 < this.mutations.length; i2++) {
        var o = this.mutations[i2];
        o.key.isEqual(t2) && (e = An(o, e, r2[i2]));
      }
      return e;
    }, /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     */
    t.prototype.hr = function(t2, e) {
      for (var n2 = 0, r2 = this.baseMutations; n2 < r2.length; n2++) {
        var i2 = r2[n2];
        i2.key.isEqual(t2) && (e = Sn(i2, e, e, this.ar));
      }
      for (var o = e, s = 0, u2 = this.mutations; s < u2.length; s++) {
        var a = u2[s];
        a.key.isEqual(t2) && (e = Sn(a, e, o, this.ar));
      }
      return e;
    }, /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */
    t.prototype.lr = function(t2) {
      var e = this, n2 = t2;
      return this.mutations.forEach((function(r2) {
        var i2 = e.hr(r2.key, t2.get(r2.key));
        i2 && (n2 = n2.ot(r2.key, i2));
      })), n2;
    }, t.prototype.keys = function() {
      return this.mutations.reduce((function(t2, e) {
        return t2.add(e.key);
      }), Kt());
    }, t.prototype.isEqual = function(t2) {
      return this.batchId === t2.batchId && ut(this.mutations, t2.mutations, (function(t3, e) {
        return kn(t3, e);
      })) && ut(this.baseMutations, t2.baseMutations, (function(t3, e) {
        return kn(t3, e);
      }));
    }, t;
  })()
);
var hi = (
  /** @class */
  (function() {
    function t(t2, e, n2, r2) {
      this.batch = t2, this._r = e, this.ur = n2, this.dr = r2;
    }
    return t.from = function(e, n2, r2) {
      k2(e.mutations.length === r2.length);
      for (var i2 = zt, o = e.mutations, s = 0; s < o.length; s++) i2 = i2.ot(o[s].key, r2[s].version);
      return new t(e, n2, r2, i2);
    }, t;
  })()
);
var fi = (
  /** @class */
  (function() {
    function t() {
      this.wr = new yt((function(t2) {
        return t2.toString();
      }), (function(t2, e) {
        return t2.isEqual(e);
      })), this.mr = false;
    }
    return Object.defineProperty(t.prototype, "readTime", {
      get: function() {
        return this.Tr;
      },
      set: function(t2) {
        this.Tr = t2;
      },
      enumerable: false,
      configurable: true
    }), /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Er = function(t2, e) {
      this.Ir(), this.readTime = e, this.wr.set(t2.key, t2);
    }, /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Ar = function(t2, e) {
      this.Ir(), e && (this.readTime = e), this.wr.set(t2, null);
    }, /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKey The key of the entry to look up.
     * @return The cached Document or NoDocument entry, or null if we have nothing
     * cached.
     */
    t.prototype.Rr = function(t2, e) {
      this.Ir();
      var n2 = this.wr.get(e);
      return void 0 !== n2 ? Dr.resolve(n2) : this.gr(t2, e);
    }, /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys The keys of the entries to look up.
     * @return A map of cached `Document`s or `NoDocument`s, indexed by key. If an
     *     entry cannot be found, the corresponding key will be mapped to a null
     *     value.
     */
    t.prototype.getEntries = function(t2, e) {
      return this.Pr(t2, e);
    }, /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    t.prototype.apply = function(t2) {
      return this.Ir(), this.mr = true, this.yr(t2);
    }, /** Helper to assert this.changes is not null  */
    t.prototype.Ir = function() {
    }, t;
  })()
);
var li = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
var pi = (
  /** @class */
  (function() {
    function t() {
      this.Vr = [];
    }
    return t.prototype.pr = function(t2) {
      this.Vr.push(t2);
    }, t.prototype.br = function() {
      this.Vr.forEach((function(t2) {
        return t2();
      }));
    }, t;
  })()
);
var di = (
  /** @class */
  (function() {
    function t(t2, e, n2) {
      this.vr = t2, this.Sr = e, this.Dr = n2;
    }
    return t.prototype.Cr = function(t2, e) {
      var n2 = this;
      return this.Sr.Nr(t2, e).next((function(r2) {
        return n2.Fr(t2, e, r2);
      }));
    }, /** Internal version of `getDocument` that allows reusing batches. */
    t.prototype.Fr = function(t2, e, n2) {
      return this.vr.Rr(t2, e).next((function(t3) {
        for (var r2 = 0, i2 = n2; r2 < i2.length; r2++) {
          t3 = i2[r2].hr(e, t3);
        }
        return t3;
      }));
    }, // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    t.prototype.$r = function(t2, e, n2) {
      var r2 = qt();
      return e.forEach((function(t3, e2) {
        for (var i2 = 0, o = n2; i2 < o.length; i2++) {
          e2 = o[i2].hr(t3, e2);
        }
        r2 = r2.ot(t3, e2);
      })), r2;
    }, /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    t.prototype.kr = function(t2, e) {
      var n2 = this;
      return this.vr.getEntries(t2, e).next((function(e2) {
        return n2.Mr(t2, e2);
      }));
    }, /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     */
    t.prototype.Mr = function(t2, e) {
      var n2 = this;
      return this.Sr.Or(t2, e).next((function(r2) {
        var i2 = n2.$r(t2, e, r2), o = Mt();
        return i2.forEach((function(t3, e2) {
          e2 || (e2 = new Bn(t3, gt.min())), o = o.ot(t3, e2);
        })), o;
      }));
    }, /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction The persistence transaction.
     * @param query The query to match documents against.
     * @param sinceReadTime If not set to SnapshotVersion.min(), return only
     *     documents that have been read since this snapshot version (exclusive).
     */
    t.prototype.Lr = function(t2, e, n2) {
      return (function(t3) {
        return F2.F(t3.path) && null === t3.collectionGroup && 0 === t3.filters.length;
      })(e) ? this.Br(t2, e.path) : Zn(e) ? this.qr(t2, e, n2) : this.Ur(t2, e, n2);
    }, t.prototype.Br = function(t2, e) {
      return this.Cr(t2, new F2(e)).next((function(t3) {
        var e2 = Gt();
        return t3 instanceof zn && (e2 = e2.ot(t3.key, t3)), e2;
      }));
    }, t.prototype.qr = function(t2, e, n2) {
      var r2 = this, i2 = e.collectionGroup, o = Gt();
      return this.Dr.Qr(t2, i2).next((function(s) {
        return Dr.forEach(s, (function(s2) {
          var u2 = (function(t3, e2) {
            return new Wn(
              e2,
              /*collectionGroup=*/
              null,
              t3.on.slice(),
              t3.filters.slice(),
              t3.limit,
              t3.an,
              t3.startAt,
              t3.endAt
            );
          })(e, s2.child(i2));
          return r2.Ur(t2, u2, n2).next((function(t3) {
            t3.forEach((function(t4, e2) {
              o = o.ot(t4, e2);
            }));
          }));
        })).next((function() {
          return o;
        }));
      }));
    }, t.prototype.Ur = function(t2, e, n2) {
      var r2, i2, o = this;
      return this.vr.Lr(t2, e, n2).next((function(n3) {
        return r2 = n3, o.Sr.Wr(t2, e);
      })).next((function(e2) {
        return i2 = e2, o.jr(t2, i2, r2).next((function(t3) {
          r2 = t3;
          for (var e3 = 0, n3 = i2; e3 < n3.length; e3++) for (var o2 = n3[e3], s = 0, u2 = o2.mutations; s < u2.length; s++) {
            var a = u2[s], c = a.key, h = r2.get(c), f = Sn(a, h, h, o2.ar);
            r2 = f instanceof zn ? r2.ot(c, f) : r2.remove(c);
          }
        }));
      })).next((function() {
        return r2.forEach((function(t3, n3) {
          ar(e, n3) || (r2 = r2.remove(t3));
        })), r2;
      }));
    }, t.prototype.jr = function(t2, e, n2) {
      for (var r2 = Kt(), i2 = 0, o = e; i2 < o.length; i2++) for (var s = 0, u2 = o[i2].mutations; s < u2.length; s++) {
        var a = u2[s];
        a instanceof Rn && null === n2.get(a.key) && (r2 = r2.add(a.key));
      }
      var c = n2;
      return this.vr.getEntries(t2, r2).next((function(t3) {
        return t3.forEach((function(t4, e2) {
          null !== e2 && e2 instanceof zn && (c = c.ot(t4, e2));
        })), c;
      }));
    }, t;
  })()
);
var vi = (
  /** @class */
  (function() {
    function t(t2, e, n2, r2) {
      this.targetId = t2, this.fromCache = e, this.Kr = n2, this.Gr = r2;
    }
    return t.zr = function(e, n2) {
      for (var r2 = Kt(), i2 = Kt(), o = 0, s = n2.docChanges; o < s.length; o++) {
        var u2 = s[o];
        switch (u2.type) {
          case 0:
            r2 = r2.add(u2.doc.key);
            break;
          case 1:
            i2 = i2.add(u2.doc.key);
        }
      }
      return new t(e, n2.fromCache, r2, i2);
    }, t;
  })()
);
function yi(t, e) {
  var n2 = t[0], r2 = t[1], i2 = e[0], o = e[1], s = st(n2, i2);
  return 0 === s ? st(r2, o) : s;
}
var mi = (
  /** @class */
  (function() {
    function t(t2) {
      this.Hr = t2, this.buffer = new Ut(yi), this.Yr = 0;
    }
    return t.prototype.Jr = function() {
      return ++this.Yr;
    }, t.prototype.Xr = function(t2) {
      var e = [t2, this.Jr()];
      if (this.buffer.size < this.Hr) this.buffer = this.buffer.add(e);
      else {
        var n2 = this.buffer.last();
        yi(e, n2) < 0 && (this.buffer = this.buffer.delete(n2).add(e));
      }
    }, Object.defineProperty(t.prototype, "maxValue", {
      get: function() {
        return this.buffer.last()[0];
      },
      enumerable: false,
      configurable: true
    }), t;
  })()
);
var gi = {
  Zr: false,
  eo: 0,
  no: 0,
  so: 0
};
var wi = (
  /** @class */
  (function() {
    function t(t2, e, n2) {
      this.io = t2, this.ro = e, this.oo = n2;
    }
    return t.ao = function(e) {
      return new t(e, t.co, t.uo);
    }, t;
  })()
);
wi.ho = -1, wi.lo = 1048576, wi._o = 41943040, wi.co = 10, wi.uo = 1e3, wi.fo = new wi(wi._o, wi.co, wi.uo), wi.do = new wi(wi.ho, 0, 0);
var bi = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.wo = t2, this.cs = e, this.mo = false, this.To = null;
    }
    return t.prototype.start = function(t2) {
      this.wo.params.io !== wi.ho && this.Eo(t2);
    }, t.prototype.stop = function() {
      this.To && (this.To.cancel(), this.To = null);
    }, Object.defineProperty(t.prototype, "Ei", {
      get: function() {
        return null !== this.To;
      },
      enumerable: false,
      configurable: true
    }), t.prototype.Eo = function(t2) {
      var r2 = this, i2 = this.mo ? 3e5 : 6e4;
      T2("LruGarbageCollector", "Garbage collection scheduled in " + i2 + "ms"), this.To = this.cs.yn("lru_garbage_collection", i2, (function() {
        return __awaiter2(r2, void 0, void 0, (function() {
          var e;
          return __generator2(this, (function(n2) {
            switch (n2.label) {
              case 0:
                this.To = null, this.mo = true, n2.label = 1;
              case 1:
                return n2.trys.push([1, 3, , 7]), [4, t2.Io(this.wo)];
              case 2:
                return n2.sent(), [3, 7];
              case 3:
                return Rr(e = n2.sent()) ? (T2("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e), [3, 6]) : [3, 4];
              case 4:
                return [4, qo(e)];
              case 5:
                n2.sent(), n2.label = 6;
              case 6:
                return [3, 7];
              case 7:
                return [4, this.Eo(t2)];
              case 8:
                return n2.sent(), [
                  2
                  /*return*/
                ];
            }
          }));
        }));
      }));
    }, t;
  })()
);
var Ii = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.Ao = t2, this.params = e;
    }
    return t.prototype.Ro = function(t2, e) {
      return this.Ao.Po(t2).next((function(t3) {
        return Math.floor(e / 100 * t3);
      }));
    }, /** Returns the nth sequence number, counting in order from the smallest. */
    t.prototype.yo = function(t2, e) {
      var n2 = this;
      if (0 === e) return Dr.resolve(Jr.ai);
      var r2 = new mi(e);
      return this.Ao.Ce(t2, (function(t3) {
        return r2.Xr(t3.sequenceNumber);
      })).next((function() {
        return n2.Ao.Vo(t2, (function(t3) {
          return r2.Xr(t3);
        }));
      })).next((function() {
        return r2.maxValue;
      }));
    }, /**
     * Removes targets with a sequence number equal to or less than the given upper bound, and removes
     * document associations with those targets.
     */
    t.prototype.po = function(t2, e, n2) {
      return this.Ao.po(t2, e, n2);
    }, /**
     * Removes documents that have a sequence number equal to or less than the upper bound and are not
     * otherwise pinned.
     */
    t.prototype.bo = function(t2, e) {
      return this.Ao.bo(t2, e);
    }, t.prototype.vo = function(t2, e) {
      var n2 = this;
      return this.params.io === wi.ho ? (T2("LruGarbageCollector", "Garbage collection skipped; disabled"), Dr.resolve(gi)) : this.So(t2).next((function(r2) {
        return r2 < n2.params.io ? (T2("LruGarbageCollector", "Garbage collection skipped; Cache size " + r2 + " is lower than threshold " + n2.params.io), gi) : n2.Do(t2, e);
      }));
    }, t.prototype.So = function(t2) {
      return this.Ao.So(t2);
    }, t.prototype.Do = function(t2, e) {
      var n2, r2, i2, o, u2, a, c, h = this, f = Date.now();
      return this.Ro(t2, this.params.ro).next((function(e2) {
        return e2 > h.params.oo ? (T2("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + h.params.oo + " from " + e2), r2 = h.params.oo) : r2 = e2, o = Date.now(), h.yo(t2, r2);
      })).next((function(r3) {
        return n2 = r3, u2 = Date.now(), h.po(t2, n2, e);
      })).next((function(e2) {
        return i2 = e2, a = Date.now(), h.bo(t2, n2);
      })).next((function(t3) {
        return c = Date.now(), _() <= LogLevel.DEBUG && T2("LruGarbageCollector", "LRU Garbage Collection\n	Counted targets in " + (o - f) + "ms\n	Determined least recently used " + r2 + " in " + (u2 - o) + "ms\n	Removed " + i2 + " targets in " + (a - u2) + "ms\n	Removed " + t3 + " documents in " + (c - a) + "ms\nTotal Duration: " + (c - f) + "ms"), Dr.resolve({
          Zr: true,
          eo: r2,
          no: i2,
          so: t3
        });
      }));
    }, t;
  })()
);
function Ei(t) {
  for (var e = "", n2 = 0; n2 < t.length; n2++) e.length > 0 && (e = Ti(e)), e = _i(t.get(n2), e);
  return Ti(e);
}
function _i(t, e) {
  for (var n2 = e, r2 = t.length, i2 = 0; i2 < r2; i2++) {
    var o = t.charAt(i2);
    switch (o) {
      case "\0":
        n2 += "";
        break;
      case "":
        n2 += "";
        break;
      default:
        n2 += o;
    }
  }
  return n2;
}
function Ti(t) {
  return t + "";
}
function Ni(t) {
  var e = t.length;
  if (k2(e >= 2), 2 === e) return k2("" === t.charAt(0) && "" === t.charAt(1)), V2.P();
  for (var n2 = e - 2, r2 = [], i2 = "", o = 0; o < e; ) {
    var s = t.indexOf("", o);
    switch ((s < 0 || s > n2) && D2(), t.charAt(s + 1)) {
      case "":
        var u2 = t.substring(o, s), a = void 0;
        0 === i2.length ? (
          // Avoid copying for the common case of a segment that excludes \0
          // and \001
          a = u2
        ) : (a = i2 += u2, i2 = ""), r2.push(a);
        break;
      case "":
        i2 += t.substring(o, s), i2 += "\0";
        break;
      case "":
        i2 += t.substring(o, s + 1);
        break;
      default:
        D2();
    }
    o = s + 2;
  }
  return new V2(r2);
}
var Ai = function(t) {
  this.Co = t;
};
function Si(t, e) {
  if (e.document) return (function(t2, e2, n3) {
    var r3 = Me(t2, e2.name), i3 = Ve(e2.updateTime), o2 = new Mn({
      mapValue: {
        fields: e2.fields
      }
    });
    return new zn(r3, i3, o2, {
      hasCommittedMutations: !!n3
    });
  })(t.Co, e.document, !!e.hasCommittedMutations);
  if (e.noDocument) {
    var n2 = F2.$(e.noDocument.path), r2 = Ri(e.noDocument.readTime);
    return new Bn(n2, r2, {
      hasCommittedMutations: !!e.hasCommittedMutations
    });
  }
  if (e.unknownDocument) {
    var i2 = F2.$(e.unknownDocument.path), o = Ri(e.unknownDocument.version);
    return new Kn(i2, o);
  }
  return D2();
}
function Di(t, e, n2) {
  var r2 = ki(n2), i2 = e.key.path.h().A();
  if (e instanceof zn) {
    var o = (function(t2, e2) {
      return {
        name: Fe(t2, e2.key),
        fields: e2.rn().mapValue.fields,
        updateTime: Re(t2, e2.version.Z())
      };
    })(t.Co, e), s = e.hasCommittedMutations;
    return new io(
      /* unknownDocument= */
      null,
      /* noDocument= */
      null,
      o,
      s,
      r2,
      i2
    );
  }
  if (e instanceof Bn) {
    var u2 = e.key.path.A(), a = Li(e.version), c = e.hasCommittedMutations;
    return new io(
      /* unknownDocument= */
      null,
      new no(u2, a),
      /* document= */
      null,
      c,
      r2,
      i2
    );
  }
  if (e instanceof Kn) {
    var h = e.key.path.A(), f = Li(e.version);
    return new io(
      new ro(h, f),
      /* noDocument= */
      null,
      /* document= */
      null,
      /* hasCommittedMutations= */
      true,
      r2,
      i2
    );
  }
  return D2();
}
function ki(t) {
  var e = t.Z();
  return [e.seconds, e.nanoseconds];
}
function xi(t) {
  var e = new mt(t[0], t[1]);
  return gt.J(e);
}
function Li(t) {
  var e = t.Z();
  return new Xi(e.seconds, e.nanoseconds);
}
function Ri(t) {
  var e = new mt(t.seconds, t.nanoseconds);
  return gt.J(e);
}
function Oi(t, e) {
  var n2 = (e.baseMutations || []).map((function(e2) {
    return We(t.Co, e2);
  })), r2 = e.mutations.map((function(e2) {
    return We(t.Co, e2);
  })), i2 = mt.fromMillis(e.localWriteTimeMs);
  return new ci(e.batchId, i2, n2, r2);
}
function Pi(t) {
  var e, n2, r2 = Ri(t.readTime), i2 = void 0 !== t.lastLimboFreeSnapshotVersion ? Ri(t.lastLimboFreeSnapshotVersion) : gt.min();
  return void 0 !== t.query.documents ? (k2(1 === (n2 = t.query).documents.length), e = er(Hn(je(n2.documents[0])))) : e = Ye(t.query), new kt(e, t.targetId, 0, t.lastListenSequenceNumber, r2, i2, ct.fromBase64String(t.resumeToken));
}
function Vi(t, e) {
  var n2, r2 = Li(e.nt), i2 = Li(e.lastLimboFreeSnapshotVersion);
  n2 = At(e.target) ? Qe(t.Co, e.target) : He(t.Co, e.target);
  var o = e.resumeToken.toBase64();
  return new so(e.targetId, Tt(e.target), r2, o, e.sequenceNumber, i2, n2);
}
var Ui = (
  /** @class */
  (function() {
    function t(t2, e, n2, r2) {
      this.userId = t2, this.serializer = e, this.Dr = n2, this.No = r2, /**
           * Caches the document keys for pending mutation batches. If the mutation
           * has been removed from IndexedDb, the cached value may continue to
           * be used to retrieve the batch's document keys. To remove a cached value
           * locally, `removeCachedMutationKeys()` should be invoked either directly
           * or through `removeMutationBatches()`.
           *
           * With multi-tab, when the primary client acknowledges or rejects a mutation,
           * this cache is used by secondary clients to invalidate the local
           * view of the documents that were previously affected by the mutation.
           */
      // PORTING NOTE: Multi-tab only.
      this.Fo = {};
    }
    return t.xo = function(e, n2, r2, i2) {
      return k2("" !== e.uid), new t(e.Zs() ? e.uid : "", n2, r2, i2);
    }, t.prototype.$o = function(t2) {
      var e = true, n2 = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
      return Mi(t2).rs({
        index: to.userMutationsIndex,
        range: n2
      }, (function(t3, n3, r2) {
        e = false, r2.done();
      })).next((function() {
        return e;
      }));
    }, t.prototype.ko = function(t2, e, n2, r2) {
      var i2 = this, o = qi(t2), s = Mi(t2);
      return s.add({}).next((function(u2) {
        k2("number" == typeof u2);
        for (var a = new ci(u2, e, n2, r2), c = (function(t3, e2, n3) {
          var r3 = n3.baseMutations.map((function(e3) {
            return Ke(t3.Co, e3);
          })), i3 = n3.mutations.map((function(e3) {
            return Ke(t3.Co, e3);
          }));
          return new to(e2, n3.batchId, n3.ar.toMillis(), r3, i3);
        })(i2.serializer, i2.userId, a), h = [], f = new Ut((function(t3, e2) {
          return st(t3.R(), e2.R());
        })), l = 0, p2 = r2; l < p2.length; l++) {
          var d = p2[l], v2 = eo.key(i2.userId, d.key.path, u2);
          f = f.add(d.key.path.h()), h.push(s.put(c)), h.push(o.put(v2, eo.PLACEHOLDER));
        }
        return f.forEach((function(e2) {
          h.push(i2.Dr.Mo(t2, e2));
        })), t2.pr((function() {
          i2.Fo[u2] = a.keys();
        })), Dr.$n(h).next((function() {
          return a;
        }));
      }));
    }, t.prototype.Oo = function(t2, e) {
      var n2 = this;
      return Mi(t2).get(e).next((function(t3) {
        return t3 ? (k2(t3.userId === n2.userId), Oi(n2.serializer, t3)) : null;
      }));
    }, /**
     * Returns the document keys for the mutation batch with the given batchId.
     * For primary clients, this method returns `null` after
     * `removeMutationBatches()` has been called. Secondary clients return a
     * cached result until `removeCachedMutationKeys()` is invoked.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Lo = function(t2, e) {
      var n2 = this;
      return this.Fo[e] ? Dr.resolve(this.Fo[e]) : this.Oo(t2, e).next((function(t3) {
        if (t3) {
          var r2 = t3.keys();
          return n2.Fo[e] = r2, r2;
        }
        return null;
      }));
    }, t.prototype.Bo = function(t2, e) {
      var n2 = this, r2 = e + 1, i2 = IDBKeyRange.lowerBound([this.userId, r2]), o = null;
      return Mi(t2).rs({
        index: to.userMutationsIndex,
        range: i2
      }, (function(t3, e2, i3) {
        e2.userId === n2.userId && (k2(e2.batchId >= r2), o = Oi(n2.serializer, e2)), i3.done();
      })).next((function() {
        return o;
      }));
    }, t.prototype.qo = function(t2) {
      var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]), n2 = -1;
      return Mi(t2).rs({
        index: to.userMutationsIndex,
        range: e,
        reverse: true
      }, (function(t3, e2, r2) {
        n2 = e2.batchId, r2.done();
      })).next((function() {
        return n2;
      }));
    }, t.prototype.Uo = function(t2) {
      var e = this, n2 = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
      return Mi(t2).ts(to.userMutationsIndex, n2).next((function(t3) {
        return t3.map((function(t4) {
          return Oi(e.serializer, t4);
        }));
      }));
    }, t.prototype.Nr = function(t2, e) {
      var n2 = this, r2 = eo.prefixForPath(this.userId, e.path), i2 = IDBKeyRange.lowerBound(r2), o = [];
      return qi(t2).rs({
        range: i2
      }, (function(r3, i3, s) {
        var u2 = r3[0], a = r3[1], c = r3[2], h = Ni(a);
        if (u2 === n2.userId && e.path.isEqual(h))
          return Mi(t2).get(c).next((function(t3) {
            if (!t3) throw D2();
            k2(t3.userId === n2.userId), o.push(Oi(n2.serializer, t3));
          }));
        s.done();
      })).next((function() {
        return o;
      }));
    }, t.prototype.Or = function(t2, e) {
      var n2 = this, r2 = new Ut(st), i2 = [];
      return e.forEach((function(e2) {
        var o = eo.prefixForPath(n2.userId, e2.path), s = IDBKeyRange.lowerBound(o), u2 = qi(t2).rs({
          range: s
        }, (function(t3, i3, o2) {
          var s2 = t3[0], u3 = t3[1], a = t3[2], c = Ni(u3);
          s2 === n2.userId && e2.path.isEqual(c) ? r2 = r2.add(a) : o2.done();
        }));
        i2.push(u2);
      })), Dr.$n(i2).next((function() {
        return n2.Qo(t2, r2);
      }));
    }, t.prototype.Wr = function(t2, e) {
      var n2 = this, r2 = e.path, i2 = r2.length + 1, o = eo.prefixForPath(this.userId, r2), s = IDBKeyRange.lowerBound(o), u2 = new Ut(st);
      return qi(t2).rs({
        range: s
      }, (function(t3, e2, o2) {
        var s2 = t3[0], a = t3[1], c = t3[2], h = Ni(a);
        s2 === n2.userId && r2.T(h) ? (
          // Rows with document keys more than one segment longer than the
          // query path can't be matches. For example, a query on 'rooms'
          // can't match the document /rooms/abc/messages/xyx.
          // TODO(mcg): we'll need a different scanner when we implement
          // ancestor queries.
          h.length === i2 && (u2 = u2.add(c))
        ) : o2.done();
      })).next((function() {
        return n2.Qo(t2, u2);
      }));
    }, t.prototype.Qo = function(t2, e) {
      var n2 = this, r2 = [], i2 = [];
      return e.forEach((function(e2) {
        i2.push(Mi(t2).get(e2).next((function(t3) {
          if (null === t3) throw D2();
          k2(t3.userId === n2.userId), r2.push(Oi(n2.serializer, t3));
        })));
      })), Dr.$n(i2).next((function() {
        return r2;
      }));
    }, t.prototype.Wo = function(t2, e) {
      var n2 = this;
      return Fi(t2.jo, this.userId, e).next((function(r2) {
        return t2.pr((function() {
          n2.Ko(e.batchId);
        })), Dr.forEach(r2, (function(e2) {
          return n2.No.Go(t2, e2);
        }));
      }));
    }, /**
     * Clears the cached keys for a mutation batch. This method should be
     * called by secondary clients after they process mutation updates.
     *
     * Note that this method does not have to be called from primary clients as
     * the corresponding cache entries are cleared when an acknowledged or
     * rejected batch is removed from the mutation queue.
     */
    // PORTING NOTE: Multi-tab only
    t.prototype.Ko = function(t2) {
      delete this.Fo[t2];
    }, t.prototype.zo = function(t2) {
      var e = this;
      return this.$o(t2).next((function(n2) {
        if (!n2) return Dr.resolve();
        var r2 = IDBKeyRange.lowerBound(eo.prefixForUser(e.userId)), i2 = [];
        return qi(t2).rs({
          range: r2
        }, (function(t3, n3, r3) {
          if (t3[0] === e.userId) {
            var o = Ni(t3[1]);
            i2.push(o);
          } else r3.done();
        })).next((function() {
          k2(0 === i2.length);
        }));
      }));
    }, t.prototype.Ho = function(t2, e) {
      return Ci(t2, this.userId, e);
    }, // PORTING NOTE: Multi-tab only (state is held in memory in other clients).
    /** Returns the mutation queue's metadata from IndexedDb. */
    t.prototype.Yo = function(t2) {
      var e = this;
      return ji(t2).get(this.userId).next((function(t3) {
        return t3 || new Zi(
          e.userId,
          -1,
          /*lastStreamToken=*/
          ""
        );
      }));
    }, t;
  })()
);
function Ci(t, e, n2) {
  var r2 = eo.prefixForPath(e, n2.path), i2 = r2[1], o = IDBKeyRange.lowerBound(r2), s = false;
  return qi(t).rs({
    range: o,
    ss: true
  }, (function(t2, n3, r3) {
    var o2 = t2[0], u2 = t2[1];
    t2[2];
    o2 === e && u2 === i2 && (s = true), r3.done();
  })).next((function() {
    return s;
  }));
}
function Fi(t, e, n2) {
  var r2 = t.store(to.store), i2 = t.store(eo.store), o = [], s = IDBKeyRange.only(n2.batchId), u2 = 0, a = r2.rs({
    range: s
  }, (function(t2, e2, n3) {
    return u2++, n3.delete();
  }));
  o.push(a.next((function() {
    k2(1 === u2);
  })));
  for (var c = [], h = 0, f = n2.mutations; h < f.length; h++) {
    var l = f[h], p2 = eo.key(e, l.key.path, n2.batchId);
    o.push(i2.delete(p2)), c.push(l.key);
  }
  return Dr.$n(o).next((function() {
    return c;
  }));
}
function Mi(t) {
  return _o.Qn(t, to.store);
}
function qi(t) {
  return _o.Qn(t, eo.store);
}
function ji(t) {
  return _o.Qn(t, Zi.store);
}
var Gi = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.serializer = t2, this.Dr = e;
    }
    return t.prototype.Er = function(t2, e, n2) {
      return Ki(t2).put(Wi(e), n2);
    }, /**
     * Removes a document from the cache.
     *
     * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */
    t.prototype.Ar = function(t2, e) {
      var n2 = Ki(t2), r2 = Wi(e);
      return n2.delete(r2);
    }, /**
     * Updates the current cache size.
     *
     * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
     * cache's metadata.
     */
    t.prototype.updateMetadata = function(t2, e) {
      var n2 = this;
      return this.getMetadata(t2).next((function(r2) {
        return r2.byteSize += e, n2.Jo(t2, r2);
      }));
    }, t.prototype.Rr = function(t2, e) {
      var n2 = this;
      return Ki(t2).get(Wi(e)).next((function(t3) {
        return n2.Xo(t3);
      }));
    }, /**
     * Looks up an entry in the cache.
     *
     * @param documentKey The key of the entry to look up.
     * @return The cached MaybeDocument entry and its size, or null if we have nothing cached.
     */
    t.prototype.Zo = function(t2, e) {
      var n2 = this;
      return Ki(t2).get(Wi(e)).next((function(t3) {
        var e2 = n2.Xo(t3);
        return e2 ? {
          ta: e2,
          size: Qi(t3)
        } : null;
      }));
    }, t.prototype.getEntries = function(t2, e) {
      var n2 = this, r2 = qt();
      return this.ea(t2, e, (function(t3, e2) {
        var i2 = n2.Xo(e2);
        r2 = r2.ot(t3, i2);
      })).next((function() {
        return r2;
      }));
    }, /**
     * Looks up several entries in the cache.
     *
     * @param documentKeys The set of keys entries to look up.
     * @return A map of MaybeDocuments indexed by key (if a document cannot be
     *     found, the key will be mapped to null) and a map of sizes indexed by
     *     key (zero if the key cannot be found).
     */
    t.prototype.na = function(t2, e) {
      var n2 = this, r2 = qt(), i2 = new Ot(F2.i);
      return this.ea(t2, e, (function(t3, e2) {
        var o = n2.Xo(e2);
        o ? (r2 = r2.ot(t3, o), i2 = i2.ot(t3, Qi(e2))) : (r2 = r2.ot(t3, null), i2 = i2.ot(t3, 0));
      })).next((function() {
        return {
          sa: r2,
          ia: i2
        };
      }));
    }, t.prototype.ea = function(t2, e, n2) {
      if (e.m()) return Dr.resolve();
      var r2 = IDBKeyRange.bound(e.first().path.A(), e.last().path.A()), i2 = e._t(), o = i2.It();
      return Ki(t2).rs({
        range: r2
      }, (function(t3, e2, r3) {
        for (var s = F2.$(t3); o && F2.i(o, s) < 0; ) n2(o, null), o = i2.It();
        o && o.isEqual(s) && // Key found in cache.
        (n2(o, e2), o = i2.At() ? i2.It() : null), // Skip to the next key (if there is one).
        o ? r3.Xn(o.path.A()) : r3.done();
      })).next((function() {
        for (; o; ) n2(o, null), o = i2.At() ? i2.It() : null;
      }));
    }, t.prototype.Lr = function(t2, e, n2) {
      var r2 = this, i2 = Gt(), o = e.path.length + 1, s = {};
      if (n2.isEqual(gt.min())) {
        var u2 = e.path.A();
        s.range = IDBKeyRange.lowerBound(u2);
      } else {
        var a = e.path.A(), c = ki(n2);
        s.range = IDBKeyRange.lowerBound(
          [a, c],
          /* open= */
          true
        ), s.index = io.collectionReadTimeIndex;
      }
      return Ki(t2).rs(s, (function(t3, n3, s2) {
        if (t3.length === o) {
          var u3 = Si(r2.serializer, n3);
          e.path.T(u3.key.path) ? u3 instanceof zn && ar(e, u3) && (i2 = i2.ot(u3.key, u3)) : s2.done();
        }
      })).next((function() {
        return i2;
      }));
    }, t.prototype.ra = function(t2) {
      return new zi(this, !!t2 && t2.oa);
    }, t.prototype.aa = function(t2) {
      return this.getMetadata(t2).next((function(t3) {
        return t3.byteSize;
      }));
    }, t.prototype.getMetadata = function(t2) {
      return Bi(t2).get(oo.key).next((function(t3) {
        return k2(!!t3), t3;
      }));
    }, t.prototype.Jo = function(t2, e) {
      return Bi(t2).put(oo.key, e);
    }, /**
     * Decodes `remoteDoc` and returns the document (or null, if the document
     * corresponds to the format used for sentinel deletes).
     */
    t.prototype.Xo = function(t2) {
      if (t2) {
        var e = Si(this.serializer, t2);
        return e instanceof Bn && e.version.isEqual(gt.min()) ? null : e;
      }
      return null;
    }, t;
  })()
);
var zi = (
  /** @class */
  (function(e) {
    function n2(t, n3) {
      var r2 = this;
      return (r2 = e.call(this) || this).ca = t, r2.oa = n3, // A map of document sizes prior to applying the changes in this buffer.
      r2.ua = new yt((function(t2) {
        return t2.toString();
      }), (function(t2, e2) {
        return t2.isEqual(e2);
      })), r2;
    }
    return __extends2(n2, e), n2.prototype.yr = function(t) {
      var e2 = this, n3 = [], r2 = 0, i2 = new Ut((function(t2, e3) {
        return st(t2.R(), e3.R());
      }));
      return this.wr.forEach((function(o, s) {
        var u2 = e2.ua.get(o);
        if (s) {
          var a = Di(e2.ca.serializer, s, e2.readTime);
          i2 = i2.add(o.path.h());
          var c = Qi(a);
          r2 += c - u2, n3.push(e2.ca.Er(t, o, a));
        } else if (r2 -= u2, e2.oa) {
          var h = Di(e2.ca.serializer, new Bn(o, gt.min()), e2.readTime);
          n3.push(e2.ca.Er(t, o, h));
        } else n3.push(e2.ca.Ar(t, o));
      })), i2.forEach((function(r3) {
        n3.push(e2.ca.Dr.Mo(t, r3));
      })), n3.push(this.ca.updateMetadata(t, r2)), Dr.$n(n3);
    }, n2.prototype.gr = function(t, e2) {
      var n3 = this;
      return this.ca.Zo(t, e2).next((function(t2) {
        return null === t2 ? (n3.ua.set(e2, 0), null) : (n3.ua.set(e2, t2.size), t2.ta);
      }));
    }, n2.prototype.Pr = function(t, e2) {
      var n3 = this;
      return this.ca.na(t, e2).next((function(t2) {
        var e3 = t2.sa;
        return t2.ia.forEach((function(t3, e4) {
          n3.ua.set(t3, e4);
        })), e3;
      }));
    }, n2;
  })(fi)
);
function Bi(t) {
  return _o.Qn(t, oo.store);
}
function Ki(t) {
  return _o.Qn(t, io.store);
}
function Wi(t) {
  return t.path.A();
}
function Qi(t) {
  var e;
  if (t.document) e = t.document;
  else if (t.unknownDocument) e = t.unknownDocument;
  else {
    if (!t.noDocument) throw D2();
    e = t.noDocument;
  }
  return JSON.stringify(e).length;
}
var Hi = (
  /** @class */
  (function() {
    function t() {
      this.ha = new Yi();
    }
    return t.prototype.Mo = function(t2, e) {
      return this.ha.add(e), Dr.resolve();
    }, t.prototype.Qr = function(t2, e) {
      return Dr.resolve(this.ha.getEntries(e));
    }, t;
  })()
);
var Yi = (
  /** @class */
  (function() {
    function t() {
      this.index = {};
    }
    return t.prototype.add = function(t2) {
      var e = t2._(), n2 = t2.h(), r2 = this.index[e] || new Ut(V2.i), i2 = !r2.has(n2);
      return this.index[e] = r2.add(n2), i2;
    }, t.prototype.has = function(t2) {
      var e = t2._(), n2 = t2.h(), r2 = this.index[e];
      return r2 && r2.has(n2);
    }, t.prototype.getEntries = function(t2) {
      return (this.index[t2] || new Ut(V2.i)).A();
    }, t;
  })()
);
var $i = (
  /** @class */
  (function() {
    function t(t2) {
      this.serializer = t2;
    }
    return t.prototype.createOrUpgrade = function(t2, e, n2, r2) {
      var i2 = this;
      k2(n2 < r2 && n2 >= 0 && r2 <= 10);
      var o = new Or("createOrUpgrade", e);
      n2 < 1 && r2 >= 1 && ((function(t3) {
        t3.createObjectStore(Ji.store);
      })(t2), (function(t3) {
        t3.createObjectStore(Zi.store, {
          keyPath: Zi.keyPath
        }), t3.createObjectStore(to.store, {
          keyPath: to.keyPath,
          autoIncrement: true
        }).createIndex(to.userMutationsIndex, to.userMutationsKeyPath, {
          unique: true
        }), t3.createObjectStore(eo.store);
      })(t2), ho(t2), (function(t3) {
        t3.createObjectStore(io.store);
      })(t2));
      var s = Dr.resolve();
      return n2 < 3 && r2 >= 3 && // Brand new clients don't need to drop and recreate--only clients that
      // potentially have corrupt data.
      (0 !== n2 && ((function(t3) {
        t3.deleteObjectStore(uo.store), t3.deleteObjectStore(so.store), t3.deleteObjectStore(ao.store);
      })(t2), ho(t2)), s = s.next((function() {
        return (function(t3) {
          var e2 = t3.store(ao.store), n3 = new ao(
            /*highestTargetId=*/
            0,
            /*lastListenSequenceNumber=*/
            0,
            gt.min().Z(),
            /*targetCount=*/
            0
          );
          return e2.put(ao.key, n3);
        })(o);
      }))), n2 < 4 && r2 >= 4 && (0 !== n2 && // Schema version 3 uses auto-generated keys to generate globally unique
      // mutation batch IDs (this was previously ensured internally by the
      // client). To migrate to the new schema, we have to read all mutations
      // and write them back out. We preserve the existing batch IDs to guarantee
      // consistency with other object stores. Any further mutation batch IDs will
      // be auto-generated.
      (s = s.next((function() {
        return (function(t3, e2) {
          return e2.store(to.store).ts().next((function(n3) {
            t3.deleteObjectStore(to.store), t3.createObjectStore(to.store, {
              keyPath: to.keyPath,
              autoIncrement: true
            }).createIndex(to.userMutationsIndex, to.userMutationsKeyPath, {
              unique: true
            });
            var r3 = e2.store(to.store), i3 = n3.map((function(t4) {
              return r3.put(t4);
            }));
            return Dr.$n(i3);
          }));
        })(t2, o);
      }))), s = s.next((function() {
        !(function(t3) {
          t3.createObjectStore(fo.store, {
            keyPath: fo.keyPath
          });
        })(t2);
      }))), n2 < 5 && r2 >= 5 && (s = s.next((function() {
        return i2.removeAcknowledgedMutations(o);
      }))), n2 < 6 && r2 >= 6 && (s = s.next((function() {
        return (function(t3) {
          t3.createObjectStore(oo.store);
        })(t2), i2.addDocumentGlobal(o);
      }))), n2 < 7 && r2 >= 7 && (s = s.next((function() {
        return i2.ensureSequenceNumbers(o);
      }))), n2 < 8 && r2 >= 8 && (s = s.next((function() {
        return i2.createCollectionParentIndex(t2, o);
      }))), n2 < 9 && r2 >= 9 && (s = s.next((function() {
        !(function(t3) {
          t3.objectStoreNames.contains("remoteDocumentChanges") && t3.deleteObjectStore("remoteDocumentChanges");
        })(t2), (function(t3) {
          var e2 = t3.objectStore(io.store);
          e2.createIndex(io.readTimeIndex, io.readTimeIndexPath, {
            unique: false
          }), e2.createIndex(io.collectionReadTimeIndex, io.collectionReadTimeIndexPath, {
            unique: false
          });
        })(e);
      }))), n2 < 10 && r2 >= 10 && (s = s.next((function() {
        return i2.rewriteCanonicalIds(o);
      }))), s;
    }, t.prototype.addDocumentGlobal = function(t2) {
      var e = 0;
      return t2.store(io.store).rs((function(t3, n2) {
        e += Qi(n2);
      })).next((function() {
        var n2 = new oo(e);
        return t2.store(oo.store).put(oo.key, n2);
      }));
    }, t.prototype.removeAcknowledgedMutations = function(t2) {
      var e = this, n2 = t2.store(Zi.store), r2 = t2.store(to.store);
      return n2.ts().next((function(n3) {
        return Dr.forEach(n3, (function(n4) {
          var i2 = IDBKeyRange.bound([n4.userId, -1], [n4.userId, n4.lastAcknowledgedBatchId]);
          return r2.ts(to.userMutationsIndex, i2).next((function(r3) {
            return Dr.forEach(r3, (function(r4) {
              k2(r4.userId === n4.userId);
              var i3 = Oi(e.serializer, r4);
              return Fi(t2, n4.userId, i3).next((function() {
              }));
            }));
          }));
        }));
      }));
    }, /**
     * Ensures that every document in the remote document cache has a corresponding sentinel row
     * with a sequence number. Missing rows are given the most recently used sequence number.
     */
    t.prototype.ensureSequenceNumbers = function(t2) {
      var e = t2.store(uo.store), n2 = t2.store(io.store);
      return t2.store(ao.store).get(ao.key).next((function(t3) {
        var r2 = [];
        return n2.rs((function(n3, i2) {
          var o = new V2(n3), s = (function(t4) {
            return [0, Ei(t4)];
          })(o);
          r2.push(e.get(s).next((function(n4) {
            return n4 ? Dr.resolve() : (function(n5) {
              return e.put(new uo(0, Ei(n5), t3.highestListenSequenceNumber));
            })(o);
          })));
        })).next((function() {
          return Dr.$n(r2);
        }));
      }));
    }, t.prototype.createCollectionParentIndex = function(t2, e) {
      t2.createObjectStore(co.store, {
        keyPath: co.keyPath
      });
      var n2 = e.store(co.store), r2 = new Yi(), i2 = function(t3) {
        if (r2.add(t3)) {
          var e2 = t3._(), i3 = t3.h();
          return n2.put({
            collectionId: e2,
            parent: Ei(i3)
          });
        }
      };
      return e.store(io.store).rs({
        ss: true
      }, (function(t3, e2) {
        var n3 = new V2(t3);
        return i2(n3.h());
      })).next((function() {
        return e.store(eo.store).rs({
          ss: true
        }, (function(t3, e2) {
          t3[0];
          var n3 = t3[1], r3 = (t3[2], Ni(n3));
          return i2(r3.h());
        }));
      }));
    }, t.prototype.rewriteCanonicalIds = function(t2) {
      var e = this, n2 = t2.store(so.store);
      return n2.rs((function(t3, r2) {
        var i2 = Pi(r2), o = Vi(e.serializer, i2);
        return n2.put(o);
      }));
    }, t;
  })()
);
var Xi = function(t, e) {
  this.seconds = t, this.nanoseconds = e;
};
var Ji = function(t, e, n2) {
  this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n2;
};
Ji.store = "owner", /**
     * The key string used for the single object that exists in the
     * DbPrimaryClient store.
     */
Ji.key = "owner";
var Zi = function(t, e, n2) {
  this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n2;
};
Zi.store = "mutationQueues", /** Keys are automatically assigned via the userId property. */
Zi.keyPath = "userId";
var to = function(t, e, n2, r2, i2) {
  this.userId = t, this.batchId = e, this.localWriteTimeMs = n2, this.baseMutations = r2, this.mutations = i2;
};
to.store = "mutations", /** Keys are automatically assigned via the userId, batchId properties. */
to.keyPath = "batchId", /** The index name for lookup of mutations by user. */
to.userMutationsIndex = "userMutationsIndex", /** The user mutations index is keyed by [userId, batchId] pairs. */
to.userMutationsKeyPath = ["userId", "batchId"];
var eo = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prefixForUser = function(t2) {
      return [t2];
    }, /**
     * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
     * index to iterate over all at document mutations for a given path or lower.
     */
    t.prefixForPath = function(t2, e) {
      return [t2, Ei(e)];
    }, /**
     * Creates a full index key of [userId, encodedPath, batchId] for inserting
     * and deleting into the DbDocumentMutations index.
     */
    t.key = function(t2, e, n2) {
      return [t2, Ei(e), n2];
    }, t;
  })()
);
eo.store = "documentMutations", /**
     * Because we store all the useful information for this store in the key,
     * there is no useful information to store as the value. The raw (unencoded)
     * path cannot be stored because IndexedDb doesn't store prototype
     * information.
     */
eo.PLACEHOLDER = new eo();
var no = function(t, e) {
  this.path = t, this.readTime = e;
};
var ro = function(t, e) {
  this.path = t, this.version = e;
};
var io = (
  // TODO: We are currently storing full document keys almost three times
  // (once as part of the primary key, once - partly - as `parentPath` and once
  // inside the encoded documents). During our next migration, we should
  // rewrite the primary key as parentPath + document ID which would allow us
  // to drop one value.
  function(t, e, n2, r2, i2, o) {
    this.unknownDocument = t, this.noDocument = e, this.document = n2, this.hasCommittedMutations = r2, this.readTime = i2, this.parentPath = o;
  }
);
io.store = "remoteDocuments", /**
     * An index that provides access to all entries sorted by read time (which
     * corresponds to the last modification time of each row).
     *
     * This index is used to provide a changelog for Multi-Tab.
     */
io.readTimeIndex = "readTimeIndex", io.readTimeIndexPath = "readTime", /**
     * An index that provides access to documents in a collection sorted by read
     * time.
     *
     * This index is used to allow the RemoteDocumentCache to fetch newly changed
     * documents in a collection.
     */
io.collectionReadTimeIndex = "collectionReadTimeIndex", io.collectionReadTimeIndexPath = ["parentPath", "readTime"];
var oo = (
  /**
       * @param byteSize Approximately the total size in bytes of all the documents in the document
       * cache.
       */
  function(t) {
    this.byteSize = t;
  }
);
oo.store = "remoteDocumentGlobal", oo.key = "remoteDocumentGlobalKey";
var so = function(t, e, n2, r2, i2, o, s) {
  this.targetId = t, this.canonicalId = e, this.readTime = n2, this.resumeToken = r2, this.lastListenSequenceNumber = i2, this.lastLimboFreeSnapshotVersion = o, this.query = s;
};
so.store = "targets", /** Keys are automatically assigned via the targetId property. */
so.keyPath = "targetId", /** The name of the queryTargets index. */
so.queryTargetsIndexName = "queryTargetsIndex", /**
     * The index of all canonicalIds to the targets that they match. This is not
     * a unique mapping because canonicalId does not promise a unique name for all
     * possible queries, so we append the targetId to make the mapping unique.
     */
so.queryTargetsKeyPath = ["canonicalId", "targetId"];
var uo = function(t, e, n2) {
  this.targetId = t, this.path = e, this.sequenceNumber = n2;
};
uo.store = "targetDocuments", /** Keys are automatically assigned via the targetId, path properties. */
uo.keyPath = ["targetId", "path"], /** The index name for the reverse index. */
uo.documentTargetsIndex = "documentTargetsIndex", /** We also need to create the reverse index for these properties. */
uo.documentTargetsKeyPath = ["path", "targetId"];
var ao = function(t, e, n2, r2) {
  this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n2, this.targetCount = r2;
};
ao.key = "targetGlobalKey", ao.store = "targetGlobal";
var co = function(t, e) {
  this.collectionId = t, this.parent = e;
};
function ho(t) {
  t.createObjectStore(uo.store, {
    keyPath: uo.keyPath
  }).createIndex(uo.documentTargetsIndex, uo.documentTargetsKeyPath, {
    unique: true
  }), // NOTE: This is unique only because the TargetId is the suffix.
  t.createObjectStore(so.store, {
    keyPath: so.keyPath
  }).createIndex(so.queryTargetsIndexName, so.queryTargetsKeyPath, {
    unique: true
  }), t.createObjectStore(ao.store);
}
co.store = "collectionParents", /** Keys are automatically assigned via the collectionId, parent properties. */
co.keyPath = ["collectionId", "parent"];
var fo = function(t, e, n2, r2) {
  this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n2, this.inForeground = r2;
};
fo.store = "clientMetadata", /** Keys are automatically assigned via the clientId properties. */
fo.keyPath = "clientId";
var lo = __spreadArrays(__spreadArrays(__spreadArrays([Zi.store, to.store, eo.store, io.store, so.store, Ji.store, ao.store, uo.store], [fo.store]), [oo.store]), [co.store]);
var po = (
  /** @class */
  (function() {
    function t() {
      this.la = new Yi();
    }
    return t.prototype.Mo = function(t2, e) {
      var n2 = this;
      if (!this.la.has(e)) {
        var r2 = e._(), i2 = e.h();
        t2.pr((function() {
          n2.la.add(e);
        }));
        var o = {
          collectionId: r2,
          parent: Ei(i2)
        };
        return vo(t2).put(o);
      }
      return Dr.resolve();
    }, t.prototype.Qr = function(t2, e) {
      var n2 = [], r2 = IDBKeyRange.bound(
        [e, ""],
        [at(e), ""],
        /*lowerOpen=*/
        false,
        /*upperOpen=*/
        true
      );
      return vo(t2).ts(r2).next((function(t3) {
        for (var r3 = 0, i2 = t3; r3 < i2.length; r3++) {
          var o = i2[r3];
          if (o.collectionId !== e) break;
          n2.push(Ni(o.parent));
        }
        return n2;
      }));
    }, t;
  })()
);
function vo(t) {
  return _o.Qn(t, co.store);
}
var yo = (
  /** @class */
  (function() {
    function t(t2) {
      this._a = t2;
    }
    return t.prototype.next = function() {
      return this._a += 2, this._a;
    }, t.fa = function() {
      return new t(0);
    }, t.da = function() {
      return new t(-1);
    }, t;
  })()
);
var mo = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.No = t2, this.serializer = e;
    }
    return t.prototype.wa = function(t2) {
      var e = this;
      return this.ma(t2).next((function(n2) {
        var r2 = new yo(n2.highestTargetId);
        return n2.highestTargetId = r2.next(), e.Ta(t2, n2).next((function() {
          return n2.highestTargetId;
        }));
      }));
    }, t.prototype.Ea = function(t2) {
      return this.ma(t2).next((function(t3) {
        return gt.J(new mt(t3.lastRemoteSnapshotVersion.seconds, t3.lastRemoteSnapshotVersion.nanoseconds));
      }));
    }, t.prototype.Ia = function(t2) {
      return this.ma(t2).next((function(t3) {
        return t3.highestListenSequenceNumber;
      }));
    }, t.prototype.Aa = function(t2, e, n2) {
      var r2 = this;
      return this.ma(t2).next((function(i2) {
        return i2.highestListenSequenceNumber = e, n2 && (i2.lastRemoteSnapshotVersion = n2.Z()), e > i2.highestListenSequenceNumber && (i2.highestListenSequenceNumber = e), r2.Ta(t2, i2);
      }));
    }, t.prototype.Ra = function(t2, e) {
      var n2 = this;
      return this.ga(t2, e).next((function() {
        return n2.ma(t2).next((function(r2) {
          return r2.targetCount += 1, n2.Pa(e, r2), n2.Ta(t2, r2);
        }));
      }));
    }, t.prototype.ya = function(t2, e) {
      return this.ga(t2, e);
    }, t.prototype.Va = function(t2, e) {
      var n2 = this;
      return this.pa(t2, e.targetId).next((function() {
        return go(t2).delete(e.targetId);
      })).next((function() {
        return n2.ma(t2);
      })).next((function(e2) {
        return k2(e2.targetCount > 0), e2.targetCount -= 1, n2.Ta(t2, e2);
      }));
    }, /**
     * Drops any targets with sequence number less than or equal to the upper bound, excepting those
     * present in `activeTargetIds`. Document associations for the removed targets are also removed.
     * Returns the number of targets removed.
     */
    t.prototype.po = function(t2, e, n2) {
      var r2 = this, i2 = 0, o = [];
      return go(t2).rs((function(s, u2) {
        var a = Pi(u2);
        a.sequenceNumber <= e && null === n2.get(a.targetId) && (i2++, o.push(r2.Va(t2, a)));
      })).next((function() {
        return Dr.$n(o);
      })).next((function() {
        return i2;
      }));
    }, /**
     * Call provided function with each `TargetData` that we have cached.
     */
    t.prototype.Ce = function(t2, e) {
      return go(t2).rs((function(t3, n2) {
        var r2 = Pi(n2);
        e(r2);
      }));
    }, t.prototype.ma = function(t2) {
      return wo(t2).get(ao.key).next((function(t3) {
        return k2(null !== t3), t3;
      }));
    }, t.prototype.Ta = function(t2, e) {
      return wo(t2).put(ao.key, e);
    }, t.prototype.ga = function(t2, e) {
      return go(t2).put(Vi(this.serializer, e));
    }, /**
     * In-place updates the provided metadata to account for values in the given
     * TargetData. Saving is done separately. Returns true if there were any
     * changes to the metadata.
     */
    t.prototype.Pa = function(t2, e) {
      var n2 = false;
      return t2.targetId > e.highestTargetId && (e.highestTargetId = t2.targetId, n2 = true), t2.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t2.sequenceNumber, n2 = true), n2;
    }, t.prototype.ba = function(t2) {
      return this.ma(t2).next((function(t3) {
        return t3.targetCount;
      }));
    }, t.prototype.va = function(t2, e) {
      var n2 = Tt(e), r2 = IDBKeyRange.bound([n2, Number.NEGATIVE_INFINITY], [n2, Number.POSITIVE_INFINITY]), i2 = null;
      return go(t2).rs({
        range: r2,
        index: so.queryTargetsIndexName
      }, (function(t3, n3, r3) {
        var o = Pi(n3);
        Nt(e, o.target) && (i2 = o, r3.done());
      })).next((function() {
        return i2;
      }));
    }, t.prototype.Sa = function(t2, e, n2) {
      var r2 = this, i2 = [], o = bo(t2);
      return e.forEach((function(e2) {
        var s = Ei(e2.path);
        i2.push(o.put(new uo(n2, s))), i2.push(r2.No.Da(t2, n2, e2));
      })), Dr.$n(i2);
    }, t.prototype.Ca = function(t2, e, n2) {
      var r2 = this, i2 = bo(t2);
      return Dr.forEach(e, (function(e2) {
        var o = Ei(e2.path);
        return Dr.$n([i2.delete([n2, o]), r2.No.Na(t2, n2, e2)]);
      }));
    }, t.prototype.pa = function(t2, e) {
      var n2 = bo(t2), r2 = IDBKeyRange.bound(
        [e],
        [e + 1],
        /*lowerOpen=*/
        false,
        /*upperOpen=*/
        true
      );
      return n2.delete(r2);
    }, t.prototype.Fa = function(t2, e) {
      var n2 = IDBKeyRange.bound(
        [e],
        [e + 1],
        /*lowerOpen=*/
        false,
        /*upperOpen=*/
        true
      ), r2 = bo(t2), i2 = Kt();
      return r2.rs({
        range: n2,
        ss: true
      }, (function(t3, e2, n3) {
        var r3 = Ni(t3[1]), o = new F2(r3);
        i2 = i2.add(o);
      })).next((function() {
        return i2;
      }));
    }, t.prototype.Ho = function(t2, e) {
      var n2 = Ei(e.path), r2 = IDBKeyRange.bound(
        [n2],
        [at(n2)],
        /*lowerOpen=*/
        false,
        /*upperOpen=*/
        true
      ), i2 = 0;
      return bo(t2).rs({
        index: uo.documentTargetsIndex,
        ss: true,
        range: r2
      }, (function(t3, e2, n3) {
        var r3 = t3[0];
        t3[1];
        0 !== r3 && (i2++, n3.done());
      })).next((function() {
        return i2 > 0;
      }));
    }, /**
     * Looks up a TargetData entry by target ID.
     *
     * @param targetId The target ID of the TargetData entry to look up.
     * @return The cached TargetData entry, or null if the cache has no entry for
     * the target.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Ue = function(t2, e) {
      return go(t2).get(e).next((function(t3) {
        return t3 ? Pi(t3) : null;
      }));
    }, t;
  })()
);
function go(t) {
  return _o.Qn(t, so.store);
}
function wo(t) {
  return _o.Qn(t, ao.store);
}
function bo(t) {
  return _o.Qn(t, uo.store);
}
var Io = "Failed to obtain exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";
var Eo = (
  /** @class */
  (function(e) {
    function n2(t, n3) {
      var r2 = this;
      return (r2 = e.call(this) || this).jo = t, r2.xa = n3, r2;
    }
    return __extends2(n2, e), n2;
  })(pi)
);
var _o = (
  /** @class */
  (function() {
    function t(e, n2, r2, i2, o, s, u2, a, c, h) {
      if (this.allowTabSynchronization = e, this.persistenceKey = n2, this.clientId = r2, this.fn = o, this.window = s, this.document = u2, this.$a = c, this.ka = h, this.Ma = null, this.Oa = false, this.isPrimary = false, this.networkEnabled = true, /** Our window.unload handler, if registered. */
      this.La = null, this.inForeground = false, /** Our 'visibilitychange' listener if registered. */
      this.Ba = null, /** The client metadata refresh task. */
      this.qa = null, /** The last time we garbage collected the client metadata object store. */
      this.Ua = Number.NEGATIVE_INFINITY, /** A listener to notify on primary state changes. */
      this.Qa = function(t2) {
        return Promise.resolve();
      }, !t.Ln()) throw new I2(b.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
      this.No = new Ao(this, i2), this.Wa = n2 + "main", this.serializer = new Ai(a), this.ja = new kr(this.Wa, 10, new $i(this.serializer)), this.Ka = new mo(this.No, this.serializer), this.Dr = new po(), this.vr = (function(t2, e2) {
        return new Gi(t2, e2);
      })(this.serializer, this.Dr), this.window && this.window.localStorage ? this.Ga = this.window.localStorage : (this.Ga = null, false === h && N2("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
    }
    return t.Qn = function(t2, e) {
      if (t2 instanceof Eo) return kr.Qn(t2.jo, e);
      throw D2();
    }, /**
     * Attempt to start IndexedDb persistence.
     *
     * @return {Promise<void>} Whether persistence was enabled.
     */
    t.prototype.start = function() {
      var t2 = this;
      return this.za().then((function() {
        if (!t2.isPrimary && !t2.allowTabSynchronization)
          throw new I2(b.FAILED_PRECONDITION, Io);
        return t2.Ha(), t2.Ya(), t2.Ja(), t2.runTransaction("getHighestListenSequenceNumber", "readonly", (function(e) {
          return t2.Ka.Ia(e);
        }));
      })).then((function(e) {
        t2.Ma = new Jr(e, t2.$a);
      })).then((function() {
        t2.Oa = true;
      })).catch((function(e) {
        return t2.ja && t2.ja.close(), Promise.reject(e);
      }));
    }, /**
     * Registers a listener that gets called when the primary state of the
     * instance changes. Upon registering, this listener is invoked immediately
     * with the current primary state.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.Xa = function(t2) {
      var r2 = this;
      return this.Qa = function(i2) {
        return __awaiter2(r2, void 0, void 0, (function() {
          return __generator2(this, (function(e) {
            return this.Ei ? [2, t2(i2)] : [
              2
              /*return*/
            ];
          }));
        }));
      }, t2(this.isPrimary);
    }, /**
     * Registers a listener that gets called when the database receives a
     * version change event indicating that it has deleted.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.Za = function(t2) {
      var r2 = this;
      this.ja.Kn((function(i2) {
        return __awaiter2(r2, void 0, void 0, (function() {
          return __generator2(this, (function(e) {
            switch (e.label) {
              case 0:
                return null === i2.newVersion ? [4, t2()] : [3, 2];
              case 1:
                e.sent(), e.label = 2;
              case 2:
                return [
                  2
                  /*return*/
                ];
            }
          }));
        }));
      }));
    }, /**
     * Adjusts the current network state in the client's metadata, potentially
     * affecting the primary lease.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.tc = function(t2) {
      var r2 = this;
      this.networkEnabled !== t2 && (this.networkEnabled = t2, // Schedule a primary lease refresh for immediate execution. The eventual
      // lease update will be propagated via `primaryStateListener`.
      this.fn.ws((function() {
        return __awaiter2(r2, void 0, void 0, (function() {
          return __generator2(this, (function(t3) {
            switch (t3.label) {
              case 0:
                return this.Ei ? [4, this.za()] : [3, 2];
              case 1:
                t3.sent(), t3.label = 2;
              case 2:
                return [
                  2
                  /*return*/
                ];
            }
          }));
        }));
      })));
    }, /**
     * Updates the client metadata in IndexedDb and attempts to either obtain or
     * extend the primary lease for the local client. Asynchronously notifies the
     * primary state listener if the client either newly obtained or released its
     * primary lease.
     */
    t.prototype.za = function() {
      var t2 = this;
      return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (function(e) {
        return No(e).put(new fo(t2.clientId, Date.now(), t2.networkEnabled, t2.inForeground)).next((function() {
          if (t2.isPrimary) return t2.ec(e).next((function(e2) {
            e2 || (t2.isPrimary = false, t2.fn.Cs((function() {
              return t2.Qa(false);
            })));
          }));
        })).next((function() {
          return t2.nc(e);
        })).next((function(n2) {
          return t2.isPrimary && !n2 ? t2.sc(e).next((function() {
            return false;
          })) : !!n2 && t2.ic(e).next((function() {
            return true;
          }));
        }));
      })).catch((function(e) {
        if (Rr(e))
          return T2("IndexedDbPersistence", "Failed to extend owner lease: ", e), t2.isPrimary;
        if (!t2.allowTabSynchronization) throw e;
        return T2("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e), /* isPrimary= */
        false;
      })).then((function(e) {
        t2.isPrimary !== e && t2.fn.Cs((function() {
          return t2.Qa(e);
        })), t2.isPrimary = e;
      }));
    }, t.prototype.ec = function(t2) {
      var e = this;
      return To(t2).get(Ji.key).next((function(t3) {
        return Dr.resolve(e.rc(t3));
      }));
    }, t.prototype.oc = function(t2) {
      return No(t2).delete(this.clientId);
    }, /**
     * If the garbage collection threshold has passed, prunes the
     * RemoteDocumentChanges and the ClientMetadata store based on the last update
     * time of all clients.
     */
    t.prototype.ac = function() {
      return __awaiter2(this, void 0, void 0, (function() {
        var e, r2, i2, o, s = this;
        return __generator2(this, (function(n2) {
          switch (n2.label) {
            case 0:
              return !this.isPrimary || this.cc(this.Ua, 18e5) ? [3, 2] : (this.Ua = Date.now(), [4, this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (function(e2) {
                var n3 = t.Qn(e2, fo.store);
                return n3.ts().next((function(t2) {
                  var e3 = s.uc(t2, 18e5), r3 = t2.filter((function(t3) {
                    return -1 === e3.indexOf(t3);
                  }));
                  return Dr.forEach(r3, (function(t3) {
                    return n3.delete(t3.clientId);
                  })).next((function() {
                    return r3;
                  }));
                }));
              })).catch((function() {
                return [];
              }))]);
            case 1:
              if (e = n2.sent(), this.Ga) for (r2 = 0, i2 = e; r2 < i2.length; r2++) o = i2[r2], this.Ga.removeItem(this.hc(o.clientId));
              n2.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        }));
      }));
    }, /**
     * Schedules a recurring timer to update the client metadata and to either
     * extend or acquire the primary lease if the client is eligible.
     */
    t.prototype.Ja = function() {
      var t2 = this;
      this.qa = this.fn.yn("client_metadata_refresh", 4e3, (function() {
        return t2.za().then((function() {
          return t2.ac();
        })).then((function() {
          return t2.Ja();
        }));
      }));
    }, /** Checks whether `client` is the local client. */
    t.prototype.rc = function(t2) {
      return !!t2 && t2.ownerId === this.clientId;
    }, /**
     * Evaluate the state of all active clients and determine whether the local
     * client is or can act as the holder of the primary lease. Returns whether
     * the client is eligible for the lease, but does not actually acquire it.
     * May return 'false' even if there is no active leaseholder and another
     * (foreground) client should become leaseholder instead.
     */
    t.prototype.nc = function(t2) {
      var e = this;
      return this.ka ? Dr.resolve(true) : To(t2).get(Ji.key).next((function(n2) {
        if (null !== n2 && e.cc(n2.leaseTimestampMs, 5e3) && !e.lc(n2.ownerId)) {
          if (e.rc(n2) && e.networkEnabled) return true;
          if (!e.rc(n2)) {
            if (!n2.allowTabSynchronization)
              throw new I2(b.FAILED_PRECONDITION, Io);
            return false;
          }
        }
        return !(!e.networkEnabled || !e.inForeground) || No(t2).ts().next((function(t3) {
          return void 0 === e.uc(t3, 5e3).find((function(t4) {
            if (e.clientId !== t4.clientId) {
              var n3 = !e.networkEnabled && t4.networkEnabled, r2 = !e.inForeground && t4.inForeground, i2 = e.networkEnabled === t4.networkEnabled;
              if (n3 || r2 && i2) return true;
            }
            return false;
          }));
        }));
      })).next((function(t3) {
        return e.isPrimary !== t3 && T2("IndexedDbPersistence", "Client " + (t3 ? "is" : "is not") + " eligible for a primary lease."), t3;
      }));
    }, t.prototype.Di = function() {
      return __awaiter2(this, void 0, void 0, (function() {
        var t2 = this;
        return __generator2(this, (function(e) {
          switch (e.label) {
            case 0:
              return this.Oa = false, this._c(), this.qa && (this.qa.cancel(), this.qa = null), this.fc(), this.dc(), [4, this.ja.runTransaction("shutdown", "readwrite", [Ji.store, fo.store], (function(e2) {
                var n2 = new Eo(e2, Jr.ai);
                return t2.sc(n2).next((function() {
                  return t2.oc(n2);
                }));
              }))];
            case 1:
              return e.sent(), this.ja.close(), // Remove the entry marking the client as zombied from LocalStorage since
              // we successfully deleted its metadata from IndexedDb.
              this.wc(), [
                2
                /*return*/
              ];
          }
        }));
      }));
    }, /**
     * Returns clients that are not zombied and have an updateTime within the
     * provided threshold.
     */
    t.prototype.uc = function(t2, e) {
      var n2 = this;
      return t2.filter((function(t3) {
        return n2.cc(t3.updateTimeMs, e) && !n2.lc(t3.clientId);
      }));
    }, /**
     * Returns the IDs of the clients that are currently active. If multi-tab
     * is not supported, returns an array that only contains the local client's
     * ID.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.pi = function() {
      var t2 = this;
      return this.runTransaction("getActiveClients", "readonly", (function(e) {
        return No(e).ts().next((function(e2) {
          return t2.uc(e2, 18e5).map((function(t3) {
            return t3.clientId;
          }));
        }));
      }));
    }, Object.defineProperty(t.prototype, "Ei", {
      get: function() {
        return this.Oa;
      },
      enumerable: false,
      configurable: true
    }), t.prototype.mc = function(t2) {
      return Ui.xo(t2, this.serializer, this.Dr, this.No);
    }, t.prototype.Tc = function() {
      return this.Ka;
    }, t.prototype.Ec = function() {
      return this.vr;
    }, t.prototype.Ic = function() {
      return this.Dr;
    }, t.prototype.runTransaction = function(t2, e, n2) {
      var r2 = this;
      T2("IndexedDbPersistence", "Starting transaction:", t2);
      var i2, o = "readonly" === e ? "readonly" : "readwrite";
      return this.ja.runTransaction(t2, o, lo, (function(o2) {
        return i2 = new Eo(o2, r2.Ma ? r2.Ma.next() : Jr.ai), "readwrite-primary" === e ? r2.ec(i2).next((function(t3) {
          return !!t3 || r2.nc(i2);
        })).next((function(e2) {
          if (!e2) throw N2("Failed to obtain primary lease for action '" + t2 + "'."), r2.isPrimary = false, r2.fn.Cs((function() {
            return r2.Qa(false);
          })), new I2(b.FAILED_PRECONDITION, li);
          return n2(i2);
        })).next((function(t3) {
          return r2.ic(i2).next((function() {
            return t3;
          }));
        })) : r2.Ac(i2).next((function() {
          return n2(i2);
        }));
      })).then((function(t3) {
        return i2.br(), t3;
      }));
    }, /**
     * Verifies that the current tab is the primary leaseholder or alternatively
     * that the leaseholder has opted into multi-tab synchronization.
     */
    // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
    // be turned off.
    t.prototype.Ac = function(t2) {
      var e = this;
      return To(t2).get(Ji.key).next((function(t3) {
        if (null !== t3 && e.cc(t3.leaseTimestampMs, 5e3) && !e.lc(t3.ownerId) && !e.rc(t3) && !(e.ka || e.allowTabSynchronization && t3.allowTabSynchronization)) throw new I2(b.FAILED_PRECONDITION, Io);
      }));
    }, /**
     * Obtains or extends the new primary lease for the local client. This
     * method does not verify that the client is eligible for this lease.
     */
    t.prototype.ic = function(t2) {
      var e = new Ji(this.clientId, this.allowTabSynchronization, Date.now());
      return To(t2).put(Ji.key, e);
    }, t.Ln = function() {
      return kr.Ln();
    }, /** Checks the primary lease and removes it if we are the current primary. */
    t.prototype.sc = function(t2) {
      var e = this, n2 = To(t2);
      return n2.get(Ji.key).next((function(t3) {
        return e.rc(t3) ? (T2("IndexedDbPersistence", "Releasing primary lease."), n2.delete(Ji.key)) : Dr.resolve();
      }));
    }, /** Verifies that `updateTimeMs` is within `maxAgeMs`. */
    t.prototype.cc = function(t2, e) {
      var n2 = Date.now();
      return !(t2 < n2 - e || t2 > n2 && (N2("Detected an update time that is in the future: " + t2 + " > " + n2), 1));
    }, t.prototype.Ha = function() {
      var t2 = this;
      null !== this.document && "function" == typeof this.document.addEventListener && (this.Ba = function() {
        t2.fn.ws((function() {
          return t2.inForeground = "visible" === t2.document.visibilityState, t2.za();
        }));
      }, this.document.addEventListener("visibilitychange", this.Ba), this.inForeground = "visible" === this.document.visibilityState);
    }, t.prototype.fc = function() {
      this.Ba && (this.document.removeEventListener("visibilitychange", this.Ba), this.Ba = null);
    }, /**
     * Attaches a window.unload handler that will synchronously write our
     * clientId to a "zombie client id" location in LocalStorage. This can be used
     * by tabs trying to acquire the primary lease to determine that the lease
     * is no longer valid even if the timestamp is recent. This is particularly
     * important for the refresh case (so the tab correctly re-acquires the
     * primary lease). LocalStorage is used for this rather than IndexedDb because
     * it is a synchronous API and so can be used reliably from  an unload
     * handler.
     */
    t.prototype.Ya = function() {
      var t2, e = this;
      "function" == typeof (null === (t2 = this.window) || void 0 === t2 ? void 0 : t2.addEventListener) && (this.La = function() {
        e._c(), e.fn.ws((function() {
          return e.Di();
        }));
      }, this.window.addEventListener("unload", this.La));
    }, t.prototype.dc = function() {
      this.La && (this.window.removeEventListener("unload", this.La), this.La = null);
    }, /**
     * Returns whether a client is "zombied" based on its LocalStorage entry.
     * Clients become zombied when their tab closes without running all of the
     * cleanup logic in `shutdown()`.
     */
    t.prototype.lc = function(t2) {
      var e;
      try {
        var n2 = null !== (null === (e = this.Ga) || void 0 === e ? void 0 : e.getItem(this.hc(t2)));
        return T2("IndexedDbPersistence", "Client '" + t2 + "' " + (n2 ? "is" : "is not") + " zombied in LocalStorage"), n2;
      } catch (t3) {
        return N2("IndexedDbPersistence", "Failed to get zombied client id.", t3), false;
      }
    }, /**
     * Record client as zombied (a client that had its tab closed). Zombied
     * clients are ignored during primary tab selection.
     */
    t.prototype._c = function() {
      if (this.Ga) try {
        this.Ga.setItem(this.hc(this.clientId), String(Date.now()));
      } catch (t2) {
        N2("Failed to set zombie client id.", t2);
      }
    }, /** Removes the zombied client entry if it exists. */
    t.prototype.wc = function() {
      if (this.Ga) try {
        this.Ga.removeItem(this.hc(this.clientId));
      } catch (t2) {
      }
    }, t.prototype.hc = function(t2) {
      return "firestore_zombie_" + this.persistenceKey + "_" + t2;
    }, t;
  })()
);
function To(t) {
  return _o.Qn(t, Ji.store);
}
function No(t) {
  return _o.Qn(t, fo.store);
}
var Ao = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.db = t2, this.wo = new Ii(this, e);
    }
    return t.prototype.Po = function(t2) {
      var e = this.Rc(t2);
      return this.db.Tc().ba(t2).next((function(t3) {
        return e.next((function(e2) {
          return t3 + e2;
        }));
      }));
    }, t.prototype.Rc = function(t2) {
      var e = 0;
      return this.Vo(t2, (function(t3) {
        e++;
      })).next((function() {
        return e;
      }));
    }, t.prototype.Ce = function(t2, e) {
      return this.db.Tc().Ce(t2, e);
    }, t.prototype.Vo = function(t2, e) {
      return this.gc(t2, (function(t3, n2) {
        return e(n2);
      }));
    }, t.prototype.Da = function(t2, e, n2) {
      return So(t2, n2);
    }, t.prototype.Na = function(t2, e, n2) {
      return So(t2, n2);
    }, t.prototype.po = function(t2, e, n2) {
      return this.db.Tc().po(t2, e, n2);
    }, t.prototype.Go = function(t2, e) {
      return So(t2, e);
    }, /**
     * Returns true if anything would prevent this document from being garbage
     * collected, given that the document in question is not present in any
     * targets and has a sequence number less than or equal to the upper bound for
     * the collection run.
     */
    t.prototype.Pc = function(t2, e) {
      return (function(t3, e2) {
        var n2 = false;
        return ji(t3).os((function(r2) {
          return Ci(t3, r2, e2).next((function(t4) {
            return t4 && (n2 = true), Dr.resolve(!t4);
          }));
        })).next((function() {
          return n2;
        }));
      })(t2, e);
    }, t.prototype.bo = function(t2, e) {
      var n2 = this, r2 = this.db.Ec().ra(), i2 = [], o = 0;
      return this.gc(t2, (function(s, u2) {
        if (u2 <= e) {
          var a = n2.Pc(t2, s).next((function(e2) {
            if (!e2)
              return o++, r2.Rr(t2, s).next((function() {
                return r2.Ar(s), bo(t2).delete([0, Ei(s.path)]);
              }));
          }));
          i2.push(a);
        }
      })).next((function() {
        return Dr.$n(i2);
      })).next((function() {
        return r2.apply(t2);
      })).next((function() {
        return o;
      }));
    }, t.prototype.removeTarget = function(t2, e) {
      var n2 = e.st(t2.xa);
      return this.db.Tc().ya(t2, n2);
    }, t.prototype.yc = function(t2, e) {
      return So(t2, e);
    }, /**
     * Call provided function for each document in the cache that is 'orphaned'. Orphaned
     * means not a part of any target, so the only entry in the target-document index for
     * that document will be the sentinel row (targetId 0), which will also have the sequence
     * number for the last time the document was accessed.
     */
    t.prototype.gc = function(t2, e) {
      var n2, r2 = bo(t2), i2 = Jr.ai;
      return r2.rs({
        index: uo.documentTargetsIndex
      }, (function(t3, r3) {
        var o = t3[0], s = (t3[1], r3.path), u2 = r3.sequenceNumber;
        0 === o ? (
          // if nextToReport is valid, report it, this is a new key so the
          // last one must not be a member of any targets.
          (i2 !== Jr.ai && e(new F2(Ni(n2)), i2), // set nextToReport to be this sequence number. It's the next one we
          // might report, if we don't find any targets for this document.
          // Note that the sequence number must be defined when the targetId
          // is 0.
          i2 = u2, n2 = s)
        ) : (
          // set nextToReport to be invalid, we know we don't need to report
          // this one since we found a target for it.
          i2 = Jr.ai
        );
      })).next((function() {
        i2 !== Jr.ai && e(new F2(Ni(n2)), i2);
      }));
    }, t.prototype.So = function(t2) {
      return this.db.Ec().aa(t2);
    }, t;
  })()
);
function So(t, e) {
  return bo(t).put(
    /**
    * @return A value suitable for writing a sentinel row in the target-document
    * store.
    */
    (function(t2, e2) {
      return new uo(0, Ei(t2.path), e2);
    })(e, t.xa)
  );
}
function Do(t, e) {
  var n2 = t.projectId;
  return t.j || (n2 += "." + t.database), "firestore/" + e + "/" + n2 + "/";
}
var ko = (
  /** @class */
  (function() {
    function t(t2, e, n2) {
      this.persistence = t2, this.Vc = e, /**
           * Maps a targetID to data about its target.
           *
           * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
           * of `applyRemoteEvent()` idempotent.
           */
      this.bc = new Ot(st), /** Maps a target to its targetID. */
      // TODO(wuandy): Evaluate if TargetId can be part of Target.
      this.vc = new yt((function(t3) {
        return Tt(t3);
      }), Nt), /**
           * The read time of the last entry processed by `getNewDocumentChanges()`.
           *
           * PORTING NOTE: This is only used for multi-tab synchronization.
           */
      this.Sc = gt.min(), this.Sr = t2.mc(n2), this.Dc = t2.Ec(), this.Ka = t2.Tc(), this.Cc = new di(this.Dc, this.Sr, this.persistence.Ic()), this.Vc.Nc(this.Cc);
    }
    return t.prototype.Io = function(t2) {
      var e = this;
      return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n2) {
        return t2.vo(n2, e.bc);
      }));
    }, t;
  })()
);
function xo(t, e) {
  var n2 = x2(t);
  return n2.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(t2) {
    var r2 = e.batch.keys(), i2 = n2.Dc.ra({
      oa: true
    });
    return (function(t3, e2, n3, r3) {
      var i3 = n3.batch, o = i3.keys(), s = Dr.resolve();
      return o.forEach((function(t4) {
        s = s.next((function() {
          return r3.Rr(e2, t4);
        })).next((function(e3) {
          var o2 = e3, s2 = n3.dr.get(t4);
          k2(null !== s2), (!o2 || o2.version.L(s2) < 0) && ((o2 = i3.cr(t4, o2, n3)) && // We use the commitVersion as the readTime rather than the
          // document's updateTime since the updateTime is not advanced
          // for updates that do not modify the underlying document.
          r3.Er(o2, n3._r));
        }));
      })), s.next((function() {
        return t3.Sr.Wo(e2, i3);
      }));
    })(n2, t2, e, i2).next((function() {
      return i2.apply(t2);
    })).next((function() {
      return n2.Sr.zo(t2);
    })).next((function() {
      return n2.Cc.kr(t2, r2);
    }));
  }));
}
function Lo(t) {
  var e = x2(t);
  return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(t2) {
    return e.Ka.Ea(t2);
  }));
}
function Ro(t, e) {
  var n2 = x2(t), r2 = e.nt, i2 = n2.bc;
  return n2.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(t2) {
    var o = n2.Dc.ra({
      oa: true
    });
    i2 = n2.bc;
    var s = [];
    e.zt.forEach((function(e2, o2) {
      var u3 = i2.get(o2);
      if (u3) {
        s.push(n2.Ka.Ca(t2, e2.se, o2).next((function() {
          return n2.Ka.Sa(t2, e2.ee, o2);
        })));
        var a2 = e2.resumeToken;
        if (a2.O() > 0) {
          var c2 = u3.it(a2, r2).st(t2.xa);
          i2 = i2.ot(o2, c2), // Update the target data if there are target changes (or if
          // sufficient time has passed since the last update).
          /**
          * Returns true if the newTargetData should be persisted during an update of
          * an active target. TargetData should always be persisted when a target is
          * being released and should not call this function.
          *
          * While the target is active, TargetData updates can be omitted when nothing
          * about the target has changed except metadata like the resume token or
          * snapshot version. Occasionally it's worth the extra write to prevent these
          * values from getting too stale after a crash, but this doesn't have to be
          * too frequent.
          */
          (function(t3, e3, n3) {
            return k2(e3.resumeToken.O() > 0), 0 === t3.resumeToken.O() || // Don't allow resume token changes to be buffered indefinitely. This
            // allows us to be reasonably up-to-date after a crash and avoids needing
            // to loop over all active queries on shutdown. Especially in the browser
            // we may not get time to do anything interesting while the current tab is
            // closing.
            (e3.nt.X() - t3.nt.X() >= 3e8 || n3.ee.size + n3.ne.size + n3.se.size > 0);
          })(u3, c2, e2) && s.push(n2.Ka.ya(t2, c2));
        }
      }
    }));
    var u2 = Mt(), a = Kt();
    if (e.Yt.forEach((function(t3, e2) {
      a = a.add(t3);
    })), // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
    // documents in advance in a single call.
    s.push(o.getEntries(t2, a).next((function(i3) {
      e.Yt.forEach((function(a2, c2) {
        var h = i3.get(a2);
        c2 instanceof Bn && c2.version.isEqual(gt.min()) ? (
          // NoDocuments with SnapshotVersion.min() are used in manufactured
          // events. We remove these documents from cache since we lost
          // access.
          (o.Ar(a2, r2), u2 = u2.ot(a2, c2))
        ) : null == h || c2.version.L(h.version) > 0 || 0 === c2.version.L(h.version) && h.hasPendingWrites ? (o.Er(c2, r2), u2 = u2.ot(a2, c2)) : T2("LocalStore", "Ignoring outdated watch update for ", a2, ". Current version:", h.version, " Watch version:", c2.version), e.Jt.has(a2) && s.push(n2.persistence.No.yc(t2, a2));
      }));
    }))), !r2.isEqual(gt.min())) {
      var c = n2.Ka.Ea(t2).next((function(e2) {
        return n2.Ka.Aa(t2, t2.xa, r2);
      }));
      s.push(c);
    }
    return Dr.$n(s).next((function() {
      return o.apply(t2);
    })).next((function() {
      return n2.Cc.Mr(t2, u2);
    }));
  })).then((function(t2) {
    return n2.bc = i2, t2;
  }));
}
function Oo(t, e) {
  var n2 = x2(t);
  return n2.persistence.runTransaction("Get next mutation batch", "readonly", (function(t2) {
    return void 0 === e && (e = -1), n2.Sr.Bo(t2, e);
  }));
}
function Po(t, e) {
  var n2 = x2(t);
  return n2.persistence.runTransaction("Allocate target", "readwrite", (function(t2) {
    var r2;
    return n2.Ka.va(t2, e).next((function(i2) {
      return i2 ? (
        // This target has been listened to previously, so reuse the
        // previous targetID.
        // TODO(mcg): freshen last accessed date?
        (r2 = i2, Dr.resolve(r2))
      ) : n2.Ka.wa(t2).next((function(i3) {
        return r2 = new kt(e, i3, 0, t2.xa), n2.Ka.Ra(t2, r2).next((function() {
          return r2;
        }));
      }));
    }));
  })).then((function(t2) {
    var r2 = n2.bc.get(t2.targetId);
    return (null === r2 || t2.nt.L(r2.nt) > 0) && (n2.bc = n2.bc.ot(t2.targetId, t2), n2.vc.set(e, t2.targetId)), t2;
  }));
}
function Vo(t, r2, i2) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, o, s, u2;
    return __generator2(this, (function(n2) {
      switch (n2.label) {
        case 0:
          e = x2(t), o = e.bc.get(r2), s = i2 ? "readwrite" : "readwrite-primary", n2.label = 1;
        case 1:
          return n2.trys.push([1, 4, , 5]), i2 ? [3, 3] : [4, e.persistence.runTransaction("Release target", s, (function(t2) {
            return e.persistence.No.removeTarget(t2, o);
          }))];
        case 2:
          n2.sent(), n2.label = 3;
        case 3:
          return [3, 5];
        case 4:
          if (!Rr(u2 = n2.sent())) throw u2;
          return T2("LocalStore", "Failed to update sequence numbers for target " + r2 + ": " + u2), [3, 5];
        case 5:
          return e.bc = e.bc.remove(r2), e.vc.delete(o.target), [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function Uo(t, e, n2) {
  var r2 = x2(t), i2 = gt.min(), o = Kt();
  return r2.persistence.runTransaction("Execute query", "readonly", (function(t2) {
    return (function(t3, e2, n3) {
      var r3 = x2(t3), i3 = r3.vc.get(n3);
      return void 0 !== i3 ? Dr.resolve(r3.bc.get(i3)) : r3.Ka.va(e2, n3);
    })(r2, t2, er(e)).next((function(e2) {
      if (e2) return i2 = e2.lastLimboFreeSnapshotVersion, r2.Ka.Fa(t2, e2.targetId).next((function(t3) {
        o = t3;
      }));
    })).next((function() {
      return r2.Vc.Lr(t2, e, n2 ? i2 : gt.min(), n2 ? o : Kt());
    })).next((function(t3) {
      return {
        documents: t3,
        Fc: o
      };
    }));
  }));
}
function Co(t, e) {
  var n2 = x2(t), r2 = x2(n2.Ka), i2 = n2.bc.get(e);
  return i2 ? Promise.resolve(i2.target) : n2.persistence.runTransaction("Get target data", "readonly", (function(t2) {
    return r2.Ue(t2, e).next((function(t3) {
      return t3 ? t3.target : null;
    }));
  }));
}
function Fo(t) {
  var e = x2(t);
  return e.persistence.runTransaction("Get new document changes", "readonly", (function(t2) {
    return (function(t3, e2, n2) {
      var r2 = x2(t3), i2 = Mt(), o = ki(n2), s = Ki(e2), u2 = IDBKeyRange.lowerBound(o, true);
      return s.rs({
        index: io.readTimeIndex,
        range: u2
      }, (function(t4, e3) {
        var n3 = Si(r2.serializer, e3);
        i2 = i2.ot(n3.key, n3), o = e3.readTime;
      })).next((function() {
        return {
          xc: i2,
          readTime: xi(o)
        };
      }));
    })(e.Dc, t2, e.Sc);
  })).then((function(t2) {
    var n2 = t2.xc, r2 = t2.readTime;
    return e.Sc = r2, n2;
  }));
}
function Mo(t) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e;
    return __generator2(this, (function(n2) {
      return [2, (e = x2(t)).persistence.runTransaction("Synchronize last document change read time", "readonly", (function(t2) {
        return (function(t3) {
          var e2 = Ki(t3), n3 = gt.min();
          return e2.rs({
            index: io.readTimeIndex,
            reverse: true
          }, (function(t4, e3, r2) {
            e3.readTime && (n3 = xi(e3.readTime)), r2.done();
          })).next((function() {
            return n3;
          }));
        })(t2);
      })).then((function(t2) {
        e.Sc = t2;
      }))];
    }));
  }));
}
function qo(t) {
  return __awaiter2(this, void 0, void 0, (function() {
    return __generator2(this, (function(e) {
      if (t.code !== b.FAILED_PRECONDITION || t.message !== li) throw t;
      return T2("LocalStore", "Unexpectedly lost primary lease"), [
        2
        /*return*/
      ];
    }));
  }));
}
var jo = (
  /** @class */
  (function() {
    function t() {
      this.$c = new Ut(Go.kc), // A set of outstanding references to a document sorted by target id.
      this.Mc = new Ut(Go.Oc);
    }
    return t.prototype.m = function() {
      return this.$c.m();
    }, /** Adds a reference to the given document key for the given ID. */
    t.prototype.Da = function(t2, e) {
      var n2 = new Go(t2, e);
      this.$c = this.$c.add(n2), this.Mc = this.Mc.add(n2);
    }, /** Add references to the given document keys for the given ID. */
    t.prototype.Lc = function(t2, e) {
      var n2 = this;
      t2.forEach((function(t3) {
        return n2.Da(t3, e);
      }));
    }, /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    t.prototype.Na = function(t2, e) {
      this.Bc(new Go(t2, e));
    }, t.prototype.qc = function(t2, e) {
      var n2 = this;
      t2.forEach((function(t3) {
        return n2.Na(t3, e);
      }));
    }, /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    t.prototype.Uc = function(t2) {
      var e = this, n2 = new F2(new V2([])), r2 = new Go(n2, t2), i2 = new Go(n2, t2 + 1), o = [];
      return this.Mc.Ft([r2, i2], (function(t3) {
        e.Bc(t3), o.push(t3.key);
      })), o;
    }, t.prototype.Qc = function() {
      var t2 = this;
      this.$c.forEach((function(e) {
        return t2.Bc(e);
      }));
    }, t.prototype.Bc = function(t2) {
      this.$c = this.$c.delete(t2), this.Mc = this.Mc.delete(t2);
    }, t.prototype.Wc = function(t2) {
      var e = new F2(new V2([])), n2 = new Go(e, t2), r2 = new Go(e, t2 + 1), i2 = Kt();
      return this.Mc.Ft([n2, r2], (function(t3) {
        i2 = i2.add(t3.key);
      })), i2;
    }, t.prototype.Ho = function(t2) {
      var e = new Go(t2, 0), n2 = this.$c.$t(e);
      return null !== n2 && t2.isEqual(n2.key);
    }, t;
  })()
);
var Go = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.key = t2, this.jc = e;
    }
    return t.kc = function(t2, e) {
      return F2.i(t2.key, e.key) || st(t2.jc, e.jc);
    }, /** Compare by ID then by key */
    t.Oc = function(t2, e) {
      return st(t2.jc, e.jc) || F2.i(t2.key, e.key);
    }, t;
  })()
);
var zo = function(t, e) {
  this.user = e, this.type = "OAuth", this.Kc = {}, // Set the headers using Object Literal notation to avoid minification
  this.Kc.Authorization = "Bearer " + t;
};
var Bo = (
  /** @class */
  (function() {
    function t() {
      this.Gc = null;
    }
    return t.prototype.getToken = function() {
      return Promise.resolve(null);
    }, t.prototype.zc = function() {
    }, t.prototype.Hc = function(t2) {
      this.Gc = t2, // Fire with initial user.
      t2(Xr.UNAUTHENTICATED);
    }, t.prototype.Yc = function() {
      this.Gc = null;
    }, t;
  })()
);
var Ko = (
  /** @class */
  (function() {
    function t(t2) {
      var e = this;
      this.Jc = null, /** Tracks the current User. */
      this.currentUser = Xr.UNAUTHENTICATED, this.Xc = false, /**
           * Counter used to detect if the token changed while a getToken request was
           * outstanding.
           */
      this.Zc = 0, /** The listener registered with setChangeListener(). */
      this.Gc = null, this.forceRefresh = false, this.Jc = function() {
        e.Zc++, e.currentUser = e.tu(), e.Xc = true, e.Gc && e.Gc(e.currentUser);
      }, this.Zc = 0, this.auth = t2.getImmediate({
        optional: true
      }), this.auth ? this.auth.addAuthTokenListener(this.Jc) : (
        // if auth is not available, invoke tokenListener once with null token
        (this.Jc(null), t2.get().then((function(t3) {
          e.auth = t3, e.Jc && // tokenListener can be removed by removeChangeListener()
          e.auth.addAuthTokenListener(e.Jc);
        }), (function() {
        })))
      );
    }
    return t.prototype.getToken = function() {
      var t2 = this, e = this.Zc, n2 = this.forceRefresh;
      return this.forceRefresh = false, this.auth ? this.auth.getToken(n2).then((function(n3) {
        return t2.Zc !== e ? (T2("FirebaseCredentialsProvider", "getToken aborted due to token change."), t2.getToken()) : n3 ? (k2("string" == typeof n3.accessToken), new zo(n3.accessToken, t2.currentUser)) : null;
      })) : Promise.resolve(null);
    }, t.prototype.zc = function() {
      this.forceRefresh = true;
    }, t.prototype.Hc = function(t2) {
      this.Gc = t2, // Fire the initial event
      this.Xc && t2(this.currentUser);
    }, t.prototype.Yc = function() {
      this.auth && this.auth.removeAuthTokenListener(this.Jc), this.Jc = null, this.Gc = null;
    }, // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    t.prototype.tu = function() {
      var t2 = this.auth && this.auth.getUid();
      return k2(null === t2 || "string" == typeof t2), new Xr(t2);
    }, t;
  })()
);
var Wo = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.eu = t2, this.nu = e, this.type = "FirstParty", this.user = Xr.ni;
    }
    return Object.defineProperty(t.prototype, "Kc", {
      get: function() {
        var t2 = {
          "X-Goog-AuthUser": this.nu
        }, e = this.eu.auth.getAuthHeaderValueForFirstParty([]);
        return e && (t2.Authorization = e), t2;
      },
      enumerable: false,
      configurable: true
    }), t;
  })()
);
var Qo = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.eu = t2, this.nu = e;
    }
    return t.prototype.getToken = function() {
      return Promise.resolve(new Wo(this.eu, this.nu));
    }, t.prototype.Hc = function(t2) {
      t2(Xr.ni);
    }, t.prototype.Yc = function() {
    }, t.prototype.zc = function() {
    }, t;
  })()
);
var Ho = (
  /** @class */
  (function() {
    function t(t2, e, n2, r2, i2, o) {
      this.fn = t2, this.su = n2, this.iu = r2, this.ru = i2, this.listener = o, this.state = 0, /**
           * A close count that's incremented every time the stream is closed; used by
           * getCloseGuardedDispatcher() to invalidate callbacks that happen after
           * close.
           */
      this.ou = 0, this.au = null, this.stream = null, this.ys = new Sr(t2, e);
    }
    return t.prototype.cu = function() {
      return 1 === this.state || 2 === this.state || 4 === this.state;
    }, /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    t.prototype.uu = function() {
      return 2 === this.state;
    }, /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */
    t.prototype.start = function() {
      3 !== this.state ? this.auth() : this.hu();
    }, /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    t.prototype.stop = function() {
      return __awaiter2(this, void 0, void 0, (function() {
        return __generator2(this, (function(t2) {
          switch (t2.label) {
            case 0:
              return this.cu() ? [4, this.close(
                0
                /* Initial */
              )] : [3, 2];
            case 1:
              t2.sent(), t2.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        }));
      }));
    }, /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */
    t.prototype.lu = function() {
      this.state = 0, this.ys.reset();
    }, /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */
    t.prototype._u = function() {
      var t2 = this;
      this.uu() && null === this.au && (this.au = this.fn.yn(this.su, 6e4, (function() {
        return t2.fu();
      })));
    }, /** Sends a message to the underlying stream. */
    t.prototype.du = function(t2) {
      this.wu(), this.stream.send(t2);
    }, /** Called by the idle timer when the stream should close due to inactivity. */
    t.prototype.fu = function() {
      return __awaiter2(this, void 0, void 0, (function() {
        return __generator2(this, (function(t2) {
          return this.uu() ? [2, this.close(
            0
            /* Initial */
          )] : [
            2
            /*return*/
          ];
        }));
      }));
    }, /** Marks the stream as active again. */
    t.prototype.wu = function() {
      this.au && (this.au.cancel(), this.au = null);
    }, /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState the intended state of the stream after closing.
     * @param error the error the connection was closed with.
     */
    t.prototype.close = function(t2, r2) {
      return __awaiter2(this, void 0, void 0, (function() {
        return __generator2(this, (function(e) {
          switch (e.label) {
            case 0:
              return this.wu(), this.ys.cancel(), // Invalidates any stream-related callbacks (e.g. from auth or the
              // underlying stream), guaranteeing they won't execute.
              this.ou++, 3 !== t2 ? (
                // If this is an intentional close ensure we don't delay our next connection attempt.
                this.ys.reset()
              ) : r2 && r2.code === b.RESOURCE_EXHAUSTED ? (
                // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                (N2(r2.toString()), N2("Using maximum backoff delay to prevent overloading the backend."), this.ys.Rn())
              ) : r2 && r2.code === b.UNAUTHENTICATED && // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
              // just expired.
              this.ru.zc(), // Clean up the underlying stream because we are no longer interested in events.
              null !== this.stream && (this.mu(), this.stream.close(), this.stream = null), // This state must be assigned before calling onClose() to allow the callback to
              // inhibit backoff or otherwise manipulate the state in its non-started state.
              this.state = t2, [4, this.listener.Tu(r2)];
            case 1:
              return e.sent(), [
                2
                /*return*/
              ];
          }
        }));
      }));
    }, /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    t.prototype.mu = function() {
    }, t.prototype.auth = function() {
      var t2 = this;
      this.state = 1;
      var e = this.Eu(this.ou), n2 = this.ou;
      this.ru.getToken().then((function(e2) {
        t2.ou === n2 && // Normally we'd have to schedule the callback on the AsyncQueue.
        // However, the following calls are safe to be called outside the
        // AsyncQueue since they don't chain asynchronous calls
        t2.Iu(e2);
      }), (function(n3) {
        e((function() {
          var e2 = new I2(b.UNKNOWN, "Fetching auth token failed: " + n3.message);
          return t2.Au(e2);
        }));
      }));
    }, t.prototype.Iu = function(t2) {
      var e = this, n2 = this.Eu(this.ou);
      this.stream = this.Ru(t2), this.stream.gu((function() {
        n2((function() {
          return e.state = 2, e.listener.gu();
        }));
      })), this.stream.Tu((function(t3) {
        n2((function() {
          return e.Au(t3);
        }));
      })), this.stream.onMessage((function(t3) {
        n2((function() {
          return e.onMessage(t3);
        }));
      }));
    }, t.prototype.hu = function() {
      var t2 = this;
      this.state = 4, this.ys.gn((function() {
        return __awaiter2(t2, void 0, void 0, (function() {
          return __generator2(this, (function(t3) {
            return this.state = 0, this.start(), [
              2
              /*return*/
            ];
          }));
        }));
      }));
    }, // Visible for tests
    t.prototype.Au = function(t2) {
      return T2("PersistentStream", "close with error: " + t2), this.stream = null, this.close(3, t2);
    }, /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    t.prototype.Eu = function(t2) {
      var e = this;
      return function(n2) {
        e.fn.ws((function() {
          return e.ou === t2 ? n2() : (T2("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve());
        }));
      };
    }, t;
  })()
);
var Yo = (
  /** @class */
  (function(e) {
    function n2(t, n3, r2, i2, o) {
      var s = this;
      return (s = e.call(this, t, "listen_stream_connection_backoff", "listen_stream_idle", n3, r2, o) || this).serializer = i2, s;
    }
    return __extends2(n2, e), n2.prototype.Ru = function(t) {
      return this.iu.Pu("Listen", t);
    }, n2.prototype.onMessage = function(t) {
      this.ys.reset();
      var e2 = (function(t2, e3) {
        var n4;
        if ("targetChange" in e3) {
          e3.targetChange;
          var r2 = (function(t3) {
            return "NO_CHANGE" === t3 ? 0 : "ADD" === t3 ? 1 : "REMOVE" === t3 ? 2 : "CURRENT" === t3 ? 3 : "RESET" === t3 ? 4 : D2();
          })(e3.targetChange.targetChangeType || "NO_CHANGE"), i2 = e3.targetChange.targetIds || [], o = (function(t3, e4) {
            return t3.Qe ? (k2(void 0 === e4 || "string" == typeof e4), ct.fromBase64String(e4 || "")) : (k2(void 0 === e4 || e4 instanceof Uint8Array), ct.fromUint8Array(e4 || new Uint8Array()));
          })(t2, e3.targetChange.resumeToken), s = e3.targetChange.cause, u2 = s && (function(t3) {
            var e4 = void 0 === t3.code ? b.UNKNOWN : Rt(t3.code);
            return new I2(e4, t3.message || "");
          })(s);
          n4 = new ee(r2, i2, o, u2 || null);
        } else if ("documentChange" in e3) {
          e3.documentChange;
          var a = e3.documentChange;
          a.document, a.document.name, a.document.updateTime;
          var c = Me(t2, a.document.name), h = Ve(a.document.updateTime), f = new Mn({
            mapValue: {
              fields: a.document.fields
            }
          }), l = new zn(c, h, f, {}), p2 = a.targetIds || [], d = a.removedTargetIds || [];
          n4 = new Zt(p2, d, l.key, l);
        } else if ("documentDelete" in e3) {
          e3.documentDelete;
          var v2 = e3.documentDelete;
          v2.document;
          var y2 = Me(t2, v2.document), m = v2.readTime ? Ve(v2.readTime) : gt.min(), g2 = new Bn(y2, m), w2 = v2.removedTargetIds || [];
          n4 = new Zt([], w2, g2.key, g2);
        } else if ("documentRemove" in e3) {
          e3.documentRemove;
          var E3 = e3.documentRemove;
          E3.document;
          var _2 = Me(t2, E3.document), T3 = E3.removedTargetIds || [];
          n4 = new Zt([], T3, _2, null);
        } else {
          if (!("filter" in e3)) return D2();
          e3.filter;
          var N3 = e3.filter;
          N3.targetId;
          var A3 = N3.count || 0, S3 = new xt(A3), x3 = N3.targetId;
          n4 = new te(x3, S3);
        }
        return n4;
      })(this.serializer, t), n3 = (function(t2) {
        if (!("targetChange" in t2)) return gt.min();
        var e3 = t2.targetChange;
        return e3.targetIds && e3.targetIds.length ? gt.min() : e3.readTime ? Ve(e3.readTime) : gt.min();
      })(t);
      return this.listener.yu(e2, n3);
    }, /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    n2.prototype.Vu = function(t) {
      var e2 = {};
      e2.database = Ge(this.serializer), e2.addTarget = (function(t2, e3) {
        var n4, r2 = e3.target;
        return (n4 = At(r2) ? {
          documents: Qe(t2, r2)
        } : {
          query: He(t2, r2)
        }).targetId = e3.targetId, e3.resumeToken.O() > 0 && (n4.resumeToken = Oe(t2, e3.resumeToken)), n4;
      })(this.serializer, t);
      var n3 = (function(t2, e3) {
        var n4 = (function(t3, e4) {
          switch (e4) {
            case 0:
              return null;
            case 1:
              return "existence-filter-mismatch";
            case 2:
              return "limbo-document";
            default:
              return D2();
          }
        })(0, e3.et);
        return null == n4 ? null : {
          "goog-listen-tags": n4
        };
      })(this.serializer, t);
      n3 && (e2.labels = n3), this.du(e2);
    }, /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */
    n2.prototype.pu = function(t) {
      var e2 = {};
      e2.database = Ge(this.serializer), e2.removeTarget = t, this.du(e2);
    }, n2;
  })(Ho)
);
var $o = (
  /** @class */
  (function(e) {
    function n2(t, n3, r2, i2, o) {
      var s = this;
      return (s = e.call(this, t, "write_stream_connection_backoff", "write_stream_idle", n3, r2, o) || this).serializer = i2, s.bu = false, s;
    }
    return __extends2(n2, e), Object.defineProperty(n2.prototype, "vu", {
      /**
       * Tracks whether or not a handshake has been successfully exchanged and
       * the stream is ready to accept mutations.
       */
      get: function() {
        return this.bu;
      },
      enumerable: false,
      configurable: true
    }), // Override of PersistentStream.start
    n2.prototype.start = function() {
      this.bu = false, this.lastStreamToken = void 0, e.prototype.start.call(this);
    }, n2.prototype.mu = function() {
      this.bu && this.Su([]);
    }, n2.prototype.Ru = function(t) {
      return this.iu.Pu("Write", t);
    }, n2.prototype.onMessage = function(t) {
      if (
        // Always capture the last stream token.
        k2(!!t.streamToken), this.lastStreamToken = t.streamToken, this.bu
      ) {
        this.ys.reset();
        var e2 = (function(t2, e3) {
          return t2 && t2.length > 0 ? (k2(void 0 !== e3), t2.map((function(t3) {
            return (function(t4, e4) {
              var n4 = t4.updateTime ? Ve(t4.updateTime) : Ve(e4);
              n4.isEqual(gt.min()) && // The Firestore Emulator currently returns an update time of 0 for
              // deletes of non-existing documents (rather than null). This breaks the
              // test "get deleted doc while offline with source=cache" as NoDocuments
              // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
              // TODO(#2149): Remove this when Emulator is fixed
              (n4 = Ve(e4));
              var r2 = null;
              return t4.transformResults && t4.transformResults.length > 0 && (r2 = t4.transformResults), new En(n4, r2);
            })(t3, e3);
          }))) : [];
        })(t.writeResults, t.commitTime), n3 = Ve(t.commitTime);
        return this.listener.Du(n3, e2);
      }
      return k2(!t.writeResults || 0 === t.writeResults.length), this.bu = true, this.listener.Cu();
    }, /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    n2.prototype.Nu = function() {
      var t = {};
      t.database = Ge(this.serializer), this.du(t);
    }, /** Sends a group of mutations to the Firestore backend to apply. */
    n2.prototype.Su = function(t) {
      var e2 = this, n3 = {
        streamToken: this.lastStreamToken,
        writes: t.map((function(t2) {
          return Ke(e2.serializer, t2);
        }))
      };
      this.du(n3);
    }, n2;
  })(Ho)
);
var Xo = (
  /** @class */
  (function(e) {
    function n2(t, n3, r2) {
      var i2 = this;
      return (i2 = e.call(this) || this).credentials = t, i2.iu = n3, i2.serializer = r2, i2.Fu = false, i2;
    }
    return __extends2(n2, e), n2.prototype.xu = function() {
      if (this.Fu) throw new I2(b.FAILED_PRECONDITION, "The client has already been terminated.");
    }, /** Gets an auth token and invokes the provided RPC. */
    n2.prototype.$u = function(t, e2, n3) {
      var r2 = this;
      return this.xu(), this.credentials.getToken().then((function(i2) {
        return r2.iu.$u(t, e2, n3, i2);
      })).catch((function(t2) {
        throw t2.code === b.UNAUTHENTICATED && r2.credentials.zc(), t2;
      }));
    }, /** Gets an auth token and invokes the provided RPC with streamed results. */
    n2.prototype.ku = function(t, e2, n3) {
      var r2 = this;
      return this.xu(), this.credentials.getToken().then((function(i2) {
        return r2.iu.ku(t, e2, n3, i2);
      })).catch((function(t2) {
        throw t2.code === b.UNAUTHENTICATED && r2.credentials.zc(), t2;
      }));
    }, n2.prototype.terminate = function() {
      this.Fu = false;
    }, n2;
  })((function() {
  }))
);
var Jo = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.cs = t2, this.di = e, /** The current OnlineState. */
      this.state = "Unknown", /**
           * A count of consecutive failures to open the stream. If it reaches the
           * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
           * Offline.
           */
      this.Mu = 0, /**
           * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
           * transition from OnlineState.Unknown to OnlineState.Offline without waiting
           * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
           */
      this.Ou = null, /**
           * Whether the client should log a warning message if it fails to connect to
           * the backend (initially true, cleared after a successful stream, or if we've
           * logged the message already).
           */
      this.Lu = true;
    }
    return t.prototype.Bu = function() {
      var t2 = this;
      0 === this.Mu && (this.qu(
        "Unknown"
        /* Unknown */
      ), this.Ou = this.cs.yn("online_state_timeout", 1e4, (function() {
        return t2.Ou = null, t2.Uu("Backend didn't respond within 10 seconds."), t2.qu(
          "Offline"
          /* Offline */
        ), Promise.resolve();
      })));
    }, /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    t.prototype.Qu = function(t2) {
      "Online" === this.state ? this.qu(
        "Unknown"
        /* Unknown */
      ) : (this.Mu++, this.Mu >= 1 && (this.Wu(), this.Uu("Connection failed 1 times. Most recent error: " + t2.toString()), this.qu(
        "Offline"
        /* Offline */
      )));
    }, /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    t.prototype.set = function(t2) {
      this.Wu(), this.Mu = 0, "Online" === t2 && // We've connected to watch at least once. Don't warn the developer
      // about being offline going forward.
      (this.Lu = false), this.qu(t2);
    }, t.prototype.qu = function(t2) {
      t2 !== this.state && (this.state = t2, this.di(t2));
    }, t.prototype.Uu = function(t2) {
      var e = "Could not reach Cloud Firestore backend. " + t2 + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
      this.Lu ? (N2(e), this.Lu = false) : T2("OnlineStateTracker", e);
    }, t.prototype.Wu = function() {
      null !== this.Ou && (this.Ou.cancel(), this.Ou = null);
    }, t;
  })()
);
var Zo = function(t, r2, i2, o, s) {
  var u2 = this;
  this.ju = t, this.Ku = r2, this.cs = i2, this.Gu = {}, /**
           * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
           * LocalStore via fillWritePipeline() and have or will send to the write
           * stream.
           *
           * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
           * restart the write stream. When the stream is established the writes in the
           * pipeline will be sent in order.
           *
           * Writes remain in writePipeline until they are acknowledged by the backend
           * and thus will automatically be re-sent if the stream is interrupted /
           * restarted before they're acknowledged.
           *
           * Write responses from the backend are linked to their originating request
           * purely based on order, and so we can just shift() writes from the front of
           * the writePipeline as we receive responses.
           */
  this.zu = [], /**
           * A mapping of watched targets that the client cares about tracking and the
           * user has explicitly called a 'listen' for this target.
           *
           * These targets may or may not have been sent to or acknowledged by the
           * server. On re-establishing the listen stream, these targets should be sent
           * to the server. The targets removed with unlistens are removed eagerly
           * without waiting for confirmation from the listen stream.
           */
  this.Hu = /* @__PURE__ */ new Map(), /**
           * A set of reasons for why the RemoteStore may be offline. If empty, the
           * RemoteStore may start its network connections.
           */
  this.Yu = /* @__PURE__ */ new Set(), /**
           * Event handlers that get called when the network is disabled or enabled.
           *
           * PORTING NOTE: These functions are used on the Web client to create the
           * underlying streams (to support tree-shakeable streams). On Android and iOS,
           * the streams are created during construction of RemoteStore.
           */
  this.Ju = [], this.Xu = s, this.Xu.Zu((function(t2) {
    i2.ws((function() {
      return __awaiter2(u2, void 0, void 0, (function() {
        return __generator2(this, (function(t3) {
          switch (t3.label) {
            case 0:
              return cs(this) ? (T2("RemoteStore", "Restarting streams for network reachability change."), [4, (function(t4) {
                return __awaiter2(this, void 0, void 0, (function() {
                  var e;
                  return __generator2(this, (function(n2) {
                    switch (n2.label) {
                      case 0:
                        return (e = x2(t4)).Yu.add(
                          4
                          /* ConnectivityChange */
                        ), [4, es(e)];
                      case 1:
                        return n2.sent(), e.th.set(
                          "Unknown"
                          /* Unknown */
                        ), e.Yu.delete(
                          4
                          /* ConnectivityChange */
                        ), [4, ts(e)];
                      case 2:
                        return n2.sent(), [
                          2
                          /*return*/
                        ];
                    }
                  }));
                }));
              })(this)]) : [3, 2];
            case 1:
              t3.sent(), t3.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        }));
      }));
    }));
  })), this.th = new Jo(i2, o);
};
function ts(t) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, r2;
    return __generator2(this, (function(n2) {
      switch (n2.label) {
        case 0:
          if (!cs(t)) return [3, 4];
          e = 0, r2 = t.Ju, n2.label = 1;
        case 1:
          return e < r2.length ? [4, (0, r2[e])(
            /* enabled= */
            true
          )] : [3, 4];
        case 2:
          n2.sent(), n2.label = 3;
        case 3:
          return e++, [3, 1];
        case 4:
          return [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function es(t) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, r2;
    return __generator2(this, (function(n2) {
      switch (n2.label) {
        case 0:
          e = 0, r2 = t.Ju, n2.label = 1;
        case 1:
          return e < r2.length ? [4, (0, r2[e])(
            /* enabled= */
            false
          )] : [3, 4];
        case 2:
          n2.sent(), n2.label = 3;
        case 3:
          return e++, [3, 1];
        case 4:
          return [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function ns(t) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e;
    return __generator2(this, (function(n2) {
      switch (n2.label) {
        case 0:
          return e = x2(t), T2("RemoteStore", "RemoteStore shutting down."), e.Yu.add(
            5
            /* Shutdown */
          ), [4, es(e)];
        case 1:
          return n2.sent(), e.Xu.Di(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
          // triggering spurious listener events with cached data, etc.
          e.th.set(
            "Unknown"
            /* Unknown */
          ), [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function rs(t, e) {
  var n2 = x2(t);
  n2.Hu.has(e.targetId) || // Mark this as something the client is currently listening for.
  (n2.Hu.set(e.targetId, e), as(n2) ? (
    // The listen will be sent in onWatchStreamOpen
    us(n2)
  ) : Ts(n2).uu() && os(n2, e));
}
function is(t, e) {
  var n2 = x2(t), r2 = Ts(n2);
  n2.Hu.delete(e), r2.uu() && ss(n2, e), 0 === n2.Hu.size && (r2.uu() ? r2._u() : cs(n2) && // Revert to OnlineState.Unknown if the watch stream is not open and we
  // have no listeners, since without any listens to send we cannot
  // confirm if the stream is healthy and upgrade to OnlineState.Online.
  n2.th.set(
    "Unknown"
    /* Unknown */
  ));
}
function os(t, e) {
  t.eh.Ie(e.targetId), Ts(t).Vu(e);
}
function ss(t, e) {
  t.eh.Ie(e), Ts(t).pu(e);
}
function us(t) {
  t.eh = new re({
    qe: function(e) {
      return t.Gu.qe(e);
    },
    Ue: function(e) {
      return t.Hu.get(e) || null;
    }
  }), Ts(t).start(), t.th.Bu();
}
function as(t) {
  return cs(t) && !Ts(t).cu() && t.Hu.size > 0;
}
function cs(t) {
  return 0 === x2(t).Yu.size;
}
function hs(t) {
  t.eh = void 0;
}
function fs(t) {
  return __awaiter2(this, void 0, void 0, (function() {
    return __generator2(this, (function(e) {
      return t.Hu.forEach((function(e2, n2) {
        os(t, e2);
      })), [
        2
        /*return*/
      ];
    }));
  }));
}
function ls(t, r2) {
  return __awaiter2(this, void 0, void 0, (function() {
    return __generator2(this, (function(e) {
      return hs(t), // If we still need the watch stream, retry the connection.
      as(t) ? (t.th.Qu(r2), us(t)) : (
        // No need to restart watch stream because there are no active targets.
        // The online state is set to unknown because there is no active attempt
        // at establishing a connection
        t.th.set(
          "Unknown"
          /* Unknown */
        )
      ), [
        2
        /*return*/
      ];
    }));
  }));
}
function ps(t, r2, i2) {
  return __awaiter2(this, void 0, void 0, (function() {
    var o, s, u2;
    return __generator2(this, (function(a) {
      switch (a.label) {
        case 0:
          if (t.th.set(
            "Online"
            /* Online */
          ), !(r2 instanceof ee && 2 === r2.state && r2.cause))
            return [3, 6];
          a.label = 1;
        case 1:
          return a.trys.push([1, 3, , 5]), [
            4,
            /** Handles an error on a target */
            (function(t2, r3) {
              return __awaiter2(this, void 0, void 0, (function() {
                var e, i3, o2, s2;
                return __generator2(this, (function(n2) {
                  switch (n2.label) {
                    case 0:
                      e = r3.cause, i3 = 0, o2 = r3.targetIds, n2.label = 1;
                    case 1:
                      return i3 < o2.length ? (s2 = o2[i3], t2.Hu.has(s2) ? [4, t2.Gu.nh(s2, e)] : [3, 3]) : [3, 5];
                    case 2:
                      n2.sent(), t2.Hu.delete(s2), t2.eh.removeTarget(s2), n2.label = 3;
                    case 3:
                      n2.label = 4;
                    case 4:
                      return i3++, [3, 1];
                    case 5:
                      return [
                        2
                        /*return*/
                      ];
                  }
                }));
              }));
            })(t, r2)
          ];
        case 2:
          return a.sent(), [3, 5];
        case 3:
          return o = a.sent(), T2("RemoteStore", "Failed to remove targets %s: %s ", r2.targetIds.join(","), o), [4, ds(t, o)];
        case 4:
          return a.sent(), [3, 5];
        case 5:
          return [3, 13];
        case 6:
          if (r2 instanceof Zt ? t.eh.be(r2) : r2 instanceof te ? t.eh.$e(r2) : t.eh.De(r2), i2.isEqual(gt.min())) return [3, 13];
          a.label = 7;
        case 7:
          return a.trys.push([7, 11, , 13]), [4, Lo(t.ju)];
        case 8:
          return s = a.sent(), i2.L(s) >= 0 ? [
            4,
            /**
             * Takes a batch of changes from the Datastore, repackages them as a
             * RemoteEvent, and passes that on to the listener, which is typically the
             * SyncEngine.
             */
            (function(t2, e) {
              var n2 = t2.eh.Oe(e);
              return n2.zt.forEach((function(n3, r3) {
                if (n3.resumeToken.O() > 0) {
                  var i3 = t2.Hu.get(r3);
                  i3 && t2.Hu.set(r3, i3.it(n3.resumeToken, e));
                }
              })), // Re-establish listens for the targets that have been invalidated by
              // existence filter mismatches.
              n2.Ht.forEach((function(e2) {
                var n3 = t2.Hu.get(e2);
                if (n3) {
                  t2.Hu.set(e2, n3.it(ct.B, n3.nt)), // Cause a hard reset by unwatching and rewatching immediately, but
                  // deliberately don't send a resume token so that we get a full update.
                  ss(t2, e2);
                  var r3 = new kt(n3.target, e2, 1, n3.sequenceNumber);
                  os(t2, r3);
                }
              })), t2.Gu.sh(n2);
            })(t, i2)
          ] : [3, 10];
        // We have received a target change with a global snapshot if the snapshot
        // version is not equal to SnapshotVersion.min().
        case 9:
          a.sent(), a.label = 10;
        case 10:
          return [3, 13];
        case 11:
          return T2("RemoteStore", "Failed to raise snapshot:", u2 = a.sent()), [4, ds(t, u2)];
        case 12:
          return a.sent(), [3, 13];
        case 13:
          return [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function ds(t, r2, i2) {
  return __awaiter2(this, void 0, void 0, (function() {
    var o = this;
    return __generator2(this, (function(s) {
      switch (s.label) {
        case 0:
          if (!Rr(r2)) throw r2;
          return t.Yu.add(
            1
            /* IndexedDbFailed */
          ), [4, es(t)];
        case 1:
          return s.sent(), t.th.set(
            "Offline"
            /* Offline */
          ), i2 || // Use a simple read operation to determine if IndexedDB recovered.
          // Ideally, we would expose a health check directly on SimpleDb, but
          // RemoteStore only has access to persistence through LocalStore.
          (i2 = function() {
            return Lo(t.ju);
          }), // Probe IndexedDB periodically and re-enable network
          t.cs.Cs((function() {
            return __awaiter2(o, void 0, void 0, (function() {
              return __generator2(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return T2("RemoteStore", "Retrying IndexedDB access"), [4, i2()];
                  case 1:
                    return e.sent(), t.Yu.delete(
                      1
                      /* IndexedDbFailed */
                    ), [4, ts(t)];
                  case 2:
                    return e.sent(), [
                      2
                      /*return*/
                    ];
                }
              }));
            }));
          })), [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function vs(t, e) {
  return e().catch((function(n2) {
    return ds(t, n2, e);
  }));
}
function ys(t) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, r2, i2, o, s;
    return __generator2(this, (function(n2) {
      switch (n2.label) {
        case 0:
          e = x2(t), r2 = Ns(e), i2 = e.zu.length > 0 ? e.zu[e.zu.length - 1].batchId : -1, n2.label = 1;
        case 1:
          if (!/**
          * Returns true if we can add to the write pipeline (i.e. the network is
          * enabled and the write pipeline is not full).
          */
          (function(t2) {
            return cs(t2) && t2.zu.length < 10;
          })(e)) return [3, 7];
          n2.label = 2;
        case 2:
          return n2.trys.push([2, 4, , 6]), [4, Oo(e.ju, i2)];
        case 3:
          return null === (o = n2.sent()) ? (0 === e.zu.length && r2._u(), [3, 7]) : (i2 = o.batchId, (function(t2, e2) {
            t2.zu.push(e2);
            var n3 = Ns(t2);
            n3.uu() && n3.vu && n3.Su(e2.mutations);
          })(e, o), [3, 6]);
        case 4:
          return s = n2.sent(), [4, ds(e, s)];
        case 5:
          return n2.sent(), [3, 6];
        case 6:
          return [3, 1];
        case 7:
          return ms(e) && gs(e), [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function ms(t) {
  return cs(t) && !Ns(t).cu() && t.zu.length > 0;
}
function gs(t) {
  Ns(t).start();
}
function ws(t) {
  return __awaiter2(this, void 0, void 0, (function() {
    return __generator2(this, (function(e) {
      return Ns(t).Nu(), [
        2
        /*return*/
      ];
    }));
  }));
}
function bs(t) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, r2, i2, o;
    return __generator2(this, (function(n2) {
      for (e = Ns(t), r2 = 0, i2 = t.zu; r2 < i2.length; r2++) o = i2[r2], e.Su(o.mutations);
      return [
        2
        /*return*/
      ];
    }));
  }));
}
function Is(t, r2, i2) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, o;
    return __generator2(this, (function(n2) {
      switch (n2.label) {
        case 0:
          return e = t.zu.shift(), o = hi.from(e, r2, i2), [4, vs(t, (function() {
            return t.Gu.ih(o);
          }))];
        case 1:
          return n2.sent(), [4, ys(t)];
        case 2:
          return n2.sent(), [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function Es(t, r2) {
  return __awaiter2(this, void 0, void 0, (function() {
    return __generator2(this, (function(i2) {
      switch (i2.label) {
        case 0:
          return r2 && Ns(t).vu ? [4, (function(t2, r3) {
            return __awaiter2(this, void 0, void 0, (function() {
              var e, i3;
              return __generator2(this, (function(n2) {
                switch (n2.label) {
                  case 0:
                    return Lt(i3 = r3.code) && i3 !== b.ABORTED ? (e = t2.zu.shift(), // In this case it's also unlikely that the server itself is melting
                    // down -- this was just a bad request so inhibit backoff on the next
                    // restart.
                    Ns(t2).lu(), [4, vs(t2, (function() {
                      return t2.Gu.rh(e.batchId, r3);
                    }))]) : [3, 3];
                  case 1:
                    return n2.sent(), [4, ys(t2)];
                  case 2:
                    n2.sent(), n2.label = 3;
                  case 3:
                    return [
                      2
                      /*return*/
                    ];
                }
              }));
            }));
          })(t, r2)] : [3, 2];
        // This error affects the actual write.
        case 1:
          i2.sent(), i2.label = 2;
        case 2:
          return ms(t) && gs(t), [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function _s(t, r2) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, i2;
    return __generator2(this, (function(n2) {
      switch (n2.label) {
        case 0:
          return e = x2(t), r2 ? (e.Yu.delete(
            2
            /* IsSecondary */
          ), [4, ts(e)]) : [3, 2];
        case 1:
          return n2.sent(), [3, 5];
        case 2:
          return (i2 = r2) ? [3, 4] : (e.Yu.add(
            2
            /* IsSecondary */
          ), [4, es(e)]);
        case 3:
          n2.sent(), i2 = e.th.set(
            "Unknown"
            /* Unknown */
          ), n2.label = 4;
        case 4:
          i2, n2.label = 5;
        case 5:
          return [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function Ts(t) {
  var r2 = this;
  return t.oh || // Create stream (but note that it is not started yet).
  (t.oh = (function(t2, e, n2) {
    var r3 = x2(t2);
    return r3.xu(), new Yo(e, r3.iu, r3.credentials, r3.serializer, n2);
  })(t.Ku, t.cs, {
    gu: fs.bind(null, t),
    Tu: ls.bind(null, t),
    yu: ps.bind(null, t)
  }), t.Ju.push((function(i2) {
    return __awaiter2(r2, void 0, void 0, (function() {
      return __generator2(this, (function(e) {
        switch (e.label) {
          case 0:
            return i2 ? (t.oh.lu(), as(t) ? us(t) : t.th.set(
              "Unknown"
              /* Unknown */
            ), [3, 3]) : [3, 1];
          case 1:
            return [4, t.oh.stop()];
          case 2:
            e.sent(), hs(t), e.label = 3;
          case 3:
            return [
              2
              /*return*/
            ];
        }
      }));
    }));
  }))), t.oh;
}
function Ns(t) {
  var r2 = this;
  return t.ah || // Create stream (but note that it is not started yet).
  (t.ah = (function(t2, e, n2) {
    var r3 = x2(t2);
    return r3.xu(), new $o(e, r3.iu, r3.credentials, r3.serializer, n2);
  })(t.Ku, t.cs, {
    gu: ws.bind(null, t),
    Tu: Es.bind(null, t),
    Cu: bs.bind(null, t),
    Du: Is.bind(null, t)
  }), t.Ju.push((function(i2) {
    return __awaiter2(r2, void 0, void 0, (function() {
      return __generator2(this, (function(e) {
        switch (e.label) {
          case 0:
            return i2 ? (t.ah.lu(), [4, ys(t)]) : [3, 2];
          case 1:
            return e.sent(), [3, 4];
          case 2:
            return [4, t.ah.stop()];
          case 3:
            e.sent(), t.zu.length > 0 && (T2("RemoteStore", "Stopping write stream with " + t.zu.length + " pending writes"), t.zu = []), e.label = 4;
          case 4:
            return [
              2
              /*return*/
            ];
        }
      }));
    }));
  }))), t.ah;
}
var As = function(t) {
  this.key = t;
};
var Ss = function(t) {
  this.key = t;
};
var Ds = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.query = t2, this.uh = e, this.hh = null, /**
           * A flag whether the view is current with the backend. A view is considered
           * current after it has seen the current flag from the backend and did not
           * lose consistency within the watch stream (e.g. because of an existence
           * filter mismatch).
           */
      this.te = false, /** Documents in the view but not in the remote target */
      this.lh = Kt(), /** Document Keys that have local changes */
      this.Wt = Kt(), this._h = cr(t2), this.fh = new Ht(this._h);
    }
    return Object.defineProperty(t.prototype, "dh", {
      /**
       * The set of remote documents that the server has told us belongs to the target associated with
       * this view.
       */
      get: function() {
        return this.uh;
      },
      enumerable: false,
      configurable: true
    }), /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges The doc changes to apply to this view.
     * @param previousChanges If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @return a new set of docs, changes, and refill flag.
     */
    t.prototype.wh = function(t2, e) {
      var n2 = this, r2 = e ? e.mh : new Yt(), i2 = e ? e.fh : this.fh, o = e ? e.Wt : this.Wt, s = i2, u2 = false, a = Yn(this.query) && i2.size === this.query.limit ? i2.last() : null, c = $n(this.query) && i2.size === this.query.limit ? i2.first() : null;
      if (t2.ht((function(t3, e2) {
        var h2 = i2.get(t3), f = e2 instanceof zn ? e2 : null;
        f && (f = ar(n2.query, f) ? f : null);
        var l = !!h2 && n2.Wt.has(h2.key), p2 = !!f && (f.Je || // We only consider committed mutations for documents that were
        // mutated during the lifetime of the view.
        n2.Wt.has(f.key) && f.hasCommittedMutations), d = false;
        h2 && f ? h2.data().isEqual(f.data()) ? l !== p2 && (r2.track({
          type: 3,
          doc: f
        }), d = true) : n2.Th(h2, f) || (r2.track({
          type: 2,
          doc: f
        }), d = true, (a && n2._h(f, a) > 0 || c && n2._h(f, c) < 0) && // This doc moved from inside the limit to outside the limit.
        // That means there may be some other doc in the local cache
        // that should be included instead.
        (u2 = true)) : !h2 && f ? (r2.track({
          type: 0,
          doc: f
        }), d = true) : h2 && !f && (r2.track({
          type: 1,
          doc: h2
        }), d = true, (a || c) && // A doc was removed from a full limit query. We'll need to
        // requery from the local cache to see if we know about some other
        // doc that should be in the results.
        (u2 = true)), d && (f ? (s = s.add(f), o = p2 ? o.add(t3) : o.delete(t3)) : (s = s.delete(t3), o = o.delete(t3)));
      })), Yn(this.query) || $n(this.query)) for (; s.size > this.query.limit; ) {
        var h = Yn(this.query) ? s.last() : s.first();
        s = s.delete(h.key), o = o.delete(h.key), r2.track({
          type: 1,
          doc: h
        });
      }
      return {
        fh: s,
        mh: r2,
        Eh: u2,
        Wt: o
      };
    }, t.prototype.Th = function(t2, e) {
      return t2.Je && e.hasCommittedMutations && !e.Je;
    }, /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges The set of changes to make to the view's docs.
     * @param updateLimboDocuments Whether to update limbo documents based on this
     *        change.
     * @param targetChange A target change to apply for computing limbo docs and
     *        sync state.
     * @return A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    t.prototype.yr = function(t2, e, n2) {
      var r2 = this, i2 = this.fh;
      this.fh = t2.fh, this.Wt = t2.Wt;
      var o = t2.mh.Ut();
      o.sort((function(t3, e2) {
        return (function(t4, e3) {
          var n3 = function(t5) {
            switch (t5) {
              case 0:
                return 1;
              case 2:
              case 3:
                return 2;
              case 1:
                return 0;
              default:
                return D2();
            }
          };
          return n3(t4) - n3(e3);
        })(t3.type, e2.type) || r2._h(t3.doc, e2.doc);
      })), this.Ih(n2);
      var s = e ? this.Ah() : [], u2 = 0 === this.lh.size && this.te ? 1 : 0, a = u2 !== this.hh;
      return this.hh = u2, 0 !== o.length || a ? {
        snapshot: new $t(
          this.query,
          t2.fh,
          i2,
          o,
          t2.Wt,
          0 === u2,
          a,
          /* excludesMetadataChanges= */
          false
        ),
        Rh: s
      } : {
        Rh: s
      };
    }, /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */
    t.prototype.Qs = function(t2) {
      return this.te && "Offline" === t2 ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        (this.te = false, this.yr(
          {
            fh: this.fh,
            mh: new Yt(),
            Wt: this.Wt,
            Eh: false
          },
          /* updateLimboDocuments= */
          false
        ))
      ) : {
        Rh: []
      };
    }, /**
     * Returns whether the doc for the given key should be in limbo.
     */
    t.prototype.gh = function(t2) {
      return !this.uh.has(t2) && // The local store doesn't think it's a result, so it shouldn't be in limbo.
      !!this.fh.has(t2) && !this.fh.get(t2).Je;
    }, /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    t.prototype.Ih = function(t2) {
      var e = this;
      t2 && (t2.ee.forEach((function(t3) {
        return e.uh = e.uh.add(t3);
      })), t2.ne.forEach((function(t3) {
      })), t2.se.forEach((function(t3) {
        return e.uh = e.uh.delete(t3);
      })), this.te = t2.te);
    }, t.prototype.Ah = function() {
      var t2 = this;
      if (!this.te) return [];
      var e = this.lh;
      this.lh = Kt(), this.fh.forEach((function(e2) {
        t2.gh(e2.key) && (t2.lh = t2.lh.add(e2.key));
      }));
      var n2 = [];
      return e.forEach((function(e2) {
        t2.lh.has(e2) || n2.push(new Ss(e2));
      })), this.lh.forEach((function(t3) {
        e.has(t3) || n2.push(new As(t3));
      })), n2;
    }, /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @return The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Ph = function(t2) {
      this.uh = t2.Fc, this.lh = Kt();
      var e = this.wh(t2.documents);
      return this.yr(
        e,
        /*updateLimboDocuments=*/
        true
      );
    }, /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.yh = function() {
      return $t.Gt(this.query, this.fh, this.Wt, 0 === this.hh);
    }, t;
  })()
);
var ks = function(t, e, n2) {
  this.query = t, this.targetId = e, this.view = n2;
};
var xs = function(t) {
  this.key = t, /**
           * Set to true once we've received a document. This is used in
           * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
           * decide whether it needs to manufacture a delete event for the target once
           * the target is CURRENT.
           */
  this.Vh = false;
};
var Ls = (
  /** @class */
  (function() {
    function t(t2, e, n2, r2, i2, o) {
      this.ju = t2, this.ph = e, this.bh = n2, this.Sh = r2, this.currentUser = i2, this.Dh = o, this.Ch = {}, this.Nh = new yt((function(t3) {
        return sr(t3);
      }), or), this.Fh = /* @__PURE__ */ new Map(), /**
           * The keys of documents that are in limbo for which we haven't yet started a
           * limbo resolution query.
           */
      this.xh = [], /**
           * Keeps track of the target ID for each document that is in limbo with an
           * active target.
           */
      this.$h = new Ot(F2.i), /**
           * Keeps track of the information about an active limbo resolution for each
           * active target ID that was started for the purpose of limbo resolution.
           */
      this.kh = /* @__PURE__ */ new Map(), this.Mh = new jo(), /** Stores user completion handlers, indexed by User and BatchId. */
      this.Oh = {}, /** Stores user callbacks waiting for all pending writes to be acknowledged. */
      this.Lh = /* @__PURE__ */ new Map(), this.Bh = yo.da(), this.onlineState = "Unknown", // The primary state is set to `true` or `false` immediately after Firestore
      // startup. In the interim, a client should only be considered primary if
      // `isPrimary` is true.
      this.qh = void 0;
    }
    return Object.defineProperty(t.prototype, "Uh", {
      get: function() {
        return true === this.qh;
      },
      enumerable: false,
      configurable: true
    }), t;
  })()
);
function Rs(t, r2) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, i2, o, s, u2, a;
    return __generator2(this, (function(n2) {
      switch (n2.label) {
        case 0:
          return e = iu(t), (s = e.Nh.get(r2)) ? (
            // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
            // already exists when EventManager calls us for the first time. This
            // happens when the primary tab is already listening to this query on
            // behalf of another tab and the user of the primary also starts listening
            // to the query. EventManager will not have an assigned target ID in this
            // case and calls `listen` to obtain this ID.
            (i2 = s.targetId, e.Sh.Oi(i2), o = s.view.yh(), [3, 4])
          ) : [3, 1];
        case 1:
          return [4, Po(e.ju, er(r2))];
        case 2:
          return u2 = n2.sent(), a = e.Sh.Oi(u2.targetId), i2 = u2.targetId, [4, Os(e, r2, i2, "current" === a)];
        case 3:
          o = n2.sent(), e.Uh && rs(e.ph, u2), n2.label = 4;
        case 4:
          return [2, o];
      }
    }));
  }));
}
function Os(t, r2, i2, o) {
  return __awaiter2(this, void 0, void 0, (function() {
    var s, u2, a, c, h, f;
    return __generator2(this, (function(l) {
      switch (l.label) {
        case 0:
          return t.Qh = function(r3, i3, o2) {
            return (function(t2, r4, i4, o3) {
              return __awaiter2(this, void 0, void 0, (function() {
                var e, s2, u3;
                return __generator2(this, (function(n2) {
                  switch (n2.label) {
                    case 0:
                      return e = r4.view.wh(i4), e.Eh ? [4, Uo(
                        t2.ju,
                        r4.query,
                        /* usePreviousResults= */
                        false
                      ).then((function(t3) {
                        var n3 = t3.documents;
                        return r4.view.wh(n3, e);
                      }))] : [3, 2];
                    case 1:
                      e = n2.sent(), n2.label = 2;
                    case 2:
                      return s2 = o3 && o3.zt.get(r4.targetId), u3 = r4.view.yr(
                        e,
                        /* updateLimboDocuments= */
                        t2.Uh,
                        s2
                      ), [2, (Bs(t2, r4.targetId, u3.Rh), u3.snapshot)];
                  }
                }));
              }));
            })(t, r3, i3, o2);
          }, [4, Uo(
            t.ju,
            r2,
            /* usePreviousResults= */
            true
          )];
        case 1:
          return s = l.sent(), u2 = new Ds(r2, s.Fc), a = u2.wh(s.documents), c = Jt.Zt(i2, o && "Offline" !== t.onlineState), h = u2.yr(
            a,
            /* updateLimboDocuments= */
            t.Uh,
            c
          ), Bs(t, i2, h.Rh), f = new ks(r2, i2, u2), [2, (t.Nh.set(r2, f), t.Fh.has(i2) ? t.Fh.get(i2).push(r2) : t.Fh.set(i2, [r2]), h.snapshot)];
      }
    }));
  }));
}
function Ps(t, r2) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, i2, o;
    return __generator2(this, (function(n2) {
      switch (n2.label) {
        case 0:
          return e = x2(t), i2 = e.Nh.get(r2), (o = e.Fh.get(i2.targetId)).length > 1 ? [2, (e.Fh.set(i2.targetId, o.filter((function(t2) {
            return !or(t2, r2);
          }))), void e.Nh.delete(r2))] : e.Uh ? (
            // We need to remove the local query target first to allow us to verify
            // whether any other client is still interested in this target.
            (e.Sh.Bi(i2.targetId), e.Sh.Fi(i2.targetId) ? [3, 2] : [4, Vo(
              e.ju,
              i2.targetId,
              /*keepPersistedTargetData=*/
              false
            ).then((function() {
              e.Sh.Ui(i2.targetId), is(e.ph, i2.targetId), Gs(e, i2.targetId);
            })).catch(qo)])
          ) : [3, 3];
        case 1:
          n2.sent(), n2.label = 2;
        case 2:
          return [3, 5];
        case 3:
          return Gs(e, i2.targetId), [4, Vo(
            e.ju,
            i2.targetId,
            /*keepPersistedTargetData=*/
            true
          )];
        case 4:
          n2.sent(), n2.label = 5;
        case 5:
          return [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function Vs(t, r2) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, i2;
    return __generator2(this, (function(n2) {
      switch (n2.label) {
        case 0:
          e = x2(t), n2.label = 1;
        case 1:
          return n2.trys.push([1, 4, , 6]), [4, Ro(e.ju, r2)];
        case 2:
          return i2 = n2.sent(), // Update `receivedDocument` as appropriate for any limbo targets.
          r2.zt.forEach((function(t2, n3) {
            var r3 = e.kh.get(n3);
            r3 && // Since this is a limbo resolution lookup, it's for a single document
            // and it could be added, modified, or removed, but not a combination.
            (k2(t2.ee.size + t2.ne.size + t2.se.size <= 1), t2.ee.size > 0 ? r3.Vh = true : t2.ne.size > 0 ? k2(r3.Vh) : t2.se.size > 0 && (k2(r3.Vh), r3.Vh = false));
          })), [4, Qs(e, i2, r2)];
        case 3:
          return n2.sent(), [3, 6];
        case 4:
          return [4, qo(n2.sent())];
        case 5:
          return n2.sent(), [3, 6];
        case 6:
          return [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function Us(t, e, n2) {
  var r2 = x2(t);
  if (r2.Uh && 0 === n2 || !r2.Uh && 1 === n2) {
    var i2 = [];
    r2.Nh.forEach((function(t2, n3) {
      var r3 = n3.view.Qs(e);
      r3.snapshot && i2.push(r3.snapshot);
    })), (function(t2, e2) {
      var n3 = x2(t2);
      n3.onlineState = e2;
      var r3 = false;
      n3.Bs.forEach((function(t3, n4) {
        for (var i3 = 0, o = n4.listeners; i3 < o.length; i3++) {
          o[i3].Qs(e2) && (r3 = true);
        }
      })), r3 && Yr(n3);
    })(r2.bh, e), i2.length && r2.Ch.yu(i2), r2.onlineState = e, r2.Uh && r2.Sh.Ki(e);
  }
}
function Cs(t, r2, i2) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, o, s, u2, a, c;
    return __generator2(this, (function(n2) {
      switch (n2.label) {
        case 0:
          return (e = x2(t)).Sh.Qi(r2, "rejected", i2), o = e.kh.get(r2), (s = o && o.key) ? (u2 = (u2 = new Ot(F2.i)).ot(s, new Bn(s, gt.min())), a = Kt().add(s), c = new Xt(
            gt.min(),
            /* targetChanges= */
            /* @__PURE__ */ new Map(),
            /* targetMismatches= */
            new Ut(st),
            u2,
            a
          ), [4, Vs(e, c)]) : [3, 2];
        case 1:
          return n2.sent(), // Since this query failed, we won't want to manually unlisten to it.
          // We only remove it from bookkeeping after we successfully applied the
          // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
          // this query when the RemoteStore restarts the Watch stream, which should
          // re-trigger the target failure.
          e.$h = e.$h.remove(s), e.kh.delete(r2), Ws(e), [3, 4];
        case 2:
          return [4, Vo(
            e.ju,
            r2,
            /* keepPersistedTargetData */
            false
          ).then((function() {
            return Gs(e, r2, i2);
          })).catch(qo)];
        case 3:
          n2.sent(), n2.label = 4;
        case 4:
          return [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function Fs(t, r2) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, i2, o;
    return __generator2(this, (function(n2) {
      switch (n2.label) {
        case 0:
          e = x2(t), i2 = r2.batch.batchId, n2.label = 1;
        case 1:
          return n2.trys.push([1, 4, , 6]), [4, xo(e.ju, r2)];
        case 2:
          return o = n2.sent(), // The local store may or may not be able to apply the write result and
          // raise events immediately (depending on whether the watcher is caught
          // up), so we raise user callbacks first so that they consistently happen
          // before listen events.
          js(
            e,
            i2,
            /*error=*/
            null
          ), qs(e, i2), e.Sh.ki(i2, "acknowledged"), [4, Qs(e, o)];
        case 3:
          return n2.sent(), [3, 6];
        case 4:
          return [4, qo(n2.sent())];
        case 5:
          return n2.sent(), [3, 6];
        case 6:
          return [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function Ms(t, r2, i2) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, o;
    return __generator2(this, (function(n2) {
      switch (n2.label) {
        case 0:
          e = x2(t), n2.label = 1;
        case 1:
          return n2.trys.push([1, 4, , 6]), [4, (function(t2, e2) {
            var n3 = x2(t2);
            return n3.persistence.runTransaction("Reject batch", "readwrite-primary", (function(t3) {
              var r3;
              return n3.Sr.Oo(t3, e2).next((function(e3) {
                return k2(null !== e3), r3 = e3.keys(), n3.Sr.Wo(t3, e3);
              })).next((function() {
                return n3.Sr.zo(t3);
              })).next((function() {
                return n3.Cc.kr(t3, r3);
              }));
            }));
          })(e.ju, r2)];
        case 2:
          return o = n2.sent(), // The local store may or may not be able to apply the write result and
          // raise events immediately (depending on whether the watcher is caught up),
          // so we raise user callbacks first so that they consistently happen before
          // listen events.
          js(e, r2, i2), qs(e, r2), e.Sh.ki(r2, "rejected", i2), [4, Qs(e, o)];
        case 3:
          return n2.sent(), [3, 6];
        case 4:
          return [4, qo(n2.sent())];
        case 5:
          return n2.sent(), [3, 6];
        case 6:
          return [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function qs(t, e) {
  (t.Lh.get(e) || []).forEach((function(t2) {
    t2.resolve();
  })), t.Lh.delete(e);
}
function js(t, e, n2) {
  var r2 = x2(t), i2 = r2.Oh[r2.currentUser.ti()];
  if (i2) {
    var o = i2.get(e);
    o && (n2 ? o.reject(n2) : o.resolve(), i2 = i2.remove(e)), r2.Oh[r2.currentUser.ti()] = i2;
  }
}
function Gs(t, e, n2) {
  void 0 === n2 && (n2 = null), t.Sh.Bi(e);
  for (var r2 = 0, i2 = t.Fh.get(e); r2 < i2.length; r2++) {
    var o = i2[r2];
    t.Nh.delete(o), n2 && t.Ch.Wh(o, n2);
  }
  t.Fh.delete(e), t.Uh && t.Mh.Uc(e).forEach((function(e2) {
    t.Mh.Ho(e2) || // We removed the last reference for this key
    zs(t, e2);
  }));
}
function zs(t, e) {
  var n2 = t.$h.get(e);
  null !== n2 && (is(t.ph, n2), t.$h = t.$h.remove(e), t.kh.delete(n2), Ws(t));
}
function Bs(t, e, n2) {
  for (var r2 = 0, i2 = n2; r2 < i2.length; r2++) {
    var o = i2[r2];
    o instanceof As ? (t.Mh.Da(o.key, e), Ks(t, o)) : o instanceof Ss ? (T2("SyncEngine", "Document no longer in limbo: " + o.key), t.Mh.Na(o.key, e), t.Mh.Ho(o.key) || // We removed the last reference for this key
    zs(t, o.key)) : D2();
  }
}
function Ks(t, e) {
  var n2 = e.key;
  t.$h.get(n2) || (T2("SyncEngine", "New document in limbo: " + n2), t.xh.push(n2), Ws(t));
}
function Ws(t) {
  for (; t.xh.length > 0 && t.$h.size < t.Dh; ) {
    var e = t.xh.shift(), n2 = t.Bh.next();
    t.kh.set(n2, new xs(e)), t.$h = t.$h.ot(e, n2), rs(t.ph, new kt(er(Hn(e.path)), n2, 2, Jr.ai));
  }
}
function Qs(t, r2, i2) {
  return __awaiter2(this, void 0, void 0, (function() {
    var o, s, u2, a;
    return __generator2(this, (function(c) {
      switch (c.label) {
        case 0:
          return o = x2(t), s = [], u2 = [], a = [], o.Nh.m() ? [3, 3] : (o.Nh.forEach((function(t2, e) {
            a.push(o.Qh(e, r2, i2).then((function(t3) {
              if (t3) {
                o.Uh && o.Sh.Qi(e.targetId, t3.fromCache ? "not-current" : "current"), s.push(t3);
                var n2 = vi.zr(e.targetId, t3);
                u2.push(n2);
              }
            })));
          })), [4, Promise.all(a)]);
        case 1:
          return c.sent(), o.Ch.yu(s), [4, (function(t2, r3) {
            return __awaiter2(this, void 0, void 0, (function() {
              var e, i3, o2, s2, u3, a2, c2, h, f;
              return __generator2(this, (function(n2) {
                switch (n2.label) {
                  case 0:
                    e = x2(t2), n2.label = 1;
                  case 1:
                    return n2.trys.push([1, 3, , 4]), [4, e.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(t3) {
                      return Dr.forEach(r3, (function(n3) {
                        return Dr.forEach(n3.Kr, (function(r4) {
                          return e.persistence.No.Da(t3, n3.targetId, r4);
                        })).next((function() {
                          return Dr.forEach(n3.Gr, (function(r4) {
                            return e.persistence.No.Na(t3, n3.targetId, r4);
                          }));
                        }));
                      }));
                    }))];
                  case 2:
                    return n2.sent(), [3, 4];
                  case 3:
                    if (!Rr(i3 = n2.sent())) throw i3;
                    return T2("LocalStore", "Failed to update sequence numbers: " + i3), [3, 4];
                  case 4:
                    for (o2 = 0, s2 = r3; o2 < s2.length; o2++) u3 = s2[o2], a2 = u3.targetId, u3.fromCache || (c2 = e.bc.get(a2), h = c2.nt, f = c2.rt(h), // Advance the last limbo free snapshot version
                    e.bc = e.bc.ot(a2, f));
                    return [
                      2
                      /*return*/
                    ];
                }
              }));
            }));
          })(o.ju, u2)];
        case 2:
          c.sent(), c.label = 3;
        case 3:
          return [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function Hs(t, r2) {
  return __awaiter2(this, void 0, void 0, (function() {
    var i2, o;
    return __generator2(this, (function(s) {
      switch (s.label) {
        case 0:
          return (i2 = x2(t)).currentUser.isEqual(r2) ? [3, 3] : (T2("SyncEngine", "User change. New user:", r2.ti()), [
            4,
            /**
             * Tells the LocalStore that the currently authenticated user has changed.
             *
             * In response the local store switches the mutation queue to the new user and
             * returns any resulting document changes.
             */
            // PORTING NOTE: Android and iOS only return the documents affected by the
            // change.
            (function(t2, r3) {
              return __awaiter2(this, void 0, void 0, (function() {
                var e, i3, o2, s2;
                return __generator2(this, (function(n2) {
                  switch (n2.label) {
                    case 0:
                      return e = x2(t2), i3 = e.Sr, o2 = e.Cc, [4, e.persistence.runTransaction("Handle user change", "readonly", (function(t3) {
                        var n3;
                        return e.Sr.Uo(t3).next((function(s3) {
                          return n3 = s3, i3 = e.persistence.mc(r3), // Recreate our LocalDocumentsView using the new
                          // MutationQueue.
                          o2 = new di(e.Dc, i3, e.persistence.Ic()), i3.Uo(t3);
                        })).next((function(e2) {
                          for (var r4 = [], i4 = [], s3 = Kt(), u2 = 0, a = n3; u2 < a.length; u2++) {
                            var c = a[u2];
                            r4.push(c.batchId);
                            for (var h = 0, f = c.mutations; h < f.length; h++) {
                              var l = f[h];
                              s3 = s3.add(l.key);
                            }
                          }
                          for (var p2 = 0, d = e2; p2 < d.length; p2++) {
                            var v2 = d[p2];
                            i4.push(v2.batchId);
                            for (var y2 = 0, m = v2.mutations; y2 < m.length; y2++) {
                              var g2 = m[y2];
                              s3 = s3.add(g2.key);
                            }
                          }
                          return o2.kr(t3, s3).next((function(t4) {
                            return {
                              jh: t4,
                              Kh: r4,
                              Gh: i4
                            };
                          }));
                        }));
                      }))];
                    case 1:
                      return s2 = n2.sent(), [2, (e.Sr = i3, e.Cc = o2, e.Vc.Nc(e.Cc), s2)];
                  }
                }));
              }));
            })(i2.ju, r2)
          ]);
        case 1:
          return o = s.sent(), i2.currentUser = r2, // Fails tasks waiting for pending writes requested by previous user.
          (function(t2, e) {
            t2.Lh.forEach((function(t3) {
              t3.forEach((function(t4) {
                t4.reject(new I2(b.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."));
              }));
            })), t2.Lh.clear();
          })(i2), // TODO(b/114226417): Consider calling this only in the primary tab.
          i2.Sh.ji(r2, o.Kh, o.Gh), [4, Qs(i2, o.jh)];
        case 2:
          s.sent(), s.label = 3;
        case 3:
          return [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function Ys(t, e) {
  var n2 = x2(t), r2 = n2.kh.get(e);
  if (r2 && r2.Vh) return Kt().add(r2.key);
  var i2 = Kt(), o = n2.Fh.get(e);
  if (!o) return i2;
  for (var s = 0, u2 = o; s < u2.length; s++) {
    var a = u2[s], c = n2.Nh.get(a);
    i2 = i2.kt(c.view.dh);
  }
  return i2;
}
function $s(t, r2) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, i2, o;
    return __generator2(this, (function(n2) {
      switch (n2.label) {
        case 0:
          return [4, Uo(
            (e = x2(t)).ju,
            r2.query,
            /* usePreviousResults= */
            true
          )];
        case 1:
          return i2 = n2.sent(), o = r2.view.Ph(i2), [2, (e.Uh && Bs(e, r2.targetId, o.Rh), o)];
      }
    }));
  }));
}
function Xs(t, r2, i2, o) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, s;
    return __generator2(this, (function(n2) {
      switch (n2.label) {
        case 0:
          return [4, (function(t2, e2) {
            var n3 = x2(t2), r3 = x2(n3.Sr);
            return n3.persistence.runTransaction("Lookup mutation documents", "readonly", (function(t3) {
              return r3.Lo(t3, e2).next((function(e3) {
                return e3 ? n3.Cc.kr(t3, e3) : Dr.resolve(null);
              }));
            }));
          })((e = x2(t)).ju, r2)];
        case 1:
          return null === (s = n2.sent()) ? [3, 6] : "pending" !== i2 ? [3, 3] : [4, ys(e.ph)];
        case 2:
          return n2.sent(), [3, 4];
        case 3:
          "acknowledged" === i2 || "rejected" === i2 ? (
            // NOTE: Both these methods are no-ops for batches that originated from
            // other clients.
            (js(e, r2, o || null), qs(e, r2), (function(t2, e2) {
              x2(x2(t2).Sr).Ko(e2);
            })(e.ju, r2))
          ) : D2(), n2.label = 4;
        case 4:
          return [4, Qs(e, s)];
        case 5:
          return n2.sent(), [3, 7];
        case 6:
          T2("SyncEngine", "Cannot apply mutation batch with id: " + r2), n2.label = 7;
        case 7:
          return [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function Js(t, r2) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, i2, o, s, u2, a, c, h;
    return __generator2(this, (function(n2) {
      switch (n2.label) {
        case 0:
          return iu(e = x2(t)), ou(e), true !== r2 || true === e.qh ? [3, 3] : (i2 = e.Sh.Ci(), [4, Zs(e, i2.A())]);
        case 1:
          return o = n2.sent(), e.qh = true, [4, _s(e.ph, true)];
        case 2:
          for (n2.sent(), s = 0, u2 = o; s < u2.length; s++) a = u2[s], rs(e.ph, a);
          return [3, 7];
        case 3:
          return false !== r2 || false === e.qh ? [3, 7] : (c = [], h = Promise.resolve(), e.Fh.forEach((function(t2, n3) {
            e.Sh.qi(n3) ? c.push(n3) : h = h.then((function() {
              return Gs(e, n3), Vo(
                e.ju,
                n3,
                /*keepPersistedTargetData=*/
                true
              );
            })), is(e.ph, n3);
          })), [4, h]);
        case 4:
          return n2.sent(), [4, Zs(e, c)];
        case 5:
          return n2.sent(), // PORTING NOTE: Multi-Tab only.
          (function(t2) {
            var e2 = x2(t2);
            e2.kh.forEach((function(t3, n3) {
              is(e2.ph, n3);
            })), e2.Mh.Qc(), e2.kh = /* @__PURE__ */ new Map(), e2.$h = new Ot(F2.i);
          })(e), e.qh = false, [4, _s(e.ph, false)];
        case 6:
          n2.sent(), n2.label = 7;
        case 7:
          return [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function Zs(t, r2, i2) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, i3, o, s, u2, a, c, h, f, l, p2, d, v2, y2;
    return __generator2(this, (function(n2) {
      switch (n2.label) {
        case 0:
          e = x2(t), i3 = [], o = [], s = 0, u2 = r2, n2.label = 1;
        case 1:
          return s < u2.length ? (a = u2[s], c = void 0, (h = e.Fh.get(a)) && 0 !== h.length ? [4, Po(e.ju, er(h[0]))] : [3, 7]) : [3, 13];
        case 2:
          c = n2.sent(), f = 0, l = h, n2.label = 3;
        case 3:
          return f < l.length ? (p2 = l[f], d = e.Nh.get(p2), [4, $s(e, d)]) : [3, 6];
        case 4:
          (v2 = n2.sent()).snapshot && o.push(v2.snapshot), n2.label = 5;
        case 5:
          return f++, [3, 3];
        case 6:
          return [3, 11];
        case 7:
          return [4, Co(e.ju, a)];
        case 8:
          return y2 = n2.sent(), [4, Po(e.ju, y2)];
        case 9:
          return c = n2.sent(), [4, Os(
            e,
            tu(y2),
            a,
            /*current=*/
            false
          )];
        case 10:
          n2.sent(), n2.label = 11;
        case 11:
          i3.push(c), n2.label = 12;
        case 12:
          return s++, [3, 1];
        case 13:
          return [2, (e.Ch.yu(o), i3)];
      }
    }));
  }));
}
function tu(t) {
  return Qn(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F", t.startAt, t.endAt);
}
function eu(t) {
  var e = x2(t);
  return x2(x2(e.ju).persistence).pi();
}
function nu(t, r2, i2, o) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, s, u2;
    return __generator2(this, (function(n2) {
      switch (n2.label) {
        case 0:
          return (e = x2(t)).qh ? (
            // If we receive a target state notification via WebStorage, we are
            // either already secondary or another tab has taken the primary lease.
            (T2("SyncEngine", "Ignoring unexpected query state notification."), [3, 8])
          ) : [3, 1];
        case 1:
          if (!e.Fh.has(r2)) return [3, 8];
          switch (i2) {
            case "current":
            case "not-current":
              return [3, 2];
            case "rejected":
              return [3, 5];
          }
          return [3, 7];
        case 2:
          return [4, Fo(e.ju)];
        case 3:
          return s = n2.sent(), u2 = Xt.Xt(r2, "current" === i2), [4, Qs(e, s, u2)];
        case 4:
          return n2.sent(), [3, 8];
        case 5:
          return [4, Vo(
            e.ju,
            r2,
            /* keepPersistedTargetData */
            true
          )];
        case 6:
          return n2.sent(), Gs(e, r2, o), [3, 8];
        case 7:
          D2(), n2.label = 8;
        case 8:
          return [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function ru(t, r2, i2) {
  return __awaiter2(this, void 0, void 0, (function() {
    var e, o, s, u2, a, c, h, f, l, p2;
    return __generator2(this, (function(d) {
      switch (d.label) {
        case 0:
          if (!(e = iu(t)).qh) return [3, 10];
          o = 0, s = r2, d.label = 1;
        case 1:
          return o < s.length ? (u2 = s[o], e.Fh.has(u2) ? (
            // A target might have been added in a previous attempt
            (T2("SyncEngine", "Adding an already active target " + u2), [3, 5])
          ) : [4, Co(e.ju, u2)]) : [3, 6];
        case 2:
          return a = d.sent(), [4, Po(e.ju, a)];
        case 3:
          return c = d.sent(), [4, Os(
            e,
            tu(a),
            c.targetId,
            /*current=*/
            false
          )];
        case 4:
          d.sent(), rs(e.ph, c), d.label = 5;
        case 5:
          return o++, [3, 1];
        case 6:
          h = function(t2) {
            return __generator2(this, (function(n2) {
              switch (n2.label) {
                case 0:
                  return e.Fh.has(t2) ? [4, Vo(
                    e.ju,
                    t2,
                    /* keepPersistedTargetData */
                    false
                  ).then((function() {
                    is(e.ph, t2), Gs(e, t2);
                  })).catch(qo)] : [3, 2];
                // Release queries that are still active.
                case 1:
                  n2.sent(), n2.label = 2;
                case 2:
                  return [
                    2
                    /*return*/
                  ];
              }
            }));
          }, f = 0, l = i2, d.label = 7;
        case 7:
          return f < l.length ? (p2 = l[f], [5, h(p2)]) : [3, 10];
        case 8:
          d.sent(), d.label = 9;
        case 9:
          return f++, [3, 7];
        case 10:
          return [
            2
            /*return*/
          ];
      }
    }));
  }));
}
function iu(t) {
  var e = x2(t);
  return e.ph.Gu.sh = Vs.bind(null, e), e.ph.Gu.qe = Ys.bind(null, e), e.ph.Gu.nh = Cs.bind(null, e), e.Ch.yu = Qr.bind(null, e.bh), e.Ch.Wh = Hr.bind(null, e.bh), e;
}
function ou(t) {
  var e = x2(t);
  return e.ph.Gu.ih = Fs.bind(null, e), e.ph.Gu.rh = Ms.bind(null, e), e;
}
var su = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.Nc = function(t2) {
      this.zh = t2;
    }, t.prototype.Lr = function(t2, e, n2, r2) {
      var i2 = this;
      return (function(t3) {
        return 0 === t3.filters.length && null === t3.limit && null == t3.startAt && null == t3.endAt && (0 === t3.on.length || 1 === t3.on.length && t3.on[0].field.p());
      })(e) || n2.isEqual(gt.min()) ? this.Hh(t2, e) : this.zh.kr(t2, r2).next((function(o) {
        var u2 = i2.Yh(e, o);
        return (Yn(e) || $n(e)) && i2.Eh(e.an, u2, r2, n2) ? i2.Hh(t2, e) : (_() <= LogLevel.DEBUG && T2("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", n2.toString(), ur(e)), i2.zh.Lr(t2, e, n2).next((function(t3) {
          return u2.forEach((function(e2) {
            t3 = t3.ot(e2.key, e2);
          })), t3;
        })));
      }));
    }, /** Applies the query filter and sorting to the provided documents.  */
    t.prototype.Yh = function(t2, e) {
      var n2 = new Ut(cr(t2));
      return e.forEach((function(e2, r2) {
        r2 instanceof zn && ar(t2, r2) && (n2 = n2.add(r2));
      })), n2;
    }, /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion The version of the snapshot when the query
     * was last synchronized.
     */
    t.prototype.Eh = function(t2, e, n2, r2) {
      if (n2.size !== e.size) return true;
      var i2 = "F" === t2 ? e.last() : e.first();
      return !!i2 && (i2.hasPendingWrites || i2.version.L(r2) > 0);
    }, t.prototype.Hh = function(t2, e) {
      return _() <= LogLevel.DEBUG && T2("IndexFreeQueryEngine", "Using full collection scan to execute query:", ur(e)), this.zh.Lr(t2, e, gt.min());
    }, t;
  })()
);
var uu = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.Dr = t2, this.No = e, /**
           * The set of all mutations that have been sent but not yet been applied to
           * the backend.
           */
      this.Sr = [], /** Next value to use when assigning sequential IDs to each mutation batch. */
      this.Jh = 1, /** An ordered mapping between documents and the mutations batch IDs. */
      this.Xh = new Ut(Go.kc);
    }
    return t.prototype.$o = function(t2) {
      return Dr.resolve(0 === this.Sr.length);
    }, t.prototype.ko = function(t2, e, n2, r2) {
      var i2 = this.Jh;
      this.Jh++, this.Sr.length > 0 && this.Sr[this.Sr.length - 1];
      var o = new ci(i2, e, n2, r2);
      this.Sr.push(o);
      for (var s = 0, u2 = r2; s < u2.length; s++) {
        var a = u2[s];
        this.Xh = this.Xh.add(new Go(a.key, i2)), this.Dr.Mo(t2, a.key.path.h());
      }
      return Dr.resolve(o);
    }, t.prototype.Oo = function(t2, e) {
      return Dr.resolve(this.Zh(e));
    }, t.prototype.Bo = function(t2, e) {
      var n2 = e + 1, r2 = this.tl(n2), i2 = r2 < 0 ? 0 : r2;
      return Dr.resolve(this.Sr.length > i2 ? this.Sr[i2] : null);
    }, t.prototype.qo = function() {
      return Dr.resolve(0 === this.Sr.length ? -1 : this.Jh - 1);
    }, t.prototype.Uo = function(t2) {
      return Dr.resolve(this.Sr.slice());
    }, t.prototype.Nr = function(t2, e) {
      var n2 = this, r2 = new Go(e, 0), i2 = new Go(e, Number.POSITIVE_INFINITY), o = [];
      return this.Xh.Ft([r2, i2], (function(t3) {
        var e2 = n2.Zh(t3.jc);
        o.push(e2);
      })), Dr.resolve(o);
    }, t.prototype.Or = function(t2, e) {
      var n2 = this, r2 = new Ut(st);
      return e.forEach((function(t3) {
        var e2 = new Go(t3, 0), i2 = new Go(t3, Number.POSITIVE_INFINITY);
        n2.Xh.Ft([e2, i2], (function(t4) {
          r2 = r2.add(t4.jc);
        }));
      })), Dr.resolve(this.el(r2));
    }, t.prototype.Wr = function(t2, e) {
      var n2 = e.path, r2 = n2.length + 1, i2 = n2;
      F2.F(i2) || (i2 = i2.child(""));
      var o = new Go(new F2(i2), 0), s = new Ut(st);
      return this.Xh.xt((function(t3) {
        var e2 = t3.key.path;
        return !!n2.T(e2) && // Rows with document keys more than one segment longer than the query
        // path can't be matches. For example, a query on 'rooms' can't match
        // the document /rooms/abc/messages/xyx.
        // TODO(mcg): we'll need a different scanner when we implement
        // ancestor queries.
        (e2.length === r2 && (s = s.add(t3.jc)), true);
      }), o), Dr.resolve(this.el(s));
    }, t.prototype.el = function(t2) {
      var e = this, n2 = [];
      return t2.forEach((function(t3) {
        var r2 = e.Zh(t3);
        null !== r2 && n2.push(r2);
      })), n2;
    }, t.prototype.Wo = function(t2, e) {
      var n2 = this;
      k2(0 === this.nl(e.batchId, "removed")), this.Sr.shift();
      var r2 = this.Xh;
      return Dr.forEach(e.mutations, (function(i2) {
        var o = new Go(i2.key, e.batchId);
        return r2 = r2.delete(o), n2.No.Go(t2, i2.key);
      })).next((function() {
        n2.Xh = r2;
      }));
    }, t.prototype.Ko = function(t2) {
    }, t.prototype.Ho = function(t2, e) {
      var n2 = new Go(e, 0), r2 = this.Xh.$t(n2);
      return Dr.resolve(e.isEqual(r2 && r2.key));
    }, t.prototype.zo = function(t2) {
      return this.Sr.length, Dr.resolve();
    }, /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId The batchId to search for
     * @param action A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    t.prototype.nl = function(t2, e) {
      return this.tl(t2);
    }, /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @return The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    t.prototype.tl = function(t2) {
      return 0 === this.Sr.length ? 0 : t2 - this.Sr[0].batchId;
    }, /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    t.prototype.Zh = function(t2) {
      var e = this.tl(t2);
      return e < 0 || e >= this.Sr.length ? null : this.Sr[e];
    }, t;
  })()
);
var au = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.Dr = t2, this.sl = e, /** Underlying cache of documents and their read times. */
      this.docs = new Ot(F2.i), /** Size of all cached documents. */
      this.size = 0;
    }
    return t.prototype.Er = function(t2, e, n2) {
      var r2 = e.key, i2 = this.docs.get(r2), o = i2 ? i2.size : 0, s = this.sl(e);
      return this.docs = this.docs.ot(r2, {
        ta: e,
        size: s,
        readTime: n2
      }), this.size += s - o, this.Dr.Mo(t2, r2.path.h());
    }, /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    t.prototype.Ar = function(t2) {
      var e = this.docs.get(t2);
      e && (this.docs = this.docs.remove(t2), this.size -= e.size);
    }, t.prototype.Rr = function(t2, e) {
      var n2 = this.docs.get(e);
      return Dr.resolve(n2 ? n2.ta : null);
    }, t.prototype.getEntries = function(t2, e) {
      var n2 = this, r2 = qt();
      return e.forEach((function(t3) {
        var e2 = n2.docs.get(t3);
        r2 = r2.ot(t3, e2 ? e2.ta : null);
      })), Dr.resolve(r2);
    }, t.prototype.Lr = function(t2, e, n2) {
      for (var r2 = Gt(), i2 = new F2(e.path.child("")), o = this.docs.ft(i2); o.At(); ) {
        var s = o.It(), u2 = s.key, a = s.value, c = a.ta, h = a.readTime;
        if (!e.path.T(u2.path)) break;
        h.L(n2) <= 0 || c instanceof zn && ar(e, c) && (r2 = r2.ot(c.key, c));
      }
      return Dr.resolve(r2);
    }, t.prototype.il = function(t2, e) {
      return Dr.forEach(this.docs, (function(t3) {
        return e(t3);
      }));
    }, t.prototype.ra = function(t2) {
      return new cu(this);
    }, t.prototype.aa = function(t2) {
      return Dr.resolve(this.size);
    }, t;
  })()
);
var cu = (
  /** @class */
  (function(e) {
    function n2(t) {
      var n3 = this;
      return (n3 = e.call(this) || this).ca = t, n3;
    }
    return __extends2(n2, e), n2.prototype.yr = function(t) {
      var e2 = this, n3 = [];
      return this.wr.forEach((function(r2, i2) {
        i2 ? n3.push(e2.ca.Er(t, i2, e2.readTime)) : e2.ca.Ar(r2);
      })), Dr.$n(n3);
    }, n2.prototype.gr = function(t, e2) {
      return this.ca.Rr(t, e2);
    }, n2.prototype.Pr = function(t, e2) {
      return this.ca.getEntries(t, e2);
    }, n2;
  })(fi)
);
var hu = (
  /** @class */
  (function() {
    function t(t2) {
      this.persistence = t2, /**
           * Maps a target to the data about that target
           */
      this.rl = new yt((function(t3) {
        return Tt(t3);
      }), Nt), /** The last received snapshot version. */
      this.lastRemoteSnapshotVersion = gt.min(), /** The highest numbered target ID encountered. */
      this.highestTargetId = 0, /** The highest sequence number encountered. */
      this.ol = 0, /**
           * A ordered bidirectional mapping between documents and the remote target
           * IDs.
           */
      this.al = new jo(), this.targetCount = 0, this.cl = yo.fa();
    }
    return t.prototype.Ce = function(t2, e) {
      return this.rl.forEach((function(t3, n2) {
        return e(n2);
      })), Dr.resolve();
    }, t.prototype.Ea = function(t2) {
      return Dr.resolve(this.lastRemoteSnapshotVersion);
    }, t.prototype.Ia = function(t2) {
      return Dr.resolve(this.ol);
    }, t.prototype.wa = function(t2) {
      return this.highestTargetId = this.cl.next(), Dr.resolve(this.highestTargetId);
    }, t.prototype.Aa = function(t2, e, n2) {
      return n2 && (this.lastRemoteSnapshotVersion = n2), e > this.ol && (this.ol = e), Dr.resolve();
    }, t.prototype.ga = function(t2) {
      this.rl.set(t2.target, t2);
      var e = t2.targetId;
      e > this.highestTargetId && (this.cl = new yo(e), this.highestTargetId = e), t2.sequenceNumber > this.ol && (this.ol = t2.sequenceNumber);
    }, t.prototype.Ra = function(t2, e) {
      return this.ga(e), this.targetCount += 1, Dr.resolve();
    }, t.prototype.ya = function(t2, e) {
      return this.ga(e), Dr.resolve();
    }, t.prototype.Va = function(t2, e) {
      return this.rl.delete(e.target), this.al.Uc(e.targetId), this.targetCount -= 1, Dr.resolve();
    }, t.prototype.po = function(t2, e, n2) {
      var r2 = this, i2 = 0, o = [];
      return this.rl.forEach((function(s, u2) {
        u2.sequenceNumber <= e && null === n2.get(u2.targetId) && (r2.rl.delete(s), o.push(r2.pa(t2, u2.targetId)), i2++);
      })), Dr.$n(o).next((function() {
        return i2;
      }));
    }, t.prototype.ba = function(t2) {
      return Dr.resolve(this.targetCount);
    }, t.prototype.va = function(t2, e) {
      var n2 = this.rl.get(e) || null;
      return Dr.resolve(n2);
    }, t.prototype.Sa = function(t2, e, n2) {
      return this.al.Lc(e, n2), Dr.resolve();
    }, t.prototype.Ca = function(t2, e, n2) {
      this.al.qc(e, n2);
      var r2 = this.persistence.No, i2 = [];
      return r2 && e.forEach((function(e2) {
        i2.push(r2.Go(t2, e2));
      })), Dr.$n(i2);
    }, t.prototype.pa = function(t2, e) {
      return this.al.Uc(e), Dr.resolve();
    }, t.prototype.Fa = function(t2, e) {
      var n2 = this.al.Wc(e);
      return Dr.resolve(n2);
    }, t.prototype.Ho = function(t2, e) {
      return Dr.resolve(this.al.Ho(e));
    }, t;
  })()
);
var fu = (
  /** @class */
  (function() {
    function t(t2) {
      var e = this;
      this.ul = {}, this.Ma = new Jr(0), this.Oa = false, this.Oa = true, this.No = t2(this), this.Ka = new hu(this), this.Dr = new Hi(), this.vr = (function(t3, n2) {
        return new au(t3, (function(t4) {
          return e.No.hl(t4);
        }));
      })(this.Dr);
    }
    return t.prototype.start = function() {
      return Promise.resolve();
    }, t.prototype.Di = function() {
      return this.Oa = false, Promise.resolve();
    }, Object.defineProperty(t.prototype, "Ei", {
      get: function() {
        return this.Oa;
      },
      enumerable: false,
      configurable: true
    }), t.prototype.Za = function() {
    }, t.prototype.tc = function() {
    }, t.prototype.Ic = function() {
      return this.Dr;
    }, t.prototype.mc = function(t2) {
      var e = this.ul[t2.ti()];
      return e || (e = new uu(this.Dr, this.No), this.ul[t2.ti()] = e), e;
    }, t.prototype.Tc = function() {
      return this.Ka;
    }, t.prototype.Ec = function() {
      return this.vr;
    }, t.prototype.runTransaction = function(t2, e, n2) {
      var r2 = this;
      T2("MemoryPersistence", "Starting transaction:", t2);
      var i2 = new lu(this.Ma.next());
      return this.No.ll(), n2(i2).next((function(t3) {
        return r2.No._l(i2).next((function() {
          return t3;
        }));
      })).Fn().then((function(t3) {
        return i2.br(), t3;
      }));
    }, t.prototype.fl = function(t2, e) {
      return Dr.kn(Object.values(this.ul).map((function(n2) {
        return function() {
          return n2.Ho(t2, e);
        };
      })));
    }, t;
  })()
);
var lu = (
  /** @class */
  (function(e) {
    function n2(t) {
      var n3 = this;
      return (n3 = e.call(this) || this).xa = t, n3;
    }
    return __extends2(n2, e), n2;
  })(pi)
);
var pu = (
  /** @class */
  (function() {
    function t(t2) {
      this.persistence = t2, /** Tracks all documents that are active in Query views. */
      this.dl = new jo(), /** The list of documents that are potentially GCed after each transaction. */
      this.wl = null;
    }
    return t.ml = function(e) {
      return new t(e);
    }, Object.defineProperty(t.prototype, "Tl", {
      get: function() {
        if (this.wl) return this.wl;
        throw D2();
      },
      enumerable: false,
      configurable: true
    }), t.prototype.Da = function(t2, e, n2) {
      return this.dl.Da(n2, e), this.Tl.delete(n2.toString()), Dr.resolve();
    }, t.prototype.Na = function(t2, e, n2) {
      return this.dl.Na(n2, e), this.Tl.add(n2.toString()), Dr.resolve();
    }, t.prototype.Go = function(t2, e) {
      return this.Tl.add(e.toString()), Dr.resolve();
    }, t.prototype.removeTarget = function(t2, e) {
      var n2 = this;
      this.dl.Uc(e.targetId).forEach((function(t3) {
        return n2.Tl.add(t3.toString());
      }));
      var r2 = this.persistence.Tc();
      return r2.Fa(t2, e.targetId).next((function(t3) {
        t3.forEach((function(t4) {
          return n2.Tl.add(t4.toString());
        }));
      })).next((function() {
        return r2.Va(t2, e);
      }));
    }, t.prototype.ll = function() {
      this.wl = /* @__PURE__ */ new Set();
    }, t.prototype._l = function(t2) {
      var e = this, n2 = this.persistence.Ec().ra();
      return Dr.forEach(this.Tl, (function(r2) {
        var i2 = F2.D(r2);
        return e.El(t2, i2).next((function(t3) {
          t3 || n2.Ar(i2);
        }));
      })).next((function() {
        return e.wl = null, n2.apply(t2);
      }));
    }, t.prototype.yc = function(t2, e) {
      var n2 = this;
      return this.El(t2, e).next((function(t3) {
        t3 ? n2.Tl.delete(e.toString()) : n2.Tl.add(e.toString());
      }));
    }, t.prototype.hl = function(t2) {
      return 0;
    }, t.prototype.El = function(t2, e) {
      var n2 = this;
      return Dr.kn([function() {
        return Dr.resolve(n2.dl.Ho(e));
      }, function() {
        return n2.persistence.Tc().Ho(t2, e);
      }, function() {
        return n2.persistence.fl(t2, e);
      }]);
    }, t;
  })()
);
var du = (
  /** @class */
  (function() {
    function t(t2) {
      this.Il = t2.Il, this.Al = t2.Al;
    }
    return t.prototype.gu = function(t2) {
      this.Rl = t2;
    }, t.prototype.Tu = function(t2) {
      this.gl = t2;
    }, t.prototype.onMessage = function(t2) {
      this.Pl = t2;
    }, t.prototype.close = function() {
      this.Al();
    }, t.prototype.send = function(t2) {
      this.Il(t2);
    }, t.prototype.yl = function() {
      this.Rl();
    }, t.prototype.Vl = function(t2) {
      this.gl(t2);
    }, t.prototype.pl = function(t2) {
      this.Pl(t2);
    }, t;
  })()
);
var vu = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery"
};
var yu = (
  /** @class */
  (function(e) {
    function n2(t) {
      var n3 = this;
      return (n3 = e.call(this, t) || this).forceLongPolling = t.forceLongPolling, n3.W = t.W, n3;
    }
    return __extends2(n2, e), n2.prototype.Nl = function(t, e2, n3, r2) {
      return new Promise((function(i2, o) {
        var s = new XhrIo();
        s.listenOnce(EventType.COMPLETE, (function() {
          try {
            switch (s.getLastErrorCode()) {
              case ErrorCode.NO_ERROR:
                var e3 = s.getResponseJson();
                T2("Connection", "XHR received:", JSON.stringify(e3)), i2(e3);
                break;
              case ErrorCode.TIMEOUT:
                T2("Connection", 'RPC "' + t + '" timed out'), o(new I2(b.DEADLINE_EXCEEDED, "Request time out"));
                break;
              case ErrorCode.HTTP_ERROR:
                var n4 = s.getStatus();
                if (T2("Connection", 'RPC "' + t + '" failed with status:', n4, "response text:", s.getResponseText()), n4 > 0) {
                  var r3 = s.getResponseJson().error;
                  if (r3 && r3.status && r3.message) {
                    var u3 = (function(t2) {
                      var e4 = t2.toLowerCase().replace("_", "-");
                      return Object.values(b).indexOf(e4) >= 0 ? e4 : b.UNKNOWN;
                    })(r3.status);
                    o(new I2(u3, r3.message));
                  } else o(new I2(b.UNKNOWN, "Server responded with status " + s.getStatus()));
                } else
                  o(new I2(b.UNAVAILABLE, "Connection failed."));
                break;
              default:
                D2();
            }
          } finally {
            T2("Connection", 'RPC "' + t + '" completed.');
          }
        }));
        var u2 = JSON.stringify(r2);
        s.send(e2, "POST", u2, n3, 15);
      }));
    }, n2.prototype.Pu = function(t, e2) {
      var n3 = [this.vl, "/", "google.firestore.v1.Firestore", "/", t, "/channel"], r2 = createWebChannelTransport(), i2 = {
        // Required for backend stickiness, routing behavior is based on this
        // parameter.
        httpSessionIdParam: "gsessionid",
        initMessageHeaders: {},
        messageUrlParams: {
          // This param is used to improve routing and project isolation by the
          // backend and must be included in every request.
          database: "projects/" + this.U.projectId + "/databases/" + this.U.database
        },
        sendRawJson: true,
        supportsCrossDomainXhr: true,
        internalChannelParams: {
          // Override the default timeout (randomized between 10-20 seconds) since
          // a large write batch on a slow internet connection may take a long
          // time to send to the backend. Rather than have WebChannel impose a
          // tight timeout which could lead to infinite timeouts and retries, we
          // set it very large (5-10 minutes) and rely on the browser's builtin
          // timeouts to kick in if the request isn't working.
          forwardChannelRequestTimeoutMs: 6e5
        },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.W
      };
      this.Cl(i2.initMessageHeaders, e2), // Sending the custom headers we just added to request.initMessageHeaders
      // (Authorization, etc.) will trigger the browser to make a CORS preflight
      // request because the XHR will no longer meet the criteria for a "simple"
      // CORS request:
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
      // Therefore to avoid the CORS preflight request (an extra network
      // roundtrip), we use the httpHeadersOverwriteParam option to specify that
      // the headers should instead be encoded into a special "$httpHeaders" query
      // parameter, which is recognized by the webchannel backend. This is
      // formally defined here:
      // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
      // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
      // doesn't have an Origin header. So we have to exclude a few browser environments that are
      // known to (sometimes) not include an Origin. See
      // https://github.com/firebase/firebase-js-sdk/issues/1491.
      isMobileCordova() || isReactNative() || isElectron() || isIE() || isUWP() || isBrowserExtension() || (i2.httpHeadersOverwriteParam = "$httpHeaders");
      var o = n3.join("");
      T2("Connection", "Creating WebChannel: " + o, i2);
      var s = r2.createWebChannel(o, i2), u2 = false, d = false, v2 = new du({
        Il: function(t2) {
          d ? T2("Connection", "Not sending because WebChannel is closed:", t2) : (u2 || (T2("Connection", "Opening WebChannel transport."), s.open(), u2 = true), T2("Connection", "WebChannel sending:", t2), s.send(t2));
        },
        Al: function() {
          return s.close();
        }
      }), y2 = function(t2, e3) {
        s.listen(t2, (function(t3) {
          try {
            e3(t3);
          } catch (t4) {
            setTimeout((function() {
              throw t4;
            }), 0);
          }
        }));
      };
      return y2(WebChannel.EventType.OPEN, (function() {
        d || T2("Connection", "WebChannel transport opened.");
      })), y2(WebChannel.EventType.CLOSE, (function() {
        d || (d = true, T2("Connection", "WebChannel transport closed"), v2.Vl());
      })), y2(WebChannel.EventType.ERROR, (function(t2) {
        d || (d = true, A2("Connection", "WebChannel transport errored:", t2), v2.Vl(new I2(b.UNAVAILABLE, "The operation could not be completed")));
      })), y2(WebChannel.EventType.MESSAGE, (function(t2) {
        var e3;
        if (!d) {
          var n4 = t2.data[0];
          k2(!!n4);
          var r3 = n4, i3 = r3.error || (null === (e3 = r3[0]) || void 0 === e3 ? void 0 : e3.error);
          if (i3) {
            T2("Connection", "WebChannel received error:", i3);
            var o2 = i3.status, u3 = (function(t3) {
              var e4 = St[t3];
              if (void 0 !== e4) return Rt(e4);
            })(o2), a = i3.message;
            void 0 === u3 && (u3 = b.INTERNAL, a = "Unknown error status: " + o2 + " with message " + i3.message), // Mark closed so no further events are propagated
            d = true, v2.Vl(new I2(u3, a)), s.close();
          } else T2("Connection", "WebChannel received:", n4), v2.pl(n4);
        }
      })), setTimeout((function() {
        v2.yl();
      }), 0), v2;
    }, n2;
  })(
    /** @class */
    (function() {
      function t(t2) {
        this.bl = t2, this.U = t2.U;
        var e = t2.ssl ? "https" : "http";
        this.vl = e + "://" + t2.host, this.Sl = "projects/" + this.U.projectId + "/databases/" + this.U.database + "/documents";
      }
      return t.prototype.$u = function(t2, e, n2, r2) {
        var i2 = this.Dl(t2, e);
        T2("RestConnection", "Sending: ", i2, n2);
        var o = {};
        return this.Cl(o, r2), this.Nl(t2, i2, o, n2).then((function(t3) {
          return T2("RestConnection", "Received: ", t3), t3;
        }), (function(e2) {
          throw A2("RestConnection", t2 + " failed with error: ", e2, "url: ", i2, "request:", n2), e2;
        }));
      }, t.prototype.ku = function(t2, e, n2, r2) {
        return this.$u(t2, e, n2, r2);
      }, /**
       * Modifies the headers for a request, adding any authorization token if
       * present and any additional headers for the request.
       */
      t.prototype.Cl = function(t2, e) {
        if (t2["X-Goog-Api-Client"] = "gl-js/ fire/7.24.0", // Content-Type: text/plain will avoid preflight requests which might
        // mess with CORS and redirects by proxies. If we add custom headers
        // we will need to change this code to potentially use the $httpOverwrite
        // parameter supported by ESF to avoid triggering preflight requests.
        t2["Content-Type"] = "text/plain", e) for (var n2 in e.Kc) e.Kc.hasOwnProperty(n2) && (t2[n2] = e.Kc[n2]);
      }, t.prototype.Dl = function(t2, e) {
        var n2 = vu[t2];
        return this.vl + "/v1/" + e + ":" + n2;
      }, t;
    })()
  )
);
var mu = (
  /** @class */
  (function() {
    function t() {
      var t2 = this;
      this.Fl = function() {
        return t2.xl();
      }, this.$l = function() {
        return t2.kl();
      }, this.Ml = [], this.Ol();
    }
    return t.prototype.Zu = function(t2) {
      this.Ml.push(t2);
    }, t.prototype.Di = function() {
      window.removeEventListener("online", this.Fl), window.removeEventListener("offline", this.$l);
    }, t.prototype.Ol = function() {
      window.addEventListener("online", this.Fl), window.addEventListener("offline", this.$l);
    }, t.prototype.xl = function() {
      T2("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
      for (var t2 = 0, e = this.Ml; t2 < e.length; t2++) {
        (0, e[t2])(
          0
          /* AVAILABLE */
        );
      }
    }, t.prototype.kl = function() {
      T2("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
      for (var t2 = 0, e = this.Ml; t2 < e.length; t2++) {
        (0, e[t2])(
          1
          /* UNAVAILABLE */
        );
      }
    }, // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    t.Ln = function() {
      return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }, t;
  })()
);
var gu = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.Zu = function(t2) {
    }, t.prototype.Di = function() {
    }, t;
  })()
);
function wu(t) {
  return new De(
    t,
    /* useProto3Json= */
    true
  );
}
var bu = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.";
var Iu = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.initialize = function(t2) {
      return __awaiter2(this, void 0, void 0, (function() {
        return __generator2(this, (function(e) {
          switch (e.label) {
            case 0:
              return this.Sh = this.Ll(t2), this.persistence = this.Bl(t2), [4, this.persistence.start()];
            case 1:
              return e.sent(), this.ql = this.Ul(t2), this.ju = this.Ql(t2), [
                2
                /*return*/
              ];
          }
        }));
      }));
    }, t.prototype.Ul = function(t2) {
      return null;
    }, t.prototype.Ql = function(t2) {
      return e = this.persistence, n2 = new su(), r2 = t2.Wl, new ko(e, n2, r2);
      var e, n2, r2;
    }, t.prototype.Bl = function(t2) {
      if (t2.persistenceSettings.jl) throw new I2(b.FAILED_PRECONDITION, bu);
      return new fu(pu.ml);
    }, t.prototype.Ll = function(t2) {
      return new ai();
    }, t.prototype.terminate = function() {
      return __awaiter2(this, void 0, void 0, (function() {
        return __generator2(this, (function(t2) {
          switch (t2.label) {
            case 0:
              return this.ql && this.ql.stop(), [4, this.Sh.Di()];
            case 1:
              return t2.sent(), [4, this.persistence.Di()];
            case 2:
              return t2.sent(), [
                2
                /*return*/
              ];
          }
        }));
      }));
    }, t.prototype.clearPersistence = function(t2, e) {
      throw new I2(b.FAILED_PRECONDITION, bu);
    }, t;
  })()
);
var Eu = (
  /** @class */
  (function(r2) {
    function i2() {
      return null !== r2 && r2.apply(this, arguments) || this;
    }
    return __extends2(i2, r2), i2.prototype.initialize = function(t) {
      return __awaiter2(this, void 0, void 0, (function() {
        var i3, o = this;
        return __generator2(this, (function(s) {
          switch (s.label) {
            case 0:
              return [4, r2.prototype.initialize.call(this, t)];
            case 1:
              return s.sent(), i3 = this.Kl.fi, this.Sh instanceof ui ? (this.Sh.fi = {
                er: Xs.bind(null, i3),
                nr: nu.bind(null, i3),
                sr: ru.bind(null, i3),
                pi: eu.bind(null, i3)
              }, [4, this.Sh.start()]) : [3, 3];
            case 2:
              s.sent(), s.label = 3;
            case 3:
              return [4, this.persistence.Xa((function(t2) {
                return __awaiter2(o, void 0, void 0, (function() {
                  return __generator2(this, (function(e) {
                    switch (e.label) {
                      case 0:
                        return [4, Js(this.Kl.fi, t2)];
                      case 1:
                        return e.sent(), this.ql && (t2 && !this.ql.Ei ? this.ql.start(this.ju) : t2 || this.ql.stop()), [
                          2
                          /*return*/
                        ];
                    }
                  }));
                }));
              }))];
            case 4:
              return s.sent(), [
                2
                /*return*/
              ];
          }
        }));
      }));
    }, i2.prototype.Ll = function(t) {
      if (t.persistenceSettings.jl && t.persistenceSettings.synchronizeTabs) {
        var e = Fr();
        if (!ui.Ln(e)) throw new I2(b.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
        var n2 = Do(t.bl.U, t.bl.persistenceKey);
        return new ui(e, t.cs, n2, t.clientId, t.Wl);
      }
      return new ai();
    }, i2;
  })(
    /** @class */
    (function(r2) {
      function i2(t) {
        var e = this;
        return (e = r2.call(this) || this).Kl = t, e;
      }
      return __extends2(i2, r2), i2.prototype.initialize = function(t) {
        return __awaiter2(this, void 0, void 0, (function() {
          return __generator2(this, (function(e) {
            switch (e.label) {
              case 0:
                return [4, r2.prototype.initialize.call(this, t)];
              case 1:
                return e.sent(), [4, Mo(this.ju)];
              case 2:
                return e.sent(), [4, this.Kl.initialize(this, t)];
              case 3:
                return e.sent(), [4, ou(this.Kl.fi)];
              case 4:
                return e.sent(), [4, ys(this.Kl.ph)];
              case 5:
                return e.sent(), [
                  2
                  /*return*/
                ];
            }
          }));
        }));
      }, i2.prototype.Ul = function(t) {
        var e = this.persistence.No.wo;
        return new bi(e, t.cs);
      }, i2.prototype.Bl = function(t) {
        var e = Do(t.bl.U, t.bl.persistenceKey), n2 = wu(t.bl.U);
        return new _o(t.persistenceSettings.synchronizeTabs, e, t.clientId, wi.ao(t.persistenceSettings.cacheSizeBytes), t.cs, Fr(), Mr(), n2, this.Sh, t.persistenceSettings.ka);
      }, i2.prototype.Ll = function(t) {
        return new ai();
      }, i2.prototype.clearPersistence = function(t, r3) {
        return (function(t2) {
          return __awaiter2(this, void 0, void 0, (function() {
            var e;
            return __generator2(this, (function(n2) {
              switch (n2.label) {
                case 0:
                  return kr.Ln() ? (e = t2 + "main", [4, kr.delete(e)]) : [2, Promise.resolve()];
                case 1:
                  return n2.sent(), [
                    2
                    /*return*/
                  ];
              }
            }));
          }));
        })(Do(t, r3));
      }, i2;
    })(Iu)
  )
);
var _u = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.initialize = function(t2, r2) {
      return __awaiter2(this, void 0, void 0, (function() {
        var e = this;
        return __generator2(this, (function(n2) {
          switch (n2.label) {
            case 0:
              return this.ju ? [3, 2] : (this.ju = t2.ju, this.Sh = t2.Sh, this.Ku = this.Gl(r2), this.ph = this.zl(r2), this.bh = this.Hl(r2), this.fi = this.Yl(r2), this.Sh.di = function(t3) {
                return Us(
                  e.fi,
                  t3,
                  1
                  /* SharedClientState */
                );
              }, this.ph.Gu.Jl = Hs.bind(null, this.fi), [4, _s(this.ph, this.fi.Uh)]);
            case 1:
              n2.sent(), n2.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        }));
      }));
    }, t.prototype.Hl = function(t2) {
      return new Br();
    }, t.prototype.Gl = function(t2) {
      var e, n2 = wu(t2.bl.U), r2 = (e = t2.bl, new yu(e));
      return (function(t3, e2, n3) {
        return new Xo(t3, e2, n3);
      })(t2.credentials, r2, n2);
    }, t.prototype.zl = function(t2) {
      var e, n2, r2, i2, o, s = this;
      return e = this.ju, n2 = this.Ku, r2 = t2.cs, i2 = function(t3) {
        return Us(
          s.fi,
          t3,
          0
          /* RemoteStore */
        );
      }, o = mu.Ln() ? new mu() : new gu(), new Zo(e, n2, r2, i2, o);
    }, t.prototype.Yl = function(t2) {
      return (function(t3, e, n2, r2, i2, o, s) {
        var u2 = new Ls(t3, e, n2, r2, i2, o);
        return s && (u2.qh = true), u2;
      })(this.ju, this.ph, this.bh, this.Sh, t2.Wl, t2.Dh, !t2.persistenceSettings.jl || !t2.persistenceSettings.synchronizeTabs);
    }, t.prototype.terminate = function() {
      return ns(this.ph);
    }, t;
  })()
);
var Tu = (
  /** @class */
  (function() {
    function t(t2) {
      this.observer = t2, /**
           * When set to true, will not raise future events. Necessary to deal with
           * async detachment of listener.
           */
      this.muted = false;
    }
    return t.prototype.next = function(t2) {
      this.observer.next && this.Xl(this.observer.next, t2);
    }, t.prototype.error = function(t2) {
      this.observer.error ? this.Xl(this.observer.error, t2) : console.error("Uncaught Error in snapshot listener:", t2);
    }, t.prototype.Zl = function() {
      this.muted = true;
    }, t.prototype.Xl = function(t2, e) {
      var n2 = this;
      this.muted || setTimeout((function() {
        n2.muted || t2(e);
      }), 0);
    }, t;
  })()
);
var Nu = function(t) {
  !(function(t2, e2, n2, r2) {
    if (!(e2 instanceof Array) || e2.length < 1) throw new I2(b.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least " + rt(1, "element") + ".");
  })(0, t);
  for (var e = 0; e < t.length; ++e) if (z("FieldPath", "string", e, t[e]), 0 === t[e].length) throw new I2(b.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
  this.t_ = new C2(t);
};
var Au = (
  /** @class */
  (function(e) {
    function n2() {
      for (var t = [], n3 = 0; n3 < arguments.length; n3++) t[n3] = arguments[n3];
      return e.call(this, t) || this;
    }
    return __extends2(n2, e), n2.documentId = function() {
      return new n2(C2.v().R());
    }, n2.prototype.isEqual = function(t) {
      if (!(t instanceof n2)) throw tt("isEqual", "FieldPath", 1, t);
      return this.t_.isEqual(t.t_);
    }, n2;
  })(Nu)
);
var Su = new RegExp("[~\\*/\\[\\]]");
var Du = (
  /**
       * @param _methodName The public API endpoint that returns this class.
       */
  function(t) {
    this.e_ = t;
  }
);
var ku = (
  /** @class */
  (function(e) {
    function n2() {
      return null !== e && e.apply(this, arguments) || this;
    }
    return __extends2(n2, e), n2.prototype.n_ = function(t) {
      if (2 !== t.s_) throw 1 === t.s_ ? t.i_(this.e_ + "() can only appear at the top level of your update data") : t.i_(this.e_ + "() cannot be used with set() unless you pass {merge:true}");
      return t.We.push(t.path), null;
    }, n2.prototype.isEqual = function(t) {
      return t instanceof n2;
    }, n2;
  })(Du)
);
function xu(t, e, n2) {
  return new Gu({
    s_: 3,
    r_: e.settings.r_,
    methodName: t.e_,
    o_: n2
  }, e.U, e.serializer, e.ignoreUndefinedProperties);
}
var Lu = (
  /** @class */
  (function(e) {
    function n2() {
      return null !== e && e.apply(this, arguments) || this;
    }
    return __extends2(n2, e), n2.prototype.n_ = function(t) {
      return new In(t.path, new ln());
    }, n2.prototype.isEqual = function(t) {
      return t instanceof n2;
    }, n2;
  })(Du)
);
var Ru = (
  /** @class */
  (function(e) {
    function n2(t, n3) {
      var r2 = this;
      return (r2 = e.call(this, t) || this).a_ = n3, r2;
    }
    return __extends2(n2, e), n2.prototype.n_ = function(t) {
      var e2 = xu(
        this,
        t,
        /*array=*/
        true
      ), n3 = this.a_.map((function(t2) {
        return Hu(t2, e2);
      })), r2 = new pn(n3);
      return new In(t.path, r2);
    }, n2.prototype.isEqual = function(t) {
      return this === t;
    }, n2;
  })(Du)
);
var Ou = (
  /** @class */
  (function(e) {
    function n2(t, n3) {
      var r2 = this;
      return (r2 = e.call(this, t) || this).a_ = n3, r2;
    }
    return __extends2(n2, e), n2.prototype.n_ = function(t) {
      var e2 = xu(
        this,
        t,
        /*array=*/
        true
      ), n3 = this.a_.map((function(t2) {
        return Hu(t2, e2);
      })), r2 = new vn(n3);
      return new In(t.path, r2);
    }, n2.prototype.isEqual = function(t) {
      return this === t;
    }, n2;
  })(Du)
);
var Pu = (
  /** @class */
  (function(e) {
    function n2(t, n3) {
      var r2 = this;
      return (r2 = e.call(this, t) || this).c_ = n3, r2;
    }
    return __extends2(n2, e), n2.prototype.n_ = function(t) {
      var e2 = new mn(t.serializer, Le(t.serializer, this.c_));
      return new In(t.path, e2);
    }, n2.prototype.isEqual = function(t) {
      return this === t;
    }, n2;
  })(Du)
);
var Vu = (
  /** @class */
  (function() {
    function t(t2, e) {
      if (q2("GeoPoint", arguments, 2), z("GeoPoint", "number", 1, t2), z("GeoPoint", "number", 2, e), !isFinite(t2) || t2 < -90 || t2 > 90) throw new I2(b.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t2);
      if (!isFinite(e) || e < -180 || e > 180) throw new I2(b.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
      this.u_ = t2, this.h_ = e;
    }
    return Object.defineProperty(t.prototype, "latitude", {
      /**
       * The latitude of this `GeoPoint` instance.
       */
      get: function() {
        return this.u_;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "longitude", {
      /**
       * The longitude of this `GeoPoint` instance.
       */
      get: function() {
        return this.h_;
      },
      enumerable: false,
      configurable: true
    }), /**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other The `GeoPoint` to compare against.
     * @return true if this `GeoPoint` is equal to the provided one.
     */
    t.prototype.isEqual = function(t2) {
      return this.u_ === t2.u_ && this.h_ === t2.h_;
    }, t.prototype.toJSON = function() {
      return {
        latitude: this.u_,
        longitude: this.h_
      };
    }, /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    t.prototype.Y = function(t2) {
      return st(this.u_, t2.u_) || st(this.h_, t2.h_);
    }, t;
  })()
);
var Uu = function(t) {
  this.l_ = t;
};
var Cu = /^__.*__$/;
var Fu = function(t, e, n2) {
  this.__ = t, this.f_ = e, this.d_ = n2;
};
var Mu = (
  /** @class */
  (function() {
    function t(t2, e, n2) {
      this.data = t2, this.We = e, this.fieldTransforms = n2;
    }
    return t.prototype.w_ = function(t2, e) {
      var n2 = [];
      return null !== this.We ? n2.push(new Rn(t2, this.data, this.We, e)) : n2.push(new Ln(t2, this.data, e)), this.fieldTransforms.length > 0 && n2.push(new Pn(t2, this.fieldTransforms)), n2;
    }, t;
  })()
);
var qu = (
  /** @class */
  (function() {
    function t(t2, e, n2) {
      this.data = t2, this.We = e, this.fieldTransforms = n2;
    }
    return t.prototype.w_ = function(t2, e) {
      var n2 = [new Rn(t2, this.data, this.We, e)];
      return this.fieldTransforms.length > 0 && n2.push(new Pn(t2, this.fieldTransforms)), n2;
    }, t;
  })()
);
function ju(t) {
  switch (t) {
    case 0:
    // fall through
    case 2:
    // fall through
    case 1:
      return true;
    case 3:
    case 4:
      return false;
    default:
      throw D2();
  }
}
var Gu = (
  /** @class */
  (function() {
    function t(t2, e, n2, r2, i2, o) {
      this.settings = t2, this.U = e, this.serializer = n2, this.ignoreUndefinedProperties = r2, // Minor hack: If fieldTransforms is undefined, we assume this is an
      // external call and we need to validate the entire path.
      void 0 === i2 && this.m_(), this.fieldTransforms = i2 || [], this.We = o || [];
    }
    return Object.defineProperty(t.prototype, "path", {
      get: function() {
        return this.settings.path;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "s_", {
      get: function() {
        return this.settings.s_;
      },
      enumerable: false,
      configurable: true
    }), /** Returns a new context with the specified settings overwritten. */
    t.prototype.T_ = function(e) {
      return new t(Object.assign(Object.assign({}, this.settings), e), this.U, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.We);
    }, t.prototype.E_ = function(t2) {
      var e, n2 = null === (e = this.path) || void 0 === e ? void 0 : e.child(t2), r2 = this.T_({
        path: n2,
        o_: false
      });
      return r2.I_(t2), r2;
    }, t.prototype.A_ = function(t2) {
      var e, n2 = null === (e = this.path) || void 0 === e ? void 0 : e.child(t2), r2 = this.T_({
        path: n2,
        o_: false
      });
      return r2.m_(), r2;
    }, t.prototype.R_ = function(t2) {
      return this.T_({
        path: void 0,
        o_: true
      });
    }, t.prototype.i_ = function(t2) {
      return ta2(t2, this.settings.methodName, this.settings.g_ || false, this.path, this.settings.r_);
    }, /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
    t.prototype.contains = function(t2) {
      return void 0 !== this.We.find((function(e) {
        return t2.T(e);
      })) || void 0 !== this.fieldTransforms.find((function(e) {
        return t2.T(e.field);
      }));
    }, t.prototype.m_ = function() {
      if (this.path) for (var t2 = 0; t2 < this.path.length; t2++) this.I_(this.path.get(t2));
    }, t.prototype.I_ = function(t2) {
      if (0 === t2.length) throw this.i_("Document fields must not be empty");
      if (ju(this.s_) && Cu.test(t2)) throw this.i_('Document fields cannot begin and end with "__"');
    }, t;
  })()
);
var zu = (
  /** @class */
  (function() {
    function t(t2, e, n2) {
      this.U = t2, this.ignoreUndefinedProperties = e, this.serializer = n2 || wu(t2);
    }
    return t.prototype.P_ = function(t2, e, n2, r2) {
      return void 0 === r2 && (r2 = false), new Gu({
        s_: t2,
        methodName: e,
        r_: n2,
        path: C2.P(),
        o_: false,
        g_: r2
      }, this.U, this.serializer, this.ignoreUndefinedProperties);
    }, t;
  })()
);
function Bu(t, e, n2, r2, i2, o) {
  void 0 === o && (o = {});
  var s = t.P_(o.merge || o.mergeFields ? 2 : 0, e, n2, i2);
  Xu("Data must be an object, but it was:", s, r2);
  var u2, a, c = Yu(r2, s);
  if (o.merge) u2 = new bn(s.We), a = s.fieldTransforms;
  else if (o.mergeFields) {
    for (var h = [], f = 0, l = o.mergeFields; f < l.length; f++) {
      var p2 = l[f], d = void 0;
      if (p2 instanceof Nu) d = p2.t_;
      else {
        if ("string" != typeof p2) throw D2();
        d = Zu(e, p2, n2);
      }
      if (!s.contains(d)) throw new I2(b.INVALID_ARGUMENT, "Field '" + d + "' is specified in your field mask but missing from your input data.");
      ea2(h, d) || h.push(d);
    }
    u2 = new bn(h), a = s.fieldTransforms.filter((function(t2) {
      return u2.Ye(t2.field);
    }));
  } else u2 = null, a = s.fieldTransforms;
  return new Mu(new Mn(c), u2, a);
}
function Ku(t, e, n2, r2) {
  var i2 = t.P_(1, e, n2);
  Xu("Data must be an object, but it was:", i2, r2);
  var o = [], s = new qn();
  R2(r2, (function(t2, r3) {
    var u3 = Zu(e, t2, n2), a = i2.A_(u3);
    if (r3 instanceof ku || r3 instanceof Uu && r3.l_ instanceof ku)
      o.push(u3);
    else {
      var c = Hu(r3, a);
      null != c && (o.push(u3), s.set(u3, c));
    }
  }));
  var u2 = new bn(o);
  return new qu(s.Xe(), u2, i2.fieldTransforms);
}
function Wu(t, e, n2, r2, i2, o) {
  var s = t.P_(1, e, n2), u2 = [Ju(e, r2, n2)], a = [i2];
  if (o.length % 2 != 0) throw new I2(b.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
  for (var c = 0; c < o.length; c += 2) u2.push(Ju(e, o[c])), a.push(o[c + 1]);
  for (var h = [], f = new qn(), l = u2.length - 1; l >= 0; --l) if (!ea2(h, u2[l])) {
    var p2 = u2[l], d = a[l], v2 = s.A_(p2);
    if (d instanceof ku || d instanceof Uu && d.l_ instanceof ku)
      h.push(p2);
    else {
      var y2 = Hu(d, v2);
      null != y2 && (h.push(p2), f.set(p2, y2));
    }
  }
  var m = new bn(h);
  return new qu(f.Xe(), m, s.fieldTransforms);
}
function Qu(t, e, n2, r2) {
  return void 0 === r2 && (r2 = false), Hu(n2, t.P_(r2 ? 4 : 3, e));
}
function Hu(t, e) {
  if (
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    t instanceof Uu && (t = t.l_), $u(t)
  ) return Xu("Unsupported field value:", e, t), Yu(t, e);
  if (t instanceof Du)
    return (function(t2, e2) {
      if (!ju(e2.s_)) throw e2.i_(t2.e_ + "() can only be used with update() and set()");
      if (!e2.path) throw e2.i_(t2.e_ + "() is not currently supported inside arrays");
      var n2 = t2.n_(e2);
      n2 && e2.fieldTransforms.push(n2);
    })(t, e), null;
  if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.We.push(e.path), t instanceof Array
  ) {
    if (e.settings.o_ && 4 !== e.s_) throw e.i_("Nested arrays are not supported");
    return (function(t2, e2) {
      for (var n2 = [], r2 = 0, i2 = 0, o = t2; i2 < o.length; i2++) {
        var s = Hu(o[i2], e2.R_(r2));
        null == s && // Just include nulls in the array for fields being replaced with a
        // sentinel.
        (s = {
          nullValue: "NULL_VALUE"
        }), n2.push(s), r2++;
      }
      return {
        arrayValue: {
          values: n2
        }
      };
    })(t, e);
  }
  return (function(t2, e2) {
    if (null === t2) return {
      nullValue: "NULL_VALUE"
    };
    if ("number" == typeof t2) return Le(e2.serializer, t2);
    if ("boolean" == typeof t2) return {
      booleanValue: t2
    };
    if ("string" == typeof t2) return {
      stringValue: t2
    };
    if (t2 instanceof Date) {
      var n2 = mt.fromDate(t2);
      return {
        timestampValue: Re(e2.serializer, n2)
      };
    }
    if (t2 instanceof mt) {
      var r2 = new mt(t2.seconds, 1e3 * Math.floor(t2.nanoseconds / 1e3));
      return {
        timestampValue: Re(e2.serializer, r2)
      };
    }
    if (t2 instanceof Vu) return {
      geoPointValue: {
        latitude: t2.latitude,
        longitude: t2.longitude
      }
    };
    if (t2 instanceof ht) return {
      bytesValue: Oe(e2.serializer, t2.q)
    };
    if (t2 instanceof Fu) {
      var i2 = e2.U, o = t2.__;
      if (!o.isEqual(i2)) throw e2.i_("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i2.projectId + "/" + i2.database);
      return {
        referenceValue: Ue(t2.__ || e2.U, t2.f_.path)
      };
    }
    if (void 0 === t2 && e2.ignoreUndefinedProperties) return null;
    throw e2.i_("Unsupported field value: " + X2(t2));
  })(t, e);
}
function Yu(t, e) {
  var n2 = {};
  return O2(t) ? (
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.We.push(e.path)
  ) : R2(t, (function(t2, r2) {
    var i2 = Hu(r2, e.E_(t2));
    null != i2 && (n2[t2] = i2);
  })), {
    mapValue: {
      fields: n2
    }
  };
}
function $u(t) {
  return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof mt || t instanceof Vu || t instanceof ht || t instanceof Fu || t instanceof Du);
}
function Xu(t, e, n2) {
  if (!$u(n2) || !$(n2)) {
    var r2 = X2(n2);
    throw "an object" === r2 ? e.i_(t + " a custom object") : e.i_(t + " " + r2);
  }
}
function Ju(t, e, n2) {
  if (e instanceof Nu) return e.t_;
  if ("string" == typeof e) return Zu(t, e);
  throw ta2(
    "Field path arguments must be of type string or FieldPath.",
    t,
    /* hasConverter= */
    false,
    /* path= */
    void 0,
    n2
  );
}
function Zu(t, e, n2) {
  try {
    return (function(t2) {
      if (t2.search(Su) >= 0) throw new I2(b.INVALID_ARGUMENT, "Invalid field path (" + t2 + "). Paths must not contain '~', '*', '/', '[', or ']'");
      try {
        return new (Au.bind.apply(Au, __spreadArrays([void 0], t2.split("."))))();
      } catch (e2) {
        throw new I2(b.INVALID_ARGUMENT, "Invalid field path (" + t2 + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
      }
    })(e).t_;
  } catch (e2) {
    throw ta2(
      (i2 = e2) instanceof Error ? i2.message : i2.toString(),
      t,
      /* hasConverter= */
      false,
      /* path= */
      void 0,
      n2
    );
  }
  var i2;
}
function ta2(t, e, n2, r2, i2) {
  var o = r2 && !r2.m(), s = void 0 !== i2, u2 = "Function " + e + "() called with invalid data";
  n2 && (u2 += " (via `toFirestore()`)");
  var a = "";
  return (o || s) && (a += " (found", o && (a += " in field " + r2), s && (a += " in document " + i2), a += ")"), new I2(b.INVALID_ARGUMENT, (u2 += ". ") + t + a);
}
function ea2(t, e) {
  return t.some((function(t2) {
    return t2.isEqual(e);
  }));
}
var na2 = (
  /** @class */
  (function() {
    function t(t2) {
      this.Ku = t2, // The version of each document that was read during this transaction.
      this.y_ = /* @__PURE__ */ new Map(), this.mutations = [], this.V_ = false, /**
           * A deferred usage error that occurred previously in this transaction that
           * will cause the transaction to fail once it actually commits.
           */
      this.p_ = null, /**
           * Set of documents that have been written in the transaction.
           *
           * When there's more than one write to the same key in a transaction, any
           * writes after the first are handled differently.
           */
      this.b_ = /* @__PURE__ */ new Set();
    }
    return t.prototype.v_ = function(t2) {
      return __awaiter2(this, void 0, void 0, (function() {
        var r2, i2 = this;
        return __generator2(this, (function(o) {
          switch (o.label) {
            case 0:
              if (this.S_(), this.mutations.length > 0) throw new I2(b.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
              return [4, (function(t3, r3) {
                return __awaiter2(this, void 0, void 0, (function() {
                  var e, i3, o2, s, u2, a;
                  return __generator2(this, (function(n2) {
                    switch (n2.label) {
                      case 0:
                        return e = x2(t3), i3 = Ge(e.serializer) + "/documents", o2 = {
                          documents: r3.map((function(t4) {
                            return Fe(e.serializer, t4);
                          }))
                        }, [4, e.ku("BatchGetDocuments", i3, o2)];
                      case 1:
                        return s = n2.sent(), u2 = /* @__PURE__ */ new Map(), s.forEach((function(t4) {
                          var n3 = (function(t5, e2) {
                            return "found" in e2 ? (function(t6, e3) {
                              k2(!!e3.found), e3.found.name, e3.found.updateTime;
                              var n4 = Me(t6, e3.found.name), r4 = Ve(e3.found.updateTime), i4 = new Mn({
                                mapValue: {
                                  fields: e3.found.fields
                                }
                              });
                              return new zn(n4, r4, i4, {});
                            })(t5, e2) : "missing" in e2 ? (function(t6, e3) {
                              k2(!!e3.missing), k2(!!e3.readTime);
                              var n4 = Me(t6, e3.missing), r4 = Ve(e3.readTime);
                              return new Bn(n4, r4);
                            })(t5, e2) : D2();
                          })(e.serializer, t4);
                          u2.set(n3.key.toString(), n3);
                        })), a = [], [2, (r3.forEach((function(t4) {
                          var e2 = u2.get(t4.toString());
                          k2(!!e2), a.push(e2);
                        })), a)];
                    }
                  }));
                }));
              })(this.Ku, t2)];
            case 1:
              return [2, ((r2 = o.sent()).forEach((function(t3) {
                t3 instanceof Bn || t3 instanceof zn ? i2.D_(t3) : D2();
              })), r2)];
          }
        }));
      }));
    }, t.prototype.set = function(t2, e) {
      this.write(e.w_(t2, this.Ge(t2))), this.b_.add(t2.toString());
    }, t.prototype.update = function(t2, e) {
      try {
        this.write(e.w_(t2, this.C_(t2)));
      } catch (t3) {
        this.p_ = t3;
      }
      this.b_.add(t2.toString());
    }, t.prototype.delete = function(t2) {
      this.write([new Cn(t2, this.Ge(t2))]), this.b_.add(t2.toString());
    }, t.prototype.commit = function() {
      return __awaiter2(this, void 0, void 0, (function() {
        var t2, r2 = this;
        return __generator2(this, (function(i2) {
          switch (i2.label) {
            case 0:
              if (this.S_(), this.p_) throw this.p_;
              return t2 = this.y_, // For each mutation, note that the doc was written.
              this.mutations.forEach((function(e) {
                t2.delete(e.key.toString());
              })), // For each document that was read but not written to, we want to perform
              // a `verify` operation.
              t2.forEach((function(t3, e) {
                var n2 = F2.D(e);
                r2.mutations.push(new Fn(n2, r2.Ge(n2)));
              })), [4, (function(t3, r3) {
                return __awaiter2(this, void 0, void 0, (function() {
                  var e, i3, o;
                  return __generator2(this, (function(n2) {
                    switch (n2.label) {
                      case 0:
                        return e = x2(t3), i3 = Ge(e.serializer) + "/documents", o = {
                          writes: r3.map((function(t4) {
                            return Ke(e.serializer, t4);
                          }))
                        }, [4, e.$u("Commit", i3, o)];
                      case 1:
                        return n2.sent(), [
                          2
                          /*return*/
                        ];
                    }
                  }));
                }));
              })(this.Ku, this.mutations)];
            case 1:
              return i2.sent(), this.V_ = true, [
                2
                /*return*/
              ];
          }
        }));
      }));
    }, t.prototype.D_ = function(t2) {
      var e;
      if (t2 instanceof zn) e = t2.version;
      else {
        if (!(t2 instanceof Bn)) throw D2();
        e = gt.min();
      }
      var n2 = this.y_.get(t2.key.toString());
      if (n2) {
        if (!e.isEqual(n2))
          throw new I2(b.ABORTED, "Document version changed between two reads.");
      } else this.y_.set(t2.key.toString(), e);
    }, /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */
    t.prototype.Ge = function(t2) {
      var e = this.y_.get(t2.toString());
      return !this.b_.has(t2.toString()) && e ? _n.updateTime(e) : _n.ze();
    }, /**
     * Returns the precondition for a document if the operation is an update.
     */
    t.prototype.C_ = function(t2) {
      var e = this.y_.get(t2.toString());
      if (!this.b_.has(t2.toString()) && e) {
        if (e.isEqual(gt.min()))
          throw new I2(b.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
        return _n.updateTime(e);
      }
      return _n.exists(true);
    }, t.prototype.write = function(t2) {
      this.S_(), this.mutations = this.mutations.concat(t2);
    }, t.prototype.S_ = function() {
    }, t;
  })()
);
var ra2 = (
  /** @class */
  (function() {
    function t(t2, e, n2, r2) {
      this.cs = t2, this.Ku = e, this.updateFunction = n2, this.ls = r2, this.N_ = 5, this.ys = new Sr(
        this.cs,
        "transaction_retry"
        /* TransactionRetry */
      );
    }
    return t.prototype.run = function() {
      this.F_();
    }, t.prototype.F_ = function() {
      var t2 = this;
      this.ys.gn((function() {
        return __awaiter2(t2, void 0, void 0, (function() {
          var t3, e, r2 = this;
          return __generator2(this, (function(n2) {
            return t3 = new na2(this.Ku), (e = this.x_(t3)) && e.then((function(e2) {
              r2.cs.ws((function() {
                return t3.commit().then((function() {
                  r2.ls.resolve(e2);
                })).catch((function(t4) {
                  r2.k_(t4);
                }));
              }));
            })).catch((function(t4) {
              r2.k_(t4);
            })), [
              2
              /*return*/
            ];
          }));
        }));
      }));
    }, t.prototype.x_ = function(t2) {
      try {
        var e = this.updateFunction(t2);
        return !wt(e) && e.catch && e.then ? e : (this.ls.reject(Error("Transaction callback must return a Promise")), null);
      } catch (t3) {
        return this.ls.reject(t3), null;
      }
    }, t.prototype.k_ = function(t2) {
      var e = this;
      this.N_ > 0 && this.M_(t2) ? (this.N_ -= 1, this.cs.ws((function() {
        return e.F_(), Promise.resolve();
      }))) : this.ls.reject(t2);
    }, t.prototype.M_ = function(t2) {
      if ("FirebaseError" === t2.name) {
        var e = t2.code;
        return "aborted" === e || "failed-precondition" === e || !Lt(e);
      }
      return false;
    }, t;
  })()
);
var ia = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.credentials = t2, this.cs = e, this.clientId = ot.k(), // We defer our initialization until we get the current user from
      // setChangeListener(). We block the async queue until we got the initial
      // user and the initialization is completed. This will prevent any scheduled
      // work from happening before initialization is completed.
      // If initializationDone resolved then the FirestoreClient is in a usable
      // state.
      this.O_ = new Ar();
    }
    return t.prototype.start = function(t2, r2, i2, o) {
      var s = this;
      this.L_(), this.bl = t2;
      var u2 = new Ar(), a = false;
      return this.credentials.Hc((function(t3) {
        if (!a) return a = true, T2("FirestoreClient", "Initializing. user=", t3.uid), s.B_(r2, i2, o, t3, u2).then(s.O_.resolve, s.O_.reject);
        s.cs.Cs((function() {
          return (function(t4, r3) {
            return __awaiter2(this, void 0, void 0, (function() {
              var e, i3;
              return __generator2(this, (function(n2) {
                switch (n2.label) {
                  case 0:
                    return (e = x2(t4)).cs.xs(), T2("RemoteStore", "RemoteStore received new credentials"), i3 = cs(e), // Tear down and re-create our network streams. This will ensure we get a
                    // fresh auth token for the new user and re-fill the write pipeline with
                    // new mutations from the LocalStore (since mutations are per-user).
                    e.Yu.add(
                      3
                      /* CredentialChange */
                    ), [4, es(e)];
                  case 1:
                    return n2.sent(), i3 && // Don't set the network status to Unknown if we are offline.
                    e.th.set(
                      "Unknown"
                      /* Unknown */
                    ), [4, e.Gu.Jl(r3)];
                  case 2:
                    return n2.sent(), e.Yu.delete(
                      3
                      /* CredentialChange */
                    ), [4, ts(e)];
                  case 3:
                    return n2.sent(), [
                      2
                      /*return*/
                    ];
                }
              }));
            }));
          })(s.ph, t3);
        }));
      })), // Block the async queue until initialization is done
      this.cs.ws((function() {
        return s.O_.promise;
      })), u2.promise;
    }, /** Enables the network connection and requeues all pending operations. */
    t.prototype.enableNetwork = function() {
      var t2 = this;
      return this.L_(), this.cs.enqueue((function() {
        return t2.persistence.tc(true), (function(t3) {
          var e = x2(t3);
          return e.Yu.delete(
            0
            /* UserDisabled */
          ), ts(e);
        })(t2.ph);
      }));
    }, /**
     * Initializes persistent storage, attempting to use IndexedDB if
     * usePersistence is true or memory-only if false.
     *
     * If IndexedDB fails because it's already open in another tab or because the
     * platform can't possibly support our implementation then this method rejects
     * the persistenceResult and falls back on memory-only persistence.
     *
     * @param offlineComponentProvider Provider that returns all components
     * required for memory-only or IndexedDB persistence.
     * @param onlineComponentProvider Provider that returns all components
     * required for online support.
     * @param persistenceSettings Settings object to configure offline persistence
     * @param user The initial user
     * @param persistenceResult A deferred result indicating the user-visible
     *     result of enabling offline persistence. This method will reject this if
     *     IndexedDB fails to start for any reason. If usePersistence is false
     *     this is unconditionally resolved.
     * @returns a Promise indicating whether or not initialization should
     *     continue, i.e. that one of the persistence implementations actually
     *     succeeded.
     */
    t.prototype.B_ = function(t2, r2, i2, o, s) {
      return __awaiter2(this, void 0, void 0, (function() {
        var u2, a, c = this;
        return __generator2(this, (function(h) {
          switch (h.label) {
            case 0:
              return h.trys.push([0, 3, , 4]), u2 = {
                cs: this.cs,
                bl: this.bl,
                clientId: this.clientId,
                credentials: this.credentials,
                Wl: o,
                Dh: 100,
                persistenceSettings: i2
              }, [4, t2.initialize(u2)];
            case 1:
              return h.sent(), [4, r2.initialize(t2, u2)];
            case 2:
              return h.sent(), this.persistence = t2.persistence, this.Sh = t2.Sh, this.ju = t2.ju, this.ql = t2.ql, this.Ku = r2.Ku, this.ph = r2.ph, this.fi = r2.fi, this.q_ = r2.bh, this.q_.Us = Rs.bind(null, this.fi), this.q_.js = Ps.bind(null, this.fi), // When a user calls clearPersistence() in one client, all other clients
              // need to be terminated to allow the delete to succeed.
              this.persistence.Za((function() {
                return __awaiter2(c, void 0, void 0, (function() {
                  return __generator2(this, (function(t3) {
                    switch (t3.label) {
                      case 0:
                        return [4, this.terminate()];
                      case 1:
                        return t3.sent(), [
                          2
                          /*return*/
                        ];
                    }
                  }));
                }));
              })), s.resolve(), [3, 4];
            case 3:
              if (a = h.sent(), // Regardless of whether or not the retry succeeds, from an user
              // perspective, offline persistence has failed.
              s.reject(a), !this.U_(a)) throw a;
              return [2, (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + a), this.B_(new Iu(), new _u(), {
                jl: false
              }, o, s))];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        }));
      }));
    }, /**
     * Decides whether the provided error allows us to gracefully disable
     * persistence (as opposed to crashing the client).
     */
    t.prototype.U_ = function(t2) {
      return "FirebaseError" === t2.name ? t2.code === b.FAILED_PRECONDITION || t2.code === b.UNIMPLEMENTED : !("undefined" != typeof DOMException && t2 instanceof DOMException) || // When the browser is out of quota we could get either quota exceeded
      // or an aborted error depending on whether the error happened during
      // schema migration.
      22 === t2.code || 20 === t2.code || // Firefox Private Browsing mode disables IndexedDb and returns
      // INVALID_STATE for any usage.
      11 === t2.code;
    }, /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */
    t.prototype.L_ = function() {
      if (this.cs.ps) throw new I2(b.FAILED_PRECONDITION, "The client has already been terminated.");
    }, /** Disables the network connection. Pending operations will not complete. */
    t.prototype.disableNetwork = function() {
      var t2 = this;
      return this.L_(), this.cs.enqueue((function() {
        return t2.persistence.tc(false), (function(t3) {
          return __awaiter2(this, void 0, void 0, (function() {
            var e;
            return __generator2(this, (function(n2) {
              switch (n2.label) {
                case 0:
                  return (e = x2(t3)).Yu.add(
                    0
                    /* UserDisabled */
                  ), [4, es(e)];
                case 1:
                  return n2.sent(), // Set the OnlineState to Offline so get()s return from cache, etc.
                  e.th.set(
                    "Offline"
                    /* Offline */
                  ), [
                    2
                    /*return*/
                  ];
              }
            }));
          }));
        })(t2.ph);
      }));
    }, t.prototype.terminate = function() {
      var t2 = this;
      this.cs.Ds();
      var r2 = new Ar();
      return this.cs.bs((function() {
        return __awaiter2(t2, void 0, void 0, (function() {
          var t3, e;
          return __generator2(this, (function(n2) {
            switch (n2.label) {
              case 0:
                return n2.trys.push([0, 4, , 5]), // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                this.ql && this.ql.stop(), [4, ns(this.ph)];
              case 1:
                return n2.sent(), [4, this.Sh.Di()];
              case 2:
                return n2.sent(), [4, this.persistence.Di()];
              case 3:
                return n2.sent(), // `removeChangeListener` must be called after shutting down the
                // RemoteStore as it will prevent the RemoteStore from retrieving
                // auth tokens.
                this.credentials.Yc(), r2.resolve(), [3, 5];
              case 4:
                return t3 = n2.sent(), e = Gr(t3, "Failed to shutdown persistence"), r2.reject(e), [3, 5];
              case 5:
                return [
                  2
                  /*return*/
                ];
            }
          }));
        }));
      })), r2.promise;
    }, /**
     * Returns a Promise that resolves when all writes that were pending at the time this
     * method was called received server acknowledgement. An acknowledgement can be either acceptance
     * or rejection.
     */
    t.prototype.waitForPendingWrites = function() {
      var t2 = this;
      this.L_();
      var r2 = new Ar();
      return this.cs.ws((function() {
        return (function(t3, r3) {
          return __awaiter2(this, void 0, void 0, (function() {
            var e, i2, o, s, u2;
            return __generator2(this, (function(n2) {
              switch (n2.label) {
                case 0:
                  cs((e = x2(t3)).ph) || T2("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), n2.label = 1;
                case 1:
                  return n2.trys.push([1, 3, , 4]), [4, (function(t4) {
                    var e2 = x2(t4);
                    return e2.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(t5) {
                      return e2.Sr.qo(t5);
                    }));
                  })(e.ju)];
                case 2:
                  return -1 === (i2 = n2.sent()) ? [2, void r3.resolve()] : ((o = e.Lh.get(i2) || []).push(r3), e.Lh.set(i2, o), [3, 4]);
                case 3:
                  return s = n2.sent(), u2 = Gr(s, "Initialization of waitForPendingWrites() operation failed"), r3.reject(u2), [3, 4];
                case 4:
                  return [
                    2
                    /*return*/
                  ];
              }
            }));
          }));
        })(t2.fi, r2);
      })), r2.promise;
    }, t.prototype.listen = function(t2, e, n2) {
      var r2 = this;
      this.L_();
      var i2 = new Tu(n2), o = new $r(t2, i2, e);
      return this.cs.ws((function() {
        return Kr(r2.q_, o);
      })), function() {
        i2.Zl(), r2.cs.ws((function() {
          return Wr(r2.q_, o);
        }));
      };
    }, t.prototype.Q_ = function(t2) {
      return __awaiter2(this, void 0, void 0, (function() {
        var r2, i2 = this;
        return __generator2(this, (function(o) {
          switch (o.label) {
            case 0:
              return this.L_(), [4, this.O_.promise];
            case 1:
              return o.sent(), r2 = new Ar(), [2, (this.cs.ws((function() {
                return (function(t3, r3, i3) {
                  return __awaiter2(this, void 0, void 0, (function() {
                    var e, o2, s;
                    return __generator2(this, (function(n2) {
                      switch (n2.label) {
                        case 0:
                          return n2.trys.push([0, 2, , 3]), [4, (function(t4, e2) {
                            var n3 = x2(t4);
                            return n3.persistence.runTransaction("read document", "readonly", (function(t5) {
                              return n3.Cc.Cr(t5, e2);
                            }));
                          })(t3, r3)];
                        case 1:
                          return (e = n2.sent()) instanceof zn ? i3.resolve(e) : e instanceof Bn ? i3.resolve(null) : i3.reject(new I2(b.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), [3, 3];
                        case 2:
                          return o2 = n2.sent(), s = Gr(o2, "Failed to get document '" + r3 + " from cache"), i3.reject(s), [3, 3];
                        case 3:
                          return [
                            2
                            /*return*/
                          ];
                      }
                    }));
                  }));
                })(i2.ju, t2, r2);
              })), r2.promise)];
          }
        }));
      }));
    }, t.prototype.W_ = function(t2, r2) {
      return void 0 === r2 && (r2 = {}), __awaiter2(this, void 0, void 0, (function() {
        var e, i2 = this;
        return __generator2(this, (function(n2) {
          switch (n2.label) {
            case 0:
              return this.L_(), [4, this.O_.promise];
            case 1:
              return n2.sent(), e = new Ar(), [2, (this.cs.ws((function() {
                return (function(t3, e2, n3, r3, i3) {
                  var o = new Tu({
                    next: function(o2) {
                      e2.ws((function() {
                        return Wr(t3, s);
                      }));
                      var u2 = o2.docs.has(n3);
                      !u2 && o2.fromCache ? (
                        // TODO(dimond): If we're online and the document doesn't
                        // exist then we resolve with a doc.exists set to false. If
                        // we're offline however, we reject the Promise in this
                        // case. Two options: 1) Cache the negative response from
                        // the server so we can deliver that even when you're
                        // offline 2) Actually reject the Promise in the online case
                        // if the document doesn't exist.
                        i3.reject(new I2(b.UNAVAILABLE, "Failed to get document because the client is offline."))
                      ) : u2 && o2.fromCache && r3 && "server" === r3.source ? i3.reject(new I2(b.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i3.resolve(o2);
                    },
                    error: function(t4) {
                      return i3.reject(t4);
                    }
                  }), s = new $r(Hn(n3.path), o, {
                    includeMetadataChanges: true,
                    Xs: true
                  });
                  return Kr(t3, s);
                })(i2.q_, i2.cs, t2, r2, e);
              })), e.promise)];
          }
        }));
      }));
    }, t.prototype.j_ = function(t2) {
      return __awaiter2(this, void 0, void 0, (function() {
        var r2, i2 = this;
        return __generator2(this, (function(o) {
          switch (o.label) {
            case 0:
              return this.L_(), [4, this.O_.promise];
            case 1:
              return o.sent(), r2 = new Ar(), [2, (this.cs.ws((function() {
                return (function(t3, r3, i3) {
                  return __awaiter2(this, void 0, void 0, (function() {
                    var e, o2, s, u2, a, c;
                    return __generator2(this, (function(n2) {
                      switch (n2.label) {
                        case 0:
                          return n2.trys.push([0, 2, , 3]), [4, Uo(
                            t3,
                            r3,
                            /* usePreviousResults= */
                            true
                          )];
                        case 1:
                          return e = n2.sent(), o2 = new Ds(r3, e.Fc), s = o2.wh(e.documents), u2 = o2.yr(
                            s,
                            /* updateLimboDocuments= */
                            false
                          ), i3.resolve(u2.snapshot), [3, 3];
                        case 2:
                          return a = n2.sent(), c = Gr(a, "Failed to execute query '" + r3 + " against cache"), i3.reject(c), [3, 3];
                        case 3:
                          return [
                            2
                            /*return*/
                          ];
                      }
                    }));
                  }));
                })(i2.ju, t2, r2);
              })), r2.promise)];
          }
        }));
      }));
    }, t.prototype.K_ = function(t2, r2) {
      return void 0 === r2 && (r2 = {}), __awaiter2(this, void 0, void 0, (function() {
        var e, i2 = this;
        return __generator2(this, (function(n2) {
          switch (n2.label) {
            case 0:
              return this.L_(), [4, this.O_.promise];
            case 1:
              return n2.sent(), e = new Ar(), [2, (this.cs.ws((function() {
                return (function(t3, e2, n3, r3, i3) {
                  var o = new Tu({
                    next: function(n4) {
                      e2.ws((function() {
                        return Wr(t3, s);
                      })), n4.fromCache && "server" === r3.source ? i3.reject(new I2(b.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i3.resolve(n4);
                    },
                    error: function(t4) {
                      return i3.reject(t4);
                    }
                  }), s = new $r(n3, o, {
                    includeMetadataChanges: true,
                    Xs: true
                  });
                  return Kr(t3, s);
                })(i2.q_, i2.cs, t2, r2, e);
              })), e.promise)];
          }
        }));
      }));
    }, t.prototype.write = function(t2) {
      var r2 = this;
      this.L_();
      var i2 = new Ar();
      return this.cs.ws((function() {
        return (function(t3, r3, i3) {
          return __awaiter2(this, void 0, void 0, (function() {
            var e, o, s, u2;
            return __generator2(this, (function(n2) {
              switch (n2.label) {
                case 0:
                  e = ou(t3), n2.label = 1;
                case 1:
                  return n2.trys.push([1, 5, , 6]), [
                    4,
                    /* Accepts locally generated Mutations and commit them to storage. */
                    (function(t4, e2) {
                      var n3, r4 = x2(t4), i4 = mt.now(), o2 = e2.reduce((function(t5, e3) {
                        return t5.add(e3.key);
                      }), Kt());
                      return r4.persistence.runTransaction("Locally write mutations", "readwrite", (function(t5) {
                        return r4.Cc.kr(t5, o2).next((function(o3) {
                          n3 = o3;
                          for (var s2 = [], u3 = 0, a = e2; u3 < a.length; u3++) {
                            var c = a[u3], h = Dn(c, n3.get(c.key));
                            null != h && // NOTE: The base state should only be applied if there's some
                            // existing document to override, so use a Precondition of
                            // exists=true
                            s2.push(new Rn(c.key, h, jn(h.proto.mapValue), _n.exists(true)));
                          }
                          return r4.Sr.ko(t5, i4, s2, e2);
                        }));
                      })).then((function(t5) {
                        var e3 = t5.lr(n3);
                        return {
                          batchId: t5.batchId,
                          wr: e3
                        };
                      }));
                    })(e.ju, r3)
                  ];
                case 2:
                  return o = n2.sent(), e.Sh.xi(o.batchId), (function(t4, e2, n3) {
                    var r4 = t4.Oh[t4.currentUser.ti()];
                    r4 || (r4 = new Ot(st)), r4 = r4.ot(e2, n3), t4.Oh[t4.currentUser.ti()] = r4;
                  })(e, o.batchId, i3), [4, Qs(e, o.wr)];
                case 3:
                  return n2.sent(), [4, ys(e.ph)];
                case 4:
                  return n2.sent(), [3, 6];
                case 5:
                  return s = n2.sent(), u2 = Gr(s, "Failed to persist write"), i3.reject(u2), [3, 6];
                case 6:
                  return [
                    2
                    /*return*/
                  ];
              }
            }));
          }));
        })(r2.fi, t2, i2);
      })), i2.promise;
    }, t.prototype.U = function() {
      return this.bl.U;
    }, t.prototype.G_ = function(t2) {
      var r2 = this;
      this.L_();
      var i2 = new Tu(t2);
      return this.cs.ws((function() {
        return __awaiter2(r2, void 0, void 0, (function() {
          return __generator2(this, (function(t3) {
            return [2, (function(t4, e) {
              x2(t4).qs.add(e), // Immediately fire an initial event, indicating all existing listeners
              // are in-sync.
              e.next();
            })(this.q_, i2)];
          }));
        }));
      })), function() {
        i2.Zl(), r2.cs.ws((function() {
          return __awaiter2(r2, void 0, void 0, (function() {
            return __generator2(this, (function(t3) {
              return [2, (function(t4, e) {
                x2(t4).qs.delete(e);
              })(this.q_, i2)];
            }));
          }));
        }));
      };
    }, Object.defineProperty(t.prototype, "z_", {
      get: function() {
        return this.cs.ps;
      },
      enumerable: false,
      configurable: true
    }), /**
     * Takes an updateFunction in which a set of reads and writes can be performed
     * atomically. In the updateFunction, the client can read and write values
     * using the supplied transaction object. After the updateFunction, all
     * changes will be committed. If a retryable error occurs (ex: some other
     * client has changed any of the data referenced), then the updateFunction
     * will be called again after a backoff. If the updateFunction still fails
     * after all retries, then the transaction will be rejected.
     *
     * The transaction object passed to the updateFunction contains methods for
     * accessing documents and collections. Unlike other datastore access, data
     * accessed with the transaction will not reflect local changes that have not
     * been committed. For this reason, it is required that all reads are
     * performed before any writes. Transactions must be performed while online.
     */
    t.prototype.transaction = function(t2) {
      var e = this;
      this.L_();
      var n2 = new Ar();
      return this.cs.ws((function() {
        return new ra2(e.cs, e.Ku, t2, n2).run(), Promise.resolve();
      })), n2.promise;
    }, t;
  })()
);
function oa2(t) {
  return (function(t2, e) {
    if ("object" != typeof t2 || null === t2) return false;
    for (var n2 = t2, r2 = 0, i2 = ["next", "error", "complete"]; r2 < i2.length; r2++) {
      var o = i2[r2];
      if (o in n2 && "function" == typeof n2[o]) return true;
    }
    return false;
  })(t);
}
var sa2 = (
  /** @class */
  (function() {
    function t(t2, e, n2, r2, i2) {
      this.U = t2, this.timestampsInSnapshots = e, this.H_ = n2, this.Y_ = r2, this.J_ = i2;
    }
    return t.prototype.X_ = function(t2) {
      switch (he(t2)) {
        case 0:
          return null;
        case 1:
          return t2.booleanValue;
        case 2:
          return ge(t2.integerValue || t2.doubleValue);
        case 3:
          return this.Z_(t2.timestampValue);
        case 4:
          return this.tf(t2);
        case 5:
          return t2.stringValue;
        case 6:
          return this.J_(we(t2.bytesValue));
        case 7:
          return this.ef(t2.referenceValue);
        case 8:
          return this.nf(t2.geoPointValue);
        case 9:
          return this.sf(t2.arrayValue);
        case 10:
          return this.if(t2.mapValue);
        default:
          throw D2();
      }
    }, t.prototype.if = function(t2) {
      var e = this, n2 = {};
      return R2(t2.fields || {}, (function(t3, r2) {
        n2[t3] = e.X_(r2);
      })), n2;
    }, t.prototype.nf = function(t2) {
      return new Vu(ge(t2.latitude), ge(t2.longitude));
    }, t.prototype.sf = function(t2) {
      var e = this;
      return (t2.values || []).map((function(t3) {
        return e.X_(t3);
      }));
    }, t.prototype.tf = function(t2) {
      switch (this.H_) {
        case "previous":
          var e = ue(t2);
          return null == e ? null : this.X_(e);
        case "estimate":
          return this.Z_(ae(t2));
        default:
          return null;
      }
    }, t.prototype.Z_ = function(t2) {
      var e = me(t2), n2 = new mt(e.seconds, e.nanos);
      return this.timestampsInSnapshots ? n2 : n2.toDate();
    }, t.prototype.ef = function(t2) {
      var e = V2.g(t2);
      k2(un(e));
      var n2 = new vt(e.get(1), e.get(3)), r2 = new F2(e.u(5));
      return n2.isEqual(this.U) || // TODO(b/64130202): Somehow support foreign references.
      N2("Document " + r2 + " contains a document reference within a different database (" + n2.projectId + "/" + n2.database + ") which is not supported. It will be treated as a reference in the current database (" + this.U.projectId + "/" + this.U.database + ") instead."), this.Y_(r2);
    }, t;
  })()
);
var ua2 = wi.ho;
var aa2 = (
  /** @class */
  (function() {
    function t(t2) {
      var e, n2, r2, i2, o;
      if (void 0 === t2.host) {
        if (void 0 !== t2.ssl) throw new I2(b.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
        this.host = "firestore.googleapis.com", this.ssl = true;
      } else K2("settings", "non-empty string", "host", t2.host), this.host = t2.host, W2("settings", "boolean", "ssl", t2.ssl), this.ssl = null === (e = t2.ssl) || void 0 === e || e;
      if (Z2("settings", t2, ["host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling", "experimentalAutoDetectLongPolling", "ignoreUndefinedProperties"]), W2("settings", "object", "credentials", t2.credentials), this.credentials = t2.credentials, W2("settings", "boolean", "timestampsInSnapshots", t2.timestampsInSnapshots), W2("settings", "boolean", "ignoreUndefinedProperties", t2.ignoreUndefinedProperties), // Nobody should set timestampsInSnapshots anymore, but the error depends on
      // whether they set it to true or false...
      true === t2.timestampsInSnapshots ? N2("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : false === t2.timestampsInSnapshots && N2("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), this.timestampsInSnapshots = null === (n2 = t2.timestampsInSnapshots) || void 0 === n2 || n2, this.ignoreUndefinedProperties = null !== (r2 = t2.ignoreUndefinedProperties) && void 0 !== r2 && r2, W2("settings", "number", "cacheSizeBytes", t2.cacheSizeBytes), void 0 === t2.cacheSizeBytes) this.cacheSizeBytes = wi._o;
      else {
        if (t2.cacheSizeBytes !== ua2 && t2.cacheSizeBytes < wi.lo) throw new I2(b.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + wi.lo);
        this.cacheSizeBytes = t2.cacheSizeBytes;
      }
      W2("settings", "boolean", "experimentalForceLongPolling", t2.experimentalForceLongPolling), this.experimentalForceLongPolling = null !== (i2 = t2.experimentalForceLongPolling) && void 0 !== i2 && i2, W2("settings", "boolean", "experimentalAutoDetectLongPolling", t2.experimentalAutoDetectLongPolling), this.experimentalAutoDetectLongPolling = null !== (o = t2.experimentalAutoDetectLongPolling) && void 0 !== o && o, (function(t3, e2, n3, r3) {
        if (true === e2 && true === r3) throw new I2(b.INVALID_ARGUMENT, "experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.");
      })(0, t2.experimentalForceLongPolling, 0, t2.experimentalAutoDetectLongPolling);
    }
    return t.prototype.isEqual = function(t2) {
      return this.host === t2.host && this.ssl === t2.ssl && this.timestampsInSnapshots === t2.timestampsInSnapshots && this.credentials === t2.credentials && this.cacheSizeBytes === t2.cacheSizeBytes && this.experimentalForceLongPolling === t2.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t2.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t2.ignoreUndefinedProperties;
    }, t;
  })()
);
var ca2 = (
  /** @class */
  (function() {
    function t(r2, i2, o, s) {
      var u2 = this;
      if (void 0 === o && (o = new Iu()), void 0 === s && (s = new _u()), this.rf = o, this.af = s, this.cf = null, // Public for use in tests.
      // TODO(mikelehen): Use modularized initialization instead.
      this.uf = new jr(), this.INTERNAL = {
        delete: function() {
          return __awaiter2(u2, void 0, void 0, (function() {
            return __generator2(this, (function(t2) {
              switch (t2.label) {
                case 0:
                  return this.hf(), [4, this.lf.terminate()];
                case 1:
                  return t2.sent(), [
                    2
                    /*return*/
                  ];
              }
            }));
          }));
        }
      }, "object" == typeof r2.options) {
        var a = r2;
        this.cf = a, this.__ = t._f(a), this.ff = a.name, this.df = new Ko(i2);
      } else {
        var c = r2;
        if (!c.projectId) throw new I2(b.INVALID_ARGUMENT, "Must provide projectId");
        this.__ = new vt(c.projectId, c.database), // Use a default persistenceKey that lines up with FirebaseApp.
        this.ff = "[DEFAULT]", this.df = new Bo();
      }
      this.wf = new aa2({});
    }
    return Object.defineProperty(t.prototype, "mf", {
      get: function() {
        return this.Tf || // Lazy initialize UserDataReader once the settings are frozen
        (this.Tf = new zu(this.__, this.wf.ignoreUndefinedProperties)), this.Tf;
      },
      enumerable: false,
      configurable: true
    }), t.prototype.settings = function(t2) {
      q2("Firestore.settings", arguments, 1), z("Firestore.settings", "object", 1, t2), t2.merge && // Remove the property from the settings once the merge is completed
      delete (t2 = Object.assign(Object.assign({}, this.wf), t2)).merge;
      var e = new aa2(t2);
      if (this.lf && !this.wf.isEqual(e)) throw new I2(b.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
      this.wf = e, void 0 !== e.credentials && (this.df = (function(t3) {
        if (!t3) return new Bo();
        switch (t3.type) {
          case "gapi":
            var e2 = t3.client;
            return k2(!("object" != typeof e2 || null === e2 || !e2.auth || !e2.auth.getAuthHeaderValueForFirstParty)), new Qo(e2, t3.sessionIndex || "0");
          case "provider":
            return t3.client;
          default:
            throw new I2(b.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
        }
      })(e.credentials));
    }, t.prototype.enableNetwork = function() {
      return this.hf(), this.lf.enableNetwork();
    }, t.prototype.disableNetwork = function() {
      return this.hf(), this.lf.disableNetwork();
    }, t.prototype.enablePersistence = function(t2) {
      var e, n2;
      if (this.lf) throw new I2(b.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
      var r2 = false, i2 = false;
      if (t2 && (void 0 !== t2.experimentalTabSynchronization && N2("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), r2 = null !== (n2 = null !== (e = t2.synchronizeTabs) && void 0 !== e ? e : t2.experimentalTabSynchronization) && void 0 !== n2 && n2, i2 = !!t2.experimentalForceOwningTab && t2.experimentalForceOwningTab, r2 && i2)) throw new I2(b.INVALID_ARGUMENT, "The 'experimentalForceOwningTab' setting cannot be used with 'synchronizeTabs'.");
      return this.Ef(this.rf, this.af, {
        jl: true,
        cacheSizeBytes: this.wf.cacheSizeBytes,
        synchronizeTabs: r2,
        ka: i2
      });
    }, t.prototype.clearPersistence = function() {
      return __awaiter2(this, void 0, void 0, (function() {
        var t2, r2 = this;
        return __generator2(this, (function(i2) {
          if (void 0 !== this.lf && !this.lf.z_) throw new I2(b.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
          return t2 = new Ar(), [2, (this.uf.bs((function() {
            return __awaiter2(r2, void 0, void 0, (function() {
              var e;
              return __generator2(this, (function(n2) {
                switch (n2.label) {
                  case 0:
                    return n2.trys.push([0, 2, , 3]), [4, this.rf.clearPersistence(this.__, this.ff)];
                  case 1:
                    return n2.sent(), t2.resolve(), [3, 3];
                  case 2:
                    return e = n2.sent(), t2.reject(e), [3, 3];
                  case 3:
                    return [
                      2
                      /*return*/
                    ];
                }
              }));
            }));
          })), t2.promise)];
        }));
      }));
    }, t.prototype.terminate = function() {
      return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete();
    }, Object.defineProperty(t.prototype, "If", {
      get: function() {
        return this.hf(), this.lf.z_;
      },
      enumerable: false,
      configurable: true
    }), t.prototype.waitForPendingWrites = function() {
      return this.hf(), this.lf.waitForPendingWrites();
    }, t.prototype.onSnapshotsInSync = function(t2) {
      if (this.hf(), oa2(t2)) return this.lf.G_(t2);
      z("Firestore.onSnapshotsInSync", "function", 1, t2);
      var e = {
        next: t2
      };
      return this.lf.G_(e);
    }, t.prototype.hf = function() {
      return this.lf || // Kick off starting the client but don't actually wait for it.
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.Ef(new Iu(), new _u(), {
        jl: false
      }), this.lf;
    }, t.prototype.Af = function() {
      return new dt(this.__, this.ff, this.wf.host, this.wf.ssl, this.wf.experimentalForceLongPolling, this.wf.experimentalAutoDetectLongPolling);
    }, t.prototype.Ef = function(t2, e, n2) {
      var r2 = this.Af();
      return this.lf = new ia(this.df, this.uf), this.lf.start(r2, t2, e, n2);
    }, t._f = function(t2) {
      if (e = t2.options, "projectId", !Object.prototype.hasOwnProperty.call(e, "projectId")) throw new I2(b.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
      var e, n2 = t2.options.projectId;
      if (!n2 || "string" != typeof n2) throw new I2(b.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
      return new vt(n2);
    }, Object.defineProperty(t.prototype, "app", {
      get: function() {
        if (!this.cf) throw new I2(b.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
        return this.cf;
      },
      enumerable: false,
      configurable: true
    }), t.prototype.collection = function(t2) {
      return q2("Firestore.collection", arguments, 1), z("Firestore.collection", "non-empty string", 1, t2), this.hf(), new Ta(
        V2.g(t2),
        this,
        /* converter= */
        null
      );
    }, t.prototype.doc = function(t2) {
      return q2("Firestore.doc", arguments, 1), z("Firestore.doc", "non-empty string", 1, t2), this.hf(), la2.Rf(
        V2.g(t2),
        this,
        /* converter= */
        null
      );
    }, t.prototype.collectionGroup = function(t2) {
      if (q2("Firestore.collectionGroup", arguments, 1), z("Firestore.collectionGroup", "non-empty string", 1, t2), t2.indexOf("/") >= 0) throw new I2(b.INVALID_ARGUMENT, "Invalid collection ID '" + t2 + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
      return this.hf(), new Ea2(
        /**
        * Creates a new Query for a collection group query that matches all documents
        * within the provided collection group.
        */
        (function(t3) {
          return new Wn(V2.P(), t3);
        })(t2),
        this,
        /* converter= */
        null
      );
    }, t.prototype.runTransaction = function(t2) {
      var e = this;
      return q2("Firestore.runTransaction", arguments, 1), z("Firestore.runTransaction", "function", 1, t2), this.hf().transaction((function(n2) {
        return t2(new ha2(e, n2));
      }));
    }, t.prototype.batch = function() {
      return this.hf(), new fa2(this);
    }, Object.defineProperty(t, "logLevel", {
      get: function() {
        switch (_()) {
          case LogLevel.DEBUG:
            return "debug";
          case LogLevel.ERROR:
            return "error";
          case LogLevel.SILENT:
            return "silent";
          case LogLevel.WARN:
            return "warn";
          case LogLevel.INFO:
            return "info";
          case LogLevel.VERBOSE:
            return "verbose";
          default:
            return "error";
        }
      },
      enumerable: false,
      configurable: true
    }), t.setLogLevel = function(t2) {
      var e;
      q2("Firestore.setLogLevel", arguments, 1), H2("setLogLevel", ["debug", "error", "silent", "warn", "info", "verbose"], 1, t2), e = t2, E2.setLogLevel(e);
    }, // Note: this is not a property because the minifier can't work correctly with
    // the way TypeScript compiler outputs properties.
    t.prototype.gf = function() {
      return this.wf.timestampsInSnapshots;
    }, // Visible for testing.
    t.prototype.Pf = function() {
      return this.wf;
    }, t;
  })()
);
var ha2 = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.yf = t2, this.Vf = e;
    }
    return t.prototype.get = function(t2) {
      var e = this;
      q2("Transaction.get", arguments, 1);
      var n2 = Da2("Transaction.get", t2, this.yf);
      return this.Vf.v_([n2.f_]).then((function(t3) {
        if (!t3 || 1 !== t3.length) return D2();
        var r2 = t3[0];
        if (r2 instanceof Bn) return new da2(
          e.yf,
          n2.f_,
          null,
          /* fromCache= */
          false,
          /* hasPendingWrites= */
          false,
          n2.d_
        );
        if (r2 instanceof zn) return new da2(
          e.yf,
          n2.f_,
          r2,
          /* fromCache= */
          false,
          /* hasPendingWrites= */
          false,
          n2.d_
        );
        throw D2();
      }));
    }, t.prototype.set = function(t2, e, n2) {
      G2("Transaction.set", arguments, 2, 3);
      var r2 = Da2("Transaction.set", t2, this.yf);
      n2 = Na2("Transaction.set", n2);
      var i2 = xa2(r2.d_, e, n2), o = Bu(this.yf.mf, "Transaction.set", r2.f_, i2, null !== r2.d_, n2);
      return this.Vf.set(r2.f_, o), this;
    }, t.prototype.update = function(t2, e, n2) {
      for (var r2, i2, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
      return "string" == typeof e || e instanceof Au ? (j("Transaction.update", arguments, 3), r2 = Da2("Transaction.update", t2, this.yf), i2 = Wu(this.yf.mf, "Transaction.update", r2.f_, e, n2, o)) : (q2("Transaction.update", arguments, 2), r2 = Da2("Transaction.update", t2, this.yf), i2 = Ku(this.yf.mf, "Transaction.update", r2.f_, e)), this.Vf.update(r2.f_, i2), this;
    }, t.prototype.delete = function(t2) {
      q2("Transaction.delete", arguments, 1);
      var e = Da2("Transaction.delete", t2, this.yf);
      return this.Vf.delete(e.f_), this;
    }, t;
  })()
);
var fa2 = (
  /** @class */
  (function() {
    function t(t2) {
      this.yf = t2, this.pf = [], this.bf = false;
    }
    return t.prototype.set = function(t2, e, n2) {
      G2("WriteBatch.set", arguments, 2, 3), this.vf();
      var r2 = Da2("WriteBatch.set", t2, this.yf);
      n2 = Na2("WriteBatch.set", n2);
      var i2 = xa2(r2.d_, e, n2), o = Bu(this.yf.mf, "WriteBatch.set", r2.f_, i2, null !== r2.d_, n2);
      return this.pf = this.pf.concat(o.w_(r2.f_, _n.ze())), this;
    }, t.prototype.update = function(t2, e, n2) {
      for (var r2, i2, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
      return this.vf(), "string" == typeof e || e instanceof Au ? (j("WriteBatch.update", arguments, 3), r2 = Da2("WriteBatch.update", t2, this.yf), i2 = Wu(this.yf.mf, "WriteBatch.update", r2.f_, e, n2, o)) : (q2("WriteBatch.update", arguments, 2), r2 = Da2("WriteBatch.update", t2, this.yf), i2 = Ku(this.yf.mf, "WriteBatch.update", r2.f_, e)), this.pf = this.pf.concat(i2.w_(r2.f_, _n.exists(true))), this;
    }, t.prototype.delete = function(t2) {
      q2("WriteBatch.delete", arguments, 1), this.vf();
      var e = Da2("WriteBatch.delete", t2, this.yf);
      return this.pf = this.pf.concat(new Cn(e.f_, _n.ze())), this;
    }, t.prototype.commit = function() {
      return this.vf(), this.bf = true, this.pf.length > 0 ? this.yf.hf().write(this.pf) : Promise.resolve();
    }, t.prototype.vf = function() {
      if (this.bf) throw new I2(b.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }, t;
  })()
);
var la2 = (
  /** @class */
  (function(e) {
    function n2(t, n3, r2) {
      var i2 = this;
      return (i2 = e.call(this, n3.__, t, r2) || this).f_ = t, i2.firestore = n3, i2.d_ = r2, i2.lf = i2.firestore.hf(), i2;
    }
    return __extends2(n2, e), n2.Rf = function(t, e2, r2) {
      if (t.length % 2 != 0) throw new I2(b.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.R() + " has " + t.length);
      return new n2(new F2(t), e2, r2);
    }, Object.defineProperty(n2.prototype, "id", {
      get: function() {
        return this.f_.path._();
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(n2.prototype, "parent", {
      get: function() {
        return new Ta(this.f_.path.h(), this.firestore, this.d_);
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(n2.prototype, "path", {
      get: function() {
        return this.f_.path.R();
      },
      enumerable: false,
      configurable: true
    }), n2.prototype.collection = function(t) {
      if (q2("DocumentReference.collection", arguments, 1), z("DocumentReference.collection", "non-empty string", 1, t), !t) throw new I2(b.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
      var e2 = V2.g(t);
      return new Ta(
        this.f_.path.child(e2),
        this.firestore,
        /* converter= */
        null
      );
    }, n2.prototype.isEqual = function(t) {
      if (!(t instanceof n2)) throw tt("isEqual", "DocumentReference", 1, t);
      return this.firestore === t.firestore && this.f_.isEqual(t.f_) && this.d_ === t.d_;
    }, n2.prototype.set = function(t, e2) {
      G2("DocumentReference.set", arguments, 1, 2), e2 = Na2("DocumentReference.set", e2);
      var n3 = xa2(this.d_, t, e2), r2 = Bu(this.firestore.mf, "DocumentReference.set", this.f_, n3, null !== this.d_, e2);
      return this.lf.write(r2.w_(this.f_, _n.ze()));
    }, n2.prototype.update = function(t, e2) {
      for (var n3, r2 = [], i2 = 2; i2 < arguments.length; i2++) r2[i2 - 2] = arguments[i2];
      return "string" == typeof t || t instanceof Au ? (j("DocumentReference.update", arguments, 2), n3 = Wu(this.firestore.mf, "DocumentReference.update", this.f_, t, e2, r2)) : (q2("DocumentReference.update", arguments, 1), n3 = Ku(this.firestore.mf, "DocumentReference.update", this.f_, t)), this.lf.write(n3.w_(this.f_, _n.exists(true)));
    }, n2.prototype.delete = function() {
      return q2("DocumentReference.delete", arguments, 0), this.lf.write([new Cn(this.f_, _n.ze())]);
    }, n2.prototype.onSnapshot = function() {
      for (var t, e2, n3, r2 = this, i2 = [], o = 0; o < arguments.length; o++) i2[o] = arguments[o];
      G2("DocumentReference.onSnapshot", arguments, 1, 4);
      var s = {
        includeMetadataChanges: false
      }, u2 = 0;
      "object" != typeof i2[u2] || oa2(i2[u2]) || (Z2("DocumentReference.onSnapshot", s = i2[u2], ["includeMetadataChanges"]), W2("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), u2++);
      var a = {
        includeMetadataChanges: s.includeMetadataChanges
      };
      if (oa2(i2[u2])) {
        var c = i2[u2];
        i2[u2] = null === (t = c.next) || void 0 === t ? void 0 : t.bind(c), i2[u2 + 1] = null === (e2 = c.error) || void 0 === e2 ? void 0 : e2.bind(c), i2[u2 + 2] = null === (n3 = c.complete) || void 0 === n3 ? void 0 : n3.bind(c);
      } else z("DocumentReference.onSnapshot", "function", u2, i2[u2]), B("DocumentReference.onSnapshot", "function", u2 + 1, i2[u2 + 1]), B("DocumentReference.onSnapshot", "function", u2 + 2, i2[u2 + 2]);
      var h = {
        next: function(t2) {
          i2[u2] && i2[u2](r2.Sf(t2));
        },
        error: i2[u2 + 1],
        complete: i2[u2 + 2]
      };
      return this.lf.listen(Hn(this.f_.path), a, h);
    }, n2.prototype.get = function(t) {
      var e2 = this;
      G2("DocumentReference.get", arguments, 0, 1), Sa2("DocumentReference.get", t);
      var n3 = this.firestore.hf();
      return t && "cache" === t.source ? n3.Q_(this.f_).then((function(t2) {
        return new da2(
          e2.firestore,
          e2.f_,
          t2,
          /*fromCache=*/
          true,
          t2 instanceof zn && t2.Je,
          e2.d_
        );
      })) : n3.W_(this.f_, t).then((function(t2) {
        return e2.Sf(t2);
      }));
    }, n2.prototype.withConverter = function(t) {
      return new n2(this.f_, this.firestore, t);
    }, /**
     * Converts a ViewSnapshot that contains the current document to a
     * DocumentSnapshot.
     */
    n2.prototype.Sf = function(t) {
      var e2 = t.docs.get(this.f_);
      return new da2(this.firestore, this.f_, e2, t.fromCache, t.hasPendingWrites, this.d_);
    }, n2;
  })(Fu)
);
var pa2 = (
  /** @class */
  (function() {
    function t(t2, e) {
      this.hasPendingWrites = t2, this.fromCache = e;
    }
    return t.prototype.isEqual = function(t2) {
      return this.hasPendingWrites === t2.hasPendingWrites && this.fromCache === t2.fromCache;
    }, t;
  })()
);
var da2 = (
  /** @class */
  (function() {
    function t(t2, e, n2, r2, i2, o) {
      this.yf = t2, this.f_ = e, this.Df = n2, this.Cf = r2, this.Nf = i2, this.d_ = o;
    }
    return t.prototype.data = function(t2) {
      var e = this;
      if (G2("DocumentSnapshot.data", arguments, 0, 1), t2 = Aa2("DocumentSnapshot.data", t2), this.Df) {
        if (this.d_) {
          var n2 = new va(
            this.yf,
            this.f_,
            this.Df,
            this.Cf,
            this.Nf,
            /* converter= */
            null
          );
          return this.d_.fromFirestore(n2, t2);
        }
        return new sa2(this.yf.__, this.yf.gf(), t2.serverTimestamps || "none", (function(t3) {
          return new la2(
            t3,
            e.yf,
            /* converter= */
            null
          );
        }), (function(t3) {
          return new pt(t3);
        })).X_(this.Df.rn());
      }
    }, t.prototype.get = function(t2, e) {
      var n2 = this;
      if (G2("DocumentSnapshot.get", arguments, 1, 2), e = Aa2("DocumentSnapshot.get", e), this.Df) {
        var r2 = this.Df.data().field(Ju("DocumentSnapshot.get", t2, this.f_));
        if (null !== r2) return new sa2(this.yf.__, this.yf.gf(), e.serverTimestamps || "none", (function(t3) {
          return new la2(t3, n2.yf, n2.d_);
        }), (function(t3) {
          return new pt(t3);
        })).X_(r2);
      }
    }, Object.defineProperty(t.prototype, "id", {
      get: function() {
        return this.f_.path._();
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "ref", {
      get: function() {
        return new la2(this.f_, this.yf, this.d_);
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "exists", {
      get: function() {
        return null !== this.Df;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "metadata", {
      get: function() {
        return new pa2(this.Nf, this.Cf);
      },
      enumerable: false,
      configurable: true
    }), t.prototype.isEqual = function(e) {
      if (!(e instanceof t)) throw tt("isEqual", "DocumentSnapshot", 1, e);
      return this.yf === e.yf && this.Cf === e.Cf && this.f_.isEqual(e.f_) && (null === this.Df ? null === e.Df : this.Df.isEqual(e.Df)) && this.d_ === e.d_;
    }, t;
  })()
);
var va = (
  /** @class */
  (function(e) {
    function n2() {
      return null !== e && e.apply(this, arguments) || this;
    }
    return __extends2(n2, e), n2.prototype.data = function(t) {
      return e.prototype.data.call(this, t);
    }, n2;
  })(da2)
);
function ya(t, e, n2, r2, i2, o, s) {
  var u2;
  if (i2.p()) {
    if ("array-contains" === o || "array-contains-any" === o) throw new I2(b.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");
    if ("in" === o || "not-in" === o) {
      wa(s, o);
      for (var a = [], c = 0, h = s; c < h.length; c++) {
        var f = h[c];
        a.push(ga(r2, t, f));
      }
      u2 = {
        arrayValue: {
          values: a
        }
      };
    } else u2 = ga(r2, t, s);
  } else "in" !== o && "not-in" !== o && "array-contains-any" !== o || wa(s, o), u2 = Qu(
    n2,
    e,
    s,
    /* allowArrays= */
    "in" === o || "not-in" === o
  );
  var l = hr.create(i2, o, u2);
  return (function(t2, e2) {
    if (e2.hn()) {
      var n3 = Jn(t2);
      if (null !== n3 && !n3.isEqual(e2.field)) throw new I2(b.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + n3.toString() + "' and '" + e2.field.toString() + "'");
      var r3 = Xn(t2);
      null !== r3 && ba2(t2, e2.field, r3);
    }
    var i3 = (function(t3, e3) {
      for (var n4 = 0, r4 = t3.filters; n4 < r4.length; n4++) {
        var i4 = r4[n4];
        if (e3.indexOf(i4.op) >= 0) return i4.op;
      }
      return null;
    })(
      t2,
      /**
      * Given an operator, returns the set of operators that cannot be used with it.
      *
      * Operators in a query must adhere to the following set of rules:
      * 1. Only one array operator is allowed.
      * 2. Only one disjunctive operator is allowed.
      * 3. NOT_EQUAL cannot be used with another NOT_EQUAL operator.
      * 4. NOT_IN cannot be used with array, disjunctive, or NOT_EQUAL operators.
      *
      * Array operators: ARRAY_CONTAINS, ARRAY_CONTAINS_ANY
      * Disjunctive operators: IN, ARRAY_CONTAINS_ANY, NOT_IN
      */
      (function(t3) {
        switch (t3) {
          case "!=":
            return [
              "!=",
              "not-in"
              /* NOT_IN */
            ];
          case "array-contains":
            return [
              "array-contains",
              "array-contains-any",
              "not-in"
              /* NOT_IN */
            ];
          case "in":
            return [
              "array-contains-any",
              "in",
              "not-in"
              /* NOT_IN */
            ];
          case "array-contains-any":
            return [
              "array-contains",
              "array-contains-any",
              "in",
              "not-in"
              /* NOT_IN */
            ];
          case "not-in":
            return [
              "array-contains",
              "array-contains-any",
              "in",
              "not-in",
              "!="
              /* NOT_EQUAL */
            ];
          default:
            return [];
        }
      })(e2.op)
    );
    if (null !== i3)
      throw i3 === e2.op ? new I2(b.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e2.op.toString() + "' filter.") : new I2(b.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e2.op.toString() + "' filters with '" + i3.toString() + "' filters.");
  })(t, l), l;
}
function ma(t, e, n2) {
  if (null !== t.startAt) throw new I2(b.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
  if (null !== t.endAt) throw new I2(b.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
  var r2 = new _r(e, n2);
  return (function(t2, e2) {
    if (null === Xn(t2)) {
      var n3 = Jn(t2);
      null !== n3 && ba2(t2, n3, e2.field);
    }
  })(t, r2), r2;
}
function ga(t, e, n2) {
  if ("string" == typeof n2) {
    if ("" === n2) throw new I2(b.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!Zn(e) && -1 !== n2.indexOf("/")) throw new I2(b.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n2 + "' contains a '/' character.");
    var r2 = e.path.child(V2.g(n2));
    if (!F2.F(r2)) throw new I2(b.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r2 + "' is not because it has an odd number of segments (" + r2.length + ").");
    return be(t, new F2(r2));
  }
  if (n2 instanceof Fu) return be(t, n2.f_);
  throw new I2(b.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + X2(n2) + ".");
}
function wa(t, e) {
  if (!Array.isArray(t) || 0 === t.length) throw new I2(b.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
  if (t.length > 10) throw new I2(b.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
  if ("in" === e || "array-contains-any" === e) {
    if (t.indexOf(null) >= 0) throw new I2(b.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
    if (t.filter((function(t2) {
      return Number.isNaN(t2);
    })).length > 0) throw new I2(b.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.");
  }
}
function ba2(t, e, n2) {
  if (!n2.isEqual(e)) throw new I2(b.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first orderBy(), but your first orderBy() is on field '" + n2.toString() + "' instead.");
}
function Ia2(t) {
  if ($n(t) && 0 === t.on.length) throw new I2(b.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}
var Ea2 = (
  /** @class */
  (function() {
    function t(t2, e, n2) {
      this.Ff = t2, this.firestore = e, this.d_ = n2;
    }
    return t.prototype.where = function(e, n2, r2) {
      q2("Query.where", arguments, 3), J2("Query.where", 3, r2);
      var i2 = H2("Query.where", [
        "<",
        "<=",
        "==",
        "!=",
        ">=",
        ">",
        "array-contains",
        "in",
        "array-contains-any",
        "not-in"
        /* NOT_IN */
      ], 2, n2), o = Ju("Query.where", e), s = ya(this.Ff, "Query.where", this.firestore.mf, this.firestore.__, o, i2, r2);
      return new t((function(t2, e2) {
        var n3 = t2.filters.concat([e2]);
        return new Wn(t2.path, t2.collectionGroup, t2.on.slice(), n3, t2.limit, t2.an, t2.startAt, t2.endAt);
      })(this.Ff, s), this.firestore, this.d_);
    }, t.prototype.orderBy = function(e, n2) {
      var r2;
      if (G2("Query.orderBy", arguments, 1, 2), B("Query.orderBy", "non-empty string", 2, n2), void 0 === n2 || "asc" === n2) r2 = "asc";
      else {
        if ("desc" !== n2) throw new I2(b.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + n2 + "', expected 'asc' or 'desc'.");
        r2 = "desc";
      }
      var i2 = Ju("Query.orderBy", e), o = ma(this.Ff, i2, r2);
      return new t((function(t2, e2) {
        var n3 = t2.on.concat([e2]);
        return new Wn(t2.path, t2.collectionGroup, n3, t2.filters.slice(), t2.limit, t2.an, t2.startAt, t2.endAt);
      })(this.Ff, o), this.firestore, this.d_);
    }, t.prototype.limit = function(e) {
      return q2("Query.limit", arguments, 1), z("Query.limit", "number", 1, e), et("Query.limit", 1, e), new t(nr(
        this.Ff,
        e,
        "F"
        /* First */
      ), this.firestore, this.d_);
    }, t.prototype.limitToLast = function(e) {
      return q2("Query.limitToLast", arguments, 1), z("Query.limitToLast", "number", 1, e), et("Query.limitToLast", 1, e), new t(nr(
        this.Ff,
        e,
        "L"
        /* Last */
      ), this.firestore, this.d_);
    }, t.prototype.startAt = function(e) {
      for (var n2 = [], r2 = 1; r2 < arguments.length; r2++) n2[r2 - 1] = arguments[r2];
      j("Query.startAt", arguments, 1);
      var i2 = this.xf(
        "Query.startAt",
        e,
        n2,
        /*before=*/
        true
      );
      return new t(rr(this.Ff, i2), this.firestore, this.d_);
    }, t.prototype.startAfter = function(e) {
      for (var n2 = [], r2 = 1; r2 < arguments.length; r2++) n2[r2 - 1] = arguments[r2];
      j("Query.startAfter", arguments, 1);
      var i2 = this.xf(
        "Query.startAfter",
        e,
        n2,
        /*before=*/
        false
      );
      return new t(rr(this.Ff, i2), this.firestore, this.d_);
    }, t.prototype.endBefore = function(e) {
      for (var n2 = [], r2 = 1; r2 < arguments.length; r2++) n2[r2 - 1] = arguments[r2];
      j("Query.endBefore", arguments, 1);
      var i2 = this.xf(
        "Query.endBefore",
        e,
        n2,
        /*before=*/
        true
      );
      return new t(ir(this.Ff, i2), this.firestore, this.d_);
    }, t.prototype.endAt = function(e) {
      for (var n2 = [], r2 = 1; r2 < arguments.length; r2++) n2[r2 - 1] = arguments[r2];
      j("Query.endAt", arguments, 1);
      var i2 = this.xf(
        "Query.endAt",
        e,
        n2,
        /*before=*/
        false
      );
      return new t(ir(this.Ff, i2), this.firestore, this.d_);
    }, t.prototype.isEqual = function(e) {
      if (!(e instanceof t)) throw tt("isEqual", "Query", 1, e);
      return this.firestore === e.firestore && or(this.Ff, e.Ff) && this.d_ === e.d_;
    }, t.prototype.withConverter = function(e) {
      return new t(this.Ff, this.firestore, e);
    }, /** Helper function to create a bound from a document or fields */
    t.prototype.xf = function(t2, e, n2, i2) {
      if (J2(t2, 1, e), e instanceof da2) return q2(t2, __spreadArrays([e], n2), 1), (function(t3, e2, n3, r2, i3) {
        if (!r2) throw new I2(b.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n3 + "().");
        for (var o2 = [], s = 0, u2 = tr(t3); s < u2.length; s++) {
          var a = u2[s];
          if (a.field.p()) o2.push(be(e2, r2.key));
          else {
            var c = r2.field(a.field);
            if (se(c)) throw new I2(b.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + a.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
            if (null === c) {
              var h = a.field.R();
              throw new I2(b.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + h + "' (used as the orderBy) does not exist.");
            }
            o2.push(c);
          }
        }
        return new wr(o2, i3);
      })(this.Ff, this.firestore.__, t2, e.Df, i2);
      var o = [e].concat(n2);
      return (function(t3, e2, n3, r2, i3, o2) {
        var s = t3.on;
        if (i3.length > s.length) throw new I2(b.INVALID_ARGUMENT, "Too many arguments provided to " + r2 + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");
        for (var u2 = [], a = 0; a < i3.length; a++) {
          var c = i3[a];
          if (s[a].field.p()) {
            if ("string" != typeof c) throw new I2(b.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r2 + "(), but got a " + typeof c);
            if (!Zn(t3) && -1 !== c.indexOf("/")) throw new I2(b.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r2 + "() must be a plain document ID, but '" + c + "' contains a slash.");
            var h = t3.path.child(V2.g(c));
            if (!F2.F(h)) throw new I2(b.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r2 + "() must result in a valid document path, but '" + h + "' is not because it contains an odd number of segments.");
            var f = new F2(h);
            u2.push(be(e2, f));
          } else {
            var l = Qu(n3, r2, c);
            u2.push(l);
          }
        }
        return new wr(u2, o2);
      })(this.Ff, this.firestore.__, this.firestore.mf, t2, o, i2);
    }, t.prototype.onSnapshot = function() {
      for (var t2, e, n2, r2 = this, i2 = [], o = 0; o < arguments.length; o++) i2[o] = arguments[o];
      G2("Query.onSnapshot", arguments, 1, 4);
      var s = {}, u2 = 0;
      if ("object" != typeof i2[u2] || oa2(i2[u2]) || (Z2("Query.onSnapshot", s = i2[u2], ["includeMetadataChanges"]), W2("Query.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), u2++), oa2(i2[u2])) {
        var a = i2[u2];
        i2[u2] = null === (t2 = a.next) || void 0 === t2 ? void 0 : t2.bind(a), i2[u2 + 1] = null === (e = a.error) || void 0 === e ? void 0 : e.bind(a), i2[u2 + 2] = null === (n2 = a.complete) || void 0 === n2 ? void 0 : n2.bind(a);
      } else z("Query.onSnapshot", "function", u2, i2[u2]), B("Query.onSnapshot", "function", u2 + 1, i2[u2 + 1]), B("Query.onSnapshot", "function", u2 + 2, i2[u2 + 2]);
      var c = {
        next: function(t3) {
          i2[u2] && i2[u2](new _a(r2.firestore, r2.Ff, t3, r2.d_));
        },
        error: i2[u2 + 1],
        complete: i2[u2 + 2]
      };
      return Ia2(this.Ff), this.firestore.hf().listen(this.Ff, s, c);
    }, t.prototype.get = function(t2) {
      var e = this;
      G2("Query.get", arguments, 0, 1), Sa2("Query.get", t2), Ia2(this.Ff);
      var n2 = this.firestore.hf();
      return (t2 && "cache" === t2.source ? n2.j_(this.Ff) : n2.K_(this.Ff, t2)).then((function(t3) {
        return new _a(e.firestore, e.Ff, t3, e.d_);
      }));
    }, t;
  })()
);
var _a = (
  /** @class */
  (function() {
    function t(t2, e, n2, r2) {
      this.yf = t2, this.$f = e, this.kf = n2, this.d_ = r2, this.Mf = null, this.Of = null, this.metadata = new pa2(n2.hasPendingWrites, n2.fromCache);
    }
    return Object.defineProperty(t.prototype, "docs", {
      get: function() {
        var t2 = [];
        return this.forEach((function(e) {
          return t2.push(e);
        })), t2;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "empty", {
      get: function() {
        return this.kf.docs.m();
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "size", {
      get: function() {
        return this.kf.docs.size;
      },
      enumerable: false,
      configurable: true
    }), t.prototype.forEach = function(t2, e) {
      var n2 = this;
      G2("QuerySnapshot.forEach", arguments, 1, 2), z("QuerySnapshot.forEach", "function", 1, t2), this.kf.docs.forEach((function(r2) {
        t2.call(e, n2.Lf(r2, n2.metadata.fromCache, n2.kf.Wt.has(r2.key)));
      }));
    }, Object.defineProperty(t.prototype, "query", {
      get: function() {
        return new Ea2(this.$f, this.yf, this.d_);
      },
      enumerable: false,
      configurable: true
    }), t.prototype.docChanges = function(t2) {
      t2 && (Z2("QuerySnapshot.docChanges", t2, ["includeMetadataChanges"]), W2("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t2.includeMetadataChanges));
      var e = !(!t2 || !t2.includeMetadataChanges);
      if (e && this.kf.Kt) throw new I2(b.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
      return this.Mf && this.Of === e || (this.Mf = /**
      * Calculates the array of DocumentChanges for a given ViewSnapshot.
      *
      * Exported for testing.
      *
      * @param snapshot The ViewSnapshot that represents the expected state.
      * @param includeMetadataChanges Whether to include metadata changes.
      * @param converter A factory function that returns a QueryDocumentSnapshot.
      * @return An object that matches the DocumentChange API.
      */
      (function(t3, e2, n2) {
        if (t3.Qt.m()) {
          var r2 = 0;
          return t3.docChanges.map((function(e3) {
            var i3 = n2(e3.doc, t3.fromCache, t3.Wt.has(e3.doc.key));
            return e3.doc, {
              type: "added",
              doc: i3,
              oldIndex: -1,
              newIndex: r2++
            };
          }));
        }
        var i2 = t3.Qt;
        return t3.docChanges.filter((function(t4) {
          return e2 || 3 !== t4.type;
        })).map((function(e3) {
          var r3 = n2(e3.doc, t3.fromCache, t3.Wt.has(e3.doc.key)), o = -1, s = -1;
          return 0 !== e3.type && (o = i2.indexOf(e3.doc.key), i2 = i2.delete(e3.doc.key)), 1 !== e3.type && (s = (i2 = i2.add(e3.doc)).indexOf(e3.doc.key)), {
            type: ka2(e3.type),
            doc: r3,
            oldIndex: o,
            newIndex: s
          };
        }));
      })(this.kf, e, this.Lf.bind(this)), this.Of = e), this.Mf;
    }, /** Check the equality. The call can be very expensive. */
    t.prototype.isEqual = function(e) {
      if (!(e instanceof t)) throw tt("isEqual", "QuerySnapshot", 1, e);
      return this.yf === e.yf && or(this.$f, e.$f) && this.kf.isEqual(e.kf) && this.d_ === e.d_;
    }, t.prototype.Lf = function(t2, e, n2) {
      return new va(this.yf, t2.key, t2, e, n2, this.d_);
    }, t;
  })()
);
var Ta = (
  /** @class */
  (function(e) {
    function n2(t, n3, r2) {
      var i2 = this;
      if ((i2 = e.call(this, Hn(t), n3, r2) || this).Bf = t, t.length % 2 != 1) throw new I2(b.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t.R() + " has " + t.length);
      return i2;
    }
    return __extends2(n2, e), Object.defineProperty(n2.prototype, "id", {
      get: function() {
        return this.Ff.path._();
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(n2.prototype, "parent", {
      get: function() {
        var t = this.Ff.path.h();
        return t.m() ? null : new la2(
          new F2(t),
          this.firestore,
          /* converter= */
          null
        );
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(n2.prototype, "path", {
      get: function() {
        return this.Ff.path.R();
      },
      enumerable: false,
      configurable: true
    }), n2.prototype.doc = function(t) {
      G2("CollectionReference.doc", arguments, 0, 1), // We allow omission of 'pathString' but explicitly prohibit passing in both
      // 'undefined' and 'null'.
      0 === arguments.length && (t = ot.k()), z("CollectionReference.doc", "non-empty string", 1, t);
      var e2 = V2.g(t);
      return la2.Rf(this.Ff.path.child(e2), this.firestore, this.d_);
    }, n2.prototype.add = function(t) {
      q2("CollectionReference.add", arguments, 1);
      var e2 = this.d_ ? this.d_.toFirestore(t) : t;
      z("CollectionReference.add", "object", 1, e2);
      var n3 = this.doc();
      return new la2(n3.f_, this.firestore, null).set(e2).then((function() {
        return n3;
      }));
    }, n2.prototype.withConverter = function(t) {
      return new n2(this.Bf, this.firestore, t);
    }, n2;
  })(Ea2)
);
function Na2(t, e) {
  if (void 0 === e) return {
    merge: false
  };
  if (Z2(t, e, ["merge", "mergeFields"]), W2(t, "boolean", "merge", e.merge), (function(t2, e2, n2, r2, i2) {
    void 0 !== r2 && (function(t3, e3, n3, r3, i3) {
      if (!(r3 instanceof Array)) throw new I2(b.INVALID_ARGUMENT, "Function " + t3 + "() requires its " + e3 + " option to be an array, but it was: " + X2(r3));
      for (var o = 0; o < r3.length; ++o) if (!i3(r3[o])) throw new I2(b.INVALID_ARGUMENT, "Function " + t3 + "() requires all " + e3 + " elements to be " + n3 + ", but the value at index " + o + " was: " + X2(r3[o]));
    })(t2, e2, n2, r2, i2);
  })(t, "mergeFields", "a string or a FieldPath", e.mergeFields, (function(t2) {
    return "string" == typeof t2 || t2 instanceof Au;
  })), void 0 !== e.mergeFields && void 0 !== e.merge) throw new I2(b.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
  return e;
}
function Aa2(t, e) {
  return void 0 === e ? {} : (Z2(t, e, ["serverTimestamps"]), Q2(t, 0, "serverTimestamps", e.serverTimestamps, ["estimate", "previous", "none"]), e);
}
function Sa2(t, e) {
  B(t, "object", 1, e), e && (Z2(t, e, ["source"]), Q2(t, 0, "source", e.source, ["default", "server", "cache"]));
}
function Da2(t, e, n2) {
  if (e instanceof Fu) {
    if (e.firestore !== n2) throw new I2(b.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
    return e;
  }
  throw tt(t, "DocumentReference", 1, e);
}
function ka2(t) {
  switch (t) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return D2();
  }
}
function xa2(t, e, n2) {
  return t ? n2 && (n2.merge || n2.mergeFields) ? t.toFirestore(e, n2) : t.toFirestore(e) : e;
}
var La2 = (
  /** @class */
  (function(e) {
    function n2() {
      return null !== e && e.apply(this, arguments) || this;
    }
    return __extends2(n2, e), n2.serverTimestamp = function() {
      M2("FieldValue.serverTimestamp", arguments);
      var t = new Lu("serverTimestamp");
      return t.e_ = "FieldValue.serverTimestamp", new n2(t);
    }, n2.delete = function() {
      M2("FieldValue.delete", arguments);
      var t = new ku("deleteField");
      return t.e_ = "FieldValue.delete", new n2(t);
    }, n2.arrayUnion = function() {
      for (var t = [], e2 = 0; e2 < arguments.length; e2++) t[e2] = arguments[e2];
      j("FieldValue.arrayUnion", arguments, 1);
      var r2 = (
        /**
        * Returns a special value that can be used with {@link setDoc()} or {@link
        * updateDoc()} that tells the server to union the given elements with any array
        * value that already exists on the server. Each specified element that doesn't
        * already exist in the array will be added to the end. If the field being
        * modified is not already an array it will be overwritten with an array
        * containing exactly the specified elements.
        *
        * @param elements The elements to union into the array.
        * @return The `FieldValue` sentinel for use in a call to `setDoc()` or
        * `updateDoc()`.
        */
        function() {
          for (var t2 = [], e3 = 0; e3 < arguments.length; e3++) t2[e3] = arguments[e3];
          return j("arrayUnion()", arguments, 1), new Ru("arrayUnion", t2);
        }.apply(void 0, t)
      );
      return r2.e_ = "FieldValue.arrayUnion", new n2(r2);
    }, n2.arrayRemove = function() {
      for (var t = [], e2 = 0; e2 < arguments.length; e2++) t[e2] = arguments[e2];
      j("FieldValue.arrayRemove", arguments, 1);
      var r2 = function() {
        for (var t2 = [], e3 = 0; e3 < arguments.length; e3++) t2[e3] = arguments[e3];
        return j("arrayRemove()", arguments, 1), new Ou("arrayRemove", t2);
      }.apply(void 0, t);
      return r2.e_ = "FieldValue.arrayRemove", new n2(r2);
    }, n2.increment = function(t) {
      z("FieldValue.increment", "number", 1, t), q2("FieldValue.increment", arguments, 1);
      var e2 = (function(t2) {
        return new Pu("increment", t2);
      })(t);
      return e2.e_ = "FieldValue.increment", new n2(e2);
    }, n2.prototype.isEqual = function(t) {
      return this.l_.isEqual(t.l_);
    }, n2;
  })(Uu)
);
var Ra2 = {
  Firestore: ca2,
  GeoPoint: Vu,
  Timestamp: mt,
  Blob: pt,
  Transaction: ha2,
  WriteBatch: fa2,
  DocumentReference: la2,
  DocumentSnapshot: da2,
  Query: Ea2,
  QueryDocumentSnapshot: va,
  QuerySnapshot: _a,
  CollectionReference: Ta,
  FieldPath: Au,
  FieldValue: La2,
  setLogLevel: ca2.setLogLevel,
  CACHE_SIZE_UNLIMITED: ua2
};
function Oa(t) {
  !(function(t2, e) {
    t2.INTERNAL.registerComponent(new Component(
      "firestore",
      (function(t3) {
        return (function(t4, e2) {
          var n2 = new _u(), r2 = new Eu(n2);
          return new ca2(t4, e2, r2, n2);
        })(t3.getProvider("app").getImmediate(), t3.getProvider("auth-internal"));
      }),
      "PUBLIC"
      /* PUBLIC */
    ).setServiceProps(Object.assign({}, Ra2)));
  })(t), t.registerVersion("@firebase/firestore", "1.18.0");
}
Oa(import_app.default);
//# sourceMappingURL=firebase_firestore.js.map
