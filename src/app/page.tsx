// Home.tsx

import Image from "next/image";
import Cards from './components/Cards' //features
import CTA from './components/CTA';
import FAQ from "./pages/FAQ/page";


export default function Home() {
  return (
      <main className="flex-1">
        <section id="HeroSection" className='pt-8 md:pt-12 lg:pt-20 pb-0 md:pb-0'>
          <div className="container px-6 mx-auto text-center">
            <h1 className='text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl'>
              Woodcraft Interiors
            </h1>
            <div className='max-w-xl mx-auto mt-2 text-lg font-light leading-tight text-gray-500 sm:text-xl md:text-2xl'>
              <p>Handcrafted Furniture for Your Dream Home</p>
            </div>
          </div>
          <div className='container mx-auto flex justify-center mt-5'>
            <Image alt='??' src={"https://images.unsplash.com/photo-1724582586529-62622e50c0b3?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={1200} height={700}
            className='rounded-xl shadow-xl'/>
          </div>

        </section>
        <Cards/>
        <CTA/>
        <FAQ/>

      </main>

  );
}
