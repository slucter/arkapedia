<template>
  <div class="edit-adress">
    <div class="nav-adress">
      <button class="add-adress"><i class="fas fa-plus"></i> <p>Tambah Alamat Baru</p></button>
      <label for="sort" class="sort-label">Urutkan</label>
      <select class="sort-adress">
        <option value="1">Alamat Terbaru</option>
        <option value="2">Nama Alamat</option>
        <option value="3">Nama Penerima</option>
      </select>
      <div class="search-adress">
        <input type="text" placeholder="Cari alamat" class="input-src">
        <div class="icon-src"><i class="fas fa-search-location"></i></div>
      </div>
    </div>
    <div class="container-table">
      <table id="table-adress">
        <tr>
          <th class="th">check</th>
          <th class="th">Penerima</th>
          <th class="th">Alamat Pengiriman</th>
          <th class="th">Daerah Pengiriman</th>
          <th class="th">Pin Point</th>
          <th class="th">edit-delete</th>
        </tr>
        <tr>
          <td>cek</td>
          <td>
            <p class="receiver">Shilfiya Amani</p>
            <div class="td-numb">083812606090</div>
          </td>
          <td>
            <p>Rumah</p>
            <div class="destiny">
              <p>Jl. Pekunden Tengah, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah
                [Tokopedia Note: no. 1165 gerbang biru]</p>
            </div>
          </td>
          <td class="country-adress">
            <p>Banten, Kota Tangerang Selatan, Serpong 15310 Indonesia</p>
          </td>
          <td>
            <i class="fas fa-map-marker-alt"></i>
          </td>
          <td class="edt-del">
            <div class="edt-adress">
              <i class="far fa-edit"></i>
              Ubah
            </div>
            <div class="del-adress">
              <i class="fas fa-trash"></i>
              Hapus
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'editAdress',
};
</script>

<style scoped>
  .edit-adress{
    display: none;
    flex-direction: column;
    width: 965px;
    height: 561px;
    font-family: 'Open Sans', sans-serif;
  }
  .nav-adress{
    display: flex;
    align-items: center;
    height: 130px;
    padding: 0 10px;
  }
  .add-adress{
    display: flex;
    background: #42b549;
    border: 1px solid #42b549;
    color: #ffffff;
    padding: 9px 20px;
    border-radius: 3px;
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;
    height: 40px;
    margin-right: 150px;
  }
  .add-adress p{
    margin-left: 5px;
  }
  .sort-adress{
    height: 40px;
    widows: 150px;
    padding: 0 10px;
    font-family: 'Open Sans', sans-serif;
    font-size: 11.7px;
    margin-right: 50px;
  }
  .sort-label{
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    margin-right: 10px;
  }
  .search-adress{
    display: flex;
    height: 44px;
    width: 330px;
    border: solid 2px rgba(0,0,0,.12);
    border-radius: 5px;
  }
  .input-src{
    padding: 0 50px 0 10px;
    height: 40px;
    width: 280px;
    border: none;
  }
  .icon-src{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px 6px;
    background: #f8f8f8;
    height: 40px;
    width: 60px;
  }
  .container-table{
    display: flex;
    justify-content: center;
    width: 100%;
  }
  #table-adress td{
    height: 100px;
    margin-left: 20px;
    font-family: 'Open Sans', sans-serif;
  }
  .destiny{
    width: 300px;
  }
  .country-adress{
    width: 200px;
  }
  .receiver{
    width: 120px;
  }
  .edt-del{
    display: flex;
    width: 200px;
  }
  .th{
    border-bottom: 1px solid #e0e0e0 ;
  }
</style>
