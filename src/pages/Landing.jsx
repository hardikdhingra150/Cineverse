import { useNavigate } from "react-router-dom"

export default function Landing({ unlockAudio, playPow, playSwoosh }) {
  const navigate = useNavigate()

  return (
    <div className="w-full font-sans text-black bg-[#fdf400] overflow-hidden">

      {/* =====================================================
          PAGE 1 — HERO (CINEMA + COMIC DESIGN ONLY HERE)
      ====================================================== */}
      <section className="relative min-h-screen flex items-center justify-center px-10">
        {/* ABSOLUTE CINEMA MEME */}
<div
  className="hidden lg:block absolute right-12 bottom-0 z-10
             animate-[float_4s_ease-in-out_infinite]"
  onMouseEnter={playSwoosh}
>
  <div className="bg-white border-4 border-black p-4
                  shadow-[10px_10px_0px_#000] rotate-[4deg]">
    <img
      src="data:image/jpeg;base64,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"
      alt="Absolute Cinema"
      className="w-64 border-2 border-black"
    />
    <p className="mt-3 text-lg font-black uppercase text-center">
      Absolute Cinema 🎬
    </p>
  </div>
</div>

        {/* HERO DECOR BLOCKS */}
        <div className="absolute top-20 left-20 w-56 h-56 bg-red-400 rotate-12 border-4 border-black shadow-[8px_8px_0px_#000]" />
        <div className="absolute bottom-24 right-32 w-40 h-40 bg-cyan-400 -rotate-12 border-4 border-black shadow-[8px_8px_0px_#000]" />
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-black rotate-45" />

        {/* FILM STRIPS */}
        <div className="absolute left-0 top-0 h-full w-14 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.3)_0px,rgba(0,0,0,0.3)_10px,transparent_10px,transparent_20px)] opacity-40" />
        <div className="absolute right-0 top-0 h-full w-14 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.3)_0px,rgba(0,0,0,0.3)_10px,transparent_10px,transparent_20px)] opacity-40" />

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">

  {/* ================= TITLE BOARD ================= */}
  <div className="inline-block rotate-[-2deg] mb-8">
    <div className="relative bg-white border-[5px] border-black px-16 py-6">

      {/* HARD COMIC SHADOW */}
      <div className="absolute inset-0 translate-x-[10px] translate-y-[10px] bg-black -z-10" />

      <h1 className="text-7xl md:text-8xl font-black uppercase tracking-wide">
        CINVERSE
      </h1>
    </div>
  </div>

  {/* ================= SUBTITLE ================= */}
  <p className="text-xl md:text-2xl font-bold mb-14 max-w-3xl mx-auto leading-relaxed">
    BOOM 💥 A comic-style universe where movies & series are explored,
    <span className="underline underline-offset-4">
      {" "}not just watched
    </span>.
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
      <section className="min-h-screen bg-yellow border-t-8 border-black px-10 py-32">
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
          {["Hollywood", "Bollywood", "Tollywood","K-Drama","Harry Potter"].map((u, i) => (
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
      <section className="min-h-screen bg-yellow border-t-8 border-black px-10 py-32">
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