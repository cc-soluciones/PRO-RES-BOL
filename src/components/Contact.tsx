import { Calendar } from "@/assets/Calendar";

export const Contact = ({ id }: { id: string }) => {
    return (
        <section id={id} className="py-32 bg-surface px-12 mt-50">
            <div className="max-w-screen-xl mx-auto rounded-lg bg-surface-container overflow-hidden relative border border-outline-variant/10 shadow-2xl">
                <div className="absolute inset-0 z-0">
                    <img
                        className="w-full h-full object-cover opacity-10"
                        data-alt="close up of earthy wine, moody forest restaurant"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0DI7aWU1cz1ZWSagc9IrtA1SZX5EVEKNz5vuDzYGEip9KGADEEnIodXScP4wzB9WOqcEXvDVSxl-2952b7uztC3YPrV-gczccIApRZzOrTTvIQ4ydJfSDFSbsf5aZbI7HqJc35SXLKCJEWGf6debYSX6IHA3xfbQUSc_7q8j2yyrPxpFue9ZDyKaTCN1iWUOiQMhU9m4c5lqMkJMAwgzIYeDllqxp2BnBCcy8ufLcytzTlB39MljuYRm69M8QFMXYp97SSDUojNxC"
                    />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row p-6 md:p-24 items-center justify-between gap-16">
                    <div className="max-w-xl space-y-6">
                        <h2 className="font-headline text-2xl md:text-5xl text-on-surface leading-tight">
                            Planifica tu evento
                        </h2>
                        <p className="text-on-surface-variant text-lg font-body leading-relaxed">
                            Organice una reunión familiar, una celebración o un evento especial en Restaurant Los Boldos. Asegure su lugar y disfrute del encanto costero.
                        </p>
                        <div className="flex flex-wrap gap-8 pt-6">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">
                                    <Calendar />
                                </span>
                                <span className="font-label text-xs uppercase tracking-widest text-on-surface">
                                    Reservas para más de 10 personas
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-sm bg-surface-container-high/80 py-10 px-2 md:p-10 rounded-lg border border-outline-variant/30 shadow-xl">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                                    Personas
                                </label>
                                <select className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface py-3 px-4 focus:ring-1 focus:ring-primary appearance-none">
                                    <option>2 Personas</option>
                                    <option>4 Personas</option>
                                    <option>6+ Personas</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                                    Fecha de reserva
                                </label>
                                <input
                                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface py-3 px-4 focus:ring-1 focus:ring-primary"
                                    type="date"
                                />
                            </div>
                            <button type="button" className="w-full bg-primary text-on-primary font-label uppercase tracking-widest py-4 rounded-lg text-sm hover:bg-primary/90 transition-all duration-300">                                
                                <a
                                    href="https://wa.link/8fzhom"
                                >
                                    Reservar
                                </a>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
