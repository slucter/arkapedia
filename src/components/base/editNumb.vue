<template>
  <div class="container-modal">
    <!-- Modal -->
    <div class="modal fade" id="editNumb" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <button type="button" class="close text-success" data-dismiss="modal"
        aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="modal-body">
          <h3>Ubah Nomor Hp</h3>
          <p>Pastikan no hp sudah benar</p>
          <div class="form-group">
            <label for="name" class="lbl-nm">No Hp</label>
            <input type="text" class="form-control" id="name" aria-describedby="emailHelp">
            <p>Nomor hp dapat dilihat oleh pengguna lainnya</p>
          </div>
        </div>
        <div class="hero-btn">
          <button type="button" class="btn-save">Simpan</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editName',
};
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
    background: rgba(0, 0, 0, 0.12);
    margin: 0 2px;
    padding: 11px 0;
    border: none;
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.26);
  }
</style>
