import UniverseLayout from "./UniverseLayout"

export default function Hollywood() {
  return (
    <UniverseLayout
      title="Hollywood"
      color="bg-red-500"
      description="Global cinema with legendary franchises and iconic storytelling."
    >
      {/* ================= HERO BANNER ================= */}
      <div className="relative mb-20 rounded-xl overflow-hidden border-4 border-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
        <img
          src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
          alt="Hollywood"
          className="w-full h-[260px] object-cover"
        />
        <h1 className="absolute bottom-8 left-8 text-5xl font-black text-white uppercase">
          Hollywood
        </h1>
      </div>

      {/* ================= FRANCHISES ================= */}
      <Section title="Popular Franchises">
        <FranchiseCard title="Marvel" color="bg-red-600" />
        <FranchiseCard title="DC" color="bg-blue-600" />
        <FranchiseCard title="Star Wars" color="bg-yellow-500" />
      </Section>

      {/* ================= CHARACTERS ================= */}
      <Section title="Famous Characters">
        <CharacterCard
          name="Iron Man"
          image="https://i.imgur.com/3ZQ3ZQm.jpg"
        />
        <CharacterCard
          name="Batman"
          image="https://i.imgur.com/6X4FJ8T.jpg"
        />
        <CharacterCard
          name="Joker"
          image="https://i.imgur.com/8RKXAIV.jpg"
        />
      </Section>
    </UniverseLayout>
  )
}

/* =====================================================
   COMPONENTS
===================================================== */

function Section({ title, children }) {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-black mb-8 uppercase">{title}</h2>
      <div className="flex flex-wrap gap-8">{children}</div>
    </div>
  )
}

function FranchiseCard({ title, color }) {
  return (
    <div
      className={`
        ${color}
        text-white px-12 py-10
        border-4 border-black
        shadow-[8px_8px_0px_#000]
        text-2xl font-black
        uppercase
        cursor-pointer
        hover:-translate-y-1 hover:translate-x-1 hover:shadow-none
        transition
      `}
    >
      {title}
    </div>
  )
}

function CharacterCard({ name, image }) {
  return (
    <div
      className="
        w-64 bg-black rounded-xl overflow-hidden
        border-4 border-black
        shadow-[8px_8px_0px_#000]
        hover:-translate-y-1 hover:translate-x-1 hover:shadow-none
        transition
      "
    >
      <img
        src={image}
        alt={name}
        className="w-full h-80 object-cover"
      />
      <div className="p-4 bg-black text-white font-black text-lg">
        {name}
      </div>
    </div>
  )
}