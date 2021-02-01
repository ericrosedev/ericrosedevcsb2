import Vue from "vue";
import App from "./App.vue";
import zdog from "zdog";
import VueMeta from "vue-meta";
import checkView from "vue-check-view";
import axios from 'axios';

Vue.prototype.$http = axios;

Vue.config.productionTip = false;
Vue.use(zdog);
Vue.use(VueMeta);
Vue.use(checkView);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
