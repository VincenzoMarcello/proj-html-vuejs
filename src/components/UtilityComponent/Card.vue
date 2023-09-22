<script>
export default {
  props: {
    img: String,
    title: String,
    description: String,
  },
};
</script>

<template>
  <div class="col-4 px-4 text-center">
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
  min-height: 250px;
}
.img-services {
  width: 25%;
}

.img-services:hover {
  transform: scale(1.1);
  transition: 1s;
  cursor: pointer;
}
</style>
