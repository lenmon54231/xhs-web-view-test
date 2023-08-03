Page({
  // onShow() {
  //   console.log('onShow======')
  //   xhs?.reportAnalytics('enter_home_programmatically', {})
  // },
  // onHide() {
  //   console.log('onHide======')
  // },
  // onUnload() {
  //   console.log('onUnload======')
  // },
  onShareAppMessage() {
    return {
      title: "小程序官方组件展示",
      path: "page/component/index",
    };
  },

  data: {
    list: [
      {
        id: "open",
        name: "开放能力",
        open: false,
        pages: ["webview"],
      },
    ],
  },
  complete(res) {
    console.log("=======complete:invoke", res);
  },

  reLaunch() {
    xhs.reLaunch({
      url: "/page/component/pages/navigator/navigate?na=navigate",
    });
  },

  // onLoad(query) {
  //   console.log('onLoad======', query)
  // },

  // onReady() {
  //   console.log('onReady======')
  // },

  kindToggle(e) {
    const id = e.currentTarget.id;
    const list = this.data.list;
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list,
    });
  },
});
