import { Button } from "@mui/material";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { RiPhoneFill } from "react-icons/ri";
import { RiUserFill } from "react-icons/ri";
import { ModalWindow } from "../modalWindow/ModalWindow";
import { useState } from "react";

const Contact = ({ data: { name, number, id } }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div className={css.card}>
        <p className={css.name}>
          <RiUserFill size="25" className={css.icon} />
          {name}
        </p>
        <p className={css.number}>
          <RiPhoneFill size="25" className={css.icon} />
          {number}
        </p>
      </div>

      <Button
        variant="contained"
        type="submit"
        sx={{ backgroundColor: "#0088ff", margin: "auto" }}
        onClick={() => setModalOpen(true)}
      >
        Delete
      </Button>
      {modalOpen && (
        <ModalWindow
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          id={id}
          handleDelete={() => dispatch(deleteContact(id))}
        >
          <p>Confirm the deletion of the contact</p>
        </ModalWindow>
      )}
    </div>
  );
};
export default Contact;
