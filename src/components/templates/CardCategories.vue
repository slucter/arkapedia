<template>
  <div class="card-categories">
    <CardSearch image="https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2019/6/19/5885409/5885409_17aec769-854e-4fa7-9605-a695e4549bee_1000_1000.webp"
    name="Ipad Mini 5" qty="15rb" />
    <CardSearch image="https://ecs7.tokopedia.net/img/cache/200-square/attachment/2020/3/5/15833464978481/15833464978481_feb90bde-f287-439a-b4f3-cfa9e386a402.png.webp"
    name="Surgical Mask" qty="904" />
    <CardSearch image="https://ecs7.tokopedia.net/img/cache/200-square/catalog/2017/8/9/15524491/15524491_76b60170-1e9a-4016-8e50-fdf1c7945863.jpg.webp"
    name="Samsung S8" qty="209rb" />
    <CardSearch image="https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2018/9/16/12042327/12042327_724e7eb6-34a1-448e-b70b-baa6c59d7f09_1280_1280.jpg.webp"
    name="Kipas Angin Cosmos" qty="24rb" />
  </div>
</template>

<script>
import CardSearch from '@/components/CardSearch.vue';

export default {
  name: 'CardCategories',
  components: {
    CardSearch,
  },
};
</script>

<style lang="scss" scoped>
  .card-categories{
    max-width: 1200px;
    margin: 20px auto;
    overflow: hidden;
    display: flex;
  }
</style>
