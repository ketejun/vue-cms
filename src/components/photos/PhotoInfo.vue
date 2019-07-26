<template>
  <div class="photoinfo-container">
    <h3>标题</h3>
    <p class="subtitle">
      <span>发表时间:</span>
      <span>点击：0次</span>
    </p>

    <hr>

    <!-- 缩略图区域 -->

    <!-- 图片内容区域 -->
    <div class="content"></div>

    <!-- 放着一个现成的评论子组件 -->
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .photoinfo-container {
    padding: 3px;
    h3 {
      color: #26A2FF;
      font-size: 15px;
      text-align: center;
      margin: 15px 0;
    }
    .subtitle {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
    }
  }
</style>