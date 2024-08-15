import { Navigate, Route, Routes } from "react-router-dom"
import { MaintenancePage } from "../pages/MaintenancePage"



export const MaintenanceRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <MaintenancePage/> } />

        <Route path="/*" element={ <Navigate to="/"/> } />
    </Routes>
  )
}
