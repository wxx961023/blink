import {classicBeh} from '../classic-beh'

const mMgr = wx.getBackgroundAudioManager();

Component({
  behaviors:[classicBeh],
  properties: {
    src:String,
    title:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing:false,
    playImg:'./images/player@play.png',
    pauseImg:'./images/player@pause.png'
  },
  attached(){
    this._recoverStatus()
    this._monitorSwitch()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onPlay(){
      if(!this.data.playing){
        this.setData({
          playing:true
        })
        mMgr.src = this.properties.src
      }else{
        this.setData({
          playing:false
        })
        mMgr.pause()
      }
      mMgr.title = this.properties.title
    },
    _recoverStatus(){
      if(mMgr.paused){
        this.setData({
          playing:false
        })
        return
      }
      if(mMgr.src === this.properties.src){
        this.setData({
          playing:true
        })
      }
    },
    _monitorSwitch(){
      mMgr.onPlay(()=>{
        this._recoverStatus()
      })
      mMgr.onPause(()=>{
        this._recoverStatus()
      })
      mMgr.onStop(()=>{
        this._recoverStatus()
      })
      mMgr.onEnded(()=>{
        this._recoverStatus()
      })
    }
  }
})
