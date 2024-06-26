import { createFileRoute } from '@tanstack/react-router';
import AdminHead  from '../components/adminHead';
import UserCards from '../components/UserCards';
import UserEnd from '../components/UserEnd';
import NavBar from '$src/components/NavBar';
import SideBar from '$src/components/SideBar';

export const Route = createFileRoute('/userDashboard')({
  component: () => (
    <div className="mt-24 ml-80 mr-8">
      <NavBar/>
      <SideBar/>
      <AdminHead/>
      <UserCards/>
      <UserEnd/>

  </div>
  )
});
