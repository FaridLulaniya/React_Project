import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RestaurantList from './RestaurantList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RestaurantList />
  </StrictMode>,
)
