<template>
  <div class="side-info">
    <p>Etalase Toko</p>
    <ul class="list-etalase">
      <li>Semua Produk</li>
      <li>Pre Order</li>
      <li>Etalase 1</li>
      <li>Etalase 2</li>
      <li>Etalase 3</li>
      <li>Etalase 4</li>
      <li>Etalase 5</li>
      <li>Etalase 6</li>
      <li>Etalase 7</li>
      <li>Etalase 8</li>
      <li>Etalase 9</li>
      <li>Etalase 10</li>
      <li>Etalase 7</li>
      <li>Etalase 8</li>
      <li>Etalase 9</li>
      <li>Etalase 10</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideInfo',
};
</script>

<style scoped lang="scss">
  .side-info{
    width: 100%;
    padding: 8px;
    background-color: tomato;
    border-radius: 8px;
  }
  .list-etalase{
    height: 300px;
    overflow-y: scroll;
  }
  .list-etalase li{
    // text-transform: uppercase;
    list-style: none;
    padding-left: 20px;
  }
</style>
