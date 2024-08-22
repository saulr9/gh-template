import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";

const LOGO =
  "https://cleveritgroup.groowcity.com/_next/image?url=%2Fsvg%2Flogo%2Flogo-fonts-light.svg&w=256&q=75";
const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-white py-4">
      <div className="container flex items-center justify-between">
        <img src={LOGO} alt="Logo" className="mr-4" />
        <NavigationMenu>
          <NavigationMenuList className="navigation-menu-list flex gap-5">
            <NavigationMenuItem className={`navigation-menu-item `}>
              <NavigationMenuTrigger className="navigation-menu-trigger font-bold">
                Home
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem className={`navigation-menu-item `}>
              <NavigationMenuTrigger className="navigation-menu-trigger">
                History
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem className="navigation-menu-item">
              <NavigationMenuTrigger className="navigation-menu-trigger">
                Withdraw
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem className="navigation-menu-item">
              <NavigationMenuTrigger className="navigation-menu-trigger">
                Deposit
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem className="navigation-menu-item">
              <NavigationMenuTrigger className="navigation-menu-trigger">
                Logout
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
