import { useNavigate } from "react-router-dom"

export default function UniverseLayout({ title, color, description, children }) {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      {/* 🎬 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.png')" }}
      />

      {/* DARK CINEMATIC OVERLAY */}
      <div className="absolute inset-0 bg-black/00" />

      

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 px-10 py-20">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/universes")}
          className="mb-12 font-black text-lg underline hover:opacity-80"
        >
          ← Back to Universes
        </button>

        {/* TITLE */}
        <div className="mb-16">
          <div
            className={`inline-block ${color} px-10 py-5 border-4 border-black
            shadow-[8px_8px_0px_#000] rotate-[-2deg]`}
          >
            <h1 className="text-5xl font-black uppercase text-black">
              {title}
            </h1>
          </div>

          <p className="mt-6 max-w-3xl font-semibold text-lg text-white">
            {description}
          </p>
        </div>

        {/* CHILD CONTENT */}
        <div className="relative">
          {children}
        </div>

      </div>
    </div>
  )
}