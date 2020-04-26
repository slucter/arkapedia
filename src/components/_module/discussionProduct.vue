<template>
<div class="containerDiscussion">
  <div class="headerDiscussion">
    <div class="titleDiscussion">
      <h3>DISKUSI (170)</h3>
    </div>
    <!-- <div class="productDiscussion">
      <h3>Starter Pack HMNS Perfume isi 3 Varian Parfum (@5ml)</h3>
    </div> -->
  </div>

  <div class="containerAskDiscussion">
    <div class="bodyAskDiscussion">
      <div class="logoAskDiscussion">
        <img src="../../assets/img/download.jpg" alt="">
      </div>
      <div class="questionAskDiscussion">
        <h5>Ada pertanyaan? <span>Diskusikan dengan penjual atau pengguna lain</span></h5>
      </div>
    </div>
    <div class="writeAskDiscussion">
      <h5>Tulis Pertanyaan</h5>
    </div>
  </div>

  <div class="containerDiscuss">
  <div class="containerBuyerDiscussion" v-for="discuss in 4" :key="discuss">
    <div class="headerBuyerDiscussion">
      <div class="profileBuyerDiscussion">
        <img src="https://ecs7.tokopedia.net/img/cache/100-square/default_picture_user/default_toped-16.jpg" alt="">
      </div>
      <div class="headerNameBuyerDiscussion">
        <div class="nameBuyerDiscussion">
          <div class="nameDiscussion">
            <p>Cristiano Ronaldo</p>
          </div>
          <div class="timeDiscussion">
            <p>22 April pukul 05:50</p>
          </div>
        </div>
        <div class="buyerQuestionDiscussion">
          <p>Ready stock gan?</p>
        </div>
      </div>
    </div>
    <div>
    <div class="headerOwnerDiscussion">
      <div class="profileOwnerDiscussion">
        <img src="https://ecs7.tokopedia.net/img/cache/100-square/default_picture_user/default_toped-16.jpg" alt="">
      </div>
      <div class="headerNameOwnerDiscussion">
        <div class="nameOwnerDiscussion">
          <div class="nameOwnerDiscussion">
            <p>Benny Dolo</p>
          </div>
          <div class="timeOwnerDiscussion">
            <p>22 April pukul 05:50</p>
          </div>
        </div>
        <div class="ownerQuestionDiscussion">
          <p>Halo gan. Langsung order aja gan, pengiriman dilakukan mingdep ya.</p>
        </div>
      </div>
    </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'discussionProduct',
};
</script>

<style scoped>
.containerDiscussion {
  display: flex;
  flex-direction: column;
}

.headerDiscussion {
  display: flex;
  flex-direction: column;
  padding: 24px;
}

.containerAskDiscussion {
  display: flex;
  flex-direction: row;
  margin: 0 24px 20px;
  padding: 16px 16px 16px 24px;
  border: 1px solid lightgray;
  border-radius: 1px;
  width: 1300px;
  height: 80px;
}

.bodyAskDiscussion {
  display: flex;
  flex-direction: row;
}

.titleDiscussion h3 {
  font-family: sans-serif;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
}

.productDiscussion h3 {
  font-size: 14px;
  font-weight: 400;
  font-family: sans-serif;
}

.logoAskDiscussion img {
  width: 30px;
  height: 30px;
  margin: 8px 0;
}

.questionAskDiscussion {
  background: white;
  margin: 0 0 0 15px;
}

.questionAskDiscussion h5 {
  font-weight: 400;
  font-size: 14px;
  background: white;
  margin: 15px 0;
}

.questionAskDiscussion h5 span {
  font-weight: 600;
  font-size: 14px;
  background: white ;
  margin: 0px;
}

.writeAskDiscussion h5 {
  background-color: rgb(3, 151, 12);
  font-size: 14px;
  border: 1px solid rgb(3, 151, 12);
  border-radius: 8px;
  padding: 12px 30px;
  line-height: 20px;
  font-weight: 800;
  color: white;
  margin: 0 0 0 630px;
  cursor: pointer;
}

.containerDiscuss {
  display: flex;
  flex-direction: column;
}

.containerBuyerDiscussion {
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  background: white;
  width: 100%;
  padding: 16px 24px;
}

.headerBuyerDiscussion {
  display: flex;
  flex-direction: row;
  background: white;
  border: 1px solid lightgray;
  padding: 16px 24px;
}

.profileBuyerDiscussion img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 5px 0;
}

.headerNameBuyerDiscussion {
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 15px;
  height: 43px;
}

.nameBuyerDiscussion {
  display: flex;
  flex-direction: row;
  height: 17px;
}

.nameDiscussion p {
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  font-family: sans-serif;
}

.timeDiscussion p {
  margin: 0;
  font-size: 11px;
  margin: 0 0 0 7px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.38);
  font-family: sans-serif;
}

.buyerQuestionDiscussion p {
  margin: 0;
  font-size: 14px;
  line-height: 18px;
}

/* Owner Discussion */
.headerOwnerDiscussion {
  display: flex;
  flex-direction: row;
  background: white;
  border: 1px solid lightgray;
  padding: 16px 48px;
  border-radius: 3px;
}

.profileOwnerDiscussion img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 5px 0;
}

.headerNameOwnerDiscussion {
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 15px;
  height: 43px;
}

.nameOwnerDiscussion {
  display: flex;
  flex-direction: row;
  height: 17px;
}

.nameOwnerDiscussion p {
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  font-family: sans-serif;
}

.timeOwnerDiscussion p {
  margin: 0;
  font-size: 11px;
  margin: 0 0 0 7px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.38);
  font-family: sans-serif;
}

.ownerQuestionDiscussion p {
  margin: 0;
  font-size: 14px;
  line-height: 18px;
}
</style>
