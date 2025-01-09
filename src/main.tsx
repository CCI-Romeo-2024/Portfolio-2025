import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@css/reset.css'
import '@css/global.scss'

import MacOS from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MacOS/>
    </StrictMode>,
)
