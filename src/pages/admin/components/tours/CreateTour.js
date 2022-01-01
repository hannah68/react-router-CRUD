import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { fetchData } from "../../../../fetch.js"
import { LocalRoutes, APIEndpoints, UIText } from "../../../../config.js"

function CreateTourPage (props) {
  const { tours, setTours } = props

  const [tourToCreate, setTourToCreate] = useState({
    name: "",
    price: 0,
  })

  const [submitted, setSubmitted] = useState(false)

  // console.log('in tours create', { tourToCreate })

  const navigate = useNavigate()

  useEffect(() => {
    if (submitted) {

      const fetchOptions = {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(tourToCreate)
      }

      const fetchDataParams = {
        url: APIEndpoints.tours,
        options: fetchOptions,
        cb: createdTour => {
          setTours([...tours, createdTour])
          navigate(LocalRoutes.admin)
        }
      }

      fetchData(fetchDataParams)
      setSubmitted(false);
    }

  }, [navigate, tourToCreate, tours, setTours, submitted])

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setTourToCreate({ ...tourToCreate, [name]: value })
  }

  return (
    <>
      <h3>{UIText.tourCreate}</h3>
      <form className="form-stack" onSubmit={handleSubmit}>
        <label htmlFor="name">{UIText.tourName}</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={tourToCreate.name}
        />
        <label htmlFor="price">{UIText.tourPrice}</label>
        <input
          type="text"
          id="price"
          name="price"
          onChange={handleChange}
          value={tourToCreate.price}
        />
        <button type="submit">{UIText.tourCreate}</button>
      </form>
      <button onClick={() => navigate(LocalRoutes.admin)}>{UIText.cancel}</button>
    </>
  )
}

export default CreateTourPage