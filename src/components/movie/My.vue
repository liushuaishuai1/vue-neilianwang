<template>
  <div id="app">
    <!-- 版心 搜索部分-->
    <div id="page" >
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
      <div>
        <!-- 折线图 -->
        <div id="chartmainline" style="width:600px; height:400px;"></div>
        <!-- 柱状图 -->
        <div id="chartmainbar" style="width:600px; height:400px;"></div>
    </div>
    </div>
  </div>
</template>

<script>
var echarts = require('../../../node_modules/echarts/lib/echarts')
require('../../../node_modules/echarts/lib/chart/bar')
require('../../../node_modules/echarts/lib/component/tooltip')
require('../../../node_modules/echarts/lib/component/title')
export default {
  data(){
    return{
      input:'',
       optionline:{
                title:{
                    text:'ECharts 数据统计'
                },
                tooltip:{},
                legend:{
                    data:['用户来源']
                },
                xAxis:{
                    data:["Android","IOS","PC","Ohter"]
                },
                yAxis:{
 
                },
                series:[{
                    name:'访问量',
                    type:'line', //设置图表主题
                    data:[500,200,360,100]
                }]
            },
            optionbar:{
                title:{
                    text:'ECharts 数据统计'
                },
                tooltip:{},
                legend:{
                    data:['用户来源']
                },
                xAxis:{
                    data:["Android","IOS","PC","Ohter"]
                },
                yAxis:{
 
                },
                series:[{
                    name:'访问量',
                    type:'bar', //设置图表主题
                    data:[500,200,360,100]
                }]
                 
           },
           
    mounted() {
       this.drawLine()
    },
    methods: {
      drawLine: function(){
        //基于准本好的DOM，初始化echarts实例
        let chartmainline = this.$echarts.init(document.getElementById("chartmainline"));
        let chartmainbar = this.$echarts.init(document.getElementById("chartmainbar"));
        //绘制图表
        chartmainline.setOption(this.optionline);
        chartmainbar.setOption(this.optionbar);
        }  
      }

    }
  }
}
</script>

<style lang="less" scoped>
.imgage{
  display: flex;
  height: 52px;
 .imgage_1{
   width: 248px;
  
   flex: 2;
   img{
     width: 248px;
      height: 52px;
   }
   }
   .imgage_2{
     position: relative;
     width: 907px;
     background-color: #f2df02 !important;
     input{
       vertical-align:text-bottom;
       margin-top: 10px;
       margin-right: 20px;
       width: 746px;
       height: 32px;
       color: #000;
       padding-left: 60px;
       box-sizing: border-box;
       letter-spacing:2px;
        vertical-align:middle;
     }
     img{
       padding-top: 10px;
       vertical-align:middle;
     }
    span{
      position: absolute;
      left: 13px;
      top: 6px;
    }
 }
}
</style>
