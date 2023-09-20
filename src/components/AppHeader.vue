<script>
// import dLinks from "../data/index.js";
import Button from "./UtilityComponent/Button.vue";

export default {
  data() {
    return {
      dLinks: [
        "Home",
        "About Us",
        "Services",
        "Shop",
        "Our Team",
        "Blog",
        "Contact Us",
      ],
    };
  },

  components: {
    Button,
  },
};
</script>

<template>
  <header class="bg-header">
    <div class="container">
      <nav class="d-flex justify-content-between pt-4">
        <img src="/img/avadabarbers-logo-x1.png" alt="" />

        <div class="d-flex align-items-center">
          <div>
            <a href="#">
              <font-awesome-icon
                icon="fa-solid fa-cart-shopping"
                class="text-light"
            /></a>
          </div>

          <div class="dropdown ms-2">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <font-awesome-icon icon="fa-solid fa-bars" />
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li v-for="dLink in dLinks">
                <a class="dropdown-item text-center" href="#">{{ dLink }}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="d-flex align-items-center">
        <div class="col-6">
          <div>
            <h1>Barber Shop</h1>
            <p class="pt-4">The Pinnacle of Male Grooming</p>
            <Button />
          </div>
        </div>
        <div class="col-6 text-center py-5">
          <img
            class="header-pic"
            src="/img/avadabarbers_hero_focalmirror.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
.bg-header {
  background-image: url("/img/avadabarbers-homepage-hero-bg.jpg");
  background-size: cover;

  h1::after {
    content: "";
    display: block;
    width: 30%;
    height: 3px;
    background-color: $color-button;
    margin-top: 15px;
  }
  .header-pic {
    max-width: 80%;
  }
  .btn-secondary {
    --bs-btn-color: white;
    --bs-btn-bg: transparent;
    --bs-btn-border-color: transparent;
  }
  .dropdown-toggle::after {
    content: none;
  }
  .dropdown-item:hover {
    color: $color-button;
  }
}
</style>
