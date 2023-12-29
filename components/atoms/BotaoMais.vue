<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="botao-mais">
    <!-- eslint-disable-next-line vue/this-in-template -->
    <NuxtLink
      :to="{
        name: 'sinopse',
        params: {
          id,
        },
      }"
      >Mais...</NuxtLink
    >
  </div>
</template>

<script>
export default {
  props: {
    id:{type: String, required: true},
  },
};
</script>

<style scoped>
a {
  font-size: 1rem;
  transition: color 0.3s ease;
}
a:hover {
  color: #a65c32;
}
</style>
