import { title, subTitle, text } from "@/constants/general";
import { category } from "@/constants/category";

export const Hero = ({ id }: { id: string }) => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-surface-container-lowest py-120 md:pt-0 md:pb-0" id={id}>
            <div className="absolute inset-0 z-0">
                <img
                    className="w-full h-full object-cover opacity-40 hero-vignette"
                    data-alt="dramatic high-contrast top-down view of a gourmet plate on a dark rustic table with moss-like accents"
                    src="https://cdn.discordapp.com/attachments/1202990223022362725/1488217657827131493/ChatGPT_Image_30_mar_2026_01_44_55_p.m..png?ex=69cbfa33&amp;is=69caa8b3&amp;hm=4799a3f3070e15e26fb617ce30c95947399449385961a2ed112f8f6494960154&amp;"
                />
            </div>
            <div className="relative z-10 w-full max-w-screen-2xl px-12 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1 text-left space-y-6">
                    <span className="font-label uppercase tracking-[0.3em] text-primary text-sm">
                        {subTitle}
                    </span>
                    <h1 className="font-headline text-5xl md:text-8xl text-on-surface leading-tight tracking-tighter">
                        {title.split("|")[0]}
                        <br />
                        <span className="italic font-normal text-tertiary">
                            {title.split("|")[1]}
                        </span>
                    </h1>
                    <p className="max-w-md text-on-surface-variant text-lg leading-relaxed font-body">
                        {text}
                    </p>
                </div>
                <div className="flex-1 relative flex justify-center items-center">
                    <div className="relative w-70 h-70 md:w-125 md:h-125 flex justify-center items-center">
                        {category.map((item, index) => {
                            const positions = [
                                "top-0 left-1/2 -translate-x-1/2",
                                "top-1/2 -right-12 -translate-y-1/2 rotate-90",
                                "top-1/2 -left-16 -translate-y-1/2 -rotate-90",
                                "bottom-0 left-1/2 -translate-x-1/2"
                            ];
                            return (
                                <div
                                    className={`absolute ${positions[index]}`}
                                    key={index}
                                >
                                    <span className="font-label text-xs uppercase tracking-[0.4em] text-primary bg-surface/80 px-4 py-2 backdrop-blur-md rounded-lg border border-primary/20">
                                        {item.name}
                                    </span>
                                </div>
                            );
                        })}
                        <img
                            className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] object-cover rounded-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] border-[12px] border-surface-container-high transition-transform duration-[10000ms] ease-linear rotate-12 rotate-45"
                            src="https://www.nicepng.com/png/detail/353-3533983_zya-platter-souzai-plato-de-comida-png.png"
                        />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
                <span className="font-label text-[10px] uppercase tracking-[0.5em] rotate-90 origin-left ml-2">
                    Ancestry
                </span>
                <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
            </div>
        </section>
    );
};
