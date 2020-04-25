<template>
    <form action="" class="nav-search">
        <input type="text" placeholder="Cari sesuatu">
        <button type="submit">
             <i class="fas fa-search"></i>
        </button>
    </form>
</template>

<script>
export default {
  name: 'Search_',
};
</script>

<style scoped>
.nav-search{
    display: flex;
    flex: 4;
    /* background-color: rgb(255, 255, 255); */
    height: 100%;
    align-items: center;
}
.nav-search input{
    width: 93%;
    height: 70%;
    outline: none;
    border: 1px solid #e4e4e4;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #fff;
    padding-left: 20px;
    padding-right: 20px;
}
.nav-search button{
    width: 5%;
    height: 70%;
    outline: none;
    border: 1px #cacaca;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #dddddd;
}
.nav-search button i{
    color: #5f5f5f;
}
</style>
