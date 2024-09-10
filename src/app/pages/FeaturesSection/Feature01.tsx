import Image from "next/image";
import { CubeIcon } from "@heroicons/react/24/outline";

export default function Feature01() {
    return(
             <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
        <div className="lg:pr-8 lg:pt-4 flex flex-row">
          <div className="lg:max-w-lg">
            <div className="text-indigo-700 h-14 w-14">
                <CubeIcon/>
                </div> 
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Eco-Materials
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              천연 소재만을 사용합니다
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Woodcraft Interiors는 모든 가구 제작에 천연 소재만을 고집합니다. 저희는 최고 품질의 원목을 사용해 내구성은 물론, 자연 그대로의 아름다움을 살린 디자인을 선보입니다.
자연에서 온 재료는 시간이 지남에 따라 더욱 깊이 있는 색감과 질감을 제공합니다. 또한, 목재의 특성을 최대한 살려 유니크한 패턴과 질감을 유지하므로, 각 가구가 고객님만을 위한 특별한 작품이 됩니다. 고객의 취향에 맞춘 다양한 원목 옵션을 제공하며, 친환경적인 방법으로 자재를 수급해 지속 가능한 가구를 만듭니다.
            </p>
          </div>

        </div>
                  <div className="h-96 overflow-hidden">
                      <Image alt="woode image" src="https://images.unsplash.com/photo-1567080586917-e6ab6aa0df85?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={714} height={953} objectFit="contain" className="flex max-x-none shawdow-xl ring-gray-50">
            
          </Image>
          </div>
      </div>
     </div>
    )
};
