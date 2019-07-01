import Vue from "vue";
import Router from "vue-router";

const Home = () => import(/* webpackChunkName: "home" */ "./views/Home.vue");
const About = () => import(/* webpackChunkName: "about" */ "./views/About.vue");
const Members = () =>
  import(/* webpackChunkName: "members" */ "./views/Members.vue");
const NotFound = () =>
  import(/* webpackChunkName: "not-found" */ "./components/NotFound.vue");

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
