import { useNavigate } from "react-router-dom"

export default function UniverseLayout({ title, color, description, children }) {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white px-10 py-20 border-t-8 border-black">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/universes")}
        className="mb-12 font-black text-lg underline"
      >
        ← Back to Universes
      </button>

      {/* TITLE */}
      <div className="mb-16">
        <div className={`inline-block ${color} px-10 py-5 border-4 border-black
          shadow-[8px_8px_0px_#000] rotate-[-2deg]`}>
          <h1 className="text-5xl font-black uppercase">
            {title}
          </h1>
        </div>

        <p className="mt-6 max-w-3xl font-semibold text-lg">
          {description}
        </p>
      </div>

      {/* CONTENT */}
      {children}
    </div>
  )
}