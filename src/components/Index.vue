<template>
  <div>
    <LandingScreen />
    <CarFeatures />
    <Requirements />
    <Quotes />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import LandingScreen from "./LandingScreen.vue";
import CarFeatures from "./CarFeatures.vue";
import Requirements from "./Requirements.vue";
import Quotes from "./Quotes.vue";

@Component({
  components: {
    LandingScreen,
    CarFeatures,
    Requirements,
    Quotes,
  },
})
export default class Index extends Vue {}
</script>
