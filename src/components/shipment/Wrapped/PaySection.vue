<template>
    <div class="pay-section">
                <div class="wrap-ringkasan">
                    <div class="head-box">
                        <h3>Ringkasan Belanja</h3>
                    </div>
                    <div class="total-price">
                        <h3>Total Harga ( 1 Produk )</h3>
                        <h2>Rp. 200.000</h2>
                    </div>
                    <div class="tagihan-price">
                        <h3>Total Tagihan :</h3>
                        <h2>-</h2>
                    </div>
                    <div class="button-pay">
                        <a href="#">Pilih Pembayaran</a>
                    </div>

                    <div class="voucher-button">
                        <a href="#">Gunakan Promo Tokopedia</a>
                        <p>2 Kupon</p>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
  name: 'PaySection',
};
</script>

<style scoped>
.pay-section{
    width: 40%;
    height: 600px;
    /* background-color: rgba(22, 185, 1, 0.1); */
    display: flex;
    justify-content: center
}

.wrap-ringkasan{
    width: 80%;
    height: 400px;
    background-color: #fff;
    display: flex;
    box-shadow: 1px 2px 10px 1px rgba(29, 29, 29, 0.2);
    border-radius: 15px;
    padding: 20px 30px 10px 30px;
    flex-direction: column;
}

.head-box{
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: 40px;
}
.head-box h3{
    font-weight: bolder;
    font-size: 17px;
}

.total-price{
    display: flex;
    width: 100%;
    background: #fff;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: 60px;
    align-items: center;
}
.total-price h3{
    font-size: 17px;
}
.total-price h2{
    font-size: 17px;
    font-weight: bolder;
}

.tagihan-price{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.tagihan-price h3{
    font-weight: bolder;
}

.button-pay{
    width: 100%;
    height: 60px;
    display: flex;
    margin-top: 30px;
    /* background-color: aqua; */
    align-items: center;
}
.button-pay a{
    width: 100%;
    height: 80%;
    background-color: rgb(250, 89, 29);
    color: #fff;
    text-align: center;
    line-height: 50px;
    text-decoration: none;
    font-weight: bolder;
    border-radius: 10px;
}

.voucher-button{
    margin-top: 30px;
    width: 100%;
    height: 50px;
    background-color: #fff;
    box-shadow: 1px 2px 10px 1px rgba(29, 29, 29, 0.2);
    border-radius: 10px;
    background-image: url('https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/1c511130.png');
    background-repeat: no-repeat;
    background-size: 30px;
    background-position-x: 20px;
    background-position-y: 11px;
    display: flex;
    align-items: center;
    padding-left: 70px;
}
.voucher-button a{
    text-decoration: none;
    font-size: 14px;
    font-weight: bolder;
    color: #03ac0e;
}
.voucher-button p{
    font-size: 12px;
    font-weight: bolder;
    padding: 3px 5px 3px 5px;
    color: #fff;
    background-color: rgb(255, 139, 0);
    border-radius: 5px;
    margin-left: 20px;
}
</style>
