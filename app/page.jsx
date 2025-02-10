import Sidebar from "./sidebar";

export default function Home() {
  return (
    <main className="flex flex-row h-screen w-screen max-h-screen max-w-screen">
      <Sidebar />
      <div className="w-full h-full relative">
        <img
          src="/cover.png"
          alt="cover art"
          className="h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        />
        <div className="font-[Unison] text-5xl text-center text-[#ffffff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          Aashritha <br /> Bidurukontham
          <br />
          <br />
          <span className="font-sans text-lg font-semibold">
            product designer
          </span>
        </div>
      </div>
    </main>
  );
}
