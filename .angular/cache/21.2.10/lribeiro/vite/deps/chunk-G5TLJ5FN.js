import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "./chunk-S35DAJRX.js";

// node_modules/@firebase/app/node_modules/tslib/tslib.es6.js
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __read: () => __read,
  __rest: () => __rest,
  __spread: () => __spread,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values
});
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
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
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
}
function __exportStar(m, exports) {
  for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function(v) {
      return new Promise(function(a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics, __assign;
var init_tslib_es6 = __esm({
  "node_modules/@firebase/app/node_modules/tslib/tslib.es6.js"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign4(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
  }
});

// node_modules/@firebase/util/node_modules/tslib/tslib.es6.js
var tslib_es6_exports2 = {};
__export(tslib_es6_exports2, {
  __assign: () => __assign2,
  __asyncDelegator: () => __asyncDelegator2,
  __asyncGenerator: () => __asyncGenerator2,
  __asyncValues: () => __asyncValues2,
  __await: () => __await2,
  __awaiter: () => __awaiter2,
  __classPrivateFieldGet: () => __classPrivateFieldGet2,
  __classPrivateFieldSet: () => __classPrivateFieldSet2,
  __createBinding: () => __createBinding2,
  __decorate: () => __decorate2,
  __exportStar: () => __exportStar2,
  __extends: () => __extends2,
  __generator: () => __generator2,
  __importDefault: () => __importDefault2,
  __importStar: () => __importStar2,
  __makeTemplateObject: () => __makeTemplateObject2,
  __metadata: () => __metadata2,
  __param: () => __param2,
  __read: () => __read2,
  __rest: () => __rest2,
  __spread: () => __spread2,
  __spreadArrays: () => __spreadArrays2,
  __values: () => __values2
});
function __extends2(d, b) {
  extendStatics2(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest2(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate2(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param2(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata2(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter2(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
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
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding2(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
}
function __exportStar2(m, exports) {
  for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values2(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read2(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread2() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read2(arguments[i]));
  return ar;
}
function __spreadArrays2() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __await2(v) {
  return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
}
function __asyncGenerator2(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function(v) {
      return new Promise(function(a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator2(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues2(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject2(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar2(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result.default = mod;
  return result;
}
function __importDefault2(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet2(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet2(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics2, __assign2;
var init_tslib_es62 = __esm({
  "node_modules/@firebase/util/node_modules/tslib/tslib.es6.js"() {
    extendStatics2 = function(d, b) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
      };
      return extendStatics2(d, b);
    };
    __assign2 = function() {
      __assign2 = Object.assign || function __assign4(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign2.apply(this, arguments);
    };
  }
});

// node_modules/@firebase/util/dist/index.cjs.js
var require_index_cjs = __commonJS({
  "node_modules/@firebase/util/dist/index.cjs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib = (init_tslib_es62(), __toCommonJS(tslib_es6_exports2));
    var CONSTANTS = {
      /**
       * @define {boolean} Whether this is the client Node.js SDK.
       */
      NODE_CLIENT: false,
      /**
       * @define {boolean} Whether this is the Admin Node.js SDK.
       */
      NODE_ADMIN: false,
      /**
       * Firebase SDK Version
       */
      SDK_VERSION: "${JSCORE_VERSION}"
    };
    var assert = function(assertion, message) {
      if (!assertion) {
        throw assertionError(message);
      }
    };
    var assertionError = function(message) {
      return new Error("Firebase Database (" + CONSTANTS.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + message);
    };
    var stringToByteArray = function(str) {
      var out = [];
      var p = 0;
      for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
          out[p++] = c;
        } else if (c < 2048) {
          out[p++] = c >> 6 | 192;
          out[p++] = c & 63 | 128;
        } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
          c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
          out[p++] = c >> 18 | 240;
          out[p++] = c >> 12 & 63 | 128;
          out[p++] = c >> 6 & 63 | 128;
          out[p++] = c & 63 | 128;
        } else {
          out[p++] = c >> 12 | 224;
          out[p++] = c >> 6 & 63 | 128;
          out[p++] = c & 63 | 128;
        }
      }
      return out;
    };
    var byteArrayToString = function(bytes) {
      var out = [];
      var pos = 0, c = 0;
      while (pos < bytes.length) {
        var c1 = bytes[pos++];
        if (c1 < 128) {
          out[c++] = String.fromCharCode(c1);
        } else if (c1 > 191 && c1 < 224) {
          var c2 = bytes[pos++];
          out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
        } else if (c1 > 239 && c1 < 365) {
          var c2 = bytes[pos++];
          var c3 = bytes[pos++];
          var c4 = bytes[pos++];
          var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
          out[c++] = String.fromCharCode(55296 + (u >> 10));
          out[c++] = String.fromCharCode(56320 + (u & 1023));
        } else {
          var c2 = bytes[pos++];
          var c3 = bytes[pos++];
          out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        }
      }
      return out.join("");
    };
    var base64 = {
      /**
       * Maps bytes to characters.
       */
      byteToCharMap_: null,
      /**
       * Maps characters to bytes.
       */
      charToByteMap_: null,
      /**
       * Maps bytes to websafe characters.
       * @private
       */
      byteToCharMapWebSafe_: null,
      /**
       * Maps websafe characters to bytes.
       * @private
       */
      charToByteMapWebSafe_: null,
      /**
       * Our default alphabet, shared between
       * ENCODED_VALS and ENCODED_VALS_WEBSAFE
       */
      ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      /**
       * Our default alphabet. Value 64 (=) is special; it means "nothing."
       */
      get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + "+/=";
      },
      /**
       * Our websafe alphabet.
       */
      get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + "-_.";
      },
      /**
       * Whether this browser supports the atob and btoa functions. This extension
       * started at Mozilla but is now implemented by many browsers. We use the
       * ASSUME_* variables to avoid pulling in the full useragent detection library
       * but still allowing the standard per-browser compilations.
       *
       */
      HAS_NATIVE_SUPPORT: typeof atob === "function",
      /**
       * Base64-encode an array of bytes.
       *
       * @param input An array of bytes (numbers with
       *     value in [0, 255]) to encode.
       * @param webSafe Boolean indicating we should use the
       *     alternative alphabet.
       * @return The base64 encoded string.
       */
      encodeByteArray: function(input, webSafe) {
        if (!Array.isArray(input)) {
          throw Error("encodeByteArray takes an array as a parameter");
        }
        this.init_();
        var byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
        var output = [];
        for (var i = 0; i < input.length; i += 3) {
          var byte1 = input[i];
          var haveByte2 = i + 1 < input.length;
          var byte2 = haveByte2 ? input[i + 1] : 0;
          var haveByte3 = i + 2 < input.length;
          var byte3 = haveByte3 ? input[i + 2] : 0;
          var outByte1 = byte1 >> 2;
          var outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
          var outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
          var outByte4 = byte3 & 63;
          if (!haveByte3) {
            outByte4 = 64;
            if (!haveByte2) {
              outByte3 = 64;
            }
          }
          output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join("");
      },
      /**
       * Base64-encode a string.
       *
       * @param input A string to encode.
       * @param webSafe If true, we should use the
       *     alternative alphabet.
       * @return The base64 encoded string.
       */
      encodeString: function(input, webSafe) {
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
          return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray(input), webSafe);
      },
      /**
       * Base64-decode a string.
       *
       * @param input to decode.
       * @param webSafe True if we should use the
       *     alternative alphabet.
       * @return string representing the decoded value.
       */
      decodeString: function(input, webSafe) {
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
          return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
      },
      /**
       * Base64-decode a string.
       *
       * In base-64 decoding, groups of four characters are converted into three
       * bytes.  If the encoder did not apply padding, the input length may not
       * be a multiple of 4.
       *
       * In this case, the last group will have fewer than 4 characters, and
       * padding will be inferred.  If the group has one or two characters, it decodes
       * to one byte.  If the group has three characters, it decodes to two bytes.
       *
       * @param input Input to decode.
       * @param webSafe True if we should use the web-safe alphabet.
       * @return bytes representing the decoded value.
       */
      decodeStringToByteArray: function(input, webSafe) {
        this.init_();
        var charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
        var output = [];
        for (var i = 0; i < input.length; ) {
          var byte1 = charToByteMap[input.charAt(i++)];
          var haveByte2 = i < input.length;
          var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
          ++i;
          var haveByte3 = i < input.length;
          var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
          ++i;
          var haveByte4 = i < input.length;
          var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
          ++i;
          if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
            throw Error();
          }
          var outByte1 = byte1 << 2 | byte2 >> 4;
          output.push(outByte1);
          if (byte3 !== 64) {
            var outByte2 = byte2 << 4 & 240 | byte3 >> 2;
            output.push(outByte2);
            if (byte4 !== 64) {
              var outByte3 = byte3 << 6 & 192 | byte4;
              output.push(outByte3);
            }
          }
        }
        return output;
      },
      /**
       * Lazy static initialization function. Called before
       * accessing any of the static map variables.
       * @private
       */
      init_: function() {
        if (!this.byteToCharMap_) {
          this.byteToCharMap_ = {};
          this.charToByteMap_ = {};
          this.byteToCharMapWebSafe_ = {};
          this.charToByteMapWebSafe_ = {};
          for (var i = 0; i < this.ENCODED_VALS.length; i++) {
            this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
            this.charToByteMap_[this.byteToCharMap_[i]] = i;
            this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
            this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
            if (i >= this.ENCODED_VALS_BASE.length) {
              this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
              this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
            }
          }
        }
      }
    };
    var base64Encode = function(str) {
      var utf8Bytes = stringToByteArray(str);
      return base64.encodeByteArray(utf8Bytes, true);
    };
    var base64Decode = function(str) {
      try {
        return base64.decodeString(str, true);
      } catch (e) {
        console.error("base64Decode failed: ", e);
      }
      return null;
    };
    function deepCopy(value) {
      return deepExtend(void 0, value);
    }
    function deepExtend(target, source) {
      if (!(source instanceof Object)) {
        return source;
      }
      switch (source.constructor) {
        case Date:
          var dateValue = source;
          return new Date(dateValue.getTime());
        case Object:
          if (target === void 0) {
            target = {};
          }
          break;
        case Array:
          target = [];
          break;
        default:
          return source;
      }
      for (var prop in source) {
        if (!source.hasOwnProperty(prop)) {
          continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
      }
      return target;
    }
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
    function isNode() {
      try {
        return Object.prototype.toString.call(global.process) === "[object process]";
      } catch (e) {
        return false;
      }
    }
    function isBrowser() {
      return typeof self === "object" && self.self === self;
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
      var ua = getUA();
      return ua.indexOf("MSIE ") >= 0 || ua.indexOf("Trident/") >= 0;
    }
    function isUWP() {
      return getUA().indexOf("MSAppHost/") >= 0;
    }
    function isNodeSdk() {
      return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
    }
    function isSafari() {
      return !isNode() && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
    }
    function isIndexedDBAvailable() {
      return "indexedDB" in self && indexedDB != null;
    }
    function validateIndexedDBOpenable() {
      return new Promise(function(resolve, reject) {
        try {
          var preExist_1 = true;
          var DB_CHECK_NAME_1 = "validate-browser-context-for-indexeddb-analytics-module";
          var request_1 = window.indexedDB.open(DB_CHECK_NAME_1);
          request_1.onsuccess = function() {
            request_1.result.close();
            if (!preExist_1) {
              window.indexedDB.deleteDatabase(DB_CHECK_NAME_1);
            }
            resolve(true);
          };
          request_1.onupgradeneeded = function() {
            preExist_1 = false;
          };
          request_1.onerror = function() {
            var _a2;
            reject(((_a2 = request_1.error) === null || _a2 === void 0 ? void 0 : _a2.message) || "");
          };
        } catch (error) {
          reject(error);
        }
      });
    }
    function areCookiesEnabled() {
      if (!navigator || !navigator.cookieEnabled) {
        return false;
      }
      return true;
    }
    var ERROR_NAME = "FirebaseError";
    var FirebaseError = (
      /** @class */
      (function(_super) {
        tslib.__extends(FirebaseError2, _super);
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
          for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
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
      return template.replace(PATTERN, function(_, key) {
        var value = data[key];
        return value != null ? String(value) : "<" + key + "?>";
      });
    }
    var PATTERN = /\{\$([^}]+)}/g;
    function jsonEval(str) {
      return JSON.parse(str);
    }
    function stringify(data) {
      return JSON.stringify(data);
    }
    var decode = function(token) {
      var header = {}, claims = {}, data = {}, signature = "";
      try {
        var parts = token.split(".");
        header = jsonEval(base64Decode(parts[0]) || "");
        claims = jsonEval(base64Decode(parts[1]) || "");
        signature = parts[2];
        data = claims["d"] || {};
        delete claims["d"];
      } catch (e) {
      }
      return {
        header,
        claims,
        data,
        signature
      };
    };
    var isValidTimestamp = function(token) {
      var claims = decode(token).claims;
      var now = Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3);
      var validSince = 0, validUntil = 0;
      if (typeof claims === "object") {
        if (claims.hasOwnProperty("nbf")) {
          validSince = claims["nbf"];
        } else if (claims.hasOwnProperty("iat")) {
          validSince = claims["iat"];
        }
        if (claims.hasOwnProperty("exp")) {
          validUntil = claims["exp"];
        } else {
          validUntil = validSince + 86400;
        }
      }
      return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
    };
    var issuedAtTime = function(token) {
      var claims = decode(token).claims;
      if (typeof claims === "object" && claims.hasOwnProperty("iat")) {
        return claims["iat"];
      }
      return null;
    };
    var isValidFormat = function(token) {
      var decoded = decode(token), claims = decoded.claims;
      return !!claims && typeof claims === "object" && claims.hasOwnProperty("iat");
    };
    var isAdmin = function(token) {
      var claims = decode(token).claims;
      return typeof claims === "object" && claims["admin"] === true;
    };
    function contains(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
    function safeGet(obj, key) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
      } else {
        return void 0;
      }
    }
    function isEmpty(obj) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          return false;
        }
      }
      return true;
    }
    function map(obj, fn, contextObj) {
      var res = {};
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          res[key] = fn.call(contextObj, obj[key], key, obj);
        }
      }
      return res;
    }
    function querystring(querystringParams) {
      var params = [];
      var _loop_1 = function(key2, value2) {
        if (Array.isArray(value2)) {
          value2.forEach(function(arrayVal) {
            params.push(encodeURIComponent(key2) + "=" + encodeURIComponent(arrayVal));
          });
        } else {
          params.push(encodeURIComponent(key2) + "=" + encodeURIComponent(value2));
        }
      };
      for (var _i = 0, _a2 = Object.entries(querystringParams); _i < _a2.length; _i++) {
        var _b = _a2[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
      }
      return params.length ? "&" + params.join("&") : "";
    }
    function querystringDecode(querystring2) {
      var obj = {};
      var tokens = querystring2.replace(/^\?/, "").split("&");
      tokens.forEach(function(token) {
        if (token) {
          var key = token.split("=");
          obj[key[0]] = key[1];
        }
      });
      return obj;
    }
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
          for (var i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
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
          var W = this.W_;
          if (typeof buf === "string") {
            for (var i = 0; i < 16; i++) {
              W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
              offset += 4;
            }
          } else {
            for (var i = 0; i < 16; i++) {
              W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
              offset += 4;
            }
          }
          for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = (t << 1 | t >>> 31) & 4294967295;
          }
          var a = this.chain_[0];
          var b = this.chain_[1];
          var c = this.chain_[2];
          var d = this.chain_[3];
          var e = this.chain_[4];
          var f, k;
          for (var i = 0; i < 80; i++) {
            if (i < 40) {
              if (i < 20) {
                f = d ^ b & (c ^ d);
                k = 1518500249;
              } else {
                f = b ^ c ^ d;
                k = 1859775393;
              }
            } else {
              if (i < 60) {
                f = b & c | d & (b | c);
                k = 2400959708;
              } else {
                f = b ^ c ^ d;
                k = 3395469782;
              }
            }
            var t = (a << 5 | a >>> 27) + f + e + k + W[i] & 4294967295;
            e = d;
            d = c;
            c = (b << 30 | b >>> 2) & 4294967295;
            b = a;
            a = t;
          }
          this.chain_[0] = this.chain_[0] + a & 4294967295;
          this.chain_[1] = this.chain_[1] + b & 4294967295;
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
          var n = 0;
          var buf = this.buf_;
          var inbuf = this.inbuf_;
          while (n < length) {
            if (inbuf === 0) {
              while (n <= lengthMinusBlock) {
                this.compress_(bytes, n);
                n += this.blockSize;
              }
            }
            if (typeof bytes === "string") {
              while (n < length) {
                buf[inbuf] = bytes.charCodeAt(n);
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                  this.compress_(buf);
                  inbuf = 0;
                  break;
                }
              }
            } else {
              while (n < length) {
                buf[inbuf] = bytes[n];
                ++inbuf;
                ++n;
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
          for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256;
          }
          this.compress_(this.buf_);
          var n = 0;
          for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
              digest[n] = this.chain_[i] >> j & 255;
              ++n;
            }
          }
          return digest;
        };
        return Sha12;
      })()
    );
    function createSubscribe(executor, onNoObservers) {
      var proxy = new ObserverProxy(executor, onNoObservers);
      return proxy.subscribe.bind(proxy);
    }
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
        ObserverProxy2.prototype.unsubscribeOne = function(i) {
          if (this.observers === void 0 || this.observers[i] === void 0) {
            return;
          }
          delete this.observers[i];
          this.observerCount -= 1;
          if (this.observerCount === 0 && this.onNoObservers !== void 0) {
            this.onNoObservers(this);
          }
        };
        ObserverProxy2.prototype.forEachObserver = function(fn) {
          if (this.finalized) {
            return;
          }
          for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
          }
        };
        ObserverProxy2.prototype.sendOne = function(i, fn) {
          var _this = this;
          this.task.then(function() {
            if (_this.observers !== void 0 && _this.observers[i] !== void 0) {
              try {
                fn(_this.observers[i]);
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
    function async(fn, onError) {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        Promise.resolve(true).then(function() {
          fn.apply(void 0, args);
        }).catch(function(error) {
          if (onError) {
            onError(error);
          }
        });
      };
    }
    function implementsAnyMethods(obj, methods) {
      if (typeof obj !== "object" || obj === null) {
        return false;
      }
      for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in obj && typeof obj[method] === "function") {
          return true;
        }
      }
      return false;
    }
    function noop() {
    }
    var validateArgCount = function(fnName, minCount, maxCount, argCount) {
      var argError;
      if (argCount < minCount) {
        argError = "at least " + minCount;
      } else if (argCount > maxCount) {
        argError = maxCount === 0 ? "none" : "no more than " + maxCount;
      }
      if (argError) {
        var error = fnName + " failed: Was called with " + argCount + (argCount === 1 ? " argument." : " arguments.") + " Expects " + argError + ".";
        throw new Error(error);
      }
    };
    function errorPrefix(fnName, argumentNumber, optional) {
      var argName = "";
      switch (argumentNumber) {
        case 1:
          argName = optional ? "first" : "First";
          break;
        case 2:
          argName = optional ? "second" : "Second";
          break;
        case 3:
          argName = optional ? "third" : "Third";
          break;
        case 4:
          argName = optional ? "fourth" : "Fourth";
          break;
        default:
          throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?");
      }
      var error = fnName + " failed: ";
      error += argName + " argument ";
      return error;
    }
    function validateNamespace(fnName, argumentNumber, namespace, optional) {
      if (optional && !namespace) {
        return;
      }
      if (typeof namespace !== "string") {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) + "must be a valid firebase namespace.");
      }
    }
    function validateCallback(fnName, argumentNumber, callback, optional) {
      if (optional && !callback) {
        return;
      }
      if (typeof callback !== "function") {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) + "must be a valid function.");
      }
    }
    function validateContextObject(fnName, argumentNumber, context, optional) {
      if (optional && !context) {
        return;
      }
      if (typeof context !== "object" || context === null) {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) + "must be a valid context object.");
      }
    }
    var stringToByteArray$1 = function(str) {
      var out = [];
      var p = 0;
      for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c >= 55296 && c <= 56319) {
          var high = c - 55296;
          i++;
          assert(i < str.length, "Surrogate pair missing trail surrogate.");
          var low = str.charCodeAt(i) - 56320;
          c = 65536 + (high << 10) + low;
        }
        if (c < 128) {
          out[p++] = c;
        } else if (c < 2048) {
          out[p++] = c >> 6 | 192;
          out[p++] = c & 63 | 128;
        } else if (c < 65536) {
          out[p++] = c >> 12 | 224;
          out[p++] = c >> 6 & 63 | 128;
          out[p++] = c & 63 | 128;
        } else {
          out[p++] = c >> 18 | 240;
          out[p++] = c >> 12 & 63 | 128;
          out[p++] = c >> 6 & 63 | 128;
          out[p++] = c & 63 | 128;
        }
      }
      return out;
    };
    var stringLength = function(str) {
      var p = 0;
      for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
          p++;
        } else if (c < 2048) {
          p += 2;
        } else if (c >= 55296 && c <= 56319) {
          p += 4;
          i++;
        } else {
          p += 3;
        }
      }
      return p;
    };
    var DEFAULT_INTERVAL_MILLIS = 1e3;
    var DEFAULT_BACKOFF_FACTOR = 2;
    var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
    var RANDOM_FACTOR = 0.5;
    function calculateBackoffMillis(backoffCount, intervalMillis, backoffFactor) {
      if (intervalMillis === void 0) {
        intervalMillis = DEFAULT_INTERVAL_MILLIS;
      }
      if (backoffFactor === void 0) {
        backoffFactor = DEFAULT_BACKOFF_FACTOR;
      }
      var currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
      var randomWait = Math.round(
        // A fraction of the backoff value to add/subtract.
        // Deviation: changes multiplication order to improve readability.
        RANDOM_FACTOR * currBaseValue * // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
        // if we add or subtract.
        (Math.random() - 0.5) * 2
      );
      return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
    }
    exports.CONSTANTS = CONSTANTS;
    exports.Deferred = Deferred;
    exports.ErrorFactory = ErrorFactory;
    exports.FirebaseError = FirebaseError;
    exports.MAX_VALUE_MILLIS = MAX_VALUE_MILLIS;
    exports.RANDOM_FACTOR = RANDOM_FACTOR;
    exports.Sha1 = Sha1;
    exports.areCookiesEnabled = areCookiesEnabled;
    exports.assert = assert;
    exports.assertionError = assertionError;
    exports.async = async;
    exports.base64 = base64;
    exports.base64Decode = base64Decode;
    exports.base64Encode = base64Encode;
    exports.calculateBackoffMillis = calculateBackoffMillis;
    exports.contains = contains;
    exports.createSubscribe = createSubscribe;
    exports.decode = decode;
    exports.deepCopy = deepCopy;
    exports.deepExtend = deepExtend;
    exports.errorPrefix = errorPrefix;
    exports.getUA = getUA;
    exports.isAdmin = isAdmin;
    exports.isBrowser = isBrowser;
    exports.isBrowserExtension = isBrowserExtension;
    exports.isElectron = isElectron;
    exports.isEmpty = isEmpty;
    exports.isIE = isIE;
    exports.isIndexedDBAvailable = isIndexedDBAvailable;
    exports.isMobileCordova = isMobileCordova;
    exports.isNode = isNode;
    exports.isNodeSdk = isNodeSdk;
    exports.isReactNative = isReactNative;
    exports.isSafari = isSafari;
    exports.isUWP = isUWP;
    exports.isValidFormat = isValidFormat;
    exports.isValidTimestamp = isValidTimestamp;
    exports.issuedAtTime = issuedAtTime;
    exports.jsonEval = jsonEval;
    exports.map = map;
    exports.querystring = querystring;
    exports.querystringDecode = querystringDecode;
    exports.safeGet = safeGet;
    exports.stringLength = stringLength;
    exports.stringToByteArray = stringToByteArray$1;
    exports.stringify = stringify;
    exports.validateArgCount = validateArgCount;
    exports.validateCallback = validateCallback;
    exports.validateContextObject = validateContextObject;
    exports.validateIndexedDBOpenable = validateIndexedDBOpenable;
    exports.validateNamespace = validateNamespace;
  }
});

// node_modules/@firebase/component/node_modules/tslib/tslib.es6.js
var tslib_es6_exports3 = {};
__export(tslib_es6_exports3, {
  __assign: () => __assign3,
  __asyncDelegator: () => __asyncDelegator3,
  __asyncGenerator: () => __asyncGenerator3,
  __asyncValues: () => __asyncValues3,
  __await: () => __await3,
  __awaiter: () => __awaiter3,
  __classPrivateFieldGet: () => __classPrivateFieldGet3,
  __classPrivateFieldSet: () => __classPrivateFieldSet3,
  __createBinding: () => __createBinding3,
  __decorate: () => __decorate3,
  __exportStar: () => __exportStar3,
  __extends: () => __extends3,
  __generator: () => __generator3,
  __importDefault: () => __importDefault3,
  __importStar: () => __importStar3,
  __makeTemplateObject: () => __makeTemplateObject3,
  __metadata: () => __metadata3,
  __param: () => __param3,
  __read: () => __read3,
  __rest: () => __rest3,
  __spread: () => __spread3,
  __spreadArrays: () => __spreadArrays3,
  __values: () => __values3
});
function __extends3(d, b) {
  extendStatics3(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest3(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate3(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param3(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata3(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter3(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
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
function __generator3(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding3(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
}
function __exportStar3(m, exports) {
  for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values3(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read3(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread3() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read3(arguments[i]));
  return ar;
}
function __spreadArrays3() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __await3(v) {
  return this instanceof __await3 ? (this.v = v, this) : new __await3(v);
}
function __asyncGenerator3(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function(v) {
      return new Promise(function(a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await3 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator3(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await3(o[n](v)), done: n === "return" } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues3(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values3 === "function" ? __values3(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject3(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar3(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result.default = mod;
  return result;
}
function __importDefault3(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet3(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet3(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics3, __assign3;
var init_tslib_es63 = __esm({
  "node_modules/@firebase/component/node_modules/tslib/tslib.es6.js"() {
    extendStatics3 = function(d, b) {
      extendStatics3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
      };
      return extendStatics3(d, b);
    };
    __assign3 = function() {
      __assign3 = Object.assign || function __assign4(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign3.apply(this, arguments);
    };
  }
});

// node_modules/@firebase/component/dist/index.cjs.js
var require_index_cjs2 = __commonJS({
  "node_modules/@firebase/component/dist/index.cjs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib = (init_tslib_es63(), __toCommonJS(tslib_es6_exports3));
    var util = require_index_cjs();
    var Component = (
      /** @class */
      (function() {
        function Component2(name2, instanceFactory, type) {
          this.name = name2;
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
        function Provider2(name2, container) {
          this.name = name2;
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
            var deferred = new util.Deferred();
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
          var _a2 = tslib.__assign({ identifier: DEFAULT_ENTRY_NAME, optional: false }, options), identifier = _a2.identifier, optional = _a2.optional;
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
            for (var _b = tslib.__values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var _d = tslib.__read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
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
          return tslib.__awaiter(this, void 0, void 0, function() {
            var services;
            return tslib.__generator(this, function(_a2) {
              switch (_a2.label) {
                case 0:
                  services = Array.from(this.instances.values());
                  return [4, Promise.all(tslib.__spread(services.filter(function(service) {
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
        function ComponentContainer2(name2) {
          this.name = name2;
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
        ComponentContainer2.prototype.getProvider = function(name2) {
          if (this.providers.has(name2)) {
            return this.providers.get(name2);
          }
          var provider = new Provider(name2, this);
          this.providers.set(name2, provider);
          return provider;
        };
        ComponentContainer2.prototype.getProviders = function() {
          return Array.from(this.providers.values());
        };
        return ComponentContainer2;
      })()
    );
    exports.Component = Component;
    exports.ComponentContainer = ComponentContainer;
    exports.Provider = Provider;
  }
});

// node_modules/@firebase/logger/dist/index.esm.js
var index_esm_exports = {};
__export(index_esm_exports, {
  LogLevel: () => LogLevel,
  Logger: () => Logger,
  setLogLevel: () => setLogLevel,
  setUserLogHandler: () => setUserLogHandler
});
function __spreadArrays4() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function setLogLevel(level) {
  instances.forEach(function(inst) {
    inst.setLogLevel(level);
  });
}
function setUserLogHandler(logCallback, options) {
  var _loop_1 = function(instance2) {
    var customLogLevel = null;
    if (options && options.level) {
      customLogLevel = levelStringToEnum[options.level];
    }
    if (logCallback === null) {
      instance2.userLogHandler = null;
    } else {
      instance2.userLogHandler = function(instance3, level) {
        var args = [];
        for (var _i2 = 2; _i2 < arguments.length; _i2++) {
          args[_i2 - 2] = arguments[_i2];
        }
        var message = args.map(function(arg) {
          if (arg == null) {
            return null;
          } else if (typeof arg === "string") {
            return arg;
          } else if (typeof arg === "number" || typeof arg === "boolean") {
            return arg.toString();
          } else if (arg instanceof Error) {
            return arg.message;
          } else {
            try {
              return JSON.stringify(arg);
            } catch (ignored) {
              return null;
            }
          }
        }).filter(function(arg) {
          return arg;
        }).join(" ");
        if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance3.logLevel)) {
          logCallback({
            level: LogLevel[level].toLowerCase(),
            message,
            args,
            type: instance3.name
          });
        }
      };
    }
  };
  for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
    var instance = instances_1[_i];
    _loop_1(instance);
  }
}
var _a, instances, LogLevel, levelStringToEnum, defaultLogLevel, ConsoleMethod, defaultLogHandler, Logger;
var init_index_esm = __esm({
  "node_modules/@firebase/logger/dist/index.esm.js"() {
    instances = [];
    (function(LogLevel2) {
      LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
      LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
      LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
      LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
      LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
      LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
    })(LogLevel || (LogLevel = {}));
    levelStringToEnum = {
      "debug": LogLevel.DEBUG,
      "verbose": LogLevel.VERBOSE,
      "info": LogLevel.INFO,
      "warn": LogLevel.WARN,
      "error": LogLevel.ERROR,
      "silent": LogLevel.SILENT
    };
    defaultLogLevel = LogLevel.INFO;
    ConsoleMethod = (_a = {}, _a[LogLevel.DEBUG] = "log", _a[LogLevel.VERBOSE] = "log", _a[LogLevel.INFO] = "info", _a[LogLevel.WARN] = "warn", _a[LogLevel.ERROR] = "error", _a);
    defaultLogHandler = function(instance, logType) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      if (logType < instance.logLevel) {
        return;
      }
      var now = (/* @__PURE__ */ new Date()).toISOString();
      var method = ConsoleMethod[logType];
      if (method) {
        console[method].apply(console, __spreadArrays4(["[" + now + "]  " + instance.name + ":"], args));
      } else {
        throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
      }
    };
    Logger = /** @class */
    (function() {
      function Logger2(name2) {
        this.name = name2;
        this._logLevel = defaultLogLevel;
        this._logHandler = defaultLogHandler;
        this._userLogHandler = null;
        instances.push(this);
      }
      Object.defineProperty(Logger2.prototype, "logLevel", {
        get: function() {
          return this._logLevel;
        },
        set: function(val) {
          if (!(val in LogLevel)) {
            throw new TypeError('Invalid value "' + val + '" assigned to `logLevel`');
          }
          this._logLevel = val;
        },
        enumerable: false,
        configurable: true
      });
      Logger2.prototype.setLogLevel = function(val) {
        this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
      };
      Object.defineProperty(Logger2.prototype, "logHandler", {
        get: function() {
          return this._logHandler;
        },
        set: function(val) {
          if (typeof val !== "function") {
            throw new TypeError("Value assigned to `logHandler` must be a function");
          }
          this._logHandler = val;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Logger2.prototype, "userLogHandler", {
        get: function() {
          return this._userLogHandler;
        },
        set: function(val) {
          this._userLogHandler = val;
        },
        enumerable: false,
        configurable: true
      });
      Logger2.prototype.debug = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays4([this, LogLevel.DEBUG], args));
        this._logHandler.apply(this, __spreadArrays4([this, LogLevel.DEBUG], args));
      };
      Logger2.prototype.log = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays4([this, LogLevel.VERBOSE], args));
        this._logHandler.apply(this, __spreadArrays4([this, LogLevel.VERBOSE], args));
      };
      Logger2.prototype.info = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays4([this, LogLevel.INFO], args));
        this._logHandler.apply(this, __spreadArrays4([this, LogLevel.INFO], args));
      };
      Logger2.prototype.warn = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays4([this, LogLevel.WARN], args));
        this._logHandler.apply(this, __spreadArrays4([this, LogLevel.WARN], args));
      };
      Logger2.prototype.error = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays4([this, LogLevel.ERROR], args));
        this._logHandler.apply(this, __spreadArrays4([this, LogLevel.ERROR], args));
      };
      return Logger2;
    })();
  }
});

// node_modules/@firebase/app/dist/index.cjs.js
var require_index_cjs3 = __commonJS({
  "node_modules/@firebase/app/dist/index.cjs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var util = require_index_cjs();
    var component = require_index_cjs2();
    var logger$1 = (init_index_esm(), __toCommonJS(index_esm_exports));
    var _a2;
    var ERRORS = (_a2 = {}, _a2[
      "no-app"
      /* NO_APP */
    ] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()", _a2[
      "bad-app-name"
      /* BAD_APP_NAME */
    ] = "Illegal App name: '{$appName}", _a2[
      "duplicate-app"
      /* DUPLICATE_APP */
    ] = "Firebase App named '{$appName}' already exists", _a2[
      "app-deleted"
      /* APP_DELETED */
    ] = "Firebase App named '{$appName}' already deleted", _a2[
      "invalid-app-argument"
      /* INVALID_APP_ARGUMENT */
    ] = "firebase.{$appName}() takes either no argument or a Firebase App instance.", _a2[
      "invalid-log-argument"
      /* INVALID_LOG_ARGUMENT */
    ] = "First argument to `onLog` must be null or a function.", _a2);
    var ERROR_FACTORY = new util.ErrorFactory("app", "Firebase", ERRORS);
    var name$1 = "@firebase/app";
    var version = "0.6.11";
    var name$2 = "@firebase/analytics";
    var name$3 = "@firebase/auth";
    var name$4 = "@firebase/database";
    var name$5 = "@firebase/functions";
    var name$6 = "@firebase/installations";
    var name$7 = "@firebase/messaging";
    var name$8 = "@firebase/performance";
    var name$9 = "@firebase/remote-config";
    var name$a = "@firebase/storage";
    var name$b = "@firebase/firestore";
    var name$c = "firebase-wrapper";
    var _a$1;
    var DEFAULT_ENTRY_NAME = "[DEFAULT]";
    var PLATFORM_LOG_STRING = (_a$1 = {}, _a$1[name$1] = "fire-core", _a$1[name$2] = "fire-analytics", _a$1[name$3] = "fire-auth", _a$1[name$4] = "fire-rtdb", _a$1[name$5] = "fire-fn", _a$1[name$6] = "fire-iid", _a$1[name$7] = "fire-fcm", _a$1[name$8] = "fire-perf", _a$1[name$9] = "fire-rc", _a$1[name$a] = "fire-gcs", _a$1[name$b] = "fire-fst", _a$1["fire-js"] = "fire-js", _a$1[name$c] = "fire-js-all", _a$1);
    var logger = new logger$1.Logger("@firebase/app");
    var FirebaseAppImpl = (
      /** @class */
      (function() {
        function FirebaseAppImpl2(options, config, firebase_) {
          var e_1, _a3;
          var _this = this;
          this.firebase_ = firebase_;
          this.isDeleted_ = false;
          this.name_ = config.name;
          this.automaticDataCollectionEnabled_ = config.automaticDataCollectionEnabled || false;
          this.options_ = util.deepCopy(options);
          this.container = new component.ComponentContainer(config.name);
          this._addComponent(new component.Component(
            "app",
            function() {
              return _this;
            },
            "PUBLIC"
            /* PUBLIC */
          ));
          try {
            for (var _b = tslib.__values(this.firebase_.INTERNAL.components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var component$1 = _c.value;
              this._addComponent(component$1);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a3 = _b.return)) _a3.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        }
        Object.defineProperty(FirebaseAppImpl2.prototype, "automaticDataCollectionEnabled", {
          get: function() {
            this.checkDestroyed_();
            return this.automaticDataCollectionEnabled_;
          },
          set: function(val) {
            this.checkDestroyed_();
            this.automaticDataCollectionEnabled_ = val;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(FirebaseAppImpl2.prototype, "name", {
          get: function() {
            this.checkDestroyed_();
            return this.name_;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(FirebaseAppImpl2.prototype, "options", {
          get: function() {
            this.checkDestroyed_();
            return this.options_;
          },
          enumerable: false,
          configurable: true
        });
        FirebaseAppImpl2.prototype.delete = function() {
          var _this = this;
          return new Promise(function(resolve) {
            _this.checkDestroyed_();
            resolve();
          }).then(function() {
            _this.firebase_.INTERNAL.removeApp(_this.name_);
            return Promise.all(_this.container.getProviders().map(function(provider) {
              return provider.delete();
            }));
          }).then(function() {
            _this.isDeleted_ = true;
          });
        };
        FirebaseAppImpl2.prototype._getService = function(name2, instanceIdentifier) {
          if (instanceIdentifier === void 0) {
            instanceIdentifier = DEFAULT_ENTRY_NAME;
          }
          this.checkDestroyed_();
          return this.container.getProvider(name2).getImmediate({
            identifier: instanceIdentifier
          });
        };
        FirebaseAppImpl2.prototype._removeServiceInstance = function(name2, instanceIdentifier) {
          if (instanceIdentifier === void 0) {
            instanceIdentifier = DEFAULT_ENTRY_NAME;
          }
          this.container.getProvider(name2).clearInstance(instanceIdentifier);
        };
        FirebaseAppImpl2.prototype._addComponent = function(component2) {
          try {
            this.container.addComponent(component2);
          } catch (e) {
            logger.debug("Component " + component2.name + " failed to register with FirebaseApp " + this.name, e);
          }
        };
        FirebaseAppImpl2.prototype._addOrOverwriteComponent = function(component2) {
          this.container.addOrOverwriteComponent(component2);
        };
        FirebaseAppImpl2.prototype.checkDestroyed_ = function() {
          if (this.isDeleted_) {
            throw ERROR_FACTORY.create("app-deleted", { appName: this.name_ });
          }
        };
        return FirebaseAppImpl2;
      })()
    );
    FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options || FirebaseAppImpl.prototype.delete || console.log("dc");
    var version$1 = "7.20.0";
    function createFirebaseNamespaceCore(firebaseAppImpl) {
      var apps = {};
      var components = /* @__PURE__ */ new Map();
      var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        // @ts-ignore
        __esModule: true,
        initializeApp: initializeApp2,
        // @ts-ignore
        app,
        registerVersion,
        setLogLevel: logger$1.setLogLevel,
        onLog,
        // @ts-ignore
        apps: null,
        SDK_VERSION: version$1,
        INTERNAL: {
          registerComponent,
          removeApp,
          components,
          useAsService
        }
      };
      namespace["default"] = namespace;
      Object.defineProperty(namespace, "apps", {
        get: getApps
      });
      function removeApp(name2) {
        delete apps[name2];
      }
      function app(name2) {
        name2 = name2 || DEFAULT_ENTRY_NAME;
        if (!util.contains(apps, name2)) {
          throw ERROR_FACTORY.create("no-app", { appName: name2 });
        }
        return apps[name2];
      }
      app["App"] = firebaseAppImpl;
      function initializeApp2(options, rawConfig) {
        if (rawConfig === void 0) {
          rawConfig = {};
        }
        if (typeof rawConfig !== "object" || rawConfig === null) {
          var name_1 = rawConfig;
          rawConfig = { name: name_1 };
        }
        var config = rawConfig;
        if (config.name === void 0) {
          config.name = DEFAULT_ENTRY_NAME;
        }
        var name2 = config.name;
        if (typeof name2 !== "string" || !name2) {
          throw ERROR_FACTORY.create("bad-app-name", {
            appName: String(name2)
          });
        }
        if (util.contains(apps, name2)) {
          throw ERROR_FACTORY.create("duplicate-app", { appName: name2 });
        }
        var app2 = new firebaseAppImpl(options, config, namespace);
        apps[name2] = app2;
        return app2;
      }
      function getApps() {
        return Object.keys(apps).map(function(name2) {
          return apps[name2];
        });
      }
      function registerComponent(component2) {
        var e_1, _a3;
        var componentName = component2.name;
        if (components.has(componentName)) {
          logger.debug("There were multiple attempts to register component " + componentName + ".");
          return component2.type === "PUBLIC" ? (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            namespace[componentName]
          ) : null;
        }
        components.set(componentName, component2);
        if (component2.type === "PUBLIC") {
          var serviceNamespace = function(appArg) {
            if (appArg === void 0) {
              appArg = app();
            }
            if (typeof appArg[componentName] !== "function") {
              throw ERROR_FACTORY.create("invalid-app-argument", {
                appName: componentName
              });
            }
            return appArg[componentName]();
          };
          if (component2.serviceProps !== void 0) {
            util.deepExtend(serviceNamespace, component2.serviceProps);
          }
          namespace[componentName] = serviceNamespace;
          firebaseAppImpl.prototype[componentName] = // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
          // option added to the no-explicit-any rule when ESlint releases it.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            var serviceFxn = this._getService.bind(this, componentName);
            return serviceFxn.apply(this, component2.multipleInstances ? args : []);
          };
        }
        try {
          for (var _b = tslib.__values(Object.keys(apps)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var appName = _c.value;
            apps[appName]._addComponent(component2);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a3 = _b.return)) _a3.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        return component2.type === "PUBLIC" ? (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          namespace[componentName]
        ) : null;
      }
      function registerVersion(libraryKeyOrName, version2, variant) {
        var _a3;
        var library = (_a3 = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a3 !== void 0 ? _a3 : libraryKeyOrName;
        if (variant) {
          library += "-" + variant;
        }
        var libraryMismatch = library.match(/\s|\//);
        var versionMismatch = version2.match(/\s|\//);
        if (libraryMismatch || versionMismatch) {
          var warning = [
            'Unable to register library "' + library + '" with version "' + version2 + '":'
          ];
          if (libraryMismatch) {
            warning.push('library name "' + library + '" contains illegal characters (whitespace or "/")');
          }
          if (libraryMismatch && versionMismatch) {
            warning.push("and");
          }
          if (versionMismatch) {
            warning.push('version name "' + version2 + '" contains illegal characters (whitespace or "/")');
          }
          logger.warn(warning.join(" "));
          return;
        }
        registerComponent(new component.Component(
          library + "-version",
          function() {
            return { library, version: version2 };
          },
          "VERSION"
          /* VERSION */
        ));
      }
      function onLog(logCallback, options) {
        if (logCallback !== null && typeof logCallback !== "function") {
          throw ERROR_FACTORY.create("invalid-log-argument", {
            appName: name
          });
        }
        logger$1.setUserLogHandler(logCallback, options);
      }
      function useAsService(app2, name2) {
        if (name2 === "serverAuth") {
          return null;
        }
        var useService = name2;
        return useService;
      }
      return namespace;
    }
    function createFirebaseNamespace() {
      var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
      namespace.INTERNAL = tslib.__assign(tslib.__assign({}, namespace.INTERNAL), {
        createFirebaseNamespace,
        extendNamespace,
        createSubscribe: util.createSubscribe,
        ErrorFactory: util.ErrorFactory,
        deepExtend: util.deepExtend
      });
      function extendNamespace(props) {
        util.deepExtend(namespace, props);
      }
      return namespace;
    }
    var firebase = createFirebaseNamespace();
    var PlatformLoggerService = (
      /** @class */
      (function() {
        function PlatformLoggerService2(container) {
          this.container = container;
        }
        PlatformLoggerService2.prototype.getPlatformInfoString = function() {
          var providers = this.container.getProviders();
          return providers.map(function(provider) {
            if (isVersionServiceProvider(provider)) {
              var service = provider.getImmediate();
              return service.library + "/" + service.version;
            } else {
              return null;
            }
          }).filter(function(logString) {
            return logString;
          }).join(" ");
        };
        return PlatformLoggerService2;
      })()
    );
    function isVersionServiceProvider(provider) {
      var component2 = provider.getComponent();
      return (component2 === null || component2 === void 0 ? void 0 : component2.type) === "VERSION";
    }
    function registerCoreComponents(firebase2, variant) {
      firebase2.INTERNAL.registerComponent(new component.Component(
        "platform-logger",
        function(container) {
          return new PlatformLoggerService(container);
        },
        "PRIVATE"
        /* PRIVATE */
      ));
      firebase2.registerVersion(name$1, version, variant);
      firebase2.registerVersion("fire-js", "");
    }
    if (util.isBrowser() && self.firebase !== void 0) {
      logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
      sdkVersion = self.firebase.SDK_VERSION;
      if (sdkVersion && sdkVersion.indexOf("LITE") >= 0) {
        logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
      }
    }
    var sdkVersion;
    var initializeApp = firebase.initializeApp;
    firebase.initializeApp = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (util.isNode()) {
        logger.warn(`
      Warning: This is a browser-targeted Firebase bundle but it appears it is being
      run in a Node environment.  If running in a Node environment, make sure you
      are using the bundle specified by the "main" field in package.json.
      
      If you are using Webpack, you can specify "main" as the first item in
      "resolve.mainFields":
      https://webpack.js.org/configuration/resolve/#resolvemainfields
      
      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"
      as the first item in "mainFields", e.g. ['main', 'module'].
      https://github.com/rollup/rollup-plugin-node-resolve
      `);
      }
      return initializeApp.apply(void 0, args);
    };
    var firebase$1 = firebase;
    registerCoreComponents(firebase$1);
    exports.default = firebase$1;
    exports.firebase = firebase$1;
  }
});

export {
  __extends2 as __extends,
  init_tslib_es62 as init_tslib_es6,
  __assign3 as __assign,
  __awaiter3 as __awaiter,
  __generator3 as __generator,
  __values3 as __values,
  __read3 as __read,
  __spread3 as __spread,
  init_tslib_es63 as init_tslib_es62,
  LogLevel,
  Logger,
  init_index_esm,
  require_index_cjs3 as require_index_cjs
};
//# sourceMappingURL=chunk-G5TLJ5FN.js.map
