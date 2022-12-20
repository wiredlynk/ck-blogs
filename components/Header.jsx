import { Row, Button, Logo } from "~/components";
import { routes } from "~/constants/routes";

export const Header = () => {
  const navbar = routes.navbar;

  return (
    <header>
      <nav className="py-4 md:py-6 border-gray-100 dark:border-gray-800 border-b fixed top-0 w-full backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 z-50">
        <Row>
          <div className="flex justify-between items-center">
            <div className="flex">
              <Logo />
            </div>
            <div className="space-x-8">
              {navbar.map((menu, index) => (
                <Button variant="link" href={menu.href} key={index}>
                  {menu.label}
                </Button>
              ))}
            </div>
          </div>
        </Row>
      </nav>
    </header>
  );
};
