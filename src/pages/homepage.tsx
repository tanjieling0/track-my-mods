import React from "react";
import Divider from "@/styles/divider";
import { Overpass, Radio_Canada } from '@next/font/google';

/* Fonts */
const overpass = Overpass({
  subsets: ['latin'],
  weight: ['400', '800'],
})

const radioCanada = Radio_Canada({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const grayText: string = '#6A6A6A';
const orangeText: string = '#FF9100';
const redText: string = '#FE7752';
const grayBackground: string = '#ECECEC';

export default function Homepage() {
  return (
    <div>

       {/* Header */}
      <section className={overpass.className}>
        <header className="flex absolute justify-evenly items-center py-16 w-full"> 
            <h1 className="flex absolute bottom-0 left-0 px-12 text-8xl overpass-text">
              <p style={{ color: orangeText }}>Jie Ling's</p>
              <p style={{ color: redText }} className="px-4">Mods</p>
            </h1>
          <p className="absolute bottom-0 right-0 px-12 text-4xl" style={{color: grayText}}>Matriculation Year AY22/23</p>
        </header>
      </section>

      <div className="py-36">
        <Divider />
      </div>

      <section className="absolute right-10 rounded-3xl h-[100rem] w-[50rem] -translate-y-24" style={{ background: `${grayBackground}`}}>
        <div className={radioCanada.className}></div>
      </section>


    </div>
  )
  ;
}