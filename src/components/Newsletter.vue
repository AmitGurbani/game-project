<template>
  <div class="newsletter">
    <div class="newsletter-text">
      <h5>WANT TO STAY IN TOUCH?</h5>
      <h1>NEWSLETTER SUBSCRIBE</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque
        voluptas sint quaerat laudantium, dolores expedita ducimus iure
        temporibus corrupti, voluptates amet ad! Repellendus eaque voluptates
        iure cum eum! Velit!
      </p>
      <v-row>
        <v-col cols="8">
          <v-text-field label="Your email address" dark solo></v-text-field>
        </v-col>
        <v-col>
          <v-btn large color="primary" class="black--text">Subscribe now</v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Newsletter extends Vue {}
</script>

<style lang="scss" scoped>
.newsletter {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("https://images.pexels.com/photos/3778769/pexels-photo-3778769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  height: 700px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  &-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(0%, -50%);
    color: white;
    h1 {
      font-size: 60px;
    }
    h5 {
      font-size: 20px;
    }
    p {
      font-size: 18px;
    }
  }
}
</style>
