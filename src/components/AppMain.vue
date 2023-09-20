<script>
import AppHeader from "./AppHeader.vue";
import AppTitle from "./UtilityComponent/AppTitle.vue";
import Button from "./UtilityComponent/Button.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: {
    AppHeader,
    AppTitle,
    Button,
  },
};
</script>

<template>
  <AppHeader />
  <section class="services-section">
    <div class="container">
      <div class="py-5 text-center">
        <AppTitle />
        <Button />
      </div>
    </div>
    <div class="bg-white"></div>
  </section>
  <h1>{{ title }}</h1>
</template>

<style lang="scss" scoped></style>
