export default function Universes() {
    const universes = [
      { title: "Stranger Things", color: "bg-red-500", tag: "POW!" },
      { title: "Marvel Cinematic Universe", color: "bg-blue-500", tag: "BAM!" },
      { title: "Baahubali", color: "bg-yellow-400", tag: "ZAP!" },
      { title: "Naruto", color: "bg-orange-500", tag: "WOW!" },
    ]
  
    return (
        <div className="min-h-screen bg-white px-10 py-20 border-t-8 border-black
        animate-[comicPageTurn_0.8s_ease-out]">
        <h1 className="text-5xl font-black uppercase text-center mb-16">
          Explore Universes
        </h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {universes.map((u, i) => (
            <div
              key={i}
              className={`relative group ${u.color} text-black p-10 border-4 border-black
              shadow-[10px_10px_0px_#000] transition
              hover:-translate-y-1 hover:translate-x-1 hover:shadow-none`}
            >
              <h2 className="text-3xl font-black mb-4">
                {u.title}
              </h2>
  
              <p className="font-semibold">
                Click to dive into this universe like a comic book.
              </p>
  
              {/* COMIC TAG */}
              <span className="absolute -top-6 -right-6 bg-white px-4 py-2 border-4 border-black
                font-black rotate-[-10deg] opacity-0 group-hover:opacity-100 transition">
                {u.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }