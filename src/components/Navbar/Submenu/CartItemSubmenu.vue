<template>
    <div class="items-submenu-cart">
        <div class="thumb-submenu-cart">

        </div>
        <div class="detail-submenu-cart">
            <a href="#">This is the product name</a>
            <span>1 Barang (300 gram)</span>
        </div>
        <div class="pricing-submenu-cart">
             <h3>Rp. 300.000</h3>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CIsubmenu',
};
</script>

<style scoped>
.items-submenu-cart{
    width: 100%;
    height: 60px;
    background-color: rgba(128, 128, 128, 0.1);
    display: flex;
    margin-bottom: 10px;
}

.thumb-submenu-cart{
    flex: 1;
    height: 100%;
    background-color: royalblue;
}
.detail-submenu-cart{
    flex: 3;
    height: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2px 0px 2px 5px;
}
.detail-submenu-cart a{
    font-size: 15px;
    font-weight: bolder;
    color: #141414;
    text-decoration: none;
}
.detail-submenu-cart span{
    font-size: 10px;
    font-weight: bolder;
    color: #5a5a5a;
}
.title-item-cart-submenu{
    width: 100%;
    height: 70%;
    background-color: rgb(255, 255, 255);
    display: flex;
}
.pricing-submenu-cart{
   flex: 1.3;
    height: 100%;
    background-color: rgb(255, 255, 255);
    align-items: center;
    display: flex;
    justify-content: flex-end;
}
.pricing-submenu-cart h3{
    color: rgb(250, 89, 29);
    font-weight: bold;
    font-size: 15px;
}
</style>
