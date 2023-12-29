<template>
  <div class="titulo-filme">
    <h2 class="nome-filme">{{ titulo }}</h2>
    <h3 class="genero">{{ genero }}</h3>
   <!-- eslint-disable-next-line vue/attribute-hyphenation-->
  </div>
</template>

<script>
export default {
   props: {
    titulo: { type: [String, Array], required: true },
    genero: { type: String, required: true },
    idFilme: { type: Number, required: true },
  },
};
</script>

<style scoped>
.nome-filme {
  font-size: 1.12rem;
  overflow: hidden;
  color: #fff;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 5px;
}
.genero {
  color: #f2c36b;
  font-size: 0.93rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.mais-link {
  font-size: 0.93rem;
}

@media only screen and (max-width: 767px) {
  .nome-filme {
    font-size: 0.95rem;
  }
  .genero {
    font-size: 0.82rem;
  }
  .mais-link {
    margin-top: 4px;
    font-size: 0.68rem;
  }
}
</style>
