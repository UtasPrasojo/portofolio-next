"use client";

import type { FC } from "react";
import Image from "next/image";
import { ImageSecret } from "@/constants/images";
import { Dominos } from "@/components";
import BlurText from "@/components/BlurText";

const MainContent: FC = () => {
  return (
    <section className="flex h-[650px] w-full flex-col items-center justify-center py-24 text-center ">
      <div className="absolute mb-[-430px] mr-[10px] md:mb-[400px] md:mr-[200px] lg:mr-[300px] xl:mr-[480px]">
        <Image
          src={ImageSecret}
          alt="secret game"
          width={300}
          height={300}
          className="h-[150px] w-auto opacity-20 md:h-[200px] lg:h-[250px]"
        />
      </div>
      <div className="z-40 mb-0 md:mb-10 text-center">
  <div className="mb-1">
    <BlurText
      text="Crafting seamless,"
      delay={100}
      animateBy="words"
      direction="top"
      className="text-3xl font-bold leading-tight text-secondary md:text-4xl lg:text-5xl"
      onAnimationComplete={() => console.log("First line animated")}
    />
  </div>
  <div className="mb-4">
    <BlurText
      text="modern & intuitive web experiences."
      delay={200}
      animateBy="words"
      direction="top"
      className="text-3xl font-bold leading-tight text-secondary md:text-4xl lg:text-5xl"
      onAnimationComplete={() => console.log("Second line animated")}
    />
  </div>
  <p
    className="text-sm text-primary md:text-base"
    data-aos="fade-up"
    data-aos-duration="300"
  >
    I’m passionate about crafting impactful digital experiences that
    empower brands to better serve and engage their audiences.
  </p>
</div>


      <div className="bg-base-100 absolute z-0 m-auto h-[600px] w-[350px] opacity-25 md:w-[672px] lg:w-[825px] xl:w-[1080px]">
        <Dominos />
      </div>
    </section>
  );
};

export default MainContent;
