<template>
  <div class="card">
    <div class="card-wrapper">
      <div class="card-body">
        <h2>Kategori Pilihan</h2>
        <div class="card-category">
          <div class="category"></div>
          <div class="category"></div>
          <div class="category"></div>
          <div class="category"></div>
        </div>
      </div>
      <div class="card-body">
        <h2>Top Up & Tagihan</h2>
        <div class="card-topup">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <div class="nav-link">Pulsa</div>
            </li>
            <li class="nav-item">
              <div class="nav-link">Paket Data</div>
            </li>
            <li class="nav-item">
              <div class="nav-link">Litrik PLN</div>
            </li>
            <li class="nav-item">
              <div class="nav-link">Flight</div>
            </li>
            <li class="nav-item">
              <div class="nav-link"><i class="fas fa-ellipsis-v"></i></div>
            </li>
          </ul>
          <form>
            <div class="form-row">
              <div class="form-group col-md-5">
                <label for="inputEmail4">Nomor Telepon</label>
                <input type="email" class="form-control" id="inputEmail4"
                placeholder="0812xxxxxxxx">
              </div>
              <div class="form-group col-md-5">
                <label for="inputPassword4">Nominal</label>
                <select class="form-control form-control-sm">
                  <option>Pilih</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <button class="btn btn-sm btn-primary" disabled>Beli</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="button-category">
      <button><div class="icon"><i class="fas fa-star"></i></div>Belanja</button>
      <button><div class="icon"><i class="fas fa-star"></i></div>Semua Promo</button>
      <button><div class="icon"><i class="fas fa-star"></i></div>Redam COVID-19</button>
      <button><div class="icon"><i class="fas fa-star"></i></div>Kesehatan</button>
      <button><div class="icon"><i class="fas fa-star"></i></div>Dapur</button>
      <button><div class="icon"><i class="fas fa-star"></i></div>Emas</button>
      <button><div class="icon"><i class="fas fa-star"></i></div>Pulsa</button>
      <button><div class="icon"><i class="fas fa-star"></i></div>Handphone & Tablet</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
};
</script>

<style scoped lang="scss">
  .card{
    margin-top: 200px;
    width: 100%;
    padding: 16px 24px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }
  .card-wrapper{
    display: flex;
    flex-direction: row;
  }
  .card-img-top{
    width: 64px;
    height: 64px;
    background-color: #eaeaea;;
    margin-right: 8px;
  }
  .card-body{
    width: 50%;
    padding: 0;
  }
  .card-body h2{
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  .card-category{
    display: flex;
    flex-direction: row;
  }
  .category{
    width: 120px;
    height: 120px;
    background: fuchsia;
    margin: 2px 8px;
    border-radius: 6px;
  }
  .button-category{
    margin-top: 24px;
    overflow: hidden;
    height: 40px;
    display: inline-block;
  }
  .button-category button{
    display: inline-flex;
    flex-direction: row;
    padding: 6px 12px;
    margin-right: 8px;
    background: transparent;
    border-radius: 16px;
    border: 1px solid #eaeaea;
    height: 38px;
  }
  .icon{
    margin-right: 8px;
  }
  .card-topup{
    border: 1px solid #eaeaea;
    height: 137px;
  }
  .nav-tabs{
    border: none;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    flex-wrap: nowrap;
    // justify-content: ;
  }
  .nav-item{
    height: 40px;
    padding: 0 24px;
  }
  .nav-link{
    display: flex;
    align-items: center;
    padding: 0;
    height: 100%;
    font-size: 12px;
  }
  .col-md-5, .col-md-2{
    margin: 0;
  }
  .col-md-2{
    display: flex;
    flex-direction: column-reverse;
  }
  form{
    padding: 6px;
  }
  .form-group{
    padding: 6px;
  }
  .form-group label{
    font-size: 12px;
    font-weight: bold;
  }
  .form-group input, .form-group button, .form-control option{
    font-size: 12px;
  }
  .form-group button{
    height: 32px;
  }
</style>
