<template>
  <div class="linha-inferior">
    <hr />
  </div>
</template>

<style scoped>
.linha-inferior {
  margin: auto;
  margin-top: 16px;
  color: #E7EAEE;
}

@media only screen and (max-width: 767px) {
  .linha-inferior {
    margin-top: 8px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .linha-inferior {
    margin-top: 8px;
  }
}

@media only screen and (min-width: 1024px) {
  .linha-inferior {
    margin-top: 16px;
  }
}
</style>
