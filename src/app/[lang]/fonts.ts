/* Importación de fuentes de Google Fonts */
import { Bebas_Neue, Poppins } from 'next/font/google';

/* Definición de la fuente Bebas Neue */
export const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
});

/* Definición de la fuente Poppins */
export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
}); 