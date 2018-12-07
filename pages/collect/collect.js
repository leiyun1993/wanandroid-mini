// pages/collect/collect.js
import api from "../../api/api.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList:[],
    page:1,
    pageCount:0,
    isHideLoadMore:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCollectList(1);
  },

  getCollectList(page) {
    api.IGetCollectList(page)
      .then(res => {
        for (let item of res.data.datas) {
          item.headTetx = item.author.substring(0, 1);
          item.collect = true;
        }
        wx.stopPullDownRefresh()
        this.setData({
          articleList: this.data.articleList.concat(res.data.datas),
          page: page,
          pageCount: res.data.pageCount,
          isHideLoadMore: false,
        })
      })
      .catch(e => {

      })
  },

  onItemClick(event){
    wx.showToast({
      title: '4554455',
      duration:10*1000,
    })

    setTimeout(()=>{
      wx.navigateBack({
        delta: 1,
      })

    },1000)
    
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
      isHideLoadMore: true,
    })
    this.getCollectList(this.data.page + 1)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  collectClick(event) {
    let id = event.currentTarget.dataset.id;
    let zan = event.currentTarget.dataset.zan;
    let index = event.currentTarget.dataset.index;
    let originId = event.currentTarget.dataset.originId;
    if (zan) {
      api.IPostArticleMyUnCollect(id,{
        originId: originId
      })
        .then(res => {
          this.data.articleList.splice(index,1)
          this.setData({
            articleList: this.data.articleList
          })
          wx.showToast({
            title: '取消收藏',
          })
        })
        .catch(e => {

        })
    }
  }
})