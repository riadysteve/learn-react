import React from "react";
import "./App.scss";

// components
import Breadcrumb from "./components/Breadcrumb";
import Header from "./components/Header";
import Product from "./components/Product";
import Spec from "./components/Spec";

const App = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Product />
      <Spec />
    </>
  );
};

export default App;
