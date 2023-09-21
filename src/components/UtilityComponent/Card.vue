<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  props: {
    img: String,
    title: String,
    description: String,
  },
};
</script>

<template>
  <div class="col-4 px-5 text-center">
    <div class="container-pic">
      <img :src="img" class="img-services py-5" alt="" />
    </div>
    <div>
      <h3>{{ title }}</h3>
      <p class="fs-5">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-pic {
  height: 200px;
}
.img-services {
  width: 20%;
}
</style>
