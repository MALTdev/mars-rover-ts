import "./style.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Rover from "./Rover.vue";
import Control from "./Control.vue";

import { useRover } from "./useRover.ts";
import { useControl } from "./useControl.ts";

const { landRover } = useRover();
const { initControl } = useControl();

landRover();
initControl();

const routes = [
  { path: "/", redirect: '/rover' },
  { path: "/rover", component: Rover },
  { path: "/control", component: Control },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
