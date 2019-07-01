import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Buefy from "buefy";
import VueLazyload from "vue-lazyload";
import VueProgressBar from "vue-progressbar";
import Icon from "vue-awesome/components/Icon.vue";
import "./icons";

Vue.use(Buefy);
Vue.use(VueLazyload);
Vue.use(VueProgressBar, {
  color: "#E0612C",
  failedColor: "#E94429",
  thickness: "3px"
});

Vue.component("icon", Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  ...App
}).$mount("#app");
