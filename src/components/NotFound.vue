<template>
  <div id="NotFound">
    <div class="container">
      <article class="message is-danger">
        <section class="message-body">
          <div class="media">
            <div class="media-left">
              <span class="icon is-danger">
                <icon name="exclamation-circle" />
              </span>
            </div>
            <div class="media-content">
              <p class="title is-6">404 Not Found</p>
              <p class="subtitle is-6">The requested page was not found.</p>
            </div>
          </div>
        </section>
      </article>

      <h3 class="title">Are you lost?</h3>
      <p class="subtitle">Here are some links you may find helpful:</p>
      <ul>
        <router-link tag="li" to="/"><a>Home</a></router-link>
        <router-link tag="li" to="/about"><a>About</a></router-link>
        <router-link tag="li" to="/extensions"><a>Extensions</a></router-link>
        <router-link tag="li" to="/members"><a>Members</a></router-link>
      </ul>
      <hr />
      <ul>
        <li>
          <a href="/github" target="_blank" rel="noreferrer">GitHub</a>
        </li>
        <li>
          <a href="https://discuss.flarum.org" target="_blank" rel="noreferrer"
            >Flarum Community</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>
