<template>
  <div class="container-modal">
  <!-- Modal -->
    <div class="modal fade" id="editPwd" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <button type="button" class="close text-success" data-dismiss="modal"
          aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal-body">
            <h3 class="mdl-title">Ubah kata Sandi</h3>
            <div class="form-group">
              <label for="password" class="lbl-nm">Kata Sandi Lama</label>
                <input type="password" class="form-control" id="name" aria-describedby="emailHelp">
                <span class="warn-pwd">
                   Masukkan kata sandi Tokopedia Anda,bukan kata sandi dari akun aplikasi
                   lain (Google / Facebook).</span>
            </div>
            <h6>Lupa kata sandi?</h6>
            <div class="form-group">
              <label for="password" class="lbl-nm">Masukan kata sandi baru</label>
                <input type="password" class="form-control" id="name" aria-describedby="emailHelp">
                <span class="warn-pwd">Minimum 6 karakter</span>
            </div>
            <div class="form-group">
              <label for="password" class="lbl-nm">Ulangi Kata Sandi Baru</label>
                <input type="password" class="form-control" id="name" aria-describedby="emailHelp">
            </div>
          </div>
          <div class="hero-btn">
            <button type="button" class="btn-close" data-dismiss="modal">batal</button>
            <button type="button" class="btn-save">Simpan</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editEmail',
};
</script>

<style scoped>
  .modal-content{
      display: flex;
      justify-content: center;
      align-items: center;
}
  .close{
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  .modal-body{
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 340px;
  }
  .mdl-title{
    font-size: 18px;
    color: rgba(0, 0, 0, 0.7);
    height: 24px;
    width: 340px;
    margin: 0 0 10px;
    text-align: center;
  }
  .modal-body p{
    font-size: 13px;
    color: rgba(0, 0, 0, 0.54);
    margin: 0 0 10px;
    height: 38px;
    width: 340px;
    text-align: center;
  }
  .lbl-nm{
    font-size: 12px;
    color: rgba(0, 0, 0, 0.54);
  }
  .hero-btn{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 70px;
  }
  .btn-save{
    width: 150px;
    height: 44px;
    background: #42b549;
    margin: 0 2px;
    padding: 11px 0;
    border: 1px solid rgba(0,0,0,.12);
    border-radius: 3px;
    color: #ffffff;
  }
  .btn-close{
    width: 150px;
    height: 44px;
    background: #ffffff;
    margin: 0 2px;
    padding: 11px 0;
    border: 1px solid rgba(0,0,0,.12);
    border-radius: 3px;
    color: rgba(0, 0, 0, 0.54);
  }
  .warn-pwd{
      font-size: 12px;
      color: rgba(0, 0, 0, 0.38);
  }
</style>
