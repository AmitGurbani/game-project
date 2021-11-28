<template>
  <div>
    <LandingScreen />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import LandingScreen from "./LandingScreen.vue";

@Component({
  components: {
    LandingScreen,
  },
})
export default class Index extends Vue {}
</script>
