<template>
  <v-card color="grey darken-4">
    <v-card-text class="py-1">
      <v-list-item class="pl-0">
        <UserAvatar :src="avatar" :size="50" />

        <v-list-item-content class="pl-3">
          <v-list-item-title class="font-weight-bold primary--text">{{
            name
          }}</v-list-item-title>
          <v-list-item-subtitle class="grey--text">{{
            designation
          }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon color="grey">mdi-twitter</v-icon>
        </v-list-item-action>
      </v-list-item>
      <p class="white--text">"{{ message }}"</p>
      <p class="grey--text">{{ when }}</p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import UserAvatar from "./UserAvatar.vue";

@Component({
  components: {
    UserAvatar,
  },
})
export default class QuoteCard extends Vue {
  @Prop({ required: true, type: String }) readonly avatar!: string;
  @Prop({ required: true, type: String }) readonly name!: string;
  @Prop({ required: true, type: String }) readonly designation!: string;
  @Prop({ required: true, type: String }) readonly message!: string;
  @Prop({ required: true, type: String }) readonly when!: string;
}
</script>

<style lang="scss" scoped></style>
