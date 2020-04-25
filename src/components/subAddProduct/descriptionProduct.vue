<template>
 <div class="container-add">
      <h1 class="ttl-div">Deskripsi Produk</h1>
        <div class="category-product">
          <div class="kondisi"><h3>Kondisi</h3>
          <label class="radio">Baru
            <input type="radio" checked="checked" name="radio">
               <span class="checkmark"></span>
            </label>
            <label class="radio">Bekas
              <input type="radio" name="radio">
                <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="product-name">
          <div class="ctrl-grp">
            <h3>keterangan produk</h3>
            <p>Cantumkan deskripsi lengkap sesuai produk, seperti keunggulan, spesifikasi, material,
              ukuran, masa berlaku,dan lainnya. Panjang deskripsi antara 450-2000 karakter.</p>
          </div>
          <textarea name="prodak" class="textarea"
            v-bind:value="searchText"
            v-on:input="searchText = $event.target.value">
          </textarea>
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
     .radio input{
         position: absolute;
         opacity: 0;
         cursor: pointer;
     }
     .checkmark {
         position: absolute;
          top: 0;
          left: 0;
          height: 25px;
          width: 25px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 50%;
      }
      .radio input:checked ~ .checkmark {
          background-color: #ffffff;
          border: 3px solid #42b549;
          border-radius: 50%
      }
      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }
    .radio input:checked ~ .checkmark:after {
        display: block;
      }

    .radio .checkmark:after {
        top: 2px;
        left: 2px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #42b549;
      }
      .radio {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        margin-left: 50px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.54);
}
</style>
