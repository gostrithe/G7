<template>
  <div class="err-container">
    <div class="error-bg"></div>

    <button class="error-btn">刷新试试</button>
    <a class="back" href="#">返回漫客栈首页</a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.err-container {
  .error-bg {
    width: 70vw;
    height: 56vw;
    margin: 18vw auto;
    background: url('../../public/imgs/bg_me_top_404.png');
    background-size: cover;
  }

  .error-btn {
    width: 80vw;
    height: 14vw;
    font-size: 5vw;
    margin-left: 10vw;
    line-height: 1.06667rem;
    background: #ff7830;
    border-radius: 8vw;
    color: #fff;
    border: 1vw solid white;
  }

  .back {
    display: block;
    text-align: center;
    margin-top: 5vw;
    color: #999;
  }
}
</style>