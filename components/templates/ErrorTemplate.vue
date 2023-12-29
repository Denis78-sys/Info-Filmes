<template>
  <div class="error-template">
    <h1>Ops! Algo deu errado...</h1>
    <div class="texto">
      <p>
        Lamentamos informar que encontramos um pequeno contratempo. Parece que
        algo saiu dos trilhos nos bastidores.
      </p>
      <p>
        Agradecemos sua paciência e compreensão. Estamos comprometidos em
        proporcionar a você a melhor experiência possível, e esperamos resolver
        essa situação rapidamente.
      </p>
      <p>Atenciosamente,</p>
      <p>A Equipe do <strong>INFO-FILMES</strong>.</p>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    // Verificar se a rota atual não é a página inicial ("/")
    if (this.$route.path !== "/") {
      // Redirecionar para a página inicial
      this.$router.push("/");
    }
  },
};
</script>
<style scoped>
.error-template {
  margin-top: 43px;
  display: flex;
  flex-direction: column;
  gap: 43px;
}
h1{
    font-size: 1.5rem;
}
.texto{
    display: flex;
  flex-direction: column;
  gap: 24px;
}
p {
  text-align: justify;
  font-size: 1rem;
}


@media only screen and (max-width: 767px) {
  .error-template {
    gap: 24px;
  }
  h1{
    font-size: 1.25rem;
  }
  .texto{
    gap: 16px;
  }
  p {
    font-size: 0.87rem;
  }
}
</style>
