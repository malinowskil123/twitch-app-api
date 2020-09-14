<template>
  <div id="app">
    <Header />
    <div class="container">
      <AddChannel v-on:get-channel="getChannel" v-bind:loading="loading" />
      <DisplayChannels
        v-on:delete-channel="deleteChannel"
        v-on:sort="sortChannels"
        v-bind:channels="channels"
        v-bind:channelsLength="channels.length"
      />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import AddChannel from "./components/AddChannel.vue";
import DisplayChannels from "./components/DisplayChannels.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
    AddChannel,
    DisplayChannels,
  },
  data() {
    return {
      channels: [],
      loading: false,
    };
  },
  methods: {
    async getChannel(channelName) {
      this.loading = true;
      try {
        const response = await axios.get(`/api/channel/${channelName}`);
        if (response.data.message) return alert(response.data.message);
        this.channels = [...this.channels, response.data];
      } catch (err) {
        alert(err);
      }
      this.loading = false;
    },
    deleteChannel(id) {
      this.channels = this.channels.filter((channel) => channel._id !== id);
    },
    sortChannels(order, sortBy) {
      if (!order || this.channels.length <= 1) return;
      this.channels = this.channels.sort((a, b) => {
        return order === "A-Z"
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
    },
  },
};
</script>

// global styles
<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: #333;
  text-decoration: none;
}

#app {
  width: 100%;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  background-image: linear-gradient(165deg, #85d3cc 25%, #6d5b7c 75%);
}

.hide {
  display: none;
}

.flex-container {
  display: flex;
  align-items: center;
}

.flex-half {
  width: 50%;
}

.flex-right {
  justify-content: flex-end;
}

.flex-left {
  justify-content: flex-start;
}

.flex-center {
  justify-content: center;
}

.flex-padding {
  padding-left: 20px;
  padding-right: 20px;
}

.container {
  width: 40%;
}

@media (min-width: 0px) and (max-width: 576px) {
  .container {
    width: 90%;
  }
}

@media (min-width: 0px) and (max-width: 850px) and (max-height: 500px) {
  .container {
    width: 70%;
  }
}
</style>
