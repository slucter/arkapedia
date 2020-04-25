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
                    <input
                    v-model.trim="$v.email.$model"
                    type="email"
                    id="email">
                    <div class="error-msg">
                      <p class="default-msg" v-if="!$v.email.required || $v.email.email">
                      Contoh: email@tokopedia.com</p>
                      <p class="error-email" v-if="!$v.email.email">Format Email Salah!</p>
                    </div>
                  </div>
                </div>
                <div class="form-email">
                  <label for="password">Kata Sandi</label>
                  <div class="form-input">
                    <input
                    v-model.trim="$v.password.$model"
                    :type="type"
                    id="password">
                    <i class="material-icons" id="on" @click="show"
                    v-if="btnShow === 1">visibility</i>
                    <i class="material-icons" id="off" @click="hide"
                    v-if="btnShow !== 1" >visibility_off</i>
                    <div class="error-msg">
                      <p
                      v-if="!$v.password.minLength"
                      class="error-password-msg">Password Minimum 6 Karakter</p>
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
                  <button
                  @click="login"
                  v-if="$v.password.minLength && $v.email.email && $v.email.required
                  && $v.password.required"
                  class="green-button">Masuk</button>
                  <button
                  v-if="!$v.email.email || !$v.email.required
                  || !$v.password.required || !$v.password.minLength"
                  class="default-button">Masuk</button>
                </div>
              </div>
            </section>
            <div>
              <div class="separator">
                <span class="hline"></span>
                <span class="text-separator">atau masuk dengan</span>
                <span class="hline"></span>
              </div>
              <div class="button-link">
                <button class="google-link">Google</button>
                <button class="facebook-link">Facebook</button>
              </div>
            </div>
            <div class="form-footer">
              <p>Belum Punya Akun Tokopedia? <router-link to="/register">Daftar</router-link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>2009-2020 © PT Tokopedia <router-link to="/help"> | Bantuan </router-link></p>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';
import NavbarLogin from '../components/module/NavbarLogin.vue';

export default {
  data() {
    return {
      type: 'password',
      btnShow: 1,
      email: '',
      password: '',
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
    login(event) {
      event.preventDefault();
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
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
  height: 40px;
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
  height: 14px;
  margin-bottom: 5px;
}
.error-password-msg{
  color: #d50000;
  font-size: 13px;
}
.error-email{
  font-size: 13px;
  color: #d50000!important;
}
.default-msg{
  font-size: 13px;
  color: #9E9E9E;
}
.form-input i{
  display: inline-block;
  /* float: right; */
  /* top: -20px; */
  cursor: pointer;
  right: 10px;
  top: 9px;
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
.green-button{
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
  outline: none;
}
.default-button{
  outline: none;
  box-sizing: border-box;
  width: 100%;
  background: #e0e0e0;
  color: rgba(0,0,0,.26);
  height: 40px;
  border-radius: 8px;
  font-weight: 600;
  position: relative;
  padding: 8px 16px;
  text-align: center;
  border: none;
  font-size: 13px;
  pointer-events: none;
}
.separator{
  margin: 24px 0;
  display: flex;
  align-items: center;
}
.text-separator{
  font-size: 12px;
  text-align: center;
  padding: 0 18px;
  color: rgba(0,0,0,.38);
}
.hline{
  display: inline-block;
  border: .5px solid rgba(0,0,0,.12);
  width: 25%;
}
.button-link{
  display: block;
  margin: 0 0 16px;
}
.button-link button{
  margin-bottom: 16px;
  border-radius: 8px;
  font-weight: 600;
  background: #fff;
  border: 1px solid #e5e5e5;
  /* cursor: pointer; */
  color: rgba(0,0,0,.54);
  outline: none;
  width: 100%;
  height: 40px;
}
.form-footer{
  margin: 16px 0 12px;
  text-align: center;
}
.form-footer p{
  color: rgba(0,0,0,.54);
  font-size: 13px;
}
.form-footer a{
  text-decoration: none;
  color: #42b549;
}
.footer{
  position: relative;
  color: rgba(0,0,0,.54);
  text-align: center;
  margin: 64px 0 10px 0;
  font-size: 15px;
}
.footer a{
  text-decoration: none;
  color: #42b549;
}
</style>
