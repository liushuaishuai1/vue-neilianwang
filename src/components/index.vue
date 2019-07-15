<template>
  <div class="box">
    <el-container>
      <el-header id="heard">
        <div class="slider">
          <!-- 轮播项容器 -->
          <ul>
            <li class="as">
              <a href="#">
                <img src="../assets/images/topbg01.jpg" alt />
              </a>
            </li>
            <li class="as">
              <a href="#">
                <img src="../assets/images/topbg02.jpg" alt />
              </a>
            </li>
            <li class="as">
              <a href="#">
                <img src="../assets/images/topbg03.jpg" alt />
              </a>
            </li>
          </ul>
          <div class="arrow">
            <span class="arrow-left"></span>
            <span class="arrow-right"></span>
          </div>
        </div>
        <!-- logo 标 -->
        <div id="image" @click="button()">
          <img src="../assets/images/logo.png" alt />
        </div>

        <!--首页导航栏-->
        <div id="show">
          <ul class="index1">
            <li>
              <router-link to="/index/ins" target="_blank">
                <span id="span_1"><img src="../assets/images/index1_03.png" alt=""></span>
                 <span id="span_2" style="display:none">首页</span>
              </router-link>
            </li>
            <!-- <li>
              <router-link to="/index/my" target="_blank">
                <span id="span_1">我的地盘</span>
              </router-link>
            </li> -->
            <li>
              <router-link to="/index/combat" target="_blank">
                <span id="span_1"><img src="../assets/images/index_05.png" alt=""></span>
               <span id="span_2" style="display:none">实战部队</span>
              </router-link>
            </li>
            <li>
              <router-link to="/index/ensure" target="_blank">
                <span id="span_1"><img src="../assets/images/index_07.png" alt=""></span>
                <span id="span_2" style="display:none">联勤保障</span>
              </router-link>
            </li>
            <li>
              <router-link to="/index/market" target="_blank">
                <span id="span_1"><img src="../assets/images/index_09.png" alt=""></span>
                <span id="span_2" style="display:none">市场大事</span>
              </router-link>
            </li>
            <li>
              <router-link to="/index/college" target="_blank">
                <span id="span_1"><img src="../assets/images/index_11.png" alt=""></span>
                <span id="span_2" style="display:none">大学堂</span>
              </router-link>
            </li>
            <li>
              <router-link to="/index/elite" target="_blank">
                <span id="span_1"><img src="../assets/images/index_13.png" alt=""></span>
                <span id="span_2" style="display:none">精英会</span>
              </router-link>
            </li>
            <li>
              <router-link to="/index/love" target="_blank">
                <span id="span_1"><img src="../assets/images/index_15.png" alt=""></span>
                <span id="span_2" style="display:none">美联慈爱</span>
              </router-link>
            </li>
            <li>
              <router-link to="/index/about" target="_blank">
                <span id="span_1"><img src="../assets/images/index_17.png" alt=""></span>
                <span id="span_2" style="display:none">关于美联</span>
              </router-link>
            </li>
          </ul>
        </div>
      </el-header>

      <!-- 最新通知 -->
      <el-main>
        <div class="mian">
          <div id="page">
            <div class="page">
              <div  class="page_1">
              <div>{{ctime | timeFM2 }}</div>

              </div>
              <div class="page_2">
                <a href="javascript:">
                  <marquee
                    direction="left"
                    behavior="scroll"
                    loop="3"
                    scrollamount="3"
                    scrolldelay="10"
                    align="left"
                    height="27"
                    width="810"
                    hspace="280"
                    vspace="280"
                    onmouseover="this.stop()"
                    onmouseout="this.start()"
                  >【最新通知】关于2018年国庆节假期资讯科技部各分行电脑维修事宜 ---2018-10-08</marquee>
                </a>
              </div>
            </div>
          </div>
        </div>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <div class="footer">
          <div class="buttom">
            <img src="../assets/images/erweima_03.jpg" />
            <p>美联中国内联网&nbsp;&nbsp;|&nbsp;&nbsp;美联北京内联网&nbsp;&nbsp;|&nbsp;&nbsp;内联网管理</p>
            <p class="adress">
              地址：北京市朝阳区建国门外大街甲6号SK大厦17层1701、1702
              <span>电话：010-59130222</span>
              <span>传真：010-59130228</span>
              <span>邮编：100022</span>
            </p>
            <p>Copyright@北京美联房地产经纪有限公司 All Right Resered 版权所有 违者必究</p>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>

export default {
  filters:{
        timeFM2(origin){
          var tm = new Date(origin)
          var yyyy = tm.getFullYear()
          var mm = (tm.getMonth()+1+'').padStart(2,'0')
          var dd = (tm.getDate()+'').padStart(2,'0')
          var xq =(tm.getDay()+'')
           var week;
        var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
          week = arr_week[xq];
          return `${yyyy}-${mm}-${dd} ${week}`  
        }
      },
  data(){
    return{
  ctime:Date.now()
    }
  },
  
  methods: {
    constructor(){
        var weekday= ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
				setInterval(()=>{
           
					//new Date() new一个data对象，当前日期和时间
					//toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
          this.nowTime = new Date().toLocaleString()
           this.week=new Date().getDay().toLocaleString()
				},1000)
			},
    button() {
      this.$router.push('/index/ins')
    }
  },
created(){
			this.constructor()
		},
  mounted() {
    
    document.oncontextmenu = new Function('event.returnValue=false;')
    document.onselectstart = new Function('event.returnValue=false;')

    // 头部背景轮播图部分
    var index = 0
    $('.arrow-right').click(function() {
      index++
      if (index >= $('.as').length) {
        index = 0
      }
      $('.as')
        .eq(index)
        .fadeIn(2000)
        .siblings()
        .fadeOut(2000)
    })
    $('.arrow-right').click()
    $('.arrow-left').click(function() {
      index--
      if (index < 0) {
        index = $('ul .as').length - 1
      }
      $('.as')
        .eq(index)
        .fadeIn(5000)
        .siblings()
        .fadeOut(5000)
    })

    // 自动轮播\
    var sq
    sq = window.setInterval(function() {
      $('.arrow-right').click()
    }, 5000)
    $('.slider').mouseenter(function() {
      window.clearInterval(sq)
    })
    $('.slider').mouseleave(function() {
      sq = window.setInterval(function() {
        $('.arrow-right').click()
      }, 5000)
    })
  }
}
</script>

<style lang="less">
.el-footer {
  padding: 0;
}
.footer {
  width: 784px;
  height: 200px;
  padding-right: 320px;
  padding-left: 349px;
  margin: 0 auto;
  background: #ebebeb;
  margin-top: 50px;
  .buttom {
    width: 774px;
    img {
      margin-top: 27px;
      margin-bottom: 25px;
    }
    p {
      text-align: center;
      font-size: 13px;
      color: rgb(111, 111, 111);
      span {
        font-size: 13px;
        color: rgb(111, 111, 111);
      }
    }
  }
}
.mian {
  width: 1440px;
}

.page {
  display: flex;
  height: 28px;
  line-height: 28px;
  .page_1 {
    flex: 2;
    text-align: center;
    letter-spacing: 9px;
    color: #fff;
    font-size: 12px;
    letter-spacing: 1px;
    background-color: #b85a24;
  }
  .page_2 {
    width: 907px;
    background-color: #ac6f12;
    marquee {
      margin-left: 40px;
      font-size: 12px;
      color: #f8d14b;
    }
  }
}
.el-header {
  height: 52px;
}

#image {
  cursor: pointer;
  img {
    position: absolute;
    top: 6px;
    left: 170px;
  }
}

// 首页导航部分
#show {
  width: 1200px;
  li {
    list-style: none !important;
    min-width:110.8px;
    height: 40px;
    line-height: 40px !important;
    margin-right: 2px;
    z-index: 100;
     border-bottom: 1px solid #b2b2b2;
     border-right: 1px solid #b2b2b2;
    cursor: pointer;
    background-color: #f4f4f4;
    background-color: opacity =0;
    a {
      text-decoration: none;
      position: absolute;
      min-width:110.8px;
      text-align: center;
      line-height:50px;
      span {
        img{
         text-align: center;
        }
      }
    }
  }
}
.router-link-active {
  
  font-weight: 600;
  background-color: #b87916 !important;
  border: 1px solid #ac7011;
}
.router-link-active #span_1 {
   border: 1px solid #ac7011;
  display: none;
  color: #fff !important;
}
.router-link-active #span_2{
  display: block !important;
line-height: 40px;
font-style: oblique;
color: #fff;
font-weight: 900;
font-family: 'Microsoft JhengHei';
font-size: 22px ;
}
#heard {
  width: 1440px;
  position: relative;
}

// 轮播图样式
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.slider {
  height: 40px;
  width: 1440px;
  margin: 0 auto;
  position: relative;
}

.slider li {
  position: absolute;
  display: none;
  img {
    width: 1440px;
    height: 52px;
  }
}

.slider li:first-child {
  display: block;
}

.arrow {
  display: none;
}

.slider:hover .arrow {
  display: block;
}

.arrow-left,
.arrow-right {
  font-family: 'SimSun', '宋体';
  width: 30px;
  height: 40px;
  background-color: opacity =0;
  position: absolute;
  top: 50%;
  margin-top: -30px;
  cursor: pointer;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
}

.arrow-left:hover,
.arrow-right:hover {
  background-color: opacity =0;
}

.arrow-left {
  left: 0;
}

.arrow-right {
  right: 0;
}

#show ul {
  position: absolute;
  width: 1050px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  top: 11px;
  right: 0px;
}
</style>
