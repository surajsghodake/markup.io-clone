import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Post from "./components/Post.jsx";
import WorkSpace from "./components/WorkSpace.jsx";
import Setting from "./components/Setting.jsx";
import AnnotationLayout from "./components/AnnotationLayout.jsx";
import { Provider } from "react-redux";
import markupStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <WorkSpace /> },
      // { path: "/post", element: <AnnotationLayout /> },
      { path: "/setting", element: <Setting /> },
    ],
  },
  {
    path: "/post",
    element: <AnnotationLayout />,
    children: [{ path: ":postId", element: <AnnotationLayout /> }],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={markupStore}>
      <RouterProvider router={router} />
    </Provider>
    {/* <App /> */}
  </StrictMode>
);
