import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import VAnimateCss from 'v-animate-css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faShoppingCart, faDollarSign} from "@fortawesome/free-solid-svg-icons";

Vue.use(VAnimateCss);
library.add(faShoppingCart, faDollarSign);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");