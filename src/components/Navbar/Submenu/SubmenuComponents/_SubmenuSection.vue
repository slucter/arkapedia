<template>
      <div class="submenu-belanja-section">
          <ScrollMenu_ />
          <SubmenuRight_ />
      </div>
</template>

<script>
import ScrollMenu_ from './_ScrollMenu.vue';
import SubmenuRight_ from './_SubmenuRight.vue';

export default {
  name: 'BelanjaSection',
  components: {
    ScrollMenu_,
    SubmenuRight_,
  },
};
</script>

<style scoped>
.submenu-belanja-section{
    width: 100%;
    height: 453px;
    background-color: #fff;
    display: flex;
}
</style>
