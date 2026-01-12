import UniverseLayout from "./UniverseLayout"

export default function Bollywood() {
  return (
    <UniverseLayout
      title="Bollywood"
      color="bg-blue-500"
      description="Hindi cinema filled with drama, emotion, romance and spectacle."
    >
      <Section title="Iconic Films" items={["Sholay", "DDLJ", "3 Idiots"]} />
      <Section title="Legends" items={["Amitabh Bachchan", "SRK", "Aamir Khan"]} />
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