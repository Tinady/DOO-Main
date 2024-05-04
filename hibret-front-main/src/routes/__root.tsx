import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { useSession } from "../hooks/useSession";
export const Route = createRootRoute({
  component: () => {
    return <App />;
  },
});
function App() {
  const { session, deleteSession } = useSession();
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="w-full">
          <NavBar />
        </div>
      </div>

    
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
