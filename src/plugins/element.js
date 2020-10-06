import Vue from 'vue'
import { Button, Form, FormItem, Input, Message, Container, Header, Aside, Main ,Menu,Submenu,MenuItem} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
// 将message全局挂载到vue上成为一个属性，可$message全局使用
Vue.prototype.$message = Message