import AuthRoutes from "@/auth/routes/AuthRoutes"
import GameShopRoutes from "@/gameShop/routes/GameShopRoutes"
import { useCheckAuth } from "@/hooks/useCheckAuth";
import { Route, Routes } from "react-router-dom"

const AppRouter = () => {

  const {status} = useCheckAuth();
    

  if( status === 'checking' ) return <h1>loading...</h1>


  return (
    <Routes>
        <Route path="/*" element={<GameShopRoutes/>}/>
        <Route path="/auth/*" element={<AuthRoutes/>}/>
    </Routes>
  )
}

export default AppRouter