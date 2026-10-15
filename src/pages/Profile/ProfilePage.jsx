import { ArrowBigLeft, Folder, ImageIcon, MapPin } from "lucide-react"; 

export default function ProfilePage() {
  // Placeholder array to generate the 9 square grid items quickly
  const imgData = [
    {
      id: 1,
      imgUrl:
        "https://images.unsplash.com/photo-1790226900289-66f435518883?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      id: 2,
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1791756506785-f690b2f27fc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      id: 3,
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1791369739253-b3f27400d830?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      id: 4,
      imgUrl:
        "https://images.unsplash.com/photo-1790955208124-bcb326f21aef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      id: 5,
      imgUrl:
        "https://images.unsplash.com/photo-1791987155877-75384ff3e3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D://images.unsplash.com/photo-1790955208124-bcb326f21aef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      id: 6,
      imgUrl:
        "https://images.unsplash.com/photo-1791752462600-e3ef63bce539?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      id: 7,
      imgUrl:
        "https://images.unsplash.com/photo-1791998581152-c07f7a2f611e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      id: 8,
      imgUrl:
        "https://images.unsplash.com/photo-1792022839662-70f86f638ff5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      id: 9,
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1791354635691-9d026d7b7845?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      id: 9,
      imgUrl:
        "https://images.unsplash.com/photo-1791829187775-fe732be6d654?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
  ];
  return (
    <div
      className="max-w-md mx-auto min-h-screen bg-bg pos-relative"
      style={{ paddingBottom: "100px" }}
    >
      {/* ================= HEADER ================= */}
      <header className="pos-sticky top-0 z-50 bg-surface border-b border-md d-flex justify-between align-center px-3 py-3">
        <button className="btn btn-ghost p-1 brutal-click z-10">
          <ArrowBigLeft strokeWidth={3} size={28} color="var(--color-ink)" />
        </button>

        {/* Perfectly Centered Title */}
        <h1 className="pos-absolute left-50 translate-middle-x text-4xl fw-black uppercase tracking-tight m-0 leading-none">
          Profile
        </h1>

        {/* Right Action: Cyan Location Pill */}
        <div className="bg-blue border-md rounded-full px-3 py-1 d-flex align-center gap-1 shadow-sm brutal-click z-10">
          <MapPin size={16} strokeWidth={3} />
          <span className="text-sm fw-black uppercase tracking-tight">NYC</span>
        </div>
      </header>
      {/* Profile Header Ends */}
      {/* ================= BANNER & AVATAR ================= */}
      <div className="pos-relative">
        {/* Banner with a colorful background */}
        <div
          className="w-100 border-b border-md bg-purple d-flex align-center justify-center overflow-hidden"
          style={{ height: "120px" }}
        >
          <img
            src="https://images.unsplash.com/vector-1788151610042-1fea1fb9da32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt=""
          />
        </div>

        {/* Left-Aligned Avatar & Name Container */}
        <div
          className="d-flex px-3 gap-3 pos-relative"
          style={{ marginTop: "-30px" }}
        >
          {/* Avatar overhanging the banner */}
          <div
            className="bg-primary border-md rounded-circle d-flex justify-center align-center overflow-hidden shadow-sm flex-shrink-0"
            style={{ width: "90px", height: "90px" }}
          >
            <img
              src="https://plus.unsplash.com/premium_vector-1789881787479-8c11a0843253?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              className="object-cover w-100 h-100"
              alt=""
            />
          </div>

          {/* Name & Handle sitting below the banner line */}
          <div className="d-flex flex-col justify-end pb-1 pt-5">
            <h2 className="text-4xl fw-black m-0 leading-none tracking-tight">
              Mia_R.
            </h2>
            <p className="text-lg fw-semibold text-main m-0 leading-none mt-1">
              @miarosa
            </p>
          </div>
        </div>
      </div>
      {/* ================= BIO ================= */}
      <div className="px-3 mb-4 mt-3">
        <p className="text-xl fw-bold m-0 leading-tight">
          Exploring NYC, one bite at a time! 🍕☕✨
        </p>
      </div>
      {/* ================= STATS ROW ================= */}
      <div className="row gap-2 px-3 mb-4">
        {/* Followers (Pink) */}
        <div className="col-4 bg-pink border-md rounded-3 shadow-md d-flex flex-col align-center justify-center py-3 brutal-click">
          <span className="text-2xl fw-black leading-none tracking-tight">
            12.4K
          </span>
          <span className="text-xs fw-extrabold uppercase tracking-tight mt-1">
            Followers
          </span>
        </div>

        {/* Value (Primary/Yellow) */}
        <div className="col-4 bg-primary border-md rounded-3 shadow-md d-flex flex-col align-center justify-center py-3 brutal-click">
          <span className="text-2xl fw-black leading-none tracking-tight">
            3.5K
          </span>
          <span className="text-xs fw-extrabold uppercase tracking-tight mt-1">
            Value
          </span>
        </div>

        {/* Owned (Cyan) */}
        <div className="col-4 bg-blue border-md rounded-3 shadow-md d-flex flex-col align-center justify-center py-3 brutal-click">
          <span className="text-2xl fw-black leading-none tracking-tight">
            58
          </span>
          <span className="text-xs fw-extrabold uppercase tracking-tight mt-1">
            Owned
          </span>
        </div>
      </div>
      {/* ================= TABS ================= */}
      <div className="row gap-2 px-3 mb-4">
        {/* Active Tab (Yellow/Primary) */}
        <button className="col-6 btn btn-primary border-md rounded-3 shadow-md d-flex justify-center align-center gap-2 py-3">
          <span className="text-xl fw-black uppercase tracking-tight">
            Posts
          </span>
          <ImageIcon size={22} strokeWidth={3} />
        </button>

        {/* Inactive Tab (Surface/White) */}
        <button className="col-6 btn btn-surface border-md rounded-3 shadow-md d-flex justify-center align-center gap-2 py-3">
          <span className="text-xl fw-black uppercase tracking-tight">
            Saved
          </span>
          <Folder size={22} strokeWidth={3} />
        </button>
      </div>

      {/* ================= IMAGE GRID ================= */}
      <div className="row gap-2 px-3">
        {imgData.map((img, index) => {
          // Creating a repeating pattern of background colors for the placeholders
          const bgColors = [
            "bg-pink",
            "bg-lavender",
            "bg-mint",
            "bg-blue",
            "bg-orange",
            "bg-primary",
          ];
          const bgColor = bgColors[index % bgColors.length];

          return (
            // col-4 creates the exact 3-column grid, aspect-square keeps them perfect squares
            <div
              key={index}
              className={`col-4 aspect-square ${bgColor} border-md rounded-3 shadow-sm overflow-hidden brutal-click d-flex justify-center align-center`}
            >
              <img
                src={img.imgUrl}
                alt={img.id}
                className="w-100 h-100 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
