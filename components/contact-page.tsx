"use client"

import { useState } from 'react'

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const form = e.currentTarget
        const formData = new FormData(form)

        try {
            // Remplacez YOUR_FORM_ID par votre ID Formspree
            const response = await fetch('https://formspree.io/f/xdalgjay', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (response.ok) {
                setIsSubmitted(true)
                form.reset()

                // Réinitialiser après 3 secondes
                setTimeout(() => {
                    setIsSubmitted(false)
                }, 3000)
            } else {
                alert('Une erreur est survenue. Veuillez réessayer.')
            }
        } catch (error) {
            console.error('Error:', error)
            alert('Une erreur est survenue. Veuillez réessayer.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
            </div>

            {/* Decorative grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

            {/* Header with back button */}
            <header className="relative z-10 pt-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <a href="/" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors duration-300 group">
                        <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="font-semibold">Retour à l'accueil</span>
                    </a>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12 sm:mb-16 animate-fade-in">
                        <div className="inline-block mb-6">
                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 animate-gradient-x">
                                Numerix
                            </h1>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            Demandez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">démo gratuite</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                            Remplissez le formulaire ci-dessous et notre équipe vous contactera dans les plus brefs délais
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-zinc-800/50 shadow-2xl animate-fade-in animation-delay-300">
                        {/* Success Message */}
                        {isSubmitted && (
                            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/95 backdrop-blur-sm rounded-3xl z-20 animate-fade-in">
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full mb-6 animate-bounce-slow">
                                        <svg className="w-10 h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">Merci !</h3>
                                    <p className="text-xl text-zinc-300">Votre demande a été envoyée avec succès</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Nom complet */}
                            <div className="group">
                                <label htmlFor="nom" className="block text-sm font-semibold text-zinc-300 mb-2">
                                    Nom complet *
                                </label>
                                <input
                                    type="text"
                                    id="nom"
                                    name="nom"
                                    required
                                    className="w-full px-4 py-4 bg-black/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                                    placeholder="Jean Tremblay"
                                />
                            </div>

                            {/* Email et Téléphone - Grid sur desktop */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                {/* Email */}
                                <div className="group">
                                    <label htmlFor="email" className="block text-sm font-semibold text-zinc-300 mb-2">
                                        Adresse courriel *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-4 bg-black/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                                        placeholder="jean@exemple.com"
                                    />
                                </div>

                                {/* Téléphone */}
                                <div className="group">
                                    <label htmlFor="telephone" className="block text-sm font-semibold text-zinc-300 mb-2">
                                        Numéro de téléphone *
                                    </label>
                                    <input
                                        type="tel"
                                        id="telephone"
                                        name="telephone"
                                        required
                                        className="w-full px-4 py-4 bg-black/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                                        placeholder="(514) 555-0123"
                                    />
                                </div>
                            </div>

                            {/* Message / Question */}
                            <div className="group">
                                <label htmlFor="message" className="block text-sm font-semibold text-zinc-300 mb-2">
                                    Parlez-nous de votre projet
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    className="w-full px-4 py-4 bg-black/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 resize-none"
                                    placeholder="Décrivez-nous vos besoins en affichage dynamique, le nombre d'écrans souhaités, votre secteur d'activité, etc."
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group relative w-full px-8 py-5 text-xl font-bold text-black rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    {/* Gradient background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 transition-all duration-300 group-hover:scale-110"></div>

                                    {/* Shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>

                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Envoi en cours...
                                            </>
                                        ) : (
                                            <>
                                                Envoyer ma demande
                                                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </>
                                        )}
                                    </span>
                                </button>
                            </div>

                            {/* Privacy note */}
                            <p className="text-sm text-zinc-500 text-center pt-4">
                                Vos informations sont sécurisées et ne seront jamais partagées avec des tiers
                            </p>
                        </form>
                    </div>
                </div>
            </main>

            {/* Custom CSS animations */}
            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }

                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }

                .animation-delay-300 {
                    animation-delay: 0.3s;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    )
}