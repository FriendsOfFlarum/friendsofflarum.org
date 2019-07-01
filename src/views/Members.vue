<template>
  <div id="Members" class="container is-fluid">
    <h1 class="title">Members</h1>
    <div class="columns is-multiline">
      <div class="column member" v-for="member in members" :key="member.name">
        <div class="card">
          <div class="card-content">
            <a
              :href="member.github && `https://github.com/${member.github}`"
              target="_blank"
              rel="noreferrer"
            >
              <img
                v-lazy="`https://github.com/${member.github}.png`"
                :alt="member.name"
                class=" animated"
              />
              <p class="title">{{ member.name }}</p>
            </a>

            <div class="tags">
              <span class="tag" v-for="role in member.roles" :key="role">
                {{ role }}
              </span>
            </div>

            <p class="description" v-if="member.description">
              {{ member.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import "../assets/styles/animations.less";

#Members {
  .member {
    min-width: 400px;

    .card {
      width: 100%;
    }
  }
}
</style>

<script>
import members from "@/data/members.yml";

export default {
  name: "Members",
  data: () => ({
    members: members.filter(e => !e.hide)
  })
};
</script>
