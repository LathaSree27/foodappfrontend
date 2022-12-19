import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../login/Login";
const RouteRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        ></Route>
      </Routes>
    </Router>
  );
};
export default RouteRouter;
