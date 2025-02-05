import { Routes } from '@router'
import '@styles'
import { createRoot } from 'react-dom/client'

const root = document.getElementById('root') as HTMLElement

createRoot(root).render(<Routes />)
