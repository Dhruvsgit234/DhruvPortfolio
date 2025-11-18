import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const glbPlugin = {
  name: 'glb-loader',
  resolveId(id) {
    if (id.endsWith('.glb')) {
      return id;
    }
  },
  load(id) {
    if (id.endsWith('.glb')) {
      return `export default "${id}"`;
    }
  }
};

export default defineConfig({
  plugins: [glbPlugin, react()],
  assetsInclude: ['*.glb', '*.gltf']
})
