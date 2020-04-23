<template>
  <div>
    <NavbarLogin/>
    <div class="background-login">
      <div>
        <div class="form-login">
          <div class="content-form-login">
            <div class="header-login">
              <router-link to="/register">Daftar</router-link>
              <h3>Masuk</h3>
            </div>
            <section>
              <div>
                <div class="form-email">
                  <label for="email">Email</label>
                  <div class="form-input">
                    <input type="email" id="email">
                    <div class="error-msg">
                      <p>HAHAA</p>
                    </div>
                  </div>
                </div>
                <div class="form-email">
                  <label for="password">Kata Sandi</label>
                  <div class="form-input">
                    <div class="show-hide">
                    </div>
                    <input :type="type" id="password">
                    <i class="material-icons" id="on" @click="show"
                    v-if="btnShow === 1">visibility</i>
                    <i class="material-icons" id="off" @click="hide"
                    v-if="btnShow !== 1" >visibility_off</i>
                    <div class="error-msg">
                      <p>HAHA</p>
                    </div>
                  </div>
                </div>
                <div class="user-checkbox">
                  <div class="forgot">
                    <router-link to="/forgot">Lupa Kata Sandi?</router-link>
                  </div>
                  <input type="checkbox" id="checkbox">
                  <label for="checkbox">Ingat Saya</label>
                </div>
                <div class="button">
                  <button>Masuk</button>
                </div>
              </div>
            </section>
            <div>
              <div class="separator">
                <span></span>
                <span>atau masuk dengan</span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarLogin from '../components/module/NavbarLogin.vue';

export default {
  data() {
    return {
      type: 'password',
      btnShow: 1,
    };
  },
  components: {
    NavbarLogin,
  },
  methods: {
    show() {
      if (this.type === 'password') {
        this.type = 'text';
        this.btnShow = 2;
      } else if (this.type === 'text') {
        this.type = 'password';
        this.btnShow = 1;
      }
    },
    hide() {
      this.type = 'password';
      this.btnShow = 1;
    },
  },
};
</script>

<style scoped>
.background-login{
  background: url('../assets/img/download.svg') center no-repeat;
  height: 568px;
  width: 100vw;
  display: flex;
  justify-content: center;
  position: relative;
}
.form-login{
  border-radius: 9px;
  box-shadow: 0 0 6px 0 rgba(0,0,0,.12)!important;
  position: relative;
  width: 368px;
  display: block;
  padding: 40px 32px 12px;
  background-color: #fff;
  box-sizing: border-box;
}
.header-login{
  margin-bottom: 24px;
}
.header-login h3{
  font-size: 20px;
  font-weight: 600;
  color: rgba(0,0,0,.7);
}
.header-login a{
  text-decoration: none;
  color: #42b549;
  float: right;
  font-weight: 600;
  font-size: 13px;
}
.content-form-login{
  box-sizing: border-box;
  width: 304px;
  position: relative;
}
.form-email{
  position: relative;
}
.form-email label{
  color: rgba(0,0,0,.54);
  font-size: 12px;
  margin-bottom: 7px;
  display: block;
}
.form-input{
  position: relative;
}
.form-input input{
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #e0e0e0;
  color: rgba(0,0,0,.7);
  transition: border .2s linear;
  padding: 10px 14px;
  outline: #42b549;
  margin-bottom: 4px;
}
.error-msg{
  position: relative;
  height: 22px;
  margin-bottom: 5px;
}
.form-input i{
  display: inline-block;
  /* float: right; */
  /* top: -20px; */
  cursor: pointer;
  right: 10px;
  top: 12px;
  right: 10px;
  position: absolute;
  color: #e0e0e0;
}
.user-checkbox{
  position: relative;
  margin-bottom: 16px;
}
.user-checkbox label{
  display: inline-block;
  margin: 0 0 0 5px;
  position: relative;
  top: -2px;
  font-size: 13px;
  color: rgba(0,0,0,.54);
}
.forgot{
  width: 110px;
  height: 19px;
  /* right: 50px; */
  position: relative;
  float: right;
}
.forgot a{
  position: absolute;
  text-decoration: none;
  color: #42b549;
  font-size: 13px;
}
.button button{
  box-sizing: border-box;
  width: 100%;
  background: #03ac0e;
  color: #fff;
  height: 40px;
  border-radius: 8px;
  font-weight: 600;
  position: relative;
  padding: 8px 16px;
  text-align: center;
  border: none;
  font-size: 13px;
}
</style>
