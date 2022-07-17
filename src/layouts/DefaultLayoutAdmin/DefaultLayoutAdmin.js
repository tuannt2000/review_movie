import React from "react";
import HeaderAdmin from "../components/HeaderAdmin/HeaderAdmin";

const DefaultLayoutAdmin = ({ children }) => {
  return (
    <div>
      <HeaderAdmin />
      <div className="container">{children}</div>
    </div>
  );
};

export default DefaultLayoutAdmin;
