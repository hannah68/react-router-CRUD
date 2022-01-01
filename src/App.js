import { Route, Routes } from "react-router"
import AdminRouter from "./pages/admin/Router"
import UserRouter from "./pages/user/Router"

import "./styles.css"

function App() {
  return (
    <Routes>
      <Route path="/*" element={<UserRouter />} />
      <Route path="/admin/*" element={<AdminRouter />} />
    </Routes>
  )
}

export default App