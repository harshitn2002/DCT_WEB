import Hero from "./Hero_DCT";
import About from "./About_DCT";
import ServicesPage from "./Services";
import Lorems from "./Lorem";
import Globe2 from "./Globe2";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="">
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <ServicesPage />
      <Globe2 />
      <Lorems />
    </div>
  );
}
