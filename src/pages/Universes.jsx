import { useNavigate } from "react-router-dom"

export default function Universes() {
  const navigate = useNavigate()

  const universes = [
    {
      id: "hollywood",
      title: "Hollywood",
      description: "Global cinema, franchises & iconic storytelling.",
      color: "bg-red-500",
      tag: "POW!",
    },
    {
      id: "bollywood",
      title: "Bollywood",
      description: "Hindi cinema with drama, romance & spectacle.",
      color: "bg-blue-500",
      tag: "BAM!",
    },
    {
      id: "tollywood",
      title: "Tollywood",
      description: "Telugu cinema with epic worlds & mass heroes.",
      color: "bg-yellow-400",
      tag: "ZAP!",
    },
    {
      id: "pollywood",
      title: "Pollywood",
      description: "Punjabi cinema driven by music & culture.",
      color: "bg-green-500",
      tag: "DESI!",
    },
    {
      id: "anime",
      title: "Anime",
      description: "Japanese animated universes & legendary arcs.",
      color: "bg-orange-500",
      tag: "WOW!",
    },
    {
      id: "kdrama",
      title: "K-Drama",
      description: "Korean storytelling with emotion & depth.",
      color: "bg-pink-500",
      tag: "LOVE!",
    },
  ]

  return (
    <div
      className="min-h-screen bg-white px-10 py-24 border-t-8 border-black
      animate-[comicPageTurn_0.8s_ease-out]"
    >
      {/* ================= TITLE ================= */}
      <h1 className="text-5xl md:text-6xl font-black uppercase text-center mb-20">
        Choose Your Universe
      </h1>

      {/* ================= UNIVERSE GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 max-w-7xl mx-auto">
        {universes.map((u) => (
          <div
            key={u.id}
            onClick={() => navigate(`/universes/${u.id}`)}
            className={`
              relative cursor-pointer group
              ${u.color} text-black p-10
              border-4 border-black
              shadow-[10px_10px_0px_#000]
              transition-all duration-200
              hover:-translate-y-2 hover:translate-x-2 hover:shadow-none
            `}
          >
            {/* TITLE */}
            <h2 className="text-3xl font-black mb-4 uppercase">
              {u.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="font-semibold text-lg">
              {u.description}
            </p>

            {/* COMIC TAG */}
            <span
              className="
                absolute -top-6 -right-6
                bg-white px-4 py-2
                border-4 border-black
                font-black text-lg
                rotate-[-10deg]
                opacity-0 scale-75
                group-hover:opacity-100 group-hover:scale-100
                transition
              "
            >
              {u.tag}
            </span>
          </div>
        ))}
      </div>

      {/* ================= FOOTNOTE ================= */}
      <p className="text-center mt-24 font-bold text-lg">
        Every universe is explored like a comic book 📖
      </p>
    </div>
  )
}