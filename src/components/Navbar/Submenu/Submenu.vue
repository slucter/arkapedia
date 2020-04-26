<template>
     <div class="submenu-category">
         <Head_ />
         <SubmenuSection_ />
     </div>
</template>

<script>
import Head_ from './SubmenuComponents/_HeadSubmenu.vue';
import SubmenuSection_ from './SubmenuComponents/_SubmenuSection.vue';

export default {
  name: 'Submenu',
  components: {
    Head_,
    SubmenuSection_,
  },
};
</script>

<style scoped>
.subcat-show{
   visibility: visible!important;
   top: 90px!important;
   transition: .3s;
}
.submenu-category{
    transition: .1s;
    width:100%;
    display: flex;
    visibility: hidden;
    background-color: #fff;
    flex-direction: column;
    position: fixed;
    top:180px;
    z-index: 100;
    /* transition: .5s; */
}
.submenu-category-slide{
    top: 110px!important;
    transition: .5s;
}
</style>
