<template>
  <div class="card-product-row">
    <!-- <div class="before-login" v-if="!userId">
      <CardDiscount image="https://ecs7.tokopedia.net/img/cache/700/attachment/2020/4/23/32520341/32520341_083428f6-905c-4a34-932d-9cc4aea05c75.jpg" discount="75%" oriPrice="Rp.40.000"
      name="HANDSFREE JETE CELLO - Hitam" price="Rp9.999" width="width: 10%" />
      <CardDiscount image="https://ecs7.tokopedia.net/img/cache/700/attachment/2020/4/23/32520341/32520341_0bf212f9-e41e-41ad-a5e0-a0cf2bca7d4f.jpg" discount="75%" oriPrice="Rp.40.000"
      name="Kabel Data T BONE Gaming Micro Usb K2 PREMIUM QUALITY Fast charging" price="Rp10.000"
      width="width: 20%" />
      <CardDiscount image="https://ecs7.tokopedia.net/img/cache/700/attachment/2020/4/23/32520341/32520341_6ef5bddd-c685-4bb3-96c7-799ddea3289d.jpg" width="width: 50%" discount="73%"
      name="CAR CHARGER BASEUS 30W TYPE-C PD3.0+USB QUICK CHARGE 4.0" price="Rp69.000"
      oriPrice="Rp.258.000"/>
      <CardDiscount image="https://ecs7.tokopedia.net/img/cache/700/attachment/2020/4/23/32520341/32520341_8a378b91-42ca-468f-a4ac-f83ab326f925.jpg" width="width: 5%" discount="13%"
      name="Purebaby Laundry Liquid 900ml sabun cuci baju bayi" price="Rp32.300"
      oriPrice="Rp.37.000"/>
      <CardDiscount image="https://ecs7.tokopedia.net/img/cache/700/attachment/2020/4/23/32520341/32520341_f75b8804-4883-46d0-82bd-40463b0d7191.jpg" width="width: 0%" discount="32%"
      name="Cetaphil Gentle Skin Cleanser - 125 ml" price="Rp85.000" oriPrice="Rp.124.900" />
    </div> -->
    <div class="after-login">
      <CardDiscountLogin image="https://ecs7.tokopedia.net/img/cache/700/attachment/2020/4/23/32520341/32520341_083428f6-905c-4a34-932d-9cc4aea05c75.jpg" discount="75%" oriPrice="Rp.40.000"
      name="HANDSFREE JETE CELLO - Hitam" price="Rp9.999" width="width: 10%" />
      <CardDiscountLogin image="https://ecs7.tokopedia.net/img/cache/700/attachment/2020/4/23/32520341/32520341_0bf212f9-e41e-41ad-a5e0-a0cf2bca7d4f.jpg" discount="75%" oriPrice="Rp.40.000"
      name="Kabel Data T BONE Gaming Micro Usb K2 PREMIUM QUALITY Fast charging" price="Rp10.000"
      width="width: 20%" />
      <CardDiscountLogin image="https://ecs7.tokopedia.net/img/cache/700/attachment/2020/4/23/32520341/32520341_6ef5bddd-c685-4bb3-96c7-799ddea3289d.jpg" width="width: 50%" discount="73%"
      name="CAR CHARGER BASEUS 30W TYPE-C PD3.0+USB QUICK CHARGE 4.0" price="Rp69.000"
      oriPrice="Rp.258.000"/>
      <CardDiscountLogin image="https://ecs7.tokopedia.net/img/cache/700/attachment/2020/4/23/32520341/32520341_8a378b91-42ca-468f-a4ac-f83ab326f925.jpg" width="width: 5%" discount="13%"
      name="Purebaby Laundry Liquid 900ml sabun cuci baju bayi" price="Rp32.300"
      oriPrice="Rp.37.000"/>
      <CardDiscountLogin image="https://ecs7.tokopedia.net/img/cache/700/attachment/2020/4/23/32520341/32520341_f75b8804-4883-46d0-82bd-40463b0d7191.jpg" width="width: 0%" discount="32%"
      name="Cetaphil Gentle Skin Cleanser - 125 ml" price="Rp85.000" oriPrice="Rp.124.900" />
    </div>
  </div>
</template>

<script>
// import CardDiscount from '@/components/CardDiscount.vue';
import CardDiscountLogin from '@/components/CardDiscountLogin.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'CardDiscountRow',
  components: {
    // CardDiscount,
    CardDiscountLogin,
  },
  methods: {
    ...mapActions('user', ['getUserId']),
  },
  mounted() {
    this.getUserId();
  },
  computed: {
    ...mapState('user', ['userId']),
  },
};
</script>

<style lang="scss" scoped>
  .card-product-row .before-login, .card-product-row .after-login{
    display: flex;
    flex-wrap: wrap;
    margin: 20px auto;
    justify-content: center;
    width: 100% !important;
  }
</style>
