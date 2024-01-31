import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
function App() {

  const router = new createBrowserRouter([
    {
      path : "/",
      element : <MainLayout />
    }
  ])
  
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
