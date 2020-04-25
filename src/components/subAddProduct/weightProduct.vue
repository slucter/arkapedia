<template>
    <div class="container-weight">
        <h1 class="ttl-div">Pengolaan Produk</h1>
        <div class="weight">
            <div class="ctrl-grp">
                <h3>Berat</h3>
                <p>Produk ringan dengan ukuran yang besar hitung dengan Volume Weight.</p>
            </div>
            <select name="gram">
                <option value="1">Gram (g)</option>
                <option value="2">Kilo Gram (kg)</option>
            </select>
            <input type="text" @input="$emit('weight', $event.target.value)">
        </div>
        <div class="assurance">
            <div class="ctrl-grp">
                <h3>Asuransi Pengiriman</h3>
                <p>Aktifkan jaminan kerugian, kerusakan & kehilangan atas pengiriman produk ini</p>
            </div>
            <label class="radio">Opsional
            <input type="radio" checked="checked" name="radio">
               <span class="checkmark"></span>
            </label>
            <label class="radio">Ya
              <input type="radio" name="radio">
                <span class="checkmark"></span>
            </label>
        </div>
        <div class="preorder"><h3>Preorder</h3>
            <slider/>
            <p>Aktifkan Preorder ini jika membutuhkan waktu proses lebih lama. Info Lengkap</p>
        </div>
    </div>
</template>

<script>
import slider from '../templates/slider.vue';

export default {
  name: 'weightProduct',
  components: {
    slider,
  },
};
</script>

<style scoped>
    .container-weight{
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
     .weight{
         display: flex;
         width: 940px;
         height: 69px;
         margin: 40px 0px;
     }
     .weight select{
         width: 140px;
         height: 40px;
         border: 1px solid rgba(0, 0, 0, 0.12);
         border-radius: 5px;
         color: rgba(0, 0, 0, 0.54);
         margin-right: 20px;
     }
     .weight input{
         width: 250px;
         height: 40px;
         border: 1px solid rgba(0, 0, 0, 0.12);
         border-radius: 5px;
     }
     .assurance{
         display: flex;
         width: 940px;
         height: 75px;
     }
     .preorder h3{
        width: 200px;
        color: rgba(0, 0, 0, 0.54);
        font-size: 14px;
     }
     .preorder p{
         /* width: 50px; */
        color: rgba(0, 0, 0, 0.54);
        font-size: 13px;
     }
     .preorder{
         display: flex;
         width: 940px;
         height: 25px;
         margin: 40px 0 0;
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
