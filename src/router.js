import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Members from "./views/Members.vue";
import NotFound from "./components/NotFound";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "is-active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Friends of Flarum"
      }
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/members",
      name: "members",
      component: Members
    },
    {
      path: "*",
      name: "notfound",
      component: NotFound,
      meta: {
        title: "404 Not Found",
        progress: {
          func: [
            {
              call: "color",
              modifier: "temp",
              argument: "#E94429"
            }
          ]
        }
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.title || to.name) {
    document.title =
      to.meta.title || to.name.charAt(0).toUpperCase() + to.name.slice(1);
  }

  next();
});

router.beforeEach((to, from, next) => {
  let meta;

  if ((meta = to.meta.progress)) {
    router.app.$Progress.parseMeta(meta);
  }

  next();
});

export default router;
