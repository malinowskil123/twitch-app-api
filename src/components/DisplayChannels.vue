<template>
  <div class="channels-scroll">
    <select v-model="selected" v-if="channelsLength>1" @change="onChange($event)" class="flex-left">
      <option :value="undefined">Sort By Name</option>
      <option v-for="option in options" v-bind:key="option" :value="option">{{option}}</option>
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
  data() {
    return {
      options: ["A-Z", "Z-A"],
      selected: undefined,
    };
  },
  props: ["channels", "channelsLength"],
  watch: {
    channelsLength: {
      immediate: true,
      handler(currentValue) {
        if (currentValue <= 1) this.selected = undefined;
      },
    },
  },
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