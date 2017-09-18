//index.js
//获取应用实例
//const app = getApp()
var api = require('../../utils/api.js');
Page({
  data: {
    title: '最热话题',
    hotest: [],
    hidden: false
  },
  onPullDownRefresh:function(){
    this.fetchData();
    console.log('onPullDownRefresh', new Date())
  },
  redictDetail: function (e) {
    var id = e.currentTarget.id;
    var url = '../detail/detail?id=' + id;
    wx.navigateTo({
      url: url,
    })
  },
  fetchData: function () {
    var that = this;
    wx.request({
      url: api.getLatestTopic({
        p: 1,
      }),
      success: function (res) {
        that.setData({
          latest: res.data
        })
        setTimeout(function () {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })
  },
  onLoad: function () {
    this.fetchData();
   
  }
})
