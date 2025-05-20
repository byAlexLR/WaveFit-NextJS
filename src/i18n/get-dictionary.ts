/* Importación de la configuración de idiomas */
import type { Locale } from './config';
import type { Dictionary } from './types';

// Importamos los diccionarios directamente
import es from './dictionaries/es.json';
import en from './dictionaries/en.json';

const dictionaries: Record<Locale, Dictionary> = {
  es,
  en,
} as const;

/* Exportación de la función para obtener el diccionario */
export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  const dictionary = dictionaries[locale];
  if (!dictionary) {
    throw new Error(`Dictionary not found for locale: ${locale}`);
  }
  return dictionary;
};

