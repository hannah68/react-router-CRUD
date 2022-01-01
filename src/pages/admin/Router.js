import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import CreateTourPage from "./components/tours/CreateTour"
import EditTourPage from "./components/tours/EditTour"
import TicketsList from "../components/TicketsList"
import { LocalRoutes, UIText } from "../../config.js"

function AdminRouter (props) {
  const { tours, setTours, tickets } = props

  return (
    <>
      <h2>{UIText.adminPages}</h2>
      <nav>
        <ul>
          <li>
            <Link to={LocalRoutes.home}>{UIText.userHome}</Link>
          </li>
          <li>
            <Link to={LocalRoutes.admin}>{UIText.dashboard}</Link>
          </li>
          <li>
            <Link to={LocalRoutes.adminToursCreate}>{UIText.tourCreate}</Link>
          </li>
          <li>
            <Link to={LocalRoutes.adminTicketsSummary}>{UIText.tickets}</Link>
          </li>
        </ul>
      </nav>

      <main>

        <Routes>
          <Route path={LocalRoutes.adminHome} element={<Dashboard tours={tours} />} />
          <Route
            path={LocalRoutes.adminToursCreate}
            element={<CreateTourPage tours={tours} setTours={setTours} />}
          />
          <Route
            path={LocalRoutes.adminToursEditWithId}
            element={<EditTourPage tours={tours} setTours={setTours} />}
          />
          <Route
            path={LocalRoutes.adminTicketsSummary}
            element={
              <TicketsList
                tickets={tickets}
                isSummary={true}
              />
            }
          />
        </Routes>

      </main>
    </>
  )
}

export default AdminRouter