import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ScrambleWordsUseReducer } from './05-useReducer/ScrambleWordsUseReducer'
import './index.css'
import { MemoHook } from './06-memos/MemoHook'
import { MemoCounter } from './06-memos/MemoCounter'
import { InstagromApp } from './07-useOptimistic/InstagramApp'
import { ProfessionalApp } from './09-useContext/ProfessionalApp'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <TrafficLight />d */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWitHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <TaskAppWithReducer /> */}
    {/* <ScrambleWords /> */}
    {/* <ScrambleWordsUseReducer /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    <ProfessionalApp />
  </StrictMode>,
)
