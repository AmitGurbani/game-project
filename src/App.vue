<template>
  <v-app>
    <v-app-bar app dark>
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
      <v-select
        :items="languages"
        v-model="selectedLanguage"
        solo
        background-color="transparent"
        flat
        class="mt-8"
        style="max-width: 7%"
      ></v-select>

      <v-btn text>
        <v-icon color="primary">mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon color="primary">mdi-account</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Index />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Index from "./components/Index.vue";
import Footer from "./components/Footer.vue";

@Component({
  components: {
    Index,
    Footer,
  },
})
export default class App extends Vue {
  languages = ["ENG", "RUS", "FRA", "DEU"];
  selectedLanguage = "ENG";
}
</script>
