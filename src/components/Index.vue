<template>
  <div>
    <LandingScreen />
    <CarFeatures />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import LandingScreen from "./LandingScreen.vue";
import CarFeatures from "./CarFeatures.vue";

@Component({
  components: {
    LandingScreen,
    CarFeatures,
  },
})
export default class Index extends Vue {}
</script>
