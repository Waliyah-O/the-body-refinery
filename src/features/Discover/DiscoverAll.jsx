import React from "react";
import Button from "../Button";

const DiscoverAll = () => {
  const features = [
    {
      title: "State-of-the-Art Equipment",
      description: "Top-tier machines and weights for every fitness goal.",
      image: "https://via.placeholder.com/150?text=Equipment",
    },
    {
      title: "Personalized Training",
      description: "Expert trainers to guide you every step of the way.",
      image: "https://via.placeholder.com/150?text=Training",
    },
    {
      title: "Diverse Classes",
      description: "Yoga, HIIT, Pilates, Zumba, and more.",
      image: "https://via.placeholder.com/150?text=Classes",
    },
    {
      title: "Relaxing Spa",
      description: "Rejuvenate your body with sauna, massage, and more.",
      image: "https://via.placeholder.com/150?text=Spa",
    },
  ];

  const testimonials = [
    {
      name: "Emily R.",
      feedback:
        "The Body Refinery changed my life! The trainers and classes are incredible.",
      image: "https://via.placeholder.com/150?text=Emily",
    },
    {
      name: "Jake M.",
      feedback: "Amazing facilities and the best training programs around!",
      image: "https://via.placeholder.com/150?text=Jake",
    },
    {
      name: "Sarah K.",
      feedback:  "This gym has changed my life! The trainers are amazing, and the facilities are top-notch.",
      image: "https://via.placeholder.com/150?text=Jake",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20 px-10 text-center">
        <h1 className="text-4xl font-bold">Discover The Body Refinery</h1>
        <p className="mt-4 text-lg">
          Elevate your fitness journey with premium facilities, expert trainers,
          and a community like no other.
        </p>
        <Button className="mt-6 px-6 py-3 text-lg bg-white text-purple-800 hover:bg-gray-200">
          Join Us Today
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-10">
        <h2 className="text-3xl font-bold text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card shadow-lg rounded-lg p-6 bg-white hover:shadow-xl transition"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trainers Section */}
      <section className="bg-gray-200 py-16 px-10">
        <h2 className="text-3xl font-bold text-center">Meet Our Trainers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {["Alice", "Ben", "Chris"].map((trainer, index) => (
            <div
              key={index}
              className="card shadow-lg rounded-lg p-6 bg-white hover:shadow-xl transition text-center"
            >
              <img
                src={`https://via.placeholder.com/150?text=${trainer}`}
                alt={trainer}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{trainer}</h3>
              <p className="text-gray-600 mt-2">
                Expert in personalized training
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-10">
        <h2 className="text-3xl font-bold text-center">What Our Members Say</h2>
        <div className="carousel w-full mt-10 space-x-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card shadow-lg rounded-lg p-6 bg-white hover:shadow-xl transition max-w-sm mx-auto"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              <h4 className="text-xl font-semibold text-center mt-4">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-800 text-white py-16 px-10 text-center">
        <h2 className="text-3xl font-bold">Ready to Transform?</h2>
        <p className="mt-4">
          Join The Body Refinery today and take the first step toward your
          goals.
        </p>
        <Button className="mt-6 px-6 py-3 text-lg bg-white text-purple-800 hover:bg-gray-200">
          Get Started
        </Button>
      </section>
    </div>
  );
};

export default DiscoverAll;
