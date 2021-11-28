<template>
  <v-avatar :size="size">
    <v-img :src="src"></v-img>
  </v-avatar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class UserAvatar extends Vue {
  @Prop({ required: true, type: String }) readonly src!: string;
  @Prop({ default: 48 }) readonly size!: string | number;
}
</script>

<style scoped lang="scss"></style>
