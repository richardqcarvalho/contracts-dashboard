import { Routes } from '@router'
import '@style'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'

const queryClient = new QueryClient()

const root = document.getElementById('root') as HTMLElement

createRoot(root).render(
  <QueryClientProvider client={queryClient}>
    <Routes />
  </QueryClientProvider>,
)
