
Component({
  properties: {
    like:{
      type:Boolean,
    },
    count:{
      type:Number
    },
    readOnly:{
      type:Boolean
    }
  },
  data: {
    yesSrc:"images/like.png",
    noSrc:"images/like@dis.png",
  },
  methods: {
    onLike(){
      if(this.properties.readOnly){
        return
      }
      let like = this.properties.like
      let count = this.properties.count

      this.setData({
        count:like?count-1 : count+1,
        like:!like
      })
      let behavior = this.properties.like ? 'like' : 'cancel'
      this.triggerEvent('like', {
        behavior: behavior,
      }, {})
    }
  }
})
