(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "a942":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "refreshFeatureFlags", function() { return /* binding */ refreshFeatureFlags; });

// EXTERNAL MODULE: /home/runner/work/fozzie-components/fozzie-components/node_modules/@justeattakeaway/cc-braze-adapter/node_modules/@braze/web-sdk/src/managers/braze-instance.js + 12 modules
var braze_instance = __webpack_require__("4d7b");

// EXTERNAL MODULE: /home/runner/work/fozzie-components/fozzie-components/node_modules/@justeattakeaway/cc-braze-adapter/node_modules/@braze/web-sdk/shared-lib/braze-shared-lib.js + 6 modules
var braze_shared_lib = __webpack_require__("777b");

// EXTERNAL MODULE: /home/runner/work/fozzie-components/fozzie-components/node_modules/@justeattakeaway/cc-braze-adapter/node_modules/@braze/web-sdk/src/common/base-provider.js
var base_provider = __webpack_require__("ef21");

// EXTERNAL MODULE: /home/runner/work/fozzie-components/fozzie-components/node_modules/@justeattakeaway/cc-braze-adapter/node_modules/@braze/web-sdk/src/managers/storage-manager.js
var storage_manager = __webpack_require__("cea4");

// EXTERNAL MODULE: /home/runner/work/fozzie-components/fozzie-components/node_modules/@justeattakeaway/cc-braze-adapter/node_modules/@braze/web-sdk/src/managers/subscription-manager.js
var subscription_manager = __webpack_require__("0f53");

// EXTERNAL MODULE: /home/runner/work/fozzie-components/fozzie-components/node_modules/@justeattakeaway/cc-braze-adapter/node_modules/@braze/web-sdk/src/util/math.js
var math = __webpack_require__("e085");

// EXTERNAL MODULE: /home/runner/work/fozzie-components/fozzie-components/node_modules/@justeattakeaway/cc-braze-adapter/node_modules/@braze/web-sdk/src/util/net.js
var net = __webpack_require__("bcbe");

// CONCATENATED MODULE: /home/runner/work/fozzie-components/fozzie-components/node_modules/@justeattakeaway/cc-braze-adapter/node_modules/@braze/web-sdk/src/FeatureFlags/feature-flag.js

class feature_flag_FeatureFlag {
  constructor(t, r = !1, e = {}) {
    (this.id = t),
      (this.enabled = r),
      (this.properties = e),
      (this.id = t),
      (this.enabled = r),
      (this.properties = e);
  }
  getStringProperty(t) {
    const r = this.properties[t];
    return null == r
      ? (this.yr(t), null)
      : this.Er(r)
      ? r.value
      : (this.Br("string"), null);
  }
  getNumberProperty(t) {
    const r = this.properties[t];
    return null == r
      ? (this.yr(t), null)
      : this.Ir(r)
      ? r.value
      : (this.Br("number"), null);
  }
  getBooleanProperty(t) {
    const r = this.properties[t];
    return null == r
      ? (this.yr(t), null)
      : this.Nr(r)
      ? r.value
      : (this.Br("boolean"), null);
  }
  ss() {
    const t = {};
    return (
      (t[feature_flag_FeatureFlag.hs.ns] = this.id),
      (t[feature_flag_FeatureFlag.hs.Fe] = this.enabled),
      (t[feature_flag_FeatureFlag.hs.we] = this.properties),
      t
    );
  }
  Br(t) {
    braze_shared_lib["a" /* default */].D.info(`Property is not of type ${t}.`);
  }
  yr(t) {
    braze_shared_lib["a" /* default */].D.info(`${t} not found in feature flag properties.`);
  }
  Er(t) {
    return "string" === t.type && "string" == typeof t.value;
  }
  Ir(t) {
    return "number" === t.type && "number" == typeof t.value;
  }
  Nr(t) {
    return "boolean" === t.type && "boolean" == typeof t.value;
  }
}
(feature_flag_FeatureFlag.hs = { ns: "id", Fe: "e", we: "pr" }),
  (feature_flag_FeatureFlag.At = { ns: "id", Fe: "enabled", we: "properties" });

// CONCATENATED MODULE: /home/runner/work/fozzie-components/fozzie-components/node_modules/@justeattakeaway/cc-braze-adapter/node_modules/@braze/web-sdk/src/FeatureFlags/feature-flag-factory.js


function newFeatureFlagFromJson(e) {
  if (e[feature_flag_FeatureFlag.At.ns] && "boolean" == typeof e[feature_flag_FeatureFlag.At.Fe])
    return new feature_flag_FeatureFlag(
      e[feature_flag_FeatureFlag.At.ns],
      e[feature_flag_FeatureFlag.At.Fe],
      e[feature_flag_FeatureFlag.At.we]
    );
  braze_shared_lib["a" /* default */].D.info(`Unable to create feature flag from ${JSON.stringify(e, null, 2)}`);
}
function newFeatureFlagFromSerializedValue(e) {
  if (e[feature_flag_FeatureFlag.hs.ns] && "boolean" == typeof e[feature_flag_FeatureFlag.hs.Fe])
    return new feature_flag_FeatureFlag(
      e[feature_flag_FeatureFlag.hs.ns],
      e[feature_flag_FeatureFlag.hs.Fe],
      e[feature_flag_FeatureFlag.hs.we]
    );
  braze_shared_lib["a" /* default */].D.info(
    `Unable to deserialize feature flag from ${JSON.stringify(e, null, 2)}`
  );
}

// CONCATENATED MODULE: /home/runner/work/fozzie-components/fozzie-components/node_modules/@justeattakeaway/cc-braze-adapter/node_modules/@braze/web-sdk/src/FeatureFlags/feature-flags-provider.js








class feature_flags_provider_er extends base_provider["a" /* default */] {
  constructor(t, s, i) {
    super(),
      (this.si = t),
      (this.ei = s),
      (this.ri = i),
      (this.hi = []),
      (this.oi = 0),
      (this.si = t),
      (this.ei = s),
      (this.ri = i),
      (this.ni = null),
      (this.ai = new subscription_manager["a" /* default */]()),
      (this.fi = 10),
      (this.ui = null),
      (this.li = null),
      braze_instance["b" /* default */].jt(this.ai);
  }
  Rs(t) {
    if ((!this.si || this.si.ci()) && null != t && t.feature_flags) {
      this.hi = [];
      for (const s of t.feature_flags) {
        const t = newFeatureFlagFromJson(s);
        t && this.hi.push(t);
      }
      (this.oi = new Date().getTime()), this.mi(), this.ai.St(this.hi);
    }
  }
  pi() {
    let t = {};
    this.ri && (t = this.ri.I(storage_manager["a" /* STORAGE_KEYS */].q.di));
    const s = {};
    for (const i in t) {
      const e = newFeatureFlagFromSerializedValue(t[i]);
      e && (s[e.id] = e);
    }
    return s;
  }
  Ws(t) {
    return this.ai.ut(t);
  }
  refreshFeatureFlags(t, s, i = !1, e = !0) {
    if (!this.gi(i))
      return (
        !this.ni &&
          this.si &&
          (this.ni = this.si.Fi(() => {
            this.refreshFeatureFlags(t, s);
          })),
        void ("function" == typeof s && s())
      );
    if ((e && this.yi(), !this.ei)) return void ("function" == typeof s && s());
    const r = this.ei.Ps({}, !0),
      h = this.ei.Bs(r, !1, !0);
    let o = !1;
    this.ei.Gs(r, () => {
      this.ei
        ? net["a" /* default */].Hs({
            url: `${this.ei.Ks()}/feature_flags/sync`,
            headers: h,
            data: r,
            S: i => {
              if (!this.ei.Os(r, i, h))
                return (o = !0), void ("function" == typeof s && s());
              this.ei.Qs(), this.Rs(i), "function" == typeof t && t();
            },
            error: t => {
              this.ei.Vs(t, "retrieving feature flags"),
                (o = !0),
                "function" == typeof s && s();
            },
            wi: () => {
              if (e && o && !this.li) {
                let e = this.ui;
                (null == e || e < 1e3 * this.fi) && (e = 1e3 * this.fi),
                  this.bi(Math.min(3e5, Object(math["a" /* randomInclusive */])(1e3 * this.fi, 3 * e)), t, s, i);
              }
            }
          })
        : "function" == typeof s && s();
    });
  }
  yi() {
    null != this.li && (clearTimeout(this.li), (this.li = null));
  }
  bi(t = 1e3 * this.fi, s, i, e) {
    this.yi(),
      (this.li = window.setTimeout(() => {
        this.refreshFeatureFlags(s, i, e);
      }, t)),
      (this.ui = t);
  }
  gi(t) {
    if (!this.si) return !1;
    if (!t) {
      const t = parseFloat(this.si.ji());
      let s = !1;
      if (!isNaN(t)) {
        if (-1 === t) return braze_shared_lib["a" /* default */].D.info("Feature flag refreshes not allowed"), !1;
        s = new Date().getTime() >= (this.oi || 0) + 1e3 * t;
      }
      if (!s)
        return (
          braze_shared_lib["a" /* default */].D.info(`Feature flag refreshes were rate limited to ${t} seconds`),
          !1
        );
    }
    return this.si.ci();
  }
  mi() {
    if (!this.ri) return;
    const t = {};
    for (const s of this.hi) {
      const i = s.ss();
      t[s.id] = i;
    }
    this.ri.B(storage_manager["a" /* STORAGE_KEYS */].q.di, t), this.ri.B(storage_manager["a" /* STORAGE_KEYS */].q.vi, this.oi);
  }
}

// CONCATENATED MODULE: /home/runner/work/fozzie-components/fozzie-components/node_modules/@justeattakeaway/cc-braze-adapter/node_modules/@braze/web-sdk/src/FeatureFlags/feature-flags-provider-factory.js


const ir = {
  t: !1,
  provider: null,
  er: () => (
    ir.o(),
    ir.provider ||
      ((ir.provider = new feature_flags_provider_er(braze_instance["b" /* default */].ir(), braze_instance["b" /* default */].nr(), braze_instance["b" /* default */].l())), braze_instance["b" /* default */].ar(ir.provider)),
    ir.provider
  ),
  o: () => {
    ir.t || (braze_instance["b" /* default */].u(ir), (ir.t = !0));
  },
  destroy: () => {
    (ir.provider = null), (ir.t = !1);
  }
};
/* harmony default export */ var feature_flags_provider_factory = (ir);

// CONCATENATED MODULE: /home/runner/work/fozzie-components/fozzie-components/node_modules/@justeattakeaway/cc-braze-adapter/node_modules/@braze/web-sdk/src/FeatureFlags/refresh-feature-flags.js


function tr(r, t, a = !1) {
  if (braze_instance["b" /* default */].rr()) return feature_flags_provider_factory.er().refreshFeatureFlags(r, t, a);
}
function refreshFeatureFlags(r, e) {
  tr(r, e);
}
/* harmony default export */ var refresh_feature_flags = __webpack_exports__["default"] = (tr);


/***/ })

}]);
//# sourceMappingURL=3.d7ea8ab5.iframe.bundle.js.map