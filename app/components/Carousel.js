import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
  const carouselSlides = [
    { title: "Property Consultants & Developers", image: "/images/property.jpg" },
    { title: "Engineering & General Construction", image: "/images/road.jpg" },
    { title: "Financial Consultation (Revenue & Income Generation)", image: "/images/finance.jpeg" },
    { title: "Oil & Gas", image: "/images/gas.jpg" },
    { title: "Power Generation & Electrification", image: "/images/Power.jpg" },
    { title: "Mining", image: "/images/Agriculture.jpg" },
    { title: "Freight & Logistics (Clearing & Forwarding)", image: "/images/freight.jpg" },
    { title: "ICT Solutions", image: "/images/ict.jpeg" },
    { title: "General Contractors", image: "/images/general.jpg" },
  ];

  return (
    <div id="home" className="h-screen relative overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {carouselSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen bg-cover bg-no-repeat bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>

              {/* Content */}
              <div className="relative z-10 text-center px-6 py-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <button className="px-6 py-3 bg-white text-navy-blue font-bold rounded-lg shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
