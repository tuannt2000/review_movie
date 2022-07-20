import Table from "react-bootstrap/Table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Modal, Typography } from "@mui/material";
import "./styles.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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

const PeopleList = ({ currentItems }) => {
  const [open, setOpen] = useState(false);
  const [people, setPeople] = useState({});
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>STT</th>
          <th>Caster Name</th>
          <th>Avatar</th>
          <th>Profession</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {currentItems &&
          currentItems.map((people, index) => (
            <tr key={people.people_id}>
              <td>{index}</td>
              <td>
                <a
                  href={`/admin/people/${people.people_id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {people.name}
                </a>
              </td>
              <td>
                <img
                  src={"https://image.tmdb.org/t/p/w500" + people.image}
                  alt="/"
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>{people.profession}</td>
              <td>
                <Button variant="contained" onClick={() => handleOpen(people)}>
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
            {people.id}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Table>
  );
};

export default PeopleList;
