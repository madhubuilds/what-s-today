import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNav from "./Components/UI/TopNav/TopNav";
import BottomNav from "./Components/UI/BottomNav/BottomNav";
import ProfilePage from "./pages/Profile/ProfilePage";

function App() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-bg pos-relative">
      {/* TopNav is usually sticky, so you can leave it outside Routes if it shows on every page */}
      {/* <TopNav /> */}

      <Routes>
        {/* Your Home/Feed Route */}
        <Route
          path="/"
          element={
            <div className="p-4">
              <h1 className="text-2xl fw-black">Feed goes here</h1>
            </div>
          }
        />

        {/* Profile Route */}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      {/* BottomNav is fixed to the bottom */}
      <BottomNav />
    </div>
  );
}

export default App;
