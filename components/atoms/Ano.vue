<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="ano">
        <p>Ano: {{ano}}</p>
    </div>
</template>

<script>
export default {
    props:{
        ano:{type: String, required: true}
    }
}
</script>

<style scoped>
.ano{
    margin-top: 0px;
}
@media only screen and (max-width: 767px) {
  p {
    flex-direction: column;
    font-size: 0.81rem;
  }
}
</style>