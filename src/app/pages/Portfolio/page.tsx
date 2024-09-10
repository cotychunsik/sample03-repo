// Home.tsx

import Image from "next/image";


export default function Portfolio() {
  return (
      <main className="flex-1 min-v-screen">
        <section id="HeroSection" className='pt-8 md:pt-12 lg:pt-20 pb-0 md:pb-0'>
          <div className="container px-6 mx-auto text-center">
            <h1 className='text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl'>
              Our Works
            </h1>
            <div className='max-w-xl mx-auto mt-2 text-lg font-light leading-tight text-gray-500 sm:text-xl md:text-2xl'>
              <p>Crafting Unique Spaces with Timeless Furniture</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="container text-gray-500 text-center mt-10 leading-loose">
            <p>Woodcraft Interiors는 고객의 공간을 위한 맞춤형 가구 제작에 자부심을 갖고 있습니다. </p>
            <p>저희는 수많은 프로젝트를 통해 창의적이고 세련된 디자인을 구현하며, 각 공간의 고유한 개성을 살린 가구를 제작해왔습니다.</p>
            <p>아래 포트폴리오에서는 저희가 진행한 다양한 프로젝트와 그 결과물을 확인하실 수 있습니다.
            </p>
            </div>
          </div>

          <div className="max-h-[600px] grid grid-cols-3 mt-10 overflow-clip">
            <div className="">
              <Image alt="image1" src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={692} height={693} objectFit="cover"></Image>
            </div>
                        <div className="">
              <Image alt="image1" src="https://images.unsplash.com/photo-1615528650248-8630bcd26814?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={692} height={693} objectFit="cover"></Image>
            </div>
                                    <div className="">
              <Image alt="image1" src="https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={692} height={693} objectFit="cover"></Image>
            </div>
            </div>

        </section>

      </main>

  );
}
