import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
// src/app/components/FeaturesSection.tsx
const FAQ = () => {
  return (
    <section className="min-h-fit bg-white py-16 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">FAQ</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Awesome Features</p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="text-indigo-500 w-12 h-12 mx-auto">
                <QuestionMarkCircleIcon/>
               </div>
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">가구는 어떻게 주문할 수 있나요?</h3>
              <p className="mt-4 text-base text-gray-500">저희 웹사이트에서 간편하게 주문할 수 있으며, 맞춤형 제품은 상담 후 제작됩니다.</p>
            </div>
            <div className="text-center">
              <div className="text-indigo-500 w-12 h-12 mx-auto">
                <QuestionMarkCircleIcon/>
               </div>
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">배송 기간은 얼마나 걸리나요?</h3>
              <p className="mt-4 text-base text-gray-500">맞춤형 제품은 주문 후 4-6주 내에 배송되며, 재고가 있는 제품은 1-2주 내에 받아보실 수 있습니다.</p>
            </div>
            <div className="text-center">
              <div className="text-indigo-500 w-12 h-12 mx-auto">
                <QuestionMarkCircleIcon/>
               </div>
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">맞춤 제작이 가능한가요?</h3>
              <p className="mt-4 text-base text-gray-500">네, Woodcraft Interiors는 고객님의 요청에 맞춰 크기, 소재, 디자인 등을 맞춤 제작해드립니다.</p>
            </div>
            

            {/* 추가 기능은 이와 같은 형식으로 추가 */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
