'use client';

/* Importación de useState */
import { useState, useEffect } from "react";

/* Importación de useRouter y usePathname */
import { useRouter, usePathname } from "next/navigation";

/* Importación de FontAwesomeIcon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* Importación de los iconos de FontAwesome */
import { faInstagram, faXTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";

/* Importación de la configuración de idiomas */
import { i18n } from "@/i18n/config";
/* Importación del tipo de idioma */
import type { Locale } from "@/i18n/config";
/* Importación de los diccionarios y el tipo de idioma */
import { getDictionary } from "@/i18n/get-dictionary";

/* Definición de la interfaz para el componente Footer */
interface FooterProps {
  /* Propiedad lang para obtener el idioma */
  lang: Locale;
}

/* Exportación del componente Footer */
export default function Footer({ lang }: FooterProps) {
  /* Estado para almacenar el diccionario */
  const [dict, setDict] = useState<Dictionary | null>(null);

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

  /* Si el diccionario no está cargado, se retorna null */
  if (!dict) return null;

  /* Retorno del componente Footer */
  return (
    <footer className="flex flex-col md:flex-row justify-evenly items-center text-center bg-black text-white px-4 py-6 w-full mt-auto">
      {/* Copyright */}
      <div className="text-xs mb-4 md:mb-0">
        <p>
          {dict.comun.wavefit} &copy; {new Date().getFullYear()}. {dict.footer.copyright}{" "} {dict.footer.designedBy}
          <a
            href="https://github.com/byAlexLR"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-accent transition-colors"
          >
            {dict.footer.byalexlr}
          </a>
        </p>
      </div>

      {/* Redes sociales */}
      <div className="flex gap-6 text-xs mb-4 md:mb-0">
        <ul className="flex gap-4 list-none">
          <li>
            <a
              href="https://www.instagram.com/WaveFitOf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-accent transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-sm" />
            </a>
          </li>
          <li>
            <a
              href="https://www.x.com/WaveFitOf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:text-accent transition-colors"
            >
              <FontAwesomeIcon icon={faXTwitter} className="text-sm" />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@WaveFitOf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-accent transition-colors"
            >
              <FontAwesomeIcon icon={faTiktok} className="text-sm" />
            </a>
          </li>
        </ul>
      </div>

      {/* Términos legales */}
      <div className="text-xs space-x-1">
        <a href={`/${lang}/terminos`} className="hover:text-accent transition-colors">
          {dict.footer.legal.terms}
        </a>{" "}
        |
        <a href={`/${lang}/privacidad`} className="hover:text-accent transition-colors">
          {dict.footer.legal.privacy}
        </a>{" "}
        |
        <a href={`/${lang}/cookies`} className="hover:text-accent transition-colors">
          {dict.footer.legal.cookies}
        </a>{" "}
        |
        <a
          href={`/${lang}/contacto`}
          className="hover:text-accent transition-colors"
        >
          {dict.footer.legal.contact}
        </a>
      </div>
    </footer>
  );
}
