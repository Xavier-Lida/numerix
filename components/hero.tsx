export default function Hero() {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold font-serif">Numerix</h1>
                    <p className="text-xl py-6 font-(--font-maven)">
                        Numerix s’occupe de l’affichage numérique pour les entreprises.
                    </p>
                    <button className="transition duration-500 hover:scale-110 btn btn-primary btn-xl font-mono">Nous parler</button>
                </div>
            </div>
        </div>
    )
}