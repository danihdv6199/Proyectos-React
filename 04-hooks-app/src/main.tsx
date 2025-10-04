import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ScrambleWordsUseReducer } from './05-useReducer/ScrambleWordsUseReducer'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight />d */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWitHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <TaskAppWithReducer /> */}
    {/* <ScrambleWords /> */}
    <ScrambleWordsUseReducer />f
  </StrictMode>,
)
