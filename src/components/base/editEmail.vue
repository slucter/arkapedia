<template>
    <div class="container-modal">
<!-- Modal -->
<div class="modal fade" id="editEmail" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
        <button type="button" class="close text-success" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      <div class="modal-body">
          <h3>Tambah Email</h3>
          <p>kamu hanya dapat mengubah nama 1 kali lagi. Pastikan nama sudah benar</p>
          <div class="form-group">
             <label for="name" class="lbl-nm">Email</label>
                <input type="email" class="form-control" id="name" aria-describedby="emailHelp">
                <p>Kami akan mengirimkan kode verifikasi melalui email</p>
            </div>
      </div>
      <div class="hero-btn">
        <button type="button" class="btn-save">Simpan</button>
        <button type="button" class="btn-close" data-dismiss="modal">batal</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default {
    name : "editEmail"
}
</script>

<style scoped>
    .close{
        display: flex;
        justify-content: flex-end;
    }
    .modal-body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .modal-body h3{
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
</style>