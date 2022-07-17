import React from "react";
import Table from "react-bootstrap/Table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Modal, Typography } from "@mui/material";
import "./styles.css";
import { Link } from "react-router-dom";

function createData(id, movieName, rate, status) {
  return { id, movieName, rate, status };
}

const rows = [
  createData("1", "Chris Hemsworth", "4.5", 1),
  createData("2", "Thor", "4.5", 1),
  createData("3", "Chris Hemsworth", "4.5", 1),
  createData("4", "Thor", "4.5", 1),
  createData("5", "Chris Hemsworth", "4.5", 1),
  createData("6", "Thor", "4.5", 1),
  createData("7", "Chris Hemsworth", "4.5", 1),
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PeopleTable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>STT</th>
          <th>Caster Name</th>
          <th>Rate</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td><a href={`/admin/peoples/${row.id}`} style={{textDecoration:"none", color:"black"}}>{row.movieName}</a></td>
            <td>{row.rate}</td>
            <td>{row.status}</td>
            <td>
              <Button variant="contained" onClick={handleOpen}>
                <EditIcon></EditIcon>
              </Button>
              <Button variant="contained" color="error">
                <DeleteIcon></DeleteIcon>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Table>
  );
};

export default PeopleTable;