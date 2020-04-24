<template>
    <div class="head-submenu-category">
            <a href="#">Belanja</a>
            <a href="#">Featured</a>
            <a href="#">Hanya Di Tokopedia</a>
            <a href="#">Keungan</a>
            <a href="#">Top-Up & Tagihan</a>
            <a href="#">Travel & Entertainment</a>
            <a href="#">Untuk Seller</a>
    </div>
</template>

<script>
export default {
  name: '_Head',
};
</script>

<style scoped>
.head-submenu-category{
    width: 100%;
    height: 53px;
    border: 1px solid #dddddd;
    display: flex;
    align-items: center;
    padding-left: 35px;
}
.selected-subcategory{
    padding-bottom: 10px;
    box-sizing: border-box;
}
.head-submenu-category a{
    text-decoration: none;
    color: #808080;
    margin: 10px;
    font-size: 14px;
    position: relative;
}

.head-submenu-category a:hover{
    color: #03ac0e;
}

</style>
