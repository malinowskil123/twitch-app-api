<template>
  <div class="channel">
    <a
      class="flex-container flex-half flex-left flex-padding"
      target="_blank"
      v-bind:href="channel.url"
    >
      <h2>{{ channel.name }}</h2>
      <img v-bind:src="channel.logo" class="channel-img" />
    </a>
    <div class="flex-container flex-half flex-right flex-padding">
      <p>
        Followers:
        <strong>{{ channel.followers }}</strong>
      </p>
      <button @click="$emit('delete-channel', channel._id)" class="del">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Channel",
  props: ["channel"],
};
</script>

<style scoped>
.channel {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  color: #333;
  background: #f3f3f3;
  margin: 20px 0px;
  border-radius: 10px;
}

.channel:hover {
  background: #c7c6c6;
  transition: all 0.3s ease;
}

.channel-img {
  width: 15%;
  border-radius: 50%;
}

@media (min-width: 0px) and (max-width: 576px) {
  .channel-img {
    width: 25%;
  }
}

.del {
  background: #ff0000;
  color: #fff;
  margin-left: 10px;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}

.del:hover {
  background: #b81111;
}
</style>
