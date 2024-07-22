import React from 'react';
import { SlArrowDown } from "react-icons/sl";
import { Radio_Canada, Yaldevi } from '@next/font/google';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import { Button } from "@/components/ui/button"

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

const SemesterView: React.FC = ({}) => {
    return (
        <section className={`flex flex-col px-10 ${radioCanada.className}`}>
            
        <div className="flex flex-col md:flex-row">
        <p className="relative text-3xl font-extrabold pr-6">
            This Semester
        </p>
            
            <DropdownMenu>
                <DropdownMenuTrigger className={`flex justify-center h-10 px-20 md:mx-2 text-l rounded-3xl my-2 md:my-0 ${yaldevi.className}`} style={{ background: `${grayBackground}`, color: darkGrayText}}>
                    <div className="flex self-center md:left-5 md:top-2">
                    Current Sem
                    <SlArrowDown className="self-center translate-x-2"/>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                <DropdownMenuLabel className="text-xl">Current Semester</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-xl">Year 1 Sem 1</DropdownMenuItem>
                <DropdownMenuItem className="text-xl">Year 1 Sem 2</DropdownMenuItem>
                <DropdownMenuItem className="text-xl">Year 2 Sem 1</DropdownMenuItem>
                <DropdownMenuItem className="text-xl">Year 2 Sem 2</DropdownMenuItem>
                <DropdownMenuItem className="text-xl">Year 3 Sem 1</DropdownMenuItem>
                <DropdownMenuItem className="text-xl">Year 3 Sem 2</DropdownMenuItem>
                <DropdownMenuItem className="text-xl">Year 4 Sem 1</DropdownMenuItem>
                <DropdownMenuItem className="text-xl">Year 4 Sem 2</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Drawer>
                <DrawerTrigger className={`text-l md:mx-4 px-20 h-10 rounded-3xl font-thin ${yaldevi.className}`} style= {{ background: `${blueButtonBackground}`, color: "#FFFFFF"}}>
                + Insert New Mod
                </DrawerTrigger>
                <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>
                    <p className="underline">Add New Module</p>
                    <p>Year</p>
                    <p>Semester</p>
                    <p>Module Code</p>
                    <p>MCs</p>
                    <p>Type</p>
                    </DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </div>

        <section className="py-80">
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>YEAR 1</AccordionTrigger>
            <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
            </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>YEAR 2</AccordionTrigger>
            <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
            </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>YEAR 3</AccordionTrigger>
            <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
            </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>YEAR 4</AccordionTrigger>
            <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
            </AccordionItem>
        </Accordion>

        </section>

        </section>
    );
};

export default SemesterView;