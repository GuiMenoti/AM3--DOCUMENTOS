export const manifestPWA = {
  manifest: {
    name: 'Troca-Troca',
    short_name: 'TT',
    theme_color: '#ffff',
    // start_url: 'http://192.168.58.3:4173/',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  injectRegister: 'script',
  registerType: 'autoUpdate',
  devOptions: {
    enabled: true,
  },
};
