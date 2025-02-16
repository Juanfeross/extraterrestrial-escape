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

interface SocialMedia {
  [key: string]: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  projects: string[];
  socialMedia: SocialMedia;
}

interface TeamMemberModalProps {
  member: TeamMember;
}

export default function TeamMemberModal({ member }: TeamMemberModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="outline" size="sm" onClick={() => setIsOpen(true)}>
        Ver Perfil
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-gray-800 text-white border border-gray-700 max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-blue-400">
              {member.name}
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              {member.role}
            </DialogDescription>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Habilidades</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {member.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Proyectos Destacados
              </h3>
              <ul className="list-disc list-inside text-gray-300">
                {member.projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Biografía</h3>
              <p className="text-gray-300 mb-4">{member.bio}</p>
              <h3 className="text-xl font-semibold mb-2">Redes Sociales</h3>
              <div className="flex space-x-4">
                {Object.entries(member.socialMedia).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
