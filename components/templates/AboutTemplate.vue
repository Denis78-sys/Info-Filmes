<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="about">
    <h1>Sobre</h1>
    <h2 class="bem-vindo">
      Bem-vindo ao INFO-FILMES: Seu Destino Cinematográfico Personalizado!
    </h2>
    <p>
      Olá, cinéfilo! Se você é apaixonado por cinema, está no lugar certo. O
      INFO-FILMES é um projeto cuidadosamente desenvolvido por <a href="https://www.linkedin.com/in/denis-marques-771255105" target="_blank"><strong>Denis Marques</strong></a>, um
      entusiasta de tecnologia e amante da sétima arte, que une suas habilidades
      como analista de sistemas, desenvolvedor web e designer para criar uma
      experiência única para os amantes do cinema.
    </p>
    <h2 class="info">O que é o INFO-FILMES?</h2>
    <p>
      O INFO-FILMES é mais do que um simples site; é um portal dedicado a
      fornecer informações detalhadas sobre uma ampla variedade de filmes. Nosso
      objetivo principal é proporcionar a você uma experiência cinematográfica
      mais rica, facilitando o acesso a informações relevantes sobre seus filmes
      favoritos.
    </p>
    <h2 class="info">
      Aviso Importante: Este projeto é para fins educacionais.
    </h2>
    <p>
      Lembre-se de que o INFO-FILMES é um projeto desenvolvido exclusivamente
      para fins de estudo. O objetivo principal é aprimorar habilidades e
      explorar o mundo emocionante da programação web aplicada à paixão por
      filmes. Sinta-se à vontade para explorar o INFO-FILMES, mergulhar no mundo
      do cinema e aproveitar as diversas funcionalidades que preparamos para
      você. Seja bem-vindo, cinéfilo, ao seu novo destino cinematográfico
      personalizado!
    </p>
  </div>
</template>

<style scoped>
.about-template{
    padding-bottom: 30px;
}
h1 {
  font-size: 1.5rem;
  margin-bottom: 64px;
}

h2 {
  font-size: 1rem;
}

.bem-vindo {
  margin-bottom: 28px;
  font-size: 1rem;
}
p {
  font-size: 0.9rem;
  text-align: justify;
  margin-bottom: 20px;
  padding-bottom: 8px;
}

.info {
  margin-bottom: 30px;
}

@media only screen and (max-width: 767px) {
  h1 {
    font-size: 1.5rem;
    margin-bottom: 32px;
  }

  h2 {
    font-size: 1rem;
  }

  .bem-vindo {
    margin-bottom: 24px;
    font-size: 1rem;
  }
  p {
    font-size: 0.87rem;
    margin-bottom: 20px;
    padding-bottom: 4px;
  }

  .info {
    margin-bottom: 24px;
  }
}

/* Estilos para telas médias (tablets) */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
    h1 {
    font-size: 1.5rem;
    margin-bottom: 32px;
  }

  h2 {
    font-size: 1rem;
  }

  .bem-vindo {
    margin-bottom: 24px;
    font-size: 1rem;
  }
  p {
    font-size: 0.87rem;
    margin-bottom: 20px;
    padding-bottom: 4px;
  }

  .info {
    margin-bottom: 24px;
  }
}

/* Estilos para telas grandes (desktops) */
@media only screen and (min-width: 1024px) {
}
</style>
