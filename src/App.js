import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Andmeldelser from "./pages/Andmeldelser";
import BookmakerSite from "./pages/BookmakerSite";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/votes",
      element: <Andmeldelser />,
    },
    {
      path: "/bookmaker/:bookmaker",
      element: <BookmakerSite />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
