import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { TECHNOLOGIES } from "./../../const/technologies";

const technologyDescriptions: { [key: string]: string } = {
  Angular:
    "Un framework de desarrollo web basado en TypeScript, ideal para aplicaciones de gran escala y de una sola página (SPA).",
  Astro:
    "Un generador de sitios estáticos moderno que permite crear sitios web rápidos y eficientes.",
  AWS: "Una plataforma de servicios en la nube que ofrece una amplia gama de herramientas para el desarrollo y despliegue de aplicaciones.",
  Bootstrap:
    "Un framework CSS popular para diseñar sitios web responsivos y móviles primero.",
  "C#": "Un lenguaje de programación versátil utilizado en el desarrollo de aplicaciones .NET.",
  CSS3: "La última evolución de las Hojas de Estilo en Cascada, fundamental para el diseño web moderno.",
  Firebase:
    "Una plataforma de desarrollo de aplicaciones móviles y web que proporciona herramientas y servicios para crear apps de alta calidad.",
  Gatsby:
    "Un framework basado en React para crear sitios web y aplicaciones rápidas y optimizadas.",
  HTML5:
    "La última versión del lenguaje de marcado estándar para crear páginas web.",
  Java: "Un lenguaje de programación versátil utilizado en una amplia gama de aplicaciones, desde móviles hasta sistemas empresariales.",
  JavaScript:
    "El lenguaje de programación esencial para el desarrollo web front-end y cada vez más utilizado en el back-end.",
  "Material UI":
    "Una biblioteca de componentes de React que implementa el diseño Material Design de Google.",
  MongoDB:
    "Una base de datos NoSQL flexible y escalable, ideal para aplicaciones modernas.",
  MySQL:
    "Un sistema de gestión de bases de datos relacional ampliamente utilizado en aplicaciones web.",
  NestJs:
    "Un framework progresivo de Node.js para crear aplicaciones del lado del servidor eficientes y escalables.",
  NextJs:
    "Un framework de React que permite funcionalidades como renderizado del lado del servidor y generación de sitios estáticos para aplicaciones web.",
  NodeJs:
    "Un entorno de ejecución de JavaScript del lado del servidor que permite crear aplicaciones web escalables.",
  PostgreSQL:
    "Un sistema de gestión de bases de datos relacional potente y de código abierto.",
  React:
    "Una biblioteca de JavaScript para construir interfaces de usuario interactivas y eficientes.",
  Sass: "Un preprocesador CSS que extiende las capacidades de CSS con variables, anidamiento y más.",
  "Tailwind CSS":
    "Un framework CSS de utilidad para crear diseños personalizados rápidamente.",
  TypeScript:
    "Un superconjunto tipado de JavaScript que añade tipos opcionales, clases y módulos.",
};

export default function TechnologiesGrid() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {TECHNOLOGIES.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center p-4 bg-gray-800 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
            onClick={() => setSelectedTech(tech.name)}
          >
            <img
              src={tech.image || "/placeholder.svg"}
              alt={tech.name}
              className="w-16 h-16"
            />
            <p className="mt-2 text-center text-sm font-medium text-gray-300">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
      <Dialog open={!!selectedTech} onOpenChange={() => setSelectedTech(null)}>
        <DialogContent className="bg-gray-800 text-white border border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-blue-400">
              {selectedTech}
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <img
                src="/placeholder.svg"
                alt={`${selectedTech} ilustración`}
                className="w-full h-auto rounded-lg"
                width={300}
                height={200}
              />
            </div>
            <DialogDescription className="text-gray-300 leading-relaxed">
              {selectedTech && (
                <>
                  <p className="mb-4">{technologyDescriptions[selectedTech]}</p>
                  <p className="text-sm text-blue-300">
                    Nuestro equipo tiene amplia experiencia en el uso de{" "}
                    {selectedTech} para desarrollar soluciones robustas y
                    eficientes.
                  </p>
                </>
              )}
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
