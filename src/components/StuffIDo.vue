<template lang="pug">
.slider-section.slider-section--left.sid(v-view)
  .arm
    .content
      //- .title
      //-   span Stuff I Do
      .items
        .item
          img(src="https://l10iz.csb.app/sid/lightbulb_animated.svg")
          .desc Ideation

        .item
          img(src="https://l10iz.csb.app/sid/wireframe_animated.svg")
          .desc Wireframing

        .item
          img(src="https://l10iz.csb.app/sid/mock_animated.svg")
          .desc Mocking

        .item
          img(src="https://l10iz.csb.app/sid/rapidproto_animated.svg")
          .desc Rapid Prototyping

        .item
          img(src="https://l10iz.csb.app/sid/generalui_animated.svg")
          .desc UI/UX/IA/IXD

        .item
          img(src="https://l10iz.csb.app/sid/html5.svg")
          .desc HTML5

        .item
          img(src="https://l10iz.csb.app/sid/css3.svg")
          .desc CSS3

        //- .item
        //-   img(src="https://l10iz.csb.app/sid/cssf.svg")
        //-   .desc Flexbox

        //- .item
        //-   img(src="https://l10iz.csb.app/sid/cssg.svg")
        //-   .desc Grid

        //- .item
        //-   img(src="https://l10iz.csb.app/sid/csstt_animated.svg")
        //-   .desc Animation

        .item
          img(src="https://l10iz.csb.app/sid/js.svg")
          .desc Javascript

        .item
          img(src="https://l10iz.csb.app/sid/logo.svg")
          .desc Logo Design

        .item
          img(src="https://l10iz.csb.app/sid/emaildesign_animated.svg")
          .desc Email Design

        .item
          img(src="https://l10iz.csb.app/sid/responsivedesign_animated.svg")
          .desc Responsive Layouts

        .item
          img(src="https://l10iz.csb.app/sid/versioncontrol_animated.svg")
          .desc Version Control

        .item
          img(src="https://l10iz.csb.app/sid/cicd_animated.svg")
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

  @media (max-width: 400px){
    height: 300px !important;
  }

  .arm {

    .content {

      @media (max-width: 400px){
        transform: rotate(8deg);
      }

      .items {
        position: relative;
        flex-wrap: nowrap;
        align-items: baseline;
        padding: 0 5rem 0 0 !important;
        
        @media (max-width: 400px){
          padding: 0 2.5rem 0 0 !important;
        }
          
        .item {
          @include dflex-col;
          height: 100%;
          margin-left: 3rem;
          transition: all 0.1s;

          @media (max-width: 400px){
            margin-top: 1.5rem;
          }

          img {
            width: 120px;

            @media (max-width: 1120px){
              max-width: 80px;
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

          .desc {
            color: #8ac897;
          }

          @media (max-width: 400px){
            padding: 0;
          }
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
    white-space: nowrap;

    @media (max-width: 1120px){
      font-size: 48px;
      top: 49px;
    }

    @media (max-width: 400px){
      left: 2rem;
      top: 38px;
      transform: rotate(8deg);
      width: 100%;
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