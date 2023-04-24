import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    outDir: 'build',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        dockerHub: 'src/pages/dockerHub/index.jsx',
        sobre: 'src/pages/sobre/index.jsx',
      },
    },
  },
  server: {
    port: 4050,
  },
})

  
