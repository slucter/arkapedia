<template>
    <div class="profile-setting-pages">
                <div class="img-profile">
                    <div class="well">
                        <img src="../../assets/img/default_toped-26.jpg" alt="">
                        <input type="file" class="pick-files">
                        <div class="warn-filter-image">
                            <p>Besar file: maksimum 10.000.000 bytes (10 Megabytes)</p><br>
                            <p>Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</p>
                        </div>
                    </div>
                    <button class="btn-chg"> <i class="fas fa-key"></i> <p>Ubah Kata Sandi</p></button>
                    <button class="btn-chg"> <i class="fas fa-lock"></i> <p> Tokopedia</p></button>
                </div>
                <div class="form-profile">
                    <section class="span1"><h3><b>Ubah biodata diri</b></h3></section>
                    <section class="span2">
                        <div  class="span3">Nama</div>
                        <div class="span4">Shilfiya Amani</div>
                        <div class="span5" data-toggle="modal" data-target="#editName">Ubah</div>
                        <editName/>
                    </section>
                    <section class="span2">
                        <div class="span3">Tanggal Lahir</div>
                        <div class="span5" data-toggle="modal" data-target="#editDateBirth">Tambah Tanggal Lahir</div>
                        <editDateBirth/>
                    </section>
                    <section class="span2">
                        <div class="span3">jenis Kelamin</div>
                        <div class="span4">wanita</div>
                    </section>
                    <section class="span1"><h3><b>Ubah kontak</b></h3></section>
                    <section class="span2">
                        <div class="span3">Email</div>
                        <div class="span5" data-toggle="modal" data-target="#editEmail">Tambahkan Email</div>
                        <editEmail/>
                    </section>
                    <section class="span2">
                        <div class="span3">Nomor Hp</div>
                        <div class="span4">083812909066</div>
                        <div class="verified">Terverikasi <i class="fas fa-check"></i></div>
                        <div class="span5">Ubah</div>
                    </section>
                </div>
            </div>
</template>

<script>
import editName from "../base/editName"
import editDateBirth from "../base/editDateBirth"
import editEmail from "../base/editEmail"
export default {
    name: "settingPage",
    components: {
        editName,
        editDateBirth,
        editEmail
    }
}
</script>
<style scoped>
    .profile-setting-pages{
        display: flex;
        height:  563.77px ;
        width: 965px;
        padding: 16px;
    }
    .well{
        width: 297.77px;
        height: 426.77px;
        background: #f7f7f7;
        margin: 20px 0 20px 0;
        padding: 19px;
        color: #606060;
        border: 1px solid rgba(0,0,0,.15);
        border-radius: 4px;
    }
    .img-profile{
        display: flex;
        flex-direction: column;
    }
    .well img{
        height: 257.77px;
        width: 257.77px;
        margin-bottom: 15px;
    }
    .pick-files {
        color: transparent;
        width: 257px;
        height: 38px;
    }
    .pick-files::-webkit-file-upload-button {
        visibility: hidden;
    }
    .pick-files::before {
        content: 'Pilih foto';
        color: black;
        display: inline-block;
        background: -webkit-linear-gradient(top, #ffffff, #ffffff);
        border: 1px solid rgba(0,0,0,.15);
        border-radius: 3px;
        padding: 8px 97px;
        outline: none;
        white-space: nowrap;
        -webkit-user-select: none;
        cursor: pointer;
        font-weight: 700;
        font-size: 10pt;
    }
    .pick-files:hover::before {
        background: #f7f7f7;
    }
    .pick-files:active {
         outline: 0;
    }
    .pick-files:active::before {
        background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9); 
    }
   .warn-filter-image{
        width: 257.77px;
        height: 69px;
        color: #606060;
        margin: 0px 0 0;
        font-size: 11px;
        margin-top: -25px;
    }
    .btn-chg{
        display: flex;
        justify-content: center;
        border: 1px solid rgba(0,0,0,.12);
        height: 30px;
        padding: 4px 10px;
        border-radius: 4px;
        margin-top: 5px;
        background: #ffffff;
        font-family: 'Open Sans', sans-serif;
    }
    .btn-chg p {
        margin-left: 10px;
    }
    .form-profile{
        display: flex;
        flex-direction: column;
        height: 330px;
        width: 615.38px;
        color: #606060;
        margin: 20px 0 20px 19.8438px;
    }
    .verified{
        margin-right: 10px;
        background: #d4efd5;
        padding: 2px 10px;
        border-radius: 10px;
        color: #42b549;
        font-size: 11px;
        font-weight: 600;
    }
    .span5{
        cursor: pointer;
        color: #42b549;
        font-size: 11px;
    }
    .span4{
        margin-right: 50px;
        font-size: 13px;
    }
    .span3{
        width: 144.02px;
        font-size: 13px;
    }
    .span2{
        display: flex;
        margin-bottom: 20px;
    }
    .span1{
        margin-bottom: 20px;
    }
    .span1 h3{
        font-size: 14px;

    }
</style>