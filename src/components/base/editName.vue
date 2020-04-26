<template>
  <div class="container-modal">
    <!-- Modal -->
    <div class="modal fade" id="editName" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <button type="button" class="close text-success" data-dismiss="modal"
        aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="modal-body">
          <h3>Ubah Nama</h3>
          <p>kamu hanya dapat mengubah nama 1 kali lagi. Pastikan nama sudah benar</p>
          <div class="form-group">
            <label for="name" class="lbl-nm">Nama</label>
            <input type="text" class="form-control" id="name"
            aria-describedby="emailHelp" v-model="name">
            <p>Nama dapat dilihat oleh pengguna lainnya</p>
          </div>
        </div>
        <div class="hero-btn">
          <!-- <button type="button" class="btn-save" @click="getUserById" >Simpan</button> -->
          <button type="button" class="btn-active" @click="updateUser" >Simpan</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'editName',
  data() {
    return {
      name: null,
      local: null,
    };
  },
  created() {
    this.local = localStorage.getItem('id');
    this.token = localStorage.getItem('token');
  },
  computed: {
    cardUser() {
      return this.$store.state.forUser;
    },
  },
  methods: {
    updateUser() {
      axios.put(`http://192.168.1.97:5000/api/arkapedia/user/${this.local}`,
        { name: this.name }, { headers: this.token })
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          // eslint-disable-next-line no-unused-expressions
          // resolve.res.data;
          // this.dataUser = res.data.user;
          this.$router.replace(`http://localhost:8080/editprofile/${this.route.params.id}`);
          console.log(res);
        })
        // eslint-disable-next-line no-unused-vars
        .catch((err) => {
        });
    },
  },
  mounted() {
    axios.get(`http://192.168.1.97:5000/api/arkapedia/user/${this.local}`)
      .then((res) => {
        // eslint-disable-next-line no-unused-expressions
        // resolve.res.data;
        this.name = res.data.user.name;
        // console.log(res);
      })
    // eslint-disable-next-line no-unused-vars
      .catch((err) => {
      });
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
  .btn-active{
    width: 150px;
    height: 44px;
    background: #42b549;
    margin: 0 2px;
    padding: 11px 0;
    border: none;
    border-radius: 5px;
    color: #ffffff;
  }
</style>
