Page({
  onSliding(e) {
    console.log(e);
    wx.showToast({
      title: `向${e.detail.direction}滑动`,
      icon: 'none',
    });
  }
})
