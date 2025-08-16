import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testmonial.css'; // custom spacing fix

const services = [
  {
    image: '/girl1.jpg',
    title: 'ML Developer',
    description: "JobAI made job hunting effortless. I found my dream role in just two weeks!",
  },
  {
    image: '/girl2.jpg',
    title: 'Full Stack Developer',
    description: 'The AI recommendations felt like they truly understood my skills and goals.',
  },
  {
    image: '/girl3.jpg',
    title: 'AI',
    description: 'Access resources and guidance to grow your career and land your ideal role.',
  },
  {
    image: '/girl4.jpg',
    title: 'App Developer',
    description: 'Smooth, intuitive, and super effective. Best platform for tech job seekers!.',
  }
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const Testmonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="w-full h-full md:px-4  px-2 md:py-12 py-8 md:mb-3 mb-1 ">
      <div className="sm:max-w-7xl max-w-6xl mx-auto">
        <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold text-center lg:mb-14 mb-12 text-blue-500">
          Testimonials
        </h2>

        <Slider {...settings} >
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariant}
              viewport={{ once: true, amount: 0.2 }}
              className="group bg-white rounded-2xl shadow-md border border-blue-500 shadow-blue-300"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full sm:h-48 md:h-52 h-32 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="lg:p-6 sm:p-4 p-2">
                <h3 className="lg:text-lg sm:text-md text-sm font-semibold sm:mb-2 mb-1 text-blue-600">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-1 lg:mb-4 sm:mb-2 sm:text-md text-sm lg:text-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testmonial;
