import UniverseLayout from "./UniverseLayout"

export default function KDrama() {
  return (
    <UniverseLayout
      title="K-Drama"
      color="bg-pink-500"
      description="Emotion-driven Korean storytelling and unforgettable characters."
    >
      <Section title="Top Series" items={["Goblin", "Crash Landing on You", "Vincenzo"]} />
      <Section title="Fan Favorites" items={["Kim Soo-hyun", "Lee Min-ho"]} />
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