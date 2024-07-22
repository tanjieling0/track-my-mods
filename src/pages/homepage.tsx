import React from "react";
import Divider from "@/components/divider";
import { Overpass, Radio_Canada, Yaldevi } from '@next/font/google';
import Requirements from "@/components/requirements";
import SemesterView from "@/components/semester-view";

/* Fonts */
const overpass = Overpass({
  subsets: ['latin'],
  weight: ['400', '800'],
})

const radioCanada = Radio_Canada({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const yaldevi = Yaldevi({
  subsets: ['latin'],
  weight: ['400', '700'],
})

/* Colors for texts */
const grayText: string = '#6A6A6A';
const orangeText: string = '#FF9100';
const redText: string = '#FE7752';
const grayBackground: string = '#ECECEC';
const darkGrayText: string = '#9F9F9F';
const blueButtonBackground: string = '#6DA1D8';


export default function Homepage() {
  return (
    <div>

      {/* Header */}
      <div className="pb-4">
        <section className={overpass.className}>
          <header className="flex flex-col md:flex-row justify-between items-center pt-4 w-full"> 
              <h1 className="flex relative left-0 px-12 text-5xl overpass-text font-bold">
                <p style={{ color: orangeText }}>Jie Ling's</p>
                <p style={{ color: redText }} className="px-4">Mods</p>
              </h1>
            <p className="relative right-0 px-12 text-2xl" style={{color: grayText}}>Matriculation Year AY22/23</p>
          </header>
        </section>

        <Divider />
      </div>
      <div className="">
        <SemesterView />
        {/* <Requirements /> */}
      </div>

    </div>
  )
  ;
}