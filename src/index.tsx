import ReactDOM from "react-dom/client";
import { router } from "./app/router/Routes";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider } from "react-router-dom";
import { StoreProvider } from "./app/context/StoreContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StoreProvider>
    <RouterProvider router={router} />
  </StoreProvider>
);
