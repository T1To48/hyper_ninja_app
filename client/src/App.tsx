import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import UserLayout from "./layouts/User.layout";
import DashboardPage from "./pages/userArea/Dashboard.page";
import UrlProfilePage from "./pages/userArea/UrlProfile.page";
// import { useReviver } from "./hooks/useReviver";
import Register from "./pages/general/Register.page";
import UserProfilePage from "./pages/userArea/UserProfile.page";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  >
    <Route index element={<h1 style={{margin:"100px"}}> LANDING PAGE</h1>} />
      <Route path="/register"  element={<Register/>}/>
    <Route path="/user-area" element={<UserLayout />}>
      <Route index element={<DashboardPage/>} />
      <Route path="server-profile/:urlId" element={<UrlProfilePage/>} />
      {/* <Route path="switch" element={<OnOffBtn checked={true}/>} /> */}
      <Route path="profile" element={<UserProfilePage/>} />
    </Route>
    </Route>
  )
);


const App = () => {
  // useReviver()
  return <RouterProvider router={router}/>
};

export default App;