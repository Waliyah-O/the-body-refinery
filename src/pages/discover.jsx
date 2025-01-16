import React, { useState } from "react";

import Sidebar from "../features/Sidebar";
import Navbar from "../features/OtherNav";
import Discover from "../features/Discover";

const DiscoverPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar />
     <Discover/>
    </>
  );
};

export default DiscoverPage;

// import React from "react";
// import Button from "../features/Button";

// const DiscoverPage = () => {
//   const features = [
//     {
//       title: "State-of-the-Art Equipment",
//       description: "Top-tier machines and weights for every fitness goal.",
//       image: "https://via.placeholder.com/150?text=Equipment",
//     },
//     {
//       title: "Personalized Training",
//       description: "Expert trainers to guide you every step of the way.",
//       image: "https://via.placeholder.com/150?text=Training",
//     },
//     {
//       title: "Diverse Classes",
//       description: "Yoga, HIIT, Pilates, Zumba, and more.",
//       image: "https://via.placeholder.com/150?text=Classes",
//     },
//     {
//       title: "Relaxing Spa",
//       description: "Rejuvenate your body with sauna, massage, and more.",
//       image: "https://via.placeholder.com/150?text=Spa",
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Emily R.",
//       feedback:
//         "The Body Refinery changed my life! The trainers and classes are incredible.",
//       image: "https://via.placeholder.com/150?text=Emily",
//     },
//     {
//       name: "Jake M.",
//       feedback: "Amazing facilities and the best training programs around!",
//       image: "https://via.placeholder.com/150?text=Jake",
//     },
//     {
//       name: "Sarah K.",
//       feedback:  "This gym has changed my life! The trainers are amazing, and the facilities are top-notch.",
//       image: "https://via.placeholder.com/150?text=Jake",
//     },
//   ];

//   return (
//     <div className="bg-gray-100 text-gray-800">
//       {/* Hero Section */}
//       <section
//         className="relative bg-cover bg-center h-[50vh] text-white flex items-center justify-center"
//         style={{
//           backgroundImage:
//             "url('https://via.placeholder.com/1920x1080?text=Gym+Hero+Image')",
//         }}
//       >
//         <div className="text-center space-y-4">
//           <h1 className="text-4xl md:text-6xl font-bold">
//             Discover Your Best Self
//           </h1>
//           <p className="text-lg md:text-xl">Join The Body Refinery Today</p>
//           <button className="btn btn-primary px-6 py-3 rounded-full">
//             Join Now
//           </button>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 px-10">
//         <h2 className="text-3xl font-bold text-center">What We Offer</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="card shadow-lg rounded-lg p-6 bg-white hover:shadow-xl transition"
//             >
//               <img
//                 src={feature.image}
//                 alt={feature.title}
//                 className="w-full h-32 object-cover rounded-lg mb-4"
//               />
//               <h3 className="text-xl font-semibold">{feature.title}</h3>
//               <p className="text-gray-600 mt-2">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Classes and Schedule */}
//       <section className="py-16 bg-gray-50">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           Classes & Schedule
//         </h2>
//         <div className="grid md:grid-cols-4 gap-8 px-4 md:px-16">
//           {[
//             {
//               name: "Yoga",
//               image: "https://via.placeholder.com/150",
//               description: "Relax and rejuvenate.",
//             },
//             {
//               name: "Zumba",
//               image: "https://via.placeholder.com/150",
//               description: "Dance your way to fitness.",
//             },
//             {
//               name: "Strength Training",
//               image: "https://via.placeholder.com/150",
//               description: "Build strength and endurance.",
//             },
//             {
//               name: "Cardio Blast",
//               image: "https://via.placeholder.com/150",
//               description: "Get your heart pumping.",
//             },
//           ].map(({ name, image, description }, index) => (
//             <div
//               key={index}
//               className="card bg-white shadow-lg rounded-lg overflow-hidden"
//             >
//               <img
//                 src={image}
//                 alt={name}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-bold">{name}</h3>
//                 <p className="text-sm text-gray-600">{description}</p>
//                 <button className="btn btn-outline btn-sm mt-4">
//                   View Schedule
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Meet the Trainers */}
//       <section className="bg-gray-200 py-16">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           Meet the Trainers
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8 px-4 md:px-16">
//           {[
//             {
//               name: "Alex Johnson",
//               specialty: "Strength Training",
//               image: "https://via.placeholder.com/150",
//             },
//             {
//               name: "Taylor Smith",
//               specialty: "Yoga",
//               image: "https://via.placeholder.com/150",
//             },
//             {
//               name: "Jordan Lee",
//               specialty: "Cardio",
//               image: "https://via.placeholder.com/150",
//             },
//           ].map(({ name, specialty, image }, index) => (
//             <div key={index} className="card shadow-lg rounded-lg p-6 bg-white hover:shadow-xl transition text-center">
//               <img
//                 src={image}
//                 alt={name}
//                 className="w-24 h-24 rounded-full mx-auto mb-4"
//               />
//               <h3 className="font-bold">{name}</h3>
//               <p className="text-sm text-gray-500">{specialty}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-16 px-10">
//         <h2 className="text-3xl font-bold text-center">What Our Members Say</h2>
//         <div className="carousel w-full mt-10 space-x-4">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="card shadow-lg rounded-lg p-6 bg-white hover:shadow-xl transition max-w-sm mx-auto"
//             >
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
//               />
//               <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
//               <h4 className="text-xl font-semibold text-center mt-4">
//                 {testimonial.name}
//               </h4>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Membership Plans */}
//       <section className="py-16 bg-gray-200">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           Membership Plans
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8 px-4 md:px-16">
//           {[
//             {
//               plan: "Monthly",
//               price: "$59/month",
//               features: ["Access to gym", "1 free personal training session"],
//             },
//             {
//               plan: "Quarterly",
//               price: "$159/3 months",
//               features: ["Access to gym", "3 free personal training sessions"],
//             },
//             {
//               plan: "Annual",
//               price: "$549/year",
//               features: ["Access to gym", "Unlimited group classes"],
//             },
//           ].map(({ plan, price, features }, index) => (
//             <div
//               key={index}
//               className="card bg-white shadow-lg p-6 rounded-lg text-center"
//             >
//               <h3 className="text-xl font-bold mb-4">{plan}</h3>
//               <p className="text-lg font-semibold mb-4">{price}</p>
//               <ul className="text-left mb-4">
//                 {features.map((feature, i) => (
//                   <li key={i} className="flex items-center gap-2">
//                     <span className="text-green-600">✔</span>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//               <button className="btn btn-primary w-full">Choose {plan}</button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="bg-purple-800 text-white py-16 px-10 text-center">
//         <h2 className="text-3xl font-bold">Ready to Transform?</h2>
//         <p className="mt-4">
//           Join The Body Refinery today and take the first step toward your
//           goals.
//         </p>
//         <Button className="mt-6 px-6 py-3 text-lg bg-white text-purple-800 hover:bg-gray-200">
//           Get Started
//         </Button>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 bg-gray-900 text-white text-center">
//         <p>&copy; {new Date().getFullYear()} The Body Refinery</p>
//       </footer>
//     </div>
//   );
// };

// export default DiscoverPage;
