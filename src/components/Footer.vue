<template>
  <footer id="footer">
    <div class="content has-text-centered">
      <p>
        Copyright © {{ year }}
        <a href="https://friendsofflarum.org">FriendsOfFlarum</a>.
      </p>
    </div>
  </footer>
</template>

<style lang="scss">
#footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 60px;
  height: 60px;
  background-color: hsl(0, 0%, 98%);
}
</style>

<script>
import dayjs from "dayjs";

export default {
  data: () => ({
    year: dayjs().year()
  })
};
</script>
