//index.js
//获取应用实例
const app = getApp()
import api from "../../api/api.js";
Page({
  data: {
    bannerList: [],
    articleList: [],
    isLoadingMore: false,
    page: 1,
    pageCount: 0,
  },

  onLoad() {
    api.IGetBanner()
      .then(res => {
        this.setData({
          bannerList: res.data
        })
      })
      .catch(e => {

      })
    this.setData({
      page: 1,
      articleList: [],
    })
    this.getArticle(this.data.page)
  },

  getArticle(page) {
    api.IGetArticle(page - 1)
      .then(res => {
        for (let item of res.data.datas) {
          item.headTetx = item.author.substring(0, 1)
        }
        wx.stopPullDownRefresh()
        this.setData({
          articleList: this.data.articleList.concat(res.data.datas),
          page: page,
          isLoadingMore: false,
          pageCount: res.data.pageCount,
        })
      })
      .catch(e => {

      })
  },
  /**
   * 下拉刷新
   */
  onPullDownRefresh() {
    this.onShow()
  },

  /**
   * 加载更多
   */
  onReachBottom() {
    if (this.data.pageCount <= this.data.page || this.data.isLoadingMore) {
      return false;
    }
    this.setData({
      isLoadingMore: true,
    })
    this.getArticle(this.data.page + 1)
  },
  
  onItemClick(event) {
    let url = event.currentTarget.dataset.url;
    wx.navigateTo({
      url: "/pages/web/index?url=" + encodeURIComponent(url)
    })
  },

  searchBarClick(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  }

})