import UniverseLayout from "./UniverseLayout"

export default function Tollywood() {
  return (
    <UniverseLayout
      title="Tollywood"
      color="bg-yellow-400"
      description="Epic Telugu cinema with mass heroes and grand storytelling."
    >
      <Section title="Blockbusters" items={["Baahubali", "RRR", "Pushpa"]} />
      <Section title="Stars" items={["Prabhas", "Allu Arjun", "Jr NTR"]} />
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