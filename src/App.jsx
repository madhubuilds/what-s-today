import { Bell, Home, MapPin, Plus, Search, User2 } from "lucide-react";
import "./App.css";
import TopNav from "./Components/UI/TopNav/TopNav";
import BottomNav from "./Components/UI/BottomNav/BottomNav";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/Profile/ProfilePage";

function App() {
  return (
    <>
      {/* <TopNav /> */}
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <BottomNav />
    </>
  );
}

export default App;
