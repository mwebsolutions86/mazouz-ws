'use client';

import React from 'react';
import Background3D from '@/app/components/3d/Background3D';
import { HorizontalParallax } from '@/app/components/ui/Parallax';
import { Smartphone, Brain, Globe, Layers, Cpu, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

// DONNÉES SERVICES (SEO OPTIMISÉ)
const services = [
  {
    id: "01",
    icon: Smartphone,
    title: "MOBILE ENGINEERING",
    tagline: "React Native • iOS • Android",
    description: "Nous forgeons des applications natives ultra-performantes. Pas de webviews lentes, mais du vrai code natif. Animations fluides à 60fps, intégration profonde avec le hardware (GPS, Haptique, Caméra) et architecture offline-first.",
    features: ["Performance Native 60FPS", "Architecture Offline-First", "Animations Gestuelles"]
  },
  {
    id: "02",
    icon: Brain,
    title: "AI INTEGRATION",
    tagline: "LLM • Machine Learning • Agents",
    description: "L'IA n'est plus une option, c'est le moteur. Nous intégrons des modèles LLM (GPT-4, Llama) et des agents autonomes directement dans vos processus. Chatbots contextuels, analyse prédictive de données et automatisation intelligente.",
    features: ["Agents Autonomes", "RAG (Retrieval Augmented Gen)", "Fine-Tuning de Modèles"]
  },
  {
    id: "03",
    icon: Globe,
    title: "IMMERSIVE WEB",
    tagline: "Three.js • WebGL • Next.js",
    description: "Le web en 2D est révolu. Nous créons des expériences 3D interactives qui captivent l'attention et augmentent les conversions. Du design primé, optimisé pour ne pas ralentir le navigateur, offrant une expérience marque inoubliable.",
    features: ["Expériences 3D Temps Réel", "Shaders Custom", "Micro-Interactions"]
  },
  {
    id: "04",
    icon: Layers,
    title: "SAAS ARCHITECTURE",
    tagline: "Cloud • Scalability • Security",
    description: "Bâtir pour scaler. Nous concevons des backends robustes capables d'encaisser la charge de millions d'utilisateurs. Architecture micro-services ou monolithique modulaire, sécurisée par design (OWASP) et déployée sur le Edge.",
    features: ["Multi-Tenancy", "API REST & GraphQL", "Sécurité Bancaire"]
  },
  {
    id: "05",
    icon: Cpu,
    title: "IOT & HARDWARE",
    tagline: "Embedded • Bluetooth • Real-time",
    description: "Le code rencontre le métal. Nous connectons vos logiciels au monde physique. Protocoles BLE, MQTT, Websockets. Pilotage de drones, domotique, wearables santé. Nous rendons le hardware intelligent et réactif.",
    features: ["Communication BLE/MQTT", "Traitement de Signal", "Dashboard Temps Réel"]
  },
  {
    id: "06",
    icon: Zap,
    title: "PERFORMANCE AUDIT",
    tagline: "Core Vitals • Speed • SEO",
    description: "La vitesse est une fonctionnalité. Nous disséquons votre existant. Optimisation des Core Web Vitals, réduction du Time-to-Interactive, SEO technique avancé. Nous transformons les sites lents en éclairs pour le ranking Google.",
    features: ["Score Lighthouse 100", "Optimisation Serveur", "SEO Technique"]
  }
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-28 md:pt-32 px-4 md:px-6 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      <Background3D />
      
      <div className="max-w-7xl mx-auto relative z-10 pb-20">
        
        {/* HEADER */}
        <div className="mb-12 md:mb-20 border-b border-white/10 pb-8 md:pb-10">
            <HorizontalParallax direction={-1} speed={30}>
                <h2 className="text-cyan-500 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] mb-2 md:mb-4">CAPACITÉS OPÉRATIONNELLES</h2>
            </HorizontalParallax>
            <HorizontalParallax direction={1} speed={60}>
                <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 leading-none">
                    NOTRE <span className="text-white">ARSENAL</span>
                </h1>
            </HorizontalParallax>
        </div>

        {/* GRILLE SERVICES DÉTAILLÉS */}
        <div className="grid grid-cols-1 gap-6 md:gap-8">
           {services.map((service, index) => (
             <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 md:p-12 rounded-2xl md:rounded-3xl border border-white/5 bg-black/40 backdrop-blur-xl hover:bg-white/[0.02] transition-all duration-500 overflow-hidden"
             >
                {/* Gradient Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">
                    
                    {/* Colonne Gauche : Icone & Titre */}
                    <div className="w-full md:w-1/3 flex flex-col gap-4 md:gap-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors">
                            <service.icon size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors md:w-[32px] md:h-[32px]" />
                        </div>
                        <div>
                            <div className="text-cyan-500 font-mono text-[10px] md:text-xs font-bold mb-1 md:mb-2">{service.id}  SYSTEM</div>
                            
                            {/* PARALLAXE LÉGER SUR LE TITRE */}
                            <HorizontalParallax direction={1} speed={15}>
                                <h2 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">{service.title}</h2>
                            </HorizontalParallax>
                            
                            <p className="text-xs md:text-sm text-gray-500 font-mono border-l-2 border-cyan-500/30 pl-3 leading-tight">{service.tagline}</p>
                        </div>
                    </div>

                    {/* Colonne Droite : Description & Features */}
                    <div className="w-full md:w-2/3">
                        <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 font-light">
                            {service.description}
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-xs md:text-sm font-bold text-gray-400">
                                    <CheckCircle2 size={14} className="text-cyan-500 min-w-[14px]" />
                                    {feature}
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/5 flex justify-end">
                            <a href="/contact" className="flex items-center gap-2 text-xs md:text-sm font-bold text-white hover:text-cyan-400 transition-colors cursor-pointer group/link">
                                DÉMARRER UN PROJET <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                </div>
             </motion.div>
           ))}
        </div>

        {/* CTA FINAL */}
        <div className="mt-20 md:mt-32 text-center">
            <p className="text-gray-500 mb-4 md:mb-6 font-mono text-xs md:text-sm">PRÊT À DÉPLOYER ?</p>
            <a href="/contact" className="inline-block px-8 py-4 md:px-12 md:py-6 bg-white text-black font-black text-sm md:text-xl tracking-widest rounded-full hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                LANCER L&apos;INITIATIVE
            </a>
        </div>

      </div>
    </div>
  );
}