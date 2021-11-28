<template>
  <v-footer app absolute dark>
    <v-spacer></v-spacer>
    <div class="d-flex align-center">
      <v-img
        alt="Hype Logo"
        class="shrink mr-2"
        contain
        src="https://ik.imagekit.io/egrcxziyv/hypeluxury_logo.png?tr=w-100,h-114"
        transition="scale-transition"
        width="40"
      />
    </div>
    <v-spacer></v-spacer>
    <v-btn text>MAIN</v-btn>
    <v-btn text>About</v-btn>
    <v-btn text>Car Features</v-btn>
    <v-btn text>Requirements</v-btn>
    <v-btn text>Quotes</v-btn>
    <v-spacer></v-spacer>
    <v-btn text>
      <v-icon color="primary">mdi-facebook</v-icon>
    </v-btn>
    <v-btn text>
      <v-icon color="primary">mdi-twitter</v-icon>
    </v-btn>
    <v-btn text>
      <v-icon color="primary">mdi-youtube</v-icon>
    </v-btn>
    <v-btn text>
      <v-icon color="primary">mdi-message</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style scoped lang="scss"></style>
