(window.webpackJsonp=window.webpackJsonp||[]).push([[18,4,5,9,10,14],{330:function(t,e,r){var content=r(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("71223516",content,!0,{sourceMap:!1})},331:function(t,e,r){var content=r(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("be4c6c20",content,!0,{sourceMap:!1})},332:function(t,e,r){"use strict";r(330)},333:function(t,e,r){var n=r(27)((function(i){return i[1]}));n.push([t.i,".card[data-v-1194c3f9]{overflow:hidden}.capa[data-v-1194c3f9]{border-radius:4px;-o-object-fit:cover;object-fit:cover;width:100%}@media only screen and (max-width:767px){.capa[data-v-1194c3f9]{border-radius:3.25px;height:auto;width:100%}}@media only screen and (min-width:768px) and (max-width:1023px){.capa[data-v-1194c3f9]{border-radius:3.25px;height:auto;width:100%}}",""]),n.locals={},t.exports=n},334:function(t,e,r){"use strict";r(331)},335:function(t,e,r){var n=r(27)((function(i){return i[1]}));n.push([t.i,".nome-filme[data-v-210319aa]{color:#fff;font-size:1.12rem;margin-bottom:5px}.genero[data-v-210319aa],.nome-filme[data-v-210319aa]{font-style:normal;font-weight:700;line-height:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.genero[data-v-210319aa]{color:#f2c36b}.genero[data-v-210319aa],.mais-link[data-v-210319aa]{font-size:.93rem}@media only screen and (max-width:767px){.nome-filme[data-v-210319aa]{font-size:.95rem}.genero[data-v-210319aa]{font-size:.82rem}.mais-link[data-v-210319aa]{font-size:.68rem;margin-top:4px}}",""]),n.locals={},t.exports=n},336:function(t,e,r){var content=r(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("5806e420",content,!0,{sourceMap:!1})},337:function(t,e,r){"use strict";r.r(e);var n={props:{imagem:{type:String,required:!0}}},o=(r(332),r(10)),component=Object(o.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"card"},[t("img",{staticClass:"capa",attrs:{src:this.imagem,alt:"Capa Filme"}})])}),[],!1,null,"1194c3f9",null);e.default=component.exports},338:function(t,e,r){"use strict";r.r(e);r(214);var n={props:{titulo:{type:[String,Array],required:!0},genero:{type:String,required:!0},idFilme:{type:Number,required:!0}}},o=(r(334),r(10)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"titulo-filme"},[e("h2",{staticClass:"nome-filme"},[t._v(t._s(t.titulo))]),t._v(" "),e("h3",{staticClass:"genero"},[t._v(t._s(t.genero))])])}),[],!1,null,"210319aa",null);e.default=component.exports},342:function(t,e,r){var content=r(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("2a9c15b6",content,!0,{sourceMap:!1})},343:function(t,e,r){"use strict";r(336)},344:function(t,e,r){var n=r(27)((function(i){return i[1]}));n.push([t.i,"a[data-v-5c4931e4]{font-size:1rem;transition:color .3s ease}a[data-v-5c4931e4]:hover{color:#a65c32}",""]),n.locals={},t.exports=n},345:function(t,e,r){"use strict";r.r(e);var n={props:{id:{type:String,required:!0}}},o=(r(343),r(10)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"botao-mais"},[e("NuxtLink",{attrs:{to:{name:"sinopse",params:{id:t.id}}}},[t._v("Mais...")])],1)}),[],!1,null,"5c4931e4",null);e.default=component.exports},356:function(t,e,r){"use strict";r(342)},357:function(t,e,r){var n=r(27)((function(i){return i[1]}));n.push([t.i,".card-container[data-v-45626c87]{display:flex;flex-wrap:wrap;gap:16px;justify-content:center;margin-top:25px}li[data-v-45626c87]{list-style:none}.card-item[data-v-45626c87]{background:#464545;border-radius:4.718px;box-sizing:border-box;display:flex;flex-direction:column;flex-shrink:0;gap:11.795px;height:294.885px;margin-bottom:16px;padding:14.154px;width:calc(33.3333% - 16px)}.imagem[data-v-45626c87]{border-radius:4px;overflow:hidden}.numero-pagina[data-v-45626c87]{font-size:.85rem}button[data-v-45626c87]{background:none;border:none;color:#fff;cursor:pointer;transition:color .3s ease}button[data-v-45626c87]:hover{color:#a65c32}.anterior-proxima[data-v-45626c87]{display:flex;justify-content:space-between}@media only screen and (max-width:767px){.card-item[data-v-45626c87]{width:calc(50% - 16px)}.anterior-proxima[data-v-45626c87]{justify-content:space-between}}@media only screen and (max-width:479px){.card-item[data-v-45626c87]{width:100%}}",""]),n.locals={},t.exports=n},361:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(46),{computed:{filmesTodos:function(){return this.$store.getters.$allTodos}},data:function(){return{contador:1}},methods:{fetchFilmes:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchTodoPag",t.contador);case 2:case"end":return e.stop()}}),e)})))()},contadorMais:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.contador++,e.next=3,t.fetchFilmes();case 3:case"end":return e.stop()}}),e)})))()},contadorMenos:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.contador>1)){e.next=4;break}return t.contador--,e.next=4,t.fetchFilmes();case 4:case"end":return e.stop()}}),e)})))()}}}),c=(r(356),r(10)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"cards"},[e("ul",{staticClass:"card-container"},t._l(t.filmesTodos,(function(r){return e("li",{key:r.imdbID,staticClass:"card-item"},[e("div",{staticClass:"imagem"},[e("BannerFilme",{attrs:{imagem:r.Poster}})],1),t._v(" "),e("TituloFilme",{attrs:{titulo:r.Title,genero:r.Type}}),t._v(" "),e("BotaoMais",{attrs:{id:r.imdbID}})],1)})),0),t._v(" "),e("div",{staticClass:"anterior-proxima"},[e("button",{on:{click:t.contadorMenos}},[t._v("Anterior")]),t._v(" "),e("button",{on:{click:t.contadorMais}},[t._v("Próximo")])])])}),[],!1,null,"45626c87",null);e.default=component.exports;installComponents(component,{BannerFilme:r(337).default,TituloFilme:r(338).default,BotaoMais:r(345).default})},374:function(t,e,r){"use strict";r.r(e);var n={},o=r(10),component=Object(o.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"home-template"},[t("ListaFilmes")],1)}),[],!1,null,"2c2b7921",null);e.default=component.exports;installComponents(component,{ListaFilmes:r(361).default})},381:function(t,e,r){"use strict";r.r(e);var n={layout:"infoFilmes",created:function(){this.$store.dispatch("fetchTodos")}},o=r(10),component=Object(o.a)(n,(function(){return(0,this._self._c)("HomeTemplate")}),[],!1,null,"88b77f84",null);e.default=component.exports;installComponents(component,{HomeTemplate:r(374).default})}}]);