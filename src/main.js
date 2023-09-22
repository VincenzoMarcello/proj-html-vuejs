// # Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// # Bootstrap JS
import * as bootstrap from "bootstrap";

// # importiamo fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
library.add(
  faCartShopping,
  faBars,
  faTwitter,
  faFacebookF,
  faYoutube,
  faInstagram,
  faCopyright
);

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
