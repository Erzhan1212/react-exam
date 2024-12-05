import { createBrowserRouter } from "react-router-dom";

import MenuModal from "../components/modal/MenuModal";
import MainLayout from "../layout/MainLayout";
import ColorsModal from "../components/details/ColorModal";
import ImagesModal from "../components/details/ImageModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/menu",
    element: <MenuModal />,
  },
  { path: "/menu/colors", element: <ColorsModal /> },
  { path: "/menu/images", element: <ImagesModal /> },
]);

export default router;
