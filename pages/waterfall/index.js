// pages/waterfall/index.js
var add = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    note: [{ "_id": "5bfe1a5b9d2122309624cbb7", "createdAt": "2018-11-28T04:32:27.338Z", "desc": "2018-11-28", "publishedAt": "2018-11-28T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "https://ws1.sinaimg.cn/large/0065oQSqgy1fxno2dvxusj30sf10nqcm.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5bf22fd69d21223ddba8ca25", "createdAt": "2018-11-19T03:36:54.950Z", "desc": "2018-11-19", "publishedAt": "2018-11-19T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "https://ws1.sinaimg.cn/large/0065oQSqgy1fxd7vcz86nj30qo0ybqc1.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5be14edb9d21223dd50660f8", "createdAt": "2018-11-06T08:20:43.656Z", "desc": "2018-11-06", "publishedAt": "2018-11-06T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "https://ws1.sinaimg.cn/large/0065oQSqgy1fwyf0wr8hhj30ie0nhq6p.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5bcd71979d21220315c663fc", "createdAt": "2018-10-22T06:43:35.440Z", "desc": "2018-10-22", "publishedAt": "2018-10-22T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "https://ws1.sinaimg.cn/large/0065oQSqgy1fwgzx8n1syj30sg15h7ew.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5bc434ac9d212279160c4c9e", "createdAt": "2018-10-15T06:33:16.497Z", "desc": "2018-10-15", "publishedAt": "2018-10-15T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "https://ws1.sinaimg.cn/large/0065oQSqly1fw8wzdua6rj30sg0yc7gp.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5bbb0de09d21226111b86f1c", "createdAt": "2018-10-08T07:57:20.978Z", "desc": "2018-10-08", "publishedAt": "2018-10-08T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "https://ws1.sinaimg.cn/large/0065oQSqly1fw0vdlg6xcj30j60mzdk7.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5ba206ec9d2122610aba3440", "createdAt": "2018-09-19T08:21:00.295Z", "desc": "2018-09-19", "publishedAt": "2018-09-19T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "https://ws1.sinaimg.cn/large/0065oQSqly1fvexaq313uj30qo0wldr4.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5b9771a29d212206c1b383d0", "createdAt": "2018-09-11T07:41:22.491Z", "desc": "2018-09-11", "publishedAt": "2018-09-11T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "https://ws1.sinaimg.cn/large/0065oQSqly1fv5n6daacqj30sg10f1dw.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5b830bba9d2122031f86ee51", "createdAt": "2018-08-27T04:21:14.703Z", "desc": "2018-08-27", "publishedAt": "2018-08-28T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "https://ws1.sinaimg.cn/large/0065oQSqly1fuo54a6p0uj30sg0zdqnf.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5b7b836c9d212201e982de6e", "createdAt": "2018-08-21T11:13:48.989Z", "desc": "2018-08-21", "publishedAt": "2018-08-21T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "https://ws1.sinaimg.cn/large/0065oQSqly1fuh5fsvlqcj30sg10onjk.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5b74e9409d21222c52ae4cb4", "createdAt": "2018-08-16T11:02:24.289Z", "desc": "2018-08-16", "publishedAt": "2018-08-16T00:00:00.0Z", "source": "api", "type": "\u798f\u5229", "url": "https://ws1.sinaimg.cn/large/0065oQSqly1fubd0blrbuj30ia0qp0yi.jpg", "used": true, "who": "lijinshan" }, { "_id": "5b7102749d2122341d563844", "createdAt": "2018-08-13T12:00:52.458Z", "desc": "2018-08-13", "publishedAt": "2018-08-13T00:00:00.0Z", "source": "api", "type": "\u798f\u5229", "url": "https://ww1.sinaimg.cn/large/0065oQSqly1fu7xueh1gbj30hs0uwtgb.jpg", "used": true, "who": "lijinshan" }, { "_id": "5b6bad449d21226f45755582", "createdAt": "2018-08-09T10:56:04.962Z", "desc": "2018-08-09", "publishedAt": "2018-08-09T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "https://ww1.sinaimg.cn/large/0065oQSqgy1fu39hosiwoj30j60qyq96.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5b67b7fd9d2122195bdbd806", "createdAt": "2018-08-06T10:52:45.809Z", "desc": "2018-08-06", "publishedAt": "2018-08-06T00:00:00.0Z", "source": "api", "type": "\u798f\u5229", "url": "https://ww1.sinaimg.cn/large/0065oQSqly1ftzsj15hgvj30sg15hkbw.jpg", "used": true, "who": "lijinshan" }, { "_id": "5b63cd4e9d21225e0d3f58c9", "createdAt": "2018-08-03T11:34:38.672Z", "desc": "2018-08-03", "publishedAt": "2018-08-03T00:00:00.0Z", "source": "api", "type": "\u798f\u5229", "url": "https://ww1.sinaimg.cn/large/0065oQSqgy1ftwcw4f4a5j30sg10j1g9.jpg", "used": true, "who": "lijinshan" }, { "_id": "5b6151509d21225206860f08", "createdAt": "2018-08-01T14:21:04.556Z", "desc": "2018-08-01", "publishedAt": "2018-08-01T00:00:00.0Z", "source": "api", "type": "\u798f\u5229", "url": "https://ww1.sinaimg.cn/large/0065oQSqly1ftu6gl83ewj30k80tites.jpg", "used": true, "who": "lijinshan" }, { "_id": "5b60356a9d212247776a2e0e", "createdAt": "2018-07-31T18:09:46.825Z", "desc": "2018-07-31", "publishedAt": "2018-07-31T00:00:00.0Z", "source": "api", "type": "\u798f\u5229", "url": "http://ww1.sinaimg.cn/large/0065oQSqgy1ftt7g8ntdyj30j60op7dq.jpg", "used": true, "who": "lijinshan" }, { "_id": "5b5e93499d21220fc64181a9", "createdAt": "2018-07-30T12:25:45.937Z", "desc": "2018-07-30", "publishedAt": "2018-07-30T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "https://ww1.sinaimg.cn/large/0065oQSqgy1ftrrvwjqikj30go0rtn2i.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5b50107f421aa917a31c0565", "createdAt": "2018-07-19T12:15:59.226Z", "desc": "2018-07-19", "publishedAt": "2018-07-19T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "https://ww1.sinaimg.cn/large/0065oQSqly1ftf1snjrjuj30se10r1kx.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5b4eaae4421aa93aa99bee16", "createdAt": "2018-07-18T11:14:55.648Z", "desc": "2018-07-18", "publishedAt": "2018-07-18T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "https://ww1.sinaimg.cn/large/0065oQSqly1ftdtot8zd3j30ju0pt137.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5b481d01421aa90bba87b9ae", "createdAt": "2018-07-13T11:31:13.266Z", "desc": "2018-07-13", "publishedAt": "2018-07-13T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "http://ww1.sinaimg.cn/large/0073sXn7ly1ft82s05kpaj30j50pjq9v.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5b456f5d421aa92fc4eebe48", "createdAt": "2018-07-11T10:45:49.246Z", "desc": "2018-07-11", "publishedAt": "2018-07-11T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "https://ww1.sinaimg.cn/large/0065oQSqly1ft5q7ys128j30sg10gnk5.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5b441f06421aa92fccb520a2", "createdAt": "2018-07-10T10:50:46.379Z", "desc": "2018-07-10", "publishedAt": "2018-07-10T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "https://ww1.sinaimg.cn/large/0065oQSqgy1ft4kqrmb9bj30sg10fdzq.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5b42d1aa421aa92d1cba2918", "createdAt": "2018-07-09T11:08:26.162Z", "desc": "2018-07-09", "publishedAt": "2018-07-09T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "http://ww1.sinaimg.cn/large/0065oQSqly1ft3fna1ef9j30s210skgd.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5b3ed2d5421aa91cfe803e35", "createdAt": "2018-07-06T10:24:21.907Z", "desc": "2018-07-06", "publishedAt": "2018-07-06T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "http://ww1.sinaimg.cn/large/0065oQSqly1fszxi9lmmzj30f00jdadv.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5b3d883f421aa906e5b3c6f1", "createdAt": "2018-07-05T10:53:51.361Z", "desc": "2018-07-05", "publishedAt": "2018-07-05T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "http://ww1.sinaimg.cn/large/0065oQSqly1fsysqszneoj30hi0pvqb7.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5b3ae394421aa906e7db029b", "createdAt": "2018-07-03T10:46:44.112Z", "desc": "2018-07-03", "publishedAt": "2018-07-03T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "http://ww1.sinaimg.cn/large/0065oQSqly1fswhaqvnobj30sg14hka0.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5b398cf8421aa95570db5491", "createdAt": "2018-07-02T10:24:56.546Z", "desc": "2018-07-02", "publishedAt": "2018-07-02T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "http://ww1.sinaimg.cn/large/0065oQSqly1fsvb1xduvaj30u013175p.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5b33ccf2421aa95570db5478", "createdAt": "2018-06-28T01:44:18.488Z", "desc": "2018-06-28", "publishedAt": "2018-06-28T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "http://ww1.sinaimg.cn/large/0065oQSqly1fsq9iq8ttrj30k80q9wi4.jpg", "used": true, "who": "lijinshanmx" }, { "_id": "5b32807e421aa95570db5471", "createdAt": "2018-06-27T02:05:50.227Z", "desc": "2018-06-27", "publishedAt": "2018-06-27T00:00:00.0Z", "source": "web", "type": "\u798f\u5229", "url": "http://ww1.sinaimg.cn/large/0065oQSqly1fsp4iok6o4j30j60optbl.jpg", "used": true, "who": "lijinshanmx" }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    console.log("onReachBottom")
    let arr = [...this.data.note];
    
    this.setData({
      note: arr.concat(arr)
    })
    add++
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})