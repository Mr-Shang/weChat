// pages/node/node.js
var api = require('../../utils/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '全部节点',
    nodes: [],
    hidden: false
  },
  fetchData:function(){
    var that=this;
    wx.request({
      url: api.getAllNode() ,
      success:function(res){
        that.setData({
          nodes: res.data
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
    this.fetchData();
  }
  
})