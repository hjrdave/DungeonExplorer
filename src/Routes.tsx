import React from "react";
import { Route, Routes as RoutesRR, Outlet } from "react-router-dom";
import Home from "./scenes/Home";

export default function Routes() {
  return (
    <RoutesRR>
      <Route path={"/"} element={<Outlet />}>
        <Route index element={<Home />} />
      </Route>
    </RoutesRR>
  );
}
