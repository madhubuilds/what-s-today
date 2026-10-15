import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNav from "./Components/UI/TopNav/TopNav";
import BottomNav from "./Components/UI/BottomNav/BottomNav";
import HomePage from "./pages/Home/HomePage";
import SearchPage from "./pages/Search/SearchPage";
import AddPostPage from "./pages/AddPost/AddPostPage";
import NotificationPage from "./pages/Notification/NotificationPage";
import ProfilePage from "./pages/Profile/ProfilePage";

function App() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-bg pos-relative">
      {/* TopNav is usually sticky, so you can leave it outside Routes if it shows on every page */}
      {/* <TopNav /> */}

      <Routes>
        {/* Your Home/Feed Route */}
        <Route path="/" element={<HomePage />} />
        {/* Search */}
        <Route path="/search" element={<SearchPage />} />
        {/* Add Post */}
        <Route path="/add-post" element={<AddPostPage />} />
        {/* Notifications */}
        <Route path="/notifications" element={<NotificationPage />} />
        {/* Profile Route */}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      {/* BottomNav is fixed to the bottom */}
      <BottomNav />
    </div>
  );
}

export default App;
