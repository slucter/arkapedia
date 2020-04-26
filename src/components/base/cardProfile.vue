<template>
  <div class="container-thumb">
    <div class="thumbnail">
      <div class="cover-profil">
        <img src="../../assets/img/photo-profile-default.jpg" alt="">
        <h3>Shilfiya Amani</h3>
        <p>0 Follower</p>
      </div>
      <section class="edit-profile">
        <router-link to="edit" class="btn-edit-profile">Edit Profile</router-link>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cardProfile',
};
</script>

<style scoped>
  .container-thumb{
    display: flex;
    justify-content: center;
    height: 395.06px;
    width: 302px;
    padding: 0px 7px;
  }
  .thumbnail{
    display: flex;
    flex-direction: column;
    height: 288px;
    width: 288px;
    border-radius:8px;
    box-shadow: 1px 1px 16px 1px rgba(0,0,0,0.07);
    overflow: hidden;
  }
  .cover-profil{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    height: 600px;
    width: 500px;
    background: linear-gradient(rgba(47, 221, 25, 0.7), rgba(10, 133, 235, 0.7)),
    url('../../assets/img/photo-profile-default.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    margin-left: -100px ;
    margin-top: -150px ;
    color: #ffffff;
  }
  .cover-profil img{
    height: 80px;
    width: 80px;
    object-fit: cover;
    border: 2px solid rgba(255,255,255,1);
    box-shadow: 0 1px 8px 0 rgba(0,0,0,0.12);
    border-radius: 50%;
    margin-bottom: 10px;
  }
  .edit-profile{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 78px;
    width: 288px;
    margin: 12px 0px;
  }
  .btn-edit-profile{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 256px;
    border-radius: 8px;
    border: 1px solid #E5E7E9;
    text-decoration: none;
    color: rgba(0,0,0,0.56);
  }
</style>
