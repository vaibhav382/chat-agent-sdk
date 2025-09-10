import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // This is the configuration for building a library
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ContentstackChatSDK',
      fileName: 'contentstack-chat-sdk'
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      // into your library (React in this case)
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
