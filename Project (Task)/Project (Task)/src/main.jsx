import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import RestaurantList from './RestaurantList.jsx'
// import Counter from './counter.jsx'
// import './Counter.css'
import Form from './Form.jsx'
import './Form.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RestaurantList /> */}
    {/* <Counter/> */}
    <Form />
  </StrictMode>,
)
