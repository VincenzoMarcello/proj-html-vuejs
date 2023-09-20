// # Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// # Bootstrap JS
import * as bootstrap from "bootstrap";

// # importiamo fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
library.add(faCartShopping);

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
