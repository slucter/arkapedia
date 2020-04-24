<template>
 <div class="container-add">
      <h1 class="ttl-div">Deskripsi Produk</h1>
        <div class="category-product">
          <div class="kondisi"><h3>Kondisi</h3>
          <input type="radio"> baru
          <input type="radio"> bekas
          </div>
        </div>
        <div class="product-name">
          <div class="ctrl-grp">
            <h3>keterangan produk</h3>
            <p>Cantumkan deskripsi lengkap sesuai produk, seperti keunggulan, spesifikasi, material,
              ukuran, masa berlaku,dan lainnya. Panjang deskripsi antara 450-2000 karakter.</p>
          </div>
          <textarea name="prodak" class="textarea"></textarea>
        </div>
        <div class="product-nam">
          <div class="ctrl-grp">
            <h3>Video Produk</h3>
            <p>URL video yang didukung saat ini adalah URL video dari Youtube. Info Lengkap</p>
          </div>
          <button class="btn-vid"> + Tambah Video</button>
        </div>
 </div>
</template>

<script>
export default {
  name: 'descriptionProduct',
};
</script>

<style scoped>
    .container-add{
        display: flex;
        width: 100%;
        flex-direction: column;
    }
    .ttl-div{
        font-size: 16px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.7);
    }
    .kondisi{
        display: flex;
        width: 940px;
        height: 25px;
        padding: 40px 0;
    }
    .kondisi h3{
        width: 180px;
        font-size: 16px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.54);
    }
    .kondisi input{
        width: 120px;
        margin: 20px 20px;
        color: rgba(0, 0, 0, 0.54);
    }
    .product-name{
        display: flex;
        width: 940px;
        height: 330px;
        margin: 30px 0;
    }
    .product-nam{
        display: flex;
        width: 940px;
        height: 70px;
        margin: 10px 0;
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
     .textarea{
         width: 720px;
         height: 300px;
         color: rgba(0, 0, 0, 0.54);
         border: 1px solid rgba(0, 0, 0, 0.12);
         border-radius: 8px;
         overflow-y: scroll;
     }
     .btn-vid{
         width: 180.22px;
         height: 40px;
         color: rgba(0, 0, 0, 0.54);
         background: #ffffff;
         padding: 0 16px;
         border-radius: 5px;
         border: 1px solid rgba(0, 0, 0, 0.12);
     }
</style>
