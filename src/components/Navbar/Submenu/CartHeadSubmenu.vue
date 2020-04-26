<template>
    <div class="head-submenu-cart">
        <h3>Keranjang (1)</h3>
        <a href="#">Lihat sekarang</a>
    </div>
</template>

<script>
export default {
  name: 'CHeadSubmenu',
};
</script>

<style scoped>
.head-submenu-cart{
    display: flex;
    width: 100%;
    height: 50px;
    /* background-color: rgb(216, 216, 216); */
    border-bottom: 1px solid #b6b6b6;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}
.head-submenu-cart h3{
    font-size: 15px;
    color: #5f5f5f;
    font-weight: bold;
}
.head-submenu-cart a{
    font-size: 15px;
    color: #03ac0e;
    font-weight: bold;
    text-decoration: none;
}
</style>
