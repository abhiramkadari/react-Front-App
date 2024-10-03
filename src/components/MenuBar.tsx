import { useNavigate, useLocation } from "react-router-dom"


const MenuBar = () => {
  const navigate = useNavigate();
  const routePath = useLocation()

  const menus = [
    {
      optionRoute: '/myTodos',
      displayName: 'Todos',
    },
    {
      optionRoute: '/myUsers',
      displayName: 'Users',
    }
  ];

  const navigateToRoute = (comingRoute: any) => {
    navigate(comingRoute)
  }

  return (
    <div className="bg-primary overflow-y-auto h-full">
      <ul>
        {menus.map((menu: any) => (
          <li className={`cursor-pointer  ${routePath.pathname == menu.optionRoute ? 'bg-white text-black font-semibold' : 'text-white'}`}
            onClick={() => navigateToRoute(menu.optionRoute)}
          >
            <div className="h-8 p-2 mb-1 flex items-center">
              {menu.displayName}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuBar