exports.ids = [17,3,4,8,9,13];
exports.modules = {

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/templates/HomeTemplate.vue?vue&type=template&id=2c2b7921&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "home-template"
  }, [_c('ListaFilmes')], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/templates/HomeTemplate.vue?vue&type=template&id=2c2b7921&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/templates/HomeTemplate.vue?vue&type=script&lang=js
/* harmony default export */ var HomeTemplatevue_type_script_lang_js = ({});
// CONCATENATED MODULE: ./components/templates/HomeTemplate.vue?vue&type=script&lang=js
 /* harmony default export */ var templates_HomeTemplatevue_type_script_lang_js = (HomeTemplatevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/templates/HomeTemplate.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  templates_HomeTemplatevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2c2b7921",
  "34776c30"
  
)

/* harmony default export */ var HomeTemplate = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ListaFilmes: __webpack_require__(90).default})


/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=88b77f84&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('HomeTemplate');
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=88b77f84&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  layout: "infoFilmes",
  created() {
    this.$store.dispatch('fetchTodos');
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "88b77f84",
  "7b5c4332"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HomeTemplate: __webpack_require__(103).default})


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("71223516", content, true, context)
};

/***/ }),

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

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerFilme_vue_vue_type_style_index_0_id_1194c3f9_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerFilme_vue_vue_type_style_index_0_id_1194c3f9_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerFilme_vue_vue_type_style_index_0_id_1194c3f9_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerFilme_vue_vue_type_style_index_0_id_1194c3f9_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerFilme_vue_vue_type_style_index_0_id_1194c3f9_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card[data-v-1194c3f9]{overflow:hidden}.capa[data-v-1194c3f9]{border-radius:4px;-o-object-fit:cover;object-fit:cover;width:100%}@media only screen and (max-width:767px){.capa[data-v-1194c3f9]{border-radius:3.25px;height:auto;width:100%}}@media only screen and (min-width:768px) and (max-width:1023px){.capa[data-v-1194c3f9]{border-radius:3.25px;height:auto;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5806e420", content, true, context)
};

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/BannerFilme.vue?vue&type=template&id=1194c3f9&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card"
  }, [_vm._ssrNode("<img" + _vm._ssrAttr("src", _vm.imagem) + " alt=\"Capa Filme\" class=\"capa\" data-v-1194c3f9>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/atoms/BannerFilme.vue?vue&type=template&id=1194c3f9&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/BannerFilme.vue?vue&type=script&lang=js
/* harmony default export */ var BannerFilmevue_type_script_lang_js = ({
  props: {
    imagem: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/atoms/BannerFilme.vue?vue&type=script&lang=js
 /* harmony default export */ var atoms_BannerFilmevue_type_script_lang_js = (BannerFilmevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/atoms/BannerFilme.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  atoms_BannerFilmevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1194c3f9",
  "5e322eff"
  
)

/* harmony default export */ var BannerFilme = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2a9c15b6", content, true, context)
};

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BotaoMais_vue_vue_type_style_index_0_id_5c4931e4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BotaoMais_vue_vue_type_style_index_0_id_5c4931e4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BotaoMais_vue_vue_type_style_index_0_id_5c4931e4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BotaoMais_vue_vue_type_style_index_0_id_5c4931e4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BotaoMais_vue_vue_type_style_index_0_id_5c4931e4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a[data-v-5c4931e4]{font-size:1rem;transition:color .3s ease}a[data-v-5c4931e4]:hover{color:#a65c32}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/BotaoMais.vue?vue&type=template&id=5c4931e4&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "botao-mais"
  }, [_c('NuxtLink', {
    attrs: {
      "to": {
        name: 'sinopse',
        params: {
          id: _vm.id
        }
      }
    }
  }, [_vm._v("Mais...")])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/atoms/BotaoMais.vue?vue&type=template&id=5c4931e4&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/BotaoMais.vue?vue&type=script&lang=js
/* harmony default export */ var BotaoMaisvue_type_script_lang_js = ({
  props: {
    id: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/atoms/BotaoMais.vue?vue&type=script&lang=js
 /* harmony default export */ var atoms_BotaoMaisvue_type_script_lang_js = (BotaoMaisvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/atoms/BotaoMais.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(72)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  atoms_BotaoMaisvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5c4931e4",
  "0e555f06"
  
)

/* harmony default export */ var BotaoMais = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaFilmes_vue_vue_type_style_index_0_id_45626c87_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaFilmes_vue_vue_type_style_index_0_id_45626c87_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaFilmes_vue_vue_type_style_index_0_id_45626c87_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaFilmes_vue_vue_type_style_index_0_id_45626c87_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaFilmes_vue_vue_type_style_index_0_id_45626c87_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card-container[data-v-45626c87]{display:flex;flex-wrap:wrap;gap:16px;justify-content:center;margin-top:25px}li[data-v-45626c87]{list-style:none}.card-item[data-v-45626c87]{background:#464545;border-radius:4.718px;box-sizing:border-box;display:flex;flex-direction:column;flex-shrink:0;gap:11.795px;height:294.885px;margin-bottom:16px;padding:14.154px;width:calc(33.3333% - 16px)}.imagem[data-v-45626c87]{border-radius:4px;overflow:hidden}.numero-pagina[data-v-45626c87]{font-size:.85rem}button[data-v-45626c87]{background:none;border:none;color:#fff;cursor:pointer;transition:color .3s ease}button[data-v-45626c87]:hover{color:#a65c32}.anterior-proxima[data-v-45626c87]{display:flex;justify-content:space-between}@media only screen and (max-width:767px){.card-item[data-v-45626c87]{width:calc(50% - 16px)}.anterior-proxima[data-v-45626c87]{justify-content:space-between}}@media only screen and (max-width:479px){.card-item[data-v-45626c87]{width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/ListaFilmes.vue?vue&type=template&id=45626c87&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cards"
  }, [_vm._ssrNode("<ul class=\"card-container\" data-v-45626c87>", "</ul>", _vm._l(_vm.filmesTodos, function (todo) {
    return _vm._ssrNode("<li class=\"card-item\" data-v-45626c87>", "</li>", [_vm._ssrNode("<div class=\"imagem\" data-v-45626c87>", "</div>", [_c('BannerFilme', {
      attrs: {
        "imagem": todo.Poster
      }
    })], 1), _vm._ssrNode(" "), _c('TituloFilme', {
      attrs: {
        "titulo": todo.Title,
        "genero": todo.Type
      }
    }), _vm._ssrNode(" "), _c('BotaoMais', {
      attrs: {
        "id": todo.imdbID
      }
    })], 2);
  }), 0), _vm._ssrNode(" <div class=\"anterior-proxima\" data-v-45626c87><button data-v-45626c87>Anterior</button> <button data-v-45626c87>Próximo</button></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/molecules/ListaFilmes.vue?vue&type=template&id=45626c87&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/ListaFilmes.vue?vue&type=script&lang=js
/* harmony default export */ var ListaFilmesvue_type_script_lang_js = ({
  computed: {
    filmesTodos() {
      const filmes = this.$store.getters.$allTodos;
      return filmes;
    }
  },
  /* created() {
   this.$store.dispatch("fetchTodoPag", this.contador);
  }, */
  // eslint-disable-next-line vue/order-in-components
  data() {
    // eslint-disable-next-line no-unused-vars
    return {
      contador: 1
    };
  },
  methods: {
    async fetchFilmes() {
      await this.$store.dispatch("fetchTodoPag", this.contador);
    },
    /* getPosterUrl(todo) {
      return todo && todo.Poster
        ? todo.Poster
        : "@/assets/images/imagem-off-png";
    }, */
    async contadorMais() {
      this.contador++;
      await this.fetchFilmes(); // Chama a função para buscar os filmes após incrementar o contador
    },
    async contadorMenos() {
      if (this.contador > 1) {
        this.contador--;
        await this.fetchFilmes(); // Chama a função para buscar os filmes após decrementar o contador
      }
    }
  }
});
// CONCATENATED MODULE: ./components/molecules/ListaFilmes.vue?vue&type=script&lang=js
 /* harmony default export */ var molecules_ListaFilmesvue_type_script_lang_js = (ListaFilmesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/molecules/ListaFilmes.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  molecules_ListaFilmesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "45626c87",
  "c6779c2c"
  
)

/* harmony default export */ var ListaFilmes = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BannerFilme: __webpack_require__(66).default,TituloFilme: __webpack_require__(67).default,BotaoMais: __webpack_require__(74).default})


/***/ })

};;
//# sourceMappingURL=index.js.map