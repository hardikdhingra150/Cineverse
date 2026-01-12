import UniverseLayout from "./UniverseLayout"

export default function Pollywood() {
  return (
    <UniverseLayout
      title="Pollywood"
      color="bg-green-500"
      description="Punjabi cinema powered by music, culture and strong characters."
    >
      <Section title="Popular Films" items={["Jatt & Juliet", "Angrej", "Qismat"]} />
      <Section title="Icons" items={["Diljit Dosanjh", "Gippy Grewal", "Amrinder Gill"]} />
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