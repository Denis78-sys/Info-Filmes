<template>
  <div class="sinopse-filme">
    <div class="sinopse-container">
      <BannerFilme :imagem="filmeTodo.Poster" />
      <div class="dados-filme">
        <TituloFilme :titulo="filmeTodo.Title" :genero="filmeTodo.Genre" />

        <Ano :ano="filmeTodo.Year" />
        <Elenco
          :direcao="filmeTodo.Director"
          :roteiro="filmeTodo.Writer"
          :elenco="filmeTodo.Actors"
          :duracao="filmeTodo.Runtime"
          :pais="filmeTodo.Country"
          :premios="filmeTodo.Awards"
          :nota="filmeTodo.imdbRating"
          :tipo="filmeTodo.Type"
          :bilheteria="filmeTodo.BoxOffice"
        />
        <SinopseFilme :sinopse="filmeTodo.Plot" />
      </div>
      <NuxtLink to="/">Voltar</NuxtLink>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shouldRender: false,
    };
  },
  computed: {
    filmeTodo() {
      // eslint-disable-next-line no-undef
      const filme = this.$store.getters.$todo; // .find((filme) => filme.imdbID === this.idB);
      return filme;
    },
    // eslint-disable-next-line vue/return-in-computed-property
  },
};
</script>

<style scoped>
h2 {
  color: white;
}
.sinopse-container {
  margin-top: 33px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 33px;
}

.dados-filme {
  display: flex;
  flex-direction: column;
  gap: 35px;
}
a {
  margin-top: 16px;
  font-size: 0.85rem;
  color: #a65c32;
}
@media only screen and (max-width: 767px) {
  .sinopse-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
