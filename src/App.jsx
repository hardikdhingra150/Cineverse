import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useRef } from "react"

import Landing from "./pages/Landing"
import Universes from "./pages/Universes"

// Universe Pages
import Hollywood from "./pages/universes/Hollywood"
import Bollywood from "./pages/universes/Bollywood"
import Tollywood from "./pages/universes/Tollywood"
import Pollywood from "./pages/universes/Pollywood"
import Anime from "./pages/universes/Anime"
import KDrama from "./pages/universes/KDrama"

export default function App() {
  // 🔊 GLOBAL AUDIO REFS (never unmount)
  const powRef = useRef(null)
  const swooshRef = useRef(null)
  const splatRef = useRef(null)
  const unlocked = useRef(false)

  // 🔓 Unlock audio (Chrome requirement)
  const unlockAudio = () => {
    if (unlocked.current) return
    unlocked.current = true

    powRef.current.play().then(() => {
      powRef.current.pause()
      powRef.current.currentTime = 0
    }).catch(() => {})
  }

  // ▶️ Play sound safely
  const play = (ref) => {
    if (!unlocked.current || !ref.current) return
    ref.current.currentTime = 0
    ref.current.play().catch(() => {})
  }

  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* ================= LANDING ================= */}
          <Route
            path="/"
            element={
              <Landing
                unlockAudio={unlockAudio}
                playPow={() => play(powRef)}
                playSwoosh={() => play(swooshRef)}
                playSplat={() => play(splatRef)}
              />
            }
          />

          {/* ================= UNIVERSE LIST ================= */}
          <Route path="/universes" element={<Universes />} />

          {/* ================= UNIVERSE DETAILS ================= */}
          <Route path="/universes/hollywood" element={<Hollywood />} />
          <Route path="/universes/bollywood" element={<Bollywood />} />
          <Route path="/universes/tollywood" element={<Tollywood />} />
          <Route path="/universes/pollywood" element={<Pollywood />} />
          <Route path="/universes/anime" element={<Anime />} />
          <Route path="/universes/kdrama" element={<KDrama />} />

        </Routes>
      </BrowserRouter>

      {/* ================= GLOBAL AUDIO ================= */}
      <audio ref={powRef} src="/sounds/pow.mp3" preload="auto" />
      <audio ref={swooshRef} src="/sounds/swoosh.mp3" preload="auto" />
      <audio ref={splatRef} src="/sounds/splat.mp3" preload="auto" />
    </>
  )
}