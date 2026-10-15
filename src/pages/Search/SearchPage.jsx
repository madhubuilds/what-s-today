import { MapPin, Settings, Settings2 } from "lucide-react";
import React from "react";

const searchData = [
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1627020730793-2ccb5cd55e99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    category: "party",
    name: "live dance",
    distance: "1.2m",
  },
  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1640103856233-833930665307?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    category: "party",
    name: "live night",
    distance: "0.5m",
  },
  {
    id: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1633424414664-c24a6d28086b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    category: "food",
    name: "unlimited food",
    distance: "0.2m",
  },
  {
    id: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    category: "music",
    name: "music out",
    distance: "2.2m",
  },
  {
    id: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1763274939611-70edf5bb356d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    category: "nature",
    name: "peace nature",
    distance: "0.7m",
  },
];

export default function SearchPage() {
  return (
    <div
      className="max-w-md mx-auto min-h-screen bg-bg pos-relative px-3"
      style={{ paddingBottom: "100px", paddingTop: "20px" }}
    >
      {/* ================= HEADER ================= */}
      <div className="d-flex justify-between align-center mb-3">
        <h2 className="uppercase text-4xl fw-black m-0 tracking-tight">
          Explore
        </h2>
        <div className="d-flex gap-1 align-center bg-blue py-1 px-3 border-md rounded-full shadow-sm brutal-click">
          <MapPin size={18} strokeWidth={3} />
          <span className="fw-black uppercase tracking-tight text-sm">HYD</span>
        </div>
      </div>

      {/* ================= SEARCH BAR ================= */}
      <div className="d-flex align-center gap-2 mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search Party, Food etc..."
        />
        <button className="btn btn-icon bg-orange border-md shadow-sm brutal-click">
          <Settings2 strokeWidth={3} />
        </button>
      </div>

      {/* ================= FILTER CHIPS (Scrollable) ================= */}
      <div
        className="d-flex gap-2 mb-4 overflow-x-auto pb-1"
        style={{ whiteSpace: "nowrap" }}
      >
        {/* Using your button utilities, adding flex-shrink-0 so they don't squish */}
        <button className="btn btn-lg bg-yellow rounded-full flex-shrink-0">
          🍔 Food
        </button>
        <button className="btn btn-lg bg-pink rounded-full flex-shrink-0">
          🎉 Party
        </button>
        <button className="btn btn-lg bg-mint rounded-full flex-shrink-0">
          🌳 Nature
        </button>
        <button className="btn btn-lg bg-purple rounded-full flex-shrink-0">
          🎵 Music
        </button>
        <button className="btn btn-lg bg-blue rounded-full flex-shrink-0">
          ✨ Outing
        </button>
      </div>
      {/* img grid */}

      {/* ================= PINTEREST MASONRY GRID ================= */}
      {/* columnCount: 2 creates the Pinterest effect automatically */}
      <div style={{ columnCount: 2, columnGap: "12px" }}>
        {searchData.map((data) => (
          // breakInside: "avoid" stops a single card from being cut in half across columns
          <div
            key={data.id}
            className="border-md shadow-sm rounded-4 bg-surface overflow-hidden brutal-click"
            style={{ breakInside: "avoid", marginBottom: "12px" }}
          >
            {/* Image Wrapper (Position Relative is key here) */}
            <div className="pos-relative">
              <img
                src={data.imgUrl}
                alt={data.name}
                className="w-100 d-block object-cover"
              />

              {/* Category Pill Overlapping the Image */}
              <div className="pos-absolute top-0 right-0 z-10 p-2">
                <span className="bg-primary text-xs fw-black uppercase tracking-tight px-2 py-1 border-sm rounded-full shadow-sm d-inline-block">
                  {data.category}
                </span>
              </div>
            </div>

            {/* Card Content Area */}
            <div className="p-2">
              <p className="text-base fw-extrabold uppercase m-0 tracking-tight leading-none truncate">
                {data.name}
              </p>

              <div className="d-flex align-center gap-1 mt-1 text-ink">
                <MapPin size={14} strokeWidth={3} />
                <span className="text-sm fw-bold">{data.distance}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
