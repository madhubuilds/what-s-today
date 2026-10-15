import { MapPin } from "lucide-react";
export default function TopNav() {
  return (
    <header>
      <nav>
        <div className="nav-brand">What's Today?</div>
        <MapPin size={30} strokeWidth={3} />
      </nav>
    </header>
  )
}
