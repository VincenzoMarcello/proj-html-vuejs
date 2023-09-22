<script>
import { footerBtnLeftText, links, footerBtnRightText } from "../data/index";
import Button from "./UtilityComponent/Button.vue";

export default {
  data() {
    return {
      footerBtnLeftText,
      links,
      footerBtnRightText,
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
          <Button :text="footerBtnLeftText" />
        </div>
        <div class="col-4 text-center py-4">
          <img src="/img/avadabarbers-logo-x1.png" class="pb-4" alt="" />
          <p class="text-f" v-for="link in links">{{ link }}</p>
          <div class="py-5">
            <h4 class="pb-5">FOLLOW US</h4>
            <div class="icon">
              <a href=""
                ><font-awesome-icon icon="fa-brands fa-facebook-f" class="p-2"
              /></a>
              <a href=""
                ><font-awesome-icon icon="fa-brands fa-twitter" class="p-2"
              /></a>
              <a href=""
                ><font-awesome-icon icon="fa-brands fa-youtube" class="p-2"
              /></a>
              <a href=""
                ><font-awesome-icon icon="fa-brands fa-instagram" class="p-2"
              /></a>
            </div>
          </div>
        </div>
        <div class="col-4 text-center">
          <img src="/img/footer-two-500x390.png" class="footer-pic" alt="" />
          <Button :text="footerBtnRightText" />
        </div>
      </div>
    </div>
  </footer>
  <div class="bg-grey text-center">
    <p>
      <font-awesome-icon icon="fa-regular fa-copyright" />
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

a {
  color: #bdbcbc;
}
.bg-grey {
  background-color: #161718;
  height: 100px;
  line-height: 100px;
}

p {
  font-size: 1rem;
}
</style>
