import React, { useState } from "react";
import classes from "../styles/Modal.module.css";
export default function Modal({ children, onClose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}>
        {" "}
      </div>

      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
