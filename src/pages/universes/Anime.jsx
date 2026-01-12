import UniverseLayout from "./UniverseLayout"

export default function Anime() {
  return (
    <UniverseLayout
      title="Anime"
      color="bg-orange-500"
      description="Japanese animated universes with legendary character arcs."
    >
      <Section title="Famous Anime" items={["Naruto", "One Piece", "Attack on Titan"]} />
      <Section title="Icons" items={["Naruto", "Luffy", "Eren"]} />
    </UniverseLayout>
  )
}

function Section({ title, items }) {
  return (
    <div className="mb-14">
      <h2 className="text-3xl font-black mb-6">{title}</h2>
      <div className="flex flex-wrap gap-6">
        {items.map((i) => (
          <div key={i} className="bg-white px-6 py-4 border-4 border-black shadow-[6px_6px_0px_#000]">
            {i}
          </div>
        ))}
      </div>
    </div>
  )
}