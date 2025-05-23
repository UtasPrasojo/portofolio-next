import type { FC } from "react";
import Image from "next/image";
import utas from "@images/utas.jpg";

const HeaderSection: FC = () => {
  return (
    <section className="mt-32 flex h-auto flex-col items-center justify-between lg:mt-6 lg:h-screen lg:flex-row xl:mt-0">
      <div className="flex flex-col justify-center text-primary">
        <div className="flex items-center gap-5 pb-10">
          <h1
            className="text-xl font-semibold text-secondary lg:text-2xl"
            data-aos="fade-left"
            data-aos-duration="300"
          >
            <span className="font-mono text-lg font-normal text-accent lg:text-xl">
              02.{" "}
            </span>
            About Me
          </h1>
          <div
            className="h-[1px] w-32 bg-primary md:w-96"
            data-aos="zoom-in-left"
            data-aos-duration="600"
          ></div>
        </div>
        <div className="flex flex-col gap-5 pr-0 text-sm md:text-base lg:pr-10 xl:pr-0">
          <p data-aos="zoom-in-right">
            I'm  Utas Prasojo, a web developer specializing in the{" "}
            <span className="text-accent">Vue + React Ecosystem</span>,
            Building scalable applications using Vue and Vite. With over 1 years of experience in the industry, I’m continuously learning Next.js and focused on writing clean, maintainable code while delivering intuitive user interfaces.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="100">
            My core strength lies in frontend development—building responsive, high-performing interfaces using Vue, Vite, Tailwind CSS, and Next.js. I'm also expanding my backend skills by learning NestJS and Laravel, aiming to support end-to-end fullstack application development.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="200">
            From internal tools to production-ready platforms, I've contributed
            to real-world projects that deliver strong user experiences and
            performance. I'm deeply committed to continuous learning, actively
            mentoring others, and contributing to developer communities.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="300">
            I'm also passionate about building{" "}
            <span className="text-accent">creative web experiences</span>,
            occasionally blending in 3D elements to push interactivity and
            engagement beyond the usual.
          </p>
        </div>
      </div>
      <div
        className="-my-20 pl-0 md:-my-40 lg:-my-0 xl:pl-24"
        data-aos="zoom-in"
        data-aos-duration="300"
      >
        <div className="grayscale transition-all duration-500 hover:grayscale-0">
          <Image
            src={utas}
            alt="utas"
            height={1000}
            className="scale-50 lg:scale-100 2xl:scale-75"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
