import { createRoot } from 'react-dom/client'
import { Provider } from './providers'
import 'tailwindcss/tailwind.css'
import './index.css'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<Provider />)
