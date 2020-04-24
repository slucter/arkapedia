<template>
    <div class="submenu-icon-group">
        <div class="submenu-cart-icon">
            <CartHeadSubmenu />
            <CartItemSubmenu />
        </div>
    </div>
</template>

<script>
import CartHeadSubmenu from './CartHeadSubmenu.vue';
import CartItemSubmenu from './CartItemSubmenu.vue';

export default {
  name: 'CartSubmenu',
  components: {
    CartHeadSubmenu,
    CartItemSubmenu,
  },
};
</script>

<style scoped>
.submenuCartShow{
    visibility: visible!important;
}

.SubCartTop{
    top: -20px!important;
    transition: .3s;
}
.submenu-icon-group{
    display: flex;
    position: fixed;
    visibility: hidden;
    bottom:0;
    width: 100vw;
    height: 90.4vh;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 100;
}
.submenu-cart-icon{
    width: 400px;
    display: flex;
    background-color: rgb(255, 255, 255);
    position: absolute;
    flex-direction: column;
    right:400px;
    top:25px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 10px;
    box-shadow: 1px 1px 15px 1px rgba(0, 0, 0, 0.2);
    transition: .3s;
}
</style>
