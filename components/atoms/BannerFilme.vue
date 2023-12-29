<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card">
    <img class="capa" :src="imagem" alt="Capa Filme" />
  </div>
</template>

<script>
export default {
  props: {
    imagem: { type: String, required: true },
  },
  
};
</script>

<style scoped>
.card {
  overflow: hidden;
}

.capa {
  width: 100%;
  /*height: auto;*/
  border-radius: 4px;
  object-fit: cover;
}

@media only screen and (max-width: 767px) {
  .capa {
    width: 100%;
    height: auto;
    border-radius: 3.25px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .capa {
    width: 100%;
    height: auto;
    border-radius: 3.25px;
  }
}
</style>
