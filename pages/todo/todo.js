// pages/todo/todo.js
import api from "../../api/api.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currTab: 1,
    status: 0,
    todoList: [],
    startX: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },

  onTabItemClick(event) {
    let currTab = event.currentTarget.dataset.tab;
    this.setData({
      currTab: currTab,
      status: currTab == 1 ? 0 : 1,
    })
    this.getTodo(1)
  },

  getTodo(page) {
    api.IGetTodo(this.data.status, page, {})
      .then(res => {
        for (let item of res.data.datas) {
          item.leftDis = "0rpx"
          item.rightPadding = "15rpx"
        }
        this.setData({
          todoList: res.data.datas
        })
      })
      .catch(e => {

      })
  },

  onOpenClick(event) {
    let index = event.currentTarget.dataset.index;
    this.data.todoList[index].isOpen = !this.data.todoList[index].isOpen;
    this.setData({
      todoList: this.data.todoList
    })
  },

  touchS: function(event) {
    if (event.touches.length == 1) {
      this.setData({
        startX: event.touches[0].clientX
      });
    }
  },

  touchM: function(event) {
    var index = event.currentTarget.dataset.sid;
    var moveX = event.touches[0].clientX;
    var disX = this.data.startX - moveX;
    if (disX > 0 && disX < 80) {
      this.changeList(this.data.todoList, index, disX * 2)
    }
  },

  touchE: function(event) {
    var index = event.currentTarget.dataset.sid
    if (event.changedTouches.length == 1) {
      //手指移动结束后水平位置 
      var endX = event.changedTouches[0].clientX;
      //触摸开始与结束，手指移动的距离 
      var disX = this.data.startX - endX;
      if (disX > 40) {
        this.changeList(this.data.todoList, index, 160)
      } else {
        this.changeList(this.data.todoList, index, 0)
      }
    }
  },
  changeList: function(listData, index, leftData) {
    for (var i in listData) {
      if (i == index) {
        listData[i].leftDis = -leftData + 'rpx'
        if (leftData > 0) {
          listData[i].rightPadding = '0rpx'
        } else {
          listData[i].rightPadding = '15rpx'
        }

      }
    }
    this.setData({
      todoList: listData
    })
    console.log(this.data.todoList)
  },

  onItem1Click(event) {
    let id = event.currentTarget.dataset.id;
    api.IPostTodoDelete(id)
      .then(res => {
        this.getTodo(1)
      })
      .catch(e => {

      })
  },

  onItem2Click(event) {
    let id = event.currentTarget.dataset.id;
    api.IPostTodoDone(id, {
        status: this.data.currTab==1?1:0
      })
      .then(res => {
        this.getTodo(1)
      })
      .catch(e => {

      })
  },

  onAddClick(){
    wx.navigateTo({
      url: '/pages/todoadd/add',
    })
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
    this.getTodo(1);
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

  }
})