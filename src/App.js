import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Andmeldelser from "./pages/Andmeldelser";
import BookmakerSite from "./pages/BookmakerSite";
import KontaktOs from "./pages/KontaktOs";

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
    {
      path: "/kontaktOs",
      element: <KontaktOs />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
