<template>
    <div class="nav-menu-icon">
        <div class="icon-group">
            <a href="#">
            <i class="fas fa-shopping-cart"></i>
            </a>
            <a href="#">
            <i class="fas fa-bell"></i>
            </a>
            <a href="#">
            <i class="fas fa-envelope"></i>
             </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Icon_group',
};
</script>

<style scoped>
.nav-menu-icon{
    display: flex;
    flex: 1;
    background-color: rgb(184, 32, 32);
    height: 100%;
}

.icon-group{
    width: 100%;
    height: 100%;
    background-color: #fff;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
.icon-group a{
    font-size: 19px;
    color: #5a5a5a;
    margin: 15px;
}
</style>
