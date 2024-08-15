import { Navigate, Route, Routes } from "react-router-dom"

import { ChekingAuth } from "../ui/components/ChekingAuth"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { MaintenanceRoutes } from "../maintenance/routes/MaintenanceRoutes"
import { useCheckAuth } from "../hooks"

export const AppRouter = () => {

  const status = useCheckAuth();

  if( status === 'checking') {
    return <ChekingAuth />
  }

  return (
    <Routes>
        
        {
          (status === 'autenticated')
            ?  <Route path="/*" element={ <MaintenanceRoutes/> } />
            : <Route path="/auth/*" element={ <AuthRoutes/> } />
        }  

        <Route path="/*" element={ <Navigate to='/auth/login' /> } />

    </Routes>

  )
}
