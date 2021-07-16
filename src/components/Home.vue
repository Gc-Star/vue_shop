<template>
  <el-container class="home_container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="loginout">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区 -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
        >
          <!-- 一级菜单 -->
          <el-submenu
            :index="item.id + ''"
            v-for="item in menuList"
            :key="item.id"
          >
            <!-- 一级菜单模板区 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconsObj[item.id]"></i>
              <!-- 文本 -->
              <span>{{ item.authName }}</span>
            </template>

            <!-- 二级菜单 -->
            <el-menu-item
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
            >
              <!-- 二级菜单模板区 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>{{ subItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主题 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      // 左侧菜单数据
      menuList: [],
      iconsObj: {
        125: 'iconfont icon-users',
        103: 'iconfont icon-028tijikongjian',
        101: 'iconfont icon-006shangpin',
        102: 'iconfont icon-025danju',
        145: 'iconfont icon-baobiao'
      },
      // 是否折叠
      isCollapse: false
    }
  },
  // eslint-disable-next-line space-before-function-paren
  created() {
    this.getMenuList()
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    loginout() {
      // 清空sessionStorage
      window.sessionStorage.clear()
      // 重定向到登录页
      this.$router.push('/login')
    },
    // 获取所有的菜单
    // eslint-disable-next-line space-before-function-paren
    async getMenuList() {
      // 发送请求
      const { data: res } = await this.$http.get('menus') // get函数返回值是一个Promise，为了简化promise操作可以用async和await
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menuList = res.data // 数组直接赋值
      console.log(res)
    },
    // 点击按钮切换菜单的折叠和展开
    // eslint-disable-next-line space-before-function-paren
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>
<style lang="less" scoped>
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 24px;
}
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}
.el-Main {
  background-color: #eaedf1;
}
.home_container {
  height: 100%;
}
.iconfont {
  margin-right: 10px;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 12px;
  line-height: 25px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
