import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { RiPhoneFill } from "react-icons/ri";
import { RiUserFill } from "react-icons/ri";
import { ModalWindow } from "../modalWindow/ModalWindow";
import { useState } from "react";
//import { useSelector } from "react-redux";
const Contact = ({ data: { name, number, id } }) => {

  // const {isOpen} = useSelector((store)=>Store.modal);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  // const handleDelete = () => {
       
  //    dispatch(deleteContact(id));
  // };
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
      <button className={css.btn} onClick={()=>setModalOpen(true)}>
        Delete
      </button>
      {modalOpen && (
        <ModalWindow isOpen={modalOpen} onClose={() => setModalOpen(false)} id={id} handleDelete={()=>dispatch(deleteContact(id))}>
      <p>Confirm the deletion of the contact</p>
    </ModalWindow>
      )}
      
      </div>
  );
};
export default Contact;
