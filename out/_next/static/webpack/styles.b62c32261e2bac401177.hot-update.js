webpackHotUpdate("styles",{

/***/ "./components/Mooncake/style.scss":
/*!****************************************!*\
  !*** ./components/Mooncake/style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"container__37pOy","bounce":"bounce__1YZ3f","antennaeContainer":"antennaeContainer__2mZX3","antennae":"antennae__3pY_e","antennaeRight":"antennaeRight__2PfLv","antennaeLeft":"antennaeLeft__2Cpmg","antennaeTip":"antennaeTip__KgTiH","body":"body__AeU5H","glow":"glow__CLyWu","glowCircle":"glowCircle__2-RvP","glowDot":"glowDot__4U790","shine":"shine__1WNSs","eyeOuter":"eyeOuter__1G443","eyelids":"eyelids__3RWPh","close":"close__2WzBY","eyeInner":"eyeInner__3jUp7","eyeShine":"eyeShine__1k1VR","eyeShineSmaller":"eyeShineSmaller__51zp7","mouth":"mouth__3CX0I","feetContainer":"feetContainer__2pnMh","feet":"feet__3Oacg","feetLeft":"feetLeft__1yhgb","feetRight":"feetRight__22Qit"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1589233236872");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.b62c32261e2bac401177.hot-update.js.map