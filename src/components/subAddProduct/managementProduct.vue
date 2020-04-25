<template>
    <div class="container-manage">
        <h1 class="ttl-div">Pengolaan Produk</h1>
        <div class="stts">
            <div class="ctrl-grp">
                <h3>Status Produk</h3>
                <p>Jika status aktif, produkmu dapat dicari oleh calon pembeli.</p>
            </div>
            <slider/>
        </div>
        <div class="stok"><h3>Stok Produk</h3>
        <input type="text">
        </div>
        <div class="sku">
            <div class="ctrl-grp">
                <h3>SKU (Stock Keeping Unit)</h3>
                <p>Gunakan SKU untuk menambahkan kode unik pada produk ini.</p>
            </div>
            <input type="text">
        </div>
    </div>
</template>

<script>
import slider from '../templates/slider.vue';

export default {
  name: 'managementProduct',
  components: {
    slider,
  },
};
</script>

<style scoped>
    .container-manage{
        display: flex;
        width: 100%;
        flex-direction: column;
    }
    .ttl-div{
        font-size: 16px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.7);
    }
    .ctrl-grp{
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 86px;
        margin: 0 10px 0 0;
     }
    .ctrl-grp h3{
        font-size: 16px;
        color: rgba(0, 0, 0, 0.54);
    }
    .ctrl-grp p{
        font-size: 10px;
        color: rgba(0, 0, 0, 0.54);
     }
     .stts{
        display: flex;
        width: 940px;
        height: 60px;
        margin: 40px 0;
     }
     .stok{
         display: flex;
         width: 940px;
         height: 40px;
     }
     .stok h3{
        width: 200px;
        color: rgba(0, 0, 0, 0.54);
        font-size: 14px;
     }
     .stok p{
        width: 50px;
        color: rgba(0, 0, 0, 0.54);
        font-size: 13px;
     }
     .stok input{
         width: 400px;
         height: 40px;
         padding: 10px 16px;
         border: 1px solid rgba(0, 0, 0, 0.12);
         border-radius: 5px;
         margin-left: 10px;
     }
     .sku input{
         width: 400px;
         height: 40px;
         padding: 10px 16px;
         border: 1px solid rgba(0, 0, 0, 0.12);
         border-radius: 5px;
     }
     .sku{
         display: flex;
         width: 940px;
         height: 60px;
         margin: 40px 0;
     }
</style>
