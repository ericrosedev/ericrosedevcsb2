<template lang="pug">
.slider-section.slider-section--right.recentTweets(v-view)
  .arm
    .content
      .items
        .title
          span Some Tweets
        Timeline(:options="{ tweetLimit: '10', theme: 'light'}" class="ttimeline" id="ericrosedev" sourceType="profile")
          | loading..
  .armbg
</template>

<script>
import { Timeline } from 'vue-tweet-embed';
export default {
  name: "RecentTweets",
  components: {
    Timeline
  }
};
</script>

<style lang="scss">
@import "../scss/_scss.scss";
.recentTweets {
  margin-top: 3rem;

  .arm {
    background: none !important;
    background-color: transparent !important;

    .content {

      .items {
        position: relative;
        padding: 0 !important;
        flex-direction: row-reverse !important;
        justify-content: space-evenly !important;

        .title {
          margin-top: 9rem;
          opacity: 0;
          transform: rotate(0deg);
          padding: 0 4rem;
          transition: all 0.5s;
          font-size: 78px;
          color: #d2d2d2;

          span {
            white-space: nowrap;
            @media (max-width: 905px){
              white-space: inherit;
            }
          }

          @media (max-width: 1120px){
            font-size: 48px;
          }

          @media (max-width: 905px){
            padding: 0 2rem !important;
            font-size: 32px;
          }

          @media (max-width: 400px){
            display: none;
          }
        }

        .ttimeline {
          width: 660px;
        }
      }
    }
  }

  @media (max-width: 400px){
    margin-top: 1rem;
  }
  
}
.recentTweets.view-in {
  .arm {
    transform: translateX(100vw);
  }
}
.recentTweets.view-in--gt-third {
  .arm {
    transform: translateX(0);

    .content {

      .items {

        .title {
          margin-top: 9rem;
          opacity: 1;
          transform: rotate(3deg);
          padding: 0 4rem;
        }
      }
    }
  }
}
.recentTweets.view-in--gt-half {
  .arm {
    transform: translateX(0);

    .content {

      .items {
        
        .title {
          margin-top: 9rem;
          opacity: 1;
          transform: rotate(3deg);
          padding: 0 4rem;
        }
      }
    }
  }
}
.recentTweets.view-in--full {
  .arm {
    transform: translateX(0);

    .content {

      .items {
        
        .title {
          margin-top: 9rem;
          opacity: 1;
          transform: rotate(3deg);
          padding: 0 4rem;
        }
      }
    }
  }
}
.recentTweets.view-out {
  .arm {
    transform: translateX(100vw);
  }
}

</style>