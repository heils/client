import ReactDOM from "react-dom/client";
import { router } from "./app/router/Routes";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider } from "react-router-dom";
import { StoreProvider } from "./app/context/StoreContext";
import { Provider } from "react-redux";
import { store } from "./app/util/configureStore";
import { fetchProductsAsync } from "./features/catalog/catalogSlice";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
store.dispatch(fetchProductsAsync());
root.render(
  <StoreProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StoreProvider>
);
