<template>
  <div class="card">
    <div class="card-content">
      <a
        :href="`https://extiverse.com/extension/${info.name}`"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <div class="card-image">
            <img
              v-lazy="
                `https://flarum-badge-api.davwheat.dev/v1/ext-icon//${info.name}`
              "
              :alt="info.name"
              class="animated"
            />
          </div>

          <b-loading :active.sync="loading" :is-full-page="false"></b-loading>
        </div>

        <p class="title">
          {{
            get(info, "extra.flarum-extension.title", info.name).replace(
              "FoF ",
              ""
            )
          }}
        </p>
      </a>

      <p>
        <icon name="download" scale=".75" />
        {{ info.downloads }}
      </p>

      <p class="description" v-if="info.description">
        {{ info.description }}
      </p>

      <div class="tags" v-if="info.authors">
        <span
          class="tag"
          v-for="member in members"
          :key="member.name || member"
        >
          <a
            :href="member.github && `https://github.com/${member.github}`"
            target="_blank"
            rel="noreferrer"
          >
            {{ member.name || member }}
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import members from "@/data/members.yml";
import extensions from "@/data/extensions";
import get from "lodash/get";

export default {
  props: ["ext"],
  data() {
    return {
      info: this.ext || {},
      loading: true
    };
  },
  mounted() {
    extensions.get(this.ext.name).then(data => {
      this.info = { ...this.info, ...data };
      this.loading = false;
    });
  },
  methods: {
    get
  },
  computed: {
    members() {
      const authors = this.info.authors;

      return authors
        .map(a =>
          members.find(m => m.name === a.name || a.name.startsWith(m.packagist))
        )
        .filter(Boolean);
    }
  }
};
</script>
