
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

import OverviewPage from "./pages/Overwiev/Overwiev"
import IdeasPage from "./pages/Ideas/Ideas"
import ContactsPage from "./pages/Contacts/Contacts"
import TicketsPage from "./pages/Tickets/Tickets"
import AgentsPage from "./pages/Agents/Agents"
import ArticlesPage from "./pages/Articles/Articles"
import SettingsPage from "./pages/Settings/Settings"
import SubscriptionPage from "./pages/Subscription/Subscription"



function App() {

  return (
    <div className='flex'>
    <Navbar/>
    <div className='w-[78%] overflow-auto h-[100vh]'>
      <Routes>
        <Route path='overview' element={<OverviewPage/>} />
        <Route path='tickets' element={<TicketsPage/>} />
        <Route path='contacts' element={<ContactsPage/>} />
        <Route path='ideas' element={<IdeasPage/>} />
        <Route path='agents' element={<AgentsPage/>} />
        <Route path='articles' element={<ArticlesPage/>} />
        <Route path='articles' element={<SettingsPage/>} />
        <Route path='articles' element={<SubscriptionPage/>} />
      </Routes>
    </div>
    </div>
  )
}

export default App
