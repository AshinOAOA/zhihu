// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import App from './App'
import router from './router'
import axios from 'axios'
import JSONP from './config/api'

Vue.use(Vuex);

Vue.prototype.$jsonp = JSONP
Vue.prototype.$http = axios
Vue.prototype.HOST = 'https://bird.ioliu.cn/v1/?url='
// Vue.prototype.HOST = '/api'


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created() {
  	function fontSizeInit() { //rem布局
  		var html = document.documentElement;
  		var hWidth = html.getBoundingClientRect().width;
			if(hWidth > 800){
				hWidth = 414;
			}
  		html.style.fontSize = hWidth/10+'px';
  	}
  	window.onready = fontSizeInit();
  	window.onresize = function(){
  		fontSizeInit();
  	}
  }
})
