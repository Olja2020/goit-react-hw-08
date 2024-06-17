//import React from "react";
//import css from "./ModalWindow.module.css";
//import { SiVerizon } from "react-icons/si";
//import { VscChromeClose } from "react-icons/vsc";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
export const ModalWindow = ({ isOpen, onClose, children, handleDelete }) => {
  return (
    //     <>
    //       {isOpen && (
    //         <div className={css.modal}>
    //           <div className={css.wrapper}>
    //             <div className={css.content}>
    //               <button className={css.buttonOne} onClick={handleDelete}>
    //                 <SiVerizon />
    //               </button>
    //               <button className={css.buttonTwo} onClick={() => onClose()}>
    //                 <VscChromeClose />
    //               </button>
    //               {children}
    //             </div>
    //           </div>
    //         </div>
    //       )}
    //     </>
    //   );
    // };

    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Видалити контакт</DialogTitle>
      <DialogContent>
        <DialogContentText>{children}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleDelete} color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
