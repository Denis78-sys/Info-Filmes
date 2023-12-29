exports.ids = [13];
exports.modules = {

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("be4c6c20", content, true, context)
};

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TituloFilme_vue_vue_type_style_index_0_id_210319aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TituloFilme_vue_vue_type_style_index_0_id_210319aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TituloFilme_vue_vue_type_style_index_0_id_210319aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TituloFilme_vue_vue_type_style_index_0_id_210319aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TituloFilme_vue_vue_type_style_index_0_id_210319aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nome-filme[data-v-210319aa]{color:#fff;font-size:1.12rem;margin-bottom:5px}.genero[data-v-210319aa],.nome-filme[data-v-210319aa]{font-style:normal;font-weight:700;line-height:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.genero[data-v-210319aa]{color:#f2c36b}.genero[data-v-210319aa],.mais-link[data-v-210319aa]{font-size:.93rem}@media only screen and (max-width:767px){.nome-filme[data-v-210319aa]{font-size:.95rem}.genero[data-v-210319aa]{font-size:.82rem}.mais-link[data-v-210319aa]{font-size:.68rem;margin-top:4px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/TituloFilme.vue?vue&type=template&id=210319aa&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "titulo-filme"
  }, [_vm._ssrNode("<h2 class=\"nome-filme\" data-v-210319aa>" + _vm._ssrEscape(_vm._s(_vm.titulo)) + "</h2> <h3 class=\"genero\" data-v-210319aa>" + _vm._ssrEscape(_vm._s(_vm.genero)) + "</h3>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/atoms/TituloFilme.vue?vue&type=template&id=210319aa&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/TituloFilme.vue?vue&type=script&lang=js
/* harmony default export */ var TituloFilmevue_type_script_lang_js = ({
  props: {
    titulo: {
      type: [String, Array],
      required: true
    },
    genero: {
      type: String,
      required: true
    },
    idFilme: {
      type: Number,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/atoms/TituloFilme.vue?vue&type=script&lang=js
 /* harmony default export */ var atoms_TituloFilmevue_type_script_lang_js = (TituloFilmevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/atoms/TituloFilme.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  atoms_TituloFilmevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "210319aa",
  "7e3f9ddc"
  
)

/* harmony default export */ var TituloFilme = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=titulo-filme.js.map