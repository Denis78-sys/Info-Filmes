<template>
  <div class="pag_nao_encontrada">
    <h1>Resultados Não Encontrados</h1>
    <div class="texto">
      <h2>Caro Usuário!</h2>
      <p>
        Lamentamos informar que não foi possível encontrar resultados
        correspondentes à sua pesquisa. Nossa equipe está constantemente
        trabalhando para melhorar a precisão e a abrangência de nossa base de
        dados, mas, infelizmente, não encontramos informações que atendam aos
        critérios da sua pesquisa.
      </p>
      <p>
        Por favor, revise os termos de busca ou tente uma abordagem diferente.
      </p>
      <p>Agradecemos pela compreensão.</p>
      <p>Atenciosamente,</p>
      <p>A Equipe do <strong>INFO-FILMES</strong>.</p>
    </div>
    <NuxtLink to="/">Voltar</NuxtLink>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.pag_nao_encontrada {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 43px;
}
h1 {
  font-size: 1.5rem;
}
h2 {
  font-size: 1.2rem;
}
.texto {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
p {
  text-align: justify;
  font-size: 1rem;
}
a {
  margin-top: 16px;
  font-size: 0.85rem;
  color: #a65c32;
}
@media only screen and (max-width: 767px) {
  .pag_nao_encontrada {
    margin-top: 8px;
    gap: 24px;
  }
  h1 {
    font-size: 1.25rem;
  }
  h2 {
    font-size: 0.95rem;
  }
  .texto {
    gap: 16px;
  }
  p {
    font-size: 0.87rem;
  }
}
</style>
