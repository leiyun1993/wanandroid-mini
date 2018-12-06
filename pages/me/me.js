// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      userInfo: wx.getStorageSync("user")
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  onItemClick(event) {
    let itemType = event.currentTarget.dataset.itemType;
    switch (Number(itemType)) {
      case 0:
        if (this.data.userInfo) {
          wx.navigateTo({
            url: '/pages/collect/collect',
          })
        } else {
          this.onGotUserInfo()
        }
        break
      case 1:
        wx.navigateTo({
          url: '/pages/tree/tree'
        })
        break
      case 2:
        if (this.data.userInfo) {
          wx.navigateTo({
            url: '/pages/todo/todo'
          })
        } else {
          this.onGotUserInfo()
        }
        break

      case 3:
        wx.navigateTo({
          url: "/pages/web/index?url=" + encodeURIComponent("http://www.wanandroid.com/about")
        })
        break
    }
  },
  onGotUserInfo() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  }
})