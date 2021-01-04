import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from '../views/Dashboard';
// import Home from '../views/Home_07_toolbar.vue'
// import Home from '../views/Home_06_breakpoints.vue'
// import Home from '../views/Home_05_button_icons.vue'
// import Home from '../views/Home_04_text_color.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/projects",
    name: "projects",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Projects.vue"),
  },
  {
    path: "/team",
    name: "team",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Team.vue"),
  },
  {
    path: "/breakpoints",
    name: "breakpoints",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home_06_breakpoints.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
