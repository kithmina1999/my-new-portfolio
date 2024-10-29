'use client';
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi'
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import AuroraEffect from "@/components/AuroraEffect";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <AuroraEffect>
      <section className="w-full min-h-[88vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.8, duration: 0.4, ease: "easeIn" }
          }}
        >
          <div className="flex  lg:flex-row justify-center items-center container lg:pt-20 flex-col-reverse gap-10">
            <div className="flex flex-col w-full justify-center lg:justify-start text-center xl:text-start">
              <p className="text-lg font-semibold font-mono ">software enginner</p>
              <h1 className="h1">I am <span className="bg-gradient-to-r from-primary via-secondary to-accent inline-block text-transparent bg-clip-text font-bold ">Kithmina Gunasinghe</span></h1>
              <p className="xl:ms-0 mx-auto max-w-[500px] mb-9 text-white/80 font-lato font-semibold pt-4">
                I excel at crafting elegant modern digital experiences and I am
                proficient in various programming languages and technologies.
              </p>
              {/* btn and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a download="mycv-associate.pdf" href="/mycv-associate.pdf">
                  <Button variant='outline' size='lg' className='uppercase flex items-center gap-2'>
                    <span>Download CV </span>
                    <FiDownload className="text-xl " />
                  </Button>
                </a>
                <div className="mb-8 xl:mb-0">
                  <Socials containerStyles='flex gap-6' iconStyles='w-9 h-9 border-2 border-accent 
                  rounded-full flex justify-center items-center text-accent text-base hover:bg-accent 
                  hover:text-background hover:transition-all duration-500'/>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center mx-auto ">
              <Photo />
            </div>
          </div>
        </motion.div>

      </section>
    </AuroraEffect>
  );
}
