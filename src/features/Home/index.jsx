import React from "react";
import { motion } from "framer-motion";
import { mockFeatures, mockTestimonials } from "../Data/Data";

const GymHomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-[url('https://via.placeholder.com/1920x600')] bg-cover bg-center h-[400px] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-[#2c6975]">
            Welcome to Body Refinery Gym
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Discover our classes, trainers, and schedules tailored to help you
            achieve your fitness goals.
          </p>
          <button className="bg-[#2c6975] text-white px-6 py-3 rounded-lg hover:bg-[#1e4a5a] transition duration-300">
            Join Us Today
          </button>
        </div>
      </div>

      {/* Gym Features Section */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose FitLife?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {mockFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Members Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-600 italic">{testimonial.quote}</p>
                <p className="text-gray-800 font-bold mt-4">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
          {/* <div className="carousel w-full flex md:w-4/5 mx-auto p-4 space-x-4">
            {mockTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="carousel-item w-full flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-6 rounded-lg shadow-md w-80 mx-4">
                  <p className="text-gray-600 italic">{testimonial.quote}</p>
                  <p className="text-gray-800 font-bold mt-4">
                    - {testimonial.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div> */}

          {/* <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
            <button className="btn btn-circle">❮</button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
            <button className="btn btn-circle">❯</button>
          </div> */}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-[#2c6975] py-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Life?
        </h2>
        <p className="text-xl mb-6">
          Join FitLife Gym today and start your fitness journey.
        </p>
        <button className="bg-white text-[#2c6975] px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default GymHomePage;
