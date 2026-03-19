import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h, defineAsyncComponent } from 'vue'
import './custom.css'

// Async DiscordCard component with loading state
const AsyncDiscordCard = defineAsyncComponent(() => import('./components/DiscordCard.vue'))

const theme: Theme = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-after': () => h(AsyncDiscordCard)
    })
  }
}

export default theme
