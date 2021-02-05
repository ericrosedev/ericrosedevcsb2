<template lang="pug">
.slider-section.slider-section--right.tiu(v-view)
  .arm
    .content
      //- .title
      //-   span Stuff I Do
      .items
        .item
          img(src="https://l10iz.csb.app/tiu/windows.svg")
          .desc Windows

        .item
          img(src="https://l10iz.csb.app/tiu/apple.svg")
          .desc Mac

        .item
          img(src="https://l10iz.csb.app/tiu/photoshop.svg")
          .desc Photoshop

        .item
          img(src="https://l10iz.csb.app/tiu/illustrator.svg")
          .desc Illustrator

        .item
          img(src="https://l10iz.csb.app/tiu/xd.svg")
          .desc XD

        .item
          img(src="https://l10iz.csb.app/tiu/vscode.svg")
          .desc VS Code

        .item
          img(src="https://l10iz.csb.app/tiu/brackets.svg")
          .desc Brackets

        .item
          img(src="https://l10iz.csb.app/tiu/sass.svg")
          .desc SASS/SCSS

        .item
          img(src="https://l10iz.csb.app/tiu/vue.svg")
          .desc Vue

        .item
          img(src="https://l10iz.csb.app/tiu/bootstrap.svg")
          .desc Bootstrap

        //- .item
        //-   img(src="https://l10iz.csb.app/tiu/jquery.svg")
        //-   .desc jQuery

        .item
          img(src="https://l10iz.csb.app/tiu/mjml.svg")
          .desc MJML

        .item
          img(src="https://l10iz.csb.app/tiu/svgator.svg")
          .desc SVGator

        .item
          img(src="https://l10iz.csb.app/tiu/three.svg")
          .desc ThreeJS
        .item
          img(src="https://l10iz.csb.app/tiu/maya.svg")
          .desc Maya

        //- .item
        //-   img(src="https://l10iz.csb.app/tiu/tinypng.svg")
        //-   .desc TinyPNG

        //- .item
        //-   img(src="https://l10iz.csb.app/tiu/svgomg.svg")
        //-   .desc SVGOMG

        .item
          img(src="https://l10iz.csb.app/tiu/fontawesome.svg")
          .desc FontAwesome

        .item
          img(src="https://l10iz.csb.app/tiu/responsively.svg")
          .desc Responsively

        .item
          img(src="https://l10iz.csb.app/tiu/codepen.svg")
          .desc CodePen

        .item
          img(src="https://l10iz.csb.app/tiu/codesandbox.svg")
          .desc Codesandbox

        .item
          img(src="https://l10iz.csb.app/tiu/chrome.svg")
          .desc Chrome

        .item
          img(src="https://l10iz.csb.app/tiu/firefox.svg")
          .desc Firefox

        .item
          img(src="https://l10iz.csb.app/tiu/safari.svg")
          .desc Safari

        .item
          img(src="https://l10iz.csb.app/tiu/edge.svg")
          .desc Edge

        .item
          img(src="")
          .desc Others too!

</template>

<script>
export default {
  name: "ToolsIUse"
};
</script>

<style lang="scss">
@import "../scss/_scss.scss";
.tiu {

  @media (max-width: 400px){
    height: 300px !important;
  }

  .arm {

    .content {

      @media (max-width: 400px){
        transform: rotate(-8deg);
      }

      .items {
        position: relative;
        flex-wrap: nowrap;
        align-items: baseline;
        padding: 0 0 0 5rem !important;

        @media (max-width: 400px){
          padding: 0 0 0 2.5rem !important;
        }

        .item {
          @include dflex-col;
          height: 100%;
          margin-right: 3rem;
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
          padding-right: 3rem;
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
    content: 'Tools I Use';
    position: absolute;
    top: 16px;
    right: 48px;
    font-size: 78px;
    color: #8ac897;
    transform: rotate(3deg);
    transition: all 0.5;
    white-space: nowrap;

    @media (max-width: 1120px){
      font-size: 48px;
      top: 49px;
    }

    @media (max-width: 400px){
      right: 2rem;
      top: 38px;
      transform: rotate(-8deg);
      width: 100%;
    }
  }

}
.tiu.view-in {
  .arm {
    transform: translateX(0vw);
  }
}
.tiu.view-in--gt-third {
  .arm {
    transform: translateX(0);
  }
}
.tiu.view-in--gt-half {
  .arm {
    transform: translateX(0);
  }
}
.tiu.view-in--full {
  .arm {
    transform: translateX(0);
  }
}
.tiu.view-out {
  .arm {
    transform: translateX(100vw);
  }
}
/* .sid.view-out--below, .tia.view-out--above {

} */
</style>