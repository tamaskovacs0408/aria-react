import { useState, useRef } from "react";
import AlertDialogModalPortal from "./AlertDialogModalPortal";

import classes from "./AlertDialog.module.scss";

const textAteraValue =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatem enim consequuntur nulla vitae nisi odio velit ab odit? Odit ratione rerum consequatur aspernatur sequi pariatur quibusdam laborum excepturi voluptatem?";

export default function AlertDialog() {
  const [openModal, setOpenModal] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");

  const textAreaRef = useRef();

  function handleButtonClick() {
    setTextAreaValue(textAreaRef.current);
    setOpenModal(true);
  }

  function closeModalHandler() {
    setOpenModal(false);
  }

  return (
    <>
      <div className={classes.wrapper}>
        <label htmlFor='notes'>Notes</label>
        <textarea
          name='notes'
          id='notes'
          defaultValue={textAteraValue}
          ref={textAreaRef}
        ></textarea>
        <div className={classes["button-container"]}>
          <button>Save</button>
          <button onClick={handleButtonClick}>Discard</button>
        </div>
      </div>
      <AlertDialogModalPortal
        isModalOpen={openModal}
        modalHandler={closeModalHandler}
        textAreaValue={textAreaValue}
      />
    </>
  );
}
