<template>
  <SinopseTemplate />
</template>

<script>
export default {
  layout: "infoFilmes",

  data() {
    return {
      // eslint-disable-next-line no-undef
      idBfilme: this.$route.params.id,
    };
  },
  created() {
    if (this.idBfilme === undefined) {
      // eslint-disable-next-line no-console
      this.$store.dispatch("fetchTodo", "tt0339291");

      this.$router.replace("/");
    } else {
      this.$store.dispatch("fetchTodo", this.idBfilme);
    }
  },
};
</script>

<style scoped></style>
