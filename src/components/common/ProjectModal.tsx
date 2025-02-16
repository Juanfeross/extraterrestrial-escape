"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

interface ProjectModalProps {
  project: Project;
}

export default function ProjectModal({ project }: ProjectModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="link" onClick={() => setIsOpen(true)}>
        Más Detalles
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-gray-800 text-white border border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-blue-400">
              {project.title}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-auto rounded-lg"
            />
            <DialogDescription className="text-gray-300 leading-relaxed">
              <p className="mb-4">{project.description}</p>
              <h4 className="text-lg font-semibold mb-2">
                Tecnologías utilizadas:
              </h4>
              <ul className="list-disc list-inside mb-4">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <p className="text-sm text-blue-300">
                Este proyecto demuestra nuestra capacidad para crear soluciones
                innovadoras y eficientes utilizando las últimas tecnologías.
              </p>
            </DialogDescription>
            <Button asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visitar Proyecto
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
