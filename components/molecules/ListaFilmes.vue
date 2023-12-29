<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="cards">
    <ul class="card-container">
      <li v-for="todo in filmesTodos" :key="todo.imdbID" class="card-item">
        <div class="imagem">
          <BannerFilme :imagem="todo.Poster" />
        </div>
        <TituloFilme :titulo="todo.Title" :genero="todo.Type" />
        <!-- eslint-disable-next-line vue/attribute-hyphenation-->
        <BotaoMais :id="todo.imdbID" />
      </li>
    </ul>
    <div class="anterior-proxima">
      <button @click="contadorMenos">Anterior</button>
      <!-- <p class="numero-pagina">Página: {{ contador }}</p> -->
      <button @click="contadorMais">Próximo</button>
    </div>
    
  </div>
</template>

<script>
export default {
  computed: {
    filmesTodos() {
      const filmes = this.$store.getters.$allTodos;
      return filmes;
    },
  },
   /* created() {
    this.$store.dispatch("fetchTodoPag", this.contador);
  }, */
  // eslint-disable-next-line vue/order-in-components
  data() {
    // eslint-disable-next-line no-unused-vars
    return { contador: 1 };
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
    },
  },
};
</script>

<style scoped>
.card-container {
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center; /* Alinha os cards no centro da tela */
}

li {
  list-style: none;
}
.card-item {
  width: calc(
    33.3333% - 16px
  ); /* Cria 3 colunas, subtraindo a largura entre os cards */
  margin-bottom: 16px; /* Adiciona um espaçamento entre os cards */
  box-sizing: border-box; /* Garante que a largura inclua a margem */
  display: flex;
  height: 294.885px;
  padding: 14.154px;
  flex-direction: column;
  border-radius: 4.718px;
  gap: 11.795px;
  flex-shrink: 0;
  background: #464545;
}

.imagem {
  overflow: hidden;
  border-radius: 4px;
}
.numero-pagina {
  font-size: 0.85rem;
}
button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  transition: color 0.3s ease;
}
button:hover {
  color: #a65c32;
}
.anterior-proxima {
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 767px) {
  .card-item {
    width: calc(50% - 16px); /* Cria 2 colunas em telas menores */
  }
  .anterior-proxima {
    justify-content: space-between;
  }
}

@media only screen and (max-width: 479px) {
  .card-item {
    width: 100%; /* Uma coluna em telas muito pequenas */
  }
}
</style>
