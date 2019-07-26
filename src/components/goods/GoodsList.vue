<template>
  <div class="goods-list">
    <div class="goods-item">
      <img src="https://img13.360buyimg.com/n7/jfs/t1/3/15/4536/138660/5b997bf8Ed72ebce7/819dcf182d743897.jpg" alt="">
      <h1 class="title">Apple iPhone XS Max (A2104) 256GB 深空灰色 移动联通电信4G手机 双卡双待</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥9999</span>
          <span class="old">￥8999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="https://img13.360buyimg.com/n7/jfs/t1/47193/2/3369/231278/5d11cb39Ef3674059/ba3c0a1d956429e2.jpg" alt="">
      <h1 class="title">华为 HUAWEI nova 5 Pro 前置3200万人</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥3999</span>
          <span class="old">￥2999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩10件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="https://img14.360buyimg.com/n7/jfs/t1/19261/13/12605/324178/5c98c7bcE63f668de/ca2762256ec6f931.jpg" alt="">
      <h1 class="title">华为 HUAWEI P30 Pro 超感光徕卡四摄10倍混合变焦麒麟980芯片屏内指纹 8GB+</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥5999</span>
          <span class="old">￥4999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩20件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="https://img11.360buyimg.com/n7/jfs/t19114/92/1466840338/72210/d0f235eb/5acc524aN049267d8.jpg" alt="">
      <h1 class="title">Apple iPhone 8 (A1907) 64GB 深空灰色 移动联通4G手机</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥4999</span>
          <span class="old">￥3999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩6件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="https://img13.360buyimg.com/n7/jfs/t1/3/15/4536/138660/5b997bf8Ed72ebce7/819dcf182d743897.jpg" alt="">
      <h1 class="title">Apple iPhone XS Max (A2104) 256GB 深空灰色 移动联通电信4G手机 双卡双待</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥9999</span>
          <span class="old">￥8999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    .goods-item {
      width: 49%;
      border: 1px solid #ccc;
      box-shadow: 0 0 8px #ccc; 
      margin: 3px 0;
      padding: 2px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 293px;
      img {
        width: 100%;
      }
      .title {
        font-size: 14px;
      }
      .info {
        background-color: #eee;
        p{
          margin: 0;
          padding: 5px;
        }
        .price {
          .now{
            color: red;
            font-weight: bold;
            font-size: 16px;
          }
          .old{
            text-decoration: line-through;
            font-size: 12px;
            margin-left: 10px;
          }
        }
        .sell{
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
</style>