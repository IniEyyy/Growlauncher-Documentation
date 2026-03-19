<template>
  <div class="table-of-contents">
    <h3>Quick Navigation</h3>
    <ul>
      <li v-for="header in headers" :key="header.anchor">
        <a :href="`#${header.anchor}`" :class="{ 'active': activeHeader === header.anchor }">
          {{ header.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Header {
  title: string
  anchor: string
}

const headers = ref<Header[]>([])
const activeHeader = ref('')

onMounted(() => {
  const content = document.querySelector('.content')
  if (!content) return

  const h2Elements = content.querySelectorAll('h2')
  headers.value = Array.from(h2Elements).map((h2: Element) => {
    const element = h2 as HTMLElement
    return {
      title: element.textContent || '',
      anchor: element.id || element.textContent?.toLowerCase().replace(/\s+/g, '-') || ''
    }
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeHeader.value = (entry.target as HTMLElement).id
        }
      })
    },
    { threshold: 0.1 }
  )

  h2Elements.forEach(h2 => observer.observe(h2))

  onUnmounted(() => observer.disconnect())
})
</script>

<style scoped>
.table-of-contents {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 16px;
  margin: 20px 0;
}

.table-of-contents h3 {
  margin: 0 0 12px 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.table-of-contents ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.table-of-contents li {
  margin-bottom: 8px;
}

.table-of-contents a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 13px;
  transition: color 0.2s;
}

.table-of-contents a:hover,
.table-of-contents a.active {
  color: var(--vp-c-brand-1);
}
</style>
