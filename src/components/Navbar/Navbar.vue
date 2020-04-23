<template>
    <nav>
        <NavTop />
        <NavCenter />
    </nav>
</template>

<script>
import NavTop from './NavTop.vue';
import NavCenter from './NavCenter.vue';

export default {
  name: 'Navbar',
  components: {
    NavTop,
    NavCenter,
  },
};
</script>

<style scoped>
nav{
    width: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    height: 110px;
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.2);
    position: fixed;
    z-index: 100;
    top:0;
    left: 0;
}
</style>
