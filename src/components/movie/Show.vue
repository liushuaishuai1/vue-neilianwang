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
      <!-- 首页轮播图部分 -->
      <div class="banner">
        <div class="banner1">
          <img src="../../assets/images/home_03.jpg" alt />
          <div class="banner_a">
            忍受别人三分嫉妒，七分羡慕的眼光---万事达名苑
            <img src="../../assets/images/home3_03.jpg" alt />
          </div>
          <div class="xiangqing" @click="more()">
            <p>建面100-129平户型已开售目前仍有40多套房源在售,备案价格为9880-11300/平,均价11100元/平</p>
            <span>[ 阅读全文 ]</span>
          </div>
        </div>
        <div class="banner2">
          <ul>
            <li>
              <img src="../../assets/images/home_04.jpg" alt />
              <div class="ding"></div>
              <div class="yunhe">
                <p>大运河孔雀城温莎郡</p>
                <span>项目位于大亚湾西区龙海三路与龙山五...</span>
                <span>[更多]</span>
              </div>
            </li>
            <li>
              <img src="../../assets/images/home_06.jpg" alt />
              <div class="ding"></div>
              <div class="yunhe">
                <p>大运河孔雀城温莎郡</p>
                <span>项目位于大亚湾西区龙海三路与龙山五...</span>
                <span>[更多]</span>
              </div>
            </li>
            <li>
              <img src="../../assets/images/home_10.jpg" alt />
              <div class="ding"></div>
              <div class="yunhe">
                <p>大运河孔雀城温莎郡</p>
                <span>项目位于大亚湾西区龙海三路与龙山五...</span>
                <span>[更多]</span>
              </div>
            </li>
            <li>
              <img src="../../assets/images/home_11.jpg" alt />
              <div class="ding"></div>
              <div class="yunhe">
                <p>大运河孔雀城温莎郡</p>
                <span>项目位于大亚湾西区龙海三路与龙山五...</span>
                <span>[更多]</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- 英雄业绩排行榜 -->
      <div class="paihang">
        <div class="jy" @click="more()">
          <p>
            每日数据更新
            <a>|</a>更新时间：2018年10月18日
          </p>
          <div class="ge">
            <ul class="head">
              <li>最佳业务员</li>
              <li>个人业绩</li>
            </ul>
            <ul class="body">
              <li>1</li>
              <li>朱晓萍</li>
              <li>
                <div>
                  <img src="../../assets/images/smpic_03.png" />
                </div>
              </li>
              <li>659603.16</li>
            </ul>
            <ul class="body">
              <li>2</li>
              <li>王宏伟</li>
              <li>
                <div>
                  <img src="../../assets/images/smpic_07.png" />
                </div>
              </li>
              <li>520211.36</li>
            </ul>
            <ul class="body">
              <li>3</li>
              <li>陈传英</li>
              <li>
                <div>
                  <img src="../../assets/images/smpic_10.png" />
                </div>
              </li>
              <li>510759.89</li>
            </ul>
          </div>
          <div class="zu">
            <ul class="head">
              <li>最佳经理</li>
              <li>组别业绩</li>
            </ul>
            <ul class="body">
              <li>1</li>
              <li>朱晓萍</li>
              <li>
                <div>
                  <img src="../../assets/images/smpic_03.png" />
                </div>
              </li>
              <li>659603.16</li>
            </ul>
            <ul class="body">
              <li>2</li>
              <li>王宏伟</li>
              <li>
                <div>
                  <img src="../../assets/images/smpic_07.png" />
                </div>
              </li>
              <li>520211.36</li>
            </ul>
            <ul class="body">
              <li>3</li>
              <li>陈传英</li>
              <li>
                <div>
                  <img src="../../assets/images/smpic_10.png" />
                </div>
              </li>
              <li>510759.89</li>
            </ul>
          </div>
          <div class="pian">
            <ul class="head">
              <li>最佳区经</li>
              <li>片区业绩</li>
            </ul>
            <ul class="body">
              <li>1</li>
              <li>朱晓萍</li>
              <li>
                <div>
                  <img src="../../assets/images/smpic_03.png" />
                </div>
              </li>
              <li>659603.16</li>
            </ul>
            <ul class="body">
              <li>2</li>
              <li>王宏伟</li>
              <li>
                <div>
                  <img src="../../assets/images/smpic_07.png" />
                </div>
              </li>
              <li>520211.36</li>
            </ul>
            <ul class="body">
              <li>3</li>
              <li>陈传英</li>
              <li>
                <div>
                  <img src="../../assets/images/smpic_10.png" />
                </div>
              </li>
              <li>510759.89</li>
            </ul>
          </div>
        </div>
        <div class="test_two_box" @click="more()">
          <video
            id="myVideo"
            quality="high"
            style="height:281px;width:300px;object-fit:fill;"
            align="middle"
            muted
            loop="loop"
            allowScriptAccess="always"
            allowfullscreen="true"
            controls="controls"
            mode="transparent"
            type="application/x-shockwave-flash"
          >
            <source src="../../assets/images/shouye.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <!-- 美联大事 -->
      <div class="meilian">
        <div class="meilian_1">
          <div class="geng" @click="more()">更多</div>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="mei">
            <el-tab-pane label="美联大事" name="first">
              <div class="tab-box">
                <ul @click=" more()">
                  <li>
                    <a href="javascript:">
                      <img src="../../assets/images/jiantou.jpg" />"协力共赢 决战2017"暨2017年北京美联第三季度主管会圆满落幕！
                    </a>
                    <img
                      src="../../assets/images/index_18.jpg"
                      style="height: 9px;width: 23px;display: inline-block;padding-bottom:9px;cursor: pointer;"
                    />
                    <span>[2010-11-05]</span>
                  </li>
                  <li>
                    <a href="javascript:">
                      <img src="../../assets/images/jiantou.jpg" />金秋在美联 十月齐欢乐丨北京美联2017年10月后勤拓展活动感谢张董来京
                    </a>
                    <img
                      src="../../assets/images/index_18.jpg"
                      style="height: 9px;width: 23px;display: inline-block;padding-bottom:9px;cursor: pointer;"
                    />
                    <span>[2010-11-05]</span>
                  </li>
                  <li>
                    <a href="javascript:">
                      <img src="../../assets/images/jiantou.jpg" />北京区董事总经理白纪远先生入职10周年纪念日
                    </a>
                    <img
                      src="../../assets/images/index_18.jpg"
                      style="height: 9px;width: 23px;display: inline-block;padding-bottom:9px;cursor: pointer;"
                    />
                    <span>[2010-11-05]</span>
                  </li>
                  <li>
                    <a href="javascript:">
                      <img src="../../assets/images/jiantou.jpg" />“相约五月 欢乐同行” 暨2017年北京美联第一届后勤活动
                    </a>
                    <span>[2010-11-05]</span>
                  </li>
                  <li>
                    <a href="javascript:">
                      <img src="../../assets/images/jiantou.jpg" />聚力前行 | 重庆美联精英代表团赴北京美联物业交流学习之旅圆满成功！
                    </a>
                    <span>[2010-11-05]</span>
                  </li>
                  <li>
                    <a href="javascript:">
                      <img src="../../assets/images/jiantou.jpg" />捷报传来！恭喜北京美联物业2016年10月实现业绩&实收双盈
                    </a>
                    <span>[2010-11-05]</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="通知速递" name="second">
              <div class="tab-box">
                <ul @click=" more()">
                  <li>
                    <a href="javascript:">
                      <img src="../../assets/images/jiantou.jpg" />"协力共赢 决战2017"暨2017年北京美联第三季度主管会圆满落幕！
                    </a>
                    <img
                      src="../../assets/images/index_18.jpg"
                      style="height: 9px;width: 23px;display: inline-block;padding-bottom:9px;cursor: pointer;"
                    />
                    <span>[2010-11-05]</span>
                  </li>
                  <li>
                    <a href="javascript:">
                      <img src="../../assets/images/jiantou.jpg" />“相约五月 欢乐同行” 暨2017年北京美联第一届后勤活动
                    </a>
                    <img
                      src="../../assets/images/index_18.jpg"
                      style="height: 9px;width: 23px;display: inline-block;padding-bottom:9px;cursor: pointer;"
                    />
                    <span>[2010-11-05]</span>
                  </li>
                  <li>
                    <a href="javascript:">
                      <img src="../../assets/images/jiantou.jpg" />北京区董事总经理白纪远先生入职10周年纪念日
                    </a>
                    <img
                      src="../../assets/images/index_18.jpg"
                      style="height: 9px;width: 23px;display: inline-block;padding-bottom:9px;cursor: pointer;"
                    />
                    <span>[2010-11-05]</span>
                  </li>
                  <li>
                    <a href="javascript:">
                      <img src="../../assets/images/jiantou.jpg" />“相约五月 欢乐同行” 暨2017年北京美联第一届后勤活动
                    </a>
                    <span>[2010-11-05]</span>
                  </li>
                  <li>
                    <a href="javascript:">
                      <img src="../../assets/images/jiantou.jpg" />聚力前行 | 重庆美联精英代表团赴北京美联物业交流学习之旅圆满成功！
                    </a>
                    <span>[2010-11-05]</span>
                  </li>
                  <li>
                    <a href="javascript:">
                      <img src="../../assets/images/jiantou.jpg" />捷报传来！恭喜北京美联物业2016年10月实现业绩&实收双盈
                    </a>
                    <span>[2010-11-05]</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div class="right">
            <img src="../../assets/images/home_16.jpg" alt />
          </div>
          <div class="mains_y">
            <div class="mains_a">
              <i></i>
              <span class="mains_a1">更多</span>
              <div class="mains_a2">
                <span class="mains_a3">项目：</span>
                <span class="mains_a4">大运河孔雀城</span>
                <select name id>
                  <option value>大运河孔雀城</option>
                  <option value>大运河孔雀城</option>
                  <option value>大运河孔雀城</option>
                  <option value>大运河孔雀城</option>
                  <option value>大运河孔雀城</option>
                </select>
              </div>
              <div
                class="mains"
                id="chartmainline"
                style="width:395px; height:225px;position: absolute; bottom:10px;left:7px; "
              ></div>
            </div>
            <!-- 柱状图 -->
            <div class="mains_b">
              <i></i>
              <span class="mains_a1"></span>
              <div
                class="mains_2"
                id="chartmainbar"
                style="width:395px; height:285px;position: absolute; bottom:-30px;left:7px; "
              ></div>
            </div>
          </div>
        </div>
        <div class="right_2">
          <div class="qiye">
            <!-- 前线使用部分 -->
            <div class="qian">
              <div id="kan">
                <a href="#">
                  <img src="../../assets/images/home_32.jpg" />
                </a>
                <p>盘客系统</p>
              </div>
              <div>
                <a href="#">
                  <img src="../../assets/images/home_34.jpg" />
                </a>
                <p>电脑维修</p>
              </div>
              <div>
                <a href="#">
                  <img src="../../assets/images/home_36.jpg" />
                </a>
                <p>行政维修</p>
              </div>
            </div>
            <!-- 后勤使用部分 -->
            <div class="hou">
              <div>
                <a href="#">
                  <img src="../../assets/images/home_49.jpg" />
                </a>
                <p>交管系统</p>
              </div>
              <div>
                <a href="#">
                  <img src="../../assets/images/home_51.jpg" />
                </a>
                <p>卡片申请</p>
              </div>
              <div>
                <a href="#">
                  <img src="../../assets/images/home_54.jpg" />
                </a>
                <p>录用通知书</p>
              </div>
            </div>
            <div class="hou">
              <div>
                <a href="#">
                  <img src="../../assets/images/home_62.jpg" />
                </a>
                <p>DSR系统</p>
              </div>
              <div>
                <a href="#">
                  <img src="../../assets/images/home_63.jpg" />
                </a>
                <p>现金账款管理</p>
              </div>
              <div>
                <a href="#">
                  <img src="../../assets/images/home_64.jpg" />
                </a>
                <p>秘书外出及休假</p>
              </div>
            </div>
            <div class="hou">
              <div>
                <a href="#">
                  <img src="../../assets/images/home_68.jpg" />
                </a>
                <p>佣金催收报告</p>
              </div>
              <div>
                <a href="#">
                  <img src="../../assets/images/home_70.jpg" />
                </a>
                <p>人事系统</p>
              </div>
              <div>
                <a href="#">
                  <img src="../../assets/images/home_72.jpg" />
                </a>
                <p>培训系统</p>
              </div>
            </div>
            <div class="hou">
              <div>
                <a href="#">
                  <img src="../../assets/images/home_77.jpg" />
                </a>
                <p>个人助理</p>
              </div>
              <div>
                <a href="#">
                  <img src="../../assets/images/home_78.jpg" />
                </a>
                <p>ETC电子卡钟</p>
              </div>
              <div>
                <a href="#">
                  <img src="../../assets/images/home_81.jpg" />
                </a>
                <p>OA系统</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 国情大事 -->
      <div class="guoqing">
        <div class="geng" @click="more()">更多</div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="mei">
          <el-tab-pane label="国情在线" name="first">
            <div class="tab-box">
              <ul @click=" more()">
                <li>
                  <a href="javascript:">
                    <img src="../../assets/images/jiantou.jpg" />"协力共赢 决战2017"暨2017年北京美联第三季度主管会圆满落幕！
                  </a>
                  <img
                    src="../../assets/images/index_18.jpg"
                    style="height: 9px;width: 23px;display: inline-block;padding-bottom:9px;cursor: pointer;"
                  />
                  <span>[2010-11-05]</span>
                </li>
                <li>
                  <a href="javascript:">
                    <img src="../../assets/images/jiantou.jpg" />金秋在美联 十月齐欢乐丨北京美联2017年10月后勤拓展活动感谢张董来京
                  </a>
                  <img
                    src="../../assets/images/index_18.jpg"
                    style="height: 9px;width: 23px;display: inline-block;padding-bottom:9px;cursor: pointer;"
                  />
                  <span>[2010-11-05]</span>
                </li>
                <li>
                  <a href="javascript:">
                    <img src="../../assets/images/jiantou.jpg" />北京区董事总经理白纪远先生入职10周年纪念日
                  </a>
                  <img
                    src="../../assets/images/index_18.jpg"
                    style="height: 9px;width: 23px;display: inline-block;padding-bottom:9px;cursor: pointer;"
                  />
                  <span>[2010-11-05]</span>
                </li>
                <li>
                  <a href="javascript:">
                    <img src="../../assets/images/jiantou.jpg" />“相约五月 欢乐同行” 暨2017年北京美联第一届后勤活动
                  </a>
                  <span>[2010-11-05]</span>
                </li>
                <li>
                  <a href="javascript:">
                    <img src="../../assets/images/jiantou.jpg" />聚力前行 | 重庆美联精英代表团赴北京美联物业交流学习之旅圆满成功！
                  </a>
                  <span>[2010-11-05]</span>
                </li>
                <li>
                  <a href="javascript:">
                    <img src="../../assets/images/jiantou.jpg" />捷报传来！恭喜北京美联物业2016年10月实现业绩&实收双盈
                  </a>
                  <span>[2010-11-05]</span>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="情报快递" name="second">
            <div class="tab-box">
              <ul @click=" more()">
                <li>
                  <a href="javascript:">
                    <img src="../../assets/images/jiantou.jpg" />"协力共赢 决战2017"暨2017年北京美联第三季度主管会圆满落幕！
                  </a>
                  <img
                    src="../../assets/images/index_18.jpg"
                    style="height: 9px;width: 23px;display: inline-block;padding-bottom:9px;cursor: pointer;"
                  />
                  <span>[2010-11-05]</span>
                </li>
                <li>
                  <a href="javascript:">
                    <img src="../../assets/images/jiantou.jpg" />“相约五月 欢乐同行” 暨2017年北京美联第一届后勤活动
                  </a>
                  <img
                    src="../../assets/images/index_18.jpg"
                    style="height: 9px;width: 23px;display: inline-block;padding-bottom:9px;cursor: pointer;"
                  />
                  <span>[2010-11-05]</span>
                </li>
                <li>
                  <a href="javascript:">
                    <img src="../../assets/images/jiantou.jpg" />北京区董事总经理白纪远先生入职10周年纪念日
                  </a>
                  <img
                    src="../../assets/images/index_18.jpg"
                    style="height: 9px;width: 23px;display: inline-block;padding-bottom:9px;cursor: pointer;"
                  />
                  <span>[2010-11-05]</span>
                </li>
                <li>
                  <a href="javascript:">
                    <img src="../../assets/images/jiantou.jpg" />“相约五月 欢乐同行” 暨2017年北京美联第一届后勤活动
                  </a>
                  <span>[2010-11-05]</span>
                </li>
                <li>
                  <a href="javascript:">
                    <img src="../../assets/images/jiantou.jpg" />聚力前行 | 重庆美联精英代表团赴北京美联物业交流学习之旅圆满成功！
                  </a>
                  <span>[2010-11-05]</span>
                </li>
                <li>
                  <a href="javascript:">
                    <img src="../../assets/images/jiantou.jpg" />捷报传来！恭喜北京美联物业2016年10月实现业绩&实收双盈
                  </a>
                  <span>[2010-11-05]</span>
                </li>
              </ul>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div class="right">
          <img src="../../assets/images/home_94.jpg" alt />
        </div>
        <div>
          <img src="../../assets/images/home_92.jpg" alt />
        </div>
      </div>

      <!-- 销售技巧 -->
      <div class="jiqiao">
        <div class="jiqiao_left">
          <div class="left_top">
            <img src="../../assets/images/home_98.jpg" />
          </div>
          <div class="left_bottom">
            <div class="div_1" style="width:263px;">
              <img src="../../assets/images/home4_03.jpg" />
            </div>
            <div class="div_2">
              <div class="dome_top"></div>
              <marquee
                behavior="scroll"
                direction="up"
                loop="-1"
                scrollamount="3"
                onMouseOut="this.start()"
                onMouseOver="this.stop()"
              >
                <div class="dome_bot" id="dome">
                  <div id="dome1">
                    <ul class="box">
                      <li class="divs inner-container">
                        <div class="divs_pic">
                          <img src="../../assets/images/br_06.jpg" />
                        </div>
                        <span></span>
                        <div class="divs_zhufu">
                          <img src="../../assets/images/sr3_03.jpg" />生日快乐
                          <img src="../../assets/images/sr3_05.jpg" />
                        </div>
                      </li>
                      <li class="divs">
                        <div class="divs_pic">
                          <img src="../../assets/images/sr2_03.jpg" />
                        </div>
                        <span></span>
                        <div class="divs_zhufu">
                          生日快乐
                          <img src="../../assets/images/sr3_03.jpg" />
                          <img src="../../assets/images/sr3_07.jpg" />
                        </div>
                      </li>
                      <li class="divs">
                        <div class="divs_pic">
                          <img src="../../assets/images/sr2_06.jpg" />
                        </div>
                        <span></span>
                        <div class="divs_zhufu">
                          生日快乐
                          <img src="../../assets/images/sr3_07.jpg" />
                        </div>
                      </li>
                      <li class="divs">
                        <div class="divs_pic">
                          <img src="../../assets/images/sr2_08.jpg" />
                        </div>
                        <span></span>
                        <div class="divs_zhufu">
                          <img src="../../assets/images/sr3_03.jpg" />
                          <img src="../../assets/images/sr3_13.jpg" />生日快乐
                        </div>
                      </li>
                      <li class="divs">
                        <div class="divs_pic">
                          <img src="../../assets/images/br_06.jpg" />
                        </div>
                        <span></span>
                        <div class="divs_zhufu">
                          生日快乐
                          <img src="../../assets/images/sr3_13.jpg" />
                        </div>
                      </li>
                      <li class="divs">
                        <div class="divs_pic">
                          <img src="../../assets/images/sr2_03.jpg" />
                        </div>
                        <span></span>
                        <div class="divs_zhufu">
                          <img src="../../assets/images/sr3_13.jpg" />生日快乐
                        </div>
                      </li>
                      <li class="divs">
                        <div class="divs_pic">
                          <img src="../../assets/images/sr2_06.jpg" />
                        </div>
                        <span></span>
                        <div class="divs_zhufu">
                          生日快乐
                          <img src="../../assets/images/sr3_03.jpg" />
                          <img src="../../assets/images/sr3_07.jpg" />
                        </div>
                      </li>
                      <li class="divs">
                        <div class="divs_pic">
                          <img src="../../assets/images/sr2_08.jpg" />
                        </div>
                        <span></span>
                        <div class="divs_zhufu">
                          <img src="../../assets/images/sr3_03.jpg" />生日快乐
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div id="dome2"></div>
                </div>
              </marquee>
            </div>
            <div class="div_3">
              <img src="../../assets/images/index_22.jpg" alt />
            </div>
          </div>
        </div>
        <div class="jiqiao_right">
          <div class="right_top">
            <img src="../../assets/images/home_101.jpg" alt />
          </div>
          <div class="right_bottom">
            <div class="bottom_1">
              <a href="#">
                <img src="../../assets/images/home_105.jpg" />
              </a>
              <p>购房资格测试</p>
            </div>
            <div class="bottom_2">
              <a href="#">
                <img src="../../assets/images/home_107.jpg" />
              </a>
              <p>房贷计算器</p>
            </div>
            <div class="bottom_1">
              <a href="#">
                <img src="../../assets/images/home_109.jpg" />
              </a>
              <p>税费计算器</p>
            </div>
          </div>
          <div class="right_bottom">
            <div class="bottom_1">
              <a href="#">
                <img src="../../assets/images/home_125.jpg" />
              </a>
              <p>网上佣纸</p>
            </div>
            <div class="bottom_2">
              <a href="#">
                <img src="../../assets/images/home_127.jpg" />
              </a>
              <p>网上粮单</p>
            </div>
            <div class="bottom_1">
              <a href="#">
                <img src="../../assets/images/home_124.jpg" />
              </a>
              <p>电子邮件</p>
            </div>
          </div>
          <div class="right_bottom">
            <div class="bottom_1">
              <a href="#">
                <img src="../../assets/images/home_136.jpg" />
              </a>
              <p>通讯录</p>
            </div>
            <div class="bottom_2">
              <a href="#">
                <img src="../../assets/images/home_133.jpg" />
              </a>
              <p>本月寿星</p>
            </div>
            <div class="bottom_1">
              <a href="#">
                <img src="../../assets/images/home_139.jpg" />
              </a>
              <p>更改个人资料</p>
            </div>
          </div>
          <div class="right_bottom">
            <div class="bottom_1">
              <a href="#">
                <img src="../../assets/images/home_151.jpg" />
              </a>
              <p>用车申请</p>
            </div>
            <div class="bottom_2">
              <a href="#">
                <img src="../../assets/images/home_150.jpg" />
              </a>
              <p>会议申请</p>
            </div>
            <div class="bottom_1">
              <a href="#">
                <img src="../../assets/images/home_145.jpg" />
              </a>
              <p>迟到榜</p>
            </div>
          </div>
        </div>
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
  name: 'TestTwo',
  created() {},
  mounted() {
    this.drawLine()
    // 柱状图
  },
  data() {
    return {
      activeName: 'first',
      input: '',
      optionline: {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['一手营业部', '营业一部', '营业二部', '交易管理部']
        },
        grid: {
          left: '1%',
          right: '4%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['一月', '三月', '五月', '七月', '九月', '十一月']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '一手营业部',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210],
            color: ['#36e0fa']
          },
          {
            name: '营业一部',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310],
            color: ['#fa25f8']
          },
          {
            name: '营业二部',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410],
            color: ['#046cf9']
          },
          {
            name: '交易管理部',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320],
            color: ['#12cf03']
          }
        ]
      },
      optionbar: {
         grid:{
               top:'28%',//距上边距

              },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          },
        },
        
        legend: {
          data: [ '一手成交房套数','二手成交房套数', '一手成交房面积', '', '二手成交房面积']
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月'
            ],
            axisPointer: {
              type: 'shadow'
            },

          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value} '
            }
            
          },
          {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '一手成交房套数',
            type: 'bar',
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ],
             color: ['#0582e5']
          },
          {
            name: '二手成交房套数',
            type: 'bar',
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ],
            color: ['#24791f']
          },
          {
            name: '一手成交房面积',
            type: 'line',
            // yAxisIndex: 1,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ],
            color: ['#47c3f3']
          },
          {
            name: '二手成交房面积',
            type: 'line',
            yAxisIndex: 1,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ],
             color: ['#71ad49']
          }
        ]
      }
    }
  },
  methods: {
    drawLine: function() {
      //基于准本好的DOM，初始化echarts实例
      let chartmainline = this.$echarts.init(
        document.getElementById('chartmainline')
      )
      let chartmainbar = this.$echarts.init(
        document.getElementById('chartmainbar')
      )
      //绘制图表
      chartmainline.setOption(this.optionline)
      chartmainbar.setOption(this.optionbar)
    },

    more() {
      this.$router.push('/index/market')
    },
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="less" >
/*文字无缝滚动*/
@keyframes play-state {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-150px);
  }
}
.jiqiao {
  width: 1155px;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .jiqiao_left {
    width: 840px;
    height: 414px;
    .left_bottom {
      display: flex;
      width: 100%;
      width: 840px;
      height: 275px;
      margin-top: 15px;
      .div_1 {
        flex: 1;
        width: 30%;
      }
      .div_2 {
        width: 275px;
        height: 275px;
        margin-right: 10px;
        background: url(../../assets/images/home4_05.jpg) no-repeat;
        background-size: 100% 100%;
        overflow: hidden;
        .dome_top {
          height: 83px;
          width: 285px;
        }
        .dome_bot {
          height: 191px;
          width: 285px;
          overflow: hidden;
          #dome1 {
            width: 196px;
            height: 191px;
            margin-left: 28px;
            margin-top: 100px;
            margin-bottom: 16px;
            .divs {
              list-style: none;
              width: 193px;
              height: 35px;
              margin-bottom: 16px;
              animation: play-state 5s linear;
              animation-fill-mode: forwards;
              cursor: pointer;
              .divs_pic {
                width: 32px;
                height: 32px;
                border: 1px solid #fff;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
            span {
              display: block;
              width: 0;
              height: 0;
              border-width: 5px 5px 5px 0;
              border-style: solid;
              border-color: transparent #fff transparent transparent;
              margin-top: -24px;
              margin-left: 45px;
            }
            .divs_zhufu {
              width: 137px;
              height: 33px;
              background: #fff;
              margin-top: -20px;
              margin-left: 50px;
              line-height: 33px;
              font-size: 14px;
              color: #464646;
              padding-left: 7px;
              border-radius: 5px;

              img {
                line-height: 33px;
                font-size: 14px;
                color: #464646;
              }
            }
          }
          #dome2 {
            margin-top: 15px;
            height: 191px;
            margin-left: 28px;
          }
        }
      }
    }
  }

  .jiqiao_right {
    margin-left: 14px;
    width: 300px;
    height: 414px;
    .right_bottom {
      display: flex;
      width: 300px;
      height: 85px;
      margin-top: 10px;
      .bottom_1 {
        flex: 3;
        width: 88px;
        height: 81px;
        border: 1px solid #e3e3e3;
        display: block;
        img {
          display: block;
          width: 38px;
          height: 40px;
          margin: 9px auto;
        }
        p {
          font-size: 13px;
          text-align: center;
        }
      }
      .bottom_2 {
        width: 88px;
        height: 81px;
        margin-left: 10px;
        margin-right: 10px;
        border: 1px solid #e3e3e3;
        text-align: center;
        font-size: 13px;
        img {
          display: inline-block;
          width: 38px;
          height: 40px;
          margin: 9px auto;
        }
      }
    }
  }
}

// 统计图

.mains_y {
  margin-top: 10px;
  display: flex;
  .mains_a {
    position: relative;
    width: 414px;
    height: 300px;
    margin-right: 15px;
    background: url('../../assets/images/zhu_06.jpg') no-repeat;
    i {
      width: 280px;
      display: inline-block;
      margin-left: 18px;
      height: 33px;
      border-bottom: 2px solid #02707d;
    }
    .mains_a1 {
      position: absolute;
      right: 16px;
      top: 12px;
      font-size: 12px;
      text-align: right;
      color: #5e5e5e;
      cursor: pointer;
      width: 100px;
      height: 22px;
      border-bottom: 1px solid #02707d;
    }
    .mains_a2 {
      margin-top: 2px;
      margin-left: 20px;
      font-size: 14px;

      .mains_a3 {
        color: #828282;
      }
      .mains_a4 {
        font-weight: 600;
      }
      select {
        margin-left: 142px;
      }
    }
  }
  .mains_b {
    position: relative;
    width: 414px;
    height: 300px;
    background: url('../../assets/images/zhu_03.jpg') no-repeat;
    i {
      width: 285px;
      display: inline-block;
      margin-left: 18px;
      height: 33px;
      border-bottom: 2px solid #02707d;
    }
    .mains_a1 {
      position: absolute;
      right: 16px;
      top: 12px;
      font-size: 12px;
      text-align: right;
      color: #5e5e5e;
      cursor: pointer;
      width: 100px;
      height: 22px;
      border-bottom: 1px solid #02707d;
    }
  }
}
#chartmainline div canvas {
  position: absolute;
  left: 0;
  bottom: 0px !important;
}
//  国情在线
.guoqing {
  width: 1155px;
  margin-top: 14px;
  display: flex;
  position: relative;
  .geng {
    border: 0;
    position: absolute;
    color: #431201;
    background-color: #fff7e8 !important;
    text-decoration: none;
    right: 596px;
    top: 14px;
    border: 0px;
    z-index: 100;
    font-family: 'STHeiti';
    cursor: pointer;
  }
  .right {
    margin-left: 12px;
    margin-right: 14px;
  }
}

// 美联大事
.tab-box ul {
  border: 1px solid #c7c7c7;
  li {
    font-size: 14px;
    height: 34px;
    width: 546px;
    margin: 0 auto;
    font-family: SimSun;
    line-height: 34px;
    list-style: none;
    border-bottom: 1px dashed #c7c7c7;
    a {
      height: 29px;
      color: #454545;
      font-weight: 600;
      display: inline-block;
      width: 400px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-decoration: none;
    }
    img {
      margin-right: 10px;
      font-family: 'Microsoft YaHei';
    }
    span {
      float: right;
      color: gray;
    }
  }
}
.tab-box ul li:last-child {
  border-bottom: 0;
}
.tab-box ul li a:hover {
  color: #9e9d9d;
}
.el-tabs--card > .el-tabs__header .el-tabs__item {
  transition: color 0s cubic-bezier(0.645, 0.045, 0.355, 1),
    padding 0s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.el-tabs__item {
  width: 140px;
  height: 42px;
  font-size: 20px;
  font-family: FZZZHONGJW--GB1-0;
  font-weight: 700;
  font-style: italic;
  line-height: 42px;
  color: rgba(67, 18, 1, 1);
  background: linear-gradient(
    to right,
    rgba(67, 18, 1, 1) 0%,
    rgba(168, 58, 3, 1) 100%
  );
  -webkit-background-clip: text;
  color: transparent;
}
.el-tabs__item:hover {
  color: rgba(67, 18, 1, 1);
  background: linear-gradient(
    to right,
    rgba(67, 18, 1, 1) 0%,
    rgba(168, 58, 3, 1) 100%
  );
  -webkit-background-clip: text;
  color: transparent;
}
.el-tabs__item.is-active {
  color: rgba(67, 18, 1, 1);
  background: linear-gradient(
    to right,
    rgba(67, 18, 1, 1) 0%,
    rgba(168, 58, 3, 1) 100%
  );
  -webkit-background-clip: text;
  background: url('../../assets/images/home_19.jpg');
}

.el-tabs--top {
  width: 579px;
}
.el-tabs__header {
  margin-bottom: 0;
  background-color: #fff7e8;
}
.el-tabs__nav-scroll {
  border-top: 1px solid #c7c7c7;
  border-right: 1px solid #c7c7c7;
  border-left: 1px solid #c7c7c7;
}
.meilian {
  display: flex;
  position: relative;
  width: 830px;

  margin-top: 12px;
  .right {
    margin-left: 12px;
    width: 20%;
  }
  .meilian_1 {
    position: relative;
    margin-right: 22px;
    display: flex;
    flex-wrap: wrap;
    width: 830px;
    width: 100%;
  }
  .geng {
    position: absolute;
    color: #431201;
    background-color: #fff7e8;
    text-decoration: none;
    right: 274px;
    top: 14px;
    border: 0px;
    z-index: 100;
    font-family: 'STHeiti';
    cursor: pointer;
  }
  .right_2 {
    width: 300px;
    height: 555px;
    background: url('../../assets/images/qiye2_03.jpg') no-repeat;
    .qiye {
      border-right: 1px solid #d0cece;
      border-bottom: 1px solid #d0cece;
      width: 300px;
      height: 486px;
      .qian {
        width: 280px;
        height: 75px;
        margin: 80px auto;
        display: flex;
        font-family: 'Microsoft YaHei';
        a {
          text-decoration: none;
          img {
            width: 55px;
            height: 50px;
            margin-top: 12px;
            margin-left: 15px;
            margin-bottom: 5px;
          }
        }
      }
      .hou {
        width: 280px;
        height: 0px;
        margin: 80px auto;
        display: flex;
        margin-bottom: 12px;
        a {
          text-decoration: none;
          font-family: 'Microsoft YaHei';
          img {
            width: 55px;
            height: 50px;
            margin-left: 15px;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
}
.qiye .qian div p,
.qiye .hou div p {
  font-size: 14px;
  text-align: center;
  font-family: 'Microsoft YaHei';
}
.qiye .hou div:nth-child(1),
.qiye .qian div:nth-child(1) {
  margin-left: 10px;
}
.qiye .hou div,
.qiye .qian div {
  height: 100%;
  width: 33%;
}

// .meilian .meilian_1{
//    width: 30px;
//   height: 20px;
//  cursor: pointer;
// }
// .meilian span{
//  position: absolute;
//  right: 22px;
//  top: 10px;
//  font-size: 15px;
// }
.el-tabs--card > .el-tabs__header {
  width: 579px;
  border-bottom: 0;
}
.test_two_box {
  margin-left: 12px;
}
.myVideo {
  height: 281px;
}
.paihang {
  margin-top: 15px;
  display: flex;
}

// 美联排行榜
.jy {
  width: 841px;
  height: 280px;
  cursor: pointer;
  background-size: 100%;
  background: url('../../assets/images/jingy_03.jpg') left top no-repeat;
  p {
    font-size: 13px;
    color: #393939;
    text-align: right;
    margin-right: 15px;
    padding-top: 17px;
  }
  .ge,
  .zu,
  .pian {
    width: 267px;
    height: 223px;
    display: inline-block;
    margin-left: 9px;
    margin-top: 5px;
  }
  .zu,
  .pian {
    margin-left: 2px;
  }
}
.jy {
  .head {
    width: 247px;
    height: 37px;
    margin-top: 5px;
    li {
      float: left;
      list-style: none;
      font-weight: 600;
      width: 121px;
      font-size: 16px;
      text-align: center;
      line-height: 37px;
      font-family: 'SimSun';
    }
  }
  .body {
    width: 247px;
    height: 43px;
    margin-top: 16px;
    li {
      float: left;
      list-style: none;
      line-height: 43px;
      font-weight: 600;
      font-size: 16px;
      text-align: center;

      font-family: 'SimSun';
    }
  }
}

.jy .head li:first-child {
  margin-left: 5px;
}
.jy .body li:first-child {
  width: 24px;
  text-align: center;
  font-weight: bolder;
  font-style: italic;
  font-size: 18px;
  color: #bababa;
  margin-left: 15px;
}
.jy .body li:nth-child(2) {
  width: 50px;
  text-align: center;
  font-weight: bolder;
  font-size: 14px;
  color: #000;
  margin-right: 8px;
}
.jy .body li:nth-child(3) {
  width: 41px;
  height: 37px;
  margin-right: 14px;
}
.jy .body li:nth-child(3) div {
  width: 41px;
  height: 37px;
  border: 2px solid #fce704;
  border-radius: 50%;
  overflow: hidden;
}
// 轮播图部分
.banner_a {
  padding-left: 20px;
}
.banner {
  width: 1155px;
  margin-top: 16px;
  display: flex;
  .banner1 {
    p {
      font-weight: 700;
    }
    .xiangqing {
      width: 580px;
      position: relative;
      font-size: 13px;
      cursor: pointer;
      p {
        color: #545454;
        width: 468px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-family: 'STSong';
        padding-top: 10px;
        padding-left: 20px;
        letter-spacing: -1px;
      }
      span {
        position: absolute;
        font-family: 'STSong';
        right: 20px;
        bottom: 2px;
        color: #c74b04;
      }
    }
  }
  .banner2 {
    ul {
      display: flex;
      width: 574px;
      width: 100%;
      flex-wrap: wrap;
      li {
        flex: 2;
        width: 288px;
        list-style: none;
        position: relative;
        .yunhe {
          height: 46px;
          position: absolute;
          bottom: -2px;
          color: #fff;
          font-size: 12px;
          padding-left: 20px;
          cursor: pointer;
          p {
            font-family: 'MicrosoftJhengHei';
            font-weight: 600;
          }
          span {
            font-weight: 400;
            font-family: 'STSong';
          }
        }
        .ding {
          display: block;
          width: 285px;
          height: 46px;
          position: absolute;
          bottom: 3px;
          background-color: #000;
          opacity: 0.5;
        }
      }
    }
  }
}

// 搜索部分
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
