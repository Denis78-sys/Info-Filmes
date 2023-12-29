<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header-container">
    <div class="header">
      <Logo />
      <div class="menuLista">
        <Menu />
      </div>
      <Pesquisa />
    </div>
    <LinhaInferior />
  </div>

  <!-- eslint-disable vue/no-multiple-template-root -->
</template>

<script>
export default {
  /* props:{
    nPag:{type: Number, required: true}
  } */
};
</script>

<style scoped>
.header-container {
  margin: 0 auto;
  padding-top: 28px;
  max-width: 1090px;
}
.header {
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  width: 100%;
  margin: auto;

  height: 72px;
  gap: 32px;
  align-self: stretch;
}

@media only screen and (max-width: 767px) {
  .header-container {
    width: 90%;
    padding-top: 24px;
  }
  .header {  
    display: grid;
    grid-template-columns: auto auto auto;
    height: 38.5px;
    align-items: center;
    gap: 17.111px;
    flex-shrink: 0;
    align-self: stretch;
  }
  .menuLista {
    order: -1;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .header-container {
    width: 85%;
  }
  .header {
    grid-template-columns: auto auto auto;
  }
}

@media only screen and (min-width: 1024px) {
  .header-container {
    width: 70%;
  }
}
</style>
