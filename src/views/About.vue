<template>
  <div id="About" class="container is-fluid">
    <h1 class="title">About</h1>

    <div class="content">
      <blockquote>
        <p>Dear Flarumites,</p>
        <p>
          Keeping extensions around, upgrading them to the newest Flarum
          release, is an arduous job. The more extensions you create, the more
          effort has to be made to get all of them up to spec. This has become
          exceptionally clear with Flarum in turbulence for the past two years.
        </p>
        <p>
          Now that beta 8 seems to close a few of the toughest milestones
          (backend rewrite, frontend preparations and extenders) developers of
          two of the most prominent teams - ReFlar and Flagrow - have decided to
          come up with a task force called <strong>Friends of Flarum</strong>.
        </p>
        <p>
          With Friends of Flarum we ambition to guarantee well maintained, free
          extensions. At this point none of the Flagrow or ReFlar extensions are
          going to be renamed/moved, but extensions by others which have been
          abandoned will be brought into this team and made compatible.
        </p>
        <p>
          The project can be found on GitHub at
          <a href="https://github.com/FriendsOfFlarum" target="_blank"
            >https://github.com/FriendsOfFlarum</a
          >. Any inquiries can be made in this discussion or by contacting any
          of the
          <a
            href="https://github.com/orgs/FriendsOfFlarum/people"
            target="_blank"
            >listed members</a
          >
          on the GitHub organisation.
        </p>

        <p>
          —
          <a
            href="https://discuss.flarum.org/d/16242-friends-of-flarum-the-collaboration-for-maintained-extensions"
            target="_blank"
            >@luceos on Flarum Community</a
          >, September '18
        </p>
      </blockquote>

      <blockquote>
        <p>
          Started September last year and already responsible for 33
          repositories on GitHub! That's over 30 extensions 😱!
        </p>
        <p>
          We've come a long way, with us moving over most Flagrow extensions and
          the community requesting the upgrade of quite some abandoned
          extensions, we are very confident of our success. Now that we do, we'd
          like to step up. A custom logo is underway, we're considering a
          simplistic website and we're pondering about our perspectives of the
          future. That's also the reason we set up a
          <a href="/discord" target="_blank">dedicated discord server</a>
          and our own <a href="/donate" target="_blank">Open Collective</a>.
        </p>
        <p>
          The <a href="/donate" target="_blank">Open Collective</a> in our
          scheme is an important factor. The more backers we have, the faster
          we're able to upgrade our own and other extensions, as well as fix
          bugs and develop new features! Therefor, please consider
          <strong>backing the Flarum extension maintenance team</strong>.
        </p>
        <p>
          —
          <a
            href="https://discuss.flarum.org/d/16242-friends-of-flarum-the-collaboration-for-maintained-extensions/24"
            target="_blank"
            >@luceos on Flarum Community</a
          >, May '19
        </p>
      </blockquote>

      <blockquote>
        <p>
          Almost a year in, with 36 extensions and over 36,000 downloads 🙉
        </p>
        <p>
          While our original intent was simply to maintain &amp; revive old
          extensions, we&#39;ve already created 13 original extensions.
        </p>
        <p>
          We do have a simplistic website (the design of which I stole from the
          ReFlar website 🙈) which loads our extensions directly from Packagist
          and orders them by downloads. You can see it in action @
          <a href="https://friendsofflarum.org" target="_blank"
            >https://friendsofflarum.org</a
          >.
        </p>
        <p>
          You may have noticed that there haven&#39;t been as many extensions
          recently, and that is partially because of a lack of commissioned
          work. We don&#39;t always have the time to be developing extensions,
          specially as many of us are part of the Flarum team itself (do
          remember that Friends of Flarum is <strong>not</strong> an official
          extension group) and have other commitments to family, work, etc.
        </p>
        <p>
          To help us out, please feel free to donate to both, if possible,
          <a href="https://flarum.org/donate/" target="_blank">Flarum</a> and
          <a href="https://friendsofflarum.org/donate" target="_blank"
            >Friends of Flarum</a
          >. Flarum is powerful because of third party extensions.
        </p>
        <p>
          —
          <a
            href="https://discuss.flarum.org/d/16242-friends-of-flarum-the-collaboration-for-maintained-extensions/25"
            target="_blank"
            >@datitisev on Flarum Community</a
          >, Aug '19
        </p>
      </blockquote>

      <h2 class="is-size-4">Following Our Work</h2>
      <p>
        You can find our extensions on
        <a href="/github" target="_blank">GitHub</a>. <br />
        You can also join our
        <a href="/discord" target="_blank">Discord</a> server for even more fun!
      </p>
    </div>
  </div>
</template>

<style lang="less">
@import "../assets/styles/animations.less";

.timeline {
  list-style: none;
  padding: 10px 0 10px;
  position: relative;
  font-size: 1.1em;

  &:before {
    background-color: #ccc;
    content: "";
    bottom: 50px;
    top: 50px;
    left: calc(50% - 1.5px);
    position: absolute;
    width: 3px;
  }

  .timeline-item {
    margin-bottom: 10px;
    position: relative;
    display: flex;
    flex-direction: row;

    &:nth-of-type(even) {
      flex-direction: row-reverse;
      text-align: right;
    }

    &.timeline-item-small {
      margin-top: -5px;
      margin-bottom: 0;

      .timeline-title {
        font-size: 1em;
        font-weight: normal;
      }

      .timeline-image {
        height: 40px;
        width: 40px;
        margin-top: 5px;
        left: calc(50% - 20px);
      }
    }

    .timeline-panel,
    .timeline-opposite {
      flex: 1 1 100%;
    }

    .timeline-panel {
      border-radius: 2px;
      padding: 20px;
    }

    .timeline-image {
      font-size: 1.4em;
      top: 16px;
      height: 50px;
      width: 50px;
      z-index: 100;

      left: calc(50% - 25px);
      align-self: center;
      position: absolute;

      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;

        &[lazy="loaded"] {
          box-shadow: 0px 0px 5px #000000;
        }
      }
    }

    .timeline-date {
      font-size: 0.7em;
      color: #555;
    }

    .timeline-title {
      font-size: 1.1em;
      font-weight: 500;
    }
  }

  .timeline-item:nth-child(odd) .timeline-panel {
    margin-left: 96px;
  }

  .timeline-item:nth-child(even) .timeline-panel {
    margin-right: 96px;
  }
}
</style>
