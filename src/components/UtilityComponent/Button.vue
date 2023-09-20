<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <button class="main-button mt-4" href="#">
    <h4>MEET YOUR NEW BARBER</h4>
  </button>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/variables" as *;
.main-button {
  background-color: transparent;
  border: 2px solid $color-button;
  padding: 1rem 2rem;
}
</style>
