<template>
  <div class="discord-card">
    <div class="discord-top">
      <svg class="discord-mark" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M20.317 4.369A19.79 19.79 0 0 0 15.885 3c-.21.375-.444.88-.608 1.28a18.27 18.27 0 0 0-5.487 0A12.6 12.6 0 0 0 9.18 3a19.7 19.7 0 0 0-4.435 1.37C1.94 8.59 1.18 12.7 1.56 16.76a19.9 19.9 0 0 0 6.04 3.04c.49-.66.925-1.36 1.3-2.1-.71-.27-1.39-.6-2.03-.99.17-.12.34-.25.5-.38a14.2 14.2 0 0 0 12.26 0c.16.13.33.26.5.38-.64.39-1.32.72-2.03.99.375.74.81 1.44 1.3 2.1a19.85 19.85 0 0 0 6.04-3.04c.44-4.7-.75-8.78-3.13-12.39ZM8.52 14.34c-1.18 0-2.15-1.08-2.15-2.41 0-1.33.95-2.41 2.15-2.41 1.21 0 2.18 1.09 2.15 2.41 0 1.33-.95 2.41-2.15 2.41Zm6.96 0c-1.18 0-2.15-1.08-2.15-2.41 0-1.33.95-2.41 2.15-2.41 1.21 0 2.18 1.09 2.15 2.41 0 1.33-.94 2.41-2.15 2.41Z"/>
      </svg>
      <span class="discord-label">Discord</span>
      <span v-if="online !== null" class="discord-presence">
        <span class="discord-dot" aria-hidden="true"></span>{{ online.toLocaleString() }} online
      </span>
    </div>

    <p class="discord-blurb">Get help, share scripts, and follow updates with the PowerKuy Community.</p>

    <a href="https://discord.gg/powerkuyofficial" target="_blank" rel="noopener" class="discord-cta">
      Join the server
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6"/>
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const online = ref<number | null>(null)

onMounted(async () => {
  try {
    const res = await fetch('https://discord.com/api/guilds/897496245373906995/widget.json')
    if (!res.ok) return
    const data = await res.json()
    if (typeof data.presence_count === 'number') online.value = data.presence_count
  } catch {
    online.value = null
  }
})
</script>

<style scoped>
.discord-card {
  margin: 20px 0;
  padding: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  box-shadow: var(--vp-shadow-2, 0 1px 2px rgba(0, 0, 0, 0.06), 0 8px 20px rgba(0, 0, 0, 0.05));
}

.discord-top {
  display: flex;
  align-items: center;
  gap: 8px;
}

.discord-mark {
  color: #5865f2;
  flex-shrink: 0;
}

.discord-label {
  font-weight: 600;
  font-size: 14px;
  color: var(--vp-c-text-1);
}

.discord-presence {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: var(--vp-c-text-2);
  font-variant-numeric: tabular-nums;
}

.discord-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #23a55a;
  box-shadow: 0 0 0 3px rgba(35, 165, 90, 0.18);
}

.discord-blurb {
  margin: 10px 0 14px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.discord-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  width: 100%;
  padding: 9px 14px;
  border-radius: 8px;
  background: #5865f2;
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  text-decoration: none;
  transition: background-color 0.15s ease;
}

.discord-cta:hover {
  background: #4a56e0;
}

.discord-cta svg {
  transition: transform 0.15s ease;
}

.discord-cta:hover svg {
  transform: translateX(2px);
}
</style>
