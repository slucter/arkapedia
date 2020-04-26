<template>
    <div class="container-price">
        <h1 class="ttl-div">Harga</h1>
        <div class="min-order">
            <div class="ctrl-grp">
                <h3>Minimum Pemesanan</h3>
                <p>Atur jumlah minimum yang harus dibeli untuk produk ini.</p>
            </div>
            <input type="text">
        </div>
        <div class="one-price"><h3>Harga Satuan</h3>
        <p>Rp</p> <input type="text">
        </div>
<<<<<<< HEAD
        <div class="grocir-price">
            <div class="ctrl-grp">
                <h3>Harga Grosir</h3>
                <p>Tambahkan harga grosir untuk pembelian produk dalam jumlah tertentu.</p>
            </div>
        </div>
=======
>>>>>>> 90ae0d3edbae5e763f25d1c5c1e42893764b0c8b
    </div>
</template>

<script>
export default {
  name: 'priceProduct',
};
</script>

<style scoped>
    .container-price{
        display: flex;
        flex-direction: column;
    }
    .title{
        width: 940px;
        height: 40px;
        margin: 0 0 30px;
    }
    .ttl-div{
        font-size: 16px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.7);
    }
    .min-order{
        display: flex;
        width: 940px;
        height: 60px;
        margin: 40px 0;
    }
    .min-order input{
        width: 350px;
        height: 40px;
        padding: 10px 16px;
        border: solid 1px rgba(0,0,0,0.12);
        border-radius: 5px;
    }
    .one-price{
        display: flex;
        width: 940px;
        height: 70px;

    }
    .one-price h3{
        width: 200px;
        color: rgba(0, 0, 0, 0.54);
        font-size: 14px;
    }
    .one-price p{
        width: 50px;
        color: rgba(0, 0, 0, 0.54);
        font-size: 13px;
    }
    .one-price input{
        width: 350px;
        height: 40px;
        padding: 10px 16px;
        border-radius: 5px;
        border: solid 1px rgba(0,0,0,0.12);
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
</style>
