import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function Feature01() {
    return(
             <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
      <div className="mx-auto grid  max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center ">
        <div className="h-96">
                      <Image alt="woode image" src="https://images.unsplash.com/photo-1541558869434-2840d308329a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
          width={714} height={953} objectFit="contain" className=" flex shawdow-xl ring-gray-50">
            
          </Image>
          </div>
        <div className="lg:pr-8 lg:pt-4 flex flex-row">
          <div className="lg:max-w-lg">
             <div className="text-indigo-700 h-14 w-14">
                <SparklesIcon/>
                </div> 
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Classic and Chic
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              트렌디하면서도 클래식한 스타일
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
             Woodcraft Interiors는 유행을 반영하면서도 클래식한 디자인을 유지하여, 시간이 지나도 변함없이 사랑받는 가구를 제공합니다.
저희는 현대적인 감각을 반영한 미니멀리즘 디자인부터 전통적인 아름다움을 강조하는 클래식 가구까지 다양한 스타일을 선보입니다. 트렌드에 민감하게 반응하면서도 시간이 지나도 변치 않는 가치와 품격을 지닌 가구를 만들고 있습니다. 고객이 원하는 스타일과 디자인을 함께 논의하며, 개인의 취향에 맞는 맞춤형 가구로 만족을 드립니다.
            </p>
          </div>

        </div>
            
      </div>
     </div>
    )
};
