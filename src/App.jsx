import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useRef } from "react"
import Landing from "./pages/Landing"
import Universes from "./pages/Universes"

export default function App() {
  const powRef = useRef(null)
  const swooshRef = useRef(null)
  const splatRef = useRef(null)
  const unlocked = useRef(false)

  const unlockAudio = () => {
    if (unlocked.current) return
    unlocked.current = true
    powRef.current.play().then(() => {
      powRef.current.pause()
      powRef.current.currentTime = 0
    })
  }

  const play = (ref) => {
    if (!unlocked.current || !ref.current) return
    ref.current.currentTime = 0
    ref.current.play()
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
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
          <Route path="/universes" element={<Universes />} />
        </Routes>
      </BrowserRouter>

      {/* GLOBAL AUDIO (NEVER UNMOUNTS) */}
      <audio ref={powRef} src="/sounds/pow.mp3" preload="auto" />
      <audio ref={swooshRef} src="/sounds/swoosh.mp3" preload="auto" />
      <audio ref={splatRef} src="/sounds/splat.mp3" preload="auto" />
    </>
  )
}