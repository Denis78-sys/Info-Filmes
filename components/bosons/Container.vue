<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <slot />
  </div>
</template>

<script></script>

<style scoped>
.container {
  margin: 0 auto;
  /*max-width: 1176px;*/
  max-width: 1090px;
  /*height: 98vh;*/
  margin-bottom: 92px;
  padding-bottom: 92px;
}


@media only screen and (max-width: 767px) {
  .container{
    width: 90%;
    margin-bottom: 50px;
    padding-bottom: 50px;
  }
}

/* Estilos para telas médias (tablets) */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .container{
  width: 85%;}
}

/* Estilos para telas grandes (desktops) */
@media only screen and (min-width: 1024px) {
  .container{
  width: 70%;}
}
</style>
