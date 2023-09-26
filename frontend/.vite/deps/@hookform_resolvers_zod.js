import {
  appendErrors,
  get,
  set
} from "./chunk-HZ5DSLU3.js";
import "./chunk-67XTWVEJ.js";
import "./chunk-5WWUZCGV.js";

// node_modules/@hookform/resolvers/dist/resolvers.mjs
var t = function(e, t3, i2) {
  if (e && "reportValidity" in e) {
    var n3 = get(i2, t3);
    e.setCustomValidity(n3 && n3.message || ""), e.reportValidity();
  }
};
var i = function(r, e) {
  var i2 = function(i3) {
    var n4 = e.fields[i3];
    n4 && n4.ref && "reportValidity" in n4.ref ? t(n4.ref, i3, r) : n4.refs && n4.refs.forEach(function(e2) {
      return t(e2, i3, r);
    });
  };
  for (var n3 in e.fields)
    i2(n3);
};
var n = function(t3, n3) {
  n3.shouldUseNativeValidation && i(t3, n3);
  var f = {};
  for (var s in t3) {
    var u = get(n3.fields, s), c = Object.assign(t3[s] || {}, { ref: u && u.ref });
    if (a(n3.names || Object.keys(t3), s)) {
      var l = Object.assign({}, o(get(f, s)));
      set(l, "root", c), set(f, s, l);
    } else
      set(f, s, c);
  }
  return f;
};
var o = function(r) {
  return Array.isArray(r) ? r.filter(Boolean) : [];
};
var a = function(r, e) {
  return r.some(function(r2) {
    return r2.startsWith(e + ".");
  });
};

// node_modules/@hookform/resolvers/zod/dist/zod.mjs
var n2 = function(e, o2) {
  for (var n3 = {}; e.length; ) {
    var t3 = e[0], s = t3.code, i2 = t3.message, a2 = t3.path.join(".");
    if (!n3[a2])
      if ("unionErrors" in t3) {
        var u = t3.unionErrors[0].errors[0];
        n3[a2] = { message: u.message, type: u.code };
      } else
        n3[a2] = { message: i2, type: s };
    if ("unionErrors" in t3 && t3.unionErrors.forEach(function(r) {
      return r.errors.forEach(function(r2) {
        return e.push(r2);
      });
    }), o2) {
      var c = n3[a2].types, f = c && c[t3.code];
      n3[a2] = appendErrors(a2, o2, n3, s, f ? [].concat(f, t3.message) : t3.message);
    }
    e.shift();
  }
  return n3;
};
var t2 = function(r, t3, s) {
  return void 0 === s && (s = {}), function(i2, a2, u) {
    try {
      return Promise.resolve(function(o2, n3) {
        try {
          var a3 = Promise.resolve(r["sync" === s.mode ? "parse" : "parseAsync"](i2, t3)).then(function(r2) {
            return u.shouldUseNativeValidation && i({}, u), { errors: {}, values: s.raw ? i2 : r2 };
          });
        } catch (r2) {
          return n3(r2);
        }
        return a3 && a3.then ? a3.then(void 0, n3) : a3;
      }(0, function(r2) {
        if (function(r3) {
          return null != r3.errors;
        }(r2))
          return { values: {}, errors: n(n2(r2.errors, !u.shouldUseNativeValidation && "all" === u.criteriaMode), u) };
        throw r2;
      }));
    } catch (r2) {
      return Promise.reject(r2);
    }
  };
};
export {
  t2 as zodResolver
};
//# sourceMappingURL=@hookform_resolvers_zod.js.map
