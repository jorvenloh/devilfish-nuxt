import Vue from 'vue'

const EventBus = {}

EventBus.install = function(Vue) {
	Vue.prototype.$eventBus = new Vue()
}

Vue.use(EventBus)
