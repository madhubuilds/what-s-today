import { Heart, MapPin, MapPinned, MessageCircle, Send } from "lucide-react";

export default function HomePage() {
  return (
    <div
      className="max-w-md mx-auto min-h-screen bg-bg pos-relative px-2"
      style={{ paddingBottom: "100px" }}
    >
      <header>
        <div className="d-flex justify-between pt-1">
          <h1 className="text-3xl text-md-4xl fw-black uppercase">
            what's today?
          </h1>
          <div className="d-flex align-center gap-1 bg-purple px-3 rounded-2 border-sm">
            <MapPinned />
            <span className="fw-semibold">HYD</span>
          </div>
        </div>
      </header>

      {/* Home Post card */}
      <div className="border-sm p-2 my-2 rounded-2 shadow-sm">
        <div className="d-flex gap-1 align-center">
          <div style={{ width: "4rem", height: "4rem" }}>
            <img
              className="w-100 h-100 object-cover rounded-circle border-sm"
              src="https://images.unsplash.com/photo-1791514122824-a10c01b1864e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt=""
            />
          </div>
          <div className="flex-column">
            <p className="text-xl">Alex_E</p>
            <div className="p-0 text-xs">@alex_e</div>
          </div>
        </div>
        <div className="my-2 bg-yellow p-1 rounded-full border-sm">
          <p className="d-flex text-sm align-center">
            <MapPin strokeWidth={2} color="var(--color-ink)" />
            the chill nights (100m Away)
          </p>
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1683121126477-17ef068309bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt=""
            className="aspect-square object-cover border-md rounded-3"
          />
        </div>
        <div>
          <p className="text-xl p-0 m=0">
            Best Party in the City.
            <br /> <small className="text-xs pr-2">#party</small>
            <small className="text-xs">#hyd </small>
          </p>
        </div>
        <div className="d-flex justify-between">
          <div className="d-flex gap-2 bg-orange p-2 rounded-2 border-sm shadow-sm px-4">
            <Heart /> 22
          </div>
          <div className="d-flex gap-2 bg-yellow p-2 rounded-2 border-sm shadow-sm px-4">
            <MessageCircle /> 42
          </div>
          <div className="d-flex gap-2 bg-blue p-2 rounded-2 border-sm shadow-sm">
            <Send />
          </div>
        </div>
      </div>
    </div>
  );
}
