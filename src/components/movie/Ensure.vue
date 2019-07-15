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
    </div>
  </div>
</template>

<script>
export default {
    data(){
    return{
      input:''
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
