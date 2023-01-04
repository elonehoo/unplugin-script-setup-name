import { defineConfig } from 'vite'
// import Inspect from 'vite-plugin-inspect'
import vue from '@vitejs/plugin-vue'
import scriptSetupName from 'unplugin-script-setup-name/vite'

export default defineConfig({
  plugins: [
    vue(),
    scriptSetupName(),
  ],
})
