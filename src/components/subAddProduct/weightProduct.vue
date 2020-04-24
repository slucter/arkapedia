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
            <input type="text">
        </div>
        <div class="assurance">
            <div class="ctrl-grp">
                <h3>Asuransi Pengiriman</h3>
                <p>Aktifkan jaminan kerugian, kerusakan & kehilangan atas pengiriman produk ini</p>
            </div>
        </div>
        <div class="preorder"><h3>Preorder</h3>
            <div class="toggle"></div>
            <p>Aktifkan Preorder ini jika membutuhkan waktu proses lebih lama. Info Lengkap</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'weightProduct',
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
</style>
