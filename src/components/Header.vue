<template>
  <header id="header">
    <h1>Twitch API App</h1>
    <img src="../assets/logo.png" alt="logo" class="logo" />
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>


<style scoped>
#header {
  width: 100%;
  height: 8vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2c3e50;
}

@media (min-width: 0px) and (max-width: 850px) and (max-height: 500px) {
  #header {
    height: 15vh;
  }
}

.logo {
  width: 3.5%;
}

@media (min-width: 0px) and (max-width: 576px) {
  .logo {
    width: 10%;
  }
}
</style>

