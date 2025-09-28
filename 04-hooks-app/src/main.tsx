import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TaskAppWithReducer } from './05-useReducer/TaskAppWithReducer'
import './index.css'
import { ScrambleWords } from './05-useReducer/ScrambleWords'

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
    <ScrambleWords />
  </StrictMode>,
)
