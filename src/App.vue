<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
  *{
    margin: 0;
    padding: 0;
    font-family: "open sans";
  }

  h1, h2, h3, h4, h5, h6{
    margin: 0;
  }
  .container{
    max-width: 1300px !important;
  }
</style>
