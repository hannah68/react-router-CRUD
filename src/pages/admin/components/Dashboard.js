import ToursList from "../../components/ToursList"

import { LocalRoutes, UIText } from "../../../config.js"

function Dashboard(props) {
  const { tours } = props

  const path = LocalRoutes.adminToursEdit
  const pathText = UIText.tourEditDelete

  return (
    <ToursList tours={tours} path={path} pathText={pathText}/>
  )
}

export default Dashboard