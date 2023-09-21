<script>
// INDEX.JS
import { services, products, reviews, blogPosts } from "../data/index";

// COMPONENTS
import AppHeader from "./AppHeader.vue";
import AppTitle from "./UtilityComponent/AppTitle.vue";
import Button from "./UtilityComponent/Button.vue";
import Card from "./UtilityComponent/Card.vue";
import CardProducts from "./UtilityComponent/CardProducts.vue";
import CardReviews from "./UtilityComponent/CardReviews.vue";
import AppFooter from "./AppFooter.vue";

export default {
  data() {
    return {
      title: "Hello world",
      services,
      products,
      reviews,
      blogPosts,
    };
  },

  components: {
    AppHeader,
    AppTitle,
    Button,
    Card,
    CardProducts,
    CardReviews,
    AppFooter,
  },
};
</script>

<template>
  <!-- HEADER -->
  <AppHeader />

  <!-- SECTION SERVICES -->
  <section class="services-section">
    <div class="container">
      <div class="py-5 text-center">
        <AppTitle />
        <Button />
      </div>
    </div>
    <div class="bg-white">
      <div class="container">
        <AppTitle class="py-4" />
        <div class="d-flex">
          <card
            v-for="service in services"
            :key="service.id"
            :img="service.pic"
            :title="service.title"
            :description="service.description"
          />
        </div>
        <div class="text-center pb-5">
          <Button />
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION PRODUCTS -->
  <section class="product-section">
    <AppTitle class="py-4" />
    <div class="d-flex">
      <CardProducts
        v-for="product in products"
        :key="product.id"
        :img="product.pic"
        :title="product.title"
        :price="product.price"
      />
    </div>

    <div class="text-center pt-5">
      <Button />
    </div>
  </section>
  <!-- SECTION SHAVING -->
  <section>
    <div class="container border-container">
      <div class="row">
        <div class="col-4 shaving-pic">
          <img src="\img\shaving_butter-400x400.png" alt="" />
        </div>
        <div class="col-8 container-text">
          <h5>AWARD WINNING</h5>
          <h2>Pro Barbers</h2>
          <p class="text-shaving">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            ratione eum sapiente est, quaerat quis, porro ullam atque magni
            animi molestias quisquam inventore molestiae voluptatibus et
            laborum, aut nobis impedit.
          </p>
          <Button />
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION REVIEWS -->
  <section>
    <div class="container">
      <AppTitle class="py-4" />
      <div class="d-flex">
        <CardReviews
          v-for="review in reviews"
          :key="review.id"
          :text="review.text"
          :pic="review.pic"
          :name="review.name"
        />
      </div>
    </div>
  </section>

  <!-- SECTION BLOG -->
  <section class="blog-section">
    <AppTitle class="py-4" />
    <div class="container">
      <div class="d-flex">
        <card
          v-for="blogPost in blogPosts"
          :key="blogPost.id"
          :img="blogPost.pic"
          :title="blogPost.title"
          :description="blogPost.description"
        />
      </div>
      <div class="text-center pb-5">
        <Button />
      </div>
    </div>
  </section>

  <AppFooter />
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
.container {
  min-height: 400px;
}
.border-container {
  border-top: 3px solid $color-button;
  transform: translateY(-2rem);
}
.shaving-pic {
  height: 100%;
  background-image: url("/img/avadabarbers-cta-background.jpg");
  background-size: cover;
}
.container-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 2rem;

  background-color: #121315;
}
.text-shaving {
  width: 60%;
}
</style>
