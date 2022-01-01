import { Link } from "react-router-dom"

import TicketsTable from './TicketsTable'

import { UIText } from "../../config.js"

function TicketsList (props) {
  const { tickets, isSummary, path, pathText } = props

  return (
    <>
      <h3>Tickets</h3>
      { isSummary ? (
        <TicketsTable tickets={tickets} />
      ): (

        <ul>
          {tickets.map((ticket) => {
            const { email, quantity, date, tour, id } = ticket

            return (
              <li key={id}>
                <h3>{tour.name}</h3>
                <p>{UIText.ticketEmail}: {email}</p>
                <p>{UIText.ticketQuantity}: {quantity}</p>
                <p>{UIText.ticketDate}: {date}</p>
                <p>{UIText.orderReference}: {id}</p>
                <Link to={`${path}/${id}`} state={{ ticket, tour }}>
                  {pathText}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

export default TicketsList