import Image from "next/image";
import { PaintBrushIcon } from "@heroicons/react/24/outline";

export default function Feature01() {
    return(
             <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
        <div className="h-96 overflow-hidden">
                      <Image alt="woode image" src="https://images.unsplash.com/photo-1712171984530-e25a4aaa46dd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={714} height={953} objectFit="contain" className="flex max-x-none shawdow-xl ring-gray-50">
            
          </Image>
          </div>
        <div className="lg:pr-8 lg:pt-4 flex flex-row">
          <div className="lg:max-w-lg">
             <div className="text-indigo-700 h-14 w-14">
                <PaintBrushIcon/>
                </div> 
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Craft by Maestros
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              100% 수작업 공정
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              모든 가구는 숙련된 장인의 손길로 정성을 다해 제작됩니다. 대량 생산이 아닌 고객 한 분 한 분을 위한 맞춤형 가구로, 작은 디테일 하나도 놓치지 않습니다.
장인의 섬세한 손길을 통해 만들어진 가구는 기계가 만들어내는 대량 생산 제품과는 다른 고유의 매력을 지닙니다. 저희의 수제 가구는 오랜 세월 동안 가치를 유지할 수 있도록 설계되었으며, 고객의 집에 자연스럽게 녹아들 수 있도록 다양한 스타일과 마감 옵션을 제공합니다. 수제 제작이므로 각 가구는 고객의 요구 사항에 맞춰 개별적으로 설계되며, 오직 당신만을 위한 유일한 작품이 완성됩니다.
            </p>
          </div>

        </div>
            
      </div>
     </div>
    )
};
