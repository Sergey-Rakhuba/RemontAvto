import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/RemontAvto/' : '/',
  resolve: {
    alias: {
      '@': './src'
    }
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.mp4'],
  server: {
    port: 3000,
    open: true
  },
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        main: './index.html'
      },
      external: ['@mui/*']
    },
    assetsInlineLimit: 0,
    minify: true,
    terserOptions: {
      compress: {
        drop_console: true
      }
    },
    sourcemap: true,
    output: {
      entryFileNames: 'main-[hash].js',
      chunkFileNames: '[name]-[hash].js',
      assetFileNames: '[name]-[hash].[ext]'
    }
  }
})
