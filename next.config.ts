/* Importación de la configuración de idiomas */
const { i18n } = require('./src/i18n/config');

/* Configuración de Next.js */
const nextConfig = {
  /* Configuración de imágenes */
  images: {
    domains: ['wavefit.com'],
  },
};

/* Exportación de la configuración */
module.exports = nextConfig;