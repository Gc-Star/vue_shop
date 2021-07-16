/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
/* eslint-disable eol-last */
// 按需导入所需的组件
import Vue from 'vue'
import { Button } from 'element-ui'
import { Form, FormItem } from 'element-ui'
import { Input } from 'element-ui'
// 导入弹框提示组件
import { Message } from 'element-ui'
// 导入首页布局的组件
import { Container, Header, Aside, Main } from 'element-ui'
// 导入首页左侧菜单栏的组件
import { Menu, Submenu, MenuItem } from 'element-ui'

// 注册为全局组件
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

// 将弹框组件挂载到Vue的原型对象上,每一个组件都可以通过this来访问$message，只要访问到$message就可以进行弹框提示
Vue.prototype.$message = Message