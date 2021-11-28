<template>
  <div class="car-features">
    <div class="car-features-text">
      <h5>WHAT'S SO SPECIAL?</h5>
      <h1>FEATURES</h1>
      <v-timeline dense dark>
        <v-timeline-item color="white" small>
          <h3 class="primary--text">HIGH SPEED</h3>
          <p>0-100 in 4 seconds</p>
        </v-timeline-item>
        <v-timeline-item color="white" small>
          <h3 class="primary--text">GREATER BUILD QUALITY</h3>
        </v-timeline-item>
        <v-timeline-item color="white" small>
          <h3 class="primary--text">IMPRESSIVE COLOR</h3>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class CarFeatures extends Vue {}
</script>

<style lang="scss" scoped>
.car-features {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
    url("https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  height: 700px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  &-text {
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    color: white;
    h1 {
      font-size: 60px;
    }
    h5 {
        font-size: 20px;
    }
    h3 {
        font-size: 22px;
    }
    p {
      font-size: 18px;
    }
  }
}
</style>
