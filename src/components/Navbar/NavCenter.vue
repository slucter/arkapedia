<template>
    <div class="navbar-w">
        <Logo_ />
        <Category_ @Catclick="$emit('Catclick2')" />
        <Search_ />
        <IconGroup_ @CartClick="$emit('CartClick2')" />
        <UserSection_ />
    </div>
</template>

<script>
import Logo_ from './NavCenterComponents/_Logo.vue';
import Category_ from './NavCenterComponents/_Category.vue';
import Search_ from './NavCenterComponents/_Search.vue';
import IconGroup_ from './NavCenterComponents/_Icon_group.vue';
import UserSection_ from './NavCenterComponents/_User_section.vue';

export default {
  name: 'NavCenter',
  components: {
    Logo_,
    Category_,
    Search_,
    IconGroup_,
    UserSection_,
  },
};
</script>

<style scoped>
.navbar-w{
    display: flex;
    background-color: rgb(255, 255, 255);
    width: 97%;
    height: 56px;
    margin: 0 auto;
}
</style>
