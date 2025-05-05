import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App'
// import './index.css'
// import RestaurantList from './RestaurantList.jsx'
// import Counter from 'Counter.jsx'
// import './Counter.css'
import Form from './Form.jsx'
import './Form.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <RestaurantList /> */}
    {/* <Counter/> */}
    <Form />
  </StrictMode>,
)
