import React from "react";

const Vision = () => {
    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-2xl font-semibold text-center">Nuestra Visión y Misión</h2>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <article className="card-shadow bg-white p-6 rounded-20">
                        <h3 className="text-xl font-semibold mb-2">Visión</h3>
                        <p className="text-sm text-gray-600">
                            Ser una empresa líder en la promoción de pequeños negocios,
                            especialmente bodegas, impulsando su crecimiento con soluciones
                            tecnológicas útiles, accesibles y de alto impacto.
                        </p>
                    </article>

                    <article className="card-shadow bg-white p-6 rounded-20">
                        <h3 className="text-xl font-semibold mb-2">Misión</h3>
                        <p className="text-sm text-gray-600">
                            Impulsar a las bodegas y a otros pequeños negocios mediante
                            herramientas digitales prácticas que mejoren su gestión, fortalezcan
                            su competitividad y generen nuevas oportunidades de desarrollo.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Vision;