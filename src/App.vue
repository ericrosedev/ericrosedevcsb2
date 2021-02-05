<template>
  <div id="app">
    <AboveTheFold
      title="Eric Rose"
      subtitle="Design & Development"
      subsubtitle="@ericrosedev"
      menutext="Just relax and click, too easy."
      introOne="Hi,"
      introTwo="I'm Eric"
      subintro="I’m a web designer and developer."
    />
    <RecentProjects />
    <RecentTweets />
    <StuffIDo title="Stuff I do" subtitle="Here is some stuff I do." />
    <ToolsIUse msg="test" />
    <ContactInfo msg="test" />
  </div>
</template>

<script>
import AboveTheFold from "./components/AboveTheFold"
import RecentProjects from "./components/RecentProjects"
import RecentTweets from "./components/RecentTweets"
import StuffIDo from "./components/StuffIDo"
import ToolsIUse from "./components/ToolsIUse"
import ContactInfo from "./components/ContactInfo"

export default {
  name: "App",
  components: {
    AboveTheFold,
    RecentProjects,
    RecentTweets,
    StuffIDo,
    ToolsIUse,
    ContactInfo,
  },
  metaInfo: {
    title: "ericrose.dev",
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content: "Recent stuff, stuff I do, tools I use, and other stuff",
      },
      { name: "viewport", content: "width=device-width, initial-scale=0.8", userScalable: "no" },
    ],
  },
};
</script>

<style lang="scss">
// gobal
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: #fff;
}
// app
#app {
  font-family: "Hind Madurai", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #202124;
}
</style>
