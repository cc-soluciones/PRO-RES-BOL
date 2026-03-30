export const AboutUs = ({ id }: { id: string }) => {
    return (
        <section id={id} className="relative min-h-200 flex items-center bg-surface-container-lowest overflow-hidden mt-10 md:mt-20">
            <div className="absolute right-0 w-1/2 h-full hidden lg:block">
                <img
                    className="w-full h-full object-cover opacity-20 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                    data-alt="moody kitchen interior, chefs working with organic ingredients"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcDheavULJH-rZgLz-c0sJkQz55aULFdB0BN0lwzoMZZN3Zl2upGZOsDLZU8LOWYeacEr8DX1df47PPKKSy0h2mWA9VUYeikSaHu-pVdFiDxrRZIJpgRgPpg1NP4i1XR_EWbs-xC-bzkAcuOV4gWydFkPLobX7-7Ph_PtYVcede_9zCG3RpXOZ6G6dmvWo0wJWjAlenRjbe8s1OK1ws1d_cyDghy_8tq6W4Dw5qHPmkVSNAQM5GTuM8HBphfWHVuFWakjSrR9r7flx"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-transparent to-transparent"></div>
            </div>
            <div className="max-w-screen-4xl mx-auto px-12 relative z-10 md:py-32 pt-32">
                <div className="max-w-6xl space-y-12">
                    <div className="space-y-4">
                        <span className="font-label uppercase tracking-[0.3em] text-primary text-sm">
                            Historia y experiencias
                        </span>
                        <h2 className="font-headline text-5xl md:text-6xl text-on-surface leading-tight">
                            Conocenos
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-3">
                            <p className="font-body text-on-surface-variant leading-relaxed text-md md:text-lg">
                                Sabores que nacen del mar, recetas que viven en la memoria. <br/>
                                En Restaurant Los Boldos creemos que la mejor experiencia nace de lo simple: productos frescos, recetas tradicionales y el sabor auténtico del sur de Chile.<br/>
                                Ubicados en la costa de Mehuín, somos un punto de encuentro para familias, viajeros y grupos que buscan disfrutar de pescados, mariscos y platos caseros en un ambiente cercano y acogedor.<br/>
                                Nuestra cocina rescata lo mejor del mar y la tradición local, combinando ingredientes frescos con preparaciones que han pasado de generación en generación. Aquí, cada plato refleja el cariño por la cocina y el respeto por los sabores del sur.<br/>
                                Ya sea una comida en familia, una visita con amigos o un evento grupal, en Los Boldos te recibimos con calidez, sabor y ese toque único que solo se encuentra en la costa.<br/>
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-8 border-l border-outline-variant/20 pl-12">
                            <div className="space-y-1">
                                <div className="text-5xl font-headline text-tertiary">
                                    {new Date().getFullYear() - 2013} Años
                                </div>
                                <div className="font-label text-xs uppercase tracking-widest text-secondary">
                                    Experiencias
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-5xl font-headline text-tertiary">
                                    100% Frescos
                                </div>
                                <div className="font-label text-xs uppercase tracking-widest text-secondary">
                                    Productos
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-5xl font-headline text-tertiary">
                                    100% Satisfechos
                                </div>
                                <div className="font-label text-xs uppercase tracking-widest text-secondary">
                                    Clientes
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
