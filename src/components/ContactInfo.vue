<template lang="pug">
.ci(v-view)

</template>

<script>
export default {
  name: "ContactInfo",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
@import "../scss/_scss.scss";
.ci {
  position: relative;
  width: 100%;
  height: 75vh;
}

</style>