import AuthRoutes from "@/auth/routes/AuthRoutes"
import GameShopRoutes from "@/gameShop/routes/GameShopRoutes"
import { Route, Routes } from "react-router-dom"

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<GameShopRoutes/>}/>
        <Route path="/auth/*" element={<AuthRoutes/>}/>
    </Routes>
  )
}

export default AppRouter