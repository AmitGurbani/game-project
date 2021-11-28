<template>
  <div>
    <LandingScreen />
    <CarFeatures />
    <Requirements />
    <Quotes />
    <Newsletter />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import LandingScreen from "./LandingScreen.vue";
import CarFeatures from "./CarFeatures.vue";
import Requirements from "./Requirements.vue";
import Quotes from "./Quotes.vue";
import Newsletter from "./Newsletter.vue";

@Component({
  components: {
    LandingScreen,
    CarFeatures,
    Requirements,
    Quotes,
    Newsletter,
  },
})
export default class Index extends Vue {}
</script>
