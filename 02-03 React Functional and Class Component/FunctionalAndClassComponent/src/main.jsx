import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App, Header } from './App.jsx'
// import TableClass from './components/TableClass.jsx'
import ClassParent from './components/ClassParent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App name="Shewag" />
    <App name="Ganguly" />
    <App name="Tendulkar" />
    <App name="Dravid" />
    <App name="Laxman" age="25" /> */}
    <App />
    {/* <TableClass /> */}
    {/* <Header /> */}

  </StrictMode>,
)
