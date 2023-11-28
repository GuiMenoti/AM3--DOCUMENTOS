import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import { manifestPWA } from './src/configs/pwa/manifest';
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    // plugins: [react(), VitePWA(manifestPWA)],
    // server: {
    //   https: false,
    // },
    define: {
      'import.meta.env': env,
    },
  };
});
