import LayerLoad from './loading/loading';
import LayerToast from './toast/toast';
const $hide = (ele: any | null) => {
  if (ele === null) {
    return;
  }
  // 在页面中查找alert，如有还存在的话就移除掉
  if (process.client) {
    const alertEles = document.querySelectorAll('.layer-alert-bg');
    alertEles.forEach((aele) => {
      if (ele === aele) { document.body.removeChild(ele); }
    });
  }
};

declare module 'vue/types/vue' {
  interface Vue {
    $layer: {
      loading: Function;
      toast: Function;
      hide: Function;
      confirm: Function;
    }
  }
}

export default {
  install(Vue: any) {
    Vue.prototype.$layer = {
      loading: LayerLoad(Vue),
      toast: LayerToast(Vue),
      hide: $hide,
    };
  },
};

/**
 * @confirm
    this.$layer.confirm('弹出层！');
  *      this.$layer.confirm({
          textbig:'呵呵',
          text:'<div style="color:red">dd</div>',
          title: 'alerttitle',
          btn1Message: 'string',
          btn2Message: 'string',
          btn1: () => {
              return false; // 点击按钮阻止弹出框关闭;
          },
          btn2: () => {
              // 点击按钮默认关闭弹出框
          },
          finallyCallback: (num: number | string) => { // num: 0 close  1 btn
              console.log(num);
          },
      })

 * @loading
    this.$layer.loading();
    this.$layer.loading('正在加载中...');
 * @toast
    this.$layer.toast('校验错误!'); // 默认2000毫秒后关闭
    this.$layer.toast({
        message: '校验错误!',
        time: 5000
    });
 * @hide
    const alert = this.$layer.alert('显示一个alert!');
    const loading = this.$layer.loading('显示一个alert!');
    this.$layer.hide(alert);
    this.$layer.hide(loading);
 */
