<template>
    <div class="container-ad">
        <h3>Bagikan barang kesukaanmu biar dapet komisi</h3>
        <p>Pilih dulu yuk barangnya</p>
        <img class="promo-ad" src="../../assets/img/pilih-yuk.png" alt="">
        <div class="download-aps">
            <img src="../../assets/img/google-play.png" alt="">
            <img src="../../assets/img/app-store.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "shareProduct"
}
</script>

<style scoped>
    .container-ad{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 395.06;
        width: 905.97px;
        color: rgba(0,0,0,.54);
    }
    .container-ad img{
        height: 189.56px;
        width: 400px;
    }
    .promo-ad{
        box-shadow: 1px 1px 16px 1px rgba(0,0,0,0.07);

    }
    .download-aps{
        display: flex;
        padding: 6px 0px;
        margin-top: 10px;
    }
    .download-aps img{
        height: 40.5px;
        width: 135px;
        padding: 5px;
    }
</style>