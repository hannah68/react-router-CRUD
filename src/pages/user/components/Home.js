import ToursList from "../../components/ToursList"

import { LocalRoutes, UIText } from "../../../config.js"

function HomePage (props) {
  const { tours } = props

  const path = LocalRoutes.toursBook
  const pathText = UIText.ticketBook

  return (
    <ToursList tours={tours} path={path} pathText={pathText}/>
  )
}

export default HomePage