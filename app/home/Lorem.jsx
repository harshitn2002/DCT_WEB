import "../css/Random.css";

export default function Lorems() {
  return (
    <div
      style={{ padding: "1rem" }}
      className="random-sec mt-20 mb-10 flex flex-col items-center justify-center h-80 w-full bg-white text-center"
    >
      <p className="text-5xl font-bold text-gray-800 mb-4">
        Ready To Transform Your Work Flow?
      </p>
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <a href="mailto: director@dct.org.in">
          <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            Get in touch
          </div>
        </a>
      </button>
    </div>
  );
}
