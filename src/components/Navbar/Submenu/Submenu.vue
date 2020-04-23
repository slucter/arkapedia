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
.submenu-category{
    width:100%;
    display: flex;
    background-color: #fff;
    flex-direction: column;
    position: fixed;
    top:110px;
    z-index: 100;
    transition: .5s;
}
.submenu-category-slide{
    top: 110px!important;
    transition: .5s;
}
</style>
