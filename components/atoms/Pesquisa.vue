<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="input-container">
    <input
      ref="pesquisaInput"
      type="search"
      name="pesquisa"
      placeholder="Pesquisar"
      data-pesquisa
      @keyup.enter="buscarFilme"
    />
    <!-- eslint-disable-next-line vue/attributes-order-->
    <span @click="buscarFilme" class="icone-lupa" >
      <img src="@/assets/images/lupa.svg" alt="Ícone de Lupa" />
    </span>
  </div>
</template>

<script>
export default {

  methods: {
    buscarFilme() {
      const dadoPesquisa = this.$refs.pesquisaInput.value;
      if (dadoPesquisa === "") {
        alert(`O campo de pesquisa está vazio`);
      } else {
        this.$router.push('/')
        this.buscandoFilme(dadoPesquisa)
        this.limparCampo()
        this.$refs.pesquisaInput.focus();
      }
    },
    async buscandoFilme(dado) {
      await this.$store.dispatch('fetchBusca', dado);
    },
    limparCampo(){
      this.$refs.pesquisaInput.value = ""
    }
  }
};
</script>

<style scoped>
.input-container {
  /*width: 100%;*/
  position: relative;
}

input {
  border: none;
  border-radius: 10px;
  padding: 7px 8px;
  padding-right: 30px; /* Adicionado para deixar espaço para o ícone */
  width: 100%;
  display: flex;
  align-items: center;
}

.icone-lupa {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}

@media only screen and (max-width: 767px) {
  input {
    width: 100%; /* Ocupa a largura total em telas menores */
    height: 19px; /* Altura ajustável conforme necessário */
    padding: 10px; /* Ajuste o padding conforme necessário */
    font-size: 14px; /* Ajuste o tamanho da fonte conforme necessário */
    border-radius: 5.347px;
    font-size: 9px;
  }

  img {
    width: 8px; /* Tamanho ajustável do ícone de lupa */
  }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  input {
    width: 100%; /* Ocupa a largura total em telas menores */
    height: 24px; /* Altura ajustável conforme necessário */
    padding: 10px; /* Ajuste o padding conforme necessário */
    font-size: 14px; /* Ajuste o tamanho da fonte conforme necessário */
    border-radius: 5.347px;
    font-size: 9px;
  }

  img {
    width: 8px; /* Tamanho ajustável do ícone de lupa */
  }
}

@media only screen and (min-width: 1024px) {
}
</style>
