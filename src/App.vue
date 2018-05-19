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
export default {
  name: 'App',
  mounted () {
    this.watchScroll()
  },
  methods: {
    watchScroll () {
      const that = this
      window.onscroll = function (e) {
        console.log(document.documentElement.clientHeight + e.currentTarget.scrollY, that.$refs.bottomLine.offsetTop)
        if (document.documentElement.clientHeight + e.currentTarget.scrollY > that.$refs.bottomLine.offsetTop) {
          console.log('滚动到底了')
        }
      }
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
