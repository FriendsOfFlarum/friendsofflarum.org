<template>
  <div id="Extensions" class="container is-fluid">
    <h1 class="title">Friends of Flarum</h1>
    <h2 class="subtitle">
      Bringing you free and well maintained extensions for Flarum.
    </h2>
    <section class="extensions">
      <div class="columns is-multiline" v-if="exts">
        <div class="column extension" v-for="ext in getExts()" :key="ext.name">
          <Extension :ext="ext" />
        </div>
      </div>
      <b-loading :active.sync="loading" :is-full-page="false"></b-loading>

      <b-pagination
        :total="exts && exts.length"
        v-if="exts"
        :current.sync="current"
        :per-page="12"
        :rounded="true"
        :centered="true"
        :order="'is-centered'"
      >
        <b-pagination-button
          slot="previous"
          slot-scope="props"
          :page="props.page"
        >
          <icon name="angle-left" />
        </b-pagination-button>

        <b-pagination-button slot="next" slot-scope="props" :page="props.page">
          <icon name="angle-right" />
        </b-pagination-button>
      </b-pagination>
    </section>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/styles/animations.less";

.extensions {
  margin-bottom: 20px;
}

.columns {
  justify-content: space-around;
}

.extension {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 25%;
  padding: 0 20px;
  margin: 5px 0;
  min-width: 400px;

  .card {
    border-radius: 10px;
  }
}
</style>

<script>
import Extension from "@/components/Extension";
import extensions from "@/data/extensions";

export default {
  name: "Extensions",
  components: { Extension },
  data: () => ({
    exts: null,
    loading: true,
    current: 1
  }),
  mounted() {
    extensions.list().then(exts => {
      this.exts = exts.sort((a, b) => b.downloads - a.downloads);
      this.loading = false;
    });
  },
  methods: {
    getExts() {
      return (
        this.exts && this.exts.slice((this.current - 1) * 12, 12 * this.current)
      );
    }
  }
};
</script>
