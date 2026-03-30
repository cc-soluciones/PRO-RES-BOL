export const Footer = () => {
    return (
        <footer className="bg-surface-container-lowest w-full pt-20 pb-10 flex flex-col items-center gap-12 px-8 border-t border-outline-variant/10">
            <div className="text-lg font-headline italic text-on-surface">
                LOS BOLDOS
            </div>
            <div className="flex gap-6 opacity-60">
                <a
                    className="text-on-surface hover:text-tertiary transition-colors"
                    href="https://www.facebook.com/RestaurantLosBoldos/?locale=es_LA"
                >
                    <span className="material-symbols-outlined">
                        Facebook
                    </span>
                </a>
                <a
                    className="text-on-surface hover:text-tertiary transition-colors"
                    href="https://www.instagram.com/accounts/login/?next=%2Frestaurant_losboldos_mehuin_%2F&source=omni_redirect"
                >
                    <span className="material-symbols-outlined">
                        Intagram
                    </span>
                </a>
                <a
                    className="text-on-surface hover:text-tertiary transition-colors"
                    href="https://wa.link/8fzhom"
                >
                    <span className="material-symbols-outlined">
                        Teléfono
                    </span>
                </a>
            </div>
            <div
                className="font-label text-xs tracking-[0.15em] uppercase text-outline mt-10"
            >
                © {new Date().getFullYear()} LOS BOLDOS.
            </div>
        </footer>
    );
};
