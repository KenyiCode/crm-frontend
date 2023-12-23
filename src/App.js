import React from "react"
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom"
import './App.css';
import {Entry} from "./pages/entry/Entry.page"
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { TicketLists } from './pages/ticket-list/TicketLists.page';
import { Ticket } from "./pages/ticket/Ticket.page"
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Entry />}/>
            
          <Route 
            path="/dashboard"
            element={<PrivateRoute><Dashboard /></PrivateRoute>} 
          />
          <Route 
            path="/add-ticket"
            element={<PrivateRoute><AddTicket /></PrivateRoute>}
          />
          <Route 
            path="/ticket-list"
            element={<PrivateRoute><TicketLists /></PrivateRoute>}
          />
          <Route 
            path="/ticket/:tid"
            element={<PrivateRoute><Ticket /></PrivateRoute>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App