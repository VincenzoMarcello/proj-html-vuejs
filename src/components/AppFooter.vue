<script>
import { links } from "../data/index";
import Button from "./UtilityComponent/Button.vue";

export default {
  data() {
    return {
      links,
    };
  },

  components: {
    Button,
  },
};
</script>

<template>
  <footer class="bg-footer">
    <div class="container">
      <div class="row">
        <div class="col-4 text-center">
          <img src="/img/footer-one-500x390.png" class="footer-pic" alt="" />
          <Button />
        </div>
        <div class="col-4 text-center py-4">
          <img src="/img/avadabarbers-logo-x1.png" class="pb-4" alt="" />
          <p class="text-f" v-for="link in links">{{ link }}</p>
          <div class="py-5">
            <h4>FOLLOW US</h4>
            <div class="icon">
              <font-awesome-icon icon="fa-brands fa-facebook-f" />
              <font-awesome-icon icon="fa-brands fa-twitter" class="p-3" />
              <font-awesome-icon icon="fa-brands fa-youtube" class="p-3" />
              <font-awesome-icon icon="fa-brands fa-instagram" class="p-3" />
            </div>
          </div>
        </div>
        <div class="col-4 text-center">
          <img src="/img/footer-two-500x390.png" class="footer-pic" alt="" />
          <Button />
        </div>
      </div>
    </div>
  </footer>
  <div class="bg-grey text-center">
    <p>
      Copirigth 2012-2020 | Avada theme by Theme fusion | All right reserved |
      Power by worPress
    </p>
  </div>
</template>

<style lang="scss" scoped>
.footer-pic {
  display: block;
  width: 100%;
}
.text-f {
  margin-bottom: 0;
}

.bg-grey {
  background-color: #161718;
  height: 100px;
  line-height: 100px;
}
</style>
