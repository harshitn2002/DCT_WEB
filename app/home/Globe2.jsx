import Globe from "@/components/magicui/globe";

export default function Globe2() {
  return (
    <div className="globe min-h-[70vh] w-full bg-black px-4 md:px-16 text-white flex flex-col md:flex-row justify-center items-center">
      <div className="main w-full md:w-[60%] text-[5vh] md:text-[7vh] font-bold text-left relative z-10 p-4 md:p-0">
        Innovating Global
        <br />
        Industries with
        <br />
        Cutting-Edge Technology
      </div>
      <div className="main2 w-full md:w-[40%]">
        <div className="relative h-[50vh] md:h-[70vh] items-center justify-center overflow-hidden rounded-lg md:pb-32 md:shadow-xl">
          <Globe className="" />
          <div className="pointer-events-none absolute inset-0 h-full" />
        </div>
      </div>
    </div>
  );
}
