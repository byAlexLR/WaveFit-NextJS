"use client";

/* Importación de useState */
import { useState, useEffect } from "react";

/* Importación de useRouter y usePathname */
import { useRouter, usePathname } from "next/navigation";

/* Importación de FontAwesomeIcon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* Importación del icono de la hamburguesa */
import { faBars } from "@fortawesome/free-solid-svg-icons";

/* Importación de la configuración de idiomas */
import { i18n } from "@/i18n/config";
/* Importación del tipo de idioma */
import type { Locale } from "@/i18n/config";
/* Importación de los diccionarios y el tipo de idioma */
import { getDictionary } from "@/i18n/get-dictionary";

/* Definición de la interfaz para el componente Header */
interface HeaderProps {
  /* Propiedad lang para obtener el idioma */
  lang: Locale;
}

/* Definición de la interfaz para el diccionario */
interface Dictionary {
  comun: {
    wavefit: string;
    idioma: string;
    menu: string;
    acceder: string;
  };
  navegacion: {
    inicio: string;
    comunidad: string;
    "sobre-mi": string;
    tarifas: string;
    entreno: string;
    contacto: string;
  };
}

/* Exportación del componente Header */
export default function Header({ lang }: HeaderProps) {
  /* Estado para almacenar el diccionario */
  const [dict, setDict] = useState<Dictionary | null>(null);
  /* Estado para controlar el menú */
  const [menuOpen, setMenuOpen] = useState(false);
  /* Obtención de la ruta actual */
  const router = useRouter();
  /* Obtención de la ruta actual */
  const pathname = usePathname();

  /* Efecto para cargar el diccionario */
  useEffect(() => {
    /* Función para cargar el diccionario */
    const loadDictionary = async () => {
      /* Carga del diccionario */
      const dictionary = await getDictionary(lang);
      /* Establecimiento del diccionario */
      setDict(dictionary as unknown as Dictionary);
    };
    /* Carga del diccionario */
    loadDictionary();
  }, [lang]);

  /* Si el diccionario no está cargado, se muestra un estado de carga */
  if (!dict) {
    return (
      <header className="font-sans font-semibold uppercase h-[92px] fixed top-0 w-full z-10">
        <nav className="flex justify-around items-center w-full p-[var(--spacing-m)] px-8 md:px-12 lg:px-16 bg-[var(--color-claro)]">
          <h1 className="text-3xl">WaveFit</h1>
        </nav>
      </header>
    );
  }

  return (
    <header className="flex justify-center items-center font-arial uppercase fixed top-0 w-full z-[100] font-semibold h-[90px]">
      <nav className="flex justify-around items-center w-full p-[var(--spacing-m)] px-8 md:px-12 lg:px-16 bg-[var(--color-claro)] h-full">
        {/* Logo animado */}
        <div className="flex relative items-center justify-center overflow-hidden h-14">
          <h1 className="inline-block opacity-100 animate-moveWaveFit text-3xl">
            <a
              href={`/${lang}`}
              className="font-[var(--fuente-principal)] text-3xl transition-none"
            >
              {dict.comun.wavefit}
            </a>
          </h1>
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 animate-moveWF text-3xl tracking-[2px]">
            <a
              href={`/${lang}`}
              className="font-[var(--fuente-principal)] text-3xl transition-none"
            >
              WF
            </a>
          </h1>
        </div>

        {/* Botón menú hamburguesa móvil y botón de idioma */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={() => {
              const nextLocale = lang === "es" ? "en" : "es";
              router.push(
                `/${nextLocale}${pathname.replace(/^\/[a-z]{2}/, "")}`
              );
            }}
            className="bg-[var(--color-oscuro)] text-[var(--color-claro)] w-8 h-8 rounded-full border-[1.2px] border-transparent transition-all duration-[var(--transition-normal)] hover:border-[var(--color-oscuro)] hover:bg-[var(--color-claro)] hover:text-[var(--color-oscuro)] flex items-center justify-center text-lg cursor-pointer"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-3xl cursor-pointer bg-transparent border-none p-[var(--spacing-mp)]"
            aria-label={dict.comun.menu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {/* Menú navegación */}
        <ul
          className={`
            hidden lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-[var(--spacing-mg)]
            lg:static lg:max-h-none lg:opacity-100 lg:mt-0 lg:mb-0 lg:overflow-visible 
            lg:shadow-none lg:bg-transparent lg:transform-none
          `}
        >
          {Object.entries(dict.navegacion)
            .filter(([key]) => key !== "inicio")
            .map(([key, value]) => (
              <li
                key={key}
                className="transition-all duration-300 ease-in-out relative hover:scale-120 w-full lg:w-auto text-center my-1 lg:my-0"
              >
                <a
                  href={`#${key}`}
                  className="inline-block p-[var(--spacing-p)] relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1.2px] after:bg-[var(--color-oscuro)] after:transition-all after:duration-despacio after:ease-in-out hover:after:w-1/6 lg:after:w-0 lg:hover:after:w-[120%] w-full lg:w-auto text-center hover:text-[var(--color-oscuro)] transition-colors duration-300"
                >
                  {value}
                </a>
              </li>
            ))}
        </ul>

        {/* Menú móvil */}
        <ul
          className={`
            lg:hidden absolute top-[90px] left-0 w-full flex flex-col items-center
            bg-[var(--color-claro)] shadow-[0_5px_5px_rgba(0,0,0,0.1)] z-[100]
            transform transition-all duration-500 ease-in-out
            ${
              menuOpen
                ? "max-h-[500px] opacity-100 mt-12 mb-20 gap-8 translate-y-0 py-8"
                : "max-h-0 opacity-0 pointer-events-none mt-0 mb-0 gap-0 -translate-y-4 py-0"
            }
          `}
        >
          {Object.entries(dict.navegacion)
            .filter(([key]) => key !== "inicio")
            .map(([key, value], index, array) => (
              <li
                key={key}
                className={`transition-all duration-300 ease-in-out relative hover:scale-120 w-full text-center my-1 ${
                  index === array.length - 1 ? "mb-4" : ""
                }`}
              >
                <a
                  href={`#${key}`}
                  className="inline-block p-[var(--spacing-p)] relative w-full lg:w-auto text-center hover:text-[var(--color-oscuro)] transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {value}
                </a>
              </li>
            ))}
        </ul>

        {/* Idioma y botón acceder */}
        <div className="hidden lg:flex gap-2 items-center">
          {/* Botón de idioma */}
          <button
            onClick={() => {
              const nextLocale = lang === "es" ? "en" : "es";
              router.push(
                `/${nextLocale}${pathname.replace(/^\/[a-z]{2}/, "")}`
              );
            }}
            className="bg-[var(--color-oscuro)] text-[var(--color-claro)] w-8 h-8 rounded-full border-[1.2px] border-transparent transition-all duration-[var(--transition-normal)] hover:border-[var(--color-oscuro)] hover:bg-[var(--color-claro)] hover:text-[var(--color-oscuro)] flex items-center justify-center text-lg cursor-pointer"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          {/* Botón acceder */}
          <div className="relative inline-block overflow-hidden rounded-[var(--border-radius-g)_var(--border-radius-m)] border border-[var(--color-oscuro)] group">
            <span className="absolute left-0 top-0 h-full w-full bg-[var(--color-oscuro)] z-[1] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            <a
              href={`/${lang}/registro`}
              className="relative z-[2] px-6 py-2 h-8 w-32 flex items-center justify-center text-[var(--color-oscuro)] group-hover:text-[var(--color-claro)] text-lg transition-colors duration-300"
            >
              {dict.comun.acceder}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
