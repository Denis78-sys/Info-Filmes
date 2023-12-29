exports.ids = [6];
exports.modules = {

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("bd57acf0", content, true, context)
};

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Elenco_vue_vue_type_style_index_0_id_89efcce4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Elenco_vue_vue_type_style_index_0_id_89efcce4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Elenco_vue_vue_type_style_index_0_id_89efcce4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Elenco_vue_vue_type_style_index_0_id_89efcce4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Elenco_vue_vue_type_style_index_0_id_89efcce4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "span[data-v-89efcce4]{color:#f2c36b}p[data-v-89efcce4],span[data-v-89efcce4]{font-size:1.12rem;font-style:normal;font-weight:400;line-height:normal;text-align:justify}@media only screen and (max-width:767px){p[data-v-89efcce4],span[data-v-89efcce4]{font-size:.81rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/Elenco.vue?vue&type=template&id=89efcce4&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "elenco"
  }, [_vm._ssrNode("<p data-v-89efcce4><span data-v-89efcce4>Direção: </span>" + _vm._ssrEscape(_vm._s(_vm.direcao)) + "</p> <p data-v-89efcce4><span data-v-89efcce4>Roteiro: </span>" + _vm._ssrEscape(_vm._s(_vm.roteiro)) + "</p> <p data-v-89efcce4><span data-v-89efcce4>Elenco: </span>" + _vm._ssrEscape(_vm._s(_vm.elenco)) + "</p> <p data-v-89efcce4><span data-v-89efcce4>Duração: </span>" + _vm._ssrEscape(_vm._s(_vm.duracao)) + "</p> <p data-v-89efcce4><span data-v-89efcce4>País: </span>" + _vm._ssrEscape(_vm._s(_vm.pais)) + "</p> <p data-v-89efcce4><span data-v-89efcce4>Premiação: </span>" + _vm._ssrEscape(_vm._s(_vm.premios)) + "</p> <p data-v-89efcce4><span data-v-89efcce4>Nota: </span>" + _vm._ssrEscape(_vm._s(_vm.nota)) + "</p> <p data-v-89efcce4><span data-v-89efcce4>Tipo: </span>" + _vm._ssrEscape(_vm._s(_vm.tipo)) + "</p> <p data-v-89efcce4><span data-v-89efcce4>Bilheteria: </span>" + _vm._ssrEscape(_vm._s(_vm.bilheteria)) + "</p>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/molecules/Elenco.vue?vue&type=template&id=89efcce4&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/Elenco.vue?vue&type=script&lang=js
/* harmony default export */ var Elencovue_type_script_lang_js = ({
  props: {
    direcao: {
      type: String,
      required: true
    },
    roteiro: {
      type: String,
      required: true
    },
    elenco: {
      type: String,
      required: true
    },
    duracao: {
      type: String,
      required: true
    },
    pais: {
      type: String,
      required: true
    },
    premios: {
      type: String,
      required: true
    },
    nota: {
      type: String,
      required: true
    },
    tipo: {
      type: String,
      required: true
    },
    bilheteria: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/molecules/Elenco.vue?vue&type=script&lang=js
 /* harmony default export */ var molecules_Elencovue_type_script_lang_js = (Elencovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/molecules/Elenco.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(81)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  molecules_Elencovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "89efcce4",
  "9f7b9192"
  
)

/* harmony default export */ var Elenco = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=elenco.js.map