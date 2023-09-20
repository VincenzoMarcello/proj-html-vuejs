<script>
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      title: "Barber shop",
    };
  },

  components: {
    AppMain,
  },
};
</script>

<template>
  <AppMain />
  <h1>{{ title }}</h1>
</template>

<style lang="scss">
@use "./assets/scss/style.scss";
</style>
