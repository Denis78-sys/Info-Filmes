exports.ids = [16,7];
exports.modules = {

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/templates/ErrorTemplate.vue?vue&type=template&id=0e0eb452&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "error-template"
  }, [_vm._ssrNode("<h1 data-v-0e0eb452>Ops! Algo deu errado...</h1> <div class=\"texto\" data-v-0e0eb452><p data-v-0e0eb452>\n      Lamentamos informar que encontramos um pequeno contratempo. Parece que\n      algo saiu dos trilhos nos bastidores.\n    </p> <p data-v-0e0eb452>\n      Agradecemos sua paciência e compreensão. Estamos comprometidos em\n      proporcionar a você a melhor experiência possível, e esperamos resolver\n      essa situação rapidamente.\n    </p> <p data-v-0e0eb452>Atenciosamente,</p> <p data-v-0e0eb452>A Equipe do <strong data-v-0e0eb452>INFO-FILMES</strong>.</p></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/templates/ErrorTemplate.vue?vue&type=template&id=0e0eb452&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/templates/ErrorTemplate.vue?vue&type=script&lang=js
/* harmony default export */ var ErrorTemplatevue_type_script_lang_js = ({
  beforeMount() {
    // Verificar se a rota atual não é a página inicial ("/")
    if (this.$route.path !== "/") {
      // Redirecionar para a página inicial
      this.$router.push("/");
    }
  }
});
// CONCATENATED MODULE: ./components/templates/ErrorTemplate.vue?vue&type=script&lang=js
 /* harmony default export */ var templates_ErrorTemplatevue_type_script_lang_js = (ErrorTemplatevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/templates/ErrorTemplate.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(93)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  templates_ErrorTemplatevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0e0eb452",
  "05b7dc7a"
  
)

/* harmony default export */ var ErrorTemplate = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/error.vue?vue&type=template&id=9f155ac8&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ErrorTemplate');
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/error.vue?vue&type=template&id=9f155ac8&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/error.vue?vue&type=script&lang=js
/* harmony default export */ var errorvue_type_script_lang_js = ({
  layout: 'infoFilmes'
});
// CONCATENATED MODULE: ./pages/error.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_errorvue_type_script_lang_js = (errorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/error.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_errorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9f155ac8",
  "0617fc9d"
  
)

/* harmony default export */ var error = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ErrorTemplate: __webpack_require__(100).default})


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0f015f2c", content, true, context)
};

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorTemplate_vue_vue_type_style_index_0_id_0e0eb452_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorTemplate_vue_vue_type_style_index_0_id_0e0eb452_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorTemplate_vue_vue_type_style_index_0_id_0e0eb452_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorTemplate_vue_vue_type_style_index_0_id_0e0eb452_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorTemplate_vue_vue_type_style_index_0_id_0e0eb452_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".error-template[data-v-0e0eb452]{display:flex;flex-direction:column;gap:43px;margin-top:43px}h1[data-v-0e0eb452]{font-size:1.5rem}.texto[data-v-0e0eb452]{display:flex;flex-direction:column;gap:24px}p[data-v-0e0eb452]{font-size:1rem;text-align:justify}@media only screen and (max-width:767px){.error-template[data-v-0e0eb452]{gap:24px}h1[data-v-0e0eb452]{font-size:1.25rem}.texto[data-v-0e0eb452]{gap:16px}p[data-v-0e0eb452]{font-size:.87rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=error.js.map