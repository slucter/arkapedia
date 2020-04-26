<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://ecs7.tokopedia.net/img/banner/2020/4/24/98903353/98903353_d1389f69-5b3c-4a4e-af90-b4d3045a17e0.jpg"
        alt="case1">
      </div>
      <div class="carousel-item">
        <img src="https://ecs7.tokopedia.net/img/banner/2020/4/24/85531617/85531617_74b6c066-3b86-40a4-b55a-6d45a0028260.jpg"
        alt="case2">
      </div>
      <div class="carousel-item">
        <img src="https://ecs7.tokopedia.net/img/banner/2020/4/24/85531617/85531617_f2244d1a-b4e1-4d5a-a140-025865b3a442.jpg"
        alt="case3">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators"
    role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators"
    role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
};
</script>

<style lang="scss" scoped>
  .carousel{
    margin-bottom: 50px;
    max-height: 250px;
    overflow: hidden;
    border-radius: 20px;
    // background-color: fuchsia;
  }
  .carousel-item{
    text-align: center;
  }
</style>
