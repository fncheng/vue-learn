<template>
  <div class="sideBar" style="width: 256px">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <!-- 
      驼峰式命名和下划线命名皆可
      default-selected-keys: 初始选中的菜单项 key 数组
      default-open-keys: 初始展开的 SubMenu 菜单项 key 数组
     -->
    <a-menu
      :defaultSelectedKeys="['2']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <a-menu-item key="1">
        <a-icon type="pie-chart" />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="desktop" />
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="inbox" />
        <span>Option 3</span>
      </a-menu-item>
      <!-- 二级菜单 -->
      <a-sub-menu key="sub1">
        <span slot="title"
          ><a-icon type="mail" /><span>Navigation One</span></span
        >
        <a-sub-menu key="sub4">
          <span slot="title"><a-icon type="mail" /><span>Option 5</span></span>
          <a-menu-item key="13">Option 5-1</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="6">
          Option 6
        </a-menu-item>
        <a-menu-item key="7">
          Option 7
        </a-menu-item>
        <a-menu-item key="8">
          Option 8
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"
          ><a-icon type="appstore" /><span>Navigation Two</span></span
        >
        <a-menu-item key="9">
          Option 9
        </a-menu-item>
        <a-menu-item key="10">
          Option 10
        </a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">
            Option 11
          </a-menu-item>
          <a-menu-item key="12">
            Option 12
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false
    }
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style>
.sideBar {
  height: auto;
}
</style>
