import {
  require_prop_types
} from "./chunk-UWNXZH4U.js";
import {
  require_react_dom
} from "./chunk-7QJNGALB.js";
import {
  require_react
} from "./chunk-4LDP7TDJ.js";
import {
  __commonJS,
  __require
} from "./chunk-USJHI7ER.js";

// node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    function _typeof(o) {
      "@babel/helpers - typeof";
      return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
    }
    module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var require_regeneratorRuntime = __commonJS({
  "node_modules/@babel/runtime/helpers/regeneratorRuntime.js"(exports, module) {
    var _typeof = require_typeof()["default"];
    function _regeneratorRuntime() {
      "use strict";
      module.exports = _regeneratorRuntime = function _regeneratorRuntime2() {
        return e;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
        t2[e2] = r2.value;
      }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
      function define2(t2, e2, r2) {
        return Object.defineProperty(t2, e2, {
          value: r2,
          enumerable: true,
          configurable: true,
          writable: true
        }), t2[e2];
      }
      try {
        define2({}, "");
      } catch (t2) {
        define2 = function define3(t3, e2, r2) {
          return t3[e2] = r2;
        };
      }
      function wrap(t2, e2, r2, n2) {
        var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
        return o(a2, "_invoke", {
          value: makeInvokeMethod(t2, r2, c2)
        }), a2;
      }
      function tryCatch(t2, e2, r2) {
        try {
          return {
            type: "normal",
            arg: t2.call(e2, r2)
          };
        } catch (t3) {
          return {
            type: "throw",
            arg: t3
          };
        }
      }
      e.wrap = wrap;
      var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var p = {};
      define2(p, a, function() {
        return this;
      });
      var d = Object.getPrototypeOf, v = d && d(d(values([])));
      v && v !== r && n.call(v, a) && (p = v);
      var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
      function defineIteratorMethods(t2) {
        ["next", "throw", "return"].forEach(function(e2) {
          define2(t2, e2, function(t3) {
            return this._invoke(e2, t3);
          });
        });
      }
      function AsyncIterator(t2, e2) {
        function invoke(r3, o2, i2, a2) {
          var c2 = tryCatch(t2[r3], t2, o2);
          if ("throw" !== c2.type) {
            var u2 = c2.arg, h2 = u2.value;
            return h2 && "object" == _typeof(h2) && n.call(h2, "__await") ? e2.resolve(h2.__await).then(function(t3) {
              invoke("next", t3, i2, a2);
            }, function(t3) {
              invoke("throw", t3, i2, a2);
            }) : e2.resolve(h2).then(function(t3) {
              u2.value = t3, i2(u2);
            }, function(t3) {
              return invoke("throw", t3, i2, a2);
            });
          }
          a2(c2.arg);
        }
        var r2;
        o(this, "_invoke", {
          value: function value(t3, n2) {
            function callInvokeWithMethodAndArg() {
              return new e2(function(e3, r3) {
                invoke(t3, n2, e3, r3);
              });
            }
            return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          }
        });
      }
      function makeInvokeMethod(e2, r2, n2) {
        var o2 = h;
        return function(i2, a2) {
          if (o2 === f)
            throw Error("Generator is already running");
          if (o2 === s) {
            if ("throw" === i2)
              throw a2;
            return {
              value: t,
              done: true
            };
          }
          for (n2.method = i2, n2.arg = a2; ; ) {
            var c2 = n2.delegate;
            if (c2) {
              var u2 = maybeInvokeDelegate(c2, n2);
              if (u2) {
                if (u2 === y)
                  continue;
                return u2;
              }
            }
            if ("next" === n2.method)
              n2.sent = n2._sent = n2.arg;
            else if ("throw" === n2.method) {
              if (o2 === h)
                throw o2 = s, n2.arg;
              n2.dispatchException(n2.arg);
            } else
              "return" === n2.method && n2.abrupt("return", n2.arg);
            o2 = f;
            var p2 = tryCatch(e2, r2, n2);
            if ("normal" === p2.type) {
              if (o2 = n2.done ? s : l, p2.arg === y)
                continue;
              return {
                value: p2.arg,
                done: n2.done
              };
            }
            "throw" === p2.type && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
          }
        };
      }
      function maybeInvokeDelegate(e2, r2) {
        var n2 = r2.method, o2 = e2.iterator[n2];
        if (o2 === t)
          return r2.delegate = null, "throw" === n2 && e2.iterator["return"] && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), "throw" === r2.method) || "return" !== n2 && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
        var i2 = tryCatch(o2, e2.iterator, r2.arg);
        if ("throw" === i2.type)
          return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
        var a2 = i2.arg;
        return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, "return" !== r2.method && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
      }
      function pushTryEntry(t2) {
        var e2 = {
          tryLoc: t2[0]
        };
        1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
      }
      function resetTryEntry(t2) {
        var e2 = t2.completion || {};
        e2.type = "normal", delete e2.arg, t2.completion = e2;
      }
      function Context(t2) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t2.forEach(pushTryEntry, this), this.reset(true);
      }
      function values(e2) {
        if (e2 || "" === e2) {
          var r2 = e2[a];
          if (r2)
            return r2.call(e2);
          if ("function" == typeof e2.next)
            return e2;
          if (!isNaN(e2.length)) {
            var o2 = -1, i2 = function next() {
              for (; ++o2 < e2.length; )
                if (n.call(e2, o2))
                  return next.value = e2[o2], next.done = false, next;
              return next.value = t, next.done = true, next;
            };
            return i2.next = i2;
          }
        }
        throw new TypeError(_typeof(e2) + " is not iterable");
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
      }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
      }), GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
        var e2 = "function" == typeof t2 && t2.constructor;
        return !!e2 && (e2 === GeneratorFunction || "GeneratorFunction" === (e2.displayName || e2.name));
      }, e.mark = function(t2) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define2(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
      }, e.awrap = function(t2) {
        return {
          __await: t2
        };
      }, defineIteratorMethods(AsyncIterator.prototype), define2(AsyncIterator.prototype, c, function() {
        return this;
      }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
        void 0 === i2 && (i2 = Promise);
        var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
        return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
          return t3.done ? t3.value : a2.next();
        });
      }, defineIteratorMethods(g), define2(g, u, "Generator"), define2(g, a, function() {
        return this;
      }), define2(g, "toString", function() {
        return "[object Generator]";
      }), e.keys = function(t2) {
        var e2 = Object(t2), r2 = [];
        for (var n2 in e2)
          r2.push(n2);
        return r2.reverse(), function next() {
          for (; r2.length; ) {
            var t3 = r2.pop();
            if (t3 in e2)
              return next.value = t3, next.done = false, next;
          }
          return next.done = true, next;
        };
      }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e2) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2)
            for (var r2 in this)
              "t" === r2.charAt(0) && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
        },
        stop: function stop() {
          this.done = true;
          var t2 = this.tryEntries[0].completion;
          if ("throw" === t2.type)
            throw t2.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(e2) {
          if (this.done)
            throw e2;
          var r2 = this;
          function handle(n2, o3) {
            return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
          }
          for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
            var i2 = this.tryEntries[o2], a2 = i2.completion;
            if ("root" === i2.tryLoc)
              return handle("end");
            if (i2.tryLoc <= this.prev) {
              var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
              if (c2 && u2) {
                if (this.prev < i2.catchLoc)
                  return handle(i2.catchLoc, true);
                if (this.prev < i2.finallyLoc)
                  return handle(i2.finallyLoc);
              } else if (c2) {
                if (this.prev < i2.catchLoc)
                  return handle(i2.catchLoc, true);
              } else {
                if (!u2)
                  throw Error("try statement without catch or finally");
                if (this.prev < i2.finallyLoc)
                  return handle(i2.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(t2, e2) {
          for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
            var o2 = this.tryEntries[r2];
            if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
              var i2 = o2;
              break;
            }
          }
          i2 && ("break" === t2 || "continue" === t2) && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
          var a2 = i2 ? i2.completion : {};
          return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
        },
        complete: function complete(t2, e2) {
          if ("throw" === t2.type)
            throw t2.arg;
          return "break" === t2.type || "continue" === t2.type ? this.next = t2.arg : "return" === t2.type ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : "normal" === t2.type && e2 && (this.next = e2), y;
        },
        finish: function finish(t2) {
          for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
            var r2 = this.tryEntries[e2];
            if (r2.finallyLoc === t2)
              return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
          }
        },
        "catch": function _catch(t2) {
          for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
            var r2 = this.tryEntries[e2];
            if (r2.tryLoc === t2) {
              var n2 = r2.completion;
              if ("throw" === n2.type) {
                var o2 = n2.arg;
                resetTryEntry(r2);
              }
              return o2;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e2, r2, n2) {
          return this.delegate = {
            iterator: values(e2),
            resultName: r2,
            nextLoc: n2
          }, "next" === this.method && (this.arg = t), y;
        }
      }, e;
    }
    module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/regenerator/index.js
var require_regenerator = __commonJS({
  "node_modules/@babel/runtime/regenerator/index.js"(exports, module) {
    var runtime = require_regeneratorRuntime()();
    module.exports = runtime;
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  }
});

// node_modules/@babel/runtime/helpers/asyncToGenerator.js
var require_asyncToGenerator = __commonJS({
  "node_modules/@babel/runtime/helpers/asyncToGenerator.js"(exports, module) {
    function asyncGeneratorStep(n, t, e, r, o, a, c) {
      try {
        var i = n[a](c), u = i.value;
      } catch (n2) {
        return void e(n2);
      }
      i.done ? t(u) : Promise.resolve(u).then(r, o);
    }
    function _asyncToGenerator(n) {
      return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
          var a = n.apply(t, e);
          function _next(n2) {
            asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
          }
          function _throw(n2) {
            asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
          }
          _next(void 0);
        });
      };
    }
    module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/classCallCheck.js
var require_classCallCheck = __commonJS({
  "node_modules/@babel/runtime/helpers/classCallCheck.js"(exports, module) {
    function _classCallCheck(a, n) {
      if (!(a instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/toPrimitive.js
var require_toPrimitive = __commonJS({
  "node_modules/@babel/runtime/helpers/toPrimitive.js"(exports, module) {
    var _typeof = require_typeof()["default"];
    function toPrimitive(t, r) {
      if ("object" != _typeof(t) || !t)
        return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i))
          return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }
    module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/toPropertyKey.js
var require_toPropertyKey = __commonJS({
  "node_modules/@babel/runtime/helpers/toPropertyKey.js"(exports, module) {
    var _typeof = require_typeof()["default"];
    var toPrimitive = require_toPrimitive();
    function toPropertyKey(t) {
      var i = toPrimitive(t, "string");
      return "symbol" == _typeof(i) ? i : i + "";
    }
    module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/createClass.js
var require_createClass = __commonJS({
  "node_modules/@babel/runtime/helpers/createClass.js"(exports, module) {
    var toPropertyKey = require_toPropertyKey();
    function _defineProperties(e, r) {
      for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
      }
    }
    function _createClass(e, r, t) {
      return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: false
      }), e;
    }
    module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/assertThisInitialized.js
var require_assertThisInitialized = __commonJS({
  "node_modules/@babel/runtime/helpers/assertThisInitialized.js"(exports, module) {
    function _assertThisInitialized(e) {
      if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/setPrototypeOf.js
var require_setPrototypeOf = __commonJS({
  "node_modules/@babel/runtime/helpers/setPrototypeOf.js"(exports, module) {
    function _setPrototypeOf(t, e) {
      return module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
        return t2.__proto__ = e2, t2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t, e);
    }
    module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/inherits.js
var require_inherits = __commonJS({
  "node_modules/@babel/runtime/helpers/inherits.js"(exports, module) {
    var setPrototypeOf = require_setPrototypeOf();
    function _inherits(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: true,
          configurable: true
        }
      }), Object.defineProperty(t, "prototype", {
        writable: false
      }), e && setPrototypeOf(t, e);
    }
    module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var require_possibleConstructorReturn = __commonJS({
  "node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"(exports, module) {
    var _typeof = require_typeof()["default"];
    var assertThisInitialized = require_assertThisInitialized();
    function _possibleConstructorReturn(t, e) {
      if (e && ("object" == _typeof(e) || "function" == typeof e))
        return e;
      if (void 0 !== e)
        throw new TypeError("Derived constructors may only return object or undefined");
      return assertThisInitialized(t);
    }
    module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/getPrototypeOf.js
var require_getPrototypeOf = __commonJS({
  "node_modules/@babel/runtime/helpers/getPrototypeOf.js"(exports, module) {
    function _getPrototypeOf(t) {
      return module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
        return t2.__proto__ || Object.getPrototypeOf(t2);
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _getPrototypeOf(t);
    }
    module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/@babel/runtime/helpers/defineProperty.js"(exports, module) {
    var toPropertyKey = require_toPropertyKey();
    function _defineProperty(e, r, t) {
      return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[r] = t, e;
    }
    module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/braintree-web-drop-in/dist/browser/dropin.js
var require_dropin = __commonJS({
  "node_modules/braintree-web-drop-in/dist/browser/dropin.js"(exports, module) {
    (function(f) {
      if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f();
      } else if (typeof define === "function" && define.amd) {
        define([], f);
      } else {
        var g;
        if (typeof window !== "undefined") {
          g = window;
        } else if (typeof global !== "undefined") {
          g = global;
        } else if (typeof self !== "undefined") {
          g = self;
        } else {
          g = this;
        }
        (g.braintree || (g.braintree = {})).dropin = f();
      }
    })(function() {
      var define2, module2, exports2;
      return function() {
        function r(e, n, t) {
          function o(i2, f) {
            if (!n[i2]) {
              if (!e[i2]) {
                var c = "function" == typeof __require && __require;
                if (!f && c)
                  return c(i2, true);
                if (u)
                  return u(i2, true);
                var a = new Error("Cannot find module '" + i2 + "'");
                throw a.code = "MODULE_NOT_FOUND", a;
              }
              var p = n[i2] = { exports: {} };
              e[i2][0].call(p.exports, function(r2) {
                var n2 = e[i2][1][r2];
                return o(n2 || r2);
              }, p, p.exports, r, e, n, t);
            }
            return n[i2].exports;
          }
          for (var u = "function" == typeof __require && __require, i = 0; i < t.length; i++)
            o(t[i]);
          return o;
        }
        return r;
      }()({ 1: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.loadStylesheet = exports3.loadScript = void 0;
        var loadScript = require2("./load-script");
        exports3.loadScript = loadScript;
        var loadStylesheet = require2("./load-stylesheet");
        exports3.loadStylesheet = loadStylesheet;
      }, { "./load-script": 2, "./load-stylesheet": 3 }], 2: [function(require2, module3, exports3) {
        "use strict";
        var scriptPromiseCache = {};
        function loadScript(options) {
          var scriptLoadPromise;
          var stringifiedOptions = JSON.stringify(options);
          if (!options.forceScriptReload) {
            scriptLoadPromise = scriptPromiseCache[stringifiedOptions];
            if (scriptLoadPromise) {
              return scriptLoadPromise;
            }
          }
          var script = document.createElement("script");
          var attrs = options.dataAttributes || {};
          var container = options.container || document.head;
          script.src = options.src;
          script.id = options.id || "";
          script.async = true;
          if (options.type) {
            script.setAttribute("type", "".concat(options.type));
          }
          if (options.crossorigin) {
            script.setAttribute("crossorigin", "".concat(options.crossorigin));
          }
          Object.keys(attrs).forEach(function(key) {
            script.setAttribute("data-".concat(key), "".concat(attrs[key]));
          });
          scriptLoadPromise = new Promise(function(resolve, reject) {
            script.addEventListener("load", function() {
              resolve(script);
            });
            script.addEventListener("error", function() {
              reject(new Error("".concat(options.src, " failed to load.")));
            });
            script.addEventListener("abort", function() {
              reject(new Error("".concat(options.src, " has aborted.")));
            });
            container.appendChild(script);
          });
          scriptPromiseCache[stringifiedOptions] = scriptLoadPromise;
          return scriptLoadPromise;
        }
        loadScript.clearCache = function() {
          scriptPromiseCache = {};
        };
        module3.exports = loadScript;
      }, {}], 3: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function loadStylesheet(options) {
          var stylesheet = document.querySelector('link[href="'.concat(options.href, '"]'));
          if (stylesheet) {
            return Promise.resolve(stylesheet);
          }
          stylesheet = document.createElement("link");
          var container = options.container || document.head;
          stylesheet.setAttribute("rel", "stylesheet");
          stylesheet.setAttribute("type", "text/css");
          stylesheet.setAttribute("href", options.href);
          stylesheet.setAttribute("id", options.id);
          if (container.firstChild) {
            container.insertBefore(stylesheet, container.firstChild);
          } else {
            container.appendChild(stylesheet);
          }
          return Promise.resolve(stylesheet);
        };
      }, {}], 4: [function(require2, module3, exports3) {
        module3.exports = require2("./dist/load-script");
      }, { "./dist/load-script": 2 }], 5: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function isAndroid(ua) {
          ua = ua || window.navigator.userAgent;
          return /Android/i.test(ua);
        };
      }, {}], 6: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function isChromeOS(ua) {
          ua = ua || window.navigator.userAgent;
          return /CrOS/i.test(ua);
        };
      }, {}], 7: [function(require2, module3, exports3) {
        "use strict";
        var isEdge = require2("./is-edge");
        var isSamsung = require2("./is-samsung");
        var isDuckDuckGo = require2("./is-duckduckgo");
        var isOpera = require2("./is-opera");
        var isSilk = require2("./is-silk");
        module3.exports = function isChrome(ua) {
          ua = ua || window.navigator.userAgent;
          return (ua.indexOf("Chrome") !== -1 || ua.indexOf("CriOS") !== -1) && !isEdge(ua) && !isSamsung(ua) && !isDuckDuckGo(ua) && !isOpera(ua) && !isSilk(ua);
        };
      }, { "./is-duckduckgo": 8, "./is-edge": 9, "./is-opera": 20, "./is-samsung": 21, "./is-silk": 22 }], 8: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function isDuckDuckGo(ua) {
          ua = ua || window.navigator.userAgent;
          return ua.indexOf("DuckDuckGo/") !== -1;
        };
      }, {}], 9: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function isEdge(ua) {
          ua = ua || window.navigator.userAgent;
          return ua.indexOf("Edge/") !== -1 || ua.indexOf("Edg/") !== -1;
        };
      }, {}], 10: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function isFirefox(ua) {
          ua = ua || window.navigator.userAgent;
          return /Firefox/i.test(ua);
        };
      }, {}], 11: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function isIe10(ua) {
          ua = ua || window.navigator.userAgent;
          return ua.indexOf("MSIE 10") !== -1;
        };
      }, {}], 12: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function isIe9(ua) {
          ua = ua || window.navigator.userAgent;
          return ua.indexOf("MSIE 9") !== -1;
        };
      }, {}], 13: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function isIosFirefox(ua) {
          ua = ua || window.navigator.userAgent;
          return /FxiOS/i.test(ua);
        };
      }, {}], 14: [function(require2, module3, exports3) {
        "use strict";
        var isIos = require2("./is-ios");
        function isGoogleSearchApp(ua) {
          return /\bGSA\b/.test(ua);
        }
        module3.exports = function isIosGoogleSearchApp(ua) {
          ua = ua || window.navigator.userAgent;
          return isIos(ua) && isGoogleSearchApp(ua);
        };
      }, { "./is-ios": 18 }], 15: [function(require2, module3, exports3) {
        "use strict";
        var isIos = require2("./is-ios");
        var isIosFirefox = require2("./is-ios-firefox");
        var webkitRegexp = /webkit/i;
        function isWebkit(ua) {
          return webkitRegexp.test(ua);
        }
        function isIosChrome(ua) {
          return ua.indexOf("CriOS") > -1;
        }
        function isFacebook(ua) {
          return ua.indexOf("FBAN") > -1;
        }
        module3.exports = function isIosSafari(ua) {
          ua = ua || window.navigator.userAgent;
          return isIos(ua) && isWebkit(ua) && !isIosChrome(ua) && !isIosFirefox(ua) && !isFacebook(ua);
        };
      }, { "./is-ios": 18, "./is-ios-firefox": 13 }], 16: [function(require2, module3, exports3) {
        "use strict";
        var isIos = require2("./is-ios");
        var isIosGoogleSearchApp = require2("./is-ios-google-search-app");
        module3.exports = function isIosWebview(ua) {
          ua = ua || window.navigator.userAgent;
          if (isIos(ua)) {
            if (isIosGoogleSearchApp(ua)) {
              return true;
            }
            return /.+AppleWebKit(?!.*Safari)/i.test(ua);
          }
          return false;
        };
      }, { "./is-ios": 18, "./is-ios-google-search-app": 14 }], 17: [function(require2, module3, exports3) {
        "use strict";
        var isIosWebview = require2("./is-ios-webview");
        module3.exports = function isIosWKWebview(ua, statusBarVisible) {
          statusBarVisible = typeof statusBarVisible !== "undefined" ? statusBarVisible : window.statusbar.visible;
          return isIosWebview(ua) && statusBarVisible;
        };
      }, { "./is-ios-webview": 16 }], 18: [function(require2, module3, exports3) {
        "use strict";
        var isIpadOS = require2("./is-ipados");
        module3.exports = function isIos(ua, checkIpadOS, document2) {
          if (checkIpadOS === void 0) {
            checkIpadOS = true;
          }
          ua = ua || window.navigator.userAgent;
          var iOsTest = /iPhone|iPod|iPad/i.test(ua);
          return checkIpadOS ? iOsTest || isIpadOS(ua, document2) : iOsTest;
        };
      }, { "./is-ipados": 19 }], 19: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function isIpadOS(ua, document2) {
          ua = ua || window.navigator.userAgent;
          document2 = document2 || window.document;
          return /Mac|iPad/i.test(ua) && "ontouchend" in document2;
        };
      }, {}], 20: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function isOpera(ua) {
          ua = ua || window.navigator.userAgent;
          return ua.indexOf("OPR/") !== -1 || ua.indexOf("Opera/") !== -1 || ua.indexOf("OPT/") !== -1;
        };
      }, {}], 21: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function isSamsungBrowser(ua) {
          ua = ua || window.navigator.userAgent;
          return /SamsungBrowser/i.test(ua);
        };
      }, {}], 22: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function isSilk(ua) {
          ua = ua || window.navigator.userAgent;
          return ua.indexOf("Silk/") !== -1;
        };
      }, {}], 23: [function(require2, module3, exports3) {
        "use strict";
        var MINIMUM_SUPPORTED_CHROME_IOS_VERSION = 48;
        var isAndroid = require2("./is-android");
        var isIosFirefox = require2("./is-ios-firefox");
        var isIosWebview = require2("./is-ios-webview");
        var isChrome = require2("./is-chrome");
        var isSamsungBrowser = require2("./is-samsung");
        var isDuckDuckGo = require2("./is-duckduckgo");
        function isUnsupportedIosChrome(ua) {
          ua = ua || window.navigator.userAgent;
          var match = ua.match(/CriOS\/(\d+)\./);
          if (!match) {
            return false;
          }
          var version = parseInt(match[1], 10);
          return version < MINIMUM_SUPPORTED_CHROME_IOS_VERSION;
        }
        function isOperaMini(ua) {
          ua = ua || window.navigator.userAgent;
          return ua.indexOf("Opera Mini") > -1;
        }
        function isAndroidWebview(ua) {
          var androidWebviewRegExp = /Version\/[\d.]+/i;
          ua = ua || window.navigator.userAgent;
          if (isAndroid(ua)) {
            return androidWebviewRegExp.test(ua) && !isOperaMini(ua) && !isDuckDuckGo(ua);
          }
          return false;
        }
        function isOldSamsungBrowserOrSamsungWebview(ua) {
          return !isChrome(ua) && !isSamsungBrowser(ua) && /samsung/i.test(ua);
        }
        module3.exports = function supportsPopups(ua) {
          ua = ua || window.navigator.userAgent;
          return !(isIosWebview(ua) || isIosFirefox(ua) || isAndroidWebview(ua) || isOperaMini(ua) || isUnsupportedIosChrome(ua) || isOldSamsungBrowserOrSamsungWebview(ua));
        };
      }, { "./is-android": 5, "./is-chrome": 7, "./is-duckduckgo": 8, "./is-ios-firefox": 13, "./is-ios-webview": 16, "./is-samsung": 21 }], 24: [function(require2, module3, exports3) {
        module3.exports = require2("./dist/is-android");
      }, { "./dist/is-android": 5 }], 25: [function(require2, module3, exports3) {
        module3.exports = require2("./dist/is-chrome-os");
      }, { "./dist/is-chrome-os": 6 }], 26: [function(require2, module3, exports3) {
        module3.exports = require2("./dist/is-chrome");
      }, { "./dist/is-chrome": 7 }], 27: [function(require2, module3, exports3) {
        module3.exports = require2("./dist/is-firefox");
      }, { "./dist/is-firefox": 10 }], 28: [function(require2, module3, exports3) {
        module3.exports = require2("./dist/is-ie10");
      }, { "./dist/is-ie10": 11 }], 29: [function(require2, module3, exports3) {
        module3.exports = require2("./dist/is-ie9");
      }, { "./dist/is-ie9": 12 }], 30: [function(require2, module3, exports3) {
        module3.exports = require2("./dist/is-ios-safari");
      }, { "./dist/is-ios-safari": 15 }], 31: [function(require2, module3, exports3) {
        module3.exports = require2("./dist/is-ios-webview");
      }, { "./dist/is-ios-webview": 16 }], 32: [function(require2, module3, exports3) {
        module3.exports = require2("./dist/is-ios-wkwebview");
      }, { "./dist/is-ios-wkwebview": 17 }], 33: [function(require2, module3, exports3) {
        module3.exports = require2("./dist/is-ios");
      }, { "./dist/is-ios": 18 }], 34: [function(require2, module3, exports3) {
        module3.exports = require2("./dist/is-samsung");
      }, { "./dist/is-samsung": 21 }], 35: [function(require2, module3, exports3) {
        module3.exports = require2("./dist/supports-popups");
      }, { "./dist/supports-popups": 23 }], 36: [function(require2, module3, exports3) {
        "use strict";
        var EventEmitter = (
          /** @class */
          function() {
            function EventEmitter2() {
              this._events = {};
            }
            EventEmitter2.prototype.on = function(event, callback) {
              if (this._events[event]) {
                this._events[event].push(callback);
              } else {
                this._events[event] = [callback];
              }
            };
            EventEmitter2.prototype.off = function(event, callback) {
              var eventCallbacks = this._events[event];
              if (!eventCallbacks) {
                return;
              }
              var indexOfCallback = eventCallbacks.indexOf(callback);
              eventCallbacks.splice(indexOfCallback, 1);
            };
            EventEmitter2.prototype._emit = function(event) {
              var args = [];
              for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
              }
              var eventCallbacks = this._events[event];
              if (!eventCallbacks) {
                return;
              }
              eventCallbacks.forEach(function(callback) {
                callback.apply(void 0, args);
              });
            };
            EventEmitter2.prototype.hasListener = function(event) {
              var eventCallbacks = this._events[event];
              if (!eventCallbacks) {
                return false;
              }
              return eventCallbacks.length > 0;
            };
            EventEmitter2.createChild = function(ChildObject) {
              ChildObject.prototype = Object.create(EventEmitter2.prototype, {
                constructor: ChildObject
              });
            };
            return EventEmitter2;
          }()
        );
        module3.exports = EventEmitter;
      }, {}], 37: [function(require2, module3, exports3) {
        "use strict";
        var GlobalPromise = typeof Promise !== "undefined" ? Promise : null;
        var ExtendedPromise = (
          /** @class */
          function() {
            function ExtendedPromise2(options) {
              var _this = this;
              if (typeof options === "function") {
                this._promise = new ExtendedPromise2.Promise(options);
                return;
              }
              this._promise = new ExtendedPromise2.Promise(function(resolve, reject) {
                _this._resolveFunction = resolve;
                _this._rejectFunction = reject;
              });
              options = options || {};
              this._onResolve = options.onResolve || ExtendedPromise2.defaultOnResolve;
              this._onReject = options.onReject || ExtendedPromise2.defaultOnReject;
              if (ExtendedPromise2.shouldCatchExceptions(options)) {
                this._promise.catch(function() {
                });
              }
              this._resetState();
            }
            ExtendedPromise2.defaultOnResolve = function(result) {
              return ExtendedPromise2.Promise.resolve(result);
            };
            ExtendedPromise2.defaultOnReject = function(err) {
              return ExtendedPromise2.Promise.reject(err);
            };
            ExtendedPromise2.setPromise = function(PromiseClass) {
              ExtendedPromise2.Promise = PromiseClass;
            };
            ExtendedPromise2.shouldCatchExceptions = function(options) {
              if (options.hasOwnProperty("suppressUnhandledPromiseMessage")) {
                return Boolean(options.suppressUnhandledPromiseMessage);
              }
              return Boolean(ExtendedPromise2.suppressUnhandledPromiseMessage);
            };
            ExtendedPromise2.all = function(args) {
              return ExtendedPromise2.Promise.all(args);
            };
            ExtendedPromise2.allSettled = function(args) {
              return ExtendedPromise2.Promise.allSettled(args);
            };
            ExtendedPromise2.race = function(args) {
              return ExtendedPromise2.Promise.race(args);
            };
            ExtendedPromise2.reject = function(arg) {
              return ExtendedPromise2.Promise.reject(arg);
            };
            ExtendedPromise2.resolve = function(arg) {
              return ExtendedPromise2.Promise.resolve(arg);
            };
            ExtendedPromise2.prototype.then = function() {
              var _a;
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              return (_a = this._promise).then.apply(_a, args);
            };
            ExtendedPromise2.prototype.catch = function() {
              var _a;
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              return (_a = this._promise).catch.apply(_a, args);
            };
            ExtendedPromise2.prototype.resolve = function(arg) {
              var _this = this;
              if (this.isFulfilled) {
                return this;
              }
              this._setResolved();
              ExtendedPromise2.Promise.resolve().then(function() {
                return _this._onResolve(arg);
              }).then(function(argForResolveFunction) {
                _this._resolveFunction(argForResolveFunction);
              }).catch(function(err) {
                _this._resetState();
                _this.reject(err);
              });
              return this;
            };
            ExtendedPromise2.prototype.reject = function(arg) {
              var _this = this;
              if (this.isFulfilled) {
                return this;
              }
              this._setRejected();
              ExtendedPromise2.Promise.resolve().then(function() {
                return _this._onReject(arg);
              }).then(function(result) {
                _this._setResolved();
                _this._resolveFunction(result);
              }).catch(function(err) {
                return _this._rejectFunction(err);
              });
              return this;
            };
            ExtendedPromise2.prototype._resetState = function() {
              this.isFulfilled = false;
              this.isResolved = false;
              this.isRejected = false;
            };
            ExtendedPromise2.prototype._setResolved = function() {
              this.isFulfilled = true;
              this.isResolved = true;
              this.isRejected = false;
            };
            ExtendedPromise2.prototype._setRejected = function() {
              this.isFulfilled = true;
              this.isResolved = false;
              this.isRejected = true;
            };
            ExtendedPromise2.Promise = GlobalPromise;
            return ExtendedPromise2;
          }()
        );
        module3.exports = ExtendedPromise;
      }, {}], 38: [function(require2, module3, exports3) {
        "use strict";
        var set_attributes_1 = require2("./lib/set-attributes");
        var default_attributes_1 = require2("./lib/default-attributes");
        var assign_1 = require2("./lib/assign");
        module3.exports = function createFrame(options) {
          if (options === void 0) {
            options = {};
          }
          var iframe = document.createElement("iframe");
          var config = (0, assign_1.assign)({}, default_attributes_1.defaultAttributes, options);
          if (config.style && typeof config.style !== "string") {
            (0, assign_1.assign)(iframe.style, config.style);
            delete config.style;
          }
          (0, set_attributes_1.setAttributes)(iframe, config);
          if (!iframe.getAttribute("id")) {
            iframe.id = iframe.name;
          }
          return iframe;
        };
      }, { "./lib/assign": 39, "./lib/default-attributes": 40, "./lib/set-attributes": 41 }], 39: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.assign = void 0;
        function assign(target) {
          var objs = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            objs[_i - 1] = arguments[_i];
          }
          objs.forEach(function(obj) {
            if (typeof obj !== "object") {
              return;
            }
            Object.keys(obj).forEach(function(key) {
              target[key] = obj[key];
            });
          });
          return target;
        }
        exports3.assign = assign;
      }, {}], 40: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.defaultAttributes = void 0;
        exports3.defaultAttributes = {
          src: "about:blank",
          frameBorder: 0,
          allowtransparency: true,
          scrolling: "no"
        };
      }, {}], 41: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.setAttributes = void 0;
        function setAttributes(element, attributes) {
          for (var key in attributes) {
            if (attributes.hasOwnProperty(key)) {
              var value = attributes[key];
              if (value == null) {
                element.removeAttribute(key);
              } else {
                element.setAttribute(key, value);
              }
            }
          }
        }
        exports3.setAttributes = setAttributes;
      }, {}], 42: [function(require2, module3, exports3) {
        "use strict";
        function uuid() {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0;
            var v = c === "x" ? r : r & 3 | 8;
            return v.toString(16);
          });
        }
        module3.exports = uuid;
      }, {}], 43: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        function deferred(fn) {
          return function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            setTimeout(function() {
              try {
                fn.apply(void 0, args);
              } catch (err) {
                console.log("Error in callback function");
                console.log(err);
              }
            }, 1);
          };
        }
        exports3.deferred = deferred;
      }, {}], 44: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        function once(fn) {
          var called = false;
          return function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            if (!called) {
              called = true;
              fn.apply(void 0, args);
            }
          };
        }
        exports3.once = once;
      }, {}], 45: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        function promiseOrCallback(promise, callback) {
          if (!callback) {
            return promise;
          }
          promise.then(function(data) {
            return callback(null, data);
          }).catch(function(err) {
            return callback(err);
          });
        }
        exports3.promiseOrCallback = promiseOrCallback;
      }, {}], 46: [function(require2, module3, exports3) {
        "use strict";
        var deferred_1 = require2("./lib/deferred");
        var once_1 = require2("./lib/once");
        var promise_or_callback_1 = require2("./lib/promise-or-callback");
        function wrapPromise(fn) {
          return function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            var callback;
            var lastArg = args[args.length - 1];
            if (typeof lastArg === "function") {
              callback = args.pop();
              callback = once_1.once(deferred_1.deferred(callback));
            }
            return promise_or_callback_1.promiseOrCallback(fn.apply(this, args), callback);
          };
        }
        wrapPromise.wrapPrototype = function(target, options) {
          if (options === void 0) {
            options = {};
          }
          var ignoreMethods = options.ignoreMethods || [];
          var includePrivateMethods = options.transformPrivateMethods === true;
          var methods = Object.getOwnPropertyNames(target.prototype).filter(function(method) {
            var isNotPrivateMethod;
            var isNonConstructorFunction = method !== "constructor" && typeof target.prototype[method] === "function";
            var isNotAnIgnoredMethod = ignoreMethods.indexOf(method) === -1;
            if (includePrivateMethods) {
              isNotPrivateMethod = true;
            } else {
              isNotPrivateMethod = method.charAt(0) !== "_";
            }
            return isNonConstructorFunction && isNotPrivateMethod && isNotAnIgnoredMethod;
          });
          methods.forEach(function(method) {
            var original = target.prototype[method];
            target.prototype[method] = wrapPromise(original);
          });
          return target;
        };
        module3.exports = wrapPromise;
      }, { "./lib/deferred": 43, "./lib/once": 44, "./lib/promise-or-callback": 45 }], 47: [function(require2, module3, exports3) {
        "use strict";
        var BraintreeError = require2("../lib/braintree-error");
        var analytics = require2("../lib/analytics");
        var errors = require2("./errors");
        var methods = require2("../lib/methods");
        var convertMethodsToError = require2("../lib/convert-methods-to-error");
        var wrapPromise = require2("@braintree/wrap-promise");
        function ApplePay(options) {
          this._instantiatedWithClient = Boolean(!options.useDeferredClient);
          this._client = options.client;
          this._createPromise = options.createPromise;
          if (this._client) {
            this._setMerchantIdentifier();
          }
        }
        ApplePay.prototype._waitForClient = function() {
          if (this._client) {
            return Promise.resolve();
          }
          return this._createPromise.then(
            (function(client) {
              this._client = client;
              this._setMerchantIdentifier();
            }).bind(this)
          );
        };
        ApplePay.prototype._setMerchantIdentifier = function() {
          var applePayConfig = this._client.getConfiguration().gatewayConfiguration.applePayWeb;
          if (!applePayConfig) {
            return;
          }
          Object.defineProperty(this, "merchantIdentifier", {
            value: applePayConfig.merchantIdentifier,
            configurable: false,
            writable: false
          });
        };
        ApplePay.prototype.createPaymentRequest = function(paymentRequest) {
          if (this._instantiatedWithClient) {
            return this._createPaymentRequestSynchronously(paymentRequest);
          }
          return this._waitForClient().then(
            (function() {
              return this._createPaymentRequestSynchronously(paymentRequest);
            }).bind(this)
          );
        };
        ApplePay.prototype._createPaymentRequestSynchronously = function(paymentRequest) {
          var applePay = this._client.getConfiguration().gatewayConfiguration.applePayWeb;
          var defaults = {
            countryCode: applePay.countryCode,
            currencyCode: applePay.currencyCode,
            merchantCapabilities: applePay.merchantCapabilities || ["supports3DS"],
            supportedNetworks: applePay.supportedNetworks.map(function(network) {
              return network === "mastercard" ? "masterCard" : network;
            })
          };
          return Object.assign({}, defaults, paymentRequest);
        };
        ApplePay.prototype.performValidation = function(options) {
          var self2 = this;
          if (!options || !options.validationURL) {
            return Promise.reject(
              new BraintreeError(errors.APPLE_PAY_VALIDATION_URL_REQUIRED)
            );
          }
          return this._waitForClient().then(function() {
            var applePayWebSession = {
              validationUrl: options.validationURL,
              domainName: options.domainName || window.location.hostname,
              merchantIdentifier: options.merchantIdentifier || self2.merchantIdentifier
            };
            if (options.displayName != null) {
              applePayWebSession.displayName = options.displayName;
            }
            return self2._client.request({
              method: "post",
              endpoint: "apple_pay_web/sessions",
              data: {
                _meta: { source: "apple-pay" },
                applePayWebSession
              }
            });
          }).then(function(response) {
            analytics.sendEvent(self2._client, "applepay.performValidation.succeeded");
            return Promise.resolve(response);
          }).catch(function(err) {
            analytics.sendEvent(self2._client, "applepay.performValidation.failed");
            if (err.code === "CLIENT_REQUEST_ERROR") {
              return Promise.reject(
                new BraintreeError({
                  type: errors.APPLE_PAY_MERCHANT_VALIDATION_FAILED.type,
                  code: errors.APPLE_PAY_MERCHANT_VALIDATION_FAILED.code,
                  message: errors.APPLE_PAY_MERCHANT_VALIDATION_FAILED.message,
                  details: {
                    originalError: err.details.originalError
                  }
                })
              );
            }
            return Promise.reject(
              new BraintreeError({
                type: errors.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.type,
                code: errors.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.code,
                message: errors.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.message,
                details: {
                  originalError: err
                }
              })
            );
          });
        };
        ApplePay.prototype.tokenize = function(options) {
          var self2 = this;
          if (!options.token) {
            return Promise.reject(
              new BraintreeError(errors.APPLE_PAY_PAYMENT_TOKEN_REQUIRED)
            );
          }
          return this._waitForClient().then(function() {
            return self2._client.request({
              method: "post",
              endpoint: "payment_methods/apple_payment_tokens",
              data: {
                _meta: {
                  source: "apple-pay"
                },
                applePaymentToken: Object.assign({}, options.token, {
                  // The gateway requires this key to be base64-encoded.
                  paymentData: btoa(JSON.stringify(options.token.paymentData))
                })
              }
            });
          }).then(function(response) {
            analytics.sendEvent(self2._client, "applepay.tokenize.succeeded");
            return Promise.resolve(response.applePayCards[0]);
          }).catch(function(err) {
            analytics.sendEvent(self2._client, "applepay.tokenize.failed");
            return Promise.reject(
              new BraintreeError({
                type: errors.APPLE_PAY_TOKENIZATION.type,
                code: errors.APPLE_PAY_TOKENIZATION.code,
                message: errors.APPLE_PAY_TOKENIZATION.message,
                details: {
                  originalError: err
                }
              })
            );
          });
        };
        ApplePay.prototype.teardown = function() {
          convertMethodsToError(this, methods(ApplePay.prototype));
          return Promise.resolve();
        };
        module3.exports = wrapPromise.wrapPrototype(ApplePay);
      }, { "../lib/analytics": 85, "../lib/braintree-error": 90, "../lib/convert-methods-to-error": 92, "../lib/methods": 120, "./errors": 48, "@braintree/wrap-promise": 46 }], 48: [function(require2, module3, exports3) {
        "use strict";
        var BraintreeError = require2("../lib/braintree-error");
        module3.exports = {
          APPLE_PAY_NOT_ENABLED: {
            type: BraintreeError.types.MERCHANT,
            code: "APPLE_PAY_NOT_ENABLED",
            message: "Apple Pay is not enabled for this merchant."
          },
          APPLE_PAY_VALIDATION_URL_REQUIRED: {
            type: BraintreeError.types.MERCHANT,
            code: "APPLE_PAY_VALIDATION_URL_REQUIRED",
            message: "performValidation must be called with a validationURL."
          },
          APPLE_PAY_MERCHANT_VALIDATION_NETWORK: {
            type: BraintreeError.types.NETWORK,
            code: "APPLE_PAY_MERCHANT_VALIDATION_NETWORK",
            message: "A network error occurred when validating the Apple Pay merchant."
          },
          APPLE_PAY_MERCHANT_VALIDATION_FAILED: {
            type: BraintreeError.types.MERCHANT,
            code: "APPLE_PAY_MERCHANT_VALIDATION_FAILED",
            message: "Make sure you have registered your domain name in the Braintree Control Panel."
          },
          APPLE_PAY_PAYMENT_TOKEN_REQUIRED: {
            type: BraintreeError.types.MERCHANT,
            code: "APPLE_PAY_PAYMENT_TOKEN_REQUIRED",
            message: "tokenize must be called with a payment token."
          },
          APPLE_PAY_TOKENIZATION: {
            type: BraintreeError.types.NETWORK,
            code: "APPLE_PAY_TOKENIZATION",
            message: "A network error occurred when processing the Apple Pay payment."
          }
        };
      }, { "../lib/braintree-error": 90 }], 49: [function(require2, module3, exports3) {
        "use strict";
        var ApplePay = require2("./apple-pay");
        var analytics = require2("../lib/analytics");
        var BraintreeError = require2("../lib/braintree-error");
        var basicComponentVerification = require2("../lib/basic-component-verification");
        var createAssetsUrl = require2("../lib/create-assets-url");
        var createDeferredClient = require2("../lib/create-deferred-client");
        var errors = require2("./errors");
        var VERSION = "3.103.0";
        var wrapPromise = require2("@braintree/wrap-promise");
        function create(options) {
          var name = "Apple Pay";
          return basicComponentVerification.verify({
            name,
            client: options.client,
            authorization: options.authorization
          }).then(function() {
            var applePayInstance;
            var createPromise = createDeferredClient.create({
              authorization: options.authorization,
              client: options.client,
              debug: options.debug,
              assetsUrl: createAssetsUrl.create(options.authorization),
              name
            }).then(function(client) {
              if (!client.getConfiguration().gatewayConfiguration.applePayWeb) {
                return Promise.reject(
                  new BraintreeError(errors.APPLE_PAY_NOT_ENABLED)
                );
              }
              analytics.sendEvent(client, "applepay.initialized");
              return client;
            });
            options.createPromise = createPromise;
            applePayInstance = new ApplePay(options);
            if (!options.useDeferredClient) {
              return createPromise.then(function(client) {
                applePayInstance._client = client;
                return applePayInstance;
              });
            }
            return applePayInstance;
          });
        }
        module3.exports = {
          create: wrapPromise(create),
          /**
           * @description The current version of the SDK, i.e. `1.43.0`.
           * @type {string}
           */
          VERSION
        };
      }, { "../lib/analytics": 85, "../lib/basic-component-verification": 88, "../lib/braintree-error": 90, "../lib/create-assets-url": 94, "../lib/create-deferred-client": 96, "./apple-pay": 47, "./errors": 48, "@braintree/wrap-promise": 46 }], 50: [function(require2, module3, exports3) {
        "use strict";
        var BRAINTREE_VERSION = require2("./constants").BRAINTREE_VERSION;
        var GraphQL = require2("./request/graphql");
        var request = require2("./request");
        var isVerifiedDomain = require2("../lib/is-verified-domain");
        var BraintreeError = require2("../lib/braintree-error");
        var convertToBraintreeError = require2("../lib/convert-to-braintree-error");
        var getGatewayConfiguration = require2("./get-configuration").getConfiguration;
        var createAuthorizationData = require2("../lib/create-authorization-data");
        var addMetadata = require2("../lib/add-metadata");
        var wrapPromise = require2("@braintree/wrap-promise");
        var once = require2("../lib/once");
        var deferred = require2("../lib/deferred");
        var assign = require2("../lib/assign").assign;
        var analytics = require2("../lib/analytics");
        var errors = require2("./errors");
        var VERSION = require2("../lib/constants").VERSION;
        var GRAPHQL_URLS = require2("../lib/constants").GRAPHQL_URLS;
        var methods = require2("../lib/methods");
        var convertMethodsToError = require2("../lib/convert-methods-to-error");
        var assets = require2("../lib/assets");
        var FRAUDNET_FNCLS = require2("../lib/constants").FRAUDNET_FNCLS;
        var FRAUDNET_SOURCE = require2("../lib/constants").FRAUDNET_SOURCE;
        var FRAUDNET_URL = require2("../lib/constants").FRAUDNET_URL;
        var cachedClients = {};
        function Client(configuration) {
          var configurationJSON, gatewayConfiguration;
          configuration = configuration || {};
          configurationJSON = JSON.stringify(configuration);
          gatewayConfiguration = configuration.gatewayConfiguration;
          if (!gatewayConfiguration) {
            throw new BraintreeError(errors.CLIENT_MISSING_GATEWAY_CONFIGURATION);
          }
          ["assetsUrl", "clientApiUrl", "configUrl"].forEach(function(property) {
            if (property in gatewayConfiguration && !isVerifiedDomain(gatewayConfiguration[property])) {
              throw new BraintreeError({
                type: errors.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,
                code: errors.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,
                message: property + " property is on an invalid domain."
              });
            }
          });
          this.getConfiguration = function() {
            return JSON.parse(configurationJSON);
          };
          this._request = request;
          this._configuration = this.getConfiguration();
          this._clientApiBaseUrl = gatewayConfiguration.clientApiUrl + "/v1/";
          if (gatewayConfiguration.graphQL) {
            if (!isVerifiedDomain(gatewayConfiguration.graphQL.url)) {
              throw new BraintreeError({
                type: errors.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,
                code: errors.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,
                message: "graphQL.url property is on an invalid domain."
              });
            }
            this._graphQL = new GraphQL({
              graphQL: gatewayConfiguration.graphQL
            });
          }
        }
        Client.initialize = function(options) {
          var clientInstance, authData;
          var promise = cachedClients[options.authorization];
          if (promise) {
            analytics.sendEvent(promise, "custom.client.load.cached");
            return promise;
          }
          try {
            authData = createAuthorizationData(options.authorization);
          } catch (err) {
            return Promise.reject(
              new BraintreeError(errors.CLIENT_INVALID_AUTHORIZATION)
            );
          }
          promise = getGatewayConfiguration(authData).then(function(configuration) {
            if (options.debug) {
              configuration.isDebug = true;
            }
            configuration.authorization = options.authorization;
            clientInstance = new Client(configuration);
            return clientInstance;
          });
          cachedClients[options.authorization] = promise;
          analytics.sendEvent(promise, "custom.client.load.initialized");
          return promise.then(function(client) {
            analytics.sendEvent(clientInstance, "custom.client.load.succeeded");
            return client;
          }).catch(function(err) {
            delete cachedClients[options.authorization];
            return Promise.reject(err);
          });
        };
        Client.clearCache = function() {
          cachedClients = {};
        };
        Client.prototype._findOrCreateFraudnetJSON = function(clientMetadataId) {
          var el = document.querySelector('script[fncls="' + FRAUDNET_FNCLS + '"]');
          var config, additionalData, authorizationFingerprint, parameters;
          if (!el) {
            el = document.body.appendChild(document.createElement("script"));
            el.type = "application/json";
            el.setAttribute("fncls", FRAUDNET_FNCLS);
          }
          config = this.getConfiguration();
          additionalData = {
            rda_tenant: "bt_card",
            // eslint-disable-line camelcase
            mid: config.gatewayConfiguration.merchantId
          };
          authorizationFingerprint = config.authorizationFingerprint;
          if (authorizationFingerprint) {
            authorizationFingerprint.split("&").forEach(function(pieces) {
              var component = pieces.split("=");
              if (component[0] === "customer_id" && component.length > 1) {
                additionalData.cid = component[1];
              }
            });
          }
          parameters = {
            f: clientMetadataId.substr(0, 32),
            fp: additionalData,
            bu: false,
            s: FRAUDNET_SOURCE
          };
          el.text = JSON.stringify(parameters);
        };
        Client.prototype.request = function(options, callback) {
          var self2 = this;
          var requestPromise = new Promise(function(resolve, reject) {
            var optionName, api, baseUrl, requestOptions;
            var shouldCollectData = Boolean(
              options.endpoint === "payment_methods/credit_cards" && self2.getConfiguration().gatewayConfiguration.creditCards.collectDeviceData
            );
            if (options.api !== "graphQLApi") {
              if (!options.method) {
                optionName = "options.method";
              } else if (!options.endpoint) {
                optionName = "options.endpoint";
              }
            }
            if (optionName) {
              throw new BraintreeError({
                type: errors.CLIENT_OPTION_REQUIRED.type,
                code: errors.CLIENT_OPTION_REQUIRED.code,
                message: optionName + " is required when making a request."
              });
            }
            if ("api" in options) {
              api = options.api;
            } else {
              api = "clientApi";
            }
            requestOptions = {
              method: options.method,
              graphQL: self2._graphQL,
              timeout: options.timeout,
              metadata: self2._configuration.analyticsMetadata
            };
            if (api === "clientApi") {
              baseUrl = self2._clientApiBaseUrl;
              requestOptions.data = addMetadata(self2._configuration, options.data);
            } else if (api === "graphQLApi") {
              baseUrl = GRAPHQL_URLS[self2._configuration.gatewayConfiguration.environment];
              options.endpoint = "";
              requestOptions.method = "post";
              requestOptions.data = assign(
                {
                  clientSdkMetadata: {
                    platform: self2._configuration.analyticsMetadata.platform,
                    source: self2._configuration.analyticsMetadata.source,
                    integration: self2._configuration.analyticsMetadata.integration,
                    sessionId: self2._configuration.analyticsMetadata.sessionId,
                    version: VERSION
                  }
                },
                options.data
              );
              requestOptions.headers = getAuthorizationHeadersForGraphQL(
                self2._configuration
              );
            } else {
              throw new BraintreeError({
                type: errors.CLIENT_OPTION_INVALID.type,
                code: errors.CLIENT_OPTION_INVALID.code,
                message: "options.api is invalid."
              });
            }
            requestOptions.url = baseUrl + options.endpoint;
            requestOptions.sendAnalyticsEvent = function(kind) {
              analytics.sendEvent(self2, kind);
            };
            self2._request(requestOptions, function(err, data, status) {
              var resolvedData, requestError;
              requestError = formatRequestError(status, err);
              if (requestError) {
                reject(requestError);
                return;
              }
              if (api === "graphQLApi" && data.errors) {
                reject(
                  convertToBraintreeError(data.errors, {
                    type: errors.CLIENT_GRAPHQL_REQUEST_ERROR.type,
                    code: errors.CLIENT_GRAPHQL_REQUEST_ERROR.code,
                    message: errors.CLIENT_GRAPHQL_REQUEST_ERROR.message
                  })
                );
                return;
              }
              resolvedData = assign({ _httpStatus: status }, data);
              if (shouldCollectData && resolvedData.creditCards && resolvedData.creditCards.length > 0) {
                self2._findOrCreateFraudnetJSON(resolvedData.creditCards[0].nonce);
                assets.loadScript({
                  src: FRAUDNET_URL,
                  forceScriptReload: true
                });
              }
              resolve(resolvedData);
            });
          });
          if (typeof callback === "function") {
            callback = once(deferred(callback));
            requestPromise.then(function(response) {
              callback(null, response, response._httpStatus);
            }).catch(function(err) {
              var status = err && err.details && err.details.httpStatus;
              callback(err, null, status);
            });
            return;
          }
          return requestPromise;
        };
        function formatRequestError(status, err) {
          var requestError;
          if (status === -1) {
            requestError = new BraintreeError(errors.CLIENT_REQUEST_TIMEOUT);
          } else if (status === 401) {
            requestError = new BraintreeError(errors.CLIENT_AUTHORIZATION_INVALID);
          } else if (status === 403) {
            requestError = new BraintreeError(errors.CLIENT_AUTHORIZATION_INSUFFICIENT);
          } else if (status === 429) {
            requestError = new BraintreeError(errors.CLIENT_RATE_LIMITED);
          } else if (status >= 500) {
            requestError = new BraintreeError(errors.CLIENT_GATEWAY_NETWORK);
          } else if (status < 200 || status >= 400) {
            requestError = convertToBraintreeError(err, {
              type: errors.CLIENT_REQUEST_ERROR.type,
              code: errors.CLIENT_REQUEST_ERROR.code,
              message: errors.CLIENT_REQUEST_ERROR.message
            });
          }
          if (requestError) {
            requestError.details = requestError.details || {};
            requestError.details.httpStatus = status;
            return requestError;
          }
        }
        Client.prototype.toJSON = function() {
          return this.getConfiguration();
        };
        Client.prototype.getVersion = function() {
          return VERSION;
        };
        Client.prototype.teardown = wrapPromise(function() {
          var self2 = this;
          delete cachedClients[self2.getConfiguration().authorization];
          convertMethodsToError(self2, methods(Client.prototype));
          return Promise.resolve();
        });
        function getAuthorizationHeadersForGraphQL(configuration) {
          var token = configuration.authorizationFingerprint || configuration.authorization;
          return {
            Authorization: "Bearer " + token,
            "Braintree-Version": BRAINTREE_VERSION
          };
        }
        module3.exports = Client;
      }, { "../lib/add-metadata": 84, "../lib/analytics": 85, "../lib/assets": 86, "../lib/assign": 87, "../lib/braintree-error": 90, "../lib/constants": 91, "../lib/convert-methods-to-error": 92, "../lib/convert-to-braintree-error": 93, "../lib/create-authorization-data": 95, "../lib/deferred": 97, "../lib/is-verified-domain": 118, "../lib/methods": 120, "../lib/once": 121, "./constants": 51, "./errors": 52, "./get-configuration": 53, "./request": 64, "./request/graphql": 62, "@braintree/wrap-promise": 46 }], 51: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          BRAINTREE_VERSION: "2018-05-10"
        };
      }, {}], 52: [function(require2, module3, exports3) {
        "use strict";
        var BraintreeError = require2("../lib/braintree-error");
        module3.exports = {
          CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN: {
            type: BraintreeError.types.MERCHANT,
            code: "CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN"
          },
          CLIENT_OPTION_REQUIRED: {
            type: BraintreeError.types.MERCHANT,
            code: "CLIENT_OPTION_REQUIRED"
          },
          CLIENT_OPTION_INVALID: {
            type: BraintreeError.types.MERCHANT,
            code: "CLIENT_OPTION_INVALID"
          },
          CLIENT_MISSING_GATEWAY_CONFIGURATION: {
            type: BraintreeError.types.INTERNAL,
            code: "CLIENT_MISSING_GATEWAY_CONFIGURATION",
            message: "Missing gatewayConfiguration."
          },
          CLIENT_INVALID_AUTHORIZATION: {
            type: BraintreeError.types.MERCHANT,
            code: "CLIENT_INVALID_AUTHORIZATION",
            message: "Authorization is invalid. Make sure your client token or tokenization key is valid."
          },
          CLIENT_GATEWAY_NETWORK: {
            type: BraintreeError.types.NETWORK,
            code: "CLIENT_GATEWAY_NETWORK",
            message: "Cannot contact the gateway at this time."
          },
          CLIENT_REQUEST_TIMEOUT: {
            type: BraintreeError.types.NETWORK,
            code: "CLIENT_REQUEST_TIMEOUT",
            message: "Request timed out waiting for a reply."
          },
          CLIENT_REQUEST_ERROR: {
            type: BraintreeError.types.NETWORK,
            code: "CLIENT_REQUEST_ERROR",
            message: "There was a problem with your request."
          },
          CLIENT_GRAPHQL_REQUEST_ERROR: {
            type: BraintreeError.types.NETWORK,
            code: "CLIENT_GRAPHQL_REQUEST_ERROR",
            message: "There was a problem with your request."
          },
          CLIENT_RATE_LIMITED: {
            type: BraintreeError.types.MERCHANT,
            code: "CLIENT_RATE_LIMITED",
            message: "You are being rate-limited; please try again in a few minutes."
          },
          CLIENT_AUTHORIZATION_INSUFFICIENT: {
            type: BraintreeError.types.MERCHANT,
            code: "CLIENT_AUTHORIZATION_INSUFFICIENT",
            message: "The authorization used has insufficient privileges."
          },
          CLIENT_AUTHORIZATION_INVALID: {
            type: BraintreeError.types.MERCHANT,
            code: "CLIENT_AUTHORIZATION_INVALID",
            message: "Either the client token has expired and a new one should be generated or the tokenization key has been deactivated or deleted."
          }
        };
      }, { "../lib/braintree-error": 90 }], 53: [function(require2, module3, exports3) {
        "use strict";
        var BraintreeError = require2("../lib/braintree-error");
        var wrapPromise = require2("@braintree/wrap-promise");
        var request = require2("./request");
        var uuid = require2("@braintree/uuid");
        var constants = require2("../lib/constants");
        var errors = require2("./errors");
        var GraphQL = require2("./request/graphql");
        var GRAPHQL_URLS = require2("../lib/constants").GRAPHQL_URLS;
        var isDateStringBeforeOrOn = require2("../lib/is-date-string-before-or-on");
        var BRAINTREE_VERSION = require2("./constants").BRAINTREE_VERSION;
        function getConfiguration(authData) {
          return new Promise(function(resolve, reject) {
            var configuration, attrs, configUrl, reqOptions;
            var sessionId = uuid();
            var analyticsMetadata = {
              merchantAppId: window.location.host,
              platform: constants.PLATFORM,
              sdkVersion: constants.VERSION,
              source: constants.SOURCE,
              // NEXT_MAJOR_VERSION remove one of these to not duplicate data. Target parity with mobile platforms approach.
              integration: constants.INTEGRATION,
              integrationType: constants.INTEGRATION,
              sessionId
            };
            attrs = authData.attrs;
            configUrl = authData.configUrl;
            attrs._meta = analyticsMetadata;
            attrs.braintreeLibraryVersion = constants.BRAINTREE_LIBRARY_VERSION;
            attrs.configVersion = "3";
            reqOptions = {
              url: configUrl,
              method: "GET",
              data: attrs
            };
            if (attrs.authorizationFingerprint && authData.graphQL) {
              if (isDateStringBeforeOrOn(authData.graphQL.date, BRAINTREE_VERSION)) {
                reqOptions.graphQL = new GraphQL({
                  graphQL: {
                    url: authData.graphQL.url,
                    features: ["configuration"]
                  }
                });
              }
              reqOptions.metadata = analyticsMetadata;
            } else if (attrs.tokenizationKey) {
              reqOptions.graphQL = new GraphQL({
                graphQL: {
                  url: GRAPHQL_URLS[authData.environment],
                  features: ["configuration"]
                }
              });
              reqOptions.metadata = analyticsMetadata;
            }
            request(reqOptions, function(err, response, status) {
              var errorTemplate;
              if (err) {
                if (status === 403) {
                  errorTemplate = errors.CLIENT_AUTHORIZATION_INSUFFICIENT;
                } else if (status === 401) {
                  errorTemplate = errors.CLIENT_AUTHORIZATION_INVALID;
                } else {
                  errorTemplate = errors.CLIENT_GATEWAY_NETWORK;
                }
                reject(
                  new BraintreeError({
                    type: errorTemplate.type,
                    code: errorTemplate.code,
                    message: errorTemplate.message,
                    details: {
                      originalError: err
                    }
                  })
                );
                return;
              }
              configuration = {
                authorizationType: attrs.tokenizationKey ? "TOKENIZATION_KEY" : "CLIENT_TOKEN",
                authorizationFingerprint: attrs.authorizationFingerprint,
                analyticsMetadata,
                gatewayConfiguration: response
              };
              resolve(configuration);
            });
          });
        }
        module3.exports = {
          getConfiguration: wrapPromise(getConfiguration)
        };
      }, { "../lib/braintree-error": 90, "../lib/constants": 91, "../lib/is-date-string-before-or-on": 116, "./constants": 51, "./errors": 52, "./request": 64, "./request/graphql": 62, "@braintree/uuid": 42, "@braintree/wrap-promise": 46 }], 54: [function(require2, module3, exports3) {
        "use strict";
        var BraintreeError = require2("../lib/braintree-error");
        var Client = require2("./client");
        var VERSION = "3.103.0";
        var wrapPromise = require2("@braintree/wrap-promise");
        var sharedErrors = require2("../lib/errors");
        function create(options) {
          if (!options.authorization) {
            return Promise.reject(
              new BraintreeError({
                type: sharedErrors.INSTANTIATION_OPTION_REQUIRED.type,
                code: sharedErrors.INSTANTIATION_OPTION_REQUIRED.code,
                message: "options.authorization is required when instantiating a client."
              })
            );
          }
          return Client.initialize(options);
        }
        module3.exports = {
          create: wrapPromise(create),
          /**
           * @description The current version of the SDK, i.e. `1.43.0`.
           * @type {string}
           */
          VERSION
        };
      }, { "../lib/braintree-error": 90, "../lib/errors": 100, "./client": 50, "@braintree/wrap-promise": 46 }], 55: [function(require2, module3, exports3) {
        "use strict";
        var querystring = require2("../../lib/querystring");
        var assign = require2("../../lib/assign").assign;
        var prepBody = require2("./prep-body");
        var parseBody = require2("./parse-body");
        var xhr = require2("./xhr");
        var isXHRAvailable = xhr.isAvailable;
        var GraphQLRequest = require2("./graphql/request");
        var DefaultRequest = require2("./default-request");
        var MAX_TCP_RETRYCOUNT = 1;
        var TCP_PRECONNECT_BUG_STATUS_CODE = 408;
        function requestShouldRetry(status) {
          return !status || status === TCP_PRECONNECT_BUG_STATUS_CODE;
        }
        function graphQLRequestShouldRetryWithClientApi(body) {
          var errorClass = !body.data && body.errors && body.errors[0] && body.errors[0].extensions && body.errors[0].extensions.errorClass;
          return errorClass === "UNKNOWN" || errorClass === "INTERNAL";
        }
        function _requestWithRetry(options, tcpRetryCount, cb) {
          var status, resBody, ajaxRequest, body, method, headers, parsedBody;
          var url = options.url;
          var graphQL = options.graphQL;
          var timeout = options.timeout;
          var req = xhr.getRequestObject();
          var callback = cb;
          var isGraphQLRequest = Boolean(
            graphQL && graphQL.isGraphQLRequest(url, options.data)
          );
          options.headers = assign(
            { "Content-Type": "application/json" },
            options.headers
          );
          if (isGraphQLRequest) {
            ajaxRequest = new GraphQLRequest(options);
          } else {
            ajaxRequest = new DefaultRequest(options);
          }
          url = ajaxRequest.getUrl();
          body = ajaxRequest.getBody();
          method = ajaxRequest.getMethod();
          headers = ajaxRequest.getHeaders();
          if (method === "GET") {
            url = querystring.queryify(url, body);
            body = null;
          }
          if (isXHRAvailable) {
            req.onreadystatechange = function() {
              if (req.readyState !== 4) {
                return;
              }
              if (req.status === 0 && isGraphQLRequest) {
                delete options.graphQL;
                _requestWithRetry(options, tcpRetryCount, cb);
                return;
              }
              parsedBody = parseBody(req.responseText);
              resBody = ajaxRequest.adaptResponseBody(parsedBody);
              status = ajaxRequest.determineStatus(req.status, parsedBody);
              if (status >= 400 || status < 200) {
                if (isGraphQLRequest && graphQLRequestShouldRetryWithClientApi(parsedBody)) {
                  delete options.graphQL;
                  _requestWithRetry(options, tcpRetryCount, cb);
                  return;
                }
                if (tcpRetryCount < MAX_TCP_RETRYCOUNT && requestShouldRetry(status)) {
                  tcpRetryCount++;
                  _requestWithRetry(options, tcpRetryCount, cb);
                  return;
                }
                callback(resBody || "error", null, status || 500);
              } else {
                callback(null, resBody, status);
              }
            };
          } else {
            if (options.headers) {
              url = querystring.queryify(url, headers);
            }
            req.onload = function() {
              callback(null, parseBody(req.responseText), req.status);
            };
            req.onerror = function() {
              callback("error", null, 500);
            };
            req.onprogress = function() {
            };
            req.ontimeout = function() {
              callback("timeout", null, -1);
            };
          }
          try {
            req.open(method, url, true);
          } catch (requestOpenError) {
            if (!isGraphQLRequest) {
              throw requestOpenError;
            }
            delete options.graphQL;
            _requestWithRetry(options, tcpRetryCount, cb);
            return;
          }
          req.timeout = timeout;
          if (isXHRAvailable) {
            Object.keys(headers).forEach(function(headerKey) {
              req.setRequestHeader(headerKey, headers[headerKey]);
            });
          }
          try {
            req.send(prepBody(method, body));
          } catch (e) {
          }
        }
        function request(options, cb) {
          _requestWithRetry(options, 0, cb);
        }
        module3.exports = {
          request
        };
      }, { "../../lib/assign": 87, "../../lib/querystring": 122, "./default-request": 56, "./graphql/request": 63, "./parse-body": 65, "./prep-body": 66, "./xhr": 67 }], 56: [function(require2, module3, exports3) {
        "use strict";
        function DefaultRequest(options) {
          this._url = options.url;
          this._data = options.data;
          this._method = options.method;
          this._headers = options.headers;
        }
        DefaultRequest.prototype.getUrl = function() {
          return this._url;
        };
        DefaultRequest.prototype.getBody = function() {
          return this._data;
        };
        DefaultRequest.prototype.getMethod = function() {
          return this._method;
        };
        DefaultRequest.prototype.getHeaders = function() {
          return this._headers;
        };
        DefaultRequest.prototype.adaptResponseBody = function(parsedBody) {
          return parsedBody;
        };
        DefaultRequest.prototype.determineStatus = function(status) {
          return status;
        };
        module3.exports = DefaultRequest;
      }, {}], 57: [function(require2, module3, exports3) {
        "use strict";
        var errorResponseAdapter = require2("./error");
        var assign = require2("../../../../lib/assign").assign;
        var cardTypeTransforms = {
          creditCard: {
            AMERICAN_EXPRESS: "American Express",
            DISCOVER: "Discover",
            INTERNATIONAL_MAESTRO: "Maestro",
            JCB: "JCB",
            MASTERCARD: "MasterCard",
            SOLO: "Solo",
            UK_MAESTRO: "UK Maestro",
            UNION_PAY: "UnionPay",
            VISA: "Visa",
            ELO: "Elo",
            HIPER: "Hiper",
            HIPERCARD: "Hipercard"
          },
          applePayWeb: {
            VISA: "visa",
            MASTERCARD: "mastercard",
            DISCOVER: "discover",
            AMERICAN_EXPRESS: "amex",
            INTERNATIONAL_MAESTRO: "maestro",
            ELO: "elo"
          },
          visaCheckout: {
            VISA: "Visa",
            MASTERCARD: "MasterCard",
            DISCOVER: "Discover",
            AMERICAN_EXPRESS: "American Express"
          },
          googlePay: {
            VISA: "visa",
            MASTERCARD: "mastercard",
            DISCOVER: "discover",
            AMERICAN_EXPRESS: "amex",
            INTERNATIONAL_MAESTRO: "maestro",
            ELO: "elo"
          },
          masterpass: {
            VISA: "visa",
            MASTERCARD: "master",
            DISCOVER: "discover",
            AMERICAN_EXPRESS: "amex",
            DINERS: "diners",
            INTERNATIONAL_MAESTRO: "maestro",
            JCB: "jcb"
          }
        };
        function configurationResponseAdapter(responseBody, ctx) {
          var adaptedResponse;
          if (responseBody.data && !responseBody.errors) {
            adaptedResponse = adaptConfigurationResponseBody(responseBody, ctx);
          } else {
            adaptedResponse = errorResponseAdapter(responseBody);
          }
          return adaptedResponse;
        }
        function adaptConfigurationResponseBody(body, ctx) {
          var configuration = body.data.clientConfiguration;
          var response;
          response = {
            environment: configuration.environment.toLowerCase(),
            clientApiUrl: configuration.clientApiUrl,
            assetsUrl: configuration.assetsUrl,
            analytics: {
              url: configuration.analyticsUrl
            },
            merchantId: configuration.merchantId,
            venmo: "off"
          };
          if (configuration.supportedFeatures) {
            response.graphQL = {
              url: ctx._graphQL._config.url,
              features: configuration.supportedFeatures.map(function(feature) {
                return feature.toLowerCase();
              })
            };
          }
          if (configuration.braintreeApi) {
            response.braintreeApi = configuration.braintreeApi;
          }
          if (configuration.applePayWeb) {
            response.applePayWeb = configuration.applePayWeb;
            response.applePayWeb.supportedNetworks = mapCardTypes(
              configuration.applePayWeb.supportedCardBrands,
              cardTypeTransforms.applePayWeb
            );
            delete response.applePayWeb.supportedCardBrands;
          }
          if (configuration.ideal) {
            response.ideal = configuration.ideal;
          }
          if (configuration.kount) {
            response.kount = {
              kountMerchantId: configuration.kount.merchantId
            };
          }
          if (configuration.creditCard) {
            response.challenges = configuration.creditCard.challenges.map(function(challenge) {
              return challenge.toLowerCase();
            });
            response.creditCards = {
              supportedCardTypes: mapCardTypes(
                configuration.creditCard.supportedCardBrands,
                cardTypeTransforms.creditCard
              )
            };
            response.threeDSecureEnabled = configuration.creditCard.threeDSecureEnabled;
            response.threeDSecure = configuration.creditCard.threeDSecure;
          } else {
            response.challenges = [];
            response.creditCards = {
              supportedCardTypes: []
            };
            response.threeDSecureEnabled = false;
          }
          if (configuration.googlePay) {
            response.androidPay = {
              displayName: configuration.googlePay.displayName,
              enabled: true,
              environment: configuration.googlePay.environment.toLowerCase(),
              googleAuthorizationFingerprint: configuration.googlePay.googleAuthorization,
              paypalClientId: configuration.googlePay.paypalClientId,
              supportedNetworks: mapCardTypes(
                configuration.googlePay.supportedCardBrands,
                cardTypeTransforms.googlePay
              )
            };
          }
          if (configuration.venmo) {
            response.payWithVenmo = {
              merchantId: configuration.venmo.merchantId,
              accessToken: configuration.venmo.accessToken,
              environment: configuration.venmo.environment.toLowerCase(),
              enrichedCustomerDataEnabled: configuration.venmo.enrichedCustomerDataEnabled
            };
          }
          if (configuration.paypal) {
            response.paypalEnabled = true;
            response.paypal = assign({}, configuration.paypal);
            response.paypal.currencyIsoCode = response.paypal.currencyCode;
            response.paypal.environment = response.paypal.environment.toLowerCase();
            delete response.paypal.currencyCode;
          } else {
            response.paypalEnabled = false;
          }
          if (configuration.unionPay) {
            response.unionPay = {
              enabled: true,
              merchantAccountId: configuration.unionPay.merchantAccountId
            };
          }
          if (configuration.visaCheckout) {
            response.visaCheckout = {
              apikey: configuration.visaCheckout.apiKey,
              encryptionKey: configuration.visaCheckout.encryptionKey,
              externalClientId: configuration.visaCheckout.externalClientId,
              supportedCardTypes: mapCardTypes(
                configuration.visaCheckout.supportedCardBrands,
                cardTypeTransforms.visaCheckout
              )
            };
          }
          if (configuration.masterpass) {
            response.masterpass = {
              merchantCheckoutId: configuration.masterpass.merchantCheckoutId,
              supportedNetworks: mapCardTypes(
                configuration.masterpass.supportedCardBrands,
                cardTypeTransforms.masterpass
              )
            };
          }
          if (configuration.usBankAccount) {
            response.usBankAccount = {
              routeId: configuration.usBankAccount.routeId,
              plaid: {
                publicKey: configuration.usBankAccount.plaidPublicKey
              }
            };
          }
          return response;
        }
        function mapCardTypes(cardTypes, cardTypeTransformMap) {
          return cardTypes.reduce(function(acc, type) {
            if (cardTypeTransformMap.hasOwnProperty(type)) {
              return acc.concat(cardTypeTransformMap[type]);
            }
            return acc;
          }, []);
        }
        module3.exports = configurationResponseAdapter;
      }, { "../../../../lib/assign": 87, "./error": 59 }], 58: [function(require2, module3, exports3) {
        "use strict";
        var errorResponseAdapter = require2("./error");
        var CARD_BRAND_MAP = {
          /* eslint-disable camelcase */
          AMERICAN_EXPRESS: "American Express",
          DINERS: "Discover",
          DISCOVER: "Discover",
          ELO: "Elo",
          HIPER: "Hiper",
          HIPERCARD: "Hipercard",
          INTERNATIONAL_MAESTRO: "Maestro",
          JCB: "JCB",
          MASTERCARD: "MasterCard",
          UK_MAESTRO: "Maestro",
          UNION_PAY: "UnionPay",
          VISA: "Visa"
          /* eslint-enable camelcase */
        };
        var BIN_DATA_MAP = {
          YES: "Yes",
          NO: "No",
          UNKNOWN: "Unknown"
        };
        var AUTHENTICATION_INSIGHT_MAP = {
          PSDTWO: "psd2"
        };
        function creditCardTokenizationResponseAdapter(responseBody) {
          var adaptedResponse;
          if (responseBody.data && !responseBody.errors) {
            adaptedResponse = adaptTokenizeCreditCardResponseBody(responseBody);
          } else {
            adaptedResponse = errorResponseAdapter(responseBody);
          }
          return adaptedResponse;
        }
        function adaptTokenizeCreditCardResponseBody(body) {
          var data = body.data.tokenizeCreditCard;
          var creditCard = data.creditCard;
          var lastTwo = creditCard.last4 ? creditCard.last4.substr(2, 4) : "";
          var binData = creditCard.binData;
          var response, regulationEnvironment;
          if (binData) {
            [
              "commercial",
              "debit",
              "durbinRegulated",
              "healthcare",
              "payroll",
              "prepaid"
            ].forEach(function(key) {
              if (binData[key]) {
                binData[key] = BIN_DATA_MAP[binData[key]];
              } else {
                binData[key] = "Unknown";
              }
            });
            ["issuingBank", "countryOfIssuance", "productId"].forEach(function(key) {
              if (!binData[key]) {
                binData[key] = "Unknown";
              }
            });
          }
          response = {
            creditCards: [
              {
                binData,
                consumed: false,
                description: lastTwo ? "ending in " + lastTwo : "",
                nonce: data.token,
                details: {
                  cardholderName: creditCard.cardholderName,
                  expirationMonth: creditCard.expirationMonth,
                  expirationYear: creditCard.expirationYear,
                  bin: creditCard.bin || "",
                  cardType: CARD_BRAND_MAP[creditCard.brandCode] || "Unknown",
                  lastFour: creditCard.last4 || "",
                  lastTwo
                },
                type: "CreditCard",
                threeDSecureInfo: null
              }
            ]
          };
          if (data.authenticationInsight) {
            regulationEnvironment = data.authenticationInsight.customerAuthenticationRegulationEnvironment;
            response.creditCards[0].authenticationInsight = {
              regulationEnvironment: AUTHENTICATION_INSIGHT_MAP[regulationEnvironment] || regulationEnvironment.toLowerCase()
            };
          }
          return response;
        }
        module3.exports = creditCardTokenizationResponseAdapter;
      }, { "./error": 59 }], 59: [function(require2, module3, exports3) {
        "use strict";
        function errorResponseAdapter(responseBody) {
          var response;
          var errorClass = responseBody.errors && responseBody.errors[0] && responseBody.errors[0].extensions && responseBody.errors[0].extensions.errorClass;
          if (errorClass === "VALIDATION") {
            response = userErrorResponseAdapter(responseBody);
          } else if (errorClass) {
            response = errorWithClassResponseAdapter(responseBody);
          } else {
            response = {
              error: { message: "There was a problem serving your request" },
              fieldErrors: []
            };
          }
          return response;
        }
        function errorWithClassResponseAdapter(responseBody) {
          return {
            error: { message: responseBody.errors[0].message },
            fieldErrors: []
          };
        }
        function userErrorResponseAdapter(responseBody) {
          var fieldErrors = buildFieldErrors(responseBody.errors);
          if (fieldErrors.length === 0) {
            return { error: { message: responseBody.errors[0].message } };
          }
          return {
            error: { message: getLegacyMessage(fieldErrors) },
            fieldErrors
          };
        }
        function buildFieldErrors(errors) {
          var fieldErrors = [];
          errors.forEach(function(error) {
            if (!(error.extensions && error.extensions.inputPath)) {
              return;
            }
            addFieldError(error.extensions.inputPath.slice(1), error, fieldErrors);
          });
          return fieldErrors;
        }
        function addFieldError(inputPath, errorDetail, fieldErrors) {
          var fieldError;
          var legacyCode = errorDetail.extensions.legacyCode;
          var inputField = inputPath[0];
          if (inputPath.length === 1) {
            fieldErrors.push({
              code: legacyCode,
              field: inputField,
              message: errorDetail.message
            });
            return;
          }
          fieldErrors.forEach(function(candidate) {
            if (candidate.field === inputField) {
              fieldError = candidate;
            }
          });
          if (!fieldError) {
            fieldError = { field: inputField, fieldErrors: [] };
            fieldErrors.push(fieldError);
          }
          addFieldError(inputPath.slice(1), errorDetail, fieldError.fieldErrors);
        }
        function getLegacyMessage(errors) {
          var legacyMessages = {
            creditCard: "Credit card is invalid"
          };
          var field = errors[0].field;
          return legacyMessages[field];
        }
        module3.exports = errorResponseAdapter;
      }, {}], 60: [function(require2, module3, exports3) {
        "use strict";
        var CONFIGURATION_QUERY = "query ClientConfiguration {   clientConfiguration {     analyticsUrl     environment     merchantId     assetsUrl     clientApiUrl     creditCard {       supportedCardBrands       challenges       threeDSecureEnabled       threeDSecure {         cardinalAuthenticationJWT       }     }     applePayWeb {       countryCode       currencyCode       merchantIdentifier       supportedCardBrands     }     googlePay {       displayName       supportedCardBrands       environment       googleAuthorization       paypalClientId     }     ideal {       routeId       assetsUrl     }     kount {       merchantId     }     masterpass {       merchantCheckoutId       supportedCardBrands     }     paypal {       displayName       clientId       assetsUrl       environment       environmentNoNetwork       unvettedMerchant       braintreeClientId       billingAgreementsEnabled       merchantAccountId       currencyCode       payeeEmail     }     unionPay {       merchantAccountId     }     usBankAccount {       routeId       plaidPublicKey     }     venmo {       merchantId       accessToken       environment       enrichedCustomerDataEnabled    }     visaCheckout {       apiKey       externalClientId       supportedCardBrands     }     braintreeApi {       accessToken       url     }     supportedFeatures   } }";
        function configuration() {
          return {
            query: CONFIGURATION_QUERY,
            operationName: "ClientConfiguration"
          };
        }
        module3.exports = configuration;
      }, {}], 61: [function(require2, module3, exports3) {
        "use strict";
        var assign = require2("../../../../lib/assign").assign;
        function createMutation(config) {
          var hasAuthenticationInsight = config.hasAuthenticationInsight;
          var mutation = "mutation TokenizeCreditCard($input: TokenizeCreditCardInput!";
          if (hasAuthenticationInsight) {
            mutation += ", $authenticationInsightInput: AuthenticationInsightInput!";
          }
          mutation += ") {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       cardholderName       expirationMonth      expirationYear      binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     } ";
          if (hasAuthenticationInsight) {
            mutation += "    authenticationInsight(input: $authenticationInsightInput) {      customerAuthenticationRegulationEnvironment    }";
          }
          mutation += "  } }";
          return mutation;
        }
        function createCreditCardTokenizationBody(body, options) {
          var cc = body.creditCard;
          var billingAddress = cc && cc.billingAddress;
          var expDate = cc && cc.expirationDate;
          var expirationMonth = cc && (cc.expirationMonth || expDate && expDate.split("/")[0].trim());
          var expirationYear = cc && (cc.expirationYear || expDate && expDate.split("/")[1].trim());
          var variables = {
            input: {
              creditCard: {
                number: cc && cc.number,
                expirationMonth,
                expirationYear,
                cvv: cc && cc.cvv,
                cardholderName: cc && cc.cardholderName
              },
              options: {}
            }
          };
          if (options.hasAuthenticationInsight) {
            variables.authenticationInsightInput = {
              merchantAccountId: body.merchantAccountId
            };
          }
          if (billingAddress) {
            variables.input.creditCard.billingAddress = billingAddress;
          }
          variables.input = addValidationRule(body, variables.input);
          return variables;
        }
        function addValidationRule(body, input) {
          var validate;
          if (body.creditCard && body.creditCard.options && typeof body.creditCard.options.validate === "boolean") {
            validate = body.creditCard.options.validate;
          } else if (body.authorizationFingerprint && body.tokenizationKey || body.authorizationFingerprint) {
            validate = true;
          } else if (body.tokenizationKey) {
            validate = false;
          }
          if (typeof validate === "boolean") {
            input.options = assign(
              {
                validate
              },
              input.options
            );
          }
          return input;
        }
        function creditCardTokenization(body) {
          var options = {
            hasAuthenticationInsight: Boolean(
              body.authenticationInsight && body.merchantAccountId
            )
          };
          return {
            query: createMutation(options),
            variables: createCreditCardTokenizationBody(body, options),
            operationName: "TokenizeCreditCard"
          };
        }
        module3.exports = creditCardTokenization;
      }, { "../../../../lib/assign": 87 }], 62: [function(require2, module3, exports3) {
        "use strict";
        var features = {
          tokenize_credit_cards: "payment_methods/credit_cards",
          // eslint-disable-line camelcase
          configuration: "configuration"
        };
        var disallowedInputPaths = ["creditCard.options.unionPayEnrollment"];
        function GraphQL(config) {
          this._config = config.graphQL;
        }
        GraphQL.prototype.getGraphQLEndpoint = function() {
          return this._config.url;
        };
        GraphQL.prototype.isGraphQLRequest = function(url, body) {
          var featureEnabled;
          var path = this.getClientApiPath(url);
          if (!this._isGraphQLEnabled() || !path) {
            return false;
          }
          featureEnabled = this._config.features.some(function(feature) {
            return features[feature] === path;
          });
          if (containsDisallowedlistedKeys(body)) {
            return false;
          }
          return featureEnabled;
        };
        GraphQL.prototype.getClientApiPath = function(url) {
          var path;
          var clientApiPrefix = "/client_api/v1/";
          var pathParts = url.split(clientApiPrefix);
          if (pathParts.length > 1) {
            path = pathParts[1].split("?")[0];
          }
          return path;
        };
        GraphQL.prototype._isGraphQLEnabled = function() {
          return Boolean(this._config);
        };
        function containsDisallowedlistedKeys(body) {
          return disallowedInputPaths.some(function(keys) {
            var value = keys.split(".").reduce(function(accumulator, key) {
              return accumulator && accumulator[key];
            }, body);
            return value !== void 0;
          });
        }
        module3.exports = GraphQL;
      }, {}], 63: [function(require2, module3, exports3) {
        "use strict";
        var BRAINTREE_VERSION = require2("../../constants").BRAINTREE_VERSION;
        var assign = require2("../../../lib/assign").assign;
        var snakeCaseToCamelCase = require2("../../../lib/snake-case-to-camel-case");
        var creditCardTokenizationBodyGenerator = require2("./generators/credit-card-tokenization");
        var creditCardTokenizationResponseAdapter = require2("./adapters/credit-card-tokenization");
        var configurationBodyGenerator = require2("./generators/configuration");
        var configurationResponseAdapter = require2("./adapters/configuration");
        var generators = {
          "payment_methods/credit_cards": creditCardTokenizationBodyGenerator,
          configuration: configurationBodyGenerator
        };
        var adapters = {
          "payment_methods/credit_cards": creditCardTokenizationResponseAdapter,
          configuration: configurationResponseAdapter
        };
        function GraphQLRequest(options) {
          var clientApiPath = options.graphQL.getClientApiPath(options.url);
          this._graphQL = options.graphQL;
          this._data = options.data;
          this._method = options.method;
          this._headers = options.headers;
          this._clientSdkMetadata = {
            source: options.metadata.source,
            integration: options.metadata.integration,
            sessionId: options.metadata.sessionId
          };
          this._sendAnalyticsEvent = options.sendAnalyticsEvent || Function.prototype;
          this._generator = generators[clientApiPath];
          this._adapter = adapters[clientApiPath];
          this._sendAnalyticsEvent("graphql.init");
        }
        GraphQLRequest.prototype.getUrl = function() {
          return this._graphQL.getGraphQLEndpoint();
        };
        GraphQLRequest.prototype.getBody = function() {
          var formattedBody = formatBodyKeys(this._data);
          var generatedBody = this._generator(formattedBody);
          var body = assign(
            { clientSdkMetadata: this._clientSdkMetadata },
            generatedBody
          );
          return JSON.stringify(body);
        };
        GraphQLRequest.prototype.getMethod = function() {
          return "POST";
        };
        GraphQLRequest.prototype.getHeaders = function() {
          var authorization, headers;
          if (this._data.authorizationFingerprint) {
            this._sendAnalyticsEvent("graphql.authorization-fingerprint");
            authorization = this._data.authorizationFingerprint;
          } else {
            this._sendAnalyticsEvent("graphql.tokenization-key");
            authorization = this._data.tokenizationKey;
          }
          headers = {
            Authorization: "Bearer " + authorization,
            "Braintree-Version": BRAINTREE_VERSION
          };
          return assign({}, this._headers, headers);
        };
        GraphQLRequest.prototype.adaptResponseBody = function(parsedBody) {
          return this._adapter(parsedBody, this);
        };
        GraphQLRequest.prototype.determineStatus = function(httpStatus, parsedResponse) {
          var status, errorClass;
          if (httpStatus === 200) {
            errorClass = parsedResponse.errors && parsedResponse.errors[0] && parsedResponse.errors[0].extensions && parsedResponse.errors[0].extensions.errorClass;
            if (parsedResponse.data && !parsedResponse.errors) {
              status = 200;
            } else if (errorClass === "VALIDATION") {
              status = 422;
            } else if (errorClass === "AUTHORIZATION") {
              status = 403;
            } else if (errorClass === "AUTHENTICATION") {
              status = 401;
            } else if (isGraphQLError(errorClass, parsedResponse)) {
              status = 403;
            } else {
              status = 500;
            }
          } else if (!httpStatus) {
            status = 500;
          } else {
            status = httpStatus;
          }
          this._sendAnalyticsEvent("graphql.status." + httpStatus);
          this._sendAnalyticsEvent("graphql.determinedStatus." + status);
          return status;
        };
        function isGraphQLError(errorClass, parsedResponse) {
          return !errorClass && parsedResponse.errors[0].message;
        }
        function formatBodyKeys(originalBody) {
          var body = {};
          Object.keys(originalBody).forEach(function(key) {
            var camelCaseKey = snakeCaseToCamelCase(key);
            if (typeof originalBody[key] === "object") {
              body[camelCaseKey] = formatBodyKeys(originalBody[key]);
            } else if (typeof originalBody[key] === "number") {
              body[camelCaseKey] = String(originalBody[key]);
            } else {
              body[camelCaseKey] = originalBody[key];
            }
          });
          return body;
        }
        module3.exports = GraphQLRequest;
      }, { "../../../lib/assign": 87, "../../../lib/snake-case-to-camel-case": 124, "../../constants": 51, "./adapters/configuration": 57, "./adapters/credit-card-tokenization": 58, "./generators/configuration": 60, "./generators/credit-card-tokenization": 61 }], 64: [function(require2, module3, exports3) {
        "use strict";
        var once = require2("../../lib/once");
        var AJAXDriver = require2("./ajax-driver");
        module3.exports = function(options, cb) {
          cb = once(cb || Function.prototype);
          options.method = (options.method || "GET").toUpperCase();
          options.timeout = options.timeout == null ? 6e4 : options.timeout;
          options.data = options.data || {};
          AJAXDriver.request(options, cb);
        };
      }, { "../../lib/once": 121, "./ajax-driver": 55 }], 65: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function(body) {
          try {
            body = JSON.parse(body);
          } catch (e) {
          }
          return body;
        };
      }, {}], 66: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function(method, body) {
          if (typeof method !== "string") {
            throw new Error("Method must be a string");
          }
          if (method.toLowerCase() !== "get" && body != null) {
            body = typeof body === "string" ? body : JSON.stringify(body);
          }
          return body;
        };
      }, {}], 67: [function(require2, module3, exports3) {
        "use strict";
        var isXHRAvailable = typeof window !== "undefined" && window.XMLHttpRequest && "withCredentials" in new window.XMLHttpRequest();
        function getRequestObject() {
          return isXHRAvailable ? new window.XMLHttpRequest() : new window.XDomainRequest();
        }
        module3.exports = {
          isAvailable: isXHRAvailable,
          getRequestObject
        };
      }, {}], 68: [function(require2, module3, exports3) {
        "use strict";
        var BraintreeError = require2("../lib/braintree-error");
        module3.exports = {
          GOOGLE_PAYMENT_NOT_ENABLED: {
            type: BraintreeError.types.MERCHANT,
            code: "GOOGLE_PAYMENT_NOT_ENABLED",
            message: "Google Pay is not enabled for this merchant."
          },
          GOOGLE_PAYMENT_GATEWAY_ERROR: {
            code: "GOOGLE_PAYMENT_GATEWAY_ERROR",
            message: "There was an error when tokenizing the Google Pay payment method.",
            type: BraintreeError.types.UNKNOWN
          },
          GOOGLE_PAYMENT_UNSUPPORTED_VERSION: {
            code: "GOOGLE_PAYMENT_UNSUPPORTED_VERSION",
            type: BraintreeError.types.MERCHANT
          }
        };
      }, { "../lib/braintree-error": 90 }], 69: [function(require2, module3, exports3) {
        "use strict";
        var analytics = require2("../lib/analytics");
        var assign = require2("../lib/assign").assign;
        var convertMethodsToError = require2("../lib/convert-methods-to-error");
        var find = require2("../lib/find");
        var generateGooglePayConfiguration = require2("../lib/generate-google-pay-configuration");
        var BraintreeError = require2("../lib/braintree-error");
        var errors = require2("./errors");
        var methods = require2("../lib/methods");
        var wrapPromise = require2("@braintree/wrap-promise");
        var CREATE_PAYMENT_DATA_REQUEST_METHODS = {
          1: "_createV1PaymentDataRequest",
          2: "_createV2PaymentDataRequest"
        };
        function GooglePayment(options) {
          this._createPromise = options.createPromise;
          this._client = options.client;
          this._useDeferredClient = options.useDeferredClient;
          this._googlePayVersion = options.googlePayVersion || 1;
          this._googleMerchantId = options.googleMerchantId;
          if (this._isUnsupportedGooglePayAPIVersion()) {
            throw new BraintreeError({
              code: errors.GOOGLE_PAYMENT_UNSUPPORTED_VERSION.code,
              message: "The Braintree SDK does not support Google Pay version " + this._googlePayVersion + ". Please upgrade the version of your Braintree SDK and contact support if this error persists.",
              type: errors.GOOGLE_PAYMENT_UNSUPPORTED_VERSION.type
            });
          }
        }
        GooglePayment.prototype._waitForClient = function() {
          if (this._client) {
            return Promise.resolve();
          }
          return this._createPromise.then(
            (function(client) {
              this._client = client;
            }).bind(this)
          );
        };
        GooglePayment.prototype._isUnsupportedGooglePayAPIVersion = function() {
          return !(this._googlePayVersion in CREATE_PAYMENT_DATA_REQUEST_METHODS);
        };
        GooglePayment.prototype._getDefaultConfig = function() {
          if (!this._defaultConfig) {
            this._defaultConfig = generateGooglePayConfiguration(
              this._client.getConfiguration(),
              this._googlePayVersion,
              this._googleMerchantId
            );
          }
          return this._defaultConfig;
        };
        GooglePayment.prototype._createV1PaymentDataRequest = function(paymentDataRequest) {
          var defaultConfig = this._getDefaultConfig();
          var overrideCardNetworks = paymentDataRequest.cardRequirements && paymentDataRequest.cardRequirements.allowedCardNetworks;
          var defaultConfigCardNetworks = defaultConfig.cardRequirements.allowedCardNetworks;
          var allowedCardNetworks = overrideCardNetworks || defaultConfigCardNetworks;
          paymentDataRequest = assign({}, defaultConfig, paymentDataRequest);
          paymentDataRequest.cardRequirements.allowedCardNetworks = allowedCardNetworks;
          return paymentDataRequest;
        };
        GooglePayment.prototype._createV2PaymentDataRequest = function(paymentDataRequest) {
          var defaultConfig = this._getDefaultConfig();
          if (paymentDataRequest.allowedPaymentMethods) {
            paymentDataRequest.allowedPaymentMethods.forEach(function(paymentMethod) {
              var defaultPaymentMethod = find(
                defaultConfig.allowedPaymentMethods,
                "type",
                paymentMethod.type
              );
              if (defaultPaymentMethod) {
                applyDefaultsToPaymentMethodConfiguration(
                  paymentMethod,
                  defaultPaymentMethod
                );
              }
            });
          }
          paymentDataRequest = assign({}, defaultConfig, paymentDataRequest);
          return paymentDataRequest;
        };
        GooglePayment.prototype.createPaymentDataRequest = function(overrides) {
          if (!this._useDeferredClient) {
            return this._createPaymentDataRequestSyncronously(overrides);
          }
          return this._waitForClient().then(
            (function() {
              return this._createPaymentDataRequestSyncronously(overrides);
            }).bind(this)
          );
        };
        GooglePayment.prototype._createPaymentDataRequestSyncronously = function(overrides) {
          var paymentDataRequest = assign({}, overrides);
          var version = this._googlePayVersion;
          var createPaymentDataRequestMethod = CREATE_PAYMENT_DATA_REQUEST_METHODS[version];
          analytics.sendEvent(
            this._createPromise,
            "google-payment.v" + version + ".createPaymentDataRequest"
          );
          return this[createPaymentDataRequestMethod](paymentDataRequest);
        };
        GooglePayment.prototype.parseResponse = function(response) {
          var self2 = this;
          return Promise.resolve().then(function() {
            var payload;
            var rawResponse = response.apiVersion === 2 ? response.paymentMethodData.tokenizationData.token : response.paymentMethodToken.token;
            var parsedResponse = JSON.parse(rawResponse);
            var error = parsedResponse.error;
            if (error) {
              return Promise.reject(error);
            }
            analytics.sendEvent(
              self2._createPromise,
              "google-payment.parseResponse.succeeded"
            );
            if (parsedResponse.paypalAccounts) {
              payload = parsedResponse.paypalAccounts[0];
              analytics.sendEvent(
                self2._createPromise,
                "google-payment.parseResponse.succeeded.paypal"
              );
              return Promise.resolve({
                nonce: payload.nonce,
                type: payload.type,
                description: payload.description
              });
            }
            payload = parsedResponse.androidPayCards[0];
            analytics.sendEvent(
              self2._createPromise,
              "google-payment.parseResponse.succeeded.google-payment"
            );
            return Promise.resolve({
              nonce: payload.nonce,
              type: payload.type,
              description: payload.description,
              details: {
                cardType: payload.details.cardType,
                lastFour: payload.details.lastFour,
                lastTwo: payload.details.lastTwo,
                isNetworkTokenized: payload.details.isNetworkTokenized,
                bin: payload.details.bin
              },
              binData: payload.binData
            });
          }).catch(function(error) {
            analytics.sendEvent(
              self2._createPromise,
              "google-payment.parseResponse.failed"
            );
            return Promise.reject(
              new BraintreeError({
                code: errors.GOOGLE_PAYMENT_GATEWAY_ERROR.code,
                message: errors.GOOGLE_PAYMENT_GATEWAY_ERROR.message,
                type: errors.GOOGLE_PAYMENT_GATEWAY_ERROR.type,
                details: {
                  originalError: error
                }
              })
            );
          });
        };
        GooglePayment.prototype.teardown = function() {
          convertMethodsToError(this, methods(GooglePayment.prototype));
          return Promise.resolve();
        };
        function applyDefaultsToPaymentMethodConfiguration(merchantSubmittedPaymentMethod, defaultPaymentMethod) {
          Object.keys(defaultPaymentMethod).forEach(function(parameter) {
            if (typeof defaultPaymentMethod[parameter] === "object") {
              merchantSubmittedPaymentMethod[parameter] = assign(
                {},
                defaultPaymentMethod[parameter],
                merchantSubmittedPaymentMethod[parameter]
              );
            } else {
              merchantSubmittedPaymentMethod[parameter] = merchantSubmittedPaymentMethod[parameter] || defaultPaymentMethod[parameter];
            }
          });
        }
        module3.exports = wrapPromise.wrapPrototype(GooglePayment);
      }, { "../lib/analytics": 85, "../lib/assign": 87, "../lib/braintree-error": 90, "../lib/convert-methods-to-error": 92, "../lib/find": 102, "../lib/generate-google-pay-configuration": 114, "../lib/methods": 120, "./errors": 68, "@braintree/wrap-promise": 46 }], 70: [function(require2, module3, exports3) {
        "use strict";
        var GooglePayment = require2("./google-payment");
        var BraintreeError = require2("../lib/braintree-error");
        var createAssetsUrl = require2("../lib/create-assets-url");
        var createDeferredClient = require2("../lib/create-deferred-client");
        var basicComponentVerification = require2("../lib/basic-component-verification");
        var wrapPromise = require2("@braintree/wrap-promise");
        var VERSION = "3.103.0";
        var errors = require2("./errors");
        function create(options) {
          var name = "Google Pay";
          return basicComponentVerification.verify({
            name,
            client: options.client,
            authorization: options.authorization
          }).then(function() {
            var createPromise, instance;
            createPromise = createDeferredClient.create({
              authorization: options.authorization,
              client: options.client,
              debug: options.debug,
              assetsUrl: createAssetsUrl.create(options.authorization),
              name
            }).then(function(client) {
              var configuration = client.getConfiguration();
              options.client = client;
              if (!configuration.gatewayConfiguration.androidPay) {
                return Promise.reject(
                  new BraintreeError(errors.GOOGLE_PAYMENT_NOT_ENABLED)
                );
              }
              return client;
            });
            options.createPromise = createPromise;
            instance = new GooglePayment(options);
            if (!options.useDeferredClient) {
              return createPromise.then(function(client) {
                instance._client = client;
                return instance;
              });
            }
            return instance;
          });
        }
        module3.exports = {
          create: wrapPromise(create),
          /**
           * @description The current version of the SDK, i.e. `1.43.0`.
           * @type {string}
           */
          VERSION
        };
      }, { "../lib/basic-component-verification": 88, "../lib/braintree-error": 90, "../lib/create-assets-url": 94, "../lib/create-deferred-client": 96, "./errors": 68, "./google-payment": 69, "@braintree/wrap-promise": 46 }], 71: [function(require2, module3, exports3) {
        "use strict";
        var BraintreeError = require2("../../lib/braintree-error");
        var errors = require2("../shared/errors");
        var allowedAttributes = require2("../shared/constants").allowedAttributes;
        function attributeValidationError(attribute, value) {
          var err;
          if (!allowedAttributes.hasOwnProperty(attribute)) {
            err = new BraintreeError({
              type: errors.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.type,
              code: errors.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.code,
              message: 'The "' + attribute + '" attribute is not supported in Hosted Fields.'
            });
          } else if (value != null && !_isValid(attribute, value)) {
            err = new BraintreeError({
              type: errors.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.type,
              code: errors.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.code,
              message: 'Value "' + value + '" is not allowed for "' + attribute + '" attribute.'
            });
          }
          return err;
        }
        function _isValid(attribute, value) {
          if (allowedAttributes[attribute] === "string") {
            return typeof value === "string" || typeof value === "number";
          } else if (allowedAttributes[attribute] === "boolean") {
            return String(value) === "true" || String(value) === "false";
          }
          return false;
        }
        module3.exports = attributeValidationError;
      }, { "../../lib/braintree-error": 90, "../shared/constants": 79, "../shared/errors": 80 }], 72: [function(require2, module3, exports3) {
        "use strict";
        var constants = require2("../shared/constants");
        var useMin = require2("../../lib/use-min");
        module3.exports = function composeUrl(assetsUrl, componentId, isDebug) {
          return assetsUrl + "/web/" + constants.VERSION + "/html/hosted-fields-frame" + useMin(isDebug) + ".html#" + componentId;
        };
      }, { "../../lib/use-min": 125, "../shared/constants": 79 }], 73: [function(require2, module3, exports3) {
        "use strict";
        var directions = require2("../shared/constants").navigationDirections;
        var browserDetection = require2("../shared/browser-detection");
        var focusIntercept = require2("../shared/focus-intercept");
        var findParentTags = require2("../shared/find-parent-tags");
        var userFocusableTagNames = ["INPUT", "SELECT", "TEXTAREA"];
        var unfocusedInputTypes = [
          "hidden",
          "button",
          "reset",
          "submit",
          "checkbox",
          "radio",
          "file"
        ];
        function _isUserFocusableElement(element) {
          if (!browserDetection.hasSoftwareKeyboard()) {
            return element.type !== "hidden";
          }
          return userFocusableTagNames.indexOf(element.tagName) > -1 && unfocusedInputTypes.indexOf(element.type) < 0;
        }
        function _createNavigationHelper(direction, numberOfElementsInForm) {
          switch (direction) {
            case directions.BACK:
              return {
                checkIndexBounds: function(index) {
                  return index < 0;
                },
                indexChange: -1
              };
            case directions.FORWARD:
              return {
                checkIndexBounds: function(index) {
                  return index > numberOfElementsInForm - 1;
                },
                indexChange: 1
              };
            default:
          }
          return {};
        }
        function _findFirstFocusableElement(elementsInForm) {
          var elementsIndex, element;
          for (elementsIndex = 0; elementsIndex < elementsInForm.length; elementsIndex++) {
            element = elementsInForm[elementsIndex];
            if (_isUserFocusableElement(element)) {
              return element;
            }
          }
          return null;
        }
        module3.exports = {
          removeExtraFocusElements: function(checkoutForm, onRemoveFocusIntercepts) {
            var elements = Array.prototype.slice.call(checkoutForm.elements);
            var firstFocusableInput = _findFirstFocusableElement(elements);
            var lastFocusableInput = _findFirstFocusableElement(elements.reverse());
            [firstFocusableInput, lastFocusableInput].forEach(function(input) {
              if (!input) {
                return;
              }
              if (focusIntercept.matchFocusElement(input.getAttribute("id"))) {
                onRemoveFocusIntercepts(input.getAttribute("id"));
              }
            });
          },
          createFocusChangeHandler: function(hostedFieldsId, callbacks) {
            return function(data) {
              var currentIndex, targetElement, checkoutForm, navHelper;
              var sourceElement = document.getElementById(
                "bt-" + data.field + "-" + data.direction + "-" + hostedFieldsId
              );
              if (!sourceElement) {
                return;
              }
              checkoutForm = findParentTags(sourceElement, "form")[0];
              if (document.forms.length < 1 || !checkoutForm) {
                callbacks.onRemoveFocusIntercepts();
                return;
              }
              checkoutForm = [].slice.call(checkoutForm.elements);
              currentIndex = checkoutForm.indexOf(sourceElement);
              navHelper = _createNavigationHelper(data.direction, checkoutForm.length);
              do {
                currentIndex += navHelper.indexChange;
                if (navHelper.checkIndexBounds(currentIndex)) {
                  return;
                }
                targetElement = checkoutForm[currentIndex];
              } while (!_isUserFocusableElement(targetElement));
              if (focusIntercept.matchFocusElement(targetElement.getAttribute("id"))) {
                callbacks.onTriggerInputFocus(
                  targetElement.getAttribute("data-braintree-type")
                );
              } else {
                targetElement.focus();
              }
            };
          }
        };
      }, { "../shared/browser-detection": 78, "../shared/constants": 79, "../shared/find-parent-tags": 81, "../shared/focus-intercept": 82 }], 74: [function(require2, module3, exports3) {
        "use strict";
        var allowedStyles = require2("../shared/constants").allowedStyles;
        module3.exports = function getStylesFromClass(cssClass) {
          var element = document.createElement("input");
          var styles = {};
          var computedStyles;
          if (cssClass[0] === ".") {
            cssClass = cssClass.substring(1);
          }
          element.className = cssClass;
          element.style.display = "none !important";
          element.style.position = "fixed !important";
          element.style.left = "-99999px !important";
          element.style.top = "-99999px !important";
          document.body.appendChild(element);
          computedStyles = window.getComputedStyle(element);
          allowedStyles.forEach(function(style) {
            var value = computedStyles[style];
            if (value) {
              styles[style] = value;
            }
          });
          document.body.removeChild(element);
          return styles;
        };
      }, { "../shared/constants": 79 }], 75: [function(require2, module3, exports3) {
        "use strict";
        var assign = require2("../../lib/assign").assign;
        var createAssetsUrl = require2("../../lib/create-assets-url");
        var isVerifiedDomain = require2("../../lib/is-verified-domain");
        var Destructor = require2("../../lib/destructor");
        var iFramer = require2("@braintree/iframer");
        var Bus = require2("framebus");
        var createDeferredClient = require2("../../lib/create-deferred-client");
        var BraintreeError = require2("../../lib/braintree-error");
        var composeUrl = require2("./compose-url");
        var getStylesFromClass = require2("./get-styles-from-class");
        var constants = require2("../shared/constants");
        var errors = require2("../shared/errors");
        var INTEGRATION_TIMEOUT_MS = require2("../../lib/constants").INTEGRATION_TIMEOUT_MS;
        var uuid = require2("@braintree/uuid");
        var findParentTags = require2("../shared/find-parent-tags");
        var browserDetection = require2("../shared/browser-detection");
        var events = constants.events;
        var EventEmitter = require2("@braintree/event-emitter");
        var injectFrame = require2("./inject-frame");
        var analytics = require2("../../lib/analytics");
        var allowedFields = constants.allowedFields;
        var methods = require2("../../lib/methods");
        var shadow = require2("../../lib/shadow");
        var findRootNode = require2("../../lib/find-root-node");
        var convertMethodsToError = require2("../../lib/convert-methods-to-error");
        var sharedErrors = require2("../../lib/errors");
        var getCardTypes = require2("../shared/get-card-types");
        var attributeValidationError = require2("./attribute-validation-error");
        var wrapPromise = require2("@braintree/wrap-promise");
        var focusChange = require2("./focus-change");
        var destroyFocusIntercept = require2("../shared/focus-intercept").destroy;
        var SAFARI_FOCUS_TIMEOUT = 5;
        function createInputEventHandler(fields) {
          return function(eventData) {
            var field;
            var merchantPayload = eventData.merchantPayload;
            var emittedBy = merchantPayload.emittedBy;
            var container = fields[emittedBy].containerElement;
            Object.keys(merchantPayload.fields).forEach(function(key) {
              merchantPayload.fields[key].container = fields[key].containerElement;
            });
            field = merchantPayload.fields[emittedBy];
            container.classList.toggle(
              constants.externalClasses.FOCUSED,
              field.isFocused
            );
            container.classList.toggle(constants.externalClasses.VALID, field.isValid);
            container.classList.toggle(
              constants.externalClasses.INVALID,
              !field.isPotentiallyValid
            );
            this._state = {
              cards: merchantPayload.cards,
              fields: merchantPayload.fields
            };
            this._emit(eventData.type, merchantPayload);
          };
        }
        function isVisibleEnough(node) {
          var boundingBox = node.getBoundingClientRect();
          var verticalMidpoint = Math.floor(boundingBox.height / 2);
          var horizontalMidpoint = Math.floor(boundingBox.width / 2);
          return boundingBox.top < (window.innerHeight - verticalMidpoint || document.documentElement.clientHeight - verticalMidpoint) && boundingBox.right > horizontalMidpoint && boundingBox.bottom > verticalMidpoint && boundingBox.left < (window.innerWidth - horizontalMidpoint || document.documentElement.clientWidth - horizontalMidpoint);
        }
        function HostedFields(options) {
          var failureTimeout, clientConfig, assetsUrl, isDebug, hostedFieldsUrl;
          var self2 = this;
          var fields = {};
          var frameReadyPromiseResolveFunctions = {};
          var frameReadyPromises = [];
          var componentId = uuid();
          this._merchantConfigurationOptions = assign({}, options);
          if (options.client) {
            clientConfig = options.client.getConfiguration();
            assetsUrl = clientConfig.gatewayConfiguration.assetsUrl;
            isDebug = clientConfig.isDebug;
          } else {
            assetsUrl = createAssetsUrl.create(options.authorization);
            isDebug = Boolean(options.isDebug);
          }
          this._clientPromise = createDeferredClient.create({
            client: options.client,
            authorization: options.authorization,
            debug: isDebug,
            assetsUrl,
            name: "Hosted Fields"
          });
          hostedFieldsUrl = composeUrl(assetsUrl, componentId, isDebug);
          if (!options.fields || Object.keys(options.fields).length === 0) {
            throw new BraintreeError({
              type: sharedErrors.INSTANTIATION_OPTION_REQUIRED.type,
              code: sharedErrors.INSTANTIATION_OPTION_REQUIRED.code,
              message: "options.fields is required when instantiating Hosted Fields."
            });
          }
          EventEmitter.call(this);
          this._injectedNodes = [];
          this._destructor = new Destructor();
          this._fields = fields;
          this._state = {
            fields: {},
            cards: getCardTypes("")
          };
          this._bus = new Bus({
            channel: componentId,
            verifyDomain: isVerifiedDomain,
            targetFrames: [window]
          });
          this._destructor.registerFunctionForTeardown(function() {
            self2._bus.teardown();
          });
          if (!options.client) {
            analytics.sendEvent(
              this._clientPromise,
              "custom.hosted-fields.initialized.deferred-client"
            );
          } else {
            analytics.sendEvent(
              this._clientPromise,
              "custom.hosted-fields.initialized"
            );
          }
          Object.keys(options.fields).forEach(
            (function(key) {
              var field, externalContainer, internalContainer, frame, frameReadyPromise;
              if (!constants.allowedFields.hasOwnProperty(key)) {
                throw new BraintreeError({
                  type: errors.HOSTED_FIELDS_INVALID_FIELD_KEY.type,
                  code: errors.HOSTED_FIELDS_INVALID_FIELD_KEY.code,
                  message: '"' + key + '" is not a valid field.'
                });
              }
              field = options.fields[key];
              externalContainer = field.container || field.selector;
              if (typeof externalContainer === "string") {
                externalContainer = document.querySelector(externalContainer);
              }
              if (!externalContainer || externalContainer.nodeType !== 1) {
                throw new BraintreeError({
                  type: errors.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.type,
                  code: errors.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.code,
                  message: errors.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.message,
                  details: {
                    fieldSelector: field.selector,
                    fieldContainer: field.container,
                    fieldKey: key
                  }
                });
              } else if (externalContainer.querySelector('iframe[name^="braintree-"]')) {
                throw new BraintreeError({
                  type: errors.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.type,
                  code: errors.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.code,
                  message: errors.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.message,
                  details: {
                    fieldSelector: field.selector,
                    fieldContainer: field.container,
                    fieldKey: key
                  }
                });
              }
              internalContainer = externalContainer;
              if (shadow.isShadowElement(internalContainer)) {
                internalContainer = shadow.transformToSlot(
                  internalContainer,
                  "height: 100%"
                );
              }
              if (field.maxlength && typeof field.maxlength !== "number") {
                throw new BraintreeError({
                  type: errors.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
                  code: errors.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
                  message: "The value for maxlength must be a number.",
                  details: {
                    fieldKey: key
                  }
                });
              }
              if (field.minlength && typeof field.minlength !== "number") {
                throw new BraintreeError({
                  type: errors.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
                  code: errors.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
                  message: "The value for minlength must be a number.",
                  details: {
                    fieldKey: key
                  }
                });
              }
              frame = iFramer({
                type: key,
                name: "braintree-hosted-field-" + key,
                style: constants.defaultIFrameStyle,
                title: field.iframeTitle || "Secure Credit Card Frame - " + constants.allowedFields[key].label
              });
              this._bus.addTargetFrame(frame);
              this._injectedNodes.push.apply(
                this._injectedNodes,
                injectFrame(componentId, frame, internalContainer, function() {
                  self2.focus(key);
                })
              );
              this._setupLabelFocus(key, externalContainer);
              fields[key] = {
                frameElement: frame,
                containerElement: externalContainer
              };
              frameReadyPromise = new Promise(function(resolve) {
                frameReadyPromiseResolveFunctions[key] = resolve;
              });
              frameReadyPromises.push(frameReadyPromise);
              this._state.fields[key] = {
                isEmpty: true,
                isValid: false,
                isPotentiallyValid: true,
                isFocused: false,
                container: externalContainer
              };
              setTimeout(function() {
                frame.src = hostedFieldsUrl;
              }, 0);
            }).bind(this)
          );
          if (this._merchantConfigurationOptions.styles) {
            Object.keys(this._merchantConfigurationOptions.styles).forEach(function(selector) {
              var className = self2._merchantConfigurationOptions.styles[selector];
              if (typeof className === "string") {
                self2._merchantConfigurationOptions.styles[selector] = getStylesFromClass(className);
              }
            });
          }
          this._bus.on(events.REMOVE_FOCUS_INTERCEPTS, function(data) {
            destroyFocusIntercept(data && data.id);
          });
          this._bus.on(
            events.TRIGGER_FOCUS_CHANGE,
            focusChange.createFocusChangeHandler(componentId, {
              onRemoveFocusIntercepts: function(element) {
                self2._bus.emit(events.REMOVE_FOCUS_INTERCEPTS, {
                  id: element
                });
              },
              onTriggerInputFocus: function(targetType) {
                self2.focus(targetType);
              }
            })
          );
          this._bus.on(events.READY_FOR_CLIENT, function(reply) {
            self2._clientPromise.then(function(client) {
              reply(client);
            });
          });
          this._bus.on(events.CARD_FORM_ENTRY_HAS_BEGUN, function() {
            analytics.sendEvent(self2._clientPromise, "hosted-fields.input.started");
          });
          this._bus.on(events.BIN_AVAILABLE, function(bin) {
            self2._emit("binAvailable", {
              bin
            });
          });
          failureTimeout = setTimeout(function() {
            analytics.sendEvent(
              self2._clientPromise,
              "custom.hosted-fields.load.timed-out"
            );
            self2._emit("timeout");
          }, INTEGRATION_TIMEOUT_MS);
          Promise.all(frameReadyPromises).then(function(results) {
            var reply = results[0];
            clearTimeout(failureTimeout);
            reply(
              formatMerchantConfigurationForIframes(self2._merchantConfigurationOptions)
            );
            self2._cleanUpFocusIntercepts();
            self2._emit("ready");
          });
          this._bus.on(events.FRAME_READY, function(data, reply) {
            frameReadyPromiseResolveFunctions[data.field](reply);
          });
          this._bus.on(events.INPUT_EVENT, createInputEventHandler(fields).bind(this));
          this._destructor.registerFunctionForTeardown(function() {
            var j, node, parent;
            for (j = 0; j < self2._injectedNodes.length; j++) {
              node = self2._injectedNodes[j];
              parent = node.parentNode;
              parent.removeChild(node);
              parent.classList.remove(
                constants.externalClasses.FOCUSED,
                constants.externalClasses.INVALID,
                constants.externalClasses.VALID
              );
            }
          });
          this._destructor.registerFunctionForTeardown(function() {
            destroyFocusIntercept();
          });
          this._destructor.registerFunctionForTeardown(function() {
            var methodNames = methods(HostedFields.prototype).concat(
              methods(EventEmitter.prototype)
            );
            convertMethodsToError(self2, methodNames);
          });
        }
        EventEmitter.createChild(HostedFields);
        HostedFields.prototype._setupLabelFocus = function(type, container) {
          var labels, i;
          var self2 = this;
          var rootNode = findRootNode(container);
          if (container.id == null) {
            return;
          }
          function triggerFocus() {
            self2.focus(type);
          }
          labels = Array.prototype.slice.call(
            document.querySelectorAll('label[for="' + container.id + '"]')
          );
          if (rootNode !== document) {
            labels = labels.concat(
              Array.prototype.slice.call(
                rootNode.querySelectorAll('label[for="' + container.id + '"]')
              )
            );
          }
          labels = labels.concat(findParentTags(container, "label"));
          labels = labels.filter(function(label, index, arr) {
            return arr.indexOf(label) === index;
          });
          for (i = 0; i < labels.length; i++) {
            labels[i].addEventListener("click", triggerFocus, false);
          }
          this._destructor.registerFunctionForTeardown(function() {
            for (i = 0; i < labels.length; i++) {
              labels[i].removeEventListener("click", triggerFocus, false);
            }
          });
        };
        HostedFields.prototype._getAnyFieldContainer = function() {
          var self2 = this;
          return Object.keys(this._fields).reduce(function(found, field) {
            return found || self2._fields[field].containerElement;
          }, null);
        };
        HostedFields.prototype._cleanUpFocusIntercepts = function() {
          var iframeContainer, checkoutForm;
          if (document.forms.length < 1) {
            this._bus.emit(events.REMOVE_FOCUS_INTERCEPTS);
          } else {
            iframeContainer = this._getAnyFieldContainer();
            checkoutForm = findParentTags(iframeContainer, "form")[0];
            if (checkoutForm) {
              focusChange.removeExtraFocusElements(
                checkoutForm,
                (function(id) {
                  this._bus.emit(events.REMOVE_FOCUS_INTERCEPTS, {
                    id
                  });
                }).bind(this)
              );
            } else {
              this._bus.emit(events.REMOVE_FOCUS_INTERCEPTS);
            }
          }
        };
        HostedFields.prototype._attachInvalidFieldContainersToError = function(err) {
          if (!(err.details && err.details.invalidFieldKeys && err.details.invalidFieldKeys.length > 0)) {
            return;
          }
          err.details.invalidFields = {};
          err.details.invalidFieldKeys.forEach(
            (function(field) {
              err.details.invalidFields[field] = this._fields[field].containerElement;
            }).bind(this)
          );
        };
        HostedFields.prototype.getChallenges = function() {
          return this._clientPromise.then(function(client) {
            return client.getConfiguration().gatewayConfiguration.challenges;
          });
        };
        HostedFields.prototype.getSupportedCardTypes = function() {
          return this._clientPromise.then(function(client) {
            var cards = client.getConfiguration().gatewayConfiguration.creditCards.supportedCardTypes.map(function(cardType) {
              if (cardType === "MasterCard") {
                return "Mastercard";
              }
              return cardType;
            });
            return cards;
          });
        };
        HostedFields.prototype.teardown = function() {
          var self2 = this;
          return new Promise(function(resolve, reject) {
            self2._destructor.teardown(function(err) {
              analytics.sendEvent(
                self2._clientPromise,
                "custom.hosted-fields.teardown-completed"
              );
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            });
          });
        };
        HostedFields.prototype.tokenize = function(options) {
          var self2 = this;
          if (!options) {
            options = {};
          }
          return new Promise(function(resolve, reject) {
            self2._bus.emit(events.TOKENIZATION_REQUEST, options, function(response) {
              var err = response[0];
              var payload = response[1];
              if (err) {
                self2._attachInvalidFieldContainersToError(err);
                reject(new BraintreeError(err));
              } else {
                resolve(payload);
              }
            });
          });
        };
        HostedFields.prototype.addClass = function(field, classname) {
          var err;
          if (!allowedFields.hasOwnProperty(field)) {
            err = new BraintreeError({
              type: errors.HOSTED_FIELDS_FIELD_INVALID.type,
              code: errors.HOSTED_FIELDS_FIELD_INVALID.code,
              message: '"' + field + '" is not a valid field. You must use a valid field option when adding a class.'
            });
          } else if (!this._fields.hasOwnProperty(field)) {
            err = new BraintreeError({
              type: errors.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
              code: errors.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
              message: 'Cannot add class to "' + field + '" field because it is not part of the current Hosted Fields options.'
            });
          } else {
            this._bus.emit(events.ADD_CLASS, {
              field,
              classname
            });
          }
          if (err) {
            return Promise.reject(err);
          }
          return Promise.resolve();
        };
        HostedFields.prototype.removeClass = function(field, classname) {
          var err;
          if (!allowedFields.hasOwnProperty(field)) {
            err = new BraintreeError({
              type: errors.HOSTED_FIELDS_FIELD_INVALID.type,
              code: errors.HOSTED_FIELDS_FIELD_INVALID.code,
              message: '"' + field + '" is not a valid field. You must use a valid field option when removing a class.'
            });
          } else if (!this._fields.hasOwnProperty(field)) {
            err = new BraintreeError({
              type: errors.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
              code: errors.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
              message: 'Cannot remove class from "' + field + '" field because it is not part of the current Hosted Fields options.'
            });
          } else {
            this._bus.emit(events.REMOVE_CLASS, {
              field,
              classname
            });
          }
          if (err) {
            return Promise.reject(err);
          }
          return Promise.resolve();
        };
        HostedFields.prototype.setAttribute = function(options) {
          var attributeErr, err;
          if (!allowedFields.hasOwnProperty(options.field)) {
            err = new BraintreeError({
              type: errors.HOSTED_FIELDS_FIELD_INVALID.type,
              code: errors.HOSTED_FIELDS_FIELD_INVALID.code,
              message: '"' + options.field + '" is not a valid field. You must use a valid field option when setting an attribute.'
            });
          } else if (!this._fields.hasOwnProperty(options.field)) {
            err = new BraintreeError({
              type: errors.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
              code: errors.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
              message: 'Cannot set attribute for "' + options.field + '" field because it is not part of the current Hosted Fields options.'
            });
          } else {
            attributeErr = attributeValidationError(options.attribute, options.value);
            if (attributeErr) {
              err = attributeErr;
            } else {
              this._bus.emit(events.SET_ATTRIBUTE, {
                field: options.field,
                attribute: options.attribute,
                value: options.value
              });
            }
          }
          if (err) {
            return Promise.reject(err);
          }
          return Promise.resolve();
        };
        HostedFields.prototype.setMonthOptions = function(options) {
          var self2 = this;
          var merchantOptions = this._merchantConfigurationOptions.fields;
          var errorMessage;
          if (!merchantOptions.expirationMonth) {
            errorMessage = "Expiration month field must exist to use setMonthOptions.";
          } else if (!merchantOptions.expirationMonth.select) {
            errorMessage = "Expiration month field must be a select element.";
          }
          if (errorMessage) {
            return Promise.reject(
              new BraintreeError({
                type: errors.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
                code: errors.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
                message: errorMessage
              })
            );
          }
          return new Promise(function(resolve) {
            self2._bus.emit(events.SET_MONTH_OPTIONS, options, resolve);
          });
        };
        HostedFields.prototype.setMessage = function(options) {
          this._bus.emit(events.SET_MESSAGE, {
            field: options.field,
            message: options.message
          });
        };
        HostedFields.prototype.removeAttribute = function(options) {
          var attributeErr, err;
          if (!allowedFields.hasOwnProperty(options.field)) {
            err = new BraintreeError({
              type: errors.HOSTED_FIELDS_FIELD_INVALID.type,
              code: errors.HOSTED_FIELDS_FIELD_INVALID.code,
              message: '"' + options.field + '" is not a valid field. You must use a valid field option when removing an attribute.'
            });
          } else if (!this._fields.hasOwnProperty(options.field)) {
            err = new BraintreeError({
              type: errors.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
              code: errors.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
              message: 'Cannot remove attribute for "' + options.field + '" field because it is not part of the current Hosted Fields options.'
            });
          } else {
            attributeErr = attributeValidationError(options.attribute);
            if (attributeErr) {
              err = attributeErr;
            } else {
              this._bus.emit(events.REMOVE_ATTRIBUTE, {
                field: options.field,
                attribute: options.attribute
              });
            }
          }
          if (err) {
            return Promise.reject(err);
          }
          return Promise.resolve();
        };
        HostedFields.prototype.setPlaceholder = function(field, placeholder) {
          return this.setAttribute({
            field,
            attribute: "placeholder",
            value: placeholder
          });
        };
        HostedFields.prototype.clear = function(field) {
          var err;
          if (!allowedFields.hasOwnProperty(field)) {
            err = new BraintreeError({
              type: errors.HOSTED_FIELDS_FIELD_INVALID.type,
              code: errors.HOSTED_FIELDS_FIELD_INVALID.code,
              message: '"' + field + '" is not a valid field. You must use a valid field option when clearing a field.'
            });
          } else if (!this._fields.hasOwnProperty(field)) {
            err = new BraintreeError({
              type: errors.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
              code: errors.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
              message: 'Cannot clear "' + field + '" field because it is not part of the current Hosted Fields options.'
            });
          } else {
            this._bus.emit(events.CLEAR_FIELD, {
              field
            });
          }
          if (err) {
            return Promise.reject(err);
          }
          return Promise.resolve();
        };
        HostedFields.prototype.focus = function(field) {
          var err;
          var fieldConfig = this._fields[field];
          if (!allowedFields.hasOwnProperty(field)) {
            err = new BraintreeError({
              type: errors.HOSTED_FIELDS_FIELD_INVALID.type,
              code: errors.HOSTED_FIELDS_FIELD_INVALID.code,
              message: '"' + field + '" is not a valid field. You must use a valid field option when focusing a field.'
            });
          } else if (!this._fields.hasOwnProperty(field)) {
            err = new BraintreeError({
              type: errors.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
              code: errors.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
              message: 'Cannot focus "' + field + '" field because it is not part of the current Hosted Fields options.'
            });
          } else {
            fieldConfig.frameElement.focus();
            this._bus.emit(events.TRIGGER_INPUT_FOCUS, {
              field
            });
            if (browserDetection.isIos()) {
              setTimeout(function() {
                if (!isVisibleEnough(fieldConfig.containerElement)) {
                  fieldConfig.containerElement.scrollIntoView();
                }
              }, SAFARI_FOCUS_TIMEOUT);
            }
          }
          if (err) {
            return Promise.reject(err);
          }
          return Promise.resolve();
        };
        HostedFields.prototype.getState = function() {
          return this._state;
        };
        function formatMerchantConfigurationForIframes(config) {
          var formattedConfig = assign({}, config);
          formattedConfig.fields = assign({}, formattedConfig.fields);
          Object.keys(formattedConfig.fields).forEach(function(field) {
            formattedConfig.fields[field] = assign({}, formattedConfig.fields[field]);
            delete formattedConfig.fields[field].container;
          });
          return formattedConfig;
        }
        module3.exports = wrapPromise.wrapPrototype(HostedFields);
      }, { "../../lib/analytics": 85, "../../lib/assign": 87, "../../lib/braintree-error": 90, "../../lib/constants": 91, "../../lib/convert-methods-to-error": 92, "../../lib/create-assets-url": 94, "../../lib/create-deferred-client": 96, "../../lib/destructor": 98, "../../lib/errors": 100, "../../lib/find-root-node": 101, "../../lib/is-verified-domain": 118, "../../lib/methods": 120, "../../lib/shadow": 123, "../shared/browser-detection": 78, "../shared/constants": 79, "../shared/errors": 80, "../shared/find-parent-tags": 81, "../shared/focus-intercept": 82, "../shared/get-card-types": 83, "./attribute-validation-error": 71, "./compose-url": 72, "./focus-change": 73, "./get-styles-from-class": 74, "./inject-frame": 76, "@braintree/event-emitter": 36, "@braintree/iframer": 38, "@braintree/uuid": 42, "@braintree/wrap-promise": 46, "framebus": 166 }], 76: [function(require2, module3, exports3) {
        "use strict";
        var focusIntercept = require2("../shared/focus-intercept");
        var directions = require2("../shared/constants").navigationDirections;
        module3.exports = function injectFrame(id, frame, container, focusHandler) {
          var frameType = frame.getAttribute("type");
          var clearboth = document.createElement("div");
          var fragment = document.createDocumentFragment();
          var focusInterceptBefore = focusIntercept.generate(
            id,
            frameType,
            directions.BACK,
            focusHandler
          );
          var focusInterceptAfter = focusIntercept.generate(
            id,
            frameType,
            directions.FORWARD,
            focusHandler
          );
          clearboth.style.clear = "both";
          fragment.appendChild(focusInterceptBefore);
          fragment.appendChild(frame);
          fragment.appendChild(focusInterceptAfter);
          fragment.appendChild(clearboth);
          container.appendChild(fragment);
          return [frame, clearboth];
        };
      }, { "../shared/constants": 79, "../shared/focus-intercept": 82 }], 77: [function(require2, module3, exports3) {
        "use strict";
        var HostedFields = require2("./external/hosted-fields");
        var basicComponentVerification = require2("../lib/basic-component-verification");
        var errors = require2("./shared/errors");
        var supportsInputFormatting = require2("restricted-input/supports-input-formatting");
        var wrapPromise = require2("@braintree/wrap-promise");
        var BraintreeError = require2("../lib/braintree-error");
        var VERSION = "3.103.0";
        function create(options) {
          return basicComponentVerification.verify({
            name: "Hosted Fields",
            authorization: options.authorization,
            client: options.client
          }).then(function() {
            var integration = new HostedFields(options);
            return new Promise(function(resolve, reject) {
              integration.on("ready", function() {
                resolve(integration);
              });
              integration.on("timeout", function() {
                reject(new BraintreeError(errors.HOSTED_FIELDS_TIMEOUT));
              });
            });
          });
        }
        module3.exports = {
          /**
           * @static
           * @function supportsInputFormatting
           * @description Returns false if input formatting will be automatically disabled due to browser incompatibility. Otherwise, returns true. For a list of unsupported browsers, [go here](https://github.com/braintree/restricted-input/blob/main/README.md#browsers-where-formatting-is-turned-off-automatically).
           * @returns {Boolean} Returns false if input formatting will be automatically disabled due to browser incompatibility. Otherwise, returns true.
           * @example
           * <caption>Conditionally choosing split expiration date inputs if formatting is unavailable</caption>
           * var canFormat = braintree.hostedFields.supportsInputFormatting();
           * var fields = {
           *   number: {
           *     container: '#card-number'
           *   },
           *   cvv: {
           *     container: '#cvv'
           *   }
           * };
           *
           * if (canFormat) {
           *   fields.expirationDate = {
           *     selection: '#expiration-date'
           *   };
           *   functionToCreateAndInsertExpirationDateDivToForm();
           * } else {
           *   fields.expirationMonth = {
           *     selection: '#expiration-month'
           *   };
           *   fields.expirationYear = {
           *     selection: '#expiration-year'
           *   };
           *   functionToCreateAndInsertExpirationMonthAndYearDivsToForm();
           * }
           *
           * braintree.hostedFields.create({
           *   client: clientInstance,
           *   styles: {
           *     // Styles
           *   },
           *   fields: fields
           * }, callback);
           */
          supportsInputFormatting,
          create: wrapPromise(create),
          /**
           * @description The current version of the SDK, i.e. `1.43.0`.
           * @type {string}
           */
          VERSION
        };
      }, { "../lib/basic-component-verification": 88, "../lib/braintree-error": 90, "./external/hosted-fields": 75, "./shared/errors": 80, "@braintree/wrap-promise": 46, "restricted-input/supports-input-formatting": 201 }], 78: [function(require2, module3, exports3) {
        "use strict";
        var isAndroid = require2("@braintree/browser-detection/is-android");
        var isChromeOS = require2("@braintree/browser-detection/is-chrome-os");
        var isIos = require2("@braintree/browser-detection/is-ios");
        var isChrome = require2("@braintree/browser-detection/is-chrome");
        function hasSoftwareKeyboard() {
          return isAndroid() || isChromeOS() || isIos();
        }
        function isChromeIos() {
          return isChrome() && isIos();
        }
        module3.exports = {
          isAndroid,
          isChromeOS,
          isChromeIos,
          isFirefox: require2("@braintree/browser-detection/is-firefox"),
          isIos,
          isIosWebview: require2("@braintree/browser-detection/is-ios-webview"),
          hasSoftwareKeyboard
        };
      }, { "@braintree/browser-detection/is-android": 24, "@braintree/browser-detection/is-chrome": 26, "@braintree/browser-detection/is-chrome-os": 25, "@braintree/browser-detection/is-firefox": 27, "@braintree/browser-detection/is-ios": 33, "@braintree/browser-detection/is-ios-webview": 31 }], 79: [function(require2, module3, exports3) {
        "use strict";
        var enumerate = require2("../../lib/enumerate");
        var errors = require2("./errors");
        var VERSION = "3.103.0";
        var constants = {
          VERSION,
          maxExpirationYearAge: 19,
          externalEvents: {
            FOCUS: "focus",
            BLUR: "blur",
            EMPTY: "empty",
            NOT_EMPTY: "notEmpty",
            VALIDITY_CHANGE: "validityChange",
            CARD_TYPE_CHANGE: "cardTypeChange"
          },
          defaultMaxLengths: {
            number: 19,
            postalCode: 8,
            expirationDate: 7,
            expirationMonth: 2,
            expirationYear: 4,
            cvv: 3
          },
          externalClasses: {
            FOCUSED: "braintree-hosted-fields-focused",
            INVALID: "braintree-hosted-fields-invalid",
            VALID: "braintree-hosted-fields-valid"
          },
          navigationDirections: {
            BACK: "before",
            FORWARD: "after"
          },
          defaultIFrameStyle: {
            border: "none",
            width: "100%",
            height: "100%",
            float: "left"
          },
          tokenizationErrorCodes: {
            81724: errors.HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE,
            // NEXT_MAJOR_VERSION this error triggers for both AVS and CVV errors
            // but the code name implies that it would only trigger for CVV verification
            // failures
            81736: errors.HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED
          },
          allowedStyles: [
            "-moz-appearance",
            "-moz-box-shadow",
            "-moz-osx-font-smoothing",
            "-moz-tap-highlight-color",
            "-moz-transition",
            "-webkit-appearance",
            "-webkit-box-shadow",
            "-webkit-font-smoothing",
            "-webkit-tap-highlight-color",
            "-webkit-transition",
            "appearance",
            "box-shadow",
            "color",
            "direction",
            "font",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-variant-alternates",
            "font-variant-caps",
            "font-variant-east-asian",
            "font-variant-ligatures",
            "font-variant-numeric",
            "font-weight",
            "letter-spacing",
            "line-height",
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "opacity",
            "outline",
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "text-align",
            "text-shadow",
            "transition"
          ],
          allowedFields: {
            cardholderName: {
              name: "cardholder-name",
              label: "Cardholder Name"
            },
            number: {
              name: "credit-card-number",
              label: "Credit Card Number"
            },
            cvv: {
              name: "cvv",
              label: "CVV"
            },
            expirationDate: {
              name: "expiration",
              label: "Expiration Date"
            },
            expirationMonth: {
              name: "expiration-month",
              label: "Expiration Month"
            },
            expirationYear: {
              name: "expiration-year",
              label: "Expiration Year"
            },
            postalCode: {
              name: "postal-code",
              label: "Postal Code"
            }
          },
          allowedAttributes: {
            "aria-invalid": "boolean",
            "aria-required": "boolean",
            disabled: "boolean",
            placeholder: "string"
          },
          autocompleteMappings: {
            "cardholder-name": "cc-name",
            "credit-card-number": "cc-number",
            expiration: "cc-exp",
            "expiration-month": "cc-exp-month",
            "expiration-year": "cc-exp-year",
            cvv: "cc-csc",
            "postal-code": "billing postal-code"
          }
        };
        constants.events = enumerate(
          [
            "ADD_CLASS",
            "AUTOFILL_DATA_AVAILABLE",
            "BIN_AVAILABLE",
            "CARD_FORM_ENTRY_HAS_BEGUN",
            "CLEAR_FIELD",
            "CONFIGURATION",
            "FRAME_READY",
            "INPUT_EVENT",
            "READY_FOR_CLIENT",
            "REMOVE_ATTRIBUTE",
            "REMOVE_CLASS",
            "REMOVE_FOCUS_INTERCEPTS",
            "SET_ATTRIBUTE",
            "SET_MESSAGE",
            "SET_MONTH_OPTIONS",
            "TOKENIZATION_REQUEST",
            "TRIGGER_FOCUS_CHANGE",
            "TRIGGER_INPUT_FOCUS",
            "VALIDATE_STRICT"
          ],
          "hosted-fields:"
        );
        module3.exports = constants;
      }, { "../../lib/enumerate": 99, "./errors": 80 }], 80: [function(require2, module3, exports3) {
        "use strict";
        var BraintreeError = require2("../../lib/braintree-error");
        module3.exports = {
          HOSTED_FIELDS_TIMEOUT: {
            type: BraintreeError.types.UNKNOWN,
            code: "HOSTED_FIELDS_TIMEOUT",
            message: "Hosted Fields timed out when attempting to set up."
          },
          HOSTED_FIELDS_INVALID_FIELD_KEY: {
            type: BraintreeError.types.MERCHANT,
            code: "HOSTED_FIELDS_INVALID_FIELD_KEY"
          },
          HOSTED_FIELDS_INVALID_FIELD_SELECTOR: {
            type: BraintreeError.types.MERCHANT,
            code: "HOSTED_FIELDS_INVALID_FIELD_SELECTOR",
            message: "Selector does not reference a valid DOM node."
          },
          HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME: {
            type: BraintreeError.types.MERCHANT,
            code: "HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME",
            message: "Element already contains a Braintree iframe."
          },
          HOSTED_FIELDS_FIELD_INVALID: {
            type: BraintreeError.types.MERCHANT,
            code: "HOSTED_FIELDS_FIELD_INVALID"
          },
          HOSTED_FIELDS_FIELD_NOT_PRESENT: {
            type: BraintreeError.types.MERCHANT,
            code: "HOSTED_FIELDS_FIELD_NOT_PRESENT"
          },
          HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR: {
            type: BraintreeError.types.NETWORK,
            code: "HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR",
            message: "A tokenization network error occurred."
          },
          HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE: {
            type: BraintreeError.types.CUSTOMER,
            code: "HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE",
            message: "This credit card already exists in the merchant's vault."
          },
          HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED: {
            type: BraintreeError.types.CUSTOMER,
            code: "HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED",
            message: "CVV verification failed during tokenization."
          },
          HOSTED_FIELDS_FAILED_TOKENIZATION: {
            type: BraintreeError.types.CUSTOMER,
            code: "HOSTED_FIELDS_FAILED_TOKENIZATION",
            message: "The supplied card data failed tokenization."
          },
          HOSTED_FIELDS_FIELDS_EMPTY: {
            type: BraintreeError.types.CUSTOMER,
            code: "HOSTED_FIELDS_FIELDS_EMPTY",
            message: "All fields are empty. Cannot tokenize empty card fields."
          },
          HOSTED_FIELDS_FIELDS_INVALID: {
            type: BraintreeError.types.CUSTOMER,
            code: "HOSTED_FIELDS_FIELDS_INVALID",
            message: "Some payment input fields are invalid. Cannot tokenize invalid card fields."
          },
          HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED: {
            type: BraintreeError.types.MERCHANT,
            code: "HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED"
          },
          HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED: {
            type: BraintreeError.types.MERCHANT,
            code: "HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED"
          },
          HOSTED_FIELDS_FIELD_PROPERTY_INVALID: {
            type: BraintreeError.types.MERCHANT,
            code: "HOSTED_FIELDS_FIELD_PROPERTY_INVALID"
          }
        };
      }, { "../../lib/braintree-error": 90 }], 81: [function(require2, module3, exports3) {
        "use strict";
        function findParentTags(element, tag) {
          var parent = element.parentNode;
          var parents = [];
          while (parent != null) {
            if (parent.tagName != null && parent.tagName.toLowerCase() === tag) {
              parents.push(parent);
            }
            parent = parent.parentNode;
          }
          return parents;
        }
        module3.exports = findParentTags;
      }, {}], 82: [function(require2, module3, exports3) {
        "use strict";
        var browserDetection = require2("./browser-detection");
        var constants = require2("./constants");
        var allowedFields = Object.keys(constants.allowedFields);
        var directions = constants.navigationDirections;
        var focusIntercept = {
          generate: function(hostedFieldsId, type, direction, handler) {
            var input = document.createElement("input");
            var focusInterceptStyles = {
              border: "none !important",
              display: "block !important",
              height: "1px !important",
              left: "-1px !important",
              opacity: "0 !important",
              position: "absolute !important",
              top: "-1px !important",
              width: "1px !important"
            };
            var shouldCreateFocusIntercept = browserDetection.hasSoftwareKeyboard() || browserDetection.isFirefox();
            if (!shouldCreateFocusIntercept) {
              return document.createDocumentFragment();
            }
            input.setAttribute("aria-hidden", "true");
            input.setAttribute("autocomplete", "off");
            input.setAttribute("data-braintree-direction", direction);
            input.setAttribute("data-braintree-type", type);
            input.setAttribute(
              "id",
              "bt-" + type + "-" + direction + "-" + hostedFieldsId
            );
            input.setAttribute(
              "style",
              JSON.stringify(focusInterceptStyles).replace(/[{}"]/g, "").replace(/,/g, ";")
            );
            input.classList.add("focus-intercept");
            input.addEventListener("focus", function(event) {
              handler(event);
              if (!browserDetection.hasSoftwareKeyboard()) {
                input.blur();
              }
            });
            return input;
          },
          destroy: function(idString) {
            var focusInputs;
            if (!idString) {
              focusInputs = document.querySelectorAll("[data-braintree-direction]");
              focusInputs = [].slice.call(focusInputs);
            } else {
              focusInputs = [document.getElementById(idString)];
            }
            focusInputs.forEach(function(node) {
              if (node && node.nodeType === 1 && focusIntercept.matchFocusElement(node.getAttribute("id"))) {
                node.parentNode.removeChild(node);
              }
            });
          },
          matchFocusElement: function(idString) {
            var idComponents, hasBTPrefix, isAllowedType, isValidDirection;
            if (!idString) {
              return false;
            }
            idComponents = idString.split("-");
            if (idComponents.length < 4) {
              return false;
            }
            hasBTPrefix = idComponents[0] === "bt";
            isAllowedType = allowedFields.indexOf(idComponents[1]) > -1;
            isValidDirection = idComponents[2] === directions.BACK || idComponents[2] === directions.FORWARD;
            return Boolean(hasBTPrefix && isAllowedType && isValidDirection);
          }
        };
        module3.exports = focusIntercept;
      }, { "./browser-detection": 78, "./constants": 79 }], 83: [function(require2, module3, exports3) {
        "use strict";
        var creditCardType = require2("credit-card-type");
        module3.exports = function(number) {
          var results = creditCardType(number);
          results.forEach(function(card) {
            if (card.type === "mastercard") {
              card.type = "master-card";
            }
          });
          return results;
        };
      }, { "credit-card-type": 158 }], 84: [function(require2, module3, exports3) {
        "use strict";
        var createAuthorizationData = require2("./create-authorization-data");
        var jsonClone = require2("./json-clone");
        var constants = require2("./constants");
        function addMetadata(configuration, data) {
          var key;
          var attrs = data ? jsonClone(data) : {};
          var authAttrs = createAuthorizationData(configuration.authorization).attrs;
          var _meta = jsonClone(configuration.analyticsMetadata);
          attrs.braintreeLibraryVersion = constants.BRAINTREE_LIBRARY_VERSION;
          for (key in attrs._meta) {
            if (attrs._meta.hasOwnProperty(key)) {
              _meta[key] = attrs._meta[key];
            }
          }
          attrs._meta = _meta;
          if (authAttrs.tokenizationKey) {
            attrs.tokenizationKey = authAttrs.tokenizationKey;
          } else {
            attrs.authorizationFingerprint = authAttrs.authorizationFingerprint;
          }
          return attrs;
        }
        module3.exports = addMetadata;
      }, { "./constants": 91, "./create-authorization-data": 95, "./json-clone": 119 }], 85: [function(require2, module3, exports3) {
        "use strict";
        var constants = require2("./constants");
        var addMetadata = require2("./add-metadata");
        function sendAnalyticsEvent(clientInstanceOrPromise, kind, callback) {
          var timestamp = Date.now();
          return Promise.resolve(clientInstanceOrPromise).then(function(client) {
            var timestampInPromise = Date.now();
            var configuration = client.getConfiguration();
            var request = client._request;
            var url = configuration.gatewayConfiguration.analytics.url;
            var data = {
              analytics: [
                {
                  kind: constants.ANALYTICS_PREFIX + kind,
                  isAsync: Math.floor(timestampInPromise / 1e3) !== Math.floor(timestamp / 1e3),
                  timestamp
                }
              ]
            };
            request(
              {
                url,
                method: "post",
                data: addMetadata(configuration, data),
                timeout: constants.ANALYTICS_REQUEST_TIMEOUT_MS
              },
              callback
            );
          }).catch(function(err) {
            if (callback) {
              callback(err);
            }
          });
        }
        module3.exports = {
          sendEvent: sendAnalyticsEvent
        };
      }, { "./add-metadata": 84, "./constants": 91 }], 86: [function(require2, module3, exports3) {
        "use strict";
        var loadScript = require2("@braintree/asset-loader/load-script");
        module3.exports = {
          loadScript
        };
      }, { "@braintree/asset-loader/load-script": 4 }], 87: [function(require2, module3, exports3) {
        "use strict";
        var assignNormalized = typeof Object.assign === "function" ? Object.assign : assignPolyfill;
        function assignPolyfill(destination) {
          var i, source, key;
          for (i = 1; i < arguments.length; i++) {
            source = arguments[i];
            for (key in source) {
              if (source.hasOwnProperty(key)) {
                destination[key] = source[key];
              }
            }
          }
          return destination;
        }
        module3.exports = {
          assign: assignNormalized,
          _assign: assignPolyfill
        };
      }, {}], 88: [function(require2, module3, exports3) {
        "use strict";
        var BraintreeError = require2("./braintree-error");
        var sharedErrors = require2("./errors");
        var VERSION = "3.103.0";
        function basicComponentVerification(options) {
          var client, authorization, name;
          if (!options) {
            return Promise.reject(
              new BraintreeError({
                type: sharedErrors.INVALID_USE_OF_INTERNAL_FUNCTION.type,
                code: sharedErrors.INVALID_USE_OF_INTERNAL_FUNCTION.code,
                message: "Options must be passed to basicComponentVerification function."
              })
            );
          }
          name = options.name;
          client = options.client;
          authorization = options.authorization;
          if (!client && !authorization) {
            return Promise.reject(
              new BraintreeError({
                type: sharedErrors.INSTANTIATION_OPTION_REQUIRED.type,
                code: sharedErrors.INSTANTIATION_OPTION_REQUIRED.code,
                // NEXT_MAJOR_VERSION in major version, we expose passing in authorization for all components
                // instead of passing in a client instance. Leave this a silent feature for now.
                message: "options.client is required when instantiating " + name + "."
              })
            );
          }
          if (!authorization && client.getVersion() !== VERSION) {
            return Promise.reject(
              new BraintreeError({
                type: sharedErrors.INCOMPATIBLE_VERSIONS.type,
                code: sharedErrors.INCOMPATIBLE_VERSIONS.code,
                message: "Client (version " + client.getVersion() + ") and " + name + " (version " + VERSION + ") components must be from the same SDK version."
              })
            );
          }
          return Promise.resolve();
        }
        module3.exports = {
          verify: basicComponentVerification
        };
      }, { "./braintree-error": 90, "./errors": 100 }], 89: [function(require2, module3, exports3) {
        "use strict";
        var once = require2("./once");
        function call(fn, callback) {
          var isSync = fn.length === 0;
          if (isSync) {
            fn();
            callback(null);
          } else {
            fn(callback);
          }
        }
        module3.exports = function(functions, cb) {
          var i;
          var length = functions.length;
          var remaining = length;
          var callback = once(cb);
          if (length === 0) {
            callback(null);
            return;
          }
          function finish(err) {
            if (err) {
              callback(err);
              return;
            }
            remaining -= 1;
            if (remaining === 0) {
              callback(null);
            }
          }
          for (i = 0; i < length; i++) {
            call(functions[i], finish);
          }
        };
      }, { "./once": 121 }], 90: [function(require2, module3, exports3) {
        "use strict";
        var enumerate = require2("./enumerate");
        function BraintreeError(options) {
          if (!BraintreeError.types.hasOwnProperty(options.type)) {
            throw new Error(options.type + " is not a valid type.");
          }
          if (!options.code) {
            throw new Error("Error code required.");
          }
          if (!options.message) {
            throw new Error("Error message required.");
          }
          this.name = "BraintreeError";
          this.code = options.code;
          this.message = options.message;
          this.type = options.type;
          this.details = options.details;
        }
        BraintreeError.prototype = Object.create(Error.prototype);
        BraintreeError.prototype.constructor = BraintreeError;
        BraintreeError.types = enumerate([
          "CUSTOMER",
          "MERCHANT",
          "NETWORK",
          "INTERNAL",
          "UNKNOWN"
        ]);
        BraintreeError.findRootError = function(err) {
          if (err instanceof BraintreeError && err.details && err.details.originalError) {
            return BraintreeError.findRootError(err.details.originalError);
          }
          return err;
        };
        module3.exports = BraintreeError;
      }, { "./enumerate": 99 }], 91: [function(require2, module3, exports3) {
        "use strict";
        var VERSION = "3.103.0";
        var PLATFORM = "web";
        var CLIENT_API_URLS = {
          production: "https://api.braintreegateway.com:443",
          sandbox: "https://api.sandbox.braintreegateway.com:443"
        };
        var ASSETS_URLS = {
          production: "https://assets.braintreegateway.com",
          sandbox: "https://assets.braintreegateway.com"
        };
        var GRAPHQL_URLS = {
          production: "https://payments.braintree-api.com/graphql",
          sandbox: "https://payments.sandbox.braintree-api.com/graphql"
        };
        module3.exports = {
          ANALYTICS_PREFIX: PLATFORM + ".",
          ANALYTICS_REQUEST_TIMEOUT_MS: 2e3,
          ASSETS_URLS,
          CLIENT_API_URLS,
          FRAUDNET_SOURCE: "BRAINTREE_SIGNIN",
          FRAUDNET_FNCLS: "fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99",
          FRAUDNET_URL: "https://c.paypal.com/da/r/fb.js",
          BUS_CONFIGURATION_REQUEST_EVENT: "BUS_CONFIGURATION_REQUEST",
          GRAPHQL_URLS,
          INTEGRATION_TIMEOUT_MS: 6e4,
          VERSION,
          INTEGRATION: "custom",
          SOURCE: "client",
          PLATFORM,
          BRAINTREE_LIBRARY_VERSION: "braintree/" + PLATFORM + "/" + VERSION
        };
      }, {}], 92: [function(require2, module3, exports3) {
        "use strict";
        var BraintreeError = require2("./braintree-error");
        var sharedErrors = require2("./errors");
        module3.exports = function(instance, methodNames) {
          methodNames.forEach(function(methodName) {
            instance[methodName] = function() {
              throw new BraintreeError({
                type: sharedErrors.METHOD_CALLED_AFTER_TEARDOWN.type,
                code: sharedErrors.METHOD_CALLED_AFTER_TEARDOWN.code,
                message: methodName + " cannot be called after teardown."
              });
            };
          });
        };
      }, { "./braintree-error": 90, "./errors": 100 }], 93: [function(require2, module3, exports3) {
        "use strict";
        var BraintreeError = require2("./braintree-error");
        function convertToBraintreeError(originalErr, btErrorObject) {
          if (originalErr instanceof BraintreeError) {
            return originalErr;
          }
          return new BraintreeError({
            type: btErrorObject.type,
            code: btErrorObject.code,
            message: btErrorObject.message,
            details: {
              originalError: originalErr
            }
          });
        }
        module3.exports = convertToBraintreeError;
      }, { "./braintree-error": 90 }], 94: [function(require2, module3, exports3) {
        "use strict";
        var ASSETS_URLS = require2("./constants").ASSETS_URLS;
        function createAssetsUrl(authorization) {
          return ASSETS_URLS.production;
        }
        module3.exports = {
          create: createAssetsUrl
        };
      }, { "./constants": 91 }], 95: [function(require2, module3, exports3) {
        "use strict";
        var atob2 = require2("../lib/vendor/polyfill").atob;
        var CLIENT_API_URLS = require2("../lib/constants").CLIENT_API_URLS;
        function _isTokenizationKey(str) {
          return /^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(str);
        }
        function _parseTokenizationKey(tokenizationKey) {
          var tokens = tokenizationKey.split("_");
          var environment = tokens[0];
          var merchantId = tokens.slice(2).join("_");
          return {
            merchantId,
            environment
          };
        }
        function createAuthorizationData(authorization) {
          var parsedClientToken, parsedTokenizationKey;
          var data = {
            attrs: {},
            configUrl: ""
          };
          if (_isTokenizationKey(authorization)) {
            parsedTokenizationKey = _parseTokenizationKey(authorization);
            data.environment = parsedTokenizationKey.environment;
            data.attrs.tokenizationKey = authorization;
            data.configUrl = CLIENT_API_URLS[parsedTokenizationKey.environment] + "/merchants/" + parsedTokenizationKey.merchantId + "/client_api/v1/configuration";
          } else {
            parsedClientToken = JSON.parse(atob2(authorization));
            data.environment = parsedClientToken.environment;
            data.attrs.authorizationFingerprint = parsedClientToken.authorizationFingerprint;
            data.configUrl = parsedClientToken.configUrl;
            data.graphQL = parsedClientToken.graphQL;
          }
          return data;
        }
        module3.exports = createAuthorizationData;
      }, { "../lib/constants": 91, "../lib/vendor/polyfill": 126 }], 96: [function(require2, module3, exports3) {
        "use strict";
        var BraintreeError = require2("./braintree-error");
        var assets = require2("./assets");
        var sharedErrors = require2("./errors");
        var VERSION = "3.103.0";
        function createDeferredClient(options) {
          var promise = Promise.resolve();
          if (options.client) {
            return Promise.resolve(options.client);
          }
          if (!(window.braintree && window.braintree.client)) {
            promise = assets.loadScript({
              src: options.assetsUrl + "/web/" + VERSION + "/js/client.min.js"
            }).catch(function(err) {
              return Promise.reject(
                new BraintreeError({
                  type: sharedErrors.CLIENT_SCRIPT_FAILED_TO_LOAD.type,
                  code: sharedErrors.CLIENT_SCRIPT_FAILED_TO_LOAD.code,
                  message: sharedErrors.CLIENT_SCRIPT_FAILED_TO_LOAD.message,
                  details: {
                    originalError: err
                  }
                })
              );
            });
          }
          return promise.then(function() {
            if (window.braintree.client.VERSION !== VERSION) {
              return Promise.reject(
                new BraintreeError({
                  type: sharedErrors.INCOMPATIBLE_VERSIONS.type,
                  code: sharedErrors.INCOMPATIBLE_VERSIONS.code,
                  message: "Client (version " + window.braintree.client.VERSION + ") and " + options.name + " (version " + VERSION + ") components must be from the same SDK version."
                })
              );
            }
            return window.braintree.client.create({
              authorization: options.authorization,
              debug: options.debug
            });
          });
        }
        module3.exports = {
          create: createDeferredClient
        };
      }, { "./assets": 86, "./braintree-error": 90, "./errors": 100 }], 97: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function(fn) {
          return function() {
            var args = arguments;
            setTimeout(function() {
              fn.apply(null, args);
            }, 1);
          };
        };
      }, {}], 98: [function(require2, module3, exports3) {
        "use strict";
        var batchExecuteFunctions = require2("./batch-execute-functions");
        function Destructor() {
          this._teardownRegistry = [];
          this._isTearingDown = false;
        }
        Destructor.prototype.registerFunctionForTeardown = function(fn) {
          if (typeof fn === "function") {
            this._teardownRegistry.push(fn);
          }
        };
        Destructor.prototype.teardown = function(callback) {
          if (this._isTearingDown) {
            callback(new Error("Destructor is already tearing down"));
            return;
          }
          this._isTearingDown = true;
          batchExecuteFunctions(
            this._teardownRegistry,
            (function(err) {
              this._teardownRegistry = [];
              this._isTearingDown = false;
              if (typeof callback === "function") {
                callback(err);
              }
            }).bind(this)
          );
        };
        module3.exports = Destructor;
      }, { "./batch-execute-functions": 89 }], 99: [function(require2, module3, exports3) {
        "use strict";
        function enumerate(values, prefix) {
          prefix = prefix == null ? "" : prefix;
          return values.reduce(function(enumeration, value) {
            enumeration[value] = prefix + value;
            return enumeration;
          }, {});
        }
        module3.exports = enumerate;
      }, {}], 100: [function(require2, module3, exports3) {
        "use strict";
        var BraintreeError = require2("./braintree-error");
        module3.exports = {
          INVALID_USE_OF_INTERNAL_FUNCTION: {
            type: BraintreeError.types.INTERNAL,
            code: "INVALID_USE_OF_INTERNAL_FUNCTION"
          },
          INSTANTIATION_OPTION_REQUIRED: {
            type: BraintreeError.types.MERCHANT,
            code: "INSTANTIATION_OPTION_REQUIRED"
          },
          INCOMPATIBLE_VERSIONS: {
            type: BraintreeError.types.MERCHANT,
            code: "INCOMPATIBLE_VERSIONS"
          },
          CLIENT_SCRIPT_FAILED_TO_LOAD: {
            type: BraintreeError.types.NETWORK,
            code: "CLIENT_SCRIPT_FAILED_TO_LOAD",
            message: "Braintree client script could not be loaded."
          },
          METHOD_CALLED_AFTER_TEARDOWN: {
            type: BraintreeError.types.MERCHANT,
            code: "METHOD_CALLED_AFTER_TEARDOWN"
          }
        };
      }, { "./braintree-error": 90 }], 101: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function findRootNode(element) {
          while (element.parentNode) {
            element = element.parentNode;
          }
          return element;
        };
      }, {}], 102: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function(array, key, value) {
          var i;
          for (i = 0; i < array.length; i++) {
            if (array[i].hasOwnProperty(key) && array[i][key] === value) {
              return array[i];
            }
          }
          return null;
        };
      }, {}], 103: [function(require2, module3, exports3) {
        "use strict";
        var Popup = require2("./strategies/popup");
        var PopupBridge = require2("./strategies/popup-bridge");
        var Modal = require2("./strategies/modal");
        var Bus = require2("framebus");
        var events = require2("../shared/events");
        var errors = require2("../shared/errors");
        var constants = require2("../shared/constants");
        var uuid = require2("@braintree/uuid");
        var iFramer = require2("@braintree/iframer");
        var BraintreeError = require2("../../braintree-error");
        var browserDetection = require2("../shared/browser-detection");
        var assign = require2("./../../assign").assign;
        var BUS_CONFIGURATION_REQUEST_EVENT = require2("../../constants").BUS_CONFIGURATION_REQUEST_EVENT;
        var REQUIRED_CONFIG_KEYS = ["name", "dispatchFrameUrl", "openFrameUrl"];
        function noop() {
        }
        function _validateFrameConfiguration(options) {
          if (!options) {
            throw new Error("Valid configuration is required");
          }
          REQUIRED_CONFIG_KEYS.forEach(function(key) {
            if (!options.hasOwnProperty(key)) {
              throw new Error("A valid frame " + key + " must be provided");
            }
          });
          if (!/^[\w_]+$/.test(options.name)) {
            throw new Error("A valid frame name must be provided");
          }
        }
        function FrameService(options) {
          _validateFrameConfiguration(options);
          this._serviceId = uuid().replace(/-/g, "");
          this._options = {
            name: options.name + "_" + this._serviceId,
            dispatchFrameUrl: options.dispatchFrameUrl,
            openFrameUrl: options.openFrameUrl,
            height: options.height,
            width: options.width,
            top: options.top,
            left: options.left
          };
          this.state = options.state || {};
          this._bus = new Bus({ channel: this._serviceId });
          this._setBusEvents();
        }
        FrameService.prototype.initialize = function(callback) {
          var dispatchFrameReadyHandler = (function() {
            callback();
            this._bus.off(events.DISPATCH_FRAME_READY, dispatchFrameReadyHandler);
          }).bind(this);
          this._bus.on(events.DISPATCH_FRAME_READY, dispatchFrameReadyHandler);
          this._writeDispatchFrame();
        };
        FrameService.prototype._writeDispatchFrame = function() {
          var frameName = constants.DISPATCH_FRAME_NAME + "_" + this._serviceId;
          var frameSrc = this._options.dispatchFrameUrl;
          this._dispatchFrame = iFramer({
            "aria-hidden": true,
            name: frameName,
            title: frameName,
            src: frameSrc,
            class: constants.DISPATCH_FRAME_CLASS,
            height: 0,
            width: 0,
            style: {
              position: "absolute",
              left: "-9999px"
            }
          });
          document.body.appendChild(this._dispatchFrame);
        };
        FrameService.prototype._setBusEvents = function() {
          this._bus.on(
            events.DISPATCH_FRAME_REPORT,
            (function(res, reply) {
              if (this._onCompleteCallback) {
                this._onCompleteCallback.call(null, res.err, res.payload);
              }
              this._frame.close();
              this._onCompleteCallback = null;
              if (reply) {
                reply();
              }
            }).bind(this)
          );
          this._bus.on(
            BUS_CONFIGURATION_REQUEST_EVENT,
            (function(reply) {
              reply(this.state);
            }).bind(this)
          );
        };
        FrameService.prototype.open = function(options, callback) {
          options = options || {};
          this._frame = this._getFrameForEnvironment(options);
          this._frame.initialize(callback);
          if (this._frame instanceof PopupBridge) {
            return;
          }
          assign(this.state, options.state);
          this._onCompleteCallback = callback;
          this._frame.open();
          if (this.isFrameClosed()) {
            this._cleanupFrame();
            if (callback) {
              callback(new BraintreeError(errors.FRAME_SERVICE_FRAME_OPEN_FAILED));
            }
            return;
          }
          this._pollForPopupClose();
        };
        FrameService.prototype.redirect = function(url) {
          if (this._frame && !this.isFrameClosed()) {
            this._frame.redirect(url);
          }
        };
        FrameService.prototype.close = function() {
          if (!this.isFrameClosed()) {
            this._frame.close();
          }
        };
        FrameService.prototype.focus = function() {
          if (!this.isFrameClosed()) {
            this._frame.focus();
          }
        };
        FrameService.prototype.createHandler = function(options) {
          options = options || {};
          return {
            close: (function() {
              if (options.beforeClose) {
                options.beforeClose();
              }
              this.close();
            }).bind(this),
            focus: (function() {
              if (options.beforeFocus) {
                options.beforeFocus();
              }
              this.focus();
            }).bind(this)
          };
        };
        FrameService.prototype.createNoopHandler = function() {
          return {
            close: noop,
            focus: noop
          };
        };
        FrameService.prototype.teardown = function() {
          this.close();
          this._dispatchFrame.parentNode.removeChild(this._dispatchFrame);
          this._dispatchFrame = null;
          this._cleanupFrame();
        };
        FrameService.prototype.isFrameClosed = function() {
          return this._frame == null || this._frame.isClosed();
        };
        FrameService.prototype._cleanupFrame = function() {
          this._frame = null;
          clearInterval(this._popupInterval);
          this._popupInterval = null;
        };
        FrameService.prototype._pollForPopupClose = function() {
          this._popupInterval = setInterval(
            (function() {
              if (this.isFrameClosed()) {
                this._cleanupFrame();
                if (this._onCompleteCallback) {
                  this._onCompleteCallback(
                    new BraintreeError(errors.FRAME_SERVICE_FRAME_CLOSED)
                  );
                }
              }
            }).bind(this),
            constants.POPUP_POLL_INTERVAL
          );
          return this._popupInterval;
        };
        FrameService.prototype._getFrameForEnvironment = function(options) {
          var usePopup = browserDetection.supportsPopups();
          var popupBridgeExists = Boolean(window.popupBridge);
          var initOptions = assign({}, this._options, options);
          if (popupBridgeExists) {
            return new PopupBridge(initOptions);
          } else if (usePopup) {
            return new Popup(initOptions);
          }
          return new Modal(initOptions);
        };
        module3.exports = FrameService;
      }, { "../../braintree-error": 90, "../../constants": 91, "../shared/browser-detection": 110, "../shared/constants": 111, "../shared/errors": 112, "../shared/events": 113, "./../../assign": 87, "./strategies/modal": 105, "./strategies/popup": 108, "./strategies/popup-bridge": 106, "@braintree/iframer": 38, "@braintree/uuid": 42, "framebus": 166 }], 104: [function(require2, module3, exports3) {
        "use strict";
        var FrameService = require2("./frame-service");
        module3.exports = {
          create: function createFrameService(options, callback) {
            var frameService = new FrameService(options);
            frameService.initialize(function() {
              callback(frameService);
            });
          }
        };
      }, { "./frame-service": 103 }], 105: [function(require2, module3, exports3) {
        "use strict";
        var iFramer = require2("@braintree/iframer");
        var assign = require2("../../../assign").assign;
        var browserDetection = require2("../../shared/browser-detection");
        var ELEMENT_STYLES = {
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          padding: 0,
          margin: 0,
          border: 0,
          outline: "none",
          zIndex: 20001,
          background: "#FFFFFF"
        };
        function noop() {
        }
        function Modal(options) {
          this._closed = null;
          this._frame = null;
          this._options = options || {};
          this._container = this._options.container || document.body;
        }
        Modal.prototype.initialize = noop;
        Modal.prototype.open = function() {
          var iframerConfig = {
            src: this._options.openFrameUrl,
            name: this._options.name,
            scrolling: "yes",
            height: "100%",
            width: "100%",
            style: assign({}, ELEMENT_STYLES),
            title: "Lightbox Frame"
          };
          if (browserDetection.isIos()) {
            if (browserDetection.isIosWKWebview()) {
              this._lockScrolling();
              iframerConfig.style = {};
            }
            this._el = document.createElement("div");
            assign(this._el.style, ELEMENT_STYLES, {
              height: "100%",
              width: "100%",
              overflow: "auto",
              "-webkit-overflow-scrolling": "touch"
            });
            this._frame = iFramer(iframerConfig);
            this._el.appendChild(this._frame);
          } else {
            this._el = this._frame = iFramer(iframerConfig);
          }
          this._closed = false;
          this._container.appendChild(this._el);
        };
        Modal.prototype.focus = noop;
        Modal.prototype.close = function() {
          this._container.removeChild(this._el);
          this._frame = null;
          this._closed = true;
          if (browserDetection.isIosWKWebview()) {
            this._unlockScrolling();
          }
        };
        Modal.prototype.isClosed = function() {
          return Boolean(this._closed);
        };
        Modal.prototype.redirect = function(redirectUrl) {
          this._frame.src = redirectUrl;
        };
        Modal.prototype._unlockScrolling = function() {
          document.body.style.overflow = this._savedBodyProperties.overflowStyle;
          document.body.style.position = this._savedBodyProperties.positionStyle;
          window.scrollTo(
            this._savedBodyProperties.left,
            this._savedBodyProperties.top
          );
          delete this._savedBodyProperties;
        };
        Modal.prototype._lockScrolling = function() {
          var doc = document.documentElement;
          this._savedBodyProperties = {
            left: (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
            top: (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
            overflowStyle: document.body.style.overflow,
            positionStyle: document.body.style.position
          };
          document.body.style.overflow = "hidden";
          document.body.style.position = "fixed";
          window.scrollTo(0, 0);
        };
        module3.exports = Modal;
      }, { "../../../assign": 87, "../../shared/browser-detection": 110, "@braintree/iframer": 38 }], 106: [function(require2, module3, exports3) {
        "use strict";
        var BraintreeError = require2("../../../braintree-error");
        var errors = require2("../../shared/errors");
        function noop() {
        }
        function PopupBridge(options) {
          this._closed = null;
          this._options = options;
        }
        PopupBridge.prototype.initialize = function(callback) {
          var self2 = this;
          window.popupBridge.onComplete = function(err, payload) {
            var popupDismissed = !payload && !err;
            self2._closed = true;
            if (err || popupDismissed) {
              callback(new BraintreeError(errors.FRAME_SERVICE_FRAME_CLOSED));
              return;
            }
            callback(null, payload);
          };
        };
        PopupBridge.prototype.open = function(options) {
          var url;
          options = options || {};
          url = options.openFrameUrl || this._options.openFrameUrl;
          this._closed = false;
          window.popupBridge.open(url);
        };
        PopupBridge.prototype.focus = noop;
        PopupBridge.prototype.close = noop;
        PopupBridge.prototype.isClosed = function() {
          return Boolean(this._closed);
        };
        PopupBridge.prototype.redirect = function(redirectUrl) {
          this.open({ openFrameUrl: redirectUrl });
        };
        module3.exports = PopupBridge;
      }, { "../../../braintree-error": 90, "../../shared/errors": 112 }], 107: [function(require2, module3, exports3) {
        "use strict";
        var constants = require2("../../../shared/constants");
        var position = require2("./position");
        function calculatePosition(type, userDefinedPosition, size) {
          if (typeof userDefinedPosition !== "undefined") {
            return userDefinedPosition;
          }
          return position[type](size);
        }
        module3.exports = function composePopupOptions(options) {
          var height = options.height || constants.DEFAULT_POPUP_HEIGHT;
          var width = options.width || constants.DEFAULT_POPUP_WIDTH;
          var top = calculatePosition("top", options.top, height);
          var left = calculatePosition("left", options.left, width);
          return [
            constants.POPUP_BASE_OPTIONS,
            "height=" + height,
            "width=" + width,
            "top=" + top,
            "left=" + left
          ].join(",");
        };
      }, { "../../../shared/constants": 111, "./position": 109 }], 108: [function(require2, module3, exports3) {
        "use strict";
        var composeOptions = require2("./compose-options");
        function noop() {
        }
        function Popup(options) {
          this._frame = null;
          this._options = options || {};
        }
        Popup.prototype.initialize = noop;
        Popup.prototype.open = function() {
          this._frame = window.open(
            this._options.openFrameUrl,
            this._options.name,
            composeOptions(this._options)
          );
        };
        Popup.prototype.focus = function() {
          this._frame.focus();
        };
        Popup.prototype.close = function() {
          if (this._frame.closed) {
            return;
          }
          this._frame.close();
        };
        Popup.prototype.isClosed = function() {
          return !this._frame || Boolean(this._frame.closed);
        };
        Popup.prototype.redirect = function(redirectUrl) {
          this._frame.location.href = redirectUrl;
        };
        module3.exports = Popup;
      }, { "./compose-options": 107 }], 109: [function(require2, module3, exports3) {
        "use strict";
        function top(height) {
          var windowHeight = window.outerHeight || document.documentElement.clientHeight;
          var windowTop = window.screenY == null ? window.screenTop : window.screenY;
          return center(windowHeight, height, windowTop);
        }
        function left(width) {
          var windowWidth = window.outerWidth || document.documentElement.clientWidth;
          var windowLeft = window.screenX == null ? window.screenLeft : window.screenX;
          return center(windowWidth, width, windowLeft);
        }
        function center(windowMetric, popupMetric, offset) {
          return (windowMetric - popupMetric) / 2 + offset;
        }
        module3.exports = {
          top,
          left,
          center
        };
      }, {}], 110: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          isIos: require2("@braintree/browser-detection/is-ios"),
          isIosWKWebview: require2("@braintree/browser-detection/is-ios-wkwebview"),
          supportsPopups: require2("@braintree/browser-detection/supports-popups")
        };
      }, { "@braintree/browser-detection/is-ios": 33, "@braintree/browser-detection/is-ios-wkwebview": 32, "@braintree/browser-detection/supports-popups": 35 }], 111: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          DISPATCH_FRAME_NAME: "dispatch",
          DISPATCH_FRAME_CLASS: "braintree-dispatch-frame",
          POPUP_BASE_OPTIONS: "resizable,scrollbars",
          DEFAULT_POPUP_WIDTH: 450,
          DEFAULT_POPUP_HEIGHT: 535,
          POPUP_POLL_INTERVAL: 100,
          POPUP_CLOSE_TIMEOUT: 100
        };
      }, {}], 112: [function(require2, module3, exports3) {
        "use strict";
        var BraintreeError = require2("../../braintree-error");
        module3.exports = {
          FRAME_SERVICE_FRAME_CLOSED: {
            type: BraintreeError.types.INTERNAL,
            code: "FRAME_SERVICE_FRAME_CLOSED",
            message: "Frame closed before tokenization could occur."
          },
          FRAME_SERVICE_FRAME_OPEN_FAILED: {
            type: BraintreeError.types.INTERNAL,
            code: "FRAME_SERVICE_FRAME_OPEN_FAILED",
            message: "Frame failed to open."
          }
        };
      }, { "../../braintree-error": 90 }], 113: [function(require2, module3, exports3) {
        "use strict";
        var enumerate = require2("../../enumerate");
        module3.exports = enumerate(
          ["DISPATCH_FRAME_READY", "DISPATCH_FRAME_REPORT"],
          "frameService:"
        );
      }, { "../../enumerate": 99 }], 114: [function(require2, module3, exports3) {
        "use strict";
        var VERSION = "3.103.0";
        var assign = require2("./assign").assign;
        function generateTokenizationParameters(configuration, overrides) {
          var metadata = configuration.analyticsMetadata;
          var basicTokenizationParameters = {
            gateway: "braintree",
            "braintree:merchantId": configuration.gatewayConfiguration.merchantId,
            "braintree:apiVersion": "v1",
            "braintree:sdkVersion": VERSION,
            "braintree:metadata": JSON.stringify({
              source: metadata.source,
              integration: metadata.integration,
              sessionId: metadata.sessionId,
              version: VERSION,
              platform: metadata.platform
            })
          };
          return assign({}, basicTokenizationParameters, overrides);
        }
        module3.exports = function(configuration, googlePayVersion, googleMerchantId) {
          var data, paypalPaymentMethod;
          var androidPayConfiguration = configuration.gatewayConfiguration.androidPay;
          var environment = configuration.gatewayConfiguration.environment === "production" ? "PRODUCTION" : "TEST";
          if (googlePayVersion === 2) {
            data = {
              apiVersion: 2,
              apiVersionMinor: 0,
              environment,
              allowedPaymentMethods: [
                {
                  type: "CARD",
                  parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: androidPayConfiguration.supportedNetworks.map(
                      function(card) {
                        return card.toUpperCase();
                      }
                    )
                  },
                  tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: generateTokenizationParameters(configuration, {
                      "braintree:authorizationFingerprint": androidPayConfiguration.googleAuthorizationFingerprint
                    })
                  }
                }
              ]
            };
            if (googleMerchantId) {
              data.merchantInfo = {
                merchantId: googleMerchantId
              };
            }
            if (androidPayConfiguration.paypalClientId) {
              paypalPaymentMethod = {
                type: "PAYPAL",
                parameters: {
                  /* eslint-disable camelcase */
                  purchase_context: {
                    purchase_units: [
                      {
                        payee: {
                          client_id: androidPayConfiguration.paypalClientId
                        },
                        recurring_payment: true
                      }
                    ]
                  }
                  /* eslint-enable camelcase */
                },
                tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: generateTokenizationParameters(configuration, {
                    "braintree:paypalClientId": androidPayConfiguration.paypalClientId
                  })
                }
              };
              data.allowedPaymentMethods.push(paypalPaymentMethod);
            }
          } else {
            data = {
              environment,
              allowedPaymentMethods: ["CARD", "TOKENIZED_CARD"],
              paymentMethodTokenizationParameters: {
                tokenizationType: "PAYMENT_GATEWAY",
                parameters: generateTokenizationParameters(configuration, {
                  "braintree:authorizationFingerprint": androidPayConfiguration.googleAuthorizationFingerprint
                })
              },
              cardRequirements: {
                allowedCardNetworks: androidPayConfiguration.supportedNetworks.map(
                  function(card) {
                    return card.toUpperCase();
                  }
                )
              }
            };
            if (configuration.authorizationType === "TOKENIZATION_KEY") {
              data.paymentMethodTokenizationParameters.parameters["braintree:clientKey"] = configuration.authorization;
            }
            if (googleMerchantId) {
              data.merchantId = googleMerchantId;
            }
            if (googlePayVersion) {
              data.apiVersion = googlePayVersion;
            }
          }
          return data;
        };
      }, { "./assign": 87 }], 115: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function inIframe(win) {
          win = win || window;
          try {
            return win.self !== win.top;
          } catch (e) {
            return true;
          }
        };
      }, {}], 116: [function(require2, module3, exports3) {
        "use strict";
        function convertDateStringToDate(dateString) {
          var splitDate = dateString.split("-");
          return new Date(splitDate[0], splitDate[1], splitDate[2]);
        }
        function isDateStringBeforeOrOn(firstDate, secondDate) {
          return convertDateStringToDate(firstDate) <= convertDateStringToDate(secondDate);
        }
        module3.exports = isDateStringBeforeOrOn;
      }, {}], 117: [function(require2, module3, exports3) {
        "use strict";
        function isHTTPS(protocol) {
          protocol = protocol || window.location.protocol;
          return protocol === "https:";
        }
        module3.exports = {
          isHTTPS
        };
      }, {}], 118: [function(require2, module3, exports3) {
        "use strict";
        var parser;
        var legalHosts = {
          "paypal.com": 1,
          "braintreepayments.com": 1,
          "braintreegateway.com": 1,
          "braintree-api.com": 1
        };
        function stripSubdomains(domain) {
          return domain.split(".").slice(-2).join(".");
        }
        function isVerifiedDomain(url) {
          var mainDomain;
          url = url.toLowerCase();
          if (!/^https:/.test(url)) {
            return false;
          }
          parser = parser || document.createElement("a");
          parser.href = url;
          mainDomain = stripSubdomains(parser.hostname);
          return legalHosts.hasOwnProperty(mainDomain);
        }
        module3.exports = isVerifiedDomain;
      }, {}], 119: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function(value) {
          return JSON.parse(JSON.stringify(value));
        };
      }, {}], 120: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function(obj) {
          return Object.keys(obj).filter(function(key) {
            return typeof obj[key] === "function";
          });
        };
      }, {}], 121: [function(require2, module3, exports3) {
        "use strict";
        function once(fn) {
          var called = false;
          return function() {
            if (!called) {
              called = true;
              fn.apply(null, arguments);
            }
          };
        }
        module3.exports = once;
      }, {}], 122: [function(require2, module3, exports3) {
        "use strict";
        function _notEmpty(obj) {
          var key;
          for (key in obj) {
            if (obj.hasOwnProperty(key)) {
              return true;
            }
          }
          return false;
        }
        function _isArray(value) {
          return value && typeof value === "object" && typeof value.length === "number" && Object.prototype.toString.call(value) === "[object Array]" || false;
        }
        function hasQueryParams(url) {
          url = url || window.location.href;
          return /\?/.test(url);
        }
        function parse(url) {
          var query, params;
          url = url || window.location.href;
          if (!hasQueryParams(url)) {
            return {};
          }
          query = url.split("?")[1] || "";
          query = query.replace(/#.*$/, "").split("&");
          params = query.reduce(function(toReturn, keyValue) {
            var parts = keyValue.split("=");
            var key = decodeURIComponent(parts[0]);
            var value = decodeURIComponent(parts[1]);
            toReturn[key] = value;
            return toReturn;
          }, {});
          return params;
        }
        function stringify(params, namespace) {
          var k, v, p;
          var query = [];
          for (p in params) {
            if (!params.hasOwnProperty(p)) {
              continue;
            }
            v = params[p];
            if (namespace) {
              if (_isArray(params)) {
                k = namespace + "[]";
              } else {
                k = namespace + "[" + p + "]";
              }
            } else {
              k = p;
            }
            if (typeof v === "object") {
              query.push(stringify(v, k));
            } else {
              query.push(encodeURIComponent(k) + "=" + encodeURIComponent(v));
            }
          }
          return query.join("&");
        }
        function queryify(url, params) {
          url = url || "";
          if (params != null && typeof params === "object" && _notEmpty(params)) {
            url += url.indexOf("?") === -1 ? "?" : "";
            url += url.indexOf("=") !== -1 ? "&" : "";
            url += stringify(params);
          }
          return url;
        }
        module3.exports = {
          parse,
          stringify,
          queryify,
          hasQueryParams
        };
      }, {}], 123: [function(require2, module3, exports3) {
        "use strict";
        var uuid = require2("@braintree/uuid");
        var findRootNode = require2("./find-root-node");
        function isShadowElement(element) {
          element = findRootNode(element);
          return element.toString() === "[object ShadowRoot]";
        }
        function getShadowHost(element) {
          element = findRootNode(element);
          if (!isShadowElement(element)) {
            return null;
          }
          return element.host;
        }
        function transformToSlot(element, styles) {
          var styleNode = findRootNode(element).querySelector("style");
          var shadowHost = getShadowHost(element);
          var slotName = "shadow-slot-" + uuid();
          var slot = document.createElement("slot");
          var slotProvider = document.createElement("div");
          slot.setAttribute("name", slotName);
          element.appendChild(slot);
          slotProvider.setAttribute("slot", slotName);
          shadowHost.appendChild(slotProvider);
          if (styles) {
            if (!styleNode) {
              styleNode = document.createElement("style");
              element.appendChild(styleNode);
            }
            styleNode.sheet.insertRule(
              '::slotted([slot="' + slotName + '"]) { ' + styles + " }"
            );
          }
          if (isShadowElement(shadowHost)) {
            return transformToSlot(slotProvider, styles);
          }
          return slotProvider;
        }
        module3.exports = {
          isShadowElement,
          getShadowHost,
          transformToSlot
        };
      }, { "./find-root-node": 101, "@braintree/uuid": 42 }], 124: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function(snakeString) {
          if (snakeString.indexOf("_") === -1) {
            return snakeString;
          }
          return snakeString.toLowerCase().replace(/(\_\w)/g, function(match) {
            return match[1].toUpperCase();
          });
        };
      }, {}], 125: [function(require2, module3, exports3) {
        "use strict";
        function useMin(isDebug) {
          return isDebug ? "" : ".min";
        }
        module3.exports = useMin;
      }, {}], 126: [function(require2, module3, exports3) {
        "use strict";
        var atobNormalized = typeof atob === "function" ? atob : atobPolyfill;
        function atobPolyfill(base64String) {
          var a, b, c, b1, b2, b3, b4, i;
          var base64Matcher = new RegExp(
            "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"
          );
          var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          var result = "";
          if (!base64Matcher.test(base64String)) {
            throw new Error("Non base64 encoded input passed to window.atob polyfill");
          }
          i = 0;
          do {
            b1 = characters.indexOf(base64String.charAt(i++));
            b2 = characters.indexOf(base64String.charAt(i++));
            b3 = characters.indexOf(base64String.charAt(i++));
            b4 = characters.indexOf(base64String.charAt(i++));
            a = (b1 & 63) << 2 | b2 >> 4 & 3;
            b = (b2 & 15) << 4 | b3 >> 2 & 15;
            c = (b3 & 3) << 6 | b4 & 63;
            result += String.fromCharCode(a) + (b ? String.fromCharCode(b) : "") + (c ? String.fromCharCode(c) : "");
          } while (i < base64String.length);
          return result;
        }
        module3.exports = {
          atob: function(base64String) {
            return atobNormalized.call(window, base64String);
          },
          _atob: atobPolyfill
        };
      }, {}], 127: [function(require2, module3, exports3) {
        "use strict";
        var BraintreeError = require2("../lib/braintree-error");
        module3.exports = {
          PAYPAL_NOT_ENABLED: {
            type: BraintreeError.types.MERCHANT,
            code: "PAYPAL_NOT_ENABLED",
            message: "PayPal is not enabled for this merchant."
          },
          PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED: {
            type: BraintreeError.types.MERCHANT,
            code: "PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED",
            message: "A linked PayPal Sandbox account is required to use PayPal Checkout in Sandbox. See https://developer.paypal.com/braintree/docs/guides/paypal/testing-go-live#linked-paypal-testing for details on linking your PayPal sandbox with Braintree."
          },
          PAYPAL_ACCOUNT_TOKENIZATION_FAILED: {
            type: BraintreeError.types.NETWORK,
            code: "PAYPAL_ACCOUNT_TOKENIZATION_FAILED",
            message: "Could not tokenize user's PayPal account."
          },
          PAYPAL_FLOW_FAILED: {
            type: BraintreeError.types.NETWORK,
            code: "PAYPAL_FLOW_FAILED",
            message: "Could not initialize PayPal flow."
          },
          PAYPAL_FLOW_OPTION_REQUIRED: {
            type: BraintreeError.types.MERCHANT,
            code: "PAYPAL_FLOW_OPTION_REQUIRED",
            message: "PayPal flow property is invalid or missing."
          },
          PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED: {
            type: BraintreeError.types.MERCHANT,
            code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED"
          },
          PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED: {
            type: BraintreeError.types.NETWORK,
            code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED",
            message: "Something went wrong when setting up the checkout workflow."
          },
          PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED: {
            type: BraintreeError.types.MERCHANT,
            code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED",
            message: "PayPal popup failed to open, make sure to initiate the vault checkout in response to a user action."
          },
          PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED: {
            type: BraintreeError.types.CUSTOMER,
            code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED",
            message: "Customer closed PayPal popup before authorizing."
          },
          PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS: {
            type: BraintreeError.types.MERCHANT,
            code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS",
            message: "Vault initiated checkout already in progress."
          },
          PAYPAL_INVALID_PAYMENT_OPTION: {
            type: BraintreeError.types.MERCHANT,
            code: "PAYPAL_INVALID_PAYMENT_OPTION",
            message: "PayPal payment options are invalid."
          },
          PAYPAL_MISSING_REQUIRED_OPTION: {
            type: BraintreeError.types.MERCHANT,
            code: "PAYPAL_MISSING_REQUIRED_OPTION",
            message: "Missing required option."
          }
        };
      }, { "../lib/braintree-error": 90 }], 128: [function(require2, module3, exports3) {
        "use strict";
        var basicComponentVerification = require2("../lib/basic-component-verification");
        var wrapPromise = require2("@braintree/wrap-promise");
        var PayPalCheckout = require2("./paypal-checkout");
        var VERSION = "3.103.0";
        function create(options) {
          var name = "PayPal Checkout";
          return basicComponentVerification.verify({
            name,
            client: options.client,
            authorization: options.authorization
          }).then(function() {
            var instance = new PayPalCheckout(options);
            return instance._initialize(options);
          });
        }
        function isSupported() {
          return true;
        }
        module3.exports = {
          create: wrapPromise(create),
          isSupported,
          /**
           * @description The current version of the SDK, i.e. `1.43.0`.
           * @type {string}
           */
          VERSION
        };
      }, { "../lib/basic-component-verification": 88, "./paypal-checkout": 129, "@braintree/wrap-promise": 46 }], 129: [function(require2, module3, exports3) {
        "use strict";
        var analytics = require2("../lib/analytics");
        var assign = require2("../lib/assign").assign;
        var createDeferredClient = require2("../lib/create-deferred-client");
        var createAssetsUrl = require2("../lib/create-assets-url");
        var ExtendedPromise = require2("@braintree/extended-promise");
        var wrapPromise = require2("@braintree/wrap-promise");
        var BraintreeError = require2("../lib/braintree-error");
        var convertToBraintreeError = require2("../lib/convert-to-braintree-error");
        var errors = require2("./errors");
        var constants = require2("../paypal/shared/constants");
        var frameService = require2("../lib/frame-service/external");
        var createAuthorizationData = require2("../lib/create-authorization-data");
        var methods = require2("../lib/methods");
        var useMin = require2("../lib/use-min");
        var convertMethodsToError = require2("../lib/convert-methods-to-error");
        var querystring = require2("../lib/querystring");
        var VERSION = "3.103.0";
        var INTEGRATION_TIMEOUT_MS = require2("../lib/constants").INTEGRATION_TIMEOUT_MS;
        var REQUIRED_PARAMS_FOR_START_VAULT_INITIATED_CHECKOUT = [
          "amount",
          "currency",
          "vaultInitiatedCheckoutPaymentMethodToken"
        ];
        var PAYPAL_SDK_PRELOAD_URL = "https://www.{ENV}paypal.com/smart/buttons/preload";
        ExtendedPromise.suppressUnhandledPromiseMessage = true;
        function PayPalCheckout(options) {
          this._merchantAccountId = options.merchantAccountId;
          this._autoSetDataUserIdToken = Boolean(options.autoSetDataUserIdToken);
        }
        PayPalCheckout.prototype._initialize = function(options) {
          var config;
          if (options.client) {
            config = options.client.getConfiguration();
            this._authorizationInformation = {
              fingerprint: config.authorizationFingerprint,
              environment: config.gatewayConfiguration.environment
            };
          } else {
            config = createAuthorizationData(options.authorization);
            this._authorizationInformation = {
              fingerprint: config.attrs.authorizationFingerprint,
              environment: config.environment
            };
          }
          this._clientPromise = createDeferredClient.create({
            authorization: options.authorization,
            client: options.client,
            debug: options.debug,
            assetsUrl: createAssetsUrl.create(options.authorization),
            name: "PayPal Checkout"
          }).then(
            (function(client) {
              this._configuration = client.getConfiguration();
              if (!this._merchantAccountId) {
                if (!this._configuration.gatewayConfiguration.paypalEnabled) {
                  this._setupError = new BraintreeError(errors.PAYPAL_NOT_ENABLED);
                } else if (this._configuration.gatewayConfiguration.paypal.environmentNoNetwork === true) {
                  this._setupError = new BraintreeError(
                    errors.PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED
                  );
                }
              }
              if (this._setupError) {
                return Promise.reject(this._setupError);
              }
              analytics.sendEvent(client, "paypal-checkout.initialized");
              this._frameServicePromise = this._setupFrameService(client);
              return client;
            }).bind(this)
          );
          if (options.client) {
            return this._clientPromise.then(
              (function() {
                return this;
              }).bind(this)
            );
          }
          return Promise.resolve(this);
        };
        PayPalCheckout.prototype._setupFrameService = function(client) {
          var frameServicePromise = new ExtendedPromise();
          var config = client.getConfiguration();
          var timeoutRef = setTimeout(function() {
            analytics.sendEvent(client, "paypal-checkout.frame-service.timed-out");
            frameServicePromise.reject(
              new BraintreeError(
                errors.PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED
              )
            );
          }, INTEGRATION_TIMEOUT_MS);
          this._assetsUrl = config.gatewayConfiguration.paypal.assetsUrl + "/web/" + VERSION;
          this._isDebug = config.isDebug;
          this._loadingFrameUrl = this._assetsUrl + "/html/paypal-landing-frame" + useMin(this._isDebug) + ".html";
          frameService.create(
            {
              name: "braintreepaypallanding",
              dispatchFrameUrl: this._assetsUrl + "/html/dispatch-frame" + useMin(this._isDebug) + ".html",
              openFrameUrl: this._loadingFrameUrl
            },
            (function(service) {
              this._frameService = service;
              clearTimeout(timeoutRef);
              frameServicePromise.resolve();
            }).bind(this)
          );
          return frameServicePromise;
        };
        PayPalCheckout.prototype.createPayment = function(options) {
          if (!options || !constants.FLOW_ENDPOINTS.hasOwnProperty(options.flow)) {
            return Promise.reject(
              new BraintreeError(errors.PAYPAL_FLOW_OPTION_REQUIRED)
            );
          }
          analytics.sendEvent(this._clientPromise, "paypal-checkout.createPayment");
          return this._createPaymentResource(options).then(function(response) {
            var flowToken, urlParams;
            if (options.flow === "checkout") {
              urlParams = querystring.parse(response.paymentResource.redirectUrl);
              flowToken = urlParams.token;
            } else {
              flowToken = response.agreementSetup.tokenId;
            }
            return flowToken;
          });
        };
        PayPalCheckout.prototype._createPaymentResource = function(options, config) {
          var self2 = this;
          var endpoint = "paypal_hermes/" + constants.FLOW_ENDPOINTS[options.flow];
          delete this.intentFromCreatePayment;
          config = config || {};
          if (options.offerCredit === true) {
            analytics.sendEvent(this._clientPromise, "paypal-checkout.credit.offered");
          }
          return this._clientPromise.then(function(client) {
            return client.request({
              endpoint,
              method: "post",
              data: self2._formatPaymentResourceData(options, config)
            }).then(function(data) {
              self2.intentFromCreatePayment = options.intent;
              return data;
            });
          }).catch(function(err) {
            var status;
            if (self2._setupError) {
              return Promise.reject(self2._setupError);
            }
            status = err.details && err.details.httpStatus;
            if (status === 422) {
              return Promise.reject(
                new BraintreeError({
                  type: errors.PAYPAL_INVALID_PAYMENT_OPTION.type,
                  code: errors.PAYPAL_INVALID_PAYMENT_OPTION.code,
                  message: errors.PAYPAL_INVALID_PAYMENT_OPTION.message,
                  details: {
                    originalError: err
                  }
                })
              );
            }
            return Promise.reject(
              convertToBraintreeError(err, {
                type: errors.PAYPAL_FLOW_FAILED.type,
                code: errors.PAYPAL_FLOW_FAILED.code,
                message: errors.PAYPAL_FLOW_FAILED.message
              })
            );
          });
        };
        PayPalCheckout.prototype.updatePayment = function(options) {
          var self2 = this;
          var endpoint = "paypal_hermes/patch_payment_resource";
          if (!options || this._hasMissingOption(options, constants.REQUIRED_OPTIONS)) {
            analytics.sendEvent(
              self2._clientPromise,
              "paypal-checkout.updatePayment.missing-options"
            );
            return Promise.reject(
              new BraintreeError(errors.PAYPAL_MISSING_REQUIRED_OPTION)
            );
          }
          if (!this._verifyConsistentCurrency(options)) {
            analytics.sendEvent(
              self2._clientPromise,
              "paypal-checkout.updatePayment.inconsistent-currencies"
            );
            return Promise.reject(
              new BraintreeError({
                type: errors.PAYPAL_INVALID_PAYMENT_OPTION.type,
                code: errors.PAYPAL_INVALID_PAYMENT_OPTION.code,
                message: errors.PAYPAL_INVALID_PAYMENT_OPTION.message,
                details: {
                  originalError: new Error(
                    "One or more shipping option currencies differ from checkout currency."
                  )
                }
              })
            );
          }
          analytics.sendEvent(this._clientPromise, "paypal-checkout.updatePayment");
          return this._clientPromise.then(function(client) {
            return client.request({
              endpoint,
              method: "post",
              data: self2._formatUpdatePaymentData(options)
            });
          }).catch(function(err) {
            var status = err.details && err.details.httpStatus;
            if (status === 422) {
              analytics.sendEvent(
                self2._clientPromise,
                "paypal-checkout.updatePayment.invalid"
              );
              return Promise.reject(
                new BraintreeError({
                  type: errors.PAYPAL_INVALID_PAYMENT_OPTION.type,
                  code: errors.PAYPAL_INVALID_PAYMENT_OPTION.code,
                  message: errors.PAYPAL_INVALID_PAYMENT_OPTION.message,
                  details: {
                    originalError: err
                  }
                })
              );
            }
            analytics.sendEvent(
              self2._clientPromise,
              "paypal-checkout.updatePayment." + errors.PAYPAL_FLOW_FAILED.code
            );
            return Promise.reject(
              convertToBraintreeError(err, {
                type: errors.PAYPAL_FLOW_FAILED.type,
                code: errors.PAYPAL_FLOW_FAILED.code,
                message: errors.PAYPAL_FLOW_FAILED.message
              })
            );
          });
        };
        PayPalCheckout.prototype.startVaultInitiatedCheckout = function(options) {
          var missingRequiredParam;
          var self2 = this;
          if (this._vaultInitiatedCheckoutInProgress) {
            analytics.sendEvent(
              this._clientPromise,
              "paypal-checkout.startVaultInitiatedCheckout.error.already-in-progress"
            );
            return Promise.reject(
              new BraintreeError(
                errors.PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS
              )
            );
          }
          REQUIRED_PARAMS_FOR_START_VAULT_INITIATED_CHECKOUT.forEach(function(param) {
            if (!options.hasOwnProperty(param)) {
              missingRequiredParam = param;
            }
          });
          if (missingRequiredParam) {
            return Promise.reject(
              new BraintreeError({
                type: errors.PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED.type,
                code: errors.PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED.code,
                message: "Required param " + missingRequiredParam + " is missing."
              })
            );
          }
          this._vaultInitiatedCheckoutInProgress = true;
          this._addModalBackdrop(options);
          options = assign({}, options, {
            flow: "checkout"
          });
          analytics.sendEvent(
            this._clientPromise,
            "paypal-checkout.startVaultInitiatedCheckout.started"
          );
          return this._waitForVaultInitiatedCheckoutDependencies().then(function() {
            var frameCommunicationPromise = new ExtendedPromise();
            var startVaultInitiatedCheckoutPromise = self2._createPaymentResource(options, {
              returnUrl: self2._constructVaultCheckutUrl("redirect-frame"),
              cancelUrl: self2._constructVaultCheckutUrl("cancel-frame")
            }).then(function(response) {
              var redirectUrl = response.paymentResource.redirectUrl;
              self2._frameService.redirect(redirectUrl);
              return frameCommunicationPromise;
            });
            self2._frameService.open(
              {},
              self2._createFrameServiceCallback(frameCommunicationPromise)
            );
            return startVaultInitiatedCheckoutPromise;
          }).catch(function(err) {
            self2._vaultInitiatedCheckoutInProgress = false;
            self2._removeModalBackdrop();
            if (err.code === "FRAME_SERVICE_FRAME_CLOSED") {
              analytics.sendEvent(
                self2._clientPromise,
                "paypal-checkout.startVaultInitiatedCheckout.canceled.by-customer"
              );
              return Promise.reject(
                new BraintreeError(
                  errors.PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED
                )
              );
            }
            if (self2._frameService) {
              self2._frameService.close();
            }
            if (err.code && err.code.indexOf("FRAME_SERVICE_FRAME_OPEN_FAILED") > -1) {
              analytics.sendEvent(
                self2._clientPromise,
                "paypal-checkout.startVaultInitiatedCheckout.failed.popup-not-opened"
              );
              return Promise.reject(
                new BraintreeError({
                  code: errors.PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED.code,
                  type: errors.PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED.type,
                  message: errors.PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED.message,
                  details: {
                    originalError: err
                  }
                })
              );
            }
            return Promise.reject(err);
          }).then(function(response) {
            self2._frameService.close();
            self2._vaultInitiatedCheckoutInProgress = false;
            self2._removeModalBackdrop();
            analytics.sendEvent(
              self2._clientPromise,
              "paypal-checkout.startVaultInitiatedCheckout.succeeded"
            );
            return Promise.resolve(response);
          });
        };
        PayPalCheckout.prototype._addModalBackdrop = function(options) {
          if (options.optOutOfModalBackdrop) {
            return;
          }
          if (!this._modalBackdrop) {
            this._modalBackdrop = document.createElement("div");
            this._modalBackdrop.setAttribute(
              "data-braintree-paypal-vault-initiated-checkout-modal",
              true
            );
            this._modalBackdrop.style.position = "fixed";
            this._modalBackdrop.style.top = 0;
            this._modalBackdrop.style.bottom = 0;
            this._modalBackdrop.style.left = 0;
            this._modalBackdrop.style.right = 0;
            this._modalBackdrop.style.zIndex = 9999;
            this._modalBackdrop.style.background = "black";
            this._modalBackdrop.style.opacity = "0.7";
            this._modalBackdrop.addEventListener(
              "click",
              (function() {
                this.focusVaultInitiatedCheckoutWindow();
              }).bind(this)
            );
          }
          document.body.appendChild(this._modalBackdrop);
        };
        PayPalCheckout.prototype._removeModalBackdrop = function() {
          if (!(this._modalBackdrop && this._modalBackdrop.parentNode)) {
            return;
          }
          this._modalBackdrop.parentNode.removeChild(this._modalBackdrop);
        };
        PayPalCheckout.prototype.closeVaultInitiatedCheckoutWindow = function() {
          if (this._vaultInitiatedCheckoutInProgress) {
            analytics.sendEvent(
              this._clientPromise,
              "paypal-checkout.startVaultInitiatedCheckout.canceled.by-merchant"
            );
          }
          return this._waitForVaultInitiatedCheckoutDependencies().then(
            (function() {
              this._frameService.close();
            }).bind(this)
          );
        };
        PayPalCheckout.prototype.focusVaultInitiatedCheckoutWindow = function() {
          return this._waitForVaultInitiatedCheckoutDependencies().then(
            (function() {
              this._frameService.focus();
            }).bind(this)
          );
        };
        PayPalCheckout.prototype._createFrameServiceCallback = function(frameCommunicationPromise) {
          var self2 = this;
          return function(err, payload) {
            if (err) {
              frameCommunicationPromise.reject(err);
            } else if (payload) {
              self2._frameService.redirect(self2._loadingFrameUrl);
              self2.tokenizePayment({
                paymentToken: payload.token,
                payerID: payload.PayerID,
                paymentID: payload.paymentId,
                orderID: payload.orderId
              }).then(function(res) {
                frameCommunicationPromise.resolve(res);
              }).catch(function(tokenizationError) {
                frameCommunicationPromise.reject(tokenizationError);
              });
            }
          };
        };
        PayPalCheckout.prototype._waitForVaultInitiatedCheckoutDependencies = function() {
          var self2 = this;
          return this._clientPromise.then(function() {
            return self2._frameServicePromise;
          });
        };
        PayPalCheckout.prototype._constructVaultCheckutUrl = function(frameName) {
          var serviceId = this._frameService._serviceId;
          return this._assetsUrl + "/html/" + frameName + useMin(this._isDebug) + ".html?channel=" + serviceId;
        };
        PayPalCheckout.prototype.tokenizePayment = function(tokenizeOptions) {
          var self2 = this;
          var shouldVault = true;
          var payload;
          var options = {
            flow: tokenizeOptions.billingToken && !tokenizeOptions.paymentID ? "vault" : "checkout",
            intent: tokenizeOptions.intent || this.intentFromCreatePayment
          };
          var params = {
            // The paymentToken provided by the PayPal JS SDK is the EC Token
            ecToken: tokenizeOptions.paymentToken,
            billingToken: tokenizeOptions.billingToken,
            payerId: tokenizeOptions.payerID,
            paymentId: tokenizeOptions.paymentID,
            orderId: tokenizeOptions.orderID,
            shippingOptionsId: tokenizeOptions.shippingOptionsId
          };
          if (tokenizeOptions.hasOwnProperty("vault")) {
            shouldVault = tokenizeOptions.vault;
          }
          options.vault = shouldVault;
          analytics.sendEvent(
            this._clientPromise,
            "paypal-checkout.tokenization.started"
          );
          return this._clientPromise.then(function(client) {
            return client.request({
              endpoint: "payment_methods/paypal_accounts",
              method: "post",
              data: self2._formatTokenizeData(options, params)
            });
          }).then(function(response) {
            payload = self2._formatTokenizePayload(response);
            analytics.sendEvent(
              self2._clientPromise,
              "paypal-checkout.tokenization.success"
            );
            if (payload.creditFinancingOffered) {
              analytics.sendEvent(
                self2._clientPromise,
                "paypal-checkout.credit.accepted"
              );
            }
            return payload;
          }).catch(function(err) {
            if (self2._setupError) {
              return Promise.reject(self2._setupError);
            }
            analytics.sendEvent(
              self2._clientPromise,
              "paypal-checkout.tokenization.failed"
            );
            return Promise.reject(
              convertToBraintreeError(err, {
                type: errors.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.type,
                code: errors.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.code,
                message: errors.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.message
              })
            );
          });
        };
        PayPalCheckout.prototype.getClientId = function() {
          return this._clientPromise.then(function(client) {
            return client.getConfiguration().gatewayConfiguration.paypal.clientId;
          });
        };
        PayPalCheckout.prototype.loadPayPalSDK = function(options) {
          var idPromise, src;
          var loadPromise = new ExtendedPromise();
          var dataAttributes = options && options.dataAttributes || {};
          var userIdToken = dataAttributes["user-id-token"] || dataAttributes["data-user-id-token"];
          if (!userIdToken) {
            userIdToken = this._authorizationInformation.fingerprint && this._authorizationInformation.fingerprint.split("?")[0];
          }
          this._paypalScript = document.createElement("script");
          options = assign(
            {},
            {
              components: "buttons"
            },
            options
          );
          delete options.dataAttributes;
          if (options.vault) {
            options.intent = options.intent || "tokenize";
          } else {
            options.intent = options.intent || "authorize";
            options.currency = options.currency || "USD";
          }
          src = "https://www.paypal.com/sdk/js?";
          this._paypalScript.onload = function() {
            loadPromise.resolve();
          };
          Object.keys(dataAttributes).forEach(
            (function(attribute) {
              this._paypalScript.setAttribute(
                "data-" + attribute.replace(/^data\-/, ""),
                dataAttributes[attribute]
              );
            }).bind(this)
          );
          if (options["client-id"]) {
            idPromise = Promise.resolve(options["client-id"]);
          } else {
            idPromise = this.getClientId();
          }
          idPromise.then(
            (function(id) {
              options["client-id"] = id;
              if (this._autoSetDataUserIdToken && userIdToken) {
                this._paypalScript.setAttribute("data-user-id-token", userIdToken);
                this._attachPreloadPixel({
                  id,
                  userIdToken,
                  amount: dataAttributes.amount,
                  currency: options.currency,
                  merchantId: options["merchant-id"]
                });
              }
              this._paypalScript.src = querystring.queryify(src, options);
              document.head.insertBefore(
                this._paypalScript,
                document.head.firstElementChild
              );
            }).bind(this)
          );
          return loadPromise.then(
            (function() {
              return this;
            }).bind(this)
          );
        };
        PayPalCheckout.prototype._attachPreloadPixel = function(options) {
          var request;
          var id = options.id;
          var userIdToken = options.userIdToken;
          var env = this._authorizationInformation.environment;
          var subdomain = env === "production" ? "" : "sandbox.";
          var url = PAYPAL_SDK_PRELOAD_URL.replace("{ENV}", subdomain);
          var preloadOptions = {
            "client-id": id,
            "user-id-token": userIdToken
          };
          if (options.amount) {
            preloadOptions.amount = options.amount;
          }
          if (options.currency) {
            preloadOptions.currency = options.currency;
          }
          if (options.merchantId) {
            preloadOptions["merchant-id"] = options.merchantId;
          }
          request = new XMLHttpRequest();
          request.open("GET", querystring.queryify(url, preloadOptions));
          request.send();
        };
        PayPalCheckout.prototype._formatPaymentResourceData = function(options, config) {
          var key;
          var gatewayConfiguration = this._configuration.gatewayConfiguration;
          var intent = options.intent;
          var paymentResource = {
            // returnUrl and cancelUrl are required in hermes create_payment_resource route
            // but are not used by the PayPal sdk, except to redirect to an error page
            returnUrl: config.returnUrl || "https://www.paypal.com/checkoutnow/error",
            cancelUrl: config.cancelUrl || "https://www.paypal.com/checkoutnow/error",
            offerPaypalCredit: options.offerCredit === true,
            merchantAccountId: this._merchantAccountId,
            experienceProfile: {
              brandName: options.displayName || gatewayConfiguration.paypal.displayName,
              localeCode: options.locale,
              noShipping: (!options.enableShippingAddress).toString(),
              addressOverride: options.shippingAddressEditable === false,
              landingPageType: options.landingPageType
            },
            shippingOptions: options.shippingOptions
          };
          if (options.flow === "checkout") {
            paymentResource.amount = options.amount;
            paymentResource.currencyIsoCode = options.currency;
            paymentResource.requestBillingAgreement = options.requestBillingAgreement;
            if (intent) {
              if (intent === "capture") {
                intent = "sale";
              }
              paymentResource.intent = intent;
            }
            if (options.hasOwnProperty("lineItems")) {
              paymentResource.lineItems = options.lineItems;
            }
            if (options.hasOwnProperty("vaultInitiatedCheckoutPaymentMethodToken")) {
              paymentResource.vaultInitiatedCheckoutPaymentMethodToken = options.vaultInitiatedCheckoutPaymentMethodToken;
            }
            if (options.hasOwnProperty("shippingOptions")) {
              paymentResource.shippingOptions = options.shippingOptions;
            }
            for (key in options.shippingAddressOverride) {
              if (options.shippingAddressOverride.hasOwnProperty(key)) {
                paymentResource[key] = options.shippingAddressOverride[key];
              }
            }
            if (options.hasOwnProperty("billingAgreementDetails")) {
              paymentResource.billingAgreementDetails = options.billingAgreementDetails;
            }
          } else {
            paymentResource.shippingAddress = options.shippingAddressOverride;
            if (options.billingAgreementDescription) {
              paymentResource.description = options.billingAgreementDescription;
            }
          }
          this._riskCorrelationId = options.riskCorrelationId;
          if (options.riskCorrelationId) {
            paymentResource.correlationId = this._riskCorrelationId;
          }
          return paymentResource;
        };
        PayPalCheckout.prototype._verifyConsistentCurrency = function(options) {
          if (options.currency && options.hasOwnProperty("shippingOptions") && Array.isArray(options.shippingOptions)) {
            return options.shippingOptions.every(function(item) {
              return item.amount && item.amount.currency && options.currency.toLowerCase() === item.amount.currency.toLowerCase();
            });
          }
          return true;
        };
        PayPalCheckout.prototype._hasMissingOption = function(options, required) {
          var i, option;
          required = required || [];
          if (!options.hasOwnProperty("amount") && !options.hasOwnProperty("lineItems")) {
            return true;
          }
          for (i = 0; i < required.length; i++) {
            option = required[i];
            if (!options.hasOwnProperty(option)) {
              return true;
            }
          }
          return false;
        };
        PayPalCheckout.prototype._formatUpdatePaymentData = function(options) {
          var self2 = this;
          var paymentResource = {
            merchantAccountId: this._merchantAccountId,
            paymentId: options.paymentId || options.orderId,
            currencyIsoCode: options.currency
          };
          if (options.hasOwnProperty("amount")) {
            paymentResource.amount = options.amount;
          }
          if (options.hasOwnProperty("lineItems")) {
            paymentResource.lineItems = options.lineItems;
          }
          if (options.hasOwnProperty("shippingOptions")) {
            paymentResource.shippingOptions = options.shippingOptions;
          }
          if (options.hasOwnProperty("amountBreakdown")) {
            paymentResource.amountBreakdown = options.amountBreakdown;
          }
          if (options.hasOwnProperty("shippingAddress")) {
            analytics.sendEvent(
              self2._clientPromise,
              "paypal-checkout.updatePayment.shippingAddress.provided.by-the-merchant"
            );
            paymentResource.line1 = options.shippingAddress.line1;
            if (options.shippingAddress.hasOwnProperty("line2")) {
              paymentResource.line2 = options.shippingAddress.line2;
            }
            paymentResource.city = options.shippingAddress.city;
            paymentResource.state = options.shippingAddress.state;
            paymentResource.postalCode = options.shippingAddress.postalCode;
            paymentResource.countryCode = options.shippingAddress.countryCode;
            if (options.shippingAddress.hasOwnProperty("phone")) {
              paymentResource.phone = options.shippingAddress.phone;
            }
            if (options.shippingAddress.hasOwnProperty("recipientName")) {
              paymentResource.recipientName = options.shippingAddress.recipientName;
            }
          }
          return paymentResource;
        };
        PayPalCheckout.prototype._formatTokenizeData = function(options, params) {
          var clientConfiguration = this._configuration;
          var gatewayConfiguration = clientConfiguration.gatewayConfiguration;
          var isTokenizationKey = clientConfiguration.authorizationType === "TOKENIZATION_KEY";
          var isVaultFlow = options.flow === "vault";
          var correlationId = this._riskCorrelationId || params.billingToken || params.ecToken;
          var data = {
            paypalAccount: {
              correlationId,
              options: {
                validate: isVaultFlow && !isTokenizationKey && options.vault
              }
            }
          };
          if (isVaultFlow) {
            data.paypalAccount.billingAgreementToken = params.billingToken;
          } else {
            data.paypalAccount.paymentToken = params.paymentId || params.orderId;
            data.paypalAccount.payerId = params.payerId;
            data.paypalAccount.unilateral = gatewayConfiguration.paypal.unvettedMerchant;
            if (options.intent) {
              data.paypalAccount.intent = options.intent;
            }
          }
          if (this._merchantAccountId) {
            data.merchantAccountId = this._merchantAccountId;
          }
          return data;
        };
        PayPalCheckout.prototype._formatTokenizePayload = function(response) {
          var payload;
          var account = {};
          if (response.paypalAccounts) {
            account = response.paypalAccounts[0];
          }
          payload = {
            nonce: account.nonce,
            details: {},
            type: account.type
          };
          if (account.details && account.details.payerInfo) {
            payload.details = account.details.payerInfo;
          }
          if (account.details && account.details.creditFinancingOffered) {
            payload.creditFinancingOffered = account.details.creditFinancingOffered;
          }
          if (account.details && account.details.shippingOptionId) {
            payload.shippingOptionId = account.details.shippingOptionId;
          }
          if (account.details && account.details.cobrandedCardLabel) {
            payload.cobrandedCardLabel = account.details.cobrandedCardLabel;
          }
          return payload;
        };
        PayPalCheckout.prototype.teardown = function() {
          var self2 = this;
          convertMethodsToError(this, methods(PayPalCheckout.prototype));
          if (this._paypalScript && this._paypalScript.parentNode) {
            this._paypalScript.parentNode.removeChild(this._paypalScript);
          }
          return this._frameServicePromise.catch(function() {
          }).then(function() {
            if (!self2._frameService) {
              return Promise.resolve();
            }
            return self2._frameService.teardown();
          });
        };
        module3.exports = wrapPromise.wrapPrototype(PayPalCheckout);
      }, { "../lib/analytics": 85, "../lib/assign": 87, "../lib/braintree-error": 90, "../lib/constants": 91, "../lib/convert-methods-to-error": 92, "../lib/convert-to-braintree-error": 93, "../lib/create-assets-url": 94, "../lib/create-authorization-data": 95, "../lib/create-deferred-client": 96, "../lib/frame-service/external": 104, "../lib/methods": 120, "../lib/querystring": 122, "../lib/use-min": 125, "../paypal/shared/constants": 130, "./errors": 127, "@braintree/extended-promise": 37, "@braintree/wrap-promise": 46 }], 130: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          LANDING_FRAME_NAME: "braintreepaypallanding",
          FLOW_ENDPOINTS: {
            checkout: "create_payment_resource",
            vault: "setup_billing_agreement"
          },
          REQUIRED_OPTIONS: ["paymentId", "currency"]
        };
      }, {}], 131: [function(require2, module3, exports3) {
        "use strict";
        var assign = require2("../../../lib/assign").assign;
        var analytics = require2("../../../lib/analytics");
        var BraintreeError = require2("../../../lib/braintree-error");
        var isVerifiedDomain = require2("../../../lib/is-verified-domain");
        var ExtendedPromise = require2("@braintree/extended-promise");
        var EventEmitter = require2("@braintree/event-emitter");
        var errors = require2("../../shared/errors");
        var iFramer = require2("@braintree/iframer");
        var Bus = require2("framebus");
        var constants = require2("../../shared/constants");
        var uuid = require2("@braintree/uuid");
        var events = require2("../../shared/events");
        var useMin = require2("../../../lib/use-min");
        var BUS_CONFIGURATION_REQUEST_EVENT = require2("../../../lib/constants").BUS_CONFIGURATION_REQUEST_EVENT;
        var VERSION = "3.103.0";
        var IFRAME_HEIGHT = 400;
        var IFRAME_WIDTH = 400;
        ExtendedPromise.suppressUnhandledPromiseMessage = true;
        function BaseFramework(options) {
          EventEmitter.call(this);
          this._client = options.client;
          this._createPromise = options.createPromise;
          this._createOptions = options;
          if (this._client) {
            this._isDebug = this._client.getConfiguration().isDebug;
            this._assetsUrl = this._client.getConfiguration().gatewayConfiguration.assetsUrl;
          } else {
            this._isDebug = Boolean(options.isDebug);
            this._assetsUrl = options.assetsUrl;
          }
          this._assetsUrl = this._assetsUrl + "/web/" + VERSION;
        }
        EventEmitter.createChild(BaseFramework);
        BaseFramework.prototype._waitForClient = function() {
          if (this._client) {
            return Promise.resolve();
          }
          return this._createPromise.then(
            (function(client) {
              this._client = client;
            }).bind(this)
          );
        };
        BaseFramework.prototype.setUpEventListeners = function() {
          throw new BraintreeError(errors.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
        };
        BaseFramework.prototype.verifyCard = function(options, privateOptions) {
          var formattedOptions, error;
          var self2 = this;
          privateOptions = privateOptions || {};
          error = this._checkForVerifyCardError(options, privateOptions);
          if (error) {
            return Promise.reject(error);
          }
          this._verifyCardInProgress = true;
          formattedOptions = this._formatVerifyCardOptions(options);
          return this._formatLookupData(formattedOptions).then(function(data) {
            analytics.sendEvent(
              self2._createPromise,
              "three-d-secure.verification-flow.started"
            );
            return self2._performLookup(formattedOptions.nonce, data);
          }).then(function(response) {
            analytics.sendEvent(
              self2._createPromise,
              "three-d-secure.verification-flow.3ds-version." + response.lookup.threeDSecureVersion
            );
            return self2._onLookupComplete(response, formattedOptions);
          }).then(function(response) {
            return self2.initializeChallengeWithLookupResponse(
              response,
              formattedOptions
            );
          }).then(function(payload) {
            self2._resetVerificationState();
            analytics.sendEvent(
              self2._createPromise,
              "three-d-secure.verification-flow.completed"
            );
            return payload;
          }).catch(function(err) {
            self2._resetVerificationState();
            analytics.sendEvent(
              self2._createPromise,
              "three-d-secure.verification-flow.failed"
            );
            return Promise.reject(err);
          });
        };
        BaseFramework.prototype._checkForFrameworkSpecificVerifyCardErrors = function() {
          throw new BraintreeError(errors.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
        };
        BaseFramework.prototype._presentChallenge = function() {
          throw new BraintreeError(errors.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
        };
        BaseFramework.prototype.prepareLookup = function() {
          throw new BraintreeError(errors.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
        };
        BaseFramework.prototype._resetVerificationState = function() {
          this._verifyCardInProgress = false;
          this._verifyCardPromisePlus = null;
          if (typeof this._reloadThreeDSecure === "function") {
            this._reloadThreeDSecure();
          }
        };
        BaseFramework.prototype._performLookup = function(nonce, data) {
          var self2 = this;
          var url = "payment_methods/" + nonce + "/three_d_secure/lookup";
          return this._waitForClient().then(function() {
            return self2._client.request({
              endpoint: url,
              method: "post",
              data
            }).catch(function(err) {
              var status = err && err.details && err.details.httpStatus;
              var analyticsMessage = "three-d-secure.verification-flow.lookup-failed";
              var lookupError;
              if (status === 404) {
                lookupError = errors.THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR;
                analyticsMessage += ".404";
              } else if (status === 422) {
                lookupError = errors.THREEDS_LOOKUP_VALIDATION_ERROR;
                analyticsMessage += ".422";
              } else {
                lookupError = errors.THREEDS_LOOKUP_ERROR;
              }
              analytics.sendEvent(self2._createPromise, analyticsMessage);
              return Promise.reject(
                new BraintreeError({
                  type: lookupError.type,
                  code: lookupError.code,
                  message: lookupError.message,
                  details: {
                    originalError: err
                  }
                })
              );
            });
          });
        };
        BaseFramework.prototype._existsAndIsNumeric = function(value) {
          return !(value === void 0 || // eslint-disable-line no-undefined
          value === null || Array.isArray(value) || typeof value === "boolean" || typeof value === "string" && value.trim() === "" || isNaN(Number(value)));
        };
        BaseFramework.prototype._checkForVerifyCardError = function(options, privateOptions) {
          var errorOption;
          if (this._verifyCardInProgress === true) {
            return new BraintreeError(errors.THREEDS_AUTHENTICATION_IN_PROGRESS);
          } else if (!options.nonce) {
            errorOption = "a nonce";
          } else if (
            // eslint-disable-next-line no-undefined
            !this._existsAndIsNumeric(options.amount)
          ) {
            errorOption = "an amount";
          }
          if (!errorOption) {
            errorOption = this._checkForFrameworkSpecificVerifyCardErrors(
              options,
              privateOptions
            );
          }
          if (errorOption) {
            return new BraintreeError({
              type: errors.THREEDS_MISSING_VERIFY_CARD_OPTION.type,
              code: errors.THREEDS_MISSING_VERIFY_CARD_OPTION.code,
              message: "verifyCard options must include " + errorOption + "."
            });
          }
          return null;
        };
        BaseFramework.prototype.initializeChallengeWithLookupResponse = function(lookupResponse, options) {
          var self2 = this;
          options = options || {};
          this._lookupPaymentMethod = lookupResponse.paymentMethod;
          self2._verifyCardPromisePlus = self2._verifyCardPromisePlus || new ExtendedPromise();
          self2._handleLookupResponse(lookupResponse, options);
          return self2._verifyCardPromisePlus.then(function(payload) {
            analytics.sendEvent(
              self2._createPromise,
              "three-d-secure.verification-flow.liability-shifted." + String(payload.liabilityShifted)
            );
            analytics.sendEvent(
              self2._createPromise,
              "three-d-secure.verification-flow.liability-shift-possible." + String(payload.liabilityShiftPossible)
            );
            return payload;
          });
        };
        BaseFramework.prototype._handleLookupResponse = function(lookupResponse, options) {
          var challengeShouldBePresented = Boolean(
            lookupResponse.lookup && lookupResponse.lookup.acsUrl
          );
          var details;
          analytics.sendEvent(
            this._createPromise,
            "three-d-secure.verification-flow.challenge-presented." + String(challengeShouldBePresented)
          );
          if (challengeShouldBePresented) {
            this._presentChallenge(lookupResponse, options);
          } else {
            details = this._formatAuthResponse(
              lookupResponse.paymentMethod,
              lookupResponse.threeDSecureInfo
            );
            details.verificationDetails = lookupResponse.threeDSecureInfo;
            this._verifyCardPromisePlus.resolve(details);
          }
        };
        BaseFramework.prototype._onLookupComplete = function(response) {
          this._lookupPaymentMethod = response.paymentMethod;
          this._verifyCardPromisePlus = new ExtendedPromise();
          return Promise.resolve(response);
        };
        BaseFramework.prototype._formatAuthResponse = function(paymentMethod, threeDSecureInfo) {
          return {
            nonce: paymentMethod.nonce,
            type: paymentMethod.type,
            binData: paymentMethod.binData,
            details: paymentMethod.details,
            description: paymentMethod.description && paymentMethod.description.replace(/\+/g, " "),
            liabilityShifted: threeDSecureInfo && threeDSecureInfo.liabilityShifted,
            liabilityShiftPossible: threeDSecureInfo && threeDSecureInfo.liabilityShiftPossible,
            threeDSecureInfo: paymentMethod.threeDSecureInfo
          };
        };
        BaseFramework.prototype._formatVerifyCardOptions = function(options) {
          return assign({}, options);
        };
        BaseFramework.prototype._formatLookupData = function(options) {
          var data = {
            amount: options.amount
          };
          if (options.collectDeviceData === true) {
            data.browserColorDepth = window.screen.colorDepth;
            data.browserJavaEnabled = window.navigator.javaEnabled();
            data.browserJavascriptEnabled = true;
            data.browserLanguage = window.navigator.language;
            data.browserScreenHeight = window.screen.height;
            data.browserScreenWidth = window.screen.width;
            data.browserTimeZone = (/* @__PURE__ */ new Date()).getTimezoneOffset();
            data.deviceChannel = "Browser";
          }
          return Promise.resolve(data);
        };
        BaseFramework.prototype._handleV1AuthResponse = function(data) {
          var authResponse = JSON.parse(data.auth_response);
          if (authResponse.success) {
            this._verifyCardPromisePlus.resolve(
              this._formatAuthResponse(
                authResponse.paymentMethod,
                authResponse.threeDSecureInfo
              )
            );
          } else if (authResponse.threeDSecureInfo && authResponse.threeDSecureInfo.liabilityShiftPossible) {
            this._verifyCardPromisePlus.resolve(
              this._formatAuthResponse(
                this._lookupPaymentMethod,
                authResponse.threeDSecureInfo
              )
            );
          } else {
            this._verifyCardPromisePlus.reject(
              new BraintreeError({
                type: BraintreeError.types.UNKNOWN,
                code: "UNKNOWN_AUTH_RESPONSE",
                message: authResponse.error.message
              })
            );
          }
        };
        BaseFramework.prototype.cancelVerifyCard = function() {
          var response, threeDSecureInfo;
          this._verifyCardInProgress = false;
          if (!this._lookupPaymentMethod) {
            return Promise.reject(
              new BraintreeError(errors.THREEDS_NO_VERIFICATION_PAYLOAD)
            );
          }
          threeDSecureInfo = this._lookupPaymentMethod.threeDSecureInfo;
          response = assign({}, this._lookupPaymentMethod, {
            liabilityShiftPossible: threeDSecureInfo && threeDSecureInfo.liabilityShiftPossible,
            liabilityShifted: threeDSecureInfo && threeDSecureInfo.liabilityShifted,
            verificationDetails: threeDSecureInfo && threeDSecureInfo.verificationDetails
          });
          return Promise.resolve(response);
        };
        BaseFramework.prototype._setupV1Bus = function(options) {
          var clientConfiguration = this._client.getConfiguration();
          var parentURL = window.location.href.split("#")[0];
          var lookupResponse = options.lookupResponse;
          var channel = uuid();
          var bus = new Bus({
            channel,
            verifyDomain: isVerifiedDomain
          });
          var authenticationCompleteBaseUrl = this._assetsUrl + "/html/three-d-secure-authentication-complete-frame.html?channel=" + encodeURIComponent(channel) + "&";
          bus.on(BUS_CONFIGURATION_REQUEST_EVENT, function(reply) {
            reply({
              clientConfiguration,
              nonce: options.nonce,
              acsUrl: lookupResponse.acsUrl,
              pareq: lookupResponse.pareq,
              termUrl: lookupResponse.termUrl + "&three_d_secure_version=" + VERSION + "&authentication_complete_base_url=" + encodeURIComponent(authenticationCompleteBaseUrl),
              md: lookupResponse.md,
              parentUrl: parentURL
            });
          });
          bus.on(events.AUTHENTICATION_COMPLETE, options.handleAuthResponse);
          return bus;
        };
        BaseFramework.prototype._setupV1Iframe = function(options) {
          var url = this._assetsUrl + "/html/three-d-secure-bank-frame" + useMin(this._isDebug) + ".html?showLoader=" + options.showLoader;
          var bankIframe = iFramer({
            src: url,
            height: IFRAME_HEIGHT,
            width: IFRAME_WIDTH,
            name: constants.LANDING_FRAME_NAME + "_" + this._v1Bus.channel,
            title: "3D Secure Authorization Frame"
          });
          return bankIframe;
        };
        BaseFramework.prototype._setupV1Elements = function(options) {
          this._v1Bus = this._setupV1Bus(options);
          this._v1Iframe = this._setupV1Iframe(options);
        };
        BaseFramework.prototype._teardownV1Elements = function() {
          if (this._v1Bus) {
            this._v1Bus.teardown();
            this._v1Bus = null;
          }
          if (this._v1Iframe && this._v1Iframe.parentNode) {
            this._v1Iframe.parentNode.removeChild(this._v1Iframe);
            this._v1Iframe = null;
          }
          if (this._onV1Keyup) {
            document.removeEventListener("keyup", this._onV1Keyup);
            this._onV1Keyup = null;
          }
        };
        BaseFramework.prototype.teardown = function() {
          analytics.sendEvent(this._createPromise, "three-d-secure.teardown-completed");
          this._teardownV1Elements();
          return Promise.resolve();
        };
        module3.exports = BaseFramework;
      }, { "../../../lib/analytics": 85, "../../../lib/assign": 87, "../../../lib/braintree-error": 90, "../../../lib/constants": 91, "../../../lib/is-verified-domain": 118, "../../../lib/use-min": 125, "../../shared/constants": 140, "../../shared/errors": 141, "../../shared/events": 142, "@braintree/event-emitter": 36, "@braintree/extended-promise": 37, "@braintree/iframer": 38, "@braintree/uuid": 42, "framebus": 166 }], 132: [function(require2, module3, exports3) {
        "use strict";
        var SongbirdFramework = require2("./songbird");
        function Bootstrap3ModalFramework(options) {
          SongbirdFramework.call(this, options);
        }
        Bootstrap3ModalFramework.prototype = Object.create(
          SongbirdFramework.prototype,
          {
            constructor: SongbirdFramework
          }
        );
        Bootstrap3ModalFramework.prototype._createV1IframeModalElement = function(iframe) {
          var modal = document.createElement("div");
          modal.innerHTML = '<div class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="CCAFrameModal-label" aria-hidden="true" style="display: block;"><div class="modal-dialog" style="width:440px;z-index:999999;"><div class="modal-content"><div class="modal-body" data-braintree-v1-fallback-iframe-container><button type="button" data-braintree-v1-fallback-close-button class="close" data-dismiss="modal" aria-hidden="true">×</button></div></div></div><div data-braintree-v1-fallback-backdrop style="position: fixed;cursor: pointer;z-index: 999998;top: 0;left: 0;width: 100%;height: 100%;"></div></div>';
          modal.querySelector("[data-braintree-v1-fallback-iframe-container]").appendChild(iframe);
          return modal;
        };
        Bootstrap3ModalFramework.prototype._createCardinalConfigurationOptions = function(setupOptions) {
          var options = SongbirdFramework.prototype._createCardinalConfigurationOptions.call(
            this,
            setupOptions
          );
          options.payment.framework = "bootstrap3";
          return options;
        };
        module3.exports = Bootstrap3ModalFramework;
      }, { "./songbird": 137 }], 133: [function(require2, module3, exports3) {
        "use strict";
        var SongbirdFramework = require2("./songbird");
        function CardinalModalFramework(options) {
          SongbirdFramework.call(this, options);
        }
        CardinalModalFramework.prototype = Object.create(SongbirdFramework.prototype, {
          constructor: SongbirdFramework
        });
        CardinalModalFramework.prototype._createV1IframeModalElement = function(iframe) {
          var modal = document.createElement("div");
          var addCloseButton = Boolean(
            this._createOptions && this._createOptions.cardinalSDKConfig && this._createOptions.cardinalSDKConfig.payment && this._createOptions.cardinalSDKConfig.payment.displayExitButton
          );
          modal.innerHTML = `<div style="position: fixed;z-index: 999999;top: 50%;left: 50%;padding: 24px 20px;transform: translate(-50%,-50%);border-radius: 2px;background: #fff;max-width: 100%;overflow: auto;"><div><button data-braintree-v1-fallback-close-button style="font-family: Helvetica,Arial,sans-serif;font-size: 25px;line-height: 12px;position: absolute;top: 2px;right: 0px;cursor: pointer;color: #999;border: 0;outline: none;background: none;" onMouseOver="this.style.color='#000'" onMouseOut="this.style.color='#999'">×</button></div><div data-braintree-v1-fallback-iframe-container style="height: 400px;"></div></div><div data-braintree-v1-fallback-backdrop style="position: fixed;z-index: 999998;cursor: pointer;top: 0;left: 0;width: 100%;height: 100%;transition: opacity 1ms ease;background: rgba(0,0,0,.6);"></div>`;
          if (!addCloseButton) {
            modal.querySelector(
              "[data-braintree-v1-fallback-close-button]"
            ).style.display = "none";
          }
          modal.querySelector("[data-braintree-v1-fallback-iframe-container]").appendChild(iframe);
          return modal;
        };
        module3.exports = CardinalModalFramework;
      }, { "./songbird": 137 }], 134: [function(require2, module3, exports3) {
        "use strict";
        var LegacyFramework = require2("./legacy");
        var CardinalModalFramework = require2("./cardinal-modal");
        var Bootstrap3ModalFramework = require2("./bootstrap3-modal");
        var InlineIframeFramework = require2("./inline-iframe");
        module3.exports = {
          legacy: LegacyFramework,
          "cardinal-modal": CardinalModalFramework,
          "bootstrap3-modal": Bootstrap3ModalFramework,
          "inline-iframe": InlineIframeFramework
        };
      }, { "./bootstrap3-modal": 132, "./cardinal-modal": 133, "./inline-iframe": 135, "./legacy": 136 }], 135: [function(require2, module3, exports3) {
        "use strict";
        var SongbirdFramework = require2("./songbird");
        var BraintreeError = require2("../../../lib/braintree-error");
        var errors = require2("../../shared/errors");
        var enumerate = require2("../../../lib/enumerate");
        function InlineIframeFramework(options) {
          SongbirdFramework.call(this, options);
        }
        InlineIframeFramework.prototype = Object.create(SongbirdFramework.prototype, {
          constructor: SongbirdFramework
        });
        InlineIframeFramework.events = enumerate(
          ["AUTHENTICATION_IFRAME_AVAILABLE"],
          "inline-iframe-framework:"
        );
        InlineIframeFramework.prototype.setUpEventListeners = function(reply) {
          SongbirdFramework.prototype.setUpEventListeners.call(this, reply);
          this.on(
            InlineIframeFramework.events.AUTHENTICATION_IFRAME_AVAILABLE,
            function(payload, next) {
              reply("authentication-iframe-available", payload, next);
            }
          );
        };
        InlineIframeFramework.prototype._createCardinalConfigurationOptions = function(setupOptions) {
          var options = SongbirdFramework.prototype._createCardinalConfigurationOptions.call(
            this,
            setupOptions
          );
          options.payment.framework = "inline";
          return options;
        };
        InlineIframeFramework.prototype._addV1IframeToPage = function() {
          this._emit(
            InlineIframeFramework.events.AUTHENTICATION_IFRAME_AVAILABLE,
            {
              element: this._v1Modal
            },
            function() {
            }
          );
        };
        InlineIframeFramework.prototype._setupFrameworkSpecificListeners = function() {
          this.setCardinalListener("ui.inline.setup", this._onInlineSetup.bind(this));
        };
        InlineIframeFramework.prototype._onInlineSetup = function(htmlTemplate, details, resolve, reject) {
          var container, hasError;
          if (!htmlTemplate || !details) {
            hasError = true;
          } else if (details.paymentType !== "CCA") {
            hasError = true;
          } else if (!(details.data.mode === "suppress" || details.data.mode === "static")) {
            hasError = true;
          }
          if (hasError) {
            reject(new BraintreeError(errors.THREEDS_INLINE_IFRAME_DETAILS_INCORRECT));
            return;
          }
          container = document.createElement("div");
          container.innerHTML = htmlTemplate;
          if (details.data.mode === "suppress") {
            container.style.display = "none";
            document.body.appendChild(container);
            resolve();
          } else if (details.data.mode === "static") {
            this._emit(
              InlineIframeFramework.events.AUTHENTICATION_IFRAME_AVAILABLE,
              {
                element: container
              },
              function() {
                resolve();
              }
            );
          }
        };
        module3.exports = InlineIframeFramework;
      }, { "../../../lib/braintree-error": 90, "../../../lib/enumerate": 99, "../../shared/errors": 141, "./songbird": 137 }], 136: [function(require2, module3, exports3) {
        "use strict";
        var BaseFramework = require2("./base");
        var deferred = require2("../../../lib/deferred");
        function LegacyFramework(options) {
          BaseFramework.call(this, options);
        }
        LegacyFramework.prototype = Object.create(BaseFramework.prototype, {
          constructor: LegacyFramework
        });
        LegacyFramework.prototype.setUpEventListeners = function() {
        };
        LegacyFramework.prototype.transformV1CustomerBillingAddress = function(customer) {
          customer.billingAddress.line1 = customer.billingAddress.streetAddress;
          customer.billingAddress.line2 = customer.billingAddress.extendedAddress;
          customer.billingAddress.city = customer.billingAddress.locality;
          customer.billingAddress.state = customer.billingAddress.region;
          customer.billingAddress.countryCode = customer.billingAddress.countryCodeAlpha2;
          delete customer.billingAddress.streetAddress;
          delete customer.billingAddress.extendedAddress;
          delete customer.billingAddress.locality;
          delete customer.billingAddress.region;
          delete customer.billingAddress.countryCodeAlpha2;
          return customer;
        };
        LegacyFramework.prototype._createIframe = function(options) {
          var self2 = this;
          this._setupV1Elements({
            nonce: options.nonce,
            lookupResponse: options.lookupResponse,
            showLoader: options.showLoader,
            handleAuthResponse: function(data) {
              self2._handleAuthResponse(data, options);
            }
          });
          return this._v1Iframe;
        };
        LegacyFramework.prototype._handleAuthResponse = function(data, options) {
          this._v1Bus.teardown();
          options.removeFrame();
          deferred(
            (function() {
              this._handleV1AuthResponse(data);
            }).bind(this)
          )();
        };
        LegacyFramework.prototype._checkForFrameworkSpecificVerifyCardErrors = function(options) {
          var errorOption;
          if (typeof options.addFrame !== "function") {
            errorOption = "an addFrame function";
          } else if (typeof options.removeFrame !== "function") {
            errorOption = "a removeFrame function";
          }
          return errorOption;
        };
        LegacyFramework.prototype._formatVerifyCardOptions = function(options) {
          var modifiedOptions = BaseFramework.prototype._formatVerifyCardOptions.call(
            this,
            options
          );
          modifiedOptions.addFrame = deferred(options.addFrame);
          modifiedOptions.removeFrame = deferred(options.removeFrame);
          modifiedOptions.showLoader = options.showLoader !== false;
          return modifiedOptions;
        };
        LegacyFramework.prototype._formatLookupData = function(options) {
          var self2 = this;
          return BaseFramework.prototype._formatLookupData.call(this, options).then(function(data) {
            if (options.customer && options.customer.billingAddress) {
              data.customer = self2.transformV1CustomerBillingAddress(
                options.customer
              );
            }
            return data;
          });
        };
        LegacyFramework.prototype._presentChallenge = function(lookupResponse, options) {
          options.addFrame(
            null,
            this._createIframe({
              showLoader: options.showLoader,
              lookupResponse: lookupResponse.lookup,
              nonce: lookupResponse.paymentMethod.nonce,
              removeFrame: options.removeFrame
            })
          );
        };
        module3.exports = LegacyFramework;
      }, { "../../../lib/deferred": 97, "./base": 131 }], 137: [function(require2, module3, exports3) {
        "use strict";
        var BaseFramework = require2("./base");
        var assign = require2("../../../lib/assign").assign;
        var deferred = require2("../../../lib/deferred");
        var BraintreeError = require2("../../../lib/braintree-error");
        var convertToBraintreeError = require2("../../../lib/convert-to-braintree-error");
        var analytics = require2("../../../lib/analytics");
        var assets = require2("../../../lib/assets");
        var errors = require2("../../shared/errors");
        var enumerate = require2("../../../lib/enumerate");
        var constants = require2("../../shared/constants");
        var ExtendedPromise = require2("@braintree/extended-promise");
        var INTEGRATION_TIMEOUT_MS = require2("../../../lib/constants").INTEGRATION_TIMEOUT_MS;
        var PLATFORM = require2("../../../lib/constants").PLATFORM;
        var VERSION = "3.103.0";
        var CUSTOMER_CANCELED_SONGBIRD_MODAL = "01";
        var SONGBIRD_UI_EVENTS = [
          "ui.close",
          "ui.render",
          // TODO these events are not documented in the
          // client reference because so far we have
          // not been able to trigger them in our testing
          "ui.renderHidden",
          "ui.loading.close",
          "ui.loading.render"
        ];
        var SCA_EXEMPTION_TYPES = ["low_value", "transaction_risk_analysis"];
        ExtendedPromise.suppressUnhandledPromiseMessage = true;
        function SongbirdFramework(options) {
          BaseFramework.call(this, options);
          this._songbirdInitFailed = false;
          this._clientMetadata = {
            requestedThreeDSecureVersion: "2",
            sdkVersion: PLATFORM + "/" + VERSION
          };
          this.originalSetupOptions = options;
          this._getDfReferenceIdPromisePlus = new ExtendedPromise();
          this.setupSongbird(options);
          this._cardinalEvents = [];
        }
        SongbirdFramework.prototype = Object.create(BaseFramework.prototype, {
          constructor: SongbirdFramework
        });
        SongbirdFramework.events = enumerate(
          [
            "LOOKUP_COMPLETE",
            "CUSTOMER_CANCELED",
            "UI.CLOSE",
            "UI.RENDER",
            "UI.RENDERHIDDEN",
            "UI.LOADING.CLOSE",
            "UI.LOADING.RENDER"
          ],
          "songbird-framework:"
        );
        SongbirdFramework.prototype.setUpEventListeners = function(reply) {
          this.on(SongbirdFramework.events.LOOKUP_COMPLETE, function(data, next) {
            reply("lookup-complete", data, next);
          });
          this.on(SongbirdFramework.events.CUSTOMER_CANCELED, function() {
            reply("customer-canceled");
          });
          this.on(SongbirdFramework.events["UI.CLOSE"], function() {
            reply("authentication-modal-close");
          });
          this.on(SongbirdFramework.events["UI.RENDER"], function() {
            reply("authentication-modal-render");
          });
          this.on(SongbirdFramework.events["UI.RENDERHIDDEN"], function() {
            reply("authentication-modal-render-hidden");
          });
          this.on(SongbirdFramework.events["UI.LOADING.CLOSE"], function() {
            reply("authentication-modal-loader-close");
          });
          this.on(SongbirdFramework.events["UI.LOADING.RENDER"], function() {
            reply("authentication-modal-loader-render");
          });
        };
        SongbirdFramework.prototype.prepareLookup = function(options) {
          var data = assign({}, options);
          var self2 = this;
          return this.getDfReferenceId().then(function(id) {
            data.dfReferenceId = id;
          }).then(function() {
            return self2._triggerCardinalBinProcess(options.bin);
          }).catch(function() {
          }).then(function() {
            return self2._waitForClient();
          }).then(function() {
            data.clientMetadata = self2._clientMetadata;
            data.authorizationFingerprint = self2._client.getConfiguration().authorizationFingerprint;
            data.braintreeLibraryVersion = "braintree/web/" + VERSION;
            return data;
          });
        };
        SongbirdFramework.prototype.initializeChallengeWithLookupResponse = function(lookupResponse, options) {
          return this.setupSongbird().then(
            (function() {
              return BaseFramework.prototype.initializeChallengeWithLookupResponse.call(
                this,
                lookupResponse,
                options
              );
            }).bind(this)
          );
        };
        SongbirdFramework.prototype.handleSongbirdError = function(errorType) {
          this._songbirdInitFailed = true;
          this._removeSongbirdListeners();
          analytics.sendEvent(
            this._createPromise,
            "three-d-secure.cardinal-sdk.songbird-error." + errorType
          );
          if (this._songbirdPromise) {
            this._songbirdPromise.resolve();
          }
        };
        SongbirdFramework.prototype._triggerCardinalBinProcess = function(bin) {
          var self2 = this;
          var issuerStartTime = Date.now();
          return window.Cardinal.trigger("bin.process", bin).then(function(binResults) {
            self2._clientMetadata.issuerDeviceDataCollectionTimeElapsed = Date.now() - issuerStartTime;
            self2._clientMetadata.issuerDeviceDataCollectionResult = binResults && binResults.Status;
          });
        };
        SongbirdFramework.prototype.transformBillingAddress = function(additionalInformation, billingAddress) {
          if (billingAddress) {
            extractAddressData(billingAddress, additionalInformation, "billing");
            additionalInformation.billingPhoneNumber = billingAddress.phoneNumber;
            additionalInformation.billingGivenName = billingAddress.givenName;
            additionalInformation.billingSurname = billingAddress.surname;
          }
          return additionalInformation;
        };
        SongbirdFramework.prototype.transformShippingAddress = function(additionalInformation) {
          var shippingAddress = additionalInformation.shippingAddress;
          if (shippingAddress) {
            extractAddressData(shippingAddress, additionalInformation, "shipping");
            delete additionalInformation.shippingAddress;
          }
          return additionalInformation;
        };
        SongbirdFramework.prototype._createV1IframeModalElement = function(iframe) {
          var modal = document.createElement("div");
          modal.innerHTML = '<div data-braintree-v1-fallback-iframe-container="true" style="height: 400px;"></div>';
          modal.querySelector('[data-braintree-v1-fallback-iframe-container="true"]').appendChild(iframe);
          return modal;
        };
        SongbirdFramework.prototype._createV1IframeModal = function(iframe) {
          var modal = this._createV1IframeModalElement(iframe);
          var btn = modal.querySelector("[data-braintree-v1-fallback-close-button]");
          var backdrop = modal.querySelector("[data-braintree-v1-fallback-backdrop]");
          var self2 = this;
          function closeHandler() {
            modal.parentNode.removeChild(modal);
            self2.cancelVerifyCard(errors.THREEDS_CARDINAL_SDK_CANCELED);
            document.removeEventListener("keyup", self2._onV1Keyup);
            self2._onV1Keyup = null;
          }
          this._onV1Keyup = function(e) {
            if (e.key !== "Escape") {
              return;
            }
            if (!modal.parentNode) {
              return;
            }
            closeHandler();
          };
          if (btn) {
            btn.addEventListener("click", closeHandler);
          }
          if (backdrop) {
            backdrop.addEventListener("click", closeHandler);
          }
          document.addEventListener("keyup", this._onV1Keyup);
          return modal;
        };
        SongbirdFramework.prototype._addV1IframeToPage = function() {
          document.body.appendChild(this._v1Modal);
        };
        SongbirdFramework.prototype.setupSongbird = function(setupOptions) {
          var self2 = this;
          var startTime = Date.now();
          if (this._songbirdPromise) {
            return this._songbirdPromise;
          }
          setupOptions = setupOptions || {};
          this._songbirdPromise = new ExtendedPromise();
          this._v2SetupFailureReason = "reason-unknown";
          self2._loadCardinalScript(setupOptions).then(function() {
            if (!window.Cardinal) {
              self2._v2SetupFailureReason = "cardinal-global-unavailable";
              return Promise.reject(
                new BraintreeError(errors.THREEDS_CARDINAL_SDK_SETUP_FAILED)
              );
            }
            return self2._configureCardinalSdk({
              setupOptions,
              setupStartTime: startTime
            });
          }).catch(function(err) {
            var error = convertToBraintreeError(err, {
              type: errors.THREEDS_CARDINAL_SDK_SETUP_FAILED.type,
              code: errors.THREEDS_CARDINAL_SDK_SETUP_FAILED.code,
              message: errors.THREEDS_CARDINAL_SDK_SETUP_FAILED.message
            });
            self2._getDfReferenceIdPromisePlus.reject(error);
            window.clearTimeout(self2._songbirdSetupTimeoutReference);
            analytics.sendEvent(
              self2._client,
              "three-d-secure.cardinal-sdk.init.setup-failed"
            );
            self2.handleSongbirdError(
              "cardinal-sdk-setup-failed." + self2._v2SetupFailureReason
            );
          });
          return this._songbirdPromise;
        };
        SongbirdFramework.prototype._configureCardinalSdk = function(config) {
          var self2 = this;
          return this._waitForClient().then(function() {
            var threeDSConfig = self2._client.getConfiguration().gatewayConfiguration.threeDSecure;
            return threeDSConfig;
          }).then(function(threeDSConfig) {
            var jwt = threeDSConfig.cardinalAuthenticationJWT;
            var setupOptions = config.setupOptions;
            var setupStartTime = config.setupStartTime;
            var cardinalConfiguration = self2._createCardinalConfigurationOptions(setupOptions);
            SONGBIRD_UI_EVENTS.forEach(function(eventName) {
              self2.setCardinalListener(eventName, function() {
                self2._emit(SongbirdFramework.events[eventName.toUpperCase()]);
              });
            });
            self2.setCardinalListener(
              "payments.setupComplete",
              self2._createPaymentsSetupCompleteCallback()
            );
            self2._setupFrameworkSpecificListeners();
            window.Cardinal.configure(cardinalConfiguration);
            window.Cardinal.setup("init", {
              jwt
            });
            self2._clientMetadata.cardinalDeviceDataCollectionTimeElapsed = Date.now() - setupStartTime;
            self2.setCardinalListener(
              "payments.validated",
              self2._createPaymentsValidatedCallback()
            );
          }).catch(function(err) {
            self2._v2SetupFailureReason = "cardinal-configuration-threw-error";
            return Promise.reject(err);
          });
        };
        SongbirdFramework.prototype.setCardinalListener = function(eventName, cb) {
          this._cardinalEvents.push(eventName);
          window.Cardinal.on(eventName, cb);
        };
        SongbirdFramework.prototype._setupFrameworkSpecificListeners = function() {
        };
        SongbirdFramework.prototype._createCardinalConfigurationOptions = function(setupOptions) {
          var cardinalConfiguration = setupOptions.cardinalSDKConfig || {};
          var paymentSettings = cardinalConfiguration.payment || {};
          if (!cardinalConfiguration.logging && setupOptions.loggingEnabled) {
            cardinalConfiguration.logging = {
              level: "verbose"
            };
          }
          cardinalConfiguration.payment = {};
          if (paymentSettings.hasOwnProperty("displayLoading")) {
            cardinalConfiguration.payment.displayLoading = paymentSettings.displayLoading;
          }
          if (paymentSettings.hasOwnProperty("displayExitButton")) {
            cardinalConfiguration.payment.displayExitButton = paymentSettings.displayExitButton;
          }
          return cardinalConfiguration;
        };
        SongbirdFramework.prototype._loadCardinalScript = function(setupOptions) {
          var self2 = this;
          return this._waitForClient().then(function() {
            var scriptSource = self2._getCardinalScriptSource();
            self2._songbirdSetupTimeoutReference = window.setTimeout(function() {
              analytics.sendEvent(
                self2._client,
                "three-d-secure.cardinal-sdk.init.setup-timeout"
              );
              self2.handleSongbirdError("cardinal-sdk-setup-timeout");
            }, setupOptions.timeout || INTEGRATION_TIMEOUT_MS);
            return assets.loadScript({ src: scriptSource });
          }).catch(function(err) {
            self2._v2SetupFailureReason = "songbird-js-failed-to-load";
            return Promise.reject(
              convertToBraintreeError(
                err,
                errors.THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED
              )
            );
          });
        };
        SongbirdFramework.prototype._getCardinalScriptSource = function() {
          var gatewayConfig = this._client.getConfiguration().gatewayConfiguration;
          if (gatewayConfig && gatewayConfig.environment === "production") {
            return constants.CARDINAL_SCRIPT_SOURCE.production;
          }
          return constants.CARDINAL_SCRIPT_SOURCE.sandbox;
        };
        SongbirdFramework.prototype._createPaymentsSetupCompleteCallback = function() {
          var self2 = this;
          return function(data) {
            self2._getDfReferenceIdPromisePlus.resolve(data.sessionId);
            window.clearTimeout(self2._songbirdSetupTimeoutReference);
            analytics.sendEvent(
              self2._createPromise,
              "three-d-secure.cardinal-sdk.init.setup-completed"
            );
            self2._songbirdPromise.resolve();
          };
        };
        SongbirdFramework.prototype.getDfReferenceId = function() {
          return this._getDfReferenceIdPromisePlus;
        };
        SongbirdFramework.prototype._performJWTValidation = function(rawCardinalSDKVerificationData, jwt) {
          var self2 = this;
          var nonce = this._lookupPaymentMethod.nonce;
          var url = "payment_methods/" + nonce + "/three_d_secure/authenticate_from_jwt";
          var cancelCode = rawCardinalSDKVerificationData && rawCardinalSDKVerificationData.Payment && rawCardinalSDKVerificationData.Payment.ExtendedData && rawCardinalSDKVerificationData.Payment.ExtendedData.ChallengeCancel;
          if (cancelCode) {
            analytics.sendEvent(
              this._createPromise,
              "three-d-secure.verification-flow.cardinal-sdk.cancel-code." + cancelCode
            );
            if (cancelCode === CUSTOMER_CANCELED_SONGBIRD_MODAL) {
              this._emit(SongbirdFramework.events.CUSTOMER_CANCELED);
            }
          }
          analytics.sendEvent(
            this._createPromise,
            "three-d-secure.verification-flow.upgrade-payment-method.started"
          );
          return this._waitForClient().then(function() {
            return self2._client.request({
              method: "post",
              endpoint: url,
              data: {
                jwt,
                paymentMethodNonce: nonce
              }
            });
          }).then(function(response) {
            var paymentMethod = response.paymentMethod || self2._lookupPaymentMethod;
            var formattedResponse = self2._formatAuthResponse(
              paymentMethod,
              response.threeDSecureInfo
            );
            formattedResponse.rawCardinalSDKVerificationData = rawCardinalSDKVerificationData;
            analytics.sendEvent(
              self2._client,
              "three-d-secure.verification-flow.upgrade-payment-method.succeeded"
            );
            return Promise.resolve(formattedResponse);
          }).catch(function(err) {
            var error = new BraintreeError({
              type: errors.THREEDS_JWT_AUTHENTICATION_FAILED.type,
              code: errors.THREEDS_JWT_AUTHENTICATION_FAILED.code,
              message: errors.THREEDS_JWT_AUTHENTICATION_FAILED.message,
              details: {
                originalError: err
              }
            });
            analytics.sendEvent(
              self2._client,
              "three-d-secure.verification-flow.upgrade-payment-method.errored"
            );
            return Promise.reject(error);
          });
        };
        SongbirdFramework.prototype._createPaymentsValidatedCallback = function() {
          var self2 = this;
          return function(data, validatedJwt) {
            var formattedError;
            analytics.sendEvent(
              self2._createPromise,
              "three-d-secure.verification-flow.cardinal-sdk.action-code." + data.ActionCode.toLowerCase()
            );
            if (!self2._verifyCardPromisePlus) {
              self2.handleSongbirdError(
                "cardinal-sdk-setup-error.number-" + data.ErrorNumber
              );
              return;
            }
            switch (data.ActionCode) {
              case "SUCCESS":
              case "NOACTION":
              case "FAILURE":
                self2._performJWTValidation(data, validatedJwt).then(function(result) {
                  self2._verifyCardPromisePlus.resolve(result);
                }).catch(function(err) {
                  self2._verifyCardPromisePlus.reject(err);
                });
                break;
              case "ERROR":
                analytics.sendEvent(
                  self2._createPromise,
                  "three-d-secure.verification-flow.cardinal-sdk-error." + data.ErrorNumber
                );
                switch (data.ErrorNumber) {
                  case 10001:
                  case 10002:
                    formattedError = new BraintreeError(
                      errors.THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT
                    );
                    break;
                  case 10003:
                  case 10007:
                  case 10009:
                    formattedError = new BraintreeError(
                      errors.THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT
                    );
                    break;
                  case 10005:
                  case 10006:
                    formattedError = new BraintreeError(
                      errors.THREEDS_CARDINAL_SDK_BAD_CONFIG
                    );
                    break;
                  case 10008:
                  case 10010:
                    formattedError = new BraintreeError(
                      errors.THREEDS_CARDINAL_SDK_BAD_JWT
                    );
                    break;
                  case 10011:
                    analytics.sendEvent(
                      self2._createPromise,
                      "three-d-secure.verification-flow.canceled"
                    );
                    formattedError = new BraintreeError(
                      errors.THREEDS_CARDINAL_SDK_CANCELED
                    );
                    break;
                  default:
                    formattedError = new BraintreeError(
                      errors.THREEDS_CARDINAL_SDK_ERROR
                    );
                }
                formattedError.details = {
                  originalError: {
                    code: data.ErrorNumber,
                    description: data.ErrorDescription
                  }
                };
                self2._verifyCardPromisePlus.reject(formattedError);
                break;
              default:
            }
          };
        };
        SongbirdFramework.prototype._checkForVerifyCardError = function(options, privateOptions) {
          if (!options.bin) {
            return new BraintreeError({
              type: errors.THREEDS_MISSING_VERIFY_CARD_OPTION.type,
              code: errors.THREEDS_MISSING_VERIFY_CARD_OPTION.code,
              message: "verifyCard options must include a BIN."
            });
          }
          return BaseFramework.prototype._checkForVerifyCardError.call(
            this,
            options,
            privateOptions
          );
        };
        SongbirdFramework.prototype._checkForFrameworkSpecificVerifyCardErrors = function(options, privateOptions) {
          var errorOption;
          if (typeof options.onLookupComplete !== "function" && !privateOptions.ignoreOnLookupCompleteRequirement) {
            errorOption = "an onLookupComplete function";
          }
          return errorOption;
        };
        SongbirdFramework.prototype._formatVerifyCardOptions = function(options) {
          var modifiedOptions = BaseFramework.prototype._formatVerifyCardOptions.call(
            this,
            options
          );
          var additionalInformation = modifiedOptions.additionalInformation || {};
          additionalInformation = this.transformBillingAddress(
            additionalInformation,
            options.billingAddress
          );
          additionalInformation = this.transformShippingAddress(additionalInformation);
          if (options.onLookupComplete) {
            modifiedOptions.onLookupComplete = deferred(options.onLookupComplete);
          }
          if (options.email) {
            additionalInformation.email = options.email;
          }
          if (options.mobilePhoneNumber) {
            additionalInformation.mobilePhoneNumber = options.mobilePhoneNumber;
          }
          modifiedOptions.additionalInformation = additionalInformation;
          return modifiedOptions;
        };
        SongbirdFramework.prototype._onLookupComplete = function(lookupResponse, options) {
          var self2 = this;
          return BaseFramework.prototype._onLookupComplete.call(this, lookupResponse).then(function(response) {
            return new Promise(function(resolve, reject) {
              response.requiresUserAuthentication = Boolean(
                response.lookup && response.lookup.acsUrl
              );
              function next() {
                resolve(response);
              }
              self2._verifyCardPromisePlus.catch(reject);
              if (options.onLookupComplete) {
                options.onLookupComplete(response, next);
              } else {
                self2._emit(SongbirdFramework.events.LOOKUP_COMPLETE, response, next);
              }
            });
          });
        };
        SongbirdFramework.prototype._presentChallenge = function(lookupResponse) {
          if (this._songbirdInitFailed || !lookupResponse.lookup.transactionId) {
            return;
          }
          window.Cardinal.continue(
            "cca",
            {
              AcsUrl: lookupResponse.lookup.acsUrl,
              Payload: lookupResponse.lookup.pareq
            },
            {
              OrderDetails: { TransactionId: lookupResponse.lookup.transactionId }
            }
          );
        };
        SongbirdFramework.prototype._formatLookupData = function(options) {
          var self2 = this;
          return BaseFramework.prototype._formatLookupData.call(this, options).then(function(data) {
            data.additionalInfo = options.additionalInformation;
            if (options.accountType) {
              data.accountType = options.accountType;
            }
            if (options.challengeRequested) {
              data.challengeRequested = options.challengeRequested;
            }
            if (options.requestedExemptionType) {
              if (!SCA_EXEMPTION_TYPES.includes(options.requestedExemptionType)) {
                throw new BraintreeError({
                  code: errors.THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID.code,
                  type: errors.THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID.type,
                  message: "requestedExemptionType `" + options.requestedExemptionType + "` is not a valid exemption. The accepted values are: `" + SCA_EXEMPTION_TYPES.join("`, `") + "`"
                });
              }
              data.requestedExemptionType = options.requestedExemptionType;
            }
            if (options.customFields) {
              data.customFields = options.customFields;
            }
            if (options.dataOnlyRequested) {
              data.dataOnlyRequested = options.dataOnlyRequested;
            }
            if (options.exemptionRequested) {
              data.exemptionRequested = options.exemptionRequested;
            }
            if (options.requestVisaDAF) {
              data.requestVisaDAF = options.requestVisaDAF;
            }
            if (options.bin) {
              data.bin = options.bin;
            }
            if (options.cardAdd != null) {
              data.cardAdd = options.cardAdd;
            }
            if (options.cardAddChallengeRequested != null) {
              data.cardAdd = options.cardAddChallengeRequested;
            }
            if (options.merchantName) {
              data.merchantName = options.merchantName;
            }
            return self2.prepareLookup(data);
          });
        };
        SongbirdFramework.prototype.cancelVerifyCard = function(verifyCardError) {
          var self2 = this;
          return BaseFramework.prototype.cancelVerifyCard.call(this).then(function(response) {
            if (self2._verifyCardPromisePlus) {
              verifyCardError = verifyCardError || new BraintreeError(errors.THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT);
              self2._verifyCardPromisePlus.reject(verifyCardError);
            }
            return response;
          });
        };
        SongbirdFramework.prototype._removeSongbirdListeners = function() {
          this._cardinalEvents.forEach(function(eventName) {
            window.Cardinal.off(eventName);
          });
          this._cardinalEvents = [];
        };
        SongbirdFramework.prototype.teardown = function() {
          if (window.Cardinal) {
            this._removeSongbirdListeners();
          }
          return BaseFramework.prototype.teardown.call(this);
        };
        SongbirdFramework.prototype._reloadThreeDSecure = function() {
          var self2 = this;
          var startTime = Date.now();
          return self2.teardown().then(function() {
            self2._configureCardinalSdk({
              setupOptions: self2.originalSetupOptions,
              setupStartTime: startTime
            });
          });
        };
        function extractAddressData(source, target, prefix) {
          target[prefix + "Line1"] = source.streetAddress;
          target[prefix + "Line2"] = source.extendedAddress;
          target[prefix + "Line3"] = source.line3;
          target[prefix + "City"] = source.locality;
          target[prefix + "State"] = source.region;
          target[prefix + "PostalCode"] = source.postalCode;
          target[prefix + "CountryCode"] = source.countryCodeAlpha2;
        }
        module3.exports = SongbirdFramework;
      }, { "../../../lib/analytics": 85, "../../../lib/assets": 86, "../../../lib/assign": 87, "../../../lib/braintree-error": 90, "../../../lib/constants": 91, "../../../lib/convert-to-braintree-error": 93, "../../../lib/deferred": 97, "../../../lib/enumerate": 99, "../../shared/constants": 140, "../../shared/errors": 141, "./base": 131, "@braintree/extended-promise": 37 }], 138: [function(require2, module3, exports3) {
        "use strict";
        var wrapPromise = require2("@braintree/wrap-promise");
        var methods = require2("../../lib/methods");
        var convertMethodsToError = require2("../../lib/convert-methods-to-error");
        var EventEmitter = require2("@braintree/event-emitter");
        var FRAMEWORKS = require2("./frameworks");
        function ThreeDSecure(options) {
          var self2 = this;
          var Framework = FRAMEWORKS[options.framework];
          EventEmitter.call(this);
          this._framework = new Framework(options);
          this._framework.setUpEventListeners(function() {
            self2._emit.apply(self2, arguments);
          });
        }
        EventEmitter.createChild(ThreeDSecure);
        ThreeDSecure.prototype.verifyCard = function(options) {
          var privateOptions;
          if (this.hasListener("lookup-complete")) {
            privateOptions = {
              ignoreOnLookupCompleteRequirement: true
            };
          }
          return this._framework.verifyCard(options, privateOptions);
        };
        ThreeDSecure.prototype.initializeChallengeWithLookupResponse = function(lookupResponse) {
          if (typeof lookupResponse === "string") {
            lookupResponse = JSON.parse(lookupResponse);
          }
          return this._framework.initializeChallengeWithLookupResponse(lookupResponse);
        };
        ThreeDSecure.prototype.prepareLookup = function(options) {
          return this._framework.prepareLookup(options).then(function(data) {
            return JSON.stringify(data);
          });
        };
        ThreeDSecure.prototype.cancelVerifyCard = function() {
          return this._framework.cancelVerifyCard();
        };
        ThreeDSecure.prototype.teardown = function() {
          var methodNames = methods(ThreeDSecure.prototype).concat(
            methods(EventEmitter.prototype)
          );
          convertMethodsToError(this, methodNames);
          return this._framework.teardown();
        };
        module3.exports = wrapPromise.wrapPrototype(ThreeDSecure);
      }, { "../../lib/convert-methods-to-error": 92, "../../lib/methods": 120, "./frameworks": 134, "@braintree/event-emitter": 36, "@braintree/wrap-promise": 46 }], 139: [function(require2, module3, exports3) {
        "use strict";
        var ThreeDSecure = require2("./external/three-d-secure");
        var isHTTPS = require2("../lib/is-https").isHTTPS;
        var basicComponentVerification = require2("../lib/basic-component-verification");
        var createDeferredClient = require2("../lib/create-deferred-client");
        var createAssetsUrl = require2("../lib/create-assets-url");
        var BraintreeError = require2("../lib/braintree-error");
        var analytics = require2("../lib/analytics");
        var errors = require2("./shared/errors");
        var VERSION = "3.103.0";
        var wrapPromise = require2("@braintree/wrap-promise");
        function create(options) {
          var name = "3D Secure";
          var framework = getFramework(options);
          return basicComponentVerification.verify({
            name,
            client: options.client,
            authorization: options.authorization
          }).then(function() {
            var assetsUrl = createAssetsUrl.create(options.authorization);
            var createPromise = createDeferredClient.create({
              authorization: options.authorization,
              client: options.client,
              debug: options.debug,
              assetsUrl,
              name
            }).then(function(client) {
              var error, isProduction;
              var config = client.getConfiguration();
              var gwConfig = config.gatewayConfiguration;
              options.client = client;
              if (!gwConfig.threeDSecureEnabled) {
                error = errors.THREEDS_NOT_ENABLED;
              }
              if (config.authorizationType === "TOKENIZATION_KEY") {
                error = errors.THREEDS_CAN_NOT_USE_TOKENIZATION_KEY;
              }
              isProduction = gwConfig.environment === "production";
              if (isProduction && !isHTTPS()) {
                error = errors.THREEDS_HTTPS_REQUIRED;
              }
              if (framework !== "legacy" && !(gwConfig.threeDSecure && gwConfig.threeDSecure.cardinalAuthenticationJWT)) {
                analytics.sendEvent(
                  options.client,
                  "three-d-secure.initialization.failed.missing-cardinalAuthenticationJWT"
                );
                error = errors.THREEDS_NOT_ENABLED_FOR_V2;
              }
              if (error) {
                return Promise.reject(new BraintreeError(error));
              }
              analytics.sendEvent(options.client, "three-d-secure.initialized");
              return client;
            });
            var instance = new ThreeDSecure({
              client: options.client,
              assetsUrl,
              createPromise,
              loggingEnabled: options.loggingEnabled,
              cardinalSDKConfig: options.cardinalSDKConfig,
              framework
            });
            if (options.client) {
              return createPromise.then(function() {
                return instance;
              });
            }
            return instance;
          });
        }
        function getFramework(options) {
          var version = String(options.version || "");
          if (!version || version === "1") {
            throw new BraintreeError({
              code: errors.THREEDS_UNSUPPORTED_VERSION.code,
              type: errors.THREEDS_UNSUPPORTED_VERSION.type,
              message: errors.THREEDS_UNSUPPORTED_VERSION.message
            });
          }
          switch (version) {
            case "2":
            case "2-cardinal-modal":
              return "cardinal-modal";
            case "2-bootstrap3-modal":
              return "bootstrap3-modal";
            case "2-inline-iframe":
              return "inline-iframe";
            default:
              throw new BraintreeError({
                code: errors.THREEDS_UNRECOGNIZED_VERSION.code,
                type: errors.THREEDS_UNRECOGNIZED_VERSION.type,
                message: "Version `" + options.version + "` is not a recognized version. You may need to update the version of your Braintree SDK to support this version."
              });
          }
        }
        module3.exports = {
          create: wrapPromise(create),
          /**
           * @description The current version of the SDK, i.e. `1.43.0`.
           * @type {string}
           */
          VERSION
        };
      }, { "../lib/analytics": 85, "../lib/basic-component-verification": 88, "../lib/braintree-error": 90, "../lib/create-assets-url": 94, "../lib/create-deferred-client": 96, "../lib/is-https": 117, "./external/three-d-secure": 138, "./shared/errors": 141, "@braintree/wrap-promise": 46 }], 140: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          LANDING_FRAME_NAME: "braintreethreedsecurelanding",
          CARDINAL_SCRIPT_SOURCE: {
            production: "https://songbird.cardinalcommerce.com/edge/v1/songbird.js",
            sandbox: "https://songbirdstag.cardinalcommerce.com/edge/v1/songbird.js"
          }
        };
      }, {}], 141: [function(require2, module3, exports3) {
        "use strict";
        var BraintreeError = require2("../../lib/braintree-error");
        module3.exports = {
          THREEDS_NOT_ENABLED: {
            type: BraintreeError.types.MERCHANT,
            code: "THREEDS_NOT_ENABLED",
            message: "3D Secure is not enabled for this merchant."
          },
          THREEDS_CAN_NOT_USE_TOKENIZATION_KEY: {
            type: BraintreeError.types.MERCHANT,
            code: "THREEDS_CAN_NOT_USE_TOKENIZATION_KEY",
            message: "3D Secure can not use a tokenization key for authorization."
          },
          THREEDS_HTTPS_REQUIRED: {
            type: BraintreeError.types.MERCHANT,
            code: "THREEDS_HTTPS_REQUIRED",
            message: "3D Secure requires HTTPS."
          },
          THREEDS_NOT_ENABLED_FOR_V2: {
            type: BraintreeError.types.MERCHANT,
            code: "THREEDS_NOT_ENABLED_FOR_V2",
            message: "3D Secure version 2 is not enabled for this merchant. Contact Braintree Support for assistance at https://help.braintreepayments.com/"
          },
          THREEDS_UNRECOGNIZED_VERSION: {
            type: BraintreeError.types.MERCHANT,
            code: "THREEDS_UNRECOGNIZED_VERSION"
          },
          THREEDS_CARDINAL_SDK_SETUP_FAILED: {
            type: BraintreeError.types.UNKNOWN,
            code: "THREEDS_CARDINAL_SDK_SETUP_FAILED",
            message: "Something went wrong setting up Cardinal's Songbird.js library."
          },
          THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED: {
            type: BraintreeError.types.NETWORK,
            code: "THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED",
            message: "Cardinal's Songbird.js library could not be loaded."
          },
          THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT: {
            type: BraintreeError.types.UNKNOWN,
            code: "THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT",
            message: "Cardinal's Songbird.js took too long to setup."
          },
          THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT: {
            type: BraintreeError.types.UNKNOWN,
            code: "THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT",
            message: "Cardinal's API took too long to respond."
          },
          THREEDS_CARDINAL_SDK_BAD_CONFIG: {
            type: BraintreeError.types.MERCHANT,
            code: "THREEDS_CARDINAL_SDK_BAD_CONFIG",
            message: "JWT or other required field missing. Please check your setup configuration."
          },
          THREEDS_CARDINAL_SDK_BAD_JWT: {
            type: BraintreeError.types.MERCHANT,
            code: "THREEDS_CARDINAL_SDK_BAD_JWT",
            message: "Cardinal JWT missing or malformed. Please check your setup configuration."
          },
          THREEDS_CARDINAL_SDK_ERROR: {
            type: BraintreeError.types.UNKNOWN,
            code: "THREEDS_CARDINAL_SDK_ERROR",
            message: "A general error has occurred with Cardinal. See description for more information."
          },
          THREEDS_CARDINAL_SDK_CANCELED: {
            type: BraintreeError.types.CUSTOMER,
            code: "THREEDS_CARDINAL_SDK_CANCELED",
            message: "Canceled by user."
          },
          THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT: {
            type: BraintreeError.types.MERCHANT,
            code: "THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT",
            message: "3D Secure verfication canceled by merchant."
          },
          THREEDS_AUTHENTICATION_IN_PROGRESS: {
            type: BraintreeError.types.MERCHANT,
            code: "THREEDS_AUTHENTICATION_IN_PROGRESS",
            message: "Cannot call verifyCard while existing authentication is in progress."
          },
          THREEDS_MISSING_VERIFY_CARD_OPTION: {
            type: BraintreeError.types.MERCHANT,
            code: "THREEDS_MISSING_VERIFY_CARD_OPTION"
          },
          THREEDS_JWT_AUTHENTICATION_FAILED: {
            type: BraintreeError.types.UNKNOWN,
            code: "THREEDS_JWT_AUTHENTICATION_FAILED",
            message: "Something went wrong authenticating the JWT from Cardinal"
          },
          THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR: {
            type: BraintreeError.types.MERCHANT,
            code: "THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR",
            message: "Either the payment method nonce passed to `verifyCard` does not exist, or it was already consumed"
          },
          THREEDS_LOOKUP_VALIDATION_ERROR: {
            type: BraintreeError.types.CUSTOMER,
            code: "THREEDS_LOOKUP_VALIDATION_ERROR",
            message: "The data passed in `verifyCard` did not pass validation checks. See details for more info"
          },
          THREEDS_LOOKUP_ERROR: {
            type: BraintreeError.types.UNKNOWN,
            code: "THREEDS_LOOKUP_ERROR",
            message: "Something went wrong during the 3D Secure lookup"
          },
          THREEDS_INLINE_IFRAME_DETAILS_INCORRECT: {
            type: BraintreeError.types.UNKNOWN,
            code: "THREEDS_INLINE_IFRAME_DETAILS_INCORRECT",
            message: "Something went wrong when attempting to add the authentication iframe to the page."
          },
          THREEDS_NO_VERIFICATION_PAYLOAD: {
            type: BraintreeError.types.MERCHANT,
            code: "THREEDS_NO_VERIFICATION_PAYLOAD",
            message: "No verification payload available."
          },
          THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN: {
            type: BraintreeError.types.INTERNAL,
            code: "THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN",
            message: "Term Url must be on a Braintree domain."
          },
          THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED: {
            type: BraintreeError.types.INTERNAL,
            code: "THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED",
            message: "Method not implemented for this framework."
          },
          THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID: {
            type: BraintreeError.types.MERCHANT,
            code: "THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID",
            message: "Requested Exemption Type is invalid."
          },
          THREEDS_UNSUPPORTED_VERSION: {
            type: BraintreeError.types.MERCHANT,
            code: "THREEDS_UNSUPPORTED_VERSION",
            message: "3D Secure `1` is deprecated and no longer supported. See available versions at https://braintree.github.io/braintree-web/current/module-braintree-web_three-d-secure.html#.create"
          }
        };
      }, { "../../lib/braintree-error": 90 }], 142: [function(require2, module3, exports3) {
        "use strict";
        var enumerate = require2("../../lib/enumerate");
        module3.exports = enumerate(["AUTHENTICATION_COMPLETE"], "threedsecure:");
      }, { "../../lib/enumerate": 99 }], 143: [function(require2, module3, exports3) {
        "use strict";
        var BraintreeError = require2("../lib/braintree-error");
        module3.exports = {
          VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN: {
            type: BraintreeError.types.MERCHANT,
            code: "VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN",
            message: "A client token with a customer id must be used to delete a payment method nonce."
          },
          VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND: {
            type: BraintreeError.types.MERCHANT,
            code: "VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND"
          },
          VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR: {
            type: BraintreeError.types.UNKNOWN,
            code: "VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR"
          }
        };
      }, { "../lib/braintree-error": 90 }], 144: [function(require2, module3, exports3) {
        "use strict";
        var basicComponentVerification = require2("../lib/basic-component-verification");
        var createDeferredClient = require2("../lib/create-deferred-client");
        var createAssetsUrl = require2("../lib/create-assets-url");
        var VaultManager = require2("./vault-manager");
        var VERSION = "3.103.0";
        var wrapPromise = require2("@braintree/wrap-promise");
        function create(options) {
          var name = "Vault Manager";
          return basicComponentVerification.verify({
            name,
            client: options.client,
            authorization: options.authorization
          }).then(function() {
            return new VaultManager({
              createPromise: createDeferredClient.create({
                authorization: options.authorization,
                client: options.client,
                debug: options.debug,
                assetsUrl: createAssetsUrl.create(options.authorization),
                name
              })
            });
          });
        }
        module3.exports = {
          create: wrapPromise(create),
          /**
           * @description The current version of the SDK, i.e. `1.43.0`.
           * @type {string}
           */
          VERSION
        };
      }, { "../lib/basic-component-verification": 88, "../lib/create-assets-url": 94, "../lib/create-deferred-client": 96, "./vault-manager": 145, "@braintree/wrap-promise": 46 }], 145: [function(require2, module3, exports3) {
        "use strict";
        var analytics = require2("../lib/analytics");
        var BraintreeError = require2("../lib/braintree-error");
        var errors = require2("./errors");
        var convertMethodsToError = require2("../lib/convert-methods-to-error");
        var methods = require2("../lib/methods");
        var wrapPromise = require2("@braintree/wrap-promise");
        var DELETE_PAYMENT_METHOD_MUTATION = "mutation DeletePaymentMethodFromSingleUseToken($input: DeletePaymentMethodFromSingleUseTokenInput!) {  deletePaymentMethodFromSingleUseToken(input: $input) {    clientMutationId  }}";
        function VaultManager(options) {
          this._createPromise = options.createPromise;
        }
        VaultManager.prototype.fetchPaymentMethods = function(options) {
          var defaultFirst;
          options = options || {};
          defaultFirst = options.defaultFirst === true ? 1 : 0;
          return this._createPromise.then(function(client) {
            return client.request({
              endpoint: "payment_methods",
              method: "get",
              data: {
                defaultFirst
              }
            });
          }).then(
            (function(paymentMethodsPayload) {
              analytics.sendEvent(
                this._createPromise,
                "vault-manager.fetch-payment-methods.succeeded"
              );
              return paymentMethodsPayload.paymentMethods.map(
                formatPaymentMethodPayload
              );
            }).bind(this)
          );
        };
        VaultManager.prototype.deletePaymentMethod = function(paymentMethodNonce) {
          return this._createPromise.then(function(client) {
            var usesClientToken = client.getConfiguration().authorizationType === "CLIENT_TOKEN";
            if (!usesClientToken) {
              return Promise.reject(
                new BraintreeError(
                  errors.VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN
                )
              );
            }
            return client.request({
              api: "graphQLApi",
              data: {
                query: DELETE_PAYMENT_METHOD_MUTATION,
                variables: {
                  input: {
                    singleUseTokenId: paymentMethodNonce
                  }
                },
                operationName: "DeletePaymentMethodFromSingleUseToken"
              }
            }).then(function() {
              analytics.sendEvent(
                client,
                "vault-manager.delete-payment-method.succeeded"
              );
            }).catch(function(error) {
              var originalError = error.details.originalError;
              var formattedError;
              analytics.sendEvent(
                client,
                "vault-manager.delete-payment-method.failed"
              );
              if (originalError[0] && originalError[0].extensions.errorClass === "NOT_FOUND") {
                formattedError = new BraintreeError({
                  type: errors.VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND.type,
                  code: errors.VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND.code,
                  message: "A payment method for payment method nonce `" + paymentMethodNonce + "` could not be found.",
                  details: {
                    originalError
                  }
                });
              }
              if (!formattedError) {
                formattedError = new BraintreeError({
                  type: errors.VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR.type,
                  code: errors.VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR.code,
                  message: "An unknown error occured when attempting to delete the payment method assocaited with the payment method nonce `" + paymentMethodNonce + "`.",
                  details: {
                    originalError
                  }
                });
              }
              return Promise.reject(formattedError);
            });
          });
        };
        function formatPaymentMethodPayload(paymentMethod) {
          var formattedPaymentMethod = {
            nonce: paymentMethod.nonce,
            default: paymentMethod.default,
            details: paymentMethod.details,
            hasSubscription: paymentMethod.hasSubscription,
            type: paymentMethod.type
          };
          if (paymentMethod.description) {
            formattedPaymentMethod.description = paymentMethod.description;
          }
          if (paymentMethod.binData) {
            formattedPaymentMethod.binData = paymentMethod.binData;
          }
          return formattedPaymentMethod;
        }
        VaultManager.prototype.teardown = function() {
          convertMethodsToError(this, methods(VaultManager.prototype));
          return Promise.resolve();
        };
        module3.exports = wrapPromise.wrapPrototype(VaultManager);
      }, { "../lib/analytics": 85, "../lib/braintree-error": 90, "../lib/convert-methods-to-error": 92, "../lib/methods": 120, "./errors": 143, "@braintree/wrap-promise": 46 }], 146: [function(require2, module3, exports3) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
        var venmo_desktop_1 = __importDefault(require2("./venmo-desktop"));
        module3.exports = function createVenmoDesktop(options) {
          var instance = new venmo_desktop_1.default(options);
          return instance.initialize();
        };
      }, { "./venmo-desktop": 148 }], 147: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.VENMO_PAYMENT_CONTEXT_STATUS_QUERY = exports3.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY = exports3.UPDATE_PAYMENT_CONTEXT_QUERY = exports3.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY = exports3.CREATE_PAYMENT_CONTEXT_QUERY = exports3.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY = void 0;
        exports3.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY = "mutation CreateVenmoQRCodePaymentContext($input: CreateVenmoQRCodePaymentContextInput!) {\n  createVenmoQRCodePaymentContext(input: $input) {\n    clientMutationId\n    venmoQRCodePaymentContext {\n      id\n      merchantId\n      createdAt\n      expiresAt\n    }\n  }\n}";
        exports3.CREATE_PAYMENT_CONTEXT_QUERY = "mutation CreateVenmoPaymentContext($input: CreateVenmoPaymentContextInput!) {\n  createVenmoPaymentContext(input: $input) {\n    clientMutationId\n    venmoPaymentContext {\n      id\n      merchantId\n      createdAt\n      expiresAt\n    }\n  }\n}";
        exports3.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY = "mutation UpdateVenmoQRCodePaymentContext($input: UpdateVenmoQRCodePaymentContextInput!) {\n  updateVenmoQRCodePaymentContext(input: $input) {\n    clientMutationId\n  }\n}";
        exports3.UPDATE_PAYMENT_CONTEXT_QUERY = "mutation UpdateVenmoPaymentContextStatus($input: UpdateVenmoPaymentContextStatusInput!) {\n  updateVenmoPaymentContextStatus(input: $input) {\n    clientMutationId\n  }\n}";
        exports3.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY = "query PaymentContext($id: ID!) {\n  node(id: $id) {\n    ... on VenmoQRCodePaymentContext {\n      status\n      paymentMethodId\n      userName\n    }\n  }\n}";
        exports3.VENMO_PAYMENT_CONTEXT_STATUS_QUERY = "query PaymentContext($id: ID!) {\n  node(id: $id) {\n    ... on VenmoPaymentContext {\n      status\n      paymentMethodId\n      userName\n      payerInfo {\n        firstName\n        lastName\n        phoneNumber\n        email\n        externalId\n        userName\n        billingAddress {\n          fullName\n          addressLine1\n          addressLine2\n          adminArea1\n          adminArea2\n          postalCode\n          countryCode\n        }\n        shippingAddress {\n          fullName\n          addressLine1\n          addressLine2\n          adminArea1\n          adminArea2\n          postalCode\n          countryCode\n        }\n      }\n    }\n  }\n}";
      }, {}], 148: [function(require2, module3, exports3) {
        "use strict";
        var __assign = this && this.__assign || function() {
          __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                  t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        var __importDefault = this && this.__importDefault || function(mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
        Object.defineProperty(exports3, "__esModule", { value: true });
        var framebus_1 = __importDefault(require2("framebus"));
        var iframer_1 = __importDefault(require2("@braintree/iframer"));
        var uuid_1 = __importDefault(require2("@braintree/uuid"));
        var events_1 = require2("../shared/events");
        var queries_1 = require2("./queries");
        var VENMO_DESKTOP_POLLING_INTERVAL = 1e3;
        var VISUAL_DELAY_BEFORE_SIGNALLING_COMPLETION = 2e3;
        var VenmoDesktop = (
          /** @class */
          function() {
            function VenmoDesktop2(options) {
              this.isHidden = true;
              this.env = options.environment;
              this.id = uuid_1.default();
              this.profileId = options.profileId;
              this.displayName = options.displayName;
              this.paymentMethodUsage = options.paymentMethodUsage;
              this.shouldUseLegacyQRCodeMutation = !this.paymentMethodUsage;
              var frameUrl = options.url + "#" + this.env + "_" + this.id;
              this.bus = new framebus_1.default({
                channel: this.id,
                verifyDomain: options.verifyDomain,
                targetFrames: []
              });
              this.apiRequest = options.apiRequest;
              this.sendEvent = options.sendEvent;
              this.Promise = options.Promise;
              this.alertBox = document.createElement("div");
              this.alertBox.setAttribute("data-venmo-desktop-id", this.id);
              this.alertBox.setAttribute("role", "alert");
              this.alertBox.style.position = "fixed";
              this.alertBox.style.display = "none";
              this.alertBox.style.height = "1px";
              this.alertBox.style.width = "1px";
              this.alertBox.style.overflow = "hidden";
              this.alertBox.style.zIndex = "0";
              this.iframe = iframer_1.default({
                src: frameUrl,
                name: "venmo-desktop-iframe",
                style: {
                  display: "none",
                  position: "fixed",
                  top: "0",
                  bottom: "0",
                  right: "0",
                  left: "0",
                  height: "100%",
                  width: "100%",
                  zIndex: "9999999"
                },
                title: "Venmo Desktop"
              });
              this.bus.addTargetFrame(this.iframe);
            }
            VenmoDesktop2.prototype.initialize = function() {
              var _this = this;
              return new this.Promise(function(resolve) {
                _this.bus.on(events_1.VENMO_DESKTOP_IFRAME_READY, function() {
                  resolve(_this);
                });
                _this.bus.on(events_1.VENMO_DESKTOP_REQUEST_NEW_QR_CODE, function() {
                  _this.sendEvent("venmo.tokenize.desktop.restarted-from-error-view");
                  _this.startPolling();
                });
                document.body.appendChild(_this.iframe);
                document.body.appendChild(_this.alertBox);
              });
            };
            VenmoDesktop2.prototype.launchDesktopFlow = function() {
              var _this = this;
              this.isHidden = false;
              var promise = new this.Promise(function(resolve, reject) {
                _this.launchDesktopPromiseRejectFunction = reject;
                var removeListeners = function() {
                  _this.bus.off(
                    events_1.VENMO_DESKTOP_CUSTOMER_CANCELED,
                    customerCancelledHandler
                  );
                  _this.bus.off(
                    events_1.VENMO_DESKTOP_UNKNOWN_ERROR,
                    unknownErrorHandler
                  );
                };
                var unknownErrorHandler = function(err) {
                  removeListeners();
                  _this.sendEvent("venmo.tokenize.desktop.unknown-error");
                  reject({
                    allowUIToHandleError: false,
                    reason: "UNKNOWN_ERROR",
                    err
                  });
                };
                var customerCancelledHandler = function() {
                  removeListeners();
                  _this.updateVenmoDesktopPaymentContext("CANCELED");
                  _this.sendEvent(
                    "venmo.tokenize.desktop.status-change.canceled-from-modal"
                  );
                  reject({
                    allowUIToHandleError: false,
                    reason: "CUSTOMER_CANCELED"
                  });
                };
                _this.completedHandler = function(payload) {
                  removeListeners();
                  resolve(payload);
                };
                _this.bus.on(
                  events_1.VENMO_DESKTOP_CUSTOMER_CANCELED,
                  customerCancelledHandler
                );
                _this.bus.on(events_1.VENMO_DESKTOP_UNKNOWN_ERROR, unknownErrorHandler);
              });
              this.iframe.style.display = "block";
              this.setAlert("Generating a QR code, get your Venmo app ready");
              this.iframe.focus();
              this.startPolling();
              return promise.then(function(result) {
                delete _this.venmoContextId;
                delete _this.launchDesktopPromiseRejectFunction;
                return result;
              }).catch(function(err) {
                delete _this.venmoContextId;
                delete _this.launchDesktopPromiseRejectFunction;
                return _this.Promise.reject(err);
              });
            };
            VenmoDesktop2.prototype.triggerCompleted = function(result) {
              var _this = this;
              if (this.isHidden) {
                return;
              }
              setTimeout(function() {
                if (_this.completedHandler) {
                  _this.completedHandler(result);
                }
                delete _this.completedHandler;
              }, VISUAL_DELAY_BEFORE_SIGNALLING_COMPLETION);
            };
            VenmoDesktop2.prototype.triggerRejected = function(err) {
              if (this.launchDesktopPromiseRejectFunction) {
                this.launchDesktopPromiseRejectFunction(err);
              }
            };
            VenmoDesktop2.prototype.hideDesktopFlow = function() {
              this.setAlert("");
              this.iframe.style.display = "none";
              this.bus.emit(events_1.VENMO_DESKTOP_CLOSED_FROM_PARENT);
              this.isHidden = true;
            };
            VenmoDesktop2.prototype.displayError = function(message) {
              if (this.isHidden) {
                return;
              }
              this.bus.emit(events_1.VENMO_DESKTOP_DISPLAY_ERROR, {
                message
              });
              this.setAlert(message);
            };
            VenmoDesktop2.prototype.displayQRCode = function(id, merchantId) {
              if (this.isHidden) {
                return;
              }
              this.bus.emit(events_1.VENMO_DESKTOP_DISPLAY_QR_CODE, {
                id,
                merchantId
              });
              this.setAlert("To scan the QR code, open your Venmo app");
            };
            VenmoDesktop2.prototype.authorize = function() {
              if (this.isHidden) {
                return;
              }
              this.bus.emit(events_1.VENMO_DESKTOP_AUTHORIZE);
              this.setAlert("Venmo account authorized");
            };
            VenmoDesktop2.prototype.authorizing = function() {
              if (this.isHidden) {
                return;
              }
              this.bus.emit(events_1.VENMO_DESKTOP_AUTHORIZING);
              this.setAlert("Authorize on your Venmo app");
            };
            VenmoDesktop2.prototype.startPolling = function() {
              var _this = this;
              return this.createVenmoDesktopPaymentContext().then(function(result) {
                var expiresIn = new Date(result.expiresAt).getTime() - new Date(result.createdAt).getTime();
                var expiredTime = Date.now() + expiresIn;
                _this.displayQRCode(result.id, result.merchantId);
                return _this.pollForStatusChange(result.status, expiredTime);
              }).then(function(result) {
                if (!result) {
                  return;
                }
                var username = result.userName || "";
                username = "@" + username.replace("@", "");
                _this.triggerCompleted({
                  paymentMethodNonce: result.paymentMethodId,
                  username,
                  payerInfo: result.payerInfo,
                  id: _this.venmoContextId || ""
                });
              }).catch(function(err) {
                if (err.allowUIToHandleError) {
                  return;
                }
                _this.sendEvent("venmo.tokenize.desktop.unhandled-error");
                _this.triggerRejected(err);
              });
            };
            VenmoDesktop2.prototype.pollForStatusChange = function(status, expiredTime) {
              var _this = this;
              if (!this.venmoContextId) {
                return this.Promise.resolve();
              }
              if (Date.now() > expiredTime) {
                return this.updateVenmoDesktopPaymentContext("EXPIRED").then(function() {
                  _this.displayError("Something went wrong");
                  _this.sendEvent("venmo.tokenize.desktop.status-change.sdk-timeout");
                  return _this.Promise.reject({
                    allowUIToHandleError: true,
                    reason: "TIMEOUT"
                  });
                });
              }
              return this.lookupVenmoDesktopPaymentContext().then(function(response) {
                if (!_this.venmoContextId || !response) {
                  return _this.Promise.resolve();
                }
                var newStatus = response.status;
                if (newStatus !== status) {
                  status = newStatus;
                  _this.sendEvent(
                    "venmo.tokenize.desktop.status-change." + status.toLowerCase()
                  );
                  switch (status) {
                    case "CREATED":
                      break;
                    case "EXPIRED":
                    case "FAILED":
                    case "CANCELED":
                      var message = status === "CANCELED" ? "The authorization was canceled" : "Something went wrong";
                      _this.displayError(message);
                      return _this.Promise.reject({
                        allowUIToHandleError: true,
                        reason: status
                      });
                    case "SCANNED":
                      _this.authorizing();
                      break;
                    case "APPROVED":
                      _this.authorize();
                      return _this.Promise.resolve(response);
                    default:
                  }
                }
                return new _this.Promise(function(resolve, reject) {
                  setTimeout(function() {
                    _this.pollForStatusChange(status, expiredTime).then(resolve).catch(reject);
                  }, VENMO_DESKTOP_POLLING_INTERVAL);
                });
              });
            };
            VenmoDesktop2.prototype.teardown = function() {
              this.bus.teardown();
              if (this.iframe.parentNode) {
                this.iframe.parentNode.removeChild(this.iframe);
              }
              if (this.alertBox.parentNode) {
                this.alertBox.parentNode.removeChild(this.alertBox);
              }
            };
            VenmoDesktop2.prototype.setAlert = function(message) {
              this.alertBox.style.display = message ? "block" : "none";
              this.alertBox.textContent = message;
            };
            VenmoDesktop2.prototype.createPaymentContextFromGraphqlLegacyQRCodeMutation = function(intent) {
              return this.apiRequest(queries_1.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY, {
                input: {
                  environment: this.env,
                  intent
                }
              }).then(function(response) {
                return response.createVenmoQRCodePaymentContext.venmoQRCodePaymentContext;
              });
            };
            VenmoDesktop2.prototype.createPaymentContextFromGraphQL = function(intent) {
              var input = {
                intent,
                paymentMethodUsage: this.paymentMethodUsage,
                customerClient: "DESKTOP"
              };
              if (this.profileId) {
                input.merchantProfileId = this.profileId;
              }
              if (this.displayName) {
                input.displayName = this.displayName;
              }
              return this.apiRequest(queries_1.CREATE_PAYMENT_CONTEXT_QUERY, {
                input
              }).then(function(response) {
                return response.createVenmoPaymentContext.venmoPaymentContext;
              });
            };
            VenmoDesktop2.prototype.createVenmoDesktopPaymentContext = function() {
              var _this = this;
              var contextPromise = this.shouldUseLegacyQRCodeMutation ? this.createPaymentContextFromGraphqlLegacyQRCodeMutation("PAY_FROM_APP") : this.createPaymentContextFromGraphQL("PAY_FROM_APP");
              return contextPromise.then(function(context) {
                _this.venmoContextId = context.id;
                var merchantId = _this.profileId || context.merchantId;
                return {
                  id: context.id,
                  status: context.status,
                  merchantId,
                  createdAt: context.createdAt,
                  expiresAt: context.expiresAt
                };
              });
            };
            VenmoDesktop2.prototype.updateVenmoDesktopPaymentContext = function(status, additionalOptions) {
              if (additionalOptions === void 0) {
                additionalOptions = {};
              }
              if (!this.venmoContextId) {
                return this.Promise.resolve();
              }
              var data = {
                input: __assign(
                  { id: this.venmoContextId, status },
                  additionalOptions
                )
              };
              var query = this.shouldUseLegacyQRCodeMutation ? queries_1.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY : queries_1.UPDATE_PAYMENT_CONTEXT_QUERY;
              return this.apiRequest(query, data).then(function() {
              });
            };
            VenmoDesktop2.prototype.lookupVenmoDesktopPaymentContext = function() {
              if (!this.venmoContextId) {
                return this.Promise.resolve();
              }
              var query = this.shouldUseLegacyQRCodeMutation ? queries_1.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY : queries_1.VENMO_PAYMENT_CONTEXT_STATUS_QUERY;
              return this.apiRequest(query, {
                id: this.venmoContextId
              }).then(function(response) {
                return response.node;
              });
            };
            return VenmoDesktop2;
          }()
        );
        exports3.default = VenmoDesktop;
      }, { "../shared/events": 153, "./queries": 147, "@braintree/iframer": 38, "@braintree/uuid": 42, "framebus": 166 }], 149: [function(require2, module3, exports3) {
        "use strict";
        var analytics = require2("../lib/analytics");
        var basicComponentVerification = require2("../lib/basic-component-verification");
        var createDeferredClient = require2("../lib/create-deferred-client");
        var createAssetsUrl = require2("../lib/create-assets-url");
        var errors = require2("./shared/errors");
        var wrapPromise = require2("@braintree/wrap-promise");
        var BraintreeError = require2("../lib/braintree-error");
        var Venmo = require2("./venmo");
        var supportsVenmo = require2("./shared/supports-venmo");
        var VERSION = "3.103.0";
        function create(options) {
          var name = "Venmo";
          return basicComponentVerification.verify({
            name,
            client: options.client,
            authorization: options.authorization
          }).then(function() {
            var createPromise, instance;
            if (options.profileId && typeof options.profileId !== "string") {
              return Promise.reject(
                new BraintreeError(errors.VENMO_INVALID_PROFILE_ID)
              );
            }
            if (options.deepLinkReturnUrl && typeof options.deepLinkReturnUrl !== "string") {
              return Promise.reject(
                new BraintreeError(errors.VENMO_INVALID_DEEP_LINK_RETURN_URL)
              );
            }
            createPromise = createDeferredClient.create({
              authorization: options.authorization,
              client: options.client,
              debug: options.debug,
              assetsUrl: createAssetsUrl.create(options.authorization),
              name
            }).then(function(client) {
              var configuration = client.getConfiguration();
              options.client = client;
              if (!configuration.gatewayConfiguration.payWithVenmo) {
                return Promise.reject(new BraintreeError(errors.VENMO_NOT_ENABLED));
              }
              return client;
            });
            options.createPromise = createPromise;
            instance = new Venmo(options);
            analytics.sendEvent(createPromise, "venmo.initialized");
            return createPromise.then(function() {
              return instance;
            });
          });
        }
        function isBrowserSupported(options) {
          return supportsVenmo.isBrowserSupported(options);
        }
        module3.exports = {
          create: wrapPromise(create),
          isBrowserSupported,
          /**
           * @description The current version of the SDK, i.e. `1.43.0`.
           * @type {string}
           */
          VERSION
        };
      }, { "../lib/analytics": 85, "../lib/basic-component-verification": 88, "../lib/braintree-error": 90, "../lib/create-assets-url": 94, "../lib/create-deferred-client": 96, "./shared/errors": 152, "./shared/supports-venmo": 155, "./venmo": 157, "@braintree/wrap-promise": 46 }], 150: [function(require2, module3, exports3) {
        "use strict";
        var isAndroid = require2("@braintree/browser-detection/is-android");
        var isChrome = require2("@braintree/browser-detection/is-chrome");
        var isIos = require2("@braintree/browser-detection/is-ios");
        var isIosSafari = require2("@braintree/browser-detection/is-ios-safari");
        var isIosWebview = require2("@braintree/browser-detection/is-ios-webview");
        var isSamsung = require2("@braintree/browser-detection/is-samsung");
        function isAndroidWebview() {
          return isAndroid() && window.navigator.userAgent.toLowerCase().indexOf("wv") > -1;
        }
        function doesNotSupportWindowOpenInIos() {
          if (!isIos()) {
            return false;
          }
          return isIosWebview() || !isIosSafari();
        }
        function isFacebookOwnedBrowserOnAndroid() {
          var ua = window.navigator.userAgent.toLowerCase();
          if (ua.indexOf("huawei") > -1 && ua.indexOf("fban") > -1) {
            return true;
          }
          if (!isAndroid()) {
            return false;
          }
          return ua.indexOf("fb_iab") > -1 || ua.indexOf("instagram") > -1;
        }
        function isIosChrome() {
          return isIos() && isChrome();
        }
        module3.exports = {
          isAndroid,
          isAndroidWebview,
          isChrome,
          isIos,
          isIosChrome,
          isSamsung,
          isIosSafari,
          isIosWebview,
          isFacebookOwnedBrowserOnAndroid,
          doesNotSupportWindowOpenInIos
        };
      }, { "@braintree/browser-detection/is-android": 24, "@braintree/browser-detection/is-chrome": 26, "@braintree/browser-detection/is-ios": 33, "@braintree/browser-detection/is-ios-safari": 30, "@braintree/browser-detection/is-ios-webview": 31, "@braintree/browser-detection/is-samsung": 34 }], 151: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY: 500,
          DEFAULT_PROCESS_RESULTS_DELAY: 1e3,
          VENMO_APP_OR_MOBILE_AUTH_URL: "https://venmo.com/go/checkout",
          VENMO_MOBILE_APP_AUTH_ONLY_URL: "https://venmo.com/braintree/checkout",
          VENMO_WEB_LOGIN_URL: "https://account.venmo.com/go/web"
        };
      }, {}], 152: [function(require2, module3, exports3) {
        "use strict";
        var BraintreeError = require2("../../lib/braintree-error");
        module3.exports = {
          VENMO_NOT_ENABLED: {
            type: BraintreeError.types.MERCHANT,
            code: "VENMO_NOT_ENABLED",
            message: "Venmo is not enabled for this merchant."
          },
          VENMO_TOKENIZATION_REQUEST_ACTIVE: {
            type: BraintreeError.types.MERCHANT,
            code: "VENMO_TOKENIZATION_REQUEST_ACTIVE",
            message: "Another tokenization request is active."
          },
          VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE: {
            type: BraintreeError.types.MERCHANT,
            code: "VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE",
            message: "No tokenization in progress."
          },
          VENMO_APP_FAILED: {
            type: BraintreeError.types.UNKNOWN,
            code: "VENMO_APP_FAILED",
            message: "Venmo app encountered a problem."
          },
          VENMO_APP_CANCELED: {
            type: BraintreeError.types.CUSTOMER,
            code: "VENMO_APP_CANCELED",
            message: "Venmo app authorization was canceled."
          },
          VENMO_CANCELED: {
            type: BraintreeError.types.CUSTOMER,
            code: "VENMO_CANCELED",
            message: "User canceled Venmo authorization, or Venmo app is not available."
          },
          VENMO_CUSTOMER_CANCELED: {
            type: BraintreeError.types.CUSTOMER,
            code: "VENMO_CUSTOMER_CANCELED",
            message: "User canceled Venmo authorization."
          },
          VENMO_NETWORK_ERROR: {
            type: BraintreeError.types.NETWORK,
            code: "VENMO_NETWORK_ERROR",
            message: "Something went wrong making the request"
          },
          VENMO_DESKTOP_CANCELED: {
            type: BraintreeError.types.CUSTOMER,
            code: "VENMO_DESKTOP_CANCELED",
            message: "User canceled Venmo authorization by closing the Venmo Desktop modal."
          },
          VENMO_TOKENIZATION_CANCELED_BY_MERCHANT: {
            type: BraintreeError.types.MERCHANT,
            code: "VENMO_TOKENIZATION_CANCELED_BY_MERCHANT",
            message: "The Venmo tokenization was canceled by the merchant."
          },
          VENMO_DESKTOP_UNKNOWN_ERROR: {
            type: BraintreeError.types.UNKNOWN,
            code: "VENMO_DESKTOP_UNKNOWN_ERROR",
            message: "Something went wrong with the Venmo Desktop flow."
          },
          VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED: {
            type: BraintreeError.types.NETWORK,
            code: "VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED",
            message: "Something went wrong creating the Venmo Payment Context."
          },
          VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR: {
            type: BraintreeError.types.UNKNOWN,
            code: "VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR",
            message: "Something went wrong during mobile polling."
          },
          VENMO_MOBILE_POLLING_TOKENIZATION_EXPIRED: {
            type: BraintreeError.types.CUSTOMER,
            code: "VENMO_MOBILE_POLLING_TOKENIZATION_EXPIRED",
            message: "The Venmo authorization request is expired."
          },
          VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED: {
            type: BraintreeError.types.CUSTOMER,
            code: "VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED",
            message: "The Venmo authorization was canceled"
          },
          VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT: {
            type: BraintreeError.types.CUSTOMER,
            code: "VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT",
            message: "Customer took too long to authorize Venmo payment."
          },
          VENMO_MOBILE_POLLING_TOKENIZATION_FAILED: {
            type: BraintreeError.types.UNKNOWN,
            code: "VENMO_MOBILE_POLLING_TOKENIZATION_FAILED",
            message: "The Venmo authorization failed."
          },
          VENMO_INVALID_PROFILE_ID: {
            type: BraintreeError.types.MERCHANT,
            code: "VENMO_INVALID_PROFILE_ID",
            message: "Venmo profile ID is invalid."
          },
          VENMO_INVALID_DEEP_LINK_RETURN_URL: {
            type: BraintreeError.types.MERCHANT,
            code: "VENMO_INVALID_DEEP_LINK_RETURN_URL",
            message: "Venmo deep link return URL is invalid."
          },
          VENMO_TOKENIZATION_FAILED: {
            type: BraintreeError.types.UNKNOWN,
            code: "VENMO_TOKENIZATION_FAILED",
            message: "Venmo encountered a problem"
          },
          VENMO_ECD_DISABLED: {
            type: BraintreeError.types.MERCHANT,
            code: "ECD_DISABLED",
            message: "Cannot collect customer data when ECD is disabled. Enable this feature in the Control Panel to collect this data."
          }
        };
      }, { "../../lib/braintree-error": 90 }], 153: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.VENMO_DESKTOP_UNKNOWN_ERROR = exports3.VENMO_DESKTOP_REQUEST_NEW_QR_CODE = exports3.VENMO_DESKTOP_CLOSED_FROM_PARENT = exports3.VENMO_DESKTOP_IFRAME_READY = exports3.VENMO_DESKTOP_DISPLAY_QR_CODE = exports3.VENMO_DESKTOP_DISPLAY_ERROR = exports3.VENMO_DESKTOP_CUSTOMER_CANCELED = exports3.VENMO_DESKTOP_AUTHORIZING = exports3.VENMO_DESKTOP_AUTHORIZE = exports3.VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT = void 0;
        exports3.VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT = "VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT";
        exports3.VENMO_DESKTOP_AUTHORIZE = "VENMO_DESKTOP_AUTHORIZE";
        exports3.VENMO_DESKTOP_AUTHORIZING = "VENMO_DESKTOP_AUTHORIZING";
        exports3.VENMO_DESKTOP_CUSTOMER_CANCELED = "VENMO_DESKTOP_CUSTOMER_CANCELED";
        exports3.VENMO_DESKTOP_DISPLAY_ERROR = "VENMO_DESKTOP_DISPLAY_ERROR";
        exports3.VENMO_DESKTOP_DISPLAY_QR_CODE = "VENMO_DESKTOP_DISPLAY_QR_CODE";
        exports3.VENMO_DESKTOP_IFRAME_READY = "VENMO_DESKTOP_IFRAME_READY";
        exports3.VENMO_DESKTOP_CLOSED_FROM_PARENT = "VENMO_DESKTOP_CLOSED_FROM_PARENT";
        exports3.VENMO_DESKTOP_REQUEST_NEW_QR_CODE = "VENMO_DESKTOP_REQUEST_NEW_QR_CODE";
        exports3.VENMO_DESKTOP_UNKNOWN_ERROR = "VENMO_DESKTOP_UNKNOWN_ERROR";
      }, {}], 154: [function(require2, module3, exports3) {
        "use strict";
        var venmoConstants = require2("./constants");
        function getVenmoUrl(options) {
          if (options.useAllowDesktopWebLogin)
            return venmoConstants.VENMO_WEB_LOGIN_URL;
          if (options.mobileWebFallBack)
            return venmoConstants.VENMO_APP_OR_MOBILE_AUTH_URL;
          return venmoConstants.VENMO_MOBILE_APP_AUTH_ONLY_URL;
        }
        module3.exports = getVenmoUrl;
      }, { "./constants": 151 }], 155: [function(require2, module3, exports3) {
        "use strict";
        var browserDetection = require2("./browser-detection");
        var inIframe = require2("../../lib/in-iframe");
        function isBrowserSupported(options) {
          var isKnownUnsupportedMobileBrowser, merchantAllowsDesktopBrowsers, merchantAllowsIosChrome, merchantAllowsReturningToNewBrowserTab, merchantAllowsWebviews;
          var isAndroid = browserDetection.isAndroid();
          var isMobileDevice = isAndroid || browserDetection.isIos();
          var isAndroidChrome = isAndroid && browserDetection.isChrome();
          var isMobileDeviceThatSupportsReturnToSameTab = browserDetection.isIosSafari() || isAndroidChrome;
          options = options || {};
          merchantAllowsDesktopBrowsers = (options.allowDesktopWebLogin || options.allowDesktop) === true;
          merchantAllowsReturningToNewBrowserTab = options.hasOwnProperty(
            "allowNewBrowserTab"
          ) ? options.allowNewBrowserTab : true;
          merchantAllowsWebviews = options.hasOwnProperty("allowWebviews") ? options.allowWebviews : true;
          merchantAllowsIosChrome = merchantAllowsReturningToNewBrowserTab && !inIframe();
          isKnownUnsupportedMobileBrowser = !merchantAllowsIosChrome && browserDetection.isIosChrome() || browserDetection.isFacebookOwnedBrowserOnAndroid() || browserDetection.isSamsung();
          if (isKnownUnsupportedMobileBrowser) {
            return false;
          }
          if (!merchantAllowsWebviews && (browserDetection.isAndroidWebview() || browserDetection.isIosWebview())) {
            return false;
          }
          if (!isMobileDevice) {
            return merchantAllowsDesktopBrowsers;
          }
          if (!merchantAllowsReturningToNewBrowserTab) {
            return isMobileDeviceThatSupportsReturnToSameTab;
          }
          return isMobileDevice;
        }
        module3.exports = {
          isBrowserSupported
        };
      }, { "../../lib/in-iframe": 115, "./browser-detection": 150 }], 156: [function(require2, module3, exports3) {
        "use strict";
        var frameService = require2("../../lib/frame-service/external");
        var useMin = require2("../../lib/use-min");
        var ExtendedPromise = require2("@braintree/extended-promise");
        var errors = require2("../shared/errors");
        var BraintreeError = require2("../../lib/braintree-error");
        var VERSION = "3.103.0";
        var VENMO_LOGO_SVG = '<svg width="198" height="58" viewBox="0 0 198 58" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M43.0702 13.6572C44.1935 15.4585 44.6999 17.3139 44.6999 19.6576C44.6999 27.1328 38.1277 36.8436 32.7935 43.6625H20.6099L15.7236 15.2939L26.3917 14.3105L28.9751 34.4966C31.389 30.6783 34.3678 24.6779 34.3678 20.587C34.3678 18.3477 33.9727 16.8225 33.3553 15.5666L43.0702 13.6572Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M56.8965 26.1491C58.8596 26.1491 63.8018 25.2772 63.8018 22.5499C63.8018 21.2402 62.8481 20.587 61.7242 20.587C59.7579 20.587 57.1776 22.8763 56.8965 26.1491ZM56.6715 31.5506C56.6715 34.8807 58.5787 36.1873 61.107 36.1873C63.8603 36.1873 66.4966 35.534 69.923 33.8433L68.6324 42.3523C66.2183 43.4976 62.4559 44.2617 58.8039 44.2617C49.5403 44.2617 46.2249 38.8071 46.2249 31.9879C46.2249 23.1496 51.6179 13.765 62.7365 13.765C68.858 13.765 72.2809 17.0949 72.2809 21.7317C72.2815 29.2066 62.4005 31.4965 56.6715 31.5506Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M103.067 20.3142C103.067 21.4052 102.897 22.9875 102.727 24.0216L99.5262 43.6622H89.1385L92.0585 25.658C92.1139 25.1696 92.284 24.1865 92.284 23.6411C92.284 22.3314 91.4414 22.0047 90.4282 22.0047C89.0826 22.0047 87.7337 22.6042 86.8354 23.0418L83.5234 43.6625H73.0772L77.8495 14.257H86.8908L87.0052 16.6041C89.1382 15.2404 91.9469 13.7656 95.932 13.7656C101.212 13.765 103.067 16.3845 103.067 20.3142Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M133.906 16.9841C136.881 14.9131 139.69 13.765 143.563 13.765C148.897 13.765 150.753 16.3845 150.753 20.3142C150.753 21.4052 150.583 22.9875 150.413 24.0216L147.216 43.6622H136.825L139.801 25.2774C139.855 24.786 139.971 24.1865 139.971 23.8063C139.971 22.3317 139.128 22.0047 138.115 22.0047C136.824 22.0047 135.535 22.5501 134.577 23.0418L131.266 43.6625H120.878L123.854 25.2777C123.908 24.7863 124.02 24.1868 124.02 23.8065C124.02 22.332 123.177 22.0049 122.167 22.0049C120.819 22.0049 119.473 22.6045 118.574 23.0421L115.26 43.6628H104.817L109.589 14.2573H118.52L118.8 16.7122C120.878 15.241 123.684 13.7662 127.446 13.7662C130.704 13.765 132.837 15.129 133.906 16.9841Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M171.426 25.5502C171.426 23.1496 170.808 21.513 168.956 21.513C164.857 21.513 164.015 28.55 164.015 32.1498C164.015 34.8807 164.802 36.5709 166.653 36.5709C170.528 36.5709 171.426 29.1497 171.426 25.5502ZM153.458 31.7152C153.458 22.442 158.511 13.765 170.136 13.765C178.896 13.765 182.098 18.7854 182.098 25.7148C182.098 34.8805 177.099 44.3723 165.194 44.3723C156.378 44.3723 153.458 38.7525 153.458 31.7152Z" fill="white"/>\n</svg>';
        var CONTINUE_OR_CANCEL_INSTRUCTIONS = "Tap cancel payment to cancel and return to the business. Continue payment will relaunch the payment window.";
        var POPUP_WIDTH = 400;
        var POPUP_HEIGHT = 570;
        var ELEMENT_IDS = {
          backdrop: "venmo-desktop-web-backdrop",
          backdropHidden: "venmo-desktop-web-backdrop.hidden",
          backdropContainer: "venmo-backdrop-container",
          cancelButton: "venmo-popup-cancel-button",
          continueButton: "venmo-popup-continue-button",
          message: "venmo-message",
          instructions: "venmo-instructions",
          venmoLogo: "venmo-full-logo"
        };
        ExtendedPromise.suppressUnhandledPromiseMessage = true;
        function openPopup(options) {
          var frameServiceInstance = options.frameServiceInstance;
          var venmoUrl = options.venmoUrl;
          var checkForStatusChange = options.checkForStatusChange;
          var cancelTokenization = options.cancelTokenization;
          var checkPaymentContextStatus = options.checkPaymentContextStatus;
          var extendedPromise = new ExtendedPromise();
          document.getElementById(ELEMENT_IDS.continueButton).addEventListener("click", function() {
            frameServiceInstance.focus();
          });
          document.getElementById(ELEMENT_IDS.cancelButton).addEventListener("click", function() {
            frameServiceInstance.close();
            cancelTokenization();
            closeBackdrop();
          });
          frameServiceInstance.open({}, function(frameServiceErr) {
            var retryStartingCount = 1;
            if (frameServiceErr) {
              extendedPromise.reject(frameServiceErr);
            } else {
              checkForStatusChange(retryStartingCount).then(function(data) {
                extendedPromise.resolve(data);
              }).catch(function(statusCheckError) {
                checkPaymentContextStatus().then(function(node) {
                  if (node.status === "CREATED") {
                    extendedPromise.reject(
                      new BraintreeError(errors.VENMO_CUSTOMER_CANCELED)
                    );
                  } else {
                    extendedPromise.reject(statusCheckError);
                  }
                });
              });
            }
            frameServiceInstance.close();
            closeBackdrop();
          });
          frameServiceInstance.redirect(venmoUrl);
          return extendedPromise;
        }
        function centeredPopupDimensions() {
          var popupTop = Math.round((window.outerHeight - POPUP_HEIGHT) / 2) + window.screenTop;
          var popupLeft = Math.round((window.outerWidth - POPUP_WIDTH) / 2) + window.screenLeft;
          return {
            top: popupTop,
            left: popupLeft
          };
        }
        function closeBackdrop() {
          document.getElementById("venmo-desktop-web-backdrop").classList.add("hidden");
        }
        function getElementStyles() {
          var backdropStyles = [
            "#" + ELEMENT_IDS.backdropHidden + " {",
            "display: none;",
            "}",
            "#" + ELEMENT_IDS.backdrop + " {",
            "z-index: 3141592632;",
            "cursor: pointer;",
            "position: fixed;",
            "top: 0;",
            "left: 0;",
            "bottom: 0;",
            "width: 100%;",
            "background: rgba(0, 0, 0, 0.8);",
            "}"
          ];
          var backdropContainerStyles = [
            "#" + ELEMENT_IDS.backdropContainer + " {",
            "display: flex;",
            "align-content: center;",
            "justify-content: center;",
            "align-items: center;",
            "width: 100%;",
            "height: 100%;",
            "flex-direction: column;",
            "}"
          ];
          var cancelButtonStyles = [
            "#" + ELEMENT_IDS.cancelButton + " {",
            "height: 24px;",
            "width: 380px;",
            "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;",
            "font-style: normal;",
            "font-weight: 700;",
            "font-size: 18px;",
            "line-height: 24px;",
            "text-align: center;",
            "background-color: transparent;",
            "border: none;",
            "color: #FFFFFF;",
            "margin-top: 28px;",
            "}"
          ];
          var continueButtonStyles = [
            "#" + ELEMENT_IDS.continueButton + " {",
            "width: 400px;",
            "height: 50px;",
            "background: #0074DE;",
            "border-radius: 24px;",
            "border: none;",
            "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;",
            "font-style: normal;",
            "font-weight: 700;",
            "font-size: 18px;",
            "color: #FFFFFF;",
            "margin-top: 44px;",
            "}"
          ];
          var messageStyles = [
            "#" + ELEMENT_IDS.message + " {",
            "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;",
            "font-style: normal;",
            "font-weight: 500;",
            "font-size: 24px;",
            "line-height: 32px;",
            "text-align: center;",
            "color: #FFFFFF;",
            "margin-top: 32px;",
            "}"
          ];
          var instructionStyles = [
            "#" + ELEMENT_IDS.instructions + " {",
            "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;",
            "font-style: normal;",
            "font-weight: 400;",
            "font-size: 16px;",
            "line-height: 20px;",
            "text-align: center;",
            "color: #FFFFFF;",
            "margin-top: 16px;",
            "width: 400px;",
            "}"
          ];
          var allStyles = backdropStyles.concat(
            backdropContainerStyles,
            cancelButtonStyles,
            continueButtonStyles,
            messageStyles,
            instructionStyles
          );
          return allStyles.join("\n");
        }
        function buildAndStyleElements() {
          var alreadyRenderedBackdrop = document.getElementById(ELEMENT_IDS.backdrop);
          var backdropStylesElement, backdropDiv, backDropContentContainer, venmoLogoDiv, venmoMessageDiv, instructionsDiv, continueButton, cancelButton;
          if (alreadyRenderedBackdrop) {
            alreadyRenderedBackdrop.classList.remove("hidden");
            return;
          }
          backdropStylesElement = document.createElement("style");
          backdropDiv = document.createElement("div");
          backDropContentContainer = document.createElement("div");
          venmoLogoDiv = document.createElement("div");
          venmoMessageDiv = document.createElement("div");
          instructionsDiv = document.createElement("div");
          continueButton = document.createElement("button");
          cancelButton = document.createElement("button");
          backdropStylesElement.id = "venmo-desktop-web__injected-styles";
          backdropStylesElement.innerHTML = getElementStyles();
          backdropDiv.id = ELEMENT_IDS.backdrop;
          backDropContentContainer.id = ELEMENT_IDS.backdropContainer;
          venmoLogoDiv.id = ELEMENT_IDS.venmoLogo;
          venmoLogoDiv.innerHTML = VENMO_LOGO_SVG;
          venmoMessageDiv.id = ELEMENT_IDS.message;
          venmoMessageDiv.innerText = "What would you like to do?";
          instructionsDiv.id = ELEMENT_IDS.instructions;
          instructionsDiv.innerText = CONTINUE_OR_CANCEL_INSTRUCTIONS;
          continueButton.id = ELEMENT_IDS.continueButton;
          continueButton.innerText = "Continue payment";
          cancelButton.id = ELEMENT_IDS.cancelButton;
          cancelButton.innerText = "Cancel payment";
          document.head.appendChild(backdropStylesElement);
          backDropContentContainer.appendChild(venmoLogoDiv);
          backDropContentContainer.appendChild(venmoMessageDiv);
          backDropContentContainer.appendChild(instructionsDiv);
          backDropContentContainer.appendChild(continueButton);
          backDropContentContainer.appendChild(cancelButton);
          backdropDiv.appendChild(backDropContentContainer);
          document.body.appendChild(backdropDiv);
          backdropDiv.addEventListener("click", function(event) {
            event.stopPropagation();
          });
        }
        function runWebLogin(options) {
          buildAndStyleElements();
          return openPopup(options);
        }
        function setupDesktopWebLogin(options) {
          var extendedPromise = new ExtendedPromise();
          var popupName = "venmoDesktopWebLogin";
          var assetsUrl = options.assetsUrl;
          var debug = options.debug || false;
          var popupLocation = centeredPopupDimensions();
          var assetsBaseUrl = assetsUrl + "/web/" + VERSION + "/html";
          frameService.create(
            {
              name: popupName,
              dispatchFrameUrl: assetsBaseUrl + "/dispatch-frame" + useMin(debug) + ".html",
              openFrameUrl: assetsBaseUrl + "/venmo-landing-frame" + useMin(debug) + ".html",
              top: popupLocation.top,
              left: popupLocation.left,
              height: POPUP_HEIGHT,
              width: POPUP_WIDTH
            },
            function(frameServiceInstance) {
              extendedPromise.resolve(frameServiceInstance);
            }
          );
          return extendedPromise;
        }
        module3.exports = {
          runWebLogin,
          openPopup,
          setupDesktopWebLogin,
          POPUP_WIDTH,
          POPUP_HEIGHT
        };
      }, { "../../lib/braintree-error": 90, "../../lib/frame-service/external": 104, "../../lib/use-min": 125, "../shared/errors": 152, "@braintree/extended-promise": 37 }], 157: [function(require2, module3, exports3) {
        "use strict";
        var analytics = require2("../lib/analytics");
        var isBrowserSupported = require2("./shared/supports-venmo");
        var browserDetection = require2("./shared/browser-detection");
        var constants = require2("./shared/constants");
        var errors = require2("./shared/errors");
        var querystring = require2("../lib/querystring");
        var isVerifiedDomain = require2("../lib/is-verified-domain");
        var methods = require2("../lib/methods");
        var convertMethodsToError = require2("../lib/convert-methods-to-error");
        var wrapPromise = require2("@braintree/wrap-promise");
        var BraintreeError = require2("../lib/braintree-error");
        var inIframe = require2("../lib/in-iframe");
        var ExtendedPromise = require2("@braintree/extended-promise");
        var getVenmoUrl = require2("./shared/get-venmo-url");
        var desktopWebLogin = require2("./shared/web-login-backdrop");
        var snakeCaseToCamelCase = require2("../lib/snake-case-to-camel-case");
        var createVenmoDesktop = require2("./external/");
        var graphqlQueries = require2("./external/queries");
        var VERSION = "3.103.0";
        var DEFAULT_MOBILE_POLLING_INTERVAL = 250;
        var DEFAULT_MOBILE_EXPIRING_THRESHOLD = 3e5;
        ExtendedPromise.suppressUnhandledPromiseMessage = true;
        function Venmo(options) {
          var self2 = this;
          this._allowDesktopWebLogin = options.allowDesktopWebLogin || false;
          this._mobileWebFallBack = options.mobileWebFallBack || false;
          this._createPromise = options.createPromise;
          this._allowNewBrowserTab = options.allowNewBrowserTab !== false;
          this._allowWebviews = options.allowWebviews !== false;
          this._allowDesktop = options.allowDesktop === true;
          this._useRedirectForIOS = options.useRedirectForIOS === true;
          this._profileId = options.profileId;
          this._displayName = options.displayName;
          this._deepLinkReturnUrl = options.deepLinkReturnUrl;
          this._ignoreHistoryChanges = options.ignoreHistoryChanges;
          this._paymentMethodUsage = (options.paymentMethodUsage || "").toUpperCase();
          this._shouldUseLegacyFlow = !this._paymentMethodUsage;
          this._requireManualReturn = options.requireManualReturn === true;
          this._useDesktopQRFlow = this._allowDesktop && this._isDesktop() && !this._allowDesktopWebLogin;
          this._useAllowDesktopWebLogin = this._allowDesktopWebLogin && this._isDesktop();
          this._cannotHaveReturnUrls = inIframe() || this._requireManualReturn;
          this._allowAndroidRecreation = options.allowAndroidRecreation !== false;
          this._maxRetryCount = 3;
          this._collectCustomerBillingAddress = options.collectCustomerBillingAddress || false;
          this._collectCustomerShippingAddress = options.collectCustomerShippingAddress || false;
          this._isFinalAmount = options.isFinalAmount || false;
          this._lineItems = options.lineItems;
          this._subTotalAmount = options.subTotalAmount;
          this._discountAmount = options.discountAmount;
          this._taxAmount = options.taxAmount;
          this._shippingAmount = options.shippingAmount;
          this._totalAmount = options.totalAmount;
          this._shouldCreateVenmoPaymentContext = this._cannotHaveReturnUrls || !this._shouldUseLegacyFlow;
          analytics.sendEvent(
            this._createPromise,
            "venmo.desktop-flow.configured." + String(Boolean(this._allowDesktop))
          );
          if (this.hasTokenizationResult()) {
            analytics.sendEvent(
              this._createPromise,
              "venmo.appswitch.return-in-new-tab"
            );
          } else if (this._useDesktopQRFlow) {
            this._createPromise = this._createPromise.then(function(client) {
              var config = client.getConfiguration().gatewayConfiguration;
              return createVenmoDesktop({
                url: config.assetsUrl + "/web/" + VERSION + "/html/venmo-desktop-frame.html",
                environment: config.environment === "production" ? "PRODUCTION" : "SANDBOX",
                profileId: self2._profileId || config.payWithVenmo.merchantId,
                paymentMethodUsage: self2._paymentMethodUsage,
                displayName: self2._displayName,
                Promise,
                apiRequest: function(query, data) {
                  return client.request({
                    api: "graphQLApi",
                    data: {
                      query,
                      variables: data
                    }
                  }).then(function(response) {
                    return response.data;
                  });
                },
                sendEvent: function(eventName) {
                  analytics.sendEvent(self2._createPromise, eventName);
                },
                verifyDomain: isVerifiedDomain
              }).then(function(venmoDesktopInstance) {
                self2._venmoDesktopInstance = venmoDesktopInstance;
                analytics.sendEvent(
                  self2._createPromise,
                  "venmo.desktop-flow.presented"
                );
                return client;
              }).catch(function() {
                analytics.sendEvent(
                  self2._createPromise,
                  "venmo.desktop-flow.setup-failed"
                );
                self2._useDesktopQRFlow = false;
                return client;
              });
            });
          } else if (this._shouldCreateVenmoPaymentContext) {
            this._mobilePollingInterval = DEFAULT_MOBILE_POLLING_INTERVAL;
            this._mobilePollingExpiresThreshold = DEFAULT_MOBILE_EXPIRING_THRESHOLD;
            this._createPromise = this._createPromise.then(function(client) {
              var paymentContextPromise, webLoginPromise;
              var analyticsCategory = self2._cannotHaveReturnUrls ? "manual-return" : "mobile-payment-context";
              var config = client.getConfiguration();
              webLoginPromise = desktopWebLogin.setupDesktopWebLogin({
                assetsUrl: config.gatewayConfiguration.assetsUrl,
                debug: config.isDebug
              }).then(function(frameServiceInstance) {
                self2._frameServiceInstance = frameServiceInstance;
              }).catch(function(desktopWebErr) {
                return desktopWebErr;
              });
              self2._mobilePollingContextEnvironment = config.gatewayConfiguration.environment.toUpperCase();
              paymentContextPromise = self2._createVenmoPaymentContext(client).then(function() {
                analytics.sendEvent(
                  self2._createPromise,
                  "venmo." + analyticsCategory + ".presented"
                );
                return client;
              }).catch(function(err) {
                analytics.sendEvent(
                  self2._createPromise,
                  "venmo." + analyticsCategory + ".setup-failed"
                );
                return Promise.reject(
                  new BraintreeError({
                    type: errors.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED.type,
                    code: errors.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED.code,
                    message: isValidationError(err) ? err.details.originalError[0].message : errors.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED.message,
                    details: {
                      originalError: err
                    }
                  })
                );
              });
              return ExtendedPromise.all([webLoginPromise, paymentContextPromise]).then(function(results) {
                var paymentContextResult = results[1];
                return Promise.resolve(paymentContextResult);
              }).catch(function(promiseErr) {
                return Promise.reject(promiseErr);
              });
            });
          }
        }
        function isValidationError(err) {
          return err.details && err.details.originalError && err.details.originalError[0] && err.details.originalError[0].extensions && err.details.originalError[0].extensions.errorClass === "VALIDATION" && err.details.originalError[0].extensions.errorType === "user_error";
        }
        Venmo.prototype._createVenmoPaymentContext = function(client, cancelIfTokenizationInProgress) {
          var self2 = this;
          var promise, transactionDetails;
          var configuration = client.getConfiguration();
          var venmoConfiguration = configuration.gatewayConfiguration.payWithVenmo;
          var transactionDetailsPresent = false;
          var customerClientChannel = self2._useAllowDesktopWebLogin ? "NATIVE_WEB" : "MOBILE_WEB";
          if (!this._shouldCreateVenmoPaymentContext) {
            return Promise.resolve();
          }
          if (this._shouldUseLegacyFlow) {
            promise = client.request({
              api: "graphQLApi",
              data: {
                query: graphqlQueries.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY,
                variables: {
                  input: {
                    environment: this._mobilePollingContextEnvironment,
                    intent: "PAY_FROM_APP"
                  }
                }
              }
            }).then(function(response) {
              return response.data.createVenmoQRCodePaymentContext.venmoQRCodePaymentContext;
            });
          } else {
            if ((this._collectCustomerBillingAddress || this._collectCustomerShippingAddress) && !venmoConfiguration.enrichedCustomerDataEnabled) {
              return Promise.reject(new BraintreeError(errors.VENMO_ECD_DISABLED));
            }
            if (this._lineItems) {
              this._lineItems.forEach(function(item) {
                item.unitTaxAmount = item.unitTaxAmount || "0";
              });
            }
            transactionDetails = {
              subTotalAmount: this._subTotalAmount,
              discountAmount: this._discountAmount,
              taxAmount: this._taxAmount,
              shippingAmount: this._shippingAmount,
              totalAmount: this._totalAmount,
              lineItems: this._lineItems
            };
            transactionDetailsPresent = Object.keys(transactionDetails).some(function(detail) {
              return transactionDetails[detail] !== void 0;
            });
            promise = client.request({
              api: "graphQLApi",
              data: {
                query: graphqlQueries.CREATE_PAYMENT_CONTEXT_QUERY,
                variables: {
                  input: {
                    paymentMethodUsage: this._paymentMethodUsage,
                    intent: "CONTINUE",
                    customerClient: customerClientChannel,
                    isFinalAmount: this._isFinalAmount,
                    displayName: this._displayName,
                    paysheetDetails: {
                      collectCustomerBillingAddress: this._collectCustomerBillingAddress,
                      collectCustomerShippingAddress: this._collectCustomerShippingAddress,
                      transactionDetails: transactionDetailsPresent ? transactionDetails : void 0
                      // eslint-disable-line no-undefined
                    }
                  }
                }
              }
            }).then(function(response) {
              return response.data.createVenmoPaymentContext.venmoPaymentContext;
            });
          }
          return promise.then(function(context) {
            var expiredTime = new Date(context.expiresAt) - new Date(context.createdAt);
            var refreshIn = expiredTime * 0.6666;
            clearTimeout(self2._refreshPaymentContextTimeout);
            self2._refreshPaymentContextTimeout = setTimeout(function() {
              if (self2._tokenizationInProgress) {
                return;
              }
              self2._createVenmoPaymentContext(client, true);
            }, refreshIn);
            if (cancelIfTokenizationInProgress && self2._tokenizationInProgress) {
              return;
            }
            self2._venmoPaymentContextStatus = context.status;
            self2._venmoPaymentContextId = context.id;
          });
        };
        Venmo.prototype.appSwitch = function(url) {
          if (this._deepLinkReturnUrl) {
            if (isIosWebviewInDeepLinkReturnUrlFlow()) {
              analytics.sendEvent(
                this._createPromise,
                "venmo.appswitch.start.ios-webview"
              );
              window.location.href = url;
            } else if (window.popupBridge && typeof window.popupBridge.open === "function") {
              analytics.sendEvent(
                this._createPromise,
                "venmo.appswitch.start.popup-bridge"
              );
              window.popupBridge.open(url);
            } else {
              analytics.sendEvent(this._createPromise, "venmo.appswitch.start.webview");
              window.open(url);
            }
          } else {
            analytics.sendEvent(this._createPromise, "venmo.appswitch.start.browser");
            if (browserDetection.doesNotSupportWindowOpenInIos() || this._shouldUseRedirectStrategy()) {
              window.location.href = url;
            } else {
              window.open(url);
            }
          }
        };
        Venmo.prototype.getUrl = function() {
          return this._createPromise.then(
            (function(client) {
              var configuration = client.getConfiguration();
              var params = {};
              var currentUrl = this._deepLinkReturnUrl || window.location.href.replace(window.location.hash, "");
              var venmoConfiguration = configuration.gatewayConfiguration.payWithVenmo;
              var analyticsMetadata = configuration.analyticsMetadata;
              var accessToken = venmoConfiguration.accessToken;
              var braintreeData = {
                _meta: {
                  version: analyticsMetadata.sdkVersion,
                  integration: analyticsMetadata.integration,
                  platform: analyticsMetadata.platform,
                  sessionId: analyticsMetadata.sessionId
                }
              };
              this._isDebug = configuration.isDebug;
              this._assetsUrl = configuration.gatewayConfiguration.assetsUrl;
              currentUrl = currentUrl.replace(/#*$/, "");
              if (this._venmoPaymentContextId) {
                if (this._shouldUseLegacyFlow) {
                  accessToken += "|pcid:" + this._venmoPaymentContextId;
                } else {
                  params.resource_id = this._venmoPaymentContextId;
                }
              }
              if (this._shouldIncludeReturnUrls() || this._useAllowDesktopWebLogin) {
                if (this._useAllowDesktopWebLogin) {
                  currentUrl = this._assetsUrl + "/web/" + VERSION + "/html/redirect-frame.html";
                }
                params["x-success"] = currentUrl + "#venmoSuccess=1";
                params["x-cancel"] = currentUrl + "#venmoCancel=1";
                params["x-error"] = currentUrl + "#venmoError=1";
              } else {
                params["x-success"] = "NOOP";
                params["x-cancel"] = "NOOP";
                params["x-error"] = "NOOP";
              }
              if (!this._allowAndroidRecreation) {
                params.allowAndroidRecreation = 0;
              } else {
                params.allowAndroidRecreation = 1;
              }
              params.ua = window.navigator.userAgent;
              params.braintree_merchant_id = this._profileId || venmoConfiguration.merchantId;
              params.braintree_access_token = accessToken;
              params.braintree_environment = venmoConfiguration.environment;
              params.braintree_sdk_data = btoa(JSON.stringify(braintreeData));
              return getVenmoUrl({
                useAllowDesktopWebLogin: this._useAllowDesktopWebLogin,
                mobileWebFallBack: this._mobileWebFallBack
              }) + "?" + querystring.stringify(params);
            }).bind(this)
          );
        };
        Venmo.prototype.isBrowserSupported = function() {
          return isBrowserSupported.isBrowserSupported({
            allowNewBrowserTab: this._allowNewBrowserTab,
            allowWebviews: this._allowWebviews,
            allowDesktop: this._allowDesktop,
            allowDesktopWebLogin: this._allowDesktopWebLogin
          });
        };
        Venmo.prototype.hasTokenizationResult = function() {
          return this._hasTokenizationResult();
        };
        Venmo.prototype._hasTokenizationResult = function(hash) {
          var params = getFragmentParameters(hash);
          return typeof (params.venmoSuccess || params.venmoError || params.venmoCancel) !== "undefined";
        };
        Venmo.prototype._shouldIncludeReturnUrls = function() {
          if (this._deepLinkReturnUrl) {
            return true;
          }
          return !this._cannotHaveReturnUrls;
        };
        Venmo.prototype._isDesktop = function() {
          return !(browserDetection.isIos() || browserDetection.isAndroid());
        };
        Venmo.prototype.tokenize = function(options) {
          var self2 = this;
          var tokenizationPromise;
          options = options || {};
          if (this._tokenizationInProgress === true) {
            return Promise.reject(
              new BraintreeError(errors.VENMO_TOKENIZATION_REQUEST_ACTIVE)
            );
          }
          this._tokenizationInProgress = true;
          if (this._useDesktopQRFlow) {
            tokenizationPromise = this._tokenizeForDesktopQRFlow(options);
          } else if (this._useAllowDesktopWebLogin) {
            tokenizationPromise = this._tokenizeWebLoginWithRedirect();
          } else if (this._cannotHaveReturnUrls) {
            tokenizationPromise = this._tokenizeForMobileWithManualReturn();
          } else {
            tokenizationPromise = this._tokenizeForMobileWithHashChangeListeners(options);
          }
          return tokenizationPromise.then(function(payload) {
            return self2._createPromise.then(function(client) {
              return self2._createVenmoPaymentContext(client);
            }).then(function() {
              self2._tokenizationInProgress = false;
              return formatTokenizePayload(payload);
            });
          }).catch(function(err) {
            return self2._createPromise.then(function(client) {
              return self2._createVenmoPaymentContext(client);
            }).then(function() {
              self2._tokenizationInProgress = false;
              return Promise.reject(err);
            });
          });
        };
        Venmo.prototype.cancelTokenization = function() {
          if (!this._tokenizationInProgress) {
            return Promise.reject(
              new BraintreeError(errors.VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE)
            );
          }
          this._removeVisibilityEventListener();
          if (this._tokenizePromise) {
            this._tokenizePromise.reject(
              new BraintreeError(errors.VENMO_TOKENIZATION_CANCELED_BY_MERCHANT)
            );
          }
          return Promise.all([
            this._cancelMobilePaymentContext(),
            this._cancelVenmoDesktopContext()
          ]);
        };
        Venmo.prototype._tokenizeWebLoginWithRedirect = function() {
          var self2 = this;
          analytics.sendEvent(self2._createPromise, "venmo.tokenize.web-login.start");
          this._tokenizePromise = new ExtendedPromise();
          return this.getUrl().then(function(url) {
            desktopWebLogin.runWebLogin({
              checkForStatusChange: self2._checkPaymentContextStatusAndProcessResult.bind(self2),
              cancelTokenization: self2.cancelTokenization.bind(self2),
              frameServiceInstance: self2._frameServiceInstance,
              venmoUrl: url,
              debug: self2._isDebug,
              checkPaymentContextStatus: self2._checkPaymentContextStatus.bind(self2)
            }).then(function(payload) {
              analytics.sendEvent(
                self2._createPromise,
                "venmo.tokenize.web-login.success"
              );
              self2._tokenizePromise.resolve({
                paymentMethodNonce: payload.paymentMethodId,
                username: payload.userName,
                payerInfo: payload.payerInfo,
                id: self2._venmoPaymentContextId
              });
            }).catch(function(err) {
              analytics.sendEvent(
                self2._createPromise,
                "venmo.tokenize.web-login.failure"
              );
              self2._tokenizePromise.reject(err);
            });
            return self2._tokenizePromise;
          });
        };
        Venmo.prototype._queryPaymentContextStatus = function(id) {
          var self2 = this;
          return this._createPromise.then(function(client) {
            var query = self2._shouldUseLegacyFlow ? graphqlQueries.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY : graphqlQueries.VENMO_PAYMENT_CONTEXT_STATUS_QUERY;
            return client.request({
              api: "graphQLApi",
              data: {
                query,
                variables: {
                  id
                }
              }
            });
          }).then(function(response) {
            return response.data.node;
          });
        };
        Venmo.prototype._checkPaymentContextStatusAndProcessResult = function(retryCount) {
          var self2 = this;
          return self2._checkPaymentContextStatus().then(function(node) {
            var resultStatus = node.status;
            if (resultStatus !== self2._venmoPaymentContextStatus) {
              self2._venmoPaymentContextStatus = resultStatus;
              analytics.sendEvent(
                self2._createPromise,
                "venmo.tokenize.web-login.status-change"
              );
              switch (resultStatus) {
                case "APPROVED":
                  return Promise.resolve(node);
                case "CANCELED":
                  return Promise.reject(
                    new BraintreeError(errors.VENMO_CUSTOMER_CANCELED)
                  );
                case "FAILED":
                  return Promise.reject(
                    new BraintreeError(errors.VENMO_TOKENIZATION_FAILED)
                  );
                default:
              }
            }
            return new Promise(function(resolve, reject) {
              if (retryCount < self2._maxRetryCount) {
                retryCount++;
                return self2._checkPaymentContextStatusAndProcessResult(retryCount).then(resolve).catch(reject);
              }
              return reject(new BraintreeError(errors.VENMO_TOKENIZATION_FAILED));
            });
          });
        };
        Venmo.prototype._checkPaymentContextStatus = function() {
          var self2 = this;
          return self2._queryPaymentContextStatus(self2._venmoPaymentContextId).catch(function(networkError) {
            return Promise.reject(
              new BraintreeError({
                type: errors.VENMO_NETWORK_ERROR.type,
                code: errors.VENMO_NETWORK_ERROR.code,
                message: errors.VENMO_NETWORK_ERROR.message,
                details: networkError
              })
            );
          }).then(function(node) {
            return Promise.resolve(node);
          });
        };
        Venmo.prototype._pollForStatusChange = function() {
          var self2 = this;
          if (Date.now() > self2._mobilePollingContextExpiresIn) {
            return Promise.reject(
              new BraintreeError(errors.VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT)
            );
          }
          return this._queryPaymentContextStatus(this._venmoPaymentContextId).catch(function(networkError) {
            return Promise.reject(
              new BraintreeError({
                type: errors.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.type,
                code: errors.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.code,
                message: errors.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.message,
                details: {
                  originalError: networkError
                }
              })
            );
          }).then(function(node) {
            var newStatus = node.status;
            if (newStatus !== self2._venmoPaymentContextStatus) {
              self2._venmoPaymentContextStatus = newStatus;
              analytics.sendEvent(
                self2._createPromise,
                "venmo.tokenize.manual-return.status-change." + newStatus.toLowerCase()
              );
              switch (newStatus) {
                case "EXPIRED":
                case "FAILED":
                case "CANCELED":
                  return Promise.reject(
                    new BraintreeError(
                      errors["VENMO_MOBILE_POLLING_TOKENIZATION_" + newStatus]
                    )
                  );
                case "APPROVED":
                  return Promise.resolve(node);
                case "CREATED":
                case "SCANNED":
                default:
              }
            }
            return new Promise(function(resolve, reject) {
              setTimeout(function() {
                self2._pollForStatusChange().then(resolve).catch(reject);
              }, self2._mobilePollingInterval);
            });
          });
        };
        Venmo.prototype._tokenizeForMobileWithManualReturn = function() {
          var self2 = this;
          analytics.sendEvent(
            this._createPromise,
            "venmo.tokenize.manual-return.start"
          );
          this._mobilePollingContextExpiresIn = Date.now() + this._mobilePollingExpiresThreshold;
          this._tokenizePromise = new ExtendedPromise();
          this._pollForStatusChange().then(function(payload) {
            analytics.sendEvent(
              self2._createPromise,
              "venmo.tokenize.manual-return.success"
            );
            self2._tokenizePromise.resolve({
              paymentMethodNonce: payload.paymentMethodId,
              username: payload.userName,
              payerInfo: payload.payerInfo,
              id: self2._venmoPaymentContextId
            });
          }).catch(function(err) {
            analytics.sendEvent(
              self2._createPromise,
              "venmo.tokenize.manual-return.failure"
            );
            self2._tokenizePromise.reject(err);
          });
          return this.getUrl().then(function(url) {
            self2.appSwitch(url);
            return self2._tokenizePromise;
          });
        };
        Venmo.prototype._shouldUseRedirectStrategy = function() {
          if (!browserDetection.isIos()) {
            return false;
          }
          if (this._mobileWebFallBack === true) {
            return true;
          }
          return this._useRedirectForIOS;
        };
        Venmo.prototype._tokenizeForMobileWithHashChangeListeners = function(options) {
          var self2 = this;
          var resultProcessingInProgress, visibilityChangeListenerTimeout;
          if (this.hasTokenizationResult()) {
            return this.processHashChangeFlowResults();
          }
          analytics.sendEvent(this._createPromise, "venmo.tokenize.mobile.start");
          this._tokenizePromise = new ExtendedPromise();
          this._previousHash = window.location.hash;
          function completeFlow(hash) {
            var error;
            self2.processHashChangeFlowResults(hash).catch(function(err) {
              error = err;
            }).then(function(res) {
              if (!self2._ignoreHistoryChanges && window.location.hash !== self2._previousHash) {
                window.location.hash = self2._previousHash;
              }
              self2._removeVisibilityEventListener();
              if (error) {
                self2._tokenizePromise.reject(error);
              } else {
                self2._tokenizePromise.resolve(res);
              }
              delete self2._tokenizePromise;
            });
          }
          this._onHashChangeListener = function(e) {
            var hash = e.newURL.split("#")[1];
            if (!self2._hasTokenizationResult(hash)) {
              return;
            }
            resultProcessingInProgress = true;
            clearTimeout(visibilityChangeListenerTimeout);
            completeFlow(hash);
          };
          window.addEventListener("hashchange", this._onHashChangeListener, false);
          this._visibilityChangeListener = function() {
            var delay = options.processResultsDelay || constants.DEFAULT_PROCESS_RESULTS_DELAY;
            if (!window.document.hidden) {
              if (!resultProcessingInProgress) {
                visibilityChangeListenerTimeout = setTimeout(completeFlow, delay);
              }
            }
          };
          return this.getUrl().then(function(url) {
            self2.appSwitch(url);
            setTimeout(function() {
              window.document.addEventListener(
                documentVisibilityChangeEventName(),
                self2._visibilityChangeListener
              );
            }, constants.DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY);
            return self2._tokenizePromise;
          });
        };
        Venmo.prototype._tokenizeForDesktopQRFlow = function() {
          var self2 = this;
          analytics.sendEvent(this._createPromise, "venmo.tokenize.desktop.start");
          this._tokenizePromise = new ExtendedPromise();
          this._createPromise.then(function() {
            return self2._venmoDesktopInstance.launchDesktopFlow();
          }).then(function(payload) {
            self2._venmoDesktopInstance.hideDesktopFlow();
            analytics.sendEvent(
              self2._createPromise,
              "venmo.tokenize.desktop.success"
            );
            self2._tokenizePromise.resolve(payload);
          }).catch(function(err) {
            analytics.sendEvent(
              self2._createPromise,
              "venmo.tokenize.desktop.failure"
            );
            if (self2._venmoDesktopInstance) {
              self2._venmoDesktopInstance.hideDesktopFlow();
            }
            if (err && err.reason === "CUSTOMER_CANCELED") {
              self2._tokenizePromise.reject(
                new BraintreeError(errors.VENMO_DESKTOP_CANCELED)
              );
              return;
            }
            self2._tokenizePromise.reject(
              new BraintreeError({
                type: errors.VENMO_DESKTOP_UNKNOWN_ERROR.type,
                code: errors.VENMO_DESKTOP_UNKNOWN_ERROR.code,
                message: errors.VENMO_DESKTOP_UNKNOWN_ERROR.message,
                details: {
                  originalError: err
                }
              })
            );
          });
          return this._tokenizePromise;
        };
        Venmo.prototype._cancelMobilePaymentContext = function() {
          var self2 = this;
          return this._createPromise.then(function(client) {
            var query;
            if (self2._venmoPaymentContextId) {
              query = self2._shouldUseLegacyFlow ? graphqlQueries.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY : graphqlQueries.UPDATE_PAYMENT_CONTEXT_QUERY;
              return client.request({
                api: "graphQLApi",
                data: {
                  query,
                  variables: {
                    input: {
                      id: self2._venmoPaymentContextId,
                      status: "CANCELED"
                    }
                  }
                }
              });
            }
            return Promise.resolve();
          });
        };
        Venmo.prototype._cancelVenmoDesktopContext = function() {
          var self2 = this;
          return this._createPromise.then(function() {
            if (self2._venmoDesktopInstance) {
              self2._venmoDesktopInstance.updateVenmoDesktopPaymentContext("CANCELED");
            }
            return Promise.resolve();
          });
        };
        Venmo.prototype.teardown = function() {
          var self2 = this;
          this._removeVisibilityEventListener();
          return this._createPromise.then(
            (function() {
              if (self2._venmoDesktopInstance) {
                self2._venmoDesktopInstance.teardown();
              }
              clearTimeout(self2._refreshPaymentContextTimeout);
              self2._cancelMobilePaymentContext();
              convertMethodsToError(this, methods(Venmo.prototype));
            }).bind(this)
          );
        };
        Venmo.prototype._removeVisibilityEventListener = function() {
          window.removeEventListener("hashchange", this._onHashChangeListener);
          window.document.removeEventListener(
            documentVisibilityChangeEventName(),
            this._visibilityChangeListener
          );
          delete this._visibilityChangeListener;
          delete this._onHashChangeListener;
        };
        Venmo.prototype.processHashChangeFlowResults = function(hash) {
          var self2 = this;
          var params = getFragmentParameters(hash);
          return new Promise(function(resolve, reject) {
            if (!self2._shouldUseLegacyFlow) {
              self2._pollForStatusChange().then(function(payload) {
                analytics.sendEvent(
                  self2._createPromise,
                  "venmo.appswitch.handle.payment-context-status-query.success"
                );
                return resolve({
                  paymentMethodNonce: payload.paymentMethodId,
                  username: payload.userName,
                  payerInfo: payload.payerInfo,
                  id: self2._venmoPaymentContextId
                });
              }).catch(function(err) {
                if (err.type === errors.VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED.type) {
                  reject(err);
                }
                analytics.sendEvent(
                  self2._createPromise,
                  "venmo.process-results.payment-context-status-query-failed"
                );
                resolve(params);
              });
            } else if (params.venmoSuccess) {
              analytics.sendEvent(
                self2._createPromise,
                "venmo.appswitch.handle.success"
              );
              resolve(params);
            } else if (params.venmoError) {
              analytics.sendEvent(self2._createPromise, "venmo.appswitch.handle.error");
              reject(
                new BraintreeError({
                  type: errors.VENMO_APP_FAILED.type,
                  code: errors.VENMO_APP_FAILED.code,
                  message: errors.VENMO_APP_FAILED.message,
                  details: {
                    originalError: {
                      message: decodeURIComponent(params.errorMessage),
                      code: params.errorCode
                    }
                  }
                })
              );
            } else if (params.venmoCancel) {
              analytics.sendEvent(self2._createPromise, "venmo.appswitch.handle.cancel");
              reject(new BraintreeError(errors.VENMO_APP_CANCELED));
            } else {
              analytics.sendEvent(
                self2._createPromise,
                "venmo.appswitch.cancel-or-unavailable"
              );
              reject(new BraintreeError(errors.VENMO_CANCELED));
            }
            self2._clearFragmentParameters();
          });
        };
        Venmo.prototype._clearFragmentParameters = function() {
          if (this._ignoreHistoryChanges) {
            return;
          }
          if (typeof window.history.replaceState === "function" && window.location.hash) {
            history.pushState(
              {},
              "",
              window.location.href.slice(0, window.location.href.indexOf("#"))
            );
          }
        };
        function getFragmentParameters(hash) {
          var keyValuesArray = (hash || window.location.hash.substring(1)).split("&");
          var parsedParams = keyValuesArray.reduce(function(toReturn, keyValue) {
            var parts = keyValue.split("=");
            var decodedKey = decodeURIComponent(parts[0]).replace(/\W/g, "");
            var key = snakeCaseToCamelCase(decodedKey);
            var value = decodeURIComponent(parts[1]);
            toReturn[key] = value;
            return toReturn;
          }, {});
          if (parsedParams.resourceId) {
            parsedParams.id = parsedParams.resourceId;
          }
          return parsedParams;
        }
        function formatUserName(username) {
          username = username || "";
          return "@" + username.replace("@", "");
        }
        function formatTokenizePayload(payload) {
          var formattedPayload = {
            nonce: payload.paymentMethodNonce,
            type: "VenmoAccount",
            details: {
              username: formatUserName(payload.username),
              paymentContextId: payload.id
            }
          };
          if (payload.payerInfo) {
            formattedPayload.details.payerInfo = payload.payerInfo;
            formattedPayload.details.payerInfo.userName = formatUserName(
              payload.payerInfo.userName
            );
          }
          return formattedPayload;
        }
        function documentVisibilityChangeEventName() {
          var visibilityChange;
          if (typeof window.document.hidden !== "undefined") {
            visibilityChange = "visibilitychange";
          } else if (typeof window.document.msHidden !== "undefined") {
            visibilityChange = "msvisibilitychange";
          } else if (typeof window.document.webkitHidden !== "undefined") {
            visibilityChange = "webkitvisibilitychange";
          }
          return visibilityChange;
        }
        function isIosWebviewInDeepLinkReturnUrlFlow() {
          return window.navigator.platform && /iPhone|iPad|iPod/.test(window.navigator.platform);
        }
        module3.exports = wrapPromise.wrapPrototype(Venmo);
      }, { "../lib/analytics": 85, "../lib/braintree-error": 90, "../lib/convert-methods-to-error": 92, "../lib/in-iframe": 115, "../lib/is-verified-domain": 118, "../lib/methods": 120, "../lib/querystring": 122, "../lib/snake-case-to-camel-case": 124, "./external/": 146, "./external/queries": 147, "./shared/browser-detection": 150, "./shared/constants": 151, "./shared/errors": 152, "./shared/get-venmo-url": 154, "./shared/supports-venmo": 155, "./shared/web-login-backdrop": 156, "@braintree/extended-promise": 37, "@braintree/wrap-promise": 46 }], 158: [function(require2, module3, exports3) {
        "use strict";
        var __assign = this && this.__assign || function() {
          __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                  t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        var cardTypes = require2("./lib/card-types");
        var add_matching_cards_to_results_1 = require2("./lib/add-matching-cards-to-results");
        var is_valid_input_type_1 = require2("./lib/is-valid-input-type");
        var find_best_match_1 = require2("./lib/find-best-match");
        var clone_1 = require2("./lib/clone");
        var customCards = {};
        var cardNames = {
          VISA: "visa",
          MASTERCARD: "mastercard",
          AMERICAN_EXPRESS: "american-express",
          DINERS_CLUB: "diners-club",
          DISCOVER: "discover",
          JCB: "jcb",
          UNIONPAY: "unionpay",
          MAESTRO: "maestro",
          ELO: "elo",
          MIR: "mir",
          HIPER: "hiper",
          HIPERCARD: "hipercard"
        };
        var ORIGINAL_TEST_ORDER = [
          cardNames.VISA,
          cardNames.MASTERCARD,
          cardNames.AMERICAN_EXPRESS,
          cardNames.DINERS_CLUB,
          cardNames.DISCOVER,
          cardNames.JCB,
          cardNames.UNIONPAY,
          cardNames.MAESTRO,
          cardNames.ELO,
          cardNames.MIR,
          cardNames.HIPER,
          cardNames.HIPERCARD
        ];
        var testOrder = (0, clone_1.clone)(ORIGINAL_TEST_ORDER);
        function findType(cardType) {
          return customCards[cardType] || cardTypes[cardType];
        }
        function getAllCardTypes() {
          return testOrder.map(function(cardType) {
            return (0, clone_1.clone)(findType(cardType));
          });
        }
        function getCardPosition(name, ignoreErrorForNotExisting) {
          if (ignoreErrorForNotExisting === void 0) {
            ignoreErrorForNotExisting = false;
          }
          var position = testOrder.indexOf(name);
          if (!ignoreErrorForNotExisting && position === -1) {
            throw new Error('"' + name + '" is not a supported card type.');
          }
          return position;
        }
        function creditCardType(cardNumber) {
          var results = [];
          if (!(0, is_valid_input_type_1.isValidInputType)(cardNumber)) {
            return results;
          }
          if (cardNumber.length === 0) {
            return getAllCardTypes();
          }
          testOrder.forEach(function(cardType) {
            var cardConfiguration = findType(cardType);
            (0, add_matching_cards_to_results_1.addMatchingCardsToResults)(cardNumber, cardConfiguration, results);
          });
          var bestMatch = (0, find_best_match_1.findBestMatch)(results);
          if (bestMatch) {
            return [bestMatch];
          }
          return results;
        }
        creditCardType.getTypeInfo = function(cardType) {
          return (0, clone_1.clone)(findType(cardType));
        };
        creditCardType.removeCard = function(name) {
          var position = getCardPosition(name);
          testOrder.splice(position, 1);
        };
        creditCardType.addCard = function(config) {
          var existingCardPosition = getCardPosition(config.type, true);
          customCards[config.type] = config;
          if (existingCardPosition === -1) {
            testOrder.push(config.type);
          }
        };
        creditCardType.updateCard = function(cardType, updates) {
          var originalObject = customCards[cardType] || cardTypes[cardType];
          if (!originalObject) {
            throw new Error('"'.concat(cardType, "\" is not a recognized type. Use `addCard` instead.'"));
          }
          if (updates.type && originalObject.type !== updates.type) {
            throw new Error("Cannot overwrite type parameter.");
          }
          var clonedCard = (0, clone_1.clone)(originalObject);
          clonedCard = __assign(__assign({}, clonedCard), updates);
          customCards[clonedCard.type] = clonedCard;
        };
        creditCardType.changeOrder = function(name, position) {
          var currentPosition = getCardPosition(name);
          testOrder.splice(currentPosition, 1);
          testOrder.splice(position, 0, name);
        };
        creditCardType.resetModifications = function() {
          testOrder = (0, clone_1.clone)(ORIGINAL_TEST_ORDER);
          customCards = {};
        };
        creditCardType.types = cardNames;
        module3.exports = creditCardType;
      }, { "./lib/add-matching-cards-to-results": 159, "./lib/card-types": 160, "./lib/clone": 161, "./lib/find-best-match": 162, "./lib/is-valid-input-type": 163 }], 159: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.addMatchingCardsToResults = void 0;
        var clone_1 = require2("./clone");
        var matches_1 = require2("./matches");
        function addMatchingCardsToResults(cardNumber, cardConfiguration, results) {
          var i, patternLength;
          for (i = 0; i < cardConfiguration.patterns.length; i++) {
            var pattern = cardConfiguration.patterns[i];
            if (!(0, matches_1.matches)(cardNumber, pattern)) {
              continue;
            }
            var clonedCardConfiguration = (0, clone_1.clone)(cardConfiguration);
            if (Array.isArray(pattern)) {
              patternLength = String(pattern[0]).length;
            } else {
              patternLength = String(pattern).length;
            }
            if (cardNumber.length >= patternLength) {
              clonedCardConfiguration.matchStrength = patternLength;
            }
            results.push(clonedCardConfiguration);
            break;
          }
        }
        exports3.addMatchingCardsToResults = addMatchingCardsToResults;
      }, { "./clone": 161, "./matches": 164 }], 160: [function(require2, module3, exports3) {
        "use strict";
        var cardTypes = {
          visa: {
            niceType: "Visa",
            type: "visa",
            patterns: [4],
            gaps: [4, 8, 12],
            lengths: [16, 18, 19],
            code: {
              name: "CVV",
              size: 3
            }
          },
          mastercard: {
            niceType: "Mastercard",
            type: "mastercard",
            patterns: [[51, 55], [2221, 2229], [223, 229], [23, 26], [270, 271], 2720],
            gaps: [4, 8, 12],
            lengths: [16],
            code: {
              name: "CVC",
              size: 3
            }
          },
          "american-express": {
            niceType: "American Express",
            type: "american-express",
            patterns: [34, 37],
            gaps: [4, 10],
            lengths: [15],
            code: {
              name: "CID",
              size: 4
            }
          },
          "diners-club": {
            niceType: "Diners Club",
            type: "diners-club",
            patterns: [[300, 305], 36, 38, 39],
            gaps: [4, 10],
            lengths: [14, 16, 19],
            code: {
              name: "CVV",
              size: 3
            }
          },
          discover: {
            niceType: "Discover",
            type: "discover",
            patterns: [6011, [644, 649], 65],
            gaps: [4, 8, 12],
            lengths: [16, 19],
            code: {
              name: "CID",
              size: 3
            }
          },
          jcb: {
            niceType: "JCB",
            type: "jcb",
            patterns: [2131, 1800, [3528, 3589]],
            gaps: [4, 8, 12],
            lengths: [16, 17, 18, 19],
            code: {
              name: "CVV",
              size: 3
            }
          },
          unionpay: {
            niceType: "UnionPay",
            type: "unionpay",
            patterns: [
              620,
              [62100, 62182],
              [62184, 62187],
              [62185, 62197],
              [62200, 62205],
              [622010, 622999],
              622018,
              [62207, 62209],
              [623, 626],
              6270,
              6272,
              6276,
              [627700, 627779],
              [627781, 627799],
              [6282, 6289],
              6291,
              6292,
              810,
              [8110, 8131],
              [8132, 8151],
              [8152, 8163],
              [8164, 8171]
            ],
            gaps: [4, 8, 12],
            lengths: [14, 15, 16, 17, 18, 19],
            code: {
              name: "CVN",
              size: 3
            }
          },
          maestro: {
            niceType: "Maestro",
            type: "maestro",
            patterns: [
              493698,
              [5e5, 504174],
              [504176, 506698],
              [506779, 508999],
              [56, 59],
              63,
              67,
              6
            ],
            gaps: [4, 8, 12],
            lengths: [12, 13, 14, 15, 16, 17, 18, 19],
            code: {
              name: "CVC",
              size: 3
            }
          },
          elo: {
            niceType: "Elo",
            type: "elo",
            patterns: [
              401178,
              401179,
              438935,
              457631,
              457632,
              431274,
              451416,
              457393,
              504175,
              [506699, 506778],
              [509e3, 509999],
              627780,
              636297,
              636368,
              [650031, 650033],
              [650035, 650051],
              [650405, 650439],
              [650485, 650538],
              [650541, 650598],
              [650700, 650718],
              [650720, 650727],
              [650901, 650978],
              [651652, 651679],
              [655e3, 655019],
              [655021, 655058]
            ],
            gaps: [4, 8, 12],
            lengths: [16],
            code: {
              name: "CVE",
              size: 3
            }
          },
          mir: {
            niceType: "Mir",
            type: "mir",
            patterns: [[2200, 2204]],
            gaps: [4, 8, 12],
            lengths: [16, 17, 18, 19],
            code: {
              name: "CVP2",
              size: 3
            }
          },
          hiper: {
            niceType: "Hiper",
            type: "hiper",
            patterns: [637095, 63737423, 63743358, 637568, 637599, 637609, 637612],
            gaps: [4, 8, 12],
            lengths: [16],
            code: {
              name: "CVC",
              size: 3
            }
          },
          hipercard: {
            niceType: "Hipercard",
            type: "hipercard",
            patterns: [606282],
            gaps: [4, 8, 12],
            lengths: [16],
            code: {
              name: "CVC",
              size: 3
            }
          }
        };
        module3.exports = cardTypes;
      }, {}], 161: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.clone = void 0;
        function clone(originalObject) {
          if (!originalObject) {
            return null;
          }
          return JSON.parse(JSON.stringify(originalObject));
        }
        exports3.clone = clone;
      }, {}], 162: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.findBestMatch = void 0;
        function hasEnoughResultsToDetermineBestMatch(results) {
          var numberOfResultsWithMaxStrengthProperty = results.filter(function(result) {
            return result.matchStrength;
          }).length;
          return numberOfResultsWithMaxStrengthProperty > 0 && numberOfResultsWithMaxStrengthProperty === results.length;
        }
        function findBestMatch(results) {
          if (!hasEnoughResultsToDetermineBestMatch(results)) {
            return null;
          }
          return results.reduce(function(bestMatch, result) {
            if (!bestMatch) {
              return result;
            }
            if (Number(bestMatch.matchStrength) < Number(result.matchStrength)) {
              return result;
            }
            return bestMatch;
          });
        }
        exports3.findBestMatch = findBestMatch;
      }, {}], 163: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.isValidInputType = void 0;
        function isValidInputType(cardNumber) {
          return typeof cardNumber === "string" || cardNumber instanceof String;
        }
        exports3.isValidInputType = isValidInputType;
      }, {}], 164: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.matches = void 0;
        function matchesRange(cardNumber, min, max) {
          var maxLengthToCheck = String(min).length;
          var substr = cardNumber.substr(0, maxLengthToCheck);
          var integerRepresentationOfCardNumber = parseInt(substr, 10);
          min = parseInt(String(min).substr(0, substr.length), 10);
          max = parseInt(String(max).substr(0, substr.length), 10);
          return integerRepresentationOfCardNumber >= min && integerRepresentationOfCardNumber <= max;
        }
        function matchesPattern(cardNumber, pattern) {
          pattern = String(pattern);
          return pattern.substring(0, cardNumber.length) === cardNumber.substring(0, pattern.length);
        }
        function matches(cardNumber, pattern) {
          if (Array.isArray(pattern)) {
            return matchesRange(cardNumber, pattern[0], pattern[1]);
          }
          return matchesPattern(cardNumber, pattern);
        }
        exports3.matches = matches;
      }, {}], 165: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.Framebus = void 0;
        var lib_1 = require2("./lib");
        var DefaultPromise = typeof window !== "undefined" && window.Promise;
        var Framebus = (
          /** @class */
          function() {
            function Framebus2(options) {
              if (options === void 0) {
                options = {};
              }
              this.origin = options.origin || "*";
              this.channel = options.channel || "";
              this.verifyDomain = options.verifyDomain;
              this.targetFrames = options.targetFrames || [];
              this.limitBroadcastToFramesArray = Boolean(options.targetFrames);
              this.isDestroyed = false;
              this.listeners = [];
              this.hasAdditionalChecksForOnListeners = Boolean(this.verifyDomain || this.limitBroadcastToFramesArray);
            }
            Framebus2.setPromise = function(PromiseGlobal) {
              Framebus2.Promise = PromiseGlobal;
            };
            Framebus2.target = function(options) {
              return new Framebus2(options);
            };
            Framebus2.prototype.addTargetFrame = function(frame) {
              if (!this.limitBroadcastToFramesArray) {
                return;
              }
              this.targetFrames.push(frame);
            };
            Framebus2.prototype.include = function(childWindow) {
              if (childWindow == null) {
                return false;
              }
              if (childWindow.Window == null) {
                return false;
              }
              if (childWindow.constructor !== childWindow.Window) {
                return false;
              }
              lib_1.childWindows.push(childWindow);
              return true;
            };
            Framebus2.prototype.target = function(options) {
              return Framebus2.target(options);
            };
            Framebus2.prototype.emit = function(eventName, data, reply) {
              if (this.isDestroyed) {
                return false;
              }
              var origin = this.origin;
              eventName = this.namespaceEvent(eventName);
              if ((0, lib_1.isntString)(eventName)) {
                return false;
              }
              if ((0, lib_1.isntString)(origin)) {
                return false;
              }
              if (typeof data === "function") {
                reply = data;
                data = void 0;
              }
              var payload = (0, lib_1.packagePayload)(eventName, origin, data, reply);
              if (!payload) {
                return false;
              }
              if (this.limitBroadcastToFramesArray) {
                this.targetFramesAsWindows().forEach(function(frame) {
                  (0, lib_1.sendMessage)(frame, payload, origin);
                });
              } else {
                (0, lib_1.broadcast)(payload, {
                  origin,
                  frame: window.top || window.self
                });
              }
              return true;
            };
            Framebus2.prototype.emitAsPromise = function(eventName, data) {
              var _this = this;
              return new Framebus2.Promise(function(resolve, reject) {
                var didAttachListener = _this.emit(eventName, data, function(payload) {
                  resolve(payload);
                });
                if (!didAttachListener) {
                  reject(new Error('Listener not added for "'.concat(eventName, '"')));
                }
              });
            };
            Framebus2.prototype.on = function(eventName, originalHandler) {
              if (this.isDestroyed) {
                return false;
              }
              var self2 = this;
              var origin = this.origin;
              var handler = originalHandler;
              eventName = this.namespaceEvent(eventName);
              if ((0, lib_1.subscriptionArgsInvalid)(eventName, handler, origin)) {
                return false;
              }
              if (this.hasAdditionalChecksForOnListeners) {
                handler = function() {
                  var args = [];
                  for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                  }
                  if (!self2.passesVerifyDomainCheck(this && this.origin)) {
                    return;
                  }
                  if (!self2.hasMatchingTargetFrame(this && this.source)) {
                    return;
                  }
                  originalHandler.apply(void 0, args);
                };
              }
              this.listeners.push({
                eventName,
                handler,
                originalHandler
              });
              lib_1.subscribers[origin] = lib_1.subscribers[origin] || {};
              lib_1.subscribers[origin][eventName] = lib_1.subscribers[origin][eventName] || [];
              lib_1.subscribers[origin][eventName].push(handler);
              return true;
            };
            Framebus2.prototype.off = function(eventName, originalHandler) {
              var handler = originalHandler;
              if (this.isDestroyed) {
                return false;
              }
              if (this.verifyDomain) {
                for (var i = 0; i < this.listeners.length; i++) {
                  var listener = this.listeners[i];
                  if (listener.originalHandler === originalHandler) {
                    handler = listener.handler;
                  }
                }
              }
              eventName = this.namespaceEvent(eventName);
              var origin = this.origin;
              if ((0, lib_1.subscriptionArgsInvalid)(eventName, handler, origin)) {
                return false;
              }
              var subscriberList = lib_1.subscribers[origin] && lib_1.subscribers[origin][eventName];
              if (!subscriberList) {
                return false;
              }
              for (var i = 0; i < subscriberList.length; i++) {
                if (subscriberList[i] === handler) {
                  subscriberList.splice(i, 1);
                  return true;
                }
              }
              return false;
            };
            Framebus2.prototype.teardown = function() {
              if (this.isDestroyed) {
                return;
              }
              this.isDestroyed = true;
              for (var i = 0; i < this.listeners.length; i++) {
                var listener = this.listeners[i];
                this.off(listener.eventName, listener.handler);
              }
              this.listeners.length = 0;
            };
            Framebus2.prototype.passesVerifyDomainCheck = function(origin) {
              if (!this.verifyDomain) {
                return true;
              }
              return this.checkOrigin(origin);
            };
            Framebus2.prototype.targetFramesAsWindows = function() {
              if (!this.limitBroadcastToFramesArray) {
                return [];
              }
              return this.targetFrames.map(function(frame) {
                if (frame instanceof HTMLIFrameElement) {
                  return frame.contentWindow;
                }
                return frame;
              }).filter(function(win) {
                return win;
              });
            };
            Framebus2.prototype.hasMatchingTargetFrame = function(source) {
              if (!this.limitBroadcastToFramesArray) {
                return true;
              }
              var matchingFrame = this.targetFramesAsWindows().find(function(frame) {
                return frame === source;
              });
              return Boolean(matchingFrame);
            };
            Framebus2.prototype.checkOrigin = function(postMessageOrigin) {
              var merchantHost;
              var a = document.createElement("a");
              a.href = location.href;
              if (a.protocol === "https:") {
                merchantHost = a.host.replace(/:443$/, "");
              } else if (a.protocol === "http:") {
                merchantHost = a.host.replace(/:80$/, "");
              } else {
                merchantHost = a.host;
              }
              var merchantOrigin = a.protocol + "//" + merchantHost;
              if (merchantOrigin === postMessageOrigin) {
                return true;
              }
              if (this.verifyDomain) {
                return this.verifyDomain(postMessageOrigin);
              }
              return true;
            };
            Framebus2.prototype.namespaceEvent = function(eventName) {
              if (!this.channel) {
                return eventName;
              }
              return "".concat(this.channel, ":").concat(eventName);
            };
            Framebus2.Promise = DefaultPromise;
            return Framebus2;
          }()
        );
        exports3.Framebus = Framebus;
      }, { "./lib": 173 }], 166: [function(require2, module3, exports3) {
        "use strict";
        var lib_1 = require2("./lib");
        var framebus_1 = require2("./framebus");
        (0, lib_1.attach)();
        module3.exports = framebus_1.Framebus;
      }, { "./framebus": 165, "./lib": 173 }], 167: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.detach = exports3.attach = void 0;
        var _1 = require2("./");
        var isAttached = false;
        function attach() {
          if (isAttached || typeof window === "undefined") {
            return;
          }
          isAttached = true;
          window.addEventListener("message", _1.onMessage, false);
        }
        exports3.attach = attach;
        function detach() {
          isAttached = false;
          window.removeEventListener("message", _1.onMessage, false);
        }
        exports3.detach = detach;
      }, { "./": 173 }], 168: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.broadcastToChildWindows = void 0;
        var _1 = require2("./");
        function broadcastToChildWindows(payload, origin, source) {
          for (var i = _1.childWindows.length - 1; i >= 0; i--) {
            var childWindow = _1.childWindows[i];
            if (childWindow.closed) {
              _1.childWindows.splice(i, 1);
            } else if (source !== childWindow) {
              (0, _1.broadcast)(payload, {
                origin,
                frame: childWindow.top
              });
            }
          }
        }
        exports3.broadcastToChildWindows = broadcastToChildWindows;
      }, { "./": 173 }], 169: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.broadcast = void 0;
        var _1 = require2("./");
        function broadcast(payload, options) {
          var i = 0;
          var frameToBroadcastTo;
          var origin = options.origin, frame = options.frame;
          try {
            frame.postMessage(payload, origin);
            if ((0, _1.hasOpener)(frame) && frame.opener.top !== window.top) {
              broadcast(payload, {
                origin,
                frame: frame.opener.top
              });
            }
            while (frameToBroadcastTo = frame.frames[i]) {
              broadcast(payload, {
                origin,
                frame: frameToBroadcastTo
              });
              i++;
            }
          } catch (_) {
          }
        }
        exports3.broadcast = broadcast;
      }, { "./": 173 }], 170: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.subscribers = exports3.childWindows = exports3.prefix = void 0;
        exports3.prefix = "/*framebus*/";
        exports3.childWindows = [];
        exports3.subscribers = {};
      }, {}], 171: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.dispatch = void 0;
        var _1 = require2("./");
        function dispatch(origin, event, data, reply, e) {
          if (!_1.subscribers[origin]) {
            return;
          }
          if (!_1.subscribers[origin][event]) {
            return;
          }
          var args = [];
          if (data) {
            args.push(data);
          }
          if (reply) {
            args.push(reply);
          }
          for (var i = 0; i < _1.subscribers[origin][event].length; i++) {
            _1.subscribers[origin][event][i].apply(e, args);
          }
        }
        exports3.dispatch = dispatch;
      }, { "./": 173 }], 172: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.hasOpener = void 0;
        function hasOpener(frame) {
          if (frame.top !== frame) {
            return false;
          }
          if (frame.opener == null) {
            return false;
          }
          if (frame.opener === frame) {
            return false;
          }
          if (frame.opener.closed === true) {
            return false;
          }
          return true;
        }
        exports3.hasOpener = hasOpener;
      }, {}], 173: [function(require2, module3, exports3) {
        "use strict";
        var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          var desc = Object.getOwnPropertyDescriptor(m, k);
          if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() {
              return m[k];
            } };
          }
          Object.defineProperty(o, k2, desc);
        } : function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          o[k2] = m[k];
        });
        var __exportStar = this && this.__exportStar || function(m, exports4) {
          for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports4, p))
              __createBinding(exports4, m, p);
        };
        Object.defineProperty(exports3, "__esModule", { value: true });
        __exportStar(require2("./attach"), exports3);
        __exportStar(require2("./broadcast-to-child-windows"), exports3);
        __exportStar(require2("./broadcast"), exports3);
        __exportStar(require2("./constants"), exports3);
        __exportStar(require2("./dispatch"), exports3);
        __exportStar(require2("./has-opener"), exports3);
        __exportStar(require2("./is-not-string"), exports3);
        __exportStar(require2("./message"), exports3);
        __exportStar(require2("./package-payload"), exports3);
        __exportStar(require2("./send-message"), exports3);
        __exportStar(require2("./subscribe-replier"), exports3);
        __exportStar(require2("./subscription-args-invalid"), exports3);
        __exportStar(require2("./types"), exports3);
        __exportStar(require2("./unpack-payload"), exports3);
      }, { "./attach": 167, "./broadcast": 169, "./broadcast-to-child-windows": 168, "./constants": 170, "./dispatch": 171, "./has-opener": 172, "./is-not-string": 174, "./message": 175, "./package-payload": 176, "./send-message": 177, "./subscribe-replier": 178, "./subscription-args-invalid": 179, "./types": 180, "./unpack-payload": 181 }], 174: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.isntString = void 0;
        function isntString(str) {
          return typeof str !== "string";
        }
        exports3.isntString = isntString;
      }, {}], 175: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.onMessage = void 0;
        var _1 = require2("./");
        function onMessage(e) {
          if ((0, _1.isntString)(e.data)) {
            return;
          }
          var payload = (0, _1.unpackPayload)(e);
          if (!payload) {
            return;
          }
          var data = payload.eventData;
          var reply = payload.reply;
          (0, _1.dispatch)("*", payload.event, data, reply, e);
          (0, _1.dispatch)(e.origin, payload.event, data, reply, e);
          (0, _1.broadcastToChildWindows)(e.data, payload.origin, e.source);
        }
        exports3.onMessage = onMessage;
      }, { "./": 173 }], 176: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.packagePayload = void 0;
        var _1 = require2("./");
        function packagePayload(event, origin, data, reply) {
          var packaged;
          var payload = {
            event,
            origin
          };
          if (typeof reply === "function") {
            payload.reply = (0, _1.subscribeReplier)(reply, origin);
          }
          payload.eventData = data;
          try {
            packaged = _1.prefix + JSON.stringify(payload);
          } catch (e) {
            throw new Error("Could not stringify event: ".concat(e.message));
          }
          return packaged;
        }
        exports3.packagePayload = packagePayload;
      }, { "./": 173 }], 177: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.sendMessage = void 0;
        function sendMessage(frame, payload, origin) {
          try {
            frame.postMessage(payload, origin);
          } catch (error) {
          }
        }
        exports3.sendMessage = sendMessage;
      }, {}], 178: [function(require2, module3, exports3) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.subscribeReplier = void 0;
        var framebus_1 = require2("../framebus");
        var uuid_1 = __importDefault(require2("@braintree/uuid"));
        function subscribeReplier(fn, origin) {
          var uuid = (0, uuid_1.default)();
          function replier(data, replyOriginHandler) {
            fn(data, replyOriginHandler);
            framebus_1.Framebus.target({
              origin
            }).off(uuid, replier);
          }
          framebus_1.Framebus.target({
            origin
          }).on(uuid, replier);
          return uuid;
        }
        exports3.subscribeReplier = subscribeReplier;
      }, { "../framebus": 165, "@braintree/uuid": 182 }], 179: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.subscriptionArgsInvalid = void 0;
        var _1 = require2("./");
        function subscriptionArgsInvalid(event, fn, origin) {
          if ((0, _1.isntString)(event)) {
            return true;
          }
          if (typeof fn !== "function") {
            return true;
          }
          return (0, _1.isntString)(origin);
        }
        exports3.subscriptionArgsInvalid = subscriptionArgsInvalid;
      }, { "./": 173 }], 180: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
      }, {}], 181: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.unpackPayload = void 0;
        var _1 = require2("./");
        function unpackPayload(e) {
          var payload;
          if (e.data.slice(0, _1.prefix.length) !== _1.prefix) {
            return false;
          }
          try {
            payload = JSON.parse(e.data.slice(_1.prefix.length));
          } catch (err) {
            return false;
          }
          if (payload.reply) {
            var replyOrigin_1 = e.origin;
            var replySource_1 = e.source;
            var replyEvent_1 = payload.reply;
            payload.reply = function reply(replyData) {
              if (!replySource_1) {
                return;
              }
              var replyPayload = (0, _1.packagePayload)(replyEvent_1, replyOrigin_1, replyData);
              if (!replyPayload) {
                return;
              }
              replySource_1.postMessage(replyPayload, replyOrigin_1);
            };
          }
          return payload;
        }
        exports3.unpackPayload = unpackPayload;
      }, { "./": 173 }], 182: [function(require2, module3, exports3) {
        "use strict";
        function uuid() {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0;
            var v = c === "x" ? r : r & 3 | 8;
            return v.toString(16);
          });
        }
        module3.exports = uuid;
      }, {}], 183: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", { value: true });
        exports3.isIos = exports3.isIE9 = exports3.isSamsungBrowser = exports3.isAndroidChrome = exports3.isKitKatWebview = void 0;
        var UA = typeof window !== "undefined" && window.navigator && window.navigator.userAgent;
        var isAndroid = require2("@braintree/browser-detection/is-android");
        var isChromeOs = require2("@braintree/browser-detection/is-chrome-os");
        var isChrome = require2("@braintree/browser-detection/is-chrome");
        var isIos = require2("@braintree/browser-detection/is-ios");
        exports3.isIos = isIos;
        var isIE9 = require2("@braintree/browser-detection/is-ie9");
        exports3.isIE9 = isIE9;
        var KITKAT_WEBVIEW_REGEX = /Version\/\d\.\d* Chrome\/\d*\.0\.0\.0/;
        function isOldSamsungBrowserOrSamsungWebview(ua) {
          return !isChrome(ua) && ua.indexOf("Samsung") > -1;
        }
        function isKitKatWebview(ua) {
          if (ua === void 0) {
            ua = UA;
          }
          return isAndroid(ua) && KITKAT_WEBVIEW_REGEX.test(ua);
        }
        exports3.isKitKatWebview = isKitKatWebview;
        function isAndroidChrome(ua) {
          if (ua === void 0) {
            ua = UA;
          }
          return (isAndroid(ua) || isChromeOs(ua)) && isChrome(ua);
        }
        exports3.isAndroidChrome = isAndroidChrome;
        function isSamsungBrowser(ua) {
          if (ua === void 0) {
            ua = UA;
          }
          return /SamsungBrowser/.test(ua) || isOldSamsungBrowserOrSamsungWebview(ua);
        }
        exports3.isSamsungBrowser = isSamsungBrowser;
      }, { "@braintree/browser-detection/is-android": 196, "@braintree/browser-detection/is-chrome": 198, "@braintree/browser-detection/is-chrome-os": 197, "@braintree/browser-detection/is-ie9": 199, "@braintree/browser-detection/is-ios": 200 }], 184: [function(require2, module3, exports3) {
        "use strict";
        var device_1 = require2("./lib/device");
        module3.exports = function supportsInputFormatting() {
          return !(0, device_1.isSamsungBrowser)();
        };
      }, { "./lib/device": 183 }], 185: [function(require2, module3, exports3) {
        arguments[4][5][0].apply(exports3, arguments);
      }, { "dup": 5 }], 186: [function(require2, module3, exports3) {
        arguments[4][6][0].apply(exports3, arguments);
      }, { "dup": 6 }], 187: [function(require2, module3, exports3) {
        arguments[4][7][0].apply(exports3, arguments);
      }, { "./is-duckduckgo": 188, "./is-edge": 189, "./is-opera": 193, "./is-samsung": 194, "./is-silk": 195, "dup": 7 }], 188: [function(require2, module3, exports3) {
        arguments[4][8][0].apply(exports3, arguments);
      }, { "dup": 8 }], 189: [function(require2, module3, exports3) {
        arguments[4][9][0].apply(exports3, arguments);
      }, { "dup": 9 }], 190: [function(require2, module3, exports3) {
        arguments[4][12][0].apply(exports3, arguments);
      }, { "dup": 12 }], 191: [function(require2, module3, exports3) {
        arguments[4][18][0].apply(exports3, arguments);
      }, { "./is-ipados": 192, "dup": 18 }], 192: [function(require2, module3, exports3) {
        arguments[4][19][0].apply(exports3, arguments);
      }, { "dup": 19 }], 193: [function(require2, module3, exports3) {
        arguments[4][20][0].apply(exports3, arguments);
      }, { "dup": 20 }], 194: [function(require2, module3, exports3) {
        arguments[4][21][0].apply(exports3, arguments);
      }, { "dup": 21 }], 195: [function(require2, module3, exports3) {
        arguments[4][22][0].apply(exports3, arguments);
      }, { "dup": 22 }], 196: [function(require2, module3, exports3) {
        arguments[4][24][0].apply(exports3, arguments);
      }, { "./dist/is-android": 185, "dup": 24 }], 197: [function(require2, module3, exports3) {
        arguments[4][25][0].apply(exports3, arguments);
      }, { "./dist/is-chrome-os": 186, "dup": 25 }], 198: [function(require2, module3, exports3) {
        arguments[4][26][0].apply(exports3, arguments);
      }, { "./dist/is-chrome": 187, "dup": 26 }], 199: [function(require2, module3, exports3) {
        arguments[4][29][0].apply(exports3, arguments);
      }, { "./dist/is-ie9": 190, "dup": 29 }], 200: [function(require2, module3, exports3) {
        arguments[4][33][0].apply(exports3, arguments);
      }, { "./dist/is-ios": 191, "dup": 33 }], 201: [function(require2, module3, exports3) {
        module3.exports = require2("./dist/supports-input-formatting");
      }, { "./dist/supports-input-formatting": 184 }], 202: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          paymentOptionIDs: {
            card: "card",
            paypal: "paypal",
            paypalCredit: "paypalCredit",
            applePay: "applePay",
            venmo: "venmo",
            googlePay: "googlePay"
          },
          paymentMethodTypes: {
            card: "CreditCard",
            paypal: "PayPalAccount",
            paypalCredit: "PayPalAccount",
            applePay: "ApplePayCard",
            venmo: "VenmoAccount",
            googlePay: "AndroidPayCard"
          },
          analyticsKinds: {
            CreditCard: "card",
            PayPalAccount: "paypal",
            ApplePayCard: "applepay",
            VenmoAccount: "venmo",
            AndroidPayCard: "googlepay"
          },
          paymentMethodCardTypes: {
            Visa: "visa",
            MasterCard: "master-card",
            "American Express": "american-express",
            "Diners Club": "diners-club",
            Discover: "discover",
            JCB: "jcb",
            UnionPay: "unionpay",
            Maestro: "maestro",
            Elo: "elo",
            Hiper: "hiper",
            Hipercard: "hipercard"
          },
          cardTypeIcons: {
            visa: "visa",
            mastercard: "master-card",
            "american-express": "american-express",
            "diners-club": "diners-club",
            discover: "discover",
            jcb: "jcb",
            "union-pay": "unionpay",
            maestro: "maestro",
            elo: "elo",
            hiper: "hiper",
            hipercard: "hipercard"
          },
          configurationCardTypes: {
            visa: "Visa",
            "master-card": "MasterCard",
            "american-express": "American Express",
            "diners-club": "Discover",
            discover: "Discover",
            jcb: "JCB",
            unionpay: "UnionPay",
            maestro: "Maestro",
            elo: "Elo",
            hiper: "Hiper",
            hipercard: "Hipercard"
          },
          dependencySetupStates: {
            DONE: "done",
            FAILED: "failed",
            INITIALIZING: "initializing",
            NOT_ENABLED: "not-enabled"
          },
          errors: {
            NO_PAYMENT_METHOD_ERROR: "No payment method is available.",
            DEVELOPER_MISCONFIGURATION_MESSAGE: "Developer Error: Something went wrong. Check the console for details."
          },
          ANALYTICS_REQUEST_TIMEOUT_MS: 2e3,
          ANALYTICS_PREFIX: "web.dropin.",
          CHANGE_ACTIVE_PAYMENT_METHOD_TIMEOUT: 200,
          CHECKOUT_JS_SOURCE: "https://www.paypalobjects.com/api/checkout.min.js",
          GOOGLE_PAYMENT_SOURCE: "https://pay.google.com/gp/p/js/pay.js",
          INTEGRATION: "dropin2",
          PAYPAL_CHECKOUT_SCRIPT_ID: "braintree-dropin-paypal-checkout-script",
          GOOGLE_PAYMENT_SCRIPT_ID: "braintree-dropin-google-payment-script",
          DATA_COLLECTOR_SCRIPT_ID: "braintree-dropin-data-collector-script",
          STYLESHEET_ID: "braintree-dropin-stylesheet"
        };
      }, {}], 203: [function(require2, module3, exports3) {
        "use strict";
        var analytics = require2("./lib/analytics");
        var DropinError = require2("./lib/dropin-error");
        var EventEmitter = require2("@braintree/event-emitter");
        var constants = require2("./constants");
        var paymentMethodTypes = constants.paymentMethodTypes;
        var paymentOptionIDs = constants.paymentOptionIDs;
        var dependencySetupStates = constants.dependencySetupStates;
        var isGuestCheckout = require2("./lib/is-guest-checkout");
        var paymentSheetViews = require2("./views/payment-sheet-views");
        var vaultManager = require2("braintree-web/vault-manager");
        var paymentOptionsViewID = require2("./views/payment-options-view").ID;
        var VAULTED_PAYMENT_METHOD_TYPES_THAT_SHOULD_ALWAYS_BE_HIDDEN = [
          paymentMethodTypes.applePay,
          paymentMethodTypes.googlePay,
          paymentMethodTypes.venmo
        ];
        var DEFAULT_PAYMENT_OPTION_PRIORITY = [
          paymentOptionIDs.card,
          paymentOptionIDs.paypal,
          paymentOptionIDs.paypalCredit,
          paymentOptionIDs.venmo,
          paymentOptionIDs.applePay,
          paymentOptionIDs.googlePay
        ];
        var NON_PAYMENT_OPTION_DEPENDENCIES = ["threeDSecure", "dataCollector"];
        var ASYNC_DEPENDENCIES = DEFAULT_PAYMENT_OPTION_PRIORITY.concat(NON_PAYMENT_OPTION_DEPENDENCIES);
        var DEPENDENCY_READY_CHECK_INTERVAL = 200;
        function DropinModel(options) {
          this.rootNode = options.container;
          this.componentID = options.componentID;
          this.merchantConfiguration = options.merchantConfiguration;
          this.isGuestCheckout = isGuestCheckout(options.client);
          this.dependencyStates = ASYNC_DEPENDENCIES.reduce((function(total, dependencyKey) {
            if (this._shouldIncludeDependency(dependencyKey)) {
              total[dependencyKey] = dependencySetupStates.INITIALIZING;
            }
            return total;
          }).bind(this), {});
          this.hiddenVaultedPaymentMethodTypes = constructHiddenPaymentMethodTypes(
            options.merchantConfiguration.hiddenVaultedPaymentMethodTypes
          );
          this.failedDependencies = {};
          this._options = options;
          this._setupComplete = false;
          this.shouldWaitForVerifyCard = false;
          while (this.rootNode.parentNode) {
            this.rootNode = this.rootNode.parentNode;
          }
          this.isInShadowDom = this.rootNode.toString() === "[object ShadowRoot]";
          EventEmitter.call(this);
        }
        EventEmitter.createChild(DropinModel);
        DropinModel.prototype.initialize = function() {
          var dep;
          var self2 = this;
          var dependencyReadyInterval = setInterval(function() {
            for (dep in self2.dependencyStates) {
              if (self2.dependencyStates[dep] === dependencySetupStates.INITIALIZING) {
                return;
              }
            }
            clearInterval(dependencyReadyInterval);
            self2._emit("asyncDependenciesReady");
          }, DEPENDENCY_READY_CHECK_INTERVAL);
          return vaultManager.create({
            client: self2._options.client
          }).then(function(vaultManagerInstance) {
            self2._vaultManager = vaultManagerInstance;
            return self2._getSupportedPaymentOptions(self2._options);
          }).then(function(paymentOptions) {
            self2.supportedPaymentOptions = paymentOptions;
            return self2.getVaultedPaymentMethods();
          }).then(function(paymentMethods) {
            self2._paymentMethods = paymentMethods;
            self2._paymentMethodIsRequestable = self2._paymentMethods.length > 0;
          });
        };
        DropinModel.prototype.confirmDropinReady = function() {
          this._setupComplete = true;
        };
        DropinModel.prototype.isPaymentMethodRequestable = function() {
          return Boolean(this._paymentMethodIsRequestable);
        };
        DropinModel.prototype.addPaymentMethod = function(paymentMethod) {
          this._paymentMethods.push(paymentMethod);
          this._emit("addPaymentMethod", paymentMethod);
          this.changeActivePaymentMethod(paymentMethod);
        };
        DropinModel.prototype.removePaymentMethod = function(paymentMethod) {
          var paymentMethodLocation = this._paymentMethods.indexOf(paymentMethod);
          if (paymentMethodLocation === -1) {
            return;
          }
          this._paymentMethods.splice(paymentMethodLocation, 1);
          this._emit("removePaymentMethod", paymentMethod);
        };
        DropinModel.prototype.refreshPaymentMethods = function() {
          var self2 = this;
          return self2.getVaultedPaymentMethods().then(function(paymentMethods) {
            self2._paymentMethods = paymentMethods;
            self2._emit("refreshPaymentMethods");
          });
        };
        DropinModel.prototype.changeActivePaymentMethod = function(paymentMethod) {
          this._activePaymentMethod = paymentMethod;
          this._emit("changeActivePaymentMethod", paymentMethod);
        };
        DropinModel.prototype.changeActiveView = function(paymentViewID) {
          var previousViewId = this._activePaymentViewId;
          this._activePaymentViewId = paymentViewID;
          this._emit("changeActiveView", {
            previousViewId,
            newViewId: paymentViewID
          });
        };
        DropinModel.prototype.removeActivePaymentMethod = function() {
          this._activePaymentMethod = null;
          this._emit("removeActivePaymentMethod");
          this.setPaymentMethodRequestable({
            isRequestable: false
          });
        };
        DropinModel.prototype.selectPaymentOption = function(paymentViewID) {
          this._emit("paymentOptionSelected", {
            paymentOption: paymentViewID
          });
        };
        DropinModel.prototype.enableEditMode = function() {
          analytics.sendEvent(this._options.client, "manager.appeared");
          this._isInEditMode = true;
          this._emit("enableEditMode");
        };
        DropinModel.prototype.disableEditMode = function() {
          this._isInEditMode = false;
          this._emit("disableEditMode");
        };
        DropinModel.prototype.isInEditMode = function() {
          return Boolean(this._isInEditMode);
        };
        DropinModel.prototype.confirmPaymentMethodDeletion = function(paymentMethod) {
          this._paymentMethodWaitingToBeDeleted = paymentMethod;
          this._emit("confirmPaymentMethodDeletion", paymentMethod);
        };
        DropinModel.prototype._shouldIncludeDependency = function(key) {
          if (key === "card") {
            if (this.merchantConfiguration.card === false) {
              return false;
            }
          } else if (!this.merchantConfiguration[key]) {
            return false;
          }
          if (NON_PAYMENT_OPTION_DEPENDENCIES.indexOf(key) > -1) {
            return true;
          }
          if (this.merchantConfiguration.paymentOptionPriority) {
            return this.merchantConfiguration.paymentOptionPriority.indexOf(key) > -1;
          }
          return DEFAULT_PAYMENT_OPTION_PRIORITY.indexOf(key) > -1;
        };
        DropinModel.prototype._shouldEmitRequestableEvent = function(options) {
          var requestableStateHasNotChanged = this.isPaymentMethodRequestable() === options.isRequestable;
          var nonce = options.selectedPaymentMethod && options.selectedPaymentMethod.nonce;
          var nonceHasNotChanged = nonce === this._paymentMethodRequestableNonce;
          if (!this._setupComplete) {
            return false;
          }
          if (this.shouldWaitForVerifyCard) {
            return false;
          }
          if (requestableStateHasNotChanged && (!options.isRequestable || nonceHasNotChanged)) {
            return false;
          }
          return true;
        };
        DropinModel.prototype.setPaymentMethodRequestable = function(options) {
          var shouldEmitEvent = this._shouldEmitRequestableEvent(options);
          var paymentMethodRequestableResponse = {
            paymentMethodIsSelected: Boolean(options.selectedPaymentMethod),
            type: options.type
          };
          this._paymentMethodIsRequestable = options.isRequestable;
          if (options.isRequestable) {
            this._paymentMethodRequestableNonce = options.selectedPaymentMethod && options.selectedPaymentMethod.nonce;
          } else {
            delete this._paymentMethodRequestableNonce;
          }
          if (!shouldEmitEvent) {
            return;
          }
          if (options.isRequestable) {
            this._emit("paymentMethodRequestable", paymentMethodRequestableResponse);
          } else {
            this._emit("noPaymentMethodRequestable");
          }
        };
        DropinModel.prototype.getPaymentMethods = function() {
          return this._paymentMethods.slice();
        };
        DropinModel.prototype.getActivePaymentMethod = function() {
          return this._activePaymentMethod;
        };
        DropinModel.prototype.hasPaymentMethods = function() {
          return this.getPaymentMethods().length > 0;
        };
        DropinModel.prototype.getInitialViewId = function() {
          if (this.supportedPaymentOptions.length > 1) {
            return paymentOptionsViewID;
          }
          return this.supportedPaymentOptions[0];
        };
        DropinModel.prototype.getActivePaymentViewId = function() {
          return this._activePaymentViewId;
        };
        DropinModel.prototype.reportAppSwitchPayload = function(payload) {
          this.appSwitchPayload = payload;
        };
        DropinModel.prototype.reportAppSwitchError = function(sheetId, error) {
          this.appSwitchError = {
            id: sheetId,
            error
          };
        };
        DropinModel.prototype.hasAtLeastOneAvailablePaymentOption = function() {
          var self2 = this;
          var i;
          for (i = 0; i < this.supportedPaymentOptions.length; i++) {
            if (self2.dependencyStates[this.supportedPaymentOptions[i]] === dependencySetupStates.DONE) {
              return true;
            }
          }
          return false;
        };
        DropinModel.prototype.asyncDependencyReady = function(key) {
          this.dependencyStates[key] = dependencySetupStates.DONE;
        };
        DropinModel.prototype.asyncDependencyFailed = function(options) {
          if (this.failedDependencies.hasOwnProperty(options.view)) {
            return;
          }
          this.failedDependencies[options.view] = options.error;
          this.dependencyStates[options.view] = dependencySetupStates.FAILED;
        };
        DropinModel.prototype.cancelInitialization = function(error) {
          this._emit("cancelInitialization", error);
        };
        DropinModel.prototype.reportError = function(error) {
          this._emit("errorOccurred", error);
        };
        DropinModel.prototype.clearError = function() {
          this._emit("errorCleared");
        };
        DropinModel.prototype.preventUserAction = function() {
          this._emit("preventUserAction");
        };
        DropinModel.prototype.allowUserAction = function() {
          this._emit("allowUserAction");
        };
        DropinModel.prototype.deleteVaultedPaymentMethod = function() {
          var self2 = this;
          var promise = Promise.resolve();
          var error;
          this._emit("startVaultedPaymentMethodDeletion");
          if (!self2.isGuestCheckout) {
            promise = this._vaultManager.deletePaymentMethod(this._paymentMethodWaitingToBeDeleted.nonce).catch(function(err) {
              error = err;
            });
          }
          return promise.then(function() {
            delete self2._paymentMethodWaitingToBeDeleted;
            return self2.refreshPaymentMethods();
          }).then(function() {
            self2.disableEditMode();
            self2._emit("finishVaultedPaymentMethodDeletion", error);
          });
        };
        DropinModel.prototype.cancelDeleteVaultedPaymentMethod = function() {
          this._emit("cancelVaultedPaymentMethodDeletion");
          delete this._paymentMethodWaitingToBeDeleted;
        };
        DropinModel.prototype.getVaultedPaymentMethods = function() {
          var self2 = this;
          if (self2.isGuestCheckout) {
            return Promise.resolve([]);
          }
          return self2._vaultManager.fetchPaymentMethods({
            defaultFirst: this.merchantConfiguration.showDefaultPaymentMethodFirst !== false
          }).then(function(paymentMethods) {
            return self2._getSupportedPaymentMethods(paymentMethods).map(function(paymentMethod) {
              paymentMethod.vaulted = true;
              return paymentMethod;
            });
          }).catch(function() {
            return Promise.resolve([]);
          });
        };
        DropinModel.prototype._getSupportedPaymentMethods = function(paymentMethods) {
          var self2 = this;
          var supportedPaymentMethods = this.supportedPaymentOptions.reduce(
            function(array, key) {
              var paymentMethodType = paymentMethodTypes[key];
              if (canShowVaultedPaymentMethodType(
                paymentMethodType,
                self2.hiddenVaultedPaymentMethodTypes
              )) {
                array.push(paymentMethodType);
              }
              return array;
            },
            []
          );
          return paymentMethods.filter(function(paymentMethod) {
            return supportedPaymentMethods.indexOf(paymentMethod.type) > -1;
          });
        };
        DropinModel.prototype._getSupportedPaymentOptions = function(options) {
          var self2 = this;
          var paymentOptionPriority = options.merchantConfiguration.paymentOptionPriority || DEFAULT_PAYMENT_OPTION_PRIORITY;
          var promises;
          if (!(paymentOptionPriority instanceof Array)) {
            throw new DropinError("paymentOptionPriority must be an array.");
          }
          paymentOptionPriority = paymentOptionPriority.filter(function(item, pos) {
            return paymentOptionPriority.indexOf(item) === pos;
          });
          promises = paymentOptionPriority.map(function(paymentOption) {
            return getPaymentOption(paymentOption, options).then(function(result) {
              if (!result.success) {
                self2.dependencyStates[result.id] = dependencySetupStates.NOT_ENABLED;
              }
              return result;
            });
          });
          return Promise.all(promises).then(function(result) {
            result = result.filter(function(item) {
              return item.success;
            });
            if (result.length === 0) {
              return Promise.reject(new DropinError("No valid payment options available."));
            }
            return result.map(function(item) {
              return item.id;
            });
          });
        };
        function getPaymentOption(paymentOption, options) {
          return isPaymentOptionEnabled(paymentOption, options).then(function(success) {
            return {
              success,
              id: paymentOptionIDs[paymentOption]
            };
          });
        }
        function isPaymentOptionEnabled(paymentOption, options) {
          var SheetView = paymentSheetViews[paymentOptionIDs[paymentOption]];
          if (!SheetView) {
            return Promise.reject(new DropinError("paymentOptionPriority: Invalid payment option specified."));
          }
          return SheetView.isEnabled({
            client: options.client,
            merchantConfiguration: options.merchantConfiguration
          }).catch(function(error) {
            console.error(SheetView.ID + " view errored when checking if it was supported.");
            console.error(error);
            return Promise.resolve(false);
          });
        }
        function canShowVaultedPaymentMethodType(paymentMethodType, hiddenVaultedPaymentMethodTypes) {
          return paymentMethodType && hiddenVaultedPaymentMethodTypes.indexOf(paymentMethodType) === -1;
        }
        function constructHiddenPaymentMethodTypes(paymentMethods) {
          var hiddenVaultedPaymentMethodTypes = [].concat(
            VAULTED_PAYMENT_METHOD_TYPES_THAT_SHOULD_ALWAYS_BE_HIDDEN
          );
          if (Array.isArray(paymentMethods)) {
            paymentMethods.forEach(function(paymentMethod) {
              var paymentMethodId = paymentMethodTypes[paymentMethod];
              if (!paymentMethodId) {
                return;
              }
              if (hiddenVaultedPaymentMethodTypes.indexOf(paymentMethodId) > -1) {
                return;
              }
              hiddenVaultedPaymentMethodTypes.push(paymentMethodId);
            });
          }
          return hiddenVaultedPaymentMethodTypes;
        }
        module3.exports = DropinModel;
      }, { "./constants": 202, "./lib/analytics": 207, "./lib/dropin-error": 212, "./lib/is-guest-checkout": 214, "./views/payment-options-view": 264, "./views/payment-sheet-views": 269, "@braintree/event-emitter": 36, "braintree-web/vault-manager": 144 }], 204: [function(require2, module3, exports3) {
        "use strict";
        var assign = require2("./lib/assign").assign;
        var analytics = require2("./lib/analytics");
        var constants = require2("./constants");
        var DropinError = require2("./lib/dropin-error");
        var DropinModel = require2("./dropin-model");
        var EventEmitter = require2("@braintree/event-emitter");
        var assets = require2("@braintree/asset-loader");
        var MainView = require2("./views/main-view");
        var paymentOptionIDs = constants.paymentOptionIDs;
        var translations = require2("./translations").translations;
        var isUtf8 = require2("./lib/is-utf-8");
        var uuid = require2("@braintree/uuid");
        var sanitizeHtml = require2("./lib/sanitize-html");
        var DataCollector = require2("./lib/data-collector");
        var ThreeDSecure = require2("./lib/three-d-secure");
        var wrapPrototype = require2("@braintree/wrap-promise").wrapPrototype;
        var mainHTML = '<div class="braintree-dropin">\n  <div data-braintree-id="methods-label" class="braintree-heading">&nbsp;</div>\n  <div data-braintree-id="methods-edit" class="braintree-hidden braintree-heading" role="button" tabindex="0">{{edit}}</div>\n  <div data-braintree-id="choose-a-way-to-pay" class="braintree-heading">{{chooseAWayToPay}}</div>\n  <div class="braintree-placeholder">&nbsp;</div>\n\n  <div data-braintree-id="upper-container" class="braintree-upper-container">\n    <div data-braintree-id="loading-container" class="braintree-loader__container">\n      <div data-braintree-id="loading-indicator" class="braintree-loader__indicator">\n        <svg width="14" height="16" class="braintree-loader__lock">\n          <use xlink:href="#iconLockLoader"></use>\n        </svg>\n      </div>\n    </div>\n\n    <div data-braintree-id="delete-confirmation" class="braintree-delete-confirmation braintree-sheet">\n      <div data-braintree-id="delete-confirmation__message"></div>\n      <div class="braintree-delete-confirmation__button-container">\n        <div tabindex="0" role="button" data-braintree-id="delete-confirmation__no" class="braintree-delete-confirmation__button">{{deleteCancelButton}}</div>\n        <div tabindex="0" role="button" data-braintree-id="delete-confirmation__yes" class="braintree-delete-confirmation__button">{{deleteConfirmationButton}}</div>\n      </div>\n    </div>\n\n    <div data-braintree-id="methods" class="braintree-methods braintree-methods-initial">\n      <div data-braintree-id="methods-container"></div>\n    </div>\n\n    <div data-braintree-id="options" class="braintree-test-class braintree-options braintree-options-initial">\n      <div data-braintree-id="payment-options-container" class="braintree-options-list"></div>\n    </div>\n\n    <div data-braintree-id="sheet-container" class="braintree-sheet__container">\n      <div data-braintree-id="paypal" class="braintree-paypal braintree-sheet">\n        <div data-braintree-id="paypal-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg width="40" height="24">\n                <use xlink:href="#logoPayPal"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__label">{{PayPal}}</div>\n          </div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--button">\n          <div data-braintree-id="paypal-button" class="braintree-sheet__button--paypal"></div>\n        </div>\n      </div>\n      <div data-braintree-id="paypalCredit" class="braintree-paypalCredit braintree-sheet">\n        <div data-braintree-id="paypal-credit-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg width="40" height="24">\n                <use xlink:href="#logoPayPalCredit"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__label">{{PayPal Credit}}</div>\n          </div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--button">\n          <div data-braintree-id="paypal-credit-button" class="braintree-sheet__button--paypal"></div>\n        </div>\n      </div>\n      <div data-braintree-id="applePay" class="braintree-applePay braintree-sheet">\n        <div data-braintree-id="apple-pay-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg height="24" width="40">\n              <use xlink:href="#logoApplePay"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__label">{{Apple Pay}}</div>\n          </div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--button">\n          <div data-braintree-id="apple-pay-button" class="braintree-sheet__button--apple-pay apple-pay-button"></div>\n        </div>\n      </div>\n      <div data-braintree-id="googlePay" class="braintree-googlePay braintree-sheet">\n        <div data-braintree-id="google-pay-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg height="24" width="40">\n              <use xlink:href="#logoGooglePay"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__label">{{Google Pay}}</div>\n          </div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--button">\n          <div data-braintree-id="google-pay-button"></div>\n        </div>\n      </div>\n      <div data-braintree-id="venmo" class="braintree-venmo braintree-sheet">\n        <div data-braintree-id="venmo-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg height="24" width="40">\n              <use xlink:href="#logoVenmo"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__label">{{Venmo}}</div>\n          </div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--button">\n          <svg data-braintree-id="venmo-button" class="braintree-sheet__button--venmo">\n            <use xlink:href="#buttonVenmo"></use>\n          </svg>\n        </div>\n      </div>\n      <div data-braintree-id="card" class="braintree-card braintree-form braintree-sheet">\n        <div data-braintree-id="card-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg width="40" height="24" class="braintree-icon--bordered" aria-hidden="true">\n                <use xlink:href="#iconCardFront"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__text">{{payWithCard}}</div>\n          </div>\n          <div data-braintree-id="card-view-icons" class="braintree-sheet__icons"></div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--form">\n          <div data-braintree-id="cardholder-name-field-group" class="braintree-form__field-group">\n            <label for="braintree__card-view-input__cardholder-name">\n              <div class="braintree-form__label">{{cardholderNameLabel}}</div>\n              <div class="braintree-form__field">\n                <div class="braintree-form-cardholder-name braintree-form__hosted-field"></div>\n                <div class="braintree-form__icon-container">\n                  <div class="braintree-form__icon braintree-form__field-error-icon">\n                    <svg width="24" height="24">\n                      <use xlink:href="#iconError"></use>\n                    </svg>\n                  </div>\n                </div>\n              </div>\n            </label>\n            <div data-braintree-id="cardholder-name-field-error" class="braintree-form__field-error" role="alert"></div>\n          </div>\n          <div data-braintree-id="number-field-group" class="braintree-form__field-group">\n            <label>\n              <div class="braintree-form__label">{{cardNumberLabel}}</div>\n              <div class="braintree-form__field">\n                <div class="braintree-form-number braintree-form__hosted-field"></div>\n                <div class="braintree-form__icon-container">\n                  <div data-braintree-id="card-number-icon" class="braintree-form__icon braintree-form__field-secondary-icon">\n                    <svg width="40" height="24" class="braintree-icon--bordered">\n                    <use data-braintree-id="card-number-icon-svg" xlink:href="#iconCardFront"></use>\n                    </svg>\n                  </div>\n                  <div class="braintree-form__icon braintree-form__field-error-icon">\n                    <svg width="24" height="24">\n                      <use xlink:href="#iconError"></use>\n                    </svg>\n                  </div>\n                </div>\n              </div>\n            </label>\n            <div data-braintree-id="number-field-error" class="braintree-form__field-error" role="alert"></div>\n          </div>\n\n          <div class="braintree-form__flexible-fields">\n            <div data-braintree-id="expiration-date-field-group" class="braintree-form__field-group">\n              <label>\n                <div class="braintree-form__label">{{expirationDateLabel}}\n                  <span class="braintree-form__descriptor">{{expirationDateLabelSubheading}}</span>\n                </div>\n                <div class="braintree-form__field">\n                  <div class="braintree-form__hosted-field braintree-form-expiration"></div>\n                  <div class="braintree-form__icon-container">\n                    <div class="braintree-form__icon braintree-form__field-error-icon">\n                      <svg width="24" height="24">\n                        <use xlink:href="#iconError"></use>\n                      </svg>\n                    </div>\n                  </div>\n                </div>\n              </label>\n              <div data-braintree-id="expiration-date-field-error" class="braintree-form__field-error" role="alert"></div>\n            </div>\n\n\n            <div data-braintree-id="cvv-field-group" class="braintree-form__field-group">\n              <label>\n                <div class="braintree-form__label">{{cvvLabel}}\n                  <span data-braintree-id="cvv-label-descriptor" class="braintree-form__descriptor">{{cvvThreeDigitLabelSubheading}}</span>\n                </div>\n                <div class="braintree-form__field">\n                  <div class="braintree-form__hosted-field braintree-form-cvv"></div>\n                  <div class="braintree-form__icon-container">\n                    <div data-braintree-id="cvv-icon" class="braintree-form__icon braintree-form__field-secondary-icon">\n                      <svg width="40" height="24" class="braintree-icon--bordered">\n                      <use data-braintree-id="cvv-icon-svg" xlink:href="#iconCVVBack"></use>\n                      </svg>\n                    </div>\n                    <div class="braintree-form__icon braintree-form__field-error-icon">\n                      <svg width="24" height="24">\n                        <use xlink:href="#iconError"></use>\n                      </svg>\n                    </div>\n                  </div>\n                </div>\n              </label>\n              <div data-braintree-id="cvv-field-error" class="braintree-form__field-error" role="alert"></div>\n            </div>\n\n            <div data-braintree-id="postal-code-field-group" class="braintree-form__field-group">\n              <label>\n                <div class="braintree-form__label">{{postalCodeLabel}}</div>\n                <div class="braintree-form__field">\n                  <div class="braintree-form__hosted-field braintree-form-postal-code"></div>\n                  <div class="braintree-form__icon-container">\n                    <div class="braintree-form__icon braintree-form__field-error-icon">\n                      <svg width="24" height="24">\n                        <use xlink:href="#iconError"></use>\n                      </svg>\n                    </div>\n                  </div>\n                </div>\n              </label>\n              <div data-braintree-id="postal-code-field-error" class="braintree-form__field-error" role="alert"></div>\n            </div>\n\n            <div class="braintree-form__notice-of-collection">\n              <a href="https://www.paypal.com/us/legalhub/home" target="_blank" rel="noopener noreferrer">{{noticeOfCollection}}</a>\n            </div>\n          </div>\n\n          <div data-braintree-id="save-card-field-group" class="braintree-form__field-group braintree-hidden">\n            <label>\n              <div class="braintree-form__field braintree-form__checkbox">\n                <input type="checkbox" data-braintree-id="save-card-input" checked />\n              </div>\n              <div class="braintree-form__label">{{saveCardLabel}}</div>\n            </label>\n          </div>\n        </div>\n      </div>\n\n      <div data-braintree-id="sheet-error" class="braintree-sheet__error">\n        <div class="braintree-form__icon braintree-sheet__error-icon">\n          <svg width="24" height="24">\n            <use xlink:href="#iconError"></use>\n          </svg>\n        </div>\n        <div data-braintree-id="sheet-error-text" class="braintree-sheet__error-text"></div>\n      </div>\n    </div>\n  </div>\n\n  <div data-braintree-id="lower-container" class="braintree-test-class braintree-options braintree-hidden">\n    <div data-braintree-id="other-ways-to-pay" class="braintree-heading">{{otherWaysToPay}}</div>\n  </div>\n\n  <div data-braintree-id="toggle" class="braintree-large-button braintree-toggle braintree-hidden" tabindex="0" role="button">\n    <span>{{chooseAnotherWayToPay}}</span>\n  </div>\n</div>\n<div data-braintree-id="disable-wrapper" class="braintree-dropin__disabled braintree-hidden"></div>\n';
        var svgHTML = '<svg data-braintree-id="svgs">\n  <defs>\n    <symbol id="icon-visa" viewBox="0 0 44 14.2">\n      <title>Visa</title>\n      <path fill="#1434CB" d="M16.8,0.2L11,13.9H7.3L4.5,3C4.3,2.3,4.2,2.1,3.6,1.8C2.8,1.3,1.4,0.9,0.1,0.6l0.1-0.4h6   c0.8,0,1.5,0.5,1.6,1.4l1.5,7.9L13,0.2H16.8z M31.4,9.4c0-3.6-5-3.8-5-5.4c0-0.5,0.5-1,1.5-1.1c0.5-0.1,1.9-0.1,3.5,0.6L32,0.6   C31.2,0.3,30.1,0,28.7,0c-3.5,0-6,1.9-6,4.5c0,2,1.8,3.1,3.1,3.7c1.4,0.7,1.8,1.1,1.8,1.7c0,0.9-1.1,1.3-2.1,1.3   c-1.8,0-2.8-0.5-3.6-0.9l-0.6,3c0.8,0.4,2.3,0.7,3.9,0.7C28.9,14.1,31.4,12.3,31.4,9.4 M40.6,13.9h3.3L41,0.2h-3   c-0.7,0-1.3,0.4-1.5,1l-5.3,12.7h3.7l0.7-2h4.5L40.6,13.9z M36.7,9.1l1.9-5.1l1.1,5.1H36.7z M21.8,0.2l-2.9,13.7h-3.5l2.9-13.7   H21.8z"/>\n    </symbol>\n\n    <symbol id="icon-master-card" viewBox="0 0 40 24">\n      <title>MasterCard</title>\n      <path d="M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z" fill="#FFF" />\n      <path d="M11.085 22.2v-1.36c0-.522-.318-.863-.864-.863-.272 0-.568.09-.773.386-.16-.25-.386-.386-.727-.386-.228 0-.455.068-.637.318v-.272h-.478V22.2h.478v-1.202c0-.386.204-.567.523-.567.318 0 .478.205.478.568V22.2h.477v-1.202c0-.386.23-.567.524-.567.32 0 .478.205.478.568V22.2h.523zm7.075-2.177h-.774v-.658h-.478v.658h-.432v.43h.432v.998c0 .5.205.795.75.795.206 0 .433-.068.592-.16l-.136-.407c-.136.09-.296.114-.41.114-.227 0-.318-.137-.318-.363v-.976h.774v-.43zm4.048-.046c-.273 0-.454.136-.568.318v-.272h-.478V22.2h.478v-1.225c0-.363.16-.567.455-.567.09 0 .204.023.295.046l.137-.454c-.09-.023-.228-.023-.32-.023zm-6.118.227c-.228-.16-.546-.227-.888-.227-.546 0-.91.272-.91.703 0 .363.274.567.75.635l.23.023c.25.045.385.113.385.227 0 .16-.182.272-.5.272-.32 0-.57-.113-.728-.227l-.228.363c.25.18.59.272.932.272.637 0 1-.295 1-.703 0-.385-.295-.59-.75-.658l-.227-.022c-.205-.023-.364-.068-.364-.204 0-.16.16-.25.41-.25.272 0 .545.114.682.182l.205-.386zm12.692-.227c-.273 0-.455.136-.568.318v-.272h-.478V22.2h.478v-1.225c0-.363.16-.567.455-.567.09 0 .203.023.294.046L29.1 20c-.09-.023-.227-.023-.318-.023zm-6.096 1.134c0 .66.455 1.135 1.16 1.135.32 0 .546-.068.774-.25l-.228-.385c-.182.136-.364.204-.57.204-.385 0-.658-.272-.658-.703 0-.407.273-.68.66-.702.204 0 .386.068.568.204l.228-.385c-.228-.182-.455-.25-.774-.25-.705 0-1.16.477-1.16 1.134zm4.413 0v-1.087h-.48v.272c-.158-.204-.385-.318-.68-.318-.615 0-1.093.477-1.093 1.134 0 .66.478 1.135 1.092 1.135.317 0 .545-.113.68-.317v.272h.48v-1.09zm-1.753 0c0-.384.25-.702.66-.702.387 0 .66.295.66.703 0 .387-.273.704-.66.704-.41-.022-.66-.317-.66-.703zm-5.71-1.133c-.636 0-1.09.454-1.09 1.134 0 .682.454 1.135 1.114 1.135.32 0 .638-.09.888-.295l-.228-.34c-.18.136-.41.227-.636.227-.296 0-.592-.136-.66-.522h1.615v-.18c.022-.704-.388-1.158-1.002-1.158zm0 .41c.297 0 .502.18.547.52h-1.137c.045-.295.25-.52.59-.52zm11.852.724v-1.95h-.48v1.135c-.158-.204-.385-.318-.68-.318-.615 0-1.093.477-1.093 1.134 0 .66.478 1.135 1.092 1.135.318 0 .545-.113.68-.317v.272h.48v-1.09zm-1.752 0c0-.384.25-.702.66-.702.386 0 .66.295.66.703 0 .387-.274.704-.66.704-.41-.022-.66-.317-.66-.703zm-15.97 0v-1.087h-.476v.272c-.16-.204-.387-.318-.683-.318-.615 0-1.093.477-1.093 1.134 0 .66.478 1.135 1.092 1.135.318 0 .545-.113.682-.317v.272h.477v-1.09zm-1.773 0c0-.384.25-.702.66-.702.386 0 .66.295.66.703 0 .387-.274.704-.66.704-.41-.022-.66-.317-.66-.703z" fill="#000" />\n      <path fill="#FF5F00" d="M23.095 3.49H15.93v12.836h7.165" />\n      <path d="M16.382 9.91c0-2.61 1.23-4.922 3.117-6.42-1.39-1.087-3.14-1.745-5.05-1.745-4.528 0-8.19 3.65-8.19 8.164 0 4.51 3.662 8.162 8.19 8.162 1.91 0 3.66-.657 5.05-1.746-1.89-1.474-3.118-3.81-3.118-6.417z" fill="#EB001B" />\n      <path d="M32.76 9.91c0 4.51-3.664 8.162-8.19 8.162-1.91 0-3.662-.657-5.05-1.746 1.91-1.496 3.116-3.81 3.116-6.417 0-2.61-1.228-4.922-3.116-6.42 1.388-1.087 3.14-1.745 5.05-1.745 4.526 0 8.19 3.674 8.19 8.164z" fill="#F79E1B" />\n    </symbol>\n\n    <symbol id="icon-unionpay" viewBox="0 0 40 24">\n      <title>Union Pay</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" fill="#FFF" />\n      <path d="M9.877 2h8.126c1.135 0 1.84.93 1.575 2.077l-3.783 16.35c-.267 1.142-1.403 2.073-2.538 2.073H5.13c-1.134 0-1.84-.93-1.574-2.073L7.34 4.076C7.607 2.93 8.74 2 9.878 2z" fill="#E21836" />\n      <path d="M17.325 2h9.345c1.134 0 .623.93.356 2.077l-3.783 16.35c-.265 1.142-.182 2.073-1.32 2.073H12.58c-1.137 0-1.84-.93-1.574-2.073l3.783-16.35C15.056 2.93 16.19 2 17.324 2z" fill="#00447B" />\n      <path d="M26.3 2h8.126c1.136 0 1.84.93 1.575 2.077l-3.782 16.35c-.266 1.142-1.402 2.073-2.54 2.073h-8.122c-1.137 0-1.842-.93-1.574-2.073l3.78-16.35C24.03 2.93 25.166 2 26.303 2z" fill="#007B84" />\n      <path d="M27.633 14.072l-.99 3.3h.266l-.208.68h-.266l-.062.212h-.942l.064-.21H23.58l.193-.632h.194l1.005-3.35.2-.676h.962l-.1.34s.255-.184.498-.248c.242-.064 1.636-.088 1.636-.088l-.206.672h-.33zm-1.695 0l-.254.843s.285-.13.44-.172c.16-.04.395-.057.395-.057l.182-.614h-.764zm-.38 1.262l-.263.877s.29-.15.447-.196c.157-.037.396-.066.396-.066l.185-.614h-.766zm-.614 2.046h.767l.222-.74h-.765l-.223.74z" fill="#FEFEFE" />\n      <path d="M28.055 13.4h1.027l.01.385c-.005.065.05.096.17.096h.208l-.19.637h-.555c-.48.035-.662-.172-.65-.406l-.02-.71zM28.193 16.415h-.978l.167-.566H28.5l.16-.517h-1.104l.19-.638h3.072l-.193.638h-1.03l-.16.516h1.032l-.17.565H29.18l-.2.24h.454l.11.712c.013.07.014.116.036.147.023.026.158.038.238.038h.137l-.21.694h-.348c-.054 0-.133-.004-.243-.01-.105-.008-.18-.07-.25-.105-.064-.03-.16-.11-.182-.24l-.11-.712-.507.7c-.162.222-.38.39-.748.39h-.712l.186-.62h.273c.078 0 .15-.03.2-.056.052-.023.098-.05.15-.126l.74-1.05zM17.478 14.867h2.59l-.19.622H18.84l-.16.53h1.06l-.194.64h-1.06l-.256.863c-.03.095.25.108.353.108l.53-.072-.212.71h-1.193c-.096 0-.168-.013-.272-.037-.1-.023-.145-.07-.19-.138-.043-.07-.11-.128-.064-.278l.343-1.143h-.588l.195-.65h.592l.156-.53h-.588l.188-.623zM19.223 13.75h1.063l-.194.65H18.64l-.157.136c-.067.066-.09.038-.18.087-.08.04-.254.123-.477.123h-.466l.19-.625h.14c.118 0 .198-.01.238-.036.046-.03.098-.096.157-.203l.267-.487h1.057l-.187.356zM20.74 13.4h.905l-.132.46s.286-.23.487-.313c.2-.075.65-.143.65-.143l1.464-.007-.498 1.672c-.085.286-.183.472-.244.555-.055.087-.12.16-.248.23-.124.066-.236.104-.34.115-.096.007-.244.01-.45.012h-1.41l-.4 1.324c-.037.13-.055.194-.03.23.02.03.068.066.135.066l.62-.06-.21.726h-.698c-.22 0-.383-.004-.495-.013-.108-.01-.22 0-.295-.058-.065-.058-.164-.133-.162-.21.007-.073.037-.192.082-.356l1.268-4.23zm1.922 1.69h-1.484l-.09.3h1.283c.152-.018.184.004.196-.003l.096-.297zm-1.402-.272s.29-.266.786-.353c.112-.022.82-.015.82-.015l.106-.357h-1.496l-.216.725z" fill="#FEFEFE" />\n      <path d="M23.382 16.1l-.084.402c-.036.125-.067.22-.16.302-.1.084-.216.172-.488.172l-.502.02-.004.455c-.006.13.028.117.048.138.024.022.045.032.067.04l.157-.008.48-.028-.198.663h-.552c-.385 0-.67-.008-.765-.084-.092-.057-.105-.132-.103-.26l.035-1.77h.88l-.013.362h.212c.072 0 .12-.007.15-.026.027-.02.047-.048.06-.093l.087-.282h.692zM10.84 7.222c-.032.143-.596 2.763-.598 2.764-.12.53-.21.91-.508 1.152-.172.14-.37.21-.6.21-.37 0-.587-.185-.624-.537l-.007-.12.113-.712s.593-2.388.7-2.703c.002-.017.005-.026.007-.035-1.152.01-1.357 0-1.37-.018-.007.024-.037.173-.037.173l-.605 2.688-.05.23-.1.746c0 .22.042.4.13.553.275.485 1.06.557 1.504.557.573 0 1.11-.123 1.47-.345.63-.375.797-.962.944-1.48l.067-.267s.61-2.48.716-2.803c.003-.017.006-.026.01-.035-.835.01-1.08 0-1.16-.018zM14.21 12.144c-.407-.006-.55-.006-1.03.018l-.018-.036c.042-.182.087-.363.127-.548l.06-.25c.086-.39.173-.843.184-.98.007-.084.036-.29-.2-.29-.1 0-.203.048-.307.096-.058.207-.174.79-.23 1.055-.118.558-.126.62-.178.897l-.036.037c-.42-.006-.566-.006-1.05.018l-.024-.04c.08-.332.162-.668.24-.998.203-.9.25-1.245.307-1.702l.04-.028c.47-.067.585-.08 1.097-.185l.043.047-.077.287c.086-.052.168-.104.257-.15.242-.12.51-.155.658-.155.223 0 .468.062.57.323.098.232.034.52-.094 1.084l-.066.287c-.13.627-.152.743-.225 1.174l-.05.036zM15.87 12.144c-.245 0-.405-.006-.56 0-.153 0-.303.008-.532.018l-.013-.02-.015-.02c.062-.238.097-.322.128-.406.03-.084.06-.17.115-.41.072-.315.116-.535.147-.728.033-.187.052-.346.075-.53l.02-.014.02-.018c.244-.036.4-.057.56-.082.16-.024.32-.055.574-.103l.008.023.008.022c-.047.195-.094.39-.14.588-.047.197-.094.392-.137.587-.093.414-.13.57-.152.68-.02.105-.026.163-.063.377l-.022.02-.023.017zM19.542 10.728c.143-.633.033-.928-.108-1.11-.213-.273-.59-.36-.978-.36-.235 0-.793.023-1.23.43-.312.29-.458.687-.546 1.066-.088.387-.19 1.086.447 1.344.198.085.48.108.662.108.466 0 .945-.13 1.304-.513.278-.312.405-.775.448-.965zm-1.07-.046c-.02.106-.113.503-.24.673-.086.123-.19.198-.305.198-.033 0-.235 0-.238-.3-.003-.15.027-.304.063-.47.108-.478.236-.88.56-.88.255 0 .27.298.16.78zM29.536 12.187c-.493-.004-.635-.004-1.09.015l-.03-.037c.124-.472.248-.943.358-1.42.142-.62.175-.882.223-1.244l.037-.03c.49-.07.625-.09 1.135-.186l.015.044c-.093.388-.186.777-.275 1.166-.19.816-.258 1.23-.33 1.658l-.044.035z" fill="#FEFEFE" />\n      <path d="M29.77 10.784c.144-.63-.432-.056-.525-.264-.14-.323-.052-.98-.62-1.2-.22-.085-.732.025-1.17.428-.31.29-.458.683-.544 1.062-.088.38-.19 1.078.444 1.328.2.085.384.11.567.103.638-.034 1.124-1.002 1.483-1.386.277-.303.326.115.368-.07zm-.974-.047c-.024.1-.117.503-.244.67-.083.117-.283.192-.397.192-.032 0-.232 0-.24-.3 0-.146.03-.3.067-.467.11-.47.235-.87.56-.87.254 0 .363.293.254.774zM22.332 12.144c-.41-.006-.55-.006-1.03.018l-.018-.036c.04-.182.087-.363.13-.548l.057-.25c.09-.39.176-.843.186-.98.008-.084.036-.29-.198-.29-.1 0-.203.048-.308.096-.057.207-.175.79-.232 1.055-.115.558-.124.62-.176.897l-.035.037c-.42-.006-.566-.006-1.05.018l-.022-.04.238-.998c.203-.9.25-1.245.307-1.702l.038-.028c.472-.067.587-.08 1.098-.185l.04.047-.073.287c.084-.052.17-.104.257-.15.24-.12.51-.155.655-.155.224 0 .47.062.575.323.095.232.03.52-.098 1.084l-.065.287c-.133.627-.154.743-.225 1.174l-.05.036zM26.32 8.756c-.07.326-.282.603-.554.736-.225.114-.498.123-.78.123h-.183l.013-.074.336-1.468.01-.076.007-.058.132.015.71.062c.275.105.388.38.31.74zM25.88 7.22l-.34.003c-.883.01-1.238.006-1.383-.012l-.037.182-.315 1.478-.793 3.288c.77-.01 1.088-.01 1.22.004l.21-1.024s.153-.644.163-.667c0 0 .047-.066.096-.092h.07c.665 0 1.417 0 2.005-.437.4-.298.675-.74.797-1.274.03-.132.054-.29.054-.446 0-.205-.04-.41-.16-.568-.3-.423-.896-.43-1.588-.433zM33.572 9.28l-.04-.043c-.502.1-.594.118-1.058.18l-.034.034-.005.023-.003-.007c-.345.803-.334.63-.615 1.26-.003-.03-.003-.048-.004-.077l-.07-1.37-.044-.043c-.53.1-.542.118-1.03.18l-.04.034-.006.056.003.007c.06.315.047.244.108.738.03.244.065.49.093.73.05.4.077.6.134 1.21-.328.55-.408.757-.722 1.238l.017.044c.478-.018.587-.018.94-.018l.08-.088c.265-.578 2.295-4.085 2.295-4.085zM16.318 9.62c.27-.19.304-.45.076-.586-.23-.137-.634-.094-.906.095-.273.186-.304.45-.075.586.228.134.633.094.905-.096z" fill="#FEFEFE" />\n      <path d="M31.238 13.415l-.397.684c-.124.232-.357.407-.728.41l-.632-.01.184-.618h.124c.064 0 .11-.004.148-.022.03-.01.054-.035.08-.072l.233-.373h.988z" fill="#FEFEFE" />\n    </symbol>\n\n    <symbol id="icon-american-express" viewBox="0 0 40 24">\n      <title>American Express</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" fill="#FFF" />\n      <path fill="#1478BE" d="M6.26 12.32h2.313L7.415 9.66M27.353 9.977h-3.738v1.23h3.666v1.384h-3.675v1.385h3.821v1.005c.623-.77 1.33-1.466 2.025-2.235l.707-.77c-.934-1.004-1.87-2.08-2.804-3.075v1.077z" />\n      <path d="M38.25 7h-5.605l-1.328 1.4L30.072 7H16.984l-1.017 2.416L14.877 7h-9.58L1.25 16.5h4.826l.623-1.556h1.4l.623 1.556H29.99l1.327-1.483 1.328 1.483h5.605l-4.36-4.667L38.25 7zm-17.685 8.1h-1.557V9.883L16.673 15.1h-1.33L13.01 9.883l-.084 5.217H9.73l-.623-1.556h-3.27L5.132 15.1H3.42l2.884-6.772h2.42l2.645 6.233V8.33h2.646l2.107 4.51 1.868-4.51h2.575V15.1zm14.727 0h-2.024l-2.024-2.26-2.023 2.26H22.06V8.328H29.53l1.795 2.177 2.024-2.177h2.025L32.26 11.75l3.032 3.35z" fill="#1478BE" />\n    </symbol>\n\n    <symbol id="icon-jcb" viewBox="0 0 40 24">\n      <title>JCB</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" fill="#FFF" />\n      <path d="M33.273 2.01h.013v17.062c-.004 1.078-.513 2.103-1.372 2.746-.63.47-1.366.67-2.14.67-.437 0-4.833.026-4.855 0-.01-.01 0-.07 0-.082v-6.82c0-.04.004-.064.033-.064h5.253c.867 0 1.344-.257 1.692-.61.44-.448.574-1.162.294-1.732-.24-.488-.736-.78-1.244-.913-.158-.04-.32-.068-.483-.083-.01 0-.064 0-.07-.006-.03-.034.023-.04.038-.046.102-.033.215-.042.32-.073.532-.164.993-.547 1.137-1.105.15-.577-.05-1.194-.524-1.552-.34-.257-.768-.376-1.187-.413-.43-.038-4.774-.022-5.21-.022-.072 0-.05-.02-.05-.09V5.63c0-.31.01-.616.073-.92.126-.592.41-1.144.815-1.59.558-.615 1.337-1.01 2.16-1.093.478-.048 4.89-.017 5.305-.017zm-4.06 8.616c.06.272-.01.567-.204.77-.173.176-.407.25-.648.253-.195.003-1.725 0-1.788 0l.003-1.645c.012-.027.02-.018.06-.018.097 0 1.713-.004 1.823.005.232.02.45.12.598.306.076.096.128.208.155.328zm-2.636 2.038h1.944c.242.002.47.063.652.228.226.204.327.515.283.815-.04.263-.194.5-.422.634-.187.112-.39.125-.6.125h-1.857v-1.8z" fill="#53B230" />\n      <path d="M6.574 13.89c-.06-.03-.06-.018-.07-.06-.006-.026-.005-8.365.003-8.558.04-.95.487-1.857 1.21-2.47.517-.434 1.16-.71 1.83-.778.396-.04.803-.018 1.2-.018.69 0 4.11-.013 4.12 0 .008.008.002 16.758 0 17.074-.003.956-.403 1.878-1.105 2.523-.506.465-1.15.77-1.83.86-.41.056-5.02.032-5.363.032-.066 0-.054.013-.066-.024-.01-.025 0-7 0-7.17.66.178 1.35.28 2.03.348.662.067 1.33.093 1.993.062.93-.044 1.947-.192 2.712-.762.32-.238.574-.553.73-.922.148-.353.2-.736.2-1.117 0-.348.006-3.93-.016-3.942-.023-.014-2.885-.015-2.9.012-.012.022 0 3.87 0 3.95-.003.47-.16.933-.514 1.252-.468.42-1.11.47-1.707.423-.687-.055-1.357-.245-1.993-.508-.157-.065-.312-.135-.466-.208z" fill="#006CB9" />\n      <path d="M15.95 9.835c-.025.02-.05.04-.072.06V6.05c0-.295-.012-.594.01-.888.12-1.593 1.373-2.923 2.944-3.126.382-.05 5.397-.042 5.41-.026.01.01 0 .062 0 .074v16.957c0 1.304-.725 2.52-1.89 3.1-.504.25-1.045.35-1.605.35-.322 0-4.757.015-4.834 0-.05-.01-.023.01-.035-.02-.007-.022 0-6.548 0-7.44v-.422c.554.48 1.256.75 1.96.908.536.12 1.084.176 1.63.196.537.02 1.076.01 1.61-.037.546-.05 1.088-.136 1.625-.244.137-.028.274-.057.41-.09.033-.006.17-.017.187-.044.013-.02 0-.097 0-.12v-1.324c-.582.292-1.19.525-1.83.652-.778.155-1.64.198-2.385-.123-.752-.326-1.2-1.024-1.274-1.837-.076-.837.173-1.716.883-2.212.736-.513 1.7-.517 2.553-.38.634.1 1.245.305 1.825.58.078.037.154.075.23.113V9.322c0-.02.013-.1 0-.118-.02-.028-.152-.038-.188-.046-.066-.016-.133-.03-.2-.045C22.38 9 21.84 8.908 21.3 8.85c-.533-.06-1.068-.077-1.603-.066-.542.01-1.086.054-1.62.154-.662.125-1.32.337-1.883.716-.085.056-.167.117-.245.18z" fill="#E20138" />\n    </symbol>\n\n    <symbol id="icon-discover" viewBox="0 0 40 24">\n      <title>Discover</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" fill="#FFF" />\n      <path d="M38.995 11.75S27.522 20.1 6.5 23.5h31.495c.552 0 1-.448 1-1V11.75z" fill="#F48024" />\n      <path d="M5.332 11.758c-.338.305-.776.438-1.47.438h-.29V8.55h.29c.694 0 1.115.124 1.47.446.37.33.595.844.595 1.372 0 .53-.224 1.06-.595 1.39zM4.077 7.615H2.5v5.515h1.57c.833 0 1.435-.197 1.963-.637.63-.52 1-1.305 1-2.116 0-1.628-1.214-2.762-2.956-2.762zM7.53 13.13h1.074V7.616H7.53M11.227 9.732c-.645-.24-.834-.397-.834-.695 0-.347.338-.61.8-.61.322 0 .587.132.867.446l.562-.737c-.462-.405-1.015-.612-1.618-.612-.975 0-1.718.678-1.718 1.58 0 .76.346 1.15 1.355 1.513.42.148.635.247.743.314.215.14.322.34.322.57 0 .448-.354.78-.834.78-.51 0-.924-.258-1.17-.736l-.695.67c.495.726 1.09 1.05 1.907 1.05 1.116 0 1.9-.745 1.9-1.812 0-.876-.363-1.273-1.585-1.72zM13.15 10.377c0 1.62 1.27 2.877 2.907 2.877.462 0 .858-.09 1.347-.32v-1.267c-.43.43-.81.604-1.297.604-1.082 0-1.85-.785-1.85-1.9 0-1.06.792-1.895 1.8-1.895.512 0 .9.183 1.347.62V7.83c-.472-.24-.86-.34-1.322-.34-1.627 0-2.932 1.283-2.932 2.887zM25.922 11.32l-1.468-3.705H23.28l2.337 5.656h.578l2.38-5.655H27.41M29.06 13.13h3.046v-.934h-1.973v-1.488h1.9v-.934h-1.9V8.55h1.973v-.935H29.06M34.207 10.154h-.314v-1.67h.33c.67 0 1.034.28 1.034.818 0 .554-.364.852-1.05.852zm2.155-.91c0-1.033-.71-1.628-1.95-1.628H32.82v5.514h1.073v-2.215h.14l1.487 2.215h1.32l-1.733-2.323c.81-.165 1.255-.72 1.255-1.563z" fill="#221F20" />\n      <path d="M23.6 10.377c0 1.62-1.31 2.93-2.927 2.93-1.617.002-2.928-1.31-2.928-2.93s1.31-2.932 2.928-2.932c1.618 0 2.928 1.312 2.928 2.932z" fill="#F48024" />\n    </symbol>\n\n    <symbol id="icon-diners-club" viewBox="0 0 40 24">\n      <title>Diners Club</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" fill="#FFF" />\n      <path d="M9.02 11.83c0-5.456 4.54-9.88 10.14-9.88 5.6 0 10.139 4.424 10.139 9.88-.002 5.456-4.54 9.88-10.14 9.88-5.6 0-10.14-4.424-10.14-9.88z" fill="#FEFEFE" />\n      <path fill="#FFF" d="M32.522 22H8.5V1.5h24.022" />\n      <path d="M25.02 11.732c-.003-2.534-1.607-4.695-3.868-5.55v11.102c2.26-.857 3.865-3.017 3.87-5.552zm-8.182 5.55V6.18c-2.26.86-3.86 3.017-3.867 5.55.007 2.533 1.61 4.69 3.868 5.55zm2.158-14.934c-5.25.002-9.503 4.202-9.504 9.384 0 5.182 4.254 9.38 9.504 9.382 5.25 0 9.504-4.2 9.505-9.382 0-5.182-4.254-9.382-9.504-9.384zM18.973 22C13.228 22.027 8.5 17.432 8.5 11.84 8.5 5.726 13.228 1.5 18.973 1.5h2.692c5.677 0 10.857 4.225 10.857 10.34 0 5.59-5.18 10.16-10.857 10.16h-2.692z" fill="#004A97" />\n    </symbol>\n\n    <symbol id="icon-maestro" viewBox="0 0 40 24">\n      <title>Maestro</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" fill="#FFF" />\n      <path d="M14.67 22.39V21c.022-.465-.303-.86-.767-.882h-.116c-.3-.023-.603.14-.788.394-.164-.255-.442-.417-.743-.394-.256-.023-.51.116-.65.324v-.278h-.487v2.203h.487v-1.183c-.046-.278.162-.533.44-.58h.094c.325 0 .488.21.488.58v1.23h.487v-1.23c-.047-.278.162-.556.44-.58h.093c.325 0 .487.21.487.58v1.23l.534-.024zm2.712-1.09v-1.113h-.487v.28c-.162-.21-.417-.326-.695-.326-.65 0-1.16.51-1.16 1.16 0 .65.51 1.16 1.16 1.16.278 0 .533-.117.695-.325v.278h.487V21.3zm-1.786 0c.024-.37.348-.65.72-.626.37.023.65.348.626.72-.023.347-.302.625-.673.625-.372 0-.674-.28-.674-.65-.023-.047-.023-.047 0-.07zm12.085-1.16c.163 0 .325.024.465.094.14.046.278.14.37.255.117.115.186.23.256.37.117.3.117.626 0 .927-.046.14-.138.255-.254.37-.116.117-.232.186-.37.256-.303.116-.65.116-.952 0-.14-.046-.28-.14-.37-.255-.118-.116-.187-.232-.257-.37-.116-.302-.116-.627 0-.928.047-.14.14-.255.256-.37.115-.117.23-.187.37-.256.163-.07.325-.116.488-.093zm0 .465c-.092 0-.185.023-.278.046-.092.024-.162.094-.232.14-.07.07-.116.14-.14.232-.068.185-.068.394 0 .58.024.092.094.162.14.23.07.07.14.117.232.14.186.07.37.07.557 0 .092-.023.16-.092.23-.14.07-.068.117-.138.14-.23.07-.186.07-.395 0-.58-.023-.093-.093-.162-.14-.232-.07-.07-.138-.116-.23-.14-.094-.045-.187-.07-.28-.045zm-7.677.695c0-.695-.44-1.16-1.043-1.16-.65 0-1.16.534-1.137 1.183.023.65.534 1.16 1.183 1.136.325 0 .65-.093.905-.302l-.23-.348c-.187.14-.42.232-.65.232-.326.023-.627-.21-.673-.533h1.646v-.21zm-1.646-.21c.023-.3.278-.532.58-.532.3 0 .556.232.556.533h-1.136zm3.664-.346c-.207-.116-.44-.186-.695-.186-.255 0-.417.093-.417.255 0 .163.162.186.37.21l.233.022c.488.07.766.278.766.672 0 .395-.37.72-1.02.72-.348 0-.673-.094-.95-.28l.23-.37c.21.162.465.232.743.232.324 0 .51-.094.51-.28 0-.115-.117-.185-.395-.23l-.232-.024c-.487-.07-.765-.302-.765-.65 0-.44.37-.718.927-.718.325 0 .627.07.905.232l-.21.394zm2.32-.116h-.788v.997c0 .23.07.37.325.37.14 0 .3-.046.417-.115l.14.417c-.186.116-.395.162-.604.162-.58 0-.765-.302-.765-.812v-1.02h-.44v-.44h.44v-.673h.487v.672h.79v.44zm1.67-.51c.117 0 .233.023.35.07l-.14.463c-.093-.045-.21-.045-.302-.045-.325 0-.464.208-.464.58v1.25h-.487v-2.2h.487v.277c.116-.255.325-.37.557-.394z" fill="#000" />\n      <path fill="#7673C0" d="M23.64 3.287h-7.305V16.41h7.306" />\n      <path d="M16.8 9.848c0-2.55 1.183-4.985 3.2-6.56C16.384.435 11.12 1.06 8.29 4.7 5.435 8.32 6.06 13.58 9.703 16.41c3.038 2.387 7.283 2.387 10.32 0-2.04-1.578-3.223-3.99-3.223-6.562z" fill="#EB001B" />\n      <path d="M33.5 9.848c0 4.613-3.735 8.346-8.35 8.346-1.88 0-3.69-.626-5.15-1.785 3.618-2.83 4.245-8.092 1.415-11.71-.418-.532-.882-.996-1.415-1.413C23.618.437 28.883 1.06 31.736 4.7 32.873 6.163 33.5 7.994 33.5 9.85z" fill="#00A1DF" />\n    </symbol>\n\n    <symbol id="icon-elo" viewBox="0 0 48 29">\n      <title>Elo</title>\n      <path d="M46.177 29H1.823C.9 29 0 28.13 0 27.187V1.813C0 .87.9 0 1.823 0h44.354C47.1 0 48 .87 48 1.813v25.375C48 28.13 47.1 29 46.177 29z" fill="#FFF" />\n      <path d="M4.8 9.14c0-.427.57-.973 1.067-.973h7.466c.496 0 1.067.546 1.067.972v3.888c0 .425-.57.972-1.067.972H5.867c-.496 0-1.067-.547-1.067-.972v-3.89z" fill="#828282" />\n      <rect fill="#828282" x="10.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <rect fill="#828282" x="4.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <path d="M6.55 16.333h34.9c.966 0 1.75.784 1.75 1.75 0 .967-.784 1.75-1.75 1.75H6.55c-.966 0-1.75-.783-1.75-1.75 0-.966.784-1.75 1.75-1.75z" fill="#828282" />\n      <ellipse fill="#828282" cx="40.2" cy="6.417" rx="3" ry="2.917" />\n    </symbol>\n\n    <symbol id="icon-hiper" viewBox="0 0 48 29">\n      <title>Hiper</title>\n      <path d="M46.177 29H1.823C.9 29 0 28.13 0 27.187V1.813C0 .87.9 0 1.823 0h44.354C47.1 0 48 .87 48 1.813v25.375C48 28.13 47.1 29 46.177 29z" fill="#FFF" />\n      <path d="M4.8 9.14c0-.427.57-.973 1.067-.973h7.466c.496 0 1.067.546 1.067.972v3.888c0 .425-.57.972-1.067.972H5.867c-.496 0-1.067-.547-1.067-.972v-3.89z" fill="#828282" />\n      <rect fill="#828282" x="10.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <rect fill="#828282" x="4.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <path d="M6.55 16.333h34.9c.966 0 1.75.784 1.75 1.75 0 .967-.784 1.75-1.75 1.75H6.55c-.966 0-1.75-.783-1.75-1.75 0-.966.784-1.75 1.75-1.75z" fill="#828282" />\n      <ellipse fill="#828282" cx="40.2" cy="6.417" rx="3" ry="2.917" />\n    </symbol>\n\n    <symbol id="icon-hipercard" viewBox="0 0 48 29">\n      <title>Hipercard</title>\n      <path d="M46.177 29H1.823C.9 29 0 28.13 0 27.187V1.813C0 .87.9 0 1.823 0h44.354C47.1 0 48 .87 48 1.813v25.375C48 28.13 47.1 29 46.177 29z" fill="#FFF" />\n      <path d="M4.8 9.14c0-.427.57-.973 1.067-.973h7.466c.496 0 1.067.546 1.067.972v3.888c0 .425-.57.972-1.067.972H5.867c-.496 0-1.067-.547-1.067-.972v-3.89z" fill="#828282" />\n      <rect fill="#828282" x="10.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <rect fill="#828282" x="4.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <path d="M6.55 16.333h34.9c.966 0 1.75.784 1.75 1.75 0 .967-.784 1.75-1.75 1.75H6.55c-.966 0-1.75-.783-1.75-1.75 0-.966.784-1.75 1.75-1.75z" fill="#828282" />\n      <ellipse fill="#828282" cx="40.2" cy="6.417" rx="3" ry="2.917" />\n    </symbol>\n\n    <symbol id="logoPayPal" viewBox="0 0 48 29">\n      <title>PayPal Logo</title>\n      <path d="M46 29H2c-1.1 0-2-.87-2-1.932V1.934C0 .87.9 0 2 0h44c1.1 0 2 .87 2 1.934v25.134C48 28.13 47.1 29 46 29z" fill-opacity="0" fill="#FFF" />\n      <path d="M31.216 16.4c.394-.7.69-1.5.886-2.4.196-.8.196-1.6.1-2.2-.1-.7-.396-1.2-.79-1.7-.195-.3-.59-.5-.885-.7.1-.8.1-1.5 0-2.1-.1-.6-.394-1.1-.886-1.6-.885-1-2.56-1.6-4.922-1.6h-6.4c-.492 0-.787.3-.886.8l-2.658 17.2c0 .2 0 .3.1.4.097.1.294.2.393.2h4.036l-.295 1.8c0 .1 0 .3.1.4.098.1.195.2.393.2h3.35c.393 0 .688-.3.786-.7v-.2l.59-4.1v-.2c.1-.4.395-.7.788-.7h.59c1.675 0 3.152-.4 4.137-1.1.59-.5 1.083-1 1.478-1.7h-.002z" fill="#263B80" />\n      <path d="M21.364 9.4c0-.3.196-.5.492-.6.098-.1.196-.1.394-.1h5.02c.592 0 1.183 0 1.675.1.1 0 .295.1.394.1.098 0 .294.1.393.1.1 0 .1 0 .197.102.295.1.492.2.69.3.295-1.6 0-2.7-.887-3.8-.985-1.1-2.658-1.6-4.923-1.6h-6.4c-.49 0-.885.3-.885.8l-2.758 17.3c-.098.3.197.6.59.6h3.94l.985-6.4 1.083-6.9z" fill="#263B80" />\n      <path d="M30.523 9.4c0 .1 0 .3-.098.4-.887 4.4-3.742 5.9-7.484 5.9h-1.87c-.492 0-.787.3-.886.8l-.985 6.2-.296 1.8c0 .3.196.6.492.6h3.348c.394 0 .69-.3.787-.7v-.2l.592-4.1v-.2c.1-.4.394-.7.787-.7h.69c3.248 0 5.808-1.3 6.497-5.2.296-1.6.197-3-.69-3.9-.196-.3-.49-.5-.885-.7z" fill="#159BD7" />\n      <path d="M29.635 9c-.098 0-.295-.1-.394-.1-.098 0-.294-.1-.393-.1-.492-.102-1.083-.102-1.673-.102h-5.022c-.1 0-.197 0-.394.1-.198.1-.394.3-.492.6l-1.083 6.9v.2c.1-.5.492-.8.886-.8h1.87c3.742 0 6.598-1.5 7.484-5.9 0-.1 0-.3.098-.4-.196-.1-.492-.2-.69-.3 0-.1-.098-.1-.196-.1z" fill="#232C65" />\n    </symbol>\n\n    <symbol id="logoPayPalCredit" viewBox="0 0 48 29">\n      <title>PayPal Credit Logo</title>\n      <path d="M46 29H2c-1.1 0-2-.87-2-1.932V1.934C0 .87.9 0 2 0h44c1.1 0 2 .87 2 1.934v25.134C48 28.13 47.1 29 46 29z" fill-opacity="0" fill="#FFF" fill-rule="nonzero" />\n      <path d="M27.44 21.6h.518c1.377 0 2.67-.754 2.953-2.484.248-1.588-.658-2.482-2.14-2.482h-.38c-.093 0-.172.067-.187.16l-.763 4.805zm-1.254-6.646c.024-.158.16-.273.32-.273h2.993c2.47 0 4.2 1.942 3.81 4.436-.4 2.495-2.752 4.436-5.21 4.436h-3.05c-.116 0-.205-.104-.187-.218l1.323-8.38zM22.308 16.907l-.192 1.21h2.38c.116 0 .204.103.186.217l-.23 1.462c-.023.157-.16.273-.318.273h-2.048c-.16 0-.294.114-.32.27l-.203 1.26h2.52c.117 0 .205.102.187.217l-.228 1.46c-.025.16-.16.275-.32.275h-4.55c-.116 0-.204-.104-.186-.218l1.322-8.38c.025-.158.16-.273.32-.273h4.55c.116 0 .205.104.187.22l-.23 1.46c-.024.158-.16.274-.32.274H22.63c-.16 0-.295.115-.32.273M35.325 23.552h-1.81c-.115 0-.203-.104-.185-.218l1.322-8.38c.025-.158.16-.273.32-.273h1.81c.115 0 .203.104.185.22l-1.322 8.38c-.025.156-.16.272-.32.272M14.397 18.657h.224c.754 0 1.62-.14 1.777-1.106.158-.963-.345-1.102-1.15-1.104h-.326c-.097 0-.18.07-.197.168l-.326 2.043zm3.96 4.895h-2.37c-.102 0-.194-.058-.238-.15l-1.565-3.262h-.023l-.506 3.19c-.02.128-.13.222-.26.222h-1.86c-.116 0-.205-.104-.187-.218l1.33-8.432c.02-.128.13-.22.26-.22h3.222c1.753 0 2.953.834 2.66 2.728-.2 1.224-1.048 2.283-2.342 2.506l2.037 3.35c.076.125-.014.286-.16.286zM40.216 23.552h-1.808c-.116 0-.205-.104-.187-.218l1.06-6.7h-1.684c-.116 0-.205-.104-.187-.218l.228-1.462c.025-.157.16-.273.32-.273h5.62c.116 0 .205.104.186.22l-.228 1.46c-.025.158-.16.274-.32.274h-1.63l-1.05 6.645c-.025.156-.16.272-.32.272M11.467 17.202c-.027.164-.228.223-.345.104-.395-.405-.975-.62-1.6-.62-1.41 0-2.526 1.083-2.75 2.458-.21 1.4.588 2.41 2.022 2.41.592 0 1.22-.225 1.74-.6.144-.105.34.02.313.194l-.328 2.03c-.02.12-.108.22-.226.254-.702.207-1.24.355-1.9.355-3.823 0-4.435-3.266-4.238-4.655.553-3.894 3.712-4.786 5.65-4.678.623.034 1.182.117 1.73.323.177.067.282.25.252.436l-.32 1.99" fill="#21306F" />\n      <path d="M23.184 7.67c-.11.717-.657.717-1.186.717h-.302l.212-1.34c.013-.08.082-.14.164-.14h.138c.36 0 .702 0 .877.206.105.123.137.305.097.557zm-.23-1.87h-1.998c-.137 0-.253.098-.274.233l-.808 5.123c-.016.1.062.192.165.192h1.024c.095 0 .177-.07.192-.164l.23-1.452c.02-.135.136-.235.273-.235h.63c1.317 0 2.076-.636 2.275-1.898.09-.553.003-.987-.255-1.29-.284-.334-.788-.51-1.456-.51z" fill="#0093C7" />\n      <path d="M8.936 7.67c-.11.717-.656.717-1.186.717h-.302l.212-1.34c.013-.08.082-.14.164-.14h.138c.36 0 .702 0 .877.206.104.123.136.305.096.557zm-.23-1.87H6.708c-.136 0-.253.098-.274.233l-.808 5.123c-.016.1.062.192.165.192h.955c.136 0 .252-.1.274-.234l.217-1.382c.02-.135.137-.235.274-.235h.633c1.316 0 2.075-.636 2.274-1.898.09-.553.003-.987-.255-1.29-.284-.334-.788-.51-1.456-.51zM13.343 9.51c-.092.545-.526.912-1.08.912-.277 0-.5-.09-.642-.258-.14-.168-.193-.406-.148-.672.086-.542.527-.92 1.072-.92.27 0 .492.09.637.26.148.172.205.412.163.677zm1.334-1.863h-.957c-.082 0-.152.06-.164.14l-.042.268-.067-.097c-.208-.3-.67-.4-1.13-.4-1.057 0-1.96.8-2.135 1.923-.092.56.038 1.097.356 1.47.29.344.708.487 1.204.487.852 0 1.325-.548 1.325-.548l-.043.265c-.016.1.062.193.164.193h.862c.136 0 .253-.1.274-.234l.517-3.275c.017-.102-.06-.193-.163-.193z" fill="#21306F" />\n      <path d="M27.59 9.51c-.09.545-.525.912-1.078.912-.278 0-.5-.09-.643-.258-.142-.168-.195-.406-.15-.672.086-.542.526-.92 1.07-.92.273 0 .494.09.64.26.146.172.203.412.16.677zm1.334-1.863h-.956c-.082 0-.152.06-.164.14l-.043.268-.065-.097c-.208-.3-.67-.4-1.13-.4-1.057 0-1.96.8-2.136 1.923-.092.56.038 1.097.355 1.47.292.344.71.487 1.205.487.852 0 1.325-.548 1.325-.548l-.043.265c-.016.1.062.193.164.193h.862c.136 0 .253-.1.274-.234l.517-3.275c.015-.102-.063-.193-.166-.193z" fill="#0093C7" />\n      <path d="M19.77 7.647h-.96c-.092 0-.178.045-.23.122L17.254 9.72l-.562-1.877c-.035-.118-.143-.198-.266-.198h-.945c-.113 0-.194.112-.157.22l1.06 3.108-.997 1.404c-.078.11 0 .262.136.262h.96c.092 0 .177-.044.23-.12l3.196-4.614c.077-.11-.002-.26-.137-.26" fill="#21306F" />\n      <path d="M30.052 5.94l-.82 5.216c-.016.1.062.192.165.192h.824c.138 0 .254-.1.275-.234l.81-5.122c.015-.1-.064-.193-.166-.193h-.924c-.082 0-.15.06-.164.14" fill="#0093C7" />\n    </symbol>\n\n    <symbol id="iconCardFront" viewBox="0 0 48 29">\n      <title>Generic Card</title>\n      <path d="M46.177 29H1.823C.9 29 0 28.13 0 27.187V1.813C0 .87.9 0 1.823 0h44.354C47.1 0 48 .87 48 1.813v25.375C48 28.13 47.1 29 46.177 29z" fill="#FFF" />\n      <path d="M4.8 9.14c0-.427.57-.973 1.067-.973h7.466c.496 0 1.067.546 1.067.972v3.888c0 .425-.57.972-1.067.972H5.867c-.496 0-1.067-.547-1.067-.972v-3.89z" fill="#828282" />\n      <rect fill="#828282" x="10.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <rect fill="#828282" x="4.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <path d="M6.55 16.333h34.9c.966 0 1.75.784 1.75 1.75 0 .967-.784 1.75-1.75 1.75H6.55c-.966 0-1.75-.783-1.75-1.75 0-.966.784-1.75 1.75-1.75z" fill="#828282" />\n      <ellipse fill="#828282" cx="40.2" cy="6.417" rx="3" ry="2.917" />\n    </symbol>\n\n    <symbol id="iconCVVBack" viewBox="0 0 40 24">\n      <title>CVV Back</title>\n      <path d="M38.48 24H1.52C.75 24 0 23.28 0 22.5v-21C0 .72.75 0 1.52 0h36.96C39.25 0 40 .72 40 1.5v21c0 .78-.75 1.5-1.52 1.5z" fill="#FFF"/>\n      <path fill="#828282" d="M0 5h40v4H0z" />\n      <path d="M20 13.772v5.456c0 .423.37.772.82.772h13.36c.45 0 .82-.35.82-.772v-5.456c0-.423-.37-.772-.82-.772H20.82c-.45 0-.82.35-.82.772zm-1-.142c0-.9.76-1.63 1.68-1.63h13.64c.928 0 1.68.737 1.68 1.63v5.74c0 .9-.76 1.63-1.68 1.63H20.68c-.928 0-1.68-.737-1.68-1.63v-5.74z" fill="#000" fill-rule="nonzero" />\n      <circle fill="#828282" cx="23.5" cy="16.5" r="1.5" />\n      <circle fill="#828282" cx="27.5" cy="16.5" r="1.5" />\n      <circle fill="#828282" cx="31.5" cy="16.5" r="1.5" />\n    </symbol>\n\n    <symbol id="iconCVVFront" viewBox="0 0 40 24">\n      <title>CVV Front</title>\n      <path d="M38.48 24H1.52C.75 24 0 23.28 0 22.5v-21C0 .72.75 0 1.52 0h36.96C39.25 0 40 .72 40 1.5v21c0 .78-.75 1.5-1.52 1.5z" fill="#FFF" />\n      <path d="M16 5.772v5.456c0 .423.366.772.81.772h17.38c.444 0 .81-.348.81-.772V5.772C35 5.35 34.634 5 34.19 5H16.81c-.444 0-.81.348-.81.772zm-1-.142c0-.9.75-1.63 1.66-1.63h17.68c.917 0 1.66.737 1.66 1.63v5.74c0 .9-.75 1.63-1.66 1.63H16.66c-.917 0-1.66-.737-1.66-1.63V5.63z" fill="#000" fill-rule="nonzero" />\n      <circle fill="#828282" cx="19.5" cy="8.5" r="1.5" />\n      <circle fill="#828282" cx="27.5" cy="8.5" r="1.5" />\n      <circle fill="#828282" cx="23.5" cy="8.5" r="1.5" />\n      <circle fill="#828282" cx="31.5" cy="8.5" r="1.5" />\n      <path d="M4 7.833C4 7.47 4.476 7 4.89 7h6.22c.414 0 .89.47.89.833v3.334c0 .364-.476.833-.89.833H4.89c-.414 0-.89-.47-.89-.833V7.833zM4 18.5c0-.828.668-1.5 1.5-1.5h29c.828 0 1.5.666 1.5 1.5 0 .828-.668 1.5-1.5 1.5h-29c-.828 0-1.5-.666-1.5-1.5z" fill="#828282" />\n    </symbol>\n\n    <symbol id="iconCheck" viewBox="0 0 42 32">\n      <title>Check</title>\n      <path class="path1" d="M14.379 29.76L39.741 3.415 36.194.001l-21.815 22.79-10.86-11.17L0 15.064z" />\n    </symbol>\n\n    <symbol id="iconX" viewBox="0 0 32 32">\n      <title>X</title>\n      <path d="M29 3.54L25.46 0 14.5 10.97 3.54 0.01 0 3.54 10.96 14.5 0.01 25.46 3.54 28.99 14.5 18.04 25.46 29 28.99 25.46 18.03 14.5 29 3.54z"/>\n    </symbol>\n\n    <symbol id="iconLockLoader" viewBox="0 0 28 32">\n      <title>Lock Loader</title>\n      <path d="M6 10V8c0-4.422 3.582-8 8-8 4.41 0 8 3.582 8 8v2h-4V7.995C18 5.79 16.205 4 14 4c-2.21 0-4 1.792-4 3.995V10H6zM.997 14c-.55 0-.997.445-.997.993v16.014c0 .548.44.993.997.993h26.006c.55 0 .997-.445.997-.993V14.993c0-.548-.44-.993-.997-.993H.997z" />\n    </symbol>\n\n    <symbol id="iconError" height="24" viewBox="0 0 24 24" width="24">\n      <path d="M0 0h24v24H0z" fill="none" />\n      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />\n    </symbol>\n\n    <symbol id="logoApplePay" viewBox="0 0 165.52 105.97">\n      <title>Apple Pay Logo</title>\n      <path id="_Path_" data-name="&lt;Path&gt;" fill="#231f20" d="M150.7 0h-139a20.78 20.78 0 0 0-3.12.3 10.51 10.51 0 0 0-3 1 9.94 9.94 0 0 0-4.31 4.32 10.46 10.46 0 0 0-1 3A20.65 20.65 0 0 0 0 11.7v82.57a20.64 20.64 0 0 0 .3 3.11 10.46 10.46 0 0 0 1 3 9.94 9.94 0 0 0 4.35 4.35 10.47 10.47 0 0 0 3 1 20.94 20.94 0 0 0 3.11.27h142.06a21 21 0 0 0 3.11-.27 10.48 10.48 0 0 0 3-1 9.94 9.94 0 0 0 4.35-4.35 10.4 10.4 0 0 0 1-3 20.63 20.63 0 0 0 .27-3.11V11.69a20.64 20.64 0 0 0-.27-3.11 10.4 10.4 0 0 0-1-3 9.94 9.94 0 0 0-4.35-4.35 10.52 10.52 0 0 0-3-1 20.84 20.84 0 0 0-3.1-.23h-1.43z"/>\n      <path id="_Path_2" data-name="&lt;Path&gt;" fill="#fff" d="M150.7 3.53h3.03a17.66 17.66 0 0 1 2.58.22 7 7 0 0 1 2 .65 6.41 6.41 0 0 1 2.8 2.81 6.88 6.88 0 0 1 .64 2 17.56 17.56 0 0 1 .22 2.58v82.38a17.54 17.54 0 0 1-.22 2.59 6.85 6.85 0 0 1-.64 2 6.41 6.41 0 0 1-2.81 2.81 6.92 6.92 0 0 1-2 .65 18 18 0 0 1-2.57.22H11.79a18 18 0 0 1-2.58-.22 6.94 6.94 0 0 1-2-.65 6.41 6.41 0 0 1-2.8-2.8 6.93 6.93 0 0 1-.65-2 17.47 17.47 0 0 1-.22-2.58v-82.4a17.49 17.49 0 0 1 .22-2.59 6.92 6.92 0 0 1 .65-2 6.41 6.41 0 0 1 2.8-2.8 7 7 0 0 1 2-.65 17.63 17.63 0 0 1 2.58-.22H150.7"/>\n      <g id="_Group_" data-name="&lt;Group&gt;">\n      <g id="_Group_2" data-name="&lt;Group&gt;">\n      <path id="_Path_3" data-name="&lt;Path&gt;" class="cls-1" d="M43.51 35.77a9.15 9.15 0 0 0 2.1-6.52 9.07 9.07 0 0 0-6 3.11 8.56 8.56 0 0 0-2.16 6.27 7.57 7.57 0 0 0 6.06-2.86"/>\n      <path id="_Path_4" data-name="&lt;Path&gt;" class="cls-1" d="M45.59 39.08c-3.35-.2-6.2 1.9-7.79 1.9s-4-1.8-6.7-1.75a9.87 9.87 0 0 0-8.4 5.1c-3.6 6.2-.95 15.4 2.55 20.45 1.7 2.5 3.75 5.25 6.45 5.15s3.55-1.65 6.65-1.65 4 1.65 6.7 1.6 4.55-2.5 6.25-5a22.2 22.2 0 0 0 2.8-5.75 9.08 9.08 0 0 1-5.45-8.25A9.26 9.26 0 0 1 53 43.13a9.57 9.57 0 0 0-7.45-4"/>\n      </g>\n      <g id="_Group_3" data-name="&lt;Group&gt;">\n      <path id="_Compound_Path_" data-name="&lt;Compound Path&gt;" fill="#231f20" d="M79 32.11c7.28 0 12.35 5 12.35 12.32S86.15 56.8 78.79 56.8h-8.06v12.82h-5.82V32.11zm-8.27 19.81h6.68c5.07 0 8-2.73 8-7.46S82.48 37 77.44 37h-6.71z"/>\n      <path id="_Compound_Path_2" data-name="&lt;Compound Path&gt;" fill="#231f20" d="M92.76 61.85c0-4.81 3.67-7.56 10.42-8l7.25-.44v-2.06c0-3-2-4.7-5.56-4.7-2.94 0-5.07 1.51-5.51 3.82h-5.24c.16-4.86 4.73-8.4 10.92-8.4 6.65 0 11 3.48 11 8.89v18.66h-5.38v-4.5h-.13a9.59 9.59 0 0 1-8.58 4.78c-5.42 0-9.19-3.22-9.19-8.05zm17.68-2.42v-2.11l-6.47.42c-3.64.23-5.54 1.59-5.54 4s2 3.77 5.07 3.77c3.95-.05 6.94-2.57 6.94-6.08z"/>\n      <path id="_Compound_Path_3" data-name="&lt;Compound Path&gt;" fill="#231f20" d="M121 79.65v-4.5a17.14 17.14 0 0 0 1.72.1c2.57 0 4-1.09 4.91-3.9l.52-1.66-9.88-27.29h6.08l6.86 22.15h.13l6.86-22.15h5.93l-10.21 28.67c-2.34 6.58-5 8.73-10.68 8.73a15.93 15.93 0 0 1-2.24-.15z"/>\n      </g>\n      </g>\n    </symbol>\n    <symbol id="logoGooglePay" viewbox="0 0 752 400" >\n      <g>\n        <title>Google Pay Mark</title>\n        <path d="m552.7,0l-352,0c-110,0 -200,90 -200,200l0,0c0,110 90,200 200,200l352,0c110,0 200,-90 200,-200l0,0c0,-110 -90,-200 -200,-200z" fill="#FFFFFF" id="Base_1_"/>\n        <path d="m552.7,16.2c24.7,0 48.7,4.9 71.3,14.5c21.9,9.3 41.5,22.6 58.5,39.5c16.9,16.9 30.2,36.6 39.5,58.5c9.6,22.6 14.5,46.6 14.5,71.3s-4.9,48.7 -14.5,71.3c-9.3,21.9 -22.6,41.5 -39.5,58.5c-16.9,16.9 -36.6,30.2 -58.5,39.5c-22.6,9.6 -46.6,14.5 -71.3,14.5l-352,0c-24.7,0 -48.7,-4.9 -71.3,-14.5c-21.9,-9.3 -41.5,-22.6 -58.5,-39.5c-16.9,-16.9 -30.2,-36.6 -39.5,-58.5c-9.6,-22.6 -14.5,-46.6 -14.5,-71.3s4.9,-48.7 14.5,-71.3c9.3,-21.9 22.6,-41.5 39.5,-58.5c16.9,-16.9 36.6,-30.2 58.5,-39.5c22.6,-9.6 46.6,-14.5 71.3,-14.5l352,0m0,-16.2l-352,0c-110,0 -200,90 -200,200l0,0c0,110 90,200 200,200l352,0c110,0 200,-90 200,-200l0,0c0,-110 -90,-200 -200,-200l0,0z" fill="#3C4043" id="Outline"/>\n        <g id="G_Pay_Lockup_1_">\n         <g id="Pay_Typeface_3_">\n          <path d="m359.3,214.2l0,60.5l-19.2,0l0,-149.4l50.9,0c12.9,0 23.9,4.3 32.9,12.9c9.2,8.6 13.8,19.1 13.8,31.5c0,12.7 -4.6,23.2 -13.8,31.7c-8.9,8.5 -19.9,12.7 -32.9,12.7l-31.7,0l0,0.1zm0,-70.5l0,52.1l32.1,0c7.6,0 14,-2.6 19,-7.7c5.1,-5.1 7.7,-11.3 7.7,-18.3c0,-6.9 -2.6,-13 -7.7,-18.1c-5,-5.3 -11.3,-7.9 -19,-7.9l-32.1,0l0,-0.1z" fill="#3C4043" id="Letter_p_3_"/>\n          <path d="m487.9,169.1c14.2,0 25.4,3.8 33.6,11.4c8.2,7.6 12.3,18 12.3,31.2l0,63l-18.3,0l0,-14.2l-0.8,0c-7.9,11.7 -18.5,17.5 -31.7,17.5c-11.3,0 -20.7,-3.3 -28.3,-10s-11.4,-15 -11.4,-25c0,-10.6 4,-19 12,-25.2c8,-6.3 18.7,-9.4 32,-9.4c11.4,0 20.8,2.1 28.1,6.3l0,-4.4c0,-6.7 -2.6,-12.3 -7.9,-17c-5.3,-4.7 -11.5,-7 -18.6,-7c-10.7,0 -19.2,4.5 -25.4,13.6l-16.9,-10.6c9.3,-13.5 23.1,-20.2 41.3,-20.2zm-24.8,74.2c0,5 2.1,9.2 6.4,12.5c4.2,3.3 9.2,5 14.9,5c8.1,0 15.3,-3 21.6,-9s9.5,-13 9.5,-21.1c-6,-4.7 -14.3,-7.1 -25,-7.1c-7.8,0 -14.3,1.9 -19.5,5.6c-5.3,3.9 -7.9,8.6 -7.9,14.1z" fill="#3C4043" id="Letter_a_3_"/>\n          <path d="m638.2,172.4l-64,147.2l-19.8,0l23.8,-51.5l-42.2,-95.7l20.9,0l30.4,73.4l0.4,0l29.6,-73.4l20.9,0z" fill="#3C4043" id="Letter_y_3_"/>\n         </g>\n         <g id="G_Mark_1_">\n          <path d="m282.93,202c0,-6.26 -0.56,-12.25 -1.6,-18.01l-80.48,0l0,33l46.35,0.01c-1.88,10.98 -7.93,20.34 -17.2,26.58l0,21.41l27.59,0c16.11,-14.91 25.34,-36.95 25.34,-62.99z" fill="#4285F4" id="Blue_500"/>\n          <path d="m230.01,243.58c-7.68,5.18 -17.57,8.21 -29.14,8.21c-22.35,0 -41.31,-15.06 -48.1,-35.36l-28.46,0l0,22.08c14.1,27.98 43.08,47.18 76.56,47.18c23.14,0 42.58,-7.61 56.73,-20.71l-27.59,-21.4z" fill="#34A853" id="Green_500_1_"/>\n          <path d="m150.09,200.05c0,-5.7 0.95,-11.21 2.68,-16.39l0,-22.08l-28.46,0c-5.83,11.57 -9.11,24.63 -9.11,38.47s3.29,26.9 9.11,38.47l28.46,-22.08c-1.73,-5.18 -2.68,-10.69 -2.68,-16.39z" fill="#FABB05" id="Yellow_500_1_"/>\n          <path d="m200.87,148.3c12.63,0 23.94,4.35 32.87,12.85l24.45,-24.43c-14.85,-13.83 -34.21,-22.32 -57.32,-22.32c-33.47,0 -62.46,19.2 -76.56,47.18l28.46,22.08c6.79,-20.3 25.75,-35.36 48.1,-35.36z" fill="#E94235" id="Red_500"/>\n         </g>\n        </g>\n       </g>\n    </symbol>\n\n    <symbol id="logoVenmo" viewBox="0 0 48 32">\n      <title>Venmo</title>\n      <g fill="none" fill-rule="evenodd">\n        <rect fill="#3D95CE" width="47.4074074" height="31.6049383" rx="3.16049383"/>\n        <path d="M33.1851852,10.1131555 C33.1851852,14.8373944 29.2425262,20.9745161 26.0425868,25.2839506 L18.7337285,25.2839506 L15.8024691,7.35534396 L22.202175,6.73384536 L23.7519727,19.4912014 C25.2000422,17.0781163 26.9870326,13.2859484 26.9870326,10.7005 C26.9870326,9.28531656 26.7500128,8.32139205 26.3796046,7.52770719 L32.207522,6.32098765 C32.8813847,7.45939896 33.1851852,8.63196439 33.1851852,10.1131555 Z" fill="#FFF"/>\n      </g>\n    </symbol>\n    <symbol id="buttonVenmo" viewBox="0 0 295 42">\n      <g fill="none" fill-rule="evenodd">\n        <rect fill="#3D95CE" width="295" height="42" rx="3"/>\n        <path d="M11.3250791 0C11.7902741.780434316 12 1.58428287 12 2.59970884 12 5.838396 9.27822123 10.0456806 7.06917212 13L2.02356829 13 0 .709099732 4.41797878.283033306 5.48786751 9.02879887C6.48752911 7.3745159 7.72116169 4.77480706 7.72116169 3.00236102 7.72116169 2.03218642 7.55753727 1.37137098 7.30182933.827262801L11.3250791 0 11.3250791 0zM17.5051689 5.68512193C18.333931 5.68512193 20.4203856 5.28483546 20.4203856 4.03281548 20.4203856 3.43161451 20.0177536 3.13172102 19.5432882 3.13172102 18.7131868 3.13172102 17.6238766 4.18269796 17.5051689 5.68512193L17.5051689 5.68512193zM17.4102028 8.1647385C17.4102028 9.69351403 18.2153451 10.293301 19.2827401 10.293301 20.4451012 10.293301 21.5580312 9.99340752 23.0045601 9.21725797L22.4597224 13.1234575C21.440541 13.649203 19.8521716 14 18.310433 14 14.3996547 14 13 11.49596 13 8.36552446 13 4.30815704 15.2767521 0 19.9706358 0 22.554932 0 24 1.52864698 24 3.65720949 24.0002435 7.08869546 19.8287953 8.13992948 17.4102028 8.1647385L17.4102028 8.1647385zM37 2.84753211C37 3.32189757 36.9261179 4.00994664 36.8526108 4.45959542L35.4649774 12.9998782 30.9621694 12.9998782 32.2279161 5.1711436C32.2519185 4.95879931 32.3256755 4.53131032 32.3256755 4.29412759 32.3256755 3.72466988 31.9603904 3.5825794 31.5212232 3.5825794 30.9379171 3.5825794 30.3532359 3.84326124 29.9638234 4.03356751L28.5281854 13 24 13 26.0686989.213683657 29.9878258.213683657 30.0374555 1.23425123C30.9620444.641294408 32.1795365 3.90379019e-8 33.9069526 3.90379019e-8 36.1955476-.000243475057 37 1.1387937 37 2.84753211L37 2.84753211zM51.2981937 1.39967969C52.6582977.49918987 53.9425913 0 55.7133897 0 58.1518468 0 59 1.13900518 59 2.84769558 59 3.32204771 58.9223438 4.01007745 58.8448195 4.4597136L57.3830637 12.9997565 52.6328518 12.9997565 53.9932194 5.00577861C54.0182698 4.792101 54.0708756 4.53142648 54.0708756 4.36608506 54.0708756 3.72493046 53.6854953 3.58272222 53.2224587 3.58272222 52.6325881 3.58272222 52.0429812 3.81989829 51.6052587 4.03369766L50.0914245 12.9998782 45.3423992 12.9998782 46.7027668 5.00590037C46.7278172 4.79222275 46.7788409 4.53154824 46.7788409 4.36620681 46.7788409 3.72505221 46.3933287 3.58284398 45.9318743 3.58284398 45.3153711 3.58284398 44.7000546 3.84351849 44.2893602 4.03381941L42.7740757 13 38 13 40.1814929.214042876 44.2643098.214042876 44.3925941 1.28145692C45.3423992.641763367 46.6253743.000487014507 48.3452809.000487014507 49.8344603 0 50.8094476.593061916 51.2981937 1.39967969L51.2981937 1.39967969zM67.5285327 5.39061542C67.5285327 4.29258876 67.2694573 3.54396333 66.4936812 3.54396333 64.7759775 3.54396333 64.4232531 6.76273249 64.4232531 8.4093242 64.4232531 9.65848482 64.7530184 10.4315735 65.5285529 10.4315735 67.1521242 10.4315735 67.5285327 7.03707905 67.5285327 5.39061542L67.5285327 5.39061542zM60 8.21054461C60 3.96893154 62.1170713 0 66.988027 0 70.6583423 0 72 2.29633967 72 5.46592624 72 9.65835674 69.905767 14 64.9173573 14 61.2233579 14 60 11.4294418 60 8.21054461L60 8.21054461z" transform="translate(112 14)" fill="#FFF"/>\n      </g>\n    </symbol>\n\n    <symbol id="iconClose" width="21" height="21" viewBox="0 0 21 21" overflow="visible">\n      <path d="M16 5.414L14.586 4 10 8.586 5.414 4 4 5.414 8.586 10 4 14.586 5.414 16 10 11.414 14.586 16 16 14.586 11.414 10"/>\n    </symbol>\n  </defs>\n</svg>\n';
        var PASS_THROUGH_EVENTS = [
          "changeActiveView",
          "paymentMethodRequestable",
          "noPaymentMethodRequestable",
          "paymentOptionSelected",
          // Card View Events
          "card:binAvailable",
          "card:blur",
          "card:cardTypeChange",
          "card:empty",
          "card:focus",
          "card:inputSubmitRequest",
          "card:notEmpty",
          "card:validityChange",
          // 3DS Events
          "3ds:customer-canceled",
          "3ds:authentication-modal-render",
          "3ds:authentication-modal-close"
        ];
        var UPDATABLE_CONFIGURATION_OPTIONS = [
          paymentOptionIDs.paypal,
          paymentOptionIDs.paypalCredit,
          paymentOptionIDs.applePay,
          paymentOptionIDs.googlePay,
          "threeDSecure"
        ];
        var UPDATABLE_CONFIGURATION_OPTIONS_THAT_REQUIRE_UNVAULTED_PAYMENT_METHODS_TO_BE_REMOVED = [
          paymentOptionIDs.paypal,
          paymentOptionIDs.paypalCredit,
          paymentOptionIDs.applePay,
          paymentOptionIDs.googlePay
        ];
        var HAS_RAW_PAYMENT_DATA = {};
        var VERSION = "1.43.0";
        HAS_RAW_PAYMENT_DATA[constants.paymentMethodTypes.googlePay] = true;
        HAS_RAW_PAYMENT_DATA[constants.paymentMethodTypes.applePay] = true;
        function Dropin(options) {
          this._client = options.client;
          this._componentID = uuid();
          this._dropinWrapper = document.createElement("div");
          this._dropinWrapper.id = "braintree--dropin__" + this._componentID;
          this._dropinWrapper.setAttribute("data-braintree-id", "wrapper");
          this._dropinWrapper.style.display = "none";
          this._dropinWrapper.className = "braintree-loading";
          this._merchantConfiguration = options.merchantConfiguration;
          EventEmitter.call(this);
        }
        EventEmitter.createChild(Dropin);
        Dropin.prototype._initialize = function(callback) {
          var localizedStrings, localizedHTML;
          var self2 = this;
          var container = self2._merchantConfiguration.container || self2._merchantConfiguration.selector;
          if (!container) {
            analytics.sendEvent(self2._client, "configuration-error");
            callback(new DropinError("options.container is required."));
            return;
          } else if (self2._merchantConfiguration.container && self2._merchantConfiguration.selector) {
            analytics.sendEvent(self2._client, "configuration-error");
            callback(new DropinError("Must only have one options.selector or options.container."));
            return;
          }
          if (typeof container === "string") {
            container = document.querySelector(container);
          }
          if (!container || container.nodeType !== 1) {
            analytics.sendEvent(self2._client, "configuration-error");
            callback(new DropinError("options.selector or options.container must reference a valid DOM node."));
            return;
          }
          if (container.innerHTML.trim()) {
            analytics.sendEvent(self2._client, "configuration-error");
            callback(new DropinError("options.selector or options.container must reference an empty DOM node."));
            return;
          }
          self2._strings = assign({}, translations.en);
          if (self2._merchantConfiguration.locale) {
            localizedStrings = translations[self2._merchantConfiguration.locale] || translations[self2._merchantConfiguration.locale.split("_")[0]];
            self2._strings = assign(self2._strings, localizedStrings);
          }
          if (!isUtf8()) {
            self2._strings.endingIn = self2._strings.endingIn.replace(/•/g, "*");
          }
          if (self2._merchantConfiguration.translations) {
            Object.keys(self2._merchantConfiguration.translations).forEach(function(key) {
              self2._strings[key] = sanitizeHtml(self2._merchantConfiguration.translations[key]);
            });
          }
          localizedHTML = Object.keys(self2._strings).reduce(function(result, stringKey) {
            var stringValue = self2._strings[stringKey];
            return result.replace(RegExp("{{" + stringKey + "}}", "g"), stringValue);
          }, mainHTML);
          self2._dropinWrapper.innerHTML = svgHTML + localizedHTML;
          container.appendChild(self2._dropinWrapper);
          self2._model = new DropinModel({
            client: self2._client,
            container,
            componentID: self2._componentID,
            merchantConfiguration: self2._merchantConfiguration
          });
          self2._injectStylesheet();
          self2._model.initialize().then(function() {
            self2._model.on("cancelInitialization", function(err) {
              self2._dropinWrapper.innerHTML = "";
              analytics.sendEvent(self2._client, "load-error");
              callback(err);
            });
            self2._model.on("asyncDependenciesReady", function() {
              if (self2._model.hasAtLeastOneAvailablePaymentOption()) {
                analytics.sendEvent(self2._client, "appeared");
                self2._disableErroredPaymentMethods();
                self2._handleAppSwitch();
                self2._model.confirmDropinReady();
                callback(null, self2);
              } else {
                self2._model.cancelInitialization(new DropinError("All payment options failed to load."));
              }
            });
            PASS_THROUGH_EVENTS.forEach(function(eventName) {
              self2._model.on(eventName, function(event) {
                self2._emit(eventName, event);
              });
            });
            return self2._setUpDependenciesAndViews();
          }).catch(function(err) {
            self2.teardown().then(function() {
              callback(err);
            });
          });
        };
        Dropin.prototype.updateConfiguration = function(property, key, value) {
          var view;
          if (UPDATABLE_CONFIGURATION_OPTIONS.indexOf(property) === -1) {
            return;
          }
          if (property === "threeDSecure") {
            if (this._threeDSecure) {
              this._threeDSecure.updateConfiguration(key, value);
            }
            return;
          }
          view = this._mainView.getView(property);
          if (!view) {
            return;
          }
          view.updateConfiguration(key, value);
          if (UPDATABLE_CONFIGURATION_OPTIONS_THAT_REQUIRE_UNVAULTED_PAYMENT_METHODS_TO_BE_REMOVED.indexOf(property) === -1) {
            return;
          }
          this._removeUnvaultedPaymentMethods(function(paymentMethod) {
            return paymentMethod.type === constants.paymentMethodTypes[property];
          });
          this._navigateToInitialView();
        };
        Dropin.prototype.getAvailablePaymentOptions = function() {
          return this._model.supportedPaymentOptions;
        };
        Dropin.prototype.clearSelectedPaymentMethod = function() {
          this._removeUnvaultedPaymentMethods();
          this._model.removeActivePaymentMethod();
          if (this._model.getPaymentMethods().length === 0) {
            this._navigateToInitialView();
            return;
          }
          this._mainView.showLoadingIndicator();
          this._model.refreshPaymentMethods().then((function() {
            this._navigateToInitialView();
            this._mainView.hideLoadingIndicator();
          }).bind(this));
        };
        Dropin.prototype._setUpDataCollector = function() {
          var self2 = this;
          var config = assign({}, self2._merchantConfiguration.dataCollector, { client: self2._client });
          this._dataCollector = new DataCollector(config);
          this._dataCollector.initialize().then(function() {
            self2._model.asyncDependencyReady("dataCollector");
          }).catch(function(err) {
            self2._model.cancelInitialization(new DropinError({
              message: "Data Collector failed to set up.",
              braintreeWebError: err
            }));
          });
        };
        Dropin.prototype._setUpThreeDSecure = function() {
          var self2 = this;
          this._threeDSecure = new ThreeDSecure(this._client, this._model);
          this._threeDSecure.initialize().then(function() {
            self2._model.asyncDependencyReady("threeDSecure");
          }).catch(function(err) {
            self2._model.cancelInitialization(new DropinError({
              message: "3D Secure failed to set up.",
              braintreeWebError: err
            }));
          });
        };
        Dropin.prototype._setUpDependenciesAndViews = function() {
          if (this._merchantConfiguration.dataCollector) {
            this._setUpDataCollector();
          }
          if (this._merchantConfiguration.threeDSecure) {
            this._setUpThreeDSecure();
          }
          this._mainView = new MainView({
            client: this._client,
            element: this._dropinWrapper,
            model: this._model,
            strings: this._strings
          });
        };
        Dropin.prototype._removeUnvaultedPaymentMethods = function(filter) {
          filter = filter || function() {
            return true;
          };
          this._model.getPaymentMethods().forEach((function(paymentMethod) {
            if (filter(paymentMethod) && !paymentMethod.vaulted) {
              this._model.removePaymentMethod(paymentMethod);
            }
          }).bind(this));
        };
        Dropin.prototype._navigateToInitialView = function() {
          var initViewId = this._model.getInitialViewId();
          var isOnInitView = this._mainView.primaryView.ID === initViewId;
          if (isOnInitView) {
            return;
          }
          if (this._model.hasPaymentMethods()) {
            return;
          }
          this._mainView.setPrimaryView(initViewId);
        };
        Dropin.prototype._supportsPaymentOption = function(paymentOption) {
          return this._model.supportedPaymentOptions.indexOf(paymentOption) !== -1;
        };
        Dropin.prototype._disableErroredPaymentMethods = function() {
          var paymentMethodOptionsElements;
          var failedDependencies = Object.keys(this._model.failedDependencies);
          if (failedDependencies.length === 0) {
            return;
          }
          paymentMethodOptionsElements = this._mainView.getOptionsElements();
          failedDependencies.forEach((function(paymentMethodId) {
            var element = paymentMethodOptionsElements[paymentMethodId];
            var div = element.div;
            var clickHandler = element.clickHandler;
            var error = this._model.failedDependencies[paymentMethodId];
            var errorMessageDiv = div.querySelector(".braintree-option__disabled-message");
            div.classList.add("braintree-disabled");
            div.removeEventListener("click", clickHandler);
            errorMessageDiv.innerHTML = constants.errors.DEVELOPER_MISCONFIGURATION_MESSAGE;
            console.error(error);
          }).bind(this));
        };
        Dropin.prototype._sendVaultedPaymentMethodAppearAnalyticsEvents = function() {
          var i, type;
          var typesThatSentAnEvent = {};
          var paymentMethods = this._model._paymentMethods;
          for (i = 0; i < paymentMethods.length; i++) {
            type = paymentMethods[i].type;
            if (type in typesThatSentAnEvent) {
              continue;
            }
            typesThatSentAnEvent[type] = true;
            analytics.sendEvent(this._client, "vaulted-" + constants.analyticsKinds[type] + ".appear");
          }
        };
        Dropin.prototype._handleAppSwitch = function() {
          if (this._model.appSwitchError) {
            this._mainView.setPrimaryView(this._model.appSwitchError.id);
            this._model.reportError(this._model.appSwitchError.error);
          } else if (this._model.appSwitchPayload) {
            this._model.addPaymentMethod(this._model.appSwitchPayload);
          } else {
            this._sendVaultedPaymentMethodAppearAnalyticsEvents();
          }
        };
        Dropin.prototype.requestPaymentMethod = function(options) {
          var self2 = this;
          options = options || {};
          return this._mainView.requestPaymentMethod().then(function(payload) {
            if (self2._shouldPerformThreeDSecureVerification(payload)) {
              self2._mainView.showLoadingIndicator();
              return self2._threeDSecure.verify(payload, options.threeDSecure).then(function(newPayload) {
                self2._model.shouldWaitForVerifyCard = false;
                payload.nonce = newPayload.nonce;
                payload.liabilityShifted = newPayload.liabilityShifted;
                payload.liabilityShiftPossible = newPayload.liabilityShiftPossible;
                payload.threeDSecureInfo = newPayload.threeDSecureInfo;
                self2._model.setPaymentMethodRequestable({
                  isRequestable: Boolean(newPayload),
                  type: newPayload.type,
                  selectedPaymentMethod: payload
                });
                self2._mainView.hideLoadingIndicator();
                return payload;
              }).catch(function(err) {
                self2.clearSelectedPaymentMethod();
                return self2._model.refreshPaymentMethods().then(function() {
                  self2._mainView.hideLoadingIndicator();
                  return Promise.reject(new DropinError({
                    message: "Something went wrong during 3D Secure authentication. Please try again.",
                    braintreeWebError: err
                  }));
                });
              });
            }
            return payload;
          }).then(function(payload) {
            if (self2._dataCollector) {
              payload.deviceData = self2._dataCollector.getDeviceData();
            }
            return payload;
          }).then(function(payload) {
            return formatPaymentMethodPayload(payload);
          });
        };
        Dropin.prototype._shouldPerformThreeDSecureVerification = function(payload) {
          if (!this._threeDSecure) {
            return false;
          }
          if (payload.liabilityShifted != null) {
            return false;
          }
          if (payload.type === constants.paymentMethodTypes.card) {
            return true;
          }
          if (payload.type === constants.paymentMethodTypes.googlePay && payload.details.isNetworkTokenized === false) {
            return true;
          }
          return false;
        };
        Dropin.prototype._removeStylesheet = function() {
          var stylesheet = document.getElementById(constants.STYLESHEET_ID);
          if (stylesheet) {
            stylesheet.parentNode.removeChild(stylesheet);
          }
        };
        Dropin.prototype._injectStylesheet = function() {
          var assetsUrl;
          var loadStylesheetOptions = {
            id: constants.STYLESHEET_ID
          };
          if (document.getElementById(constants.STYLESHEET_ID)) {
            return;
          }
          assetsUrl = this._client.getConfiguration().gatewayConfiguration.assetsUrl;
          loadStylesheetOptions.href = assetsUrl + "/web/dropin/" + VERSION + "/css/dropin.css";
          if (this._model.isInShadowDom) {
            loadStylesheetOptions.container = this._model.rootNode;
          }
          assets.loadStylesheet(loadStylesheetOptions);
        };
        Dropin.prototype.teardown = function() {
          var teardownError;
          var promise = Promise.resolve();
          var self2 = this;
          this._removeStylesheet();
          if (this._mainView) {
            promise.then(function() {
              return self2._mainView.teardown().catch(function(err) {
                teardownError = err;
              });
            });
          }
          if (this._dataCollector) {
            promise.then((function() {
              return this._dataCollector.teardown().catch(function(error) {
                teardownError = new DropinError({
                  message: "Drop-in errored tearing down Data Collector.",
                  braintreeWebError: error
                });
              });
            }).bind(this));
          }
          if (this._threeDSecure) {
            promise.then((function() {
              return this._threeDSecure.teardown().catch(function(error) {
                teardownError = new DropinError({
                  message: "Drop-in errored tearing down 3D Secure.",
                  braintreeWebError: error
                });
              });
            }).bind(this));
          }
          return promise.then(function() {
            return self2._removeDropinWrapper();
          }).then(function() {
            if (teardownError) {
              return Promise.reject(teardownError);
            }
            return Promise.resolve();
          });
        };
        Dropin.prototype.isPaymentMethodRequestable = function() {
          return this._model.isPaymentMethodRequestable();
        };
        Dropin.prototype._removeDropinWrapper = function() {
          this._dropinWrapper.parentNode.removeChild(this._dropinWrapper);
          return Promise.resolve();
        };
        function formatPaymentMethodPayload(paymentMethod) {
          var formattedPaymentMethod = {
            nonce: paymentMethod.nonce,
            details: paymentMethod.details,
            type: paymentMethod.type
          };
          if (paymentMethod.vaulted != null) {
            formattedPaymentMethod.vaulted = paymentMethod.vaulted;
          }
          if (paymentMethod.type === constants.paymentMethodTypes.card) {
            formattedPaymentMethod.description = paymentMethod.description;
          }
          if (paymentMethod.type in HAS_RAW_PAYMENT_DATA) {
            formattedPaymentMethod.details.rawPaymentData = paymentMethod.rawPaymentData;
          }
          if (typeof paymentMethod.liabilityShiftPossible === "boolean") {
            formattedPaymentMethod.liabilityShifted = paymentMethod.liabilityShifted;
            formattedPaymentMethod.liabilityShiftPossible = paymentMethod.liabilityShiftPossible;
          }
          if (paymentMethod.threeDSecureInfo) {
            formattedPaymentMethod.threeDSecureInfo = paymentMethod.threeDSecureInfo;
          }
          if (paymentMethod.deviceData) {
            formattedPaymentMethod.deviceData = paymentMethod.deviceData;
          }
          if (paymentMethod.binData) {
            formattedPaymentMethod.binData = paymentMethod.binData;
          }
          return formattedPaymentMethod;
        }
        module3.exports = wrapPrototype(Dropin);
      }, { "./constants": 202, "./dropin-model": 203, "./lib/analytics": 207, "./lib/assign": 208, "./lib/data-collector": 211, "./lib/dropin-error": 212, "./lib/is-utf-8": 216, "./lib/sanitize-html": 219, "./lib/three-d-secure": 221, "./translations": 242, "./views/main-view": 261, "@braintree/asset-loader": 1, "@braintree/event-emitter": 36, "@braintree/uuid": 42, "@braintree/wrap-promise": 46 }], 205: [function(require2, module3, exports3) {
        "use strict";
        var Dropin = require2("./dropin");
        var client = require2("braintree-web/client");
        var createFromScriptTag = require2("./lib/create-from-script-tag");
        var constants = require2("./constants");
        var analytics = require2("./lib/analytics");
        var DropinError = require2("./lib/dropin-error");
        var wrapPromise = require2("@braintree/wrap-promise");
        var VERSION = "1.43.0";
        function create(options) {
          if (!options.authorization) {
            return Promise.reject(new DropinError("options.authorization is required."));
          }
          return client.create({
            authorization: options.authorization
          }).catch(function(err) {
            return Promise.reject(new DropinError({
              message: "There was an error creating Drop-in.",
              braintreeWebError: err
            }));
          }).then(function(clientInstance) {
            clientInstance = setAnalyticsIntegration(clientInstance);
            if (clientInstance.getConfiguration().authorizationType === "TOKENIZATION_KEY") {
              analytics.sendEvent(clientInstance, "started.tokenization-key");
            } else {
              analytics.sendEvent(clientInstance, "started.client-token");
            }
            return new Promise(function(resolve, reject) {
              new Dropin({
                merchantConfiguration: options,
                client: clientInstance
              })._initialize(function(err, instance) {
                if (err) {
                  reject(err);
                  return;
                }
                resolve(instance);
              });
            });
          });
        }
        function setAnalyticsIntegration(clientInstance) {
          var configuration = clientInstance.getConfiguration();
          configuration.analyticsMetadata.integration = constants.INTEGRATION;
          configuration.analyticsMetadata.integrationType = constants.INTEGRATION;
          configuration.analyticsMetadata.dropinVersion = VERSION;
          clientInstance.getConfiguration = function() {
            return configuration;
          };
          return clientInstance;
        }
        createFromScriptTag(create, typeof document !== "undefined" && document.querySelector("script[data-braintree-dropin-authorization]"));
        module3.exports = {
          create: wrapPromise(create),
          /**
           * @description The current version of Drop-in, i.e. `1.43.0`.
           * @type {string}
           */
          VERSION
        };
      }, { "./constants": 202, "./dropin": 204, "./lib/analytics": 207, "./lib/create-from-script-tag": 210, "./lib/dropin-error": 212, "@braintree/wrap-promise": 46, "braintree-web/client": 54 }], 206: [function(require2, module3, exports3) {
        "use strict";
        function addSelectionEventHandler(element, func) {
          element.addEventListener("click", func);
          element.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
              func();
            }
          });
        }
        module3.exports = addSelectionEventHandler;
      }, {}], 207: [function(require2, module3, exports3) {
        "use strict";
        var atob2 = require2("./polyfill").atob;
        var constants = require2("../constants");
        var braintreeClientVersion = require2("braintree-web/client").VERSION;
        function _millisToSeconds(millis) {
          return Math.floor(millis / 1e3);
        }
        function sendAnalyticsEvent(client, kind, callback) {
          var configuration = client.getConfiguration();
          var analyticsRequest = client._request;
          var timestamp = _millisToSeconds(Date.now());
          var url = configuration.gatewayConfiguration.analytics.url;
          var data = {
            analytics: [{
              kind: constants.ANALYTICS_PREFIX + kind,
              timestamp
            }],
            _meta: configuration.analyticsMetadata,
            braintreeLibraryVersion: braintreeClientVersion
          };
          if (configuration.authorizationType === "TOKENIZATION_KEY") {
            data.tokenizationKey = configuration.authorization;
          } else {
            data.authorizationFingerprint = JSON.parse(atob2(configuration.authorization)).authorizationFingerprint;
          }
          analyticsRequest({
            url,
            method: "post",
            data,
            timeout: constants.ANALYTICS_REQUEST_TIMEOUT_MS
          }, callback);
        }
        module3.exports = {
          sendEvent: sendAnalyticsEvent
        };
      }, { "../constants": 202, "./polyfill": 218, "braintree-web/client": 54 }], 208: [function(require2, module3, exports3) {
        "use strict";
        var assignNormalized = typeof Object.assign === "function" ? Object.assign : assignPolyfill;
        function assignPolyfill(destination) {
          var i, source, key;
          for (i = 1; i < arguments.length; i++) {
            source = arguments[i];
            for (key in source) {
              if (source.hasOwnProperty(key)) {
                destination[key] = source[key];
              }
            }
          }
          return destination;
        }
        module3.exports = {
          assign: assignNormalized,
          _assign: assignPolyfill
        };
      }, {}], 209: [function(require2, module3, exports3) {
        "use strict";
        var isIe9 = require2("@braintree/browser-detection/is-ie9");
        var isIe10 = require2("@braintree/browser-detection/is-ie10");
        module3.exports = {
          isIe9,
          isIe10
        };
      }, { "@braintree/browser-detection/is-ie10": 28, "@braintree/browser-detection/is-ie9": 29 }], 210: [function(require2, module3, exports3) {
        "use strict";
        var analytics = require2("./analytics");
        var find = require2("./find-parent-form");
        var uuid = require2("@braintree/uuid");
        var DropinError = require2("./dropin-error");
        var kebabCaseToCamelCase = require2("./kebab-case-to-camel-case");
        var WHITELISTED_DATA_ATTRIBUTES = [
          "locale",
          "payment-option-priority",
          "data-collector.kount",
          "data-collector.paypal",
          // camelcase version was accidentally used initially.
          // we add the kebab case version to match the docs, but
          // we retain the camelcase version for backwards compatibility
          "card.cardholderName",
          "card.cardholderName.required",
          "card.cardholder-name",
          "card.cardholder-name.required",
          "paypal.amount",
          "paypal.currency",
          "paypal.flow",
          "paypal.landing-page-type",
          "paypal-credit.amount",
          "paypal-credit.currency",
          "paypal-credit.flow",
          "paypal-credit.landing-page-type"
        ];
        function injectHiddenInput(name, value, form) {
          var input = form.querySelector('[name="' + name + '"]');
          if (!input) {
            input = document.createElement("input");
            input.type = "hidden";
            input.name = name;
            form.appendChild(input);
          }
          input.value = value;
        }
        function addCompositeKeyValuePairToObject(obj, key, value) {
          var decomposedKeys = key.split(".");
          var topLevelKey = kebabCaseToCamelCase(decomposedKeys[0]);
          if (decomposedKeys.length === 1) {
            obj[topLevelKey] = deserialize(value);
          } else {
            obj[topLevelKey] = obj[topLevelKey] || {};
            addCompositeKeyValuePairToObject(obj[topLevelKey], decomposedKeys.slice(1).join("."), value);
          }
        }
        function deserialize(value) {
          try {
            return JSON.parse(value);
          } catch (e) {
            return value;
          }
        }
        function createFromScriptTag(createFunction, scriptTag) {
          var authorization, container, createOptions, form;
          if (!scriptTag) {
            return;
          }
          authorization = scriptTag.getAttribute("data-braintree-dropin-authorization");
          if (!authorization) {
            throw new DropinError("Authorization not found in data-braintree-dropin-authorization attribute");
          }
          container = document.createElement("div");
          container.id = "braintree-dropin-" + uuid();
          form = find.findParentForm(scriptTag);
          if (!form) {
            throw new DropinError("No form found for script tag integration.");
          }
          form.addEventListener("submit", function(event) {
            event.preventDefault();
          });
          scriptTag.parentNode.insertBefore(container, scriptTag);
          createOptions = {
            authorization,
            container
          };
          WHITELISTED_DATA_ATTRIBUTES.forEach(function(compositeKey) {
            var value = scriptTag.getAttribute("data-" + compositeKey);
            if (value == null) {
              return;
            }
            addCompositeKeyValuePairToObject(createOptions, compositeKey, value);
          });
          createFunction(createOptions).then(function(instance) {
            analytics.sendEvent(instance._client, "integration-type.script-tag");
            form.addEventListener("submit", function() {
              instance.requestPaymentMethod(function(requestPaymentError, payload) {
                if (requestPaymentError) {
                  return;
                }
                injectHiddenInput("payment_method_nonce", payload.nonce, form);
                if (payload.deviceData) {
                  injectHiddenInput("device_data", payload.deviceData, form);
                }
                form.submit();
              });
            });
          });
        }
        module3.exports = createFromScriptTag;
      }, { "./analytics": 207, "./dropin-error": 212, "./find-parent-form": 213, "./kebab-case-to-camel-case": 217, "@braintree/uuid": 42 }], 211: [function(require2, module3, exports3) {
        (function(global2) {
          (function() {
            "use strict";
            var constants = require2("../constants");
            var analytics = require2("./analytics");
            var assets = require2("@braintree/asset-loader");
            function DataCollector(config) {
              this._config = config;
            }
            DataCollector.prototype.initialize = function() {
              var self2 = this;
              return Promise.resolve().then(function() {
                var braintreeWebVersion;
                if (global2.braintree && global2.braintree.dataCollector) {
                  return Promise.resolve();
                }
                braintreeWebVersion = self2._config.client.getVersion();
                return assets.loadScript({
                  src: "https://js.braintreegateway.com/web/" + braintreeWebVersion + "/js/data-collector.min.js",
                  id: constants.DATA_COLLECTOR_SCRIPT_ID
                });
              }).then(function() {
                return global2.braintree.dataCollector.create(self2._config);
              }).then(function(instance) {
                self2._instance = instance;
              }).catch(function(err) {
                analytics.sendEvent(self2._config.client, "data-collector.setup-failed");
                self2.log(err);
              });
            };
            DataCollector.prototype.log = function(message) {
              console.log(message);
            };
            DataCollector.prototype.getDeviceData = function() {
              if (!this._instance) {
                return "";
              }
              return this._instance.deviceData;
            };
            DataCollector.prototype.teardown = function() {
              if (!this._instance) {
                return Promise.resolve();
              }
              return this._instance.teardown();
            };
            module3.exports = DataCollector;
          }).call(this);
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, { "../constants": 202, "./analytics": 207, "@braintree/asset-loader": 1 }], 212: [function(require2, module3, exports3) {
        "use strict";
        function isBraintreeWebError(err) {
          return err.name === "BraintreeError";
        }
        function DropinError(err) {
          this.name = "DropinError";
          if (typeof err === "string") {
            this.message = err;
          } else {
            this.message = err.message;
          }
          if (isBraintreeWebError(err)) {
            this._braintreeWebError = err;
          } else {
            this._braintreeWebError = err.braintreeWebError;
          }
        }
        DropinError.prototype = Object.create(Error.prototype);
        DropinError.prototype.constructor = DropinError;
        module3.exports = DropinError;
      }, {}], 213: [function(require2, module3, exports3) {
        "use strict";
        function findParentForm(element) {
          var parentNode = element.parentNode;
          if (!parentNode || parentNode.nodeName === "FORM") {
            return parentNode;
          }
          return findParentForm(parentNode);
        }
        module3.exports = {
          findParentForm
        };
      }, {}], 214: [function(require2, module3, exports3) {
        "use strict";
        var atob2 = require2("./polyfill").atob;
        module3.exports = function(client) {
          var authorizationFingerprint;
          var configuration = client.getConfiguration();
          if (configuration.authorizationType !== "TOKENIZATION_KEY") {
            authorizationFingerprint = JSON.parse(atob2(configuration.authorization)).authorizationFingerprint;
            return !authorizationFingerprint || authorizationFingerprint.indexOf("customer_id=") === -1;
          }
          return true;
        };
      }, { "./polyfill": 218 }], 215: [function(require2, module3, exports3) {
        (function(global2) {
          (function() {
            "use strict";
            function isHTTPS() {
              return global2.location.protocol === "https:";
            }
            module3.exports = {
              isHTTPS
            };
          }).call(this);
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {}], 216: [function(require2, module3, exports3) {
        (function(global2) {
          (function() {
            "use strict";
            module3.exports = function(win) {
              win = win || global2;
              return Boolean(win.document.characterSet && win.document.characterSet.toLowerCase() === "utf-8");
            };
          }).call(this);
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {}], 217: [function(require2, module3, exports3) {
        "use strict";
        function kebabCaseToCamelCase(kebab) {
          var parts = kebab.split("-");
          var first = parts.shift();
          var capitalizedParts = parts.map(function(part) {
            return part.charAt(0).toUpperCase() + part.substring(1);
          });
          return [first].concat(capitalizedParts).join("");
        }
        module3.exports = kebabCaseToCamelCase;
      }, {}], 218: [function(require2, module3, exports3) {
        (function(global2) {
          (function() {
            "use strict";
            var atobNormalized = typeof global2.atob === "function" ? global2.atob : atob2;
            function atob2(base64String) {
              var a, b, c, b1, b2, b3, b4, i;
              var base64Matcher = new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$");
              var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
              var result = "";
              if (!base64Matcher.test(base64String)) {
                throw new Error("Non base64 encoded input passed to window.atob polyfill");
              }
              i = 0;
              do {
                b1 = characters.indexOf(base64String.charAt(i++));
                b2 = characters.indexOf(base64String.charAt(i++));
                b3 = characters.indexOf(base64String.charAt(i++));
                b4 = characters.indexOf(base64String.charAt(i++));
                a = (b1 & 63) << 2 | b2 >> 4 & 3;
                b = (b2 & 15) << 4 | b3 >> 2 & 15;
                c = (b3 & 3) << 6 | b4 & 63;
                result += String.fromCharCode(a) + (b ? String.fromCharCode(b) : "") + (c ? String.fromCharCode(c) : "");
              } while (i < base64String.length);
              return result;
            }
            module3.exports = {
              atob: function(base64String) {
                return atobNormalized.call(global2, base64String);
              },
              _atob: atob2
            };
          }).call(this);
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {}], 219: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function(string) {
          if (typeof string !== "string") {
            return "";
          }
          return string.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        };
      }, {}], 220: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = function() {
          var el = document.createElement("div");
          var prop = "flex-basis: 1px";
          var prefixes = [
            "-webkit-",
            "-moz-",
            "-ms-",
            "-o-",
            ""
          ];
          prefixes.forEach(function(prefix) {
            el.style.cssText += prefix + prop;
          });
          return Boolean(el.style.length);
        };
      }, {}], 221: [function(require2, module3, exports3) {
        "use strict";
        var assign = require2("./assign").assign;
        var threeDSecure = require2("braintree-web/three-d-secure");
        var DEFAULT_ACS_WINDOW_SIZE = "03";
        var PASSTHROUGH_EVENTS = [
          "customer-canceled",
          "authentication-modal-render",
          "authentication-modal-close"
        ];
        function ThreeDSecure(client, model) {
          this._client = client;
          this._model = model;
          this._config = assign({}, model.merchantConfiguration.threeDSecure);
        }
        ThreeDSecure.prototype.initialize = function() {
          var self2 = this;
          var options = {
            client: this._client,
            version: 2
          };
          if (this._config.cardinalSDKConfig) {
            options.cardinalSDKConfig = this._config.cardinalSDKConfig;
          }
          return threeDSecure.create(options).then(function(instance) {
            self2._instance = instance;
            PASSTHROUGH_EVENTS.forEach(function(eventName) {
              self2._instance.on(eventName, function(event) {
                self2._model._emit("3ds:" + eventName, event);
              });
            });
          });
        };
        ThreeDSecure.prototype.verify = function(payload, merchantProvidedData) {
          var verifyOptions = assign({
            amount: this._config.amount
          }, merchantProvidedData, {
            nonce: payload.nonce,
            bin: payload.details.bin,
            // TODO in the future, we will allow
            // merchants to pass in a custom
            // onLookupComplete hook
            onLookupComplete: function(data, next) {
              next();
            }
          });
          verifyOptions.additionalInformation = verifyOptions.additionalInformation || {};
          verifyOptions.additionalInformation.acsWindowSize = verifyOptions.additionalInformation.acsWindowSize || DEFAULT_ACS_WINDOW_SIZE;
          this._model.shouldWaitForVerifyCard = true;
          return this._instance.verifyCard(verifyOptions);
        };
        ThreeDSecure.prototype.updateConfiguration = function(key, value) {
          this._config[key] = value;
        };
        ThreeDSecure.prototype.teardown = function() {
          return this._instance.teardown();
        };
        module3.exports = ThreeDSecure;
      }, { "./assign": 208, "braintree-web/three-d-secure": 139 }], 222: [function(require2, module3, exports3) {
        "use strict";
        var browserDetection = require2("./browser-detection");
        function isHidden(element) {
          if (!element) {
            return false;
          }
          if (element.style.display === "none") {
            return true;
          }
          return isHidden(element.parentNode);
        }
        function onTransitionEnd(element, propertyName, callback) {
          if (browserDetection.isIe9() || isHidden(element)) {
            callback();
            return;
          }
          function transitionEventListener(event) {
            if (event.propertyName === propertyName) {
              element.removeEventListener("transitionend", transitionEventListener);
              callback();
            }
          }
          element.addEventListener("transitionend", transitionEventListener);
        }
        module3.exports = {
          onTransitionEnd
        };
      }, { "./browser-detection": 209 }], 223: [function(require2, module3, exports3) {
        "use strict";
        function delay(time) {
          time = time || 0;
          return new Promise(function(resolve) {
            window.setTimeout(resolve, time);
          });
        }
        module3.exports = {
          delay
        };
      }, {}], 224: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "الدفع بواسطة {{paymentSource}}",
          "chooseAnotherWayToPay": "اختر طريقة دفع أخرى",
          "chooseAWayToPay": "اختر طريقة الدفع",
          "otherWaysToPay": "طرق أخرى للدفع",
          "edit": "تحرير",
          "doneEditing": "تم",
          "editPaymentMethods": "تحرير طرق الدفع",
          "CreditCardDeleteConfirmationMessage": "هل تريد حذف بطاقة {{secondaryIdentifier}} التي تنتهي بالأرقام {{identifier}}؟",
          "PayPalAccountDeleteConfirmationMessage": "هل تريد حذف {{identifier}}الحساب PayPal؟",
          "VenmoAccountDeleteConfirmationMessage": "هل تريد فعلاً حذف حساب Venmo الذي يحمل اسم المستخدم {{identifier}}؟",
          "genericDeleteConfirmationMessage": "هل تريد بالفعل حذف طريقة الدفع؟",
          "deleteCancelButton": "إلغاء",
          "deleteConfirmationButton": "حذف",
          "fieldEmptyForCvv": "يرجى إدخال رمز حماية البطاقة.",
          "fieldEmptyForExpirationDate": "يرجى إدخال تاريخ انتهاء الصلاحية.",
          "fieldEmptyForCardholderName": "يرجى إدخال اسم صاحب البطاقة.",
          "fieldTooLongForCardholderName": "يجب أن يقل اسم صاحب البطاقة عن 256 حرفاً.",
          "fieldEmptyForNumber": "يرجى إدخال رقم.",
          "fieldEmptyForPostalCode": "يرجى إدخال الرمز البريدي.",
          "fieldInvalidForCardholderName": "اسم حامل البطاقة غير صحيح.",
          "fieldInvalidForCvv": "رمز الحماية غير صحيح.",
          "fieldInvalidForExpirationDate": "تاريخ انتهاء الصلاحية غير صحيح.",
          "fieldInvalidForNumber": "رقم البطاقة غير صحيح.",
          "fieldInvalidForPostalCode": "الرمز البريدي غير صحيح.",
          "noticeOfCollection": 'عندما أدفع ببطاقتي، فأنا أوافق على "بيان الخصوصية لدى PayPal".',
          "genericError": "حدث خطأ ما من جانبنا.",
          "hostedFieldsTokenizationFailOnDuplicateError": "هذه البطاقة الائتمانية محفوظة كطريقة دفع حالياً.",
          "hostedFieldsFailedTokenizationError": "يرجى مراجعة معلوماتك وإعادة المحاولة.",
          "hostedFieldsFieldsInvalidError": "يرجى مراجعة معلوماتك وإعادة المحاولة.",
          "hostedFieldsTokenizationNetworkErrorError": "خطأ في الشبكة. يرجى المحاولة مجدداً.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "فشلت مصادقة بطاقة الائتمان. يرجى مراجعة معلوماتك وإعادة المحاولة.",
          "paypalButtonMustBeUsed": "استخدم زر PayPal لاستئناف الدفع.",
          "venmoButtonMustBeUsed": "استخدِم زر Venmo لمتابعة إجراء دفعتك",
          "applePayButtonMustBeUsed": " استخدِم زر Apple Pay لمتابعة عملية الدفع التي تُجريها.",
          "paypalAccountTokenizationFailedError": "وقع خطأ أثناء إضافة حساب PayPal. يرجى إعادة المحاولة.",
          "paypalFlowFailedError": "وقع خطأ أثناء الاتصال بـ PayPal. يرجى إعادة المحاولة.",
          "paypalTokenizationRequestActiveError": "تفويض الدفع عبر PayPal قيد التنفيذ.",
          "venmoCanceledError": "وقع خطأ. تأكد أن أحدث إصدار من تطبيق Venmo مثبت في جهازك وأن متصفحك يدعم التبديل إلى Venmo.",
          "vaultManagerPaymentMethodDeletionError": "فشل حذف طريقة الدفع. أعد المحاولة.",
          "venmoAppFailedError": "تطبيق Venmo غير موجود في جهازك.",
          "unsupportedCardTypeError": "نوع البطاقة غير مدعوم. يرجى تجربة بطاقة أخرى.",
          "applePayTokenizationError": "وقع خطأ في الشبكة أثناء معالجة الدفع عبر Apple Pay. يرجى إعادة المحاولة.",
          "applePayActiveCardError": "إضافة بطاقة مدعومة إلى محفظة Apple Pay.",
          "cardholderNameLabel": "اسم صاحب البطاقة",
          "cardNumberLabel": "رقم البطاقة",
          "cvvLabel": "رمز CVV‏",
          "cvvThreeDigitLabelSubheading": "(3 أرقام)",
          "cvvFourDigitLabelSubheading": "(4 أرقام)",
          "cardholderNamePlaceholder": "اسم صاحب البطاقة",
          "expirationDateLabel": "تاريخ انتهاء الصلاحية",
          "expirationDateLabelSubheading": "(MM/YY)",
          "expirationDatePlaceholder": "الشهر/ السنة",
          "postalCodeLabel": "الرمز البريدي",
          "saveCardLabel": "حفظ البطاقة",
          "payWithCard": "الدفع ببطاقة سحب أو ائتمان",
          "endingIn": "تنتهي بتاريخ {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo‏",
          "Card": "البطاقة",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express‏",
          "Discover": "Discover‏",
          "Diners Club": "Diners Club‏",
          "Elo": "Elo‏",
          "Hiper": "Hiper‏",
          "Hipercard": "Hipercard‏",
          "MasterCard": "Mastercard‏",
          "Visa": "Visa‏",
          "JCB": "JCB‏",
          "Maestro": "Maestro‏",
          "UnionPay": "UnionPay‏"
        };
      }, {}], 225: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Forma úhrady: {{paymentSource}}",
          "chooseAnotherWayToPay": "Vybrat jiný způsob platby",
          "chooseAWayToPay": "Vybrat způsob platby",
          "otherWaysToPay": "Jiné způsoby platby",
          "edit": "Upravit",
          "doneEditing": "Hotovo",
          "editPaymentMethods": "Upravit způsoby platby",
          "CreditCardDeleteConfirmationMessage": "Chcete kartu {{secondaryIdentifier}} s koncovým číslem {{identifier}}odstranit?",
          "PayPalAccountDeleteConfirmationMessage": "Chcete {{identifier}}účtu PayPal odstranit?",
          "VenmoAccountDeleteConfirmationMessage": "Opravdu chcete účet Venmo s uživatelským jménem {{identifier}} odstranit?",
          "genericDeleteConfirmationMessage": "Opravdu chcete tento způsob platby odstranit?",
          "deleteCancelButton": "Zrušit",
          "deleteConfirmationButton": "Odstranit",
          "fieldEmptyForCvv": "Vyplňte kód CVV.",
          "fieldEmptyForExpirationDate": "Vyplňte datum vypršení platnosti.",
          "fieldEmptyForCardholderName": "Vyplňte jméno držitele karty.",
          "fieldTooLongForCardholderName": "Jméno držitele karty musí obsahovat méně než 256 znaků.",
          "fieldEmptyForNumber": "Vyplňte číslo.",
          "fieldEmptyForPostalCode": "Vyplňte poštovní směrovací číslo.",
          "fieldInvalidForCardholderName": "Toto jméno držitele karty není platné.",
          "fieldInvalidForCvv": "Tento bezpečnostní kód není platný.",
          "fieldInvalidForExpirationDate": "Toto datum vypršení platnosti není platné.",
          "fieldInvalidForNumber": "Toto číslo karty není platné.",
          "fieldInvalidForPostalCode": "Toto poštovní směrovací číslo není platné.",
          "noticeOfCollection": "Zaplacením kartou vyjadřuji souhlas s prohlášením o ochraně osobních údajů společnosti PayPal.",
          "genericError": "Došlo k chybě na naší straně.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Tato kreditní karta je již jako způsob platby uložena.",
          "hostedFieldsFailedTokenizationError": "Zkontrolujte zadané informace a zkuste to znovu.",
          "hostedFieldsFieldsInvalidError": "Zkontrolujte zadané informace a zkuste to znovu.",
          "hostedFieldsTokenizationNetworkErrorError": "Došlo k chybě sítě. Zkuste to znovu.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Ověření kreditní karty se nezdařilo. Zkontrolujte zadané informace a zkuste to znovu.",
          "paypalButtonMustBeUsed": "Chcete-li přejít k platbě, použijte tlačítko PayPal.",
          "venmoButtonMustBeUsed": "Chcete-li pokračovat v placení, použijte tlačítko Venmo.",
          "applePayButtonMustBeUsed": "Chcete-li přejít k platbě, použijte tlačítko Apple Pay.",
          "paypalAccountTokenizationFailedError": "Při přidávání účtu PayPal došlo k chybě. Zkuste to znovu.",
          "paypalFlowFailedError": "Při připojování ke službě PayPal došlo k chybě. Zkuste to znovu.",
          "paypalTokenizationRequestActiveError": "Autorizace platby přes PayPal již probíhá.",
          "venmoCanceledError": "Došlo k chybě. Zkontrolujte, zda máte v zařízení nainstalovanou nejnovější verzi aplikace Venmo a zda prohlížeč přechod na aplikaci Venmo podporuje.",
          "vaultManagerPaymentMethodDeletionError": "Způsob platby se nepodařilo odstranit. Zkuste to znovu.",
          "venmoAppFailedError": "Aplikaci Venmo se ve vašem zařízení nepodařilo najít.",
          "unsupportedCardTypeError": "Tento typ karty není podporován. Vyzkoušejte jinou kartu.",
          "applePayTokenizationError": "Při zpracování platby přes Apple Pay došlo k chybě sítě. Zkuste to znovu.",
          "applePayActiveCardError": "Přidejte si podporovanou kartu do peněženky Apple Pay.",
          "cardholderNameLabel": "Jméno držitele karty",
          "cardNumberLabel": "Číslo karty",
          "cvvLabel": "Kód CVV",
          "cvvThreeDigitLabelSubheading": "(3 číslice)",
          "cvvFourDigitLabelSubheading": "(4 číslice)",
          "cardholderNamePlaceholder": "Jméno držitele karty",
          "expirationDateLabel": "Datum vypršení platnosti",
          "expirationDateLabelSubheading": "(MM/RR)",
          "expirationDatePlaceholder": "MM/RR",
          "postalCodeLabel": "Poštovní směrovací číslo",
          "saveCardLabel": "Uložit kartu",
          "payWithCard": "Zaplatit kartou",
          "endingIn": "Koncové číslo {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Karta",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 226: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Betaling med {{paymentSource}}",
          "chooseAnotherWayToPay": "Vælg en anden betalingsmetode",
          "chooseAWayToPay": "Vælg, hvordan du vil betale",
          "otherWaysToPay": "Andre måder at betale på",
          "edit": "Rediger",
          "doneEditing": "Udført",
          "editPaymentMethods": "Rediger betalingsmetode",
          "CreditCardDeleteConfirmationMessage": "Vil du slette dit {{secondaryIdentifier}}-kort, der slutter på {{identifier}}?",
          "PayPalAccountDeleteConfirmationMessage": "Vil du slette PayPal-kontoen for {{identifier}}?",
          "VenmoAccountDeleteConfirmationMessage": "Er du sikker på, at du vil slette Venmo-konto med brugernavnet {{identifier}}?",
          "genericDeleteConfirmationMessage": "Er du sikker på, at du vil slette denne betalingsmetode?",
          "deleteCancelButton": "Annuller",
          "deleteConfirmationButton": "Slet",
          "fieldEmptyForCvv": "Du skal indtaste kontrolcifrene.",
          "fieldEmptyForExpirationDate": "Du skal indtaste en udløbsdato.",
          "fieldEmptyForCardholderName": "Du skal indtaste kortholderens navn.",
          "fieldTooLongForCardholderName": "Kortholders navn skal være mindre end 256 tegn.",
          "fieldEmptyForNumber": "Du skal indtaste et nummer.",
          "fieldEmptyForPostalCode": "Du skal indtaste et postnummer.",
          "fieldInvalidForCardholderName": "Kortindehaverens navn er ugyldigt.",
          "fieldInvalidForCvv": "Denne sikkerhedskode er ugyldig.",
          "fieldInvalidForExpirationDate": "Denne udløbsdato er ugyldig.",
          "fieldInvalidForNumber": "Dette kortnummer er ikke gyldigt.",
          "fieldInvalidForPostalCode": "Dette postnummer er ikke gyldigt.",
          "noticeOfCollection": "Når jeg betaler med mit kort, accepterer jeg PayPals erklæring om personlige oplysninger.",
          "genericError": "Der opstod en fejl.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Dette betalingskort findes allerede som en gemt betalingsmetode.",
          "hostedFieldsFailedTokenizationError": "Tjek oplysningerne, og prøv igen.",
          "hostedFieldsFieldsInvalidError": "Tjek oplysningerne, og prøv igen.",
          "hostedFieldsTokenizationNetworkErrorError": "Netværksfejl. Prøv igen.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Bekræftelse af betalingskort mislykkedes. Tjek oplysningerne, og prøv igen.",
          "paypalButtonMustBeUsed": "Brug PayPal-knappen til at fortsætte med din betaling.",
          "venmoButtonMustBeUsed": "Brug Venmo-knappen til at fortsætte med din betaling.",
          "applePayButtonMustBeUsed": "Brug Apple Pay-knappen til at fortsætte med din betaling.",
          "paypalAccountTokenizationFailedError": "Der opstod en fejl under tilføjelsen af PayPal-kontoen. Prøv igen.",
          "paypalFlowFailedError": "Det lykkedes ikke at oprette forbindelse til PayPal. Prøv igen.",
          "paypalTokenizationRequestActiveError": "PayPals betalingsautorisation er allerede i gang.",
          "venmoCanceledError": "Der opstod et problem. Sørg for, at den nyeste version af Venmo-appen er installeret på din enhed, og at din browser understøtter skift til Venmo.",
          "vaultManagerPaymentMethodDeletionError": "Betalingsmetoden kunne ikke slettes. Prøv igen.",
          "venmoAppFailedError": "Venmo-appen blev ikke fundet på din enhed.",
          "unsupportedCardTypeError": "Korttypen understøttes ikke. Prøv et andet kort.",
          "applePayTokenizationError": "Der opstod en netværksfejl under behandling af Apple Pay-betalingen. Prøv igen.",
          "applePayActiveCardError": "Føj et understøttet kort til din Apple Pay-e-pung.",
          "cardholderNameLabel": "Kortindehaverens navn",
          "cardNumberLabel": "Kortnummer",
          "cvvLabel": "Kontrolcifre",
          "cvvThreeDigitLabelSubheading": "(3 cifre)",
          "cvvFourDigitLabelSubheading": "(4 cifre)",
          "cardholderNamePlaceholder": "Kortindehaverens navn",
          "expirationDateLabel": "Udløbsdato",
          "expirationDateLabelSubheading": "(MM/ÅÅ)",
          "expirationDatePlaceholder": "MM/ÅÅ",
          "postalCodeLabel": "Postnummer",
          "saveCardLabel": "Gem kort",
          "payWithCard": "Betal med betalingskort",
          "endingIn": "Slutter på {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Kort",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 227: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Zahlen mit {{paymentSource}}",
          "chooseAnotherWayToPay": "Wählen Sie eine andere Zahlungsquelle",
          "chooseAWayToPay": "Wählen Sie eine Zahlungsquelle",
          "otherWaysToPay": "Sonstige Zahlungsquellen",
          "edit": "Ändern",
          "doneEditing": "Fertig",
          "editPaymentMethods": "Zahlungsquellen bearbeiten",
          "CreditCardDeleteConfirmationMessage": "{{secondaryIdentifier}}-Karte mit den Endziffern {{identifier}} löschen?",
          "PayPalAccountDeleteConfirmationMessage": "PayPal-Konto {{identifier}} löschen?",
          "VenmoAccountDeleteConfirmationMessage": "Wollen Sie das Venmo-Konto mit dem Benutzernamen {{identifier}} wirklich löschen?",
          "genericDeleteConfirmationMessage": "Möchten Sie diese Zahlungsquelle wirklich löschen?",
          "deleteCancelButton": "Abbrechen",
          "deleteConfirmationButton": "Löschen",
          "fieldEmptyForCvv": "Geben Sie die Kartenprüfnummer (CVV) ein.",
          "fieldEmptyForExpirationDate": "Geben Sie das Ablaufdatum ein.",
          "fieldEmptyForCardholderName": "Geben Sie den Namen des Karteninhabers ein.",
          "fieldTooLongForCardholderName": "Der Name des Karteninhabers darf nicht länger als 256 Zeichen sein.",
          "fieldEmptyForNumber": "Geben Sie eine Nummer ein.",
          "fieldEmptyForPostalCode": "Geben Sie eine Postleitzahl ein.",
          "fieldInvalidForCardholderName": "Der Name des Karteninhabers ist nicht gültig.",
          "fieldInvalidForCvv": "Diese Kartenprüfnummer ist ungültig.",
          "fieldInvalidForExpirationDate": "Dieses Ablaufdatum ist ungültig.",
          "fieldInvalidForNumber": "Diese Kartennummer ist ungültig.",
          "fieldInvalidForPostalCode": "Diese Postleitzahl ist ungültig.",
          "noticeOfCollection": "Indem ich mit meiner Karte bezahle, stimme ich der PayPal-Datenschutzerklärung zu.",
          "genericError": "Bei uns ist ein Fehler aufgetreten.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Diese Kreditkarte ist bereits als gespeicherte Zahlungsquelle vorhanden.",
          "hostedFieldsFailedTokenizationError": "Bitte prüfen Sie die Informationen und versuchen Sie es erneut.",
          "hostedFieldsFieldsInvalidError": "Bitte prüfen Sie die Informationen und versuchen Sie es erneut.",
          "hostedFieldsTokenizationNetworkErrorError": "Netzwerkfehler. Versuchen Sie es bitte erneut.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Die Kreditkartenverifizierung ist fehlgeschlagen. Bitte prüfen Sie die Informationen und versuchen Sie es erneut.",
          "paypalButtonMustBeUsed": "Verwenden Sie den PayPal-Button, um mit der Zahlung fortzufahren.",
          "venmoButtonMustBeUsed": "Verwenden Sie den Venmo-Button, um mit Ihrer Zahlung fortzufahren.",
          "applePayButtonMustBeUsed": "Verwenden Sie den Apple Pay-Button, um mit der Zahlung fortzufahren.",
          "paypalAccountTokenizationFailedError": "Beim Hinzufügen des PayPal-Kontos ist ein Fehler aufgetreten. Versuchen Sie es bitte erneut.",
          "paypalFlowFailedError": "Bei der Verbindung mit PayPal ist ein Fehler aufgetreten. Versuchen Sie es bitte erneut.",
          "paypalTokenizationRequestActiveError": "Die PayPal-Zahlungsautorisierung wird bereits vorgenommen.",
          "venmoCanceledError": "Etwas ist schief gelaufen. Vergewissern Sie sich, dass Sie die neueste Version der Venmo-App auf Ihrem Gerät installiert haben und Ihr Browser den Wechsel zu Venmo unterstützt.",
          "vaultManagerPaymentMethodDeletionError": "Die Zahlungsquelle konnte nicht gelöscht werden. Versuchen Sie es erneut.",
          "venmoAppFailedError": "Die Venmo-App wurde nicht auf Ihrem Gerät gefunden.",
          "unsupportedCardTypeError": "Dieser Kartentyp wird nicht unterstützt. Versuchen Sie es mit einer anderen Karte.",
          "applePayTokenizationError": "Bei der Verarbeitung der Apple Pay-Zahlung ist ein Netzwerkfehler aufgetreten. Versuchen Sie es bitte erneut.",
          "applePayActiveCardError": "Fügen Sie Ihrem Apple Pay-Wallet eine unterstützte Karte hinzu.",
          "cardholderNameLabel": "Name des Karteninhabers",
          "cardNumberLabel": "Kartennummer",
          "cvvLabel": "Kartenprüfnummer",
          "cvvThreeDigitLabelSubheading": "(3-stellig)",
          "cvvFourDigitLabelSubheading": "(4-stellig)",
          "cardholderNamePlaceholder": "Name des Karteninhabers",
          "expirationDateLabel": "Gültig bis",
          "expirationDateLabelSubheading": "(MM/JJ)",
          "expirationDatePlaceholder": "MM/JJ",
          "postalCodeLabel": "Postleitzahl",
          "saveCardLabel": "Karte speichern",
          "payWithCard": "Mit Karte zahlen",
          "endingIn": "Mit den Endziffern {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Karte",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 228: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Πληρωμή με {{paymentSource}}",
          "chooseAnotherWayToPay": "Επιλογή ενός άλλου τρόπου πληρωμής",
          "chooseAWayToPay": "Επιλογή τρόπου πληρωμής",
          "otherWaysToPay": "Άλλοι τρόποι πληρωμής",
          "edit": "Επεξεργασία",
          "doneEditing": "Τέλος",
          "editPaymentMethods": "Επεξεργασία μεθόδων πληρωμής",
          "CreditCardDeleteConfirmationMessage": "Διαγραφή της κάρτας {{secondaryIdentifier}} που λήγει σε {{identifier}};",
          "PayPalAccountDeleteConfirmationMessage": "Διαγραφή {{identifier}}λογαριασμού PayPal;",
          "VenmoAccountDeleteConfirmationMessage": "Θέλετε σίγουρα να διαγράψετε τον λογαριασμό Venmo με το όνομα χρήστη {{identifier}};",
          "genericDeleteConfirmationMessage": "Θέλετε σίγουρα να διαγράψετε αυτήν τη μέθοδο πληρωμής;",
          "deleteCancelButton": "Ακύρωση",
          "deleteConfirmationButton": "Διαγραφή",
          "fieldEmptyForCvv": "Συμπληρώστε έναν κωδικό ασφαλείας (CVV).",
          "fieldEmptyForExpirationDate": "Συμπληρώστε ημερομηνία λήξης.",
          "fieldEmptyForCardholderName": "Συμπληρώστε το όνομα ενός κατόχου κάρτας.",
          "fieldTooLongForCardholderName": "Το όνομα του κατόχου της κάρτας πρέπει να περιέχει λιγότερους από 256 χαρακτήρες.",
          "fieldEmptyForNumber": "Συμπληρώστε έναν αριθμό.",
          "fieldEmptyForPostalCode": "Συμπληρώστε έναν ταχυδρομικό κώδικα.",
          "fieldInvalidForCardholderName": "Αυτό το όνομα κατόχου κάρτας δεν είναι έγκυρο.",
          "fieldInvalidForCvv": "Αυτός ο κωδικός ασφαλείας δεν είναι έγκυρος.",
          "fieldInvalidForExpirationDate": "Αυτή η ημερομηνία λήξης δεν είναι έγκυρη.",
          "fieldInvalidForNumber": "Αυτός ο αριθμός κάρτας δεν είναι έγκυρος.",
          "fieldInvalidForPostalCode": "Αυτός ο ταχυδρομικός κώδικας δεν είναι έγκυρος.",
          "noticeOfCollection": "Πληρώνοντας με την κάρτα μου, αποδέχομαι τη Δήλωση απορρήτου της PayPal.",
          "genericError": "Προέκυψε πρόβλημα στο σύστημά μας.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Αυτή η πιστωτική κάρτα υπάρχει ήδη ως αποθηκευμένη μέθοδος πληρωμής.",
          "hostedFieldsFailedTokenizationError": "Ελέγξτε τα στοιχεία σας και δοκιμάστε ξανά.",
          "hostedFieldsFieldsInvalidError": "Ελέγξτε τα στοιχεία σας και δοκιμάστε ξανά.",
          "hostedFieldsTokenizationNetworkErrorError": "Σφάλμα δικτύου. Δοκιμάστε ξανά.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Η επαλήθευση της πιστωτικής κάρτας απέτυχε. Ελέγξτε τα στοιχεία σας και δοκιμάστε ξανά.",
          "paypalButtonMustBeUsed": "Χρησιμοποιήστε το κουμπί PayPal για να συνεχίσετε με την πληρωμή.",
          "venmoButtonMustBeUsed": "Χρησιμοποιήστε το κουμπί Venmo για να συνεχίσετε με την πληρωμή σας.",
          "applePayButtonMustBeUsed": "Χρησιμοποιήστε το κουμπί Apple Pay για να συνεχίσετε με την πληρωμή.",
          "paypalAccountTokenizationFailedError": "Προέκυψε κάποιο πρόβλημα με την προσθήκη του λογαριασμού PayPal. Δοκιμάστε ξανά.",
          "paypalFlowFailedError": "Προέκυψε κάποιο πρόβλημα με τη σύνδεση στην PayPal. Δοκιμάστε ξανά.",
          "paypalTokenizationRequestActiveError": "Η εξουσιοδότηση πληρωμής μέσω PayPal βρίσκεται ήδη σε εξέλιξη.",
          "venmoCanceledError": "Προέκυψε πρόβλημα. Βεβαιωθείτε ότι έχετε την πιο πρόσφατη έκδοση της εφαρμογής Venmo εγκατεστημένη στη συσκευή σας και ότι το πρόγραμμα περιήγησής σας υποστηρίζει τη μετάβαση στη Venmo.",
          "vaultManagerPaymentMethodDeletionError": "Η διαγραφή της μεθόδου πληρωμής είναι αδύνατη, δοκιμάστε ξανά.",
          "venmoAppFailedError": "Η εφαρμογή Venmo δεν βρέθηκε στη συσκευή σας.",
          "unsupportedCardTypeError": "Αυτός ο τύπος κάρτας δεν υποστηρίζεται. Δοκιμάστε μια άλλη κάρτα.",
          "applePayTokenizationError": "Προέκυψε σφάλμα δικτύου κατά την επεξεργασία της πληρωμής μέσω Apple Pay. Δοκιμάστε ξανά.",
          "applePayActiveCardError": "Προσθέστε μια υποστηριζόμενη κάρτα στο ψηφιακό πορτοφόλι Apple Pay.",
          "cardholderNameLabel": "Όνομα κατόχου κάρτας",
          "cardNumberLabel": "Αριθμός κάρτας",
          "cvvLabel": "Κωδικός ασφαλείας (CVV)",
          "cvvThreeDigitLabelSubheading": "(3 ψηφία)",
          "cvvFourDigitLabelSubheading": "(4 ψηφία)",
          "cardholderNamePlaceholder": "Όνομα κατόχου κάρτας",
          "expirationDateLabel": "Ημερομηνία λήξης",
          "expirationDateLabelSubheading": "(ΜΜ/ΕΕ)",
          "expirationDatePlaceholder": "ΜΜ/ΕΕ",
          "postalCodeLabel": "Ταχυδρομικός κώδικας",
          "saveCardLabel": "Αποθήκευση κάρτας",
          "payWithCard": "Πληρωμή με κάρτα",
          "endingIn": "Που λήγει σε {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Κάρτα",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 229: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Paying with {{paymentSource}}",
          "chooseAnotherWayToPay": "Choose another way to pay",
          "chooseAWayToPay": "Choose a way to pay",
          "otherWaysToPay": "Other ways to pay",
          "edit": "Edit",
          "doneEditing": "Done",
          "editPaymentMethods": "Edit payment methods",
          "CreditCardDeleteConfirmationMessage": "Delete {{secondaryIdentifier}} card ending in {{identifier}}?",
          "PayPalAccountDeleteConfirmationMessage": "Delete PayPal account {{identifier}}?",
          "VenmoAccountDeleteConfirmationMessage": "Are you sure you want to delete Venmo account with username {{identifier}}?",
          "genericDeleteConfirmationMessage": "Are you sure you want to delete this payment method?",
          "deleteCancelButton": "Cancel",
          "deleteConfirmationButton": "Delete",
          "fieldEmptyForCvv": "Please enter a CVV.",
          "fieldEmptyForExpirationDate": "Please enter an expiry date.",
          "fieldEmptyForCardholderName": "Please enter a cardholder name.",
          "fieldTooLongForCardholderName": "Cardholder name must be less than 256 characters.",
          "fieldEmptyForNumber": "Please enter a number.",
          "fieldEmptyForPostalCode": "Please enter a postcode.",
          "fieldInvalidForCardholderName": "This cardholder name isn't valid.",
          "fieldInvalidForCvv": "This CVV isn't valid.",
          "fieldInvalidForExpirationDate": "This expiry date isn't valid.",
          "fieldInvalidForNumber": "This card number isn't valid.",
          "fieldInvalidForPostalCode": "This postcode isn't valid.",
          "noticeOfCollection": "By paying with my card, I agree to the PayPal Privacy Statement.",
          "genericError": "We're sorry, something seems to have gone wrong.",
          "hostedFieldsTokenizationFailOnDuplicateError": "This card already exists as a saved payment method.",
          "hostedFieldsFailedTokenizationError": "Please check your entries and try again.",
          "hostedFieldsFieldsInvalidError": "Please check your entries and try again.",
          "hostedFieldsTokenizationNetworkErrorError": "Network error. Please try again.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Card verification failed. Please check your entries and try again.",
          "paypalButtonMustBeUsed": "Use the PayPal button to continue with your payment.",
          "venmoButtonMustBeUsed": "Use the Venmo button to continue with your payment.",
          "applePayButtonMustBeUsed": "Use the Apple Pay button to continue with your payment.",
          "paypalAccountTokenizationFailedError": "Something went wrong adding the PayPal account. Please try again.",
          "paypalFlowFailedError": "Something went wrong connecting to PayPal. Please try again.",
          "paypalTokenizationRequestActiveError": "PayPal payment authorisation is already in progress.",
          "venmoCanceledError": "We're sorry, something seems to have gone wrong. Please make sure you have the most recent version of the Venmo app installed on your device and that your browser supports switching to Venmo.",
          "vaultManagerPaymentMethodDeletionError": "Unable to delete payment method. Please try again.",
          "venmoAppFailedError": "The Venmo app couldn't be found on your device.",
          "unsupportedCardTypeError": "This card type isn't supported. Please try another card.",
          "applePayTokenizationError": "A network error occurred while processing the Apple Pay payment. Please try again.",
          "applePayActiveCardError": "Add a supported card to your Apple Pay wallet.",
          "cardholderNameLabel": "Cardholder name",
          "cardNumberLabel": "Card number",
          "cvvLabel": "CVV",
          "cvvThreeDigitLabelSubheading": "(3 digits)",
          "cvvFourDigitLabelSubheading": "(4 digits)",
          "cardholderNamePlaceholder": "Cardholder name",
          "expirationDateLabel": "Expiry date",
          "expirationDateLabelSubheading": "(MM/YY)",
          "expirationDatePlaceholder": "MM/YY",
          "postalCodeLabel": "Postcode",
          "saveCardLabel": "Save card",
          "payWithCard": "Pay with card",
          "endingIn": "Ending in {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Card",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 230: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Paying with {{paymentSource}}",
          "chooseAnotherWayToPay": "Choose another way to pay",
          "chooseAWayToPay": "Choose a way to pay",
          "otherWaysToPay": "Other ways to pay",
          "edit": "Edit",
          "doneEditing": "Done",
          "editPaymentMethods": "Edit funding sources",
          "CreditCardDeleteConfirmationMessage": "Delete {{secondaryIdentifier}} card ending in {{identifier}}?",
          "PayPalAccountDeleteConfirmationMessage": "Delete PayPal account {{identifier}}?",
          "VenmoAccountDeleteConfirmationMessage": "Are you sure you want to delete Venmo account with username {{identifier}}?",
          "genericDeleteConfirmationMessage": "Are you sure you want to delete this funding source?",
          "deleteCancelButton": "Cancel",
          "deleteConfirmationButton": "Delete",
          "fieldEmptyForCvv": "Please enter a security code.",
          "fieldEmptyForExpirationDate": "Please enter an expiry date.",
          "fieldEmptyForCardholderName": "Please enter a cardholder name.",
          "fieldTooLongForCardholderName": "Cardholder name must be less than 256 characters.",
          "fieldEmptyForNumber": "Please enter a number.",
          "fieldEmptyForPostalCode": "Please enter a postcode.",
          "fieldInvalidForCardholderName": "This cardholder name isn't valid.",
          "fieldInvalidForCvv": "This security code isn't valid.",
          "fieldInvalidForExpirationDate": "This expiry date isn't valid.",
          "fieldInvalidForNumber": "This card number isn't valid.",
          "fieldInvalidForPostalCode": "This postcode isn't valid.",
          "noticeOfCollection": "By paying with my card, I agree to the PayPal Privacy Statement.",
          "genericError": "Something went wrong on our end.",
          "hostedFieldsTokenizationFailOnDuplicateError": "This credit card already exists as a saved funding source.",
          "hostedFieldsFailedTokenizationError": "Please check your information and try again.",
          "hostedFieldsFieldsInvalidError": "Please check your information and try again.",
          "hostedFieldsTokenizationNetworkErrorError": "Network error. Please try again.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Credit card verification failed. Please check your information and try again.",
          "paypalButtonMustBeUsed": "Use the PayPal button to continue with your payment.",
          "venmoButtonMustBeUsed": "Use the Venmo button to continue with your payment.",
          "applePayButtonMustBeUsed": "Use the Apple Pay button to continue with your payment.",
          "paypalAccountTokenizationFailedError": "Something went wrong adding the PayPal account. Please try again.",
          "paypalFlowFailedError": "Something went wrong connecting to PayPal. Please try again.",
          "paypalTokenizationRequestActiveError": "PayPal payment authorisation is already in progress.",
          "venmoCanceledError": "Something went wrong. Ensure you have the most recent version of the Venmo app installed on your device and your browser supports switching to Venmo.",
          "vaultManagerPaymentMethodDeletionError": "We were unable to delete the funding source. Please try again.",
          "venmoAppFailedError": "The Venmo app couldn't be found on your device.",
          "unsupportedCardTypeError": "This card type isn't supported. Please try another card.",
          "applePayTokenizationError": "A network error occurred while processing the Apple Pay payment. Please try again.",
          "applePayActiveCardError": "Add a supported card to your Apple Pay wallet.",
          "cardholderNameLabel": "Cardholder name",
          "cardNumberLabel": "Card number",
          "cvvLabel": "Security code",
          "cvvThreeDigitLabelSubheading": "(3 digits)",
          "cvvFourDigitLabelSubheading": "(4 digits)",
          "cardholderNamePlaceholder": "Cardholder name",
          "expirationDateLabel": "Expiry date",
          "expirationDateLabelSubheading": "(MM/YY)",
          "expirationDatePlaceholder": "MM/YY",
          "postalCodeLabel": "Postcode",
          "saveCardLabel": "Save card",
          "payWithCard": "Pay with card",
          "endingIn": "Ending in {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Card",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 231: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Paying with {{paymentSource}}",
          "chooseAnotherWayToPay": "Choose another way to pay",
          "chooseAWayToPay": "Choose a way to pay",
          "otherWaysToPay": "Other ways to pay",
          "edit": "Edit",
          "doneEditing": "Done",
          "editPaymentMethods": "Edit payment methods",
          "CreditCardDeleteConfirmationMessage": "Delete {{secondaryIdentifier}} card ending in {{identifier}}?",
          "PayPalAccountDeleteConfirmationMessage": "Delete PayPal account {{identifier}}?",
          "VenmoAccountDeleteConfirmationMessage": "Are you sure you want to delete Venmo account with username {{identifier}}?",
          "genericDeleteConfirmationMessage": "Are you sure you want to delete this payment method?",
          "deleteCancelButton": "Cancel",
          "deleteConfirmationButton": "Delete",
          "fieldEmptyForCvv": "Please enter a CVV.",
          "fieldEmptyForExpirationDate": "Please enter an expiry date.",
          "fieldEmptyForCardholderName": "Please enter a cardholder name.",
          "fieldTooLongForCardholderName": "Cardholder name must be less than 256 characters.",
          "fieldEmptyForNumber": "Please enter a number.",
          "fieldEmptyForPostalCode": "Please enter a PIN code.",
          "fieldInvalidForCardholderName": "This cardholder name isn't valid.",
          "fieldInvalidForCvv": "This CVV isn't valid.",
          "fieldInvalidForExpirationDate": "This expiry date isn't valid.",
          "fieldInvalidForNumber": "This card number isn't valid.",
          "fieldInvalidForPostalCode": "This PIN code isn't valid.",
          "noticeOfCollection": "By paying with my card, I agree to the PayPal Privacy Statement.",
          "genericError": "We're sorry, something seems to have gone wrong.",
          "hostedFieldsTokenizationFailOnDuplicateError": "This card already exists as a saved payment method.",
          "hostedFieldsFailedTokenizationError": "Please check your information and try again.",
          "hostedFieldsFieldsInvalidError": "Please check your information and try again.",
          "hostedFieldsTokenizationNetworkErrorError": "Network error. Please try again.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Card verification failed. Please check your information and try again.",
          "paypalButtonMustBeUsed": "Use the PayPal button to continue with your payment.",
          "venmoButtonMustBeUsed": "Use the Venmo button to continue with your payment.",
          "applePayButtonMustBeUsed": "Use the Apple Pay button to continue with your payment.",
          "paypalAccountTokenizationFailedError": "Something went wrong adding the PayPal account. Please try again.",
          "paypalFlowFailedError": "Something went wrong connecting to PayPal. Please try again.",
          "paypalTokenizationRequestActiveError": "PayPal payment authorisation is already in progress.",
          "venmoCanceledError": "We're sorry, something seems to have gone wrong. Ensure you have the most recent version of the Venmo app installed on your device and your browser supports switching to Venmo.",
          "vaultManagerPaymentMethodDeletionError": "Unable to delete payment method. Please try again.",
          "venmoAppFailedError": "The Venmo app couldn't be found on your device.",
          "unsupportedCardTypeError": "This card type isn't supported. Please try another card.",
          "applePayTokenizationError": "A network error occurred while processing the Apple Pay payment. Please try again.",
          "applePayActiveCardError": "Add a supported card to your Apple Pay digital wallet.",
          "cardholderNameLabel": "Cardholder name",
          "cardNumberLabel": "Card number",
          "cvvLabel": "CVV",
          "cvvThreeDigitLabelSubheading": "(3 digits)",
          "cvvFourDigitLabelSubheading": "(4 digits)",
          "cardholderNamePlaceholder": "Cardholder name",
          "expirationDateLabel": "Expiry date",
          "expirationDateLabelSubheading": "(MM/YY)",
          "expirationDatePlaceholder": "MM/YY",
          "postalCodeLabel": "PIN code",
          "saveCardLabel": "Save card",
          "payWithCard": "Pay with card",
          "endingIn": "Ending in {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Card",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 232: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          payingWith: "Paying with {{paymentSource}}",
          chooseAnotherWayToPay: "Choose another way to pay",
          chooseAWayToPay: "Choose a way to pay",
          otherWaysToPay: "Other ways to pay",
          edit: "Edit",
          doneEditing: "Done",
          editPaymentMethods: "Edit payment methods",
          CreditCardDeleteConfirmationMessage: "Delete {{secondaryIdentifier}} card ending in {{identifier}}?",
          PayPalAccountDeleteConfirmationMessage: "Delete PayPal account {{identifier}}?",
          VenmoAccountDeleteConfirmationMessage: "Are you sure you want to delete Venmo account with username {{identifier}}?",
          genericDeleteConfirmationMessage: "Are you sure you want to delete this payment method?",
          deleteCancelButton: "Cancel",
          deleteConfirmationButton: "Delete",
          // Errors
          fieldEmptyForCvv: "Please fill out a CVV.",
          fieldEmptyForExpirationDate: "Please fill out an expiration date.",
          fieldEmptyForCardholderName: "Please fill out a cardholder name.",
          fieldEmptyForNumber: "Please fill out a card number.",
          fieldEmptyForPostalCode: "Please fill out a postal code.",
          fieldInvalidForCardholderName: "This cardholder name is not valid.",
          fieldInvalidForCvv: "This security code is not valid.",
          fieldInvalidForExpirationDate: "This expiration date is not valid.",
          fieldInvalidForNumber: "This card number is not valid.",
          fieldInvalidForPostalCode: "This postal code is not valid.",
          fieldTooLongForCardholderName: "Cardholder name must be less than 256 characters.",
          noticeOfCollection: "By paying with my card, I agree to the PayPal Privacy Statement.",
          genericError: "Something went wrong on our end.",
          hostedFieldsTokenizationFailOnDuplicateError: "This credit card already exists as a saved payment method.",
          hostedFieldsFailedTokenizationError: "Please check your information and try again.",
          hostedFieldsTokenizationCvvVerificationFailedError: "Credit card verification failed. Please check your information and try again.",
          hostedFieldsTokenizationNetworkErrorError: "Network error. Please try again.",
          hostedFieldsFieldsInvalidError: "Please check your information and try again.",
          paypalButtonMustBeUsed: "Use the PayPal button to continue with your payment.",
          venmoButtonMustBeUsed: "Use the Venmo button to continue with your payment.",
          applePayButtonMustBeUsed: "Use the Apple Pay button to continue with your payment.",
          paypalAccountTokenizationFailedError: "Something went wrong adding the PayPal account. Please try again.",
          paypalFlowFailedError: "Something went wrong connecting to PayPal. Please try again.",
          paypalTokenizationRequestActiveError: "PayPal payment authorization is already in progress.",
          applePayTokenizationError: "A network error occurred while processing the Apple Pay payment. Please try again.",
          applePayActiveCardError: "Add a supported card to your Apple Pay wallet.",
          vaultManagerPaymentMethodDeletionError: "Unable to delete payment method, try again.",
          venmoCanceledError: "Something went wrong. Ensure you have the most recent version of the Venmo app installed on your device and your browser supports switching to Venmo.",
          venmoAppFailedError: "The Venmo app could not be found on your device.",
          unsupportedCardTypeError: "This card type is not supported. Please try another card.",
          // Card form
          cardholderNameLabel: "Cardholder Name",
          cardNumberLabel: "Card Number",
          cvvLabel: "CVV",
          cvvThreeDigitLabelSubheading: "(3 digits)",
          cvvFourDigitLabelSubheading: "(4 digits)",
          expirationDateLabel: "Expiration Date",
          expirationDateLabelSubheading: "(MM/YY)",
          cardholderNamePlaceholder: "Cardholder Name",
          expirationDatePlaceholder: "MM/YY",
          postalCodeLabel: "Postal Code",
          saveCardLabel: "Save card",
          payWithCard: "Pay with card",
          // Payment Method descriptions
          endingIn: "Ending in {{lastFourCardDigits}}",
          Card: "Card",
          PayPal: "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Apple Pay": "Apple Pay",
          "Google Pay": "Google Pay",
          "Venmo": "Venmo",
          "American Express": "American Express",
          Discover: "Discover",
          "Diners Club": "Diners Club",
          Elo: "Elo",
          Hiper: "Hiper",
          Hipercard: "Hipercard",
          MasterCard: "Mastercard",
          Visa: "Visa",
          JCB: "JCB",
          Maestro: "Maestro",
          UnionPay: "UnionPay"
        };
      }, {}], 233: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Pagar con {{paymentSource}}",
          "chooseAnotherWayToPay": "Seleccionar otra forma de pago",
          "chooseAWayToPay": "Seleccionar forma de pago",
          "otherWaysToPay": "Otras formas de pago",
          "edit": "Editar",
          "doneEditing": "Hecho",
          "editPaymentMethods": "Editar formas de pago",
          "CreditCardDeleteConfirmationMessage": "¿Eliminar la tarjeta {{secondaryIdentifier}} terminada en {{identifier}}?",
          "PayPalAccountDeleteConfirmationMessage": "¿Eliminar la cuenta PayPal {{identifier}}?",
          "VenmoAccountDeleteConfirmationMessage": "¿Seguro que deseas eliminar la cuenta de Venmo con el nombre de usuario {{identifier}}?",
          "genericDeleteConfirmationMessage": "¿Seguro que deseas eliminar esta forma de pago?",
          "deleteCancelButton": "Cancelar",
          "deleteConfirmationButton": "Eliminar",
          "fieldEmptyForCvv": "Introduce el CVV.",
          "fieldEmptyForExpirationDate": "Introduce una fecha de vencimiento.",
          "fieldEmptyForCardholderName": "Introduce el nombre del titular de la tarjeta.",
          "fieldTooLongForCardholderName": "El nombre del titular de la tarjeta debe tener menos de 256 caracteres.",
          "fieldEmptyForNumber": "Introduce un número.",
          "fieldEmptyForPostalCode": "Introduce un código postal.",
          "fieldInvalidForCardholderName": "El nombre del titular de la tarjeta no es válido.",
          "fieldInvalidForCvv": "El código de seguridad no es válido.",
          "fieldInvalidForExpirationDate": "La fecha de vencimiento no es válida.",
          "fieldInvalidForNumber": "El número de tarjeta no es válido.",
          "fieldInvalidForPostalCode": "El código postal no es válido.",
          "noticeOfCollection": "Al pagar con mi tarjeta, acepto la Declaración de privacidad de PayPal.",
          "genericError": "Ha habido un problema.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Esta tarjeta de crédito ya existe como forma de pago guardada.",
          "hostedFieldsFailedTokenizationError": "Comprueba la información e inténtalo de nuevo.",
          "hostedFieldsFieldsInvalidError": "Comprueba la información e inténtalo de nuevo.",
          "hostedFieldsTokenizationNetworkErrorError": "Error de red. Inténtalo de nuevo.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Error al verificar la tarjeta de crédito. Comprueba la información e inténtalo de nuevo.",
          "paypalButtonMustBeUsed": "Utiliza el botón de PayPal para continuar con el pago.",
          "venmoButtonMustBeUsed": "Pulsa el botón de Venmo para continuar con el pago.",
          "applePayButtonMustBeUsed": "Utiliza el botón de Apple Pay para continuar con el pago.",
          "paypalAccountTokenizationFailedError": "Se ha producido un error al añadir la cuenta PayPal. Inténtalo de nuevo.",
          "paypalFlowFailedError": "Se ha producido un error al conectar con PayPal. Inténtalo de nuevo.",
          "paypalTokenizationRequestActiveError": "La autorización del pago de PayPal ya está en curso.",
          "venmoCanceledError": "Ha habido un error. Asegúrate de tener la versión más reciente de la aplicación de Venmo instalada en el dispositivo y de que el navegador admita el cambio a Venmo.",
          "vaultManagerPaymentMethodDeletionError": "No se puede eliminar la forma de pago. Inténtalo de nuevo.",
          "venmoAppFailedError": "No se ha podido encontrar la aplicación de Venmo en tu dispositivo.",
          "unsupportedCardTypeError": "No se admite este tipo de tarjeta. Prueba con otra tarjeta.",
          "applePayTokenizationError": "Se ha producido un error de red al procesar el pago de Apple Pay. Inténtalo de nuevo.",
          "applePayActiveCardError": "Añade una tarjeta compatible a tu cartera de Apple Pay.",
          "cardholderNameLabel": "Nombre del titular de la tarjeta",
          "cardNumberLabel": "Número de tarjeta",
          "cvvLabel": "CVV",
          "cvvThreeDigitLabelSubheading": "(3 dígitos)",
          "cvvFourDigitLabelSubheading": "(4 dígitos)",
          "cardholderNamePlaceholder": "Nombre del titular de la tarjeta",
          "expirationDateLabel": "Fecha de vencimiento",
          "expirationDateLabelSubheading": "(MM/AA)",
          "expirationDatePlaceholder": "MM/AA",
          "postalCodeLabel": "Código postal",
          "saveCardLabel": "Guardar tarjeta",
          "payWithCard": "Pagar con tarjeta",
          "endingIn": "Terminada en {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Tarjeta",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 234: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Pagar con {{paymentSource}}",
          "chooseAnotherWayToPay": "Elija otra forma de pago",
          "chooseAWayToPay": "Seleccione una forma de pago",
          "otherWaysToPay": "Otras formas de pago",
          "edit": "Editar",
          "doneEditing": "Listo",
          "editPaymentMethods": "Editar métodos de pago",
          "CreditCardDeleteConfirmationMessage": "¿Eliminar tarjeta {{secondaryIdentifier}} con terminación {{identifier}}?",
          "PayPalAccountDeleteConfirmationMessage": "¿Desea eliminar la cuenta de PayPal {{identifier}}?",
          "VenmoAccountDeleteConfirmationMessage": "¿Seguro que desea eliminar la cuenta de Venmo con el nombre de usuario {{identifier}}?",
          "genericDeleteConfirmationMessage": "¿Seguro que desea eliminar esta forma de pago?",
          "deleteCancelButton": "Cancelar",
          "deleteConfirmationButton": "Eliminar",
          "fieldEmptyForCvv": "Ingrese un CVV.",
          "fieldEmptyForExpirationDate": "Ingrese una fecha de vencimiento.",
          "fieldEmptyForCardholderName": "Ingrese un nombre de titular de tarjeta.",
          "fieldTooLongForCardholderName": "El nombre del titular de la tarjeta debe tener menos de 256 caracteres.",
          "fieldEmptyForNumber": "Ingrese un número.",
          "fieldEmptyForPostalCode": "Ingrese un código postal.",
          "fieldInvalidForCardholderName": "El nombre del titular de la tarjeta no es válido.",
          "fieldInvalidForCvv": "Este código de seguridad no es válido.",
          "fieldInvalidForExpirationDate": "Esta fecha de vencimiento no es válida.",
          "fieldInvalidForNumber": "Este número de tarjeta no es válido.",
          "fieldInvalidForPostalCode": "Este código postal no es válido.",
          "noticeOfCollection": "Al pagar con mi tarjeta, acepto el Aviso de Privacidad de PayPal.",
          "genericError": "Se ha producido un error.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Esta tarjeta de crédito ya existe como forma de pago guardada.",
          "hostedFieldsFailedTokenizationError": "Revise la información e inténtelo de nuevo.",
          "hostedFieldsFieldsInvalidError": "Revise la información e inténtelo de nuevo.",
          "hostedFieldsTokenizationNetworkErrorError": "Error de red. Inténtelo de nuevo.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "La verificación de la tarjeta de crédito falló. Revise la información e inténtelo de nuevo.",
          "paypalButtonMustBeUsed": "Utilice el botón de PayPal para continuar con su pago.",
          "venmoButtonMustBeUsed": "Use el botón Venmo para continuar con el pago.",
          "applePayButtonMustBeUsed": "Utilice el botón de Apple Pay para continuar con su pago.",
          "paypalAccountTokenizationFailedError": "Se ha producido un error al agregar la cuenta de PayPal. Inténtelo de nuevo.",
          "paypalFlowFailedError": "Se ha producido un error al conectar con PayPal. Inténtelo de nuevo.",
          "paypalTokenizationRequestActiveError": "La autorización de pago de PayPal ya está en curso.",
          "venmoCanceledError": "Se ha producido un error. Asegúrese de que tiene la versión más reciente de la aplicación de Venmo instalada en su dispositivo y que su navegador admita el sitio web Venmo.",
          "vaultManagerPaymentMethodDeletionError": "No se pudo eliminar la forma de pago, inténtelo de nuevo.",
          "venmoAppFailedError": "No se pudo encontrar la aplicación de Venmo en su dispositivo.",
          "unsupportedCardTypeError": "Este tipo de tarjeta no es compatible. Inténtelo con otra tarjeta.",
          "applePayTokenizationError": "Se ha producido un error de red al procesar el pago de Apple Pay. Inténtelo de nuevo.",
          "applePayActiveCardError": "Agregue una tarjeta compatible a su cartera de Apple Pay.",
          "cardholderNameLabel": "Nombre del titular de la tarjeta",
          "cardNumberLabel": "Número de tarjeta",
          "cvvLabel": "CVV",
          "cvvThreeDigitLabelSubheading": "(3 dígitos)",
          "cvvFourDigitLabelSubheading": "(4 dígitos)",
          "cardholderNamePlaceholder": "Nombre del titular de la tarjeta",
          "expirationDateLabel": "Fecha de vencimiento",
          "expirationDateLabelSubheading": "(MM/AA)",
          "expirationDatePlaceholder": "MM/AA",
          "postalCodeLabel": "Código postal",
          "saveCardLabel": "Guardar tarjeta",
          "payWithCard": "Pagar con tarjeta",
          "endingIn": "Con terminación {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Tarjeta",
          "PayPal": "Paypal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 235: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Maksuväline: {{paymentSource}}",
          "chooseAnotherWayToPay": "Valitse toinen maksutapa",
          "chooseAWayToPay": "Valitse maksutapa",
          "otherWaysToPay": "Muita maksutapoja",
          "edit": "Muokkaa",
          "doneEditing": "Valmis",
          "editPaymentMethods": "Muokkaa maksutapoja",
          "CreditCardDeleteConfirmationMessage": "Haluatko poistaa {{secondaryIdentifier}}} -kortin, joka päättyy {{identifier}}}?",
          "PayPalAccountDeleteConfirmationMessage": "Haluatko poistaa PayPal-tilin {{identifier}}}?",
          "VenmoAccountDeleteConfirmationMessage": "Haluatko varmasti poistaa Venmo-tilin, jonka käyttäjätunnus on {{identifier}}}?",
          "genericDeleteConfirmationMessage": "Haluatko varmasti poistaa tämän maksutavan?",
          "deleteCancelButton": "Peruuta",
          "deleteConfirmationButton": "Poista",
          "fieldEmptyForCvv": "Anna turvakoodi.",
          "fieldEmptyForExpirationDate": "Anna voimassaolon päättymispäivämäärä.",
          "fieldEmptyForCardholderName": "Anna kortinhaltijan nimi.",
          "fieldTooLongForCardholderName": "Kortinhaltijan nimen on oltava alle 256 merkkiä.",
          "fieldEmptyForNumber": "Anna numero.",
          "fieldEmptyForPostalCode": "Anna postinumero.",
          "fieldInvalidForCardholderName": "Kortinhaltijan nimi ei ole kelvollinen.",
          "fieldInvalidForCvv": "Turvakoodi ei ole kelvollinen.",
          "fieldInvalidForExpirationDate": "Päättymispäivämäärä ei ole kelvollinen.",
          "fieldInvalidForNumber": "Kortin numero ei ole kelvollinen.",
          "fieldInvalidForPostalCode": "Postinumero ei ole kelvollinen.",
          "noticeOfCollection": "Maksamalla kortillani hyväksyn PayPal tietosuojaselosteen.",
          "genericError": "Jokin meni pieleen tässä päässä.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Tämä luottokortti on jo tallennettu maksutavaksi.",
          "hostedFieldsFailedTokenizationError": "Tarkista tiedot ja yritä uudelleen.",
          "hostedFieldsFieldsInvalidError": "Tarkista tiedot ja yritä uudelleen.",
          "hostedFieldsTokenizationNetworkErrorError": "Verkkovirhe. Yritä uudelleen.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Luottokortin varmennus epäonnistui. Tarkista tiedot ja yritä uudelleen.",
          "paypalButtonMustBeUsed": "Jatka maksua PayPal-painikkeen avulla.",
          "venmoButtonMustBeUsed": "Jatka maksua Venmo-painikkeella.",
          "applePayButtonMustBeUsed": "Jatka maksua Apple Pay-painikkeen avulla.",
          "paypalAccountTokenizationFailedError": "Jotain meni pieleen PayPal-tiliä lisätessä. Yritä uudelleen.",
          "paypalFlowFailedError": "Jotain meni pieleen muodostettaessa yhteyttä PayPaliin. Yritä uudelleen.",
          "paypalTokenizationRequestActiveError": "PayPal-maksun valtuutus on jo meneillään.",
          "venmoCanceledError": "Jokin meni pieleen. Varmista, että laitteeseesi on asennettu Venmo-sovelluksen viimeisin versio, ja että selain tukee vaihtamista Venmoon.",
          "vaultManagerPaymentMethodDeletionError": "Maksutavan poistaminen ei onnistu, yritä uudelleen.",
          "venmoAppFailedError": "Venmo-sovellusta ei löytynyt laitteesta.",
          "unsupportedCardTypeError": "Tätä korttityyppiä ei tueta. Kokeile toista korttia.",
          "applePayTokenizationError": "Tapahtui verkkovirhe Apple Pay -maksun käsittelyssä. Yritä uudelleen.",
          "applePayActiveCardError": "Lisää tuettu kortti Apple Pay -lompakkoon.",
          "cardholderNameLabel": "Kortinhaltijan nimi",
          "cardNumberLabel": "Kortin numero",
          "cvvLabel": "Kortin turvakoodi",
          "cvvThreeDigitLabelSubheading": "(kolme numeroa)",
          "cvvFourDigitLabelSubheading": "(neljä numeroa)",
          "cardholderNamePlaceholder": "Kortinhaltijan nimi",
          "expirationDateLabel": "Päättymispäivämäärä",
          "expirationDateLabelSubheading": "(KK/VV)",
          "expirationDatePlaceholder": "KK/VV",
          "postalCodeLabel": "Postinumero",
          "saveCardLabel": "Tallenna kortti",
          "payWithCard": "Maksa kortilla",
          "endingIn": "Päättyy {{lastFourCardDigits}}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Kortti",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 236: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Payer avec {{paymentSource}}",
          "chooseAnotherWayToPay": "Choisir un autre mode de paiement",
          "chooseAWayToPay": "Choisir un mode de paiement",
          "otherWaysToPay": "Autres modes de paiement",
          "edit": "Modifier",
          "doneEditing": "Terminé",
          "editPaymentMethods": "Modifier les modes de paiement",
          "CreditCardDeleteConfirmationMessage": "Supprimer la carte {{secondaryIdentifier}} se terminant par {{identifier}} ?",
          "PayPalAccountDeleteConfirmationMessage": "Supprimer le compte PayPal {{identifier}} ?",
          "VenmoAccountDeleteConfirmationMessage": "Souhaitez-vous vraiment supprimer le compte Venmo dont le nom d'utilisateur est {{identifier}} ?",
          "genericDeleteConfirmationMessage": "Voulez-vous vraiment supprimer ce mode paiement ?",
          "deleteCancelButton": "Annuler",
          "deleteConfirmationButton": "Supprimer",
          "fieldEmptyForCvv": "Saisissez un CVV.",
          "fieldEmptyForExpirationDate": "Saisissez une date d'expiration.",
          "fieldEmptyForCardholderName": "Saisissez le nom du titulaire de la carte.",
          "fieldTooLongForCardholderName": "Le nom du titulaire de la carte doit contenir moins de 256 caractères.",
          "fieldEmptyForNumber": "Saisissez un numéro.",
          "fieldEmptyForPostalCode": "Saisissez un code postal.",
          "fieldInvalidForCardholderName": "Le nom de ce titulaire de la carte n'est pas valide.",
          "fieldInvalidForCvv": "Ce cryptogramme visuel n'est pas valide.",
          "fieldInvalidForExpirationDate": "Cette date d'expiration n'est pas valide.",
          "fieldInvalidForNumber": "Ce numéro de carte n'est pas valide.",
          "fieldInvalidForPostalCode": "Ce code postal n'est pas valide.",
          "noticeOfCollection": "En payant avec ma carte, j’accepte la Politique de confidentialité de PayPal.",
          "genericError": "Une erreur s'est produite de notre côté.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Cette carte de crédit est déjà enregistrée en tant que mode de paiement.",
          "hostedFieldsFailedTokenizationError": "Veuillez vérifier vos informations, puis réessayer.",
          "hostedFieldsFieldsInvalidError": "Veuillez vérifier vos informations, puis réessayer.",
          "hostedFieldsTokenizationNetworkErrorError": "Erreur de réseau. Réessayez.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Échec de vérification de la carte de crédit. Veuillez vérifier vos informations, puis réessayer.",
          "paypalButtonMustBeUsed": "Utilisez le bouton PayPal pour poursuivre votre paiement.",
          "venmoButtonMustBeUsed": "Utilisez le bouton Venmo pour continuer votre paiement.",
          "applePayButtonMustBeUsed": "Utilisez le bouton Apple Pay pour poursuivre votre paiement.",
          "paypalAccountTokenizationFailedError": "Une erreur s'est produite lors de l'ajout du compte PayPal. Veuillez réessayer.",
          "paypalFlowFailedError": "Une erreur s'est produite lors de la connexion à PayPal. Veuillez réessayer.",
          "paypalTokenizationRequestActiveError": "L'autorisation de paiement PayPal est déjà en cours.",
          "venmoCanceledError": "Une erreur s'est produite. Assurez-vous que la version la plus récente de l'application Venmo est installée sur votre appareil et que votre navigateur prend en charge la redirection vers Venmo.",
          "vaultManagerPaymentMethodDeletionError": "Impossible de supprimer le mode de paiement. Réessayez.",
          "venmoAppFailedError": "L'application Venmo n'est pas présente sur votre appareil.",
          "unsupportedCardTypeError": "Ce type de carte n'est pas pris en charge. Veuillez essayer une autre carte.",
          "applePayTokenizationError": "Une erreur de réseau s'est produite lors du traitement du paiement Apple Pay. Veuillez réessayer.",
          "applePayActiveCardError": "Ajoutez une carte prise en charge à votre portefeuille Apple Pay.",
          "cardholderNameLabel": "Nom du titulaire de la carte",
          "cardNumberLabel": "Numéro de carte",
          "cvvLabel": "Cryptogramme visuel",
          "cvvThreeDigitLabelSubheading": "(3 chiffres)",
          "cvvFourDigitLabelSubheading": "(4 chiffres)",
          "cardholderNamePlaceholder": "Nom du titulaire de la carte",
          "expirationDateLabel": "Date d'expiration",
          "expirationDateLabelSubheading": "(MM/AA)",
          "expirationDatePlaceholder": "MM/AA",
          "postalCodeLabel": "Code postal",
          "saveCardLabel": "Enregistrer la carte",
          "payWithCard": "Payer par carte",
          "endingIn": "Se terminant par {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Carte",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 237: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Payer avec : {{paymentSource}}",
          "chooseAnotherWayToPay": "Choisir un autre mode de paiement",
          "chooseAWayToPay": "Choisir un mode de paiement",
          "otherWaysToPay": "Autres modes de paiement",
          "edit": "Modifier",
          "doneEditing": "Terminé",
          "editPaymentMethods": "Modifier les modes de paiement",
          "CreditCardDeleteConfirmationMessage": "Supprimer la carte {{secondaryIdentifier}} se terminant par {{identifier}} ?",
          "PayPalAccountDeleteConfirmationMessage": "Supprimer le compte PayPal {{identifier}} ?",
          "VenmoAccountDeleteConfirmationMessage": "Souhaitez-vous vraiment supprimer le compte Venmo associé au nom d'utilisateur {{identifier}} ?",
          "genericDeleteConfirmationMessage": "Souhaitez-vous vraiment supprimer ce mode de paiement ?",
          "deleteCancelButton": "Annuler",
          "deleteConfirmationButton": "Supprimer",
          "fieldEmptyForCvv": "Renseignez un cryptogramme visuel.",
          "fieldEmptyForExpirationDate": "Renseignez une date d'expiration.",
          "fieldEmptyForCardholderName": "Renseignez le nom du titulaire de la carte.",
          "fieldTooLongForCardholderName": "Le nom du titulaire de la carte doit comporter moins de 256 caractères.",
          "fieldEmptyForNumber": "Renseignez un numéro.",
          "fieldEmptyForPostalCode": "Renseignez un code postal.",
          "fieldInvalidForCardholderName": "Le nom de ce titulaire de la carte est incorrect.",
          "fieldInvalidForCvv": "Ce cryptogramme visuel est incorrect.",
          "fieldInvalidForExpirationDate": "Cette date d'expiration est incorrecte.",
          "fieldInvalidForNumber": "Ce numéro de carte est incorrect.",
          "fieldInvalidForPostalCode": "Ce code postal est incorrect.",
          "noticeOfCollection": "En payant avec ma carte, j'accepte la Politique de confidentialité de PayPal.",
          "genericError": "Une erreur est survenue.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Cette carte bancaire existe déjà en tant que mode de paiement enregistré.",
          "hostedFieldsFailedTokenizationError": "Vérifiez vos informations et réessayez.",
          "hostedFieldsFieldsInvalidError": "Vérifiez vos informations et réessayez.",
          "hostedFieldsTokenizationNetworkErrorError": "Erreur réseau. Réessayez.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Échec de la vérification de carte bancaire. Vérifiez vos informations et réessayez.",
          "paypalButtonMustBeUsed": "Utilisez le bouton PayPal pour poursuivre le paiement.",
          "venmoButtonMustBeUsed": "Utilisez le bouton Venmo pour poursuivre le paiement.",
          "applePayButtonMustBeUsed": "Utilisez le bouton Apple Pay pour poursuivre le paiement.",
          "paypalAccountTokenizationFailedError": "Une erreur est survenue lors de l'ajout du compte PayPal. Réessayez.",
          "paypalFlowFailedError": "Une erreur est survenue lors de la connexion à PayPal. Réessayez.",
          "paypalTokenizationRequestActiveError": "L'autorisation de paiement PayPal est déjà en cours.",
          "venmoCanceledError": "Une erreur est survenue. Vérifiez que la dernière version de l'application Venmo est installée sur votre appareil et que votre navigateur prend en charge la redirection vers Venmo.",
          "vaultManagerPaymentMethodDeletionError": "Impossible de supprimer le mode de paiement, réessayez.",
          "venmoAppFailedError": "Nous n'avons pas trouvé l'application Venmo sur votre appareil.",
          "unsupportedCardTypeError": "Ce type de carte n'est pas pris en charge. Essayez une autre carte.",
          "applePayTokenizationError": "Une erreur réseau est survenue lors du traitement du paiement Apple Pay. Réessayez.",
          "applePayActiveCardError": "Enregistrez une carte prise en charge sur votre portefeuille Apple Pay.",
          "cardholderNameLabel": "Nom du titulaire de la carte",
          "cardNumberLabel": "Numéro de carte",
          "cvvLabel": "Crypto.",
          "cvvThreeDigitLabelSubheading": "(3 chiffres)",
          "cvvFourDigitLabelSubheading": "(4 chiffres)",
          "cardholderNamePlaceholder": "Nom du titulaire de la carte",
          "expirationDateLabel": "Date d'expiration",
          "expirationDateLabelSubheading": "(MM/AA)",
          "expirationDatePlaceholder": "MM/AA",
          "postalCodeLabel": "Code postal",
          "saveCardLabel": "Enregistrer la carte",
          "payWithCard": "Payer par carte",
          "endingIn": "Se terminant par {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Carte",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 238: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Payer avec {{paymentSource}}",
          "chooseAnotherWayToPay": "Choisir un autre mode de paiement",
          "chooseAWayToPay": "Choisir un mode de paiement",
          "otherWaysToPay": "Autres modes de paiement",
          "edit": "Modifier",
          "doneEditing": "Terminé",
          "editPaymentMethods": "Modifier les modes de paiement",
          "CreditCardDeleteConfirmationMessage": "Supprimer la carte {{secondaryIdentifier}}} se terminant par {{identifier}}} ?",
          "PayPalAccountDeleteConfirmationMessage": "Supprimer le compte PayPal {{identifier}}} ?",
          "VenmoAccountDeleteConfirmationMessage": "Souhaitez-vous vraiment supprimer le compte Venmo associé au nom d'utilisateur {{identifier}}} ?",
          "genericDeleteConfirmationMessage": "Souhaitez-vous vraiment supprimer ce mode de paiement ?",
          "deleteCancelButton": "Annuler",
          "deleteConfirmationButton": "Supprimer",
          "fieldEmptyForCvv": "Renseignez un cryptogramme visuel.",
          "fieldEmptyForExpirationDate": "Renseignez une date d'expiration.",
          "fieldEmptyForCardholderName": "Renseignez le nom du titulaire de la carte.",
          "fieldTooLongForCardholderName": "Le nom du titulaire de la carte doit comporter moins de 256 caractères.",
          "fieldEmptyForNumber": "Renseignez un numéro.",
          "fieldEmptyForPostalCode": "Renseignez un code postal.",
          "fieldInvalidForCardholderName": "Le nom de ce titulaire de la carte est incorrect.",
          "fieldInvalidForCvv": "Ce cryptogramme visuel est incorrect.",
          "fieldInvalidForExpirationDate": "Cette date d'expiration est incorrecte.",
          "fieldInvalidForNumber": "Ce numéro de carte est incorrect.",
          "fieldInvalidForPostalCode": "Ce code postal est incorrect.",
          "noticeOfCollection": "En payant avec ma carte, j'accepte la Politique de confidentialité de PayPal.",
          "genericError": "Une erreur est survenue.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Cette carte bancaire existe déjà en tant que mode de paiement enregistré.",
          "hostedFieldsFailedTokenizationError": "Vérifiez vos informations et réessayez.",
          "hostedFieldsFieldsInvalidError": "Vérifiez vos informations et réessayez.",
          "hostedFieldsTokenizationNetworkErrorError": "Erreur réseau. Réessayez.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Échec de la vérification de carte bancaire. Vérifiez vos informations et réessayez.",
          "paypalButtonMustBeUsed": "Utilisez le bouton PayPal pour poursuivre le paiement.",
          "venmoButtonMustBeUsed": "Utilisez le bouton Venmo pour poursuivre le paiement.",
          "applePayButtonMustBeUsed": "Utilisez le bouton Apple Pay pour poursuivre le paiement.",
          "paypalAccountTokenizationFailedError": "Une erreur est survenue lors de l'ajout du compte PayPal. Réessayez.",
          "paypalFlowFailedError": "Une erreur est survenue lors de la connexion à PayPal. Réessayez.",
          "paypalTokenizationRequestActiveError": "L'autorisation de paiement PayPal est déjà en cours.",
          "venmoCanceledError": "Une erreur est survenue. Vérifiez que la dernière version de l'application Venmo est installée sur votre appareil et que votre navigateur prend en charge la redirection vers Venmo.",
          "vaultManagerPaymentMethodDeletionError": "Impossible de supprimer le mode de paiement, réessayez.",
          "venmoAppFailedError": "Nous n'avons pas trouvé l'application Venmo sur votre appareil.",
          "unsupportedCardTypeError": "Ce type de carte n'est pas pris en charge. Essayez une autre carte.",
          "applePayTokenizationError": "Une erreur réseau est survenue lors du traitement du paiement Apple Pay. Réessayez.",
          "applePayActiveCardError": "Enregistrez une carte prise en charge sur votre portefeuille Apple Pay.",
          "cardholderNameLabel": "Nom du titulaire de la carte",
          "cardNumberLabel": "Numéro de carte",
          "cvvLabel": "Crypto.",
          "cvvThreeDigitLabelSubheading": "(3 chiffres)",
          "cvvFourDigitLabelSubheading": "(4 chiffres)",
          "cardholderNamePlaceholder": "Nom du titulaire de la carte",
          "expirationDateLabel": "Date d'expiration",
          "expirationDateLabelSubheading": "(MM/AA)",
          "expirationDatePlaceholder": "MM/AA",
          "postalCodeLabel": "Code postal",
          "saveCardLabel": "Enregistrer la carte",
          "payWithCard": "Payer par carte",
          "endingIn": "Se termine le {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Carte",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 239: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "תשלום באמצעות {{paymentSource}}",
          "chooseAnotherWayToPay": "עליך לבחור שיטת תשלום אחרת",
          "chooseAWayToPay": "כיצד ברצונך לשלם?",
          "otherWaysToPay": "שיטות תשלום אחרות",
          "edit": "עריכה",
          "doneEditing": "בוצע",
          "editPaymentMethods": "עריכת שיטות תשלום",
          "CreditCardDeleteConfirmationMessage": "למחוק {{secondaryIdentifier}} הכרטיס המסתיים {{identifier}}?",
          "PayPalAccountDeleteConfirmationMessage": "למחוק PayPal החשבון {{identifier}}?",
          "VenmoAccountDeleteConfirmationMessage": "האם אתה בטוח שברצונך למחוק את חשבון Venmo הרשום תחת שם המשתמש {{identifier}}?",
          "genericDeleteConfirmationMessage": "האם אתה בטוח שברצונך למחוק שיטת תשלום זו?",
          "deleteCancelButton": "ביטול",
          "deleteConfirmationButton": "מחיקה",
          "fieldEmptyForCvv": "עליך למלא את מספר האבטחה של כרטיס האשראי.",
          "fieldEmptyForExpirationDate": "עליך למלא את תאריך פקיעת התוקף.",
          "fieldEmptyForCardholderName": "עליך למלא את שם בעל הכרטיס.",
          "fieldTooLongForCardholderName": "שם בעל הכרטיס יכול להכיל 256 תווים לכל היותר.",
          "fieldEmptyForNumber": "עליך למלא את המספר.",
          "fieldEmptyForPostalCode": "עליך למלא את המיקוד.",
          "fieldInvalidForCardholderName": "שם בעל הכרטיס אינו חוקי.",
          "fieldInvalidForCvv": "קוד אבטחה אינו חוקי.",
          "fieldInvalidForExpirationDate": "תאריך פקיעת התוקף אינו חוקי.",
          "fieldInvalidForNumber": "מספר כרטיס האשראי אינו חוקי.",
          "fieldInvalidForPostalCode": "המיקוד אינו חוקי.",
          "noticeOfCollection": "בכך שאני משלם/ת באמצעות כרטיס האשראי שלי, אני מסכים/ה להצהרת הפרטיות של PayPal.",
          "genericError": "נראה שמשהו השתבש בצד שלנו.",
          "hostedFieldsTokenizationFailOnDuplicateError": "כרטיס אשראי זה כבר שמור כשיטת תשלום.",
          "hostedFieldsFailedTokenizationError": "עליך לבדוק את הפרטים שלך ולנסות שוב.",
          "hostedFieldsFieldsInvalidError": "עליך לבדוק את הפרטים שלך ולנסות שוב.",
          "hostedFieldsTokenizationNetworkErrorError": "שגיאת רשת. עליך לנסות שוב.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "אימות כרטיס האשראי נכשל. עליך לבדוק את הפרטים שלך ולנסות שוב.",
          "paypalButtonMustBeUsed": "להשתמש בלחצן PayPal כדי להמשיך בביצוע התשלום שלך.",
          "venmoButtonMustBeUsed": "השתמשו בלחצן Venmo כדי להמשיך בתשלום שלכם.",
          "applePayButtonMustBeUsed": "השתמשו בלחצן Apple Pay כדי להמשיך בביצוע התשלום שלכם.",
          "paypalAccountTokenizationFailedError": "משהו השתבש בעת הוספת חשבון PayPal. עליך לנסות שוב.",
          "paypalFlowFailedError": "משהו השתבש בהתחברות ל-PayPal. עליך לנסות שוב.",
          "paypalTokenizationRequestActiveError": "אישור התשלום של PayPal כבר מתבצע.",
          "venmoCanceledError": "נראה שמשהו השתבש. עליך לוודא שהגרסה העדכנית ביותר של אפליקציית Venmo מותקנת במכשיר שלך, ושהדפדפן שלך תומך במעבר ל-Venmo.",
          "vaultManagerPaymentMethodDeletionError": "לא הצלחנו למחוק את שיטת התשלום, עליך לנסות שוב.",
          "venmoAppFailedError": "לא מצאנו למצוא את אפליקציית Venmo במכשיר שלך.",
          "unsupportedCardTypeError": "סוג כרטיס זה אינו נתמך. עליך לנסות כרטיס אחר.",
          "applePayTokenizationError": "אירעה שגיאת רשת בעת עיבוד תשלום התשלומים של Apple Pay. עליך לנסות שוב.",
          "applePayActiveCardError": "הוספת כרטיס נתמך לארנק Apple Pay שלך.",
          "cardholderNameLabel": "שם בעל הכרטיס",
          "cardNumberLabel": "מספר כרטיס",
          "cvvLabel": "קוד אבטחת כרטיס (CVV)",
          "cvvThreeDigitLabelSubheading": "(3 ספרות)",
          "cvvFourDigitLabelSubheading": "(4 ספרות)",
          "cardholderNamePlaceholder": "שם בעל הכרטיס",
          "expirationDateLabel": "תאריך פקיעת תוקף",
          "expirationDateLabelSubheading": "(MM/YY)",
          "expirationDatePlaceholder": "MM/YY‏",
          "postalCodeLabel": "מיקוד",
          "saveCardLabel": "שמירת כרטיס אשראי",
          "payWithCard": "לשלם באמצעות כרטיס אשראי",
          "endingIn": "מסתיים בתאריך {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "כרטיס",
          "PayPal": "PayPal‏",
          "PayPal Credit": "PayPal Credit‏",
          "Google Pay": "Google Pay",
          "American Express": "אמריקן אקספרס",
          "Discover": "Discover‏",
          "Diners Club": "דיינרס קלאב",
          "Elo": "Elo‏",
          "Hiper": "Hiper‏",
          "Hipercard": "HiperCard‏",
          "MasterCard": "מאסטרקארד",
          "Visa": "Visa",
          "JCB": "JCB‏",
          "Maestro": "Maestro‏",
          "UnionPay": "UnionPay‏"
        };
      }, {}], 240: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Fizetés ezzel: {{paymentSource}}",
          "chooseAnotherWayToPay": "Válasszon másik fizetési módot",
          "chooseAWayToPay": "Válasszon fizetési módot",
          "otherWaysToPay": "Egyéb fizetési módok",
          "edit": "Szerkesztés",
          "doneEditing": "Kész",
          "editPaymentMethods": "Fizetési módok szerkesztése",
          "CreditCardDeleteConfirmationMessage": "Törli a(z) {{identifier}}} végű {{secondaryIdentifier}}} kártyát?",
          "PayPalAccountDeleteConfirmationMessage": "Törli a(z) {{identifier}} PayPal-számlát?",
          "VenmoAccountDeleteConfirmationMessage": "Biztosan törli a(z) {{identifier}} felhasználónévhez tartozó Venmo-számlát?",
          "genericDeleteConfirmationMessage": "Biztosan törli ezt a fizetési módot?",
          "deleteCancelButton": "Mégse",
          "deleteConfirmationButton": "Törlés",
          "fieldEmptyForCvv": "Kérjük, töltse ki a CVV-számot.",
          "fieldEmptyForExpirationDate": "Töltse ki a lejárati dátumot.",
          "fieldEmptyForCardholderName": "Töltse ki a kártyabirtokos nevét.",
          "fieldTooLongForCardholderName": "A kártyatulajdonos neve nem lehet hosszabb mint 256 karakter.",
          "fieldEmptyForNumber": "Töltse ki a számot.",
          "fieldEmptyForPostalCode": "Töltse ki az irányítószámot.",
          "fieldInvalidForCardholderName": "Ez a kártyabirtokos neve nem érvényes.",
          "fieldInvalidForCvv": "Ez a biztonsági kód nem érvényes.",
          "fieldInvalidForExpirationDate": "Ez a lejárati dátum érvénytelen.",
          "fieldInvalidForNumber": "Ez a kártyaszám nem érvényes.",
          "fieldInvalidForPostalCode": "Ez az irányítószám nem érvényes.",
          "noticeOfCollection": "A kártyámmal történő fizetés révén elfogadom a PayPal Adatvédelmi nyilatkozatát.",
          "genericError": "Hiba történt a mi oldalunkon.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Ez a hitelkártya már szerepel mentett fizetési módként.",
          "hostedFieldsFailedTokenizationError": "Ellenőrizze az adatait, majd próbálja újra.",
          "hostedFieldsFieldsInvalidError": "Ellenőrizze az adatait, majd próbálja újra.",
          "hostedFieldsTokenizationNetworkErrorError": "Hálózati hiba. Próbálja újra.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "A hitelkártya hitelesítése sikertelen. Ellenőrizze az adatait, majd próbálja újra.",
          "paypalButtonMustBeUsed": "A fizetés folytatásához használja a PayPal-gombot.",
          "venmoButtonMustBeUsed": "Használja a Venmo-gombot a fizetés folytatásához.",
          "applePayButtonMustBeUsed": "A fizetés folytatásához használja az Apple Pay-gombot.",
          "paypalAccountTokenizationFailedError": "Hiba történt a PayPal-számla hozzáadása közben. Próbálja újra.",
          "paypalFlowFailedError": "Hiba történt a PayPalhoz való kapcsolódás közben. Próbálja újra.",
          "paypalTokenizationRequestActiveError": "A PayPal-fizetés engedélyezése már folyamatban van.",
          "venmoCanceledError": "Hiba történt. Ellenőrizze, hogy eszközére a Venmo-alkalmazás legfrissebb verziója van-e telepítve, és hogy a böngészője támogatja-e a Venmo-ra történő átváltást.",
          "vaultManagerPaymentMethodDeletionError": "Nem sikerült törölni a fizetési módot, próbálja újra.",
          "venmoAppFailedError": "A Venmo alkalmazást nem találja a rendszer az eszközön.",
          "unsupportedCardTypeError": "Ez a kártyatípus nem támogatott. Próbáljon meg egy másik kártyát.",
          "applePayTokenizationError": "Hálózati hiba történt az Apple Pay-kifizetés közben. Próbálja újra.",
          "applePayActiveCardError": "Adjon egy támogatott kártyát az Apple Pay pénztárcához.",
          "cardholderNameLabel": "Kártyabirtokos neve",
          "cardNumberLabel": "Kártyaszám",
          "cvvLabel": "CVV",
          "cvvThreeDigitLabelSubheading": "(3 számjegy)",
          "cvvFourDigitLabelSubheading": "(4 számjegy)",
          "cardholderNamePlaceholder": "Kártyabirtokos neve",
          "expirationDateLabel": "Lejárati dátum",
          "expirationDateLabelSubheading": "(HH/ÉÉ)",
          "expirationDatePlaceholder": "HH/ÉÉ",
          "postalCodeLabel": "Irányítószám",
          "saveCardLabel": "Kártya mentése",
          "payWithCard": "Fizetés bankkártyával vagy hitelkártyával",
          "endingIn": "{{lastFourCardDigits}}} végű",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Kártya",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 241: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Membayar dengan {{paymentSource}}",
          "chooseAnotherWayToPay": "Pilih metode pembayaran lain",
          "chooseAWayToPay": "Pilih cara pembayaran",
          "otherWaysToPay": "Cara lain untuk membayar",
          "edit": "Edit",
          "doneEditing": "Selesai",
          "editPaymentMethods": "Edit metode pembayaran",
          "CreditCardDeleteConfirmationMessage": "Hapus kartu {{secondaryIdentifier}} yang berakhiran dengan {{identifier}}?",
          "PayPalAccountDeleteConfirmationMessage": "Hapus rekening PayPal {{identifier}}?",
          "VenmoAccountDeleteConfirmationMessage": "Yakin ingin menghapus rekening Venmo dengan nama pengguna {{identifier}}?",
          "genericDeleteConfirmationMessage": "Yakin ingin menghapus metode pembayaran ini?",
          "deleteCancelButton": "Batalkan",
          "deleteConfirmationButton": "Hapus",
          "fieldEmptyForCvv": "Mohon mengisi CVV.",
          "fieldEmptyForExpirationDate": "Silakan mengisi tanggal kedaluwarsa.",
          "fieldEmptyForCardholderName": "Silakan mengisi nama pemilik kartu.",
          "fieldTooLongForCardholderName": "Nama pemilik kartu harus kurang dari 256 karakter.",
          "fieldEmptyForNumber": "Mohon mengisi angkanya.",
          "fieldEmptyForPostalCode": "Mohon mengisi kode pos.",
          "fieldInvalidForCardholderName": "Nama pemilik kartu ini tidak valid.",
          "fieldInvalidForCvv": "Kode keamanan ini tidak valid.",
          "fieldInvalidForExpirationDate": "Tanggal kedaluwarsa ini tidak valid.",
          "fieldInvalidForNumber": "Nomor kartu ini tidak valid.",
          "fieldInvalidForPostalCode": "Kode pos ini tidak valid.",
          "noticeOfCollection": "Dengan membayar menggunakan kartu, saya menyetujui Pernyataan Privasi PayPal.",
          "genericError": "Ada yang salah pada sistem kami.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Kartu kredit ini telah ada sebelumnya sebagai metode pembayaran tersimpan.",
          "hostedFieldsFailedTokenizationError": "Mohon periksa informasi Anda dan coba lagi.",
          "hostedFieldsFieldsInvalidError": "Mohon periksa informasi Anda dan coba lagi.",
          "hostedFieldsTokenizationNetworkErrorError": "Kesalahan jaringan. Mohon coba lagi.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Verifikasi kartu kredit gagal. Mohon periksa informasi Anda dan coba lagi.",
          "paypalButtonMustBeUsed": "Gunakan tombol PayPal untuk melanjutkan pembayaran.",
          "venmoButtonMustBeUsed": "Gunakan tombol Venmo untuk melanjutkan pembayaran Anda.",
          "applePayButtonMustBeUsed": "Gunakan tombol Apple Pay untuk melanjutkan pembayaran.",
          "paypalAccountTokenizationFailedError": "Terjadi kesalahan saat menambahkan rekening PayPal. Mohon coba lagi.",
          "paypalFlowFailedError": "Terjadi kesalahan ketika menghubungkan ke PayPal. Mohon coba lagi.",
          "paypalTokenizationRequestActiveError": "Otorisasi pembayaran PayPal sedang diproses.",
          "venmoCanceledError": "Terjadi kesalahan. Pastikan Anda memiliki aplikasi Venmo versi terbaru di perangkat dan peramban Anda mendukung peralihan ke Venmo.",
          "vaultManagerPaymentMethodDeletionError": "Tidak dapat menghapus metode pembayaran, coba lagi.",
          "venmoAppFailedError": "Aplikasi Venmo tidak dapat ditemukan di perangkat Anda.",
          "unsupportedCardTypeError": "Jenis kartu ini tidak didukung. Mohon coba kartu lainnya.",
          "applePayTokenizationError": "Terjadi kesalahan pada jaringan saat memproses pembayaran Apple Pay. Mohon coba lagi.",
          "applePayActiveCardError": "Tambahkan kartu yang didukung oleh wallet Apple Pay Anda.",
          "cardholderNameLabel": "Nama Pemilik Kartu",
          "cardNumberLabel": "Nomor Kartu",
          "cvvLabel": "CVV",
          "cvvThreeDigitLabelSubheading": "(3 angka)",
          "cvvFourDigitLabelSubheading": "(4 angka)",
          "cardholderNamePlaceholder": "Nama Pemilik Kartu",
          "expirationDateLabel": "Tanggal Kedaluwarsa",
          "expirationDateLabelSubheading": "(BB/TT)",
          "expirationDatePlaceholder": "BB/TT",
          "postalCodeLabel": "Kode Pos",
          "saveCardLabel": "Simpan kartu",
          "payWithCard": "Bayar dengan kartu",
          "endingIn": "Berakhiran dengan {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Kartu",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Jelajahi",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 242: [function(require2, module3, exports3) {
        "use strict";
        var assign = require2("../lib/assign").assign;
        var fiveCharacterLocales = {
          ar_EG: require2("./ar_EG"),
          cs_CZ: require2("./cs_CZ"),
          da_DK: require2("./da_DK"),
          de_DE: require2("./de_DE"),
          el_GR: require2("./el_GR"),
          en_AU: require2("./en_AU"),
          en_GB: require2("./en_GB"),
          en_IN: require2("./en_IN"),
          en_US: require2("./en_US"),
          es_ES: require2("./es_ES"),
          es_XC: require2("./es_XC"),
          fi_FI: require2("./fi_FI"),
          fr_CA: require2("./fr_CA"),
          fr_FR: require2("./fr_FR"),
          fr_XC: require2("./fr_XC"),
          he_IL: require2("./he_IL"),
          hu_HU: require2("./hu_HU"),
          id_ID: require2("./id_ID"),
          it_IT: require2("./it_IT"),
          ja_JP: require2("./ja_JP"),
          ko_KR: require2("./ko_KR"),
          nl_NL: require2("./nl_NL"),
          no_NO: require2("./no_NO"),
          pl_PL: require2("./pl_PL"),
          pt_BR: require2("./pt_BR"),
          pt_PT: require2("./pt_PT"),
          ru_RU: require2("./ru_RU"),
          sk_SK: require2("./sk_SK"),
          sv_SE: require2("./sv_SE"),
          th_TH: require2("./th_TH"),
          zh_CN: require2("./zh_CN"),
          zh_HK: require2("./zh_HK"),
          zh_TW: require2("./zh_TW"),
          zh_XC: require2("./zh_XC")
        };
        var twoCharacterLocaleAliases = {
          ar: fiveCharacterLocales.ar_EG,
          cs: fiveCharacterLocales.cs_CZ,
          da: fiveCharacterLocales.da_DK,
          de: fiveCharacterLocales.de_DE,
          el: fiveCharacterLocales.el_GR,
          en: fiveCharacterLocales.en_US,
          es: fiveCharacterLocales.es_ES,
          fi: fiveCharacterLocales.fi_FI,
          fr: fiveCharacterLocales.fr_FR,
          id: fiveCharacterLocales.id_ID,
          it: fiveCharacterLocales.it_IT,
          hu: fiveCharacterLocales.hu_HU,
          ja: fiveCharacterLocales.ja_JP,
          ko: fiveCharacterLocales.ko_KR,
          nl: fiveCharacterLocales.nl_NL,
          no: fiveCharacterLocales.no_NO,
          pl: fiveCharacterLocales.pl_PL,
          pt: fiveCharacterLocales.pt_PT,
          ru: fiveCharacterLocales.ru_RU,
          sk: fiveCharacterLocales.sk_SK,
          sv: fiveCharacterLocales.sv_SE,
          th: fiveCharacterLocales.th_TH,
          zh: fiveCharacterLocales.zh_CN
        };
        module3.exports = {
          twoCharacterLocaleAliases,
          fiveCharacterLocales,
          translations: assign({}, twoCharacterLocaleAliases, fiveCharacterLocales)
        };
      }, { "../lib/assign": 208, "./ar_EG": 224, "./cs_CZ": 225, "./da_DK": 226, "./de_DE": 227, "./el_GR": 228, "./en_AU": 229, "./en_GB": 230, "./en_IN": 231, "./en_US": 232, "./es_ES": 233, "./es_XC": 234, "./fi_FI": 235, "./fr_CA": 236, "./fr_FR": 237, "./fr_XC": 238, "./he_IL": 239, "./hu_HU": 240, "./id_ID": 241, "./it_IT": 243, "./ja_JP": 244, "./ko_KR": 245, "./nl_NL": 246, "./no_NO": 247, "./pl_PL": 248, "./pt_BR": 249, "./pt_PT": 250, "./ru_RU": 251, "./sk_SK": 252, "./sv_SE": 253, "./th_TH": 254, "./zh_CN": 255, "./zh_HK": 256, "./zh_TW": 257, "./zh_XC": 258 }], 243: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Metodo di pagamento: {{paymentSource}}",
          "chooseAnotherWayToPay": "Scegli un altro metodo di pagamento",
          "chooseAWayToPay": "Scegli un metodo di pagamento",
          "otherWaysToPay": "Altri metodi di pagamento",
          "edit": "Modifica",
          "doneEditing": "Fine",
          "editPaymentMethods": "Modifica metodi di pagamento",
          "CreditCardDeleteConfirmationMessage": "Eliminare la carta {{secondaryIdentifier}} le cui ultime cifre sono {{identifier}}?",
          "PayPalAccountDeleteConfirmationMessage": "Eliminare il conto PayPal {{identifier}}?",
          "VenmoAccountDeleteConfirmationMessage": "Vuoi davvero eliminare il conto Venmo con il nome utente {{identifier}}?",
          "genericDeleteConfirmationMessage": "Vuoi davvero eliminare questo metodo di pagamento?",
          "deleteCancelButton": "Annulla",
          "deleteConfirmationButton": "Rimuovi",
          "fieldEmptyForCvv": "Compila un CVV.",
          "fieldEmptyForExpirationDate": "Compila una data di scadenza.",
          "fieldEmptyForCardholderName": "Compila un nome del titolare.",
          "fieldTooLongForCardholderName": "Il nome del titolare della carta non può contenere più di 256 caratteri.",
          "fieldEmptyForNumber": "Compila un numero.",
          "fieldEmptyForPostalCode": "Compila un CAP.",
          "fieldInvalidForCardholderName": "Il nome del titolare non è valido.",
          "fieldInvalidForCvv": "Il codice di sicurezza non è valido.",
          "fieldInvalidForExpirationDate": "La data di scadenza non è valida.",
          "fieldInvalidForNumber": "Il numero di carta non è valido.",
          "fieldInvalidForPostalCode": "Il CAP non è valido.",
          "noticeOfCollection": "Pagando con la carta, accetto la Dichiarazione sulla privacy di PayPal.",
          "genericError": "Si è verificato un errore nei nostri sistemi.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Questa carta di credito esiste già come metodo di pagamento salvato.",
          "hostedFieldsFailedTokenizationError": "Controlla i tuoi dati e riprova.",
          "hostedFieldsFieldsInvalidError": "Controlla i tuoi dati e riprova.",
          "hostedFieldsTokenizationNetworkErrorError": "Errore di rete. Riprova.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Verifica della carta di credito non riuscita. Controlla i tuoi dati e riprova.",
          "paypalButtonMustBeUsed": "Usa il pulsante PayPal per continuare con il pagamento.",
          "venmoButtonMustBeUsed": "Usa il pulsante Venmo per continuare il pagamento.",
          "applePayButtonMustBeUsed": "Usa il pulsante Apple Pay per continuare con il pagamento.",
          "paypalAccountTokenizationFailedError": "Si è verificato un errore durante l'aggiunta del conto PayPal. Riprova.",
          "paypalFlowFailedError": "Si è verificato un errore durante la connessione a PayPal. Riprova.",
          "paypalTokenizationRequestActiveError": "Autorizzazione di pagamento PayPal già in corso.",
          "venmoCanceledError": "Si è verificato un errore. Assicurati di avere installato la versione più recente dell'app Venmo sul tuo dispositivo e che il tuo browser supporti il passaggio a Venmo.",
          "vaultManagerPaymentMethodDeletionError": "Impossibile eliminare il metodo di pagamento, riprova.",
          "venmoAppFailedError": "Impossibile trovare l'app Venmo sul tuo dispositivo.",
          "unsupportedCardTypeError": "Questo tipo di carta non è supportato. Prova con un'altra carta.",
          "applePayTokenizationError": "Si è verificato un errore di rete durante l'elaborazione del pagamento Apple Pay. Riprova.",
          "applePayActiveCardError": "Aggiungi una carta supportata al tuo wallet Apple Pay.",
          "cardholderNameLabel": "Nome del titolare",
          "cardNumberLabel": "Numero di carta",
          "cvvLabel": "CVV",
          "cvvThreeDigitLabelSubheading": "(3 cifre)",
          "cvvFourDigitLabelSubheading": "(4 cifre)",
          "cardholderNamePlaceholder": "Nome del titolare",
          "expirationDateLabel": "Data di scadenza",
          "expirationDateLabelSubheading": "(MM/AA)",
          "expirationDatePlaceholder": "MM/AA",
          "postalCodeLabel": "CAP",
          "saveCardLabel": "Salva carta",
          "payWithCard": "Paga con una carta",
          "endingIn": "Le ultime cifre sono {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Carta",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 244: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "{{paymentSource}}でのお支払い",
          "chooseAnotherWayToPay": "別の支払方法を選択してください",
          "chooseAWayToPay": "支払方法を選択してください",
          "otherWaysToPay": "その他の支払方法",
          "edit": "編集",
          "doneEditing": "完了",
          "editPaymentMethods": "支払方法の編集",
          "CreditCardDeleteConfirmationMessage": "{{secondaryIdentifier}}カード(末尾番号: {{identifier}})を削除しますか?",
          "PayPalAccountDeleteConfirmationMessage": "PayPalアカウント{{identifier}}を削除しますか?",
          "VenmoAccountDeleteConfirmationMessage": "ユーザー名{{identifier}}のVenmoアカウントを削除してよろしいですか?",
          "genericDeleteConfirmationMessage": "この支払方法を削除しますか?",
          "deleteCancelButton": "キャンセル",
          "deleteConfirmationButton": "削除",
          "fieldEmptyForCvv": "CVVを入力してください。",
          "fieldEmptyForExpirationDate": "有効期限を入力してください。",
          "fieldEmptyForCardholderName": "カード保有者の名前を入力してください。",
          "fieldTooLongForCardholderName": "カード保有者の名前は256文字未満にしてください。",
          "fieldEmptyForNumber": "番号を入力してください。",
          "fieldEmptyForPostalCode": "郵便番号を入力してください。",
          "fieldInvalidForCardholderName": "このカード保有者の名前は無効です。",
          "fieldInvalidForCvv": "このセキュリティコードは無効です。",
          "fieldInvalidForExpirationDate": "この有効期限は無効です。",
          "fieldInvalidForNumber": "このカード番号は無効です。",
          "fieldInvalidForPostalCode": "この郵便番号は無効です。",
          "noticeOfCollection": "カードで支払うことにより、PayPalプライバシーステートメントに同意したものとみなされます。",
          "genericError": "弊社側で問題が発生しました。",
          "hostedFieldsTokenizationFailOnDuplicateError": "このクレジットカードは、保存済みの支払方法としてすでに存在します。",
          "hostedFieldsFailedTokenizationError": "情報を確認してもう一度お試しください。",
          "hostedFieldsFieldsInvalidError": "情報を確認してもう一度お試しください。",
          "hostedFieldsTokenizationNetworkErrorError": "ネットワークエラーです。再度お試しください。",
          "hostedFieldsTokenizationCvvVerificationFailedError": "クレジットカードの認証に失敗しました。情報を確認してもう一度お試しください。",
          "paypalButtonMustBeUsed": "支払いを続行するには、PayPalボタンを使用します。",
          "venmoButtonMustBeUsed": "お支払いを続行するには、Venmoボタンを使用してください。",
          "applePayButtonMustBeUsed": "Apple Payボタンを使用してお支払いを続行してください。",
          "paypalAccountTokenizationFailedError": "PayPalアカウントの追加中に問題が発生しました。再度お試しください。",
          "paypalFlowFailedError": "PayPalへの接続に問題が発生しました。再度お試しください。",
          "paypalTokenizationRequestActiveError": "PayPalの支払い承認はすでに処理中です。",
          "venmoCanceledError": "問題が発生しました。お使いの端末にVenmoアプリの最新バージョンがインストールされており、お使いのブラウザがVenmoへの切り替えをサポートしていることをご確認ください。",
          "vaultManagerPaymentMethodDeletionError": "支払方法を削除できない場合は、もう一度お試しください。",
          "venmoAppFailedError": "お客さまの端末でVenmoアプリを見つけることができませんでした。",
          "unsupportedCardTypeError": "このカードのタイプはサポートされていません。別のカードをご使用ください。",
          "applePayTokenizationError": "Apple Payの支払いの処理中にネットワークエラーが発生しました。再度お試しください。",
          "applePayActiveCardError": "Apple Payウォレットに対応しているカードを追加してください。",
          "cardholderNameLabel": "カード保有者の名前",
          "cardNumberLabel": "カード番号",
          "cvvLabel": "CVV",
          "cvvThreeDigitLabelSubheading": "(3桁)",
          "cvvFourDigitLabelSubheading": "(4桁)",
          "cardholderNamePlaceholder": "カード保有者の名前",
          "expirationDateLabel": "有効期限",
          "expirationDateLabelSubheading": "(MM/YY)",
          "expirationDatePlaceholder": "MM/YY",
          "postalCodeLabel": "郵便番号",
          "saveCardLabel": "カードを保存",
          "payWithCard": "カードで支払う",
          "endingIn": "末尾番号: {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "カード",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "銀聯(UnionPay)"
        };
      }, {}], 245: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "결제수단: {{paymentSource}}",
          "chooseAnotherWayToPay": "다른 결제수단을 선택해 주세요.",
          "chooseAWayToPay": "결제수단 선택",
          "otherWaysToPay": "다른 결제수단",
          "edit": "편집",
          "doneEditing": "완료",
          "editPaymentMethods": "결제수단 편집",
          "CreditCardDeleteConfirmationMessage": "{{identifier}}(으)로 끝나는 {{secondaryIdentifier}} 카드를 삭제하시겠습니까?",
          "PayPalAccountDeleteConfirmationMessage": "PayPal 계정 {{identifier}}을(를) 삭제하시겠습니까?",
          "VenmoAccountDeleteConfirmationMessage": "사용자 이름 {{identifier}}의 Venmo 계정을 정말 삭제하시겠습니까?",
          "genericDeleteConfirmationMessage": "이 결제수단을 삭제하시겠습니까?",
          "deleteCancelButton": "취소",
          "deleteConfirmationButton": "삭제",
          "fieldEmptyForCvv": "CVV를 입력하세요.",
          "fieldEmptyForExpirationDate": "만료일을 입력하세요.",
          "fieldEmptyForCardholderName": "카드 소유자 이름을 입력하세요.",
          "fieldTooLongForCardholderName": "카드 소유자 이름은 256자 미만이어야 합니다.",
          "fieldEmptyForNumber": "번호를 입력하세요.",
          "fieldEmptyForPostalCode": "우편번호를 입력하세요.",
          "fieldInvalidForCardholderName": "이 카드 소유자 이름은 유효하지 않습니다.",
          "fieldInvalidForCvv": "이 보안 코드는 유효하지 않습니다.",
          "fieldInvalidForExpirationDate": "이 만료일은 유효하지 않습니다.",
          "fieldInvalidForNumber": "이 카드 번호는 유효하지 않습니다.",
          "fieldInvalidForPostalCode": "이 우편번호는 유효하지 않습니다.",
          "noticeOfCollection": "자신의 카드로 결제함으로써 사용자는 PayPal 개인정보 취급방침에 동의합니다.",
          "genericError": "저희 쪽에 문제가 발생했습니다.",
          "hostedFieldsTokenizationFailOnDuplicateError": "이 신용카드는 이미 저장된 결제수단으로 설정되어 있습니다.",
          "hostedFieldsFailedTokenizationError": "정보를 확인하고 다시 시도해 주세요.",
          "hostedFieldsFieldsInvalidError": "정보를 확인하고 다시 시도해 주세요.",
          "hostedFieldsTokenizationNetworkErrorError": "네트워크 오류입니다. 다시 시도해 주세요.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "신용카드 인증에 실패했습니다. 정보를 확인하고 다시 시도해 주세요.",
          "paypalButtonMustBeUsed": "PayPal 버튼을 사용하여 결제를 계속 진행하세요.",
          "venmoButtonMustBeUsed": "결제를 계속하려면 Venmo 버튼을 사용하세요.",
          "applePayButtonMustBeUsed": "Apple Pay 버튼을 사용하여 결제를 계속 진행하세요.",
          "paypalAccountTokenizationFailedError": "PayPal 계정을 추가하는 중에 문제가 발생했습니다. 다시 시도해 주세요.",
          "paypalFlowFailedError": "PayPal에 연결하는 데 문제가 발생했습니다. 다시 시도해 주세요.",
          "paypalTokenizationRequestActiveError": "PayPal 결제 승인이 이미 진행 중입니다.",
          "venmoCanceledError": "오류가 발생했습니다. 기기에 최신 버전의 Venmo 앱이 설치되어 있고 브라우저가 Venmo로의 전환을 지원하는지 확인하세요.",
          "vaultManagerPaymentMethodDeletionError": "결제수단을 삭제할 수 없습니다. 다시 시도해 주세요.",
          "venmoAppFailedError": "기기에서 Venmo 앱을 찾을 수 없습니다.",
          "unsupportedCardTypeError": "이 카드 유형은 지원되지 않습니다. 다른 카드로 시도해 주세요.",
          "applePayTokenizationError": "Apple Pay 결제를 처리하는 동안 네트워크 오류가 발생했습니다. 다시 시도해 주세요.",
          "applePayActiveCardError": "Apple Pay 전자지갑에 지원되는 카드를 추가하세요.",
          "cardholderNameLabel": "카드 소유자 이름",
          "cardNumberLabel": "카드 번호",
          "cvvLabel": "CVV",
          "cvvThreeDigitLabelSubheading": "(3자리)",
          "cvvFourDigitLabelSubheading": "(4자리)",
          "cardholderNamePlaceholder": "카드 소유자 이름",
          "expirationDateLabel": "만료일",
          "expirationDateLabelSubheading": "(MM/YY)",
          "expirationDatePlaceholder": "MM/YY",
          "postalCodeLabel": "우편번호",
          "saveCardLabel": "카드 저장",
          "payWithCard": "카드로 결제",
          "endingIn": "다음으로 끝남: {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "카드",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 246: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Betalen met {{paymentSource}}",
          "chooseAnotherWayToPay": "Kies een andere betaalmethode",
          "chooseAWayToPay": "Kies een betaalmethode",
          "otherWaysToPay": "Andere betaalmethoden",
          "edit": "Bewerken",
          "doneEditing": "Klaar",
          "editPaymentMethods": "Betaalmethoden bewerken",
          "CreditCardDeleteConfirmationMessage": "{{secondaryIdentifier}}-kaart eindigend op {{identifier}} verwijderen?",
          "PayPalAccountDeleteConfirmationMessage": "PayPal-rekening {{identifier}} verwijderen?",
          "VenmoAccountDeleteConfirmationMessage": "Weet je zeker dat je de Venmo-rekening met gebruikersnaam {{identifier}} wilt verwijderen?",
          "genericDeleteConfirmationMessage": "Weet je zeker dat je deze betaalmethode wilt verwijderen?",
          "deleteCancelButton": "Annuleren",
          "deleteConfirmationButton": "Verwijderen",
          "fieldEmptyForCvv": "Vul een CVV in.",
          "fieldEmptyForExpirationDate": "Vul een vervaldatum in.",
          "fieldEmptyForCardholderName": "Vul de naam van de kaarthouder in.",
          "fieldTooLongForCardholderName": "Naam kaarthouder moet minder dan 256 tekens bevatten.",
          "fieldEmptyForNumber": "Vul een nummer in.",
          "fieldEmptyForPostalCode": "Vul een postcode in.",
          "fieldInvalidForCardholderName": "Naam kaarthouder is ongeldig.",
          "fieldInvalidForCvv": "Deze beveiligingscode is ongeldig.",
          "fieldInvalidForExpirationDate": "Deze vervaldatum is ongeldig.",
          "fieldInvalidForNumber": "Dit kaartnummer is ongeldig.",
          "fieldInvalidForPostalCode": "Deze postcode is ongeldig.",
          "noticeOfCollection": "Door met mijn kaart te betalen, ga ik akkoord met de PayPal Privacyverklaring.",
          "genericError": "Er is aan onze kant iets fout gegaan.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Deze creditcard bestaat al als opgeslagen betaalmethode.",
          "hostedFieldsFailedTokenizationError": "Controleer je gegevens en probeer het opnieuw.",
          "hostedFieldsFieldsInvalidError": "Controleer je gegevens en probeer het opnieuw.",
          "hostedFieldsTokenizationNetworkErrorError": "Netwerkfout. Probeer het opnieuw.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Verificatie van creditcard is mislukt. Controleer je gegevens en probeer het opnieuw.",
          "paypalButtonMustBeUsed": "Gebruik de PayPal-knop om door te gaan met je betaling.",
          "venmoButtonMustBeUsed": "Gebruik de Venmo-knop om door te gaan met je betaling.",
          "applePayButtonMustBeUsed": "Gebruik de knop Apple Pay om door te gaan met je betaling.",
          "paypalAccountTokenizationFailedError": "Er is iets fout gegaan bij het toevoegen van de PayPal-rekening. Probeer het opnieuw.",
          "paypalFlowFailedError": "Er is iets fout gegaan bij het verbinden met PayPal. Probeer het opnieuw.",
          "paypalTokenizationRequestActiveError": "PayPal-betaalautorisatie is al in voortgang.",
          "venmoCanceledError": "Er is iets fout gegaan. Zorg ervoor dat je de recentste versie van de Venmo-app op je apparaat geïnstalleerd hebt en dat je browser ondersteuning biedt voor overschakelen naar Venmo.",
          "vaultManagerPaymentMethodDeletionError": "Kan betaalmethode niet verwijderen. Probeer het opnieuw.",
          "venmoAppFailedError": "De Venmo-app is niet gevonden op je apparaat.",
          "unsupportedCardTypeError": "Dit kaarttype wordt niet ondersteund. Gebruik een andere kaart.",
          "applePayTokenizationError": "Er is een netwerkfout opgetreden bij het verwerken van de Apple Pay-betaling. Probeer het opnieuw.",
          "applePayActiveCardError": "Voeg een ondersteunde kaart toe aan je Apple Pay-wallet.",
          "cardholderNameLabel": "Naam kaarthouder",
          "cardNumberLabel": "Kaartnummer",
          "cvvLabel": "CVV",
          "cvvThreeDigitLabelSubheading": "(3 cijfers)",
          "cvvFourDigitLabelSubheading": "(4 cijfers)",
          "cardholderNamePlaceholder": "Naam kaarthouder",
          "expirationDateLabel": "Vervaldatum",
          "expirationDateLabelSubheading": "(mm/jj)",
          "expirationDatePlaceholder": "mm/jj",
          "postalCodeLabel": "Postcode",
          "saveCardLabel": "Kaart opslaan",
          "payWithCard": "Betalen met kaart",
          "endingIn": "Eindigend op {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Kaart",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 247: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Betaler med {{paymentSource}}",
          "chooseAnotherWayToPay": "Velg en annen betalingsmåte",
          "chooseAWayToPay": "Velg betalingsmåte",
          "otherWaysToPay": "Andre betalingsmåter",
          "edit": "Endre",
          "doneEditing": "Ferdig",
          "editPaymentMethods": "Rediger betalingsmetode",
          "CreditCardDeleteConfirmationMessage": "Vil du slette {{secondaryIdentifier}}-kortet som slutter på {{identifier}}?",
          "PayPalAccountDeleteConfirmationMessage": "Vil du slette PayPal-konto {{identifier}}?",
          "VenmoAccountDeleteConfirmationMessage": "Er du sikker på at du vil slette Venmo-kontoen med brukernavnet {{identifier}}?",
          "genericDeleteConfirmationMessage": "Er du sikker på at du vil slette denne betalingsmetoden?",
          "deleteCancelButton": "Avbryt",
          "deleteConfirmationButton": "Slett",
          "fieldEmptyForCvv": "Fyll ut sikkerhetskode (CVV).",
          "fieldEmptyForExpirationDate": "Fyll ut utløpsdato.",
          "fieldEmptyForCardholderName": "Fyll ut kortinnehavers navn.",
          "fieldTooLongForCardholderName": "Kortinnehaverens må ha mindre enn 256 tegn.",
          "fieldEmptyForNumber": "Fyll ut nummer.",
          "fieldEmptyForPostalCode": "Fyll ut postnummer.",
          "fieldInvalidForCardholderName": "Denne kortinnehaverens navn er ikke gyldig.",
          "fieldInvalidForCvv": "Denne sikkerhetskoden er ikke gyldig.",
          "fieldInvalidForExpirationDate": "Denne utløpsdatoen er ikke gyldig.",
          "fieldInvalidForNumber": "Dette kortnummeret er ikke gyldig.",
          "fieldInvalidForPostalCode": "Dette postnummeret er ikke gyldig.",
          "noticeOfCollection": "Ved å betale med kortet godtar jeg PayPals personvernerklæring.",
          "genericError": "Noe gikk galt hos oss.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Dette betalingskortet finnes allerede som en lagret betalingsmetode.",
          "hostedFieldsFailedTokenizationError": "Kontroller informasjonen, og prøv på nytt.",
          "hostedFieldsFieldsInvalidError": "Kontroller informasjonen, og prøv på nytt.",
          "hostedFieldsTokenizationNetworkErrorError": "Nettverksfeil. Prøv på nytt.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Kontroll av betalingskort mislyktes. Kontroller informasjonen, og prøv på nytt.",
          "paypalButtonMustBeUsed": "Bruk PayPal-knappen for å fortsette med betalingen.",
          "venmoButtonMustBeUsed": "Bruk Venmo-knappen for å fortsette med betalingen.",
          "applePayButtonMustBeUsed": "Bruk Apple Pay-knappen for å fortsette med betalingen.",
          "paypalAccountTokenizationFailedError": "Kan ikke legge til PayPal-kontoen. Prøv på nytt.",
          "paypalFlowFailedError": "Kan ikke koble til PayPal. Prøv på nytt.",
          "paypalTokenizationRequestActiveError": "PayPals prosess for betalingsgodkjenning har allerede startet.",
          "venmoCanceledError": "Noe gikk galt. Kontroller at den nyeste versjonen av Venmo-appen er installert på enheten din, og at nettleseren din støtter bruk av Venmo.",
          "vaultManagerPaymentMethodDeletionError": "Kan ikke slette betalingsmetoden. Prøv på nytt.",
          "venmoAppFailedError": "Finner ikke Venmo-appen på enheten.",
          "unsupportedCardTypeError": "Denne korttypen støttes ikke. Prøv et annet kort.",
          "applePayTokenizationError": "Nettverksfeil under behandling av Apple Pay-betalingen. Prøv på nytt.",
          "applePayActiveCardError": "Legg til et støttet kort i e-lommeboken for Apple Pay.",
          "cardholderNameLabel": "Kortinnehavers navn",
          "cardNumberLabel": "Kortnummer",
          "cvvLabel": "CVV",
          "cvvThreeDigitLabelSubheading": "(3 sifre)",
          "cvvFourDigitLabelSubheading": "(4 sifre)",
          "cardholderNamePlaceholder": "Kortinnehavers navn",
          "expirationDateLabel": "Utløpsdato",
          "expirationDateLabelSubheading": "(MM/ÅÅ)",
          "expirationDatePlaceholder": "MM/ÅÅ",
          "postalCodeLabel": "Postnummer",
          "saveCardLabel": "Lagre kort",
          "payWithCard": "Betal med kort",
          "endingIn": "Slutter på {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Kort",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 248: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Źródło finansowania płatności: {{paymentSource}}",
          "chooseAnotherWayToPay": "Wybierz inny sposób płatności.",
          "chooseAWayToPay": "Wybierz sposób płatności",
          "otherWaysToPay": "Inne sposoby płatności",
          "edit": "Edytuj",
          "doneEditing": "Gotowe",
          "editPaymentMethods": "Edytuj formy płatności",
          "CreditCardDeleteConfirmationMessage": "Usunąć kartę {{secondaryIdentifier}} o numerze zakończonym cyframi {{identifier}}?",
          "PayPalAccountDeleteConfirmationMessage": "Usunąć {{identifier}}konta PayPal?",
          "VenmoAccountDeleteConfirmationMessage": "Czy na pewno chcesz usunąć konto Venmo o nazwie użytkownika {{identifier}}?",
          "genericDeleteConfirmationMessage": "Na pewno chcesz usunąć tę formę płatności?",
          "deleteCancelButton": "Anuluj",
          "deleteConfirmationButton": "Usuń",
          "fieldEmptyForCvv": "Wpisz kod CVV.",
          "fieldEmptyForExpirationDate": "Wpisz datę ważności.",
          "fieldEmptyForCardholderName": "Podaj imię i nazwisko posiadacza karty.",
          "fieldTooLongForCardholderName": "Imię i nazwisko posiadacza karty musi mieć mniej niż 256 znaków.",
          "fieldEmptyForNumber": "Podaj numer.",
          "fieldEmptyForPostalCode": "Podaj kod pocztowy.",
          "fieldInvalidForCardholderName": "To imię i nazwisko posiadacza karty jest nieprawidłowe.",
          "fieldInvalidForCvv": "Ten kod bezpieczeństwa jest nieprawidłowy.",
          "fieldInvalidForExpirationDate": "Ta data ważności jest nieprawidłowa.",
          "fieldInvalidForNumber": "Numer karty jest nieprawidłowy.",
          "fieldInvalidForPostalCode": "Kod pocztowy jest nieprawidłowy.",
          "noticeOfCollection": "Dokonując płatności kartą, akceptuję Informacje dotyczące zasad ochrony danych firmy PayPal.",
          "genericError": "Wystąpił błąd po naszej stronie.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Ta karta kredytowa istnieje jako zapisana forma płatności.",
          "hostedFieldsFailedTokenizationError": "Sprawdź swoje informacje i spróbuj ponownie.",
          "hostedFieldsFieldsInvalidError": "Sprawdź swoje informacje i spróbuj ponownie.",
          "hostedFieldsTokenizationNetworkErrorError": "Błąd sieci. Spróbuj ponownie.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Weryfikacja karty kredytowej nie powiodła się. Sprawdź swoje informacje i spróbuj ponownie.",
          "paypalButtonMustBeUsed": "Aby kontynuować płatność, użyj przycisku PayPal.",
          "venmoButtonMustBeUsed": "Użyj przycisku Venmo, aby kontynuować płatność",
          "applePayButtonMustBeUsed": "Aby kontynuować płatność, użyj przycisku Apple Pay.",
          "paypalAccountTokenizationFailedError": "Coś poszło nie tak przy dodawaniu konta PayPal. Spróbuj ponownie.",
          "paypalFlowFailedError": "Wystąpił problem przy nawiązywaniu połączenia z PayPal. Spróbuj ponownie.",
          "paypalTokenizationRequestActiveError": "Autoryzacja płatności PayPal jest w trakcie realizacji.",
          "venmoCanceledError": "Coś poszło nie tak. Upewnij się, że na Twoim urządzeniu jest zainstalowana najnowsza wersja aplikacji Venmo, a Twoja przeglądarka obsługuje przełączanie na Venmo.",
          "vaultManagerPaymentMethodDeletionError": "Nie można usunąć formy płatności, spróbuj ponownie.",
          "venmoAppFailedError": "Aplikacja Venmo nie została odnaleziona na Twoim urządzeniu.",
          "unsupportedCardTypeError": "Ten typ karty nie jest obsługiwany. Spróbuj użyć innej karty.",
          "applePayTokenizationError": "Wystąpił błąd sieciowy podczas przetwarzania płatności Apple Pay. Spróbuj ponownie.",
          "applePayActiveCardError": "Dodaj obsługiwaną kartę do portfela Apple Pay.",
          "cardholderNameLabel": "Imię i nazwisko posiadacza karty",
          "cardNumberLabel": "Numer karty",
          "cvvLabel": "Kod CVV/CVC2",
          "cvvThreeDigitLabelSubheading": "(3 cyfry)",
          "cvvFourDigitLabelSubheading": "(4 cyfry)",
          "cardholderNamePlaceholder": "Imię i nazwisko posiadacza karty",
          "expirationDateLabel": "Data ważności",
          "expirationDateLabelSubheading": "(MM/RR)",
          "expirationDatePlaceholder": "MM/RR",
          "postalCodeLabel": "Kod pocztowy",
          "saveCardLabel": "Zapisz kartę",
          "payWithCard": "Zapłać kartą",
          "endingIn": "Numer zakończonym cyframi {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Karta",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 249: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Pagando com {{paymentSource}}",
          "chooseAnotherWayToPay": "Escolha outro meio de pagamento",
          "chooseAWayToPay": "Escolha um meio de pagamento",
          "otherWaysToPay": "Outras formas de pagar",
          "edit": "Editar",
          "doneEditing": "Concluído",
          "editPaymentMethods": "Editar meios de pagamento",
          "CreditCardDeleteConfirmationMessage": "Excluir cartão {{secondaryIdentifier}} de final {{identifier}}?",
          "PayPalAccountDeleteConfirmationMessage": "Excluir conta do PayPal {{identifier}}?",
          "VenmoAccountDeleteConfirmationMessage": "Tem certeza de que deseja excluir a conta do Venmo com nome de usuário {{identifier}}?",
          "genericDeleteConfirmationMessage": "Tem certeza que deseja excluir este meio de pagamento?",
          "deleteCancelButton": "Cancelar",
          "deleteConfirmationButton": "Excluir",
          "fieldEmptyForCvv": "Preencha um CVV.",
          "fieldEmptyForExpirationDate": "Preencha uma data de vencimento.",
          "fieldEmptyForCardholderName": "Preencha um nome para o titular do cartão.",
          "fieldTooLongForCardholderName": "O nome do titular do cartão deve ter menos de 256 caracteres.",
          "fieldEmptyForNumber": "Preencha um número.",
          "fieldEmptyForPostalCode": "Preencha um código postal.",
          "fieldInvalidForCardholderName": "O nome do titular do cartão é inválido.",
          "fieldInvalidForCvv": "Este código de segurança é inválido.",
          "fieldInvalidForExpirationDate": "Esta data de vencimento é inválida.",
          "fieldInvalidForNumber": "O número do cartão é inválido.",
          "fieldInvalidForPostalCode": "Este código postal é inválido.",
          "noticeOfCollection": "Ao pagar com o meu cartão, aceito a Declaração de Privacidade da PayPal.",
          "genericError": "Ocorreu um erro.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Este cartão de crédito já existe como um meio de pagamento salvo.",
          "hostedFieldsFailedTokenizationError": "Verifique as informações e tente novamente.",
          "hostedFieldsFieldsInvalidError": "Verifique as informações e tente novamente.",
          "hostedFieldsTokenizationNetworkErrorError": "Erro de rede. Tente novamente.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Falha na verificação do cartão de crédito. Verifique as informações e tente novamente.",
          "paypalButtonMustBeUsed": "Use o botão do PayPal para prosseguir com o pagamento.",
          "venmoButtonMustBeUsed": "Utilize o botão Venmo para continuar o seu pagamento.",
          "applePayButtonMustBeUsed": "Use o botão Apple Pay para prosseguir com o pagamento.",
          "paypalAccountTokenizationFailedError": "Ocorreu um erro ao adicionar a conta do PayPal. Tente novamente.",
          "paypalFlowFailedError": "Ocorreu um erro na conexão com o PayPal. Tente novamente.",
          "paypalTokenizationRequestActiveError": "A autorização de pagamento do PayPal já está em andamento.",
          "venmoCanceledError": "Ocorreu um erro. Certifique-se de que você tenha a versão mais recente do aplicativo Venmo instalada no seu dispositivo, e que seu navegador aceite a mudança para o Venmo.",
          "vaultManagerPaymentMethodDeletionError": "Não é possível excluir o meio de pagamento, tente novamente.",
          "venmoAppFailedError": "O aplicativo Venmo não foi encontrado no seu dispositivo.",
          "unsupportedCardTypeError": "Este tipo de cartão não é aceito. Tente outro cartão.",
          "applePayTokenizationError": "Ocorreu um erro de rede ao processar o pagamento do Apple Pay. Tente novamente.",
          "applePayActiveCardError": "Adicione um cartão compatível à sua carteira Apple Pay.",
          "cardholderNameLabel": "Nome do titular do cartão",
          "cardNumberLabel": "Número do cartão",
          "cvvLabel": "CSC",
          "cvvThreeDigitLabelSubheading": "(3 dígitos)",
          "cvvFourDigitLabelSubheading": "(4 dígitos)",
          "cardholderNamePlaceholder": "Nome do titular do cartão",
          "expirationDateLabel": "Data de vencimento",
          "expirationDateLabelSubheading": "(MM/AA)",
          "expirationDatePlaceholder": "MM/AA",
          "postalCodeLabel": "CEP",
          "saveCardLabel": "Salvar cartão",
          "payWithCard": "Pague com seu cartão de crédito",
          "endingIn": "De final {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Cartão",
          "PayPal": "PayPal",
          "PayPal Credit": "Crédito do PayPal",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Descobrir",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 250: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Pagamento com {{paymentSource}}",
          "chooseAnotherWayToPay": "Escolher outra forma de pagamento",
          "chooseAWayToPay": "Escolher forma de pagamento",
          "otherWaysToPay": "Outras formas de pagamento",
          "edit": "Editar",
          "doneEditing": "Concluído",
          "editPaymentMethods": "Editar meios de pagamento",
          "CreditCardDeleteConfirmationMessage": "Eliminar cartão {{secondaryIdentifier}} terminado em {{identifier}}?",
          "PayPalAccountDeleteConfirmationMessage": "Eliminar conta PayPal {{identifier}}?",
          "VenmoAccountDeleteConfirmationMessage": "Quer mesmo eliminar a conta Venmo com o nome de utilizador {{identifier}}?",
          "genericDeleteConfirmationMessage": "Quer mesmo eliminar este meio de pagamento?",
          "deleteCancelButton": "Cancelar",
          "deleteConfirmationButton": "Eliminar",
          "fieldEmptyForCvv": "Introduza um CVV.",
          "fieldEmptyForExpirationDate": "Introduza uma data de validade.",
          "fieldEmptyForCardholderName": "Introduza um nome do titular do cartão.",
          "fieldTooLongForCardholderName": "O Nome do titular do cartão deve ter menos de 256 carateres.",
          "fieldEmptyForNumber": "Introduza um número.",
          "fieldEmptyForPostalCode": "Introduza um código postal.",
          "fieldInvalidForCardholderName": "Este nome do titular do cartão não é válido.",
          "fieldInvalidForCvv": "Este código de segurança não é válido.",
          "fieldInvalidForExpirationDate": "Esta data de validade não é válida.",
          "fieldInvalidForNumber": "Este número de cartão não é válido.",
          "fieldInvalidForPostalCode": "Este código postal não é válido.",
          "noticeOfCollection": "Ao pagar com o meu cartão, aceito a Declaração de Privacidade da PayPal.",
          "genericError": "Tudo indica que houve um problema.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Este cartão de crédito já existe como meio de pagamento guardado.",
          "hostedFieldsFailedTokenizationError": "Verifique as suas informações e tente novamente.",
          "hostedFieldsFieldsInvalidError": "Verifique as suas informações e tente novamente.",
          "hostedFieldsTokenizationNetworkErrorError": "Erro de rede. Tente novamente.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "A verificação do cartão de crédito falhou. Verifique as suas informações e tente novamente.",
          "paypalButtonMustBeUsed": "Use o botão PayPal para continuar o seu pagamento.",
          "venmoButtonMustBeUsed": "Utilize o botão Venmo para continuar o seu pagamento.",
          "applePayButtonMustBeUsed": "Utilize o botão Apple Pay para continuar o seu pagamento.",
          "paypalAccountTokenizationFailedError": "Ocorreu um erro ao adicionar a conta PayPal. Tente novamente.",
          "paypalFlowFailedError": "Ocorreu um erro ao ligar ao PayPal. Tente novamente.",
          "paypalTokenizationRequestActiveError": "A autorização de pagamento com PayPal já está em curso.",
          "venmoCanceledError": "Ocorreu um erro. Certifique-se de que tem a versão mais recente da aplicação Venmo instalada no seu dispositivo e que o seu navegador suporta a mudança para Venmo.",
          "vaultManagerPaymentMethodDeletionError": "Não é possível eliminar o meio de pagamento; tente novamente.",
          "venmoAppFailedError": "A aplicação Venmo não foi encontrada no seu dispositivo.",
          "unsupportedCardTypeError": "Este tipo de cartão não é suportado. Tente com outro cartão.",
          "applePayTokenizationError": "Ocorreu um erro de rede ao processar o pagamento com Apple Pay. Tente novamente.",
          "applePayActiveCardError": "Adicione um cartão suportado à sua carteira Apple Pay.",
          "cardholderNameLabel": "Nome do titular do cartão",
          "cardNumberLabel": "Número do cartão",
          "cvvLabel": "CVV",
          "cvvThreeDigitLabelSubheading": "(3 dígitos)",
          "cvvFourDigitLabelSubheading": "(4 dígitos)",
          "cardholderNamePlaceholder": "Nome do titular do cartão",
          "expirationDateLabel": "Data de validade",
          "expirationDateLabelSubheading": "(MM/AA)",
          "expirationDatePlaceholder": "MM/AA",
          "postalCodeLabel": "Código postal",
          "saveCardLabel": "Guardar cartão",
          "payWithCard": "Pagar com cartão",
          "endingIn": "Termina em {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Cartão",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 251: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Оплата с помощью {{paymentSource}}",
          "chooseAnotherWayToPay": "Выберите другой способ оплаты",
          "chooseAWayToPay": "Выберите способ оплаты",
          "otherWaysToPay": "Другие способы оплаты",
          "edit": "Изменить",
          "doneEditing": "Готово",
          "editPaymentMethods": "Изменить способы оплаты",
          "CreditCardDeleteConfirmationMessage": "Удалить карту {{secondaryIdentifier}} с номером, заканчивающимся на {{identifier}}?",
          "PayPalAccountDeleteConfirmationMessage": "Удалить счет PayPal {{identifier}}?",
          "VenmoAccountDeleteConfirmationMessage": "Вы действительно хотите удалить счет Venmo с именем пользователя {{identifier}}?",
          "genericDeleteConfirmationMessage": "Вы действительно хотите удалить этот способ оплаты?",
          "deleteCancelButton": "Отмена",
          "deleteConfirmationButton": "Удалить",
          "fieldEmptyForCvv": "Укажите код безопасности.",
          "fieldEmptyForExpirationDate": "Укажите дату окончания срока действия.",
          "fieldEmptyForCardholderName": "Укажите имя владельца карты.",
          "fieldTooLongForCardholderName": "Имя владельца карты должно содержать не более 256 символов.",
          "fieldEmptyForNumber": "Укажите номер.",
          "fieldEmptyForPostalCode": "Укажите почтовый индекс.",
          "fieldInvalidForCardholderName": "Недопустимое имя владельца карты.",
          "fieldInvalidForCvv": "Недопустимый код безопасности.",
          "fieldInvalidForExpirationDate": "Недопустимая дата истечения срока действия.",
          "fieldInvalidForNumber": "Недопустимый номер карты.",
          "fieldInvalidForPostalCode": "Недопустимый почтовый индекс.",
          "noticeOfCollection": "Выполняя оплату с помощью карты, я соглашаюсь с условиями Положения о конфиденциальности PayPal.",
          "genericError": "Возникла проблема с нашей стороны.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Данная кредитная карта уже существует как сохраненный способ оплаты.",
          "hostedFieldsFailedTokenizationError": "Проверьте правильность ввода данных и повторите попытку.",
          "hostedFieldsFieldsInvalidError": "Проверьте правильность ввода данных и повторите попытку.",
          "hostedFieldsTokenizationNetworkErrorError": "Сбой сети. Повторите попытку.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Сбой при проверке кредитной карты. Проверьте правильность ввода данных и повторите попытку.",
          "paypalButtonMustBeUsed": "Используйте кнопку PayPal, чтобы продолжить оплату.",
          "venmoButtonMustBeUsed": "Используйте кнопку Venmo, чтобы продолжить оплату.",
          "applePayButtonMustBeUsed": "Нажмите кнопку Apple Pay, чтобы продолжить оплату.",
          "paypalAccountTokenizationFailedError": "Возникла ошибка при добавлении счета PayPal. Повторите попытку.",
          "paypalFlowFailedError": "Возникла ошибка при подключении к PayPal. Повторите попытку.",
          "paypalTokenizationRequestActiveError": "Авторизация платежа через PayPal уже выполняется.",
          "venmoCanceledError": "Возникла ошибка. Убедитесь, что на вашем устройстве установлена самая последняя версия приложения Venmo и браузер поддерживает переход на Venmo.",
          "vaultManagerPaymentMethodDeletionError": "Не удалось удалить способ оплаты, повторите попытку.",
          "venmoAppFailedError": "Приложение Venmo не удается обнаружить на вашем устройстве.",
          "unsupportedCardTypeError": "Данный тип карты не поддерживается. Попробуйте воспользоваться другой картой.",
          "applePayTokenizationError": "Возникла ошибка сети при обработке платежа Apple Pay. Повторите попытку.",
          "applePayActiveCardError": "Добавьте поддерживаемую карту в ваш счет Apple Pay.",
          "cardholderNameLabel": "Имя владельца карты",
          "cardNumberLabel": "Номер карты",
          "cvvLabel": "Код безопасности карты CVV",
          "cvvThreeDigitLabelSubheading": "(3 цифры)",
          "cvvFourDigitLabelSubheading": "(4 цифры)",
          "cardholderNamePlaceholder": "Имя владельца карты",
          "expirationDateLabel": "Дата окончания срока действия",
          "expirationDateLabelSubheading": "(ММ/ГГ)",
          "expirationDatePlaceholder": "ММ/ГГ",
          "postalCodeLabel": "Индекс",
          "saveCardLabel": "Сохранить карту",
          "payWithCard": "Оплатить банковской картой",
          "endingIn": "Заканчивается на {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Карта",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Полезное",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 252: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Spôsob platby: {{paymentSource}}",
          "chooseAnotherWayToPay": "Vyberte iný spôsob platby",
          "chooseAWayToPay": "Zvoľte spôsob platby",
          "otherWaysToPay": "Iné spôsoby platby",
          "edit": "Upraviť",
          "doneEditing": "Hotovo",
          "editPaymentMethods": "Upraviť spôsoby platby",
          "CreditCardDeleteConfirmationMessage": "Chcete odstrániť kartu {{secondaryIdentifier}} končiacu sa na {{identifier}}?",
          "PayPalAccountDeleteConfirmationMessage": "Chcete odstrániť {{identifier}}účtu PayPal?",
          "VenmoAccountDeleteConfirmationMessage": "Naozaj chcete odstrániť účet Venmo s menom používateľa {{identifier}}?",
          "genericDeleteConfirmationMessage": "Ste si istí, že chcete tento spôsob platby odstrániť?",
          "deleteCancelButton": "Zrušiť",
          "deleteConfirmationButton": "Odstrániť",
          "fieldEmptyForCvv": "Vyplňte kód CVV.",
          "fieldEmptyForExpirationDate": "Zadajte dátum skončenia platnosti.",
          "fieldEmptyForCardholderName": "Zadajte meno majiteľa karty.",
          "fieldTooLongForCardholderName": "Meno majiteľa karty musí obsahovať menej ako 256 znakov.",
          "fieldEmptyForNumber": "Zadajte číslo.",
          "fieldEmptyForPostalCode": "Zadajte PSČ.",
          "fieldInvalidForCardholderName": "Toto meno majiteľa karty je neplatné.",
          "fieldInvalidForCvv": "Tento bezpečnostný kód je neplatný.",
          "fieldInvalidForExpirationDate": "Tento dátum skončenia platnosti je neplatný.",
          "fieldInvalidForNumber": "Toto číslo karty je neplatné.",
          "fieldInvalidForPostalCode": "Toto PSČ je neplatné.",
          "noticeOfCollection": "Zaplatením kartou vyjadrujem súhlas s Vyhlásením spoločnosti PayPal o ochrane osobných údajov.",
          "genericError": "Vyskytla sa chyba na našej strane.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Táto kreditná karta už existuje ako uložený spôsob platby.",
          "hostedFieldsFailedTokenizationError": "Skontrolujte údaje a skúste to znova.",
          "hostedFieldsFieldsInvalidError": "Skontrolujte údaje a skúste to znova.",
          "hostedFieldsTokenizationNetworkErrorError": "Chyba v sieti. Skúste to znova.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Overenie kreditnej karty nebolo úspešné. Skontrolujte údaje a skúste to znova.",
          "paypalButtonMustBeUsed": "Ak chcete pokračovať v platbe, použite tlačidlo PayPal.",
          "venmoButtonMustBeUsed": "Ak chcete pokračovať v platbe, použite tlačidlo Venmo.",
          "applePayButtonMustBeUsed": "Ak chcete pokračovať v platbe, použite tlačidlo Apple Pay.",
          "paypalAccountTokenizationFailedError": "Vyskytla sa chyba pri pridávaní účtu PayPal. Skúste to znova.",
          "paypalFlowFailedError": "Vyskytla sa chyba pri pripájaní do účtu PayPal. Skúste to znova.",
          "paypalTokenizationRequestActiveError": "Autorizácia platby PayPal už prebieha.",
          "venmoCanceledError": "Vyskytla sa chyba. Skontrolujte, či máte v zariadení nainštalovanú najnovšiu verziu aplikácie Venmo a či prehliadač podporuje prechod na aplikáciu Venmo.",
          "vaultManagerPaymentMethodDeletionError": "Nebolo možné odstrániť spôsob platby, skúste to znova.",
          "venmoAppFailedError": "Aplikáciu Venmo sa vo vašom zariadení nepodarilo nájsť.",
          "unsupportedCardTypeError": "Tento typ karty nie je podporovaný. Prosím skúste inú kartu.",
          "applePayTokenizationError": "Počas spracúvania platby cez Apple Pay došlo k chybe siete. Skúste to znova.",
          "applePayActiveCardError": "Pridajte si podporovanú kartu do peňaženky Apple Pay.",
          "cardholderNameLabel": "Meno majiteľa karty",
          "cardNumberLabel": "Číslo karty",
          "cvvLabel": "CVV",
          "cvvThreeDigitLabelSubheading": "(3 číslice)",
          "cvvFourDigitLabelSubheading": "(4 číslice)",
          "cardholderNamePlaceholder": "Meno majiteľa karty",
          "expirationDateLabel": "Dátum skončenia platnosti",
          "expirationDateLabelSubheading": "(MM/RR)",
          "expirationDatePlaceholder": "MM/RR",
          "postalCodeLabel": "PSČ",
          "saveCardLabel": "Uložiť kartu",
          "payWithCard": "Zaplatiť kartou",
          "endingIn": "Končí {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Karta",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 253: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "Betalar med {{paymentSource}}",
          "chooseAnotherWayToPay": "Välj ett annat sätt att betala",
          "chooseAWayToPay": "Välj ett sätt att betala",
          "otherWaysToPay": "Andra sätt att betala",
          "edit": "Ändra",
          "doneEditing": "Klart",
          "editPaymentMethods": "Ändra betalningsmetoder",
          "CreditCardDeleteConfirmationMessage": "Ta bort {{secondaryIdentifier}}-kortet som slutar på {{identifier}}?",
          "PayPalAccountDeleteConfirmationMessage": "Ta bort PayPal-konto {{identifier}}?",
          "VenmoAccountDeleteConfirmationMessage": "Är du säker på att du vill ta bort Venmo-kontot med användarnamnet {{identifier}}?",
          "genericDeleteConfirmationMessage": "Är du säker på att du vill ta bort den här betalningsmetoden?",
          "deleteCancelButton": "Avbryt",
          "deleteConfirmationButton": "Ta bort",
          "fieldEmptyForCvv": "Fyll i ett CVV.",
          "fieldEmptyForExpirationDate": "Fyll i ett utgångsdatum.",
          "fieldEmptyForCardholderName": "Fyll i kortinnehavarens namn.",
          "fieldTooLongForCardholderName": "Namnet på kortinnehavaren måste vara kortare än 256 tecken.",
          "fieldEmptyForNumber": "Fyll i ett nummer.",
          "fieldEmptyForPostalCode": "Fyll i ett postnummer.",
          "fieldInvalidForCardholderName": "Namnet på kortinnehavaren är ogiltigt.",
          "fieldInvalidForCvv": "Den här säkerhetskoden är inte giltig.",
          "fieldInvalidForExpirationDate": "Utgångsdatumet är ogiltigt.",
          "fieldInvalidForNumber": "Det här kortnumret är ogiltigt.",
          "fieldInvalidForPostalCode": "Postnumret är ogiltigt.",
          "noticeOfCollection": "Genom att betala med mitt kort godkänner jag PayPals sekretessmeddelande.",
          "genericError": "Ett fel uppstod.",
          "hostedFieldsTokenizationFailOnDuplicateError": "Det här kreditkortet finns redan som en sparad betalningsmetod.",
          "hostedFieldsFailedTokenizationError": "Kontrollera uppgifterna och försök igen.",
          "hostedFieldsFieldsInvalidError": "Kontrollera uppgifterna och försök igen.",
          "hostedFieldsTokenizationNetworkErrorError": "Nätverksfel. Försök igen.",
          "hostedFieldsTokenizationCvvVerificationFailedError": "Verifiering av kreditkortet misslyckades. Kontrollera uppgifterna och försök igen.",
          "paypalButtonMustBeUsed": "Använd PayPal-knappen för att fortsätta med din betalning.",
          "venmoButtonMustBeUsed": "Använd Venmo-knappen för att fortsätta med din betalning.",
          "applePayButtonMustBeUsed": "Använd PayPal-knappen för att fortsätta med din betalning.",
          "paypalAccountTokenizationFailedError": "Något gick fel när du lade till PayPal-kontot. Försök igen.",
          "paypalFlowFailedError": "Något gick fel med att ansluta till PayPal. Försök igen.",
          "paypalTokenizationRequestActiveError": "Godkännande av PayPal-betalning pågår redan.",
          "venmoCanceledError": "Något gick fel. Se till att du har den senaste versionen av Venmo-appen installerad på din enhet och att din webbläsare stöder byte till Venmo.",
          "vaultManagerPaymentMethodDeletionError": "Kan inte ta bort betalningsmetoden, försök igen.",
          "venmoAppFailedError": "Det gick inte att hitta Venmo-appen på din enhet.",
          "unsupportedCardTypeError": "Den här korttypen stöds inte. Prova med ett annat kort.",
          "applePayTokenizationError": "Ett nätverksfel uppstod när Apple Pay-betalningen behandlades. Försök igen.",
          "applePayActiveCardError": "Lägg till ett kort som stöds i din Apple Pay e-plånbok.",
          "cardholderNameLabel": "Kortinnehavarens namn",
          "cardNumberLabel": "Kortnummer",
          "cvvLabel": "CVV",
          "cvvThreeDigitLabelSubheading": "(3 siffror)",
          "cvvFourDigitLabelSubheading": "(4 siffror)",
          "cardholderNamePlaceholder": "Kortinnehavarens namn",
          "expirationDateLabel": "Utgångsdatum",
          "expirationDateLabelSubheading": "(MM/ÅÅ)",
          "expirationDatePlaceholder": "MM/ÅÅ",
          "postalCodeLabel": "Postnummer",
          "saveCardLabel": "Spara kort",
          "payWithCard": "Betala med kort",
          "endingIn": "Slutar på {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "Kort",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 254: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "ชำระเงินด้วย {{paymentSource}}",
          "chooseAnotherWayToPay": "เลือกวิธีการชำระเงินอื่น",
          "chooseAWayToPay": "โปรดเลือกวิธีชำระเงิน",
          "otherWaysToPay": "วิธีอื่นในการชำระเงิน",
          "edit": "แก้ไข",
          "doneEditing": "เสร็จแล้ว",
          "editPaymentMethods": "แก้ไขวิธีการชำระเงิน",
          "CreditCardDeleteConfirmationMessage": "ลบบัตร {{secondaryIdentifier}} ที่ลงท้ายด้วย {{identifier}} หรือไม่",
          "PayPalAccountDeleteConfirmationMessage": "คุณต้องการลบบัญชี PayPal {{identifier}} หรือไม่",
          "VenmoAccountDeleteConfirmationMessage": "คุณแน่ใจหรือไม่ว่าต้องการลบบัญชี Venmo ที่มีชื่อผู้ใช้ {{identifier}}",
          "genericDeleteConfirmationMessage": "คุณแน่ใจหรือไม่ว่าต้องการลบการชำระเงินรายการนี้ออก",
          "deleteCancelButton": "ยกเลิก",
          "deleteConfirmationButton": "ลบ",
          "fieldEmptyForCvv": "โปรดกรอกข้อมูลในบัตร CVV",
          "fieldEmptyForExpirationDate": "โปรดกรอกข้อมูลวันที่หมดอายุ",
          "fieldEmptyForCardholderName": "โปรดกรอกชื่อผู้ถือบัตร",
          "fieldTooLongForCardholderName": "ชื่อผู้ถือบัตรต้องไม่เกิน 256 อักขระ",
          "fieldEmptyForNumber": "โปรดกรอกหมายเลข",
          "fieldEmptyForPostalCode": "โปรดกรอกข้อมูลในรหัสไปรษณีย์",
          "fieldInvalidForCardholderName": "ชื่อผู้ถือบัตรนี้ไม่ถูกต้อง",
          "fieldInvalidForCvv": "รหัสความปลอดภัยนี้ไม่ถูกต้อง",
          "fieldInvalidForExpirationDate": "วันที่หมดอายุนี้ไม่ถูกต้อง",
          "fieldInvalidForNumber": "หมายเลขบัตรนี้ไม่ถูกต้อง",
          "fieldInvalidForPostalCode": "รหัสไปรษณีย์นี้ไม่ถูกต้อง",
          "noticeOfCollection": "การชําระเงินด้วยบัตรนี้ถือว่าข้าพเจ้ายอมรับนโยบายความเป็นส่วนตัวของ PayPal",
          "genericError": "เกิดข้อผิดพลาดขึ้นในระบบของเรา",
          "hostedFieldsTokenizationFailOnDuplicateError": "บัตรเครดิตนี้เป็นวิธีการชำระเงินที่บันทึกไว้แล้ว",
          "hostedFieldsFailedTokenizationError": "โปรดตรวจสอบข้อมูลของคุณ แล้วลองใหม่อีกครั้ง",
          "hostedFieldsFieldsInvalidError": "โปรดตรวจสอบข้อมูลของคุณ แล้วลองใหม่อีกครั้ง",
          "hostedFieldsTokenizationNetworkErrorError": "ข้อผิดพลาดของเครือข่าย โปรดลองอีกครั้ง",
          "hostedFieldsTokenizationCvvVerificationFailedError": "การตรวจสอบยืนยันบัตรเครดิตไม่สำเร็จ โปรดตรวจสอบข้อมูลของคุณ แล้วลองใหม่อีกครั้ง",
          "paypalButtonMustBeUsed": "ใช้ปุ่ม PayPal เพื่อดำเนินการชำระเงินต่อไป",
          "venmoButtonMustBeUsed": "ใช้ปุ่ม Venmo เพื่อดําเนินการชําระเงินต่อไป",
          "applePayButtonMustBeUsed": "ใช้ปุ่ม Apple Pay เพื่อดำเนินการชำระเงินต่อไป.",
          "paypalAccountTokenizationFailedError": "เกิดข้อผิดพลาดบางอย่างในการเพิ่มบัญชี PayPal โปรดลองอีกครั้ง",
          "paypalFlowFailedError": "เกิดข้อผิดพลาดในการเชื่อมต่อกับ PayPal โปรดลองอีกครั้ง",
          "paypalTokenizationRequestActiveError": "การอนุมัติการชำระเงิน PayPal อยู่ในระหว่างดำเนินการแล้ว",
          "venmoCanceledError": "เกิดข้อผิดพลาดบางประการ ตรวจสอบให้แน่ใจว่าคุณมีแอปพลิเคชัน Venmo เวอร์ชันล่าสุดที่ติดตั้งไว้ในอุปกรณ์ของคุณและเบราว์เซอร์ของคุณรองรับการเปลี่ยนเป็น Venmo",
          "vaultManagerPaymentMethodDeletionError": "ไม่สามารถลบวิธีการชำระเงินได้โปรดลองอีกครั้ง",
          "venmoAppFailedError": "ไม่พบแอป Venmo ในอุปกรณ์ของคุณ",
          "unsupportedCardTypeError": "ไม่รองรับบัตรประเภทนี้ โปรดลองใช้บัตรใบอื่น",
          "applePayTokenizationError": "เกิดข้อผิดพลาดในเครือข่ายขณะประมวลผลการชำระเงินของ Apple Pay โปรดลองอีกครั้ง",
          "applePayActiveCardError": "เพิ่มบัตรที่รองรับไปยังกระเป๋าสตางค์ Apple Pay ของคุณ",
          "cardholderNameLabel": "ชื่อของผู้ถือบัตร",
          "cardNumberLabel": "หมายเลขบัตร",
          "cvvLabel": "CVV",
          "cvvThreeDigitLabelSubheading": "(3 หลัก)",
          "cvvFourDigitLabelSubheading": "(4 หลัก)",
          "cardholderNamePlaceholder": "ชื่อของผู้ถือบัตร",
          "expirationDateLabel": "วันหมดอายุ",
          "expirationDateLabelSubheading": "(MM/YY)",
          "expirationDatePlaceholder": "MM/YY",
          "postalCodeLabel": "รหัสไปรษณีย์",
          "saveCardLabel": "บันทึกบัตร",
          "payWithCard": "ชำระด้วยบัตรเดบิตหรือบัตรเครดิต",
          "endingIn": "ลงท้ายด้วย {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "บัตร",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 255: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "使用{{paymentSource}}付款",
          "chooseAnotherWayToPay": "请选择其它付款方式。",
          "chooseAWayToPay": "选择付款方式",
          "otherWaysToPay": "其他付款方式",
          "edit": "编辑",
          "doneEditing": "完成",
          "editPaymentMethods": "编辑付款方式",
          "CreditCardDeleteConfirmationMessage": "删除尾号为{{identifier}}的{{secondaryIdentifier}}卡？",
          "PayPalAccountDeleteConfirmationMessage": "删除PayPal账户{{identifier}}？",
          "VenmoAccountDeleteConfirmationMessage": "您确定要删除用户名为{{identifier}}的Venmo账户吗？",
          "genericDeleteConfirmationMessage": "确定要删除此付款方式吗？",
          "deleteCancelButton": "取消",
          "deleteConfirmationButton": "删除",
          "fieldEmptyForCvv": "请填写CVV。",
          "fieldEmptyForExpirationDate": "请填写有效期限。",
          "fieldEmptyForCardholderName": "请填写持卡人姓名。",
          "fieldTooLongForCardholderName": "持卡人姓名必须少于256个字符。",
          "fieldEmptyForNumber": "请填写一个号码。",
          "fieldEmptyForPostalCode": "请填写邮政编码。",
          "fieldInvalidForCardholderName": "此持卡人姓名无效。",
          "fieldInvalidForCvv": "此安全码无效。",
          "fieldInvalidForExpirationDate": "此有效期限无效。",
          "fieldInvalidForNumber": "此卡号无效。",
          "fieldInvalidForPostalCode": "此邮政编码无效。",
          "noticeOfCollection": "使用我的卡付款即表示我同意PayPal隐私声明。",
          "genericError": "我们遇到了一些问题。",
          "hostedFieldsTokenizationFailOnDuplicateError": "此信用卡已存在于已保存的付款方式。",
          "hostedFieldsFailedTokenizationError": "请检查您的信息，然后重试。",
          "hostedFieldsFieldsInvalidError": "请检查您的信息，然后重试。",
          "hostedFieldsTokenizationNetworkErrorError": "网络错误。请重试。",
          "hostedFieldsTokenizationCvvVerificationFailedError": "信用卡验证失败。请检查您的信息，然后重试。",
          "paypalButtonMustBeUsed": "使用PayPal按钮继续付款。",
          "venmoButtonMustBeUsed": "使用Venmo按钮继续付款。",
          "applePayButtonMustBeUsed": "使用Apple Pay按钮以便继续进行您的付款。",
          "paypalAccountTokenizationFailedError": "添加PayPal账户时遇到了一些问题。请重试。",
          "paypalFlowFailedError": "连接到PayPal遇到了一些问题。请重试。",
          "paypalTokenizationRequestActiveError": "PayPal付款授权已在处理中。",
          "venmoCanceledError": "遇到了一些问题。请确保您的设备上安装了最新版本的Venmo应用，并且您的浏览器支持切换到Venmo。",
          "vaultManagerPaymentMethodDeletionError": "无法删除付款方式，请重试。",
          "venmoAppFailedError": "在您的设备上找不到Venmo应用程序。",
          "unsupportedCardTypeError": "不支持该卡类型。请尝试其他卡。",
          "applePayTokenizationError": "处理Apple Pay付款时发生了网络错误。请重试。",
          "applePayActiveCardError": "在您的Apple Pay钱包中添加一张受支持的卡。",
          "cardholderNameLabel": "持卡人姓名",
          "cardNumberLabel": "卡号",
          "cvvLabel": "CVV",
          "cvvThreeDigitLabelSubheading": "（3位数）",
          "cvvFourDigitLabelSubheading": "（4位数）",
          "cardholderNamePlaceholder": "持卡人姓名",
          "expirationDateLabel": "有效期限",
          "expirationDateLabelSubheading": "（月/年）",
          "expirationDatePlaceholder": "月/年",
          "postalCodeLabel": "邮政编码",
          "saveCardLabel": "保存此卡",
          "payWithCard": "使用卡支付",
          "endingIn": "尾号为{{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "卡",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "发现",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "银联"
        };
      }, {}], 256: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "付款方式為 {{paymentSource}}",
          "chooseAnotherWayToPay": "請選擇其他付款方式",
          "chooseAWayToPay": "選擇付款方式",
          "otherWaysToPay": "其他付款方式",
          "edit": "編輯",
          "doneEditing": "完成",
          "editPaymentMethods": "編輯付款方式",
          "CreditCardDeleteConfirmationMessage": "刪除最後數字為 {{identifier}} 的 {{secondaryIdentifier}} 卡嗎？",
          "PayPalAccountDeleteConfirmationMessage": "刪除 {{identifier}} PayPal 帳戶嗎？",
          "VenmoAccountDeleteConfirmationMessage": "確定要刪除用戶名稱為 {{identifier}} 的 Venmo 帳戶嗎？",
          "genericDeleteConfirmationMessage": "確定要刪除此付款方式嗎？",
          "deleteCancelButton": "取消",
          "deleteConfirmationButton": "刪除",
          "fieldEmptyForCvv": "請填寫信用卡認證碼（CVV）。",
          "fieldEmptyForExpirationDate": "請填寫到期日。",
          "fieldEmptyForCardholderName": "請填寫持卡人姓名。",
          "fieldTooLongForCardholderName": "持卡人姓名必須少於 256 個字元。",
          "fieldEmptyForNumber": "請填寫數字。",
          "fieldEmptyForPostalCode": "請填寫郵遞區號。",
          "fieldInvalidForCardholderName": "持卡人姓名無效。",
          "fieldInvalidForCvv": "此安全代碼無效。",
          "fieldInvalidForExpirationDate": "此到期日無效。",
          "fieldInvalidForNumber": "此卡號無效。",
          "fieldInvalidForPostalCode": "郵遞區號無效。",
          "noticeOfCollection": "一經使用信用卡付款，即表示我同意 PayPal 的《私隱權聲明》。",
          "genericError": "系統發生錯誤。",
          "hostedFieldsTokenizationFailOnDuplicateError": "此信用卡為已儲存的付款方式。",
          "hostedFieldsFailedTokenizationError": "請檢查你的資料，然後重試。",
          "hostedFieldsFieldsInvalidError": "請檢查你的資料，然後重試。",
          "hostedFieldsTokenizationNetworkErrorError": "網絡錯誤。請再試一次。",
          "hostedFieldsTokenizationCvvVerificationFailedError": "信用卡認證失敗。請檢查你的資料，然後重試。",
          "paypalButtonMustBeUsed": "使用「PayPal 按鈕」繼續付款。",
          "venmoButtonMustBeUsed": "使用 Venmo 按鈕以繼續付款。",
          "applePayButtonMustBeUsed": "使用 Apple Pay 按鈕繼續付款。",
          "paypalAccountTokenizationFailedError": "新增 PayPal 帳戶出現問題，請再試一次。",
          "paypalFlowFailedError": "連接至 PayPal 出現問題，請再試一次。",
          "paypalTokenizationRequestActiveError": "正在處理 PayPal 授權付款。",
          "venmoCanceledError": "系統出現錯誤，請確保裝置已安裝最新版本的 Venmo 應用程式，及瀏覽器支援切換至 Venmo。",
          "vaultManagerPaymentMethodDeletionError": "無法刪除付款方式，請再試一次。",
          "venmoAppFailedError": "無法在裝置上找到 Venmo 應用程式。",
          "unsupportedCardTypeError": "不支援此卡類型。請改用其他信用卡。",
          "applePayTokenizationError": "處理 Apple Pay 付款時網路發生錯誤。請再試一次。",
          "applePayActiveCardError": "新增可用的信用卡到 Apple Pay 錢包。",
          "cardholderNameLabel": "持卡人姓名",
          "cardNumberLabel": "卡號",
          "cvvLabel": "CVV",
          "cvvThreeDigitLabelSubheading": "（3 位數）",
          "cvvFourDigitLabelSubheading": "（4 位數）",
          "cardholderNamePlaceholder": "持卡人姓名",
          "expirationDateLabel": "到期日",
          "expirationDateLabelSubheading": "(MM/YY)",
          "expirationDatePlaceholder": "MM/YY",
          "postalCodeLabel": "郵遞區號",
          "saveCardLabel": "儲存卡",
          "payWithCard": "使用扣帳卡或信用卡付款",
          "endingIn": "最後數字為 {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "信用卡",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "Discover",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "UnionPay"
        };
      }, {}], 257: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "使用 {{paymentSource}} 付款",
          "chooseAnotherWayToPay": "選擇其他付款方式",
          "chooseAWayToPay": "選擇付款方式",
          "otherWaysToPay": "其他付款方式",
          "edit": "編輯",
          "doneEditing": "完成",
          "editPaymentMethods": "編輯付款方式",
          "CreditCardDeleteConfirmationMessage": "刪除末碼為 {{identifier}} 的 {{secondaryIdentifier}} 卡片？",
          "PayPalAccountDeleteConfirmationMessage": "刪除 {{identifier}} 的 PayPal 帳戶？",
          "VenmoAccountDeleteConfirmationMessage": "確定要刪除用戶名稱為 {{identifier}} 的 Venmo 帳戶？",
          "genericDeleteConfirmationMessage": "確定要刪除此付款方式？",
          "deleteCancelButton": "取消",
          "deleteConfirmationButton": "刪除",
          "fieldEmptyForCvv": "填寫信用卡驗證碼。",
          "fieldEmptyForExpirationDate": "填寫到期日。",
          "fieldEmptyForCardholderName": "填寫持卡人姓名。",
          "fieldTooLongForCardholderName": "持卡人姓名必須少於 256 個字元。",
          "fieldEmptyForNumber": "填寫數字。",
          "fieldEmptyForPostalCode": "填寫郵遞區號。",
          "fieldInvalidForCardholderName": "此持卡人姓名無效。",
          "fieldInvalidForCvv": "此安全代碼無效。",
          "fieldInvalidForExpirationDate": "此到期日無效。",
          "fieldInvalidForNumber": "此卡號無效。",
          "fieldInvalidForPostalCode": "此郵遞區號無效。",
          "noticeOfCollection": "使用我的卡片付款，即表示我同意「PayPal 隱私權聲明」。",
          "genericError": "我們的系統發生問題。",
          "hostedFieldsTokenizationFailOnDuplicateError": "此信用卡已經是儲存的付款方式。",
          "hostedFieldsFailedTokenizationError": "請檢查你的資料並重試。",
          "hostedFieldsFieldsInvalidError": "請檢查你的資料並重試。",
          "hostedFieldsTokenizationNetworkErrorError": "網路錯誤。請重試。",
          "hostedFieldsTokenizationCvvVerificationFailedError": "信用卡認證失敗。請檢查你的資料並重試。",
          "paypalButtonMustBeUsed": "使用 PayPal 按鈕繼續付款。",
          "venmoButtonMustBeUsed": "使用 Venmo 按鈕繼續付款。",
          "applePayButtonMustBeUsed": "使用 PayPal 按鈕繼續付款。",
          "paypalAccountTokenizationFailedError": "新增 PayPal 帳戶時發生錯誤。請重試。",
          "paypalFlowFailedError": "連結至 PayPal 時發生錯誤。請重試。",
          "paypalTokenizationRequestActiveError": "PayPal 付款授權已在進行中。",
          "venmoCanceledError": "系統發生錯誤。確保你在裝置上安裝了最新版本的 Venmo 應用程式，且瀏覽器支援轉換至 Venmo。",
          "vaultManagerPaymentMethodDeletionError": "無法刪除付款方式，請重試。",
          "venmoAppFailedError": "你的裝置上找不到 Venmo 應用程式。",
          "unsupportedCardTypeError": "不支援此卡片類型，請改用其他卡片。",
          "applePayTokenizationError": "處理 Apple Pay 付款時發生網路連線錯誤。請重試。",
          "applePayActiveCardError": "將支援卡片新增至你的 Apple Pay 錢包。",
          "cardholderNameLabel": "持卡人姓名",
          "cardNumberLabel": "卡號",
          "cvvLabel": "信用卡驗證碼",
          "cvvThreeDigitLabelSubheading": "（3 位數）",
          "cvvFourDigitLabelSubheading": "（4 位數）",
          "cardholderNamePlaceholder": "持卡人姓名",
          "expirationDateLabel": "到期日",
          "expirationDateLabelSubheading": "（月 / 年）",
          "expirationDatePlaceholder": "月 / 年",
          "postalCodeLabel": "郵遞區號",
          "saveCardLabel": "儲存卡片",
          "payWithCard": "使用卡片付款",
          "endingIn": "末碼為 {{lastFourCardDigits}}",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "卡片",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "美國運通",
          "Discover": "發現卡",
          "Diners Club": "大來卡",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "銀聯"
        };
      }, {}], 258: [function(require2, module3, exports3) {
        "use strict";
        module3.exports = {
          "payingWith": "使用{{paymentSource}}付款",
          "chooseAnotherWayToPay": "选择其他付款方式",
          "chooseAWayToPay": "选择付款方式",
          "otherWaysToPay": "其他付款方式",
          "edit": "编辑",
          "doneEditing": "完成",
          "editPaymentMethods": "编辑付款方式",
          "CreditCardDeleteConfirmationMessage": "删除以{{identifier}}}结尾的{{secondaryIdentifier}}}卡？",
          "PayPalAccountDeleteConfirmationMessage": "删除PayPal账户{{identifier}}}？",
          "VenmoAccountDeleteConfirmationMessage": "确定要删除用户名为{{identifier}}}的Venmo账户吗？",
          "genericDeleteConfirmationMessage": "确定要删除此付款方式吗？",
          "deleteCancelButton": "取消",
          "deleteConfirmationButton": "删除",
          "fieldEmptyForCvv": "请填写卡校验值。",
          "fieldEmptyForExpirationDate": "请填写有效期限。",
          "fieldEmptyForCardholderName": "请填写持卡人姓名。",
          "fieldTooLongForCardholderName": "持卡人姓名必须少于256个字符。",
          "fieldEmptyForNumber": "请填写号码。",
          "fieldEmptyForPostalCode": "请填写邮政编码。",
          "fieldInvalidForCardholderName": "此持卡人姓名无效。",
          "fieldInvalidForCvv": "此验证码无效。",
          "fieldInvalidForExpirationDate": "此有效期限无效。",
          "fieldInvalidForNumber": "此卡号无效。",
          "fieldInvalidForPostalCode": "此邮政编码无效。",
          "noticeOfCollection": "使用我的卡付款即表示我同意PayPal隐私声明。",
          "genericError": "我们遇到了一些问题。",
          "hostedFieldsTokenizationFailOnDuplicateError": "此信用卡已存在于已保存的付款方式中。",
          "hostedFieldsFailedTokenizationError": "请检查您的信息，然后重试。",
          "hostedFieldsFieldsInvalidError": "请检查您的信息，然后重试。",
          "hostedFieldsTokenizationNetworkErrorError": "网络错误。请重试。",
          "hostedFieldsTokenizationCvvVerificationFailedError": "信用卡认证失败。请检查您的信息，然后重试。",
          "paypalButtonMustBeUsed": "使用PayPal按钮以便继续进行您的付款。",
          "venmoButtonMustBeUsed": "使用Venmo按钮继续付款。",
          "applePayButtonMustBeUsed": "使用Apple Pay按钮以便继续进行您的付款。",
          "paypalAccountTokenizationFailedError": "添加PayPal账户时遇到了问题。请重试。",
          "paypalFlowFailedError": "连接到PayPal时遇到了问题。请重试。",
          "paypalTokenizationRequestActiveError": "PayPal付款授权正在处理中。",
          "venmoCanceledError": "遇到了一些问题。请确保您的设备上安装了最新版本的Venmo应用，并且您的浏览器支持切换到Venmo。",
          "vaultManagerPaymentMethodDeletionError": "无法删除付款方式，请重试。",
          "venmoAppFailedError": "未能在您的设备上找到Venmo应用。",
          "unsupportedCardTypeError": "不支持该卡类型。请尝试其它卡。",
          "applePayTokenizationError": "处理Apple Pay付款时出现了网络错误。请重试。",
          "applePayActiveCardError": "在您的Apple Pay钱包中添加一张受支持的卡。",
          "cardholderNameLabel": "持卡人姓名",
          "cardNumberLabel": "卡号",
          "cvvLabel": "卡校验值",
          "cvvThreeDigitLabelSubheading": "（3位数）",
          "cvvFourDigitLabelSubheading": "（4位数）",
          "cardholderNamePlaceholder": "持卡人姓名",
          "expirationDateLabel": "有效期限",
          "expirationDateLabelSubheading": "（月/年）",
          "expirationDatePlaceholder": "月/年",
          "postalCodeLabel": "邮政编码",
          "saveCardLabel": "保存卡",
          "payWithCard": "使用卡支付",
          "endingIn": "以{{lastFourCardDigits}}}结尾",
          "Apple Pay": "Apple Pay",
          "Venmo": "Venmo",
          "Card": "卡",
          "PayPal": "PayPal",
          "PayPal Credit": "PayPal Credit",
          "Google Pay": "Google Pay",
          "American Express": "American Express",
          "Discover": "发现",
          "Diners Club": "Diners Club",
          "Elo": "Elo",
          "Hiper": "Hiper",
          "Hipercard": "Hipercard",
          "MasterCard": "Mastercard",
          "Visa": "Visa",
          "JCB": "JCB",
          "Maestro": "Maestro",
          "UnionPay": "银联"
        };
      }, {}], 259: [function(require2, module3, exports3) {
        "use strict";
        var assign = require2("../lib/assign").assign;
        var DropinError = require2("../lib/dropin-error");
        var errors = require2("../constants").errors;
        function BaseView(options) {
          options = options || {};
          assign(this, options);
        }
        BaseView.prototype.getElementById = function(id) {
          if (!this.element) {
            return null;
          }
          return this.element.querySelector('[data-braintree-id="' + id + '"]');
        };
        BaseView.prototype.requestPaymentMethod = function() {
          return Promise.reject(new DropinError(errors.NO_PAYMENT_METHOD_ERROR));
        };
        BaseView.prototype.getPaymentMethod = function() {
          return this.activeMethodView && this.activeMethodView.paymentMethod;
        };
        BaseView.prototype.onSelection = function() {
        };
        BaseView.prototype.teardown = function() {
          return Promise.resolve();
        };
        BaseView.prototype.preventUserAction = function() {
          if (this.element) {
            this.element.classList.add("braintree-sheet--loading");
          }
          this.model.preventUserAction();
        };
        BaseView.prototype.allowUserAction = function() {
          if (this.element) {
            this.element.classList.remove("braintree-sheet--loading");
          }
          this.model.allowUserAction();
        };
        module3.exports = BaseView;
      }, { "../constants": 202, "../lib/assign": 208, "../lib/dropin-error": 212 }], 260: [function(require2, module3, exports3) {
        "use strict";
        var BaseView = require2("./base-view");
        var addSelectionEventHandler = require2("../lib/add-selection-event-handler");
        var paymentMethodTypes = require2("../constants").paymentMethodTypes;
        function DeleteConfirmationView() {
          BaseView.apply(this, arguments);
          this._initialize();
        }
        DeleteConfirmationView.prototype = Object.create(BaseView.prototype);
        DeleteConfirmationView.prototype.constructor = DeleteConfirmationView;
        DeleteConfirmationView.ID = DeleteConfirmationView.prototype.ID = "delete-confirmation";
        DeleteConfirmationView.prototype._initialize = function() {
          this._yesButton = this.getElementById("delete-confirmation__yes");
          this._noButton = this.getElementById("delete-confirmation__no");
          this._messageBox = this.getElementById("delete-confirmation__message");
          addSelectionEventHandler(this._yesButton, (function() {
            this.model.deleteVaultedPaymentMethod();
          }).bind(this));
          addSelectionEventHandler(this._noButton, (function() {
            this.model.cancelDeleteVaultedPaymentMethod();
          }).bind(this));
        };
        DeleteConfirmationView.prototype.applyPaymentMethod = function(paymentMethod) {
          var identifier, secondaryIdentifier;
          var messageText = this.strings[paymentMethod.type + "DeleteConfirmationMessage"];
          if (messageText) {
            switch (paymentMethod.type) {
              case paymentMethodTypes.card:
                identifier = paymentMethod.details.lastFour;
                secondaryIdentifier = paymentMethod.details.cardType;
                secondaryIdentifier = this.strings[secondaryIdentifier] || secondaryIdentifier;
                break;
              case paymentMethodTypes.paypal:
                identifier = paymentMethod.details.email;
                break;
              case paymentMethodTypes.venmo:
                identifier = paymentMethod.details.username;
                break;
              default:
                break;
            }
            messageText = messageText.replace("{{identifier}}", identifier);
            if (secondaryIdentifier) {
              messageText = messageText.replace("{{secondaryIdentifier}}", secondaryIdentifier);
            }
          } else {
            messageText = this.strings.genericDeleteConfirmationMessage;
          }
          this._messageBox.innerText = messageText;
        };
        DeleteConfirmationView.prototype.onSelection = function() {
          window.requestAnimationFrame((function() {
            this._yesButton.focus();
          }).bind(this));
        };
        module3.exports = DeleteConfirmationView;
      }, { "../constants": 202, "../lib/add-selection-event-handler": 206, "./base-view": 259 }], 261: [function(require2, module3, exports3) {
        "use strict";
        var analytics = require2("../lib/analytics");
        var analyticsKinds = require2("../constants").analyticsKinds;
        var BaseView = require2("./base-view");
        var sheetViews = require2("./payment-sheet-views");
        var PaymentMethodsView = require2("./payment-methods-view");
        var PaymentOptionsView = require2("./payment-options-view");
        var DeleteConfirmationView = require2("./delete-confirmation-view");
        var addSelectionEventHandler = require2("../lib/add-selection-event-handler");
        var wait = require2("../lib/wait");
        var supportsFlexbox = require2("../lib/supports-flexbox");
        var CHANGE_ACTIVE_PAYMENT_METHOD_TIMEOUT = require2("../constants").CHANGE_ACTIVE_PAYMENT_METHOD_TIMEOUT;
        var DEVELOPER_MISCONFIGURATION_MESSAGE = require2("../constants").errors.DEVELOPER_MISCONFIGURATION_MESSAGE;
        function MainView() {
          BaseView.apply(this, arguments);
          this.dependenciesInitializing = 0;
          this._initialize();
        }
        MainView.prototype = Object.create(BaseView.prototype);
        MainView.prototype.constructor = MainView;
        MainView.prototype._initialize = function() {
          var paymentOptionsView;
          this._hasMultiplePaymentOptions = this.model.supportedPaymentOptions.length > 1;
          this._views = {};
          this.sheetContainer = this.getElementById("sheet-container");
          this.sheetErrorText = this.getElementById("sheet-error-text");
          this.toggle = this.getElementById("toggle");
          this.disableWrapper = this.getElementById("disable-wrapper");
          this.lowerContainer = this.getElementById("lower-container");
          this.loadingContainer = this.getElementById("loading-container");
          this.dropinContainer = this.element.querySelector(".braintree-dropin");
          this.supportsFlexbox = supportsFlexbox();
          this.model.on("asyncDependenciesReady", this.hideLoadingIndicator.bind(this));
          this.model.on("errorOccurred", this.showSheetError.bind(this));
          this.model.on("errorCleared", this.hideSheetError.bind(this));
          this.model.on("preventUserAction", this.preventUserAction.bind(this));
          this.model.on("allowUserAction", this.allowUserAction.bind(this));
          this.paymentSheetViewIDs = Object.keys(sheetViews).reduce((function(ids, sheetViewKey) {
            var PaymentSheetView, paymentSheetView;
            if (this.model.supportedPaymentOptions.indexOf(sheetViewKey) !== -1) {
              PaymentSheetView = sheetViews[sheetViewKey];
              paymentSheetView = new PaymentSheetView({
                element: this.getElementById(PaymentSheetView.ID),
                mainView: this,
                model: this.model,
                client: this.client,
                strings: this.strings
              });
              paymentSheetView.initialize();
              this.addView(paymentSheetView);
              ids.push(paymentSheetView.ID);
            }
            return ids;
          }).bind(this), []);
          this.paymentMethodsViews = new PaymentMethodsView({
            element: this.element,
            model: this.model,
            client: this.client,
            strings: this.strings
          });
          this.addView(this.paymentMethodsViews);
          this.deleteConfirmationView = new DeleteConfirmationView({
            element: this.getElementById("delete-confirmation"),
            model: this.model,
            strings: this.strings
          });
          this.addView(this.deleteConfirmationView);
          addSelectionEventHandler(this.toggle, this.toggleAdditionalOptions.bind(this));
          this.model.on("changeActivePaymentMethod", (function() {
            wait.delay(CHANGE_ACTIVE_PAYMENT_METHOD_TIMEOUT).then((function() {
              var id = PaymentMethodsView.ID;
              if (!this.model.hasPaymentMethods()) {
                id = this.model.getInitialViewId();
              }
              this.setPrimaryView(id);
            }).bind(this));
          }).bind(this));
          this.model.on("changeActiveView", this._onChangeActiveView.bind(this));
          this.model.on("removeActivePaymentMethod", (function() {
            var activePaymentView = this.getView(this.model.getActivePaymentViewId());
            if (activePaymentView && typeof activePaymentView.removeActivePaymentMethod === "function") {
              activePaymentView.removeActivePaymentMethod();
            }
          }).bind(this));
          this.model.on("enableEditMode", this.enableEditMode.bind(this));
          this.model.on("disableEditMode", this.disableEditMode.bind(this));
          this.model.on("confirmPaymentMethodDeletion", this.openConfirmPaymentMethodDeletionDialog.bind(this));
          this.model.on("cancelVaultedPaymentMethodDeletion", this.cancelVaultedPaymentMethodDeletion.bind(this));
          this.model.on("startVaultedPaymentMethodDeletion", this.startVaultedPaymentMethodDeletion.bind(this));
          this.model.on("finishVaultedPaymentMethodDeletion", this.finishVaultedPaymentMethodDeletion.bind(this));
          if (this._hasMultiplePaymentOptions) {
            paymentOptionsView = new PaymentOptionsView({
              client: this.client,
              element: this.getElementById(PaymentOptionsView.ID),
              mainView: this,
              model: this.model,
              strings: this.strings
            });
            this.addView(paymentOptionsView);
          }
          this._sendToDefaultView();
        };
        MainView.prototype._onChangeActiveView = function(data) {
          var id = data.newViewId;
          var activePaymentView = this.getView(id);
          if (id === PaymentMethodsView.ID) {
            this.paymentMethodsViews.container.classList.add("braintree-methods--active");
            this.sheetContainer.classList.remove("braintree-sheet--active");
          } else {
            wait.delay(0).then((function() {
              this.sheetContainer.classList.add("braintree-sheet--active");
            }).bind(this));
            this.paymentMethodsViews.container.classList.remove("braintree-methods--active");
            if (!this.getView(id).getPaymentMethod()) {
              this.model.setPaymentMethodRequestable({
                isRequestable: false
              });
            }
          }
          activePaymentView.onSelection();
        };
        MainView.prototype.addView = function(view) {
          this._views[view.ID] = view;
        };
        MainView.prototype.getView = function(id) {
          return this._views[id];
        };
        MainView.prototype.setPrimaryView = function(id, secondaryViewId) {
          var paymentMethod;
          wait.delay(0).then((function() {
            this.element.className = prefixShowClass(id);
            if (secondaryViewId) {
              this.element.classList.add(prefixShowClass(secondaryViewId));
            }
          }).bind(this));
          this.primaryView = this.getView(id);
          this.model.changeActiveView(id);
          if (this.paymentSheetViewIDs.indexOf(id) !== -1) {
            if (this.model.getPaymentMethods().length > 0 || this.getView(PaymentOptionsView.ID)) {
              this.showToggle();
            } else {
              this.hideToggle();
            }
          } else if (id === PaymentMethodsView.ID) {
            this.showToggle();
            this.getElementById("lower-container").appendChild(this.getElementById("options"));
          } else if (id === PaymentOptionsView.ID) {
            this.hideToggle();
          }
          if (!this.supportsFlexbox) {
            this.element.setAttribute("data-braintree-no-flexbox", true);
          }
          paymentMethod = this.primaryView.getPaymentMethod();
          this.model.setPaymentMethodRequestable({
            isRequestable: Boolean(paymentMethod && !this.model.isInEditMode()),
            type: paymentMethod && paymentMethod.type,
            selectedPaymentMethod: paymentMethod
          });
          this.model.clearError();
        };
        MainView.prototype.requestPaymentMethod = function() {
          var activePaymentView = this.getView(this.model.getActivePaymentViewId());
          return activePaymentView.requestPaymentMethod().then((function(payload) {
            analytics.sendEvent(this.client, "request-payment-method." + analyticsKinds[payload.type]);
            return payload;
          }).bind(this)).catch((function(err) {
            analytics.sendEvent(this.client, "request-payment-method.error");
            return Promise.reject(err);
          }).bind(this));
        };
        MainView.prototype.hideLoadingIndicator = function() {
          this.dropinContainer.classList.remove("braintree-loading");
          this.dropinContainer.classList.add("braintree-loaded");
          this.loadingContainer.classList.add("braintree-hidden");
        };
        MainView.prototype.showLoadingIndicator = function() {
          this.dropinContainer.classList.add("braintree-loading");
          this.dropinContainer.classList.remove("braintree-loaded");
          this.loadingContainer.classList.remove("braintree-hidden");
        };
        MainView.prototype.toggleAdditionalOptions = function() {
          var sheetViewID;
          var isPaymentSheetView = this.paymentSheetViewIDs.indexOf(this.primaryView.ID) !== -1;
          this.hideToggle();
          if (!this._hasMultiplePaymentOptions) {
            sheetViewID = this.paymentSheetViewIDs[0];
            this.element.classList.add(prefixShowClass(sheetViewID));
            this.model.changeActiveView(sheetViewID);
          } else if (isPaymentSheetView) {
            if (this.model.getPaymentMethods().length === 0) {
              this.setPrimaryView(PaymentOptionsView.ID);
            } else {
              this.setPrimaryView(PaymentMethodsView.ID, PaymentOptionsView.ID);
              this.hideToggle();
            }
          } else {
            this.element.classList.add(prefixShowClass(PaymentOptionsView.ID));
          }
        };
        MainView.prototype.showToggle = function() {
          if (this.model.isInEditMode()) {
            return;
          }
          this.toggle.classList.remove("braintree-hidden");
          this.lowerContainer.classList.add("braintree-hidden");
        };
        MainView.prototype.hideToggle = function() {
          this.toggle.classList.add("braintree-hidden");
          this.lowerContainer.classList.remove("braintree-hidden");
        };
        MainView.prototype.showSheetError = function(error) {
          var errorMessage;
          var genericErrorMessage = this.strings.genericError;
          if (this.strings.hasOwnProperty(error)) {
            errorMessage = this.strings[error];
          } else if (error && typeof error.code === "string") {
            errorMessage = this.strings[snakeCaseToCamelCase(error.code) + "Error"] || genericErrorMessage;
          } else if (error === "developerError") {
            errorMessage = DEVELOPER_MISCONFIGURATION_MESSAGE;
          } else {
            errorMessage = genericErrorMessage;
          }
          this.dropinContainer.classList.add("braintree-sheet--has-error");
          this.sheetErrorText.innerHTML = errorMessage;
        };
        MainView.prototype.hideSheetError = function() {
          this.dropinContainer.classList.remove("braintree-sheet--has-error");
        };
        MainView.prototype.getOptionsElements = function() {
          return this._views.options.elements;
        };
        MainView.prototype.preventUserAction = function() {
          this.disableWrapper.classList.remove("braintree-hidden");
        };
        MainView.prototype.allowUserAction = function() {
          this.disableWrapper.classList.add("braintree-hidden");
        };
        MainView.prototype.teardown = function() {
          var error;
          var viewNames = Object.keys(this._views);
          var teardownPromises = viewNames.map((function(view) {
            return this._views[view].teardown().catch(function(err) {
              error = err;
            });
          }).bind(this));
          return Promise.all(teardownPromises).then(function() {
            if (error) {
              return Promise.reject(error);
            }
            return Promise.resolve();
          });
        };
        MainView.prototype.enableEditMode = function() {
          this.setPrimaryView(this.paymentMethodsViews.ID);
          this.paymentMethodsViews.enableEditMode();
          this.hideToggle();
          this.model.setPaymentMethodRequestable({
            isRequestable: false
          });
        };
        MainView.prototype.disableEditMode = function() {
          var paymentMethod;
          this.hideSheetError();
          this.paymentMethodsViews.disableEditMode();
          this.showToggle();
          paymentMethod = this.primaryView.getPaymentMethod();
          this.model.setPaymentMethodRequestable({
            isRequestable: Boolean(paymentMethod),
            type: paymentMethod && paymentMethod.type,
            selectedPaymentMethod: paymentMethod
          });
        };
        MainView.prototype.openConfirmPaymentMethodDeletionDialog = function(paymentMethod) {
          this.deleteConfirmationView.applyPaymentMethod(paymentMethod);
          this.setPrimaryView(this.deleteConfirmationView.ID);
        };
        MainView.prototype.cancelVaultedPaymentMethodDeletion = function() {
          this.setPrimaryView(this.paymentMethodsViews.ID);
        };
        MainView.prototype.startVaultedPaymentMethodDeletion = function() {
          this.element.className = "";
          this.showLoadingIndicator();
        };
        MainView.prototype.finishVaultedPaymentMethodDeletion = function(error) {
          var self2 = this;
          this.paymentMethodsViews.refreshPaymentMethods();
          if (error && this.model.getPaymentMethods().length > 0) {
            this.model.enableEditMode();
            this.showSheetError("vaultManagerPaymentMethodDeletionError");
          } else {
            this._sendToDefaultView();
          }
          return new Promise(function(resolve) {
            wait.delay(500).then(function() {
              self2.hideLoadingIndicator();
              resolve();
            });
          });
        };
        MainView.prototype._sendToDefaultView = function() {
          var paymentMethods = this.model.getPaymentMethods();
          var preselectVaultedPaymentMethod = this.model.merchantConfiguration.preselectVaultedPaymentMethod !== false;
          if (paymentMethods.length > 0) {
            if (preselectVaultedPaymentMethod) {
              analytics.sendEvent(this.client, "vaulted-card.preselect");
              this.model.changeActivePaymentMethod(paymentMethods[0]);
            } else {
              this.setPrimaryView(this.paymentMethodsViews.ID);
            }
          } else if (this._hasMultiplePaymentOptions) {
            this.setPrimaryView(PaymentOptionsView.ID);
          } else {
            this.setPrimaryView(this.paymentSheetViewIDs[0]);
          }
        };
        function snakeCaseToCamelCase(s) {
          return s.toLowerCase().replace(/(\_\w)/g, function(m) {
            return m[1].toUpperCase();
          });
        }
        function prefixShowClass(classname) {
          return "braintree-show-" + classname;
        }
        module3.exports = MainView;
      }, { "../constants": 202, "../lib/add-selection-event-handler": 206, "../lib/analytics": 207, "../lib/supports-flexbox": 220, "../lib/wait": 223, "./base-view": 259, "./delete-confirmation-view": 260, "./payment-methods-view": 263, "./payment-options-view": 264, "./payment-sheet-views": 269 }], 262: [function(require2, module3, exports3) {
        "use strict";
        var analytics = require2("../lib/analytics");
        var BaseView = require2("./base-view");
        var constants = require2("../constants");
        var addSelectionEventHandler = require2("../lib/add-selection-event-handler");
        var paymentMethodHTML = '<div class="braintree-method__icon-container braintree-method__delete-container">\n  <div class="braintree-method__icon braintree-method__delete">\n    <svg width="48" height="29">\n      <use xlink:href="#iconX"></use>\n    </svg>\n  </div>\n</div>\n\n<div class="braintree-method__logo">\n  <svg width="40" height="24" class="@CLASSNAME">\n    <use xlink:href="#@ICON"></use>\n  </svg>\n</div>\n\n<div class="braintree-method__label">@TITLE<br><div class="braintree-method__label--small">@SUBTITLE</div></div>\n\n<div class="braintree-method__icon-container braintree-method__check-container">\n  <div class="braintree-method__icon braintree-method__check">\n    <svg height="100%" width="100%">\n      <use xlink:href="#iconCheck"></use>\n    </svg>\n  </div>\n</div>\n';
        function PaymentMethodView() {
          BaseView.apply(this, arguments);
          this._initialize();
        }
        PaymentMethodView.prototype = Object.create(BaseView.prototype);
        PaymentMethodView.prototype.constructor = PaymentMethodView;
        PaymentMethodView.prototype._initialize = function() {
          var endingInText;
          var html = paymentMethodHTML;
          var paymentMethodCardTypes = constants.paymentMethodCardTypes;
          var paymentMethodTypes = constants.paymentMethodTypes;
          this.element = document.createElement("div");
          this.element.className = "braintree-method";
          this.element.setAttribute("tabindex", "0");
          this.element.setAttribute("role", "button");
          addSelectionEventHandler(this.element, (function() {
            if (this.model.isInEditMode()) {
              this._selectDelete();
            } else {
              this._choosePaymentMethod();
            }
          }).bind(this));
          switch (this.paymentMethod.type) {
            case paymentMethodTypes.applePay:
              html = html.replace(/@ICON/g, "logoApplePay").replace(/@CLASSNAME/g, "").replace(/@TITLE/g, this.strings["Apple Pay"]).replace(/@SUBTITLE/g, "");
              break;
            case paymentMethodTypes.card:
              endingInText = this.strings.endingIn.replace("{{lastFourCardDigits}}", this.paymentMethod.details.lastFour);
              html = html.replace(/@ICON/g, "icon-" + paymentMethodCardTypes[this.paymentMethod.details.cardType]).replace(/@CLASSNAME/g, " braintree-icon--bordered").replace(/@TITLE/g, endingInText).replace(/@SUBTITLE/g, this.strings[this.paymentMethod.details.cardType]);
              break;
            case paymentMethodTypes.googlePay:
              html = html.replace(/@ICON/g, "logoGooglePay").replace(/@CLASSNAME/g, "").replace(/@TITLE/g, this.strings["Google Pay"]).replace(/@SUBTITLE/g, "");
              break;
            case paymentMethodTypes.paypal:
              html = html.replace(/@ICON/g, "logoPayPal").replace(/@CLASSNAME/g, "").replace(/@TITLE/g, this.paymentMethod.details.email).replace(/@SUBTITLE/g, this.strings.PayPal);
              break;
            case paymentMethodTypes.venmo:
              html = html.replace(/@ICON/g, "logoVenmo").replace(/@CLASSNAME/g, "").replace(/@TITLE/g, this.paymentMethod.details.username).replace(/@SUBTITLE/g, this.strings.Venmo);
              break;
            default:
              break;
          }
          this.element.innerHTML = html;
          this.checkMark = this.element.querySelector(".braintree-method__check-container");
        };
        PaymentMethodView.prototype.setActive = function(isActive) {
          setTimeout((function() {
            this.element.classList.toggle("braintree-method--active", isActive);
          }).bind(this), 0);
        };
        PaymentMethodView.prototype.enableEditMode = function() {
          this.checkMark.classList.add("braintree-hidden");
          if (this.paymentMethod.hasSubscription) {
            this.element.classList.add("braintree-method--disabled");
          }
        };
        PaymentMethodView.prototype.disableEditMode = function() {
          this.checkMark.classList.remove("braintree-hidden");
          this.element.classList.remove("braintree-method--disabled");
        };
        PaymentMethodView.prototype.teardown = function() {
          if (this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
          }
        };
        PaymentMethodView.prototype._choosePaymentMethod = function() {
          if (this.paymentMethod.vaulted) {
            analytics.sendEvent(this.client, "vaulted-" + constants.analyticsKinds[this.paymentMethod.type] + ".select");
          }
          this.model.changeActivePaymentMethod(this.paymentMethod);
        };
        PaymentMethodView.prototype._selectDelete = function() {
          this.model.confirmPaymentMethodDeletion(this.paymentMethod);
        };
        module3.exports = PaymentMethodView;
      }, { "../constants": 202, "../lib/add-selection-event-handler": 206, "../lib/analytics": 207, "./base-view": 259 }], 263: [function(require2, module3, exports3) {
        "use strict";
        var BaseView = require2("./base-view");
        var PaymentMethodView = require2("./payment-method-view");
        var DropinError = require2("../lib/dropin-error");
        var errors = require2("../constants").errors;
        var addSelectionEventHandler = require2("../lib/add-selection-event-handler");
        var PAYMENT_METHOD_TYPE_TO_TRANSLATION_STRING = {
          CreditCard: "Card",
          PayPalAccount: "PayPal",
          ApplePayCard: "Apple Pay",
          AndroidPayCard: "Google Pay",
          VenmoAccount: "Venmo"
        };
        function PaymentMethodsView() {
          BaseView.apply(this, arguments);
          this._initialize();
        }
        PaymentMethodsView.prototype = Object.create(BaseView.prototype);
        PaymentMethodsView.prototype.constructor = PaymentMethodsView;
        PaymentMethodsView.ID = PaymentMethodsView.prototype.ID = "methods";
        PaymentMethodsView.prototype._initialize = function() {
          this.views = [];
          this.container = this.getElementById("methods-container");
          this._headingLabel = this.getElementById("methods-label");
          this._editButton = this.getElementById("methods-edit");
          this.model.on("addPaymentMethod", this._addPaymentMethod.bind(this));
          this.model.on("changeActivePaymentMethod", this._changeActivePaymentMethodView.bind(this));
          this.model.on("refreshPaymentMethods", this.refreshPaymentMethods.bind(this));
          this.refreshPaymentMethods();
          if (this.model.merchantConfiguration.vaultManager) {
            this.model.on("removePaymentMethod", this._removePaymentMethod.bind(this));
            addSelectionEventHandler(this._editButton, (function() {
              if (this.model.isInEditMode()) {
                this.model.disableEditMode();
              } else {
                this.model.enableEditMode();
              }
            }).bind(this));
            this._editButton.classList.remove("braintree-hidden");
          }
        };
        PaymentMethodsView.prototype.removeActivePaymentMethod = function() {
          if (!this.activeMethodView) {
            return;
          }
          this.activeMethodView.setActive(false);
          this.activeMethodView = null;
          this._headingLabel.classList.add("braintree-no-payment-method-selected");
        };
        PaymentMethodsView.prototype._getPaymentMethodString = function() {
          var stringKey, paymentMethodTypeString;
          if (!this.activeMethodView) {
            return "";
          }
          stringKey = PAYMENT_METHOD_TYPE_TO_TRANSLATION_STRING[this.activeMethodView.paymentMethod.type];
          paymentMethodTypeString = this.strings[stringKey];
          return this.strings.payingWith.replace("{{paymentSource}}", paymentMethodTypeString);
        };
        PaymentMethodsView.prototype.enableEditMode = function() {
          this.container.classList.add("braintree-methods--edit");
          this._editButton.innerHTML = this.strings.deleteCancelButton;
          this._headingLabel.innerHTML = this.strings.editPaymentMethods;
          this.views.forEach(function(view) {
            view.enableEditMode();
          });
        };
        PaymentMethodsView.prototype.disableEditMode = function() {
          this.container.classList.remove("braintree-methods--edit");
          this._editButton.innerHTML = this.strings.edit;
          this._headingLabel.innerHTML = this._getPaymentMethodString();
          this.views.forEach(function(view) {
            view.disableEditMode();
          });
        };
        PaymentMethodsView.prototype._addPaymentMethod = function(paymentMethod) {
          var paymentMethodView = new PaymentMethodView({
            model: this.model,
            paymentMethod,
            client: this.client,
            strings: this.strings
          });
          if (this.model.isGuestCheckout && this.container.firstChild) {
            this.views[0].teardown();
            this.views.pop();
          }
          if (this.container.firstChild) {
            this.container.insertBefore(paymentMethodView.element, this.container.firstChild);
          } else {
            this.container.appendChild(paymentMethodView.element);
          }
          this.views.push(paymentMethodView);
        };
        PaymentMethodsView.prototype._removePaymentMethod = function(paymentMethod) {
          var i;
          for (i = 0; i < this.views.length; i++) {
            if (this.views[i].paymentMethod === paymentMethod) {
              this.views[i].teardown();
              this._headingLabel.innerHTML = "&nbsp;";
              this.views.splice(i, 1);
              break;
            }
          }
        };
        PaymentMethodsView.prototype._changeActivePaymentMethodView = function(paymentMethod) {
          var i;
          var previousActiveMethodView = this.activeMethodView;
          for (i = 0; i < this.views.length; i++) {
            if (this.views[i].paymentMethod === paymentMethod) {
              this.activeMethodView = this.views[i];
              this._headingLabel.innerHTML = this._getPaymentMethodString();
              break;
            }
          }
          if (previousActiveMethodView) {
            previousActiveMethodView.setActive(false);
          }
          this.activeMethodView.setActive(true);
          this._headingLabel.classList.remove("braintree-no-payment-method-selected");
        };
        PaymentMethodsView.prototype.requestPaymentMethod = function() {
          if (!this.activeMethodView || this.model.isInEditMode()) {
            return Promise.reject(new DropinError(errors.NO_PAYMENT_METHOD_ERROR));
          }
          return Promise.resolve(this.activeMethodView.paymentMethod);
        };
        PaymentMethodsView.prototype.refreshPaymentMethods = function() {
          var i;
          var paymentMethods = this.model.getPaymentMethods();
          this.views.forEach(function(view) {
            view.teardown();
          });
          this.views = [];
          for (i = paymentMethods.length - 1; i >= 0; i--) {
            this._addPaymentMethod(paymentMethods[i]);
          }
        };
        module3.exports = PaymentMethodsView;
      }, { "../constants": 202, "../lib/add-selection-event-handler": 206, "../lib/dropin-error": 212, "./base-view": 259, "./payment-method-view": 262 }], 264: [function(require2, module3, exports3) {
        "use strict";
        var analytics = require2("../lib/analytics");
        var addSelectionEventHandler = require2("../lib/add-selection-event-handler");
        var BaseView = require2("./base-view");
        var paymentOptionIDs = require2("../constants").paymentOptionIDs;
        var paymentMethodOptionHTML = '<div class="braintree-option__logo">\n  <svg width="48" height="29" class="@CLASSNAME">\n    <use xlink:href="#@ICON"></use>\n  </svg>\n</div>\n\n<div class="braintree-option__label" aria-label="@OPTION_LABEL">\n  @OPTION_TITLE\n  <div class="braintree-option__disabled-message"></div>\n</div>\n';
        function PaymentOptionsView() {
          BaseView.apply(this, arguments);
          this._initialize();
        }
        PaymentOptionsView.prototype = Object.create(BaseView.prototype);
        PaymentOptionsView.prototype.constructor = PaymentOptionsView;
        PaymentOptionsView.ID = PaymentOptionsView.prototype.ID = "options";
        PaymentOptionsView.prototype._initialize = function() {
          this.container = this.getElementById("payment-options-container");
          this.elements = {};
          this.model.supportedPaymentOptions.forEach((function(paymentOptionID) {
            this._addPaymentOption(paymentOptionID);
          }).bind(this));
        };
        PaymentOptionsView.prototype._addPaymentOption = function(paymentOptionID) {
          var paymentSource;
          var div = document.createElement("div");
          var html = paymentMethodOptionHTML;
          var clickHandler = (function clickHandler2() {
            this.mainView.setPrimaryView(paymentOptionID);
            this.model.selectPaymentOption(paymentOptionID);
            analytics.sendEvent(this.client, "selected." + paymentOptionIDs[paymentOptionID]);
          }).bind(this);
          div.className = "braintree-option braintree-option__" + paymentOptionID;
          div.setAttribute("tabindex", "0");
          div.setAttribute("role", "button");
          switch (paymentOptionID) {
            case paymentOptionIDs.applePay:
              paymentSource = this.strings["Apple Pay"];
              html = html.replace(/@ICON/g, "logoApplePay");
              break;
            case paymentOptionIDs.card:
              paymentSource = this.strings.Card;
              html = html.replace(/@ICON/g, "iconCardFront");
              html = html.replace(/@CLASSNAME/g, "braintree-icon--bordered");
              break;
            case paymentOptionIDs.googlePay:
              paymentSource = this.strings["Google Pay"];
              html = html.replace(/@ICON/g, "logoGooglePay");
              break;
            case paymentOptionIDs.paypal:
              paymentSource = this.strings.PayPal;
              html = html.replace(/@ICON/g, "logoPayPal");
              break;
            case paymentOptionIDs.paypalCredit:
              paymentSource = this.strings["PayPal Credit"];
              html = html.replace(/@ICON/g, "logoPayPalCredit");
              break;
            case paymentOptionIDs.venmo:
              paymentSource = this.strings.Venmo;
              html = html.replace(/@ICON/g, "logoVenmo");
              break;
            default:
              break;
          }
          html = html.replace(/@OPTION_LABEL/g, this._generateOptionLabel(paymentSource));
          html = html.replace(/@OPTION_TITLE/g, paymentSource);
          html = html.replace(/@CLASSNAME/g, "");
          div.innerHTML = html;
          addSelectionEventHandler(div, clickHandler);
          this.container.appendChild(div);
          this.elements[paymentOptionID] = {
            div,
            clickHandler
          };
        };
        PaymentOptionsView.prototype._generateOptionLabel = function(paymentSourceString) {
          return this.strings.payingWith.replace("{{paymentSource}}", paymentSourceString);
        };
        module3.exports = PaymentOptionsView;
      }, { "../constants": 202, "../lib/add-selection-event-handler": 206, "../lib/analytics": 207, "./base-view": 259 }], 265: [function(require2, module3, exports3) {
        (function(global2) {
          (function() {
            "use strict";
            var assign = require2("../../lib/assign").assign;
            var BaseView = require2("../base-view");
            var btApplePay = require2("braintree-web/apple-pay");
            var DropinError = require2("../../lib/dropin-error");
            var isHTTPS = require2("../../lib/is-https");
            var paymentOptionIDs = require2("../../constants").paymentOptionIDs;
            var DEFAULT_APPLE_PAY_SESSION_VERSION = 2;
            function ApplePayView() {
              BaseView.apply(this, arguments);
            }
            ApplePayView.prototype = Object.create(BaseView.prototype);
            ApplePayView.prototype.constructor = ApplePayView;
            ApplePayView.ID = ApplePayView.prototype.ID = paymentOptionIDs.applePay;
            ApplePayView.prototype.initialize = function() {
              var self2 = this;
              self2.applePayConfiguration = assign({}, self2.model.merchantConfiguration.applePay);
              self2.applePaySessionVersion = self2.applePayConfiguration.applePaySessionVersion || DEFAULT_APPLE_PAY_SESSION_VERSION;
              delete self2.applePayConfiguration.applePaySessionVersion;
              return btApplePay.create({ client: this.client }).then(function(applePayInstance) {
                self2.buttonDiv = self2.getElementById("apple-pay-button");
                self2.applePayInstance = applePayInstance;
                self2.buttonDiv.onclick = self2._showPaymentSheet.bind(self2);
                self2.buttonDiv.style["-apple-pay-button-style"] = self2.model.merchantConfiguration.applePay.buttonStyle || "black";
                self2.model.asyncDependencyReady(ApplePayView.ID);
              }).catch(function(err) {
                self2.model.asyncDependencyFailed({
                  view: self2.ID,
                  error: new DropinError(err)
                });
              });
            };
            ApplePayView.prototype.requestPaymentMethod = function() {
              this.model.reportError("applePayButtonMustBeUsed");
              return BaseView.prototype.requestPaymentMethod.call(this);
            };
            ApplePayView.prototype._showPaymentSheet = function() {
              var self2 = this;
              var request, session;
              if (this._sessionInProgress) {
                return false;
              }
              this._sessionInProgress = true;
              request = this.applePayInstance.createPaymentRequest(this.applePayConfiguration.paymentRequest);
              session = new global2.ApplePaySession(self2.applePaySessionVersion, request);
              session.onvalidatemerchant = function(event) {
                self2.applePayInstance.performValidation({
                  validationURL: event.validationURL,
                  displayName: self2.applePayConfiguration.displayName
                }).then(function(validationData) {
                  session.completeMerchantValidation(validationData);
                }).catch(function(validationErr) {
                  self2.model.reportError(validationErr);
                  self2._sessionInProgress = false;
                  session.abort();
                });
              };
              session.onpaymentauthorized = function(event) {
                self2.applePayInstance.tokenize({
                  token: event.payment.token
                }).then(function(payload) {
                  self2._sessionInProgress = false;
                  session.completePayment(global2.ApplePaySession.STATUS_SUCCESS);
                  payload.rawPaymentData = event.payment;
                  self2.model.addPaymentMethod(payload);
                }).catch(function(tokenizeErr) {
                  self2.model.reportError(tokenizeErr);
                  self2._sessionInProgress = false;
                  session.completePayment(global2.ApplePaySession.STATUS_FAILURE);
                });
              };
              session.oncancel = function() {
                self2._sessionInProgress = false;
              };
              session.begin();
              return false;
            };
            ApplePayView.prototype.updateConfiguration = function(key, value) {
              this.applePayConfiguration[key] = value;
            };
            ApplePayView.isEnabled = function(options) {
              var gatewayConfiguration = options.client.getConfiguration().gatewayConfiguration;
              var applePayEnabled = gatewayConfiguration.applePayWeb && Boolean(options.merchantConfiguration.applePay);
              var applePaySessionVersion = options.merchantConfiguration.applePay && options.merchantConfiguration.applePay.applePaySessionVersion;
              var applePayBrowserSupported;
              applePaySessionVersion = applePaySessionVersion || DEFAULT_APPLE_PAY_SESSION_VERSION;
              if (!applePayEnabled) {
                return Promise.resolve(false);
              }
              applePayBrowserSupported = global2.ApplePaySession && isHTTPS.isHTTPS();
              if (!applePayBrowserSupported) {
                return Promise.resolve(false);
              }
              if (!global2.ApplePaySession.supportsVersion(applePaySessionVersion)) {
                return Promise.resolve(false);
              }
              return Promise.resolve(Boolean(global2.ApplePaySession.canMakePayments()));
            };
            module3.exports = ApplePayView;
          }).call(this);
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, { "../../constants": 202, "../../lib/assign": 208, "../../lib/dropin-error": 212, "../../lib/is-https": 215, "../base-view": 259, "braintree-web/apple-pay": 49 }], 266: [function(require2, module3, exports3) {
        (function(global2) {
          (function() {
            "use strict";
            var analytics = require2("../../lib/analytics");
            var assign = require2("../../lib/assign").assign;
            var browserDetection = require2("../../lib/browser-detection");
            var BaseView = require2("../base-view");
            var btPaypal = require2("braintree-web/paypal-checkout");
            var DropinError = require2("../../lib/dropin-error");
            var constants = require2("../../constants");
            var assets = require2("@braintree/asset-loader");
            var translations = require2("../../translations").fiveCharacterLocales;
            var ASYNC_DEPENDENCY_TIMEOUT = 3e4;
            var READ_ONLY_CONFIGURATION_OPTIONS = ["offerCredit", "locale"];
            var DEFAULT_CHECKOUTJS_LOG_LEVEL = "warn";
            var paypalScriptLoadInProgressPromise;
            function BasePayPalView() {
              BaseView.apply(this, arguments);
            }
            BasePayPalView.prototype = Object.create(BaseView.prototype);
            BasePayPalView.prototype.initialize = function() {
              var asyncDependencyTimeoutHandler;
              var isCredit = Boolean(this._isPayPalCredit);
              var setupComplete = false;
              var self2 = this;
              var paypalType = isCredit ? "paypalCredit" : "paypal";
              var paypalConfiguration = this.model.merchantConfiguration[paypalType];
              var dropinWrapperId = "#braintree--dropin__" + this.model.componentID;
              this.paypalConfiguration = assign({}, paypalConfiguration);
              asyncDependencyTimeoutHandler = setTimeout(function() {
                self2.model.asyncDependencyFailed({
                  view: self2.ID,
                  error: new DropinError("There was an error connecting to PayPal.")
                });
              }, ASYNC_DEPENDENCY_TIMEOUT);
              return btPaypal.create({ client: this.client }).then(function(paypalInstance) {
                var checkoutJSConfiguration;
                var buttonSelector = '[data-braintree-id="paypal-button"]';
                var environment = self2.client.getConfiguration().gatewayConfiguration.environment === "production" ? "production" : "sandbox";
                var locale = self2.model.merchantConfiguration.locale;
                self2.paypalInstance = paypalInstance;
                self2.paypalConfiguration.offerCredit = Boolean(isCredit);
                checkoutJSConfiguration = {
                  env: environment,
                  style: self2.paypalConfiguration.buttonStyle || {},
                  commit: self2.paypalConfiguration.commit,
                  payment: function() {
                    return paypalInstance.createPayment(self2.paypalConfiguration).catch(reportError);
                  },
                  onAuthorize: function(data) {
                    var shouldNotVault = self2.paypalConfiguration.vault && self2.paypalConfiguration.vault.vaultPayPal === false;
                    if (shouldNotVault) {
                      data.vault = false;
                    }
                    return paypalInstance.tokenizePayment(data).then(function(tokenizePayload) {
                      if (!shouldNotVault && self2.paypalConfiguration.flow === "vault" && !self2.model.isGuestCheckout) {
                        tokenizePayload.vaulted = true;
                      }
                      self2.model.addPaymentMethod(tokenizePayload);
                    }).catch(reportError);
                  },
                  onError: reportError
                };
                if (locale && locale in translations) {
                  self2.paypalConfiguration.locale = locale;
                  checkoutJSConfiguration.locale = locale;
                }
                checkoutJSConfiguration.funding = {
                  disallowed: []
                };
                Object.keys(global2.paypal.FUNDING).forEach(function(key) {
                  if (key === "PAYPAL" || key === "CREDIT") {
                    return;
                  }
                  checkoutJSConfiguration.funding.disallowed.push(global2.paypal.FUNDING[key]);
                });
                if (isCredit) {
                  buttonSelector = '[data-braintree-id="paypal-credit-button"]';
                  checkoutJSConfiguration.style.label = "credit";
                } else {
                  checkoutJSConfiguration.funding.disallowed.push(global2.paypal.FUNDING.CREDIT);
                }
                buttonSelector = dropinWrapperId + " " + buttonSelector;
                return global2.paypal.Button.render(checkoutJSConfiguration, buttonSelector).then(function() {
                  self2.model.asyncDependencyReady(paypalType);
                  setupComplete = true;
                  clearTimeout(asyncDependencyTimeoutHandler);
                });
              }).catch(reportError);
              function reportError(err) {
                if (setupComplete) {
                  self2.model.reportError(err);
                } else {
                  self2.model.asyncDependencyFailed({
                    view: self2.ID,
                    error: err
                  });
                  clearTimeout(asyncDependencyTimeoutHandler);
                }
              }
            };
            BasePayPalView.prototype.requestPaymentMethod = function() {
              this.model.reportError("paypalButtonMustBeUsed");
              return BaseView.prototype.requestPaymentMethod.call(this);
            };
            BasePayPalView.prototype.updateConfiguration = function(key, value) {
              if (READ_ONLY_CONFIGURATION_OPTIONS.indexOf(key) === -1) {
                this.paypalConfiguration[key] = value;
              }
            };
            BasePayPalView.isEnabled = function(options) {
              var gatewayConfiguration = options.client.getConfiguration().gatewayConfiguration;
              var merchantPayPalConfig = options.merchantConfiguration.paypal || options.merchantConfiguration.paypalCredit;
              if (!gatewayConfiguration.paypalEnabled) {
                return Promise.resolve(false);
              }
              if (browserDetection.isIe9() || browserDetection.isIe10()) {
                analytics.sendEvent(options.client, options.viewID + ".checkout.js-browser-not-supported");
                return Promise.resolve(false);
              }
              if (global2.paypal && global2.paypal.Button) {
                return Promise.resolve(true);
              }
              if (paypalScriptLoadInProgressPromise) {
                return paypalScriptLoadInProgressPromise;
              }
              paypalScriptLoadInProgressPromise = assets.loadScript({
                src: constants.CHECKOUT_JS_SOURCE,
                id: constants.PAYPAL_CHECKOUT_SCRIPT_ID,
                dataAttributes: {
                  "log-level": merchantPayPalConfig.logLevel || DEFAULT_CHECKOUTJS_LOG_LEVEL
                }
              }).then(function() {
                return Promise.resolve(true);
              }).catch(function() {
                return Promise.resolve(false);
              }).then(function(result) {
                paypalScriptLoadInProgressPromise = null;
                return Promise.resolve(result);
              });
              return paypalScriptLoadInProgressPromise;
            };
            module3.exports = BasePayPalView;
          }).call(this);
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, { "../../constants": 202, "../../lib/analytics": 207, "../../lib/assign": 208, "../../lib/browser-detection": 209, "../../lib/dropin-error": 212, "../../translations": 242, "../base-view": 259, "@braintree/asset-loader": 1, "braintree-web/paypal-checkout": 128 }], 267: [function(require2, module3, exports3) {
        "use strict";
        var assign = require2("../../lib/assign").assign;
        var BaseView = require2("../base-view");
        var constants = require2("../../constants");
        var DropinError = require2("../../lib/dropin-error");
        var hostedFields = require2("braintree-web/hosted-fields");
        var isUtf8 = require2("../../lib/is-utf-8");
        var transitionHelper = require2("../../lib/transition-helper");
        var cardIconHTML = '<div data-braintree-id="visa-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-visa"></use>\n    </svg>\n</div>\n<div data-braintree-id="master-card-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-master-card"></use>\n    </svg>\n</div>\n<div data-braintree-id="unionpay-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-unionpay"></use>\n    </svg>\n</div>\n<div data-braintree-id="american-express-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-american-express"></use>\n    </svg>\n</div>\n<div data-braintree-id="jcb-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-jcb"></use>\n    </svg>\n</div>\n<!--Elo, Hiper, and Hipercard currently use the generic icon.\nThe  braintree-hidden class should be removed here once we get icons for these cards-->\n<div data-braintree-id="elo-card-icon" class="braintree-sheet__card-icon braintree-hidden">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-elo"></use>\n    </svg>\n</div>\n<div data-braintree-id="hiper-card-icon" class="braintree-sheet__card-icon braintree-hidden">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-hiper"></use>\n    </svg>\n</div>\n<div data-braintree-id="hipercard-card-icon" class="braintree-sheet__card-icon braintree-hidden">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-hipercard"></use>\n    </svg>\n</div>\n<!-- Remove braintree-hidden class when supportedCardType accurately indicates Diners Club support -->\n<div data-braintree-id="diners-club-card-icon" class="braintree-sheet__card-icon braintree-hidden">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-diners-club"></use>\n    </svg>\n</div>\n<div data-braintree-id="discover-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-discover"></use>\n    </svg>\n</div>\n<div data-braintree-id="maestro-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-maestro"></use>\n    </svg>\n</div>\n';
        var PASSTHROUGH_EVENTS = [
          "empty",
          // TODO should intercept this event and call tokenize
          "inputSubmitRequest",
          "binAvailable"
        ];
        var HOSTED_FIELDS = [
          "number",
          "expirationDate",
          "cvv",
          "postalCode",
          "cardholderName"
        ];
        function CardView() {
          BaseView.apply(this, arguments);
        }
        CardView.prototype = Object.create(BaseView.prototype);
        CardView.prototype.constructor = CardView;
        CardView.ID = CardView.prototype.ID = constants.paymentOptionIDs.card;
        CardView.prototype.initialize = function() {
          var cvvFieldGroup, postalCodeFieldGroup, hfOptions;
          var cardholderNameGroup = this.getElementById("cardholder-name-field-group");
          if (this.model.merchantConfiguration.card && this.model.merchantConfiguration.card !== true) {
            this.merchantConfiguration = this.model.merchantConfiguration.card;
          } else {
            this.merchantConfiguration = {};
          }
          this.merchantConfiguration.vault = this.merchantConfiguration.vault || {};
          this.hasCardholderName = Boolean(this.merchantConfiguration.cardholderName);
          this.cardholderNameRequired = this.hasCardholderName && this.merchantConfiguration.cardholderName.required === true;
          hfOptions = this._generateHostedFieldsOptions();
          this._renderCardIcons();
          this._hideUnsupportedCardIcons();
          this.hasCVV = hfOptions.fields.cvv;
          this.saveCardInput = this.getElementById("save-card-input");
          this.cardNumberIcon = this.getElementById("card-number-icon");
          this.cardNumberIconSvg = this.getElementById("card-number-icon-svg");
          this.cvvIcon = this.getElementById("cvv-icon");
          this.cvvIconSvg = this.getElementById("cvv-icon-svg");
          this.cvvLabelDescriptor = this.getElementById("cvv-label-descriptor");
          this.fieldErrors = {};
          if (!this.hasCardholderName) {
            cardholderNameGroup.parentNode.removeChild(cardholderNameGroup);
            HOSTED_FIELDS = HOSTED_FIELDS.filter(function(field) {
              return field !== "cardholderName";
            });
          }
          if (!this.hasCVV) {
            cvvFieldGroup = this.getElementById("cvv-field-group");
            cvvFieldGroup.parentNode.removeChild(cvvFieldGroup);
            HOSTED_FIELDS = HOSTED_FIELDS.filter(function(field) {
              return field !== "cvv";
            });
          }
          if (!hfOptions.fields.postalCode) {
            postalCodeFieldGroup = this.getElementById("postal-code-field-group");
            postalCodeFieldGroup.parentNode.removeChild(postalCodeFieldGroup);
            HOSTED_FIELDS = HOSTED_FIELDS.filter(function(field) {
              return field !== "postalCode";
            });
          }
          if (!this.model.isGuestCheckout && this.merchantConfiguration.vault.allowVaultCardOverride === true) {
            this.getElementById("save-card-field-group").classList.remove("braintree-hidden");
          }
          if (this.merchantConfiguration.vault.vaultCard === false) {
            this.saveCardInput.checked = false;
          }
          return hostedFields.create(hfOptions).then((function(hostedFieldsInstance) {
            this.hostedFieldsInstance = hostedFieldsInstance;
            this.hostedFieldsInstance.on("blur", this._onBlurEvent.bind(this));
            this.hostedFieldsInstance.on("cardTypeChange", this._onCardTypeChangeEvent.bind(this));
            this.hostedFieldsInstance.on("focus", this._onFocusEvent.bind(this));
            this.hostedFieldsInstance.on("notEmpty", this._onNotEmptyEvent.bind(this));
            this.hostedFieldsInstance.on("validityChange", this._onValidityChangeEvent.bind(this));
            HOSTED_FIELDS.forEach((function(hostedField) {
              this.hostedFieldsInstance.setAttribute({
                field: hostedField,
                attribute: "aria-required",
                value: true
              });
            }).bind(this));
            PASSTHROUGH_EVENTS.forEach((function(eventName) {
              this.hostedFieldsInstance.on(eventName, (function(event) {
                this.model._emit("card:" + eventName, event);
              }).bind(this));
            }).bind(this));
            this.model.asyncDependencyReady(CardView.ID);
          }).bind(this)).catch((function(err) {
            this.model.asyncDependencyFailed({
              view: this.ID,
              error: err
            });
          }).bind(this));
        };
        CardView.prototype._sendRequestableEvent = function() {
          if (!this._isTokenizing) {
            this.model.setPaymentMethodRequestable({
              isRequestable: this._validateForm(),
              type: constants.paymentMethodTypes.card
            });
          }
        };
        CardView.prototype._renderCardIcons = function() {
          var overrides = this.merchantConfiguration.overrides;
          var cardIcons = this.getElementById("card-view-icons");
          var supportedCardBrands = overrides && overrides.fields && overrides.fields.number && overrides.fields.number.supportedCardBrands;
          cardIcons.innerHTML = cardIconHTML;
          if (supportedCardBrands) {
            Object.keys(supportedCardBrands).forEach(function(cardBrand) {
              var value = supportedCardBrands[cardBrand];
              var selector, iconDiv;
              if (value === false) {
                selector = 'div[data-braintree-id="' + constants.cardTypeIcons[cardBrand] + '-card-icon"]';
                iconDiv = document.querySelector(selector);
                hideCardIcon(iconDiv);
              }
            });
          }
        };
        CardView.prototype._generateHostedFieldsOptions = function() {
          var challenges = this.client.getConfiguration().gatewayConfiguration.challenges;
          var hasCVVChallenge = challenges.indexOf("cvv") !== -1;
          var hasPostalCodeChallenge = challenges.indexOf("postal_code") !== -1;
          var overrides = this.merchantConfiguration.overrides;
          var options = {
            client: this.client,
            fields: {
              cardholderName: {
                container: this._getFieldContainer("cardholder-name"),
                placeholder: this.strings.cardholderNamePlaceholder
              },
              number: {
                container: this._getFieldContainer("number"),
                placeholder: generateCardNumberPlaceholder()
              },
              expirationDate: {
                container: this._getFieldContainer("expiration"),
                placeholder: this.strings.expirationDatePlaceholder
              },
              cvv: {
                container: this._getFieldContainer("cvv"),
                placeholder: addBullets(3)
              },
              postalCode: {
                container: this._getFieldContainer("postal-code")
              }
            },
            styles: {
              input: {
                "font-size": "16px",
                "font-family": '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                color: "#000"
              },
              ":focus": {
                color: "black"
              },
              "::-webkit-input-placeholder": {
                color: "#6a6a6a"
              },
              ":-moz-placeholder": {
                color: "#6a6a6a"
              },
              "::-moz-placeholder": {
                color: "#6a6a6a"
              },
              ":-ms-input-placeholder ": {
                color: "#6a6a6a"
              },
              "input::-ms-clear": {
                color: "transparent"
              }
            }
          };
          if (!this.hasCardholderName) {
            delete options.fields.cardholderName;
          }
          if (!hasCVVChallenge) {
            delete options.fields.cvv;
          }
          if (!hasPostalCodeChallenge) {
            delete options.fields.postalCode;
          }
          if (!overrides) {
            return options;
          }
          if (overrides.fields) {
            if (overrides.fields.cvv && typeof overrides.fields.cvv.placeholder !== "undefined") {
              this._hasCustomCVVPlaceholder = true;
            }
            Object.keys(overrides.fields).forEach(function(field) {
              if ((field === "cvv" || field === "postalCode") && overrides.fields[field] === null) {
                delete options.fields[field];
                return;
              }
              if (!options.fields[field]) {
                return;
              }
              assign(options.fields[field], overrides.fields[field], {
                selector: options.fields[field].selector
              });
            });
          }
          if (overrides.styles) {
            Object.keys(overrides.styles).forEach(function(style) {
              if (overrides.styles[style] === null) {
                delete options.styles[style];
                return;
              } else if (typeof overrides.styles[style] === "string") {
                options.styles[style] = overrides.styles[style];
                return;
              }
              normalizeStyles(overrides.styles[style]);
              options.styles[style] = options.styles[style] || {};
              assign(options.styles[style], overrides.styles[style]);
            });
          }
          return options;
        };
        CardView.prototype._validateForm = function(showFieldErrors) {
          var card, cardType, cardTypeSupported, state;
          var isValid = true;
          var supportedCardTypes = this.client.getConfiguration().gatewayConfiguration.creditCards.supportedCardTypes;
          if (!this.hostedFieldsInstance) {
            return false;
          }
          state = this.hostedFieldsInstance.getState();
          Object.keys(state.fields).forEach((function(key) {
            var field = state.fields[key];
            if (!showFieldErrors && !isValid) {
              return;
            }
            if (field.isEmpty) {
              if (!this.cardholderNameRequired && key === "cardholderName") {
                isValid = true;
              } else {
                isValid = false;
                if (showFieldErrors) {
                  this.showFieldError(key, this.strings["fieldEmptyFor" + capitalize(key)]);
                }
              }
            } else if (!field.isValid) {
              isValid = false;
              if (showFieldErrors) {
                this.showFieldError(key, this.strings["fieldInvalidFor" + capitalize(key)]);
              }
            }
          }).bind(this));
          if (state.fields.number.isValid) {
            card = state.cards[0];
            cardType = card && constants.configurationCardTypes[card.type];
            cardTypeSupported = cardType && supportedCardTypes.indexOf(cardType) !== -1;
            if (!cardTypeSupported) {
              isValid = false;
              if (showFieldErrors) {
                this.showFieldError("number", this.strings.unsupportedCardTypeError);
              }
            }
          }
          return isValid;
        };
        CardView.prototype.getPaymentMethod = function() {
          var formIsValid = this._validateForm();
          if (formIsValid) {
            return {
              type: constants.paymentMethodTypes.card
            };
          }
        };
        CardView.prototype.tokenize = function() {
          var transitionCallback;
          var self2 = this;
          var state = self2.hostedFieldsInstance.getState();
          var tokenizeOptions = {
            vault: this._shouldVault()
          };
          this.model.clearError();
          if (!this._validateForm(true)) {
            self2.model.reportError("hostedFieldsFieldsInvalidError");
            self2.allowUserAction();
            return Promise.reject(new DropinError(constants.errors.NO_PAYMENT_METHOD_ERROR));
          }
          if (!this.cardholderNameRequired && state.fields.cardholderName && state.fields.cardholderName.isEmpty) {
            tokenizeOptions.fieldsToTokenize = Object.keys(state.fields).filter(function(field) {
              return field !== "cardholderName";
            });
          }
          self2._isTokenizing = true;
          return self2.hostedFieldsInstance.tokenize(tokenizeOptions).then(function(payload) {
            var retainCardFields = self2.merchantConfiguration.clearFieldsAfterTokenization === false;
            if (!retainCardFields) {
              Object.keys(state.fields).forEach(function(field) {
                self2.hostedFieldsInstance.clear(field);
              });
            }
            if (self2._shouldVault()) {
              payload.vaulted = true;
            }
            return new Promise(function(resolve) {
              transitionCallback = function() {
                setTimeout(function() {
                  self2.model.addPaymentMethod(payload);
                  resolve(payload);
                  self2.element.classList.remove("braintree-sheet--tokenized");
                }, 0);
              };
              transitionHelper.onTransitionEnd(self2.element, "max-height", transitionCallback);
              setTimeout(function() {
                self2.allowUserAction();
                self2._isTokenizing = false;
              }, constants.CHANGE_ACTIVE_PAYMENT_METHOD_TIMEOUT);
              self2.element.classList.add("braintree-sheet--tokenized");
            });
          }).catch(function(err) {
            self2._isTokenizing = false;
            self2.model.reportError(err);
            self2.allowUserAction();
            return Promise.reject(new DropinError({
              message: constants.errors.NO_PAYMENT_METHOD_ERROR,
              braintreeWebError: err
            }));
          });
        };
        CardView.prototype.showFieldError = function(field, errorMessage) {
          var fieldError;
          var fieldGroup = this.getElementById(camelCaseToKebabCase(field) + "-field-group");
          var input = fieldGroup.querySelector("input");
          if (!this.fieldErrors.hasOwnProperty(field)) {
            this.fieldErrors[field] = this.getElementById(camelCaseToKebabCase(field) + "-field-error");
          }
          fieldGroup.classList.add("braintree-form__field-group--has-error");
          fieldError = this.fieldErrors[field];
          fieldError.innerHTML = errorMessage;
          if (input) {
            input.setAttribute("aria-invalid", true);
          } else {
            this.hostedFieldsInstance.setAttribute({
              field,
              attribute: "aria-invalid",
              value: true
            });
            this.hostedFieldsInstance.setMessage({
              field,
              message: errorMessage
            });
          }
        };
        CardView.prototype.hideFieldError = function(field) {
          var fieldGroup = this.getElementById(camelCaseToKebabCase(field) + "-field-group");
          var input = fieldGroup.querySelector("input");
          if (!this.fieldErrors.hasOwnProperty(field)) {
            this.fieldErrors[field] = this.getElementById(camelCaseToKebabCase(field) + "-field-error");
          }
          fieldGroup.classList.remove("braintree-form__field-group--has-error");
          if (input) {
            input.removeAttribute("aria-invalid");
          } else {
            this.hostedFieldsInstance.removeAttribute({
              field,
              attribute: "aria-invalid"
            });
            this.hostedFieldsInstance.setMessage({
              field,
              message: ""
            });
          }
        };
        CardView.prototype.teardown = function() {
          return this.hostedFieldsInstance.teardown();
        };
        CardView.prototype._shouldVault = function() {
          return !this.model.isGuestCheckout && this.saveCardInput.checked;
        };
        CardView.prototype._getFieldContainer = function(field) {
          if (field === "expiration") {
            field = "expiration-date";
          }
          return this.getElementById(field + "-field-group").querySelector(".braintree-form__hosted-field");
        };
        CardView.prototype._onBlurEvent = function(event) {
          var field = event.fields[event.emittedBy];
          var fieldGroup = this.getElementById(camelCaseToKebabCase(event.emittedBy) + "-field-group");
          fieldGroup.classList.remove("braintree-form__field-group--is-focused");
          if (field.isPotentiallyValid) {
            this.hideFieldError(event.emittedBy);
          }
          if (this._shouldApplyFieldEmptyError(event.emittedBy, field)) {
            this.showFieldError(event.emittedBy, this.strings["fieldEmptyFor" + capitalize(event.emittedBy)]);
          } else if (!field.isEmpty && !field.isValid) {
            this.showFieldError(event.emittedBy, this.strings["fieldInvalidFor" + capitalize(event.emittedBy)]);
          } else if (event.emittedBy === "number" && !this._isCardTypeSupported(event.cards[0])) {
            this.showFieldError("number", this.strings.unsupportedCardTypeError);
          }
          this.model._emit("card:blur", event);
          setTimeout((function() {
            if (this._shouldApplyFieldEmptyError(event.emittedBy, field)) {
              this.showFieldError(event.emittedBy, this.strings["fieldEmptyFor" + capitalize(event.emittedBy)]);
            }
          }).bind(this), 150);
        };
        CardView.prototype._onCardTypeChangeEvent = function(event) {
          var cardType;
          var cardNumberHrefLink = "#iconCardFront";
          var cvvHrefLink = "#iconCVVBack";
          var cvvDescriptor = this.strings.cvvThreeDigitLabelSubheading;
          var cvvPlaceholder = addBullets(3);
          var numberFieldGroup = this.getElementById("number-field-group");
          if (event.cards.length === 1) {
            cardType = event.cards[0].type;
            cardNumberHrefLink = "#icon-" + cardType;
            if (cardType === "american-express") {
              cvvHrefLink = "#iconCVVFront";
              cvvDescriptor = this.strings.cvvFourDigitLabelSubheading;
              cvvPlaceholder = addBullets(4);
            }
            numberFieldGroup.classList.add("braintree-form__field-group--card-type-known");
          } else {
            numberFieldGroup.classList.remove("braintree-form__field-group--card-type-known");
          }
          if (event.emittedBy === "number" && this._isCardTypeSupported(event.cards[0])) {
            this.hideFieldError(event.emittedBy);
          }
          this.cardNumberIconSvg.setAttribute("xlink:href", cardNumberHrefLink);
          if (this.hasCVV) {
            this.cvvIconSvg.setAttribute("xlink:href", cvvHrefLink);
            this.cvvLabelDescriptor.innerHTML = cvvDescriptor;
            if (!this._hasCustomCVVPlaceholder) {
              this.hostedFieldsInstance.setAttribute({
                field: "cvv",
                attribute: "placeholder",
                value: cvvPlaceholder
              });
            }
          }
          this.model._emit("card:cardTypeChange", event);
        };
        CardView.prototype._onFocusEvent = function(event) {
          var fieldGroup = this.getElementById(camelCaseToKebabCase(event.emittedBy) + "-field-group");
          fieldGroup.classList.add("braintree-form__field-group--is-focused");
          this.model._emit("card:focus", event);
        };
        CardView.prototype._onNotEmptyEvent = function(event) {
          this.hideFieldError(event.emittedBy);
          this.model._emit("card:notEmpty", event);
        };
        CardView.prototype._onValidityChangeEvent = function(event) {
          var isValid;
          var field = event.fields[event.emittedBy];
          if (event.emittedBy === "number" && event.cards[0]) {
            isValid = field.isValid && this._isCardTypeSupported(event.cards[0]);
          } else {
            isValid = field.isValid;
          }
          field.container.classList.toggle("braintree-form__field--valid", isValid);
          if (field.isPotentiallyValid) {
            this.hideFieldError(event.emittedBy);
          }
          this._sendRequestableEvent();
          this.model._emit("card:validityChange", event);
        };
        CardView.prototype.requestPaymentMethod = function() {
          this.preventUserAction();
          return this.tokenize();
        };
        CardView.prototype.onSelection = function() {
          if (!this.hostedFieldsInstance) {
            return;
          }
          setTimeout((function() {
            if (this.hasCardholderName) {
              this.hostedFieldsInstance.focus("cardholderName");
            } else {
              this.hostedFieldsInstance.focus("number");
            }
          }).bind(this), 50);
          this._sendRequestableEvent();
        };
        CardView.prototype._hideUnsupportedCardIcons = function() {
          var supportedCardTypes = this.client.getConfiguration().gatewayConfiguration.creditCards.supportedCardTypes;
          Object.keys(constants.configurationCardTypes).forEach((function(paymentMethodCardType) {
            var cardIcon;
            var configurationCardType = constants.configurationCardTypes[paymentMethodCardType];
            if (supportedCardTypes.indexOf(configurationCardType) === -1) {
              cardIcon = this.getElementById(paymentMethodCardType + "-card-icon");
              cardIcon.classList.add("braintree-hidden");
            }
          }).bind(this));
        };
        CardView.prototype._isCardTypeSupported = function(card) {
          var cardType = card && card.type;
          var configurationCardType = constants.configurationCardTypes[cardType];
          var supportedCardTypes = this.client.getConfiguration().gatewayConfiguration.creditCards.supportedCardTypes;
          return supportedCardTypes.indexOf(configurationCardType) !== -1;
        };
        CardView.isEnabled = function(options) {
          var gatewayConfiguration = options.client.getConfiguration().gatewayConfiguration;
          var disabledByMerchant = options.merchantConfiguration.card === false;
          return Promise.resolve(!disabledByMerchant && gatewayConfiguration.creditCards.supportedCardTypes.length > 0);
        };
        CardView.prototype._shouldApplyFieldEmptyError = function(fieldId, field) {
          if (!field.isEmpty) {
            return false;
          }
          if (fieldId === "cardholderName" && !this.cardholderNameRequired) {
            return false;
          }
          return isCardViewElement();
        };
        function hideCardIcon(icon) {
          if (icon) {
            icon.classList.add("braintree-hidden");
          }
        }
        function isCardViewElement() {
          var activeId = document.activeElement && document.activeElement.id;
          var isHostedFieldsElement = document.activeElement instanceof HTMLIFrameElement && activeId.indexOf("braintree-hosted-field") !== -1;
          return isHostedFieldsElement;
        }
        function camelCaseToKebabCase(string) {
          return string.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        }
        function capitalize(string) {
          return string[0].toUpperCase() + string.substr(1);
        }
        function normalizeStyles(styles) {
          Object.keys(styles).forEach(function(style) {
            var transformedKeyName = camelCaseToKebabCase(style);
            styles[transformedKeyName] = styles[style];
          });
        }
        function addBullets(number) {
          var bulletCharacter = isUtf8() ? "•" : "*";
          return Array(number + 1).join(bulletCharacter);
        }
        function generateCardNumberPlaceholder() {
          var four = addBullets(4);
          return [four, four, four, four].join(" ");
        }
        module3.exports = CardView;
      }, { "../../constants": 202, "../../lib/assign": 208, "../../lib/dropin-error": 212, "../../lib/is-utf-8": 216, "../../lib/transition-helper": 222, "../base-view": 259, "braintree-web/hosted-fields": 77 }], 268: [function(require2, module3, exports3) {
        (function(global2) {
          (function() {
            "use strict";
            var assign = require2("../../lib/assign").assign;
            var BaseView = require2("../base-view");
            var btGooglePay = require2("braintree-web/google-payment");
            var DropinError = require2("../../lib/dropin-error");
            var constants = require2("../../constants");
            var assets = require2("@braintree/asset-loader");
            var analytics = require2("../../lib/analytics");
            function GooglePayView() {
              BaseView.apply(this, arguments);
            }
            GooglePayView.prototype = Object.create(BaseView.prototype);
            GooglePayView.prototype.constructor = GooglePayView;
            GooglePayView.ID = GooglePayView.prototype.ID = constants.paymentOptionIDs.googlePay;
            GooglePayView.prototype.initialize = function() {
              var self2 = this;
              var buttonOptions, googlePayVersion, merchantId;
              self2.googlePayConfiguration = assign({}, self2.model.merchantConfiguration.googlePay);
              googlePayVersion = self2.googlePayConfiguration.googlePayVersion;
              merchantId = self2.googlePayConfiguration.merchantId;
              buttonOptions = assign({
                buttonType: "short"
              }, self2.googlePayConfiguration.button, {
                onClick: function(event) {
                  event.preventDefault();
                  self2.preventUserAction();
                  self2.tokenize().then(function() {
                    self2.allowUserAction();
                  });
                }
              });
              delete self2.googlePayConfiguration.googlePayVersion;
              delete self2.googlePayConfiguration.merchantId;
              delete self2.googlePayConfiguration.button;
              return btGooglePay.create({
                client: self2.client,
                googlePayVersion,
                googleMerchantId: merchantId
              }).then(function(googlePayInstance) {
                self2.googlePayInstance = googlePayInstance;
                self2.paymentsClient = createPaymentsClient(self2.client);
              }).then(function() {
                var buttonContainer = self2.getElementById("google-pay-button");
                buttonContainer.appendChild(self2.paymentsClient.createButton(buttonOptions));
                self2.model.asyncDependencyReady(GooglePayView.ID);
              }).catch(function(err) {
                self2.model.asyncDependencyFailed({
                  view: self2.ID,
                  error: new DropinError(err)
                });
              });
            };
            GooglePayView.prototype.tokenize = function() {
              var self2 = this;
              var paymentDataRequest = self2.googlePayInstance.createPaymentDataRequest(self2.googlePayConfiguration);
              var rawPaymentData;
              return self2.paymentsClient.loadPaymentData(paymentDataRequest).then(function(paymentData) {
                rawPaymentData = paymentData;
                return self2.googlePayInstance.parseResponse(paymentData);
              }).then(function(tokenizePayload) {
                tokenizePayload.rawPaymentData = rawPaymentData;
                self2.model.addPaymentMethod(tokenizePayload);
              }).catch(function(err) {
                var reportedError = err;
                if (err.statusCode === "DEVELOPER_ERROR") {
                  console.error(err);
                  reportedError = "developerError";
                } else if (err.statusCode === "CANCELED") {
                  analytics.sendEvent(self2.client, "googlepay.loadPaymentData.canceled");
                  return;
                } else if (err.statusCode) {
                  analytics.sendEvent(self2.client, "googlepay.loadPaymentData.failed");
                }
                self2.model.reportError(reportedError);
              });
            };
            GooglePayView.prototype.updateConfiguration = function(key, value) {
              this.googlePayConfiguration[key] = value;
            };
            GooglePayView.isEnabled = function(options) {
              var gatewayConfiguration = options.client.getConfiguration().gatewayConfiguration;
              if (!(gatewayConfiguration.androidPay && Boolean(options.merchantConfiguration.googlePay))) {
                return Promise.resolve(false);
              }
              return Promise.resolve().then(function() {
                if (!(global2.google && global2.google.payments && global2.google.payments.api && global2.google.payments.api.PaymentsClient)) {
                  return assets.loadScript({
                    id: constants.GOOGLE_PAYMENT_SCRIPT_ID,
                    src: constants.GOOGLE_PAYMENT_SOURCE
                  });
                }
                return Promise.resolve();
              }).then(function() {
                var paymentsClient = createPaymentsClient(options.client);
                return paymentsClient.isReadyToPay({
                  allowedPaymentMethods: ["CARD", "TOKENIZED_CARD"]
                });
              }).then(function(response) {
                return Boolean(response.result);
              });
            };
            function createPaymentsClient(client) {
              return new global2.google.payments.api.PaymentsClient({
                environment: client.getConfiguration().gatewayConfiguration.environment === "production" ? "PRODUCTION" : "TEST"
              });
            }
            module3.exports = GooglePayView;
          }).call(this);
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, { "../../constants": 202, "../../lib/analytics": 207, "../../lib/assign": 208, "../../lib/dropin-error": 212, "../base-view": 259, "@braintree/asset-loader": 1, "braintree-web/google-payment": 70 }], 269: [function(require2, module3, exports3) {
        "use strict";
        var paymentOptionIDs = require2("../../constants").paymentOptionIDs;
        var result = {};
        result[paymentOptionIDs.applePay] = require2("./apple-pay-view");
        result[paymentOptionIDs.card] = require2("./card-view");
        result[paymentOptionIDs.googlePay] = require2("./google-pay-view");
        result[paymentOptionIDs.paypal] = require2("./paypal-view");
        result[paymentOptionIDs.paypalCredit] = require2("./paypal-credit-view");
        result[paymentOptionIDs.venmo] = require2("./venmo-view");
        module3.exports = result;
      }, { "../../constants": 202, "./apple-pay-view": 265, "./card-view": 267, "./google-pay-view": 268, "./paypal-credit-view": 270, "./paypal-view": 271, "./venmo-view": 272 }], 270: [function(require2, module3, exports3) {
        "use strict";
        var assign = require2("../../lib/assign").assign;
        var paymentOptionIDs = require2("../../constants").paymentOptionIDs;
        var BasePayPalView = require2("./base-paypal-view");
        function PayPalCreditView() {
          BasePayPalView.apply(this, arguments);
          this._isPayPalCredit = true;
        }
        PayPalCreditView.prototype = Object.create(BasePayPalView.prototype);
        PayPalCreditView.prototype.constructor = PayPalCreditView;
        PayPalCreditView.ID = PayPalCreditView.prototype.ID = paymentOptionIDs.paypalCredit;
        PayPalCreditView.isEnabled = function(options) {
          if (!options.merchantConfiguration.paypalCredit) {
            return Promise.resolve(false);
          }
          return BasePayPalView.isEnabled(assign({
            viewID: PayPalCreditView.ID
          }, options));
        };
        module3.exports = PayPalCreditView;
      }, { "../../constants": 202, "../../lib/assign": 208, "./base-paypal-view": 266 }], 271: [function(require2, module3, exports3) {
        "use strict";
        var assign = require2("../../lib/assign").assign;
        var paymentOptionIDs = require2("../../constants").paymentOptionIDs;
        var BasePayPalView = require2("./base-paypal-view");
        function PayPalView() {
          BasePayPalView.apply(this, arguments);
        }
        PayPalView.prototype = Object.create(BasePayPalView.prototype);
        PayPalView.prototype.constructor = PayPalView;
        PayPalView.ID = PayPalView.prototype.ID = paymentOptionIDs.paypal;
        PayPalView.isEnabled = function(options) {
          if (!options.merchantConfiguration.paypal) {
            return Promise.resolve(false);
          }
          return BasePayPalView.isEnabled(assign({
            viewID: PayPalView.ID
          }, options));
        };
        module3.exports = PayPalView;
      }, { "../../constants": 202, "../../lib/assign": 208, "./base-paypal-view": 266 }], 272: [function(require2, module3, exports3) {
        "use strict";
        var assign = require2("../../lib/assign").assign;
        var BaseView = require2("../base-view");
        var btVenmo = require2("braintree-web/venmo");
        var DropinError = require2("../../lib/dropin-error");
        var paymentOptionIDs = require2("../../constants").paymentOptionIDs;
        function VenmoView() {
          BaseView.apply(this, arguments);
        }
        VenmoView.prototype = Object.create(BaseView.prototype);
        VenmoView.prototype.constructor = VenmoView;
        VenmoView.ID = VenmoView.prototype.ID = paymentOptionIDs.venmo;
        VenmoView.prototype.initialize = function() {
          var self2 = this;
          var venmoConfiguration = assign({}, self2.model.merchantConfiguration.venmo, { client: this.client });
          return btVenmo.create(venmoConfiguration).then(function(venmoInstance) {
            self2.venmoInstance = venmoInstance;
            if (!self2.venmoInstance.hasTokenizationResult()) {
              return Promise.resolve();
            }
            return self2.venmoInstance.tokenize().then(function(payload) {
              self2.model.reportAppSwitchPayload(payload);
            }).catch(function(err) {
              if (self2._isIgnorableError(err)) {
                return;
              }
              self2.model.reportAppSwitchError(paymentOptionIDs.venmo, err);
            });
          }).then(function() {
            var button = self2.getElementById("venmo-button");
            button.addEventListener("click", function(event) {
              event.preventDefault();
              self2.preventUserAction();
              return self2.venmoInstance.tokenize().then(function(payload) {
                self2.model.addPaymentMethod(payload);
              }).catch(function(tokenizeErr) {
                if (self2._isIgnorableError(tokenizeErr)) {
                  return;
                }
                self2.model.reportError(tokenizeErr);
              }).then(function() {
                self2.allowUserAction();
              });
            });
            self2.model.asyncDependencyReady(VenmoView.ID);
          }).catch(function(err) {
            self2.model.asyncDependencyFailed({
              view: self2.ID,
              error: new DropinError(err)
            });
          });
        };
        VenmoView.prototype.requestPaymentMethod = function() {
          this.model.reportError("venmoButtonMustBeUsed");
          return BaseView.prototype.requestPaymentMethod.call(this);
        };
        VenmoView.prototype._isIgnorableError = function(error) {
          return error.code === "VENMO_APP_CANCELED" || error.code === "VENMO_DESKTOP_CANCELED";
        };
        VenmoView.isEnabled = function(options) {
          var gatewayConfiguration = options.client.getConfiguration().gatewayConfiguration;
          var venmoEnabled = gatewayConfiguration.payWithVenmo && Boolean(options.merchantConfiguration.venmo);
          if (!venmoEnabled) {
            return Promise.resolve(false);
          }
          return Promise.resolve(btVenmo.isBrowserSupported(options.merchantConfiguration.venmo));
        };
        module3.exports = VenmoView;
      }, { "../../constants": 202, "../../lib/assign": 208, "../../lib/dropin-error": 212, "../base-view": 259, "braintree-web/venmo": 149 }] }, {}, [205])(205);
    });
  }
});

// node_modules/braintree-web-drop-in-react/lib/index.js
var require_lib = __commonJS({
  "node_modules/braintree-web-drop-in-react/lib/index.js"(exports) {
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _regenerator = _interopRequireDefault(require_regenerator());
    var _asyncToGenerator2 = _interopRequireDefault(require_asyncToGenerator());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _defineProperty2 = _interopRequireDefault(require_defineProperty());
    var _react = _interopRequireDefault(require_react());
    var _reactDom = _interopRequireDefault(require_react_dom());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _braintreeWebDropIn = _interopRequireDefault(require_dropin());
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            (0, _defineProperty2["default"])(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = (0, _getPrototypeOf2["default"])(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return (0, _possibleConstructorReturn2["default"])(this, result);
      };
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var DropIn = function(_React$Component) {
      (0, _inherits2["default"])(DropIn2, _React$Component);
      var _super = _createSuper(DropIn2);
      function DropIn2() {
        var _this;
        (0, _classCallCheck2["default"])(this, DropIn2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "wrapper", void 0);
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "instance", void 0);
        return _this;
      }
      (0, _createClass2["default"])(DropIn2, [{
        key: "componentDidMount",
        value: function() {
          var _componentDidMount = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
            var _this2 = this;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return _braintreeWebDropIn["default"].create(_objectSpread({
                      container: _reactDom["default"].findDOMNode(this.wrapper),
                      preselectVaultedPaymentMethod: this.props.preselectVaultedPaymentMethod
                    }, this.props.options));
                  case 3:
                    this.instance = _context.sent;
                    this.instance.on("noPaymentMethodRequestable", function() {
                      if (_this2.props.onNoPaymentMethodRequestable) {
                        var _this2$props;
                        (_this2$props = _this2.props).onNoPaymentMethodRequestable.apply(_this2$props, arguments);
                      }
                    });
                    this.instance.on("paymentMethodRequestable", function() {
                      if (_this2.props.onPaymentMethodRequestable) {
                        var _this2$props2;
                        (_this2$props2 = _this2.props).onPaymentMethodRequestable.apply(_this2$props2, arguments);
                      }
                    });
                    this.instance.on("paymentOptionSelected", function() {
                      if (_this2.props.onPaymentOptionSelected) {
                        var _this2$props3;
                        (_this2$props3 = _this2.props).onPaymentOptionSelected.apply(_this2$props3, arguments);
                      }
                    });
                    if (this.props.onInstance) {
                      this.props.onInstance(this.instance);
                    }
                    _context.next = 13;
                    break;
                  case 10:
                    _context.prev = 10;
                    _context.t0 = _context["catch"](0);
                    if (this.props.onError) {
                      this.props.onError(_context.t0);
                    }
                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 10]]);
          }));
          function componentDidMount() {
            return _componentDidMount.apply(this, arguments);
          }
          return componentDidMount;
        }()
      }, {
        key: "componentWillUnmount",
        value: function() {
          var _componentWillUnmount = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
            return _regenerator["default"].wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!this.instance) {
                      _context2.next = 3;
                      break;
                    }
                    _context2.next = 3;
                    return this.instance.teardown();
                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
          function componentWillUnmount() {
            return _componentWillUnmount.apply(this, arguments);
          }
          return componentWillUnmount;
        }()
      }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate() {
          return false;
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;
          return _react["default"].createElement("div", {
            ref: function ref(_ref) {
              return _this3.wrapper = _ref;
            }
          });
        }
      }]);
      return DropIn2;
    }(_react["default"].Component);
    exports["default"] = DropIn;
    (0, _defineProperty2["default"])(DropIn, "displayName", "BraintreeWebDropIn");
    (0, _defineProperty2["default"])(DropIn, "propTypes", {
      options: _propTypes["default"].object.isRequired,
      // @deprecated: Include inside options
      preselectVaultedPaymentMethod: _propTypes["default"].bool,
      onInstance: _propTypes["default"].func,
      onError: _propTypes["default"].func,
      onNoPaymentMethodRequestable: _propTypes["default"].func,
      onPaymentMethodRequestable: _propTypes["default"].func,
      onPaymentOptionSelected: _propTypes["default"].func
    });
    (0, _defineProperty2["default"])(DropIn, "defaultProps", {
      preselectVaultedPaymentMethod: true
    });
  }
});
export default require_lib();
/*! Bundled license information:

@babel/runtime/helpers/regeneratorRuntime.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)
*/
//# sourceMappingURL=braintree-web-drop-in-react.js.map
