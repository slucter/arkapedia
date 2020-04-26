<template>
  <router-link class="link" to="/">
    <div class="nav-logow">
        <!-- <img src="../../../assets/img/logo-tokped.svg" alt="logow"> -->
      Arkapedia
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Logo_',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.nav-logow{
    display: flex;
    flex: 1;
    background-color: #fff;
    height: 100%;
    align-items: center;
    justify-content: center;
font-family: 'Pacifico', cursive;
    font-size: 25px;
    margin-right: 10px;
  color: #03AC0e;
}
.link{
  color: inherit;
  text-decoration: none;
}
/* .nav-logow img{
    width: 100%;
    height: 55%;
} */
</style>
