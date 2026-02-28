import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Auto-scroll outline to active heading
    if (typeof window !== 'undefined') {
      router.onAfterRouteChanged = () => {
        setTimeout(() => {
          const outline = document.querySelector('.VPOutline')
          if (!outline) return

          const activeLink = outline.querySelector('.outline-link.active')
          if (!activeLink) return

          const outlineContainer = outline.querySelector('.VPOutline-content')
          if (!outlineContainer) return

          // Scroll active link into view with smooth behavior
          const linkRect = activeLink.getBoundingClientRect()
          const containerRect = outlineContainer.getBoundingClientRect()
          
          const scrollTop = outlineContainer.scrollTop
          const linkTop = linkRect.top - containerRect.top + scrollTop
          const containerHeight = outlineContainer.clientHeight
          const linkHeight = linkRect.height

          // Calculate scroll position to center the active link
          const scrollPosition = linkTop - (containerHeight / 2) + (linkHeight / 2)

          outlineContainer.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
          })
        }, 100) // Small delay to ensure DOM is updated
      }
    }
  }
}

export default theme
