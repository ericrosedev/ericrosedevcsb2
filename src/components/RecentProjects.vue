<template lang="pug">
.slider-section.slider-section--left.rp(v-view)
  .arm
    .content
      .items

      .project(class="grurple")
          a(href="https://codepen.io/ericrosedev/full/MWbGjRb" target="_blank")
            img(src="https://cdn.dribbble.com/users/6661484/screenshots/15217016/media/f315d2fd58f2cb2c3e81b7754f74b1c6.gif")

        .project(class="sio")
          a(href="https://codepen.io/ericrosedev/full/XWNaNwg" target="_blank")
            img(src="https://cdn.dribbble.com/users/6661484/screenshots/15157482/media/aef9d21f5767db596893a43187b32127.gif")

        .project(class="ror")
          a(href="https://codepen.io/ericrosedev/full/WNorpRd" target="_blank")
            img(src="https://cdn.dribbble.com/users/6661484/screenshots/15077083/media/cbaad2898f2c684cbd2a9df556540781.gif")

        .project(class="cyj")
          a(href="https://codepen.io/ericrosedev/full/eYdoXbV" target="_blank")
            img(src="https://cdn.dribbble.com/users/6661484/screenshots/14980334/media/92484fdf23c8efa118cce90bf3ec10f3.gif")

        .project(class="magm")
          a(href="https://codepen.io/ericrosedev/full/abmMVxx" target="_blank")
            img(src="https://cdn.dribbble.com/users/6661484/screenshots/14971299/media/f2c89878d06dcc2bc93018e8c4f50e76.gif")

        .project(class="revrec")
          a(href="https://codepen.io/ericrosedev/full/abmryOR" target="_blank")
            img(src="https://cdn.dribbble.com/users/6661484/screenshots/14990444/media/25ec03c16ab2f4ab8beb5cc17b0dedbc.gif")

        .project(class="dilis")
          a(href="https://codepen.io/ericrosedev/full/ZEpqjOZ" target="_blank")
            img(src="https://cdn.dribbble.com/users/6661484/screenshots/14947335/media/c6e289bc43c804800cb2e40bf8b0c74a.gif")

        .project(class="pgmc")
          a(href="https://codepen.io/ericrosedev/full/vYXpwwo" target="_blank")
            img(src="https://cdn.dribbble.com/users/6661484/screenshots/14851576/media/2c5edf5cdc7070fc1ff571a41a4b1570.gif")

        .project(class="ajttbc")
          a(href="https://codepen.io/ericrosedev/full/KKgyGMa" target="_blank")
            img(src="https://assets.codepen.io/5422341/journey.png")

        .project(class="spisc")
          a(href="https://codepen.io/ericrosedev/full/yLaxXGe" target="_blank")
            img(src="https://assets.codepen.io/5422341/snowman.png")

  .armbg
</template>

<script>
export default {
  name: "RecentProjects"
};
</script>

<style lang="scss">
@import "../scss/_scss.scss";

.rp {
  .project {
    width: 400px;
    height: 300px;
    
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 375px;
      height: 300px;

      img {
        width: 350px;
        border-radius: 1rem;
      }

      &::after {
        transition: all 0.5s;
        bottom: -3.25rem;
        font-size: 32px;
        white-space: pre;
      }

      &:hover::after {
        transform: rotate(-3deg);
      }
    }

    &.grurple {
      a::after {
        content: '🟢🟣 Grurple power';
        position: absolute;
        left: 0;
        color: #8ac897;
        width: 100%;
      }
    }

    &.sio {
      a::after {
        content: '📄 Smooth it over';
        position: absolute;
        left: 0;
        color: #8ac897;
        width: 100%;
      }
    }

    &.ror {
      a::after {
        content: '🎈 Rise or raze';
        position: absolute;
        left: 0;
        color: #8ac897;
        width: 100%;
      }
    }

    &.cyj {
      a::after {
        content: '✈️ Cool your jets';
        position: absolute;
        left: 0;
        color: #8ac897;
        width: 100%;
      }
    }

    &.magm {
      a::after {
        content: '✨ Magic modal';
        position: absolute;
        left: 0;
        color: #8ac897;
        width: 100%;
      }
    }

    &.revrec {
      a::after {
        content: '🤖 Reverse recaptcha';
        position: absolute;
        left: 0;
        color: #8ac897;
        width: 100%;
      }
    }

    &.dilis {
      a::after {
        content: '💦 Drop it like its swamp';
        position: absolute;
        left: 0;
        color: #8ac897;
        width: 100%;
      }
    }

    &.pgmc {
      a::after {
        content: '🎁 Precision-guided \A merry christmas';
        position: absolute;
        left: 0;
        font-size: 30px;
        color: #8ac897;
        width: 100%;
        line-height: 34px;
        bottom: -4.8rem;
      }
    }

    &.ajttbc {
      a::after {
        content: '🧝🏻 A journey to the big city';
        position: absolute;
        left: 0;
        color: #8ac897;
        width: 100%;
      }
    }

    &.spisc {
      a::after {
        content: '☃️ Spring is coming';
        position: absolute;
        left: 0;
        color: #8ac897;
        width: 100%;
      }
    }
  }
}

.rp::after {
  content: 'Recent Stuff';
  opacity: 0;
  position: absolute;
  top: 0;
  left: 48px;
  font-size: 78px;
  transition: all 0.5s;
  color: #d2d2d2;

  @media (max-width: 1120px){
    font-size: 48px;
    top: 3rem;
  }

  @media (max-width: 400px){
    left: 1rem;
    text-align: left;
  }
}
.rp.view-in {
  .arm {
    transform: translateX(0);
  }
  &::after {
    transform: translateY(-8.5rem) rotate(-3deg);
    opacity: 1;
  }
}
.rp.view-in--gt-third {
  .arm {
    transform: translateX(0);
  }

}
.rp.view-in--gt-half {
  .arm {
    transform: translateX(0);
  }

}
.rp.view-in--full {
  .arm {
    transform: translateX(0);
  }
}
.rp.view-out {
  .arm {
    transform: translateX(-80vw);
  }
}

</style>