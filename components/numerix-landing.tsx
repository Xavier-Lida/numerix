"use client"

import Link from "next/link";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
                </div>

                {/* Decorative grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

                <div className="relative z-10 text-center max-w-5xl mx-auto">
                    {/* Logo/Brand avec animation */}
                    <div className="mb-8 animate-fade-in-down">
                        <div className="inline-block relative">
                            <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 animate-gradient-x mb-2">
                                Numerix
                            </h1>
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 rounded-full transform scale-x-0 animate-scale-in"></div>
                        </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-xl sm:text-2xl md:text-3xl text-white font-light mb-4 px-4 animate-fade-in animation-delay-300 leading-relaxed">
                        L&#39;affichage numérique réinventé
                    </p>

                    <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-12 px-4 animate-fade-in animation-delay-500 leading-relaxed">
                        Transformez votre communication visuelle avec des contenus dynamiques qui captivent et convertissent
                    </p>

                    {/* CTA Button */}
                    <div className="animate-fade-in animation-delay-700">
                        <Link href="/contact" className="inline-block">
                        <span className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-black bg-gradient-to-r from-amber-300 to-yellow-400 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50">
                            <span className="relative z-10 flex items-center gap-3">
                                Demandez une démo
                                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </span>
                        </Link>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* About Section - Notre entreprise */}
            <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-16 sm:mb-20">
                        <span className="inline-block px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold mb-4 border border-amber-500/20">
                            Qui sommes-nous
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Numerix, votre partenaire en <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">affichage dynamique</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                            Une entreprise spécialisée dans l&#39;affichage dynamique possédant son propre logiciel de gestion de contenu
                        </p>
                    </div>

                    {/* Values grid - 2x2 */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Value 1 */}
                        <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Se faire aider par des humains
                            </h3>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                Vous serez toujours servis par des humains et nous avons votre succès à coeur
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10">
                            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Aucune compétence technique nécessaire
                            </h3>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                Nos outils sont conçus afin de vous permettre de gérer facilement vos écrans
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Concentrez vous sur ce qui compte
                            </h3>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                Nous avons des solutions visuels à vous offrir au besoin
                            </p>
                        </div>

                        {/* Value 4 */}
                        <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10">
                            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Du matériel selon vos besoins
                            </h3>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                Que vous soyez déjà équipé ou non, on s’occupe de tout
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Equipment Section - De l'équipement pour tous vos besoins */}
            <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-16 sm:mb-20">
                        <span className="inline-block px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold mb-4 border border-amber-500/20">
                            Nos solutions
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            De l'équipement pour tous vos <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">besoins</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                            Que vous soyez déjà équipé ou non, on s’occupe de tout
                        </p>
                    </div>

                    {/* Equipment grid - 2x2 */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Equipment 1 */}
                        <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Ordinateurs de diffusion
                            </h3>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                Des mini PC performants et fiables pour diffuser votre contenu en continu sur tous vos écrans
                            </p>
                        </div>

                        {/* Equipment 2 */}
                        <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Écrans intelligents
                            </h3>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                Des écrans haute définition avec lecteur intégré pour une installation simple et épurée
                            </p>
                        </div>

                        {/* Equipment 3 */}
                        <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Murs vidéo
                            </h3>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                {/*Créez des installations visuelles spectaculaires avec nos solutions multi-écrans synchronisés*/}
                                Bientôt disponibles
                            </p>
                        </div>

                        {/* Equipment 4 */}
                        <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Bornes tactiles
                            </h3>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                {/*Des solutions interactives pour l'accueil, l'information et l'engagement de vos visiteurs*/}
                                Bientôt disponibles
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - Des fonctions pratiques */}
            <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-16 sm:mb-20">
                        <span className="inline-block px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold mb-4 border border-amber-500/20">
                            Fonctionnalités
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Des fonctions <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">pratiques</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                            Notre logiciel a été créé par et pour des utilisateurs de tous les niveaux
                        </p>
                    </div>

                    {/* Features grid - 3x2 */}
                    <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                        {/* Feature 1 */}
                        <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                                Gestion d&#39;écrans
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Diffusez vos contenus sur un seul écran ou à grande échelle, sans complexité
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                                Types de contenus
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Importez et utilisez vos vidéos, images et animations en toute simplicité
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                                Horaire
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Planifiez vos contenus pour qu’ils s’affichent au moment idéal
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-amber-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                                Niveaux d&#39;administration
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Gérez les accès et permissions selon les rôles de chacun
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                                Gestion de dossiers
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Classez et structurez vos contenus pour un accès rapide et logique
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                                Contenu interactif
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Offrez des expériences interactives captivantes à vos visiteurs
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section - Votre image, amplifiée */}
            <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-16 sm:mb-20">
                        <span className="inline-block px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold mb-4 border border-amber-500/20">
                            Nos avantages
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Votre image, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">amplifiée</span>
                        </h2>
                    </div>

                    {/* Benefits grid */}
                    <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                        {/* Benefit 1 */}
                        <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                                Captez l&#39;attention
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Des contenus dynamiques qui attirent l&#39;œil et retiennent l&#39;attention de votre clientèle
                            </p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                                Valorisez votre marque
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Une communication cohérente et professionnelle qui renforce votre identité visuelle
                            </p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                                Augmentez vos ventes
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Des messages ciblés qui stimulent l&#39;engagement et augmentent votre panier moyen
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Section - Un soutien technique */}
            <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center">
                        {/* Icon */}
                        <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl mb-8 animate-bounce-slow">
                            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Un soutien technique hors pair et des installateurs partout au Québec
                        </h2>

                        <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-8">
                            En personne ou à distance, nous sommes là pour vous
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <div className="flex items-center gap-3 text-amber-400">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-lg font-semibold">Support 7j/7</span>
                            </div>
                            <div className="flex items-center gap-3 text-amber-400">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-lg font-semibold">Installation professionnelle</span>
                            </div>
                            <div className="flex items-center gap-3 text-amber-400">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-lg font-semibold">Couverture provinciale</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Prêt à transformer votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">communication</span> ?
                    </h2>
                    <p className="text-lg sm:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                        Découvrez comment Numerix peut révolutionner votre affichage numérique
                    </p>
                    <Link href="/contact" className="inline-block">
                        <span className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-black bg-gradient-to-r from-amber-300 to-yellow-400 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50">
                            <span className="relative z-10 flex items-center gap-3">
                                Parlons de votre projet
                                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </span>
                    </Link>
                </div>
            </section>

            {/* Custom CSS animations */}
            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                @keyframes fade-in-down {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes scale-in {
                    from { transform: scaleX(0); }
                    to { transform: scaleX(1); }
                }

                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }

                .animate-fade-in-down {
                    animation: fade-in-down 0.8s ease-out;
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }

                .animate-scale-in {
                    animation: scale-in 0.8s ease-out 0.5s forwards;
                }

                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }

                .animation-delay-300 {
                    animation-delay: 0.3s;
                }

                .animation-delay-500 {
                    animation-delay: 0.5s;
                }

                .animation-delay-700 {
                    animation-delay: 0.7s;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
}