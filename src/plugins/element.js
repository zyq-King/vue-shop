import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 将message全局挂载到vue上成为一个属性，可$message全局使用
Vue.prototype.$message = Message