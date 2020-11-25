export default ( obj: any ) => {
  obj.app.router.beforeEach((to: any, from: any, next: any) => {
    console.log(5555);
    console.log(obj.userAgent);
    // if (to.path == '/') {
    //   // router.replace('/HomeApp')
    //   next('/HomeApp')
    // }
    next();
  })
}
