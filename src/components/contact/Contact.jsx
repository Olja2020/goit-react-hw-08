import { Button, TextField } from "@mui/material";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { RiPhoneFill } from "react-icons/ri";
import { RiUserFill } from "react-icons/ri";
import { ModalWindow } from "../modalWindow/ModalWindow";
import { useState } from "react";
import toast from "react-hot-toast";
const Contact = ({ data: { name, number, id } }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingNumber, setIsEditingNumber] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);
  const dispatch = useDispatch();

  const handleEditNameClick = () => {
    setIsEditingName(true);
  };

  const handleEditNumberClick = () => {
    setIsEditingNumber(true);
  };

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setEditedNumber(e.target.value);
  };

  const handleSaveName = () => {
    dispatch(updateContact({ id, name: editedName }));
    setIsEditingName(false);
  };

  const handleSaveNumber = () => {
    dispatch(updateContact({ id, phone: editedNumber }));
    setIsEditingNumber(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (isEditingName) {
        handleSaveName();
      } else if (isEditingNumber) {
        handleSaveNumber();
      }
    }
  };

  return (
    <div className={css.container}>
      <div className={css.card}>
        <p className={css.name} onClick={handleEditNameClick}>
          {isEditingName ? (
            <>
              <TextField
                value={editedName}
                onChange={handleNameChange}
                className={css.textField}
                onKeyDown={handleKeyDown}
              />
            </>
          ) : (
            <>
              <RiUserFill size="25" className={css.icon} />
              {editedName}
            </>
          )}
        </p>
        <p className={css.number} onClick={handleEditNumberClick}>
          {isEditingNumber ? (
            <>
              <TextField
                value={editedNumber}
                onChange={handleNumberChange}
                className={css.textField}
                onKeyDown={handleKeyDown}
                sx={{ backgroundColor: "#deedf6" }}
              />
            </>
          ) : (
            <>
              <RiPhoneFill size="25" className={css.icon} />
              {editedNumber}
            </>
          )}
        </p>
      </div>

      <Button
        variant="contained"
        type="submit"
        sx={{ backgroundColor: "#1179f0", margin: "auto" }}
        onClick={() => setModalOpen(true)}
      >
        Delete
      </Button>
      {modalOpen && (
        <ModalWindow
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          id={id}
          handleDelete={() =>
            dispatch(deleteContact(id))
              .unwrap()
              .then(() => {
                toast.success("Сontact delete successfully");
              })
              .catch(() => {
                toast.error("Error delete contact");
              })
          }
        >
          <p>Confirm the deletion of the contact</p>
        </ModalWindow>
      )}
    </div>
  );
};

export default Contact;
