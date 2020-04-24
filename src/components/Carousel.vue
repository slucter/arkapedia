<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://www.xmple.com/wallpaper/violet-triangle-1920x1080-c2-410493-1a0635-l2-223-223-a-210-f-10.svg"
        alt="case1">
      </div>
      <div class="carousel-item">
        <img src="https://www.xmple.com/wallpaper/triangle-magenta-1920x1080-c2-d934c4-86307b-l2-223-223-a-15-f-10.svg"
        alt="case2">
      </div>
      <div class="carousel-item">
        <img src="https://www.xmple.com/wallpaper/triangle-blue-1920x1080-c2-87ceeb-b0c4de-l2-223-223-a-105-f-10.svg"
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
    margin: 220px 0 50px;
    max-height: 223px;
    overflow: hidden;
    // background-color: fuchsia;
  }
</style>
