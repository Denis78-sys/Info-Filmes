<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="menu">
    <button class="botao" @click="ativarMenu">
      <img
        src="@/assets/images/images-mobile/menu-hamburger.svg"
        alt="Botão menu"
      />
    </button>
    <!-- eslint-disable-next-line vue/no-multiple-template-root -->
    <ul ref="lista">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">Sobre</NuxtLink>
     <!--  <NuxtLink to="/contato">Contato</NuxtLink> -->
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    ativarMenu() {
      const lista = this.$refs.lista;

      if (lista.style.opacity === "1") {
        lista.style.opacity = "0";
        setTimeout(() => (lista.style.display = "none"), 300); // Tempo correspondente à transição
      } else {
        lista.style.display = "flex";
        setTimeout(() => (lista.style.opacity = "1"), 0); // Adiando para a próxima iteração do ciclo de renderização
      }
    },
  },
};
</script>

<style scoped>
/*Para Selecionar a tag <a> atual*/
a.nuxt-link-exact-active {
  color: #f2c36b;
  font-weight: bold;
}
.menu {
  display: flex;
  width: auto;
  justify-content: flex-end;
}
.botao {
  border: none;
  display: none;
}

ul {
  display: flex;
  align-items: flex-start; /* Alinhado ao canto esquerdo */
  margin: 0; /* Removendo margens padrão */
  padding: 0; /* Removendo padding padrão */
  margin-left: auto;
}

a {
  text-decoration: none;
  color: #ffffff;
  font-size: 1rem;
  margin-right: 80px;
  transition: color 0.3s ease;
}
a:hover{
  color: #a65c32;
}

@media only screen and (max-width: 767px) {
  ul {
    display: flex;
    gap: 10px;
    background: rgba(63, 2, 1, 0.8);
    width: 70%;
    height: 100vh;
    display: none;
    flex-direction: column;
    transition: opacity 0.3s ease-in-out;
    position: absolute;
    top: 70px;
    left: 0;
    margin-left: 0;
    opacity: 0;
    z-index: 1000;
  }

  .menu-aberto {
    opacity: 1;
  }

  .menu {
    display: flex;
    flex-direction: column;
    opacity: 1;
  }

  .botao {
    background: none;
    display: flex;
  }

  a {
    margin-top: 16px;
    font-size: 1.5rem;
    margin-left: 6.5%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  ul{
    display: flex;
  }
  a{
    margin-right: 60px;
  }
}
</style>
