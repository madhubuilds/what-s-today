import React, { useState } from "react";
import { Home, Search, Plus, Bell, User2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();

  // Route and update active state
  const handleNav = (tab, path) => {
    setActiveTab(tab);
    if (path) navigate(path);
  };

  // Dynamically swap the icon color if it is the active tab
  const getIconColor = (tabName) => {
    return activeTab === tabName ? "var(--color-primary)" : "var(--color-ink)";
  };

  // Base class for standard nav buttons using your flex & spacing utilities
  const navBtnClass = "d-flex flex-col align-center justify-center p-2";
  const navBtnStyle = {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    transition: "transform 0.1s ease",
  };

  return (
    <nav
      // Using your position, flex, spacing, and color utilities
      className="pos-fixed bottom-0 left-0 w-100 z-50 bg-surface d-flex  d-md-none justify-around align-center py-2 px-1"
      style={{
        borderTop: "var(--border-sm)",
        // Safe area padding ensures the bar isn't blocked by the iPhone swipe indicator
        paddingBottom: "calc(var(--space-2) + env(safe-area-inset-bottom))",
      }}
    >
      {/* 1. HOME */}
      <button
        className={navBtnClass}
        style={{
          ...navBtnStyle,
          transform: activeTab === "home" ? "translateY(-2px)" : "none",
        }}
        onClick={() => handleNav("home", "/")}
      >
        <Home strokeWidth={2.5} color={getIconColor("home")} />
      </button>

      {/* 2. SEARCH */}
      <button
        className={navBtnClass}
        style={{
          ...navBtnStyle,
          transform: activeTab === "search" ? "translateY(-2px)" : "none",
        }}
        onClick={() => handleNav("search", "/search")}
      >
        <Search strokeWidth={2.5} color={getIconColor("search")} />
      </button>

      {/* 3. CENTER FAB (ADD POST) */}
      <div
        className="d-flex justify-center align-center"
        style={{ marginTop: "-32px" }} // Pulls the button up out of the bar
      >
        <button
          // Using your color utilities for the bold primary background
          className="bg-primary d-flex justify-center align-center"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            border: "var(--border-md)",
            boxShadow: "var(--shadow-sm)",
            cursor: "pointer",
            transition: "transform 0.1s, box-shadow 0.1s",
          }}
          onClick={() => console.log("Open Add Post Modal")}
          onMouseDown={(e) => {
            // Neubrutalist click effect
            e.currentTarget.style.transform = "translate(2px, 2px)";
            e.currentTarget.style.boxShadow = "var(--shadow-active)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "var(--shadow-sm)";
          }}
        >
          {/* Kept black regardless of theme to maintain contrast on the primary color */}
          <Plus strokeWidth={3} size={28} color="#000000" />
        </button>
      </div>

      {/* 4. NOTIFICATIONS */}
      <button
        className={navBtnClass}
        style={{
          ...navBtnStyle,
          transform:
            activeTab === "notifications" ? "translateY(-2px)" : "none",
        }}
        onClick={() => handleNav("notifications", "/notifications")}
      >
        <Bell strokeWidth={2.5} color={getIconColor("notifications")} />
      </button>

      {/* 5. PROFILE */}
      <button
        className={navBtnClass}
        style={{
          ...navBtnStyle,
          transform: activeTab === "profile" ? "translateY(-2px)" : "none",
        }}
        onClick={() => handleNav("profile", "/profile")}
      >
        <User2 strokeWidth={2.5} color={getIconColor("profile")} />
      </button>
    </nav>
  );
}
