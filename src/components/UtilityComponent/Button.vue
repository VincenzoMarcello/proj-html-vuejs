<script>
export default {
  props: {
    text: String,
  },
};
</script>

<template>
  <button class="main-button mt-4" href="#">
    <h4>{{ text }}</h4>
  </button>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/variables" as *;
.main-button {
  background-color: transparent;
  border: 2px solid $color-button;
  padding: 1rem 2rem;
}

.main-button:hover {
  color: rgb(248, 247, 202);
  border-color: rgb(75, 75, 75);
  background-color: rgba(212, 204, 204, 0.54);
  transform: scale(1.1);
  transition: 1s;
}
</style>
