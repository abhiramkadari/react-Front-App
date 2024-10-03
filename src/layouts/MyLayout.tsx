import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import MenuBar from "../components/MenuBar"

import { Outlet } from "react-router-dom"

export const MyLayout = () => {
  return (
    <div className="h-screen overflow-auto">
      <NavBar/>
      <div className="LayoutHeight flex ">
        <div className="menuBar">
          <MenuBar/>
        </div>
        <div className="w-full relative">
          <div className="pageHeight overflow-y-scroll">
            <Outlet/>
          </div>
          <Footer/> 
        </div>
      </div>
    </div>
  )
}
