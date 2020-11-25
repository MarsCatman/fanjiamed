import { deviceType } from "@/services/deviceType";
export default function(context: any) {
  // @ts-ignore
  context.userAgent = process.server
    ? context.req.headers["user-agent"]
    : navigator.userAgent;
  // 给全局上下文添加一个属性来保存我们返回的匹配信息
  context.deviceType = deviceType(context.userAgent);
  // 这里注入到store,是因为部分页面需要判断机型请求不同的数据,没有用到的话可以移除
  // context.store.commit("SetDeviceType", context.deviceType);

  // 若是判断UA非移动端的,就在这里做处理了..
  // context.redirect(status,url) 这个可以重定向到外部网站
  // 若是内部访问可以直接用router对象push
  // console.log(context)
  if (context.deviceType.type === "pc") {
    // context.redirect(301,'https://wwww.baidu.com')
    console.log('这是pc环境');
    if(context.route.path === '/HomeApp'){
      context.redirect('/')
    }
  } else {
    console.log('这是mobile环境');
    if(context.route.path === '/'){
      console.log(99999);
      // context.app.router.push('/HomeApp');
      context.redirect('/HomeApp')
    }
  }
}
