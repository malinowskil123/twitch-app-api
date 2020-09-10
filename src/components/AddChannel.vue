<template>
  <form @submit="handelSubmit" class="flex-container flex-center">
    <input
      class="search-box"
      type="text"
      name="channelName"
      v-model="channelName"
      placeholder="Enter a Twitch Channel..."
    />
    <button type="submit" class="btn" v-bind:class="{ 'loading-btn': loading }">
      Submit
    </button>
  </form>
</template>

<script>
  export default {
    name: 'AddChannel',
    props: ['loading'],
    data() {
      return {
        channelName: this.channelName,
      }
    },
    methods: {
      handelSubmit(event) {
        event.preventDefault()
        if (this.channelName) {
          this.$emit('get-channel', this.channelName)
          this.channelName = ''
        } else alert('Please fill out the input box!')
      },
    },
  }
</script>

<style scoped>
  .search-box {
    width: 80%;
    padding: 10px;
  }
  .btn {
    width: 20%;
    color: #ffffff;
    background: #2c3e50;
    border: none;
    padding: 10px;
    margin-left: 10px;
  }

  .loading-btn::after {
    position: absolute;
    content: '';
    animation: loading 1s ease-in infinite;
  }

  @keyframes loading {
    0% {
      content: '';
    }
    33% {
      content: '.';
    }
    66% {
      content: '..';
    }
    100% {
      content: '...';
    }
  }
</style>
