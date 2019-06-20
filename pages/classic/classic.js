import {ClassicModel} from '../../models/classic.js';
import {LikeModel} from '../../models/like.js';

let classicModel = new ClassicModel()
let likeModel = new LikeModel()

Page({
  data: {
    classicData:null,
    first:false,
    latest:true,
    likeCount:0,
    likeStatus:false
  },

  onLike(event){
    let behavior = event.detail.behavior
    let {id,type} = this.data.classicData
    likeModel.like(behavior,id,type)
  },

  onNext(){
    this._updateClassic('next')
  },
  onPrevious(){
    this._updateClassic('previous')
  },
  _updateClassic(nexOrPrevious){
    let {index} = this.data.classicData
    classicModel.getClassic(index,nexOrPrevious,(res)=>{
      this._getLikeStatus(res.id,res.type)
      this.setData({
        classicData:res,
        first:classicModel.isFirst(res.index),
        latest:classicModel.isLatest(res.index)
      })
    })
  },
  _getLikeStatus(artID,category){
    likeModel.getClassicLikeStatus(artID,category,
      (res)=>{
        this.setData({
          likeCount:res.fav_nums,
          likeStatus:res.like_status
        })
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res)=>{
      this.setData({
        classicData:res,
        likeCount:res.fav_nums,
        likeStatus:res.like_status  
      });
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})