import Navbar from "../ui/dashboard/navbar/navbar";
import SideBar from "../ui/dashboard/sidebar/sidebar";

async function Layout({ children }) {
  
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <SideBar />
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="bg-white shadow">
          <div className="p-4">
            <Navbar />
          </div>
        </div>
        <div className="flex-1 p-4">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
