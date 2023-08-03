Page({
  onShareAppMessage() {
    return {
      title: "webview",
      path: "page/component/pages/webview/webview",
    };
  },

  message(e) {
    console.log("e: ", e);
  },

  load(e) {
    console.log("e: ", e);
  },

  error(e) {
    console.log("e: ", e);
  },
});
