<template>
  <div class="home">
    <div class="top">
      <div class="topimg">
        <img src="@/assets/images/English_logo_white.png" alt=""/>
      </div>
      <span @click="openContactModal">Contact us</span>
    </div>
    <div class="video-box">
      <video id="video" loop muted autoplay :src="videoUrl" tabindex="-1"></video>
    </div>
    <div class="product-list">
      <div class="font28 ul-title"><b>Face Mask</b></div>
      <ul class="list">
        <li class="item border1px" v-for="(item, index) of productList1" :key="index">
          <img class="fl" :src="item.imgUrl" alt="">
          <div class="fl p-box">
            <p class="p1 font22">{{item.p1}}</p>
            <p class="p2 font18 col999">{{item.p2}}</p>
            <p class="font18 fontbold">{{item.p3}}</p>
            <p class="p3 font20"><span @click="showDetail(item)">Details</span></p>
          </div>
        </li>
      </ul>
      <div class="font28 ul-title"><b>Sterile Wipes</b></div>
      <ul class="list">
        <li class="item border1px" v-for="(item, index) of productList2" :key="index">
          <img class="fl" :src="item.imgUrl" alt="">
          <div class="fl p-box">
            <p class="p1 font22">{{item.p1}}</p>
            <p class="p2 font18 col999">{{item.p2}}</p>
            <p class="font18 fontbold">{{item.p3}}</p>
            <p class="p3 font20"><span @click="showDetail(item)">Details</span></p>
          </div>
        </li>
      </ul>
    </div>
    <div class="product-list news">
      <div class="font28 ul-title"><b>NEWS</b></div>
      <ul class="list">
        <li class="item border1px" v-for="(item, index) of productList2" :key="index">
          <img class="fl" :src="item.imgUrl" alt="">
          <div class="fl p-box">
            <p class="p1 font22">{{item.p1}}</p>
            <p class="p2 font18 col90C6FF">{{item.p2}}</p>
            <p class="p3 font20"><span @click="showDetail(item)">Details</span></p>
          </div>
        </li>
      </ul>
    </div>
    <div class="about">
      <div class="ul-title">
        <div style="line-height: 0.4rem;"><b class="font24">ABOUT FANJIA HEALTHCARE</b></div>
        <p class="font16 col999">GUARDIAN OF HAPPY LIFE</p>
      </div>
      <p class="font16 about-txt">
        Zhejiang FANJIA Medical Equipment Co., Ltd. is located in Hangzhou, Zhejiang, China. Approved by the
        government which aims to build a FANJIA Super Factory with 300 million yuan investment by FANJIA
        Holding. It possesses 14,000 ㎡ ten-thousand-level cleaning workshops, 2,000 ㎡ laboratories, and
        certification of ISO9001, ISO13485, which is evotedto the R&D and intelligent manufacturing of
        healthcare products like masks, disinfecting wipes and protective clothing, 60 intelligent N95 masks
        production lines have been established with the yearly output of 1 billion of N95 protective masks.
        protective clothing, 60 intelligent N95 masks production lines have been established with the yearly
        output of 1 billion of N95 protective masks.
      </p>
      <div class="pic">
        <img src="@/assets/images/h5/aboutus01.png" alt="">
        <img src="@/assets/images/h5/aboutus02.png" alt="">
        <img src="@/assets/images/h5/aboutus03.png" alt="">
        <img src="@/assets/images/h5/aboutus04.png" alt="">
      </div>
    </div>
    <div class="contact-us">
      <div>
        <div class="ul-title">
          <p><b class="font26">Contact us</b></p>
        </div>
        <p><span>Factory Address：</span>399 Qingliu Road South, Jingjiang Street, Xiaoshan District, Hangzhou
          City, Zhejiang Province</p>
        <p><span>Customer Service Hotline：</span>+86 0571-82186777</p>
        <p><span>Email：</span>healthcare@fanjia.net</p>
        <p><span>facebook：</span>healthcare@fanjia.net</p>
        <p><span>whatsapp：</span>healthcare@fanjia.net</p>
        <p><span>skype：</span>healthcare@fanjia.net</p>
      </div>
    </div>
    <footer>
      <div>Terms of service | Privacy Statement</div>
      <div>Copy Right@2007-2016 浙江泛嘉医疗器械有限责任公司</div>
    </footer>

    <div class="modal" v-show="showModal">
      <div class="modal-box">
        <img class="close_icon" src="@/assets/images/close.png" alt="" @click="showModal = false">
        <div class="roll-container clearFix">
          <img :src="details.imgUrl" alt="">
          <div class="font24 txt col666">
            <p class="font28 fontbold col333">{{details.p1}}</p>
            <p v-if="details.standard">Standard：{{details.standard}}</p>
            <p>{{details.p2}}</p>
            <p>Size：{{details.size}}</p>
            <p v-if="details.pfe">{{details.pfe}}</p>
            <p v-if="details.se">Sterilization Efficiency：{{details.se}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="layerbox" v-if="layerContactShow">
      <div class="contact-us-box font24">
        <img class="close_icon" src="@/assets/images/close.png" alt="" @click="layerContactShow = false">
        <div class="font30"><b>Contact us</b></div>
        <div class="input-div border1px"><span>Name:</span><input type="text" v-model="formData.name"
                                                                  autocomplete="off" style="padding-left: 0.8rem;">
        </div>
        <div class="input-div border1px"><span>Company name:</span><input type="text" v-model="formData.companyName"
                                                                          autocomplete="off"
                                                                          style="padding-left: 1.85rem;"></div>
        <div class="input-div border1px"><span>Phone number:</span><input type="text" v-model="formData.phoneNumber"
                                                                          autocomplete="off"
                                                                          style="padding-left: 1.75rem;"></div>
        <div class="input-div border1px"><span>Email:</span><input type="text" v-model="formData.email"
                                                                   autocomplete="off" style="padding-left: 0.75rem;">
        </div>
        <div class="submit-btn font28" @click="submit">Submit</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {ReponseResult} from "@/domain/Request";
  import {service} from "@/services/api";

  @Component({
    name: "HomeApp",
    components: {},
  })
  export default class Home extends Vue {
    private videoUrl: any = require("@/assets/fanjiayiliao20201123_16.mp4");
    private showModal: any = false;
    private productList1: any = [{
      imgUrl: require('@/assets/images/pc/mask01.png'),
      p1: 'Disposable Protective Mask (FFP2）',
      p2: 'Specification：1Piece/Bag，20PCS/BOX',
      p3: '',
      size: '110mm*150mm（±5mm）',standard: 'EN149:2001+A1:2019 FFP2 NR',pfe: 'PFE ≥ 94%'
    }, {
      imgUrl: require('@/assets/images/pc/mask02.png'),
      p1: 'Disposable Protective Mask',
      p2: 'Specification：Single package，20PCS/BOX',
      p3: 'GB 2626-2019',
      size: '110mm*150mm',standard: 'GB2626-2019',pfe: 'PFE ≥ 95%'
    }, {
      imgUrl: require('@/assets/images/pc/mask03.png'),
      p1: 'Disposable Non-Medical Face Mask（KN95）',
      p2: 'Specification：Single package，20PCS/BOX',
      p3: '',
      size: '105mm*160mm',standard: 'GB2626-2006',pfe: 'PFE ≥ 95%'
    }];
    private productList2: any = [{
      imgUrl: require('@/assets/images/pc/wipes01.png'),
      p1: '0.13% Benzalkonium chloride Sanitizing Wipes',
      p2: 'Specification：160PCS/Canister',
      p3: '',
      size: '150mm*180mm',se: '99.9%',
    }, {
      imgUrl: require('@/assets/images/pc/wipes02.png'), p1: '75% Alcohol Sanitizing Wipes', p2: 'Specification：160PCS/Canister', p3: '',
      size: '150mm*180mm',se: '99.9%',
    }, {
      imgUrl: require('@/assets/images/pc/wipes03.png'),
      p1: '75% Isopropanol Sanitizing Wipes',
      p2: 'Specification：160PCS/Canister',
      p3: '',
      size: '150mm*180mm',se: '99.9%',
    }];
    private details: any = {imgUrl: '',p1: '', p2: '', p3: '', size: '',standard: '',pfe: '',se: '',};
    private layerContactShow = false;
    private formData: any = {
      name: "",
      companyName: "",
      phoneNumber: "",
      email: "",
    };

    created() {
    }

    mounted() {
    }

    showDetail(item: any) {
      this.details = item;
      this.showModal = true;
    }
    openContactModal(){
      this.formData = {
        name: "",
        companyName: "",
        phoneNumber: "",
        email: "",
      };
      this.layerContactShow = true;
    }
    submit(){
      this.layerContactShow = false;
    }
  }
</script>
<style lang="less" scoped>
  .home {background: #fff;width: 100%;height: 100%;color:#333;
    .ul-title{padding:0.3rem 0.2rem 0;}
    .top {background: #0a6cd5;height: 0.9rem;line-height: 0.9rem;padding: 0 0.24rem;display: flex;
      img {width: 3rem;margin-top:-0.18rem;}
      span {font-size: 0.28rem;font-family: PingFang SC;color: #fff;margin-left: auto;}
    }
    .video-box{background:#333;
      video{width:100%;display: block;outline: none;}
    }
    .product-list{
      .list{
        .item{display: flex;padding:0.2rem;
          img{width:2.8rem;height:2rem;margin-right:0.3rem;}
          .p-box{flex:1;position: relative;
            p{margin-bottom:0.1rem;}
            .p1{margin-top:0.1rem;}
            .p3{color:#2A86E8;text-align: right;margin-bottom: 0;position: absolute;right:0;bottom: 0;}
          }
        }
      }
    }
    .news{background: #2A86E8;color:#fff;padding-bottom:0.1rem;
      .border1px:before{background-color: #1571D3;}
      .p3{color:#fff!important;}
    }
    .about{padding:0.2rem 0.3rem;
      .ul-title{padding: 0;}
      .about-txt{line-height: 0.36rem;margin:0.2rem 0 0.3rem;}
      .pic {width: 100%;height: auto;overflow: hidden;
        img {margin-bottom: 0.16rem;width: 50%;float: left;}
        img:nth-child(2n + 1) {padding-right: 0.08rem;}
        img:nth-child(2n) {padding-left: 0.08rem;}
      }
    }
    .contact-us{background: #262829;color:#fff;padding:0.2rem;
      .ul-title{padding: 0.2rem 0;}
      p{font-size:0.19rem;line-height:0.36rem;margin-bottom: 0.1rem;
        span{color:#B2D7FF;}
      }
    }
    footer{background:#1E1E1E;color:#fff;text-align: center;padding:0.2rem 0 0.3rem;
      div{font-size: 0.16rem;line-height: 0.36rem;}
    }
    .modal{position: fixed;z-index: 9999;background: rgba(0,0,0,.6);left: 0;bottom: 0;width: 100%;height: 100%;transform-origin: 90% 100%;transition: all 0.5s ease;opacity: 1;
      .modal-box{width:6.8rem;background:#fff;position:fixed;left:50%;top:50%;transform: translate(-50%,-50%);border-radius: 0.12rem;
        .close_icon{position:absolute;width:0.24rem;top:0.2rem;right:0.2rem;cursor: pointer;}
        .roll-container{
          img{width:100%;border-top-left-radius: 0.12rem;border-top-right-radius: 0.12rem;}
          .txt {padding:0.4rem 0.33rem;line-height: 0.4rem;
            p:first-child{line-height: 0.6rem;}
          }
        }
      }
    }
    .layerbox {position: fixed;top: 0;left: 0;bottom: 0;right: 0;z-index: 11;background: rgba(0, 0, 0, 0.75);
      .contact-us-box {position: absolute;width: 5.8rem;left:50%;top:50%;transform: translate(-50%,-50%);background: #fff;padding:0.33rem 0.3rem;border-radius: 0.12rem;
        .close_icon{position:absolute;width:0.2rem;top:0.25rem;right:0.25rem;}
        .input-div{height:0.6rem;line-height: 0.6rem;margin-top:0.2rem;position:relative;
          span{color:#999;position:absolute;}
          input{padding:0 0.05rem;line-height: 0.36rem;width:100%;outline: none;font-size: 0.24rem;}
        }
        .submit-btn{height:0.8rem;line-height:0.8rem;border-radius: 0.4rem;text-align:center;background:#2A86E8;color:#fff;margin-top:0.4rem;}
      }
    }
  }

</style>
