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
              <span class="tag" v-if="member.website">
                <a :href="member.website" target="_blank"
                  ><icon name="link"
                /></a>
              </span>

              <span class="tag">
                <a :href="`https://github.com/${member.github}`" target="_blank"
                  ><icon name="brands/github"
                /></a>
              </span>

              <span v-if="member.donate">&nbsp;&nbsp;&nbsp;&nbsp;</span>

              <span
                class="tag"
                v-for="platform in member.donate"
                :key="`${member.name}-${platform}`"
              >
                <a
                  :href="donationPlatforms[platform](member.github)"
                  target="_blank"
                  ><icon :name="`brands/${platform}`" style="color: #E94429"
                /></a>
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
    flex-basis: 33%;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: center;

    .card {
      display: inline-block;
      border-radius: 10px;
      width: 250px;
    }
  }
}
</style>

<script>
import members from "@/data/members.yml";

export default {
  name: "Members",
  data: () => ({
    members: members.filter(e => !e.hide),
    donationPlatforms: {
      github: u => `https://github.com/sponsors/${u}`,
      patreon: u => `https://patreon.com/${u}`
    }
  })
};
</script>
