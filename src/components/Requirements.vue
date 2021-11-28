<template>
  <div class="requirements">
    <div class="requirements-heading">
      <h1>REQUIREMENTS</h1>
    </div>
    <div class="requirements-text">
      <v-row>
        <v-col cols="6">
          <h4 class="primary--text">OS:</h4>
          <p>
            Windows 7 64-bit only <br />
            (No OSX support at this time)
          </p>
        </v-col>
        <v-col cols="6">
          <h4 class="primary--text">PROCESSOR:</h4>
          <p>
            Intel Core 2 Duo @ 2.4 GHZ or <br />
            AMD Athlon X2 @ 2.8 GHZ
          </p>
        </v-col>
        <v-col cols="6">
          <h4 class="primary--text">MEMORY:</h4>
          <p>8 GB RAM</p>
        </v-col>
        <v-col cols="6">
          <h4 class="primary--text">STORAGE:</h4>
          <p>8 GB available space</p>
        </v-col>
        <v-col cols="12">
          <h4 class="primary--text">GRAPHICS:</h4>
          <p>
            NVIDIA GeForce GTX 660 2GB or <br />
            AMD Radeon HD 7850 2GB DirectX11 (Shared Model 5)
          </p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Requirements extends Vue {}
</script>

<style lang="scss" scoped>
.requirements {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
    url("https://images.pexels.com/photos/1140991/pexels-photo-1140991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  height: 700px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  &-heading {
    position: absolute;
    top: 8%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    h1 {
      font-size: 60px;
    }
  }
  &-text {
    position: absolute;
    top: 40%;
    left: 5%;
    width: 30%;
    color: white;
  }
}
</style>
