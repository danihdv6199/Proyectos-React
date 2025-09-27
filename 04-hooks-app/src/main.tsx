import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TrafficLight } from './01-useState/TrafficLight'
import './index.css'
import { TrafficLightWithEffect } from './\'2-useEffect/TrafficLightWithEffect'
import { TrafficLightWitHook } from './\'2-useEffect/TrafficLightWithHook'
import { PokemonPage } from './03-examples/PokemonPage'
import { FocusScreen } from './04-useRef/FocusScreen'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight />d */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWitHook /> */}
    {/* <PokemonPage /> */}
    <FocusScreen />
  </StrictMode>,
)
