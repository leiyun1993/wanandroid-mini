// pages/todoadd/add.js
import api from "../../api/api.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "",
    title: "",
    content: "",
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
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  onTitleChange(e) {
    this.setData({
      title: e.detail.value
    })
  },
  onContentChange(e) {
    this.setData({
      content: e.detail.value
    })
  },
  submit(){
    if(!this.data.title){
      this.toast("请输入标题~")
      return false;
    }
    if (!this.data.content) {
      this.toast("请输入待办详情~")
      return false;
    }
    if (!this.data.content) {
      this.toast("请选择时间~")
      return false;
    }
    wx.showLoading({
      title: 'loading...',
    })
    api.IPostTodoAdd({
      title:this.data.title,
      content:this.data.content,
      date:this.data.date,
    })
    .then(res=>{
      wx.hideLoading()
      wx.navigateBack({
        delta:1
      }) 
    })
    .catch(e=>{
      wx.hideLoading()
      this.toast(e.errorMsg)
    })
  },
  toast(msg){
    wx.showToast({
      title: msg,
      icon:"none",
      duration:2000,
    })
  }
})