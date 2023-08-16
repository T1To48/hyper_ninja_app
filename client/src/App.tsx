import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import UserLayout from "./layouts/User.layout";
import { LandingPage,Forms,DashboardPage,UrlProfilePage,UserProfilePage } from "./pages/index";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  >
    <Route index element={<LandingPage/>} />
      <Route path="/register"  element={<Forms/>}/>
    <Route path="/user-area" element={<UserLayout />}>
      <Route index element={<DashboardPage/>} />
      <Route path="server-profile/:urlId" element={<UrlProfilePage/>} />
      <Route path="profile" element={<UserProfilePage/>} />
    </Route>
    </Route>
  )
);


const App = () => {
  return <RouterProvider router={router}/>
};

export default App;