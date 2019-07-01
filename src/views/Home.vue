<template>
  <div id="Extensions" class="container is-fluid">
    <h1 class="title">Friends of Flarum</h1>
    <h2 class="subtitle">
      Bringing you free and well maintained extensions for Flarum.
    </h2>
    <section class="extensions">
      <div class="columns is-multiline" v-if="exts">
        <div class="column extension" v-for="ext in exts" :key="ext.name">
          <Extension :ext="ext" />
        </div>
      </div>
      <b-loading :active.sync="loading" :is-full-page="false"></b-loading>
    </section>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/styles/animations.less";

.columns {
  justify-content: space-around;
}

.extension {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 25%;
  min-width: 400px;

  .card {
    width: 100%;
  }
}
</style>

<script>
// import members from "@/data/members.yml";
// import extensions from "@/data/extensions.yml";
import Extension from "@/components/Extension";
import extensions from "@/data/extensions";

// const exts = extensions.map(e => {
//   e.authors = e.authors.map(
//     author =>
//       members.find(
//         m => (m.name && m.name.toLowerCase() === author) || m.github === author
//       ) || author
//   );
//   e.id = e.id || e.name.toLowerCase();
//   return e;
// });

export default {
  name: "Extensions",
  components: { Extension },
  data: () => ({
    exts: null,
    loading: true
  }),
  mounted() {
    extensions.list().then(exts => {
      this.exts = exts.sort((a, b) => b.downloads - a.downloads);
      this.loading = false;
    });
  }
};
</script>
