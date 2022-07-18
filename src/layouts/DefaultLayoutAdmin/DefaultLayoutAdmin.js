import React from "react";
import HeaderAdmin from "../components/HeaderAdmin/HeaderAdmin";
import './styles.css'
const DefaultLayoutAdmin = ({ children }) => {
  return (
    <div>
      <HeaderAdmin />
      <div className="container">{children}</div>
    </div>
  );
};

export default DefaultLayoutAdmin;
