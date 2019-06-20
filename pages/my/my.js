import {ClassicModel} from '../../models/classic'
import {BookModel} from '../../models/book'

const classicModel = new ClassicModel()
const bookModel = new BookModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorize:false,
    userInfo:null,
    bookCount:0,
    classics:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.userAuthorized()
    this.getMyBookCount()
    this.getMyFavor()
  },

  getMyFavor(){
    classicModel.getMyFavor(res=>{
      this.setData({
        classics:res
      })
    })
  },
  getMyBookCount(){
    bookModel.getMyBookCount()
      .then(res=>{
        this.setData({
          bookCount:res.count
        })
      })
  },
  //点击button授权
  onGetUserInfo(event){
    const userInfo = event.detail.userInfo
    if(userInfo){
      this.setData({
        userInfo,
        authorized:true
      })
    }
  },
  //授权后获取用户信息
  userAuthorized(){
    wx.getSetting({
      success:data=>{
        if(data.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success:data=>{
              this.setData({
                authorized:true,
                userInfo:data.userInfo
      
              })
            }
          })
        }
      }
    })
  },
  onJumpToAbout(){
    wx.navigateTo({
      url:'/pages/about/about',
    })
  },
  onStudy(){
    wx.navigateTo({
      url:'/pages/course/course',
    })
  }
  
})