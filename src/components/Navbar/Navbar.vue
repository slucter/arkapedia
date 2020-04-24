<template>
    <nav>
        <NavTop />
        <NavCenter @Catclick2="$emit('Catclick3')" @CartClick2="$emit('CartClick3')" />
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
    height: 90px;
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.2);
    position: fixed;
    z-index: 100;
    top:0;
    left: 0;
}
</style>
