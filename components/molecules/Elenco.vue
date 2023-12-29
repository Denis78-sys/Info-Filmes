<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="elenco">
    <p><span>Direção: </span>{{ direcao }}</p>
    <p><span>Roteiro: </span>{{ roteiro }}</p>
    <p><span>Elenco: </span>{{ elenco }}</p>
    <p><span>Duração: </span>{{ duracao }}</p>
    <p><span>País: </span>{{ pais }}</p>
    <p><span>Premiação: </span>{{ premios }}</p>
    <p><span>Nota: </span>{{ nota }}</p>
    <p><span>Tipo: </span>{{ tipo }}</p>
    <p><span>Bilheteria: </span>{{ bilheteria }}</p>
  </div>
</template>

<script>
export default {
  props: {
    direcao: { type: String, required: true },
    roteiro: { type: String, required: true },
    elenco: { type: String, required: true },
    duracao: { type: String, required: true },
    pais: { type: String, required: true },
    premios: { type: String, required: true },
    nota: { type: String, required: true },
    tipo: { type: String, required: true },
    bilheteria: { type: String, required: true },
  },
};
</script>

<style scoped>
span {
  color: #f2c36b;
  text-align: justify;
  font-size: 1.12rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
p {
  text-align: justify;
  font-size: 1.12rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
@media only screen and (max-width: 767px) {
  span {
    font-size: 0.81rem;
  }
  p {
    font-size: 0.81rem;
  }
}
</style>
