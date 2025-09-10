import Oe, { useState as B, useRef as fr, useEffect as dr } from "react";
var ee = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function vr() {
  if (Te) return L;
  Te = 1;
  var S = Oe, x = Symbol.for("react.element"), k = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, R = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(b, d, w) {
    var l, E = {}, v = null, y = null;
    w !== void 0 && (v = "" + w), d.key !== void 0 && (v = "" + d.key), d.ref !== void 0 && (y = d.ref);
    for (l in d) m.call(d, l) && !j.hasOwnProperty(l) && (E[l] = d[l]);
    if (b && b.defaultProps) for (l in d = b.defaultProps, d) E[l] === void 0 && (E[l] = d[l]);
    return { $$typeof: x, type: b, key: v, ref: y, props: E, _owner: R.current };
  }
  return L.Fragment = k, L.jsx = T, L.jsxs = T, L;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function pr() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    var S = Oe, x = Symbol.for("react.element"), k = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), b = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), C = Symbol.iterator, q = "@@iterator";
    function Se(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = C && e[C] || e[q];
      return typeof r == "function" ? r : null;
    }
    var A = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = A.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Pe = !1, De = !1, Ae = !1, Fe = !1, Ie = !1, re;
    re = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === j || Ie || e === R || e === w || e === l || Fe || e === y || Pe || De || Ae || typeof e == "object" && e !== null && (e.$$typeof === v || e.$$typeof === E || e.$$typeof === T || e.$$typeof === b || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case k:
          return "Portal";
        case j:
          return "Profiler";
        case R:
          return "StrictMode";
        case w:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return te(r) + ".Consumer";
          case T:
            var t = e;
            return te(t._context) + ".Provider";
          case d:
            return We(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : O(e.type) || "Memo";
          case v: {
            var i = e, s = i._payload, o = i._init;
            try {
              return O(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, $ = 0, ne, ae, oe, ie, se, ue, ce;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function Le() {
      {
        if ($ === 0) {
          ne = console.log, ae = console.info, oe = console.warn, ie = console.error, se = console.group, ue = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        $++;
      }
    }
    function Ne() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ne
            }),
            info: P({}, e, {
              value: ae
            }),
            warn: P({}, e, {
              value: oe
            }),
            error: P({}, e, {
              value: ie
            }),
            group: P({}, e, {
              value: se
            }),
            groupCollapsed: P({}, e, {
              value: ue
            }),
            groupEnd: P({}, e, {
              value: ce
            })
          });
        }
        $ < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = A.ReactCurrentDispatcher, K;
    function Y(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            K = n && n[1] || "";
          }
        return `
` + K + e;
      }
    }
    var z = !1, M;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Ye();
    }
    function fe(e, r) {
      if (!e || z)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      z = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = J.current, J.current = null, Le();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (g) {
              n = g;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var a = g.stack.split(`
`), h = n.stack.split(`
`), c = a.length - 1, f = h.length - 1; c >= 1 && f >= 0 && a[c] !== h[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (a[c] !== h[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || a[c] !== h[f]) {
                    var _ = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, _), _;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        z = !1, J.current = s, Ne(), Error.prepareStackTrace = i;
      }
      var I = e ? e.displayName || e.name : "", D = I ? Y(I) : "";
      return typeof e == "function" && M.set(e, D), D;
    }
    function Me(e, r, t) {
      return fe(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ve(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case w:
          return Y("Suspense");
        case l:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Me(e.render);
          case E:
            return V(e.type, r, t);
          case v: {
            var n = e, i = n._payload, s = n._init;
            try {
              return V(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, de = {}, ve = A.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, i) {
      {
        var s = Function.call.bind(W);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (U(i), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), U(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, U(i), p("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var Be = Array.isArray;
    function G(e) {
      return Be(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function he(e) {
      if (Je(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), pe(e);
    }
    var ge = A.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, ye;
    function ze(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      typeof e.ref == "string" && ge.current;
    }
    function He(e, r) {
      {
        var t = function() {
          me || (me = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          ye || (ye = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: x,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, i) {
      {
        var s, o = {}, a = null, h = null;
        t !== void 0 && (he(t), a = "" + t), Ge(r) && (he(r.key), a = "" + r.key), ze(r) && (h = r.ref, Xe(r, i));
        for (s in r)
          W.call(r, s) && !Ke.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (s in c)
            o[s] === void 0 && (o[s] = c[s]);
        }
        if (a || h) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(o, f), h && Ze(o, f);
        }
        return Qe(e, a, h, i, n, ge.current, o);
      }
    }
    var X = A.ReactCurrentOwner, be = A.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === x;
    }
    function Ee() {
      {
        if (X.current) {
          var e = O(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      return "";
    }
    var _e = {};
    function tr(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== X.current && (n = " It was passed a child from " + O(e._owner.type) + "."), F(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && Re(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Se(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              Z(o.value) && Re(o.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = O(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var i = O(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var je = {};
    function xe(e, r, t, n, i, s) {
      {
        var o = $e(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = rr();
          h ? a += h : a += Ee();
          var c;
          e === null ? c = "null" : G(e) ? c = "array" : e !== void 0 && e.$$typeof === x ? (c = "<" + (O(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var f = er(e, r, t, i, s);
        if (f == null)
          return f;
        if (o) {
          var _ = r.children;
          if (_ !== void 0)
            if (n)
              if (G(_)) {
                for (var I = 0; I < _.length; I++)
                  we(_[I], e);
                Object.freeze && Object.freeze(_);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(_, e);
        }
        if (W.call(r, "key")) {
          var D = O(e), g = Object.keys(r).filter(function(lr) {
            return lr !== "key";
          }), Q = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[D + Q]) {
            var cr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, D, cr, D), je[D + Q] = !0;
          }
        }
        return e === m ? ar(f) : nr(f), f;
      }
    }
    function or(e, r, t) {
      return xe(e, r, t, !0);
    }
    function ir(e, r, t) {
      return xe(e, r, t, !1);
    }
    var sr = ir, ur = or;
    N.Fragment = m, N.jsx = sr, N.jsxs = ur;
  }()), N;
}
process.env.NODE_ENV === "production" ? ee.exports = vr() : ee.exports = pr();
var u = ee.exports;
const hr = ({ apiEndpoint: S, collectionName: x }) => {
  const [k, m] = B([]), [R, j] = B(""), [T, b] = B(!1);
  return {
    messages: k,
    input: R,
    isLoading: T,
    handleInputChange: (l) => {
      j(l.target.value);
    },
    handleSubmit: async (l) => {
      if (l.preventDefault(), !R.trim()) return;
      const E = { role: "user", content: R };
      m((v) => [...v, E]), j(""), b(!0);
      try {
        const v = await fetch(S, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            question: R,
            collection_name: x
          })
        });
        if (!v.ok)
          throw new Error(`API error: ${v.statusText}`);
        const C = { role: "assistant", content: (await v.json()).response };
        m((q) => [...q, C]);
      } catch (v) {
        console.error("Failed to get chat response:", v);
        const y = {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again."
        };
        m((C) => [...C, y]);
      } finally {
        b(!1);
      }
    }
  };
}, mr = ({
  apiEndpoint: S,
  collectionName: x,
  widgetTitle: k = "Chat Assistant"
}) => {
  const [m, R] = B(!1), { messages: j, input: T, handleInputChange: b, handleSubmit: d, isLoading: w } = hr({
    apiEndpoint: S,
    collectionName: x
  }), l = fr(null);
  dr(() => {
    var y;
    (y = l.current) == null || y.scrollIntoView({ behavior: "smooth" });
  }, [j]);
  const v = () => R(!m);
  return m ? /* @__PURE__ */ u.jsxs("div", { className: "cstack-chat-widget", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "cstack-chat-widget-header", children: [
      /* @__PURE__ */ u.jsx("h3", { children: k }),
      /* @__PURE__ */ u.jsx("button", { onClick: v, className: "cstack-chat-widget-closer", children: "×" })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "cstack-chat-widget-messages", children: [
      j.map((y, C) => /* @__PURE__ */ u.jsx("div", { className: `cstack-chat-message cstack-chat-message--${y.role}`, children: /* @__PURE__ */ u.jsx("p", { children: y.content }) }, C)),
      w && /* @__PURE__ */ u.jsx("div", { className: "cstack-chat-message cstack-chat-message--assistant", children: /* @__PURE__ */ u.jsxs("div", { className: "cstack-chat-loading-dots", children: [
        /* @__PURE__ */ u.jsx("span", {}),
        /* @__PURE__ */ u.jsx("span", {}),
        /* @__PURE__ */ u.jsx("span", {})
      ] }) }),
      /* @__PURE__ */ u.jsx("div", { ref: l })
    ] }),
    /* @__PURE__ */ u.jsxs("form", { onSubmit: d, className: "cstack-chat-widget-form", children: [
      /* @__PURE__ */ u.jsx(
        "input",
        {
          value: T,
          onChange: b,
          placeholder: "Ask a question...",
          disabled: w
        }
      ),
      /* @__PURE__ */ u.jsx("button", { type: "submit", disabled: w, children: /* @__PURE__ */ u.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ u.jsx("line", { x1: "22", y1: "2", x2: "11", y2: "13" }),
        /* @__PURE__ */ u.jsx("polygon", { points: "22 2 15 22 11 13 2 9 22 2" })
      ] }) })
    ] })
  ] }) : /* @__PURE__ */ u.jsx("button", { className: "cstack-chat-widget-opener", onClick: v, children: /* @__PURE__ */ u.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ u.jsx("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) }) });
};
export {
  mr as ChatWidget,
  hr as useChat
};
