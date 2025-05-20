"use client";

/* Importación de useState */
import { useState, useEffect } from "react";

/* Importaciones de FontAwesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* Importación de los iconos de las redes sociales */
import { faInstagram, faXTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";

/* Importación de la configuración de idiomas */
import { getDictionary } from "@/i18n/get-dictionary";
/* Importación del tipo de idioma */
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { i18n } from "@/i18n/config";

/* Definición de la interfaz para el componente Home */
interface HomeProps {
  /* Propiedad lang para obtener el idioma */
  params: {
    lang: Locale;
  };
}

/* Componente de carga */
function LoadingState() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen bg-black">
      <div className="text-2xl text-white">Cargando...</div>
    </main>
  );
}

/* Componente del cliente */
function HomeClient({ dict }: { dict: Dictionary }) {
  // Convertir los textos animados a un array
  const animatedTexts = [
    dict.sectionOverlay.textoanimado.texto1,
    dict.sectionOverlay.textoanimado.texto2,
    dict.sectionOverlay.textoanimado.texto3,
    dict.sectionOverlay.textoanimado.texto4,
    dict.sectionOverlay.textoanimado.texto5,
    dict.sectionOverlay.textoanimado.texto6,
    dict.sectionOverlay.textoanimado.texto7,
    dict.sectionOverlay.textoanimado.texto8,
    dict.sectionOverlay.textoanimado.texto9,
  ];

  return (
    <main className="flex flex-col items-center w-full overflow-hidden">
      {/* Sección overlay con video de fondo */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          id="background-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/open.mp4" type="video/mp4" />
        </video>

        {/* Título con efecto */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-[var(--color-claro)] px-4">
          <h1 className="texto-bienvenida mb-8">
            {["W", "a", "v", "e", "f", "i", "t"].map((letter, index) => (
              <span
                key={index}
                className="inline-block text-6xl font-bold uppercase animate-onda"
                style={{ animationDelay: `${index * 0.2}s` }}
                aria-hidden="true"
              >
                {letter}
              </span>
            ))}
            <span className="sr-only">Wavefit</span>
          </h1>

          {/* Textos animados */}
          <div className="flex text-center justify-center relative w-full h-[60px]" aria-live="polite">
            {animatedTexts.map((text, index) => (
              <span
                key={index}
                className="absolute text-2xl font-light uppercase opacity-0 shadow-[0px_60px_25px_-20px_rgba(0,0,0,0.5)] animate-aparecer"
                style={{ animationDelay: `${index * 1.5}s` }}
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Barra lateral de redes sociales */}
        <nav className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/30 px-4 py-2 rounded-[30px] z-5">
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="https://www.instagram.com/WaveFitOf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-claro)] text-2xl hover:text-[var(--color-acento)] transition-colors duration-200"
                aria-label={dict.social.instagram}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://www.x.com/WaveFitOf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-claro)] text-2xl hover:text-[var(--color-acento)] transition-colors duration-200"
                aria-label={dict.social.twitter}
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@WaveFitOf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-claro)] text-2xl hover:text-[var(--color-acento)] transition-colors duration-200"
                aria-label={dict.social.tiktok}
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}

/* Componente principal del servidor */
export default async function Home({ params }: HomeProps) {
  // Validar que el idioma sea válido
  if (!i18n.locales.includes(params.lang)) {
    throw new Error(`Invalid locale: ${params.lang}`);
  }
  
  // Cargar el diccionario
  const dict = await getDictionary(params.lang);
  if (!dict) {
    throw new Error('Dictionary not found');
  }

  return <HomeClient dict={dict} />;
}
