<template lang="pug">
.slider-section.slider-section--left.sid(v-view)
  .arm
    .content
      //- .title
      //-   span Stuff I Do
      .items
        .item
          img(src="https://twxuu.csb.app/lightbulb_animated.svg")
          .desc Ideation

        .item
          img(src="https://twxuu.csb.app/wireframe_animated.svg")
          .desc Wireframing

        .item
          img(src="https://twxuu.csb.app/mock_animated.svg")
          .desc Mocking

        .item
          img(src="https://twxuu.csb.app/rapidproto_animated.svg")
          .desc Rapid Prototyping

        .item
          img(src="https://twxuu.csb.app/generalui_animated.svg")
          .desc UI/UX/IA/IXD

        .item
          img(src="https://twxuu.csb.app/html5.svg")
          .desc HTML5

        .item
          img(src="https://twxuu.csb.app/css3.svg")
          .desc CSS3

        .item
          img(src="https://twxuu.csb.app/js.svg")
          .desc Javascript

        .item
          img(src="https://twxuu.csb.app/vue.svg")
          .desc FE Frameworks

        .item
          img(src="https://twxuu.csb.app/cssf.svg")
          .desc Flexbox

        .item
          img(src="https://twxuu.csb.app/cssg.svg")
          .desc Grid

        .item
          img(src="https://twxuu.csb.app/csstt_animated.svg")
          .desc Animation

        .item
          img(src="https://twxuu.csb.app/logo.svg")
          .desc Logo Design

        .item
          img(src="https://twxuu.csb.app/emaildesign_animated.svg")
          .desc Email Design

        .item
          img(src="https://twxuu.csb.app/responsivedesign_animated.svg")
          .desc Responsive Layouts

        .item
          img(src="https://twxuu.csb.app/versioncontrol_animated.svg")
          .desc Version Control

        .item
          img(src="https://twxuu.csb.app/cicd_animated.svg")
          .desc CI/CD

        .item
          .desc And dance!

</template>

<script>
export default {
  name: "StuffIDo"
};
</script>

<style lang="scss">
@import "../scss/_scss.scss";
.sid {

  .arm {

    .content {

      .items {
        position: relative;
        flex-wrap: nowrap;
        align-items: baseline;
        padding: 0 5rem 0 0 !important;

        .item {
          @include dflex-col;
          height: 100%;
          margin-left: 3rem;
          transition: all 0.1s;

          img {
            width: 120px;

            @media (max-width: 1120px){
              max-width: 80px;
            }

            @media (max-width: 400px){
              max-width: 50px;
            }
          }
          img.raster {
            width: 60px;
            padding: 24px 0;
          }
          .desc {
            color: #9a9a9a;
            font-size: 24px;
            transform: rotate(0deg);
          }
        }
        .item:hover {
          transform: scale(1.5,1.5) rotate(-11deg);
        }
        .item:last-of-type:hover {
          transform: rotate(-11deg);
        }
        .item:last-of-type {
          padding-left: 3rem;
          transform: rotate(-11deg);
        }
      }
    }
  }
  .arm::after {
    content: 'Stuff I Do';
    position: absolute;
    top: 16px;
    left: 48px;
    font-size: 78px;
    color: #8ac897;
    transform: rotate(-3deg);
    transition: all 0.5s;

    @media (max-width: 1120px){
      font-size: 48px;
      top: 49px;
    }

    @media (max-width: 400px){
      font-size: 32px;
      left: 1rem;
      top: 65px;
    }
  }

}
.sid.view-in {
  .arm {
    transform: translateX(0);
  }
}
.sid.view-in--gt-third {
  .arm {
    transform: translateX(0);
  }
}
.sid.view-in--gt-half {
  .arm {
    transform: translateX(0);
  }
}
.sid.view-in--full {
  .arm {
    transform: translateX(0);
  }
}
.sid.view-out {
  .arm {
    transform: translateX(-100vw);
  }
}
/* .sid.view-out--below, .tia.view-out--above {

} */
</style>