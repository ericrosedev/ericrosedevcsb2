<template lang="pug">
.slider-section.slider-section--left.rp(v-view)
  .arm
    .content
      .items

        .project(class="cyj")
          a(href="https://codepen.io/ericrosedev/full/eYdoXbV" target="_blank")
            img(src="rp/cyj.gif")

        .project(class="magm")
          a(href="https://codepen.io/ericrosedev/full/abmMVxx" target="_blank")
            img(src="rp/mm.gif")

        .project(class="revrec")
          a(href="https://codepen.io/ericrosedev/full/abmryOR" target="_blank")
            img(src="rp/rr.gif")

        .project(class="dilis")
          a(href="https://codepen.io/ericrosedev/full/ZEpqjOZ" target="_blank")
            img(src="rp/dilis.gif")

        .project(class="pgmc")
          a(href="https://codepen.io/ericrosedev/full/vYXpwwo" target="_blank")
            img(src="rp/pgmc.gif")

        .project(class="ajttbc")
          a(href="https://codepen.io/ericrosedev/full/KKgyGMa" target="_blank")
            img(src="rp/ajttbc.png")

        .project(class="spisc")
          a(href="https://codepen.io/ericrosedev/full/yLaxXGe" target="_blank")
            img(src="rp/spisc.png")

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