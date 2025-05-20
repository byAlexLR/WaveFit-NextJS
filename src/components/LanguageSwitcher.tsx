'use client';

/* Importación de useRouter y usePathname */
import { useRouter, usePathname } from 'next/navigation';

/* Importación de la configuración de idiomas */
import { i18n } from '@/i18n/config';

export default function LanguageSwitcher() {
  /* Obtención de la ruta actual */
  const router = useRouter();
  /* Obtención de la ruta actual */
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    /* Obtener la ruta actual sin el prefijo del idioma */
    const currentPath = pathname.replace(/^\/[a-z]{2}/, '');
    /* Construir la nueva ruta con el nuevo idioma */
    const newPath = `/${newLocale}${currentPath}`;
    /* Redirección a la nueva ruta */
    router.push(newPath);
  };

  return (
    /* Contenedor de los botones de idioma */
    <div className="flex items-center gap-2">
      {/* Mapeo de idiomas */}
      {i18n.locales.map((locale) => (
        /* Botón de idioma */
        <button
          key={locale}
          onClick={() => handleLanguageChange(locale)}
          className="px-2 py-1 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
} 