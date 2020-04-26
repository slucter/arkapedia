<template>
     <div class="top-navbar">
            <div class="download-app">
                <a href="#"><i class="far fa-clipboard"></i> Download Tokopedia App</a>
            </div>

            <div class="top-navbar-menu">
                <a href="#">Tentang Tokopedia</a>
                <a href="#">Mitra Tokopedia</a>
                <a href="#">Pusat Edukasi Seller</a>
                <a href="#">Promosi</a>
                <a href="#">Tokopedia Care</a>
            </div>
        </div>
</template>

<script>
export default {
  name: 'NavTop',
};
</script>

<style scoped>
.top-navbar{
     width: 100%;
     height: 30px;
     background-color: #f3f4f5;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding-left: 30px;
     padding-right: 30px;
 }

 .top-navbar .download-app a{
     text-decoration: none;
     font-size: 14px;
     color: rgba(49,53,59,0.68);
     margin: 5px;
 }
 .top-navbar .download-app a:hover{
    color: #03ac0e
 }
 .top-navbar .download-app a i{
     margin-right: 10px;
 }
 .top-navbar .top-navbar-menu a{
    text-decoration: none;
    font-size: 14px;
    margin: 5px;
    color: rgba(49,53,59,0.68);
}
.top-navbar .top-navbar-menu a:hover{
    color: #03ac0e
}
</style>
