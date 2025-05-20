/* Definición de la configuración de idiomas */
export const i18n = {
    /* Idioma por defecto */
    defaultLocale: 'es',
    /* Idiomas disponibles */
    locales: ['es', 'en'],
} as const;

/* Definición del tipo de idioma */
export type Locale = (typeof i18n)['locales'][number];

/* Definición del espacio de nombres por defecto */
export const defaultNS = 'common';

/* Definición del nombre de la cookie */
export const cookieName = 'i18next';

/* Definición de las opciones de idioma */
export function getOptions(lng = i18n.defaultLocale, ns = defaultNS) {
  return {
    supportedLngs: i18n.locales,
    fallbackLng: i18n.defaultLocale,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
} 