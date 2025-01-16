import React, { useState } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { mockTrainers } from "../Data/Data";

const TrainerProfile = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const filteredTrainers =
    selectedSpecialty === "All"
      ? mockTrainers
      : mockTrainers.filter((trainer) =>
          trainer.specialties.includes(selectedSpecialty)
        );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Trainer Profiles</h1>

      {/* Filter */}
      <div className="flex justify-center space-x-4 mb-6">
        {["All", "Yoga", "Strength Training", "Pilates", "Bodybuilding"].map((specialty) => (
          <button
            key={specialty}
            className={`px-4 py-2 rounded ${selectedSpecialty === specialty ? "bg-[#2c6975] text-white" : "bg-gray-200"}`}
            onClick={() => setSelectedSpecialty(specialty)}
          >
            {specialty}
          </button>
        ))}
      </div>

      {/* Trainers */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredTrainers.map((trainer) => (
          <motion.div
            key={trainer.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <LazyLoadImage
              src={trainer.image}
              alt={trainer.name}
              effect="blur"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{trainer.name}</h3>
              <p className="text-gray-600">{trainer.bio}</p>
              <p className="text-gray-600 mt-2">
                <strong>Specialties:</strong> {trainer.specialties.join(", ")}
              </p>
              <p className="text-gray-600">
                <strong>Certifications:</strong> {trainer.certifications.join(", ")}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrainerProfile;
