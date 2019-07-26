<template>
  <div>
    <!-- 顶部划动条 -->
    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
						<a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
							科技
						</a>
					</div>
				</div>
			</div>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
        <img v-lazy="item.url">
        <div class="info">
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});


export default {
  data () {
    return {
      cates: [],
      list: [
              {
              "id": "001",
              "title": "委靡不振，不足规",
              "zhaiyao": "唐朝张怀作有《文字论》“论曰：文字者，总而为言。若分而为义，则文者祖父，字者子孙。察其物形，得其文理，故谓之曰文；母子相生，孽乳寝多，因名之为字。题於竹帛，则目之曰书。字之与书理亦归一因文也者，其道焕焉。日月星辰，天之文也；五岳四渎，地之文也；城阙翰仪，人之文也。文为用，相须而成",
              "url": "http://images.liqucn.com/img/h21/h58/img_localize_9b350ffd50e91f93246142bbfc5263ac_200x200.png"	
              },
              {
              "id": "002",
              "title": "夫文字者，坟籍根本",
              "zhaiyao": "唐朝张怀作有《文字论》“论曰：文字者，总而为言。若分而为义，则文者祖父，字者子孙。察其物形，得其文理，故谓之曰文；母子相生，孽乳寝多，因名之为字。题於竹帛，则目之曰书。字之与书理亦归一因文也者，其道焕焉。日月星辰，天之文也；五岳四渎，地之文也；城阙翰仪，人之文也。文为用，相须而成",
              "url": "http://img1.2345.com/duoteimg/qqTxImg/2/65307d284c15b6650052a3c8eb7055b0.jpg"
              },
              {
              "id": "003",
              "title": "世之学徒，多不晓字",
              "zhaiyao": "唐朝张怀作有《文字论》“论曰：文字者，总而为言。若分而为义，则文者祖父，字者子孙。察其物形，得其文理，故谓之曰文；母子相生，孽乳寝多，因名之为字。题於竹帛，则目之曰书。字之与书理亦归一因文也者，其道焕焉。日月星辰，天之文也；五岳四渎，地之文也；城阙翰仪，人之文也。文为用，相须而成",
              "url": "http://img.52z.com/upload/news/20150703/201507031326448812.jpg"
              },
              {
              "id": "004",
              "title": "且由众手，全羣共喻",
              "zhaiyao": "唐朝张怀作有《文字论》“论曰：文字者，总而为言。若分而为义，则文者祖父，字者子孙。察其物形，得其文理，故谓之曰文；母子相生，孽乳寝多，因名之为字。题於竹帛，则目之曰书。字之与书理亦归一因文也者，其道焕焉。日月星辰，天之文也；五岳四渎，地之文也；城阙翰仪，人之文也。文为用，相须而成",
              "url": "http://b-ssl.duitang.com/uploads/item/201610/27/20161027043641_JKPWX.jpeg"
              },
              {
              "id": "005",
              "title": "委靡不振，不足规",
              "zhaiyao": "唐朝张怀作有《文字论》“论曰：文字者，总而为言。若分而为义，则文者祖父，字者子孙。察其物形，得其文理，故谓之曰文；母子相生，孽乳寝多，因名之为字。题於竹帛，则目之曰书。字之与书理亦归一因文也者，其道焕焉。日月星辰，天之文也；五岳四渎，地之文也；城阙翰仪，人之文也。文为用，相须而成",
              "url": "http://www.ghost64.com/qqtupian/qqTxImg/2/290d45408d04f60a55c34e907835f55a.jpg"
              }
            ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  * {
    touch-action: pan-y;
  }

  .photo-list {
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    li {
      background-color: #ccc;
      text-align: center;
      margin-bottom: 10px;
      box-shadow: 0 0 9px #999;
      position: relative;
      img {
        width: 100%;
        vertical-align: middle;
      }
      img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
      }

      .info {
        color: white;
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color: rgba(0,0,0,0.4);
        max-height: 84px;
        .info-title {
          font-size: 14px;
        }
        .info-body {
          font-size: 13px;
        }
      }
    }
  }
  
</style>