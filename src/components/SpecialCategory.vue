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
          </ul>
        </div>
      </div>
    </div>
    <div class="button-category">
      <button><div class="icon"><i class="fas fa-star"></i></div>Belanja</button>
      <button><div class="icon"><i class="fas fa-star"></i></div>Belanja</button>
      <button><div class="icon"><i class="fas fa-star"></i></div>Belanja</button>
      <button><div class="icon"><i class="fas fa-star"></i></div>Belanja</button>
      <button><div class="icon"><i class="fas fa-star"></i></div>Belanja</button>
      <button><div class="icon"><i class="fas fa-star"></i></div>Belanja</button>
      <button><div class="icon"><i class="fas fa-star"></i></div>Belanja</button>
      <button><div class="icon"><i class="fas fa-star"></i></div>Belanja</button>
      <button><div class="icon"><i class="fas fa-star"></i></div>Belanja</button>
      <button><div class="icon"><i class="fas fa-star"></i></div>Belanja</button>
      <button><div class="icon"><i class="fas fa-star"></i></div>Belanja</button>
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
  }
  .button-category{
    margin-top: 24px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
  }
  .button-category button{
    display: flex;
    flex-direction: row;
    padding: 6px 12px;
    margin-right: 8px;
    background: transparent;
    border-radius: 16px;
    border: 1px solid #eaeaea;
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
  }
  .nav-item{
    height: 40px;
    padding: 0 24px;
  }
  .nav-link{
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 100%;
    font-size: 12px;
  }
</style>
