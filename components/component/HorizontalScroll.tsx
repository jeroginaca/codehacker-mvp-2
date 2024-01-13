"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { images } from "@/assets";
import Link from "next/link";


const Example = () => {
  return (
    <div className="">
      
      <HorizontalScrollCarousel />
      
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

  return (
    <section ref={targetRef} className="relative h-[1000vh]">
        <h1 className="title  text-white font-bold text-center">
                <span className="text-[34px] md:text-[42px] lg:text-[48px]">Aprende creando <br /> las mejores aplicaciones</span>
                </h1>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
            {/* <div className="flex flex-col">
                <h1 className="title  text-white font-bold  mb-6">
                <span className="text-[34px] md:text-[42px] lg:text-[48px]">Aprende creando <br /> las mejores aplicaciones</span>
                </h1>
                <Link href="#contact">
                <button className="cta-2 text-[20px] mt-[2rem] md:mt-[3rem] py-[12px] px-[30px] font-bold tracking-[.10em] rounded-[15px]">Consultar</button>
                </Link>
            </div> */}
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[550px] w-[1100px] overflow-hidden shadow-xl rounded-xl border border-white/30"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 "
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-[#06062B] bg-gradient-to-t rounded-xl from-[#01DAFE]/20 to-[#01DAFE]/0 border border-white/30 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "https://res.cloudinary.com/dr3cvyonp/image/upload/v1704905793/projects/codex_p75dji.png",
    title: "X clone",
    id: 0,
  },
  {
    url: "https://res.cloudinary.com/dr3cvyonp/image/upload/v1704905791/projects/Captura_de_pantalla_2023-10-05_a_las_19.45.46_ulyshp.png",
    title: "Blog",
    id: 1,
  },
  {
    url: "https://res.cloudinary.com/dr3cvyonp/image/upload/v1704905794/projects/car-hub_kxl9fn.png",
    title: "Car Showcase",
    id: 2,
  },
  {
    url: "https://res.cloudinary.com/dr3cvyonp/image/upload/v1704905800/projects/promptopia_giywjm.png",
    title: "Prompt Sharing App",
    id: 3,
  },
  {
    url: "https://res.cloudinary.com/dr3cvyonp/image/upload/v1704905792/projects/Captura_de_pantalla_2023-10-05_a_las_19.51.52_kohahc.png",
    title: "3D Portfolio",
    id: 4,
  },
  {
    url: "https://res.cloudinary.com/dr3cvyonp/image/upload/v1704905792/projects/music-app_q3qght.png",
    title: "Spotify Clone",
    id: 5,
  },
  {
    url: "https://res.cloudinary.com/dr3cvyonp/image/upload/v1704905792/projects/youtube-clone_fguyjr.png",
    title: "Youtube Clone",
    id: 6,
  },
  {
    url: "https://res.cloudinary.com/dr3cvyonp/image/upload/v1704905793/projects/restaurant_qbp9mm.png",
    title: "Restaurant UI",
    id: 7,
  },
  {
    url: "https://res.cloudinary.com/dr3cvyonp/image/upload/v1704905791/projects/todo-list_qjqyk9.png",
    title: "Todo List",
    id: 8,
  },
  {
    url: "https://res.cloudinary.com/dr3cvyonp/image/upload/v1704905799/projects/movie-app_fnilf6.png",
    title: "Movie App",
    id: 9,
},
{
  url: "https://res.cloudinary.com/dr3cvyonp/image/upload/v1704905791/projects/protasker_cl1e9o.png",
  title: "Tailwind CSS",
  id: 10,
},
  {
    url: "https://res.cloudinary.com/dr3cvyonp/image/upload/v1704905794/projects/gym-landing_lqla1u.png",
    title: "Gym Landing Page",
    id: 11,
  },
  {
    url: "https://res.cloudinary.com/dr3cvyonp/image/upload/v1704905793/projects/portfolio_hdfkmu.png",
    title: "HTML/CSS Portfolio",
    id: 12,
  },
];