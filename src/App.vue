<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Barber shop",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <!-- <font-awesome-icon icon="fa-solid fa-cart-shopping" /> -->
</template>

<style lang="scss">
@use "./assets/scss/style.scss";
</style>
