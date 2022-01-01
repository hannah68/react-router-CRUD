import TicketRow from "./TicketRow"

import { UIText } from "../../config.js"

function TicketsTable(props) {
  const { tickets } = props

  return (
    <table>
      <tbody>
        <tr>
          <th>{UIText.tour}</th>
          <th>{UIText.ticketEmail}</th>
          <th>{UIText.ticketQuantity}</th>
          <th>{UIText.ticketPrice}</th>
          <th>{UIText.orderTotal}</th>
          <th>{UIText.orderReference}</th>
        </tr>
        {tickets.map((ticket) => {
          return <TicketRow key={ticket.id} ticket={ticket} />
        })}
      </tbody>
    </table>
  )
}

export default TicketsTable