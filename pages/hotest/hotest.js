//index.js
//获取应用实例
//const app = getApp()
var api=require('../../utils/api.js');
Page({
  data: {
    title: '最热话题',
    hotest: [],
    hidden: false
  },
  redictDetail:function(e){
    var id = e.currentTarget.id;
    var url = '../detail/detail?id=' + id;
    wx.navigateTo({
      url: url,
    })
  },
  fetchData:function(){
    var that=this;
    wx.request({
      url: api.getHotestTopic({
        p:null,
      }),
      success:function(res){
        that.setData({
          hotest:res.data
        })
        setTimeout(function(){
          that.setData({
            hidden: true
          })
        },300)
      }
    })
  },
  onLoad:function(){
    this.setData({
      hidden:false
    })
    this.fetchData();
  }
})
