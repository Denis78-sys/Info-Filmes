<template>
  <HomeTemplate />
</template>

<script>
export default {
  layout: "infoFilmes",
  created(){
    this.$store.dispatch('fetchTodos')
  }
};
</script>

<style scoped></style>