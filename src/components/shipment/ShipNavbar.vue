<template>
    <nav>
        <img src="../../assets/img/logo-tokped.svg" alt="logo">
    </nav>
</template>

<script>
export default {
  name: 'NavbarSAP',
};
</script>

<style scoped>
nav{
    width: 100%;
    height: 60px;
    background: rgb(239, 239, 239);
    display: flex;
    border-bottom: 1px solid rgb(224, 224, 224);
    align-items: center;
    padding-left: 20px;
}

nav img{
    width: 145px;
    height: 31px;
}
</style>
