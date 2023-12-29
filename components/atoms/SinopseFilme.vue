<template>
  <div class="sinopse-filme">
    <p><span>SINOPSE: </span>{{ sinopse }}</p>
  </div>
</template>

<script>
export default {
  props: {
    sinopse: { type: String, required: true },
  },
};
</script>

<style scoped>
span {
  color: #f2c36b;
  text-align: justify;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
p {
  color: white;
  text-align: justify;
}
@media only screen and (max-width: 767px) {
 span{
   font-size: 0.81rem;
 }

  p {
    font-size: 0.81rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
