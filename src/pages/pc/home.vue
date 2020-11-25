<template>
  <div class="home">
    <img class="english-logo-white" src="@/assets/images/English_logo_white.png" alt=""/>
    <div class="video-box">
      <video id="video" loop muted autoplay :src="videoUrl" tabindex="-1">
      </video>
    </div>
    <div class="product-list">
      <div class="font30pc ul-title"><b>Face Mask</b><span class="title_line"></span></div>
      <ul class="list clearFix">
        <li class="item" v-for="(item, index) of productList1" :key="index">
          <img :src="item.imgUrl" alt="">
          <div>
            <p class="p1">{{item.p1}}</p>
            <p class="p2">{{item.p2}}</p>
            <p class="font14pc fontbold">{{item.p3}}</p>
            <p class="p3"><span @click="showDetail(item)">Details</span></p>
          </div>
        </li>
      </ul>
      <div class="font30pc ul-title"><b>Sterile Wipes</b><span class="title_line"></span></div>
      <ul class="list clearFix">
        <li class="item" v-for="(item, index) of productList2" :key="index">
          <img :src="item.imgUrl" alt="">
          <div>
            <p class="p1">{{item.p1}}</p>
            <p class="p2">{{item.p2}}</p>
            <p class="font14pc fontbold">{{item.p3}}</p>
            <p class="p3"><span @click="showDetail(item)">Details</span></p>
          </div>
        </li>
      </ul>
    </div>
    <div class="news">
      <div class="font30pc ul-title"><b>NEWS</b><span class="title_line"></span></div>
      <div class="swiper-box">
        <img class="swiper-button swiper_left" src="@/assets/images/pc/swiper_left.png" alt=""/>
        <img class="swiper-button swiper_right" src="@/assets/images/pc/swiper_right.png" alt=""/>
        <div class="swiper-slide">
          <div class="item fl" v-for="(item,index) in swiperList" :key="index">
            <div class="front">
              <img :src="item.imgUrl"/>
              <div class="p-box">
                <p class="p1">{{item.txt1}}</p>
                <p class="p1">{{item.txt2}}</p>
                <p class="p3">{{item.time}}</p>
              </div>
            </div>
            <div class="modal-blue"></div>
          </div>
        </div>
        <!--<client-only>-->
          <!--<swiper-->
            <!--class="swiper"-->
            <!--:options="swiperOptions"-->
            <!--@ready="onSwiperRedied"-->
            <!--@clickSlide="onSwiperClickSlide"-->
            <!--@slideChangeTransitionStart="onSwiperSlideChangeTransitionStart">-->
            <!--<swiper-slide class="swiper-slide" v-for="(item,index) in swiperList" :key="index">-->
              <!--<div class="item">-->
                <!--<div class="front" :class="item.hoverIn === 0 ? '' : item.hoverIn === 1 ? 'front-hover' : 'front-leave'" @mouseenter="item.hoverIn = 1">-->
                  <!--<img :src="item.imgUrl"/>-->
                  <!--<div class="p-box">-->
                    <!--<p class="p1">{{item.txt1}}</p>-->
                    <!--<p class="p1">{{item.txt2}}</p>-->
                    <!--<p class="p3">{{item.time}}</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="back" :class="item.hoverIn === 0 ? '' : item.hoverIn === 1  ? 'back-hover' : 'back-leave'" @mouseleave="item.hoverIn = 2">-->
                  <!--<p class="p1"><b>01</b><span>JULY<br/>2020</span></p>-->
                  <!--<p class="p2">泛嘉医疗全球发布</p>-->
                  <!--<p class="p2">签约首批亿级订单</p>-->
                  <!--<p class="p3">18天建成口罩超级工厂，年产N9510亿只，为全球合作伙伴保驾护航。</p>-->
                <!--</div>-->
              <!--</div>-->
            <!--</swiper-slide>-->
            <!--<div class="swiper-button swiper-button-prev"></div>-->
            <!--<div class="swiper-button swiper-button-next"></div>-->
          <!--</swiper>-->
        <!--</client-only>-->
      </div>
    </div>
    <div class="about">
      <div class="font30pc ul-title">
        <div style="line-height: 56px;"><b>ABOUT FANJIA HEALTHCARE</b></div>
        <p class="font14pc col999">GUARDIAN OF HAPPY LIFE</p>
        <span class="title_line"></span>
      </div>
      <div class="about_1500 clearFix">
        <div class="left">
          <img src="@/assets/images/pc/aboutus01.png" alt="">
        </div>
        <div class="right">
          <p class="font16pc txt">
            Zhejiang FANJIA Medical Equipment Co., Ltd. is located in Hangzhou, Zhejiang, China. Approved by
            the government which aims to build a FANJIA Super Factory with 300 million yuan investment by
            FANJIA Holding. It possesses 14,000 ㎡ ten-thousand-level cleaning workshops, 2,000 ㎡
            laboratories, and certification of ISO9001, ISO13485, which is evotedto the R&D and intelligent
            manufacturing of healthcare products like masks, disinfecting wipes and protective clothing, 60
            intelligent N95 masks production lines have been established with the yearly output of 1 billion
            of N95 protective masks. protective clothing, 60 intelligent N95 masks production lines have
            been established with the yearly output of 1 billion of N95 protective masks.
          </p>
          <div class="pic clearFix">
            <img src="@/assets/images/pc/aboutus02.png" alt="">
            <img src="@/assets/images/pc/aboutus03.png" alt="">
            <img src="@/assets/images/pc/aboutus04.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="contact-us">
      <div class="contact_1500 clearFix">
        <div class="left">
          <p><span>Factory Address：</span>399 Qingliu Road South, Jingjiang Street, Xiaoshan District,
            Hangzhou City, Zhejiang Province</p>
          <p><span>Customer Service Hotline：</span>+86 0571-82186777</p>
          <p><span>Email：</span>healthcare@fanjia.net</p>
          <p><span>facebook：</span>healthcare@fanjia.net</p>
          <p><span>whatsapp：</span>healthcare@fanjia.net</p>
          <p><span>skype：</span>healthcare@fanjia.net</p>
          <div id="container" class="map"></div>
        </div>
        <div class="right">
          <div>Contact us</div>
          <div class="input-div"><span>Name:</span><input type="text" v-model="formData.name"
                                                          autocomplete="off" style="padding-left: 57px;">
          </div>
          <div class="input-div"><span>Company name:</span><input type="text" v-model="formData.companyName"
                                                                  autocomplete="off"
                                                                  style="padding-left: 127px;"></div>
          <div class="input-div"><span>Phone number:</span><input type="text" v-model="formData.phoneNumber"
                                                                  autocomplete="off"
                                                                  style="padding-left: 120px;"></div>
          <div class="input-div"><span>Email:</span><input type="text" v-model="formData.email"
                                                           autocomplete="off" style="padding-left: 52px;">
          </div>
          <div class="submit-btn" @click="submit">Submit</div>
        </div>
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
          <img class="fl" :src="details.imgUrl" alt="">
          <div class="fl font16pc txt">
            <p class="font24pc fontbold" style="margin: 20px 0 35px;">{{details.p1}}</p>
            <p v-if="details.standard">Standard：{{details.standard}}</p>
            <p>{{details.p2}}</p>
            <p>Size：{{details.size}}</p>
            <p v-if="details.pfe">{{details.pfe}}</p>
            <p v-if="details.se">Sterilization Efficiency：{{details.se}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {ReponseResult} from "@/domain/Request";
  import {service} from "@/services/api";
  export default {
    name: "Home",
    components: {},
    data() {
      return {
        map: null,
        videoUrl: require("@/assets/fanjiayiliao20201123_16.mp4"),
        formData: {
          name: "",
          companyName: "",
          phoneNumber: "",
          email: "",
        },
        showModal: false,
        productList1: [{
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
        }],
        productList2: [{
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
        }],
        details: {imgUrl: '',p1: '', p2: '', p3: '', size: '',standard: '',pfe: '',se: '',},
        swiperList: [{imgUrl: require('@/assets/images/pc/news1.png'),txt1: '泛嘉医疗全球发布',txt2:'签约首批亿级订单',time:'2020-05-12',hoverIn: 0},
          {imgUrl: require('@/assets/images/pc/news2.png'),txt1: '泛嘉发布',txt2:'签约首订单',time:'2020-02-12',hoverIn: 0},
          {imgUrl: require('@/assets/images/pc/news3.png'),txt1: '泛嘉医疗全球发布',txt2:'签约首批亿级订单',time:'2020-11-12',hoverIn: 0},
          {imgUrl: require('@/assets/images/pc/mask03.png'),txt1: '泛嘉布',txt2:'签约订单',time:'2020-11-22',hoverIn: 0},
          {imgUrl: require('@/assets/images/pc/wipes03.png'),txt1: '泛嘉医疗全球发布',txt2:'签约首批亿级订单',time:'2020-05-12',hoverIn: 0}],
        swiperOptions: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          autoplay: {
            delay: 4000,
            //当用户滑动图片后继续自动轮播
            disableOnInteraction: false,
          },
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          speed: 4000,
          centeredSlides: false,
        }
      };
    },
    created() {

    },
    mounted() {
      this.addMarker();
    },
    methods: {
      addMarker() {
        this.map = new AMap.Map("container", {
          resizeEnable: true,
          center: [120.476689, 30.241984], //120.476689, 30.241984
          zoom: 16,
        });
        this.map.clearMap();
        let marker = new AMap.Marker({
          map: this.map,
          position: [120.476689, 30.241984],
        });
        let title = "泛嘉医疗";
        let content = [];
        content.push("地址：杭州市萧山区靖江镇,浙江泛嘉医疗器械有限责任公司");
        content.push("电话：400-600-9666");
        let infoWindow = new AMap.InfoWindow({
          isCustom: true, //使用自定义窗体
          content: this.createInfoWindow(title, content.join("<br/>")),
          offset: new AMap.Pixel(16, -45),
        });
        //鼠标点击marker弹出自定义的信息窗体;
        let that = this;
        AMap.event.addListener(marker, "click", function () {
          infoWindow.open(that.map, marker.getPosition());
        });
      },
      createInfoWindow(title, content) {
        let info = document.createElement("div");
        info.className = "custom-info input-card content-window-card";
        //可以通过下面的方式修改自定义窗体的宽高
        // 定义顶部标题
        let top = document.createElement("div");
        let titleD = document.createElement("div");
        let closeX = document.createElement("img");
        top.className = "info-top";
        top.style = "position: relative;background: none repeat scroll 0 0 #F9F9F9;border-bottom: 1px solid #CCC; border-radius: 5px 5px 0 0;";
        titleD.innerHTML = title;
        titleD.style = "display: inline-block;color: #333333;font-size: 14px;font-weight: bold;line-height: 31px;padding: 0 10px;";
        closeX.src = "https://webapi.amap.com/images/close2.gif";
        closeX.style = "position: absolute; top: 10px;right: 10px;transition-duration: 0.25s;cursor:pointer";
        closeX.onclick = this.closeInfoWindow;
        top.appendChild(titleD);
        top.appendChild(closeX);
        info.appendChild(top);
        // 定义中部内容
        let middle = document.createElement("div");
        middle.className = "info-middle";
        middle.style = "font-size: 12px;padding: 10px 6px;line-height: 20px;";

        middle.style.backgroundColor = "white";
        middle.innerHTML = content;
        info.appendChild(middle);

        // 定义底部内容
        let bottom = document.createElement("div");
        bottom.className = "info-bottom";
        bottom.style = "height: 0px;width: 100%;clear: both;text-align: center;";
        bottom.style.position = "relative";
        bottom.style.top = "0px";
        bottom.style.margin = "0 auto";
        let sharp = document.createElement("img");
        sharp.src = "https://webapi.amap.com/images/sharp.png";
        bottom.appendChild(sharp);
        info.appendChild(bottom);
        return info;
      },
      closeInfoWindow() {
        this.map.clearInfoWindow();
      },
      showDetail(item) {
        this.details = item;
        this.showModal = true;
      },
      submit() {
        this.formData = {
          name: "",
          companyName: "",
          phoneNumber: "",
          email: "",
        };
      },
      onSwiperRedied(swiper) {
        console.log('Swiper redied!', swiper)
      },
      onSwiperSlideChangeTransitionStart() {
        console.log('SwiperSlideChangeTransitionStart!')
      },
      onSwiperClickSlide(index, reallyIndex) {
        console.log('Swiper click slide!', reallyIndex)
      }
    },
  };
</script>
<style lang="less" scoped>
  .home{color:#333;min-width:1500px;
    .ul-title{padding:24px 0;text-align: center;
      .title_line{display: block;width: 72px;height: 4px;border-radius: 2px;background: #2A86E8;margin: 5px auto;}
    }
    .english-logo-white{position: absolute;z-index: 9999;width: 174px;left: 150px;top: 20px;}
    .video-box{position:relative;height: 100vh;min-height: 410px;overflow: hidden;background:#333;
      video{object-fit:cover;position: absolute;top: 0;left: 0;width: 100%;height: 100%;height: 100vh;min-height: 410px;outline:none;}
    }
    .product-list{width:1500px;margin:0 auto;padding-bottom:60px;
      .list{/*min-width:1500px;*/
        .item{float:left;padding:24px;margin-right:26px;background:#fff;
          img{width:428px;height:363px;}
          p{height:24px;line-height: 24px;}
          .p1{font-size: 18px;height:30px;line-height: 30px;margin-top:10px;}
          .p2{font-size: 14px;color:#999;}
          .p3{font-size: 14px;
            span{color:#2A86E8;cursor:pointer;}
          }
          &:last-child{margin-right:0;}
        }
      }
    }
    .news{background:#2a86e8;height:795px;
      .ul-title{color:#fff;
        .title_line{background: #fff;}
      }
      .swiper-box{width:1500px;margin:0 auto;margin-top:50px;position:relative;
        .swiper-button{width:42px;height:42px;position:absolute;z-index: 3;top:50%;transform: translateY(-50%);cursor: pointer;}
        .swiper_left{left:-50px;}
        .swiper_right{right:-50px;}
        /*.swiper-button-prev{background-image: url('../../assets/images/pc/swiper_left.png');}*/
        /*.swiper-button-next{background-image: url('../../assets/images/pc/swiper_right.png');}*/
        .swiper-slide{overflow: hidden;height:480px;padding-left:150px;
          .item{width:360px;height:480px;border-radius: 17px;-webkit-perspective: 2000px;-moz-perspective: 2000px;position: relative;margin-right: 50px;
            &:last-child{margin-right: 0;}
            .modal-blue{width:100%;height:100%;background:#2a86e8;z-index: 2;opacity: 0.5;}
            .front{background:#fff;z-index: 2;padding-bottom:20px;
              img{width:100%;border-top-left-radius: 17px;border-top-right-radius: 17px;height:360px;}
              .p-box{padding: 10px 20px;
                .p1{font-size: 18px;}
                .p3{font-size:14px;color:#999;margin: 20px 0;}
              }
            }
            .back{background:#FBBC05;color:#fff;z-index: 1;padding:20px;cursor: pointer;
              .p1{font-size: 14px;
                b{font-size: 28px;}
              }
              .p2{font-size: 18px;}
              .p3{font-size: 14px;padding-top:20px;border-top: 1px solid #fff;}
            }
            .front,.back{position: absolute;width: 100%;height: 100%;border-radius:17px;
              -webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;
              -webkit-backface-visibility: hidden;-moz-backface-visibility: hidden;}
            .front-hover{-webkit-animation:front-hover 1000ms ease-in-out both;}
            .front-leave{-webkit-animation:front-leave 1000ms ease-in-out both;}
            @-webkit-keyframes front-hover {
              0% {-webkit-transform: rotateY(0deg);}
              20% {-webkit-transform: rotateY(-20deg);}
              80% {-webkit-transform: rotateY(200deg);}
              100% {-webkit-transform: rotateY(180deg);}
            }
            @-webkit-keyframes front-leave {
              0% {-webkit-transform: rotateY(180deg);}
              20% {-webkit-transform: rotateY(200deg);}
              80% {-webkit-transform: rotateY(-20deg);}
              100% {-webkit-transform: rotateY(0deg);}
            }
            .back-hover{-webkit-animation:back-hover 1000ms ease-in-out both;}
            .back-leave{-webkit-animation:back-leave 1000ms ease-in-out both;}
            @-webkit-keyframes back-hover {
              0% {-webkit-transform: rotateY(-180deg);}
              20% {-webkit-transform: rotateY(-200deg);}
              80% {-webkit-transform: rotateY(20deg);}
              100% {-webkit-transform: rotateY(0deg);}
            }
            @-webkit-keyframes back-leave {
              0% {-webkit-transform: rotateY(0deg);}
              20% {-webkit-transform: rotateY(20deg);}
              80% {-webkit-transform: rotateY(-200deg);}
              100% {-webkit-transform: rotateY(-180deg);}
            }
          }
        }
      }
    }
    .about{background: #fff;
      .about_1500{width:1500px;margin:0 auto;padding:20px 0 60px;
        .left{float:left;
          img{width:507px;height:404px;}
        }
        .right{float: left;margin-left:24px;
          .txt{line-height: 28px;width:949px;height:230px;padding-top:10px;}
          .pic img{float: left;margin-right:12px;width:308px;height:174px;
            &:last-child{margin-right: 0;}
          }
        }
      }
    }
    .contact-us{background: #262829;color:#fff;
      .contact_1500{width:1500px;margin:0 auto;padding:60px 0;
        .left{float:left;font-size:13px;padding-right:100px;border-right:1px solid #363636;
          p{margin-bottom: 15px;
            span{color:#B2D7FF;}
          }
          .map{width:721px;height:169px;margin-top:20px;}
        }
        .right{float:left;font-size: 16px;padding-left:110px;width:472px;
          .input-div{border-bottom:1px solid #363636;height:42px;line-height: 42px;margin-top:20px;position:relative;
            span{font-size: 15px;color:#B2D7FF;position:absolute;}
            input{padding:0 5px;line-height: 36px;width:100%;background: #262829;outline: none;color:#fff;font-size: 15px;}
          }
          .submit-btn{height:60px;line-height:60px;text-align:center;background:#71B6FF;border-radius: 30px;margin-top:40px;cursor: pointer;}
        }
      }
    }
    footer{background:#1E1E1E;color:#fff;text-align: center;padding:20px 0 15px;
      div{font-size: 12px;line-height: 24px;}
    }
    .modal{position: fixed;z-index: 9999;background: rgba(0,0,0,.6);left: 0;bottom: 0;width: 100%;height: 100%;transform-origin: 90% 100%;transition: all 0.5s ease;opacity: 1;
      .modal-box{width:1050px;height:500px;background:#fff;position:fixed;left:50%;top:50%;transform: translate(-50%,-50%);padding:50px 30px;
        .close_icon{position:absolute;width:24px;top:30px;right:30px;cursor: pointer;}
        .roll-container{
          img{width:428px;height:363px;}
          .txt {margin-left: 30px;
            p {margin-bottom:20px;}
          }
        }
      }
    }

  }
</style>
