<template>
  <div class="covid-intro-container">
    <div class="covid-intro-text info-font">
      {{ intro }}
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({

  name: 'CovidIntro',

  data: () => ({
    intro: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam justo augue, 
      quis varius nibh tempor vitae. Fusce hendrerit sem et bibendum dignissim. Praesent interdum 
      nulla quis magna egestas, ac faucibus mauris molestie. Curabitur orci lorem, feugiat vitae 
      velit vel, sodales elementum risus. In tristique iaculis quam et finibus. Nulla vestibulum 
      ante sed lacinia venenatis. Fusce eget vehicula nisi, at congue ipsum. Morbi blandit odio 
      sed diam volutpat vestibulum. Cras pretium placerat orci, id tincidunt sem aliquet et. 
      Vestibulum eu dui mattis nibh consequat varius. Suspendisse consequat sollicitudin ipsum, non 
      venenatis erat congue in. Morbi vel leo sit amet sapien porttitor hendrerit vitae eu ligula. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac felis tellus. 
    `
  })

})
</script>

<style lang="scss" scoped>
@import '../styles/main';

.covid-intro-container {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr minmax(60px, 80%) 1fr;
}
.covid-intro-text {
  grid-column-start: 2;
  grid-column-end: 3;
  color: $primary-color;
  line-height: 1.375rem;
}
</style>
