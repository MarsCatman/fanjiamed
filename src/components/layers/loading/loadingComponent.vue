<template>
  <div class="layer-alert-bg">
    <div class="box">
      <div class="layer-alert">
        <div class="fj-content">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class LoadingComponent extends Vue {
  @Prop({ type: String, default: "loading..." }) private message!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.layer-alert-bg {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 110;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box {
  position: absolute;
  min-width: 45px;
  background: #fff;
  z-index: 99;
  border-radius: 2px;
  padding: 20px;
}
.layer-alert {
  background: url("../../../assets/images/logoLoading.gif") no-repeat;
  background-size: contain;
  z-index: 100;
  padding-left: 90px;
  color: #fff;
  text-align: center;
  font-size: 14px;
}
.fj-content {
  color: #666;
}
</style>
