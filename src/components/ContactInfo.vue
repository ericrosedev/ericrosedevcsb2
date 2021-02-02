<template lang="pug">
.slider-section.slider-section--left.contact(v-view)
  .arm
    .content
      //- .title
      //-   span Stuff I Do
      .emailcont
        a.email(href="mailto:eric@ericrose.dev") eric@ericrose.dev

</template>

<script>
export default {
  name: "ContactInfo"
};
</script>

<style lang="scss">
@import "../scss/_scss.scss";
.contact {

  .emailcont {
    @include dflex-row;
    height: 100%;

    a.email {
      font-size: 64px;
      color: #8ac897;
      margin-top: 3rem;
      transform: rotate(-3deg);

      @media (max-width: 720px){
        font-size: 46px;
      }

      @media (max-width: 400px){
        font-size: 8vw;
        transform: rotate(11deg);
      }
    }

  }

  @media (max-width: 400px){
    height: 300px !important;
  }

  .arm {

    .content {


    }
  }
  .arm::after {
    content: 'Contact';
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
      left: 1rem;
      top: 38px;
      width: 100%;
      transform: rotate(11deg);
    }
  }

}
.contact.view-in {
  .arm {
    transform: translateX(0);
  }
}
.contact.view-in--gt-third {
  .arm {
    transform: translateX(0);
  }
}
.contact.view-in--gt-half {
  .arm {
    transform: translateX(0);
  }
}
.contact.view-in--full {
  .arm {
    transform: translateX(0);
  }
}
.contact.view-out {
  .arm {
    transform: translateX(-100vw);
  }
}
/* .sid.view-out--below, .tia.view-out--above {

} */
</style>