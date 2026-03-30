"use client";

import { useState } from "react";
import { ArrowDown } from "@/assets/ArrowDown";
import { FoodCarousel } from "@/components/FoodCarousel";
import { Button } from "@/components/Button";
import { foods } from "@/constants/category";
import { category } from "@/constants/category";

export const Category = ({ id }: { id: string }) => {

    const [ idx, setIdx ] = useState(0);
    const [ selectCategory, setSelectCategory ] = useState("Pescado");
    const nameCategory = category.map((item) => item.name);
    
    const onClick = (position : number) => {
        setIdx(idx + position);
        setSelectCategory(nameCategory[(idx + position) % nameCategory.length]);
    }

    return (
        <section className=" bg-surface-container-lowest" id={id}>
            <div className="md:px-120 py-15 flex items-center justify-between flex-wrap px-10 gap-5">
                <div className="space-y-4">
                    <span className="font-label uppercase tracking-[0.2em] text-tertiary text-sm">Los boldos</span>
                        <h2 className="font-headline text-3xl md:text-5xl text-on-surface">Carta de la casa</h2>
                </div>
                <p className="max-w-sm text-on-surface-variant font-body italic md:text-lg border-l-2 border-primary/30 pl-8">
                    Ven a disfrutar de nuestra deliciosa carta, donde cada plato es una experiencia culinaria única.
                </p>
            </div>

            <div className="relative md:max-h-100 max-h-70 overflow-hidden w-full md:px-120 pt-30">
                <FoodCarousel absoluteIdx={idx} selectCategory={selectCategory}/>
            </div>
            <div className="md:px-120 md:pt-10 px-10 flex items-center justify-between flex-wrap">
                <Button onClick={() => onClick(-1)}>
                    <ArrowDown />
                </Button>
                <Button onClick={() => onClick(1)}>
                    <ArrowDown />
                </Button>
                {foods.map((item, index) => {

                    if(selectCategory !== item.category){
                        return;
                    }

                    return (
                        <div className="w-full mt-20" key={index}>
                            <div className="group flex gap-6 bg-surface-container-highest/30 p-6 rounded-lg border border-outline-variant/10 hover:border-primary/40 transition-all cursor-pointer">
                                <div className="w-20 h-20 md:w-32 md:h-32 shrink-0 overflow-hidden rounded-lg">
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        data-alt="smoked duck breast with pomegranate glaze, rustic mood"
                                        src={item.image}
                                    />
                                </div>
                                <div className="flex flex-col justify-center gap-2">
                                    <h4 className="font-headline text-md md:text-xl text-on-surface">
                                        {item.name}
                                    </h4>
                                    <p className="text-xs text-on-surface-variant font-body line-clamp-2">
                                        {item.description}
                                    </p>
                                    {/* <span className="text-tertiary font-label text-sm">
                                        $36
                                    </span> */}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
