<template>
    <div class="container-edit-payment">
        <div class="dashboard-edit-payment">
            <p class="hi-people">Hai Shilfiya Amani<br>
               Selamat datang di halaman<br>
               <b>Pengaturan pembayaran</b>
            </p>
            <span class="dtl-info">
                Atur pembayaran Anda untuk meningkatkan keamanan dan kemudahan
                berbelanja Anda di Tokopedia
            </span>
            <div class="credit-type-list">
            <div class="credit-type-a">
               <h4 class="grn">Kartu kredit/Debit</h4>
               <p>0/4 Tersimpan</p>
            </div>
            <div class="credit-type-a"><h4> Ekspress</h4></div>
            <div class="credit-type-a"><h4>Debit Instan</h4></div>
            </div>
        </div>
        <div class="add-credit">
            <div class="header-crdt">
                <div class="headter-txt">Kartu kredit/Debit</div>
                <div class="header-stng">Pengaturan Verifikasi</div>
            </div>
        <div class="main-add-crdt">
                <img src="../../assets/img/kartu-kredit-logo.svg" alt="">
                <p>Untuk kemudahan pembayaran kartu kredit / debit, 
                   simpan informasi kartu kredit / debit Anda.</p>
                   <button class="btn-add-crdt">Tambah Kartu Kredit / Debit</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name
}
</script>

<style scoped>
    .container-edit-payment{
        display: none;
        height: 583px;
        width: 965px;
        color: #606060;
        font-family: 'Open Sans', sans-serif;
        padding: 16px;
    }
    .dashboard-edit-payment{
        display: flex;
        flex-direction: column;
        height: 500px;
        width: 415px;
        padding: 32px 0px 24px;
    }
    .add-credit{
        width: 514.05px;
        height: 500px;
        margin-top: 24px;
        border: 1px solid #eee;

    }
    .hi-people{
        width: 410px;
        height: 73px;
        padding: 0px 16px;
    }
    .dtl-info{
        width: 410px;
        height: 44px;
        font-size: 12px;
        margin: 16px 0px 34px;
        padding: 0px 16px;
        box-sizing: border-box;
    }
    .credit-type-list{
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 165px;
        padding: 0 32px 0 16px;
    }
    .credit-type-a{
        display: flex;
        width: 350px;
        height: 44px;
        border-bottom: 1px solid #eee;
        margin-top: 20px;
    }
    .credit-type-a h4{
        font-size: 14px;
        margin-right: 80px;
    }
    .credit-type-a p{
        font-size: 14px;
        color: #42b549;
    }
    .header-crdt{
        display: flex;
        justify-content: space-around;
        width: 100%;
        border-bottom: 1px solid #eee ;
        padding: 16px 0 16px 0;
        font-size: 13px;
    }
    .main-add-crdt{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 512.05px;
        height: 288.05;
        margin-top: 56px;
    }
    .main-add-crdt img{
        width: 200px;
        height: 112.05px;
    }
    .main-add-crdt p{
        text-align: center;
        margin: 24px 0;
    }
    .btn-add-crdt{
        width: 190px;
        height: 32px;
        background: #ffffff;
        padding: 4px 10px;
        border: 1px solid rgba(0,0,0,.12);
        border-radius: 3px;
        cursor: pointer;
    }
    .header-stng{
        color: #42b549;
    }
    .grn{
        color: #42b549;
    }
</style>