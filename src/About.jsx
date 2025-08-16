import React from 'react'

import { motion } from 'framer-motion';
const services = [
  {
    image: '/job1.jpg',
    title: 'Find Your Dream Job',
    description: 'Explore thousands of curated job listings tailored to your skills and interests.',
  },
  {
    image: '/job2.jpg',
    title: 'Company Insights',
    description: 'Learn about companies, their culture, and what it’s like to work there before you apply.',
  },
  {
    image: '/job3.jpg',
    title: 'Career Development',
    description: 'Access resources and guidance to grow your career and land your ideal role.',
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

const About = () => {
  return (
   
    <section className="w-full sm:px-5 px-7 md:py-16 py-14 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
      <div className="max-w-6xl mx-auto">
        <h2 className=" md:text-4xl sm:text-3xl text-2xl font-bold  text-center lg:mb-10 mb-8 text-blue-600"> Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariant}
              viewport={{ once: true, amount: 0.2 }}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-400"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full sm:h-56 h-40 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  loading='lazy'
                />
              </div>
              <div className="lg:p-6 sm:p-4 p-3">
                <h3 className="lg:text-xl sm:text-lg text-md font-semibold mb-2 text-red-600 group-hover:text-indigo-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-700 sm:mb-3 lg:mb-4 mb-2 sm:text-md text-sm lg:text-lg">{service.description}</p>
              
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
