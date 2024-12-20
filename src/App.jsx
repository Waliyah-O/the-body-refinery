import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import DashboardPage from "./pages/dashboard";
import DiscoverPage from "./pages/discover";
import MedicalsPage from "./pages/medicals";
import NutritionPage from "./pages/nutrition";
import CalculatorsPage from "./pages/calculators";
import ExercisesPage from "./pages/exercises";
import DrugInfoPage from "./pages/drugInfo";
import CalorieLossComponent from "./features/Calculators/calories";
import ChatBotPage from "./pages/chatBot";
import RegistrationForm from "./features/Forms/RegistrationForm";
import ShopPage from "./pages/Shop";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<DashboardPage />} />
          <Route exact path="/discover" element={<DiscoverPage />} />
          <Route exact path="/medicals" element={<MedicalsPage />} />
          <Route exact path="/nutrition" element={<NutritionPage />} />
          <Route exact path="/calculators" element={<CalculatorsPage />} />
          <Route exact path="/exercises" element={<ExercisesPage />} />
          <Route exact path="/registration-form" element={<RegistrationForm />} />
          <Route exact path="/shop" element={<ShopPage />} />
        
          <Route exact path="/druginfo" element={<DrugInfoPage />} />
          <Route exact path="/calorieloss" element={<CalorieLossComponent />} />
          <Route exact path="/chatbot" element={<ChatBotPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
