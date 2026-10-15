import React, { useState } from "react";
import { Home, Search, Plus, Bell, User2 } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();

  // Base class for standard nav links using your flex & spacing utilities
  const navBtnClass =
    "d-flex flex-col align-center justify-center p-2 text-decoration-none";

  // A helper function to handle the active styling for NavLinks
  const getNavStyle = (isActive) => ({
    border: "none",
    background: "transparent",
    cursor: "pointer",
    transition: "transform 0.1s ease",
    transform: isActive ? "translateY(-2px)" : "none",
  });
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
      <NavLink
        to="/"
        className={navBtnClass}
        style={({ isActive }) => getNavStyle(isActive)}
      >
        {({ isActive }) => (
          <Home
            strokeWidth={2.5}
            color={isActive ? "var(--color-primary)" : "var(--color-ink)"}
          />
        )}
      </NavLink>

      {/* 2. SEARCH */}
      <NavLink
        to="/search"
        className={navBtnClass}
        style={({ isActive }) => getNavStyle(isActive)}
      >
        {({ isActive }) => (
          <Search
            strokeWidth={2.5}
            color={isActive ? "var(--color-primary)" : "var(--color-ink)"}
          />
        )}
      </NavLink>

      {/* 3. CENTER FAB (ADD POST) */}
      {/* Keeping this as a button with navigate() since it acts more like an action trigger than a standard link */}
      <div
        className="d-flex justify-center align-center"
        style={{ marginTop: "-32px" }}
      >
        <button
          className="bg-primary d-flex justify-center align-center brutal-click"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            border: "var(--border-md)",
            boxShadow: "var(--shadow-sm)",
          }}
          onClick={() => navigate("/add-post")}
        >
          <Plus strokeWidth={3} size={28} color="#000000" />
        </button>
      </div>

      {/* 4. NOTIFICATIONS */}
      <NavLink
        to="/notifications"
        className={navBtnClass}
        style={({ isActive }) => getNavStyle(isActive)}
      >
        {({ isActive }) => (
          <Bell
            strokeWidth={2.5}
            color={isActive ? "var(--color-primary)" : "var(--color-ink)"}
          />
        )}
      </NavLink>

      {/* 5. PROFILE */}
      <NavLink
        to="/profile"
        className={navBtnClass}
        style={({ isActive }) => getNavStyle(isActive)}
      >
        {({ isActive }) => (
          <User2
            strokeWidth={2.5}
            color={isActive ? "var(--color-primary)" : "var(--color-ink)"}
          />
        )}
      </NavLink>
    </nav>
  );
}
