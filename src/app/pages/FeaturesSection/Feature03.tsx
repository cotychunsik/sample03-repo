import Image from "next/image";
import { HomeModernIcon } from "@heroicons/react/24/outline";

export default function Feature03() {
    return(
             <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
        <div className="lg:pr-8 lg:pt-4 flex flex-row">
          <div className="lg:max-w-lg">
            <div className="text-indigo-700 h-14 w-14">
                <HomeModernIcon/>
                </div> 
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Customize the Life
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              맞춤형 디자인
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Woodcraft Interiors는 고객의 개별적인 라이프스타일과 공간에 맞춘 맞춤형 가구 제작을 전문으로 합니다. 크기, 소재, 색상, 마감처리까지 고객의 요청에 따라 자유롭게 설계할 수 있습니다.
우리의 맞춤형 서비스는 고객이 꿈꾸는 이상적인 공간을 실현하는 데 초점을 맞추고 있습니다. 주거 공간에서 상업 공간까지, 고객이 원하는 가구의 형태와 기능을 구현해드립니다. 전문 디자이너가 고객과 1:1로 상담하여 실내 인테리어에 완벽히 어울리는 맞춤 가구를 디자인해 드리며, 가구가 공간에서 어떻게 활용될지에 대한 실용적인 조언도 제공합니다.
            </p>
          </div>

        </div>
                  <div className="h-96 overflow-hidden">
                      <Image alt="woode image" src="https://images.unsplash.com/photo-1631127887321-0a2cf902a002?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={714} height={953} objectFit="contain" className="flex max-x-none shawdow-xl ring-gray-50">
            
          </Image>
          </div>
      </div>
     </div>
    )
};
