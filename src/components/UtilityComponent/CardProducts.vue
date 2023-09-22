<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  props: {
    img: String,
    title: String,
    price: String,
  },
};
</script>

<template>
  <div class="col-3 px-5 text-center">
    <div class="container-pic">
      <img :src="img" class="product py-5" alt="" />
    </div>
    <div>
      <h3>{{ title }}</h3>
      <p class="fs-5">
        {{ price }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/variables" as *;
.product {
  width: 100%;
}
.product:hover {
  transform: scale(1.2);
  transition: 1s;
  cursor: pointer;
}
h3:hover {
  transform: scale(1.2);
  transition: 1s;
  cursor: pointer;
  color: $color-secondary-title;
}

p {
  color: $color-button;
}
</style>
