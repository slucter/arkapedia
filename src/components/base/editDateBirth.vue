<template>
  <div class="container-modal">
    <!-- Modal -->
    <div class="modal fade" id="editDateBirth" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <button type="button" class="close text-success" data-dismiss="modal"
        aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
          <div class="modal-body">
            <h3>Tambah Tanggal Lahir</h3>
            <p>kamu hanya dapat mengubah Tanggal Lahir 1 kali. Pastikan
              tanggal lahir sudah benar</p>
            <div class="select-group">
              <select name="tanggal" class="edit-date" v-model="date"  >
                <option v-for="date in 30" :key="date.id" :value="date" >
                  {{date}}</option>
              </select>
              <select name="bulan" class="edit-month">
                <option value="">January</option>
                <option value="">February</option>
                <option value="">Maret</option>
                <option value="">April</option>
                <option value="">Mei</option>
              </select>
              <select name="tahun" class="edit-date">
                <option value="">1940</option>
                <option value="">1941</option>
                <option value="">1942</option>
                <option value="">1943</option>
                <option value="">1944</option>
              </select>
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
import axios from 'axios';

export default {
  name: 'editDateBirth',
  data() {
    return {
      dataUser: [],
      local: null,
      date: null,
    };
  },
  created() {
    this.local = localStorage.getItem('id');
  },
  methods: {
    getUserById() {
      axios.get(`http://192.168.1.97:5000/api/arkapedia/user/${this.local}`)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          // eslint-disable-next-line no-unused-expressions
          // resolve.res.data;
          this.dataUser = res.data.user;
          console.log(res.data.user);
        })
        // eslint-disable-next-line no-unused-vars
        .catch((err) => {
        });
    },
  },
  mounted() {
    this.getUserById();
  },
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
  .select-group{
    display: flex;
    font-size: 13px;
    margin: 20px;
  }
  .edit-date{
    width: 100px;
    height: 30px;
    background: #ffffff;
    padding: 4px;
    border-radius: 4px;
    border: solid 1px rgba(0,0,0,.12);
  }
  .edit-month{
    width: 152px;
    height: 30px;
    background: #ffffff;
    padding: 4px;
    margin: 0 8px;
    border-radius: 4px;
    border: solid 1px rgba(0,0,0,.12);
  }
  .hero-btn{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 70px;
  }
  .btn-save{
    width: 272px;
    height: 40px;
    background: #03ac0e;
    margin: 0 2px;
    padding: 11px 1;
    border: none;
    border-radius: 5px;
    color: #ffffff;
  }
</style>
