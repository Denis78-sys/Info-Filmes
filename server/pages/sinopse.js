exports.ids = [19,2,3,6,11,12,13];
exports.modules = {

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/templates/SinopseTemplate.vue?vue&type=template&id=0260f15c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "sinopse-filme"
  }, [_vm._ssrNode("<div class=\"sinopse-container\" data-v-0260f15c>", "</div>", [_c('BannerFilme', {
    attrs: {
      "imagem": _vm.filmeTodo.Poster
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"dados-filme\" data-v-0260f15c>", "</div>", [_c('TituloFilme', {
    attrs: {
      "titulo": _vm.filmeTodo.Title,
      "genero": _vm.filmeTodo.Genre
    }
  }), _vm._ssrNode(" "), _c('Ano', {
    attrs: {
      "ano": _vm.filmeTodo.Year
    }
  }), _vm._ssrNode(" "), _c('Elenco', {
    attrs: {
      "direcao": _vm.filmeTodo.Director,
      "roteiro": _vm.filmeTodo.Writer,
      "elenco": _vm.filmeTodo.Actors,
      "duracao": _vm.filmeTodo.Runtime,
      "pais": _vm.filmeTodo.Country,
      "premios": _vm.filmeTodo.Awards,
      "nota": _vm.filmeTodo.imdbRating,
      "tipo": _vm.filmeTodo.Type,
      "bilheteria": _vm.filmeTodo.BoxOffice
    }
  }), _vm._ssrNode(" "), _c('SinopseFilme', {
    attrs: {
      "sinopse": _vm.filmeTodo.Plot
    }
  })], 2), _vm._ssrNode(" "), _c('NuxtLink', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Voltar")])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/templates/SinopseTemplate.vue?vue&type=template&id=0260f15c&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/templates/SinopseTemplate.vue?vue&type=script&lang=js
/* harmony default export */ var SinopseTemplatevue_type_script_lang_js = ({
  data() {
    return {
      shouldRender: false
    };
  },
  computed: {
    filmeTodo() {
      // eslint-disable-next-line no-undef
      const filme = this.$store.getters.$todo; // .find((filme) => filme.imdbID === this.idB);
      return filme;
    }
    // eslint-disable-next-line vue/return-in-computed-property
  }
});
// CONCATENATED MODULE: ./components/templates/SinopseTemplate.vue?vue&type=script&lang=js
 /* harmony default export */ var templates_SinopseTemplatevue_type_script_lang_js = (SinopseTemplatevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/templates/SinopseTemplate.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(97)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  templates_SinopseTemplatevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0260f15c",
  "4016a474"
  
)

/* harmony default export */ var SinopseTemplate = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BannerFilme: __webpack_require__(66).default,TituloFilme: __webpack_require__(67).default,Ano: __webpack_require__(87).default,Elenco: __webpack_require__(88).default,SinopseFilme: __webpack_require__(89).default})


/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sinopse.vue?vue&type=template&id=65069a1c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('SinopseTemplate');
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/sinopse.vue?vue&type=template&id=65069a1c&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sinopse.vue?vue&type=script&lang=js
/* harmony default export */ var sinopsevue_type_script_lang_js = ({
  layout: "infoFilmes",
  data() {
    return {
      // eslint-disable-next-line no-undef
      idBfilme: this.$route.params.id
    };
  },
  created() {
    if (this.idBfilme === undefined) {
      // eslint-disable-next-line no-console
      this.$store.dispatch("fetchTodo", "tt0339291");
      this.$router.replace("/");
    } else {
      this.$store.dispatch("fetchTodo", this.idBfilme);
    }
  }
});
// CONCATENATED MODULE: ./pages/sinopse.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_sinopsevue_type_script_lang_js = (sinopsevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/sinopse.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_sinopsevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "65069a1c",
  "27c8bea0"
  
)

/* harmony default export */ var sinopse = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SinopseTemplate: __webpack_require__(102).default})


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

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("fd2139bc", content, true, context)
};

/***/ }),

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

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("da7e3f14", content, true, context)
};

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("036a1f94", content, true, context)
};

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ano_vue_vue_type_style_index_0_id_5a1ab299_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ano_vue_vue_type_style_index_0_id_5a1ab299_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ano_vue_vue_type_style_index_0_id_5a1ab299_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ano_vue_vue_type_style_index_0_id_5a1ab299_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ano_vue_vue_type_style_index_0_id_5a1ab299_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ano[data-v-5a1ab299]{margin-top:0}@media only screen and (max-width:767px){p[data-v-5a1ab299]{flex-direction:column;font-size:.81rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinopseFilme_vue_vue_type_style_index_0_id_07397828_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinopseFilme_vue_vue_type_style_index_0_id_07397828_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinopseFilme_vue_vue_type_style_index_0_id_07397828_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinopseFilme_vue_vue_type_style_index_0_id_07397828_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinopseFilme_vue_vue_type_style_index_0_id_07397828_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "span[data-v-07397828]{color:#f2c36b;font-size:1.5rem;font-style:normal;font-weight:400;line-height:normal}p[data-v-07397828],span[data-v-07397828]{text-align:justify}p[data-v-07397828]{color:#fff}@media only screen and (max-width:767px){p[data-v-07397828],span[data-v-07397828]{font-size:.81rem}p[data-v-07397828]{font-style:normal;font-weight:400;line-height:normal}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Ano.vue?vue&type=template&id=5a1ab299&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ano"
  }, [_vm._ssrNode("<p data-v-5a1ab299>" + _vm._ssrEscape("Ano: " + _vm._s(_vm.ano)) + "</p>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/atoms/Ano.vue?vue&type=template&id=5a1ab299&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Ano.vue?vue&type=script&lang=js
/* harmony default export */ var Anovue_type_script_lang_js = ({
  props: {
    ano: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/atoms/Ano.vue?vue&type=script&lang=js
 /* harmony default export */ var atoms_Anovue_type_script_lang_js = (Anovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/atoms/Ano.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  atoms_Anovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5a1ab299",
  "34e244cc"
  
)

/* harmony default export */ var Ano = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/SinopseFilme.vue?vue&type=template&id=07397828&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "sinopse-filme"
  }, [_vm._ssrNode("<p data-v-07397828><span data-v-07397828>SINOPSE: </span>" + _vm._ssrEscape(_vm._s(_vm.sinopse)) + "</p>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/atoms/SinopseFilme.vue?vue&type=template&id=07397828&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/SinopseFilme.vue?vue&type=script&lang=js
/* harmony default export */ var SinopseFilmevue_type_script_lang_js = ({
  props: {
    sinopse: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/atoms/SinopseFilme.vue?vue&type=script&lang=js
 /* harmony default export */ var atoms_SinopseFilmevue_type_script_lang_js = (SinopseFilmevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/atoms/SinopseFilme.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(83)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  atoms_SinopseFilmevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "07397828",
  "05951848"
  
)

/* harmony default export */ var SinopseFilme = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinopseTemplate_vue_vue_type_style_index_0_id_0260f15c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinopseTemplate_vue_vue_type_style_index_0_id_0260f15c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinopseTemplate_vue_vue_type_style_index_0_id_0260f15c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinopseTemplate_vue_vue_type_style_index_0_id_0260f15c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinopseTemplate_vue_vue_type_style_index_0_id_0260f15c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h2[data-v-0260f15c]{color:#fff}.sinopse-container[data-v-0260f15c]{display:grid;grid-template-columns:1fr 1fr;margin-top:33px;grid-gap:33px;gap:33px}.dados-filme[data-v-0260f15c]{display:flex;flex-direction:column;gap:35px}a[data-v-0260f15c]{color:#a65c32;font-size:.85rem;margin-top:16px}@media only screen and (max-width:767px){.sinopse-container[data-v-0260f15c]{display:flex;flex-direction:column;gap:8px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=sinopse.js.map