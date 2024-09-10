
// src/app/components/Card.tsx
const Cards = () => {
  return (
    <section className="mt-10 bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Awsome Services</p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mx-auto">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
</svg>

              </div>
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">Eco-Materials</h3>
              <p className="mt-4 text-base text-gray-500">Woodcraft Interiors는 최고급 천연 목재를 사용하여 환경을 고려한 가구를 제작합니다. 내구성과 아름다움을 동시에 갖춘 디자인을 제공합니다.</p>
            </div>

            <div className="text-center">
              <div className="text-indigo-500">
                <svg className="h-12 w-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
</svg>

              </div>
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">Craft by Maestros</h3>
              <p className="mt-4 text-base text-gray-500">모든 가구는 숙련된 장인의 손길로 완성됩니다. 세심한 디테일과 품질을 중요하게 생각합니다.</p>
            </div>
            
            <div className="text-center">
              <div className="text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mx-auto">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
</svg>

              </div>
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">Customize the Life</h3>
              <p className="mt-4 text-base text-gray-500">고객의 라이프스타일에 맞춘 맞춤형 디자인 솔루션을 제공하여 집안에 완벽하게 어울리는 가구를 제작합니다.</p>
            </div>
            
            <div className="text-center">
              <div className="text-indigo-500">
                <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c4.004 0 7.5 3.365 7.5 7.5S16.004 17.25 12 17.25 4.5 13.885 4.5 9.75 7.996 2.25 12 2.25z"></path>
                </svg>
              </div>
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">Classic and Chic</h3>
              <p className="mt-4 text-base text-gray-500">현대적이면서도 클래식한 디자인을 추구하며, 시간이 지나도 변함없는 아름다움을 유지하는 가구를 만듭니다.</p>
            </div>

            <div className="text-center">
              <div className="text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mx-auto">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>

              </div>
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">Low Hazard</h3>
              <p className="mt-4 text-base text-gray-500">Woodcraft Interiors는 건강과 환경을 고려한 친환경 마감재만을 사용합니다. 무독성, 저VOC(휘발성 유기 화합물) 마감재로 가족과 함께 안전하게 사용할 수 있는 가구를 제공합니다</p>
            </div>

            <div className="text-center">
              <div className="text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mx-auto">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
</svg>

              </div>
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">Longlasting Beauty</h3>
              <p className="mt-4 text-base text-gray-500">우리의 가구는 세월이 지나도 변함없는 내구성을 자랑합니다. 강력한 소재와 세심한 제작 과정을 통해 오래 사용할 수 있는 품질을 보장합니다.</p>
            </div>
            {/* 추가 기능은 이와 같은 형식으로 추가 */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
