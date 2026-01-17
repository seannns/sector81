// app/page.tsx
import FadeIn from './components/FadeIn';

export default function Home() {
  return (
    <main className="h-screen flex flex-col">


      <nav className="sticky top-0 z-50 flex w-full justify-between items-center p-4 bg-[#111]">
        <div>
          <a className="p-1">BRISBANE 3:19PM</a>
        </div>
        <div className="flex gap-6">
          <a className="p-1 hover:bg-white hover:text-black">WORKS</a>
          <a className="p-1 hover:bg-white hover:text-black">ABOUT</a>
          <a className="p-1 hover:bg-white hover:text-black">CONTACT</a>
        </div>
      </nav>

      <section className="flex-1 flex flex-col justify-end items-center px-4 overflow-hidden">
          <h1 className="text-[20vw] lg:text-[12.5rem] font-bold leading-none whitespace-nowrap">Sector81</h1>
      </section>

    </main>
  );
}