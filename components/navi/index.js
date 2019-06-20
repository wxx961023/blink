// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    first:Boolean,
    latest:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    leftImg:'./images/triangle@left.png',
    leftDisImg:'images/triangle.dis@left.png',
    rightImg:'images/triangle@right.png',
    rightDisImg:'images/triangle.dis@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft(){
      if(!this.properties.latest){
        this.triggerEvent('left')
      }
    },
    onRight(){
      if(!this.properties.first){
        this.triggerEvent('right')
      }
    }
  }
})
