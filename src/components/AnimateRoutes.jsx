import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ClassesSchedule from "../features/classes/ClassSchedule";
import TrainerProfile from "../features/profiles/TrainerProfiles";
import ShopPage from "../pages/Shop";
import Home from "../pages";

const AnimatedRoutes = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-[#2c6975] text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Body Refinery Gym</h1>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/classes-schedule" className="hover:underline">
                Classes & Schedule
              </Link>
            </li>
            <li>
              <Link to="/trainer-profile" className="hover:underline">
                Trainer Profiles
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <ul className="md:hidden bg-[#2c6975] text-center py-4 space-y-4">
            <li>
              <Link to="/" className="block" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/classes-schedule"
                className="block"
                onClick={toggleMenu}
              >
                Classes & Schedule
              </Link>
            </li>
            <li>
              <Link
                to="/trainer-profile"
                className="block"
                onClick={toggleMenu}
              >
                Trainer Profiles
              </Link>
            </li>
            <li>
              <Link to="/shop" className="block" onClick={toggleMenu}>
                Shop
              </Link>
            </li>
          </ul>
        )}
      </nav>

      {/* Routes with Animations */}
      <div className="container mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/classes-schedule"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <ClassesSchedule />
                </motion.div>
              }
            />
            <Route
              path="/trainer-profile"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <TrainerProfile />
                </motion.div>
              }
            />
            <Route
              path="/shop"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <ShopPage />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedRoutes;
