"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import "../css/Carousel.css";
import useCarousel from "../JS/main";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const CarouselContext = createContext({
  onCardClose: (index) => {},
  currentIndex: 0,
});

export default function Carousel() {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      checkScrollability();
    }
  }, []);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    setCurrentIndex(index);
  };

  const items = [
    {
      src: "/images/servicesimg1.jpg",
      category: "AI In Health",
      title: "Revolutionizing Health with AI",
      content:
        "Our AI in Health services are transforming the healthcare industry by integrating cutting-edge artificial intelligence into critical areas of medical practice. From enhancing orthodontic treatments with precision AI tools to revolutionizing sleep medicine through advanced predictive analytics, our solutions are designed to improve patient outcomes and streamline healthcare delivery",

      content2:
        " Our expertise extends to AI-powered radiology, where we assist in faster and more accurate diagnostics, and Smart HMS (Hospital Management System) solutions that optimize hospital operations, ensuring efficient patient care and resource management. With a proven track record in AI-driven healthcare innovations, we are committed to driving the future of medicine. ",
    },
    {
      src: "/images/servicesimg2.jpg",
      category: "Fintech",
      title: "Innovating Finance with Technology",
      content:
        "In the rapidly evolving world of Fintech, our company stands at the forefront, delivering comprehensive solutions that empower businesses and individuals to navigate the complexities of the financial industry with confidence. Our Credit Card Fraud Detection systems utilize advanced machine learning algorithms to detect and prevent fraudulent activities in real-time, ensuring the security of financial transactions.",
      content2:
        "The Stock Market Scanner & Indicator we developed offers precise market analysis, enabling traders and investors to make informed decisions with ease. Additionally, our Investment Field Prediction tools provide predictive insights, helping clients identify lucrative opportunities and optimize their portfolios.",

      content3:
        "   Furthermore, our Money Management solutions are designed to streamline financial planning, allowing users to efficiently manage assets, track spending, and achieve their financial goals. Each of these projects reflects our commitment to innovation, security, and customer satisfaction in the Fintech space.",
    },
    {
      src: "/images/servicesimg3.jpg",
      category: "Digital Marketing",
      title: "Transforming Brand Through Targeted Marketing",
      content:
        "At the core of our Digital Marketing services is a commitment to creating a cohesive and effective online strategy that resonates with your target audience. We understand that every business is unique, which is why we offer customized solutions that include everything from Website Designing that reflects your brand identity, to Social Media Marketing that builds and nurtures your online community. Our Email Marketing campaigns are designed to engage and convert, while our Video SEO techniques ensure your content is easily discoverable, driving more traffic and engagement.",

      content2:
        " Content Marketing is another key pillar of our services, where we develop and distribute valuable, relevant, and consistent content to attract and retain a clearly defined audience, ultimately driving profitable customer action. Additionally, our Campaign Management services ensure that every digital marketing effort is carefully planned, executed, and optimized for maximum ROI. With a proven track record of delivering successful projects across these areas, we are well-equipped to help your business thrive in the digital landscape. ",
    },
    {
      src: "/images/servicesimg4.jpg",
      category: "AI & MLOps",
      title: "Optimizing Operations with AI",
      content:
        "Our AI & ML Ops services empower businesses to harness the full potential of artificial intelligence and machine learning with seamless deployment, management, and scaling of models. We specialize in creating dynamic and intelligent solutions such as our state-of-the-art Dynamic Chatbot powered by Generative AI, a Custom Hybrid RAG (Retrieval-Augmented Generation) application for enhanced information retrieval, a Custom Virtual Agent tailored to specific industry needs, and AI Workflow Automation that streamlines processes and boosts operational efficiency. With our expertise, we ensure that your AI initiatives are not only innovative but also resilient, scalable, and aligned with your business goals.",
    },
    {
      src: "/images/servicesimg5.jpg",
      category: "Data Science",
      title: "Transforming Data into Insights",
      content:
        "At Data Culture Technologies, we offer cutting-edge Data Science services to help you unlock the full potential of your data. Our team of experts leverages advanced analytics, machine learning, and artificial intelligence to provide actionable insights and drive strategic decision-making. From data collection and cleaning to complex modeling and visualization, we ensure your data is harnessed effectively to optimize operations, enhance customer experiences, and achieve your business goals. Partner with us to transform your data into a powerful asset for growth and innovation.",
    },
    {
      src: "/images/servicesimg6.jpg",
      category: "Frontend Development",
      title: "Crafting Engaging User Experiences",
      content:
        "Our Front End Development service specializes in creating stunning, user-friendly interfaces that captivate and engage your audience. Leveraging the latest technologies and design principles, our team ensures that your website or application not only looks great but also performs seamlessly across all devices. We focus on delivering intuitive, responsive designs that enhance user experience and drive results. Let us transform your vision into a dynamic and interactive digital experience.",
    },
  ];

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "max-w-7xl mx-auto"
            )}
          >
            {items.map((item, index) => (
              <motion.div
                id={`card-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                  },
                }}
                key={`card${index}`}
                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
              >
                <Card card={item} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <ArrowLeftIcon className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <ArrowRightIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
}

function Card({ card, index }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 mt-40 open-info overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
            >
              <button
                className="allnew sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <CloseIcon className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <p className="text-2xl font-medium text-black dark:text-white">
                {card.category}
              </p>
              <p className="insidetext text-1xl md:text-1xl font-semibold text-neutral-700 mt-4 dark:text-white">
                <p>{card.content}</p>
                <br />
                <p>{card.content2}</p>
                <br />
                <p>{card.content3}</p>
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={handleOpen}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p className="text-white text-sm md:text-base font-medium font-sans text-left">
            {card.category}
          </motion.p>
          <motion.p className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2">
            {card.title}
          </motion.p>
        </div>
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </motion.button>
    </>
  );
}
