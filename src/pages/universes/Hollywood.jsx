import UniverseLayout from "./UniverseLayout"

export default function Hollywood() {
  return (
    <UniverseLayout
      title="Hollywood"
      color="bg-red-500"
      description="Global cinema with legendary franchises and iconic storytelling."
    >
      <Section title="Popular Franchises" items={["Marvel", "DC", "Star Wars"]} />
      <Section title="Famous Characters" items={["Iron Man", "Batman", "Joker"]} />
    </UniverseLayout>
  )
}

function Section({ title, items }) {
  return (
    <div className="mb-14">
      <h2 className="text-3xl font-black mb-6">{title}</h2>
      <div className="flex flex-wrap gap-6">
        {items.map((i) => (
          <div
            key={i}
            className="bg-white px-6 py-4 border-4 border-black
            shadow-[6px_6px_0px_#000]"
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  )
}