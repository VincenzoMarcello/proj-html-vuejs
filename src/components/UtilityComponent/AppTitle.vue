<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  props: {
    intro: String,
    title: String,
  },
};
</script>

<template>
  <div class="text-center">
    <h5>{{ intro }}</h5>
    <h2>{{ title }}</h2>
  </div>
</template>

<style lang="scss" scoped></style>
