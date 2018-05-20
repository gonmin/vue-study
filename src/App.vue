<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="bottom-line" ref="bottomLine"></div>
  </div>
</template>

<script>
/* eslint-disable */ 
function getScrollHeight(){
　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0
　　if(document.body){
　　　　bodyScrollHeight = document.body.scrollHeight
　　}
　　if(document.documentElement){
　　　　documentScrollHeight = document.documentElement.scrollHeight
　　}
　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
　　return scrollHeight
}
export default {
  name: 'App',
  mounted () {
    this.watchScroll()
    this.addImgsReturnFalse()
  },
  methods: {
    watchScroll () {
      const that = this
      window.onscroll = function (e) {
        console.log(window.innerHeight, document.documentElement.clientHeight)
        console.log((window.innerHeight || document.documentElement.clientHeight) + e.currentTarget.scrollY, that.$refs.bottomLine.offsetTop)
        if ((window.innerHeight || document.documentElement.clientHeight) + e.currentTarget.scrollY > that.$refs.bottomLine.offsetTop) {
          console.log('滚动到底了')
        }
      }
    },
    addImgsReturnFalse () {
      const imgs = document.querySelectorAll('img');
      const arrayImgs = Array.prototype.slice.call(imgs, 0)
      arrayImgs.forEach(item => {
        item.setAttribute('onclick', 'return false;')
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box1,
.box2 {
  height: 300px;
}
.bottom-line {
  height: 1px;
}
</style>
