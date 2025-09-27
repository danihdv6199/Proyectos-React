import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TasksApp } from './05-useReducer/TaskApp'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight />d */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWitHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    <TasksApp />
  </StrictMode>,
)
