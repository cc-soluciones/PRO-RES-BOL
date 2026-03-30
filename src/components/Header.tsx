import { navItems } from "@/constants/general";

export const Header = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10">
            <div className="flex justify-between items-center w-full px-12 py-8 max-w-screen-2xl mx-auto">
                <div
                    className="text-xl md:text-2xl font-headline tracking-[0.2em] uppercase text-primary"
                >
                    Los Boldos
                </div>
                <div className="hidden md:flex items-center gap-12">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            className="font-headline tracking-tight text-primary border-b border-primary/30 pb-1 transition-all duration-500"
                            href={item.href}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <button
                    className="bg-primary text-on-primary px-3 md:px-8 py-3 rounded-lg font-label text-sm uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-black/20"
                >
                    <a
                        href="https://wa.link/8fzhom"
                    >
                        Contactanos
                    </a>
                </button>
            </div>
        </nav>
    );
};
