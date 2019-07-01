<template>
  <nav
    id="navbar"
    class="navbar is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container is-fluid">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <!-- <img src="../assets/logo.png" height="28" /> -->
          Friends of Flarum
        </router-link>

        <a
          role="button"
          :class="'navbar-burger burger ' + (isActive && 'is-active')"
          aria-label="menu"
          aria-expanded="false"
          @click="isActive = !isActive"
        >
          <span aria-hidden="true"></span> <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbar-menu"
        :class="'navbar-menu navbar-end ' + (isActive && 'is-active')"
      >
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/members" class="navbar-item">Members</router-link>

        <a href="/github" class="navbar-item" target="_blank" rel="noreferrer">
          <icon name="brands/github" scale="1.5" />
        </a>

        <a href="/discord" class="navbar-item" target="_blank" rel="noreferrer">
          <icon name="brands/discord" scale="1.5" />
        </a>

        <a href="/donate" class="navbar-item" target="_blank" rel="noreferrer">
          <icon name="donate" scale="1.5" />
        </a>
      </div>
    </div>
  </nav>
</template>

<style lang="less">
#navbar {
  background-color: #263238;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 0.9rem;

  a {
    transition: color 0.25s linear;
    font-weight: 500;

    &.is-active {
      color: #42b983;
      background-color: transparent;
    }
  }

  img {
    height: 30px;
  }
}
</style>

<script>
export default {
  name: "Navbar",
  data: () => ({
    isActive: false
  })
};
</script>
