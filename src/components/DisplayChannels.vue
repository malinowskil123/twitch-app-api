<template>
  <div class="channels-scroll">
    <select
      @change="onChange($event)"
      v-bind:class="{'hide': channelsLength<=1 }"
      class="flex-left"
    >
      <option>Sort By Name</option>
      <option value="A-Z">Sort: A-Z</option>
      <option value="Z-A">Sort: Z-A</option>
    </select>
    <div v-bind:key="channel._id" v-for="channel in channels" class="channel">
      <Channel v-bind:channel="channel" v-on:delete-channel="$emit('delete-channel', channel._id)" />
    </div>
  </div>
</template>

<script>
import Channel from "./Channel.vue";
export default {
  name: "DisplayChannels",
  components: {
    Channel,
  },
  props: ["channels", "channelsLength"],
  methods: {
    onChange(event) {
      this.$emit("sort", event.target.value, "name");
    },
  },
};
</script>

<style scoped>
.channels-scroll {
  max-height: 50vh;
  margin-top: 20px;
  overflow-y: scroll;
}
</style>
