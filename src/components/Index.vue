<template>
  <div>
    <LandingScreen />
    <CarFeatures />
    <Requirements />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import LandingScreen from "./LandingScreen.vue";
import CarFeatures from "./CarFeatures.vue";
import Requirements from "./Requirements.vue";

@Component({
  components: {
    LandingScreen,
    CarFeatures,
    Requirements,
  },
})
export default class Index extends Vue {}
</script>
