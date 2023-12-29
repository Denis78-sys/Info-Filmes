<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="logo">
    <NuxtLink to="/"
      ><img src="@/assets/images/Logo2.svg" alt="Logo" class="img-responsive"
    /></NuxtLink>
  </div>
</template>

<style scoped>
.logo {
  margin-right: 70px;
}
.img-responsive {
  width: 100%;
}

@media only screen and (max-width: 767px) {
  .logo {
    margin-right: 0;
  }
  .img-responsive {
    width: 100%;
  }
}

/* Estilos para telas médias (tablets) */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .img-responsive {
    width: 100%;
  }
}

/* Estilos para telas grandes (desktops) */
@media only screen and (min-width: 1024px) {
  .img-responsive {
    width: 100%;
  }
}
</style>
