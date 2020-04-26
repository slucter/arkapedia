<template>
    <div class="container-profile">
        <Navbar_/>
        <div class="content">
            <div class="side-left">
                <cardProfile/>
            </div>
            <div class="side-right">
                <shareProduct/>
            </div>
        </div>
        <div class="footer-profile"></div>
    </div>
</template>

<script>
// import axios from 'axios';
import Navbar_ from '../components/Navbar/Navbar.vue';
<<<<<<< HEAD
import cardProfile from '../components/base/cardProfile.vue';
import shareProduct from '../components/base/shareProduct.vue';
// import Submenu_ from '../components/Navbar/Submenu/Submenu.vue';
// import CartSubmenu_ from '../components/Navbar/Submenu/CartSubmenu.vue';
=======
import Submenu_ from '../components/Navbar/Submenu/Submenu.vue';
import CartSubmenu_ from '../components/Navbar/Submenu/CartSubmenu.vue';
import cardProfile from '../components/base/cardProfile.vue';
import shareProduct from '../components/base/shareProduct.vue';
>>>>>>> 2254b575ed42ddfc7d9965189c75543c9ff67ec2

export default {
  name: 'profile',
  data() {
    return {
      url: process.env.VUE_APP_BASE_URL,
      user: {},
    };
  },
  components: {
    cardProfile,
    shareProduct,
    Navbar_,
    // Submenu_,
    // CartSubmenu_,
  },
  created() {
  },
};
</script>

<style scoped>
  .container-profile{
      display: flex;
      flex-direction: column;
      font-family: 'Open Sans', sans-serif;
  }

  .content{
      display: flex;
      height: 546.06px;
      margin: 48px auto 80px;
      margin-top: 120px;
  }
  .footer-profile{
      height: 678px;
      border-top: 1px solid #E5E7E9 ;
      box-shadow: 0 1px 6px 0 rgba(49,53,59,0.12);
  }
  .side-right{
      padding: 40px 0px;
  }
</style>
