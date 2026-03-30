import { category } from "@/constants/category";

interface Props {
    absoluteIdx: number;
    selectCategory: string;
};

export const FoodCarousel = ({ 
    absoluteIdx,
    selectCategory
}: Props) => {

    const foods = [...category, ...category];
    const angle = 360 / foods.length;

    function calculateClipPath() {
        const bgWidth = "calc(100% / 0.4757)";
        const offset = `calc(${bgWidth} * 0.1)`;

        return {
            clipPath: `circle(calc(${bgWidth} / 2) at 50% calc((50% + ${offset}) * -1)`,
        };
    }

    return (
        <div className="h-full w-full" style={calculateClipPath()}>
            <div
                className="transition-all duration-700"
                style={{ rotate: `${absoluteIdx * -angle}deg` }}
            >
                <svg
                    viewBox="0 0 560 560"
                    className="fill-transparent stroke-primary stroke-2"
                >
                    <circle
                        cx="280"
                        cy="280"
                        r="278"
                        strokeDasharray="10, 20"
                    />
                </svg>
                {foods.map((food, idx) => (
                    <div
                        key={idx}
                        className="absolute left-1/2 top-0 h-1/2 origin-bottom -translate-x-1/2"
                        style={
                            {
                                "rotate": `${idx * angle}deg`,
                            } as React.CSSProperties
                        }
                    >                        
                        <img
                            src={food.image}
                            alt={food.name}
                            className="mx-auto aspect-square -translate-y-1/2 cursor-pointer select-none rounded-full shadow-2xl transition-all md:w-45 w-30 hover:scale-110"
                            // onClick={() => foods.moveToIdx(idx)}
                        />
                        <h2 className={`text-xl -mt-5 md:text-3xl font-bold relative -translate-y-1/2 text-center text-tertiary md:mt-20 ${selectCategory === food.name ? "opacity-100" : "opacity-0"}`}>
                            {food.name}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};
