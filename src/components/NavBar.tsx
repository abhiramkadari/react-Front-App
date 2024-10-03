
const NavBar = () => {
  return (
    <div className="navbar bg-white sticky z-50 top-0 left-0 flex justify-between items-center px-5 shadow">
        <div className="flex items-center">
          <img src="@assets/twitter.svg" alt="No img" className="mr-2"/>
          <p className="font-semibold text-lg cursor-pointer">Asian Labs</p>
        </div>
        <div className="m-1 mr-2 w-8 h-8 rounded-full bg-gray text-lg cursor-pointer">
					<div className="flex justify-center items-center h-full w-full text-white cursor-pointer">
						C
					</div>
				</div>
    </div>
  )
}

export default NavBar