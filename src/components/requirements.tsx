import React from 'react';
import ProgressBar from "@/components/progress-bar";
import { Radio_Canada } from '@next/font/google';

const radioCanada = Radio_Canada({
    subsets: ['latin'],
    weight: ['400', '700'],
  })

const grayBackground: string = '#ECECEC';

const Requirements: React.FC = ({}) => {
  return (
    <section className="flex flex-col md:flex-row rounded-3xl h-[100rem] w-[50rem]" style={{ background: `${grayBackground}`}}>

        <div className={radioCanada.className}>
        <h2 className="text-5xl py-8 px-10 font-extrabold">Requirements</h2>

        <ul>
            <li className="text-light font-light px-10 text-2xl">
            <p className="text-3xl">Progress</p>

            <div className="py-4 -translate-x-0">
                <ProgressBar widthDarkGreen={55} widthLightGreen={75} />
                <p className="text-right py-16 text-xl">88 / 160 MCs Completed</p>
            </div>

            </li>

            {/* Breakdown of the entire progress */}
            <li className="text-light font-light px-10 text-2xl">
            <p className="underline">Breakdown</p>

            <ul className="flex flex-col space-y-20">

                <li className="-translate-x-0 py-6">
                Common Curriculum (GE)
                <ProgressBar widthDarkGreen={80} widthLightGreen={90} />
                <p className="relative translate-y-16 text-right text-xl">32 / 40 MCs Completed</p>
                </li>
                <li className="-translate-x-0 py-6">
                Programme Requirements
                <ProgressBar widthDarkGreen={55} widthLightGreen={60} />
                <p className="relative translate-y-16 text-right text-xl">44 / 80 MCs Completed</p>
                </li>
                <li className="-translate-x-0 py-6">
                Unrestricted Electives
                <ProgressBar widthDarkGreen={10} widthLightGreen={30} />
                <p className="relative translate-y-16 text-right text-xl">4 / 40 MCs Completed</p>
                </li>

            </ul>
            </li>
        </ul>

        </div>
    </section>
  );
};

export default Requirements;
