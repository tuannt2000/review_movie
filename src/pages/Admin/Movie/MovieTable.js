import React from "react";
import Table from "react-bootstrap/Table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Modal, Typography } from "@mui/material";
import "./styles.css";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ModalEditMovie from "~/components/ModalEditMovie/ModalEditMovie";
function createData(id, movieName, rate, status) {
  return { id, movieName, rate, status };
}

const rows = [
  createData("1", "Thor", "4.5", 1),
  createData("2", "Thor", "4.5", 1),
  createData("3", "Thor", "4.5", 1),
  createData("4", "Thor", "4.5", 1),
  createData("5", "Thor", "4.5", 1),
  createData("6", "Thor", "4.5", 1),
  createData("7", "Thor", "4.5", 1),
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

const MovieTable = () => {
  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenModalAdd = () => setOpenAdd(true);
  const handleCloseModalAdd = () => setOpenAdd(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenModalEdit = () => setOpenEdit(true);
  const handleCloseModalEdit = () => setOpenEdit(false);
  return (
    <React.Fragment>
      <Button
        variant="contained"
        onClick={handleOpenModalAdd}
        className="btn__add"
      >
        <AddIcon></AddIcon>
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Movie Name</th>
            <th>Rate</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>
                <a
                  href={`/admin/movies/${row.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {row.movieName}
                </a>
              </td>
              <td>{row.rate}</td>
              <td>{row.status}</td>
              <td>
                <Button variant="contained" onClick={handleOpenModalEdit}>
                  <EditIcon></EditIcon>
                </Button>
                <Button variant="contained" color="error">
                  <DeleteIcon></DeleteIcon>
                </Button>
              </td>
              <ModalEditMovie
                open={openEdit}
                handleClose={handleCloseModalEdit}
                data={row}
              />
            </tr>
          ))}
        </tbody>
        <Modal
          open={openAdd}
          onClose={handleCloseModalAdd}
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
    </React.Fragment>
  );
};

export default MovieTable;
