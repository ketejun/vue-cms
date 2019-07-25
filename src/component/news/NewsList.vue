<template>
  <div>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<router-link to="'/home/newsinfo/'+id">
						<img class="mui-media-object mui-pull-left" src="https://avatar.gitee.com/uploads/76/426476_icarusion.png!avatar100?1485052317">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
                <span>发表时间：2012-12-12 12：12：12</span>
                <span>点击：0次</span>
              </p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link to="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatar.gitee.com/uploads/76/426476_icarusion.png!avatar100?1485052317">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
                <span>发表时间：2012-12-12 12：12：12</span>
                <span>点击：0次</span>
              </p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link to="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatar.gitee.com/uploads/76/426476_icarusion.png!avatar100?1485052317">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
                <span>发表时间：2012-12-12 12：12：12</span>
                <span>点击：0次</span>
              </p>
						</div>
					</router-link>
				</li>
			</ul>
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .mui-table-view {
    li {
      h1 {
        font-size: 14px;
      }
      .mui-ellipsis {
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>