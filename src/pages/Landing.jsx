import { useNavigate } from "react-router-dom"

export default function Landing({ unlockAudio, playPow, playSwoosh }) {
  const navigate = useNavigate()

  return (
    <div className="w-full font-sans text-black bg-[#fdf400] overflow-hidden">

      {/* =====================================================
          PAGE 1 — HERO (CINEMA + COMIC DESIGN ONLY HERE)
      ====================================================== */}
      <section className="relative min-h-screen flex items-center justify-center px-10">

        {/* HERO DECOR BLOCKS */}
        <div className="absolute top-20 left-20 w-56 h-56 bg-red-400 rotate-12 border-4 border-black shadow-[8px_8px_0px_#000]" />
        <div className="absolute bottom-24 right-32 w-40 h-40 bg-cyan-400 -rotate-12 border-4 border-black shadow-[8px_8px_0px_#000]" />
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-black rotate-45" />

        {/* FILM STRIPS */}
        <div className="absolute left-0 top-0 h-full w-14 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.3)_0px,rgba(0,0,0,0.3)_10px,transparent_10px,transparent_20px)] opacity-40" />
        <div className="absolute right-0 top-0 h-full w-14 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.3)_0px,rgba(0,0,0,0.3)_10px,transparent_10px,transparent_20px)] opacity-40" />

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-7xl md:text-8xl font-black uppercase rotate-[-2deg] mb-8">
            <span className="bg-white px-8 py-4 border-4 border-black shadow-[10px_10px_0px_#000]">
              CINVERSE
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-bold mb-12">
            BOOM 💥 A comic-style universe where movies & series are
            <span className="underline"> explored, not just watched</span>.
          </p>

          <button
            onClick={() => {
              unlockAudio()
              playPow()
              navigate("/universes")
            }}
            onMouseEnter={playSwoosh}
            className="bg-black text-white px-12 py-5 text-xl font-extrabold border-4 border-black
            shadow-[10px_10px_0px_#000]
            hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition"
          >
            ENTER CINVERSE
          </button>
        </div>
      </section>

      {/* =====================================================
          PAGE 2 — WHAT IS CINVERSE
      ====================================================== */}
      <section className="min-h-screen bg-white border-t-8 border-black px-10 py-32">
        <h2 className="text-6xl font-black uppercase text-center mb-20">
          What is Cinverse?
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 text-xl font-semibold">
          <div className="bg-red-500 text-white p-10 border-4 border-black shadow-[8px_8px_0px_#000]">
            Movies are no longer isolated stories.
          </div>

          <div className="bg-blue-500 text-white p-10 border-4 border-black shadow-[8px_8px_0px_#000]">
            Cinverse treats cinema like a living universe.
          </div>

          <div className="bg-green-500 text-white p-10 border-4 border-black shadow-[8px_8px_0px_#000]">
            Characters evolve, timelines connect.
          </div>

          <div className="bg-black text-white p-10 border-4 border-black shadow-[8px_8px_0px_#000]">
            Everything visual. Everything cinematic.
          </div>
        </div>
      </section>

      {/* =====================================================
          PAGE 3 — UNIVERSES
      ====================================================== */}
      <section className="min-h-screen bg-[#fdf400] border-t-8 border-black px-10 py-32">
        <h2 className="text-6xl font-black uppercase text-center mb-24">
          Universes
        </h2>

        <div className="grid md:grid-cols-3 gap-14 max-w-6xl mx-auto">
          {["Hollywood", "Bollywood", "Tollywood"].map((u, i) => (
            <div
              key={i}
              onMouseEnter={playSwoosh}
              className="bg-white p-12 border-4 border-black shadow-[10px_10px_0px_#000]
              hover:-translate-y-2 hover:translate-x-2 hover:shadow-none transition"
            >
              <h3 className="text-3xl font-black mb-4">{u}</h3>
              <p className="font-semibold">
                Explored as a cinematic comic universe.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          PAGE 4 — CHARACTERS & TIMELINES
      ====================================================== */}
      <section className="min-h-screen bg-white border-t-8 border-black px-10 py-32">
        <h2 className="text-6xl font-black uppercase text-center mb-20">
          Characters & Timelines
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="bg-blue-500 text-white p-16 border-4 border-black shadow-[10px_10px_0px_#000]">
            <h3 className="text-4xl font-black mb-6">Characters</h3>
            <p className="text-xl">
              Arcs, power levels, relationships, rivalries.
            </p>
          </div>

          <div className="bg-red-500 text-white p-16 border-4 border-black shadow-[10px_10px_0px_#000]">
            <h3 className="text-4xl font-black mb-6">Timelines</h3>
            <p className="text-xl">
              Stories mapped visually — not boring text.
            </p>
          </div>
        </div>
      </section>

      
    </div>
  )
}