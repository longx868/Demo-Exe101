import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { BookingPage } from "./pages/BookingPage";
import { MyBookingsPage } from "./pages/MyBookingsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "services/:category", Component: ServicesPage },
      { path: "service/:id", Component: ServiceDetailPage },
      { path: "booking/:id", Component: BookingPage },
      { path: "my-bookings", Component: MyBookingsPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
