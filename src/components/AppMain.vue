<script>
// INDEX.JS
import {
  servTitlesTop,
  servTopBtnText,
  servTitlesBottom,
  services,
  servBottomBtnText,
  productsTitles,
  products,
  productsBtnText,
  shavingTitles,
  shavingBtnText,
  reviewTitles,
  reviews,
  blogTitles,
  blogPosts,
  blogBtnText,
} from "../data/index";

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
      servTitlesTop,
      servTopBtnText,
      servTitlesBottom,
      services,
      servBottomBtnText,
      productsTitles,
      products,
      productsBtnText,
      shavingTitles,
      shavingBtnText,
      reviewTitles,
      reviews,
      blogTitles,
      blogPosts,
      blogBtnText,
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
        <AppTitle
          :intro="servTitlesTop.introText"
          :title="servTitlesTop.title"
        />
        <Button :text="servTopBtnText" />
      </div>
    </div>
    <img src="\img\triangle-white.jpg" class="w-100" alt="" />
    <div class="bg-white">
      <div class="container">
        <AppTitle
          class="py-4"
          :intro="servTitlesBottom.introText"
          :title="servTitlesBottom.title"
        />
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
          <Button :text="servBottomBtnText" />
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION PRODUCTS -->
  <section class="product-section">
    <img src="\img\triangle-black.jpg" class="w-100" alt="" />
    <AppTitle
      class="py-4"
      :intro="productsTitles.introText"
      :title="productsTitles.title"
    />
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
      <Button :text="productsBtnText" />
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
          <h5>{{ shavingTitles.introText }}</h5>
          <h2>{{ shavingTitles.title }}</h2>
          <p class="text-shaving">
            {{ shavingTitles.description }}
          </p>
          <Button :text="shavingBtnText" />
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION REVIEWS -->
  <section>
    <div class="container">
      <AppTitle
        class="py-4"
        :intro="reviewTitles.introText"
        :title="reviewTitles.title"
      />
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
    <img src="\img\triangle-grey.PNG" class="w-100 pt-5" alt="" />
  </section>

  <!-- SECTION BLOG -->
  <section class="blog-section">
    <AppTitle
      class="py-4"
      :intro="blogTitles.introText"
      :title="blogTitles.title"
    />
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
        <Button :text="blogBtnText" />
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
