<template lang="pug">
.atf(v-view)
  .top
    .upper-left(:class="{ threeDeeHover: threeDeeHover }")
      .title(:class="{ titleUp: titleIsUp }") {{ title }}
      .subtitle(:class="{ subTitleUp: subTitleIsUp }") {{ subtitle }}
      .subsubtitle(:class="{ subSubTitleUp: subSubTitleIsUp }") {{ subsubtitle }}
    .upper-right(
      :class="{ upperRightRollin: isMounted }",
      @mouseenter="(upperRightHover = true)",
      @mouseleave="(upperRightHover = false)",
      @touchstart="(upperRightHover = true)",
      @touchcancel="(upperRightHover = false)")

      .close-btn(:class="{upperRightHover:upperRightHover}" @click="(upperRightHover = false)")

        svg(class="closesvg" x="0px" y="0px" viewBox="0 0 258.3 194.6")
          rect(class="rect1" x="39.4" y="39.1" width="180" height="39")
          rect(class="rect2" x="39.4" y="117.1" width="180" height="39")
          rect(class="rect3" x="116.4" y="0.1" width="26" height="195")
      
      .quick-links(:class="{upperRightHover:upperRightHover}")

        //- codepen
        a(@mouseover="cphovered = true" @mouseleave="cphovered = false" class="cp" href="https://codepen.io/ericrosedev" target="_blank")
          svg(x="0px" y="0px" viewBox="0 0 229.1 229.1")
            g(id="cplogoshape")
              path(fill="#231F20" d="M229,78.4c0-0.1-0.1-0.3-0.1-0.4c0-0.3-0.1-0.6-0.2-0.8c0-0.2-0.1-0.3-0.2-0.5 c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.2-0.1-0.3-0.2-0.5c-0.1-0.2-0.2-0.4-0.3-0.7c-0.1-0.2-0.2-0.3-0.3-0.5c-0.1-0.2-0.3-0.4-0.4-0.6 c-0.1-0.1-0.2-0.3-0.3-0.4c-0.2-0.2-0.3-0.4-0.5-0.5c-0.1-0.1-0.3-0.3-0.4-0.4c-0.2-0.2-0.4-0.3-0.6-0.5c-0.1-0.1-0.3-0.2-0.4-0.3 c-0.1,0-0.1-0.1-0.2-0.1L120,1.7c-3.3-2.2-7.6-2.2-10.9,0L4.4,71.5c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0.1-0.3,0.2-0.4,0.3 c-0.2,0.2-0.4,0.3-0.6,0.5c-0.1,0.1-0.3,0.3-0.4,0.4c-0.2,0.2-0.3,0.3-0.5,0.5c-0.1,0.1-0.2,0.3-0.3,0.4c-0.1,0.2-0.3,0.4-0.4,0.6 c-0.1,0.2-0.2,0.3-0.3,0.5C1.2,75,1.1,75.2,1,75.4c-0.1,0.2-0.2,0.3-0.2,0.5c-0.1,0.2-0.2,0.5-0.3,0.7c-0.1,0.2-0.1,0.3-0.2,0.5 c-0.1,0.3-0.1,0.5-0.2,0.8c0,0.1-0.1,0.3-0.1,0.4C0,78.8,0,79.2,0,79.6v69.8c0,0.4,0,0.9,0.1,1.3c0,0.1,0.1,0.3,0.1,0.4 c0.1,0.3,0.1,0.6,0.2,0.8c0,0.2,0.1,0.3,0.2,0.5c0.1,0.2,0.2,0.5,0.3,0.7c0.1,0.2,0.1,0.3,0.2,0.5c0.1,0.2,0.2,0.4,0.3,0.7 c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.3,0.4,0.4,0.6c0.1,0.2,0.2,0.3,0.3,0.4c0.2,0.2,0.3,0.4,0.5,0.5c0.1,0.1,0.3,0.3,0.4,0.4 c0.2,0.2,0.4,0.3,0.6,0.5c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0,0.1,0.1,0.2,0.1l104.7,69.8c1.7,1.1,3.6,1.7,5.5,1.7 c1.9,0,3.8-0.6,5.5-1.7l104.7-69.8c0.1,0,0.1-0.1,0.2-0.1c0.2-0.1,0.3-0.2,0.4-0.3c0.2-0.2,0.4-0.3,0.6-0.5 c0.1-0.1,0.3-0.3,0.4-0.4c0.2-0.2,0.3-0.4,0.5-0.5c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.2-0.3,0.3-0.5 c0.1-0.2,0.2-0.4,0.3-0.7c0.1-0.2,0.2-0.3,0.2-0.5c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.1-0.3,0.2-0.5c0.1-0.3,0.1-0.5,0.2-0.8 c0-0.1,0.1-0.3,0.1-0.4c0.1-0.4,0.1-0.9,0.1-1.3V79.6C229.1,79.2,229.1,78.8,229,78.4z M124.4,28.2l77.1,51.4l-34.5,23l-42.7-28.5 V28.2z M104.7,28.2v45.9L62,102.7l-34.5-23L104.7,28.2z M19.7,98.1l24.6,16.5L19.7,131V98.1z M104.7,200.8l-77.1-51.4l34.5-23 l42.7,28.5V200.8z M114.5,137.8l-34.8-23.3l34.8-23.3l34.8,23.3L114.5,137.8z M124.4,200.8v-45.9l42.7-28.5l34.5,23L124.4,200.8z M209.4,131l-24.6-16.5l24.6-16.5V131z")
        
        //- twitter
        a(@mouseover="twhovered = true" @mouseleave="twhovered = false" class="tw" href="https://twitter.com/EricRoseDev" target="_blank")
          svg(x="0px" y="0px" viewBox="0 0 512 419.2")
            path(fill="#429CD6" d="M500.4,48.4c-8,3.6-16.3,6.6-24.8,9c10.1-11.4,17.7-24.7,22.3-39.2 c1.4-4.3-1-9-5.4-10.4c-2.2-0.7-4.7-0.4-6.7,0.8c-17.9,10.6-37.3,18.3-57.6,22.8c-43.4-42.5-113-41.7-155.5,1.7 c-20.1,20.5-31.3,48.1-31.4,76.8c0,4.7,0.3,9.5,0.9,14.2C166.7,117.4,97.1,80.4,49.2,21.6c-2.9-3.5-8.1-4.1-11.6-1.2 c-0.8,0.6-1.4,1.4-1.9,2.2c-23.4,40.3-18.9,91,11.3,126.5c-5.1-1.8-10-4-14.7-6.6c-4-2.2-9-0.8-11.2,3.2c-0.7,1.2-1,2.5-1,3.8 c0,0.5,0,1,0,1.5c0.1,38.8,20.5,74.7,53.8,94.5c-2.8-0.3-5.6-0.7-8.4-1.2c-4.5-0.9-8.8,2.1-9.7,6.6c-0.3,1.4-0.2,2.8,0.2,4.1 c11.9,37.1,42.5,65.1,80.5,73.7c-31.1,19.5-67.2,29.8-103.9,29.7c-7.8,0-15.6-0.5-23.3-1.4c-4.5-0.5-8.6,2.7-9.2,7.2 c-0.4,3.1,1.1,6.2,3.7,7.9c47.8,30.7,103.5,47,160.3,47c111.9,0,181.9-52.8,220.9-97c48.7-55.2,76.6-128.3,76.6-200.5 c0-3,0-6.1-0.1-9.1c19.2-14.5,35.8-32.1,49.2-52.1c2.5-3.8,1.5-8.9-2.3-11.5C506,47.5,503,47.2,500.4,48.4z")
        
        //- dribbble
        a(@mouseover="drhovered = true" @mouseleave="drhovered = false" class="db" href="https://dribbble.com/ericrosedev" target="_blank")
          svg(x="0px" y="0px" viewBox="0 0 256 256")
            g()
              path(d="M128,8.5 C194,8.5 247.4,61.9 247.4,127.8 C247.4,193.7 194,247.2 128,247.2 C62,247.2 8.6,193.8 8.6,127.9 C8.6,62 62,8.5 128,8.5 L128,8.5 L128,8.5 Z" fill="#E74D89")
              path(d="M128,255.7 C57.4,255.7 0,198.4 0,127.9 C0,57.3 57.4,0 128,0 C198.6,0 256,57.3 256,127.8 C256,198.3 198.6,255.7 128,255.7 L128,255.7 L128,255.7 Z M235.9,145.3 C232.2,144.1 202.1,135.2 167.8,140.6 C182.1,179.8 187.9,211.8 189,218.4 C213.6,201.9 231.1,175.7 235.9,145.3 L235.9,145.3 L235.9,145.3 Z M170.7,228.5 C169.1,218.9 162.7,185.5 147.4,145.7 C147.2,145.8 146.9,145.9 146.7,145.9 C85,167.4 62.9,210.1 60.9,214.1 C79.4,228.5 102.7,237.1 128,237.1 C143.1,237.2 157.6,234.1 170.7,228.5 L170.7,228.5 L170.7,228.5 Z M46.8,201 C49.3,196.8 79.3,147.2 135.7,128.9 C137.1,128.4 138.6,128 140,127.6 C137.3,121.4 134.3,115.2 131.1,109.1 C76.5,125.4 23.5,124.7 18.7,124.6 C18.7,125.7 18.6,126.8 18.6,127.9 C18.7,156 29.3,181.6 46.8,201 L46.8,201 L46.8,201 Z M21,105.6 C25.9,105.7 70.9,105.9 122.1,92.3 C104,60.1 84.4,33.1 81.6,29.2 C50.9,43.6 28.1,71.8 21,105.6 L21,105.6 L21,105.6 Z M102.4,21.8 C105.4,25.8 125.3,52.8 143.2,85.7 C182.1,71.1 198.5,49.1 200.5,46.3 C181.2,29.2 155.8,18.8 128,18.8 C119.2,18.8 110.6,19.9 102.4,21.8 L102.4,21.8 L102.4,21.8 Z M212.6,58.9 C210.3,62 192,85.5 151.6,102 C154.1,107.2 156.6,112.5 158.9,117.8 C159.7,119.7 160.5,121.6 161.3,123.4 C197.7,118.8 233.8,126.2 237.4,126.9 C237.1,101.2 227.9,77.5 212.6,58.9 L212.6,58.9 L212.6,58.9 Z" fill="#B2215A")
        
        //- github
        a(@mouseover="ghhovered = true" @mouseleave="ghhovered = false" class="gh" href="https://github.com/ericrosedev" target="_blank")
          svg(x="0px" y="0px" viewBox="0 0 32.6 31.8")
            path(fill-rule="evenodd" clip-rule="evenodd" fill="#181616" d="M16.3,0C7.3,0,0,7.3,0,16.3c0,7.2,4.7,13.3,11.1,15.5 c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4 C7.4,10.7,6.8,9,7.7,6.8c0,0,1.4-0.4,4.5,1.7c1.3-0.4,2.7-0.5,4.1-0.5c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7 c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5 c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5C32.6,7.3,25.3,0,16.3,0z")
        
        //- behance
        a(@mouseover="bhhovered = true" @mouseleave="bhhovered = false" class="bh" href="https://www.behance.net/ericrosedev" target="_blank")
          svg(x="0px" y="0px" viewBox="0 0 213.4 134.3")
            g(id="belogogroup")
              path(fill="#1769FF" d="M63.2,0c6.4,0,12.2,0.6,17.5,1.7c5.3,1.1,9.8,3,13.5,5.5c3.8,2.6,6.7,6,8.7,10.3c2.1,4.3,3.1,9.5,3.1,15.8 c0,6.8-1.5,12.4-4.6,16.9c-3.1,4.5-7.6,8.2-13.6,11.1c8.3,2.4,14.5,6.6,18.5,12.5c4.1,6,6.1,13.1,6.1,21.5c0,6.8-1.3,12.6-4,17.6 c-2.6,5-6.2,9-10.6,12.1c-4.5,3.1-9.5,5.5-15.2,7c-5.7,1.5-11.6,2.3-17.6,2.3H0V0H63.2z M59.4,54.4c5.3,0,9.6-1.3,13-3.8 c3.4-2.5,5.1-6.6,5.1-12.2c0-3.1-0.6-5.7-1.7-7.7c-1.1-2-2.6-3.6-4.5-4.7c-1.9-1.1-4-1.9-6.5-2.4c-2.4-0.4-5-0.7-7.6-0.7H29.5v31.4 L59.4,54.4L59.4,54.4z M61.1,111.4c2.9,0,5.6-0.3,8.3-0.8c2.6-0.6,5-1.5,7-2.8c2-1.3,3.6-3.1,4.8-5.4c1.2-2.3,1.8-5.1,1.8-8.7 c0-6.9-1.9-11.8-5.8-14.8c-3.9-2.9-9-4.4-15.4-4.4H29.5v36.9L61.1,111.4L61.1,111.4z")
              path(fill="#1769FF" d="M149.7,108.6c4,3.9,9.8,5.8,17.3,5.8c5.4,0,10-1.3,13.9-4c3.9-2.7,6.3-5.5,7.1-8.6h23.5 c-3.8,11.7-9.5,20-17.3,25c-7.8,5-17.2,7.5-28.2,7.5c-7.7,0-14.5-1.2-20.7-3.7c-6.1-2.4-11.4-5.9-15.6-10.4 c-4.3-4.5-7.6-9.9-9.9-16.2c-2.3-6.3-3.5-13.2-3.5-20.7c0-7.3,1.2-14,3.6-20.3c2.4-6.3,5.8-11.7,10.2-16.3 c4.4-4.6,9.6-8.2,15.7-10.8c6.1-2.6,12.8-3.9,20.2-3.9c8.3,0,15.5,1.6,21.6,4.8c6.1,3.2,11.2,7.5,15.1,12.9 c3.9,5.4,6.8,11.5,8.6,18.4c1.8,6.9,2.4,14.1,1.9,21.6h-70.2C143.5,98.4,145.7,104.7,149.7,108.6z M179.9,57.4 c-3.2-3.5-8.1-5.3-14.6-5.3c-4.3,0-7.8,0.7-10.6,2.2c-2.8,1.4-5.1,3.2-6.8,5.4c-1.7,2.1-2.9,4.4-3.6,6.8c-0.7,2.4-1.1,4.5-1.2,6.4 h43.5C185.3,66,183.1,60.9,179.9,57.4z")
              rect(x="138.5" y="6.8" fill="#1769FF" width="54.3" height="15.1")
        
        //- reddit
        a(@mouseover="rdhovered = true" @mouseleave="rdhovered = false" class="rd" href="https://www.reddit.com/user/ericrosedev" target="_blank")
          svg(x="0px" y="0px" viewBox="0 0 151 126.5")
            path(d="M75.2,126.5c-37.2,0-67.5-20.2-67.5-45c0-1.7,0.1-3.4,0.4-5.1C3.1,73.3,0,67.8,0,61.9c0-9.4,7.7-17.1,17.1-17.1 c4.2,0,8.2,1.5,11.3,4.3c11.7-7.5,27.4-12.2,44.8-12.6L84.6,1.7l2.5,0.6l0.1,0l26.6,6.3c2.2-5.2,7.3-8.6,13-8.6 c7.8,0,14.1,6.3,14.1,14.1c0,7.8-6.3,14.1-14.1,14.1c-7.8,0-14.1-6.3-14.1-14.1L88.4,8.4l-9.2,28.2c16.7,0.7,31.9,5.4,43.1,12.7 c3.2-2.9,7.3-4.5,11.6-4.5c9.4,0,17.1,7.7,17.1,17.1c0,6.2-3.3,11.9-8.7,14.9c0.2,1.6,0.4,3.1,0.4,4.7 C142.7,106.3,112.4,126.5,75.2,126.5L75.2,126.5z M13.9,76.2c-0.4,1.8-0.6,3.5-0.6,5.3c0,21.7,27.7,39.4,61.8,39.4 S137,103.2,137,81.5c0-1.7-0.2-3.4-0.5-5.1c-0.2-0.4-0.3-0.8-0.3-1.2c-1.9-7.4-7-14.1-14.5-19.6c-0.5-0.2-0.9-0.5-1.2-0.9 C109.2,47,93.1,42.1,75.2,42.1c-17.7,0-33.7,4.8-45,12.4c-0.3,0.3-0.7,0.6-1.1,0.8C21.4,60.8,16.1,67.5,14.2,75 C14.2,75.4,14.1,75.7,13.9,76.2C13.9,76.1,13.9,76.2,13.9,76.2z M127,52.7c6.5,5.2,11.3,11.5,13.8,18.3c2.9-2.2,4.5-5.5,4.5-9.1 c0-6.3-5.1-11.4-11.5-11.5C131.4,50.4,129,51.2,127,52.7L127,52.7z M17.1,50.4c-6.3,0-11.4,5.1-11.5,11.5c0,3.4,1.5,6.6,4.1,8.7 c2.5-6.8,7.4-13,14-18.1C21.7,51.1,19.4,50.4,17.1,50.4z M126.7,5.6c-4.6,0-8.4,3.8-8.4,8.4s3.8,8.4,8.4,8.4s8.4-3.8,8.4-8.4 S131.4,5.6,126.7,5.6L126.7,5.6z M75.5,110.5c-11.3,0-19.3-2.5-24.3-7.5c-1.1-1.1-1.1-2.9,0-4s2.9-1.1,4,0c4,4,10.6,5.9,20.3,5.9 c9.7,0,16.4-1.9,20.4-5.9c1.1-1.1,2.9-1.1,4,0c1.1,1.1,1.1,2.9,0,4l0,0C94.7,108,86.8,110.5,75.5,110.5L75.5,110.5z")
            path(fill="#FF4500" d="M98.4,62.8c-5.7,0-10.6,4.8-10.6,10.6c0,5.7,4.8,10.4,10.6,10.4c5.7,0,10.4-4.7,10.4-10.4 C108.8,67.6,104.1,62.8,98.4,62.8L98.4,62.8z M52.8,62.8c-5.7,0-10.6,4.8-10.6,10.6S47,83.7,52.8,83.7s10.4-4.7,10.4-10.4 S58.5,62.8,52.8,62.8L52.8,62.8z")
        
        //- medium
        a(@mouseover="mehovered = true" @mouseleave="mehovered = false" class="md" href="https://medium.com/@ericrosedev" target="_blank")
          svg(id="melogo" x="0px" y="0px"  viewBox="0 0 24 24")
            path(d="m22.085 4.733 1.915-1.832v-.401h-6.634l-4.728 11.768-5.379-11.768h-6.956v.401l2.237 2.693c.218.199.332.49.303.783v10.583c.069.381-.055.773-.323 1.05l-2.52 3.054v.396h7.145v-.401l-2.52-3.049c-.273-.278-.402-.663-.347-1.05v-9.154l6.272 13.659h.729l5.393-13.659v10.881c0 .287 0 .346-.188.534l-1.94 1.877v.402h9.412v-.401l-1.87-1.831c-.164-.124-.249-.332-.214-.534v-13.467c-.035-.203.049-.411.213-.534z" fill="#212121")

      .no-icons(v-show="!cphovered && !twhovered && !drhovered && !ghhovered && !bhhovered && !rdhovered && !mehovered && upperRightHover")
        span
          | {{menutext}}

      .big-icons(v-show="upperRightHover")
        .bi(v-show="cphovered")
          svg(x="0px" y="0px" viewBox="0 0 229.1 229.1")
              path(fill="#231F20" d="M229,78.4c0-0.1-0.1-0.3-0.1-0.4c0-0.3-0.1-0.6-0.2-0.8c0-0.2-0.1-0.3-0.2-0.5 c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.2-0.1-0.3-0.2-0.5c-0.1-0.2-0.2-0.4-0.3-0.7c-0.1-0.2-0.2-0.3-0.3-0.5c-0.1-0.2-0.3-0.4-0.4-0.6 c-0.1-0.1-0.2-0.3-0.3-0.4c-0.2-0.2-0.3-0.4-0.5-0.5c-0.1-0.1-0.3-0.3-0.4-0.4c-0.2-0.2-0.4-0.3-0.6-0.5c-0.1-0.1-0.3-0.2-0.4-0.3 c-0.1,0-0.1-0.1-0.2-0.1L120,1.7c-3.3-2.2-7.6-2.2-10.9,0L4.4,71.5c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0.1-0.3,0.2-0.4,0.3 c-0.2,0.2-0.4,0.3-0.6,0.5c-0.1,0.1-0.3,0.3-0.4,0.4c-0.2,0.2-0.3,0.3-0.5,0.5c-0.1,0.1-0.2,0.3-0.3,0.4c-0.1,0.2-0.3,0.4-0.4,0.6 c-0.1,0.2-0.2,0.3-0.3,0.5C1.2,75,1.1,75.2,1,75.4c-0.1,0.2-0.2,0.3-0.2,0.5c-0.1,0.2-0.2,0.5-0.3,0.7c-0.1,0.2-0.1,0.3-0.2,0.5 c-0.1,0.3-0.1,0.5-0.2,0.8c0,0.1-0.1,0.3-0.1,0.4C0,78.8,0,79.2,0,79.6v69.8c0,0.4,0,0.9,0.1,1.3c0,0.1,0.1,0.3,0.1,0.4 c0.1,0.3,0.1,0.6,0.2,0.8c0,0.2,0.1,0.3,0.2,0.5c0.1,0.2,0.2,0.5,0.3,0.7c0.1,0.2,0.1,0.3,0.2,0.5c0.1,0.2,0.2,0.4,0.3,0.7 c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.3,0.4,0.4,0.6c0.1,0.2,0.2,0.3,0.3,0.4c0.2,0.2,0.3,0.4,0.5,0.5c0.1,0.1,0.3,0.3,0.4,0.4 c0.2,0.2,0.4,0.3,0.6,0.5c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0,0.1,0.1,0.2,0.1l104.7,69.8c1.7,1.1,3.6,1.7,5.5,1.7 c1.9,0,3.8-0.6,5.5-1.7l104.7-69.8c0.1,0,0.1-0.1,0.2-0.1c0.2-0.1,0.3-0.2,0.4-0.3c0.2-0.2,0.4-0.3,0.6-0.5 c0.1-0.1,0.3-0.3,0.4-0.4c0.2-0.2,0.3-0.4,0.5-0.5c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.2-0.3,0.3-0.5 c0.1-0.2,0.2-0.4,0.3-0.7c0.1-0.2,0.2-0.3,0.2-0.5c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.1-0.3,0.2-0.5c0.1-0.3,0.1-0.5,0.2-0.8 c0-0.1,0.1-0.3,0.1-0.4c0.1-0.4,0.1-0.9,0.1-1.3V79.6C229.1,79.2,229.1,78.8,229,78.4z M124.4,28.2l77.1,51.4l-34.5,23l-42.7-28.5 V28.2z M104.7,28.2v45.9L62,102.7l-34.5-23L104.7,28.2z M19.7,98.1l24.6,16.5L19.7,131V98.1z M104.7,200.8l-77.1-51.4l34.5-23 l42.7,28.5V200.8z M114.5,137.8l-34.8-23.3l34.8-23.3l34.8,23.3L114.5,137.8z M124.4,200.8v-45.9l42.7-28.5l34.5,23L124.4,200.8z M209.4,131l-24.6-16.5l24.6-16.5V131z")
        .bi(v-show="twhovered")
          svg(x="0px" y="0px" viewBox="0 0 512 419.2")
            path(fill="#429CD6" d="M500.4,48.4c-8,3.6-16.3,6.6-24.8,9c10.1-11.4,17.7-24.7,22.3-39.2 c1.4-4.3-1-9-5.4-10.4c-2.2-0.7-4.7-0.4-6.7,0.8c-17.9,10.6-37.3,18.3-57.6,22.8c-43.4-42.5-113-41.7-155.5,1.7 c-20.1,20.5-31.3,48.1-31.4,76.8c0,4.7,0.3,9.5,0.9,14.2C166.7,117.4,97.1,80.4,49.2,21.6c-2.9-3.5-8.1-4.1-11.6-1.2 c-0.8,0.6-1.4,1.4-1.9,2.2c-23.4,40.3-18.9,91,11.3,126.5c-5.1-1.8-10-4-14.7-6.6c-4-2.2-9-0.8-11.2,3.2c-0.7,1.2-1,2.5-1,3.8 c0,0.5,0,1,0,1.5c0.1,38.8,20.5,74.7,53.8,94.5c-2.8-0.3-5.6-0.7-8.4-1.2c-4.5-0.9-8.8,2.1-9.7,6.6c-0.3,1.4-0.2,2.8,0.2,4.1 c11.9,37.1,42.5,65.1,80.5,73.7c-31.1,19.5-67.2,29.8-103.9,29.7c-7.8,0-15.6-0.5-23.3-1.4c-4.5-0.5-8.6,2.7-9.2,7.2 c-0.4,3.1,1.1,6.2,3.7,7.9c47.8,30.7,103.5,47,160.3,47c111.9,0,181.9-52.8,220.9-97c48.7-55.2,76.6-128.3,76.6-200.5 c0-3,0-6.1-0.1-9.1c19.2-14.5,35.8-32.1,49.2-52.1c2.5-3.8,1.5-8.9-2.3-11.5C506,47.5,503,47.2,500.4,48.4z")
        .bi(v-show="drhovered")
          svg(x="0px" y="0px" viewBox="0 0 256 256")
            g()
              path(d="M128,8.5 C194,8.5 247.4,61.9 247.4,127.8 C247.4,193.7 194,247.2 128,247.2 C62,247.2 8.6,193.8 8.6,127.9 C8.6,62 62,8.5 128,8.5 L128,8.5 L128,8.5 Z" fill="#E74D89")
              path(d="M128,255.7 C57.4,255.7 0,198.4 0,127.9 C0,57.3 57.4,0 128,0 C198.6,0 256,57.3 256,127.8 C256,198.3 198.6,255.7 128,255.7 L128,255.7 L128,255.7 Z M235.9,145.3 C232.2,144.1 202.1,135.2 167.8,140.6 C182.1,179.8 187.9,211.8 189,218.4 C213.6,201.9 231.1,175.7 235.9,145.3 L235.9,145.3 L235.9,145.3 Z M170.7,228.5 C169.1,218.9 162.7,185.5 147.4,145.7 C147.2,145.8 146.9,145.9 146.7,145.9 C85,167.4 62.9,210.1 60.9,214.1 C79.4,228.5 102.7,237.1 128,237.1 C143.1,237.2 157.6,234.1 170.7,228.5 L170.7,228.5 L170.7,228.5 Z M46.8,201 C49.3,196.8 79.3,147.2 135.7,128.9 C137.1,128.4 138.6,128 140,127.6 C137.3,121.4 134.3,115.2 131.1,109.1 C76.5,125.4 23.5,124.7 18.7,124.6 C18.7,125.7 18.6,126.8 18.6,127.9 C18.7,156 29.3,181.6 46.8,201 L46.8,201 L46.8,201 Z M21,105.6 C25.9,105.7 70.9,105.9 122.1,92.3 C104,60.1 84.4,33.1 81.6,29.2 C50.9,43.6 28.1,71.8 21,105.6 L21,105.6 L21,105.6 Z M102.4,21.8 C105.4,25.8 125.3,52.8 143.2,85.7 C182.1,71.1 198.5,49.1 200.5,46.3 C181.2,29.2 155.8,18.8 128,18.8 C119.2,18.8 110.6,19.9 102.4,21.8 L102.4,21.8 L102.4,21.8 Z M212.6,58.9 C210.3,62 192,85.5 151.6,102 C154.1,107.2 156.6,112.5 158.9,117.8 C159.7,119.7 160.5,121.6 161.3,123.4 C197.7,118.8 233.8,126.2 237.4,126.9 C237.1,101.2 227.9,77.5 212.6,58.9 L212.6,58.9 L212.6,58.9 Z" fill="#B2215A")
        .bi(v-show="ghhovered")
          svg(x="0px" y="0px" viewBox="0 0 32.6 31.8")
            path(fill-rule="evenodd" clip-rule="evenodd" fill="#181616" d="M16.3,0C7.3,0,0,7.3,0,16.3c0,7.2,4.7,13.3,11.1,15.5 c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4 C7.4,10.7,6.8,9,7.7,6.8c0,0,1.4-0.4,4.5,1.7c1.3-0.4,2.7-0.5,4.1-0.5c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7 c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5 c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5C32.6,7.3,25.3,0,16.3,0z")
        .bi(v-show="bhhovered")
          svg(x="0px" y="0px" viewBox="0 0 213.4 134.3")
            g(id="belogogroup")
              path(fill="#1769FF" d="M63.2,0c6.4,0,12.2,0.6,17.5,1.7c5.3,1.1,9.8,3,13.5,5.5c3.8,2.6,6.7,6,8.7,10.3c2.1,4.3,3.1,9.5,3.1,15.8 c0,6.8-1.5,12.4-4.6,16.9c-3.1,4.5-7.6,8.2-13.6,11.1c8.3,2.4,14.5,6.6,18.5,12.5c4.1,6,6.1,13.1,6.1,21.5c0,6.8-1.3,12.6-4,17.6 c-2.6,5-6.2,9-10.6,12.1c-4.5,3.1-9.5,5.5-15.2,7c-5.7,1.5-11.6,2.3-17.6,2.3H0V0H63.2z M59.4,54.4c5.3,0,9.6-1.3,13-3.8 c3.4-2.5,5.1-6.6,5.1-12.2c0-3.1-0.6-5.7-1.7-7.7c-1.1-2-2.6-3.6-4.5-4.7c-1.9-1.1-4-1.9-6.5-2.4c-2.4-0.4-5-0.7-7.6-0.7H29.5v31.4 L59.4,54.4L59.4,54.4z M61.1,111.4c2.9,0,5.6-0.3,8.3-0.8c2.6-0.6,5-1.5,7-2.8c2-1.3,3.6-3.1,4.8-5.4c1.2-2.3,1.8-5.1,1.8-8.7 c0-6.9-1.9-11.8-5.8-14.8c-3.9-2.9-9-4.4-15.4-4.4H29.5v36.9L61.1,111.4L61.1,111.4z")
              path(fill="#1769FF" d="M149.7,108.6c4,3.9,9.8,5.8,17.3,5.8c5.4,0,10-1.3,13.9-4c3.9-2.7,6.3-5.5,7.1-8.6h23.5 c-3.8,11.7-9.5,20-17.3,25c-7.8,5-17.2,7.5-28.2,7.5c-7.7,0-14.5-1.2-20.7-3.7c-6.1-2.4-11.4-5.9-15.6-10.4 c-4.3-4.5-7.6-9.9-9.9-16.2c-2.3-6.3-3.5-13.2-3.5-20.7c0-7.3,1.2-14,3.6-20.3c2.4-6.3,5.8-11.7,10.2-16.3 c4.4-4.6,9.6-8.2,15.7-10.8c6.1-2.6,12.8-3.9,20.2-3.9c8.3,0,15.5,1.6,21.6,4.8c6.1,3.2,11.2,7.5,15.1,12.9 c3.9,5.4,6.8,11.5,8.6,18.4c1.8,6.9,2.4,14.1,1.9,21.6h-70.2C143.5,98.4,145.7,104.7,149.7,108.6z M179.9,57.4 c-3.2-3.5-8.1-5.3-14.6-5.3c-4.3,0-7.8,0.7-10.6,2.2c-2.8,1.4-5.1,3.2-6.8,5.4c-1.7,2.1-2.9,4.4-3.6,6.8c-0.7,2.4-1.1,4.5-1.2,6.4 h43.5C185.3,66,183.1,60.9,179.9,57.4z")
              rect(x="138.5" y="6.8" fill="#1769FF" width="54.3" height="15.1")
        .bi(v-show="rdhovered")
          svg(x="0px" y="0px" viewBox="0 0 151 126.5")
            path(d="M75.2,126.5c-37.2,0-67.5-20.2-67.5-45c0-1.7,0.1-3.4,0.4-5.1C3.1,73.3,0,67.8,0,61.9c0-9.4,7.7-17.1,17.1-17.1 c4.2,0,8.2,1.5,11.3,4.3c11.7-7.5,27.4-12.2,44.8-12.6L84.6,1.7l2.5,0.6l0.1,0l26.6,6.3c2.2-5.2,7.3-8.6,13-8.6 c7.8,0,14.1,6.3,14.1,14.1c0,7.8-6.3,14.1-14.1,14.1c-7.8,0-14.1-6.3-14.1-14.1L88.4,8.4l-9.2,28.2c16.7,0.7,31.9,5.4,43.1,12.7 c3.2-2.9,7.3-4.5,11.6-4.5c9.4,0,17.1,7.7,17.1,17.1c0,6.2-3.3,11.9-8.7,14.9c0.2,1.6,0.4,3.1,0.4,4.7 C142.7,106.3,112.4,126.5,75.2,126.5L75.2,126.5z M13.9,76.2c-0.4,1.8-0.6,3.5-0.6,5.3c0,21.7,27.7,39.4,61.8,39.4 S137,103.2,137,81.5c0-1.7-0.2-3.4-0.5-5.1c-0.2-0.4-0.3-0.8-0.3-1.2c-1.9-7.4-7-14.1-14.5-19.6c-0.5-0.2-0.9-0.5-1.2-0.9 C109.2,47,93.1,42.1,75.2,42.1c-17.7,0-33.7,4.8-45,12.4c-0.3,0.3-0.7,0.6-1.1,0.8C21.4,60.8,16.1,67.5,14.2,75 C14.2,75.4,14.1,75.7,13.9,76.2C13.9,76.1,13.9,76.2,13.9,76.2z M127,52.7c6.5,5.2,11.3,11.5,13.8,18.3c2.9-2.2,4.5-5.5,4.5-9.1 c0-6.3-5.1-11.4-11.5-11.5C131.4,50.4,129,51.2,127,52.7L127,52.7z M17.1,50.4c-6.3,0-11.4,5.1-11.5,11.5c0,3.4,1.5,6.6,4.1,8.7 c2.5-6.8,7.4-13,14-18.1C21.7,51.1,19.4,50.4,17.1,50.4z M126.7,5.6c-4.6,0-8.4,3.8-8.4,8.4s3.8,8.4,8.4,8.4s8.4-3.8,8.4-8.4 S131.4,5.6,126.7,5.6L126.7,5.6z M75.5,110.5c-11.3,0-19.3-2.5-24.3-7.5c-1.1-1.1-1.1-2.9,0-4s2.9-1.1,4,0c4,4,10.6,5.9,20.3,5.9 c9.7,0,16.4-1.9,20.4-5.9c1.1-1.1,2.9-1.1,4,0c1.1,1.1,1.1,2.9,0,4l0,0C94.7,108,86.8,110.5,75.5,110.5L75.5,110.5z")
            path(fill="#FF4500" d="M98.4,62.8c-5.7,0-10.6,4.8-10.6,10.6c0,5.7,4.8,10.4,10.6,10.4c5.7,0,10.4-4.7,10.4-10.4 C108.8,67.6,104.1,62.8,98.4,62.8L98.4,62.8z M52.8,62.8c-5.7,0-10.6,4.8-10.6,10.6S47,83.7,52.8,83.7s10.4-4.7,10.4-10.4 S58.5,62.8,52.8,62.8L52.8,62.8z")
        .bi(v-show="mehovered")
          svg(id="melogo" x="0px" y="0px"  viewBox="0 0 24 24")
            path(d="m22.085 4.733 1.915-1.832v-.401h-6.634l-4.728 11.768-5.379-11.768h-6.956v.401l2.237 2.693c.218.199.332.49.303.783v10.583c.069.381-.055.773-.323 1.05l-2.52 3.054v.396h7.145v-.401l-2.52-3.049c-.273-.278-.402-.663-.347-1.05v-9.154l6.272 13.659h.729l5.393-13.659v10.881c0 .287 0 .346-.188.534l-1.94 1.877v.402h9.412v-.401l-1.87-1.831c-.164-.124-.249-.332-.214-.534v-13.467c-.035-.203.049-.411.213-.534z" fill="#212121")
        
      
      .bg(:class="{expanded: upperRightHover}")

    .bganim(:class="{ threeDeeHover, threeDeeHover }")
  .bottom
    .down-indicator(:class="{ downIndicatorShowing: atfIsWaiting }")
      svg(x="0px", y="0px", viewBox="0 0 243 55.5")
        path(
          fill="#202124",
          d="M138.1,52.5c-10.7,3.9-22.4,3.9-33.1,0l-99.4-36C1.2,14.9-1.1,10,0.5,5.6S7-1.1,11.4,0.5L105,34.5 c10.7,3.9,22.4,3.9,33.1,0l93.6-33.9c4.4-1.6,9.3,0.7,10.9,5.1c1.6,4.4-0.7,9.3-5.1,10.9L138.1,52.5z"
        )

    .threeDeeCont(
      :style="{ width: threeDeeWidthHeight, height: threeDeeWidthHeight }",
      :class="{ threeDeeHover: threeDeeHover }",
      @mouseover="(titleIsUp = true), (subTitleIsUp = true), (subSubTitleIsUp = true), (atfIsWaiting = true), (threeDeeHover = true)",
      @mouseleave="threeDeeHover = false",
      @touchstart="(titleIsUp = true), (subTitleIsUp = true), (subSubTitleIsUp = true), (atfIsWaiting = true), (threeDeeHover = true)",
      @touchend="threeDeeHover = false",
      @touchcancel="threeDeeHover = false"
    )
      svg.threeDeeE(
        :class="{ threeDeeRollin: isMounted }",
        :width="threeDeeWidthHeight",
        :height="threeDeeWidthHeight",
        ref="threeDeeE"
      )

    .intro(:class="{ animate: isMounted, shineIntro:threeDeeHover }")
      span.i1
        | {{introOne}}
      span.i2
        | &nbsp;{{introTwo}}

    .subintro(:class="{ animate: isMounted }") {{subintro}}

    .subsubintro(:class="{ animate: isMounted }")
      | I like making things on the internet for people to enjoy. I’ve been doing this since 2013, before that I was an intelligence analyst in the military and an intelligence instructor for the department of defense. I love science fiction novels 
      a(href="http://www.thehugoawards.org/" target="_blank") 📚 
      | and short stories 
      a(href="https://www.asimovs.com/" target="_blank") 📘
      a(href="https://www.analogsf.com/" target="_blank") 📕
      |, running 
      a(href="https://www.strava.com/" target="_blank") 🏃‍♂️, 
      | maps 
      a(href="https://www.reddit.com/r/MapPorn/" target="_blank") 🗺️, 
      | boats 
      a(href="https://i.imgflip.com/4wvl8n.jpg" target="_blank") 🛥️, 
      | coffee 
      a(href="https://www.traderjoes.com/digin/tag/Coffee/" target="_blank") ☕, 
      | and taking Dakota 
      a(href="https://i.imgur.com/1DDsloF.png" target="_blank") 🐕 
      | to the dog park.
</template>

<script>
import * as zdog from "zdog";
import VueScreenSize from "vue-screen-size";
export default {
  name: "AboveTheFold",
  props: {
    title: String,
    subtitle: String,
    subsubtitle: String,
    menutext: String,
    introOne: String,
    introTwo: String,
    subintro: String
  },
  data() {
    return {
      isMounted: null,
      titleIsUp: false,
      subTitleIsUp: false,
      subSubTitleIsUp: false,
      threeDeeHover: false,
      upperRightHover: false,
      cphovered: false,
      twhovered: false,
      drhovered: false,
      ghhovered: false,
      bhhovered: false,
      rdhovered: false,
      mehovered: false,
      atfIsWaiting: false,
    };
  },
  mounted() {
    this.isMounted = true;

    // timeout function for atf is waiting
    setTimeout(() => {
      this.atfIsWaiting = true;
    }, 5000);

    // zdog stuff in guarantee function
    this.$nextTick(() => {
      console.log("mounted");
      // new zdog illustration
      this.illo = new zdog.Illustration({
        element: this.$refs.threeDeeE,
        dragRotate: true,
      });
      // group for E shapes
      this.erdGroup = new zdog.Group({
        addTo: this.illo,
        translate: { x: -60, y: 0, z: 30 },
      });
      // E shapes
      // 1
      new zdog.Rect({
        addTo: this.erdGroup,
        width: 60,
        height: 230,
        // position further back
        translate: { x: 0, y: 0, z: 0 },
        stroke: 1,
        color: "#91E7A3",
        fill: true,
      });
      // 2
      new zdog.Rect({
        addTo: this.erdGroup,
        width: 166,
        height: 60,
        // position further back
        translate: { x: 53, y: 0, z: 0 },
        stroke: 1,
        color: "#91E7A3",
        fill: true,
      });
      // 3
      new zdog.Rect({
        addTo: this.erdGroup,
        width: 166,
        height: 60,
        // position further back
        translate: { x: 53, y: 115, z: 0 },
        stroke: 1,
        color: "#91E7A3",
        fill: true,
      });
      // 4
      new zdog.Rect({
        addTo: this.erdGroup,
        width: 166,
        height: 60,
        // position further back
        translate: { x: 53, y: -115, z: 0 },
        stroke: 1,
        color: "#91E7A3",
        fill: true,
      });
      // 5
      new zdog.Rect({
        addTo: this.erdGroup,
        width: 60,
        height: 290,
        // position further back
        translate: { x: -30, y: 0, z: -30 },
        rotate: { y: -zdog.TAU / 4 },
        stroke: 1,
        color: "#91E7A3",
        fill: true,
      });
      // 6
      new zdog.Rect({
        addTo: this.erdGroup,
        width: 60,
        height: 290,
        // position further back
        translate: { x: 30, y: 0, z: -30 },
        rotate: { y: -zdog.TAU / 4 },
        stroke: 1,
        color: "#91E7A3",
        fill: true,
      });
      // 7
      new zdog.Rect({
        addTo: this.erdGroup,
        width: 60,
        height: 290,
        // position further back
        translate: { x: 0, y: 0, z: -60 },
        stroke: 1,
        color: "#91E7A3",
        fill: true,
      });
      // 8
      new zdog.Rect({
        addTo: this.erdGroup,
        width: 166,
        height: 60,
        // position further back
        translate: { x: 53, y: -145, z: -30 },
        rotate: { x: -zdog.TAU / 4 },
        stroke: 1,
        color: "#91E7A3",
        fill: true,
      });
      // 9
      new zdog.Rect({
        addTo: this.erdGroup,
        width: 166,
        height: 60,
        // position further back
        translate: { x: 53, y: 145, z: -30 },
        rotate: { x: -zdog.TAU / 4 },
        stroke: 1,
        color: "#91E7A3",
        fill: true,
      });
      // 10
      new zdog.Rect({
        addTo: this.erdGroup,
        width: 166,
        height: 60,
        // position further back
        translate: { x: 53, y: 84, z: -30 },
        rotate: { x: -zdog.TAU / 4 },
        stroke: 1,
        color: "#91E7A3",
        fill: true,
      });
      // 11
      new zdog.Rect({
        addTo: this.erdGroup,
        width: 166,
        height: 60,
        // position further back
        translate: { x: 53, y: 30, z: -30 },
        rotate: { x: -zdog.TAU / 4 },
        stroke: 1,
        color: "#91E7A3",
        fill: true,
      });
      // 12
      new zdog.Rect({
        addTo: this.erdGroup,
        width: 166,
        height: 60,
        // position further back
        translate: { x: 53, y: -30, z: -30 },
        rotate: { x: -zdog.TAU / 4 },
        stroke: 1,
        color: "#91E7A3",
        fill: true,
      });
      // 13
      new zdog.Rect({
        addTo: this.erdGroup,
        width: 166,
        height: 60,
        // position further back
        translate: { x: 53, y: -84, z: -30 },
        rotate: { x: -zdog.TAU / 4 },
        stroke: 1,
        color: "#91E7A3",
        fill: true,
      });
      // 14
      new zdog.Rect({
        addTo: this.erdGroup,
        width: 166,
        height: 60,
        // position further back
        translate: { x: 53, y: 0, z: -60 },
        stroke: 1,
        color: "#91E7A3",
        fill: true,
      });
      // 15
      new zdog.Rect({
        addTo: this.erdGroup,
        width: 166,
        height: 60,
        // position further back
        translate: { x: 53, y: 115, z: -60 },
        stroke: 1,
        color: "#91E7A3",
        fill: true,
      });
      // 16
      new zdog.Rect({
        addTo: this.erdGroup,
        width: 166,
        height: 60,
        // position further back
        translate: { x: 53, y: -115, z: -60 },
        stroke: 1,
        color: "#91E7A3",
        fill: true,
      });
      // draw first frame
      this.illo.updateRenderGraph();
      this.animate();
    });
  },
  methods: {
    animate() {
      // if (this.isSpinning) {
      this.illo.rotate.y += 0.0005;
      this.illo.rotate.z -= 0.00025;
      // }
      this.illo.updateRenderGraph();
      requestAnimationFrame(this.animate);
    },
  },
  computed: {
    // returns natural width/height (438)
    // unless screen is smaller than 500px,
    // then returns screen size minus 64
    threeDeeWidthHeight: function () {
      if (this.$vssWidth > 500) {
        return 438;
      } else {
        return this.$vssWidth;
      }
    },
  },
  // this.$vssWidth this.$vssHeight this.$vssEvent
  mixins: [VueScreenSize.VueScreenSizeMixin],
};
</script>

<style lang="scss">
@import "../scss/_scss.scss";
.atf {
  @include dflex-col;
  width: 100%;
  height: 100vh;

  .top {
    position: relative;
    height: 50%;
    width: 100%;
    background: linear-gradient(#F6FDF7, #91E7A3);

    .upper-left {
      position: absolute;
      top: 6.75rem;
      left: 4rem;
      transition: all 0.5s;
      transform: rotate(-5deg);

      @media (max-width: 1120px) {
        transform: rotate(0deg);
        position: relative;
        top: inherit;
        left: inherit;
        margin-top: 4rem;
      }

      .title {
        color: #bbe2c3;
        font-size: 5rem;
        font-weight: bold;
        line-height: 74px;
        opacity: 0;
        transform: translateY(3rem);
        transition: all 0.5s;

        @media (max-width: 720px) {
          font-size: 3.25rem;
          line-height: 52px;
        }
        @media (max-width: 320px) {
          font-size: 2.25rem;
          line-height: 33px;
        }
      }
      .titleUp {
        transform: translateY(0);
        opacity: 1;
      }
      .subtitle {
        font-size: 1.7rem;
        color: #bbe2c3;
        line-height: 28px;
        opacity: 0;
        transform: translateY(3rem);
        transition: all 0.5s 0.1s, opacity 0.5s;

        @media (max-width: 720px) {
          margin-top: -4px;
          font-size: 1.575rem;
        }
        @media (max-width: 320px) {
          margin-top: -2px;
          font-size: 1.15rem;
          line-height: 20px;
        }
      }
      .subTitleUp {
        opacity: 1;
        transform: translateY(0);
        transition: color 0s;
      }
      .subsubtitle {
        color: #bbe2c3;
        font-size: 1.2rem;
        font-weight: bold;
        line-height: 20px;
        opacity: 0;
        transform: translateY(3rem);
        transition: all 0.5s 0.2s, opacity 0.5s;

        @media (max-width: 720px) {
          font-size: 1.04rem;
          line-height: 16px;
        }
        @media (max-width: 320px) {
          font-size: 0.9rem;
          line-height: 15px;
        }
      }
      .subSubTitleUp {
        opacity: 1;
        transform: translateY(0);
        transition: color 0s;

        @media (max-width: 720px) {
          display: none;
        }
      }
    }
    .upper-left.threeDeeHover {
      transform: rotate(-5deg) scale(1.1, 1.1) translate(-2px, -20px);
      
      .title {
        opacity: 1;
        background: linear-gradient(
          to right,
          rgba(purple, 1) 0%,
          rgba(red, 1) 16.6%,
          rgba(orange, 1) 33.2%,
          rgba(yellow, 1) 49.8%,
          rgba(green, 1) 66.4%,
          rgba(blue, 1) 83%,
          rgba(purple, 1) 100%
        );
        background-size: 200% auto;
        background-clip: text;
        text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shine 4s linear infinite;
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
      }
      .subtitle{
        color: #7ea586;
      }
      .subsubtitle {
        color: #7ea586;
      }
      @media (max-width: 1120px) {
        transform: none;
      }
    }

    .upper-right {
      /* position: absolute; */
      position: fixed;
      top: 0;
      right: 0;
      z-index: 1;

      @media(max-width: 720px){
        position: fixed;
      }

      /* close button */
      .close-btn {
        position: absolute;
        top: 7px;
        right: 7px;
        z-index: 2;
        width: 100px;
        height: 75.33px;
        background-color: #fff;
        transition: all 0.5s;
        border-bottom-left-radius: 18px;

        @media (max-width: 1120px){
          width: 80px;
          height: 60px;
          border-bottom-left-radius: 15px;
        }

        @media (max-width: 720px){
          width: 50px;
          height: 38px;
          border-bottom-left-radius: 9px;
        }

        .closesvg {
          rect {
            fill:#91E7A3;
          }
          .rect1 {
            opacity: 1;
            transform: translate(0,0) rotate(0deg) scale(1,1);
          }
          .rect2 {
            opacity: 1;
            transform: translate(0,0) rotate(0deg) scale(1,1);
          }
          .rect3 {
            opacity: 1;
            transform: translate(0,0) rotate(0deg) scale(1,1);
          }
        }
      }
      .close-btn.upperRightHover {
        right: 72vw;
        border-radius: 18px;
        box-shadow: 0px 0px 50px 0px rgba(90, 90, 90, 0.5);
        cursor: pointer;

        @media (max-width: 1120px){
          border-radius: 15px;
        }

        @media (max-width: 720px){
          right: 8px;
          top: 16px;
          border-radius: 9px;
          width: 80px;
          height: 61px;
        }

        .closesvg {
          rect {
            transition: all 0.5s;
          }
          /* top shape */
          .rect1 {
            opacity: 1;
            transform: translate(80px,-35px) rotate(45deg) scale(1,1);
          }
          /* bottom shape */
          .rect2 {
            opacity: 1;
            transform: translate(-60px,95px) rotate(-45deg) scale(1,1);
          }
          /* middle shape */
          .rect3 {
            opacity: 0;
            transform: translate(0,0) rotate(0deg) scale(1,1);
          }
        }
      }

      /* quick links */
      .quick-links {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-evenly;
        width: 70vw;
        position: absolute;
        top: 0.5rem;
        right: 0;
        z-index: 2;
        opacity: 0;
        transform: translateX(100vw);
        transition: all 0.5s;

        @media(max-width: 720px){
          transform: translate(100px,0);
          flex-direction: column;
          width: auto;
          top: 6rem;
          right: 1.25rem;
        }
        
        a {
          position: relative;
          display: inline-flex;
          background-color: #fff;
          padding: 1rem;
          border-radius: 0.5rem;
          width: 50px;
          height: 50px;
          transition: transform 0.1s;

          @media (max-width: 1120px){
            width: 28px;
            height: 28px;
          };
          @media(max-width: 720px){
            margin-bottom: 1rem;
          };

          svg {
            width: 100%;
          }
        }
        a::after {
          position: absolute;
          bottom: 0;
          left: 0;
          opacity: 0;
        }
        a.cp::after{content:'codepen';color: #231F20;}
        a.tw::after{content:'twitter';color: #429CD6;}
        a.db::after{content:'dribbble';color: #E74D89;}
        a.gh::after{content:'github';color:#181616;}
        a.bh::after{content:'behance';color:#1769FF;}
        a.rd::after{content:'reddit';color:#FF4500;}
        a.md::after{content:'medium';color:#212121;}
        a:hover {
          transform: scale(1.3,1.3) translateY(0.75rem) rotate(3deg);
          @media (max-width: 1120px){
            transform: scale(1.2,1.2) translateY(0.75rem) rotate(3deg);
          }
          @media(max-width: 720px){
            transform: scale(1.2,1.2) translateY(0rem) rotate(0);
          }
        }
        a:hover::after {
          opacity: 1;
          width: 100%;
          margin-bottom: -50px;
          font-size: 36px;
          font-weight: 600;
          display: flex;
          justify-content: center;

          @media (max-width: 1120px){
            font-size: 32px;
            margin-bottom: -45px;
          }

          @media(max-width: 720px){
            font-size: 32px;
            margin-bottom: 5px;
            margin-left: -75px;
            justify-content: flex-end;
          }
        }
      }
      .quick-links.upperRightHover {
        opacity: 1;
        transform: translateX(0);
        @media(max-width: 720px){
          transform: translate(0,0);
        }
      }

      .no-icons {
        position: absolute;
        text-align: right;
        top: 40vh;
        right: 0;
        z-index: 2;
        pointer-events: none;
        animation: 1s ease 0s 1 normal forwards menuTextAppear;
        font-size: 52px;
        color: rgba(0,0,0,0.15);
        width: 100vw;
        padding-right: 5rem;

        @media (max-width: 1290px){
          font-size: 44px;
        }

        @media(max-width: 1120px){
          top: 25vh;
          font-size: 41px;
        }

        @media (max-width: 965px){
          font-size: 36px;
        }

        @media (max-width: 890px){
          font-size: 32px;
        }

        @media (max-width: 800px){
          font-size: 26px;
        }

        @media(max-width: 720px){
          display: none;
        }

        span {
          white-space: nowrap;
        }
      }
      @keyframes menuTextAppear {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      /* big icons */
      .big-icons {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35vw;
        height: 35vw;
        position: absolute;
        top: 220px;
        right: 12vw;
        z-index: 2;
        pointer-events: none;

        @media(max-width: 1120px){
          top: 160px;
          right: 10vw;
        }
        @media(max-width: 720px){
          display: none;
        }
        .bi {
          width: 100%;
          transition: all 0.5s;
          opacity: 0;
          animation: 0.1s ease 0s 1 normal forwards showBi;

          svg {
            width: 100%;
          }
        }
        @keyframes showBi {
          0% {
            opacity: 0;
            transform: translateY(0) scale(1.1,1.1);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1,1);
          }
        }

      }

      /* background circle */
      .bg {
        position: absolute;
        top: -150px;
        right: -150px;
        background-color: #91E7A3;
        border-radius: 50%;
        width: 300px;
        height: 300px;
        transition: all 0.5s;
        z-index: 1;
        box-shadow: 0px 0px 50px 0px rgba(255, 255, 255, 1);

        @media (max-width: 1120px){
          width: 280px;
          height: 280px;
        }

        @media (max-width: 720px){
          width: 250px;
          height: 250px;
        }
      }
      .bg.expanded {
        top: -75vw;
        right: -75vw;
        width: 150vw;
        height: 150vw;
        box-shadow: none;

        @media(max-width: 720px){
          opacity: 0;
        }
      }
    }
    .upper-right.upperRightRollin {
      animation: 1.5s ease-out 0s 1 normal forwards upperRightRollin;
    }
    @keyframes upperRightRollin {
      0% {
        transform: translateX(1.25rem);
        opacity: 0;
      }
      100% {
        transform: translateX(0rem);
        opacity: 1;
      }
    }

    .bganim {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      bottom: 0;
      pointer-events: none;

      /* background-size: contain; */

      @media (max-width: 1120px) {
        /* background-size: contain; */
      }
    }
    .bganim.threeDeeHover {
      background: linear-gradient(
        to right,
        rgba(purple, 0.25) 0%,
        rgba(red, 0.25) 16.6%,
        rgba(orange, 0.25) 33.2%,
        rgba(yellow, 0.25) 49.8%,
        rgba(green, 0.25) 66.4%,
        rgba(blue, 0.25) 83%,
        rgba(purple, 0.25) 100%
      );
      background-size: 200% auto;
      animation: bgshine 4s linear infinite;
      @keyframes bgshine {
        from {
          background-position: 200% center;
        }
      }
    }
  }
  .bottom {
    position: relative;
    height: 50%;
    width: 100%;
    background: rgb(177, 177, 177);
    background: linear-gradient(
      180deg,
      #f1f1f1 0%,
      rgba(255, 255, 255, 0) 5%,
      rgba(255, 255, 255, 0) 100%
    );

    .down-indicator {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding-bottom: 2.5rem;
      opacity: 0;
      transform: translateY(0rem);
      transition: all 1s 0.25s;

      @media (max-width: 720px) {
        padding-bottom: 9rem;
      }

      svg {
        width: 172px;
        opacity: 0.1;

        @media (max-width: 1120px) {
          width: 120px;
        }
      }
    }
    .downIndicatorShowing {
      opacity: 1;
      animation: 1.5s ease 0.25s infinite normal forwards indicatorHover;
    }
    @keyframes indicatorHover {
      0% {
        transform: translateY(0rem);
      }
      50% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(0rem);
      }
    }

    .intro {
      text-align: left;
      color: #8ac897;
      font-size: 124px;
      font-weight: 400;
      position: absolute;
      top: -143px;
      left: 33rem;
      transition: all 0.5s;

      @media(max-width: 1120px){
        position: relative;
        top: initial;
        left: initial;
        margin-top: -268px;
        text-align: center;
        font-size: 80px;
        color: #dcdcdc;
      }

      @media(max-width: 720px){
        padding: 0 2rem;
        font-size: 48px;
      }
      @media(max-width: 500px){
        display: none;
      }

      .i1 {
        opacity: 0;
        display: inline-block;
        transform: translateX(-3rem);
      }
      .i2 {
        opacity: 0;
        display: inline-block;
        transform: translateX(-3rem);
        white-space: nowrap;
      }
    }
    .intro.shineIntro {
        animation: 2s linear 0s infinite normal forwards shineIntro;
    }
    @keyframes shineIntro {
      0% {
        filter: hue-rotate(0deg);
      }
      100% {
        filter: hue-rotate(360deg);
      }
    }
    .intro.animate {
      .i1 {
        animation: 1.3s ease 0.9s 1 normal forwards iin;
      }
      .i2 {
        animation: 1.3s ease 1.7s 1 normal forwards iin;
      }
      @keyframes iin {
        0% {
          opacity: 0;
          transform: translateX(-3rem);
        }
        100% {
          opacity: 1;
          transform: translateX(0rem);
        }
      }
    }

    .subintro {
      opacity: 0;
      text-align: left;
      color: #d2d2d2;
      font-size: 52px;
      font-weight: 500;
      position: absolute;
      top: 1rem;
      left: 37rem;
      transition: all 0.5s;
      display: inline-block;
      transform: translateX(-3rem);

      @media (max-width: 1440px){
        font-size: 32px;
      }

      @media(max-width: 1120px){
        position: relative;
        top: initial;
        left: initial;
        margin-top: -268px;
        text-align: center;
        font-size: 38px;
      }
      @media(max-width: 720px){
        /* opacity: 0 !important; */
        font-size: 28px;
      }
      @media(max-width: 500px){
        display: none;
      }
    }
    .subintro.animate {
      animation: 1s ease 2.8s 1 normal forwards iin;
    }

    .subsubintro {
      opacity: 0;
      text-align: left;
      color: #bfbfbf;
      font-size: 24px;
      font-weight: 400;
      position: absolute;
      top: 6rem;
      left: 37rem;
      padding-right: 5rem;
      transition: all 0.5s;

      @media(max-width: 1440px){
        top: 4.25rem;
      }

      @media(max-width: 1120px){
        display: none;
      }

      a {
        text-decoration: none;
      }
    }
    .subsubintro.animate {
      animation: 1s ease 4s 1 normal forwards iappear;
    }

    @keyframes iappear {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

    .threeDeeCont {
      position: absolute;
      top: -219px;
      left: 2.5rem;
      border-radius: 50%;
      transition: all 0.5s;

      .threeDeeE {
        background: #fff;
        border: 1px solid #efefef;
        border-radius: 50%;
        box-shadow: 0px 0px 145px 20px rgba(0, 0, 0, 0.1);
        cursor: move;
        transform: translateX(-10rem);
        opacity: 0;

        @media (max-width: 1120px) {
          background: transparent;
          box-shadow: none;
          border: none;
          border-radius: 0;
        }
      }

      // threeDeeE animations
      .threeDeeRollin {
        animation: 1.5s ease-out 0s 1 normal forwards threeDeeRollin;

        @media (max-width: 1120px) {
          animation: 1.5s ease-out 0s 1 normal forwards threeDeeAppear;
        }
      }
      @keyframes threeDeeRollin {
        0% {
          transform: translateX(-1.25rem);
          opacity: 0;
        }
        100% {
          transform: translateX(0rem);
          opacity: 1;
        }
      }
      @keyframes threeDeeAppear {
        0% {
          transform: scale(0.9);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }

      @media (max-width: 1120px) {
        position: relative;
        display: flex;
        justify-content: center;
        left: 0;
        border-radius: 0;
      }
      @media (max-width: 500px) {
        position: relative;
        display: flex;
        justify-content: center;
        left: 0;
      }

      &:hover {
        transform: scale3d(1.05, 1.05, 1.05);
      }
    }
    .threeDeeCont.threeDeeHover {
      animation: 2s linear 0s infinite normal forwards colorSpin;
    }
    @keyframes colorSpin {
      0% {
        filter: hue-rotate(0deg);
      }
      100% {
        filter: hue-rotate(360deg);
      }
    }
  }

  &.view-in,
  &.view-out {
    .down-indicator {
      opacity: 0;
      transition: all 0.25s 0s;
    }
  }
}
</style>