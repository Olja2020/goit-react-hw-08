//import React from "react";
import css from "./ModalWindow.module.css";
//import { ReactComponent as IconClose } from "./icon.close.svg";
import { SiVerizon } from "react-icons/si";
//import { useDispatch} from 'react-redux'
//import { deleteContact } from "../../redux/contacts/operations";
import { VscChromeClose } from "react-icons/vsc";

export const ModalWindow = (isOpen, onClose, children, handleDelete) => {
  //const dispatch = useDispatch();
  //const modalOpen = useSelector(state => state.isModalOpen);
  // const handleDelete = () => {
  //   dispatch(deleteContact(id));
  // };
  
  // if(!modalOpen) return null;
return (
    <>
      {isOpen && (
        <div className={css.modal}>
          <div className={css.wrapper}>
            <div className={css.content}>
            <p>Confirm the deletion  of the contact</p>
              <button className={css.buttonOne} onClick={handleDelete}>
                 <SiVerizon />
              </button>
              <button className={css.buttonTwo} onClick={()=>onClose()}>
                <VscChromeClose />
              </button>
               {children}
            </div>
          </div>
        </div>
      )
      }
    </>
  );
};
// ++++++++++++++++++++++++++++++++++
// import React from 'react';
// import './Modal.css';
// import {useSelector, useDispatch} from 'react-redux';
// import { isModalOpen } from '../actions/index';

// const Modal = (props) => {
//     const dispatch = useDispatch();
//     const modalOpen = useSelector(state => state.isModalOpen);

//     const closeModal = () => {
//         dispatch(isModalOpen(false));
//     }
//     if(!modalOpen) return null;
    
//     return(
//         <div id="modal-container" onClick={closeModal}>
//             <div id="modal">
//                 <span onClick={closeModal}>Close</span>
//                 <h2>Modal</h2>
//                 <p>description</p>
//                 {props.children}
//             </div>
//         </div>
//     );
// }

// export default Modal;