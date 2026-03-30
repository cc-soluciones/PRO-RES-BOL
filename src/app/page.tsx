"use client";

import { Hero } from "@/components/Hero";
import { Category } from "@/components/Category";
import { AboutUs } from "@/components/AboutUs";
import { Contact } from "@/components/Contact";

export default function Home() {
    return (
        <>
            <Hero id="home" />
            <Category id="carta"/>
            <AboutUs id="nosotros" />
            <Contact id="reservas"/>
        </>
    );
}
