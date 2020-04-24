<template>
    <div class="submenu-scroll-belanja">
                <a href="#">Baku</a>
                <a href="#">Dapur</a>
                <a href="#">Elektronik</a>
                <a href="#">Fashion Anak & Bayi</a>
                <a href="#">Fashion Muslim</a>
                <a href="#">Fasion Pria</a>
                <a href="#">Fasion Wanita</a>
                <a href="#">Film & Music</a>
                <a href="#">Gaming</a>
                <a href="#">Handphone & Tablet</a>
    </div>
</template>

<script>
export default {
  name: 'ScrollMenu',
};
</script>

<style scoped>
.submenu-scroll-belanja{
    width: 15%;
    height: 95%;
    background-color: rgb(255, 255, 255);
    display: flex;
    overflow-y: scroll;
    margin-left: 35px;
    flex-direction: column;
}
.submenu-scroll-belanja a{
    /* background-color: #cacaca; */
    color: #5a5a5a;
    margin: 10px;
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    padding: 5px 0px 5px 5px;
    border-radius: 3px;
}
.submenu-scroll-belanja a:hover{
    background-color: rgba(128, 128, 128, 0.1);
}
</style>
