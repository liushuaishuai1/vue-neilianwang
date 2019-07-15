<template>
  <div id="app">
    <!-- 版心 搜索部分-->
    <div id="page">
      <div class="imgage">
        <div class="imgage_1">
          <img src="../../assets/images/shizhan.jpg" alt />
        </div>
        <div class="imgage_2">
          <input type="text" v-model="input" placeholder="请输入关键词搜索... ..." />
          <img src="../../assets/images/search.png" alt />
          <span>
            <img src="../../assets/images/sou_03.jpg" alt />
          </span>
        </div>
      </div>

      <!-- 实战部队分行侧边栏 -->
      <div class="body">
        <div class="shizhan">
          <div class="shizhan1">
            <div class="shizhan1_2">
              <img src="../../assets/images/qxzj_06.jpg" alt />
            </div>
          </div>
          <div class="shizhan2">
            <span class="shizhan2_3">SALES DEPARME</span>
            <span class="shizhan2_4">NT</span>
          </div>
          <div :span="12">
            <div
            >
              <div >
                <div slot="title" >
                  <div @click="buttom()" class="el-submenu__title">01 &nbsp; 前线之家</div>
                </div>
                <div > 
                  <div class="el-menu-item_1"   @click="buttom2()">o &nbsp;&nbsp;&nbsp;富力城第二分行</div>
                  <div class="el-menu-item_1"  index="1-2" @click="buttom3()">o  &nbsp;&nbsp;&nbsp;富力城分行</div>
                   <div class="el-menu-item_1" index="1-3" @click="buttom4()">o &nbsp;&nbsp;&nbsp;后现代城第二分行</div>
                  <div class="el-menu-item_1"  index="1-4" @click="buttom5()">o  &nbsp;&nbsp;&nbsp;后现代城分行</div>
                   <div class="el-menu-item_1" index="1-5" @click="buttom6()">o &nbsp;&nbsp;&nbsp;华侨城分行</div>
                  <div class="el-menu-item_1"  index="1-6" @click="buttom7()">o  &nbsp;&nbsp;&nbsp;金色漫香林分行</div>
                  <div class="el-menu-item_1" index="1-7" @click="buttom8()">o &nbsp;&nbsp;&nbsp;林肯公园分行</div>
                  <div class="el-menu-item_1"  index="1-8" @click="buttom9()">o  &nbsp;&nbsp;&nbsp;美景东方分行</div>
                   <div class="el-menu-item_1" index="1-9" @click="buttom10()">o &nbsp;&nbsp;&nbsp;山水文园分行</div>
                  <div class="el-menu-item_1"  index="1-10" @click="buttom11()">o  &nbsp;&nbsp;&nbsp;世纪东方城分行</div>
                   <div class="el-menu-item_1" index="1-11" @click="buttom12()">o &nbsp;&nbsp;&nbsp;中央别墅名都园分行</div>
                  <div class="el-menu-item_1"  index="1-12"  @click="buttom13()">o  &nbsp;&nbsp;&nbsp;中央别墅旗舰分行</div>
                   <div class="el-menu-item_1"  index="1-13"  @click="buttom14()">o  &nbsp;&nbsp;&nbsp;一手项目部拓展组</div>
                   <div class="el-menu-item_1" index="1-14"  @click="buttom15()">o &nbsp;&nbsp;&nbsp;一手项目部联动</div>
                  <div class="el-menu-item_1"  index="1-15"  @click="buttom16()">o  &nbsp;&nbsp;&nbsp;一手项目部外联组</div>
                </div >
              </div>
              <div  index="2" class="el-submenu__title">
                <span slot="title">02 &nbsp;每日战况</span>
              </div>
              <div  index="3" class="el-submenu__title">
                <span slot="title">03 &nbsp;业绩统计表</span>
              </div>
              <div  index="4" class="el-submenu__title">
                <span slot="title">04 &nbsp;业绩排行榜</span>
              </div>
               <div  index="5" class="el-submenu__title">
                <span slot="title">05 &nbsp;月会动态</span>
              </div>
            </div>
          </div>
          <div class="shizhan3">
            <img src="../../assets/images/px_06.jpg" alt="">
          </div>
          <div  class="shizhan4">
            <img src="../../assets/images/qxzj_09.jpg" alt="">
          </div>
          <div  class="shizhan5">
            <img src="../../assets/images/qxzj_23.jpg" alt="">
          </div>
        </div>
         <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  },
  mounted() {},
  methods: {
     more() {
      this.$router.push('/index/market')
    },
     buttom() {
      this.$router.push('/index/combat/combat1')
    },
      buttom2() {
      this.$router.push('/index/combat/combat2')
    },
    buttom3() {
      this.$router.push('/index/combat/combat3')
    },
    buttom4() {
      this.$router.push('/index/combat/combat4')
    },
    buttom5() {
      this.$router.push('/index/combat/combat5')
    },
    buttom6() {
      this.$router.push('/index/combat/combat6')
    },
    buttom7() {
      this.$router.push('/index/combat/combat7')
    },
    buttom8() {
      this.$router.push('/index/combat/combat8')
    },
    buttom9() {
      this.$router.push('/index/combat/combat9')
    },
    buttom10() {
      this.$router.push('/index/combat/combat10')
    },
    buttom11() {
      this.$router.push('/index/combat/combat11')
    },
    buttom12() {
      this.$router.push('/index/combat/combat12')
    },
    buttom13() {
      this.$router.push('/index/combat/combat13')
    },
    buttom14() {
      this.$router.push('/index/combat/combat14')
    },
    buttom15() {
      this.$router.push('/index/combat/combat15')
    },
     buttom16() {
      this.$router.push('/index/combat/combat16')
    },
  }
}
</script>

<style lang="less" >
 .el-menu-item_1{
 border-left: 1px solid #e3d2c0 !important;
  border-right: 1px solid #e3d2c0;
  border-bottom: 1px solid #d8d5ca;
  border-top: 1px solid #ffffff;
 background-color: #fbf5e9 !important;
  height: 35px !important;
  font-weight: 600;
    font-size: 15px;
    color: #7f4d1e;
  line-height:35px !important;
  font-family: 'Microsoft YaHei';
  padding-left: 40px!important;
  cursor: pointer;
}
.el-menu-item-group__title{
  padding: 0;
}
.el-menu-item,
.el-submenu__title{
  height: 35px !important;
  line-height: 35px !important;
  font-weight: 600;
  color:#513f2d !important;
  font-family: 'Microsoft YaHei';
  font-size: 16px;
  border-left: 8px solid #c8a581;
  border-right: 1px solid #d5d5d4;
  border-bottom: 1px solid #d5d5d4;
  border-top: 1px solid #ffffff;
  background: rgb(241, 227, 192);
  span{
   margin-left: 10px;
  }
}
.el-submenu__title:hover{
  background-color:#f9f4e5 !important;
}
.body {
  margin-top: 14px;
  width: 1155px;
  display: flex;
  .shizhan {
    width: 250px;
    margin-right: 14px;
    font-family: 'SimSun';
    .shizhan1 {
      border: 1px solid #d0cece;
      width: 246px;
      height: 50px;
      background: white;
      border-right: 2px solid #62adf1;
      .shizhan1_2 {
        width: 162px;
        height: 50px;
        font-size: 15px;
        background: #62adf1;
        text-align: center;
        line-height: 65px;
      }
    }
    .shizhan2 {
      font-family: Arial;
      border: 1px solid #d0cece;
      border-top: 0;
      font-weight: 600;
      font-size: 14px;
      width: 246px;
      height: 27px;
      background: white;
      border-right: 2px solid #f2df02;
      color: #62adf1;
      .shizhan2_3 {
        display: inline-block;
        height: 27px;
        color: #fff;
        width: 162px;
        background: #f2df02;
        text-align: right;
        line-height: 27px;
      }
    }
  }

}
.shizhan3,.shizhan4,.shizhan5{
      width: 250px;
      img{
        width: 100%;
      }
    }
// 头部
.imgage {
  display: flex;
  height: 52px;
  .imgage_1 {
    width: 248px;

    flex: 2;
    img {
      width: 248px;
      height: 52px;
    }
  }
  .imgage_2 {
    position: relative;
    width: 907px;
    background-color: #f2df02 !important;
    input {
      vertical-align: text-bottom;
      margin-top: 10px;
      margin-right: 20px;
      width: 746px;
      height: 32px;
      color: #000;
      padding-left: 60px;
      box-sizing: border-box;
      letter-spacing: 2px;
      vertical-align: middle;
    }
    img {
      padding-top: 10px;
      vertical-align: middle;
    }
    span {
      position: absolute;
      left: 13px;
      top: 6px;
    }
  }
}
</style>
