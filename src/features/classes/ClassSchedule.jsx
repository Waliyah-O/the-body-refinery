import React, { useState } from "react";
import Calendar from "react-calendar";
import { motion } from "framer-motion";
import "react-calendar/dist/Calendar.css";
import { mockClasses } from "../Data/Data";

const ClassesSchedule = () => {
  const [selectedDay, setSelectedDay] = useState("All");
  const [filter, setFilter] = useState("All");
  const [filteredClasses, setFilteredClasses] = useState(mockClasses);

  const filterOptions = [
    "All",
    "Yoga",
    "Strength Training",
    "Pilates",
    "Dance",
    "Cardio",
  ];

  // Filter classes based on selected day and type
  const handleFilter = (day) => {
    setSelectedDay(day);
    const filteredByDay = day === "All" ? mockClasses : mockClasses.filter((classItem) => classItem.days.includes(day));
    const filteredByType = filter === "All" ? filteredByDay : filteredByDay.filter((classItem) => classItem.type === filter);
    setFilteredClasses(filteredByType);
  };

  // Handle class type filter
  const handleClassTypeFilter = (type) => {
    setFilter(type);
    const filteredByType = type === "All" ? mockClasses : mockClasses.filter((classItem) => classItem.type === type);
    const filteredByDay = selectedDay === "All" ? filteredByType : filteredByType.filter((classItem) => classItem.days.includes(selectedDay));
    setFilteredClasses(filteredByDay);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Classes & Schedule</h1>

      {/* Calendar */}
      <div className="flex justify-center mb-6">
        <Calendar onChange={(value) => alert(`Selected Date: ${value}`)} />
      </div>

      {/* Day Filter */}
      <div className="flex justify-center space-x-4 mb-4">
        {["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
          <button
            key={day}
            className={`px-4 py-2 rounded ${selectedDay === day ? "bg-[#2c6975] text-white" : "bg-gray-200"}`}
            onClick={() => handleFilter(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Class Type Filter */}
      <div className="flex justify-center space-x-4 mb-6">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleClassTypeFilter(option)}
            className={`px-4 py-2 rounded font-medium ${filter === option ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-700"}`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Classes */}
      <motion.div layout className="grid md:grid-cols-3 gap-8">
        {filteredClasses.map((classItem) => (
          <motion.div
            key={classItem.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow-md rounded-lg p-4"
          >
            <h3 className="text-xl font-bold">{classItem.name}</h3>
            <p className="text-gray-600">Time: {classItem.time}</p>
            <p className="text-gray-600">Days: {classItem.days.join(", ")}</p>
            <p className="text-gray-500">Trainer: {classItem.trainer}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ClassesSchedule;
