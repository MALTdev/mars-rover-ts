import "./style.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Rover from "./views/Rover.vue";
import MissionControl from "./views/MissionControl.vue";

import { useRover } from "./composables/useRover.ts";
import { useControl } from "./composables/useControl.ts";

useRover().landRover();
useControl().initControl();

const routes = [
  { path: "/", redirect: '/rover' },
  { path: "/rover", component: Rover },
  { path: "/mission-control", component: MissionControl },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
