import React from "react";
import Table from "react-bootstrap/Table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Modal, Typography } from "@mui/material";
function createData(id, email, joined, status) {
  return { id, email, joined, status };
}

const rows = [
  createData("1", "nktoan@gmail.com", "19/05/2020", 0),
  createData("2", "nktoan@gmail.com", "19/05/2020", 1),
  createData("3", "nktoan@gmail.com", "19/05/2020", 0),
  createData("4", "nktoan@gmail.com", "19/05/2020", 1),
  createData("5", "nktoan@gmail.com", "19/05/2020", 0),
  createData("6", "nktoan@gmail.com", "19/05/2020", 1),
  createData("7", "nktoan@gmail.com", "19/05/2020", 0),
  createData("8", "nktoan@gmail.com", "19/05/2020", 1),
  createData("9", "nktoan@gmail.com", "19/05/2020", 0),
  createData("10", "nktoan@gmail.com", "19/05/2020", 1),
  createData("11", "nktoan@gmail.com", "19/05/2020", 0),
  createData("12", "nktoan@gmail.com", "19/05/2020", 1),
];

const UserTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>STT</th>
          <th>Email</th>
          <th>Joined</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{row.email}</td>
            <td>{row.joined}</td>
            <td>
              {row.status === 0 ? (
                <Button variant="contained">Active</Button>
              ) : (
                <Button variant="contained" color="error">
                  Deactive
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
