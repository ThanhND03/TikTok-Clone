import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import alias from '@rollup/plugin-alias';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        { find: '~src', replacement: path.resolve(__dirname, 'src') },
        { find: '~', replacement: path.resolve(__dirname, 'src/components') },
        { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
        // Thêm các alias khác nếu cần
      ]
    })
  ],
})
