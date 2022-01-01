import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"

import HomePage from "./components/Home"
import BookTicket from "./components/tickets/BookTicket"
import TicketsList from "../components/TicketsList"
import EditTicket from "./components/tickets/EditTicket"

import { LocalRoutes, UIText} from "../../config.js"

function UserRouter (props) {
  const { tours, tickets, setTickets } = props

  const path = LocalRoutes.ticketsEdit
  const pathText = UIText.ticketEdit

  return (
    <>
      <h2>User Pages</h2>
      <nav>
        <ul>
          <li>
            <Link to={LocalRoutes.home}>Home</Link>
          </li>
          <li>
            <Link to={LocalRoutes.tickets}>Tickets</Link>
          </li>
          <li>
            <Link to={LocalRoutes.admin}>Admin page</Link>
          </li>
        </ul>
      </nav>

      <main>

        <Routes>
          <Route path={LocalRoutes.home} element={<HomePage tours={tours}/>} />
          <Route
            path={LocalRoutes.toursBookWithId}
            element={<BookTicket tickets={tickets} setTickets={setTickets}/>}
          />
          <Route
            path={LocalRoutes.tickets}
            element={
              <TicketsList
                tickets={tickets}
                isSummary={false}
                path={path}
                pathText={pathText}
              />
            }
          />
          <Route
            path={LocalRoutes.ticketsEditWithId}
            element={<EditTicket tickets={tickets} setTickets={setTickets} />}
          />
        </Routes>

      </main>
    </>
  )
}

export default UserRouter