// doc
// https://vitepress.dev/zh/guide/custom-theme

// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'
import Layout from '../components/Layout/Layout.vue'
import Footprints from '../components/Footprints/Footprints.vue'
import Discussions from '../components/Discussions/Discussions.vue'
import BilibiliOutsidePlayer from '../components/BilibiliOutsidePlayer/BilibiliOutsidePlayer.vue'
import Settings from '../components/Settings/Settings.vue'

export default {
  extends: DefaultTheme,

  // doc: https://vitepress.dev/zh/guide/extending-default-theme#layout-slots
  // 使用注入插槽的包装组件覆盖 Layout
  Layout,
  
  // doc: https://vitepress.dev/zh/guide/extending-default-theme#registering-global-components
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component('Footprints', Footprints)
    app.component('Discussions', Discussions)
    app.component('BilibiliOutsidePlayer', BilibiliOutsidePlayer)
    app.component('Settings', Settings)
  },
} satisfies Theme
