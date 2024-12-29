'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

const menuItems = [
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Tecnologías", href: "#tecnologias" },
    { label: "Contacto", href: "#contacto" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800'
                : 'bg-gray-900/70 backdrop-blur-sm'
            }`} style={{ transitionProperty: 'background-color, backdrop-filter, box-shadow, border-color' }}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                <div className="w-4 h-4 bg-white rounded-sm"></div>
                            </div>
                            <span className="text-white font-bold text-xl">DevFreelance</span>
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            {menuItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <Button asChild>
                                <a href="/contratar">Contrátanos</a>
                            </Button>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Abrir menú"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
                    {menuItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <div className="mt-4 px-3">
                        <Button asChild className="w-full">
                            <a href="/contratar">Contrátanos</a>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

