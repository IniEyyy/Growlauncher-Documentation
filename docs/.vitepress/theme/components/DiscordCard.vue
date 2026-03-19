<template>
  <div class="discord-card">
    <div class="discord-header">
      <h4>Discord Community</h4>
    </div>
    <div class="discord-content">
      <div class="discord-widget">
        <iframe 
          src="https://discord.com/widget?id=897496245373906995&theme=dark" 
          width="100%" 
          height="250" 
          frameborder="0" 
          allowtransparency="true"
          class="discord-iframe">
        </iframe>
      </div>
      <a href="https://discord.gg/powerkuyofficial" target="_blank" class="discord-button">
        <span class="discord-icon">💬</span>
        Join Discord
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
// No loading state - show immediately
</script>

<style scoped>
.discord-card {
  background: linear-gradient(135deg, #5865F2 0%, #7289DA 100%);
  border-radius: 8px;
  padding: 12px;
  color: white;
  text-align: center;
  margin: 16px 0;
  box-shadow: 0 2px 12px rgba(88, 101, 242, 0.3);
  font-size: 12px;
}

.discord-header {
  margin-bottom: 12px;
}

.discord-header h4 {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
}

.discord-widget {
  margin-bottom: 12px;
  border-radius: 6px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
}

.discord-iframe {
  border: none;
  border-radius: 6px;
  width: 100%;
}

.discord-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: white;
  color: #5865F2;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 11px;
  transition: all 0.2s ease;
  width: 100%;
  justify-content: center;
}

.discord-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
}

.discord-icon {
  font-size: 20px;
  line-height: 1;
}

@media (max-width: 768px) {
  .discord-iframe {
    height: 200px;
  }
  
  .discord-card {
    margin: 12px 0;
    padding: 10px;
  }
}
</style>
