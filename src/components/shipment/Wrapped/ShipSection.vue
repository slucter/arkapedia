<template>
<div class="ship-section">
                <div class="address-section">
                    <div class="head-address">
                        <h3>Alamat Pengiriman</h3>
                    </div>

                    <div class="address-ship">
                        <h3>Irhash</h3>
                        <p>087829888376</p>
                        <p class="grey-p">
                            alamat si user nya, disini rt07 rw09, Provinsi, Indonesia, 1337
                        </p>
                    </div>

                    <div class="other-address">
                        <a href="#">Pilih alamat lain</a>
                        <a href="#">Kirim ke semua alamat</a>
                    </div>

                    <div class="items-checkout">
                        <div class="items-detail-checkout">

                            <div class="store-user-details">
                                <div class="name-store">
                                    <a href="#">
                                        <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e779b171.svg" alt="yap!">
                                    </a>
                                    <a href="#">
                                        <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/d83064cc.svg" alt="place">
                                    </a>
                                    <h1>SluctersTools</h1>
                                </div>
                                <p>Jakarta Timur</p>
                            </div>

                            <div class="items-bnaskjdxc">
                                <div class="thumb-itemssdcsd">

                                </div>
                                <div class="items-incheckout">
                                    <a href="#">Book Arsiteck</a>
                                    <p>Rp. 20.000</p>
                                    <p class="grey-p  light-p">1 Barang (300gr)</p>
                                </div>
                            </div>

                            <div class="store-user-details">
                                <div class="name-store">
                                    <a href="#">
                                        <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e779b171.svg" alt="yap!">
                                    </a>
                                    <a href="#">
                                        <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/d83064cc.svg" alt="place">
                                    </a>
                                    <h1>SluctersTools</h1>
                                </div>
                                <p>Jakarta Timur</p>
                            </div>

                            <div class="items-bnaskjdxc">
                                <div class="thumb-itemssdcsd">

                                </div>
                                <div class="items-incheckout">
                                    <a href="#">Book Arsiteck</a>
                                    <p>Rp. 20.000</p>
                                    <p class="grey-p light-p">1 Barang (300gr)</p>
                                </div>
                            </div>

                        </div>
                        <div class="ship-method">
                            <div class="promo-code-section">
                                <span></span>
                                <h2>Gunakan promo dari toko</h2>
                            </div>
                            <h3>Pilih Durasi</h3>
                            <div class="ship-courir">
                                <select name="select" id="kurir">
                                    <option value="1">Select Option</option>
                                    <option value="1">Select 2</option>
                                    <option value="1">Select 3</option>
                                    <option value="1">Select 4</option>
                                </select>
                            </div>
                            <div class="detail-ship-courir">
                                <h3>Kurir Pilihan</h3>
                                <p class="grey-p">JNE (Rp. 18.000)</p>
                                <div class="courir-info">
                                    <h3>Jaminan Tepat Waktu</h3>
                                    <p class="grey-p">
                                        Ongkir kembali jika barang tiba
                                        lebih dari 1 Hari <b>sejak diserahkan ke kurir.</b>
                                        <a href="#">S&K Berlaku</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="subtotal-section">
                        <h3>Subtotal :</h3>
                        <span>
                            <h2>Rp.20.000</h2>
                        </span>
                    </div>

                    <div class="counting-total">
                        <div class="count-title">
                            <h3>Harga (1 Barang)</h3>
                            <h3>Ongkos Kirim</h3>
                            <h3>Asuransi Pengiriman</h3>
                        </div>
                        <div class="count-price">
                            <h3>Rp. 130.000</h3>
                            <h3>Rp. 30.000</h3>
                            <h3>Rp. 0</h3>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
  name: 'ShipSection',
};
</script>

<style scoped>
.ship-section{
    width:60%;
    /* height: 900px; */
    padding-bottom: 30px;
    border-bottom: 5px solid rgba(0, 0, 0, 0.1);
    /* background-color: rosybrown; */
    display: flex;
}
.address-section{
    width: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
}

.head-address{
    width: 100%;
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid rgb(224, 224, 224);
    padding-bottom: 10px;
}

.head-address h3{
    font-size: 1em;
    font-weight: bolder;
}

.address-ship{
    width: 100%;
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid rgb(224, 224, 224);
    flex-direction: column;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
}

.address-ship h3{
    font-weight: bolder;
    margin-top: 5px;
    margin-bottom: 5px;
}
.address-ship p{
    font-size: 15px;
    margin-top: 1px;
    margin-bottom: 1px;
}
.grey-p{
    color: #808080!important;
}

.other-address{
    width: 100%;
    background-color: #fff;
    display: flex;
    border-bottom: 5px solid rgb(224, 224, 224);
    flex-direction: row;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
}

.other-address a{
    text-decoration: none;
    color: #4e4e4e;
    background-color: #fff;
    padding: 8px 20px 8px 20px;
    border: 1px solid #d1d1d1;
    margin-right: 20px;
    border-radius: 10px;
    font-weight: bolder;
}
.other-address a:hover{
    border: 1px solid #d8d8d8;
    color: #d8d8d8;
    transition: .3s;
}

.items-checkout{
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgb(224, 224, 224);
    padding-bottom: 20px;
}

.items-detail-checkout{
    padding-top: 20px;
    width:60%;
    flex-direction: column;
    /* height: 100px; */
    display: flex;
    background-color: rgb(255, 255, 255);
}
.store-user-details{
    width: 100%;
    padding-bottom: 20px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    margin-top: 30px;
}
.store-user-details p{
    font-size: 14px;
    color: rgba(29, 29, 29, 0.7);
}
.name-store{
    display: flex;
    width: 100%;
    align-items: center;
    background-color: rgb(255, 255, 255);
}
.name-store h1{
    font-size: 17px;
    font-weight: bolder;
    /* margin-left: 10px; */
}
.name-store a{
    font-size: 17px;
    font-weight: bolder;
    margin-right: 10px;
}
.name-store a img{
    width: 15px;
    height: 15px;
}
.items-bnaskjdxc{
    width: 100%;
    height: 80px;
    background-color: rgb(151, 87, 42);
    display: flex;
}
.thumb-itemssdcsd{
    width: 20%;
    height: 100%;
    display: flex;
    background-color: silver;
}
.items-incheckout{
    width: 80%;
    height: 100%;
    display: flex;
    background-color: rgb(255, 255, 255);
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 10px;
}
.light-p{
    font-weight: 200!important;
}
.items-incheckout a{
    text-decoration: none;
    font-weight: bolder;
    color: rgba(31, 31, 31, 0.9);
}
.items-incheckout p{
    color: rgb(250, 89, 29);
    font-weight: bold;
}

.subtotal-section{
    width: 100%;
    padding-top: 10px;
    justify-content: space-between;
    background-color: #fff;
    display: flex;
}
.subtotal-section h3{
    font-size: 18px;
    color: #3a3a3a;
    font-weight: bolder;
}
.subtotal-section span h2{
    font-size: 19px;
    color: rgb(250, 89, 29);
    font-weight: bolder;
}

.counting-total{
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    padding-top: 20px;
}
.count-title{
    width: 50%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}
.count-title h3{
    font-size: 17px;
    font-weight: bolder;
    color: rgba(0, 0, 0, 0.7);
}
.count-price{
    width: 50%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
}
.count-price h3{
    font-size: 17px;
    font-weight: bolder;
    color: rgba(0, 0, 0, 0.7);
}

.ship-method{
    width:40%;
    /* height: 900px; */
    display: flex;
    background-color: rgba(253, 253, 253, 1);
    padding-top: 20px;
    flex-direction: column;
}
.ship-method h3{
    font-weight: bolder;
    font-size: 17px;
    margin-top: 15px;
}
.promo-code-section{
    width: 100%;
    height: 60px;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    box-shadow: 1px 2px 10px 1px rgba(29, 29, 29, 0.2);
    display: flex;
    align-items: center;
    padding-left: 15px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
}
.promo-code-section:active{
    box-shadow: 1px 2px 3px 1px rgba(29, 29, 29, 0.2);
}
.promo-code-section span{
    width: 110px;
    height:100px;
    background-color: rgba(22, 185, 1, 0.15);
    position: absolute;
    top:-40px;
    right:-45px;
    border-radius: 50%;
}
.promo-code-section h2{
    font-size: 14px;
    font-weight: bolder;
    color: #03ac0e;
}
.ship-courir{
    width: 100%;
    height: 50px;
    background-color: rgb(3, 172, 14);
    border-radius: 10px;
}
.ship-courir select{
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    background-color: rgb(3, 172, 14);
    border-radius: 10px;
    color: #fff;
    font-size: 14px;
    font-weight: bolder;
    padding-left: 20px;
}
.ship-courir select option{
    background-color: #fff;
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
    font-weight: bolder;
    border: none;
    outline: none;
    border-radius: 10px;
}
.detail-ship-courir{
    margin-top: 10px;
    width: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
}
.detail-ship-courir p{
    font-size: 13px;
}

.courir-info{
    margin-top: 10px;
    width:100%;
    height: 110px;
    background-color: rgb(235, 246, 246);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-image: url('https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/87f7e6cc.svg');
    background-repeat: no-repeat;
    background-position-x: -5px;
    background-position-y: -3px;
}

.courir-info h3{
    font-weight: bolder;
    font-size: 15px;
}
.courir-info h3 p{
    font-size: 13px;
}
.courir-info h3 p b{
    font-weight: bolder;
}

</style>
