// pages/search/search.js
import api from "../../api/api.js";
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal:"",
    articleList: [],
    page: 1,
    pageCount: 1,
    isLoadingMore:false,
    tipsList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHotKey()
  },

  getHotKey(){
    api.IGetHotKey()
    .then(res=>{
      this.setData({
        tipsList:res.data
      })
    })
    .catch(e=>{

    })
  },

  onHotKeyClick(event){
    let key = event.currentTarget.dataset.key;
    this.setData({
      inputVal:key
    })
    this.getArticle(1);
  },

  inputTyping(event){
    this.setData({
      inputVal:event.detail.value,
    })
  },

  clearInput(){
    this.setData({
      inputVal: "",
    })
  },

  searchClick(){
    if(this.data.inputVal){
      this.getArticle(1)
    }else{
      
    }
  },

  getArticle(page) {
    if(page==1){
      this.setData({
        articleList: [],
        page: 1,
        pageCount: 0,
        isLoadingMore: false,
      })
    }
    api.IGetArticleQuery(page,{
      k:this.data.inputVal
    })
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

  },
  collectClick(event) {
    if (!app.isLogin()) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
      return false;
    }
    let id = event.currentTarget.dataset.id;
    let zan = event.currentTarget.dataset.zan;
    let index = event.currentTarget.dataset.index;
    if (!zan) {
      api.IPostCollect(id)
        .then(res => {
          this.data.articleList[index].collect = true;
          this.setData({
            articleList: this.data.articleList
          })
          wx.showToast({
            title: '收藏成功',
          })
        })
        .catch(e => {

        })
    } else {
      api.IPostArticleUnCollect(id)
        .then(res => {
          this.data.articleList[index].collect = false;
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