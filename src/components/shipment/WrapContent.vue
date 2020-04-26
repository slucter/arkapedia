<template>
    <div class="wrap-content">
        <HeaderShipment />
        <CheckoutMain />
    </div>
</template>

<script>
import HeaderShipment from './Wrapped/HeaderShipment.vue';
import CheckoutMain from './Wrapped/CheckoutMain.vue';

export default {
  name: 'WrapContent',
  components: {
    HeaderShipment,
    CheckoutMain,
  },
};
</script>

<style scoped>
.wrap-content{
    width: 70%;
    margin:0 auto;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
}
</style>
