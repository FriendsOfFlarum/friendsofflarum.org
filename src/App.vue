<template>
  <div id="app">
    <Navbar />

    <div id="content">
      <transition name="fade">
        <keep-alive> <router-view /> </keep-alive>
      </transition>
    </div>

    <vue-progress-bar />

    <Footer />
  </div>
</template>

<style lang="scss">
@import "assets/styles/bulma.scss";
</style>

<style lang="less">
@import "assets/styles/index.less";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  position: relative;
  min-height: 100vh;
  padding-bottom: 60px;
}
</style>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  mounted() {
    this.$Progress.finish();
  },
  created() {
    this.$Progress.start();

    window.router = this.$router;

    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress) {
        const meta = to.meta.progress;
        this.$Progress.parseMeta(meta);
      }

      this.$Progress.start();
      next();
    });

    this.$router.afterEach(() => {
      this.$Progress.finish();
    });
  }
};
</script>
