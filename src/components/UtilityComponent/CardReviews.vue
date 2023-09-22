<script>
export default {
  props: {
    text: String,
    pic: String,
    name: String,
  },
};
</script>

<template>
  <div class="col-4 px-5 text-center">
    <p class="pt-5">
      {{ text }}
    </p>
    <img :src="pic" class="pic-circle" alt="" />
    <h6>{{ name }}</h6>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/variables" as *;
.pic-circle {
  width: 30%;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
  padding: 2rem 0;
}

.pic-circle:hover {
  transform: scale(1.2);
  transition: 1s;
  cursor: pointer;
}

h6 {
  font-style: italic;
  color: $color-button;
}
</style>
