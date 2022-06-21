import Vue from "vue";

Vue.filter("uppercase", (v) => v.toUpperCase());

//shorten text
Vue.filter("shorten", (val, replace) => val.substring(0, 60) + replace);
