<template>
  <div class="channels-scroll">
    <div v-bind:key="channel._id" v-for="channel in channels" class="channel">
      <Channel
        v-bind:channel="channel"
        v-on:delete-channel="$emit('delete-channel', channel._id)"
      />
    </div>
  </div>
</template>

<script>
  import Channel from './Channel.vue'
  export default {
    name: 'DisplayChannels',
    components: {
      Channel,
    },
    props: ['channels'],
  }
</script>

<style scoped>
  .channels-scroll {
    max-height: 50vh;
    margin-top: 20px;
    overflow-y: scroll;
  }
</style>
