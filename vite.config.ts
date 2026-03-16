import { fileURLToPath, URL } from 'node:url'
import ui from '@nuxt/ui/vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'
import { defineConfig } from 'vite'
import { VueRouterAutoImports } from 'vue-router/unplugin'
import VueRouter from 'vue-router/vite'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    VueRouter({
      dts: 'src/route-map.d.ts',
      extensions: ['.vue'],
    }),
    vue(),
    ui({
      autoImport: {
        // auto import packages
        imports: ['vue', VueRouterAutoImports, '@vueuse/core'],
        // .d.ts 파일 생성 경로
        dts: 'src/auto-imports.d.ts',
        // 특정 디렉토리 내 함수 auto import
        dirs: [
          './src/composables',
          './src/utils',
          './src/modules/request.ts',
        ],
      },
      components: {
        resolvers: [],
        include: [/\.vue$/, /\.vue\?vue/],
        dts: './src/components.d.ts',
      },
    }),
    tailwindcss(),
  ],
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%')),
    },
  },
  build: {
    cssMinify: 'lightningcss',
  },
})
