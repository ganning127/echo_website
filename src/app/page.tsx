import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <div className="bg-[url(/hero.png)] h-[90vh] w-full bg-no-repeat bg-cover bg-center">
        <NavBar />
      </div>

      <main className="bg-[#329D3C]">
        <div className="h-screen"></div>
      </main>
    </>
  );
}
