// pages/project/project.js
import projectConfig from "../../config/projects.js";
import api from "../../api/api.js";
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    projects:[],
    currentTab: 0,
    page:1,
    pageCount:0,
    projectList:[],
    isLoadingMore:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      projects: projectConfig.projects,
    })
    this.getProject(1)
  },

  getProject(page) {
    let userId = this.data.projects[this.data.currentTab].id;
    if (userId == 99999){
      api.IGetNewProjects(page)
        .then(res => {
          for (let item of res.data.datas) {
            item.headTetx = item.author.substring(0, 1)
          }
          wx.stopPullDownRefresh()
          this.setData({
            projectList: this.data.projectList.concat(res.data.datas),
            page: page,
            pageCount: res.data.pageCount,
            isLoadingMore: false,
          })
        })
        .catch(e => {

        })
    }else{
      api.IGetProjects(userId,page)
        .then(res => {
          for (let item of res.data.datas) {
            item.headTetx = item.author.substring(0, 1)
          }
          wx.stopPullDownRefresh()
          this.setData({
            projectList: this.data.projectList.concat(res.data.datas),
            page: page,
            pageCount: res.data.pageCount,
            isLoadingMore: false,
          })
        })
        .catch(e => {

        })
    }
    
  },

  onTabClick(event) {
    console.log(event)
    let data = event.currentTarget.dataset;
    this.setData({
      currentTab: data.index,
      projectList: []
    })
    this.getProject(1)
  },

  onItemClick(event){
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
    this.getProject(this.data.page + 1)
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
          this.data.projectList[index].collect = true;
          this.setData({
            projectList: this.data.projectList
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
          this.data.projectList[index].collect = false;
          this.setData({
            projectList: this.data.projectList
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