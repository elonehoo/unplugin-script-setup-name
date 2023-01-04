import { defineConfig } from 'vite'
// import Inspect from 'vite-plugin-inspect'
import vue from '@vitejs/plugin-vue'
import scriptSetupName from 'unplugin-vue-sfc-name/vite'

export default defineConfig({
  plugins: [
    vue(),
    // @ts-expect-error vite plugin error
    scriptSetupName(),
  ],
})
