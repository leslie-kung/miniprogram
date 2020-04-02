// pages/about/about.js
Page({
  data:{
    on: true
  },

  /**
   * 页面的初始数据
   */

  onReady(){
    this.back = wx.getBackgroundAudioManager()
    this.back.src = "http://other.web.rh01.sycdn.kuwo.cn/128b6e47ab1999ac841956a09b0ad866/5e8597b7/resource/n2/9/66/3331052726.mp3"
    this.back.title = "告白气球"
    this.back.play()
    this.back.onEnded(()=>{
      this.back.play();
    })
  },

  // 停止暂停
  stop(){
    this.back.pause();
    this.setData({on: !this.data.on})
    if (this.data.on){
      this.back.play()
    }else{
      this.back.pause()
    }
  }
})