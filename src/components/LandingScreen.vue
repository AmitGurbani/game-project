<template>
  <div class="landing-image">
    <div class="landing-image-text">
      <h1>DRIVE THE FUTURE</h1>
      <p>EXPERIENCE LUXARY LIKE NEVER BEFORE</p>
      <v-btn color="primary" class="black--text">Book now on Hype | $100</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class LandingScreen extends Vue {}
</script>

<style lang="scss" scoped>
.landing-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  height: 700px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  &-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    h1 {
      font-size: 60px;
    }
    p {
      font-size: 20px;
    }
  }
}
</style>
