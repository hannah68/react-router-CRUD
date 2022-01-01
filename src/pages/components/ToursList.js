import { Link } from "react-router-dom"
import { UIText } from "../../config.js"

function ToursList (props) {
  const { tours, path, pathText } = props

  return (
    <>
      <h3>{UIText.toursAvailable}</h3>
      <ul>
        {tours.map((tour) => {
          const { name, price, id } = tour

          return (
            <li key={id}>
              <h3>{name}</h3>
              <p>{UIText.tourPrice}: £{price}</p>
              <Link to={`${path}/${id}`} state={{ tour }}>
                {pathText}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ToursList