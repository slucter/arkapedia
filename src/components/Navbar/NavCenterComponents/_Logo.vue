<template>
  <router-link to="/">
    <div class="nav-logow">
        <img src="../../../assets/img/logo-tokped.svg" alt="logow">
        <!-- <a href="#">Arkapedia</a> -->
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Logo_',
};
</script>

<style scoped>
.nav-logow{
    display: flex;
    flex: 1;
    background-color: #fff;
    height: 100%;
    align-items: center;
    justify-content: center;
}
.nav-logow img{
    width: 100%;
    height: 55%;
}
</style>
