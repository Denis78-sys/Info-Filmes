<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="rodape">
       <footer><span>Desenvolvido por <strong><a href="https://www.linkedin.com/in/denis-marques-771255105" target="_blank">Denis Marques</a></strong></span></footer>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900;1,9..40,1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,900&display=swap');

footer{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #3B3B3B;
    font-size: 0.75rem;
    font-weight: 300;
    height: 90px;
    width: 100%;
    position: fixed;
    bottom: 0;
}

strong{
    font-weight: 700;
}
/*span{
    font-family: 'Poppins', sans-serif;
}
a{
    font-family: 'Poppins', sans-serif;
}*/

@media only screen and (max-width: 767px) {
  footer{
    font-size: 0.5rem;
    height: 41px;
  }
}

/* Estilos para telas médias (tablets) */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  footer{
  height: 60px;}
}

/* Estilos para telas grandes (desktops) */
@media only screen and (min-width: 1024px) {
  footer{
  height: 80px;}
}
</style>