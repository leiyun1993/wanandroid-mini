// pages/treelist/treelist.js
import api from "../../api/api.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cid:"",
    chapters: [],
    articleList: [],
    currentTab: 0,
    scrollWidth: 0,
    page: 1,
    pageCount: 1,
    isLoadingMore: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cid:options.cid
    })
    wx.setNavigationBarTitle({
      title: options.name,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    this.getArticle(1)
  },

  getArticle(page) {
    api.IGetTreeArticle(this.data.cid, page)
      .then(res => {
        for (let item of res.data.datas) {
          item.headTetx = item.author.substring(0, 1)
        }
        wx.stopPullDownRefresh()
        this.setData({
          articleList: this.data.articleList.concat(res.data.datas),
          page: page,
          pageCount: res.data.pageCount,
          isLoadingMore: false,
        })
      })
      .catch(e => {

      })
  },

  onItemClick(event) {
    let url = event.currentTarget.dataset.url;
    wx.navigateTo({
      url: "/pages/web/index?url=" + encodeURIComponent(url)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.pageCount <= this.data.page || this.data.isLoadingMore) {
      return false;
    }
    this.setData({
      isLoadingMore: true,
    })
    this.getArticle(this.data.page + 1)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})