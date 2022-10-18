import React from "react";
import { ToastContainer } from "react-toastify";

import MainLayout from "./layouts/MainLayout";
import CalendarLayout from "./layouts/CalendarLayout";

import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";

export const App: React.FC = () => {
  return (
    <MainLayout>
      <CalendarLayout />
      <ToastContainer autoClose={5000} />
    </MainLayout>
  );
};
