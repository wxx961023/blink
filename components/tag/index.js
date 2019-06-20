// components/tag/index.js
Component({
  options:{
    multipleSlots:true
  },
  externalClasses:['tag-class'],
  properties: {
    text:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(){
      this.triggerEvent('onTag',{
        text:this.properties.text
      })
    }
  }
})
