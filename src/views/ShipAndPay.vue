<template>
    <div>
       <NavbarSAP />
       <WrapContent />
    </div>
</template>

<script>
import NavbarSAP from '../components/shipment/ShipNavbar.vue';
import WrapContent from '../components/shipment/WrapContent.vue';

export default {
  name: 'ShipAndPay',
  components: {
    NavbarSAP,
    WrapContent,
  },
};
</script>
